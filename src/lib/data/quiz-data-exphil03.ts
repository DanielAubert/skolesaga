import type { QuizQuestion } from './quiz-data';

const quizData_exphil03: Record<string, QuizQuestion[]> = {
  'exphil03-0-1': [
    {
      question: "Hvor mange av de to store oppgavene besvarer du på selvstudiumsvarianten av EXPHIL03?",
      options: ["Én av to — du velger", "Begge, de er obligatoriske", "Tre av fire", "Alle oppgavene i settet"],
      explanation: "Fra V2023 velger du én av to store oppgaver og går grundig til verks på den. Å svare på begge de valgfrie oppgavene er feil #12 og sprer svaret for tynt.",
    },
    {
      question: "Hva tester delspørsmålene (a) og (b) typisk i et EXPHIL03-sett?",
      options: ["Presis pensumkunnskap forankret i navngitte kapitler", "Selvstendig drøfting og egen refleksjon", "Kildehenvisninger og litteraturliste", "Ren biografi om filosofen"],
      explanation: "(a) og (b) er kunnskapsspørsmål: trinnvis argumentrekonstruksjon eller sitattolkning fra navngitt pensum. Selvstendig drøfting hører til den siste delen.",
    },
    {
      question: "Hva menes med gjenbruksbonusen på EXPHIL03?",
      options: ["At du fører kunnskapen fra (a)/(b) inn i drøftingsdelen", "At du kan gjenbruke et gammelt sensorsvar ordrett", "At du får ekstra tid hvis oppgaven er gjenbrukt", "At du siterer pensumboka ordrett flere ganger"],
      explanation: "Sensor premierer at poenger fra kunnskapsdelene brukes videre i drøftingen. En drøfting som starter «på nytt» uten kobling til (a)/(b), straffes (feil #5).",
    },
    {
      question: "Hva er C-porten i EXPHIL03?",
      options: ["Jevnhet — god på kunnskap og analyse i alle delspørsmål", "Én glimrende del som kompenserer for en blank", "Flest mulig sider skrevet", "At du har med en litteraturliste"],
      explanation: "For C kreves jevnhet: god på både kunnskap og forståelse/analyse i alle delene. Én sterk og én blank del holder ikke (feil #4, #9).",
    },
    {
      question: "Hvilken oppgavetype er den dominerende fra 2021 og framover?",
      options: ["Sitattolkning — et kort pensumutdrag som springbrett", "Ren flervalgsprøve", "Muntlig framføring", "Oversettelse av originaltekst"],
      explanation: "Den dominerende oppgavetypen åpner med et kort utdrag fra en pensumtekst, ofte med sidetall, som du skal tolke og plassere i tenkerens argument.",
    },
    {
      question: "Hvilke av disse tenkerne er UTE av pensum og gir null uttelling?",
      options: ["Hume, Beauvoir, Singer og Smart", "Mill, Aristoteles, Kant og Wikforss", "Descartes, Platon og Sokrates", "Haslanger, Locke og Held"],
      explanation: "Etter pensumomleggingen i V2021 er Hume, Beauvoir, Singer, Smart, Fried, Hursthouse, Feldman og Heisenberg ute av pensum (feil #14). De andre gruppene er kjernepensum.",
    },
    {
      question: "Hva er de tre områdene grunnboka og eksamen deler filosofien i?",
      options: ["Vite, være, gjøre", "Fortid, nåtid, framtid", "Logikk, etikk, estetikk", "Teori, praksis, metode"],
      explanation: "Tredelingen Vite (kunnskap), Være (virkelighet/sinn/kjønn) og Gjøre (etikk) styrer alle sett og ble selve settstrukturen i H2025 (bolk A/B/C).",
    },
    {
      question: "Hvilken av delene i faget tillegges mest vekt i seminarvarianten?",
      options: ["Semesteroppgaven", "Hjemmeeksamenen", "De teller nøyaktig likt", "Muntlig eksamen"],
      explanation: "Semesteroppgaven (800–1000 ord) tillegges mest vekt (om lag 60/40 i H2021), men begge komponentene må bestås hver for seg.",
    },
    {
      question: "Hva er den dyreste feilen når settet har tre bolker (A/B/C) i H2025-formatet?",
      options: ["Å la en hel bolk eller et delspørsmål stå tynn/blank", "Å skrive for kort i drøftingsdelen", "Å bruke engelske fagtermer", "Å starte med tenkeren i stedet for en innledning"],
      explanation: "C-porten er jevnhet: én sterk bolk kompenserer ikke for en svak (feil #4). Blank del stenger for C uansett styrken ellers.",
    },
    {
      question: "Hvorfor er det direkte eksamensrelevant å trene på gamle EXPHIL03-sett?",
      options: ["Fordi oppgaver gjenbrukes nesten uendret fra semester til semester", "Fordi eksamen alltid er identisk hvert år", "Fordi sensorene retter etter en fast fasit", "Fordi pensum aldri endres"],
      explanation: "Arkivet viser dokumentert gjenbruk: Foot-oppgaven H2023→V2024, Dawkins/teleologi tre sett på rad, Locke-triaden fire sett, Wikforss-vilkårene i minst seks varianter. Å trene på mønstrene er derfor direkte relevant.",
    },
  ],
  'exphil03-0-2': [
    {
      question: "Hvilke to av IFIKKs fem karakterkrav veier tyngst?",
      options: ["Kunnskap og Forståelse/analyse", "Struktur og Etterrettelighet", "Relevans og Struktur", "Etterrettelighet og Relevans"],
      explanation: "Sensorveiledningene sier eksplisitt at Kunnskap og Forståelse/analyse veier tyngst. Pen språkføring (Struktur) veier opp for lite dersom disse svikter.",
    },
    {
      question: "Hva er de fire punktene i firepunktslisten for drøftingsdelen, i rekkefølge?",
      options: ["Argumenter for/mot → kritisk vurdering → kobling til pensum → selvstendig refleksjon", "Innledning → gjengivelse → oppsummering → konklusjon", "Definisjon → eksempel → motargument → mening", "Kilde → sitat → parafrase → litteraturliste"],
      explanation: "Firepunktslisten var fast i sensorveiledningene 2024–2025: legg fram argumenter for/mot, vurder dem kritisk, koble til pensumtekster, og reflekter selvstendig.",
    },
    {
      question: "Hva betyr gjenbruksbonusen?",
      options: ["Å føre poeng fra kunnskapsdelene (a)/(b) inn i drøftingen", "Å gjenta konklusjonen flere ganger", "Å bruke samme sitat i alle delene", "Å kopiere en modellbesvarelse"],
      explanation: "Sensor premierer at poenger fra (a)/(b) brukes videre i drøftingen med eksplisitt kobling. En drøfting som starter «på nytt» uten kobling straffes (feil #5).",
    },
    {
      question: "Hva kjennetegner C-porten (C-nivå) i EXPHIL03?",
      options: ["Jevnt god på kunnskap OG analyse i alle delspørsmål", "Én strålende del som veier opp for en blank", "Flest mulig sitater fra pensum", "Lengst mulig besvarelse"],
      explanation: "C-porten er en jevnhetsterskel: god på både kunnskap og forståelse/analyse i alle delene. Én sterk og én blank del holder ikke (feil #4, #9).",
    },
    {
      question: "Hva sier mantraet «Gjengivelse uten drøfting er D-stoff»?",
      options: ["Et korrekt referat som aldri behandler stoffet, stopper på D", "At all gjengivelse er forbudt", "At drøfting alltid er viktigere enn kunnskap", "At D er en bestått karakter kun med drøfting"],
      explanation: "Et teknisk feilfritt referat som aldri veier, innvender eller tar stilling, stopper på D uansett presisjon. Kunnskap må kombineres med selvstendig behandling.",
    },
    {
      question: "Hva sier mantraet «Forankring uten avsender er C-stoff»?",
      options: ["Riktige poeng uten kobling til navngitt pensumtenker stopper på C", "At man aldri skal oppgi hvem som sier hva", "At forankring i pensum er unødvendig", "At C er beste oppnåelige karakter"],
      explanation: "Du kan bruke riktige poeng, men uten å knytte dem til en navngitt pensumtenker og drøfte dem videre stopper svaret på C — korrekt, men flatt.",
    },
    {
      question: "Hva innebærer relevanskravet (krav c)?",
      options: ["Å svare på det oppgaven spør om, ikke vise alt du kan", "Å skrive mest mulig om temaet", "Å inkludere alle pensumtenkere", "Å alltid ta med en historisk innledning"],
      explanation: "Relevans handler om å treffe spørsmålet. Å øse ut alt man husker (bredde uten treff) er lavrelevant kunnskap som nulles (feil #3).",
    },
    {
      question: "Hva nulles ifølge sensorveiledningene 2024–2025?",
      options: ["Generisk oppslagsverk-kunnskap med lav relevans (leksikonsvar)", "All bruk av engelske fagtermer", "Korte besvarelser", "Bruk av tekstens egne eksempler"],
      explanation: "Leksikonsvar — allmenne fakta med lav relevans for spørsmålet — gir null uttelling (feil #3). Det står i hver eneste veiledning 2024–2025.",
    },
    {
      question: "På hvilke to akser skiller sensor karakterene?",
      options: ["Vurderingsevne og selvstendighet", "Lengde og hastighet", "Ordforråd og rettskriving", "Antall kilder og antall sitater"],
      explanation: "Sensor skiller systematisk på vurderingsevne (evnen til å behandle stoffet) og selvstendighet (egen tenkning). Dette avgjør skillet mellom A og C.",
    },
    {
      question: "Hva er det første du bør gjøre i kunnskapsdelen (a/b)?",
      options: ["Plassere tenkeren og teksten i én setning", "Ta stilling til om du er enig", "Skrive en generell innledning om filosofihistorien", "Sette opp en litteraturliste"],
      explanation: "Kunnskapsarkitekturen starter med å plassere tenker og tekst, deretter trinnvis rekonstruksjon og illustrasjon. Innledning og avslutning er bortkastet tid.",
    },
    {
      question: "Hva er feil #2 i drøftingsdelen?",
      options: ["Mening uten grunner — synsing uten pensumforankrede argumenter", "For mange sitater", "For presis begrepsbruk", "Å ta stilling for tidlig"],
      explanation: "Feil #2 er å ta stilling («jeg synes …», «mange mener …») uten argumenter forankret i pensum. Det er synsing, ikke drøfting.",
    },
    {
      question: "Hvorfor faller «drøfting uten kunnskap» til lavt nivå?",
      options: ["Fordi drøftingen står uten presist pensumfundament å bygge på", "Fordi drøfting alltid er mindre verdt enn gjengivelse", "Fordi sensor ikke belønner selvstendighet", "Fordi engelsk fagterminologi ikke er tillatt"],
      explanation: "Man kan ikke drøfte presist ut fra en upresis gjengivelse. Både kunnskap og analyse er blant de tyngste kravene, og fundamentet må være på plass.",
    },
    {
      question: "Hva er gyldig forankring i en drøftingsbesvarelse?",
      options: ["Både innledningskapitlene i «Vite, være, gjøre» og originaltekstene", "Kun originaltekstene", "Kun egne meninger", "Tenkere utenfor pensum som Hume og Singer"],
      explanation: "Sensorveiledningene sier at gyldig forankring er både VVGs innledningskapitler og originaltekstene. Forankring utenfor pensum (feil #14) teller ikke.",
    },
    {
      question: "Hva bør du gjøre tidlig i drøftingsdelen ifølge håndverket?",
      options: ["Ta stilling, og deretter gi det beste argumentet for og mot", "Vente med å konkludere til aller siste setning", "Gjengi hele tenkerens teori på nytt", "Liste opp alle mulige argumenter uten å velge"],
      explanation: "Håndverket anbefaler å ta stilling tidlig, gi det beste argumentet for og det beste mot (gjerne fra en annen pensumtenker), og vei dem framfor å bare liste dem.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom et C-svar og et A-svar på et drøftingsspørsmål?",
      options: ["A-svaret veier argumenter og reflekterer selvstendig; C-svaret gjengir korrekt men flatt", "A-svaret er lengre", "C-svaret mangler enhver pensumtenker", "A-svaret dropper kunnskapsdelen helt"],
      explanation: "Et C-svar er korrekt og forankret, men uten reell veiing og selvstendig refleksjon. A-svaret behandler stoffet: tar stilling, bygger inn innvending, veier, og gjenbruker (a)/(b).",
    },
  ],
  'exphil03-1-1': [
    {
      question: "Hva er den metodiske tvilen hos Descartes?",
      options: ["Tvil brukt som metode for å nå sikker kunnskap", "Påstanden om at sikker kunnskap er umulig", "En følelse av usikkerhet overfor autoriteter", "En religiøs tvil på Guds eksistens"],
      explanation: "Den metodiske tvilen er et redskap, ikke et livssyn: Descartes tviler for å finne noe som ikke lar seg betvile. Å gjøre den til skeptisisme (kunnskap er umulig) er den vanligste feilen (#6).",
    },
    {
      question: "Hva er forskjellen mellom Descartes' metodiske tvil og skeptisisme?",
      options: ["Skeptikeren hevder at kunnskap er umulig; Descartes tviler for å nå sikker kunnskap", "Descartes hevder at kunnskap er umulig; skeptikeren søker sikkerhet", "Det er ingen forskjell — Descartes var skeptiker", "Skeptisisme gjelder bare sansene, metodisk tvil bare fornuften"],
      explanation: "Tvilen er middelet, sikkerheten er målet. Skriver du «Descartes mente at vi ikke kan vite noe», har du snudd argumentet på hodet.",
    },
    {
      question: "Hvilket bilde bruker Descartes for å forklare hvorfor tvilen må ramme fundamentet?",
      options: ["Å rive grunnmuren i stedet for å reparere hvert enkelt hus", "Å luke ugress i en hage før man sår på nytt", "Å seile mot en fyrlykt gjennom tåke", "Å telle sauer for å finne den ene som mangler"],
      explanation: "Er grunnmuren råtten, hjelper det ikke å lappe på de enkelte husene. Derfor går Descartes på selve fundamentet for kunnskapen.",
    },
    {
      question: "Hvorfor tviler Descartes ikke på hver enkelt overbevisning for seg?",
      options: ["Fordi hviler de på et usikkert fundament, kan ingen av dem stoles på", "Fordi det ville ta for lang tid å gå gjennom alle", "Fordi noen overbevisninger er for hellige til å betviles", "Fordi sansene alltid gir oss riktig informasjon om verden"],
      explanation: "Descartes går på grunnmuren: bygger kunnskapen på usikre antakelser, kan vi ikke stole på noe som hviler på dem.",
    },
    {
      question: "Hva er riktig rekkefølge i Descartes' skeptiske argument?",
      options: ["Sansebedrag → drømmeargumentet → den onde ånd", "Den onde ånd → drømmeargumentet → sansebedrag", "Drømmeargumentet → sansebedrag → den onde ånd", "Sansebedrag → den onde ånd → drømmeargumentet"],
      explanation: "Tvilen er stigende: hvert trinn omfatter mer enn det forrige, helt til også fornuftssannhetene faller. Rekkefølgen er skjelettet i et godt S1-svar.",
    },
    {
      question: "Hva trekker sansebedraget i tvil?",
      options: ["At sansene alltid er til å stole på, siden de av og til lurer oss", "Hele sanseverdenens eksistens", "Matematiske og logiske sannheter", "Selve det at jeg tenker"],
      explanation: "Sansebedraget er første og svakeste trinn: sansene lurer oss noen ganger (pinnen i vann ser bøyd ut), så vi bør ikke stole blindt på dem — men det rekker ikke til det helt nære.",
    },
    {
      question: "Hva trekker drømmeargumentet i tvil?",
      options: ["Hele sanseverdenen, siden jeg ikke sikkert kan skille våken fra drømmende", "Bare enkelte sanseinntrykk, som synet", "Matematiske sannheter som at to og tre er fem", "Min egen eksistens"],
      explanation: "Drømmen kan føles helt virkelig, så jeg kan ikke være sikker på at jeg er våken nå. Dermed betviles hele sanseverdenen — men fornuftssannhetene ser ut til å overleve.",
    },
    {
      question: "Hva gjør hypotesen om den onde ånd som drømmeargumentet ikke rekker å gjøre?",
      options: ["Den trekker også matematikk og logikk i tvil", "Den trekker sanseverdenen i tvil", "Den beviser at Gud finnes", "Den gjør cogito usikkert"],
      explanation: "Drømmen rammer sansene, men lar 2 + 3 = 5 stå. Den onde ånd rammer også fornuftssannhetene — derfor er den den maksimale tvilshypotesen. Dette er den avgjørende presisjonsfellen.",
    },
    {
      question: "Hvorfor kalles hypotesen om den onde ånd den «maksimale» tvilshypotesen?",
      options: ["Fordi den presser tvilen så langt den kan gå, helt til fornuftssannhetene", "Fordi den er ondskapsfull av natur", "Fordi den beviser at ingenting finnes", "Fordi den er det første trinnet i tvilstrappen"],
      explanation: "Den onde ånd rammer også det jeg føler meg tryggest på (matematikk). Ingenting slipper unna — ikke engang fornuften. Derfor er tvilen ført så langt den overhodet kan gå.",
    },
    {
      question: "Er den onde ånd en påstand om at det finnes en slik bedrager?",
      options: ["Nei — den er et tenkt verktøy for å presse tvilen til det ytterste", "Ja — Descartes mente bokstavelig at en ond ånd styrer verden", "Ja — det er en religiøs påstand om djevelen", "Nei — den er et bevis for Guds ikke-eksistens"],
      explanation: "Den onde ånd er en tvilshypotese, ikke en trosbekjennelse. Den brukes for å teste hva som blir stående når selv det mest sikre trekkes i tvil.",
    },
    {
      question: "Hvorfor overlever matematikk og logikk drømmeargumentet, men ikke den onde ånd?",
      options: ["Fordi to og tre virker lik fem selv i en drøm, men en allmektig bedrager kan tenkes å lure meg selv i regnestykker", "Fordi matematikk ikke finnes i drømmer i det hele tatt", "Fordi den onde ånd bare rammer sansene", "Fordi drømmen er en sterkere tvilshypotese enn den onde ånd"],
      explanation: "Drømmen rammer det jeg sanser, ikke det jeg regner. Den onde ånd går lenger og kan lure meg hver gang jeg regner — det er skillet mellom de to trinnene.",
    },
    {
      question: "Hva er cogito?",
      options: ["Innsikten «jeg tenker, altså er jeg» — at jeg må eksistere idet jeg tenker", "Beviset for at den ytre verden finnes", "Påstanden om at Gud garanterer sansene", "Regelen om at klare og tydelige ideer er sanne"],
      explanation: "Cogito («jeg er, jeg eksisterer») er det Descartes finner når alt annet er tvilt bort: setningen er sann hver gang jeg tenker den.",
    },
    {
      question: "Hvorfor kan ikke den onde ånd lure meg til å tro at jeg finnes hvis jeg ikke gjør det?",
      options: ["Fordi for å bli bedratt må det finnes et jeg som bedras", "Fordi den onde ånd er god av natur", "Fordi Gud beskytter min eksistens", "Fordi sansene garanterer at jeg finnes"],
      explanation: "Selve det å bli lurt er en form for tenkning. Skulle ånden narre meg om min egen eksistens, må jeg allerede finnes. Derfor er «jeg er» sann hver gang jeg tenker den.",
    },
    {
      question: "Hva menes med at cogito er Descartes' «arkimediske punkt»?",
      options: ["Det ene faste holdepunktet all annen kunnskap kan bygges på", "Det punktet der tvilen begynner", "Beviset for at matematikk er sikkert", "Det stedet i teksten der Descartes nevner Arkimedes"],
      explanation: "Uttrykket spiller på Arkimedes' ett faste punkt å flytte jorden fra. Cogito er det som blir stående når alt annet er tvilt bort.",
    },
    {
      question: "Hvorfor overlever cogito hele tvilstrappen?",
      options: ["Fordi de andre trinnene rammer innholdet i erkjennelsen, mens cogito handler om selve det at det tenkes", "Fordi Descartes bestemte at det skulle overleve", "Fordi cogito er en matematisk sannhet", "Fordi sansene bekrefter det"],
      explanation: "Sansebedrag, drøm og ond ånd angriper *hva* jeg tenker. Cogito hviler på *at* jeg tenker — og der biter tvilen ikke.",
    },
    {
      question: "Hva er res cogitans hos Descartes?",
      options: ["En «tenkende ting» — det Descartes er sikrest på at han er", "Den utstrakte, materielle kroppen", "Den onde ånd i legemlig form", "Sanseverdenen slik den fremstår"],
      explanation: "Når Descartes har slått fast at han finnes, spør han hva han er. Svaret han er sikrest på, er at han er en tenkende ting; at han har kropp, kan fortsatt betviles.",
    },
    {
      question: "Hvilket skille peker res cogitans frem mot (og utfoldes i kapittel 2.4)?",
      options: ["Res cogitans (tenkende, uutstrakt) mot res extensa (utstrakt, ikke-tenkende)", "Skillet mellom sansebedrag og drøm", "Skillet mellom fallibilisme og skeptisisme", "Skillet mellom analytisk og syntetisk"],
      explanation: "I kapittel 2.4 utvikles cogito-tanken til full substansdualisme, med skillet res cogitans / res extensa og Elisabeths interaksjonsinnvending.",
    },
    {
      question: "I en S2-oppgave om Descartes' åpningsutdrag: hva er den typiske feilen å unngå (#7)?",
      options: ["Å tolke utdraget løsrevet fra tvilstrappens overordnede argument", "Å nevne at Descartes var fransk", "Å bruke egne ord i stedet for sitatet", "Å skrive for langt svar"],
      explanation: "Feil #7 er å behandle utdraget isolert. Cogito-utdraget må plasseres som svaret på hva som overlever den maksimale tvilen — ikke parafraseres løsrevet.",
    },
    {
      question: "Et utdrag der Descartes sier han «må rive alt ned til grunnen og begynne på nytt» — hvilken funksjon har det i argumentet?",
      options: ["Det begrunner startpunktet: hvorfor tvilen må være radikal", "Det er konklusjonen (cogito)", "Det beviser at Gud finnes", "Det er et eksempel på sansebedrag"],
      explanation: "Utdraget uttrykker bildet «riv grunnmuren, ikke husene» og motiverer den metodiske tvilen. Det hører hjemme helt i starten av argumentet.",
    },
    {
      question: "Hva er den faste kontrastdrøftingen Descartes' sikkerhetskrav settes opp mot?",
      options: ["Wikforss' fallibilisme (vi kan ta feil og likevel vite)", "Aristoteles' teleologi", "Haslangers sosiale konstruksjon", "Mills nytteprinsipp"],
      explanation: "Descartes krever sikkerhet; Wikforss (kapittel 1.3) forsvarer fallibilisme. Å veie disse mot hverandre, koblet til cogito-redegjørelsen, løfter svaret til A.",
    },
    {
      question: "Hva menes med at cogito er et «smalt» fundament?",
      options: ["Det gir meg at jeg finnes nå mens jeg tenker, men ikke uten videre at jeg har kropp, fortid eller en verden", "Det gjelder bare for filosofer", "Det er usikkert og lar seg betvile", "Det gjelder bare matematiske sannheter"],
      explanation: "Drøftingspoenget: cogito er trygt, men bærer lite. Kritikere spør om ett så smalt punkt kan bære en hel gjenoppbygging av kunnskapen.",
    },
    {
      question: "Hva er innvendingen om at den metodiske tvilen er «selvunderminerende»?",
      options: ["At Descartes tviler med den fornuften han også trekker i tvil", "At Descartes ikke tviler nok", "At tvilen fører til at Gud ikke finnes", "At sansene motbeviser cogito"],
      explanation: "Hvis den onde ånd kan lure fornuften, hvordan kan Descartes stole på resonnementet frem til cogito? Ett svar: cogito er en umiddelbar innsikt, ikke en slutning fra premisser.",
    },
    {
      question: "Hvordan bør en simuleringshypotese («lever jeg i en datasimulering?») plasseres med Descartes' begreper?",
      options: ["Som en moderne drakt på den onde ånd, siden den også kan forfalske det jeg regner meg frem til", "Som identisk med sansebedraget", "Som en form for cogito", "Som en variant av drømmeargumentet som lar fornuften stå"],
      explanation: "En fullkommen simulering kan ramme også fornuftssannhetene, akkurat som den onde ånd. Cogito overlever den på samme måte: en simulert tviler er fremdeles en tviler.",
    },
    {
      question: "Hva gir cogito oss i møte med simuleringshypotesen?",
      options: ["At jeg finnes, men ikke at verden utenfor er ekte", "At verden garantert er ekte", "At datamaskinen finnes", "At fortiden min er virkelig"],
      explanation: "For å bli simulert-bedratt om egen eksistens må jeg allerede eksistere. Men cogito redder bare eksistensen min, ikke verden — det viser hvor smalt punktet er.",
    },
    {
      question: "Hvilken type stoff om Descartes «nulles» som utenompensum (#3)?",
      options: ["Biografi og epokestoff: fødselsår, at han var fransk, «den moderne filosofis far»", "Rekonstruksjonen av tvilstrappen", "Forklaringen av hvorfor cogito overlever", "Koblingen til Wikforss' fallibilisme"],
      explanation: "Sensor vil ha argumentet, ikke konteksten. Biografi- og epokestoff er generisk oppslagsverk-kunnskap med lav relevans, og gir null uttelling.",
    },
    {
      question: "Hva er «gjenbruksbonusen» i en Descartes-drøfting?",
      options: ["Å føre poengene fra redegjørelsen (a/b) eksplisitt inn i drøftingsdelen (c)", "Å bruke samme oppgave to ganger", "Å sitere sensorveiledningen ordrett", "Å gjenta innledningen i konklusjonen"],
      explanation: "Sensorveiledningene 2024–2025 premierer at redegjørelsen brukes i drøftingen («som vist over …»). Å starte drøftingen «på nytt» uten kobling straffes (feil #5).",
    },
    {
      question: "Hvilken feil begår en kandidat som skriver et sterkt redegjørelsessvar, men gjengir trinnene uten å bruke dem i drøftingen?",
      options: ["#1 gjengivelse uten drøfting — det stopper på D", "#6 upresise begreper", "#13 ignorere tankeeksperimentets premisser", "#12 svare på begge valgfrie oppgaver"],
      explanation: "«Gjengivelse uten drøfting er D-stoff.» Redegjørelsen må kobles inn i drøftingen for å løfte svaret.",
    },
    {
      question: "En kandidat skriver: «Descartes mente at vi aldri kan vite noe sikkert.» Hvilken feil er dette?",
      options: ["#6 — å blande metodisk tvil med skeptisisme", "#3 — leksikonsvar", "#7 — tolke sitatet løsrevet", "#4 — hoppe over delspørsmål"],
      explanation: "Descartes tviler for å *nå* sikker kunnskap. Å gjøre ham til skeptiker (kunnskap er umulig) snur argumentet på hodet — den vanligste presisjonsfeilen.",
    },
    {
      question: "Hva er riktig «gå rett på sak»-disiplin i en Descartes-oppgave?",
      options: ["Plasser tenkeren i én setning, drill tvilstrappen, vis hvorfor cogito overlever", "Begynn med en lang innledning om filosofiens historie", "Bruk halve svaret på Descartes' biografi", "Nevn så mange tenkere som mulig"],
      explanation: "Ingen innledning om epoke eller biografi (nulles, #3). Gå rett på argumentet: tvilstrappen og hvorfor cogito står fast.",
    },
    {
      question: "Hvilket verk henter Descartes-stoffet sitt fra?",
      options: ["«Meditasjoner over filosofiens grunnlag»", "«Kritikk av den rene fornuft»", "«Kunnskapsresistens»", "«Forsvarstalen»"],
      explanation: "Den metodiske tvilen, det skeptiske argumentet og cogito står i «Meditasjonene» (1.–2. meditasjon), Vite-delens tyngste sitattekst.",
    },
  ],
  'exphil03-1-2': [
    {
      question: "Hva sa orakelet i Delfi ifølge Forsvarstalen?",
      options: ["At ingen er visere enn Sokrates", "At Sokrates visste mest av alle om det gode", "At Sokrates burde slutte å drive filosofi", "At bare gudene er vise"],
      explanation: "Utsagnet skaper en gåte for Sokrates, som ikke mente å være vis. Det setter i gang undersøkelsen der han prøver folks kunnskap.",
    },
    {
      question: "Hvorfor forundret orakelets utsagn Sokrates?",
      options: ["Fordi han selv mente han ikke visste noe av verdi", "Fordi han visste at han var den viseste", "Fordi han ikke trodde orakelet fantes", "Fordi han hadde bedt om et annet svar"],
      explanation: "Sokrates var overbevist om at han ikke var vis, så orakelet skapte en gåte. I stedet for å avvise det, satte han det på prøve.",
    },
    {
      question: "Hva gjorde Sokrates for å forstå orakelet?",
      options: ["Han oppsøkte folk med ry for visdom og prøvde kunnskapen deres", "Han ba orakelet om et tydeligere svar", "Han trakk seg tilbake for å meditere alene", "Han skrev ned sin egen visdom i en bok"],
      explanation: "Sokrates satte orakelet på prøve ved å undersøke de vise — og fant at de trodde de visste mer enn de gjorde.",
    },
    {
      question: "Hvilken av de tre gruppene var ifølge Sokrates «mest villfarne», tross størst ry?",
      options: ["Politikerne", "Dikterne", "Håndverkerne", "Prestene"],
      explanation: "Politikerne trodde de visste om det gode og rette uten å vite det, og var uvitende om sin egen uvitenhet — feilen er dobbel.",
    },
    {
      question: "Hva er politikernes feil hos Sokrates?",
      options: ["De mangler både kunnskapen og selvinnsikten om at de mangler den", "De har ekte kunnskap, men overvurderer rekkevidden", "De skaper i inspirasjon uten å kunne forklare det", "De lyver bevisst for velgerne"],
      explanation: "Politikernes feil er dobbel: verken kunnskap eller selvinnsikt. De innbiller seg å vite.",
    },
    {
      question: "Hva er dikternes feil hos Sokrates?",
      options: ["De forveksler evnen til å skape vakkert med å ha kunnskap", "De har ekte fagkunnskap, men overskrider sitt felt", "De er likegyldige til sannheten", "De vet at de ikke vet"],
      explanation: "Dikterne skaper i inspirasjon, ikke av innsikt, og kan ikke gjøre rede for egne verk — men tror på grunn av diktekunsten at de er vise også om annet.",
    },
    {
      question: "Hva er håndverkernes feil hos Sokrates?",
      options: ["De har ekte fagkunnskap, men overvurderer dens rekkevidde", "De mangler all kunnskap", "De skaper i inspirasjon uten innsikt", "De innbiller seg å vite om det gode"],
      explanation: "Håndverkerne kan faktisk sitt fag (skomakeren kan sko), men tror dyktigheten gir innsikt i de største spørsmålene. Feilen er overskridelse, ikke innbilning.",
    },
    {
      question: "Hvilken gruppe er ifølge kapitlet nærmest ekte visdom?",
      options: ["Håndverkerne, fordi de faktisk har genuin kunnskap på sitt felt", "Politikerne, fordi de har størst ry", "Dikterne, fordi de skaper vakkert", "Ingen — alle var like uvitende"],
      explanation: "Bare håndverkerne har ekte kunnskap, så de er nærmest visdom — men snubler i overskridelsen. Denne graderingen er et A-differensierende poeng.",
    },
    {
      question: "Hva er sokratisk visdom?",
      options: ["Å vite at man ikke vet — å kjenne grensen for egen kunnskap", "Å vite mer enn alle andre", "Å benekte at kunnskap finnes", "Å kunne mange fag samtidig"],
      explanation: "«Jeg vet at jeg ikke vet» er en epistemisk innsikt om forholdet mellom hva man vet og hva man tror man vet.",
    },
    {
      question: "Hvorfor er sokratisk visdom IKKE det samme som skeptisisme?",
      options: ["Fordi Sokrates ikke benekter at kunnskap finnes, men avdekker innbilt kunnskap", "Fordi Sokrates mente all kunnskap er umulig", "Fordi skeptisisme handler bare om sansene", "Fordi Sokrates var sikker på at han var vis"],
      explanation: "Håndverkerne hadde ekte kunnskap, som Sokrates roste. Han avdekker skinnkunnskap, ikke all kunnskap. Å blande de to er en typisk feil (#6).",
    },
    {
      question: "Hva menes med at Sokrates driver «epistemisk kritikk»?",
      options: ["Han avdekker skinnkunnskap ved å prøve hva folk faktisk vet mot hva de tror de vet", "Han kritiserer politikernes moral", "Han hevder at all kunnskap er umulig", "Han retter feil i andres regnestykker"],
      explanation: "Filosofien blir en virksomhet — kritisk utspørring som avslører at kunnskap ofte er innbilt.",
    },
    {
      question: "Hva er «skinnkunnskap» hos Sokrates?",
      options: ["Å tro man vet noe man ikke vet", "Ekte fagkunnskap på et smalt felt", "Kunnskap som holdes hemmelig", "Kunnskap som bare gudene har"],
      explanation: "Det er skinnkunnskapen — den innbilte kunnskapen — Sokrates' undersøkelse avslører, ikke uvitenheten i seg selv.",
    },
    {
      question: "Hva er kjernen i skillet mellom bullshit og løgn?",
      options: ["Løgneren bryr seg om sannheten (og skjuler den); bullshitteren er likegyldig til den", "Bullshitteren bryr seg om sannheten; løgneren er likegyldig", "Begge er likegyldige til sannheten", "Løgn er verre enn bullshit i alle tilfeller"],
      explanation: "Løgneren kjenner sannheten og leder deg vekk fra den. Bullshitteren bryr seg ikke om hva som er sant, bare om virkningen.",
    },
    {
      question: "En taler gjentar et tall han ikke aner om stemmer, bare fordi det høres bra ut. Hva er dette?",
      options: ["Bullshit — likegyldighet til om det er sant", "Løgn — bevisst usannhet", "Sokratisk visdom", "Epistemisk kritikk"],
      explanation: "Bullshitteren bryr seg ikke om sannheten, bare om virkningen. Løgn krever derimot at han vet hva som er sant.",
    },
    {
      question: "Hvordan kobles bullshit til Sokrates' analyse?",
      options: ["Bullshitterens likegyldighet til sannheten står nær skinnkunnskapen Sokrates avdekker", "Bullshit er identisk med sokratisk visdom", "Bullshit er en form for ekte fagkunnskap", "Sokrates roste bullshitteren"],
      explanation: "Der løgneren i det minste anerkjenner sannheten (for å skjule den), viser bullshitteren samme mangel på respekt for innsikt som Sokrates diagnostiserer.",
    },
    {
      question: "Hvilket verk henter Sokrates-stoffet sitt fra?",
      options: ["Platon, «Forsvarstalen»", "Platon, «Menon»", "Descartes, «Meditasjonene»", "Wikforss, «Kunnskapsresistens»"],
      explanation: "Forsvarstalen er talen Sokrates holder til sitt forsvar, og den faste Vite-teksten om sokratisk visdom og de tre gruppene.",
    },
    {
      question: "Hvorfor er orakel-konteksten viktig når man tolker den sokratiske visdommen (S2)?",
      options: ["Fordi visdommen er svaret på orakel-gåten — uten konteksten mister utsagnet sin funksjon", "Fordi orakelet beviser at Sokrates var den viseste", "Fordi orakelet var en løgn", "Fordi orakelet handler om dikterne"],
      explanation: "Å tolke visdoms-passasjen løsrevet fra orakelet er feil #7. Den sokratiske visdommen er nettopp resultatet av orakel-undersøkelsen.",
    },
    {
      question: "Hvilken type stoff om Sokrates «nulles» som utenompensum (#3)?",
      options: ["Rettssak- og dødsdom-fortelling uten kobling til det epistemiske poenget", "Rekonstruksjonen av de tre gruppenes feil", "Forklaringen av sokratisk visdom", "Koblingen til Wikforss og Kant"],
      explanation: "Sensor vil ha den epistemiske analysen, ikke dramaet. Anklagene og giftbegeret nulles hvis de ikke kobles til skinnkunnskaps-poenget.",
    },
    {
      question: "Hva er den faste tverrdrøftingen Sokrates inngår i?",
      options: ["Kunnskap og demokrati — hvem eller hva truer kunnskapssamfunnet mest", "Sinn og kropp — dualismens interaksjonsproblem", "Lykke og dyd — eudaimonia mot nytte", "Ren og anvendt geometri"],
      explanation: "På tvers av Sokrates, Wikforss (kapittel 1.3) og Kant (kapittel 1.4) drøftes hvem som truer kunnskapssamfunnet mest, og hva som er motgiften.",
    },
    {
      question: "I en drøfting om hvem som truer kunnskapssamfunnet mest — hva kjennetegner et A-svar?",
      options: ["Å veie politikertypen, bullshitteren og de overskridende ekspertene mot hverandre, ikke bare velge én", "Å velge én kandidat uten begrunnelse", "Å nevne så mange tenkere som mulig", "Å gjengi de tre gruppene uten å drøfte"],
      explanation: "En god drøfting veier de ulike truslene mot hverandre og forankrer valget i Sokrates' analyse — i stedet for å velge blindt.",
    },
    {
      question: "En influenser med ekte kompetanse i styrketrening uttaler seg skråsikkert om medisin og økonomi. Hvilken gruppe ligner dette mest?",
      options: ["Håndverkerne — ekte fagkunnskap, overvurdert rekkevidde", "Politikerne — verken kunnskap eller selvinnsikt", "Dikterne — evne forvekslet med kunnskap", "Bullshitteren — likegyldig til sannheten"],
      explanation: "Influenseren har genuin kompetanse på ett felt (som skomakeren kan sko), men overskrider grensen — nettopp håndverkernes feil.",
    },
    {
      question: "Hva er innvendingen mot at sokratisk visdom er «reell innsikt»?",
      options: ["At «jeg vet at jeg ikke vet» kan være en retorisk figur som underkjenner andre", "At Sokrates aldri undersøkte noen", "At sokratisk visdom er ren skeptisisme", "At håndverkerne ikke hadde kunnskap"],
      explanation: "Til forsvar: Sokrates *bruker* innsikten konkret til å avdekke skinnkunnskap gjennom prøvende utspørring. Å ta stilling til dette viser selvstendighet.",
    },
    {
      question: "Hvorfor er politikertypen særlig farlig i et demokrati?",
      options: ["Fordi selvsikkerhet virker overbevisende, og de sprer skinnkunnskap som ekte kunnskap", "Fordi de alltid lyver bevisst", "Fordi de har ekte fagkunnskap på alle felt", "Fordi de er likegyldige til makt"],
      explanation: "Politikernes doble feil (verken kunnskap eller selvinnsikt) er farlig fordi høylytt selvsikkerhet overbeviser velgere.",
    },
    {
      question: "Hva er Sokrates' filosofiske kall ifølge Forsvarstalen?",
      options: ["Å formane folk til å bry seg om innsikt, sannhet og egen sjel fremfor rikdom og ære", "Å styre byen som den viseste", "Å skrive ned all sin kunnskap", "Å vinne rettssaken for enhver pris"],
      explanation: "Sokrates ser undersøkelsen som et oppdrag — den etiske rammen rundt den epistemiske kritikken.",
    },
    {
      question: "Hva er «gjenbruksbonusen» i en Sokrates-drøfting?",
      options: ["Å føre redegjørelsen av de tre feilene inn i kunnskap-og-demokrati-drøftingen", "Å bruke samme utdrag to ganger", "Å sitere sensorveiledningen", "Å gjenta orakel-historien i konklusjonen"],
      explanation: "Sensorveiledningene 2024–2025 premierer at redegjørelsen brukes i drøftingen; å starte drøftingen «på nytt» uten kobling straffes (#5).",
    },
  ],
  'exphil03-1-3': [
    {
      question: "Hva er Wikforss' tre vilkår for kunnskap?",
      options: ["Overbevisning, sannhet og gode grunner", "Overbevisning, sikkerhet og bevis", "Sannhet, logikk og erfaring", "Tro, tvil og visshet"],
      explanation: "Alle tre må være oppfylt samtidig. Det tredje vilkåret (gode grunner) utelukker heldig gjetning.",
    },
    {
      question: "Hva er det første kunnskapsvilkåret hos Wikforss?",
      options: ["Overbevisning — man må faktisk tro at noe er tilfelle", "Sannhet — det man tror må være tilfelle", "Gode grunner — overbevisningen må støttes av evidens", "Sikkerhet — man må være helt sikker"],
      explanation: "Man kan ikke vite at det regner uten å tro at det regner. Kunnskap forutsetter en overbevisning.",
    },
    {
      question: "Hva er det andre kunnskapsvilkåret hos Wikforss?",
      options: ["Sannhet — det man tror må faktisk være tilfelle", "Overbevisning — man må tro på det", "Gode grunner — det må være begrunnet", "Enighet — andre må være enige"],
      explanation: "Man kan ikke vite noe usant. Tror man det regner mens det er sol, tar man bare feil.",
    },
    {
      question: "Hvilket vilkår utelukker «heldig gjetning» fra å telle som kunnskap?",
      options: ["Gode grunner (evidens)", "Overbevisning", "Sannhet", "Sikkerhet"],
      explanation: "Den som gjetter riktig uten grunnlag har en sann overbevisning, men visste det ikke — hun var bare heldig. Det mangler gode grunner.",
    },
    {
      question: "En person gjetter, uten å sjekke noe, at det regner ute — og det stemmer. Har hun kunnskap?",
      options: ["Nei — hun mangler gode grunner, så det er flaks, ikke kunnskap", "Ja — overbevisningen er sann", "Ja — hun tror det, og det stemmer", "Nei — fordi det ikke regner likevel"],
      explanation: "Overbevisning og sannhet er oppfylt, men det tredje vilkåret (gode grunner) mangler. Treffet er tilfeldig.",
    },
    {
      question: "Betyr «gode grunner» hos Wikforss det samme som «bevis» eller «sikkerhet»?",
      options: ["Nei — evidens kan være god nok til kunnskap uten å utelukke enhver feilmulighet", "Ja — gode grunner betyr fullstendig bevis", "Ja — man må være helt sikker", "Nei — gode grunner betyr bare en følelse av sikkerhet"],
      explanation: "Å gjøre «gode grunner» til «bevis» er en typisk feil (#6-variant) som kollapser fallibilismen tilbake til Descartes' sikkerhetskrav.",
    },
    {
      question: "Hva er fallibilisme?",
      options: ["At vi kan ha kunnskap selv om vi i prinsippet kunne ta feil", "At vi ikke kan vite noe i det hele tatt", "At all kunnskap må være helt sikker", "At bare sansene gir kunnskap"],
      explanation: "Fallibilismen forsvarer at kunnskap finnes tross feilmuligheten — kunnskap krever gode grunner, ikke ufeilbarlighet.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom fallibilisme og skeptisisme?",
      options: ["Begge medgir at feil er mulig, men fallibilisten sier vi vet likevel, skeptikeren sier vi vet ingenting", "Fallibilisten sier vi vet ingenting, skeptikeren sier vi vet likevel", "Fallibilisme gjelder bare sansene, skeptisisme bare fornuften", "Det er ingen forskjell"],
      explanation: "De deler premiss (feil er mulig) men trekker motsatt konklusjon. Å blande dem er den hyppigste presisjonsfeilen i Vite-delen (#6).",
    },
    {
      question: "«Ingen påstand kan bevises helt sikkert, så egentlig vet vi ingenting.» Hvilket syn er dette?",
      options: ["Skeptisisme — ikke fallibilisme", "Fallibilisme", "Wikforss' egen posisjon", "Descartes' cogito"],
      explanation: "Utsagnet slutter fra «kan ikke bevises» til «vet ingenting» — skeptikerens slutning. Fallibilisten avviser denne konklusjonen.",
    },
    {
      question: "Hva er uenigheten mellom Wikforss og Descartes (kapittel 1.1)?",
      options: ["Terskelen for kunnskap: sikkerhet (Descartes) mot gode grunner (Wikforss)", "Om sansene finnes", "Om cogito er sant", "Om matematikk er kunnskap"],
      explanation: "Descartes krever ufeilbarhet; Wikforss krever gode grunner. Det faste S3-paret i Vite-delen.",
    },
    {
      question: "Hva blir konsekvensen av Descartes' sikkerhetskrav for vanlig kunnskap?",
      options: ["Nesten all vanlig kunnskap faller utenfor, siden den kan betviles", "All vanlig kunnskap blir bekreftet", "Bare matematikk blir usikkert", "Ingenting endres"],
      explanation: "Descartes godtar bare det ufeilbare. Wikforss senker terskelen til gode grunner nettopp for å redde vanlig kunnskap.",
    },
    {
      question: "Hva er kunnskapsresistens hos Wikforss?",
      options: ["At kunnskap er motstandsdyktig mot fakta — vi holder fast ved overbevisninger tross evidens", "At kunnskap er umulig å oppnå", "At noen mennesker er dummere enn andre", "At sannhet ikke finnes"],
      explanation: "Kunnskapsresistens er bokas andre store tema, og en trussel mot demokratiet.",
    },
    {
      question: "Hva er den ene («type a») typen evidensresistens?",
      options: ["Å avvise selve evidensen — benekte fakta eller mistenkeliggjøre kilden", "Å tolke evidensen slik at den bekrefter det man alt tror", "Å ha for mange overbevisninger", "Å tvile på alt"],
      explanation: "Type a: man tar ikke informasjonen inn i det hele tatt. Eksempel: «den forskningen er kjøpt og betalt».",
    },
    {
      question: "Hva er den andre («type b») typen evidensresistens?",
      options: ["Å tolke evidensen slik at den bekrefter det man alt tror", "Å avvise all evidens fullstendig", "Å gjette i stedet for å undersøke", "Å kreve bevis for alt"],
      explanation: "Type b er mer subtil: man tar informasjonen inn, men vrir den til å passe forhåndsoppfatningen, slik at selv motstridende fakta blir «bevis».",
    },
    {
      question: "Hvorfor er type b-resistens vanskeligst å motvirke?",
      options: ["Fordi mer informasjon bare gir mer stoff å omtolke", "Fordi den bare rammer eksperter", "Fordi den er sjelden", "Fordi den løses lett med fakta"],
      explanation: "Omtolkende resistens vrir ny evidens til bekreftelse. Derfor mener Wikforss at fakta alene ikke løser resistens.",
    },
    {
      question: "«De sier det er trygt, og nettopp det viser at de skjuler noe.» Hvilken resistens-type er dette?",
      options: ["Type b — omtolke evidensen til å bekrefte forhåndsoppfatningen", "Type a — avvise evidensen", "Fallibilisme", "Sokratisk visdom"],
      explanation: "Her tas informasjonen inn, men vris: selv en betryggende måling blir «bevis» for skjult fare. Det er den omtolkende typen.",
    },
    {
      question: "Hva menes med kunnskapens instrumentelle verdi?",
      options: ["At kunnskap er nyttig — for individet og for demokratiet", "At kunnskap bare har verdi i seg selv", "At kunnskap kan kjøpes og selges", "At kunnskap er verdiløs"],
      explanation: "Wikforss fremhever nytten: individet navigerer bedre, og demokratiet forutsetter at borgerne kan skille sant fra usant.",
    },
    {
      question: "Hvorfor er kunnskapsresistens et samfunnsproblem, ikke bare et individuelt?",
      options: ["Fordi demokratisk selvstyre forutsetter at borgerne kan skille sant fra usant", "Fordi det gjør enkeltpersoner triste", "Fordi det koster penger", "Fordi det bare rammer politikere"],
      explanation: "Når kunnskap ikke fester seg, undergraves grunnlaget for gode felles beslutninger. Det er kunnskapens instrumentelle verdi for demokratiet.",
    },
    {
      question: "Hva er «symmetri-poenget» som løfter en Wikforss-drøfting til A?",
      options: ["At resistens-mekanismene rammer også «vår side», ikke bare motstanderne", "At bare motstanderne er resistente", "At all kunnskap er relativ", "At Wikforss selv er resistent"],
      explanation: "Mekanismene (avvise, omtolke) er symmetriske. Å anvende analysen på seg selv — spørre om jeg selv avviser eller omtolker — er motgiften og et A-differensierende poeng.",
    },
    {
      question: "Hjelper mer informasjon alene mot kunnskapsresistens, ifølge Wikforss' analyse?",
      options: ["Begrenset — særlig mot type b, der ny evidens omtolkes; tiltakene må handle om tillit og kildekritikk", "Ja, alltid — mer fakta løser all resistens", "Nei, informasjon er alltid nytteløst", "Bare hvis informasjonen er hemmelig"],
      explanation: "Mot type a og ren uvitenhet kan informasjon hjelpe, men type b gir bare mer å vri. Problemet er hvordan fakta behandles, ikke mengden.",
    },
    {
      question: "Hvilken tenker settes Wikforss' fallibilisme fast opp mot i S3-oppgaver?",
      options: ["Descartes og hans krav om sikkerhet", "Sokrates og bullshit-begrepet", "Aristoteles og teleologien", "Haslanger og sosial konstruksjon"],
      explanation: "Descartes krever sikkerhet, Wikforss gode grunner. Uenigheten om terskelen er det faste sammenligningsparet.",
    },
    {
      question: "Hva er kjernen i Wikforss' advarsel om «ydmykhet mot lammende skepsis»?",
      options: ["Å erkjenne at vi kan ta feil er sunt, men å slutte til at vi ikke vet er å gli over i skepsis", "At vi aldri bør tvile på noe", "At ydmykhet alltid fører til kunnskap", "At skepsis alltid er bra"],
      explanation: "Fallibilismen holder ydmykheten (feil er mulig) uten å ta steget til skeptisismen (vi vet ingenting).",
    },
    {
      question: "Hvilket verk henter Wikforss-stoffet sitt fra?",
      options: ["«Kunnskapsresistens»", "«Meditasjonene»", "«Forsvarstalen»", "«Den nikomakiske etikk»"],
      explanation: "«Kunnskapsresistens» er Wikforss' verk om hva kunnskap er og hvorfor den er motstandsdyktig mot fakta.",
    },
    {
      question: "Hva må gjelde for at alle tre kunnskapsvilkårene er oppfylt?",
      options: ["Overbevisning, sannhet og gode grunner må være til stede samtidig", "Minst to av de tre må være oppfylt", "Bare sannhet er nødvendig", "Bare overbevisning og sikkerhet"],
      explanation: "Faller ett vilkår (usann tro, eller sann gjetning uten grunner), er det ikke kunnskap. Alle tre kreves på én gang.",
    },
    {
      question: "Hvorfor er ikke en velbegrunnet, men usann overbevisning kunnskap?",
      options: ["Fordi sannhetsvilkåret ikke er oppfylt — man kan ikke vite noe usant", "Fordi den mangler gode grunner", "Fordi man ikke tror på den", "Fordi ingen er enige"],
      explanation: "Selv med gode grunner og overbevisning: hvis det man tror er usant, er det ikke kunnskap. Alle tre vilkårene må oppfylles.",
    },
    {
      question: "I en S2-oppgave om et Wikforss-utdrag om det tredje vilkåret — hva er poenget å få frem?",
      options: ["At sann overbevisning uten gode grunner er flaks, ikke kunnskap", "At sannhet alene er nok til kunnskap", "At overbevisning ikke trengs", "At kunnskap krever full sikkerhet"],
      explanation: "Utdraget bruker den heldige gjetningen som moteksempel for å motivere kravet om gode grunner.",
    },
    {
      question: "Hva er den faste tverrdrøftingen Wikforss inngår i sammen med Sokrates og Kant?",
      options: ["Kunnskap og demokrati — hvem eller hva truer kunnskapssamfunnet mest", "Sinn og kropp", "Lykke og dyd", "Ren og anvendt geometri"],
      explanation: "På tvers av Sokrates (kapittel 1.2), Wikforss (1.3) og Kant (1.4) drøftes hva som truer kunnskapssamfunnet, og hva som er motgiften.",
    },
    {
      question: "Hvilken feil begår en kandidat som skriver at Wikforss «mener vi ikke kan være sikre, så vi vet egentlig ikke»?",
      options: ["#6 — å blande fallibilisme med skeptisisme", "#3 — leksikonsvar", "#13 — ignorere premisser", "#12 — svare på begge oppgaver"],
      explanation: "Fallibilismen forsvarer tvert imot at kunnskap finnes tross feilmuligheten. Å gjøre Wikforss til skeptiker bommer på hele poenget.",
    },
    {
      question: "Hva kjennetegner en ensidig, svakere drøfting av kunnskapsresistens (#8)?",
      options: ["Å bare påpeke resistens hos motstandere, uten å se at mekanismen rammer alle", "Å bruke begge resistens-typene", "Å koble til Sokrates og Kant", "Å ta stilling med forbehold"],
      explanation: "Symmetri-poenget — at resistens rammer også egen side — er A-differensierende. Å utelate det gir den svakere drøftingen.",
    },
    {
      question: "Hva er «gjenbruksbonusen» i en Wikforss-drøfting?",
      options: ["Å føre vilkårene og resistens-typene fra redegjørelsen inn i drøftingsdelen", "Å bruke samme utdrag to ganger", "Å sitere sensorveiledningen ordrett", "Å gjenta innledningen til slutt"],
      explanation: "Sensorveiledningene 2024–2025 premierer at redegjørelsen brukes i drøftingen («siden type b omtolker evidens, derfor …»); å drøfte «på nytt» uten kobling straffes (#5).",
    },
  ],
  'exphil03-1-4': [
    {
      question: "Hva er opplysning ifølge Kant?",
      options: ["Menneskets utgang av sin selvforskyldte umyndighet", "En historisk epoke preget av fornuftstro", "Statens plikt til å utdanne borgerne", "Et sett vitenskapelige sannheter alle må godta"],
      explanation: "Kant definerer opplysning som en prosess — utgang av selvforskyldt umyndighet — ikke som en epoke (#3) eller et fast sett meninger.",
    },
    {
      question: "Hvorfor kaller Kant umyndigheten «selvforskyldt»?",
      options: ["Fordi den skyldes manglende mot og besluttsomhet, ikke manglende forstand", "Fordi den skyldes manglende intelligens hos den enkelte", "Fordi staten med vilje holder borgerne uvitende", "Fordi den skyldes mangel på utdanning og bøker"],
      explanation: "Kjernen: årsaken ligger i viljen (mot), ikke i evnen (forstand). Å skrive «for dum» river ut poenget (#6).",
    },
    {
      question: "Hva betyr «sapere aude» hos Kant?",
      options: ["Ha mot til å bruke din egen forstand", "Kunnskap er makt", "Tvil på alt du kan tvile på", "Adlyd øvrigheten i alle ting"],
      explanation: "«Sapere aude» = «våg å vite» / «ha mot til å bruke din egen forstand». Formelen viser at umyndighet er et mots-problem.",
    },
    {
      question: "Hvilke to laster holder ifølge Kant mennesket i umyndighet?",
      options: ["Latskap og feighet", "Grådighet og hovmod", "Uvitenhet og fattigdom", "Sinne og misunnelse"],
      explanation: "Latskap (behagelig å la andre tenke) og feighet (skummelt å tenke selv) er de to årsakene til at umyndigheten består.",
    },
    {
      question: "Hva er offentlig fornuftsbruk hos Kant?",
      options: ["Bruken av fornuften som lærd, henvendt til et lesende publikum", "Bruken av fornuften mens man er ute blant folk", "Bruken av fornuften i et embete man er betrodd", "Statens offisielle begrunnelse for sine vedtak"],
      explanation: "Offentlig fornuftsbruk er det frie resonnementet som lærd overfor allmennheten — og den skal alltid være fri. Å lese den som «ute blant folk» snur skillet (#6).",
    },
    {
      question: "Hva er privat fornuftsbruk hos Kant?",
      options: ["Bruken av fornuften i et betrodd embete eller en rolle", "Bruken av fornuften hjemme, når man er alene", "Fritt resonnement rettet mot allmennheten", "Tanker man holder for seg selv og aldri ytrer"],
      explanation: "Privat fornuftsbruk er den rollebundne bruken (presten i menigheten, offiseren i tjeneste) — og den kan bindes. «Privat» = rollebundet, ikke «hjemme».",
    },
    {
      question: "Hvilken av de to fornuftsbrukene mener Kant må alltid være fri?",
      options: ["Den offentlige (som lærd overfor publikum)", "Den private (i embetet)", "Begge, uten unntak", "Ingen av dem — begge kan bindes"],
      explanation: "Den offentlige fornuftsbruken bærer opplysningen og må være fri; den private kan bindes fordi rollen krever lydighet mot oppgaven.",
    },
    {
      question: "Hva er den vanligste presisjonsfeilen i Kants opplysningstekst?",
      options: ["Å snu offentlig/privat-skillet slik at «privat» blir «hjemme/alene»", "Å tro at umyndighet betyr å være mindreårig", "Å blande sapere aude med det kategoriske imperativ", "Å tro at Kant avviser all statlig autoritet"],
      explanation: "Feil #6: dagligtalen frister til å lese «privat» som «hjemme» og «offentlig» som «på jobb». Hos Kant avgjør rollen, ikke stedet.",
    },
    {
      question: "En offiser adlyder ordre i tjeneste, men kritiserer forsvaret i et avisinnlegg. Hvordan sorterer Kant dette?",
      options: ["Tjeneste = privat (kan bindes); avisinnlegg = offentlig (må være fri)", "Tjeneste = offentlig; avisinnlegg = privat", "Begge deler = privat fornuftsbruk", "Begge deler = offentlig fornuftsbruk"],
      explanation: "Rollen i tjenesten er privat bruk (kan bindes); det frie resonnementet overfor publikum er offentlig bruk (må være fri). «Adlyd, men resonner».",
    },
    {
      question: "Hva sier Kants formel «adlyd, men resonner»?",
      options: ["Utfør rollen lojalt, men behold retten til offentlig å kritisere den", "Adlyd øvrigheten og la være å tenke selv", "Følg fornuften uansett hva loven sier", "Tenk selv, men hold meningene for deg selv"],
      explanation: "Formelen fanger forholdet mellom fornuftsbrukene: bunden i rollen (privat), fri som lærd overfor publikum (offentlig).",
    },
    {
      question: "Hvorfor ville «bli klokere» vært et dårlig valgspråk for opplysning hos Kant?",
      options: ["Fordi det plasserer feilen i evnen, ikke i viljen", "Fordi Kant mener kunnskap er umulig", "Fordi det er for lite ambisiøst", "Fordi klokskap ikke finnes"],
      explanation: "Umyndigheten er et mots-problem, ikke et kunnskaps-problem. «Bli klokere» ville feilaktig gjøre den til mangel på forstand.",
    },
    {
      question: "Hva er opplysningens betingelse ifølge Kant?",
      options: ["Frihet — særlig fri offentlig bruk av fornuften", "Sikker kunnskap som fundament", "En sterk stat som opplyser borgerne", "Avskaffelse av alle embeter og roller"],
      explanation: "Kant ber om frihet til fri offentlig fornuftsbruk — ikke opprør i rollen, men at ingen kan hindre fritt resonnement som lærd.",
    },
    {
      question: "Hvordan utfyller Kant og Wikforss hverandre i drøftingen om kunnskapssamfunnet?",
      options: ["Kant gir oppfordringen (sapere aude), Wikforss diagnosen av hvorfor den er vanskelig", "De er direkte motstandere om hva kunnskap er", "Begge mener umyndighet skyldes manglende intelligens", "Wikforss avviser Kants opplysningsbegrep"],
      explanation: "Kants individansvar (mot til å tenke selv) og Wikforss' strukturperspektiv (kunnskapsresistens) veies mot hverandre i den faste tverrdrøftingen.",
    },
    {
      question: "I «hvem truer det opplyste samfunnet»-drøftingen, hva advarer Kant mot?",
      options: ["Dem som ikke tør å vite (selvforskyldt umyndighet)", "Dem som tror de vet uten å vite (skinnkunnskap)", "Dem som ikke lar seg lære (resistens)", "Dem som lyver bevisst om fakta"],
      explanation: "Kant: de som ikke tør å tenke selv. Sokrates: de som tror de vet (skinnkunnskap). Wikforss: de som ikke lar seg lære (resistens). Tre komplementære diagnoser.",
    },
    {
      question: "Hvorfor er det en feil å behandle opplysning som «opplysningstiden» på eksamen?",
      options: ["Fordi det gir leksikonsvar uten å rekonstruere Kants argument (#3)", "Fordi opplysningstiden aldri fant sted", "Fordi Kant levde etter opplysningstiden", "Fordi epoker ikke finnes i filosofi"],
      explanation: "Å skrive idéhistorie om epoken i stedet for å rekonstruere Kants argument er et leksikonsvar med lav relevans — det nulles (#3).",
    },
    {
      question: "Hva bør du unngå når du drøfter Kants opplysningstekst, ifølge feil #14?",
      options: ["Å trekke inn en klassisk fornuftskritiker som er ute av pensum etter 2021", "Å bruke Wikforss, som er i pensum", "Å bruke Sokrates, som er i pensum", "Å referere til Kants egen tekst"],
      explanation: "Å hente inn tenkere utenfor det gjeldende pensumregimet (feil #14) gir null uttelling. Drøft heller mot pensumtenkere som Wikforss og Sokrates.",
    },
    {
      question: "Hva er poenget med at umyndigheten sitter i viljen og ikke i evnen?",
      options: ["At hvert menneske selv kan gå ut av den ved å ta motet til å tenke selv", "At bare de mest intelligente kan bli opplyste", "At staten må tvinge folk til opplysning", "At opplysning er umulig for de fleste"],
      explanation: "Fordi problemet er manglende mot, ikke manglende forstand, er kuren noe hver enkelt selv kan velge — det er hele poenget med «selvforskyldt».",
    },
    {
      question: "Hvem er «formynderne» i Kants tekst?",
      options: ["De som gjerne overtar tenkningen for oss og holder oss umyndige", "Foreldre til mindreårige barn", "De statlige sensurmyndighetene alene", "Vitenskapsmennene som produserer kunnskap"],
      explanation: "Formynderne (bøker, prester, leger) gjør umyndigheten lettvint ved å tenke for oss — de utnytter latskapen og feigheten.",
    },
    {
      question: "Hva er det subtile A-poenget om sammenhengen mellom Kants to skiller?",
      options: ["Fri offentlig fornuftsbruk er samfunnsbetingelsen som gjør at den enkelte kan ta motet til å tenke selv", "De to skillene motsier hverandre", "Offentlig fornuftsbruk gjør umyndigheten verre", "Privat fornuftsbruk er viktigst for opplysning"],
      explanation: "A-svaret binder de to skillene: umyndigheten er en viljesak, men friheten til offentlig fornuftsbruk er samfunnsbetingelsen som gjør motet mulig. Opplysning er både individuell og kollektiv.",
    },
    {
      question: "En lærers faglige Facebook-post om læreplanen leses av elever, foreldre og arbeidsgiver samtidig. Hva er komplikasjonen for Kants skille?",
      options: ["Én ytring kan tilhøre både offentlig og privat fornuftsbruk på én gang", "Facebook fantes ikke i Kants tid, så skillet er ugyldig", "Alt på sosiale medier er privat fornuftsbruk", "Alt på sosiale medier er offentlig fornuftsbruk"],
      explanation: "Kants kriterium er rollen, ikke plattformen — men i sammensmeltede kanaler kan samme ytring være fritt resonnement (offentlig) og rolle-relevant (privat) samtidig. Skillet testes, ikke oppheves.",
    },
  ],
  'exphil03-1-5': [
    {
      question: "Hva er demarkasjonsproblemet hos Lakatos?",
      options: ["Spørsmålet om hva som skiller vitenskap fra pseudovitenskap", "Spørsmålet om hvordan man beviser en teori endelig", "Spørsmålet om hvem som eier vitenskapelige oppdagelser", "Spørsmålet om hvor mye forskning bør koste"],
      explanation: "Demarkasjon = å trekke grensen mellom vitenskap og pseudovitenskap. Lakatos' svar går på progressive forskningsprogrammer over tid.",
    },
    {
      question: "Hva er vurderingsenheten hos Lakatos?",
      options: ["Et forskningsprogram (en serie teorier over tid)", "En enkelt hypotese", "En enkelt observasjon", "Forskerens personlige integritet"],
      explanation: "Lakatos' grunngrep er å flytte fokus fra enkelthypoteser til hele forskningsprogrammer over tid.",
    },
    {
      question: "Hva er den harde kjernen i et forskningsprogram?",
      options: ["Programmets grunnleggende antakelser, som holdes fast", "Hjelpehypotesene som justeres ved motstand", "Den nyeste forutsigelsen programmet har gjort", "Forskningens etiske retningslinjer"],
      explanation: "Den harde kjernen er grunnantakelsene forskerne ikke gir opp uten videre; det er beltet som justeres.",
    },
    {
      question: "Hva er beskyttelsesbeltet?",
      options: ["Hjelpehypotesene rundt kjernen, som justeres ved motstand", "Programmets urokkelige grunnantakelser", "Et sett etiske regler for forskere", "Metoden for å måle observasjoner"],
      explanation: "Beskyttelsesbeltet er hjelpehypotesene som justeres når verden yter motstand, slik at kjernen kan holdes fast.",
    },
    {
      question: "Hva kjennetegner et progressivt forskningsprogram?",
      options: ["Justeringer som gir nye, dristige forutsigelser som slår til", "At det aldri møter motstand", "At det bare demper anomalier i etterkant", "At det er matematisk elegant"],
      explanation: "Et progressivt program vokser i kunnskap ved å våge nye forutsigelser som bekreftes — det er kjernen i demarkasjonskriteriet.",
    },
    {
      question: "Hva kjennetegner et degenerert forskningsprogram?",
      options: ["At det bare redder seg med ad hoc-justeringer uten nye forutsigelser", "At det gir mange nye, dristige forutsigelser", "At det aldri justerer beltet", "At det har for få tilhengere"],
      explanation: "Et degenerert program lever av ad hoc-lapping: det redder kjernen, men lærer oss ikke noe nytt.",
    },
    {
      question: "Hva er en ad hoc-justering?",
      options: ["En hjelpehypotese som demper én anomali uten å forutsi noe nytt", "En justering som gir en ny, testbar forutsigelse", "En endring av den harde kjernen", "En bekreftelse av en eksisterende teori"],
      explanation: "Ad hoc = skreddersydd for å forklare nettopp én bom i etterkant, uten ny forutsigelse. Kjennetegn på degenerert program.",
    },
    {
      question: "Hva er Lakatos' demarkasjonskriterium?",
      options: ["Om programmet gir nye, dristige forutsigelser som slår til", "Om teorien kan motbevises av én observasjon", "Om teorien kan bekreftes av mange observasjoner", "Om teorien er matematisk elegant"],
      explanation: "Kriteriet er progressivitet: dristige, testbare forutsigelser — ikke motbevisbarhet på ett punkt, og ikke bekreftelser alene.",
    },
    {
      question: "Hvorfor sier Lakatos at «bekreftelser er billige»?",
      options: ["Fordi enhver lære finner tilhengere som ser den bekreftet overalt", "Fordi bekreftelser koster lite penger", "Fordi bekreftelser alltid er falske", "Fordi ingen teori kan bekreftes"],
      explanation: "Poenget: pseudovitenskap finner alltid bekreftelser i etterkant. Det som teller er dristige forutsigelser som kunne slått feil.",
    },
    {
      question: "Hvorfor er det feil å gjøre Lakatos til en enkel falsifikasjonist?",
      options: ["Fordi hos Lakatos feller ikke ett motbevis et program — beltet absorberer det", "Fordi Lakatos mener alt kan bevises", "Fordi Lakatos avviser observasjon helt", "Fordi Lakatos bare vurderer enkelthypoteser"],
      explanation: "Feil #6: kriteriet er progressivitet over tid, ikke motbevisbarhet. Ett motbevis feller ikke programmet fordi beltet kan justeres.",
    },
    {
      question: "En horoskop-app forklarer hver bom med en ny «skjult faktor» i etterkant. Hva slags program er dette ifølge Lakatos?",
      options: ["Degenerert — justeringene er ad hoc, uten nye forutsigelser", "Progressivt — det tilpasser seg dataene", "Vitenskapelig, siden det finner mange bekreftelser", "Umulig å vurdere med Lakatos' kriterium"],
      explanation: "Hver «skjult faktor» er en ad hoc-justering som forklarer bommen i etterkant uten å forutsi noe nytt — degenerert (S5-anvendelse).",
    },
    {
      question: "En elegant fysikkteori forklarer alt vi vet, men har ikke gitt én ny testbar forutsigelse. Hvordan bør man vurdere den med Lakatos?",
      options: ["Som ennå ikke vist progressiv — den avgjørende testen er en ny, dristig forutsigelse", "Som helt sikkert pseudovitenskap, siden den ikke har forutsigelser", "Som progressiv, fordi den er elegant", "Som utenfor demarkasjonsspørsmålet"],
      explanation: "Kriteriet er diakront: å forklare det vi vet er ikke å forutsi noe nytt, men et stagnerende program kan bli progressivt senere — ikke stemple på stående fot.",
    },
    {
      question: "Hva menes med at Lakatos' kriterium er «diakront»?",
      options: ["At demarkasjonen er en dom over utvikling over tid, ikke et øyeblikksbilde", "At det bare gjelder to teorier samtidig", "At det avviser all historie", "At det er uavhengig av observasjoner"],
      explanation: "Diakront = over tid. Et program kan stagnere midlertidig og bli progressivt senere — derfor kan man ikke felle dommen på ett øyeblikk.",
    },
    {
      question: "Hva er forskjellen på en progressiv og en ad hoc-justering?",
      options: ["Den progressive gir en ny, testbar forutsigelse; ad hoc demper bare anomalien i etterkant", "Den progressive endrer kjernen; ad hoc endrer beltet", "De er identiske", "Ad hoc gir nye forutsigelser; progressiv gjør ikke"],
      explanation: "Begge redder kjernen; forskjellen er om justeringen forutsier noe nytt (progressiv) eller bare lapper i etterkant (ad hoc).",
    },
    {
      question: "Hva krever en S5-oppgave (anvend kriteriet på case) mer enn en ren redegjørelse?",
      options: ["Å avgjøre om et konkret programs justeringer er ad hoc eller progressive", "Å ramse opp vitenskapshistoriske oppdagelser", "Å gjengi definisjonene så nøyaktig som mulig", "Å sammenligne Lakatos med Wikforss"],
      explanation: "S5 tester anvendelse: å bruke kriteriet på casen, ikke bare definere begrepene (#1).",
    },
    {
      question: "Hvorfor er det en feil å fortelle historien om Galilei og kirken i stedet for å rekonstruere Lakatos' argument?",
      options: ["Fordi det gir leksikonsvar med lav relevans, som nulles (#3)", "Fordi Galilei ikke er en ekte historisk person", "Fordi historien er hemmelig", "Fordi Lakatos aldri nevnte Galilei"],
      explanation: "Vitenskapshistorie-generalia uten argumentrekonstruksjon er et leksikonsvar (#3) — det gir null uttelling.",
    },
    {
      question: "Hva betyr «teoriavhengig observasjon» (Galileo, bør kjenne til)?",
      options: ["At hva man ser i en observasjon avhenger av teorien man ser med", "At observasjoner alltid er objektive og nøytrale", "At teorier er uavhengige av observasjon", "At bare teleskoper gir sanne observasjoner"],
      explanation: "Data taler ikke for seg selv; de tolkes innenfor et rammeverk. Galileos motstandere så det samme, men tolket det annerledes.",
    },
    {
      question: "Hvordan forsterker teoriavhengig observasjon Lakatos' poeng om motbevis?",
      options: ["Hvis observasjon selv er teoriladet, kan et «motbevis» også bestrides og tolkes", "Den viser at motbevis alltid er endelige", "Den beviser at teorier er falske", "Den gjør demarkasjon umulig"],
      explanation: "Er observasjon teoriladet, blir det enda tydeligere hvorfor ett motbevis ikke uten videre feller et program — motbeviset må også tolkes.",
    },
    {
      question: "Hva utfordrer Jaggar (bør kjenne til)?",
      options: ["Myten om den lidenskapsløse forskeren", "Lakatos' demarkasjonskriterium", "Teorien om at jorda er rund", "Kants opplysningsbegrep"],
      explanation: "Jaggar utfordrer idealet om at ekte kunnskap krever at følelsene legges til side — hun hevder emosjoner virker i all observasjon.",
    },
    {
      question: "Hva er Jaggars tvetydige poeng om emosjoner?",
      options: ["At de både kan fremme og hindre kunnskap", "At de alltid ødelegger kunnskap", "At de alltid gir sann kunnskap", "At de er irrelevante for erkjennelse"],
      explanation: "Følelser kan fordreie (fordommer) MEN også åpne for innsikt (indignasjon som avdekker urett) — derfor blir verdifri vitenskap problematisk.",
    },
    {
      question: "Hvorfor blir idealet om verdifri vitenskap problematisk ifølge Jaggar?",
      options: ["Fordi fravær av bevisste følelser kan skjule hvilke følelser som allerede styrer forskningen", "Fordi vitenskap ikke bør ha noen mål", "Fordi følelser aldri påvirker forskning", "Fordi verdier alltid er objektive"],
      explanation: "Jaggar snur idealet: å fjerne bevisste følelser garanterer ikke objektivitet — det kan bare skjule de emosjonene som styrer valg av spørsmål.",
    },
    {
      question: "Hvordan kobles Jaggar til KI-spørsmålet?",
      options: ["Hvis emosjoner har en positiv erkjennelsesrolle, er det åpent om noe uten følelser kan «vite»", "Jaggar mener KI alltid vet mer enn mennesker", "Jaggar avviser at maskiner finnes", "Jaggar mener følelser er irrelevante for KI"],
      explanation: "Spiller emosjoner en positiv rolle i erkjennelsen, blir det et åpent spørsmål om en maskin uten engasjement kan vite i full forstand.",
    },
    {
      question: "Hva er statusen til Galileo- og Jaggar-stoffet i dette kapitlet?",
      options: ["«Bør kjenne til» — nyttig i drøfting, men skal ikke fortrenge Lakatos-kjernen", "Kjernestoff som veier tyngst på eksamen", "Utenfor pensum og gir null uttelling", "Viktigere enn Lakatos"],
      explanation: "Galileo (1/24) og Jaggar (2-3/24) er «bør kjenne til»: de dekkes etter Lakatos-kjernen og er ekstra drøftingsdimensjoner, ikke hovedstoffet.",
    },
    {
      question: "Hva er en styrke og en svakhet ved at Lakatos ikke gir en skarp beslutningsregel for når et program er degenerert?",
      options: ["Styrke: tålmodighet med lovende programmer; svakhet: dommen kan først felles i etterpåklokskap", "Styrke: rask forkasting; svakhet: for streng", "Det er bare en svakhet, ingen styrke", "Det er bare en styrke, ingen svakhet"],
      explanation: "Mangelen på klokke tvinger fram tålmodighet (styrke) men gir ingen skarp regel — man ser ofte først i etterkant at et program var degenerert (svakhet).",
    },
    {
      question: "Hva er det subtile A-poenget i drøftingen om Lakatos «løser» demarkasjonsproblemet?",
      options: ["At han gjør grensen fruktbar snarere enn skarp — vitenskap er en levende praksis, ikke en formel", "At han løser problemet endelig og mekanisk", "At demarkasjon er umulig og bør oppgis", "At bare falsifikasjon kan trekke grensen"],
      explanation: "A-drøftingen ser at Lakatos gir et fruktbart, men ikke mekanisk skarpt kriterium; om det er en løsning eller en elegant utsettelse er selvstendig stillingtagen.",
    },
  ],
  'exphil03-2-1': [
    {
      question: "Hva er kjernen i Menons paradoks?",
      options: ["At man verken kan søke det man kjenner (unødvendig) eller det man ikke kjenner (umulig), slik at søken etter kunnskap ser ut til å være umulig", "At det er svært vanskelig å lære nye og kompliserte ting", "At sansene alltid bedrar oss, så vi kan ikke vite noe sikkert", "At læring krever en god lærer som overfører kunnskap til eleven"],
      explanation: "Paradokset er et dilemma med to horn: kjenner du svaret, er søken overflødig; kjenner du det ikke, kan du ikke lete etter det. Konklusjonen er at søken tilsynelatende er umulig uansett — ikke bare vanskelig.",
    },
    {
      question: "Hva er Platons svar på Menons paradoks?",
      options: ["Gjenerindringslæren: læring er egentlig sjelens gjenkalling av kunnskap den allerede har", "At man må godta at læring faktisk er umulig", "At en dyktig lærer kan overføre helt ny kunnskap til en tom sjel", "At kunnskap bygges opp gradvis gjennom sanseerfaring"],
      explanation: "Platon omdefinerer hva læring er: det er ikke tilegnelse av noe helt nytt, men gjenerindring (anamnesis) av kunnskap sjelen alt bar. Dermed oppløses dilemmaet.",
    },
    {
      question: "Hvilken funksjon har slavegutt-eksemplet i Menon?",
      options: ["Det er belegg for gjenerindringslæren: gutten finner en geometrisk sannhet uten undervisning, altså kom kunnskapen innenfra", "Det er en underholdende anekdote uten betydning for argumentet", "Det viser at slaver kan lære like godt som frie borgere", "Det beviser at geometri er den enkleste formen for kunnskap"],
      explanation: "Eksemplet er selve beviset for at læring er gjenerindring: Sokrates fortalte ikke gutten svaret, han stilte bare spørsmål — likevel fant gutten fram. Å gjengi scenen uten funksjonen er feil #7.",
    },
    {
      question: "Hva menes med anamnesis (gjenerindring) hos Platon?",
      options: ["Sjelens gjenkalling av tidløse sannheter den kjente før kroppen", "Vanlig hukommelse om hendelser man selv har opplevd", "Evnen til å pugge og gjenta det læreren har sagt", "En metode for å systematisere sanseinntrykk"],
      explanation: "Gjenerindring gjelder tidløse sannheter (geometri, ideene), ikke minner om fortidige hendelser. Å blande det med vanlig hukommelse er en typisk presisjonsfeil.",
    },
    {
      question: "Hva er ideene hos Platon?",
      options: ["Evige, uforanderlige og selvstendig eksisterende forbilder som sansetingene er ufullkomne etterligninger av", "Tanker og forestillinger som finnes i menneskets hode", "Praktiske regler for hvordan man bør leve", "Sanseinntrykk som er lagret i hukommelsen"],
      explanation: "Ideene eksisterer uavhengig av om noen tenker dem, og er tilgjengelige for fornuften, ikke sansene. Å gjøre dem til «tanker i hodet» er feil #6.",
    },
    {
      question: "Hva menes med delaktighet i Faidon?",
      options: ["At en sanseting er skjønn ved å ha del i det skjønne selv — den «låner» egenskapen fra ideen", "At mennesker deltar i samfunnet ved å følge dydene", "At sjelen deltar i kroppens sanseerfaringer", "At alle ideene til sammen utgjør én stor idé"],
      explanation: "Delaktighet forklarer forholdet mellom idé og ting: den enkelte rosen er vakker fordi den har del i det skjønne selv. Det svarer på hvordan de atskilte ideene henger sammen med sanseverdenen.",
    },
    {
      question: "Hva er poenget i argumentet fra «det like» i Faidon?",
      options: ["Vi dømmer sansbare ting som like opp mot en fullkommen likhet sansene aldri ga oss, altså må vi ha kjent det like selv på forhånd", "To ting kan aldri være helt like, derfor finnes ingen likhet", "Likhet er noe vi lærer utelukkende gjennom å sammenligne mange ting", "Matematikk er den eneste sikre formen for kunnskap"],
      explanation: "Ingen sansbar likhet er fullkommen, men vi måler mot fullkommen likhet — det like selv. Den målestokken må vi ha hatt forut for sansene. Dette binder idélæren til gjenerindringen.",
    },
    {
      question: "Hvorfor er det galt å si at ideene bare er «tanker i hodet vårt»?",
      options: ["Fordi ideene ifølge Platon eksisterer selvstendig, uavhengig av om noen tenker på dem", "Fordi ideene bare finnes i språket, ikke i tanken", "Fordi ideene er identiske med sansetingene", "Fordi bare filosofer kan ha ideer i hodet"],
      explanation: "Det skjønne selv ville vært skjønt selv om ingen fantes til å tenke det. Ideene er objekter for fornuften, ikke skapninger av den — de er den stabile virkeligheten kunnskapen retter seg mot.",
    },
    {
      question: "Hva er den sterkeste innvendingen mot gjenerindringslæren?",
      options: ["At den bare flytter problemet: hvordan fikk sjelen kunnskapen i utgangspunktet? En uendelig regress truer", "At slavegutter ikke kan geometri", "At Sokrates faktisk fortalte gutten svaret", "At gjenerindring er det samme som vanlig hukommelse"],
      explanation: "Læren forklarer denne læringen ved en tidligere kunnskap, men da kan man spørre hvordan sjelen lærte det da — og regressen truer. Platons forsvar er at sjelens berøring med ideene er evig, ikke ervervet i tid.",
    },
    {
      question: "Hvilket spørsmål svarer Menon på, og hvilket svarer Faidon på?",
      options: ["Menon svarer på HVORDAN kunnskap er mulig (gjenerindring); Faidon svarer på HVA kunnskapen er om (ideene)", "Menon handler om etikk; Faidon handler om politikk", "Begge svarer på det samme spørsmålet om dydens vesen", "Menon svarer på hva ideene er; Faidon svarer på hvordan man husker dem"],
      explanation: "Å holde de to spørsmålene fra hverandre — og vise sammenhengen via forhåndsvitenen om det like — er et A-grep. De henger sammen: det sjelen gjenerindrer, er ideene.",
    },
    {
      question: "Hva er den empiristiske innvendingen mot idélæren?",
      options: ["At vi danner begreper som «likhet» ved abstraksjon fra erfaring, uten å trenge en egen idéverden eller forhåndsviten", "At ideene er for kompliserte til å forstå", "At sansene alltid bedrar oss", "At Platon aldri beviste sjelens udødelighet"],
      explanation: "Empiristen hevder at «fullkommen likhet» er en grensebetraktning vi selv konstruerer fra sammenligninger, ikke en målestokk vi husker. Stridspunktet er om det ufullkomne kan gi en fullkommen standard.",
    },
    {
      question: "Hvordan oppløser gjenerindringen egentlig Menons paradoks?",
      options: ["Ved å innføre en mellomtilstand: sjelen kjenner sannheten latent, så søken er verken overflødig eller umulig", "Ved å benekte at læring finnes i det hele tatt", "Ved å vise at man alltid har en lærer tilgjengelig", "Ved å hevde at all kunnskap kommer fra sansene"],
      explanation: "Paradokset hviler på et skarpt skille mellom å kjenne og ikke kjenne. Gjenerindringen innfører en mellomtilstand (latent kunnskap), og da forsvinner dilemmaet.",
    },
    {
      question: "Hvilket forhold har ideene til sansetingene i Platons metafysikk?",
      options: ["Ideene er MER virkelige — de er evige og fullkomne, mens sansetingene er skiftende, ufullkomne etterligninger", "Sansetingene er mer virkelige fordi vi kan ta på dem", "Ideene og sansetingene er nøyaktig like virkelige", "Ideene er en del av sansetingene og kan ikke skilles fra dem"],
      explanation: "For Platon er det stabile og fullkomne mest virkelig. Derfor gjelder kunnskap ideene, mens sansetingene bare gir meninger og inntrykk.",
    },
    {
      question: "Hva er kunnskapens kilde ifølge Platon?",
      options: ["Fornuften og sjelens gjenerindring av ideene", "Sansene og observasjon av naturen", "Autoriteter og tradisjon", "Praktisk øvelse og vanedannelse"],
      explanation: "Sansene gir bare det skiftende og ufullkomne. Sikker kunnskap gjelder de evige ideene og nås med tanken. Dette er kontrastpunktet mot Aristoteles i kapittel 2.2.",
    },
    {
      question: "I sammenligningen Platon–Aristoteles: hvor plasserer de formene?",
      options: ["Platon i en egen, atskilt idéverden; Aristoteles i tingene selv", "Begge i en egen idéverden", "Begge i tingene selv", "Platon i tingene; Aristoteles i en atskilt verden"],
      explanation: "Kontrasten går både på virkelighet (atskilt idéverden vs. form i tingene) og kunnskapskilde (gjenerindring vs. erfaring). Dette er det faste sammenligningsparet i emnet.",
    },
    {
      question: "Hva forutsetter gjenerindringslæren om sjelen?",
      options: ["At sjelen har eksistert før kroppen og da har vært i berøring med ideene", "At sjelen dannes samtidig med kroppen ved fødselen", "At sjelen er identisk med hjernen", "At sjelen bare finnes hos filosofer"],
      explanation: "Den preeksisterende sjelen er både gjenerindringens styrke (den forklarer forhåndsvitenen) og dens mest omstridte punkt (den forutsetter en udødelig sjel).",
    },
    {
      question: "Hva er en typisk feil når man skal tolke et Platon-utdrag om slavegutten?",
      options: ["Å gjengi hva som skjer i scenen uten å si hva den beviser (at læring er gjenerindring)", "Å nevne at gutten var ulært", "Å knytte scenen til geometri", "Å koble scenen til Menons paradoks"],
      explanation: "Å behandle beviset som en anekdote er feil #7 (løsrevet tolkning). Nøkkelspørsmålet i en S2-oppgave er alltid: hva VISER utdraget i tekstens argument?",
    },
    {
      question: "Hva skiller kunnskap fra mening hos Platon?",
      options: ["Kunnskap gjelder de stabile, evige ideene og nås med fornuften; mening gjelder den skiftende sanseverdenen", "Kunnskap er det flertallet tror; mening er det den enkelte tror", "Kunnskap kommer fra sansene; mening kommer fra fornuften", "Det er ingen forskjell hos Platon"],
      explanation: "Mening kan være tilfeldig riktig uten å være forankret. Slavegutten går fra mening (tilfeldige svar) til noe fastere når han ser HVORFOR svaret må stemme.",
    },
    {
      question: "Hvorfor er hulelignelsen og «Staten» problematisk å trekke inn i en Menon/Faidon-oppgave?",
      options: ["Det er ikke de pensumtekstene det spørres fra, og bred gjengivelse teller som utenompensum-generalia", "Hulelignelsen motsier idélæren", "«Staten» er skrevet av en annen filosof", "Hulelignelsen handler ikke om Platon"],
      explanation: "Oppgaver om læring og ideene spør fra Menon og Faidon. Å fylle på med hulelignelsen er feil #3 — leksikonsvar med lav relevans gir null uttelling.",
    },
    {
      question: "Hva innebærer det å behandle «alle utdrag» i en Platon-sitatoppgave (a–c)?",
      options: ["At hvert utdrag skal tolkes og plasseres i argumentet, ikke bare det man husker best", "At man skal velge ut det viktigste utdraget og se bort fra resten", "At man skal oversette hvert utdrag ord for ord", "At man skal svare på begge de valgfrie oppgavene"],
      explanation: "Å hoppe over delspørsmål eller utdrag er feil #4 og bryter jevnhetsregelen. En A-besvarelse plasserer alle utdragene som ledd i én samlet argumentgang.",
    },
    {
      question: "Hvordan henger forhåndsvitenen om det like sammen med gjenerindringen?",
      options: ["Forhåndsvitenen er nettopp det sjelen gjenerindrer — kjennskapen til ideene fra før sanseerfaringen", "De er to helt uavhengige argumenter uten sammenheng", "Forhåndsvitenen motbeviser gjenerindringen", "Gjenerindringen gjelder kroppen, forhåndsvitenen gjelder sjelen"],
      explanation: "Faidons argument fra det like viser at vi har kjent ideene forut for sansene — og det er akkurat denne forhåndskunnskapen Menons gjenerindring henter fram.",
    },
    {
      question: "Hva er Platons svar på hvordan de atskilte ideene henger sammen med sanseverdenen?",
      options: ["Delaktighet: sansetingene har del i ideene og får sine egenskaper derfra", "Ideene forsvinner når sansetingene oppstår", "Sansetingene skaper ideene", "Det finnes ingen forbindelse i det hele tatt"],
      explanation: "Delaktighet er Platons løsning, men hvordan den fungerer, er noe han selv strever med — et naturlig drøftingspunkt og et springbrett til Aristoteles' innvending.",
    },
    {
      question: "Hva kjennetegner et A-svar om Platons læring og virkelighet, ifølge det sensor belønner?",
      options: ["Å skille Menons «hvordan» fra Faidons «hva», vise sammenhengen, og drøfte en innvending forbeholdent", "Å gjengi flest mulig detaljer fra dialogene", "Å trekke inn hele Platons forfatterskap", "Å konkludere skråsikkert uten forbehold"],
      explanation: "Kjernen er koblingene (slavegutt som belegg, gjenerindring som svar på paradokset, forhåndsviten som bro til ideene), og A-nivået legger til drøfting av regress- eller empirist-innvendingen.",
    },
    {
      question: "En elev «ser» plutselig hvorfor Pytagoras' setning må stemme. Hvordan ville Platon beskrevet dette?",
      options: ["Som gjenerindring: hun henter fram en nødvendig, evig sannhet sjelen alt kjente, ikke noe sansene ga henne", "Som ren sanseerfaring av trekanter", "Som noe læreren overførte til henne", "Som en tilfeldig gjetning"],
      explanation: "At innsikten er nødvendig og allmenn og føles å komme innenfra, tyder for Platon på gjenerindring. En empirist ville i stedet forklart det som abstraksjon fra tidligere erfaring.",
    },
    {
      question: "Hvorfor bygger ikke Platon kunnskap på sanseerfaring alene?",
      options: ["Fordi sansene bare gir det skiftende og ufullkomne, mens sikker kunnskap gjelder de evige, fullkomne ideene", "Fordi sansene ikke finnes", "Fordi bare matematikere har sanser som virker", "Fordi erfaring alltid er raskere enn tanken"],
      explanation: "Sanseverdenen oppstår og forgår og er ufullkommen. Derfor må sikker kunnskap gjelde noe stabilt — ideene — som nås med fornuften og gjenerindringen.",
    },
  ],
  'exphil03-2-2': [
    {
      question: "Hva mener Aristoteles med en substans?",
      options: ["Det selvstendig eksisterende enkeltværende — en ting som er noe i seg selv", "En egenskap som «rødt» eller «stort»", "En idé i en atskilt idéverden", "Stoffet en ting er laget av, uten formen"],
      explanation: "En substans er en konkret enkeltting (denne hesten), ikke en egenskap. For Aristoteles er substansene de primære virkelighetene — motsatt av Platon, som lot ideene være mest virkelige.",
    },
    {
      question: "Hva innebærer hylemorfismen?",
      options: ["At enhver ting er en uatskillelig enhet av form og stoff, der formen er i tingen", "At formen finnes i en atskilt idéverden, adskilt fra stoffet", "At bare stoffet er virkelig, ikke formen", "At form og stoff er to helt ulike substanser"],
      explanation: "En statue er bronse (stoff) formet til en skikkelse (form). Kjernepoenget, og bruddet med Platon, er at formen er I tingen — ikke i en egen verden.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom Platon og Aristoteles når det gjelder formene?",
      options: ["Platon plasserer formene i en atskilt idéverden; Aristoteles plasserer dem i tingene selv", "Platon mener det ikke finnes former; Aristoteles gjør det", "De er egentlig enige, siden begge snakker om former", "Aristoteles mener formene er i idéverdenen; Platon i tingene"],
      explanation: "Begge mener former finnes, men de er dypt uenige om HVOR. Å si at de «egentlig er enige» sletter over nettopp den kontrasten eksamen tester.",
    },
    {
      question: "Hva betyr aitia hos Aristoteles?",
      options: ["Svar på et «hvorfor»-spørsmål i vid forstand — en forklaringsfaktor", "En forutgående hendelse som frembringer en virkning", "Stoffet en ting er laget av", "Målet en ting streber mot"],
      explanation: "Aitia er bredere enn moderne «årsak». Bare virkeårsaken ligner det moderne begrepet. Å lese aitia som moderne kausalitet er feil #6, som oppgaveteksten selv advarer mot.",
    },
    {
      question: "Hvilke er de fire årsakene?",
      options: ["Stoffårsak, formårsak, virkeårsak og formålsårsak", "Årsak, virkning, hensikt og tilfeldighet", "Materie, energi, tid og rom", "Sansning, erfaring, fornuft og gjenerindring"],
      explanation: "For en bil: metallet (stoff), konstruksjonen (form), produsenten (virke), transport (formål). En fullstendig forklaring krever alle fire.",
    },
    {
      question: "Hvilken av de fire årsakene ligner mest på det moderne begrepet om årsak?",
      options: ["Virkeårsaken — det som frembrakte tingen i tid", "Stoffårsaken — det tingen er laget av", "Formårsaken — konstruksjonen", "Formålsårsaken — hensikten"],
      explanation: "Virkeårsaken (produsenten, opphavet) er en forutgående frembringer, som ligner moderne kausalitet. Nettopp derfor er det lett å regne bare den som «egentlig årsak» — og dermed misforstå aitia.",
    },
    {
      question: "Hva er formålsårsaken (telos) til en kaffekopp?",
      options: ["Å holde og servere drikke", "Keramikken den er laget av", "Pottemakeren som formet den", "Den hule skålen med hank"],
      explanation: "Formålsårsaken er det tingen er til for. For koppen: å holde drikke. (Keramikken er stoffårsak, pottemakeren virkeårsak, skålformen formårsak.)",
    },
    {
      question: "Hva er det teleologiske verdenssynet?",
      options: ["At også naturting har iboende formål — de er rettet mot et mål", "At bare menneskeskapte ting har formål", "At naturen styres av tilfeldigheter uten mål", "At alle ting består av form og stoff"],
      explanation: "Eikenøtten er rettet mot eiketreet; øyet er til for å se. Formålet er iboende, ikke pålagt utenfra. Dette er leddet et moderne, mekanistisk natursyn betviler.",
    },
    {
      question: "Hva skiller et iboende formål fra et pålagt formål?",
      options: ["Et iboende formål ligger i tingens egen natur; et pålagt formål er gitt utenfra av en formålsgiver", "Et iboende formål gis av en snekker; et pålagt formål oppstår av seg selv", "Det er ingen forskjell", "Iboende formål gjelder bare artefakter"],
      explanation: "En stol fikk formålet «å sitte på» av en snekker (pålagt). Aristoteles hevder treet har et iboende formål — i sin egen natur, uten formålsgiver. Skillet bærer teleologi-drøftingen.",
    },
    {
      question: "Hvorfor er firårsaks-skjemaet mer omstridt for naturting enn for artefakter?",
      options: ["Fordi formålsårsaken for naturting bærer en filosofisk påstand: at tingen har et iboende mål uten formålsgiver", "Fordi naturting ikke har stoff", "Fordi artefakter ikke har form", "Fordi naturting ikke kan forklares i det hele tatt"],
      explanation: "For en bil ga noen den et formål. For en eikenøtt er stoff, form og virke greie, men hvem ga den formålet? Aristoteles svarer «det er iboende» — og det er det stridspunktet.",
    },
    {
      question: "Hva er en typisk feil i redegjørelsen for de fire årsakene?",
      options: ["Å hoppe over ett av leddene, ofte formålsårsaken", "Å bruke et konkret eksempel", "Å nevne alle fire ledd", "Å skille mellom form og stoff"],
      explanation: "En fullstendig forklaring krever alle fire. Å «glemme» formålsårsaken er feil #4 og gir en ufullstendig redegjørelse.",
    },
    {
      question: "Hva innebærer det å «platonisere» Aristoteles' former?",
      options: ["Å plassere formene i en atskilt idéverden i stedet for i tingene selv", "Å si at formen er i tingen", "Å bruke bil-eksemplet på de fire årsakene", "Å skille aitia fra moderne kausalitet"],
      explanation: "Hele poenget hos Aristoteles er at formen er I tingen, uatskillelig fra stoffet. Å plassere den i en idéverden er en presisjonsfeil (feil #6-variant).",
    },
    {
      question: "Hva er kunnskapens kilde ifølge Aristoteles?",
      options: ["Erfaringen — vi undersøker tingene, sanser dem og ser hva de har felles", "Sjelens gjenerindring av ideene", "Fornuften alene, uavhengig av sansene", "Autoriteter og tradisjon"],
      explanation: "Fordi formen er i tingene, må vi studere tingene for å finne den. Dette er den direkte motsatsen til Platons gjenerindring, og henger sammen med Aristoteles' virkelighetssyn.",
    },
    {
      question: "Hvordan henger Aristoteles' virkelighetssyn og kunnskapssyn sammen?",
      options: ["Fordi formen er i tingene, kommer kunnskapen fra å studere tingene (erfaring)", "Fordi formen er i en atskilt verden, må kunnskap komme innenfra", "De to henger ikke sammen", "Fordi sansene alltid bedrar, må kunnskap være gjenerindring"],
      explanation: "Virkelighetssyn og kunnskapssyn følges ad: form i tingen gir erfaring som kilde (Aristoteles), mens form i atskilt verden gir gjenerindring (Platon).",
    },
    {
      question: "Hva er formårsaken til et bord?",
      options: ["Konstruksjonen som gjør det til et bord — den flate platen på ben", "Treet det er laget av", "Snekkeren som lagde det", "Å ha en flate å spise ved"],
      explanation: "Formårsaken er det som gjør stoffet til nettopp denne slags ting. (Treet er stoffårsak, snekkeren virkeårsak, spiseflaten formålsårsak.)",
    },
    {
      question: "Hva er den mekanistiske innvendingen mot Aristoteles' teleologi?",
      options: ["At naturting ikke HAR formål, men bare oppfører seg som de gjør av fysiske og biologiske årsaker", "At naturting ikke har stoff", "At Aristoteles ikke skilte form fra stoff", "At de fire årsakene er for mange"],
      explanation: "Et moderne syn sier at å tilskrive naturen mål er å lese menneskelig hensikt inn i det som bare skjer. At et organ gagner organismen, kan forklares uten mål — noe evolusjonen aktualiserer (kap. 2.3).",
    },
    {
      question: "Hva er en mulig mellomposisjon i teleologi-drøftingen?",
      options: ["At formålsspråk er en nyttig måte å beskrive funksjon på, uten å forplikte seg til at naturen HAR mål metafysisk", "At naturen har formål gitt av en gud", "At de fire årsakene må forkastes helt", "At bare virkeårsaken er en ekte årsak"],
      explanation: "Man kan beholde funksjonsforståelsen («øyet er til for å se») som beskrivelse, men slippe den kontroversielle metafysiske teleologien. En god A-nyanse.",
    },
    {
      question: "Hvilken funksjon har utsagnet «å søke formen andre steder enn i tingene selv er å søke forgjeves»?",
      options: ["Det er en direkte avvisning av Platons idéverden", "Det er en bekreftelse på at ideene finnes atskilt", "Det handler om at sansene bedrar", "Det beskriver virkeårsaken"],
      explanation: "Utsagnet er broddens spiss mot læreren Platon: der Platon lette etter formene hinsides tingene, insisterer Aristoteles på at det ikke finnes noen form utenfor de virkelige tingene.",
    },
    {
      question: "Hva viser eikenøtt-eksemplet hos Aristoteles?",
      options: ["At naturting har iboende formål — nøtten er rettet mot å bli et eiketre", "At naturen er full av tilfeldigheter", "At formen er i en atskilt idéverden", "At bare virkeårsaken forklarer vekst"],
      explanation: "Utviklingen fra nøtt til tre er ikke tilfeldig, men styrt av et mål i nøttens egen natur. Eksemplet utvider formålsårsaken fra artefakter til levende ting — og er akkurat det evolusjonen vil forklare uten mål.",
    },
    {
      question: "Hva betyr det at Aristoteles var elev av Platon, for hans metafysikk?",
      options: ["Hans posisjon er en gjennomtenkt korreksjon av læreren, ikke en tilfeldig uenighet", "Han var helt enig med Platon", "Han kjente ikke til Platons idélære", "Han levde lenge før Platon"],
      explanation: "Der Platon skilte formene ut i en egen verden, henter Aristoteles dem inn i tingene. Å nevne lærer–elev-forholdet gir S3-kontrasten historisk dybde uten å falle i biografi-generalia.",
    },
    {
      question: "Hva er telos?",
      options: ["Målet eller hensikten en ting er rettet mot — kjernen i formålsårsaken", "Stoffet en ting er laget av", "Det som frembrakte tingen", "Formen eller konstruksjonen"],
      explanation: "Telos er det eikenøtten strever mot (eiketreet), det øyet er innrettet for (syn). Hos Aristoteles har også naturting sitt telos, i kraft av sin egen natur.",
    },
    {
      question: "I en S5-oppgave skal du anvende firårsaks-skjemaet på en ny case. Hva er den typiske feilen?",
      options: ["Å ramse opp de fire årsakene generelt uten å føre dem konkret gjennom casen", "Å bruke alle fire ledd på casen", "Å skille artefakt fra naturting", "Å nevne formålsårsaken"],
      explanation: "Anvendelse er selve oppgaven (feil #1-vaksine). Å gjengi skjemaet uten å anvende det på den konkrete tingen svarer ikke på det som spørres om.",
    },
    {
      question: "Hva er formålsårsaken til et øye ifølge Aristoteles?",
      options: ["Å se — øyet er til for synet", "Cellene og vevet det består av", "Den bestemte strukturen av linse og netthinne", "Fosterutviklingen som frembrakte det"],
      explanation: "Formålsårsaken er hva tingen er til for. Øyet er til for å se. (Vevet er stoff, strukturen er form, fosterutviklingen er virkeårsak.) At et organ har et slikt formål, er den teleologiske påstanden.",
    },
    {
      question: "Hva er stoffårsaken til en bronsestatue?",
      options: ["Bronsen den er laget av", "Skikkelsen den er formet til", "Billedhuggeren", "Å pryde eller minnes"],
      explanation: "Stoffårsaken er materialet. (Skikkelsen er formårsak, billedhuggeren virkeårsak, pryd/minne formålsårsak.) Ett av fire ledd som alle må med.",
    },
    {
      question: "Hvorfor peker Aristoteles' teleologi framover mot evolusjonsdrøftingen i kapittel 2.3?",
      options: ["Fordi naturlig utvalg lover å forklare den tilsynelatende formålsrettetheten i naturen uten formål", "Fordi Aristoteles skrev om evolusjon", "Fordi teleologien handler om moral", "Fordi Dawkins var Aristoteles' elev"],
      explanation: "Teleologien hevder naturting har iboende formål. Evolusjonsteorien tilbyr en forklaring på tilsynelatende design (variasjon + seleksjon) uten mål — og setter dermed formålsårsaken på prøve.",
    },
    {
      question: "Hva kjennetegner et A-svar om Aristoteles' metafysikk, ifølge det sensor belønner?",
      options: ["Å skille artefakt fra naturting (formålsårsaken som stridspunkt) og binde virkelighets- og kunnskapssyn sammen i Platon-kontrasten", "Å gjengi flest mulig detaljer om Aristoteles' liv", "Å regne bare virkeårsaken som ekte årsak", "Å konkludere skråsikkert at teleologien er sann"],
      explanation: "Kjernen er de fire årsakene og teleologien; A-nivået legger til at skjemaet er intuitivt for artefakter men omstridt for naturting, og drøfter teleologien forbeholdent.",
    },
    {
      question: "Hva menes med at «naturen gjør intet forgjeves»?",
      options: ["At alt i naturen har en funksjon eller et mål, ingenting er formålsløst", "At naturen er full av unyttige ting", "At bare mennesker har formål", "At naturen styres av rene tilfeldigheter"],
      explanation: "Setningen er Aristoteles' kondenserte formulering av det teleologiske verdenssynet: det som vokser, streber mot sin fulle skikkelse. Nettopp denne påstanden avviser en mekanistisk naturforståelse.",
    },
    {
      question: "Hvorfor er egenskaper som «rødt» ikke substanser hos Aristoteles?",
      options: ["Fordi de ikke eksisterer i seg selv, men bare ved å tilhøre en substans", "Fordi de er ideer i en idéverden", "Fordi de er formålsårsaker", "Fordi de ikke kan sanses"],
      explanation: "«Rødt» må tilhøre noe rødt for å finnes; det er ikke noe selvstendig eksisterende. Bare enkelttingene (substansene) er noe i seg selv — de er de primære virkelighetene.",
    },
    {
      question: "Hva er den mest markerte fellen i Aristoteles-stoffet på eksamen?",
      options: ["Å lese aitia (årsak) som moderne kausalitet og dermed miste tre av fire ledd", "Å bruke et eksempel på de fire årsakene", "Å nevne at Aristoteles var Platons elev", "Å skille form fra stoff"],
      explanation: "Oppgaveteksten advarer selv mot dette (feil #6). Regner man bare virkeårsaken som «egentlig årsak», presser man Aristoteles inn i et kausalitetsbegrep han ikke deler.",
    },
    {
      question: "Hvordan bør du strukturere en redegjørelse for Aristoteles' metafysikk (S1)?",
      options: ["Substans → form og stoff → de fire årsakene → teleologi", "Teleologi → substans → gjenerindring → ideene", "De fire årsakene → Platons idéverden → sansebedrag", "Virkeårsak alene, siden den er den egentlige årsaken"],
      explanation: "Å treffe strukturen — enkelttingene er primære, hver er form + stoff, full forståelse krever fire årsaker, også naturting har formål — er det S1-håndverket krever, ikke bare bitene hver for seg.",
    },
  ],
  'exphil03-2-3': [
    {
      question: "Hvordan forklarer naturlig utvalg ifølge Dawkins tilsynelatende design i naturen?",
      options: ["Gjennom tilfeldig variasjon og ikke-tilfeldig seleksjon, uten at noe ledd sikter mot et mål", "Gjennom et iboende formål i hver organisme", "Gjennom en formålsgiver som designet organismene", "Gjennom sjelens gjenerindring av de fullkomne formene"],
      explanation: "Variasjonen er tilfeldig, seleksjonen er bare det at det som fungerer, består. Over generasjoner gir dette organismer som ser designet ut — men designet er tilsynelatende, ikke tilsiktet.",
    },
    {
      question: "Hva menes med «tilsynelatende design» hos Dawkins?",
      options: ["At levende ting ser formålsrettet konstruert ut uten at det finnes en formålsgiver eller et forutgående mål", "At funksjonene i naturen er rene illusjoner som ikke finnes", "At Gud har designet naturen slik den ser ut", "At naturen er tilfeldig og uten struktur"],
      explanation: "«Tilsynelatende» betyr ikke illusorisk — øyet ser virkelig — men at funksjonen ikke krever et mål. Den er forklart bakfra, av seleksjon, ikke forfra, av en hensikt.",
    },
    {
      question: "Hva er kjernekontrasten mellom Aristoteles og Dawkins når det gjelder formålsrettethet?",
      options: ["Aristoteles forklarer den forfra (et iboende mål); Dawkins forklarer den bakfra (variasjon og seleksjon)", "Aristoteles benekter formål; Dawkins hevder formål", "Begge forklarer formålsrettetheten på nøyaktig samme måte", "Dawkins forklarer den forfra; Aristoteles bakfra"],
      explanation: "Der Aristoteles sa «øyet er til for å se», sier Dawkins «øyet ble slik at det ser, fordi varianter som så, overlevde». Spørsmålet er om bakfra-forklaringen gjør formålsårsaken overflødig.",
    },
    {
      question: "Hva er forskjellen på «sterk» og «svak» teleologi i drøftingen mot Dawkins?",
      options: ["Sterk teleologi krever et forutgående mål/formålsgiver; svak teleologi hevder bare at organer har funksjoner", "Sterk teleologi gjelder planter; svak teleologi gjelder dyr", "Sterk teleologi er Aristoteles'; svak er Platons", "Det er ingen reell forskjell"],
      explanation: "Naturlig utvalg treffer den sterke teleologien (iboende mål) hardt, men er forenlig med den svake (funksjon). En god drøfting sier tydelig hvilken teleologi den drøfter mot.",
    },
    {
      question: "Hva er kjernepremisset i Streets evolusjonære debunking-argument?",
      options: ["At seleksjonen formet verdiene våre fordi de var nyttige for overlevelse, ikke fordi de var moralsk sanne", "At alle moralske verdier er objektivt sanne", "At evolusjonen beviser at bestemte verdier er riktige", "At mennesket ikke har noen verdier i det hele tatt"],
      explanation: "Seleksjonen sporer nytte, ikke sannhet. Hadde en usann verdi tjent overlevelsen like godt, ville den blitt like utbredt — derfor er moralsk sannhet irrelevant for hva seleksjonen frembrakte.",
    },
    {
      question: "Hvilket dilemma stiller Street den moralske realisten overfor?",
      options: ["Enten benekte evolusjonens påvirkning (usannsynlig), eller forklare et usannsynlig treff mellom seleksjon mot nytte og moralsk sannhet", "Enten være ateist eller religiøs", "Enten godta all moral eller forkaste all moral", "Enten stole på sansene eller på fornuften"],
      explanation: "Ingen av grenene er behagelig: benekting er biologisk usannsynlig, og å godta påvirkningen krever å forklare et «under» — hvordan en prosess innrettet mot overlevelse skulle ha truffet den uavhengige moralske sannheten.",
    },
    {
      question: "Hva er skillet mellom genese og gyldighet?",
      options: ["Genese er hvor en verdi kommer fra (opphavet); gyldighet er om den er sann/riktig", "Genese er om verdien er sann; gyldighet er hvor den kommer fra", "De betyr det samme", "Genese gjelder moral; gyldighet gjelder vitenskap"],
      explanation: "De er logisk forskjellige: lavt opphav utelukker ikke riktighet, edelt opphav sikrer den ikke. Å holde de to fra hverandre er A-differensiatoren i dette stoffet.",
    },
    {
      question: "Hva er den klassiske feilen når man drøfter Streets argument?",
      options: ["Å gli fra at evolusjonen «forklarer» en verdi til at den «rettferdiggjør» eller «motbeviser» den", "Å skille genese fra gyldighet", "Å nevne at seleksjonen sporer nytte", "Å koble Dawkins og Street"],
      explanation: "At noe ER slik (vi har verdien fordi den gagnet overlevelse) sier ikke uten videre noe om hva som BØR være tilfellet. Å forklare et opphav er verken å begrunne eller å oppheve en norm — en er/bør-glidning.",
    },
    {
      question: "Retter Streets argument seg mot moralen som sådan, eller mot noe mer bestemt?",
      options: ["Mot den moralske realismen — synet at verdiene er objektive — ikke mot moralen i seg selv", "Mot all moral, som argumentet viser er meningsløs", "Mot at mennesker har følelser", "Mot evolusjonsteorien"],
      explanation: "Debunking-argumentet er en utfordring til objektiviteten. Å lese det som «alt er tillatt» eller at moral er meningsløst, er en feil — det fører snarere mot ydmykhet eller antirealisme enn mot nihilisme.",
    },
    {
      question: "Hva er gjenbruksbonusen (sensorbonus) i drøftingsdelen om evolusjon?",
      options: ["Å føre Dawkins-redegjørelsen eksplisitt inn i Street-drøftingen, siden de to deler logikk (opphav vs. status)", "Å svare på begge de valgfrie oppgavene", "Å gjenta redegjørelsen ordrett i konklusjonen", "Å unngå å nevne Dawkins i verdi-drøftingen"],
      explanation: "De to halvdelene deler logikk: evolusjonen gir et opphav, og spørsmålet er hva opphavet innebærer. Å ikke koble dem er feil #5; å vise parallellen henter bonusen.",
    },
    {
      question: "Kan aristotelikeren svare på Dawkins' utfordring mot teleologien?",
      options: ["Ja, ved å hevde at Dawkins forklarer HVORDAN formålsrettetheten oppstod, ikke at funksjonen ikke finnes", "Nei, teleologien er fullstendig motbevist", "Ja, ved å benekte at naturlig utvalg finnes", "Nei, fordi Aristoteles ikke kjente til evolusjon"],
      explanation: "En «myk» teleologi som bare fastholder at organer HAR funksjoner (uten formålsgiver) kan leve videre ved siden av evolusjonen. Om Dawkins tilbakeviser teleologien, avhenger av hvor sterk teleologi man tilskriver Aristoteles.",
    },
    {
      question: "Hva viser den kontrafaktiske vrien i Streets kjernepremiss?",
      options: ["At hadde en usann verdi tjent overlevelsen like godt, ville den spredt seg like godt — altså er sannhet irrelevant for seleksjonen", "At bare sanne verdier kunne blitt selektert", "At evolusjonen alltid velger de riktige verdiene", "At verdier ikke påvirkes av evolusjon"],
      explanation: "Poenget er at det ikke er noen forbindelse mellom det som ble selektert (nytte) og det som er moralsk sant. En tolkning som mister denne vrien, mister argumentets brodd.",
    },
    {
      question: "Normen «ta vare på ditt eget barn» har en evolusjonsforklaring. Gjør det normen usann?",
      options: ["Nei — evolusjonsforklaringen viser normens opphav, men gjør den ikke usann; den svekker en bestemt begrunnelse for at den er objektivt sann", "Ja, evolusjonsforklaringen beviser at normen er falsk", "Ja, alle evolusjonært forklarte normer er ugyldige", "Nei, evolusjonen beviser tvert imot at normen er sann"],
      explanation: "Her er genese/gyldighet-skillet avgjørende: å forklare hvorfor vi har normen motbeviser den ikke. Resultatet er nærmere ydmykhet enn nihilisme — normen faller ikke, men lener seg ikke trygt på intuisjonen alene.",
    },
    {
      question: "Hvilket av utfallene ligger nærmest konklusjonen av Streets argument?",
      options: ["Skeptisisme/antirealisme om moralsk objektivitet — vi mangler grunn til å tro vi har truffet en objektiv sannhet", "Full relativisme — det finnes ingen sannhet å ta feil om", "Moralsk dogmatisme — vi vet sikkert hva som er rett", "Nihilisme — alt er tillatt"],
      explanation: "Argumentet angriper vår TILGANG til moralsk sannhet (kilden er upålitelig som sannhetsspor). Det beviser ikke full relativisme; i mildere form fører det til ydmykhet.",
    },
    {
      question: "Hva er de to leddene i naturlig utvalg, og hvordan skiller de seg?",
      options: ["Variasjon (blind, tilfeldig) og seleksjon (retningsgivende uten å sikte mot et mål)", "Variasjon (målrettet) og seleksjon (tilfeldig)", "Mutasjon og gjenerindring", "Form og stoff"],
      explanation: "Variasjonen er råmaterialet (tilfeldige ulikheter); seleksjonen er filteret (de best tilpassede overlever oftere). Å gjøre seleksjonen målrettet er en typisk upresishet.",
    },
    {
      question: "Hva er en typisk feil når man redegjør for Dawkins i en drøftingsoppgave?",
      options: ["Å gjengi naturlig utvalg uten å ta stilling til hva det betyr for Aristoteles' teleologi", "Å nevne både variasjon og seleksjon", "Å forklare at mekanismen er formålsløs", "Å bruke øyet som eksempel"],
      explanation: "Redegjørelsen skal tjene drøftingen (feil #1-vaksine). Å gjengi mekanismen uten å koble den til teleologi-spørsmålet svarer ikke på oppgaven.",
    },
    {
      question: "Hva innebærer det å lese Streets debunking-argument som «alt er tillatt»?",
      options: ["En feiltolkning — argumentet utfordrer objektiviteten, ikke moralens meningsfullhet, og fører mot ydmykhet/antirealisme, ikke nihilisme", "En korrekt forståelse av argumentets konklusjon", "En styrking av argumentet", "Det samme som genese/gyldighet-skillet"],
      explanation: "Argumentet angriper synet at verdiene er objektive, ikke moralen i seg selv. Å trekke det til at hva som helst er greit, er en av de typiske feilene.",
    },
    {
      question: "Hvordan henger Dawkins-halvdelen og Street-halvdelen av kapitlet sammen logisk?",
      options: ["Begge gir et evolusjonært OPPHAV (til formålsrettethet / til verdier), og spørsmålet er i begge hva opphavet INNEBÆRER", "De har ingen sammenheng", "Begge handler bare om moral", "Begge handler bare om metafysikk"],
      explanation: "I begge tilfeller gir evolusjonen et opphav, og nøkkelen er å skille å forklare noes opphav fra å avgjøre dets status. Derfor testes de sammen.",
    },
    {
      question: "Hva kjennetegner et A-svar om evolusjon, teleologi og moral?",
      options: ["Å beherske genese/gyldighet-skillet presist, skille sterk/svak teleologi og relativisme/skeptisisme/ydmykhet, og koble Dawkins til Street", "Å konkludere skråsikkert at moralen er motbevist", "Å gjengi flest mulig biologiske detaljer", "Å behandle de to halvdelene helt atskilt"],
      explanation: "Kjernen er at Dawkins forklarer formål uten formål, og Street utfordrer objektiviteten via et opphav som sporer nytte. A-nivået legger til de presise skillene og gjenbrukskoblingen.",
    },
    {
      question: "Hvorfor sier Street at det er et «lykketreff» om verdiene våre skulle være objektivt sanne?",
      options: ["Fordi kreftene som formet dem siktet mot nytte, ikke mot sannhet — så en overensstemmelse med sannheten ville være tilfeldig", "Fordi verdiene er tilfeldig valgt av hver enkelt", "Fordi det ikke finnes noen moralsk sannhet", "Fordi evolusjonen alltid treffer sannheten"],
      explanation: "Hvis seleksjonen sporet nytte og ikke sannhet, er det ingen grunn til å forvente at verdiene traff sannheten — et slikt treff ville være tilfeldig, og et lykketreff gir svak grunn til å stole på dem.",
    },
  ],
  'exphil03-2-4': [
    {
      question: "Hva hevder Descartes' substansdualisme?",
      options: ["At virkeligheten består av to grunnleggende ulike substanser: sinn og kropp", "At sinn og kropp er to ord for det samme fenomenet", "At bare det fysiske finnes, og sinnet er noe hjernen gjør", "At sinnet er en illusjon skapt av kroppen"],
      explanation: "Dualismen er en påstand om to selvstendige substanser med motsatte vesentlige egenskaper — ikke to ord for det samme (kategorifeil #6), og ikke fysikalisme.",
    },
    {
      question: "Hva er res cogitans?",
      options: ["Den tenkende, uutstrakte substansen — sinnet", "Den utstrakte, ikke-tenkende substansen — kroppen", "Foreningen av sjel og legeme", "Selve interaksjonen mellom sinn og kropp"],
      explanation: "Res cogitans («tenkende ting») er sinnet: dens vesen er å tenke, og den er uutstrakt. Res extensa er derimot den utstrakte kroppen.",
    },
    {
      question: "Hva er res extensa?",
      options: ["Den utstrakte, ikke-tenkende substansen — kroppen og materien", "Den tenkende, uutstrakte substansen — sinnet", "En egenskap ved tanken", "Et navn på selve tvilen"],
      explanation: "Res extensa («utstrakt ting») har utstrekning (lengde, bredde, dybde) og tenker ikke. Res cogitans er den tenkende substansen.",
    },
    {
      question: "Hva er den vesentlige egenskapen til res cogitans?",
      options: ["Tenkning", "Utstrekning", "Bevegelse", "Tyngde"],
      explanation: "Res cogitans' vesen er tenkning (tvile, forstå, ville, føle). Utstrekning er derimot res extensas vesentlige egenskap.",
    },
    {
      question: "Hva er den vesentlige egenskapen til res extensa?",
      options: ["Utstrekning (lengde, bredde, dybde)", "Tenkning", "Tvil", "Vilje"],
      explanation: "Res extensa er definert ved utstrekning — å fylle rom. Tenkning tilhører res cogitans.",
    },
    {
      question: "Hvordan begrunner Descartes at sinn og kropp er ulike substanser (argumentet fra tvilbarhet)?",
      options: ["Jeg kan tvile på at jeg har en kropp, men ikke på at jeg tenker; ulike egenskaper gir ulike ting", "Kroppen er synlig, sinnet er usynlig", "Sinnet er evig, kroppen forgjengelig", "Vitenskapen har målt at de er ulike"],
      explanation: "Argumentet fra tvilbarhet: kroppen er tvilbar, tanken ikke; ting med ulike vesentlige egenskaper er ulike ting; altså er de ulike substanser. Det bygger på cogito.",
    },
    {
      question: "Hva er interaksjonsproblemet som Elisabeth av Böhmen reiser?",
      options: ["Hvordan en uutstrakt substans kan sette en utstrakt kropp i bevegelse", "Hvorvidt sinnet finnes i det hele tatt", "Om kroppen kan tenke uten sinnet", "Hvorvidt Gud kan gripe inn i naturen"],
      explanation: "Interaksjonsproblemet spør hvordan noe uutstrakt (sinnet) kan påvirke noe utstrakt (kroppen), når påvirkning ser ut til å kreve kontakt og utstrekning.",
    },
    {
      question: "Hva gjør Elisabeths innvending så farlig for Descartes?",
      options: ["Den bruker Descartes' egne definisjoner (uutstrakt sinn, utstrakt kropp) mot ham", "Den påberoper seg ny naturvitenskap Descartes ikke kjente", "Den benekter at sinnet finnes", "Den viser at Descartes tar feil om matematikk"],
      explanation: "Kraften ligger i at innvendingen godtar Descartes' egne begreper: sinnet er uutstrakt, påvirkning krever utstrekning — så dualisten kan ikke svare uten å oppgi en definisjon.",
    },
    {
      question: "Hva er Descartes' svar til Elisabeth?",
      options: ["At sjel og legeme er nært forent, kjent gjennom livets erfaring", "At interaksjon ikke finnes", "At sinnet egentlig er utstrakt", "At kroppen egentlig tenker"],
      explanation: "Descartes svarer med foreningen av sjel og legeme. Elisabeths motsvar: dette forklarer ikke mekanismen, det gjentar bare at samvirket skjer.",
    },
    {
      question: "Hvorfor tilfredsstiller ikke «sjelens forening med legemet» Elisabeth?",
      options: ["Det gjentar bare at samvirket skjer uten å forklare hvordan", "Det er selvmotsigende på et logisk nivå", "Det strider mot Bibelen", "Det forutsetter at sinnet er utstrakt"],
      explanation: "Elisabeth krevde en mekanisme. Foreningen er et navn på problemet, ikke en løsning — den forklarer ikke hvordan noe uutstrakt kan virke på noe utstrakt.",
    },
    {
      question: "Hva er fysikalisme?",
      options: ["Posisjonen at alt som finnes er fysisk, også sinnet", "Posisjonen at bare sinnet er virkelig", "Descartes' egen posisjon", "Læren om at sinn og kropp er to substanser"],
      explanation: "Fysikalismen sier at alt er fysisk. Den unngår interaksjonsproblemet fordi den ikke har to ulike substanser som må samvirke — men problemet beviser den ikke.",
    },
    {
      question: "Hvorfor er det et A-poeng å skille «argument mot Descartes» fra «argument for fysikalisme»?",
      options: ["At interaksjonsproblemet rammer Descartes' variant, viser ikke at fysikalismen er sann", "Fordi fysikalisme og dualisme betyr det samme", "Fordi Descartes selv var fysikalist", "Fordi Elisabeth argumenterte for fysikalisme"],
      explanation: "Å svekke Descartes' dualisme viser bare at *denne* dualismen har en vanske. Å hoppe rett til «altså er alt fysisk» er ensidig drøfting (#8).",
    },
    {
      question: "Hva ville en cartesianer si om en robot som hevder å føle smerte?",
      options: ["At roboten er ren res extensa og mangler den tenkende substansen føleevnen forutsetter", "At roboten helt sikkert føler, siden den sier det", "At roboten er en tredje substans", "At spørsmålet er meningsløst"],
      explanation: "Roboten er ren utstrakt materie (res extensa). Å føle krever res cogitans. Cartesianeren ville være skeptisk uansett hvor overbevisende roboten snakker.",
    },
    {
      question: "Hva er skillet som gir A i KI-casen?",
      options: ["Å skille å simulere smerteatferd fra å ha en indre tilstand", "Å skille dyre robot fra billig robot", "Å skille kropp fra hjerne", "Å skille sannhet fra løgn hos roboten"],
      explanation: "Ren res extensa kan *simulere* smerteatferd; å *ha* en indre opplevelse krever res cogitans. Å la robotens ord avgjøre er å ignorere premissene (#13).",
    },
    {
      question: "Hvordan rammer Elisabeths utfordring også intuisjonen om «sjel i maskinen»?",
      options: ["Postulerer man et uutstrakt sinn i roboten, gjenoppstår interaksjonsproblemet", "Den viser at maskiner ikke kan bygges", "Den beviser at maskiner har sjel", "Den gjelder bare biologiske kropper"],
      explanation: "Hvis man redder robotbevisstheten ved å postulere et uutstrakt robot-sinn, står man igjen med samme spørsmål: hvordan styrer det uutstrakte den utstrakte maskinvaren?",
    },
    {
      question: "Hvilken feil begår den som sier «dualisme betyr bare at hjerne og sinn er to ord for det samme»?",
      options: ["En kategorifeil (#6) — dualismen handler om substanser, ikke om ord", "En regnefeil", "En kildefeil", "Ingen feil — det er riktig"],
      explanation: "«To ord for det samme» er nærmest identitetstesen — det motsatte av dualisme. Descartes hevder to selvstendig eksisterende substanser (#6).",
    },
    {
      question: "Hvilken feil begår den som redegjør grundig for dualismen men bare nevner Elisabeth i to setninger?",
      options: ["#4 — hoppe over/nedprioritere et delspørsmål og bryte jevnhetsregelen", "#14 — gammelt pensum-spøkelse", "#11 — sitatslurv", "#2 — mening uten grunner"],
      explanation: "Når Elisabeth er med, er interaksjonsproblemet halve svaret. Å underprioritere det bryter jevnhetsregelen (#4); begge deler må være «gode» for C.",
    },
    {
      question: "Hva menes med at sinnet er «uutstrakt»?",
      options: ["At det er uten romlig utstrekning og ingen overflate har", "At det er svært lite", "At det beveger seg raskt", "At det er usynlig for øyet, men fyller rom"],
      explanation: "Uutstrakt betyr uten romlig utstrekning. Nettopp dette gjør interaksjonsproblemet skarpt: hvordan skal noe uten overflate ta kontakt med noe utstrakt?",
    },
    {
      question: "Hva er «kontaktkravet» i interaksjonsproblemet?",
      options: ["Antagelsen om at påvirkning krever kontakt mellom utstrakte ting", "Kravet om at studenten må ta kontakt med sensor", "At sinnet må berøre Gud", "At kroppen må hvile for å tenke"],
      explanation: "Elisabeth bygger på at påvirkning krever kontakt — den ene utstrakte tingen skyver den andre. Et mulig dualist-motsvar er at kravet ikke må gjelde sinn-kropp-forholdet.",
    },
    {
      question: "Hva er en substans hos Descartes?",
      options: ["Noe som eksisterer selvstendig, ved seg selv", "Et kjemisk stoff", "En egenskap ved en ting", "En tanke i sinnet"],
      explanation: "En substans er grunnenheten som eksisterer ved seg selv. Dualismen hevder to slike: res cogitans og res extensa.",
    },
    {
      question: "På hvilket tidligere resultat bygger argumentet fra tvilbarhet?",
      options: ["Cogito — at tanken overlever den metodiske tvilen (kap. 1.1)", "Den onde ånds allmakt", "Gudsbeviset", "Idélæren"],
      explanation: "Cogito viste at tanken overlever tvilen mens kroppen kan betviles. Det brukes til å skille sinnet fra den tvilbare kroppen.",
    },
    {
      question: "Hva krever Elisabeth egentlig av Descartes?",
      options: ["En forklaring på mekanismen for samvirket, ikke bare en påstand om at det skjer", "At han benekter at sinn og kropp samvirker", "At han beviser at Gud finnes", "At han oppgir all filosofi"],
      explanation: "Elisabeth benekter ikke at samvirket skjer; hun krever at Descartes forklarer *hvordan*. Det er kravet om mekanisme hans svar ikke innfrir.",
    },
    {
      question: "Hvorfor er Descartes mot Elisabeth et fast sammenligningspar (S3)?",
      options: ["Descartes forsvarer dualismen, Elisabeth reiser interaksjonsproblemet fra innsiden av hans definisjoner", "De var i slekt", "De var enige om alt", "De skrev samme bok"],
      explanation: "Paret er skarpt fordi Elisabeth angriper dualismen med Descartes' egne begreper. En S3-oppgave krever begge presise og en navngitt akse.",
    },
    {
      question: "Hva er det sentrale poenget en redegjørelse for dualismen ikke får mangle?",
      options: ["At sinn og kropp er to substanser med motsatte vesentlige egenskaper", "At Descartes levde på 1600-tallet", "At hjernen har to hjernehalvdeler", "At sinnet er raskere enn kroppen"],
      explanation: "Mister du at dualismen handler om to substanser (uutstrakt tenkning mot utstrakt materie), faller redegjørelsen. Biografi er utenompensum (#3).",
    },
    {
      question: "Hvordan bør gjenbruksbonusen brukes i en sinn-kropp-drøfting?",
      options: ["Føre redegjørelsen av dualismen og interaksjonsproblemet inn i drøftingen med eksplisitt kobling", "Starte drøftingen helt på nytt uten å bruke redegjørelsen", "Kopiere andres besvarelse", "Utelate redegjørelsen for å spare tid"],
      explanation: "Poeng fra redegjørelsen skal føres inn i drøftingen («som vist i rekonstruksjonen …»). Å starte «på nytt» uten kobling straffes (#5).",
    },
  ],
  'exphil03-2-5': [
    {
      question: "Hva kjennetegner en analytisk dom?",
      options: ["Predikatet ligger allerede i subjektet — sann i kraft av begrepene alene", "Predikatet tilføyer noe nytt om verden", "Den kjennes bare gjennom erfaring", "Den er alltid usikker"],
      explanation: "En analytisk dom («ungkarer er ugifte») utvider ikke kunnskapen; predikatet er allerede tenkt med i subjektet. Skillet gjelder innhold, ikke kilde.",
    },
    {
      question: "Hva kjennetegner en syntetisk dom?",
      options: ["Predikatet tilføyer noe nytt til subjektet og utvider kunnskapen", "Predikatet ligger allerede i subjektet", "Den er sann per definisjon", "Den er alltid a priori"],
      explanation: "En syntetisk dom sier noe nytt om verden («kaffekoppen står til venstre»). Den kan være enten a priori eller a posteriori.",
    },
    {
      question: "Hva betyr at kunnskap er a priori?",
      options: ["Den kjennes uavhengig av erfaring, ved fornuften alene", "Den kjennes gjennom erfaring", "Den er alltid analytisk", "Den er alltid usann"],
      explanation: "A priori-kunnskap innses uten erfaring. Skillet a priori/a posteriori gjelder kunnskapens kilde — ikke det samme som analytisk/syntetisk.",
    },
    {
      question: "Hva er den viktigste presisjonsfeilen i dette temaet?",
      options: ["Å blande analytisk/syntetisk med a priori/a posteriori", "Å blande Kant med Descartes", "Å blande geometri med aritmetikk", "Å blande ren og anvendt geometri"],
      explanation: "De to distinksjonene er uavhengige (innhold mot kilde). Å slå dem sammen (#6) gjør syntetisk a priori uforståelig — og det er nettopp krysningen oppgaven tester.",
    },
    {
      question: "Hva er syntetisk a priori-kunnskap?",
      options: ["Kunnskap som er både informativ (syntetisk) og erfaringsuavhengig (a priori)", "Kunnskap som er både tom og erfaringsbasert", "Kunnskap som bare finnes i logikken", "Et annet navn for analytisk kunnskap"],
      explanation: "Syntetisk a priori er Kants sentrale tese: informativ OG uavhengig av erfaring. Empiristen benekter at slikt finnes.",
    },
    {
      question: "Hvorfor mener Kant at «7+5=12» er syntetisk?",
      options: ["Tallet 12 ligger ikke i begrepene 7, 5 og pluss — man må konstruere summen", "Fordi det må telles med epler", "Fordi det er sant per definisjon", "Fordi det er lært av erfaring"],
      explanation: "For Kant tilføyer summen noe nytt: 12 er ikke «tenkt med» i 7, 5 og addisjon. Likevel er det a priori — vi vet det uten erfaring.",
    },
    {
      question: "Hva er Kants andre eksempel på syntetisk a priori, ved siden av matematikk?",
      options: ["Årsakssetningen: «alt som skjer, har en årsak»", "«Alle ungkarer er ugifte»", "«Det regner ute»", "Relativitetsprinsippet"],
      explanation: "Årsakssetningen er syntetisk (sier noe substansielt om verden) og a priori (forutsettes, ikke avlest fra enkelterfaringer). Den viser at tesen også gjelder fysikkens grunnsetninger.",
    },
    {
      question: "Hva ville det bety for fornuften om Kant har rett i at syntetisk a priori finnes?",
      options: ["At fornuften alene kan gi informativ og nødvendig kunnskap om verden", "At all kunnskap kommer fra erfaring", "At matematikk er meningsløs", "At vi ikke kan vite noe"],
      explanation: "Hvis syntetisk a priori finnes, kan fornuften alene gi substansiell kunnskap — mot empiristen, som mener alt informativt må komme fra erfaring.",
    },
    {
      question: "Hva er ren (aksiomatisk) geometri ifølge Einstein?",
      options: ["Geometri som følger logisk av aksiomer — sikker, men sier intet om virkeligheten", "Geometri om det fysiske rommet — usikker", "En geometri uten aksiomer", "Kants navn på matematikken"],
      explanation: "Ren geometri er sann per definisjon (følger av aksiomene), men nettopp derfor tom om verden. Den ene halvdelen av Einsteins skille.",
    },
    {
      question: "Hva er anvendt geometri ifølge Einstein?",
      options: ["Geometri om det fysiske rommet — informativ, men empirisk og usikker", "Geometri som følger av aksiomer alene", "En geometri som er både sikker og informativ", "Kants syntetisk a priori"],
      explanation: "Anvendt geometri sier noe om virkeligheten, men er da et målespørsmål — empirisk og usikker. Ingen geometri er både sikker og informativ om verden.",
    },
    {
      question: "Hvilken Kant-tese rammer Einsteins ren/anvendt-skille?",
      options: ["At geometrien er syntetisk a priori-kunnskap om verden", "At opplysning er utgang fra umyndighet", "At sinn og kropp er ulike substanser", "At alle ungkarer er ugifte"],
      explanation: "Einstein splitter Kants «informativ og nødvendig» i to uforenlige deler (ren/anvendt) — så det finnes ikke plass til syntetisk a priori om det fysiske rommet.",
    },
    {
      question: "Hvorfor gjorde ikke-euklidsk geometri Einsteins innvending akutt?",
      options: ["Den viser at rommets faktiske geometri er et empirisk spørsmål, ikke noe fornuften avgjør a priori", "Den beviser at Euklid tok feil om alt", "Den viser at matematikk er umulig", "Den bekrefter Kants tese"],
      explanation: "Flere logisk konsistente geometrier finnes; hvilken som beskriver rommet, må måles. Dermed er a priori-kunnskap om det fysiske rommet vanskelig å forsvare.",
    },
    {
      question: "Hva er det sterkeste Kant-forsvaret mot Einstein (A-drøftingen)?",
      options: ["At Kant ikke hevdet a priori-kunnskap om et fysisk rom «der ute», men om rommet som form for vår anskuelse", "At Einstein ikke forsto matematikk", "At relativitetsteorien er feil", "At geometri ikke finnes"],
      explanation: "Leses Kant transcendentalt, tester Einstein en empirisk påstand av en annen type enn Kants tese — og da snakker de delvis forbi hverandre.",
    },
    {
      question: "Hvilken feil begår den som forteller om lyshastigheten og tvillingparadokset i en Kant/Einstein-oppgave?",
      options: ["#3 — relativitetsteori-populærstoff uten filosofisk poeng", "#6 — blande distinksjonene", "#4 — hoppe over delspørsmål", "#14 — gammelt pensum"],
      explanation: "Det filosofiske poenget er ren/anvendt geometri mot syntetisk a priori. Populærstoff om Einsteins fysikk er utenompensum-generalia (#3).",
    },
    {
      question: "Hva er kjerneaksen i en Kant-mot-Einstein-sammenligning (S3)?",
      options: ["Om det finnes syntetisk a priori-kunnskap om det fysiske rommet", "Om matematikk er nyttig", "Om Gud finnes", "Om sinn og kropp er ulike"],
      explanation: "Kant sier ja (fornuften alene gir informativ, nødvendig kunnskap om rommet), Einstein nei (ren/anvendt-skillet). Å navngi aksen løfter sammenligningen.",
    },
  ],
  'exphil03-2-6': [
    {
      question: "Hva er skillet mellom biologisk kjønn (sex) og sosialt kjønn (gender) hos Haslanger?",
      options: ["Sex er de biologiske kjennetegnene; gender er de sosiale rollene og posisjonene", "Sex er sosiale roller; gender er biologiske kjennetegn", "De betyr det samme", "Sex gjelder dyr, gender gjelder mennesker"],
      explanation: "Sex = kropp/anatomi; gender = sosial posisjon (roller, forventninger, hierarki). Å blande dem er den mest målte presisjonsfeilen (#6).",
    },
    {
      question: "Hvilket kjønnsbegrep hevder Haslanger primært er sosialt konstruert?",
      options: ["Sosialt kjønn (gender)", "Biologisk kjønn (sex)", "Begge på nøyaktig samme måte", "Ingen av dem"],
      explanation: "Haslanger hevder primært at gender — den sosiale posisjonen — er konstruert. Om også sex kan være begrepskonstruert, hører til drøftingen (H2025-vrien).",
    },
    {
      question: "Hva er konstruksjon av begreper hos Haslanger?",
      options: ["At våre kategorier er formet av sosiale praksiser", "At tingene selv formes fysisk av kategoriene", "At begreper ikke finnes", "At all kunnskap er umulig"],
      explanation: "Begrepskonstruksjon gjelder hvordan vi klassifiserer — hva vi teller som en kategori avhenger av praksis (mat-eksemplet). Det er en påstand om kategoriene, ikke tingene.",
    },
    {
      question: "Hva er konstruksjon av objekter hos Haslanger?",
      options: ["At tingene selv formes av at kategoriene brukes på dem", "At kategoriene bare er ord uten virkning", "At objekter ikke finnes", "At biologi bestemmer alt"],
      explanation: "Objektkonstruksjon: mennesker formes faktisk (atferd, muligheter, posisjon) av at de behandles som tilhørende en kategori. Kategorien «lager mennesker som passer navnet».",
    },
    {
      question: "Hvilket skille premierte H2025-veiledningen eksplisitt?",
      options: ["Mekanismen — skillet mellom konstruksjon av begreper og av objekter", "Skillet mellom Haslanger og Aristoteles", "Skillet mellom ren og anvendt geometri", "Skillet mellom løgn og bullshit"],
      explanation: "H2025 belønnet forståelse av den teoretiske mekanismen (begreper mot objekter), ikke bare konklusjonen «kjønn er sosialt konstruert».",
    },
    {
      question: "Hva illustrerer Haslangers mat-eksempel?",
      options: ["Konstruksjon av begreper — hva som telles som mat avhenger av sosiale praksiser", "Konstruksjon av objekter", "At mat er biologisk gitt", "Genealogisk eliminativisme"],
      explanation: "Det samme dyret er delikatesse ett sted og utenkelig føde et annet: kategorien «mat» trekker grensene gjennom praksis, ikke kjemien alene. Et begrepskonstruksjons-eksempel.",
    },
    {
      question: "Hva er en genealogisk undersøkelse hos Haslanger?",
      options: ["Å avdekke en kategoris historiske opprinnelse og funksjon", "Å kartlegge en persons slektstre", "Å måle biologiske forskjeller", "Å telle hvor ofte et begrep brukes"],
      explanation: "Genealogien avdekker hvordan en kategori oppsto, hvem den tjener og hvilket sosialt arbeid den gjør — et kritisk verktøy som kan vise at det «naturgitte» opprettholder et system.",
    },
    {
      question: "Hva er forskjellen på eliminativistisk og ikke-eliminativistisk konstruksjonisme?",
      options: ["Eliminativisme vil avskaffe kategorien; ikke-eliminativisme vil reformere den", "Eliminativisme vil reformere; ikke-eliminativisme vil avskaffe", "De handler om biologi", "De betyr det samme"],
      explanation: "Etter genealogien oppstår et normativt valg: avskaffe kategorien (eliminativisme) eller omdanne den til noe rettferdig (ikke-eliminativisme).",
    },
    {
      question: "Hva betyr det at «konstruert ikke er uvirkelig»?",
      options: ["At en konstruert kategori kan ha høyst reelle virkninger — penger er konstruert, fattigdom er ikke innbilt", "At konstruerte ting er innbilte", "At bare naturgitte ting er virkelige", "At kjønn ikke finnes"],
      explanation: "Det konstruerte kan være både virkelig og urettferdig. Å avvise slutningen «konstruert, altså uvirkelig» er en tydelig A-markør.",
    },
    {
      question: "Hva tester øde øy-tankeeksperimentet?",
      options: ["Hva sosialt kjønn (gender) krever av sosial kontekst", "Om biologisk kjønn finnes", "Om mennesker kan overleve alene", "Hvor gammel en kategori er"],
      explanation: "Siden gender er en sosial posisjon, tester scenen med den ensomme øyboeren om det finnes noe sosialt system å plasseres i — altså hva kategorien krever av kontekst.",
    },
    {
      question: "Hvilken feil begår den som sier «men øyboeren husker jo samfunnet» i øde øy-testen?",
      options: ["#13 — å ignorere/normalisere bort tankeeksperimentets premiss (at hun er alene)", "#6 — blande sex og gender", "#2 — mening uten grunner", "#14 — gammelt pensum"],
      explanation: "Eksperimentet fjerner den sosiale konteksten. Å smugle den inn igjen bryter premissdisiplinen (#13) — poenget er nettopp hva kategorien krever når konteksten er borte.",
    },
    {
      question: "Hvordan kan også biologisk kjønn (sex) være konstruert, ifølge H2025-vrien?",
      options: ["Begrepet «sex» kan være begrepskonstruert — grensedragningen er formet av oss, uten at kroppene er innbilte", "Kroppene er innbilte", "Sex er identisk med gender", "Biologi finnes ikke"],
      explanation: "Poenget er begrepskonstruksjon: hvordan biologene trekker grensene og hvilke trekk som teller, er formet av begreper og formål. Kroppene benektes ikke — begrep/objekt-skillet holder det presist.",
    },
    {
      question: "Hvorfor er skillet begrep/objekt avgjørende i H2025-drøftingen om biologisk kjønn?",
      options: ["Det lar oss si at begrepet «sex» kan være konstruert uten å benekte kroppene selv", "Det viser at sex og gender er det samme", "Det beviser at kjønn ikke finnes", "Det er irrelevant for spørsmålet"],
      explanation: "Uten skillet blir «sex er konstruert» tvetydig og kan overdrives til å benekte kroppen. Med skillet: begrepet/grensedragningen er konstruert, ikke nødvendigvis kroppene.",
    },
    {
      question: "Hvilken feil begår den som gjengir «kjønn er konstruert» uten å si hva som konstrueres?",
      options: ["En #6-variant — å miste mekanismen (begreper mot objekter)", "#14 — gammelt pensum", "#11 — sitatslurv", "Ingen feil"],
      explanation: "Mekanismen (hva som konstrueres og hvordan) er selve vurderingspunktet. Å hoppe over den mister det H2025-sensor premierte.",
    },
    {
      question: "Hvorfor gjør objektkonstruksjonen sosial konstruksjon til mer enn en påstand om ord?",
      options: ["Fordi den sier at klassifiseringen former virkeligheten — hvem folk faktisk blir", "Fordi den handler bare om språk", "Fordi den benekter at kategorier finnes", "Fordi den er biologisk"],
      explanation: "Objektkonstruksjon: kategorien former faktiske mennesker (vaner, muligheter, posisjon). Det er en påstand om virkeligheten, ikke bare om hvordan vi omtaler folk.",
    },
    {
      question: "Hva er gender ifølge Haslanger, mer presist?",
      options: ["En sosial posisjon i et system av forventninger, roller og hierarkier", "En biologisk egenskap ved kroppen", "En personlig følelse uten sosial side", "Et rent språklig fenomen uten virkning"],
      explanation: "Gender er en plass samfunnet tildeler i et system av forventninger og hierarkier. Nettopp derfor krever det sosial kontekst (øde øy-testen).",
    },
    {
      question: "Hva avdekker genealogien ofte om sosialt konstruerte kategorier?",
      options: ["At de fremstår som naturgitte, og at nettopp denne illusjonen gjør dem virkningsfulle", "At de alltid er nyttige", "At de er biologisk bestemt", "At de ikke har noen funksjon"],
      explanation: "Konstruerte kategorier framstår gjerne som uforanderlige/naturlige. Å avsløre at det «naturlige» er konstruert er det kritiske grepet.",
    },
    {
      question: "Hvilken feil er det å levere en politisk holdning om kjønn uten Haslangers begrepsapparat?",
      options: ["#2 — mening uten grunner", "#6 — upresise begreper", "#13 — ignorere premisser", "#4 — hoppe over delspørsmål"],
      explanation: "Eksamen tester filosofisk presisjon (sex/gender, begrep/objekt, genealogi), ikke standpunktet ditt. Ren holdning uten argument er «mening uten grunner» (#2).",
    },
    {
      question: "Hvordan viser «ungdom» samme mekanikk som kjønnsanalysen?",
      options: ["Begrepskonstruksjon (aldersgrensene varierer) og objektkonstruksjon (institusjoner former faktiske ungdommer)", "Bare biologisk konstruksjon", "Ingen konstruksjon i det hele tatt", "Bare eliminativisme"],
      explanation: "«Ungdom» er konstruert i begge forstander: kategoriens grenser varierer historisk (begrep), og skole/lovverk/marked former faktiske ungdommer (objekt).",
    },
    {
      question: "Hva sier verkstittelen «Kjønn og andre sosiale kategorier» om apparatets rekkevidde?",
      options: ["At samme mekanisme kan anvendes på flere kategorier enn kjønn", "At bare kjønn kan analyseres", "At kategorier ikke finnes", "At biologi er irrelevant overalt"],
      explanation: "Apparatet er generelt: sex/gender-logikken, begrep/objekt og genealogi kan brukes på race, «ungdom», «mat» osv. Kjønn er hovedeksemplet, ikke det eneste.",
    },
    {
      question: "Hva er det sentrale poenget en Haslanger-redegjørelse ikke får mangle?",
      options: ["Mekanismen — hva som konstrueres (begreper eller objekter) og hvordan", "Haslangers biografi", "En politisk konklusjon om likestilling", "Aristoteles' fire årsaker"],
      explanation: "Uten mekanismen (begrep/objekt) mister redegjørelsen det H2025-sensor premierte. Å bare gjengi konklusjonen holder ikke.",
    },
    {
      question: "Hva er sosial konstruksjon helt generelt hos Haslanger?",
      options: ["At noe er formet av sosiale praksiser snarere enn naturgitt", "At noe er innbilt og uvirkelig", "At noe er biologisk bestemt", "At noe er logisk nødvendig"],
      explanation: "Sosial konstruksjon = formet av praksis, ikke lest av naturen. Kan gjelde begreper (kategoriene) eller objekter (tingene selv).",
    },
    {
      question: "Hvorfor egner kjønnstemaet seg til S5-anvendelsesoppgaver?",
      options: ["Fordi apparatet er generelt og kan settes på nye caser (ungdom, mat, race)", "Fordi det bare finnes ett riktig svar", "Fordi det ikke krever begreper", "Fordi biologien avgjør alt"],
      explanation: "Siden mekanismen er allmenn, kan eksamen be deg anvende den på en ny kategori — noe som tester forståelse, ikke pugg.",
    },
    {
      question: "Hva er lærdommen fra H2025 om konklusjon mot mekanisme?",
      options: ["Å demonstrere mekanismen (hva/hvordan) belønnes over å bare slå fast konklusjonen", "Konklusjonen alene er nok for A", "Mekanismen er irrelevant", "Man skal utelate begge"],
      explanation: "H2025 belønnet forståelse av apparatet (begrep/objekt), ikke bare standpunktet «kjønn er konstruert». Mekanisme slår konklusjon.",
    },
    {
      question: "Hvordan bør gjenbruksbonusen brukes i en kjønnsdrøfting?",
      options: ["Føre sex/gender- og begrep/objekt-skillet fra redegjørelsen inn i drøftingen med eksplisitt kobling", "Starte drøftingen på nytt uten redegjørelsen", "Utelate redegjørelsen helt", "Kopiere Haslangers egne ord ordrett"],
      explanation: "H2025-vrien om biologisk kjønn hviler på begrepskonstruksjonen du allerede har gjort rede for. Å starte «på nytt» uten kobling straffes (#5).",
    },
  ],
  'exphil03-3-1': [
    {
      question: "Hva mener Aristoteles med eudaimonia?",
      options: ["Et vellykket, blomstrende liv — det gode liv som helhet, ikke en følelse", "En behagelig følelse man har i øyeblikket", "Størst mulig nytelse og minst mulig smerte", "Å gjøre sin plikt uavhengig av utfallet"],
      explanation: "Eudaimonia er et velfungerende liv, ikke en subjektiv følelse. Oversetter man det med «lykkefølelse», kollapser kontrasten mot Mill (feil #6).",
    },
    {
      question: "Hvorfor kaller Aristoteles lykken det «endelige målet»?",
      options: ["Fordi den alltid velges for sin egen skyld og aldri som middel til noe annet", "Fordi den kommer sist i livet, når man er gammel", "Fordi den er det vanskeligste målet å nå", "Fordi den er et middel til rikdom og ære"],
      explanation: "Rikdom og ære velges dels for annet; lykken velges alltid for sin egen skyld. Derfor er den kjedens endepunkt.",
    },
    {
      question: "Hva er det første trinnet i funksjonsargumentet?",
      options: ["Alt som har en funksjon har sitt gode i å utføre funksjonen godt", "Mennesket har en udødelig sjel", "Lykke er en følelse av tilfredshet", "Alle streber etter nytelse"],
      explanation: "Argumentet starter med at en tings gode ligger i å utføre funksjonen godt (god fløytespiller = spiller godt), og bygger derfra til menneskets funksjon.",
    },
    {
      question: "Hva er menneskets særegne funksjon ifølge funksjonsargumentet?",
      options: ["Fornuftsvirksomhet — sjelens virksomhet i samsvar med fornuften", "Vekst og ernæring", "Sansing og bevegelse", "Forplantning"],
      explanation: "Vekst deler vi med planter og sansing med dyr; fornuftsvirksomheten er særegen for mennesket. Derfor knyttes det gode livet til den.",
    },
    {
      question: "Hva konkluderer funksjonsargumentet med at eudaimonia er?",
      options: ["Å utøve fornuftsvirksomhet godt, i samsvar med dyd, gjennom et helt liv", "Å oppnå mest mulig nytelse over kortest tid", "Å følge samfunnets regler uten unntak", "En medfødt følelse man enten har eller ikke har"],
      explanation: "Lykken er en *virksomhet* man utfører over tid, ikke en tilstand man mottar. Teleologien fra kap. 2.2 ligger under.",
    },
    {
      question: "Hva er en dyd (areté) for Aristoteles?",
      options: ["En innøvd karakteregenskap som gjør at man virker godt i samsvar med fornuften", "En medfødt egenskap man ikke kan endre", "En regel gitt av samfunnet", "En følelse av tilfredshet"],
      explanation: "Dyd er en fast disposisjon i karakteren, ervervet ved øvelse — ikke medfødt og ikke bare en regel.",
    },
    {
      question: "Dyden mot er midten mellom hvilke to laster?",
      options: ["Feighet (for lite) og dumdristighet (for mye)", "Gjerrighet (for lite) og sløseri (for mye)", "Dovenskap og flittighet", "Ydmykhet og stolthet"],
      explanation: "Mot ligger mellom for lite dristighet (feighet) og for mye (dumdristighet). Gjerrighet/sløseri er ytterpunktene for gavmildhet.",
    },
    {
      question: "Hva betyr det at dydens midte er «relativ, ikke aritmetisk»?",
      options: ["Midten er det som passer for personen og situasjonen, ikke gjennomsnittet av ytterpunktene", "Midten er alltid nøyaktig halvveis mellom for mye og for lite", "Midten er den samme for alle mennesker", "Midten kan regnes ut med en formel"],
      explanation: "Riktig mengde mat for en idrettsutøver er ikke gjennomsnittet — midten treffes ved klokskap, ikke regnestykke.",
    },
    {
      question: "Hvordan erverves dydene ifølge Aristoteles?",
      options: ["Gjennom øvelse og vane — vi blir modige ved å gjøre modige handlinger", "Gjennom teoretisk kunnskap alene", "De er medfødte og kan ikke endres", "Gjennom en enkelt opplysende innsikt"],
      explanation: "Dydene formes som ferdigheter, ved gjentakelse, til det gode blir en del av karakteren. Derfor er oppdragelse viktig.",
    },
    {
      question: "Hva gjør en handling rett i dydsetikken?",
      options: ["At den er slik en dydig, klok person ville handlet i situasjonen", "At den følger det kategoriske imperativ", "At den maksimerer nytten for flest mulig", "At den er tillatt av loven"],
      explanation: "Rett handling defineres via karakter, ikke en formel. Den kloke *ser* hva situasjonen krever, som en erfaren lege.",
    },
    {
      question: "Hvilket lykkebegrep skiller Aristoteles fra Mill?",
      options: ["Aristoteles' eudaimonia er fornuftsvirksomhet i samsvar med dyd, mens Mills lykke er nytelse og fravær av smerte", "Aristoteles og Mill mener nøyaktig det samme med «lykke»", "Aristoteles mener lykke er nytelse, Mill mener det er dyd", "Begge mener lykke er å gjøre sin plikt"],
      explanation: "To tenkere kan si «lykke er målet» og mene helt ulike ting. Å se dette skillet løfter en S3-sammenligning.",
    },
    {
      question: "Hva er en vanlig innvending mot funksjonsargumentet?",
      options: ["At det er tvilsomt om mennesket har én funksjon, slik en kniv har", "At det ikke nevner nytelse i det hele tatt", "At det bygger på Kants kategoriske imperativ", "At det forutsetter at Gud finnes"],
      explanation: "En kniv er laget til å skjære, men mennesket er ikke laget til noe av en produsent — analogien kan anklages for å halte. Dette er drøftingsråstoff.",
    },
    {
      question: "Hva er den omdiskuterte siden ved å definere rett handling via «den dydige personen»?",
      options: ["At det kan virke sirkulært — den rette handling er den den dydige gjør, og den dydige gjør det rette", "At det gir for presise regler", "At det ignorerer karakter helt", "At det bare gjelder for filosofer"],
      explanation: "Kritikeren spør om dette gir reell handlingsveiledning når man står i valget, eller bare flytter problemet. En typisk S4-innvending.",
    },
    {
      question: "Hva er den korrekte kontrasten mellom Aristoteles og Kant om lykke?",
      options: ["Aristoteles gjør det gode livet til målet, mens Kant lar moralsk verdi være uavhengig av lykke", "Begge mener lykke er moralens eneste mål", "Kant gjør lykke til målet, Aristoteles avviser lykke helt", "Ingen av dem bruker begrepet lykke"],
      explanation: "For Kant har handlingen verdi via den gode viljen og plikten, uavhengig av utfall; for Aristoteles er det gode livet selve målet.",
    },
    {
      question: "Hva menes med at ikke alt har en midte?",
      options: ["Handlinger som er gale i seg selv, som drap, har ingen «riktig grad»", "At noen mennesker ikke kan bli dydige", "At midten bare finnes for fysiske handlinger", "At følelser ikke kan reguleres"],
      explanation: "Læren om midten gjelder dyder, ikke handlinger som er onde i seg selv — der finnes ingen passende mengde.",
    },
    {
      question: "Hva er koblingen mellom Aristoteles' etikk og teleologien fra kapittel 2.2?",
      options: ["Mennesket har et iboende formål (funksjon), og det gode er å realisere det — slik naturting er rettet mot sitt formål", "Etikken avviser at naturting har formål", "Etikken bygger på moderne årsak–virkning-kausalitet", "Det finnes ingen kobling"],
      explanation: "Funksjonsargumentet forutsetter det teleologiske verdenssynet: mennesket har et formål, og det gode livet realiserer det.",
    },
    {
      question: "Hvorfor bedømmes eudaimonia ut fra hele livet og ikke øyeblikket?",
      options: ["Fordi eudaimonia er en tilstand ved et vellykket liv som helhet, ikke en øyeblikksfølelse", "Fordi Aristoteles ikke bryr seg om følelser", "Fordi lykke bare finnes hos gamle mennesker", "Fordi følelser er upålitelige å måle"],
      explanation: "Man kan ikke avgjøre om noen har oppnådd eudaimonia ved å spørre hvordan de føler seg nå — livet må vurderes samlet.",
    },
    {
      question: "Hvilken feil begår en kandidat som oversetter eudaimonia med «lykkefølelse»?",
      options: ["Feil #6 — upresist begrep, som dessuten får kontrasten mot Mill til å kollapse", "Feil #10 — formalfeil", "Feil #12 — svare på begge oppgaver", "Feil #11 — sitatslurv"],
      explanation: "Å gjøre eudaimonia til en subjektiv følelse er en presisjonsfeil (#6) som ødelegger sammenligningen med Mills nytelsesbegrep.",
    },
    {
      question: "Hva sier utdraget om sinne («på rett person, i rett grad, til rett tid …») egentlig?",
      options: ["At dyden er en midte som treffes ved klokskap, relativ til situasjonen", "At man aldri bør bli sint", "At følelser alltid bør undertrykkes", "At sinne er en dyd i seg selv"],
      explanation: "Poenget er ikke å fjerne følelsen, men å rette den riktig — midten er relativ til situasjonen (rett grad, rett tid).",
    },
    {
      question: "Hva innebærer det at den fullt dydige gjør det rette «med glede»?",
      options: ["Gode vaner gjør at han vil det gode og setter pris på det, ikke gjør det motvillig", "At han bare gjør det rette når han har lyst", "At følelser er irrelevante for dyd", "At dyd er medfødt"],
      explanation: "For Aristoteles kjennetegner det den dydige at han gleder seg over det rette — moralsk oppdragelse former nettopp dette.",
    },
    {
      question: "Hvorfor er dydsetikken forankret i Aristoteles og ikke i Hursthouse i denne boka?",
      options: ["Fordi pensum kalibreres mot «Vite, være, gjøre»; Hursthouse er ute av pensum og gir null uttelling", "Fordi Hursthouse tar feil om dydene", "Fordi Hursthouse ikke skrev om etikk", "Fordi Aristoteles er lettere å forstå"],
      explanation: "Kalibreringsregelen: gammelt galleri gir null uttelling (feil #14). Dydsetikk forankres i Aristoteles og Foot.",
    },
    {
      question: "Hva er gjerrighet i Aristoteles' skjema?",
      options: ["Lasten «for lite», der gavmildhet er midten og sløseri er «for mye»", "Midten mellom to laster", "En dyd i seg selv", "Det samme som besindighet"],
      explanation: "Gavmildhet er midten; gjerrighet er mangelen (for lite) og sløseri overskuddet (for mye).",
    },
    {
      question: "Hva er gjenbruksbonusen når du drøfter «er lykken moralens mål?»",
      options: ["Å føre funksjonsargumentet fra (a) inn i drøftingen for å vise at Aristoteles' lykke ikke er nytelse", "Å gjenta oppgaveteksten ordrett", "Å skrive en helt ny redegjørelse i drøftingen", "Å unngå å nevne (a) i det hele tatt"],
      explanation: "Gjenbruksbonusen premierer å bære (a)-poenget videre. Å starte drøftingen på nytt straffes (feil #5).",
    },
    {
      question: "Hva er forskjellen mellom å velge noe «i seg selv» og «for noe annet»?",
      options: ["Det i seg selv verdifulle velges for sin egen skyld; det andre er bare middel", "Det er ingen forskjell for Aristoteles", "«I seg selv» betyr egoistisk, «for noe annet» betyr uselvisk", "Begge betyr at noe er et middel"],
      explanation: "Skillet bærer argumentet for at lykken er det endelige målet: bare den velges alltid for sin egen skyld.",
    },
    {
      question: "Hva er dydsetikkens sentrale spørsmål, sammenlignet med Kant og Mill?",
      options: ["«Hva slags menneske bør jeg være / hva ville en dydig person gjort?» framfor «hva er min plikt / hva gir mest nytte?»", "«Hvilken regel skal jeg følge?»", "«Hvordan maksimerer jeg egen nytelse?»", "«Hvilken lov krever samfunnet?»"],
      explanation: "Dydsetikken flytter fokus fra den enkelte handlingen til karakter og liv — det skiller den fra plikt- og nytteetikk.",
    },
    {
      question: "Hva er den korrekte lesningen av «funksjonen» i funksjonsargumentet?",
      options: ["Menneskets ergon: den virksomheten som er særegen for mennesket, nemlig fornuftsvirksomhet", "En jobb eller et yrke man har", "En biologisk drift man deler med dyr", "En rolle samfunnet tildeler en"],
      explanation: "Ergon er det særegent menneskelige — fornuftsvirksomhet — ikke et yrke eller en drift vi deler med dyr.",
    },
    {
      question: "Hvorfor er moralsk oppdragelse viktig hos Aristoteles?",
      options: ["Fordi dyder erverves ved vane, så gode vaner formet tidlig gjør at man senere vil det gode", "Fordi dyd er medfødt og bare må vekkes", "Fordi dyd kan læres av bøker alene", "Fordi loven krever det"],
      explanation: "Siden dyd er innøvd, former tidlige vaner karakteren slik at man senere *vil* og *gleder seg over* det rette.",
    },
    {
      question: "Hva er den korrekte innvendingen om «er» og «bør» mot funksjonsargumentet?",
      options: ["At det kan hoppe fra en beskrivelse (fornuft er særegen) til en norm (man bør leve fornuftig)", "At det bygger på et matematisk regnestykke", "At det forutsetter at nytelse er godt", "At det ignorerer fornuften"],
      explanation: "Selv om fornuft *er* det særegne, følger det ikke uten videre at man *bør* leve fornuftig. Bruk poenget uten å tilskrive det Hume (feil #14).",
    },
    {
      question: "Hva er styrken ved å definere rett handling via den dydige personen?",
      options: ["Det fanger at moralsk kompetanse er som en ferdighet — den kloke ser det rette i det konkrete tilfellet", "Det gir en enkel regel alle kan følge mekanisk", "Det gjør moralen uavhengig av karakter", "Det fjerner behovet for klokskap"],
      explanation: "Styrken er sensitivitet for det konkrete, der en stiv regel ville feilet — mens svakheten er faren for sirkularitet.",
    },
    {
      question: "Hva er «den vellykkede kynikeren» et eksempel på?",
      options: ["At man kan ha velvære og ytre goder uten å ha eudaimonia, fordi han mangler dyd", "At nytelse er nok for det gode livet", "At rikdom garanterer eudaimonia", "At Aristoteles mener alle rike er lykkelige"],
      explanation: "Casen skiller subjektivt velvære fra eudaimonia: uten dyd realiserer han ikke menneskets funksjon, uansett hvor behagelig han har det.",
    },
  ],
  'exphil03-3-2': [
    {
      question: "Hva er ifølge Kant det eneste som er godt uten forbehold?",
      options: ["Den gode vilje", "Lykke og nytelse", "Intelligens og talent", "Mot og handlekraft"],
      explanation: "Talent, mot og rikdom kan misbrukes; bare den gode viljen kan ikke bli ond. Den er god i kraft av selve viljen, ikke følgene.",
    },
    {
      question: "Hvorfor er den gode viljen god ifølge Kant?",
      options: ["I kraft av viljen til å gjøre det rette fordi det er rett, ikke på grunn av følgene", "Fordi den alltid gir gode resultater", "Fordi den maksimerer lykke for flest", "Fordi samfunnet belønner den"],
      explanation: "Selv om den ved uflaks ikke utretter noe, beholder den sin verdi — den «stråler som en juvel». Dette er bruddet med konsekvensetikken.",
    },
    {
      question: "Hva er forskjellen på å handle av plikt og av tilbøyelighet?",
      options: ["Plikt er å handle av aktelse for moralloven; tilbøyelighet er å handle av lyst, følelse eller egeninteresse", "Plikt er å følge loven; tilbøyelighet er å bryte den", "Plikt gjelder store valg; tilbøyelighet gjelder små", "Det er ingen forskjell for Kant"],
      explanation: "Bare handling av plikt har moralsk verdi. En handling av tilbøyelighet kan være i samsvar med plikten, men mangler moralsk verdi.",
    },
    {
      question: "Hva viser kremmereksemplet?",
      options: ["At en handling kan være i samsvar med plikten (ærlig) uten å ha moralsk verdi, fordi motivet er egeninteresse", "At ærlighet alltid lønner seg", "At følgene avgjør en handlings verdi", "At kjøpmenn ikke kan handle moralsk"],
      explanation: "Kjøpmannen som er ærlig fordi det er god forretning, handler i samsvar med plikt, men av tilbøyelighet — verdien ligger i motivet, ikke utfallet.",
    },
    {
      question: "Hva er en maksime hos Kant?",
      options: ["Det subjektive prinsippet du faktisk handler etter — handling pluss hensikt", "En allmenn lov gitt av staten", "En følelse som driver handlingen", "Følgene av en handling"],
      explanation: "Det kategoriske imperativ prøver maksimen, ikke handlingen isolert. Derfor må maksimen formuleres presist før testen.",
    },
    {
      question: "Hva kjennetegner et hypotetisk imperativ?",
      options: ["Det er betinget: «hvis du vil X, så gjør Y» — og forplikter bare den som har målet X", "Det gjelder ubetinget for alle", "Det er en moralsk plikt", "Det handler bare om følelser"],
      explanation: "Et hypotetisk imperativ faller bort om man ikke har målet. Moralloven er nettopp ikke hypotetisk, men kategorisk.",
    },
    {
      question: "Hva kjennetegner det kategoriske imperativ?",
      options: ["Det er ubetinget og gjelder uansett hvilke mål du har: handle bare etter en maksime du kan ville som allmenn lov", "Det gjelder bare hvis du vil oppnå et bestemt mål", "Det er en tommelfingerregel basert på erfaring", "Det måler følgene av handlingen"],
      explanation: "Moralen er kategorisk fordi en plikt ikke kan avhenge av hva du tilfeldigvis ønsker. Å blande det med det hypotetiske er feil #6.",
    },
    {
      question: "Hva er de tre trinnene i universaliseringstesten?",
      options: ["Formuler maksimen → tenk den som allmenn lov → sjekk om den kan villes uten selvmotsigelse", "Regn ut følgene → sammenlign med alternativer → velg det beste utfallet", "Spør hva den dydige ville gjort → øv → gjenta", "Spør samfunnet → følg flertallet → juster"],
      explanation: "Testen spør om maksimen opphever seg selv når den universaliseres — ikke om følgene er ubehagelige.",
    },
    {
      question: "Hvorfor stryker maksimen «gi løfter du ikke akter å holde» i universaliseringstesten?",
      options: ["Fordi institusjonen løfte ville bryte sammen om alle gjorde det — maksimen opphever sin egen mulighetsbetingelse", "Fordi løftebrudd alltid får dårlige følger", "Fordi de fleste synes det er ubehagelig", "Fordi loven forbyr det"],
      explanation: "Selvmotsigelsen er logisk, ikke konsekvensbasert: hvis ingen stolte på løfter, kunne man ikke oppnå vinningen ved å love falskt.",
    },
    {
      question: "Hva menes med at mennesket er et «formål i seg selv»?",
      options: ["At man alltid også skal behandle mennesket som formål, aldri bare som middel", "At man aldri kan bruke andre til noe", "At mennesket er det viktigste dyret", "At alle har samme mål i livet"],
      explanation: "Å bruke noen som middel er tillatt (bakeren gir deg brød); å bruke dem bare som middel — som rent redskap — er forbudt. Ordet «bare» er avgjørende.",
    },
    {
      question: "Hva er skillet mellom verdighet og pris hos Kant?",
      options: ["Det som har pris kan erstattes av noe likeverdig; det som har verdighet er uerstattelig", "Verdighet gjelder rike, pris gjelder fattige", "De betyr det samme", "Pris gjelder mennesker, verdighet gjelder varer"],
      explanation: "Mennesket har verdighet (Würde), ikke pris: det kan ikke prissettes eller byttes ut. Dette er broen til Velleman i kap. 3.5.",
    },
    {
      question: "Hvilket motiv gir en handling moralsk verdi ifølge Kant?",
      options: ["Aktelse for moralloven (plikt)", "Kjærlighet og sympati", "Ønsket om et godt utfall", "Frykt for straff"],
      explanation: "Bare pliktmotivet — respekt for den loven fornuften gir seg selv — gir moralsk verdi. Følelser kan ledsage, men garanterer ikke rett handling.",
    },
    {
      question: "Hva er den vanligste enkeltsammenligningen i EXPHIL03-arkivet?",
      options: ["Kant mot Mill", "Platon mot Aristoteles", "Descartes mot Elisabeth", "Locke mot Held"],
      explanation: "Kant mot Mill (S3) er den hyppigste. Kjerneaksen er «hva gjør en handling rett»: sinnelag mot konsekvenser.",
    },
    {
      question: "Langs hvilken akse står Kant og Mill i klarest motsetning?",
      options: ["Sinnelag (Kant) mot konsekvenser (Mill)", "Fornuft mot følelse", "Individ mot samfunn", "Teori mot praksis"],
      explanation: "Kant lar den gode vilje og maksimens form avgjøre; Mill lar følgene avgjøre. Samme utfall kan vurderes ulikt av de to.",
    },
    {
      question: "Hva er Kants svar på innvendingen om at pliktetikken er «kald»?",
      options: ["At pliktmotivet er pålitelig — det holder også når følelsene svikter og mot dem man ikke liker", "At følelser er onde og bør undertrykkes", "At følgene er det som betyr noe likevel", "At innvendingen er meningsløs"],
      explanation: "Kant nekter ikke at kjærlighet er verdifullt, men kjærlighet svinger med humør; plikten er stabil. Å reise innvendingen og gi svaret løfter til A.",
    },
    {
      question: "Hvilken feil begår en kandidat som fremstiller Kants morallov som «regler fra samfunnet»?",
      options: ["Feil #6 — moralloven er fornuftens egen lov (autonomi), ikke normer påført utenfra", "Feil #10 — formalfeil", "Feil #12 — svare på begge oppgaver", "Feil #3 — leksikonsvar"],
      explanation: "Kants poeng er autonomi: fornuften gir seg selv loven. Å gjøre den til autoritet utenfra er en presisjonsfeil (#6).",
    },
    {
      question: "Hva betyr det at en handling er «i samsvar med plikten» men ikke «av plikt»?",
      options: ["Den ytre handlingen er riktig, men motivet er ikke aktelse for moralloven — så den mangler moralsk verdi", "Den er både riktig og moralsk verdifull", "Den bryter loven, men føles riktig", "Den er alltid umoralsk"],
      explanation: "Kremmeren handler i samsvar med plikten (gir riktig veksel), men av egeninteresse. Bare handling av plikt har moralsk verdi.",
    },
    {
      question: "Hvorfor må moralloven være kategorisk og ikke hypotetisk?",
      options: ["Fordi en moralsk plikt ikke kan avhenge av hvilke mål du tilfeldigvis har", "Fordi kategoriske bud er lettere å huske", "Fordi samfunnet krever det", "Fordi følgene da blir bedre"],
      explanation: "Var «du skal ikke lyve» hypotetisk, ville bare den med et bestemt mål være forpliktet. Moralen ville da ikke være ubetinget forpliktende.",
    },
    {
      question: "Hva er drøftingsråstoffet i at universaliseringstesten forbyr velmenende hvite løgner?",
      options: ["At testen av og til gir kontraintuitive svar — er det en styrke eller svakhet at den ikke ser på følgene?", "At testen alltid tar feil", "At følgene alltid bør avgjøre", "At hvite løgner er tillatt hos Kant"],
      explanation: "Falske positive/negative er en reell innvending mot testens presisjon, og godt materiale for en S4-drøfting.",
    },
    {
      question: "Hva er hensikten med å formulere maksimen presist før testen?",
      options: ["Fordi en upresis maksime gir en misvisende test — det kategoriske imperativ prøver nettopp maksimen", "Fordi lengre maksimer alltid består", "Fordi maksimen skal skjule hensikten", "Fordi følgene skal med i maksimen"],
      explanation: "Maksimen må inneholde både handling og hensikt. Formulerer man den upresist, tester man noe annet enn det man faktisk gjør.",
    },
    {
      question: "Hva er det avgjørende ordet i menneskeformålsformelen?",
      options: ["«Bare» — det forbudte er å bruke noen *bare* som middel, ikke å bruke dem som middel", "«Alltid» — man må alltid ofre seg for andre", "«Aldri» — man kan aldri be andre om hjelp", "«Formål» — bare mål teller"],
      explanation: "Å bruke bakeren som middel til brød er tillatt. Forbudet gjelder å redusere noen til rent redskap, uten hensyn til deres frie fornuft.",
    },
    {
      question: "Hvilket verk utvikler Kant sin pliktetikk i (i dette pensumet)?",
      options: ["«Grunnlegging av moralens metafysikk»", "«Kritikk av den rene fornuft»", "«Hva er opplysning?»", "«Den nikomakiske etikk»"],
      explanation: "Etikken med god vilje, plikt, kategorisk imperativ og menneskeverd står i «Grunnlegging av moralens metafysikk» (VVG kap. 14 ⚠). «Hva er opplysning?» er Vite-siden (kap. 1.4).",
    },
    {
      question: "Hvorfor ser Kant bort fra følgene når han vurderer moralsk verdi?",
      options: ["Fordi to identiske utfall kan ha helt ulik moralsk verdi alt etter sinnelaget bak", "Fordi følgene aldri kan forutses", "Fordi følgene alltid er dårlige", "Fordi bare Gud kjenner følgene"],
      explanation: "Kremmerens ærlighet og den ekte pliktoppfyllerens ærlighet har samme utfall, men ulik verdi. Derfor må verdien ligge i motivet.",
    },
    {
      question: "Hvordan henger Kants verdighetsbegrep sammen med Velleman (kap. 3.5)?",
      options: ["Vellemans skille mellom personens verdi (verdighet, ubetinget) og gode (velferd, betinget) bygger på Kants verdighet/pris-skille", "Velleman avviser Kants verdighetsbegrep helt", "De har ingenting med hverandre å gjøre", "Velleman gjør verdighet til en pris"],
      explanation: "Verdighet/pris-skillet er broen: Velleman argumenterer for at verdigheten ikke kan veies mot velferd i eutanasidebatten.",
    },
    {
      question: "Hva er den korrekte lesningen av «den gode viljen stråler som en juvel»?",
      options: ["At den gode viljens verdi er iboende og uavhengig av om den får utrettet noe", "At gode handlinger alltid belønnes", "At viljen må være vakker", "At følgene gjør viljen verdifull"],
      explanation: "Bildet uttrykker at nytten eller unytten verken legger til eller trekker fra verdien — den er god i seg selv.",
    },
    {
      question: "Hva må til for at en handling skal ha moralsk verdi hos Kant?",
      options: ["At den er gjort av plikt — av aktelse for moralloven, ikke av tilbøyelighet", "At den fører til mest mulig lykke", "At den gjøres med sterk følelse", "At den blir belønnet av samfunnet"],
      explanation: "Moralsk verdi krever rett motiv (plikt). Handling som bare er i samsvar med plikt, men av egeninteresse, teller ikke.",
    },
    {
      question: "Hva sier maksime-verkstedet om maksimen «jeg gir villedende komplimenter for å glede»?",
      options: ["Den stryker: universalisert mister komplimenter sin troverdighet, så hensikten kan ikke lenger oppnås", "Den består lett fordi den er velmenende", "Den er umulig å teste", "Den er et hypotetisk imperativ"],
      explanation: "Selv en velmenende usannhet stryker, fordi allmenn løgn for å glede undergraver komplimentets funksjon. Et strengt, drøftingsverdig resultat.",
    },
    {
      question: "Hvilken feil begår en kandidat som forteller kremmerhistorien uten poenget?",
      options: ["Feil #1 — gjengivelse uten å få fram at moralsk verdi ligger i pliktmotivet, ikke den ytre handlingen", "Feil #13 — ignorere premissene", "Feil #10 — formalfeil", "Feil #14 — utenom-pensum"],
      explanation: "Å referere eksemplet uten det rett-gjørende poenget (motivet avgjør) er gjengivelse uten innhold — feil #1.",
    },
    {
      question: "Hva er kjernen i Kants forsvar mot «kald pliktetikk», sett mot Held og Mill?",
      options: ["At plikten sikrer rett handling også uten den rette følelsen — pålitelighet der følelser er lunefulle", "At følelser er verdiløse", "At man aldri bør hjelpe venner", "At konsekvensene tross alt avgjør"],
      explanation: "Held og Mill skjerper innvendingen fra hver sin kant; Kant svarer at pliktmotivet er stabilt der kjærlighet svinger med sympati og humør.",
    },
    {
      question: "Hva er den korrekte kontrasten mellom Kant og Aristoteles om lykke?",
      options: ["For Kant har handlingen moralsk verdi uavhengig av lykke; for Aristoteles er det gode livet moralens mål", "Begge gjør lykke til moralens eneste mål", "Aristoteles avviser lykke, Kant hyller den", "Ingen av dem bruker begrepet lykke"],
      explanation: "Dette er trekantdrøftingen om moralens forhold til lykken: plikt (Kant) mot eudaimonia som mål (Aristoteles).",
    },
  ],
  'exphil03-3-3': [
    {
      question: "Hva sier nytteprinsippet?",
      options: ["Handlinger er rette i den grad de fremmer lykke, gale i den grad de fremmer det motsatte", "Handlinger er rette hvis de er gjort av plikt", "Handlinger er rette hvis en dydig person ville gjort dem", "Handlinger er rette hvis de følger loven"],
      explanation: "Nytteprinsippet (største lykke-prinsippet) gjør følgene for lykken til det avgjørende — ikke motivet eller karakteren.",
    },
    {
      question: "Hva mener Mill med «lykke»?",
      options: ["Nytelse og fravær av smerte", "Fornuftsvirksomhet i samsvar med dyd", "Å gjøre sin plikt uavhengig av utfall", "Rikdom og ære"],
      explanation: "Mill deler ordet «lykke» med Aristoteles, men mener noe helt annet — nytelse og fravær av smerte, ikke eudaimonia.",
    },
    {
      question: "Hva innebærer upartiskheten hos Mill?",
      options: ["Hver enkelts lykke teller likt — egen lykke veier ikke tyngre enn en fremmeds", "Man skal fremme sin egen lykke først", "Bare de flittiges lykke teller", "Følelser skal holdes utenfor"],
      explanation: "Utilitaristen skal være «like upartisk som en velvillig og uinteressert tilskuer». Dette gir teorien både styrke og dens omdiskuterte side.",
    },
    {
      question: "Hva er Mills svar på «fornøyd gris»-innvendingen?",
      options: ["Gleder skiller seg i kvalitet, ikke bare mengde — de høyere rangeres over de lavere", "At nytelse er alt som betyr noe", "At følelser er onde", "At man skal følge plikten i stedet"],
      explanation: "Kvalitetsskillet gjør utilitarismen til noe mer enn en lære for svin. Dette gjør Mill til kvalitativ, ikke ren kvantitativ, hedonist.",
    },
    {
      question: "Hvem avgjør hvilken glede som er «høyere» ifølge Mill?",
      options: ["Det kompetente flertall — de som har erfart begge slags gleder", "Filosofene alene", "Flertallet i befolkningen uansett erfaring", "Den som har mest nytelse"],
      explanation: "Bare den som kjenner både høyere og lavere gleder kan dømme. «Bedre en misfornøyd Sokrates enn en fornøyd dåre.»",
    },
    {
      question: "Hva betyr «bedre en misfornøyd Sokrates enn en fornøyd dåre»?",
      options: ["Den kompetente dommer velger den høyere gleden selv om den gir mindre samlet tilfredshet", "At kunnskap gjør ulykkelig", "At man alltid bør være misfornøyd", "At dårer ikke fortjener lykke"],
      explanation: "Poenget er kvalitetsskillet: Sokrates kjenner begge slags gleder, dåren bare den ene — derfor teller Sokrates' dom.",
    },
    {
      question: "Hva er beregnings-innvendingen mot utilitarismen?",
      options: ["At man ikke rekker å kalkulere følgene på den allmenne lykke før hver handling", "At lykke ikke kan måles i det hele tatt", "At følgene alltid er dårlige", "At bare egen lykke teller"],
      explanation: "Innvendingen er praktisk: kravet om å regne ut samlet nytte før hver handling virker umulig.",
    },
    {
      question: "Hva er Mills svar på beregnings-innvendingen?",
      options: ["Prinsippet er et kriterium, ikke en prosedyre — menneskehetens erfaring gir tommelfingerregler", "At man må regne før hver handling likevel", "At følelser skal avgjøre i stedet", "At beregning er umulig, så teorien forkastes"],
      explanation: "Man trenger ikke lese hele Bibelen før hver handling — man har allerede lært reglene. Tommelfingerregler er nedfelt erfaring.",
    },
    {
      question: "Hva er forskjellen på handlings- og regelutilitarisme?",
      options: ["Handlingsutilitarisme vurderer den enkelte handlingen; regelutilitarisme vurderer regelen den faller inn under", "Handlingsutilitarisme gjelder store valg, regelutilitarisme små", "De er to navn på det samme", "Handlingsutilitarisme ser på motivet, regelutilitarisme på følgene"],
      explanation: "Skillet avgjør hvor hardt rettferdighetsinnvendingen biter. Å blande de to nivåene er en målt feil (#6).",
    },
    {
      question: "Hva er rettferdighetsinnvendingen mot utilitarismen?",
      options: ["At teorien, siden bare summen teller, kan se ut til å tillate å ofre den ene for de mange", "At teorien er for streng mot enkeltmennesket", "At teorien ignorerer følgene", "At teorien krever for mye beregning"],
      explanation: "Fordi bare den samlede lykken teller, kan enkeltmenneskets krav overkjøres. Slaveri-testen er den skarpeste formen (kap. 3.4).",
    },
    {
      question: "Hvorfor er Mill en kvalitativ og ikke ren kvantitativ hedonist?",
      options: ["Fordi han rangerer gleder etter kvalitet, ikke bare etter mengde nytelse", "Fordi han avviser at nytelse er godt", "Fordi han bare teller antall gleder", "Fordi han mener alle gleder er like gode"],
      explanation: "Kvalitetsskillet (høyere/lavere gleder) er nettopp det som skiller Mill fra ren kvantitativ hedonisme. Å overse det er feil #6.",
    },
    {
      question: "Hva er Mills kritikk av Kants imperativ-utledning?",
      options: ["At Kant egentlig viser at umoralske maksimer får uheldige *følger*, og dermed smugler inn nytte", "At Kants imperativ er for enkelt", "At Kant ikke bryr seg om plikt", "At Kant har rett på alle punkter"],
      explanation: "Ifølge Mill er det ikke en logisk motsigelse Kant påviser, men uheldige konsekvenser — så pliktetikken hviler skjult på nytte.",
    },
    {
      question: "Hva er den vanligste sammenligningen Mill inngår i?",
      options: ["Kant mot Mill — sinnelag mot konsekvenser", "Mill mot Locke", "Mill mot Descartes", "Mill mot Haslanger"],
      explanation: "Kant mot Mill (S3) er arkivets hyppigste par. Kjerneaksen er hva som gjør en handling rett: sinnelag eller konsekvenser.",
    },
    {
      question: "Hva teller i nytteprinsippet — motiv eller følger?",
      options: ["Følgene — en handling med dårlig motiv, men gode følger, er ikke gal av den grunn", "Motivet — bare handling av plikt teller", "Både motiv og følger like mye", "Verken motiv eller følger"],
      explanation: "Utilitarismen er konsekvensetikk: følgene avgjør. Dette er motsatsen til Kant, som lar sinnelaget avgjøre.",
    },
    {
      question: "Hva er Mills lykkebegrep sammenlignet med Aristoteles'?",
      options: ["Mill: nytelse og fravær av smerte; Aristoteles: fornuftsvirksomhet i samsvar med dyd", "De mener nøyaktig det samme", "Mill: dyd; Aristoteles: nytelse", "Begge mener lykke er å gjøre sin plikt"],
      explanation: "To tenkere kan si «lykke er målet» og mene helt ulike ting — presisjonspoenget i S3-sammenligningen om lykkens rolle.",
    },
    {
      question: "Hva er arkivets vanligste drøftingsspørsmål om Mill?",
      options: ["Er utilitarismen en holdbar moralteori?", "Var Mill en god forfatter?", "Levde Mill etter sin egen lære?", "Er nytelse alltid godt?"],
      explanation: "«Er utilitarismen holdbar?» (S4) er det hyppigste. Kjernen er rettferdighetsinnvendingen og utilitaristens svar.",
    },
    {
      question: "Hvilken feil begår en kandidat som lister innvendinger mot Mill uten å gi Mills svar?",
      options: ["Feil #1 — gjengivelse/behandling uten å vise teorien slik den forsvares; et S1-toppsvar krever par", "Feil #10 — formalfeil", "Feil #12 — svare på begge oppgaver", "Feil #13 — ignorere premissene"],
      explanation: "Innvending og svar hører sammen som et par (gris + kvalitet; beregning + tommelfingerregler). Å utelate svaret er feil #1.",
    },
    {
      question: "Hva sier utdraget om Bibelen og beregning?",
      options: ["At man ikke trenger å regne følger før hver handling, like lite som man leser hele Bibelen først — reglene er lært", "At utilitarismen er en religion", "At man alltid må regne før hver handling", "At kristen etikk er ubrukelig"],
      explanation: "Sammenligningen viser at nytteprinsippet er et kriterium, ikke en prosedyre — menneskeheten har allerede lært hvilke handlinger som fremmer lykke.",
    },
    {
      question: "Hvordan gir regelnivået utilitaristen et svar på rettferdighetsinnvendingen?",
      options: ["Praksiser som å straffe uskyldige gir sjelden mest nytte på sikt (frykt, tap av tillit), så regelen forbyr dem", "Regelnivået ignorerer følgene helt", "Regelnivået gjør enkeltmennesket viktigst", "Regelnivået avviser nytte"],
      explanation: "På regelnivå vurderes regelen alle skulle følge; regler som verner den enkelte gir mest samlet nytte over tid. Dette demper innvendingen.",
    },
    {
      question: "Hva er innvendingen mot Mills kvalitetsskille?",
      options: ["At hvis kvalitet ikke er en mengde nytelse, har Mill smuglet inn et ikke-nytelsesgode og er ikke lenger hedonist", "At kvalitet er lettere å måle enn mengde", "At Mill overser lavere gleder helt", "At kvalitetsskillet gjør teorien for enkel"],
      explanation: "Dette er godt drøftingsråstoff: redder kvalitetsskillet Mill, eller forlater han hedonismen? Mills forsvar er at det fortsatt er *gleder* som rangeres.",
    },
    {
      question: "Hva mener Mill med «samlet lykke»?",
      options: ["Den totale lykken for alle berørte, ikke bare for den handlende", "Bare den handlendes egen lykke", "Lykken til flertallet i staten", "Summen av alle følelser man har hatt"],
      explanation: "Det er denne summeringen over alle berørte som rettferdighetsinnvendingen angriper: den enkelte kan overkjøres av summen.",
    },
    {
      question: "Hvorfor forankres utilitarismen i Mill og ikke i Smart i denne boka?",
      options: ["Fordi pensum kalibreres mot «Vite, være, gjøre»; Smart er ute av pensum og gir null uttelling", "Fordi Smart tok feil om nytte", "Fordi Smart ikke skrev om etikk", "Fordi Mill er eldre"],
      explanation: "Kalibreringsregelen: gammelt galleri gir null uttelling (feil #14). Utilitarismen forankres i Mills «Utilitarisme».",
    },
    {
      question: "Hva er slaveri-testen?",
      options: ["Den skarpeste formen av rettferdighetsinnvendingen: kan slaveri rettferdiggjøres hvis nok mange nyter godt av det?", "En test på om man er utilitarist", "Mills argument for slaveri", "En historisk hendelse Mill beskriver"],
      explanation: "Slaveri-testen presser rettferdighetsinnvendingen til sitt ytterste og behandles fullt i kap. 3.4. Den utfordrer om summen kan overkjøre den enkelte.",
    },
    {
      question: "Hva vil det si at nytteprinsippet er et «kriterium, ikke en prosedyre»?",
      options: ["Det angir hva som gjør en handling rett, men er ikke en kalkyle man må kjøre før hver handling", "Det er en fast oppskrift for hver enkelt situasjon", "Det gjelder bare i tvilstilfeller", "Det er en juridisk regel"],
      explanation: "Skillet er Mills svar på beregnings-innvendingen: man handler etter tommelfingerregler og regner selv bare når reglene svikter.",
    },
    {
      question: "Hvordan skiller Mills syn seg fra Kants på «hva gjør en handling rett»?",
      options: ["Mill: følgene (samlet lykke); Kant: sinnelaget (god vilje, maksimens form)", "Mill: plikt; Kant: nytelse", "Begge: følgene", "Begge: sinnelaget"],
      explanation: "Der Kant måler innsiden (viljen), måler Mill utsiden (utfallet). Dette er kjerneaksen i den vanligste sammenligningen.",
    },
    {
      question: "Hva er de høyere gledene hos Mill?",
      options: ["De intellektuelle, estetiske og moralske gledene", "De mest intense kroppslige nytelsene", "De gledene som varer lengst", "De gledene flest mennesker har"],
      explanation: "De høyere gledene rangeres over de lavere (kroppslige) i kvalitet — det er dette som besvarer «gris»-innvendingen.",
    },
    {
      question: "Hva er upartiskhetens omdiskuterte konsekvens?",
      options: ["At hensynet til flertallet kan overkjøre den enkelte, siden bare summen teller", "At man alltid må ofre seg selv", "At egen lykke teller mest", "At følelser blir irrelevante"],
      explanation: "Upartiskhet gir teorien styrke (ingen særbehandles), men også dens mest omdiskuterte side: den enkelte kan telles ned mot summen.",
    },
    {
      question: "Hva er den korrekte lesningen av at Mill svarer på innvendinger selv?",
      options: ["Mill formulerer innvendinger mot egen teori og gir svar — og det er paret innvending + svar eksamen tester", "Mill ignorerer alle innvendinger", "Mill innrømmer at teorien er uholdbar", "Mill overlater innvendingene til leseren"],
      explanation: "Mill er sitt eget mest krevende motargument. Å gjengi innvendingene med hans svar viser at man forstår teorien som forsvart.",
    },
    {
      question: "Hvorfor er handling/regel-skillet viktig i holdbarhetsdrøftingen?",
      options: ["Fordi rettferdighetsinnvendingen biter hardere på handlingsnivå, mens regelnivå gir utilitaristen et forsvar", "Fordi handlingsnivået alltid er riktig", "Fordi regelnivået avviser nytte", "Fordi skillet ikke betyr noe for innvendingene"],
      explanation: "Å spille ut skillet løfter drøftingen: på regelnivå kan man si at rettferdige regler gir mest nytte over tid.",
    },
    {
      question: "Hva er kjernen i et A-svar på «er utilitarismen holdbar?»",
      options: ["Å reise rettferdighetsinnvendingen, gi utilitaristens svar og veie dem, med forbeholden konklusjon", "Å hevde at teorien er perfekt uten innvendinger", "Å liste alle innvendinger uten svar", "Å konkludere uten grunner"],
      explanation: "Ensidig bygging uten innvending er feil #8. A-nivå krever reell veiing av innvending mot svar, ikke bare listing.",
    },
  ],
  'exphil03-3-4': [
    {
      question: "Hva er en teoris «rett-gjørende egenskap»?",
      options: ["Det teorien sier avgjør om en handling er rett — dyd, plikt eller nytte", "Egenskapen som gjør teorien mest populær", "Teoriens forfatter", "Det historiske opphavet til teorien"],
      explanation: "Første trinn i firetrinnmetoden er å identifisere den rett-gjørende egenskapen: dyd/karakter (Aristoteles), plikt/maksime (Kant), nytte (Mill).",
    },
    {
      question: "Hva er de fire trinnene i firetrinnmetoden?",
      options: ["Identifiser rett-gjørende egenskap → anvend på casen → få fram divergens → vurder med grunner", "Les → oversett → oppsummer → konkluder", "Velg teori → forsvar den → avvis de andre → avslutt", "Beskriv → fortell → gjenta → avrund"],
      explanation: "Metoden sikrer at du bruker teorien på casen (ikke bare refererer den) og vurderer med grunner (ikke bare mening).",
    },
    {
      question: "Hva er premissdisiplin?",
      options: ["Å lese casens premisser som stipulasjoner, ikke som empiri man kan bestride", "Å alltid være enig i premissene moralsk", "Å legge til egne premisser i casen", "Å forkaste caser med urealistiske premisser"],
      explanation: "Tankeeksperimentets premisser ER poenget. Å svare «men i virkeligheten ville …» er å rømme fra det casen tester (feil #13).",
    },
    {
      question: "Hvorfor presses utilitarismen mest av slaveri-casen (den snille slaveeieren)?",
      options: ["Fordi velferden stipuleres høyere enn i frihet, så den følge-avhengige teorien mangler et vern mot å bruke mennesker som midler", "Fordi Mill var tilhenger av slaveri", "Fordi utilitarismen ignorerer velferd", "Fordi teorien er logisk selvmotsigende"],
      explanation: "Når velferdsregnestykket snus (velferden er høy), biter rettferdighetsinnvendingen hardt: bare summen teller, og enkeltmennesket kan overkjøres.",
    },
    {
      question: "Hvordan forklarer Kant best hvorfor den snille slaveeieren likevel handler galt?",
      options: ["Ordningen bruker menneskene bare som midler og krenker deres verdighet, som ikke kan veies mot velferd", "Ordningen gir for lite samlet lykke", "Ordningen bryter en tommelfingerregel", "Ordningen er udydig, men ellers tillatt"],
      explanation: "Kant leverer forklaringen mest direkte: verdigheten er ukrenkelig, uavhengig av hvor godt slavene behandles.",
    },
    {
      question: "Hva er divergens i case-analysen?",
      options: ["Der teoriene gir ulikt svar, eller samme svar av ulike grunner", "Der teoriene alltid er enige", "Der en teori tar feil", "Der casen mangler premisser"],
      explanation: "Divergensen er det oppgavene oftest er ute etter — den avslører teorienes ulike rett-gjørende egenskaper.",
    },
    {
      question: "Betyr konvergens (samme svar) at valget av teori er likegyldig?",
      options: ["Nei — begrunnelsene skiller seg og gir ulike svar i randtilfellene", "Ja — når svaret er likt, spiller teorien ingen rolle", "Ja, men bare i etikk", "Nei, fordi teoriene aldri konvergerer"],
      explanation: "Konvergens i enkle tilfeller skjuler divergens i de vanskelige. Begrunnelsene (lykke, plikt, karakter) betyr noe i randtilfellene.",
    },
    {
      question: "Hvilken feil begår en kandidat som svarer «men i virkeligheten ville slaver blitt mishandlet»?",
      options: ["Feil #13 — å ignorere tankeeksperimentets premisser", "Feil #10 — formalfeil", "Feil #6 — upresist begrep", "Feil #12 — svare på begge oppgaver"],
      explanation: "Casen stipulerer at slavene behandles godt. Å bestride det er å rømme fra det casen tester — feil #13.",
    },
    {
      question: "Hva menes med å sammenligne «langs akser» framfor med referater?",
      options: ["Å behandle de samme dimensjonene for begge teoriene, ikke levere to atskilte oppsummeringer", "Å skrive lengst mulig om hver teori", "Å bare nevne den ene teorien", "Å rangere teoriene alfabetisk"],
      explanation: "En S3-sammenligning skal bygges langs felles dimensjoner. Parallelle referater uten sammenligningspunkter er feil #1.",
    },
    {
      question: "Langs hvilken dimensjon skiller Kant og Mill seg klarest?",
      options: ["Hva gjør handlingen rett — sinnelag (Kant) mot konsekvenser (Mill)", "Hvem forfatteren var", "Hvilket århundre de levde i", "Hvor lange verkene deres er"],
      explanation: "Kant mot Mill er det vanligste paret; kjerneaksen er om sinnelaget eller følgene avgjør handlingens verdi.",
    },
    {
      question: "Hva er den rasistiske ytringen-casen (ingen påviselig skade) ment å avdekke?",
      options: ["At en følge-avhengig teori (utilitarisme) mister taket når skaden fjernes, mens Kant fordømmer uavhengig av følger", "At rasisme er tillatt hvis ingen skades", "At alle teorier er enige", "At følgene alltid er avgjørende"],
      explanation: "Premisset fjerner skaden nettopp for å teste hva som gjenstår: Kant fordømmer via verdighet, utilitaristen må ty til regelnivå.",
    },
    {
      question: "Hvilken feil er det å analysere en case med bare den teorien man selv liker?",
      options: ["Feil #8 — ensidig anvendelse; oppgavene krever ofte to eller tre teorier", "Feil #13 — ignorere premissene", "Feil #10 — formalfeil", "Feil #3 — leksikonsvar"],
      explanation: "Å utelate en teori man er uenig med gjør analysen ensidig. Oppgavene ber ofte om flere teorier nettopp for å få fram divergensen.",
    },
    {
      question: "Hvordan lander Aristoteles på slaveri-casen?",
      options: ["Å ta total kontroll over andre springer ikke ut av dyd, men av herskerlyst — ingen dydig person ville gjort det", "Aristoteles godtar ordningen fordi velferden er høy", "Aristoteles har ingen mening om casen", "Aristoteles avgjør bare ut fra følgene"],
      explanation: "Dydsetikken fordømmer ordningen via karakteren — herskerkarakteren er uforenlig med et godt menneske, om enn mindre skarpt formulert enn Kant.",
    },
    {
      question: "Hva krever vurderingstrinnet (trinn 4) i firetrinnmetoden?",
      options: ["At du sier hvilken analyse som er mest overbevisende OG viser grunnene, gjerne med forbehold", "At du bare oppgir din mening", "At du velger tilfeldig", "At du unngår å konkludere"],
      explanation: "Det holder ikke å si hva du mener — grunnene må vises. Å konkludere uten synlige grunner er feil #2.",
    },
    {
      question: "Hva sier handlingsutilitarismen om å bryte et dødsleie-løfte som gagner alle?",
      options: ["At bruddet kan være rett, siden den døende ikke lenger kan skades og midlene gjør mer nytte annensteds", "At bruddet alltid er galt", "At løfter ikke betyr noe", "At bare Kant kan avgjøre saken"],
      explanation: "På handlingsnivå tilsier nytteprinsippet at bruddet er rett når det gagner alle — mens Kant forbyr det via universaliseringstesten. Her divergerer teoriene.",
    },
    {
      question: "Hvorfor er metoden fra dette kapitlet nyttig også utenfor etikken?",
      options: ["Fordi firetrinnmetoden generaliseres til epistemiske caser (f.eks. Lakatos-anvendelse) i kapittel 4.4", "Fordi den bare gjelder etikk", "Fordi den erstatter alle andre metoder", "Fordi den ikke krever teori"],
      explanation: "I kap. 4.4 utvides samme metode (identifiser → anvend → divergens → vurder) til epistemiske caser som Lakatos- og Wikforss-analyser.",
    },
    {
      question: "Hva er kjernen i divergensen på slaveri-casen?",
      options: ["Hva som teller *utover* velferd — Kant og Aristoteles fordømmer uavhengig av velferden, Mill presses av den", "Om slavene liker situasjonen", "Hvor mange slaver det er", "Hvilket land casen foregår i"],
      explanation: "Kant (verdighet) og Aristoteles (karakter) er uavhengige av velferden; Mill er følge-avhengig og presses når velferden stipuleres høy.",
    },
    {
      question: "Hva er dimensjon 2 i sammenligningskartet?",
      options: ["Konsekvensenes rolle — en viss (Aristoteles), ingen for moralsk verdi (Kant), alt (Mill)", "Forfatterens fødselsår", "Hvor lang teorien er", "Om teorien er religiøs"],
      explanation: "Dimensjon 2 skiller teoriene skarpt: for Mill teller bare følgene, for Kant ingen for den moralske verdien, for Aristoteles en viss (det gode livet er målet).",
    },
    {
      question: "Hva er den mest ødeleggende feilen i S5-case-oppgaver?",
      options: ["Å normalisere bort premisset (feil #13) i stedet for å arbeide innenfor casens stipulasjoner", "Å skrive for kort", "Å bruke for mange teorier", "Å nevne forfatteren"],
      explanation: "Premissene er selve testen. Å rømme fra dem viser manglende forståelse av hva tankeeksperimentet undersøker.",
    },
    {
      question: "Hva er et A-tegn i behandlingen av konvergens?",
      options: ["Å se at begrunnelsene betyr noe selv når svarene møtes, fordi de skiller i randtilfellene", "Å hevde at konvergens gjør teorivalget likegyldig", "Å ignorere konvergens helt", "Å påstå at teoriene aldri konvergerer"],
      explanation: "Å se at konvergens i ett tilfelle skjuler divergens i randtilfellene signaliserer selvstendighet — et subtilt A-poeng.",
    },
  ],
  'exphil03-3-5': [
    {
      question: "Hva betyr eutanasi i Foots forstand?",
      options: ["En død som er til personens eget beste", "Enhver bevisst avslutning av et liv", "Å ta liv for å spare samfunnet ressurser", "Å la naturen gå sin gang uten inngrep"],
      explanation: "Foot definerer eutanasi som død *til personens eget beste*. Avgrensningen utelukker drap av andre grunner og bærer resten av analysen.",
    },
    {
      question: "Hvorfor gjør Foots definisjonsavgrensning så mye arbeid?",
      options: ["Den snevrer diskusjonen inn til tilfeller der døden faktisk gagner den som dør", "Den beviser at eutanasi alltid er tillatt", "Den gjør samtykke overflødig", "Den fjerner behovet for dyder"],
      explanation: "Ved å kreve at døden tjener personen, faller drap av andre grunner utenfor, og spørsmålet blir «når kan en død som tjener personen forsvares?»",
    },
    {
      question: "Hvilke to dyder bruker Foot som doble skranker?",
      options: ["Rettferdighet og barmhjertighet", "Mot og måtehold", "Klokskap og gavmildhet", "Ærlighet og troskap"],
      explanation: "Foot vurderer eutanasi mot rettferdighet (hva vi skylder personen) og barmhjertighet (personens gode); begge må innfris.",
    },
    {
      question: "Hva handler rettferdighetsskranken hos Foot om?",
      options: ["Hva vi skylder personen, blant annet respekt for retten til liv og krav om samtykke", "At handlingen gir mest lykke for flest", "At personen har det bedst mulig", "At samfunnet spares for kostnader"],
      explanation: "Rettferdighet gjelder hva vi skylder personen. Skranken krenkes ikke dersom personen samtykker og dermed gir avkall på sitt krav.",
    },
    {
      question: "Hva handler barmhjertighetsskranken hos Foot om?",
      options: ["Personens gode — at handlingen faktisk tjener personen", "Retten til liv", "Samfunnets interesser", "Legens plikt til å adlyde loven"],
      explanation: "Barmhjertighet gjelder personens gode. Samtykke uten at døden tjener personen er ikke barmhjertig.",
    },
    {
      question: "Hvorfor kaller vi Foots to dyder «doble skranker»?",
      options: ["Fordi begge må tilfredsstilles; ett hensyn alene er ikke nok", "Fordi de betyr det samme", "Fordi den ene alltid overstyrer den andre", "Fordi de bare gjelder helsepersonell"],
      explanation: "Eutanasi kan bare være tillatelig når både rettferdighet (samtykke) og barmhjertighet (personens gode) er innfridd. Faller én, faller tillatelsen.",
    },
    {
      question: "Hva innfrir samtykke i Foots analyse?",
      options: ["Rettferdighetsskranken — personen gir avkall på sitt krav mot oss", "Barmhjertighetsskranken", "Begge skranker på én gang", "Ingen av skrankene"],
      explanation: "Samtykke gjelder rettferdigheten: personen gir avkall på retten til liv som krav mot oss. Barmhjertigheten må innfris i tillegg.",
    },
    {
      question: "Hva argumenterer Velleman egentlig imot?",
      options: ["At det bør innføres en rett til å avslutte eget liv", "At noen noen gang kan ha grunn til å dø", "At lidelse er vondt", "At leger skal hjelpe pasienter"],
      explanation: "Velleman er ikke uten videre mot at et enkeltmenneske kan ha grunn til å dø; han er mot en *rett* som ordning.",
    },
    {
      question: "Hva er de to prinsippene Velleman starter med å anerkjenne?",
      options: ["Retten til å forkorte livet for å forbedre det, og presumpsjonen for personens egen dom", "Rettferdighet og barmhjertighet", "Nytteprinsippet og det kategoriske imperativ", "Frihet og likhet"],
      explanation: "Velleman tar disse to prinsippene for en rett på alvor, men mener de ikke er tilstrekkelige fordi de overser verdigheten.",
    },
    {
      question: "Hva er skillet mellom personens verdi og personens gode hos Velleman?",
      options: ["Verdi = verdighet, ubetinget; gode = velferd, betinget", "Verdi = velferd; gode = verdighet", "De er to ord for det samme", "Verdi gjelder friske, gode gjelder syke"],
      explanation: "Personens verdi er verdigheten (ubetinget, uavhengig av hvordan man har det); personens gode er velferden (betinget, kan bli negativ).",
    },
    {
      question: "Hva er Vellemans kjernetese om verdighet og velferd?",
      options: ["Verdigheten kan ikke veies mot velferden — de tilhører ulike regnskap", "Verdigheten er alltid mindre viktig enn velferden", "Velferden bestemmer verdigheten", "Verdighet og velferd er identiske"],
      explanation: "En rett til å dø forutsetter at dårlig velferd kan oppveie livets verdi, men verdigheten lar seg ikke legge på vektskålen i det hele tatt.",
    },
    {
      question: "Hva sier Vellemans institusjonsargument?",
      options: ["En innført rett endrer situasjonen for alle sårbare, som nå må begrunne fortsatt liv", "At sykehus er dårlig organisert", "At retten bør innføres gradvis", "At bare staten kan avgjøre liv og død"],
      explanation: "Så snart retten finnes, blir det å fortsette å leve noe man kan bli bedt om å forsvare — en ny byrde på de sårbare, selv uten tvang.",
    },
    {
      question: "Hvorfor er verdigheten ifølge Velleman ikke personens å disponere bort ved samtykke?",
      options: ["Fordi verdigheten er ubetinget, ikke et gode personen selv rår over", "Fordi loven forbyr det", "Fordi ingen egentlig samtykker fritt", "Fordi verdighet ikke finnes"],
      explanation: "For Velleman er samtykke ikke nok: verdigheten er ubetinget menneskeverd, ikke en velferdsstørrelse personen kan gi avkall på.",
    },
    {
      question: "Hvordan skiller Foots og Vellemans metode seg?",
      options: ["Foot veier to skranker i det konkrete; Velleman holder ett ubetinget prinsipp som ikke kan veies", "Begge bruker nytteprinsippet", "Foot er kantiansk, Velleman utilitarist", "De bruker identisk metode"],
      explanation: "Foot arbeider dydsetisk med to skranker som begge må innfris; Velleman arbeider kantiansk med verdigheten som et ubetinget prinsipp.",
    },
    {
      question: "Hvorfor er Foot og Velleman et skarpt sammenligningspar (S3)?",
      options: ["De kan behandle samme sak og dra i motsatt retning fordi metoden er ulik", "De er enige om alt", "De skrev samme tekst", "De tilhører samme etiske teori"],
      explanation: "Uenigheten er metodisk, ikke faktisk: dydsetisk avveining av to skranker mot ett ubetinget kantiansk prinsipp.",
    },
    {
      question: "Hvilken feil begår den som drøfter «er det greit å ta liv?» uten Foots avgrensning?",
      options: ["#6 — upresist begrep; man drøfter drap generelt, ikke eutanasi i Foots forstand", "#14 — gammelt pensum-spøkelse", "#11 — sitatslurv", "#4 — hoppe over delspørsmål"],
      explanation: "Uten «til personens eget beste» drøfter man et annet spørsmål. Avgrensningen er premisset hele Foots analyse hviler på (#6).",
    },
    {
      question: "Hvilken feil begår den som fremstiller Velleman som generell eutanasimotstander?",
      options: ["#6 — upresist; Velleman er mot en RETT, via verdi/gode-skillet og institusjonsargumentet", "#8 — ensidig drøfting", "#2 — mening uten grunner", "#7 — løsrevet sitat"],
      explanation: "Velleman motsetter seg retten som ordning, ikke enhver tenkelig handling. Mister man mekanismen (verdi/gode + institusjon), mister man poenget (#6).",
    },
    {
      question: "Hva mener Foot skjer med rettferdighetsskranken når en pasient gir vedvarende, informert samtykke?",
      options: ["Den er innfridd — pasienten gir avkall på sitt krav mot oss", "Den skjerpes", "Den blir irrelevant for alltid", "Den erstattes av barmhjertighet"],
      explanation: "Samtykke innfrir rettferdigheten. Men barmhjertigheten (at døden tjener personen) må fortsatt innfris for at eutanasi skal være tillatelig.",
    },
    {
      question: "Hvorfor kan man ifølge Velleman være mot retten uten å fordømme hver enkelt som ønsker å dø?",
      options: ["Fordi en enkelthandling kan være riktig selv om ordningen er gal å innføre", "Fordi Velleman egentlig er for retten", "Fordi ingen faktisk ønsker å dø", "Fordi enkelthandlinger aldri vurderes moralsk"],
      explanation: "Institusjonsargumentet skiller enkelthandlingen fra ordningen: retten forandrer betingelsene for alle sårbare, uavhengig av det enkelte tilfellet.",
    },
    {
      question: "Hva er den beste gjenbruken av (a)/(b) i en eutanasi-drøfting?",
      options: ["Føre Foots to skranker og Vellemans verdi/gode-skille inn i drøftingen med eksplisitt kobling", "Starte drøftingen på nytt uten å bruke redegjørelsen", "Kopiere en annen kandidats svar", "Utelate redegjørelsen for å spare tid"],
      explanation: "Poeng fra redegjørelsen skal bæres inn i drøftingen («som vist i (a) …»). Å starte «på nytt» uten kobling straffes (#5).",
    },
    {
      question: "Hva er presumpsjonen for personens egen dom hos Velleman?",
      options: ["Utgangspunktet om at personen selv er nærmest til å bedømme hva som er til eget beste", "Antagelsen om at legen alltid vet best", "At flertallet avgjør hva som er godt for den enkelte", "At ingen kan vite hva som er godt"],
      explanation: "Dette er ett av de to prinsippene Velleman tar på alvor. Han mener det likevel ikke er tilstrekkelig, fordi det overser den ubetingede verdigheten.",
    },
    {
      question: "Hvilken av teoritrekantens tenkere står Vellemans argument nærmest?",
      options: ["Kant — verdighet som ubetinget, mennesket som formål i seg selv", "Mill — nytteprinsippet", "Aristoteles — eudaimonia", "Ingen av dem"],
      explanation: "Velleman bygger på Kants verdighetsbegrep: mennesket er et formål i seg selv, prisløst og uerstattelig. Verdigheten kan derfor ikke veies mot velferd.",
    },
    {
      question: "Hvorfor er Foots analyse mer situasjonssensitiv enn Vellemans?",
      options: ["Fordi den veier flere hensyn i det konkrete tilfellet framfor å felle ett fast prinsipp", "Fordi den ikke bryr seg om samtykke", "Fordi den alltid tillater eutanasi", "Fordi den ignorerer personens gode"],
      explanation: "Dydsetikkens metode ser på hva den konkrete situasjonen krever av dydene. Vellemans kantianske prinsipp gjelder ubetinget, uavhengig av situasjonen.",
    },
    {
      question: "Hva er det sentrale poenget en redegjørelse for Foot ikke får mangle?",
      options: ["At eutanasi er død til personens eget beste, prøvet mot både rettferdighet og barmhjertighet", "At Foot levde på 1900-tallet", "At eutanasi er forbudt i Norge", "At smerte alltid er verst"],
      explanation: "Mister du avgrensningen og de doble skrankene, faller redegjørelsen. Biografi og jus er utenompensum (#3).",
    },
    {
      question: "Hva ville skille en A-besvarelse fra en C-besvarelse om Velleman?",
      options: ["Å skille de to nivåene: verdi/gode-skillet (mot avveiningen) og institusjonsargumentet (mot retten)", "Å skrive lengst mulig", "Å nevne flest mulig tenkere", "Å gjenta definisjonen tre ganger"],
      explanation: "A-kandidaten holder Vellemans to argumentplan fra hverandre. Å blande dem sammen svekker svaret; presisjon på mekanismen løfter det.",
    },
  ],
  'exphil03-3-6': [
    {
      question: "Hva kjennetegner Lockes naturtilstand?",
      options: ["Frihet og likhet under naturens lov", "En lovløs krig av alle mot alle", "Fullstendig kaos uten moral", "Absolutt kongemakt"],
      explanation: "Lockes naturtilstand er ordnet av naturens lov: frihet og likhet, ikke lovløs krig. Det som mangler er en upartisk håndhever (feil #6).",
    },
    {
      question: "Hva er naturens lov hos Locke?",
      options: ["Fornuftens lov om at ingen skal skade en annens liv, frihet eller eiendom", "Den sterkestes rett", "Statens vedtatte lover", "Et guddommelig påbud uten innhold"],
      explanation: "Naturens lov er fornuftens lov som forplikter alle også før statens lover. Den gjør naturtilstanden ordnet, ikke lovløs.",
    },
    {
      question: "Hvilke er de tre naturlige rettighetene hos Locke?",
      options: ["Liv, frihet og eiendom", "Liv, likhet og lykke", "Frihet, brorskap og eiendom", "Trygghet, arbeid og hvile"],
      explanation: "Locke regner liv, frihet og eiendom som naturlige rettigheter mennesket har uavhengig av staten.",
    },
    {
      question: "Hvorfor inngår mennesker en samfunnskontrakt ifølge Locke?",
      options: ["For å sikre de naturlige rettighetene bedre, siden naturtilstanden mangler en upartisk håndhever", "For å gi fra seg alle rettigheter til en enehersker", "Fordi naturtilstanden er en lovløs krig", "For å avskaffe privat eiendom"],
      explanation: "Naturtilstanden mangler en upartisk dommer og felles maktinstans. Mennesker samtykker til et styre for å sikre rettighetene bedre, ikke for å gi dem fra seg.",
    },
    {
      question: "Hva hviler legitim statsmakt på hos Locke?",
      options: ["De styrtes samtykke", "Kongens guddommelige rett", "Militær overlegenhet", "Arv og slekt"],
      explanation: "Styret hviler på samtykke fra de styrte. Blir det tyrannisk, har folket grunn til å motsette seg det.",
    },
    {
      question: "Hvordan oppstår privat eiendom ifølge Lockes arbeidsargument?",
      options: ["Ved at man blander sitt arbeid med en ting som før var felles", "Ved at staten deler ut jord", "Ved arv fra forfedrene", "Ved at den sterkeste tar det han vil"],
      explanation: "Man eier egen kropp og eget arbeid; ved å legge arbeidet inn i noe felles gjør man det til sin eiendom.",
    },
    {
      question: "Hva er Lockes to forbehold på eiendomsretten?",
      options: ["Nok og like godt igjen til andre; ikke la noe råtne ubrukt", "Betale skatt; registrere eiendommen", "Bare menn kan eie; bare dyrket jord teller", "Kongens tillatelse; kirkens velsignelse"],
      explanation: "Retten er betinget: man kan ikke ta så mye at andre står uten, og ikke hope opp mer enn man kan bruke.",
    },
    {
      question: "Hvorfor blir Lockes eiendomsforbehold kritiske i en verden med knapphet?",
      options: ["Fordi én persons tilegnelse da kan gjøre at andre står uten «nok og like godt igjen»", "Fordi ingen da eier noe", "Fordi arbeid da blir umulig", "Fordi staten da overtar all eiendom"],
      explanation: "På en tom øy er forbeholdene lette å innfri, men når ressursene er knappe, kan tilegnelse ramme andre og bryte nok-og-like-godt-forbeholdet.",
    },
    {
      question: "Hva er Helds hovedangrep på kontraktsmodellen?",
      options: ["At bildet av frie, uavhengige, egeninteresserte voksne er en fiksjon som usynliggjør avhengighet og omsorg", "At kontrakter alltid brytes", "At Locke regnet feil om eiendom", "At staten er for svak"],
      explanation: "Fiksjonskritikken: kontraktsbildet tar den uavhengige voksne som normalmenneske og skjuler avhengigheten og omsorgsarbeidet alle liv forutsetter.",
    },
    {
      question: "Hvilke fire egenskaper forutsetter kontraktsbildet ifølge Held?",
      options: ["Frie, like, uavhengige og egeninteresserte", "Sterke, rike, gamle og mannlige", "Snille, ærlige, kloke og modige", "Fattige, avhengige, unge og syke"],
      explanation: "Held mener kontraktsmodellen forutsetter parter som er frie, like, uavhengige og egeninteresserte — og at slik er ikke mennesker hele livet.",
    },
    {
      question: "Hvorfor foreslår Held mor-barn-relasjonen som alternativ grunnmodell?",
      options: ["Fordi den er ikke valgt, ikke mellom likeverdige og ikke egeninteressert — motsatt av kontrakten", "Fordi mødre er moralsk overlegne", "Fordi barn ikke har rettigheter", "Fordi kontrakter aldri finnes i praksis"],
      explanation: "Mor-barn-relasjonens tre trekk er stikk motsatt av kontraktens forutsetninger, og likevel er den samfunnets mest grunnleggende relasjon.",
    },
    {
      question: "Hva er de tre trekkene ved mor-barn-relasjonen hos Held?",
      options: ["Ikke valgt, ikke mellom likeverdige, ikke egeninteressert", "Fri, lik, uavhengig", "Kortvarig, betinget, gjensidig", "Juridisk, økonomisk, politisk"],
      explanation: "Ingen valgte den andre, partene er dypt ulike i makt, og omsorgen gis uten krav om gjenytelse — motsatt av kontraktens frie, like, egeninteresserte parter.",
    },
    {
      question: "Hva er omsorgsetikk hos Held?",
      options: ["En etikk som tar omsorgsrelasjoner, ikke avtaler, som moralsk utgangspunkt", "En plikt til å adlyde staten", "En regel om størst lykke for flest", "Læren om at bare familien har verdi"],
      explanation: "Held bruker mor-barn-modellen til å begrunne en etikk som starter i omsorgsrelasjoner framfor i kontrakt mellom uavhengige parter.",
    },
    {
      question: "Hva er drøftingsaksen når Locke stilles mot Held?",
      options: ["Kontraktsteoriens menneskesyn — beskriver «frie, uavhengige kontraktsparter» mennesker slik de faktisk er?", "Om eiendom bør avskaffes", "Om staten bør ha én eller flere ledere", "Om barn har stemmerett"],
      explanation: "Aksen gjelder menneskesynet: det autonome individet (Locke) mot det relasjonelle, avhengige mennesket (Held).",
    },
    {
      question: "Hvilken feil begår den som gjør Lockes naturtilstand til en lovløs krigstilstand?",
      options: ["#6 — upresist begrep; Lockes naturtilstand er ordnet av naturens lov", "#14 — gammelt pensum-spøkelse", "#11 — sitatslurv", "#4 — hoppe over delspørsmål"],
      explanation: "Å forveksle Lockes naturtilstand med et hobbesiansk «alles krig mot alle» er en presisjonsfeil (#6). Den er frihet og likhet under naturens lov.",
    },
    {
      question: "Hvilken feil begår den som gjengir Held som «kvinneperspektiv» uten det filosofiske argumentet?",
      options: ["#1 — gjengivelse uten det egentlige innholdet (fiksjonskritikken + alternativmodellen)", "#6 — upresist begrep", "#13 — ignorere premisser", "#2 — mening uten grunner"],
      explanation: "Held har et filosofisk poeng: fiksjonskritikken og mor-barn-modellen. Å bare merke henne «feministisk» dropper argumentet (#1).",
    },
    {
      question: "Hvordan kan man forsøke å forsvare Locke mot Held?",
      options: ["Ved å si at kontrakt gjelder det offentlige og omsorg det nære", "Ved å benekte at barn finnes", "Ved å avskaffe naturens lov", "Ved å påstå at Held er utenfor pensum"],
      explanation: "Et mulig forsvar er å skille offentlig (kontrakt) fra nært (omsorg). Held svarer at selv det offentlige forutsetter omsorgsarbeidet det ser bort fra.",
    },
    {
      question: "Hva tester øde øy-casen om eiendom?",
      options: ["Om Lockes arbeidsargument og forbehold holder når flere kommer til og ressursene blir knappe", "Om folk kan overleve alene", "Om øyer kan eies av stater", "Om arbeid er slitsomt"],
      explanation: "Casen isolerer betingelsene (antall personer, ressursmengde) for å prøve om eiendomsretten og forbeholdene holder. Å endre premissene er feil #13.",
    },
    {
      question: "Hva er Locke-triaden i eksamensarkivet?",
      options: ["Sekvensen kontrakt → eiendomsrett → Helds innvending, gjenbrukt nesten uendret i fire sett", "De tre naturlige rettighetene", "Tre bøker Locke skrev", "Locke, Kant og Mill sammen"],
      explanation: "Locke-triaden er arkivets mest gjenbrukte etikk-sekvens: kontrakt, eiendomsrett og Helds kritikk, ofte i samme oppgave.",
    },
    {
      question: "Hva er den beste gjenbruken av (a)/(b) i en menneskesyn-drøfting?",
      options: ["Føre Lockes eiendomsargument og Helds fiksjonskritikk inn i drøftingen med eksplisitt kobling", "Starte drøftingen på nytt uten å bruke redegjørelsen", "Kopiere en annen kandidats svar", "Utelate redegjørelsen for å spare tid"],
      explanation: "Poeng fra (a)/(b) skal bæres inn i drøftingen. Å starte «på nytt» uten kobling straffes (#5).",
    },
    {
      question: "Hva vil Held si om påstanden om at avhengighet er et unntak fra normalmennesket?",
      options: ["At avhengighet tvert imot er en grunnbetingelse for alle, ikke et unntak", "At bare syke er avhengige", "At avhengighet ikke finnes", "At avhengighet er et valg"],
      explanation: "Held snur bildet: vi fødes hjelpeløse og er avhengige som barn, syke og gamle. Den uavhengige voksne er ikke normen, men en fase.",
    },
    {
      question: "Hvorfor står forbeholdet med allerede i Lockes eiendomspassasje?",
      options: ["Fordi retten er betinget — eiendom oppstår bare «så lenge det er nok og like godt igjen til andre»", "Fordi Locke var i tvil", "Fordi det er en senere tilføyelse", "Fordi det gjelder bare kongen"],
      explanation: "Forbeholdet er en integrert del av retten, ikke en ettertanke. Løsrevet ser passasjen ut som ubetinget eiendomsrett (feil #7).",
    },
    {
      question: "Hva er det sentrale poenget en redegjørelse for Lockes eiendomsrett ikke får mangle?",
      options: ["Arbeidsargumentet MED de to forbeholdene", "At Locke var engelsk", "At eiendom er hellig", "At jorden er rund"],
      explanation: "Mister du forbeholdene, forsvinner grensen som gjør teorien omdiskutert. Biografi er utenompensum (#3).",
    },
    {
      question: "Hva menes med at Held rammer selve grunnmodellen, ikke bare et vedheng?",
      options: ["At hun bestrider at kontrakten er den moralske grunnmodellen, ikke bare legger til et hensyn", "At hun vil forby kontrakter", "At hun bare kritiserer Locke personlig", "At hun aksepterer kontraktsmodellen fullt ut"],
      explanation: "Det subtile A-poenget: Held «legger ikke bare til kvinner», hun benekter at avtalen mellom uavhengige er moralens rette utgangspunkt.",
    },
    {
      question: "Hvorfor er Locke og Held et fast sammenligningspar (S3)?",
      options: ["Locke forsvarer kontraktsmodellen, Held angriper dens grunnbilde med et alternativt menneskesyn", "De var samtidige venner", "De skrev samme bok", "De var enige om alt"],
      explanation: "Paret er skarpt fordi Held angriper nøyaktig det menneskesynet Lockes kontraktsteori hviler på. En S3-oppgave krever begge presise og en navngitt akse.",
    },
  ],
  'exphil03-3-7': [
    {
      question: "Hva er frihetsprinsippet hos Sylvan?",
      options: ["Enhver kan gjøre som han vil så lenge ingen andre skades", "Staten skal aldri gripe inn i naturen", "Dyr har samme rettigheter som mennesker", "Naturen tilhører alle likt"],
      explanation: "Frihetsprinsippet er vestens liberale prinsipp. Sylvans grep er å spørre hvem som teller som «andre» — svaret er underforstått bare mennesker.",
    },
    {
      question: "Hva mener Sylvan med menneskesjåvinisme?",
      options: ["Den skjulte forutsetningen om at bare mennesker teller moralsk i seg selv", "At mennesker er bedre enn dyr fysisk", "At bare menn skal bestemme", "At vestlig kultur er overlegen"],
      explanation: "Menneskesjåvinisme er antagelsen om at bare mennesker har moralsk status, mens naturen er ren ressurs. Grensen forsvares aldri, bare forutsettes.",
    },
    {
      question: "Hva skal det siste menneske-tankeeksperimentet vise?",
      options: ["At vi mener naturen har verdi uavhengig av mennesker — frihetsprinsippet fanger ikke alt", "At mennesker alltid ødelegger", "At naturen kan klare seg selv", "At fremtidige generasjoner har rettigheter"],
      explanation: "Intuisjonen om at det siste mennesket gjør galt selv om ingen mennesker skades, viser at noe teller uavhengig av mennesker — altså egenverdi i naturen.",
    },
    {
      question: "Hva er det avgjørende premisset i det siste menneske-tankeeksperimentet?",
      options: ["At ingen mennesker skades — heller ikke fremtidige, for det finnes ingen igjen", "At det siste mennesket angrer", "At naturen kommer tilbake", "At noen ser på"],
      explanation: "Premisset er at ingen mennesker skades. Å svare «det skader fremtidige generasjoner» endrer premisset og bommer på testen (feil #13).",
    },
    {
      question: "Hva er egenverdi i naturen ifølge Sylvan?",
      options: ["At naturen kan ha verdi i seg selv, ikke bare som middel for mennesker", "At naturen er økonomisk verdifull", "At vakker natur er verdt mest", "At bare truede arter har verdi"],
      explanation: "Egenverdi er verdi i seg selv, uavhengig av menneskelig nytte. Det er konklusjonen tankeeksperimentet skal presse fram.",
    },
    {
      question: "Hvorfor mener Sylvan at hensyn til fremtidige generasjoner ikke er nok?",
      options: ["Fordi naturen da fortsatt bare teller instrumentelt — for menneskers skyld", "Fordi fremtidige generasjoner ikke finnes", "Fordi det er for dyrt", "Fordi Sylvan ikke bryr seg om fremtiden"],
      explanation: "Å verne natur *fordi* fremtidige mennesker trenger den, forblir menneskesjåvinistisk. En full miljøetikk må anerkjenne naturens egenverdi.",
    },
    {
      question: "Hvorfor behandler kapitlet dyrs moralske status teorinøytralt?",
      options: ["Fordi en egen spesiesisme-tenker er ute av pensum (feil #14); trekanten brukes i stedet", "Fordi teoriene er enige om dyr", "Fordi dyr ikke teller moralsk", "Fordi Sylvan forbød det"],
      explanation: "Pensumregimet utelukker en dyreetikk-tenker som er ute. Dyrs status prøves derfor mot nytte, verdighet og dyder.",
    },
    {
      question: "Hvilken teori gir sterkest DIREKTE grunn til å ta dyrs velferd på alvor?",
      options: ["Utilitarismen — lidelse teller uansett hvem som føler den", "Pliktetikken — dyr er formål i seg selv", "Dydsetikken — dyr har dyder", "Ingen av dem"],
      explanation: "For Mill teller lidelse uansett hvem som lider. Pliktetikken gir bare indirekte vern, siden dyr ikke er fornuftige formål.",
    },
    {
      question: "Hvordan begrunner en kantiansk posisjon dyrevern?",
      options: ["Indirekte — grusomhet sløver vår moralske karakter og går ut over mennesker", "Direkte — dyr har verdighet som formål i seg selv", "Ved at dyr kan inngå kontrakter", "Den kan ikke begrunne dyrevern i det hele tatt"],
      explanation: "Verdigheten tilhører fornuftige, autonome vesener. Dyr faller utenfor, så vernet må gå indirekte via vår egen karakter.",
    },
    {
      question: "Hva sier dydsetikken om grusomhet mot dyr?",
      options: ["At den røper en lastefull karakter, uavhengig av dyrets rettigheter", "At den er tillatt hvis dyret ikke merker det", "At den maksimerer nytten", "At den bryter en kontrakt"],
      explanation: "Dydsetikken spør hva den dydige, barmhjertige personen ville gjort. Grusomhet fanges som en karakterlast, ikke via dyrets status.",
    },
    {
      question: "Hva er drøftingsaksen for Sylvan på eksamen?",
      options: ["Trenger vi en ny miljøetikk, eller strekker de gamle teoriene til?", "Bør kjøtt forbys ved lov?", "Hvor mange dyrearter finnes?", "Er naturen vakker?"],
      explanation: "Aksen gjelder om egenverdi krever et brudd med tradisjonen (Sylvan) eller om en utvidet nyttetenkning holder.",
    },
    {
      question: "Hva er stridsspørsmålet mellom Sylvan og en instrumentalist?",
      options: ["Om noe kan ha verdi uten at noen verdsetter det", "Om dyr kan snakke", "Om naturen er skapt", "Om mennesker er dyr"],
      explanation: "Sylvans egenverdi-krav forutsetter at ja; instrumentalisten svarer at verdi alltid er verdi *for* noen. Det er det uavklarte punktet.",
    },
    {
      question: "Hvilken feil begår den som svarer «men det skader fremtidige generasjoner» på det siste menneske-eksperimentet?",
      options: ["#13 — ignorere tankeeksperimentets premisser", "#14 — gammelt pensum-spøkelse", "#7 — løsrevet sitat", "#2 — mening uten grunner"],
      explanation: "Premisset er at ingen mennesker finnes igjen, heller ikke fremtidige. Å innføre fremtidige generasjoner endrer casen og bommer på testen (#13).",
    },
    {
      question: "Hvilken feil begår den som forankrer dyreetikk i en spesiesisme-tenker som er ute av pensum?",
      options: ["#14 — gammelt pensum-spøkelse (null uttelling)", "#6 — upresist begrep", "#4 — hoppe over delspørsmål", "#11 — sitatslurv"],
      explanation: "Tenkere ute av pensum gir null uttelling. Dyrs status skal behandles teorinøytralt via teoritrekanten (#14).",
    },
    {
      question: "Hva er den beste gjenbruken av (a)/(b) i en miljøetikk-drøfting?",
      options: ["Føre Sylvans sjåvinisme-diagnose og teoritrekant-anvendelsen inn i drøftingen med eksplisitt kobling", "Starte drøftingen på nytt uten redegjørelsen", "Kopiere en annen kandidats svar", "Utelate redegjørelsen for å spare tid"],
      explanation: "Poeng fra (a)/(b) skal bæres inn i drøftingen. Å starte «på nytt» uten kobling straffes (#5).",
    },
  ],
  'exphil03-3-8': [
    {
      question: "Hva er Benatars hovedtese om livskvalitet?",
      options: ["At vi systematisk overvurderer hvor god egen livskvalitet er", "At livet objektivt sett er elendig for alle", "At lykke ikke finnes", "At bare rike har god livskvalitet"],
      explanation: "Benatar hevder at vurderingen vår er systematisk skjev oppover. Det er en påstand om målefeil, ikke om at livet er elendig.",
    },
    {
      question: "Hvilke tre mekanismer bruker Benatar for å forklare overvurderingen?",
      options: ["Optimisme-bias, tilpasning og sammenligning med andre", "Tvil, sikkerhet og bevis", "Frihet, likhet og brorskap", "Nytelse, smerte og likegyldighet"],
      explanation: "De tre mekanismene er optimisme-bias (lysere framtid), tilpasning (venne seg til det dårlige) og sammenligning med andre snarere enn med det mulige.",
    },
    {
      question: "Hva er tilpasning i Benatars forstand?",
      options: ["At vi venner oss til det dårlige, så vedvarende plager slutter å registreres som plager", "At vi tilpasser oss andres meninger", "At vi endrer mål etter situasjonen", "At kroppen venner seg til trening"],
      explanation: "Tilpasning gjør at det dårlige blir «det normale» og forsvinner fra regnskapet, slik at livskvaliteten framstår bedre enn den er.",
    },
    {
      question: "Hvorfor er Benatar en utfordring for Mills utilitarisme?",
      options: ["Fordi nyttekalkylen forutsetter målbar lykke, men målingen er systematisk for høy", "Fordi Mill benektet at lykke finnes", "Fordi Mill var pessimist", "Fordi Benatar avviser all matematikk"],
      explanation: "Utilitarismen bygger på at lykke kan måles. Er selvrapporten skjev oppover, regner nyttekalkylen med gale tall.",
    },
    {
      question: "Hvorfor rammer Benatar Aristoteles' eudaimonia mindre enn Mills lykke?",
      options: ["Fordi eudaimonia er objektiv — et velfungerende liv, ikke subjektiv følelse", "Fordi Aristoteles ignorerte livskvalitet", "Fordi eudaimonia er en følelse", "Fordi Aristoteles er eldre"],
      explanation: "Eudaimonia kan vurderes utenfra som virksomhet i samsvar med dyd, og er derfor mindre sårbar for selvrapportens skjevhet enn Mills hedonisme.",
    },
    {
      question: "Følger anti-natalisme av Benatars feilvurderings-tese alene?",
      options: ["Nei — skrittet til «bedre å ikke bli til» krever flere premisser", "Ja, direkte og uunngåelig", "Ja, fordi livet er elendig", "Nei, fordi anti-natalisme er ulovlig"],
      explanation: "Man kan godta at vi overvurderer livet uten å godta at det er bedre å ikke bli til. Konklusjonen krever mer enn mekanismene.",
    },
    {
      question: "Hva sier Benatar IKKE?",
      options: ["At livet objektivt er elendig — han sier at vurderingen vår er skjev oppover", "At vi overvurderer livskvaliteten", "At tilpasning skjuler plager", "At vi sammenligner oss med andre"],
      explanation: "Benatars poeng er målefeil, ikke pessimisme. Å lese ham som «livet er elendig» er en presisjonsfeil (#6).",
    },
    {
      question: "Hva er gullklump-fortellingen hos Appiah?",
      options: ["Bildet av «vestlig kultur» som en ubrutt arv fra antikken, overlevert som en skatt", "En teori om økonomisk verdi", "En fortelling om gruvedrift", "Et argument for privat eiendom"],
      explanation: "Gullklumpen er forestillingen om vestlig kultur som en sammenhengende arv Athen → Roma → oss, som vi bare skal bevare.",
    },
    {
      question: "Hva går Appiahs genealogiske avvisning ut på?",
      options: ["At gullklump-fortellingen er historisk konstruert — den utelater lån og omfordeler", "At vestlig kultur er den beste", "At kultur ikke finnes i det hele tatt", "At antikken var overvurdert"],
      explanation: "Appiah viser at fortellingen om en ubrutt arv utelater alt Vesten lånte fra andre og omfordeler for å passe grensen rundt «oss».",
    },
    {
      question: "Hva er Appiahs positive kulturbegrep?",
      options: ["Kultur som praksis — noe man gjør, ikke en essens man arver ubrutt", "Kultur som en fast, nedarvet essens", "Kultur som ren økonomi", "Kultur som noe bare eksperter har"],
      explanation: "Appiah erstatter arv/essens med praksis: kultur er levende og foranderlig, omformet av hver generasjon.",
    },
    {
      question: "Hvorfor er ikke Appiah en ren relativist?",
      options: ["Fordi han erstatter essens med praksis — kultur er fullt reelt, ikke likegyldig", "Fordi han mener vestlig kultur er sann", "Fordi han avviser all kultur", "Fordi han er enig i gullklump-fortellingen"],
      explanation: "Å avvise gullklumpen er ikke å si «alt er likegyldig». Kulturelle praksiser finnes og betyr noe (mot feil #6).",
    },
    {
      question: "Hva er slektskapet mellom Appiah og Haslanger?",
      options: ["Begge bruker genealogisk metode — de avdekker en kategoris historiske tilblivelse og funksjon", "Begge skrev om kjønn", "Begge var utilitarister", "De var samtidige kolleger"],
      explanation: "Appiah bruker samme genealogiske grep på «vestlig kultur» som Haslanger på kjønn. Å se dette gir S3-uttelling.",
    },
    {
      question: "Hvilken feil begår den som gjengir Benatar uten koblingen til lykketeoriene?",
      options: ["#1 — gjengivelse uten relevans; koblingen til Mill/Aristoteles ER eksamensbruken", "#14 — gammelt pensum-spøkelse", "#13 — ignorere premisser", "#11 — sitatslurv"],
      explanation: "Benatar er eksamensrelevant gjennom koblingen til lykketeoriene. Uten den blir mekanismene en løsrevet kuriositet (#1).",
    },
    {
      question: "Hvilken feil begår den som gjør Appiah til ren relativist?",
      options: ["#6 — upresist; Appiah erstatter essens med praksis, ikke med «alt er likegyldig»", "#4 — hoppe over delspørsmål", "#2 — mening uten grunner", "#7 — løsrevet sitat"],
      explanation: "Poenget er genealogi + praksis, ikke oppløsning av all kultur. Å lese ham som relativist mister det positive kulturbegrepet (#6).",
    },
    {
      question: "Hva er den beste gjenbruken av (a)/(b) i en Benatar-drøfting?",
      options: ["Føre Benatar-mekanismene og lykketeori-koblingen inn i drøftingen med eksplisitt kobling", "Starte drøftingen på nytt uten redegjørelsen", "Kopiere en annen kandidats svar", "Utelate redegjørelsen for å spare tid"],
      explanation: "Poeng fra (a)/(b) skal bæres inn i drøftingen. Å starte «på nytt» uten kobling straffes (#5).",
    },
  ],
  'exphil03-4-1': [
    {
      question: "Hva er den korrekte rekkefølgen i Descartes' tvilstrapp fram mot cogito?",
      options: ["Sansebedrag → drømmeargument → ond ånd → cogito", "Ond ånd → drømmeargument → sansebedrag → cogito", "Drømmeargument → cogito → sansebedrag → ond ånd", "Sansebedrag → cogito → ond ånd → drømmeargument"],
      explanation: "Tvilen skjerpes trinnvis: først sansebedraget, så drømmeargumentet, så den onde ånden som sterkeste tvilshypotese — og cogito er det ene som overlever, fordi selve tvilen forutsetter en som tviler.",
    },
    {
      question: "Hva er kjernefunksjonen til den onde ånd-hypotesen hos Descartes?",
      options: ["Den er den sterkeste tenkelige tvilshypotesen, som tester om noe overlever selv det verste angrepet", "Den beviser at en bedragersk gud finnes", "Den viser at sansene alltid lyver", "Den er en historisk teori om det ondes opphav"],
      explanation: "Den onde ånden er konstruert for å ramme selv det mest opplagte (som 2+3=5). Nettopp fordi cogito overlever denne maksimale tvilen, blir det et arkimedisk punkt.",
    },
    {
      question: "Hvilke tre vilkår må ifølge Wikforss være oppfylt for kunnskap?",
      options: ["Overbevisning, sannhet og gode grunner/evidens", "Sikkerhet, overbevisning og konsensus", "Sannhet, nytte og logisk gyldighet", "Overbevisning, autoritet og gjentakelse"],
      explanation: "Alle tre må være oppfylt samtidig. Den heldige gjetningen viser hvorfor evidens-vilkåret trengs: en sann tro uten gode grunner er ikke kunnskap.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom fallibilisme og skeptisisme?",
      options: ["Fallibilisme sier at vi kan ta feil men likevel vite; skeptisisme sier at vi ikke vet noe i det hele tatt", "Fallibilisme krever sikkerhet; skeptisisme krever bare gode grunner", "Fallibilisme gjelder etikk; skeptisisme gjelder vitenskap", "De betyr det samme, men fallibilisme er det moderne ordet"],
      explanation: "Dette er den hyppigste presisjonsfeilen i Vite-oppgaver (feil #6). Fallibilisme sier at vilkåret er gode grunner, ikke sikkerhet — vi kan ta feil og likevel vite. Skeptisismen benekter kunnskap overhodet.",
    },
    {
      question: "I firetrinns-S1 (redegjørelsen), hva er poenget med trinn 3 (rekonstruer trinnvis)?",
      options: ["Å vise argumentets struktur (premiss → konklusjon), ikke bare oppgi konklusjonen", "Å ramse opp alt du husker om tenkeren", "Å begynne med en historisk innledning om epoken", "Å gjengi bare konklusjonen så kortfattet som mulig"],
      explanation: "Sensor måler om du treffer argumentgangen. Å oppgi konklusjonen uten premissene treffer ikke strukturen og gir en flat redegjørelse.",
    },
    {
      question: "En kandidat parafraserer et Mill-utdrag linje for linje, men angir aldri hvilken funksjon det har i argumentet. Hvilken feil er dette?",
      options: ["Feil #7 — å tolke sitatet løsrevet fra tekstens overordnede argument", "Feil #4 — å hoppe over et delspørsmål", "Feil #14 — gammelt pensum-spøkelse", "Feil #2 — mening uten grunner"],
      explanation: "S2 krever at du identifiserer funksjonen (premiss/innvending/eksempel/svar) og plasserer utdraget i helheten. Ren løsrevet parafrase gir «delvis rett» = D/E-nivå (feil #7).",
    },
    {
      question: "Hvilken funksjon har Mills «utilfreds menneske vs. tilfreds gris»-passasje i utilitarismens argument?",
      options: ["Den er Mills svar på dyriske-begjær-innvendingen, via skillet høyere/lavere gleder", "Den er hovedpremisset for nytteprinsippet", "Den er en innvending mot Mill fra en motstander", "Den er et eksempel på handlings- vs. regelnivå"],
      explanation: "Passasjen er et svar på en innvending: at utilitarismen reduserer mennesket til et lystjagende dyr. Mill svarer med kvalitetsskillet og det kompetente flertalls dom.",
    },
    {
      question: "Aristoteles' «formålsårsak» for en bil svarer på hvilket spørsmål?",
      options: ["Hva bilen er til for (transport)", "Hva bilen er laget av (metallet)", "Hvem som lagde bilen (produsenten)", "Hvilken form eller konstruksjon bilen har"],
      explanation: "Formålsårsaken er det tingen er til for. Stoffårsak = materialet, formårsak = konstruksjonen, virkeårsak = produsenten, formålsårsak = transport.",
    },
    {
      question: "Hvorfor er det en presisjonsfeil å lese Aristoteles' «årsak» (aitia) som moderne årsak–virkning-kausalitet?",
      options: ["Fordi aitia er svar på «hvorfor» i bred forstand — moderne kausalitet svarer bare til virkeårsaken", "Fordi Aristoteles ikke trodde på årsaker i det hele tatt", "Fordi aitia bare gjelder levende vesener", "Fordi moderne kausalitet dekker alle fire årsakene"],
      explanation: "Moderne kausalitet (det ene frambringer det andre) tilsvarer bare Aristoteles' virkeårsak. Aitia er et bredere «hvorfor»-svar. Å blande dem er feil #6, eksplisitt advart mot i oppgavetekst.",
    },
    {
      question: "Hva er nøkkelordet i Kants definisjon av umyndighet, og hva betyr det?",
      options: ["«Selvforskyldt» — umyndigheten skyldes mangel på mot til å bruke forstanden, ikke mangel på forstand", "«Naturlig» — umyndighet er en medfødt tilstand hos alle", "«Politisk» — umyndighet påføres oss av staten", "«Midlertidig» — umyndighet forsvinner av seg selv med alderen"],
      explanation: "Umyndigheten er selvforskyldt fordi forstanden er der, men latskap og feighet hindrer oss i å bruke den selv. Uten mot-poenget forsvinner Kants normative krav om å tenke selv.",
    },
    {
      question: "En Haslanger-passasje viser at «hva som telles som mat» er sosialt bestemt OG at kategorien over tid former hva vi faktisk dyrker. Hvilke to fenomener illustrerer dette?",
      options: ["Begrepskonstruksjon (kategorien) og objektkonstruksjon (tingene selv)", "Sex og gender", "Eliminativisme og ikke-eliminativisme", "Sannhet og overbevisning"],
      explanation: "Begrepskonstruksjon = våre kategorier er sosialt formet; objektkonstruksjon = tingene selv formes av at kategoriene brukes på dem. H2025 premierte forståelsen av nettopp denne mekanismen.",
    },
    {
      question: "Hva er den korrekte betydningen av «behandle sitatet i argumentets helhet» i S2?",
      options: ["Å angi utdragets funksjon og plassere det i tekstens overordnede argument, ikke bare oversette det", "Å sitere hele teksten utdraget er hentet fra", "Å behandle alle andre tenkere teksten nevner", "Å skrive et så langt svar som mulig"],
      explanation: "S2 krever funksjonsidentifikasjon og plassering. Å bare parafrasere utdraget løsrevet er feil #7 og gir D/E-nivå.",
    },
    {
      question: "En kandidat svarer på en Descartes-oppgave med detaljert biografi og epokehistorie, men lite om selve tvilsargumentet. Hva er problemet?",
      options: ["Feil #3 — leksikonsvar: generisk oppslagsverk-kunnskap med lav relevans nulles", "Feil #6 — begrepsglidning mellom nabobegreper", "Feil #5 — drøfting uten kobling til (a)/(b)", "Feil #10 — formalfeil i semesteroppgaven"],
      explanation: "Relevanskravet krever at du svarer på det oppgaven spør om (argumentet), ikke viser bredde om epoke og liv. Biografi- og epokestoff med lav relevans nulles (feil #3).",
    },
    {
      question: "Hvor lang tid bør du typisk bruke per delspørsmål (a/b) i kunnskapsdelene?",
      options: ["15 til 25 minutter", "5 til 8 minutter", "45 til 60 minutter", "Hele eksamenstiden fordelt likt uansett antall spørsmål"],
      explanation: "Kunnskapsdelene har et budsjett på 15–25 minutter hver; drøftingsdelen får mer (30–45 min). Ved flere sitatutdrag fordeles tiden så alle behandles.",
    },
    {
      question: "Hva løfter typisk en redegjørelse fra C til A i disse sjangrene?",
      options: ["Det subtile ekstra: presise nabobegreper og en dypere strukturell innsikt (f.eks. at aitia ikke er moderne kausalitet)", "Å skrive dobbelt så langt", "Å legge til en historisk innledning om tenkerens liv", "Å nevne så mange tenkere som mulig"],
      explanation: "Et korrekt kjernesvar er C-stoff; A krever i tillegg presise nabobegreper og subtile strukturelle poeng (metode vs. skeptisisme, aitia vs. kausalitet, begreps- vs. objektkonstruksjon).",
    },
  ],
  'exphil03-4-2': [
    {
      question: "Hva er strukturgrepet som skiller en god S3-sammenligning fra to referater?",
      options: ["Å bygge langs dimensjoner (akser) der begge tenkere møtes på hvert punkt", "Å skrive alt om tenker A først, så alt om tenker B", "Å velge den tenkeren man liker best og bygge den sterkt", "Å liste flest mulig fakta om begge tenkere"],
      explanation: "En sammenligning organiseres etter felles dimensjoner der A og B stilles mot hverandre punkt for punkt. To parallelle referater sidestiller, men sammenligner ikke (feil #1).",
    },
    {
      question: "Hva er en «dimensjon» (akse) i en sammenligningsoppgave?",
      options: ["Et felles spørsmål begge tenkere svarer på, som gjør sammenligning mulig", "En liste over fakta om den ene tenkeren", "Tenkerens fødselsår og verk", "Antall argumenter hver tenker har"],
      explanation: "En dimensjon er et felles spørsmål — «hva gjør en handling rett?», «hva er kunnskapens kilde?» — som begge svarer på, slik at forskjellen kan vises.",
    },
    {
      question: "Hva er den viktigste regelen når du velger dimensjoner å sammenligne på?",
      options: ["Velg dimensjoner der paret faktisk er uenig — der ligger bruddflaten", "Velg dimensjoner der paret er enig, så svaret blir ryddig", "Velg flest mulig dimensjoner uansett relevans", "Velg alltid nøyaktig fire dimensjoner"],
      explanation: "En sammenligning har noe å hente der tenkerne er uenige. En dimensjon de er enige om, viser at du ikke har funnet kontrasten.",
    },
    {
      question: "Langs hvilken dimensjon ligger hovedbruddet mellom Kant og Mill?",
      options: ["Hva gjør en handling rett: sinnelag/maksime (Kant) vs. konsekvenser (Mill)", "Om Gud finnes", "Hvor formene befinner seg", "Om kunnskap krever sikkerhet"],
      explanation: "Kant er deontolog (sinnelaget/maksimen avgjør), Mill konsekvensialist (følgene avgjør). Det er selve bruddflaten mellom de to.",
    },
    {
      question: "På hvilken dimensjon skiller Platon og Aristoteles seg om virkeligheten?",
      options: ["Hvor formene finnes: egen idéverden (Platon) vs. i tingen selv (Aristoteles)", "Om lykke er moralens mål", "Om sjelen kan bevege kroppen", "Om kunnskap krever gode grunner"],
      explanation: "Platon plasserer formene i en egen idéverden (delaktighet); Aristoteles har formen i tingen selv (hylemorfisme). Dette styrer også kunnskapssynet: gjenerindring vs. erfaring.",
    },
    {
      question: "Hva er selvstendighetsbonusen i en S3-oppgave?",
      options: ["En kort, begrunnet vurdering av hvem som står sterkest på hvert punkt", "Å skrive lengre enn andre kandidater", "Å nevne flere tenkere enn oppgaven ber om", "Å konkludere med at begge har helt rett"],
      explanation: "H2024-veiledningen honorerer selvstendighet: den korte vurderingen av hvem som står sterkest der, med grunner. Uten grunner blir det feil #2 (mening uten grunner).",
    },
    {
      question: "En kandidat sammenligner utilitarisme og dydsetikk og bruker «lykke» i samme betydning for både Mill og Aristoteles. Hva er feilen?",
      options: ["Feil #6 — begrepsglidning: nytelse (Mill) og eudaimonia (Aristoteles) er ulike lykkebegreper", "Feil #4 — å hoppe over et delspørsmål", "Feil #8 — å yte bare den ene rettferdighet", "Feil #10 — formalfeil i semesteroppgaven"],
      explanation: "Mills lykke er nytelse/fravær av smerte; Aristoteles' eudaimonia er et vellykket liv i samsvar med dyd. Ett lykkebegrep for begge får kontrasten til å kollapse (feil #6).",
    },
    {
      question: "Hva er kjernen i Elisabeths innvending mot Descartes' dualisme?",
      options: ["Interaksjonsproblemet: hvordan kan en uutstrakt sjel bevege en utstrakt kropp?", "At Descartes ikke trodde på Gud", "At sansene alltid bedrar oss", "At cogito er et sirkelargument"],
      explanation: "Elisabeth presser dualismen innenfra: hvis sjelen er uutstrakt, mangler Descartes en mekanisme for hvordan den kan sette en utstrakt kropp i bevegelse. Det er det presise interaksjonspoenget, ikke generell skepsis (feil #7).",
    },
    {
      question: "En kandidat bygger sin favorittposisjon sterkt og gjør motparten til en stråmann. Hvilken feil er dette?",
      options: ["Feil #8 — å yte bare den ene posisjonen rettferdighet", "Feil #1 — to parallelle referater", "Feil #14 — gammelt pensum-spøkelse", "Feil #7 — tolke sitatet løsrevet"],
      explanation: "Sensor honorerer at begge posisjoner behandles rettferdig. Å svekke motparten kunstig er feil #8 (ensidig behandling).",
    },
    {
      question: "Oppgaven lyder «gjør rede for begge og sammenlign». En kandidat redegjør grundig, men sammenligner ikke. Hva er problemet?",
      options: ["Feil #4 — å svare på halve oppgaven; den har tre ledd (rede for A, rede for B, sammenlign)", "Feil #2 — mening uten grunner", "Feil #6 — begrepsglidning", "Feil #3 — leksikonsvar"],
      explanation: "«Gjør rede for begge og sammenlign» har tre ledd. Å hoppe over sammenligningsdelen bryter jevnhetsregelen (feil #4).",
    },
    {
      question: "Hvordan er uenigheten mellom Wikforss og Descartes best formulert på én dimensjon?",
      options: ["Kunnskapens krav: gode grunner/evidens (Wikforss) vs. sikkerhet (Descartes)", "Om formene finnes i en idéverden", "Om lykke er nytelse eller eudaimonia", "Om staten skal bygge på en kontrakt"],
      explanation: "Descartes krever sikkerhet (smalt kunnskapsbegrep); Wikforss krever gode grunner (fallibilisme, romsligere). Fallibilisme er ikke skeptisisme (feil #6).",
    },
    {
      question: "Hva må selvstendighetsbonusen alltid ha for å telle?",
      options: ["Grunner — en vurdering uten argument er bare mening (feil #2)", "En klar vinner som får rett på alle punkter", "Minst fire dimensjoner", "En historisk innledning om begge tenkere"],
      explanation: "Vurderingen av hvem som står sterkest må begrunnes. En påstand om at «X har rett» uten argument er mening uten grunner (feil #2), ikke selvstendighet.",
    },
  ],
  'exphil03-4-3': [
    {
      question: "Hvilke fire punkter utgjør firepunktslisten for drøftingsdelen?",
      options: ["Argumenter for/mot → kritisk vurdering → kobling til pensum → selvstendig refleksjon", "Innledning → hoveddel → eksempel → avslutning", "Plasser → gjengi → rekonstruer → illustrer", "Parafraser → funksjon → plassering → begreper"],
      explanation: "Firepunktslisten står fast i sensorveiledningene 2024–2025. Punkt 3 (pensumkobling) gjør drøftingen filosofisk; punkt 2 (kritisk vurdering) gjør den til en drøfting og ikke en listing.",
    },
    {
      question: "Hva er riktig rekkefølge i femtrinnsstrukturen for en drøftingsdel?",
      options: ["Ta stilling → beste argument for → beste innvending mot → veiing → forbeholden konklusjon", "Beste argument for → konklusjon → innvending → veiing → stillingtagen", "Innvending → veiing → stillingtagen → argument for → konklusjon", "Konklusjon → argument for → argument mot → stillingtagen → forbehold"],
      explanation: "Ta stilling tidlig, gi det beste for-argumentet (forankret og med gjenbruk), den beste innvendingen, vei dem, og konkluder med forbehold. Trinn 4 (veiing) er der karakteren avgjøres.",
    },
    {
      question: "Hva er gjenbruksbonusen?",
      options: ["Å føre poeng fra kunnskapsdelene (a)/(b) inn i drøftingen med eksplisitt kobling", "Å gjenbruke samme oppgave fra et tidligere semester", "Å kopiere redegjørelsen fra (a) ordrett inn i (c)", "Å bruke samme innvending i alle deloppgaver"],
      explanation: "Gjenbruksbonusen nevnes i samtlige veiledninger 2024–2025: bruk (a)/(b) som byggesteiner i drøftingen («som vist i (a) …»). Å kopiere referatet inn er derimot feil #1.",
    },
    {
      question: "En kandidat kopierer hele redegjørelsen fra (a) inn i drøftingsdelen (c) i stedet for å drøfte. Hva er feilen?",
      options: ["Feil #1 — mer redegjørelse i (c) (referatforlengelse gir D/E-profil)", "Feil #8 — ensidig drøfting uten innvending", "Feil #6 — begrepsglidning", "Feil #10 — formalfeil i semesteroppgaven"],
      explanation: "Drøftingsdelen skal behandle stoffet, ikke gjengi det på nytt. Å forlenge referatet er feil #1. Gjenbruk betyr å bruke poenget som byggestein, ikke å kopiere det.",
    },
    {
      question: "Hva innebærer motargument-generatoren?",
      options: ["Å hente den beste innvendingen fra en annen pensumtenker", "Å finne på en innvending selv uten pensumkobling", "Å avvise alle innvendinger for å bygge et sterkere svar", "Å la være å ta stilling for å virke balansert"],
      explanation: "Den beste innvendingen kommer ofte fra parets nabo: utilitarisme ← Kant, Descartes ← Wikforss, dualisme ← Elisabeth, Locke ← Held. En forankret innvending er sterkere enn en løs motforestilling.",
    },
    {
      question: "Fra hvilken tenker henter du typisk den sterkeste innvendingen mot utilitarismen?",
      options: ["Kant — verdigheten og rettighetsinnvendingen (mennesket som formål i seg selv)", "Wikforss — fallibilismen", "Elisabeth — interaksjonsproblemet", "Platon — gjenerindringslæren"],
      explanation: "Kant fanger at mennesket er formål i seg selv og ikke kan ofres for summen. Det er den klassiske innvendingen mot at bare følgene for flest teller.",
    },
    {
      question: "Hva skiller «veiing» fra «listing» i en drøfting?",
      options: ["Veiing viser hvorfor ett argument veier tyngst; listing setter bare for og mot ved siden av hverandre", "Veiing er lengre enn listing", "Veiing bruker flere tenkere enn listing", "De er det samme, men veiing er det formelle ordet"],
      explanation: "Veiing (firepunktslistens punkt 2) er å begrunne hvorfor det ene argumentet er sterkere. Å bare stille argumentene opp uten å avveie dem er drøftingens vanligste svakhet.",
    },
    {
      question: "En kandidat bygger bare for-siden av en påstand og tar aldri med noen innvending. Hvilken feil er dette?",
      options: ["Feil #8 — ensidig drøfting uten innvendinger", "Feil #1 — gjenfortelling uten drøfting", "Feil #5 — drøfting uten kobling til (a)/(b)", "Feil #3 — leksikonsvar"],
      explanation: "En drøfting uten en innvending tatt på alvor er ikke en drøfting. Bruk motargument-generatoren for å hente en forankret innvending (feil #8).",
    },
    {
      question: "I evolusjonsdrøftingen: hvilket skille løfter svaret til A?",
      options: ["Genese/gyldighet — en oppfatnings opphav sier ikke i seg selv at den er usann", "Sex/gender — biologisk vs. sosialt kjønn", "Aitia/kausalitet — bred vs. moderne årsak", "Handling/regel — nivåene i utilitarismen"],
      explanation: "At verdiene har et evolusjonært opphav (genese) betyr ikke uten videre at de er usanne (gyldighet). Å gjøre dette skillet eksplisitt er A-differensiatoren i Street-drøftingen.",
    },
    {
      question: "I drøftingen av kunnskapsresistens som demokratiproblem: hva er symmetri-poenget som løfter til A?",
      options: ["At resistens kan ramme også «vår side» — vi avviser ubehagelig evidens selv", "At demokratiet alltid vinner over resistens", "At mer informasjon alltid løser problemet", "At bare motstandere er kunnskapsresistente"],
      explanation: "Å innse at resistens rammer også en selv gjør trusselen mer alvorlig, ikke mindre, og viser selvstendighet. Det er et av grepene som løfter resistensdrøftingen til A.",
    },
    {
      question: "En drøfting starter helt på nytt uten å knytte an til det kandidaten viste i (a) og (b). Hva er feilen?",
      options: ["Feil #5 — drøfting som starter «på nytt» uten kobling (gjenbruksbonusen kastes bort)", "Feil #13 — ignorere tankeeksperimentets premisser", "Feil #2 — mening uten grunner", "Feil #14 — gammelt pensum-spøkelse"],
      explanation: "Gjenbruksbonusen premieres i alle veiledninger. Å starte drøftingen fra bunnen uten å koble til (a)/(b) kaster bort forarbeidet (feil #5).",
    },
    {
      question: "I drøftingen «kan biologisk kjønn være konstruert?», hva er det avgjørende presise poenget?",
      options: ["At kategorien (begrepskonstruksjon) kan være sosialt formet uten at kroppslige forskjeller blir uvirkelige", "At biologisk kjønn ikke finnes", "At sosialt kjønn er det eneste virkelige", "At all biologi er en illusjon"],
      explanation: "Konstruert kategori betyr at grensen og vektleggingen er sosialt bestemt, ikke at kroppene er oppfunnet. Å blande begrepskonstruksjon med at kroppene selv er konstruert er feil #6.",
    },
    {
      question: "Hva kjennetegner en stillingtagen som holder mål i en drøfting?",
      options: ["Den tas tidlig OG begrunnes med argumenter forankret i pensum", "Den spares til siste linje for å virke balansert", "Den bygger bare på personlig magefølelse", "Den unngås helt for ikke å ta feil"],
      explanation: "Ta stilling tidlig (femtrinnenes trinn 1) og begrunn den. Stillingtagen uten grunner er mening uten grunner (feil #2); ingen stillingtagen gir en drøfting uten retning.",
    },
    {
      question: "Hvorfor er punkt 3 i firepunktslisten (kobling til pensum) så viktig?",
      options: ["Det gjør drøftingen filosofisk og forankret i stedet for løs mening", "Det gjør drøftingen lengre", "Det erstatter behovet for veiing", "Det lar deg unngå å ta stilling"],
      explanation: "Uten forankring i navngitte pensumtenkere blir drøftingen synsing. «Forankring uten avsender er C-stoff»; helt uten forankring blir det feil #2.",
    },
    {
      question: "Hvor lang tid bør drøftingsdelen (c/d) typisk få?",
      options: ["30 til 45 minutter", "5 til 10 minutter", "Like mye som ett kunnskapsdelspørsmål", "Bare den tiden som blir til overs"],
      explanation: "Drøftingsdelen får mest tid (30–45 min) fordi det er der karakteren avgjøres. Kunnskapsdelene får 15–25 min hver.",
    },
  ],
  'exphil03-4-4': [
    {
      question: "Hva er riktig rekkefølge i firetrinnmetoden for å anvende en teori på en case?",
      options: ["Identifiser den avgjørende egenskapen → anvend mekanisk på casen → få fram divergensen → begrunnet vurdering", "Ta stilling → argument for → innvending → konklusjon", "Parafraser utdraget → identifiser funksjon → plasser i argumentet → vurder", "Referer teorien → gjenta casen → oppsummer → konkluder"],
      explanation: "Metoden fra kapittel 3.4, generalisert: finn teoriens avgjørende egenskap, kjør den mekanisk på det gitte tilfellet, få fram hvor teoriene skiller lag, og vurder med grunner.",
    },
    {
      question: "Hva menes med premissdisiplin i en tankeeksperiment-oppgave?",
      options: ["Å lese premissene som stipulasjoner og svare innenfor dem, ikke bestride dem som empiri", "Å velge det premisset man er mest enig i og se bort fra resten", "Å bevise at premissene er realistiske før man svarer", "Å bytte ut premissene med mer sannsynlige forutsetninger"],
      explanation: "Godsherren er snill, øyboeren er alene, roboten har ingen følelser — premissene fastsetter betingelsene. Å omgå dem viser at man ikke har forstått hva casen tester (feil #13).",
    },
    {
      question: "En kandidat svarer: «Men i virkeligheten ville en slaveeier aldri behandlet folk godt.» Hvilken feil er dette?",
      options: ["#13 — å normalisere bort tankeeksperimentets premisser", "#1 — gjenfortelling uten drøfting", "#7 — tolke sitatet løsrevet", "#12 — svare på begge valgfrie oppgaver"],
      explanation: "Premisset stipulerer at herren behandler dem godt. Å bestride det er å omgå casen, som er konstruert for å isolere spørsmålet om noe utover velferd betyr noe (feil #13).",
    },
    {
      question: "I slaveri-testen fordømmer utilitarismen og Kants pliktetikk ordningen på ulikt grunnlag. Hva er divergensen?",
      options: ["Utilitarismen fordømmer betinget via følgene; Kant fordømmer ubetinget via verdigheten", "Utilitarismen fordømmer ubetinget; Kant tillater ordningen", "Begge tillater ordningen fordi velferden er høyere", "Kant fordømmer via følgene; utilitarismen via universaliseringen"],
      explanation: "Casen kobler av lidelsen. Utilitarismen kan bare fordømme via en empirisk antakelse om utrygghet (betinget), mens Kant fordømmer ufriheten uansett fordi verdigheten krenkes (ubetinget).",
    },
    {
      question: "Hva er trinn 2 (anvend mekanisk) ment å hindre?",
      options: ["At man bare gjengir teorien i generelle vendinger uten å røre casen (feil #1)", "At man tar stilling for tidlig i drøftingen", "At man bruker mer enn én teori", "At man siterer primærteksten løsrevet"],
      explanation: "En teori man bare refererer, har ikke rørt tankeeksperimentet. Trinn 2 krever at man kjører teoriens avgjørende egenskap konkret på det gitte tilfellet.",
    },
    {
      question: "Hva avgjør ifølge Lakatos om et forskningsprogram er progressivt snarere enn degenerert?",
      options: ["Om programmet gir nye, dristige forutsigelser som kunne slått feil", "Om teorien er matematisk elegant og indre konsistent", "Om teorien forklarer alt vi allerede vet", "Om en enkelthypotese blir motbevist"],
      explanation: "Lakatos vurderer programmer over tid. Et progressivt program forutsier noe nytt og testbart; et degenerert reddes bare med ad hoc-justeringer. Eleganse og bekreftelser av det kjente skiller ikke vitenskap fra pseudovitenskap.",
    },
    {
      question: "En horoskop-app forklarer hver bomtreff med en ny faktor lagt til i etterkant. Hva gjør dette den ifølge Lakatos?",
      options: ["Et degenerert program — beskyttelsesbeltet reddes med ad hoc-justeringer", "Et progressivt program, fordi den forklarer alle avvik", "Vitenskap, fordi den bruker maskinlæring", "Pseudovitenskap, fordi enkeltspådommer slår feil"],
      explanation: "Programmet risikerer aldri noe: hver feil forklares bort i etterkant. Det er ad hoc-redning av den harde kjernen, ikke nye dristige forutsigelser. At enkeltspådommer feiler er ikke i seg selv nok — det skjer i ekte vitenskap også.",
    },
    {
      question: "På en Wikforss-case: hva må holdes presist fra hverandre?",
      options: ["Fallibilisme (gode grunner holder, vi kan ta feil og likevel vite) og skeptisisme (vi vet ingenting)", "Overbevisning og sannhet", "Begrepskonstruksjon og objektkonstruksjon", "Progressivt og degenerert program"],
      explanation: "Å blande fallibilisme og skeptisisme er den hyppigste presisjonsfeilen i Vite-caser (feil #6). Fallibilisme sier at gode grunner holder selv om vi kan ta feil; skeptisisme benekter at vi vet noe.",
    },
    {
      question: "På en Haslanger-case skiller man begrepskonstruksjon fra objektkonstruksjon. Hva er objektkonstruksjon?",
      options: ["At tingene selv (menneskene) formes av at kategorien brukes på dem", "At kategorien vår er formet av sosiale praksiser", "At kategorien er oppdiktet og derfor uvirkelig", "At kategorien avleses direkte av naturen"],
      explanation: "Begrepskonstruksjon gjelder kategorien (grensene og vektleggingen er sosialt valgt); objektkonstruksjon gjelder tingene selv (institusjoner former faktiske mennesker via kategoribruken).",
    },
    {
      question: "Hvorfor betyr «konstruert» ikke «uvirkelig» i en Haslanger-analyse?",
      options: ["Konstruert betyr sosialt formet, ikke oppdiktet — kategorien kan ha kraftige virkelige virkninger", "Fordi alle kategorier til sist er biologiske", "Fordi konstruerte kategorier alltid bør avskaffes", "Fordi konstruksjon og virkelighet er samme sak"],
      explanation: "Å blande «konstruert» med «uvirkelig/vilkårlig» er presisjonsfeilen (feil #6). En sosialt formet kategori som «ungdom» virker kraftig nettopp fordi institusjoner handler på den.",
    },
    {
      question: "Hva kreves i «vurder med to teorier»-varianten (H22u-mønsteret) utover å referere begge teoriene?",
      options: ["Å få fram divergensen mellom dem og vurdere hvilken analyse som treffer casen best", "Å velge den teorien man liker best og se bort fra den andre", "Å konkludere med at begge har like rett", "Å referere en tredje teori i tillegg"],
      explanation: "To parallelle referater uten divergens-analyse er en D/E-profil. Poenget er å vise hvor teoriene skiller lag og hvorfor, og så vurdere med grunner.",
    },
    {
      question: "En kandidat avslutter en to-teori-analyse med «begge har noe for seg» uten å veie. Hva mangler?",
      options: ["Den begrunnede vurderingen (trinn 4) — å vise med grunner hvilken analyse som treffer best", "Premissdisiplinen", "Den mekaniske anvendelsen", "Identifiseringen av den avgjørende egenskapen"],
      explanation: "Metodens fjerde trinn er selvstendighetsleddet: det holder ikke å si hva du mener — vis grunnene. Å hoppe over veiingen dropper det sensor kaller vurderingsevne.",
    },
  ],
  'exphil03-4-5': [
    {
      question: "Hvilke tre formalfeil gir F i semesteroppgaven uansett faglig innhold?",
      options: ["Manglende stedfestet henvisning, manglende litteraturliste, brudd på ordgrensen", "Manglende innledning, manglende konklusjon, feil skrifttype", "For få sitater, for mange parafraser, manglende overskrifter", "Manglende problemstilling, ensidig drøfting, manglende eksempler"],
      explanation: "H2021-veiledningen er tydelig: hver av disse tre gir F alene, hvor sterk argumentasjonen enn er. De er uavhengige av de fem karakterkravene og må fjernes først.",
    },
    {
      question: "Hva er ordgrensen for semesteroppgaven i seminarvarianten?",
      options: ["800–1000 ord", "500–700 ord", "1500–2000 ord", "Ingen fast grense"],
      explanation: "Ordgrensen er 800–1000 ord og er en absolutt ramme. Brudd i begge retninger gir F uansett kvalitet.",
    },
    {
      question: "Hva menes med en stedfestet henvisning?",
      options: ["En henvisning til et bestemt sted i primærteksten, ikke bare til verket generelt", "En henvisning som står nederst på siden", "En henvisning til en nettside med URL", "En henvisning til hvilket land teksten ble skrevet i"],
      explanation: "«Foot argumenterer i «Eutanasi» for at …» med side-/avsnittsangivelse er etterrettelig; «Foot mener …» er ubelagt. Manglende stedfesting er den første av de tre formalfellene.",
    },
    {
      question: "Hvorfor må også en parafrase krediteres?",
      options: ["Fordi poenget er lånt fra en annen selv om ordene er dine — å la det stå ukreditert er sitatslurv (feil #11)", "Fordi parafraser alltid skal stå i anførselstegn", "Fordi parafraser teller mot ordgrensen", "Fordi parafraser ikke trenger kreditering, bare sitater gjør det"],
      explanation: "En parafrase er ditt eget sammendrag av en tenkers poeng, men poenget er lånt og skal krediteres. Å la andres tanker stå udifferensiert som dine behandles som fusk (feil #11).",
    },
    {
      question: "Hvordan bør ordbudsjettet fordeles i disposisjonsmalen?",
      options: ["Innledning ~100 · redegjørelse ~350 · drøfting ~400 · konklusjon ~100", "Innledning ~400 · redegjørelse ~100 · drøfting ~100 · konklusjon ~400", "Alt likt fordelt på fire deler à ~250", "Redegjørelse ~700 · drøfting ~200 · konklusjon ~100"],
      explanation: "Hoveddelen er drøftingen (~400). Redegjørelsen (~350) skal likevel være solid, siden kunnskap og argumentasjon vektes likt.",
    },
    {
      question: "Blir teksten for lang, hvor bør du kutte først?",
      options: ["I redegjørelse og bakgrunnsstoff — behold bare det drøftingen faktisk bruker", "I veiingen, siden den tar mest plass", "I litteraturlisten", "I konklusjonen"],
      explanation: "Ordgrense-økonomi: kutt aldri i veiingen, som er der karakteren avgjøres. Bakgrunn og redegjørelse ut over det drøftingen bruker, ryddes vekk først.",
    },
    {
      question: "Hvordan vektes kunnskap og argumentasjon i semesteroppgaven?",
      options: ["Likt — å gjengi/kommentere pensum og å vurdere argumenter teller like mye", "Kunnskap vektes dobbelt så mye som argumentasjon", "Argumentasjon vektes dobbelt så mye som kunnskap", "Bare argumentasjonen vurderes"],
      explanation: "De vektes likt. En tekst som er sterk på redegjørelse men tynn på drøfting — eller omvendt — treffer ikke toppen (ubalanse er feil #9).",
    },
    {
      question: "Hvorfor stilles høyere krav til akademisk form i semesteroppgaven enn i eksamensdrøftingen?",
      options: ["Fordi du har tid til å revidere, mens eksamen skjer under tidspress", "Fordi semesteroppgaven er kortere", "Fordi eksamen har strengere ordgrense", "Fordi semesteroppgaven ikke teller i helhetsvurderingen"],
      explanation: "Tid til revisjon skjerper kravene til stedfestede henvisninger, sitatpresisjon og litteraturliste — og skjerper redelighetskravet, ikke motsatt.",
    },
    {
      question: "En semesteroppgave er faglig utmerket, men mangler litteraturliste. Hva blir utfallet?",
      options: ["F — manglende litteraturliste er en av de tre formalfellene som gir stryk uansett innhold", "C — trekk for form, men bestått på faglig kvalitet", "Ingen konsekvens hvis henvisningene i teksten er på plass", "Bestått, men uten mulighet for A"],
      explanation: "Uten litteraturliste er teksten uetterrettelig som akademisk arbeid og gis F, selv om henvisningene i brødteksten er korrekte.",
    },
    {
      question: "Hvor tungt teller semesteroppgaven i helhetsvurderingen av seminarvarianten?",
      options: ["Mest av komponentene — H2021 anga omtrent 60/40 mot hjemmeeksamenen", "Den teller ikke, bare hjemmeeksamenen vurderes", "Nøyaktig like mye som hjemmeeksamenen", "Minst — hjemmeeksamenen dominerer"],
      explanation: "Semesteroppgaven tillegges mest vekt (H2021: ca. 60/40), men begge komponentene må bestås hver for seg.",
    },
  ],
  'exphil03-4-6': [
    {
      question: "En kandidat refererer Mill korrekt i drøftingsdelen, men tar aldri stilling, veier ingenting og reiser ingen innvending. Hvilken feil?",
      options: ["Feil #1 — gjenfortelling uten drøfting", "Feil #2 — mening uten grunner", "Feil #6 — upresise begreper", "Feil #8 — ensidig drøfting"],
      explanation: "#1 er korrekt kunnskap uten behandling: gjengivelse uten drøfting er D-stoff. Kandidaten har stoffet, men drøfter det ikke.",
    },
    {
      question: "«Jeg synes Lockes kontraktsteori er urealistisk fordi folk egentlig ikke er så egoistiske.» Hvilken feil?",
      options: ["Feil #2 — mening uten grunner", "Feil #1 — gjenfortelling uten drøfting", "Feil #5 — ikke koble til (a)/(b)", "Feil #7 — sitat løsrevet"],
      explanation: "#2: standpunktet er tatt, men uten filosofisk forankring. Påstanden kunne snus uten at noe i teksten falt — det er kjennetegnet på mening uten grunner.",
    },
    {
      question: "Hva er kjerneforskjellen mellom feil #1 og feil #2?",
      options: ["#1 er kunnskap uten stillingtagen; #2 er stillingtagen uten kunnskap/grunner", "#1 er upresise begreper; #2 er løsrevet sitat", "#1 gjelder kunnskapsdelen; #2 gjelder semesteroppgaven", "De er samme feil under to navn"],
      explanation: "#1 og #2 er speilbilder: #1 refererer men drøfter ikke, #2 drøfter men forankrer ikke. Reparasjonen er å slå kunnskap og begrunnet stillingtagen sammen.",
    },
    {
      question: "En besvarelse har sterk (a) og (c), men lar (b) stå tom. Hvilken feil, og hva blokkerer den?",
      options: ["Feil #4 — hoppe over et delspørsmål; den blokkerer C via jevnhetsregelen", "Feil #9 — ubalanse kunnskap/analyse; den blokkerer A", "Feil #5 — manglende kobling; den blokkerer bonusen", "Feil #12 — begge oppgaver; den halverer dybden"],
      explanation: "#4 bryter jevnhetsregelen: C krever «god» på ALLE delspørsmål. Én blank del trekker helheten under C uansett hvor sterk (a) er.",
    },
    {
      question: "Drøftingsdelen (c) starter helt forfra uten å bruke ett eneste poeng fra (a) eller (b). Hvilken feil?",
      options: ["Feil #5 — ikke koble drøftingen til (a)/(b)", "Feil #4 — hoppe over et delspørsmål", "Feil #1 — gjenfortelling uten drøfting", "Feil #3 — leksikonsvar"],
      explanation: "#5 kaster bort gjenbruksbonusen. Alle delspørsmål ER besvart (så ikke #4), men (c) vokser ikke ut av kunnskapsdelene.",
    },
    {
      question: "«Wikforss er fallibilist, altså mener hun at vi ikke kan vite noe sikkert og at all kunnskap er usikker gjetning.» Hvilken feil?",
      options: ["Feil #6 — upresise begreper (fallibilisme glidd over i skeptisisme)", "Feil #7 — sitat løsrevet", "Feil #1 — gjenfortelling uten drøfting", "Feil #14 — gammelt pensum"],
      explanation: "#6: fallibilisme sier at vi kan ta feil men likevel vet — ikke at vi ikke vet. Å gli over i skeptisisme er den hyppigste presisjonsfeilen i Vite-delen.",
    },
    {
      question: "«Det kategoriske imperativet sier at hvis du vil bli respektert, må du respektere andre.» Hvilket nabobegrep glir kandidaten over i?",
      options: ["Det hypotetiske imperativet (betinget «hvis du vil X, gjør Y»)", "Universaliseringstesten", "Den gode vilje", "Aktelse for moralloven"],
      explanation: "Feil #6: «hvis … så» er formen på et hypotetisk (betinget) imperativ. Det kategoriske imperativet er ubetinget — det gjelder uansett dine mål.",
    },
    {
      question: "I en sitattolkning parafraserer kandidaten utdraget riktig, men sier aldri hva utdraget GJØR i argumentet. Hvilken feil?",
      options: ["Feil #7 — tolke sitatet løsrevet", "Feil #6 — upresise begreper", "Feil #2 — mening uten grunner", "Feil #10 — formalfeil"],
      explanation: "#7: et utdrag har en funksjon (premiss, innvending, eksempel eller svar på innvending). Uten å plassere det i tekstens overordnede argument blir tolkningen «delvis rett» = D/E.",
    },
    {
      question: "«Utilitarismen er best fordi den tar hensyn til alle likt, den er praktisk og den passer moderne samfunn. Derfor er den holdbar.» Hvilken feil?",
      options: ["Feil #8 — ensidig drøfting uten innvendinger", "Feil #1 — gjenfortelling uten drøfting", "Feil #9 — ubalanse kunnskap/analyse", "Feil #5 — manglende kobling"],
      explanation: "#8: tre argumenter, alle på samme side, ingen motstemme tatt på alvor. Sperrer for A, som krever at man yter posisjonene rettferdighet. Reparasjon: hent innvendingen fra en annen pensumtenker.",
    },
    {
      question: "En besvarelse gjengir fire tenkere feilfritt over flere sider, men drøfter bare i et par tynne setninger. Hvilken feil?",
      options: ["Feil #9 — ubalanse kunnskap/analyse", "Feil #4 — hoppe over et delspørsmål", "Feil #1 — gjenfortelling uten drøfting", "Feil #3 — leksikonsvar"],
      explanation: "#9: sterk på Kunnskap, svak på Forståelse/analyse. C krever «god» på begge. Det er et fordelingsproblem — mindre bredde, mer behandling.",
    },
    {
      question: "En glimrende semesteroppgave på 1350 ord mangler litteraturliste og har henvisninger av typen «som Foot skriver et sted». Hva blir utfallet?",
      options: ["F — de tre formalfellene (#10) gir stryk uansett faglig innhold", "C — svakhetene trekker litt ned", "A — det faglige veier tyngst", "D — halvparten av kravene er oppfylt"],
      explanation: "#10: manglende stedfestet henvisning, manglende litteraturliste og brudd på ordgrensen gir hver for seg F i semesteroppgaven, uavhengig av innholdet.",
    },
    {
      question: "Case: «den omtenksomme arbeidsgiveren» har total kontroll over gjestearbeidere han behandler godt. Kandidaten svarer: «Urealistisk — ingen har total kontroll i dag.» Hvilken feil?",
      options: ["Feil #13 — ignorere tankeeksperimentets premisser", "Feil #2 — mening uten grunner", "Feil #3 — leksikonsvar", "Feil #8 — ensidig drøfting"],
      explanation: "#13: premissene er stipulasjoner, ikke empiri. Å omgå oppsettet i stedet for å teste teoriene mot det viser at kandidaten ikke har forstått hva casen tester.",
    },
    {
      question: "En kandidat forankrer en dyreetikk-drøfting i Singers spesiesisme-begrep. Hvilken feil, og hva skal brukes i stedet?",
      options: ["Feil #14 — gammelt pensum; bruk teoritrekanten og Sylvans menneskesjåvinisme-kritikk", "Feil #6 — upresise begreper; bruk sex/gender-skillet", "Feil #3 — leksikonsvar; bruk mer biografi", "Feil #8 — ensidig drøfting; bruk flere argumenter for Singer"],
      explanation: "#14: Singer er ute av pensum etter 2021 og gir null uttelling. Dyrs moralske status behandles teorinøytralt via teoritrekanten og Sylvan.",
    },
    {
      question: "Hvilke to feil er «C-portens vaktposter» — de som særlig håndhever jevnhetsregelen?",
      options: ["#4 (hoppe over et delspørsmål) og #9 (ubalanse kunnskap/analyse)", "#1 (gjenfortelling) og #2 (mening uten grunner)", "#10 (formalfeil) og #11 (sitatslurv)", "#6 (upresise begreper) og #7 (sitat løsrevet)"],
      explanation: "C krever jevnhet: «god» på Kunnskap OG Forståelse/analyse i ALLE delspørsmål. #4 vokter jevnhet på tvers av delspørsmål; #9 vokter balansen mellom kunnskap og analyse.",
    },
    {
      question: "Hva er kjernediagnosen i feilvaksinen — hvorfor havner besvarelser med god kunnskap likevel på C eller D?",
      options: ["Fordi kunnskapen ikke behandles riktig (drøftes, forankres, presiseres) — ikke fordi den mangler", "Fordi besvarelsene er for korte", "Fordi kandidatene mangler faktakunnskap om tenkerne", "Fordi sensor krever originalforskning av førsteårsstudenter"],
      explanation: "De fleste karaktertap skyldes behandling, ikke innhold: gjengivelse uten drøfting (#1), mening uten grunner (#2), presisjonsglipp (#6) eller ensidighet (#8). En jevn, feilfri C slår en briljant, men ujevn besvarelse.",
    },
  ],
  'exphil03-4-8': [
    {
      question: "I 4.8-modellen: hva er den avgjørende presisjonsfeilen C-besvarelsen begår i (b)?",
      options: ["Den lar fallibilismen gli over i skeptisisme («egentlig vet vi aldri noe»)", "Den bytter om på sansebedrag og drømmeargumentet", "Den kaller cogito en slutning i stedet for en bekreftelse", "Den glemmer å nevne den onde ånd"],
      explanation: "Fallibilisme (vi kan ta feil, men vet likevel) er nettopp ikke skeptisisme (vi vet ingenting). Å la det ene gli over i det andre er feil #6, den hyppigst målte presisjonsfeilen i Vite-oppgaver.",
    },
    {
      question: "Hva er riktig rekkefølge på trinnene i Descartes' tvilstrapp?",
      options: ["Sansebedrag → drømmeargumentet → den onde ånd", "Den onde ånd → drømmeargumentet → sansebedrag", "Drømmeargumentet → sansebedrag → den onde ånd", "Sansebedrag → den onde ånd → drømmeargumentet"],
      explanation: "Trinnene stiger i styrke: sansebedraget rammer det fjerne, drømmeargumentet det nære, den onde ånd selv matematikken. Rekkefølgen er S1-toppsvarets skjelett, og å hoppe over ond ånd er feil #4.",
    },
    {
      question: "Hvorfor overlever cogito selv den onde ånd, ifølge (a) i modellen?",
      options: ["For at jeg skal kunne bedras, må jeg være — tvilen bekrefter min egen eksistens", "Fordi den onde ånd ikke er mektig nok til å lure oss i matematikk", "Fordi sansene alltid gir noe sikkert å bygge på", "Fordi Gud garanterer at klare og tydelige ideer er sanne"],
      explanation: "Bedrageren kan ikke lure meg til å tro at jeg finnes hvis jeg ikke gjør det. I selve tvilsakten bekrefter jeg eksistensen min — cogito er derfor det arkimediske punktet.",
    },
    {
      question: "Hva er funksjonen til Wikforss-utdraget i (b) — hvilken jobb gjør det i argumentet?",
      options: ["Det avviser sikkerhetskravet og avgrenser fallibilismen mot skeptisismen", "Det beviser at sansene aldri kan stoles på", "Det innfører de tre vilkårene for første gang", "Det argumenterer for at kunnskap er umulig"],
      explanation: "S2-kjernen er å identifisere funksjonen først. Utdraget forsvarer fallibilismen mot innvendingen om at feilbarlighet gjør kunnskap umulig, og knytter an til det tredje vilkåret: gode grunner, ikke bevis.",
    },
    {
      question: "Hva er A-besvarelsens hovedpoeng i veiingen i (c) — hvorfor generaliserer ikke cogitos sikkerhet?",
      options: ["Cogito er sikkert fordi det er innholdstomt; det garanterer bare at jeg finnes, ikke at verden er slik jeg tror", "Cogito er usikkert og kan derfor ikke være noe forbilde", "Cogito gir sikkerhet om hele verden, så kravet er berettiget", "Cogito er en empirisk observasjon som andre observasjoner"],
      explanation: "Cogito er sikkert nettopp fordi det er innholdstomt — det sier bare at jeg er idet jeg tenker. Å kreve den sikkerheten av all verdenskunnskap er å kreve noe bare selvbevisstheten kan gi. Descartes' krav er feilplassert, ikke feil.",
    },
    {
      question: "Hvorfor når ikke C-besvarelsens (c) A-nivå, selv om (a) er solid?",
      options: ["Den forlenger referatet (#1), starter «på nytt» uten å bruke (a)/(b) (#5) og ender i ubegrunnet mening (#2)", "Den bruker for avanserte begreper og blir uklar", "Den tar for tydelig stilling for tidlig", "Den siterer Wikforss ordrett og for langt"],
      explanation: "Jevnhetsregelen: C-porten krever «god» på Kunnskap OG Forståelse/analyse i ALLE delspørsmål. En solid (a) kompenserer ikke for en upresis (b) og en flat, ukoblet (c).",
    },
  ],
  'exphil03-4-9': [
    {
      question: "Hva er det H2025-formatet tester hardere enn den gamle a–d-oppgaven?",
      options: ["Jevnhet på tvers av de tre feltene Vite/Være/Gjøre og tidsdisiplin", "Evnen til å skrive én svært lang besvarelse", "Utenatlæring av sidetall i VVG", "Ferdighet i å sitere originaltekster ordrett"],
      explanation: "Formatet gir tre selvstendige minioppgaver på fire timer. Man kan ikke lene seg på ett sterkt felt — C-porten krever «god» på alle tre, så jevnhet og tidsfordeling blir avgjørende.",
    },
    {
      question: "I 4.9-modellen er C-besvarelsen sterk i del A, middels i del B og tynn i del C. Hva blir helhetskarakteren, og hvorfor?",
      options: ["C — fordi jevnhetsregelen krever «god» på alle tre delene, og en sterk del A kan ikke løfte en utsultet del C", "A — fordi del A er strålende", "B — fordi gjennomsnittet av delene er middels", "E — fordi del C trekker alt ned til bunnen"],
      explanation: "C-porten vurderes på tvers. Del A på A-nivå kompenserer ikke for en middels B og en tynn C. Det er nettopp dette H2025-formatet er bygget for å avdekke.",
    },
    {
      question: "Hvilken presisjonsfeil gjør C-besvarelsen i del B (Haslanger)?",
      options: ["Den reduserer alt til «samfunnsbestemt» og glir i sex/gender, og mister skillet begrep- mot objektkonstruksjon", "Den forveksler Locke og Held", "Den bytter om sansebedrag og drømmeargumentet", "Den gjør eudaimonia til en følelse"],
      explanation: "H2025 premierte selve mekanismen — konstruksjon av begreper mot objekter. C-besvarelsen fanger den ikke, og glir i sex/gender-skillet (feil #6). Utdragets andre halvdel (menneskene formes av kategoriene = objektkonstruksjon) forsvinner.",
    },
    {
      question: "Ifølge A-besvarelsen i del B: kan biologisk kjønn være konstruert?",
      options: ["Ja, inndelingen i to skarpe kjønn er begrepskonstruert — men det gjør ikke de biologiske trekkene uvirkelige (konstruert ≠ uvirkelig)", "Nei, biologi er naturgitt og kan aldri være konstruert på noe vis", "Ja, og det betyr at kromosomer og hormoner er oppdiktet", "Spørsmålet gir ikke mening innenfor Haslangers teori"],
      explanation: "Selve tosorteringen av et kontinuum av biologiske trekk er en begrepskonstruksjon formet av sosiale formål. At begrepet er konstruert betyr ikke at trekkene er innbilte — konstruert er ikke det samme som uvirkelig.",
    },
    {
      question: "Hva mangler helt i C-besvarelsens tynne del C (Locke/Held), slik at Lockes rett fremstår ubetinget?",
      options: ["De to forbeholdene (nok og like godt igjen til andre; ikke la noe råtne)", "Selve arbeidsargumentet", "Navnet på verket «Om borgerstyret»", "Påstanden om at man eier egen kropp"],
      explanation: "Uten de to forbeholdene fremstår eiendomsretten som ubetinget (feil #6). A-besvarelsen bruker dessuten forbeholdene aktivt: de innrømmer allerede at eieren står i forhold til andre, noe Held radikaliserer.",
    },
    {
      question: "Hvorfor er tidsbudsjett en «strategi» og ikke bare husholdning i H2025-formatet?",
      options: ["Fordi jevnhet er karakterporten — en glimrende del som spiser tiden til en annen senker helheten under C", "Fordi sensor trekker fra poeng for hvert minutt over grensen", "Fordi den lengste besvarelsen alltid får best karakter", "Fordi man må bruke nøyaktig like mange ord i hver del"],
      explanation: "Siden C-porten krever «god» på alle tre delene, senker en utsultet del helheten uansett hvor sterk en annen del er. Å fordele tiden jevnt (~75 min per del) og levere tre jevne deler er derfor selve karakterstrategien.",
    },
  ],
};

export default quizData_exphil03;
