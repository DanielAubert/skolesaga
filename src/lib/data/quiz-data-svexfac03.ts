import type { QuizQuestion } from './quiz-data';

const quizData_svexfac03: Record<string, QuizQuestion[]> = {
  'svexfac03-0-1': [
    {
      question: "Hvor mange skriftlige oppgaver tilbys på eksamen i gjeldende regime, og hvor mange skal besvares?",
      options: ["Fem tilbys, og tre av dem skal besvares", "Fire tilbys, og to av dem skal besvares", "Seks tilbys, tre skal besvares", "Tre tilbys, og alle tre skal besvares; ingen kan velges bort"],
      explanation: "I gjeldende regime får kandidaten fem oppgaver og skal besvare tre av dem, hver til 25 % av karakteren. De øvrige tallene beskriver former som ikke er i bruk. Å svare på flere enn tre er feil #16 i bokas register, og den koster tid uten å gi uttelling.",
    },
    {
      question: "Hva er poengsystemet i flervalgsdelen?",
      options: ["+1 for riktig, −0,33 for galt og 0 for blankt", "+1 for riktig, −1 for galt og 0 for blankt, og galt svar nuller ut riktig", "+1 for riktig og 0 for både galt og blankt", "+2 for riktig, −0,5 for galt og 0 for blankt, slik at gjetting straffes hardt"],
      explanation: "Poengsystemet er +1 / −0,33 / 0. Det er nettopp den lave straffen for galt svar som gjør at det lønner seg å gjette når du kan utelukke minst ett alternativ, og å la stå blankt når du ikke kan utelukke noe.",
    },
    {
      question: "Hva består de doble beståkravene i?",
      options: ["Begge delene må bestås hver for seg, og minst to av de tre besvarte skriftlige oppgavene må ha E eller bedre", "Begge delene må bestås hver for seg, og alle de tre besvarte skriftlige oppgavene må ha E eller bedre", "Samlet karakter må være E eller bedre, og flervalgsdelen må ha minst halv poengsum", "Flervalgsdelen må bestås, mens de skriftlige oppgavene bare vurderes samlet"],
      explanation: "Kravet har to ledd: hver del for seg, og et minstekrav om at to av de tre besvarte skriftlige oppgavene holder E eller bedre. Det er derfor et hoppet ledd i én oppgave kan bli dyrt, og det er derfor flervalgsdelen har vetorett selv om den bare teller 25 %.",
    },
    {
      question: "Hvorfor beskrives flervalgsdelen som den billigste måten å stryke på?",
      options: ["Fordi den må bestås for seg selv, selv om den bare teller en fjerdedel av karakteren", "Fordi den teller mer enn de tre skriftlige oppgavene gjør til sammen, og dermed avgjør karakteren", "Fordi den rettes strengere enn den skriftlige delen blir rettet, slik at terskelen for å bestå ligger høyere der", "Fordi den ikke kan tas om igjen senere i samme semester"],
      explanation: "Delen teller 25 %, men har vetorett: stryker du der, hjelper det ikke at de skriftlige oppgavene er gode. En kandidat som planlegger bort Del I til slutten av eksamenstiden, tar derfor en unødig stor risiko.",
    },
    {
      question: "Hva er den viktigste endringen som skjedde med eksamensformen fra og med V2023?",
      options: ["Kandidaten gikk fra ett langt essay til tre korte, komplette besvarelser", "Flervalgsdelen ble innført for første gang i emnets historie, og fantes ikke i det forrige regimet", "Antall tilbudte skriftlige oppgaver ble redusert fra fem til to valgfrie oppgaver", "Eksamen gikk fra å være skoleeksamen til å bli hjemmeeksamen"],
      explanation: "Overgangen fra ett langt essay til tre korte, valgt blant fem oppgaver fra ulike deler av pensum, er den endringen som betyr mest for lesestrategien: bredde slår nå dybde. Flervalgsdelen fantes også i det forrige regimet, men veide mer der.",
    },
    {
      question: "Hva er en temaklynge i denne boka?",
      options: ["En gruppe eksamensoppgaver som spør om det samme pensumområdet, selv om formuleringene varierer", "En samling kapitler som deler samme pensumforfatter som avsender", "En gruppe oppgaver som er gitt i samme eksamenstermin, og som derfor vurderes under ett", "En liste over begreper som ofte forveksles med hverandre på eksamen"],
      explanation: "Klyngen er bokas hovedenhet fordi den svarer på hvordan et sett settes sammen: de fem oppgavene hentes nesten alltid fra fem forskjellige klynger. Det er temaet som binder klyngen sammen, ikke terminen, forfatteren eller forvekslingsfaren.",
    },
    {
      question: "Hvor mange av de 35 oppgavene i gjeldende regime har klima, miljø eller bærekraft som ramme, case eller obligatorisk kilde?",
      options: ["13 av 35 oppgaver, fordelt på alle sju terminene", "3 av 35 oppgaver, fordelt på tre av terminene", "22 av 35 oppgaver, fordelt på alle sju terminene", "5 av 35 oppgaver, fordelt på fem av terminene"],
      explanation: "Klimarammen dekker 13 av 35 oppgaver i gjeldende regime og opptrer i 7 av 7 terminer. Tallet 3 gjelder klyngen normativ argumentasjon og bærekraftsdiskurser som eget tema, og 5 gjelder de tyngste enkeltklyngene — rammen er noe annet enn klyngen.",
    },
    {
      question: "Hva er et kjennetegn ved oppgaveheftet eksamensoppgavene hentes fra?",
      options: ["Det inneholder 18 oppgaver og har vært tilgjengelig hele semesteret", "Det inneholder 35 oppgaver og offentliggjøres først på eksamensdagen", "Det inneholder 25 oppgaver og fornyes fullstendig hvert semester", "Det inneholder 5 oppgaver og trekkes tilfeldig fra et større arkiv ingen ser på forhånd"],
      explanation: "Heftet har 18 oppgaver, har vært tilgjengelig hele semesteret og fornyes bare delvis. Tallet 35 er antall skriftlige oppgaver i gjeldende regime, og 25 er antall spørsmål i flervalgsdelen — begge er andre størrelser.",
    },
    {
      question: "Hva er en oppgavefamilie?",
      options: ["En oppgaveformulering som er gitt flere ganger, ord for ord eller med små justeringer", "En gruppe oppgaver som handler om samme pensumforfatter og forberedes samlet", "En oppgave som består av flere ledd med hver sin sjanger", "En samling oppgaver som er gitt i samme termin"],
      explanation: "Familien er en gjentatt formulering, ikke et tema og ikke et oppgavesett. Arkivet dokumenterer tolv slike familier i de to nyeste eksamensordningene, og det er derfor trening på gamle oppgaveformuleringer er direkte relevant.",
    },
    {
      question: "Hva er en sensorveiledning?",
      options: ["Et dokument som beskriver forventede momenter på hvert karakternivå, skrevet før besvarelsene leses", "Et løsningsforslag som viser hvordan oppgaven burde vært besvart", "En oppsummering av hvilke feil kandidatene faktisk gjorde, skrevet etter at besvarelsene er lest", "En liste over begreper kandidaten må ha med for å bestå oppgaven"],
      explanation: "Veiledningen skrives til sensor før besvarelsene er lest, og den beskriver forventninger — ikke observerte feil og ikke et svar. Den lister momenter, ofte med den uttrykkelige merknaden at listen er forslag og ikke en sjekkliste som må krysses av.",
    },
    {
      question: "Hvorfor kan et tall med nevner 21 terminer ikke sammenlignes direkte med et tall med nevner 35 oppgaver?",
      options: ["Fordi enhetene er ulike, og fordi de tre eksamensordningene tilbød ulikt antall oppgaver per termin", "Fordi det ene tallet er talt opp mens det andre bare er anslått", "Fordi tallet 21 gjelder skriftlige oppgaver, mens tallet 35 gjelder flervalgsdelen", "Fordi de to tallene gjelder ulike fakulteter ved samme universitet"],
      explanation: "Det ene teller terminer over hele arkivet, det andre oppgaver i gjeldende regime, og ordningene tilbød henholdsvis fire korte spørsmål med én lang oppgave, to essayvalg og fem oppgaver per termin. Begge tallene er talt opp; det er sammenligningen som er ugyldig.",
    },
    {
      question: "Hva viser funksjonalismens historie i eksamensarkivet?",
      options: ["At et lavfrekvent tema kan ligge nede i mange år og likevel komme tilbake", "At temaer som er utfaset, aldri kommer tilbake på eksamen", "At de mest frekvente temaene alltid har vært de samme siden 2012, og utgjør en fast pensumkjerne", "At sensorveiledningene systematisk varsler på forhånd når et tema skal komme tilbake"],
      explanation: "Funksjonalismen ble prøvd i H2013, lå deretter nede i elleve år og kom tilbake i H2024. Lavfrekvens er derfor en grunn til å bruke færre minutter på et tema, aldri en grunn til å hoppe over det.",
    },
  ],
  'svexfac03-0-2': [
    {
      question: "Hva er de fire trinnene i et redegjørelsesledd?",
      options: ["Avgrens, definer med avsender, sett opp mot kontrastbegrepet, presiser grensetilfellet", "Definer begrepet, gi et eksempel, drøft det kort, og konkluder med et forbehold", "Introduser, gjengi teorien, gjengi kritikken, oppsummer", "Velg posisjon, forsvar den, nevn innvendingen, avvis den"],
      explanation: "Redegjørelsesleddet har fire trinn i denne rekkefølgen, og bestillingen er nesten alltid et begrepspar. De øvrige beskrivelsene passer på andre sjangre: eksempeloppgaven, et referat og drøftingsleddet.",
    },
    {
      question: "Hva er trinn tre og fire i en eksempeloppgave, altså de to som skiller besvarelsene?",
      options: ["Å si hvilken mekanisme som svarer til hvilket ledd i begrepet, og hva som ville gjort eksempelet dårlig", "Å gi to eksempler i stedet for ett, og å velge det beste av dem", "Å hente eksempelet fra pensumlitteraturen, og å oppgi hvilken tekst og hvilken forfatter", "Å knytte eksempelet til en teoretiker, og å nevne en motstander"],
      explanation: "Trinn én og to — å navngi begrepet og gi eksempelet — klarer nesten alle. Forskjellen ligger i å skrive ut koblingen og i å si hva som ville gjort eksempelet til et dårlig eksempel, og det er dette en sensorveiledning fra H2021 ber sensor kontrollere.",
    },
    {
      question: "Hva sier sensorveiledningene om saksfeltet i en anvendelsesoppgave?",
      options: ["At det ikke gir uttelling i seg selv, og at det er apparatet som måles", "At det bør beskrives grundig, siden analysen hviler på det, og at detaljkunnskap gir uttelling", "At det teller like mye som apparatet når casen er kompleks", "At det bør erstattes med et eksempel fra pensum overalt der det lar seg gjøre"],
      explanation: "Tre veiledninger sier dette uttrykkelig: oppgaven er ikke en oppgave om saken, klimarelatert kunnskap skal ikke vektlegges i seg selv, og detaljkunnskap skal ikke telle. Saksbeskrivelsen skal derfor være akkurat lang nok til å bære analysen.",
    },
    {
      question: "Hva er minimumskravet i et drøftingsledd, ifølge sensorveiledningene?",
      options: ["Ett argument, enten for eller mot", "Ett argument for og ett argument mot", "Minst tre relevante argumenter med kilde", "En konklusjon med forbehold, uansett antall argumenter"],
      explanation: "Graderingen er uvanlig eksplisitt: minimumskravet er ett argument, gode besvarelser gir flere relevante, og sterke besvarelser gir både for og mot. Å ha begge sider er altså det som kjennetegner en sterk besvarelse, ikke minstekravet.",
    },
    {
      question: "Hva kjennetegner C-nivået i sensorveiledningenes beskrivelse?",
      options: ["Tilfredsstillende gjengivelse, jevnt god forståelse og en viss selvstendighet", "Presis gjengivelse, svært god forståelse og høy grad av selvstendighet i anvendelsen", "Varierende kunnskaper, med anvendelse som røper variabel forståelse fra ett avsnitt til det neste", "Noe kunnskap, med anvendelse som røper svak forståelse"],
      explanation: "C beskrives med jevnt god forståelse og en viss selvstendighet, og er en god og vanlig karakter. Beskrivelsene med svært god forståelse, varierende kunnskaper og svak forståelse hører til henholdsvis A, D og E.",
    },
    {
      question: "Hva skiller A-nivået fra C-nivået, ifølge veiledningene?",
      options: ["Hva kandidaten gjør med kunnskapen, altså anvendelse og selvstendighet", "Hvor mange begreper og teoretikere besvarelsen rekker å nevne innenfor tiden", "Hvor lang besvarelsen er, gitt tiden som er til rådighet", "Hvor mange av momentene i veiledningens liste som er dekket, siden full dekning alene gir A"],
      explanation: "Gjengivelse er en forutsetning på alle nivåer, og det som varierer er anvendelsen og selvstendigheten. Å tvinge inn alle momentene fra en liste gir tvert imot en dårligere besvarelse, ifølge en veiledning fra H2020.",
    },
    {
      question: "Hva skjer med en oppgave der minimumskriteriene ikke er innfridd på ett av leddene?",
      options: ["De øvrige leddene må være klart innfridd for at oppgaven skal unngå stryk", "Oppgaven strykes automatisk, uansett hvor sterke de øvrige leddene i besvarelsen er", "Leddet trekkes fra, og oppgaven vurderes ut fra de resterende leddene som om det ikke var etterspurt", "Det får ingen konsekvens så lenge helheten holder E-nivå"],
      explanation: "En veiledning fra V2022 har den mest presise formuleringen: svikter to ledd, stryker kandidaten på oppgaven, og svikter ett, må de øvrige være klart innfridd. Oppgaven vurderes altså ikke som en sum der et sterkt ledd kompenserer for et tomt.",
    },
    {
      question: "Hva betyr bokas mantra «anvendelse slår mengde»?",
      options: ["At et avsnitt som bruker kunnskapen er verdt mer enn et som legger til kunnskap", "At en kort besvarelse alltid vurderes høyere enn en lang besvarelse", "At eksempler teller mer enn definisjoner i alle sjangre", "At teori bør utelates til fordel for konkrete caser"],
      explanation: "Mantraet er en beskrivelse av karakterskalaen: gjengivelse er forutsatt på alle nivåer, mens anvendelse og selvstendighet er det som flytter kandidaten oppover. Det sier ingenting om at kort er bedre enn langt, eller at teori bør vike.",
    },
    {
      question: "Hva er den skarpeste nye kvalitetsskranken i materialet, fra og med V2025?",
      options: ["At besvarelsen skal vise at kandidaten har lest pensum, ikke bare fulgt undervisningen", "At alle oppgaver må besvares med minst to teoretikere", "At drøftingsleddet må inneholde en eksplisitt konklusjon", "At egne eksempler alltid må hentes fra kandidatens eget fagområde"],
      explanation: "Setningen står under hver av de fem oppgavene i V2025 og er løftet til generell regel for hele den skriftlige delen i H2025 og V2026. Motstykket som straffes, er å parafrasere forelesningen eller ramse opp fra undervisningsplansjer.",
    },
    {
      question: "Hva sier en sensorveiledning fra H2020 om lister av begreper i oppgaveteksten?",
      options: ["At de er forslag som kan, men ikke må, benyttes", "At alle momentene må dekkes for å bestå", "At de skal behandles i den rekkefølgen de står oppført", "At de bare gjelder kandidater som velger den lengste besvarelsesformen"],
      explanation: "Veiledningen sier uttrykkelig at listen er forslag, og at å tvinge inn alle punktene gir en dårligere besvarelse. Å lese listen som en sjekkliste er feil #3 i bokas register.",
    },
    {
      question: "Hva er den vanligste formen for feil #12 i en besvarelse?",
      options: ["At eksempelet er relevant, men at koblingen til begrepet bare konstateres", "At eksempelet er hentet fra pensum i stedet for fra kandidaten", "At det gis flere eksempler enn oppgaven ber om", "At eksempelet er for langt i forhold til redegjørelsen"],
      explanation: "Feilen er at begrunnelsen mangler, ikke at eksempelet er galt. Veiledningene beskriver besvarelser på D-nivå nettopp slik: eksemplene er relevante, men begrunnelsene svake.",
    },
    {
      question: "Hva vurderes positivt ifølge en sensorveiledning fra H2020, når oppgaven er åpen?",
      options: ["At kandidaten tolker oppgaven eksplisitt i innledningen", "At kandidaten velger en annen oppgave enn den åpne", "At kandidaten dekker alle mulige tolkninger av oppgaven etter tur", "At kandidaten venter med tolkningen til konklusjonen, slik at drøftingen holdes åpen"],
      explanation: "Veiledningen framhever at gode besvarelser selv bidrar til å definere kriteriene ved å si hvordan de leser oppgaven. Å dekke alle tolkninger er derimot en variant av sjekklistefella.",
    },
    {
      question: "Hva er hovedforskjellen på eksempeloppgaven og anvendelsesoppgaven?",
      options: ["I eksempeloppgaven lager du casen selv, mens anvendelsesoppgaven gir deg den", "I eksempeloppgaven drøfter du, i anvendelsesoppgaven gjengir du", "I eksempeloppgaven er avsenderen viktigst, mens anvendelsesoppgaven krever flere teoretikere", "I eksempeloppgaven teller saksfeltet, mens anvendelsesoppgaven måler apparatet"],
      explanation: "Skillet ligger i hvor casen kommer fra: du konstruerer den selv i eksempeloppgaven, og får den utlevert i anvendelsesoppgaven. Saksfeltet gir uttelling i ingen av dem — det er nettopp derfor den utleverte casen er en felle.",
    },
    {
      question: "Hva bør drøftingsleddet trekke på?",
      options: ["Kandidatens eget redegjørelsesledd fra samme oppgave", "En annen oppgave i settet, for å vise bredde på tvers av pensumdelene", "Ett nytt begrep som ikke er nevnt tidligere i besvarelsen", "En oppsummering av det som allerede er sagt i redegjørelsen"],
      explanation: "Drøftingen skal bygge på det kandidaten selv har etablert, og aldri starte på nytt. Men den skal si noe nytt — en oppsummering av redegjørelsen er ikke en drøfting.",
    },
    {
      question: "Hvordan bør tiden fordeles i en oppgave der første ledd sier «gjør kort rede for» og siste ledd sier «drøft»?",
      options: ["Skjevt mot drøftingsleddet, siden «kort» er en instruks", "Jevnt mellom leddene, siden begge teller like mye uansett hvordan de er formulert", "Skjevt mot redegjørelsen, siden den bærer resten av svaret", "Etter hvor mange begreper hvert ledd nevner i oppgaveteksten"],
      explanation: "Ordet «kort» er en instruks, ikke en høflighet, og en veiledning fra H2022 straffer den som ikke følger oppgavens egen disponering. En veiledning fra V2020 sier tilsvarende at den som får noe ut av det mest krevende leddet, ligger an til toppkarakter.",
    },
    {
      question: "Hva er E-nivået i sensorveiledningenes beskrivelse?",
      options: ["Noe kunnskap, med anvendelse som røper svak forståelse og liten selvstendighet", "Store hull i kunnskapen, med anvendelse som røper manglende forståelse av det sentrale stoffet", "Varierende kunnskaper, med anvendelse som røper variabel forståelse", "Tilfredsstillende gjengivelse, med jevnt god forståelse og en viss selvstendighet"],
      explanation: "E er bestått, og beskrives med noe kunnskap og svak forståelse. Beskrivelsene med store hull, varierende kunnskaper og tilfredsstillende gjengivelse hører til henholdsvis F, D og C — og E er langt fra verdiløs, siden to av tre oppgaver må holde minst dette nivået.",
    },
  ],
  'svexfac03-1-1': [
    {
      question: "Hva er en menneskemodell?",
      options: ["En forenklet antakelse om hva som driver mennesker, brukt i forskning og politikk", "En moralsk forestilling om hva mennesket bør være og strebe etter", "En statistisk beskrivelse av hvordan folk i gjennomsnitt oppfører seg", "En teori som gjør krav på å si hva mennesket egentlig er"],
      explanation: "Modellen er en arbeidsantakelse laget for å forklare eller påvirke, ikke en påstand om menneskets natur. Begrepet er hentet fra Balsvik, og forenklingen er dens definisjon — ikke dens svakhet.",
    },
    {
      question: "Hva skiller en menneskemodell fra et menneskesyn?",
      options: ["Modellen er en avgrenset arbeidsantakelse, mens menneskesynet er bredere og verdiladet", "Modellen er individuell, mens menneskesynet gjelder samfunnet som helhet, og de skiller seg i analysenivå", "Modellen er empirisk etterprøvbar, mens menneskesynet er en ren spekulasjon uten belegg", "Modellen brukes i politikk, mens menneskesynet bare brukes i forskning"],
      explanation: "Menneskesynet er en bredere forestilling om hva mennesket er og bør være; modellen er laget for å løse en bestemt oppgave. Klassikernes menneskesyn er et eget eksamenstema, mens en avgift hviler på en modell.",
    },
    {
      question: "Hva kjennetegner en aktiv menneskemodell?",
      options: ["At handlingen forklares ved at personen vurderer og velger", "At personen framstilles som energisk av natur", "At tiltaket krever aktiv deltakelse fra den det retter seg mot", "At forklaringen viser til krefter som personen ikke rår over"],
      explanation: "Den aktive modellen lar forklaringen gå gjennom personens egne vurderinger. Det handler ikke om personlighet eller om hvor mye innsats tiltaket krever, og den siste beskrivelsen gjelder den passive modellen.",
    },
    {
      question: "Hva kjennetegner en passiv menneskemodell?",
      options: ["At atferden forklares ved krefter utenfor eller under personens kontroll", "At personen framstilles som viljeløs og uten evne til å bestemme noe selv i det hele tatt", "At tiltaket er tvingende og ikke gir noe reelt valg", "At forklaringen bygger på biologi framfor på sosiale forhold, slik at arv og kjemi bærer forklaringen"],
      explanation: "Forklaringen går ikke veien om personens overveielser, men det betyr ikke at hun er viljeløs. Tvang er en annen akse, og biologi er bare den ene av to familier passive modeller.",
    },
    {
      question: "Hva er testen på hvilken menneskemodell et tiltak forutsetter?",
      options: ["Om tiltaket kan virke uten at noen tar stilling til noe", "Om tiltaket er frivillig eller tvingende", "Om tiltaket er utformet av myndigheter eller av private aktører", "Om tiltaket virker raskt eller først etter lengre tid, siden tempoet avgjør modellen"],
      explanation: "Kan tiltaket virke uten at noen vurderer noe, forutsetter det en passiv modell. Frivillighet er en annen akse: et forbud er tvingende og forutsetter likevel en aktiv modell, siden det virker gjennom en avveining av risiko.",
    },
    {
      question: "Hvilken menneskemodell forutsetter en informasjonskampanje?",
      options: ["En aktiv modell, siden kampanjen bare virker gjennom mottakerens vurdering", "En passiv modell, siden mottakeren ikke selv har bedt om informasjonen og møter budskapet uoppfordret", "En passiv modell, siden kampanjen påvirker uten at mottakeren merker at hun påvirkes", "Ingen av delene, siden informasjon er nøytral med hensyn til modell"],
      explanation: "Kampanjen har ingen annen kanal enn at mottakeren tar inn opplysningen, mener at den angår henne og endrer noe. Testen er hva kampanjen gjør med en som er likegyldig til saken — svaret er ingenting.",
    },
    {
      question: "Hvilken menneskemodell forutsetter det å flytte varer til en annen plass i butikken?",
      options: ["En passiv modell, siden tiltaket endrer hva som er lett å gjøre", "En aktiv modell, siden kunden fortsatt velger fritt mellom varene", "En aktiv modell, siden plasseringen gir kunden ny informasjon om hva butikken anbefaler", "En passiv modell, siden kunden fratas muligheten til å velge"],
      explanation: "Tiltaket virker uten at noen tar stilling til noe: det endrer tilgjengelighet, ikke oppfatninger. At kunden fortsatt kan velge fritt, endrer ikke dette — friheten er intakt, men mekanismen går ikke gjennom en overveielse.",
    },
    {
      question: "Hva skiller en sosial fra en biologisk passiv menneskemodell?",
      options: ["Om kreftene er tillærte og samfunnsskapte, eller kroppslige og evolusjonære", "Om modellen gjelder grupper eller enkeltpersoner", "Om forklaringen er kvalitativ eller bygger på tallmateriale", "Om modellen forklarer handlinger med grunner eller beskriver dem"],
      explanation: "Begge er passive: forklaringen går ikke gjennom personens vurderinger. Forskjellen ligger i hvor kreftene plasseres, og den praktiske konsekvensen er at sosiale krefter kan endre seg raskt mens biologiske ikke gjør det.",
    },
    {
      question: "Hva er forskjellen på en grunn og en årsak i denne sammenhengen?",
      options: ["Grunnen gjør handlingen forståelig fra personens ståsted, årsaken virker uavhengig av det", "Grunnen er subjektiv og derfor uvitenskapelig, mens årsaken kan måles", "Grunnen gjelder enkelthandlinger, mens årsaken gjelder mønstre på samfunnsnivå", "Grunnen kommer før handlingen, mens årsaken virker etterpå"],
      explanation: "Skillet er det samme som mellom aktiv og passiv modell, sett fra forklaringens side. At en grunn er subjektiv, gjør den ikke uvitenskapelig — samfunnsvitenskapen studerer nettopp begrunnede handlinger.",
    },
    {
      question: "Hvorfor er «frivillig mot tvungent» en annen akse enn «aktiv mot passiv»?",
      options: ["Fordi et forbud er tvingende og likevel virker gjennom en avveining hos den enkelte", "Fordi frivillighet bare gjelder private tiltak, mens menneskemodellen gjelder offentlige", "Fordi tvang alltid forutsetter en passiv modell av mennesket", "Fordi frivillige tiltak alltid forutsetter en aktiv modell av mennesket, som selv må velge å la seg påvirke"],
      explanation: "Alle fire kombinasjonene finnes: en kampanje er frivillig og aktiv, valgomgivelser er frivillige og passive, et forbud med bot er tvingende og aktivt. Å bruke tvang som kriterium er den vanligste enkeltfeilen i eksempelleddet.",
    },
    {
      question: "Hva menes med et blandingstiltak?",
      options: ["Et tiltak som virker gjennom både en vurdering og en endring av omgivelsene", "Et tiltak som kombinerer virkemidler fra flere myndigheter i én og samme pakke", "Et tiltak som virker forskjellig på ulike grupper i befolkningen, med sterkest virkning i noen av dem", "Et tiltak som er delvis frivillig og delvis tvingende å følge"],
      explanation: "De fleste virkelige tiltak virker gjennom begge kanaler samtidig — en avgift endrer både hva som lønner seg og hva som oppleves som normalt. Å skrive ut blandingen og deretter si hvilken kanal som bærer mest, er en av de sikreste A-markørene i temaet.",
    },
    {
      question: "Hvorfor er det ikke i seg selv en innvending mot en modell at den er forenklet?",
      options: ["Fordi forenklingen er modellens definisjon, og en modell som fikk med alt ville ikke vært et verktøy", "Fordi alle vitenskapelige påstander er forenklinger av virkeligheten på ett eller annet punkt", "Fordi modellen bare brukes på grupper og ikke på enkeltpersoner", "Fordi forenklingen kan rettes opp ved å legge til flere variabler"],
      explanation: "En innvending må peke på hvilken utelatelse som gjør skade, og til hvilket bruk. Skillet mellom en forenkling og en karikatur ligger nettopp i om det som er beholdt, er relevant for oppgaven modellen skal løse.",
    },
    {
      question: "Hva innebærer det at en menneskemodell har begrenset rekkevidde?",
      options: ["At den sier noe om mønstre i mange tilfeller, ikke om hva en bestemt person gjør", "At den bare gjelder innenfor ett bestemt fagfelt, og ikke kan overføres", "At den må erstattes så snart et unntak er observert", "At den bare kan brukes på tiltak, ikke på forskning"],
      explanation: "Modellen påstår ikke at alle er slik, men at atferden i gjennomsnitt lar seg forklare og påvirke som om de var det. Derfor treffer motargumentet «jeg kjenner en som ikke er slik» sjelden.",
    },
    {
      question: "Hvor plasseres ansvaret når en passiv menneskemodell legges til grunn for politikk?",
      options: ["Hos den som utformer omgivelsene, siden det er der forklaringen sitter", "Hos den enkelte, siden hun fortsatt kan velge å handle annerledes enn tiltaket legger opp til", "Hos fagfolkene som har utformet selve modellen", "Ingen steder, siden modellen beskriver hva som forklarer atferden og ikke tar stilling til ansvar"],
      explanation: "Forklaringen ligger i omgivelsene, og ansvaret følger forklaringen. Modellen sier ikke at den enkelte er uten moralsk ansvar — den sier at forklaringen på mønsteret ligger et annet sted enn i hennes overveielse.",
    },
    {
      question: "Hva er det sterkeste argumentet for å legge en passiv menneskemodell til grunn for politikk?",
      options: ["At tiltaket virker også på dem som ikke bryr seg eller ikke har tid", "At tiltaket alltid er billigere å innføre enn et informasjonstiltak", "At tiltaket behandler folk som myndige borgere", "At tiltaket kan innføres uten at noen vedtar det politisk, siden det bare endrer omgivelsene"],
      explanation: "Argumentet er at virkningen ikke forutsetter oppmerksomhet, som er en knapp og ulikt fordelt ressurs. Å behandle folk som myndige er derimot argumentet for den aktive modellen, og et passivt tiltak må vedtas som ethvert annet.",
    },
    {
      question: "Hva er legitimitetsinnvendingen mot passive tiltak?",
      options: ["At tiltaket kan virke uten at noen har fått anledning til å være uenig", "At tiltaket er mindre effektivt enn et informasjonstiltak ville vært på samme område", "At tiltaket alltid er dyrere å gjennomføre enn alternativene, fordi omgivelsene må bygges om", "At tiltaket bare virker på dem som allerede er enige i målet"],
      explanation: "Innvendingen gjelder ikke virkningen, som ofte er god, men at valget ikke er lagt fram som et argument den enkelte kan avvise. Den siste beskrivelsen er tvert imot svakheten ved aktive tiltak.",
    },
    {
      question: "Hva menes med robusthet i vurderingen av et tiltak?",
      options: ["Hva som skjer med atferden dersom tiltaket avvikles", "Hvor stor andel av befolkningen tiltaket faktisk treffer", "Hvor lenge det tar før tiltaket begynner å virke etter at det er innført", "Hvor mye tiltaket koster å gjennomføre over tid"],
      explanation: "Robusthet og effektstørrelse er to ulike ting: et tiltak kan ha stor virkning og lav robusthet samtidig. Et strukturtiltak tar som regel virkningen med seg når det fjernes, mens et tiltak som har endret oppfatninger etterlater seg noe.",
    },
    {
      question: "Hva er en billig og virkningsfull A-markør i eksempelleddet i dette temaet?",
      options: ["Å si hva som ville gjort eksempelet til et dårlig eksempel", "Å gi to eksempler i stedet for ett på hver av de to modellene", "Å nevne flere teoretikere enn oppgaven ber om", "Å beskrive tiltaket grundigere enn oppgaveteksten gjør, med flere detaljer om virkemåten"],
      explanation: "Setningen viser at du kjenner grensen for begrepet og ikke bare midten av det, og den koster én setning. Flere eksempler og flere navn legger til mengde uten å legge til anvendelse.",
    },
    {
      question: "Hva er hovedsvakheten ved tiltak som forutsetter en aktiv menneskemodell?",
      options: ["At de treffer bare dem som allerede er oppmerksomme, og dermed kan forsterke forskjeller", "At de alltid er mer inngripende overfor den enkelte enn andre tiltak", "At de bare kan brukes av private aktører, ikke av myndigheter", "At de gir en virkning som forsvinner så snart tiltaket avvikles"],
      explanation: "Oppmerksomhet er en knapp ressurs som er ulikt fordelt, og de som lettest følger opp er ofte de som trengte tiltaket minst. Den siste beskrivelsen er tvert imot svakheten ved passive tiltak.",
    },
    {
      question: "Hva er forskjellen på et informasjonstiltak og et strukturtiltak?",
      options: ["Informasjonstiltaket endrer hva folk vet eller mener, strukturtiltaket hva som er lett å gjøre", "Informasjonstiltaket er frivillig å følge, mens strukturtiltaket er tvingende", "Informasjonstiltaket virker raskt, mens strukturtiltaket virker langsomt", "Informasjonstiltaket er offentlig, mens strukturtiltaket er skjult"],
      explanation: "Skillet gjelder hvilken kanal tiltaket virker gjennom, og det er derfor de forutsetter hver sin menneskemodell. Et strukturtiltak kan være fullt offentlig kjent og likevel virke.",
    },
    {
      question: "Hva er et forbud, klassifisert etter menneskemodell?",
      options: ["Et aktivt tiltak, siden det virker gjennom en avveining av risikoen for sanksjon", "Et passivt tiltak, siden det fjerner valgmuligheten helt fra den enkelte", "Et blandingstiltak, siden det både informerer og tvinger", "Et strukturtiltak, siden det endrer omgivelsene rundt valget"],
      explanation: "Forbudet virker fordi den enkelte vurderer risikoen for å bli tatt, og det går altså gjennom en overveielse. Å klassifisere det som passivt fordi det oppleves som tvang, er å bytte akse midt i svaret.",
    },
    {
      question: "Hva innebærer det at en kobling mellom tiltak og modell er begrunnet?",
      options: ["At det sies hvilken mekanisme tiltaket virker gjennom og hvilket ledd i modellen den svarer til", "At koblingen er hentet fra pensum og kan tilskrives en navngitt forfatter i pensumlitteraturen", "At tiltaket er beskrevet grundig nok til at leseren kjenner saken", "At koblingen støttes av tall som viser at tiltaket faktisk virket"],
      explanation: "Begrunnelsen svarer på hvorfor akkurat denne klassifiseringen, og ikke den motsatte. En sensorveiledning fra H2021 ber sensor kontrollere om tiltaket faktisk forutsetter modellen det skal illustrere.",
    },
    {
      question: "Hva er et kjennetegn ved kritikk som treffer en menneskemodell?",
      options: ["At den peker på hvilken utelatelse som gjør skade, og til hvilket bruk", "At den viser til et enkelttilfelle der modellen ikke stemmer, og dermed regner den som motbevist", "At den påviser at modellen er forenklet på flere punkter", "At den erstatter modellen med en beskrivelse som ikke inneholder forenklinger"],
      explanation: "Modellen tåler unntak, siden den gjelder mønstre i mange tilfeller. En kritikk som bare påpeker forenkling eller enkelttilfeller, treffer derfor ingenting bestemt.",
    },
    {
      question: "Hva er den vanligste karikaturen av den passive menneskemodellen?",
      options: ["At den framstiller mennesket som viljeløst og uten evne til å bestemme selv", "At den bygger på biologiske forklaringer og dermed er determinisme", "At den bare brukes av myndigheter som vil styre befolkningen", "At den er utviklet for å rettferdiggjøre inngripende tiltak"],
      explanation: "Modellen sier at forklaringen ikke går veien om personens overveielser, ikke at hun mangler vilje. Karikaturen gjør drøftingen verdiløs, fordi innvendingene da treffer en posisjon ingen holder.",
    },
    {
      question: "Hva er hovedspørsmålet i drøftingsaksen i dette temaet?",
      options: ["Hva vi vinner og taper ved å behandle mennesker som det ene eller det andre i politikken", "Hvilken av de to modellene som best beskriver hvordan mennesker fungerer", "Om samfunnsvitenskapen bør bruke modeller i det hele tatt", "Hvilken modell som gir størst målbar effekt av tiltak"],
      explanation: "Ingen av modellene er sann; begge er verktøy. Aksen gjelder derfor hva slags forhold politikken skal ha til borgeren, og både effekt og legitimitet hører med i vurderingen.",
    },
    {
      question: "Hvorfor kan et strukturtiltak være både offentlig kjent og fortsatt virksomt?",
      options: ["Fordi det virker gjennom tilgjengelighet og vaner, ikke gjennom å være skjult", "Fordi folk glemmer at tiltaket finnes så snart det er innført og har vært i bruk en stund", "Fordi kjennskap til tiltaket bare når fram til et fåtall uansett, slik at flertallet handler som før", "Fordi virkningen skyldes tvang og ikke kan velges bort"],
      explanation: "Mekanismen er hva som er lett å gjøre, ikke hemmelighold. Det gir et brukbart legitimitetskriterium: et tiltak som mister effekten idet det forklares, står svakere enn ett som virker like godt når det er kjent.",
    },
  ],
  'svexfac03-1-2': [
    {
      question: "Hva menes med den naturalistiske vendingen?",
      options: ["At samfunnsvitenskapene i økende grad tar inn kunnskap og forklaringer fra biologien", "At naturvitenskapene i økende grad tar i bruk samfunnsvitenskapelige metoder", "At samfunnsvitenskapene forlater teoretiske modeller til fordel for rent beskrivende arbeid", "At forskere legger vekt på naturlige omgivelser framfor laboratoriet når de samler inn data"],
      explanation: "Vendingen betegner at biologisk kunnskap får større plass i samfunnsvitenskapene, og begrepet er hentet fra Aakvaag. De øvrige beskrivelsene gjelder helt andre utviklingstrekk, og ingen av dem har med grensen mellom biologiske og sosiale forklaringer å gjøre.",
    },
    {
      question: "Hvem er avsenderen for begrepet den naturalistiske vendingen i dette emnet?",
      options: ["Aakvaag, i kapitlet om samfunnsvitenskap og biologi", "Balsvik, i kapitlet om mennesket i samfunnet", "Nyborg, i kapitlet om den økonomiske modellen av mennesket", "Solli, i kapitlet om spørsmålet om sosial orden i samfunnet"],
      explanation: "Aakvaag eier framstillingen av den naturalistiske vendingen og av de biologiske modellene. Balsvik eier menneskemodell-begrepet, Nyborg eksperimentene og Solli ordensperspektivene — å bytte om på dem er en tilskrivningsfeil sensor merker umiddelbart.",
    },
    {
      question: "Hva skiller vendingens svake form fra dens sterke form?",
      options: ["Om biologisk kunnskap er ett innslag blant flere, eller gjøres grunnleggende for forklaringen", "Om forskeren selv har utdanning i biologi, eller bare leser biologisk litteratur i tillegg", "Om biologisk kunnskap brukes på enkeltpersoner, eller bare på store grupper i befolkningen", "Om biologiske funn brukes i forskning, eller også brukes som grunnlag for politiske tiltak"],
      explanation: "Den svake formen tar inn biologisk kunnskap som ett innslag; den sterke hevder at samfunnsvitenskapelige forklaringer i prinsippet kan føres tilbake til biologiske. De fleste innvendingene treffer den sterke formen, og å behandle vendingen som ett standpunkt er en rask måte å bomme på.",
    },
    {
      question: "Hva kjennetegner en biologisk passiv menneskemodell?",
      options: ["At atferden forklares av kroppslige eller evolusjonære disposisjoner", "At atferden forklares av sosialisering og samfunnsstrukturer", "At personen framstilles som styrt av instinkter hun ikke kan gjøre noe med i det hele tatt", "At forklaringen bygger på biologiske målinger av kroppen framfor på intervjuer med den enkelte"],
      explanation: "Modellen er passiv fordi forklaringen ikke går gjennom personens overveielser, og biologisk fordi kreftene plasseres i kroppen og artens historie. Sosialisering og struktur hører til den sosiale passive modellen, og modellen sier ingenting om hvilke måleinstrumenter forskeren bruker.",
    },
    {
      question: "Hva er den praktiske forskjellen mellom sosiale og biologiske passive modeller?",
      options: ["At sosiale krefter kan endre seg raskt, mens biologiske ikke gjør det på få tiår", "At sosiale krefter virker på grupper, biologiske bare på enkeltpersoner", "At sosiale krefter kan måles presist, mens biologiske krefter bare kan anslås omtrentlig", "At sosiale krefter forklarer handlinger, mens biologiske krefter forklarer ren refleksatferd"],
      explanation: "Fordi samfunn endrer seg raskt og biologi ikke gjør det, er variasjon over tid og mellom land en prøvestein mellom de to. De øvrige forskjellene finnes ikke: begge modelltypene brukes både på grupper og enkeltpersoner.",
    },
    {
      question: "Hva svarer en evolusjonspsykologisk forklaring på?",
      options: ["Hvorfor en tilbøyelighet finnes i arten i det hele tatt", "Hvorfor en bestemt person handlet slik hun gjorde", "Hvorfor et samfunn har endret seg i en bestemt retning over noen tiår", "Hvorfor et trekk oppleves som meningsfullt av den enkelte"],
      explanation: "Forklaringen gjelder tilbøyelighetens opphav, ikke enkelthandlingen, samfunnsendringen eller opplevelsen. Nettopp derfor er den ikke et alternativ til en forklaring med grunner — de to ligger på ulike nivåer og kan begge være riktige.",
    },
    {
      question: "Hva er forskjellen på en disposisjon og en determinasjon?",
      options: ["Disposisjonen gjør et utfall mer sannsynlig, mens determinasjonen avgjør det", "Disposisjonen er medfødt, mens determinasjonen er noe som læres", "Disposisjonen gjelder enkeltpersoner, mens determinasjonen gjelder hele befolkninger", "Disposisjonen er en påstand om fortiden, mens determinasjonen er en påstand om framtiden"],
      explanation: "Biologiske menneskemodeller i pensum arbeider med tilbøyeligheter, ikke med tvang. Derfor er «biologisk forklart» og «uforanderlig» ikke samme sak, og å bytte ut disposisjon med determinasjon er å karikere posisjonen man skal kritisere.",
    },
    {
      question: "Hva er en gjennomsnittsforklaring?",
      options: ["En forklaring på et nivå eller en gjennomgående forskjell", "En forklaring som gjelder de fleste, men ikke alle", "En forklaring som bygger på beregnede gjennomsnitt i et større tallmateriale", "En forklaring som er middels sterk og derfor må suppleres med andre forklaringer"],
      explanation: "Gjennomsnittsforklaringen svarer på hvorfor noe finnes eller hvorfor en forskjell finnes overhodet. Det er en type spørsmål, ikke et mål på hvor sterk eller hvor utbredt forklaringen er.",
    },
    {
      question: "Hva må en forklaring på variasjon selv gjøre?",
      options: ["Variere på samme måte som fenomenet den skal forklare", "Bygge på tall fra flere enn ett land", "Kunne knyttes til en navngitt teoretiker i pensumlitteraturen", "Vise til krefter som ligger utenfor personens egen kontroll"],
      explanation: "Er noe konstant over hele perioden og i alle landene, kan det ikke forklare at tallene spriker. Det er derfor menneskets biologi ikke kan bære en endring som har skjedd på tjue år, uansett hvor godt den forklarer nivået.",
    },
    {
      question: "Et fenomen har samme gruppeforskjell i alle land, men nivået har tredoblet seg i ett av dem på tjue år. Hva kan en biologisk modell bære?",
      options: ["Gruppeforskjellen, men ikke tredoblingen", "Tredoblingen, men ikke gruppeforskjellen", "Begge deler, siden materialet er ett og forklaringen bør være enhetlig", "Ingen av delene, siden biologiske forklaringer ikke gjelder samfunnsfenomener"],
      explanation: "Den stabile gruppeforskjellen er en gjennomsnittsforklaring, og tredoblingen er variasjon som må forklares av noe som selv har endret seg. Premisset om at ett materiale krever én forklaring, er nettopp det som er galt.",
    },
    {
      question: "Hva betyr det at to gruppers fordelinger overlapper?",
      options: ["At de fleste i den ene gruppen ligner de fleste i den andre, selv om gjennomsnittene er ulike", "At det er umulig å fastslå om det finnes en gruppeforskjell i det hele tatt", "At forskjellen mellom gruppene skyldes at utvalget er trukket på en skjev måte", "At gruppene må slås sammen før materialet kan analyseres videre statistisk"],
      explanation: "Overlapp er den vanlige situasjonen når samfunnsvitenskapen finner en gruppeforskjell, og konsekvensen er at gruppeforskjellen sier svært lite om et enkeltmenneske. Overlapp betyr verken at forskjellen er uvirkelig eller at utvalget er skjevt.",
    },
    {
      question: "Hva er nivåfeilen i denne sammenhengen?",
      options: ["Å slutte fra en gruppeforskjell til en påstand om en enkeltperson", "Å blande sammen forklaringer på artsnivå og individnivå", "Å bruke tall fra ett land som om de gjaldt alle andre land, uten å sjekke om forholdene er like", "Å måle et fenomen på et for grovt nivå til at variasjonen kommer fram"],
      explanation: "Fordi fordelingene overlapper, er slutningen ugyldig selv når gruppeforskjellen er reell og godt målt. Feilen er ikke biologiens: «folk fra dette området gjør sånn» er nøyaktig samme slutning med sosiale premisser.",
    },
    {
      question: "Hvorfor er tverrkulturell variasjon en prøvestein mellom forklaringstyper?",
      options: ["Fordi en forklaring som viser til stabile artstrekk ikke kan bære store forskjeller mellom samfunn", "Fordi biologiske forklaringer bare gjelder i vestlige samfunn og ikke lar seg overføre", "Fordi kulturelle forskjeller alltid er større enn biologiske forskjeller mellom mennesker", "Fordi tall fra flere land er mer pålitelige enn tall fra ett enkelt land alene"],
      explanation: "Varierer et fenomen kraftig mellom samfunn, forklarer artstrekkene noe som ikke er der å forklare. Men motsatt vei er slutningen svakere: at et mønster går igjen overalt er et argument for en felles årsak, ikke et bevis, siden alle samfunn også deler praktiske problemer.",
    },
    {
      question: "Når konkurrerer to forklaringer med hverandre?",
      options: ["Når de svarer på samme spørsmål, slik at den ene gjør den andre overflødig", "Når de kommer fra ulike fagtradisjoner som har ulike metodiske idealer", "Når de er formulert av forskere som selv oppfatter seg som uenige", "Når de ikke kan prøves mot hverandre ved hjelp av det samme materialet"],
      explanation: "Konkurransen gjelder hva forklaringene svarer på, ikke hvilken fagtradisjon de kommer fra eller hva forskerne mener om hverandre. Svarer de på ulike spørsmål om samme fenomen, utfyller de hverandre i stedet.",
    },
    {
      question: "Hva kreves for at en påstand om at to forklaringer utfyller hverandre skal være mer enn en unnvikelse?",
      options: ["At det sies hvilken del av materialet hver av dem bærer", "At begge er formulert av pensumforfattere", "At det oppgis hvilken av dem som er viktigst, slik at leseren vet hva som veier mest", "At begge forklaringene støttes av tall fra samme undersøkelse"],
      explanation: "Komplementaritet er en påstand som må begrunnes med en arbeidsdeling. «Det er nok litt av begge deler» sier ingenting, og ligger tett på fella der «det kommer an på» erstatter argumentet i stedet for å ramme det inn.",
    },
    {
      question: "Hva er reduksjonisme i denne sammenhengen?",
      options: ["Påstanden om at forklaringer på ett nivå i prinsippet kan erstattes av forklaringer på et lavere", "Påstanden om at samfunnsforskere bør bruke færre og enklere begreper enn de gjør i dag", "Praksisen med å forenkle et komplekst materiale før det presenteres for et bredere publikum", "Praksisen med å utelate variabler fra en modell for å gjøre analysen mer oversiktlig"],
      explanation: "Reduksjonisme er den sterke formen for den naturalistiske vendingen, og det er den formen de fleste innvendingene retter seg mot. Å bruke biologiske funn uten å mene at samfunnsvitenskapen kan reduseres bort, er noe helt annet.",
    },
    {
      question: "Hva innebærer posisjonen «biologi som betingelse»?",
      options: ["At biologien setter rammer uten å bestemme hva som skjer innenfor dem", "At biologi bare forklarer når sosiale forklaringer er utelukket", "At biologiske forhold må kartlegges og måles før en samfunnsanalyse i det hele tatt kan begynne", "At biologien forklarer det stabile, mens kulturen bare forklarer det overfladiske"],
      explanation: "Posisjonen tar biologien på alvor og lar samtidig det samfunnsskapte gjøre forklaringsarbeidet der variasjonen er. Merk at den må begrunnes som enhver annen posisjon — den er ikke et kompromiss man kan velge fordi den ligger i midten.",
    },
    {
      question: "Hvorfor er en biologisk forklaring ikke i seg selv et forsvar for det den forklarer?",
      options: ["Fordi slutningen fra er til bør mangler en verdipremiss som må begrunnes for seg", "Fordi biologiske forklaringer sjelden er godt nok dokumentert til å bære noen konklusjon", "Fordi verdispørsmål tilhører filosofien og ikke samfunnsvitenskapen som fagområde", "Fordi det som er utbredt i naturen sjelden er ønskelig i et moderne samfunn med helt andre levekår"],
      explanation: "Poenget er logisk, ikke politisk: en forklaring sier hvorfor noe er slik, en rettferdiggjøring sier hvorfor det bør være slik. Feilen finnes i to varianter — både å bruke naturlighet som forsvar, og å avvise en forklaring fordi man frykter at forsvaret følger.",
    },
    {
      question: "Hva er det som faktisk prøves i eksamensoppgaver om biologiske forklaringer?",
      options: ["Grensen mellom forklaringstypene, og hvordan man avgjør hvor den går", "Hvor godt kandidaten kjenner forskningen på saksfeltet", "Om kandidaten kan gjengi hovedtrekkene i evolusjonsteorien korrekt", "Hvilken av de to forklaringstypene kandidaten selv mener er riktigst"],
      explanation: "Det er grensedragningen som er faget her, ikke biologien og ikke saksfeltet. En veiledning fra V2021 sier uttrykkelig at detaljkunnskap om saksfeltet ikke skal telle, bare om kunnskapen brukes til å vise forståelse av pensum.",
    },
    {
      question: "Hva sier en sensorveiledning fra V2021 om saksfeltet i en slik oppgave?",
      options: ["At detaljkunnskap ikke skal telle, bare om kunnskapen brukes til å vise forståelse av pensum", "At kandidaten bør vise bred kunnskap om saksfeltet før analysen begynner", "At saksfeltet bør beskrives i et eget innledende avsnitt av besvarelsen", "At kandidaten fritt kan velge et annet saksfelt enn det oppgaven oppgir"],
      explanation: "Regelen er hard og går igjen i flere veiledninger: saksfeltet gir null uttelling i seg selv. Saksbeskrivelsen skal derfor være akkurat lang nok til å bære analysen, og ikke lenger.",
    },
    {
      question: "Hva er den vanligste karikaturen av evolusjonspsykologiske forklaringer?",
      options: ["At de skulle hevde at atferden vår er bestemt av genene", "At de skulle bygge på observasjoner gjort i laboratorier framfor i felt", "At de skulle gjelde bare menn og ikke kvinner i de samme befolkningene", "At de skulle være uenige med alle sosiale forklaringer av den samme atferden"],
      explanation: "Forklaringene hevder noe om tilbøyeligheter i gjennomsnitt, om fordeler i fortidige omgivelser, og ingenting om hva som er ønskelig. Kritikk som retter seg mot den folkelige versjonen, treffer ikke posisjonen — og gir dermed ingen brukbare argumenter.",
    },
    {
      question: "Hvorfor er det et faglig krav og ikke bare et høflighetskrav å framstille en posisjon presist?",
      options: ["Fordi sensorveiledningene belønner argumenter begge veier, og en karikert posisjon gir ingen brukbare argumenter", "Fordi kandidaten ellers risikerer å bli trukket for manglende respekt for pensumforfatterne", "Fordi en presis framstilling tar mindre plass enn en upresis gjør i en kort besvarelse", "Fordi sensor gjerne selv har arbeidet med den posisjonen kandidaten skriver om"],
      explanation: "Drøftingsleddet krever at innvendingen faktisk besvares, og det forutsetter at posisjonen er gjengitt slik en tilhenger ville kjent seg igjen i den. En stråmann i egen tekst svekker derfor kandidatens eget svar.",
    },
  ],
  'svexfac03-1-3': [
    {
      question: "Hva betyr rasjonalitet som paraplybegrep i dette emnet?",
      options: ["At handlingen har en begrunnelse som gjør den forståelig fra aktørens ståsted", "At handlingen er klok, veloverveid og bygger på riktige oppfatninger", "At handlingen kan forklares ut fra et regnestykke der kostnader veies mot fordeler", "At handlingen følger av regler aktøren har lært seg gjennom oppvekst og utdanning"],
      explanation: "Å kalle en handling rasjonell er ikke å rose den: det er å si at det finnes et svar på hvorfor hun gjorde det. Regnestykket er bare den ene formen, og innlærte regler hører til den tradisjonelle handlingstypen.",
    },
    {
      question: "Hva kjennetegner en formålsrasjonell handling?",
      options: ["At middelet velges ut fra hvor godt det når et mål som selv er veid mot andre hensyn", "At handlingen tjener aktørens egne økonomiske interesser framfor andres interesser", "At aktøren har full oversikt over alternativene før hun bestemmer seg for noe", "At handlingen er planlagt på forhånd og ikke utløst av øyeblikkets stemning"],
      explanation: "Begge leddene hører med: middelet velges ut fra virkning, og også målet veies. Egeninteresse er en annen akse, full oversikt er en forutsetning i en langt strengere modell, og planlegging skiller ikke de to rasjonalitetsformene.",
    },
    {
      question: "Hva kjennetegner en verdirasjonell handling?",
      options: ["At begrunnelsen ligger i handlingen selv og holder selv om utfallet uteblir", "At aktøren handler av hensyn til andre framfor av hensyn til seg selv", "At handlingen springer ut av sterke følelser i situasjonen", "At handlingen følger et mønster aktøren har fulgt så lenge hun kan huske"],
      explanation: "Kjennetegnet er utfallsuavhengigheten. Å handle av hensyn til andre er en annen akse — man kan handle verdirasjonelt og egennyttig — mens følelser og vane hører til den affektuelle og den tradisjonelle typen.",
    },
    {
      question: "Hva er begrunnelsestesten på en handling?",
      options: ["Å spørre hva som ville fått aktøren til å slutte", "Å spørre hva aktøren selv oppgir som grunn når hun blir bedt om å forklare seg", "Å spørre om handlingen faktisk førte til det aktøren ønsket seg", "Å spørre om handlingen ville blitt gjentatt under de samme forholdene"],
      explanation: "Testen er kontrafaktisk: slutter hun når fordelen forsvinner, lå begrunnelsen i utfallet. Det aktøren oppgir, er ikke nødvendigvis det som bærer handlingen, siden folk gjerne oppgir verdibegrunnelser for det som lønner seg.",
    },
    {
      question: "Hvilke to handlingstyper hos Weber er ikke rasjonelle i typologiens forstand?",
      options: ["Den affektuelle og den tradisjonelle", "Den verdirasjonelle og den affektuelle", "Den formålsrasjonelle og den tradisjonelle", "Den verdirasjonelle og den tradisjonelle"],
      explanation: "Typologien har fire ledd, og de to som ikke er begrunnet i mål eller verdi, er den affektuelle og den tradisjonelle. Å plassere verdirasjonalitet blant dem er en av de vanligste presisjonsfeilene i temaet.",
    },
    {
      question: "Hva skiller en verdirasjonell fra en affektuell handling?",
      options: ["At den verdirasjonelle er begrunnet, og at aktøren kan gjøre rede for begrunnelsen", "At den verdirasjonelle er rettet mot andre, mens den affektuelle ikke er det", "At den verdirasjonelle er planlagt i forkant, mens den affektuelle skjer på stedet", "At den verdirasjonelle har gode konsekvenser, den affektuelle dårlige"],
      explanation: "Den verdirasjonelle handlingen er fullt begrunnet — begrunnelsen ligger bare i handlingen selv og ikke i utfallet. Tidsforløp og konsekvenser er ikke det som skiller de to, og forvekslingen ødelegger presisjonen i hele resten av svaret.",
    },
    {
      question: "Hva er en idealtype?",
      options: ["En begrepsmessig rendyrking laget for å gjøre sammenligning mulig", "En beskrivelse av det mest typiske tilfellet i materialet", "Et gjennomsnitt regnet ut fra mange observerte enkelttilfeller i det samme materialet", "En norm for hvordan et fenomen bør se ut i et velfungerende samfunn"],
      explanation: "Idealtypen er et målestokk-begrep, ikke et gjennomsnitt og ikke et ideal. Begrepet framstilles hos Aakvaag, og det er grunnen til at det ikke er en innvending mot Webers handlingstyper at virkelige handlinger har innslag av flere.",
    },
    {
      question: "Hvem eier skillet mellom formålsrasjonell og verdirasjonell handling?",
      options: ["Weber, i den framstillingen Balsvik gir av ham", "Balsvik, som selv utviklet skillet", "Elster, som skilte handlingstypene i sin normteori", "Aakvaag, som innførte skillet gjennom idealtypebegrepet"],
      explanation: "Begrepene tilhører Weber, mens framstillingen som brukes i dette emnet er Balsviks. Elster eier normtypene og Aakvaag idealtypen — å bytte om på dette er en tilskrivningsfeil sensor merker umiddelbart.",
    },
    {
      question: "Hva innebærer det at også målet veies i en formålsrasjonell handling?",
      options: ["At målet holdes opp mot andre mål og mot kostnadene ved å nå det", "At målet må være realistisk og oppnåelig for aktøren", "At målet må være akseptert av andre enn aktøren selv for å telle", "At målet endres underveis dersom det blir for krevende"],
      explanation: "Dette er det leddet som gjør formålsrasjonaliteten til en fullstendig praktisk fornuft: aktøren spør både hva som virker og om det er verdt det. En definisjon som bare sier «handler for å nå et mål», har mistet halve begrepet.",
    },
    {
      question: "Hva viser en verdirasjonell handling når insentivet fjernes?",
      options: ["Handlingen fortsetter, siden begrunnelsen ikke lå i fordelen", "Handlingen faller bort, siden aktøren mister grunnen", "Handlingen endrer form, men beholder omtrent samme omfang som før", "Handlingen kan ikke lenger klassifiseres, siden situasjonen er endret"],
      explanation: "Robusthetstesten er nettopp dette: fjern fordelen og se om handlingen består. At handlingen faller bort, er derimot kjennetegnet på en formålsrasjonell begrunnelse.",
    },
    {
      question: "Hva viser verdiendringstesten?",
      options: ["At også verdirasjonelle handlinger har en sårbarhet, nemlig at overbevisningen kan endres", "At verdirasjonelle handlinger er mer robuste enn formålsrasjonelle på alle måter", "At formålsrasjonelle handlinger endrer seg når aktørens verdier endrer seg", "At verdier ikke lar seg måle, og at klassifiseringen derfor er usikker"],
      explanation: "De to formene er sårbare for hver sin ting: den ene for at ordninger endres, den andre for at meningene endres. Å bare bruke robusthetstesten gir derfor en for enkel konklusjon om at verdirasjonelle tiltak alltid er sterkest.",
    },
    {
      question: "Hva er forskjellen på rasjonell handling og rasjonelt valg?",
      options: ["Valgbegrepet forutsetter i tillegg at alternativene lar seg rangere mot hverandre", "Handlingsbegrepet gjelder enkeltpersoner, valgbegrepet gjelder grupper", "Valgbegrepet gjelder bare økonomiske beslutninger, mens handlingsbegrepet gjelder alt annet", "Handlingsbegrepet er Webers, mens valgbegrepet stammer fra en annen tradisjon og ikke kan brukes sammen med det"],
      explanation: "Valgbegrepet er smalere, og det passer derfor best på formålsrasjonelle handlinger: en verdirasjonell handling er vanskelig å presse inn i en rangering. Oppgaver som ber om begge deler, har to ledd — og et hoppet ledd er dyrt.",
    },
    {
      question: "Hvorfor er «rasjonell» ikke det samme som «klok»?",
      options: ["Fordi rasjonaliteten ligger i sammenhengen mellom begrunnelse og handling, ikke i om begrunnelsen er sann", "Fordi klokskap er et moralsk begrep, mens rasjonalitet er et rent økonomisk begrep", "Fordi kloke handlinger krever erfaring, mens rasjonelle handlinger krever utdanning", "Fordi rasjonalitet gjelder mål, mens klokskap bare gjelder valget av virkemidler"],
      explanation: "En handling kan være fullt rasjonell og bygge på gale antakelser om verden. Det er derfor et dårlig utfall ikke i seg selv viser at handlingen var irrasjonell — det kan like gjerne vise at aktøren hadde dårlig informasjon.",
    },
    {
      question: "Hva er irrasjonalitet i denne sammenhengen?",
      options: ["At handlingen ikke lar seg begrunne ut fra aktørens egne grunner", "At handlingen bygger på verdier andre ikke deler eller kan godta", "At handlingen fører til et dårlig utfall for aktøren", "At handlingen skjer uten at aktøren har tenkt gjennom den"],
      explanation: "Irrasjonalitet er en indre inkonsistens, ikke en dom over målene og ikke en vurdering av utfallet. At du er uenig i aktørens mål, gjør ikke handlingen irrasjonell.",
    },
    {
      question: "Kan samme handling være formålsrasjonell for én aktør og verdirasjonell for en annen?",
      options: ["Ja, siden klassifiseringen gjelder begrunnelsen og ikke den observerbare handlingen", "Nei, siden handlingens type følger av hva handlingen består i", "Ja, men bare når de to aktørene handler i ulike situasjoner", "Nei, siden en handling bare kan ha én riktig klassifisering om gangen"],
      explanation: "To personer kan gjøre nøyaktig det samme av helt ulike grunner, og da er handlingene ulike i Webers forstand. Det er også grunnen til at begrepsparet ikke lar seg avlese av statistikk over hva folk gjør.",
    },
    {
      question: "Hva menes med blandingsmotiv?",
      options: ["At samme aktør har begge typer begrunnelse for én og samme handling", "At to aktører har hver sin begrunnelse for den samme handlingen", "At aktøren skifter begrunnelse fra gang til gang uten noe fast mønster", "At handlingen er begrunnet i en verdi som aktøren også tjener på"],
      explanation: "Blandede motiver er normaltilfellet, siden begrepene er idealtyper. Men det er ingen grunn til å la være å klassifisere: bruk testen og spør hvilken begrunnelse som ville holdt handlingen oppe alene.",
    },
    {
      question: "Hva skiller en tradisjonell handling fra en verdirasjonell?",
      options: ["At spørsmålet om hva som er riktig aldri er stilt i den tradisjonelle handlingen", "At den tradisjonelle handlingen alltid er gammel, mens den verdirasjonelle er ny", "At tradisjonelle handlinger gjøres i fellesskap, verdirasjonelle alene", "At tradisjonelle handlinger er ubevisste, verdirasjonelle planlagte"],
      explanation: "Den tradisjonelle handlingen gjøres fordi det er slik man gjør, uten at riktighetsspørsmålet er stilt. Grensen er reell og ofte uskarp, og den er verdt å bruke som grensetilfelle i den presiserende setningen.",
    },
    {
      question: "Hva er en vanehandling i forhold til Webers typer?",
      options: ["Et grensetilfelle: begrunnelsen fantes en gang, men hentes ikke lenger fram", "En ren tradisjonell handling, siden begrunnelsen aldri har vært til stede", "En affektuell handling, siden den skjer uten at aktøren tenker seg om", "En formålsrasjonell handling, siden vanen sparer aktøren for tid og krefter"],
      explanation: "Vanehandlingen har hatt en overveid begrunnelse og mistet den av syne, og skiller seg dermed fra den tradisjonelle, som aldri har hatt en. Det gjør den til et brukbart grensetilfelle i drøftingen om robusthet.",
    },
    {
      question: "Hvilken menneskemodell forutsetter begge rasjonalitetsformene?",
      options: ["En aktiv modell, siden handlingen i begge tilfeller går gjennom aktørens vurderinger", "En passiv modell, siden begge formene forklares av krefter aktøren ikke rår over", "En sosial passiv modell, siden både verdier og mål læres gjennom sosialisering", "Ingen bestemt modell, siden rasjonalitetstypologien er uavhengig av menneskemodeller"],
      explanation: "Skillet mellom de to formene ligger innenfor den aktive modellen, ikke mellom den aktive og den passive. Et strukturtiltak som virker uten overveielse, faller derfor utenfor typologien helt — det er ikke en tredje rasjonalitetsform.",
    },
    {
      question: "Hva kjennetegner et insentivtiltak?",
      options: ["At det virker ved å endre hva som lønner seg for den enkelte", "At det virker ved å endre hva som er lett tilgjengelig", "At det virker ved å endre hva den enkelte mener er riktig å gjøre", "At det virker ved å fjerne det alternativet myndighetene ikke ønsker"],
      explanation: "Insentivtiltaket appellerer til formålsrasjonalitet gjennom en avveining av kostnad mot nytte. De øvrige beskrivelsene gjelder henholdsvis strukturtiltak, appelltiltak og forbud.",
    },
    {
      question: "Hva er hovedsvakheten ved insentivtiltak?",
      options: ["At virkningen varer bare så lenge insentivet består", "At de bare treffer dem som allerede er enige i målet med tiltaket", "At de er langsomme og krever gjentatt påvirkning over tid", "At de forutsetter en passiv modell av mennesket og derfor er omstridte"],
      explanation: "Insentivet endrer regnestykket, og forsvinner det, forsvinner grunnen til å handle. At tiltaket bare treffer dem som alt er enige, og at det er langsomt og krever gjentatt påvirkning, er svakheter ved appelltiltak; og insentivtiltaket forutsetter tvert imot en aktiv modell av mennesket.",
    },
    {
      question: "Hva kjennetegner et appelltiltak?",
      options: ["At det virker ved å endre hva folk mener er riktig å gjøre", "At det virker ved å belønne den atferden myndighetene ønsker seg", "At det virker ved å gjøre det ønskede alternativet til standardvalget", "At det virker ved å gjøre uønsket atferd dyrere enn før for den som velger den"],
      explanation: "Appelltiltaket søker å etablere en begrunnelse som holder uavhengig av utfallet, og appellerer dermed til verdirasjonalitet. De tre øvrige beskrivelsene gjelder tiltak som virker gjennom fordeler, omgivelser eller kostnader.",
    },
    {
      question: "Hva er argumentet om at et insentiv kan fortrenge en begrunnelse?",
      options: ["At en økonomisk belønning kan komme til å erstatte overbevisningen som grunn til å handle", "At folk mister interessen for en sak så snart myndighetene begynner å blande seg inn", "At en belønning gjør handlingen mindre synlig for andre og dermed mindre virksom", "At et insentiv alltid virker svakere enn en appell gjør på lang sikt for alle grupper"],
      explanation: "Skjer fortrengningen, er handlingen flyttet fra verdirasjonell til formålsrasjonell, og dermed gjort mindre robust enn den var. Merk at dette er et argument som brukes i drøftingen, ikke et etablert resultat — angi det som en mulighet.",
    },
    {
      question: "Hvorfor er det ikke opplagt at verdirasjonelle tiltak er mest robuste?",
      options: ["Fordi de er sårbare for at overbevisningen endres, mens insentiver virker uansett hva folk mener", "Fordi de er dyrere å gjennomføre enn insentivtiltak er over tid", "Fordi de bare virker på dem som allerede har den aktuelle overbevisningen", "Fordi de forutsetter en passiv menneskemodell som er faglig omstridt"],
      explanation: "De to formene er robuste mot hver sin ting: verdirasjonelle tiltak tåler at ordninger endres, formålsrasjonelle tåler at meningene endres. Å se begge sårbarhetene er det som skiller en presis konklusjon fra en for enkel.",
    },
    {
      question: "Hva er den vanligste innholdsfeilen når skillet mellom de to rasjonalitetsformene brukes?",
      options: ["Å sette skillet ved egoisme mot moral i stedet for ved hvor begrunnelsen sitter", "Å hevde at begge formene kan opptre hos samme aktør samtidig i én handling", "Å nevne de to øvrige handlingstypene i Webers typologi som ramme", "Å bruke eksempler fra hverdagslivet i stedet for fra samfunnsvitenskapen"],
      explanation: "En handling kan være verdirasjonell og egennyttig, og formålsrasjonell og uegennyttig. At begge formene kan opptre samtidig, er derimot riktig, og de to øvrige typene hører hjemme i avgrensningen.",
    },
    {
      question: "Hva sier en sensorveiledning fra H2020 om begreper listet opp i en oppgavetekst?",
      options: ["At de er forslag som kan, men ikke må, benyttes i besvarelsen", "At de utgjør minstekravet for at oppgaven skal kunne bestås", "At de skal behandles i den rekkefølgen de er ført opp i", "At de bare gjelder for kandidater som velger den lengste oppgaven"],
      explanation: "Å lese en slik liste som en sjekkliste er feil #3 i registeret. Veiledningen sier at det å tvinge inn alle punktene gir en dårligere besvarelse, ikke en bedre — velg de to eller tre som gjør arbeid i din analyse.",
    },
  ],
  'svexfac03-1-4': [
    {
      question: "Hva er homo oeconomicus?",
      options: ["En modell av mennesket som velger det alternativet som best fremmer egne interesser", "En teori om at mennesker i moderne samfunn er blitt mer egoistiske", "Et ideal for hvordan en aktør bør opptre i markeder med mange tilbydere", "En beskrivelse av hvordan økonomer selv treffer beslutninger i sitt eget arbeid"],
      explanation: "Modellen er en idealisering laget for å gjøre systematisk analyse mulig, ikke et portrett og ikke et ideal. Å lese den normativt er en utbredt feil også utenfor faget.",
    },
    {
      question: "Hvilken av modellens forutsetninger gjelder at aktøren kan rangere alle alternativer?",
      options: ["Fullstendige preferanser", "Konsistente preferanser", "Full informasjon om alle alternativene", "Maksimering av det aktøren foretrekker"],
      explanation: "Fullstendighet handler om at rangeringen finnes; konsistens om at den henger sammen og ikke går i sirkel. De to kravene er ulike og kan svikte hver for seg.",
    },
    {
      question: "Hva innebærer forutsetningen om konsistente preferanser?",
      options: ["At rangeringen ikke går i sirkel, slik at A foretrekkes framfor C når A slår B og B slår C", "At aktøren holder fast ved de samme preferansene gjennom hele livet uten å endre dem", "At aktøren kan begrunne preferansene sine på en måte andre vil kunne godta som rimelig", "At preferansene er formet av de samme forholdene som andre aktørers preferanser er"],
      explanation: "Kravet gjelder rangeringens indre sammenheng, ikke hva aktøren foretrekker og ikke om preferansene er stabile over et helt liv. En aktør kan ha konsistente preferanser og likevel ville noe de fleste ville kalt uklokt.",
    },
    {
      question: "Hva presiseres når man sier at egeninteresse ikke er det samme som egoisme?",
      options: ["At aktøren forfølger sine egne preferanser, og at de kan omfatte andres velferd", "At aktøren tar hensyn til andre så lenge det ikke koster henne noe selv", "At modellen bare gjelder økonomiske valg og ikke moralske vurderinger", "At egoisme er et moralsk begrep som ikke hører hjemme i faglig analyse"],
      explanation: "Presiseringen er avgjørende for hva spilleksperimentene viser: i en vid lesning kan gavmildhet forklares som en preferanse for å gi. Leser man forutsetningen som egoisme, blir konklusjonen «mennesker er snillere enn økonomene tror» — og det er ikke det eksperimentene handler om.",
    },
    {
      question: "Hva består diktatorspillet i?",
      options: ["Én deltaker fordeler en sum helt fritt, og den andre mottar det hun får", "Én deltaker foreslår en fordeling, og den andre kan godta eller avslå den", "Begge deltakerne foreslår en fordeling, og den mest gunstige velges tilfeldig", "Én deltaker bestemmer fordelingen etter å ha forhandlet med den andre først"],
      explanation: "Mottakeren har ingen innflytelse i det hele tatt, og det er nettopp derfor spillet er den reneste testen på egeninteresseforutsetningen. Beskrivelsen med godta eller avslå gjelder ultimatumspillet.",
    },
    {
      question: "Hva forutsier modellen i ultimatumspillet?",
      options: ["Et minimumstilbud, som mottakeren godtar fordi noe er bedre enn ingenting", "En jevn fordeling, siden begge parter kjenner reglene på forhånd", "Et høyt tilbud, siden forslagsstilleren frykter å bli avvist av mottakeren", "At ingen fordeling godtas, siden begge parter vil ha hele summen selv"],
      explanation: "Prediksjonen er hele poenget: uten den er eksperimentet en beskrivelse og ikke et argument. Det som faktisk skjer, er at tilbudene ligger langt over minimum og at lave tilbud ofte avvises.",
    },
    {
      question: "Hva er det sterkeste ved funnet om at lave tilbud avvises?",
      options: ["At avvisningen koster den som avviser noe, og derfor ikke kan være billig vennlighet", "At avvisningen gjentar seg i alle land der eksperimentet er blitt gjennomført så langt", "At avvisningen skjer selv når beløpene som står på spill er svært store", "At avvisningen viser at deltakerne ikke har forstått reglene i spillet"],
      explanation: "Deltakeren velger null framfor en liten sum, altså gjør seg selv målbart fattigere. Det skiller funnet fra gavmildheten i diktatorspillet, som koster noe, men ikke skader den som gir.",
    },
    {
      question: "Hvorfor trengs diktatorspillet og ultimatumspillet sammen?",
      options: ["Fordi diktatorspillet utelukker den strategiske forklaringen som ultimatumspillet alene ville tillatt", "Fordi de to spillene måler helt ulike forutsetninger i modellen av mennesket", "Fordi ett enkelt eksperiment aldri kan gi grunnlag for å trekke faglige konklusjoner om mennesker generelt", "Fordi de to spillene er gjennomført på ulike befolkninger i ulike land"],
      explanation: "I ultimatumspillet kan et høyt tilbud forklares med frykt for avvisning. Diktatorspillet fjerner den muligheten, siden mottakeren ikke kan gjøre noe — og likevel gis det penger.",
    },
    {
      question: "Er avvisningen i ultimatumspillet irrasjonell?",
      options: ["Nei, den kan forstås som maksimering av noe annet enn penger", "Ja, siden deltakeren velger et dårligere utfall for seg selv", "Ja, siden ingen preferanse kan forklare handlingen", "Nei, siden deltakeren ikke kjenner motpartens motiver"],
      explanation: "Har mottakeren en preferanse for å ikke bli behandlet urimelig, er avvisningen fullt konsistent med hennes egne mål. Det er dette som gjør at funnet kan leses både som en presisering og som en svekkelse av modellen.",
    },
    {
      question: "Hva er den beste innvendingen mot at spilleksperimentene feller modellen?",
      options: ["At situasjonen er kunstig: små beløp, fremmede deltakere og ingen framtid i spillet", "At eksperimenter aldri kan si noe om hvordan mennesker oppfører seg i virkeligheten", "At deltakerne som regel er studenter og dermed ikke representative", "At funnene ikke er gjentatt tilstrekkelig mange ganger til å regnes som sikre"],
      explanation: "Laboratoriet gir kontroll og mister virkelighetsnærhet, og det er en reell innvending. Men den kan ikke brukes til å avfeie funnene: avvikene er systematiske og går samme vei i mange land.",
    },
    {
      question: "Hva er nåtidsskjevhet?",
      options: ["Systematisk overvekting av det som ligger nær i tid, slik at rangeringen snur", "En generell tilbøyelighet til å vekte framtiden lavere enn nåtiden", "En manglende evne til å forestille seg hvordan framtiden vil komme til å arte seg", "En tendens til å endre planer så snart ny informasjon kommer til"],
      explanation: "Det avgjørende er at rangeringen snur når tidspunktet nærmer seg. En aktør som konsekvent vekter framtiden lavt, er fullt forenlig med modellen — det er reverseringen som bryter med kravet om konsistens.",
    },
    {
      question: "Hvilken forutsetning treffer nåtidsskjevheten?",
      options: ["Fremtidsorientering og selvkontroll", "Egeninteresse og fullstendige preferanser", "Full informasjon om alle tilgjengelige alternativer", "Maksimering av det aktøren selv foretrekker mest"],
      explanation: "Modellen forutsetter at framtidige konsekvenser vektes konsistent og at aktøren gjennomfører det hun har bestemt; nåtidsskjevheten treffer begge deler samtidig. Å forklare fenomenet uten denne koblingen er feil #4, og to sensorveiledninger i gjeldende regime nevner den uttrykkelig.",
    },
    {
      question: "Hva er en preferansereversering over tid?",
      options: ["At aktøren foretrekker A framfor B på avstand og B framfor A når B er nær", "At aktøren skifter mening fordi hun har fått ny og bedre informasjon", "At aktøren rangerer alternativene ulikt avhengig av hvem som spør henne", "At aktørens preferanser endrer seg gradvis gjennom livsløpet hennes"],
      explanation: "Ingenting ved alternativene har endret seg — bare avstanden i tid. En ombestemmelse forutsetter derimot at noe nytt er kommet til, og det er nettopp forskjellen som gjør reverseringen til et brudd med konsistenskravet.",
    },
    {
      question: "Hva er selvbinding?",
      options: ["Å gjøre noe i dag som gjør det vanskeligere for en selv å velge feil senere", "Å love andre at man skal gjennomføre noe man har bestemt seg for", "Å sette seg mål som er så krevende at man må anstrenge seg for å nå dem", "Å velge det alternativet som gir minst anger dersom det skulle gå galt"],
      explanation: "Selvbinding er rasjonell atferd som forutsetter at man ikke stoler på sin egen framtidige rasjonalitet. En aktør som fullt ut oppfylte modellens forutsetninger, ville aldri hatt bruk for den — og at slike ordninger etterspørres, er derfor et indirekte belegg for nåtidsskjevheten.",
    },
    {
      question: "Hva er begrenset rasjonalitet?",
      options: ["At aktørens evne til å skaffe og behandle informasjon er begrenset", "At aktøren bare er rasjonell innenfor visse deler av livet sitt", "At aktøren tar systematisk gale beslutninger på grunn av skjeve inntrykk", "At aktøren mangler den utdanningen som kreves for å regne riktig"],
      explanation: "Poenget er ikke at mennesker er dumme, men at det er kostbart å tenke, og at det derfor er rasjonelt å tenke mindre enn modellen forutsetter. Aktøren gjør ikke feil i forhold til sine egne mål — hun bruker en annen framgangsmåte.",
    },
    {
      question: "Hva er et «godt nok»-valg?",
      options: ["Å søke til noe passerer en terskel, og deretter stoppe", "Å velge det alternativet som er nest best for å spare tid", "Å velge tilfeldig når alternativene er tilnærmet like gode", "Å utsette valget til man har fått oversikt over alle alternativene"],
      explanation: "Maksimereren må vurdere alt for å vite at hun har funnet det beste; den som velger godt nok, vurderer bare til terskelen er passert. Forskjellen i tidsbruk er stor, og forskjellen i utfall ofte liten.",
    },
    {
      question: "Hvilke forutsetninger treffer den begrensede rasjonaliteten?",
      options: ["Full informasjon og maksimering", "Egeninteresse og fullstendige preferanser", "Fremtidsorientering og selvkontroll hos aktøren", "Konsistente preferanser og fullstendige preferanser"],
      explanation: "Aktøren har verken oversikt over alle alternativene eller kapasitet til å behandle dem, og velger derfor noe som er godt nok. De øvrige forutsetningene treffes av spilleksperimentene og av nåtidsskjevheten.",
    },
    {
      question: "Hva er en tommelfingerregel i denne sammenhengen?",
      options: ["En enkel beslutningsregel som gir et brukbart svar raskt", "En regel som myndighetene anbefaler at folk følger i valgsituasjoner", "En regel som gjelder omtrentlig, men som har mange unntak i praksis", "En regel forskeren bruker for å avgjøre hvilke data som skal med"],
      explanation: "Reglene er tilpasninger til at oppmerksomhet er knapp, og de fungerer ofte godt. De bruker ikke all tilgjengelig informasjon, og kan derfor gi systematiske avvik i bestemte situasjoner.",
    },
    {
      question: "Hvorfor er standardvalget et kraftig politikkinstrument?",
      options: ["Fordi mange beholder det alternativet som gjelder om man ikke gjør noe", "Fordi det gjør det ønskede alternativet billigere enn de andre", "Fordi det fjerner de alternativene myndighetene ikke ønsker seg", "Fordi det gir den enkelte informasjon om hva som er lurest å velge"],
      explanation: "Instrumentet følger av den begrensede rasjonaliteten: å velge om koster oppmerksomhet. Standardvalget er derfor et strukturtiltak som forutsetter en passiv menneskemodell, ikke et insentivtiltak.",
    },
    {
      question: "Hva er argumentet for at modellen er «presisert» og ikke svekket?",
      options: ["At funnene lar seg innarbeide uten at grunnstrukturen om å rangere og velge faller", "At funnene bare gjelder i laboratoriet og derfor ikke berører modellens gyldighet i praksis", "At funnene er for få og for usikre til å felle en veletablert modell", "At funnene gjelder enkeltpersoner, mens modellen gjelder markeder"],
      explanation: "En preferanse for rimelighet, en søkekostnad og en ujevn tidsvekting kan alle legges inn uten at modellen bryter sammen. De øvrige svarene avviser funnene i stedet for å innarbeide dem, og det er en helt annen strategi.",
    },
    {
      question: "Hva er den beste innvendingen mot at modellen bare er presisert?",
      options: ["At en modell som kan tilpasses ethvert funn, mister evnen til å forutsi noe bestemt", "At utvidelsene av modellen er faglig urimelige og ikke lar seg begrunne på noen god måte", "At modellen har for mange forutsetninger til å kunne prøves empirisk", "At de fleste økonomer selv har forlatt modellen til fordel for andre"],
      explanation: "Kraften lå i at modellen forutsa noe bestemt og dermed kunne vise seg gal. Er alt forenlig med den, er den gjort uangripelig — og det er noe annet enn å være presisert. Å avvise utvidelsene som urimelige er den svake versjonen av innvendingen.",
    },
    {
      question: "Hva sier prinsippet om at modellen gjelder gjennomsnittsatferd?",
      options: ["At modellen beskriver mønstre i mange valg, ikke hva en bestemt person gjør", "At modellen bare gjelder når mange aktører handler samtidig i et marked", "At modellen forutsetter at aktørene er like og har samme preferanser", "At modellen bare kan prøves mot data fra store og representative utvalg"],
      explanation: "Et enkeltfunn feller derfor ikke modellen. Men argumentet kan misbrukes: avvikene i spilleksperimentene er nettopp systematiske, går samme vei og gjentar seg i mange land, og kan derfor ikke avfeies som støy.",
    },
    {
      question: "Hva innebærer det å bruke prediksjonskraft som vurderingskriterium?",
      options: ["Å spørre hvor godt modellen forutsier atferd på det området den brukes", "Å spørre om modellens forutsetninger er realistiske beskrivelser av mennesker", "Å spørre hvor mange forskere som i dag bruker modellen i sitt arbeid", "Å spørre om modellen kan forklare alle observerte avvik i ettertid"],
      explanation: "Kriteriet spør ikke om forutsetningene er sanne, men om prediksjonene treffer. Målt slik står modellen sterkt i markeder med tydelige priser og gjentatte valg, og svakere i engangssituasjoner der rimelighet og tillit står sentralt.",
    },
    {
      question: "Hvilken menneskemodell er homo oeconomicus?",
      options: ["En aktiv modell, og en svært spesifisert en", "En passiv modell, siden aktøren styres av insentiver utenfra", "En sosial passiv modell, siden preferansene er lært i et fellesskap", "Ingen av delene, siden modellen ikke forklarer enkelthandlinger"],
      explanation: "Der den aktive modellen bare sier at personen vurderer og velger, sier denne modellen nøyaktig hvordan hun vurderer og ut fra hva. Insentiver virker gjennom hennes egen avveining, ikke forbi den.",
    },
    {
      question: "Hva viser eksperimentene om forholdet mellom aktiv og passiv modell?",
      options: ["At avvikene fra homo oeconomicus ikke gjør en passiv modell riktigere", "At en passiv modell forklarer atferden i eksperimentene bedre enn en aktiv", "At skillet mellom aktive og passive modeller ikke er brukbart i eksperimenter", "At deltakerne handler uten å ta stilling til noe når beløpene er små"],
      explanation: "Deltakerne i ultimatumspillet vurderer og velger — de vurderer bare noe annet enn penger. Avvikene svekker en bestemt, streng utgave av den aktive modellen, ikke den aktive modellen som sådan.",
    },
    {
      question: "Hva kjennetegner klimapolitikk utformet for modellen homo oeconomicus?",
      options: ["At den virker gjennom priser, altså avgifter, kvoter og subsidier", "At den virker gjennom å endre hva som er standardvalget for den enkelte", "At den virker gjennom å appellere til hva folk mener er riktig å gjøre", "At den virker gjennom å forenkle valgsituasjonen for dem som skal velge"],
      explanation: "Politikk for modellen forutsetter at aktøren regner, og endrer derfor regnestykket. De øvrige beskrivelsene gjelder tiltak som tar de tre angrepene på alvor og virker gjennom andre kanaler.",
    },
    {
      question: "Hva er svakheten ved en ren prispolitikk, sett i lys av dette kapitlet?",
      options: ["At den virker dårlig der valget er vanepreget eller informasjonen uoversiktlig", "At den bare treffer dem som allerede er opptatt av saken fra før", "At den er langsom og krever gjentatt påvirkning over lang tid", "At den forutsetter en passiv menneskemodell, og derfor er faglig omstridt i dag"],
      explanation: "Prispolitikk forutsetter at valget er en regneoppgave, og treffer derfor dårlig der oppmerksomheten ikke aktiveres. At tiltaket bare treffer dem som alt er opptatt av saken, og at det er langsomt og krever gjentatt påvirkning, gjelder appelltiltak; og prispolitikk forutsetter tvert imot en aktiv menneskemodell.",
    },
    {
      question: "Hva er feil #4 i bokas register?",
      options: ["Å forklare nåtidsskjevhet uten å koble den til modellens forutsetninger", "Å forveksle diktatorspillet med ultimatumspillet i redegjørelsen for funnene", "Å lese egeninteresse i modellen som egoisme i moralsk forstand", "Å hevde at eksperimentene beviser at modellen er ubrukelig"],
      explanation: "Feilen er å beskrive at folk utsetter ting uten å si hvilken forutsetning fenomenet treffer. Reparasjonen koster én setning, og den bør stå i hvert svar om temaet.",
    },
    {
      question: "Hvorfor er det viktig å lese modellens forutsetninger som seks separate påstander?",
      options: ["Fordi hvert av angrepene treffer sin egen forutsetning, og kritikken ellers blir upresis", "Fordi de seks forutsetningene ble innført på ulike tidspunkter i fagets historie", "Fordi bare noen av forutsetningene er nødvendige for at modellen skal virke", "Fordi de seks forutsetningene tilhører hver sin pensumforfatter i emnet"],
      explanation: "Spilleksperimentene treffer egeninteressen, nåtidsskjevheten fremtidsorienteringen og selvkontrollen, og den begrensede rasjonaliteten full informasjon og maksimering. En kritikk som retter seg mot «modellen» under ett, kan ikke besvares — og kan derfor heller ikke gi uttelling.",
    },
    {
      question: "Hvem eier framstillingen av spilleksperimentene og nåtidsskjevheten i dette emnet?",
      options: ["Nyborg, i kapitlet om den økonomiske modellen av mennesket", "Balsvik, i kapitlet om rasjonalitetsantakelser i samfunnsvitenskapene", "Elster, i framstillingen av de tre normtypene og kollektiv handling", "Aakvaag, i kapitlet om samfunnsvitenskapenes forhold til biologien"],
      explanation: "Nyborg eier eksperimentene, nåtidsskjevheten og den manglende selvkontrollen. Balsvik eier modellens forutsetninger og den begrensede rasjonaliteten — å tilskrive spillene til Balsvik alene er den vanligste tilskrivningsfeilen i temaet.",
    },
  ],
  'svexfac03-1-5': [
    {
      question: "Hva er en norm?",
      options: ["En regel for hva man skal gjøre, med en reaksjon knyttet til brudd", "En handling som gjentas så ofte at den blir vanlig i et miljø", "En lov eller forskrift som håndheves av en offentlig myndighet", "En verdi som medlemmene av et samfunn er enige om å slutte opp om"],
      explanation: "Normen er en regel med en form for sanksjon, om enn bare en indre. En vane er noe man gjør, ikke noe man skal gjøre, og loven er bare én av flere måter å håndheve en norm på.",
    },
    {
      question: "Hva utløser en moralsk norm?",
      options: ["Aktørens egen oppfatning av hva som er riktig", "At de andre i gruppen faktisk gjør sin del", "At handlingen kan observeres av andre rundt henne", "At en myndighet har vedtatt regelen og kan straffe brudd"],
      explanation: "Den moralske normen er internalisert og virker uavhengig av omgivelsene. De øvrige beskrivelsene gjelder henholdsvis den kvasimoralske normen, den sosiale normen og en formell regel.",
    },
    {
      question: "Hva kjennetegner en kvasimoralsk norm?",
      options: ["At den er betinget av at andre bidrar, og faller bort når de slutter", "At den er delvis internalisert og derfor virker svakere enn en moralsk norm", "At den håndheves av et fellesskap gjennom små, hverdagslige reaksjoner", "At den gjelder handlinger som ligger i grenselandet mellom moral og skikk"],
      explanation: "Betingelsen er det avgjørende: aktøren bidrar fordi de andre bidrar. Håndheving gjennom små reaksjoner gjelder den sosiale normen, og «kvasi» viser til betingelsen — ikke til at normen er en svakere utgave av en moralsk.",
    },
    {
      question: "Hvem kommer sanksjonen fra ved en sosial norm?",
      options: ["Fra omgivelsene, i form av misbilligelse fra dem som ser handlingen", "Fra aktøren selv, i form av dårlig samvittighet over å ha brutt regelen", "Fra en myndighet som kan ilegge gebyr eller andre formelle reaksjoner", "Fra gruppen som helhet, gjennom formelle vedtak om utestengelse"],
      explanation: "Den sosiale normen virker gjennom andres reaksjoner, og følelsen ved brudd er skam snarere enn skyld. Den indre sanksjonen hører til den moralske normen, og formelle vedtak er noe annet enn uformell misbilligelse.",
    },
    {
      question: "Hva er testen som skiller de tre normtypene?",
      options: ["Hva som må være til stede for at normen skal virke", "Hvor sterkt normen oppleves av dem som følger den", "Hvor lenge normen har vært gjeldende i samfunnet", "Hvor mange i gruppen som faktisk følger normen"],
      explanation: "Ingenting utenfor aktøren gir en moralsk norm, at andre bidrar gir en kvasimoralsk, og at noen ser henne gir en sosial. Innholdet i normen sier ingenting om typen — samme handling kan bæres av alle tre.",
    },
    {
      question: "Hva er forskjellen på skyld og skam som reaksjon på normbrudd?",
      options: ["Skyld er rettet innover mot handlingen, skam utover mot å bli sett", "Skyld gjelder alvorlige brudd, mens skam gjelder mindre alvorlige", "Skyld oppstår straks, mens skam først kommer en tid etterpå", "Skyld gjelder egne handlinger, mens skam gjelder gruppens handlinger"],
      explanation: "Skillet er en rask indikator på normtype: kjenner aktøren ubehag når ingen ser, er normen internalisert. Det er en analytisk beskrivelse av hva som virker, ikke en rangering av mennesker.",
    },
    {
      question: "Hva menes med observasjonsavhengighet?",
      options: ["At normens virkning avhenger av om atferden kan ses av andre", "At forskeren må observere atferden direkte for å kunne studere normen", "At normen bare gjelder i situasjoner der flere er til stede samtidig", "At normens styrke avhenger av hvor mange som følger den i praksis"],
      explanation: "Dette er den egenskapen som betyr mest praktisk: atferd som skjer i det skjulte, kan ikke bæres av sosiale normer alene. Det er også hovedargumentet i drøftingen av om normer kan erstatte myndighetssanksjoner.",
    },
    {
      question: "Hva er mikrosanksjoner?",
      options: ["Små hverdagsreaksjoner som blikk og kommentarer, som håndhever sosiale normer", "Mindre bøter som ilegges for brudd på regler av liten alvorlighetsgrad i praksis", "Sanksjoner som rammer enkeltpersoner i stedet for hele grupper", "Reaksjoner som kommer så sent at de ikke lenger påvirker atferden"],
      explanation: "Mekanismen er nesten usynlig enkeltvis og svært virksom til sammen, fordi den kommer ofte og fra mange. Begrepet hører til Sollis framstilling av handlings- og bytteperspektivet på sosial orden.",
    },
    {
      question: "Hva er et kollektivt gode?",
      options: ["Et gode ingen kan stenges ute fra, slik at ingen har egeninteresse i å betale for det", "Et gode som eies av fellesskapet og forvaltes av offentlige myndigheter på vegne av alle", "Et gode som fordeles likt mellom alle medlemmene i et samfunn", "Et gode som blir mer verdt jo flere som bruker det samtidig"],
      explanation: "Ved et kollektivt gode er problemet å få noen til å bidra. Ved en felles ressurs er problemet det motsatte — å få noen til å holde igjen — og de to strukturene forveksles ofte.",
    },
    {
      question: "Hva er problemet ved en felles ressurs?",
      options: ["Å få aktørene til å holde igjen, siden ressursen er knapp", "Å få aktørene til å bidra, siden ingen kan stenges ute fra godet", "Å avgjøre hvem som har rett til å bruke ressursen i utgangspunktet", "Å måle hvor mye ressursen faktisk tåler før den blir overbelastet"],
      explanation: "Ved en felles ressurs reduserer én persons bruk faktisk hva som er igjen til de andre, og derfor er overforbruk problemet. Bidragsproblemet gjelder kollektive goder, som er den motsatte strukturen.",
    },
    {
      question: "Hva er mekanismen i en allmenningens tragedie?",
      options: ["At gevinsten ved ekstra bruk er privat, mens kostnaden fordeles på alle", "At aktørene mangler kunnskap om hvor mye ressursen faktisk tåler", "At noen aktører bevisst utnytter en ordning på andres bekostning", "At ingen myndighet har tatt ansvar for å regulere bruken av den felles ressursen"],
      explanation: "Asymmetrien mellom hvem som får gevinsten og hvem som bærer kostnaden er hele mekanismen. Tragedien forutsetter verken uvitenhet eller ond vilje — den oppstår også når alle ser hva som kommer.",
    },
    {
      question: "Hvorfor er ordet «tragedie» treffende i denne sammenhengen?",
      options: ["Fordi utfallet følger av strukturen og ikke av at noen ønsker det", "Fordi konsekvensene som regel er alvorlige og vanskelige å reparere", "Fordi de som rammes hardest sjelden er de samme som forårsaket problemet", "Fordi problemet gjentar seg selv om det er kjent fra tidligere tilfeller"],
      explanation: "Ingen ønsker utfallet, og hver enkelt handler fornuftig. Det er derfor problemet ikke lar seg løse ved å be folk skjerpe seg, men bare ved å endre situasjonen de handler i.",
    },
    {
      question: "Hva er en gratispassasjer?",
      options: ["En aktør som nyter godt av et fellesgode uten å bidra til det", "En aktør som bevisst utnytter fellesskapet til egen vinning på andres bekostning", "En aktør som mottar en ytelse hun ikke har rett til å motta", "En aktør som bidrar mindre enn hun har mulighet til å bidra"],
      explanation: "Begrepet beskriver en posisjon i en insentivstruktur, og posisjonen er den rasjonelle responsen på at godet kommer uansett. Brukt som anklage mister begrepet sin analytiske verdi, og analysen retter seg mot personene i stedet for mot strukturen.",
    },
    {
      question: "Hva skiller gratispassasjerproblemet fra allmenningens tragedie?",
      options: ["Det ene gjelder å ikke bidra, det andre å ta for mye ut", "Det ene gjelder enkeltpersoner, det andre gjelder stater og organisasjoner", "Det ene har en løsning gjennom regulering, det andre har det ikke", "Det ene forutsetter en aktiv modell, det andre en passiv modell"],
      explanation: "Begge følger av at gevinst og kostnad er ulikt fordelt, men de peker mot ulike tiltak: mot bidraget i det ene tilfellet, mot uttaket i det andre. Koblingen mellom dem er honorert i en sensorveiledning fra V2022.",
    },
    {
      question: "Hva betyr det at en handling er individuelt rasjonell?",
      options: ["At den er best for den som handler, gitt situasjonen og hva de andre gjør", "At den er begrunnet i aktørens egen interesse framfor i fellesskapets", "At den er den samme handlingen som de fleste andre ville valgt", "At den gir et godt utfall for aktøren når alle konsekvenser er talt med"],
      explanation: "Individuell rasjonalitet er ikke det samme som egoisme: hytteeieren som vanner kan gjerne ønske at brønnen holder, men hennes egen avståelse ville ikke redde den. En handling kan derfor være individuelt rasjonell og kollektivt katastrofal samtidig.",
    },
    {
      question: "Hva er et kollektivt handlingsproblem?",
      options: ["At individuelt rasjonelle valg gir et utfall alle er tjent med å unngå", "At partene i en konflikt vil ulike ting og derfor ikke blir enige", "At en gruppe er for stor til å kunne treffe beslutninger effektivt", "At kostnadene ved et fellestiltak er ujevnt fordelt mellom deltakerne"],
      explanation: "I et kollektivt handlingsproblem vil alle det samme — de klarer bare ikke å få det til. Det skiller problemet fra en interessekonflikt, og det er derfor det ikke lar seg løse ved forhandling om hva man vil.",
    },
    {
      question: "Hva er de tre klassiske svarene på en allmenningens tragedie?",
      options: ["Privat eiendom, regulering ovenfra og selvorganisering blant brukerne", "Informasjon, appell til moralen og frivillige avtaler mellom parter", "Avgifter, kvoter og forbud vedtatt av en overordnet myndighet", "Overvåking, sanksjoner og utestengelse av dem som bryter reglene"],
      explanation: "De tre angriper ulike ledd: den første fjerner asymmetrien, den andre endrer regnestykket, den tredje endrer hva den enkelte har grunn til å gjøre. Hvilket som er best, er et politisk spørsmål boka ikke tar stilling til.",
    },
    {
      question: "Hvorfor virker sosiale normer best i små grupper?",
      options: ["Fordi man der vet hva de andre gjør, og fordi man møtes igjen", "Fordi medlemmene i små grupper har mer til felles enn i store", "Fordi normene i små grupper er strengere enn i store grupper", "Fordi det er lettere å bli enige om reglene når man er få"],
      explanation: "Poenget er hvilke mekanismer som er tilgjengelige, ikke at folk er mer moralske på små steder. I en stor og anonym gruppe faller både observasjonen og den gjentatte omgangen bort.",
    },
    {
      question: "Hva er hovedargumentet mot at normer alene kan løse store kollektive handlingsproblemer?",
      options: ["At sosiale og kvasimoralske normer krever synlighet og gjentatt omgang", "At normer alltid er svakere enn formelle sanksjoner uansett gruppestørrelse", "At normer varierer for mye mellom land til å kunne brukes internasjonalt", "At normer bare virker på dem som allerede deler målet med tiltaket"],
      explanation: "I verdenssamfunnet mangler både observasjonen og den gjentatte omgangen som mekanismene hviler på. Det er ikke det samme som at normer er svake der de faktisk virker.",
    },
    {
      question: "Hva er styrken ved en formell myndighetssanksjon?",
      options: ["At den virker i store og anonyme grupper der ingen har oversikt", "At den er billigere å håndheve enn uformelle reaksjoner er", "At den treffer også dem som er uenige i regelen den håndhever", "At den gir den enkelte en mulighet til å klage på avgjørelsen"],
      explanation: "Den formelle sanksjonen virker uavhengig av om noen kjenner deg, og det er dens fremste fortrinn. Den koster derimot å håndheve, og krever at bruddet kan oppdages og bevises.",
    },
    {
      question: "Hva er en bakside ved sosiale sanksjoner som en drøfting bør nevne?",
      options: ["At de kan håndheve normer ingen har vedtatt, og ikke gir noen ankemulighet", "At de er dyrere å opprettholde over tid enn formelle sanksjoner viser seg å være", "At de bare rammer dem som allerede er marginale i gruppen fra før", "At de forutsetter at alle i gruppen er enige om hva normen krever"],
      explanation: "Sosiale normer er ikke en mild løsning: de er reelle sanksjoner, og de mangler den prosessen formelle sanksjoner har. Å skrive dette viser at kandidaten behandler begge sider like grundig.",
    },
    {
      question: "Hva vinner man på å ramme inn klimaproblemet som en allmenningens tragedie?",
      options: ["At problemet forklares uten å anta at noen er uvitende eller ondsinnede", "At ansvaret plasseres tydelig hos de landene som slipper ut mest", "At problemet framstår som mer alvorlig enn andre miljøproblemer", "At løsningen blir enklere å finne, siden strukturen er godt kjent fra tidligere"],
      explanation: "Innrammingen forklarer også hvorfor enkelttiltak fra én aktør ikke løser noe, og peker mot å endre hva den enkelte har grunn til å gjøre. Den plasserer derimot ikke ansvar — det er nettopp et av dens svake punkter.",
    },
    {
      question: "Hva fanger ikke innrammingen av klimaproblemet som en allmenningens tragedie?",
      options: ["Fordelingsspørsmålet, siden analysen forutsetter at aktørene er like i strukturen", "Selve mekanismen bak overforbruket, som krever et annet apparat", "Sammenhengen mellom individuelle valg og samlede utslipp over tid", "Betydningen av at ressursen er knapp og ikke uten videre lar seg erstatte av andre goder"],
      explanation: "Land har svært ulike utslipp historisk og i dag, og svært ulik evne til å bære kostnader. Analysen behandler ressursen som et teknisk problem og kan dermed skjule at det er strid om hvem som skal bære byrden.",
    },
    {
      question: "Hvilken kobling sier en sensorveiledning fra V2022 uttrykkelig at skal belønnes?",
      options: ["Allmenningens tragedie koblet til gratispassasjerproblemet eller til handlings- og bytteperspektivet", "Normtypene koblet til skillet mellom aktive og passive menneskemodeller i utformingen av klimatiltak", "Kollektiv handling koblet til skillet mellom intern og ekstern forskningsetikk", "Individuell rasjonalitet koblet til de fire perspektivene på sosial orden samlet"],
      explanation: "Dette er et av de få stedene i materialet der en bestemt kobling honoreres ved navn. Koblingen må gjøre arbeid: si at mikrosanksjonene er mekanismen som gjør sosiale normer virksomme, og at de dermed forklarer hvordan orden kan oppstå uten myndighet.",
    },
  ],
  'svexfac03-2-1': [
    {
      question: "Hva er kjernen i Marx' menneskesyn, slik Aakvaag framstiller det?",
      options: ["Mennesket realiserer seg selv ved å bearbeide naturen etter en plan det har lagt på forhånd", "Mennesket er først og fremst et vesen som søker mening i det det foretar seg", "Mennesket får sine behov og sine begjær formet av det samfunnet det vokser opp i", "Mennesket velger hele tiden de midlene som gir det beste utfallet for det selv i en gitt situasjon"],
      explanation: "Marx plasserer det menneskelige i den skapende virksomheten: vi planlegger en forandring og gjennomfører den. Svaret om å søke mening er Webers menneskesyn, og svaret om at behovene formes sosialt er Durkheims — begge er nære naboer og forveksles ofte. Svaret om beste utfall beskriver homo oeconomicus-modellen, som ikke er et menneskesyn hos noen av klassikerne.",
    },
    {
      question: "Hva er forskjellen på praksis og lønnsarbeid hos Marx?",
      options: ["Praksis er all planlagt bearbeiding av naturen, mens lønnsarbeid er én historisk form for den", "Praksis er arbeid man gjør frivillig, mens lønnsarbeid alltid utføres under en eller annen form for tvang", "Praksis gjelder åndelig virksomhet, mens lønnsarbeid gjelder produksjon av fysiske ting", "Praksis er arbeid utført i fellesskap med andre, mens lønnsarbeid utføres av den enkelte alene og for egen regning"],
      explanation: "Skillet er viktig fordi menneskesynet kan forsvares uavhengig av kapitalismekritikken: praksis finnes også der ingen får lønn. Svaret om frivillighet og tvang gjør et historisk skille om til et psykologisk, og svaret om åndelig mot fysisk innfører en motsetning Marx ikke bruker.",
    },
    {
      question: "Hva menes med objektivering hos Marx?",
      options: ["At mennesket legger noe av seg selv inn i det det lager, slik at resultatet uttrykker egne evner", "At arbeideren behandles som en gjenstand av den som eier produksjonsmidlene i den virksomheten hun jobber i", "At forskeren beskriver samfunnet nøkternt og uten å la egne verdier prege framstillingen av det han studerer", "At et produkt får en pris i markedet og dermed kan sammenlignes med alle andre produkter"],
      explanation: "Objektivering er den normale, positive siden av arbeidet, og fremmedgjøring er det som skjer når den slår om. Svaret om at arbeideren behandles som en gjenstand er en nær distraktor, men beskriver et resultat av bestemte forhold og ikke selve begrepet. Svaret om nøktern framstilling forveksler begrepet med objektivitet i vitenskapsteoretisk forstand.",
    },
    {
      question: "Hva er artsvesenet hos Marx?",
      options: ["De evnene som gjør mennesket til menneske, brukt som målestokk for faktiske arbeidsforhold", "Den biologiske arven som setter grenser for hva mennesker kan lære og utrette i et samfunn", "Fellesskapet av alle arbeidende, som Marx mener bør overta produksjonsmidlene", "De behovene alle mennesker deler uansett historisk epoke, og som lar seg kartlegge empirisk på tvers av samfunn"],
      explanation: "Artsvesenet er en målestokk for hva et menneskeliv kunne vært, ikke en beskrivelse av hvordan folk faktisk har det. Svaret om biologisk arv forveksler begrepet med en naturgitt begrensning, og svaret om felles behov gjør målestokken om til en empirisk påstand — da blir fremmedgjøringsdiagnosen selvmotsigende.",
    },
    {
      question: "Hva er fremmedgjøring hos Marx knyttet til?",
      options: ["Måten produksjonen er organisert på, ikke arbeid i seg selv eller den enkeltes opplevelse", "Den enkeltes følelse av å stå utenfor fellesskapet på arbeidsplassen sin over lengre tid", "Graden av fysisk slit i arbeidet, som gjør at kroppen tar skade av den daglige innsatsen", "Fraværet av felles normer som kunne gitt arbeidstakerne en retning å innrette seg etter"],
      explanation: "Fremmedgjøring er en strukturell diagnose: den beskriver hvordan forholdene er innrettet, og en person kan trives godt og likevel være fremmedgjort. Svaret om følelsen av å stå utenfor er dagligtalens betydning, og svaret om manglende felles normer beskriver Durkheims anomi — de to diagnosene har ulike forankringer og må holdes fra hverandre.",
    },
    {
      question: "Hvilket ledd i fremmedgjøringsbegrepet gjelder eierskapet til resultatet av arbeidet?",
      options: ["Fremmedgjøring fra produktet, der det som lages tilhører noen andre enn den som lagde det", "Fremmedgjøring fra arbeidsprosessen, der tempo og metode er bestemt av noen andre enn deg", "Fremmedgjøring fra artsvesenet, der arbeidet blir et rent middel til å skaffe seg utkomme", "Fremmedgjøring fra andre mennesker, der de andre framstår som konkurrenter"],
      explanation: "Produkt-leddet handler om hvem resultatet tilhører. Prosess-leddet gjelder kontrollen over virksomheten, artsvesen-leddet er konsekvensen av de to første, og det siste leddet gjelder relasjonene. Alle fire er reelle ledd — poenget er å kunne si hvilket et gitt tilfelle treffer.",
    },
    {
      question: "En ansatt eier selv utstyret sitt, men får oppdragene tildelt av et system som måler tiden hun bruker. Hvilket ledd treffer best?",
      options: ["Fremmedgjøring fra arbeidsprosessen, siden styringen over virksomheten ligger utenfor henne", "Fremmedgjøring fra produktet, siden verdien av arbeidet tilfaller den som eier systemet", "Fremmedgjøring fra artsvesenet, siden arbeidet ikke gir rom for å planlegge eller skape noe", "Fremmedgjøring fra andre mennesker, siden hun konkurrerer med andre om de beste oppdragene"],
      explanation: "Det som er tatt fra henne, er styringen over selve virksomheten — tempo, rekkefølge og metode. Produkt-leddet passer dårlig nettopp fordi hun eier utstyret selv, og de to andre leddene kan være til stede, men er ikke det opplysningene i spørsmålet peker på. Å si hvilket ledd som treffer **best**, er selve ferdigheten eksempeloppgaven måler.",
    },
    {
      question: "Hvorfor kalles fremmedgjøring fra artsvesenet en konsekvens og ikke et selvstendig ledd?",
      options: ["Fordi den følger av at både resultatet og kontrollen over arbeidet er tatt fra arbeideren", "Fordi den bare oppstår i yrker der arbeidet er fysisk tungt og gjentakende over lang tid", "Fordi den er den eneste av de fire som lar seg måle direkte i et empirisk materiale", "Fordi den handler om forholdet til kollegene og derfor forutsetter at man arbeider sammen"],
      explanation: "Når produktet og prosessen begge er tatt fra mennesket, blir arbeidet redusert til et middel til å overleve — og forbindelsen til egne muligheter ryker. Svaret om fysisk tungt arbeid gjør leddet til en påstand om slit, og svaret om kolleger blander det sammen med leddet om andre mennesker.",
    },
    {
      question: "Hva gjelder leddet «fremmedgjøring fra andre mennesker»?",
      options: ["At måten arbeidet er organisert på, gjør andre til midler eller hindringer i stedet for til fellesskap", "At arbeideren mister kontakten med familien sin fordi arbeidstiden legger beslag på det aller meste av dagen", "At produktet selges til ukjente kjøpere som arbeideren aldri får møte, fordi varen forsvinner ut i et marked ingen har oversikt over", "At samfunnets felles verdier svekkes når stadig flere yrker krever helt ulik kompetanse av folk"],
      explanation: "Leddet gjelder relasjonene mellom mennesker, og mekanismen er at organiseringen gjør dem til konkurrenter. Svaret om familien flytter poenget til arbeidstid, svaret om ukjente kjøpere ligger nærmere produkt-leddet, og svaret om felles verdier beskriver Durkheims problemstilling og ikke Marx'.",
    },
    {
      question: "Hvorfor er det galt å si «arbeideren føler seg fremmedgjort»?",
      options: ["Fordi fremmedgjøring er en påstand om hvordan arbeidet er organisert, ikke om en opplevelse", "Fordi Marx mener at arbeidere sjelden er klar over sin egen situasjon i produksjonen", "Fordi følelser ikke kan undersøkes vitenskapelig og derfor faller utenfor samfunnsfagene", "Fordi begrepet bare gjelder grupper av arbeidere og aldri kan brukes om enkeltpersoner"],
      explanation: "Fremmedgjøring er en relasjon, ikke en stemning: en person kan trives og likevel være fremmedgjort. Svaret om manglende bevissthet er en annen påstand hos Marx og ikke det begrepet betyr. Svaret om at følelser ikke kan undersøkes er dessuten faglig galt — de kan det, men det er ikke dette begrepet handler om.",
    },
    {
      question: "Hvordan vurderer Marx og Durkheim den samme arbeidsdelingen?",
      options: ["Marx ser den som fremmedgjørende, mens Durkheim ser den som en kilde til gjensidig avhengighet", "Begge ser den som fremmedgjørende, men Marx knytter den til eierskapet og Durkheim til moralen i samfunnet", "Marx ser den som integrerende, mens Durkheim mener den løser opp båndene fordi spesialiseringen gir færre felles erfaringer", "Begge ser den som integrerende, men de er uenige om hvor raskt den brer seg i samfunnet"],
      explanation: "De to er ikke uenige om hva som skjer, men om hva det betyr, fordi de måler mot ulike målestokker: menneskets selvrealisering hos Marx, samfunnets integrasjon hos Durkheim. Svaret som snur de to er den vanligste forvekslingen, og svaret om at begge ser den som fremmedgjørende overser at Durkheim regner den som limet i moderne samfunn.",
    },
    {
      question: "Hva innebærer det at arbeidskraften er en vare?",
      options: ["At arbeideren selger disposisjonsretten over egen tid, ikke et ferdig resultat av arbeidet", "At lønnen fastsettes av tilbud og etterspørsel i stedet for av avtaler mellom partene", "At arbeidsgiveren kan si opp arbeideren når som helst når det passer virksomheten best rent økonomisk", "At arbeidet kan utføres av hvem som helst fordi ingen spesiell kompetanse er nødvendig, og derfor kan kjøpes billig"],
      explanation: "Skillet mellom å selge et produkt og å selge arbeidsevne er det som binder sammen de to første fremmedgjøringsleddene: kjøperen bestemmer i det avtalte tidsrommet. Svaret om lønnsdannelse beskriver et marked, men ikke selve begrepet, og svaret om oppsigelse gjelder stillingsvernet.",
    },
    {
      question: "Hva er forskjellen på produktivkrefter og produksjonsforhold?",
      options: ["Produktivkrefter er redskaper, kunnskap og arbeidsevne; produksjonsforhold er relasjonene mellom mennesker", "Produktivkrefter er den samlede produksjonen i et land; produksjonsforhold er hvordan den fordeles mellom grupper", "Produktivkrefter er arbeidernes innsats; produksjonsforhold er eiernes kapital og investeringer", "Produktivkrefter er teknologien i en bransje; produksjonsforhold er lovene som regulerer bransjen"],
      explanation: "Det ene er hva vi produserer **med**, det andre er hvordan vi er ordnet i forhold til hverandre mens vi gjør det. Svaret om samlet produksjon og fordeling er et nasjonalregnskapsbegrep, og svaret om lover gjør produksjonsforhold til rettsregler — de er sosiale relasjoner, uavhengig av om de er lovfestet.",
    },
    {
      question: "Hva definerer klasse i Marx' klassebegrep?",
      options: ["Posisjonen i produksjonen: om man eier produksjonsmidler eller lever av å selge arbeidskraft", "Inntektsnivået, slik at grensene mellom klassene kan trekkes ved bestemte inntektsterskler", "Utdanningsnivå og yrkestittel, som til sammen avgjør hvilken status man har i samfunnet", "Livsstil og smak, som viser hvilken gruppe man selv regner seg som en del av til daglig"],
      explanation: "Klasse er definert av posisjon, ikke av inntekt, tittel eller smak. Weber legger til stand og markedssituasjon som egne dimensjoner, slik at status kan variere uavhengig av eierskap — svarene om yrkestittel og livsstil ligger nærmere den bredere webersk inspirerte forståelsen enn Marx' skarpe begrep.",
    },
    {
      question: "Hva skiller utbytting fra fremmedgjøring?",
      options: ["Utbytting gjelder fordelingen av verdien, fremmedgjøring gjelder forholdet til virksomheten", "Utbytting gjelder bare fysisk arbeid, mens fremmedgjøring bare rammer arbeid av mer åndelig karakter", "Utbytting er et moralsk begrep hos Marx om urettferdig behandling, mens fremmedgjøring er et rent økonomisk begrep", "Utbytting rammer enkeltpersoner, mens fremmedgjøring bare kan ramme hele yrkesgrupper"],
      explanation: "En arbeider kan i prinsippet være godt betalt og likevel fremmedgjort, og derfor må de to diagnosene holdes fra hverandre. Svaret om moralsk mot økonomisk snur det på hodet: utbytting er hos Marx et analytisk begrep om en systematisk mekanisme, ikke en påstand om at noen er slemme.",
    },
    {
      question: "Hvorfor legger Marx vekt på at kapitalismen er en historisk produksjonsmåte?",
      options: ["Fordi en ordning som har blitt til, også kan forandres — og det er premisset for kritikken", "Fordi den etter hans mening er den siste samfunnsformen menneskeheten noensinne kommer til å utvikle", "Fordi den oppsto tidligere enn andre samfunnsformer og derfor har hatt lengst tid på seg til å prege menneskene i den", "Fordi historiske forhold er lettere å undersøke empirisk enn forhold som gjelder i dag"],
      explanation: "Historisiteten er forutsetningen for at diagnosen kan ha kritiske ambisjoner: er ordningen naturgitt, er kritikk meningsløs. Svaret om den siste samfunnsformen er en påstand Marx nettopp ikke gjør om kapitalismen, og svaret om at den oppsto tidligst er historisk galt.",
    },
    {
      question: "Hvem eier framstillingen av ideologi, klasse og stand som mekanismer for sosial orden?",
      options: ["Solli, i framstillingen av konfliktperspektivet blant de fire perspektivene på sosial orden", "Aakvaag, i framstillingen av de tre klassikernes menneskesyn og av samtidsdiagnosene deres over det moderne samfunnet", "Balsvik, i framstillingen av menneskemodeller og av rasjonalitetsantakelser i faget", "Malnes, i framstillingen av Hobbes og Hume som konflikt- og harmonitenkere i samfunnsfilosofien"],
      explanation: "De fire perspektivene på sosial orden tilhører Sollis framstilling, og der brukes ideologi, klasse og stand som ordensmekanismer under konfliktperspektivet. Aakvaag eier menneskesynene og samtidsdiagnosene, Balsvik eier menneskemodellene, og Malnes eier Hobbes og Hume — å bytte om er en tilskrivningsfeil sensor merker umiddelbart.",
    },
    {
      question: "Hva menes med formell frihet?",
      options: ["Friheten som ligger i rettigheter og fravær av forbud: du har lov til å velge og til å nekte", "Friheten som ligger i å ha ressurser nok til at valget mellom alternativene betyr noe", "Friheten til å velge hvilke mål man selv vil sette seg, uavhengig av hva systemene rundt legger opp til", "Friheten fra sosiale normer som ellers ville bestemt hva man kan forvente seg av livet, og som holder begjæret i tømme"],
      explanation: "Formell frihet sier hva du har lov til; reell frihet sier hva du faktisk kan gjøre. Svaret om ressurser er nettopp reell frihet, svaret om å velge mål er Webers frihetsbegrep, og svaret om fravær av normer er den friheten Durkheim mener kan bli for mye.",
    },
    {
      question: "Hva menes med reell frihet?",
      options: ["Å ha faktiske alternativer: ressurser, tid og handlingsrom nok til at valget betyr noe", "Å ha de samme rettighetene som alle andre borgere i samfunnet, uten unntak eller forbehold", "Å kunne handle uten å måtte ta hensyn til hva andre mennesker mener om det man foretar seg", "Å være fri fra ytre press slik at man kan følge sin egen overbevisning i ethvert spørsmål"],
      explanation: "Reell frihet er en påstand om muligheter, ikke om tillatelser — og det er derfor Marx kan si at en formelt fri arbeidsavtale kan være inngått under ufrihet. Svaret om samme rettigheter er formell frihet, og de to siste svarene beskriver uavhengighet av andre, som er en annen akse helt.",
    },
    {
      question: "Hva er Marx' frihetsdiagnose for det moderne samfunnet?",
      options: ["At den formelle friheten er bred, mens den reelle friheten er svært ulikt fordelt", "At friheten er blitt for stor fordi de normene som ga forventningene retning, er svekket", "At friheten innsnevres av rasjonaliserte ordninger som definerer alternativene på forhånd", "At friheten er tilstrekkelig sikret så lenge rettighetene gjelder likt for alle borgere"],
      explanation: "Marx' mekanisme er den materielle: rettighetene er like, mulighetene er det ikke. Svaret om svekkede normer er Durkheims anomidiagnose, og svaret om rasjonaliserte ordninger er Webers — alle tre ender i en kritikk av moderniteten, men mekanismene er ulike, og det er nettopp det sammenligningsleddet spør etter.",
    },
    {
      question: "Hvem framstiller de tre klassikernes menneskesyn i pensum?",
      options: ["Aakvaag, som også framstiller samtidsdiagnosene og de fire kravene til en slik diagnose", "Solli, som framstiller de fire perspektivene på sosial orden og aktør- og strukturbegrepet", "Balsvik, som framstiller menneskemodeller og rasjonalitetsantakelser i samfunnsvitenskapene", "Grimen, som framstiller verdifrihetslæren og skillet mellom erkjennelse og vurdering i samfunnsforskningen"],
      explanation: "Menneskesynene til Marx, Weber og Durkheim tilhører Aakvaags framstilling, sammen med samtidsdiagnosens fire krav. De tre andre er reelle avsendere i emnet, men eier andre begreper — og en feilplassert avsender er noe av det sensor legger merke til raskest i et redegjørelsesledd.",
    },
    {
      question: "Hva ber menneskesyn-oppgaven først og fremst om?",
      options: ["En framstilling av hva slags vesen mennesket er, ikke en gjennomgang av kapitalismens virkemåte", "En framstilling av hvordan kapitalismen fungerer i praksis, med menneskesynet som en kort innledning", "En vurdering av om klassikernes teorier er empirisk holdbare i lys av nyere forskning", "En sammenligning av hvordan de tre klassikerne så på metode, og av hva hver av dem regnet som gyldig kunnskap"],
      explanation: "Oppgaven spør om menneskesyn, og en besvarelse som glir over i samfunnsteori bruker tid på noe det ikke ble spurt om. Svaret om empirisk holdbarhet hører til drøftingen av samtidsdiagnoser, og svaret om metode gjelder en annen del av pensum helt.",
    },
    {
      question: "Hva er det avgjørende trinnet i en eksempeloppgave?",
      options: ["Å si eksplisitt hvilken mekanisme i eksempelet som svarer til hvilket ledd i begrepet", "Å velge et eksempel som er så konkret og detaljert som mulig, slik at leseren ser det for seg", "Å hente eksempelet fra et fagfelt som er nevnt i pensum, slik at koblingen blir opplagt", "Å gi flere eksempler, slik at bredden i forståelsen kommer tydelig fram for den som retter"],
      explanation: "Å navngi begrepet og gi eksempelet klarer nesten alle; det er begrunnelsen som skiller besvarelsene. Svaret om detaljrikdom er en vanlig felle — saksfeltet gir null uttelling i seg selv — og svaret om flere eksempler forveksler mengde med anvendelse.",
    },
    {
      question: "En kandidat skal gjøre rede for Marx' menneskesyn, og skriver en halv side om merverdi og klassekamp. Hvilken feil er dette nærmest?",
      options: ["Å beskrive teorien i stedet for å svare på det oppgaven faktisk spurte om, altså feil 14", "Å gi eksempler uten å begrunne hvorfor de illustrerer begrepet, altså den feilen som har nummer 12 i registeret", "Å lese stikkordslista i oppgaveteksten som en sjekkliste, altså feil nummer 3", "Å hoppe over relevans-i-dag-leddet i oppgaver om samtidsdiagnosen, altså feil nummer 11 i registeret"],
      explanation: "Feil nummer 14 gjelder å beskrive Marx' teori i stedet for å vise det oppgaven ber om, og denne besvarelsen gjør nettopp det. De tre andre feilene er reelle koder i registeret, men gjelder eksempelbegrunnelse, sjekklistelesing og et hoppet oppgaveledd.",
    },
    {
      question: "Hvilke fire trinn består et redegjørelsesledd av?",
      options: ["Avgrens spørsmålet, definer med avsender, sett opp mot kontrastbegrepet, presiser grensetilfellet", "Innled bredt, gjengi teorien i sin helhet, gi flere eksempler, og oppsummer det viktigste til slutt", "Ta standpunkt tidlig, gi det sterkeste argumentet for, gi det sterkeste imot, og konkluder med et forbehold om usikkerhet", "Beskriv saken kort, velg ett apparat, bruk det helt, si hva apparatet ikke får med seg"],
      explanation: "De fire trinnene er avgrensning, definisjon med avsender, kontrast og presisering. Svaret med standpunkt og argumenter er drøftingsleddets form, og svaret om sak og apparat er anvendelsesoppgavens fire grep — begge er riktige oppskrifter, men på andre sjangre.",
    },
    {
      question: "Hva ville gjort et fremmedgjøringseksempel til et dårlig eksempel?",
      options: ["At begrunnelsen bare sier at personen mistrives, uten å peke på hvordan arbeidet er organisert", "At eksempelet er hentet fra offentlig sektor, der Marx' analyse av eierskap ikke passer helt", "At eksempelet gjelder en enkeltperson og ikke en hel yrkesgruppe med felles arbeidsvilkår", "At eksempelet handler om et yrke som ikke fantes på den tiden teorien ble formulert"],
      explanation: "Fremmedgjøring er en påstand om organisering, så et eksempel som bare viser mistrivsel, illustrerer ikke begrepet. Svaret om offentlig sektor er galt fordi leddene om arbeidsprosess og artsvesen fint kan være oppfylt der, og svaret om nye yrker overser at diagnosen nettopp prøves mot nye arbeidsformer i relevansleddet.",
    },
  ],
  'svexfac03-2-2': [
    {
      question: "Hva er Webers menneskesyn, slik Aakvaag framstiller det?",
      options: ["Mennesket er frihets- og meningssøkende og må velge mellom verdier vitenskapen ikke kan rangere", "Mennesket er et arbeidende vesen som realiserer seg gjennom å bearbeide naturen etter en plan det selv har lagt", "Mennesket er samfunnsskapt, slik at også behovene og begjærene formes utenfra gjennom oppveksten", "Mennesket er en beregnende aktør som velger de midlene som gir størst mulig egen nytte"],
      explanation: "Weber plasserer det menneskelige i meningen og i verdivalget. Det arbeidende vesenet er Marx' menneskesyn og det samfunnsskapte er Durkheims, og begge forveksles ofte med Webers i sammenligningsledd; den beregnende aktøren er homo oeconomicus-modellen, som ikke er et klassikermenneskesyn.",
    },
    {
      question: "Hva er forskjellen på mening og årsak hos Weber?",
      options: ["Mening er en begrunnelse aktøren selv kan gi, mens en årsak gjelder enten hun vet om den eller ei", "Mening gjelder følelser og stemninger hos den enkelte, mens årsaker gjelder det som kan observeres utenfra", "Mening er noe samfunnsfagene studerer, mens årsaker hører hjemme i naturvitenskapelige fag der lovmessigheter kan måles", "Mening er alltid individuell, mens årsaker alltid gjelder grupper og aldri enkeltpersoner"],
      explanation: "Skillet gjelder om påstanden gjengir aktørens egen begrunnelse eller en sammenheng som gjelder uavhengig av den. Svaret om følelser gjør mening til en stemning, og svaret om at årsaker bare hører hjemme i naturvitenskapen er galt — Weber vil at samfunnsfagene skal ha begge deler.",
    },
    {
      question: "Hva er forståelse som samfunnsvitenskapelig mål?",
      options: ["Å gjengi den meningen aktørene selv legger i handlingen, slik at den blir begripelig innenfra", "Å forklare hvorfor et fenomen opptrer, ved å peke på årsakene som frambringer det", "Å beskrive et fenomen så nøyaktig som mulig, uten å ta stilling til hvorfor det finnes", "Å forutsi hvordan et fenomen vil utvikle seg, på grunnlag av kjennskap til tidligere forløp"],
      explanation: "Forståelse gjelder hva handlingen betyr for den handlende. De tre andre svarene beskriver forklaring, beskrivelse og prediksjon, som alle er reelle vitenskapelige målsettinger i emnet — poenget er at forståelse er noe annet, og at Weber gjør den til samfunnsfagenes særegne oppgave.",
    },
    {
      question: "Hva kjennetegner sosial handling?",
      options: ["At handlingen er orientert mot andre: du tar hensyn til hva andre gjør eller vil komme til å gjøre", "At handlingen utføres sammen med andre mennesker, i en gruppe eller i en organisert form", "At handlingen er til nytte for fellesskapet og ikke bare for den som utfører den selv", "At handlingen følger av sosiale normer som er innarbeidet gjennom oppveksten i det samfunnet man lever i"],
      explanation: "Kriteriet er orienteringen mot andre, ikke om andre er fysisk til stede. Svaret om å handle sammen med andre er den vanligste forenklingen, svaret om nytte for fellesskapet innfører et moralsk kriterium, og svaret om normer beskriver Durkheims problemstilling.",
    },
    {
      question: "Hva innebærer Webers verdipluralisme?",
      options: ["At vitenskapen ikke kan rangere verdier for oss, slik at valget mellom dem er vårt eget", "At alle verdier er like gyldige, slik at det ikke er noe poeng i å diskutere dem videre", "At samfunnet består av grupper med ulike verdier, som kommer i konflikt", "At verdier endrer seg over tid, slik at det som var riktig før kan være galt i dag når samfunnet er et annet"],
      explanation: "Verdipluralismen er en påstand om vitenskapens grenser, ikke om at verdier er vilkårlige. Svaret om at alt er like gyldig er nettopp feillesningen som gjør Weber til relativist. Svarene om gruppekonflikt og historisk endring er sanne observasjoner, men beskriver ikke hva begrepet betyr.",
    },
    {
      question: "Hva er rasjonalisering hos Weber?",
      options: ["At stadig flere områder ordnes etter beregning, regler og kalkulerbar effektivitet", "At enkeltmennesker etter hvert tenker mer fornuftig enn tidligere generasjoner gjorde", "At virksomheter kutter kostnader ved å redusere bemanningen og slå sammen avdelinger", "At vitenskapelige forklaringer erstatter religiøse forklaringer på naturens virkemåte"],
      explanation: "Rasjonalisering er en påstand om hvordan institusjoner er innrettet. Svaret om tenkeevne er den vanligste upresisheten, svaret om kostnadskutt er dagligtalens bruk av ordet, og svaret om vitenskap mot religion ligger nær avfortryllingen, men er ikke det samme som rasjonaliseringen som helhet.",
    },
    {
      question: "Hvordan henger rasjonalisering sammen med formålsrasjonell handling?",
      options: ["Rasjonalisering er at formålsrasjonaliteten bygges inn i ordninger, slik at systemet regner for oss", "Rasjonalisering er at stadig flere mennesker begynner å handle verdirasjonelt i stedet for vanemessig", "Rasjonalisering er at handlingstypene blandes, slik at skillet mellom dem blir mindre nyttig som analytisk verktøy", "Rasjonalisering er at formålsrasjonelle handlinger blir sjeldnere fordi reglene overtar"],
      explanation: "Når beregningen av midler mot mål er bygget inn i organisasjoner og regelverk, trenger ikke den enkelte lenger å regne. Svaret om verdirasjonalitet snur retningen, og svaret om at formålsrasjonelle handlinger blir sjeldnere overser at ordningene nettopp **er** formålsrasjonalitet i institusjonalisert form.",
    },
    {
      question: "Hva er byråkratisering hos Weber?",
      options: ["Rasjonaliseringens organisatoriske form: forvaltning etter skrevne regler og faste stillinger", "En tendens til at saksbehandlingen tar lengre tid enn nødvendig fordi skjemaene er for mange", "En overgang fra folkevalgt styring til styring ved fagfolk som er ansatt for sin kompetanse", "En utvikling der offentlig sektor vokser raskere enn privat sektor målt i antall ansatte"],
      explanation: "Byråkrati er hos Weber et presist organisasjonsbegrep, og han mener formen er teknisk overlegen. Svaret om treghet og skjemavelde er dagligtalens betydning og den vanligste fella. Svaret om vekst i offentlig sektor er en empirisk påstand som ikke definerer begrepet.",
    },
    {
      question: "Hvilket trekk hører IKKE til byråkratiets kjennetegn slik Weber beskriver dem?",
      options: ["At avgjørelsene tilpasses den enkelte sakens særtrekk gjennom en helhetlig skjønnsvurdering", "At saker avgjøres etter generelle, skrevne regler som gjelder likt for alle søkere", "At saksgangen dokumenteres skriftlig slik at den kan etterprøves og videreføres av andre", "At stillinger fylles etter kvalifikasjoner og ikke etter slekt, vennskap eller tilhørighet"],
      explanation: "Individuell skjønnsvurdering er nettopp det byråkratiet erstatter — regelstyring og upersonlighet er to av modellens fem trekk. De tre andre svarene er alle ekte kjennetegn, og poenget er at hvert av dem er en gevinst: forutsigbarhet, etterprøvbarhet og likebehandling.",
    },
    {
      question: "Hva er byråkratiets bur et bilde på?",
      options: ["At de rasjonaliserte ordningene er blitt så omfattende at ingen kan velge dem bort", "At ansatte i store organisasjoner er bundet av lojalitetsplikt overfor arbeidsgiveren sin", "At noen få personer med makt bevisst har bygget systemer som holder andre nede, og som de selv kan tre ut av", "At regelverket i moderne stater er blitt for komplisert til at folk flest kan forstå det"],
      explanation: "Buret er en påstand om utilsiktede konsekvenser: summen av mange fornuftige valg blir en ordning ingen av dem valgte. Svaret om noen få med makt gjør bildet til en konspirasjon, og svaret om komplisert regelverk gjør det til et spørsmål om språk og oversikt.",
    },
    {
      question: "Hva menes med avfortrylling?",
      options: ["At verden framstår som noe som i prinsippet kan forklares og beherskes gjennom kunnskap", "At folk flest har mistet troen på at tilværelsen har noen mening i seg selv", "At alle i et moderne samfunn faktisk vet hvordan teknologien rundt dem virker i praksis", "At religionen forsvinner helt fra samfunnet etter hvert som utdanningsnivået stiger og vitenskapen overtar plassen"],
      explanation: "Avfortryllingen gjelder tilliten til at kunnskapen finnes og kan hentes, ikke at hver enkelt har den — det er nettopp svaret om at alle faktisk vet, som er fella. Svaret om at religionen forsvinner helt er en sterkere påstand enn begrepet innebærer.",
    },
    {
      question: "Hva består meningstapet i rasjonaliseringen av?",
      options: ["At spørsmålet om hvilke mål vi bør ha, blir hjemløst når ordningene er bygget for måloppnåelse", "At arbeidet oppleves som ensformig fordi de samme oppgavene gjentar seg dag etter dag", "At arbeideren ikke lenger eier resultatet av arbeidet sitt, som tilfaller virksomheten som eier maskinene", "At felles verdier svekkes fordi folk i moderne samfunn gjør stadig mer forskjellige ting fra hverandre"],
      explanation: "Meningstapet gjelder forholdet mellom mennesket og målene, forankret i organisasjonsformen. Svaret om eierskapet til resultatet er Marx' fremmedgjøring, og svaret om svekkede felles verdier er Durkheims problemstilling — de tre diagnosene har ulike forankringer og skal ikke brukes om hverandre.",
    },
    {
      question: "Hvorfor er det galt å framstille Weber som ren kulturpessimist?",
      options: ["Fordi han uttrykkelig mener byråkratiet er teknisk overlegent, og gevinstene er reelle", "Fordi han mener rasjonaliseringen kommer til å stanse av seg selv når den har gått langt nok", "Fordi han mener meningstapet bare rammer enkelte yrkesgrupper og ikke samfunnet som helhet", "Fordi han mener at verdirasjonelle handlinger etter hvert vil erstatte de formålsrasjonelle"],
      explanation: "Weber mener byråkratiet vinner fram fordi det er effektivt — det er derfor prisen er vanskelig å slippe unna, og derfor diagnosen er tragisk snarere enn bare kritisk. De tre andre svarene tillegger Weber påstander han ikke gjør.",
    },
    {
      question: "Hva er Webers frihetsdiagnose for det moderne samfunnet?",
      options: ["At friheten reduseres til å velge mellom alternativer ordningene allerede har definert", "At friheten er blitt for stor fordi de normene som ga retning, er svekket, og den enkelte står alene med valget", "At friheten er formelt sikret, men reelt ulikt fordelt fordi eierskapet er skjevt fordelt", "At friheten trues av at staten griper inn på stadig flere områder av privatlivet"],
      explanation: "Webers mekanisme er organisatorisk: alternativene er definert på forhånd. Svaret om svekkede normer er Durkheims anomidiagnose, og svaret om skjevt eierskap er Marx' — alle tre kritiserer moderniteten, men med hver sin mekanisme.",
    },
    {
      question: "Hva skiller Marx' og Webers ufrihet fra hverandre?",
      options: ["Marx' ufrihet er materiell og klassebestemt, mens Webers er organisatorisk og rammer bredere", "Marx' ufrihet gjelder arbeidslivet, mens Webers bare gjelder forholdet til offentlige etater", "Marx' ufrihet er en følelse hos den enkelte, mens Webers er en egenskap ved institusjoner", "Marx' ufrihet kan avskaffes ved lov, mens Webers krever at organisasjonene bygges om"],
      explanation: "En god test er å spørre hvem diagnosen rammer: den uten ressurser hos Marx, også den velstående mellomlederen hos Weber. Svaret om at Marx' ufrihet er en følelse er galt — fremmedgjøring er strukturell — og svaret om lovendring tillegger Marx en løsning han ikke foreslår.",
    },
    {
      question: "Hva er en idealtype?",
      options: ["En bevisst ensidig konstruksjon som brukes som målestokk, og som ikke finnes i virkeligheten", "En beskrivelse av det gjennomsnittlige tilfellet i et materiale man har samlet inn", "En modell av hvordan en institusjon burde vært innrettet for å kunne fungere på aller beste måte", "En forenklet framstilling som skal ligne virkeligheten så mye som overhodet mulig"],
      explanation: "Idealtypen er et måleredskap som er renere enn virkeligheten, slik at avstanden blir synlig. Svaret om gjennomsnitt blander konstruksjon med måling, svaret om hvordan noe burde vært leser «ideal» som «ønskelig», og svaret om størst mulig likhet beskriver en god beskrivelse.",
    },
    {
      question: "Hva menes med ensidig framheving i konstruksjonen av en idealtype?",
      options: ["At forskeren velger ut noen trekk og forsterker dem, styrt av hva hun vil undersøke", "At forskeren utelater alle trekk som ikke lar seg måle med tall i et gitt materiale", "At forskeren bare tar med de trekkene som støtter den hypotesen hun har formulert, og siler bort resten", "At forskeren beskriver et fenomen fra ett faglig ståsted uten andre fag"],
      explanation: "Ensidigheten er tilsiktet, og kritikken mot idealtyper gjelder derfor ikke at de forenkler, men at utvalget av trekk kan skjule et verdipremiss. Svaret om å velge trekk som støtter hypotesen beskriver en metodefeil, ikke idealtypens konstruksjon.",
    },
    {
      question: "Hva er den viktigste feilbruken av en idealtype?",
      options: ["Å bruke den som sjekkliste, slik at konklusjonen blir at fenomenet passer eller ikke passer", "Å bruke den på et fenomen som ligger langt fra det den opprinnelig ble konstruert for, som en annen historisk epoke", "Å bruke den uten å oppgi hvilken forsker som først formulerte den aktuelle modellen", "Å bruke den i et drøftingsledd i stedet for i et redegjørelsesledd, der den egentlig hører hjemme"],
      explanation: "Idealtypen er en målestokk, og avviket er selve funnet — derfor er sjekklistebruken feilen. Svaret om avstand fra opprinnelig bruksområde er ikke i seg selv galt: modeller kan flyttes, så lenge man sier hva som ikke passer.",
    },
    {
      question: "Hva skiller en idealtype fra et gjennomsnitt?",
      options: ["Idealtypen er konstruert og kan ikke være feil, mens et gjennomsnitt er målt og kan være det", "Idealtypen bygger på mange enheter, mens et gjennomsnitt kan beregnes ut fra svært få", "Idealtypen brukes i kvalitative studier, mens gjennomsnittet hører til kvantitative studier", "Idealtypen beskriver framtiden, mens gjennomsnittet beskriver det som allerede er observert"],
      explanation: "Et gjennomsnitt er en empirisk påstand som kan være gal; en idealtype er et redskap som er mer eller mindre nyttig. Svaret om kvalitativ mot kvantitativ er en vanlig, men gal, plassering — idealtyper brukes i begge tradisjoner.",
    },
    {
      question: "Hva skiller en idealtype fra en stereotypi?",
      options: ["Idealtypen gjør avviket til et funn, mens stereotypien avviser avviket som et unntak", "Idealtypen er utviklet av forskere, mens stereotypien oppstår i dagligtalen blant folk flest", "Idealtypen gjelder institusjoner, mens stereotypien alltid gjelder grupper av mennesker", "Idealtypen er nøytralt formulert, mens stereotypien alltid har et negativt fortegn og nedvurderer gruppen"],
      explanation: "Forskjellen ligger i hva som gjøres med avviket. Svaret om hvem som lager dem er en sosiologisk observasjon uten begrepslig innhold, og svaret om negativt fortegn er galt — også positive stereotypier slutter fra gruppe til enkeltperson.",
    },
    {
      question: "Hva er kjernen i Webers dobbeltrolle i pensum?",
      options: ["Weber selv står under konfliktperspektivet, mens handlingstypene hans hører til et annet perspektiv", "Weber framstilles både av Aakvaag som klassiker og av Solli som metodeteoretiker i faget", "Weber både beskriver byråkratiet som teknisk effektivt og kritiserer det for å innsnevre friheten vår", "Weber skrev både om økonomi og om religion, og teoriene henger bare delvis sammen"],
      explanation: "Poenget er at det er **begreper** som plasseres i perspektiver, ikke personer: rasjonalitetsformene brukes av handlings- og bytteperspektivet, mens Weber selv står under konfliktperspektivet. Svaret om effektivitet og kritikk er riktig i sak, men beskriver diagnosens innhold og ikke dobbeltrollen. Dette er feil nummer 2 i registeret.",
    },
    {
      question: "Hvor hører Weber hjemme i Sollis framstilling av perspektivene på sosial orden?",
      options: ["Under konfliktperspektivet, der orden forklares med ideologi, klasse, stand og politisk makt", "Under integrasjonsperspektivet, der orden forklares med felles verdier og kollektiv bevissthet", "Under handlings- og bytteperspektivet, der orden forklares med at aktører velger og bytter ut fra hva som lønner seg", "Under interaksjonsperspektivet, der orden forklares med hverdagsritualer og inntrykksmestring"],
      explanation: "Weber står under konfliktperspektivet sammen med Marx. De tre andre perspektivene er reelle og hører til henholdsvis Durkheim, den rasjonelle aktør-tradisjonen og Goffman — og handlings- og bytteperspektivet er nettopp der Webers **handlingstyper** brukes, uten at Weber selv plasseres der.",
    },
    {
      question: "Hvilken avsender eier framstillingen av formålsrasjonell og verdirasjonell handling i pensum?",
      options: ["Balsvik, i framstillingen av rasjonalitetsantakelser, selv om begrepene tilhører Weber", "Aakvaag, i framstillingen av klassikernes menneskesyn og deres samtidsdiagnoser, der de to handlingstypene inngår", "Solli, i framstillingen av de fire perspektivene på spørsmålet om sosial orden", "Nyborg, i framstillingen av eksperimentene som utfordrer antakelsen om ren egoisme hos aktører"],
      explanation: "Skillet mellom teoriens opphavsmann og framstillingen i pensum er noe sensor legger merke til: begrepene er Webers, framstillingen emnet prøver deg i, er Balsviks. De tre andre er ekte avsendere i emnet, men eier andre deler av pensum.",
    },
    {
      question: "Hva er Webers samtidsdiagnose i ett ord?",
      options: ["Rasjonalisering, med byråkratiseringen som organisatorisk form og meningstapet som pris", "Fremmedgjøring, med arbeidsdelingen som mekanisme og artsvesenet som målestokk", "Anomi, med svekket moralsk regulering som mekanisme og grenseløse forventninger som følge", "Individualisering, med svekkede fellesskap som mekanisme og ensomhet som konsekvens i det moderne samfunnet"],
      explanation: "Rasjonaliseringen er Webers diagnose. Fremmedgjøring er Marx' og anomi er Durkheims — de tre brukes ofte om hverandre i sammenligningsledd. Individualisering er ikke en av de tre klassikerdiagnosene i pensum.",
    },
    {
      question: "Hva er det billigste selvstendighetspoenget i en sammenligning av Marx og Weber?",
      options: ["Å si at de to diagnosene rammer ulike personer, siden mekanismene er materiell og organisatorisk", "Å si at Weber levde senere enn Marx og derfor kunne bygge videre på hans analyser", "Å si at begge to mente at moderniteten var en alvorlig trussel mot menneskets frihet i vid forstand", "Å si at begge to har blitt kritisert for å legge for stor vekt på økonomiske forhold"],
      explanation: "Påstanden om at diagnosene rammer ulike personer følger av begge, men sies av ingen av dem — og det er nettopp den typen slutning karakterskalaen kaller selvstendighet. Svaret om at begge så en trussel mot friheten er sant, men er en gjengivelse og ikke en sammenligning.",
    },
    {
      question: "Hvorfor er «ideal» i idealtype et misvisende ord på norsk?",
      options: ["Fordi det betyr rendyrket og ikke ønskelig, slik at modellen er et redskap og ingen anbefaling", "Fordi det stammer fra tysk og derfor har fått en annen betydning i norsk faglitteratur", "Fordi det antyder at modellen er umulig å oppnå, mens Weber mente den var innen rekkevidde", "Fordi det gir inntrykk av at modellen gjelder idéer, mens den gjelder faktiske institusjoner"],
      explanation: "Ordet sier at trekkene er drevet til sin rene form, ikke at de er ønskelige. Svaret om at modellen var innen rekkevidde er galt: idealtypen finnes ikke i virkeligheten og er ikke ment å gjøre det. Svaret om idéer mot institusjoner treffer heller ikke — idealtyper kan lages av begge deler.",
    },
  ],
  'svexfac03-2-3': [
    {
      question: "Hva er Durkheims menneskesyn, slik Aakvaag framstiller det?",
      options: ["Mennesket er samfunnsskapt: språk, moral og til og med ønskene våre kommer fra fellesskapet", "Mennesket er et arbeidende vesen som realiserer seg gjennom å forme naturen etter en plan", "Mennesket er frihets- og meningssøkende og må velge mellom verdier selv", "Mennesket er styrt av medfødte drifter som samfunnet må holde i sjakk gjennom institusjoner"],
      explanation: "Durkheim går lengst i å gjøre det individuelle til et sosialt produkt. Det arbeidende vesenet er Marx' menneskesyn og det frihets- og meningssøkende er Webers, og begge forveksles med Durkheims i sammenligningsledd; svaret om medfødte drifter er en biologisk modell — ikke Durkheims posisjon.",
    },
    {
      question: "Hva er Durkheims skjerpede påstand om menneskets ønsker?",
      options: ["At de ikke har noen naturlig grense, og at grensen derfor må komme utenfra, fra samfunnet selv", "At de er formet av oppveksten, slik at folk med ulik bakgrunn ønsker seg ulike ting", "At de er de samme i alle samfunn, men uttrykkes forskjellig i ulike historiske epoker", "At de i hovedsak er materielle, og at kulturelle ønsker kommer i annen rekke for de fleste"],
      explanation: "Uten dette leddet blir anomidiagnosen uforståelig, for da kunne ikke frihet bli for mye. Svaret om ulik bakgrunn er en svakere påstand alle er enige i, og det er nettopp forskjellen mellom «vi påvirkes av omgivelsene» og Durkheims egen tese.",
    },
    {
      question: "Hva er et sosialt faktum?",
      options: ["En måte å handle, tenke eller føle på som finnes utenfor den enkelte og utøver et press", "En hendelse i samfunnet som er dokumentert og derfor kan regnes som historisk sikker", "En statistisk sammenheng mellom to variabler som er observert i et representativt utvalg", "En oppfatning som et flertall i befolkningen deler på et gitt tidspunkt i historien"],
      explanation: "Sosiale fakta er ytre fordi de fantes før du kom, og tvingende fordi det koster å bryte med dem. Svaret om flertallets oppfatning er nær, men galt: et sosialt faktum består selv om enkeltmenneskene skiftes ut, og er derfor ikke summen av hva folk mener.",
    },
    {
      question: "Hva sier Durkheims metoderegel om forklaring av sosiale fakta?",
      options: ["At årsaken skal søkes i andre sosiale fakta, ikke i enkeltmenneskers psykologi", "At forklaringen alltid må bygge på tall, siden kvalitative data ikke gir sikker kunnskap", "At forklaringen skal ta utgangspunkt i hva aktørene selv oppgir som grunn for handlingen", "At forklaringen må vise hvilken funksjon fenomenet har for opprettholdelsen av samfunnet"],
      explanation: "Regelen gjelder hvor forklaringen på **kollektive** mønstre skal søkes. Svaret om aktørenes egne grunner er Webers forståelsesbegrep, og svaret om funksjon beskriver funksjonsforklaringen, som er en egen forklaringstype og ikke selve metoderegelen.",
    },
    {
      question: "Hva er sosialisering?",
      options: ["Prosessen der samfunnets normer gjøres til egne overbevisninger gjennom oppveksten", "Prosessen der en gruppe blir enige om felles regler gjennom forhandling og kompromiss", "Prosessen der staten overtar oppgaver som tidligere ble utført av familien og lokalsamfunnet", "Prosessen der mennesker knytter vennskapsbånd og bygger nettverk gjennom hele livsløpet"],
      explanation: "Sosialiseringen forklarer hvorfor sosiale fakta virker uten at noen står med pisken: den former viljen i stedet for å motarbeide den. Svaret om at staten overtar oppgaver bruker ordet i en helt annen betydning, og svaret om vennskapsbånd forveksler det med sosial omgang.",
    },
    {
      question: "Hva er den vanligste feillesningen av at mennesket er samfunnsskapt?",
      options: ["Å tro at Durkheim benekter at individet handler, velger og vurderer på egen hånd", "Å tro at Durkheim mener alle mennesker i et samfunn ender opp med de samme meningene", "Å tro at Durkheim mener samfunnet er viktigere enn individet i moralsk forstand", "Å tro at Durkheim mener oppveksten betyr mer for et menneske enn arv og biologi gjør"],
      explanation: "Durkheim hevder at **forutsetningene** for å handle er sosiale, ikke at handlingen forsvinner. Symptomet på feillesningen er ord som brikke og viljeløs. Svaret om at alle får samme meninger er en overdrivelse som ikke følger av teorien, men den er ikke den feilen veiledningene og registeret peker på.",
    },
    {
      question: "Hva betyr anomi?",
      options: ["Fravær av normer som gir retning, uten at noe nytt har trådt i stedet", "Fravær av lover og av myndigheter som kan håndheve dem i et samfunn", "Fravær av tillit mellom mennesker som ikke kjenner hverandre fra før", "Fravær av økonomisk trygghet i grupper som står svakt i arbeidsmarkedet"],
      explanation: "Anomi gjelder retning, ikke ordning: et anomisk samfunn kan være rikt og fredelig. Svaret om lovløshet er dagligtalens lesning og den vanligste fella, og de to andre svarene beskriver reelle sosiale problemer som ikke er det begrepet betyr.",
    },
    {
      question: "Hvorfor er det galt å oversette anomi med kaos?",
      options: ["Fordi et anomisk samfunn godt kan være både velfungerende og fredelig på overflaten av det", "Fordi kaos er et begrep fra naturvitenskapen som ikke kan brukes om sosiale forhold", "Fordi anomi bare gjelder enkeltpersoner, mens kaos ville gjelde samfunnet som helhet", "Fordi Durkheim mener at samfunn aldri kan bryte helt sammen så lenge det finnes arbeidsdeling"],
      explanation: "Kaos er fravær av ordning, anomi er fravær av retning — og det er derfor et rikt, fredelig samfunn kan være anomisk. Svaret om at anomi bare gjelder enkeltpersoner snur begrepet: det er nettopp et kollektivt forhold, som slår ut i den enkeltes forventninger.",
    },
    {
      question: "Hva er mekanismen bak anomien?",
      options: ["At enhver oppnåelse blir utgangspunkt for neste når den felles målestokken forsvinner", "At mennesker blir mer grådige når velstanden i et samfunn stiger over lang tid", "At konkurransen mellom mennesker øker når arbeidsdelingen blir stadig mer spesialisert", "At folk mister troen på at innsats lønner seg, og derfor slutter å strekke seg etter noe"],
      explanation: "Uten et punkt som sier «dette er nok», lukkes aldri avstanden mellom det man har og det man mener man burde ha. Svaret om grådighet gjør en strukturell påstand om til en personlig egenskap, og det siste svaret beskriver oppgitthet, som er nesten det motsatte av grenseløse forventninger.",
    },
    {
      question: "Hva er moralsk regulering hos Durkheim?",
      options: ["Felles forestillinger om hva som er rimelig å forvente, som virker ved å oppleves selvsagt", "Regler som er vedtatt av myndighetene og håndheves gjennom sanksjoner mot dem som bryter dem", "Den enkeltes egen samvittighet, som setter grenser for hva hun tillater seg å gjøre", "Etiske retningslinjer som yrkesgrupper utarbeider for å styrke tilliten til sitt eget fag"],
      explanation: "Reguleringen virker ikke ved forbud, men ved at noen mål framstår som selvsagte og andre som urimelige — derfor kan den ikke gjenopprettes ved vedtak. Svaret om vedtatte regler er nettopp den forvekslingen som gjør drøftingen av anomi upresis, og svaret om samvittighet flytter fenomenet inn i individet.",
    },
    {
      question: "Hva er kollektiv bevissthet?",
      options: ["Summen av felles forestillinger og verdier som gjør at medlemmene ser mye likt på tingene", "Den delen av befolkningen som er organisert i foreninger, partier og andre fellesskap", "En forestilling om at gruppen kan tenke og bestemme som om den var én enkelt person", "Den offentlige debatten, der samfunnets syn på et spørsmål formes over tid gjennom meninger"],
      explanation: "Kollektiv bevissthet leverer målestokken som svekkes i anomien. Svaret om at gruppen tenker som én person er en karikatur som ofte brukes mot Durkheim, og svaret om offentlig debatt forveksler begrepet med opinionsdannelse. Merk at begrepet som **ordensmekanisme** hører til Sollis framstilling av integrasjonsperspektivet.",
    },
    {
      question: "Hva er prekontraktuell solidaritet?",
      options: ["At avtaler forutsetter en felles forståelse av at avtaler skal holdes, som ikke selv er avtalt", "At partene i en avtale må ha like sterk forhandlingsposisjon for at avtalen skal være rimelig", "At mennesker hjelper hverandre uten å forvente noe tilbake, slik det skjer i familier", "At samfunnet inngikk en opprinnelig samfunnskontrakt som alle senere avtaler bygger på"],
      explanation: "Poenget er at kontrakter hviler på noe som ikke selv er kontraktfestet. Svaret om en opprinnelig samfunnskontrakt er kontraktteoriens tanke, som Durkheim nettopp bestrider, og svaret om hjelp uten gjenytelse beskriver gavebytte i en annen del av pensum.",
    },
    {
      question: "Hvor hører Durkheim hjemme i Sollis framstilling av perspektivene på sosial orden?",
      options: ["Under integrasjonsperspektivet, der orden forklares med felles verdier og kollektiv bevissthet", "Under konfliktperspektivet, der orden forklares med ideologi, klasse, stand og politisk makt", "Under handlings- og bytteperspektivet, der orden forklares med at aktører velger og bytter", "Under interaksjonsperspektivet, der orden forklares med hverdagsritualer og inntrykksmestring"],
      explanation: "Durkheim bærer integrasjonsperspektivet og står dessuten bak funksjonalismen. Konfliktperspektivet hører til Marx og Weber, mens de to siste hører til den rasjonelle aktør-tradisjonen og til Goffman. Merk at det er begrepene, ikke personene, som plasseres — Durkheim som klassiker med eget menneskesyn hører til Aakvaags framstilling.",
    },
    {
      question: "Hva kjennetegner mekanisk solidaritet?",
      options: ["At samholdet hviler på at medlemmene ligner hverandre og gjør mye av det samme til daglig", "At samholdet hviler på at medlemmene utfyller hverandre og derfor er avhengige av hverandre", "At samholdet hviler på formelle avtaler som partene har inngått frivillig med hverandre", "At samholdet hviler på at en sterk sentralmakt håndhever felles regler for alle innbyggere"],
      explanation: "Ordet «mekanisk» viser til at delene er av samme slag, ikke til at samholdet er kaldt. Svaret om å utfylle hverandre er organisk solidaritet, og svaret om avtaler er nettopp det Durkheim mener ikke kan bære et samfunn alene.",
    },
    {
      question: "Hva kjennetegner organisk solidaritet?",
      options: ["At samholdet hviler på gjensidig avhengighet skapt av en utviklet arbeidsdeling", "At samholdet hviler på en felles religion som gir alle medlemmene de samme verdiene", "At samholdet hviler på at befolkningen er liten nok til at alle kjenner hverandre", "At samholdet hviler på at staten fordeler goder slik at ingen faller helt utenfor"],
      explanation: "Her ligger Durkheims mest overraskende påstand: spesialisering binder oss sammen. Svarene om felles religion og lite lokalsamfunn beskriver mekanisk solidaritet, og svaret om statlig fordeling er en politisk ordning og ikke en solidaritetsform.",
    },
    {
      question: "Hvorfor er kontrasten mellom Marx og Durkheim om arbeidsdelingen et godt drøftingspoeng?",
      options: ["Fordi de vurderer samme fenomen motsatt, siden de måler mot ulike målestokker", "Fordi de undersøkte ulike land og derfor kom fram til ulike empiriske resultater", "Fordi den ene skrev tidligere enn den andre og bygget på et dårligere datagrunnlag", "Fordi de er uenige om hvor raskt arbeidsdelingen har spredt seg i moderne samfunn"],
      explanation: "De er ikke uenige om hva som skjer, men om hva det betyr: menneskets selvrealisering hos Marx, samfunnets integrasjon hos Durkheim. Svarene om ulike land og ulikt datagrunnlag gjør en vurderingsforskjell om til en empirisk uenighet, som er noe helt annet.",
    },
    {
      question: "Hva er Durkheims frihetsdiagnose for det moderne samfunnet?",
      options: ["At friheten kan bli for mye, fordi den reguleringen som ga den retning, er blitt svekket", "At friheten er formelt sikret, men reelt ulikt fordelt på grunn av eierskapsforhold", "At friheten innsnevres fordi rasjonaliserte ordninger definerer alternativene på forhånd", "At friheten er tilstrekkelig så lenge staten ikke griper inn i den enkeltes livsvalg"],
      explanation: "Durkheim er den eneste av de tre som går motsatt vei. Svaret om ulikt fordelte muligheter er Marx' diagnose og svaret om rasjonaliserte ordninger er Webers — å skille de tre mekanismene er selve sammenligningsleddet i den gjentatte oppgaven.",
    },
    {
      question: "Hva menes med at individualismen selv er et sosialt produkt?",
      options: ["At forestillingen om det ukrenkelige individet er en felles verdi samfunnet har utviklet", "At mennesker blir stadig mer opptatt av seg selv når samfunnet blir rikere og mer spesialisert", "At individet ikke kan eksistere uten et samfunn å få dekket sine materielle behov i", "At individualisme oppsto som en politisk ideologi og siden ble utbredt i befolkningen"],
      explanation: "Påstanden er ikke en kritikk av individualismen — Durkheim regner den som moderne samfunns viktigste felles verdi, men peker på at også den er sosialt frambrakt og derfor kan svekkes. Svaret om at folk blir mer selvopptatte er en helt annen påstand, og en langt svakere en.",
    },
    {
      question: "Hva er Durkheims sterkeste bidrag når det gjelder empirisk forankring?",
      options: ["At han viser hvordan et tilsynelatende personlig fenomen varierer systematisk mellom grupper", "At han gjennomførte lange feltarbeid i lokalsamfunn og beskrev dem i detalj", "At han utviklet et spørreskjema som er blitt brukt av samfunnsforskere helt fram til i dag", "At han begrenset seg til å beskrive samfunnet uten å framsette forklaringer på det han så"],
      explanation: "Variasjon mellom grupper med ulik sosial binding er en **test**, fordi et annet mønster ville talt mot teorien — det er noe annet enn en illustrasjon. Svaret om feltarbeid beskriver en annen metodetradisjon, og svaret om ren beskrivelse er galt: Durkheim forklarer.",
    },
    {
      question: "Hva skiller anomi fra fremmedgjøring?",
      options: ["Anomi gjelder manglende regulering av forventninger, fremmedgjøring gjelder forholdet til arbeidet", "Anomi gjelder enkeltpersoner, mens fremmedgjøring alltid gjelder en hel samfunnsklasse", "Anomi er et moderne begrep, mens fremmedgjøring bare kan brukes om førindustrielle samfunn", "Anomi handler om følelser hos den enkelte, mens fremmedgjøring handler om økonomiske forhold i produksjonen"],
      explanation: "De to har ulike forankringer: den moralske reguleringen hos Durkheim, produksjonsforholdene hos Marx. En arbeidsplass kan være fremmedgjørende og godt regulert samtidig. Svaret om at anomi handler om følelser er dessuten galt — begge er strukturelle diagnoser.",
    },
    {
      question: "Hvordan peker Weber og Durkheim i motsatt retning om frihet?",
      options: ["Weber mener valgrommet snevres inn, mens Durkheim mener det utvides uten å gi retning", "Weber mener friheten er en illusjon, mens Durkheim mener den er reell i moderne samfunn", "Weber mener friheten øker med utdanningsnivået, mens Durkheim mener den er uavhengig av det", "Weber mener friheten trues av staten, mens Durkheim mener den trues av markedet"],
      explanation: "De to diagnosene kan gjelde samtidig for samme person i ulike deler av livet, og å si det er et selvstendighetspoeng. Svaret om at Weber mener friheten er en illusjon er en overdrivelse — han mener valgrommet innsnevres, ikke at friheten ikke finnes.",
    },
    {
      question: "Hva er sammenligningsleddets avgjørende trinn?",
      options: ["Å navngi aksen man sammenligner langs, og plassere begge teoretikerne på den med begrunnelse", "Å gjengi begge posisjonene så fullstendig som mulig, slik at ingenting vesentlig utelates", "Å avgjøre hvem av de to som har mest rett, og begrunne valget med henvisning til pensum", "Å finne et punkt der de to er enige, siden likheter er mer interessante enn forskjeller"],
      explanation: "Uten en navngitt akse blir teksten to redegjørelser etter hverandre, og sensor må gjøre sammenligningen selv. Svaret om fullstendig gjengivelse er nettopp den fella som spiser opp tiden, og svaret om hvem som har mest rett hører til drøftingsleddet, ikke til sammenligningen.",
    },
    {
      question: "Hvilken avsender eier de fire perspektivene på sosial orden?",
      options: ["Solli, som også eier aktør- og strukturbegrepet i framstillingen av spørsmålet om orden", "Aakvaag, som eier menneskesynene til klassikerne og de fire kravene til en samtidsdiagnose", "Balsvik, som eier menneskemodellene og framstillingen av rasjonalitetsantakelsene", "Merton, som eier vitenskapens etos og begrepene om dysfunksjon og funksjonell enhet"],
      explanation: "De fire perspektivene tilhører Sollis framstilling. Å tilskrive dem Aakvaag eller Balsvik er blant de vanligste tilskrivningsfeilene i emnet, og Merton eier et helt annet begrepssett — vitenskapens normer og funksjonalismens dysfunksjonsbegrep.",
    },
    {
      question: "Hva er Durkheims posisjon oppsummert på én linje?",
      options: ["Samfunnsskapt menneske, anomi som diagnose, og for mye uregulert frihet i moderniteten", "Arbeidende menneske, fremmedgjøring som diagnose, og for lite reell frihet", "Meningssøkende menneske, rasjonalisering som diagnose, og for lite frihet", "Beregnende menneske, begrenset rasjonalitet som diagnose, og frihet gjennom flere valg"],
      explanation: "Repetisjonskortet skal sitte som én enhet: menneskesyn, diagnose, frihetsdiagnose. Linjen om fremmedgjøring er Marx' og linjen om rasjonalisering er Webers, mens linjen om begrenset rasjonalitet beskriver en modell fra rasjonalitetslitteraturen, ikke en klassikerposisjon.",
    },
  ],
  'svexfac03-2-4': [
    {
      question: "Hva er en samtidsdiagnose?",
      options: ["En teori som sier hva som kjennetegner vår egen tid som helhet, og som har et kritisk siktemål", "En undersøkelse av hva folk i dag mener om samfunnet de lever i, basert på representative data", "En forklaring på hvorfor et bestemt samfunnsfenomen har endret seg de siste tiårene", "En prognose for hvordan samfunnet kommer til å utvikle seg i løpet av de nærmeste årene"],
      explanation: "Diagnosen gjelder epoken som helhet og har et kritisk siktemål. Svaret om en forklaring på ett fenomen beskriver en vanlig teori, og svaret om prognose forveksler diagnose med spådom — det er nettopp den forvekslingen relevansleddet ofte lider under.",
    },
    {
      question: "Hvem eier begrepet samtidsdiagnose og de fire kravene i pensum?",
      options: ["Aakvaag, som også framstiller de tre klassikernes menneskesyn i sin framstilling av dem", "Solli, som framstiller de fire perspektivene på sosial orden og aktør- og strukturbegrepet", "Grimen, som framstiller verdifrihetslæren og skillet mellom erkjennelse og vurdering", "Balsvik, som framstiller menneskemodeller og rasjonalitetsantakelser i samfunnsvitenskapene"],
      explanation: "Både samtidsdiagnosebegrepet og de fire kravene tilhører Aakvaags framstilling. De tre andre er ekte avsendere i emnet, men eier andre begreper — og en feilplassert avsender er blant det sensor merker raskest i et redegjørelsesledd.",
    },
    {
      question: "Hva krever kravet om at diagnosen skal være teoretisk formidlet?",
      options: ["At den er utledet av definerte begreper, slik at det er klart hva påstanden gjelder", "At den er formulert i et abstrakt språk som løfter den over de enkelte tilfellene", "At den bygger videre på en anerkjent teoretiker innenfor den samme fagtradisjonen", "At den kan brukes til å utlede hypoteser som senere kan prøves i et empirisk materiale"],
      explanation: "Presise begreper gjør at påstanden kan bestrides på et bestemt punkt. Svaret om abstrakt språk er den vanligste forvekslingen — en abstrakt påstand kan mangle begreper helt — og svaret om å utlede hypoteser hører til kravet om empirisk testing.",
    },
    {
      question: "Hva krever kravet om at diagnosen skal være empirisk testet?",
      options: ["At det finnes noe som kunne talt mot den, slik at den kan svekkes av det vi faktisk finner", "At den er ledsaget av eksempler som viser at fenomenet den beskriver, faktisk forekommer", "At den bygger på tallmateriale, siden kvalitative data ikke kan brukes til å teste teorier", "At den er formulert av en forsker som selv har gjennomført undersøkelser av fenomenet"],
      explanation: "Testbarhet betyr at et bestemt funn ville talt mot påstanden. Svaret om eksempler beskriver **illustrasjon**, som er den vanligste snarveien, og svaret om tallmateriale er faglig galt: også kvalitative undersøkelser kan tale mot en teori.",
    },
    {
      question: "Hva krever kravet om en helhetlig fortolkning av samtiden?",
      options: ["At den viser hvordan flere samfunnsområder henger sammen som uttrykk for samme mønster", "At den dekker alle samfunnsområder, slik at ingen vesentlig del av samfunnet blir utelatt", "At den gjelder hele verden og ikke bare det landet forskeren selv tilfeldigvis bor i", "At den bygger på bidrag fra flere fag, slik at analysen blir tverrfaglig i sin form"],
      explanation: "Kravet gjelder at områdene forbindes og at det sies hvorfor. Svaret om å dekke alt er en overdrivelse som ingen teori kan innfri, og svarene om global rekkevidde og tverrfaglighet innfører kriterier kravet ikke stiller.",
    },
    {
      question: "Hva krever kravet om kritiske ambisjoner?",
      options: ["At den peker på et problem og dermed forutsetter en målestokk for hva som ville vært bedre", "At den foreslår konkrete tiltak som kan bøte på det problemet den har pekt ut", "At den er skrevet av en forsker som selv står i klar opposisjon til de rådende samfunnsforholdene", "At den utfordrer andre teorier på samme felt og viser hvorfor de ikke strekker til"],
      explanation: "Kravet gjelder at diagnosen har en målestokk, ikke at den er handlingsanvisende. Svaret om konkrete tiltak forveksler kritiske ambisjoner med et politisk program — Weber foreskriver ingen politikk, men diagnosen hans er likevel kritisk.",
    },
    {
      question: "Hvorfor er det ikke nok at to av kravene er oppfylt?",
      options: ["Fordi de fire gjør ulikt arbeid, og terskelen består nettopp i at de er oppfylt samtidig", "Fordi Aakvaag mener at halvparten aldri kan være tilstrekkelig i vitenskapelige spørsmål", "Fordi de to første kravene alltid henger sammen og derfor må telles som ett enkelt krav", "Fordi en påstand som oppfyller to krav, alltid vil oppfylle et tredje som en konsekvens"],
      explanation: "De to første kravene gjør påstanden til vitenskap, det tredje gjør den til en diagnose av tiden, og det fjerde gjør den til noe annet enn en beskrivelse. Svaret om at to krav automatisk drar med seg et tredje er galt: en påstand kan godt være kritisk og helhetlig uten å være prøvbar.",
    },
    {
      question: "Hva skiller en samtidsdiagnose fra en teori?",
      options: ["Diagnosen skal si noe om epoken som helhet og med et kritisk siktemål, ikke bare forklare noe", "Diagnosen er nyere enn teorien og bygger derfor på et mer oppdatert kunnskapsgrunnlag", "Diagnosen er skrevet for allmennheten, mens teorien er skrevet for fagfeller i forskning", "Diagnosen bygger på kvalitative data, mens teorien alltid krever kvantitative undersøkelser i tillegg"],
      explanation: "Alle samtidsdiagnoser bygger på teori, men ikke alle teorier er samtidsdiagnoser. Svaret om målgruppe forveksler sjanger med formidlingsform, og svaret om datatyper innfører et skille som ikke finnes i kravene.",
    },
    {
      question: "Hva skiller en samtidsdiagnose fra en tidsbetraktning?",
      options: ["At diagnosen er teoretisk forankret og lar seg prøve, mens betraktningen bare er treffende", "At diagnosen er skrevet av en forsker, mens betraktningen er skrevet av en kommentator", "At diagnosen er lang og grundig, mens betraktningen som regel er kort og poengtert", "At diagnosen tar stilling til politiske spørsmål, mens betraktningen holder seg nøytral"],
      explanation: "Skillet ligger i forankring og prøvbarhet, ikke i hvem som skriver eller hvor langt det er. Svaret om forfatterens yrke er den vanligste snarveien — en forsker kan godt skrive en tidsbetraktning, og det er nettopp derfor kravene finnes.",
    },
    {
      question: "Hva er forskjellen på diagnose og prognose?",
      options: ["Diagnosen sier hva som kjennetegner tiden vi er i, prognosen sier hva som kommer til å skje", "Diagnosen gjelder samfunnet, mens prognosen gjelder økonomien og utviklingen i markedene", "Diagnosen er kvalitativ og fortolkende, mens prognosen alltid bygger på statistiske modeller", "Diagnosen stilles av forskere, mens prognosen stilles av myndigheter og internasjonale organer"],
      explanation: "En besvarelse som vurderer diagnosene etter om spådommene slo til, har målt mot feil målestokk. Svarene om økonomi, metode og hvem som uttaler seg beskriver praksis rundt ordene, ikke begrepsforskjellen.",
    },
    {
      question: "Hva er forskjellen på empirisk testet og empirisk illustrert?",
      options: ["En test leter etter det som ville talt mot påstanden, en illustrasjon viser et tilfelle som passer", "En test bruker tall, mens en illustrasjon bruker et enkelttilfelle beskrevet med ord", "En test gjennomføres av forskeren selv, mens en illustrasjon like gjerne kan hentes fra andres arbeider", "En test gjelder hele teorien, mens en illustrasjon bare gjelder ett av teoriens begreper"],
      explanation: "Dette er den mest brukte snarveien i faget: å vise et eksempel som passer og kalle det testing. Svaret om tall mot ord er galt — en kvalitativ undersøkelse kan også tale mot en teori — og de to siste svarene beskriver hvem som gjør arbeidet, ikke hva som skiller framgangsmåtene.",
    },
    {
      question: "Hva skiller en helhetlig fortolkning fra en delforklaring?",
      options: ["At den forbinder flere samfunnsområder og sier hvorfor de henger sammen", "At den er formulert i mer generelle vendinger og derfor gjelder flere tilfeller", "At den bygger på et større datamateriale og derfor har bredere empirisk dekning", "At den er utviklet av flere forskere i fellesskap og derfor dekker flere fagfelt"],
      explanation: "En delforklaring kan være helt riktig og likevel ikke oppfylle kravet. Svaret om generelle vendinger forveksler helhet med abstraksjonsnivå, og svaret om datamateriale gjør et fortolkningskrav om til et empirisk omfangskrav.",
    },
    {
      question: "Hvilket av de fire kravene er mest omstridt for Marx' del?",
      options: ["Kravet om empirisk testing, siden artsvesen-leddet måler mot en normativ målestokk", "Kravet om teoretisk formidling, siden fremmedgjøringsbegrepet mangler klare definisjoner", "Kravet om helhetlig fortolkning, siden teorien bare gjelder arbeidslivet og ikke kulturen", "Kravet om kritiske ambisjoner, siden Marx ikke foreskriver noe bestemt politisk tiltak"],
      explanation: "Deler av apparatet lar seg undersøke, men leddet om fremmedgjøring fra artsvesenet er vanskelig å konfrontere med data. Svaret om manglende definisjoner er galt — begrepet har fire definerte ledd — og svaret om politiske tiltak forveksler kritiske ambisjoner med et program.",
    },
    {
      question: "Hva oppfyller kravet om teoretisk formidling i Marx' diagnose?",
      options: ["Fremmedgjøringsbegrepets fire definerte ledd, koblet til forholdene i produksjonen", "De historiske eksemplene han bruker fra industrien i sin egen samtid og tidligere epoker", "Den moralske indignasjonen over arbeidsforholdene, som gir teorien dens retning og kraft", "Sammenligningen med tidligere samfunnsformer, som viser at ordningen ikke er naturgitt"],
      explanation: "Kravet gjelder at påstanden er utledet av definerte begreper. Svaret om historiske eksempler gjelder empirien, svaret om indignasjon gjelder det kritiske kravet, og sammenligningen med tidligere samfunnsformer hører til historisiteten — alle tre er reelle trekk ved teorien, men de svarer på andre krav.",
    },
    {
      question: "Hva oppfyller kravet om helhetlig fortolkning i Marx' diagnose?",
      options: ["At arbeidets form, eiendom, klasse og rådende forestillinger forbindes under samme mønster", "At teorien gjelder alle land som har gjennomgått en industriell utvikling av et visst omfang", "At den bygger på både økonomiske, historiske og filosofiske kilder i sin argumentasjon", "At den beskriver hele arbeidsdagen til arbeideren, fra oppmøte til hjemreise om kvelden"],
      explanation: "Kravet gjelder at flere samfunnsområder gjøres forståelige som uttrykk for samme mønster. Svaret om geografisk rekkevidde forveksler helhet med utbredelse, og svaret om ulike kildetyper beskriver arbeidsmåten, ikke fortolkningen.",
    },
    {
      question: "Hva oppfyller kravet om kritiske ambisjoner i Marx' diagnose?",
      options: ["Artsvesenet som målestokk, slik at avstanden til virkeligheten blir selve diagnosen", "Kravet om at arbeiderne skal overta eierskapet til produksjonsmidlene i samfunnet", "Påvisningen av at inntekten er skjevt fordelt mellom eiere og dem som selger arbeidskraft", "Den skarpe tonen i framstillingen, som gjør det tydelig hvor forfatteren står i saken"],
      explanation: "Kritiske ambisjoner betyr at diagnosen måler mot en målestokk og finner tiden for lett. Svaret om eierskapet er et politisk program, svaret om skjev fordeling er en empirisk påvisning, og tonen i framstillingen er ikke et faglig kriterium i det hele tatt.",
    },
    {
      question: "Hva er relevans-i-dag-leddet?",
      options: ["Det faste sisteleddet som spør om diagnosen fortsatt beskriver noe, og i så fall hva", "Et innledende ledd der kandidaten skal begrunne hvorfor temaet er verdt å skrive om", "Et ledd der kandidaten skal vurdere om teoretikeren fikk rett i sine forutsigelser", "Et ledd der kandidaten skal foreslå tiltak som kunne løse problemet teorien peker ut"],
      explanation: "Leddet spør om diagnosen fortsatt beskriver noe, ikke om forfatteren fikk rett. Svaret om forutsigelser er nettopp fella som består i å måle en diagnose som prognose, og svaret om tiltak flytter oppgaven over i politikk.",
    },
    {
      question: "En kandidat skriver en halv side om merverdi og klassekamp i et ledd som ber om samtidsdiagnosen. Hvilken feil er dette?",
      options: ["Feil nummer 14: å beskrive Marx' teori i stedet for å vise at den oppfyller kravene", "Feil nummer 11: å hoppe over relevans-i-dag-leddet i en samtidsdiagnose-oppgave", "Feil nummer 12: å gi eksempler uten å begrunne at de illustrerer begrepet", "Feil nummer 3: å lese stikkordslista i oppgaveteksten som en liste over ting som må med"],
      explanation: "Feil nummer 14 gjelder nettopp å gjenfortelle teorien i stedet for å prøve den mot kravene. De tre andre er ekte koder i registeret, men gjelder et hoppet oppgaveledd, eksempelbegrunnelse og sjekklistelesing.",
    },
    {
      question: "Hva sier veiledningene for H2023 og H2025 er minimumskravet i denne oppgaven?",
      options: ["Å forklare hvorfor Marx gir en helhetlig fortolkning av samtiden med kritiske ambisjoner", "Å gjengi hovedtrekkene i Marx' analyse av kapitalismen på en oversiktlig og ryddig måte", "Å nevne alle fire kravene og deretter vurdere om teorien oppfyller hvert enkelt av dem", "Å ta stilling til om diagnosen fortsatt er treffende, med minst ett argument hver vei"],
      explanation: "Minimumskravet er formulert nettopp som det å forklare helheten og de kritiske ambisjonene. Svaret om å gjengi analysen er det minimumskravet skal motvirke, og de to siste svarene beskriver et høyere nivå enn minimum — å nevne alle fire krav og å argumentere begge veier hører til gode og sterke besvarelser.",
    },
    {
      question: "Hva er den vanligste feilbruken av de fire kravene?",
      options: ["Å bruke dem som sjekkliste og konkludere med at alle er oppfylt like godt", "Å bruke dem på andre teorier enn dem som står i pensum for det aktuelle semesteret", "Å bruke dem i drøftingsleddet i stedet for i redegjørelsesleddet der de hører hjemme", "Å bruke dem uten å oppgi hvem som har formulert dem i den framstillingen emnet bruker"],
      explanation: "En besvarelse som konkluderer med at alle er oppfylt like godt, har ikke prøvd noe — og prøvingen er selve oppgaven. Å bruke kravene på andre teorier er tvert imot en øvelse boka anbefaler, og manglende avsender er en annen feil av langt mindre omfang.",
    },
    {
      question: "Hva er drøftingsleddets avgjørende trinn i en samtidsdiagnose-oppgave?",
      options: ["Å svare på den beste innvendingen, ikke bare nevne den, før man lander begrunnet", "Å presentere så mange argumenter som mulig, slik at bredden i kunnskapen kommer fram", "Å konkludere klart, siden en besvarelse uten tydelig standpunkt aldri kan nå toppnivå", "Å vise til hva andre forskere har ment om spørsmålet, slik at drøftingen blir forankret"],
      explanation: "Sensorkravet er at minimum er ett argument, gode besvarelser gir flere relevante, og sterke gir både for og mot — og det som skiller, er om innvendingen faktisk besvares. Svaret om flest mulig argumenter forveksler mengde med veiing, og en avveiende konklusjon kan godt være toppnivå så lenge selve avveiningen er begrunnet.",
    },
    {
      question: "Hva er Marx' adressat i den kritiske ambisjonen?",
      options: ["Eiendomsforholdene i produksjonen, altså en ordning og ikke bestemte personer", "De enkelte fabrikkeierne, som han mener handler moralsk klanderverdig overfor sine ansatte", "Arbeiderne selv, som han mener må ta ansvar for å endre sin egen situasjon i samfunnet", "Staten, som han mener burde gripe inn med lovgivning mot de verste arbeidsforholdene"],
      explanation: "At adressaten er en ordning og ikke en skurk, er det som gjør kritikken samfunnsvitenskapelig. Svaret om fabrikkeiere gjør en strukturell analyse om til en moralsk dom over enkeltpersoner, og svaret om lovgivning tillegger Marx et reformprogram.",
    },
    {
      question: "Hvorfor er Durkheim et godt sammenligningspunkt når kravet om empirisk testing skal drøftes?",
      options: ["Fordi han knytter teorien til variasjon mellom grupper, der et annet mønster ville svekket den", "Fordi han var den eneste av klassikerne som arbeidet ved et universitet med sitt eget institutt der", "Fordi han skrev senere enn Marx og derfor hadde bedre statistikk tilgjengelig for arbeidet", "Fordi han begrenset seg til påstander som kunne bekreftes, og derfor aldri tok noen risiko"],
      explanation: "Sammenligningen gjør innvendingen mot Marx presis i stedet for generell: her ser vi hva empirisk testing kan bety. Svaret om tilgang til statistikk gjør en begrepslig forskjell om til en praktisk, og svaret om at han aldri tok risiko er galt — anomidiagnosen er dristig.",
    },
    {
      question: "Hva er de tre klassikernes diagnoser oppsummert?",
      options: ["Fremmedgjøring hos Marx, rasjonalisering hos Weber og anomi hos Durkheim", "Fremmedgjøring hos Marx, anomi hos Weber og rasjonalisering hos Durkheim", "Rasjonalisering hos Marx og individualisering hos Durkheim", "Anomi hos Marx, byråkratisering hos Weber og arbeidsdeling hos Durkheim"],
      explanation: "Koblingen mellom navn og diagnose må sitte automatisk, siden sammenligningsleddet hviler på den. De tre andre svarene bytter om på diagnosene, og byttet mellom anomi og rasjonalisering er den vanligste forvekslingen i denne klyngen.",
    },
  ],
  'svexfac03-3-1': [
    {
      question: "Hva er det faglige innholdet i «spørsmålet om sosial orden»?",
      options: ["Hvordan samordnet samhandling mellom mennesker i det hele tatt lar seg gjøre", "Hvordan et samfunn kan gjøres helt fritt for strid mellom grupper og klasser", "Hvordan myndighetene bør utforme lover som flest mulig innbyggere kan godta", "Hvordan den enkelte kan finne mening og tilhørighet i et oppdelt storsamfunn"],
      explanation: "Riktig svar er at spørsmålet gjelder betingelsene for at mennesker klarer å samordne handlingene sine i det hele tatt. Den nære fella er å lese «orden» som fravær av strid, altså at spørsmålet skulle handle om hvordan konflikt kan fjernes; en orden kan være full av strid og likevel være samordnet. Spørsmålet er dessuten beskrivende og ikke et normativt spørsmål om hvordan lover bør se ut.",
    },
    {
      question: "Hva innebærer det at sosial orden i faglig forstand ikke er det samme som fred og harmoni?",
      options: ["At en orden også kan hvile på tvang, makt eller ideologi, og ikke bare på enighet", "At samfunnet er fredfylt og harmonisk så lenge de delte verdiene er sterke nok", "At orden bare foreligger i perioder der ingen gruppe åpent utfordrer ordningene", "At orden er et ideal forskeren måler samfunn mot, ikke et trekk ved samfunnet"],
      explanation: "Riktig svar er at orden viser til at samhandlingen er samordnet og forutsigbar, uansett hva som holder samordningen oppe. Den nære fella er påstanden om at orden betyr at samfunnet er fredfylt og harmonisk; det ville gjort det umulig å snakke om orden i samfunn som styres med tvang. Nettopp derfor teller makt og ideologi som ordensmekanismer på linje med felles verdier.",
    },
    {
      question: "Hvorfor står både Hobbes og Marx i litteraturen om sosial orden, selv om de svarer helt ulikt?",
      options: ["Fordi begge forklarer hva som holder samordningen oppe, den ene med tvang og den andre med makt", "Fordi begge forklarer samordningen med felles verdier som læres inn gjennom oppdragelse og skole", "Fordi begge mente at samordningen oppstår av seg selv når hver enkelt følger sine egne interesser", "Fordi begge beskrev samfunn der striden mellom gruppene hadde stilnet og enigheten var blitt full"],
      explanation: "Riktig svar er at begge svarer på det samme spørsmålet om hva som gjør samordnet samhandling mulig, og at svarene deres peker på tvang og på makt framfor på enighet. Den nære fella er å tro at et ordenssvar må vise til felles verdier; det er bare integrasjonsperspektivets svar, ikke et krav til alle svar. Å plassere dem blant tenkere som beskriver samfunn uten strid blir også feil, siden begge tvert imot bygger på at interessene støter sammen.",
    },
    {
      question: "Hvem står bak inndelingen i de fire perspektivene på sosial orden slik de brukes her?",
      options: ["Solli, som ordner integrasjon, konflikt, handling og bytte og interaksjon i ett kart", "Aakvaag, som ordner klassikernes menneskesyn i fire ulike bilder av mennesket", "Balsvik, som ordner rasjonalitetsantakelsene i fire modeller av den handlende", "Merton, som ordner funksjonsbegrepet i tilsiktede og utilsiktede virkninger"],
      explanation: "Riktig svar er at Solli står bak kartet over de fire perspektivene på sosial orden. De nære fellene er avsendere som eier andre begreper i pensum: Aakvaag skriver om klassikernes menneskesyn, Balsvik om menneskemodellen og rasjonalitetsantakelsene, og Merton om manifeste og latente funksjoner. Alle disse er reelle bidrag, men ingen av dem er opphav til firedelingen av ordensperspektivene.",
    },
    {
      question: "Hva svarer integrasjonsperspektivet på spørsmålet om hva som holder en sosial orden oppe?",
      options: ["Delte verdier og normer som den enkelte har gjort til sine egne gjennom sosialisering", "Maktforhold som gjør at de som tjener på ordningen kan holde den ved like over tid", "Mange enkeltvalg som utilsiktet føyer seg sammen til et mønster ingen har villet", "Løpende tolkning mellom mennesker som møtes ansikt til ansikt i konkrete situasjoner"],
      explanation: "Riktig svar er at integrasjonsperspektivet forklarer orden med verdier og normer folk deler og har internalisert. De øvrige svarene er de tre andre perspektivenes svar: makt hører til konfliktperspektivet, utilsiktede mønstre av enkeltvalg til handlings- og bytteperspektivet, og løpende tolkning i møtet til interaksjonsperspektivet. Fella er å blande sammen hvilket perspektiv som gir hvilket svar, siden alle fire svarer på det samme spørsmålet.",
    },
    {
      question: "En forklaring sier at ordningen består fordi de som tjener på den har makt til å holde den ved like. Hvilket perspektiv er dette?",
      options: ["konfliktperspektivet, som ser makt og struktur som det som holder ordningen på plass", "integrasjonsperspektivet, som ser delte verdier som det som holder ordningen på plass", "interaksjonsperspektivet, som ser det konkrete møtet som det som skaper ordningen", "handlings- og bytteperspektivet, som ser bytter mellom aktører som ordningens grunn"],
      explanation: "Riktig svar er konfliktperspektivet, fordi forklaringen viser til maktforhold og til at ordningen tjener noen mer enn andre. Den nære fella er integrasjonsperspektivet, som også er strukturorientert, men som forklarer orden med at folk faktisk deler verdiene og ikke med at noen kan tvinge dem gjennom. Skillet mellom de to går altså ikke på struktur, men på om samordningen bygger på enighet eller på makt.",
    },
    {
      question: "Hva er kjernen i svaret handlings- og bytteperspektivet gir på spørsmålet om sosial orden?",
      options: ["Orden er et utilsiktet resultat av at mange aktører gjør det som lønner seg for dem selv", "Orden er et resultat av at aktørene i fellesskap er blitt enige om hvilke verdier som gjelder", "Orden er et resultat av at de mektigste aktørene kan sette rammene for de andres handlinger", "Orden er et resultat av at aktørene tolker hverandres uttrykk i det konkrete møtet mellom dem"],
      explanation: "Riktig svar er at orden her framstår som et mønster ingen enkeltaktør har hatt som mål, men som følger av mange nyttevurderinger og bytter. Den nære fella er å tro at perspektivet forutsetter enighet om verdiene; enigheten er nettopp det perspektivet ikke trenger, siden mønsteret oppstår av valgene alene. Tenkere som Smith, Elster og Coleman brukes gjerne til å vise denne tenkemåten.",
    },
    {
      question: "Hva er det særegne ved svaret interaksjonsperspektivet gir på spørsmålet om sosial orden?",
      options: ["Orden blir til og holdes ved like i det løpende samspillet mellom dem som møtes", "Orden blir til fordi verdier og normer er lært inn og virker som en kraft utenfra", "Orden blir til fordi maktforholdene i samfunnet gjør bestemte utfall uunngåelige", "Orden blir til fordi aktørene regner ut hva som lønner seg og bytter tjenester"],
      explanation: "Riktig svar er at interaksjonsperspektivet legger orden i selve samspillet, der partene tolker hverandre og bygger en felles forståelse av situasjonen. Den nære fella er integrasjonsperspektivet, som også snakker om normer, men plasserer dem i en struktur over den enkelte i stedet for i møtet mellom deltakerne. Goffman er den sentrale teoretikeren i denne tradisjonen.",
    },
    {
      question: "Langs hvilke tre dimensjoner skiller de fire perspektivene på sosial orden seg fra hverandre?",
      options: ["Struktur mot aktør, konflikt mot harmoni, og passiv mot aktiv menneskemodell", "Struktur mot kultur, makt mot tillit, og individuell mot kollektiv menneskemodell", "Teori mot empiri, konflikt mot harmoni, og beskrivende mot normativ framstilling", "Aktør mot handling, orden mot uorden, og materiell mot ideell forklaringsmåte"],
      explanation: "Riktig svar er at de tre dimensjonene er struktur mot aktør, konflikt mot harmoni, og passiv mot aktiv menneskemodell. Fella er å bytte ut én av dem med en annen kjent motsetning, for eksempel struktur mot kultur eller beskrivende mot normativ; slike motsetninger finnes i faget, men det er ikke dem kartet over ordensperspektivene bygger på. Det er kombinasjonen av de tre dimensjonene som gjør at de fire perspektivene lar seg holde fra hverandre.",
    },
    {
      question: "Hvor plasseres integrasjonsperspektivet langs de tre dimensjonene?",
      options: ["Strukturorientert, harmoniorientert, og med en passiv menneskemodell i bunn", "Strukturorientert, konfliktorientert, og med en passiv menneskemodell i bunn", "Aktørorientert, harmoniorientert, og med en aktiv menneskemodell i bunnen", "Aktørorientert, konfliktorientert, og med en aktiv menneskemodell i bunnen"],
      explanation: "Riktig svar er at integrasjonsperspektivet er strukturorientert og harmoniorientert og hviler på en passiv menneskemodell. Den nære fella er plasseringen strukturorientert og konfliktorientert, som gjelder konfliktperspektivet; de to deler struktursiden og menneskemodellen og skiller lag først på dimensjonen konflikt mot harmoni. Menneskemodellen kalles passiv fordi handlingen forklares med normer som er lært inn, ikke med den enkeltes egen avveining.",
    },
    {
      question: "Hvor plasseres konfliktperspektivet langs de tre dimensjonene?",
      options: ["Strukturorientert, konfliktorientert, og med en passiv menneskemodell i bunn", "Strukturorientert, harmoniorientert, og med en passiv menneskemodell i bunn", "Aktørorientert, konfliktorientert, og med en aktiv menneskemodell i bunnen", "Aktørorientert, harmoniorientert, og med en aktiv menneskemodell i bunnen"],
      explanation: "Riktig svar er at konfliktperspektivet er strukturorientert og konfliktorientert og bygger på en passiv menneskemodell. Fella er å anta at et perspektiv som handler om makt og strid må gi mennesket en aktiv rolle; her forklares handlingen tvert imot av posisjonen aktøren har i strukturen. Plasseringen skiller seg fra integrasjonsperspektivet bare på dimensjonen konflikt mot harmoni.",
    },
    {
      question: "Hvor plasseres handlings- og bytteperspektivet på dimensjonen struktur mot aktør og på dimensjonen passiv mot aktiv menneskemodell?",
      options: ["Aktørorientert, og med en aktiv menneskemodell der personen vurderer og velger", "Strukturorientert, med en passiv menneskemodell der posisjonen styrer", "Aktørorientert, og med en passiv menneskemodell der vanen styrer det som skjer", "Strukturorientert, med en aktiv menneskemodell der vurderingen teller"],
      explanation: "Riktig svar er at perspektivet er aktørorientert og bygger på en aktiv menneskemodell, siden handlingen forklares med at aktøren veier alternativer mot hverandre. Den nære fella er å kombinere aktørorientering med en passiv modell; en slik kombinasjon ville gjort selve valget uinteressant, og da faller grunnlaget bort for å forklare mønstre som utilsiktede resultater av valg. Struktur kommer inn som rammer, men forklaringen begynner hos den handlende.",
    },
    {
      question: "Hva er den riktige plasseringen av interaksjonsperspektivet langs de tre dimensjonene?",
      options: ["Aktørorientert, aktiv menneskemodell, og verken utpreget konflikt- eller harmoniorientert", "Strukturorientert, passiv menneskemodell, og verken utpreget konflikt- eller harmoniorientert", "Aktørorientert, aktiv menneskemodell, og klart harmoniorientert på linje med integrasjon", "Aktørorientert, passiv menneskemodell, og klart konfliktorientert på linje med konflikt"],
      explanation: "Riktig svar er at interaksjonsperspektivet er aktørorientert med en aktiv menneskemodell, men ikke lar seg plassere entydig på dimensjonen konflikt mot harmoni. Den nære fella er å presse det inn på harmonisiden fordi det handler om samspill; samspillet kan like gjerne romme kamp om hvordan situasjonen skal forstås. Det er altså to av tre dimensjoner som gir tydelig plassering her.",
    },
    {
      question: "Integrasjonsperspektivet og konfliktperspektivet deler både struktursiden og den passive menneskemodellen. Hva skiller dem da fra hverandre?",
      options: ["Dimensjonen konflikt mot harmoni, altså om samordningen hviler på enighet eller på makt", "Dimensjonen struktur mot aktør, altså om forklaringen begynner hos den enkelte", "Dimensjonen passiv mot aktiv, altså om personen vurderer og velger eller styres utenfra", "Skillet mellom beskrivende og normativ framstilling av hvordan samfunnet bør innrettes"],
      explanation: "Riktig svar er at de to perspektivene skiller lag på dimensjonen konflikt mot harmoni. Fella er å gripe til struktur mot aktør, som er en reell dimensjon i kartet, men som her nettopp er felles for de to. Dette viser hvorfor det trengs tre dimensjoner: to perspektiver kan falle sammen på to av dem og likevel gi helt ulike svar.",
    },
    {
      question: "Hva menes med begrepet «aktør» i begrepsparet aktør og struktur?",
      options: ["Den handlende som har mål og som kan velge mellom flere måter å nå dem på", "Den enkelte slik hun framstår i rollen sin overfor et bestemt publikum", "Den gruppen som i kraft av posisjon kan sette rammene for andres handlinger", "Den delen av et samfunn som løser en bestemt oppgave for helheten over tid"],
      explanation: "Riktig svar er at aktør viser til den handlende med mål og valgmuligheter. Den nære fella er å definere aktør som en rolleopptreden overfor et publikum; det ligger tett på Goffmans språkbruk, men rolle er noe aktøren spiller, og ikke det aktørbegrepet i seg selv betyr. Motstykket til aktør er struktur, ikke rolle.",
    },
    {
      question: "Hva menes med begrepet «struktur» i begrepsparet aktør og struktur?",
      options: ["Mønstre som ligger utenfor den enkelte og som former hvilket handlingsrom hun har", "Summen av de valgene enkeltpersoner faktisk gjør i en gitt situasjon", "De uttalte reglene som er nedfelt i lover og skriftlige avtaler i et gitt samfunn", "De målene en aktør setter seg og som gir retning til handlingene hennes over tid"],
      explanation: "Riktig svar er at struktur er mønstre som ligger utenfor den enkelte og former handlingsrommet hennes. Den nære fella er å begrense struktur til nedskrevne regler; uskrevne normer, maktforhold og økonomiske posisjoner er struktur selv om ingen har formulert dem i en lovtekst. Struktur er heller ikke bare summen av valg, for da ville begrepet falt sammen med aktørsiden.",
    },
    {
      question: "Hva kjennetegner en aktiv menneskemodell slik Balsvik bruker uttrykket?",
      options: ["Handlingen forklares ved at personen vurderer alternativer og velger mellom dem", "Handlingen forklares ved at personen er virksom og deltar i mange fellesskap", "Handlingen forklares ved krefter som virker utenfor eller under personens kontroll", "Handlingen forklares ved normer som er lært inn og gjort til personens egne"],
      explanation: "Riktig svar er at en aktiv menneskemodell forklarer handlingen med personens egen vurdering og valg. Den nære fella er å lese «aktiv» som at personen er virksom eller engasjert; uttrykket gjelder forklaringsmåten, ikke aktivitetsnivået, så en travel person kan godt forklares med en passiv modell. En menneskemodell er nettopp et sett antakelser om hva slags vesen den handlende er.",
    },
    {
      question: "Hva kjennetegner en passiv menneskemodell?",
      options: ["Handlingen forklares ved krefter utenfor eller under personens egen kontroll", "Handlingen forklares ved at personen veier fordeler og ulemper mot hverandre", "Handlingen forklares ved at personen unnlater å gripe inn i det som skjer", "Handlingen forklares ved at personen tolker situasjonen sammen med de andre"],
      explanation: "Riktig svar er at en passiv menneskemodell forklarer handlingen med krefter som virker utenfra eller under det personen selv har kontroll over, for eksempel innlærte normer eller en posisjon i strukturen. Den nære fella er å lese modellen som at personen ikke gjør noe; personen kan handle mye, men handlingen tilskrives ikke hennes egen avveining. Balsvik bruker skillet til å vise hvilke rasjonalitetsantakelser en forklaring hviler på.",
    },
    {
      question: "En forsker forklarer at kollegene i en avdeling hilser på hverandre hver morgen fordi de har lært at det er slik man gjør, uten at noen vurderer det fra dag til dag. Hvilken menneskemodell hviler forklaringen på?",
      options: ["En passiv modell, siden handlingen føres tilbake til en innlært norm og ikke til en avveining", "En aktiv modell, siden handlingen føres tilbake til en avveining av hva som lønner seg mest", "En aktiv modell, siden de ansatte selv har valgt å søke seg til akkurat denne avdelingen", "En passiv modell, siden de ansatte er underlagt en ledelse som kan gi dem pålegg om hilsen"],
      explanation: "Riktig svar er at forklaringen hviler på en passiv menneskemodell, fordi hilsenen tilskrives en innlært norm og ikke en vurdering den enkelte gjør. Den nære fella er å peke på at de ansatte har valgt arbeidsplassen sin; det valget forklarer ikke hilsingen, og menneskemodellen leses ut av selve forklaringen som gis, ikke av andre valg personen måtte ha gjort. Ingen ledelse er inne i bildet her, så pålegg er heller ikke mekanismen.",
    },
    {
      question: "I en havneby får de største rederiene alltid de beste kaiplassene, og de mindre finner seg i det fordi ingen av dem makter å endre ordningen. Hva sier dette tilfellet om begrepet sosial orden?",
      options: ["Det er en sosial orden, siden samhandlingen er samordnet selv om den bygger på ulik makt", "Det er ingen sosial orden, siden en orden krever at deltakerne er enige om ordningen", "Det er ingen sosial orden, siden samfunnet her ikke er preget av harmoni", "Det er en sosial orden bare dersom rederiene også deler et felles verdisyn om havnedrift"],
      explanation: "Riktig svar er at dette er en sosial orden, fordi samhandlingen faktisk er samordnet og forutsigbar. Den nære fella er kravet om enighet blant deltakerne; det ville gjort begrepet ubrukelig for alle ordninger som hviler på makt, tvang eller ideologi, og nettopp slike ordninger er konfliktperspektivets kjerneområde. Orden sier hvordan samhandlingen henger sammen, ikke om ordningen er god eller rettferdig.",
    },
  ],
  'svexfac03-3-2': [
    {
      question: "Hva er kjernepåstanden i integrasjonsperspektivet slik Solli framstiller det?",
      options: ["Orden hviler på verdier og normer som deles og er gjort til den enkeltes egne", "Orden hviler på at de som tjener på ordningen har makt til å holde den ved like", "Orden hviler på at hver enkelt regner ut hva som lønner seg og handler deretter", "Orden hviler på at partene tolker hverandre i det konkrete møtet ansikt til ansikt"],
      explanation: "Riktig svar er at integrasjonsperspektivet forklarer samordning med delte verdier og normer som er internalisert. Den nære fella er konfliktperspektivets svar om makt; begge er strukturorienterte, men bare integrasjonsperspektivet lar samordningen hvile på at folk faktisk slutter opp om verdiene. De to øvrige svarene tilhører handlings- og bytteperspektivet og interaksjonsperspektivet.",
    },
    {
      question: "Hvilken rolle spiller sosialisering i integrasjonsperspektivet?",
      options: ["Den er prosessen der samfunnets verdier og normer blir en del av den enkelte selv", "Den er prosessen der de mektigste gruppene får gjennomslag for interessene sine over tid", "Den er prosessen der aktørene lærer å regne ut hva de tjener på i ulike bytter, og velge det som lønner seg", "Den er prosessen der en avtale får rettslig bindende kraft mellom to parter"],
      explanation: "Riktig svar er at sosialisering er måten verdiene og normene blir den enkeltes egne på, slik at de virker innenfra og ikke bare som ytre press. Den nære fella er å beskrive sosialisering som maktbruk fra sterke gruppers side; det ville gjort forklaringen til en konfliktforklaring i stedet. I integrasjonsperspektivet er poenget at folk følger normene fordi de opplever dem som riktige.",
    },
    {
      question: "Hva er forskjellen mellom å ha internalisert en norm og å bare rette seg etter den utad?",
      options: ["Internalisert betyr at normen oppleves som ens egen, mens ytre etterlevelse skjer av frykt", "Internalisert betyr at normen er nedfelt i lov, mens ytre etterlevelse hviler på sedvane uten lovs kraft", "Internalisert betyr at normen er kjent for alle, mens ytre etterlevelse er ukjent for de fleste", "Internalisert betyr at normen gjelder i familien, mens ytre etterlevelse gjelder i arbeidslivet"],
      explanation: "Riktig svar er at internalisering betyr at normen er gjort til ens egen, slik at man følger den også når ingen ser på. Den nære fella er å knytte skillet til lov mot sedvane; en norm kan være internalisert uten å stå i noen lov, og en lovfestet regel kan følges rent utvendig av frykt for straff. Nettopp derfor er internalisering avgjørende for integrasjonsperspektivets ordensforklaring.",
    },
    {
      question: "Hva menes med Durkheims begrep «kollektiv bevissthet»?",
      options: ["Summen av felles forestillinger og følelser som virker som en kraft utenfor den enkelte", "Summen av det hver enkelt innbygger tenker og mener, lagt sammen til et gjennomsnitt for alle", "Summen av de reglene et samfunn har vedtatt gjennom sine folkevalgte organer", "Summen av de interessene ulike grupper forsvarer i kampen om godene i samfunnet og om posisjonene som gir makt"],
      explanation: "Riktig svar er at kollektiv bevissthet er de felles forestillingene og følelsene i et samfunn, forstått som en kraft som virker på den enkelte utenfra. Den nære fella er å lese begrepet som et gjennomsnitt av det hver enkelt tenker; da forsvinner nettopp det Durkheim vil fram til, at den felles bevisstheten har en egen tyngde som den enkelte møter som en ytre realitet. Begrepet er derfor et strukturbegrep, ikke et sammendrag av enkeltmeninger.",
    },
    {
      question: "Hvorfor er det feil å si at kollektiv bevissthet er summen av det hver enkelt person tenker?",
      options: ["Fordi den virker på den enkelte som en ytre kraft og ikke lar seg redusere til enkeltmeninger", "Fordi den bare finnes i små samfunn der alle kjenner hverandre og deler de samme oppgavene og den samme troen", "Fordi den viser til myndighetenes offisielle syn og ikke til det befolkningen faktisk mener til enhver tid", "Fordi den skifter så raskt at ingen på et gitt tidspunkt kan si hva den består av"],
      explanation: "Riktig svar er at kollektiv bevissthet er noe annet enn et sammendrag av enkeltmeninger, siden den møter den enkelte som en ytre kraft hun må forholde seg til. Den nære fella er å begrense begrepet til små samfunn; Durkheim beskriver riktignok en sterkere kollektiv bevissthet i enkle samfunn, men begrepet er ikke forbeholdt dem. Poenget er nivåforskjellen mellom samfunnet og den enkelte, ikke samfunnets størrelse.",
    },
    {
      question: "Hvem er avsenderen bak begrepet «kollektiv bevissthet» slik det brukes i ordensdebatten?",
      options: ["Durkheim, som bruker det om de felles forestillingene i et samfunn", "Parsons, som bruker det om det fjerde av funksjonskravene i skjemaet sitt", "Merton, som bruker det om virkninger deltakerne ikke selv er klar over", "Goffman, som bruker det om den felles forståelsen partene bygger opp"],
      explanation: "Riktig svar er at kollektiv bevissthet er Durkheims begrep. De nære fellene er andre avsendere som eier hver sine begreper: Parsons står bak AGIL, Merton bak manifeste og latente funksjoner, og Goffman bak analysen av det konkrete møtet. Alle tre hører hjemme i pensum, men ingen av dem er opphav til kollektiv bevissthet.",
    },
    {
      question: "Hva sikter Durkheim til med «prekontraktuell solidaritet»?",
      options: ["En tillit og normorden som må finnes på forhånd for at en kontrakt skal forplikte", "En avtale partene inngår før den endelige kontrakten blir skrevet under av begge", "En plikt til å hjelpe andre som gjelder også når man ikke har inngått noen avtale", "En felles interesse partene har i at kontrakten faktisk blir lønnsom for begge to"],
      explanation: "Riktig svar er at prekontraktuell solidaritet er den tilliten og normordenen som ligger forut for kontrakten og gjør den bindende. Den nære fella er å lese forstavelsen «pre» tidsmessig, som en foreløpig avtale før den endelige; poenget er logisk, ikke kronologisk, siden det handler om en forutsetning kontrakten selv ikke kan skape. Uten en slik forutgående normorden ville en underskrift ikke forplikte noen.",
    },
    {
      question: "Hvorfor kan en kontrakt ikke selv skape det grunnlaget den hviler på?",
      options: ["Fordi selve løftet bare binder dersom det allerede gjelder en norm om at løfter skal holdes", "Fordi en kontrakt først blir rettslig gyldig når en domstol har prøvd innholdet i den i en konkret sak", "Fordi partene sjelden klarer å formulere alle vilkårene tydelig nok i teksten", "Fordi den ene parten som regel har mer makt enn den andre når avtalen inngås"],
      explanation: "Riktig svar er at et løfte bare forplikter dersom det på forhånd finnes en norm om at løfter skal holdes, og den normen kan ikke selv være avtalt fram. Den nære fella er å vise til domstolene; en rettslig prøving forutsetter i sin tur et normgrunnlag og flytter derfor bare problemet ett steg videre. Argumentet er nettopp at ingen avtale kan trekke seg selv opp etter håret.",
    },
    {
      question: "To naboer avtaler å bytte på å måke fellesinnkjørselen, uten skriftlig avtale og uten noen sanksjon om noen svikter. Hva illustrerer dette best?",
      options: ["Prekontraktuell solidaritet, siden avtalen bare virker fordi tilliten er der på forhånd", "Dysfunksjon, siden ordningen kan svekke de andre oppgavene naboene har seg imellom", "En manifest funksjon, siden begge naboene har snørydding som uttalt mål med avtalen og oppnår det de sikter mot", "AGIL, siden alle de fire funksjonskravene her løses innenfor et lite og oversiktlig system"],
      explanation: "Riktig svar er at avtalen illustrerer prekontraktuell solidaritet: den forplikter fordi naboene alt deler en tillit og en normorden som avtalen bygger videre på. Den nære fella er å kalle snørydding en manifest funksjon; det er riktig at målet er uttalt, men spørsmålet her gjelder hva som gjør avtalen bindende, ikke hvilken virkning den har for en større helhet. Dysfunksjon og AGIL hører til andre begrepspar.",
    },
    {
      question: "Hvem står bak AGIL-skjemaet?",
      options: ["Parsons, som setter opp fire funksjonskrav ethvert sosialt system må løse", "Durkheim, som setter opp fire former for solidaritet i moderne samfunn, to for hver samfunnstype", "Merton, som setter opp fire typer virkninger en ordning kan ha for helheten", "Solli, som setter opp fire perspektiver på hvordan sosial orden kan forklares"],
      explanation: "Riktig svar er at AGIL er Parsons' skjema over fire funksjonskrav. De nære fellene bytter ut avsenderen med andre som også opererer med firedelinger: Solli deler ordensperspektivene i fire, mens Durkheim og Merton eier henholdsvis solidaritetsbegrepet og skillet mellom manifeste og latente funksjoner. Å tilskrive AGIL til Durkheim eller Merton er en av de vanligste forvekslingene i dette stoffet.",
    },
    {
      question: "Hva er AGIL et skjema over?",
      options: ["De fire funksjonskravene ethvert sosialt system må løse for å bestå over tid", "De fire stadiene et samfunn går gjennom på vei fra enkelt til sammensatt", "De fire maktformene som kan gjøre at en gruppe får viljen sin i et samfunn", "De fire rollene en deltaker kan innta i et møte med andre ansikt til ansikt"],
      explanation: "Riktig svar er at AGIL angir fire funksjonskrav som må løses i ethvert sosialt system: tilpasning, måloppnåelse, integrasjon og opprettholdelse av mønstre. Den nære fella er å lese skjemaet som en utviklingsrekke i tid; kravene er samtidige og løpende, ikke stadier et samfunn passerer etter tur. Skjemaet sier heller ikke noe om maktformer eller om roller i møtet.",
    },
    {
      question: "Hvilket funksjonskrav i AGIL dekker forholdet mellom systemet og omgivelsene rundt det?",
      options: ["Tilpasning, altså å skaffe og fordele de ressursene systemet trenger utenfra", "Måloppnåelse, altså å sette felles mål og bruke kreftene på å nå dem", "Integrasjon, altså å holde de ulike delene i systemet sammen over tid uten at de trekker fra hverandre", "Mønsteropprettholdelse, altså å bevare verdiene og motivasjonen hos deltakerne"],
      explanation: "Riktig svar er tilpasning, som gjelder å hente inn og fordele ressurser fra omgivelsene. De øvrige svarene er de tre andre kravene i skjemaet og er riktige beskrivelser av dem, men ingen av dem handler om forholdet utover mot omgivelsene. Fella er å blande sammen hvilket krav som dekker hva, siden alle fire er formulert på samme abstraksjonsnivå.",
    },
    {
      question: "Hvilket funksjonskrav i AGIL handler om å holde de ulike delene av systemet sammen?",
      options: ["Integrasjon, altså å samordne delene slik at de ikke trekker i hver sin retning", "Tilpasning, altså å hente inn de ressursene systemet trenger fra omgivelsene og fordele dem internt", "Måloppnåelse, altså å prioritere mellom mål og sette inn kreftene mot dem", "Mønsteropprettholdelse, altså å føre verdiene videre og holde motivasjonen hos deltakerne oppe"],
      explanation: "Riktig svar er integrasjon, som gjelder samordningen mellom delene i systemet. Den nære fella er mønsteropprettholdelse, som også handler om noe som varer over tid; forskjellen er at mønsteropprettholdelse gjelder verdier og motivasjon hos deltakerne, mens integrasjon gjelder forholdet mellom delene. Navnet på dette kravet er også lett å forveksle med integrasjonsperspektivet, som er noe annet.",
    },
    {
      question: "Hva dekker funksjonskravet mønsteropprettholdelse i AGIL?",
      options: ["Å føre verdier videre og holde motivasjonen hos deltakerne oppe over tid", "Å tilpasse systemet til endringer i teknologi og i markedene rundt det", "Å avgjøre hvilke av systemets mange mål som skal prioriteres først", "Å løse de konfliktene som oppstår mellom delene av systemet underveis"],
      explanation: "Riktig svar er at mønsteropprettholdelse gjelder å bevare verdimønstrene og motivasjonen som gjør at deltakerne fortsetter å fylle plassene sine. Den nære fella er konfliktløsning mellom delene, som hører til integrasjonskravet. Kravet handler altså om det som holder systemet i gang innenfra over tid, ikke om samordningen mellom delene i øyeblikket.",
    },
    {
      question: "Hvorfor kalles integrasjonsperspektivet strukturorientert, når det handler om hva folk tror på?",
      options: ["Fordi verdiene forstås som en orden over den enkelte, ikke som meninger hun har valgt", "Fordi verdiene alltid er nedfelt i lover og formelle regler som er vedtatt ovenfra", "Fordi verdiene bare tilhører de gruppene som har makt til å få gjennomslag for dem", "Fordi verdiene endrer seg langsomt og derfor er vanskelige å måle i en undersøkelse"],
      explanation: "Riktig svar er at verdiene her behandles som en orden som ligger over og forut for den enkelte, og som hun møter gjennom sosialiseringen. Den nære fella er å knytte struktur til formelle lover; struktur i denne betydningen omfatter også uskrevne normer og forestillinger. At noe handler om tro og verdier gjør det altså ikke automatisk til en aktørorientert forklaring.",
    },
    {
      question: "Hvilken menneskemodell hviler integrasjonsperspektivet på?",
      options: ["En passiv modell, der handlingen forklares med normer den enkelte har lært inn", "En aktiv modell, der handlingen forklares med at personen vurderer og velger", "En aktiv modell, der handlingen forklares med tolkningen partene gjør i møtet", "En passiv modell, der handlingen forklares med tvang fra dem som har mest makt"],
      explanation: "Riktig svar er at perspektivet hviler på en passiv menneskemodell, siden handlingen forklares med internaliserte normer og ikke med den enkeltes egen avveining. Den nære fella er den passive modellen begrunnet med tvang; tvang gir også en passiv modell, men det er konfliktperspektivets mekanisme, ikke integrasjonsperspektivets. Her følger folk normene fordi de opplever dem som sine egne.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom integrasjonsperspektivet og konfliktperspektivet?",
      options: ["Om orden forklares med at folk deler verdiene eller med at noen har makt til å holde den ved like", "Om forklaringen tar utgangspunkt i strukturen over den enkelte eller i den handlende aktøren selv", "Om mennesket antas å vurdere og velge selv eller å bli styrt av krefter det ikke rår over", "Om framstillingen beskriver samfunnet slik det er eller vurderer hvordan det burde ha vært"],
      explanation: "Riktig svar er at de to skiller lag på om samordningen hviler på delte verdier eller på makt. Den nære fella er struktur mot aktør, som er en reell dimensjon i kartet, men som her er felles: begge perspektivene er strukturorienterte. Det samme gjelder menneskemodellen, som er passiv i begge.",
    },
    {
      question: "Hva skiller integrasjonsperspektivet fra handlings- og bytteperspektivet?",
      options: ["Der orden følger av felles verdier i det ene, er den et utilsiktet resultat av mange valg i det andre", "Der orden følger av felles verdier i det ene, er den et resultat av åpen tvang i det andre", "Der orden følger av felles verdier i det ene, er den et resultat av tolkning i møtet ansikt til ansikt i det andre", "Der orden følger av felles verdier i det ene, er den et resultat av rettslig bindende avtaler i det andre"],
      explanation: "Riktig svar er at handlings- og bytteperspektivet forklarer orden som et mønster ingen har villet, men som følger av mange enkeltvalg. Den nære fella er å tilskrive dette perspektivet tolkningen i møtet, som hører til interaksjonsperspektivet. Forskjellen mot integrasjonsperspektivet ligger både i at forklaringen begynner hos aktøren, og i at fellesverdier ikke trengs for å få mønsteret.",
    },
    {
      question: "Hvorfor er det feil å tro at integrasjonsperspektivet forutsetter at det ikke finnes strid i samfunnet?",
      options: ["Fordi perspektivet forklarer samordningen med delte verdier, ikke med at uenighet er fraværende", "Fordi perspektivet regner med at striden alltid vil ende med at én gruppes verdier vinner fram på bekostning av de andre", "Fordi perspektivet bare gjelder for små grupper, der strid uansett sjelden rekker å bygge seg opp", "Fordi perspektivet ser strid som selve kilden til de verdiene medlemmene etter hvert kommer til å dele"],
      explanation: "Riktig svar er at perspektivet forklarer hvordan samordning er mulig, og det utelukker verken uenighet eller åpne konflikter innenfor en delt verdiramme. Den nære fella er å lese harmoniorienteringen som en påstand om at strid ikke finnes; harmoniorientering betyr at forklaringen legger vekt på det som binder sammen, ikke at bindingen aldri utfordres. Perspektivet er heller ikke begrenset til små grupper.",
    },
    {
      question: "På en arbeidsplass møter nesten alle presis til møtene, og de ansatte sier at det ville føles galt å komme for sent. Hvilken forklaring er en integrasjonsforklaring?",
      options: ["At presisnormen er lært inn og oppleves som riktig, slik at den virker uten kontroll", "At ledelsen fører oppmøtelister og at de ansatte frykter følgene av å bli registrert", "At hver enkelt har regnet ut at presis oppmøte lønner seg for egen karriere på sikt", "At de ansatte leser hverandres kroppsspråk i døråpningen og retter seg etter det"],
      explanation: "Riktig svar er at presisheten forklares med en internalisert norm som oppleves som riktig av dem det gjelder. Den nære fella er kontroll fra ledelsen; det ville vært en maktforklaring og dermed en konfliktforklaring, selv om atferden utad ser helt lik ut. Nettopp derfor må man se på mekanismen som utpekes, ikke bare på hva folk faktisk gjør.",
    },
    {
      question: "I et boligsameie betaler nesten alle fellesutgiftene i tide. Hvilken lesning bruker konfliktperspektivet framfor integrasjonsperspektivet?",
      options: ["At styret kan ilegge gebyr og til slutt tvangsselge, og at betalingen følger av dette maktforholdet", "At beboerne har lært at man alltid gjør opp for seg, og at regningen derfor betales uten at noen maser", "At beboerne tolker naboenes reaksjoner i oppgangen og retter seg etter det de leser der", "At hver beboer regner ut at det lønner seg å betale for å beholde verdien på leiligheten"],
      explanation: "Riktig svar er at konfliktperspektivet peker på styrets sanksjonsmuligheter og altså på makt som mekanisme. Den nære fella er forklaringen om innlærte normer, som er den samme atferden lest gjennom integrasjonsperspektivet. Poenget er at ett og samme utfall kan forklares på flere måter, og at valget mellom dem må begrunnes.",
    },
    {
      question: "Hva er forholdet mellom Durkheims kollektive bevissthet og Parsons' AGIL i integrasjonsperspektivet?",
      options: ["Begge peker på at samordning krever noe felles over den enkelte, men bare AGIL er et skjema over funksjonskrav", "Begge er skjemaer over funksjonskrav, men bare kollektiv bevissthet dekker forholdet til omgivelsene rundt det sosiale systemet", "Begge beskriver hvordan makt fordeles i et samfunn, men bare AGIL sier noe om verdier og motivasjon", "Begge beskriver hva som skjer i møtet mellom to parter, men bare kollektiv bevissthet er et rent strukturbegrep"],
      explanation: "Riktig svar er at begge hører hjemme i integrasjonsperspektivet og peker på noe felles over den enkelte, mens bare AGIL er et skjema over fire funksjonskrav. Den nære fella er å gjøre kollektiv bevissthet til et skjema den også; det er et begrep om felles forestillinger og følelser, ikke en oppstilling av krav et system må løse. Ingen av dem handler om møtet ansikt til ansikt.",
    },
    {
      question: "Hva svarer integrasjonsperspektivet dersom noen spør hvorfor folk holder avtalene sine også når det ikke lønner seg?",
      options: ["At normen om å holde avtaler er internalisert og virker uavhengig av hva det koster", "At kostnaden ved brudd i praksis alltid er høyere enn den umiddelbart ser ut til å være", "At de som ikke holder avtaler blir straffet av dem som har mest makt i samfunnet", "At partene i situasjonen forhandler seg fram til hva avtalen egentlig skulle bety hver gang den settes på prøve"],
      explanation: "Riktig svar er at normen om å holde avtaler virker innenfra og derfor ikke er avhengig av en nytteberegning. Den nære fella er å regne om lojaliteten til en skjult lønnsomhet; det er handlings- og bytteperspektivets måte å redde forklaringen på, og den forutsetter nettopp det integrasjonsperspektivet avviser. Prekontraktuell solidaritet er begrepet som fanger denne forutgående forpliktelsen.",
    },
    {
      question: "Hvilken beskrivelse fanger integrasjonsperspektivets plassering på alle tre dimensjonene?",
      options: ["Strukturorientert, harmoniorientert, og bygget på en passiv menneskemodell", "Strukturorientert, konfliktorientert, og bygget på en passiv menneskemodell", "Aktørorientert, harmoniorientert, og bygget på en aktiv menneskemodell", "Strukturorientert, harmoniorientert, og bygget på en aktiv menneskemodell der verdiene velges fritt"],
      explanation: "Riktig svar er at integrasjonsperspektivet er strukturorientert og harmoniorientert og hviler på en passiv menneskemodell. Den nære fella kombinerer riktig struktur- og harmoniplassering med en aktiv menneskemodell; det ville gjort verdiene til noe den enkelte velger, mens perspektivets poeng er at de er lært inn og virker som en ytre orden. Alle tre dimensjonene må stemme for at plasseringen skal være riktig.",
    },
  ],
  'svexfac03-3-3': [
    {
      question: "Hva kjennetegner en funksjonalistisk forklaring av en samfunnsordning?",
      options: ["Ordningen forklares ved den virkningen den har for helheten den inngår i", "Ordningen forklares ved motivene til dem som innførte den", "Ordningen forklares ved den maktkampen som ligger bak at den ble innført", "Ordningen forklares ved hvordan deltakerne tolker den"],
      explanation: "Riktig svar er at funksjonalismen forklarer en ordning ved virkningen den har for den helheten den inngår i. Den nære fella er å vise til motivene til dem som innførte ordningen; da har man gitt en forklaring ved hensikt, og det er nettopp det en funksjonsforklaring ikke er. Virkning og hensikt kan falle sammen, men de trenger ikke gjøre det.",
    },
    {
      question: "Hva ligger i påstanden om at en funksjon er en virkning og ikke en hensikt?",
      options: ["At ingen behøver å ha villet virkningen for at ordningen skal ha den funksjonen", "At virkningen alltid er til gagn for helheten selv når ingen har planlagt den", "At bare ordninger som er innført bevisst kan sies å ha en funksjon i systemet", "At virkningen må kunne måles i tall før man kan kalle den en funksjon i det hele tatt"],
      explanation: "Riktig svar er at en funksjon foreligger uavhengig av om noen har hatt virkningen som mål. Den nære fella er å knytte funksjonen til bevisst innføring; det ville gjort latente funksjoner umulige, siden de nettopp er utilsiktede. Å hevde at virkningen alltid er til gagn er også galt, for en virkning kan svekke systemet og da kalles den dysfunksjon.",
    },
    {
      question: "En student skriver at «gravferdsritualer har som funksjon å trøste de etterlatte, og det er derfor de ble innført». Hva er problemet med formuleringen?",
      options: ["Den gjør virkningen om til en hensikt, og blander dermed to ulike forklaringsmåter", "Den gjør hensikten om til en virkning, og overser at deltakerne kjenner sitt eget mål", "Den påstår at ritualene har en virkning uten å oppgi hvem virkningen gjelder for", "Den bruker begrepet funksjon om noe som egentlig burde vært kalt en dysfunksjon"],
      explanation: "Riktig svar er at formuleringen glir fra å påvise en virkning til å påstå en hensikt bak innføringen. En funksjonsforklaring sier hva ordningen gjør for helheten, ikke hvorfor noen en gang bestemte seg for den. Den nære fella er innvendingen om at det mangler opplysning om hvem virkningen gjelder for; det er et reelt krav i funksjonsanalysen, men her er hovedfeilen sammenblandingen av virkning og hensikt.",
    },
    {
      question: "Hva er en «manifest funksjon» hos Merton?",
      options: ["En virkning som er tilsiktet og erkjent av dem som deltar i ordningen", "En virkning som er tydelig synlig for alle utenforstående som ser på", "En virkning som er så sterk at ordningen ikke kan avvikles uten skade", "En virkning som gjelder samfunnet som helhet og ikke bare en enkelt gruppe"],
      explanation: "Riktig svar er at en manifest funksjon er tilsiktet og erkjent av deltakerne selv. Den nære fella er å definere den ved at virkningen er lett synlig utenfra; avgjørende er hva deltakerne selv har som mål og er klar over, ikke hvor iøynefallende virkningen er for en tilskuer. Rekkevidden av virkningen er heller ikke det som avgjør om den er manifest.",
    },
    {
      question: "Hva er en «latent funksjon» hos Merton?",
      options: ["En virkning som er utilsiktet og som deltakerne ikke selv er klar over", "En virkning som først viser seg lenge etter at ordningen ble innført", "En virkning som er skjult fordi noen bevisst holder den hemmelig for andre", "En virkning som svekker helheten og derfor undergraver systemet innenfra"],
      explanation: "Riktig svar er at en latent funksjon er utilsiktet og uerkjent av deltakerne. Den nære fella er å lese «latent» som forsinket i tid; en latent funksjon kan virke med én gang, og det avgjørende er om deltakerne har den som mål og er klar over den. En virkning som svekker helheten er dessuten en dysfunksjon, som er et annet begrep.",
    },
    {
      question: "En idrettsklubb arrangerer et årlig loppemarked for å samle inn penger til nytt utstyr. Underveis blir mange foreldre kjent med hverandre, og terskelen for å be om hjelp i hverdagen synker. Hvordan bør de to virkningene beskrives?",
      options: ["Pengeinnsamlingen er manifest funksjon, mens det nye nabofellesskapet er latent funksjon", "Pengeinnsamlingen er latent funksjon, mens det nye nabofellesskapet er manifest funksjon", "Begge er manifeste funksjoner, siden klubben ønsker seg både penger og bedre samhold", "Begge er latente funksjoner, siden ingen kunne vite på forhånd hvordan dagen ville gå"],
      explanation: "Riktig svar er at innsamlingen er tilsiktet og erkjent og dermed manifest, mens fellesskapet mellom foreldrene oppstår uten å være målet og dermed er latent. Den nære fella er å kalle begge manifeste fordi klubben nok setter pris på samholdet også; det avgjørende er om virkningen faktisk var formålet med arrangementet, ikke om den er velkommen. Usikkerhet om utfallet gjør heller ikke en virkning latent.",
    },
    {
      question: "Et bibliotek innfører lengre åpningstider for at flere skal få lånt bøker. Etter en stund viser det seg at lokalet er blitt et fast oppholdssted for folk som ellers ville sittet alene hjemme. Hva er den latente funksjonen?",
      options: ["At biblioteket demper ensomhet, siden dette verken var målet eller noe man regnet med", "At flere låner bøker, siden dette er den virkningen ordningen faktisk hadde i praksis", "At biblioteket får høyere besøkstall, siden dette kan telles i statistikken", "At kommunen får bedre omdømme, siden lengre åpningstider ble omtalt som et framskritt"],
      explanation: "Riktig svar er at dempingen av ensomhet er den latente funksjonen, fordi den er utilsiktet og ikke erkjent på forhånd. Den nære fella er utlånstallene; det er en reell virkning, men den var nettopp formålet med tiltaket og er derfor manifest. Latent og manifest skilles på hva deltakerne har som mål og er klar over, ikke på hvor viktig virkningen er.",
    },
    {
      question: "En skole innfører obligatorisk skolefrokost for å bedre konsentrasjonen i første time. Elevene begynner samtidig å møte hverandre på tvers av klassene, slik at færre står alene i friminuttene. Hvordan skal dette klassifiseres?",
      options: ["Bedre konsentrasjon er manifest, og de nye vennskapene på tvers er latent funksjon", "Bedre konsentrasjon er latent, og de nye vennskapene på tvers er manifest funksjon", "Begge er manifeste, siden skolen alltid har som overordnet oppgave å skape trivsel", "Begge er latente, siden verken konsentrasjon eller vennskap kan måles helt presist"],
      explanation: "Riktig svar er at konsentrasjonen er den uttalte hensikten og dermed manifest, mens vennskapene oppstår som en utilsiktet virkning og dermed er latente. Den nære fella er å vise til skolens overordnede trivselsoppdrag og kalle begge manifeste; en generell målsetting for skolen gjør ikke enhver virkning av et enkelttiltak til noe tilsiktet. Målbarhet har heller ikke noe med skillet å gjøre.",
    },
    {
      question: "Hvem står bak skillet mellom manifeste og latente funksjoner?",
      options: ["Merton, som bruker det til å skille tilsiktede fra utilsiktede virkninger", "Parsons, som bruker det til å skille de fire funksjonskravene", "Durkheim, som bruker det til å skille to former for solidaritet i samfunn", "Tufte, som bruker det til å skille forklaringstyper fra hverandre i faget"],
      explanation: "Riktig svar er at skillet er Mertons. De nære fellene er avsendere som eier tilgrensende begreper: Parsons står bak AGIL, Durkheim bak solidaritetsformene, og Tufte bak oversikten over forklaringstyper. Merton er også opphavet til dysfunksjon og til kritikken av antakelsen om funksjonell enhet.",
    },
    {
      question: "Hva menes med «dysfunksjon»?",
      options: ["En virkning som svekker systemet eller en del av det den rammer", "En ordning som ikke lenger har noen virkning overhodet", "En virkning som deltakerne selv misliker og gjerne skulle vært foruten", "En feil i analysen der forskeren har oversett hvem virkningen gjelder for"],
      explanation: "Riktig svar er at dysfunksjon er en virkning som svekker systemet eller en del av det. Den nære fella er å definere begrepet ut fra hva deltakerne misliker; dysfunksjon gjelder virkningen for systemet, og en virkning kan være dysfunksjonell selv om ingen deltaker klager. En ordning uten virkning har derimot rett og slett ingen funksjon, hverken positiv eller negativ.",
    },
    {
      question: "Hva skiller en dysfunksjon fra det at en ordning ikke har noen funksjon i det hele tatt?",
      options: ["Dysfunksjon er en virkning som trekker i negativ retning, mens fravær av funksjon er ingen virkning", "Dysfunksjon er en virkning ingen har villet, mens fravær av funksjon er en virkning noen har villet", "Dysfunksjon er en virkning som rammer én gruppe, mens fravær av funksjon rammer hele samfunnet", "Dysfunksjon er en virkning forskeren har oversett, mens fravær av funksjon er noe forskeren påviser"],
      explanation: "Riktig svar er at dysfunksjon forutsetter at det finnes en virkning, og at denne virkningen svekker systemet. Den nære fella er å knytte dysfunksjon til det utilsiktede; både funksjoner og dysfunksjoner kan være tilsiktede eller utilsiktede, så det er retningen på virkningen som avgjør. Skillet manifest mot latent er en annen akse enn skillet funksjon mot dysfunksjon.",
    },
    {
      question: "Hva er antakelsen om «funksjonell enhet» som Merton vender seg mot?",
      options: ["At alt i et samfunn virker sammen slik at hver del bidrar til helheten", "At hver enkelt del av et samfunn kan studeres helt uavhengig av de andre", "At samfunnet er en enhet fordi alle medlemmene deler de samme verdiene", "At bare de delene som er innført bevisst kan sies å ha noen funksjon"],
      explanation: "Riktig svar er at antakelsen sier at alle deler av et samfunn virker sammen til beste for helheten. Den nære fella er å lese uttrykket som en påstand om felles verdier; det ville vært en påstand om verdifellesskap, mens funksjonell enhet gjelder samspillet mellom delene og virkningene deres. Merton avviser at et slikt samspill kan forutsettes uten videre.",
    },
    {
      question: "Hva er Mertons innvending mot antakelsen om funksjonell enhet?",
      options: ["At det samme trekket kan være funksjonelt for én gruppe og dysfunksjonelt for en annen", "At bare de færreste samfunnsordninger i praksis har målbare virkninger for helheten", "At funksjoner alltid endrer seg over tid og derfor ikke kan fastslås én gang for alle", "At forskere som regel er uenige om hvilke deler av et samfunn som utgjør en helhet"],
      explanation: "Riktig svar er at samme ordning kan virke styrkende for én gruppe og svekkende for en annen, slik at man alltid må spørre funksjonelt for hvem. Den nære fella er å gjøre innvendingen til et rent målingsproblem; Mertons poeng er teoretisk, ikke praktisk, siden det gjelder hvilke spørsmål analysen må stille. Innvendingen åpner nettopp for at dysfunksjoner finnes side om side med funksjoner.",
    },
    {
      question: "Hvem eier begrepene «dysfunksjon» og «funksjonell enhet» i denne sammenhengen?",
      options: ["Merton, som bruker dem til å kreve at man spør funksjonelt for hvem", "Parsons, som bruker dem til å bygge opp de fire funksjonskravene", "Solli, som bruker dem til å ordne perspektivene på sosial orden i et kart", "Balsvik, som bruker dem til å beskrive antakelsene om rasjonell handling"],
      explanation: "Riktig svar er at både dysfunksjon og kritikken av funksjonell enhet er Mertons bidrag. Den nære fella er Parsons, som hører til samme tradisjon og eier AGIL, men som ikke er opphav til disse to begrepene. Solli og Balsvik eier henholdsvis kartet over ordensperspektivene og menneskemodell-begrepet.",
    },
    {
      question: "Hvordan plasserer funksjonsforklaringen seg blant forklaringstypene slik Tufte stiller dem opp?",
      options: ["Som en egen type der man forklarer noe ved virkningen det har, ikke ved det som gikk forut", "Som en variant av årsaksforklaringen der virkningen kommer forut for det som skal forklares", "Som en variant av hensiktsforklaringen der målet til den handlende gjør arbeidet i forklaringen", "Som en beskrivelse uten forklaringskraft, siden virkninger bare kan registreres og ikke forklare"],
      explanation: "Riktig svar er at funksjonsforklaringen er en egen forklaringstype der det som skal forklares, forklares ved virkningen sin. Den nære fella er å slå den sammen med hensiktsforklaringen; de ligner fordi begge peker framover mot et utfall, men hensiktsforklaringen krever en aktør som har utfallet som mål, og det krever ikke funksjonsforklaringen. Skillet mellom virkning og hensikt er derfor avgjørende også her.",
    },
    {
      question: "Hva er hovedforskjellen mellom en funksjonsforklaring og en vanlig årsaksforklaring?",
      options: ["Årsaksforklaringen peker bakover på det som utløste, funksjonsforklaringen peker framover på virkningen", "Årsaksforklaringen peker framover på virkningen, funksjonsforklaringen peker bakover på det som utløste", "Årsaksforklaringen gjelder enkeltpersoner, mens funksjonsforklaringen bare gjelder store samfunn", "Årsaksforklaringen bygger på tall og målinger, mens funksjonsforklaringen bygger på tolkning alene"],
      explanation: "Riktig svar er at årsaksforklaringen viser til noe forut for det som skal forklares, mens funksjonsforklaringen viser til virkningen ordningen har. Den nære fella er å knytte skillet til nivå, altså enkeltperson mot samfunn; begge forklaringstypene kan brukes på begge nivåer. Det er retningen i forklaringen som er avgjørende, ikke hvor stort det studerte er.",
    },
    {
      question: "Hva består innvendingen om at funksjonalismen lett blir sirkulær i?",
      options: ["At man slutter fra at noe har en virkning for helheten til at det derfor må være slik", "At man forklarer én ordning med en annen ordning som i sin tur forklares med den første", "At man bruker de samme dataene både til å måle årsaken og til å måle virkningen av den", "At man definerer helheten så vidt at enhver ordning kan sies å høre til i den på et vis"],
      explanation: "Riktig svar er at sirkulariteten oppstår når påvisningen av en virkning brukes som forklaring på at ordningen finnes og består. Da har man ikke vist noen mekanisme som faktisk holder ordningen på plass. Den nære fella er en generell målefeil om samme data brukt to steder; innvendingen her gjelder selve slutningen fra virkning til nødvendighet, ikke datagrunnlaget.",
    },
    {
      question: "Hvorfor sier kritikerne at funksjonalismen lett blir konserverende?",
      options: ["Fordi bestående ordninger framstår som nødvendige når de forklares med nytten for helheten", "Fordi tilnærmingen bare kan brukes på samfunn som har vært stabile over svært lang tid", "Fordi den krever at forskeren tar stilling til om ordningene i samfunnet bør bevares", "Fordi den ser bort fra alle virkninger som ikke lar seg tallfeste i en undersøkelse"],
      explanation: "Riktig svar er at ordninger lett kommer til å framstå som nødvendige når de begrunnes med at de tjener helheten, og dermed blir vanskeligere å kritisere. Den nære fella er å lese innvendingen som et krav om at forskeren skal ta normativt standpunkt; kritikken går tvert imot på at framstillingen får en normativ slagside uten å ville det. Mertons krav om å spørre funksjonelt for hvem er nettopp et motmiddel mot dette.",
    },
  ],
  'svexfac03-3-4': [
    {
      question: "Hva er kjernepåstanden i konfliktperspektivet slik Solli framstiller det?",
      options: ["Orden består fordi noen har makt til å opprettholde den ordningen som gjelder", "Orden består fordi medlemmene deler verdier de har gjort til sine egne gjennom sosialiseringen", "Orden består fordi enkeltaktører gjør bytter som lønner seg for dem hver for seg", "Orden består fordi partene bygger en felles forståelse i møtet ansikt til ansikt"],
      explanation: "Riktig svar er at konfliktperspektivet forklarer orden med makt: noen er i stand til å holde ordningen på plass. Den nære fella er integrasjonsperspektivets svar om delte verdier; begge perspektivene er strukturorienterte, men de peker på helt ulike mekanismer bak samordningen. De to øvrige svarene hører til handlings- og bytteperspektivet og til interaksjonsperspektivet.",
    },
    {
      question: "Hvorfor er det nyttig at sosial orden ikke betyr harmoni når man arbeider med konfliktperspektivet?",
      options: ["Fordi et samfunn preget av undertrykkelse da fortsatt kan analyseres som en orden", "Fordi de undertrykte da regnes som tilhengere av ordningen på linje med dem som tjener på den", "Fordi analysen da kan si noe om hvorvidt en samfunnsordning er rettferdig eller ikke", "Fordi striden mellom gruppene da må ha stilnet før man kan snakke om orden i det hele tatt"],
      explanation: "Riktig svar er at et samfunn med undertrykkelse og strid fortsatt er samordnet og forutsigbart, og dermed en orden i faglig forstand. Den nære fella er å tro at begrepet krever at striden har stilnet; det ville stengt konfliktperspektivet ute fra ordensdebatten helt. Begrepet sier heller ingenting om ordningen er rettferdig, siden det er beskrivende og ikke vurderende.",
    },
    {
      question: "Hva menes med «ideologi» når begrepet brukes som en ordensmekanisme?",
      options: ["At de underordnede oppfatter ordningen som naturlig og dermed selv bidrar til å holde den ved like", "At et politisk parti har et gjennomarbeidet program for hvordan samfunnet bør styres framover", "At myndighetene sprer bestemte budskap gjennom mediene for å påvirke opinionen i en sak", "At forskeren legger sine egne politiske oppfatninger til grunn når hun tolker et datamateriale fra et felt"],
      explanation: "Riktig svar er at ideologi virker ved at de underordnede selv ser den bestående ordningen som naturlig, rettferdig eller uunngåelig. Den nære fella er å redusere ideologi til et politisk program; et program er et meningssett, mens poenget her er hvordan forestillingene virker inn i selve opprettholdelsen av ordenen. Ideologi er altså en mekanisme på linje med tvang, ikke bare et sett standpunkter.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom å forstå ideologi som et meningssett og som en ordensmekanisme?",
      options: ["Som mekanisme forklarer ideologien hvorfor ordningen består, ikke bare hva noen mener om den", "Som mekanisme viser ideologien hvilke partier folk stemmer på, ikke hva de tenker om samfunnet", "Som mekanisme gjelder ideologien bare for dem med makt og ikke for de underordnede, som ikke deler forestillingene", "Som mekanisme handler ideologien om hva som er sant, ikke om hva folk tilfeldigvis tror er sant"],
      explanation: "Riktig svar er at ideologien som mekanisme inngår i forklaringen på at ordenen holder, fordi den demper motstanden fra dem som taper på den. Den nære fella er å begrense ideologien til dem som har makten; kraften ligger nettopp i at også de underordnede deler forestillingene. Et meningssett alene forklarer ikke noe, det er virkningen av forestillingene som gjør arbeidet.",
    },
    {
      question: "I en bransje er det vanlig å si at «slik har det alltid vært» om at de nyansatte får de tyngste vaktene. De nyansatte sier det samme selv. Hva illustrerer dette?",
      options: ["Ideologi som ordensmekanisme, siden de som taper på ordningen selv ser den som naturlig", "En manifest funksjon, siden fordelingen av vakter er en uttalt og erkjent hensikt hos ledelsen", "Prekontraktuell solidaritet, siden ordningen bygger på en tillit ingen har avtalt seg fram til", "En aktiv menneskemodell, siden de nyansatte har vurdert ordningen opp mot alternativene og valgt å godta den"],
      explanation: "Riktig svar er at dette er ideologi som ordensmekanisme: de som bærer kostnaden ved ordningen oppfatter den selv som selvsagt, og motstanden uteblir. Den nære fella er å kalle det en aktiv menneskemodell fordi de nyansatte «godtar» ordningen; en aktiv modell krever at handlingen forklares med en reell avveining, mens poenget her er at alternativet knapt framstår som tenkelig. Ideologi virker altså uten at noen behøver å true med sanksjoner.",
    },
    {
      question: "Hva bestemmer hvilken «klasse» en person tilhører hos Marx?",
      options: ["Forholdet personen har til produksjonsmidlene, altså en økonomisk plassering", "Anseelsen personen nyter i samfunnet, målt gjennom yrke og levemåte", "Utdanningen personen har fullført og hvilke stillinger den kan gi adgang til i arbeidslivet", "Partitilhørigheten personen har og hvilken politisk innflytelse den gir"],
      explanation: "Riktig svar er at klasse hos Marx bestemmes av forholdet til produksjonsmidlene. Den nære fella er anseelse og levemåte, som er Webers standsbegrep og altså et annet begrep. Klasse er dermed en objektiv økonomisk posisjon og ikke et uttrykk for hvordan omgivelsene rangerer personen.",
    },
    {
      question: "Hvorfor er det upresist å sette likhetstegn mellom klasse hos Marx og inntektsnivå?",
      options: ["Fordi klasse gjelder forholdet til produksjonsmidlene, og to med lik inntekt kan stå ulikt der", "Fordi klasse gjelder anseelsen i samfunnet, og to med lik inntekt kan ha ulik anseelse hos folk", "Fordi klasse gjelder den politiske makten, og to med lik inntekt kan ha ulik innflytelse i partier", "Fordi klasse gjelder utdanningsnivået, og to med lik inntekt kan ha svært ulik utdanning bak seg"],
      explanation: "Riktig svar er at klasse handler om posisjon i produksjonen, ikke om hvor mye man tjener; en høyt lønnet ansatt og en eier med lav inntekt står ulikt selv om lønnsslippen skulle ligne. Den nære fella er anseelse, som hører til Webers standsbegrep og ikke til Marx' klassebegrep. Inntekt kan følge av klasseposisjonen, men den er ikke det som definerer den.",
    },
    {
      question: "Hva bestemmer en persons «stand» hos Weber?",
      options: ["Den sosiale anseelsen og livsstilen som omgivelsene knytter til personen", "Den plassen personen har i produksjonen og forholdet til produksjonsmidlene", "Den formelle stillingen personen har i et politisk parti eller i forvaltningen", "Den formuen personen rår over og inntekten den kaster av seg årlig, målt i kroner og ikke i anseelse"],
      explanation: "Riktig svar er at stand bestemmes av sosial anseelse og livsstil. Den nære fella er forholdet til produksjonsmidlene, som er Marx' klassebegrep; Weber holder de to fra hverandre nettopp fordi anseelse ikke alltid følger økonomisk posisjon. Stand er dermed en sosial rangering, ikke en økonomisk plassering.",
    },
    {
      question: "Hva er hovedforskjellen mellom klasse hos Marx og stand hos Weber?",
      options: ["Klasse er en økonomisk plassering, mens stand er en plassering etter anseelse og livsstil", "Klasse er en plassering etter anseelse, mens stand er en økonomisk plassering i produksjonen", "Klasse gjelder store grupper i samfunnet, mens stand bare gjelder enkeltpersoners egen bane", "Klasse er noe den enkelte selv velger, mens stand er noe den enkelte blir tildelt ved fødselen"],
      explanation: "Riktig svar er at klasse er en økonomisk plassering bestemt av forholdet til produksjonsmidlene, mens stand er en rangering etter anseelse og livsstil. Den nære fella bytter om på innholdet i de to begrepene, som er den vanligste forvekslingen her. Begge begrepene gjelder grupper, ikke bare enkeltpersoners egen bane.",
    },
    {
      question: "Hva er forholdet mellom klasse og stand i Webers framstilling?",
      options: ["De kan falle sammen, men de behøver ikke gjøre det, siden de bygger på ulike kriterier", "De faller alltid sammen, siden økonomisk posisjon på sikt bestemmer anseelsen i samfunnet", "De utelukker hverandre, siden en person enten plasseres etter økonomi eller etter anseelse", "De er to navn på det samme, og Weber bruker dem om hverandre i sin egen framstilling uten å skille kriteriene"],
      explanation: "Riktig svar er at de to kan falle sammen, men ikke behøver det, fordi de hviler på ulike kriterier. Den nære fella er at økonomisk posisjon alltid trekker anseelsen etter seg; en nyrik forretningsdrivende kan mangle anseelse, og en fattig embetsslekt kan ha den i behold. Nettopp derfor trenger Weber to begreper der Marx klarte seg med ett.",
    },
    {
      question: "En håndverksfamilie med beskjeden inntekt nyter stor respekt i bygda på grunn av lang fartstid og et rykte for solid arbeid. Hvordan bør dette beskrives?",
      options: ["Høy stand og lav klasseposisjon, siden anseelsen ikke følger av forholdet til produksjonsmidlene", "Høy klasseposisjon og lav stand, siden håndverk gir eierskap til viktige produksjonsmidler", "Både høy stand og høy klasseposisjon, siden respekt over tid til slutt gir økonomisk styrke", "Verken stand eller klasse, siden begge begrepene bare kan brukes om store grupper i et samfunn"],
      explanation: "Riktig svar er at familien har høy stand og samtidig en beskjeden økonomisk posisjon, noe som viser at de to dimensjonene kan trekke i hver sin retning. Den nære fella er å anta at respekt over tid gir økonomisk styrke; det kan skje, men da har man forutsatt nettopp den sammenhengen Weber vil holde åpen. Begrepene lar seg fint bruke på en enkelt familie, siden de beskriver posisjoner.",
    },
    {
      question: "Hvordan utvider Weber bildet Marx tegner av makt i samfunnet?",
      options: ["Ved å skille mellom økonomisk klasse, sosial stand og politisk makt gjennom partier", "Ved å vise at klasse er den eneste maktdimensjonen som virkelig betyr noe på sikt", "Ved å erstatte klassebegrepet med et begrep om anseelse som gjelder alle samfunn", "Ved å hevde at makt bare finnes der noen kan bruke fysisk tvang mot en annen part i samfunnet"],
      explanation: "Riktig svar er at Weber opererer med flere maktdimensjoner: økonomisk klasse, sosial stand og politisk makt organisert gjennom partier. Den nære fella er å tro at Weber erstatter klassebegrepet; han beholder det og legger til de andre dimensjonene ved siden av. Poenget er at makt kan hentes fra flere kilder samtidig.",
    },
    {
      question: "Hva er partienes plass i Webers maktbilde?",
      options: ["De er organiserte forsøk på å skaffe seg politisk makt, uavhengig av klasse og stand", "De er uttrykk for stand, siden medlemmene deler livsstil og anseelse med hverandre", "De er uttrykk for klasse, siden partitilslutning alltid følger av økonomisk posisjon", "De er uten betydning for maktanalysen, siden makt hos Weber er rent økonomisk"],
      explanation: "Riktig svar er at partier er organiserte forsøk på å vinne politisk makt, og at de utgjør en egen dimensjon ved siden av klasse og stand. Den nære fella er å utlede partitilslutning direkte av klasseposisjonen; det ville føre den politiske dimensjonen tilbake til den økonomiske og fjerne selvstendigheten Weber gir den. Makt hos Weber er nettopp ikke et rent økonomisk forhold.",
    },
    {
      question: "Hva menes med at Weber opptrer i to roller i dette stoffet?",
      options: ["Han plasseres som teoretiker under konfliktperspektivet, mens handlingstypene hans hører til handlings- og bytteperspektivet", "Han plasseres som teoretiker under integrasjonsperspektivet, mens maktbegrepet hans hører til konfliktperspektivet", "Han plasseres som teoretiker under interaksjonsperspektivet, mens standsbegrepet hans hører hjemme i integrasjonsperspektivet", "Han plasseres som teoretiker under handlings- og bytteperspektivet, mens klassebegrepet hans hører til integrasjon"],
      explanation: "Riktig svar er at Weber som teoretiker hører hjemme under konfliktperspektivet, mens skillet hans mellom formålsrasjonell og verdirasjonell handling analytisk hører til handlings- og bytteperspektivet. Fella er å plassere ham ett sted og la alt han skriver følge med dit. En og samme tenker kan altså bidra på tvers av perspektivene, og det er bidraget som avgjør plasseringen i det enkelte tilfellet.",
    },
    {
      question: "Hvor hører Webers skille mellom formålsrasjonell og verdirasjonell handling analytisk hjemme?",
      options: ["I handlings- og bytteperspektivet, siden det gjelder hvordan aktørens handling begrunnes", "I konfliktperspektivet, siden Weber som teoretiker plasseres der sammen med Marx", "I integrasjonsperspektivet, siden verdirasjonell handling viser til verdier i samfunnet", "I interaksjonsperspektivet, siden begge handlingstypene forutsetter et møte med andre"],
      explanation: "Riktig svar er at handlingstypene hører til handlings- og bytteperspektivet, fordi de gjelder hvordan den enkelte aktørens handling er begrunnet. Den nære fella er å la Webers plassering som teoretiker under konfliktperspektivet trekke handlingstypene med seg dit. En annen nær felle er å knytte verdirasjonalitet til integrasjonsperspektivet fordi ordet «verdi» inngår; her er verdien aktørens egen begrunnelse, ikke en delt norm i strukturen.",
    },
    {
      question: "Hva kjennetegner formålsrasjonell handling?",
      options: ["Aktøren velger de midlene som mest effektivt fører fram til det målet hun har satt seg", "Aktøren handler ut fra en overbevisning om at handlingen er riktig, uansett hva den koster", "Aktøren handler slik hun alltid har gjort, uten å vurdere alternativene fra gang til gang", "Aktøren handler ut fra følelsen som melder seg i situasjonen der og da uten videre omtanke"],
      explanation: "Riktig svar er at formålsrasjonell handling består i å velge de mest effektive midlene mot et gitt mål. Den nære fella er verdirasjonell handling, der aktøren følger en overbevisning uavhengig av hva det koster; forskjellen ligger i om beregningen av middel mot mål er det som styrer. Begge typene forutsetter en aktiv menneskemodell.",
    },
    {
      question: "Hva kjennetegner verdirasjonell handling?",
      options: ["Aktøren handler fordi handlingen i seg selv er riktig, uansett hva utfallet måtte bli", "Aktøren handler fordi hun har regnet ut at handlingen gir det beste utfallet for henne", "Aktøren handler fordi omgivelsene forventer det og sanksjonerer dem som lar det være", "Aktøren handler fordi hun har lært handlingen inn og aldri har vurdert den siden da"],
      explanation: "Riktig svar er at verdirasjonell handling begrunnes med at handlingen i seg selv er riktig, uavhengig av utfallet. Den nære fella er den innlærte vanen; den ser lik ut utenfra, men da forklares handlingen med noe under aktørens kontroll og hviler dermed på en passiv menneskemodell. Verdirasjonalitet forutsetter derimot at aktøren står inne for begrunnelsen sin.",
    },
    {
      question: "Hvordan viderefører kritisk teori konfliktperspektivet?",
      options: ["Ved å undersøke hvordan herredømme også holdes ved like gjennom kultur og forestillinger", "Ved å vise at maktforholdene i samfunnet i hovedsak har mistet betydning i vår egen tid", "Ved å flytte oppmerksomheten fra strukturene og over til det enkelte møtet", "Ved å regne alle konflikter tilbake til enkeltaktørers beregninger av hva som lønner seg"],
      explanation: "Riktig svar er at kritisk teori følger opp konfliktperspektivet ved å undersøke hvordan herredømme opprettholdes også gjennom kultur, forestillinger og det som framstår som selvsagt. Den nære fella er å tro at videreføringen består i å flytte blikket til det konkrete møtet; det ville vært en overgang til interaksjonsperspektivet. Tradisjonen tar altså ideologimekanismen på alvor i stedet for å forlate den.",
    },
    {
      question: "Hvor plasseres konfliktperspektivet langs de tre dimensjonene?",
      options: ["Strukturorientert, konfliktorientert, og med en passiv menneskemodell i bunnen", "Strukturorientert, harmoniorientert, og med en passiv menneskemodell som grunnlag", "Aktørorientert, konfliktorientert, og med en aktiv menneskemodell i bunnen", "Aktørorientert, harmoniorientert, og med en aktiv menneskemodell i bunnen"],
      explanation: "Riktig svar er at konfliktperspektivet er strukturorientert og konfliktorientert og hviler på en passiv menneskemodell. Den nære fella er å kombinere konfliktorientering med aktørorientering; det virker rimelig fordi kamp forutsetter noen som kjemper, men forklaringen fører handlingen tilbake til posisjonen i strukturen. Plasseringen skiller seg fra integrasjonsperspektivet bare på dimensjonen konflikt mot harmoni.",
    },
    {
      question: "Hvorfor sies konfliktperspektivet å hvile på en passiv menneskemodell når det handler om kamp og makt?",
      options: ["Fordi handlingen forklares av den posisjonen aktøren har, ikke av avveiningen hun gjør", "Fordi de underordnede i dette perspektivet antas å forholde seg rolige og ikke handle", "Fordi perspektivet regner med at aktørene sjelden er klar over sine egne interesser", "Fordi perspektivet handler om store grupper, og store grupper handler saktere enn enkeltpersoner"],
      explanation: "Riktig svar er at handlingen tilskrives aktørens plass i strukturen framfor hennes egen vurdering, og det er nettopp det som gjør modellen passiv. Den nære fella er å lese passiv som at folk ikke handler; både over- og underordnede kan handle mye, men handlingen forklares utenfra. Menneskemodellen leses altså av forklaringsmåten, ikke av aktivitetsnivået.",
    },
    {
      question: "Hva innebærer det at konfliktperspektivet og integrasjonsperspektivet kan gi hver sin forsvarlige lesning av samme sak?",
      options: ["At begge kan gi holdbare analyser av samme materiale, og at valget mellom dem må begrunnes", "At begge til slutt vil komme fram til det samme svaret dersom analysen gjøres grundig nok", "At det ikke spiller noen rolle hvilket perspektiv man velger, siden begge er like brukbare", "At man bør legge begge lesningene oppå hverandre for å få et mest mulig fullstendig bilde"],
      explanation: "Riktig svar er at samme sak kan leses forsvarlig gjennom begge perspektivene, og at kravet derfor er å velge ett og begrunne valget. Den nære fella er å lese dette som at valget er likegyldig; at flere lesninger er mulige gjør begrunnelsen viktigere, ikke overflødig. Å legge alle perspektivene oppå hverandre gir heller ingen analyse, bare en oppramsing.",
    },
    {
      question: "Hva er kravet når en oppgave ber deg bruke perspektivene på et konkret tilfelle?",
      options: ["Å velge ett perspektiv, begrunne valget, og vise hva perspektivet får fram i akkurat dette tilfellet", "Å bruke alle fire perspektivene etter tur, slik at ingen sider ved tilfellet blir stående uomtalt", "Å velge det perspektivet som gir det mest positive bildet av dem som er berørt av saken", "Å velge perspektiv etter hvilke data som finnes, siden analysen ellers ikke kan etterprøves"],
      explanation: "Riktig svar er at man velger ett perspektiv, begrunner valget og viser hva perspektivet får fram. Den nære fella er å legge alle fire på lag; det ser grundig ut, men et perspektiv er et valg om hva man ser etter, og fire samtidige valg gir ingen skarp analyse. Begrunnelsen for valget er selve den faglige prestasjonen.",
    },
    {
      question: "Et kollektiv har en fast ordning der den som flyttet inn sist alltid tar oppvasken. Hvordan ser konfliktperspektivet på ordningen?",
      options: ["Som en ordning båret av at de etablerte har makt til å holde den ved like overfor de nye", "Som en ordning båret av at alle i kollektivet deler en verdi om ansiennitet", "Som en ordning båret av at hver enkelt har regnet ut at oppvask er den billigste plikten", "Som en ordning båret av at partene forhandler om rollene sine hver gang de møtes"],
      explanation: "Riktig svar er at konfliktperspektivet leser ordningen som et maktforhold mellom etablerte og nye beboere. Den nære fella er lesningen om en delt verdi om ansiennitet; det er en fullt forsvarlig integrasjonslesning av samme tilfelle, men det er ikke konfliktperspektivets lesning. Nettopp derfor må man si hvilket perspektiv man bruker og hvorfor.",
    },
    {
      question: "Hvem står bak plasseringen av konfliktperspektivet som ett av fire perspektiver på sosial orden?",
      options: ["Solli, som setter perspektivet inn i et kart over ulike svar på ordensspørsmålet", "Marx, som utviklet klassebegrepet og analysen av forholdet til produksjonsmidlene", "Weber, som utvidet maktanalysen med stand og med politisk makt gjennom partier", "Aakvaag, som beskriver menneskesynet hos klassikerne og bruken av idealtypen"],
      explanation: "Riktig svar er at selve firedelingen med konfliktperspektivet som ett av perspektivene er Sollis. Den nære fella er Marx, som er den sentrale teoretikeren innenfor perspektivet, men som ikke er opphav til kartet det inngår i. Skillet mellom en teoretiker i et perspektiv og avsenderen bak inndelingen er verdt å holde klart.",
    },
  ],
  'svexfac03-3-5': [
    {
      question: "Hva er kjernen i handlings- og bytteperspektivets forklaring på sosial orden?",
      options: ["At orden er et utilsiktet resultat av at mange aktører hver for seg forfølger sine egne mål", "At orden er et planlagt resultat av at myndighetene fastsetter felles mål for alle aktørene", "At orden er et direkte resultat av at aktørene deler de samme grunnleggende verdiene", "At orden er et midlertidig resultat av at én gruppe holder de andre nede med makt"],
      explanation: "Riktig svar er at ordenen oppstår som et utilsiktet resultat av at mange enkeltaktører forfølger egne mål. Fella er å tro at orden må være villet av noen, enten gjennom en plan eller gjennom felles verdier. Forklaringen med delte verdier ligger nær sannheten om samfunn generelt, men den hører hjemme i integrasjonsperspektivet og er nettopp det handlings- og bytteperspektivet klarer seg uten.",
    },
    {
      question: "Hvorfor bruker handlings- og bytteperspektivet forutsetningen om en rasjonell aktør?",
      options: ["Fordi forenklingen gir presise forutsigelser om handling, ikke fordi mennesker alltid regner nøye", "Fordi forskningen har vist at mennesker faktisk regner nøye gjennom alle valgene sine", "Fordi mennesker som ikke evner å regne, ikke kan regnes som aktører i samfunnsforskningen", "Fordi forutsetningen er et moralsk ideal som viser hvordan folk burde treffe de valgene de står overfor"],
      explanation: "Riktig svar er at rasjonalitetsantakelsen er en analytisk forenkling som gjør det mulig å utlede presise forutsigelser. Den nærmeste fella er å lese antakelsen som en påstand om virkeligheten, altså at mennesker faktisk kalkulerer i alle valg. Det er den ikke, og perspektivet blir ikke svekket av at folk ofte handler av vane.",
    },
    {
      question: "Hva er bytteteoriens forklaring på at et samhandlingsforhold varer over tid?",
      options: ["At begge parter kommer bedre ut av forholdet enn de ville gjort uten det", "At begge parter har lovet hverandre å holde ut i forholdet", "At den ene parten har makt til å tvinge den andre til å bli i det", "At partene har vokst opp med de samme verdiene og derfor liker hverandre"],
      explanation: "Riktig svar er at forholdet varer fordi begge parter er tjent med det. Distraktoren om makt og tvang ligger nær, for tvang finnes også i samfunnet, men da er det ikke lenger bytteteorien som forklarer at forholdet består. Bytteteorien forutsetter at begge parter kunne trukket seg og likevel velger å bli.",
    },
    {
      question: "Hva er det som skaper orden i gavebytte?",
      options: ["Forpliktelsen til å gjengjelde som gaven skaper hos mottakeren, og som binder partene sammen", "Verdien av selve gjenstanden som gis bort, målt i hva den ville kostet i et vanlig marked", "Den formelle avtalen partene inngår om hva som skal gis tilbake og når det skal skje", "Den gode følelsen giveren sitter igjen med etter å ha gitt noe bort uten motytelse"],
      explanation: "Riktig svar er at forpliktelsen til å gjengjelde er selve ordensmekanismen i gavebytte. Distraktoren om gjenstandens markedsverdi er nær, siden gaver ofte har en pris, men det er ikke prisen som binder partene sammen over tid. Poenget er at gaven etterlater en ubalanse som mottakeren forventes å rette opp senere.",
    },
    {
      question: "Hvorfor regnes gavebytte innenfor handlings- og bytteperspektivet, og ikke som et brudd med det?",
      options: ["Fordi gaven utløser en forpliktelse til gjengjeld, slik at det fortsatt handler om ytelse mot ytelse", "Fordi gaver alltid gis bort i et marked der prisen bestemmes av tilbud og etterspørsel", "Fordi den som gir bort en gave, gjør det uten å vente seg noen form for gjengjeld fra mottakeren senere", "Fordi gaver bare forekommer i samfunn som ikke har utviklet penger som byttemiddel ennå"],
      explanation: "Riktig svar er at gavebytte fortsatt er ytelse mot ytelse, bare med en motytelse som er uspesifisert i tid og innhold. Fella er å tro at gaven er uten forventning om gjengjeld; det er nettopp forventningen som gjør gavebytte til et byttefenomen. Gavebytte finnes dessuten i samfunn med penger, så framveksten av byttemidler avskaffer det ikke.",
    },
    {
      question: "Hva kjennetegner en gratispassasjer?",
      options: ["En aktør som nyter godt av et fellesgode uten selv å bidra til at godet blir skapt", "En aktør som bidrar mer til fellesgodet enn de andre og dermed bærer en urimelig kostnad", "En aktør som nekter å ta imot fellesgoder fordi han er uenig i måten de fordeles på", "En aktør som betaler for et fellesgode han selv aldri kommer til å få bruk for, uten selv å høste noe av det"],
      explanation: "Riktig svar er at en gratispassasjer høster fellesgodet uten å bidra til at det blir skapt. Den nærmeste distraktoren snur forholdet: den som bærer en uforholdsmessig stor del av kostnaden, er tvert imot den gratispassasjeren lever på. Begrepet peker på plasseringen i situasjonen, ikke på hvor mye aktøren får.",
    },
    {
      question: "Hva er riktig om begrepet gratispassasjer slik det brukes i faget?",
      options: ["Det er et analytisk begrep om en handlingssituasjon, ikke en moralsk dom over personen", "Det er et skjellsord forskere bruker om folk som oppfører seg uansvarlig i fellesskap, og innebærer en moralsk dom", "Det er en juridisk term for personer som er dømt for å ha unndratt seg skatt og avgifter", "Det er en betegnelse som bare kan brukes om aktører som handler helt bevisst og planmessig"],
      explanation: "Riktig svar er at gratispassasjer er et analytisk begrep om en bestemt handlingssituasjon. Distraktoren om bevisst og planmessig handling ligger nær, for gratispassasjerer kan godt kalkulere, men begrepet krever ikke det: situasjonen er den samme om aktøren aldri har tenkt over saken. At begrepet ikke er et skjellsord, er nettopp det som gjør det brukbart i analyse.",
    },
    {
      question: "Hva er mekanismen i allmenningens tragedie?",
      options: ["Hver bruker får gevinsten av egen bruk selv, mens kostnaden ved bruken deles på alle brukerne", "Hver bruker får kostnaden av egen bruk selv, mens gevinsten ved bruken deles på alle brukerne", "En sentral myndighet fordeler ressursen så skjevt at de fleste brukerne får altfor lite igjen", "Brukerne blir enige om en øvre grense, men ressursen tar likevel slutt av naturlige årsaker"],
      explanation: "Riktig svar er at gevinsten er privat mens kostnaden er delt, og at det derfor lønner seg for hver enkelt å bruke litt mer. Den nærmeste distraktoren snur mekanismen: hadde kostnaden vært privat og gevinsten delt, ville problemet vært for lite bruk, ikke for mye. Poenget er at ingen enkeltbruker merker mer enn en brøkdel av skaden han selv påfører.",
    },
    {
      question: "En liten innsjø brukes av femten hytteeiere som alle fisker der. Hver enkelt ser at én ekstra garnnatt gir ham mer fisk, mens nedgangen i bestanden merkes av alle. Hva illustrerer situasjonen?",
      options: ["Allmenningens tragedie, der en felles ressurs tappes fordi gevinsten er privat og kostnaden delt", "Gavebytte, der den enkelte gir fra seg noe for å skape en forpliktelse hos de andre brukerne", "Mikrosanksjoner, der brukerne holder hverandre i ørene med små reaksjoner i hverdagen", "Verdirasjonell handling, der brukerne fisker fordi selve fiskingen har verdi for dem i seg selv"],
      explanation: "Riktig svar er allmenningens tragedie, siden fisken er en felles ressurs der hver bruker høster gevinsten alene og deler kostnaden. Distraktoren om mikrosanksjoner er nær, for slike reaksjoner kan faktisk begrense uttaket i små miljøer, men eksempelet beskriver ingen reaksjon fra de andre. Uten en slik reaksjon står vi igjen med rene uttakskalkyler.",
    },
    {
      question: "Hva menes med at individuell rasjonalitet kan komme i konflikt med kollektiv rasjonalitet?",
      options: ["At det som lønner seg for hver enkelt aktør, kan gi et samlet utfall som alle taper på", "At det som lønner seg for fellesskapet, alltid vil lønne seg for hver enkelt aktør også", "At noen aktører er mer fornuftige enn andre og derfor bør bestemme over fellesskapet når valgene får følger for alle", "At kollektive beslutninger tar lengre tid enn de beslutningene enkeltpersoner tar alene"],
      explanation: "Riktig svar er at summen av individuelt fornuftige valg kan gi et utfall ingen av aktørene ønsket. Den nærmeste fella er å tro at det som er bra for fellesskapet automatisk er bra for hver enkelt; nettopp fordi det ikke stemmer, oppstår problemet. Begrepsparet handler om utfall, ikke om hvem som er klokest.",
    },
    {
      question: "På et lite kontorfellesskap er kaffekannen felles. Det tar to minutter å sette over ny kanne, og hver enkelt sparer tid på å ta siste kopp uten å gjøre det. Etter noen uker står kannen ofte tom. Hva beskriver dette best?",
      options: ["Individuell rasjonalitet som gir et utfall ingen ønsket, altså svikt i kollektiv rasjonalitet", "Verdirasjonell handling som gir et utfall alle ønsket, altså et uttrykk for felles verdier", "Inntrykksmestring der hver enkelt arbeider med å styre det bildet de andre får av dem", "Gavebytte der den som setter over kaffe, skaper en forpliktelse hos de andre til å gjengjelde"],
      explanation: "Riktig svar er at hver enkelt handler fornuftig for seg selv, mens resultatet er dårlig for alle. Gavebytte-distraktoren er nær, for den som faktisk setter over kanne kan skape en forventning om gjengjeld, men eksempelet handler om at ingen setter over. Det er fraværet av bidrag, ikke bidraget, som skal forklares her.",
    },
    {
      question: "Hva er mikrosanksjoner?",
      options: ["Små hverdagslige reaksjoner som et blikk eller en kommentar, som håndhever normer uten formell myndighet", "Små pengebøter som offentlige tilsynsmyndigheter skriver ut når mindre regelbrudd blir oppdaget", "Små innrømmelser partene gir hverandre underveis for å få en vanskelig forhandling i havn", "Små justeringer i lovverket som gjøres når en regel har vist seg vanskelig å håndheve i praksis over tid"],
      explanation: "Riktig svar er at mikrosanksjoner er små, hverdagslige reaksjoner som håndhever normer uten at noen har formell myndighet. Distraktoren om pengebøter ligger nær fordi begge deler er sanksjoner, men bøter forutsetter nettopp en myndighet med hjemmel til å ilegge dem. Det som gjør mikrosanksjonene interessante, er at de virker helt uten et slikt apparat.",
    },
    {
      question: "På lesesalen tar en student en telefonsamtale i høy stemme. Ingen sier noe, men flere ser opp og bort på ham, og han blir ikke spurt med på kaffepausen etterpå. Hva er dette et eksempel på?",
      options: ["Mikrosanksjoner, som håndhever en norm gjennom små reaksjoner uten at noen har formell myndighet", "Formell sanksjonering, der en institusjon straffer et regelbrudd gjennom fastsatte prosedyrer", "Gratispassasjerproblemet, der én aktør nyter godt av et fellesgode uten selv å bidra til det", "Gavebytte, der studentene skaper forpliktelser overfor hverandre gjennom å gi og gjengjelde"],
      explanation: "Riktig svar er mikrosanksjoner, siden blikkene og den uteblitte invitasjonen er reaksjoner uten formell hjemmel. Gratispassasjer-distraktoren ligger nær, for arbeidsroen på lesesalen er et fellesgode han bruker uten å bidra til, men spørsmålet gjelder hva de andre gjør, ikke hva han gjør. Reaksjonen er poenget her.",
    },
    {
      question: "Hvor plasseres handlings- og bytteperspektivet i kartet over perspektiver på sosial orden?",
      options: ["Som aktørorientert med en aktiv menneskemodell, der orden bygges opp av det aktørene gjør", "Som systemorientert med en passiv menneskemodell, der orden formes ovenfra av strukturer", "Som aktørorientert med en passiv menneskemodell, der aktørene følger innlærte rollemønstre", "Som systemorientert med en aktiv menneskemodell, der systemene selv velger sine egne mål"],
      explanation: "Riktig svar er aktørorientert med en aktiv menneskemodell. Den nærmeste fella kombinerer riktig aktørorientering med feil menneskemodell: en passiv modell ville gjort aktørene til utøvere av innlærte mønstre, og da forsvinner nettopp det utilsiktede resultatet av frie valg som perspektivet bygger på.",
    },
    {
      question: "Hvem står bak framstillingen av de fire perspektivene på sosial orden?",
      options: ["Solli, som ordner perspektivene i et kart over hvordan sosial orden kan forklares", "Balsvik, som ordner perspektivene etter hvor sterke rasjonalitetsantakelser de bygger på", "Malnes, som ordner perspektivene etter hvor stor rolle statsmakten spiller i hvert av dem", "Elster, som ordner perspektivene etter hvilke normtyper de legger til grunn for handling"],
      explanation: "Riktig svar er at det er Solli som setter opp kartet med de fire perspektivene. Balsvik-distraktoren er nær, for Balsvik drøfter faktisk rasjonalitetsantakelser inngående, men han organiserer ikke perspektivene på sosial orden. Å holde avsenderne fra hverandre er en del av det som prøves i dette kapittelet.",
    },
    {
      question: "Hos hvem møter leseren gratispassasjerproblemet og allmenningens tragedie?",
      options: ["Balsvik, som bruker dem til å vise hva rasjonalitetsantakelser gjør med forklaringen", "Solli, som bruker dem til å vise hvordan møter ansikt til ansikt skaper sosial orden", "Malnes, som bruker dem til å vise hvorfor en felles statsmakt er nødvendig for orden", "Elster, som bruker dem til å vise forskjellen mellom de tre normtypene"],
      explanation: "Riktig svar er at begge problemene framstilles hos Balsvik, i sammenheng med rasjonalitetsantakelser. Malnes-distraktoren ligger nær fordi begge problemene faktisk kan brukes som argument for en håndhevende myndighet, og Malnes drøfter slike spørsmål. Men selve framstillingen av gratispassasjer og allmenning er Balsviks.",
    },
    {
      question: "Hva kjennetegner formålsrasjonell handling slik Weber bruker begrepet?",
      options: ["Begrunnelsen ligger i utfallet handlingen skal oppnå, og midlene velges ut fra dette målet", "Begrunnelsen ligger i handlingen selv, og aktøren fortsetter selv om utfallet uteblir helt", "Begrunnelsen ligger i vanen, og aktøren handler slik fordi han alltid har gjort det slik", "Begrunnelsen ligger i følelsen, og aktøren handler ut fra sinnsstemningen der og da"],
      explanation: "Riktig svar er at formålsrasjonell handling begrunnes i det utfallet den skal oppnå. Den nærmeste distraktoren beskriver verdirasjonell handling, der begrunnelsen ligger i handlingen selv. Prøven på forskjellen er hva aktøren gjør når utfallet viser seg umulig: den formålsrasjonelle slutter, den verdirasjonelle fortsetter.",
    },
    {
      question: "Hva kjennetegner verdirasjonell handling?",
      options: ["At begrunnelsen ligger i handlingen selv, slik at aktøren fortsetter selv om utfallet uteblir", "At begrunnelsen ligger i utfallet, slik at aktøren slutter så snart målet viser seg uoppnåelig", "At begrunnelsen ligger i en vane, slik at aktøren gjentar handlingen og aldri stiller spørsmål ved hva han gjør", "At begrunnelsen ligger i en ordre, slik at aktøren handler fordi noen med makt har bestemt det"],
      explanation: "Riktig svar er at verdirasjonell handling begrunnes i handlingen selv, og derfor holdes ved lag også når den ikke fører fram. Distraktoren om utfall beskriver formålsrasjonell handling og er den nærmeste nabo. Legg merke til at verdirasjonell handling er rasjonell: aktøren har en grunn, den ligger bare et annet sted enn i resultatet.",
    },
    {
      question: "En student fortsetter å levere klage på en praksis hun mener er urimelig, også etter at hun har fått vite at klagen med sikkerhet ikke vil føre fram. Hvordan klassifiseres handlingen best?",
      options: ["Som verdirasjonell, fordi begrunnelsen ligger i handlingen selv og ikke i det den skal oppnå", "Som formålsrasjonell, fordi hun regner med at klagen vil gi det utfallet hun ønsker seg", "Som gavebytte, fordi hun gir noe fra seg og venter at lærestedet gjengjelder henne senere", "Som gratispassasjeratferd, fordi hun lar andre bære kostnaden ved å endre den praksisen"],
      explanation: "Riktig svar er verdirasjonell handling, siden hun fortsetter selv om utfallet er utelukket. Den formålsrasjonelle lesningen ligger nær og ville vært riktig hvis hun trodde klagen kunne vinne fram, men opplysningen om at den ikke kan det, stenger den tolkningen. Det er nettopp fortsettelsen uten utsikt til resultat som avgjør klassifiseringen.",
    },
    {
      question: "Hvordan henger det sammen at Webers handlingstyper hører hjemme i handlings- og bytteperspektivet, mens Weber selv plasseres under konfliktperspektivet?",
      options: ["Handlingstypene er et redskap for å analysere aktørers begrunnelser, mens Webers egen samfunnsanalyse dreier seg om makt og kamp", "Handlingstypene er et redskap for å analysere maktforhold, mens Webers egen samfunnsanalyse dreier seg om møter ansikt til ansikt", "Det beror på en feil i framstillingen, for både handlingstypene og Weber selv hører hjemme i konfliktperspektivet", "Det beror på en uklarhet, for både handlingstypene og Weber selv hører hjemme i handlings- og bytteperspektivet"],
      explanation: "Riktig svar er at handlingstypene er et analytisk redskap for aktørers begrunnelser, mens Webers bredere samfunnsanalyse er opptatt av makt og kamp om posisjoner. Distraktorene som kaller dette en feil, er nære, siden det virker inkonsekvent, men plasseringen er tilsiktet: et begrepsapparat og en teoretiker kan høre hjemme ulike steder i kartet.",
    },
    {
      question: "Hva ligger i at handlings- og bytteperspektivet bygger på en aktiv menneskemodell?",
      options: ["At mennesket ses som en handlende aktør som velger mellom muligheter ut fra egne mål", "At mennesket ses som formet av strukturer og roller det har lært seg", "At mennesket ses som styrt av følelser som skifter raskt fra situasjon til situasjon", "At mennesket ses som avhengig av at en myndighet sier hva som er tillatt"],
      explanation: "Riktig svar er at mennesket forstås som en velgende aktør med egne mål. Distraktoren om strukturer og innlærte roller beskriver en passiv menneskemodell, og den er den nærmeste nabo i kartet. Skillet handler ikke om hvor frie menneskene faktisk er, men om hvilken modell forklaringen bygger på.",
    },
    {
      question: "Hva skiller gavebytte fra et vanlig markedsbytte?",
      options: ["I gavebytte er motytelsen uspesifisert i tid og innhold, mens markedsbyttet gjør opp med en gang", "I gavebytte er motytelsen fastsatt i tid og innhold, mens markedsbyttet lar begge deler stå åpne", "I gavebytte finnes det ingen motytelse, mens markedsbyttet alltid har en motytelse", "I gavebytte kommer begge parter dårligere ut, mens begge parter i markedsbyttet kommer bedre ut"],
      explanation: "Riktig svar er at gavebyttets motytelse er uspesifisert i tid og innhold, mens markedsbyttet gjøres opp der og da. Distraktoren om at gavebytte mangler motytelse, ligger nær hverdagsforståelsen av en gave, men da faller hele ordensmekanismen bort. Forpliktelsen finnes, den er bare ubestemt.",
    },
    {
      question: "Et studentkor er avhengig av at noen bruker kvelder på å søke om støtte og booke lokaler. Alle medlemmene får glede av øvelsene uansett hvem som gjør arbeidet. Hvilket problem er dette et eksempel på?",
      options: ["Gratispassasjerproblemet, siden godet kommer alle til gode uansett hvem som bærer kostnaden", "Allmenningens tragedie, siden en begrenset naturressurs brukes opp av mange brukere samtidig", "Situasjonsdefinisjonens sammenbrudd, siden medlemmene forstår situasjonen på ulike måter", "Verdirasjonalitetens grense, siden medlemmene handler ut fra verdier og ikke ut fra utfall"],
      explanation: "Riktig svar er gratispassasjerproblemet: øvelsene er et fellesgode som ikke kan holdes tilbake fra dem som ikke bidrar. Allmenning-distraktoren ligger nær og bygger på samme rasjonalitetslogikk, men allmenningens tragedie handler om overforbruk av en ressurs som tar slutt, ikke om for lite bidrag til et gode som skal skapes.",
    },
    {
      question: "En forsker forklarer at et velfungerende bruktmarked har oppstått uten at noen har planlagt det, fordi kjøpere og selgere hver for seg har søkt en god handel. Hvilket perspektiv arbeider forskeren innenfor?",
      options: ["Handlings- og bytteperspektivet, der orden er et utilsiktet resultat av aktørenes egne valg", "Integrasjonsperspektivet, der orden hviler på verdier deltakerne har tatt opp i seg gjennom oppdragelsen", "Konfliktperspektivet, der orden hviler på at noen grupper har makt til å holde de andre nede", "Interaksjonsperspektivet, der orden hviler på hvordan deltakerne opptrer i konkrete møter og følger møtets egne regler"],
      explanation: "Riktig svar er handlings- og bytteperspektivet, siden forklaringen bygger på at hver aktør søker egen vinning og at ordenen ingen har villet, likevel oppstår. Interaksjonsperspektivet ligger nær, for handelen skjer jo i møter mellom mennesker, men forskeren forklarer ikke ved hjelp av møtets regler og roller. Han forklarer med kalkulerende valg.",
    },
  ],
  'svexfac03-3-6': [
    {
      question: "Hva er kjernen i interaksjonsperspektivets forklaring på sosial orden?",
      options: ["At orden produseres og reproduseres i konkrete møter mellom mennesker, ansikt til ansikt", "At orden produseres og opprettholdes av institusjoner som står over de enkelte møtene mellom folk", "At orden produseres av et felles verdisett som deltakerne har med seg inn i møtene lenge før de traff hverandre", "At orden produseres av byttene aktørene gjør når de beregner egen vinning i møtene"],
      explanation: "Riktig svar er at ordenen blir til i selve møtet mellom mennesker og holdes ved like ved at møtene gjentas. Distraktoren om beregning av vinning ligger nær, siden også den plasserer forklaringen hos aktørene, men den tilhører handlings- og bytteperspektivet. Interaksjonsperspektivet ser på møtets egne former og regler, ikke på kalkylen bak.",
    },
    {
      question: "Hvem er hovedreferansen når interaksjonsperspektivet presenteres, og hvem plasserer perspektivet inn i ordenskartet?",
      options: ["Goffman er hovedreferansen, og det er Solli som plasserer perspektivet inn i kartet", "Goffman er hovedreferansen, mens Balsvik står for plasseringen", "Hobbes er hovedreferansen, og det er Malnes som plasserer perspektivet inn i kartet", "Durkheim er hovedreferansen, og Elster plasserer perspektivet inn i kartet"],
      explanation: "Riktig svar er at Goffman er hovedreferansen for interaksjonsperspektivet, mens det er Solli som setter perspektivet inn i kartet over forklaringer på sosial orden. Den nærmeste fella bytter ut Solli med Balsvik; Balsvik skriver om rasjonalitetsantakelser og om Adam Smith, ikke om ordenskartet. Riktig tilskrivning er selve poenget her.",
    },
    {
      question: "Hva er hverdagsritualer i denne sammenhengen?",
      options: ["Små gjentatte former som hilsener og unnskyldninger, som gjør samhandlingen forutsigbar", "Høytidelige seremonier som markerer viktige overganger i livet, slik som bryllup og konfirmasjon", "Faste rutiner den enkelte gjør alene om morgenen for å komme i gang med dagen sin", "Religiøse handlinger som utføres i fellesskap for å bekrefte troen i en menighet"],
      explanation: "Riktig svar er at hverdagsritualer er de små, gjentatte formene som gjør samhandling forutsigbar. Distraktoren om seremonier ligger nær dagligtalens bruk av ordet ritual, men poenget i interaksjonsperspektivet er nettopp at de virksomme ritualene er upåfallende og hverdagslige. De må dessuten involvere flere, noe en privat morgenrutine ikke gjør.",
    },
    {
      question: "Hva er en situasjonsdefinisjon?",
      options: ["Deltakernes felles forståelse av hva som foregår og hvem de er for hverandre akkurat der", "Den enkelte deltakerens private oppfatning av hva som foregår, uavhengig av om de andre i møtet deler den eller ikke", "Forskerens beskrivelse av situasjonen slik den ser ut fra utsiden av samhandlingen", "Den formelle beskrivelsen av hva som skal skje, slik den er nedfelt i regler og faste rutiner"],
      explanation: "Riktig svar er at situasjonsdefinisjonen er en felles forståelse mellom deltakerne av hva slags situasjon de er i. Distraktoren om den enkeltes private oppfatning er den nærmeste, men det avgjørende er nettopp at forståelsen deles: uten felles definisjon bryter samhandlingen sammen. En privat oppfatning kan avvike uten at noe stopper opp.",
    },
    {
      question: "Hva skjer når situasjonsdefinisjonen brytes i et møte?",
      options: ["Samhandlingen stopper opp, og deltakerne må arbeide for å få en felles forståelse på plass igjen", "Samhandlingen fortsetter uendret, siden hver deltaker uansett handler ut fra sine egne oppfatninger", "Samhandlingen erstattes automatisk av formelle regler som gjelder for alle situasjoner av dette slaget", "Samhandlingen blir mer effektiv, siden deltakerne slipper å ta hensyn til hverandres roller videre"],
      explanation: "Riktig svar er at samhandlingen stopper opp og må repareres når den felles forståelsen svikter. Distraktoren om at hver deltaker uansett handler ut fra egne oppfatninger, ligger nær en aktørorientert lesning, men den overser at møtet krever et minimum av felles definisjon for å kunne fortsette i det hele tatt.",
    },
    {
      question: "Hva menes med inntrykksmestring?",
      options: ["At vi arbeider aktivt for å styre det inntrykket andre får av oss i en gitt situasjon", "At vi tolker de inntrykkene andre gir oss, og bruker dem til å bedømme hvem de er", "At vi undertrykker inntrykk som er ubehagelige, slik at de ikke påvirker oss videre i møtet med den andre", "At vi holder fast ved det aller første inntrykket av en person i lang tid etter at vi møtte dem"],
      explanation: "Riktig svar er at inntrykksmestring er det aktive arbeidet med å styre inntrykket andre får av oss. Den nærmeste distraktoren snur retningen: å tolke andres inntrykk er noe annet enn å forme sitt eget uttrykk. Begrepet peker på hva den opptredende gjør, ikke på hva publikum leser ut av opptredenen.",
    },
    {
      question: "Hvorfor er inntrykksmestring noe annet enn løgn?",
      options: ["Fordi enhver situasjon krever en rolle, og rollearbeidet er en betingelse for at samhandling går", "Fordi inntrykksmestring bare forekommer blant folk som er ærlige av natur og aldri lyver", "Fordi løgn er straffbart, mens inntrykksmestring er noe lovverket ikke har regulert ennå", "Fordi inntrykksmestring alltid skjer helt ubevisst, mens løgn krever en bevisst hensikt om å villede andre"],
      explanation: "Riktig svar er at rollearbeidet er en betingelse for at samhandling skal gå, ikke et forsøk på å villede. Distraktoren om at inntrykksmestring alltid skjer ubevisst, ligger nær, men den holder ikke: inntrykksmestring kan være høyst bevisst og gjennomtenkt uten dermed å bli løgn. Skillet går på funksjon, ikke på grad av bevissthet.",
    },
    {
      question: "Hva er forskjellen på front stage og back stage?",
      options: ["Front stage er der opptredenen skjer og publikum ser den, back stage er der man kan tre ut av rollen", "Front stage er der man forbereder opptredenen i ro, back stage er der publikum sitter og følger med på den", "Front stage er de offentlige rommene i en by, back stage er de private hjemmene som folk bor i", "Front stage er den rollen man har på jobb, back stage er den rollen man har i sin egen familie"],
      explanation: "Riktig svar er at front stage er scenen der opptredenen skjer for et publikum, mens back stage er rommet der rollen kan legges bort og opptredenen forberedes. Distraktoren som knytter begrepene til jobb og familie, ligger nær, men er for snever: også hjemmet har sitt front stage når det kommer gjester. Skillet følger publikum, ikke stedstypen.",
    },
    {
      question: "En servitør snakker rolig og vennlig med gjestene i lokalet, men veksler raske og freidige kommentarer med kollegene inne på kjøkkenet. Hva illustrerer dette?",
      options: ["Skillet mellom front stage og back stage, der rollen holdes oppe ett sted og slippes et annet", "Skillet mellom formålsrasjonell og verdirasjonell handling, der servitøren veksler mellom å tjene et mål og følge en verdi", "Skillet mellom individuell og kollektiv rasjonalitet i måten kjøkkenet jobber på", "Skillet mellom formelle og uformelle sanksjoner som kollegene bruker mot hverandre i arbeidet"],
      explanation: "Riktig svar er skillet mellom front stage og back stage: lokalet har publikum, kjøkkenet har det ikke. Distraktoren om formelle og uformelle sanksjoner ligger nær, siden kollegene sikkert også regulerer hverandre, men eksempelet beskriver ingen reaksjon på et normbrudd. Det beskriver et skifte av opptreden når publikum forsvinner.",
    },
    {
      question: "Hvor plasseres interaksjonsperspektivet på dimensjonene i ordenskartet?",
      options: ["Aktørorientert med en aktiv menneskemodell, og uten tydelig vekt på verken konflikt eller harmoni", "Systemorientert med en passiv menneskemodell, og med tydelig vekt på konflikt mellom grupper med ulike interesser", "Aktørorientert med en passiv menneskemodell, og med tydelig vekt på harmoni og på deltakernes felles verdier", "Systemorientert med en aktiv menneskemodell, og med tydelig vekt på konflikt om knappe goder"],
      explanation: "Riktig svar er aktørorientert med en aktiv menneskemodell, uten at perspektivet lener seg mot verken konflikt eller harmoni. Den nærmeste fella beholder aktørorienteringen, men gjør menneskemodellen passiv og legger til harmoni; da forsvinner nettopp det arbeidet deltakerne gjør for å holde møtet i gang.",
    },
    {
      question: "Hva er det beste svaret på om interaksjonsperspektivet konkurrerer med de tre andre perspektivene?",
      options: ["Det arbeider på et annet nivå: det forklarer hvordan orden utføres i møtet, ikke hvorfor makt er fordelt slik den er", "Det konkurrerer direkte: det gir en alternativ forklaring på hvordan makt og ressurser fordeles i et samfunn", "Det erstatter de tre andre helt: når møtene mellom mennesker er analysert, trengs ingen forklaring på nivået over", "Det er underordnet de tre andre: møtene er bare avtrykk av strukturer som allerede er fastlagt utenfor dem"],
      explanation: "Riktig svar er at perspektivet analyserer et annet nivå: det viser hvordan orden faktisk utføres i møter, men sier ikke hvorfor ressurser og makt er fordelt som de er. Distraktoren om direkte konkurranse er nær, og den ville vært riktig hvis perspektivet hadde egne påstander om fordelingen av makt. Det har det ikke, og derfor utelukker de hverandre ikke.",
    },
    {
      question: "Hva skiller interaksjonsperspektivet fra handlings- og bytteperspektivet?",
      options: ["Interaksjonsperspektivet ser på møtet og reglene som gjelder der, ikke på aktørenes kalkulerende valg", "Interaksjonsperspektivet ser på aktørenes kalkulerende valg, ikke på møtet og reglene som gjelder der", "Interaksjonsperspektivet ser på hvordan store institusjoner formes, ikke på hva som skjer i små møter", "Interaksjonsperspektivet ser på hvordan verdier overføres, ikke på hva folk gjør sammen"],
      explanation: "Riktig svar er at interaksjonsperspektivet undersøker møtet og de formene som gjelder der, mens handlings- og bytteperspektivet undersøker aktørenes kalkyler. Den nærmeste distraktoren bytter om de to. Begge perspektivene er aktørorienterte, og det er nettopp derfor de er lette å forveksle.",
    },
    {
      question: "I en kø ved en billettluke lar de som står bak, en tydelig luft mellom seg og den foran, og alle flytter seg fram etter tur uten at noen sier noe. Hva er dette et eksempel på?",
      options: ["Et hverdagsritual som gjør samhandlingen forutsigbar uten at noen har vedtatt noen regel", "En formell prosedyre som er fastsatt av dem som driver billettluken, og som gjelder alle", "Et gavebytte der de som venter, gir hverandre plass og venter det gjengjeldt", "En allmenning der en felles ressurs blir brukt opp fordi alle vil ha en del"],
      explanation: "Riktig svar er at køens avstand og turtaking er et hverdagsritual: en gjentatt form som ingen har vedtatt, men som alle utfører. Distraktoren om en formell prosedyre ligger nær, for køordninger kan være regulert, men eksempelet sier uttrykkelig at ingen sier noe og at formen holder seg av seg selv.",
    },
    {
      question: "I en heis med fem fremmede ser de fleste rett fram eller ned på telefonen, og ingen begynner en samtale. Hvordan forstås dette best i interaksjonsperspektivet?",
      options: ["Som en felles situasjonsdefinisjon om at heisturen ikke er en anledning til å bli kjent", "Som et uttrykk for at deltakerne mangler evnen til å definere situasjonen de er i sammen", "Som et rent bytteforhold der hver enkelt sparer den tiden en samtale ville ha kostet dem", "Som en formell regel om taushet i heiser, håndhevet av dem som drifter bygningen til daglig"],
      explanation: "Riktig svar er at deltakerne deler en definisjon av situasjonen som en kort, upersonlig passasje, og at blikkene deres utfører den definisjonen. Distraktoren om bytte ligger nær, siden folk faktisk sparer tid, men perspektivet forklarer ikke tausheten med en kalkyle. Den forklares med hva slags møte deltakerne oppfatter at de er i.",
    },
    {
      question: "På et venterom setter en person seg helt inntil en annen selv om alle de andre stolene er ledige. Den som allerede satt der, blir stiv i kroppen og flytter seg litt vekk. Hva viser eksempelet?",
      options: ["At en brutt situasjonsdefinisjon utløser en stille reaksjon som markerer hva som gjelder her", "At en formell regel om avstand mellom stoler er brutt, og at reaksjonen er en straffesanksjon", "At den som flyttet seg, opptrer som gratispassasjer på fellesgodet stillhet i venterommet, og nyter roen uten å bidra", "At begge parter kalkulerer nytten av en samtale mot kostnaden ved å sitte tett, og velger avstand"],
      explanation: "Riktig svar er at bruddet på den vanlige forståelsen av et venterom utløser en kroppslig, ordløs reaksjon som gjenoppretter formen. Distraktoren om en formell regel er nær, for slike normer virker regelaktige, men ingen har vedtatt hvor tett man kan sette seg. Reaksjonen kommer fra den andre gjesten, ikke fra en myndighet.",
    },
    {
      question: "I en gruppetime venter studentene til den som snakker er ferdig, før neste tar ordet, og den som avbryter, får et par korte blikk. Hvilke to begreper fanger dette best?",
      options: ["Hverdagsritual for turtaking, håndhevet gjennom mikrosanksjoner fra de andre i gruppen", "Formell møteledelse, håndhevet gjennom sanksjoner fra den som leder gruppetimen", "Gavebytte om taletid, håndhevet gjennom en avtale studentene har inngått med hverandre", "Kollektiv rasjonalitet, håndhevet gjennom at hver enkelt veier taletidens verdi"],
      explanation: "Riktig svar er at turtakingen er et hverdagsritual, og at blikkene er mikrosanksjoner uten formell myndighet bak seg. Distraktoren om formell møteledelse ligger nær, siden gruppetimer ofte har en leder, men i eksempelet er det medstudentene som reagerer, og ingen har fått myndighet til å gjøre det.",
    },
    {
      question: "Hva skiller en situasjonsdefinisjon fra en personlig oppfatning av hva som skjer?",
      options: ["Situasjonsdefinisjonen er felles for deltakerne og bærer samhandlingen, den personlige er den enkeltes egen", "Situasjonsdefinisjonen er den enkeltes egen tolkning, mens den personlige oppfatningen deles av alle", "Situasjonsdefinisjonen finnes bare i formelle møter, mens personlige oppfatninger finnes i alle møter", "Situasjonsdefinisjonen er alltid uttalt i klare ord, mens en personlig oppfatning aldri blir sagt høyt"],
      explanation: "Riktig svar er at situasjonsdefinisjonen er felles og bærer samhandlingen, mens en personlig oppfatning er den enkeltes. Distraktoren om at definisjonen må være uttalt, er nær, men de fleste situasjonsdefinisjoner er nettopp uuttalte og vises bare gjennom hvordan deltakerne oppfører seg.",
    },
    {
      question: "Hva ligger i uttrykket presentasjon av selvet?",
      options: ["At vi framstiller oss selv på en bestemt måte overfor andre i den situasjonen vi står i", "At vi gradvis avdekker vår sanne og uforstilte personlighet for dem vi omgås, etter hvert som fortroligheten vokser", "At vi presenterer oss med navn og bakgrunn når vi møter noen vi ikke har truffet før", "At vi utvikler et stabilt selvbilde som holder seg likt uansett hvilken situasjon vi er i"],
      explanation: "Riktig svar er at vi framstiller oss på bestemte måter overfor andre, tilpasset situasjonen vi står i. Distraktoren om et stabilt selvbilde ligger nær, men den flytter oppmerksomheten fra det som skjer i møtet til noe indre og situasjonsuavhengig. Interaksjonsperspektivet er opptatt av framstillingen, ikke av et fast indre selv.",
    },
    {
      question: "Hvem plasserer Goffmans begrepsapparat inn i kartet over perspektiver på sosial orden?",
      options: ["Solli, som bruker Goffman som hovedreferanse for interaksjonsperspektivet i kartet sitt", "Balsvik, som bruker Goffman til å vise hvordan rasjonalitetsantakelsene i økonomifaget kan svekkes noe", "Malnes, som bruker Goffman til å vise hvordan konvensjoner kan vokse fram uten vedtak", "Elster, som bruker Goffman til å skille mellom de tre typene normer i framstillingen sin"],
      explanation: "Riktig svar er at det er Solli som gir Goffmans apparat plass i ordenskartet, som hovedreferanse for interaksjonsperspektivet. Malnes-distraktoren ligger nær fordi konvensjoner som vokser fram uten vedtak, minner om hverdagsritualer, men Malnes framstiller Hobbes og Hume, ikke Goffman.",
    },
    {
      question: "Hva er interaksjonsperspektivet dårlig egnet til å forklare?",
      options: ["Hvorfor ressurser og makt er fordelt slik de er mellom ulike grupper i samfunnet", "Hvordan deltakerne holder en samtale i gang når noe uventet oppstår underveis og formen må reddes", "Hvordan små reaksjoner kan håndheve normer uten at noen har formell myndighet", "Hvordan et møte kan bryte sammen når deltakerne forstår situasjonen på ulike måter"],
      explanation: "Riktig svar er at perspektivet ikke har noe godt svar på hvorfor makt og ressurser er fordelt som de er. De tre andre svaralternativene beskriver nettopp det perspektivet er sterkt på, nemlig hva som skjer i møtet. Grensen går ved spørsmål om fordeling, som hører hjemme på et annet analysenivå.",
    },
    {
      question: "Hva betyr det at orden både produseres og reproduseres i møter?",
      options: ["At orden skapes på nytt hver gang mennesker møtes, og at gjentakelsen holder den ved like", "At orden skapes én gang for alle i barndommen, og siden bare gjentas uten noen endring", "At orden skapes av lovgiveren og deretter håndheves av politi og domstoler i hvert møte", "At orden skapes av økonomiske forhold og bare speiles i møtene mellom enkeltmennesker"],
      explanation: "Riktig svar er at orden må skapes på nytt i hvert møte, og at det er gjentakelsen som gjør den varig. Distraktoren om barndommen ligger nær, for vi lærer jo formene tidlig, men poenget er at innlæringen ikke er nok: formene finnes bare i den grad de faktisk utføres igjen og igjen.",
    },
    {
      question: "En student som er nervøs før en muntlig framføring, snakker rolig og ser opp på tilhørerne, selv om hun kjenner hjertet slå. Hva er dette et eksempel på?",
      options: ["Inntrykksmestring, der hun styrer inntrykket tilhørerne får, uten at det gjør framføringen uærlig", "Løgn, siden hun skjuler sin egen tilstand og dermed gir tilhørerne et uriktig bilde av seg selv", "Verdirasjonell handling, siden hun holder fram med framføringen uansett hvilket utfall den får", "Mikrosanksjonering, siden hun regulerer tilhørernes oppførsel gjennom blikkene hun sender dem"],
      explanation: "Riktig svar er inntrykksmestring: hun arbeider med uttrykket sitt for å fylle rollen situasjonen krever. Løgn-distraktoren er nær og fanger den vanligste misforståelsen, men å holde nervøsiteten for seg selv er ikke å villede noen. Situasjonen krever en opptreden, og å levere den er en betingelse for at framføringen skal gå.",
    },
  ],
  'svexfac03-3-7': [
    {
      question: "Hva kjennetegner naturtilstanden slik Hobbes beskriver den?",
      options: ["En tilværelse uten felles makt, der ingen kan stole på at andre holder avtalene sine", "En tilværelse uten eiendom, der alle deler likt og derfor lever fredelig", "En tilværelse uten arbeid, der menneskene lever av det naturen gir uten anstrengelse", "En tilværelse uten språk, der menneskene ikke kan inngå avtaler"],
      explanation: "Riktig svar er at naturtilstanden mangler en felles makt, slik at ingen kan stole på at avtaler blir holdt. Distraktoren om manglende språk ligger nær, siden avtaler også der blir umulige, men Hobbes forutsetter at menneskene kan avtale; problemet er at avtalen ikke er verdt noe uten en håndhever.",
    },
    {
      question: "Hva er Hobbes' begrunnelse for at naturtilstanden blir utrygg?",
      options: ["Usikkerheten om hva andre vil gjøre, som gjør at frykt alene kan gjøre forkjøpsangrep fornuftig", "Ondskapen i menneskets natur, som driver hver enkelt til å ville skade andre for skadens skyld", "Knappheten på mat, som gjør at bare de sterkeste kan overleve i en tilstand uten en statsmakt", "Uvitenheten om moral, som gjør at menneskene ikke vet forskjell på rett og galt før loven kommer"],
      explanation: "Riktig svar er at utryggheten springer ut av usikkerhet om andres handlinger, ikke av ondskap. Ondskapsdistraktoren er den vanligste feillesningen av Hobbes: argumentet hans virker nettopp fordi det holder også for fredelige mennesker, så lenge de ikke kan vite hva naboen gjør.",
    },
    {
      question: "Hvordan løser en felles myndighet problemet Hobbes beskriver?",
      options: ["Ved å kunne håndheve avtaler, slik at det blir rasjonelt for hver enkelt å holde sin del", "Ved å oppdra borgerne til felles verdier, slik at ingen lenger ønsker å bryte en avtale de har inngått", "Ved å fjerne behovet for avtaler, siden myndigheten fordeler alle goder direkte til borgerne", "Ved å gjøre menneskene gode, slik at frykten for hverandre til slutt forsvinner fra samfunnet"],
      explanation: "Riktig svar er at myndigheten gjør avtalebrudd kostbart, og at det dermed blir fornuftig for hver enkelt å holde sin del. Distraktoren om oppdragelse til felles verdier ligger nær og beskriver en reell ordensmekanisme, men den hører hjemme i integrasjonsperspektivet. Hobbes' løsning virker uten at noen skifter verdier.",
    },
    {
      question: "Hvor plasseres Hobbes på dimensjonen konflikt mot harmoni?",
      options: ["På konfliktsiden, siden orden må sikres mot en underliggende trussel om strid mellom aktørene", "På harmonisiden, siden orden ifølge ham springer ut av menneskenes naturlige samarbeidsevne", "Midt imellom, siden han mener at konflikt og harmoni veier omtrent like tungt i et samfunn", "Utenfor dimensjonen, siden framstillingen hans handler om økonomi og ikke om sosial orden"],
      explanation: "Riktig svar er konfliktsiden: ordenen hos Hobbes er en løsning på en truende strid, ikke et uttrykk for naturlig samhold. Merk at dette ikke motsier at Hobbes ser mennesket som fornuftig; konfliktplasseringen gjelder hva ordenen må beskytte oss mot, ikke hvor onde menneskene er.",
    },
    {
      question: "Hva er en sosial konvensjon slik Hume forstår det?",
      options: ["En regel som oppstår og holder seg uten vedtak, fordi det lønner seg å gjøre som de andre", "En regel som en lovgiver har vedtatt, og som håndheves av domstolene når noen bryter den", "En regel som alle har blitt enige om er rettferdig etter en åpen debatt i hele samfunnet", "En regel som holdes ved like fordi de som bryter den, blir straffet av en sterk myndighet"],
      explanation: "Riktig svar er at konvensjonen oppstår og holder seg uten vedtak, fordi den enkelte tjener på å følge det de andre gjør. Distraktoren om enighet etter debatt ligger svært nær, men den bytter ut nytte med rettferdighetsvurdering. Humes konvensjoner kan holde seg selv om ingen har uttalt seg om dem.",
    },
    {
      question: "Hva er den vanligste misforståelsen om Humes sosiale konvensjoner?",
      options: ["Å tro at de holder fordi alle er enige om at de er rettferdige, når de holder fordi det lønner seg", "Å tro at de holder fordi det lønner seg å følge dem, når de i virkeligheten er formelt vedtatte", "Å tro at de gjelder i alle samfunn, når Hume mener de bare finnes i moderne markedssamfunn", "Å tro at de kan endres over tid, når Hume mener at en konvensjon aldri lar seg endre senere"],
      explanation: "Riktig svar er at konvensjonen holder fordi det lønner seg for hver enkelt å følge den, ikke fordi den er vurdert som rettferdig. Dette er den viktigste fella i kapittelet: Humes orden er ikke det samme som et verdifellesskap. En konvensjon kan være godt innarbeidet og likevel oppfattes som urimelig av dem som følger den.",
    },
    {
      question: "Hvilket eksempel er et typisk eksempel på en sosial konvensjon i Humes forstand?",
      options: ["Hvilken side man passerer på når to personer møtes i en smal gang, uten at det er skiltet", "Hvilken straff en tyv skal få, slik det er fastsatt i lovverket og anvendt av en domstol", "Hvilke verdier foreldre mener det er viktigst å gi videre til barna sine under oppveksten", "Hvilke varer et land velger å legge toll på for å beskytte egen industri mot konkurranse"],
      explanation: "Riktig svar er passeringssiden i en uskiltet gang: alle tjener på at praksisen er lik, og ingen har vedtatt hvilken side det skal bli. Straffedistraktoren ligger nær, siden også lover regulerer atferd, men en lov er nettopp vedtatt og håndhevet, og da er det ikke lenger en konvensjon i Humes forstand.",
    },
    {
      question: "Hvor plasseres Hume på dimensjonen konflikt mot harmoni?",
      options: ["På harmonisiden, siden orden kan vokse fram av seg selv uten en makt som truer med straff", "På konfliktsiden, siden orden ifølge ham krever at en sterk myndighet holder partene i sjakk", "Midt imellom, siden han mener at konvensjoner må understøttes av straff for å holde seg over tid", "Utenfor dimensjonen, siden han bare skriver om moralske følelser og ikke om sosial orden"],
      explanation: "Riktig svar er harmonisiden, siden Humes konvensjoner holder seg uten en håndhevende makt. Merk likevel at harmoni her ikke betyr verdifellesskap eller enighet om rettferdighet; det betyr bare at ordenen ikke må sikres mot en underliggende strid slik Hobbes mener.",
    },
    {
      question: "Hos hvem møter leseren framstillingen av Hobbes' naturtilstand og Humes konvensjoner?",
      options: ["Hos Malnes, som behandler begge i sin framstilling av samfunnsfilosofiske spørsmål", "Hos Solli, som behandler begge når han setter opp kartet over perspektiver på orden", "Hos Balsvik, som behandler begge i gjennomgangen av rasjonalitetsantakelser i faget", "Hos Elster, som behandler begge når han skiller mellom de tre typene sosiale normer"],
      explanation: "Riktig svar er at det er Malnes som framstiller både Hobbes og Hume. Balsvik-distraktoren ligger nær, for Hobbes' argument bygger på nettopp rasjonalitetsantakelser, og Balsvik skriver om slike antakelser i andre sammenhenger. Framstillingen av de to filosofene er likevel Malnes' arbeid.",
    },
    {
      question: "På en mye brukt turveg uten skilt har det festet seg at alle går til høyre når de møter noen. Ingen har vedtatt det, og ingen straffes for å la være. Hva er dette?",
      options: ["En sosial konvensjon i Humes forstand, som holder seg fordi det lønner seg å gjøre som de andre", "En løsning i Hobbes' ånd, siden det kreves en myndighet for at ordningen skal holde seg over tid", "Et gavebytte, siden den som viker, gir noe fra seg og venter å få det gjengjeldt en annen gang", "En formell trafikkregel, siden den gjelder alle som ferdes og kan håndheves av myndighetene"],
      explanation: "Riktig svar er en sosial konvensjon: praksisen har ingen opphavsmann og ingen håndhever, og den enkelte taper på å avvike når alle andre går til høyre. Distraktoren om en formell trafikkregel er nær, siden slike regler finnes for veitrafikk, men eksempelet sier uttrykkelig at ingenting er skiltet eller vedtatt.",
    },
    {
      question: "Et fiskefelt tåler bare et bestemt uttak i året. Hver båt tjener på å ta litt mer enn sin del, og nedgangen merkes av alle. Hva slags ordning kreves her etter Hobbes' resonnement?",
      options: ["En myndighet med makt til å håndheve kvotene, slik at det lønner seg for hver båt å holde seg til dem", "En konvensjon som får vokse fram av seg selv, siden båtene vil finne en fornuftig praksis over tid", "En opplysningskampanje om verdien av bestanden, slik at båtene av seg selv ønsker å ta mindre fisk", "Et gavebytte mellom båtene, der hver av dem gir fra seg fangst og venter gjengjeld neste sesong"],
      explanation: "Riktig svar er at ordningen krever en håndhevende myndighet, siden hver båt tjener på å bryte kvoten også når alle andre holder seg til den. Konvensjonsdistraktoren ligger nær, men Humes mekanisme virker bare når den enkelte taper på å avvike fra de andre. Her er det motsatt, og da holder ikke ordningen seg selv.",
    },
    {
      question: "På en lesesal har studentene falt inn i et mønster der alle bruker den samme plassen hver dag, uten at noen har fordelt plassene. Hvordan forklares dette best?",
      options: ["Som en konvensjon som holder fordi hver enkelt tjener på at plassene er forutsigbare", "Som en ordning som forutsetter en myndighet med rett til å tildele og inndra plassene", "Som en allmenningens tragedie, der en felles ressurs brukes opp av altfor mange brukere", "Som et uttrykk for et verdifellesskap der studentene er enige om hva som er rettferdig"],
      explanation: "Riktig svar er en konvensjon: forutsigbarheten er nyttig for alle, og ingen tjener på å bryte mønsteret når de andre følger det. Distraktoren om verdifellesskap ligger svært nær, og den er nettopp fella i dette kapittelet: konvensjonen krever ingen enighet om rettferdighet, bare at det lønner seg å gjøre som de andre.",
    },
    {
      question: "I en kantine har det oppstått en fast praksis om at man stiller seg bakerst i køen. Praksisen holder seg uten vakter og uten skilt. Hva er den beste beskrivelsen?",
      options: ["En selvbærende konvensjon, siden hver enkelt taper på å bryte den når alle andre følger den", "En regel som krever håndheving, siden den som snyter i køen, uansett tjener på å gjøre det", "En norm som bygger på felles enighet om rettferdighet mellom alle som spiser i kantinen", "En formell prosedyre som kantinedriften har innført for å få serveringen til å gå raskere"],
      explanation: "Riktig svar er at praksisen er selvbærende: den som bryter køen, møter irritasjon og motstand og kommer dårligere ut. Distraktoren om felles enighet om rettferdighet er nær, siden køordninger ofte oppleves som rettferdige, men opplevelsen er ikke det som holder praksisen oppe hos Hume. Nytten er.",
    },
    {
      question: "Hva skiller Hobbes' og Humes svar på hvordan orden oppstår?",
      options: ["Hobbes lar orden hvile på en håndhevende makt, Hume lar den vokse fram av gjensidig nytte", "Hobbes lar orden vokse fram av gjensidig nytte, Hume lar den hvile på en håndhevende makt", "Hobbes lar orden hvile på felles verdier, Hume lar den hvile på oppdragelse og innlærte vaner", "Hobbes lar orden hvile på arbeidsdeling, Hume lar den hvile på bytte i et fritt og åpent marked"],
      explanation: "Riktig svar er at Hobbes trenger en håndhever, mens Hume klarer seg med at det lønner seg å gjøre som de andre. Den nærmeste distraktoren bytter om de to. En nyttig huskeregel er at Hobbes plasseres på konfliktsiden og Hume på harmonisiden i ordenskartet.",
    },
    {
      question: "Hvorfor kan et angrep være fornuftig i Hobbes' naturtilstand selv for en fredelig person?",
      options: ["Fordi hun ikke kan vite om den andre vil slå til først, og å komme i forkjøpet reduserer risikoen", "Fordi hun har lyst på det den andre eier, og ingenting hindrer henne i å ta det med rå makt", "Fordi hun mener at vold er moralsk riktig så lenge det ikke finnes noen lov som forbyr det", "Fordi hun vet at den andre er ond av natur og derfor uansett vil forsøke å skade henne først"],
      explanation: "Riktig svar er at usikkerheten om den andres hensikter gjør forkjøpsangrepet til det tryggeste valget. Distraktoren om at den andre er ond, ligger nær, men den ville gjort argumentet mye svakere: styrken i Hobbes' resonnement er at det holder også når ingen av partene ønsker strid.",
    },
    {
      question: "Hvordan forklarer Hume at det festner seg hvem som regnes som eier av hva?",
      options: ["Som en konvensjon som er til nytte for alle, og som derfor holder seg uten et opprinnelig vedtak", "Som en rettighet som følger av naturen selv, uavhengig av hva folk gjør og venter av hverandre", "Som et resultat av at en myndighet fordelte eiendommen og deretter beskyttet fordelingen med makt", "Som et uttrykk for at samfunnet har blitt enig om hvilken fordeling som er den mest rettferdige"],
      explanation: "Riktig svar er at eiendom hos Hume er en konvensjon som holder seg fordi stabile forventninger er nyttige for alle. Distraktoren om enighet om den mest rettferdige fordelingen er nær, men konvensjonen sier ingenting om at fordelingen er rettferdig; den sier bare at det lønner seg å respektere den fordelingen som allerede har festet seg.",
    },
    {
      question: "Hva viser plasseringen av Hobbes og Hume på dimensjonen konflikt mot harmoni?",
      options: ["At de gir ulike svar på om orden må sikres mot strid, eller kan vokse fram av gjensidig nytte", "At de gir ulike svar på om samfunnet bør styres av en konge eller av en folkevalgt forsamling", "At de gir ulike svar på om mennesket har fri vilje, eller er bestemt av forhold utenfor seg selv", "At de gir ulike svar på om økonomisk vekst er bra for samfunnet eller skaper flere problemer"],
      explanation: "Riktig svar er at dimensjonen skiller mellom orden som må sikres mot en truende strid, og orden som kan vokse fram av gjensidig nytte. Distraktoren om styreform ligger nær, siden Hobbes faktisk skriver om suverenen, men ordenskartets dimensjon gjelder hva ordenen hviler på, ikke hvem som sitter med makten.",
    },
    {
      question: "Hva forutsetter en sosial konvensjon ifølge Hume ikke?",
      options: ["At deltakerne er enige om at ordningen er rettferdig, eller at noen har vedtatt den formelt", "At deltakerne tjener på å følge den så lenge de andre også følger den i sin egen atferd", "At ordningen er noenlunde forutsigbar, slik at hver enkelt vet hva de andre kommer til å gjøre", "At ordningen har vart en stund, slik at deltakerne har rukket å innrette seg etter praksisen"],
      explanation: "Riktig svar er at verken rettferdighetsenighet eller formelt vedtak er nødvendig for en konvensjon. De tre andre alternativene beskriver forhold konvensjonen faktisk hviler på: gjensidig nytte, forutsigbarhet og en innarbeidet praksis. Å blande sammen nytte og rettferdighet er den sentrale fella her.",
    },
    {
      question: "Hva gjør at det blir rasjonelt å holde avtaler når det finnes en håndhevende myndighet?",
      options: ["At bruddet nå får en kostnad, slik at den enkelte kan regne med at også de andre holder sin del", "At myndigheten endrer menneskenes verdier, slik at de ikke lenger ønsker å bryte avtalene sine", "At myndigheten inngår avtalene på vegne av borgerne, slik at ingen enkeltperson blir bundet selv", "At avtalene blir enklere å forstå når en myndighet har skrevet dem ned i et felles regelverk"],
      explanation: "Riktig svar er at håndhevingen gir avtalebrudd en kostnad, og at hver enkelt derfor kan stole på at motparten holder sin del. Distraktoren om endrede verdier ligger nær en integrasjonsforklaring, men Hobbes' argument krever ingen verdiendring i det hele tatt: det virker på uendrede, egeninteresserte aktører.",
    },
    {
      question: "Hvilket forhold gjør det mest sannsynlig at en ordning trenger en håndhevende myndighet, framfor å kunne vokse fram av seg selv?",
      options: ["At den enkelte tjener på å bryte ordningen selv når alle andre følger den lojalt", "At den enkelte taper på å bryte ordningen så lenge alle andre følger den lojalt", "At ordningen har vokst fram over lang tid uten at noen har lagt merke til det", "At ordningen gjelder i et lite miljø der deltakerne kjenner hverandre godt fra før"],
      explanation: "Riktig svar er at ordningen trenger håndheving når den enkelte tjener på å bryte den også når alle andre følger den. Den nærmeste distraktoren snur dette: taper man på å avvike, holder ordningen seg selv, og da har vi en konvensjon i Humes forstand. Dette er selve skillet mellom de to svarene på ordensproblemet.",
    },
  ],
  'svexfac03-3-8': [
    {
      question: "Hva legger Smith vekt på når han forklarer moralsk vurdering?",
      options: ["Innlevelse i andres situasjon og den upartiske tilskuerens blikk på egen handling", "Beregningen av hvor stor nytte en handling gir den som utfører den, målt i penger", "Lydigheten mot lover som en myndighet har vedtatt og kan håndheve med straff", "Vanen som fester seg i et samfunn, uten at den enkelte tenker over hva som er rett"],
      explanation: "Riktig svar er at Smith forklarer moralsk vurdering med innlevelse i andre og med den upartiske tilskuerens blikk. Nyttedistraktoren ligger nær, fordi Smith også skriver om egeninteresse i økonomien, men moralteorien hans hviler ikke på nyttekalkyle. De to sidene av forfatterskapet må holdes fra hverandre.",
    },
    {
      question: "Hvorfor er det galt å lese Smith som en ren egoismeteoretiker?",
      options: ["Fordi han forklarer moralsk vurdering med innlevelse i andre og med den upartiske tilskuerens blikk", "Fordi han mener at mennesker aldri handler ut fra egeninteresse, men bare av hensyn til andre", "Fordi han avviser at markeder kan gi gode utfall, og heller vil at staten fordeler alle godene", "Fordi han bygger hele framstillingen sin på at menneskene styres av vaner og ikke av egne valg"],
      explanation: "Riktig svar er at Smith har en utviklet teori om moralske følelser, bygget på innlevelse og på den upartiske tilskueren. Distraktoren som sier at mennesker aldri handler egeninteressert, går for langt i motsatt retning: Smith bruker egeninteressen aktivt i den økonomiske analysen. Poenget er at den ikke er hele mennesket hos ham.",
    },
    {
      question: "Hva sier tanken om den usynlige hånd?",
      options: ["At samfunnsgagnlige utfall kan komme av selvinteresserte handlinger uten at noen har siktet mot dem", "At samfunnsgagnlige utfall bare kommer i stand når en myndighet styrer aktørene mot et felles mål", "At selvinteresserte handlinger alltid gir dårlige utfall for samfunnet når de får utfolde seg fritt", "At markedet styres av en skjult gruppe aktører som setter prisene bak ryggen på alle de andre"],
      explanation: "Riktig svar er at gode samlede utfall kan oppstå av handlinger ingen har siktet mot dem med. Distraktoren om en skjult gruppe aktører spiller på ordet usynlig, men uttrykket peker nettopp på at ingen styrer: hadde noen gjort det, ville mekanismen vært en helt annen.",
    },
    {
      question: "Hva har den usynlige hånd til felles med Humes sosiale konvensjoner?",
      options: ["Begge forklarer orden som noe som oppstår uten at noen har planlagt den som helhet", "Begge forklarer orden med at en myndighet håndhever reglene som gjelder for alle", "Begge forklarer orden med at deltakerne deler et felles sett av moralske overbevisninger", "Begge forklarer orden med at én gruppe har makt til å bestemme over de øvrige gruppene"],
      explanation: "Riktig svar er at begge er mekanismer for orden uten planlegger: mønsteret oppstår av mange enkelthandlinger. Distraktoren om felles moralske overbevisninger ligger nær, siden Smith også skriver om moral, men verken konvensjonen eller den usynlige hånd forutsetter at deltakerne er enige om noe.",
    },
    {
      question: "Hva er første ledd i Smiths kjede fra arbeidsdeling til markedets størrelse?",
      options: ["Arbeidsdeling, der oppgavene fordeles slik at hver arbeider gjør en avgrenset del av jobben", "Bytte, der arbeiderne handler med hverandre for å skaffe seg det de ikke lager selv", "Markedets størrelse, som avgjør hvor mange kjøpere en spesialisert produsent kan nå fram til", "Produktivitet, som viser hvor mye en arbeider klarer å lage i løpet av en gitt arbeidsdag"],
      explanation: "Riktig svar er at kjeden starter med arbeidsdelingen, altså oppdelingen av arbeidet i avgrensede oppgaver. Distraktoren om markedets størrelse er nær, og den er et sentralt ledd, men den kommer sist i kjeden som en grense for hvor langt spesialiseringen kan drives.",
    },
    {
      question: "Hvilken rekkefølge har leddene i Smiths kjede?",
      options: ["Arbeidsdeling, så spesialisering, så høyere produktivitet, så behov for bytte, så markedets størrelse", "Markedets størrelse, så behov for bytte, så arbeidsdeling, så spesialisering, så høyere produktivitet", "Spesialisering, så markedets størrelse, så arbeidsdeling, så høyere produktivitet, så behov for bytte", "Høyere produktivitet, så arbeidsdeling, så markedets størrelse, så spesialisering, så behov for bytte"],
      explanation: "Riktig svar er at arbeidsdelingen gir spesialisering, spesialiseringen gir høyere produktivitet, produktiviteten skaper behov for bytte, og markedets størrelse setter grensen for hvor langt dette kan drives. Distraktoren som starter med markedets størrelse, ligger nær, siden markedet er avgjørende, men det virker som en grense på kjeden, ikke som et startpunkt.",
    },
    {
      question: "Hvorfor følger behovet for bytte av arbeidsdelingen?",
      options: ["Fordi den som bare lager én ting, må bytte til seg alt det andre han trenger for å leve", "Fordi den som lager mange ting, får overskudd av alle varene og må selge dem videre", "Fordi myndighetene krever at varer omsettes i et marked før de kan brukes av noen", "Fordi bytte er en gammel skikk som holder seg selv om arbeidsdelingen skulle forsvinne"],
      explanation: "Riktig svar er at spesialisering gjør den enkelte avhengig av andre for alt han ikke lager selv. Distraktoren om overskudd hos den som lager mange ting, snur forholdet: det er nettopp den smale produksjonen, ikke den brede, som tvinger fram bytte.",
    },
    {
      question: "Hva mener Smith med at markedets størrelse setter grensen for arbeidsdelingen?",
      options: ["At spesialiseringen bare kan drives så langt som antallet kjøpere gjør det mulig å avsette varene", "At spesialiseringen bare kan drives så langt som råvaretilgangen i landet gjør det mulig å produsere", "At spesialiseringen bare kan drives så langt som myndighetene har gitt tillatelse til i lovverket", "At spesialiseringen bare kan drives så langt som arbeiderne selv orker å gjenta den samme oppgaven"],
      explanation: "Riktig svar er at antallet kjøpere avgjør hvor smal en produsent kan gjøre virksomheten sin. Råvaredistraktoren ligger nær, for knappe råvarer begrenser jo produksjonen, men Smiths poeng gjelder avsetningssiden: uten nok kjøpere kan ingen leve av å gjøre bare én ting.",
    },
    {
      question: "En bygd med to hundre innbyggere har én altmuligmann som reparerer både sko, sykler og tak. I en storby finnes egne verksteder for hver av delene. Hva illustrerer forskjellen?",
      options: ["At markedets størrelse setter grensen for hvor langt spesialiseringen kan drives i praksis", "At folk i bygda har mindre behov for reparasjoner enn folk som bor i en storby har", "At arbeidsdeling gir lavere produktivitet når den drives for langt i de store markedene", "At myndighetene regulerer hvilke yrker som kan utøves i små og store lokalsamfunn"],
      explanation: "Riktig svar er at markedets størrelse setter grensen: en ren skomaker får ikke nok kunder i en liten bygd. Distraktoren om at behovet er mindre, ligger nær, men behovet per innbygger er det samme; det er antallet innbyggere som skiller de to stedene.",
    },
    {
      question: "Hva går merkantilismen ut på?",
      options: ["At gull og sølv er selve rikdommen, og at staten bør fremme eksport og hindre import", "At produserte varer er selve rikdommen, og at staten bør la handelen gå mest mulig fritt", "At arbeidskraften er selve rikdommen, og at staten bør satse på utdanning av befolkningen", "At jorda er selve rikdommen, og at staten bør verne om landbruket framfor annen næring"],
      explanation: "Riktig svar er at merkantilismen setter likhetstegn mellom rikdom og beholdningen av edelt metall, og derfor vil ha eksportoverskudd. Distraktoren om produserte varer beskriver nettopp Smiths motstandpunkt, ikke merkantilismen. Å bytte om de to er den vanligste feilen på dette punktet.",
    },
    {
      question: "Hva menes med at merkantilistene så handel som et nullsumspill?",
      options: ["At den enes gevinst i en handel må være den andres tap, slik at samlet verdi ikke øker", "At begge parter i en handel må tjene like mye, ellers ville handelen ikke funnet sted", "At handelen mellom land går i null over tid, siden import og eksport utjevner hverandre", "At handelen ikke gir gevinst til noen, siden transportkostnadene spiser opp fortjenesten"],
      explanation: "Riktig svar er at det ene landets gevinst måtte motsvares av det andres tap, slik at ingen ny verdi ble skapt. Distraktoren om at handelen går i null over tid, ligger nær språklig, men den handler om balanse i handelsregnskapet, ikke om hvorvidt verdi skapes.",
    },
    {
      question: "Hvilke virkemidler følger av det merkantilistiske synet?",
      options: ["Toll på innførte varer og støtte til eksport, for å trekke edelt metall inn i landet", "Fjerning av toll og fri innførsel av varer, for å utvide markedet for egne produsenter", "Faste priser på alle varer og et generelt forbud mot handel over grensene i begge retninger", "Statlig eierskap til all produksjon og fordeling av varene etter behov i hele befolkningen"],
      explanation: "Riktig svar er toll på import kombinert med eksportsubsidier, siden målet er å få mest mulig gull og sølv inn i landet. Distraktoren om et generelt handelsforbud er nær, men merkantilistene ville ikke stanse handelen; de ville vri den slik at eksporten oversteg importen.",
    },
    {
      question: "Hva er Smiths innvending mot at gull og sølv utgjør rikdommen?",
      options: ["At rikdommen er det som produseres og kan forbrukes, ikke beholdningen av edelt metall", "At rikdommen er beholdningen av jord og naturressurser, ikke det som produseres av varer", "At rikdommen er antallet innbyggere i landet, siden flere hender gir mer arbeidskraft", "At rikdommen er de handelsavtalene et land har inngått, siden de sikrer varer over tid"],
      explanation: "Riktig svar er at rikdommen ligger i strømmen av varer og tjenester som kan forbrukes, ikke i en metallbeholdning. Distraktoren om jord og naturressurser ligger nær, siden også de er reelle verdier, men Smiths poeng er produksjonen: ressurser som ikke tas i bruk, gjør ingen rikere.",
    },
    {
      question: "Hvorfor er handel ikke et nullsumspill, ifølge Smith?",
      options: ["Fordi begge parter bytter nettopp fordi de kommer bedre ut enn de var før byttet", "Fordi staten skattlegger handelen og fordeler gevinsten jevnt mellom de to landene", "Fordi prisene alltid settes slik at partene ender opp med nøyaktig like store gevinster", "Fordi den ene parten som regel er sterkere og derfor tar hele gevinsten fra den andre"],
      explanation: "Riktig svar er at et frivillig bytte inngås bare når begge parter regner med å komme bedre ut, og da skapes det verdi. Distraktoren om like store gevinster ligger nær, men Smiths argument krever ikke lik fordeling: det holder at begge vinner noe, uansett hvordan gevinsten fordeler seg.",
    },
    {
      question: "Hvorfor er handelshindre skadelige i Smiths resonnement?",
      options: ["Fordi de snevrer inn markedet og dermed begrenser hvor langt arbeidsdelingen kan drives", "Fordi de gjør varene dyrere for staten, som må dekke tollen av sine egne skatteinntekter", "Fordi de gjør at gull og sølv strømmer ut av landet i stedet for å bli værende der", "Fordi de fjerner behovet for arbeidsdeling, siden alle varer da må lages i utlandet"],
      explanation: "Riktig svar er at handelshindre gjør markedet mindre, og et mindre marked setter en lavere grense for spesialiseringen. Distraktoren om gull som strømmer ut, snur merkantilistenes eget resonnement, men Smith avviser hele koblingen mellom metallbeholdning og rikdom. Det er kjeden fra arbeidsdeling til marked som bærer argumentet hans.",
    },
    {
      question: "Hos hvem møter leseren framstillingen av Adam Smiths tenkning?",
      options: ["Hos Balsvik, som gjengir og drøfter Smiths argumenter, mens teorien selv tilhører Smith", "Hos Solli, som gjengir Smiths argumenter når han setter opp kartet over perspektivene", "Hos Malnes, som gjengir Smiths argumenter i gjennomgangen av naturtilstand og konvensjon", "Hos Elster, som gjengir Smiths argumenter når han skiller mellom de tre typene normer"],
      explanation: "Riktig svar er at det er Balsvik som framstiller Smith, mens tankene om den usynlige hånd og arbeidsdelingen tilhører Smith selv. Malnes-distraktoren ligger nær, siden den usynlige hånd og Humes konvensjoner er beslektede mekanismer, men Malnes framstiller Hobbes og Hume, ikke Smith.",
    },
    {
      question: "Hva er den faglige spenningen i tanken om den usynlige hånd?",
      options: ["Om den er en beskrivelse av hvordan utfall kan oppstå, eller en anbefaling om å la markedet råde", "Om den er en beskrivelse av gullbeholdningen, eller en anbefaling om å øke eksporten av varer", "Om den gjelder for enkeltmennesker, eller bare for de statene som driver handel med hverandre", "Om den ble formulert før eller etter at merkantilismen fikk fotfeste hos datidens myndigheter"],
      explanation: "Riktig svar er spenningen mellom å lese uttrykket som en beskrivelse av en mekanisme og å lese det som et politisk råd om å la markedet være i fred. Distraktoren om enkeltmennesker mot stater er nær, siden Smith drøfter begge nivåer, men den treffer ikke selve tvetydigheten mellom beskrivelse og anbefaling.",
    },
    {
      question: "Hvor svikter argumentet om den usynlige hånd når godet er en felles ressurs?",
      options: ["I overgangen fra egeninteresse til godt samlet utfall, siden hver bruker velter kostnaden over på alle", "I overgangen fra arbeidsdeling til spesialisering, siden felles ressurser ikke kan deles opp i oppgaver", "I overgangen fra bytte til marked, siden felles ressurser aldri kan kjøpes og selges av noen aktør", "I overgangen fra produktivitet til bytte, siden felles ressurser gir samme produktivitet uansett bruk"],
      explanation: "Riktig svar er at det er selve skrittet fra egeninteresse til godt samlet utfall som ikke holder, fordi brukeren ikke bærer hele kostnaden ved egen bruk. Distraktoren om bytte og marked ligger nær, men felles ressurser kan godt omsettes; problemet er at prisen ikke fanger opp skaden på de andre brukerne.",
    },
    {
      question: "Hva skjer med Smiths kjede når markedet er svært lite?",
      options: ["Spesialiseringen stanser tidlig, siden en spesialisert produsent ikke får solgt nok til å leve av det", "Spesialiseringen fortsetter uhindret, siden produktiviteten stiger uansett hvor mange kjøpere det er", "Arbeidsdelingen forsvinner helt, siden ingen vil bytte varer med hverandre i et lite lokalsamfunn", "Produktiviteten faller til null, siden det ikke lønner seg å produsere noe når kjøperne er svært få"],
      explanation: "Riktig svar er at spesialiseringen stanser tidlig fordi det ikke finnes nok kjøpere til å bære en smal produksjon. Distraktoren om at arbeidsdelingen forsvinner helt, går for langt: noe arbeidsdeling finnes også i små samfunn, den kan bare ikke drives særlig langt.",
    },
    {
      question: "En rådgiver foreslår høy toll på innførte møbler for å holde pengene i landet og verne egen industri. Hva ville Smiths innvending være?",
      options: ["At tollen snevrer inn markedet, og at rikdommen ligger i varene som produseres, ikke i pengene", "At tollen bør settes enda høyere, siden gull og sølv er det som gjør et land velstående over tid", "At tollen er uten virkning, siden prisene på møbler uansett bestemmes i utlandet av selgerne der", "At tollen bør erstattes av et forbud, siden import alltid gir tap for det landet som kjøper varene"],
      explanation: "Riktig svar er at Smith ville avvist både premisset om at penger er rikdommen og virkningen på markedets størrelse. Distraktorene om enda høyere toll og om forbud gjengir merkantilistiske slutninger og er nære nettopp fordi de følger rådgiverens egen logikk. Smith angriper logikken, ikke bare doseringen.",
    },
  ],
  'svexfac03-4-1': [
    {
      question: "Hva er kjernen i skillet mellom intensive og ekstensive datainnsamlingsstrategier?",
      options: ["Intensive opplegg har få enheter og mange opplysninger om hver, ekstensive har mange enheter og få om hver", "Intensive opplegg studerer mening og motiver, mens ekstensive opplegg alltid studerer atferd og handling", "Intensive opplegg brukes i sosiologi og antropologi, mens ekstensive brukes i økonomi og statsvitenskap", "Intensive opplegg gir sikrere kunnskap, fordi forskeren kontrollerer hele innsamlingen selv fra start"],
      explanation: "Skillet gjelder forholdet mellom antall enheter og antall opplysninger per enhet — ressursene fordeles enten i bredden eller i dybden. Distraktorene fester skillet til tema, til fagfelt eller til kvalitet, og alle tre er vanlige forenklinger: samme tema kan undersøkes begge veier, og ingen av strategiene gir i seg selv sikrere kunnskap.",
    },
    {
      question: "Hva kjennetegner en eksplorerende problemstilling?",
      options: ["Den stilles når feltet er så lite kjent at kategoriene ikke er gitt på forhånd", "Den spør om hvor utbredt et fenomen er i en nærmere avgrenset gruppe mennesker", "Den påstår at én bestemt faktor er årsaken til et mønster som allerede er målt", "Den er formulert så vidt at den kan besvares med alt slags materiale"],
      explanation: "Riktig svar er at den eksplorerende problemstillingen stilles når kategoriene ikke er kjent, og at den derfor krever et fleksibelt opplegg. Å spørre om utbredelse er beskrivende, og å påstå en årsak er forklarende. Svaret om en problemstilling formulert så vidt at alt slags materiale duger, tester en nær misforståelse: eksplorerende betyr ikke uklar, det betyr at kategoriene skal produseres av undersøkelsen.",
    },
    {
      question: "Hva er statistisk generalisering?",
      options: ["En slutning fra utvalget til gruppen det er trukket fra, med usikkerhet som kan beregnes", "En vurdering av om innsikten fra en studie passer i en annen og nokså lignende sammenheng", "En sammenligning av gjennomsnitt mellom to grupper som er målt på samme tidspunkt", "En metode for å øke antallet enheter til et nivå der tilfeldige feil forsvinner helt"],
      explanation: "Riktig svar er slutningen fra utvalg til gruppe med beregnet usikkerhet, og den hviler på hvordan utvalget er trukket. Den andre beskriver overførbarhet, som er en begrunnet vurdering uten tall. Distraktoren om antall enheter tester den vanligste feilen: at størrelse alene skulle gi generaliserbarhet.",
    },
    {
      question: "Hva er riktig om overførbarhet?",
      options: ["Det er en begrunnet vurdering av om innsikten passer et annet sted, ikke en beregning", "Det er et mål på hvor stor andel av utvalget som har svart på hele undersøkelsen", "Det er kravet om at en annen forsker skal kunne gjenta undersøkelsen og få samme svar", "Det er et tall som viser usikkerheten når et funn overføres til en større befolkning"],
      explanation: "Riktig svar er at overførbarhet er en begrunnet vurdering, der forskeren beskriver konteksten og leseren vurderer om innsikten passer. Å gjenta undersøkelsen er reproduserbarhet, og et usikkerhetstall hører til statistisk generalisering. Skillet mellom de to er en av de tydeligste presisjonsmarkørene i metodesvar.",
    },
    {
      question: "Hvorfor er utvalgsskjevhet et alvorligere problem enn tilfeldig feil?",
      options: ["Fordi skjevheten forskyver funnet systematisk, og et større utvalg retter den ikke opp", "Fordi skjevheten alltid oppstår når forskeren selv velger hvem som skal delta i studien", "Fordi tilfeldig feil kan beregnes bort, mens skjevhet bare oppstår i intensive opplegg", "Fordi skjevheten gjør at svarene fra de enkelte deltakerne ikke lenger kan sammenlignes"],
      explanation: "Riktig svar er at skjevhet forskyver funnet systematisk, slik at flere enheter bare gir et mer presist anslag på noe galt. Tilfeldig feil gjør anslaget usikkert, men ikke systematisk skjevt. Distraktoren om intensive opplegg tester en forveksling: skjevhet er nettopp et problem for utvalg som skal bære statistiske slutninger.",
    },
    {
      question: "Hva er hovedpoenget med å skille mellom egengenererte og foreliggende data?",
      options: ["At foreliggende data er laget til et annet formål og derfor må leses med det for øye", "At egengenererte data alltid er mer pålitelige, siden forskeren selv har kontrollert dem", "At foreliggende data bare kan brukes i ekstensive opplegg med svært mange enheter", "At egengenererte data ikke krever samtykke, siden forskeren selv har laget materialet"],
      explanation: "Riktig svar er at foreliggende data er laget til et annet formål, og at dette bestemmer hvilke feilkilder som må drøftes. Egengenererte data er ikke mer pålitelige — de er blitt til i møtet med forskeren. Og foreliggende dokumenter er en helt sentral datakilde også i intensive opplegg.",
    },
    {
      question: "Hva er den beste begrunnelsen for å velge et fleksibelt opplegg med få enheter?",
      options: ["At feltet er lite kartlagt, slik at et fast skjema ville låst svarene til forhåndsantakelser", "At forskeren ønsker å komme tettere på deltakerne og få en rikere forståelse av dem", "At det er vanskelig å få nok deltakere til at en spørreundersøkelse blir representativ", "At intensive opplegg gir dypere innsikt enn ekstensive opplegg gjør i de fleste tilfeller"],
      explanation: "Riktig svar peker på hva opplegget kan bære: uten kjente kategorier vil et fast skjema låse svarene. De tre andre er formuleringer uten innhold eller en nødløsningsbegrunnelse. Særlig den siste er en nær distraktor, fordi den høres faglig ut — men «dypere innsikt» sier ikke hva dybden består i eller hva den brukes til.",
    },
    {
      question: "Hva innebærer det at et intensivt opplegg krever gjennomsiktighet i stedet for reproduserbarhet?",
      options: ["At alle valg underveis skal dokumenteres, slik at veien fra materiale til konklusjon kan følges", "At forskeren skal offentliggjøre hele intervjumaterialet sitt sammen med den ferdige studien", "At studien skal kunne gjentas av andre forskere med nøyaktig samme utvalg og samme guide", "At leseren skal kunne beregne usikkerheten i konklusjonen ut fra antallet deltakere i studien"],
      explanation: "Riktig svar er at valgene skal dokumenteres slik at resonnementet kan etterprøves. Å gjenta studien identisk er reproduserbarhetskravet, som ikke lar seg oppfylle når materialet blir til i et møte. Å offentliggjøre hele materialet ville dessuten kollidere med kravet om konfidensialitet.",
    },
    {
      question: "Hva er metodetriangulering?",
      options: ["At samme problemstilling belyses med flere strategier som dekker hverandres svakheter", "At samme datamateriale analyseres på nytt av tre uavhengige forskere i samme prosjekt", "At forskeren bruker tre ulike utvalg for å øke antallet enheter i den samme undersøkelsen", "At to metoder brukes på hver sin problemstilling innenfor det samme forskningsprosjektet"],
      explanation: "Riktig svar er at flere strategier belyser samme spørsmål, slik at hver dekker den andres svakhet. Svaret om to metoder brukt på hver sin problemstilling er den nære fella: to metoder på to spørsmål er bare to undersøkelser, ikke triangulering. Poenget er uavhengige innganger til samme spørsmål.",
    },
    {
      question: "Hva er galt med begrunnelsen «det kommer an på hva man vil vite» alene?",
      options: ["Den er en overskrift over et svar: den mangler det konkrete spørsmålet og koblingen til opplegget", "Den er faktisk gal, fordi metodevalget følger av hvilke ressurser forskeren har tilgjengelig", "Den er for lang, og tar plass fra redegjørelsesleddet i en oppgave som ber om et kort svar", "Den forutsetter at forskeren har bestemt seg for problemstillingen før datainnsamlingen starter"],
      explanation: "Riktig svar er at setningen er sann, men tom: den sier ikke hvilket spørsmål det gjelder eller hvilken egenskap ved opplegget som gjør at det kan svare. Dette er feil #10, og H2025 beskriver den svake besvarelsen nøyaktig slik. At problemstillingen kommer først er ikke en svakhet ved setningen, men selve fagregelen.",
    },
    {
      question: "Hva er forskjellen mellom et tema og en problemstilling?",
      options: ["Temaet avgrenser interessefeltet, mens problemstillingen avgrenser selve undersøkelsen", "Temaet er formulert av oppdragsgiveren, mens problemstillingen formuleres av forskeren alene", "Temaet er alltid bredere formulert, og problemstillingen er alltid en påstand om årsak", "Temaet hører til intensive opplegg, mens problemstillingen hører til ekstensive opplegg"],
      explanation: "Riktig svar er at temaet avgrenser feltet og problemstillingen avgrenser undersøkelsen. Et tema kan ikke være galt; en problemstilling kan være uforskbar eller for vid. At problemstillingen skulle være en årsakspåstand, er den nære distraktoren — beskrivende og eksplorerende problemstillinger er like fullt problemstillinger.",
    },
    {
      question: "Hva betyr operasjonalisering?",
      options: ["Å oversette et abstrakt begrep til noe som faktisk kan observeres eller måles", "Å beskrive hvordan datainnsamlingen skal gjennomføres praktisk fra dag til dag", "Å definere begrepet presist nok til at det kan skilles fra det nærmeste nabobegrepet", "Å velge hvilke enheter som skal inngå i undersøkelsen, og hvor mange de skal være"],
      explanation: "Riktig svar er oversettelsen fra abstrakt begrep til noe observerbart. Å definere presist er noe annet: to forskere kan dele definisjon og likevel operasjonalisere ulikt, og da måler de ikke det samme. Å velge enheter hører til utvalget, ikke til operasjonaliseringen.",
    },
    {
      question: "Hva er riktig om standardisering i ekstensive opplegg?",
      options: ["Den gjør svarene sammenlignbare, men hindrer deltakerne i å svare noe forskeren ikke forutså", "Den sikrer at utvalget blir representativt for gruppen undersøkelsen skal si noe om", "Den gjør det mulig å justere spørsmålene underveis når feltet viser seg annerledes enn ventet", "Den fjerner behovet for å drøfte frafall, siden alle deltakerne får de samme spørsmålene"],
      explanation: "Riktig svar rommer både styrken og prisen: sammenlignbarhet mot innelukking i forskerens kategorier. Representativitet følger av utvalgstrekningen og ikke av standardiseringen, og justering underveis er nettopp det standardiserte opplegg ikke tåler. Frafall må drøftes uansett.",
    },
    {
      question: "Hva er et strategisk utvalg?",
      options: ["Et utvalg der enhetene velges fordi de kan belyse noe, ikke fordi de speiler en gruppe", "Et utvalg som er trukket tilfeldig innenfor på forhånd fastsatte grupper i befolkningen", "Et utvalg som er så stort at tilfeldige feil ikke lenger påvirker konklusjonen merkbart", "Et utvalg der deltakerne rekrutterer hverandre fordi forskeren mangler tilgang til feltet"],
      explanation: "Riktig svar er at enhetene velges for å belyse noe — de kan være typiske, ytterliggående eller kontrasterende. Et strategisk utvalg er ikke et mislykket representativt utvalg, men et utvalg med et annet formål. Tilfeldig trekning innenfor grupper er en form for sannsynlighetsutvalg, altså noe annet.",
    },
    {
      question: "Hvilken av disse problemstillingene krever et ekstensivt opplegg?",
      options: ["Hvor stor andel av kommunene har innført en fast veiledningsordning for nyansatte?", "Hvordan begrunner ansatte som har sluttet i etaten, avgjørelsen sin i ettertid?", "Hva foregår i en frivillig organisasjon i ukene før den mister medlemsgrunnlaget sitt?", "Hvilke hensyn veier ledere mot hverandre når de skal fordele et knapt budsjett?"],
      explanation: "Riktig svar er spørsmålet om en andel: bare mange enheter med standardiserte opplysninger kan bære en slik slutning. De tre andre spør om begrunnelser, om hva som foregår og om avveininger — alt sammen noe som må rekonstrueres i samtale eller observasjon, og som et fast skjema ville låst.",
    },
    {
      question: "Hva er riktig om nærhet i intensive opplegg?",
      options: ["Nærheten er selve redskapet, men den påvirker situasjonen og skal derfor gjøres rede for", "Nærheten er en feilkilde som skal fjernes ved at forskeren holder seg mest mulig passiv", "Nærheten gjør materialet mer objektivt, fordi forskeren ser hva som faktisk skjer i feltet", "Nærheten har ingen betydning for materialet så lenge deltakerne har samtykket til studien"],
      explanation: "Riktig svar er at nærheten er redskapet og samtidig noe som må gjøres rede for, siden svarene blir til i møtet med denne forskeren. At nærhet skulle gi objektivitet er den nære distraktoren — å se noe selv fjerner ikke forskerens virkning på situasjonen. Samtykke er et etisk krav og løser ikke det metodiske spørsmålet.",
    },
    {
      question: "Hva er den vanligste feilen når et intensivt materiale beskrives?",
      options: ["At funnet omtales som utbredt, altså at intensive data brukes til å bære en fordeling", "At forskeren beskriver konteksten for grundig, slik at leseren mister hovedpoenget", "At materialet analyseres uten at forskeren har gjennomført en prøverunde på forhånd", "At antallet enheter oppgis, noe som gir inntrykk av at materialet skal telles"],
      explanation: "Riktig svar er at intensive data brukes til å si hvor utbredt noe er — det er ekstensivt språk om et intensivt materiale. Grundig kontekstbeskrivelse er tvert imot det som gjør overførbarhet mulig å vurdere, og å oppgi antallet enheter er både vanlig og riktig.",
    },
    {
      question: "Hva skiller en beskrivende fra en forklarende problemstilling?",
      options: ["Den beskrivende spør hva som er tilfellet, den forklarende hvorfor eller hva som fører til hva", "Den beskrivende krever et intensivt opplegg, den forklarende krever et ekstensivt opplegg", "Den beskrivende er alltid enklere å besvare, fordi den ikke krever teori eller begreper", "Den beskrivende gjelder enkelttilfeller, den forklarende gjelder alltid hele befolkninger"],
      explanation: "Riktig svar er skillet mellom hva som er tilfellet og hvorfor. Begge typer kan besvares med begge strategier, alt etter hva slags beskrivelse eller forklaring som etterspørres. At beskrivelse skulle være enkelt, er en nær misforståelse: en presis beskrivelse av hvordan en gruppe forstår situasjonen sin, er krevende arbeid.",
    },
    {
      question: "Hva er hovedgrunnen til at forklarende problemstillinger stiller strengere krav til opplegget?",
      options: ["Fordi andre mulige forklaringer må kunne utelukkes før slutningen kan holde", "Fordi de krever et større utvalg enn beskrivende problemstillinger nødvendigvis gjør", "Fordi de alltid forutsetter at forskeren har en ferdig teori før innsamlingen starter", "Fordi de bare kan besvares med data forskeren selv har samlet inn, ikke med registerdata"],
      explanation: "Riktig svar er kravet om å kunne utelukke andre forklaringer, som er selve grunnen til at betingelsene for en årsaksslutning finnes. Utvalgsstørrelse alene løser ikke dette, og registerdata brukes rutinemessig i forklarende opplegg. Ferdig teori er en fordel, men ikke et krav som skiller de to typene.",
    },
    {
      question: "Hva er riktig om forholdet mellom de to strategiene i pensum?",
      options: ["De er komplementære: de svarer på ulike spørsmål, og ingen er en svakere utgave av den andre", "De er konkurrenter: den ene gir sikker kunnskap, den andre gir hypoteser som må testes senere", "De er identiske i formål, og forskjellen er bare et praktisk spørsmål om tid og ressurser", "De kan aldri kombineres i samme prosjekt, fordi gyldighetskravene deres utelukker hverandre"],
      explanation: "Riktig svar er komplementaritet begrunnet i hva materialene kan bære. Rangeringen i den andre er utbredt, men pensum støtter den ikke. At kombinasjon skulle være umulig er den nære distraktoren: kombinerte opplegg fungerer nettopp fordi hver del beholder sin egen gyldighetslogikk.",
    },
    {
      question: "Hva er et forskningsopplegg?",
      options: ["Den samlede planen for enheter, opplysninger, innsamling og analyse i en undersøkelse", "Den enkelte teknikken som brukes til å samle inn materialet, for eksempel et intervju", "Den teoretiske rammen som problemstillingen utledes fra før undersøkelsen begynner", "Den skriftlige søknaden som må være godkjent før et prosjekt kan settes i gang"],
      explanation: "Riktig svar er helheten: hvilke enheter, hvor mange, hvilke opplysninger, hvordan de skaffes og hvordan de analyseres. Den enkelte teknikken er metoden, og skillet betyr noe: to studier kan bruke intervju og likevel ha helt ulike opplegg, fordi antall enheter og lengde er forskjellig.",
    },
    {
      question: "Hvorfor er «jeg vil gå i dybden» en svak begrunnelse for et metodevalg?",
      options: ["Fordi den sier hva forskeren ønsker, ikke hva spørsmålet krever eller hva dybden brukes til", "Fordi dybde ikke er et faglig begrep, men en dagligspråklig metafor uten dekning i pensum", "Fordi den bare gjelder observasjon, og ikke intervju eller dokumentanalyse som opplegg", "Fordi den alltid brukes av kandidater som ikke har lest metodepensum i det hele tatt"],
      explanation: "Riktig svar er at begrunnelsen går feil vei: den starter i forskerens ønske i stedet for i hva problemstillingen ber om. Dybde er et fullt gangbart faglig begrep — det er bruken uten konkretisering som er problemet, og det er nettopp den H2025 etterlyser.",
    },
    {
      question: "Hva innebærer det at skillet mellom intensive og ekstensive strategier er en akse og ikke to bokser?",
      options: ["At opplegg kan ligge mellom ytterpunktene, slik som et skjema med mange åpne svarfelt", "At forskeren fritt kan bytte strategi underveis så lenge endringen dokumenteres i rapporten", "At de to strategiene måler det samme fenomenet med ulik grad av presisjon i resultatet", "At antall enheter er det eneste som betyr noe, mens opplysningene per enhet er underordnet"],
      explanation: "Riktig svar er at det finnes mellomformer: et skjema med mange åpne felt til mange enheter er ekstensivt i utvalg og gir likevel tekst som må tolkes. Presisjonstanken i den tredje er feil — strategiene måler ikke det samme, de svarer på ulike spørsmål.",
    },
    {
      question: "En studie har intervjuet tolv personer og konkluderer med at holdningen er «utbredt i befolkningen». Hva er feilen?",
      options: ["Konklusjonen bruker et ekstensivt gyldighetsspråk om et materiale som ikke kan bære det", "Konklusjonen mangler et sammenligningsgrunnlag, siden bare én gruppe er blitt intervjuet", "Konklusjonen bygger på for få enheter, og ville holdt dersom antallet ble tredoblet", "Konklusjonen forutsetter en årsakssammenheng som intervjumaterialet ikke kan avdekke"],
      explanation: "Riktig svar er at ordet «utbredt» er en påstand om fordeling, og fordelinger krever et utvalg trukket for det formålet. Å tredoble antallet hjelper ikke, siden problemet ikke er størrelse, men hvordan utvalget er satt sammen og hva slags slutning materialet kan bære.",
    },
  ],
  'svexfac03-4-2': [
    {
      question: "Hva er hovedpoenget pensum trekker ut av Christie-studien?",
      options: ["At problemstillingen bestemmer utvalget, og at sammenligningsgruppen er selve analysegrepet", "At kvalitative studier bør ha flest mulig enheter for at funnene skal kunne generaliseres", "At rettsdokumenter er en sikrere datakilde enn intervjuer når hendelsene ligger langt tilbake", "At forskeren må tilbringe lang tid i feltet før hun kan begynne å samle inn materiale"],
      explanation: "Riktig svar er at utvalget følger av problemstillingen, og at halvparten av utvalget er valgt nettopp fordi de ikke har egenskapen studien handler om. Antallet er ikke poenget, og ingen kildetype rangeres som sikrere — studien bruker flere kilder fordi de dekker hverandres svakheter.",
    },
    {
      question: "Hva er en sammenligningsgruppe i en kvalitativ studie?",
      options: ["Enheter som er valgt inn nettopp fordi de ikke har egenskapen studien handler om", "En gruppe forskere som vurderer materialet uavhengig av hverandre i analysefasen", "Et tilfeldig trukket kontrollutvalg som skal gjøre funnene statistisk generaliserbare", "En gruppe informanter som intervjues en gang til for å bekrefte de første funnene"],
      explanation: "Riktig svar er enheter uten egenskapen, valgt for at forskeren skal kunne se hva som skiller. Gruppen gjør ikke funnene statistisk generaliserbare — utvalget er fortsatt strategisk. Å intervjue på nytt er noe annet enn å bygge en sammenligning inn i utvalget.",
    },
    {
      question: "Hva gir deltakende observasjon som et intervju ikke gir?",
      options: ["Handlinger og mønstre som er blitt så vanlige at ingen forteller om dem", "En sikrere beskrivelse av hva som skjedde, siden forskeren ser det med egne øyne", "Mulighet til å telle hvor ofte en bestemt handling forekommer i løpet av en dag", "Informantenes egne begrunnelser for hvorfor de handler slik de gjør i situasjonen"],
      explanation: "Riktig svar er det vanemessige og selvfølgelige, som sjelden nevnes i en samtale. Begrunnelser er nettopp det intervjuet gir, ikke observasjonen. At forskeren ser noe selv gjør ikke beskrivelsen automatisk sikrere, siden hun også påvirker situasjonen og bare kan være ett sted om gangen.",
    },
    {
      question: "Hva er et strategisk utvalg?",
      options: ["Et utvalg som er satt sammen for å dekke den variasjonen problemstillingen krever", "Et utvalg der deltakerne er trukket tilfeldig fra en liste over alle aktuelle enheter", "Et utvalg som er stort nok til at tilfeldige feil ikke lenger påvirker konklusjonen", "Et utvalg av dem som var tilgjengelige og villige til å delta da studien startet, og som meldte seg selv"],
      explanation: "Riktig svar er dekning av den variasjonen spørsmålet krever. Tilfeldig trekning hører til representative utvalg med et annet formål, og de tilgjengelige og villige utgjør et tilgjengelighetsutvalg — som kan være forsvarlig, men da må begrensningen skrives ut.",
    },
    {
      question: "Hva er riktig om forforståelse?",
      options: ["Den kan ikke fjernes, og kravet er derfor at forskeren selv gjør rede for den", "Den skal elimineres før feltarbeidet starter, slik at observasjonene blir nøytrale", "Den er et annet ord for fordommer, og regnes som en svakhet ved forskeren selv", "Den gjelder bare informantene, som møter forskeren med bestemte forventninger"],
      explanation: "Riktig svar er at forforståelsen er uunngåelig og skal beskrives, ikke fjernes — det er den som gjør at forskeren i det hele tatt ser noe som interessant. Begrepet er analytisk og nøytralt, og det gjelder forskerens egne antakelser.",
    },
    {
      question: "Hvorfor er det en systematisk skjevhet i det folk forteller om egen praksis?",
      options: ["Fordi det å forklare en handling i ettertid nesten alltid er å gjøre den fornuftig", "Fordi informanter som regel ønsker å skjule kritikkverdige forhold for forskeren", "Fordi hukommelsen svikter mer jo lenger tid det har gått siden hendelsen fant sted", "Fordi forskerens spørsmål alltid er formulert slik at de leder mot bestemte svar"],
      explanation: "Riktig svar er at etterrasjonaliseringen er innebygd i det å forklare: praksis beskrives slik den bør være, uten at noen lyver. Bevisst skjuling og ledende spørsmål forekommer, men de er ikke systematiske på samme måte, og hukommelsestap er en annen og mer tilfeldig kilde til feil.",
    },
    {
      question: "Hva er riktig om datakildene i Christie-studien?",
      options: ["Studien bruker rettsdokumenter og fangelitteratur ved siden av selve samtalene", "Studien bygger utelukkende på kvalitative intervjuer med de involverte partene", "Studien bruker registerdata om hele gruppen fangevoktere i de aktuelle leirene", "Studien kombinerer et spørreskjema til alle voktere med noen få dybdesamtaler"],
      explanation: "Riktig svar er at flere kildetyper inngår, og det er nettopp derfor studien er et godt eksempel på at kvalitativ metode ikke er det samme som intervju. Registerdata og spørreskjema hører til ekstensive opplegg og er ikke en del av dette designet.",
    },
    {
      question: "Hva kan et kvalitativt materiale bære ut over de enkelttilfellene som er undersøkt?",
      options: ["Begrunnet overførbarhet, begrepsutvikling og moteksempler mot generelle påstander", "Statistisk generalisering, dersom antallet informanter i utvalget er tilstrekkelig stort", "Ingenting — funnene gjelder bare for dem som faktisk har deltatt i studien", "En beregning av hvor sannsynlig det er at mønsteret finnes i en større gruppe"],
      explanation: "Riktig svar nevner de tre tingene materialet faktisk kan bære. Statistisk generalisering og sannsynlighetsberegning krever et utvalg trukket for det formålet, og antall intervjuer endrer ikke det. At funnene ikke kan brukes videre i det hele tatt, er den motsatte og like unøyaktige ytterligheten.",
    },
    {
      question: "Hva er gjennomsiktighet i en kvalitativ analyse?",
      options: ["At alle valg fra materiale til konklusjon er dokumentert og kan følges av leseren", "At hele intervjumaterialet publiseres sammen med den ferdige studien", "At studien kan gjentas av en annen forsker med samme utvalg og samme guide", "At forskeren oppgir hvor mange informanter som deltok og hvor lenge hvert intervju varte"],
      explanation: "Riktig svar er dokumentasjonen av veien gjennom materialet, som er den kvalitative parallellen til reproduserbarhet. Å publisere hele materialet ville kollidert med konfidensialitetskravet, og å gjenta studien identisk lar seg ikke gjøre når materialet blir til i møter.",
    },
    {
      question: "Hvorfor er tilgang til feltet en metodisk opplysning og ikke bare et praktisk forhold?",
      options: ["Fordi den som åpner døren, former hvordan forskeren blir lest og hva som blir sagt", "Fordi tilgang må være innhentet skriftlig før datainnsamlingen kan begynne", "Fordi tilgangen avgjør hvor mange enheter forskeren rekker å komme gjennom", "Fordi feltet kan trekke tilbake tillatelsen underveis dersom funnene blir ubehagelige"],
      explanation: "Riktig svar er at introduksjonen farger forskerens rolle: er hun introdusert av ledelsen, leses hun ofte som ledelsens utsending, og noe blir da ikke sagt. De andre er reelle forhold, men de handler om praktisk gjennomføring og ikke om hva materialet blir.",
    },
    {
      question: "Hva menes med kontekstforståelse hos Wikan?",
      options: ["At et forhold får sin betydning fra livssammenhengen det inngår i", "At forskeren må kjenne landets historie og politiske utvikling før feltarbeidet kan begynne", "At utsagn skal tolkes i lys av hvem som var til stede da de ble sagt", "At funn fra ett felt bare kan overføres til felt med samme kulturelle bakgrunn"],
      explanation: "Riktig svar er at forholdet må forstås i sammenhengen det leves i, ikke som en isolert egenskap ved enkeltpersoner. Å tolke utsagn i lys av situasjonen er kontekstualisering, som er et beslektet, men snevrere grep i selve analysen.",
    },
    {
      question: "Hva bestemmer utvalgsstørrelsen i et intensivt opplegg?",
      options: ["Hvilken variasjon problemstillingen krever, veid mot dybden ressursene tillater", "En fast tommelfingerregel om at mellom ti og femten informanter er tilstrekkelig", "Beregningen av hvor stor usikkerhet forskeren er villig til å akseptere i anslaget", "Hvor mange informanter forskeren klarer å rekruttere innenfor prosjektperioden og budsjettet"],
      explanation: "Riktig svar er dekningen av variasjon veid mot dybde. Usikkerhetsberegning hører til ekstensive opplegg, og en fast regel finnes ikke — antallet skal begrunnes. Hvor mange som lar seg rekruttere er en praktisk skranke, ikke et faglig kriterium.",
    },
    {
      question: "Hva skiller et kvalitativt intervju fra en spørreundersøkelse?",
      options: ["Spørsmålene er forskerens i begge, men i intervjuet er også svarene informantens", "Intervjuet varer lenger, og gir derfor mer utfyllende svar på de samme spørsmålene", "Intervjuet gjennomføres ansikt til ansikt, mens undersøkelsen sendes ut skriftlig", "Intervjuet gir forståelse, mens spørreundersøkelsen bare gir tall uten mening bak"],
      explanation: "Riktig svar er graden av standardisering: i undersøkelsen er også svarkategoriene forskerens. Varighet og kanal er ikke det avgjørende, og påstanden om at spørreundersøkelsen bare gir tall uten mening bak, er en stråmann — et skjema gir fordelinger av kategorier fastsatt på forhånd, ikke meningsløse tall.",
    },
    {
      question: "Hva er en riktig innvending mot å bruke foreliggende dokumenter som datakilde?",
      options: ["Dokumentet er skrevet med et formål, og kan ikke spørres om det det ikke omtaler", "Dokumentet er farget av forskerens egen tilstedeværelse i det øyeblikket det ble skrevet", "Dokumenter kan ikke brukes i kvalitative studier, bare i kvantitative analyser", "Dokumenter er alltid eldre enn intervjumateriale og derfor mindre relevante"],
      explanation: "Riktig svar er at dokumentet er en handling med et formål, og at taushet i et dokument er vanskelig å tolke. Nettopp fordi det ble skrevet uavhengig av forskeren, er det ikke farget av hennes tilstedeværelse — det er kildens styrke, ikke svakhet.",
    },
    {
      question: "Hva er feltnotatets to lag?",
      options: ["Beskrivelsen av det som skjedde, og forskerens egne tolkninger av det", "Det som ble sagt høyt, og det forskeren fikk vite i fortrolighet etterpå", "Notatene fra første besøk, og de oppdaterte notatene fra senere besøk", "Det forskeren skrev underveis, og det hun renskrev til publiseringsformål"],
      explanation: "Riktig svar er beskrivelse og tolkning, som skal holdes fra hverandre i notatet for at de skal kunne skilles i analysen. De andre er reelle skiller i praktisk feltarbeid, men de er ikke det som gjør notatet etterprøvbart.",
    },
    {
      question: "En student vil undersøke hva som skiller studenter som fullfører på normert tid fra dem som ikke gjør det, og intervjuer ti som fullførte. Hva er hovedproblemet?",
      options: ["Uten den andre gruppen kan ingen egenskap hun finner, vise seg å være det som skiller", "Ti informanter er for få til at funnene kan overføres til andre studenter ved lærestedet", "Intervju er feil metode for spørsmålet, som burde vært besvart med registerdata", "Hun har ikke gjort rede for sin egen forforståelse før datainnsamlingen startet"],
      explanation: "Riktig svar er at sammenligningen mangler: enhver egenskap hos dem som fullførte, kan like gjerne finnes hos dem som ikke gjorde det. Å øke antallet i samme gruppe løser ingenting, og intervju er en helt rimelig inngang til spørsmålet så lenge utvalget rettes opp.",
    },
    {
      question: "Hva er riktig om forskerens rolle i feltet?",
      options: ["Rollen tildeles i stor grad av feltet selv, og påvirker hva forskeren får tilgang til", "Rollen velges av forskeren på forhånd og bør holdes uendret gjennom hele feltarbeidet", "Rollen er uten betydning så lenge deltakerne har gitt informert samtykke til studien", "Rollen er en feilkilde som fjernes ved at forskeren observerer uten å delta i noe"],
      explanation: "Riktig svar er at feltet tildeler rollen og at den kan endre seg over tid. Å observere uten å delta fjerner ikke virkningen av å være til stede, det skjuler den bare. Samtykke løser et etisk spørsmål, ikke et metodisk.",
    },
    {
      question: "Hva er et tilgjengelighetsutvalg?",
      options: ["Et utvalg av dem som var lettest å få tak i, uten et kriterium knyttet til spørsmålet", "Et utvalg trukket tilfeldig blant alle dem som på forhånd har sagt seg villige til å delta", "Et utvalg som er satt sammen for å dekke de posisjonene problemstillingen krever", "Et utvalg der informantene rekrutterer hverandre fordi feltet er vanskelig å nå"],
      explanation: "Riktig svar er de lettest tilgjengelige, uten kriterium. Det kan være forsvarlig av praktiske grunner, men da må begrensningen skrives ut, siden de lettest tilgjengelige ofte skiller seg systematisk fra de øvrige. Å dekke posisjoner er et strategisk utvalg.",
    },
    {
      question: "Hvorfor er utvalget beskrevet som stedet analysen begynner?",
      options: ["Fordi hvem som velges og hva de settes opp mot, avgjør hva materialet kan svare på", "Fordi rekrutteringen tar mest tid og derfor må planlegges før alt annet i prosjektet", "Fordi antallet informanter avgjør hvor sikre konklusjonene i studien kan bli", "Fordi forskeren allerede under rekrutteringen får sine første inntrykk av feltet"],
      explanation: "Riktig svar er at utvalgssammensetningen binder hvilke slutninger som er mulige — før noen er intervjuet. Det siste er sant, men er et biprodukt. Antallet er ikke det avgjørende: et større utvalg uten sammenligning svarer fortsatt ikke på hva som skiller.",
    },
    {
      question: "Hva menes med at et kvalitativt design bør skrives som en kjede?",
      options: ["At problemstillingen begrunner enhetene, som begrunner sammenligningen og datakildene", "At datainnsamlingen skjer i faste trinn som må gjennomføres i nøyaktig riktig rekkefølge", "At hvert intervju bygger videre på temaene som kom opp i det forrige intervjuet", "At analysen følger materialet kronologisk fra første til siste feltbesøk"],
      explanation: "Riktig svar er begrunnelseskjeden fra spørsmål til valg, som er nettopp det en designoppgave etterspør. De andre beskriver praktisk gjennomføring eller analyseform, ikke begrunnelsen for designet.",
    },
    {
      question: "Hva er riktig om kombinasjonen av observasjon og intervju i samme studie?",
      options: ["Den er begrunnet når problemstillingen rommer både en handling og en begrunnelse", "Den er alltid å foretrekke, siden to metoder gir mer materiale enn én metode gjør", "Den er bare mulig dersom de samme personene både observeres og intervjues", "Den brukes når forskeren er usikker på hvilken av metodene som passer best"],
      explanation: "Riktig svar knytter kombinasjonen til hva problemstillingen ber om: «håndterer» peker mot observasjon, «veier hensyn» mot intervju. Mer materiale er ikke i seg selv en begrunnelse, og usikkerhet om metodevalg er nettopp det som skal ryddes bort før innsamlingen.",
    },
    {
      question: "Hva er den beste måten å skrive et forbehold om hva et design ikke fanger?",
      options: ["Å peke konkret på hvem eller hva som faller utenfor, og hvorfor de gjør det", "Å opplyse at utvalget er lite, og at funnene derfor må tolkes med forsiktighet", "Å understreke at kvalitative studier aldri kan gi sikker kunnskap om et felt", "Å oppgi hvor mange som takket nei til å delta, uten å kommentere det videre"],
      explanation: "Riktig svar er det konkrete forbeholdet, for eksempel at tilgangen gikk gjennom ledelsen og at de mest kritiske derfor er underrepresentert. «Utvalget er lite» er en frase som gjelder ethvert intensivt opplegg og derfor ikke sier noe om denne studien.",
    },
  ],
  'svexfac03-4-3': [
    {
      question: "Hva er en metodeforklaring på et funn?",
      options: ["At mønsteret skyldes hvordan undersøkelsen ble gjort, ikke forhold i verden", "At mønsteret skyldes en bakenforliggende tredje faktor som påvirker begge de to forholdene", "At mønsteret skyldes at forskeren har valgt en uegnet metode for problemstillingen", "At mønsteret skyldes tilfeldig variasjon som forsvinner med et større utvalg"],
      explanation: "Riktig svar er at funnet er et trekk ved målingen: spørsmålets formulering, hvem som svarte, kategoriseringen eller valget av statistisk mål. En tredje faktor bak begge er spuriøsitet, som er noe annet, og tilfeldig variasjon er usikkerhet og ikke en metodeforklaring.",
    },
    {
      question: "Hvorfor skal metodeforklaringer prøves før substansielle forklaringer?",
      options: ["Fordi et funn som skyldes selve målingen, ikke kan bære noen konklusjon om verden", "Fordi metodeforklaringer erfaringsmessig er de mest sannsynlige i samfunnsforskning", "Fordi substansielle forklaringer krever teori, som ikke alltid er tilgjengelig", "Fordi et funn som skyldes målingen, gjelder for et mindre utvalg enn det oppgitte"],
      explanation: "Riktig svar er at et måleartefakt ikke kan bære noen konklusjon i det hele tatt, uansett hvor interessant den ville vært. Rekkefølgen handler ikke om hvilken forklaring som er mest sannsynlig, og et artefakt gjelder ikke for et mindre utvalg — det gjelder ikke som funn om verden overhodet.",
    },
    {
      question: "Hva kjennetegner et ledende spørsmål?",
      options: ["Det inneholder, antyder eller forutsetter allerede det svaret man vil ha", "Det er formulert med fagord som mange av deltakerne ikke forstår, slik at de gjetter seg til et svar", "Det tvinger deltakeren til å velge mellom to alternativer som begge er negative", "Det stilles til slutt i undersøkelsen, når deltakeren er blitt sliten av å svare"],
      explanation: "Riktig svar er at svaret er bygd inn, ofte gjennom en begrunnelse som følger med eller et premiss som tas for gitt. Vanskelige fagord gir tilfeldig støy, ikke en skjevhet med retning, og plassering til slutt er en rekkefølgevirkning.",
    },
    {
      question: "Hva er hovedproblemet med å lese «åtte av ti er fornøyd» uten mer informasjon?",
      options: ["Prosenten er regnet av dem som svarte, og de ligner ikke nødvendigvis de øvrige", "Prosenten kan være avrundet, slik at det reelle tallet ligger nærmere sju av ti", "Prosenten sier ingenting om hvor sterkt de fornøyde faktisk er fornøyde", "Prosenten skjuler at gjennomsnitt og median kan gi ulike inntrykk av materialet"],
      explanation: "Riktig svar er valget av grunnlag: hvem prosenten er regnet av. Avrunding er et spørsmål om presisjon og ikke om hvem tallet gjelder for, og gjennomsnitt mot median er et annet av Helleviks punkter, som ikke gjelder en enkel andel.",
    },
    {
      question: "Hva er forskjellen på statistisk usikkerhet og skjevhet?",
      options: ["Usikkerheten krymper når utvalget vokser, mens skjevheten bare blir mer presist målt", "Usikkerhet oppstår i utvalget, mens skjevhet alltid oppstår i spørsmålsformuleringen", "Usikkerhet gjelder kvantitative opplegg, mens skjevhet også gjelder kvalitative opplegg", "Usikkerhet kan beregnes på forhånd, mens skjevhet først kan oppdages etter innsamlingen"],
      explanation: "Riktig svar er at bare den ene formen for feil lar seg redusere med flere enheter. Skjevhet kan oppstå både i utvalget og i målingen, og den kan ofte forutses før innsamlingen — for eksempel når rekrutteringen går gjennom en kanal som ikke når alle.",
    },
    {
      question: "Hva er en spuriøs sammenheng?",
      options: ["En sammenheng som forsvinner når et tredje forhold bak begge holdes fast", "En sammenheng som er så svak at den ikke er større enn den statistiske usikkerheten", "En sammenheng som går motsatt vei av det forskeren har antatt på forhånd", "En sammenheng som bare finnes i utvalget og ikke i den gruppen det er trukket fra"],
      explanation: "Riktig svar er den tredje faktoren bak begge. En spuriøs sammenheng kan være meget sterk — styrken sier ingenting om årsak, og det er nettopp derfor feil #13 er så vanlig. At retningen er motsatt er et annet krav, nemlig årsaksretning.",
    },
    {
      question: "Hva er sosialt ønskelige svar?",
      options: ["At deltakeren svarer det som er akseptabelt, snarere enn det hun faktisk gjør", "At deltakeren svarer det hun tror forskeren ønsker å høre om sin egen hypotese", "At deltakeren unnlater å svare på spørsmål som oppleves som for nærgående, og hopper videre i skjemaet", "At intervjueren tolker et uklart svar i den retningen som passer undersøkelsen"],
      explanation: "Riktig svar er tilpasningen til hva som er respektabelt, og den er en normal sosial reaksjon, ikke uærlighet. Å tolke uklare svar er intervjuereffekt, som oppstår hos den som spør, mens sosialt ønskelige svar oppstår hos den som svarer.",
    },
    {
      question: "Hvorfor er svarprosenten en av de viktigste opplysningene om en undersøkelse?",
      options: ["Fordi frafallet sjelden er tilfeldig, og de som mangler, skiller seg fra resten", "Fordi en høy svarprosent gjør at tilfeldig usikkerhet forsvinner helt fra anslaget", "Fordi svarprosenten viser hvor godt spørsmålene var formulert av forskeren, og dermed kvaliteten på skjemaet", "Fordi kravet til svarprosent avgjør om undersøkelsen kan publiseres i et tidsskrift"],
      explanation: "Riktig svar er at frafallet er systematisk skjevt etter alder, interesse for temaet og tilgang til kanalen. Høy svarprosent fjerner ikke tilfeldig usikkerhet, som følger av utvalgsstørrelsen, og en lav svarprosent kan skyldes mye annet enn dårlige spørsmål.",
    },
    {
      question: "Hva betyr det at et statistisk mål ikke er et nøytralt valg?",
      options: ["To korrekt beregnede mål på samme materiale kan gi motsatte inntrykk", "Målene er beregnet på ulike måter, og minst ett av dem vil derfor være regnet feil", "Valget av mål avgjør hvor stor den statistiske usikkerheten i anslaget blir", "Målene forutsetter ulike utvalgsstørrelser, og små utvalg tåler bare andeler"],
      explanation: "Riktig svar er at gjennomsnitt og median kan peke i hver sin retning uten at noe er regnet galt — spørsmålet er hvilket mål som svarer på spørsmålet som ble stilt. Dette handler ikke om regnefeil eller om utvalgsstørrelse.",
    },
    {
      question: "Når er en påstand om metodeartefakt holdbar?",
      options: ["Når den peker på et konkret forhold ved målingen og sier hvilken vei det trekker", "Når forskeren selv har erkjent at undersøkelsen har metodiske svakheter", "Når funnet avviker fra det man ville forventet ut fra tidligere forskning på feltet", "Når undersøkelsen er gjennomført av noen med interesse i resultatet"],
      explanation: "Riktig svar er kravet om konkretisering og retning, som gjør innvendingen etterprøvbar. Et avvik fra forventning er ikke i seg selv en metodeforklaring, og oppdragsgiverens interesse er et spørsmål om uavhengighet, ikke om måling.",
    },
    {
      question: "Hva er rekkefølgevirkning i et spørreskjema?",
      options: ["At svaret på et spørsmål påvirkes av hvilke spørsmål som kom rett før det", "At deltakerne blir mindre nøyaktige jo lenger ut i skjemaet de kommer, fordi de blir slitne av å svare", "At spørsmål plassert til slutt oftere står ubesvart enn spørsmål plassert først", "At forskeren endrer rekkefølgen underveis når skjemaet viser seg å fungere dårlig"],
      explanation: "Riktig svar er at sammenstillingen påvirker svaret selv når hvert spørsmål er nøytralt formulert. Nettopp derfor holder det ikke å lese spørsmålene ett for ett. Trøtthet og ubesvarte spørsmål er reelle problemer, men de er noe annet.",
    },
    {
      question: "Hva er intervjuereffekt?",
      options: ["At den som stiller spørsmålene, påvirker svarene og kategoriseringen av dem", "At deltakeren tilpasser svaret sitt til det hun tror er sosialt akseptabelt", "At forskeren tolker materialet i lys av sin egen forforståelse i analysefasen", "At intervjuene blir stadig bedre etter hvert som intervjueren får mer erfaring"],
      explanation: "Riktig svar er virkningen fra den som spør, og den er størst der frie svar må plasseres i kategorier. Tilpasning til det akseptable er sosialt ønskelige svar, som oppstår hos den som svarer, og forforståelse gjelder analysen.",
    },
    {
      question: "Hva er problemet med et spørsmål som «Bør kommunen bruke mer på skole og mindre på kultur?»",
      options: ["Det spør om to ting samtidig, og den som er delvis enig kan ikke svare presist", "Det er ledende, siden det antyder at kommunen bruker for lite på skole i dag", "Det mangler et vet ikke-alternativ, slik at de uten mening må velge noe", "Det bruker ord som forstås ulikt av ulike grupper av deltakere i undersøkelsen"],
      explanation: "Riktig svar er at spørsmålet er dobbelt: den som vil bruke mer på begge deler, har ikke noe svar som passer. De andre er reelle problemer i andre spørsmål, men de er ikke det som er galt her — feilen ligger i at to standpunkter tvinges sammen.",
    },
    {
      question: "Hva innebærer det at Helleviks krav og kravene til en årsaksslutning er to porter etter hverandre?",
      options: ["En dårlig måling kan ikke reddes av kontroll, og en god måling kan gi spuriøsitet", "En god måling er tilstrekkelig for å kunne trekke en velbegrunnet årsaksslutning, uten videre kontroll", "Kravene til måling gjelder kvantitative opplegg, mens årsakskravene gjelder alle opplegg", "Kravene må oppfylles samtidig, siden begge gjelder det samme trinnet i undersøkelsen"],
      explanation: "Riktig svar viser at portene er uavhengige og kommer i rekkefølge: faller målingen, er årsaksspørsmålet uten gjenstand, men en perfekt måling garanterer ingen årsak. V2021 honorerer uttrykkelig den som ser dette overlappet.",
    },
    {
      question: "Hva er hovedinnvendingen mot en undersøkelse med selvrekrutterte deltakere?",
      options: ["De som har sterke meninger om saken, har klart mest grunn til å delta", "De vet ikke hvem som står bak undersøkelsen, og svarer derfor mindre presist", "De er som regel færre enn i et trukket utvalg, slik at usikkerheten blir stor", "De kan ikke kontrolleres for alder og kjønn, og materialet kan derfor ikke vektes"],
      explanation: "Riktig svar er selvseleksjonen, som gir en skjevhet med kjent retning i saker der engasjement varierer. Antallet er ikke problemet — et selvrekruttert utvalg på ti tusen har samme skjevhet som ett på tusen.",
    },
    {
      question: "Hva er riktig om svaralternativenes utforming?",
      options: ["Fravær av vet ikke tvinger de meningsløse til å velge, slik at støy ser ut som standpunkt", "Et midtpunkt på skalaen gjør målingen mer nøyaktig, siden flere finner et svar som passer", "Antall trinn på skalaen har ingen betydning så lenge trinnene er navngitt likt", "Alternativene bør formuleres av deltakerne selv, slik at kategoriene blir deres egne"],
      explanation: "Riktig svar er at fraværet av et vet ikke-alternativ produserer tilsynelatende standpunkter. Et midtpunkt gjør ikke målingen mer nøyaktig — mange bruker det for å slippe å ta stilling. At deltakerne formulerer kategoriene, ville opphevet standardiseringen.",
    },
    {
      question: "Hva menes med at operasjonalisering av holdninger er stedet flest feil oppstår?",
      options: ["En holdning rommer ofte flere standpunkter, som ett spørsmål tvinger sammen", "Holdninger endrer seg over tid, slik at målingen er utdatert før den publiseres", "Holdninger kan ikke måles i det hele tatt, og bør derfor undersøkes med intervju", "Holdninger er private, og deltakerne har derfor ingen plikt til å svare ærlig"],
      explanation: "Riktig svar er at oversettelsen fra et sammensatt begrep til ett spørsmål er der presisjonen går tapt. At holdninger ikke kan måles i det hele tatt, er den motsatte ytterligheten — de kan måles, men målingen må dokumenteres og helst bestå av flere spørsmål.",
    },
    {
      question: "En undersøkelse viser at ansatte i avdeling A er mer fornøyde enn i avdeling B. Skjemaet i A ble besvart på et fellesmøte med lederen til stede. Hva er dette?",
      options: ["En metodeforklaring, siden svarsituasjonen trekker mot sosialt ønskelige svar", "En substansiell forklaring, siden ledelsen i A tydeligvis er tettere på de ansatte", "En spuriøs sammenheng, siden avdelingstilhørighet påvirker både trivsel og svar", "En tilfeldig feil, siden det varierer hvem som møter opp på et fellesmøte, og feilen jevner seg ut"],
      explanation: "Riktig svar er at innsamlingssituasjonen er ulik, og at forskjellen derfor kan være et trekk ved målingen. Skjevheten har kjent retning: å svare mens lederen ser på, trekker mot det akseptable. Dette er ikke tilfeldig variasjon, siden virkningen går samme vei for alle i den avdelingen.",
    },
    {
      question: "Hva er den beste måten å formulere en metodisk innvending i en besvarelse?",
      options: ["Pek på ett konkret forhold, og si om det gjør tallet for høyt eller for lavt", "List opp de fire kontrollpunktene, og nevn at alle er relevante for undersøkelsen", "Slå fast at slike undersøkelser er usikre, og at tallet derfor må tolkes med varsomhet", "Vis til at utvalget er lite, siden det er den innvendingen som alltid kan framsettes"],
      explanation: "Riktig svar er den konkrete og retningsbestemte innvendingen, som er etterprøvbar. Oppramsing av kontrollpunkter er breddekunnskap, og den måles et annet sted på eksamen. De to siste er formuleringer som passer på enhver undersøkelse og sier derfor ingenting om denne.",
    },
    {
      question: "Hva er årsaksretning som krav?",
      options: ["Kravet om at det som utpekes som årsak, faktisk kom før den antatte virkningen", "Kravet om at sammenhengen skal ha samme styrke i alle undergrupper av utvalget", "Kravet om at forskeren har en teori som forklarer hvorfor sammenhengen finnes", "Kravet om at sammenhengen skal kunne gjenfinnes i et nytt og uavhengig utvalg"],
      explanation: "Riktig svar er rekkefølgen i tid og logikk. I et materiale samlet inn på ett tidspunkt er retningen ofte avgjort av teorien og ikke av dataene, og det skal i så fall stå. Gjenfinning i nytt utvalg er et annet og selvstendig krav.",
    },
    {
      question: "Hvorfor er «etter din mening» ingen løsning på et ledende spørsmål?",
      options: ["Fordi formuleringen flytter ansvaret uten å fjerne premisset som er bygd inn", "Fordi formuleringen gjør spørsmålet lengre, og lange spørsmål gir mer frafall", "Fordi formuleringen bare kan brukes i intervju, ikke i et skriftlig skjema", "Fordi formuleringen signaliserer at forskeren selv har en mening om saken"],
      explanation: "Riktig svar er at tillegget ikke rører ved det innebygde premisset eller den ladede formuleringen — det gjør bare spørsmålet mer høflig. Lengden på spørsmålet er ikke poenget her.",
    },
    {
      question: "Hva kan et funn om at to formuleringer gir svært ulike svarfordelinger, brukes til?",
      options: ["Å vise at oppslutningen avhenger av hvordan saken rammes inn i spørsmålet", "Å fastslå hvilken av de to formuleringene som gir det sanne bildet av holdningene", "Å beregne hvor stor den tilfeldige usikkerheten i den opprinnelige målingen var", "Å avvise begge målingene, siden de umulig kan være riktige på samme tid, og måle holdningen på nytt"],
      explanation: "Riktig svar er at forskjellen selv er et funn om verden: innrammingen betyr noe. Ingen av formuleringene gir et sant bilde uavhengig av spørsmålet, og å avvise begge ville kaste bort nettopp den innsikten sammenligningen gir.",
    },
  ],
  'svexfac03-4-4': [
    {
      question: "Hva er de tre betingelsene for en velbegrunnet årsaksslutning?",
      options: ["Samvariasjon, riktig årsaksretning og kontroll for tredje variabel", "Representativt utvalg, høy svarprosent og et tilstrekkelig stort datamateriale", "Samvariasjon, statistisk signifikans og en teoretisk forankret problemstilling", "Riktig operasjonalisering, nøytral spørsmålsformulering og etterprøvbar analyse"],
      explanation: "Riktig svar er Tuftes tre krav, som er selvstendige og alle må være oppfylt. De andre alternativene nevner reelle kvalitetskrav, men de hører til målingen og utvalget — altså til porten før denne, og de gjør ingen sammenheng til en årsak.",
    },
    {
      question: "Hvorfor er samvariasjon alene ikke nok til å påvise en årsak?",
      options: ["Fordi samvariasjon er symmetrisk og derfor ikke kan bære en usymmetrisk påstand", "Fordi samvariasjon bare kan måles i utvalg og aldri i hele den aktuelle gruppen", "Fordi samvariasjon forutsetter at begge forhold er målt på samme tidspunkt", "Fordi samvariasjon krever et større datamateriale enn de to andre kravene gjør"],
      explanation: "Riktig svar er symmetrien: at A henger sammen med B er nøyaktig samme utsagn som at B henger sammen med A, mens en årsakspåstand peker én vei. De andre er tekniske forhold som ikke berører selve logikken i slutningen.",
    },
    {
      question: "Hva er en bakenforliggende variabel?",
      options: ["Et forhold som påvirker både den antatte årsaken og den antatte virkningen", "Et forhold som ligger mellom årsak og virkning, slik at årsaken virker gjennom det", "Et forhold som forsterker sammenhengen i noen grupper og svekker den i andre", "Et forhold som er målt før datainnsamlingen og derfor kan brukes som utgangspunkt"],
      explanation: "Riktig svar er forholdet som ligger før begge i kjeden. Det som ligger mellom, er en mellomliggende variabel, og forskjellen er avgjørende: å kontrollere for et mellomledd skjuler en ekte virkning i stedet for å avsløre en falsk.",
    },
    {
      question: "En sammenheng forsvinner når man kontrollerer for et tredje forhold. Hva betyr det?",
      options: ["Det kan bety spuriøsitet, at forholdet var et mellomledd, eller at materialet ble for lite", "Det betyr at sammenhengen var spuriøs, og at det ikke finnes noen årsakssammenheng", "Det betyr at kontrollvariabelen var feil valgt, siden en ekte sammenheng ville bestått", "Det betyr at den antatte årsaken virker, men bare i noen av gruppene i materialet"],
      explanation: "Riktig svar er at tre helt ulike ting kan gi samme regnestykke. Var forholdet et mellomledd, har man nettopp vist hvordan årsaken virker. De tre kan ikke skilles ved å regne mer — de skilles ved rekkefølgen i tid og ved teori.",
    },
    {
      question: "Hva gjør den tilfeldige fordelingen i et eksperiment?",
      options: ["Den gjør gruppene like i gjennomsnitt på alt annet, også på forhold ingen har målt", "Den sikrer at utvalget blir representativt for den gruppen studien skal si noe om", "Den fjerner den statistiske usikkerheten, slik at små forskjeller blir tolkbare", "Den gjør at deltakerne ikke vet hvilken gruppe de er plassert i under forsøket"],
      explanation: "Riktig svar er at krav 3 blir oppfylt ved konstruksjon, siden også de uobserverte forholdene fordeler seg jevnt. Representativitet følger av hvordan deltakerne ble rekruttert, ikke av fordelingen mellom gruppene, og usikkerheten forsvinner ikke.",
    },
    {
      question: "Hva er seleksjon som problem?",
      options: ["At de som velger eller får tiltaket, skiller seg fra de andre på noe som påvirker utfallet", "At forskeren velger ut hvilke enheter som skal inngå i undersøkelsen, uten trekning", "At noen av deltakerne faller fra underveis, slik at gruppene blir ulikt store til slutt", "At utvalget ikke speiler gruppen undersøkelsen skal si noe om, på viktige egenskaper"],
      explanation: "Riktig svar gjelder hvem som havner i hvilken gruppe inne i undersøkelsen. Påstanden om at utvalget ikke speiler gruppen, beskriver utvalgsskjevhet, som gjelder hvem som er med i det hele tatt — en studie kan ha et perfekt utvalg og likevel full seleksjon mellom gruppene.",
    },
    {
      question: "Hva er overkontroll?",
      options: ["Å holde fast et mellomledd, slik at en ekte virkning forsvinner fra tallene", "Å kontrollere for så mange variabler at datamaterialet blir for lite til analysen", "Å gjennomføre kontrollen på nytt i flere utvalg for å være sikker på resultatet", "Å velge kontrollvariabler ut fra hvilke opplysninger som tilfeldigvis er samlet inn"],
      explanation: "Riktig svar er at man fjerner nettopp den veien årsaken virker gjennom, og konklusjonen blir gal på en måte som ser forsvarlig ut. Poenget er at «kontroller for alt du har» ikke er et ideal — valget må begrunnes faglig.",
    },
    {
      question: "Hva kjennetegner en robust avhengighet?",
      options: ["Sammenhengen holder stort sett, på tvers av utvalg og tidsrom, men ikke uten unntak", "Sammenhengen er så sterk at den ikke kan forklares av en tredje bakenforliggende faktor", "Sammenhengen er bekreftet i et eksperiment med tilfeldig fordeling mellom gruppene", "Sammenhengen gjelder for hver enkelt person i gruppen, men med ulik styrke for hver"],
      explanation: "Riktig svar er at den holder på tvers uten å være unntaksfri. Styrke er noe annet enn robusthet, og robusthet er ikke det samme som eksperimentelt bevist. At den skulle gjelde hver enkelt person, er nettopp det en probabilistisk sammenheng ikke sier.",
    },
    {
      question: "Hva sier den deduktivt-nomologiske modellen at en forklaring er?",
      options: ["At fenomenet kan utledes av generelle lover sammen med de konkrete betingelsene", "At fenomenet kan beskrives trinn for trinn fra den utløsende årsaken til utfallet", "At fenomenet kan forutsis av en modell som er bygget på tidligere observasjoner", "At fenomenet kan forstås ut fra hensiktene til de menneskene som var involvert"],
      explanation: "Riktig svar er utledningen fra lov og initialbetingelser. Å beskrive trinnene er mekanismeforklaring, som er en reaksjon på nettopp det denne modellen mangler, og hensikter hører til formålsforklaring — begge behandles i kapitlet om forklaringstyper.",
    },
    {
      question: "Hva betyr symmetrien mellom forklaring og forutsigelse?",
      options: ["At det er samme resonnement brukt i hver sin tidsretning, før eller etter utfallet", "At en forklaring er like sikker som en forutsigelse når den bygger på samme data", "At både forklaring og forutsigelse krever et representativt utvalg for å være gyldige", "At en forutsigelse må bekreftes før forklaringen den bygger på kan regnes som gyldig"],
      explanation: "Riktig svar er at loven og betingelsene brukes likt begge veier. Symmetrien er svak i samfunnsvitenskapen, blant annet fordi initialbetingelsene sjelden er fullstendig kjent på forhånd — og det er en presis observasjon, ikke en unnskyldning.",
    },
    {
      question: "Hva er en nødvendig betingelse?",
      options: ["Et forhold som må være til stede for at utfallet skal kunne inntreffe", "Et forhold som garanterer at utfallet inntreffer når det først er til stede", "Et forhold som gjør utfallet mer sannsynlig uten å avgjøre det for den enkelte", "Et forhold som må kontrolleres for før en årsaksslutning kan regnes som gyldig"],
      explanation: "Riktig svar er at utfallet er utelukket uten den, selv om den ikke er nok alene. Å garantere utfallet er å være tilstrekkelig, og å gjøre det mer sannsynlig er en probabilistisk årsak — de tre er ulike ting.",
    },
    {
      question: "Hva er hovedforskjellen på en deterministisk og en probabilistisk sammenheng?",
      options: ["Ett moteksempel feller den deterministiske, mens den probabilistiske forventer unntak", "Den deterministiske er målt i eksperiment, mens den probabilistiske bygger på et utvalg", "Den deterministiske gjelder grupper, mens den probabilistiske gjelder enkeltpersoner", "Den deterministiske er sterkere korrelert enn den probabilistiske i det samme materialet"],
      explanation: "Riktig svar er hvordan de forholder seg til unntak. Påstanden om at den deterministiske gjelder grupper, snur forholdet: det er nettopp den probabilistiske sammenhengen som sier noe om grupper og lite om det enkelte tilfellet.",
    },
    {
      question: "Hvorfor kan et tverrsnitt sjelden bære en påstand om årsaksretning?",
      options: ["Fordi opplysningene er samlet inn samtidig, slik at rekkefølgen må hvile på teori", "Fordi utvalget i et tverrsnitt sjelden er stort nok til at forskjeller blir tolkbare", "Fordi et tverrsnitt ikke gir mulighet til å kontrollere for bakenforliggende forhold", "Fordi deltakerne i et tverrsnitt husker feil når de skal beskrive tidligere hendelser"],
      explanation: "Riktig svar er at rekkefølgen ikke ligger i dataene når alt er målt på ett tidspunkt. Kontroll for tredje variabel er fullt mulig i et tverrsnitt — det er krav 2, ikke krav 3, som er problemet her.",
    },
    {
      question: "Hva er den mest presise formen for en innvending om spuriøsitet?",
      options: ["Å navngi et forhold som kunne frembrakt både den antatte årsaken og virkningen", "Å påpeke at det alltid kan finnes andre forklaringer enn den forskeren foreslår", "Å vise til at sammenhengen er svakere enn det som kreves for en årsaksslutning", "Å be om at undersøkelsen gjentas i et nytt utvalg før konklusjonen kan godtas"],
      explanation: "Riktig svar er den navngitte tredje faktoren, som gjør innvendingen etterprøvbar. Den generelle påstanden om at andre forklaringer kan finnes, passer på enhver studie og sier derfor ingenting om denne.",
    },
    {
      question: "Hva er riktig om styrken i en sammenheng?",
      options: ["En spuriøs sammenheng kan være meget sterk, så styrken sier ingenting om årsak", "En sterk sammenheng er vanskeligere å bortforklare med en tredje bakenforliggende faktor", "En sterk sammenheng oppfyller kravet om årsaksretning, siden svake alltid går begge veier", "En sterk sammenheng krever mindre utvalg for å kunne påvises med rimelig sikkerhet"],
      explanation: "Riktig svar er at styrke og årsak er uavhengige spørsmål. Påstanden om utvalgsstørrelse er teknisk sann, men den er ikke et poeng om årsaksslutningen — og styrke gir ingen beskyttelse mot spuriøsitet.",
    },
    {
      question: "Hva menes med initialbetingelser?",
      options: ["Opplysningene om den konkrete situasjonen som en generell lov anvendes på", "De forutsetningene forskeren gjør om utvalget før analysen settes i gang", "De verdiene variablene hadde ved første måletidspunkt i en undersøkelse over tid", "De kravene som må være oppfylt før en sammenheng kan kalles robust avhengighet"],
      explanation: "Riktig svar er det konkrete som loven anvendes på. Nettopp fordi betingelsene er mange og sjelden fullstendig kjent på forhånd, er forutsigelse vanskeligere enn forklaring i samfunnsvitenskapen.",
    },
    {
      question: "Hva er poenget med skillet mellom kunnskap og viten hos Tufte?",
      options: ["At samfunnsvitenskapelig innsikt er godt begrunnet med forbehold, ikke sikker", "At kunnskap krever teori, mens viten kan bygge på erfaring uten teoretisk ramme", "At kunnskap gjelder grupper av mennesker, mens viten gjelder det enkelte tilfellet", "At kunnskap kan formidles videre, mens viten er knyttet til den som selv har erfart"],
      explanation: "Riktig svar er skillet mellom det godt begrunnede og det sikre. Poenget er at dette ikke er en innrømmelse av svakhet — avstanden mellom «godt begrunnet med forbehold» og «det er umulig å vite noe» er hele faget.",
    },
    {
      question: "Hva innebærer det at samfunnet er et åpent system?",
      options: ["At mange forhold virker samtidig og ikke kan skjermes slik et laboratorium kan", "At alle forskningsresultater må være offentlig tilgjengelige for etterprøving", "At deltakerne kan velge om de vil delta, slik at utvalget aldri blir helt tilfeldig", "At samfunnsvitenskapen henter begreper fra flere fag samtidig i sine forklaringer"],
      explanation: "Riktig svar er at variasjonen er reell og ikke bare støy: en sammenheng kan holde i én sammenheng og ikke i en annen uten at noe er feilmålt. Dette er en av begrunnelsene for at sammenhenger er robuste snarere enn universelle.",
    },
    {
      question: "En kommune ser at portalbrukere er mer fornøyde, men forskjellen forsvinner innenfor hver aldersgruppe. Hva er konklusjonen?",
      options: ["Sammenhengen er spuriøs, med alder som forhold bak både bruk og tilfredshet", "Sammenhengen er ekte, men den er svakere enn totaltallene ga inntrykk av", "Sammenhengen kan ikke vurderes, siden aldersgruppene er for små til analyse", "Sammenhengen viser at portalen virker, men bare for de yngste innbyggerne"],
      explanation: "Riktig svar er spuriøsitet med alder som bakenforliggende forhold: de yngre både bruker portalen mer og er mer fornøyde fra før. At forskjellen er null inne i begge grupper, utelukker at virkningen bare gjelder de yngste.",
    },
    {
      question: "Hva må til for at valget av kontrollvariabel skal være forsvarlig?",
      options: ["En faglig begrunnelse for at forholdet påvirker både antatt årsak og virkning", "At variabelen henger statistisk sammen med utfallet i det aktuelle materialet", "At variabelen er målt på samme tidspunkt som de to andre forholdene i analysen", "At variabelen er den samme som i tidligere studier av det samme fenomenet"],
      explanation: "Riktig svar er den faglige begrunnelsen, siden valget ikke kan leses ut av tallene. Å legge inn variabler til sammenhengen forsvinner, er ikke kontroll — det er overkontroll i systematisk form.",
    },
    {
      question: "Hva sier V2023 om hvordan de tre kravene skal behandles i en besvarelse?",
      options: ["At de skal forklares, ikke bare nevnes ved navn i en oppramsing", "At de skal illustreres med eksempler hentet fra pensumtekstenes egne studier", "At de skal knyttes til et konkret eksperiment med tilfeldig fordeling", "At de skal rangeres etter hvilket krav som er vanskeligst å oppfylle i praksis"],
      explanation: "Riktig svar er kravet om forklaring. En liste er breddekunnskap, og bredde måles i den andre delen av eksamen — forklaringen består i å si hva hvert krav gjør og hva som ville gått galt uten det.",
    },
    {
      question: "Hva er sammenligningsgrunnlaget i en årsaksslutning?",
      options: ["Det som erstatter situasjonen uten årsaken, siden den ikke finnes i materialet", "Den gruppen som er trukket ut for å representere hele befolkningen i studien", "Det tallet man måler endringen mot, altså nivået ved forrige måletidspunkt", "Den teorien som brukes til å tolke hvorvidt en forskjell er faglig interessant"],
      explanation: "Riktig svar er erstatningen for det som ikke skjedde: en gruppe uten tiltaket, en periode før, en tilsvarende kommune. Kvaliteten på slutningen avhenger av hvor godt sammenligningen erstatter den situasjonen som ikke finnes.",
    },
    {
      question: "Hvorfor er «før og etter»-tall alene utilstrekkelige for å vise at et tiltak virket?",
      options: ["Fordi utviklingen kunne kommet uansett, og det mangler noe å sammenligne med", "Fordi to måletidspunkter er for få til å beregne den statistiske usikkerheten", "Fordi deltakerne endrer atferd når de vet at de blir målt to ganger på rad", "Fordi endringer over tid alltid skyldes flere årsaker som ikke kan skilles fra hverandre"],
      explanation: "Riktig svar er det manglende sammenligningsgrunnlaget. At flere årsaker virker, er riktig, men det er nettopp derfor man trenger noe å sammenligne med — ikke en grunn til å oppgi slutningen.",
    },
    {
      question: "Hva er forskjellen på å kontrollere for en bakenforliggende og en mellomliggende variabel?",
      options: ["Forsvinner sammenhengen i det første tilfellet var den falsk, i det andre er den forklart", "Den bakenforliggende kontrolleres statistisk, mens den mellomliggende krever eksperiment", "Den bakenforliggende må måles før tiltaket, mens den mellomliggende måles etterpå", "Den bakenforliggende svekker sammenhengen, mens den mellomliggende forsterker den"],
      explanation: "Riktig svar er at regnestykket ser likt ut mens tolkningen er motsatt. Å holde fast et mellomledd fjerner nettopp den veien årsaken virker gjennom, og forskjellen kan bare avgjøres av rekkefølge i tid og av teori.",
    },
    {
      question: "Hva er den beste konklusjonen når man har ført et tilfelle gjennom de tre kravene?",
      options: ["Å navngi hvilket krav som svikter, og si hva som skulle til for å oppfylle det", "Å slå fast om det foreligger en årsakssammenheng eller ikke, ut fra en samlet vurdering", "Å anbefale at undersøkelsen gjentas med et større og mer representativt utvalg", "Å påpeke at årsaksslutninger i samfunnsvitenskapen sjelden kan trekkes med sikkerhet"],
      explanation: "Riktig svar er den konkrete plasseringen av svikten, med et forslag til hva som ville rettet den. Den generelle påminnelsen om usikkerhet passer på enhver slutning og gir derfor ingen uttelling.",
    },
    {
      question: "Hva er riktig om forholdet mellom kravene til måling og kravene til årsaksslutning?",
      options: ["De er to porter etter hverandre: faller målingen, er årsaksspørsmålet uten gjenstand", "De er samme krav formulert på to måter, og oppfylles derfor samtidig i god forskning", "Kravene til måling gjelder ekstensive opplegg, mens årsakskravene gjelder eksperimenter", "Kravene til årsaksslutning kommer først, siden de avgjør hva som skal måles i studien"],
      explanation: "Riktig svar er rekkefølgen: en dårlig måling kan ikke reddes av statistisk kontroll, og en perfekt måling garanterer ingen årsak. V2021 honorerer uttrykkelig den kandidaten som ser dette overlappet.",
    },
    {
      question: "Hvilken innvending treffer kravet om årsaksretning?",
      options: ["At de som allerede har utfallet, er mer tilbøyelige til å oppsøke det antatte tiltaket", "At motivasjonen både påvirker deltakelsen og resultatet, uavhengig av hverandre", "At forskjellen mellom gruppene er så liten at den kan skyldes tilfeldig variasjon", "At utvalget ikke er representativt for den gruppen konklusjonen skal gjelde for"],
      explanation: "Riktig svar snur kjeden: virkningen er utpekt som årsak. Motivasjonen som påvirker begge, treffer krav 3, den lille forskjellen treffer krav 1, og representativitet er et spørsmål om utvalg og ikke om årsak.",
    },
    {
      question: "Hva er hovedbegrensningen ved statistisk kontroll sammenlignet med tilfeldig fordeling?",
      options: ["Man kan bare kontrollere for forhold man faktisk har opplysninger om", "Man må ha et langt større utvalg for at kontrollen skal bli statistisk holdbar", "Man kan ikke kontrollere for mer enn ett forhold av gangen i samme analyse", "Man mister muligheten til å si noe om hvor sterk sammenhengen opprinnelig var"],
      explanation: "Riktig svar er at umålte forhold ikke kan holdes fast, mens tilfeldig fordeling jevner ut også dem ingen har tenkt på. Utvalgsstørrelse og antall kontrollvariabler er praktiske spørsmål, ikke den prinsipielle begrensningen.",
    },
  ],
  'svexfac03-4-5': [
    {
      question: "Hva gjør en mekanismeforklaring som en statistisk sammenheng ikke gjør?",
      options: ["Den viser trinnene fra årsak til virkning, ikke bare at sammenhengen finnes", "Den fastslår at sammenhengen ikke skyldes en tredje bakenforliggende faktor", "Den gjør det mulig å generalisere funnet til en større gruppe", "Den viser at årsaken kom før virkningen i tid, slik at retningen er avgjort"],
      explanation: "Riktig svar er at veien mellom årsak og virkning skrives ut. Kontroll for tredje variabel og årsaksretning er krav fra forrige kapittel, og generalisering hviler på utvalget — ingen av delene løses av at mekanismen beskrives.",
    },
    {
      question: "Hva menes med den svarte boksen?",
      options: ["En forklaring som viser hva som går inn og ut, men ikke hva som skjer imellom", "En analyse der forskeren skjuler hvilke valg som er tatt underveis i arbeidet", "En sammenheng som viser seg å forsvinne når man kontrollerer for et tredje forhold", "En modell som er så komplisert at leseren ikke kan etterprøve resonnementet"],
      explanation: "Riktig svar er den ufullstendige forklaringen som mangler veien imellom. Merk at den svarte boksen ikke er gal — den er ufullstendig, og en besvarelse som avviser statistiske sammenhenger som verdiløse, overdriver poenget.",
    },
    {
      question: "Hva er de tre leddene i Colemans badekarmodell?",
      options: ["Situasjonen for den enkelte, den enkeltes handling, og det samlede utfallet", "Hypotesen, den logisk utledede konsekvensen, og testen som avgjør om den holder mot data", "Samvariasjon, årsaksretning, og kontroll for eventuelle bakenforliggende forhold", "Den manifeste funksjonen, den latente funksjonen, og eventuelle dysfunksjoner"],
      explanation: "Riktig svar er nivåene modellen beveger seg gjennom: ned til den enkeltes situasjon, bortover til handlingen, og opp igjen til et samlet utfall. De andre alternativene er andre tredelinger i pensum, og å blande dem er en vanlig presisjonsfeil.",
    },
    {
      question: "Hva kjennetegner situasjonsleddet i badekarmodellen?",
      options: ["Et forhold i samfunnet endrer hva den enkelte står overfor, ikke hva hun gjør", "Den enkelte vurderer alternativene sine og velger den handlingen som lønner seg mest", "Mange enkelthandlinger legger seg sammen til et utfall på samfunnsnivå som ingen av dem har villet", "Forskeren beskriver konteksten så grundig at leseren kan vurdere overførbarheten"],
      explanation: "Riktig svar skiller situasjonen fra handlingen: prisen, tilgangen eller forventningen endres, uten at noen ennå har gjort noe. Blandes de to sammen, forsvinner nettopp det stedet der et tiltak kan gripe inn.",
    },
    {
      question: "Hva er den vanligste svakheten i en mekanismeangivelse?",
      options: ["At handlingsleddet hoppes over, slik at kjeden går rett fra ordning til utfall", "At kjeden får altfor mange ledd, slik at hele fremstillingen blir vanskelig å følge", "At forfatteren beskriver situasjonen for den enkelte i altfor stor detalj", "At det samlede utfallet oppgis uten at det er målt i det aktuelle materialet"],
      explanation: "Riktig svar er det utelatte handlingsleddet, som gjør kjeden til en svart boks i flere setninger. For mange ledd er også et problem, men det vanlige er det motsatte: at nivået der mennesker faktisk handler, mangler.",
    },
    {
      question: "Hva er det kausalt avgjørende leddet?",
      options: ["Det trinnet som, om det falt bort, ville stanset virkningen fra å inntreffe", "Det trinnet som kommer aller først i kjeden og setter hele forløpet i bevegelse", "Det trinnet som er lettest å måle, og som derfor kan etterprøves av andre", "Det trinnet der de fleste enkelttilfellene skiller lag fra hovedmønsteret"],
      explanation: "Riktig svar er leddet som bærer kjeden. Å utpeke det er selve prøven på om en mekanismeangivelse forklarer noe eller bare gjenforteller et forløp — det første leddet er ikke nødvendigvis det avgjørende.",
    },
    {
      question: "Hva skiller en fortelling fra en mekanisme?",
      options: ["Fortellingen tar med det som er interessant, mekanismen det som er nødvendig", "Fortellingen er atskillig lengre og mer detaljert enn en mekanisme vanligvis er", "Fortellingen handler om enkeltpersoner, mens mekanismen handler om grupper", "Fortellingen bygger på kvalitative data, mens mekanismen bygger på tall"],
      explanation: "Riktig svar gjelder hvorfor leddene er valgt: en mekanisme tar med det som må til for at utfallet skal komme. Lengde og datatype er ikke det avgjørende — en fortelling kan være helt sann og likevel ikke forklare noe.",
    },
    {
      question: "Hva svarer en formålsforklaring på?",
      options: ["Hvilken hensikt gjorde handlingen fornuftig for den som utførte den", "Hvilke trinn førte fra det utløsende forholdet fram til det endelige utfallet", "Hvilken virkning ordningen har for det systemet den inngår i, uavhengig av hva noen har ment", "Hvilken generell lov utfallet kan utledes av, gitt de konkrete betingelsene"],
      explanation: "Riktig svar er hensikten hos aktøren. De tre andre beskriver mekanismeforklaring, funksjonsforklaring og den deduktivt-nomologiske modellen — fire ulike svar på et «hvorfor», og skillet mellom dem er selve redegjørelseskravet her.",
    },
    {
      question: "Når blir en formålsforklaring til etterrasjonalisering?",
      options: ["Når hensikten bare hviler på at utfallet passer, og ikke kan vises ellers", "Når aktøren ikke oppnådde det hun siktet mot med handlingen sin", "Når forklaringen gjelder en gruppe aktører i stedet for én enkelt person", "Når hensikten først er formulert etter at hele handlingen allerede er gjennomført"],
      explanation: "Riktig svar er den manglende uavhengige forankringen: en forklaring som ikke kan være gal, forklarer ingenting. At handlingen mislyktes, gjør ikke forklaringen ugyldig — det er handlingen som forklares, ikke utfallet.",
    },
    {
      question: "Hva svarer en funksjonsforklaring på?",
      options: ["Hvilken virkning ordningen har for helheten den inngår i", "Hvilken hensikt de som innførte ordningen, hadde med den", "Hvordan ordningen virker, trinn for trinn, fra innføring til utfall", "Hvor utbredt ordningen er blant sammenlignbare organisasjoner"],
      explanation: "Riktig svar er virkningen for helheten, og den trenger ingen som ville den. Hensikten hører til formålsforklaringen, og trinnene til mekanismeforklaringen — en funksjon kan finnes uten at noen har planlagt den.",
    },
    {
      question: "Hva mangler en funksjonsforklaring som stopper ved «ordningen finnes fordi den er nyttig»?",
      options: ["En angivelse av hvordan nytten virker tilbake på at ordningen består", "En angivelse av hvem som opprinnelig innførte ordningen, og med hvilken hensikt", "En angivelse av hvor stor nytten er, målt mot kostnadene ved ordningen", "En angivelse av hvilke andre ordninger som kunne gitt den samme nytten"],
      explanation: "Riktig svar er mekanismen som holder ordningen i live — uten den bruker forklaringen følgen som årsak og blir sirkulær. Hensikten er noe annet: da ville det vært en formålsforklaring.",
    },
    {
      question: "Hva er en latent funksjon hos Merton?",
      options: ["En virkning som verken er tilsiktet eller erkjent av dem som deltar i ordningen", "En virkning som er tilsiktet, men som ikke lykkes i den grad man hadde håpet", "En virkning som svekker hele systemets evne til å bestå over lengre tid", "En virkning som først viser seg lenge etter at ordningen ble innført"],
      explanation: "Riktig svar er den uerkjente og utilsiktede virkningen, som er den analytisk interessante. En virkning som svekker systemet, er en dysfunksjon, og tidsforsinkelse alene gjør ingen funksjon latent.",
    },
    {
      question: "Hva er forskjellen på en latent funksjon og en utilsiktet virkning?",
      options: ["Alle latente funksjoner er utilsiktede, men en funksjon bidrar til at noe består", "Latente funksjoner er alltid gunstige, mens utilsiktede virkninger alltid er skadelige", "Latente funksjoner gjelder ordninger, mens utilsiktede virkninger gjelder enkeltpersoner", "Latente funksjoner er erkjent av ledelsen, mens utilsiktede virkninger ikke er det"],
      explanation: "Riktig svar er at funksjonsbegrepet krever et bidrag til at ordningen består, mens en utilsiktet virkning like gjerne kan undergrave den. Påstanden om at ledelsen erkjenner dem, motsier definisjonen av latent, som nettopp betyr ikke erkjent.",
    },
    {
      question: "Hva tilfører Mertons begrep om dysfunksjon?",
      options: ["At ordninger kan ha virkninger som svekker helheten, og likevel bestå", "At alle deler i et system til slutt viser seg å tjene helheten på en eller annen måte", "At virkninger må måles i tall før de kan kalles funksjoner eller dysfunksjoner", "At ordninger som ikke virker, alltid blir avviklet innen rimelig tid, fordi systemet luker dem ut"],
      explanation: "Riktig svar er korrektivet mot en fremstilling der alt som finnes, viser seg å være nyttig. Merk at «for helheten» alltid må presiseres — dysfunksjonell for hvem, målt mot hvilket mål?",
    },
    {
      question: "Hva menes med funksjonell enhet hos Merton?",
      options: ["Graden av sammenheng mellom delene, behandlet som spørsmål og ikke forutsetning", "Kravet om at hver enkelt del i et system må ha minst én manifest funksjon å vise til", "Enheten som brukes når man skal måle hvor nyttig en ordning er for helheten", "Antakelsen om at alle deler i et samfunn er like viktige for at det skal bestå"],
      explanation: "Riktig svar er at sammenhengen mellom delene er en empirisk grad som må undersøkes. Det er nettopp dette som skiller Mertons versjon fra en eldre funksjonalisme der sammenhengen var et utgangspunkt.",
    },
    {
      question: "Hva er aggregeringsleddet i badekarmodellen?",
      options: ["Hvordan de mange enkelthandlingene legger seg sammen til et samlet utfall", "Hvordan forskeren samler inn opplysninger fra mange enheter i samme undersøkelse", "Hvordan et forhold i samfunnet endrer situasjonen for den enkelte deltakeren", "Hvordan flere ulike mekanismer settes sammen til én samlet forklaring av det enkelte tilfellet"],
      explanation: "Riktig svar er veien opp igjen til samfunnsnivå. Leddet er ikke en ren summering: handlinger kan forsterke eller motvirke hverandre, og det er her utilsiktede virkninger dukker opp.",
    },
    {
      question: "Hva er en utilsiktet virkning?",
      options: ["Et utfall som følger av mange handlinger uten at noen siktet mot det", "Et utfall som skyldes at tiltaket ble dårlig planlagt fra begynnelsen av", "Et utfall som bare rammer en liten del av dem tiltaket var ment for", "Et utfall som først kan måles flere år etter at tiltaket ble innført"],
      explanation: "Riktig svar er utfallet ingen siktet mot, som kan følge av selve strukturen i situasjonen. Det er ikke nødvendigvis et tegn på dårlig planlegging — summen av fornuftige enkelthandlinger kan gi et utfall ingen ønsket.",
    },
    {
      question: "Hva er de tre trinnene i hypotetisk-deduktiv metode?",
      options: ["Formuler en hypotese, utled en konsekvens av den, og test om konsekvensen holder", "Samle inn materiale, se etter mønstre i det, og formuler en forklaring til slutt", "Still en problemstilling, velg en metode, og begrunn valget mot problemstillingen", "Beskriv fenomenet, forklar det med en mekanisme, og vurder overførbarheten"],
      explanation: "Riktig svar er hypotese, utledet konsekvens og test. Merk at framgangsmåten er merket bør kjenne til: den er ikke prøvd i gjeldende regime, men står fortsatt i læringsutbyttet under hypotesetesting. Den andre beskriver en åpen leting etter mønstre, altså det motsatte.",
    },
    {
      question: "Hva kjennetegner en brukbar hypotese?",
      options: ["Den er formulert slik at den kan vise seg å være gal", "Den er formulert så vidt at den er forenlig med flere mulige utfall", "Den bygger på et representativt utvalg fra den gruppen den skal gjelde for", "Den er utledet av en generell lov sammen med de konkrete betingelsene"],
      explanation: "Riktig svar er muligheten for å slå feil, som er det som gir testen kraft. En hypotese forenlig med et hvilket som helst utfall kan ikke testes og gir ingen kunnskap uansett hva som observeres.",
    },
    {
      question: "Hvorfor testes en utledet konsekvens i stedet for hypotesen selv?",
      options: ["Fordi hypotesen ofte er generell og ikke direkte observerbar", "Fordi konsekvensen alltid er mer sannsynlig enn hypotesen den følger av", "Fordi hypotesen bare kan testes i et eksperiment med tilfeldig fordeling", "Fordi konsekvensen kan beregnes statistisk, mens hypotesen bare kan vurderes"],
      explanation: "Riktig svar er at det generelle må gjøres konkret før noe kan sjekkes. Merk konsekvensen av dette: slår den utledede påstanden feil, kan feilen ligge i hypotesen eller i en av hjelpeantakelsene om måling og utvalg.",
    },
    {
      question: "Hva er asymmetrisk ved falsifisering?",
      options: ["At en konsekvens som slår til, styrker uten å bevise, mens en som svikter, feller noe", "At det er atskillig lettere å teste hypoteser om grupper enn hypoteser om enkeltpersoner", "At bekreftelse krever et stort utvalg, mens falsifisering kan skje i et lite", "At hypotesen alltid felles først, mens hjelpeantakelsene beholdes uendret"],
      explanation: "Riktig svar er forskjellen mellom å styrke og å felle: andre hypoteser kan gi samme konsekvens, så bekreftelse beviser ingenting. Merk at det er noe som felles — det kan være hypotesen eller en hjelpeantakelse.",
    },
    {
      question: "Hvorfor kan en formålsforklaring inngå i en mekanismeforklaring?",
      options: ["Fordi aktørens hensikt kan utgjøre handlingsleddet i badekarmodellen", "Fordi hensikter alltid ligger bak de forholdene som endrer den enkeltes situasjon", "Fordi enhver mekanisme til slutt må forklares ved noens bevisste planlegging", "Fordi formålsforklaringer er mer presise enn mekanismeforklaringer på individnivå"],
      explanation: "Riktig svar er at hensikten kan bemanne leddet der den enkelte handler. De to typene konkurrerer altså ikke nødvendigvis. At enhver mekanisme skulle hvile på planlegging, er derimot galt — mange ledd virker uten at noen har tenkt på dem.",
    },
    {
      question: "Hva er den skarpeste innvendingen mot en detaljert mekanismeangivelse?",
      options: ["Detaljene kan være tenkt ut i ettertid, og virker troverdige fordi de er mange", "Detaljene gjør fremstillingen for lang til å få plass innenfor tiden på eksamen", "Detaljene gjør at forklaringen ikke lenger kan overføres til andre tilfeller enn det studerte", "Detaljene forutsetter et kvalitativt materiale, som ikke kan bære årsakspåstander"],
      explanation: "Riktig svar peker på samme risiko som ved etterrasjonalisering: en kjede som bare er tenkt ut, har byttet etterprøvd kunnskap mot en fortelling. Kravet om å utpeke det avgjørende leddet er nettopp motgiften, siden det tvinger fram en påstand som kan være gal.",
    },
    {
      question: "Hva er riktig om forholdet mellom de tre forklaringstypene?",
      options: ["De svarer på ulike spørsmål og kan derfor være riktige om samme ordning", "De er rangert etter dybde, med mekanismeforklaringen som den mest fullstendige", "De utelukker hverandre, siden en ordning bare kan ha én riktig forklaring", "De hører til hver sin metode: mekanisme til kvantitativ, formål til kvalitativ"],
      explanation: "Riktig svar er at de forklarer ulike ting — at noe ble innført, hvordan det virker, og at det består. Å si dette eksplisitt er et av de sikreste grepene i et redegjørelsesledd om forklaringstyper.",
    },
  ],
  'svexfac03-5-1': [
    {
      question: "Hva er kriteriet som skiller intern fra ekstern forskningsetikk?",
      options: ["Hvem normen beskytter: kunnskapen og kollegene, eller deltakerne og samfunnet omkring", "Hvor alvorlig bruddet er, og hvilke sanksjoner det kan føre til for forskeren", "Om normen er nedfelt i lov, eller bare i fagets egne retningslinjer og skikker", "Om bruddet skjer under datainnsamlingen, eller først i publiseringsfasen"],
      explanation: "Riktig svar er hvem normen beskytter, og det er huskeregelen som løser feil #9. Alvorlighet følger ikke kategorien: fabrikkering er svært alvorlig og fullt ut intern, mens en slurvete formulering i et informasjonsskriv er mildere og fullt ut ekstern.",
    },
    {
      question: "Hvilke er de tre interne normene hos Balsvik?",
      options: ["Sannhetsnormen, åpenhet med etterprøving og kritikk, og riktig kreditering", "Å unngå skade, informert og fritt samtykke, og respekt for privatlivets fred", "Universalisme, desinteresse og organisert skepsis i møtet med nye påstander", "Etterprøvbarhet, forskningens frihet og åpenhet om hvem som finansierer arbeidet"],
      explanation: "Riktig svar er Balsviks tre interne normer. Å unngå skade, samtykke og respekt for privatliv er derimot de eksterne normene, og universalisme, desinteresse og organisert skepsis er tre av normene i Mertons etos — som svarer på et annet spørsmål enn Balsviks inndeling.",
    },
    {
      question: "Hva er forskjellen på fabrikkering og forfalskning?",
      options: ["Fabrikkering skaper data som ikke finnes, forfalskning endrer data som finnes", "Fabrikkering rammer kunnskapen, mens forfalskning først og fremst rammer kollegene", "Fabrikkering gjelder tall, mens forfalskning gjelder sitater og tekstmateriale", "Fabrikkering oppdages av fagfeller, mens forfalskning bare oppdages ved gjentakelse"],
      explanation: "Riktig svar er skillet mellom å skape og å endre. Begge rammer kunnskapen først, og begge kan gjelde alle typer materiale — skillet ligger i om dataene i det hele tatt ble samlet inn.",
    },
    {
      question: "En forsker fjerner tre avvikende observasjoner uten å nevne det. Hva er selve bruddet?",
      options: ["At utelatelsen ikke er opplyst, slik at andre ikke kan vurdere den", "At observasjoner overhodet ble utelatt fra det innsamlede materialet", "At de tre observasjonene kunne ha endret konklusjonen i en annen retning", "At forskeren ikke innhentet nytt samtykke fra dem observasjonene gjaldt"],
      explanation: "Riktig svar er tausheten. Utelatelse kan være helt legitim ved målefeil eller feilregistrering — grensen mellom uredelighet og god praksis går her ved åpenhet, ikke ved handlingen selv.",
    },
    {
      question: "Hva er «koking» av data?",
      options: ["Å prøve mange analyser og bare rapportere den som ga et tydelig utslag", "Å regne om tall til prosent slik at forskjellene ser større ut enn de er", "Å slå sammen flere datasett uten å opplyse om at de er samlet inn ulikt", "Å presentere andres analyser som om man hadde gjennomført dem selv, uten å oppgi hvem som gjorde dem"],
      explanation: "Riktig svar er den selektive rapporteringen. Merk hvor lumsk formen er: alt som står, er sant, og hver enkelt analyse kan være legitim — det som mangler, er alt det andre som ble prøvd. Å presentere andres arbeid som sitt eget er plagiat.",
    },
    {
      question: "Hva er Mertons forklaring på at forskningsetiske normer faktisk følges?",
      options: ["At virksomheten er innrettet slik at brudd oppdages og får store konsekvenser", "At forskere gjennom lang utdanning utvikler en sterkere moral enn andre yrkesgrupper", "At normene er nedfelt i lov, slik at brudd kan straffes av rettsapparatet med bøter eller fengsel", "At forskere har sikre stillinger og derfor ikke trenger å ta snarveier i arbeidet"],
      explanation: "Riktig svar er den institusjonelle kontrollen. Poenget er nettopp at forklaringen ikke hviler på at forskere er bedre mennesker — og den har en testbar konsekvens: der kontrollen er svak, bør bruddene være flere.",
    },
    {
      question: "Hva betyr desinteresse hos Merton?",
      options: ["At forskerens egne interesser ikke skal avgjøre hva hun finner eller rapporterer", "At forskeren ikke bør engasjere seg personlig i temaet hun studerer", "At forskeren skal avstå fra å motta finansiering fra parter med interesse i saken", "At forskeren ikke skal ta stilling i faglige debatter innenfor sitt eget felt"],
      explanation: "Riktig svar er at interessene ikke skal avgjøre resultatet. Normen krever ikke fravær av engasjement — en brennende engasjert forsker som rapporterer et funn mot sitt eget syn, har oppfylt den fullt ut.",
    },
    {
      question: "Hva er universalisme som norm i vitenskapens etos?",
      options: ["At en påstand vurderes etter innhold og belegg, ikke etter hvem som sier den", "At vitenskapelige funn skal gjelde overalt, uavhengig av tid og sted", "At alle forskere skal ha lik tilgang til finansiering og til publiseringskanaler", "At kunnskapen tilhører fellesskapet og derfor skal deles med alle interesserte"],
      explanation: "Riktig svar gjelder vurderingen av påstander, ikke deres rekkevidde. At kunnskapen tilhører fellesskapet, er fellesskapsnormen — en annen av de fire normene i etoset.",
    },
    {
      question: "Hva er organisert skepsis?",
      options: ["At ingen påstand godtas uprøvd, og at prøvingen er bygd inn i faste ordninger", "At forskeren stiller seg tvilende til alle resultater som ikke er hennes egne", "At kritikk skal fremmes samlet av et fagmiljø, ikke av enkeltforskere alene", "At vitenskapen antar at ingenting kan vites sikkert før alt er etterprøvd"],
      explanation: "Riktig svar legger vekt på ordet organisert: skepsisen er ikke en personlig innstilling, men bygd inn i fagfellevurdering, replikasjon og debatt. Generell tvil om at noe kan vites, ville opphevet hele virksomheten.",
    },
    {
      question: "Hvorfor er riktig kreditering mer enn en høflighetsregel?",
      options: ["Fordi anerkjennelse er den valutaen faglig innsats belønnes med i systemet", "Fordi manglende kreditering kan medføre rettslige sanksjoner for forskeren", "Fordi lesere trenger referansene for å finne fram til originalarbeidene selv", "Fordi forfatterlisten avgjør hvordan honoraret for publikasjonen skal fordeles"],
      explanation: "Riktig svar er at kreditering er lønnen i et system der kunnskapen gis bort til fellesskapet. Forskyves æren systematisk, forskyves også hvem som får ressurser til å forske videre. At lesere finner fram, er en tilleggsgevinst, ikke hovedbegrunnelsen.",
    },
    {
      question: "Hva er en interessekonflikt i forskningsetisk forstand?",
      options: ["En interesse som kan påvirke arbeidet, uavhengig av om den faktisk gjør det", "En situasjon der to forskergrupper konkurrerer om å publisere det samme funnet", "En uenighet mellom forsker og oppdragsgiver om hvordan resultatene skal tolkes", "En interesse som har påvirket resultatet, og som derfor må rettes opp i ettertid"],
      explanation: "Riktig svar er at muligheten alene utløser opplysningsplikten. Kravet er ikke at slike interesser skal være fraværende, men at de skal oppgis — åpenhet erstatter her en umulig renhet.",
    },
    {
      question: "Hva er hovedsvakheten ved fagfellevurdering som kontrollordning?",
      options: ["Den vurderer manuskriptet og resonnementet, ikke som regel datamaterialet", "Den gjennomføres av forskere som konkurrerer med forfatteren om finansiering", "Den tar så lang tid at viktige funn blir foreldet før de kommer på trykk, ofte etter mange måneder", "Den er frivillig, og mange tidsskrifter velger å publisere uten slik vurdering"],
      explanation: "Riktig svar peker på hva ordningen ikke fanger: den avdekker svake slutninger langt bedre enn fabrikkerte data. Dette er samtidig det sterkeste argumentet mot at institusjonell kontroll alene forklarer at normene følges.",
    },
    {
      question: "Hva kjennetegner gråsonen av diskutabel forskningspraksis?",
      options: ["Hvert tilfelle kan bortforklares, og den håndheves av kultur snarere enn sanksjoner", "Den omfatter handlinger som er lovlige, men som bryter fagets skrevne retningslinjer", "Den gjelder bare uerfarne forskere som ennå ikke er sosialisert inn i normene, og forsvinner etter få år i faget", "Den er mindre utbredt enn de klare bruddene, men får større konsekvenser når den avsløres"],
      explanation: "Riktig svar peker på at gråsonen er stor og vanskelig å håndheve. Den er langt mer utbredt enn de klare bruddene, ikke mindre — og nettopp derfor er den så viktig i drøftingen av om kontroll er nok.",
    },
    {
      question: "Hvilket forhold gjør at åpenhetsnormen henger sammen med sannhetsnormen?",
      options: ["Åpenheten gjør sannhetskravet kontrollerbart av andre enn forskeren selv", "Åpenheten sikrer at flest mulig får tilgang til de publiserte resultatene", "Åpenheten gjør at deltakerne kan se hva som er skrevet om dem i etterkant", "Åpenheten er en forutsetning for at forskeren kan få publisert i gode tidsskrifter"],
      explanation: "Riktig svar er at uten åpenhet er sannhetskravet bare en oppfordring til god vilje. Med åpenhet blir det noe fellesskapet kan håndheve — og det er derfor de to normene ikke kan skilles i praksis.",
    },
    {
      question: "En forsker nekter å oppgi hvordan utvalget ble trukket, da en kollega spør. Hvilken norm brytes?",
      options: ["Åpenhet med etterprøving og kritikk, som beskytter kunnskapen og kollegene", "Sannhetsnormen, siden forskeren dermed skjuler at resultatet kan være galt", "Krediteringsnormen, siden kollegaen ikke får anledning til å bygge videre", "Respekt for privatliv og konfidensialitet, siden utvalget kan bli identifiserbart"],
      explanation: "Riktig svar er åpenhetsnormen: uten opplysningen kan ingen vurdere om rekrutteringen ga skjevhet. Sannhetsnormen ville vært brutt hvis noe var framstilt villedende, og konfidensialitet er en ekstern norm som gjelder deltakerne.",
    },
    {
      question: "Hva er selvplagiat?",
      options: ["Å publisere det samme arbeidet flere ganger som om det var nytt", "Å bruke egne tidligere formuleringer uten å sette dem i anførselstegn", "Å vise til egne arbeider oftere enn faglig nødvendig i referanselisten", "Å utgi en artikkel på nytt i et annet språk uten å nevne originalen"],
      explanation: "Riktig svar er dobbeltpublisering av samme arbeid som nytt, noe som villeder om hvor mye kunnskap som faktisk er produsert. De andre er reelle uvaner, men de hører til gråsonen snarere enn til plagiatfamilien.",
    },
    {
      question: "Hva er det sterkeste argumentet mot at institusjonell kontroll forklarer at normene følges?",
      options: ["Den samme institusjonen belønner også mengde og oppsiktsvekkende funn", "Forskere er sosialisert inn i normene og følger dem uansett hvem som ser på", "Kontrollen er kostbar i tid og penger og gjennomføres derfor sjeldnere enn den burde", "Normene er så generelt formulert at de vanskelig kan håndheves i praksis"],
      explanation: "Riktig svar bruker Mertons egen tankegang: motkraften er også institusjonell, og derfor rammer den forklaringen på dens eget premiss. At forskere er sosialisert inn i normene, er tvert imot et argument som utfyller Merton snarere enn å motsi ham.",
    },
    {
      question: "Hva innebærer fellesskapsnormen i Mertons etos?",
      options: ["At resultater tilhører fellesskapet, og at den enkelte belønnes med anerkjennelse", "At forskning skal utføres i grupper, siden enkeltforskere lettere gjør feil ingen andre fanger opp underveis", "At alle forskere har plikt til å vurdere kollegers manuskripter når de blir bedt om det", "At forskningsresultater skal formidles til allmennheten og ikke bare til fagfeller"],
      explanation: "Riktig svar knytter normen til eiendomsforholdet: kunnskapen gis bort, og lønnen er kreditering. Det er nettopp derfor krediteringsnormen er så viktig — og det er denne normen som kommer under press i oppdragsforskning.",
    },
    {
      question: "Hvorfor kan intern og ekstern forskningsetikk komme i konflikt ved datadeling?",
      options: ["Åpenhetskravet trekker mot deling, mens konfidensialiteten trekker mot å la være", "Deling er kostbart, og midlene tas fra oppfølgingen av deltakerne i studien", "Delte data kan gjenbrukes av forskere som ikke har innhentet eget samtykke", "Konfidensialitet er lovfestet, mens åpenhet bare er en faglig anbefaling"],
      explanation: "Riktig svar er at de to kategoriene trekker i hver sin retning, og at avveiningen må begrunnes. Gjenbruk uten eget samtykke er en reell problemstilling, men den er en konsekvens av delingen og ikke selve konflikten mellom normene.",
    },
    {
      question: "Hva er kravet til medforfatterskap?",
      options: ["Bidraget skal være reelt og faglig, ikke basert på posisjon eller på finansiering", "Alle som har vært involvert i prosjektet, skal føres opp i alfabetisk rekkefølge", "Den som har skrevet mest av teksten, skal stå som førsteforfatter på artikkelen", "Prosjektlederen skal alltid stå oppført, siden hun har det faglige ansvaret"],
      explanation: "Riktig svar er kravet om reelt faglig bidrag. Både å utelate noen som har bidratt og å inkludere noen som ikke har, er brudd på krediteringsnormen — bidrag som ikke kvalifiserer, anerkjennes i en takk.",
    },
    {
      question: "Hva er riktig om forholdet mellom Balsviks inndeling og Mertons etos?",
      options: ["De svarer på ulike spørsmål: hvem normene beskytter, og hvorfor de følges", "De er to konkurrerende inndelinger av det samme normverket i forskningsetikken", "Balsviks inndeling gjelder samfunnsfag, mens Mertons etos gjelder naturvitenskap", "Mertons etos er en eldre versjon som Balsviks tredeling har erstattet, siden den er fra 1940-tallet"],
      explanation: "Riktig svar er at de to utfyller hverandre. Balsvik deler feltet etter hvem normen beskytter; Merton beskriver hva som kjennetegner vitenskap som institusjon og hvorfor normene overholdes. Å si dette eksplisitt er et gratis poeng.",
    },
    {
      question: "Hva er sannhetsnormens rekkevidde?",
      options: ["Den forbyr også å framstille riktige tall slik at leseren får et galt inntrykk", "Den forbyr å trekke gale konklusjoner fra et materiale som er samlet inn ærlig", "Den gjelder bare selve datamaterialet, ikke måten resultatene presenteres på", "Den krever at forskeren avstår fra å publisere før funnet er bekreftet av andre"],
      explanation: "Riktig svar er at villedende framstilling av riktige tall også rammes. Å ta feil er derimot ikke et normbrudd — vitenskap er full av gale konklusjoner trukket ærlig, og bruddet ligger i å framstille noe annet enn grunnlaget gir dekning for.",
    },
    {
      question: "Hvorfor er karriere- og publiseringspress relevant i denne drøftingen?",
      options: ["Fordi det er en institusjonell motkraft som virker uansett personlig integritet", "Fordi det viser at forskere med midlertidige stillinger oftere begår uredelighet", "Fordi det er den viktigste årsaken til at fagfellevurdering tar lang tid", "Fordi det forklarer hvorfor forskere sjelden ønsker å dele data med kritikere"],
      explanation: "Riktig svar er at presset virker på alle og derfor treffer Mertons forklaringsform på dens eget premiss. Å hevde at bestemte grupper oftere begår uredelighet, ville være en påstand om omfang som ikke lar seg belegge, siden uoppdagede brudd ikke kan telles.",
    },
    {
      question: "Hva er den vanligste formen for feil #9 i besvarelser?",
      options: ["Å plassere brudd på samtykkekravet som internt fordi tilliten svekkes", "Å plassere fabrikkering som eksternt fordi den kan skade dem funnet handler om", "Å hevde at intern etikk er mindre alvorlig enn ekstern etikk", "Å nevne bare de tre interne normene og glemme de tre eksterne helt"],
      explanation: "Riktig svar beskriver forvekslingen mellom kriteriet og ringvirkningene: alle brudd svekker troverdigheten, men kriteriet er hvem normen beskytter. De øvrige er også feil, men de er sjeldnere og lettere å oppdage for kandidaten selv.",
    },
  ],
  'svexfac03-5-2': [
    {
      question: "Hvilke er de tre eksterne forskningsetiske normene hos Balsvik?",
      options: ["Å unngå skade og belastning, informert og fritt samtykke, og respekt for privatliv", "Sannhetsnormen, åpenhet med etterprøving og kritikk, og riktig kreditering av andre", "Universalisme, desinteresse og organisert skepsis i møtet med nye vitenskapelige funn", "Meldeplikt, oppbevaringsplikt og plikten til å slette materialet ved prosjektslutt"],
      explanation: "Riktig svar er Balsviks tre eksterne normer. Sannhet, åpenhet og kreditering er derimot de interne normene, og universalisme og desinteresse hører til Mertons etos. Meldeplikt, oppbevaring og sletting er ordninger, ikke normer.",
    },
    {
      question: "Hva kreves for at et samtykke skal være «fritt»?",
      options: ["At deltakeren kan si nei uten at det koster henne noe i situasjonen", "At deltakeren har fått skriftlig informasjon om prosjektet i god tid på forhånd", "At deltakeren selv har tatt kontakt med forskeren og bedt om å få delta", "At deltakeren når som helst kan kreve at materialet om henne blir slettet"],
      explanation: "Riktig svar gjelder kostnaden ved et nei, som er det maktforhold gjør noe med. Skriftlig informasjon hører til den informerte siden av kravet, og retten til å trekke seg er en del av informasjonen — ikke det som gjør samtykket fritt.",
    },
    {
      question: "Hvorfor er anonymisering ofte ikke nok i små miljøer?",
      options: ["Rollen alene kan identifisere, siden bare én person har den posisjonen", "Deltakerne kjenner hverandres stemmer og gjenkjenner sitater i utskriftene", "Anonymisering krever samtykke fra deltakeren, som ikke alltid gis i praksis", "Anonymisering fjerner så mye informasjon at materialet blir umulig å analysere"],
      explanation: "Riktig svar er at gjenkjenningen skjer innenfra og bygger på rolle, ikke på navn. At materialet blir umulig å analysere, peker på en reell kostnad ved sterk anonymisering, men forklarer ikke hvorfor vanlig anonymisering er utilstrekkelig.",
    },
    {
      question: "Hva er indirekte identifiserbare opplysninger?",
      options: ["Opplysninger som hver for seg er harmløse, men som til sammen peker ut én person", "Opplysninger som forskeren har fått fra andre enn deltakeren selv i løpet av feltarbeidet", "Opplysninger som er lagret separat fra navnelisten og koblet med et referansenummer", "Opplysninger som først blir identifiserende når materialet deles med andre forskere"],
      explanation: "Riktig svar er kombinasjonen av rolle, alder, sted og detaljer. Det strukturelle problemet er at konteksten som gjør materialet forståelig, er den samme konteksten som identifiserer — derfor kan slike opplysninger sjelden fjernes uten tap.",
    },
    {
      question: "Hva menes med samtykke som prosess?",
      options: ["At samtykket fornyes når prosjektet endrer retning underveis i arbeidet", "At deltakeren først samtykker muntlig og deretter bekrefter det skriftlig", "At samtykket innhentes gjennom en portvakt som kjenner miljøet fra før og har deltakernes tillit", "At deltakeren får lese den ferdige rapporten før den blir publisert"],
      explanation: "Riktig svar er fornyelsen underveis, som er den vanligste løsningen på at fleksible design endrer seg. Merk at den har en pris: relasjonen er blitt nær, og et nei kan være dyrere å si enn på den første dagen.",
    },
    {
      question: "Hva skiller infiltrasjon fra skjult observasjon?",
      options: ["Infiltrasjon krever en aktiv feilframstilling av hvem forskeren er", "Infiltrasjon foregår i lukkede miljøer, mens skjult observasjon skjer i det offentlige rom", "Infiltrasjon er ulovlig, mens skjult observasjon bare er forskningsetisk problematisk", "Infiltrasjon innebærer at forskeren deltar aktivt i det som studeres"],
      explanation: "Riktig svar er den aktive feilframstillingen. Skjult observasjon kan foregå uten at forskeren utgir seg for noe — hun kan være til stede i et rom der publikum er velkomment, uten å opplyse om sitt ærend.",
    },
    {
      question: "Hva er kjernen i et forskningsetisk dilemma?",
      options: ["At to hensyn med normativ tyngde peker i hver sin retning i samme situasjon", "At forskeren må velge mellom å følge en norm og å få et bedre datamateriale", "At regelverket er uklart, slik at forskeren ikke vet hva som er tillatt", "At deltakeren og forskeren er uenige om hvordan materialet skal brukes"],
      explanation: "Riktig svar krever at begge sider er normer. Står en norm mot forskerens egeninteresse, er det en fristelse og ikke et dilemma — og svaret er da opplagt. Det er nettopp likeverdigheten som gjør dilemmaene vanskelige.",
    },
    {
      question: "Hvem er tredjepersoner i et forskningsmateriale?",
      options: ["Personer som omtales av deltakerne, men som aldri har samtykket til noe", "Forskere som får tilgang til materialet etter at prosjektet er avsluttet", "Personer som har takket nei til å delta, men som likevel er i miljøet forskeren observerer", "Representanter for oppdragsgiveren som følger prosjektet underveis"],
      explanation: "Riktig svar er de omtalte som aldri ble spurt. De er ofte de mest utsatte, nettopp fordi verken informasjon eller mulighet til å si nei har vært aktuelt, og hensynet til dem må ivaretas av forskeren alene.",
    },
    {
      question: "Hvorfor er belastningen ved deltakelse ujevnt fordelt?",
      options: ["Den treffer hardest dem som forteller mest, altså dem forskningen har mest nytte av", "Den treffer hardest dem som ble rekruttert sist og fikk minst tid til å forberede seg", "Den treffer hardest dem som har minst erfaring med å bli intervjuet av forskere, og som ikke vet hva de går til", "Den treffer hardest dem som deltar i flere prosjekter i samme tidsrom"],
      explanation: "Riktig svar peker på den ubehagelige sammenhengen: den som forteller mest, risikerer mest, og bidrar mest. Observasjonen gir en drøfting retning, fordi den peker mot dem som har minst å tjene på deltakelsen.",
    },
    {
      question: "Hva er riktig om sårbarhet i forskningsetisk forstand?",
      options: ["Sårbarhet er en relasjon i situasjonen, ikke en egenskap ved personen", "Sårbarhet følger av gruppetilhørighet og kan avgjøres før prosjektet begynner", "Sårbarhet innebærer at deltakeren ikke kan gi gyldig samtykke i det hele tatt", "Sårbarhet gjelder bare deltakere som mottar tjenester fra det offentlige"],
      explanation: "Riktig svar er at sårbarhet er relasjonell: den samme personen kan være sårbar i én situasjon og ikke i en annen. Å behandle en hel gruppe som sårbar er ofte like problematisk som å overse at noen er det.",
    },
    {
      question: "Hvorfor skjerpes de eksterne normene i lukkede miljøer?",
      options: ["Konsekvensene av å bli gjenkjent er større, og tilgangen gis av noen som risikerer noe", "Deltakerne er som regel mindre utdannede og forstår derfor informasjonen dårligere enn deltakere i åpne miljøer gjør", "Forskeren må være til stede lenger, og lang tid i felt gir automatisk større belastning", "Slike miljøer er som regel underlagt egne regler om taushetsplikt og innsyn"],
      explanation: "Riktig svar knytter skjerpingen til risiko og til relasjonen som oppstår når noen slipper forskeren inn. Utdanningsnivå og feltarbeidets lengde er ikke det som gjør situasjonen særegen.",
    },
    {
      question: "Hva er hovedbegrunnelsen for skjult observasjon som metode?",
      options: ["At kunnskap om å bli studert endrer atferden, slik at åpen observasjon svikter", "At det er praktisk vanskelig å informere alle som befinner seg i et offentlig rom", "At deltakerne ellers ville krevd godtgjørelse for tiden de bruker på studien", "At forskeren får bedre tilgang til miljøet når hun ikke må forklare hensikten for en portvakt først"],
      explanation: "Riktig svar er det metodiske argumentet om at observasjon endrer det observerte. Merk at argumentet ikke avgjør spørsmålet: jo mer privat rommet er, og jo større konsekvensene av å bli gjenkjent, desto tyngre veier samtykkekravet.",
    },
    {
      question: "Hva er forskjellen på konfidensialitet og privatliv som normkrav?",
      options: ["Konfidensialitet gjelder hva forskeren gjør med opplysningene, privatliv hva hun spør om og ser", "Konfidensialitet er lovfestet i detalj, mens privatliv bare er en faglig anbefaling uten hjemmel", "Konfidensialitet gjelder under datainnsamlingen, privatliv først ved publisering", "Konfidensialitet gjelder deltakerne, mens privatliv gjelder tredjepersoner i materialet"],
      explanation: "Riktig svar skiller behandlingen av opplysninger fra selve inngrepet i den enkeltes sfære. De to blandes ofte, men de kan svikte hver for seg: en forsker kan behandle opplysninger helt korrekt og likevel ha spurt om noe hun ikke burde spurt om.",
    },
    {
      question: "Hvorfor er publiseringsfasen forskningsetisk viktig?",
      options: ["Det er da beskrivelsen kommer tilbake til feltet og kan oppleves som en dom", "Det er da forskeren mister kontrollen over hvem som får tilgang til materialet", "Det er da deltakerne får anledning til å trekke samtykket sitt tilbake", "Det er da eventuelle feil i analysen blir oppdaget av fagfeller i miljøet og kan rettes opp i ettertid"],
      explanation: "Riktig svar er tilbakeføringen til feltet: et prosjekt kan være forsvarlig gjennom hele innsamlingen og likevel gjøre skade når det publiseres. Merk at dette gjelder også når ingen kan identifiseres — det handler om hva det gjør med folk å bli beskrevet.",
    },
    {
      question: "Hva er riktig om samfunnets interesse i kunnskap?",
      options: ["Det er et hensyn innenfor den eksterne etikken, ikke et argument mot den", "Det er et hensyn som alltid viker for deltakerens interesse i å være i fred", "Det er et hensyn som bare gjelder oppdragsforskning finansiert av det offentlige", "Det er et hensyn som tilhører den interne etikken, siden det gjelder kunnskapen"],
      explanation: "Riktig svar plasserer hensynet riktig: normene skal beskytte samfunnet, og noen ganger krever det at skjulte forhold undersøkes. At hensynet alltid viker, ville gjort infiltrasjonsdebatten meningsløs.",
    },
    {
      question: "Hva sa H2019 om oppgaven med dilemmaer fra Fangens kapittel?",
      options: ["At en besvarelse uten eksempler fra kapitlet skal regnes som en vesentlig mangel", "At kandidatene stod fritt til å velge hvilken kilde de ville hente eksempler fra", "At kapitlet bare var relevant for de kandidatene som hadde valgt kvalitativ fordypning", "At eksempler fra kapitlet ville gi ekstra uttelling, men ikke var påkrevd"],
      explanation: "Riktig svar er den skarpe instruksen om vesentlig mangel. Det er det klareste eksempelet i hele materialet på at et oppgaveledd må følges bokstavelig: blir du bedt om å bruke en bestemt kilde, er den ikke valgfri.",
    },
    {
      question: "Hva er problemet med å løse et konfidensialitetsdilemma ved å «anonymisere»?",
      options: ["Anonymisering fjerner navn, men ikke den gjenkjennbarheten konteksten gir", "Anonymisering krever teknisk kompetanse som de fleste forskere mangler, og må derfor kjøpes eksternt", "Anonymisering er i strid med kravet om at forskningen skal være etterprøvbar", "Anonymisering forutsetter at deltakerne har samtykket til at navnene endres"],
      explanation: "Riktig svar er at tiltaket ikke treffer problemet: i små miljøer identifiserer rollen alene. Anonymisering er ett virkemiddel mot konfidensialitetsbrudd, ikke selve målet — og det er ofte utilstrekkelig.",
    },
    {
      question: "Hva er nærhet og distanse som etisk dilemma i felt?",
      options: ["Tilliten som gir tilgang, skaper også en forpliktelse som gjør publisering vanskelig", "Forskeren må velge mellom å observere på avstand og å delta i det som skjer", "Forskeren risikerer å bli så kjent i miljøet at hun ikke lenger ser det med friske øyne", "Deltakerne forventer at forskeren tar deres parti i konflikter innad i miljøet"],
      explanation: "Riktig svar knytter dilemmaet til forpliktelsen: nærhet skaper tillit, og tilliten kan gjøre det vanskelig å skrive det som faktisk ble observert. De andre er reelle utfordringer, men de er metodiske snarere enn etiske.",
    },
    {
      question: "Hva betyr det at et signert skjema ikke er nok for gyldig samtykke?",
      options: ["Samtykke er en forståelse av hva man sier ja til, ikke en formell underskrift", "Skjemaet må i tillegg være godkjent av en forskningsetisk komité på forhånd for at samtykket skal gjelde", "Skjemaet må fornyes hver sjette måned så lenge prosjektet pågår", "Underskriften må bevitnes av en tredjeperson for å være forskningsetisk gyldig"],
      explanation: "Riktig svar er at forståelsen er kravet. En deltaker som har krysset av uten å ha forstått hva materialet skal brukes til, har ikke samtykket i normens forstand — og et langt skriv med fagord kan gi dårligere samtykke enn en kort muntlig forklaring.",
    },
    {
      question: "Når kan en påstand om at et prosjekt er etisk forsvarlig, ikke støtte seg på at det er meldt og godkjent?",
      options: ["Alltid: godkjenning fanger det forutsigbare, mens ansvaret ligger hos forskeren", "Bare når prosjektet er endret etter at meldingen ble sendt inn til vurdering, slik at vedtaket ikke passer", "Bare når prosjektet omfatter sårbare deltakere eller sensitive personopplysninger", "Bare når prosjektet gjennomføres i et annet land enn der godkjenningen ble gitt"],
      explanation: "Riktig svar er at forhåndsvurderingen ikke kan fange dilemmaene som oppstår i felt, og at ansvaret ligger hos forskeren og ikke hos ordningen. Endring og sårbarhet skjerper poenget, men de skaper det ikke.",
    },
    {
      question: "Hva er den vanligste formen for feil #9 i et svar om ekstern forskningsetikk?",
      options: ["Å kalle et brudd på samtykkekravet internt fordi troverdigheten svekkes", "Å nevne de eksterne normene uten å oppgi Balsvik som avsender for inndelingen", "Å behandle konfidensialitet og privatliv som to helt atskilte normkrav med hver sin begrunnelse", "Å hevde at samfunnets interesse i kunnskap aldri kan veie tyngre enn samtykkekravet"],
      explanation: "Riktig svar beskriver forvekslingen mellom kriteriet og ringvirkningene. Alle brudd svekker troverdigheten, men kriteriet er hvem normen beskytter — og det er nettopp derfor huskeregelen er ett spørsmål og ikke to lister.",
    },
    {
      question: "Hva bør et forslag til tiltak i et forskningsetisk dilemma alltid inneholde?",
      options: ["En setning om hva tiltaket koster, og hvem kostnaden faller på", "En henvisning til det regelverket tiltaket er hjemlet i, med paragraf og ledd oppgitt", "En vurdering av hvor mye ekstra tid tiltaket vil kreve av forskeren", "En bekreftelse fra deltakeren på at tiltaket oppleves som tilstrekkelig"],
      explanation: "Riktig svar er prisen og hvem den rammer. Et tiltak uten pris er et hakekryss i en sjekkliste, ikke en drøfting — og det er nettopp avveiningen sensor er ute etter i denne sjangeren.",
    },
  ],
  'svexfac03-5-3': [
    {
      question: "Hva kan en oppdragsgiver bestemme i et forskningsoppdrag?",
      options: ["Tema og problemstilling, avgrensningen, fristen og budsjettet for arbeidet", "Hvilke deltakere som skal inngå i utvalget, og hvordan de skal rekrutteres", "Hvilken konklusjon rapporten skal ende med, så lenge den er faglig forsvarlig", "Om rapporten skal offentliggjøres, hvis funnene er forretningssensitive"],
      explanation: "Riktig svar er rammene rundt oppdraget. Utvalget hører til forskningsprosessen og kan ikke styres, en bestilt konklusjon er feil #15, og publiseringsretten ligger hos forskeren — det er de tre leddene V2025 sier må komme klart fram.",
    },
    {
      question: "Hva er begrunnelsen for forskningens frihet?",
      options: ["At et resultat som kunne vært styrt av den som betalte, ikke kan stoles på", "At forskere har krav på faglig selvstendighet som en del av sine arbeidsvilkår", "At uavhengig forskning gir bedre resultater enn forskning finansiert av oppdrag", "At oppdragsgivere sjelden har den faglige kompetansen som kreves for å styre arbeidet"],
      explanation: "Riktig svar er kunnskapens pålitelighet: et styrt resultat er ubrukelig også når det tilfeldigvis er riktig. Friheten er altså ikke en rettighet forskeren har for sin egen skyld, og den hviler ikke på at oppdragsgivere mangler kompetanse.",
    },
    {
      question: "Hvorfor er publiseringsretten kalt prøvesteinen?",
      options: ["Den avgjør om et ubehagelig funn i det hele tatt blir kjent for andre", "Den er den eneste grensen som er nedfelt i lov og kan håndheves rettslig", "Den er den klausulen oppdragsgivere oftest forsøker å forhandle bort under kontraktsforhandlingene", "Den avgjør hvem som har opphavsrett til rapporten når prosjektet er ferdig"],
      explanation: "Riktig svar er at de andre grensene kan formuleres pent i en kontrakt og likevel omgås, mens denne ikke kan det. Uten publisering finnes funnet i praksis ikke, uansett hvor korrekt undersøkelsen ble gjennomført.",
    },
    {
      question: "Hva er forskjellen på en utsettelsesklausul og en vetoklausul?",
      options: ["Utsettelsen sier «ikke nå», mens vetoretten sier nei én gang for alle", "Utsettelsen gjelder mediekontakt, mens vetoretten gjelder selve rapporten", "Utsettelsen må avtales skriftlig, mens vetoretten kan avtales muntlig", "Utsettelsen gjelder oppdragsforskning, mens vetoretten bare finnes i fri forskning"],
      explanation: "Riktig svar er tidsdimensjonen. Merk poenget som følger: en lang nok utsettelse virker som et veto, fordi et funn som kommer sent nok, ikke lenger påvirker noe — derfor må lengden være avtalt og begrunnet.",
    },
    {
      question: "Hva er den vanskeligste formen for styring i oppdragsforskning?",
      options: ["Å bestemme hvem som skal inngå i utvalget, uten å røre ved noen tolkning", "Å kreve at rapporten skrives på et bestemt språk eller i et bestemt format", "Å be om at rapporten leveres tidligere enn opprinnelig avtalt i kontrakten", "Å nekte å betale den siste delen av honoraret før rapporten er godkjent av oppdragsgiverens ledelse"],
      explanation: "Riktig svar er den indirekte styringen gjennom utvalget: hvem som er med, avgjør hva undersøkelsen kan finne. Den er langt vanskeligere å oppdage enn en vetoklausul og like alvorlig — og koblingen til utvalgets betydning i metodedelen er et A-grep.",
    },
    {
      question: "Hva er feil #15?",
      options: ["Å tro at forskningsresultater kan bestilles på linje med en tjeneste", "Å blande sammen intern og ekstern forskningsetikk i en besvarelse", "Å behandle korrelasjon som årsak uten å prøve de tre betingelsene", "Å gi eksempler på forskningsetiske normbrudd uten å begrunne hvem de rammer"],
      explanation: "Riktig svar er troen på at resultater kan bestilles, og dette kapitlet er feilens hovedhjem. Å blande kategoriene er feil #9, korrelasjon og årsak er feil #13, og eksempler uten begrunnelse er feil #12.",
    },
    {
      question: "Hvorfor er en bestilt konklusjon logisk sett ikke et forskningsresultat?",
      options: ["Fordi et svar som var avtalt på forhånd, ikke har fått innhold av undersøkelsen", "Fordi ingen seriøs forsker ville akseptert et slikt oppdrag i utgangspunktet", "Fordi konklusjonen da ville vært i direkte strid med kravet om etterprøvbarhet", "Fordi oppdragsgiveren ikke har faglig grunnlag for å formulere en konklusjon"],
      explanation: "Riktig svar peker på informasjonsinnholdet: hele poenget med en undersøkelse er at utfallet ikke er kjent på forhånd. Begrunnelsen er dermed ikke bare normativ, og det er nettopp det som gjør den sterk i et redegjørelsesledd.",
    },
    {
      question: "Hvordan settes sannhetsnormen under press i oppdragsforskning?",
      options: ["Gjennom hva som utelates, hvordan noe formuleres og hva sammendraget løfter fram", "Gjennom at oppdragsgiveren krever tilgang til det innsamlede datamaterialet", "Gjennom at forskeren må levere raskere enn faglig forsvarlig innenfor fristen", "Gjennom at oppdragsgiveren nekter å oppgi hvem som har finansiert hele arbeidet"],
      explanation: "Riktig svar peker på de tre måtene som ikke krever at et eneste tall endres. Det er samme mekanisme som «koking» av data: utvalget av hva som fortelles, gjør framstillingen villedende uten at noe enkeltledd er usant.",
    },
    {
      question: "Til hvilken kategori hører oppdragsforskningens hovedproblemer?",
      options: ["Intern forskningsetikk, siden det er sannheten og åpenheten som presses", "Ekstern forskningsetikk, siden det er samfunnet som rammes av skjeve funn", "Begge kategorier likt, siden oppdragsprosjekter også har deltakere", "Ingen av kategoriene, siden dette er et spørsmål om kontraktsrett"],
      explanation: "Riktig svar følger av kriteriet om hvem normen beskytter: kunnskapen og forskerfellesskapet. Et oppdragsprosjekt har selvsagt også deltakere som skal beskyttes, men det er ikke det som gjør oppdragsforskning til et eget tema.",
    },
    {
      question: "Hva er skjevhet i temavalg?",
      options: ["At mønsteret i hva som undersøkes, formes av hvem som har råd til å bestille", "At forskeren velger de problemstillingene hun selv finner mest interessante", "At oppdragsgiveren avgrenser problemstillingen for snevert til å gi mening", "At utvalget i undersøkelsen ikke speiler den gruppen funnene skal gjelde for"],
      explanation: "Riktig svar er poenget på systemnivå: hvert enkelt prosjekt kan være helt korrekt, mens den samlede kunnskapen likevel blir skjev. At utvalget ikke speiler gruppen, beskriver utvalgsskjevhet, som er noe annet og gjelder innenfor ett prosjekt.",
    },
    {
      question: "Hva gjør åpenhet om finansiering for leseren?",
      options: ["Den gir grunnlag for å vurdere selv, uten å fjerne muligheten for påvirkning", "Den garanterer at oppdragsgiveren ikke har påvirket noen del av arbeidet", "Den erstatter kravet om at framgangsmåten skal beskrives i rapporten", "Den innebærer en innrømmelse av at resultatet kan være farget av finansieringen"],
      explanation: "Riktig svar er at åpenhet erstatter en umulig renhet: ingen kan garantere at finansieringen ikke har påvirket noe, men leseren kan vurdere når hun vet. Opplysningen er informasjon, ikke en innrømmelse.",
    },
    {
      question: "Hva er forskjellen på interessekonflikt og inhabilitet?",
      options: ["Interessekonflikt løses med åpenhet, mens inhabilitet krever at man trer til side", "Interessekonflikt gjelder økonomi, mens inhabilitet gjelder personlige relasjoner", "Interessekonflikt oppstår i oppdragsforskning, mens inhabilitet gjelder all forskning", "Interessekonflikt må meldes til institusjonen, mens inhabilitet vurderes av forskeren selv"],
      explanation: "Riktig svar er hvordan de håndteres. Skillet går ved om tilknytningen er så nær at åpenhet ikke er nok — og habilitet handler om tilliten til vurderingen, ikke om at vurderingen faktisk er gal.",
    },
    {
      question: "Hvilken anmodning fra en oppdragsgiver skal alltid vurderes på fritt faglig grunnlag og kan følges?",
      options: ["At en faktafeil om regelverket blir rettet opp i den ferdige rapporten", "At et avsnitt om usikkerhet flyttes til et vedlegg bakerst i rapporten", "At sammendraget dempes fordi formuleringen kan misforstås av leserne", "At publiseringen utsettes til etter at en politisk beslutning er tatt"],
      explanation: "Riktig svar gjør rapporten faglig bedre, og oppdragsgiveren kjenner ofte feltet best. Kriteriet er om endringen er begrunnet faglig eller i hvordan funnet mottas — å flytte usikkerheten endrer ingen setning, men mye av hva leseren sitter igjen med.",
    },
    {
      question: "Hva er grensen mot rådgivning?",
      options: ["Skillet mellom å undersøke hva som er tilfellet og å anbefale hva noen bør gjøre", "Skillet mellom oppdrag fra offentlige og fra private oppdragsgivere i markedet", "Skillet mellom å levere en rapport og å presentere den for oppdragsgiveren", "Skillet mellom forskning som publiseres og forskning som holdes internt"],
      explanation: "Riktig svar er skillet mellom funn og anbefaling. De to kan leveres i samme rapport, men bør holdes fra hverandre i teksten — ellers framstår verdivalgene som om de var resultater, og det er broen til spørsmålet om verdifrihet.",
    },
    {
      question: "Hvorfor er tillit til forskning beskrevet som et fellesgode?",
      options: ["Den bygges opp langsomt av mange, og kan brytes ned raskt av noen få", "Den er nedfelt i lovverket og forvaltes av institusjonene på vegne av alle", "Den fordeles likt mellom fagmiljøer uavhengig av hvor mye de publiserer", "Den kan måles gjennom undersøkelser av befolkningens holdninger til forskning"],
      explanation: "Riktig svar forklarer hvorfor et enkelt tilfelle av styrt oppdragsforskning er alvorligere enn skaden i det ene prosjektet: det svekker grunnlaget for at også uavhengige funn blir trodd. Omdømme er derimot den enkelte institusjonens anseelse.",
    },
    {
      question: "Hva gjelder kravet om etterprøvbarhet i oppdragsforskning?",
      options: ["Framgangsmåten og grunnlaget, men ikke nødvendigvis selve råmaterialet", "Alt materiale skal offentliggjøres samtidig med den ferdige rapporten, også intervjuutskriftene", "Bare de delene av arbeidet som oppdragsgiveren har godkjent for publisering", "Bare oppdrag finansiert av offentlige midler, ikke oppdrag fra private aktører"],
      explanation: "Riktig svar skiller mellom de to nivåene: det er som regel mulig å beskrive utvalg, spørsmål og analyse fullt ut uten å røpe noe fortrolig. Kravet gjelder uansett hvem som betaler, og full offentliggjøring av materialet ville kollidert med konfidensialiteten.",
    },
    {
      question: "Hva er den beste innvendingen mot påstanden om at et oppdrag med bestilt problemstilling allerede er farget?",
      options: ["En avgrenset problemstilling er ikke en styrt konklusjon, og funnet er fortsatt åpent", "Oppdragsgivere har sjelden interesse av et bestemt utfall når de bestiller forskning", "Kontrakter kan utformes slik at all påvirkning fra oppdragsgiveren er utelukket", "Fri forskning er nøytral, og oppdragsforskning bør derfor sammenlignes med den"],
      explanation: "Riktig svar skiller de to nivåene: å velge spørsmål er ikke å velge svar. Den siste påstanden er dessuten gal — også i fri forskning styres temavalget av finansiering, publiserbarhet og hva fagmiljøet finner interessant.",
    },
    {
      question: "Hva bør et institutt gjøre hvis oppdragsgiveren insisterer på endringer som ikke er faglig begrunnet?",
      options: ["Publisere i den formen den faglige vurderingen tilsier, med en merknad om uenigheten", "Følge anmodningen, men opplyse i rapporten om at endringen ble krevd", "Trekke rapporten tilbake og la oppdragsgiveren publisere den på egen hånd senere", "Overlate avgjørelsen til oppdragsgiveren, siden kontrakten regulerer forholdet"],
      explanation: "Riktig svar ivaretar både publiseringsretten og oppdragsgiverens legitime interesse i å bli hørt. Å følge anmodningen med en fotnote endrer ikke at framstillingen er blitt villedende, og å overlate avgjørelsen er å gi fra seg det faglige ansvaret.",
    },
  ],
  'svexfac03-6-1': [
    {
      question: "Hva krever verdifrihetsidealet slik Grimen framstiller Weber?",
      options: ["At forskerens verdidommer ikke skal avgjøre hva som framstilles som sant", "At forskeren ikke skal ha politiske meninger om det hun studerer i det hele tatt", "At forskningstemaet skal velges uten hensyn til hva noen mener er viktig", "At forskeren skal unngå begreper som bærer en vurdering med seg inn i analysen"],
      explanation: "Idealet er en regel for hva som får framstilles som et resultat, ikke en regel for forskerens indre liv eller for temavalget. Distraktoren om politiske meninger tester verdinøytralitet, som er noe strengere og noe annet. Distraktoren om temavalg tester verdirelatert temavalg, som idealet nettopp tillater.",
    },
    {
      question: "Hva er kjennetegnet på en erkjennelsespåstand?",
      options: ["Den sier hvordan noe er, og den kan i prinsippet etterprøves av andre", "Den sier hva som bør gjøres, og den kan begrunnes overfor andre mennesker", "Den bedømmer noe som godt eller dårlig ut fra et oppgitt verdipremiss", "Den er fri for begreper som bærer en vurdering i seg fra fagets side, og bruker bare nøytrale ord"],
      explanation: "Erkjennelse handler om å finne ut hvordan noe er, og resultatet er påstander andre kan kontrollere. Å bedømme noe som godt eller dårlig er en vurdering. At påstanden er fri for verdiimpregnerte begreper, er ikke et krav — samfunnsvitenskapelige erkjennelsespåstander bruker slike begreper hele tiden.",
    },
    {
      question: "Hva menes med verdirelatert temavalg?",
      options: ["At valget av hva som skal studeres, er styrt av hva noen mener er viktig", "At forskeren lar sitt eget syn avgjøre hvilke funn som blir rapportert, og hvilke som blir utelatt", "At begrepene forskeren bruker, allerede bærer en vurdering i seg", "At konklusjonen inneholder en anbefaling framstilt som et forskningsresultat"],
      explanation: "Verdirelatert temavalg gjelder spørsmålsvalget, ikke behandlingen av svaret, og idealet tillater det. Verdiimpregnering og konklusjonsladning ligger andre steder i kjeden, og av dem er det bare konklusjonsladningen som er et brudd på idealet.",
    },
    {
      question: "Hva er et verdiimpregnert fenomen?",
      options: ["Et fenomen eller begrep som allerede bærer en vurdering i seg før forskeren tar det i bruk", "Et fenomen som bare kan studeres av forskere som selv deler verdiene til dem det gjelder", "Et fenomen der forskeren har oppgitt sitt eget verdipremiss åpent i innledningen", "Et fenomen som er valgt som tema fordi noen mente det var viktig nok til å finansiere"],
      explanation: "Impregneringen sitter i begrepet, ikke i forskeren og ikke i finansieringen. Ord som mobbing, utenforskap og velfungerende familie har allerede tatt stilling til noe. Distraktoren om oppgitt verdipremiss beskriver motgiften, ikke fenomenet.",
    },
    {
      question: "Hvorfor følger det ingen bør-påstand av en samling er-påstander alene?",
      options: ["Fordi det alltid trengs minst ett verdipremiss i tillegg til de empiriske premissene", "Fordi empiriske påstander alltid er beheftet med en usikkerhet som gjør dem svake", "Fordi samfunnsvitenskapelige data sjelden er presise nok til å bære en anbefaling", "Fordi forskeren ikke har noen faglig autoritet utenfor sitt eget spesialområde"],
      explanation: "Poenget er logisk, ikke praktisk: en slutning til hva som bør gjøres krever et premiss om hva som er ønskelig, og det premisset kan ikke måles. Distraktorene gjør poenget til et spørsmål om datakvalitet eller autoritet, som er noe helt annet.",
    },
    {
      question: "Hva er forskjellen på verdifrihet og verdinøytralitet?",
      options: ["Verdifrihet er en regel om hva som får framstilles som sant, verdinøytralitet en påstand om forskerens indre liv", "Verdifrihet gjelder metoden som er brukt, mens verdinøytralitet gjelder valget av forskningstema og finansieringskilde", "Verdifrihet gjelder samfunnsvitenskap, mens verdinøytralitet er naturvitenskapens strengere variant", "Verdifrihet gjelder de publiserte funnene, mens verdinøytralitet gjelder rådene forskeren gir oppdragsgiveren etter at rapporten er levert"],
      explanation: "Skillet er nettopp at det ene kan kontrolleres i en tekst og det andre ikke kan kontrolleres i det hele tatt. De fleste innvendinger som framføres mot verdifrihet, treffer egentlig verdinøytralitet, og å si det er et selvstendig poeng i drøftingen.",
    },
    {
      question: "Hvilket av disse stedene rammes av verdifrihetsidealet som et brudd?",
      options: ["At en anbefaling presenteres som om den fulgte direkte av undersøkelsens funn", "At forskeren valgte temaet fordi hun selv mener problemet er samfunnsviktig", "At et av begrepene i undersøkelsen bærer en vurdering med seg inn i selve målingen av det som skal telles", "At oppdragsgiveren har en politisk interesse av at prosjektet blir gjennomført"],
      explanation: "Riktig svar er konklusjonsladningen: der framstilles en vurdering som et resultat. Temavalg og impregnering er uunngåelige og skal håndteres med åpenhet, og oppdragsgiverens interesse er et forskningsetisk spørsmål snarere enn et verdifrihetsspørsmål.",
    },
    {
      question: "Hva innebærer objektivitet forstått som upartiskhet?",
      options: ["At materialet behandles likt uansett hva det viser, også når funnene taler mot hypotesen", "At framgangsmåten er beskrevet så nøye at en annen forsker kan gjenta hele undersøkelsen på egen hånd", "At forskerens egne vurderinger holdes helt utenfor det som presenteres som funn", "At forskeren ikke har noen personlig interesse av hvordan undersøkelsen faller ut, verken økonomisk eller faglig"],
      explanation: "Upartiskhet gjelder behandlingen av materialet og kan kontrolleres i en publikasjon. Beskrivelsen av framgangsmåten hører til intersubjektiv etterprøvbarhet, og fravær av forskerens vurderinger er den strengeste av de tre betydningene.",
    },
    {
      question: "Hva er kjernen i objektivitet forstått som intersubjektiv etterprøvbarhet?",
      options: ["At arbeidet er lagt fram slik at andre, med andre verdier, kan kontrollere det", "At flertallet av forskerne på feltet er kommet fram til det samme resultatet og står samlet bak konklusjonen", "At forskeren har lykkes i å legge sine egne verdidommer helt til side", "At undersøkelsen er gjennomført uten kontakt med dem som har interesser i saken"],
      explanation: "Objektiviteten flyttes fra personen til fellesskapet: kravet gjelder teksten og institusjonen, ikke forskerens sinnstilstand. Enighet er ikke det samme som etterprøvbarhet — poenget er nettopp at uenige forskere skal kunne gå hverandre etter i sømmene.",
    },
    {
      question: "Hva er Grimens egen innvending mot verdifrihetslæren?",
      options: ["At skillet mellom verdier og erkjennelse er mer problematisk enn Weber gir inntrykk av", "At Weber overdriver hvor lett det er for forskere å skjule sine politiske sympatier", "At verdifrihetsidealet er unødvendig fordi forskningsetikken dekker det samme området", "At idealet er hentet fra naturvitenskapen og derfor ikke passer i samfunnsvitenskapene"],
      explanation: "Innvendingen er at renheten i skillet er overdrevet, blant annet fordi begrepene er verdiimpregnerte og fordi det å beskrive er å velge hva som er verdt å beskrive. Den avviser ikke idealet, og den handler ikke om forskeres sympatier eller om fagets opphav.",
    },
    {
      question: "Hva er intersubjektivitet, slik begrepet brukes her?",
      options: ["At noe kan kontrolleres og bekreftes av flere uavhengige personer", "At forskere på samme felt deler et sett av grunnleggende verdier som holder fagmiljøet samlet", "At forskeren og deltakerne blir enige om hvordan situasjonen skal forstås", "At påstanden er formulert slik at den ikke kan bestrides av noen"],
      explanation: "Riktig svar er den uavhengige kontrollen. Alternativet om delte verdier snur poenget på hodet — kontrollen er verdifull nettopp fordi kontrollørene ikke deler forskerens verdier. Enighet mellom forsker og deltaker er en helt annen sak, som hører hjemme i kvalitativ metode.",
    },
    {
      question: "Hva vil det si at verdifrihet kan forstås som et regulativt ideal?",
      options: ["At idealet ikke kan nås fullt ut, men gjør arbeidet bedre jo mer det styrer det", "At idealet er nedfelt i regelverk som forskningsinstitusjonene plikter å følge, med sanksjoner ved brudd", "At idealet gjelder for publisering, men ikke for arbeidet som ligger forut for den", "At idealet bare gjelder for forskere som uttaler seg offentlig om politiske spørsmål"],
      explanation: "Et regulativt ideal måles i om det styrer, ikke i om det er nådd. Ordet «regulativt» viser til styring, ikke til regelverk — det er den nære distraktoren her, og den er verdt å merke seg fordi ordet trekker tanken mot forskrifter.",
    },
    {
      question: "Hvorfor er verdiimpregnering et skarpere problem i samfunnsvitenskap enn i naturvitenskap?",
      options: ["Fordi de studerte selv bruker og strides om de begrepene faget måler med", "Fordi samfunnsforskere gjennomgående har sterkere politiske meninger enn andre forskere", "Fordi samfunnsvitenskapelige data er mindre presise og derfor lettere å tolke i flere retninger", "Fordi samfunnsvitenskapen oftere er finansiert av oppdragsgivere med egne interesser"],
      explanation: "Forskjellen ligger i gjenstanden: et kjemisk stoff har ingen mening om begrepene som brukes om det, mens mobbing og integrering er ord som allerede er i bruk og i strid blant dem som studeres. Forskjellen handler verken om forskernes personlighet eller om finansiering.",
    },
    {
      question: "Hva er den praktiske regelen som følger av kravet om intersubjektiv kontroll?",
      options: ["Å skrive ut verdipremissene der du vurderer, slik at andre kan regne om", "Å unngå å vurdere i det hele tatt i tekster som skal publiseres i tidsskrift", "Å la en kollega med samme faglige ståsted lese gjennom teksten før innsending", "Å begrense seg til data som lar seg måle uten bruk av skjønn i kodingen"],
      explanation: "Åpne verdipremisser gjør ladningen synlig, og synlig ladning kan leseren korrigere for. Å unngå vurderinger helt er verken mulig eller påkrevd, og en kollega med samme ståsted gir nettopp ikke den uavhengige kontrollen som er poenget.",
    },
    {
      question: "En rapport slutter: «Deltakelsen har falt, og ordningen bør derfor legges ned.» Hva er den vitenskapsteoretiske innvendingen?",
      options: ["Anbefalingen hviler på et usagt verdipremiss som ikke følger av tallene", "Tallene om deltakelse er sannsynligvis ikke kontrollert for endringer i befolkningen", "Forskeren har blandet intern og ekstern forskningsetikk i vurderingen sin", "Rapporten burde ha oppgitt hvem som har finansiert undersøkelsen av ordningen"],
      explanation: "Ordet «derfor» påstår at anbefalingen følger av målingen, og der ligger spranget fra er til bør. De andre alternativene peker på reelle, men andre problemer — metodekontroll og forskningsetikk — og treffer ikke skillet oppgaven prøver.",
    },
    {
      question: "Hva er forskjellen på forskerrollen og rådgiverrollen?",
      options: ["Forskeren rapporterer hva som er tilfellet, rådgiveren anbefaler ut fra et verdipremiss", "Forskeren arbeider for et universitet, mens rådgiveren arbeider for en oppdragsgiver", "Forskeren bruker kvantitative data, mens rådgiveren bygger på skjønn og erfaring", "Forskeren publiserer åpent, mens rådgiveren leverer til en lukket krets av mottakere"],
      explanation: "Skillet går på hva slags påstand som framsettes, ikke på arbeidsgiver, metode eller publiseringsform. Verdifrihetsidealet forbyr ikke forskere å gi råd — det krever at leseren kan se når rollen skifter.",
    },
    {
      question: "Hvordan kan verdier være forskningsobjekt uten at verdifrihetsidealet brytes?",
      options: ["Ved at forskeren undersøker hvilke verdier folk har, uten å ta stilling til om de er riktige", "Ved at forskeren bare velger seg temaer der hun selv ikke har noen personlige oppfatninger fra før", "Ved at forskeren erstatter de verdiladede begrepene med tekniske og nøytrale termer", "Ved at forskeren overlater tolkningen av materialet til en uavhengig kollega"],
      explanation: "Verdier i materialet er noe annet enn verdier i premissene: å kartlegge hva grupper mener om en avgift, krever ingen stillingtagen til avgiften. Å bytte ut begreper løser ikke impregneringsproblemet, det flytter det bare til nye ord.",
    },
    {
      question: "Hva er kjennetegnet på en vurdering, i motsetning til en erkjennelse?",
      options: ["Uenigheten består selv når partene er enige om alle fakta i saken", "Påstanden bygger på et lite utvalg og lar seg derfor ikke generalisere", "Påstanden gjelder framtiden og kan derfor ikke kontrolleres i dag", "Påstanden er formulert av en forsker som selv er berørt av saken og vil vinne på konklusjonen"],
      explanation: "Testen er nettopp om enigheten om fakta oppløser uenigheten. Gjør den ikke det, hviler striden på et verdipremiss. Alternativene om utvalg og framtid beskriver empirisk usikkerhet, som er noe helt annet enn en vurdering.",
    },
    {
      question: "Hva sier verdifrihetsidealet om forskerens rett til å ha politiske meninger?",
      options: ["Ingenting — idealet gjelder hva som framstilles som sant, ikke hva forskeren mener", "At meningene hennes må oppgis i en egen interesseerklæring i alle arbeider som publiseres", "At forskeren bør unngå å forske på felt der hun har sterke standpunkter", "At meningene er tillatt så lenge de ikke er kjent for dem som leser arbeidet eller vurderer det som fagfeller"],
      explanation: "Riktig svar er at idealet ikke regulerer forskerens meninger i det hele tatt. Å lese det som et krav om meningsløshet er kapitlets hovedfeil, og den flytter besvarelsen over på et spørsmål oppgaven ikke stilte.",
    },
    {
      question: "En undersøkelse heter «Kartlegging av utenforskap blant unge voksne». Hvor sitter verdiladningen?",
      options: ["I begrepet, fordi ordet forutsetter at det finnes et innenfor som er det normale", "I konklusjonen, fordi tittelen allerede sier hva undersøkelsen kommer til å finne", "I metoden, fordi kartlegging alltid gir et mer overfladisk bilde enn dybdeintervjuer", "I finansieringen, fordi slike kartlegginger som regel bestilles av forvaltningen"],
      explanation: "Ordet «utenforskap» bærer vurderingen med seg inn i selve måleredskapet, og det er verdiimpregnering. Tittelen sier ingenting om hva som vil bli funnet, og verken metodevalg eller finansiering er verdiladning i denne betydningen.",
    },
    {
      question: "Hvilken av de tre betydningene av objektivitet treffes hardest av innvendingen om verdiimpregnering?",
      options: ["Objektivitet som fravær av forskerens verdidommer i det som presenteres som funn", "Objektivitet som upartisk behandling av materialet uansett hva det viser", "Objektivitet som etterprøvbarhet, altså at andre kan gå arbeidet etter i sømmene", "Objektivitet som krav om at forskeren ikke har interesser i saken hun studerer"],
      explanation: "Er begrepene selv verdiladede, kan ikke funnene bli helt frie for vurderinger, og den strengeste betydningen rammes. Upartiskhet gjelder behandlingen og kan fortsatt kontrolleres, og etterprøvbarheten stiller ingen krav til forskerens indre liv.",
    },
    {
      question: "Hva er poenget med å tolke en åpen oppgave eksplisitt i innledningen?",
      options: ["At sensor ser hvilken av flere mulige lesninger besvarelsen faktisk svarer på", "At besvarelsen får en innledning og dermed en ryddigere ytre disposisjon", "At kandidaten kan begrense seg til den delen av pensum hun kan best", "At oppgaven da regnes som besvart selv om ett av leddene ikke blir behandlet"],
      explanation: "Tolkningssetningen viser hvilken lesning som er valgt, og gjør resten av besvarelsen etterprøvbar for sensor. Den gir ingen adgang til å hoppe over ledd — et hoppet ledd koster uansett, og kan i verste fall felle hele oppgaven.",
    },
    {
      question: "Hva skiller verdifrihetsidealet fra de forskningsetiske normene?",
      options: ["Verdifriheten beskytter påstanden, mens de etiske normene beskytter mennesker", "Verdifriheten gjelder publisering, mens de etiske normene gjelder datainnsamlingen", "Verdifriheten er et faglig ideal, mens de etiske normene er nedfelt i lovverket", "Verdifriheten gjelder kvantitativ forskning, mens etikken særlig gjelder feltarbeid"],
      explanation: "De to kravene har ulike beskyttelsesobjekter, og det er derfor de kan trekke i hver sin retning: et krav om samfunnsnytte gjør temavalget verdistyrt uten å bryte verdifrihetsidealet. Skillet går ikke mellom faser, rettskilder eller metodetyper.",
    },
    {
      question: "Hvorfor er det et poeng at Weber opptrer i to roller i dette emnet?",
      options: ["Fordi rasjonaliseringsteorien og verdifrihetslæren er ulike pensumbiter med hver sine oppgaver", "Fordi Webers senere arbeider bygger på et helt annet menneskesyn og et annet frihetsbegrep enn de tidlige gjør", "Fordi Weber både er klassiker og selv har skrevet om de andre klassikerne i pensum", "Fordi Webers verdifrihetslære bare gjelder for den forskningen han selv utførte"],
      explanation: "Riktig svar er at det er to pensumbiter med hvert sitt begrepsapparat. Å dra rasjonaliseringsteorien inn i et spørsmål om verdifrihet er en egen post i bokas feilregister, og den koster fordi den fyller plass uten å svare.",
    },
    {
      question: "Hva er det sterkeste argumentet for at verdifrihet er praktisk mulig?",
      options: ["At verdier kan gjøres til forskningsobjekt uten at forskerens eget syn kommer inn", "At erfarne forskere lærer seg å legge sine personlige oppfatninger til side gjennom lang trening i faget", "At fagfellevurdering fjerner de arbeidene som er farget av forfatterens standpunkt", "At kvantitative data ikke kan tolkes i mer enn én retning når analysen er korrekt"],
      explanation: "Argumentet holder fordi det peker på en type undersøkelse der skillet faktisk lar seg gjennomføre. De tre andre hviler på antakelser om forskeres selvbeherskelse, om at kontrollordninger er feilfrie, eller om at tall tolker seg selv.",
    },
    {
      question: "Hvordan bør et drøftingsledd om verdifrihet lande for å gi best uttelling?",
      options: ["Med et standpunkt som er begrunnet, og med forbeholdet skrevet ut i klartekst", "Med en oppramsing av de viktigste argumentene på begge sider, uten å velge", "Med en konstatering av at spørsmålet ikke kan avgjøres på faglig grunnlag", "Med en henvisning til at pensum er delt i synet på om idealet er oppnåelig"],
      explanation: "Sterke besvarelser gir argumenter både for og mot, besvarer innvendingen og lander med en egen vurdering. Å ramse opp uten å velge er nettopp det som holder en besvarelse nede, og «det kommer an på» uten grunner er en egen post i feilregisteret.",
    },
  ],
  'svexfac03-6-2': [
    {
      question: "Hvilke tre former for feministisk vitenskapskritikk skiller Holst mellom?",
      options: ["Kjønnsbalansekritikken, standpunktteorien og den postmoderne feminismen", "Kjønnsbalansekritikken, ideologikritikken og den marxistiske feminismen", "Standpunktteorien, essensialismekritikken og den liberale likestillingskritikken", "Den postmoderne feminismen, relativismekritikken og kjønnsrollekritikken"],
      explanation: "Riktig svar er kjønnsbalansekritikken, Hardings standpunktteori og Haraways postmoderne feminisme. De tre skiller seg i hvor dypt de går: om problemet er hvem som deltar, hva som blir sett, eller selve forestillingen om et blikk uten ståsted.",
    },
    {
      question: "Hva kjennetegner kjønnsbalansekritikken?",
      options: ["Den holder seg innenfor et konvensjonelt vitenskapssyn og krever bedre etterlevelse", "Den hevder at objektivitetsidealet må skjerpes med et nytt kontrollpunkt", "Den avviser forestillingen om kunnskap sett fra et sted uten kropp og historie", "Den hevder at marginale posisjoner gir bedre innsikt i hvordan makt virker"],
      explanation: "Kjønnsbalansekritikken angriper praksisen, ikke idealet: metodene er i orden, men de er ikke anvendt godt nok. De tre andre alternativene beskriver standpunktteorien og den postmoderne kritikken, som begge går lenger.",
    },
    {
      question: "Hva er kjernepåstanden i Hardings standpunktteori?",
      options: ["At posisjonen i et maktforhold påvirker hva man kan se, og at marginale posisjoner kan se mer", "At all kunnskap er like gyldig fordi den alltid er produsert fra et bestemt sted", "At kvinner og menn har ulike erfaringer og derfor svarer ulikt i undersøkelser", "At vitenskapen bør rekruttere bredere for at flere grupper skal bli representert"],
      explanation: "Teorien rangerer: noen posisjoner gir bedre innsikt i bestemte spørsmål. Det er nettopp rangeringen som skiller den fra relativisme, og som gjør den til et objektivitetsstandpunkt og ikke bare et krav om mangfold.",
    },
    {
      question: "Hva er sterk objektivitet?",
      options: ["Kravet om at også forskerposisjonens egne forutsetninger skal granskes", "Kravet om at funn må bekreftes av minst to uavhengige forskergrupper før de kan regnes som holdbare", "Kravet om at forskeren skal legge sine personlige verdidommer helt til side", "Kravet om at et forskningsfelt skal rekruttere fra flere sosiale grupper"],
      explanation: "Sterk objektivitet utvider kontrollflaten med ett punkt: forutsetningene som fulgte med forskerposisjonen. Harding kaller den vanlige objektiviteten svak nettopp fordi antakelser som deles av alle, aldri blir kontrollert av noen.",
    },
    {
      question: "Hvorfor kaller Harding det vanlige objektivitetsidealet svakt?",
      options: ["Fordi antakelser som deles av hele forskerfellesskapet, aldri blir kontrollert av noen", "Fordi kravet ikke er nedfelt i forskningsetiske retningslinjer og derfor ikke håndheves", "Fordi det bare gjelder kvantitativ forskning og ikke fanger opp kvalitative studier av mening og erfaring", "Fordi kontrollen av data i praksis utføres av forskeren selv og ikke av noen andre"],
      explanation: "Det svake punktet er de felles forutsetningene, ikke håndhevingen eller metodetypen. Er alle enige om noe uten å ha undersøkt det, blir enigheten forvekslet med kunnskap.",
    },
    {
      question: "Hva menes med situert kunnskap?",
      options: ["At all kunnskap er produsert fra et bestemt sted, og at stedet skal oppgis", "At kunnskap må prøves i den situasjonen den er ment å skulle brukes i", "At kunnskapen om et fenomen er avhengig av hvilken metode som er brukt til å samle inn materialet", "At forskeren skal tilbringe tid i feltet for å forstå deltakernes situasjon"],
      explanation: "Situering handler om ståstedet kunnskapen er sett fra, og om kravet om å oppgi det. Distraktoren om tid i feltet trekker mot deltakende observasjon, som er en metode og noe helt annet.",
    },
    {
      question: "Hva er poenget med uttrykket «outsidere på innsiden»?",
      options: ["At fortrinnet krever både nærhet til systemet og avstand fra sentrum i det", "At forskere bør rekrutteres utenfra for å unngå å bli farget av fagmiljøet", "At den som står helt utenfor et samfunn, ser det klarest fordi ingen bindinger forstyrrer blikket", "At marginaliserte grupper bør delta i forskning som informanter og ikke som forskere"],
      explanation: "Man kjenner reglene fordi man må følge dem, og ser dem fordi de ikke er ens egne. Den som står helt utenfor, ser ikke systemet i det hele tatt — og det er derfor teorien ikke gjelder hvem som helst utenfor makten.",
    },
    {
      question: "Hva innebærer presiseringen om at et standpunkt oppnås?",
      options: ["At standpunktet oppstår gjennom kritisk bearbeiding, og ikke følger av gruppetilhørighet", "At standpunktet må forsvares offentlig før det kan regnes som et vitenskapelig bidrag", "At standpunktet krever formell utdanning innenfor det feltet det gjelder", "At standpunktet endrer seg over tid etter hvert som maktforholdene endrer seg"],
      explanation: "Erfaring er råstoffet, standpunktet er resultatet av å arbeide med det. Uten denne presiseringen kollapser teorien til en påstand om at alle i en gruppe ser det samme, som er nettopp den forenklingen den advarer mot.",
    },
    {
      question: "Hvorfor er «bedre kunnskap» en sterkere påstand enn «annen kunnskap»?",
      options: ["Fordi den rangerer utsiktspunkter og dermed sier noe om kunnskapens kvalitet", "Fordi den forutsetter at kunnskapen er samlet inn med en mer pålitelig metode", "Fordi den innebærer at flere grupper har vært involvert i forskningsarbeidet", "Fordi den forutsetter at forskeren selv tilhører den marginaliserte gruppa som studeres i prosjektet"],
      explanation: "Rangeringen er hele det omstridte i teorien. At ulike grupper ser ulike ting, er alle enige i, og en besvarelse som stopper der, har beskrevet noe uomtvistet i stedet for å svare på oppgaven.",
    },
    {
      question: "Hva er relativisme-innvendingen mot standpunktteorien?",
      options: ["At teorien undergraver seg selv hvis all kunnskap er formet av posisjon", "At teorien behandler grupper som om alle i dem hadde samme erfaring, uansett hvor ulikt de er stilt", "At marginale posisjoner er mange og ser ulike ting som motsier hverandre", "At teorien i praksis brukes til å avvise motargumenter uten å svare på dem"],
      explanation: "Relativisme-innvendingen gjelder teoriens egen status. Svaret om at grupper behandles som om alle i dem hadde samme erfaring, er essensialisme-innvendingen, og svaret om at marginale posisjoner ser ulike ting, er innvendingen om hvilket standpunkt — begge andre og delvis sterkere innvendinger.",
    },
    {
      question: "Hvilken innvending regnes her som den sterkeste mot standpunktteorien?",
      options: ["At marginale posisjoner er mange og gir utsiktspunkter som motsier hverandre", "At teorien ikke kan bevises empirisk med de metodene faget selv bruker", "At teorien er utviklet av forskere som selv sto i marginale posisjoner", "At teorien gjør det vanskelig å kritisere forskning utført av utsatte grupper"],
      explanation: "Innvendingen er sterkest fordi den ikke angriper premisset om at posisjon betyr noe, men konklusjonen om at én posisjon er privilegert. Teorien må da enten velge én posisjon uten grunnlag, eller åpne for mange og miste rangeringen.",
    },
    {
      question: "Hvorfor regnes Harding som konfliktteoretiker?",
      options: ["Fordi kunnskapsfordelingen forklares ved maktforhold og motsatte interesser", "Fordi teorien ble utviklet i uttalt opposisjon til det etablerte forskningsmiljøet", "Fordi den beskriver vitenskapen som et system av gjensidig avhengige deler som holder helheten i gang", "Fordi den ser felles verdier som det som holder et fagfellesskap sammen"],
      explanation: "Forklaringsfiguren er konfliktperspektivets: makt, motsatte interesser og ideologi. Alternativene om gjensidig avhengige deler og felles verdier beskriver funksjonalismen og integrasjonsperspektivet.",
    },
    {
      question: "Hva er ideologikritikk i denne sammenhengen?",
      options: ["Å vise at forestillinger som framstår som allmenne, tjener bestemte posisjoner", "Å avdekke at en forsker har latt sitt eget politiske standpunkt farge konklusjonen", "Å undersøke hvordan politiske ideologier oppstår og spres i en befolkning", "Å vurdere om et forskningsprosjekt er finansiert av en part med interesser i hva undersøkelsen viser"],
      explanation: "Ideologi brukes analytisk om ideer som får et samfunnsforhold til å framstå som naturlig. Å studere ideologiers utbredelse er et helt annet prosjekt, og å avdekke en enkelt forskers politiske farging er verdifrihetsstoff.",
    },
    {
      question: "Hva er en systematisk blindsone slik begrepet brukes her?",
      options: ["Et spørsmål som ikke blir stilt, fordi ingen i posisjon har grunn til å lure på det", "Et svar som er feil fordi utvalget ikke er representativt for befolkningen", "En variabel som er målt, men som forskeren har utelatt fra analysemodellen", "En gruppe som systematisk lar være å svare på undersøkelser om et tema"],
      explanation: "Blindsonen er et fravær av spørsmål, ikke et galt svar eller et frafall i utvalget. Nettopp derfor er den vanskelig å oppdage: den etterlater ingen spor i materialet.",
    },
    {
      question: "Hvordan skiller Haraway seg fra Harding?",
      options: ["Haraway er mer skeptisk til å rangere posisjoner og krever først og fremst åpenhet om ståsted", "Haraway mener at objektivitet er oppnåelig hvis forskeren gjør rede for metoden sin", "Haraway holder seg innenfor et konvensjonelt vitenskapssyn og krever bare bedre praksis", "Haraway hevder at bare kvinnelige forskere kan studere spørsmål som angår kvinner"],
      explanation: "Der Harding rangerer, sier Haraway først og fremst at ingen posisjon er nøytral. Forskjellen er verdt en setning i en redegjørelse, fordi den viser at de to ikke er samme posisjon i ulik innpakning.",
    },
    {
      question: "Hva er essensialisme-innvendingen?",
      options: ["At teorien behandler en gruppe som om alle i den hadde samme erfaring og blikk", "At teorien forutsetter at kunnskap har en kjerne som er uavhengig av posisjonen den er sett fra", "At teorien gir marginale posisjoner et fortrinn den ikke kan begrunne uten sirkelslutning", "At teorien overser at også dominerende posisjoner kan ha verdifull innsikt"],
      explanation: "Innvendingen gjelder gruppetenkningen. Hardings svar er at et standpunkt oppnås gjennom kritisk bearbeiding, så innvendingen treffer den populære versjonen — men den kan omformuleres til en innvending mot hvordan teorien faktisk brukes.",
    },
    {
      question: "Hva sier standpunktteorien om Webers skille mellom er og bør?",
      options: ["At skillet blir vanskeligere å trekke i praksis fordi begrepene er formet av makt", "At skillet er uholdbart i prinsippet og bør forlates som vitenskapelig ideal", "At skillet gjelder for naturvitenskap, men ikke for samfunnsvitenskapelig forskning", "At skillet er uproblematisk så lenge forskeren oppgir sine egne verdipremisser i innledningen til teksten"],
      explanation: "Teorien opphever ikke skillet, men gir en forklaring på hvorfor det er vanskelig: posisjon styrer hvilke spørsmål som stilles og hvilke begreper som brukes. Det ligger tett på Grimens innvending, og koblingen er verdt å skrive ut.",
    },
    {
      question: "Hva var kjønnsbalansekritikkens syn på selve vitenskapsidealet?",
      options: ["At idealet står, og at problemet er at det ikke er blitt godt nok etterlevd", "At idealet må skjerpes med et krav om gransking av forskerposisjonen", "At idealet er en illusjon fordi ingen kunnskap er sett fra ingensteds", "At idealet bør erstattes av et krav om at forskningen skal være nyttig for dem den handler om"],
      explanation: "Kritikken er innenfor et konvensjonelt vitenskapssyn, og det er nettopp det som skiller den fra de to andre formene. Å blande den med standpunktteorien er den vanligste sammenblandingen i dette temaet.",
    },
    {
      question: "Hva er en marginal posisjon i standpunktteoriens forstand?",
      options: ["Et underordnet sted i et bestemt maktforhold, ikke en egenskap ved en person", "En gruppe som utgjør et lite mindretall av befolkningen i et land", "En person som står helt utenfor samfunnets institusjoner og fellesskap", "En faglig posisjon som har liten oppslutning i det vitenskapelige miljøet"],
      explanation: "Teorien handler om posisjoner i relasjoner, ikke om identiteter eller om gruppestørrelse. Samme menneske kan stå marginalt i ett forhold og sentralt i et annet, og det er derfor teorien ikke uten videre kan leses som en påstand om at bestemte grupper alltid har rett.",
    },
    {
      question: "Hva er «blikket fra ingensteds»?",
      options: ["Forestillingen om et vitenskapelig blikk uten kropp, sted og historie", "En metode der forskeren observerer uten å gi seg til kjenne for deltakerne", "Et krav om at forskeren ikke skal ha erfaring fra feltet hun studerer", "Et ideal om at data skal samles inn av andre enn den som analyserer dem"],
      explanation: "Haraway avviser dette som en illusjon og kaller det gudetrikset. Distraktorene beskriver skjult observasjon og arbeidsdeling i forskning, som er metodiske spørsmål og ikke vitenskapsteoretiske.",
    },
    {
      question: "Hvorfor er det et poeng at forskerfellesskapet må romme folk som ikke deler forutsetningene?",
      options: ["Fordi kontrollen av felles antakelser ellers blir utført av folk som deler dem", "Fordi et bredere fellesskap gir raskere framdrift i store forskningsprosjekter", "Fordi finansieringen av forskning krever dokumentert mangfold i prosjektgruppa", "Fordi ulike forskere er trent i ulike metoder og dermed utfyller hverandre"],
      explanation: "Sterk objektivitet forutsetter at noen faktisk kan se det andre tar for gitt. Et fagmiljø som er rekruttert likt, kan ha aldri så gode metoderegler og likevel dele samme blindsone.",
    },
    {
      question: "Hvilken formulering er tegnet på at standpunktteorien er forenklet i en besvarelse?",
      options: ["At kvinner ser ting annerledes enn menn, uten kobling til makt og ideologikritikk", "At marginale posisjoner kan gi bedre innsikt i hvordan et maktforhold faktisk virker i praksis", "At et standpunkt oppnås gjennom kritisk bearbeiding av egen erfaring", "At sterk objektivitet krever at forskerposisjonens forutsetninger granskes"],
      explanation: "Riktig svar er den forenklingen som er en egen post i bokas feilregister. De tre andre formuleringene er nettopp de leddene som mangler når feilen begås, og som skal stå i en fullgod redegjørelse.",
    },
    {
      question: "Hvordan kan et drøftingsledd om standpunktteorien lande uten å bli en unnvikelse?",
      options: ["Ved å skille en sterk og en svak versjon, og si hvilken innvendingen feller", "Ved å konstatere at både teorien og innvendingene har noe for seg", "Ved å vise til at pensum selv er delt i synet på hvor sterk teorien er, og la uenigheten stå som svar", "Ved å konkludere med at spørsmålet er politisk og derfor ikke lar seg avgjøre faglig"],
      explanation: "En delt konklusjon er fullgod når delingen er begrunnet: den sterke versjonen rangerer posisjoner og felles av innvendingen om hvilket standpunkt, mens den svake overlever som et krav om sterk objektivitet. «Det kommer an på» uten grunner er derimot en egen post i feilregisteret.",
    },
    {
      question: "Hva er forskjellen på erfaring og standpunkt i teorien?",
      options: ["Erfaringen er råstoffet, mens standpunktet er resultatet av å bearbeide den kritisk", "Erfaringen er individuell, mens standpunktet alltid deles av en hel gruppe", "Erfaringen gjelder fortiden, mens standpunktet er en oppfatning om framtiden", "Erfaringen er subjektiv, mens standpunktet er kontrollert av forskerfellesskapet"],
      explanation: "To personer med samme erfaring kan trekke motsatte slutninger av den, og det er nettopp derfor teorien ikke sier at enhver i en gruppe har rett. Uten dette skillet blir enhver innvending et angrep på noen som har erfart noe.",
    },
  ],
  'svexfac03-7-1': [
    {
      question: "Hva er en struktur i samfunnsvitenskapelig forstand?",
      options: ["Mønstre utenfor den enkelte som fordeler muligheter og kostnader ulikt", "En organisasjon med formelle stillinger, vedtekter og et definert ansvar", "Summen av holdningene til dem som til enhver tid er med i en gruppe", "Et sett av vaner som den enkelte har lagt seg til gjennom oppveksten, og som følger personen videre"],
      explanation: "Strukturen er fordelinger, posisjoner, regler og forventninger — ikke en organisasjon og ikke summen av holdninger. Alternativet om vaner beskriver noe som ligger i personen, og det er nettopp motsatsen til struktur.",
    },
    {
      question: "Hva er en aktør i denne sammenhengen?",
      options: ["Den handlende, som har mål, oppfatninger og et handlingsrom å velge i", "Den som har formell myndighet til å fatte beslutninger i en sak, og som derfor kan binde andre", "Et menneske som lar seg påvirke lite av forholdene rundt seg", "En person som er seg bevisst hvilken sosial posisjon hun selv befinner seg i"],
      explanation: "Aktørbegrepet forutsetter bare at noen handler og kunne ha handlet annerledes. Verken formell myndighet, uavhengighet av omgivelsene eller bevissthet om egen posisjon er en del av begrepet.",
    },
    {
      question: "Hva sier metodologisk individualisme?",
      options: ["At samfunnsfenomener skal forklares ved individers handlinger og samspillet mellom dem", "At den enkelte har ansvar for sin egen situasjon uavhengig av forholdene rundt", "At forskning bør bruke data om enkeltpersoner framfor data om grupper og land", "At bare de fenomenene som lar seg observere direkte, er egnet som forskningsobjekter"],
      explanation: "Posisjonen gjelder hva som skal telle som en ferdig forklaring, ikke hvem som har ansvar og ikke hvilke data som brukes. Å lese den som en ansvarsplassering er den vanligste sammenblandingen av fag og sak i dette temaet.",
    },
    {
      question: "Hva sier metodologisk holisme?",
      options: ["At noen egenskaper tilhører helheten og ikke lar seg redusere til delene", "At samfunnet må studeres i sin helhet før man kan si noe om enkeltdeler, som en regel for rekkefølgen", "At individers handlinger ikke har betydning for samfunnsmessige utfall", "At forskeren bør bruke flere metoder samtidig for å få et fullstendig bilde"],
      explanation: "Holismen gjelder hvilke egenskaper som kan bære en forklaring. Den benekter ikke at folk handler, og den er ikke et krav om metodetriangulering — det siste er et metodespørsmål, ikke et metodologisk standpunkt.",
    },
    {
      question: "Hva er forskjellen på metode og metodologi?",
      options: ["Metode er hvordan data samles inn, metodologi er hvordan forklaringer bygges", "Metode gjelder kvantitative opplegg, mens metodologi gjelder de kvalitative", "Metode er den praktiske gjennomføringen, metodologi er de etiske reglene", "Metode brukes i empiriske fag, metodologi brukes i teoretiske fag"],
      explanation: "Intervju og survey er metoder og kan brukes av både individualister og holister. Metodologien avgjør hva som skal telle som en ferdig forklaring når dataene ligger på bordet.",
    },
    {
      question: "Hva er en emergent egenskap?",
      options: ["En egenskap som oppstår på helhetens nivå og ikke finnes i noen av delene", "En egenskap som først viser seg etter at et fenomen har vart en tid", "En egenskap som forskeren oppdager underveis i stedet for å ha planlagt å måle den", "En egenskap som bare kan måles indirekte gjennom andre observasjoner, fordi den ikke kan registreres"],
      explanation: "Et rykte, en markedspris og en kultur finnes ikke i noen enkeltperson, men virker likevel. Distraktorene handler om tid, om forskningsprosessen og om måling, som er noe helt annet enn nivået egenskapen finnes på.",
    },
    {
      question: "Hva går reduksjonismeanklagen ut på?",
      options: ["At en forklaring oppløser fenomenet i stedet for å forklare det, slik at noe går tapt", "At en forklaring er for enkel til å dekke variasjonen i et stort og sammensatt datamateriale", "At en forklaring bygger på et for lite utvalg til å kunne generaliseres", "At en forklaring bruker begreper fra et annet fag enn det den tilhører"],
      explanation: "Anklagen er en påstand om **tap**, ikke om nivå: å forklare noe på individnivå er ikke i seg selv reduksjonisme. Kritikeren må si hva som forsvinner, ellers har innvendingen ingen kraft.",
    },
    {
      question: "Hva er en nivåfeil?",
      options: ["Å forklare en egenskap ved helheten med den samme egenskapen hos delene", "Å bruke data fra ett forvaltningsnivå til å si noe om et annet nivå, som fra kommune til stat", "Å blande sammen hva en teori sier og hva den empiriske undersøkelsen viste", "Å sammenligne to land uten å ta hensyn til forskjeller i størrelse"],
      explanation: "At et samfunn er aggressivt fordi menneskene er det, er en nivåfeil: egenskapen kopieres nedover i stedet for å bli forklart. En organisasjon kan være treg med utelukkende raske ansatte, hvis beslutningsveiene er lange.",
    },
    {
      question: "Hva er de tre trinnene i Colemans badekarmodell?",
      options: ["Fra makro til mikro, handling på mikronivå, og fra mikro til makro igjen", "Beskrivelse, forklaring og prediksjon av det samme samfunnsfenomenet", "Hypotese, datainnsamling og testing av hypotesen mot materialet", "Samvariasjon, årsaksretning og kontroll for en bakenforliggende variabel"],
      explanation: "Badekaret krever at veien mellom to makrotilstander går gjennom aktørene, i tre navngitte trinn. De tre betingelsene for en årsaksslutning er en helt annen modell, og hører til Tuftes årsaksstoff.",
    },
    {
      question: "Hvilket trinn i badekarmodellen hoppes oftest over?",
      options: ["Det tredje, der mange handlinger summeres til et nytt kollektivt utfall", "Det første, der den samfunnsmessige situasjonen virker inn på den enkeltes muligheter", "Det andre, der den enkelte handler ut fra sine muligheter og mål", "Det fjerde, der forklaringen prøves mot et nytt datamateriale"],
      explanation: "Aggregeringen er der uventede utfall oppstår, og en forklaring uten den blir en sammenfatning i stedet for en mekanisme. Modellen har for øvrig tre trinn, ikke fire.",
    },
    {
      question: "Hva menes med aggregering?",
      options: ["Hvordan mange enkelthandlinger blir til et kollektivt utfall", "Hvordan flere datasett slås sammen til én felles analysefil før analysen kan begynne", "Hvordan en gruppe blir enige om et felles standpunkt i en sak", "Hvordan et utvalg vektes for å ligne befolkningen det er trukket fra"],
      explanation: "Aggregering er sjelden enkel addisjon: at mange kjøper litt mer strøm, kan gi en prisøkning som endrer alles regnestykke. Distraktorene beskriver databehandling og beslutningsprosesser, som er andre ting.",
    },
    {
      question: "Hva er utilsiktede konsekvenser av handling?",
      options: ["Utfall ingen har villet, men som følger av at mange handler ut fra egne grunner", "Bivirkninger av et politisk tiltak som var kjent, men som ble akseptert", "Feil som oppstår fordi aktørene har mangelfull informasjon om situasjonen de står i", "Virkninger som først viser seg lenge etter at handlingen er utført"],
      explanation: "Kø, prisstigning og et dårlig rykte er slike utfall, og de er individualismens sterkeste kort: fenomenet framstår som noe over hodene på folk, men kan forklares uten at noen ville det. Kjente bivirkninger og forsinkede virkninger er noe annet.",
    },
    {
      question: "Hva er poenget med å skille posisjonene lest som påstand om verden fra posisjonene lest som arbeidsregel?",
      options: ["At de fleste innvendingene treffer den harde versjonen og ikke arbeidsregelen", "At bare den ene av dem har støtte i pensumlitteraturen for dette emnet, slik at den andre kan avvises", "At arbeidsregelen gjelder kvalitativ forskning og påstanden gjelder kvantitativ", "At påstanden om verden er en filosofisk sak som samfunnsvitenskapen ikke berører"],
      explanation: "En drøfting som ikke skiller versjonene, ender med å angripe et standpunkt ingen forsvarer. Skillet er det grepet som gjør drøftingen presis i stedet for polemisk.",
    },
    {
      question: "Hvilke to av ordensperspektivene arbeider i praksis holistisk?",
      options: ["Integrasjonsperspektivet og konfliktperspektivet, som begge forklarer orden ovenfra", "Handlings- og bytteperspektivet og interaksjonsperspektivet, som begge er aktørnære", "Konfliktperspektivet og interaksjonsperspektivet, som begge handler om makt", "Integrasjonsperspektivet og handlingsperspektivet, som begge forutsetter harmoni"],
      explanation: "De to strukturorienterte perspektivene forklarer orden ved verdier eller ved maktforhold som allerede finnes. Handlings- og bytteperspektivet er derimot individualismens hjemmebane, fordi orden der bygges opp av valg.",
    },
    {
      question: "Hva er et handlingsrom?",
      options: ["Settet av handlinger som faktisk er åpne for aktøren i en gitt situasjon", "Den friheten en person har til å bestemme over sitt eget liv i moralsk forstand", "Det fysiske og sosiale rommet der samhandlingen mellom aktørene foregår, som møtelokalet eller arenaen", "Den delen av en organisasjon der beslutninger tas uten formell forankring"],
      explanation: "Handlingsrommet er broen mellom struktur og aktør: strukturen gjør rommet trangt eller vidt, aktøren velger innenfor det. Det sier hva som var mulig, ikke hva som var riktig.",
    },
    {
      question: "Hvorfor er strukturforklaringer gode på stabilitet?",
      options: ["Fordi de peker på noe som ligger fast når deltakerne skiftes ut", "Fordi de bygger på data samlet inn over lengre tidsrom enn andre forklaringer", "Fordi de forutsetter at aktørene handler likt i alle situasjoner de møter", "Fordi de er formulert så generelt at de vanskelig kan motbevises empirisk"],
      explanation: "Et mønster som overlever utskifting av alle deltakerne, er nettopp det en strukturforklaring forklarer godt. Aktørforklaringer er til gjengjeld gode på variasjon, altså på hvorfor noen gjør noe annet enn andre.",
    },
    {
      question: "Hva er individualistens svar på at emergente egenskaper finnes?",
      options: ["At en egenskap som oppstår av samspill, også kan forklares av samspill", "At slike egenskaper er språklige forkortelser uten selvstendig virkning", "At de bare finnes i store samfunn og ikke i mindre grupper og organisasjoner", "At de må undersøkes med kvalitative metoder framfor med statistiske mål"],
      explanation: "Emergens er en utfordring til enkel oppsummering, ikke til forklaring nedenfra som sådan. Å avvise at slike egenskaper virker, er en langt hardere posisjon enn den arbeidsregelen individualismen trenger.",
    },
    {
      question: "Hva er holismens svakeste punkt?",
      options: ["At et makrobegrep lett brukes som forklaring på seg selv uten mekanisme", "At den ikke klarer å forklare hvorfor mønstre er stabile over lange tidsrom", "At den forutsetter at alle i en gruppe tenker og handler på samme måte, og dermed overser variasjon", "At den bare lar seg bruke på fenomener som kan telles og måles"],
      explanation: "«Kulturen forklarer hvorfor ingen sier fra» sier ikke mer enn at ingen sier fra, med mindre man kan si hva kulturen består av og hvordan den virker. Stabilitet er derimot holismens styrke, ikke dens svakhet.",
    },
    {
      question: "Hva er den viktigste innvendingen mot å bruke ordet «struktur» uten videre?",
      options: ["At ordet da fungerer som en plassholder for alt som ikke er individet", "At ordet stammer fra en teoritradisjon som ikke lenger er pensum i emnet", "At ordet blandes sammen med begrepet sosial orden fra samme pensumdel", "At ordet gir inntrykk av at samfunnet er stabilt og uforanderlig over tid"],
      explanation: "Testen er om du kan bytte ut «strukturen» med «forholdene» uten at noe endres. Motgiften er å navngi én fordeling, én posisjon, én regel eller én forventning.",
    },
    {
      question: "Hvorfor er det en feil å argumentere mot individualismen med at den «legger skylden på den enkelte»?",
      options: ["Fordi innvendingen gjelder bruken av forklaringen og ikke dens forklaringskraft", "Fordi metodologisk individualisme uttrykkelig avviser at enkeltmennesker har noe ansvar", "Fordi ansvarsspørsmål ikke kan behandles vitenskapelig i det hele tatt", "Fordi forklaringen alltid går fra makro til mikro og aldri motsatt vei"],
      explanation: "Innvendingen kan føres, men da skal det stå at den gjelder hvordan forklaringen brukes. Å bytte ut et fagspørsmål med et politisk spørsmål uten å si det, er nettopp sammenblandingen av fag og sak.",
    },
    {
      question: "Hva skiller de to dimensjonene struktur mot aktør og passiv mot aktiv menneskemodell?",
      options: ["Den ene gjelder hvor forklaringen henter kraften, den andre hva slags vesen den forutsetter", "Den ene gjelder bare makronivået, mens den andre gjelder samhandling ansikt til ansikt", "Den ene brukes i metodologi, mens den andre bare brukes i forskningsetikken", "Den ene gjelder teorier om orden, mens den andre gjelder teorier om endring"],
      explanation: "De henger sammen, men er ikke det samme: en strukturforklaring kan bygge på aktive aktører som velger innenfor trange rammer, og i handlings- og bytteperspektivet er det nettopp tilfellet.",
    },
    {
      question: "Hva er et godt tegn på at et fenomen egner seg for en holistisk forklaring?",
      options: ["At egenskapen består selv om alle deltakerne blir skiftet ut over tid", "At fenomenet er så stort at det ikke kan undersøkes med intervjuer eller andre nære metoder", "At det finnes offentlig statistikk som dekker fenomenet over mange år", "At de involverte selv beskriver fenomenet som noe utenfor deres kontroll"],
      explanation: "Utskiftingstesten er den mest brukbare: et rykte eller en yrkesstatus som varer mens menneskene skifter, er vanskelig å forklare med enkeltvalg alene. At de involverte opplever noe som utenfor sin kontroll, er en opplevelse og ikke et bevis.",
    },
    {
      question: "Hva bør et svar på «forklar fenomenet nedenfra og ovenfra» inneholde til slutt?",
      options: ["En sammenligning av hva hver forklaring får med seg og hva den mister", "En konklusjon om hvilken av de to forklaringene som er den riktige, med et tydelig valg av vinner", "En vurdering av hvilke data som ville trengs for å teste begge to", "En redegjørelse for hvilke teoretikere som står bak hver av forklaringene"],
      explanation: "Sammenligningsleddet er det oppgaven faktisk belønner, og det er også det leddet svake besvarelser lar ligge. Å kåre en vinner er sjelden mulig, fordi de to svarer på ulike spørsmål.",
    },
    {
      question: "Hvordan virker strukturen på aktøren, ifølge metodologisk individualisme?",
      options: ["Gjennom aktørene selv, ved at noen håndhever regelen og andre tilpasser seg", "Direkte, ved at strukturen begrenser hva som i det hele tatt er fysisk mulig", "Ved at strukturen former aktørenes personlighet gjennom oppveksten", "Den virker ikke — individualismen benekter at strukturer har virkninger, og godtar bare enkeltvalg"],
      explanation: "Individualismen benekter ikke at strukturer virker, den sier at virkningen går gjennom aktørene: en regel som ingen håndhever og ingen retter seg etter, virker ikke. Å tro at posisjonen benekter strukturer, er en vanlig forenkling.",
    },
  ],
  'svexfac03-7-2': [
    {
      question: "Hva vil det si at strukturen har en dualitet, ifølge Giddens?",
      options: ["At den er både middel for og resultat av handling, samtidig", "At den virker på to nivåer, både på makronivå og på mikronivå i samfunnet", "At den består av to deler: formelle regler og uformelle normer i samspill", "At den både kan studeres kvalitativt og måles med kvantitative metoder"],
      explanation: "Dualiteten er at samme struktur gjør begge jobbene på én gang: den gir aktøren noe å handle med, og blir til på nytt hver gang noen bruker den. Distraktorene beskriver nivåer, deler og metodevalg, som er andre inndelinger.",
    },
    {
      question: "Hva er forskjellen på dualitet og dualisme?",
      options: ["Dualitet er to sider ved ett forhold, dualisme er to atskilte størrelser", "Dualitet gjelder samfunnsteori, mens dualisme er et begrep fra filosofien", "Dualitet betyr at noe er dobbelt så sterkt som noe annet i en forklaring", "Dualitet er Giddens' eget uttrykk, mens dualisme er kritikernes betegnelse"],
      explanation: "Ordvalget er en påstand: i en dualisme må man forklare hvordan to atskilte størrelser påvirker hverandre, og da er man tilbake i motsetningen begrepet skulle oppheve. I en dualitet spør man i stedet hvordan den ene siden viser seg i den andre.",
    },
    {
      question: "Hva består strukturen av hos Giddens?",
      options: ["Regler for hvordan noe gjøres, og ressurser som gir noen mer å spille med", "Institusjoner, organisasjoner og det formelle lovverket som regulerer dem", "Klasseposisjoner og de interessene som følger av dem i et samfunn", "Verdier og normer som er felles for medlemmene av et samfunn"],
      explanation: "Regler og ressurser er Giddens' svar på hva en struktur består av. Alternativet om verdier og normer beskriver integrasjonsperspektivets svar, og klasseposisjoner er konfliktperspektivets.",
    },
    {
      question: "Hvor finnes strukturen, ifølge Giddens?",
      options: ["I praksis og i hukommelse, altså i det folk gjør og i det de kan", "I institusjonene, som består uavhengig av hvem som til enhver tid deltar", "I lovverket og i de formelle avtalene som regulerer samhandlingen", "I den enkeltes internaliserte normer, tilegnet gjennom sosialisering"],
      explanation: "Dette er Giddens' mest omstridte påstand: strukturen har ingen tilværelse utenfor det folk gjør og kan. Alternativet om internaliserte normer ligger nær, men plasserer strukturen inne i personen som noe fast, og det er nettopp det dualiteten unngår.",
    },
    {
      question: "Hva er habitus?",
      options: ["Kroppsliggjorte disposisjoner formet av klasse, familie og historie", "De vanene en person har lagt seg til gjennom bevisst trening over tid", "Den rollen en person spiller i en bestemt sosial sammenheng", "Den samlede mengden økonomiske og sosiale ressurser en person rår over"],
      explanation: "Habitus er en sans for hva som passer, som virker uten at man tenker over den. Rollen kan legges av når du går hjem; habitus følger med. Ressurser er noe man har, mens habitus er noe man er.",
    },
    {
      question: "Hva er forskjellen på habitus og preferanse?",
      options: ["En preferanse kan gjøres rede for og endres, mens habitus avgjør hva som vurderes", "En preferanse gjelder forbruk, mens habitus gjelder holdninger og verdier", "En preferanse er individuell, mens habitus alltid deles av en hel sosial klasse i samfunnet", "En preferanse er bevisst valgt, mens habitus er medfødt og biologisk gitt"],
      explanation: "Habitus avgjør hvilke alternativer som i det hele tatt kommer opp til vurdering, mens preferansen er et valg mellom alternativer som allerede er der. Habitus er heller ikke medfødt — det er nettopp sosialt formet, gjennom klasse, familie og historie.",
    },
    {
      question: "Hvordan bygger habitus bro mellom aktør og struktur?",
      options: ["Ved at det som velger, selv er formet, slik at valget er reelt og utfallet forutsigbart", "Ved at aktøren gjøres bevisst på strukturen og dermed kan handle mot den", "Ved at strukturen tvinger aktøren til å velge det som er best for helheten", "Ved at aktøren og strukturen behandles som to atskilte nivåer som virker inn på hverandre"],
      explanation: "Poenget er at strukturen har flyttet inn i aktøren: ingen tvinges, og likevel er utfallet så forutsigbart at det gir statistikk. Å behandle aktør og struktur som to atskilte nivåer som virker inn på hverandre, er en dualisme — nettopp den løsningen begrepet skal unngå.",
    },
    {
      question: "Hva er kommunikativ handling hos Habermas?",
      options: ["Handling der partene bruker språket til å komme til forståelse med hverandre", "Handling der en part overbeviser de andre med de beste argumentene sine", "All bruk av språk til å samordne det flere personer skal gjøre sammen", "Handling som er innrettet mot å oppnå et bestemt resultat på en høflig og ryddig måte"],
      explanation: "Samordningen skjer ved at partene blir enige om noe, ikke ved at noen får viljen sin. Å overbevise andre om et mål man selv allerede har, er resultatorientert handling, uansett hvor gode argumentene er.",
    },
    {
      question: "Hva er testen på om en handling er forståelsesorientert?",
      options: ["Om innvendingen fra den andre kan endre hva jeg vil, ikke bare hvordan jeg får det til", "Om samtalen foregår i en rolig tone der alle får komme til orde", "Om partene til slutt kommer fram til en løsning begge kan leve med", "Om partene har like stor formell makt i den situasjonen der samtalen faktisk foregår"],
      explanation: "Målet selv må være oppe til diskusjon. En forhandling der begge gir litt, er fortsatt resultatorientert hvis ingen av dem har endret oppfatning om hva som er riktig — og tonefall avgjør ingenting.",
    },
    {
      question: "Hva er gyldighetskravene hos Habermas?",
      options: ["Kravene om sannhet, riktighet og oppriktighet som enhver ytring reiser", "Kravene om klarhet, presisjon og etterprøvbarhet i vitenskapelige påstander", "Kravene om samtykke, konfidensialitet og åpenhet i forskning på mennesker", "Kravene om at et argument skal ha premisser, en slutning og en konklusjon"],
      explanation: "De tre kravene kan bestrides av samtalepartneren, og det er nettopp muligheten for å bestride som gjør samtalen kommunikativ. De forskningsetiske kravene og de logiske kravene til et argument hører til andre deler av pensum.",
    },
    {
      question: "Hva er livsverden hos Habermas?",
      options: ["Bakgrunnen av selvfølgeligheter som gjør at folk kan forstå hverandre", "Den delen av samfunnet som ikke er regulert av marked eller forvaltning", "Summen av erfaringer et enkeltmenneske har gjort seg gjennom livet", "De materielle forholdene mennesker lever under i et bestemt samfunn, som bolig, arbeid og inntekt"],
      explanation: "Livsverdenen er et lager av det som ikke trenger sies, og den blir først synlig når den svikter. Den er verken en samfunnssektor, en personlig biografi eller et sett materielle forhold.",
    },
    {
      question: "Hva legger Habermas til i forhold til makt og bytte som samordningsmåter?",
      options: ["En tredje måte, der partene kommer til forståelse og kan endre hverandres syn", "En rangering som viser hvilken av de to andre måtene som gir mest stabil orden", "En påstand om at makt alltid ligger under også når det ser ut som bytte", "En metode for å måle hvor mye av samordningen som skjer på hver måte"],
      explanation: "Makt er konfliktperspektivets mekanisme og bytte er handlings- og bytteperspektivets. Habermas' tredje måte er den eneste som forutsetter at partene kan omforme premissene bevisst.",
    },
    {
      question: "Hvor plasserer de tre teoretikerne overskridelsen?",
      options: ["Giddens i strukturen, Bourdieu i aktøren, Habermas i samhandlingen", "Giddens i aktøren, Bourdieu i samhandlingen, Habermas i strukturen", "Giddens i samhandlingen, Bourdieu i strukturen, Habermas i aktøren", "Alle tre i samhandlingen, med tre ulike syn på samordning"],
      explanation: "Dette kartet er det korteste svaret på hva som skiller de tre: strukturen finnes bare i praksis, det som velger er selv formet, og i den forståelsesorienterte samtalen kan premissene endres.",
    },
    {
      question: "Hva er den sterkeste innvendingen mot alle tre overskridelsene?",
      options: ["At de beskriver dobbeltheten presist, men ikke forklarer den", "At de er utviklet uavhengig av hverandre og derfor ikke kan sammenlignes", "At de bygger på empiriske studier som senere ikke har latt seg gjenta", "At de bare gjelder for moderne vestlige samfunn og ikke mer generelt"],
      explanation: "Å si at strukturen er både middel og resultat, er å navngi det som skulle forklares. Svaret som kan gis, er at et begrep som gjør dobbeltheten analyserbar, gir en retning for undersøkelser — men det svaret er ikke gratis.",
    },
    {
      question: "Hva er endringsproblemet hos Bourdieu?",
      options: ["At det blir uklart hva som skal til for at noen bryter med mønsteret", "At habitus endrer seg for raskt til å kunne forklare stabile mønstre", "At begrepet ikke sier noe om hvordan sosial bakgrunn måles i praksis", "At teorien ikke skiller individets endring fra samfunnets"],
      explanation: "Er også det som velger formet, blir brudd vanskelig å forklare. Svaret som finnes i begrepet selv, er at habitus er formet av en historie som fortsetter, og at møtet med et nytt felt kan gi et misforhold der refleksjon oppstår.",
    },
    {
      question: "Hva er seighetsproblemet hos Giddens?",
      options: ["At strukturer virker svært vanskelige å endre selv om de bare finnes i praksis", "At begrepet ikke kan forklare hvorfor noen praksiser endrer seg raskt", "At teorien forutsetter at aktørene har full oversikt over det systemet de inngår i", "At begrepet er så generelt at det kan brukes på nesten alle fenomener"],
      explanation: "Lover, eiendomsforhold og pengesystemer virker rimelig solide. Giddens' svar er at seigheten er et koordineringsproblem: alternativet er kostbart for den enkelte nettopp fordi alle andre fortsetter.",
    },
    {
      question: "Hva er reproduksjon av struktur gjennom handling?",
      options: ["At handlinger i tråd med et mønster gjør mønsteret mer selvfølgelig for neste person", "At institusjoner rekrutterer nye medlemmer som ligner mest mulig på dem som allerede er der", "At samfunnet overfører verdier til neste generasjon gjennom oppdragelse", "At forskeren gjentar en undersøkelse for å se om resultatet holder seg"],
      explanation: "Ingen trenger å ville reprodusere strukturen — reproduksjonen er en utilsiktet virkning av at folk gjør det som fungerer for dem. Alternativet om verdioverføring beskriver sosialisering, som er en annen mekanisme.",
    },
    {
      question: "Hvorfor er «den kyndige aktøren» en forutsetning hos Giddens?",
      options: ["Fordi det er den kompetente handlingen som reproduserer strukturen så presist", "Fordi aktørene må forstå samfunnssystemet for å kunne endre det bevisst", "Fordi teorien bare gjelder for aktører med høyere utdanning og formell kompetanse", "Fordi den enkelte må kunne forutse virkningene av det alle sammen gjør"],
      explanation: "Kyndigheten gjelder handlingen, ikke systemet: aktøren vet hvordan man står i kø, men ikke hva køordningen gjør med byens trafikk. Uten kompetente aktører ville dualiteten vært en tom formulering.",
    },
    {
      question: "Hva skiller strukturens dualitet fra metodologisk holisme?",
      options: ["Holismen gir helheten et eget nivå, mens dualiteten sier at strukturen bor i praksisen", "Holismen gjelder store samfunn, mens dualiteten gjelder små grupper og møter", "Holismen er en teori om sosial orden, mens dualiteten er en metode for datainnsamling", "Holismen avviser at individer handler, mens dualiteten tar aktøren på alvor"],
      explanation: "Giddens er ikke en holist med et pent språk: han avviser at valget mellom nivåene er det riktige spørsmålet. Holismen benekter for øvrig ikke at individer handler — den sier at noen spørsmål får bedre svar på helhetens nivå.",
    },
    {
      question: "Hva er den vanligste feilen i besvarelser om overskridelsesbegrepene?",
      options: ["Å beskrive begrepet uten å vise hvordan det bygger bro mellom aktør og struktur", "Å bruke altfor mange eksempler i stedet for å definere begrepene presist nok", "Å behandle de tre teoretikerne som om de var enige om alt vesentlig", "Å knytte begrepene til de fire perspektivene på sosial orden fra Del 3"],
      explanation: "Broen er hele grunnen til at begrepene finnes, og en besvarelse som utelater den, har gjengitt definisjonene korrekt uten å svare på oppgaven. Å koble til perspektivene er derimot et pluss, ikke en feil.",
    },
    {
      question: "Hvilket begrep gir mest analytisk gevinst når du skal forklare at et mønster varer?",
      options: ["Strukturens dualitet, fordi seighet blir et koordineringsproblem som kan undersøkes", "Habitus, fordi disposisjonene er kroppsliggjorte og derfor svært vanskelige å endre", "Kommunikativ handling, fordi den viser når partene kan endre premissene", "Ingen av dem — spørsmålet om varighet krever et rent strukturperspektiv"],
      explanation: "Svaret må knyttes til hva som skal forklares. Habitus er sterkest på skjeve utfall innenfor formell likhet, og kommunikativ handling på bevisst endring — mens dualiteten er det begrepet som gjør varighet til noe undersøkbart.",
    },
    {
      question: "Hva er kroppsliggjorte disposisjoner?",
      options: ["At bakgrunn sitter i holdning, tempo og trygghet, ikke bare i meninger", "At biologiske forskjeller mellom mennesker påvirker deres sosiale posisjon", "At kroppsspråk brukes bevisst for å signalisere tilhørighet til en gruppe", "At fysisk arbeid over tid setter varige spor i helsen til dem som utfører det"],
      explanation: "Hadde det vært meninger, kunne man ombestemt seg. At det er innarbeidet i kroppen, forklarer hvorfor mønstrene overlever gode intensjoner. Distraktoren om biologi peker mot en helt annen forklaringstype.",
    },
    {
      question: "Hva ville gjort et eksempel på habitus til et dårlig eksempel?",
      options: ["At personen faktisk var utestengt av et formelt krav hun ikke oppfylte", "At personen kom fra et hjem uten høyere utdanning i tidligere generasjoner", "At personen valgte annerledes enn det bakgrunnen skulle tilsi i dette tilfellet", "At eksempelet handlet om utdanningsvalg framfor om smak og forbruk"],
      explanation: "Habitus krever at døra står åpen mens den ikke ser ut som en dør. Er det et formelt hinder, har man en ytre begrensning i stedet — og da illustrerer eksempelet noe annet enn begrepet.",
    },
    {
      question: "Hva er svaret på at overskridelsesbegrepene «bare flytter problemet»?",
      options: ["At de endrer hvilke spørsmål man stiller, og dermed hva man leter etter", "At de er blitt bekreftet av senere empiriske studier på en rekke ulike felt", "At de er de eneste begrepene som finnes for denne motsetningen", "At innvendingen bygger på en misforståelse av hva et begrep er"],
      explanation: "Gevinsten er at seighet blir et koordineringsproblem, at skjeve utfall innenfor formell likhet blir forskbare, og at gyldighetskravene gir en målestokk for reelle beslutningsprosesser. Innvendingen treffer begrepene som forklaringer og bommer på dem som analytiske redskaper.",
    },
  ],
  'svexfac03-8-1': [
    {
      question: "Hva kjennetegner en normativ påstand?",
      options: ["Uenigheten består selv når partene er enige om alle fakta i saken", "Påstanden gjelder framtiden og kan derfor ikke etterprøves i dag", "Påstanden bygger på et for lite utvalg til at den kan generaliseres", "Påstanden er formulert av noen som selv er direkte berørt av utfallet i saken"],
      explanation: "Uenighetstesten er den avgjørende: består uenigheten etter at alle tall er på bordet, hviler striden på et verdipremiss. Usikkerhet om framtiden og svakt utvalg er empiriske problemer, ikke tegn på at påstanden er normativ.",
    },
    {
      question: "Hvilken test avgjør om ordet «effektiv» brukes deskriptivt eller normativt?",
      options: ["Om målestokken er oppgitt — er den det, er påstanden en måling mot et gitt mål", "Om påstanden står i en offentlig utredning eller i en opphetet politisk debatt", "Om den som uttaler seg, har faglig kompetanse på det aktuelle området", "Om ordet er brukt om et tiltak eller om en hel politikk på et område"],
      explanation: "Er målet oppgitt, kan effektiviteten måles. Er det ikke oppgitt, ligger vurderingen i valget av mål, og påstanden er normativ i forkledning. Hvem som sier det og hvor, avgjør ingenting.",
    },
    {
      question: "Hva er et verdipremiss?",
      options: ["Leddet i et argument som sier hva som er ønskelig eller riktig", "Leddet i et argument som sier hvordan verden faktisk ser ut og henger sammen", "Den konklusjonen argumentet er ment å skulle overbevise leseren om", "Den verdien et tiltak har for dem som blir berørt av det i praksis"],
      explanation: "Et argument som konkluderer med et «bør», har alltid minst ett verdipremiss, også når det ikke er skrevet ut. Faktapremisset kan undersøkes; verdipremisset må begrunnes.",
    },
    {
      question: "Hva er normargumentasjon?",
      options: ["Å begrunne at en handling er riktig i kraft av en regel, en plikt eller en rettighet", "Å begrunne et standpunkt med hva flertallet i befolkningen mener om saken", "Å begrunne et standpunkt med hva som er vanlig praksis på området fra før", "Å begrunne at en handling er riktig ut fra hvilke følger den får for alle de berørte"],
      explanation: "Formen kjennes på at den holder også når følgene er ugunstige. Å vise til flertallet eller til vanlig praksis er noe annet, og å begrunne ut fra følgene er konsekvensargumentasjon.",
    },
    {
      question: "Hva kjennetegner konsekvensargumentasjon?",
      options: ["Argumentet faller hvis følgene viser seg å bli andre enn antatt", "Argumentet handler om økonomi og kan derfor tallfestes fullt ut", "Argumentet gjelder bare tiltak som er satt i verk og kan evalueres", "Argumentet trenger ikke noe verdipremiss i det hele tatt for å nå fram til en konklusjon"],
      explanation: "Sårbarheten for nye opplysninger er formens kjennetegn. Konsekvensargumentasjon krever fortsatt et verdipremiss om hvilke følger som teller som gode, og for hvem — å telle kroner er ikke i seg selv en begrunnelse.",
    },
    {
      question: "Hvorfor betyr det noe hvilken av de to formene som brukes, når konklusjonen er den samme?",
      options: ["Fordi de tåler ulike innvendinger og faller på ulike opplysninger", "Fordi den ene formen regnes som mer prinsipiell enn den andre i faget", "Fordi bare den ene av dem kan brukes i en akademisk sammenheng", "Fordi de to formene hører hjemme i hver sin politiske tradisjon"],
      explanation: "Viser det seg at følgene blir andre enn antatt, faller konsekvensargumentet mens normargumentet står. Ingen av formene er mer prinsipiell eller mer akademisk, og begge finnes i alle politiske leire.",
    },
    {
      question: "Hva er et blandet argument?",
      options: ["Et argument der normen begrunner at noe skal gjøres og konsekvensen hvordan", "Et argument som kombinerer faktapåstander fra flere ulike fagområder", "Et argument der to personer bidrar med hver sin del av begrunnelsen", "Et argument som er så uklart at det ikke lar seg klassifisere i det hele tatt"],
      explanation: "I et blandet argument kan man peke på hvert ledd og si hvilken jobb det gjør. Et uklart argument er noe annet: der glir formene over i hverandre uten at noen av dem er ført helt fram.",
    },
    {
      question: "Hva menes med et arguments robusthet?",
      options: ["Hvor mye det tåler av endringer i faktagrunnlaget uten å falle", "Hvor mange mennesker som lar seg overbevise av det i en debatt", "Hvor godt det er formulert språklig og retorisk i en gitt sammenheng", "Hvor mange premisser det bygger på før konklusjonen trekkes"],
      explanation: "Normargumenter er ofte robuste og lite fleksible, konsekvensargumenter det motsatte. Robusthet er ikke et gode i seg selv: et argument som ingen opplysning kan påvirke, er også et argument som ikke lærer.",
    },
    {
      question: "Hva er en skjult normativ påstand?",
      options: ["En vurdering framstilt som en beskrivelse, slik at den slipper å bli begrunnet", "En vurdering som forfatteren bevisst har utelatt fra teksten sin", "En vurdering som først kommer fram i konklusjonen og ikke i innledningen", "En vurdering som deles av så mange at det ikke faller noen inn å bestride den"],
      explanation: "«Urealistisk» og «den eneste ansvarlige løsningen» er slike formuleringer. Motgiften er å spørre hva som måtte være tilfellet for at påstanden var usann — finner du ingen slik observasjon, er påstanden normativ.",
    },
    {
      question: "Hva skiller en rettferdiggjøring fra en forklaring?",
      options: ["Forklaringen sier hvorfor noen handlet, rettferdiggjøringen hvorfor det var riktig", "Forklaringen bygger på data, mens rettferdiggjøringen bygger på erfaring", "Forklaringen gis av forskeren, mens rettferdiggjøringen gis av den handlende", "Forklaringen gjelder fortiden, mens rettferdiggjøringen gjelder de framtidige valgene"],
      explanation: "«Hun gjorde det fordi hun var redd» forklarer; «fordi det ikke fantes noe forsvarlig alternativ» rettferdiggjør. Å svare med en forklaring på et normativt spørsmål er en av de sikreste måtene å bomme på et drøftingsledd.",
    },
    {
      question: "Hva er sivil ulydighet slik begrepet brukes analytisk?",
      options: ["Bevisst og åpent lovbrudd for å endre en lov, som regel med aksept av straffen", "Enhver protest mot myndighetenes vedtak som skjer utenfor de politiske kanalene", "En demonstrasjon som gjennomføres uten at det er søkt om tillatelse på forhånd", "Et lovbrudd begått av en gruppe som mener at loven ikke gjelder for dem"],
      explanation: "Åpenheten og villigheten til å ta straffen er det som skiller begrepet fra vanlig lovbrudd. Definisjonen sier ingenting om hvorvidt handlingen er forsvarlig — det er nettopp det som skal drøftes.",
    },
    {
      question: "Hva er kjernen i normargumentet FOR sivil ulydighet?",
      options: ["At noen plikter veier tyngre enn plikten til å følge loven", "At aksjonene historisk har ført til endringer som senere er blitt akseptert", "At oppmerksomheten en aksjon skaper, er verdt kostnaden ved lovbruddet", "At loven i praksis ikke håndheves likt overfor alle grupper i samfunnet"],
      explanation: "Argumentets styrke er at det står selv om aksjonen ikke fører fram — riktigheten ligger i handlingens art. Svarene om at aksjoner historisk har ført til endringer, og om at oppmerksomheten er verdt kostnaden, er konsekvensargumenter; svaret om ulik håndheving er en faktapåstand.",
    },
    {
      question: "Hva er den sterkeste innvendingen mot normargumentet for sivil ulydighet?",
      options: ["At argumentet gjelder for enhver sterk overbevisning uten et terskelkriterium", "At aksjonene i praksis rammer tredjeparter som ikke har noe med saken å gjøre", "At de fleste aksjonister ikke er villige til å ta straffen de risikerer", "At loven i et demokrati alltid kan endres gjennom en ny avstemning"],
      explanation: "Innvendingen er skarp fordi den er av samme type som argumentet den svarer på, og fordi den peker på et reelt problem. Svaret er å angi et terskelkriterium, som gjør argumentet snevrere og mer holdbart.",
    },
    {
      question: "Hva er et terskelkriterium i denne sammenhengen?",
      options: ["En angivelse av hvor alvorlig uretten må være for at regelbrudd kan forsvares", "En grense for hvor mange som må delta før en aksjon regnes som sivil ulydighet", "Et krav om at aksjonen ikke må påføre tredjeparter økonomisk tap av betydning", "En regel om hvor lenge en aksjon kan vare før den mister sin legitimitet"],
      explanation: "Kriteriet angir alvoret og om ordinære kanaler er prøvd eller utilgjengelige. Uten det gjelder argumentet like godt for hvem som helst med en sterk overbevisning, og da har det mistet kraften som argument.",
    },
    {
      question: "Hvorfor kan konsekvensargumentene i sivil ulydighet-debatten sjelden bære konklusjonen alene?",
      options: ["Fordi begge sider hviler på omstridt empiri om hva aksjoner gjør med oppslutningen", "Fordi konsekvensargumenter generelt regnes som svakere enn normargumenter", "Fordi virkningene av en aksjon først lar seg måle mange år etter at den fant sted", "Fordi aksjonistene selv sjelden begrunner handlingene sine med følgene"],
      explanation: "Både tilhengere og motstandere kan hevde å ha tallene på sin side, og da avgjør ikke argumentene noe. Konsekvensargumenter er ikke svakere som form — de er svakere her, fordi grunnlaget er omstridt.",
    },
    {
      question: "Hva er poenget med å gjengi en motstanders argument i dets sterkeste form?",
      options: ["At en innvending mot en karikatur ikke er noen innvending i det hele tatt", "At det virker mer høflig og gir et bedre inntrykk av kandidaten hos sensor", "At det gjør besvarelsen lengre og dermed dekker flere av oppgavens ledd", "At det viser at kandidaten kjenner litteraturen på begge sider av striden"],
      explanation: "En drøfting der begge sider er svake, er verdiløs — og sensor ser forskjellen umiddelbart. Kravet ligger bak formuleringen om at sterke besvarelser gir argumenter både for og mot.",
    },
    {
      question: "Hvilket spørsmål avgjør best om et argument er norm- eller konsekvensargument?",
      options: ["Hva som ville felt det: en ny opplysning, eller et annet verdipremiss?", "Hvilke ord som brukes, som «plikt», «rett», «nytte» eller «gevinst»", "Hvem som fremmer argumentet, og hvilken politisk retning vedkommende tilhører", "Om argumentet står i innledningen eller i konklusjonen av teksten"],
      explanation: "Ordvalget kan lure deg, men sårbarheten kan ikke. Et argument som faller på et tall, er et konsekvensargument uansett hvor prinsipielt det er formulert.",
    },
    {
      question: "To personer har samme verdipremiss, men lander motsatt. Hva følger av det?",
      options: ["Uenigheten hviler på faktapremissene og er i prinsippet løsbar med bedre kunnskap", "Uenigheten er normativ, og mer informasjon vil ikke kunne bringe de to nærmere hverandre", "Minst én av dem har misforstått sitt eget verdipremiss og bør revurdere det", "De to argumentene er av ulik form, og derfor kan de ikke sammenlignes"],
      explanation: "Deler de verdipremisset, må uenigheten ligge i påstandene om verden, og de kan undersøkes. Det motsatte tilfellet — samme fakta, ulike verdipremisser — er den uenigheten data ikke kan avgjøre.",
    },
    {
      question: "Hvorfor er det en feil å rangere de to argumentformene moralsk?",
      options: ["Fordi begge finnes i alle politiske leire og kan gi samme konklusjon", "Fordi rangering av argumenter ikke hører hjemme i samfunnsvitenskapen", "Fordi normargumentasjon i praksis alltid bygger på skjulte konsekvenshensyn", "Fordi konsekvensargumentasjon er den eneste formen som kan etterprøves"],
      explanation: "Normargumentasjon er ikke mer prinsipiell og konsekvensargumentasjon ikke mer pragmatisk. En besvarelse som antyder noe annet, har byttet analyse med sympati.",
    },
    {
      question: "Hva består et argument av?",
      options: ["Premisser som gir grunner, og en konklusjon de skal støtte", "En påstand, en begrunnelse og et eksempel som illustrerer den", "En innledning, en hoveddel og en avslutning med et standpunkt", "Et standpunkt og en oppfordring til leseren om å slutte seg til det"],
      explanation: "Tre spørsmål er nok for å analysere et normativt argument: hva er konklusjonen, hvilke premisser er faktapåstander, og hvilket premiss sier hva som er ønskelig? Det siste er som regel det som mangler i teksten.",
    },
    {
      question: "Hva er hovedgrunnen til at et drøftingsledd om sivil ulydighet ikke skal handle om saken?",
      options: ["At saksfeltet ikke gir uttelling i seg selv — det er argumentformene som måles", "At kandidaten ikke under noen omstendighet bør røpe sitt eget politiske standpunkt", "At oppgaven som regel gjelder en sak kandidaten ikke kan nok om", "At politiske spørsmål ikke kan behandles i en akademisk besvarelse"],
      explanation: "Sensorveiledningene sier uttrykkelig at kunnskap om saksfeltet ikke skal vektlegges i seg selv. Det er ikke forbudt å ha et standpunkt — det er bare ikke det oppgaven måler.",
    },
    {
      question: "Hva er den mest presise måten å åpne et drøftingsledd om et normativt stridsspørsmål på?",
      options: ["Ved å si om uenigheten hviler på faktapremisser eller på verdipremisser", "Ved å oppsummere de viktigste tallene som finnes på området fra før", "Ved å gjøre rede for hva de mest kjente teoretikerne har ment om saken", "Ved å slå fast at spørsmålet er omstridt og at meningene er delte"],
      explanation: "Ligger striden i faktapremissene, er den løsbar med bedre tall, og da er det sløsing å bruke drøftingsleddet på verdier. Å konstatere at meningene er delte, sier derimot ingenting.",
    },
  ],
  'svexfac03-8-2': [
    {
      question: "Hva er stridsspørsmålet i bærekraftsdebatten slik dette emnet framstiller den?",
      options: ["Om økonomisk vekst er forenlig med å holde seg innenfor jordas tålegrenser", "Om klimaendringene er menneskeskapte eller skyldes naturlige svingninger i klimasystemet over tid", "Om ansvaret for kutt ligger hos myndighetene eller hos den enkelte forbruker", "Om hvor raskt utslippene må reduseres for at temperaturmålene skal nås"],
      explanation: "Uenigheten gjelder verken årsaksforholdet, ansvarsplasseringen eller tempoet, men om det finnes en vei der velstandsvekst og utslippskutt går sammen. En besvarelse som ikke treffer akkurat det, har skrevet generelt om et viktig tema.",
    },
    {
      question: "Hva kjennetegner økomodernismen?",
      options: ["At vekst regnes som forenlig med bærekraft gjennom teknologi og marked", "At klimatiltak bør utsettes til teknologien er billig nok til å lønne seg", "At miljøproblemene løses best gjennom internasjonale avtaler mellom stater", "At forbruket i rike land må reduseres, men gjennom markedet og ikke ved forbud"],
      explanation: "Posisjonen hevder at velstanden kan øke mens utslippene faller, gjennom teknologiskift. Den er verken en utsettelsesstrategi eller en forbrukskritikk med markedsvirkemidler.",
    },
    {
      question: "Hva er typeeksempelet på økomodernismens strategi?",
      options: ["Karbonfangst og lagring, som fjerner utslippet mens aktiviteten fortsetter", "Kvotehandel, som setter en samlet grense og lar markedet fordele kuttene mellom aktørene", "Krav om at nye bygg skal oppføres i gjenbrukte og lokale materialer", "Avgifter som gjør de mest forurensende varene dyrere for forbrukeren og dermed vrir etterspørselen"],
      explanation: "Karbonfangst er eksempelet fordi det tillater aktiviteten å fortsette uendret. Kvotehandel og avgifter er virkemidler begge posisjoner kan bruke, og gjenbrukskrav trekker mot den vekstfrie siden.",
    },
    {
      question: "Hva kjennetegner vekstfri utvikling?",
      options: ["At fortsatt vekst vil overskride tålegrensene uansett hvor effektiv teknologien blir", "At all økonomisk aktivitet må reduseres kraftig i alle land uavhengig av inntektsnivået deres", "At markedet ikke kan brukes som virkemiddel i klimapolitikken i det hele tatt, verken kvoter eller avgifter", "At teknologisk utvikling bør stanses inntil miljøkonsekvensene er utredet"],
      explanation: "Posisjonen gjelder planlagt reduksjon i rike land, ikke en generell stans i all aktivitet eller i teknologiutvikling. Å framstille den som en tilbake-til-naturen-posisjon er en karikatur som gir en verdiløs drøfting.",
    },
    {
      question: "Hva er vekstfri utviklings sterkeste argument?",
      options: ["At effektivisering har pågått lenge mens det samlede forbruket likevel har økt", "At vekst i seg selv gjør menneskene mindre lykkelige enn de var tidligere, tross høyere materiell standard", "At markedsøkonomien historisk har ført til større ulikhet mellom land", "At teknologi som ikke finnes ennå, ikke kan regnes med i noen som helst troverdig plan"],
      explanation: "Argumentet peker på noe som faktisk har skjedd: billigere varer kjøpes det mer av, slik at effektiviseringsgevinsten spises opp. De andre alternativene er enten andre debatter eller for absolutte til å være posisjonens beste form.",
    },
    {
      question: "Hva er forskjellen på relativ og absolutt frikobling?",
      options: ["Relativ gjelder utslipp per enhet, absolutt gjelder totalen mens økonomien vokser", "Relativ gjelder ett land, mens absolutt gjelder verdensøkonomien under ett, slik at skillet er geografisk", "Relativ gjelder bare klimagasser, mens absolutt også omfatter arealbruk og avfallsmengder", "Relativ gjelder kortsiktige mål, mens absolutt gjelder mål fram mot 2050"],
      explanation: "At hver enhet blir renere, er ubestridt. Striden gjelder om totalen kan falle mens økonomien vokser, og hvor raskt. Dette er kapitlets viktigste faktapremiss, og det er nettopp derfor uenigheten delvis er empirisk.",
    },
    {
      question: "Hva er det vage bærekraftbegrepet?",
      options: ["Bærekraft som bred, samlende betegnelse der prioriteringen ikke er avklart", "Bærekraft brukt uten at det er definert hvilket tidsperspektiv som gjelder", "Bærekraft brukt av aktører som ikke selv har til hensikt å følge det opp", "Bærekraft målt med indikatorer som er for grove til å kunne følges opp"],
      explanation: "Vagheten ligger i at det ikke sies hva som skjer når hensynene kolliderer. Det er ikke en påstand om uærlighet hos dem som bruker ordet, og heller ikke et måleproblem.",
    },
    {
      question: "Hva vinnes ved et vagt bærekraftbegrep?",
      options: ["Oppslutning — vedtak alle kan stemme for, blir faktisk fattet", "Presisjon — det blir lettere å måle om et tiltak virker etter hensikten", "Ansvarlighet — det blir mulig å holde noen ansvarlig for manglende resultater", "Forutsigbarhet — aktørene vet hva som kreves av dem i årene framover"],
      explanation: "Det vage begrepet samler, og uten det ville mange klimaplaner aldri blitt vedtatt. Presisjon, ansvarlighet og forutsigbarhet er derimot nettopp det som vinnes ved et klart begrep.",
    },
    {
      question: "Hva tapes ved et vagt bærekraftbegrep?",
      options: ["Styringen — striden flyttes til gjennomføringen uten å være avklart", "Oppslutningen — færre parter kan slutte seg til et bredt formulert mål", "Sammenhengen — begrepet mister forbindelsen til internasjonale avtaler", "Legitimiteten — velgerne oppdager at målet ikke er faglig begrunnet"],
      explanation: "Når alle parter kan hevde å følge planen, gir planen ingen styring. Oppslutning er tvert imot det vage begrepets styrke, og det er den avveiningen hele drøftingen i dette kapitlet handler om.",
    },
    {
      question: "Hva er smultringmodellen et forsøk på?",
      options: ["Å tegne både et sosialt gulv og et økologisk tak i samme figur", "Å måle hvor mye utslipp hvert land kan tillate seg per innbygger", "Å vise hvordan økonomisk vekst og utslipp har utviklet seg over tid", "Å rangere klimatiltak etter hvor mye de koster per tonn utslippskutt"],
      explanation: "Modellen gjør synlig at et tiltak kan svikte på to måter: ved å presse folk under gulvet, eller ved å sprenge taket. Den avgjør derimot ikke vekststriden — begge posisjoner kan tegne seg inn i figuren.",
    },
    {
      question: "Hva er det sosiale gulvet i smultringmodellen?",
      options: ["Et minstenivå av blant annet mat, helse, utdanning og inntekt som ingen skal falle under", "Den laveste økonomiske veksten et samfunn trenger for å opprettholde velferden", "Grensen for hvor stor ulikhet et samfunn kan tåle før tilliten svekkes", "Det nivået av klimatiltak som må til for at befolkningen fortsatt skal støtte politikken"],
      explanation: "Gulvet handler om fordeling mellom mennesker nå. En klimapolitikk som løser utslippsproblemet ved å presse folk under det, har flyttet kostnaden snarere enn å løse noe.",
    },
    {
      question: "Hvorfor er det viktig å si hva de to posisjonene er enige om?",
      options: ["Fordi det viser hvor uenigheten faktisk begynner, og gjør framstillingen presis", "Fordi det gjør besvarelsen mer balansert og dermed mer sympatisk å lese for sensor", "Fordi enigheten er større enn uenigheten og derfor viktigst å få fram", "Fordi det er den eneste måten å unngå å ta stilling i et politisk spørsmål forskeren ikke bør mene noe om"],
      explanation: "En framstilling der de to er uenige om alt, er en karikatur, og en karikert posisjon gir en verdiløs drøfting. Poenget er presisjon, ikke balanse som virkemiddel.",
    },
    {
      question: "Hvilket spørsmål avgjør om et tiltak plasserer seg på veivalgsaksen?",
      options: ["Om tiltaket endrer aktivitetsnivået, eller bare utslippet per produsert enhet", "Om tiltaket er vedtatt av et flertall eller bare foreslått av en enkelt aktør", "Om tiltaket koster mer eller mindre enn alternativene som er utredet", "Om tiltaket virker på kort sikt eller først etter mange år er gått"],
      explanation: "Bare tiltak som endrer aktivitetsnivået, berører striden. Tiltak som gjør det samme mer effektivt, plasserer seg ikke — og det er helt greit å si i en besvarelse.",
    },
    {
      question: "Hvilken type tiltak ville begge posisjoner støttet?",
      options: ["Etterisolering, som gir både lavere energibruk per enhet og lavere totalforbruk", "En ny næringspark for produksjon av utstyr til fornybar energi i egen kommune", "Reduserte åpningstider i offentlige bygg for å spare energi om vinteren", "Krav om at nye boliger skal bygges med mindre areal per beboer enn i dag"],
      explanation: "Etterisolering treffer begge kriteriene samtidig: lavere intensitet og lavere total. Næringsparken øker aktiviteten, mens arealkravet reduserer mengden — og de to trekker derfor i hver sin retning.",
    },
    {
      question: "Hva er «grønn vekst» som politisk formel?",
      options: ["En formulering som rommer både vekst og klimahensyn uten å avklare frikoblingen", "En dokumentert strategi der utslippene har falt mens økonomien har vokst", "Et krav om at all framtidig vekst skal skje innenfor de fornybare næringene", "En betegnelse på veksten i markedet for miljøteknologi de siste tiårene"],
      explanation: "Formelen ser ut som et standpunkt og fungerer som en utsettelse, fordi den ikke svarer på om absolutt frikobling er mulig. Å peke på det er ikke å avvise økomodernismen, som har egne argumenter.",
    },
    {
      question: "Hva menes med jordas tålegrenser?",
      options: ["Grenser for hvor mye belastning natursystemene tåler før de endrer tilstand", "Grenser for hvor mange mennesker jorda kan brødfø med dagens teknologi og matproduksjon", "Grenser for hvor mye av en ikke-fornybar ressurs det er igjen å utvinne på jorda", "Grenser for hvor høy temperaturen kan bli før tiltakene blir for dyre"],
      explanation: "Poenget er systemenes tilstand, ikke lagerbeholdningen. Tar man grensene som absolutte, blir spørsmålet om aktivitetsnivå uunngåelig; ser man dem som fleksible, blir teknologi et rimeligere svar.",
    },
    {
      question: "Hvorfor er ordet «planlagt» avgjørende i vekstfri utvikling?",
      options: ["Fordi posisjonen skiller seg fra en økonomisk krise ved at nedgangen er villet og fordelt", "Fordi reduksjonen må vedtas i nasjonalforsamlingen før den i det hele tatt kan gjennomføres", "Fordi nedgangen skal skje over lang tid og ikke som et brått brudd", "Fordi det er myndighetene og ikke markedet som skal styre omstillingen, ved å bestemme hvilke næringer som trappes ned"],
      explanation: "En ustyrt nedgang rammer de svakeste først, og det er ikke det posisjonen argumenterer for. Fordelingen er en del av selve forslaget, ikke en tilleggsbetraktning.",
    },
    {
      question: "Hva er hovedinnvendingen mot vekstfri utvikling som strategi?",
      options: ["At omfordelingen forutsetter en politisk gjennomføringsevne det er lite grunnlag for å anta", "At den vil føre til at klimaendringene rammer de fattigste landene enda hardere enn de gjør i dag", "At den bygger på en misforståelse av hva økonomisk vekst faktisk måler", "At den ikke tar hensyn til at teknologi historisk har løst mange miljøproblemer, fra sur nedbør til hullet i ozonlaget"],
      explanation: "En politikk som ikke får flertall, kutter ingen utslipp — og det er økomodernismens skarpeste kort. Innvendingen om teknologiens historikk er relevant, men svakere, siden vekstkritikerne ikke benekter at teknologi virker.",
    },
    {
      question: "Hva er hovedinnvendingen mot økomodernismen som strategi?",
      options: ["At den forutsetter en absolutt frikobling som ikke er observert i stor skala", "At den forutsetter at markedet fungerer perfekt uten politisk styring", "At den overser at klimaendringene rammer svært ulikt i ulike deler av verden", "At den bygger på teknologier som er for dyre til å kunne tas i bruk"],
      explanation: "Å bygge en strategi på noe som ennå ikke har skjedd i tilstrekkelig omfang, er å satse — og satsingen gjøres på vegne av dem som rammes hvis den slår feil. Økomodernismen forutsetter for øvrig politisk styring, ikke et perfekt marked.",
    },
    {
      question: "Hva er registerets feil #7?",
      options: ["Å skrive generelt om bærekraft uten å treffe stridsspørsmålet om vekst", "Å framstille de to bærekraftsposisjonene som mer enige enn de faktisk er", "Å bruke smultringmodellen uten å gjøre rede for hvem som har utviklet den", "Å blande sammen klimarettferdighet og bærekraft som to sider av samme sak"],
      explanation: "Feilen består i å beskrive bærekraft bredt og velmenende uten å få tak i motsetningen om hvorvidt vekst er problemet eller løsningen. Varsellampen er en halv side uten ordet vekst.",
    },
    {
      question: "Hva er den beste måten å strukturere en drøfting av vekstspørsmålet på?",
      options: ["Ved å skille faktastriden om frikobling fra verdistriden om hvilken risiko som er verst", "Ved å gjennomgå argumentene til hver av posisjonene i tur og orden uten å koble dem sammen", "Ved å begynne med en beskrivelse av klimaendringenes omfang og alvor", "Ved å vise til hva de mest anerkjente forskerne på området har konkludert med, og la det avgjøre også verdispørsmålet"],
      explanation: "Den ene delen kan i prinsippet undersøkes, den andre kan bare begrunnes — og å si det er nettopp den koblingen mellom pensumdeler som gir uttelling. En parallell gjennomgang uten kobling er referat, ikke drøfting.",
    },
    {
      question: "Hva sier bærekraftens tre hensyn ingenting om?",
      options: ["Hva som skal vike når de miljømessige, økonomiske og sosiale hensynene kolliderer", "Hvilke av hensynene som er viktigst å måle i en offentlig utredning, og hvilke indikatorer som skal brukes", "Hvordan ansvaret for hensynene skal fordeles mellom stat, kommune og privat sektor", "Hvor lang tidshorisont man skal legge til grunn i en kommunal plan"],
      explanation: "Inndelingen gjør synlig at bærekraft er mer enn natur, men prioriteringen mangler — og nettopp der ligger striden. En besvarelse som stopper ved de tre hensynene, har levert det vage begrepet i stedet for å analysere det.",
    },
  ],
  'svexfac03-8-3': [
    {
      question: "Hva er klimarettferdighet som fagområde opptatt av?",
      options: ["Hvordan byrdene ved klimaendringene og klimatiltakene skal fordeles", "Hvordan klimaendringene rammer ulike deler av verden forskjellig i praksis", "Hvordan internasjonale klimaavtaler blir til gjennom forhandlinger mellom stater", "Hvor store utslippskutt som er nødvendige for å nå de vedtatte temperaturmålene"],
      explanation: "Spørsmålet er hvem som skal betale, ikke hvor mye som må gjøres eller hvordan avtaler blir til. Bærekraftsstriden i forrige kapittel svarer på hvor mye; dette kapitlet svarer på hvem.",
    },
    {
      question: "Hvilken normativ begrunnelse hviler forurenser betaler-prinsippet på?",
      options: ["En ansvarsnorm: den som forårsaker en skade, skal bære kostnaden ved den", "Et likhetshensyn: alle mennesker har like stort krav på atmosfærens kapasitet", "Et nyttehensyn: kuttene bør tas der de er billigst å gjennomføre i praksis", "Et evnehensyn: den som har mest å avse, bør bære den største delen av byrden"],
      explanation: "Plikten utløses av handlingen. De tre andre alternativene er begrunnelsene bak per capita, en ren kostnadseffektivitetstenkning og betalingsevneprinsippet.",
    },
    {
      question: "Hva innebærer fattigdomssensitiviteten i Caneys versjon av forurenser betaler?",
      options: ["At plikten faller bort der regningen ville presse noen under et anstendighetsgulv", "At fattige land får lengre frist til å betale sin del av den samlede regningen", "At bare utslipp knyttet til luksusforbruk regnes med i den enkeltes andel", "At betalingen skjer i form av teknologioverføring i stedet for i penger"],
      explanation: "Modifikasjonen bevarer ansvarsnormen, men underordner den hensynet til grunnleggende behov. Den delen som faller bort, må bæres av andre — det er ikke en utsettelse eller en annen betalingsform.",
    },
    {
      question: "Hva er anstendighetsgulvet?",
      options: ["Nivået av grunnleggende behov som ingen skal presses under av en forpliktelse", "Den laveste utslippsmengden et land trenger for å opprettholde sin økonomi", "Minstekravet til hva et land må bidra med for å regnes som deltaker i en avtale", "Den grensen der ytterligere kutt blir uforholdsmessig dyre å gjennomføre"],
      explanation: "Gulvet er det sosiale gulvet fra smultringmodellen brukt som skranke på et fordelingsprinsipp. Det handler om mennesker, ikke om lands økonomiske minstebehov eller om kostnadskurver.",
    },
    {
      question: "Hvilken begrunnelse hviler betalingsevneprinsippet på?",
      options: ["At like store byrder rammer ulikt, avhengig av hvor mye man har fra før", "At de rike landene har forårsaket mesteparten av de historiske utslippene", "At de som har mest, også har mest å tape på at klimaendringene fortsetter", "At betalingsvilje er den beste indikatoren på hvor mye noe faktisk er verdt"],
      explanation: "Tusen kroner er en annen sum for den som har lite enn for den som har mye. Alternativet om historiske utslipp er derimot ansvarsbegrunnelsen, som kommer inn først i den historiesensitive versjonen.",
    },
    {
      question: "Hva legger den historiesensitive versjonen av betalingsevneprinsippet til?",
      options: ["At historiske utslipp regnes med når man vurderer hvem som har mest å avse", "At betalingen fordeles over flere tiår slik at byrden blir jevnere fordelt", "At land som tidligere har betalt inn, får fradrag i sin framtidige andel", "At det er utslippene og ikke inntekten som avgjør hvor stor andelen blir"],
      explanation: "Tillegget binder ansvar og evne sammen: evnen er ikke tilfeldig fordelt, den er dels et resultat av de utslippene som skapte problemet. Det er ikke en betalingsplan eller et fradragssystem.",
    },
    {
      question: "Hva er Caneys hybridteori?",
      options: ["Kombinasjonen av fattigdomssensitivt forurenser-betaler og historiesensitiv betalingsevne", "Kombinasjonen av per capita-prinsippet og et krav om teknologioverføring til fattige land", "En teori som veksler mellom prinsippene alt etter hvilket land det gjelder", "En modell der hvert land selv velger hvilket fordelingsprinsipp det vil følge"],
      explanation: "Begge komponentene er modifiserte versjoner, og kombinasjonen har en rekkefølge: ansvaret kommer først, og betalingsevnen dekker det ansvaret ikke rekker. Det er ikke en valgfri eller landspesifikk ordning.",
    },
    {
      question: "Hvorfor er kombinasjonen i hybridteorien nødvendig?",
      options: ["Fordi forurenser betaler ikke kan kreve inn fra døde eller fra dem uten betalingsevne", "Fordi ingen internasjonal avtale kan bygge på bare ett fordelingsprinsipp", "Fordi land er uenige om hvilket prinsipp som bør gjelde i forhandlinger", "Fordi de to prinsippene gir samme resultat når de brukes på samme materiale"],
      explanation: "Ansvarsprinsippet alene lar en del av regningen bli stående ubetalt, mens betalingsevne alene mister ansvarsdimensjonen. Kombinasjonen er faglig begrunnet, ikke forhandlingsteknisk.",
    },
    {
      question: "Hva er per capita-prinsippet?",
      options: ["At hver person har like stort krav på en andel av atmosfærens kapasitet", "At hvert land betaler en andel som svarer til dets andel av verdens folketall", "At utslippene måles per innbygger for å kunne sammenlignes mellom land", "At kuttene fordeles slik at alle land reduserer like mye i prosent"],
      explanation: "Prinsippet fordeler en rettighet, ikke en regning, og begrunnelsen er at ingen har gjort seg fortjent til atmosfæren. Å måle utslipp per innbygger er derimot en statistisk operasjon, ikke et fordelingsprinsipp.",
    },
    {
      question: "Hva er den vanligste innvendingen mot per capita-prinsippet?",
      options: ["At det gir større kvoter til land med mange innbyggere og dermed premierer folketall", "At det er umulig å håndheve fordi utslipp ikke kan måles presist nok per person", "At det gir fattige land for lite fordi de har lavere utslipp i utgangspunktet", "At det forutsetter en verdensregjering som kan tildele og inndra rettigheter"],
      explanation: "Svaret som kan gis, er at alternativet innebærer at et menneske i et lite land har større rett til atmosfæren enn et menneske i et stort — en langt sterkere påstand å forsvare. Det innvendingen fortsatt treffer, er spørsmålet om hvilket årstall folketallet måles på.",
    },
    {
      question: "Hvorfor er historiske utslipp stridens kjerne?",
      options: ["Fordi en stor del av belastningen alt er sluppet ut, av land med lave utslipp i dag", "Fordi det er umulig å måle hvor mye hvert land har sluppet ut tidligere", "Fordi klimagassene bare påvirker temperaturen de første tiårene etter utslipp", "Fordi de fleste land ikke har ført statistikk over utslippene sine før nylig"],
      explanation: "Regner man bare med dagens utslipp, forsvinner en stor del av regningen. Valget mellom dagens og historiske utslipp er ikke måleteknisk, men et spørsmål om hva ansvar er.",
    },
    {
      question: "Hva er uvitenhetsinnvendingen mot å regne med historiske utslipp?",
      options: ["At de som slapp ut, ikke kunne vite hvilke følger utslippene ville få", "At dagens myndigheter ikke kjenner omfanget av tidligere utslipp godt nok", "At befolkningen i dag ikke er informert om hva regningen faktisk dekker", "At det er uklart hvilke utslipp som skyldes produksjon og hvilke som skyldes forbruk"],
      explanation: "Innvendingen gjelder de som handlet, ikke dagens kunnskapsnivå. Svaret er at kravet ikke er et skyldkrav — men innvendingen er sterkere for de tidligste tiårene enn for de siste, og hvor grensen går, er et faktaspørsmål.",
    },
    {
      question: "Hva er det skarpeste svaret på innvendingen om at de som slapp ut er døde?",
      options: ["Skillet mellom å ha skyld i noe og å ha arvet en fordel skapt av det", "At internasjonal rett gir stater ansvar for handlinger uavhengig av tid", "At de fleste utslippene faktisk har skjedd i løpet av de siste tiårene", "At regningen uansett fordeles gjennom skattesystemet og ikke på enkeltpersoner"],
      explanation: "Skillet flytter begrunnelsen fra en straffelogikk til en fordelingslogikk: man kan skylde noe uten å ha gjort noe galt. Det er nettopp derfor Caney legger historikken inn i betalingsevneprinsippet.",
    },
    {
      question: "Hvorfor legger Caney den historiske dimensjonen inn i betalingsevneprinsippet?",
      options: ["Fordi betalingsevne ikke er en skyldkategori, og kravet dermed ikke blir et straffekrav", "Fordi historiske utslipp er lettere å måle enn dagens utslipp fra samme land", "Fordi forurenser-betaler-prinsippet bare gjelder for utslipp som pågår nå", "Fordi de rike landene selv har akseptert betalingsevne som fordelingsgrunnlag"],
      explanation: "Betalingsevne spør hvem som har mest å avse, ikke hvem som har gjort noe galt. Å bygge historikken inn der, gjør at innvendingen om de døde mister mye av kraften.",
    },
    {
      question: "Hva blir igjen av innvendingen mot historisk ansvar, selv etter det beste svaret?",
      options: ["At den arvede fordelen er ujevnt fordelt innad i et land", "At ingen stat frivillig vil akseptere en regning for tidligere generasjoners utslipp", "At utslippene fra før 1950 er for usikkert kartlagt til å kunne brukes", "At land som er blitt delt eller slått sammen, ikke lar seg plassere i regnskapet"],
      explanation: "En regning som legges på befolkningen under ett, kan ramme dem som har arvet minst, hardest. Det peker mot at rettferdighet mellom land må suppleres med fordeling innad i land.",
    },
    {
      question: "Hva er hovedskillet mellom en fordelingsnøkkel og en normativ begrunnelse?",
      options: ["Nøkkelen sier hvordan man regner, begrunnelsen sier hvorfor det er rettferdig", "Nøkkelen brukes i forhandlinger, mens begrunnelsen hører hjemme i forskningen", "Nøkkelen gjelder penger, mens begrunnelsen gjelder utslippsmengder", "Nøkkelen er internasjonalt vedtatt, mens begrunnelsen varierer mellom land"],
      explanation: "En besvarelse som bare gjengir reglene, har utelatt det som gjør prinsippene til normativ teori. Det er begrunnelsene, ikke regnestykkene, oppgaven ber om.",
    },
    {
      question: "Hvilket spørsmål svarer per capita-prinsippet egentlig på?",
      options: ["Hvordan retten til framtidige utslipp skal deles mellom mennesker", "Hvem som skylder noe for det som allerede er sluppet ut i atmosfæren", "Hvem som har mest å avse av dem som skal dele på en regning nå", "Hvor mye hvert land må kutte for at et felles mål skal kunne nås"],
      explanation: "Mye av forvirringen i debatten kommer av at prinsipper som svarer på ulike spørsmål, settes opp mot hverandre som konkurrenter. Per capita fordeler en rett, ikke et ansvar.",
    },
    {
      question: "Hva er koblingen mellom atmosfæren som fellesgode og allmenningens tragedie?",
      options: ["Begge beskriver et gode alle kan bruke og ingen har ansvar for å skjøtte", "Begge forutsetter at ressursen er fornybar dersom bruken holdes lav nok", "Begge forklarer hvorfor internasjonale avtaler er vanskelige å håndheve", "Begge bygger på at aktørene mangler informasjon om hverandres handlinger"],
      explanation: "Strukturen er den samme, og koblingen knytter Del 8 til Del 1. Informasjonsmangel er ikke poenget — problemet oppstår selv når alle vet nøyaktig hva som skjer.",
    },
    {
      question: "Hva gjør klimaproblemet vanskelig for vanlige fordelingsprinsipper?",
      options: ["At årsakene ligger tilbake i tid og de verst rammede i stor grad er ufødte", "At kostnadene er så store at ingen fordeling vil oppleves som rimelig", "At utslippene skjer i privat sektor mens regningen sendes til statene", "At virkningene er usikre og derfor ikke kan legges til grunn for en fordeling"],
      explanation: "Tre trekk gjør prinsippene vanskelige å bruke: årsakene ligger langt tilbake, virkningene rammer andre enn dem som forårsaket dem, og mange av de rammede kan ikke tale sin egen sak.",
    },
    {
      question: "Hva er generasjonsrettferdighet i denne sammenhengen?",
      options: ["Fordelingen mellom dem som lever nå og dem som kommer etter oss", "Kravet om at eldre og yngre i samme land skal bære like store byrder", "Prinsippet om at hver generasjon skal betale for sine egne utslipp", "Regelen om at klimatiltak ikke skal belaste dem som er under myndig alder"],
      explanation: "Klimaproblemet er uvanlig fordi de hardest rammede i stor grad ennå ikke er født og derfor ikke kan delta i noen forhandling. Ingen av de tre fordelingsprinsippene er utformet for slike parter.",
    },
    {
      question: "Hva er det mest presise første grepet når du skal fordele en regning etter tre prinsipper?",
      options: ["Å si hvilke opplysninger hvert prinsipp bruker og hvilke det ignorerer", "Å regne ut nøyaktige beløp for hvert land etter hvert av prinsippene", "Å avgjøre hvilket prinsipp som er mest rettferdig før du begynner", "Å beskrive de tre landenes situasjon grundig før analysen starter"],
      explanation: "Å si hva et prinsipp ignorerer, er den korteste måten å vise at du har forstått hva det hviler på. Presise beløp krever tall materialet sjelden gir, og en lang saksbeskrivelse gir ingen uttelling i seg selv.",
    },
    {
      question: "Hvorfor gir de ulike prinsippene så ulike fordelinger?",
      options: ["Fordi de bruker fire ulike svar på hva som gjør at noen skylder noe", "Fordi de bygger på ulike anslag over hvor store utslippene faktisk er", "Fordi de er utviklet i land med ulike interesser i klimaforhandlingene", "Fordi noen av dem gjelder stater mens andre gjelder enkeltpersoner"],
      explanation: "Å ha forårsaket noe, å ha råd, å ha tjent på det, og å ha lik rett til et fellesgode er fire forskjellige grunnlag. Ingen av dem følger av tallene, og derfor er valget mellom dem normativt.",
    },
  ],
  'svexfac03-8-4': [
    {
      question: "Hva skiller det å bruke en kilde fra det å referere den?",
      options: ["Et brukt begrep bærer et ledd i analysen, mens et referat kan strykes uten følger", "En brukt kilde er lest i sin helhet, mens et referat bygger på et sammendrag av kildens hovedpoenger", "En brukt kilde nevnes inne i teksten, mens et referat står i en egen litteraturliste", "Et referat gjengir kildens egne ord, mens bruk innebærer å omskrive dem"],
      explanation: "Testen er å stryke setningen der kilden nevnes: står analysen igjen uendret, var det et referat. Forskjellen ligger i om kilden gjør arbeid, ikke i hvor grundig den er lest eller hvordan den er formulert.",
    },
    {
      question: "Hva er moralsk lisensiering?",
      options: ["At en god handling gir en følelse av å ha gjort sitt, og gjør det lettere å la være neste gang", "At folk krever en moralsk begrunnelse fra myndighetene før de vil akseptere et nytt klimatiltak", "At en handling regnes som akseptabel fordi mange andre gjør det samme", "At forbrukere kjøper seg fri fra dårlig samvittighet gjennom klimakvoter"],
      explanation: "Mekanismen er ubehagelig for tiltakspolitikk fordi et tiltak kan ha positiv effekt der det måles og negativ effekt et annet sted. Den er ikke det samme som å kjøpe kvoter, som er en faktisk kompensasjon.",
    },
    {
      question: "Hva er spredningseffekter i denne sammenhengen?",
      options: ["At en atferdsendring på ett område øker sannsynligheten for endring på et annet", "At et tiltak sprer seg fra én kommune til andre kommuner over tid", "At utslippene sprer seg i atmosfæren uavhengig av hvor de slippes ut", "At informasjon om nye klimatiltak spres langt raskere gjennom sosiale medier enn før"],
      explanation: "Finnes slike effekter, er små tiltak mer verdt enn utslippsregnskapet tilsier. Begrepet peker i motsatt retning av moralsk lisensiering, og hvilken mekanisme som dominerer, er et empirisk spørsmål.",
    },
    {
      question: "Hvilken menneskemodell forutsetter nudging som virkemiddel?",
      options: ["En passiv modell, fordi tiltaket virker uten at noen tar stilling til noe", "En aktiv modell, fordi den enkelte må vurdere alternativene og velge det mest miljøvennlige selv", "En biologisk passiv modell, fordi tiltaket virker på medfødte disposisjoner", "Ingen bestemt modell, siden nudging bare handler om hvordan valg presenteres"],
      explanation: "Nudging endrer hva som er lett å gjøre, ikke hva folk mener, og det er nettopp kjennetegnet på den passive modellen. En informasjonskampanje ville derimot forutsatt en aktiv modell — det er den nære distraktoren her.",
    },
    {
      question: "Hva er selvpersepsjonsteori?",
      options: ["At vi delvis slutter oss til våre egne holdninger ved å observere det vi gjør", "At vi oppfatter oss selv som atskillig mer miljøvennlige enn vi faktisk er i praksis", "At vi vurderer egne handlinger mildere enn vi vurderer andres handlinger, fordi vi kjenner motivene våre", "At selvbildet vårt bestemmes av hvilken gruppe vi opplever å tilhøre"],
      explanation: "Rekkefølgen er snudd i forhold til en vanlig holdningsforklaring: handlingen kommer først og holdningen etter. De tre andre alternativene beskriver andre og velkjente psykologiske mekanismer.",
    },
    {
      question: "Hva er karbonlekkasje?",
      options: ["At utslipp flytter seg til land med svakere krav i stedet for å forsvinne", "At klimagasser lekker ut fra anlegg for karbonfangst og lagring", "At et lands utslippsregnskap ikke fanger opp utslipp fra importerte varer", "At avtalte utslippskutt ikke gjennomføres fordi ingen håndhever avtalen"],
      explanation: "Lekkasje betyr at tiltaket virker lokalt og ikke globalt, og det er en presis påstand som kan undersøkes. Den er kjernen i det sterkeste konsekvensargumentet mot ensidige nasjonale tiltak.",
    },
    {
      question: "Hva menes med fordelingsvirkninger av et klimatiltak?",
      options: ["At tiltaket treffer ulike grupper ulikt, målt mot hva de har fra før", "At utslippskuttene fordeles mellom sektorer etter hvor de er billigst", "At kostnaden fordeles mellom stat og kommune etter en fast nøkkel vedtatt i statsbudsjettet", "At virkningene av tiltaket først kommer etter flere år er gått"],
      explanation: "En avgift som er lik for alle i kroner, utgjør en større andel av inntekten for dem som har minst. Dette er anstendighetsgulvet fra klimarettferdighetskapitlet brukt innad i et land i stedet for mellom land.",
    },
    {
      question: "Hva brukes begrepet overoppheting om?",
      options: ["At flere store endringsprosesser går raskt og samtidig, med kort tid til å tilpasse seg", "At temperaturen stiger raskere enn klimamodellene har forutsagt", "At oppmerksomheten om klimasaken er blitt så høy at hele den offentlige debatten polariseres", "At forbruket i rike land vokser raskere enn produktiviteten gjør"],
      explanation: "Begrepet peker på tempoet og samtidigheten i endringer — økonomiske, teknologiske og miljømessige. Det er ikke en påstand om temperaturmålinger, selv om ordet leder tanken dit.",
    },
    {
      question: "Hva sier begrepet skalaforskjeller om klimapolitikk?",
      options: ["At et tiltak som gir mening lokalt, kan gi motsatt virkning globalt", "At store land må gjøre mer enn små land for at målene skal nås", "At kostnaden ved kutt faller når tiltakene gjennomføres i stor skala", "At måleusikkerheten øker jo mindre geografisk område man ser på, slik at lokale tall blir usikre"],
      explanation: "Folk lever i den lokale skalaen mens problemet er i den globale, og det er en av grunnene til at tiltak oppleves ulikt av dem som gjennomfører dem og dem som vurderer dem utenfra.",
    },
    {
      question: "Hvilket problem beskriver statsvitenskapens bidrag til klimastoffet?",
      options: ["En kollektiv handlingssituasjon der hver stat tjener på at de andre kutter", "At internasjonale avtaler krever enstemmighet og derfor gjennomgående blir utvannet", "At klimapolitikk taper mot andre saker i nasjonale valgkamper", "At stater mangler pålitelige tall om hverandres faktiske utslipp, og ikke kan kontrollere avtalte kutt"],
      explanation: "Dette er gratispassasjerproblemet flyttet fra enkeltpersoner til stater. Strukturen er den samme som i handlings- og bytteperspektivet, men sanksjonsmulighetene er svakere fordi det ikke finnes noen overordnet myndighet.",
    },
    {
      question: "Hva menes med tap og skade i klimasammenheng?",
      options: ["Skader som allerede har inntruffet eller er uunngåelige, og som bare kan fordeles", "Kostnadene ved klimatiltak som viste seg å ikke ha noen effekt", "Verdien av de naturressursene som går tapt ved utbygging av fornybar energi", "Forskjellen mellom anslåtte og faktiske kostnader i et klimaprosjekt"],
      explanation: "Poenget er at disse skadene ikke lenger kan forebygges, bare fordeles — og det gjør dem til et rettferdighetsspørsmål snarere enn et tiltaksspørsmål.",
    },
    {
      question: "Hvorfor er samfunnsgeografiens perspektiv på omstilling mer enn et spørsmål om produksjon?",
      options: ["Fordi arbeidsplassene også bærer bosetting, kompetanse og hva stedet er", "Fordi geografiske avstander gjør omstilling dyrere i distriktene enn i byene", "Fordi utslippene må måles der de skjer og ikke der varene forbrukes, og stedet dermed får ansvaret", "Fordi klimaendringene rammer ulike landsdeler på ulike måter"],
      explanation: "En næring som legges om, endrer også hva et sted er. Det gjør at motstand mot omlegging ikke uten videre lar seg forklare som ren egeninteresse, og det er nettopp der perspektivet gir noe de andre fagene ikke gir.",
    },
    {
      question: "Hva er en kobling mellom et podkastbegrep og en annen pensumdel?",
      options: ["En påstand om hvordan de to forholder seg til hverandre, ikke bare en sammenstilling", "En henvisning til begge kildene i samme avsnitt av besvarelsen", "En sammenligning av hvilken av de to kildene som er den mest pålitelige på området", "En oppsummering av hva begge kildene sier om det samme temaet"],
      explanation: "Koblingen må ha en påstand i seg — noe som følger av den og ikke av delene hver for seg. Å nevne to begreper i samme avsnitt er en sammenstilling, ikke en kobling.",
    },
    {
      question: "Hva betyr regelen om at saksfeltet ikke gir uttelling i seg selv?",
      options: ["At klimakunnskap bare teller når den brukes til å vise forståelse av pensum", "At oppgaver om klima vurderes mildere enn oppgaver om andre temaer", "At kandidaten ikke bør bruke eksempler fra klimafeltet i det hele tatt, men hente dem fra andre saksfelt", "At faktafeil om klima ikke trekker nevneverdig ned så lenge apparatet er riktig brukt"],
      explanation: "En besvarelse full av korrekte tall om utslipp og temperaturmål kan få lav uttelling hvis apparatet mangler. Regelen sier ikke at faktafeil er greit, men at faktakunnskap alene ikke er det som måles.",
    },
    {
      question: "Hva er det korteste tegnet på at en besvarelse refererer i stedet for å bruke en podkast?",
      options: ["Setningen om podkasten kan strykes uten at analysen endrer seg", "Podkasten nevnes bare én gang, og da i innledningen av besvarelsen", "Kandidaten oppgir ikke hvilken fagretning podkasten tilhører, og plasserer den ikke i pensum", "Podkastens innhold gjengis med kandidatens egne ord i stedet for kildens"],
      explanation: "Strykningstesten er både rask og treffsikker. At innholdet er omskrevet, gjør det ikke til bruk — et referat med egne ord er fortsatt et referat.",
    },
    {
      question: "Hvorfor gir de seks fagene ulike svar på det samme problemet?",
      options: ["Fordi de spør om ulike ting og leter etter mekanismer på ulike nivåer", "Fordi de bygger på ulike data om hvor alvorlig klimaproblemet er", "Fordi de er uenige om hvilke tiltak som politisk lar seg gjennomføre, og anbefaler ulike løsninger", "Fordi fagene har ulike syn på hvor mye vekt forskning bør ha i politikken"],
      explanation: "Fagene skiller seg først og fremst i hva de spør om, ikke i hva de mener. Det er forklaringstypene og forklaringsnivåene demonstrert på ett og samme problem.",
    },
    {
      question: "Hva er det sterkeste argumentet for at flerfagligheten er en styrke?",
      options: ["At mekanismene virker samtidig, slik at ett enkelt svar ville vært ufullstendig", "At flere fag gir flere forskere og dermed mer forskning på området", "At uenighet mellom fag gjør at feil oppdages raskere enn ellers", "At studentene får et bredere grunnlag for å velge studieretning senere i studiet"],
      explanation: "Arbeidsdelingen gjør at samfunnsvitenskapen dekker mer enn ett fag kunne. Motargumentet er ikke at arbeidsdelingen er dårlig, men at det mangler en arena for å sette delsvarene sammen.",
    },
    {
      question: "Hva er den reelle svakheten ved at seks fag gir seks svar?",
      options: ["At det mangler en arena der delsvarene settes sammen til et samlet svar", "At fagene bruker ulike begreper om det samme fenomenet", "At studenter må lese seks kilder i stedet for én lærebok", "At politikerne kan plukke ut det faget som støtter deres eget standpunkt best"],
      explanation: "Skillet mellom arbeidsdelingen, som er en styrke, og fraværet av en syntesearena, som er en svakhet, er selve veiingen i dette temaet. De to er ikke samme sak, og bare det andre er et argument mot flerfaglighet.",
    },
    {
      question: "Hva er prising av utslipp ment å gjøre?",
      options: ["Å gjøre kostnaden ved utslipp synlig for den som slipper ut", "Å finansiere klimatiltak gjennom inntektene fra avgiften", "Å gjøre det mulig å sammenligne utslipp på tvers av ulike sektorer", "Å sette et tak på hvor mye hver aktør kan slippe ut totalt, og forby utslipp over taket"],
      explanation: "Mekanismen forutsetter en aktiv menneskemodell: tiltaket virker ved at noen regner om. Inntektene er en bivirkning, og et tak er en kvoteordning, som virker på en annen måte.",
    },
    {
      question: "Hva bør en anvendelsesbesvarelse alltid ha med, ifølge dette kapitlet?",
      options: ["Én setning om hva apparatet ikke fanger opp i den aktuelle saken", "En oversikt over alle de seks fagenes syn på det samme fenomenet", "En vurdering av hvilket tiltak kandidaten selv ville anbefalt", "En redegjørelse for hvordan dataene i saken er samlet inn"],
      explanation: "Å si hva verktøyet ikke fanger, viser at du kjenner grensene for det, og det regnes som selvstendighet. Å bruke alle seks fagene halvveis er derimot svakere enn å bruke ett helt.",
    },
  ],
  'svexfac03-9-1': [
    {
      question: "Hva er de fire trinnene i et redegjørelsesledd, i riktig rekkefølge?",
      options: ["Avgrens spørsmålet, definer med avsender, sett opp mot kontrastbegrepet, presiser grensetilfellet", "Definer begrepet, gi et eksempel, drøft innvendingen, konkluder med et forbehold", "Skill premiss fra apparat, beskriv saken kort, bruk ett apparat helt og si hva apparatet ikke fanger", "Ta standpunkt tidlig, gi beste argument for, gi beste innvending, vei og konkluder"],
      explanation: "Riktig svar er avgrensning, definisjon med avsender, kontrastbegrep og presisering. De tre andre er de øvrige sjangrenes former: eksempeloppgaven, anvendelsesoppgaven og drøftingsleddet. De ligner fordi alle fire sjangrene er bygget som faste trinnrekker, men bare den første svarer på «gjør rede for».",
    },
    {
      question: "Hva betyr det at ordet «kort» står i en oppgavetekst?",
      options: ["At omfanget er en instruks, og at et langt svar her er et feil svar uansett hvor riktig innholdet er", "At kandidaten står fritt til å skrive kort, men gjerne kan utdype ytterligere hvis tiden tillater det", "At leddet teller mindre enn de andre leddene, og derfor kan hoppes over ved tidsnød", "At sensor bare leser de første setningene, og at resten av leddet ikke blir vurdert"],
      explanation: "Riktig svar er at omfanget er en instruks. H2022-veiledningen sier at kandidaten skal følge oppgavens egen disponering: kort er kort, en utdyping er lengre. At leddet skulle telle mindre er den nære fellen — vekten er ikke oppgitt, og et hoppet ledd er dyrt på grunn av strykmekanikken.",
    },
    {
      question: "Hvorfor er nesten alle redegjørelsesbestillinger i dette emnet formulert som begrepspar?",
      options: ["Fordi paret tvinger fram et skillekriterium, som er nettopp det sensor leser etter", "Fordi to begreper gir dobbelt så mange begreper å belønne som ett begrep gjør", "Fordi pensumtekstene er skrevet i par, og oppgavene følger tekstenes egen inndeling", "Fordi et par gjør oppgaven lettere å rette, siden svaret enten er riktig eller galt"],
      explanation: "Riktig svar er at paret tvinger fram skillekriteriet. Du kan skrive løst om ett begrep alene, men ikke om grensen mellom to. De andre svarene forveksler formen med opptelling, med pensumets oppbygning eller med rettetekniske hensyn.",
    },
    {
      question: "Hva er skillekriteriet mellom formålsrasjonell og verdirasjonell handling?",
      options: ["Hvor begrunnelsen for handlingen ligger — i utfallet, eller i handlingen selv", "Hvor mye personen tjener på handlingen sammenlignet med hva den koster å utføre", "Om handlingen er planlagt på forhånd eller utført spontant i øyeblikket", "Om handlingen er lovlig i det samfunnet den utføres i, eller strider mot normene der"],
      explanation: "Riktig svar er hvor begrunnelsen ligger. Prøven er hva som skjer når utfallet uteblir: den verdirasjonelle handlingen fortsetter, den formålsrasjonelle faller bort. Gevinst, planlegging og lovlighet er trekk ved handlingen, ikke ved begrunnelsen, og skiller derfor ikke de to formene.",
    },
    {
      question: "Hva er skillekriteriet mellom intern og ekstern forskningsetikk?",
      options: ["Hvem normen beskytter: forskerkollektivet og kunnskapen, eller deltakerne og samfunnet", "Om normen er nedfelt i et skriftlig regelverk eller bare finnes som uskreven praksis", "Om normbruddet skjer inne i forskningsinstitusjonen eller utenfor dens egne lokaler", "Om normen gjelder i kvalitative prosjekter eller bare i kvantitative undersøkelser"],
      explanation: "Riktig svar er hvem normen beskytter. Sannhetsnormen, åpenhet for etterprøving og riktig kreditering verner kunnskapen og forskerfellesskapet; samtykke, konfidensialitet og vern mot skade verner dem det forskes på. At skillet skulle følge skriftlighet eller geografi er den nære fellen, og den gir feil #9 om å blande kategoriene.",
    },
    {
      question: "Hva sier H2020-veiledningen om begrepene som er listet opp under hvert tema i en oppgavetekst?",
      options: ["At de er forslag som kan, men ikke må, brukes, og at å tvinge inn alle gir et dårligere svar", "At de er minimumskrav, og at en besvarelse som mangler ett av dem ikke kan nå C-terskelen", "At de er ment som ordforklaringer til kandidater som ikke husker pensumterminologien", "At de er hentet fra forelesningene, og at kandidaten derfor bør bruke dem i den rekkefølgen"],
      explanation: "Riktig svar er at listene er forslag. Å lese dem som en sjekkliste er feil #3 i bokas register. Å lese dem som minimumskrav er den nære fellen: det høres ansvarlig ut, men fører til besvarelser som nevner alt og bruker ingenting.",
    },
    {
      question: "Hva kjennetegner en ekte avgrensning i åpningen av et redegjørelsesledd?",
      options: ["Den sier hvilken side av begrepet spørsmålet treffer, og gjerne hva det ikke gjelder", "Den gjentar oppgaveteksten med egne ord, slik at sensor ser at oppgaven er lest", "Den varsler leseren om at framstillingen nødvendigvis blir forenklet på grunn av tiden", "Den lister opp de begrepene kandidaten planlegger å bruke i resten av besvarelsen"],
      explanation: "Riktig svar er at den sier hvilken side av begrepet spørsmålet treffer. Å gjenta oppgaveteksten avgrenser ingenting, og et generelt forenklingsforbehold presiserer ingenting. En disposisjonsliste er heller ikke en avgrensning, bare en innholdsfortegnelse.",
    },
    {
      question: "Hva er poenget med presiseringssetningen om grensetilfellet?",
      options: ["Den viser at du vet hvor skillet er vanskelig, og hva som avgjør saken der", "Den beskytter deg mot trekk ved å ta forbehold om at framstillingen er kortfattet", "Den gir plass til å nevne de begrepene som ikke fikk plass tidligere i leddet", "Den signaliserer at du kjenner faglitteraturens uenighet om hvordan begrepet skal defineres"],
      explanation: "Riktig svar er at den viser hvor skillet er vanskelig og hva som avgjør det. Dette er redegjørelsesleddets selvstendighetsgrep, og selvstendighet er det karakterbeskrivelsen belønner. Et generelt forbehold beskytter ikke mot noe, og setningen er ikke et sted å plassere restbegreper.",
    },
    {
      question: "En kandidat definerer formålsrasjonell handling som «å handle for å oppnå noe». Hva er problemet?",
      options: ["Definisjonen dekker også verdirasjonell handling, og skiller derfor ikke de to formene", "Definisjonen er for lang, og bruker plass som skulle gått til kontrastbegrepet", "Definisjonen mangler et konkret eksempel, og eksempler er obligatoriske i redegjørelsesledd", "Definisjonen bruker et hverdagsord der pensum bruker et fremmedord med presis betydning"],
      explanation: "Riktig svar er at definisjonen ikke skiller: også den verdirasjonelle handlingen oppnår noe, nemlig at handlingen blir utført. Feilen er upresishet, ikke lengde eller manglende eksempel. Kuren er å si at middelet i den formålsrasjonelle handlingen velges ut fra hvor godt det når et mål som selv er gjenstand for avveining.",
    },
    {
      question: "Hvorfor er avsenderen viktig i definisjonstrinnet?",
      options: ["Fordi en feilplassert forfatterkobling er det raskeste signalet sensor har på upresisjon", "Fordi oppgaveteksten alltid krever at minst tre pensumforfattere nevnes ved navn", "Fordi kandidaten ellers kan bli mistenkt for å ha hentet formuleringen fra et annet sted", "Fordi karakterbeskrivelsen setter antall navngitte kilder som eget kriterium for A"],
      explanation: "Riktig svar er at feilkoblinger avslører upresisjon umiddelbart — at Solli tilskrives menneskemodell-begrepet, som er Balsviks, ser sensor med én gang. Verken antall navn eller kildemistanke er kriterier noe sted, og karakterbeskrivelsen teller ikke kilder.",
    },
    {
      question: "En bestilling lyder: «gjør kort rede for X, og gjør deretter grundig rede for Y». Hvordan bør tolv minutter fordeles?",
      options: ["Rundt tre minutter på det korte leddet og rundt ni på det grundige", "Seks minutter på hvert ledd, slik at begge leddene blir like godt dekket", "Ni minutter på det korte leddet, siden det står først og setter rammen for resten", "All tid på det grundige leddet, siden det korte leddet uansett teller lite"],
      explanation: "Riktig svar er tre og ni. Instruksene «kort» og «grundig» er en disponeringsanvisning, og H2022-veiledningen sier at sensor skal ta hensyn til den fordelingen. Lik fordeling er den nære fellen: begge ledd blir da feil lengde, selv om innholdet er riktig.",
    },
    {
      question: "Hva er forskjellen på et sammendrag og en redegjørelse?",
      options: ["Sammendraget gjengir alt om et tema, redegjørelsen svarer avgrenset på ett spørsmål", "Sammendraget er skrevet med egne ord, redegjørelsen holder seg tett på pensumteksten", "Sammendraget står i innledningen, redegjørelsen står i hoveddelen av besvarelsen", "Sammendraget er kortere enn redegjørelsen, og brukes bare når tiden er knapp"],
      explanation: "Riktig svar er at redegjørelsen er avgrenset til spørsmålet. Forskjellen er hva teksten svarer på, ikke hvor den står eller hvor lang den er. En redegjørelse kan godt være lengre enn et sammendrag og likevel være mer avgrenset.",
    },
    {
      question: "Hva sier karakterbeskrivelsen, som står identisk i alle 17 sensorveiledningene, om forholdet mellom gjengivelse og karakter?",
      options: ["Gjengivelse er en forutsetning på alle nivåer, mens anvendelse og selvstendighet flytter deg oppover", "Gjengivelse alene holder til C, og anvendelse er bare nødvendig for å nå helt opp til A", "Gjengivelse vektes likt med anvendelse, slik at stor kunnskapsmengde kan veie opp for en svak analysedel", "Gjengivelse vurderes bare i det første leddet, mens de øvrige leddene måles på selvstendighet"],
      explanation: "Riktig svar er at gjengivelse er en forutsetning på alle nivåer. Det er derfor mengde ikke kan kjøpe deg oppover: den som gjengir mye og anvender lite, blir liggende. Dette er begrunnelsen for bokas mantra om at anvendelse slår mengde.",
    },
    {
      question: "Hvorfor er et hoppet oppgaveledd dyrere enn et middelmådig besvart ledd?",
      options: ["Fordi minimumskravene som ikke er innfridd på to ledd gir stryk på hele oppgaven", "Fordi sensor trekker et fast antall poeng for hvert ledd som ikke er besvart", "Fordi et hoppet ledd gjør at besvarelsen leses som levert etter tidsfristen", "Fordi de øvrige leddene da vurderes strengere enn de ellers ville blitt"],
      explanation: "Riktig svar er strykmekanikken innenfor én oppgave: er minimumskravene ikke innfridd på to av leddene, stryker kandidaten på oppgaven, og er de ikke innfridd på ett, må de øvrige være klart innfridd. Koblet til kravet om at minst to av tre besvarte oppgaver må ha E eller bedre, kan ett hoppet ledd koste hele eksamen.",
    },
  ],
  'svexfac03-9-2': [
    {
      question: "Hvilke to av de fire trinnene i et eksempelledd er det som faktisk skiller besvarelsene?",
      options: ["Å si hvilken mekanisme som svarer til hvilket ledd i begrepet, og å si hva som ville gjort eksempelet dårlig", "Å navngi begrepet med avsender, og å velge et eksempel som er hentet fra samfunnsvitenskapen og ikke fra hverdagen", "Å gi eksempelet konkret, og å plassere det i riktig del av pensum med henvisning til kapitlet", "Å definere begrepet nøyaktig, og å avgrense hva spørsmålet ikke gjelder før eksempelet kommer"],
      explanation: "Riktig svar er mekanismekoblingen og motprøven, altså trinn tre og fire. Trinn en og to klarer de fleste. De andre svarene nevner ekte krav, men de er inngangsbilletten til sjangeren og ikke det som skiller C fra A.",
    },
    {
      question: "Hva kjennetegner et konstatert eksempel, i motsetning til et begrunnet?",
      options: ["Det sier at eksempelet illustrerer begrepet, uten å peke på hvilket ledd i definisjonen det treffer", "Det er hentet fra hverdagen i stedet for fra en av de studiene som står på pensumlisten", "Det står før definisjonen av begrepet, slik at leseren må gjette hva som skal illustreres", "Det er formulert i én setning, mens et begrunnet eksempel alltid trenger et helt avsnitt for seg selv"],
      explanation: "Riktig svar er at koblingen bare påstås. Prøven er å stryke ordet «fordi» og alt som følger: står setningen fortsatt hel, var begrunnelsen aldri der. Kildeområde, rekkefølge og lengde er andre spørsmål, og et begrunnet eksempel kan godt stå i én setning.",
    },
    {
      question: "Hva ber V2021-veiledningen om når kandidaten lager egne eksempler?",
      options: ["At eksemplene fortrinnsvis hentes fra samfunnsvitenskap, og ikke fra helt andre områder", "At hvert eksempel følges av en henvisning til den pensumteksten begrepet er hentet fra", "At kandidaten bruker minst to eksempler per begrep, slik at variasjonen blir synlig", "At eksemplene er hentet fra det saksfeltet oppgaveteksten selv nevner innledningsvis"],
      explanation: "Riktig svar er at eksemplene fortrinnsvis skal hentes fra samfunnsvitenskap. Det er en av få ting veiledningene sier rett ut om eksempler, og det koster ingenting å følge. Krav om antall eksempler eller om et bestemt saksfelt står ingen steder.",
    },
    {
      question: "Hva instruerer H2021-veiledningen sensor i å kontrollere ved kandidatens eksempler?",
      options: ["Om det foreslåtte tiltaket faktisk forutsetter den menneskemodellen det skal illustrere", "Om eksempelet er originalt, altså om det avviker fra dem som ble brukt i undervisningen", "Om kandidaten har gitt like mange eksempler som oppgaveteksten uttrykkelig ber om", "Om eksempelet er hentet fra klimafeltet, som er rammen for flertallet av oppgavene"],
      explanation: "Riktig svar er kontrollen av om tiltaket forutsetter modellen. Det er ikke nok at eksempelet er relevant for temaet — koblingen må tåle en test. Originalitet, antall og saksfelt er ingen kriterier: saksfeltet gir tvert imot null uttelling i seg selv.",
    },
    {
      question: "Hva er poenget med motprøven, altså trinn fire i et eksempelledd?",
      options: ["Å si hva som ville brutt koblingen, og dermed vise hvilken egenskap som gjør eksempelet gyldig", "Å ta forbehold om at ett eksempel ikke kan bevise noe, slik at framstillingen blir nyansert", "Å nevne et annet eksempel som også fungerer, slik at bredden i forståelsen kommer fram", "Å vise til en innvending mot selve begrepet, hentet fra en annen posisjon i pensum"],
      explanation: "Riktig svar er at motprøven fjerner den egenskapen som gjør eksempelet gyldig, og dermed viser hva eksempelet beviser. Et generelt forbehold sier ingenting, og motprøven er verken et ekstra eksempel eller en teorikritikk.",
    },
    {
      question: "En kandidat skriver: «Et eksempel på gratispassasjerproblemet er kollektivtrafikk.» Hva er hovedproblemet?",
      options: ["Kollektivtrafikk er et saksområde, ikke et eksempel, og har derfor ingen mekanisme å peke på", "Kollektivtrafikk er et for kjent eksempel, og sensor har sett det i mange besvarelser før", "Kollektivtrafikk hører hjemme i metodedelen av pensum og ikke i rasjonalitetsdelen", "Kollektivtrafikk illustrerer allmenningens tragedie, som er et helt annet begrep enn dette"],
      explanation: "Riktig svar er at et område ikke er et eksempel. Et eksempel har aktører, en situasjon og et utfall — for eksempel en reisende som ikke betaler på en strekning uten kontroll. Kjenthet er ikke en innvending, og de to begrepene i det siste svaret er beslektede snitt gjennom samme mekanisme.",
    },
    {
      question: "Hva er et grensetilfelle i eksempelverkstedets forstand?",
      options: ["Et eksempel som har to forsvarlige lesninger, avhengig av hvilket ledd i begrepet man vektlegger", "Et eksempel som er hentet fra grenseflaten mellom to av bokas ti temaklynger og pensumdeler", "Et eksempel som er riktig, men så sjeldent at det ikke egner seg til å illustrere noe generelt", "Et eksempel som mangler begrunnelse, og som derfor ikke kan vurderes som riktig eller galt"],
      explanation: "Riktig svar er eksempelet med to forsvarlige lesninger. Et galt eksempel har ingen forsvarlig lesning; et grensetilfelle har to, og det som avgjør er hva du legger til grunn. Å si dette eksplisitt er selvstendighet, mens å late som om saken er entydig, er den vanligste måten å miste den på.",
    },
    {
      question: "Hvorfor lønner det seg å hente to eksempler på beslektede begreper fra samme miljø?",
      options: ["Fordi forskjellen mellom dem da må ligge i begrepet, og begrunnelsen blir dermed stram", "Fordi sensor sparer tid på å lese seg inn i to ulike settinger etter hverandre i teksten", "Fordi et miljø bare kan illustrere ett begrep om gangen, og kontrasten dermed blir tydelig", "Fordi veiledningene ber om at eksempler i samme besvarelse hentes fra samme samfunnsområde"],
      explanation: "Riktig svar er at forskjellen da må ligge i begrepet og ikke i settingen. Det er et rent skrivegrep som gjør begrunnelsen stram. Ingen veiledning stiller et slikt krav, og et miljø kan naturligvis illustrere flere begreper samtidig.",
    },
    {
      question: "Hva er feil #12 i bokas register over feil sensorveiledningene navngir?",
      options: ["Å gi eksempler uten å begrunne hvorfor de illustrerer begrepet de er ment å illustrere", "Å gi for mange eksempler, slik at plassen til redegjørelsen og drøftingen blir for knapp", "Å bruke eksempler fra forelesningene i stedet for å konstruere nye eksempler selv", "Å gi eksempler på et begrep oppgaveteksten ikke nevner, og dermed svare på noe annet"],
      explanation: "Riktig svar er eksempler uten begrunnelse. H2021-veiledningen beskriver samme feil fra sensorsiden: besvarelser på D-nivå gir gjerne relevante eksempler, men sliter med begrunnelsene. De øvrige svarene beskriver andre svakheter som ikke har egen kode i registeret.",
    },
    {
      question: "En kandidat gir «å utsette lesingen til uken før eksamen» som eksempel på nåtidsskjevhet. Hva er den faglige innvendingen?",
      options: ["Eksempelet er ikke koblet til modellens forutsetning om framtidsorientering og selvkontroll", "Eksempelet beskriver en enkeltperson, mens nåtidsskjevhet bare gjelder på gruppenivå", "Eksempelet er hentet fra en situasjon uten økonomiske insentiver, og begrepet krever slike", "Eksempelet forutsetter at personen kjenner sine egne preferanser, noe modellen avviser"],
      explanation: "Riktig svar er den manglende koblingen til modellens forutsetninger — det er feil #4. Poenget er ikke at folk utsetter ting, men at nåtidsskjevheten treffer nettopp forutsetningen om framtidsorientering og selvkontroll. Eksempelet er dessuten hentet fra egen studiehverdag, som V2021-veiledningen ber deg unngå.",
    },
    {
      question: "Hvorfor er det en styrke at et eksempel treffer flere begreper samtidig, når det håndteres riktig?",
      options: ["Fordi å koble pensumdeler sammen er uttrykkelig honorert, når koblingen er skrevet ut", "Fordi et eksempel som dekker flere begreper sparer plass i en besvarelse med knapp tid", "Fordi sensor da kan velge det begrepet som passer best, og vurdere besvarelsen deretter", "Fordi flertydige eksempler regnes som mer realistiske enn de rendyrkede lærebokeksemplene"],
      explanation: "Riktig svar er at kobling mellom pensumdeler honoreres — V2022-veiledningen belønner den som kobler allmenningens tragedie til handlings- og bytteperspektivet. Forutsetningen er at du styrer flertydigheten og sier hvilket begrep du bruker eksempelet til her. Utilsiktet flertydighet er derimot en svakhet, fordi sensor ikke kan vite hva du mente.",
    },
    {
      question: "Hva er skillet mellom en sosial og en moralsk norm hos Elster, slik Balsvik framstiller det?",
      options: ["Den sosiale krever et publikum og sanksjoneres av andre, den moralske virker uten publikum", "Den sosiale er nedfelt i lov eller reglement, mens den moralske bare finnes som en indre plikt", "Den sosiale gjelder i store grupper, mens den moralske gjelder i nære relasjoner og familier", "Den sosiale endrer seg over tid med samfunnet, mens den moralske normen er varig og universell"],
      explanation: "Riktig svar er publikumsavhengigheten og hvor sanksjonen kommer fra. Nedfelling i lov er en tredje sak og gjør normen rettslig, ikke moralsk. Verken gruppestørrelse eller varighet er skillekriteriet, selv om begge deler kan variere.",
    },
    {
      question: "Hvorfor er en statistisk sammenheng mellom gratis kjernetid og yrkesdeltakelse ikke en mekanismeforklaring?",
      options: ["Fordi en mekanismeforklaring viser trinnene fra årsak til virkning, ikke bare at de henger sammen", "Fordi kvantitative data prinsipielt ikke kan brukes til å forklare, bare til å beskrive utbredelse", "Fordi sammenhengen mangler kontroll for tredje variabel, og derfor kan være spuriøs", "Fordi forklaringen mangler en formålsangivelse, altså hva aktørene ønsket å oppnå med valget"],
      explanation: "Riktig svar er at trinnene mangler. En mekanismeforklaring viser hvilke betingelser den enkelte får, hvilke valg betingelsene gjør mulige, og hvordan valgene summerer seg til utfallet. At kvantitative data ikke kan forklare, er en overdrivelse, og manglende kontroll er et annet problem enn manglende mekanisme.",
    },
    {
      question: "Hva er en latent funksjon hos Merton?",
      options: ["En utilsiktet virkning for helheten, som ingen av deltakerne har hatt som formål", "En skadelig virkning som svekker systemet, og som derfor bør fjernes av institusjonen", "En virkning som først viser seg på lang sikt, mens den manifeste viser seg med en gang", "En virkning som bare finnes i uformelle ordninger, ikke i ordninger som er formelt vedtatt"],
      explanation: "Riktig svar er den utilsiktede virkningen for helheten. Den skadelige virkningen er dysfunksjon, som er et annet av Mertons begreper. Tidshorisont og formalitetsgrad er ikke skillekriterier — det avgjørende er om virkningen var tilsiktet.",
    },
    {
      question: "Hva er den vanligste måten å forenkle standpunktteorien på, og hva mangler i forenklingen?",
      options: ["At kvinner ser ting annerledes — forenklingen mister koblingen til makt og ideologikritikk", "At all kunnskap er like gyldig — forenklingen mister kravet om at funn skal være etterprøvbare", "At kjønnsbalansen i forskningen må bedres — forenklingen mister kravet om metodisk skolering", "At objektivitet er umulig — forenklingen mister skillet mellom erkjennelse og vurdering"],
      explanation: "Riktig svar er «kvinner ser ting annerledes», som er feil #5 i registeret. Hardings poeng, slik Holst framstiller det, er at den marginaliserte posisjonen kan gi bedre kunnskap, ikke bare annen. De øvrige svarene beskriver posisjoner i nabolandskapet, men ikke selve forenklingen av standpunktteorien.",
    },
    {
      question: "Hvorfor holder ikke «en populær badeplass blir overfylt» som eksempel på allmenningens tragedie?",
      options: ["Fordi ressursen ikke forringes av bruken, den blir bare ubehagelig å bruke for flere", "Fordi badeplassen er offentlig eid, og tragedien forutsetter en ressurs uten noen eier", "Fordi antallet brukere er for lite til at et kollektivt handlingsproblem kan oppstå", "Fordi hver enkelt badegjest handler irrasjonelt, mens tragedien forutsetter rasjonelle aktører"],
      explanation: "Riktig svar er at ressursen ikke forringes. Tragedien krever at hver enkelt bruk er individuelt rasjonell mens summen ødelegger selve ressursen — som når en fiskebestand kollapser. Eierskapsform og antall brukere er ikke definerende, og badegjestene handler nettopp rasjonelt hver for seg.",
    },
  ],
  'svexfac03-9-3': [
    {
      question: "Hva sier saksfeltregelen om kunnskap om saken en caseoppgave handler om?",
      options: ["At den ikke gir uttelling i seg selv, men bare når den brukes til å vise forståelse av pensum", "At den er forbudt å bruke, fordi oppgaven skal besvares med pensumbegreper alene, slik at saksstoff trekker ned", "At den vektes med en fjerdedel, slik at et velinformert bakteppe gir en målbar bonus i seg selv", "At den bare teller når saken er hentet fra klimafeltet, som rammer inn de fleste av oppgavene"],
      explanation: "Riktig svar er at saksstoffet er ubetalt inntil det gjør arbeid for analysen. V2021-veiledningen sier det mest presist. Saksstoff er altså ikke forbudt, og det finnes ingen egen vekting av det — heller ikke for klimarelatert kunnskap, som H2021 uttrykkelig sier ikke skal vektlegges i seg selv.",
    },
    {
      question: "Hva er forskjellen på premisset og apparatet i en anvendelsesoppgave?",
      options: ["Premisset er det oppgaven ber deg legge til grunn, apparatet er begrepene du analyserer med", "Premisset er den teorien du velger, mens apparatet er de metodene teorien gir deg tilgang til", "Premisset er innledningen i besvarelsen, mens apparatet er selve analysedelen som følger lenger ute i teksten", "Premisset er sensorveiledningens forventning, mens apparatet er kandidatens egen disposisjon"],
      explanation: "Riktig svar er at premisset er det gitte og apparatet er begrepene. Blander du dem, ender du med å bestride hva som skjedde i stedet for å analysere det. De andre svarene forveksler begrepsparet med teori og metode, med tekstens deler, eller med vurderingssituasjonen.",
    },
    {
      question: "Hvor lang bør saksbeskrivelsen være i et anvendelsesledd på ti minutter?",
      options: ["To til fire setninger, akkurat nok til at analysen har noe å feste seg i underveis", "Rundt en tredjedel av leddet, slik at leseren får saken godt og grundig etablert først", "Så lang som det trengs for å vise at kandidaten faktisk kjenner saksfeltet den handler om", "Én setning, siden sensor allerede kjenner saken fra oppgaveteksten og ikke trenger mer"],
      explanation: "Riktig svar er to til fire setninger. Prøven er å fjerne én setning om saken og se om analysen fortsatt henger sammen. En tredjedel er for mye, og å demonstrere kjennskap til feltet gir null i seg selv — men helt uten forankring blir koblingene hengende i luften.",
    },
    {
      question: "Hvorfor lønner det seg å bruke ett apparat helt framfor tre apparater halvveis?",
      options: ["Fordi bredden allerede måles i flervalgsdelen, mens denne delen måler om du kan bruke ett", "Fordi tre apparater tar mer tid enn de ti minuttene et anvendelsesledd realistisk får", "Fordi oppgavetekstene alltid oppgir hvilket ett apparat kandidaten skal bruke i besvarelsen", "Fordi apparatene i pensum motsier hverandre, og en besvarelse ikke kan romme motsigelser mellom dem"],
      explanation: "Riktig svar er arbeidsdelingen mellom de to eksamensdelene: breddekunnskapen måles i Del I, og langsvaret måler anvendelse. Tidsargumentet er sant, men er ikke hovedgrunnen. Oppgavene ber ofte kandidaten velge selv, og apparatene utelukker ikke hverandre — de ser ulike sider.",
    },
    {
      question: "Hva er apparatets blindsone?",
      options: ["Det ved saken som det valgte perspektivet ikke kan se, navngitt konkret og ikke generelt", "De begrepene i perspektivet som kandidaten ikke rakk å bruke innenfor den tiden som var til rådighet", "Den delen av pensum som ikke er dekket av noen av de ti temaklyngene boka er bygget rundt", "Det forbeholdet enhver besvarelse bør ta om at framstillingen nødvendigvis er forenklet"],
      explanation: "Riktig svar er det saken inneholder som perspektivet ikke fanger — for eksempel at integrasjonsperspektivet ikke ser interessene under enigheten. Et generelt forenklingsforbehold navngir ingenting, og blindsonen handler om saken, ikke om tidsbruk eller pensumdekning.",
    },
    {
      question: "Hva sier H2020-veiledningen om å problematisere premisset i en oppgavetekst?",
      options: ["At det vurderes positivt når kandidaten spør om oppgavens egen betegnelse er dekkende", "At det trekker ned, fordi kandidaten da svarer på en annen oppgave enn den som er gitt", "At det er nødvendig for å bestå, siden alle oppgavetekster inneholder en uklar betegnelse", "At det bare er tillatt i drøftingsleddet, og aldri i innledningen, der premisset skal legges til grunn"],
      explanation: "Riktig svar er at det vurderes positivt. Det er et av få steder materialet belønner motstand mot oppgaveteksten. Forutsetningen er at problematiseringen er kort og at analysen kommer etterpå — erstatter den analysen, har kandidaten byttet oppgave.",
    },
    {
      question: "En besvarelse nevner alle fire perspektivene på sosial orden med en halv setning hver. Hva er diagnosen?",
      options: ["Feil #3 — stikkordslista i oppgaveteksten er lest som en sjekkliste som må krysses av", "Feil #1 — kandidaten har forvekslet sosial orden med fravær av strid og konflikt", "Feil #12 — kandidaten har gitt eksempler uten å begrunne hvorfor de illustrerer noe", "Feil #10 — kandidaten har svart på metodevalg med at det kommer an på hva man vil vite"],
      explanation: "Riktig svar er feil #3. H2020-veiledningen sier at begrepene listet under hvert perspektiv bare er forslag, og at å tvinge inn alle gir en dårligere besvarelse. De øvrige kodene beskriver ekte feil, men treffer andre situasjoner enn denne.",
    },
    {
      question: "Hva kjennetegner et begrunnet apparatvalg?",
      options: ["Begrunnelsen peker på et trekk ved saken, ikke bare på en egenskap ved perspektivet", "Begrunnelsen viser til at perspektivet er behandlet grundig i pensumlitteraturen", "Begrunnelsen sier hvilket perspektiv kandidaten kan best, og hvorfor det er en fordel", "Begrunnelsen gjengir hva de tre andre perspektivene ville sagt, før valget faller"],
      explanation: "Riktig svar er at begrunnelsen peker på saken: «saken har en fordelingsside der noen bærer kostnaden» er en grunn, mens «konfliktperspektivet handler om makt» bare er en beskrivelse. En gjennomgang av alle alternativene er dessuten nettopp den bredden som ikke gir uttelling her.",
    },
    {
      question: "Hvilken praktisk prøve avslører om et anvendelsesledd har blitt en tekst om saken?",
      options: ["Stryk alle setninger uten pensumbegrep, og se om det som står igjen fortsatt er en analyse", "Tell antall avsnitt, og kontroller at analysedelen har flere avsnitt enn saksbeskrivelsen, så analysen veier tyngst", "Sjekk at hvert avsnitt begynner med et pensumbegrep i stedet for med en opplysning om saken", "Se om besvarelsen nevner minst tre pensumforfattere ved navn i løpet av analysedelen"],
      explanation: "Riktig svar er strykeprøven. Er det som står igjen bare overskrifter, er teksten skrevet om saken. Avsnittstelling og førstesetninger er formaliteter som lett kan innfris uten at analysen finnes, og antall navn er ikke noe kriterium.",
    },
    {
      question: "Hva er den viktigste grunnen til at fagfolk på et saksområde noen ganger skriver svake caseoppgaver?",
      options: ["De bruker plassen på saksstoff som er riktig og relevant, men som ikke gir uttelling", "De kjenner saken bedre enn sensor, og besvarelsen blir derfor vanskelig å vurdere", "De velger for kompliserte apparater, siden de vil vise at de kjenner nyansene i feltet", "De unngår å ta stilling, fordi de vet hvor omstridt spørsmålet er blant fagfolk"],
      explanation: "Riktig svar er at kunnskapen brukes på det som er ubetalt. Saksstoffet føles som arbeid og gir null. De andre svarene beskriver situasjoner som kan forekomme, men de er ikke det systematiske problemet saksfeltregelen peker på.",
    },
    {
      question: "Hva er forskjellen på funksjon og hensikt i en funksjonsanalyse?",
      options: ["Funksjonen er en virkning ordningen har for helheten, hensikten er noe noen har villet", "Funksjonen er den virkningen som er ønsket, mens hensikten er den som faktisk inntreffer", "Funksjonen gjelder på systemnivå, mens hensikten alltid gjelder på individnivå alene, slik at skillet gjelder nivå", "Funksjonen kan måles empirisk, mens hensikten bare kan rekonstrueres gjennom intervjuer"],
      explanation: "Riktig svar er at funksjonen er en virkning, ikke en intensjon. Det er nettopp derfor latente funksjoner finnes: virkninger for helheten som ingen har villet. De andre svarene bytter om begrepene eller gjør skillet til et spørsmål om nivå eller målemetode.",
    },
    {
      question: "En sak kan leses både som funksjonell og som dysfunksjonell. Hva må en sterk besvarelse gjøre?",
      options: ["Skrive ut begge lesningene og si hvem sitt beste for helheten som legges til grunn", "Velge den lesningen som har flest argumenter for seg, og forkaste den andre helt", "Konstatere at spørsmålet ikke lar seg avgjøre, og gå videre til neste oppgaveledd", "Vise til at faglitteraturen er delt, og la spørsmålet stå åpent i konklusjonen"],
      explanation: "Riktig svar er å skrive ut begge lesningene og gjøre målestokken eksplisitt. Sensorkravet er at minimum er ett argument, gode besvarelser gir flere relevante, og sterke gir både for og mot. Å konstatere at spørsmålet er uavgjørbart uten å si hva det avhenger av, er feil #10 i ny drakt.",
    },
    {
      question: "Hvilken av disse setningene er apparat og ikke saksstoff?",
      options: ["«Ideologibegrepet er relevant, fordi motstanden avtok da vedtaket ble omtalt som uunngåelig.»", "«Kommunen vedtok utbyggingen med tolv mot ni stemmer etter to høringsrunder i saken.»", "«Hyttebygging har vært en vekstnæring i norske fjellkommuner gjennom hele denne perioden.»", "«Feltet skal etter planen ha 140 enheter, en egen adkomstvei og felles vann og avløp.»"],
      explanation: "Riktig svar er setningen om ideologi: begrepet er koblet til en observert endring i saken, og koblingen er begrunnet. De tre andre er opplysninger om saken. De er ikke gale, men de er ubetalte inntil analysen faktisk trenger dem til noe.",
    },
    {
      question: "Hvorfor er blindsonesetningen A-markøren i anvendelsessjangeren?",
      options: ["Fordi den gir dybde uten å late som om ett perspektiv fanger hele saken", "Fordi den viser at kandidaten kjenner alle de fire perspektivene og kan sammenligne dem", "Fordi den beskytter besvarelsen mot trekk hvis analysen skulle vise seg å være feil", "Fordi den er det eneste stedet i besvarelsen der kandidaten får uttrykke egen mening"],
      explanation: "Riktig svar er at den kombinerer dybde med selvstendighet: du bruker ett apparat helt, og sier likevel hva det ikke ser. Den er ikke en sammenligning av alle perspektivene, og den er ingen forsikring mot feil — en gal analyse blir ikke bedre av at blindsonen er navngitt.",
    },
  ],
  'svexfac03-9-4': [
    {
      question: "Hva er minimumskravet i et drøftingsledd, ifølge veiledningene til V2024-3 og V2025-2?",
      options: ["Ett argument, enten for eller mot, så lenge det er begrunnet og relevant for saken", "Ett argument for og ett argument mot, med en veiing som avgjør hvilket som står sterkest", "Tre relevante argumenter, siden drøftingsleddet er det tyngste leddet i hver oppgave", "En eksplisitt tolkning av oppgaveteksten, uansett om oppgaveformuleringen er åpen eller ikke"],
      explanation: "Riktig svar er ett argument for eller mot. Gode besvarelser gir flere relevante, og sterke gir både for og mot — det er tre nivåer, og bare det første er minimum. Tolkningskravet gjelder åpne oppgaver, og er et eget grep.",
    },
    {
      question: "Hva skiller å veie en innvending fra å nevne den?",
      options: ["Veiingen sier noe om forholdet mellom innvendingen og argumentet, ikke bare at begge finnes", "Veiingen gjentar hovedargumentet med sterkere formuleringer enn da det ble gitt første gang i teksten", "Veiingen plasserer innvendingen i konklusjonen i stedet for midt i drøftingsleddet", "Veiingen viser til en pensumforfatter som har svart på innvendingen i faglitteraturen"],
      explanation: "Riktig svar er at veiingen sier noe om forholdet: treffer innvendingen på kort sikt, men ikke over tid? Å gjenta argumentet er nettopp det som ikke er en veiing, og plassering eller kildehenvisning avgjør ingenting.",
    },
    {
      question: "Hva sier H2020-veiledningen om åpne oppgaveformuleringer?",
      options: ["At kandidaten bør tolke oppgaven eksplisitt i innledningen og besvare den slik", "At kandidaten bør besvare alle mulige lesninger, siden ingen av dem kan utelukkes", "At sensor tolker oppgaven, og at kandidatens egen avgrensning derfor ikke vurderes", "At åpne formuleringer bare forekommer i drøftingsledd og aldri i redegjørelsesledd"],
      explanation: "Riktig svar er den eksplisitte tolkningen i innledningen. Veiledningen sier at gode besvarelser dermed selv bidrar til å definere kriteriene de vurderes etter. Å besvare alle lesninger gir tre halve svar, og det er ingen som tolker på kandidatens vegne.",
    },
    {
      question: "Hva menes med gjenbruksgrepet i et drøftingsledd?",
      options: ["At drøftingen bruker skillekriteriet fra ditt eget redegjørelsesledd som premiss", "At drøftingen gjentar hovedpunktene fra redegjørelsen, slik at leseren husker dem", "At samme argument brukes i flere av oppgavene på settet for å spare tid under eksamen", "At kandidaten gjenbruker en drøfting fra en tidligere termin som ligger i oppgaveheftet"],
      explanation: "Riktig svar er å bruke a-leddets skillekriterium som premiss i c-leddet. Det binder oppgaven sammen til én besvarelse i stedet for tre løsrevne svar. Gjentakelse er noe annet enn gjenbruk, og de to siste svarene beskriver noe helt annet.",
    },
    {
      question: "Hvorfor er tre svake argumenter svakere enn ett sterkt?",
      options: ["Fordi leseren vurderer kjeden etter det svakeste leddet, og relevans er kriteriet framfor antall", "Fordi sensorveiledningene setter et tak på hvor mange argumenter som kan telle med i vurderingen", "Fordi tiden ikke strekker til for tre argumenter innenfor de ti minuttene leddet får tildelt", "Fordi argumenter av samme type regnes som ett argument når de peker i samme retning"],
      explanation: "Riktig svar er at kjeden vurderes etter det svakeste leddet, og at veiledningene ber om flere relevante argumenter, ikke om flere argumenter. Det finnes ingen øvre grense, og tidsargumentet er en praktisk bekymring, ikke grunnen.",
    },
    {
      question: "Hva kreves for at «det kommer an på» skal være en gyldig konklusjon?",
      options: ["At det står hva det kommer an på, altså en navngitt betingelse som ville snudd vurderingen", "At kandidaten viser til at faglitteraturen er delt på nettopp dette punktet i debatten", "At begge posisjonene er beskrevet like grundig, slik at framstillingen forblir balansert", "At konklusjonen kommer helt til slutt, etter at alle argumenter er lagt fram i tur og orden"],
      explanation: "Riktig svar er den navngitte betingelsen. Uten den er formuleringen en unnvikelse — det er feil #10 i ny drakt. Balanse i framstillingen og plassering av konklusjonen er formaliteter som ikke redder en landing uten grunner.",
    },
    {
      question: "Hva er en stråmann i et drøftingsledd?",
      options: ["En karikert versjon av motposisjonen, som er lett å slå ned og gir null uttelling", "Et argument som ikke er begrunnet, men som likevel presenteres som avgjørende", "En innvending kandidaten nevner uten å svare på den i den påfølgende veiingen", "Et standpunkt som er hentet fra pensum i stedet for å være kandidatens eget"],
      explanation: "Riktig svar er den karikerte motposisjonen. Den viser bare at kandidaten ikke har forstått motposisjonen. En ubesvart innvending og et ubegrunnet argument er ekte svakheter, men de har andre navn.",
    },
    {
      question: "Hva er første trinn i konverteringen fra egen mening til faglig argument?",
      options: ["Å finne hvilket pensumbegrep meningen faktisk hviler på, og begynne der", "Å legge meningen bort, slik at framstillingen kan bli nøytral og etterprøvbar", "Å finne empiriske tall som støtter meningen, slik at den blir dokumentert", "Å plassere meningen i konklusjonen, der personlige vurderinger hører hjemme"],
      explanation: "Riktig svar er å starte i pensumets eget begrep — nesten alle sterke meninger om klima, ulikhet og kjønn hviler på et prinsipp som har et navn i pensum. Konverteringen skal gjøre meningen argumenterbar, ikke usynlig, og tall er ikke det som mangler.",
    },
    {
      question: "Hva sier V2020-veiledningen om kandidater som bruker mest plass på gjengivelse i midterste ledd?",
      options: ["At de lander på C, mens de som får noe ut av det krevende siste leddet skal ha A eller B", "At de lander på D, siden gjengivelse uten anvendelse regnes som svak forståelse i skalaen", "At de bør vurderes ut fra gjengivelsens kvalitet alene, siden leddene vektes hver for seg", "At de har fulgt oppgavens disponering, og derfor ikke skal trekkes for vektfordelingen"],
      explanation: "Riktig svar er at de lander på C, mens de som får noe ut av det tredje leddet skal ha A eller B. Det er en av de mest direkte uttalelsene om vekting i hele materialet. Leddene vurderes ikke uavhengig av hverandre, og disponeringen er her nettopp det som svikter.",
    },
    {
      question: "Hvilken av disse er en gyldig konklusjon med forbehold?",
      options: ["«Jeg lander på X. Hadde fordelingsvirkningene vært jevne, ville jeg landet motsatt.»", "«Jeg lander på X, men det finnes selvsagt gode argumenter på begge sider av saken.»", "«Det er vanskelig å konkludere, siden argumentene er sterke i begge retninger her.»", "«Jeg lander på X, slik også flertallet av forskerne på feltet ser ut til å gjøre.»"],
      explanation: "Riktig svar er den som navngir en betingelse som ville snudd vurderingen. Formuleringene om gode argumenter på begge sider og om at det er vanskelig å konkludere, uttrykker usikkerhet uten å feste den til noe, mens henvisningen til hva flertallet av forskerne mener, erstatter begrunnelse med autoritet.",
    },
    {
      question: "Hva kreves av standpunktet i et drøftingsledd?",
      options: ["At det er begrunnet — originalitet er ikke et kriterium noe sted i karakterbeskrivelsen", "At det avviker fra det pensumforfatterne selv konkluderer med i sine egne tekster og artikler", "At det er formulert som et spørsmål, slik at drøftingen forblir åpen underveis", "At det holdes tilbake til konklusjonen, slik at argumentasjonen ikke blir farget"],
      explanation: "Riktig svar er at standpunktet skal være begrunnet, ikke originalt. Det som måles, er selvstendighet, og selvstendighet betyr at vurderingen er ført. Å holde standpunktet tilbake gjør dessuten leddet vanskeligere å følge.",
    },
    {
      question: "Hvorfor er drøftingsleddet det siste du bør kutte i når tiden blir knapp?",
      options: ["Fordi uttellingen ligger der, og fordi ett begrunnet argument allerede innfrir minimumskravet", "Fordi det står sist i oppgaven, og fordi en besvarelse som stopper brått leses som ufullført", "Fordi drøftingsleddet teller mer enn de andre leddene i den samlede karaktersettingen", "Fordi sensor leser drøftingsleddet først, og danner seg et inntrykk av besvarelsen der"],
      explanation: "Riktig svar er at uttellingen ligger der og at terskelen er lav: ett argument innfrir minimumskravet, og et hoppet ledd rammes av strykmekanikken. Vektingen mellom leddene er ikke oppgitt noe sted, og ingenting sier noe om lesernes rekkefølge.",
    },
    {
      question: "Hva er verdifrihetsidealet hos Weber, slik Grimen framstiller det?",
      options: ["Et krav om å skille erkjennelse fra vurdering, ikke et krav om at forskeren skal være meningsløs", "Et krav om at forskeren ikke skal ha politiske oppfatninger i det feltet hun forsker på", "Et krav om at forskningstemaet velges uten at verdier spiller inn i utvelgelsen i det hele tatt", "Et krav om at alle begreper skal være fri for vurderinger allerede før undersøkelsen starter"],
      explanation: "Riktig svar er skillet mellom erkjennelse og vurdering. At forskeren ikke skal ha meninger, er den vanligste misforståelsen. Temavalget er tvert imot verdirelatert uten at funnene dermed er det, og at begreper er verdiimpregnerte er Grimens egen innvending mot idealet.",
    },
    {
      question: "Hva er intersubjektivitet ment å løse, i drøftingen om verdifrihet?",
      options: ["Kravet flyttes fra den enkelte forskerens nøytralitet til fellesskapets kontroll av funnene", "Kravet om nøytralitet oppheves, siden all kunnskap uansett er farget av forskerens posisjon", "Kravet om at forskeren skal oppgi sine egne verdier åpent i innledningen til studien", "Kravet om at flere forskere skal delta i hvert prosjekt for å balansere hverandres syn"],
      explanation: "Riktig svar er at kontrollen flyttes til fellesskapet: det som ikke kan sikres i den enkeltes hode, kan sikres gjennom etterprøving og kritikk. Det er ikke det samme som å oppheve kravet, og heller ikke et krav om åpenhet om egne verdier eller om bemanning.",
    },
  ],
  'svexfac03-9-5': [
    {
      question: "Hvor mange spørsmål har Del I, og hvor mye teller den?",
      options: ["25 spørsmål, som til sammen utgjør 25 % av den samlede karakteren på emnet", "25 spørsmål, som til sammen utgjør 50 % av den samlede karakteren på emnet", "50 spørsmål, som til sammen utgjør 25 % av den samlede karakteren på emnet", "20 spørsmål, som til sammen utgjør en tredjedel av den samlede karakteren"],
      explanation: "Riktig svar er 25 spørsmål og 25 %. I det forrige eksamensregimet, som varte fra V2018 til H2022, kunne delen gi maks 50 poeng og telte langt mer — men antallet spørsmål der er ikke kjent, og 50 poeng er ikke det samme som 50 spørsmål.",
    },
    {
      question: "Hva er poengsystemet i flervalgsdelen?",
      options: ["+1 for riktig, −0,33 for galt og 0 for blankt svar på hvert enkelt spørsmål", "+1 for riktig, 0 for galt og 0 for blankt, slik at gjetting alltid er lønnsomt", "+1 for riktig, −1 for galt og +0,25 for blankt svar på hvert enkelt spørsmål", "+2 for riktig, −0,5 for galt og 0 for blankt svar på hvert enkelt spørsmål"],
      explanation: "Riktig svar er +1, −0,33 og 0. Systemet er valgt slik at ren gjetting med fire alternativer i gjennomsnitt gir null. Uten trekk ville gjetting alltid lønnet seg, og da ville delen målt noe annet enn kunnskap.",
    },
    {
      question: "Hva er forventet poengsum per spørsmål hvis du gjetter blindt mellom fire alternativer?",
      options: ["Omtrent null, siden gevinsten ved å treffe veies opp av trekket ved å bomme", "Et kvart poeng i pluss, siden du treffer på ett av fire spørsmål i det lange løp", "Et tredjedels poeng i minus, siden tre av fire gjetninger blir gale i snitt", "Et halvt poeng i pluss, siden trekket bare gjelder helt åpenbart gale alternativer"],
      explanation: "Riktig svar er omtrent null: 0,25 ganger ett poeng minus 0,75 ganger 0,33 poeng går nesten nøyaktig i null. Det er hele hensikten med straffetrekket — flaks skal verken lønne seg eller ødelegge.",
    },
    {
      question: "Hva skjer med regnestykket hvis du kan stryke ett av de fire alternativene?",
      options: ["Forventningen blir positiv, rundt et kvart poeng, og det lønner seg da å svare", "Forventningen blir fortsatt null, siden trekket øker like mye som treffsjansen", "Forventningen blir negativ, siden tre alternativer gir større risiko enn fire", "Forventningen kan ikke regnes ut, siden den avhenger av hvilke spørsmål som kommer"],
      explanation: "Riktig svar er at forventningen blir positiv: en tredjedels sjanse for ett poeng minus to tredjedelers sjanse for 0,33 poeng gir rundt et kvart poeng i pluss. Over 25 spørsmål blir slike kvartpoeng til et karaktertrinn.",
    },
    {
      question: "Hva er regelen leseren skal ta med seg inn i eksamenslokalet?",
      options: ["Blank når du ikke kan utelukke noe, gjett når du kan stryke minst ett alternativ", "Svar på alle spørsmål, siden et blankt svar aldri kan gi noen poeng i det hele tatt", "La stå blankt når du ikke er helt sikker, siden feilsvar trekker fra poengsummen", "Svar bare på de spørsmålene du rekker innenfor det tidsbudsjettet du har satt"],
      explanation: "Riktig svar er utelukkelsesregelen. Å svare på alt straffer seg når du ikke kan utelukke noe, og å kreve full sikkerhet er for strengt — utelukkelse av ett alternativ er nok til at svaret lønner seg.",
    },
    {
      question: "Hva er karaktergrensen for E på flervalgsdelen?",
      options: ["7,5 poeng, mens F er alt under dette og D begynner på 10 poeng", "10 poeng, mens F er alt under dette og D begynner på 13,75 poeng", "12,5 poeng, altså halvparten av de 25 mulige poengene på delen", "6,25 poeng, altså det ren gjetting i gjennomsnitt ville gitt på delen"],
      explanation: "Riktig svar er 7,5 poeng. Grensene videre er D fra 10, C fra 13,75, B fra 18 og A fra 21,25. Halvparten av poengene tilsvarer altså en C, ikke en E.",
    },
    {
      question: "Hvorfor er ikke en sterk langsvarsdel nok til å bestå eksamen?",
      options: ["Fordi begge delene må bestås hver for seg, altså at flervalgsdelen har vetorett", "Fordi langsvarsdelen bare teller 50 %, og resten hentes fra flervalgsdelen alene", "Fordi sensor vurderer delene samlet og gir én karakter ut fra helhetsinntrykket", "Fordi det kreves minst C på flervalgsdelen for at langsvarsdelen skal vurderes"],
      explanation: "Riktig svar er de doble beståkravene: begge deler må bestås for seg, og i tillegg må minst to av de tre besvarte skriftlige oppgavene ha E eller bedre. Langsvarsdelen teller 75 %, og det finnes ingen egen C-terskel for at den skal vurderes.",
    },
    {
      question: "Hva er flervalgsdelen uttrykkelig ment å måle?",
      options: ["Breddekunnskapen om pensum, altså at kandidaten kjenner hele pensumet", "Evnen til å anvende begreper på nye caser under sterkt tidspress i eksamenslokalet", "Hvor godt kandidaten kjenner de temaene som oftest kommer i langsvarsdelen", "Presisjonen i kandidatens definisjoner, målt gjennom nære svaralternativer"],
      explanation: "Riktig svar er bredde. V2018-veiledningen begrunner E-terskelen med nettopp det, og sier samtidig at essaydelen derfor må vise forståelse ut over oppramsing. Anvendelse måles i Del II, og frekvensen i langsvarsdelen sier ingenting om hva Del I dekker.",
    },
    {
      question: "Hvorfor er bokas quiz-bank nykonstruksjon og ikke rekonstruksjon?",
      options: ["Fordi arkivet ikke inneholder ett eneste bevart spørsmål fra denne delen av eksamen", "Fordi de gamle spørsmålene er for utdaterte til å passe dagens pensumlitteratur", "Fordi opphavsretten hindrer at oppgaver fra tidligere eksamener gjengis i lærebøker", "Fordi spørsmålene endres helt fra termin til termin, og gamle spørsmål blir uaktuelle"],
      explanation: "Riktig svar er at ingen spørsmål er bevart, for noen termin i noen av de årene delen har eksistert. Banken er derfor bygget på den pensumbredden sensorveiledningene navngir. De andre svarene forutsetter alle at spørsmålene finnes et sted, og det gjør de ikke.",
    },
    {
      question: "En kandidat svarer på alle 25 spørsmål og har 12 riktige. Hva blir poengsummen?",
      options: ["7,71 poeng, altså 12 minus 0,33 ganger de 13 gale svarene på delen", "12 poeng, siden de gale svarene bare gir null og ikke trekker fra summen", "4,29 poeng, siden hvert galt svar trekker et helt poeng fra de riktige", "9,04 poeng, siden trekket bare gjelder de spørsmålene som er besvart feil to ganger"],
      explanation: "Riktig svar er 7,71 poeng, altså så vidt over E-grensen på 7,5. Regnestykket er alltid antall riktige minus 0,33 ganger antall gale. At gale svar bare gir null, er nettopp det som ikke gjelder her.",
    },
    {
      question: "To kandidater har begge 14 riktige svar. Den ene lar 11 stå blanke, den andre svarer på alt og bommer på 11. Hva blir forskjellen?",
      options: ["14 poeng mot 10,37 poeng, altså C mot D — samme kunnskap, ett karaktertrinn", "14 poeng mot 14 poeng, siden blanke og gale svar begge gir null poeng hver", "14 poeng mot 3 poeng, siden hvert galt svar trekker et helt poeng fra summen", "11 poeng mot 14 poeng, siden blanke svar trekker mer enn gale svar gjør"],
      explanation: "Riktig svar er 14 mot 10,37 poeng. Forskjellen på et karaktertrinn kommer ikke av kunnskap, men av hva kandidatene gjorde med de spørsmålene de ikke kunne. Blanke svar trekker ingenting, gale svar trekker 0,33.",
    },
    {
      question: "Hvor stor del av eksamenstiden bør Del I få, etter modellen boka bruker?",
      options: ["Rundt 25 minutter, altså ett minutt per spørsmål pluss en liten reserve", "Rundt 45 minutter, altså en fjerdedel av tiden, siden delen teller en fjerdedel", "Rundt 60 minutter, siden delen må bestås og derfor bør sikres først av alt", "Så lang tid som trengs, siden vetoretten gjør delen viktigere enn vektingen"],
      explanation: "Riktig svar er rundt 25 minutter. Vektingen tilsier lite tid, siden 75 % av karakteren ligger i Del II, mens vetoretten tilsier at delen ikke kan sløyfes. Løsningen er bred lesing på forhånd og stram tidsdisiplin på dagen.",
    },
    {
      question: "Hva er en nabobegrep-distraktor?",
      options: ["Et galt alternativ som er nabobegrepet til det riktige, som latent mot manifest funksjon", "Et alternativ som er hentet fra en annen del av pensum enn spørsmålet handler om", "Et alternativ som er åpenbart galt, og som derfor kan strykes uten noen kunnskap", "Et alternativ som gjentar spørsmålets egen formulering med litt andre ord enn der"],
      explanation: "Riktig svar er nabobegrepet. Det kan bare strykes av den som kjenner skillekriteriet mellom de to begrepene. Et alternativ fra en annen del av pensum eller et åpenbart tullesvar er derimot lett å stryke uten dyp kunnskap.",
    },
    {
      question: "Hvilken situasjon i flervalgsdelen er farligst?",
      options: ["Der du føler deg trygg, men det riktige alternativet har et nabobegrep du forveksler det med", "Der du ikke har sett noen av de fire ordene før og må la spørsmålet stå helt blankt", "Der to alternativer er åpenbart gale og du må velge mellom de to som er igjen", "Der spørsmålet handler om et tema som sjelden kommer i langsvarsdelen av eksamen"],
      explanation: "Riktig svar er den falske tryggheten ved nabobegreper. Å ikke kjenne noen av de fire ordene, og å sitte igjen med to alternativer etter å ha strøket to åpenbart gale, er begge håndterbare med regelen om utelukkelse; og temafrekvensen i langsvarsdelen sier ingenting om hva Del I dekker.",
    },
    {
      question: "Hvorfor bør ikke lesingen fram mot flervalgsdelen følge frekvensrangeringen av temaene?",
      options: ["Fordi rangeringen gjelder langsvarsdelen, og i Del I kan du ikke velge deg bort fra et tema", "Fordi rangeringen bygger på for få terminer til å si noe om hva som kommer neste gang", "Fordi flervalgsdelen alltid dekker temaene jevnt, med like mange spørsmål fra hver klynge", "Fordi de sjeldne temaene erfaringsmessig kommer oftere i flervalgsdelen enn de vanlige"],
      explanation: "Riktig svar er at rangeringen gjelder langsvarsdelen. I Del II kan du velge tre av fem oppgaver; i Del I kan du ikke velge noe. At delen dekker temaene jevnt, er en antakelse ingen kan bekrefte — ingen spørsmål er bevart.",
    },
    {
      question: "Hva menes med at bokas mantra om at anvendelse slår mengde ikke gjelder i Del I?",
      options: ["At det her er dekningen av hele pensum som måles, ikke hva du gjør med kunnskapen", "At mantraet aldri har vært ment som annet enn et råd om skriving under tidspress", "At Del I ikke vurderes av sensor, og at kvalitetskriteriene derfor ikke gjelder der", "At mengdekunnskap er viktigst i alle deler av emnet, og at mantraet er misvisende"],
      explanation: "Riktig svar er at Del I måler dekning. Mantraet gjelder langsvarsdelen, der anvendelse og selvstendighet flytter kandidaten oppover skalaen. Det betyr ikke at mantraet er feil, bare at de to delene måler ulike ting med vilje.",
    },
    {
      question: "Hva er den vanligste tidsfellen i flervalgsdelen?",
      options: ["At utrygghet drar til seg tid, som dermed hentes fra den delen som teller mest", "At kandidaten leser alle spørsmålene gjennom to ganger før hun begynner å svare", "At kandidaten bruker for lite tid, og dermed bommer på spørsmål hun kunne klart", "At spørsmålene er lengre enn ventet, slik at ett minutt per spørsmål ikke rekker"],
      explanation: "Riktig svar er at utryggheten drar til seg tid. Hvert minutt over budsjettet er hentet fra Del II, der 75 % av karakteren ligger. Hvor lange spørsmålene er, vet ingen — ingen er bevart — men det er ikke der risikoen sitter.",
    },
    {
      question: "Hva bør du gjøre med et spørsmål du er usikker på, midt i Del I?",
      options: ["Markere det, gå videre, og komme tilbake til det etter at resten er gjennomgått", "Bruke ekstra tid der og da, siden hukommelsen er ferskest mens du leser spørsmålet", "Krysse av på det som virker mest sannsynlig, siden du uansett ikke vil huske det bedre", "La det stå permanent blankt, siden usikkerhet i praksis betyr at du ikke kan stoffet"],
      explanation: "Riktig svar er å markere og gå videre. Mange usikre spørsmål lar seg løse med utelukkelse i andre runde, med roligere hode. Å bruke ekstra tid der og da er den dyreste tiden i hele eksamen, og usikkerhet er ikke det samme som uvitenhet.",
    },
    {
      question: "Hva er en breddedrill, slik boka bruker begrepet?",
      options: ["En test av om du klarer å hente fram begreper med avsender fra hver av de ti klyngene", "En øvelse der du løser 25 spørsmål på tid for å simulere presset i eksamenslokalet", "En repetisjon av de tre klyngene som oftest kommer igjen i langsvarsdelen av eksamen", "En gjennomgang av alle distraktortypene som kan tenkes å bli brukt i flervalgsdelen"],
      explanation: "Riktig svar er dekningstesten over de ti klyngene. En tidssimulering er nyttig, men måler noe annet, og distraktortypene kan ingen kartlegge — vi vet ingenting om hvordan spørsmålene er formulert.",
    },
    {
      question: "Hvordan skal bokas quiz-bank brukes, ifølge dette kapitlet?",
      options: ["Til å teste dekning på tvers av klynger, ikke til å kjenne igjen formuleringer", "Til å pugge de spørsmålene som ligner mest på dem som har kommet tidligere", "Til å måle hvor raskt du klarer å svare, siden tempoet er det kritiske i Del I", "Til å velge bort de klyngene der du allerede skårer høyt, og lese resten grundig"],
      explanation: "Riktig svar er dekningstesting. Å trene på gjenkjenning av ordlyd er å trene på noe ingen kan garantere finnes, siden ingen spørsmål er bevart. Å velge bort klynger du kan, er derimot en fornuftig følge av dekningstesten — men det er bruken av resultatet, ikke bruken av banken.",
    },
  ],
  'svexfac03-9-6': [
    {
      question: "Hva uttrykker sensorveiledningene, og hva betyr det for feilregisteret?",
      options: ["Forhåndsforventninger, siden de er skrevet før besvarelsene er lest av noen sensor", "Observerte feil, siden de er skrevet etter at besvarelsene er vurdert", "Karakterstatistikk, siden de oppsummerer hvordan kullet gjorde det på hver oppgave", "Fasitsvar, siden de angir hva som skal stå i en besvarelse for å få full uttelling"],
      explanation: "Riktig svar er forhåndsforventninger. Registeret er derfor hva veiledningene sier skal trekke, ikke en rapport om hva kandidater faktisk gjorde. Arkivet inneholder verken karakterstatistikk eller fasit for dette emnet.",
    },
    {
      question: "Hvilken feil er den eneste som er hjemlet i et observert mønster, og hvordan?",
      options: ["Feil #1, fordi V2020-veiledningen bruker ordet erfaringsvis om forvekslingen av orden og harmoni", "Feil #12, fordi H2021-veiledningen sier at eksempler uten begrunnelse er svært utbredt blant kandidater", "Feil #16, fordi flere veiledninger rapporterer at kandidater besvarer for mange oppgaver hver termin", "Feil #13, fordi tre ulike veiledninger gjentar advarselen mot å behandle korrelasjon som årsak, og gjentakelsen er et mønster"],
      explanation: "Riktig svar er feil #1 og ordet «erfaringsvis» i V2020-veiledningen. Det er det eneste stedet i materialet en veiledning rapporterer et faktisk mønster. At feil #13 er nevnt i tre veiledninger, gjør den hyppig omtalt, men fortsatt en forventning — og feil #16 er utledet av formatet.",
    },
    {
      question: "Hvilken feilkode er utledet av eksamensformatet i stedet for å være hentet fra en veiledning?",
      options: ["Feil #16, om å svare på fire eller fem oppgaver i stedet for de tre som skal besvares", "Feil #11, om å hoppe over relevans-i-dag-leddet i oppgaver om samtidsdiagnosen, som følger av oppgavens faste mal", "Feil #3, om å lese stikkordslista i oppgaveteksten som en sjekkliste som må krysses av", "Feil #10, om å svare på spørsmål om metodevalg med at det kommer an på hva man vil vite"],
      explanation: "Riktig svar er feil #16, som følger av at eksamen ber om tre av fem oppgaver. De tre andre er hjemlet i navngitte veiledninger: #11 i H2022, #3 i H2020 og #10 i H2025.",
    },
    {
      question: "Hva er varsellampen for feil #12, altså eksempler uten begrunnelse?",
      options: ["Setninger som slutter med at noe er et eksempel på dette, uten et fordi etterpå", "Setninger som begynner med at man videre kan nevne flere relevante begreper", "Setninger der ordet derfor står umiddelbart etter et tall eller en prosentandel", "Setninger der ordet alltid brukes om hva oppdragsgivere kan påvirke i et prosjekt"],
      explanation: "Riktig svar er avslutningen «… er et eksempel på dette». De tre andre er varsellamper for feil #3, feil #13 og feil #15. Varsellampene er formulert slik at de kan kjennes igjen i gjennomlesningen, uten at hele resonnementet vurderes på nytt.",
    },
    {
      question: "Hvorfor er feilunngåelse særlig lønnsomt i dette emnet?",
      options: ["Fordi doble beståkrav og strykmekanikk gjør at én feil kan koste mer enn ett karaktertrinn", "Fordi sensorveiledningene gir uttrykkelig trekk i poeng for hver feil som forekommer", "Fordi flervalgsdelen straffer feil med minuspoeng, og de samme feilene går igjen der", "Fordi kandidater med feilfrie besvarelser ifølge veiledningene alltid vurderes til A eller B"],
      explanation: "Riktig svar er kombinasjonen av doble beståkrav og strykmekanikken innenfor én oppgave. Det finnes ingen poengtrekk per feil i langsvarsdelen, og feilfrihet uten innhold lander på C uansett — registeret er en siste kontroll, ikke en skriveplan.",
    },
    {
      question: "En kandidat skriver at et samfunn med sosial orden er et samfunn der konfliktnivået er lavt. Hvilken feil er dette?",
      options: ["Feil #1 — orden er forvekslet med harmoni, mens orden betyr samordnet samhandling", "Feil #2 — kandidaten har plassert et perspektiv under feil teoretiker", "Feil #3 — kandidaten har hentet formuleringen fra stikkordslista i oppgaveteksten", "Feil #14 — kandidaten beskriver en teori uten å vise at den er en samtidsdiagnose"],
      explanation: "Riktig svar er feil #1. Orden betyr at handlinger henger sammen forutsigbart, og sier ingenting om hvor behagelig samordningen er — en orden kan hvile på tvang, makt eller ideologi. Det er nettopp derfor både Hobbes og Marx står i ordenslitteraturen.",
    },
    {
      question: "Hva består feil #2 i?",
      options: ["Å tro at alle Webers begreper hører til det perspektivet Weber selv er plassert under", "Å tro at Weber og Durkheim tilhører samme perspektiv fordi begge regnes som klassikere", "Å tro at Weber er konfliktteoretiker, når han i pensum står under integrasjonsperspektivet", "Å tro at rasjonalitetsformene tilhører Balsvik, når de opprinnelig er Webers egne begreper"],
      explanation: "Riktig svar er at begrepene sorteres etter hva de forklarer, ikke etter hvem som skrev dem: Weber står under konfliktperspektivet, mens rasjonalitetsformene hans hører til handlings- og bytteperspektivet. At han skulle stå under integrasjonsperspektivet, er galt, og Balsvik er framstillingen og ikke opphavet.",
    },
    {
      question: "Hva mangler i en besvarelse som forklarer nåtidsskjevhet som at folk utsetter ting?",
      options: ["Koblingen til forutsetningen om framtidsorientering og selvkontroll i modellen", "Et konkret eksempel som viser hvordan utsettelsen arter seg i praksis for aktøren", "En henvisning til Nyborg som avsender for de eksperimentelle funnene på feltet", "En avgrensning mot begrenset rasjonalitet, som beskriver et beslektet fenomen, og lett forveksles med det"],
      explanation: "Riktig svar er modellkoblingen — det er feil #4. Poenget er ikke at folk utsetter ting, men at funnet treffer en bestemt forutsetning i homo oeconomicus-modellen. Eksempel og avsender er nyttige tillegg, men de retter ikke feilen.",
    },
    {
      question: "Hva mangler i formuleringen «standpunktteorien viser at forskere med ulik bakgrunn ser ulike sider av virkeligheten»?",
      options: ["At den marginaliserte posisjonen hevdes å gi bedre kunnskap, ikke bare en annen utsikt", "At Haraway og den situerte kunnskapen nevnes ved siden av Hardings standpunktteori", "At kjønnsbalansekritikken skilles fra standpunktteorien som to ulike former for kritikk", "At objektivitetsbegrepet defineres før teorien introduseres i besvarelsens innledning, så begrepet er avklart først"],
      explanation: "Riktig svar er påstanden om bedre kunnskap, som er kjernen i sterk objektivitet — feil #5 er nettopp å redusere teorien til perspektivmangfold. De andre punktene er relevante utdypinger, men uten maktkoblingen er teorien fortsatt uthulet.",
    },
    {
      question: "Hva er kjernen i feil #6, om habitus og strukturens dualitet?",
      options: ["At begrepet beskrives uten at det vises hvordan det bygger bro mellom aktør og struktur", "At begrepet tilskrives feil teoretiker, siden habitus tilhører Giddens og ikke Bourdieu", "At begrepet brukes om enkeltpersoners vaner i stedet for om hele samfunnsklassers atferd", "At begrepet presenteres uten eksempler, slik at det forblir abstrakt for leseren"],
      explanation: "Riktig svar er den manglende brobyggingen — som er hele grunnen til at begrepet finnes. Habitus tilhører Bourdieu og strukturens dualitet Giddens, så tilskrivningen i det andre svaret er selv en feil, men den er ikke det feil #6 handler om.",
    },
    {
      question: "Hvilket ledd mangler oftest når Adam Smiths argument gjengis?",
      options: ["At markedets størrelse setter grensen for hvor langt spesialiseringen kan drives", "At arbeidsdeling gir spesialisering, som igjen gir høyere produktivitet i bedriften", "At den usynlige hånd gjør at egeninteressen kan komme fellesskapet til gode", "At Smith også skrev om moralske følelser, og ikke bare om økonomiske forhold"],
      explanation: "Riktig svar er leddet om markedets størrelse. Det er dette som gjør kjeden til et argument mot merkantilismen, og feil #8 er nettopp å gjengi konklusjonen uten kjeden. Leddet om arbeidsdeling og produktivitet og leddet om den usynlige hånd er som regel med, og teorien om moralske følelser er en annen sak.",
    },
    {
      question: "Hva sier veiledningene om samvariasjon, årsaksretning og kontroll for tredje variabel?",
      options: ["At de er tre selvstendige krav, ikke ett, og at de skal forklares og ikke bare nevnes", "At samvariasjon er det viktigste kravet, siden de to andre følger av at det er innfridd", "At kravene bare gjelder i kvantitative studier, og ikke når materialet er kvalitativt", "At det holder å nevne kravene, siden en fullstendig forklaring krever mer tid enn oppgaven gir"],
      explanation: "Riktig svar er at de er tre krav som skal forklares. V2021-, V2023- og H2025-veiledningene sier dette, og V2023 understreker forklaringskravet særskilt. Samvariasjon alene er nettopp det som ikke holder — det er feil #13.",
    },
    {
      question: "Hva er minimumskravet når Marx skal presenteres som samtidsdiagnostiker?",
      options: ["Å forklare hvorfor teorien gir en helhetlig fortolkning med kritiske ambisjoner", "Å gjenfortelle kapitalismeteorien med utbytting og klassemotsetninger som kjerne", "Å plassere Marx i forhold til Weber og Durkheim på alle de tre dimensjonene", "Å vise at teorien er empirisk testet, som er det tyngste av Aakvaags fire krav til en samtidsdiagnose"],
      explanation: "Riktig svar er den helhetlige fortolkningen med kritiske ambisjoner, slik H2023- og H2025-veiledningene formulerer det. Å gjenfortelle kapitalismeteorien er nettopp feil #14. Det empiriske kravet er ett av fire og ikke utpekt som det tyngste.",
    },
    {
      question: "Hvor går grensen for hva en oppdragsgiver kan bestille?",
      options: ["Tema og problemstilling kan bestilles, men ikke prosess, resultater eller publiseringsrett", "Ingenting kan bestilles, siden all forskning må være initiert av forskeren selv", "Alt kan bestilles så lenge finansieringen oppgis åpent i publikasjonen etterpå", "Tema og metode kan bestilles, mens tolkningen av resultatene tilhører forskeren"],
      explanation: "Riktig svar er at tema og problemstilling kan bestilles, mens prosess, resultater og publiseringsrett ikke kan. Å tro at resultatene i praksis følger med bestillingen, er feil #15. Metodevalget hører til forskningsprosessen og kan derfor ikke bestilles.",
    },
    {
      question: "Hva er varsellampen for feil #10, om metodevalg besvart med at det kommer an på?",
      options: ["Setningen om at begge metodene har sine styrker og svakheter, uten at de navngis", "Setningen om at valget av metode må følge av problemstillingen og ikke av vane, som gjelder for enhver oppgave", "Setningen om at kvalitativ metode gir dybde mens kvantitativ metode gir bredde", "Setningen om at metodene kan kombineres for å få et mer helhetlig bilde av feltet"],
      explanation: "Riktig svar er den ubestemte styrke-og-svakhet-setningen. Den er sann og sier ingenting. Setningen om at metodevalget må følge av problemstillingen, og setningen om dybde mot bredde, er derimot skritt i riktig retning, siden de begynner å konkretisere; og kombinasjon er et eget spørsmål.",
    },
    {
      question: "Hvorfor er en omskriving som blir kortere enn originalen et godt tegn?",
      options: ["Fordi det viser at feilen er rettet og ikke at det bare er lagt til mer stoff", "Fordi korte besvarelser generelt vurderes høyere enn lange i dette emnet", "Fordi tiden på eksamen er knapp, og enhver innsparing gir plass til flere ledd", "Fordi sensor ifølge veiledningene legger vekt på at framstillingen er konsis, og trekker for unødig stoff"],
      explanation: "Riktig svar er at rettingen skiller seg fra tilføyelsen. Å legge til flere begreper er ofte feil #3 i ny drakt. Lengde er ikke et kriterium i seg selv, men disponeringen skal følge oppgavens egne instrukser om kort og grundig.",
    },
    {
      question: "Hvor mange koder har feilregisteret, og hva følger av det?",
      options: ["Seksten, og en svakhet som ikke passer, er som regel en variant av en kode som finnes", "Seksten, men listen utvides etter hvert som nye sensorveiledninger blir publisert", "Tolv, og de fire siste gjelder bare det forrige eksamensregimet fram til H2022", "Tjue, hvorav fire gjelder flervalgsdelen og seksten gjelder langsvarsdelen"],
      explanation: "Riktig svar er seksten koder, og at nye svakheter som regel er varianter av eksisterende. Ingen av kodene gjelder flervalgsdelen — veiledningene sier ingenting om hvordan kandidater svarer der, av samme grunn som at ingen spørsmål er bevart.",
    },
    {
      question: "Hva er den kalde banken i dette kapitlet?",
      options: ["Oppgaver uten hint, der fasiten er en ren momentliste og du må mobilisere alt selv", "Oppgaver hentet fra de klyngene som sjeldnest kommer igjen i langsvarsdelen av eksamen", "Oppgaver som skal løses uten notater, men som fortsatt har hint til hvert enkelt punkt", "Oppgaver med kort svarfrist, der poenget er å trene tempo framfor å trene innhold, slik at du rekker alle tre"],
      explanation: "Riktig svar er oppgavene uten hint og uten stillas. Det er bokas eneste unntak fra kravet om at hver oppgave skal ha utfylte hint, og den er ment brukt sent i lesingen — tas den for tidlig, måler den bare at du ikke er ferdig å lese.",
    },
  ],
  'svexfac03-9-7': [
    {
      question: "Hva avgjør hvilken menneskemodell et tiltak forutsetter?",
      options: ["Om tiltaket trenger at noen tar stilling til noe for at det skal virke i det hele tatt", "Om tiltaket er vedtatt av et folkevalgt organ eller innført av en administrativ enhet, siden vedtaksformen avgjør", "Om tiltaket retter seg mot enkeltpersoner eller mot virksomheter og organisasjoner", "Om tiltaket har en økonomisk komponent, altså om det innebærer en avgift eller et tilskudd"],
      explanation: "Riktig svar er om tiltaket trenger et valg for å virke. Det er skillekriteriet mellom aktiv og passiv modell, og det er den ene setningen som gjør resten av oppgaven mulig. Vedtaksform, målgruppe og økonomi sier ingenting om hvor virkningen oppstår.",
    },
    {
      question: "Hvorfor forutsetter billigere kollektivtransport en aktiv menneskemodell?",
      options: ["Fordi virkningen går gjennom at den enkelte veier pris mot tid og deretter velger", "Fordi tiltaket krever at den enkelte har satt seg inn i klimapolitikkens begrunnelse", "Fordi prisendringer alltid regnes som informasjonstiltak i samfunnsvitenskapelig teori", "Fordi tiltaket er rettet mot en gruppe som allerede er positivt innstilt til omstilling"],
      explanation: "Riktig svar er at virkningen går gjennom et valg. Dette er den vanligste feilklassifiseringen i oppgavemalen, og den oppstår nettopp når begrunnelsen mangler — feil #12. Prisendringer er ikke informasjonstiltak, og modellen sier ingenting om holdninger på forhånd.",
    },
    {
      question: "Hva er den viktigste ulempen ved å legge en passiv menneskemodell til grunn for politikk?",
      options: ["At tiltaket ikke etterlater noen endret vurdering, og derfor faller bort med ordningen", "At tiltaket virker langsommere enn tiltak rettet mot bevisste valg hos den enkelte", "At tiltaket bare treffer dem som allerede er enige i målet med politikken", "At tiltaket krever mer administrasjon enn tiltak som bygger på informasjon"],
      explanation: "Riktig svar er at virkningen forsvinner med ordningen, siden ingen har endret oppfatning. Det motsatte av det andre svaret er som regel tilfelle — passive tiltak virker raskt. Og at tiltaket bare treffer de enige, er nettopp svakheten ved verdiappeller, ikke ved passive tiltak.",
    },
    {
      question: "Hvordan gjør verdirasjonalitet arbeid i drøftingen av passive tiltak?",
      options: ["Den forklarer hvorfor en handling fortsetter når gevinsten forsvinner, og dermed tiltakenes skjørhet", "Den viser at passive tiltak er umoralske, siden de omgår den enkeltes egne verdivalg", "Den erstatter skillet mellom aktive og passive modeller med et skille mellom to typer motiver hos aktøren", "Den beviser at verdibaserte tiltak alltid er mer effektive enn tiltak som bygger på pris, og at kommunen bør velge kampanje"],
      explanation: "Riktig svar er robustheten: den verdirasjonelle handlingen begrunnes i handlingen selv og overlever derfor at insentivet fjernes. Å definere begrepet uten å bruke det på denne måten, er å hoppe over instruksen i oppgaveteksten.",
    },
    {
      question: "Hva kjennetegner en dybdebesvarelse i denne oppgavemalen?",
      options: ["To tiltak ført helt inn i modellens forutsetninger, framfor fire tiltak nevnt kort", "En besvarelse som bruker lengre tid på a-leddet enn på b- og c-leddet til sammen, siden begrepene bærer resten", "En besvarelse som trekker inn flere teoretikere enn oppgaveteksten selv nevner", "En besvarelse som drøfter alle de fire ordensperspektivene før den velger ett av dem"],
      explanation: "Riktig svar er to tiltak ført helt gjennom. En breddebesvarelse med fire kortere begrunnelser ville vært like A-verdig — H2020-veiledningen sier at å tvinge inn alle forslag gir et dårligere svar. Å bruke mest tid på a er derimot en disponeringsfeil.",
    },
    {
      question: "Hva mangler i setningen «billigere kollektivtransport er et eksempel på en passiv menneskemodell»?",
      options: ["Begrunnelsen som ville avslørt at klassifiseringen faktisk er gal i dette tilfellet", "En henvisning til Balsvik som avsender for begrepet menneskemodell i pensum", "En presisering av om det dreier seg om en sosial eller en biologisk passiv modell", "Et anslag over hvor stor virkning tiltaket ville hatt på utslippene i praksis"],
      explanation: "Riktig svar er begrunnelsen — og poenget er at den ikke bare mangler som formkrav: hadde kandidaten skrevet én setning om hvor virkningen oppstår, ville hun selv sett at klassifiseringen er gal. Begrunnelsen er kvalitetskontrollen teksten mangler.",
    },
  ],
  'svexfac03-9-8': [
    {
      question: "Hva ber miljøsak-oppgaven kandidaten om å gjøre først?",
      options: ["Velge ett av to ordensperspektiver, og gjøre kort rede for det valgte", "Sammenligne integrasjons- og konfliktperspektivet på alle de tre dimensjonene", "Beskrive saken grundig, slik at analysen får et solid empirisk grunnlag", "Gjengi hva klimapodkasten sier om saksfeltet, før perspektivene presenteres"],
      explanation: "Riktig svar er å velge ett perspektiv. Å referere begge er den vanligste formen for forsiktighet i denne malen, og den koster dobbelt: verken dybden i ett apparat eller uttellingen for et begrunnet valg. Saksbeskrivelsen skal dessuten være kort.",
    },
    {
      question: "Hvordan leser konfliktperspektivet et rolig forløp i en sak med skjev fordeling?",
      options: ["Som at ideologimekanismen har gjort utfallet til noe som framstår som uunngåelig", "Som at partene faktisk deler verdier, siden ingen har protestert mot vedtaket, og at fordelingen er akseptert", "Som at saken ikke egner seg for konfliktanalyse, siden det ikke finnes noen konflikt", "Som at makten er fraværende, siden orden uten strid ikke krever noen maktutøvelse"],
      explanation: "Riktig svar er ideologimekanismen: ordenen holdes oppe av at de underordnede oppfatter ordningen som naturlig. Nettopp fravær av protest er det konfliktperspektivet mener begrepet forklarer. Den andre lesningen er integrasjonsperspektivets, og den er også forsvarlig.",
    },
    {
      question: "Hva er prøven på om en klimapodkast er brukt eller bare referert?",
      options: ["Stryk podkastavsnittet, og se om analysen mister noe den ikke kan få andre steder", "Tell hvor mange setninger som er viet podkasten sammenlignet med resten av leddet", "Sjekk om podkastens fag og programleder er navngitt i besvarelsens innledning", "Kontroller om podkasten nevnes både i redegjørelsesleddet og i drøftingsleddet"],
      explanation: "Riktig svar er strykeprøven. Et poeng er brukt når analysen mister noe uten det. Lengde og navngiving er formaliteter som lett innfris uten at podkasten gjør arbeid, og gjentakelse i flere ledd er ikke et krav.",
    },
    {
      question: "Hva er skillekriteriet mellom integrasjons- og konfliktperspektivet?",
      options: ["Hva som ville skjedd med ordenen om oppslutningen om de felles verdiene forsvant", "Om saken det gjelder er preget av åpen strid eller av tilsynelatende enighet", "Om perspektivet plasserer seg på aktørsiden eller på struktursiden av dimensjonen", "Om analysen bruker Durkheim eller Marx som sin viktigste teoretiske referanse"],
      explanation: "Riktig svar er hva som ville skjedd om oppslutningen forsvant: i integrasjonsperspektivet faller ordenen sammen, i konfliktperspektivet består den så lenge makten gjør det. Begge perspektivene er strukturorienterte, og begge kan brukes på både rolige og stridige saker.",
    },
    {
      question: "Hvorfor kan en skarp konklusjon likevel være en A-besvarelse?",
      options: ["Fordi forbehold er et verktøy og ikke garnityr, når begge sider først er skrevet ut", "Fordi sensorveiledningene foretrekker tydelige standpunkter framfor avveiende svar med mange forbehold", "Fordi en skarp konklusjon viser at kandidaten har brukt mindre tid på tvil og mer på analyse", "Fordi drøftingsleddet uansett vurderes etter antall argumenter og ikke etter landingen"],
      explanation: "Riktig svar er at forbehold er et verktøy. Kravet er at begge sider er skrevet ut i sin sterkeste form, at veiingen gjør noe, og at forbeholdet navngir en betingelse. Ingen veiledning uttrykker noen preferanse for konklusjonsform, og antall argumenter er bare ett av kriteriene.",
    },
    {
      question: "Hvilke tre feil demonstrerer C-besvarelsen i denne oppgaven?",
      options: ["Feil #1 og #3, samt å referere podkasten i stedet for å bruke den til noe", "Feil #9 og #15, samt å blande sammen de to kategoriene av forskningsetiske normer", "Feil #12 og #4, samt å gi eksempler uten å koble dem til modellens forutsetninger", "Feil #13 og #10, samt å behandle en statistisk sammenheng som en årsakssammenheng"],
      explanation: "Riktig svar er feil #1, feil #3 og den ubrukte podkasten. Feil #1 er å definere orden som fravær av konflikt, og feil #3 er å ramse opp alle fire perspektivene når oppgaven ba om ett. De andre kombinasjonene hører til andre oppgavetyper.",
    },
  ],
  'svexfac03-9-9': [
    {
      question: "Hva er skillekriteriet mellom intern og ekstern forskningsetikk?",
      options: ["Hvem normen beskytter: kunnskapen og forskerfellesskapet, eller deltakerne og samfunnet", "Hvor normbruddet finner sted: inne i forskningsinstitusjonen eller ute i felten", "Hvor mange mennesker normen berører direkte når den brytes i et konkret prosjekt, der få berørte gjør det internt", "Om normen er nedfelt i skriftlige forskningsetiske retningslinjer eller bare finnes i faglig praksis"],
      explanation: "Riktig svar er hvem normen beskytter. Derfor er kreditering intern selv om den gjelder andre mennesker, og samtykke eksternt selv om det gjelder forskningens gjennomføring. Å bruke sted eller omfang som kriterium er feil #9.",
    },
    {
      question: "Hva kan en oppdragsgiver bestille, og hva kan hun ikke?",
      options: ["Tema og problemstilling kan bestilles, men ikke prosess, resultater eller publiseringsrett", "Tema, problemstilling og metode kan bestilles, mens tolkningen tilhører forskeren alene", "Ingenting kan bestilles, siden problemstillingen må springe ut av forskerens eget arbeid", "Alt kan bestilles, forutsatt at finansieringen oppgis åpent når rapporten publiseres"],
      explanation: "Riktig svar er at tema og problemstilling kan bestilles, mens prosess, resultater og publiseringsrett ikke kan. Metodevalget hører til forskningsprosessen. Åpenhet om finansiering er et tillegg, ikke en erstatning for grensen — å tro noe annet er feil #15.",
    },
    {
      question: "Når blir innsyn før publisering et forskningsetisk brudd?",
      options: ["Når innsynet gir oppdragsgiveren utsettende eller stansende virkning over publiseringen", "Så snart oppdragsgiveren får lese et utkast, uansett hvilken funksjon lesningen har", "Bare når oppdragsgiveren faktisk krever endringer i rapportens konklusjoner", "Når rapporten inneholder opplysninger som kan identifisere enkeltdeltakere i studien"],
      explanation: "Riktig svar er utsettende eller stansende virkning. Faktakontroll av tekniske detaljer kan være legitimt, så innsyn i seg selv er ikke bruddet. Å vente til krav faktisk fremmes, er for sent — det er klausulen som må vurderes.",
    },
    {
      question: "Hvorfor er rekruttering gjennom oppdragsgiverens egen liste et eksternt problem?",
      options: ["Fordi både konfidensialiteten og frivilligheten i samtykket blir truet for deltakerne", "Fordi utvalget blir skjevt, og skjevhet i utvalg er alltid et etisk og ikke et metodisk problem", "Fordi oppdragsgiveren dermed har påvirket forskningsprosessen på en utilbørlig måte og brutt uavhengighetsnormen", "Fordi listen er samlet inn til et annet formål enn forskning, og derfor ikke kan brukes"],
      explanation: "Riktig svar er trusselen mot konfidensialitet og frivillighet: en deltaker som vet at oppdragsgiver kjenner navnet hennes, sier ikke nødvendigvis nei like fritt eller svarer like ærlig. Skjevt utvalg er også et problem, men det er først og fremst metodisk.",
    },
    {
      question: "Hva kjennetegner en breddebesvarelse i denne oppgaven?",
      options: ["Alle problemene og begge kategorier dekket, uten at noen av dem drives ekstremt dypt", "En besvarelse som nevner flest mulig av de forskningsetiske normene i a-leddet før caset behandles", "En besvarelse som bruker like mye plass på hvert av de tre oppgaveleddene", "En besvarelse som trekker inn både Balsvik, Merton og Fangen i samtlige ledd, slik at pensumdekningen blir synlig"],
      explanation: "Riktig svar er full dekning uten ekstrem dybde. En dybdebesvarelse som tok to problemer og førte dem lengre, ville vært like A-verdig — profilen er et valg. Å nevne flest mulig normer er derimot feil #3 i en ny drakt.",
    },
    {
      question: "Hva er det gode selvstendige poenget i midtnivåbesvarelsen?",
      options: ["At publiseringsretten er testen, fordi en rapport som kunne vært stoppet ikke er troverdig", "At oppdragsgiveren betaler, og at forskeren derfor må ta hensyn til kundens interesser når rapporten skrives", "At forskningsetikken deles i intern og ekstern etikk, og at Balsvik er avsender for skillet", "At bedriftens godkjenning av spørreskjemaet er det klart verste av alle problemene i caset"],
      explanation: "Riktig svar er poenget om publiseringsretten som test, med begrunnelsen om at en rapport som kunne vært stoppet, ikke er til å stole på uansett innhold. Det står ikke i pensum i den formen, og det er nettopp selvstendighet. De øvrige svarene er korrekt gjengivelse, ikke selvstendig tenkning.",
    },
  ],
};

export default quizData_svexfac03;
