import type { QuizQuestion } from './quiz-data';

const quizData_econ1210: Record<string, QuizQuestion[]> = {
  'econ1210-0-1': [
    {
      question: "Hvor stor andel av eksamen utgjør den store markedsoppgaven (oppgave 2) typisk?",
      options: ["50–60 %", "10–20 %", "30–40 %", "Alltid nøyaktig 25 %"],
      explanation: "Den store FK-markedsoppgaven bærer alltid tyngden, typisk 50–60 %. Begrepene (oppgave 1) er 10–20 % og tema-oppgaven (oppgave 3) er 30–40 %.",
    },
    {
      question: "Hva kreves for full uttelling når en oppgave sier «Forklar ved hjelp av en figur»?",
      options: ["Både en korrekt, merket figur og mekanismen forklart i ord", "En figur med så mange kurver som mulig", "En pen og fargelagt figur er nok, siden sensor ser mekanismen selv", "En ren verbal forklaring holder, for figuren er bare pynt på svaret"],
      explanation: "Sensors metaregel: figur og forklaring er én leveranse. Figur uten forklaring – eller forklaring uten figur – er et halvt svar.",
    },
    {
      question: "Hvilket tema har 100 % frekvens (er med i alle 16 ordinære sett)?",
      options: ["FK-likevekt og kurveskift", "Konsumentteori med budsjettlinje", "Spillteori og Nash-likevekt, som er kjernen i alle nyere sett", "Nåverdi og lønnsomhetsvurdering"],
      explanation: "FK-likevekt + kurveskift og velferdsvurdering er de eneste med 100 % frekvens. Spillteori (borte siden V2020) og nåverdi (borte siden V2021) er beredskapsstoff.",
    },
    {
      question: "Hvilken tilbudsmodell bygger boka og pensum på fra og med H2024?",
      options: ["Anleggsmodellen med konstante enhetskostnader", "U-formede gjennomsnittskostnader", "Cournot-modellen der to bedrifter velger mengde samtidig", "Nyttefunksjons-modellen med avtakende marginalnytte per enhet"],
      explanation: "Fra H2024 er anleggsmodellen (CORE) pensumets tilbudsmodell. Den gamle produsentteorien med gjennomsnittskostnader er nedtonet til sekundærstoff.",
    },
    {
      question: "Eksamen er 240 minutter og vektet 10/50/40. Hvor mange minutter bør du grovt sette av til oppgave 2?",
      options: ["Cirka 120 minutter", "Cirka 60 minutter", "Cirka 24 minutter, tilsvarende den minste av de tre delvektene", "Cirka 96 minutter"],
      explanation: "50 % av 240 minutter = 120 minutter. Tiden bør følge poengene, så den store oppgaven får mest.",
    },
    {
      question: "Hva er riktig om karakterskalaen i ECON1210?",
      options: ["C er en god og vanlig karakter, og E er laveste ståkarakter", "Det gis tallkarakter fra 1 til 6", "Bare A og B regnes som bestått, resten teller som stryk på eksamen", "F er beste karakter, mens A er den svakeste ståkarakteren i skalaen"],
      explanation: "Skalaen er A–F der A er best og E laveste ståkarakter. C er den vanligste og en fullt forsvarlig karakter.",
    },
    {
      question: "Hva sier sensorregelen om tall i svarene dine?",
      options: ["Tall skal alltid tolkes med ord", "Tall gir full uttelling uten kommentar", "Bare regnestykket teller, ikke tolkningen", "Man skal aldri oppgi tall"],
      explanation: "En elastisitet eller delingsbrøk gir ikke full uttelling før du har forklart hva tallet betyr i markedet (feilkatalog #6).",
    },
    {
      question: "Hvilke to tema roterer oppgave 3 (tema-oppgaven) mellom i nyere sett?",
      options: ["Klimapolitikk og monopol/markedsmakt", "Nasjonalregnskap og pengepolitikk", "Konsumentteori med budsjettlinje og internasjonal handelsgevinst", "Konsumentteori og handel"],
      explanation: "Oppgave 3 roterer mellom klima-/miljøpolitikk og monopol/markedsmakt, med arbeidsmarked og spillteori som historiske alternativer.",
    },
    {
      question: "Hva er 'lekkasje-poenget' ved et tilbudskutt?",
      options: ["Omsatt mengde faller mindre enn produksjonsbortfallet fordi høyere pris gjør flere anlegg lønnsomme", "Staten taper skatteinntekter fordi den samlede omsatte mengden faller kraftig", "Prisen faller når anlegg forsvinner fordi restanleggene konkurrerer hardere", "Kjøperne slutter helt å kjøpe godet siden prisen presses langt over toppen"],
      explanation: "Når lønnsomme anlegg faller bort, gjør den høyere prisen tidligere ulønnsomme anlegg lønnsomme, så mengdefallet blir mindre enn bortfallet. En fast toppmarkør fra H2024.",
    },
    {
      question: "Hva er den beste lesestrategien ut fra frekvens og vekt?",
      options: ["Prioriter Del 1–5 (marked, velferd, skatt, klima, monopol) høyest", "Start med spillteori og nåverdi, som er de temaene sensorveiledningene omtaler grundigst", "Les alt like grundig uansett frekvens, slik at ingen del blir nedprioritert", "Pugg begrepene knallhardt utenat, siden definisjoner gir flest poeng på eksamen"],
      explanation: "Del 1–5 bærer det aller meste av poengene og er «må perfekt». Begrepene er «må kunne», og Del 7 (spill/nåverdi/konsument) er «bør kjenne»-beredskap.",
    },
  ],
  'econ1210-1-1': [
    {
      question: "Hva viser høyden på markedets etterspørselskurve ved en gitt mengde?",
      options: ["Den marginale betalingsvilligheten for siste enhet", "Den gjennomsnittlige betalingsvilligheten til alle kjøperne i markedet", "Hvor mange enheter som selges totalt til denne prisen", "Selgernes marginalkostnad ved å produsere siste enhet"],
      explanation: "Høyden på etterspørselskurven ved en mengde er verdien av den siste enheten for kjøperen som får den — marginal betalingsvillighet. Dette er en fast pluss-markør.",
    },
    {
      question: "Hvordan fremkommer markedets etterspørselskurve fra kjøpernes individuelle kurver?",
      options: ["Ved horisontal summering av mengdene ved hver pris", "Ved å multiplisere kurvene med hverandre", "Ved å ta det enkle gjennomsnittet av kjøpernes kurver", "Ved vertikal summering av prisene ved hver enkelt mengde"],
      explanation: "For hver pris legger vi sammen hvor mye hver kjøper vil ha (mengdene, langs den vannrette aksen). Det er horisontal summering.",
    },
    {
      question: "I formen x = a − bp, hva er a?",
      options: ["Metningsmengden: etterspurt mengde når prisen er null", "Prisen der etterspurt mengde akkurat blir lik null", "Prisfølsomheten: fallet i mengde per krone prisøkning", "Den marginale betalingsvilligheten for den siste enheten"],
      explanation: "Ved p = 0 blir x = a, så a er den mengden som etterspørres når godet er gratis — metningsmengden.",
    },
    {
      question: "Prisen på et gode settes opp. Hva skjer i etterspørselsdiagrammet?",
      options: ["Vi beveger oss langs den samme etterspørselskurven til et nytt punkt", "Hele etterspørselskurven skifter innover", "Hele etterspørselskurven skifter utover mot høyre til høyere mengder", "Etterspørselskurven blir brattere fordi kjøperne blir mer prisfølsomme"],
      explanation: "En endring i godets EGEN pris gir en bevegelse LANGS kurven, ikke et skift. Bare andre faktorer skifter selve kurven (feilkatalog #1).",
    },
    {
      question: "Kjøpernes inntekt øker (vanlig gode). Hva skjer med etterspørselskurven?",
      options: ["Den skifter utover (til høyre)", "Den skifter innover (til venstre)", "Vi beveger oss oppover langs kurven", "Etterspørselskurven blir liggende i ro"],
      explanation: "Høyere inntekt gir større etterspørsel ved enhver pris for et vanlig gode — hele kurven skifter utover.",
    },
    {
      question: "Etterspørselen er x = 300 − 2p. Hva er den marginale betalingsvilligheten ved x = 200?",
      options: ["50 kroner", "100 kroner", "200 kroner", "150 kroner"],
      explanation: "200 = 300 − 2p gir 2p = 100, altså p = 50. Høyden på etterspørselskurven ved x = 200 er 50 kroner.",
    },
    {
      question: "Prisen på et substitutt til godet stiger. Hvordan påvirkes godets etterspørselskurve?",
      options: ["Den skifter utover (til høyre)", "Den skifter innover (til venstre)", "Vi beveger oss langs kurven", "Kurven blir loddrett"],
      explanation: "Når substituttet blir dyrere, vender kjøpere seg mot dette godet ved enhver pris → skift utover.",
    },
    {
      question: "Prisen på et komplement (brukes sammen med godet) stiger. Hva skjer med godets etterspørselskurve?",
      options: ["Den skifter innover (til venstre)", "Den skifter utover (til høyre)", "Vi beveger oss bare langs den samme kurven til et nytt punkt", "Kurven blir brattere enn før"],
      explanation: "Dyrere komplement (f.eks. bensin til bil) reduserer etterspørselen etter godet ved enhver pris → skift innover.",
    },
    {
      question: "Etterspørselen er x = 600 − 3p. Ved hvilken pris blir etterspurt mengde null?",
      options: ["200 kroner", "600 kroner", "300 kroner", "3 kroner"],
      explanation: "Sett x = 0: 0 = 600 − 3p gir p = 200. Ved 200 kroner eller mer kjøper ingen (choke-prisen a/b).",
    },
    {
      question: "Hva betyr tallet b i x = a − bp?",
      options: ["Hvor mange enheter etterspørselen faller når prisen stiger med én krone", "Den marginale betalingsvilligheten for den aller siste solgte enheten", "Elastisiteten: den prosentvise endringen i mengde per prosent prisøkning", "Metningsmengden: hvor mye som etterspørres når godet er helt gratis"],
      explanation: "b er prisfølsomheten: fallet i etterspurt mengde per krone prisøkning. Stor b gir slak kurve, liten b gir bratt kurve.",
    },
    {
      question: "Hvorfor faller etterspørselskurven mot høyre?",
      options: ["Kjøperne rangeres etter betalingsvillighet fra høyest til lavest, så høyden synker", "Fordi tilbudet stiger og presser prisen nedover langs mengdeaksen", "Fordi prisen på godet alltid stiger over tid uansett etterspørsel", "Fordi staten legger på en avgift som trekker hele kurven nedover"],
      explanation: "De enhetene som verdsettes høyest ligger til venstre; for å selge flere må prisen ned til kjøpere med lavere betalingsvillighet.",
    },
    {
      question: "På hvilken form skriver denne boka alltid etterspørsel?",
      options: ["Mengde som funksjon av pris: x = a − bp", "Som en andregradsfunksjon", "Invers form: p = a − bx", "Som en tabell over pris og mengde"],
      explanation: "Vi isolerer alltid mengden x på venstre side. Den inverse formen p = ... brukes aldri som oppgaveform i faget.",
    },
    {
      question: "Hvilken akse tegnes prisen på i mikroøkonomiske diagrammer?",
      options: ["Den loddrette (vertikale) aksen", "Den vannrette aksen", "Det spiller ingen rolle", "Prisen tegnes alltid i origo"],
      explanation: "Konvensjonen er alltid pris p loddrett og mengde x vannrett. Aksene skal merkes slik på hver figur.",
    },
    {
      question: "To kjøpere: A vil ha x = 40 − 2p, B vil ha x = 30 − p. Hva er markedets etterspurte mengde ved p = 10?",
      options: ["40", "50", "30", "70"],
      explanation: "A: 40 − 20 = 20. B: 30 − 10 = 20. Sum = 40. Vi summerer mengdene horisontalt ved samme pris.",
    },
    {
      question: "Hva er en typisk feil når man forklarer virkningen av et dyrere substitutt?",
      options: ["Å si 'prisen ble høyere så etterspørselen falt' – det beskriver bevegelse langs kurven, ikke skiftet", "Å bruke bokstaven E i stedet for D som navn på etterspørselskurven", "Å nevne kjøpernes betalingsvillighet når man plasserer kurven", "Å tegne og merke aksene før man begynner på selve figuren"],
      explanation: "Substituttets prisøkning gir et skift utover av godets etterspørselskurve. Bevegelses-språket hører til godets egen prisendring (feilkatalog #1).",
    },
    {
      question: "Hva kjennetegner den individuelle etterspørselskurven sammenlignet med markedets?",
      options: ["Markedskurven er slakere fordi mengdene legges sammen ved hver pris", "De er alltid helt identiske siden markedet består av like kjøpere", "Den individuelle kurven er alltid slakere fordi den dekker flere enheter", "Markedskurven stiger mot høyre fordi flere kjøpere kommer til ved høy pris"],
      explanation: "Ved horisontal summering blir markedskurven mer prisfølsom i absolutte tall (slakere) enn hver enkelt kjøperkurve.",
    },
    {
      question: "Hva menes med 'marginal' i marginal betalingsvillighet?",
      options: ["Knyttet til den siste (neste) enheten", "Gjennomsnittet over alle enheter", "Markedets laveste pris", "Noe som betyr lite for helheten"],
      explanation: "Marginal betyr alltid 'ved siste enhet'. Marginaltenkning går igjen: marginalkostnad, marginalinntekt osv.",
    },
    {
      question: "En reklamekampanje gjør et gode mer populært. Skift eller bevegelse, og retning?",
      options: ["Skift utover", "Bevegelse langs kurven oppover", "Skift innover", "Bevegelse langs kurven nedover"],
      explanation: "Popularitet er en preferanseendring (ikke godets egen pris), så hele kurven skifter — og utover, siden godet blir mer verdt.",
    },
    {
      question: "Hva er choke-prisen (nullpunktet) for x = 800 − 4p?",
      options: ["200 kroner", "800 kroner", "4 kroner", "400 kroner"],
      explanation: "Sett x = 0: 4p = 800, p = 200. Det er a/b = 800/4 = 200, prisen der ingen lenger kjøper.",
    },
    {
      question: "Hva er et homogent gode?",
      options: ["Et gode der alle enhetene oppfattes som like uansett selger", "Et gode som bare finnes i én kvalitet fra én bestemt produsent", "Et gode som ingen kjøpere vil ha selv om prisen settes svært lavt", "Et gode som har uvanlig mange nære substitutter i det samme markedet"],
      explanation: "Når enhetene er like, bryr kjøperne seg bare om prisen. Dette er en forutsetning for det senere FK-markedet.",
    },
  ],
  'econ1210-1-2': [
    {
      question: "Hvordan fremkommer markedets tilbudskurve i anleggsmodellen?",
      options: ["Ved å rangere anleggene etter enhetskostnad, billigst først", "Ved å rangere anleggene etter kapasitet, med det største først", "Ved å summere anleggenes gjennomsnittskostnader ved hver mengde", "Ved å ta gjennomsnittsproduktiviteten på tvers av alle anleggene"],
      explanation: "Tilbudskurven bygges ved å stille anleggene i kø etter enhetskostnad. Høyere pris gjør flere (dyrere) anlegg lønnsomme, så kurven stiger.",
    },
    {
      question: "Hva viser høyden på tilbudskurven ved en gitt mengde?",
      options: ["Marginalkostnaden – enhetskostnaden i det dyreste anlegget i drift", "Den marginale betalingsvilligheten hos kjøperen av siste enhet", "Gjennomsnittskostnaden regnet over alle anlegg som er i drift", "Statens skatteinntekt fra det dyreste anlegget som er i drift"],
      explanation: "Høyden er enhetskostnaden i det dyreste anlegget som er i drift, altså marginalkostnaden for siste enhet. En fast pluss-markør.",
    },
    {
      question: "Et anlegg har konstant enhetskostnad. Hvor mye produserer det når prisen så vidt overstiger enhetskostnaden?",
      options: ["For full kapasitet", "Bare litt over null", "Halv kapasitet", "Ingenting"],
      explanation: "Med konstant enhetskostnad lønner hver enhet seg når p ≥ enhetskostnaden, så anlegget kjører for full kapasitet – enten alt eller ingenting.",
    },
    {
      question: "Sabotasje setter flere lønnsomme anlegg ut av spill. Hva skjer med tilbudskurven og hva er mekanismen?",
      options: ["Skift innover; mekanismen er redusert antall anlegg", "Skift utover; mekanismen er lavere enhetskostnader", "Ingenting endres, fordi de tapte anleggene erstattes av tilsvarende nye", "Bevegelse langs kurven; anleggene endrer bare tilpasningen til dagens pris"],
      explanation: "Færre anlegg gir mindre kapasitet ved enhver pris → tilbudskurven skifter inn. Mekanismen er endret (redusert) antall anlegg, ikke endrede enhetskostnader.",
    },
    {
      question: "Strømmen blir dyrere for alle produsenter. Hvordan skifter tilbudskurven?",
      options: ["Parallelt opp/inn – endrede enhetskostnader", "Bevegelse langs kurven til et nytt punkt lenger oppe", "Utover mot høyre – flere anlegg blir nå lønnsomme å drive", "Innover mot venstre – færre anlegg er igjen i drift i markedet"],
      explanation: "Dyrere innsatsfaktor hever enhetskostnaden i alle anlegg → parallellskift opp. Mekanismen er endrede enhetskostnader.",
    },
    {
      question: "Tilbudet er x = 2p − 100. Ved hvilken pris begynner det å komme tilbud?",
      options: ["50 kroner", "100 kroner", "2 kroner", "200 kroner"],
      explanation: "Sett x = 0: 2p = 100 gir p = 50. Under 50 kroner er ingen anlegg lønnsomme (tilbudsstart d/c).",
    },
    {
      question: "Hvilken forutsetning må være oppfylt for at markedets tilbudskurve skal finnes?",
      options: ["Selgerne er pristakere (mange små tilbydere) og godet er homogent", "Det finnes bare én selger som setter prisen for hele markedet", "Prisen fastsettes av staten og ligger fast uansett tilbud og mengde", "Alle anlegg har nøyaktig samme enhetskostnad, ellers finnes ingen kurve"],
      explanation: "Med mange små tilbydere og et homogent gode tar hvert anlegg prisen for gitt. Én dominerende aktør gir monopol, ikke en vanlig tilbudskurve.",
    },
    {
      question: "Hva er den vanligste modell-feilen når man forklarer tilbudet etter H2024?",
      options: ["Å utlede tilbudskurven fra U-formede gjennomsnittskostnader", "Å utlede tilbudskurven fra kjøpernes marginale betalingsvillighet", "Å rangere anleggene etter enhetskostnad med det billigste først", "Å tegne prisen loddrett og mengden vannrett i tilbudsdiagrammet"],
      explanation: "Fasitene bruker nå anleggsmodellen. Å bruke gammel produsentteori med gjennomsnittskostnader er å bruke feil pensummodell.",
    },
    {
      question: "I x = cp − d, hva er c?",
      options: ["Tilbudets prisfølsomhet: økning i x per krone prisøkning", "Prisen der tilbudet så vidt begynner å komme inn i markedet", "Antall anlegg som er i drift ved den gjeldende markedsprisen", "Enhetskostnaden i det dyreste anlegget som er lønnsomt å drive"],
      explanation: "c måler hvor mange enheter tilbudt mengde stiger for hver krone prisen øker. Stor c gir slak tilbudskurve, liten c gir bratt.",
    },
    {
      question: "Enhetskostnaden i et anlegg er konstant. Hva er da forholdet til marginalkostnaden?",
      options: ["Enhetskostnaden er lik marginalkostnaden", "Enhetskostnaden er dobbelt så stor", "De har ingen fast sammenheng", "Marginalkostnaden er null"],
      explanation: "Fordi kostnaden per enhet ikke endrer seg med mengden, koster den siste enheten det samme som alle andre — enhetskostnad = marginalkostnad.",
    },
    {
      question: "Fire anlegg med kapasitet 100 hver og enhetskostnader 20, 40, 60, 80. Hvor mye tilbys ved p = 50?",
      options: ["200", "100", "300", "400"],
      explanation: "Anleggene med enhetskostnad 20 og 40 lønner seg (50 ≥ 40, men 50 < 60). Det gir 100 + 100 = 200 enheter.",
    },
    {
      question: "Prisen på selve godet stiger. Hva skjer med tilbudet?",
      options: ["Bevegelse langs tilbudskurven – flere eksisterende anlegg kommer i drift", "Tilbudskurven skifter innover fordi produsentene holder tilbake mengden sin", "Tilbudskurven blir loddrett fordi tilbudt mengde nå er fastlåst uansett prisen på godet", "Hele tilbudskurven skifter utover fordi produsentene ønsker å selge mer til den nye prisen"],
      explanation: "Godets egen pris gir bevegelse langs kurven, ikke skift. Flere av de eksisterende anleggene blir lønnsomme (feilkatalog #1).",
    },
    {
      question: "Hvorfor stiger tilbudskurven?",
      options: ["Fordi høyere pris gjør stadig dyrere anlegg lønnsomme", "Fordi enhetskostnadene alltid synker", "Fordi enhetskostnadene synker med hvert nye anlegg som settes i drift i markedet", "Fordi etterspørselen faller"],
      explanation: "Anleggene er rangert etter enhetskostnad. Jo høyere pris, jo flere (dyrere) anlegg blir lønnsomme og kommer i drift.",
    },
    {
      question: "Utenlandske produsenter får slippe inn i markedet. Hvordan skifter tilbudskurven?",
      options: ["Utover – økt antall anlegg", "Innover – færre anlegg", "Parallelt opp – dyrere drift", "Ingen skift"],
      explanation: "Flere anlegg gir større kapasitet ved enhver pris → tilbudskurven skifter ut. Mekanismen er økt antall anlegg.",
    },
    {
      question: "Hva menes med at et anlegg produserer 'for full kapasitet eller null'?",
      options: ["Det kjører maks hvis p ≥ enhetskostnaden, ellers står det stille", "Det produserer til enhver tid nøyaktig den mengden markedet etterspør", "Det tilpasser mengden gradvis oppover ettersom prisen stiger over enhetskostnaden", "Det kjører alltid på halv kapasitet for å holde igjen og presse markedsprisen oppover"],
      explanation: "Med konstant enhetskostnad finnes ikke noe optimalt mellomnivå – hver enhet gir samme overskudd/tap, så det er alt eller ingenting.",
    },
    {
      question: "Tilbudet er x = 3p − 150. Hva er marginalkostnaden for siste enhet ved x = 150?",
      options: ["100 kroner", "50 kroner", "150 kroner", "300 kroner"],
      explanation: "150 = 3p − 150 gir 3p = 300, altså p = 100. Høyden på tilbudskurven ved x = 150 er marginalkostnaden = 100 kr.",
    },
    {
      question: "Hva er høyden på tilbudskurven et uttrykk for, sett fra samfunnets side?",
      options: ["Alternativkostnaden ved å lage den siste enheten", "Kjøpernes betalingsvillighet", "Kjøpernes marginale betalingsvillighet for den siste enheten som omsettes", "Den totale profitten"],
      explanation: "Marginalkostnaden er også alternativkostnaden ved å bruke ressursene til nettopp denne enheten – viktig i velferdsanalysen senere.",
    },
    {
      question: "Hva er tilbudsstart i x = cp − d?",
      options: ["Prisen p = d/c der tilbudet begynner", "Mengden ved p = 0", "Enhetskostnaden i billigste anlegg", "Den maksimale kapasiteten"],
      explanation: "Sett x = 0: cp = d, altså p = d/c. Under denne prisen er ingen anlegg lønnsomme, og tilbudskurven treffer prisaksen her.",
    },
    {
      question: "Hvorfor er den klassiske produsentteorien (gjennomsnittskostnader) bare sekundærstoff i boka?",
      options: ["Fordi pensum og fasiter bruker anleggsmodellen fra H2024", "Fordi anleggsmodellen er langt lettere å regne på for studentene", "Fordi gjennomsnittskostnadsmodellen aldri har vært en del av pensum i dette emnet", "Fordi selve matematikken i gjennomsnittskostnadene bygger på en logisk feilslutning"],
      explanation: "Fra H2024 er anleggsmodellen (CORE) pensumets tilbudsmodell. Den gamle teorien nevnes bare for å kjenne den igjen i eldre oppgaver.",
    },
    {
      question: "Hva kalles kurvene i denne boka, og hvorfor er det viktig?",
      options: ["Etterspørselskurven (etterspørsel) og tilbudskurven (tilbud) – aldri D/S", "Prislinjen og mengdelinjen, som er de innarbeidede norske fagnavnene på dem", "D-kurven (demand) og S-kurven (supply), slik den engelske standarden bruker dem", "Kostnadskurven og inntektskurven, siden tilbud og etterspørsel er avledet av disse"],
      explanation: "Boka bruker konsekvent E (etterspørsel) og T (tilbud) i tråd med den norske notasjonsstandarden i emnet.",
    },
  ],
  'econ1210-1-3': [
    {
      question: "Hvor ligger markedslikevekten grafisk?",
      options: ["Der etterspørselskurven og tilbudskurven krysser", "Der etterspørselskurven treffer prisaksen", "Der tilbudskurven treffer mengdeaksen", "I origo, der begge kurvene starter"],
      explanation: "Likevekten er punktet der etterspurt mengde er lik tilbudt mengde – altså der de to kurvene skjærer hverandre.",
    },
    {
      question: "Hva er likevektsprisen for x = a − bp og x = cp − d?",
      options: ["p* = (a+d)/(b+c)", "p* = (a−d)/(b−c)", "p* = (a+d)·(b+c)", "p* = a/b − d/c"],
      explanation: "Sett a − bp = cp − d og samle p-leddene: a + d = (b+c)p, altså p* = (a+d)/(b+c).",
    },
    {
      question: "Prisen er over likevektsprisen. Hva oppstår?",
      options: ["Tilbudsoverskudd, og prisen presses ned", "Etterspørselsoverskudd, og prisen presses opp", "Likevekt, siden kurvene fortsatt krysser hverandre", "Ingenting; prisen blir liggende der den er"],
      explanation: "Over p* tilbys mer enn det etterspørres. Selgerne senker prisen for å få solgt, så prisen faller mot p*.",
    },
    {
      question: "Prisen er under likevektsprisen. Hva oppstår?",
      options: ["Etterspørselsoverskudd, og prisen presses opp", "Tilbudsoverskudd, og prisen presses ned", "Markedet klarerer likevel, fordi kjøperne betaler mer enn listeprisen", "Kurvene skifter plass, slik at tilbudet nå ligger øverst"],
      explanation: "Under p* etterspørres mer enn det tilbys. Kjøperne byr opp om de knappe varene, så prisen stiger mot p*.",
    },
    {
      question: "Etterspørsel x = 900 − 3p, tilbud x = p − 100. Hva er likevektsprisen?",
      options: ["250", "150", "200", "300"],
      explanation: "900 − 3p = p − 100 gir 1000 = 4p, altså p* = 250.",
    },
    {
      question: "Med samme kurver (x = 900 − 3p, x = p − 100): hva er likevektsmengden?",
      options: ["150", "250", "100", "300"],
      explanation: "x* = 900 − 3·250 = 150. Kontroll: 250 − 100 = 150. ✓",
    },
    {
      question: "Hvilke to forutsetninger ligger bak fullkommen konkurranse?",
      options: ["Mange små pristakere og et homogent gode", "Én stor selger og et unikt gode", "Én stor selger som setter prisen, og et unikt gode uten nære substitutter", "Statlig prissetting og monopol"],
      explanation: "FK krever mange små aktører (pristakere) og et homogent gode, så ingen kan påvirke prisen og kjøperne bare bryr seg om prisen.",
    },
    {
      question: "Hvorfor bør man kontrollere likevektsmengden i begge funksjoner?",
      options: ["For å avsløre eventuelle regnefeil", "For å bestemme skattesatsen", "For å kunne lese av priselastisiteten direkte i selve likevektspunktet", "For å finne elastisiteten"],
      explanation: "Får du ulikt x* i de to funksjonene, er det en regnefeil et sted. Kontrollen er billig forsikring.",
    },
    {
      question: "Hva kreves for et fullt svar på 'forklar ved hjelp av en figur'?",
      options: ["Både en fullt merket figur og mekanismen i ord", "Bare en verbal forklaring uten figur", "En pen og ryddig figur er nok, siden den taler for seg selv uten videre ord", "En tabell med tall for pris og mengde i stedet for en figur"],
      explanation: "Sensor krever begge deler samtidig. Figur uten forklaring – eller forklaring uten figur – er halvt svar.",
    },
    {
      question: "Hva sier prismekanismen?",
      options: ["Overskudd/underskudd av tilbud driver prisen mot p*", "Prisen følger bare etterspørselen", "Prisen settes alltid av staten for å hindre at markedet klarerer på egen hånd", "Prisen bestemmes av produksjonskostnaden alene, uavhengig av kjøperne"],
      explanation: "Tilbudsoverskudd presser prisen ned, etterspørselsoverskudd presser den opp, helt til markedet klarerer i p*.",
    },
    {
      question: "Etterspørsel x = 480 − 3p, tilbud x = 2p − 120. Likevektspris?",
      options: ["120", "100", "150", "60"],
      explanation: "480 − 3p = 2p − 120 gir 600 = 5p, altså p* = 120.",
    },
    {
      question: "Hva betyr det at markedet 'klarerer'?",
      options: ["Alt som tilbys blir kjøpt, og alle som vil kjøpe får", "Alle selgere går konkurs fordi prisen presses under kostnadene", "Staten griper inn og fordeler varene når tilbud og etterspørsel ikke stemmer", "Prisen faller helt til null slik at alle kjøperne får varen de ønsker seg gratis"],
      explanation: "Klarering skjer i likevekt: ingen varer blir stående usolgt, og ingen kjøper står uten – ved p*.",
    },
    {
      question: "I p* = (a+d)/(b+c), hva er b + c?",
      options: ["Summen av etterspørselens og tilbudets prisfølsomhet", "Likevektsmengden x* som følger direkte av de to kurvene", "Metningsmengden, altså mengden som etterspørres når prisen er lik null", "Skattesatsen som legges på godet, uttrykt som summen av de to helningene b og c"],
      explanation: "b er etterspørselens prisfølsomhet, c er tilbudets. Summen b+c er markedets samlede prisfølsomhet og går igjen i delingsformelen senere.",
    },
    {
      question: "Hva viser høyden på etterspørselskurven og tilbudskurven i likevektspunktet?",
      options: ["De er like: marginal betalingsvillighet = marginalkostnad", "Begge høydene er null, fordi hele overskuddet er brukt opp i likevekten", "Tilbudskurven ligger alltid høyest fordi kostnadene overstiger betalingsvilligheten", "Etterspørselskurven ligger dobbelt så høyt som tilbudskurven fordi kjøperne verdsetter godet mest"],
      explanation: "I likevekt er betalingsvilligheten for siste enhet lik kostnaden ved den – kurvene møtes i samme høyde p*.",
    },
    {
      question: "Første punkt i figurmalen er:",
      options: ["Merk aksene (p loddrett, x vannrett)", "Regn ut priselastisiteten i likevektspunktet", "Skriv konklusjonen øverst så leseren vet hva figuren skal ende opp med å vise", "Velg en skala som får kurvene til å krysse midt i figuren"],
      explanation: "Figurmalen starter alltid med merkede akser. Deretter navngis kurvene, likevekten markeres, osv.",
    },
    {
      question: "Etterspørsel x = 1200 − 4p, tilbud x = 2p − 300. Likevektspris?",
      options: ["250", "200", "150", "300"],
      explanation: "1200 − 4p = 2p − 300 gir 1500 = 6p, altså p* = 250. (Mengde x* = 200.)",
    },
    {
      question: "Ved en pris under p* ligger hvilken kurve lengst til høyre?",
      options: ["Etterspørselskurven (etterspørsel)", "Ingen av dem, siden kurvene faller sammen under p*", "Tilbudskurven (tilbud), fordi lav pris trekker frem flere anlegg i drift", "Begge ligger like langt til høyre"],
      explanation: "Under p* etterspørres mer enn det tilbys, så etterspørselskurven ligger til høyre for tilbudskurven – etterspørselsoverskudd.",
    },
    {
      question: "Hva er den vanligste figurfeilen sensor trekker for (feilkatalog #12)?",
      options: ["Umerket figur uten navngitte akser, kurver eller likevekt", "At likevektspunktet er tegnet med en fylt prikk i stedet for en ring", "Å bruke E og T i stedet for de internasjonale symbolene D og S på kurvene", "For mange stiplede hjelpelinjer som gjør figuren rotete og vanskelig å tyde"],
      explanation: "En figur uten merkede akser, navngitte kurver (E, T) og markert likevekt regnes som umerket og gir halv uttelling.",
    },
    {
      question: "Tilbud x = 5p − 140 og etterspørsel x = 700 − 2p. Hvilken side er mest prisfølsom?",
      options: ["Tilbudet, fordi c = 5 > b = 2", "Etterspørselen, fordi den har konstantleddet 700", "Etterspørselen, fordi tallet b = 2 gir den brattere og dermed mer følsom kurve", "De er nøyaktig like prisfølsomme"],
      explanation: "Prisfølsomheten leses av tallet foran p: c = 5 for tilbudet mot b = 2 for etterspørselen, så tilbudet reagerer sterkere (slakere kurve).",
    },
    {
      question: "Hva er likevektsbetingelsen?",
      options: ["a − bp = cp − d (etterspurt = tilbudt)", "a + bp = cp + d", "a + bp = cp + d, der begge sider stiger med prisen i takt med hverandre", "p = a − bx"],
      explanation: "Likevekt betyr at etterspurt mengde er lik tilbudt mengde: a − bp = cp − d. Å løse den gir p*.",
    },
    {
      question: "Hva er en pristaker?",
      options: ["En aktør som tar markedsprisen for gitt", "En aktør som forhandler seg fram til individuelle priser", "En aktør som er stor nok til å sette markedsprisen selv etter eget ønske", "En som aldri handler i markedet"],
      explanation: "I FK er alle pristakere – for små til å påvirke prisen. Derfor er det prismekanismen, ikke enkeltaktører, som fører markedet til likevekt.",
    },
    {
      question: "Ved p = 250 med x = 600 − 2p og x = 3p − 400: hva slags situasjon er det?",
      options: ["Tilbudsoverskudd (tilbudt 350 > etterspurt 100)", "Markedet er stengt fordi ingen vil selge til denne prisen", "Etterspørselsoverskudd, fordi etterspurt mengde overstiger den tilbudte", "Likevekt, siden prisen 250 tilfeldigvis treffer punktet der kurvene krysser"],
      explanation: "Etterspurt = 600 − 500 = 100, tilbudt = 750 − 400 = 350. Tilbudt > etterspurt, altså tilbudsoverskudd; prisen presses ned mot p* = 200.",
    },
    {
      question: "Hvorfor må man nevne mekanismen i ord når man forklarer likevekten?",
      options: ["Fordi å bare definere 'der kurvene krysser' ikke forklarer HVORDAN den oppstår", "Fordi tallverdiene i regnestykket ikke teller med når sensor vurderer besvarelsen", "Man trenger egentlig ikke mekanismen; det holder å peke på hvor de to kurvene krysser", "Fordi en figur er strengt forbudt i dette svaret og bare ord kan brukes til forklaring"],
      explanation: "Spørres det om hvordan likevekten oppstår, må prismekanismen (over/under p*) med – ren definisjon er ikke nok.",
    },
    {
      question: "Hva forbereder nevneren b + c senere i boka?",
      options: ["Delingsformelen c/(b+c) for skatt og subsidie", "Formelen for dødvektstapet ved en avgift", "Priselastisitetsformelen alene, som bare bruker helningen b i etterspørselen", "Nåverdiformelen for flerårige betalinger"],
      explanation: "Den samme summen b+c er nevneren i delingsformelen som avgjør hvem som bærer en skatt eller subsidie.",
    },
    {
      question: "Etterspørsel x = 500 − 5p, tilbud x = 5p − 100. Likevektspris?",
      options: ["60", "50", "100", "40"],
      explanation: "500 − 5p = 5p − 100 gir 600 = 10p, altså p* = 60. (Mengde x* = 200.)",
    },
  ],
  'econ1210-1-4': [
    {
      question: "Hva maaler priselastisiteten i etterspoerselen?",
      options: ["Prosentvis endring i etterspurt mengde per prosents endring i pris", "Den absolutte helningen b i etterspørselsfunksjonen", "Kroneendringen i etterspurt mengde per krone prisen endrer seg med", "Den totale omsetningen, altså pris ganget med solgt mengde"],
      explanation: "Elastisitet = $\\frac{\\Delta x}{\\Delta p}\\cdot\\frac{p}{x}$ — et forhold mellom prosentvise endringer, ikke absolutte kroner.",
    },
    {
      question: "For etterspoerselen $x = 500 - 5p$ i punktet $p = 20$, $x = 400$, hva er elastisiteten?",
      options: ["$-0{,}25$", "$-5$", "$-1{,}25$", "$+0{,}25$"],
      explanation: "$\\varepsilon = -5\\cdot\\frac{20}{400} = -0{,}25$. $-5$ er bare stigningstallet; fortegnet er negativt for etterspoersel.",
    },
    {
      question: "Et elastisitetstall paa $-2$ betyr at etterspoerselen er:",
      options: ["Elastisk — en prisoekning paa 1 % gir om lag 2 % fall i mengde", "Perfekt uelastisk — mengden holder seg helt uendret uansett pris", "Uelastisk — mengden reagerer bare svakt på en endring i prisen på godet", "Enhetselastisk — mengden endres akkurat like mye i prosent som prisen gjør"],
      explanation: "$|\\varepsilon| = 2 > 1$ er elastisk; mengden endres mer enn prisen i prosent.",
    },
    {
      question: "Hvorfor er elastisitet og stigningstall (helning) ikke det samme?",
      options: ["Elastisiteten inneholder ogsaa forholdet $\\frac{p}{x}$, som varierer langs kurven", "Elastisiteten er konstant langs kurven, mens det er helningen $-b$ som varierer", "Helningen måles i prosent, mens elastisiteten måles i kroner per solgte enhet", "De er alltid like, siden begge måler hvor mye mengden endrer seg med prisen"],
      explanation: "$\\varepsilon = -b\\cdot\\frac{p}{x}$: $-b$ er konstant, men $\\frac{p}{x}$ endres langs en rett linje, saa elastisiteten varierer.",
    },
    {
      question: "Hvor paa en rett, fallende etterspørselskurve er etterspoerselen mest elastisk?",
      options: ["Hoeyt oppe (hoey pris, liten mengde)", "Langt nede (lav pris, stor mengde)", "I midtpunktet på kurven", "Elastisiteten er lik overalt"],
      explanation: "Hoeyt oppe er $\\frac{p}{x}$ stor, saa $|\\varepsilon|$ er stor (elastisk). Nederst er den liten (uelastisk).",
    },
    {
      question: "Hva er den vanligste feilen i en elastisitetsoppgave?",
      options: ["Aa oppgi tallet uten aa tolke det med ord", "Aa regne i likevektspunktet", "Aa bruke formelen $\\varepsilon = -b\\cdot\\frac{p}{x}$", "Å oppgi fortegnet uten videre kommentar"],
      explanation: "Feil #6: tall/broek uten verbal tolkning. Tallet alene gir ikke full uttelling — skriv tolkningssetningen.",
    },
    {
      question: "Tilbudselastisiteten for $x = cp - d$ er:",
      options: ["$c\\cdot\\frac{p}{x}$ og positiv", "$-c\\cdot\\frac{p}{x}$ og negativ", "$\\frac{c}{p}$", "Alltid lik 1"],
      explanation: "Tilbudets stigningstall er $+c$, saa $\\varepsilon_T = c\\cdot\\frac{p}{x} > 0$: hoeyere pris gir stoerre tilbud.",
    },
    {
      question: "Hvorfor er elastisiteten et rent tall uten benevning?",
      options: ["Fordi baade teller og nevner er prosentvise endringer", "Fordi elastisiteten alltid ligger mellom null og én i verdi", "Fordi den maales i kroner per solgte enhet og deler seg bort mot mengden", "Fordi mengden alltid oppgis i kilo, saa maaleenheten faller bort av seg selv"],
      explanation: "Prosent delt paa prosent gir et rent tall — derfor kan elastisiteten sammenligne markeder maalt i ulike enheter.",
    },
    {
      question: "Et uelastisk marked ($|\\varepsilon| < 1$) reagerer paa et tilbudsbortfall med:",
      options: ["Stor priseffekt og liten mengdeeffekt", "Liten priseffekt og stor mengdeeffekt", "Ingen prisendring", "Bare en mengdeoekning"],
      explanation: "Naar kjoeperne henger med nesten uansett pris (bratt E), maa prisen stige mye foer mengden faller nok.",
    },
    {
      question: "Hvorfor er etterspoerselen mer elastisk paa lang sikt enn paa kort sikt?",
      options: ["Kjoeperne rekker aa finne substitutter og endre vaner", "Elastisiteten er alltid den samme, uansett hvilken tidshorisont", "Tilbudet forsvinner paa lang sikt, saa kjoeperne tvinges til aa reagere sterkere", "Prisene stiger jevnt over tid, og hoeyere pris gir automatisk stoerre elastisitet"],
      explanation: "Med tid kan kjoeperne bytte energikilde, isolere, endre utstyr — flere substitutter gir stoerre $|\\varepsilon|$.",
    },
    {
      question: "I likevekten $p^* = 150$, $x^* = 200$ med $x = 500 - 2p$, hva er $\\varepsilon$?",
      options: ["$-1{,}5$", "$-2$", "$-0{,}67$", "$+1{,}5$"],
      explanation: "$\\varepsilon = -2\\cdot\\frac{150}{200} = -1{,}5$ — elastisk.",
    },
    {
      question: "Hva betyr et elastisitetstall paa $-0{,}3$?",
      options: ["Uelastisk: 1 % hoeyere pris gir bare om lag 0,3 % lavere mengde", "Enhetselastisk: mengden og prisen endres nøyaktig like mye i prosent", "Elastisk: 1 % hoeyere pris gir hele 3 % lavere mengde etterspurt", "Mengden oeker naar prisen oeker, siden fortegnet foran tallet er negativt"],
      explanation: "$|\\varepsilon| = 0{,}3 < 1$ er uelastisk — kjoeperne er lite prisfoelsomme.",
    },
    {
      question: "I hvilket punkt regnes elastisiteten normalt?",
      options: ["I likevektspunktet ($p^*, x^*$)", "I et vilkaarlig valgt punkt", "I punktet der prisen er null ($p = 0$)", "I punktet der mengden er null ($x = 0$)"],
      explanation: "Standard er likevektspunktet, med mindre oppgaven ber om et annet punkt.",
    },
    {
      question: "Bensin har lav priselastisitet fordi:",
      options: ["Det finnes faa naere substitutter paa kort sikt", "Alle slutter å kjøre bil når prisen stiger", "Prisen paa bensin stiger nesten alltid over tid", "Bensin er tilnærmet gratis for de fleste"],
      explanation: "Faa substitutter → uelastisk etterspoersel. Kjoeperne maa pendle uansett, saa mengden endres lite ved prisendring.",
    },
    {
      question: "Hva er enhetselastisitet?",
      options: ["$|\\varepsilon| = 1$: like stor prosentvis endring i mengde som i pris", "Elastisiteten regnet ut i det punktet på kurven der prisen er lik null", "Elastisiteten til tilbudet naar tilbudskurven er en rett linje gjennom origo", "$|\\varepsilon| = 0$: mengden endrer seg ikke i det hele tatt naar prisen endres"],
      explanation: "Ved $|\\varepsilon| = 1$ gir 1 % prisendring noeyaktig 1 % mengdeendring — skillet mellom elastisk og uelastisk.",
    },
    {
      question: "Et elastisk marked ($|\\varepsilon| > 1$) reagerer paa et tilbudsbortfall med:",
      options: ["Liten priseffekt og stor mengdeeffekt", "Stor priseffekt og liten mengdeeffekt", "Ingen endring i pris eller mengde", "Bare en prisøkning uten mengdeendring"],
      explanation: "Naar kjoeperne lett trekker seg (slak E), tar mengden stoetet mens prisen beveger seg lite.",
    },
    {
      question: "Hvordan kobler elastisitet til delingsformelen i skattekapitlet?",
      options: ["Den minst prisfoelsomme siden baerer mest av en avgift", "Elastisitet har ingenting med skatt aa gjoere", "Den mest prisfoelsomme siden baerer mest av avgiften, fordi den lettere flykter", "Elastisiteten avgjør bare størrelsen på dødvektstapet"],
      explanation: "«Den som ikke kan flykte, betaler»: er etterspoerselen uelastisk, velter avgiften over paa kjoeperne.",
    },
    {
      question: "Hva skjer med $|\\varepsilon|$ naar du beveger deg nedover en rett etterspørselskurve?",
      options: ["Den synker (kurven blir mindre elastisk der)", "Den blir positiv fordi kurven snur nedover mot mengdeaksen", "Den stiger (kurven blir mer elastisk nedover mot stoerre mengder)", "Den er konstant langs hele den rette kurven, uansett punkt du velger"],
      explanation: "Lavere pris og stoerre mengde gir mindre $\\frac{p}{x}$, saa $|\\varepsilon|$ synker — derfor maa punktet oppgis.",
    },
    {
      question: "Tilbudselastisiteten i anleggsmodellen forteller:",
      options: ["Hvor mange flere anlegg som blir loennsomme naar prisen kryper opp", "Hvor mye kjoeperne er villige til aa betale", "Gjennomsnittsprisen i markedet naar alle anlegg er i drift samtidig", "Hvor mye hver enkelt kjoeper maksimalt er villig til aa betale for varen"],
      explanation: "Hoey tilbudselastisitet = mange anlegg med naerliggende enhetskostnad, saa smaa prisendringer trekker mange inn.",
    },
    {
      question: "Hvorfor gir et elastisitetstall uten tolkning ikke full uttelling?",
      options: ["Sensor krever alltid setningen om hva tallet betyr for pris og mengde", "Fordi svaret alltid må oppgis med minst to desimaler for å bli godkjent", "Et elastisitetstall er alltid feil med mindre punktet det maales i oppgis", "Elastisitet teller ikke paa eksamen, saa poenget er selve utregningen av tallet"],
      explanation: "Feil #6: den verbale tolkningen er selve poenget sensor ser etter, ikke tallet i seg selv.",
    },
  ],
  'econ1210-1-5': [
    {
      question: "Hva skiller et skift i etterspoerselskurven fra en bevegelse langs den?",
      options: ["Bare en prisendring gir bevegelse langs kurven; alt annet skifter hele kurven", "Skift og bevegelse langs kurven er egentlig to navn paa det samme fenomenet", "En bevegelse langs kurven skjer bare naar staten legger en avgift eller skatt paa varen", "Et skift av hele kurven skjer bare naar prisen paa selve varen endrer seg opp eller ned"],
      explanation: "Feil #1: prisendring = bevegelse langs; inntekt/preferanser/kostnader = skift av hele kurven.",
    },
    {
      question: "Ved et rent etterspoerselsskift (E ut) beveger pris og mengde seg:",
      options: ["Samme vei (begge opp)", "Bare mengden endres", "Motsatt vei (pris opp, mengde ned)", "Bare prisen endres"],
      explanation: "E ut → hoeyere pris OG stoerre mengde. E-skift flytter $p$ og $x$ samme vei.",
    },
    {
      question: "Ved et rent tilbudsskift (T inn) beveger pris og mengde seg:",
      options: ["Motsatt vei (pris opp, mengde ned)", "Samme vei, men begge faller (ned)", "Samme vei (begge opp mot ny likevekt)", "Bare prisen endres, mengden staar stille"],
      explanation: "T inn → hoeyere pris, mindre mengde. T-skift flytter $p$ og $x$ motsatt vei.",
    },
    {
      question: "En loennsoekning i produksjonen gjoer at:",
      options: ["Tilbudskurven skifter innover (hoeyere enhetskostnad)", "Tilbudskurven skifter utover fordi lønn er en fast kostnad", "Etterspørselskurven skifter innover (kjoeperne vil ha mindre)", "Etterspørselskurven skifter utover (hoeyere etterspoersel i markedet)"],
      explanation: "Hoeyere enhetskostnad i alle anlegg loefter tilbudskurven opp/inn — faerre anlegg loennsomme ved hver pris.",
    },
    {
      question: "Hva honorerer sensor mest i en skiftoppgave?",
      options: ["Mekanismen bak skiftet (hvorfor kurven flytter seg)", "At svaret oppgir den nye likevektsprisen med to desimaler", "Bare den tegnede pilen som viser hvilken vei kurven flytter seg", "At figuren er ryddig fargelagt og aksene tydelig navngitt med $p$ og $x$"],
      explanation: "«Enhetskostnaden oeker i alle anlegg» / «faerre anlegg loennsomme» teller mer enn selve pilen.",
    },
    {
      question: "Naar anlegg faller bort, faller omsatt mengde:",
      options: ["Mindre enn bortfallet, fordi prisoekningen gjoer flere anlegg loennsomme", "Ingenting i det hele tatt, fordi de gjenværende anleggene øker kapasiteten", "Like mye som bortfallet, siden hvert anlegg som forsvinner tar sin mengde med seg", "Mer enn bortfallet, fordi den hoeyere prisen ogsaa skremmer bort kjoepere i tillegg"],
      explanation: "Lekkasje-poenget (feil #8): den hoeyere prisen vekker tidligere uloennsomme anlegg til live.",
    },
    {
      question: "I markedet $x = 600 - 2p$, $x = 3p - 400$ (likevekt $(200,200)$) faller anlegg bort saa T blir $x = 3p - 500$. Ny likevekt?",
      options: ["$p = 220$, $x = 160$", "$p = 200$, $x = 100$", "$p = 180$, $x = 240$", "$p = 220$, $x = 100$"],
      explanation: "$600 - 2p = 3p - 500 \\Rightarrow 1100 = 5p \\Rightarrow p = 220$, $x = 600 - 440 = 160$. Mengdefall 40, ikke 100 (lekkasje).",
    },
    {
      question: "Hva er lekkasjen i forrige oppgave (bortfall 100, mengdefall 40)?",
      options: ["60 enheter", "40 enheter", "100 enheter", "140 enheter"],
      explanation: "Lekkasje = bortfall − mengdefall = $100 - 40 = 60$: anlegg som ble loennsomme av prisoekningen.",
    },
    {
      question: "Hvem tjener naar en gruppe selgere utestenges fra markedet?",
      options: ["De gjenvaerende selgerne (hoeyere pris)", "Kjoeperne, som naa faar lavere pris", "Staten, gjennom hoeyere avgiftsinntekter", "De utestengte selgerne beholder gevinsten"],
      explanation: "Tredjeparts-poenget (feil #11 aa glemme det): gjenvaerende selgere faar den hoeyere prisen.",
    },
    {
      question: "Ved nyetablering av nye tilbydere taper:",
      options: ["De etablerte selgerne (lavere pris)", "Kjøperne, som nå må betale en høyere pris", "Ingen taper; alle sider stiller likt", "De nye tilbyderne som nettopp kom inn"],
      explanation: "T ut → pris ned. De etablerte taper paa den lavere prisen — et tredjeparts-poeng.",
    },
    {
      question: "Naar E og T begge skifter innover samtidig, hva er bestemt?",
      options: ["Mengden faller; prisretningen er ubestemt", "Prisen stiger; mengden er ubestemt", "Prisen stiger sikkert; mengderetningen er ubestemt", "Begge er ubestemte, fordi skiftene drar hver sin vei"],
      explanation: "Begge innskift krymper markedet (mengde ned, bestemt), men de drar prisen hver sin vei (ubestemt).",
    },
    {
      question: "Hvorfor gir et brattere (uelastisk) etterspørselskurve stoerre prisutslag ved et tilbudsskift?",
      options: ["Kjoeperne henger med nesten uansett pris, saa prisen maa endres mye for aa klarere markedet", "Fordi selgerne i et bratt marked alltid kan velte hele kostnadsøkningen over på kjøperne sine", "Fordi tilbudet forsvinner helt naar etterspørselskurven er bratt, saa prisen skyter i vaeret av seg selv", "Fordi mengden ikke kan endres i det hele tatt langs en uelastisk kurve, uansett hvordan prisen setter seg"],
      explanation: "Bratt E = lav prisfoelsomhet → prisen tar stoetet, mengden endres lite.",
    },
    {
      question: "En billigere innsatsvare foerer til at:",
      options: ["Tilbudskurven skifter utover (lavere enhetskostnad)", "Tilbudskurven skifter innover", "Etterspørselskurven skifter utover", "Etterspørselskurven skifter innover (lavere etterspoersel)"],
      explanation: "Lavere enhetskostnad gjoer flere anlegg loennsomme → T ut → pris ned, mengde opp.",
    },
    {
      question: "Hvilket skift gir en dyrere substituttvare i vaart marked?",
      options: ["Etterspørselskurven skifter utover (folk bytter til vaar vare)", "Etterspørselskurven skifter innover", "Tilbudskurven skifter utover (lavere enhetskostnad)", "Tilbudskurven skifter innover (hoeyere enhetskostnad i anleggene)"],
      explanation: "Dyrere substitutt → flere velger vaar vare → oekt etterspoersel → E ut.",
    },
    {
      question: "En parallell forskyvning av hele tilbudskurven skyldes:",
      options: ["En endring i enhetskostnaden som er lik i alle anlegg", "At kjøpernes inntekt øker og trekker etterspørselen opp", "En prisendring paa selve varen som omsettes i markedet", "At bare ett enkelt anlegg endrer sin egen enhetskostnad"],
      explanation: "Loenn, energi, avgift eller sikkerhetskrav som treffer alle anlegg likt gir parallellskift.",
    },
    {
      question: "Kryssjekken: analysen din viser at pris og mengde beveger seg samme vei. Da er det:",
      options: ["Et etterspoerselsskift (E)", "En bevegelse langs kurven", "Alltid et regnefeil i analysen", "Et tilbudsskift (T)"],
      explanation: "E-skift → samme vei; T-skift → motsatt vei. Stemmer ikke det, har du valgt feil kurve (feil #2).",
    },
    {
      question: "Hva maaler anleggsbortfallet i en figur?",
      options: ["Den horisontale avstanden mellom gammel og ny tilbudskurve ved gammel pris", "Arealet under etterspørselskurven mellom gammel og ny omsatt mengde i markedet", "Prisendringen maalt vertikalt mellom gammel og ny likevektspris i figuren", "Det faktiske mengdefallet som leses av horisontalt mellom de to likevektene"],
      explanation: "Bortfallet leses ved gammel pris; det faktiske fallet er mindre pga. lekkasjen.",
    },
    {
      question: "En helsekampanje som demper etterspoerselen gir:",
      options: ["E inn → lavere pris, mindre mengde", "T inn → hoeyere pris", "T ut → lavere pris, stoerre mengde", "E ut → hoeyere pris, stoerre mengde"],
      explanation: "Faerre vil ha varen ved enhver pris → E skifter innover → pris og mengde ned.",
    },
    {
      question: "Hvorfor er det feil aa paastaa bestemt prisretning ved samtidige motstridende skift?",
      options: ["Nettoretningen avhenger av hvilket skift som er stoerst", "Fordi begge skift alltid er like store", "Mengden er alltid ubestemt, mens prisretningen tvert imot er gitt", "Prisen endres aldri naar to skift virker samtidig i motsatt retning"],
      explanation: "Dekomponer i to enkeltskift; naar de drar prisen hver sin vei, er retningen ubestemt uten mer info.",
    },
    {
      question: "Hoeyere inntekt hos kjoeperne (normal vare) gir:",
      options: ["Etterspørselskurven skifter utover", "Etterspørselen skifter innover", "Tilbudskurven skifter utover", "Tilbudskurven skifter innover"],
      explanation: "Oekt kjoepekraft → mer etterspoersel ved enhver pris → E ut → hoeyere pris og mengde.",
    },
    {
      question: "I firespoersmaals-malen for et skift, hva er det FOERSTE du avgjoer?",
      options: ["Hvilken kurve som skifter, og hvorfor", "Hvor mye omsatt mengde endrer seg i prosent", "Hvor mange prosent prisen stiger etterpaa", "Hvor stort dodvektstapet blir i ny likevekt"],
      explanation: "Malen: (1) kurve + hvorfor, (2) retning, (3) ny likevekt, (4) vinnere/tapere.",
    },
    {
      question: "Komparativ statikk betyr aa:",
      options: ["Sammenligne to likevekter (foer og etter et skift)", "Regne ut hvor lang tid tilpasningen til ny likevekt tar", "Modellere hele tilpasningsforloepet skritt for skritt i tid", "Finne priselastisiteten i det opprinnelige likevektspunktet"],
      explanation: "Vi sammenligner likevekt $A$ og $B$ uten aa beskrive selve overgangen.",
    },
    {
      question: "Ved samtidige skift der E skifter ut og T skifter inn, hva er bestemt?",
      options: ["Prisen stiger; mengderetningen er ubestemt", "Mengden stiger; prisretningen er ubestemt", "Både pris og mengde stiger helt entydig", "Både pris og mengde faller helt entydig"],
      explanation: "Begge skift loefter prisen (bestemt opp), men drar mengden hver sin vei (ubestemt).",
    },
    {
      question: "Hva er den raskeste kontrollen paa at du har analysert et skift riktig?",
      options: ["Sjekk om pris/mengde-moensteret passer skift-typen (E samme vei, T motsatt)", "Regn ut dødvektstapet og se om det ble positivt etter selve skiftet", "Se på fortegnet til etterspørselselastisiteten i ny likevekt", "Tell antall kurver i figuren og sjekk at du har tegnet både E og T"],
      explanation: "E-skift → $p$ og $x$ samme vei; T-skift → motsatt. Avvik avsloerer feil kurve eller retning.",
    },
    {
      question: "Hvorfor faller omsetningen mindre enn produksjonsbortfallet ved anleggsbortfall?",
      options: ["Prisoekningen gjoer tidligere uloennsomme anlegg loennsomme, som lekker tilbake produksjon", "Etterspørselen øker samtidig, slik at den tapte mengden delvis erstattes av nye kjøpere", "Bortfallet ble feilmålt, og det faktiske produksjonstapet er langt mindre enn først antatt", "Kjøperne betaler mer per enhet, så den samlede omsetningen holdes kunstig oppe"],
      explanation: "Lekkasje-poenget (fast siden H2024): mengdefall = bortfall − lekkasje, og lekkasjen er alltid positiv.",
    },
  ],
  'econ1210-1-6': [
    {
      question: "Hva er FOERSTE steg i aapningen av den store markedsoppgaven?",
      options: ["Angi forutsetningene (pristakere, homogent gode) hvis spurt", "Tegne monopolfiguren med marginalinntekt under prislinja", "Finne etterspørselselastisiteten i den opprinnelige likevekten", "Regne ut dødvektstapet og markere hele trekanten inne i figuren"],
      explanation: "Aapningskjeden starter med forutsetningene — «billige poeng som maa sitte».",
    },
    {
      question: "Etter aa ha funnet $p^*$, hva boer du alltid gjoere?",
      options: ["Kontrollere ved aa sette $p^*$ inn i begge funksjoner", "Tegne dødvektstapet inn i figuren med en gang", "Regne etterspørselselastisiteten før du gjør noe annet", "Gå videre til neste deloppgave uten å kontrollere svaret"],
      explanation: "Kontroll i begge funksjoner viser at svaret ikke er gjettet og fanger regnefeil.",
    },
    {
      question: "I markedet $x = 1000 - 5p$, $x = 5p - 200$, hva er likevekten?",
      options: ["$p = 120$, $x = 400$", "$p = 100$, $x = 500$", "$p = 120$, $x = 300$", "$p = 80$, $x = 600$"],
      explanation: "$1000 - 5p = 5p - 200 \\Rightarrow 1200 = 10p \\Rightarrow p = 120$, $x = 1000 - 600 = 400$.",
    },
    {
      question: "For $x = 1000 - 5p$ i likevekt $(120, 400)$, hva er $\\varepsilon$?",
      options: ["$-1{,}5$", "$-5$", "$-0{,}5$", "$+1{,}5$"],
      explanation: "$\\varepsilon = -5\\cdot\\frac{120}{400} = -1{,}5$ — elastisk.",
    },
    {
      question: "Hva maa foelge et elastisitetstall i en A-besvarelse?",
      options: ["En verbal tolkning av hva tallet betyr", "En figur som gjentar tallet grafisk", "Bare fortegnet på tallet, uten mer tekst", "Ingenting mer enn selve verdien"],
      explanation: "Feil #6: tall uten tolkning gir ikke full uttelling.",
    },
    {
      question: "Et anleggsbortfall paa 150 gir et faktisk mengdefall paa 90. Hvorfor?",
      options: ["Prisoekningen gjoer 60 enheters anlegg loennsomme igjen (lekkasje)", "Kjøperne betaler ikke den høyere prisen, så salget faller mindre", "Bortfallet ble feilmålt; det reelle tapet var egentlig bare 90", "Etterspørselen forsvant delvis, så 60 enheter ble aldri kjøpt"],
      explanation: "Lekkasje = $150 - 90 = 60$: hoeyere pris vekker tidligere uloennsomme anlegg (feil #8 aa glemme).",
    },
    {
      question: "Etter en sabotasje som fjerner anlegg, hvem er tredjeparten som tjener?",
      options: ["De gjenvaerende produsentene (hoeyere pris)", "Staten, gjennom økte avgiftsinntekter fra markedet", "De rammede anleggene, via forsikringsutbetaling", "Kjøperne, som nå får varen billigere"],
      explanation: "Tredjeparts-poenget (feil #11): gjenvaerende selgere faar den hoeyere prisen.",
    },
    {
      question: "En reklamekampanje som gjoer varen populaer skifter:",
      options: ["Etterspørselskurven utover (hoeyere pris, stoerre mengde)", "Etterspørselskurven innover (lavere pris, mindre mengde)", "Tilbudskurven innover (høyere pris, mindre mengde)", "Tilbudskurven utover (lavere pris, større mengde)"],
      explanation: "Endret preferanse → oekt etterspoersel → E ut → pris og mengde opp.",
    },
    {
      question: "Ved nyetablering av utenlandske tilbydere skjer:",
      options: ["T ut → pris ned; de etablerte selgerne taper", "E inn → pris ned; etterspørselen krymper", "T inn → pris opp; de etablerte selgerne tjener", "E ut → pris opp; kjøperne må betale mer"],
      explanation: "Flere anlegg → T ut → lavere pris. De etablerte taper paa den lavere prisen (tredjepart).",
    },
    {
      question: "Ved samme tilbudsbortfall, hvilket marked faar stoerst prisoekning?",
      options: ["Det med brattest (mest uelastisk) etterspoersel", "Det med slakest (mest elastisk) etterspørsel", "Begge marked får nøyaktig lik prisøkning", "Det med lavest opprinnelig likevektspris"],
      explanation: "Bratt/uelastisk E → kjoeperne henger med → prisen maa stige mye → stor priseffekt.",
    },
    {
      question: "Hva er kjennetegnet paa et rent tilbudsskift i pris og mengde?",
      options: ["Pris og mengde beveger seg motsatt vei", "Pris og mengde beveger seg i samme retning", "Bare prisen endres, mengden står stille", "Bare mengden endres, prisen står stille"],
      explanation: "T ut: pris ned, mengde opp. T inn: pris opp, mengde ned. Motsatt vei.",
    },
    {
      question: "Ved to samtidige innskift (E inn + T inn), hva er sikkert?",
      options: ["Mengden faller; prisretningen er ubestemt", "Både pris og mengde stiger entydig oppover", "Prisen stiger; mengderetningen er ubestemt", "Ingenting er bestemt; alt avhenger av helning"],
      explanation: "Begge krymper markedet (mengde ned), men drar prisen hver sin vei (ubestemt).",
    },
    {
      question: "I $x = 800 - 2p$, $x = 4p - 400$, hva er likevekten?",
      options: ["$p = 200$, $x = 400$", "$p = 100$, $x = 600$", "$p = 200$, $x = 200$", "$p = 150$, $x = 500$"],
      explanation: "$800 - 2p = 4p - 400 \\Rightarrow 1200 = 6p \\Rightarrow p = 200$, $x = 800 - 400 = 400$.",
    },
    {
      question: "For $x = 800 - 2p$ i likevekt $(200, 400)$, hva er $\\varepsilon$?",
      options: ["$-1$ (enhetselastisk)", "$-0{,}5$ (uelastisk)", "$-2$ (svært elastisk)", "$+1$ (positiv helning)"],
      explanation: "$\\varepsilon = -2\\cdot\\frac{200}{400} = -1$ — enhetselastisk.",
    },
    {
      question: "Hva er en figur uten forklaring paa eksamen?",
      options: ["Halvt svar — sensor krever figur OG mekanisme i ord", "Fullt svar — en tydelig figur taler for seg selv", "Ikke tillatt på eksamen uten en kildehenvisning", "Bedre enn en forklaring gitt helt uten figur"],
      explanation: "Figur uten forklaring eller forklaring uten figur er halvt svar; de er én leveranse.",
    },
  ],
  'econ1210-2-1': [
    {
      question: "Hva er samfunnsøkonomisk overskudd (SO) for en gitt mengde?",
      options: ["Samlet betalingsvillighet minus samlede kostnader — arealet mellom etterspørsels- og tilbudskurven fram til mengden", "Arealet under prislinja ned til mengdeaksen — rektangelet som utgjør kjøpernes samlede betaling", "Selgernes samlede inntekt $p^*\\cdot x^*$, altså pris ganger omsatt mengde i likevekt", "Det samme som konsumentoverskuddet, altså hele feltet mellom etterspørselskurven og prislinja"],
      explanation: "SO er verdien markedet skaper: for hver enhet betalingsvillighet (E) minus kostnad (T), summert. Inntekt inkluderer kostnadene og er derfor ikke SO.",
    },
    {
      question: "Hvorfor kan SO beregnes uten å kjenne prisen?",
      options: ["Fordi definisjonen bare bruker betalingsvillighet (E-høyden) og kostnad (T-høyden)", "Fordi SO per definisjon bare er definert i selve likevektspunktet der E krysser T", "Fordi konsumentoverskuddet og produsentoverskuddet alltid er nøyaktig like store", "Fordi prisen alltid er lik null i frikonkurransemarkeder med fri etablering"],
      explanation: "SO er arealet mellom kurvene; prisen deler bare kaka mellom kjøper og selger, den skaper den ikke. Dette er sensors faste plusspoeng-markør.",
    },
    {
      question: "Hva er konsumentoverskudd (KO)?",
      options: ["Samlet betalingsvillighet minus det kjøperne faktisk betaler — arealet mellom etterspørselskurven og prislinja", "Alltid større enn produsentoverskuddet, fordi kjøpersiden alltid dominerer under frikonkurranse", "Hele kjøpernes samlede betaling $p^*\\cdot x^*$, altså prisen ganger omsatt mengde i likevekten", "Arealet mellom prislinja og tilbudskurven, målt opp til den omsatte mengden i selve likevekten"],
      explanation: "KO er summen av differansene mellom hver kjøpers betalingsvillighet og prisen — feltet mellom etterspørselskurven og prislinja.",
    },
    {
      question: "Hva er produsentoverskudd (PO)?",
      options: ["Selgernes inntekt minus samlede alternativkostnader — arealet mellom prislinja og tilbudskurven", "Arealet under tilbudskurven ned til mengdeaksen — altså de samlede produksjonskostnadene", "Hele selgernes samlede inntekt $p^*\\cdot x^*$, altså prisen ganger omsatt mengde i likevekt", "Alltid nøyaktig lik konsumentoverskuddet så lenge begge kurvene er lineære"],
      explanation: "PO måles mot tilbudskurvens høyde (alternativkostnaden), ikke mot null. Å regne hele inntekten som overskudd glemmer produksjonskostnadene.",
    },
    {
      question: "Produsentoverskuddet måles mot hvilken målestokk?",
      options: ["Tilbudskurvens høyde (alternativkostnaden av siste enhet)", "Mengdeaksen (null), slik at hele inntekten teller", "Etterspørselskurvens høyde (kjøpernes betalingsvillighet)", "Den høyeste betalingsvilligheten i markedet"],
      explanation: "PO er inntekt utover alternativkostnaden. Måler man ned til mengdeaksen, får man inntekten, ikke overskuddet.",
    },
    {
      question: "Hva forteller høyden på etterspørselskurven ved en gitt mengde?",
      options: ["Marginal betalingsvillighet — hva den siste kjøperen er villig til å betale", "Marginalkostnaden — hva det koster å produsere nettopp den siste enheten", "Produsentoverskuddet som selgeren oppnår på nettopp den siste enheten", "Markedsprisen, den samme prisen som gjelder for alle omsatte enheter"],
      explanation: "Etterspørselskurvens høyde er betalingsvillighet; tilbudskurvens høyde er kostnad. Å blande dem er en klassisk feil i velferdsgeometrien.",
    },
    {
      question: "Hva forteller høyden på tilbudskurven ved en gitt mengde?",
      options: ["Marginalkostnaden — kostnaden ved å produsere den siste enheten", "Den siste kjøperens marginale betalingsvillighet for enheten", "Konsumentoverskuddet knyttet til nettopp den siste enheten", "Markedsprisen, som er den samme uansett hvilken mengde"],
      explanation: "Tilbudskurvens høyde er enhetskostnaden i det dyreste anlegget i drift = alternativkostnaden av siste enhet.",
    },
    {
      question: "I et frikonkurransemarked uten inngrep gjelder hvilken sammenheng?",
      options: ["$SO = KO + PO$", "$SO = KO + PO + \\text{skatteinntekt}$ alltid", "$SO = KO - PO$", "$SO = p^*\\cdot x^*$"],
      explanation: "Prislinja deler SO-trekanten i KO (over) og PO (under). Skatteinntekt legges bare til når det faktisk er en skatt.",
    },
    {
      question: "Hvorfor er SO størst nettopp i likevekten (der E krysser T)?",
      options: ["Fordi det verken er uutnyttet verdi (E over T) eller ødelagt verdi (T over E) igjen", "Fordi konsumentoverskuddet og produsentoverskuddet da blir nøyaktig like store", "Fordi produsentene da samlet oppnår sin aller største mulige fortjeneste i markedet", "Fordi markedsprisen da presses helt ned til det lavest mulige nivået"],
      explanation: "Til venstre for krysset lønner en enhet til seg; til høyre ødelegger den verdi. Bare i krysset er SO-trekanten maksimal.",
    },
    {
      question: "Med lineær etterspørselskurve regnes konsumentoverskuddet som:",
      options: ["$\\tfrac{1}{2}\\cdot x^*\\cdot(p_{\\max}-p^*)$", "$\\tfrac{1}{2}\\cdot x^*\\cdot(p^*-p_{T0})$", "$\\tfrac{1}{2}\\cdot p^*\\cdot x^*$ uansett form", "$\\tfrac{1}{2}\\cdot p^*\\cdot x^*$ uansett"],
      explanation: "KO er trekanten mellom etterspørselskurven og prislinja; grunnlinjen er avstanden fra høyeste betalingsvillighet ned til prisen.",
    },
    {
      question: "Med lineær tilbudskurve regnes produsentoverskuddet som:",
      options: ["$\\tfrac{1}{2}\\cdot x^*\\cdot(p^*-p_{T0})$", "$\\tfrac{1}{2}\\cdot x^*\\cdot(p_{\\max}-p^*)$", "$p^*\\cdot x^*$", "$\\tfrac{1}{2}\\cdot x^*\\cdot p_{\\max}$"],
      explanation: "PO er trekanten mellom prislinja og tilbudskurven; $p_{T0}$ er tilbudskurvens startpris (0 hvis den går gjennom origo).",
    },
    {
      question: "I markedet $x=300-p$, $x=2p$ er likevekten $(p^*,x^*)=(100,200)$. Hva er SO?",
      options: ["30 000", "20 000", "10 000", "60 000"],
      explanation: "SO-trekanten har grunnlinje $300-0=300$ (avstand E–T ved $x=0$) og bredde $x^*=200$: $\\tfrac12\\cdot300\\cdot200=30\\,000$.",
    },
    {
      question: "I markedet $x=300-p$, $x=2p$ ($p^*=100$, $x^*=200$, $p_{\\max}=300$) er konsumentoverskuddet:",
      options: ["20 000", "10 000", "30 000", "15 000"],
      explanation: "$KO=\\tfrac12\\cdot200\\cdot(300-100)=\\tfrac12\\cdot200\\cdot200=20\\,000$.",
    },
    {
      question: "I markedet $x=400-p$, $x=p$ er KO og PO like store. Hvorfor?",
      options: ["Fordi etterspørsels- og tilbudskurven er like bratte, så prisen ligger midt mellom høyeste betalingsvillighet og laveste kostnad", "Fordi markedsprisen per definisjon alltid deler kaka mellom kjøper og selger i to helt like deler", "Fordi tilbudskurven er uendelig elastisk, slik at hele produsentoverskuddet forsvinner helt i den flate helningen", "Fordi samfunnsøkonomisk overskudd i akkurat denne likevekten tilfeldigvis blir nøyaktig lik null"],
      explanation: "Like bratte kurver gir speilsymmetriske trekanter. Med ulik helning blir den bratteste sidens overskudd størst.",
    },
    {
      question: "En kommentator sier «produsentoverskuddet er hele selgernes inntekt». Hva er feil?",
      options: ["PO er bare inntekt minus alternativkostnad — arealet over tilbudskurven, ikke helt ned til mengdeaksen", "PO er alltid lik null i frikonkurranse fordi all profitt på sikt konkurreres bort", "PO måles mot etterspørselskurvens høyde og ikke mot tilbudskurven, og det er nettopp det som er den egentlige feilen", "Ingenting er feil — PO er nettopp hele selgernes samlede inntekt $p^*\\cdot x^*$"],
      explanation: "Inntekten er $p^*x^*$; PO er bare delen over tilbudskurven. Resten er produksjonskostnadene.",
    },
    {
      question: "Hva er den viktigste plusspoeng-markøren sensor honorerer i velferdsdeloppgaven?",
      options: ["At SO kan beregnes for enhver mengde uten å kjenne prisen", "At man oppgir likevektsprisen presist med to desimaler", "At man alltid regner konsumentoverskudd før produsentoverskudd", "At man tegner figuren pent med farger, skravur og forklarende piler"],
      explanation: "SO uten pris viser at man har forstått at overskuddet er verdiskaping (E minus T), ikke noe som avhenger av prisdannelsen.",
    },
    {
      question: "SO opp til en mengde som IKKE er likevekten regnes som:",
      options: ["Et trapes mellom etterspørsels- og tilbudskurven (fordi kurvene ikke møtes ved den mengden)", "Et rektangel $p^*\\cdot x$ mellom prislinja og mengdeaksen ved endepunktet", "En trekant med spissen liggende nøyaktig i selve likevektspunktet", "Halvparten av selgernes samlede inntekt ved den valgte mengden"],
      explanation: "Når arealet stopper før krysset, er begge kurvehøyder positive ved endepunktet, så figuren er et trapes, ikke en trekant.",
    },
    {
      question: "I anleggsmodellen er produsentoverskuddet:",
      options: ["Summen over alle anlegg i drift av (markedspris − anleggets enhetskostnad)", "Summen av enhetskostnadene i alle anlegg i markedet, uansett om de er i drift", "Summen over alle anlegg i drift av (markedspris + anleggets enhetskostnad)", "Summen over alle anlegg i drift av markedsprisen ganget med anleggets enhetskostnad"],
      explanation: "De billigste anleggene bidrar mest til PO; det marginale anlegget har enhetskostnad lik prisen og bidrar med null.",
    },
    {
      question: "Hva er $p_{\\max}$ (høyeste betalingsvillighet) i figuren?",
      options: ["Prisen der etterspørselskurven treffer prisaksen (mengde null)", "Prisen der tilbudskurven starter og treffer prisaksen ved mengde null", "Likevektsprisen der etterspørselskurven og tilbudskurven krysser hverandre", "Den laveste enhetskostnaden blant alle anleggene i markedet"],
      explanation: "$p_{\\max}$ er toppen av KO-trekanten: ingen kjøper varen over denne prisen.",
    },
    {
      question: "Prislinja i markedsdiagrammet bestemmer:",
      options: ["Fordelingen av SO mellom KO og PO — ikke den samlede størrelsen på SO", "Hvor stort dødvektstapet blir ved den mengden som faktisk omsettes i markedet", "Hvor mange anlegg som er i drift, siden bare anlegg over prislinja produserer noe", "Om markedet er effektivt eller ikke, avhengig av hvor prislinja legges i diagrammet"],
      explanation: "Prisen deler SO-trekanten i to; den skaper ikke verdien. Derfor kan SO regnes uten pris.",
    },
    {
      question: "Verdien en enhet skaper for samfunnet er:",
      options: ["Betalingsvillighet minus kostnad (avstanden mellom E og T)", "Kostnaden ved å produsere nettopp den enheten, målt langs tilbudskurven", "Selgerens samlede inntekt for enheten, altså markedsprisen ganget med solgt mengde", "Prisen kjøperen faktisk betaler for enheten i markedslikevekten, ikke noe mer enn det"],
      explanation: "Prisen er en overføring mellom kjøper og selger; den verdiskapende differansen (E minus T) er det som havner i SO.",
    },
    {
      question: "Hva sier velferdsanalysen (SO, KO, PO) IKKE noe om?",
      options: ["Om fordelingen mellom kjøpere er rettferdig", "Hvor stor den samlede verdien er", "Hvordan gevinsten deles mellom kjøpere og selgere", "Hvor stort SO blir ved hver enkelt omsatt mengde"],
      explanation: "SO/KO/PO er effektivitetsmål — de måler kakas størrelse og fordelingen kjøper/selger, ikke rettferdighet i delingen.",
    },
    {
      question: "I markedet $x=240-2p$, $x=2p-40$ er likevekten $(70,100)$. Hva er PO? ($p_{T0}=20$.)",
      options: ["2 500", "5 000", "1 500", "3 500"],
      explanation: "$PO=\\tfrac12\\cdot100\\cdot(70-20)=\\tfrac12\\cdot100\\cdot50=2\\,500$.",
    },
    {
      question: "Hvorfor kalles en feil definisjon av SO som «KO + PO i likevekt» en felle?",
      options: ["Fordi den bryter sammen så snart det kommer en skatt eller subsidie (da må statens inntekt/utlegg med)", "Fordi KO og PO aldri kan legges sammen, ettersom de to størrelsene måles i to helt forskjellige benevninger", "Fordi samfunnsoverskuddet per definisjon alltid er nøyaktig null i enhver markedslikevekt uten inngrep", "Fordi en markedslikevekt aldri oppstår i praksis, slik at KO og PO ikke lar seg regne ut i det hele tatt"],
      explanation: "Den robuste definisjonen (betalingsvillighet minus kostnad = areal mellom E og T) holder alltid; «KO+PO» gjelder bare uten inngrep (feilkatalogens feil #9).",
    },
    {
      question: "Effektivitetstap (dødvektstap) er generelt:",
      options: ["Tapt SO når omsatt mengde avviker fra den effektive: trekanten mellom E og T over mengdeavviket", "Selgernes tapte inntekt når prisen faller, målt som arealet mellom gammel og ny prislinje", "Statens tapte skatteinntekt når omsatt mengde synker, altså avgiftssatsen ganget med mengdeavviket", "Forskjellen mellom konsumentoverskudd og produsentoverskudd i den nye markedslikevekten"],
      explanation: "Dødvekttap er verdi som forsvinner helt (ikke tilfaller kjøper, selger eller stat) fordi mengden er feil.",
    },
  ],
  'econ1210-2-2': [
    {
      question: "Effektivitetskriterium 1 («riktig mengde») sier at:",
      options: ["Marginal betalingsvillighet = marginalkostnad (E-høyden = T-høyden)", "Produsentene skal samlet tjene mest mulig på den omsatte mengden", "Prisen skal presses lavest mulig, slik at flest mulig enheter faktisk blir omsatt i markedet", "Alle kjøpere skal få varen, uansett hvor lav betalingsvilligheten deres er i forhold til prisen"],
      explanation: "Den siste enheten skal være verdt akkurat det den koster — oppfylt der E krysser T.",
    },
    {
      question: "Effektivitetskriterium 2 sier at:",
      options: ["Produksjonen skjer i de billigste anleggene (alle med enhetskostnad under prisen er i drift)", "De dyreste anleggene skal settes i drift først, slik at de billigste spares til perioder med høy pris", "Alle anlegg i markedet skal produsere nøyaktig like mange enheter, uansett hva enhetskostnaden deres er", "Alle anlegg skal ha nøyaktig samme enhetskostnad, slik at det ikke spiller noen rolle hvilke som kjører"],
      explanation: "Mengden skal lages så billig som mulig; dyre anlegg står stille mens billige kjører.",
    },
    {
      question: "Effektivitetskriterium 3 sier at:",
      options: ["Godene går til kjøperne med høyest betalingsvillighet", "Godene går til dem som kom først", "Godene går til dem som bor nærmest selgeren", "Godene fordeles likt på alle"],
      explanation: "Alle med betalingsvillighet over prisen kjøper, så varen havner der den verdsettes mest.",
    },
    {
      question: "Hva er effektivitetstap (dødvektstap)?",
      options: ["Tapt SO når omsatt mengde avviker fra $x^*$ — trekanten mellom E og T over mengdeavviket", "Selgernes tapte fortjeneste når prisen presses under likevekten", "Statens administrasjonskostnader ved å håndheve inngrepet som førte mengden bort fra $x^*$", "Differansen mellom konsumentoverskudd og produsentoverskudd ved den faktisk omsatte mengden"],
      explanation: "«Dødvekt» fordi verdien forsvinner helt — den tilfaller verken kjøper, selger eller stat.",
    },
    {
      question: "Ved *for lite* omsatt (mengde under $x^*$) ligger dødvekttrekanten:",
      options: ["Til venstre for $x^*$ — de bortfalte enhetene hadde betalingsvillighet over kostnad", "Til høyre for $x^*$, der de ekstra enhetene koster mer enn kjøperne er villige til å betale", "Rett over prislinja mellom gammel og ny likevektspris, der overskuddet overføres fra kjøper til selger", "Under mengdeaksen som et negativt areal, siden verdien blir borte når mengden ligger under det optimale"],
      explanation: "For lite omsatt: E over T for de manglende enhetene, verdi realiseres ikke. Trekanten ligger mellom faktisk mengde og $x^*$.",
    },
    {
      question: "Ved *for mye* omsatt (mengde over $x^*$) oppstår tap fordi:",
      options: ["Kostnaden overstiger betalingsvilligheten for de ekstra enhetene", "Prisen ligger for høyt over likevektsprisen, så kjøperne trekker seg ut av markedet", "Prisen presses for lavt i markedet, slik at selgerne ikke lenger får dekket enhetskostnaden sin fullt ut", "Betalingsvilligheten overstiger kostnaden for de ekstra enhetene, slik at de burde vært produsert likevel"],
      explanation: "For mye omsatt: T over E, verdi ødelegges. Dødvekttrekanten ligger til høyre for $x^*$ (som ved subsidie).",
    },
    {
      question: "Ved en bindende maksimalpris bestemmes omsatt mengde av:",
      options: ["Den korte siden av markedet (kortside-regelen)", "Gjennomsnittet av tilbud og etterspørsel", "Etterspurt mengde avlest på etterspørselskurven ved den lave maksprisen, altså det kjøperne ønsker å kjøpe", "Den mengden staten fastsetter i forskriften"],
      explanation: "Ingen kan tvinges til å selge, så omsatt mengde = det minste av tilbudt og etterspurt mengde. Å lese av etterspørselskurven her er en klassisk feil (#7).",
    },
    {
      question: "I markedet $x=300-p$, $x=2p$ settes makspris 80. Selgerne tilbyr $x=160$. Effektivitetstapet er:",
      options: ["1 200", "2 400", "600", "1 600"],
      explanation: "Gap ved $x=160$: E-høyde $300-160=140$ minus T-høyde $80$ = $60$; bredde $200-160=40$; $\\tfrac12\\cdot60\\cdot40=1\\,200$.",
    },
    {
      question: "Hvorfor er frikonkurranselikevekten IKKE nødvendigvis «rettferdig»?",
      options: ["Fordi effektivitet handler om kakas størrelse, ikke om hvordan den deles", "Fordi prisen alltid ender for høyt for kjøpere med lav inntekt", "Fordi samfunnsoverskuddet i frikonkurranselikevekt alltid er null og dermed ikke gagner noen som helst", "Fordi likevektsprisen alltid ligger for høyt, slik at kjøperne systematisk betaler mer enn varen er verdt"],
      explanation: "Et effektivt marked kan ha en fordeling mange vil kalle urettferdig — varen går til dem med høyest betalingsvillighet, ofte de med mest penger.",
    },
    {
      question: "Et *tilleggstap* ut over dødvekttrekanten ved makspris oppstår hvis:",
      options: ["Rasjoneringen ikke følger betalingsvillighet (kø, loddtrekning, svartebørs)", "Markedet allerede er i likevekt før maksprisen settes", "Tilbudet er svært elastisk, slik at selgerne raskt trekker seg ut og etterlater et stort udekket behov", "Prisen settes for høyt over likevekten, slik at kjøpere med lav betalingsvillighet presses ut av markedet"],
      explanation: "Da havner varen hos noen som verdsetter den lavere enn utestengte kjøpere — kriterium 3 brytes ekstra.",
    },
    {
      question: "Grunnlinjen i dødvekttrekanten måles som:",
      options: ["Avstanden mellom etterspørselskurven og tilbudskurven ved den feilaktige mengden", "Avstanden fra prislinja til mengdeaksen", "Hele likevektsprisen ganget med mengdeavviket, siden prisen bestemmer verdien som går tapt", "Avstanden mellom etterspørselskurven og prislinja"],
      explanation: "Dødvekttap = $\\tfrac12\\cdot(\\text{gap E–T})\\cdot(\\text{mengdeavvik})$. Å regne mot prislinja i stedet for mellom kurvene er en vanlig feil.",
    },
    {
      question: "Hva menes med at de tre kriteriene er en «sjekkliste»?",
      options: ["Ved et inngrep går man gjennom alle tre og sier hvilke som brytes", "De brukes bare i lærebøker, aldri på eksamen", "At man plukker ut det ene kriteriet som passer best", "Man rangerer dem etter viktighet"],
      explanation: "Sensor honorerer at kriteriene anvendes på inngrepet, ikke bare ramses opp.",
    },
    {
      question: "I markedet $x=360-2p$, $x=2p-40$ ($x^*=160$) omsettes bare 120. Effektivitetstapet er:",
      options: ["800", "1 600", "400", "1 200"],
      explanation: "E-høyde ved 120: $180-60=120$; T-høyde: $60+20=80$; gap $40$; bredde $160-120=40$; $\\tfrac12\\cdot40\\cdot40=800$.",
    },
    {
      question: "Hva er den effektive (samfunnsøkonomisk optimale) mengden?",
      options: ["Mengden der marginal betalingsvillighet = marginalkostnad (E krysser T)", "Mengden der konsumentoverskuddet alene blir så stort som overhodet mulig", "Mengden der produsentoverskuddet er størst mulig, altså der selgerne samlet tjener aller mest", "Mengden der samtlige anlegg i markedet er i drift samtidig, uansett hvor høy enhetskostnaden er"],
      explanation: "Enhver annen mengde gir mindre SO og dermed et effektivitetstap.",
    },
    {
      question: "Ved et bindende pristak brytes typisk hvilke effektivitetskriterier?",
      options: ["Både «riktig mengde» og (via rasjonering) «riktige kjøpere»", "Bare «riktig mengde», ikke noe annet kriterium", "Bare «billigste anlegg», siden de dyreste må kjøre", "Bare «riktige kjøpere», ikke mengden"],
      explanation: "Maksprisen gir for lite omsatt (kriterium 1) og etterspørselsoverskudd som må rasjoneres (kriterium 3).",
    },
  ],
  'econ1210-3-1': [
    {
      question: "En stykkskatt på $t$ kroner per enhet legges på selgerne. Hvilken kurve skifter, og hvor mye?",
      options: ["Tilbudskurven opp med nøyaktig $t$", "Etterspørselskurven ned med nøyaktig $t$", "Tilbudskurven ned med nøyaktig $t$ kroner", "Etterspørselskurven opp med nøyaktig $t$"],
      explanation: "Skatt på selger øker enhetskostnaden med $t$ i hvert anlegg, så tilbudskurven flytter seg parallelt opp med akkurat $t$.",
    },
    {
      question: "For $x = a - bp$ og $x = cp - d$: hva er kjøpernes andel av en stykkskatt?",
      options: ["$\\frac{c}{b+c}$", "$\\frac{b}{b+c}$", "$\\frac{b+c}{c}$", "$\\frac{1}{2}$ alltid"],
      explanation: "Delingsformelen gir kjøpers andel $\\frac{c}{b+c}$ og selgers andel $\\frac{b}{b+c}$; de summerer til 1.",
    },
    {
      question: "Hvem bærer mest av en avgift?",
      options: ["Den minst prisfølsomme (bratteste) siden", "Alltid den avgiften formelt legges på", "Den mest prisfølsomme (flateste) siden, som lett kan trekke seg ut og likevel må bære mest", "Alltid den siden som har lavest inntekt i markedet"],
      explanation: "Den siden som vanskeligst kan trekke seg ut når prisen endres (bratt kurve), sitter igjen med størstedelen av byrden.",
    },
    {
      question: "Spiller det noen rolle for fordelingen om avgiften legges på kjøper eller selger?",
      options: ["Nei — utfallet blir identisk (skatteekvivalens)", "Ja, kjøper bærer mer hvis den legges på kjøper", "Ja, staten får mer inn hvis den legges på selger", "Ja, selger bærer mer hvis den legges på selger"],
      explanation: "Feilkatalog #3: fordelingen bestemmes av kurvenes helninger, ikke av hvem avgiften formelt legges på. Utfallet er identisk.",
    },
    {
      question: "I markedet $x = 900 - 3p$, $x = 2p - 150$ med $t = 25$ på selger: hva blir kjøpers andel?",
      options: ["$\\frac{2}{5}$", "$\\frac{3}{5}$", "$\\frac{1}{2}$", "$\\frac{3}{8}$"],
      explanation: "$b = 3$, $c = 2$, så kjøpers andel $= \\frac{c}{b+c} = \\frac{2}{5}$.",
    },
    {
      question: "Kjøpers byrde pluss selgers byrde av en avgift $t$ er alltid lik:",
      options: ["$t$", "$2t$", "$\\frac{t}{2}$", "dødvektstapet"],
      explanation: "Prisøkningen kjøper møter pluss nettoprisfallet selger møter, summerer alltid til hele avgiften $t$ — en nyttig kontroll.",
    },
    {
      question: "Hva er selgers nettopris etter en stykkskatt $t$ på selger?",
      options: ["$p_1 - t$ (markedsprisen minus avgiften)", "$p_1$ (markedsprisen)", "$p_1 + t$ (markedsprisen pluss avgiften, siden selger legger avgiften oppå prisen)", "$p_0$ (uendret)"],
      explanation: "Selger må gi $t$ til staten per enhet, så nettoprisen er markedsprisen $p_1$ minus $t$ — lavere enn den gamle likevektsprisen.",
    },
    {
      question: "Dødvektstapet ved en stykkskatt beregnes som:",
      options: ["$\\frac{1}{2}t(x_0 - x_1)$", "$\\frac{1}{2}t \\cdot x_1$", "$t \\cdot x_1$ (avgiftssatsen ganget med den nye, lavere omsatte mengden i markedet)", "$t(x_0 - x_1)$"],
      explanation: "Trekanten mellom E og T fra ny til gammel mengde har areal $\\frac{1}{2}t(x_0 - x_1)$. $t\\cdot x_1$ er derimot skatteinntekten.",
    },
    {
      question: "Skatteinntekten $t \\cdot x_1$ er:",
      options: ["En overføring til staten, ikke et samfunnsøkonomisk tap", "Alltid nøyaktig lik dødvektstapet i markedet", "En del av dødvektstapet, siden pengene som betales inn i avgift regnes som tapt verdi", "Tapt verdi for samfunnet som ingen av partene sitter igjen med"],
      explanation: "Pengene forsvinner ikke — de går fra kjøpere/selgere til staten. Bare dødvektstrekanten er ekte tapt verdi.",
    },
    {
      question: "Hvorfor faller omsatt mengde alltid etter en avgift?",
      options: ["Avgiften gjør de siste enhetene ulønnsomme (betalingsvillighet < kostnad + avgift)", "Staten forbyr rett og slett salget av de siste enhetene så snart avgiften er innført i markedet", "Kjøperne mister brått interessen for varen og slutter å etterspørre den så snart avgiften innføres", "Selgerne nekter av prinsipp å produsere når det legges en avgift på varen, uansett hvor lønnsomt det er"],
      explanation: "Avgiften kiler inn mellom kjøpers pris og selgers netto; de siste enhetene der betalingsvilligheten ikke lenger dekker kostnad + avgift, faller bort.",
    },
    {
      question: "Hva er mekanismen bak T-skiftet ved en stykkskatt (anleggsspråket)?",
      options: ["Enhetskostnaden øker med $t$ i hvert anlegg", "Kjøpernes betalingsvillighet stiger", "Antall anlegg i drift faller med én gang, slik at hele tilbudskurven skyves innover mot venstre", "Etterspørselen synker fordi kjøperne får dårligere råd"],
      explanation: "Hvert anlegg må ha $t$ kroner mer for å være lønnsomt, så hele tilbudskurven flytter parallelt opp med $t$. Denne begrunnelsen er verdt et poeng.",
    },
    {
      question: "En helt horisontal (uendelig prisfølsom) tilbudskurve betyr at:",
      options: ["Kjøperne bærer hele avgiften", "Selgerne bærer hele avgiften", "Byrden deles 50/50", "Ingen bærer avgiften"],
      explanation: "Med $c \\to \\infty$ går kjøpers andel $\\frac{c}{b+c} \\to 1$: en fullstendig prisfølsom tilbudsside skyver hele byrden over på kjøperne.",
    },
    {
      question: "En vanlig feil (#2) i stykkskatt-oppgaver er:",
      options: ["Å flytte etterspørselskurven i stedet for tilbudskurven ved skatt på selger", "Å regne dødvektstapet som en trekant i stedet for som et rektangel under prislinja", "Å tolke delingsbrøken $\\frac{c}{b+c}$ verbalt i stedet for å regne den ut med tall", "Å kontrollregne resultatet i både E-funksjonen og T-funksjonen for å sjekke svaret"],
      explanation: "Skatt på selger berører selgers kostnad = tilbudskurven. Å skifte E i stedet, eller skifte feil vei, er feilkatalog #2.",
    },
    {
      question: "I markedet $x = 500 - p$, $x = p - 100$ ($b = c = 1$) deles en avgift:",
      options: ["50/50 mellom kjøper og selger", "Kjøper bærer alt", "Kjøper bærer hele avgiften alene", "Selger bærer alt"],
      explanation: "Like koeffisienter ($b = c$) gir $\\frac{c}{b+c} = \\frac{1}{2}$ på hver side — nøyaktig lik deling.",
    },
    {
      question: "Hva regnes som en pluss-markør (toppsjikt) i en stykkskatt-oppgave?",
      options: ["Å koble delingsbrøken til kurvenes helninger", "Å oppgi delingstallet uten forklaring", "Å regne ut skatteinntekten først", "Å tegne skiftet uten å merke akser"],
      explanation: "Å regne delingen algebraisk OG forklare den med prisfølsomhet/helning er det som skiller de beste besvarelsene.",
    },
    {
      question: "En stykkskatt er:",
      options: ["Et fast kronebeløp per enhet", "En fast prosentandel av prisen", "En skatt på selgers overskudd", "En engangsavgift ved etablering"],
      explanation: "Stykkskatt = fast kroner per enhet (f.eks. 5 kr per liter). En prosent av prisen er en verdiavgift som moms.",
    },
    {
      question: "Ny markedspris etter en stykkskatt på selger er:",
      options: ["$p_1 = p_0 + \\frac{c}{b+c}t$", "$p_1 = p_0 + t$", "$p_1 = p_0 - \\frac{c}{b+c}t$", "$p_1 = p_0$"],
      explanation: "Markedsprisen stiger med kjøpers andel av avgiften, $\\frac{c}{b+c}t$ — ikke med hele $t$, siden selger også bærer en del.",
    },
    {
      question: "Hvilket tall representerer selgers andel av avgiften i $x = 1000 - 4p$, $x = p - 50$?",
      options: ["$\\frac{4}{5}$", "$\\frac{1}{5}$", "$\\frac{1}{2}$", "$\\frac{5}{4}$"],
      explanation: "$b = 4$, $c = 1$: selgers andel $= \\frac{b}{b+c} = \\frac{4}{5}$. Selger bærer mest fordi tilbudet er lite prisfølsomt.",
    },
    {
      question: "Hvorfor taper også selgeren på en skatt lagt på selger?",
      options: ["Nettoprisen $p_1 - t$ er lavere enn den gamle prisen $p_0$", "Etterspørselen faller fordi kjøperne må betale mer per enhet", "Selger må betale hele avgiften $t$ selv uten å velte noe over på kjøperen", "Selger mister alle kundene sine fordi den nye prisen skremmer bort etterspørselen"],
      explanation: "Selv om markedsprisen stiger, får selger bare $p_1 - t$, som er lavere enn $p_0$. Byrden deles med kjøper.",
    },
    {
      question: "Å oppgi delingstallet $\\frac{c}{b+c}$ uten verbal tolkning er:",
      options: ["Feilkatalog #6 — gir ikke full uttelling", "Bare relevant for subsidier", "En tydelig pluss-markør som løfter besvarelsen opp i toppsjiktet hos sensor", "Helt greit å gjøre på eksamen"],
      explanation: "Sensor krever at tall tolkes med ord. Et bart tall uten forklaring av hvorfor siden bærer den andelen, gir trekk (#6).",
    },
    {
      question: "Dersom du legger skatten på kjøper i stedet for selger, skifter:",
      options: ["Etterspørselskurven ned med $t$", "Tilbudskurven opp med $t$", "Etterspørselskurven opp med $t$", "Ingen av kurvene flytter seg"],
      explanation: "Kjøper er villig til å betale $t$ mindre til selger (siden de også må ut med $t$ til staten), så etterspørselskurven flytter ned med $t$ — samme sluttresultat.",
    },
    {
      question: "Hva bør du kontrollere for å fange regnefeil i firetrinnsmetoden?",
      options: ["At $x_1$ gir samme svar i E og i selgers tilbud, og at byrdene summerer til $t$", "At skatteinntekten blir størst mulig, slik at staten henter inn mest mulig proveny", "At dødvektstapet blir null slik at avgiften ikke gir noe effektivitetstap i markedet", "Bare at markedsprisen steg etter avgiften, uten å sjekke mengden eller byrdefordelingen"],
      explanation: "To kontroller: $x_1$ likt i begge funksjoner, og kjøpers + selgers byrde $= t$. Dessuten skal $x_1 < x_0$.",
    },
    {
      question: "I hvilken andel av eksamenssettene forekommer stykkskatt/-subsidie (sjanger E)?",
      options: ["94 % (15 av 16 sett)", "100 %", "Fulle 100 % (16 av 16 sett), altså i absolutt hvert eneste eksamenssett", "50 %"],
      explanation: "Sjanger E er tyngdepunktet i settet, med i 15 av 16 sett og verdt 15–30 % av poengene.",
    },
    {
      question: "Fallet i KO pluss fallet i PO ved en avgift er lik:",
      options: ["Skatteinntekt pluss dødvektstap", "Bare skatteinntekten til staten", "Bare dødvektstapet, altså trekanten med tapt overskudd som ingen part får", "Bare fallet i konsumentoverskuddet"],
      explanation: "Velferdsregnskapet: kjøpere og selgere taper til sammen skatteinntekten (som staten får) pluss dødvektstrekanten (som ingen får).",
    },
    {
      question: "Hvorfor er nettoprisen viktig å skille fra markedsprisen?",
      options: ["Markedsprisen er det kjøper betaler; nettoprisen er det selger beholder — de skiller seg med $t$", "Markedsprisen brukes bare i figuren, mens nettoprisen brukes i regnestykket", "De er alltid nøyaktig like, siden hele avgiften $t$ betales i sin helhet av staten og aldri veltes over", "Nettoprisen $p_1 - t$ er alltid høyere enn markedsprisen $p_1$ som kjøperen faktisk må betale i markedet"],
      explanation: "Markedsprisen $p_1$ (kjøpers pris, på skiftet T) og nettoprisen $p_1 - t$ (selgers pris, på gamle T) skiller seg med akkurat $t$, fordelt etter delingen.",
    },
  ],
  'econ1210-3-2': [
    {
      question: "En stykksubsidie $s$ til selgerne får tilbudskurven til å:",
      options: ["Skifte ned med nøyaktig $s$", "Skifte opp med nøyaktig $s$", "Bli brattere enn før", "Stå helt stille"],
      explanation: "Subsidien senker enhetskostnaden med $s$ i hvert anlegg, så tilbudskurven flytter parallelt ned med akkurat $s$.",
    },
    {
      question: "Hvorfor faller samfunnsøkonomisk overskudd av en subsidie i et velfungerende marked?",
      options: ["Statens utlegg overstiger summen av KO- og PO-gevinsten", "Prisen stiger fordi hele subsidien veltes over på kjøperne", "Konsumentoverskuddet KO faller fordi kjøperne må betale en høyere pris enn før", "Produsentoverskuddet PO faller fordi selgerne beholder mindre per solgte enhet"],
      explanation: "Subsidie-paradokset: både KO og PO stiger, men statens utlegg $s\\cdot x_1$ er større, så SO faller netto.",
    },
    {
      question: "Å påstå at subsidien øker SO fordi både KO og PO øker, er:",
      options: ["Feilkatalog #4 — selve karakterskillet", "Bare feil når det gjelder skatt", "Helt riktig, siden samfunnsøkonomisk overskudd nettopp er summen av KO og PO", "En pluss-markør hos sensor"],
      explanation: "Dette er den klassiske fellen (#4). SO faller nettopp fordi statens utlegg overstiger de private gevinstene.",
    },
    {
      question: "Ved en subsidie ligger dødvektstrekanten:",
      options: ["Til høyre for frikonkurransemengden $x_0$", "Til venstre for $x_0$, der de tapte enhetene lå", "Over prisaksen mellom gammel og ny pris, ikke langs mengdeaksen i det hele tatt", "Nøyaktig på frikonkurransemengden $x_0$"],
      explanation: "Subsidien gir overproduksjon, så trekanten ligger til høyre for $x_0$ — motsatt side av skattetrekanten.",
    },
    {
      question: "Selgers nettopris ved en subsidie $s$ er:",
      options: ["$p_1 + s$ (markedsprisen pluss tilskuddet)", "$p_1$ (den uendrede markedsprisen)", "$p_0$ (den opprinnelige likevektsprisen før subsidien ble innført i markedet)", "$p_1 - s$ (markedsprisen minus tilskuddet), altså lavere enn det kjøper betaler"],
      explanation: "Selger får markedsprisen $p_1$ fra kjøper PLUSS subsidien $s$ fra staten, altså $p_1 + s$ — høyere enn før.",
    },
    {
      question: "Hva er statens utlegg ved en subsidie?",
      options: ["$s \\cdot x_1$", "$s \\cdot x_0$", "$\\frac{1}{2}s x_1$", "$s$"],
      explanation: "Staten betaler $s$ per enhet på hele den nye mengden $x_1$, altså $s\\cdot x_1$.",
    },
    {
      question: "For merenhetene mellom $x_0$ og $x_1$ ved en subsidie gjelder at:",
      options: ["Betalingsvilligheten er lavere enn produksjonskostnaden", "Statens utlegg per enhet er lavere enn selve subsidiesatsen $s$", "Betalingsvilligheten er høyere enn produksjonskostnaden, så enhetene skaper verdi", "Betalingsvillighet er nøyaktig lik kostnaden, slik at merenhetene er verdinøytrale"],
      explanation: "Overproduksjonen betyr at etterspørselskurvens høyde er under tilbudskurvens for merenhetene — de ødelegger verdi. Det er kjernen i paradokset.",
    },
    {
      question: "I markedet $x = 900 - 3p$, $x = p - 100$ med $s = 40$: hvor stor del får kjøperne?",
      options: ["$\\frac{1}{4}$", "$\\frac{3}{4}$", "$\\frac{1}{2}$", "hele beløpet"],
      explanation: "$b = 3$, $c = 1$: kjøpers andel $= \\frac{c}{b+c} = \\frac{1}{4}$. Selgerne får $\\frac{3}{4}$ fordi tilbudet er minst prisfølsomt.",
    },
    {
      question: "Å regne velferden som bare KO + PO uten statens utlegg er:",
      options: ["Feilkatalog #11 (glemt statsutlegg)", "Bare aktuelt når subsidien er stor", "Den helt riktige fremgangsmåten, siden velferden nettopp er summen av KO og PO", "Bare en feil når det gjelder skatt"],
      explanation: "Uten utlegget $s\\cdot x_1$ i regnskapet forsvinner hele paradokset — det er feil #11.",
    },
    {
      question: "Ved en subsidie i et velfungerende marked skjer det med mengden at den:",
      options: ["Blir høyere enn den effektive ($x_1 > x_0$)", "Blir liggende lavere enn den effektive mengden $x_0$", "Blir null fordi den fulle subsidien fjerner ethvert incentiv til å produsere godet", "Er nøyaktig den samme som før subsidien"],
      explanation: "Subsidien presser mengden opp forbi den samfunnsøkonomisk riktige $x_0$ — overproduksjon.",
    },
    {
      question: "Når kan en subsidie likevel være samfunnsøkonomisk riktig?",
      options: ["Ved positive eksterne virkninger", "Bare når prisen allerede er høy", "Alltid, fordi både konsument- og produsentoverskuddet stiger når subsidien innføres", "Alltid, uansett hvilket marked"],
      explanation: "Ved positive eksternaliteter produserer markedet for lite, og en subsidie kan flytte mengden mot det riktige nivået (kap. 4.1).",
    },
    {
      question: "En stykksubsidie kan best beskrives som:",
      options: ["En negativ skatt (speilvendt firetrinnsmetode)", "En prisregulering av markedet", "Et kvotesystem med øvre grense på mengden", "En engangsstøtte ved etablering"],
      explanation: "Alt fra skattekapitlet gjelder speilvendt: T ned, pris ned, mengde opp, trekant til høyre.",
    },
    {
      question: "Hvorfor stiger KO ved en subsidie?",
      options: ["Kjøperne betaler lavere pris og kjøper mer", "Kjøperne får utbetalt subsidien direkte fra staten", "Kjøperne betaler en høyere pris etter subsidien, og det løfter konsumentoverskuddet", "Den omsatte mengden faller etter subsidien"],
      explanation: "Lavere markedspris og høyere mengde løfter konsumentoverskuddet — men det er ikke nok til å oppveie statens utlegg.",
    },
    {
      question: "Dødvektstapet ved en subsidie beregnes som:",
      options: ["$\\frac{1}{2}s(x_1 - x_0)$", "$s \\cdot x_1$", "$\\frac{1}{2}s(x_0 - x_1)$", "$s(x_1 - x_0)$"],
      explanation: "Trekanten til høyre for $x_0$ har areal $\\frac{1}{2}s(x_1 - x_0)$, siden $x_1 > x_0$ ved subsidie.",
    },
    {
      question: "Spiller det noen rolle om subsidien gis til kjøper eller selger?",
      options: ["Nei — samme utfall (ekvivalens)", "Ja, kjøper får mer hvis den gis til kjøper", "Ja, selger får mer hvis den gis til selger", "Ja, den parten som mottar subsidien får hele beløpet"],
      explanation: "Som for skatt bestemmer helningene fordelingen, ikke hvem tilskuddet formelt gis til.",
    },
    {
      question: "Effektivitetsvilkåret som en subsidie bryter er:",
      options: ["$p = $ marginalkostnad (betalingsvillighet = kostnad for siste enhet)", "$p = $ selgerens faste kostnad per anlegg i markedet, uansett omsatt mengde", "$p = 0$ (prisen skal presses helt ned til null for at markedet skal være effektivt)", "$p = $ gjennomsnittskostnad (pris lik totalkostnad delt på antall produserte enheter)"],
      explanation: "SO er størst der E krysser T (betalingsvillighet = marginalkostnad). Subsidien presser mengden dit betalingsvillighet < kostnad.",
    },
    {
      question: "Hva bør en samfunnsøkonom påpeke om en subsidie med fordelingsformål?",
      options: ["Fordelingsgevinsten må veies mot effektivitetstapet; kontantstøtte er ofte billigere", "At subsidien alltid treffer nøyaktig den gruppen den er ment for, helt uten lekkasje til andre", "At den i praksis ikke koster noe fordi statens utlegg bare er en omfordeling av penger", "At samfunnsøkonomisk overskudd alltid øker netto, fordi både KO og PO stiger når subsidien innføres"],
      explanation: "Subsidien har et effektivitetstap; direkte kontantstøtte oppnår ofte fordelingsmålet uten å vri prisene.",
    },
    {
      question: "Ny markedspris etter en subsidie på selger er:",
      options: ["$p_1 = p_0 - \\frac{c}{b+c}s$", "$p_1 = p_0 + \\frac{c}{b+c}s$", "$p_1 = p_0 - s$", "$p_1 = p_0$"],
      explanation: "Prisen faller med kjøpers andel av subsidien, $\\frac{c}{b+c}s$ — ikke med hele $s$, siden selger også får en del som høyere nettopris.",
    },
    {
      question: "Sensor kaller subsidie-paradokset «krevende å forstå» fordi:",
      options: ["Det virker selvmotsigende at SO faller når begge parter tjener", "Resultatet strider mot vanlig politisk tenkning om støtteordninger", "Figuren med skiftet i tilbudskurven og trekanten er nesten umulig å tegne korrekt for hånd", "Selve regningen med firetrinnsmetoden er teknisk vanskelig og krever mange algebrasteg"],
      explanation: "Intuisjonen «alle vinner» kolliderer med at SO faller — nøkkelen er å se statens utlegg og overproduksjonen.",
    },
    {
      question: "Hvilket ledd i velferdsregnskapet gjør at $\\Delta$SO blir negativ?",
      options: ["Statens utlegg $s\\cdot x_1$", "Skatteinntekten fra avgiften", "Fallet i konsumentoverskuddet KO, som trekker det samlede overskuddet nedover", "Økningen i produsentoverskuddet PO"],
      explanation: "$\\Delta\\text{SO} = \\Delta\\text{KO} + \\Delta\\text{PO} - s\\cdot x_1$; utlegget (siste ledd) er størst og trekker SO ned.",
    },
    {
      question: "Ved subsidie skifter tilbudskurven ned. Hva er mekanismen?",
      options: ["Enhetskostnaden faller med $s$ i hvert anlegg", "Prisen settes av staten på et lavere nivå enn før", "Etterspørselen øker fordi kjøperne får mer å rutte med når subsidien betales ut", "Antall anlegg i drift faller kraftig"],
      explanation: "Hvert anlegg trenger $s$ kroner mindre i pris for å være lønnsomt, så hele tilbudskurven flytter ned med $s$.",
    },
    {
      question: "Kjøperne får en liten del av subsidien når:",
      options: ["Etterspørselen er mer prisfølsom enn tilbudet ($b > c$)", "Kjøperne allerede har svært høy betalingsvillighet for godet", "Tilbudet er mer prisfølsomt enn etterspørselen, slik at selgerne reagerer sterkest", "Subsidiebeløpet $s$ er lite, slik at kjøpernes andel av tilskuddet også blir liten"],
      explanation: "Kjøpers andel $\\frac{c}{b+c}$ er liten når $c$ er liten mot $b$: prisfølsomme kjøpere, lite prisfølsomme selgere fanger mesteparten.",
    },
    {
      question: "En vanlig feil er å tegne subsidiens dødvektstrekant:",
      options: ["Til venstre for $x_0$ (som ved skatt)", "Til høyre for $x_0$", "Med grunnlinjen langs prisaksen", "Uten navn på aksene"],
      explanation: "Ved subsidie ligger trekanten til HØYRE (overproduksjon). Å tegne den til venstre er å behandle den som en skatt.",
    },
    {
      question: "Hva er statens utlegg dersom $s = 40$ og $x_1 = 380$?",
      options: ["15 200", "12 000", "760", "40"],
      explanation: "$s \\cdot x_1 = 40 \\cdot 380 = 15\\,200$ kroner — statens totale subsidiekostnad.",
    },
    {
      question: "Hvorfor er subsidie-paradokset og «som samfunnsøkonom»-drøftingen ulike?",
      options: ["Paradokset gjelder overproduksjon i ett marked; alternativkostnad gjelder ressursenes beste anvendelse ellers", "Paradokset gjelder bare når subsidien er stor nok til å snu markedet", "De er i praksis helt identiske begreper som bare bruker to ulike navn på nøyaktig det samme fenomenet i markedet", "Alternativkostnad er kun et relevant begrep i monopoltilfeller, mens paradokset bare oppstår under frikonkurranse"],
      explanation: "Beslektet, men ulikt: paradokset er velferdsregnskapet i markedet; alternativkostnadsdrøftingen (kap. 3.5) ser på hva ressursene kunne skapt andre steder.",
    },
  ],
  'econ1210-3-3': [
    {
      question: "Ved en bindende maksimalpris bestemmes omsatt mengde av:",
      options: ["Tilbudet (kortsiden)", "Etterspørselen ved maksprisen", "Gjennomsnittet av tilbud og etterspørsel", "Maksprisen selv"],
      explanation: "Kortside-regelen: ingen kan tvinges til å selge, så den lavere tilbudte mengden bestemmer omsetningen.",
    },
    {
      question: "En maksimalpris har effekt bare hvis den er satt:",
      options: ["Under likevektsprisen", "Over likevektsprisen i markedet", "Nøyaktig på likevektsprisen", "Over marginalkostnaden"],
      explanation: "En makspris over likevekt er ikke bindende og gjør ingenting. Under likevekt skaper den mangel.",
    },
    {
      question: "Ved makspris under likevekt oppstår:",
      options: ["Et etterspørselsoverskudd (mangel)", "Et tilbudsoverskudd", "En ny likevekt til lavere pris", "Ingen ubalanse i markedet"],
      explanation: "Den lave prisen gir høy etterspørsel og lavt tilbud, altså mangel som må rasjoneres.",
    },
    {
      question: "Hvorfor må godet rasjoneres ved en makspris?",
      options: ["Fordi etterspørselen overstiger tilbudet — det er ikke nok til alle", "Fordi tilbudet overstiger etterspørselen ved den prisen myndighetene har satt", "Fordi den fastsatte prisen ligger for høyt over likevekten til at noen vil kjøpe", "Fordi selgerne nekter å levere godet til den lave prisen myndighetene har bestemt"],
      explanation: "Mangel betyr at flere vil kjøpe enn det finnes; noe må avgjøre hvem som får, og modellen sier ikke hva.",
    },
    {
      question: "Tilleggstapet ved makspris oppstår når:",
      options: ["Rasjoneringen ikke følger betalingsvillighet", "Prisen settes for lavt", "Tilbudt mengde øker på grunn av maksprisen", "Alle som vil, får kjøpe"],
      explanation: "Hvis de knappe enhetene havner hos feil kjøpere (lav betalingsvillighet), mister vi verdi utover mengdetapet.",
    },
    {
      question: "Argumentet «produsentene har lav gjennomsnittskostnad, så prisen bør tvinges ned» er:",
      options: ["Feil — riktig mengde krever pris = marginalkostnad", "Bare gyldig for minstepris", "Riktig, siden gjennomsnittskostnaden er lav", "Et effektivitetsargument"],
      explanation: "Feilkatalog #7: god fortjeneste er et fordelingspoeng, ikke et effektivitetsargument. Prisen skal reflektere marginalkostnad.",
    },
    {
      question: "En minstelønn over likevektslønnen gir:",
      options: ["Arbeidsledighet (tilbudsoverskudd av arbeid)", "Mangel på arbeidskraft", "Lavere effektiv lønn for de ansatte", "Full sysselsetting"],
      explanation: "Flere vil jobbe enn bedriftene ansetter til den høye lønnen; differansen er ledigheten.",
    },
    {
      question: "Ved en bindende minstepris bestemmes omsatt mengde av:",
      options: ["Etterspørselen (kortsiden)", "Minsteprisen som myndighetene har fastsatt", "Gjennomsnittet av tilbudt og etterspurt mengde ved den bindende minsteprisen", "Den mengden selgerne ønsker å levere"],
      explanation: "Ved prisgulv over likevekt er kjøperne kortsiden — de vil ha minst, og ingen kan tvinges til å kjøpe.",
    },
    {
      question: "I markedet $x = 1400 - 2p$, $x = 2p - 200$ med $p_{\\max} = 300$: hva blir omsatt mengde?",
      options: ["400 (tilbudet)", "800 (etterspørselen)", "600 (likevekt)", "200"],
      explanation: "Ved $p = 300$ er tilbud $= 2\\cdot300-200 = 400$, kortsiden. Etterspørsel er 800, men bare 400 finnes.",
    },
    {
      question: "Å lese omsatt mengde av etterspørselskurven ved en makspris er:",
      options: ["Feilkatalog #7 (glemt kortside-regelen)", "Bare feil ved minstepris", "Riktig framgangsmåte ved makspris", "En pluss-markør hos sensor"],
      explanation: "Ved makspris er tilbudet kortsiden. Å lese den høyere etterspurte mengden overser at ingen kan tvinges til å selge.",
    },
    {
      question: "Hvilket fordelingsproblem løser modellen IKKE ved makspris?",
      options: ["Hvem av de mange kjøperne som skal få det knappe godet", "Hvilken pris selgerne til slutt får lov til å ta for godet", "Hvem av de aktuelle selgerne som skal levere den knappe mengden til kjøperne", "Hvor mye som samlet produseres av godet når maksprisen presser tilbudet nedover"],
      explanation: "Modellen sier at noen må gå tomhendt, men ikke hvem — rasjoneringen ligger utenfor modellen.",
    },
    {
      question: "Et alternativ til pristak som når fordelingsmålet med mindre effektivitetstap er:",
      options: ["Direkte kontantstøtte / overføring", "En enda lavere maksimalpris", "En høyere avgift på godet slik at prisen faller og de utsatte gruppene skjermes", "Et forbud mot videresalg av godet"],
      explanation: "Kontantstøtte lar prisen reflektere marginalkostnaden (effektiv mengde og fordeling) mens utsatte kompenseres separat.",
    },
    {
      question: "Standardcasen for prisregulering på nyere ECON1210-eksamener er:",
      options: ["Maksimalpris på strøm/gass", "Maksimalpris på husleie", "Maksimalpris på billetter til store kultur- og idrettsarrangement", "Minstepris på melk til bonden"],
      explanation: "Alle makspris-casene kom 2022 eller senere, og handler om strøm/gass etter energikrisen.",
    },
    {
      question: "Ved en minstepris over likevekt oppstår:",
      options: ["Et tilbudsoverskudd", "Et etterspørselsoverskudd", "Ingen ubalanse i markedet", "En mangel på godet"],
      explanation: "Den høye prisen gir stort tilbud og lav etterspørsel; selgerne vil selge mer enn kjøperne vil ha.",
    },
    {
      question: "Bindende reguleringer bryter typisk hvor mange av de tre effektivitetskriteriene?",
      options: ["Alle tre", "Bare ett", "Ingen av dem", "Bare fordelingskriteriet"],
      explanation: "Feil mengde, mulig feil produksjon og feil fordeling — alle tre kriteriene svikter.",
    },
    {
      question: "I arbeidsmarkedet er bedriftene:",
      options: ["Kjøpere av arbeid (fallende arbeidsetterspørsel i lønn)", "Selgere av arbeidskraft, med en stigende tilbudskurve i lønna", "Uten reell betydning for lønnsdannelsen, som styres helt av arbeidernes tilbud", "Kortsiden ved makspris fordi de er de eneste som kan tvinges til å levere arbeid"],
      explanation: "Bedriftene etterspør arbeid; ved minstelønn over likevekt er deres etterspørsel kortsiden som setter sysselsettingen.",
    },
    {
      question: "En følge av bindende makspris kan være:",
      options: ["Svartebørs og kvalitetsfall", "Overproduksjon av godet i markedet", "Lavere etterspørsel enn tilbud", "At prisen stiger over likevekt"],
      explanation: "Markedet søker seg tilbake mot likevekten: ulovlig omsetning til høyere pris, eller at selgerne kutter kvalitet.",
    },
    {
      question: "Selv med perfekt rasjonering faller SO ved makspris fordi:",
      options: ["Omsatt mengde er lavere enn den effektive (mengdetap)", "Prisen ligger for høyt over den opprinnelige likevekten", "Prisen er satt for høyt, slik at kjøperne trekker seg ut og etterspørselen svikter", "Tilbudet øker fordi selgerne responderer på den lavere maksprisen med mer produksjon"],
      explanation: "Dødvektstrekanten fra omsatt mengde til likevektsmengde er mengdetapet, uavhengig av rasjoneringsmåte.",
    },
    {
      question: "Mangelen ved en makspris beregnes som:",
      options: ["Etterspurt minus tilbudt mengde ved maksprisen", "Tilbudt minus etterspurt mengde", "Maksprisen ganget med den omsatte mengden for å finne verdien av mangelen", "Likevektsmengde minus tilbudt"],
      explanation: "Etterspørselsoverskuddet er $x_D(p_{\\max}) - x_T(p_{\\max})$ — det som mangler for å dekke alle kjøpere.",
    },
    {
      question: "Hva bør et fullstendig svar om prisregulering inneholde i tillegg til effektivitetstapet?",
      options: ["Anerkjennelse av fordelingsmotivet og et mindre vridende alternativ", "En moralsk fordømmelse av hele støtteordningen", "Bare selve regnestykket for effektivitetstapet uten videre drøfting av motivene", "Kun kortside-mengden og prisen, siden fordelingen ligger utenfor selve modellen"],
      explanation: "Reguleringen har ofte et legitimt fordelingsformål; svaret veier dette mot tapet og peker på f.eks. kontantstøtte.",
    },
  ],
  'econ1210-3-4': [
    {
      question: "Første steg i firetrinnsmetoden er alltid å:",
      options: ["Skifte riktig kurve riktig vei med nøyaktig beløpet", "Beregne dødvektstapet før noen av kurvene er flyttet", "Finne delingen mellom kjøper og selger før kurvene i det hele tatt er flyttet på", "Regne ut statens samlede inntekt"],
      explanation: "Rekkefølgen er: skift → ny likevekt → deling → velferd. Skiftet kommer først, med mekanismen.",
    },
    {
      question: "Ved subsidie på selger flytter tilbudskurven:",
      options: ["Ned med nøyaktig $s$", "Opp med nøyaktig $s$", "Ingen retning", "Ned med $\\frac{c}{b+c}s$"],
      explanation: "Subsidie senker enhetskostnaden med $s$ i hvert anlegg → T ned med $s$. Skift er alltid hele beløpet, ikke andelen.",
    },
    {
      question: "Ny markedspris ved en avgift er:",
      options: ["$p_1 = p_0 + \\frac{c}{b+c}t$", "$p_1 = p_0 + t$", "$p_1 = p_0 + \\frac{b}{b+c}t$", "$p_1 = p_0$"],
      explanation: "Prisen stiger med kjøpers andel av avgiften, $\\frac{c}{b+c}t$.",
    },
    {
      question: "En helt horisontal (uendelig prisfølsom) tilbudskurve betyr at en avgift:",
      options: ["Bæres helt av kjøperne", "Bæres helt av selgerne", "Deles 50/50", "Ikke har effekt"],
      explanation: "Med $c \\to \\infty$ går kjøpers andel $\\frac{c}{b+c} \\to 1$; slake selgere skyver hele byrden over på kjøperne.",
    },
    {
      question: "Skatteinntekten $t \\cdot x_1$ i velferdsregnskapet er:",
      options: ["En overføring, ikke et samfunnsøkonomisk tap", "Alltid nøyaktig lik dødvektstapet", "En del av dødvektstapet, ettersom pengene forsvinner ut av markedslikevekten", "Selgernes tap som staten dekker"],
      explanation: "Pengene går til staten, ikke ut av samfunnet. Bare dødvektstrekanten er ekte tapt verdi.",
    },
    {
      question: "En avgift og en makspris skiller seg ved at:",
      options: ["Avgiften gir ingen mangel og gir statsinntekt; maksprisen gir mangel og rasjonering", "De er i praksis helt identiske: begge kiler inn en forskjell og gir staten inntekt", "Avgiften skaper mangel og krever rasjonering, mens maksprisen klarerer markedet greit", "Maksprisen gir staten inntekt gjennom omsetningen, mens avgiften bare vrir mengden"],
      explanation: "Avgiften lar markedet klarere seg til høyere pris; maksprisen kutter til kortsiden og skaper mangel som må rasjoneres.",
    },
    {
      question: "En rask kontroll av delingen er at:",
      options: ["Kjøpers byrde pluss selgers byrde er nøyaktig beløpet", "Statens inntekt er nøyaktig lik hele dødvektstapet i markedet", "Dødvektstapet er lik null når delingen mellom partene er regnet ut på riktig måte", "Prisen kjøperne betaler har doblet seg sammenlignet med den opprinnelige likevekten"],
      explanation: "Byrdene summerer alltid til hele skatten/subsidien — en nyttig sjekk mot regnefeil.",
    },
    {
      question: "I markedet $x = 800 - 4p$, $x = 2p - 100$ med $t = 30$: hva bærer kjøperne?",
      options: ["$\\frac{1}{3}$ (10 kr)", "$\\frac{2}{3}$ (20 kr)", "$\\frac{1}{2}$ (15 kr)", "hele (30 kr)"],
      explanation: "$b = 4$, $c = 2$: kjøpers andel $\\frac{2}{6} = \\frac{1}{3}$, altså 10 kr av 30.",
    },
    {
      question: "At det er likegyldig om avgiften legges på kjøper eller selger, kalles:",
      options: ["Skatteekvivalens", "Kortside-regelen", "Subsidie-paradokset", "Pigou-prinsippet"],
      explanation: "Ekvivalens: markedets helninger, ikke lovteksten, bestemmer fordelingen. Å påpeke det unngår felle #3.",
    },
    {
      question: "Ved en subsidie ligger dødvektstrekanten:",
      options: ["Til høyre for $x_0$ (overproduksjon)", "Rett over den opprinnelige likevektsprisen i figuren", "Til venstre for $x_0$, siden subsidien presser mengden ned under likevekten", "Nøyaktig i den gamle likevekten"],
      explanation: "Subsidien gir for stor mengde, så trekanten ligger til høyre — motsatt av skattens.",
    },
    {
      question: "Ved makspris under likevekt bestemmes omsatt mengde av:",
      options: ["Tilbudet (kortsiden)", "Etterspørselen ved maksprisen", "Maksprisen selv, som leses av på begge kurvene", "Gjennomsnittet av de to"],
      explanation: "Kortside-regelen: ingen kan tvinges til å selge, så tilbudt mengde ved maksprisen er den bindende.",
    },
    {
      question: "Å oppgi delingsbrøken uten verbal tolkning er:",
      options: ["Feilkatalog #6 (tall uten tolkning)", "Bare en feil når det gjelder subsidier", "En klar pluss-markør hos sensor som viser at man behersker regneteknikken godt", "Et krav bare på muntlig eksamen"],
      explanation: "Sensor krever ord til tallene: forklar hvorfor siden bærer den andelen den gjør.",
    },
    {
      question: "Dødvektstap ved en avgift beregnes som:",
      options: ["$\\frac{1}{2}t(x_0 - x_1)$", "$\\frac{1}{2}t \\cdot x_0$", "$t(x_0 - x_1)$, uten faktoren en halv foran mengdeendringen i beregningen", "$t \\cdot x_1$ (statens inntekt)"],
      explanation: "Trekanten mellom E og T fra ny til gammel mengde: $\\frac{1}{2}t(x_0 - x_1)$.",
    },
    {
      question: "Selgerne bærer mest av en avgift når:",
      options: ["Tilbudet er minst prisfølsomt (bratt T, liten $c$)", "Tilbudet er svært prisfølsomt", "Avgiften er liten nok til å havne hos selgerne", "Etterspørselen er bratt"],
      explanation: "Den minst prisfølsomme siden kan vanskeligst trekke seg ut og bærer mest; bratt T (liten $c$) betyr høy selgerandel $\\frac{b}{b+c}$.",
    },
    {
      question: "Hvorfor faller SO ved en subsidie i et velfungerende marked?",
      options: ["Statens utlegg overstiger KO+PO-gevinsten (overproduksjon)", "Den omsatte mengden faller under den effektive mengden i markedet", "Selgerne taper på ordningen fordi subsidien presser deres netto pris nedover", "KO faller, fordi kjøperne må betale mer per enhet etter at subsidien er innført"],
      explanation: "Subsidie-paradokset: begge parter tjener, men merenhetene koster mer enn de er verdt, og utlegget er størst.",
    },
    {
      question: "Skatt på kjøper flytter:",
      options: ["Etterspørselskurven ned med $t$", "Tilbudskurven opp med $t$", "Etterspørselskurven opp med $t$", "Tilbudskurven ned med $t$"],
      explanation: "Kjøper er villig til å betale $t$ mindre til selger, så etterspørselskurven skifter ned — samme sluttresultat som skatt på selger.",
    },
    {
      question: "Statens utlegg ved en subsidie er:",
      options: ["$s \\cdot x_1$", "$s \\cdot x_0$", "$\\frac{1}{2}s x_1$", "$s$"],
      explanation: "Staten betaler $s$ per enhet på hele nye mengden $x_1$.",
    },
    {
      question: "Mengden endrer seg alltid slik at:",
      options: ["Skatt krymper den, subsidie øker den", "Begge to øker den omsatte mengden i markedet", "Ingen av dem endrer mengden, fordi partene alltid velter kilen over på hverandre", "Begge krymper den omsatte mengden"],
      explanation: "Avgift kiler inn og reduserer mengden ($x_1 < x_0$); subsidie øker den ($x_1 > x_0$).",
    },
    {
      question: "Å begrunne T-skiftet i anleggsspråket («enhetskostnaden endres i alle anlegg») er:",
      options: ["Mekanismen sensor honorerer mer enn pilen", "Bare relevant når det gjelder subsidier, ikke avgifter", "Bortkastet tid, siden sensor uansett bare vurderer selve pilen i figuren", "Et krav bare i muntlig eksamen"],
      explanation: "Sensor gir mer for begrunnelsen av skiftet enn for selve pilen i figuren.",
    },
    {
      question: "I den integrerte oppgaven (skatt vs. makspris) er hovedforskjellen at:",
      options: ["Maksprisen skaper en mangel som må rasjoneres, avgiften ikke", "Maksprisen gir staten en betydelig inntekt fra hele omsetningen", "De gir nøyaktig samme omsatte mengde, bare fordelt ulikt mellom kjøper og selger", "Avgiften skaper en mangel som må rasjoneres, mens maksprisen lar markedet klarere seg"],
      explanation: "Avgiften lar markedet klarere seg (ingen mangel); maksprisen kutter til kortsiden og etterlater et etterspørselsoverskudd.",
    },
  ],
  'econ1210-3-5': [
    {
      question: "Kjernen i «som samfunnsøkonom»-svaret på næringsstøtte er:",
      options: ["Alternativkostnaden — ressursene kaster mer av seg andre steder", "At arbeidsplasser alltid må reddes uansett hva de koster samfunnet", "At bedriften selv bør spare mer og kutte kostnader før den ber staten om støtte", "At staten uansett har god råd til å dekke tapet uten at det koster samfunnet noe"],
      explanation: "Subsidien senker de private kostnadene, men ikke ressursenes alternativkostnad — det er sløseriet.",
    },
    {
      question: "En subsidie til en ulønnsom bedrift endrer:",
      options: ["De private kostnadene, men ikke alternativkostnaden", "Alternativkostnaden, men ikke de private", "Begge kostnadene i like stor grad", "Alternativkostnaden, men ikke bedriftens egne private kostnader ved produksjonen"],
      explanation: "Staten dekker en del av bedriftens egne kostnader, men ressursenes verdi i beste alternative anvendelse er uendret.",
    },
    {
      question: "«Tapte arbeidsplasser» er ikke det samme som «tapt verdiskaping» fordi:",
      options: ["Arbeidskraften frigjøres til mer produktive anvendelser", "Lønnskostnadene alltid overstiger verdiskapingen i en bedrift", "Staten alltid kompenserer de oppsagte fullt ut, så ingen reell verdi går tapt", "Arbeidsplasser i seg selv aldri betyr noe for verdiskapingen i samfunnsøkonomien"],
      explanation: "Ved nedleggelse forsvinner ikke arbeidskraften; den kan skape mer verdi et annet sted, så samlet verdiskaping stiger på sikt.",
    },
    {
      question: "Når kan støtte til en ulønnsom bedrift likevel forsvares?",
      options: ["Ved en reell, upriset positiv eksternalitet", "Når bedriften eksporterer mye", "Når bedriften er svært stor i regionen", "Når mange jobber der"],
      explanation: "Positive eksternaliteter (kunnskapsspredning) betyr at markedet produserer for lite; da kan støtte flytte innsatsen mot riktig nivå.",
    },
    {
      question: "Et avgiftsfritak til en ulønnsom, forurensende bedrift gir:",
      options: ["Dobbel ineffektivitet: mer utslipp OG fastlåst ressursbruk", "Lavere pris til kjøperne uten andre virkninger", "Renere miljø fordi bedriften får råd til å investere i renseteknologi", "Mer effektiv drift ettersom fritaket senker de faste kostnadene per enhet"],
      explanation: "Fritaket fjerner utslippsprisingen (mer skade) og subsidierer ulønnsom drift (fastlåste ressurser) på én gang.",
    },
    {
      question: "Å gi mest støtte til bedriftene med lavest overskudd:",
      options: ["Premierer ofte de minst produktive og vrir ressursbruken mot dårligste anvendelser", "Øker samlet verdiskaping ved at flere bedrifter overlever og holder folk i arbeid", "Gir alltid den mest rettferdige fordelingen fordi de svakeste bedriftene løftes opp", "Er kostnadseffektivt fordi støtten treffer nettopp der behovet er aller størst"],
      explanation: "Lavt overskudd henger ofte sammen med lav produktivitet; å belønne det låser ressurser i de dårligste anvendelsene.",
    },
    {
      question: "En vanlig feil i denne sjangeren er å:",
      options: ["Skrive et moralessay uten det økonomiske kjerneargumentet", "Regne ut dødvektstapet i stedet for å drøfte alternativkostnaden", "Legge for stor vekt på alternativkostnaden og glemme de menneskelige hensynene", "Anerkjenne de private tapene grundig, men samtidig undervurdere miljøgevinsten helt"],
      explanation: "Feilkatalog #10-slektning: engasjement uten alternativkostnads-argumentet gir ikke uttelling.",
    },
    {
      question: "Hvordan skiller alternativkostnadsdrøftingen seg fra subsidie-paradokset?",
      options: ["Paradokset gjelder ett marked; alternativkostnad gjelder ressursenes beste bruk ellers", "De er i praksis identiske, siden begge måler velferdstapet i det samme delmarkedet", "Alternativkostnad gjelder bare monopolmarkeder, mens paradokset gjelder frikonkurranse", "Paradokset besvares verbalt, mens alternativkostnad alltid krever en grafisk figuranalyse"],
      explanation: "Paradokset er velferdsregnskapet i markedet (overproduksjon); alternativkostnad handler om hva ressursene kunne skapt et annet sted.",
    },
    {
      question: "Den beste hjelpen til ansatte i en ulønnsom bedrift er ifølge samfunnsøkonomen:",
      options: ["Å lette omstillingen (kompetanse, inntektssikring)", "Å subsidiere driften varig over statsbudsjettet", "Å forby nedleggelse ved lov slik at ingen ansatte kan miste jobben sin", "Å heve prisen på varen bedriften selger så inntektene og marginene bedres"],
      explanation: "Omstillingsstøtte ivaretar menneskene uten å låse ressursene i uproduktiv drift — både folk og verdiskaping vinner.",
    },
    {
      question: "«Som samfunnsøkonom»-oppgaven skal som regel besvares:",
      options: ["Verbalt (argumentet, ikke figur/algebra)", "Med full algebraisk utledning", "Med en detaljert velferdsfigur", "Med en tabell over velferdstallene"],
      explanation: "Oppgaven ber ofte eksplisitt om et verbalt svar; poenget er det klart formulerte økonomiske argumentet.",
    },
  ],
  'econ1210-4-1': [
    {
      question: "Hva er en ekstern virkning (eksternalitet)?",
      options: ["En kostnad eller gevinst som rammer/tilfaller andre enn beslutningstakeren og ikke prises i markedet", "En avgift staten legger på forurensende varer for å hente inn ekstra skatteinntekt", "En kostnad som produsenten selv bærer og betaler for hver eneste enhet han lager", "Prisforskjellen som oppstår mellom to konkurrerende markeder for samme type vare"],
      explanation: "Kjernen er at virkningen rammer tredjeparter og ikke prises i markedet, så beslutningstakeren ignorerer den.",
    },
    {
      question: "Ved en NEGATIV ekstern virkning produserer markedet (uregulert)",
      options: ["for mye", "for lite", "akkurat riktig mengde", "ingenting"],
      explanation: "Produsenten ser bare private kostnader, ikke skaden på tredjeparter, så mengden blir for stor.",
    },
    {
      question: "Ved en POSITIV ekstern virkning produserer markedet (uregulert)",
      options: ["for lite", "for mye", "akkurat riktig", "alltid null"],
      explanation: "Den samfunnsøkonomiske gevinsten per enhet er høyere enn den private, så markedet underforsyner.",
    },
    {
      question: "Hva er samfunnsøkonomisk marginalkostnad (SMK)?",
      options: ["Privat marginalkostnad (tilbudskurven) pluss marginal skadekostnad", "Privat marginalkostnad minus marginal skadekostnad", "Etterspørselskurvens høyde ved den mengden markedet faktisk omsetter i likevekt", "Marginal skadekostnad alene, uten produksjonskostnaden"],
      explanation: "SMK legger skaden på tredjeparter til den private kostnaden; ved konstant skade ligger den parallelt over T.",
    },
    {
      question: "Hvor er den samfunnsøkonomisk riktige mengden ved en negativ eksternalitet?",
      options: ["Der E krysser SMK", "Der E krysser T i markedet", "Der utslippet er null", "Der T krysser prisaksen"],
      explanation: "Optimum er der marginal betalingsvillighet (E) møter den sanne kostnaden (SMK), ikke den private (T).",
    },
    {
      question: "Hva er en Pigou-avgift?",
      options: ["En stykkskatt lik den marginale skadekostnaden", "En avgift lik den totale skaden delt på antall bedrifter", "En avgift som alltid gir statens største inntekt", "En subsidie til forurensende bedrifter"],
      explanation: "Pigou-avgiften settes lik den marginale skaden; den løfter T opp til SMK og gir riktig mengde.",
    },
    {
      question: "En Pigou-avgift lik den marginale skaden vil",
      options: ["fjerne dødvektstapet av eksternaliteten", "skape et helt nytt dødvektstap", "ikke endre noe siden bedriften uansett fortsetter å produsere den samme mengden", "øke den omsatte mengden i markedet"],
      explanation: "Fordi utgangspunktet var ineffektivt (for mye produsert), fører avgiften mengden til optimum og fjerner tapet.",
    },
    {
      question: "Hvorfor virker en avgift ULIKT i et velfungerende marked og mot en eksternalitet?",
      options: ["I et velfungerende marked skaper avgiften et tap; mot en eksternalitet fjerner den ett", "Avgiften virker nøyaktig likt i begge tilfeller fordi den alltid vrir mengden nedover", "Mot en eksternalitet skaper avgiften alltid et enda større tap enn i et sunt marked", "I et velfungerende marked har avgiften ingen reell effekt på mengden som omsettes"],
      explanation: "Virkningen avhenger av om utgangspunktet var effektivt: velfungerende marked = tap skapes; eksternalitet = tap fjernes.",
    },
    {
      question: "Speilbildet av en Pigou-avgift ved en POSITIV eksternalitet er",
      options: ["en subsidie lik den marginale eksterne gevinsten", "en strengere kvoteordning for produksjonen av det gode godet", "et forbud mot at private aktører kan produsere for lite av det gode godet", "en høyere avgift som fanger den ekstra samfunnsverdien produksjonen skaper"],
      explanation: "Ved for lite produksjon retter en subsidie lik den eksterne gevinsten opp mengden.",
    },
    {
      question: "Kolliderer en subsidie ved positiv eksternalitet med subsidie-paradokset?",
      options: ["Nei — paradokset gjelder kun i et velfungerende marked", "Nei — fordi subsidier alltid øker SO", "Ja — enhver subsidie senker alltid SO", "Ja — men bare hvis skaden er stor"],
      explanation: "Subsidie-paradokset gjelder velfungerende markeder; ved markedssvikt kan en subsidie fjerne et tap.",
    },
    {
      question: "At avgiftsinntekten overstiger den samlede skaden betyr",
      options: ["ikke at avgiften er for høy — satsen settes ved marginal skade", "at avgiften er for høy og bør senkes", "at avgiften er satt for høyt og derfor bør senkes ned mot den samlede skaden", "at markedet allerede er effektivt siden staten henter inn mer enn hele skaden"],
      explanation: "Avgiften kreves inn på alle enheter, mens riktig sats bestemmes av den marginale skaden — total inntekt er irrelevant for satsen.",
    },
    {
      question: "I figuren ligger SMK-kurven (ved konstant skade)",
      options: ["parallelt et fast beløp over tilbudskurven", "loddrett gjennom likevekten", "sammenfallende med etterspørselskurven", "parallelt under tilbudskurven"],
      explanation: "Ved konstant marginal skade er SMK bare T løftet med skadebeløpet i hele lengden.",
    },
    {
      question: "Dødvektstapet av en uregulert negativ eksternalitet er",
      options: ["trekanten mellom SMK og E fra riktig mengde til markedsmengden", "trekanten mellom tilbudskurven og prisaksen opp til markedsmengden", "hele arealet under etterspørselskurven fram til den mengden markedet faktisk omsetter", "statens samlede avgiftsinntekt regnet som satsen multiplisert med solgt mengde"],
      explanation: "For enhetene mellom optimum og markedsmengde er SMK høyere enn E — trekanten mellom dem er tapt verdi.",
    },
    {
      question: "Hva menes med å 'internalisere' en eksternalitet?",
      options: ["Å få beslutningstakeren til å ta inn over seg kostnaden/gevinsten for andre", "Å la staten overta hele driften av den forurensende bedriften og styre den selv", "Å forby produksjonen helt slik at den skadelige aktiviteten opphører fullstendig", "Å flytte produksjonen til utlandet slik at skaden rammer noen andre enn oss selv"],
      explanation: "En avgift/subsidie lik den eksterne virkningen får produsenten til å se den sanne samfunnskostnaden.",
    },
    {
      question: "Hvilket er et eksempel på en NEGATIV eksternalitet?",
      options: ["CO2-utslipp fra en fabrikk", "Birøkt og pollinering", "Vaksinering mot smitte", "Grunnforskning"],
      explanation: "Utslipp påfører tredjeparter en kostnad; de tre andre gir tredjeparter en gevinst (positive).",
    },
    {
      question: "Hvilket er et eksempel på en POSITIV eksternalitet?",
      options: ["Vaksinering som beskytter andre", "Avrenning fra oppdrett", "Røyk som plager naboene", "Støy fra en byggeplass"],
      explanation: "Vaksinen beskytter også uvaksinerte; de andre påfører tredjeparter kostnader (negative).",
    },
    {
      question: "Den private marginalkostnaden i figuren tilsvarer",
      options: ["Tilbudskurven", "SMK-kurven", "Etterspørselskurven", "prisaksen"],
      explanation: "Tilbudskurven er produsentens egen (private) kostnad; SMK legger skaden på tredjeparter oppå den.",
    },
    {
      question: "Er samfunnsøkonomisk optimum ved en eksternalitet der utslippet er null?",
      options: ["Nei — noe utslipp er verdt kostnaden hvis betalingsvilligheten er høy nok", "Nei — optimum er alltid markedsmengden", "Ja — så lenge den marginale skaden er positiv, er null utslipp det eneste riktige målet", "Ja — enhver skade på naturen er uakseptabel"],
      explanation: "Optimum er der E = SMK; dette gir positiv mengde så lenge betalingsvilligheten dekker den sanne kostnaden.",
    },
    {
      question: "En vanlig feil i miljøoppgaver (feilkatalog #10) er",
      options: ["å skrive moralessay uten mekanismen (privat vs. samfunnskostnad → for mye)", "å definere eksternaliteten presist før man i det hele tatt drøfter virkemidler", "å tegne SMK-kurven inn i figuren fremfor å nøye seg med en verbal forklaring", "å beregne den samfunnsøkonomisk riktige mengden i stedet for å drøfte den kvalitativt"],
      explanation: "Sensor krever kjerneargumentet: markedet ser private, ikke samfunnsøkonomiske kostnader, så det produserer for mye.",
    },
    {
      question: "Hvorfor kalles en eksternalitet en form for markedssvikt?",
      options: ["Fordi skaden/gevinsten mangler en pris, så markedet gir ineffektivt utfall", "Fordi prisen på godet alltid blir for lav for selgerne", "Fordi bedriften til slutt går konkurs når den ikke får dekket alle kostnadene sine", "Fordi staten alltid må gripe inn og regulere markedet med avgifter og strenge forbud"],
      explanation: "Uten en pris på skaden overforbrukes den, og markedslikevekten maksimerer ikke SO — det er markedssvikt.",
    },
  ],
  'econ1210-4-2': [
    {
      question: "Hva er Grønn skattekommisjons tre kriterier for klimavirkemidler?",
      options: ["Måloppnåelse, kostnadseffektivitet og at forurenser betaler", "Utslippstak, teknologikrav og statlig eierskap i de største bedriftene", "Pris på utslipp, samlet mengde og hvilken renseteknologi bedriftene bør velge", "Effektivitet i produksjonen, likhet i fordelingen og vekst i samlet verdiskaping"],
      explanation: "NOU 2015:15 vurderer virkemidler mot måloppnåelse (styring), kostnadseffektivitet og forurenser betaler.",
    },
    {
      question: "Kjerneargumentet for hvorfor en lik utslippspris er billigst er:",
      options: ["Lik pris → like marginale rensekostnader → billigst samlet kutt", "Lik pris gjør at bare de reneste bedriftene overlever", "Lik pris tvinger alle bedriftene til å kutte nøyaktig like mange tonn utslipp hver", "Lik pris gir staten størst mulig avgiftsinntekt og dermed mest penger til klimatiltak"],
      explanation: "En felles pris får hver bedrift til å kutte alt billigere enn prisen, så rensekostnadene utjevnes og de billigste kuttene tas først.",
    },
    {
      question: "En utslippsavgift har hvilken svakhet mot de tre kriteriene?",
      options: ["Usikker måloppnåelse — myndighetene setter prisen, ikke mengden", "At avgiftsinntekten alltid overstiger den samlede skaden i markedet", "Svak kostnadseffektivitet fordi de billigste utslippskuttene ikke blir tatt først", "At den ikke gir noe insentiv til innovasjon i renere og mer klimavennlig teknologi"],
      explanation: "Avgiften er kostnadseffektiv og lar forurenser betale, men hvor mye utslippene faller er usikkert (avhenger av rensekostnadene).",
    },
    {
      question: "Et system med omsettelige kvoter gir hvilken fordel over en avgift?",
      options: ["Eksakt måloppnåelse — antall kvoter er utslippstaket", "Lavere kostnad for bedriftene alltid", "At staten slipper å administrere ordningen", "At forurenser slipper å betale"],
      explanation: "Kvoter fastsetter mengden direkte, så utslippsmålet nås eksakt; avgiften gir usikker mengde.",
    },
    {
      question: "Svekker gratis kvotetildeling kostnadseffektiviteten?",
      options: ["Nei — kvoten har en alternativkostnad lik kvoteprisen, så bedriften kutter like mye", "Ja — men bare når kvoteprisen ligger godt under bedriftens egen marginale rensekostnad", "Ja — men bare for de store bedriftene som mottar en stor andel av kvotene helt gratis", "Ja — gratis kvoter gir bedriften ingen grunn til å kutte siden utslippet nå er kostnadsfritt"],
      explanation: "Å bruke en gratis kvote betyr å gi avkall på å selge den; å slippe ut koster kvoteprisen uansett, så kuttet er det samme.",
    },
    {
      question: "Hva endrer gratis kvotetildeling da (i stedet for effektiviteten)?",
      options: ["Fordelingen og kriteriet «forurenser betaler»", "Bedriftenes rensekostnader", "Kvoteprisen, som presses ned av tildelingen", "Utslippstaket som er satt"],
      explanation: "Bedriftene får en verdioverføring (kvotene gratis), så forurenser betaler mindre — men effektiviteten er upåvirket.",
    },
    {
      question: "Hovedforskjellen mellom avgift og kvoter er:",
      options: ["Avgift fastsetter prisen (usikker mengde); kvoter fastsetter mengden (usikker pris)", "Avgift virker bare på store bedrifter, kvoter på alle", "Avgift er kostnadseffektiv, mens kvotesystemer aldri klarer å utjevne rensekostnadene", "Kvoter lar forurenser slippe å betale for utslippet, mens en avgift alltid krever betaling"],
      explanation: "Begge setter én pris på utslipp; forskjellen er om myndighetene fastsetter pris eller mengde.",
    },
    {
      question: "Hvorfor er direkte regulering (likt pålegg per bedrift) ofte kostnadsineffektiv?",
      options: ["Uten kjennskap til bedriftenes rensekostnader fordeles ikke kuttene der de er billigst", "Fordi den gir for sterkt innovasjonsinsentiv", "Fordi forurenser da må betale langt mer per tonn enn den marginale skaden utslippet faktisk påfører samfunnet", "Fordi et likt pålegg gir for sterkt insentiv til ny renseteknologi"],
      explanation: "Likt pålegg gir ulike marginale rensekostnader; billige kutt står ugjort mens dyre tas — dyrere enn nødvendig.",
    },
    {
      question: "Hva er informasjonsproblemet ved direkte regulering?",
      options: ["Myndighetene kjenner ikke hver bedrifts rensekostnader og kan ikke plassere kuttene billigst", "Bedriftene kjenner ikke sine egne rensekostnader godt nok", "Bedriftene selv vet ikke hvilke utslipp de bør kutte først, og myndighetene må derfor rangere tiltakene for dem", "Staten mangler informasjon om hvor mye avgiftsinntekt reguleringen gir"],
      explanation: "En pris løser problemet automatisk: bedriften avslører kostnaden gjennom hvor mye den kutter kontra betaler.",
    },
    {
      question: "Hvorfor gir en utslippspris et sterkere innovasjonsinsentiv enn et påbud?",
      options: ["Den belønner ethvert ekstra kutt billigere enn prisen, også etter at målet er nådd", "Den gir bedriftene gratis kvoter å selge videre", "Den deler ut gratis kvoter til de mest innovative bedriftene, slik at de får finansiert forskningen på ren produksjon", "Den fastsetter den samlede utslippsmengden i stedet for prisen"],
      explanation: "Med et påbud er det ingen belønning for å kutte mer enn kravet; med en pris lønner ethvert billig kutt seg.",
    },
    {
      question: "Er subsidier til grønne alternativer (f.eks. elbil) et godt klimavirkemiddel?",
      options: ["Som regel dårlig — det vrir mot ett alternativ og forurenser betaler ikke", "Godt, fordi subsidien gir nøyaktig de samme insentivene som en avgift på utslipp", "Det beste fordi staten da selv plukker ut den teknologien som er billigst og mest lovende for framtiden", "Alltid det beste virkemiddelet fordi tiltaket er politisk populært og gir høy oppslutning i befolkningen"],
      explanation: "Subsidien vrir mot ett alternativ også relativt til andre, billigere kutt; forurenser betaler ikke; myndighetene må plukke vinnere.",
    },
    {
      question: "Under hvilken betingelse kan en grønn subsidie likevel forsvares?",
      options: ["Hvis alternativet selv har en positiv ekstern virkning (teknologiutvikling)", "Aldri under noen som helst betingelse, siden en utslippsavgift alltid er billigere", "Hvis bedriftene selv ber om subsidien og lover å bruke den til å kutte utslipp raskere enn ellers", "Hvis utslippsavgiften allerede er satt for lavt, slik at subsidien fungerer som et nødvendig supplement"],
      explanation: "Da retter subsidien opp en egen markedssvikt (teknologi-eksternaliteten), ikke klimaet, som håndteres billigere med en utslippspris.",
    },
    {
      question: "For hvilke utslipp passer en uniform (lik) utslippspris dårlig?",
      options: ["Lokal forurensning der skaden avhenger av sted", "Utslipp fra store bedrifter", "For globale CO2-utslipp fra alle kilder", "Jevnt fordelte klimagasser"],
      explanation: "Der skaden varierer geografisk (avrenning, støy) blir en lik sats enten for lav eller for høy; da trengs stedstilpasning.",
    },
    {
      question: "Hva er riktig virkemiddel mot akutt farlige utslipp (f.eks. kvikksølv)?",
      options: ["Forbud", "En lav avgift", "Gratis kvoter", "En subsidie"],
      explanation: "Skaden er for alvorlig til at noe utslipp bør tillates mot betaling; et forbud er riktig framfor en pris.",
    },
    {
      question: "To bedrifter skal kutte 20 tonn. A kutter for 200 kr/tonn, B for 500 kr/tonn. Billigste totalkutt er:",
      options: ["4 000 kr (A tar alt)", "7 000 kr (10 hver)", "10 000 kr (B tar alt)", "4 500 kr"],
      explanation: "La den billigste bedriften (A) ta alle 20 tonn: 20·200 = 4 000. Likt pålegg 10/10 gir 7 000 — dyrere.",
    },
    {
      question: "Hva menes med marginal rensekostnad?",
      options: ["Kostnaden ved å kutte ett tonn til med utslipp", "Den totale kostnaden ved å rense alt", "Prisen bedriften betaler for én kvote", "Avgiftssatsen per tonn"],
      explanation: "Den varierer mellom bedrifter; kostnadseffektivt kutt utjevner de marginale rensekostnadene.",
    },
    {
      question: "Hvorfor har en gratis kvote likevel en alternativkostnad?",
      options: ["Bruker bedriften kvoten selv, gir den avkall på å selge den til kvoteprisen", "Fordi kvoten må føres opp som en skattepliktig inntekt i bedriftens regnskap", "Fordi staten krever en løpende betaling for den gratis kvoten selv om den ble delt ut vederlagsfritt", "Fordi kvoten utløper etter ett år og må kjøpes på nytt, slik at bedriften pådrar seg en årlig utgift"],
      explanation: "Verdien den kunne fått ved salg er en reell kostnad ved å bruke kvoten — derfor kutter bedriften like mye.",
    },
    {
      question: "En vanlig feil i klimaoppgaven (feilkatalog #10) er:",
      options: ["Moralessay uten mekanismen lik pris → like rensekostnader → billigst kutt", "Å regne ut statens samlede avgiftsinntekt i stedet for kuttkostnaden", "Å nevne nyansen om at også en gratis kvote har en alternativkostnad lik kvoteprisen", "Å regne et konkret talleksempel med to bedrifter som har ulike marginale rensekostnader"],
      explanation: "Sensor krever kjerneargumentet; et essay om at «vi må ta ansvar» uten mekanismen gir ikke full uttelling.",
    },
    {
      question: "Kriteriet «forurenser betaler» er oppfylt ved:",
      options: ["Avgift og auksjonerte kvoter", "Gratis kvotetildeling", "Subsidier til grønn teknologi", "Direkte påbud uten avgift"],
      explanation: "Ved avgift og auksjon bærer forurenseren kostnaden; gratistildeling og subsidier svekker dette kriteriet.",
    },
    {
      question: "En utslippsavgift på klima er i praksis:",
      options: ["En Pigou-avgift på CO2 (pris lik marginal skade)", "En subsidie til rene bedrifter", "Et direkte forbud mot utslipp over en grense", "En verdiavgift på prisen"],
      explanation: "Avgiften internaliserer den negative eksternaliteten fra utslipp — nøyaktig Pigou-logikken fra kap. 4.1.",
    },
    {
      question: "Hva bestemmer kvoteprisen i et velfungerende kvotemarked?",
      options: ["Handelen mellom bedrifter med ulike rensekostnader gitt taket", "Myndighetene fastsetter den direkte", "Den bestemmes av avgiftssatsen staten har fastsatt, som markedet bare kopierer inn i handelen", "Antall kvoter staten deler ut gratis"],
      explanation: "Bedrifter kjøper/selger til rensekostnadene utjevnes; kvoteprisen blir den felles utslippsprisen gitt det faste taket.",
    },
    {
      question: "Er samfunnsøkonomisk riktig utslippsnivå alltid null?",
      options: ["Nei — noe utslipp er verdt kostnaden hvis nytten er høy nok", "Ja — alt utslipp bør elimineres", "Ja, fordi naturen ikke tåler noe utslipp", "Ja — hvis skaden er positiv"],
      explanation: "Riktig nivå balanserer nytte mot marginal skade (E = SMK); det gir positivt utslipp så lenge nytten dekker skaden.",
    },
    {
      question: "Hvorfor er strukturen (de tre kriteriene) så viktig i klimaoppgaven?",
      options: ["Kriteriestrukturen ER sjangeren; å drøfte løst uten den er en typisk feil", "Den er valgfri og gir ingen ekstra poeng hos sensor", "Fordi sensor bare teller opp hvor mange kriterier som er nevnt, uten å vurdere selve innholdet", "Fordi kriteriestrukturen gir besvarelsen flere sider tekst og dermed et mer omfattende inntrykk"],
      explanation: "Sensor vurderer hvert virkemiddel systematisk mot måloppnåelse → kostnadseffektivitet → forurenser betaler.",
    },
    {
      question: "Hvorfor kan avgift og kvoter kalles «to sider av samme mynt»?",
      options: ["Begge setter én pris på utslipp og utjevner marginale rensekostnader", "Begge krever at staten kjenner bedriftenes rensekostnader", "Begge gir helt eksakt måloppnåelse fordi de fastsetter både prisen og mengden utslipp samtidig", "Begge lar forurenser slippe å betale for utslippene sine, siden kostnaden veltes over på staten"],
      explanation: "De deler mekanismen (kostnadseffektiv utjevning); forskjellen er kun om man fastsetter pris eller mengde.",
    },
    {
      question: "En elbilsubsidie kan vri atferden uheldig fordi den:",
      options: ["gjør elbil kunstig attraktiv også mot billigere kutt som kollektiv/sykkel/mindre kjøring", "alltid øker de samlede utslippene i landet", "gir for lite elbil i markedet fordi subsidien er for lav til å endre folks kjøpsbeslutninger", "ikke koster staten noe, siden subsidien finansieres av bilkjøperne selv gjennom høyere avgifter"],
      explanation: "Den vrir mot ett bestemt alternativ i stedet for å la en utslippspris finne det billigste kuttet.",
    },
  ],
  'econ1210-4-3': [
    {
      question: "Hva betyr det at et gode er ikke-rivaliserende?",
      options: ["Min bruk reduserer ikke det som er igjen til andre", "Ingen kan stenges ute fra godet", "At godet alltid må leveres av staten", "Bare én person kan bruke det"],
      explanation: "Ikke-rivalisering handler om mengden: flere kan bruke godet samtidig uten forringelse (marginalkostnad null).",
    },
    {
      question: "Hva betyr det at et gode er ikke-ekskluderbart?",
      options: ["Ingen kan stenges ute selv om de ikke betaler", "Bare staten kan levere det", "At godet er gratis å produsere", "Min bruk reduserer din"],
      explanation: "Ikke-ekskluderbarhet betyr at man ikke kan kreve betaling; det skaper gratispassasjer-problemet.",
    },
    {
      question: "Sensor godtar hvilke definisjoner av et kollektivt gode?",
      options: ["Begge: Krugman & Wells (ikke-rivaliserende OG ikke-ekskluderbart) og CORE (kun ikke-rivaliserende)", "Bare Krugman & Wells' definisjon med begge kravene oppfylt samtidig", "Bare CORE-definisjonen som legger vekten utelukkende på at godet er ikke-rivaliserende i selve bruken", "Ingen av definisjonene, fordi begrepet kollektivt gode regnes som helt utdatert i moderne mikroøkonomi"],
      explanation: "Metaregelen er at begge godtas, helst begge nevnt; ha begge klare.",
    },
    {
      question: "Markedet leverer et kollektivt gode i",
      options: ["for liten mengde (underforsyning)", "for stor mengde fordi ingen kan stenges ute", "riktig mengde helt av seg selv uten inngrep", "alltid null mengde uansett betalingsvillighet"],
      explanation: "Gratispassasjer- og utestengningsproblemene gjør at markedet underforsyner kollektive goder.",
    },
    {
      question: "Hva er gratispassasjer-problemet?",
      options: ["Alle håper andre betaler og sniker seg gratis med, så godet ikke produseres", "At staten tar en altfor høy pris for det godet den selv leverer til innbyggerne", "At ingen egentlig vil ha godet, så det produseres ikke fordi etterspørselen er for svak", "At godet blir for dyrt å produsere fordi alle vil ha det samtidig og presser opp kostnaden"],
      explanation: "Når ingen kan stenges ute, kommer det ikke inn nok betaling — derfor må kollektive goder ofte finansieres offentlig.",
    },
    {
      question: "Hvorfor er en positiv pris på et ikke-rivaliserende gode ineffektiv?",
      options: ["Én bruker til koster ingenting, så prisen stenger ute noen uten å spare kostnad", "Fordi prisen alltid settes altfor lavt til å dekke den samlede produksjonskostnaden", "Fordi godet i praksis er rivaliserende, slik at hver ny bruker faktisk fortrenger de andre", "Fordi staten taper penger på å tilby godet gratis og må kompensere med høyere skatter ellers"],
      explanation: "Marginalkostnaden er null; utestenging av brukere med positiv betalingsvillighet er tapt verdi.",
    },
    {
      question: "Hva kjennetegner en fellesressurs?",
      options: ["Rivaliserende men ikke-ekskluderbar", "Ikke-rivaliserende og ikke-ekskluderbar", "Rivaliserende og ekskluderbar", "Ikke-rivaliserende og ekskluderbar"],
      explanation: "Fisk, beite og grunnvann er rivaliserende (uttak reduserer for andre) men ikke-ekskluderbare (ingen eier dem).",
    },
    {
      question: "Hvilken markedssvikt gir en fellesressurs?",
      options: ["Overforbruk (allmenningens tragedie)", "Underforsyning av godet", "Ingen markedssvikt oppstår ved uttak", "For høy pris som stenger ute brukere"],
      explanation: "Hver bruker ignorerer at eget uttak reduserer ressursen for andre — en negativ eksternalitet som gir overforbruk.",
    },
    {
      question: "Hva er hovedskillet mellom et kollektivt gode og en fellesressurs?",
      options: ["Kollektivt gode er ikke-rivaliserende (for lite); fellesressurs er rivaliserende (for mye)", "Fellesressurs underforsynes, kollektivt gode overforbrukes", "De er egentlig det samme, siden begge er ikke-ekskluderbare og finansieres offentlig av staten", "Fellesressursen underforsynes for lite, mens det kollektive godet overforbrukes og tømmes for raskt"],
      explanation: "Rivaliseringsaksen skiller dem og bestemmer om problemet er underforsyning eller overforbruk.",
    },
    {
      question: "Hvordan kan overforbruk av en fellesressurs løses?",
      options: ["Med regulering (kvoter) eller eiendomsrett", "Ved å bygge ut mer kapasitet i næringen", "Med en subsidie til brukerne som gjør uttaket billigere og dermed mer bærekraftig over tid", "Ved å øke etterspørselen etter ressursen"],
      explanation: "Kvoter begrenser uttaket direkte; eiendomsrett gir eieren interesse av bærekraftig forvaltning.",
    },
    {
      question: "Hva er asymmetrisk informasjon?",
      options: ["Den ene parten i en handel vet mer enn den andre", "Begge parter har full informasjon", "At prisen er ukjent for begge parter", "Godet er ikke-rivaliserende"],
      explanation: "Rammer særlig forsikring, der kunden kjenner sin egen risiko bedre enn selskapet.",
    },
    {
      question: "Hvorfor svikter private forsikringsmarkeder ved asymmetrisk informasjon?",
      options: ["Høyrisiko-personer melder seg mest, premien blir høy, lavrisiko trekker seg (ugunstig utvalg)", "Fordi selskapene tjener for mye på premiene de krever inn", "Fordi alle kundene i praksis er lavrisiko, slik at selskapene ikke får dekket sine faste kostnader", "Fordi staten forbyr private forsikringsavtaler og tvinger alle over på en offentlig ordning i stedet"],
      explanation: "Ugunstig utvalg kan få markedet til å bryte sammen — et argument for obligatorisk offentlig forsikring.",
    },
    {
      question: "Hva er atferdsrisiko?",
      options: ["At den forsikrede blir mindre forsiktig fordi han ikke bærer hele kostnaden", "At selskapet på forhånd ikke vet hvor stor risikoen til hver enkelt kunde er", "At staten betaler for lite til forsikringsordningen, slik at premiene må settes urimelig høyt", "At forsikringen blir for dyr fordi selskapet må dekke risikoen til de mest uforsiktige kundene"],
      explanation: "F.eks. råere kjøring med kaskoforsikring; motvirkes med egenandeler.",
    },
    {
      question: "Hvilken markedssvikt begrunner offentlig finansiert grunnforskning?",
      options: ["Kollektivt gode (kunnskap er ikke-rivaliserende)", "Negativ eksternalitet", "Markedsmakt hos de store forskningsinstituttene", "Fellesressurs som overforbrukes"],
      explanation: "Private investerer for lite fordi de ikke kan ta betalt for hele nytten (gratispassasjerer).",
    },
    {
      question: "Hvilken markedssvikt begrunner gratis vaksinering?",
      options: ["Positiv eksternalitet (beskytter også andre)", "Asymmetrisk informasjon mellom lege og pasient", "Kollektivt gode (ikke-rivaliserende og ikke-ekskluderbart for alle)", "Fellesressurs som overforbrukes fordi ingen kan stenges ute fra bruk"],
      explanation: "Vaksinen gir flokkbeskyttelse; privat betalingsvillighet er lavere enn samfunnsgevinsten.",
    },
    {
      question: "Hvilken markedssvikt begrunner fiskekvoter?",
      options: ["Fellesressurs (overforbruk)", "Asymmetrisk informasjon", "Asymmetrisk informasjon mellom aktørene", "Positiv eksternalitet"],
      explanation: "Fisken er rivaliserende og ikke-ekskluderbar; kvoter hindrer overfiske.",
    },
    {
      question: "Hvilken markedssvikt begrunner forbud mot prissamarbeid?",
      options: ["Markedsmakt / kartell", "Kollektivt gode", "Fellesressurs", "Positiv eksternalitet"],
      explanation: "Et priskartell opptrer som monopol (pris opp, mengde ned, dødvektstap); forbudet gjenoppretter konkurransen.",
    },
    {
      question: "Hva er en klassisk feil i katalog-oppgaven (sjanger K)?",
      options: ["Å begrunne alle inngrep med «rettferdighet» i stedet for å navngi svikten", "Å nevne begge lærebokdefinisjonene av godet før du drøfter virkemidlene", "Å navngi den presise markedssvikten før du foreslår et konkret statlig inngrep", "Å gi et illustrerende talleksempel som viser hvordan tapet regnes ut i praksis"],
      explanation: "Sjangeren spør om markedssvikten (effektivitetsargumentet), ikke om fordeling.",
    },
    {
      question: "Et privat gode er",
      options: ["rivaliserende og ekskluderbart", "ikke-rivaliserende og ikke-ekskluderbart", "rivaliserende og ikke-ekskluderbart", "ikke-rivaliserende og ekskluderbart"],
      explanation: "Et eple eller en kinobillett: markedet leverer private goder effektivt uten inngrep.",
    },
    {
      question: "En kryptert strømmetjeneste (ikke-rivaliserende, ekskluderbar) er",
      options: ["et kollektivt gode i CORE-forstand (klubbgode)", "et rent kollektivt gode etter Krugman & Wells", "en fellesressurs som er rivaliserende, men umulig å ekskludere brukere fra", "et rent privat gode uten fellestrekk"],
      explanation: "Den er ikke-rivaliserende (kollektivt i CORE), men ekskluderbar, så ikke et rent kollektivt gode etter Krugman & Wells.",
    },
  ],
  'econ1210-4-4': [
    {
      question: "Første steg i algoritmen for klimaoppgaven er å",
      options: ["identifisere eksternaliteten og målet", "regne ut dødvektstapet", "tegne monopolfiguren med MI og MK", "velge en avgiftssats"],
      explanation: "Ramm inn utslippet som en negativ eksternalitet og klargjør målet før du vurderer virkemidlene.",
    },
    {
      question: "Kjerneargumentet som ALLTID skal med i klimaoppgaven er:",
      options: ["Lik pris → like marginale rensekostnader → billigst samlet kutt", "Avgiftsinntekten bør i sin helhet øremerkes til klimatiltak i utlandet", "Staten bør bestemme alt fordi markedet aldri klarer å håndtere utslipp på egen hånd", "Forurensning er skadelig for miljøet og bør derfor stanses helt av hensyn til naturen"],
      explanation: "Uten mekanismen blir svaret et moralessay (feilkatalog #10).",
    },
    {
      question: "To bedrifter skal kutte 40 tonn. A: 300 kr/tonn, B: 700 kr/tonn. Billigste kutt er:",
      options: ["12 000 kr (A tar alt)", "20 000 kr (20 hver)", "28 000 kr (B tar alt)", "16 000 kr"],
      explanation: "La den billigste (A) ta alle 40: 40·300 = 12 000. Likt pålegg 20/20 gir 20 000 — dyrere.",
    },
    {
      question: "En lik avgift har hvilken svakhet sammenlignet med omsettelige kvoter?",
      options: ["Usikker måloppnåelse (prisen settes, ikke mengden)", "Sterkere innovasjonsinsentiv enn et kvotesystem kan gi", "Forurenseren betaler ikke, siden avgiften veltes helt over på kundene", "Svakere kostnadseffektivitet fordi avgiften rammer alle bedriftene ulikt"],
      explanation: "Avgiften fastsetter prisen; hvor mye utslippene faller avhenger av rensekostnadene.",
    },
    {
      question: "Svekker gratis kvotetildeling kostnadseffektiviteten?",
      options: ["Nei — kvoten har en alternativkostnad, så bedriften kutter like mye", "Ja — gratis kvoter gir ingen grunn til å kutte", "Nei — men bare fordi gratis tildeling øker det samlede utslippstaket i markedet", "Ja, alltid, fordi utdeling uten betaling fjerner hele prissignalet fra kvotemarkedet"],
      explanation: "Å bruke en gratis kvote betyr å gi avkall på å selge den; utslipp koster kvoteprisen uansett.",
    },
    {
      question: "Hva er forskjellen mellom gratis kvotetildeling og avgiftsfritak for effektiviteten?",
      options: ["Gratis kvote bevarer utslippsprisen; avgiftsfritak fjerner den og bryter kostnadseffektiviteten", "Ingen forskjell for effektiviteten, siden begge bare flytter penger mellom stat og bedrift", "Gratis kvote fjerner utslippsprisen, mens avgiftsfritak beholder den for alle bedriftene", "Avgiftsfritak er alltid best fordi det sparer de fritakne bedriftene for kostnader helt"],
      explanation: "Kvoten har en alternativkostnad (pris bevart); fritak setter prisen til null for de fritatte (ulike rensekostnader).",
    },
    {
      question: "Differensierte avgiftssatser (fritak for noen bedrifter) fører til:",
      options: ["Brutt kostnadseffektivitet — ulik pris gir ulike marginale rensekostnader", "Lavere avgiftsinntekt for staten, men nøyaktig det samme utslippsnivået som før", "Billigere samlet kutt, fordi de fritatte bedriftene kan bruke pengene på egen rensing", "Sterkere innovasjonsinsentiv, ettersom de fritatte får rom til å utvikle ny teknologi"],
      explanation: "Billige kutt står ugjort hos de fritatte mens dyre tas ellers — dobbel ineffektivitet.",
    },
    {
      question: "En subsidie til ett grønt alternativ (f.eks. hydrogen) er som klimavirkemiddel:",
      options: ["som regel dårlig — vrir mot ett alternativ, forurenser betaler ikke", "kostnadseffektivt fordi støtten treffer den reneste bedriften", "garantert måloppnåelse fordi støtten sikrer at nok bedrifter bytter til hydrogen", "kostnadseffektivt siden subsidien senker prisen på det reneste alternativet direkte"],
      explanation: "Den vrir mot ett alternativ også mot andre kutt og krever at myndighetene plukker vinnere.",
    },
    {
      question: "En grønn subsidie kan likevel forsvares hvis",
      options: ["alternativet selv har en positiv teknologi-eksternalitet markedet ikke fanger opp", "bransjen ber om den og truer med å flytte produksjonen til utlandet uten støtte", "avgiften er upopulær blant velgerne, så en subsidie blir politisk lettere å innføre", "staten trenger å bruke penger for å stimulere økonomien i en nedgangskonjunktur"],
      explanation: "Da retter subsidien opp en egen markedssvikt, ikke klimaet, som håndteres billigere med en utslippspris.",
    },
    {
      question: "En uniform nasjonal avgift passer DÅRLIG for",
      options: ["lokal forurensning der skaden avhenger av sted", "jevnt fordelte klimagasser", "CO2-utslipp, som skader like mye uansett hvor på kloden de faktisk slippes ut", "industriutslipp generelt sett"],
      explanation: "En lik sats blir enten for lav der skaden er stor eller for høy der den er liten; da trengs stedstilpasning.",
    },
    {
      question: "Riktig virkemiddel mot et akutt giftig tungmetallutslipp er",
      options: ["forbud", "en lav avgift", "gratis kvoter", "en subsidie"],
      explanation: "Skaden er for alvorlig til at noe utslipp bør tillates mot betaling.",
    },
    {
      question: "Hvis målet er å nå en BESTEMT utslippsmengde (f.eks. halvering), taler det for",
      options: ["omsettelige kvoter (eksakt måloppnåelse)", "direkte påbud per bedrift", "en avgift, som fastsetter prisen presist", "en subsidie til rene bedrifter"],
      explanation: "Kvoter fastsetter mengden direkte; avgiften gir usikker mengde.",
    },
    {
      question: "Hvorfor gir en utslippspris sterkere innovasjonsinsentiv enn et påbud?",
      options: ["Den belønner ethvert kutt billigere enn prisen, også etter at målet er nådd", "Den forbyr bedriftene å ta i bruk ny teknologi", "Den setter mengden direkte og tvinger dermed fram innovasjon hos bedriftene", "Den gir gratis kvoter som belønner bedrifter for å ta i bruk renere løsninger"],
      explanation: "Med et påbud lønner det seg ikke å kutte mer enn kravet; med en pris lønner ethvert billig kutt seg.",
    },
    {
      question: "En vanlig feil i klimadrillen er",
      options: ["å skrive moralessay uten kjerneargumentet (feilkatalog #10)", "å konkludere uten å nevne noen kriterier", "å bruke de tre kriteriene måloppnåelse, kostnadseffektivitet og innovasjon", "å regne et talleksempel som viser hvordan avgiften utjevner rensekostnadene"],
      explanation: "Sensor krever mekanismen lik pris → like rensekostnader → billigst kutt.",
    },
    {
      question: "Hva løfter en klimabesvarelse fra midt- til toppsjikt?",
      options: ["En klar, begrunnet konklusjon som velger virkemiddel ut fra målet", "Å bruke lang tid på en detaljert figur", "Å unngå talleksempler helt for i stedet å drøfte prinsippene mer omfattende", "Å ramse opp alle virkemidlene uten å velge eller begrunne noe til slutt her"],
      explanation: "En begrunnet anbefaling (bestemt mengde→kvoter, forutsigbar pris→avgift, lokal/akutt→regulering/forbud) er A-markøren.",
    },
  ],
  'econ1210-5-1': [
    {
      question: "Hva består monopolets marginalinntekt (MI) av?",
      options: ["En kvantumseffekt ($+p$) og en priseffekt (negativ)", "Marginalkostnaden pluss et fast prosentvis påslag per enhet", "Prisen ganget med mengden, altså hele bedriftens totale salgsinntekt samlet", "Bare prisen på den siste enheten"],
      explanation: "MI = kvantumseffekt (den nye enheten selges til $p$) + priseffekt (prisfallet rammer alle enhetene). Priseffekten gjør MI < p.",
    },
    {
      question: "Hvorfor er marginalinntekten lavere enn prisen for et monopol?",
      options: ["Fordi prisen må ned på alle enhetene for å selge én mer (priseffekten)", "Fordi monopolet må betale skatt av hele salgsinntekten sin i hver periode", "Fordi marginalkostnaden er høy og trekker den oppnådde inntekten nedover", "Fordi kundene forhandler ned prisen på hver enkelt enhet monopolet vil selge"],
      explanation: "For å selge mer må monopolet sette prisen ned, og prisfallet gjelder alle enhetene — ikke bare den siste. Denne priseffekten trekker MI under p.",
    },
    {
      question: "En pristaker i frikonkurranse har hvilken marginalinntekt?",
      options: ["$\\text{MI} = p$ (lik prisen)", "$\\text{MI} < p$", "$\\text{MI} = \\text{MK}$ alltid", "$\\text{MI} = 0$"],
      explanation: "Pristakeren kan selge alt til markedsprisen uten å presse prisen — ingen priseffekt — så MI = p.",
    },
    {
      question: "Hvor bratt er MI-kurven i forhold til en lineær etterspørselskurve?",
      options: ["Dobbelt så bratt, med samme skjæring på prisaksen", "Like bratt som etterspørselskurven", "Halvparten så bratt som den lineære etterspørselskurven", "Dobbelt så bratt, men skjærer prisaksen dobbelt så høyt"],
      explanation: "For lineær E treffer MI-kurven prisaksen i samme punkt som E, men faller dobbelt så bratt.",
    },
    {
      question: "Hvor produserer et monopol for å maksimere overskuddet?",
      options: ["Der marginalinntekt = marginalkostnad (MI = MK)", "Der etterspørselskurven krysser marginalkostnadslinja", "Der pris = marginalkostnad (p = MK), akkurat som en pristaker i frikonkurranse", "Der total inntekt er størst"],
      explanation: "Ved MI = MK dekker den siste enheten akkurat sin kostnad. Ved MI = p (p = MK) produserer bare en pristaker.",
    },
    {
      question: "Etter at MI = MK gir monopolmengden, hvor leser du monopolprisen?",
      options: ["På etterspørselskurven ved monopolmengden $x_M$", "På MI-kurven rett over selve monopolmengden $x_M$", "Der MI krysser MK, altså i selve tilpasningspunktet for monopolet", "På MK-linja ved monopolmengden $x_M$"],
      explanation: "Prisen leses av etterspørselskurven ved $x_M$ (feil #5 er å lese den av MI-kurven, som gir en for lav pris).",
    },
    {
      question: "En student leser monopolprisen der MI krysser MK. Hva blir feil?",
      options: ["Prisen blir for lav — det tallet er marginalkostnaden, ikke markedsprisen", "Prisen blir for høy fordi MI ligger under etterspørselskurven", "Mengden blir feil — krysningen mellom MI og MK gir en for stor produksjon", "Ingenting, det er riktig metode — der MI = MK leser du både mengde og pris"],
      explanation: "Feil #5: der MI = MK finner du bare mengden. Prisen (etterspørselskurvens høyde ved $x_M$) ligger over MK.",
    },
    {
      question: "Et monopol har $x = 120 - 2p$ og $\\text{MK} = 20$. Hva er monopolmengden?",
      options: ["$x_M = 40$", "$x_M = 80$", "$x_M = 20$", "$x_M = 60$"],
      explanation: "$p = 60 - \\frac{1}{2}x$, MI $= 60 - x$. MI = MK: $60 - x = 20 \\Rightarrow x_M = 40$.",
    },
    {
      question: "Et monopol har $x = 120 - 2p$ og $\\text{MK} = 20$, så $x_M = 40$. Hva er monopolprisen?",
      options: ["$p_M = 40$", "$p_M = 20$", "$p_M = 60$", "$p_M = 30$"],
      explanation: "Pris fra etterspørselskurven ved $x_M = 40$: $p_M = 60 - \\frac{1}{2}\\cdot 40 = 40$. (Ikke 20 — det er MK.)",
    },
    {
      question: "Hva er kvantumseffekten i MI-dekomponeringen?",
      options: ["Den nye enheten selges til prisen $p$ (positiv)", "Prisfallet på alle tidligere enheter (negativ)", "Marginalkostnaden av den nye enheten, altså hva det koster å produsere den", "Den samlede inntekten fra alle enhetene som selges"],
      explanation: "Kvantumseffekten er det positive bidraget: den ekstra enheten gir inntekt lik prisen $p$.",
    },
    {
      question: "Hva er priseffekten i MI-dekomponeringen?",
      options: ["Prisfallet ganget med antall enheter som alt ble solgt (negativ)", "Statens skatteandel av inntekten fra den aller siste enheten som selges", "Prisen på den nye enheten (positiv), altså inntekten fra å selge én mer", "Marginalkostnaden ved å produsere den siste enheten monopolet legger til"],
      explanation: "Priseffekten $\\frac{\\Delta p}{\\Delta x}x$ er negativ: prisfallet for å selge mer rammer alle de $x$ tidligere enhetene.",
    },
    {
      question: "Ved en mengde der MI > MK, hva bør monopolet gjøre?",
      options: ["Produsere mer — den neste enheten gir mer inntekt enn den koster", "Holde mengden helt uendret og heve prisen så mye som overhodet mulig", "Produsere mindre — den siste enheten koster mer i MK enn den gir i inntekt", "Sette ned prisen uten å endre mengden for å kapre litt mer av markedet her"],
      explanation: "MI > MK betyr at en enhet til øker overskuddet. Monopolet øker mengden til MI = MK.",
    },
    {
      question: "Ved en mengde der MI < MK, hva bør monopolet gjøre?",
      options: ["Produsere mindre — den siste enheten koster mer enn den gir", "Holde både prisen og mengden helt uendret i denne situasjonen", "Produsere mer — den neste enheten gir mer i inntekt enn den koster å lage", "Øke prisen og mengden samtidig for å hente inn den tapte marginalinntekten"],
      explanation: "MI < MK betyr at siste enhet taper penger. Monopolet kutter mengden til MI = MK.",
    },
    {
      question: "Trengs derivasjon for å finne monopoltilpasningen på ECON1210?",
      options: ["Nei — MI-kurven finnes med regelen «dobbelt så bratt», og alt løses med lineær algebra", "Ja, MI må deriveres fra den totale inntektsfunksjonen for å finne tilpasningen", "Ja, både MI og MK må deriveres fra sine respektive total-funksjoner hver gang", "Ja, MK må deriveres fra totalkostnaden før du kan sette MI lik MK i figuren"],
      explanation: "Fasitene sier eksplisitt at derivasjon ikke forventes; MI-kurven er dobbelt så bratt som lineær E.",
    },
    {
      question: "Et monopol har $x = 90 - p$ og $\\text{MK} = 10$. Hva er monopolmengde og -pris?",
      options: ["$x_M = 40$, $p_M = 50$", "$x_M = 40$, $p_M = 10$", "$x_M = 80$, $p_M = 50$", "$x_M = 45$, $p_M = 45$"],
      explanation: "$p = 90 - x$, MI $= 90 - 2x$. MI = MK: $x_M = 40$. Pris fra E: $p_M = 90 - 40 = 50$.",
    },
    {
      question: "Hvor krysser MI-kurven mengdeaksen for etterspørselskurven $x = a - bp$?",
      options: ["På halvveien i forhold til etterspørselskurven (ved $x = a/2$)", "På samme sted som etterspørselskurven (ved $x = a$)", "På samme sted som etterspørselskurven (ved $x = a$), fordi MI og E har lik helning", "Dobbelt så langt ute som etterspørselskurven"],
      explanation: "MI har samme skjæring med prisaksen, men dobbelt helning, så den treffer mengdeaksen ved $x = a/2$ (E ved $x = a$).",
    },
    {
      question: "Hva er total inntekt (TI) for et monopol?",
      options: ["Prisen ganger mengden, $p\\cdot x$", "Marginalinntekten ganger mengden", "Summen av alle marginalkostnadene fra første til siste solgte enhet av godet", "Prisen minus marginalkostnaden"],
      explanation: "TI $= p\\cdot x$. Marginalinntekten er endringen i TI når mengden øker med én enhet.",
    },
    {
      question: "Monopolmengden er halvparten av den samfunnsøkonomisk optimale mengden (ved $p = \\text{MK}$). Hva sier det om monopolet?",
      options: ["Monopolet holder igjen på mengden i forhold til frikonkurranse", "Monopolet setter prisen lik marginalkostnaden", "Monopolet produserer mer enn frikonkurranse fordi det ønsker å presse ut rivaler", "Monopolet setter prisen lik gjennomsnittskostnaden i alle anlegg"],
      explanation: "Med lineær E og konstant MK er $x_M = \\frac{a-bc}{2}$, mens optimum er $a - bc$ — monopolet begrenser mengden og tar høyere pris.",
    },
    {
      question: "Hvorfor kan ikke monopolet både selge mer OG holde prisen oppe på alle enhetene?",
      options: ["Fordi det står overfor én fallende etterspørselskurve for hele markedet (ingen prisdiskriminering)", "Fordi staten forbyr det gjennom prisregulering som binder monopolet til én fast pris", "Fordi konkurrentene i markedet umiddelbart senker prisen og kaprer kundene tilbake igjen", "Fordi marginalkostnaden stiger så bratt at hver ekstra enhet blir ulønnsom å lage"],
      explanation: "Uten prisdiskriminering må monopolet ta én pris av alle, gitt av etterspørselskurven — derfor priseffekten.",
    },
    {
      question: "Hva er et monopol?",
      options: ["Den eneste tilbyderen av et gode uten nære substitutter", "En bedrift som tar markedsprisen som gitt", "En av mange små pristakere som selger et identisk gode i et fritt marked", "En bedrift med marginalinntekt lik prisen"],
      explanation: "Monopolet er eneselger og står overfor hele markedets etterspørselskurve, så det velger selv mengde og pris.",
    },
  ],
  'econ1210-5-2': [
    {
      question: "Mellom hvilke kurver ligger dødvektstrekanten ved monopol?",
      options: ["Mellom etterspørselskurven og MK-linja, fra $x_M$ til $x_{\\text{opt}}$", "Mellom prislinja og MK, fra 0 til $x_M$", "Mellom etterspørselskurven og MI-kurven, målt fra origo og helt fram til monopolmengden $x_M$", "Mellom MI-kurven og MK-linja, fra $x_M$ til optimum"],
      explanation: "Tapet er verdi som forsvinner fordi mengden er lavere enn ved $p = \\text{MK}$: trekanten mellom E og MK fra $x_M$ til $x_{\\text{opt}}$. Aldri mot MI.",
    },
    {
      question: "Hvor er den samfunnsøkonomisk optimale mengden ved monopol?",
      options: ["Der pris = marginalkostnad ($x_{\\text{opt}} = a - b\\cdot\\text{MK}$)", "Der MI = MK, altså i monopolmengden", "Der marginalinntekten er lik null (MI = 0), på toppen av total-inntektskurven", "Der den totale inntekten $p\\cdot x$ er aller størst"],
      explanation: "Optimum er der marginal betalingsvillighet (E) = MK, altså $p = \\text{MK}$ — samme som frikonkurranse. Monopolet stopper før dette.",
    },
    {
      question: "Hvem taper på monopolprising sammenlignet med frikonkurranse?",
      options: ["Kjøperne — de betaler høyere pris og får mindre mengde (KO ned)", "Staten, som mister avgiftsinntekter når den omsatte mengden faller", "Monopolisten selv — den mister overskudd fordi den holder mengden kunstig nede", "Ingen taper netto, siden monopolistens gevinst nøyaktig oppveier kjøpernes tap i markedet"],
      explanation: "Kjøperne får høyere pris og lavere mengde, så KO faller. Monopolisten vinner (PO opp).",
    },
    {
      question: "Et monopol har $x = 120 - 2p$ og $\\text{MK} = 20$ ($x_M = 40$, $p_M = 40$). Hva er dødvektstapet?",
      options: ["$400$", "$800$", "$1600$", "$200$"],
      explanation: "$x_{\\text{opt}} = 120 - 40 = 80$; dødvektstap $= \\frac{1}{2}(40-20)(80-40) = \\frac{1}{2}\\cdot 20\\cdot 40 = 400$.",
    },
    {
      question: "Ved siden av kjøperne (tap) og monopolisten (gevinst) — hvem kan også vinne på monopolprisen?",
      options: ["Andre selgere i markedet, som får selge til den høye prisen", "Arbeidstakerne i monopolbedriften, som får høyere lønn av overskuddet", "Ingen andre enn monopolisten selv vinner; all gevinst tilfaller den ene selgeren", "Staten, som gjennom økt skatteinntekt fra den høyere prisen henter inn ekstra proveny"],
      explanation: "Tredjeparts-poenget: andre tilbydere får den høye prisen $p_M$ uten selv å begrense mengden. Å glemme dem er feil #11.",
    },
    {
      question: "Hva viser monopolmakt seg som?",
      options: ["Gapet mellom pris og marginalkostnad ($p_M - \\text{MK}$)", "Antall ansatte i bedriften sammenlignet med konkurrentene", "Antallet enheter som selges i markedet, der flere solgte enheter betyr mer makt", "Størrelsen på marginalkostnaden alene, altså hvor dyrt det er å lage siste enhet"],
      explanation: "Jo større gap mellom pris og MK, desto mer makt. En pristaker har $p = \\text{MK}$, altså null gap.",
    },
    {
      question: "Hvordan påvirker en mer elastisk (flatere) etterspørselskurve monopolmakten?",
      options: ["Den svekker makten — kundene flykter lettere, så gapet mellom pris og MK må krympe", "Den gjør etterspørselen uavhengig av prisen på godet", "Den styrker makten — monopolet kan ta en enda høyere pris når kundene er prisfølsomme", "Den påvirker ikke makten i det hele tatt, siden gapet mellom pris og MK er fast uansett"],
      explanation: "Mer elastisk E betyr at priseffekten svir mer; monopolet må senke gapet mellom pris og MK.",
    },
    {
      question: "Hva gjør etterspørselen mot en dominerende aktør mer elastisk?",
      options: ["Flere konkurrenter, bedre substitutter, økt overføringskapasitet (ny kabel)", "At staten innfører forbud mot import av godet", "Færre konkurrenter og svakere substitutter, som gir kundene færre steder å gå", "Høyere marginalkostnad hos aktøren, som tvinger prisen opp og gjør kundene mer følsomme"],
      explanation: "Alt som gir kundene flere alternativer, gjør E mer elastisk og svekker markedsmakten — konkurransepolitikkens logikk.",
    },
    {
      question: "Er monopolistens gevinst en del av dødvektstapet?",
      options: ["Nei — den er en overføring fra kjøperne til monopolisten, ikke tapt verdi", "Ja, gevinsten er lik dødvektstapet", "Ja, hele monopolistens gevinst regnes som dødvektstap for samfunnet som helhet", "Ja, gevinsten sammenfaller med dødvektstapet"],
      explanation: "Monopolistens gevinst er en overføring; bare selve trekanten (bortfalte verdiskapende enheter) er dødvektstap.",
    },
    {
      question: "Setter et monopol prisen «så høyt som mulig»?",
      options: ["Nei — det maksimerer overskuddet, ikke prisen", "Ja, alltid maksimalt høy pris", "Ja, helt opp til betalingsvilligheten til den siste kunden", "Ja, prisen settes lik etterspørselskurvens toppunkt"],
      explanation: "En enda høyere pris ville solgt for lite til å lønne seg. Monopolet stopper der MI = MK.",
    },
    {
      question: "Et monopol har $x = 240 - 2p$ og $\\text{MK} = 40$ ($x_M = 80$, $p_M = 80$). Hva er dødvektstapet?",
      options: ["$1600$", "$800$", "$3200$", "$400$"],
      explanation: "$x_{\\text{opt}} = 240 - 80 = 160$; dødvektstap $= \\frac{1}{2}(80-40)(160-80) = \\frac{1}{2}\\cdot 40\\cdot 80 = 1600$.",
    },
    {
      question: "Hvordan er samfunnsøkonomisk overskudd (SO) ved monopol i forhold til frikonkurranse?",
      options: ["Mindre — SO faller med nøyaktig dødvektstrekanten", "Større — monopolet skaper mer verdi", "Større på grunn av sparte konkurransekostnader", "Nøyaktig like stort som før"],
      explanation: "$\\text{SO}_{\\text{mono}} = \\text{SO}_{\\text{opt}} - \\text{dødvektstap}$. KO faller, PO stiger, men summen faller.",
    },
    {
      question: "Hvorfor er en bratt (lite elastisk) etterspørselskurve gunstig for et monopol?",
      options: ["Kundene flykter ikke ved høy pris, så et stort pris–MK-gap kan holdes", "Marginalinntekten blir da nøyaktig lik prisen, uansett hvor mye som selges", "Total inntekt blir null i toppunktet, så monopolet kan sette prisen fritt uten priseffekt", "Marginalkostnaden blir lavere når etterspørselen er bratt, så overskuddet per enhet vokser"],
      explanation: "Med lite elastisk etterspørsel er priseffekten svak; monopolet kan holde en høy pris uten å miste mange kunder.",
    },
    {
      question: "En ny utenlandskabel gir kundene tilgang til import. Hva skjer med den lokale monopolistens pris?",
      options: ["Prisen faller (mot MK), fordi etterspørselen blir mer elastisk", "Prisen stiger, fordi konkurransen øker kostnadene", "Prisen stiger, fordi den økte konkurransen driver monopolistens kostnader oppover", "Prisen er helt uendret uansett import"],
      explanation: "Import gir kundene et alternativ → E mer elastisk → mindre gap mellom pris og MK → lavere pris, mer mengde.",
    },
    {
      question: "Hvorfor holder monopolet mengden nede?",
      options: ["For å holde prisen oppe på alle enhetene (unngå priseffekten på de gamle)", "Fordi hver ekstra enhet koster mer å produsere enn den forrige", "Fordi staten pålegger en fast mengdegrense som hindrer monopolet i å produsere mer", "Fordi marginalkostnaden er uendelig høy, slik at flere enheter aldri lønner seg å lage"],
      explanation: "Å selge de siste enhetene ville presset prisen ned på alt som selges. Derfor stopper monopolet ved $x_M < x_{\\text{opt}}$.",
    },
  ],
  'econ1210-5-3': [
    {
      question: "Hva kjennetegner et naturlig monopol?",
      options: ["Gjennomsnittskostnaden faller med mengden, så én produsent er billigst", "Marginalkostnaden stiger så bratt at bare én eneste produsent klarer å levere", "Mange små pristakere deler markedet mellom seg og konkurrerer om de samme kundene", "Det finnes ingen faste kostnader, så hver produsent starter helt likt uten oppstartsutgift"],
      explanation: "Med stor fast kostnad $B$ og lav enhetskostnad faller GK $= c + B/x$ mot $c$, så én stor produsent er billigst.",
    },
    {
      question: "Hva er den samfunnsøkonomisk optimale prisen i et naturlig monopol?",
      options: ["Pris = marginalkostnad ($p = c$)", "Pris = gjennomsnittskostnad", "Pris = null, altså gratis tilgang", "Så høy pris som mulig"],
      explanation: "Optimum er alltid $p = \\text{MK}$. For digital avis med $c = 0$ betyr det gratis tilgang.",
    },
    {
      question: "Hvorfor gir prisen $p = c$ selskapet underskudd?",
      options: ["Inntekten dekker bare de variable kostnadene, ikke den faste kostnaden $B$", "Fordi prisen alltid ligger et godt stykke under gjennomsnittskostnaden i anleggene", "Fordi marginalkostnaden er for høy til at prisen kan dekke hver enkelt enhet", "Fordi mengden blir null når prisen presses helt ned, så det ikke kommer inn inntekt"],
      explanation: "Ved $p = c$ dekkes de variable kostnadene, men ikke $B$ — selskapet taper $B$.",
    },
    {
      question: "Når er driften av et naturlig monopol samfunnsøkonomisk lønnsom?",
      options: ["Når konsumentoverskuddet ved $p = c$ overstiger den faste kostnaden (KO > B)", "Når den faste kostnaden $B$ er lik null i markedet", "Når selskapet selv går med regnskapsmessig overskudd allerede ved prisen $p = c$", "Alltid, uansett hvor stor den faste kostnaden $B$ er, så lenge det finnes etterspørsel"],
      explanation: "Ved $p = c$ er SO = KO. Er denne verdien større enn $B$, er tjenesten verdt mer enn den koster å opprette.",
    },
    {
      question: "En nettavis har $x = 1000 - 5p$ og $c = 0$. Er driften lønnsom hvis $B = 60\\,000$?",
      options: ["Ja — KO ved gratis tilgang er $100\\,000 > 60\\,000$", "Ja, fordi marginalkostnaden er null uansett B", "Nei — inntekten dekker ikke den faste kostnaden", "Nei — selskapet taper penger"],
      explanation: "KO $= \\frac{1}{2}\\cdot 200\\cdot 1000 = 100\\,000 > 60\\,000$, så driften er samfunnsøkonomisk lønnsom.",
    },
    {
      question: "Argumentet «lav gjennomsnittskostnad, så prisen bør ned til GK» er:",
      options: ["Feil — riktig mengde krever pris = marginalkostnad, ikke gjennomsnittskostnad", "Riktig, siden GK ligger over marginalkostnaden", "Riktig for minstepris, fordi GK setter et gulv som prisen aldri bør legges under", "Riktig — gjennomsnittskostnaden GK er alltid den optimale prisen i et naturlig monopol"],
      explanation: "Feil #7: $p = \\text{GK}$ gir nullresultat men for lav mengde. Optimum er $p = \\text{MK}$.",
    },
    {
      question: "Hva gjør regulering av naturlige monopol vanskelig?",
      options: ["Myndighetene kjenner ikke selskapets kostnader like godt som selskapet selv (informasjonsproblemet)", "Det finnes rett og slett ingen reguleringsverktøy myndighetene kan bruke mot slike selskaper", "Etterspørselen i markedet er fullstendig ukjent, så myndighetene famler i blinde om mengden", "Faste kostnader kan i praksis aldri måles nøyaktig, så prisen kan ikke fastsettes riktig"],
      explanation: "Informasjonsasymmetrien (H2018): selskapet kan overdrive kostnadene for høyere pris/subsidie.",
    },
    {
      question: "Hvordan tilpasser et uregulert naturlig monopol seg?",
      options: ["Setter MI = MK — for lav mengde, for høy pris", "Setter pris = gjennomsnittskostnad", "Produserer den samfunnsøkonomisk optimale mengden der prisen er lik marginalkostnaden", "Produserer så mye som mulig til lav pris"],
      explanation: "Som ethvert monopol: MI = MK gir for lite mengde (høy betalingsmur) og et dødvektstap.",
    },
    {
      question: "Hva er gjennomsnittskostnaden for $c(x) = cx + B$?",
      options: ["$\\text{GK}(x) = c + \\frac{B}{x}$", "$\\text{GK}(x) = c\\cdot x$", "$\\text{GK}(x) = c + B$", "$\\text{GK}(x) = \\frac{c}{x} + B$"],
      explanation: "GK = samlet kostnad / mengde $= \\frac{cx + B}{x} = c + \\frac{B}{x}$, som faller med $x$.",
    },
    {
      question: "Hvorfor er én produsent billigst i et naturlig monopol?",
      options: ["To små konkurrenter måtte hver bære sin egen faste kostnad B", "Fordi staten har gitt selskapet en lovfestet enerett i markedet", "Fordi én stor produsent har en varig lavere marginalkostnad enn to mindre rivaler", "Fordi konkurranse mellom bedrifter alltid er dyrt og sløser bort ressurser i markedet"],
      explanation: "Én produsent bærer $B$ bare én gang og fordeler den på hele markedet; to konkurrenter dobler den faste kostnaden.",
    },
    {
      question: "Hva er en to-delt tariff?",
      options: ["Et fast årsledd som dekker B, pluss en pris per enhet lik marginalkostnaden", "En pris som endrer seg trinnvis etter hvor mye den enkelte kunden kjøper i året", "To ulike priser til to atskilte kundegrupper, altså en form for prisdiskriminering", "En avgift som legges på både kjøper og selger, delt mellom de to sidene i handelen"],
      explanation: "Fastleddet dekker $B$, mens marginalprisen holdes lik $c$ — så mengden forblir effektiv og driften finansieres.",
    },
    {
      question: "Påvirker den faste kostnaden B den optimale prisen?",
      options: ["Nei — optimal pris er $p = c$ uansett B; B avgjør bare om driften er verdt det", "Ja, B avgjør hvor mange enheter som bør produseres", "Ja, en høyere fast kostnad $B$ gir en tilsvarende høyere optimal pris på godet", "Ja, den optimale prisen settes rett og slett lik den faste kostnaden $B$ selskapet har"],
      explanation: "Optimal pris er alltid $p = \\text{MK}$. $B$ påvirker underskuddet og lønnsomhetsvilkåret, ikke prisen.",
    },
    {
      question: "En strømmetjeneste har $x = 800 - 4p$ og $c(x) = 10x + 30\\,000$. Er driften lønnsom?",
      options: ["Ja — KO ved $p = 10$ er $72\\,200 > 30\\,000$", "Ja, fordi det faste beløpet er lavt", "Ja, utelukkende fordi marginalkostnaden på 10 er lav nok til å gjøre driften billig", "Nei — selskapet taper 30 000"],
      explanation: "Optimum $p = 10$, $x = 760$; KO $= \\frac{1}{2}(200-10)\\cdot 760 = 72\\,200 > 30\\,000$. Lønnsom.",
    },
    {
      question: "Hva viser en betalingsmur på en nettavis samfunnsøkonomisk?",
      options: ["Et dødvektstap — lesere med positiv betalingsvillighet stenges ute uten kostnad for samfunnet", "En nødvendig løsning for å finansiere den faste kostnaden $B$", "En effektiv løsning — prisen dekker de faste kostnadene, og markedet klarerer uten dødvektstap for samfunnet", "Et rent samfunnsøkonomisk overskudd — avisen fanger inn betalingsvilligheten og lar den bli produsentoverskudd"],
      explanation: "Muren gir mengde under optimum; trekanten mellom E og MK fra $x_M$ til $x_{\\text{opt}}$ er tapt verdi.",
    },
    {
      question: "Hva er reguleringstriaden for et naturlig monopol?",
      options: ["Makspris = MK, minstekvantum/leveringsplikt, eller subsidie som dekker B", "Skatt, subsidie og maksimalpris på et vanlig marked", "Skatt på overskuddet, subsidie til nye aktører og maksimalpris satt lik gjennomsnittskostnaden GK", "Forbud mot etablering, en fast avgift per solgt enhet og en produksjonskvote som holder mengden nede"],
      explanation: "Tre grep for å bringe mengden mot optimum; alle krever at underskuddet på $B$ finansieres.",
    },
  ],
  'econ1210-5-4': [
    {
      question: "Hva kjennetegner monopolistisk konkurranse?",
      options: ["Mange bedrifter med differensierte produkter og fri etablering", "Mange bedrifter med helt identiske produkter", "Én selger uten konkurrenter som setter monopolpris", "To store bedrifter som deler markedet"],
      explanation: "Differensierte produkter gir litt markedsmakt, men fri etablering presser profitten til null på lang sikt.",
    },
    {
      question: "Hvorfor har en bedrift i monopolistisk konkurranse litt markedsmakt?",
      options: ["Produktet er differensiert, så den mister ikke alle kundene ved litt høyere pris", "Bedriften har varig lavere kostnader enn samtlige konkurrenter i det samme markedet", "Staten gir den enerett gjennom patent eller lisens, slik at ingen andre lovlig kan tilby samme vare", "Den er eneste selger i markedet og møter derfor hele den samlede, fallende etterspørselskurven alene"],
      explanation: "Fordi produktene er litt ulike, beholder bedriften kundene som foretrekker akkurat dens variant — egen fallende etterspørselskurve.",
    },
    {
      question: "Hva presser profitten til null i monopolistisk konkurranse på lang sikt?",
      options: ["Fri etablering — nye bedrifter kommer inn til profitten er borte", "At produktene til slutt blir helt identiske", "At marginalkostnaden stiger jevnt med produksjonen til den til slutt møter og overstiger salgsprisen helt", "At staten regulerer prisene ned mot gjennomsnittskostnaden i bransjen"],
      explanation: "Profitt trekker inn nye bedrifter; etterspørselskurven skifter inn og blir slakere til $p = \\text{GK}$ og profitten er null.",
    },
    {
      question: "I nullprofitt-likevekten i monopolistisk konkurranse gjelder:",
      options: ["$p = \\text{GK}$, men fortsatt $p > \\text{MK}$ (lite effektivitetstap består)", "$p = \\text{GK} = \\text{MK}$, slik at det ikke er noen forskjell mellom de to kostnadsmålene", "$p = \\text{MK}$, altså full effektivitet akkurat som under perfekt konkurranse med fri etablering på plass", "$p < \\text{MK}$, fordi den harde konkurransen tvinger bedriftene til å selge med tap på hver marginale enhet"],
      explanation: "Fri etablering gir $p = \\text{GK}$ (null profitt), men markedsmakten holder $p$ over MK, så mengden er litt for lav.",
    },
    {
      question: "Betyr nullprofitt at monopolistisk konkurranse er effektiv som perfekt konkurranse?",
      options: ["Nei — prisen ligger fortsatt over marginalkostnaden, så et lite tap består", "Ja, nullprofitt betyr alltid full samfunnsøkonomisk effektivitet i dette markedet", "Ja, men bare på kort sikt før etablering skjer; på lang sikt oppstår et betydelig dødvektstap i markedet", "Ja — når profitten er null må $p = \\text{MK}$ gjelde, og markedet oppnår full samfunnsøkonomisk effektivitet"],
      explanation: "Nullprofitt ($p = \\text{GK}$) er ikke det samme som $p = \\text{MK}$. Mengden er litt for lav; til gjengjeld får man variasjon.",
    },
    {
      question: "Hva er et kartell?",
      options: ["En avtale mellom uavhengige produsenter om å samordne pris/produksjon som ett monopol", "Et lovfestet forbud mot at flere produsenter i det hele tatt kan etablere seg i markedet", "En enkelt bedrift som har fått enerett fra staten og derfor lovlig kan stenge alle konkurrenter ute", "En bedrift med fallende gjennomsnittskostnad over hele markedet, slik at én produsent er billigst mulig"],
      explanation: "Kartellet lar små produsenter opptre som ett monopol: pris opp, mengde ned, dødvektstap.",
    },
    {
      question: "Hva skjer med pris og mengde når et kartell dannes?",
      options: ["Prisen opp, mengden ned (monopolutfallet)", "Både pris og mengde uendret", "Prisen ned og mengden ned samtidig", "Prisen ned, mengden opp"],
      explanation: "Ved å samordne seg opptrer produsentene som ett monopol — de begrenser mengden og hever prisen.",
    },
    {
      question: "Hvorfor er kartell forbudt etter konkurranseloven?",
      options: ["Det gir monopolutfall (høyere pris, lavere mengde, dødvektstap) uten effektivitetsgevinst", "Fordi det senker prisen under marginalkostnaden i markedet", "Fordi det øker det samfunnsøkonomiske overskuddet så mye at monopolisten alene sitter igjen med gevinsten", "Fordi det gir for lav pris til kundene og dermed presser ærlige konkurrenter ut av markedet med tap for alle"],
      explanation: "Prissamarbeid skader forbrukerne som et monopol, uten den effektivitetsfordelen et naturlig monopol kan ha.",
    },
    {
      question: "Hvorfor er et kartell ustabilt?",
      options: ["Hvert medlem tjener på å bryte ut mens de andre holder den høye prisen", "Fordi kundene forhandler prisen ned igjen over tid", "Fordi staten hele tiden griper inn med reguleringer og avgifter som gjør samarbeidet ulønnsomt for medlemmene", "Fordi konkurransetilsynet raskt oppdager samarbeidet og ilegger medlemmene bøter"],
      explanation: "Fristelsen til å jukse (selge litt mer/billigere) undergraver avtalen — fangens dilemma-strukturen.",
    },
    {
      question: "Hva er broen fra kartellets ustabilitet til spillteorien?",
      options: ["Fangens dilemma: individuelt beste handling (jukse) gir dårligere utfall for kartellet samlet", "Kartellet har ingen som helst kobling til spillteorien", "Kartellet er en ren koordineringslikevekt der ingen har noe å tjene på å avvike fra den avtalte høye prisen", "Nash-likevekten i spillet er alltid Pareto-optimal, slik at kartellet ender i det beste utfallet for alle parter"],
      explanation: "Å bryte ut er hvert medlems beste handling, men når alle gjør det ryker avtalen — akkurat fangens dilemma (kap. 7.2).",
    },
    {
      question: "Hvordan skiller monopolistisk konkurranse seg fra rent monopol?",
      options: ["Mange bedrifter og fri etablering gir null langsiktig profitt", "Det er ingen markedsmakt i det hele tatt", "Etableringshindringene er de samme i begge", "Prisen er lik marginalkostnaden"],
      explanation: "Begge har $p > \\text{MK}$, men bare monopolet beholder profitten; fri etablering fjerner den i monopolistisk konkurranse.",
    },
    {
      question: "Testes Cournot- og Bertrand-modellene på ECON1210?",
      options: ["Nei — «oligopol» dekkes av kartell-som-monopol og fangens dilemma", "Ja, som et hovedtema i monopoldelen", "Ja, begge modellene må utledes fullt ut med reaksjonsfunksjoner og likevektsberegning i eksamensbesvarelsen", "Ja, Cournot-modellen men ikke Bertrand"],
      explanation: "De formelle oligopolmodellene er utenfor pensum; ikke bruk tid på utledninger.",
    },
    {
      question: "Hva er en gevinst ved differensieringen i monopolistisk konkurranse?",
      options: ["Forbrukerne får variasjon og valgmuligheter", "Profitten blir høyere på lang sikt", "Bedriftene får en høyere markedsandel hver seg", "Prisen blir lik marginalkostnaden"],
      explanation: "Mangfoldet av ulike varianter (kafeer, merker) har verdi i seg selv og kan forsvare det lille effektivitetstapet.",
    },
    {
      question: "Hvem taper på et kartell?",
      options: ["Kjøperne — de betaler høyere pris og får mindre mengde", "Kartellmedlemmene selv", "Konkurransetilsynet, som mister gebyrinntekter", "Ingen taper noe på det"],
      explanation: "Kjøperne taper (KO ned) mens kartellmedlemmene vinner på den høye prisen; nettotapet er dødvektstrekanten.",
    },
    {
      question: "Hva skjer med en bedrifts etterspørselskurve når nye konkurrenter etablerer seg i monopolistisk konkurranse?",
      options: ["Den skifter inn og blir slakere (mer elastisk)", "Den blir helt loddrett i det nye markedet", "Den skifter ut og blir brattere, fordi bedriften nå selger til flere lojale kunder med lav priselastisitet", "Den forsvinner helt ut av markedet"],
      explanation: "Nye bedrifter tar kunder (E skifter inn) og gir kundene flere alternativer (E blir slakere) til profitten er null.",
    },
  ],
  'econ1210-5-5': [
    {
      question: "Hva skal alltid stå først i en monopoloppgave?",
      options: ["MI-dekomponeringen (kvantums- og priseffekt)", "Reguleringsdrøftingen", "Konklusjonen om hvilket inngrep du anbefaler", "Velferdsregnskapet for markedet"],
      explanation: "Fasitene starter alltid med å dele MI i kvantums- og priseffekt — å hoppe over det koster poeng.",
    },
    {
      question: "Et monopol har $x = 140 - 2p$ og $\\text{MK} = 20$. Hva er $x_M$ og $p_M$?",
      options: ["$x_M = 50$, $p_M = 45$", "$x_M = 50$, $p_M = 20$", "$x_M = 100$, $p_M = 45$", "$x_M = 70$, $p_M = 45$"],
      explanation: "$p = 70 - \\frac{1}{2}x$, MI $= 70 - x$. MI = MK: $x_M = 50$. Pris fra E: $p_M = 70 - 25 = 45$.",
    },
    {
      question: "Et monopol har $x = 140 - 2p$ og $\\text{MK} = 20$ ($x_M = 50$, $p_M = 45$). Hva er dødvektstapet?",
      options: ["$625$", "$1250$", "$250$", "$400$"],
      explanation: "$x_{\\text{opt}} = 140 - 40 = 100$; dødvektstap $= \\frac{1}{2}(45-20)(100-50) = \\frac{1}{2}\\cdot 25\\cdot 50 = 625$.",
    },
    {
      question: "En student regner $x_M$ riktig men leser prisen der MI = MK. Hva blir feil?",
      options: ["Prisen blir for lav — tallet der MI = MK er marginalkostnaden, ikke prisen", "Mengden blir for lav fordi MI-kurven ligger under etterspørselskurven overalt", "Mengden blir for høy, fordi $x_M$ da leses av der marginalinntekten krysser etterspørselskurven i stedet", "Ingenting blir feil — punktet der MI = MK gir nettopp monopolprisen som skal leses av i denne oppgavetypen"],
      explanation: "Feil #5: prisen leses av etterspørselskurven ved $x_M$, ikke der MI = MK (det gir MK).",
    },
    {
      question: "Mellom hvilke kurver går dødvektstrekanten i monopoldrillen?",
      options: ["Mellom etterspørselskurven og MK-linja, fra $x_M$ til $x_{\\text{opt}}$", "Mellom etterspørselskurven og MI-kurven", "Mellom MI-kurven og MK-linja fra origo", "Mellom prislinja og MK-linja"],
      explanation: "Tapet er verdi som forsvinner fordi mengden er under $x_{\\text{opt}}$ — trekanten går mot E og MK, aldri mot MI.",
    },
    {
      question: "Et ferjemonopol har $x = 300 - 5p$ og $\\text{MK} = 40$. Hva er $x_M$ og $p_M$?",
      options: ["$x_M = 50$, $p_M = 50$", "$x_M = 50$, $p_M = 40$", "$x_M = 100$, $p_M = 50$", "$x_M = 25$, $p_M = 55$"],
      explanation: "$p = 60 - \\frac{1}{5}x$, MI $= 60 - \\frac{2}{5}x$. MI = MK: $x_M = 50$. Pris fra E: $p_M = 60 - 10 = 50$.",
    },
    {
      question: "Når er et naturlig monopol samfunnsøkonomisk lønnsomt?",
      options: ["Når konsumentoverskuddet ved $p = \\text{MK}$ overstiger den faste kostnaden (KO > B)", "Når den faste kostnaden $B$ er lavere enn marginalkostnaden", "Alltid, siden ett stort selskap med fallende gjennomsnittskostnad per definisjon er billigst for samfunnet", "Når selskapet går med regnskapsmessig overskudd allerede ved $p = \\text{MK}$, slik at ingen subsidie trengs"],
      explanation: "Ved $p = \\text{MK}$ er SO = KO; er denne verdien større enn $B$, er tjenesten verdt mer enn den koster å opprette.",
    },
    {
      question: "Hva gjør regulering av et naturlig monopol vanskelig?",
      options: ["Informasjonsproblemet — myndighetene kjenner ikke selskapets kostnader like godt", "At selskapet til enhver tid kan true med å flytte hele virksomheten sin til utlandet", "At etterspørselen er fullstendig ukjent, slik at myndighetene ikke kan anslå betalingsvilligheten i markedet", "At det ikke finnes reguleringsverktøy — myndighetene mangler både makspris, kvantumskrav og subsidie som grep"],
      explanation: "Selskapet kan overdrive kostnadene for å få høyere tillatt pris eller subsidie — informasjonsasymmetrien.",
    },
    {
      question: "Hvorfor er et kartell forbudt?",
      options: ["Det gir monopolutfall (pris opp, mengde ned, dødvektstap) uten effektivitetsgevinst", "Fordi kartellet presser sine egne underleverandører til å selge langt billigere enn før", "Fordi det øker det samlede samfunnsøkonomiske overskuddet så kraftig at bare produsentene får glede av det", "Fordi det gir null profitt til medlemmene, slik at ingen får dekket sine faste kostnader og markedet svikter"],
      explanation: "Prissamarbeid skader forbrukerne som et monopol; konkurranseloven forbyr det.",
    },
    {
      question: "Fem oppdrettere danner kartell: $x = 240 - 3p$, $\\text{MK} = 40$. Hva er kartellmengden $x_M$?",
      options: ["$x_M = 60$", "$x_M = 120$", "$x_M = 30$", "$x_M = 90$"],
      explanation: "$p = 80 - \\frac{1}{3}x$, MI $= 80 - \\frac{2}{3}x$. MI = MK: $\\frac{2}{3}x = 40 \\Rightarrow x_M = 60$ (mot frikonkurranse 120).",
    },
    {
      question: "Hva begrenser en monopolists markedsmakt?",
      options: ["En mer elastisk etterspørselskurve — flere konkurrenter, substitutter, ny kabel, utløpt patent", "En høyere marginalkostnad hos monopolisten selv", "En brattere etterspørselskurve, fordi kundene da reagerer svakere på pris og bedriften kan holde prisen høyt over MK", "Færre konkurrenter i markedet, ettersom mindre konkurransepress gir monopolisten mer rom mellom pris og MK"],
      explanation: "Mer elastisk E → priseffekten svir mer → mindre gap mellom pris og MK → mindre makt.",
    },
    {
      question: "En nettavis har $x = 90 - p$, $\\text{MK} = 0$, $B = 3\\,000$. Er driften lønnsom?",
      options: ["Ja — KO ved gratis tilgang er $4\\,050 > 3\\,000$", "Nei — selskapet taper penger", "Nei — inntekten er null når prisen er null", "Nei — KO er lavere enn B"],
      explanation: "Optimum $p = 0$, $x = 90$; KO $= \\frac{1}{2}\\cdot 90\\cdot 90 = 4\\,050 > 3\\,000$. Lønnsom.",
    },
    {
      question: "Hvorfor er et kartell vanskelig å holde?",
      options: ["Hvert medlem fristes til å bryte ut mens de andre holder den høye prisen", "Fordi kundene raskt finner andre leverandører", "Fordi staten hele tiden griper inn med kontroller og bøter som gjør at medlemmene ikke tør å holde avtalen", "Fordi det gir for lav profitt til hvert medlem, ettersom den høye prisen skremmer bort altfor mange kunder"],
      explanation: "Fristelsen til å jukse undergraver avtalen (fangens dilemma, kap. 7.2), så karteller sprekker.",
    },
    {
      question: "Hva må et figursvar i monopoldrillen navngi?",
      options: ["Akser, E, MI (dobbelt så bratt), MK, $x_M$, $p_M$ (avlest på E) og dødvekttrekanten", "Bare aksene og de to kurvene E og MK, uten marginalinntekten", "Bare monopolpunktet $x_M$, fordi resten av kurvene følger implisitt og ikke trenger egne navn i besvarelsen", "Bare etterspørselskurven og prisen, siden det er skjæringspunktet mellom disse to som fullt ut bestemmer monopoltilpasningen"],
      explanation: "Uten navngitte akser, kurver, punkter og trekant er svaret halvt (feil #12).",
    },
    {
      question: "Hvem må huskes i fordelingsdelen av en monopoloppgave?",
      options: ["Tredjepartene — andre selgere som også vinner på den høye prisen", "Bare staten, som taper skatteinntekter på den lavere omsatte mengden", "Bare kjøperne, siden det utelukkende er de som får konsumentoverskuddet redusert av den høye monopolprisen", "Bare monopolisten selv, ettersom hele fordelingsvirkningen består i den ekstra profitten selskapet henter inn"],
      explanation: "Å glemme tredjepartene er feil #11; andre selgere får den høye prisen uten selv å begrense mengden.",
    },
  ],
  'econ1210-6-1': [
    {
      question: "I arbeidsmarkedet: hva svarer «mengde» og «pris» til?",
      options: ["Sysselsetting $N$ og lønn $w$", "Pris $p$ og mengde $x$ i varemarkedet", "Produsert mengde $x$ og produktprisen $p$ per enhet", "Overskudd og skattenivå"],
      explanation: "Arbeidsmarkedet er et FK-marked der mengden er sysselsettingen $N$ og prisen er lønna $w$.",
    },
    {
      question: "Hvem etterspør og hvem tilbyr arbeidskraft i arbeidsmarkedet?",
      options: ["Bedriftene etterspør (etterspørselskurven), arbeidstakerne tilbyr (tilbudskurven)", "Arbeidstakerne etterspør, bedriftene tilbyr", "Begge sider både etterspør og tilbyr arbeid samtidig", "Staten etterspør, bedriftene tilbyr"],
      explanation: "Bedriftene er kjøperne av arbeid (fallende etterspørselskurve); arbeidstakerne er selgerne (stigende tilbudskurve, arbeidstilbudet).",
    },
    {
      question: "Hva tilsvarer et anleggs enhetskostnad i arbeidsmarkedet?",
      options: ["Arbeidstakerens reservasjonslønn", "Arbeidsgiveravgiften", "Bedriftens faste kostnad", "Bedriftens overskudd"],
      explanation: "Hver arbeidstakers reservasjonslønn (laveste lønn de vil jobbe for) spiller samme rolle som et anleggs enhetskostnad: høyere markedslønn gjør flere villige.",
    },
    {
      question: "En lønnssubsidie til arbeidstakerne flytter arbeidstilbudet (tilbudskurven) hvordan?",
      options: ["Ned med nøyaktig $s$", "Opp med nøyaktig $s$", "Ingen forskyvning i det hele tatt", "Ned med $\\frac{c}{b+c}s$"],
      explanation: "Subsidien senker reservasjonslønna, så arbeidstilbudet skifter parallelt ned med hele $s$.",
    },
    {
      question: "En arbeidsgiveravgift $t$ på bedriftene flytter arbeidsetterspørselen (etterspørselskurven) hvordan?",
      options: ["Ned med nøyaktig $t$", "Opp med nøyaktig $t$", "Ned med $\\frac{b}{b+c}t$", "Ingen retning"],
      explanation: "Bedriftene er villige til å betale $t$ mindre i lønn, så arbeidsetterspørselen skifter parallelt ned med $t$.",
    },
    {
      question: "For $N = a - bw$ og $N = cw - d$: hva er arbeidsgivers andel av en lønnssubsidie?",
      options: ["$\\frac{c}{b+c}$", "$\\frac{b}{b+c}$", "$\\frac{1}{2}$ alltid", "$\\frac{b+c}{c}$"],
      explanation: "Arbeidsgivers andel (som lavere lønnskostnad) er $\\frac{c}{b+c}$; arbeidstakers andel er $\\frac{b}{b+c}$.",
    },
    {
      question: "Et slakt (svært prisfølsomt) arbeidstilbud gir arbeidstakerne hvor mye av en lønnssubsidie?",
      options: ["Lite — det meste lekker til arbeidsgiverne", "Mer enn arbeidsgiverne", "Halvparten av subsidien uansett", "Alt — hele subsidien"],
      explanation: "Slakt tilbud (stor $c$) betyr at arbeidstakers andel $\\frac{b}{b+c}$ er liten; tilstrømmingen presser lønna ned og gevinsten lekker til bedriftene.",
    },
    {
      question: "Hvem bærer mest av en lønnsskatt/-subsidie i arbeidsmarkedet?",
      options: ["Den minst prisfølsomme (bratteste) siden", "Alltid den siden skatten formelt legges på", "Den mest prisfølsomme (slakkeste) siden av markedet", "Alltid arbeidsgiveren, uansett hvor bratte kurvene er"],
      explanation: "Den siden som vanskeligst kan trekke seg ut (bratt kurve, lite prisfølsom) sitter igjen med størstedelen.",
    },
    {
      question: "Spiller det noen rolle om en lønnsskatt formelt legges på arbeidsgiver eller arbeidstaker?",
      options: ["Nei — helningene bestemmer delingen (ekvivalens)", "Ja — den som formelt betaler bærer alt", "Ja — staten bestemmer delingen", "Ja — arbeidstaker bærer alltid mest"],
      explanation: "Ekvivalens: markedets helninger, ikke lovteksten, avgjør hvem som faktisk bærer avgiften.",
    },
    {
      question: "Ved et horisontalt (uendelig elastisk) arbeidstilbud tilfaller en lønnssubsidie:",
      options: ["Arbeidsgiverne fullt ut", "Arbeidstakerne fullt ut", "Staten", "Deles likt"],
      explanation: "Når $c \\to \\infty$ går arbeidstakers andel $\\frac{b}{b+c} \\to 0$; markedslønna presses ned med hele støtten, så arbeidsgiver får alt.",
    },
    {
      question: "Etter en lønnssubsidie $s$ er arbeidstakerens effektive lønn:",
      options: ["$w_1 + s$ (markedslønn pluss støtte)", "$w^*$ (helt uendret markedslønn)", "$w_1 - s$ (markedslønn minus støtte som arbeidstaker taper)", "$w^* - s$ (opprinnelig lønn minus støtte)"],
      explanation: "Arbeidstakeren får markedslønna $w_1$ pluss subsidien $s$; markedslønna faller, men netto stiger med arbeidstakers andel av $s$.",
    },
    {
      question: "Etter en arbeidsgiveravgift $t$ er bedriftens totale lønnskostnad:",
      options: ["$w_1 + t$ (markedslønn pluss avgift)", "$w^* + t$ (den gamle lønna pluss avgiften)", "$w_1 - t$ (markedslønn minus avgiften bedriften slipper å betale)", "$w_1$ (bare markedslønna)"],
      explanation: "Bedriften betaler markedslønna $w_1$ til arbeidstaker pluss $t$ til staten, altså $w_1 + t$ totalt per time.",
    },
    {
      question: "En minstelønn satt over likevektslønna svarer til hvilket inngrep fra varemarkedet?",
      options: ["En minstepris", "En maksimalpris", "En stykkskatt på varen", "En subsidie"],
      explanation: "Minstelønn er en minstepris i arbeidsmarkedet: gir tilbudsoverskudd (arbeidsledighet), og omsatt mengde bestemmes av etterspørselen etter kortside-regelen.",
    },
    {
      question: "Hvorfor er arbeidsetterspørselen (etterspørselskurven) fallende i lønna?",
      options: ["Verdien av det en ekstra arbeidstime produserer avtar på marginen", "Fordi bedriftene alltid har et lovpålagt lønnstak å forholde seg til", "Fordi staten stadig griper inn og regulerer lønnsdannelsen nedover", "Fordi arbeidstakerne blir mindre produktive og late ved høyere lønn"],
      explanation: "Jo høyere lønn, jo færre timer lønner det seg for bedriftene å kjøpe, siden marginalverdien av arbeidskraften avtar.",
    },
    {
      question: "En lønnssubsidie gir arbeidstakerne 1/4 av gevinsten. Hva sier det om arbeidstilbudet?",
      options: ["Det er slakt (prisfølsomt) relativt til etterspørselen", "Etterspørselen etter arbeid er svært lite prisfølsom i dette markedet", "Det er fullstendig vertikalt og helt uavhengig av lønnsnivået", "Det er bratt (lite prisfølsomt) sammenlignet med etterspørselen"],
      explanation: "Arbeidstakers andel $\\frac{b}{b+c} = \\frac14$ betyr $c = 3b$: tilbudet er mer prisfølsomt enn etterspørselen, så arbeidstakerne får minst.",
    },
  ],
  'econ1210-6-2': [
    {
      question: "Substitusjonseffekten av en lønnsøkning trekker arbeidstilbudet mot:",
      options: ["Mer arbeid", "Mindre arbeid", "Uendret arbeid", "Mindre forbruk"],
      explanation: "Fritid blir dyrere (alternativkostnaden per fritime er lønna), så man bytter fritid mot arbeid — mer arbeid.",
    },
    {
      question: "Inntektseffekten av en lønnsøkning trekker arbeidstilbudet mot:",
      options: ["Mindre arbeid", "Mer arbeid", "Uendret arbeid", "Høyere lønn"],
      explanation: "Man blir rikere og har råd til mer av alt, også fritid, så man kan jobbe mindre.",
    },
    {
      question: "Hva er nettoeffekten av en lønnsøkning på arbeidstilbudet?",
      options: ["Ubestemt — de to effektene trekker hver sin vei", "Nøyaktig uendret, siden effektene alltid er like store", "Alltid mindre arbeid, siden folk da har råd til å ta seg mer fritid", "Alltid mer arbeid, siden høyere lønn alltid gjør arbeid mer lønnsomt"],
      explanation: "Substitusjonseffekten (mer) og inntektseffekten (mindre) trekker mot hverandre; hvilken som dominerer varierer.",
    },
    {
      question: "Hva er alternativkostnaden av en fritime?",
      options: ["Den tapte lønna man kunne tjent", "Ingenting — fritid er gratis", "Kostnaden ved å reise på ferie", "Prisen på en vare"],
      explanation: "Alternativkostnaden er verdien av det nest beste bruket av tiden — her lønna man kunne tjent ved å jobbe.",
    },
    {
      question: "En tilbakebøyd arbeidstilbudskurve oppstår når:",
      options: ["Inntektseffekten dominerer ved høye lønninger", "Substitusjonseffekten alltid dominerer", "Lønna er fast og upåvirket av hvor mye arbeidskraft som tilbys", "Det er utbredt arbeidsledighet som presser tilbudskurven bakover"],
      explanation: "Ved høye lønninger kan inntektseffekten overta, så høyere lønn gir mindre arbeid — kurven bøyer tilbake.",
    },
    {
      question: "En høytlønnet reduserer arbeidstiden etter en lønnsøkning. Hvilken effekt dominerer?",
      options: ["Inntektseffekten", "Substitusjonseffekten", "Ingen av dem", "Prisfølsomheten"],
      explanation: "Mindre arbeid ved høyere lønn betyr at inntektseffekten (råd til mer fritid) er sterkere enn substitusjonseffekten.",
    },
    {
      question: "Trenger arbeidstilbudsoppgaven om substitusjons-/inntektseffekt en figur på eksamen?",
      options: ["Nei — en verbal forklaring er alt som kreves", "Ja — budsjettlinje og indifferenskurver", "Ja — et markedskryss", "Ja — en spillmatrise"],
      explanation: "Den verbale dekomponeringen er nivå 2 og besvares i ord; konsumentteori-figuren (nivå 3) hører til kap. 7.1.",
    },
    {
      question: "Ved en renteøkning er virkningen på sparingen:",
      options: ["Ubestemt — substitusjons- og inntektseffekt trekker hver sin vei", "Nøyaktig uendret sparing, siden effektene alltid nøytraliserer hverandre", "Alltid mindre sparing, fordi man da når spannemålet med mindre innsats", "Alltid mer sparing, fordi høyere rente alltid gjør sparing mer lønnsomt"],
      explanation: "Substitusjon (sparing mer lønnsomt → mer) og inntekt (sparemålet nås lettere → mindre) trekker mot hverandre; samme struktur som arbeidstilbudet.",
    },
    {
      question: "Hvorfor blir fritid «dyrere» når lønna stiger?",
      options: ["Alternativkostnaden per fritime — den tapte lønna — stiger", "Fritid koster mer i butikken enn før", "Fordi staten legger en høyere skatt direkte på hver time med fritid", "Fordi fritid blir forbudt eller sterkt begrenset ved høye lønninger"],
      explanation: "Hver fritime betyr mer tapt lønn når lønna er høyere, så den relative kostnaden ved å ha fri stiger.",
    },
    {
      question: "Hvilket svar er en typisk feil på arbeidstilbudsoppgaven?",
      options: ["Å nevne bare én av de to effektene", "Å nevne begge effektene", "Å konkludere at nettoeffekten er ubestemt", "Å nevne alternativkostnaden"],
      explanation: "Sensor vil se begge effektene navngitt; å nevne bare én (eller påstå en bestemt nettoeffekt uten grunnlag) gir ikke full uttelling.",
    },
  ],
  'econ1210-6-3': [
    {
      question: "En liten åpen økonomi er på verdensmarkedet:",
      options: ["Pristaker (tar verdensprisen som gitt)", "Helt uten handel med andre land i verden", "Prissetter som selv bestemmer verdensmarkedsprisen", "Monopolist med full markedsmakt på verdensmarkedet"],
      explanation: "Den er for liten til å påvirke verdensprisen, så den tar verdensmarkedsprisen som gitt — akkurat som en pristaker i et FK-marked.",
    },
    {
      question: "Import blir aktuelt når verdensmarkedsprisen er:",
      options: ["Lavere enn autarkiprisen", "Høyere enn autarkiprisen", "Lik autarkiprisen", "Null"],
      explanation: "Er verdensprisen lavere enn den innenlandske likevektsprisen, lønner det seg å importere; innenlandsk pris presses ned til verdensprisen.",
    },
    {
      question: "Etter åpning for import, hva skjer med innenlandsk produksjon og forbruk?",
      options: ["Produksjon faller, forbruk øker", "Produksjon øker, forbruk faller", "Begge øker samtidig", "Begge faller samtidig"],
      explanation: "Lavere pris gjør at innenlandsk produksjon faller (tilbudskurven) og forbruket øker (etterspørselskurven); differansen importeres.",
    },
    {
      question: "Ved åpning for import skjer det med samfunnsøkonomisk overskudd (SO):",
      options: ["Det stiger (gevinsttrekanten)", "Det blir negativt", "Det faller fordi produsenttapet dominerer", "Det er helt uendret"],
      explanation: "KO stiger mer enn PO faller, så SO stiger netto — den samlede gevinsten er gevinsttrekanten.",
    },
    {
      question: "Hvem vinner og taper ved åpning for import?",
      options: ["Konsumentene vinner, produsentene taper", "Produsentene vinner, konsumentene taper", "Begge taper på det", "Begge vinner like mye"],
      explanation: "Lavere pris: konsumentene vinner (KO opp), produsentene taper (PO ned), men landet vinner samlet.",
    },
    {
      question: "Ved åpning for eksport (verdenspris over autarki), hva skjer med SO?",
      options: ["Det stiger (produsentenes gevinst > konsumentenes tap)", "Konsumentene vinner klart på den høyere prisen som oppstår", "Det faller fordi konsumenttapet overstiger produsentgevinsten", "Det er uendret siden prisøkningen bare omfordeler overskuddet"],
      explanation: "Høyere pris: PO stiger, KO faller, men produsentenes gevinst overstiger konsumentenes tap, så SO stiger.",
    },
    {
      question: "Hvorfor senker en eksportrestriksjon SO?",
      options: ["De omdirigerte enhetenes betalingsvillighet er lavere enn verdensmarkedsprisen (alternativverdien)", "Fordi produsentene tjener langt mer på å selge alt innenlands", "Fordi importen av varen øker kraftig og fortrenger den innenlandske produksjonen fra det nasjonale markedet", "Fordi produsentene taper på å selge de omdirigerte enhetene innenlands til en pris under verdensmarkedsprisen"],
      explanation: "Å holde varer hjemme til lavere innenlandsk betalingsvillighet enn verdensprisen gir tapt eksportinntekt — alternativverdien overstiger den innenlandske verdien.",
    },
    {
      question: "Etter handelsåpning settes den innenlandske prisen:",
      options: ["Lik verdensmarkedsprisen", "Av det gamle innenlandske krysset", "Av produsentene", "Av staten fritt"],
      explanation: "Prisen bestemmes utenfra: innenlandsk pris blir lik verdensmarkedsprisen, og produksjon/forbruk leses av T og E ved den prisen.",
    },
    {
      question: "Hva driver gevinsten fra internasjonal handel?",
      options: ["Komparative fortrinn (ulik alternativkostnad)", "Absolutte fortrinn i produksjonen av varen alene", "Statlige subsidier som kunstig senker prisen på eksportvarer", "Like priser overalt i verden som fjerner ethvert bytteinsentiv"],
      explanation: "Land spesialiserer seg etter komparative (relative) fortrinn — lavest alternativkostnad — og bytter, så alle kan ende opp med mer.",
    },
    {
      question: "En vanlig feil i handelsoppgaven er å:",
      options: ["Konkludere med samlet tap fordi produsentene taper ved import", "Sette innenlandsk pris lik verdensprisen", "Bruke gevinsttrekanten til å måle den samlede handelsgevinsten", "Lese den innenlandske produksjonen av tilbudskurven ved verdensprisen"],
      explanation: "Produsenttapet oppveies av kjøpernes større gevinst (gevinsttrekanten); landet vinner samlet ved import.",
    },
  ],
  'econ1210-7-1': [
    {
      question: "Hva viser budsjettlinja for to goder?",
      options: ["Alle kombinasjoner av de to godene forbrukeren akkurat har råd til", "Alle kombinasjoner av de to godene som gir forbrukeren nøyaktig samme nytte", "Prisen på det ene godet uttrykt som en funksjon av mengden av det andre godet", "Den enkelte kombinasjonen av de to godene som gir forbrukeren aller høyest nytte"],
      explanation: "Budsjettlinja $p_1x_1+p_2x_2=M$ samler alle kombinasjoner som bruker opp hele inntekten. Hva forbrukeren *foretrekker* vises av indifferenskurvene, ikke budsjettlinja.",
    },
    {
      question: "Hva er endepunktet på $x_1$-aksen for budsjettlinja $p_1x_1+p_2x_2=M$?",
      options: ["$M/p_1$", "$M/p_2$", "$p_1/p_2$", "$M\\cdot p_1$"],
      explanation: "Bruker forbrukeren alt på gode 1, får hun $M/p_1$ enheter — der linja skjærer $x_1$-aksen.",
    },
    {
      question: "Hva er helningen på budsjettlinja (med $x_1$ vannrett, $x_2$ loddrett)?",
      options: ["$-p_1/p_2$", "$-p_2/p_1$", "$-M/p_1$", "$-p_1\\cdot p_2$"],
      explanation: "Helningen er den relative prisen $-p_1/p_2$ — hvor mange enheter av gode 2 man må gi opp for én enhet til av gode 1.",
    },
    {
      question: "Hva skjer med budsjettlinja når inntekten øker og prisene er uendret?",
      options: ["Parallellskift utover (samme helning)", "Rotasjon om det loddrette endepunktet", "Den blir brattere", "Ingenting endres"],
      explanation: "En inntektsendring flytter begge endepunktene proporsjonalt, så linja gjør et parallellskift — helningen (relativ pris) er uendret.",
    },
    {
      question: "Hva skjer med budsjettlinja når prisen på gode 1 stiger (inntekt og $p_2$ uendret)?",
      options: ["Den roterer innover om det loddrette endepunktet og blir brattere", "Den roterer om det vannrette endepunktet", "Den roterer innover om det vannrette endepunktet på $x_1$-aksen i stedet", "Den parallellskiftes innover uten at helningen endrer seg i det hele tatt"],
      explanation: "Bare $x_1$-endepunktet ($M/p_1$) trekkes inn; $x_2$-endepunktet står stille. Linja roterer og blir brattere — ny helning $-p_1/p_2$ øker i tallverdi.",
    },
    {
      question: "Hvilken egenskap har IKKE en indifferenskurve i pensum?",
      options: ["Den kan krysse en annen indifferenskurve", "En kurve lenger fra origo er bedre", "Den er konveks (buet mot origo) på grunn av avtakende bytteforhold", "Den heller nedover mot høyre"],
      explanation: "Indifferenskurver krysser ALDRI hverandre — et skjæringspunkt ville gitt to velferdsnivåer samtidig. De øvrige egenskapene stemmer.",
    },
    {
      question: "Hvor tilpasser forbrukeren seg optimalt?",
      options: ["Der den høyest oppnåelige indifferenskurven tangerer budsjettlinja", "Der budsjettlinja treffer det vannrette endepunktet på aksen for gode 1", "På det loddrette endepunktet av budsjettlinja der all inntekt går til gode 2", "Der budsjettlinja bare krysser en indifferenskurve i stedet for å tangere den"],
      explanation: "Optimum er tangeringspunktet: der er indifferenskurvens helning lik budsjettlinjas helning $-p_1/p_2$.",
    },
    {
      question: "Hva er substitusjonseffekten av en prisøkning på et gode?",
      options: ["Vridning bort fra det nå relativt dyrere godet, langs samme indifferenskurve", "En reduksjon i forbruket av begge to godene fordi inntekten nå strekker kortere", "Et sprang til en lavere indifferenskurve fordi den reelle kjøpekraften faller", "En økning i forbruket av det nå relativt dyrere godet fordi det virker mer attraktivt"],
      explanation: "Substitusjonseffekten er bevegelsen langs SAMME indifferenskurve (samme velferd) bort fra det relativt dyrere godet.",
    },
    {
      question: "Hva er inntektseffekten av en prisøkning på et gode?",
      options: ["Endringen i forbruket fordi den reelle kjøpekraften faller (sprang til lavere indifferenskurve)", "Endringen i helningen på budsjettlinja som følge av prisøkningen", "Vridningen langs den samme indifferenskurven bort fra det nå relativt dyrere godet, med uendret velferd", "At helningen på indifferenskurven i tilpasningspunktet endrer seg som følge av selve prisøkningen på godet"],
      explanation: "Inntektseffekten skyldes at pengene rekker til mindre — et sprang til en lavere indifferenskurve. Substitusjonseffekten er vridningen langs samme kurve.",
    },
    {
      question: "For et normalt gode: hvilken vei trekker substitusjons- og inntektseffekten forbruket ved en prisøkning?",
      options: ["Begge trekker forbruket av det dyrere godet ned", "Ingen av dem påvirker forbruket", "Begge effektene trekker forbruket av det nå dyrere godet oppover etter prisøkningen", "Substitusjon ned, inntekt opp"],
      explanation: "For et normalt gode peker begge effektene samme vei: forbruket av det dyrere godet faller.",
    },
    {
      question: "Hva slags algebra kreves for å løse konsumentteori-oppgaver på ECON1210?",
      options: ["Ingen nyttefunksjons-algebra — alt løses grafisk og verbalt", "Løsning av et likningssett med nytte", "Derivasjon av nyttefunksjonen for å finne marginalnytten i hvert punkt", "Integrasjon av indifferenskurven for å regne ut det samlede nyttenivået"],
      explanation: "Nyttefunksjons-algebra testes aldri. Budsjettlinje (rett linje) og indifferenskurver (tegnet kvalitativt) er alt som trengs.",
    },
    {
      question: "En støtteordning gjør et gode billigere bare opp til en viss mengde. Hva skjer med budsjettlinja?",
      options: ["Den får en knekk: slakere der godet er subsidiert, brattere der full pris gjelder", "Den parallellskiftes utover fordi hele godet blir like mye billigere overalt", "Den blir en jevn, rett linje med uendret helning gjennom hele intervallet", "Den forsvinner helt fordi støtteordningen opphever betydningen av prisene"],
      explanation: "Ulik pris i to intervaller gir ulik helning — en knekk. Slak der prisen er lav, bratt der full pris gjelder.",
    },
    {
      question: "I sparemodellen (forbruk i dag mot neste år) — hva er bytteforholdet?",
      options: ["$(1+r)$: én spart krone i dag gir $(1+r)$ kroner neste år", "$(1-r)$: hver spart krone i dag krymper med renta fram til neste år", "$1/r$: du deler renta på én for å finne hva sparingen er verdt neste år", "$r$ alene: hver spart krone i dag gir nøyaktig $r$ kroner ekstra neste år"],
      explanation: "Renta bestemmer bytteforholdet: sparer du én krone i dag, får du $(1+r)$ neste år. Det er «prisen» på forbruk i dag.",
    },
    {
      question: "Hvorfor er virkningen av en renteøkning på sparingen tvetydig for en som sparer?",
      options: ["Substitusjonseffekten trekker mot mer sparing, inntektseffekten mot mer forbruk i dag", "Fordi indifferenskurvene krysser hverandre og gir to mulige optimale tilpasninger", "Fordi sparing alltid øker når renta stiger, uten noen motvirkende effekt i det hele tatt", "Fordi renta ikke påvirker budsjettlinja, så tilpasningen forblir helt uendret"],
      explanation: "Framtidig forbruk blir relativt billigere (substitusjon → mer sparing), men spareren blir rikere (inntekt → mer forbruk i dag). Nettovirkningen er ubestemt.",
    },
    {
      question: "Hva menes med den relative prisen $p_1/p_2$?",
      options: ["Hvor mange enheter av gode 2 én enhet av gode 1 «koster» — markedets bytteforhold", "Inntekten delt på prisen på gode 1, som gir hvor mange enheter du har råd til", "Den totale utgiften på gode 1, altså prisen ganget med hvor mye du kjøper", "Forbrukerens nytte av gode 1 målt opp mot nytten av gode 2 i optimum"],
      explanation: "Den relative prisen er bytteforholdet mellom godene og bestemmer budsjettlinjas helning. En prisendring endrer den og driver substitusjonseffekten.",
    },
  ],
  'econ1210-7-2': [
    {
      question: "Hva består et spill av i denne boka?",
      options: ["Spillere, strategier og utfall (gevinster)", "En etterspørsels- og en tilbudskurve", "Bare en tabell med tall som viser hver spillers gevinst i hver rute", "Kun to spillere uten strategier"],
      explanation: "Et spill har spillere (hvem velger), strategier (hva de kan velge) og utfall (gevinstene, avhengig av alles valg).",
    },
    {
      question: "I en 2×2-matrise: hva står FØRST i tallparet i en rute?",
      options: ["Radspillerens gevinst", "Kolonnespillerens gevinst", "Summen av gevinstene", "Den høyeste gevinsten"],
      explanation: "Konvensjonen er (radspillerens gevinst, kolonnespillerens gevinst). Radspiller først — feillest par gir feil Nash-likevekt.",
    },
    {
      question: "Hva er en Nash-likevekt?",
      options: ["Et utfall der ingen tjener på å endre valget sitt alene, gitt de andres valg", "Utfallet der begge spillerne velger å samarbeide om felles beste løsning", "Ruten i spillmatrisen med høyest samlet gevinst summert over spillerne", "Utfallet som gir høyest mulig gevinst for alle spillere samtidig"],
      explanation: "Nash: ingen angrer, gitt de andres valg. Det er ikke det samme som det beste felles utfallet (det er Pareto).",
    },
    {
      question: "Hvordan finner du radspillerens beste svar?",
      options: ["Se på det første tallet og velg beste rad i hver kolonne", "Se på det andre tallet i hver enkelt rad og velg det største", "Summer begge tallene i hver rute og velg raden med høyest sum", "Velg alltid øverste rad siden den gir radspilleren mest på sikt"],
      explanation: "Radspiller ser på sitt eget (første) tall og finner beste rad for hver av motpartens kolonner. Kolonnespiller ser på andre tall, rad for rad.",
    },
    {
      question: "Hva er en dominerende strategi?",
      options: ["En strategi som gir høyest gevinst uansett hva motparten velger", "En strategi som bare virker mot samarbeid", "En strategi som bare gir best gevinst når motparten velger å samarbeide", "Strategien med lavest risiko for tap uansett hva motparten skulle finne på"],
      explanation: "En dominerende strategi er beste svar uansett motpartens valg. Har begge en, er ruten der de møtes eneste Nash-likevekt.",
    },
    {
      question: "Hva kjennetegner fangens dilemma?",
      options: ["Nash-likevekten (begge bryter) er ikke Pareto-optimal — samarbeid ville vært bedre for begge", "Begge spillere velger å samarbeide i likevekt fordi det gir høyest samlet gevinst", "Nash-likevekten er alltid det beste utfallet for begge, akkurat som samarbeid", "Det finnes ingen Nash-likevekt i spillet fordi begge alltid vil endre valg"],
      explanation: "I dilemmaet dominerer «bryt» for begge, så Nash blir at begge bryter — men et samarbeidsutfall er bedre for begge. Nash er altså ikke Pareto-optimal.",
    },
    {
      question: "Hva betyr det at et utfall er Pareto-optimalt?",
      options: ["Ingen kan få det bedre uten at noen andre får det verre", "Alle spillere har samme gevinst", "Det er et utfall som samtidig er en Nash-likevekt i spillet", "Alle spillere ender opp med nøyaktig samme gevinst i utfallet"],
      explanation: "Pareto-optimalt = ingen forbedring mulig uten å skade noen. Nash spør «hva blir valgt?», Pareto «kan alle få det bedre?» — to ulike spørsmål.",
    },
    {
      question: "Hvorfor er et kartell (prissamarbeid) ustabilt?",
      options: ["Hver bedrift har en dominerende strategi om å underby de andre — et fangens dilemma", "Fordi bedriftene ikke tjener noe ekstra på høy felles pris framfor konkurransepris", "Fordi myndighetene alltid oppdager prissamarbeidet og bøtelegger bedriftene", "Fordi prisen uansett stiger av seg selv så samarbeidet blir helt overflødig"],
      explanation: "Selv om alle tjener mest på høy felles pris, frister hver til å underby (dominerende «kutt»). Egeninteressen driver dem mot konkurranse — derfor sprekker karteller.",
    },
    {
      question: "Hvordan kan samarbeid opprettholdes i et gjentatt spill?",
      options: ["Den som bryter kan straffes i senere runder (f.eks. tit-for-tat)", "Ved at spillerne signerer en juridisk bindende avtale før spillet starter", "Ved at spillereglene endres for hver runde så ingen rekker å svike", "Ved at Nash-likevekten forsvinner helt når spillet gjentas mange ganger"],
      explanation: "Når spillet gjentas, gjør trusselen om straff i framtidige runder svik dyrt. Tit-for-tat (start samarbeid, gjør så det motparten gjorde sist) kan stabilisere samarbeidet.",
    },
    {
      question: "Hvor mange Nash-likevekter kan et koordineringsspill ha?",
      options: ["To (hvert «enighetsutfall» er en Nash-likevekt)", "Uendelig mange, siden hver eneste rute er en likevekt", "Alltid nøyaktig én, siden hvert spill har en entydig likevektsløsning", "Ingen, fordi ingen ruter oppfyller beste-svar-kravet for begge spillerne"],
      explanation: "I et koordineringsspill der begge tjener på å velge likt, er begge enighetsutfallene Nash-likevekter. Derfor må du sjekke alle ruter med beste-svar-metoden.",
    },
  ],
  'econ1210-7-3': [
    {
      question: "Hva er nåverdien av et beløp $y$ som kommer om $t$ år ved rente $r$?",
      options: ["$\\frac{y}{(1+r)^t}$", "$\\frac{y}{r}$", "$y-rt$: beløpet minus renta ganget med antall år trukket fra", "$y(1+r)^t$"],
      explanation: "Nåverdien er $\\frac{y}{(1+r)^t}$ — hvor mye du må sette av i dag for å ha $y$ om $t$ år. Å gange med $\\frac{1}{(1+r)^t}$ kalles å diskontere.",
    },
    {
      question: "Hvorfor diskonterer vi fremtidige beløp?",
      options: ["Fordi en krone i dag kan plasseres til rente $r$ og er verdt mer enn en krone senere", "Fordi inflasjonen alltid er høy og spiser opp kjøpekraften av framtidige kroner", "Fordi framtidige beløp alltid er usikre og dermed må reduseres for risiko", "Fordi banker tar gebyr for å oppbevare pengene fram til beløpet utbetales"],
      explanation: "En krone i dag kan forrentes, så den er verdt mer enn en krone senere. Renta er alternativkostnaden ved å binde pengene; diskontering gjør beløp sammenlignbare i dagens kroner.",
    },
    {
      question: "Hva er nåverdien av en evigvarende strøm på $y$ kroner per år ved rente $r$?",
      options: ["$\\frac{y}{r}$", "$\\frac{r}{y}$", "$y\\cdot r$", "$\\frac{y}{1+r}$"],
      explanation: "En evig strøm har nåverdi $\\frac{y}{r}$ — den formuen som ved rente $r$ gir akkurat $y$ i renteinntekt hvert år. Pass på å ikke snu brøken.",
    },
    {
      question: "Hva skjer med nåverdien av et fast fremtidig beløp når renta stiger?",
      options: ["Den blir lavere (hardere diskontering)", "Den blir negativ", "Den er uendret uansett rente", "Den blir høyere"],
      explanation: "Høyere rente gir mindre diskonteringsfaktor, så nåverdien faller. Derfor kan et prosjekt som er lønnsomt ved lav rente bli ulønnsomt ved høyere rente.",
    },
    {
      question: "Når er et prosjekt lønnsomt etter nåverdikriteriet?",
      options: ["Når nåverdien av de fremtidige gevinstene overstiger kostnaden i dag", "Når renta er lav nok til at kostnaden i dag automatisk blir liten i forhold", "Når prosjektet varer lenge nok til at summen av gevinstene blir stor", "Når gevinstene summerer til mer enn null udiskontert over hele perioden"],
      explanation: "Lønnsomt = nåverdien av gevinstene > kostnaden i dag. Fordi høyere rente senker nåverdien, blir færre prosjekter lønnsomme jo høyere renta er.",
    },
    {
      question: "Hvordan finner du nåverdien av en betalingsrekke over flere år?",
      options: ["Diskonter hvert års beløp for seg og legg sammen", "Legg sammen alle beløpene udiskontert", "Diskonter bare det siste beløpet siden det ligger lengst fram i tid", "Multipliser alle beløpene med renta"],
      explanation: "Hvert års beløp diskonteres med sin egen faktor $\\frac{1}{(1+r)^t}$, og så summeres. Å summere udiskontert overvurderer prosjektet.",
    },
    {
      question: "Hva er en diskonteringsfaktor?",
      options: ["Tallet $\\frac{1}{(1+r)^t}$ som et fremtidig beløp ganges med", "Antall år som går før beløpet i det hele tatt blir utbetalt til deg", "Renta ganget med antall år, altså $r\\cdot t$ for hele perioden", "Summen av alle de framtidige beløpene før de diskonteres tilbake"],
      explanation: "Diskonteringsfaktoren $\\frac{1}{(1+r)^t}$ ligger mellom 0 og 1 og faller når $r$ eller $t$ øker. På eksamen oppgis den ofte i en tabell.",
    },
    {
      question: "En vanlig feil er å legge sammen fremtidige beløp uten å diskontere. Hva blir konsekvensen?",
      options: ["Prosjektet overvurderes (kroner på ulike tidspunkter behandles som like mye verdt)", "Prosjektet undervurderes fordi framtidige kroner teller for lite i regnestykket", "Nåverdien blir negativ fordi de udiskonterte beløpene trekker summen under null", "Ingenting skjer — det gir nøyaktig samme svar som når du diskonterer riktig"],
      explanation: "Uten diskontering teller framtidige kroner like mye som dagens, så nåverdien blir for høy og prosjektet ser bedre ut enn det er.",
    },
    {
      question: "Hva representerer renta i et lønnsomhetsregnestykke?",
      options: ["Alternativkostnaden — hva pengene ellers kunne gitt", "Statens skattesats på hele overskuddet som prosjektet gir", "Prisen på godet som produseres, målt per enhet solgt i markedet", "Bedriftens faste kostnad som påløper uansett hvor mye som produseres"],
      explanation: "Renta er alternativkostnaden ved å binde pengene i prosjektet. Den fungerer som terskelen prosjektets gevinster må slå.",
    },
    {
      question: "Hva menes med pengers tidsverdi?",
      options: ["Samme kronebeløp er mer verdt jo tidligere du får det", "Penger taper alltid verdi over tid uansett rente", "At sene beløp er mer verdt fordi de har fått lengre tid på å vokse", "At alle beløp er like mye verdt uavhengig av når de utbetales til deg"],
      explanation: "Tidlige kroner kan forrentes lenger, så de er mer verdt. Dette er grunnen til at vi diskonterer og som regel foretrekker en utbetaling nå framfor samme beløp senere.",
    },
  ],
  'econ1210-8-1': [
    {
      question: "Hva er «malen» for et fullt oppgave 1-svar (sjanger A)?",
      options: ["Presis definisjon + figur der naturlig + konkret eksempel + pluss-markør", "En lang drøfting av fordeler og ulemper uten noen klar definisjon først", "Definisjon etterfulgt av full utregning av likevektspris og likevektsmengde", "Bare en presis definisjon uten figur eller eksempel i besvarelsen"],
      explanation: "Sjanger A honoreres for definisjon, figur der det er naturlig, ett konkret eksempel og pluss-markøren («det lille ekstra»).",
    },
    {
      question: "Pluss-markøren for samfunnsøkonomisk overskudd er at det kan beregnes:",
      options: ["for en hvilken som helst mengde uten å kjenne prisen", "bare i et marked som er helt uten skatter eller subsidier", "bare når man kjenner både pris og mengde i det aktuelle markedet", "bare i frikonkurranselikevekten der pris og mengde er entydig bestemt"],
      explanation: "SO = samlet betalingsvillighet minus samlede kostnader (arealet mellom E og T) og kan finnes for enhver mengde uten priser — nyansen fasitene har honorert tre år på rad.",
    },
    {
      question: "Høyden på markedets etterspørselskurve ved en gitt mengde er:",
      options: ["marginal betalingsvillighet for den siste enheten", "marginalkostnaden ved siste enhet", "gjennomsnittsprisen i markedet regnet over alle solgte enheter", "den samlede betalingsvilligheten"],
      explanation: "Etterspørselskurvens høyde = marginal betalingsvillighet — pluss-markøren for etterspørselskurve-begrepet.",
    },
    {
      question: "Høyden på markedets tilbudskurve ved en gitt mengde er:",
      options: ["marginalkostnaden — enhetskostnaden i det dyreste anlegget i drift", "marginal betalingsvillighet for den siste enheten som blir omsatt", "den gjennomsnittlige enhetskostnaden over alle anlegg som er i drift", "selgernes samlede fortjeneste fra all produksjon i det aktuelle markedet"],
      explanation: "I anleggsmodellen er tilbudskurvens høyde marginalkostnaden = enhetskostnaden i det dyreste anlegget som er i drift.",
    },
    {
      question: "Et fullt svar på «hva er et kollektivt gode» nevner at godet er:",
      options: ["både ikke-rivaliserende og ikke-ekskluderbart", "rivaliserende men ikke-ekskluderbart", "kun ikke-rivaliserende, mens man fint kan stenge enkelte ute fra godet", "kun ikke-ekskluderbart, men fullt rivaliserende"],
      explanation: "Toppsvaret nevner begge egenskapene. (Et rivaliserende, ikke-ekskluderbart gode er derimot en fellesressurs.)",
    },
    {
      question: "Hvorfor tilbyr markedet for lite av et kollektivt gode?",
      options: ["Gratispassasjer-problemet: ingen kan stenges ute, så alle lar andre betale", "Fordi staten uansett alltid overtar hele produksjonen av slike goder på egen hånd", "Produsentene har markedsmakt og holder mengden nede for å presse prisen opp, akkurat som et monopol", "Etterspørselen etter kollektive goder er alltid fullstendig uelastisk, så prisen kan ikke styre mengden"],
      explanation: "Når ingen kan stenges ute, lønner det seg å la andre betale — den uttrykte betalingsviljen blir for lav, og private tilbyr for lite.",
    },
    {
      question: "En ekstern virkning er en kostnad eller nytte som:",
      options: ["påføres en tredjepart uten kompensasjon gjennom en pris", "bare oppstår når staten legger en avgift eller skatt på varen", "kun kan oppstå i monopolmarkeder der én aktør har full kontroll over prisen", "alltid rammer produsenten selv gjennom høyere marginalkostnader i egen produksjon"],
      explanation: "Eksternalitet = virkning på tredjepart som ikke går via en pris. Negativ → for mye produseres; positiv → for lite.",
    },
    {
      question: "Hvorfor er monopolets marginalinntekt lavere enn prisen?",
      options: ["Prisfallet for å selge mer gjelder alle enhetene, ikke bare den siste (priseffekten)", "Fordi monopolet gjennomgående har langt høyere kostnader per enhet enn en vanlig pristaker", "Monopolet må betale en særskatt på salget, og denne avgiften gjør at marginalinntekten havner under prisen", "Prisen leses direkte av MI-kurven ved valgt mengde, mens etterspørselskurven ligger et stykke lavere enn den"],
      explanation: "MI = kvantumseffekt (+) minus priseffekt (−); priseffekten (lavere pris på alle enheter) trekker MI under prisen.",
    },
    {
      question: "Ved monopolets tilpasning finner man mengden der MI = MK og leser prisen av:",
      options: ["på etterspørselskurven ved monopolmengden", "på MI-kurven ved monopolmengden", "på MK-kurven ved samme mengde", "midt mellom E og MI"],
      explanation: "Prisen leses alltid av etterspørselskurven, aldri MI-kurven (feilkatalog #5). MI brukes bare til å finne mengden.",
    },
    {
      question: "SO = KO + PO gjelder:",
      options: ["kun uten skatt, subsidie eller eksternaliteter", "bare ved en bindende makspris", "bare i rene monopolmarkeder", "alltid, uansett inngrep"],
      explanation: "Med skatt kommer statens inntekt i tillegg (SO = KO + PO + skatteinntekt). Å definere SO som «KO + PO i likevekt» uten mer er feilkatalog #9.",
    },
    {
      question: "En elastisitet oppgitt uten verbal tolkning i et begrepssvar:",
      options: ["gir trekk — tall skal alltid tolkes med ord (feilkatalog #6)", "er helt greit så lenge selve regnestykket vises", "er bare et problem når elastisiteten er større enn 1, altså i det elastiske området av kurven", "teller som en klar pluss-markør fordi presis tallbruk regnes som et tegn på god faglig forståelse"],
      explanation: "Tolkningsplikten: «når prisen øker 1 %, endres mengden med |ε| %.» Et bart tall gir ikke full uttelling.",
    },
    {
      question: "Konsumentoverskudd (KO) er arealet:",
      options: ["mellom etterspørselskurven og prisen", "mellom prisen og tilbudskurven", "under hele etterspørselskurven", "mellom etterspørsels- og tilbudskurven"],
      explanation: "KO = betalingsvillighet minus det kjøperne faktisk betaler = arealet mellom etterspørselskurven og prisen. (Arealet mellom pris og T er PO.)",
    },
    {
      question: "En fellesressurs skiller seg fra et kollektivt gode ved at den er:",
      options: ["rivaliserende, men ikke-ekskluderbar (fører til overforbruk)", "ikke-rivaliserende og ikke-ekskluderbar", "alltid offentlig finansiert av staten", "både rivaliserende og ekskluderbar"],
      explanation: "Fellesressurs = rivaliserende + ikke-ekskluderbar → allmenningens tragedie (overforbruk). Kollektivt gode er ikke-rivaliserende og underforsynes.",
    },
    {
      question: "En Nash-likevekt er et strategipar der:",
      options: ["ingen spiller kan tjene på å endre strategi alene", "begge alltid får sitt beste utfall", "det samlede utfallet alltid er Pareto-optimalt", "hver spiller har en dominerende strategi"],
      explanation: "Nash: ingen kan forbedre seg ved å endre strategi alene. Den trenger ikke være Pareto-optimal — jf. fangens dilemma.",
    },
    {
      question: "Nåverdien av en betaling y om t år, med rente r, er:",
      options: ["$\\frac{y}{(1+r)^t}$", "$y\\cdot t\\cdot r$", "$\\frac{y}{r}$ uansett antall år $t$", "$y\\cdot(1+r)^t$"],
      explanation: "NV = y/(1+r)^t (evigvarende strøm: y/r). Diskontering fordi renta er alternativkostnaden ved å binde penger.",
    },
  ],
  'econ1210-8-2': [
    {
      question: "Et nyhetsbilde om at sabotasje har slått ut produksjonsanlegg oversettes til:",
      options: ["Tilbudskurven inn + lekkasje-poenget", "Tilbudskurven opp (parallellskift)", "Etterspørselskurven ut mot høyre", "en stykksubsidie til selgerne"],
      explanation: "Anlegg ut av drift = T inn (sjanger D). Omsetningen faller mindre enn bortfallet fordi høyere pris gjør flere anlegg lønnsomme (lekkasjen).",
    },
    {
      question: "«Dyrere lønn, energi eller strengere sikkerhetskrav for alle produsenter» oversettes til:",
      options: ["Tilbudskurven opp (enhetskostnaden øker i hvert anlegg)", "Tilbudskurven inn (anlegg forsvinner)", "Tilbudskurven ut (flere anlegg kommer til)", "Etterspørselskurven ned mot venstre"],
      explanation: "En kostnadsøkning på alle anlegg gir et parallelt T-skift opp — ikke inn, som er kapasitetsbortfall.",
    },
    {
      question: "«Myndighetene setter en øvre grense på strømprisen godt under markedspris» er:",
      options: ["en maksimalpris — omsatt mengde bestemmes av kortside-regelen", "en stykksubsidie til kjøperne, som senker den prisen de betaler", "en bindende minstepris, som holder prisen kunstig oppe og gir et tilbudsoverskudd i markedet", "en stykkskatt lagt på selgerne, som skyver tilbudskurven oppover og gir en høyere pris til kjøperne"],
      explanation: "Bindende pristak → etterspørselsoverskudd; omsatt mengde = tilbudt mengde (kortsiden), og mangelen må rasjoneres.",
    },
    {
      question: "«Staten gjør et gode billigere for folk med et tilskudd per solgt enhet» er en subsidie — hvilken felle bør nevnes?",
      options: ["Subsidie-paradokset: SO faller uten markedssvikt, selv om KO og PO øker", "At subsidien alltid øker samfunnsøkonomisk overskudd", "At subsidien i praksis virker som en makspris, fordi den presser prisen ned under likevektsnivået", "At tilbudskurven flytter oppover når subsidien innføres, slik at prisen til kjøperne stiger istedenfor"],
      explanation: "Uten markedssvikt gir subsidien et paradoks-tap. Med positiv eksternalitet kan den likevel være riktig — nevn hvilken situasjon som gjelder.",
    },
    {
      question: "«Hvordan kan utslippene kuttes billigst mulig?» ber om:",
      options: ["trekriterie-rammen: avgift vs. omsettelige kvoter vs. direkte regulering", "en ren moralsk drøfting av vårt felles klimaansvar", "monopolpakken med mengde fra MI = MK og pris avlest på etterspørselskurven ved den valgte mengden", "kortside-regelen, som avgjør omsatt mengde når et bindende prisinngrep skaper ubalanse i markedet"],
      explanation: "Lik pris på utslipp → like marginale rensekostnader → billigst kutt. Sjanger H, trekriterie-rammen fra kap. 4.4.",
    },
    {
      question: "«Ett enerådende selskap uten konkurrenter» oversettes til:",
      options: ["monopolpakken: mengde fra MI = MK, pris fra etterspørselskurven", "frikonkurranse med mange pristakere", "et naturlig monopol med fallende gjennomsnittskostnad", "en fellesressurs i markedet"],
      explanation: "Enerett = monopol (sjanger I). Prisen leses av etterspørselskurven ved monopolmengden, aldri av MI-kurven.",
    },
    {
      question: "Den vanligste feilen når casen er uvant, er å:",
      options: ["la innpakningen lede mot moralsk essay i stedet for modellgrepet", "regne ut likevekten før man i det hele tatt har lest hele oppgaveteksten", "regne seg ferdig altfor raskt og hoppe over mellomregningene som sensor faktisk vil se begrunnet", "bruke alt for mange figurer og diagrammer, slik at selve modellpoenget drukner i overflødige tegninger"],
      explanation: "Sensor vil ha modellgrepet (kurve, skift, velferd) først; den normative drøftingen kommer på toppen, ikke i stedet.",
    },
    {
      question: "Argumentet «produsentene tjener godt, så prisen bør tvinges ned» er feil fordi:",
      options: ["høy profitt er et fordelingspoeng; effektiv pris krever pris = marginalkostnad", "produsentoverskudd aldri kan eksistere i modellen", "den effektive prisen alltid skal være null, slik at godet i praksis deles ut gratis til alle kjøperne", "produsentene i realiteten aldri tjener penger på salget"],
      explanation: "At selskapene tjener godt (stort produsentoverskudd) er fordeling, ikke effektivitet. Riktig mengde krever pris lik marginalkostnaden — et pristak under markedsprisen gir mangel og dødvektstap.",
    },
    {
      question: "«Energiprisene steg, og staten innførte samtidig en støtteordning» bør analyseres som:",
      options: ["to grep i rekkefølge: kostnadssjokk (T opp) og subsidie (T ned)", "en ren prisregulering fra myndighetenes side, helt uten noe kostnadssjokk", "bare en subsidie, siden støtteordningen er det eneste tiltaket som faktisk endrer prisen i markedet her", "bare en kostnadsøkning, ettersom energiprisene er den dominerende hendelsen og støtten kan sees bort fra"],
      explanation: "Én hendelse kan skjule to grep. Analyser kostnadssjokket og støtten hver for seg, ikke som ett skift.",
    },
    {
      question: "Kjernebudskapet i aktualitetstreningen er at:",
      options: ["innpakningen er ny hvert år, men grepene er de samme", "aktuelle caser ikke kan analyseres med pensum", "aktuelle caser sjelden lar seg analysere med pensum, siden virkeligheten er mer sammensatt enn teorien", "man alltid skal svare med et moralsk essay"],
      explanation: "Casene bytter innramming (korona, gasskrise, sabotasje, klimasøksmål), men oversettes alltid til de faste standardgrepene.",
    },
  ],
  'econ1210-8-3': [
    {
      question: "På den klassiske ECON1210-malen (20/50/30) teller oppgave 2 (FK-markedsoppgaven) 50 % og settet varer 240 minutter. Hvilket tidsbudsjett følger vektene direkte?",
      options: ["48 min på oppgave 1, 120 min på oppgave 2, 72 min på oppgave 3", "80 min på hver av de tre oppgavene", "120 min på oppgave 1, 72 min på oppgave 2, 48 min på oppgave 3", "60 min på oppgave 1, 60 min på oppgave 2, 120 min på oppgave 3"],
      explanation: "Tiden bør speile vektene: 0,20·240 = 48, 0,50·240 = 120, 0,30·240 = 72. Den vanligste tabben er å bruke for mye tid på begrepene i oppgave 1 og for lite på 50 %-oppgaven.",
    },
    {
      question: "I øvingssettets FK-marked er E: $x = 900 - 3p$ og T: $x = 2p - 100$. Hva er likevektsprisen og -mengden?",
      options: ["$p_0 = 200$, $x_0 = 300$", "$p_0 = 300$, $x_0 = 200$", "$p_0 = 160$, $x_0 = 420$", "$p_0 = 250$, $x_0 = 150$"],
      explanation: "Sett $900 - 3p = 2p - 100 \\Rightarrow 1000 = 5p \\Rightarrow p_0 = 200$, og $x_0 = 900 - 3\\cdot 200 = 300$ (kontroll i T: $2\\cdot 200 - 100 = 300$).",
    },
    {
      question: "I samme marked ($b = 3$, $c = 2$) legges en stykkskatt $t = 25$ på selgerne. Hva blir kjøpernes andel av avgiften, og hvorfor?",
      options: ["$\\frac{c}{b+c} = \\frac{2}{5}$ — kjøperne bærer minst fordi etterspørselen er mest prisfølsom", "$\\frac{b}{b+c} = \\frac{3}{5}$ — kjøperne bærer mest fordi tilbudet er brattest", "Alltid $\\frac{1}{2}$ — en stykkavgift deles alltid helt likt mellom kjøper og selger uansett elastisitet", "$\\frac{b}{b+c} = \\frac{3}{5}$ — kjøperne bærer mest fordi det er de som faktisk betaler prisen i butikken"],
      explanation: "Kjøpers andel er $\\frac{c}{b+c} = \\frac{2}{5}$. Den minst prisfølsomme (bratteste) siden bærer mest; her er tilbudet minst prisfølsomt ($c=2<b=3$), så selgerne bærer $\\frac{3}{5}$ og kjøperne bare $\\frac{2}{5}$.",
    },
    {
      question: "I øvingssettets monopol er E: $x = 240 - 2p$ (invers $p = 120 - \\tfrac{1}{2}x$, så $\\text{MI} = 120 - x$) og $\\text{MK} = 40$. Hvilken mengde og pris velger monopolet?",
      options: ["$x_M = 80$ (fra MI = MK), $p_M = 80$ lest av etterspørselskurven", "$x_M = 160$, $p_M = 40$ (der E krysser MK)", "$x_M = 120$, $p_M = 60$, funnet ved å sette etterspørselen lik marginalkostnaden midt mellom de to", "$x_M = 80$, $p_M = 40$ lest av MI-kurven"],
      explanation: "MI = MK gir $120 - x = 40 \\Rightarrow x_M = 80$. Prisen leses av etterspørselskurven (ikke MI-kurven — feilkatalog #5): $p_M = 120 - \\tfrac{1}{2}\\cdot 80 = 80$. Å lese prisen av MI gir feilaktig 40.",
    },
    {
      question: "For samme monopol er samfunnsøkonomisk optimal mengde $x_{\\text{opt}} = 160$ (der $p = \\text{MK} = 40$), monopolmengden 80 og $p_M = 80$. Hvor stort er dødvektstapet?",
      options: ["$\\tfrac{1}{2}(160-80)(80-40) = 1\\,600$", "$\\tfrac{1}{2}(160-80)(120-40) = 3\\,200$", "$(80-40)\\cdot 80 = 3\\,200$", "$\\tfrac{1}{2}\\cdot 80\\cdot 80 = 3\\,200$"],
      explanation: "Dødvektstapet er trekanten mellom E og MK fra $x_M = 80$ til $x_{\\text{opt}} = 160$: $\\tfrac{1}{2}(x_{\\text{opt}}-x_M)(p_M-\\text{MK}) = \\tfrac{1}{2}\\cdot 80\\cdot 40 = 1\\,600$. (3 200 er monopolets overskudd $(p_M-\\text{MK})x_M$, ikke dødvektstapet.)",
    },
  ],
  'econ1210-8-4': [
    {
      question: "I markedet x = 800 − 4p (E) og x = 2p − 100 (T) settes en subsidie s = 30 til selgerne. Ny markedspris og selgers nettopris blir:",
      options: ["p₁ = 140 og nettopris 170 (T ned med s, deling ⅓ til kjøper, ⅔ til selger)", "p₁ = 120 og nettopris 150, med hele subsidien til kjøperne", "p₁ = 135 og nettopris 165, med en helt lik deling ½/½ av subsidien mellom kjøpere og selgere", "p₁ = 150 og nettopris 150, siden subsidien bare er en overføring og ikke endrer prisen i markedet"],
      explanation: "Subsidie skifter T NED med s: selger tilbyr ut fra p+30, x = 2(p+30)−100 = 2p−40. Likevekt 800−4p = 2p−40 gir p₁ = 140, x₁ = 240, nettopris = 140+30 = 170. Kontroll: 2·170−100 = 240. ✓ Alt. 2 flytter T feil vei (feilkode #2). Alt. 3 antar lik deling, men b = 4 ≠ c = 2. Alt. 4 overser at subsidien senker prisen.",
    },
    {
      question: "I samme marked deles subsidien slik at kjøperne bare får ⅓. Hvorfor får kjøperne en så liten andel?",
      options: ["Fordi tilbudet er minst prisfølsomt (c = 2 < b = 4) — den bratteste, minst prisfølsomme siden får mest", "Fordi kjøperne i dette markedet har svært lav betalingsvillighet", "Fordi staten har bestemt at selgerne skal få mest", "Fordi staten selv bestemmer at selgerne skal få den største andelen som en del av støtteordningens vilkår"],
      explanation: "Delingen styres av kurvenes helninger: kjøpers andel = c/(b+c) = 2/6 = ⅓. Den minst prisfølsomme siden (her tilbudet, c = 2 < b = 4) henger igjen i prisen og får/bærer mest. Alt. 2 er «hvem betaler formelt»-fellen (#3): hvem subsidien gis til, spiller ingen rolle. Alt. 3 og 4 er feil — delingen er ren helningsgeometri.",
    },
    {
      question: "En subsidie i et velfungerende marked gir høyere KO OG høyere PO. Hvorfor faller likevel samfunnsøkonomisk overskudd?",
      options: ["Statens utlegg overstiger den samlede KO+PO-gevinsten; for merenhetene er betalingsvilligheten lavere enn kostnaden", "Fordi statens utlegg ikke regnes med i samfunnsøkonomisk overskudd", "Fordi prisen til kjøperne stiger som følge av subsidien, og kjøperne taper dermed netto på ordningen sett under ett samlet", "SO faller egentlig ikke — når både konsumentoverskuddet og produsentoverskuddet stiger, må jo også summen SO øke tilsvarende"],
      explanation: "Subsidie-paradokset (karakterskillet, feilkode #4): I eksemplet er utlegget 7 200, mens KO-gevinst (2 200) + PO-gevinst (4 400) = 6 600. Differansen 600 er dødvektstapet. Subsidien presser mengden over den effektive; for merenhetene er kjøpernes betalingsvillighet lavere enn produksjonskostnaden — verdi ødelegges. Alt. 2 er nettopp fellen #4. Alt. 3/4 er faktisk gale (prisen faller, selgerne tjener).",
    },
    {
      question: "Anlegg settes ut av drift, T skifter inn fra x = 2p−100 til x = 2p−280. Anleggsbortfallet ved gammel pris er 180 tonn, men omsatt mengde faller bare 120 tonn. Hva forklarer forskjellen?",
      options: ["Lekkasjen: prisøkningen gjør tidligere ulønnsomme anlegg lønnsomme igjen, så de kommer inn og demper mengdefallet", "At etterspørselen samtidig økte og trakk mengden opp igjen", "At en samtidig subsidie kompenserte for anleggsbortfallet og dermed dempet det samlede fallet i den omsatte mengden", "En ren regnefeil — mengdefallet skal være like stort som bortfallet"],
      explanation: "Lekkasje-poenget (feilkode #8): bortfallet måles horisontalt ved gammel pris p₀ = 150 (200 − 20 = 180 tonn). Faktisk mengdefall er 200 − 80 = 120 tonn. Differansen (60 tonn) skyldes at den høyere prisen (150→180) gjør tidligere ulønnsomme anlegg lønnsomme. Derfor faller omsatt mengde MINDRE enn produksjonsbortfallet. Alt. 2 er selve fellen. Alt. 3/4 innfører noe oppgaven ikke sier.",
    },
    {
      question: "Utslippskvoter deles ut GRATIS i stedet for å auksjoneres. Hva blir konsekvensen for kostnadseffektiviteten og for «forurenser betaler»?",
      options: ["Kostnadseffektiviteten er upåvirket (alternativkostnaden ved å bruke kvoten er kvoteprisen uansett); gratistildeling avgjør fordelingen og bryter «forurenser betaler»", "Gratis tildeling fjerner kvoteprisen helt, slik at ingen bedrift lenger har noe insentiv til å rense", "Gratis tildeling ødelegger kostnadseffektiviteten fordi bedriftene som får kvoter fritt, da velger å rense klart mindre enn før og dermed slipper billigere unna de fastsatte kravene", "Gratis tildeling gjør at det samlede utslippsmålet ikke lenger nås, siden bedriftene ikke betaler for kvotene og derfor forurenser en god del mer enn det kvotetaket egentlig tillater"],
      explanation: "Også en gratis kvote har alternativkostnad lik kvoteprisen (bedriften kan selge den), så hver bedrift renser like mye uansett — de marginale rensekostnadene utjevnes likt (kostnadseffektiviteten er intakt). Gratistildeling avgjør fordelingen og bryter «forurenser betaler» (staten mister auksjonsinntekten). Alt. 2 er gratiskvote-fellen. Alt. 3 er feil (kvotetaket, ikke tildelingen, bestemmer måloppnåelsen). Alt. 4 er selvmotsigende (gratis gir INGEN inntekter).",
    },
  ],
  'econ1210-8-5': [
    {
      question: "Ved en bindende maksimalpris (under likevektsprisen) bestemmes omsatt mengde av …",
      options: ["tilbudet — kortside-regelen: omsatt mengde = min(tilbudt, etterspurt), og ingen kan tvinges til å selge", "etterspørselen, siden det er et etterspørselsoverskudd", "maksprisen selv, som avleses rett på prisaksen og direkte forteller hvilken mengde som blir omsatt i markedet", "gjennomsnittet av tilbudt og etterspurt mengde"],
      explanation: "Ved makspris under likevekt er tilbudt mengde mindre enn etterspurt. Siden ingen kan tvinges til å produsere med tap, er tilbudet den korte siden, og omsatt mengde = tilbudt mengde. Å lese mengden av etterspørselskurven (etterspørselen) er nettopp feilkatalog #7 (glemt kortside-regelen).",
    },
    {
      question: "Når en storm slår ut lønnsomme kraftverk, faller omsatt mengde MINDRE enn produksjonsbortfallet fordi …",
      options: ["den høyere prisen gjør tidligere ulønnsomme anlegg lønnsomme, så de kommer inn og demper mengdefallet (lekkasjen)", "prisen faller og trekker inn nye kjøpere som erstatter det tapte", "prisen holder seg helt uendret når anleggene faller bort, og det er bare selve produksjonsmengden som justeres nedover her", "etterspørselen alltid faller nøyaktig like mye som tilbudet, slik at nettoendringen i omsatt mengde blir tilsvarende mindre"],
      explanation: "Lekkasje-poenget (feilkatalog #8 å glemme): bortfallet måles horisontalt ved gammel pris, men den nye, høyere likevektsprisen trekker inn anlegg som før var ulønnsomme. Derfor faller omsetningen mindre enn selve produksjonsbortfallet. I settets tall: bortfall 200 GWh, men mengdefall bare 100 GWh.",
    },
    {
      question: "Tilbudskurven er helt horisontal (uendelig prisfølsomt tilbud, c → ∞). Hvem bærer en avgift t lagt på produsentene?",
      options: ["Kjøperne bærer hele avgiften, fordi kjøpers andel c/(b+c) → 1 når c → ∞", "Selgerne bærer hele avgiften, siden den er lagt på dem", "Byrden deles alltid helt likt, slik at kjøpere og selgere hver bærer halvparten uansett hvor bratt kurvene er", "Byrden deles alltid likt (halvparten hver)"],
      explanation: "Kjøpers andel av en avgift er c/(b+c). En horisontal tilbudskurve betyr c → ∞, så andelen går mot 1 — kjøperne bærer alt, og selgernes nettopris er uendret. At avgiften «legges på» produsentene, spiller ingen rolle (feilkatalog #3). Den minst prisfølsomme siden bærer mest; her er tilbudet det mest prisfølsomme, så det bærer ingenting.",
    },
    {
      question: "Hvorfor gir handel med omsettelige utslippskvoter det samlede kuttet til lavest mulig kostnad?",
      options: ["Hver bedrift renser til marginal rensekostnad = kvoteprisen, så alle får lik marginalkostnad og de billigste kuttene tas først", "Fordi betalingen mellom bedriftene er en samfunnsøkonomisk besparelse i seg selv", "Fordi ordningen pålegger hver bedrift å kutte nøyaktig like mange tonn, slik at ingen slipper unna og den samlede byrden fordeles helt likt mellom alle deltakerne", "Fordi kvoteprisen alltid settes lik den høyeste marginale rensekostnaden i bransjen"],
      explanation: "Kjerneargumentet: en felles kvotepris får alle til å rense til samme marginale rensekostnad. Bedrifter som renser billig, kutter mye og selger kvoter; dyre bedrifter kjøper kvoter i stedet for å rense. De billigste kuttene tas først → billigst samlet kutt. Betalingen mellom bedriftene er en overføring, ikke en reell besparelse (besparelsen er de dyre kuttene som slippes).",
    },
    {
      question: "Svekker GRATIS tildeling av utslippskvoter kostnadseffektiviteten sammenlignet med auksjon?",
      options: ["Nei — en gratis kvote har alternativkostnad lik kvoteprisen, så bedriftene tilpasser seg likt; tildelingen avgjør fordeling og «forurenser betaler», ikke kostnadseffektiviteten", "Nei, fordi det samlede kvotetaket er nøyaktig det samme uansett hvordan kvotene i utgangspunktet deles ut", "Nei, men bare fordi gratis tildeling er den eneste tildelingsformen som faktisk får forurenseren til å betale for utslippene sine, mens auksjon i praksis lar staten bære hele miljøkostnaden i stedet", "Ja, fordi gratis tildeling gir bedriftene rett til å slippe ut mer enn før, slik at det samlede utslippstaket sprekker og selve miljømålet med ordningen ikke lenger nås uansett hvordan kvotene fordeles"],
      explanation: "Den vanligste toppsjikt-fellen: å tro at gratis kvoter ødelegger kostnadseffektiviteten. Selv en gratis kvote har alternativkostnad = kvoteprisen (bruker du den selv, kan du ikke selge den), så tilpasningen — og dermed kostnadseffektiviteten og måloppnåelsen — er lik for gratis og auksjon. Forskjellen ligger i «forurenser betaler» og fordelingen av kvoteverdien.",
    },
  ],
};

export default quizData_econ1210;
