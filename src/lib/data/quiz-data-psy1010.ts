import type { QuizQuestion } from './quiz-data';

const quizData_psy1010: Record<string, QuizQuestion[]> = {
  'psy1010-0-1': [
    {
      question: "Hvor mange oppgaver skal du besvare på PSY1010-eksamen, og hvor mange får du?",
      options: ["Du får fire oppgaver og skal besvare tre av dem.", "Du får tre oppgaver og skal besvare alle tre.", "Du får fem oppgaver og skal besvare fire av dem, der den svakeste teller minst.", "Du får fire oppgaver og skal besvare alle fire."],
      explanation: "Grunnformatet har vært stabilt siden 2008: fire oppgaver, du velger og besvarer tre, og de tre teller likt.",
    },
    {
      question: "Hva skjer hvis du besvarer alle fire oppgavene?",
      options: ["Sensor ser bort fra den SISTE oppgaven du besvarte, ikke den dårligste.", "Sensor teller automatisk de tre beste oppgavene og forkaster den svakeste.", "Du får et lite bonuspoeng for den fjerde.", "Alle fire teller likt inn i snittet."],
      explanation: "Sensor teller de tre første besvarte og ser bort fra den siste — ikke den svakeste. Å svare på alt gir null ekstra og stjeler tid.",
    },
    {
      question: "Hva blir konsekvensen hvis du bare rekker å besvare to av oppgavene reelt?",
      options: ["Automatisk stryk, uansett hvor gode de to er.", "Du får karakter basert på gjennomsnittet av de to.", "Du får trekk på én karakter, men kan bestå.", "Sensor legger til en gjennomsnittsverdi for den manglende."],
      explanation: "Bare to besvarte oppgaver gir automatisk stryk. Tre reelt besvarte oppgaver er ufravikelig for å bestå.",
    },
    {
      question: "Hvordan settes totalkarakteren når du har besvart tre oppgaver?",
      options: ["Som gjennomsnittet av de tre — de teller likt.", "Den beste oppgaven avgjør karakteren.", "Den dårligste oppgaven avgjør karakteren.", "De to beste oppgavene teller dobbelt, mens den tredje bare teller enkelt."],
      explanation: "De tre besvarte oppgavene teller likt, og karakteren er gjennomsnittet av dem. Derfor lønner det seg ikke å la én oppgave sluke tiden fra en annen.",
    },
    {
      question: "Hvilke to temaer er de sikreste gjengangerne på PSY1010-eksamen?",
      options: ["Korrelasjon (20 av 29 sett) og hypotesetesting (19 av 29 sett).", "Etikk og fagfellevurdering.", "Cohens kappa (18 av 29 sett) og spørreskjemakonstruksjon (17 av 29 sett).", "Kvalitativ metode og normalfordeling."],
      explanation: "Opptellingen over 29 sett (2008–2025) viser korrelasjon i 20 sett og hypotesetesting i 19 — de to søylene eksamen bygger på.",
    },
    {
      question: "Hva er den viktigste innholdsendringen på eksamen fra og med 2023?",
      options: ["Kvalitativ metode ble en fast egen oppgave, og regnekravet forsvant i praksis.", "Antallet oppgaver på eksamen økte fra fire til seks, og to av dem ble obligatoriske.", "Eksamen ble flyttet fra vår til høst.", "Korrelasjon ble tatt helt ut av pensum."],
      explanation: "Fra 2023 kom kvalitativ metode inn som fast oppgave med lave krav, og egen utregning ble erstattet av tolkning av oppgitte tall.",
    },
    {
      question: "Hvorfor er det å drille gamle oppgavesett den mest treffsikre forberedelsen i dette emnet?",
      options: ["Fordi gjenbruk er normen — hele oppgaver resirkuleres med kosmetiske endringer.", "Fordi eksamen alltid gjentar nøyaktig samme tall og navn.", "Fordi sensor liker studenter som har sett settene før.", "Fordi pensum skifter helt hvert år, så bare de aller nyeste gamle settene er relevante."],
      explanation: "Oppgaver og veiledningstekst resirkuleres fra år til år med kosmetiske endringer, så de faste oppgavetypene (T1–T8) er svært forutsigbare.",
    },
    {
      question: "En kandidat bruker 90 minutter på favorittoppgaven og 30 minutter på den siste. Hva er problemet?",
      options: ["Alle tre oppgavene teller likt, så en halvferdig tredjeoppgave trekker snittet mer ned enn finpuss løfter det.", "Ingenting galt — det lønner seg alltid å perfeksjonere favorittoppgaven, siden den beste besvarelsen trekker snittet mest opp.", "Sensor gir bonus for den grundigste oppgaven.", "Den siste oppgaven teller uansett ikke."],
      explanation: "Siden de tre teller likt, er tidsfellen dyr: rundt 55 minutter per oppgave gir best snitt.",
    },
    {
      question: "Hva kjennetegner temafordelingen på de fire oppgavene i et typisk sett?",
      options: ["Oppgavene er tematisk «rene» — én om korrelasjon/regresjon, én om hypotesetesting, én om design, én om måling/utvalg eller kvalitativ.", "Alle fire oppgavene handler om samme tema.", "Oppgavene blandes bevisst tematisk, slik at hver av de fire oppgavene dekker litt korrelasjon, litt hypotesetesting, litt design og litt måling om hverandre.", "To oppgaver handler alltid om etikk."],
      explanation: "De fire oppgavene dekker hvert sitt hovedområde. Fordi de er «rene», kan du i praksis velge bort ett hovedtema — men bør ikke planlegge med det.",
    },
    {
      question: "En oppgave starter med «Du får oppgitt r = 0,45. Hva betyr verdien, og hvorfor er dette ikke bevis på årsak?» Hvilken oppgavetype er dette?",
      options: ["T1 — korrelasjonsoppgaven.", "T2 — hypotesetestingsoppgaven.", "T4 — designoppgaven.", "T7 — den kvalitative oppgaven."],
      explanation: "En oppgitt r-verdi og spørsmål om sammenheng vs. årsak er signaturen til korrelasjonsoppgaven (T1), den suverene gjengangeren.",
    },
  ],
  'psy1010-0-2': [
    {
      question: "Hva mener sensorveiledningene når de sier at de er «momenter», ikke fasit?",
      options: ["At forståelse honoreres, og uortodokse løsninger vurderes på egne premisser.", "At bare en ordrett gjengivelse av lærebokas egne formuleringer gir full uttelling på hver deloppgave.", "At det finnes nøyaktig ett riktig svar per deloppgave.", "At sensor teller antall fagord i besvarelsen."],
      explanation: "Veiledningene er momentlister; en kandidat som viser oversikt og prinsipiell forståelse skal honoreres, også ved avvikende ordvalg.",
    },
    {
      question: "Hva sier relevansfilteret om stoff fra andre deler av faget?",
      options: ["Det teller bare når det gjøres relevant for spørsmålet; ellers gir det null.", "Det gir alltid ekstra pluss, fordi det dokumenterer bred kunnskap ut over selve spørsmålet.", "Det trekker karakteren ned med ett trinn.", "Det må alltid tas med for å nå toppkarakter."],
      explanation: "Ren kunnskapsfremvisning («jeg kan også dette», feil #15) ignoreres — den trekker ikke ned, men gir null og stjeler tid.",
    },
    {
      question: "Hva er bokas mantra for å bygge en deloppgavebesvarelse?",
      options: ["Definer — anvend på caset — begrunn.", "List — gjenta — konkluder.", "Skriv mest mulig og dekk absolutt alt du kan om temaet.", "Regn ut — rund av — svar kort."],
      explanation: "Mantraet er «definer — anvend — begrunn». Definisjon alene gir C-tak; det er anvendelsen og begrunnelsen som løfter besvarelsen.",
    },
    {
      question: "Hva beskriver «C-kjerne + A-lag»-modellen?",
      options: ["C-kjernen er kjernepoengene enhver bestått besvarelse må ha; A-laget er de ekstra grepene som løfter til topps.", "At C-svar alltid er dårlige og A-svar alltid er lange.", "At man skal skrive A-laget med begrunnelser og koblinger først, og deretter droppe C-kjernen hvis tiden blir knapp.", "At karakteren avgjøres av hvor mange sider du skriver."],
      explanation: "Bygg C-kjernen først (den sikrer bestått), og legg A-laget — begrunnelser, koblinger, case-tilpasning — oppå der du har tid.",
    },
    {
      question: "Hva skiller typisk en C-besvarelse fra en A-besvarelse i PSY1010?",
      options: ["C treffer kjernepoengene men blir stående i definisjonene; A begrunner valg, knytter begreper sammen og case-tilpasser.", "C er alltid feil; A er alltid riktig.", "C er lang og A er kort.", "C-besvarelser bruker kalkulator på hvert eneste ledd, mens A-besvarelser bevisst løser alle utregninger uten noen hjelpemidler for hånd."],
      explanation: "A/B løser også de vanskelige leddene og kobler begreper (f.eks. varians → SD → SE → p), mens C definerer riktig men mangler koblingene.",
    },
    {
      question: "Hvorfor er det viktig å vise utregningen i en regneoppgave?",
      options: ["Fordi fremgangsmåten teller mest, og et galt sluttsvar fra en enkel regnefeil straffes mildt bare hvis metoden er synlig.", "Fordi sensor kun teller antall regneoperasjoner.", "Fordi selve tallutregningen alltid gir betydelig mer uttelling enn den avsluttende tolkningen av hva resultatet faktisk betyr for studien.", "Fordi kalkulator er forbudt på eksamen."],
      explanation: "Usynlig utregning (feil #13) gjør at «riktig fremgangsmåte»-regelen ikke kan redde deg. Å forstå hva tallet betyr veier dessuten tyngre enn tallet.",
    },
    {
      question: "En kandidat lister alle utvalgsmetodene uten å velge og begrunne for det konkrete caset. Hva blir følgen?",
      options: ["Et C-tak (feil #8) — oppgaven kan ikke gi bedre enn C uansett hvor komplett lista er.", "Full uttelling på deloppgaven, fordi absolutt alle utvalgsmetodene er korrekt nevnt og definert.", "Automatisk stryk på hele oppgaven.", "Pluss for bredde og fullstendighet."],
      explanation: "Oppramsing uten begrunnelse (feil #8) gir et C-tak; det er de begrunnede, case-tilpassede valgene som løfter over C.",
    },
    {
      question: "Hvilket av disse er en A-markør som sensorveiledningene eksplisitt belønner?",
      options: ["Å forklare at korrelasjon bygger på naturlig variasjon, i motsetning til eksperimentets påførte variasjon.", "Å skrive lengst mulig svar.", "Å gjenta oppgaveteksten i innledningen.", "Å definere systematisk alle sentrale begreper i hele faget, uavhengig av hva den enkelte deloppgaven spør om."],
      explanation: "Naturlig vs. påført variasjon er en navngitt A-markør — sammen med kausalmodell-ord, p fra utvalgsfordelingen, signifikans ≠ viktighet, power-resonnement m.fl.",
    },
    {
      question: "Hva er den beste strategien når du står fast på ett vanskelig ledd (f.eks. et ANCOVA-spørsmål)?",
      options: ["Hopp videre, sikre C-kjernen på de andre leddene, og kom tilbake til det vanskelige til slutt.", "Bli sittende med det vanskelige leddet til du løser det, uansett hvor mange minutter det stjeler fra de andre.", "Hopp over hele oppgaven og velg en ny.", "Skriv alt du kan om et beslektet tema i stedet."],
      explanation: "Sikre C-kjernen på alle ledd først (alt teller likt), og bruk resttid på A-skillene. Ikke la ett hardt ledd stjele en hel oppgave.",
    },
    {
      question: "Er C en dårlig karakter å sikte mot i PSY1010?",
      options: ["Nei — C er en god og helt vanlig karakter som de fleste velfungerende kandidater lander på.", "Ja — alt under A regnes som stryk.", "Ja — en C betyr i praksis at besvarelsen er reelt tom og mangler nesten alt av faglig innhold og forståelse.", "C finnes ikke i norsk karakterskala."],
      explanation: "C er en solid, vanlig karakter. En C-besvarelse er ikke dårlig; den er god, men mangler de vanskeligste, koblende leddene.",
    },
    {
      question: "Hvorfor er «les mye, skriv lite» et godt råd for PSY1010?",
      options: ["Fordi lengre svar ikke gir mer uttelling — sensor honorerer korte, presise svar, og utbrodering gir null.", "Fordi sensor i praksis hopper over og aldri rekker å lese de lengste besvarelsene, bare de aller korteste.", "Fordi man skal lese pensum, men aldri øve på å skrive.", "Fordi eksamen er en ren leseprøve."],
      explanation: "Sensor gir ikke ekstra for en halvside der tre presise setninger holder. Mål: forstå bredt, skriv kort og presist (definer → anvend → begrunn).",
    },
    {
      question: "En deloppgave ber om «logikken bak nullhypotesetesting», men kandidaten bare definerer H0 og H1. Hva er problemet?",
      options: ["Oppgaven ber om resonnementet — den indirekte bevisføringen — og da gir definisjoner alene ikke full uttelling.", "Ingenting — definisjoner er alltid nok når begrepene er riktige.", "Kandidaten burde i stedet ha regnet ut en eksakt p-verdi for hånd og vist hele utregningen sin trinn for trinn med formler.", "Kandidaten burde ha skrevet mer om et helt annet tema."],
      explanation: "Når oppgaven ber om logikken, holder ikke definisjoner alene — sensor vil ha resonnementet (hvorfor vi tester H0 og forkaster ved usannsynlige data), ikke bare begrepene.",
    },
  ],
  'psy1010-1-1': [
    {
      question: "Hva er hovedforskjellen mellom vitenskapelig metode og hverdagskunnskap?",
      options: ["Vitenskapelig metode samler data systematisk og lar dem kunne motsi antakelsen", "Vitenskapelig metode bygger på magefølelse og erfaring", "Hverdagskunnskap er per definisjon alltid feil, mens vitenskapelig kunnskap alltid gir det riktige svaret", "Det er ingen reell forskjell"],
      explanation: "Metodens kjerne er systematisk, etterprøvbar datainnsamling der antakelsen kan motbevises — nettopp korrektivet hverdagskunnskapen mangler.",
    },
    {
      question: "Hvilke fire kilder til forskningsideer nevnes i kapitlet?",
      options: ["Tilfeldig observasjon, systematisk observasjon, litteraturen og teori", "Intuisjon, tro, tradisjon og autoritet", "Eksperiment, spørreskjema, systematisk intervju og direkte observasjon i felt", "Hypotese, design, utvalg og analyse"],
      explanation: "Idéene kommer fra tilfeldig og systematisk observasjon, fra litteraturen og fra teori. De tre siste alternativene blander inn metoder og trinn som kommer senere.",
    },
    {
      question: "Hvilke tre krav må et godt forskningsspørsmål oppfylle?",
      options: ["Empirisk testbart, gjennomførbart og viktig", "Falsifiserbart, strengt deduktivt utledet og helst kvantitativt", "Nytt, publiserbart og finansiert", "Objektivt, målbart og reliabelt"],
      explanation: "Kravtriaden er testbart, gjennomførbart og viktig. Falsifiserbarhet er et krav til hypotesen, ikke til forskningsspørsmålet.",
    },
    {
      question: "Hva kjennetegner en vitenskapelig hypotese?",
      options: ["En falsifiserbar påstand om sammenhengen mellom minst to variabler", "Et åpent spørsmål uten forhåndssvar", "En generell påstand som er formulert slik at den aldri kan motbevises av data", "En oppsummering av resultatene"],
      explanation: "Hypotesen er en falsifiserbar, testbar påstand som kobler minst to variabler. En påstand som ikke kan motbevises, er per definisjon ikke en hypotese.",
    },
    {
      question: "Hva betyr det at en hypotese er falsifiserbar?",
      options: ["Det finnes tenkelige data som kan vise at den er gal", "Den er allerede motbevist", "Den kan aldri vise seg gal", "Den bygger på forutsetninger som allerede har vist seg å være falske"],
      explanation: "Falsifiserbarhet betyr at man kan tenke seg data som ville motbevist påstanden — kravet som skiller vitenskap fra uangripelige trossetninger.",
    },
    {
      question: "Hva er operasjonalisering?",
      options: ["Å gjøre et abstrakt fenomen målbart ved å bestemme hvordan det registreres", "Å velge den statistiske analysemetoden som passer best til dataenes målenivå", "Å rekruttere deltakere til studien", "Å skrive den endelige rapporten"],
      explanation: "Operasjonalisering oversetter et abstrakt begrep («hukommelse») til en konkret målemetode («antall gjengitte ord»). De andre er senere trinn.",
    },
    {
      question: "Hva er riktig forhold mellom forskningsspørsmål og design?",
      options: ["Forskningsspørsmålet styrer valget av design", "Designet velges først, så finner man et passende spørsmål", "De velges uavhengig av hverandre", "Designet er alltid et eksperiment"],
      explanation: "En A-markør er å la spørsmålet styre designet: årsaksspørsmål krever eksperiment, utbredelsesspørsmål krever spørreundersøkelse. Å velge metode først er nybegynnerfeilen.",
    },
    {
      question: "Hva er funksjonen til en pilotstudie?",
      options: ["Å prøvekjøre opplegget og avdekke problemer før hovedstudien", "Å samle inn de endelige dataene", "Å erstatte selve hovedstudien helt dersom den viser seg å bli for dyr å gjennomføre", "Å publisere de første resultatene"],
      explanation: "Piloten er en prøvekjøring som luker ut praktiske problemer mens de er billige å rette. Dataene inngår ikke i den endelige analysen.",
    },
    {
      question: "Hva er forskjellen mellom en teori og en lov?",
      options: ["Teorien forklarer hvorfor et fenomen skjer; loven beskriver at det skjer regelmessig", "En teori er en endelig bevist sannhet, mens en lov bare er en foreløpig antakelse man ennå ikke har bekreftet", "De betyr det samme", "En lov forklarer, en teori beskriver"],
      explanation: "Teorien gir forklaringen (hvorfor), loven beskriver en velbekreftet regelmessighet (at). Å holde nivåene fra hverandre er en A-markør.",
    },
    {
      question: "Hva er en modell i forskningssammenheng?",
      options: ["En forenklet framstilling som hjelper oss å tenke om et fenomen", "En velbekreftet, tallfestet regelmessighet", "Et sammenhengende sett antakelser som forklarer hvorfor et fenomen oppstår", "Den ferdige forskningsrapporten"],
      explanation: "En modell er en forenkling som gir et tenkeverktøy — ikke en lov (regelmessighet) eller en teori (forklaring).",
    },
    {
      question: "Hva skiller grunnforskning fra anvendt forskning?",
      options: ["Grunnforskning søker kunnskap for kunnskapens skyld; anvendt forskning løser et praktisk problem", "Grunnforskning er per definisjon alltid kvantitativ, mens anvendt forskning alltid er rent kvalitativ", "Grunnforskning er dårligere enn anvendt forskning", "Anvendt forskning bruker ikke hypoteser"],
      explanation: "Skillet er et formålsskille, ikke et kvalitetsskille: kunnskap i seg selv vs. løsning på et konkret problem.",
    },
    {
      question: "Hva menes med at forskningsprosessen er syklisk?",
      options: ["Resultatene føder nye spørsmål som starter et nytt forskningsløp", "Den må gjentas nøyaktig likt hver gang", "Den har verken en klar begynnelse eller en klar slutt for den enkelte studien som gjennomføres", "Den kan bare gjennomføres i sirkler av forskere"],
      explanation: "Syklisk betyr at et funn åpner nye spørsmål i stedet for å avslutte feltet — prosessen tegnes som en ring. Å nevne dette er en A-markør.",
    },
    {
      question: "En kandidat ramser opp trinnene i forskningsprosessen uten å forklare hvert trinn. Hvilken feil er dette?",
      options: ["Feil #8 — oppramsing uten begrunnelse (remsefeilen)", "Feil #1 — feil p-verdi-definisjon", "Feil #4 — å blande kasusstudie og N=1", "Feil #12 — å formulere hypoteser om utvalgsverdier i stedet for populasjonen"],
      explanation: "I prosessoppgaven gir en ren liste bare C-nivå; sensor vil se funksjonen til hvert trinn. Dette er feil #8 (remsefeilen). De andre feilene hører til helt andre temaer.",
    },
    {
      question: "Hva betyr det at et forskningsspørsmål er «empirisk testbart»?",
      options: ["Det kan besvares ved å samle inn og undersøke data", "Det er nytt og ingen har stilt det før", "Det kan besvares fullstendig med ren logisk tenkning alene, uten data", "Det handler om hva man bør gjøre"],
      explanation: "Empirisk testbart betyr at data kan gi svaret. Rent normative («bør»-) spørsmål kan ikke avgjøres empirisk alene.",
    },
    {
      question: "Hva er deduksjon i forskningssammenheng?",
      options: ["Å utlede en konkret, testbar forutsigelse fra en generell teori", "Å generalisere induktivt fra mange enkeltobservasjoner opp til en bredere teori", "Å samle inn data uten forhåndsantakelser", "Å fjerne uteliggere fra datasettet"],
      explanation: "Deduksjon går fra generell teori til konkret hypotese («hvis teorien stemmer, bør vi se dette»). Motsatt vei — fra enkeltobservasjoner til teori — er induksjon.",
    },
    {
      question: "Hvorfor gjennomfører man et litteratursøk tidlig i prosessen?",
      options: ["For å unngå å gjenta det gjorte og forankre spørsmålet i eksisterende kunnskap", "For å samle inn de endelige dataene", "For å rekruttere deltakere", "For å kunne skrive hele diskusjonsdelen av den ferdige rapporten allerede før dataene er samlet inn"],
      explanation: "Litteratursøket kartlegger hva som alt er kjent, så studien bygger videre i stedet for å gjenta og kan hente teori å utlede hypoteser fra.",
    },
    {
      question: "Hva er en operasjonell definisjon?",
      options: ["Den konkrete beskrivelsen av hvordan en variabel måles i studien", "Den generelle, overordnede teorien som ligger bak selve fenomenet man studerer", "Antallet deltakere i utvalget", "Den statistiske analysen av dataene"],
      explanation: "En operasjonell definisjon sier eksakt hvordan variabelen registreres («hukommelse = antall gjengitte ord»). Samme begrep kan operasjonaliseres ulikt.",
    },
    {
      question: "Hva er hovedfunksjonen til fagfellevurdering?",
      options: ["Uavhengige eksperter vurderer om metode og konklusjoner holder mål før publisering", "Å garantere at funnet er sant", "Å skaffe all nødvendig finansiering til studien lenge før selve datainnsamlingen kan settes i gang", "Å rekruttere deltakere"],
      explanation: "Fagfellevurdering er kvalitetskontroll av uavhengige fagfeller — en sikring, ikke en garanti for sannhet.",
    },
    {
      question: "Hvilken struktur har en typisk forskningsrapport?",
      options: ["Innledning, metode, resultater og diskusjon", "Sammendrag, hypotese, litteraturgjennomgang og endelig konklusjon", "Idé, design, utvalg", "Teori, lov, modell"],
      explanation: "Rapporten følger fast struktur (innledning–metode–resultater–diskusjon) nettopp for å gjøre studien etterprøvbar.",
    },
    {
      question: "Hvorfor er replikasjon viktig i vitenskapen?",
      options: ["Et gjentatt funn er tryggere enn et enkeltfunn som kan skyldes tilfeldigheter", "Fordi det er billigere enn en ny studie", "Fordi det garanterer publisering", "Fordi en vellykket replikasjon helt erstatter behovet for uavhengig fagfellevurdering"],
      explanation: "Replikasjon tester om funnet holder når studien gjentas — et av vitenskapens viktigste korrektiver mot tilfeldige enkeltfunn.",
    },
  ],
  'psy1010-1-2': [
    {
      question: "I en studie gir forskeren den ene gruppen mer søvn og måler konsentrasjonen. Hva er den uavhengige variabelen?",
      options: ["Mengden søvn", "Konsentrasjonen", "Antall deltakere", "Reaksjonstiden"],
      explanation: "Søvnmengden er det forskeren manipulerer (setter), altså UV. Konsentrasjonen er utfallet som måles — AV.",
    },
    {
      question: "Hva er kjennetegnet på den avhengige variabelen (AV)?",
      options: ["Den måles som utfall og antas å avhenge av UV", "Den er variabelen forskeren aktivt manipulerer og setter verdien på", "Den kan aldri måles", "Den er alltid nominal"],
      explanation: "AV er utfallet som registreres for å se effekten av UV. Huskeregel: UV settes, AV måles.",
    },
    {
      question: "Hvorfor er kjønn en kvasi-UV og ikke en ekte UV?",
      options: ["Fordi det ikke kan manipuleres — man kan bare sammenligne eksisterende grupper", "Fordi kjønn per definisjon alltid opptrer som den avhengige variabelen i en studie", "Fordi det er målt på forholdsnivå", "Fordi det ikke påvirker noe"],
      explanation: "En ekte UV må kunne manipuleres. Kjønn er en egenskap ved personen som ikke kan tildeles, derfor kvasi-UV.",
    },
    {
      question: "En kollega sier «vi manipulerte deltakernes alder». Hva er galt?",
      options: ["Alder kan ikke manipuleres — det er en kvasi-UV", "Ingenting er galt — det er en helt korrekt og presis formulering", "Alder er en avhengig variabel", "Alder er alltid nominal"],
      explanation: "Alder er en egenskap som ikke lar seg sette av forskeren; den er en kvasi-UV. Å kalle den manipulert røper en misforståelse av manipulasjon.",
    },
    {
      question: "En forsker vil måle «stress» og bestemmer seg for å registrere kortisolnivå i spyttprøver. Hva kalles dette trinnet?",
      options: ["Operasjonalisering — den operasjonelle definisjonen av variabelen er fastsatt", "Randomisering — deltakerne fordeles tilfeldig til betingelser", "Manipulasjon — forskeren setter selv verdien på den uavhengige variabelen for hver gruppe", "Standardisering — gjennomføringen gjøres lik for alle deltakerne"],
      explanation: "Å velge den konkrete målemetoden (kortisol i spytt) for et abstrakt begrep (stress) er operasjonalisering. Samme begrep kan operasjonaliseres ulikt.",
    },
    {
      question: "Favorittfarge er et eksempel på hvilket målenivå?",
      options: ["Nominal", "Ordinal", "Intervall", "Forhold"],
      explanation: "Favorittfarge er rene kategorier uten rangering — nominalnivå.",
    },
    {
      question: "Plassering i et løp (1., 2., 3.) er hvilket målenivå?",
      options: ["Ordinal", "Nominal", "Intervall", "Forhold"],
      explanation: "Plassering er rangert, men avstandene er ikke like store (forspranget til 1. plass kan være helt annet enn mellom 2. og 3.) — ordinal.",
    },
    {
      question: "Temperatur i grader celsius er hvilket målenivå?",
      options: ["Intervall", "Forhold", "Ordinal", "Nominal"],
      explanation: "Celsius har like avstander, men et vilkårlig nullpunkt (0 °C er ikke fravær av varme) — derfor intervall, ikke forhold.",
    },
    {
      question: "Antall bøker lest i fjor er hvilket målenivå?",
      options: ["Forhold", "Intervall", "Ordinal", "Nominal"],
      explanation: "Antall har like avstander og et ekte nullpunkt (0 bøker = ingen bøker), så forholdstall er meningsfulle — forholdsnivå.",
    },
    {
      question: "Hvorfor er nullpunktet i celsius ikke et 'ekte' nullpunkt?",
      options: ["Fordi 0 °C ikke betyr fravær av temperatur", "Fordi celsius ikke kan bli negativ", "Fordi celsius egentlig bare er en ordinal skala uten like avstander", "Fordi temperaturen alltid varierer"],
      explanation: "Et ekte nullpunkt betyr «ingenting av egenskapen». 0 °C er bare et valgt utgangspunkt (frysepunktet), ikke fravær av varme — derfor intervall.",
    },
    {
      question: "Hvilket forbehold bør en A-kandidat nevne når en Likert-sumskår behandles som intervall?",
      options: ["At det er en konvensjon — enkeltleddene er strengt tatt ordinale", "At Likert-skalaer i virkeligheten alltid utgjør ekte forholdstall med nullpunkt", "At sumskårer ikke kan analyseres", "At det er en naturlov"],
      explanation: "Enkeltleddene er ordinale; å behandle summen som intervall er en konvensjon i psykologien, ikke en naturlov. Å nevne dette er en A-markør.",
    },
    {
      question: "Hva bestemmer målenivået i praksis?",
      options: ["Hvilke statistiske mål som er meningsfulle å bruke", "Hvor mange deltakere man trenger for å oppnå tilstrekkelig statistisk styrke", "Om studien er etisk", "Hvilken hypotese man har"],
      explanation: "Målenivået avgjør hvilke sentralmål og tester som er tillatt: modus (alle nivåer), median (fra ordinal), gjennomsnitt (fra intervall).",
    },
    {
      question: "Hvilket sentralmål krever minst intervallnivå for å være meningsfullt?",
      options: ["Gjennomsnittet", "Modus", "Medianen", "Ingen — alle sentralmål kan brukes på alle målenivåer"],
      explanation: "Gjennomsnittet forutsetter like avstander mellom verdiene, altså minst intervall. Medianen krever bare ordinal, og modus kan brukes på alle nivåer.",
    },
    {
      question: "Et gruppenummer (1 = kontroll, 2 = eksperiment) er hvilket målenivå?",
      options: ["Nominal", "Ordinal", "Intervall", "Forhold"],
      explanation: "Selv om tallene ser rangerte ut, er de bare merkelapper for kategorier — nominal. Spør alltid hva tallet representerer, ikke hvordan det ser ut.",
    },
    {
      question: "Hva menes med at UV/AV-rollene ved korrelasjon er 'et valg'?",
      options: ["Dataene bestemmer ikke rollene; forskeren velger dem ut fra spørsmålet", "Rollene er alltid gitt av dataene", "Ved korrelasjon finnes det verken en uavhengig eller en avhengig variabel i det hele tatt", "Rollene bestemmes av målenivået"],
      explanation: "Ved ren korrelasjon er det ofte vilkårlig hvilken variabel man kaller uavhengig — en A-presisjon. Ved eksperiment er UV derimot gitt av manipulasjonen.",
    },
    {
      question: "Hva er en dikotom variabel?",
      options: ["En variabel med bare to verdier", "En variabel målt på forholdsnivå", "En variabel som ikke kan måles", "En kontinuerlig variabel"],
      explanation: "En dikotom variabel har to verdier (ja/nei, bestått/ikke). Den er nominal, men får en egen rolle i noen korrelasjonsmål.",
    },
    {
      question: "Hva skiller en diskret fra en kontinuerlig variabel?",
      options: ["Diskret har adskilte tellbare verdier; kontinuerlig kan ha alle mellomverdier", "Diskrete variabler er alltid på nominalnivå, mens kontinuerlige alltid er på forholdsnivå", "Diskret kan ikke måles", "Det er ingen forskjell"],
      explanation: "Antall barn er diskret (0, 1, 2 …); høyde er kontinuerlig (alle mellomverdier mulig). Skillet styrer figurvalg og statistikk.",
    },
    {
      question: "En kandidat skriver bare «utdanningsnivå er ordinal» uten begrunnelse. Hva mangler for full uttelling?",
      options: ["Regelen: at verdiene kan rangeres, men avstandene ikke er like store", "Ingenting mangler — svaret er allerede helt komplett og trenger ingen begrunnelse", "Antall deltakere", "En hypotese"],
      explanation: "Sensor vil se klassifisering *med begrunnelse* (feil #8 hvis den mangler). Regelen bak merkelappen er poenget.",
    },
    {
      question: "Hvorfor kan samme fenomen operasjonaliseres på ulike målenivåer?",
      options: ["Fordi valget av målemetode avgjør nivået — og hva man fanger og mister", "Fordi målenivået er tilfeldig", "Fordi alle fenomener er forholdstall", "Fordi selve operasjonaliseringen aldri påvirker hvilket målenivå variabelen havner på"],
      explanation: "«Lesekompetanse» kan måles som bestått/ikke (nominal), rangert (ordinal) eller ord per minutt (forhold). Valget avgjør informasjonsmengde og mulige analyser.",
    },
    {
      question: "Hva er en konstant, i motsetning til en variabel?",
      options: ["En egenskap som ikke varierer i studien", "En egenskap som alltid måles på forholdsnivå med et ekte nullpunkt", "Den avhengige variabelen", "Et gjennomsnitt"],
      explanation: "Er alle deltakerne kvinner, er kjønn en konstant, ikke en variabel. En variabel må per definisjon variere for å inngå i en sammenheng.",
    },
  ],
  'psy1010-1-3': [
    {
      question: "Hva er reliabilitet?",
      options: ["En tests stabilitet og konsistens — gir den samme resultat under like forhold?", "Om testen faktisk måler nettopp det teoretiske begrepet den i utgangspunktet er ment å skulle måle", "Om studien kan generaliseres", "Om konklusjonen er kausal"],
      explanation: "Reliabilitet handler om stabilitet: samme svar hver gang. Om testen måler riktig ting er validitet — et annet spørsmål.",
    },
    {
      question: "Hvorfor er reliabilitet en forutsetning for validitet?",
      options: ["En test som spretter tilfeldig kan ikke treffe presist", "Fordi en test som er reliabel, dermed automatisk også må være valid", "Fordi validitet måles før reliabilitet", "Det er det ikke — de er uavhengige"],
      explanation: "Uten stabilitet kan testen ikke treffe konsistent. Derfor kreves reliabilitet for validitet — men høy reliabilitet garanterer ikke validitet.",
    },
    {
      question: "En klokke går konsekvent ti minutter for fort. Hva illustrerer dette?",
      options: ["En test kan være reliabel uten å være valid", "En test kan godt være valid selv om den ikke er reliabel i det hele tatt", "At reliabilitet og validitet er det samme", "At klokken er ubrukelig som eksempel"],
      explanation: "Klokken er stabil (reliabel) men systematisk feil (ikke valid). Det motsatte — valid uten reliabel — er umulig.",
    },
    {
      question: "Hvilken reliabilitetsmetode ser på om resultatet er stabilt over tid?",
      options: ["Test-retest", "Split-half", "Interrater", "Innholdsvaliditet"],
      explanation: "Test-retest gir samme test på to tidspunkter. Split-half og interrater ser ikke på tid, og innholdsvaliditet er en validitetsform.",
    },
    {
      question: "Hva er en svakhet ved test-retest-reliabilitet?",
      options: ["Deltakerne kan huske svarene fra første gang", "Den kan bare brukes på rene flervalgstester, aldri på åpne oppgaver", "Den krever to bedømmere", "Den forutsetter et ustabilt fenomen"],
      explanation: "Hukommelseseffekten gjør samsvaret kunstig høyt. Parallelle former løser dette.",
    },
    {
      question: "Hva løser 'parallelle former' som test-retest sliter med?",
      options: ["At deltakerne husker svarene sine", "At selve testen rett og slett er altfor kort til å gi stabile svar", "At egenskapen er ustabil", "At bedømmerne er uenige"],
      explanation: "To likeverdige versjoner unngår hukommelseseffekten. Kostnaden er at det er vanskelig å lage to genuint likeverdige tester.",
    },
    {
      question: "Hva forutsetter split-half-reliabilitet?",
      options: ["At testen er homogen — alle ledd måler det samme", "At testen gis to ganger", "At det er to uavhengige bedømmere som skårer besvarelsene hver for seg", "At egenskapen er ustabil"],
      explanation: "Split-half deler testen i to og krever at halvdelene måler det samme, altså en homogen test.",
    },
    {
      question: "Hva tallfester Cronbachs alfa?",
      options: ["Intern konsistens — hvor samstemte leddene er", "Enighet mellom bedømmere", "Om testen treffsikkert forutsier et framtidig utfall", "Signifikansnivået i en test"],
      explanation: "Alfa måler intern konsistens (0–1). Den er ikke interrater-mål og heller ikke signifikansnivået fra hypotesetesting.",
    },
    {
      question: "En skala har Cronbachs alfa = 0,98. Hva kan dette indikere?",
      options: ["At leddene er nesten identiske og dermed delvis overflødige", "At testen er perfekt og bør brukes", "At testen er ustabil", "At testen fullstendig mangler enhver form for validitet og treffsikkerhet"],
      explanation: "Svært høy alfa kan bety redundante ledd — «høyere er bedre» har et tak. Det sier ikke noe om validitet.",
    },
    {
      question: "Når trengs interrater-reliabilitet?",
      options: ["Når skåringen krever skjønn, som ved intervjuer eller observasjoner", "Ved rene, automatisk rettede flervalgstester der ingen bruker skjønn", "Når testen gis to ganger", "Når egenskapen er stabil"],
      explanation: "Interrater måler enighet mellom bedømmere og trengs der skåring involverer skjønn — ikke ved automatisk rettede tester.",
    },
    {
      question: "Hva er testvaliditet?",
      options: ["Om testen faktisk måler det den er ment å måle", "Om testen gir stabile og konsistente resultater ved gjentatt måling", "Om konklusjonen fra studien kan generaliseres", "Om årsakssammenhengen er sikker"],
      explanation: "Testvaliditet gjelder om instrumentet treffer riktig begrep. De to siste gjelder slutningsvaliditet (studien), ikke testen.",
    },
    {
      question: "Hva er face-validitet?",
      options: ["Om testen ser ut til å måle det den skal, ved en overflatevurdering", "Om testen dekker hele begrepets bredde", "Om testen forutsier et fremtidig utfall", "Om testen fanger opp hele det underliggende teoretiske konstruktet den bygger på"],
      explanation: "Face-validitet er den svakeste formen — bygger bare på inntrykk. De andre er innholds-, prediktiv og begrepsvaliditet.",
    },
    {
      question: "Hva er dobbeltrollen til face-validitet?",
      options: ["Den motiverer deltakere, men gjør testen lett å gjennomskue", "Den er både reliabel og valid", "Den måler samtidig både testens stabilitet og dens treffsikkerhet", "Den erstatter begrepsvaliditet"],
      explanation: "Høy face-validitet virker troverdig og motiverende, men gjør testen lett å manipulere. Noen ganger vil man bevisst ha lav face-validitet.",
    },
    {
      question: "Hva er innholdsvaliditet?",
      options: ["Om testens innhold dekker hele bredden av begrepet", "Om testen ser troverdig ut", "Om testen samsvarer godt med et etablert ytre kriterium", "Om testen er stabil over tid"],
      explanation: "Innholdsvaliditet handler om dekning av hele området. En matteprøve med bare addisjon har dårlig innholdsvaliditet for matteferdighet.",
    },
    {
      question: "Hva kjennetegner samtidig (concurrent) kriterievaliditet?",
      options: ["Testen samsvarer med et kriterium målt samtidig", "Testen forutsier presist et bestemt utfall fram i tid", "Testen dekker hele begrepet", "Testen er stabil over tid"],
      explanation: "Samtidig validitet sammenligner med et kriterium *nå* (ny skala mot etablert). Prediktiv validitet ser derimot fremover.",
    },
    {
      question: "Hva kjennetegner prediktiv validitet?",
      options: ["Testen forutsier et fremtidig utfall", "Testen samsvarer med et kriterium målt samtidig", "Testen ser ut til å måle riktig", "Testen har høy intern konsistens"],
      explanation: "Prediktiv validitet handler om å forutsi noe senere (opptaksprøve → studieresultat). Samtidig validitet gjelder et kriterium målt nå.",
    },
    {
      question: "Hva er begrepsvaliditet?",
      options: ["Om testen fanger det teoretiske konstruktet den påstår å måle", "Om testen ved første øyekast ser troverdig og relevant ut for deltakeren", "Om to bedømmere er enige", "Om testen er stabil"],
      explanation: "Begrepsvaliditet er den mest overordnede formen — bygges over tid ved at testen oppfører seg som teorien forutsier.",
    },
    {
      question: "En oppgave ber deg vurdere validiteten til en ny test. En kandidat svarer med indre og ytre validitet. Hvilken feil er dette?",
      options: ["Feil #5 — testvaliditet forvekslet med slutningsvaliditet", "Feil #1 — feil p-verdi-definisjon", "Feil #6 — SD forvekslet med SE", "Feil #9 — å behandle et bekvemmelighetsutvalg som om det var representativt"],
      explanation: "Indre/ytre validitet gjelder slutninger fra studier, ikke tester. Å bruke dem om en test er feil #5.",
    },
    {
      question: "Hva gjelder indre og ytre validitet?",
      options: ["Holdbarheten av konklusjoner fra en studie", "Om en test måler riktig begrep", "Om en test er stabil", "Om de enkelte leddene i en test er innbyrdes samstemte"],
      explanation: "Indre (kausalitet) og ytre (generalisering) validitet gjelder studieslutninger — det er slutningsvaliditet, ikke testvaliditet.",
    },
    {
      question: "Hva korrigerer Cohens kappa for?",
      options: ["Enighet man ville fått ved ren tilfeldighet", "Manglende reliabilitet", "Systematisk skjevhet i måten utvalget er trukket på", "Manglende validitet"],
      explanation: "Kappa trekker fra flaks-enigheten (Pc) slik at bare enighet utover tilfeldighet teller — et ærligere mål enn rå prosent enighet.",
    },
    {
      question: "To bedømmere er enige på 36 av 40 (Po = 0,90) og Pc = 0,50. Hva er kappa?",
      options: ["0,80", "0,90", "0,40", "0,50"],
      explanation: "K = (0,90 − 0,50)/(1 − 0,50) = 0,40/0,50 = 0,80. Rå enighet (0,90) overvurderer, kappa (0,80) korrigerer for flaks.",
    },
    {
      question: "Hvorfor kan rå prosent enighet overvurdere samstemtheten mellom bedømmere?",
      options: ["Noe av enigheten skyldes ren tilfeldighet", "Fordi bedømmerne alltid jukser", "Fordi ren prosentandel aldri lar seg regne ut på en meningsfull måte", "Fordi kappa alltid er høyere"],
      explanation: "Ved gjetting vil bedømmere av og til være enige ved flaks. Kappa trekker fra denne tilfeldige enigheten.",
    },
    {
      question: "Hvorfor passer ikke test-retest for et fenomen som svinger fra dag til dag (som humør)?",
      options: ["Lav samsvar kan skyldes ekte endring i fenomenet, ikke dårlig test", "Fordi humør ikke kan måles", "Fordi test-retest-metoden alltid forutsetter minst to uavhengige bedømmere", "Fordi humør alltid er stabilt"],
      explanation: "Test-retest forutsetter et stabilt fenomen. Svinger fenomenet, måler man ustabilitet i personen, ikke i instrumentet.",
    },
    {
      question: "Cronbachs alfa og signifikansnivået fra hypotesetesting bruker samme bokstav. Hva er forholdet mellom dem?",
      options: ["De er helt ulike begreper som tilfeldigvis deler symbol", "De er to navn på det samme", "Cronbachs alfa er alltid nøyaktig lik signifikansnivået fra hypotesetestingen", "De kan regnes om til hverandre"],
      explanation: "Cronbachs α (reliabilitet, 0–1) er ikke signifikansnivået α fra hypotesetesting. Samme bokstav, ulik betydning — en klassisk forvekslingsfelle.",
    },
    {
      question: "En kandidat lister opp alle validitetsformene uten å knytte dem til den konkrete testen. Hva blir konsekvensen?",
      options: ["C-tak — sensor vil se formene anvendt på scenariet (feil #8)", "Karakteren A automatisk, fordi alle validitetsformene er korrekt nevnt i lista", "Stryk, fordi listen er feil", "Ingen konsekvens"],
      explanation: "En ren definisjonsremse gir C-tak (feil #8). Uttellingen ligger i å anvende hver form på den aktuelle testen.",
    },
  ],
  'psy1010-1-4': [
    {
      question: "Hva er en populasjon i forskningssammenheng?",
      options: ["Hele gruppen forskeren vil uttale seg om", "Den bestemte delen av gruppen man faktisk undersøker i studien", "Listen man trekker fra", "De som melder seg frivillig"],
      explanation: "Populasjonen er hele målgruppen (N). Utvalget er delen man undersøker, og utvalgsrammen er lista man trekker fra.",
    },
    {
      question: "Hva er en utvalgsramme?",
      options: ["Den konkrete listen eller kilden man trekker utvalget fra", "Hele populasjonen", "De av deltakerne som faller fra og forlater studien et stykke underveis", "Antall deltakere i studien"],
      explanation: "Utvalgsrammen er den praktiske lista (f.eks. et register). En mangelfull ramme gir skjevhet allerede før trekkingen.",
    },
    {
      question: "Hva kjennetegner et representativt utvalg?",
      options: ["Sammensetningen speiler populasjonen — en miniatyrkopi", "At det er så stort som mulig", "At samtlige deltakere har meldt seg helt frivillig til studien", "At alle kommer fra samme sted"],
      explanation: "Et representativt utvalg speiler populasjonens sammensetning, slik at funn kan generaliseres tilbake.",
    },
    {
      question: "Hva er et enkelt tilfeldig utvalg?",
      options: ["Et utvalg der hver enhet har lik sjanse for å bli trukket", "Et utvalg satt sammen av de enhetene som er lettest tilgjengelige for forskeren", "Et utvalg delt inn i strata", "Et utvalg av hele grupper"],
      explanation: "Ved enkelt tilfeldig utvalg har alle lik sjanse — gullstandarden for representativitet. Krever en fullstendig utvalgsramme.",
    },
    {
      question: "Når er stratifisert utvalg spesielt nyttig?",
      options: ["Når man vil garantere at små undergrupper er representert", "Når man ikke har noen liste", "Når man ønsker å rekruttere deltakere raskest og enklest mulig", "Når populasjonen er ukjent"],
      explanation: "Stratifisering deler i undergrupper og trekker innenfor hver, så små grupper sikres. Enkelt tilfeldig kan tilfeldigvis underrepresentere dem.",
    },
    {
      question: "Hva er et systematisk utvalg?",
      options: ["Man trekker hver k-te enhet fra en liste etter tilfeldig start", "Man deler populasjonen i strata", "Man tar rett og slett de enhetene som er lettest tilgjengelige å nå", "Man trekker hele grupper"],
      explanation: "Systematisk utvalg tar hver k-te enhet. Det blir skjevt bare hvis lista har et mønster som treffer intervallet.",
    },
    {
      question: "Hva er et klyngeutvalg (cluster)?",
      options: ["Man trekker tilfeldig hele grupper og undersøker alle i dem", "Man trekker enkeltpersoner tilfeldig én og én fra hele populasjonen", "Man tar de mest motiverte", "Man deler i strata"],
      explanation: "Klyngeutvalg trekker hele grupper (f.eks. skoleklasser). Praktisk ved spredning, men mindre presist fordi folk i samme klynge ligner hverandre.",
    },
    {
      question: "En studie rekrutterer via et spørreskjema delt ut på forskerens egen forelesning. Hva slags utvalg er dette?",
      options: ["Bekvemmelighetsutvalg", "Enkelt tilfeldig utvalg", "Stratifisert utvalg", "Klyngeutvalg"],
      explanation: "«Spørreskjema på forelesning» skal utløse refleksen bekvemmelighetsutvalg — de lettest tilgjengelige er valgt.",
    },
    {
      question: "Hva er hovedproblemet med et bekvemmelighetsutvalg?",
      options: ["De lettest tilgjengelige er sjelden representative for populasjonen", "Det er alltid for lite", "Det krever for mye tid", "Slike utvalg kan overhodet ikke analyseres med vanlige statistiske metoder i etterkant"],
      explanation: "Bekvemmelighetsutvalg er praktisk, men skjevt: gruppen man når, ligner ikke populasjonen. Prisen er svekket generalisering.",
    },
    {
      question: "Hva er frivillighetsbias?",
      options: ["De som melder seg frivillig skiller seg systematisk fra dem som ikke gjør det", "At det er forskeren selv som aktivt plukker ut deltakerne helt tilfeldig fra listen", "At utvalget er for stort", "At deltakerne får betalt"],
      explanation: "Selvseleksjon: frivillige er ofte mer engasjerte eller har sterkere meninger, så funnene gjelder «de frivillige», ikke populasjonen.",
    },
    {
      question: "Hva er selektivt frafall?",
      options: ["De som forlater studien skiller seg systematisk fra dem som blir", "At ingen melder seg", "At alle fullfører", "At hele utvalget fra starten av ble trukket helt tilfeldig fra populasjonen"],
      explanation: "Selektivt frafall gjør gjenværende utvalg skjevt underveis, selv om starten var representativ (f.eks. de mest stressede slutter).",
    },
    {
      question: "Hvorfor er en lav responsrate et faresignal?",
      options: ["Hvis bare en liten, spesiell del svarer, forsterkes frivillighetsbias", "Fordi det gjør analysen umulig", "Fordi en lav responsrate alltid betyr at man har fått altfor få deltakere", "Fordi responsrate ikke betyr noe"],
      explanation: "Lav responsrate betyr at bare en spesiell delgruppe svarte, som forsterker skjevheten. Høy responsrate reduserer risikoen.",
    },
    {
      question: "Hva er den viktigste konsekvensen av skjev seleksjon?",
      options: ["Svekket generaliserbarhet og ytre validitet", "Høyere reliabilitet", "Klart bedre indre validitet og sikrere årsaksslutninger", "Mindre standardfeil"],
      explanation: "Skjev seleksjon gjør utvalget til noe annet enn en miniatyrkopi, så funn kan ikke generaliseres — ytre validitet svekkes.",
    },
    {
      question: "En kandidat konkluderer at et forelesningsutvalg gjelder alle norske studenter. Hvilken feil er dette?",
      options: ["Feil #9 — bekvemmelighetsutvalg behandlet som representativt", "Feil #5 — det å forveksle testvaliditet med slutningsvaliditet i en studie", "Feil #1 — feil p-verdi-definisjon", "Feil #3 — kausal tolkning av korrelasjon"],
      explanation: "Å behandle et bekvemmelighetsutvalg som representativt er feil #9 — kapitlets hovedfelle.",
    },
    {
      question: "En kandidat lister alle utvalgsteknikkene, men velger ingen for scenariet. Hva er problemet?",
      options: ["Feil #8 — sensor vil se et begrunnet valg, ikke en oppramsing", "Ingenting er galt — samtlige utvalgsteknikker er jo korrekt nevnt i svaret", "Feil #9 — bekvemmelighetsutvalg", "Svaret gir automatisk A"],
      explanation: "Veiledningene ber sensor sjekke at kandidaten *velger og begrunner* en metode. En ren remse gir C-tak (feil #8).",
    },
    {
      question: "Hva er den viktigste forutsetningen for et enkelt tilfeldig utvalg?",
      options: ["En fullstendig utvalgsramme", "At samtlige deltakere stiller opp helt frivillig i studien", "At utvalget er lite", "At man kjenner strataene"],
      explanation: "Uten en fullstendig ramme kan noen aldri bli trukket, og utvalget blir skjevt før trekkingen. Strata trengs bare ved stratifisering.",
    },
    {
      question: "Hva er kjernespenningen ved valg av utvalgsmetode?",
      options: ["Praktisk gjennomførbarhet vs. representativitet", "Avveiningen mellom en tests reliabilitet og dens validitet", "Indre vs. ytre validitet", "Nominal vs. ordinal"],
      explanation: "Bekvemmelighetsutvalg er praktisk gjennomførbare, men skjeve; sannsynlighetsutvalg er representative, men mer krevende. Det er avveiningen.",
    },
    {
      question: "Under hvilken betingelse kan et bekvemmelighetsutvalg forsvares?",
      options: ["Ved eksplorerende studier/piloter eller grunnleggende prosesser som neppe varierer sterkt mellom grupper", "Alltid — et bekvemmelighetsutvalg er i praksis like representativt som et ekte tilfeldig sannsynlighetsutvalg", "Aldri, det er forbudt", "Bare hvis utvalget er stort nok"],
      explanation: "Bekvemmelighetsutvalg kan forsvares ved piloter, ressursknapphet eller universelle prosesser — men da må generaliseringsbegrensningen nevnes.",
    },
    {
      question: "Hva er forskjellen mellom populasjon (N) og utvalg (n)?",
      options: ["N er hele gruppen man vil uttale seg om; n er delen man undersøker", "N er utvalget, n er populasjonen", "De er det samme", "N betegner antall variabler i studien, mens n betegner antall grupper"],
      explanation: "N betegner populasjonen (hele målgruppen), n betegner utvalget (deltakerne man faktisk måler).",
    },
    {
      question: "Hvordan bør en forsker som brukte et bekvemmelighetsutvalg presentere funnene?",
      options: ["Eksplisitt si at funnene primært gjelder den undersøkte gruppen, og at generalisering er usikker", "Presentere funnene direkte som om de utvilsomt gjelder for hele populasjonen, helt uten forbehold", "Skjule utvalgsmetoden", "Hevde at utvalget var tilfeldig"],
      explanation: "A-kravet er ærlighet om skjevheten: funnene gjelder gruppen som ble nådd, og overføring er en åpen antakelse, ikke bevist.",
    },
  ],
  'psy1010-2-1': [
    {
      question: "Hvilke tre kjennetegn må alle være til stede for at en studie skal være et ekte eksperiment?",
      options: ["Manipulasjon av UV, randomisert tilordning og en kontrollgruppe", "Store utvalg, pretest og posttest", "Blinding, matching og en kontrollgruppe", "Et tilfeldig trukket utvalg fra populasjonen, manipulasjon av UV og en klar hypotese"],
      explanation: "Ekte eksperiment = manipulasjon + randomisert tilordning + kontrollgruppe. Blinding og pretest er verdifulle tillegg, men ikke definerende krav.",
    },
    {
      question: "Hva er hovedfunksjonen til randomisert tilordning?",
      options: ["Å fordele feilvariansen (individforskjeller) likt mellom gruppene", "Å sikre at hele utvalget blir representativt for den populasjonen man vil generalisere til", "Å skjule betingelsen for deltakerne", "Å gjøre fordelingen normal"],
      explanation: "Randomisering fordeler individforskjeller jevnt, så systematisk skjevhet blir til tilfeldig støy. Representativt utvalg er utvalgsteknikk, ikke tilordning; blinding er noe annet.",
    },
    {
      question: "En forsker lar deltakerne selv velge om de vil være i tiltaks- eller kontrollgruppen. Hvilket problem oppstår?",
      options: ["Systematisk feilvarians — gruppene er forskjellige før tiltaket", "Den usystematiske, tilfeldige feilvariansen øker og skaper mer støy i dataene", "Lav testvaliditet", "For høy ytre validitet"],
      explanation: "Selvseleksjon skaper systematiske forskjeller før tiltaket, som kan etterligne en effekt. Det er systematisk feilvarians, ikke bare støy.",
    },
    {
      question: "Hva er forskjellen på systematisk og usystematisk feilvarians?",
      options: ["Systematisk trekker konsekvent i én retning i én gruppe; usystematisk er tilfeldig støy", "Systematisk er ønsket; usystematisk er uønsket", "Systematisk feilvarians skyldes selve manipulasjonen, mens usystematisk skyldes kontrollgruppen", "De er to navn på det samme"],
      explanation: "Systematisk feilvarians favoriserer én gruppe og kan forkles som effekt; usystematisk sprer seg jevnt og øker bare spredningen.",
    },
    {
      question: "Hva er indre validitet?",
      options: ["Graden av holdbar årsaksslutning innenfor studien", "Graden av generaliserbarhet fra studien til andre personer og situasjoner", "Om en test måler det den skal", "Om utvalget er tilfeldig trukket"],
      explanation: "Indre validitet handler om årsaksslutningen innad. Generaliserbarhet er ytre validitet; om en test måler riktig er testvaliditet.",
    },
    {
      question: "Hva er ytre validitet?",
      options: ["Graden av generaliserbarhet til andre personer, situasjoner og tidspunkter", "Graden av holdbar årsaksslutning innenfor selve studien og det valgte eksperimentelle designet", "Om måleinstrumentet er reliabelt", "Om forskeren er blindet"],
      explanation: "Ytre validitet er rekkevidden utad. Årsaksslutning er indre validitet; reliabilitet og blinding er andre begreper.",
    },
    {
      question: "Hvorfor står indre og ytre validitet ofte i spenning?",
      options: ["Mer laboratoriekontroll gir høyere indre, men gjør situasjonen mer kunstig (lavere ytre)", "Fordi de måler nøyaktig det samme", "Fordi høy ytre validitet alltid gir lav reliabilitet", "Fordi selve randomiseringen paradoksalt nok svekker både den indre og den ytre validiteten samtidig"],
      explanation: "Kontroll kjøper indre validitet med naturlighet. Streng lab-kontroll → høy indre, ofte lav ytre validitet.",
    },
    {
      question: "En student svarer «indre og ytre validitet» på spørsmål om hvorvidt en personlighetstest måler det den skal. Hva er feilen?",
      options: ["Indre/ytre validitet gjelder slutninger fra studier, ikke om en test måler riktig (det er testvaliditet)", "Ingen feil — begrepene er synonyme", "Testvaliditet finnes ikke", "Studenten burde i stedet ha svart reliabilitet, siden det er reliabiliteten som avgjør om en test faktisk måler riktig"],
      explanation: "Dette er feil #5: å blande slutningsvaliditet (studier) med testvaliditet (måleinstrumenter).",
    },
    {
      question: "Hva beskytter blinding mot?",
      options: ["Reaktivitet og forventningseffekter (demand characteristics)", "Systematisk og selektivt frafall av deltakere underveis i studien", "Lav statistisk styrke", "Feil målenivå"],
      explanation: "Blinding skjuler betingelsen så forventninger ikke farger resultatet — beskytter mot reaktivitet og demand characteristics.",
    },
    {
      question: "Hva kjennetegner en venteliste-kontroll?",
      options: ["Kontrollgruppen får tiltaket etter at studien er ferdig", "Kontrollgruppen får en virkningsløs narrepille (placebo) i stedet for tiltaket", "Ingen kontrollgruppe brukes", "Deltakerne velger selv gruppe"],
      explanation: "Venteliste-kontroll er en etisk variant: ingen nektes hjelpen permanent, men sammenligningsgrunnlaget beholdes under studien.",
    },
    {
      question: "Hva er hensikten med et Solomon firegruppedesign?",
      options: ["Å sjekke om selve pretesten påvirket resultatet", "Å øke utvalgsstørrelsen", "Å blinde forskeren", "Å gjøre om hele studien til et kvasieksperiment uten randomisering"],
      explanation: "Ved at bare halvparten får pretest, kan man skille tiltakets effekt fra en pretest-effekt.",
    },
    {
      question: "En studie i et lydisolert laboratorium med streng kontroll vil typisk ha:",
      options: ["Høy indre og lavere ytre validitet", "Lav indre validitet, men til gjengjeld svært høy ytre validitet", "Lav indre og lav ytre validitet", "Høy testvaliditet"],
      explanation: "Kontroll gir høy indre validitet, men den kunstige situasjonen svekker ofte den ytre (økologiske) validiteten.",
    },
    {
      question: "Hva er økologisk validitet?",
      options: ["En form for ytre validitet: hvor godt studiesituasjonen likner virkelige forhold", "En underform av indre validitet som handler om holdbare årsaksslutninger i laboratoriet", "Om testen er reliabel", "Om utvalget er stort nok"],
      explanation: "Økologisk validitet er en underform av ytre validitet — likheten mellom studiesituasjon og virkelighet.",
    },
    {
      question: "Hva er «planlagt systematisk varians»?",
      options: ["Variasjonen forskeren med vilje skaper ved å manipulere UV — selve effekten", "Tilfeldig målestøy", "Frafall som skjer systematisk", "De systematiske forskjellene som allerede finnes mellom deltakerne før tiltaket settes inn"],
      explanation: "Planlagt systematisk varians er den ønskede effekten fra manipulasjonen — ikke feilvarians.",
    },
    {
      question: "Hvilken av disse er IKKE et ekte eksperiment?",
      options: ["En studie som sammenligner menn og kvinner uten randomisering", "En randomisert studie med placebokontroll", "En studie der deltakerne loddtrekkes tilfeldig til to ulike doser av et medikament", "En randomisert venteliste-kontrollert studie"],
      explanation: "Kjønn er en kvasi-UV som ikke kan manipuleres, og gruppene er ikke randomisert — det er et kvasieksperiment, ikke et ekte eksperiment.",
    },
    {
      question: "Hva menes med reaktivitet?",
      options: ["At deltakere endrer atferd fordi de vet de blir studert", "At forskeren selv reagerer følelsesmessig på de resultatene som kommer inn", "At tiltaket virker raskt", "At utvalget reagerer likt"],
      explanation: "Reaktivitet er endring i atferd som følge av å bli studert — en trussel mot indre validitet som blinding kan dempe.",
    },
    {
      question: "Hvorfor er en kontrollgruppe nødvendig for å slutte at et tiltak virker?",
      options: ["Uten den vet vi ikke hva som ville skjedd uansett (historie, modning)", "Fordi den øker utvalget", "Fordi en ekstra kontrollgruppe alltid gjør at datafordelingen blir tilnærmet normal", "Fordi den blinder deltakerne"],
      explanation: "Kontrollgruppen viser hva som skjer uten tiltaket, så vi kan skille tiltakseffekten fra historie og modning.",
    },
    {
      question: "Hva er forskjellen på randomisering og matching?",
      options: ["Randomisering nøytraliserer alle individforskjeller (også ukjente); matching bare de målte", "Matching er alltid bedre for indre validitet", "Randomisering krever alltid et stort utvalg for å virke, mens matching fungerer helt uten", "De gir identiske resultater"],
      explanation: "Randomisering sikrer forventet likhet på alt, også ukjente variabler; matching sikrer likhet kun på de egenskapene man matcher på.",
    },
    {
      question: "Et frivillig kurs viser lavere stress hos deltakerne enn hos ikke-deltakerne. Hovedsvakheten er:",
      options: ["Selvseleksjon — deltakerne kan være systematisk forskjellige fra ikke-deltakerne", "For lav statistisk styrke", "At man har brukt et feilaktig målenivå på stressvariabelen gjennom hele analysen av dataene", "At kurset ikke ble blindet"],
      explanation: "Frivillig påmelding = selvseleksjon, som gir systematisk feilvarians. Uten randomisering kan effekten skyldes hvem som meldte seg.",
    },
    {
      question: "Hva er dobbel blinding?",
      options: ["Verken deltaker eller den som måler/behandler vet hvilken betingelse deltakeren er i", "Deltakeren måles to ganger", "To kontrollgrupper brukes", "At forskeren gjennomfører hele randomiseringen to ganger på rad for å være ekstra sikker"],
      explanation: "Dobbel blinding stenger for både deltakerforventning og forskerforventning, i motsetning til enkel blinding.",
    },
  ],
  'psy1010-2-2': [
    {
      question: "Hva er hovedgevinsten ved et innengruppedesign?",
      options: ["Det kontrollerer for individforskjeller og gir høyere statistisk styrke", "Det unngår alle overføringseffekter", "Det krever ingen kontrollgruppe", "Det gir alltid vesentlig høyere ytre validitet og bedre generalisering"],
      explanation: "Fordi samme personer møter alle betingelser, fjernes individforskjeller fra støyen → mer styrke, færre deltakere. Overføringseffekter er derimot innengruppens ulempe.",
    },
    {
      question: "Hva er hovedkostnaden ved innengruppedesign?",
      options: ["Overføringseffekter (rekkefølgeeffekter)", "Et stort behov for mange flere deltakere enn i et mellomgruppedesign", "Umulig å bruke kontrollgruppe", "Lav testvaliditet"],
      explanation: "Fordi samme person møter flere betingelser, kan tidligere betingelser påvirke senere — overføringseffekter. Behov for mange deltakere er derimot mellomgruppens svakhet.",
    },
    {
      question: "En studie der ulike grupper får hver sin betingelse og bare måles i den, er:",
      options: ["Et mellomgruppedesign", "Et klassisk innengruppedesign der alle møter alle betingelser", "Et faktorielt design", "Et N=1-design"],
      explanation: "Ulike grupper, hver sin betingelse = mellomgruppe (between-subjects).",
    },
    {
      question: "Hva gjør motbalansering?",
      options: ["Fordeler rekkefølgeeffekten likt så den nulles ut i gjennomsnittet", "Fjerner enhver form for overføringseffekt fullstendig fra samtlige betingelser", "Øker utvalgsstørrelsen", "Blinder deltakerne"],
      explanation: "Motbalansering fjerner ikke effekten, men fordeler den jevnt på betingelsene slik at den ikke systematisk favoriserer noen.",
    },
    {
      question: "Deltakeren blir flinkere på oppgaven ved å gjøre den flere ganger. Hvilken overføringseffekt er dette?",
      options: ["Treningseffekt (øvelse)", "Uttrøtting fordi deltakeren blir sliten utover i studien", "Habituering", "Kontrast"],
      explanation: "Bedre prestasjon over gjentakelser = treningseffekt. Uttrøtting trekker motsatt vei.",
    },
    {
      question: "Deltakeren blir sliten og presterer dårligere utover i studien. Dette er:",
      options: ["Uttrøtting (fatigue)", "Trening", "Sensitivisering", "Adaptasjon fordi sansene gradvis venner seg til den gjentatte stimulusen"],
      explanation: "Fallende prestasjon på grunn av tretthet = uttrøttingseffekt.",
    },
    {
      question: "En gjentatt stimulus utløser stadig svakere respons — man venner seg til den. Dette er:",
      options: ["Habituering", "Sensitivisering", "Kontrast", "Trening"],
      explanation: "Svakere respons på gjentatt stimulus = habituering. Sensitivisering er det motsatte.",
    },
    {
      question: "Lunkent vann kjennes varmt rett etter iskaldt vann. Hvilken effekt er dette et eksempel på?",
      options: ["Kontrasteffekt", "Habituering fordi responsen svekkes ved hver gjentakelse", "Trening", "Uttrøtting"],
      explanation: "Betingelsen oppleves annerledes fordi den sammenlignes med den forrige = kontrast.",
    },
    {
      question: "Når er innengruppedesign uaktuelt, selv med motbalansering?",
      options: ["Når effekten er irreversibel (f.eks. læring eller behandling)", "Når utvalget er lite", "Når det er to betingelser", "Når man ønsker å oppnå så høy statistisk styrke som overhodet mulig"],
      explanation: "Irreversible effekter bryter rekkefølgesymmetrien; motbalansering forutsetter symmetriske rekkefølger, så da må man bruke mellomgruppe.",
    },
    {
      question: "Hva er full motbalansering?",
      options: ["Bruk av alle mulige rekkefølger av betingelsene", "Bruk av bare én fast rekkefølge av betingelsene for alle deltakerne", "Å droppe kontrollgruppen", "Å måle rekkefølge som egen UV"],
      explanation: "Full motbalansering bruker alle rekkefølger; delvis (latinsk kvadrat) bruker et utvalg når full blir for mange.",
    },
    {
      question: "Hva er et latinsk kvadrat?",
      options: ["Delvis motbalansering der hver betingelse forekommer én gang i hver posisjon", "Full motbalansering som tar i bruk samtlige mulige rekkefølger av alle betingelsene", "En type kontrollgruppe", "En analysemetode for interaksjon"],
      explanation: "Latinsk kvadrat er en økonomisk delvis motbalansering — hver betingelse i hver posisjon én gang.",
    },
    {
      question: "Hva er A-markøren når man drøfter overføringseffekter på eksamen?",
      options: ["Å case-tilpasse — peke ut hvilke av de seks som truer akkurat dette scenariet", "Å liste opp alle de seks overføringseffektene i korrekt kronologisk rekkefølge", "Å definere hver effekt ordrett", "Å regne ut antall rekkefølger"],
      explanation: "Sensor honorerer case-tilpasning; å ramse opp alle seks uten å knytte dem til scenariet gir C-tak (feil #8).",
    },
    {
      question: "Hvorfor gir innengruppedesign høyere statistisk styrke enn mellomgruppe med samme antall målinger?",
      options: ["Fordi individforskjeller fjernes fra støyen, så effekten blir lettere å se", "Fordi et innengruppedesign alltid inkluderer langt flere deltakere enn et mellomgruppedesign", "Fordi det blinder forskeren", "Fordi det unngår kontrasteffekter"],
      explanation: "Å fjerne den største støykilden (forskjeller mellom personer) gjør en gitt effekt mer synlig → mer styrke.",
    },
    {
      question: "Hva er kost-nytte-resonnementet i designvalg?",
      options: ["Mellomgruppe sparer per-person-belastning men koster deltakere; innengruppe sparer deltakere men koster overføringseffekter", "At innengruppe alltid er billigst", "At mellomgruppe alltid gir best styrke", "At man i praksis alltid bør bruke full motbalansering av rekkefølgene, uansett hvor mange ulike betingelser selve designet faktisk inneholder"],
      explanation: "A-markøren er å veie de to designenes ulike priser mot hverandre for det konkrete tilfellet, ikke en fast regel.",
    },
    {
      question: "Hva er et blandet design (mixed design)?",
      options: ["Et design med minst én mellomgruppefaktor og minst én innengruppefaktor", "Et eksperimentelt design som bevisst er satt opp helt uten noen form for kontrollgruppe", "Et design med bare kvasi-UV", "Et N=1-design med to faser"],
      explanation: "Blandet design kombinerer between- og within-faktorer — vanlig i praksis (f.eks. gruppe mellom personer, tid innen personer).",
    },
    {
      question: "Treningsrunder før måling brukes for å:",
      options: ["Bruke opp treningseffekten før de egentlige betingelsene", "Blinde deltakerne", "Øke utvalget", "Måle selve rekkefølgen som en egen uavhengig variabel i designet"],
      explanation: "Øvingsforsøk før måling gjør at treningseffekten er «oppbrukt» og ikke lenger forbedrer skårene under selve studien.",
    },
    {
      question: "En gjentatt intens stimulus gir stadig sterkere reaksjon. Dette er:",
      options: ["Sensitivisering", "Habituering", "Adaptasjon", "Kontrast fordi betingelsen sammenlignes med den forrige"],
      explanation: "Økt respons på gjentatt (ofte intens) stimulus = sensitivisering; habituering er det motsatte.",
    },
    {
      question: "Hvorfor blir full motbalansering upraktisk ved mange betingelser?",
      options: ["Antall rekkefølger vokser som k! (fire betingelser = 24 rekkefølger)", "Fordi styrken faller", "Fordi individforskjellene øker", "Fordi selve kontrollgruppen forsvinner helt når man motbalanserer fullt ut"],
      explanation: "Med k betingelser finnes k! rekkefølger; 4 betingelser gir 24, så delvis motbalansering (latinsk kvadrat) brukes i stedet.",
    },
  ],
  'psy1010-2-3': [
    {
      question: "Hvor mange celler har et 2×2-design?",
      options: ["Fire", "To", "Åtte", "Seks celler siden man ganger radene med kolonnene"],
      explanation: "Antall celler = produktet av nivåtallene: 2·2 = 4 betingelser.",
    },
    {
      question: "Hvor leser du av en hovedeffekt i et faktorielt design?",
      options: ["I marginalgjennomsnittene (rad- og kolonnegjennomsnitt)", "I cellemønsteret", "I selve krysningspunktet mellom linjene i linjediagrammet", "I standardavviket"],
      explanation: "Hovedeffekter = marginaler. Cellemønster og linjekryssing er derimot hvor man ser interaksjon.",
    },
    {
      question: "Hvordan leser du av en interaksjon?",
      options: ["I cellemønsteret — endres effekten av én faktor når den andre skifter nivå?", "I marginalene", "I det samlede totalgjennomsnittet av alle de fire ulike cellene i hele designet", "I utvalgsstørrelsen"],
      explanation: "Interaksjon = cellemønster (simple effekter). Marginalene gir hovedeffekter, ikke interaksjon.",
    },
    {
      question: "Kan en interaksjon finnes uten noen hovedeffekt?",
      options: ["Ja — kryssende linjer kan nulle ut marginalene mens cellene viser samspill", "Nei, en interaksjon forutsetter alltid at det finnes minst én signifikant hovedeffekt", "Bare i design med tre faktorer", "Bare hvis utvalget er stort"],
      explanation: "Dette er A-skillet: interaksjon (celler) og hovedeffekt (marginaler) er logisk uavhengige. Kryssende linjer gir interaksjon uten hovedeffekt.",
    },
    {
      question: "I et linjediagram betyr parallelle linjer:",
      options: ["Ingen interaksjon — effekten av den ene faktoren er lik på alle nivåer av den andre", "En sterk interaksjon", "At begge hovedeffekter er null", "At hele det faktorielle designet i realiteten bare er et kvasieksperiment uten randomisering"],
      explanation: "Parallelle linjer = additive effekter = ingen interaksjon. Kryssende/viftende linjer = interaksjon.",
    },
    {
      question: "Cellene er: Koffein/Lett=8, Koffein/Vanskelig=4, Uten/Lett=4, Uten/Vanskelig=8. Hva er hovedeffekten av koffein?",
      options: ["0 (marginalene er begge 6)", "4", "−4", "8 (differansen mellom de to øverste cellene)"],
      explanation: "Koffein-marginal (8+4)/2=6; uten-marginal (4+8)/2=6; hovedeffekt = 6−6 = 0. Men det er en sterk interaksjon.",
    },
    {
      question: "Hva betyr det at koffeinets effekt er +4 på lette og −4 på vanskelige oppgaver?",
      options: ["Det er en interaksjon — effekten av koffein snur med oppgavetype", "Det er to hovedeffekter", "Det betyr at koffein ikke har noen effekt i det hele tatt på prestasjonen", "Det er en kvasi-UV"],
      explanation: "At de simple effektene har motsatt fortegn, er selve definisjonen på en interaksjon.",
    },
    {
      question: "Hvorfor gir et faktorielt design mer enn to separate eksperimenter?",
      options: ["Det avslører interaksjonen — hvordan faktorene samspiller — som separate forsøk ville midlet bort", "Det krever færre deltakere alltid", "Det gir alltid betydelig høyere ytre validitet enn to atskilte separate eksperimenter", "Det trenger ingen kontrollgruppe"],
      explanation: "Interaksjonen er informasjonen bare det faktorielle designet gir; separate forsøk kan ikke oppdage den.",
    },
    {
      question: "Hvilken test brukes til å analysere et faktorielt design?",
      options: ["Tofaktor-variansanalyse (ANOVA)", "En enkel t-test", "En vanlig Pearson-korrelasjon mellom de to faktorene", "Khikvadrat"],
      explanation: "ANOVA tester hovedeffekter og interaksjon samtidig. En t-test sammenligner bare to grupper.",
    },
    {
      question: "Kjønn brukes som faktor i et 2×2. Hva er konsekvensen for slutningen?",
      options: ["Kjønn er en kvasi-UV — man kan ikke trekke en ren kausal slutning om den", "Ingen konsekvens — kjønn kan randomiseres", "Da blir hele designet automatisk om til et rent innengruppedesign", "Man må droppe interaksjonen"],
      explanation: "Kjønn kan ikke manipuleres, så en «kjønnseffekt» kan bære konfunderende variabler; kausal slutning gjelder bare den manipulerte faktoren.",
    },
    {
      question: "En simpel effekt er:",
      options: ["Effekten av én faktor innenfor ett bestemt nivå av den andre", "Gjennomsnittet av alle cellene", "Selve hovedeffekten midlet over begge de to faktorene samtidig", "Standardfeilen til en celle"],
      explanation: "Simple effekter (effekt av B innen A1 vs. A2) er den direkte måten å avdekke interaksjon på.",
    },
    {
      question: "Hva er en vanlig feil ved tolkning av interaksjon?",
      options: ["Å lese den som «begge faktorer virker» i stedet for «effekten av den ene avhenger av den andre»", "Å regne marginalene", "Å tegne opp et fullstendig linjediagram med begge faktorene inntegnet før man i det hele tatt tolker interaksjonen", "Å bruke ANOVA"],
      explanation: "Interaksjon ≠ to hovedeffekter. Interaksjon betyr at effekten av én faktor avhenger av nivået på den andre.",
    },
    {
      question: "Hvor bør du IKKE lete etter en interaksjon?",
      options: ["I marginalene", "I cellemønsteret", "I linjediagrammet", "I de simple effektene"],
      explanation: "Marginalene gir hovedeffekter og kan skjule en interaksjon helt (interaksjon uten hovedeffekt).",
    },
    {
      question: "Effekter kalles additive når:",
      options: ["Effekten av B er lik uansett nivå av A, så de bare legger seg oppå hverandre", "At linjene for de to faktorene alltid vil krysse hverandre et sted i linjediagrammet", "Begge hovedeffekter er null", "Det finnes en interaksjon"],
      explanation: "Additive effekter = ingen interaksjon = parallelle linjer. Interaksjon er nettopp fravær av additivitet.",
    },
    {
      question: "Et 2×2×2-design har hvor mange celler?",
      options: ["Åtte", "Fire", "Seks", "Tolv celler fordi man legger sammen 2, 2 og 2 nivåer"],
      explanation: "Produktet av nivåtallene: 2·2·2 = 8 celler (høyereordens design).",
    },
  ],
  'psy1010-2-4': [
    {
      question: "Hva skiller et kvasieksperiment fra et ekte eksperiment?",
      options: ["Kvasieksperimentet mangler randomisert tilordning", "Kvasieksperimentet mangler manipulasjon", "Kvasieksperimentet har bare én deltaker", "Kvasieksperimentet har verken en avhengig variabel eller et klart utfallsmål"],
      explanation: "Begge manipulerer UV, men kvasieksperimentet mangler randomisering — gruppene er ikke-ekvivalente.",
    },
    {
      question: "Hva er hovedtrusselen mot indre validitet i et kvasieksperiment?",
      options: ["Seleksjon — gruppene kan være systematisk ulike fra start", "Reaktivitet", "Uttrøtting", "At studien har altfor høy statistisk styrke og power"],
      explanation: "Ikke-ekvivalente grupper gir en seleksjonstrussel: en forskjell kan skyldes at gruppene var ulike før tiltaket.",
    },
    {
      question: "Er et N=1-design et ekte eksperiment?",
      options: ["Ja — det manipulerer en betingelse og bruker personen som sin egen kontroll", "Nei, det er alltid bare beskrivende", "Bare dersom det inkluderer minst 30 forskjellige deltakere i utvalget", "Nei, det er et kvasieksperiment"],
      explanation: "N=1 har manipulasjon og kontrollfaser, så det oppfyller kravene til et ekte eksperiment tross én deltaker.",
    },
    {
      question: "Hva er rekkefølgen i et ABAB-design?",
      options: ["Baseline → tiltak → baseline → tiltak", "Tiltak → baseline → tiltak → baseline", "Baseline → baseline → tiltak → tiltak", "Fire helt ulike tiltak gjennomført rett etter hverandre uten baseline"],
      explanation: "A = baseline (ingen tiltak), B = tiltak; ABAB veksler for å styrke årsaksslutningen gjennom reversering.",
    },
    {
      question: "Hva er det avgjørende skillet mellom en kasusstudie og et N=1-eksperiment?",
      options: ["Om noe manipuleres — N=1 manipulerer, kasusstudien bare beskriver", "Antall deltakere", "Om selve studien er publisert i et fagfellevurdert tidsskrift", "Om den bruker intervju"],
      explanation: "Begge har én person; skillet er manipulasjonen. Å blande dem er feil #4.",
    },
    {
      question: "En nevrolog beskriver detaljert én pasient med en sjelden hukommelsessvikt, uten å endre noe. Dette er:",
      options: ["En kasusstudie", "Et N=1-eksperiment", "Et kvasieksperiment", "Et faktorielt design"],
      explanation: "Ingen manipulasjon → beskrivende → kasusstudie, ikke et eksperiment.",
    },
    {
      question: "Hvorfor gir et N=1-design sterk indre, men svak ytre validitet?",
      options: ["Personen er sin egen kontroll (sterk kausalitet for individet), men én person kan ikke bære en generalisering", "Fordi et N=1-design alltid innebærer en full randomisering av betingelsene", "Fordi det har mange deltakere", "Fordi det mangler manipulasjon"],
      explanation: "Egenkontroll + reversering gir sterk individkausalitet; men med N=1 vet man ikke hvor typisk personen er.",
    },
    {
      question: "Hva krever et ABAB-design av baseline-fasen?",
      options: ["At den er stabil (ligger rimelig flatt) før tiltaket settes inn", "At den stiger jevnt", "At den varer minst ett år", "At selve baseline-fasen bare måles én eneste gang helt før tiltaket settes inn"],
      explanation: "En stabil baseline gir et klart sammenligningsgrunnlag; en drifting baseline svekker slutningen.",
    },
    {
      question: "Hvorfor gir flere reverseringer bedre indre validitet i et N=1-design?",
      options: ["Det blir stadig mindre sannsynlig at noe annet enn tiltaket svinger i samme takt", "Fordi utvalget blir større", "Fordi flere reverseringer i praksis fungerer som en randomisering av selve deltakeren i studien", "Fordi baselinen driver mindre"],
      explanation: "At atferden følger tiltaket av og på gjentatte ganger, gjør konkurrerende forklaringer usannsynlige.",
    },
    {
      question: "Hva er en ikke-ekvivalent gruppe?",
      options: ["En gruppe dannet uten randomisering som kan skille seg systematisk fra sammenligningsgruppen", "En sammenligningsgruppe som består av færre enn ti deltakere totalt sett i hele studien", "En randomisert kontrollgruppe", "En gruppe uten avhengig variabel"],
      explanation: "Uten randomisering kan gruppene være ulike før tiltaket — kilden til seleksjonstrusselen i kvasidesign.",
    },
    {
      question: "Når er innengruppe/ABAB uaktuelt og man må velge et annet design?",
      options: ["Når effekten er irreversibel (læring, varig behandling)", "Når baselinen er stabil", "Når man allerede har rekruttert svært mange deltakere til studien", "Når tiltaket er billig"],
      explanation: "Reversering forutsetter at atferden kan vende tilbake; irreversible effekter bryter dette → multiple baseline eller gruppedesign.",
    },
    {
      question: "Hvilken kunnskap kan en kasusstudie gi?",
      options: ["Rik beskrivelse og hypotesegenerering — men ikke fastslå årsak", "Sikker kausal slutning", "En presis gjennomsnittseffekt som gjelder for hele populasjonen", "Statistisk styrke"],
      explanation: "Deskriptive design beskriver og genererer hypoteser; bare eksperimentelle design kan slutte årsak.",
    },
    {
      question: "Hva er et felteksperiment?",
      options: ["Et eksperiment i naturlige omgivelser, ofte kvasi, med høy ytre validitet", "Et rent laboratorieeksperiment som gjennomføres under svært streng eksperimentell kontroll", "En ren kasusstudie", "Et design uten uavhengig variabel"],
      explanation: "Felteksperimenter bytter noe indre validitet mot høyere økologisk (ytre) validitet.",
    },
    {
      question: "Hvilket er et klassisk ekte N=1-eksperiment fra pensum?",
      options: ["Ebbinghaus' studier av egen hukommelse", "Freuds beskrivelse av Anna O.", "En stor spørreundersøkelse", "En stor tverrsnittstudie av eneggede tvillinger"],
      explanation: "Ebbinghaus manipulerte betingelser systematisk = N=1-eksperiment. Anna O. er en kasusstudie (beskrivende).",
    },
    {
      question: "Hva er et multiple baseline-design?",
      options: ["En N=1-variant der tiltaket innføres til ulike tider på tvers av atferder/personer, uten reversering", "Et vanlig randomisert gruppedesign som benytter hele to atskilte kontrollgrupper på samme tid", "En kasusstudie med flere kilder", "Et faktorielt design"],
      explanation: "Multiple baseline brukes når effekten ikke kan reverseres; hver atferd endres først når dens tiltak settes inn.",
    },
    {
      question: "Hva er 'regresjon mot gjennomsnittet' som kvasitrussel?",
      options: ["At ekstreme skårer ved første måling faller nærmere snittet ved neste, rent statistisk", "At tiltaket alltid virker", "At de to sammenligningsgruppene gradvis blir mer og mer like hverandre etter hvert som tiden går", "At baselinen driver oppover"],
      explanation: "Velger man grupper fordi de var ekstreme, kan de bedre seg statistisk uten tiltak — en kontrollgruppe avslører det.",
    },
    {
      question: "Hvorfor velges kvasi- eller N=1-design ofte av etiske grunner?",
      options: ["Fordi det kan være uforsvarlig å randomisere folk til skadelige betingelser eller nekte behandling", "Fordi de alltid er billigere", "Fordi kvasi- og N=1-design nesten alltid gir vesentlig høyere statistisk styrke enn et ekte eksperiment", "Fordi de er lettere å publisere"],
      explanation: "Randomisering lar seg ikke alltid forene med etikk; da er kvasi/N=1 det beste man forsvarlig kan få.",
    },
    {
      question: "Et rent AB-design (én baseline, ett tiltak) er svakt fordi:",
      options: ["En enkelt endring kan skyldes noe annet som skjedde samtidig (historie)", "Det har for mange deltakere", "Et rent AB-design mangler helt en tydelig definert avhengig variabel å måle", "Det er et kvasieksperiment"],
      explanation: "Uten reversering kan en historie-hendelse forklare endringen; ABAB styrker slutningen ved gjentatt av/på.",
    },
    {
      question: "Hva er forskjellen på individnivå- og gruppenivå-kausalitet?",
      options: ["Individnivå (N=1) sier at tiltaket virker for én person; gruppenivå sier noe om en gjennomsnittseffekt", "De er det samme", "Individnivå gjelder bare kvasidesign", "Gruppenivå-kausalitet gjelder utelukkende for rene beskrivende kasusstudier med bare én enkelt deltaker involvert"],
      explanation: "N=1 gir individkausalitet men svak generalisering; gruppedesign gir gjennomsnittseffekt men lite om den enkelte.",
    },
    {
      question: "Påstanden 'Freuds Anna O. er et N=1-eksperiment' er:",
      options: ["Feil — det er en kasusstudie (ingen systematisk manipulasjon med kontrollfaser)", "Riktig, nettopp fordi hele studien bare omfatter én eneste enkeltperson som følges", "Riktig, fordi den er grundig", "Umulig å avgjøre"],
      explanation: "Dette er nettopp feil #4: skillet er manipulasjon, ikke antall personer. Anna O. beskriver, manipulerer ikke.",
    },
  ],
  'psy1010-3-1': [
    {
      question: "Hva er gjennomsnittet av tallene 4, 6, 8?",
      options: ["6", "9", "18", "4"],
      explanation: "Sum = 18, delt på n = 3 gir 6. Gjennomsnittet er summen delt på antallet.",
    },
    {
      question: "Hvilket sentralmål er mest følsomt for uteliggere?",
      options: ["Gjennomsnittet", "Medianen", "Modus", "Interkvartilbredden"],
      explanation: "Gjennomsnittet trekkes mot ekstremverdier fordi alle tall inngår i summen. Median og modus er robuste.",
    },
    {
      question: "Hva er medianen i den sorterte serien 3, 5, 7, 9, 11?",
      options: ["7", "5", "9", "35"],
      explanation: "Med n = 5 (oddetall) er medianen den midterste (3.) verdien = 7.",
    },
    {
      question: "Hvorfor deler vi på n − 1 i stedet for n når vi regner varians fra et utvalg?",
      options: ["Fordi utvalgsgjennomsnittet gjør kvadratsummen systematisk for liten, så n − 1 korrigerer og gir et forventningsrett estimat", "Fordi vi i praksis alltid mister nøyaktig én observasjon under selve målingen, og derfor må trekke denne ene fra antallet i nevneren", "Fordi n − 1 gjør tallet penere å regne med", "Fordi variansen ellers kan bli negativ"],
      explanation: "n − 1 er antall frihetsgrader. Siden vi bruker utvalgets eget snitt som referanse, undervurderer vi ellers populasjonsspredningen.",
    },
    {
      question: "Hva er standardavviket hvis variansen s² = 9?",
      options: ["3", "9", "81", "4,5"],
      explanation: "SD = √s² = √9 = 3. Standardavviket er alltid kvadratrota av variansen.",
    },
    {
      question: "En fordeling har gjennomsnitt 20 og median 14. Hva sier det om formen?",
      options: ["Fordelingen er høyreskjev (hale mot høyre)", "Fordelingen er venstreskjev", "Fordelingen er symmetrisk", "At fordelingen overhodet ikke inneholder noen uteliggere"],
      explanation: "Gjennomsnitt > median betyr at høye verdier drar snittet opp mens medianen står stille — en hale mot høyre.",
    },
    {
      question: "Hvilket spredningsmål er robust mot uteliggere?",
      options: ["Interkvartilbredden (IQR)", "Variasjonsbredden (maks minus min)", "Standardavviket", "Variansen"],
      explanation: "IQR kutter bort de 25 % laveste og høyeste verdiene, så uteliggere påvirker den lite. De tre andre bruker ytterpunkter eller alle avvik.",
    },
    {
      question: "Hva er variansens enhet hvis dataene måles i poeng?",
      options: ["Poeng i annen (poeng²)", "Poeng", "Ingen enhet i det hele tatt, variansen er enhetsløs", "Prosent"],
      explanation: "Variansen er snittet av kvadrerte avvik, så enheten er kvadrert. Vi tar kvadratrota (SD) for å komme tilbake til poeng.",
    },
    {
      question: "Hvilket sentralmål kan brukes på nominalnivå (f.eks. hyppigste svarkategori)?",
      options: ["Modus", "Median", "Gjennomsnitt", "Standardavvik"],
      explanation: "Modus (den hyppigste verdien) krever ingen rangering og fungerer på alle målenivåer, også nominalt.",
    },
    {
      question: "Hva er interkvartilbredden hvis Q1 = 12 og Q3 = 20?",
      options: ["8", "32", "16", "4"],
      explanation: "IQR = Q3 − Q1 = 20 − 12 = 8. Det er bredden på den midterste halvparten av dataene.",
    },
    {
      question: "En serie er 5, 6, 6, 7, 40. Hvilket sentralmål beskriver «den typiske verdien» best?",
      options: ["Medianen (6), fordi 40 er en uteligger som drar gjennomsnittet", "Gjennomsnittet, fordi det er det eneste målet som bruker samtlige verdier i serien", "Modus, fordi den alltid er mest presis", "Variasjonsbredden, fordi den viser spennet"],
      explanation: "Med en uteligger (40) trekkes gjennomsnittet (12,8) langt over klumpen. Medianen (6) beskriver den typiske verdien best.",
    },
    {
      question: "Hva forteller standardavviket deg?",
      options: ["Hvor langt observasjonene i snitt ligger fra gjennomsnittet, i målingens egen enhet", "Den midterste verdien i fordelingen", "Den hyppigste verdien", "Selve forskjellen mellom den aller største og den aller minste verdien i hele datasettet"],
      explanation: "SD er den typiske avstanden fra gjennomsnittet, tilbake i samme enhet som målingen — derav navnet standard-avvik.",
    },
    {
      question: "Summen av avvikene (x − x̄) for et hvilket som helst datasett er alltid:",
      options: ["Null", "Lik gjennomsnittet", "Lik variansen", "Positiv"],
      explanation: "Avvikene over og under snittet kansellerer nøyaktig. Derfor kvadrerer vi dem før vi snitter — ellers blir spredningsmålet alltid null.",
    },
    {
      question: "Hvilket par hører naturlig sammen?",
      options: ["Median og IQR (robust duo)", "Median og standardavvik (en tilsynelatende robust kombinasjon)", "Gjennomsnitt og IQR", "Modus og varians"],
      explanation: "Robuste mål parres: median med IQR. Følsomme mål parres: gjennomsnitt med SD. Å blande dem er inkonsekvent rapportering.",
    },
    {
      question: "Ni verdier har sum av kvadratavvik = 32. Hva er variansen s²?",
      options: ["4", "3,56", "32", "8"],
      explanation: "s² = sum av kvadratavvik / (n − 1) = 32 / 8 = 4. Husk å dele på n − 1 = 8, ikke n = 9.",
    },
    {
      question: "En kandidat regner s² = 65,4 og skriver «standardavviket er 65,4». Hvilken feil er dette?",
      options: ["Han har glemt kvadratrota — SD = √65,4 ≈ 8,09, ikke 65,4", "Han har delt kvadratsummen på n i stedet for på n − 1 frihetsgrader", "Han har regnet medianen feil", "Han har brukt feil sentralmål"],
      explanation: "s² = 65,4 er variansen. Standardavviket er kvadratrota: SD = √65,4 ≈ 8,09. Sjekk alltid enheten.",
    },
    {
      question: "Hvorfor kvadrerer vi avvikene når vi regner varians?",
      options: ["For å hindre at negative og positive avvik kansellerer til null", "For å gjøre alle tallene mindre", "Fordi kvadrerte tall alltid blir penere og enklere å regne videre med", "For å gjøre om til prosent"],
      explanation: "Uten kvadrering summerer avvikene til null. Kvadreringen gjør alle bidrag positive (og straffer store avvik ekstra).",
    },
    {
      question: "Hvilket målenivå kreves for at gjennomsnittet skal være meningsfullt?",
      options: ["Minst intervallnivå", "Nominalnivå holder helt fint for å regne gjennomsnitt", "Bare ordinalnivå", "Ingen krav"],
      explanation: "Gjennomsnitt krever like avstander mellom verdiene, altså minst intervallnivå. På ordinale rangeringer er gjennomsnitt tvilsomt.",
    },
    {
      question: "En symmetrisk fordeling har typisk:",
      options: ["Gjennomsnitt ≈ median ≈ modus", "Gjennomsnitt langt over median", "Modus mye høyere enn median", "Ingen entydig median"],
      explanation: "Når ingen hale drar, faller de tre sentralmålene omtrent sammen. Sprik mellom dem signaliserer skjevhet.",
    },
    {
      question: "Hva skjer med variasjonsbredden hvis du legger til én ekstremt høy verdi?",
      options: ["Den øker kraftig, fordi den bare avhenger av ytterpunktene", "Den forblir helt upåvirket, fordi variasjonsbredden er et robust mål", "Den halveres", "Den blir negativ"],
      explanation: "Variasjonsbredden = maks − min, så en ny høy verdi endrer den direkte. IQR ville derimot vært nesten upåvirket.",
    },
  ],
  'psy1010-3-2': [
    {
      question: "Hva forteller en z-skåre?",
      options: ["Hvor mange standardavvik en verdi ligger over eller under gjennomsnittet", "Den hyppigste verdien i fordelingen", "Den eksakte prosentandelen av deltakerne som svarte helt riktig", "Forskjellen mellom største og minste verdi"],
      explanation: "z = (x − x̄)/SD måler avstanden fra snittet i antall standardavvik. Fortegnet gir retningen.",
    },
    {
      question: "Hva er z-skåren for en verdi på 70 når x̄ = 50 og SD = 10?",
      options: ["2,0", "0,5", "20 (differansen mellom skår og snitt)", "1,4"],
      explanation: "z = (70 − 50)/10 = 20/10 = 2,0. Verdien ligger 2 standardavvik over snittet.",
    },
    {
      question: "Hvor stor andel av en normalfordeling ligger innenfor ±1 standardavvik?",
      options: ["Ca. 68 %", "Ca. 95 %", "Ca. 50 %", "Ca. 99,7 %"],
      explanation: "68–95–99,7-regelen: ±1 SD ↔ 68 %, ±1,96 SD ↔ 95 %, ±3 SD ↔ 99,7 %.",
    },
    {
      question: "Hvilken av disse verdiene vises IKKE i et standard boksplott?",
      options: ["Gjennomsnittet", "Medianen (selve den midterste verdien i fordelingen)", "Q1", "Q3"],
      explanation: "Boksplottet bygger på median og kvartiler (robuste mål). Gjennomsnittet vises ikke.",
    },
    {
      question: "Endrer en z-transformasjon formen på en skjev fordeling?",
      options: ["Nei — den flytter bare senter til 0 og skala til SD 1; formen bevares", "Ja, en z-transformasjon gjør automatisk enhver skjev fordeling til en helt normalfordeling", "Ja, den fjerner alle uteliggere", "Nei, men den fjerner skjevheten"],
      explanation: "Standardisering endrer senter og skala, ikke form. En skjev fordeling forblir skjev — derfor krever prosent-tolkning av z at fordelingen allerede er normal.",
    },
    {
      question: "Hva er IQR i et boksplott med Q1 = 5 og Q3 = 11?",
      options: ["6", "16", "5,5", "11"],
      explanation: "IQR = Q3 − Q1 = 11 − 5 = 6. Det er bredden på boksen (midterste 50 %).",
    },
    {
      question: "En fordeling har en lang hale mot høyre. Den er:",
      options: ["Høyreskjev", "Venstreskjev", "Symmetrisk", "Normalfordelt"],
      explanation: "Halen peker mot skjevhetens navn: hale mot høyre = høyreskjev. Gjennomsnittet ligger da over medianen.",
    },
    {
      question: "Hvilken z-verdi avgrenser (sammen med sitt speilbilde) de midterste 95 % i en normalfordeling?",
      options: ["±1,96", "±1,0", "±3,0 (grensen for 99,7 %)", "±0,95"],
      explanation: "±1,96 SD ↔ 95 %. Dette tallet dukker opp igjen i standardfeil, konfidensintervaller og p-verdier.",
    },
    {
      question: "Ada har z = 1,5 på en test og z = 1,75 på en annen. Hvor gjorde hun det relativt best?",
      options: ["På testen med z = 1,75, siden hun ligger flere SD over snittet der", "På testen med z = 1,5, siden en lavere z-verdi alltid betyr et bedre resultat", "Like godt, siden begge er positive", "Umulig å si uten råskårene"],
      explanation: "Høyere z = lenger over snittet i standardavvik = relativt bedre. z gjør testene sammenlignbare selv om råskårene er ulike.",
    },
    {
      question: "Hva beholder et stem-and-leaf-diagram som et histogram mister?",
      options: ["De eksakte tallverdiene", "Fargekoding", "Gjennomsnittet", "Standardavviket til hele fordelingen"],
      explanation: "Stem-and-leaf viser både formen OG de faktiske verdiene, så du kan lese av median og eksakte tall direkte.",
    },
    {
      question: "Mange respondenter krysser av på maksimumsverdien i en kort skala. Hva kalles dette?",
      options: ["En takeffekt", "En gulveffekt", "En z-transformasjon", "En normalfordeling"],
      explanation: "Takeffekt = opphopning på høyeste verdi, som gir en skjev, ikke-normal fordeling. Da svikter prosent-tolkningen av z.",
    },
    {
      question: "En z-skåre på −1,5 betyr at verdien ligger:",
      options: ["1,5 standardavvik under gjennomsnittet", "Hele 1,5 standardavvik over selve gjennomsnittet", "1,5 enheter under gjennomsnittet", "På 15-persentilen uansett fordeling"],
      explanation: "Negativ z = under snittet; størrelsen (1,5) er antall SD. Fortegnet gir retning, tallet gir avstand.",
    },
    {
      question: "Hvorfor er normalfordelingen «grunnmuren for parametrisk statistikk»?",
      options: ["Fordi parametriske tester antar tilnærmet normale data eller utvalgsfordelinger, og normalfordelingen beskrives fullt av to parametre", "Fordi den er den eneste fordelingen som finnes i psykologi", "Fordi normalfordelingen i psykologiske data i praksis nesten alltid viser seg å være tydelig venstreskjev, og så godt som aldri helt symmetrisk", "Fordi den ikke har noe gjennomsnitt"],
      explanation: "z-, t- og F-tester bygger på normalantakelsen. Normalfordelingen er bestemt av gjennomsnitt og SD alene.",
    },
    {
      question: "I et boksplott ligger medianstreken helt nede ved Q1. Hva antyder det?",
      options: ["Fordelingens kjerne er høyreskjev", "At hele fordelingen er helt perfekt symmetrisk", "Det finnes ingen uteliggere", "Gjennomsnittet er lik medianen"],
      explanation: "Medianstrek nær nedre kant + langt øvre værhår ⟹ hale mot høyre = høyreskjev kjerne.",
    },
    {
      question: "En verdi har z = +2 på både en IQ-test og en feilrate-test. Hva er forskjellen i tolkning?",
      options: ["På IQ er +2 bra (blant de øverste); på feilrate er +2 dårlig (blant de med flest feil)", "Ingen forskjell i det hele tatt — en z-verdi på 2 betyr nøyaktig det samme uansett hva som måles", "På IQ er det dårlig, på feilrate bra", "z kan ikke sammenlignes mellom tester"],
      explanation: "z sier bare avstand fra snittet, ikke om høyt er ønskelig. Retningen tolkes ut fra hva variabelen måler.",
    },
  ],
  'psy1010-3-3': [
    {
      question: "Hva er standardfeilen (SE) til gjennomsnittet?",
      options: ["Standardavviket i utvalgsfordelingen — hvor mye et utvalgsgjennomsnitt typisk avviker fra populasjonsgjennomsnittet", "Rett og slett spredningen mellom de enkelte personene i selve rådataene, altså det vanlige standardavviket SD i utvalget", "Den gjennomsnittlige målefeilen på hver enkelt måling", "Forskjellen mellom største og minste verdi"],
      explanation: "SE = SD/√n måler presisjonen i gjennomsnittsestimatet, altså spredningen i utvalgsfordelingen — ikke spredningen mellom personer (det er SD).",
    },
    {
      question: "Beregn SE når SD = 12 og n = 144.",
      options: ["1,0", "0,08", "12", "6"],
      explanation: "SE = SD/√n = 12/√144 = 12/12 = 1,0.",
    },
    {
      question: "Hva er forskjellen på SD og SE?",
      options: ["SD er spredningen mellom personer i dataene; SE er presisjonen i gjennomsnittsestimatet", "De er to navn på det samme", "SD brukes utelukkende ved små utvalg, mens SE til gjengjeld bare brukes ved store utvalg", "SD er alltid mindre enn SE"],
      explanation: "SD beskriver folk (fast, uavhengig av n). SE beskriver hvor sikkert vi kjenner snittet (krymper med √n). Å blande dem er feil #6.",
    },
    {
      question: "Hvor mange ganger må du øke utvalget for å halvere standardfeilen?",
      options: ["Firedoble det", "Doble det", "Åttedoble hele utvalget", "Halvere det"],
      explanation: "SE = SD/√n. Fordi n står under kvadratrot, må n firedobles (√4 = 2) for å halvere SE. Presisjon er dyr.",
    },
    {
      question: "Hva er utvalgsfordelingen?",
      options: ["Den teoretiske fordelingen av gjennomsnitt fra uendelig mange tenkte utvalg av samme størrelse", "Fordelingen av enkeltverdiene i ett utvalg", "Rett og slett fordelingen av alle de enkelte rådataverdiene i hele populasjonen sett under ett", "En figur vi tegner av rådataene"],
      explanation: "Utvalgsfordelingen består av gjennomsnittene fra tenkte gjentatte utvalg. Den observeres aldri direkte — vi har bare ett utvalg — men er grunnlaget for all slutning.",
    },
    {
      question: "Slutningen i statistisk hypotesetesting gjelder egentlig:",
      options: ["Populasjonen (μ), ikke det utvalget vi målte", "Utelukkende det ene konkrete utvalget vi faktisk målte", "Alle mulige utvalg på én gang", "Forskerens forventninger"],
      explanation: "Vi bruker utvalget til å si noe om det ukjente populasjonsgjennomsnittet μ. Å konkludere om utvalget alene er feil #12.",
    },
    {
      question: "Hva sier sentralgrenseteoremet?",
      options: ["Utvalgsfordelingen av gjennomsnittet blir tilnærmet normal når n er stor nok, uansett populasjonens form", "At absolutt alle populasjoner man overhodet kan tenke seg i naturen alltid er perfekt normalfordelte i seg selv", "Store utvalg gir alltid samme gjennomsnitt", "Standardfeilen blir null ved store utvalg"],
      explanation: "Selv om rådataene er skjeve, blir fordelingen av gjennomsnitt tilnærmet normal ved stor n. Det lar oss bruke ±1,96 på utvalgssnitt — en A-markør.",
    },
    {
      question: "Et utvalg har SD = 3 og n = 36. Hva blir SE?",
      options: ["0,5", "1,0", "0,08", "6"],
      explanation: "SE = 3/√36 = 3/6 = 0,5. Enkeltpersoner spriker med 3 (SD), men snittet er presist til 0,5 (SE).",
    },
    {
      question: "En kollega skriver «6,5 ± 0,5 timer» der 0,5 er SE, og kaller 0,5 for spredningen i søvn. Hvilken feil er dette?",
      options: ["Feil #6 — hun forveksler standardfeil (presisjon i snittet) med standardavvik (spredning mellom personer)", "Feil #12 — hun formulerer hele hypotesen om utvalgssnittet og glemmer fullstendig den ukjente populasjonen", "Hun har regnet SE feil", "Ingen feil, dette er korrekt"],
      explanation: "0,5 er SE (hvor presist snittet er), ikke SD (hvor mye folk sover ulikt). Å kalle SE for spredningen underdriver den ekte variasjonen dramatisk.",
    },
    {
      question: "Hva skjer med standardavviket (SD) når du øker utvalgsstørrelsen?",
      options: ["Det endres ikke systematisk — SD beskriver den ekte variasjonen mellom personer", "Det halveres når n dobles", "Det krymper med √n", "Standardavviket nærmer seg etter hvert null når utvalget blir tilstrekkelig stort"],
      explanation: "SD beskriver populasjonens/dataenes spredning og påvirkes ikke systematisk av n. Det er SE som krymper med større n.",
    },
    {
      question: "Populasjonsgjennomsnittet betegnes med:",
      options: ["μ (my)", "x̄", "SD", "SE (standardfeilen til snittet)"],
      explanation: "μ er det sanne, ukjente populasjonsgjennomsnittet. x̄ er utvalgets estimat på μ. Hypoteser formuleres om μ.",
    },
    {
      question: "Hvorfor avviker et utvalgsgjennomsnitt fra populasjonsgjennomsnittet selv i en feilfri studie?",
      options: ["På grunn av tilfeldig utvalgsvariasjon — ethvert tilfeldig utvalg treffer ikke μ eksakt", "Fordi forskeren nesten alltid har gjort en eller annen systematisk målefeil et sted underveis", "Fordi utvalget alltid er for lite", "Fordi SD er regnet feil"],
      explanation: "Utvalgsvariasjon er en matematisk konsekvens av å måle en del i stedet for helheten, ikke en feil. SE kvantifiserer hvor mye.",
    },
    {
      question: "Et utvalgsgjennomsnitt ligger 3 standardfeil fra det antatte populasjonssnittet. Er det mye eller lite?",
      options: ["Mye — i en normal utvalgsfordeling ligger 99,7 % innenfor ±3 SE, så det er svært usannsynlig hvis antakelsen stemmer", "Lite — hele 3 SE ligger fortsatt godt innenfor det som til vanlig regnes som helt normal og fullstendig forventet variasjon", "Umulig å si uten å kjenne SD", "Det avhenger bare av n"],
      explanation: "Med 68–95–99,7-regelen anvendt på utvalgsfordelingen er 3 SE ekstremt. Det peker mot at populasjonssnittet ikke er som antatt (lav p).",
    },
    {
      question: "Hva forteller SE = SD/√n oss om verdien av å samle mer data?",
      options: ["Presisjonen øker med √n, så gevinsten avtar per ny deltaker", "Presisjonen i estimatet øker helt proporsjonalt med utvalgsstørrelsen n", "Mer data endrer ikke presisjonen", "Presisjonen øker med n²"],
      explanation: "Fordi n står under kvadratrot, gir de første deltakerne mest, og enorme utvalg gir bare marginalt bedre presisjon.",
    },
    {
      question: "Kan en liten standardfeil redde et skjevt (ikke-tilfeldig) utvalg?",
      options: ["Nei — SE måler presisjon, ikke om utvalget treffer riktig populasjon; systematisk skjevhet forsvinner ikke med større n", "Ja, en svært liten SE betyr i praksis alltid at man automatisk har fått et helt korrekt, godt og presist estimat av populasjonen", "Ja, hvis n er over 100", "Nei, men bare hvis SD også er liten"],
      explanation: "Ved bekvemmelighetsutvalg/frivillighetsbias sentreres utvalgsfordelingen på feil sted. SE fanger tilfeldig variasjon, ikke systematisk skjevhet.",
    },
    {
      question: "Hva er 95 %-intervallet rundt et utvalgsgjennomsnitt (tilnærmet normal utvalgsfordeling)?",
      options: ["x̄ ± 1,96 × SE", "x̄ ± 1,96 × SD (med standardavviket)", "x̄ ± SE", "x̄ ± 3 × SD"],
      explanation: "95 % av utvalgsfordelingen ligger innenfor ±1,96 SE fra μ. Merk: det er SE, ikke SD, som brukes her.",
    },
    {
      question: "En parameter og et estimat er:",
      options: ["En sann ukjent populasjonsverdi (parameter) vs. tallet vi regner fra utvalget for å gjette den (estimat)", "Egentlig bare to helt forskjellige navn på nøyaktig det samme tallet, som brukes om hverandre i statistikken", "Estimatet er sant, parameteren er en gjetning", "Begge er alltid kjent på forhånd"],
      explanation: "μ er en parameter (ukjent, fast); x̄ er et estimat (kjent, usikkert). SE forteller hvor mye estimatet bommer på parameteren.",
    },
    {
      question: "Hvorfor kan vi resonnere om utvalgsfordelingen når vi bare har ett utvalg?",
      options: ["Fordi den er en teoretisk konstruksjon vi kan regne SE for, ikke noe vi trenger å observere direkte", "Fordi vi i selve virkeligheten faktisk trekker svært mange ulike utvalg gjentatte ganger i praksis når vi forsker", "Fordi den er identisk med datafordelingen", "Fordi den alltid har SE = SD"],
      explanation: "Utvalgsfordelingen er et tankeeksperiment om «uendelig mange gjentatte trekninger». Nettopp derfor kan matematikken (SE) gjelde selv med ett utvalg.",
    },
    {
      question: "SE for gjennomsnittet (SD/√n) er byggesteinen for hva i kap. 3.4?",
      options: ["Standardfeilen for differansen mellom to gruppegjennomsnitt, SE(D)", "Selve standardavviket til hele den underliggende populasjonen man studerer", "Medianen i utvalget", "Variasjonsbredden"],
      explanation: "Når vi sammenligner to grupper (t-test), trenger vi SE for forskjellen mellom snittene, SE(D). Samme idé, bygget på SE.",
    },
    {
      question: "Datafordelingen og utvalgsfordelingen skiller seg ved at:",
      options: ["Datafordelingen viser enkeltverdier (spredning SD); utvalgsfordelingen viser gjennomsnitt (spredning SE, alltid smalere)", "De to fordelingene er i praksis fullstendig identiske og kan uten videre brukes helt om hverandre i absolutt alle sammenhenger", "Utvalgsfordelingen er alltid bredere enn datafordelingen", "Datafordelingen er alltid normal"],
      explanation: "For n > 1 er SE < SD, så utvalgsfordelingen er smalere og mer normal enn datafordelingen. Å holde dem fra hverandre er kjernen i kapitlet.",
    },
  ],
  'psy1010-3-4': [
    {
      question: "Hva måler t-observatoren?",
      options: ["Forskjellen mellom to gruppegjennomsnitt målt i standardfeil-enheter", "Spredningen innad i én gruppe", "Selve sannsynligheten for at nullhypotesen H0 faktisk er sann", "Andelen forklart varians"],
      explanation: "t = (x̄₁ − x̄₂)/SE(D): differansen delt på standardfeilen for differansen — altså forskjellen målt i standardfeil.",
    },
    {
      question: "Hva står SE(D) for i t-kjeden?",
      options: ["Standardfeilen for differansen mellom de to gjennomsnittene", "Standardavviket i gruppe 1", "Den samlede summen av begge de to gruppenes gjennomsnitt lagt sammen", "Differansen mellom variansene"],
      explanation: "SE(D) = Sp·√(1/n₁ + 1/n₂) er den typiske tilfeldige variasjonen i forskjellen mellom to gruppesnitt.",
    },
    {
      question: "To grupper har x̄₁ = 15, x̄₂ = 13 og SE(D) = 0,5. Hva er t?",
      options: ["4,0", "2,0", "0,25", "1,0"],
      explanation: "t = (15 − 13)/0,5 = 2/0,5 = 4,0. Differansen tilsvarer 4 standardfeil.",
    },
    {
      question: "Hva er sammenhengen mellom |t| og p?",
      options: ["Stor |t| gir liten p (mer usannsynlig under H0)", "Stor |t| gir stor p", "Verdiene |t| og p er alltid nøyaktig like store", "|t| påvirker ikke p"],
      explanation: "Stor |t| = resultatet ligger ute i halen av utvalgsfordelingen = liten sannsynlighet (p) under H0 = grunn til å forkaste.",
    },
    {
      question: "Hvorfor deler vi på SE(D) og ikke på SD i t-formelen?",
      options: ["Fordi vi tester forskjellen mellom gjennomsnitt, og SE(D) er den tilfeldige variasjonen i den forskjellen", "Fordi standardavviket SD nesten alltid er altfor stort til å kunne brukes på en fornuftig måte i selve t-formelen", "Fordi SE(D) er lettere å regne", "Det spiller ingen rolle hvilken vi bruker"],
      explanation: "SD er spredning innad i en gruppe; SE(D) er usikkerheten i differansen. Å dele på SD er feil #6 (SD/SE-forveksling).",
    },
    {
      question: "Hva er samlet standardavvik Sp for to grupper med lik varians s² = 4 og lik størrelse?",
      options: ["2,0", "4,0", "16 (den samlede variansen)", "1,0"],
      explanation: "Med lik varians i like store grupper er Sp = √(pooled varians) = √4 = 2,0.",
    },
    {
      question: "Hvorfor bør du runde av først i sluttsvaret, ikke underveis i t-kjeden?",
      options: ["For å unngå avrundingskaskader der akkumulerte feil kan endre konklusjonen", "Fordi vanlige kalkulatorer rett og slett ikke tåler mange desimaler i mellomregningen", "Fordi mellomsvarene ikke betyr noe", "For å spare tid"],
      explanation: "Runder du Sp, SE(D) og t hver for seg, hoper feilene seg opp og kan flytte t nok til å endre om p er under α.",
    },
    {
      question: "En stor t-verdi betyr at forskjellen er:",
      options: ["Usannsynlig hvis H0 er sann — men ikke nødvendigvis stor eller viktig", "At forskjellen er både statistisk signifikant og samtidig praktisk viktig", "Alltid en effekt på minst 5 poeng", "Umulig å skyldes tilfeldigheter"],
      explanation: "Stor t = signifikant, ikke nødvendigvis viktig. Med store utvalg gir trivielle differanser stor t (signifikans ≠ viktighet).",
    },
    {
      question: "Med et svært stort utvalg blir SE(D) liten. Hva er konsekvensen?",
      options: ["Selv bittesmå differanser kan gi en stor t og bli statistisk signifikante", "t blir alltid null", "At selve forskjellen mellom de to gruppene da automatisk også blir praktisk viktig", "p blir alltid over 0,05"],
      explanation: "t = differanse/SE(D). Liten SE(D) (stor n) forstørrer selv trivielle differanser — derfor er signifikans ikke det samme som viktighet.",
    },
    {
      question: "Oppgitt p = 0,002. Ved α = 0,05, hva konkluderer du?",
      options: ["Forkast H0, siden 0,002 < 0,05", "Behold H0, siden 0,002 er svært lite", "Kan ikke avgjøres uten t-verdien", "Forkast H0 bare hvis n er over 100"],
      explanation: "Beslutningsregelen er å forkaste H0 når p ≤ α. Her er 0,002 langt under 0,05, så vi forkaster.",
    },
    {
      question: "Oppgitt p = 0,03. Endres konklusjonen om α strammes fra 0,05 til 0,01?",
      options: ["Ja — ved α = 0,05 forkastes H0, men ved α = 0,01 er 0,03 > 0,01, så H0 beholdes", "Nei, konklusjonen forblir nøyaktig den samme uansett hvilket av de to signifikansnivåene man bruker", "Ja, men bare hvis t er negativ", "Nei, p endres når α endres"],
      explanation: "0,03 < 0,05 (forkast) men 0,03 > 0,01 (behold). Et strengere α krever et mer ekstremt resultat for å forkaste.",
    },
    {
      question: "Hva er nullhypotesen (H0) i en togruppe-t-test?",
      options: ["At de to populasjonsgjennomsnittene er like (μ₁ = μ₂)", "At de to observerte utvalgsgjennomsnittene er nøyaktig like store", "At variansene er ulike", "At forskjellen er viktig"],
      explanation: "H0: μ₁ = μ₂ (ingen ekte forskjell i populasjonene). t-testen spør hvor usannsynlig den observerte differansen er hvis H0 er sann.",
    },
    {
      question: "To grupper (n = 9 hver) har x̄₁ = 7, x̄₂ = 5 og SE(D) ≈ 0,707. Hva er t?",
      options: ["≈ 2,83", "≈ 1,41", "≈ 0,35", "≈ 14,1 (differansen delt på variansen)"],
      explanation: "t = (7 − 5)/0,707 = 2/0,707 ≈ 2,83. Differansen tilsvarer ca. 2,83 standardfeil.",
    },
    {
      question: "Hva er det siste, obligatoriske leddet i enhver t-løsning på eksamen?",
      options: ["En konklusjon i ord: hva t og p betyr for studien (forkast/behold H0)", "Å regne p-verdien på nytt", "Å oppgi den ferdig utregnede variansen med minst fire desimalers nøyaktighet til slutt", "Å tegne utvalgsfordelingen"],
      explanation: "Tolkningskravet: hvert regnestykke ender i prosa. «Differansen er X standardfeil; p < α, så vi forkaster H0» — ellers er svaret ufullstendig.",
    },
    {
      question: "SE(D) sammenlignet med SE for ett gjennomsnitt (kap. 3.3) er:",
      options: ["Standardfeilen for forskjellen mellom to snitt, og arver usikkerhet fra begge grupper", "Nøyaktig det samme som SE", "Alltid vesentlig mindre enn hver enkelt av de to gruppenes egne separate standardfeil hver for seg", "Uavhengig av utvalgsstørrelsene"],
      explanation: "SE gjelder ett gjennomsnitt; SE(D) gjelder differansen mellom to og er større fordi den samler usikkerhet fra begge grupper.",
    },
  ],
  'psy1010-4-1': [
    {
      question: "Hva er den korrekte tolkningen av p = 0,03?",
      options: ["Sannsynligheten for et minst like ekstremt resultat gitt at H0 er sann er 3 %.", "Det er 3 % sannsynlig at H0 er sann.", "Det er 3 % sannsynlig at H0 er feil.", "Det betyr at det er hele 97 % sannsynlig at selve alternativhypotesen H1 faktisk er sann."],
      explanation: "p er en betinget sannsynlighet: for dataene *gitt* H0, ikke for hypotesen. De tre gale er varianter av feil #1, som har eksplisitt trekk-instruks (H2018).",
    },
    {
      question: "Hva handler hypotesene H0 og H1 om?",
      options: ["Populasjonsgjennomsnittet μ.", "Utvalgsgjennomsnittet x̄.", "Selve standardavviket målt i det aktuelle utvalget.", "p-verdien."],
      explanation: "Vi tester en påstand om populasjonen (μ) ved hjelp av utvalget. Å formulere hypotesen om x̄ er feil #12 — vi kjenner jo allerede utvalgssnittet.",
    },
    {
      question: "Hvilken hypotese er det som faktisk testes i en nullhypotesetest?",
      options: ["H0 — nullhypotesen.", "H1 — alternativhypotesen.", "Begge testes samtidig og likeverdig.", "Den med lavest p-verdi."],
      explanation: "Logikken er indirekte: vi antar H0, ser hvor usannsynlig dataene blir under den, og forkaster H0 hvis det blir rart nok. Vi beviser aldri H1 direkte.",
    },
    {
      question: "En enhalet (retningsbestemt) test er tillatt når …",
      options: ["retningen er begrunnet i teori/tidligere funn FØR dataene ble sett.", "p-verdien blir mindre enn med en tohalet test.", "forskeren først ser hvilken retning dataene faktisk peker i, og deretter velger halen.", "utvalget er lite."],
      explanation: "Enhalet krever forhåndsbegrunnet retning. Å velge den etter å ha sett dataene, for å presse p under grensen, er feil #11.",
    },
    {
      question: "En tohalet test gir p = 0,072. Hva blir enhalet p (med begrunnet retning)?",
      options: ["0,036", "0,144", "0,072 (uendret tohalet p)", "0,010"],
      explanation: "Enhalet p = tohalet p / 2 = 0,036, fordi den ekstreme halen bare telles i én retning. Gyldig kun med forhåndsbegrunnet retning — og halveringen forutsetter at effekten går i den predikerte retningen.",
    },
    {
      question: "En tohalet test gir p = 0,048. Hva konkluderer du ved α = 0,05 og ved α = 0,01?",
      options: ["Forkast H0 ved 0,05; behold H0 ved 0,01.", "Forkast H0 ved begge nivåene.", "Behold H0 ved begge nivåene.", "Behold H0 ved 0,05, men forkast den ved det strengere 0,01."],
      explanation: "0,048 < 0,05 (forkast) men 0,048 > 0,01 (behold). En klassisk vippeverdi som snur ved α-skiftet.",
    },
    {
      question: "Hva betyr det at et resultat er 'statistisk signifikant' (p ≤ α)?",
      options: ["Forskjellen er trolig ekte, men ikke nødvendigvis stor eller viktig.", "At forskjellen mellom gruppene er både stor og praktisk viktig.", "H0 er bevist feil med sikkerhet.", "Effekten er nøyaktig α stor."],
      explanation: "Signifikans ≠ viktighet. Med store utvalg blir små, uviktige effekter signifikante fordi SE krymper. Rapporter effektstørrelse i tillegg.",
    },
    {
      question: "Hva betyr det å 'beholde H0' (ikke-signifikant resultat)?",
      options: ["Vi fant ikke sterke nok bevis mot H0 — det er ikke bevis for at effekten mangler.", "At vi nå endelig har bevist sikkert at det ikke finnes noen effekt i det hele tatt.", "H1 er bevist feil.", "p-verdien er nøyaktig 0."],
      explanation: "Fravær av bevis er ikke bevis på fravær. En ikke-signifikant test kan skyldes en ekte, men liten effekt, eller for lav power.",
    },
    {
      question: "Hvilken formulering av H0 er korrekt for et utvalg testet mot en norm på 50?",
      options: ["H0: μ = 50", "H0: x̄ = 50", "H0: p = 50", "H0: SE = 50"],
      explanation: "Hypotesene gjelder populasjonssnittet μ. Å skrive H0: x̄ = 50 er feil #12 — vi kjenner allerede utvalgssnittet.",
    },
    {
      question: "Fra hva leses p-verdien?",
      options: ["Utvalgsfordelingen (fordelingen av tenkte gjentatte utvalgssnitt).", "Selve datamatrisen.", "Populasjonens rådata.", "Utelukkende det observerte standardavviket i selve utvalget, helt alene."],
      explanation: "p leses fra utvalgsfordelingen, hvis spredning er SE. Å nevne dette er en A-markør (kobling til kap. 3.3).",
    },
    {
      question: "Hva er signifikansnivået α?",
      options: ["Terskelen p sammenlignes mot, og risikoen for å forkaste en sann H0.", "Selve sannsynligheten for at alternativhypotesen H1 faktisk viser seg å være sann.", "p-verdien vi observerer.", "Standardfeilen i utvalget."],
      explanation: "α (ofte 0,05) er terskelen og samtidig Type I-risikoen (falsk alarm). Den velges FØR dataene ses.",
    },
    {
      question: "Hvorfor formulerer vi hypotesen om μ og ikke om x̄?",
      options: ["Utvalgssnittet x̄ kjenner vi allerede; poenget er å slutte til det ukjente μ.", "μ er lettere å regne ut enn x̄.", "x̄ kan ikke være negativt.", "Utelukkende fordi selve eksamensformatet krever at man bruker greske bokstaver i svaret."],
      explanation: "En test slutter fra det vi ser (utvalget) til det vi ikke ser (populasjonen μ). Å teste et tall vi allerede kjenner gir ingen mening.",
    },
    {
      question: "Trinnene i en nullhypotesetest — hvilken rekkefølge er riktig?",
      options: ["Formuler hypoteser → velg α → velg/utfør test → finn p → konkluder.", "Finn p → velg α → formuler hypoteser → konkluder.", "Velg α → konkluder → formuler hypoteser → finn p.", "Konkluder først → finn deretter p → velg så α → formuler til slutt hypotesene."],
      explanation: "α velges før dataene ses, og hypotesene formuleres først. På eksamen oppgis ofte p, så tolkningen (trinn 5) er hovedjobben.",
    },
    {
      question: "En kandidat skriver: 'p = 0,02, altså 98 % sikkert at behandlingen virker.' Hvilken feil?",
      options: ["Feil #1 — p tolket som sannsynlighet for hypotesen.", "Feil #11 — å velge enhalet test helt uten forhåndsbegrunnelse.", "Feil #12 — hypotese om utvalget.", "Feil #6 — SD forvekslet med SE."],
      explanation: "p er sannsynligheten for dataene gitt H0, ikke for hypotesen gitt dataene. Denne ombyttingen er feil #1, med trekk-instruks.",
    },
    {
      question: "Hva innebærer 'signifikans ≠ viktighet'?",
      options: ["Et signifikant resultat kan gjelde en triviell effekt hvis utvalget er stort nok.", "Et signifikant resultat er alltid stort.", "At alle praktisk viktige effekter i naturen alltid også nødvendigvis vil være statistisk signifikante.", "Signifikans og viktighet er synonymer."],
      explanation: "Stort n gir liten SE, så selv bittesmå differanser blir signifikante. Signifikans svarer på 'trolig ekte?', ikke 'stor nok?'.",
    },
    {
      question: "Hvorfor er α = 0,05 en 'konvensjon, ikke en naturlov'?",
      options: ["Grensen er en avtalt terskel; p = 0,049 og 0,051 er nesten like sterke resultater.", "Fordi selve grensen på 0,05 er matematisk bevist å være den eneste optimale terskelen som finnes.", "Fordi loven krever 5 %.", "Fordi SE alltid er 0,05."],
      explanation: "0,05 er en historisk konvensjon. At det ene 'passerer' og det andre ikke, betyr ikke at de er kvalitativt ulike. En A-kandidat nevner dette.",
    },
    {
      question: "Et utvalg (n = 64, SD = 8) testes mot norm 50 og får x̄ = 52. Hva er SE?",
      options: ["1,0", "0,125", "8,0", "2,0"],
      explanation: "SE = SD/√n = 8/√64 = 8/8 = 1,0. Differansen 52 − 50 = 2 poeng er dermed 2 standardfeil.",
    },
    {
      question: "Hva er en 'vippeverdi' for p?",
      options: ["En p mellom 0,01 og 0,05 som gir ulik konklusjon avhengig av α-nivået.", "En p-verdi som viser seg å være lik nøyaktig null i hele den avsluttende utregningen.", "En p over 0,50.", "En p som er negativ."],
      explanation: "Vippeverdier (f.eks. 0,017, 0,048) er signifikante ved α = 0,05 men ikke ved α = 0,01. Å snu konklusjonen ved α-skifte er et fast deloppgaveledd.",
    },
    {
      question: "Hva er kjernen i den korrekte p-definisjonen som ofte mangler i gale svar?",
      options: ["Leddet 'gitt at H0 er sann'.", "Ordet 'signifikant'.", "Selve referansen til det aktuelle utvalget.", "Effektstørrelsen."],
      explanation: "p er en betinget sannsynlighet — for dataene forutsatt at H0 holder. Uten dette leddet blir tolkningen feil #1.",
    },
    {
      question: "Hvilken av disse er en A-markør sensor ser etter i en hypoteseoppgave?",
      options: ["At du kan snu konklusjonen ved et strengere α og skille signifikans fra viktighet.", "At du regner p-verdien for hånd.", "At du konsekvent alltid velger en enhalet test i alle oppgaver uansett hvordan situasjonen er.", "At du bruker flest mulig formler."],
      explanation: "A-skillene er: hypoteser om μ, begrunnet enhalet, α-skifte, og signifikans ≠ viktighet — ikke regneteknikk (formler oppgis).",
    },
    {
      question: "Hva er en Type I-feil, uttrykt via α (frempek til kap. 4.2)?",
      options: ["Å forkaste en sann H0 (falsk alarm), med risiko α.", "Å beholde en H0 som i virkeligheten er falsk.", "Å regne SE feil.", "Å velge feil test."],
      explanation: "Ved α = 0,05 aksepterer vi 5 % risiko for å forkaste en sann H0. Full dybde i kap. 4.2, men det henger direkte på hva α er.",
    },
    {
      question: "Hvorfor kalles nullhypotesetesting en 'indirekte' bevisføring?",
      options: ["Vi tester H0 (antar ingen effekt) og forkaster den hvis dataene blir usannsynlige — vi beviser aldri H1 direkte.", "Fordi vi gjennom hele testen regner ut den direkte sannsynligheten for at alternativhypotesen H1 faktisk er sann.", "Vi hopper over H0 og går rett på konklusjonen.", "Vi bruker bare beskrivende statistikk."],
      explanation: "Logikken er en bevisføring ved selvmotsigelse: 'hvis ingen effekt, ville dette vært svært usannsynlig — altså tror vi det er en effekt'.",
    },
    {
      question: "En forsker gjorde en tohalet test, fikk p = 0,08, og halverte til 0,04 for å 'få signifikans'. Hva er galt?",
      options: ["Enhalet halvering krever at retningen var begrunnet FØR dataene ble sett (feil #11).", "Ingenting er galt i det hele tatt — en slik halvering av p-verdien er alltid fullt tillatt uansett.", "p kan ikke halveres matematisk.", "Hun burde brukt α = 0,10."],
      explanation: "Å bytte til enhalet i etterkant for å presse p under grensen er feil #11 — retningsbestemt H1 uten forhåndsbegrunnelse.",
    },
    {
      question: "Hva sier en effektstørrelse som en p-verdi ikke sier?",
      options: ["Hvor stor effekten er, uavhengig av utvalgsstørrelse.", "Om resultatet er signifikant.", "Hvor stor α er.", "Nøyaktig hvor mange deltakere som til sammen var med i studien."],
      explanation: "p sier 'trolig ekte?'; effektstørrelsen sier 'hvor mye?'. Fordi p avhenger av n, må effektstørrelsen rapporteres i tillegg.",
    },
    {
      question: "Hva er den logiske grunnen til at vi 'beholder' H0 heller enn å 'akseptere' den?",
      options: ["H0-logikken er et falsifiseringsapparat — vi kan forkaste, men aldri bevise, H0.", "Fordi H0 alltid er sann.", "Fordi α forbyr aksept.", "Utelukkende fordi selve utvalget nesten alltid er altfor lite til å kunne bevise noe som helst."],
      explanation: "Vi kan falsifisere (forkaste) H0, men manglende bevis mot den beviser ikke at den holder. Derfor 'beholder' vi den.",
    },
  ],
  'psy1010-4-2': [
    {
      question: "Hva er en Type I-feil?",
      options: ["Å forkaste en sann H0 (falsk alarm).", "Å beholde en falsk H0.", "Å regne standardfeilen feil.", "Å velge en helt feil statistisk test til dataene."],
      explanation: "Type I = forkaste en sann H0 — se en effekt som ikke finnes. Risikoen er α.",
    },
    {
      question: "Hva er en Type II-feil?",
      options: ["Å beholde en falsk H0 (oversett effekt).", "Å forkaste en sann H0.", "Å bruke et altfor stort utvalg i studien.", "Å tolke p som P(H0)."],
      explanation: "Type II = beholde en falsk H0 — overse en ekte effekt. Risikoen er β.",
    },
    {
      question: "Hvilken risiko svarer til en Type I-feil?",
      options: ["α (signifikansnivået).", "β.", "1 − β (selve teststyrken).", "SE."],
      explanation: "Type I-risikoen ER α: med α = 0,05 forkastes en sann H0 5 % av gangene ved tilfeldighet.",
    },
    {
      question: "Hvordan defineres power?",
      options: ["Power = 1 − β.", "Power = 1 − α (signifikansnivået).", "Power = α + β.", "Power = β."],
      explanation: "Power er sannsynligheten for å oppdage en ekte effekt (forkaste en falsk H0), altså 1 − β. Konvensjon: 80 %.",
    },
    {
      question: "En medisin virker ikke, men testen konkluderer at den virker. Hvilken feil?",
      options: ["Type I-feil.", "Type II-feil.", "Avrundingsfeil.", "Målefeil."],
      explanation: "H0 (ingen effekt) er sann, men forkastes — det er en Type I-feil (falsk alarm).",
    },
    {
      question: "En medisin virker, men en liten studie konkluderer at den ikke virker. Hvilken feil?",
      options: ["Type II-feil.", "Type I-feil.", "Reliabilitetsfeil.", "Konfundering."],
      explanation: "H0 er falsk (medisinen virker), men beholdes — Type II-feil (oversett effekt), typisk ved lav power.",
    },
    {
      question: "Hva skjer med Type II-risikoen (β) hvis vi senker α fra 0,05 til 0,01?",
      options: ["β øker (flere oversette effekter).", "β synker.", "β blir null.", "Da blir β nøyaktig lik selve signifikansnivået α."],
      explanation: "Lavere α gjør det vanskeligere å forkaste H0, så flere ekte effekter overses — β øker. Feiltypene trekker mot hverandre.",
    },
    {
      question: "Hvilken av disse øker en studies power?",
      options: ["Å øke utvalgsstørrelsen n.", "Å redusere utvalgsstørrelsen.", "Å senke α til 0,001.", "Å øke standardavviket SD."],
      explanation: "Større n gir mindre SE og dermed høyere power. Lavere α og større SD trekker motsatt vei.",
    },
    {
      question: "Hvorfor gir et større utvalg høyere power?",
      options: ["Mindre SE ⟹ ekte effekter gir større testobservator ⟹ lettere å forkaste falsk H0.", "Fordi SD krymper.", "Fordi α automatisk synker.", "Fordi selve den ekte effektstørrelsen ute i naturen automatisk øker når utvalget blir større."],
      explanation: "Kjeden: større n ⟹ mindre SE = SD/√n ⟹ smalere utvalgsfordeling ⟹ større testobservator ⟹ mindre p ⟹ høyere power.",
    },
    {
      question: "Hva reduserer et større utvalg — SD eller SE?",
      options: ["SE (presisjonen i gjennomsnittet).", "SD, altså selve spredningen mellom de enkelte personene.", "Begge like mye.", "Ingen av dem."],
      explanation: "Større n krymper SE, ikke SD. Å tro at n reduserer SD er en fast felle. Det er fallende SE som løfter power.",
    },
    {
      question: "Hva er 80 %-konvensjonen?",
      options: ["Ønsket power = 0,80, altså β = 0,20.", "Ønsket α = 0,80.", "At 80 % av data må være normalfordelt.", "At 80 % av utvalget må svare."],
      explanation: "Standarden er 80 % power (β = 0,20). Den godtar høyere Type II-risiko (20 %) enn Type I (5 %).",
    },
    {
      question: "Summerer α og β til 1?",
      options: ["Nei — α gjelder når H0 er sann, β når H0 er falsk.", "Ja, alltid.", "Ja, men bare når utvalgsstørrelsen n er tilstrekkelig stor.", "Bare ved α = 0,05."],
      explanation: "α og β gjelder ulike verdener (sann vs. falsk H0) og summerer ikke. Det er β og power (1 − β) som summerer til 1.",
    },
    {
      question: "Ved screening for en alvorlig, behandlbar sykdom — hvilken feil er vanligvis verst?",
      options: ["Type II (å overse syke personer).", "Type I (falsk alarm).", "Begge feiltypene er i praksis alltid nøyaktig like ille.", "Verken eller."],
      explanation: "Ved screening vil man heller ha noen falske alarmer enn å overse syke. Da er Type II verst. Vurderingen er kontekstavhengig.",
    },
    {
      question: "Ved godkjenning av et nytt, dyrt medikament — hvilken feil er ofte mest alvorlig?",
      options: ["Type I (godkjenne noe virkningsløst).", "Type II, altså å avvise et medikament som faktisk virker.", "Ingen av dem.", "Alltid Type II."],
      explanation: "Å slippe et virkningsløst medikament på markedet (Type I) kan være farligere/dyrere. Motsatt av screening — konteksten avgjør.",
    },
    {
      question: "Hva betyr en Type I-feil KONKRET i en studie av en ny terapi mot angst (H0: ingen effekt)?",
      options: ["Å konkludere at terapien virker når den egentlig ikke gjør det.", "Å konkludere med at terapien ikke virker, selv om den i virkeligheten gjør det.", "Å regne t feil.", "Å velge feil utvalg."],
      explanation: "Type I ved sann H0 (terapien virker ikke): man tar i bruk en virkningsløs terapi. A-kravet er å si hva feilen betyr i scenariet.",
    },
    {
      question: "Å doble utvalget multipliserer SE med omtrent hvilken faktor?",
      options: ["0,71 (altså 1/√2).", "0,50 (altså en halvering).", "0,25.", "2,0."],
      explanation: "SE = SD/√n; dobler n, blir SE ganget med 1/√2 ≈ 0,71. Å firedoble n halverer SE (√-effekten).",
    },
    {
      question: "Hva er den vanligste tabben knyttet til feiltypene (feil #2)?",
      options: ["Å blande Type I og Type II.", "Å regne SE feil.", "Å bruke en enhalet test uten forhåndsbegrunnelse.", "Å glemme kvadratrota."],
      explanation: "V2024-veiledningen sier rett ut at studentene ofte blander de to. Huskeregel: Type I varsler brann uten røyk; Type II overser brannen.",
    },
    {
      question: "Hvilken faktor som påvirker power kan forskeren i praksis styre lettest?",
      options: ["Utvalgsstørrelsen n.", "Den ekte effektstørrelsen i naturen.", "Populasjonens SD.", "Om H0 er sann."],
      explanation: "Effektstørrelsen i naturen er gitt; forskeren kan styre n (og til dels α). Derfor er å øke n det realistiske grepet for mer power.",
    },
    {
      question: "I beslutningsmatrisen — hvor ligger de riktige utfallene?",
      options: ["På diagonalen (forkast falsk H0, behold sann H0).", "På motdiagonalen.", "Bare i øverste rad.", "Utelukkende nederst i selve beslutningsmatrisen."],
      explanation: "Riktige utfall: forkaste en falsk H0 (power) og beholde en sann H0. Feilene (Type I, Type II) ligger på motdiagonalen.",
    },
    {
      question: "Hva er huskeregelen for å skille feiltypene?",
      options: ["Spør først om H0 i virkeligheten er sann (⟹ Type I) eller falsk (⟹ Type II).", "Se på p-verdien alene.", "Se på α alene.", "Rett og slett telle opp det totale antallet deltakere som var med i hele studien."],
      explanation: "Nøkkelen er å avklare om H0 egentlig er sann eller falsk. Feil ved sann H0 = Type I; feil ved falsk H0 = Type II. Uten dette blander man (feil #2).",
    },
  ],
  'psy1010-4-3': [
    {
      question: "Hvilken test passer for å sammenligne gjennomsnittet i nøyaktig to uavhengige grupper?",
      options: ["Uparet t-test.", "En enveis mellomgruppe-ANOVA over gruppene.", "ANCOVA.", "Cohens kappa."],
      explanation: "To uavhengige grupper ⟹ uparet t-test (tohalet med mindre retning er begrunnet).",
    },
    {
      question: "Hvilken test bør brukes for å sammenligne fem gruppers gjennomsnitt?",
      options: ["Enveis mellomgruppe-ANOVA.", "Ti separate parvise t-tester mellom gruppene.", "En enkelt t-test.", "En korrelasjon."],
      explanation: "Tre eller flere grupper ⟹ én samlet ANOVA, som holder den samlede feilraten nede. Mange t-tester blåser opp familywise error.",
    },
    {
      question: "Hva er familywise error?",
      options: ["Den samlede sannsynligheten for minst én Type I-feil over flere tester.", "Den samlede sannsynligheten for å begå minst én Type II-feil over flere tester.", "Feilen ved å regne t feil.", "Feil i utvalgsrammen."],
      explanation: "Hver t-test har 5 % Type I-risiko; mange tester hoper opp risikoen. Med 10 tester blir samlet risiko ≈ 40 %.",
    },
    {
      question: "Med fem grupper, hvor mange parvise sammenligninger blir det?",
      options: ["10", "5", "20 (antall grupper ganget)", "4"],
      explanation: "Antall par = k(k−1)/2 = 5·4/2 = 10. Ti t-tester à 5 % gir rundt 40 % samlet falsk-alarm-risiko.",
    },
    {
      question: "Hva er kjernebegrunnelsen sensor krever for å velge ANOVA framfor mange t-tester?",
      options: ["ANOVA holder den samlede (familywise) feilraten på α.", "ANOVA er raskere å regne.", "ANOVA gir alltid lavere p.", "ANOVA krever alltid vesentlig færre deltakere enn t-tester."],
      explanation: "Begrunnelsen ER poenget: én samlet test unngår at Type I-risikoen eksploderer. Å bruke ANOVA uten å kunne dette er feil #7.",
    },
    {
      question: "Hva er en kovariat?",
      options: ["En tilleggsvariabel korrelert med UV og AV som kontrolleres bort.", "En egen tilleggsvariabel som forskeren selv aktivt manipulerer og setter verdien på.", "Det samme som avhengig variabel.", "En feilkilde i målingen."],
      explanation: "En kovariat henger sammen med både UV og AV; ANCOVA kontrollerer den bort for å isolere gruppeeffekten.",
    },
    {
      question: "Hva gjør en ANCOVA?",
      options: ["En ANOVA som i tillegg kontrollerer bort en eller flere kovariater.", "En egen analyse som bare regner ut korrelasjonen mellom to ulike variabler.", "Sammenligner nøyaktig to grupper.", "Tester reliabiliteten til en skala."],
      explanation: "ANCOVA 'renser' AV for kovariatens innflytelse før gruppene sammenlignes — reduserer støy og fjerner systematisk skjevhet.",
    },
    {
      question: "Sensor kaller ANCOVA-leddet en oppgave 'ment å skille gode kandidater'. Hva er A-markøren?",
      options: ["Å nevne ANCOVA/kovariat uoppfordret og forklare hva kovariaten gjør.", "Å regne ANCOVA for hånd.", "Å velge enhalet test.", "Å bruke så mange ulike statistiske formler som overhodet mulig i selve svaret."],
      explanation: "ANCOVA er et uttalt A/B-skille: å bruke begrepet og forklare kontroll-bort-grepet skiller topp fra midt.",
    },
    {
      question: "En student kjørte ti t-tester ved fem grupper og fant to signifikante. Hvilken feil?",
      options: ["Feil #7 — mange t-tester ved 3+ grupper.", "Feil #1 — p-verdi-feilen.", "Feil #12 — å formulere hypotesen om selve utvalget.", "Feil #6 — SD vs. SE."],
      explanation: "Ved 3+ grupper skal man bruke ANOVA. Ti t-tester gir ~40 % samlet falsk-alarm-risiko, så de to funnene kan være tilfeldige.",
    },
    {
      question: "Hva er forskjellen på å bruke en tilleggsvariabel som kovariat vs. som ekstra faktor?",
      options: ["Kovariat (ANCOVA) kontrollerer den bort; ekstra faktor (toveis ANOVA) modellerer den.", "Det er ingen forskjell.", "En kovariat kan i praksis bare tas i bruk når man har nøyaktig to grupper å sammenligne.", "Faktor krever alltid regning."],
      explanation: "ANCOVA fjerner en forstyrrelse; toveis ANOVA studerer variabelens egen effekt og samspill. Forskningsspørsmålet avgjør.",
    },
    {
      question: "Når er en tilleggsvariabel i en toveis ANOVA en kvasi-UV?",
      options: ["Når den er en egenskap som ikke kan manipuleres (kjønn, alder).", "Når den er kontinuerlig.", "Når den er kovariat.", "Hver gang variabelen korrelerer sterkt med den avhengige variabelen AV."],
      explanation: "En ikke-manipulerbar egenskap brukt som faktor er en kvasi-UV (kobling til kap. 2.3).",
    },
    {
      question: "Kreves det at man regner ut ANOVA eller ANCOVA på eksamen?",
      options: ["Nei — testvalget er en begrunnet drøfting, ikke et regnestykke.", "Ja, alltid.", "Bare ANCOVA.", "Ja, men bare i de tilfellene der man har nøyaktig fem grupper eller flere."],
      explanation: "ANOVA-/ANCOVA-regning kreves aldri. Talleillustrasjonen (antall par) er bare illustrasjon; begrunnelsen er poenget.",
    },
    {
      question: "Hva er vilkårene for at en kovariat gir mening i en ANCOVA?",
      options: ["Den må korrelere med AV og helst være målt før manipulasjonen.", "Den må manipuleres av forskeren.", "Den må være helt normalfordelt og nøyaktig lik i samtlige grupper.", "Den må være uavhengig av AV."],
      explanation: "En nyttig kovariat henger sammen med AV og er målt før/uavhengig av manipulasjonen, så den kan kontrolleres bort.",
    },
    {
      question: "Fire treningsprogrammer sammenlignes på kondisjon. Hvilken test og hvorfor?",
      options: ["Enveis ANOVA — én samlet test holder familywise error nede.", "Uparet t-test, siden det egentlig bare handler om gjennomsnitt.", "ANCOVA — det er fire grupper.", "Korrelasjon — variablene henger sammen."],
      explanation: "Fire grupper ⟹ ANOVA. Seks parvise t-tester ville blåst opp den samlede feilraten.",
    },
    {
      question: "Hvordan kan man komme nærmere en årsakskonklusjon i et korrelasjonsspørsmål uten RCT?",
      options: ["Longitudinelle design, multippel regresjon med kontrollvariabler, eller gruppesammenligninger.", "Ved å øke α til 0,10.", "Ved å kjøre flere t-tester.", "Ved rett og slett å se helt bort fra samtlige mulige bakenforliggende tredjevariabler i hele analysen."],
      explanation: "Flere veier finnes (V2024s 'tenk selv'-ledd). En A-besvarelse velger og begrunner ut fra caset, ramser ikke alt (feil #8).",
    },
    {
      question: "Hva er første spørsmål i beslutningstreet for testvalg?",
      options: ["Hvor mange grupper/betingelser er det?", "Hva er p-verdien?", "Er dataene i det hele tatt tilnærmet normalfordelt?", "Hvor stort er α?"],
      explanation: "Antall grupper avgjør t-test (to) vs. ANOVA (tre+). Deretter vurderer man tilleggsvariabler (ANCOVA/toveis ANOVA).",
    },
    {
      question: "Er en uparet t-test to- eller enhalet som standard?",
      options: ["Tohalet, med mindre en retningshypotese er begrunnet på forhånd.", "Alltid enhalet.", "Den er alltid tohalet, og skal aldri under noen omstendighet gjøres enhalet.", "Det spiller ingen rolle."],
      explanation: "t-testen er tohalet som standard; enhalet krever forhåndsbegrunnet retning (feil #11 ellers), jf. kap. 4.1.",
    },
    {
      question: "Hva blir problemet hvis man bare skriver 'jeg brukte ANOVA' uten videre?",
      options: ["Man mangler begrunnelsen (familywise error) som er selve poenget.", "Ingenting — det holder.", "Da må man plutselig regne ut hele ANOVA-tabellen for hånd i tillegg.", "Man har brukt feil test."],
      explanation: "Sensor honorerer hvorfor mer enn hvilken. Uten familywise-begrunnelsen gir svaret lite — begrunnelsen er A-kravet (feil #7).",
    },
  ],
  'psy1010-5-1': [
    {
      question: "Hva gir fortegnet til Pearsons r?",
      options: ["Retningen på sammenhengen (+ i takt, − motsatt)", "Styrken på sammenhengen", "Andelen forklart varians", "Selve sannsynligheten for at hele sammenhengen faktisk er ekte"],
      explanation: "Fortegnet gir retning; tallverdien |r| gir styrke. De to er atskilte.",
    },
    {
      question: "r = −0,80 beskriver en sammenheng som er",
      options: ["sterk og negativ", "svak og negativ", "moderat og positiv", "ikke-eksisterende"],
      explanation: "|r| = 0,80 er nær 1 = sterk; det negative fortegnet gjør den ikke svak.",
    },
    {
      question: "Hva betyr det at styrkegrensene (~0,3 moderat) er «konvensjoner»?",
      options: ["De er avtalte og kontekstavhengige, ikke naturlover", "De er matematisk fastsatte konstanter og gjelder helt likt overalt", "De er feil og bør ikke brukes", "De gjelder bare i fysikk"],
      explanation: "Grensene er avtaler; i psykologi kan r = 0,30 være substansielt, i fysikk svakt.",
    },
    {
      question: "Hvilken feil begår en kandidat som slutter «X fører til Y» fra en korrelasjon?",
      options: ["Feil #3 — kausal tolkning av korrelasjon", "Feil #6 — SD/SE-forveksling", "Feil #4 — kasusstudie ≠ N=1", "Feil #12 — å trekke en slutning om selve utvalget"],
      explanation: "Å hoppe fra r til årsak er den klassiske feil #3.",
    },
    {
      question: "r = −0,35 betyr",
      options: ["en moderat negativ sammenheng", "at 35 % av variasjonen forklares", "en svak sammenheng uansett kontekst", "at variablene ikke henger sammen"],
      explanation: "r er ikke prosent (det er r²); −0,35 er moderat negativ, med konvensjonsforbehold.",
    },
    {
      question: "Hva er «naturlig variasjon» i en korrelasjonsstudie?",
      options: ["Variasjon forskeren måler slik den finnes, uten å manipulere", "Variasjon som forskeren selv aktivt skaper ved å manipulere UV", "Variasjon fjernet ved randomisering", "Feilvariansen i et eksperiment"],
      explanation: "Korrelasjonsstudier bruker naturlig variasjon — derfor ingen kausal slutning.",
    },
    {
      question: "Hvorfor tillater «påført variasjon under kontroll» en kausal slutning?",
      options: ["Manipulasjon + randomisering jevner ut tredjevariabler", "Fordi r blir større", "Fordi selve utvalget dermed blir langt mer representativt", "Fordi X og Y byttes om"],
      explanation: "Randomisering fordeler tredjevariabler likt, så en sammenheng kan tolkes kausalt.",
    },
    {
      question: "Ved korrelasjon er valget av hvilken variabel som er X og hvilken Y",
      options: ["vilkårlig — r er symmetrisk og uendret", "helt bestemt av hvilken av variablene som faktisk er årsaken", "bestemt av målenivået", "det samme som i regresjon"],
      explanation: "r er symmetrisk; rollene er et fritt valg (til forskjell fra regresjon).",
    },
    {
      question: "Hva kan r ≈ 0 skjule?",
      options: ["En sterk kurvlineær (buet) sammenheng", "At selve sammenhengen mellom X og Y er kausal", "At r er regnet feil", "At utvalget er for stort"],
      explanation: "r ≈ 0 utelukker bare en *lineær* sammenheng; en omvendt U gir også r nær null.",
    },
    {
      question: "De tre mulige forklaringene på en hvilken som helst korrelasjon er",
      options: ["X→Y, Y→X, eller en tredjevariabel z påvirker begge", "kun X→Y", "problemer med reliabilitet, validitet og systematisk bias", "nominal, ordinal og intervall"],
      explanation: "En korrelasjon alene kan ikke skille mellom disse tre.",
    },
    {
      question: "En A-besvarelse tolker r i en fast firedelt mal. Hvilke fire ledd?",
      options: ["Retning, styrke m/forbehold, samvariasjon ≠ kausalitet, variasjonstype", "Middelverdi, median, modus, spredning", "Reliabilitet, validitet, valg av utvalg, og til slutt selve forskningsdesignet", "Nominal, ordinal, intervall, forhold"],
      explanation: "Den firedelte malen er kjernen i korrelasjonsoppgaven (T1).",
    },
    {
      question: "Hva skiller styrke fra retning ved tolkning av r?",
      options: ["Styrke leses av tallverdien |r|, retning av fortegnet", "De er det samme", "Styrken leses av fortegnet, mens retningen leses av tallverdien |r|", "Begge leses av r²"],
      explanation: "|r| = styrke, fortegn = retning; å blande dem er et vanlig feilgrep.",
    },
    {
      question: "r = 0,30 tilsvarer hvor mye delt varians (r²)?",
      options: ["9 %", "30 %", "3 %", "90 %"],
      explanation: "r² = 0,30² = 0,09 = 9 %. r er ikke selv en prosentandel.",
    },
    {
      question: "Hvorfor kan man ikke si at r = 0,4 er «dobbelt så sterk» som r = 0,2?",
      options: ["Fordi r bare kan rangeres; r² gir andeler som kan sammenlignes", "Fordi 0,4 er negativt", "Fordi begge er svake", "Fordi selve korrelasjonen r i praksis alltid er nøyaktig lik sin egen r²"],
      explanation: "r² = 0,16 vs. 0,04 — fire ganger så mye forklart varians, ikke dobbelt.",
    },
    {
      question: "En kandidat skriver: «r = 0,30, altså svakt, glem det.» Hva er problemet?",
      options: ["Konvensjonsgrensen er kontekstavhengig; 0,30 kan være substansielt i psykologi", "Ingenting er galt i det hele tatt — en r på 0,30 er alltid helt neglisjerbar uansett hvilket fag", "r = 0,30 er negativt", "r kan ikke være 0,30"],
      explanation: "Å avfeie et moderat r uten forbehold mister A-poenget og kan være direkte feil.",
    },
    {
      question: "Hva er retningsproblemet?",
      options: ["At kausaliteten kan gå motsatt vei (Y→X) av det man antar", "At r er negativt", "At utvalget er skjevt", "At de to variablene er målt på helt ulike målenivåer"],
      explanation: "En korrelasjon er symmetrisk og peker ikke ut hvilken variabel som påvirker den andre.",
    },
    {
      question: "Hvilket utsagn om et korrelasjonsdesign er riktig?",
      options: ["Begge variabler måles uten manipulasjon; det gir samvariasjon, ikke kausalitet", "Den ene variabelen manipuleres, samtidig som deltakerne randomiseres til grupper", "Det gir alltid kausal kunnskap", "r kan ikke regnes i et korrelasjonsdesign"],
      explanation: "Korrelasjonsdesignet måler; eksperimentet manipulerer og randomiserer.",
    },
    {
      question: "Hva betyr det at r er «enhetsløst»?",
      options: ["r avhenger ikke av skalaene på X og Y og kan sammenlignes på tvers av mål", "Korrelasjonen r har alltid selve enheten prosent fast knyttet til tallverdien sin", "r måles i samme enhet som Y", "r er alltid mellom 0 og 100"],
      explanation: "Enhetsløsheten lar korrelasjoner sammenlignes selv når variablene har helt ulike skalaer.",
    },
    {
      question: "En studie finner r = 0,55 mellom selvvalgt kursdeltakelse og velvære. Hvorfor holder ikke en kausal slutning?",
      options: ["Fordi det er samvariasjon på naturlig, selvvalgt variasjon — tredjevariabler er ikke utelukket", "Fordi r er for lavt", "Fordi r er negativt", "Utelukkende fordi selve korrelasjonen r i seg selv allerede er en ferdig prosentandel av variasjonen"],
      explanation: "Selvvalgt deltakelse betyr mulige konfundere; størrelsen på r endrer ikke dette.",
    },
    {
      question: "Hva er den mest presise beskrivelsen av hva en korrelasjon forteller?",
      options: ["At to variabler samvarierer systematisk — ikke hvorfor", "At X forårsaker Y", "At Y forårsaker X", "At de to variablene i praksis er helt identiske med hverandre"],
      explanation: "Korrelasjon = samvariasjon (mønster), ikke forklaring (årsak).",
    },
  ],
  'psy1010-5-2': [
    {
      question: "Hvordan tegnes en konfunder?",
      options: ["z → X og z → Y (z påvirker begge)", "X → z → Y", "z endrer selve styrken på sammenhengen X → Y", "Y → X"],
      explanation: "Konfunderen påvirker både X og Y og skaper en (delvis) falsk sammenheng.",
    },
    {
      question: "Hvordan tegnes en mediator?",
      options: ["X → z → Y (z er mekanismen)", "z → X og z → Y", "z endrer styrken på hele sammenhengen X → Y", "X → Y uten z"],
      explanation: "Mediatoren ligger mellom X og Y — mekanismen X virker gjennom.",
    },
    {
      question: "Hva kjennetegner en moderator?",
      options: ["z endrer styrken (eller retningen) på X → Y", "z påvirker både X og Y", "z ligger mellom X og Y", "z gjør hele sammenhengen mellom X og Y helt spuriøs"],
      explanation: "Moderatoren svarer «for hvem / når gjelder sammenhengen».",
    },
    {
      question: "Samme z: hva skiller en konfunder fra en mediator?",
      options: ["Konfunder kommer før X (falsk sammenheng); mediator kommer etter X (ekte mekanisme)", "Ingenting — de er synonymer", "En konfunder gjelder utelukkende i rene randomiserte eksperimenter med kontrollgruppe", "Mediator gjør sammenhengen falsk"],
      explanation: "Test: kommer z før X (konfunder, kontroller bort) eller etter (mediator, ikke bort).",
    },
    {
      question: "Hva er en spuriøs sammenheng?",
      options: ["En korrelasjon uten ekte, direkte forbindelse — drevet av konfunder eller tilfeldighet", "En sterk kausal sammenheng", "En sammenheng der r = 1", "En helt spesiell type korrelasjon som alltid viser seg å være sterkt og entydig negativ"],
      explanation: "Spuriøse sammenhenger er tilsynelatende; ofte forklart av en tredjevariabel.",
    },
    {
      question: "Is-salg og drukningsulykker korrelerer. Hva er tredjevariabelen?",
      options: ["Varmt vær (som driver begge)", "Isen selv", "Antallet livreddere som er på vakt på stranden", "Tilfeldig støy"],
      explanation: "Varmt vær gir både mer is-salg og flere badende (og dermed ulykker) — en konfunder.",
    },
    {
      question: "De tre kanoniske grunnene til at korrelasjon ikke er kausalitet er",
      options: ["retningsproblemet, tredjevariabler og spuriøse sammenhenger", "problemer med reliabilitet, validitet og systematisk skjevhet", "nominal, ordinal og intervall", "utvalg, måling og design"],
      explanation: "Å nevne alle tre (ikke bare «en tredjevariabel») løfter svaret.",
    },
    {
      question: "Hva bør man gjøre med en konfunder z?",
      options: ["Kontrollere for den (holde konstant / ta inn i multippel regresjon)", "Forsterke den", "Rett og slett ignorere den helt, siden den jo egentlig er selve mekanismen", "Bytte den med X"],
      explanation: "Kontroll tester om sammenhengen består når z holdes fast.",
    },
    {
      question: "Hvorfor skal man IKKE kontrollere bort en mediator?",
      options: ["Fordi mediatoren er selve mekanismen — da forsvinner effekten man studerer", "Fordi den er falsk", "Fordi den ikke kan måles", "Fordi en mediator i virkeligheten nesten alltid samtidig også er en skjult konfunder"],
      explanation: "Mediatoren forklarer en ekte sammenheng; å kontrollere den bort fjerner effekten.",
    },
    {
      question: "Hvilken feil begår en kandidat som bare skriver «det kan være en tredjevariabel» uten å navngi noen?",
      options: ["Oppramsing uten case-tilpasning — nærmer seg C-tak", "Feil #6 (SD/SE)", "Feil #4 (kasus/N=1)", "Ingen feil i det hele tatt — en slik generell påpekning er alltid nok"],
      explanation: "A-kravet er å case-tilpasse modellene til scenariets faktiske variabler.",
    },
    {
      question: "En rivaliserende hypotese er",
      options: ["en alternativ forklaring dataene ikke kan utelukke", "en spesiell hypotese som alltid viser seg å være sann uansett", "det samme som nullhypotesen", "en feil i utvalget"],
      explanation: "I naturlige settinger finnes alltid rivaliserende hypoteser (konfunder, motsatt retning).",
    },
    {
      question: "Hva løser et longitudinelt design (måling over tid)?",
      options: ["Fastslår tidsrekkefølge — X målt før Y utelukker Y→X", "Fjerner alle konfundere", "Gjør r større", "Erstatter fullstendig behovet for randomisering i studien"],
      explanation: "Tidsrekkefølge er et kausalkrav; longitudinelle data hjelper, men fjerner ikke konfundere.",
    },
    {
      question: "«Byer med flere kirker har flere barer.» Hva forklarer dette best?",
      options: ["En konfunder: folketallet driver begge", "Kirker forårsaker barer", "Barer forårsaker kirker", "Bare ren tilfeldighet helt uten noen forklaring"],
      explanation: "Store byer har mer av alt — folketall er en klassisk konfunder.",
    },
    {
      question: "Hva er en ren tilfeldig spuriøs sammenheng?",
      options: ["En korrelasjon uten noen felles årsak, funnet ved å lete gjennom mange variabler", "En helt spesiell type sammenheng som er drevet av en enkelt bakenforliggende konfunder", "En sterk kausal sammenheng", "En mediert sammenheng"],
      explanation: "I store datamengder finner man alltid meningsløse samsvar — uten felles z.",
    },
    {
      question: "«Strengere skjermregler ↔ bedre karakterer.» Foreldreoppfølging som z passer best som",
      options: ["konfunder (påvirker både regler og karakterer)", "mediator", "moderator", "en ren kriterievariabel i analysen"],
      explanation: "Oppfølging ligger før reglene og påvirker begge — en konfunder.",
    },
    {
      question: "«Trening → bedre søvn → bedre humør.» Søvn er her en",
      options: ["mediator", "konfunder", "moderator", "spuriøs variabel"],
      explanation: "Søvn ligger mellom trening og humør — mekanismen trening virker gjennom.",
    },
    {
      question: "«Lekselengde ↔ karakter er sterk for yngre, svak for eldre.» Alder er her en",
      options: ["moderator", "mediator", "konfunder", "kriterievariabel"],
      explanation: "Alder endrer styrken på sammenhengen — «for hvem gjelder den».",
    },
    {
      question: "Hvorfor kan en tverrsnittskorrelasjon ikke skille X→Y fra Y→X?",
      options: ["Den måler begge variabler samtidig, uten tidsrekkefølge eller randomisering", "Fordi r alltid er negativt", "Fordi utvalget er for lite", "Utelukkende fordi en tverrsnittskorrelasjon nesten alltid bygger på rene ordinaldata"],
      explanation: "Uten tidsrekkefølge og randomisering er alle rivaliserende hypoteser forenlige med samme r.",
    },
    {
      question: "Hva må til for at X skal kunne forårsake Y (tidskravet)?",
      options: ["X må komme før Y i tid", "X og Y må måles samtidig", "r må være over 0,5", "X må være dikotom"],
      explanation: "Tidsrekkefølge er et kausalkrav; tverrsnittsdata oppfyller det ikke.",
    },
    {
      question: "En kollega vil «kontrollere bort» en variabel som viser seg å være mekanismen (mediatoren). Hva er problemet?",
      options: ["Da fjerner man nettopp effekten man ønsker å forklare", "Ingenting — det er alltid riktig", "Mediatoren er en konfunder", "Man kan i praksis aldri kontrollere statistisk for noe som helst"],
      explanation: "Mediatorer skal forklares, ikke kontrolleres bort som konfundere.",
    },
  ],
  'psy1010-5-3': [
    {
      question: "I regresjonsligningen Ŷ = a + bX, hva er a?",
      options: ["Interceptet: predikert Y når X = 0", "Endringen i Y per enhet X", "Selve korrelasjonen r mellom variablene X og Y", "Residualen"],
      explanation: "a er linjens utgangspunkt (Y-akse-kryss), ikke «effekten av X».",
    },
    {
      question: "Hva er b i Ŷ = a + bX?",
      options: ["Regresjonsvekten: endring i predikert Y per én enhets økning i X", "Predikert Y når X = 0", "Selve andelen av den totale variansen i Y som forklares av variabelen X", "Den observerte Y-verdien"],
      explanation: "b er stigningstallet; fortegnet følger r.",
    },
    {
      question: "Hva er Ŷ («Y-hatt»)?",
      options: ["Den predikerte verdien av Y, lest av linjen", "Den faktisk observerte og målte verdien av Y", "Standardavviket til Y", "Korrelasjonen"],
      explanation: "Ŷ er modellens gjett; Y er den faktiske verdien.",
    },
    {
      question: "Med Ŷ = 20 + 2,5X, hva er predikert Y for X = 12?",
      options: ["50", "30", "44 (a pluss 2X)", "62"],
      explanation: "Ŷ = 20 + 2,5·12 = 20 + 30 = 50.",
    },
    {
      question: "Hva er r² tolket som?",
      options: ["Andelen av variasjonen i Y som deles med (forklares av) X", "Rett og slett fortegnet til selve korrelasjonskoeffisienten r", "Det samme som r", "Regresjonsvekten b"],
      explanation: "r = 0,30 → r² = 0,09 = 9 % delt varians; resten skyldes annet.",
    },
    {
      question: "r = 0,50. Hvor mye av variasjonen forklares?",
      options: ["25 %", "50 % (selve r-verdien)", "70 %", "5 %"],
      explanation: "r² = 0,50² = 0,25 = 25 %. r er ikke selv prosenten.",
    },
    {
      question: "Hvorfor er r² nyttigere enn r for å sammenligne styrke?",
      options: ["r kan bare rangeres; r² gir andeler som kan sammenlignes direkte", "r² er alltid negativt", "Fordi r² i motsetning til r fjerner problemet med kausalitet helt", "r² er lettere å regne"],
      explanation: "r = 0,4 gir r² = 0,16 mot 0,04 for 0,2 — fire ganger, ikke dobbelt.",
    },
    {
      question: "Hva er en residual?",
      options: ["Y − Ŷ: avstanden fra en faktisk verdi til linjen", "a + bX", "Nøyaktig det samme som regresjonsvekten b", "Korrelasjonen"],
      explanation: "Residualen er modellens bomavstand for den enkelte personen.",
    },
    {
      question: "Hva minimerer minste kvadraters metode?",
      options: ["Summen av de kvadrerte residualene", "Selve summen av alle X-verdiene i datasettet", "Korrelasjonen", "Antall punkter"],
      explanation: "Linjen legges der de kvadrerte prediksjonsfeilene er minst mulig totalt.",
    },
    {
      question: "Hvilken feil begår en kandidat som tolker a som «effekten av X»?",
      options: ["a er predikert Y når X = 0, ikke en effekt — effekten er b", "Ingen feil", "a er alltid null", "Konstanten a er egentlig det samme som residualen i modellen"],
      explanation: "a er utgangspunktet; b er endringen per X.",
    },
    {
      question: "Hva er ekstrapolering?",
      options: ["Å predikere for X-verdier utenfor det observerte området", "Å regne r²", "Å plotte punktene", "Å velge selve minste kvadraters metode når man tegner linjen"],
      explanation: "Utenfor dataene kan sammenhengen bryte sammen; prediksjonen blir upålitelig.",
    },
    {
      question: "Med Ŷ = 100 − 4X, hva er predikert Y for X = 3?",
      options: ["88", "112", "96", "12"],
      explanation: "Ŷ = 100 − 4·3 = 100 − 12 = 88. Husk det negative fortegnet.",
    },
    {
      question: "En person har Ŷ = 50 og faktisk Y = 47. Residualen er",
      options: ["−3 (personen ligger under linjen)", "+3 (personen ligger over linjen)", "0", "50"],
      explanation: "Residual = Y − Ŷ = 47 − 50 = −3; negativ = under linjen.",
    },
    {
      question: "Hva legger regresjon til, sammenlignet med korrelasjon?",
      options: ["En prediksjonslinje — hvor mye Y endrer seg per X", "Kausalitet", "Et helt nytt signifikansnivå for testen", "Et nytt målenivå"],
      explanation: "«Videreføring av korrelasjon»: samme sammenheng, nå med prediksjon — men ikke kausalitet.",
    },
    {
      question: "Hvorfor er prediktor/kriterium-rollene IKKE vilkårlige i regresjon?",
      options: ["Minste kvadrater minimerer feilen i Y; bytter man om, får man en annen linje", "Fordi r er symmetrisk", "Fordi X alltid er årsak", "De er faktisk helt vilkårlige å velge, akkurat som rollene ved en vanlig korrelasjon"],
      explanation: "Til forskjell fra korrelasjon (symmetrisk r) er regresjonen asymmetrisk.",
    },
    {
      question: "En kandidat sier «r = 0,50, altså forklarer testen halvparten». Hva er feil?",
      options: ["Den forklarte andelen er r² = 0,25 = 25 %, ikke r", "Ingenting", "r² = 0,50", "En korrelasjon r kan aldri anta verdien 0,50"],
      explanation: "Å lese r som prosent dobler den forklarte variansen.",
    },
    {
      question: "Fortegnet til b følger",
      options: ["fortegnet til r", "b er alltid positivt uansett fortegnet til r", "fortegnet til a", "målenivået"],
      explanation: "Positiv korrelasjon gir positiv b; negativ gir negativ b.",
    },
    {
      question: "Hva forteller store residualer om modellen?",
      options: ["At linjen forklarer lite (lav r²)", "At r² er høy", "At b er null", "At selve prediksjonen fra modellen er helt perfekt"],
      explanation: "Store residualer = dårlig tilpasning; små = god tilpasning (høy r²).",
    },
    {
      question: "Hvilken feil begår en kandidat som skriver bare sluttsvaret på en Ŷ-prediksjon?",
      options: ["Feil #13 — usynlig utregning", "Feil #3 — kausal tolkning", "Feil #6 — SD/SE", "Feil #12 — å forveksle populasjon og utvalg"],
      explanation: "Uten mellomregning (a + b·X) kan ikke sensor gi «riktig metode»-uttelling.",
    },
    {
      question: "Betyr b = 2,5 (i studietimer → skår) at én ekstra time FORÅRSAKER 2,5 poeng?",
      options: ["Nei — det er predikert samvariasjon på korrelasjonsdata, ikke en kausal effekt", "Ja, alltid", "Ja, hvis r > 0,5", "Nei, fordi selve regresjonsvekten b i praksis alltid bare er et rent tilfeldig tall"],
      explanation: "Regresjon predikerer uten å gi kausalitet (feil #3 lurer).",
    },
  ],
  'psy1010-5-4': [
    {
      question: "Hvilken koeffisient brukes for to ordinale (rangerte) variabler?",
      options: ["Spearmans rho", "Pearsons r", "Phi", "Punkt-biserial"],
      explanation: "Spearman regner korrelasjonen på rangtallene — riktig for ordinaldata.",
    },
    {
      question: "Hvilken koeffisient brukes for én dikotom og én kontinuerlig variabel?",
      options: ["Punkt-biserial", "Phi", "Spearmans rho", "Pearsons r"],
      explanation: "Punkt-biserial måler hvor mye den kontinuerlige skiller seg mellom to kategorier.",
    },
    {
      question: "Hvilken koeffisient brukes for to dikotome variabler?",
      options: ["Phi (φ)", "Pearsons r", "Spearmans rho", "Punkt-biserial"],
      explanation: "Phi måler sammenhengen i en 2×2-tabell mellom to ja/nei-variabler.",
    },
    {
      question: "Hva styrer valget av korrelasjonskoeffisient?",
      options: ["Målenivåene på de to variablene", "Størrelsen på utvalget", "Fortegnet til r", "Hvilket fag studien er i"],
      explanation: "To intervall → Pearson; to ordinale → Spearman; osv. Begrunnelsen (målenivå) teller.",
    },
    {
      question: "Hva forutsetter Pearsons r?",
      options: ["Intervall/forhold-data på begge variabler og en lineær sammenheng", "Ordinaldata", "At begge variabler er dikotome", "At r er positiv"],
      explanation: "Bryter forutsetningene, trengs Spearman, punkt-biserial eller phi.",
    },
    {
      question: "Hva er en kurvlineær sammenheng?",
      options: ["En buet (ikke-lineær) sammenheng, f.eks. omvendt U", "En perfekt rett linje", "En sammenheng der r = 1", "En dikotom variabel"],
      explanation: "Aktivering–prestasjon (opp så ned) er klassisk; Pearsons r fanger den dårlig.",
    },
    {
      question: "Hvorfor kan r ≈ 0 «lyve»?",
      options: ["Fordi r bare fanger lineære sammenhenger — en sterk bue gir også r nær 0", "Fordi r alltid er feil ved 0", "Fordi r ≈ 0 betyr perfekt sammenheng", "Fordi ordinaldata gir r = 0"],
      explanation: "En symmetrisk omvendt U gir r nær null tross sterk sammenheng. Sjekk spredningsdiagram.",
    },
    {
      question: "Hva er statistisk kontroll?",
      options: ["Å ta en tredjevariabel inn i en multippel regresjon og se om X–Y-sammenhengen består", "Å randomisere deltakere", "Å regne standardavviket", "Å kvadrere r"],
      explanation: "Statistisk kontroll tester om sammenhengen holder når z holdes konstant.",
    },
    {
      question: "Hva kan statistisk kontroll IKKE fjerne?",
      options: ["Umålte/ukjente tredjevariabler", "Målte tredjevariabler", "Selve regresjonslinjen", "Korrelasjonen"],
      explanation: "Bare randomisering jevner ut *alle* konfundere, også de umålte.",
    },
    {
      question: "Hva skiller eksperimentell fra statistisk kontroll?",
      options: ["Randomisering jevner ut alle tredjevariabler; statistisk kontroll bare de målte", "Ingenting", "Statistisk kontroll er sterkest", "Eksperimentell kontroll krever ordinaldata"],
      explanation: "Dette er hvorfor bare eksperimentet gir full kausal kontroll.",
    },
    {
      question: "Hva løser et longitudinelt design på vei mot kausalitet?",
      options: ["Fastslår tidsrekkefølge (X målt før Y utelukker Y→X)", "Fjerner alle konfundere", "Gjør r større", "Erstatter Pearson med Spearman"],
      explanation: "Tidsrekkefølge er et kausalkrav; longitudinelle data hjelper delvis.",
    },
    {
      question: "En forsker bruker Pearsons r på rangeringsdata. Hva er problemet?",
      options: ["Rangdata (ordinal) krever Spearmans rho, ikke Pearson", "Ingenting", "Rangdata krever phi", "r blir alltid negativt"],
      explanation: "Å velge koeffisient uten å sjekke målenivå mister begrunnelsespoenget.",
    },
    {
      question: "Rangert trivsel × rangert innsats — hvilken koeffisient?",
      options: ["Spearmans rho", "Punkt-biserial", "Phi", "Pearsons r"],
      explanation: "Begge variabler er ordinale (rangeringer) → Spearman.",
    },
    {
      question: "Øverst på stigen mot kausal kontroll (uten RCT), hva gjenstår som forbehold?",
      options: ["Umålte konfundere kan fortsatt drive sammenhengen", "Ingenting — konklusjonen er sikker", "At r er for lav", "At utvalget er ordinalt"],
      explanation: "Uten randomisering må en kausal konklusjon forbeholdes; feil #3 lurer.",
    },
    {
      question: "En kandidat skriver «vi kontrollerte statistisk, altså er sammenhengen kausal». Hva er feil?",
      options: ["Statistisk kontroll fjerner bare målte konfundere — ikke umålte", "Ingenting", "Statistisk kontroll er umulig", "Man kan aldri kontrollere for noe"],
      explanation: "Å oversælge statistisk kontroll som kausalitet ignorerer umålte tredjevariabler.",
    },
  ],
  'psy1010-6-1': [
    {
      question: "Hva søker en kvalitativ tilnærming først og fremst?",
      options: ["Mening og dybde — hvordan noe oppleves eller foregår, uttrykt i beskrivelser", "Utbredelse — hvor mange og hvor ofte, uttrykt i tall", "Statistisk signifikans mellom to grupper", "Størst mulig representativt utvalg"],
      explanation: "Kvalitativ metode søker mening/dybde i ord; utbredelse i tall er kvantitativ metodes domene.",
    },
    {
      question: "Hvilket spørreord er typisk for et kvalitativt forskningsspørsmål?",
      options: ["Hvordan", "Hvor mange", "I hvilken grad", "Hvor ofte"],
      explanation: "Åpne spørreord som «hvordan», «hva» og «hvilke» inviterer utfyllende beskrivelser. «Hvor mange/ofte» og «i hvilken grad» peker mot tall (kvantitativt).",
    },
    {
      question: "Hvilket av disse er et gyldig kvalitativt forskningsspørsmål?",
      options: ["«Hvordan opplever studenter at trening virker inn på studiehverdagen?»", "«Reduserer trening angst hos studenter?»", "«Hvor mange studenter trener minst tre ganger i uka?»", "«Er trente studenter mindre stresset enn utrente?»"],
      explanation: "Bare det første har åpent spørreord uten hypotese og uten ja/nei-form. De andre er hypoteseformede eller tellende (kvantitative) — gode spørsmål, men feil sjanger.",
    },
    {
      question: "Hva er de tre kjennetegnene ved et kvalitativt forskningsspørsmål?",
      options: ["Åpent spørreord, ikke en hypotese, ikke ja/nei-besvarbart", "Kort, presist og målbart", "Falsifiserbart, deduktivt og med minst to variabler", "Nytt, gjennomførbart og publiserbart"],
      explanation: "Kjennetegnene er åpent spørreord (hvordan/hva/hvilke), ingen hypotese og ikke ja/nei. «Falsifiserbart/deduktivt/to variabler» er derimot krav til en hypotese.",
    },
    {
      question: "Hva er den eneste stryk-fellen i den kvalitative eksamensoppgaven (feil #10)?",
      options: ["Å levere et hypoteseformet eller ja/nei-spørsmål der det bes om et kvalitativt", "Å bruke for få ord i svaret", "Å nevne spørreskjema i sammenligningen", "Å velge et upopulært tema"],
      explanation: "Feil #10 er å svare med en hypotese/et ja-nei-spørsmål når oppgaven ber om et åpent kvalitativt forskningsspørsmål — eksplisitt i sensorveiledningen.",
    },
    {
      question: "Hvorfor er «Fører sosiale medier til ensomhet?» ikke et kvalitativt forskningsspørsmål?",
      options: ["Det er hypoteseformet og kan besvares med ja/nei", "Det handler om sosiale medier", "Det er for kort", "Det inneholder ingen tall"],
      explanation: "«Fører X til Y?» påstår en sammenheng (hypotese) og er ja/nei-besvarbart — den kvantitative, testende formen, ikke den kvalitative.",
    },
    {
      question: "Hvilken omskriving gjør «Reduserer meditasjon eksamensstress?» til et kvalitativt spørsmål?",
      options: ["«Hvordan erfarer studenter at meditasjon virker inn på eksamensstresset deres?»", "«Hvor mye reduserer meditasjon eksamensstress?»", "«Er meditasjon effektivt mot eksamensstress?»", "«Hvor stor andel av studenter mediterer i eksamensperioden?»"],
      explanation: "Omskrivingen må bytte til åpent spørreord og fjerne hypotesen. De tre andre er fortsatt tellende eller ja/nei-baserte.",
    },
    {
      question: "Når passer en kvalitativ tilnærming best?",
      options: ["Når feltet er lite utforsket og du vil forstå en opplevelse eller prosess innenfra", "Når du vil telle hvor utbredt et fenomen er", "Når du vil teste en hypotese statistisk", "Når du trenger et stort, representativt utvalg for å generalisere"],
      explanation: "Kvalitativt passer for mening/opplevelse og lite kartlagte felt. Utbredelse, hypotesetesting og generalisering peker mot kvantitativ metode.",
    },
    {
      question: "Hva er kvalitativ metodes særlige gevinst ved åpne spørsmål?",
      options: ["Forskeren kan lære noe hun ikke kunne forutse — det uventede", "Raskere datainnsamling fra mange deltakere", "Enklere statistisk analyse", "Høyere sammenlignbarhet mellom svarene"],
      explanation: "Åpne spørsmål lar det uventede komme frem — erfaringer forskeren ikke hadde tenkt å spørre om. Ferdige svaralternativer ville skjult dette.",
    },
    {
      question: "Hvilken påstand om forholdet mellom kvalitativ og kvantitativ metode er riktig?",
      options: ["Ingen er «bedre» — hvilken som passer avgjøres av forskningsspørsmålet", "Kvalitativ metode er mer vitenskapelig fordi den går i dybden", "Kvantitativ metode er alltid å foretrekke fordi den gir tall", "De kan aldri kombineres i samme prosjekt"],
      explanation: "Metoden følger av spørsmålet. Begge tradisjoner er fullverdige, og mange prosjekter kombinerer dem — å rangere den ene over den andre er en karikatur.",
    },
    {
      question: "En student leverer «Hva slags strategier bruker studenter for å håndtere eksamensstress?». Er dette gyldig?",
      options: ["Ja — åpent spørreord, ingen hypotese, ikke ja/nei", "Nei — det er hypoteseformet", "Nei — det kan besvares med ja/nei", "Nei — det mangler et spørreord"],
      explanation: "«Hva slags strategier …» er et åpent spørreord, spørsmålet påstår ingenting og kan ikke besvares med ja/nei. Det er gyldig kvalitativt.",
    },
    {
      question: "Hva slags data gir en kvalitativ tilnærming typisk?",
      options: ["Ord og beskrivelser (intervjuutskrifter, observasjonsnotater, dagbøker)", "Tall og standardiserte skårer", "Prosentandeler og korrelasjoner", "Frekvenstabeller fra store utvalg"],
      explanation: "Kvalitative data er ord og beskrivelser; tall, prosenter og frekvenstabeller er kvantitative data.",
    },
    {
      question: "Hvilken mal gir alltid et gyldig kvalitativt forskningsspørsmål?",
      options: ["«Hvordan opplever [gruppe] [fenomen]?»", "«Fører [X] til [Y]?»", "«Er det en sammenheng mellom [X] og [Y]?»", "«Hvor mange [gruppe] gjør [X]?»"],
      explanation: "«Hvordan opplever [gruppe] [fenomen]?» treffer alltid de tre kjennetegnene. De andre malene er hypoteseformede eller tellende.",
    },
    {
      question: "En oppgave ber om ett kvalitativt forskningsspørsmål. Hva bør du IKKE gjøre?",
      options: ["Utbrodere med alt du kan om kvalitativ metode", "Bruke et åpent spørreord", "Sjekke at spørsmålet ikke er hypoteseformet", "Holde svaret kort og presist"],
      explanation: "Utbrodering gir null ekstra og stjeler tid (relevansfilteret, kap. 0.2). Kravet er lavt — lever ett gyldig spørsmål og gå videre.",
    },
    {
      question: "Hvorfor er «Hvor stor andel av nye foreldre opplever søvnmangel?» ikke et kvalitativt spørsmål?",
      options: ["Det spør om utbredelse i tall (en andel) — en kvantitativ form", "Det er hypoteseformet", "Det kan besvares med ja/nei", "Det mangler et tema"],
      explanation: "«Hvor stor andel …» ber om et tall/en utbredelse. Det er ikke hypoteseformet eller ja/nei, men det er kvantitativt — feil datatype for et kvalitativt spørsmål.",
    },
  ],
  'psy1010-6-2': [
    {
      question: "Hvordan beskriver Kvale & Brinkmann det kvalitative forskningsintervjuet?",
      options: ["Som en samtale med struktur og formål", "Som en ustrukturert, fri prat", "Som et muntlig spørreskjema", "Som et avhør med fastlagte spørsmål"],
      explanation: "Kjernedefinisjonen er «samtale med struktur og formål» — verken formålsløs prat eller lukket spørreskjema.",
    },
    {
      question: "Hva menes med intervjupersonens «livsverden»?",
      options: ["Hverdagen slik den erfares og oppleves fra innsiden, før forskerens kategorier", "Livshistorien fortalt i kronologisk rekkefølge", "De objektive, målbare fakta om personens liv", "Forskerens teoretiske tolkning av personen"],
      explanation: "Livsverden er den opplevde hverdagen sett innenfra. Intervjuet henter beskrivelser av den for å fortolke meningen.",
    },
    {
      question: "Hva er intervjuet ute etter å gjøre med det intervjupersonen forteller?",
      options: ["Fortolke meningen — hva fenomenene betyr for personen", "Telle hvor ofte ulike svar forekommer", "Måle styrken på en sammenheng", "Rangere svarene på en skala"],
      explanation: "Intervjuet søker mening (fortolkning av hva noe betyr). Telling og måling hører til den kvantitative tradisjonen.",
    },
    {
      question: "Hva er gevinsten ved intervjuets åpne format?",
      options: ["Forskeren kan lære noe hun ikke kunne forutse — det uventede", "Dataene blir lettere å telle og sammenligne", "Datainnsamlingen blir raskere", "Utvalget kan gjøres større"],
      explanation: "Åpne spørsmål uten ferdige svarkategorier lar det uventede komme frem. Sammenlignbarhet og store utvalg er derimot spørreskjemaets styrke.",
    },
    {
      question: "Hva utgjør selve dataene i et kvalitativt forskningsintervju?",
      options: ["Intervjupersonens subjektive erfaring, formidlet gjennom språket", "Antall ganger hvert tema nevnes", "Skårer på en holdningsskala", "Forskerens forhåndsdefinerte kategorier"],
      explanation: "Den subjektive erfaringen, uttrykt i språk, er datagrunnlaget — ikke en feilkilde. Telling og skalaer hører til kvantitativ metode.",
    },
    {
      question: "Hva er galt med å beskrive det kvalitative intervjuet som «ustrukturert prat»?",
      options: ["Det underspiller at intervjuet har både struktur og formål", "Det overdriver hvor lukket intervjuet er", "Det gjør intervjuet for likt et spørreskjema", "Ingenting — det er en presis beskrivelse"],
      explanation: "Intervjuet HAR struktur og formål. «Ustrukturert prat» er en klassisk felle som mister Kvale & Brinkmanns kjernepoeng.",
    },
    {
      question: "Hva gir et spørreskjema som det kvalitative intervjuet ikke egner seg til?",
      options: ["Utbredelse i et stort, sammenlignbart utvalg (standardiserte tall)", "Dybde og mening i personens egne ord", "Det uventede som forskeren ikke forutså", "Opplevelsen av et fenomen innenfra"],
      explanation: "Spørreskjemaet gir standardiserte, sammenlignbare tall og utbredelse. De tre andre er nettopp intervjuets styrker.",
    },
    {
      question: "En forskningsinteresse gjelder «hvordan pårørende opplever hverdagen». Hvilken metode passer best?",
      options: ["Kvalitativt intervju — spørsmålet handler om mening og opplevelse", "Spørreskjema — det gir standardiserte tall", "Eksperiment med kontrollgruppe", "Registerstudie av store datamengder"],
      explanation: "«Hvordan oppleves …» handler om mening/opplevelse, som intervjuet fanger. Et spørreskjema ville presset opplevelsen inn i ferdige kategorier.",
    },
    {
      question: "Hva ville en forsker tape ved å bytte fra intervju til et lukket spørreskjema?",
      options: ["Dybden, meningen og det uventede — bare det forskeren har tenkt på fanges", "Muligheten til å måle utbredelse", "Muligheten til å nå mange deltakere effektivt", "Sammenlignbarheten mellom svarene"],
      explanation: "Lukkede alternativer fanger bare det forskeren har tenkt på og mister det uventede. Utbredelse, mange deltakere og sammenlignbarhet er derimot skjemaets styrker.",
    },
    {
      question: "Hvilken struktureringsgrad har det kvalitative forskningsintervjuet typisk?",
      options: ["Semistrukturert — en intervjuguide med temaer, men rom for oppfølging", "Fullt strukturert — faste spørsmål i fast rekkefølge", "Helt uten noen form for struktur", "Strukturert som et lukket spørreskjema"],
      explanation: "Forskningsintervjuet er typisk semistrukturert: nok struktur til å holde formålet, nok åpenhet til å fange det uventede.",
    },
    {
      question: "Hvorfor skal du ikke svare med intervjuets faghistorie på eksamen?",
      options: ["Faghistorien er eksplisitt ikke forventet — den gir null (relevansfilteret)", "Faghistorien er feilaktig", "Faghistorien er ikke på pensum i det hele tatt", "Faghistorien trekker aktivt ned karakteren"],
      explanation: "Pensumkapitlets faghistorie er eksplisitt ikke forventet; å gjengi den gir ingen uttelling og stjeler tid (relevansfilteret, kap. 0.2).",
    },
    {
      question: "En «kvalitativ» intervjuguide består bare av ja/nei-spørsmål. Hva er problemet?",
      options: ["Da er det i praksis et muntlig spørreskjema, ikke et kvalitativt intervju", "Da blir intervjuet for langt", "Da mangler intervjuet et formål", "Ingenting — ja/nei-spørsmål er greit i intervjuer"],
      explanation: "Det åpne formatet er det som gjør intervjuet kvalitativt. Bare lukkede ja/nei-spørsmål gjør det til et muntlig spørreskjema (slektning av feil #10).",
    },
    {
      question: "Hvilket par beskriver kontrasten intervju vs. spørreskjema riktig?",
      options: ["Intervju: dybde/mening, få personer · Spørreskjema: utbredelse/tall, mange personer", "Intervju: tall, mange personer · Spørreskjema: mening, få personer", "Intervju: lukkede svar · Spørreskjema: åpne svar", "Intervju: høy sammenlignbarhet · Spørreskjema: lav sammenlignbarhet"],
      explanation: "Intervjuet gir dybde/mening fra få personer (lav sammenlignbarhet); spørreskjemaet gir utbredelse i tall fra mange (høy sammenlignbarhet).",
    },
    {
      question: "Hva er A-markøren når du sammenligner intervju og spørreskjema?",
      options: ["Å vise at ingen er «bedre» — metoden følger av forskningsspørsmålet", "Å slå fast at intervjuet alltid gir rikere data", "Å påpeke at spørreskjemaet er overfladisk", "Å konkludere at intervjuet er mer vitenskapelig"],
      explanation: "A-svaret framstiller begge metoder rettferdig og lar spørsmålet avgjøre. Å karikere spørreskjemaet som «overfladisk» trekker ned.",
    },
    {
      question: "Hvordan skiller forskningsintervjuet seg fra et avhør/forhør?",
      options: ["Det har kunnskapsformål, søker personens egen forståelse og hviler på frivillighet", "Det har fastere spørsmål og strengere rekkefølge", "Det tillater ikke oppfølgingsspørsmål", "Det dokumenteres alltid ordrett"],
      explanation: "Forskningsintervjuet har et kunnskapsformål, søker personens forståelse og bygger på frivillighet — til forskjell fra forhørets skjeve maktforhold og faktaavdekking (pluss-stoff).",
    },
  ],
  'psy1010-7-1': [
    {
      question: "Hva innebærer informert samtykke?",
      options: ["At deltakeren sier ja etter å ha fått vite hva studien innebærer, og gjør det frivillig", "At forskeren informerer offentligheten om resultatene etter studien", "At deltakeren skriver under uten å få vite formålet", "At en etikkomité godkjenner studien på deltakerens vegne"],
      explanation: "Informert samtykke = ja *etter* informasjon, gitt frivillig. Det er både kunnskaps- og frivillighetskravet.",
    },
    {
      question: "Hva er rett til å trekke seg?",
      options: ["At deltakeren kan avslutte når som helst, uten begrunnelse og uten negative konsekvenser", "At deltakeren kan trekke seg bare før studien starter", "At forskeren kan utelukke deltakere som svarer 'feil'", "At deltakeren må fullføre når hun først har begynt"],
      explanation: "Trekk-retten gjelder hele veien, også etter start, uten at man må begrunne det — det gjør frivilligheten reell.",
    },
    {
      question: "Hva er forskjellen på anonymitet og konfidensialitet?",
      options: ["Ved anonymitet finnes ingen kobling til person; ved konfidensialitet kan forskeren koble, men holder det fortrolig", "De betyr det samme", "Anonymitet gjelder bare kvalitative studier", "Konfidensialitet betyr at ingen får se dataene, heller ikke forskeren"],
      explanation: "Anonymitet = ingen kan koble svar til person. Konfidensialitet = forskeren *kan* koble, men holder koblingen fortrolig.",
    },
    {
      question: "Når er deception (villeding) forsvarlig?",
      options: ["Bare når den er nødvendig, belastningen er liten, og den følges av debriefing", "Alltid, så lenge studien er viktig", "Aldri — deception er forbudt i all forskning", "Når deltakerne får betalt for deltakelsen"],
      explanation: "Deception er et strengt regulert unntak: nødvendighet, minimering og obligatorisk debriefing.",
    },
    {
      question: "Hva er debriefing?",
      options: ["Samtalen etter deltakelsen der forskeren forklarer hva studien egentlig gjaldt og oppklarer eventuell deception", "Informasjonen deltakeren får før studien starter", "En sjekk av om utvalget er representativt", "Prosessen med å anonymisere data"],
      explanation: "Debriefing kommer *etter* deltakelsen og gir tilbake informasjonen som ble holdt tilbake — obligatorisk ved deception.",
    },
    {
      question: "Hvorfor kan full informasjon noen ganger ødelegge en studie?",
      options: ["Fordi deltakere som kjenner formålet tilpasser atferden (demand characteristics)", "Fordi informasjon alltid gjør deltakerne engstelige", "Fordi det tar for lang tid å informere", "Fordi informert samtykke er valgfritt"],
      explanation: "Demand characteristics: kjennskap til formålet endrer atferden, og det er den metodiske grunnen til at deception noen ganger trengs.",
    },
    {
      question: "Hva er den bærende etiske avveiningen i forskning?",
      options: ["Vitenskapelig gevinst mot deltakerbelastning", "Kostnad mot tidsbruk", "Reliabilitet mot validitet", "Kvantitativ mot kvalitativ metode"],
      explanation: "Jo større belastning, desto tyngre må gevinsten veie og desto strengere blir kravene til samtykke og oppfølging.",
    },
    {
      question: "Hvorfor er rekruttering av egne studenter via foreleseren etisk problematisk?",
      options: ["Avhengighetsforholdet kan gjøre at et 'ja' skyldes press, ikke fritt valg", "Studenter forstår ikke forskning", "Foreleseren får da for mange deltakere", "Det er alltid forbudt å forske på studenter"],
      explanation: "Et vurderingsforhold truer frivilligheten i samtykket — rekruttering bør skje uavhengig av relasjonen.",
    },
    {
      question: "Hva er den vanligste fellen i etikkoppgaver på eksamen (feil #16)?",
      options: ["Å svare med moralprat uten fagbegrepene informert samtykke, konfidensialitet, trekk-rett, deception, debriefing", "Å bruke for mange fagbegreper", "Å regne feil på et talleksempel", "Å svare på for få deloppgaver"],
      explanation: "Sensor vil ha fagforankring. Generelle moralske betraktninger uten fagbegrepene gir ikke uttelling.",
    },
    {
      question: "Hvordan løser venteliste-kontroll et etisk problem?",
      options: ["Kontrollgruppen får behandlingen etter studien, så ingen nektes den — samtidig som man beholder en kontrollgruppe", "Man dropper kontrollgruppen helt", "Alle får placebo", "Man randomiserer ikke lenger"],
      explanation: "Etikk som designpremiss: venteliste-kontroll forener det metodiske kravet om kontrollgruppe med det etiske kravet om ikke å nekte behandling.",
    },
    {
      question: "Hva er obligatorisk hvis en studie har brukt deception?",
      options: ["Debriefing i etterkant", "At studien avlyses", "At deltakerne betaler tilbake honoraret", "At resultatene holdes hemmelige"],
      explanation: "Deception må alltid følges av debriefing som gjenoppretter åpenheten og oppklarer villedingen.",
    },
    {
      question: "Hva krever dyreforskningsetikk (kjenne-nivå)?",
      options: ["Særskilt begrunnelse, dyrevelferd og reduksjon (færrest mulig dyr)", "Informert samtykke fra dyrene", "Debriefing av dyrene etterpå", "At dyr aldri kan brukes i forskning"],
      explanation: "Bruk av dyr krever begrunnelse for at kunnskapen ikke kan skaffes annerledes, velferdshensyn og reduksjon i antall.",
    },
    {
      question: "Hva skiller informert samtykke fra debriefing i tid?",
      options: ["Samtykke gis før deltakelsen; debriefing skjer etter", "Begge skjer etter studien", "Begge skjer før studien", "Debriefing gis før og samtykke etter"],
      explanation: "Samtykke er beslutningen deltakeren tar *før*; debriefing lukker sirkelen *etter* og gir tilbake tilbakeholdt informasjon.",
    },
    {
      question: "Hva løfter et etikksvar fra C-nivå til A-nivå?",
      options: ["Å navngi fagbegrepet, anvende det på det konkrete caset og begrunne — ikke bare definere", "Å skrive lengst mulig", "Å nevne så mange rettigheter som mulig uten kobling", "Å unngå fagbegreper for å virke tilgjengelig"],
      explanation: "Mantraet 'definer — anvend på caset — begrunn' gjelder også etikk; en løsrevet definisjonsremse (feil #8) gir C-tak.",
    },
    {
      question: "En deltaker vil trekke data om seg selv etter at studien er ferdig. Hva gjelder?",
      options: ["Trekk-retten omfatter også at allerede innsamlede data om deltakeren kan slettes", "Data kan aldri slettes når de er samlet inn", "Bare forskeren avgjør om data slettes", "Deltakeren mister trekk-retten når datainnsamlingen er over"],
      explanation: "Retten til å trekke seg omfatter å be om at innsamlede data om deltakeren slettes — frivilligheten gjelder også i etterkant.",
    },
  ],
  'psy1010-7-2': [
    {
      question: "Hva er HARKing?",
      options: ["Å formulere hypotesen etter at man har sett resultatene, og presentere den som forhåndssatt", "Å pre-registrere hypotesen før datainnsamling", "Å gjøre en meta-analyse av mange studier", "Å kombinere flere måleinstrumenter"],
      explanation: "HARKing = Hypothesizing After the Results are Known — hypotesen dikkes rundt funnet i etterkant, i strid med at testlogikken forutsetter hypotese før data.",
    },
    {
      question: "Hvorfor er HARKing et problem for hypotesetesting?",
      options: ["Testlogikken forutsetter at hypotesen kom før dataene; en p-verdi mister mening når hypotesen er skreddersydd til tallene", "Fordi det tar for lang tid", "Fordi eksplorative analyser er forbudt", "Fordi det krever for store utvalg"],
      explanation: "P-verdien tolkes 'gitt at H0 er sann' og forutsetter en forhåndshypotese; skreddersøm i etterkant bryter premisset.",
    },
    {
      question: "Hva er pre-registrering?",
      options: ["Å låse hypotese, design og analyseplan offentlig før data samles inn", "Å publisere resultatene før fagfellevurdering", "Å registrere deltakerne før studien", "Å kjøre analysen på nytt etter innsamling"],
      explanation: "Pre-registrering tidsstempler planen før data, så hypotesen ikke i ettertid kan utgis for å ha vært der hele tiden — motmiddel mot HARKing.",
    },
    {
      question: "Hva er p-hacking?",
      options: ["Å prøve seg fram til et signifikant resultat og bare rapportere det som traff", "Å regne p-verdien for hånd", "Å pre-registrere flere hypoteser", "Å bruke Bayesiansk statistikk"],
      explanation: "Med nok tester blir noe signifikant ved flaks; selektiv rapportering gjør p-verdien meningsløs.",
    },
    {
      question: "Er eksplorative analyser tillatt?",
      options: ["Ja, men de må merkes som eksplorative, ikke maskeres som forhåndshypoteser", "Nei, all utforskning er HARKing", "Bare hvis de er pre-registrert", "Bare i kvalitativ forskning"],
      explanation: "Utforskning er en dyd og ofte kilden til nye hypoteser — det gale er å skjule at funnet kom i etterkant.",
    },
    {
      question: "Hva er publikasjonsskjevhet?",
      options: ["At signifikante funn publiseres oftere enn null-funn, så litteraturen overdriver effekter", "At tidsskrifter tar betalt for publisering", "At forskere favoriserer egne teorier", "At utvalget er skjevt rekruttert"],
      explanation: "Negative resultater forblir i skuffen; publisert litteratur gir dermed et for optimistisk bilde.",
    },
    {
      question: "Hva skiller en review fra en meta-analyse?",
      options: ["Review oppsummerer kvalitativt (i ord); meta-analyse kombinerer statistisk (ett effektestimat)", "Review bruker tall, meta-analyse bruker ord", "De er det samme", "Review samler nye data, meta-analyse ikke"],
      explanation: "Begge oppsummerer et felt, men review tolker, meta-analyse regner.",
    },
    {
      question: "Hva kjennetegner en *systematisk* review?",
      options: ["Eksplisitte, forhåndsbestemte kriterier for søk og seleksjon av studier", "At den bruker meta-analyse", "At den bare inkluderer én studie", "At den er skrevet av flere forfattere"],
      explanation: "Systematikken ligger i at søk og inklusjon/eksklusjon er definert på forhånd, så seleksjonen ikke farges av forfatterens ønsker.",
    },
    {
      question: "Hvilket problem rammer BÅDE review og meta-analyse?",
      options: ["Publikasjonsskjevhet — hvis bare signifikante studier er publisert, blir oppsummeringen for optimistisk", "At de aldri kan gi tall", "At de krever nye eksperimenter", "At de ikke kan fagfellevurderes"],
      explanation: "Begge er avhengige av studiene som puttes inn; skjev publisering forplanter seg til oppsummeringen ('garbage in, garbage out').",
    },
    {
      question: "Hva er fagfellevurdering (peer review)?",
      options: ["At uavhengige eksperter vurderer et manuskript før publisering", "At deltakerne vurderer studien", "At forfatteren vurderer sine egne data", "At publikum stemmer over resultatene"],
      explanation: "En kvalitetskontroll før publisering — men ikke feilfri; den fanger ikke all p-hacking eller svindel.",
    },
    {
      question: "Cohens kappa korrigerer prosent enighet for hva?",
      options: ["Enigheten man ville fått ved ren tilfeldighet", "Manglende validitet", "Skjevt utvalg", "For få ledd i skalaen"],
      explanation: "Kappa trekker fra forventet tilfeldig enighet ($P_c$) slik at bare enighet utover flaks teller.",
    },
    {
      question: "To bedømmere er enige på 45 av 50 ($P_o=0{,}90$), og $P_c=0{,}60$. Hva er kappa?",
      options: ["0,75", "0,90", "0,60", "0,30"],
      explanation: "$K=(0{,}90-0{,}60)/(1-0{,}60)=0{,}30/0{,}40=0{,}75$ — god enighet utover tilfeldighet.",
    },
    {
      question: "Et enkelt Likert-ledd (1–5) er strengt tatt hvilket målenivå?",
      options: ["Ordinalt (rangert, men avstandene ikke definert like)", "Nominalt", "Intervall alltid", "Forhold"],
      explanation: "Et enkeltledd er ordinalt; en sumskår over flere ledd behandles etter konvensjon som intervall.",
    },
    {
      question: "Hva er en takeffekt?",
      options: ["At mange skårer nær maksimum, så forskjeller på toppen ikke fanges", "At mange skårer nær minimum", "At testen har for mange ledd", "At utvalget er for lite"],
      explanation: "Takeffekt (en range-effekt) betyr at målet er for lett; reelle forskjeller på toppen skjules og sensitiviteten svekkes.",
    },
    {
      question: "Hva er sensitivitet ved et måleinstrument?",
      options: ["Instrumentets evne til å fange opp forskjeller mellom deltakere som faktisk er ulike", "At instrumentet er kort og enkelt", "At det gir samme svar hver gang", "At det er billig å administrere"],
      explanation: "Lav sensitivitet gjør at reelle effekter drukner; tak- og gulveffekt er trusler mot sensitiviteten.",
    },
    {
      question: "Hva er et 95 %-konfidensintervall omtrent?",
      options: ["Estimatet ± 1,96 · SE — et presisjonsintervall rundt estimatet", "Estimatet ± SD", "En p-verdi under 0,05", "Et intervall som alltid inneholder alle observasjoner"],
      explanation: "KI kobler til ±1,96 ↔ 95 % og standardfeilen; smalt intervall = presist estimat.",
    },
    {
      question: "Hva kjennetegner en Bayesiansk tilnærming (kjenne-nivå)?",
      options: ["Man oppdaterer sannsynligheter for hypoteser i lys av data, i stedet for å teste mot en fast H0 med p-verdier", "Man forbyr all hypotesetesting", "Man bruker bare kvalitative data", "Man regner alltid kappa"],
      explanation: "Bayes er en alternativ statistikk-logikk nevnt i pensum, aldri krevd regnet — den kontrasterer p-verdi-logikken.",
    },
    {
      question: "Hva var V2025-trekket knyttet til åpen vitenskap?",
      options: ["Å antyde at etterkant-endring av hypotesen uten åpenhet er greit", "Å bruke for mange fagbegreper om åpenhet", "Å regne konfidensintervall feil", "Å svare på for mange oppgaver"],
      explanation: "Sensor ga eksplisitt trekk for å framstille HARKing som uproblematisk uten å merke funnet som eksplorativt.",
    },
    {
      question: "Hva skiller en konfirmerende fra en eksplorativ analyse?",
      options: ["Konfirmerende er planlagt på forhånd (p beholder mening); eksplorativ er utforskende i etterkant og må merkes", "Konfirmerende bruker kvalitative data", "Eksplorativ er alltid forbudt", "De er identiske"],
      explanation: "Skillet er om hypotesen kom før eller etter data; eksplorative funn er lov, men skal merkes, ikke maskeres.",
    },
    {
      question: "Hvorfor bør spørreskjemaledd unngå 'doble' spørsmål (double-barreled)?",
      options: ["Fordi deltakeren ikke vet hvilken del av spørsmålet hun svarer på", "Fordi de er for korte", "Fordi de gir for høy reliabilitet", "Fordi de alltid er ledende"],
      explanation: "Et ledd som spør om to ting samtidig kan ikke tolkes entydig — god spørreskjemakonstruksjon krever ett tema per ledd.",
    },
  ],
  'psy1010-8-1': [
    {
      question: "Hva er den faste rekkefølgen i femtrinnsforløpet for korrelasjonsoppgaven (T1)?",
      options: ["Tolk r → hvorfor ikke kausal → tegn kausalmodeller → spuriøst eksempel → regresjon som videreføring", "Regn r → test signifikans → tegn kausalmodeller → konkluder kausalt → regresjon", "Tegn kausalmodeller → tolk r → regn r² → spuriøst eksempel → power", "Formuler H0/H1 → tolk r → Type I/II → regresjon → spuriøst eksempel"],
      explanation: "T1-forløpet er: (a) tolk r firedelt, (b) de tre kanoniske grunnene til at det ikke er kausalt, (c) tegn og case-tilpass kausalmodellene, (d) spuriøst eksempel, (e) regresjon som videreføring. r regnes aldri på eksamen (den er oppgitt), og hypotesetesting/power hører til T2.",
    },
    {
      question: "Hvilket ledd i korrelasjonsoppgaven er A-skilleren sensor ser etter?",
      options: ["Å tegne og case-tilpasse kausalmodellene (konfunder, mediator, moderator) med et konkret z", "Å oppgi styrken etter konvensjonstabellen", "Å regne ut r fra rådataene", "Å nevne at r ligger mellom −1 og +1"],
      explanation: "Trinn (c) — å tegne alle tre modellene med et konkret z for scenariet — er A-skilleren. Å bare definere modellene uten case-tilpasning er C-taket (feil #8). r regnes aldri på eksamen.",
    },
    {
      question: "En kandidat definerer konfunder, mediator og moderator korrekt, men uten å knytte dem til caset. Hvilket nivå og hvilken feil er dette?",
      options: ["C-tak; feil #8 (oppramsing uten begrunnelse / case-tilpasning mangler)", "A-nivå; ingen feil, definisjonene er jo riktige", "Stryk; feil #3 (kausalspranget)", "B-nivå; feil #15 (jeg-kan-også-dette-utbrodering)"],
      explanation: "Korrekte definisjoner uten case-tilpasning gir C-tak — feil #8. A-svaret tegner hver modell med et navngitt z fra scenariet. Det er ikke #3 (ingen kausalpåstand) eller #15 (ikke irrelevant utbrodering).",
    },
    {
      question: "Hvilken av de tre kausalmodellene har pilstrukturen z → X og z → Y?",
      options: ["Konfunder (bakenforliggende variabel)", "Mediator (mekanismen)", "Moderator (for hvem / når)", "Retningsproblemet"],
      explanation: "Konfunderen påvirker BÅDE X og Y (z → X, z → Y) og skaper en spuriøs sammenheng. Mediatoren er X → z → Y; moderatoren endrer styrken på X → Y.",
    },
    {
      question: "Hva er forskjellen på en konfunder og en mediator i konklusjonen de gir?",
      options: ["Konfunderen forklarer sammenhengen BORT (spuriøs); mediatoren FORKLARER den (ekte, via mekanisme)", "Konfunderen forklarer sammenhengen; mediatoren forklarer den bort", "Begge forklarer sammenhengen bort — de er synonymer", "Konfunderen gjelder eksperiment, mediatoren gjelder korrelasjon"],
      explanation: "Samme z-plassering, motsatt konklusjon: konfunderen (z → begge) gjør sammenhengen spuriøs — X virker ikke egentlig. Mediatoren (X → z → Y) gjør sammenhengen ekte, men via en mekanisme.",
    },
    {
      question: "Hva kjennetegner en moderator?",
      options: ["Den endrer styrken (eller retningen) på X → Y — svarer «for hvem / når?»", "Den påvirker både X og Y og skaper sammenhengen", "Den er mekanismen X virker gjennom (X → z → Y)", "Den er en tredje måling av samme variabel"],
      explanation: "Moderatoren justerer hvor sterk X → Y-sammenhengen er (sterk for noen, svak for andre). Den skaper ikke sammenhengen (konfunder) og formidler den ikke (mediator).",
    },
    {
      question: "Hvilket av disse er et RENT spuriøst eksempel egnet for trinn (d)?",
      options: ["Is-salg og drukningsulykker korrelerer — begge drevet av varmt vær (z)", "Trening → bedre søvn → bedre humør", "Røyking forårsaker økt lungekreftrisiko", "Randomisert tildeling til to betingelser gir en kausal effekt"],
      explanation: "Is-salg/drukning er klassisk spuriøst: en tredjevariabel (vær) driver begge, uten direkte årsakslenke. Trening→søvn→humør er en mediatorkjede (ekte), ikke spuriøs; de to andre er kausale.",
    },
    {
      question: "Hva legger regresjonen til utover korrelasjonen i trinn (e)?",
      options: ["En prediksjonslinje (hvor mye Y endres per X) og r² — men IKKE kausalitet", "En kausal slutning fra X til Y", "Et signifikansnivå og en p-verdi", "En randomisert tildeling av deltakere"],
      explanation: "Regresjon bruker samme sammenheng som r og legger til Ŷ = a + bX (prediksjon) og r² (delt varians). Den legger IKKE til kausalitet — det er fortsatt naturlig variasjon. Signifikans og randomisering hører til andre sjangre.",
    },
    {
      question: "En studie oppgir r = 0,40. Hvor stor andel av variasjonen i Y deles med X?",
      options: ["16 % (r² = 0,40² = 0,16)", "40 % (r = 0,40)", "20 % (r/2)", "64 % (1 − r²)"],
      explanation: "Delt varians er r², ikke r: 0,40² = 0,16 = 16 %. Å lese r som prosent (40 %) er en vanlig feil; de resterende 84 % skyldes andre faktorer.",
    },
    {
      question: "Hvorfor kan vi ikke konkludere kausalt fra r = 0,45 i en korrelasjonsstudie?",
      options: ["Fordi minst tre forklaringer gjelder: retningsproblem, tredjevariabel og spuriøsitet — og r skiller ikke mellom dem", "Fordi r er for lavt til å være signifikant", "Fordi r ikke ble regnet ut for hånd", "Fordi utvalget alltid er for lite i korrelasjonsstudier"],
      explanation: "En korrelasjon kan alltid skyldes retningsproblem (Y→X), en tredjevariabel (z→begge) eller spuriøsitet. Størrelsen på r endrer ikke dette. Å nevne alle tre grunnene — ikke bare «en tredjevariabel» — er A-nivå.",
    },
    {
      question: "Med Ŷ = 45 + 3X, hva predikeres for X = 8 (innenfor observert område)?",
      options: ["69 poeng (45 + 3·8 = 45 + 24)", "48 poeng (45 + 3)", "24 poeng (3·8)", "53 poeng (45 + 8)"],
      explanation: "Sett X = 8 inn: Ŷ = 45 + 3·8 = 45 + 24 = 69. Vis mellomregningen (feil #13 ellers). Siden 8 ligger innenfor det observerte området, er dette ikke ekstrapolering.",
    },
    {
      question: "Hvorfor er tidsbudsjett viktig i korrelasjonsoppgaven?",
      options: ["Alle tre besvarte oppgaver teller likt, så tid brukt på ett A-skille her stjeler tid fra A-skiller i de andre oppgavene", "Fordi den siste oppgaven man leverer alltid teller dobbelt", "Fordi korrelasjonsoppgaven alltid er verdt flest poeng", "Fordi sensor trekker for oppgaver besvart for raskt"],
      explanation: "På PSY1010 besvarer du 3 av 4 oppgaver, og alle teller likt (kap. 0.1). Trygghet i T1-forløpet frigjør tid til A-skillene i de andre oppgavene. Oppgavene er ikke ulikt vektet, og det er den SISTE oppgaven som ignoreres ved fire besvarelser, ikke telles dobbelt.",
    },
  ],
  'psy1010-8-2': [
    {
      question: "Hva er den korrekte definisjonen av p-verdien?",
      options: ["Sannsynligheten for et minst like ekstremt resultat, gitt at H0 er sann", "Sannsynligheten for at H0 er sann", "Sannsynligheten for at H0 er feil", "Sannsynligheten for at H1 er sann"],
      explanation: "p er sannsynligheten for DATAENE gitt hypotesen — «gitt at H0 er sann». De tre andre er varianter av feil #1 (sannsynlighet FOR hypotesen), som har eksplisitt trekk-instruks i sensorveiledningen (H2018).",
    },
    {
      question: "En kandidat skriver «p = 0,03 betyr 3 % sjanse for at H0 er riktig». Hvilken feil er dette?",
      options: ["Feil #1 — p tolket som sannsynligheten for at H0 er sann/feil (trekk-instruks)", "Feil #11 — enhalet test uten begrunnelse", "Feil #12 — hypotese om utvalget i stedet for populasjonen", "Feil #6 — SD forvekslet med SE"],
      explanation: "Å tolke p som «sjanse for at H0 er riktig» er feil #1 — den ene feilen sensor har eksplisitt trekk-instruks for. Korrekt: p er sannsynligheten for dataene gitt at H0 er sann.",
    },
    {
      question: "Hva er sekstrinnsforløpet for hypotesetestingsoppgaven (T2)?",
      options: ["H0/H1 med μ → trinnene + p-definisjon → konkluder + α-skifte → Type I/II på caset → power/n → ev. HARKing", "Tolk r → tegn kausalmodeller → regn r² → Type I/II → power → HARKing", "Velg design → randomiser → mål → analyser → rapporter → konkluder", "Regn snitt → varians → SD → SE → t → p"],
      explanation: "T2-forløpet er (a) hypoteser om μ, (b) trinnene med korrekt p-definisjon, (c) konkludér med α-skifte og halering, (d) Type I/II på caset, (e) power/n, (f) ev. HARKing-hale. De andre er T1, forskningsprosessen og t-kjeden.",
    },
    {
      question: "Hypotesene i en nullhypotesetest handler alltid om …",
      options: ["populasjonsgjennomsnittet μ (det vi ikke vet)", "utvalgsgjennomsnittet x̄ (det vi har målt)", "standardavviket SD", "korrelasjonen r"],
      explanation: "Hypotesene gjelder μ (populasjonen), ikke x̄ (utvalget vi allerede kjenner). Å skrive H0: x̄ = μ0 er feil #12 — vi tester det vi ikke vet.",
    },
    {
      question: "En Type I-feil er …",
      options: ["å forkaste en sann H0 (falsk alarm, risiko α)", "å beholde en falsk H0 (oversett effekt, risiko β)", "å regne feil på t-observatoren", "å velge feil signifikansnivå"],
      explanation: "Type I = forkaste sann H0 (falsk alarm), med risiko α. Type II = beholde falsk H0 (oversett effekt), med risiko β. Å bytte dem er feil #2.",
    },
    {
      question: "Et sykehus BEHOLDT H0 (p = 0,12). Hvilken feiltype KAN de i prinsippet ha begått?",
      options: ["Type II-feil (de kan ha oversett en ekte effekt)", "Type I-feil (de kan ha slått falsk alarm)", "Begge samtidig", "Ingen — å beholde H0 kan aldri være feil"],
      explanation: "En Type I-feil er bare mulig når man FORKASTER H0. Siden de beholdt H0, kan de ha begått en Type II-feil (oversett en ekte effekt). «Ikke signifikant» er ikke bevis for at det ikke finnes en effekt.",
    },
    {
      question: "En tohalet test gir p = 0,048. Hva skjer ved α-skifte fra 0,05 til 0,01?",
      options: ["Konklusjonen snur: forkast ved 0,05 (0,048 < 0,05), men behold ved 0,01 (0,048 > 0,01)", "Forkast ved begge nivåer", "Behold ved begge nivåer", "Forkast ved 0,01, men behold ved 0,05"],
      explanation: "0,048 er en vippeverdi: den ligger under 0,05 (signifikant) men over 0,01 (ikke signifikant). Å snu konklusjonen ved α-skifte er et fast c-ledd.",
    },
    {
      question: "En tohalet test gir p = 0,036. Hva blir enhalet p, og under hvilken betingelse er halveringen tillatt?",
      options: ["Enhalet p = 0,018; kun tillatt hvis retningen var begrunnet FØR dataene ble sett", "Enhalet p = 0,072; alltid tillatt", "Enhalet p = 0,018; alltid tillatt", "Enhalet p = 0,036; halvering gjelder aldri"],
      explanation: "Enhalet p = tohalet p / 2 = 0,036/2 = 0,018 (forutsatt at effekten går i predikert retning). Men den er kun gyldig med FORHÅNDSbegrunnet retning — å velge enhalet i etterkant for å presse p under grensen er feil #11.",
    },
    {
      question: "Hva er power?",
      options: ["Sannsynligheten for å oppdage en ekte effekt (forkaste en falsk H0), power = 1 − β", "Sannsynligheten for en falsk alarm, altså α", "Sannsynligheten for at H0 er sann", "Standardfeilen delt på standardavviket"],
      explanation: "Power = 1 − β er sannsynligheten for å forkaste en falsk H0 (oppdage en ekte effekt). Konvensjonen er 80 %. Den øker med større effekt, større n og mildere α.",
    },
    {
      question: "Hvordan påvirker det å øke utvalgsstørrelsen n testens power?",
      options: ["Større n gir mindre SE = SD/√n → smalere utvalgsfordeling → høyere power", "Større n reduserer power fordi støyen øker", "n påvirker ikke power, bare α gjør det", "Større n øker β og senker power"],
      explanation: "Større n gir mindre SE, altså en smalere utvalgsfordeling der ekte effekter stikker tydeligere fram — høyere power. n er faktoren forskeren lettest kan styre (V2024-leddet).",
    },
    {
      question: "Hva er HARKing?",
      options: ["Å formulere hypotesen ETTER å ha sett dataene og utgi den for forhåndssatt", "Å teste flere hypoteser samtidig med Bonferroni-korreksjon", "Å regne t-verdien for hånd i stedet for med kalkulator", "Å bruke enhalet test med begrunnet retning"],
      explanation: "HARKing (Hypothesizing After the Results are Known) er å skreddersy hypotesen til funnene i etterkant. Det bryter p-logikkens premiss om at hypotesen kom først. Pre-registrering (plan låst før data) forebygger det.",
    },
    {
      question: "En A-besvarelse i d-leddet (Type I/II) …",
      options: ["sier hva hver feil ville BETY i det konkrete caset, ikke bare definerer dem", "definerer Type I og Type II presist og stopper der", "regner ut β eksakt fra oppgitte tall", "hopper over Type II fordi den er mindre viktig"],
      explanation: "A-skilleren i d-leddet er å ANVENDE feiltypene på scenariet (hva ville en falsk alarm / en oversett effekt bety her?). Å bare definere er C-nivå. β regnes ikke på eksamen, og begge feiltyper hører med.",
    },
  ],
  'psy1010-8-3': [
    {
      question: "Hva er det obligatoriske siste trinnet i løsningsoppskriften for enhver regneoppgave (T3)?",
      options: ["Å tolke resultatet i prosa — hva tallet betyr i studien", "Å runde svaret til to desimaler", "Å kontrollere med kalkulator én gang til", "Å skrive svaret med rød penn"],
      explanation: "Trinn 4 er å TOLKE tallet i ord — det sensor vekter tyngst. En utregning uten avsluttende prosatolkning er ikke ferdig. De tre andre er ikke oppskriftstrinn.",
    },
    {
      question: "Hvorfor deler vi på n − 1 (ikke n) når vi regner utvalgsvarians?",
      options: ["Utvalget ligger tettere rundt sitt eget snitt enn rundt populasjonssnittet; n − 1 korrigerer for undervurderingen", "For å gjøre tallet større enn det egentlig er", "Fordi n alltid er et partall", "Fordi standardavviket krever et oddetall i nevneren"],
      explanation: "Å dele på n ville systematisk undervurdere populasjonsvariansen fordi utvalget klumper seg rundt sitt eget snitt. n − 1 (frihetsgradene) gir et forventningsrett estimat.",
    },
    {
      question: "Verdiene 3, 4, 4, 5, 6, 7, 13 gir gjennomsnitt 6, median 5, modus 4. Hvorfor spriker de?",
      options: ["Uteliggeren 13 drar gjennomsnittet opp; medianen er robust mot den", "Fordi det er et oddetall antall verdier", "Fordi modus alltid er lavest", "Fordi standardavviket er for høyt"],
      explanation: "Den ekstreme verdien 13 trekker gjennomsnittet (6) over medianen (5) og modus (4). Medianen er robust mot uteliggere og gir det mest rettferdige bildet av en «typisk» verdi.",
    },
    {
      question: "Et boksplott har Q1 = 30, median = 38, Q3 = 46. Hva er interkvartilbredden (IQR)?",
      options: ["16 (Q3 − Q1 = 46 − 30)", "8 (median − Q1)", "38 (medianen)", "76 (Q1 + Q3)"],
      explanation: "IQR = Q3 − Q1 = 46 − 30 = 16. Det er boksens bredde — spennet der de midterste 50 % av observasjonene ligger, robust mot uteliggere.",
    },
    {
      question: "Hvorfor vises ikke gjennomsnittet i et boksplott?",
      options: ["Boksplottet bygger på rangorden (kvartiler/median), ikke på summen av tallverdiene", "Fordi gjennomsnittet alltid er lik medianen", "Fordi gjennomsnittet ikke kan regnes fra et boksplott", "Fordi gjennomsnittet er konfidensielt"],
      explanation: "Boksplottet viser rangbaserte, robuste mål (kvartiler, median). Gjennomsnittet krever tallverdienes sum og påvirkes av uteliggere — derfor vises det bevisst ikke.",
    },
    {
      question: "Et utvalg har SD = 6 og n = 36. Hva er standardfeilen SE = SD/√n?",
      options: ["1,0 (6/√36 = 6/6)", "6,0 (SE = SD)", "0,17 (6/36)", "36 (n)"],
      explanation: "SE = 6/√36 = 6/6 = 1,0. SE er presisjonen i gjennomsnittsestimatet, ikke spredningen mellom personer (det er SD = 6).",
    },
    {
      question: "Hva er forskjellen på SD og SE?",
      options: ["SD = spredning mellom personer; SE = presisjonen i gjennomsnittsestimatet (SD/√n)", "SD og SE er to navn på det samme", "SE er alltid større enn SD", "SD gjelder utvalget, SE gjelder én enkelt person"],
      explanation: "SD måler hvor mye ENKELTPERSONER varierer; SE = SD/√n måler hvor presist GJENNOMSNITTET er bestemt. Å bytte dem er feil #6. SE er alltid mindre enn SD (for n > 1).",
    },
    {
      question: "To grupper (n₁ = n₂ = 18) har x̄₁ = 28, x̄₂ = 25, s² = 9 i begge. Med Sp = 3 blir SE(D) = 3·√(2/18) = 1,0. Hva er t?",
      options: ["3,0 (t = (28 − 25)/1,0)", "1,0 (SE(D))", "0,33 (1,0/3)", "9,0 (s²)"],
      explanation: "t = (x̄₁ − x̄₂)/SE(D) = (28 − 25)/1,0 = 3,0. Differansen på 3 poeng er 3 standardfeil — stor relativt til støyen, som gir en liten p.",
    },
    {
      question: "I t-kjeden: hva deler man differansen (x̄₁ − x̄₂) på for å få t?",
      options: ["SE(D) — standardfeilen for differansen", "SD — standardavviket i én gruppe", "s² — variansen", "n — utvalgsstørrelsen"],
      explanation: "t = (x̄₁ − x̄₂)/SE(D). Å dele på SD i stedet for SE(D) er feil #6 (SD/SE-forveksling). SE(D) er standardfeilen for selve differansen.",
    },
    {
      question: "En skår er x = 85 der x̄ = 70 og SD = 10. Hva er z-skåren, og hva forteller den?",
      options: ["z = 1,5 — skåren ligger 1,5 standardavvik over gjennomsnittet", "z = 15 — skåren ligger 15 poeng over gjennomsnittet", "z = 0,15 — skåren er nær gjennomsnittet", "z = 8,5 — skåren er x/SD"],
      explanation: "z = (x − x̄)/SD = (85 − 70)/10 = 1,5. Skåren ligger 1,5 SD over snittet. Standardisering endrer IKKE fordelingens form — den normaliserer ikke en skjev fordeling.",
    },
    {
      question: "Med Ŷ = 50 + 4X (observert område 0–12), hva predikeres for X = 6, og hva med X = 30?",
      options: ["X = 6 → 74; X = 30 er ekstrapolering (langt utenfor 0–12) og upålitelig", "X = 6 → 74; X = 30 → 170, like pålitelig", "X = 6 → 54; X = 30 → 80", "X = 6 → 300; X = 30 → 1500"],
      explanation: "Ŷ = 50 + 4·6 = 74 (innenfor området). For X = 30 gir formelen 170, men 30 ligger langt utenfor 0–12 — det er ekstrapolering, som er upålitelig. Oppgi forbeholdet.",
    },
    {
      question: "En studie finner r = 0,70. Hvor stor andel av variasjonen deles med X, og hva er feilen i «0,70 = 70 % forklart»?",
      options: ["r² = 0,49 = 49 %; feilen er å lese r som prosent i stedet for å kvadrere", "70 %; ingen feil, r ER den forklarte andelen", "r² = 0,49, men feilen er at r² skulle vært √r", "35 %; r skal halveres"],
      explanation: "Delt varians er r² = 0,70² = 0,49 = 49 %, ikke r. Å lese r = 0,70 som «70 % forklart» overdriver — man må kvadrere først. r rangeres, r² sammenlignes.",
    },
  ],
  'psy1010-8-4': [
    {
      question: "Hva kjennetegner et ekte eksperiment?",
      options: ["Manipulasjon av UV, randomisert tilordning til grupper og en kontrollgruppe", "Manipulasjon av UV, men uten randomisering", "Naturlige grupper som sammenlignes uten manipulasjon", "Én person som følges tett over tid"],
      explanation: "Ekte eksperiment krever alle tre: manipulasjon, randomisert tilordning og kontrollgruppe. Mangler randomiseringen, er designet kvasi.",
    },
    {
      question: "Et leseprogram innføres ved to skoler; to naboskoler er sammenligning, uten randomisering. Hva slags design er dette?",
      options: ["Kvasieksperiment med ikke-ekvivalente grupper", "Ekte eksperiment", "Kasusstudie", "N=1-eksperiment"],
      explanation: "Det finnes manipulasjon og en sammenligningsgruppe, men ingen randomisert tilordning — det gjør designet kvasi, med seleksjon som hovedtrussel.",
    },
    {
      question: "Hvorfor er selvseleksjon (deltakerne melder seg selv) en trussel mot indre validitet?",
      options: ["De som melder seg kan være systematisk annerledes enn de som ikke gjør det, så forskjellen kan skyldes hvem de er", "Den gjør utvalget for lite", "Den reduserer den statistiske styrken automatisk", "Den påvirker bare den ytre validiteten, ikke den indre"],
      explanation: "Selvseleksjon er en seleksjonstrussel: gruppene skiller seg allerede før tiltaket, så en effekt kan reflektere gruppeforskjeller snarere enn tiltaket.",
    },
    {
      question: "Et forskningsspørsmål gjelder om en app senker eksamensstress, og deltakere kan tilordnes tilfeldig. Hvilket design passer best?",
      options: ["Ekte eksperiment (RCT) med randomisering og kontrollgruppe", "Kasusstudie", "Kvasieksperiment med naturlige grupper", "Ren korrelasjonsstudie uten kontroll"],
      explanation: "Et årsaksspørsmål der UV kan manipuleres og tilordnes tilfeldig, kaller på et RCT — det gir den mest holdbare årsaksslutningen.",
    },
    {
      question: "Du vil studere om et belønningsopplegg virker mot negativ atferd hos ett enkelt barn. Hvilket design passer?",
      options: ["N=1/single-subject-design (f.eks. ABAB)", "Kasusstudie", "Enveis ANOVA-design", "Tverrsnittsundersøkelse med spørreskjema"],
      explanation: "Med én person og en manipulert betingelse med kontrollfaser er ABAB riktig — det er et ekte eksperiment der barnet er sin egen kontroll.",
    },
    {
      question: "Hva er riktig test når to uavhengige grupper sammenlignes på ett kontinuerlig mål?",
      options: ["Uparet t-test (tohalet med mindre retning er begrunnet)", "Enveis ANOVA", "ANCOVA", "Cohens kappa"],
      explanation: "To grupper på ett kontinuerlig mål er t-testens standardtilfelle. Enhalet krever en forhåndsbegrunnet retning.",
    },
    {
      question: "Hvorfor bør fem grupper sammenlignes med ANOVA i stedet for mange parvise t-tester?",
      options: ["Mange parvise t-tester blåser opp den samlede (familywise) feilraten; ANOVA holder den på α", "ANOVA er alltid enklere å regne ut for hånd", "t-tester kan ikke brukes på mer enn to grupper i det hele tatt", "ANOVA krever ikke at man velger et signifikansnivå"],
      explanation: "Fem grupper gir 10 par; ti tester à 5 % risiko gir en familywise-risiko langt over 5 %. Én samlet ANOVA holder feilraten nede.",
    },
    {
      question: "En tilleggsvariabel er målt og henger sammen med både gruppene og resultatet, og skal kontrolleres bort. Hvilket grep?",
      options: ["ANCOVA (kovariansanalyse)", "Flere t-tester med strengere α", "En ny randomisering", "Cohens kappa"],
      explanation: "En målt kovariat som korrelerer med UV og AV kontrolleres bort med ANCOVA — det uttalte A/B-skillet i testvalgsoppgaven.",
    },
    {
      question: "Hva er forskjellen på ANCOVA og toveis ANOVA når det gjelder samme tilleggsvariabel?",
      options: ["ANCOVA kontrollerer variabelen bort som forstyrrelse; toveis ANOVA modellerer den som en egen faktor", "Det er ingen forskjell — begge kontrollerer variabelen bort", "ANCOVA kan bare brukes på to grupper", "Toveis ANOVA fjerner behovet for randomisering"],
      explanation: "Samme variabel, ulikt grep: ANCOVA renser den bort, toveis ANOVA studerer den som fenomen. Valget følger forskningsspørsmålet.",
    },
    {
      question: "Et spørreskjema skal vurderes for om det faktisk måler det det skal. Hvilket begrep gjelder?",
      options: ["Testvaliditet (face, innhold, kriterium, begrep)", "Indre validitet", "Ytre validitet", "Statistisk styrke (power)"],
      explanation: "Om et måleinstrument måler riktig, er testvaliditet. Indre/ytre validitet gjelder slutninger fra studier, ikke instrumenter (feil #5).",
    },
    {
      question: "Deltakere er rekruttert via en Facebook-annonse. Hva bør sies om generaliseringen?",
      options: ["Det er et bekvemmelighetsutvalg med frivillighetsbias, så generalisering til hele populasjonen er usikker", "Utvalget er representativt så lenge det er stort nok", "Frivillige gir alltid det mest representative utvalget", "Rekrutteringsmåten har ingen betydning for ytre validitet"],
      explanation: "Et selvvalgt nettutvalg er et bekvemmelighetsutvalg; å behandle det som representativt er feil #9. Gjør generaliseringen betinget.",
    },
    {
      question: "Hvilken kandidat er nærmest et A-svar i en klassifiseringsoppgave?",
      options: ["Den som klassifiserer OG begrunner med kjennetegnene OG case-tilpasser truslene", "Den som setter riktig merkelapp uten begrunnelse", "Den som lister alle mulige designtrusler generelt", "Den som skriver mest om alle designtyper"],
      explanation: "Merkelapp uten begrunnelse gir C-tak (feil #8). A-nivå krever begrunnet klassifisering og trusler knyttet til det konkrete caset.",
    },
  ],
  'psy1010-8-5': [
    {
      question: "Hva kjennetegner et kvalitativt forskningsspørsmål?",
      options: ["Åpent spørreord (hvordan/hva/hvilke), ingen hypotese og ikke ja/nei-besvarbart", "Et tallfestet mål på utbredelse", "En falsifiserbar hypotese om to variabler", "Et ja/nei-spørsmål om en årsakssammenheng"],
      explanation: "Kvalitative spørsmål søker mening og dybde med åpne spørreord; hypotese- og ja/nei-form hører til den kvantitative tradisjonen.",
    },
    {
      question: "Hvilken formulering er et gyldig kvalitativt forskningsspørsmål?",
      options: ["«Hvordan opplever studenter overgangen til arbeidslivet?»", "«Fører deltidsjobb til dårligere karakterer?»", "«Hvor mange studenter opplever stress i eksamensperioden?»", "«Er kvinner mer stresset enn menn under eksamen?»"],
      explanation: "Bare den første har åpent spørreord, ingen påstand og er ikke ja/nei. De tre andre er hypotese-, tall- eller ja/nei-formede.",
    },
    {
      question: "Hva er den kvalitative oppgavens eneste stryk-felle?",
      options: ["Å levere et hypoteseformet eller ja/nei-spørsmål der det bes om et kvalitativt", "Å bruke for få faguttrykk", "Å skrive for kort", "Å ikke nevne Kvale & Brinkmann"],
      explanation: "Feil #10 er den eneste stryk-fellen i T7; sensorveiledningen nevner den eksplisitt. Ellers har oppgaven lave krav.",
    },
    {
      question: "Hva kjennetegner det kvalitative forskningsintervjuet?",
      options: ["En samtale med struktur og formål som henter beskrivelser av intervjupersonens livsverden for å fortolke mening", "En ustrukturert, tilfeldig prat uten formål", "Et muntlig spørreskjema med lukkede svaralternativer", "En test av faktakunnskap hos deltakeren"],
      explanation: "Intervjuet HAR struktur og formål; å kalle det «ustrukturert prat» bommer på Kvale & Brinkmanns kjernepoeng.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom et kvalitativt intervju og et spørreskjema?",
      options: ["Intervjuet gir dybde og mening og åpner for det uforutsette; spørreskjemaet kvantifiserer utbredelse", "Intervjuet er alltid mer vitenskapelig enn spørreskjemaet", "Spørreskjemaet gir alltid mer pålitelige data", "Bare intervjuet kan brukes i psykologisk forskning"],
      explanation: "Begge er fullverdige og passer ulike spørsmål. Intervjuets styrke er det uforutsette; spørreskjemaets er utbredelse i tall.",
    },
    {
      question: "Hva er hovedfellen i prosessoppgaven (T8)?",
      options: ["Å remse trinnene uten å forklare hvert trinns funksjon", "Å forklare for grundig hva hvert trinn gjør", "Å bruke fagbegreper i etikkdelen", "Å nevne at prosessen er syklisk"],
      explanation: "Feil #8: en ren trinnliste gir C-tak. Sensor honorerer forklaring av hva hvert trinn løser.",
    },
    {
      question: "Hvorfor er operasjonalisering et nødvendig trinn i forskningsprosessen?",
      options: ["Den gjør et abstrakt fenomen målbart, slik at hypotesen kan testes", "Den bestemmer hvor mange deltakere man trenger", "Den erstatter behovet for et design", "Den avgjør hvilket signifikansnivå man skal bruke"],
      explanation: "Uten en operasjonell definisjon finnes ingen konkret måling å samle inn, og hypotesen kan ikke testes.",
    },
    {
      question: "En etikkdeloppgave besvares best ved å…",
      options: ["…navngi og anvende fagbegrepene informert samtykke, konfidensialitet, trekk-rett, deception og debriefing", "…understreke at man må være snill mot deltakerne", "…beskrive hvor vondt det ville vært å delta", "…gjengi forskningsetikkens historie"],
      explanation: "Feil #16: moralprat uten fagbegreper gir null. Anvend begrepene på caset.",
    },
    {
      question: "Hva er forskjellen på en (litteratur)review og en meta-analyse?",
      options: ["Review tolker studiene kvalitativt; meta-analyse kombinerer resultatene statistisk til ett estimat", "Review er alltid grundigere enn meta-analyse", "Meta-analyse bruker bare én studie", "Det er ingen reell forskjell mellom dem"],
      explanation: "Begge oppsummerer et felt, men meta-analysen tallfester ved statistisk kombinasjon. Å blande dem er et vanlig lettpoeng-tap.",
    },
    {
      question: "Hva er HARKing?",
      options: ["Å formulere hypotesen etter å ha sett dataene og presentere den som om den kom først", "Å pre-registrere hypotesen før datainnsamling", "Å kombinere flere studier statistisk", "Å bruke enhalet test med begrunnelse"],
      explanation: "HARKing (Hypothesizing After the Results are Known) bryter med at hypotesen skal komme før dataene; pre-registrering forebygger det.",
    },
    {
      question: "Hvordan bør et uventet undergruppe-funn håndteres riktig?",
      options: ["Rapporter det som eksplorativt og pre-registrer en replikasjon som tester det på nye data", "Skriv om hypotesen slik at den passer funnet, og presenter den som opprinnelig", "Ignorer funnet fordi det ikke var forventet", "Publiser det som en bekreftet hovedhypotese"],
      explanation: "Åpenhet er kjernen: merk etterkant-funn som eksplorative og test dem ordentlig i en pre-registrert replikasjon.",
    },
    {
      question: "Hvorfor bør du IKKE utbrodere den kvalitative oppgaven?",
      options: ["Ekstra stoff gir ingen ekstra poeng og stjeler tid fra A-skillene i de andre oppgavene", "Fordi kvalitativ metode ikke er på pensum", "Fordi sensor trekker for hvert ekstra avsnitt", "Fordi lange svar alltid inneholder feil"],
      explanation: "T7 er billig, ikke gratis-å-utbrodere (feil #15). To–tre kjernepoenger per spørsmål er toppsvar; resten er tidstyv via relevansfilteret.",
    },
  ],
  'psy1010-8-6': [
    {
      question: "Hvilken formulering av p-verdien er korrekt?",
      options: ["Sannsynligheten for et resultat minst så ekstremt som dette, gitt at H₀ er sann", "Sannsynligheten for at H₀ er sann", "Sannsynligheten for at H₁ er sann", "Sannsynligheten for at resultatet er en tilfeldighet uansett hypotese"],
      explanation: "Feil #1: p gjelder dataene gitt hypotesen, ikke hypotesen gitt dataene. Dette er den eneste feilen med eksplisitt trekk-instruks.",
    },
    {
      question: "En kandidat skriver: «p = 0,04 betyr 4 % sjanse for at H₀ er riktig.» Hvilken feil er dette?",
      options: ["Feil #1 — p-verdien tolket som sannsynligheten for at H₀ er sann", "Feil #2 — Type I/II-forveksling", "Feil #12 — hypotese om utvalgsverdi", "Ingen feil — formuleringen er korrekt"],
      explanation: "p er ikke sannsynligheten for hypotesen. Riktig: hvis H₀ var sann, ville data minst så ekstreme forekomme 4 % av gangene.",
    },
    {
      question: "Hva er en Type I-feil?",
      options: ["Å forkaste en sann H₀ (falsk alarm, risiko α)", "Å beholde en falsk H₀ (oversett effekt, risiko β)", "Å velge feil statistisk test", "Å formulere hypotesen om utvalget"],
      explanation: "Feil #2: Type I = falsk alarm (forkaster sann H₀). Type II = overser en ekte effekt. Huskeregel: 1 kommer før 2.",
    },
    {
      question: "En kandidat kaller det å overse en ekte effekt en «Type I-feil». Hva er riktig?",
      options: ["Det er en Type II-feil; Type I er å forkaste en sann H₀", "Det er riktig — å overse en effekt er Type I", "Begge betegnelsene betyr det samme", "Det avhenger av signifikansnivået"],
      explanation: "Feil #2 (Type I/II-forveksling): å overse en ekte effekt (beholde falsk H₀) er Type II, ikke Type I.",
    },
    {
      question: "Hva skiller et N=1-eksperiment fra en kasusstudie?",
      options: ["N=1 har manipulasjon og kontrollfaser (ekte eksperiment); kasusstudien er ren beskrivelse", "N=1 har alltid flere deltakere enn kasusstudien", "Kasusstudien har manipulasjon, N=1 har ikke", "De er to navn på det samme"],
      explanation: "Feil #4: testen er «manipuleres noe?». Antall personer avgjør ingenting — begge kan ha én person.",
    },
    {
      question: "«Beskrivelsen av én pasient er et N=1-eksperiment fordi det er bare én person.» Hvilken feil?",
      options: ["Feil #4 — kasusstudie forvekslet med N=1-eksperiment", "Feil #9 — bekvemmelighetsutvalg som representativt", "Feil #13 — usynlig utregning", "Ingen feil"],
      explanation: "Uten manipulasjon er det en kasusstudie, uansett antall deltakere. N=1 krever en manipulert betingelse med kontrollfaser.",
    },
    {
      question: "Et spørsmål gjelder om en TEST måler det den skal. Hvilket validitetsbegrep er riktig?",
      options: ["Testvaliditet (face, innhold, kriterium, begrep)", "Indre validitet", "Ytre validitet", "Statistisk konklusjonsvaliditet"],
      explanation: "Feil #5: indre/ytre validitet gjelder slutninger fra studier; om et instrument måler riktig, er testvaliditet.",
    },
    {
      question: "Hva er forskjellen på SD og SE?",
      options: ["SD er spredningen mellom personer; SE er presisjonen i gjennomsnittet og krymper med √n", "De er to navn på samme størrelse", "SE beskriver spredningen, SD presisjonen", "SD krymper med større n, SE gjør ikke"],
      explanation: "Feil #6: SE = SD/√n. Større n reduserer SE (presisjonen i snittet), ikke SD (den ekte spredningen).",
    },
    {
      question: "«Med større utvalg blir SD mindre, så dataene blir mindre spredt.» Hvilken feil?",
      options: ["Feil #6 — SD forvekslet med SE", "Feil #2 — Type I/II-forveksling", "Feil #7 — mange t-tester", "Ingen feil"],
      explanation: "Det er SE, ikke SD, som krymper med større n. SD beskriver den ekte spredningen mellom personer og endres ikke systematisk av n.",
    },
    {
      question: "Hvorfor bør fem grupper analyseres med ANOVA og ikke mange parvise t-tester?",
      options: ["Mange parvise t-tester blåser opp den familywise feilraten; ANOVA holder den på α", "ANOVA gir alltid lavere p-verdier", "t-test kan bare brukes på ordinaldata", "ANOVA fjerner behovet for et signifikansnivå"],
      explanation: "Feil #7: fem grupper gir 10 par; ti tester à 5 % gir samlet risiko langt over 5 %. Begrunnelsen (familywise) er selve poenget.",
    },
    {
      question: "En kandidat lister alle utvalgsmetodene uten å velge eller begrunne for caset. Hvilken feil, og hva blir konsekvensen?",
      options: ["Feil #8 — oppramsing uten begrunnelse; det gir C-tak", "Feil #9 — bekvemmelighetsutvalg; det gir stryk", "Feil #15 — utbrodering; det trekker aktivt ned", "Ingen feil — en komplett liste er alltid bra"],
      explanation: "Feil #8 (remsefeilen): en komplett liste uten valg og case-tilpasning kan ikke nå over C uansett hvor fullstendig den er.",
    },
    {
      question: "Hvordan bør et bekvemmelighetsutvalg omtales i konklusjonen?",
      options: ["Navngi det som bekvemmelighetsutvalg med frivillighetsbias og gjør generaliseringen betinget", "Behandle det som representativt hvis det er stort nok", "Anta at frivillige gir det mest representative bildet", "Utelate omtale av rekrutteringen"],
      explanation: "Feil #9: å behandle et selvvalgt utvalg som en miniatyrkopi av populasjonen er en av de sikreste måtene å tape utvalgspoeng på.",
    },
    {
      question: "Oppgaven ber om et kvalitativt forskningsspørsmål, og kandidaten skriver «Reduserer meditasjon eksamensstress?». Hvilken feil?",
      options: ["Feil #10 — hypoteseformet «kvalitativt» spørsmål", "Feil #3 — kausal tolkning av korrelasjon", "Feil #16 — moralprat", "Ingen feil"],
      explanation: "Feil #10: dette er hypoteseformet og ja/nei-besvarbart — T7s eneste stryk-felle. Riktig form har åpent spørreord.",
    },
    {
      question: "Når er en enhalet (retningsbestemt) test tillatt?",
      options: ["Bare når retningen er faglig begrunnet før dataene ble sett", "Alltid, siden den gir lavere p-verdi", "Når utvalget er stort nok", "Aldri — man skal alltid bruke tohalet"],
      explanation: "Feil #11: å velge enhalet (og halvere p) uten forhåndsbegrunnelse trekker. I tvil: velg tohalet.",
    },
    {
      question: "Hvilken hypoteseformulering er korrekt?",
      options: ["H₀: μ = 50 (om populasjonsgjennomsnittet)", "H₀: x̄ = 50 (om utvalgsgjennomsnittet)", "H₀: p = 50", "H₀: SD = 50"],
      explanation: "Feil #12: hypotesene gjelder populasjonen (det ukjente μ), ikke utvalgssnittet vi allerede har målt.",
    },
    {
      question: "Hvorfor er det et problem å oppgi «SD = 8,09» uten mellomregning?",
      options: ["Uten synlig fremgangsmåte kan sensor ikke gi «riktig metode»-uttelling, og én tastefeil feller hele svaret", "Fordi svaret sannsynligvis er feil", "Fordi SD alltid skal oppgis som varians", "Fordi tall aldri skal med i besvarelsen"],
      explanation: "Feil #13 (usynlig utregning): «vis utregningen» er en fast eksamensregel. Sett opp alle ledd og avslutt med tolkning.",
    },
    {
      question: "Hvorfor bør du IKKE besvare alle fire eksamensoppgavene?",
      options: ["Du skal velge tre; sensor ser bort fra den siste, så tiden på den er bortkastet", "Fordi den fjerde alltid er vanskeligst", "Fordi det gir automatisk stryk", "Fordi de fire oppgavene ikke teller likt"],
      explanation: "Feil #14: velg tre bevisst og bruk hele tiden på dem. Alle tre teller likt, så en halvferdig tredjeoppgave er dyr.",
    },
    {
      question: "En kandidat skriver tre avsnitt om kvalitativ metodes historie i en oppgave som ba om ett spørsmål. Hvilken feil?",
      options: ["Feil #15 — «jeg kan også dette»-utbrodering", "Feil #10 — hypoteseformet spørsmål", "Feil #8 — oppramsing uten begrunnelse", "Ingen feil — grundighet lønner seg alltid"],
      explanation: "Feil #15: relevansfilteret. Stoff som ikke besvarer spørsmålet gir null og stjeler tid — det trekker ikke ned, men koster minutter.",
    },
    {
      question: "Hvordan besvares en etikkdeloppgave med uttelling?",
      options: ["Med fagbegreper: informert samtykke, konfidensialitet, trekk-rett, deception og debriefing, anvendt på caset", "Med generelle betraktninger om å behandle folk med respekt", "Ved å understreke at forskning er vanskelig", "Ved å gjengi etikkens filosofiske historie"],
      explanation: "Feil #16: moralprat uten fagbegreper gir ikke uttelling. Navngi og anvend begrepene.",
    },
    {
      question: "Hvilken av disse er den ENESTE feilen med en eksplisitt trekk-instruks i en sensorveiledning?",
      options: ["Feil #1 — p-verdien tolket som sannsynligheten for at H₀ er sann/feil", "Feil #2 — Type I/II-forveksling", "Feil #8 — oppramsing uten begrunnelse", "Feil #14 — å svare på alle fire oppgaver"],
      explanation: "H2018-veiledningen har en eksplisitt trekk-instruks for den gale p-definisjonen. De øvrige er dokumenterte, men uten samme instruks.",
    },
  ],
  'psy1010-8-7': [
    {
      question: "I modellbesvarelsen for korrelasjonsoppgaven (T1) — hvilket ledd er A-skilleren som oftest avgjør om en besvarelse blir stående på C eller løftes til A?",
      options: ["c) — kausalmodellene konfunder/mediator/moderator, TEGNET og case-tilpasset til det konkrete caset", "a) — å oppgi retningen (fortegnet) på korrelasjonen", "d) — å nevne at regresjon bruker en linje", "b) — å skrive slagordet «korrelasjon er ikke kausalitet»"],
      explanation: "c)-leddet er A-skilleren: en besvarelse kan treffe a), b) og d) og likevel bli stående på C hvis modellene i c) bare er DEFINERT, ikke ANVENDT på caset. Retning (a) og slagordet (b) er C-kjerne; regresjonslinjen (d) alene er ikke nok.",
    },
    {
      question: "En kandidat skriver: «$r = -0{,}28$ betyr at gaming senker skoleprestasjonene med 28 %.» Hvilke to feil er dette?",
      options: ["$r$ lest som prosent (det gjelder $r^2 \\approx 8\\,\\%$) OG kausal tolkning av en korrelasjon (#3)", "Feil fortegn lest OG for lav styrke oppgitt", "Manglende konvensjonsforbehold OG feil $r^2$-utregning", "Enhalet i etterkant OG usynlig utregning"],
      explanation: "«28 %» leser $r$ som prosent — den forklarte andelen er $r^2 = (-0{,}28)^2 \\approx 8\\,\\%$. «Senker» er dessuten en kausal slutning fra naturlig variasjon (#3). De to andre alternativene beskriver feil som ikke er i utsagnet.",
    },
    {
      question: "Hva kjennetegner en ærlig C-besvarelse på korrelasjonsoppgaven (til forskjell fra en karikatur)?",
      options: ["Den definerer begrepene korrekt, men blir stående uten å case-tilpasse dem (#8) — og gjør ellers ikke grove feil", "Den er full av grove faktafeil og misforståelser", "Den er identisk med A-besvarelsen bortsett fra lengden", "Den unnlater å svare på tre av fire deloppgaver"],
      explanation: "C er en god, vanlig karakter. Den ærlige C-en kan definisjonene og gjør ikke grove feil — den bare stopper der A begynner: ved å ANVENDE definisjonene på caset (#8, C-taket). Grove feil eller å hoppe over deloppgaver ville gitt lavere.",
    },
    {
      question: "Hvorfor er «regresjon er en videreføring av korrelasjon» en presis beskrivelse?",
      options: ["Regresjon bruker samme sammenheng, men legger til en prediksjonslinje $\\hat{Y}=a+bX$ (hvor mye Y endrer seg per X) — uten å legge til kausalitet", "Regresjon beviser årsakssammenhengen som korrelasjonen bare antydet", "Regresjon gjør et negativt $r$ om til et positivt", "Regresjon erstatter $r$ med $r^2$ og fjerner behovet for å tolke retning"],
      explanation: "Videreføring = samme sammenheng + en prediksjonslinje som gir «hvor mye». Den legger IKKE til kausalitet ($b$ er predikert samvariasjon, ikke årsakseffekt). Regresjon beviser ikke årsak, snur ikke fortegn, og fjerner ikke retningstolkningen.",
    },
    {
      question: "I A-besvarelsen lander konklusjonen SKARPT. Hva kjennetegner den skarpe landingen?",
      options: ["En tydelig, veid konklusjon («ingen kausal slutning») som binder sammen styrke, variasjonstype og det manglende eksperimentet", "Et forsiktig «det kommer an på» som holder alle muligheter åpne", "En påstand om at gaming helt sikkert svekker prestasjonene", "En oppramsing av alt kandidaten kan om korrelasjon"],
      explanation: "Den skarpe landingen er en tydelig, veid konklusjon — ikke et vagt kompromiss og ikke en overdreven påstand. Den sier klart at ingen kausal slutning holder, og hva som skulle til (et eksperiment). Oppramsing ville vært #15.",
    },
  ],
  'psy1010-8-8': [
    {
      question: "I C-besvarelsen står den ene feilen sensor har eksplisitt trekk-instruks for. Hvilken formulering av $p=0{,}046$ er den GALE (feil #1)?",
      options: ["«Det er 4,6 % sannsynlig at $H_0$ er riktig, så vi er 95,4 % sikre på at hukommelsen har endret seg»", "«Hvis $H_0$ var sann, ville vi fått et minst så ekstremt resultat bare 4,6 % av gangene»", "«$p<0{,}05$, så vi forkaster $H_0$ ved 5 %-nivået»", "«$p>0{,}01$, så vi beholder $H_0$ ved 1 %-nivået»"],
      explanation: "Feil #1 er å tolke p som sannsynligheten FOR hypotesen. p er sannsynligheten for DATAENE gitt $H_0$ («hvis $H_0$ var sann …»). De to konklusjonsutsagnene er korrekte α-sammenligninger; den korrekte p-tolkningen har «gitt/hvis $H_0$»-leddet.",
    },
    {
      question: "Med $\\bar{x}=42$, norm $\\mu_0=40$, $n=81$ og tohalet $p=0{,}046$ — hva blir konklusjonen ved henholdsvis $\\alpha=0{,}05$ og $\\alpha=0{,}01$?",
      options: ["Forkast ved 0,05 (0,046 < 0,05), men behold ved 0,01 (0,046 > 0,01) — en vippeverdi", "Forkast ved begge nivåer", "Behold ved begge nivåer", "Behold ved 0,05, forkast ved 0,01"],
      explanation: "$0{,}046<0{,}05$ ⟹ forkast; $0{,}046>0{,}01$ ⟹ behold. Samme data, motsatt konklusjon avhengig av α satt på forhånd — en klassisk vippeverdi. Et strengere α gjør det aldri LETTERE å forkaste.",
    },
    {
      question: "Kollegaen vil halvere utvalget (fra 81 til ~40). Hva gjør det med testens styrke, og via hvilken kjede?",
      options: ["Senker power: mindre $n$ ⟹ større $SE=SD/\\sqrt{n}$ ⟹ mindre testobservator ⟹ større p ⟹ vanskeligere å forkaste en falsk $H_0$", "Øker power fordi færre deltakere gir mindre støy", "Endrer ingenting, siden p allerede er oppgitt", "Senker power ved å redusere $SD$ (spredningen mellom personer)"],
      explanation: "Power = $1-\\beta$ synker fordi mindre $n$ gir STØRRE $SE$ (bredere utvalgsfordeling), mindre testobservator og større p. Det er $SE$, ikke $SD$, som endres — å tro $n$ krymper $SD$ er en fast felle.",
    },
    {
      question: "I f)-leddet foreslår en kollega å endre hypotesen etter at dataene er analysert. Hva heter dette, og hva forebygger det?",
      options: ["HARKing (hypotese etter resultatet); forebygges av pre-registrering, som skiller konfirmerende fra eksplorative analyser", "Type II-feil; forebygges av et større utvalg", "Enhalet testing; forebygges av å velge tohalet", "Publikasjonsbias; forebygges av fagfellevurdering"],
      explanation: "Å skreddersy hypotesen til tallene og utgi den for å ha vært der på forhånd er HARKing. Pre-registrering låser hypotese/analyseplan tidsstemplet FØR data, og skiller konfirmerende (planlagt) fra eksplorative (utforskende, men merkes) funn.",
    },
    {
      question: "Hvorfor gjelder hypotesene $\\mu$ (populasjonssnittet) og ikke $\\bar{x}$ (utvalgssnittet)?",
      options: ["Utvalgssnittet kjenner vi allerede (42); poenget er å slutte til det ukjente populasjonssnittet — å skrive $H_0:\\bar{x}=40$ er feil #12", "Fordi $\\mu$ alltid er lik $\\bar{x}$ i store utvalg", "Fordi $\\bar{x}$ er en gresk bokstav og $\\mu$ er latinsk", "Fordi tohalet test krever $\\mu$, mens enhalet krever $\\bar{x}$"],
      explanation: "En test slutter fra det vi ser (utvalget, $\\bar{x}=42$) til det vi ikke vet (populasjonen, $\\mu$). Å teste et tall vi allerede kjenner er meningsløst; $H_0:\\bar{x}=40$ er feil #12. De andre påstandene er faktisk gale.",
    },
  ],
  'psy1010-8-9': [
    {
      question: "Den kvalitative oppgaven (T7) skiller seg fra korrelasjons- og hypotesetestingsmodellene ved at poenget er det motsatte. Hva menes med det?",
      options: ["Her handler det om å vise hvor LITE som skal til — C-kjernen er i praksis et toppsvar, og A-laget er tynt", "Her kreves det MER drøfting og dypere analyse enn i de andre oppgavene", "Her teller regneferdighet mer enn i de andre oppgavene", "Her finnes det ingen riktige svar, bare meninger"],
      explanation: "T7 har eksplisitt lave karakterkrav: to–tre kjernepoenger per spørsmål er et toppsvar. Derfor er C-kjernen her i praksis full uttelling, og A-laget (presis livsverden, det uventede) er tynt. Det er fagets billigste tredjedel.",
    },
    {
      question: "Hvilket av disse er den ENE stryk-fellen (feil #10) på den kvalitative oppgaven?",
      options: ["Å levere et hypoteseformet/ja-nei-spørsmål (f.eks. «Fører lesesalbruk til bedre karakterer?») der det bes om et kvalitativt", "Å bruke ordet «livsverden» upresist", "Å svare litt for kort på kjennetegnene", "Å nevne at spørsmålet styrer metoden"],
      explanation: "Feil #10 er den kvalitative oppgavens eneste stryk-felle: et hypoteseformet, ja/nei-besvarbart spørsmål levert der oppgaven ber om et åpent kvalitativt ett. De andre punktene koster på sin høyde en A-markør, ikke stryk.",
    },
    {
      question: "En kandidat fyller a)-leddet med tre avsnitt om kvalitativ metodes historie, koding og transkribering — alt riktig, men ikke det oppgaven spurte om. Hvilken feil er dette?",
      options: ["Feil #15 — «jeg kan også dette»-utbrodering som gir null uttelling og stjeler tid (relevansfilteret)", "Feil #10 — hypoteseformet forskningsspørsmål", "Feil #1 — gal p-tolkning", "Feil #3 — kausal tolkning av korrelasjon"],
      explanation: "Riktig kunnskap som ikke svarer på spørsmålet er #15-utbrodering: den trekker ikke direkte ned, men gir null og stjeler tiden du trengte til A-skillene i de andre oppgavene. På fagets billigste oppgave er tidssløsing den dyreste feilen.",
    },
    {
      question: "Hva er de tre kjennetegnene ved et gyldig kvalitativt forskningsspørsmål?",
      options: ["Åpent spørreord (hvordan/hva/hvilke), ikke en hypotese, ikke ja/nei", "Retning, styrke og forbehold", "Randomisering, kontrollgruppe og blinding", "Populasjon, utvalg og standardfeil"],
      explanation: "Et kvalitativt forskningsspørsmål har åpent spørreord, påstår ingenting (ikke hypotese) og kan ikke besvares med ja/nei. Malen «Hvordan opplever [gruppe] [fenomen]?» treffer alltid alle tre. De andre alternativene hører til andre oppgavetyper.",
    },
    {
      question: "Hva er den viktigste «oppgraderingen» på den kvalitative oppgaven — gitt at C-kjernen allerede er et toppsvar?",
      options: ["Tidsdisiplin: bruk ~40 min her og invester de sparte minuttene i A-skillene i korrelasjons- og hypotesetestingsoppgaven", "Å skrive et mye lengre og mer detaljert svar", "Å ta med faghistorien for å vise bredde", "Å legge til en statistisk analyse av intervjudataene"],
      explanation: "Siden C-kjernen er full uttelling, ligger den største gevinsten i tidsstrategien: den kvalitative oppgaven skal gå raskt og frigjøre A-skille-tid til de andre oppgavene. Lengre svar, faghistorie (null uttelling) eller statistikk hjelper ikke.",
    },
  ],
};

export default quizData_psy1010;
