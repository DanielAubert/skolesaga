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
      options: ["Både en korrekt, merket figur og mekanismen forklart i ord", "Kun en pen figur", "Kun en verbal forklaring", "En figur med så mange kurver som mulig"],
      explanation: "Sensors metaregel: figur og forklaring er én leveranse. Figur uten forklaring – eller forklaring uten figur – er et halvt svar.",
    },
    {
      question: "Hvilket tema har 100 % frekvens (er med i alle 16 ordinære sett)?",
      options: ["FK-likevekt og kurveskift", "Spillteori", "Nåverdi", "Konsumentteori"],
      explanation: "FK-likevekt + kurveskift og velferdsvurdering er de eneste med 100 % frekvens. Spillteori (borte siden V2020) og nåverdi (borte siden V2021) er beredskapsstoff.",
    },
    {
      question: "Hvilken tilbudsmodell bygger boka og pensum på fra og med H2024?",
      options: ["Anleggsmodellen med konstante enhetskostnader", "U-formede gjennomsnittskostnader", "Cournot-modellen", "Nyttefunksjons-modellen"],
      explanation: "Fra H2024 er anleggsmodellen (CORE) pensumets tilbudsmodell. Den gamle produsentteorien med gjennomsnittskostnader er nedtonet til sekundærstoff.",
    },
    {
      question: "Eksamen er 240 minutter og vektet 10/50/40. Hvor mange minutter bør du grovt sette av til oppgave 2?",
      options: ["Cirka 120 minutter", "Cirka 24 minutter", "Cirka 96 minutter", "Cirka 60 minutter"],
      explanation: "50 % av 240 minutter = 120 minutter. Tiden bør følge poengene, så den store oppgaven får mest.",
    },
    {
      question: "Hva er riktig om karakterskalaen i ECON1210?",
      options: ["C er en god og vanlig karakter, og E er laveste ståkarakter", "Bare A og B regnes som bestått", "F er beste karakter", "Det gis tallkarakter fra 1 til 6"],
      explanation: "Skalaen er A–F der A er best og E laveste ståkarakter. C er den vanligste og en fullt forsvarlig karakter.",
    },
    {
      question: "Hva sier sensorregelen om tall i svarene dine?",
      options: ["Tall skal alltid tolkes med ord", "Tall gir full uttelling uten kommentar", "Bare regnestykket teller, ikke tolkningen", "Man skal aldri oppgi tall"],
      explanation: "En elastisitet eller delingsbrøk gir ikke full uttelling før du har forklart hva tallet betyr i markedet (feilkatalog #6).",
    },
    {
      question: "Hvilke to tema roterer oppgave 3 (tema-oppgaven) mellom i nyere sett?",
      options: ["Klimapolitikk og monopol/markedsmakt", "Nåverdi og spillteori", "Konsumentteori og handel", "Nasjonalregnskap og pengepolitikk"],
      explanation: "Oppgave 3 roterer mellom klima-/miljøpolitikk og monopol/markedsmakt, med arbeidsmarked og spillteori som historiske alternativer.",
    },
    {
      question: "Hva er 'lekkasje-poenget' ved et tilbudskutt?",
      options: ["Omsatt mengde faller mindre enn produksjonsbortfallet fordi høyere pris gjør flere anlegg lønnsomme", "Staten taper skatteinntekter", "Kjøperne slutter helt å kjøpe", "Prisen faller når anlegg forsvinner"],
      explanation: "Når lønnsomme anlegg faller bort, gjør den høyere prisen tidligere ulønnsomme anlegg lønnsomme, så mengdefallet blir mindre enn bortfallet. En fast toppmarkør fra H2024.",
    },
    {
      question: "Hva er den beste lesestrategien ut fra frekvens og vekt?",
      options: ["Prioriter Del 1–5 (marked, velferd, skatt, klima, monopol) høyest", "Pugg bare begrepene knallhardt", "Start med spillteori og nåverdi", "Les alt likt uansett frekvens"],
      explanation: "Del 1–5 bærer det aller meste av poengene og er «må perfekt». Begrepene er «må kunne», og Del 7 (spill/nåverdi/konsument) er «bør kjenne»-beredskap.",
    },
  ],
  'econ1210-1-1': [
    {
      question: "Hva viser høyden på markedets etterspørselskurve ved en gitt mengde?",
      options: ["Den marginale betalingsvilligheten for siste enhet", "Hvor mange enheter som selges totalt", "Selgernes marginalkostnad", "Statens skatteinntekt"],
      explanation: "Høyden på E-kurven ved en mengde er verdien av den siste enheten for kjøperen som får den — marginal betalingsvillighet. Dette er en fast pluss-markør.",
    },
    {
      question: "Hvordan fremkommer markedets E-kurve fra kjøpernes individuelle kurver?",
      options: ["Ved horisontal summering av mengdene ved hver pris", "Ved å summere prisene ved hver mengde", "Ved å ta gjennomsnittet av kurvene", "Ved å multiplisere kurvene med hverandre"],
      explanation: "For hver pris legger vi sammen hvor mye hver kjøper vil ha (mengdene, langs den vannrette aksen). Det er horisontal summering.",
    },
    {
      question: "I formen x = a − bp, hva er a?",
      options: ["Metningsmengden: etterspurt mengde når prisen er null", "Prisfølsomheten", "Prisen der etterspurt mengde er null", "Den marginale betalingsvilligheten"],
      explanation: "Ved p = 0 blir x = a, så a er den mengden som etterspørres når godet er gratis — metningsmengden.",
    },
    {
      question: "Prisen på et gode settes opp. Hva skjer i etterspørselsdiagrammet?",
      options: ["Vi beveger oss langs den samme E-kurven til et nytt punkt", "Hele E-kurven skifter innover", "Hele E-kurven skifter utover", "E-kurven blir brattere"],
      explanation: "En endring i godets EGEN pris gir en bevegelse LANGS kurven, ikke et skift. Bare andre faktorer skifter selve kurven (feilkatalog #1).",
    },
    {
      question: "Kjøpernes inntekt øker (vanlig gode). Hva skjer med E-kurven?",
      options: ["Den skifter utover (til høyre)", "Den skifter innover (til venstre)", "Vi beveger oss oppover langs kurven", "Ingenting endres"],
      explanation: "Høyere inntekt gir større etterspørsel ved enhver pris for et vanlig gode — hele kurven skifter utover.",
    },
    {
      question: "Etterspørselen er x = 300 − 2p. Hva er den marginale betalingsvilligheten ved x = 200?",
      options: ["50 kroner", "100 kroner", "200 kroner", "150 kroner"],
      explanation: "200 = 300 − 2p gir 2p = 100, altså p = 50. Høyden på E-kurven ved x = 200 er 50 kroner.",
    },
    {
      question: "Prisen på et substitutt til godet stiger. Hvordan påvirkes godets E-kurve?",
      options: ["Den skifter utover (til høyre)", "Den skifter innover (til venstre)", "Vi beveger oss langs kurven", "Kurven blir loddrett"],
      explanation: "Når substituttet blir dyrere, vender kjøpere seg mot dette godet ved enhver pris → skift utover.",
    },
    {
      question: "Prisen på et komplement (brukes sammen med godet) stiger. Hva skjer med godets E-kurve?",
      options: ["Den skifter innover (til venstre)", "Den skifter utover (til høyre)", "Vi beveger oss langs kurven", "Ingenting"],
      explanation: "Dyrere komplement (f.eks. bensin til bil) reduserer etterspørselen etter godet ved enhver pris → skift innover.",
    },
    {
      question: "Etterspørselen er x = 600 − 3p. Ved hvilken pris blir etterspurt mengde null?",
      options: ["200 kroner", "600 kroner", "300 kroner", "3 kroner"],
      explanation: "Sett x = 0: 0 = 600 − 3p gir p = 200. Ved 200 kroner eller mer kjøper ingen (choke-prisen a/b).",
    },
    {
      question: "Hva betyr tallet b i x = a − bp?",
      options: ["Hvor mange enheter etterspørselen faller når prisen stiger med én krone", "Metningsmengden", "Elastisiteten", "Den marginale betalingsvilligheten"],
      explanation: "b er prisfølsomheten: fallet i etterspurt mengde per krone prisøkning. Stor b gir slak kurve, liten b gir bratt kurve.",
    },
    {
      question: "Hvorfor faller etterspørselskurven mot høyre?",
      options: ["Kjøperne rangeres etter betalingsvillighet fra høyest til lavest, så høyden synker", "Fordi tilbudet stiger", "Fordi prisen alltid stiger over tid", "Fordi staten legger på avgift"],
      explanation: "De enhetene som verdsettes høyest ligger til venstre; for å selge flere må prisen ned til kjøpere med lavere betalingsvillighet.",
    },
    {
      question: "På hvilken form skriver denne boka alltid etterspørsel?",
      options: ["Mengde som funksjon av pris: x = a − bp", "Invers form: p = a − bx", "Som en andregradsfunksjon", "Som en logaritme"],
      explanation: "Vi isolerer alltid mengden x på venstre side. Den inverse formen p = ... brukes aldri som oppgaveform i faget.",
    },
    {
      question: "Hvilken akse tegnes prisen på i mikroøkonomiske diagrammer?",
      options: ["Den loddrette (vertikale) aksen", "Den vannrette (horisontale) aksen", "Det spiller ingen rolle", "Alltid i origo"],
      explanation: "Konvensjonen er alltid pris p loddrett og mengde x vannrett. Aksene skal merkes slik på hver figur.",
    },
    {
      question: "To kjøpere: A vil ha x = 40 − 2p, B vil ha x = 30 − p. Hva er markedets etterspurte mengde ved p = 10?",
      options: ["40", "50", "30", "70"],
      explanation: "A: 40 − 20 = 20. B: 30 − 10 = 20. Sum = 40. Vi summerer mengdene horisontalt ved samme pris.",
    },
    {
      question: "Hva er en typisk feil når man forklarer virkningen av et dyrere substitutt?",
      options: ["Å si 'prisen ble høyere så etterspørselen falt' – det beskriver bevegelse langs kurven, ikke skiftet", "Å tegne aksene", "Å nevne betalingsvillighet", "Å bruke E i stedet for D"],
      explanation: "Substituttets prisøkning gir et skift utover av godets E-kurve. Bevegelses-språket hører til godets egen prisendring (feilkatalog #1).",
    },
    {
      question: "Hva kjennetegner den individuelle etterspørselskurven sammenlignet med markedets?",
      options: ["Markedskurven er slakere fordi mengdene legges sammen ved hver pris", "Den individuelle kurven er alltid slakere", "De er alltid identiske", "Markedskurven stiger"],
      explanation: "Ved horisontal summering blir markedskurven mer prisfølsom i absolutte tall (slakere) enn hver enkelt kjøperkurve.",
    },
    {
      question: "Hva menes med 'marginal' i marginal betalingsvillighet?",
      options: ["Knyttet til den siste (neste) enheten", "Gjennomsnittet over alle enheter", "Den totale verdien", "Den laveste prisen i markedet"],
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
      options: ["Et gode der alle enhetene oppfattes som like uansett selger", "Et gode ingen vil ha", "Et gode med mange substitutter", "Et gode staten produserer"],
      explanation: "Når enhetene er like, bryr kjøperne seg bare om prisen. Dette er en forutsetning for det senere FK-markedet.",
    },
  ],
  'econ1210-1-2': [
    {
      question: "Hvordan fremkommer markedets tilbudskurve i anleggsmodellen?",
      options: ["Ved å rangere anleggene etter enhetskostnad, billigst først", "Ved å summere gjennomsnittskostnadene", "Ved å ta gjennomsnittsproduktiviteten", "Ved å multiplisere pris og mengde"],
      explanation: "T-kurven bygges ved å stille anleggene i kø etter enhetskostnad. Høyere pris gjør flere (dyrere) anlegg lønnsomme, så kurven stiger.",
    },
    {
      question: "Hva viser høyden på T-kurven ved en gitt mengde?",
      options: ["Marginalkostnaden – enhetskostnaden i det dyreste anlegget i drift", "Den marginale betalingsvilligheten", "Gjennomsnittskostnaden i markedet", "Statens skatteinntekt"],
      explanation: "Høyden er enhetskostnaden i det dyreste anlegget som er i drift, altså marginalkostnaden for siste enhet. En fast pluss-markør.",
    },
    {
      question: "Et anlegg har konstant enhetskostnad. Hvor mye produserer det når prisen så vidt overstiger enhetskostnaden?",
      options: ["For full kapasitet", "Bare litt over null", "Halv kapasitet", "Ingenting"],
      explanation: "Med konstant enhetskostnad lønner hver enhet seg når p ≥ enhetskostnaden, så anlegget kjører for full kapasitet – enten alt eller ingenting.",
    },
    {
      question: "Sabotasje setter flere lønnsomme anlegg ut av spill. Hva skjer med T-kurven og hva er mekanismen?",
      options: ["Skift innover; mekanismen er redusert antall anlegg", "Skift utover; mekanismen er lavere enhetskostnader", "Bevegelse langs kurven", "Ingenting endres"],
      explanation: "Færre anlegg gir mindre kapasitet ved enhver pris → T-kurven skifter inn. Mekanismen er endret (redusert) antall anlegg, ikke endrede enhetskostnader.",
    },
    {
      question: "Strømmen blir dyrere for alle produsenter. Hvordan skifter T-kurven?",
      options: ["Parallelt opp/inn – endrede enhetskostnader", "Utover – flere anlegg", "Innover – færre anlegg", "Den beveger seg langs kurven"],
      explanation: "Dyrere innsatsfaktor hever enhetskostnaden i alle anlegg → parallellskift opp. Mekanismen er endrede enhetskostnader.",
    },
    {
      question: "Tilbudet er x = 2p − 100. Ved hvilken pris begynner det å komme tilbud?",
      options: ["50 kroner", "100 kroner", "2 kroner", "200 kroner"],
      explanation: "Sett x = 0: 2p = 100 gir p = 50. Under 50 kroner er ingen anlegg lønnsomme (tilbudsstart d/c).",
    },
    {
      question: "Hvilken forutsetning må være oppfylt for at markedets tilbudskurve skal finnes?",
      options: ["Selgerne er pristakere (mange små tilbydere) og godet er homogent", "Det finnes bare én selger", "Prisen settes av staten", "Alle anlegg har samme enhetskostnad"],
      explanation: "Med mange små tilbydere og et homogent gode tar hvert anlegg prisen for gitt. Én dominerende aktør gir monopol, ikke en vanlig tilbudskurve.",
    },
    {
      question: "Hva er den vanligste modell-feilen når man forklarer tilbudet etter H2024?",
      options: ["Å utlede T-kurven fra U-formede gjennomsnittskostnader", "Å rangere anlegg etter enhetskostnad", "Å tegne p loddrett og x vannrett", "Å nevne pristaker-forutsetningen"],
      explanation: "Fasitene bruker nå anleggsmodellen. Å bruke gammel produsentteori med gjennomsnittskostnader er å bruke feil pensummodell.",
    },
    {
      question: "I x = cp − d, hva er c?",
      options: ["Tilbudets prisfølsomhet: økning i x per krone prisøkning", "Antall anlegg", "Enhetskostnaden", "Prisen der tilbudet starter"],
      explanation: "c måler hvor mange enheter tilbudt mengde stiger for hver krone prisen øker. Stor c gir slak T-kurve, liten c gir bratt.",
    },
    {
      question: "Enhetskostnaden i et anlegg er konstant. Hva er da forholdet til marginalkostnaden?",
      options: ["Enhetskostnaden er lik marginalkostnaden", "Enhetskostnaden er dobbelt så stor", "Marginalkostnaden er null", "De har ingen sammenheng"],
      explanation: "Fordi kostnaden per enhet ikke endrer seg med mengden, koster den siste enheten det samme som alle andre — enhetskostnad = marginalkostnad.",
    },
    {
      question: "Fire anlegg med kapasitet 100 hver og enhetskostnader 20, 40, 60, 80. Hvor mye tilbys ved p = 50?",
      options: ["200", "100", "300", "400"],
      explanation: "Anleggene med enhetskostnad 20 og 40 lønner seg (50 ≥ 40, men 50 < 60). Det gir 100 + 100 = 200 enheter.",
    },
    {
      question: "Prisen på selve godet stiger. Hva skjer med tilbudet?",
      options: ["Bevegelse langs T-kurven – flere eksisterende anlegg kommer i drift", "T-kurven skifter utover", "T-kurven skifter innover", "T-kurven blir loddrett"],
      explanation: "Godets egen pris gir bevegelse langs kurven, ikke skift. Flere av de eksisterende anleggene blir lønnsomme (feilkatalog #1).",
    },
    {
      question: "Hvorfor stiger tilbudskurven?",
      options: ["Fordi høyere pris gjør stadig dyrere anlegg lønnsomme", "Fordi etterspørselen faller", "Fordi enhetskostnadene alltid synker", "Fordi staten subsidierer"],
      explanation: "Anleggene er rangert etter enhetskostnad. Jo høyere pris, jo flere (dyrere) anlegg blir lønnsomme og kommer i drift.",
    },
    {
      question: "Utenlandske produsenter får slippe inn i markedet. Hvordan skifter T-kurven?",
      options: ["Utover – økt antall anlegg", "Innover – færre anlegg", "Parallelt opp – dyrere drift", "Ingen skift"],
      explanation: "Flere anlegg gir større kapasitet ved enhver pris → T-kurven skifter ut. Mekanismen er økt antall anlegg.",
    },
    {
      question: "Hva menes med at et anlegg produserer 'for full kapasitet eller null'?",
      options: ["Det kjører maks hvis p ≥ enhetskostnaden, ellers står det stille", "Det produserer alltid halv kapasitet", "Det tilpasser mengden gradvis til prisen", "Det produserer uansett pris"],
      explanation: "Med konstant enhetskostnad finnes ikke noe optimalt mellomnivå – hver enhet gir samme overskudd/tap, så det er alt eller ingenting.",
    },
    {
      question: "Tilbudet er x = 3p − 150. Hva er marginalkostnaden for siste enhet ved x = 150?",
      options: ["100 kroner", "50 kroner", "150 kroner", "300 kroner"],
      explanation: "150 = 3p − 150 gir 3p = 300, altså p = 100. Høyden på T-kurven ved x = 150 er marginalkostnaden = 100 kr.",
    },
    {
      question: "Hva er høyden på T-kurven et uttrykk for, sett fra samfunnets side?",
      options: ["Alternativkostnaden ved å lage den siste enheten", "Kjøpernes betalingsvillighet", "Den totale profitten", "Statens inntekt"],
      explanation: "Marginalkostnaden er også alternativkostnaden ved å bruke ressursene til nettopp denne enheten – viktig i velferdsanalysen senere.",
    },
    {
      question: "Hva er tilbudsstart i x = cp − d?",
      options: ["Prisen p = d/c der tilbudet begynner", "Mengden ved p = 0", "Enhetskostnaden i det billigste anlegget", "Den maksimale kapasiteten"],
      explanation: "Sett x = 0: cp = d, altså p = d/c. Under denne prisen er ingen anlegg lønnsomme, og T-kurven treffer prisaksen her.",
    },
    {
      question: "Hvorfor er den klassiske produsentteorien (gjennomsnittskostnader) bare sekundærstoff i boka?",
      options: ["Fordi pensum og fasiter bruker anleggsmodellen fra H2024", "Fordi den er feil matematikk", "Fordi den aldri har vært pensum", "Fordi den er for enkel"],
      explanation: "Fra H2024 er anleggsmodellen (CORE) pensumets tilbudsmodell. Den gamle teorien nevnes bare for å kjenne den igjen i eldre oppgaver.",
    },
    {
      question: "Hva kalles kurvene i denne boka, og hvorfor er det viktig?",
      options: ["E-kurven (etterspørsel) og T-kurven (tilbud) – aldri D/S", "D-kurven og S-kurven", "Kostnadskurven og inntektskurven", "Det spiller ingen rolle"],
      explanation: "Boka bruker konsekvent E (etterspørsel) og T (tilbud) i tråd med den norske notasjonsstandarden i emnet.",
    },
  ],
  'econ1210-1-3': [
    {
      question: "Hvor ligger markedslikevekten grafisk?",
      options: ["Der E-kurven og T-kurven krysser", "Der E-kurven treffer prisaksen", "Der T-kurven treffer mengdeaksen", "I origo"],
      explanation: "Likevekten er punktet der etterspurt mengde er lik tilbudt mengde – altså der de to kurvene skjærer hverandre.",
    },
    {
      question: "Hva er likevektsprisen for x = a − bp og x = cp − d?",
      options: ["p* = (a+d)/(b+c)", "p* = (a−d)/(b−c)", "p* = (a+d)·(b+c)", "p* = a/b − d/c"],
      explanation: "Sett a − bp = cp − d og samle p-leddene: a + d = (b+c)p, altså p* = (a+d)/(b+c).",
    },
    {
      question: "Prisen er over likevektsprisen. Hva oppstår?",
      options: ["Tilbudsoverskudd, og prisen presses ned", "Etterspørselsoverskudd, og prisen presses opp", "Likevekt", "Ingenting"],
      explanation: "Over p* tilbys mer enn det etterspørres. Selgerne senker prisen for å få solgt, så prisen faller mot p*.",
    },
    {
      question: "Prisen er under likevektsprisen. Hva oppstår?",
      options: ["Etterspørselsoverskudd, og prisen presses opp", "Tilbudsoverskudd, og prisen presses ned", "Likevekt", "Kurvene skifter"],
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
      options: ["Mange små pristakere og et homogent gode", "Én stor selger og et unikt gode", "Statlig prissetting og monopol", "Fri etablering og reklame"],
      explanation: "FK krever mange små aktører (pristakere) og et homogent gode, så ingen kan påvirke prisen og kjøperne bare bryr seg om prisen.",
    },
    {
      question: "Hvorfor bør man kontrollere likevektsmengden i begge funksjoner?",
      options: ["For å avsløre eventuelle regnefeil", "For å finne elastisiteten", "For å bestemme skattesatsen", "Det er unødvendig"],
      explanation: "Får du ulikt x* i de to funksjonene, er det en regnefeil et sted. Kontrollen er billig forsikring.",
    },
    {
      question: "Hva kreves for et fullt svar på 'forklar ved hjelp av en figur'?",
      options: ["Både en fullt merket figur og mekanismen i ord", "Bare en pen figur", "Bare en verbal forklaring", "En tabell med tall"],
      explanation: "Sensor krever begge deler samtidig. Figur uten forklaring – eller forklaring uten figur – er halvt svar.",
    },
    {
      question: "Hva sier prismekanismen?",
      options: ["Overskudd/underskudd av tilbud driver prisen mot p*", "Prisen settes alltid av staten", "Prisen er konstant", "Prisen følger bare etterspørselen"],
      explanation: "Tilbudsoverskudd presser prisen ned, etterspørselsoverskudd presser den opp, helt til markedet klarerer i p*.",
    },
    {
      question: "Etterspørsel x = 480 − 3p, tilbud x = 2p − 120. Likevektspris?",
      options: ["120", "100", "150", "60"],
      explanation: "480 − 3p = 2p − 120 gir 600 = 5p, altså p* = 120.",
    },
    {
      question: "Hva betyr det at markedet 'klarerer'?",
      options: ["Alt som tilbys blir kjøpt, og alle som vil kjøpe får", "Staten griper inn", "Prisen faller til null", "Alle selgere går konkurs"],
      explanation: "Klarering skjer i likevekt: ingen varer blir stående usolgt, og ingen kjøper står uten – ved p*.",
    },
    {
      question: "I p* = (a+d)/(b+c), hva er b + c?",
      options: ["Summen av etterspørselens og tilbudets prisfølsomhet", "Metningsmengden", "Likevektsmengden", "Skattesatsen"],
      explanation: "b er etterspørselens prisfølsomhet, c er tilbudets. Summen b+c er markedets samlede prisfølsomhet og går igjen i delingsformelen senere.",
    },
    {
      question: "Hva viser høyden på E-kurven og T-kurven i likevektspunktet?",
      options: ["De er like: marginal betalingsvillighet = marginalkostnad", "E er dobbelt så høy som T", "T er alltid høyest", "Begge er null"],
      explanation: "I likevekt er betalingsvilligheten for siste enhet lik kostnaden ved den – kurvene møtes i samme høyde p*.",
    },
    {
      question: "Første punkt i figurmalen er:",
      options: ["Merk aksene (p loddrett, x vannrett)", "Skriv konklusjonen", "Regn ut elastisiteten", "Fargelegg arealene"],
      explanation: "Figurmalen starter alltid med merkede akser. Deretter navngis kurvene, likevekten markeres, osv.",
    },
    {
      question: "Etterspørsel x = 1200 − 4p, tilbud x = 2p − 300. Likevektspris?",
      options: ["250", "200", "150", "300"],
      explanation: "1200 − 4p = 2p − 300 gir 1500 = 6p, altså p* = 250. (Mengde x* = 200.)",
    },
    {
      question: "Ved en pris under p* ligger hvilken kurve lengst til høyre?",
      options: ["E-kurven (etterspørsel)", "T-kurven (tilbud)", "Begge like langt", "Ingen av dem"],
      explanation: "Under p* etterspørres mer enn det tilbys, så E-kurven ligger til høyre for T-kurven – etterspørselsoverskudd.",
    },
    {
      question: "Hva er den vanligste figurfeilen sensor trekker for (feilkatalog #12)?",
      options: ["Umerket figur uten navngitte akser, kurver eller likevekt", "For mange stiplede linjer", "Å bruke E og T", "Å skrive mekanismen i ord"],
      explanation: "En figur uten merkede akser, navngitte kurver (E, T) og markert likevekt regnes som umerket og gir halv uttelling.",
    },
    {
      question: "Tilbud x = 5p − 140 og etterspørsel x = 700 − 2p. Hvilken side er mest prisfølsom?",
      options: ["Tilbudet, fordi c = 5 > b = 2", "Etterspørselen, fordi b = 2", "De er like følsomme", "Umulig å avgjøre"],
      explanation: "Prisfølsomheten leses av tallet foran p: c = 5 for tilbudet mot b = 2 for etterspørselen, så tilbudet reagerer sterkere (slakere kurve).",
    },
    {
      question: "Hva er likevektsbetingelsen?",
      options: ["a − bp = cp − d (etterspurt = tilbudt)", "a + bp = cp + d", "p = a − bx", "x = 0"],
      explanation: "Likevekt betyr at etterspurt mengde er lik tilbudt mengde: a − bp = cp − d. Å løse den gir p*.",
    },
    {
      question: "Hva er en pristaker?",
      options: ["En aktør som tar markedsprisen for gitt", "En aktør som setter prisen selv", "Staten", "En som aldri kjøper"],
      explanation: "I FK er alle pristakere – for små til å påvirke prisen. Derfor er det prismekanismen, ikke enkeltaktører, som fører markedet til likevekt.",
    },
    {
      question: "Ved p = 250 med x = 600 − 2p og x = 3p − 400: hva slags situasjon er det?",
      options: ["Tilbudsoverskudd (tilbudt 350 > etterspurt 100)", "Etterspørselsoverskudd", "Likevekt", "Tomt marked"],
      explanation: "Etterspurt = 600 − 500 = 100, tilbudt = 750 − 400 = 350. Tilbudt > etterspurt, altså tilbudsoverskudd; prisen presses ned mot p* = 200.",
    },
    {
      question: "Hvorfor må man nevne mekanismen i ord når man forklarer likevekten?",
      options: ["Fordi å bare definere 'der kurvene krysser' ikke forklarer HVORDAN den oppstår", "Fordi tall ikke teller", "Fordi figuren er forbudt", "Man trenger ikke mekanismen"],
      explanation: "Spørres det om hvordan likevekten oppstår, må prismekanismen (over/under p*) med – ren definisjon er ikke nok.",
    },
    {
      question: "Hva forbereder nevneren b + c senere i boka?",
      options: ["Delingsformelen c/(b+c) for skatt og subsidie", "Elastisitetsformelen alene", "Monopolprisen", "Nåverdiformelen"],
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
      options: ["Prosentvis endring i etterspurt mengde per prosents endring i pris", "Kroneendringen i mengde per krone prisendring", "Den totale omsetningen i markedet", "Hvor bratt tilbudskurven er"],
      explanation: "Elastisitet = $\\frac{\\Delta x}{\\Delta p}\\cdot\\frac{p}{x}$ — et forhold mellom prosentvise endringer, ikke absolutte kroner.",
    },
    {
      question: "For etterspoerselen $x = 500 - 5p$ i punktet $p = 20$, $x = 400$, hva er elastisiteten?",
      options: ["$-0{,}25$", "$-5$", "$-1{,}25$", "$+0{,}25$"],
      explanation: "$\\varepsilon = -5\\cdot\\frac{20}{400} = -0{,}25$. $-5$ er bare stigningstallet; fortegnet er negativt for etterspoersel.",
    },
    {
      question: "Et elastisitetstall paa $-2$ betyr at etterspoerselen er:",
      options: ["Elastisk — en prisoekning paa 1 % gir om lag 2 % fall i mengde", "Uelastisk — mengden reagerer svakt", "Enhetselastisk", "Uavhengig av prisen"],
      explanation: "$|\\varepsilon| = 2 > 1$ er elastisk; mengden endres mer enn prisen i prosent.",
    },
    {
      question: "Hvorfor er elastisitet og stigningstall (helning) ikke det samme?",
      options: ["Elastisiteten inneholder ogsaa forholdet $\\frac{p}{x}$, som varierer langs kurven", "De er alltid like", "Helning maales i prosent, elastisitet i kroner", "Elastisiteten er konstant, helningen varierer"],
      explanation: "$\\varepsilon = -b\\cdot\\frac{p}{x}$: $-b$ er konstant, men $\\frac{p}{x}$ endres langs en rett linje, saa elastisiteten varierer.",
    },
    {
      question: "Hvor paa en rett, fallende E-kurve er etterspoerselen mest elastisk?",
      options: ["Hoeyt oppe (hoey pris, liten mengde)", "Langt nede (lav pris, stor mengde)", "I midtpunktet", "Elastisiteten er lik overalt"],
      explanation: "Hoeyt oppe er $\\frac{p}{x}$ stor, saa $|\\varepsilon|$ er stor (elastisk). Nederst er den liten (uelastisk).",
    },
    {
      question: "Hva er den vanligste feilen i en elastisitetsoppgave?",
      options: ["Aa oppgi tallet uten aa tolke det med ord", "Aa regne i likevektspunktet", "Aa bruke formelen $\\varepsilon = -b\\cdot\\frac{p}{x}$", "Aa oppgi fortegnet"],
      explanation: "Feil #6: tall/broek uten verbal tolkning. Tallet alene gir ikke full uttelling — skriv tolkningssetningen.",
    },
    {
      question: "Tilbudselastisiteten for $x = cp - d$ er:",
      options: ["$c\\cdot\\frac{p}{x}$ og positiv", "$-c\\cdot\\frac{p}{x}$ og negativ", "$\\frac{c}{p}$", "Alltid lik 1"],
      explanation: "Tilbudets stigningstall er $+c$, saa $\\varepsilon_T = c\\cdot\\frac{p}{x} > 0$: hoeyere pris gir stoerre tilbud.",
    },
    {
      question: "Hvorfor er elastisiteten et rent tall uten benevning?",
      options: ["Fordi baade teller og nevner er prosentvise endringer", "Fordi den maales i kroner", "Fordi mengden alltid er i kilo", "Fordi prisen er konstant"],
      explanation: "Prosent delt paa prosent gir et rent tall — derfor kan elastisiteten sammenligne markeder maalt i ulike enheter.",
    },
    {
      question: "Et uelastisk marked ($|\\varepsilon| < 1$) reagerer paa et tilbudsbortfall med:",
      options: ["Stor priseffekt og liten mengdeeffekt", "Liten priseffekt og stor mengdeeffekt", "Ingen prisendring", "Bare en mengdeoekning"],
      explanation: "Naar kjoeperne henger med nesten uansett pris (bratt E), maa prisen stige mye foer mengden faller nok.",
    },
    {
      question: "Hvorfor er etterspoerselen mer elastisk paa lang sikt enn paa kort sikt?",
      options: ["Kjoeperne rekker aa finne substitutter og endre vaner", "Prisene stiger over tid", "Tilbudet forsvinner", "Elastisiteten er alltid lik"],
      explanation: "Med tid kan kjoeperne bytte energikilde, isolere, endre utstyr — flere substitutter gir stoerre $|\\varepsilon|$.",
    },
    {
      question: "I likevekten $p^* = 150$, $x^* = 200$ med $x = 500 - 2p$, hva er $\\varepsilon$?",
      options: ["$-1{,}5$", "$-2$", "$-0{,}67$", "$+1{,}5$"],
      explanation: "$\\varepsilon = -2\\cdot\\frac{150}{200} = -1{,}5$ — elastisk.",
    },
    {
      question: "Hva betyr et elastisitetstall paa $-0{,}3$?",
      options: ["Uelastisk: 1 % hoeyere pris gir bare om lag 0,3 % lavere mengde", "Elastisk: mengden faller kraftig", "Mengden oeker med prisen", "Tilbudet er uelastisk"],
      explanation: "$|\\varepsilon| = 0{,}3 < 1$ er uelastisk — kjoeperne er lite prisfoelsomme.",
    },
    {
      question: "I hvilket punkt regnes elastisiteten normalt?",
      options: ["I likevektspunktet ($p^*, x^*$)", "Der prisen er null", "Der mengden er null", "I et vilkaarlig valgt punkt"],
      explanation: "Standard er likevektspunktet, med mindre oppgaven ber om et annet punkt.",
    },
    {
      question: "Bensin har lav priselastisitet fordi:",
      options: ["Det finnes faa naere substitutter paa kort sikt", "Prisen alltid stiger", "Bensin er gratis", "Alle slutter aa kjoere"],
      explanation: "Faa substitutter → uelastisk etterspoersel. Kjoeperne maa pendle uansett, saa mengden endres lite ved prisendring.",
    },
    {
      question: "Hva er enhetselastisitet?",
      options: ["$|\\varepsilon| = 1$: like stor prosentvis endring i mengde som i pris", "$|\\varepsilon| = 0$", "$|\\varepsilon| > 1$", "Elastisiteten til tilbudet"],
      explanation: "Ved $|\\varepsilon| = 1$ gir 1 % prisendring noeyaktig 1 % mengdeendring — skillet mellom elastisk og uelastisk.",
    },
    {
      question: "Et elastisk marked ($|\\varepsilon| > 1$) reagerer paa et tilbudsbortfall med:",
      options: ["Liten priseffekt og stor mengdeeffekt", "Stor priseffekt og liten mengdeeffekt", "Ingen endring", "Bare en prisoekning"],
      explanation: "Naar kjoeperne lett trekker seg (slak E), tar mengden stoetet mens prisen beveger seg lite.",
    },
    {
      question: "Hvordan kobler elastisitet til delingsformelen i skattekapitlet?",
      options: ["Den minst prisfoelsomme siden baerer mest av en avgift", "Den mest prisfoelsomme siden baerer mest", "Elastisitet har ingenting med skatt aa gjoere", "Staten baerer alltid mest"],
      explanation: "«Den som ikke kan flykte, betaler»: er etterspoerselen uelastisk, velter avgiften over paa kjoeperne.",
    },
    {
      question: "Hva skjer med $|\\varepsilon|$ naar du beveger deg nedover en rett E-kurve?",
      options: ["Den synker (kurven blir mindre elastisk der)", "Den stiger", "Den er konstant", "Den blir positiv"],
      explanation: "Lavere pris og stoerre mengde gir mindre $\\frac{p}{x}$, saa $|\\varepsilon|$ synker — derfor maa punktet oppgis.",
    },
    {
      question: "Tilbudselastisiteten i anleggsmodellen forteller:",
      options: ["Hvor mange flere anlegg som blir loennsomme naar prisen kryper opp", "Gjennomsnittsprisen i markedet", "Hvor mye kjoeperne er villige til aa betale", "Hvor stor faste kostnaden er"],
      explanation: "Hoey tilbudselastisitet = mange anlegg med naerliggende enhetskostnad, saa smaa prisendringer trekker mange inn.",
    },
    {
      question: "Hvorfor gir et elastisitetstall uten tolkning ikke full uttelling?",
      options: ["Sensor krever alltid setningen om hva tallet betyr for pris og mengde", "Tallet er alltid feil", "Elastisitet teller ikke paa eksamen", "Fordi fortegnet mangler"],
      explanation: "Feil #6: den verbale tolkningen er selve poenget sensor ser etter, ikke tallet i seg selv.",
    },
  ],
  'econ1210-1-5': [
    {
      question: "Hva skiller et skift i etterspoerselskurven fra en bevegelse langs den?",
      options: ["Bare en prisendring gir bevegelse langs kurven; alt annet skifter hele kurven", "Skift og bevegelse er det samme", "En bevegelse skjer bare ved skatt", "Et skift skjer bare naar prisen endres"],
      explanation: "Feil #1: prisendring = bevegelse langs; inntekt/preferanser/kostnader = skift av hele kurven.",
    },
    {
      question: "Ved et rent etterspoerselsskift (E ut) beveger pris og mengde seg:",
      options: ["Samme vei (begge opp)", "Motsatt vei", "Bare prisen endres", "Bare mengden endres"],
      explanation: "E ut → hoeyere pris OG stoerre mengde. E-skift flytter $p$ og $x$ samme vei.",
    },
    {
      question: "Ved et rent tilbudsskift (T inn) beveger pris og mengde seg:",
      options: ["Motsatt vei (pris opp, mengde ned)", "Samme vei (begge opp)", "Begge ned", "Bare prisen endres"],
      explanation: "T inn → hoeyere pris, mindre mengde. T-skift flytter $p$ og $x$ motsatt vei.",
    },
    {
      question: "En loennsoekning i produksjonen gjoer at:",
      options: ["T-kurven skifter innover (hoeyere enhetskostnad)", "E-kurven skifter innover", "T-kurven skifter utover", "E-kurven skifter utover"],
      explanation: "Hoeyere enhetskostnad i alle anlegg loefter T-kurven opp/inn — faerre anlegg loennsomme ved hver pris.",
    },
    {
      question: "Hva honorerer sensor mest i en skiftoppgave?",
      options: ["Mekanismen bak skiftet (hvorfor kurven flytter seg)", "Bare den tegnede pilen", "At figuren er fargelagt", "Antall ord i svaret"],
      explanation: "«Enhetskostnaden oeker i alle anlegg» / «faerre anlegg loennsomme» teller mer enn selve pilen.",
    },
    {
      question: "Naar anlegg faller bort, faller omsatt mengde:",
      options: ["Mindre enn bortfallet, fordi prisoekningen gjoer flere anlegg loennsomme", "Like mye som bortfallet", "Mer enn bortfallet", "Ikke i det hele tatt"],
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
      options: ["De gjenvaerende selgerne (hoeyere pris)", "Kjoeperne", "De utestengte selgerne", "Staten"],
      explanation: "Tredjeparts-poenget (feil #11 aa glemme det): gjenvaerende selgere faar den hoeyere prisen.",
    },
    {
      question: "Ved nyetablering av nye tilbydere taper:",
      options: ["De etablerte selgerne (lavere pris)", "Kjoeperne", "De nye tilbyderne", "Ingen"],
      explanation: "T ut → pris ned. De etablerte taper paa den lavere prisen — et tredjeparts-poeng.",
    },
    {
      question: "Naar E og T begge skifter innover samtidig, hva er bestemt?",
      options: ["Mengden faller; prisretningen er ubestemt", "Prisen stiger; mengden er ubestemt", "Begge stiger", "Begge er ubestemte"],
      explanation: "Begge innskift krymper markedet (mengde ned, bestemt), men de drar prisen hver sin vei (ubestemt).",
    },
    {
      question: "Hvorfor gir et brattere (uelastisk) E-kurve stoerre prisutslag ved et tilbudsskift?",
      options: ["Kjoeperne henger med nesten uansett pris, saa prisen maa endres mye for aa klarere markedet", "Fordi tilbudet forsvinner", "Fordi mengden ikke kan endres", "Fordi prisen alltid stiger"],
      explanation: "Bratt E = lav prisfoelsomhet → prisen tar stoetet, mengden endres lite.",
    },
    {
      question: "En billigere innsatsvare foerer til at:",
      options: ["T-kurven skifter utover (lavere enhetskostnad)", "E-kurven skifter utover", "T-kurven skifter innover", "E-kurven skifter innover"],
      explanation: "Lavere enhetskostnad gjoer flere anlegg loennsomme → T ut → pris ned, mengde opp.",
    },
    {
      question: "Hvilket skift gir en dyrere substituttvare i vaart marked?",
      options: ["E-kurven skifter utover (folk bytter til vaar vare)", "E-kurven skifter innover", "T-kurven skifter utover", "T-kurven skifter innover"],
      explanation: "Dyrere substitutt → flere velger vaar vare → oekt etterspoersel → E ut.",
    },
    {
      question: "En parallell forskyvning av hele T-kurven skyldes:",
      options: ["En endring i enhetskostnaden som er lik i alle anlegg", "At ett anlegg endrer pris", "En prisendring paa varen", "Et etterspoerselsskift"],
      explanation: "Loenn, energi, avgift eller sikkerhetskrav som treffer alle anlegg likt gir parallellskift.",
    },
    {
      question: "Kryssjekken: analysen din viser at pris og mengde beveger seg samme vei. Da er det:",
      options: ["Et etterspoerselsskift (E)", "Et tilbudsskift (T)", "Alltid feil", "En bevegelse langs kurven"],
      explanation: "E-skift → samme vei; T-skift → motsatt vei. Stemmer ikke det, har du valgt feil kurve (feil #2).",
    },
    {
      question: "Hva maaler anleggsbortfallet i en figur?",
      options: ["Den horisontale avstanden mellom gammel og ny T-kurve ved gammel pris", "Det faktiske mengdefallet", "Prisendringen", "Arealet under E-kurven"],
      explanation: "Bortfallet leses ved gammel pris; det faktiske fallet er mindre pga. lekkasjen.",
    },
    {
      question: "En helsekampanje som demper etterspoerselen gir:",
      options: ["E inn → lavere pris, mindre mengde", "E ut → hoeyere pris", "T inn → hoeyere pris", "T ut → lavere pris"],
      explanation: "Faerre vil ha varen ved enhver pris → E skifter innover → pris og mengde ned.",
    },
    {
      question: "Hvorfor er det feil aa paastaa bestemt prisretning ved samtidige motstridende skift?",
      options: ["Nettoretningen avhenger av hvilket skift som er stoerst", "Prisen endres aldri", "Mengden er alltid ubestemt", "Fordi begge skift alltid er like store"],
      explanation: "Dekomponer i to enkeltskift; naar de drar prisen hver sin vei, er retningen ubestemt uten mer info.",
    },
    {
      question: "Hoeyere inntekt hos kjoeperne (normal vare) gir:",
      options: ["E-kurven skifter utover", "E-kurven skifter innover", "T-kurven skifter utover", "T-kurven skifter innover"],
      explanation: "Oekt kjoepekraft → mer etterspoersel ved enhver pris → E ut → hoeyere pris og mengde.",
    },
    {
      question: "I firespoersmaals-malen for et skift, hva er det FOERSTE du avgjoer?",
      options: ["Hvilken kurve som skifter, og hvorfor", "Hvor mye prisen stiger", "Hvem som taper", "Hvor stort dodvektstapet er"],
      explanation: "Malen: (1) kurve + hvorfor, (2) retning, (3) ny likevekt, (4) vinnere/tapere.",
    },
    {
      question: "Komparativ statikk betyr aa:",
      options: ["Sammenligne to likevekter (foer og etter et skift)", "Modellere hele tilpasningsforloepet i tid", "Regne ut dodvektstapet", "Finne elastisiteten"],
      explanation: "Vi sammenligner likevekt $A$ og $B$ uten aa beskrive selve overgangen.",
    },
    {
      question: "Ved samtidige skift der E skifter ut og T skifter inn, hva er bestemt?",
      options: ["Prisen stiger; mengderetningen er ubestemt", "Mengden stiger; prisen ubestemt", "Begge stiger", "Begge faller"],
      explanation: "Begge skift loefter prisen (bestemt opp), men drar mengden hver sin vei (ubestemt).",
    },
    {
      question: "Hva er den raskeste kontrollen paa at du har analysert et skift riktig?",
      options: ["Sjekk om pris/mengde-moensteret passer skift-typen (E samme vei, T motsatt)", "Tell antall kurver", "Regn dodvektstapet", "Se paa fortegnet til elastisiteten"],
      explanation: "E-skift → $p$ og $x$ samme vei; T-skift → motsatt. Avvik avsloerer feil kurve eller retning.",
    },
    {
      question: "Hvorfor faller omsetningen mindre enn produksjonsbortfallet ved anleggsbortfall?",
      options: ["Prisoekningen gjoer tidligere uloennsomme anlegg loennsomme, som lekker tilbake produksjon", "Kjoeperne betaler mer", "Bortfallet ble feilmaalt", "Etterspoerselen oeker"],
      explanation: "Lekkasje-poenget (fast siden H2024): mengdefall = bortfall − lekkasje, og lekkasjen er alltid positiv.",
    },
  ],
  'econ1210-1-6': [
    {
      question: "Hva er FOERSTE steg i aapningen av den store markedsoppgaven?",
      options: ["Angi forutsetningene (pristakere, homogent gode) hvis spurt", "Regne dodvektstapet", "Tegne monopolfiguren", "Finne elastisiteten"],
      explanation: "Aapningskjeden starter med forutsetningene — «billige poeng som maa sitte».",
    },
    {
      question: "Etter aa ha funnet $p^*$, hva boer du alltid gjoere?",
      options: ["Kontrollere ved aa sette $p^*$ inn i begge funksjoner", "Gaa videre uten kontroll", "Regne elastisiteten foerst", "Tegne dodvektstapet"],
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
      options: ["En verbal tolkning av hva tallet betyr", "Bare fortegnet", "En figur", "Ingenting mer"],
      explanation: "Feil #6: tall uten tolkning gir ikke full uttelling.",
    },
    {
      question: "Et anleggsbortfall paa 150 gir et faktisk mengdefall paa 90. Hvorfor?",
      options: ["Prisoekningen gjoer 60 enheters anlegg loennsomme igjen (lekkasje)", "Bortfallet ble feilmaalt", "Etterspoerselen forsvant", "Kjoeperne betaler ikke"],
      explanation: "Lekkasje = $150 - 90 = 60$: hoeyere pris vekker tidligere uloennsomme anlegg (feil #8 aa glemme).",
    },
    {
      question: "Etter en sabotasje som fjerner anlegg, hvem er tredjeparten som tjener?",
      options: ["De gjenvaerende produsentene (hoeyere pris)", "Kjoeperne", "Staten", "De rammede anleggene"],
      explanation: "Tredjeparts-poenget (feil #11): gjenvaerende selgere faar den hoeyere prisen.",
    },
    {
      question: "En reklamekampanje som gjoer varen populaer skifter:",
      options: ["E-kurven utover (hoeyere pris, stoerre mengde)", "E-kurven innover", "T-kurven utover", "T-kurven innover"],
      explanation: "Endret preferanse → oekt etterspoersel → E ut → pris og mengde opp.",
    },
    {
      question: "Ved nyetablering av utenlandske tilbydere skjer:",
      options: ["T ut → pris ned; de etablerte selgerne taper", "T inn → pris opp", "E ut → pris opp", "E inn → pris ned"],
      explanation: "Flere anlegg → T ut → lavere pris. De etablerte taper paa den lavere prisen (tredjepart).",
    },
    {
      question: "Ved samme tilbudsbortfall, hvilket marked faar stoerst prisoekning?",
      options: ["Det med brattest (mest uelastisk) etterspoersel", "Det med slakest etterspoersel", "De faar lik prisoekning", "Det med lavest pris"],
      explanation: "Bratt/uelastisk E → kjoeperne henger med → prisen maa stige mye → stor priseffekt.",
    },
    {
      question: "Hva er kjennetegnet paa et rent tilbudsskift i pris og mengde?",
      options: ["Pris og mengde beveger seg motsatt vei", "Pris og mengde beveger seg samme vei", "Bare prisen endres", "Bare mengden endres"],
      explanation: "T ut: pris ned, mengde opp. T inn: pris opp, mengde ned. Motsatt vei.",
    },
    {
      question: "Ved to samtidige innskift (E inn + T inn), hva er sikkert?",
      options: ["Mengden faller; prisretningen er ubestemt", "Prisen stiger; mengden ubestemt", "Begge stiger", "Ingenting er bestemt"],
      explanation: "Begge krymper markedet (mengde ned), men drar prisen hver sin vei (ubestemt).",
    },
    {
      question: "I $x = 800 - 2p$, $x = 4p - 400$, hva er likevekten?",
      options: ["$p = 200$, $x = 400$", "$p = 100$, $x = 600$", "$p = 200$, $x = 200$", "$p = 150$, $x = 500$"],
      explanation: "$800 - 2p = 4p - 400 \\Rightarrow 1200 = 6p \\Rightarrow p = 200$, $x = 800 - 400 = 400$.",
    },
    {
      question: "For $x = 800 - 2p$ i likevekt $(200, 400)$, hva er $\\varepsilon$?",
      options: ["$-1$ (enhetselastisk)", "$-2$", "$-0{,}5$", "$+1$"],
      explanation: "$\\varepsilon = -2\\cdot\\frac{200}{400} = -1$ — enhetselastisk.",
    },
    {
      question: "Hva er en figur uten forklaring paa eksamen?",
      options: ["Halvt svar — sensor krever figur OG mekanisme i ord", "Fullt svar", "Bedre enn forklaring alene", "Ikke tillatt"],
      explanation: "Figur uten forklaring eller forklaring uten figur er halvt svar; de er én leveranse.",
    },
  ],
  'econ1210-2-1': [
    {
      question: "Hva er samfunnsøkonomisk overskudd (SO) for en gitt mengde?",
      options: ["Samlet betalingsvillighet minus samlede kostnader — arealet mellom E- og T-kurven fram til mengden", "Selgernes samlede inntekt $p^*\\cdot x^*$", "Arealet under prislinja ned til mengdeaksen", "Det samme som konsumentoverskuddet"],
      explanation: "SO er verdien markedet skaper: for hver enhet betalingsvillighet (E) minus kostnad (T), summert. Inntekt inkluderer kostnadene og er derfor ikke SO.",
    },
    {
      question: "Hvorfor kan SO beregnes uten å kjenne prisen?",
      options: ["Fordi definisjonen bare bruker betalingsvillighet (E-høyden) og kostnad (T-høyden)", "Fordi prisen alltid er null i disse markedene", "Fordi KO og PO alltid er like store", "Fordi SO bare gjelder i likevekt"],
      explanation: "SO er arealet mellom kurvene; prisen deler bare kaka mellom kjøper og selger, den skaper den ikke. Dette er sensors faste plusspoeng-markør.",
    },
    {
      question: "Hva er konsumentoverskudd (KO)?",
      options: ["Samlet betalingsvillighet minus det kjøperne faktisk betaler — arealet mellom E-kurven og prislinja", "Arealet mellom prislinja og T-kurven", "Hele kjøpernes betaling $p^*\\cdot x^*$", "Alltid større enn produsentoverskuddet"],
      explanation: "KO er summen av differansene mellom hver kjøpers betalingsvillighet og prisen — feltet mellom E-kurven og prislinja.",
    },
    {
      question: "Hva er produsentoverskudd (PO)?",
      options: ["Selgernes inntekt minus samlede alternativkostnader — arealet mellom prislinja og T-kurven", "Hele selgernes inntekt $p^*\\cdot x^*$", "Arealet under T-kurven ned til mengdeaksen", "Alltid lik konsumentoverskuddet"],
      explanation: "PO måles mot T-kurvens høyde (alternativkostnaden), ikke mot null. Å regne hele inntekten som overskudd glemmer produksjonskostnadene.",
    },
    {
      question: "Produsentoverskuddet måles mot hvilken målestokk?",
      options: ["T-kurvens høyde (alternativkostnaden av siste enhet)", "Mengdeaksen (null)", "E-kurvens høyde (betalingsvilligheten)", "Den høyeste betalingsvilligheten"],
      explanation: "PO er inntekt utover alternativkostnaden. Måler man ned til mengdeaksen, får man inntekten, ikke overskuddet.",
    },
    {
      question: "Hva forteller høyden på E-kurven ved en gitt mengde?",
      options: ["Marginal betalingsvillighet — hva den siste kjøperen er villig til å betale", "Marginalkostnaden ved å produsere enheten", "Markedsprisen", "Produsentoverskuddet for enheten"],
      explanation: "E-kurvens høyde er betalingsvillighet; T-kurvens høyde er kostnad. Å blande dem er en klassisk feil i velferdsgeometrien.",
    },
    {
      question: "Hva forteller høyden på T-kurven ved en gitt mengde?",
      options: ["Marginalkostnaden — kostnaden ved å produsere den siste enheten", "Den siste kjøperens betalingsvillighet", "Konsumentoverskuddet", "Markedsprisen uansett mengde"],
      explanation: "T-kurvens høyde er enhetskostnaden i det dyreste anlegget i drift = alternativkostnaden av siste enhet.",
    },
    {
      question: "I et frikonkurransemarked uten inngrep gjelder hvilken sammenheng?",
      options: ["$SO = KO + PO$", "$SO = KO + PO + \\text{skatteinntekt}$ alltid", "$SO = KO - PO$", "$SO = p^*\\cdot x^*$"],
      explanation: "Prislinja deler SO-trekanten i KO (over) og PO (under). Skatteinntekt legges bare til når det faktisk er en skatt.",
    },
    {
      question: "Hvorfor er SO størst nettopp i likevekten (der E krysser T)?",
      options: ["Fordi det verken er uutnyttet verdi (E over T) eller ødelagt verdi (T over E) igjen", "Fordi prisen da er lavest mulig", "Fordi KO og PO da alltid er like", "Fordi produsentene da tjener mest"],
      explanation: "Til venstre for krysset lønner en enhet til seg; til høyre ødelegger den verdi. Bare i krysset er SO-trekanten maksimal.",
    },
    {
      question: "Med lineær E-kurve regnes konsumentoverskuddet som:",
      options: ["$\\tfrac{1}{2}\\cdot x^*\\cdot(p_{\\max}-p^*)$", "$\\tfrac{1}{2}\\cdot x^*\\cdot(p^*-p_{T0})$", "$p^*\\cdot x^*$", "$\\tfrac{1}{2}\\cdot p^*\\cdot x^*$ uansett"],
      explanation: "KO er trekanten mellom E-kurven og prislinja; grunnlinjen er avstanden fra høyeste betalingsvillighet ned til prisen.",
    },
    {
      question: "Med lineær T-kurve regnes produsentoverskuddet som:",
      options: ["$\\tfrac{1}{2}\\cdot x^*\\cdot(p^*-p_{T0})$", "$\\tfrac{1}{2}\\cdot x^*\\cdot(p_{\\max}-p^*)$", "$p^*\\cdot x^*$", "$\\tfrac{1}{2}\\cdot x^*\\cdot p_{\\max}$"],
      explanation: "PO er trekanten mellom prislinja og T-kurven; $p_{T0}$ er T-kurvens startpris (0 hvis den går gjennom origo).",
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
      options: ["Fordi E- og T-kurven er like bratte, så prisen ligger midt mellom høyeste betalingsvillighet og laveste kostnad", "Fordi prisen alltid deler kaka likt", "Fordi SO da er null", "Fordi tilbudet er uendelig elastisk"],
      explanation: "Like bratte kurver gir speilsymmetriske trekanter. Med ulik helning blir den bratteste sidens overskudd størst.",
    },
    {
      question: "En kommentator sier «produsentoverskuddet er hele selgernes inntekt». Hva er feil?",
      options: ["PO er bare inntekt minus alternativkostnad — arealet over T-kurven, ikke helt ned til mengdeaksen", "Ingenting, PO er nettopp hele inntekten", "PO er alltid null i frikonkurranse", "PO måles mot E-kurven, ikke T-kurven"],
      explanation: "Inntekten er $p^*x^*$; PO er bare delen over T-kurven. Resten er produksjonskostnadene.",
    },
    {
      question: "Hva er den viktigste plusspoeng-markøren sensor honorerer i velferdsdeloppgaven?",
      options: ["At SO kan beregnes for enhver mengde uten å kjenne prisen", "At man tegner figuren med farger", "At man alltid regner KO før PO", "At man oppgir prisen med to desimaler"],
      explanation: "SO uten pris viser at man har forstått at overskuddet er verdiskaping (E minus T), ikke noe som avhenger av prisdannelsen.",
    },
    {
      question: "SO opp til en mengde som IKKE er likevekten regnes som:",
      options: ["Et trapes mellom E- og T-kurven (fordi kurvene ikke møtes ved den mengden)", "En trekant med spiss i likevekten", "Et rektangel $p^*\\cdot x$", "Halve inntekten"],
      explanation: "Når arealet stopper før krysset, er begge kurvehøyder positive ved endepunktet, så figuren er et trapes, ikke en trekant.",
    },
    {
      question: "I anleggsmodellen er produsentoverskuddet:",
      options: ["Summen over alle anlegg i drift av (markedspris − anleggets enhetskostnad)", "Summen av alle anleggenes enhetskostnader", "Prisen ganget med antall anlegg", "Alltid lik konsumentoverskuddet"],
      explanation: "De billigste anleggene bidrar mest til PO; det marginale anlegget har enhetskostnad lik prisen og bidrar med null.",
    },
    {
      question: "Hva er $p_{\\max}$ (høyeste betalingsvillighet) i figuren?",
      options: ["Prisen der E-kurven treffer prisaksen (mengde null)", "Prisen der T-kurven treffer prisaksen", "Likevektsprisen", "Den laveste enhetskostnaden"],
      explanation: "$p_{\\max}$ er toppen av KO-trekanten: ingen kjøper varen over denne prisen.",
    },
    {
      question: "Prislinja i markedsdiagrammet bestemmer:",
      options: ["Fordelingen av SO mellom KO og PO — ikke den samlede størrelsen på SO", "Størrelsen på SO", "Om markedet er effektivt", "Hvor mange anlegg som finnes"],
      explanation: "Prisen deler SO-trekanten i to; den skaper ikke verdien. Derfor kan SO regnes uten pris.",
    },
    {
      question: "Verdien en enhet skaper for samfunnet er:",
      options: ["Betalingsvillighet minus kostnad (avstanden mellom E og T)", "Prisen kjøperen betaler", "Selgerens inntekt for enheten", "Alltid lik prisen"],
      explanation: "Prisen er en overføring mellom kjøper og selger; den verdiskapende differansen (E minus T) er det som havner i SO.",
    },
    {
      question: "Hva sier velferdsanalysen (SO, KO, PO) IKKE noe om?",
      options: ["Om fordelingen mellom kjøpere er rettferdig", "Hvor stor den samlede verdien er", "Hvordan gevinsten deles mellom kjøpere og selgere", "Hvor SO er størst"],
      explanation: "SO/KO/PO er effektivitetsmål — de måler kakas størrelse og fordelingen kjøper/selger, ikke rettferdighet i delingen.",
    },
    {
      question: "I markedet $x=240-2p$, $x=2p-40$ er likevekten $(70,100)$. Hva er PO? ($p_{T0}=20$.)",
      options: ["2 500", "5 000", "1 500", "3 500"],
      explanation: "$PO=\\tfrac12\\cdot100\\cdot(70-20)=\\tfrac12\\cdot100\\cdot50=2\\,500$.",
    },
    {
      question: "Hvorfor kalles en feil definisjon av SO som «KO + PO i likevekt» en felle?",
      options: ["Fordi den bryter sammen så snart det kommer en skatt eller subsidie (da må statens inntekt/utlegg med)", "Fordi KO og PO aldri kan legges sammen", "Fordi SO alltid er null i likevekt", "Fordi likevekt ikke finnes i praksis"],
      explanation: "Den robuste definisjonen (betalingsvillighet minus kostnad = areal mellom E og T) holder alltid; «KO+PO» gjelder bare uten inngrep (feilkatalogens feil #9).",
    },
    {
      question: "Effektivitetstap (dødvektstap) er generelt:",
      options: ["Tapt SO når omsatt mengde avviker fra den effektive: trekanten mellom E og T over mengdeavviket", "Selgernes tapte inntekt", "Statens tapte skatteinntekt", "Forskjellen mellom KO og PO"],
      explanation: "Dødvekttap er verdi som forsvinner helt (ikke tilfaller kjøper, selger eller stat) fordi mengden er feil.",
    },
  ],
  'econ1210-2-2': [
    {
      question: "Effektivitetskriterium 1 («riktig mengde») sier at:",
      options: ["Marginal betalingsvillighet = marginalkostnad (E-høyden = T-høyden)", "Alle kjøpere skal få varen", "Prisen skal være lavest mulig", "Produsentene skal tjene mest mulig"],
      explanation: "Den siste enheten skal være verdt akkurat det den koster — oppfylt der E krysser T.",
    },
    {
      question: "Effektivitetskriterium 2 sier at:",
      options: ["Produksjonen skjer i de billigste anleggene (alle med enhetskostnad under prisen er i drift)", "Alle anlegg skal produsere like mye", "De dyreste anleggene skal produsere først", "Alle anlegg skal ha samme enhetskostnad"],
      explanation: "Mengden skal lages så billig som mulig; dyre anlegg står stille mens billige kjører.",
    },
    {
      question: "Effektivitetskriterium 3 sier at:",
      options: ["Godene går til kjøperne med høyest betalingsvillighet", "Godene fordeles likt på alle", "Godene går til dem som kom først", "Godene går til produsentene"],
      explanation: "Alle med betalingsvillighet over prisen kjøper, så varen havner der den verdsettes mest.",
    },
    {
      question: "Hva er effektivitetstap (dødvektstap)?",
      options: ["Tapt SO når omsatt mengde avviker fra $x^*$ — trekanten mellom E og T over mengdeavviket", "Selgernes reduserte inntekt", "Differansen mellom KO og PO", "Statens administrasjonskostnader"],
      explanation: "«Dødvekt» fordi verdien forsvinner helt — den tilfaller verken kjøper, selger eller stat.",
    },
    {
      question: "Ved *for lite* omsatt (mengde under $x^*$) ligger dødvekttrekanten:",
      options: ["Til venstre for $x^*$ — de bortfalte enhetene hadde betalingsvillighet over kostnad", "Til høyre for $x^*$", "Over prislinja", "Under mengdeaksen"],
      explanation: "For lite omsatt: E over T for de manglende enhetene, verdi realiseres ikke. Trekanten ligger mellom faktisk mengde og $x^*$.",
    },
    {
      question: "Ved *for mye* omsatt (mengde over $x^*$) oppstår tap fordi:",
      options: ["Kostnaden overstiger betalingsvilligheten for de ekstra enhetene", "Betalingsvilligheten overstiger kostnaden", "Prisen blir for lav", "KO blir negativt"],
      explanation: "For mye omsatt: T over E, verdi ødelegges. Dødvekttrekanten ligger til høyre for $x^*$ (som ved subsidie).",
    },
    {
      question: "Ved en bindende maksimalpris bestemmes omsatt mengde av:",
      options: ["Den korte siden av markedet (kortside-regelen)", "Etterspurt mengde ved maksprisen", "Gjennomsnittet av tilbud og etterspørsel", "Likevektsmengden"],
      explanation: "Ingen kan tvinges til å selge, så omsatt mengde = det minste av tilbudt og etterspurt mengde. Å lese av E-kurven her er en klassisk feil (#7).",
    },
    {
      question: "I markedet $x=300-p$, $x=2p$ settes makspris 80. Selgerne tilbyr $x=160$. Effektivitetstapet er:",
      options: ["1 200", "2 400", "600", "1 600"],
      explanation: "Gap ved $x=160$: E-høyde $300-160=140$ minus T-høyde $80$ = $60$; bredde $200-160=40$; $\\tfrac12\\cdot60\\cdot40=1\\,200$.",
    },
    {
      question: "Hvorfor er frikonkurranselikevekten IKKE nødvendigvis «rettferdig»?",
      options: ["Fordi effektivitet handler om kakas størrelse, ikke om hvordan den deles", "Fordi den alltid gir monopol", "Fordi prisen alltid er for høy", "Fordi SO da er null"],
      explanation: "Et effektivt marked kan ha en fordeling mange vil kalle urettferdig — varen går til dem med høyest betalingsvillighet, ofte de med mest penger.",
    },
    {
      question: "Et *tilleggstap* ut over dødvekttrekanten ved makspris oppstår hvis:",
      options: ["Rasjoneringen ikke følger betalingsvillighet (kø, loddtrekning, svartebørs)", "Prisen er for høy", "Tilbudet er elastisk", "Markedet er i likevekt"],
      explanation: "Da havner varen hos noen som verdsetter den lavere enn utestengte kjøpere — kriterium 3 brytes ekstra.",
    },
    {
      question: "Grunnlinjen i dødvekttrekanten måles som:",
      options: ["Avstanden mellom E-kurven og T-kurven ved den feilaktige mengden", "Avstanden fra prislinja til mengdeaksen", "Avstanden mellom E-kurven og prislinja", "Hele likevektsprisen"],
      explanation: "Dødvekttap = $\\tfrac12\\cdot(\\text{gap E–T})\\cdot(\\text{mengdeavvik})$. Å regne mot prislinja i stedet for mellom kurvene er en vanlig feil.",
    },
    {
      question: "Hva menes med at de tre kriteriene er en «sjekkliste»?",
      options: ["Ved et inngrep går man gjennom alle tre og sier hvilke som brytes", "Man rangerer dem etter viktighet", "Man velger ett av dem å bruke", "De brukes bare i lærebøker, aldri på eksamen"],
      explanation: "Sensor honorerer at kriteriene anvendes på inngrepet, ikke bare ramses opp.",
    },
    {
      question: "I markedet $x=360-2p$, $x=2p-40$ ($x^*=160$) omsettes bare 120. Effektivitetstapet er:",
      options: ["800", "1 600", "400", "1 200"],
      explanation: "E-høyde ved 120: $180-60=120$; T-høyde: $60+20=80$; gap $40$; bredde $160-120=40$; $\\tfrac12\\cdot40\\cdot40=800$.",
    },
    {
      question: "Hva er den effektive (samfunnsøkonomisk optimale) mengden?",
      options: ["Mengden der marginal betalingsvillighet = marginalkostnad (E krysser T)", "Mengden der prisen er lavest", "Mengden der PO er størst", "Mengden der alle anlegg produserer"],
      explanation: "Enhver annen mengde gir mindre SO og dermed et effektivitetstap.",
    },
    {
      question: "Ved et bindende pristak brytes typisk hvilke effektivitetskriterier?",
      options: ["Både «riktig mengde» og (via rasjonering) «riktige kjøpere»", "Bare «billigste anlegg»", "Ingen av kriteriene", "Bare «riktige kjøpere»"],
      explanation: "Maksprisen gir for lite omsatt (kriterium 1) og etterspørselsoverskudd som må rasjoneres (kriterium 3).",
    },
  ],
  'econ1210-3-1': [
    {
      question: "En stykkskatt på $t$ kroner per enhet legges på selgerne. Hvilken kurve skifter, og hvor mye?",
      options: ["T-kurven opp med nøyaktig $t$", "E-kurven ned med nøyaktig $t$", "T-kurven ned med nøyaktig $t$", "E-kurven opp med nøyaktig $t$"],
      explanation: "Skatt på selger øker enhetskostnaden med $t$ i hvert anlegg, så T-kurven flytter seg parallelt opp med akkurat $t$.",
    },
    {
      question: "For $x = a - bp$ og $x = cp - d$: hva er kjøpernes andel av en stykkskatt?",
      options: ["$\\frac{c}{b+c}$", "$\\frac{b}{b+c}$", "$\\frac{b+c}{c}$", "$\\frac{1}{2}$ alltid"],
      explanation: "Delingsformelen gir kjøpers andel $\\frac{c}{b+c}$ og selgers andel $\\frac{b}{b+c}$; de summerer til 1.",
    },
    {
      question: "Hvem bærer mest av en avgift?",
      options: ["Den minst prisfølsomme (bratteste) siden", "Den mest prisfølsomme siden", "Alltid selgeren", "Alltid den avgiften formelt legges på"],
      explanation: "Den siden som vanskeligst kan trekke seg ut når prisen endres (bratt kurve), sitter igjen med størstedelen av byrden.",
    },
    {
      question: "Spiller det noen rolle for fordelingen om avgiften legges på kjøper eller selger?",
      options: ["Nei — utfallet blir identisk (skatteekvivalens)", "Ja, kjøper bærer mer hvis den legges på kjøper", "Ja, selger bærer mer hvis den legges på selger", "Ja, den formelle betaleren bærer alt"],
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
      options: ["$p_1 - t$ (markedsprisen minus avgiften)", "$p_1 + t$", "$p_0$ (uendret)", "$p_1$ (markedsprisen)"],
      explanation: "Selger må gi $t$ til staten per enhet, så nettoprisen er markedsprisen $p_1$ minus $t$ — lavere enn den gamle likevektsprisen.",
    },
    {
      question: "Dødvektstapet ved en stykkskatt beregnes som:",
      options: ["$\\frac{1}{2}t(x_0 - x_1)$", "$t \\cdot x_1$", "$\\frac{1}{2}t \\cdot x_1$", "$t(x_0 - x_1)$"],
      explanation: "Trekanten mellom E og T fra ny til gammel mengde har areal $\\frac{1}{2}t(x_0 - x_1)$. $t\\cdot x_1$ er derimot skatteinntekten.",
    },
    {
      question: "Skatteinntekten $t \\cdot x_1$ er:",
      options: ["En overføring til staten, ikke et samfunnsøkonomisk tap", "En del av dødvektstapet", "Alltid lik dødvektstapet", "Tapt verdi for samfunnet"],
      explanation: "Pengene forsvinner ikke — de går fra kjøpere/selgere til staten. Bare dødvektstrekanten er ekte tapt verdi.",
    },
    {
      question: "Hvorfor faller omsatt mengde alltid etter en avgift?",
      options: ["Avgiften gjør de siste enhetene ulønnsomme (betalingsvillighet < kostnad + avgift)", "Kjøperne mister interessen", "Selgerne nekter å produsere", "Prisen blir uendelig høy"],
      explanation: "Avgiften kiler inn mellom kjøpers pris og selgers netto; de siste enhetene der betalingsvilligheten ikke lenger dekker kostnad + avgift, faller bort.",
    },
    {
      question: "Hva er mekanismen bak T-skiftet ved en stykkskatt (anleggsspråket)?",
      options: ["Enhetskostnaden øker med $t$ i hvert anlegg", "Antall anlegg faller", "Etterspørselen synker", "Kjøpernes betalingsvillighet stiger"],
      explanation: "Hvert anlegg må ha $t$ kroner mer for å være lønnsomt, så hele T-kurven flytter parallelt opp med $t$. Denne begrunnelsen er verdt et poeng.",
    },
    {
      question: "En helt horisontal (uendelig prisfølsom) T-kurve betyr at:",
      options: ["Kjøperne bærer hele avgiften", "Selgerne bærer hele avgiften", "Byrden deles 50/50", "Ingen bærer avgiften"],
      explanation: "Med $c \\to \\infty$ går kjøpers andel $\\frac{c}{b+c} \\to 1$: en fullstendig prisfølsom tilbudsside skyver hele byrden over på kjøperne.",
    },
    {
      question: "En vanlig feil (#2) i stykkskatt-oppgaver er:",
      options: ["Å flytte E-kurven i stedet for T-kurven ved skatt på selger", "Å regne dødvektstap som en trekant", "Å tolke delingsbrøken verbalt", "Å kontrollregne i begge funksjoner"],
      explanation: "Skatt på selger berører selgers kostnad = T-kurven. Å skifte E i stedet, eller skifte feil vei, er feilkatalog #2.",
    },
    {
      question: "I markedet $x = 500 - p$, $x = p - 100$ ($b = c = 1$) deles en avgift:",
      options: ["50/50 mellom kjøper og selger", "Kjøper bærer alt", "Selger bærer alt", "2/3 på kjøper"],
      explanation: "Like koeffisienter ($b = c$) gir $\\frac{c}{b+c} = \\frac{1}{2}$ på hver side — nøyaktig lik deling.",
    },
    {
      question: "Hva regnes som en pluss-markør (toppsjikt) i en stykkskatt-oppgave?",
      options: ["Å koble delingsbrøken til kurvenes helninger", "Å oppgi delingstallet uten forklaring", "Å tegne skiftet uten å merke akser", "Å regne bare i én funksjon"],
      explanation: "Å regne delingen algebraisk OG forklare den med prisfølsomhet/helning er det som skiller de beste besvarelsene.",
    },
    {
      question: "En stykkskatt er:",
      options: ["Et fast kronebeløp per enhet", "En prosentandel av prisen", "En skatt på selgers overskudd", "En engangsavgift ved etablering"],
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
      options: ["Nettoprisen $p_1 - t$ er lavere enn den gamle prisen $p_0$", "Selger må betale hele avgiften selv", "Markedsprisen faller", "Selger mister alle kunder"],
      explanation: "Selv om markedsprisen stiger, får selger bare $p_1 - t$, som er lavere enn $p_0$. Byrden deles med kjøper.",
    },
    {
      question: "Å oppgi delingstallet $\\frac{c}{b+c}$ uten verbal tolkning er:",
      options: ["Feilkatalog #6 — gir ikke full uttelling", "Helt greit på eksamen", "En pluss-markør", "Bare relevant for subsidier"],
      explanation: "Sensor krever at tall tolkes med ord. Et bart tall uten forklaring av hvorfor siden bærer den andelen, gir trekk (#6).",
    },
    {
      question: "Dersom du legger skatten på kjøper i stedet for selger, skifter:",
      options: ["E-kurven ned med $t$", "T-kurven opp med $t$", "E-kurven opp med $t$", "Ingen kurve"],
      explanation: "Kjøper er villig til å betale $t$ mindre til selger (siden de også må ut med $t$ til staten), så E-kurven flytter ned med $t$ — samme sluttresultat.",
    },
    {
      question: "Hva bør du kontrollere for å fange regnefeil i firetrinnsmetoden?",
      options: ["At $x_1$ gir samme svar i E og i selgers tilbud, og at byrdene summerer til $t$", "Bare at prisen steg", "At skatteinntekten er størst mulig", "At dødvektstapet er null"],
      explanation: "To kontroller: $x_1$ likt i begge funksjoner, og kjøpers + selgers byrde $= t$. Dessuten skal $x_1 < x_0$.",
    },
    {
      question: "I hvilken andel av eksamenssettene forekommer stykkskatt/-subsidie (sjanger E)?",
      options: ["94 % (15 av 16 sett)", "50 %", "25 %", "100 %"],
      explanation: "Sjanger E er tyngdepunktet i settet, med i 15 av 16 sett og verdt 15–30 % av poengene.",
    },
    {
      question: "Fallet i KO pluss fallet i PO ved en avgift er lik:",
      options: ["Skatteinntekt pluss dødvektstap", "Bare skatteinntekten", "Bare dødvektstapet", "Null"],
      explanation: "Velferdsregnskapet: kjøpere og selgere taper til sammen skatteinntekten (som staten får) pluss dødvektstrekanten (som ingen får).",
    },
    {
      question: "Hvorfor er nettoprisen viktig å skille fra markedsprisen?",
      options: ["Markedsprisen er det kjøper betaler; nettoprisen er det selger beholder — de skiller seg med $t$", "De er alltid like", "Nettoprisen er høyere enn markedsprisen", "Bare markedsprisen påvirker mengden"],
      explanation: "Markedsprisen $p_1$ (kjøpers pris, på skiftet T) og nettoprisen $p_1 - t$ (selgers pris, på gamle T) skiller seg med akkurat $t$, fordelt etter delingen.",
    },
  ],
  'econ1210-3-2': [
    {
      question: "En stykksubsidie $s$ til selgerne får T-kurven til å:",
      options: ["Skifte ned med nøyaktig $s$", "Skifte opp med nøyaktig $s$", "Bli brattere", "Stå stille"],
      explanation: "Subsidien senker enhetskostnaden med $s$ i hvert anlegg, så T-kurven flytter parallelt ned med akkurat $s$.",
    },
    {
      question: "Hvorfor faller samfunnsøkonomisk overskudd av en subsidie i et velfungerende marked?",
      options: ["Statens utlegg overstiger summen av KO- og PO-gevinsten", "KO faller", "PO faller", "Prisen stiger"],
      explanation: "Subsidie-paradokset: både KO og PO stiger, men statens utlegg $s\\cdot x_1$ er større, så SO faller netto.",
    },
    {
      question: "Å påstå at subsidien øker SO fordi både KO og PO øker, er:",
      options: ["Feilkatalog #4 — selve karakterskillet", "Riktig", "En pluss-markør", "Bare feil for skatt"],
      explanation: "Dette er den klassiske fellen (#4). SO faller nettopp fordi statens utlegg overstiger de private gevinstene.",
    },
    {
      question: "Ved en subsidie ligger dødvektstrekanten:",
      options: ["Til høyre for frikonkurransemengden $x_0$", "Til venstre for $x_0$", "Nøyaktig på $x_0$", "Over prisaksen"],
      explanation: "Subsidien gir overproduksjon, så trekanten ligger til høyre for $x_0$ — motsatt side av skattetrekanten.",
    },
    {
      question: "Selgers nettopris ved en subsidie $s$ er:",
      options: ["$p_1 + s$ (markedsprisen pluss tilskuddet)", "$p_1 - s$", "$p_0$", "$p_1$"],
      explanation: "Selger får markedsprisen $p_1$ fra kjøper PLUSS subsidien $s$ fra staten, altså $p_1 + s$ — høyere enn før.",
    },
    {
      question: "Hva er statens utlegg ved en subsidie?",
      options: ["$s \\cdot x_1$", "$s \\cdot x_0$", "$\\frac{1}{2}s x_1$", "$s$"],
      explanation: "Staten betaler $s$ per enhet på hele den nye mengden $x_1$, altså $s\\cdot x_1$.",
    },
    {
      question: "For merenhetene mellom $x_0$ og $x_1$ ved en subsidie gjelder at:",
      options: ["Betalingsvilligheten er lavere enn produksjonskostnaden", "Betalingsvilligheten er høyere enn kostnaden", "Betalingsvillighet = kostnad", "Kostnaden er null"],
      explanation: "Overproduksjonen betyr at E-kurvens høyde er under T-kurvens for merenhetene — de ødelegger verdi. Det er kjernen i paradokset.",
    },
    {
      question: "I markedet $x = 900 - 3p$, $x = p - 100$ med $s = 40$: hvor stor del får kjøperne?",
      options: ["$\\frac{1}{4}$", "$\\frac{3}{4}$", "$\\frac{1}{2}$", "hele"],
      explanation: "$b = 3$, $c = 1$: kjøpers andel $= \\frac{c}{b+c} = \\frac{1}{4}$. Selgerne får $\\frac{3}{4}$ fordi tilbudet er minst prisfølsomt.",
    },
    {
      question: "Å regne velferden som bare KO + PO uten statens utlegg er:",
      options: ["Feilkatalog #11 (glemt statsutlegg)", "Riktig fremgangsmåte", "Bare feil ved skatt", "En pluss-markør"],
      explanation: "Uten utlegget $s\\cdot x_1$ i regnskapet forsvinner hele paradokset — det er feil #11.",
    },
    {
      question: "Ved en subsidie i et velfungerende marked skjer det med mengden at den:",
      options: ["Blir høyere enn den effektive ($x_1 > x_0$)", "Blir lavere enn den effektive", "Er uendret", "Blir null"],
      explanation: "Subsidien presser mengden opp forbi den samfunnsøkonomisk riktige $x_0$ — overproduksjon.",
    },
    {
      question: "Når kan en subsidie likevel være samfunnsøkonomisk riktig?",
      options: ["Ved positive eksterne virkninger", "Aldri", "Alltid", "Bare når prisen er høy"],
      explanation: "Ved positive eksternaliteter produserer markedet for lite, og en subsidie kan flytte mengden mot det riktige nivået (kap. 4.1).",
    },
    {
      question: "En stykksubsidie kan best beskrives som:",
      options: ["En negativ skatt (speilvendt firetrinnsmetode)", "En prisregulering", "Et kvotesystem", "En engangsstøtte"],
      explanation: "Alt fra skattekapitlet gjelder speilvendt: T ned, pris ned, mengde opp, trekant til høyre.",
    },
    {
      question: "Hvorfor stiger KO ved en subsidie?",
      options: ["Kjøperne betaler lavere pris og kjøper mer", "Kjøperne betaler mer", "Prisen stiger", "Mengden faller"],
      explanation: "Lavere markedspris og høyere mengde løfter konsumentoverskuddet — men det er ikke nok til å oppveie statens utlegg.",
    },
    {
      question: "Dødvektstapet ved en subsidie beregnes som:",
      options: ["$\\frac{1}{2}s(x_1 - x_0)$", "$s \\cdot x_1$", "$\\frac{1}{2}s(x_0 - x_1)$", "$s(x_1 - x_0)$"],
      explanation: "Trekanten til høyre for $x_0$ har areal $\\frac{1}{2}s(x_1 - x_0)$, siden $x_1 > x_0$ ved subsidie.",
    },
    {
      question: "Spiller det noen rolle om subsidien gis til kjøper eller selger?",
      options: ["Nei — samme utfall (ekvivalens)", "Ja, kjøper får mer hvis den gis til kjøper", "Ja, selger får mer hvis den gis til selger", "Ja, mottakeren får alt"],
      explanation: "Som for skatt bestemmer helningene fordelingen, ikke hvem tilskuddet formelt gis til.",
    },
    {
      question: "Effektivitetsvilkåret som en subsidie bryter er:",
      options: ["$p = $ marginalkostnad (betalingsvillighet = kostnad for siste enhet)", "$p = $ gjennomsnittskostnad", "$p = 0$", "KO = PO"],
      explanation: "SO er størst der E krysser T (betalingsvillighet = marginalkostnad). Subsidien presser mengden dit betalingsvillighet < kostnad.",
    },
    {
      question: "Hva bør en samfunnsøkonom påpeke om en subsidie med fordelingsformål?",
      options: ["Fordelingsgevinsten må veies mot effektivitetstapet; kontantstøtte er ofte billigere", "At den alltid er bra", "At SO alltid øker", "At den ikke koster noe"],
      explanation: "Subsidien har et effektivitetstap; direkte kontantstøtte oppnår ofte fordelingsmålet uten å vri prisene.",
    },
    {
      question: "Ny markedspris etter en subsidie på selger er:",
      options: ["$p_1 = p_0 - \\frac{c}{b+c}s$", "$p_1 = p_0 + \\frac{c}{b+c}s$", "$p_1 = p_0 - s$", "$p_1 = p_0$"],
      explanation: "Prisen faller med kjøpers andel av subsidien, $\\frac{c}{b+c}s$ — ikke med hele $s$, siden selger også får en del som høyere nettopris.",
    },
    {
      question: "Sensor kaller subsidie-paradokset «krevende å forstå» fordi:",
      options: ["Det virker selvmotsigende at SO faller når begge parter tjener", "Regningen er vanskelig", "Figuren er umulig å tegne", "Det står ikke i pensum"],
      explanation: "Intuisjonen «alle vinner» kolliderer med at SO faller — nøkkelen er å se statens utlegg og overproduksjonen.",
    },
    {
      question: "Hvilket ledd i velferdsregnskapet gjør at $\\Delta$SO blir negativ?",
      options: ["Statens utlegg $s\\cdot x_1$", "Fallet i KO", "Fallet i PO", "Skatteinntekten"],
      explanation: "$\\Delta\\text{SO} = \\Delta\\text{KO} + \\Delta\\text{PO} - s\\cdot x_1$; utlegget (siste ledd) er størst og trekker SO ned.",
    },
    {
      question: "Ved subsidie skifter T-kurven ned. Hva er mekanismen?",
      options: ["Enhetskostnaden faller med $s$ i hvert anlegg", "Etterspørselen øker", "Antall anlegg faller", "Prisen settes av staten"],
      explanation: "Hvert anlegg trenger $s$ kroner mindre i pris for å være lønnsomt, så hele T-kurven flytter ned med $s$.",
    },
    {
      question: "Kjøperne får en liten del av subsidien når:",
      options: ["Etterspørselen er mer prisfølsom enn tilbudet ($b > c$)", "Tilbudet er mer prisfølsomt enn etterspørselen", "Kurvene er like bratte", "$s$ er liten"],
      explanation: "Kjøpers andel $\\frac{c}{b+c}$ er liten når $c$ er liten mot $b$: prisfølsomme kjøpere, lite prisfølsomme selgere fanger mesteparten.",
    },
    {
      question: "En vanlig feil er å tegne subsidiens dødvektstrekant:",
      options: ["Til venstre for $x_0$ (som ved skatt)", "Til høyre for $x_0$", "Uten akser", "For stor"],
      explanation: "Ved subsidie ligger trekanten til HØYRE (overproduksjon). Å tegne den til venstre er å behandle den som en skatt.",
    },
    {
      question: "Hva er statens utlegg dersom $s = 40$ og $x_1 = 380$?",
      options: ["15 200", "12 000", "760", "40"],
      explanation: "$s \\cdot x_1 = 40 \\cdot 380 = 15\\,200$ kroner — statens totale subsidiekostnad.",
    },
    {
      question: "Hvorfor er subsidie-paradokset og «som samfunnsøkonom»-drøftingen ulike?",
      options: ["Paradokset gjelder overproduksjon i ett marked; alternativkostnad gjelder ressursenes beste anvendelse ellers", "De er identiske", "Paradokset gjelder bare skatt", "Alternativkostnad gjelder bare monopol"],
      explanation: "Beslektet, men ulikt: paradokset er velferdsregnskapet i markedet; alternativkostnadsdrøftingen (kap. 3.5) ser på hva ressursene kunne skapt andre steder.",
    },
  ],
  'econ1210-3-3': [
    {
      question: "Ved en bindende maksimalpris bestemmes omsatt mengde av:",
      options: ["Tilbudet (kortsiden)", "Etterspørselen", "Gjennomsnittet av tilbud og etterspørsel", "Maksprisen selv"],
      explanation: "Kortside-regelen: ingen kan tvinges til å selge, så den lavere tilbudte mengden bestemmer omsetningen.",
    },
    {
      question: "En maksimalpris har effekt bare hvis den er satt:",
      options: ["Under likevektsprisen", "Over likevektsprisen", "Nøyaktig på likevektsprisen", "Over marginalkostnaden"],
      explanation: "En makspris over likevekt er ikke bindende og gjør ingenting. Under likevekt skaper den mangel.",
    },
    {
      question: "Ved makspris under likevekt oppstår:",
      options: ["Et etterspørselsoverskudd (mangel)", "Et tilbudsoverskudd", "Ingen ubalanse", "Overproduksjon"],
      explanation: "Den lave prisen gir høy etterspørsel og lavt tilbud, altså mangel som må rasjoneres.",
    },
    {
      question: "Hvorfor må godet rasjoneres ved en makspris?",
      options: ["Fordi etterspørselen overstiger tilbudet — det er ikke nok til alle", "Fordi prisen er for høy", "Fordi selgerne nekter", "Fordi tilbudet overstiger etterspørselen"],
      explanation: "Mangel betyr at flere vil kjøpe enn det finnes; noe må avgjøre hvem som får, og modellen sier ikke hva.",
    },
    {
      question: "Tilleggstapet ved makspris oppstår når:",
      options: ["Rasjoneringen ikke følger betalingsvillighet", "Prisen settes for lavt", "Alle får kjøpe", "Tilbudet øker"],
      explanation: "Hvis de knappe enhetene havner hos feil kjøpere (lav betalingsvillighet), mister vi verdi utover mengdetapet.",
    },
    {
      question: "Argumentet «produsentene har lav gjennomsnittskostnad, så prisen bør tvinges ned» er:",
      options: ["Feil — riktig mengde krever pris = marginalkostnad", "Riktig", "Et effektivitetsargument", "Bare gyldig for minstepris"],
      explanation: "Feilkatalog #7: god fortjeneste er et fordelingspoeng, ikke et effektivitetsargument. Prisen skal reflektere marginalkostnad.",
    },
    {
      question: "En minstelønn over likevektslønnen gir:",
      options: ["Arbeidsledighet (tilbudsoverskudd av arbeid)", "Full sysselsetting", "Mangel på arbeidskraft", "Lavere lønn"],
      explanation: "Flere vil jobbe enn bedriftene ansetter til den høye lønnen; differansen er ledigheten.",
    },
    {
      question: "Ved en bindende minstepris bestemmes omsatt mengde av:",
      options: ["Etterspørselen (kortsiden)", "Tilbudet", "Minsteprisen selv", "Gjennomsnittet"],
      explanation: "Ved prisgulv over likevekt er kjøperne kortsiden — de vil ha minst, og ingen kan tvinges til å kjøpe.",
    },
    {
      question: "I markedet $x = 1400 - 2p$, $x = 2p - 200$ med $p_{\\max} = 300$: hva blir omsatt mengde?",
      options: ["400 (tilbudet)", "800 (etterspørselen)", "600 (likevekt)", "200"],
      explanation: "Ved $p = 300$ er tilbud $= 2\\cdot300-200 = 400$, kortsiden. Etterspørsel er 800, men bare 400 finnes.",
    },
    {
      question: "Å lese omsatt mengde av E-kurven ved en makspris er:",
      options: ["Feilkatalog #7 (glemt kortside-regelen)", "Riktig", "Bare feil ved minstepris", "En pluss-markør"],
      explanation: "Ved makspris er tilbudet kortsiden. Å lese den høyere etterspurte mengden overser at ingen kan tvinges til å selge.",
    },
    {
      question: "Hvilket fordelingsproblem løser modellen IKKE ved makspris?",
      options: ["Hvem av de mange kjøperne som skal få det knappe godet", "Hvor mye som produseres", "Hva prisen blir", "Hvem som er selger"],
      explanation: "Modellen sier at noen må gå tomhendt, men ikke hvem — rasjoneringen ligger utenfor modellen.",
    },
    {
      question: "Et alternativ til pristak som når fordelingsmålet med mindre effektivitetstap er:",
      options: ["Direkte kontantstøtte / overføring", "Enda lavere makspris", "Forbud mot salg", "Høyere avgift"],
      explanation: "Kontantstøtte lar prisen reflektere marginalkostnaden (effektiv mengde og fordeling) mens utsatte kompenseres separat.",
    },
    {
      question: "Standardcasen for prisregulering på nyere ECON1210-eksamener er:",
      options: ["Maksimalpris på strøm/gass", "Minstepris på melk", "Husleieregulering", "Maksimalpris på billetter"],
      explanation: "Alle makspris-casene kom 2022 eller senere, og handler om strøm/gass etter energikrisen.",
    },
    {
      question: "Ved en minstepris over likevekt oppstår:",
      options: ["Et tilbudsoverskudd", "Et etterspørselsoverskudd", "Ingen ubalanse", "Mangel"],
      explanation: "Den høye prisen gir stort tilbud og lav etterspørsel; selgerne vil selge mer enn kjøperne vil ha.",
    },
    {
      question: "Bindende reguleringer bryter typisk hvor mange av de tre effektivitetskriteriene?",
      options: ["Alle tre", "Bare ett", "Ingen", "Bare fordelingskriteriet"],
      explanation: "Feil mengde, mulig feil produksjon og feil fordeling — alle tre kriteriene svikter.",
    },
    {
      question: "I arbeidsmarkedet er bedriftene:",
      options: ["Kjøpere av arbeid (fallende arbeidsetterspørsel i lønn)", "Selgere av arbeid", "Kortsiden ved makspris", "Uten betydning"],
      explanation: "Bedriftene etterspør arbeid; ved minstelønn over likevekt er deres etterspørsel kortsiden som setter sysselsettingen.",
    },
    {
      question: "En følge av bindende makspris kan være:",
      options: ["Svartebørs og kvalitetsfall", "Overproduksjon", "Lavere etterspørsel enn tilbud", "At prisen stiger over likevekt"],
      explanation: "Markedet søker seg tilbake mot likevekten: ulovlig omsetning til høyere pris, eller at selgerne kutter kvalitet.",
    },
    {
      question: "Selv med perfekt rasjonering faller SO ved makspris fordi:",
      options: ["Omsatt mengde er lavere enn den effektive (mengdetap)", "Prisen er for høy", "Alle får kjøpe", "Tilbudet øker"],
      explanation: "Dødvektstrekanten fra omsatt mengde til likevektsmengde er mengdetapet, uavhengig av rasjoneringsmåte.",
    },
    {
      question: "Mangelen ved en makspris beregnes som:",
      options: ["Etterspurt minus tilbudt mengde ved maksprisen", "Tilbudt minus etterspurt mengde", "Likevektsmengde minus tilbudt", "Maksprisen ganger mengden"],
      explanation: "Etterspørselsoverskuddet er $x_D(p_{\\max}) - x_T(p_{\\max})$ — det som mangler for å dekke alle kjøpere.",
    },
    {
      question: "Hva bør et fullstendig svar om prisregulering inneholde i tillegg til effektivitetstapet?",
      options: ["Anerkjennelse av fordelingsmotivet og et mindre vridende alternativ", "Bare regnestykket", "En moralsk fordømmelse", "Kun kortside-mengden"],
      explanation: "Reguleringen har ofte et legitimt fordelingsformål; svaret veier dette mot tapet og peker på f.eks. kontantstøtte.",
    },
  ],
  'econ1210-3-4': [
    {
      question: "Første steg i firetrinnsmetoden er alltid å:",
      options: ["Skifte riktig kurve riktig vei med nøyaktig beløpet", "Beregne dødvektstapet", "Finne delingen", "Regne statens inntekt"],
      explanation: "Rekkefølgen er: skift → ny likevekt → deling → velferd. Skiftet kommer først, med mekanismen.",
    },
    {
      question: "Ved subsidie på selger flytter T-kurven:",
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
      options: ["En overføring, ikke et samfunnsøkonomisk tap", "En del av dødvektstapet", "Alltid lik dødvektstapet", "Verdi som forsvinner"],
      explanation: "Pengene går til staten, ikke ut av samfunnet. Bare dødvektstrekanten er ekte tapt verdi.",
    },
    {
      question: "En avgift og en makspris skiller seg ved at:",
      options: ["Avgiften gir ingen mangel og gir statsinntekt; maksprisen gir mangel og rasjonering", "De er identiske", "Avgiften gir mangel", "Maksprisen gir statsinntekt"],
      explanation: "Avgiften lar markedet klarere seg til høyere pris; maksprisen kutter til kortsiden og skaper mangel som må rasjoneres.",
    },
    {
      question: "En rask kontroll av delingen er at:",
      options: ["Kjøpers byrde pluss selgers byrde er nøyaktig beløpet", "Prisen doblet seg", "Dødvektstapet er null", "Mengden er uendret"],
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
      options: ["Til høyre for $x_0$ (overproduksjon)", "Til venstre for $x_0$", "På prisaksen", "Nøyaktig i likevekten"],
      explanation: "Subsidien gir for stor mengde, så trekanten ligger til høyre — motsatt av skattens.",
    },
    {
      question: "Ved makspris under likevekt bestemmes omsatt mengde av:",
      options: ["Tilbudet (kortsiden)", "Etterspørselen", "Maksprisen", "Gjennomsnittet"],
      explanation: "Kortside-regelen: ingen kan tvinges til å selge, så tilbudt mengde ved maksprisen er den bindende.",
    },
    {
      question: "Å oppgi delingsbrøken uten verbal tolkning er:",
      options: ["Feilkatalog #6 (tall uten tolkning)", "Full uttelling", "En pluss-markør", "Bare feil ved subsidie"],
      explanation: "Sensor krever ord til tallene: forklar hvorfor siden bærer den andelen den gjør.",
    },
    {
      question: "Dødvektstap ved en avgift beregnes som:",
      options: ["$\\frac{1}{2}t(x_0 - x_1)$", "$t \\cdot x_1$", "$\\frac{1}{2}t \\cdot x_0$", "$t(x_0 - x_1)$"],
      explanation: "Trekanten mellom E og T fra ny til gammel mengde: $\\frac{1}{2}t(x_0 - x_1)$.",
    },
    {
      question: "Selgerne bærer mest av en avgift når:",
      options: ["Tilbudet er minst prisfølsomt (bratt T, liten $c$)", "Tilbudet er svært prisfølsomt", "Etterspørselen er bratt", "Avgiften er liten"],
      explanation: "Den minst prisfølsomme siden kan vanskeligst trekke seg ut og bærer mest; bratt T (liten $c$) betyr høy selgerandel $\\frac{b}{b+c}$.",
    },
    {
      question: "Hvorfor faller SO ved en subsidie i et velfungerende marked?",
      options: ["Statens utlegg overstiger KO+PO-gevinsten (overproduksjon)", "KO faller", "Prisen stiger", "Selgerne taper"],
      explanation: "Subsidie-paradokset: begge parter tjener, men merenhetene koster mer enn de er verdt, og utlegget er størst.",
    },
    {
      question: "Skatt på kjøper flytter:",
      options: ["E-kurven ned med $t$", "T-kurven opp med $t$", "E-kurven opp med $t$", "T-kurven ned med $t$"],
      explanation: "Kjøper er villig til å betale $t$ mindre til selger, så E-kurven skifter ned — samme sluttresultat som skatt på selger.",
    },
    {
      question: "Statens utlegg ved en subsidie er:",
      options: ["$s \\cdot x_1$", "$s \\cdot x_0$", "$\\frac{1}{2}s x_1$", "$s$"],
      explanation: "Staten betaler $s$ per enhet på hele nye mengden $x_1$.",
    },
    {
      question: "Mengden endrer seg alltid slik at:",
      options: ["Skatt krymper den, subsidie øker den", "Begge krymper den", "Begge øker den", "Ingen av dem endrer den"],
      explanation: "Avgift kiler inn og reduserer mengden ($x_1 < x_0$); subsidie øker den ($x_1 > x_0$).",
    },
    {
      question: "Å begrunne T-skiftet i anleggsspråket («enhetskostnaden endres i alle anlegg») er:",
      options: ["Mekanismen sensor honorerer mer enn pilen", "Bortkastet tid", "Bare relevant for subsidie", "Feil modell"],
      explanation: "Sensor gir mer for begrunnelsen av skiftet enn for selve pilen i figuren.",
    },
    {
      question: "I den integrerte oppgaven (skatt vs. makspris) er hovedforskjellen at:",
      options: ["Maksprisen skaper en mangel som må rasjoneres, avgiften ikke", "De gir samme mengde", "Avgiften skaper mangel", "Maksprisen gir statsinntekt"],
      explanation: "Avgiften lar markedet klarere seg (ingen mangel); maksprisen kutter til kortsiden og etterlater et etterspørselsoverskudd.",
    },
  ],
  'econ1210-3-5': [
    {
      question: "Kjernen i «som samfunnsøkonom»-svaret på næringsstøtte er:",
      options: ["Alternativkostnaden — ressursene kaster mer av seg andre steder", "At bedriften bør spare mer", "At staten har råd", "At arbeidsplasser alltid må reddes"],
      explanation: "Subsidien senker de private kostnadene, men ikke ressursenes alternativkostnad — det er sløseriet.",
    },
    {
      question: "En subsidie til en ulønnsom bedrift endrer:",
      options: ["De private kostnadene, men ikke alternativkostnaden", "Alternativkostnaden, men ikke de private", "Begge like mye", "Ingen av dem"],
      explanation: "Staten dekker en del av bedriftens egne kostnader, men ressursenes verdi i beste alternative anvendelse er uendret.",
    },
    {
      question: "«Tapte arbeidsplasser» er ikke det samme som «tapt verdiskaping» fordi:",
      options: ["Arbeidskraften frigjøres til mer produktive anvendelser", "Arbeidsplasser aldri betyr noe", "Staten alltid kompenserer", "Bedriften uansett overlever"],
      explanation: "Ved nedleggelse forsvinner ikke arbeidskraften; den kan skape mer verdi et annet sted, så samlet verdiskaping stiger på sikt.",
    },
    {
      question: "Når kan støtte til en ulønnsom bedrift likevel forsvares?",
      options: ["Ved en reell, upriset positiv eksternalitet", "Når bedriften er stor", "Når mange jobber der", "Aldri"],
      explanation: "Positive eksternaliteter (kunnskapsspredning) betyr at markedet produserer for lite; da kan støtte flytte innsatsen mot riktig nivå.",
    },
    {
      question: "Et avgiftsfritak til en ulønnsom, forurensende bedrift gir:",
      options: ["Dobbel ineffektivitet: mer utslipp OG fastlåst ressursbruk", "Bedre miljø", "Mer effektiv produksjon", "Bare ett problem"],
      explanation: "Fritaket fjerner utslippsprisingen (mer skade) og subsidierer ulønnsom drift (fastlåste ressurser) på én gang.",
    },
    {
      question: "Å gi mest støtte til bedriftene med lavest overskudd:",
      options: ["Premierer ofte de minst produktive og vrir ressursbruken mot dårligste anvendelser", "Er alltid god fordeling", "Øker samlet verdiskaping", "Er kostnadseffektivt"],
      explanation: "Lavt overskudd henger ofte sammen med lav produktivitet; å belønne det låser ressurser i de dårligste anvendelsene.",
    },
    {
      question: "En vanlig feil i denne sjangeren er å:",
      options: ["Skrive et moralessay uten det økonomiske kjerneargumentet", "Nevne alternativkostnad", "Anerkjenne de private tapene", "Nevne unntaket"],
      explanation: "Feilkatalog #10-slektning: engasjement uten alternativkostnads-argumentet gir ikke uttelling.",
    },
    {
      question: "Hvordan skiller alternativkostnadsdrøftingen seg fra subsidie-paradokset?",
      options: ["Paradokset gjelder ett marked; alternativkostnad gjelder ressursenes beste bruk ellers", "De er identiske", "Paradokset er verbalt, alternativkostnad er grafisk", "Alternativkostnad gjelder bare monopol"],
      explanation: "Paradokset er velferdsregnskapet i markedet (overproduksjon); alternativkostnad handler om hva ressursene kunne skapt et annet sted.",
    },
    {
      question: "Den beste hjelpen til ansatte i en ulønnsom bedrift er ifølge samfunnsøkonomen:",
      options: ["Å lette omstillingen (kompetanse, inntektssikring)", "Å subsidiere driften varig", "Å forby nedleggelse", "Å heve prisen på varen"],
      explanation: "Omstillingsstøtte ivaretar menneskene uten å låse ressursene i uproduktiv drift — både folk og verdiskaping vinner.",
    },
    {
      question: "«Som samfunnsøkonom»-oppgaven skal som regel besvares:",
      options: ["Verbalt (argumentet, ikke figur/algebra)", "Med en detaljert figur", "Med full algebraisk utledning", "Med et regnestykke"],
      explanation: "Oppgaven ber ofte eksplisitt om et verbalt svar; poenget er det klart formulerte økonomiske argumentet.",
    },
  ],
  'econ1210-4-1': [
    {
      question: "Hva er en ekstern virkning (eksternalitet)?",
      options: ["En kostnad eller gevinst som rammer/tilfaller andre enn beslutningstakeren og ikke prises i markedet", "En kostnad som produsenten selv betaler for hver enhet", "En avgift staten legger på forurensende varer", "Prisforskjellen mellom to konkurrerende markeder"],
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
      options: ["Privat marginalkostnad (T-kurven) pluss marginal skadekostnad", "Privat marginalkostnad minus marginal skadekostnad", "Bare skaden på tredjeparter", "Etterspørselskurvens høyde"],
      explanation: "SMK legger skaden på tredjeparter til den private kostnaden; ved konstant skade ligger den parallelt over T.",
    },
    {
      question: "Hvor er den samfunnsøkonomisk riktige mengden ved en negativ eksternalitet?",
      options: ["Der E krysser SMK", "Der E krysser T", "Der utslippet er null", "Der T krysser prisaksen"],
      explanation: "Optimum er der marginal betalingsvillighet (E) møter den sanne kostnaden (SMK), ikke den private (T).",
    },
    {
      question: "Hva er en Pigou-avgift?",
      options: ["En stykkskatt lik den marginale skadekostnaden", "En avgift lik den totale skaden delt på antall bedrifter", "En avgift som alltid gir statens største inntekt", "En subsidie til forurensende bedrifter"],
      explanation: "Pigou-avgiften settes lik den marginale skaden; den løfter T opp til SMK og gir riktig mengde.",
    },
    {
      question: "En Pigou-avgift lik den marginale skaden vil",
      options: ["fjerne dødvektstapet av eksternaliteten", "skape et nytt dødvektstap", "øke omsatt mengde", "ikke endre noe"],
      explanation: "Fordi utgangspunktet var ineffektivt (for mye produsert), fører avgiften mengden til optimum og fjerner tapet.",
    },
    {
      question: "Hvorfor virker en avgift ULIKT i et velfungerende marked og mot en eksternalitet?",
      options: ["I et velfungerende marked skaper avgiften et tap; mot en eksternalitet fjerner den ett", "Avgiften virker likt i begge tilfeller", "Mot en eksternalitet skaper avgiften alltid et større tap", "I et velfungerende marked har avgiften ingen effekt"],
      explanation: "Virkningen avhenger av om utgangspunktet var effektivt: velfungerende marked = tap skapes; eksternalitet = tap fjernes.",
    },
    {
      question: "Speilbildet av en Pigou-avgift ved en POSITIV eksternalitet er",
      options: ["en subsidie lik den marginale eksterne gevinsten", "en høyere avgift", "et forbud", "en maksimalpris"],
      explanation: "Ved for lite produksjon retter en subsidie lik den eksterne gevinsten opp mengden.",
    },
    {
      question: "Kolliderer en subsidie ved positiv eksternalitet med subsidie-paradokset?",
      options: ["Nei — paradokset gjelder kun i et velfungerende marked", "Ja — subsidie senker alltid SO", "Ja — men bare hvis skaden er stor", "Nei — fordi subsidier alltid øker SO"],
      explanation: "Subsidie-paradokset gjelder velfungerende markeder; ved markedssvikt kan en subsidie fjerne et tap.",
    },
    {
      question: "At avgiftsinntekten overstiger den samlede skaden betyr",
      options: ["ikke at avgiften er for høy — satsen settes ved marginal skade", "at avgiften er for høy og bør senkes", "at avgiften er for lav", "at markedet er effektivt"],
      explanation: "Avgiften kreves inn på alle enheter, mens riktig sats bestemmes av den marginale skaden — total inntekt er irrelevant for satsen.",
    },
    {
      question: "I figuren ligger SMK-kurven (ved konstant skade)",
      options: ["parallelt et fast beløp over T-kurven", "parallelt under T-kurven", "sammen med E-kurven", "loddrett gjennom likevekten"],
      explanation: "Ved konstant marginal skade er SMK bare T løftet med skadebeløpet i hele lengden.",
    },
    {
      question: "Dødvektstapet av en uregulert negativ eksternalitet er",
      options: ["trekanten mellom SMK og E fra riktig mengde til markedsmengden", "hele arealet under E-kurven", "statens avgiftsinntekt", "trekanten mellom T og prisaksen"],
      explanation: "For enhetene mellom optimum og markedsmengde er SMK høyere enn E — trekanten mellom dem er tapt verdi.",
    },
    {
      question: "Hva menes med å 'internalisere' en eksternalitet?",
      options: ["Å få beslutningstakeren til å ta inn over seg kostnaden/gevinsten for andre", "Å forby produksjonen helt", "Å flytte produksjonen til utlandet", "Å la markedet ordne opp selv"],
      explanation: "En avgift/subsidie lik den eksterne virkningen får produsenten til å se den sanne samfunnskostnaden.",
    },
    {
      question: "Hvilket er et eksempel på en NEGATIV eksternalitet?",
      options: ["CO2-utslipp fra en fabrikk", "Vaksinering", "Grunnforskning", "Birøkt og pollinering"],
      explanation: "Utslipp påfører tredjeparter en kostnad; de tre andre gir tredjeparter en gevinst (positive).",
    },
    {
      question: "Hvilket er et eksempel på en POSITIV eksternalitet?",
      options: ["Vaksinering som beskytter andre", "Røyk fra en vedovn", "Kø på veien", "Avrenning fra oppdrett"],
      explanation: "Vaksinen beskytter også uvaksinerte; de andre påfører tredjeparter kostnader (negative).",
    },
    {
      question: "Den private marginalkostnaden i figuren tilsvarer",
      options: ["T-kurven", "SMK-kurven", "E-kurven", "prisaksen"],
      explanation: "T-kurven er produsentens egen (private) kostnad; SMK legger skaden på tredjeparter oppå den.",
    },
    {
      question: "Er samfunnsøkonomisk optimum ved en eksternalitet der utslippet er null?",
      options: ["Nei — noe utslipp er verdt kostnaden hvis betalingsvilligheten er høy nok", "Ja — alt utslipp bør elimineres", "Ja — hvis skaden er positiv", "Nei — optimum er alltid markedsmengden"],
      explanation: "Optimum er der E = SMK; dette gir positiv mengde så lenge betalingsvilligheten dekker den sanne kostnaden.",
    },
    {
      question: "En vanlig feil i miljøoppgaver (feilkatalog #10) er",
      options: ["å skrive moralessay uten mekanismen (privat vs. samfunnskostnad → for mye)", "å tegne SMK-kurven", "å beregne den riktige mengden", "å definere eksternaliteten presist"],
      explanation: "Sensor krever kjerneargumentet: markedet ser private, ikke samfunnsøkonomiske kostnader, så det produserer for mye.",
    },
    {
      question: "Hvorfor kalles en eksternalitet en form for markedssvikt?",
      options: ["Fordi skaden/gevinsten mangler en pris, så markedet gir ineffektivt utfall", "Fordi bedriften går konkurs", "Fordi staten alltid griper inn", "Fordi prisen er for høy"],
      explanation: "Uten en pris på skaden overforbrukes den, og markedslikevekten maksimerer ikke SO — det er markedssvikt.",
    },
  ],
  'econ1210-4-2': [
    {
      question: "Hva er Grønn skattekommisjons tre kriterier for klimavirkemidler?",
      options: ["Måloppnåelse, kostnadseffektivitet og at forurenser betaler", "Pris, mengde og teknologi", "Effektivitet, likhet og vekst", "Avgift, kvoter og forbud"],
      explanation: "NOU 2015:15 vurderer virkemidler mot måloppnåelse (styring), kostnadseffektivitet og forurenser betaler.",
    },
    {
      question: "Kjerneargumentet for hvorfor en lik utslippspris er billigst er:",
      options: ["Lik pris → like marginale rensekostnader → billigst samlet kutt", "Lik pris tvinger alle bedrifter til å kutte like mye", "Lik pris gir staten mest inntekt", "Lik pris fjerner all forurensning"],
      explanation: "En felles pris får hver bedrift til å kutte alt billigere enn prisen, så rensekostnadene utjevnes og de billigste kuttene tas først.",
    },
    {
      question: "En utslippsavgift har hvilken svakhet mot de tre kriteriene?",
      options: ["Usikker måloppnåelse — myndighetene setter prisen, ikke mengden", "Svak kostnadseffektivitet", "Forurenser betaler ikke", "Den gir ingen innovasjonsinsentiv"],
      explanation: "Avgiften er kostnadseffektiv og lar forurenser betale, men hvor mye utslippene faller er usikkert (avhenger av rensekostnadene).",
    },
    {
      question: "Et system med omsettelige kvoter gir hvilken fordel over en avgift?",
      options: ["Eksakt måloppnåelse — antall kvoter er utslippstaket", "Lavere kostnad for bedriftene alltid", "Ingen behov for et marked", "At forurenser slipper å betale"],
      explanation: "Kvoter fastsetter mengden direkte, så utslippsmålet nås eksakt; avgiften gir usikker mengde.",
    },
    {
      question: "Svekker gratis kvotetildeling kostnadseffektiviteten?",
      options: ["Nei — kvoten har en alternativkostnad lik kvoteprisen, så bedriften kutter like mye", "Ja — gratis kvoter gir ingen grunn til å kutte", "Ja — men bare for store bedrifter", "Nei — fordi gratis kvoter øker utslippstaket"],
      explanation: "Å bruke en gratis kvote betyr å gi avkall på å selge den; å slippe ut koster kvoteprisen uansett, så kuttet er det samme.",
    },
    {
      question: "Hva endrer gratis kvotetildeling da (i stedet for effektiviteten)?",
      options: ["Fordelingen og kriteriet «forurenser betaler»", "Kvoteprisen", "Utslippstaket", "Bedriftenes rensekostnader"],
      explanation: "Bedriftene får en verdioverføring (kvotene gratis), så forurenser betaler mindre — men effektiviteten er upåvirket.",
    },
    {
      question: "Hovedforskjellen mellom avgift og kvoter er:",
      options: ["Avgift fastsetter prisen (usikker mengde); kvoter fastsetter mengden (usikker pris)", "Avgift er kostnadseffektiv, kvoter er ikke", "Kvoter lar forurenser slippe å betale, avgift ikke", "Avgift gir eksakt måloppnåelse, kvoter usikker"],
      explanation: "Begge setter én pris på utslipp; forskjellen er om myndighetene fastsetter pris eller mengde.",
    },
    {
      question: "Hvorfor er direkte regulering (likt pålegg per bedrift) ofte kostnadsineffektiv?",
      options: ["Uten kjennskap til bedriftenes rensekostnader fordeles ikke kuttene der de er billigst", "Fordi den alltid gir for lite kutt", "Fordi forurenser betaler for mye", "Fordi den gir for sterkt innovasjonsinsentiv"],
      explanation: "Likt pålegg gir ulike marginale rensekostnader; billige kutt står ugjort mens dyre tas — dyrere enn nødvendig.",
    },
    {
      question: "Hva er informasjonsproblemet ved direkte regulering?",
      options: ["Myndighetene kjenner ikke hver bedrifts rensekostnader og kan ikke plassere kuttene billigst", "Bedriftene vet ikke hva de skal kutte", "Kvoteprisen er ukjent", "Staten får ikke inn nok inntekter"],
      explanation: "En pris løser problemet automatisk: bedriften avslører kostnaden gjennom hvor mye den kutter kontra betaler.",
    },
    {
      question: "Hvorfor gir en utslippspris et sterkere innovasjonsinsentiv enn et påbud?",
      options: ["Den belønner ethvert ekstra kutt billigere enn prisen, også etter at målet er nådd", "Den forbyr ny teknologi", "Den gir bedriftene gratis kvoter", "Den setter mengden, ikke prisen"],
      explanation: "Med et påbud er det ingen belønning for å kutte mer enn kravet; med en pris lønner ethvert billig kutt seg.",
    },
    {
      question: "Er subsidier til grønne alternativer (f.eks. elbil) et godt klimavirkemiddel?",
      options: ["Som regel dårlig — det vrir mot ett alternativ og forurenser betaler ikke", "Alltid best fordi det er populært", "Best fordi staten plukker riktig teknologi", "Bra fordi det gir eksakt måloppnåelse"],
      explanation: "Subsidien vrir mot ett alternativ også relativt til andre, billigere kutt; forurenser betaler ikke; myndighetene må plukke vinnere.",
    },
    {
      question: "Under hvilken betingelse kan en grønn subsidie likevel forsvares?",
      options: ["Hvis alternativet selv har en positiv ekstern virkning (teknologiutvikling)", "Hvis bedriftene ber om den", "Hvis avgiften er for lav", "Aldri under noen betingelse"],
      explanation: "Da retter subsidien opp en egen markedssvikt (teknologi-eksternaliteten), ikke klimaet, som håndteres billigere med en utslippspris.",
    },
    {
      question: "For hvilke utslipp passer en uniform (lik) utslippspris dårlig?",
      options: ["Lokal forurensning der skaden avhenger av sted", "CO2-utslipp", "Jevnt fordelte klimagasser", "Utslipp fra store bedrifter"],
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
      options: ["Kostnaden ved å kutte ett tonn til med utslipp", "Den totale kostnaden ved å rense alt", "Prisen på en kvote", "Avgiftssatsen per tonn"],
      explanation: "Den varierer mellom bedrifter; kostnadseffektivt kutt utjevner de marginale rensekostnadene.",
    },
    {
      question: "Hvorfor har en gratis kvote likevel en alternativkostnad?",
      options: ["Bruker bedriften kvoten selv, gir den avkall på å selge den til kvoteprisen", "Fordi staten krever betaling for den", "Fordi den utløper etter ett år", "Den har ingen alternativkostnad"],
      explanation: "Verdien den kunne fått ved salg er en reell kostnad ved å bruke kvoten — derfor kutter bedriften like mye.",
    },
    {
      question: "En vanlig feil i klimaoppgaven (feilkatalog #10) er:",
      options: ["Moralessay uten mekanismen lik pris → like rensekostnader → billigst kutt", "Å bruke de tre kriteriene", "Å regne et talleksempel", "Å nevne gratiskvote-nyansen"],
      explanation: "Sensor krever kjerneargumentet; et essay om at «vi må ta ansvar» uten mekanismen gir ikke full uttelling.",
    },
    {
      question: "Kriteriet «forurenser betaler» er oppfylt ved:",
      options: ["Avgift og auksjonerte kvoter", "Gratis kvotetildeling", "Subsidier til grønn teknologi", "Direkte påbud uten avgift"],
      explanation: "Ved avgift og auksjon bærer forurenseren kostnaden; gratistildeling og subsidier svekker dette kriteriet.",
    },
    {
      question: "En utslippsavgift på klima er i praksis:",
      options: ["En Pigou-avgift på CO2 (pris lik marginal skade)", "En verdiavgift på prisen", "En subsidie til rene bedrifter", "Et forbud mot utslipp"],
      explanation: "Avgiften internaliserer den negative eksternaliteten fra utslipp — nøyaktig Pigou-logikken fra kap. 4.1.",
    },
    {
      question: "Hva bestemmer kvoteprisen i et velfungerende kvotemarked?",
      options: ["Handelen mellom bedrifter med ulike rensekostnader gitt taket", "Myndighetene setter den direkte", "Den er alltid null", "Den bestemmes av avgiftssatsen"],
      explanation: "Bedrifter kjøper/selger til rensekostnadene utjevnes; kvoteprisen blir den felles utslippsprisen gitt det faste taket.",
    },
    {
      question: "Er samfunnsøkonomisk riktig utslippsnivå alltid null?",
      options: ["Nei — noe utslipp er verdt kostnaden hvis nytten er høy nok", "Ja — alt utslipp bør elimineres", "Ja — hvis skaden er positiv", "Bare ved kvotesystemer"],
      explanation: "Riktig nivå balanserer nytte mot marginal skade (E = SMK); det gir positivt utslipp så lenge nytten dekker skaden.",
    },
    {
      question: "Hvorfor er strukturen (de tre kriteriene) så viktig i klimaoppgaven?",
      options: ["Kriteriestrukturen ER sjangeren; å drøfte løst uten den er en typisk feil", "Fordi den gir flere sider tekst", "Fordi sensor bare teller kriterier", "Den er valgfri og gir ingen ekstra poeng"],
      explanation: "Sensor vurderer hvert virkemiddel systematisk mot måloppnåelse → kostnadseffektivitet → forurenser betaler.",
    },
    {
      question: "Hvorfor kan avgift og kvoter kalles «to sider av samme mynt»?",
      options: ["Begge setter én pris på utslipp og utjevner marginale rensekostnader", "Begge gir eksakt måloppnåelse", "Begge lar forurenser slippe å betale", "Begge er direkte regulering"],
      explanation: "De deler mekanismen (kostnadseffektiv utjevning); forskjellen er kun om man fastsetter pris eller mengde.",
    },
    {
      question: "En elbilsubsidie kan vri atferden uheldig fordi den:",
      options: ["gjør elbil kunstig attraktiv også mot billigere kutt som kollektiv/sykkel/mindre kjøring", "gir for lite elbil", "alltid øker utslippene", "ikke koster staten noe"],
      explanation: "Den vrir mot ett bestemt alternativ i stedet for å la en utslippspris finne det billigste kuttet.",
    },
  ],
  'econ1210-4-3': [
    {
      question: "Hva betyr det at et gode er ikke-rivaliserende?",
      options: ["Min bruk reduserer ikke det som er igjen til andre", "Ingen kan stenges ute fra godet", "Godet er gratis å produsere", "Bare én person kan bruke det"],
      explanation: "Ikke-rivalisering handler om mengden: flere kan bruke godet samtidig uten forringelse (marginalkostnad null).",
    },
    {
      question: "Hva betyr det at et gode er ikke-ekskluderbart?",
      options: ["Ingen kan stenges ute selv om de ikke betaler", "Min bruk reduserer din", "Godet er dyrt", "Bare staten kan levere det"],
      explanation: "Ikke-ekskluderbarhet betyr at man ikke kan kreve betaling; det skaper gratispassasjer-problemet.",
    },
    {
      question: "Sensor godtar hvilke definisjoner av et kollektivt gode?",
      options: ["Begge: Krugman & Wells (ikke-rivaliserende OG ikke-ekskluderbart) og CORE (kun ikke-rivaliserende)", "Bare Krugman & Wells", "Bare CORE", "Ingen — begrepet er utdatert"],
      explanation: "Metaregelen er at begge godtas, helst begge nevnt; ha begge klare.",
    },
    {
      question: "Markedet leverer et kollektivt gode i",
      options: ["for liten mengde (underforsyning)", "for stor mengde", "riktig mengde", "alltid null mengde"],
      explanation: "Gratispassasjer- og utestengningsproblemene gjør at markedet underforsyner kollektive goder.",
    },
    {
      question: "Hva er gratispassasjer-problemet?",
      options: ["Alle håper andre betaler og sniker seg gratis med, så godet ikke produseres", "At godet blir for dyrt", "At ingen vil ha godet", "At staten tar for høy pris"],
      explanation: "Når ingen kan stenges ute, kommer det ikke inn nok betaling — derfor må kollektive goder ofte finansieres offentlig.",
    },
    {
      question: "Hvorfor er en positiv pris på et ikke-rivaliserende gode ineffektiv?",
      options: ["Én bruker til koster ingenting, så prisen stenger ute noen uten å spare kostnad", "Fordi prisen alltid er for lav", "Fordi godet er rivaliserende", "Fordi staten taper penger"],
      explanation: "Marginalkostnaden er null; utestenging av brukere med positiv betalingsvillighet er tapt verdi.",
    },
    {
      question: "Hva kjennetegner en fellesressurs?",
      options: ["Rivaliserende men ikke-ekskluderbar", "Ikke-rivaliserende og ikke-ekskluderbar", "Rivaliserende og ekskluderbar", "Ikke-rivaliserende og ekskluderbar"],
      explanation: "Fisk, beite og grunnvann er rivaliserende (uttak reduserer for andre) men ikke-ekskluderbare (ingen eier dem).",
    },
    {
      question: "Hvilken markedssvikt gir en fellesressurs?",
      options: ["Overforbruk (allmenningens tragedie)", "Underforsyning", "Ingen svikt", "For høy pris"],
      explanation: "Hver bruker ignorerer at eget uttak reduserer ressursen for andre — en negativ eksternalitet som gir overforbruk.",
    },
    {
      question: "Hva er hovedskillet mellom et kollektivt gode og en fellesressurs?",
      options: ["Kollektivt gode er ikke-rivaliserende (for lite); fellesressurs er rivaliserende (for mye)", "De er det samme", "Fellesressurs underforsynes, kollektivt gode overforbrukes", "Bare kollektive goder er ikke-ekskluderbare"],
      explanation: "Rivaliseringsaksen skiller dem og bestemmer om problemet er underforsyning eller overforbruk.",
    },
    {
      question: "Hvordan kan overforbruk av en fellesressurs løses?",
      options: ["Med regulering (kvoter) eller eiendomsrett", "Med en subsidie til brukerne", "Ved å øke etterspørselen", "Ved å senke prisen"],
      explanation: "Kvoter begrenser uttaket direkte; eiendomsrett gir eieren interesse av bærekraftig forvaltning.",
    },
    {
      question: "Hva er asymmetrisk informasjon?",
      options: ["Den ene parten i en handel vet mer enn den andre", "Begge parter har full informasjon", "Prisen er ukjent", "Godet er ikke-rivaliserende"],
      explanation: "Rammer særlig forsikring, der kunden kjenner sin egen risiko bedre enn selskapet.",
    },
    {
      question: "Hvorfor svikter private forsikringsmarkeder ved asymmetrisk informasjon?",
      options: ["Høyrisiko-personer melder seg mest, premien blir høy, lavrisiko trekker seg (ugunstig utvalg)", "Fordi selskapene tjener for mye", "Fordi alle er lavrisiko", "Fordi staten forbyr forsikring"],
      explanation: "Ugunstig utvalg kan få markedet til å bryte sammen — et argument for obligatorisk offentlig forsikring.",
    },
    {
      question: "Hva er atferdsrisiko?",
      options: ["At den forsikrede blir mindre forsiktig fordi han ikke bærer hele kostnaden", "At forsikringen er for dyr", "At kunden lyver om alderen", "At staten betaler for lite"],
      explanation: "F.eks. råere kjøring med kaskoforsikring; motvirkes med egenandeler.",
    },
    {
      question: "Hvilken markedssvikt begrunner offentlig finansiert grunnforskning?",
      options: ["Kollektivt gode (kunnskap er ikke-rivaliserende)", "Negativ eksternalitet", "Fellesressurs", "Markedsmakt"],
      explanation: "Private investerer for lite fordi de ikke kan ta betalt for hele nytten (gratispassasjerer).",
    },
    {
      question: "Hvilken markedssvikt begrunner gratis vaksinering?",
      options: ["Positiv eksternalitet (beskytter også andre)", "Kollektivt gode", "Fellesressurs", "Asymmetrisk informasjon"],
      explanation: "Vaksinen gir flokkbeskyttelse; privat betalingsvillighet er lavere enn samfunnsgevinsten.",
    },
    {
      question: "Hvilken markedssvikt begrunner fiskekvoter?",
      options: ["Fellesressurs (overforbruk)", "Kollektivt gode", "Positiv eksternalitet", "Asymmetrisk informasjon"],
      explanation: "Fisken er rivaliserende og ikke-ekskluderbar; kvoter hindrer overfiske.",
    },
    {
      question: "Hvilken markedssvikt begrunner forbud mot prissamarbeid?",
      options: ["Markedsmakt / kartell", "Kollektivt gode", "Fellesressurs", "Positiv eksternalitet"],
      explanation: "Et priskartell opptrer som monopol (pris opp, mengde ned, dødvektstap); forbudet gjenoppretter konkurransen.",
    },
    {
      question: "Hva er en klassisk feil i katalog-oppgaven (sjanger K)?",
      options: ["Å begrunne alle inngrep med «rettferdighet» i stedet for å navngi svikten", "Å navngi den presise markedssvikten", "Å gi et eksempel", "Å nevne begge definisjoner"],
      explanation: "Sjangeren spør om markedssvikten (effektivitetsargumentet), ikke om fordeling.",
    },
    {
      question: "Et privat gode er",
      options: ["rivaliserende og ekskluderbart", "ikke-rivaliserende og ikke-ekskluderbart", "rivaliserende og ikke-ekskluderbart", "ikke-rivaliserende og ekskluderbart"],
      explanation: "Et eple eller en kinobillett: markedet leverer private goder effektivt uten inngrep.",
    },
    {
      question: "En kryptert strømmetjeneste (ikke-rivaliserende, ekskluderbar) er",
      options: ["et kollektivt gode i CORE-forstand (klubbgode)", "en fellesressurs", "et rent privat gode", "et rent kollektivt gode etter Krugman & Wells"],
      explanation: "Den er ikke-rivaliserende (kollektivt i CORE), men ekskluderbar, så ikke et rent kollektivt gode etter Krugman & Wells.",
    },
  ],
  'econ1210-4-4': [
    {
      question: "Første steg i algoritmen for klimaoppgaven er å",
      options: ["identifisere eksternaliteten og målet", "regne ut dødvektstapet", "velge en avgiftssats", "tegne monopolfiguren"],
      explanation: "Ramm inn utslippet som en negativ eksternalitet og klargjør målet før du vurderer virkemidlene.",
    },
    {
      question: "Kjerneargumentet som ALLTID skal med i klimaoppgaven er:",
      options: ["Lik pris → like marginale rensekostnader → billigst samlet kutt", "Forurensning er skadelig for miljøet", "Staten bør bestemme alt", "Avgifter gir mest inntekt"],
      explanation: "Uten mekanismen blir svaret et moralessay (feilkatalog #10).",
    },
    {
      question: "To bedrifter skal kutte 40 tonn. A: 300 kr/tonn, B: 700 kr/tonn. Billigste kutt er:",
      options: ["12 000 kr (A tar alt)", "20 000 kr (20 hver)", "28 000 kr (B tar alt)", "16 000 kr"],
      explanation: "La den billigste (A) ta alle 40: 40·300 = 12 000. Likt pålegg 20/20 gir 20 000 — dyrere.",
    },
    {
      question: "En lik avgift har hvilken svakhet sammenlignet med omsettelige kvoter?",
      options: ["Usikker måloppnåelse (prisen settes, ikke mengden)", "Svakere kostnadseffektivitet", "Forurenser betaler ikke", "Ingen innovasjonsinsentiv"],
      explanation: "Avgiften fastsetter prisen; hvor mye utslippene faller avhenger av rensekostnadene.",
    },
    {
      question: "Svekker gratis kvotetildeling kostnadseffektiviteten?",
      options: ["Nei — kvoten har en alternativkostnad, så bedriften kutter like mye", "Ja — gratis kvoter gir ingen grunn til å kutte", "Ja, alltid", "Nei — fordi den øker taket"],
      explanation: "Å bruke en gratis kvote betyr å gi avkall på å selge den; utslipp koster kvoteprisen uansett.",
    },
    {
      question: "Hva er forskjellen mellom gratis kvotetildeling og avgiftsfritak for effektiviteten?",
      options: ["Gratis kvote bevarer utslippsprisen; avgiftsfritak fjerner den og bryter kostnadseffektiviteten", "Ingen forskjell", "Avgiftsfritak er alltid best", "Gratis kvote fjerner utslippsprisen"],
      explanation: "Kvoten har en alternativkostnad (pris bevart); fritak setter prisen til null for de fritatte (ulike rensekostnader).",
    },
    {
      question: "Differensierte avgiftssatser (fritak for noen bedrifter) fører til:",
      options: ["Brutt kostnadseffektivitet — ulik pris gir ulike marginale rensekostnader", "Billigere samlet kutt", "Bedre måloppnåelse", "Sterkere innovasjonsinsentiv"],
      explanation: "Billige kutt står ugjort hos de fritatte mens dyre tas ellers — dobbel ineffektivitet.",
    },
    {
      question: "En subsidie til ett grønt alternativ (f.eks. hydrogen) er som klimavirkemiddel:",
      options: ["som regel dårlig — vrir mot ett alternativ, forurenser betaler ikke", "alltid best", "kostnadseffektivt", "garantert måloppnåelse"],
      explanation: "Den vrir mot ett alternativ også mot andre kutt og krever at myndighetene plukker vinnere.",
    },
    {
      question: "En grønn subsidie kan likevel forsvares hvis",
      options: ["alternativet selv har en positiv teknologi-eksternalitet markedet ikke fanger opp", "bransjen ber om den", "avgiften er upopulær", "staten trenger å bruke penger"],
      explanation: "Da retter subsidien opp en egen markedssvikt, ikke klimaet, som håndteres billigere med en utslippspris.",
    },
    {
      question: "En uniform nasjonal avgift passer DÅRLIG for",
      options: ["lokal forurensning der skaden avhenger av sted", "CO2-utslipp", "jevnt fordelte klimagasser", "industriutslipp generelt"],
      explanation: "En lik sats blir enten for lav der skaden er stor eller for høy der den er liten; da trengs stedstilpasning.",
    },
    {
      question: "Riktig virkemiddel mot et akutt giftig tungmetallutslipp er",
      options: ["forbud", "en lav avgift", "gratis kvoter", "en subsidie"],
      explanation: "Skaden er for alvorlig til at noe utslipp bør tillates mot betaling.",
    },
    {
      question: "Hvis målet er å nå en BESTEMT utslippsmengde (f.eks. halvering), taler det for",
      options: ["omsettelige kvoter (eksakt måloppnåelse)", "en avgift", "direkte påbud per bedrift", "en subsidie"],
      explanation: "Kvoter fastsetter mengden direkte; avgiften gir usikker mengde.",
    },
    {
      question: "Hvorfor gir en utslippspris sterkere innovasjonsinsentiv enn et påbud?",
      options: ["Den belønner ethvert kutt billigere enn prisen, også etter at målet er nådd", "Den forbyr ny teknologi", "Den gir gratis kvoter", "Den setter mengden"],
      explanation: "Med et påbud lønner det seg ikke å kutte mer enn kravet; med en pris lønner ethvert billig kutt seg.",
    },
    {
      question: "En vanlig feil i klimadrillen er",
      options: ["å skrive moralessay uten kjerneargumentet (feilkatalog #10)", "å bruke de tre kriteriene", "å regne et talleksempel", "å konkludere klart"],
      explanation: "Sensor krever mekanismen lik pris → like rensekostnader → billigst kutt.",
    },
    {
      question: "Hva løfter en klimabesvarelse fra midt- til toppsjikt?",
      options: ["En klar, begrunnet konklusjon som velger virkemiddel ut fra målet", "Flest mulig sider tekst", "Å unngå talleksempler", "Å ramse opp uten å konkludere"],
      explanation: "En begrunnet anbefaling (bestemt mengde→kvoter, forutsigbar pris→avgift, lokal/akutt→regulering/forbud) er A-markøren.",
    },
  ],
  'econ1210-5-1': [
    {
      question: "Hva består monopolets marginalinntekt (MI) av?",
      options: ["En kvantumseffekt ($+p$) og en priseffekt (negativ)", "Bare prisen på den siste enheten", "Prisen ganger mengden", "Marginalkostnaden pluss et påslag"],
      explanation: "MI = kvantumseffekt (den nye enheten selges til $p$) + priseffekt (prisfallet rammer alle enhetene). Priseffekten gjør MI < p.",
    },
    {
      question: "Hvorfor er marginalinntekten lavere enn prisen for et monopol?",
      options: ["Fordi prisen må ned på alle enhetene for å selge én mer (priseffekten)", "Fordi marginalkostnaden er høy", "Fordi monopolet betaler skatt av inntekten", "Fordi kundene forhandler ned prisen"],
      explanation: "For å selge mer må monopolet sette prisen ned, og prisfallet gjelder alle enhetene — ikke bare den siste. Denne priseffekten trekker MI under p.",
    },
    {
      question: "En pristaker i frikonkurranse har hvilken marginalinntekt?",
      options: ["$\\text{MI} = p$ (lik prisen)", "$\\text{MI} < p$", "$\\text{MI} = \\text{MK}$ alltid", "$\\text{MI} = 0$"],
      explanation: "Pristakeren kan selge alt til markedsprisen uten å presse prisen — ingen priseffekt — så MI = p.",
    },
    {
      question: "Hvor bratt er MI-kurven i forhold til en lineær E-kurve?",
      options: ["Dobbelt så bratt, med samme skjæring på prisaksen", "Like bratt som E-kurven", "Halvparten så bratt", "Dobbelt så bratt, men skjærer prisaksen dobbelt så høyt"],
      explanation: "For lineær E treffer MI-kurven prisaksen i samme punkt som E, men faller dobbelt så bratt.",
    },
    {
      question: "Hvor produserer et monopol for å maksimere overskuddet?",
      options: ["Der marginalinntekt = marginalkostnad (MI = MK)", "Der pris = marginalkostnad (p = MK)", "Der marginalinntekt = pris", "Der total inntekt er størst"],
      explanation: "Ved MI = MK dekker den siste enheten akkurat sin kostnad. Ved MI = p (p = MK) produserer bare en pristaker.",
    },
    {
      question: "Etter at MI = MK gir monopolmengden, hvor leser du monopolprisen?",
      options: ["På E-kurven ved monopolmengden $x_M$", "På MI-kurven ved $x_M$", "Der MI krysser MK", "På MK-linja ved $x_M$"],
      explanation: "Prisen leses av E-kurven ved $x_M$ (feil #5 er å lese den av MI-kurven, som gir en for lav pris).",
    },
    {
      question: "En student leser monopolprisen der MI krysser MK. Hva blir feil?",
      options: ["Prisen blir for lav — det tallet er marginalkostnaden, ikke markedsprisen", "Prisen blir for høy", "Mengden blir feil", "Ingenting, det er riktig metode"],
      explanation: "Feil #5: der MI = MK finner du bare mengden. Prisen (E-kurvens høyde ved $x_M$) ligger over MK.",
    },
    {
      question: "Et monopol har $x = 120 - 2p$ og $\\text{MK} = 20$. Hva er monopolmengden?",
      options: ["$x_M = 40$", "$x_M = 80$", "$x_M = 20$", "$x_M = 60$"],
      explanation: "$p = 60 - \\frac{1}{2}x$, MI $= 60 - x$. MI = MK: $60 - x = 20 \\Rightarrow x_M = 40$.",
    },
    {
      question: "Et monopol har $x = 120 - 2p$ og $\\text{MK} = 20$, så $x_M = 40$. Hva er monopolprisen?",
      options: ["$p_M = 40$", "$p_M = 20$", "$p_M = 60$", "$p_M = 30$"],
      explanation: "Pris fra E-kurven ved $x_M = 40$: $p_M = 60 - \\frac{1}{2}\\cdot 40 = 40$. (Ikke 20 — det er MK.)",
    },
    {
      question: "Hva er kvantumseffekten i MI-dekomponeringen?",
      options: ["Den nye enheten selges til prisen $p$ (positiv)", "Prisfallet på alle tidligere enheter (negativ)", "Marginalkostnaden av den nye enheten", "Endringen i total kostnad"],
      explanation: "Kvantumseffekten er det positive bidraget: den ekstra enheten gir inntekt lik prisen $p$.",
    },
    {
      question: "Hva er priseffekten i MI-dekomponeringen?",
      options: ["Prisfallet ganget med antall enheter som alt ble solgt (negativ)", "Prisen på den nye enheten (positiv)", "Den totale inntekten", "Marginalkostnaden"],
      explanation: "Priseffekten $\\frac{\\Delta p}{\\Delta x}x$ er negativ: prisfallet for å selge mer rammer alle de $x$ tidligere enhetene.",
    },
    {
      question: "Ved en mengde der MI > MK, hva bør monopolet gjøre?",
      options: ["Produsere mer — den neste enheten gir mer inntekt enn den koster", "Produsere mindre", "Holde mengden uendret", "Sette ned prisen uten å endre mengden"],
      explanation: "MI > MK betyr at en enhet til øker overskuddet. Monopolet øker mengden til MI = MK.",
    },
    {
      question: "Ved en mengde der MI < MK, hva bør monopolet gjøre?",
      options: ["Produsere mindre — den siste enheten koster mer enn den gir", "Produsere mer", "Holde mengden uendret", "Øke prisen og mengden samtidig"],
      explanation: "MI < MK betyr at siste enhet taper penger. Monopolet kutter mengden til MI = MK.",
    },
    {
      question: "Trengs derivasjon for å finne monopoltilpasningen på ECON1210?",
      options: ["Nei — MI-kurven finnes med regelen «dobbelt så bratt», og alt løses med lineær algebra", "Ja, MI må deriveres fra total inntekt", "Ja, MK må deriveres fra totalkostnaden", "Ja, både MI og MK må deriveres"],
      explanation: "Fasitene sier eksplisitt at derivasjon ikke forventes; MI-kurven er dobbelt så bratt som lineær E.",
    },
    {
      question: "Et monopol har $x = 90 - p$ og $\\text{MK} = 10$. Hva er monopolmengde og -pris?",
      options: ["$x_M = 40$, $p_M = 50$", "$x_M = 40$, $p_M = 10$", "$x_M = 80$, $p_M = 50$", "$x_M = 45$, $p_M = 45$"],
      explanation: "$p = 90 - x$, MI $= 90 - 2x$. MI = MK: $x_M = 40$. Pris fra E: $p_M = 90 - 40 = 50$.",
    },
    {
      question: "Hvor krysser MI-kurven mengdeaksen for E-kurven $x = a - bp$?",
      options: ["På halvveien i forhold til E-kurven (ved $x = a/2$)", "På samme sted som E-kurven (ved $x = a$)", "Dobbelt så langt ute som E-kurven", "I origo"],
      explanation: "MI har samme skjæring med prisaksen, men dobbelt helning, så den treffer mengdeaksen ved $x = a/2$ (E ved $x = a$).",
    },
    {
      question: "Hva er total inntekt (TI) for et monopol?",
      options: ["Prisen ganger mengden, $p\\cdot x$", "Prisen minus marginalkostnaden", "Marginalinntekten ganger mengden", "Summen av marginalkostnadene"],
      explanation: "TI $= p\\cdot x$. Marginalinntekten er endringen i TI når mengden øker med én enhet.",
    },
    {
      question: "Monopolmengden er halvparten av den samfunnsøkonomisk optimale mengden (ved $p = \\text{MK}$). Hva sier det om monopolet?",
      options: ["Monopolet holder igjen på mengden i forhold til frikonkurranse", "Monopolet produserer mer enn frikonkurranse", "Monopolet produserer akkurat riktig mengde", "Monopolet setter prisen lik marginalkostnaden"],
      explanation: "Med lineær E og konstant MK er $x_M = \\frac{a-bc}{2}$, mens optimum er $a - bc$ — monopolet begrenser mengden og tar høyere pris.",
    },
    {
      question: "Hvorfor kan ikke monopolet både selge mer OG holde prisen oppe på alle enhetene?",
      options: ["Fordi det står overfor én fallende E-kurve for hele markedet (ingen prisdiskriminering)", "Fordi marginalkostnaden stiger", "Fordi konkurrentene senker prisen", "Fordi staten forbyr det"],
      explanation: "Uten prisdiskriminering må monopolet ta én pris av alle, gitt av E-kurven — derfor priseffekten.",
    },
    {
      question: "Hva er et monopol?",
      options: ["Den eneste tilbyderen av et gode uten nære substitutter", "En av mange små pristakere", "En bedrift som tar markedsprisen som gitt", "En bedrift med marginalinntekt lik prisen"],
      explanation: "Monopolet er eneselger og står overfor hele markedets E-kurve, så det velger selv mengde og pris.",
    },
  ],
  'econ1210-5-2': [
    {
      question: "Mellom hvilke kurver ligger dødvektstrekanten ved monopol?",
      options: ["Mellom E-kurven og MK-linja, fra $x_M$ til $x_{\\text{opt}}$", "Mellom E-kurven og MI-kurven", "Mellom MI-kurven og MK-linja", "Mellom prislinja og MK, fra 0 til $x_M$"],
      explanation: "Tapet er verdi som forsvinner fordi mengden er lavere enn ved $p = \\text{MK}$: trekanten mellom E og MK fra $x_M$ til $x_{\\text{opt}}$. Aldri mot MI.",
    },
    {
      question: "Hvor er den samfunnsøkonomisk optimale mengden ved monopol?",
      options: ["Der pris = marginalkostnad ($x_{\\text{opt}} = a - b\\cdot\\text{MK}$)", "Der MI = MK (monopolmengden)", "Der total inntekt er størst", "Der MI = 0"],
      explanation: "Optimum er der marginal betalingsvillighet (E) = MK, altså $p = \\text{MK}$ — samme som frikonkurranse. Monopolet stopper før dette.",
    },
    {
      question: "Hvem taper på monopolprising sammenlignet med frikonkurranse?",
      options: ["Kjøperne — de betaler høyere pris og får mindre mengde (KO ned)", "Monopolisten — den mister overskudd", "Ingen taper", "Bare staten"],
      explanation: "Kjøperne får høyere pris og lavere mengde, så KO faller. Monopolisten vinner (PO opp).",
    },
    {
      question: "Et monopol har $x = 120 - 2p$ og $\\text{MK} = 20$ ($x_M = 40$, $p_M = 40$). Hva er dødvektstapet?",
      options: ["$400$", "$800$", "$1600$", "$200$"],
      explanation: "$x_{\\text{opt}} = 120 - 40 = 80$; dødvektstap $= \\frac{1}{2}(40-20)(80-40) = \\frac{1}{2}\\cdot 20\\cdot 40 = 400$.",
    },
    {
      question: "Ved siden av kjøperne (tap) og monopolisten (gevinst) — hvem kan også vinne på monopolprisen?",
      options: ["Andre selgere i markedet, som får selge til den høye prisen", "Ingen andre", "Staten, gjennom skatteinntekt", "Kundene som ikke kjøper"],
      explanation: "Tredjeparts-poenget: andre tilbydere får den høye prisen $p_M$ uten selv å begrense mengden. Å glemme dem er feil #11.",
    },
    {
      question: "Hva viser monopolmakt seg som?",
      options: ["Gapet mellom pris og marginalkostnad ($p_M - \\text{MK}$)", "Størrelsen på marginalkostnaden", "Den totale inntekten", "Antallet enheter som selges"],
      explanation: "Jo større gap mellom pris og MK, desto mer makt. En pristaker har $p = \\text{MK}$, altså null gap.",
    },
    {
      question: "Hvordan påvirker en mer elastisk (flatere) E-kurve monopolmakten?",
      options: ["Den svekker makten — kundene flykter lettere, så gapet mellom pris og MK må krympe", "Den styrker makten — monopolet kan ta høyere pris", "Den påvirker ikke makten", "Den fjerner marginalkostnaden"],
      explanation: "Mer elastisk E betyr at priseffekten svir mer; monopolet må senke gapet mellom pris og MK.",
    },
    {
      question: "Hva gjør etterspørselen mot en dominerende aktør mer elastisk?",
      options: ["Flere konkurrenter, bedre substitutter, økt overføringskapasitet (ny kabel)", "Færre konkurrenter", "Høyere marginalkostnad", "At staten forbyr import"],
      explanation: "Alt som gir kundene flere alternativer, gjør E mer elastisk og svekker markedsmakten — konkurransepolitikkens logikk.",
    },
    {
      question: "Er monopolistens gevinst en del av dødvektstapet?",
      options: ["Nei — den er en overføring fra kjøperne til monopolisten, ikke tapt verdi", "Ja, hele gevinsten er dødvektstap", "Ja, halvparten er dødvektstap", "Ja, gevinsten er lik dødvektstapet"],
      explanation: "Monopolistens gevinst er en overføring; bare selve trekanten (bortfalte verdiskapende enheter) er dødvektstap.",
    },
    {
      question: "Setter et monopol prisen «så høyt som mulig»?",
      options: ["Nei — det maksimerer overskuddet, ikke prisen", "Ja, alltid maksimalt høy pris", "Ja, helt opp til betalingsvilligheten til den siste kunden", "Ja, prisen settes lik E-kurvens toppunkt"],
      explanation: "En enda høyere pris ville solgt for lite til å lønne seg. Monopolet stopper der MI = MK.",
    },
    {
      question: "Et monopol har $x = 240 - 2p$ og $\\text{MK} = 40$ ($x_M = 80$, $p_M = 80$). Hva er dødvektstapet?",
      options: ["$1600$", "$800$", "$3200$", "$400$"],
      explanation: "$x_{\\text{opt}} = 240 - 80 = 160$; dødvektstap $= \\frac{1}{2}(80-40)(160-80) = \\frac{1}{2}\\cdot 40\\cdot 80 = 1600$.",
    },
    {
      question: "Hvordan er samfunnsøkonomisk overskudd (SO) ved monopol i forhold til frikonkurranse?",
      options: ["Mindre — SO faller med nøyaktig dødvektstrekanten", "Større — monopolet skaper mer verdi", "Nøyaktig likt", "Null"],
      explanation: "$\\text{SO}_{\\text{mono}} = \\text{SO}_{\\text{opt}} - \\text{dødvektstap}$. KO faller, PO stiger, men summen faller.",
    },
    {
      question: "Hvorfor er en bratt (lite elastisk) E-kurve gunstig for et monopol?",
      options: ["Kundene flykter ikke ved høy pris, så et stort pris–MK-gap kan holdes", "Marginalkostnaden blir lavere", "Total inntekt blir null", "Prisen må settes lik MK"],
      explanation: "Med lite elastisk etterspørsel er priseffekten svak; monopolet kan holde en høy pris uten å miste mange kunder.",
    },
    {
      question: "En ny utenlandskabel gir kundene tilgang til import. Hva skjer med den lokale monopolistens pris?",
      options: ["Prisen faller (mot MK), fordi etterspørselen blir mer elastisk", "Prisen stiger, fordi konkurransen øker kostnadene", "Prisen er uendret", "Prisen settes lik MI"],
      explanation: "Import gir kundene et alternativ → E mer elastisk → mindre gap mellom pris og MK → lavere pris, mer mengde.",
    },
    {
      question: "Hvorfor holder monopolet mengden nede?",
      options: ["For å holde prisen oppe på alle enhetene (unngå priseffekten på de gamle)", "Fordi marginalkostnaden er uendelig", "Fordi staten pålegger en mengdegrense", "For å maksimere prisen alene"],
      explanation: "Å selge de siste enhetene ville presset prisen ned på alt som selges. Derfor stopper monopolet ved $x_M < x_{\\text{opt}}$.",
    },
  ],
  'econ1210-5-3': [
    {
      question: "Hva kjennetegner et naturlig monopol?",
      options: ["Gjennomsnittskostnaden faller med mengden, så én produsent er billigst", "Marginalkostnaden stiger bratt", "Mange små pristakere deler markedet", "Ingen faste kostnader"],
      explanation: "Med stor fast kostnad $B$ og lav enhetskostnad faller GK $= c + B/x$ mot $c$, så én stor produsent er billigst.",
    },
    {
      question: "Hva er den samfunnsøkonomisk optimale prisen i et naturlig monopol?",
      options: ["Pris = marginalkostnad ($p = c$)", "Pris = gjennomsnittskostnad", "Pris der MI = MK", "Så høy pris som mulig"],
      explanation: "Optimum er alltid $p = \\text{MK}$. For digital avis med $c = 0$ betyr det gratis tilgang.",
    },
    {
      question: "Hvorfor gir prisen $p = c$ selskapet underskudd?",
      options: ["Inntekten dekker bare de variable kostnadene, ikke den faste kostnaden $B$", "Fordi marginalkostnaden er for høy", "Fordi kundene ikke vil betale", "Fordi mengden blir null"],
      explanation: "Ved $p = c$ dekkes de variable kostnadene, men ikke $B$ — selskapet taper $B$.",
    },
    {
      question: "Når er driften av et naturlig monopol samfunnsøkonomisk lønnsom?",
      options: ["Når konsumentoverskuddet ved $p = c$ overstiger den faste kostnaden (KO > B)", "Når selskapet går med overskudd ved $p = c$", "Når marginalkostnaden er null", "Alltid, uansett faste kostnader"],
      explanation: "Ved $p = c$ er SO = KO. Er denne verdien større enn $B$, er tjenesten verdt mer enn den koster å opprette.",
    },
    {
      question: "En nettavis har $x = 1000 - 5p$ og $c = 0$. Er driften lønnsom hvis $B = 60\\,000$?",
      options: ["Ja — KO ved gratis tilgang er $100\\,000 > 60\\,000$", "Nei — selskapet taper penger", "Ja, fordi marginalkostnaden er null uansett B", "Nei — KO er lavere enn B"],
      explanation: "KO $= \\frac{1}{2}\\cdot 200\\cdot 1000 = 100\\,000 > 60\\,000$, så driften er samfunnsøkonomisk lønnsom.",
    },
    {
      question: "Argumentet «lav gjennomsnittskostnad, så prisen bør ned til GK» er:",
      options: ["Feil — riktig mengde krever pris = marginalkostnad, ikke gjennomsnittskostnad", "Riktig — GK er alltid optimal pris", "Riktig bare for digitale goder", "Riktig for minstepris"],
      explanation: "Feil #7: $p = \\text{GK}$ gir nullresultat men for lav mengde. Optimum er $p = \\text{MK}$.",
    },
    {
      question: "Hva gjør regulering av naturlige monopol vanskelig?",
      options: ["Myndighetene kjenner ikke selskapets kostnader like godt som selskapet selv (informasjonsproblemet)", "Det finnes ingen reguleringsverktøy", "Faste kostnader kan ikke måles", "Etterspørselen er ukjent"],
      explanation: "Informasjonsasymmetrien (H2018): selskapet kan overdrive kostnadene for høyere pris/subsidie.",
    },
    {
      question: "Hvordan tilpasser et uregulert naturlig monopol seg?",
      options: ["Setter MI = MK — for lav mengde, for høy pris", "Setter pris = marginalkostnad", "Produserer den optimale mengden", "Setter pris = gjennomsnittskostnad"],
      explanation: "Som ethvert monopol: MI = MK gir for lite mengde (høy betalingsmur) og et dødvektstap.",
    },
    {
      question: "Hva er gjennomsnittskostnaden for $c(x) = cx + B$?",
      options: ["$\\text{GK}(x) = c + \\frac{B}{x}$", "$\\text{GK}(x) = c\\cdot x$", "$\\text{GK}(x) = c + B$", "$\\text{GK}(x) = \\frac{c}{x} + B$"],
      explanation: "GK = samlet kostnad / mengde $= \\frac{cx + B}{x} = c + \\frac{B}{x}$, som faller med $x$.",
    },
    {
      question: "Hvorfor er én produsent billigst i et naturlig monopol?",
      options: ["To små konkurrenter måtte hver bære sin egen faste kostnad B", "Fordi én produsent har lavere marginalkostnad", "Fordi konkurranse alltid er dyrt", "Fordi staten forbyr konkurranse"],
      explanation: "Én produsent bærer $B$ bare én gang og fordeler den på hele markedet; to konkurrenter dobler den faste kostnaden.",
    },
    {
      question: "Hva er en to-delt tariff?",
      options: ["Et fast årsledd som dekker B, pluss en pris per enhet lik marginalkostnaden", "To ulike priser til to kundegrupper", "En avgift på både kjøper og selger", "En pris lik gjennomsnittskostnaden"],
      explanation: "Fastleddet dekker $B$, mens marginalprisen holdes lik $c$ — så mengden forblir effektiv og driften finansieres.",
    },
    {
      question: "Påvirker den faste kostnaden B den optimale prisen?",
      options: ["Nei — optimal pris er $p = c$ uansett B; B avgjør bare om driften er verdt det", "Ja, høyere B gir høyere optimal pris", "Ja, B legges til marginalkostnaden", "Ja, prisen settes lik B"],
      explanation: "Optimal pris er alltid $p = \\text{MK}$. $B$ påvirker underskuddet og lønnsomhetsvilkåret, ikke prisen.",
    },
    {
      question: "En strømmetjeneste har $x = 800 - 4p$ og $c(x) = 10x + 30\\,000$. Er driften lønnsom?",
      options: ["Ja — KO ved $p = 10$ er $72\\,200 > 30\\,000$", "Nei — selskapet taper 30 000", "Ja, fordi marginalkostnaden er lav", "Nei — KO er lavere enn B"],
      explanation: "Optimum $p = 10$, $x = 760$; KO $= \\frac{1}{2}(200-10)\\cdot 760 = 72\\,200 > 30\\,000$. Lønnsom.",
    },
    {
      question: "Hva viser en betalingsmur på en nettavis samfunnsøkonomisk?",
      options: ["Et dødvektstap — lesere med positiv betalingsvillighet stenges ute uten kostnad for samfunnet", "En effektiv løsning", "Et samfunnsøkonomisk overskudd", "Ingen virkning"],
      explanation: "Muren gir mengde under optimum; trekanten mellom E og MK fra $x_M$ til $x_{\\text{opt}}$ er tapt verdi.",
    },
    {
      question: "Hva er reguleringstriaden for et naturlig monopol?",
      options: ["Makspris = MK, minstekvantum/leveringsplikt, eller subsidie som dekker B", "Skatt, subsidie og maksimalpris på et vanlig marked", "Forbud, avgift og kvote", "Kartell, fusjon og oppkjøp"],
      explanation: "Tre grep for å bringe mengden mot optimum; alle krever at underskuddet på $B$ finansieres.",
    },
  ],
  'econ1210-5-4': [
    {
      question: "Hva kjennetegner monopolistisk konkurranse?",
      options: ["Mange bedrifter med differensierte produkter og fri etablering", "Én selger uten konkurrenter", "Mange bedrifter med helt identiske produkter", "To store bedrifter som deler markedet"],
      explanation: "Differensierte produkter gir litt markedsmakt, men fri etablering presser profitten til null på lang sikt.",
    },
    {
      question: "Hvorfor har en bedrift i monopolistisk konkurranse litt markedsmakt?",
      options: ["Produktet er differensiert, så den mister ikke alle kundene ved litt høyere pris", "Den er eneste selger i markedet", "Den har lavest marginalkostnad", "Staten gir den enerett"],
      explanation: "Fordi produktene er litt ulike, beholder bedriften kundene som foretrekker akkurat dens variant — egen fallende E-kurve.",
    },
    {
      question: "Hva presser profitten til null i monopolistisk konkurranse på lang sikt?",
      options: ["Fri etablering — nye bedrifter kommer inn til profitten er borte", "Statlig prisregulering", "At marginalkostnaden stiger", "At produktene blir identiske"],
      explanation: "Profitt trekker inn nye bedrifter; E-kurven skifter inn og blir slakere til $p = \\text{GK}$ og profitten er null.",
    },
    {
      question: "I nullprofitt-likevekten i monopolistisk konkurranse gjelder:",
      options: ["$p = \\text{GK}$, men fortsatt $p > \\text{MK}$ (lite effektivitetstap består)", "$p = \\text{MK}$ (full effektivitet)", "$p < \\text{MK}$", "$p = \\text{GK} = \\text{MK}$"],
      explanation: "Fri etablering gir $p = \\text{GK}$ (null profitt), men markedsmakten holder $p$ over MK, så mengden er litt for lav.",
    },
    {
      question: "Betyr nullprofitt at monopolistisk konkurranse er effektiv som perfekt konkurranse?",
      options: ["Nei — prisen ligger fortsatt over marginalkostnaden, så et lite tap består", "Ja, nullprofitt betyr full effektivitet", "Ja, men bare på kort sikt", "Nei — det gir større tap enn monopol"],
      explanation: "Nullprofitt ($p = \\text{GK}$) er ikke det samme som $p = \\text{MK}$. Mengden er litt for lav; til gjengjeld får man variasjon.",
    },
    {
      question: "Hva er et kartell?",
      options: ["En avtale mellom uavhengige produsenter om å samordne pris/produksjon som ett monopol", "En enkelt bedrift med enerett fra staten", "Mange bedrifter i fri konkurranse", "En bedrift med fallende gjennomsnittskostnad"],
      explanation: "Kartellet lar små produsenter opptre som ett monopol: pris opp, mengde ned, dødvektstap.",
    },
    {
      question: "Hva skjer med pris og mengde når et kartell dannes?",
      options: ["Prisen opp, mengden ned (monopolutfallet)", "Prisen ned, mengden opp", "Både pris og mengde uendret", "Prisen ned, mengden ned"],
      explanation: "Ved å samordne seg opptrer produsentene som ett monopol — de begrenser mengden og hever prisen.",
    },
    {
      question: "Hvorfor er kartell forbudt etter konkurranseloven?",
      options: ["Det gir monopolutfall (høyere pris, lavere mengde, dødvektstap) uten effektivitetsgevinst", "Fordi det gir for lav pris til kundene", "Fordi det øker samfunnsøkonomisk overskudd", "Fordi det senker prisen under marginalkostnaden"],
      explanation: "Prissamarbeid skader forbrukerne som et monopol, uten den effektivitetsfordelen et naturlig monopol kan ha.",
    },
    {
      question: "Hvorfor er et kartell ustabilt?",
      options: ["Hvert medlem tjener på å bryte ut mens de andre holder den høye prisen", "Fordi staten hele tiden griper inn", "Fordi kostnadene alltid stiger", "Fordi kundene forhandler ned prisen"],
      explanation: "Fristelsen til å jukse (selge litt mer/billigere) undergraver avtalen — fangens dilemma-strukturen.",
    },
    {
      question: "Hva er broen fra kartellets ustabilitet til spillteorien?",
      options: ["Fangens dilemma: individuelt beste handling (jukse) gir dårligere utfall for kartellet samlet", "Nash-likevekten er alltid Pareto-optimal", "Kartellet er en koordineringslikevekt", "Kartellet har ingen kobling til spillteori"],
      explanation: "Å bryte ut er hvert medlems beste handling, men når alle gjør det ryker avtalen — akkurat fangens dilemma (kap. 7.2).",
    },
    {
      question: "Hvordan skiller monopolistisk konkurranse seg fra rent monopol?",
      options: ["Mange bedrifter og fri etablering gir null langsiktig profitt", "Prisen er lik marginalkostnaden", "Det finnes bare én selger", "Det er ingen markedsmakt i det hele tatt"],
      explanation: "Begge har $p > \\text{MK}$, men bare monopolet beholder profitten; fri etablering fjerner den i monopolistisk konkurranse.",
    },
    {
      question: "Testes Cournot- og Bertrand-modellene på ECON1210?",
      options: ["Nei — «oligopol» dekkes av kartell-som-monopol og fangens dilemma", "Ja, begge må utledes", "Ja, Cournot men ikke Bertrand", "Ja, som hovedtema i monopoldelen"],
      explanation: "De formelle oligopolmodellene er utenfor pensum; ikke bruk tid på utledninger.",
    },
    {
      question: "Hva er en gevinst ved differensieringen i monopolistisk konkurranse?",
      options: ["Forbrukerne får variasjon og valgmuligheter", "Prisen blir lik marginalkostnaden", "Profitten blir høyere på lang sikt", "Dødvektstapet forsvinner helt"],
      explanation: "Mangfoldet av ulike varianter (kafeer, merker) har verdi i seg selv og kan forsvare det lille effektivitetstapet.",
    },
    {
      question: "Hvem taper på et kartell?",
      options: ["Kjøperne — de betaler høyere pris og får mindre mengde", "Kartellmedlemmene", "Ingen taper", "Bare staten"],
      explanation: "Kjøperne taper (KO ned) mens kartellmedlemmene vinner på den høye prisen; nettotapet er dødvektstrekanten.",
    },
    {
      question: "Hva skjer med en bedrifts E-kurve når nye konkurrenter etablerer seg i monopolistisk konkurranse?",
      options: ["Den skifter inn og blir slakere (mer elastisk)", "Den skifter ut og blir brattere", "Den blir vertikal", "Den forsvinner helt"],
      explanation: "Nye bedrifter tar kunder (E skifter inn) og gir kundene flere alternativer (E blir slakere) til profitten er null.",
    },
  ],
  'econ1210-5-5': [
    {
      question: "Hva skal alltid stå først i en monopoloppgave?",
      options: ["MI-dekomponeringen (kvantums- og priseffekt)", "Velferdsregnskapet", "Reguleringsdrøftingen", "Konklusjonen"],
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
      options: ["Prisen blir for lav — tallet der MI = MK er marginalkostnaden, ikke prisen", "Mengden blir for høy", "Dødvektstapet blir null", "Ingenting, det er riktig"],
      explanation: "Feil #5: prisen leses av E-kurven ved $x_M$, ikke der MI = MK (det gir MK).",
    },
    {
      question: "Mellom hvilke kurver går dødvektstrekanten i monopoldrillen?",
      options: ["Mellom E-kurven og MK-linja, fra $x_M$ til $x_{\\text{opt}}$", "Mellom E-kurven og MI-kurven", "Mellom MI og MK", "Mellom prislinja og MK"],
      explanation: "Tapet er verdi som forsvinner fordi mengden er under $x_{\\text{opt}}$ — trekanten går mot E og MK, aldri mot MI.",
    },
    {
      question: "Et ferjemonopol har $x = 300 - 5p$ og $\\text{MK} = 40$. Hva er $x_M$ og $p_M$?",
      options: ["$x_M = 50$, $p_M = 50$", "$x_M = 50$, $p_M = 40$", "$x_M = 100$, $p_M = 50$", "$x_M = 25$, $p_M = 55$"],
      explanation: "$p = 60 - \\frac{1}{5}x$, MI $= 60 - \\frac{2}{5}x$. MI = MK: $x_M = 50$. Pris fra E: $p_M = 60 - 10 = 50$.",
    },
    {
      question: "Når er et naturlig monopol samfunnsøkonomisk lønnsomt?",
      options: ["Når konsumentoverskuddet ved $p = \\text{MK}$ overstiger den faste kostnaden (KO > B)", "Når selskapet går med overskudd ved $p = \\text{MK}$", "Alltid", "Når marginalkostnaden er høy"],
      explanation: "Ved $p = \\text{MK}$ er SO = KO; er denne verdien større enn $B$, er tjenesten verdt mer enn den koster å opprette.",
    },
    {
      question: "Hva gjør regulering av et naturlig monopol vanskelig?",
      options: ["Informasjonsproblemet — myndighetene kjenner ikke selskapets kostnader like godt", "At det ikke finnes reguleringsverktøy", "At etterspørselen er ukjent", "At marginalkostnaden er null"],
      explanation: "Selskapet kan overdrive kostnadene for å få høyere tillatt pris eller subsidie — informasjonsasymmetrien.",
    },
    {
      question: "Hvorfor er et kartell forbudt?",
      options: ["Det gir monopolutfall (pris opp, mengde ned, dødvektstap) uten effektivitetsgevinst", "Fordi det senker prisen for mye", "Fordi det øker samfunnsøkonomisk overskudd", "Fordi det gir null profitt"],
      explanation: "Prissamarbeid skader forbrukerne som et monopol; konkurranseloven forbyr det.",
    },
    {
      question: "Fem oppdrettere danner kartell: $x = 240 - 3p$, $\\text{MK} = 40$. Hva er kartellmengden $x_M$?",
      options: ["$x_M = 60$", "$x_M = 120$", "$x_M = 30$", "$x_M = 90$"],
      explanation: "$p = 80 - \\frac{1}{3}x$, MI $= 80 - \\frac{2}{3}x$. MI = MK: $\\frac{2}{3}x = 40 \\Rightarrow x_M = 60$ (mot frikonkurranse 120).",
    },
    {
      question: "Hva begrenser en monopolists markedsmakt?",
      options: ["En mer elastisk E-kurve — flere konkurrenter, substitutter, ny kabel, utløpt patent", "En brattere E-kurve", "Høyere marginalkostnad", "Færre konkurrenter"],
      explanation: "Mer elastisk E → priseffekten svir mer → mindre gap mellom pris og MK → mindre makt.",
    },
    {
      question: "En nettavis har $x = 90 - p$, $\\text{MK} = 0$, $B = 3\\,000$. Er driften lønnsom?",
      options: ["Ja — KO ved gratis tilgang er $4\\,050 > 3\\,000$", "Nei — selskapet taper penger", "Ja, uansett B", "Nei — KO er lavere enn B"],
      explanation: "Optimum $p = 0$, $x = 90$; KO $= \\frac{1}{2}\\cdot 90\\cdot 90 = 4\\,050 > 3\\,000$. Lønnsom.",
    },
    {
      question: "Hvorfor er et kartell vanskelig å holde?",
      options: ["Hvert medlem fristes til å bryte ut mens de andre holder den høye prisen", "Fordi staten hele tiden griper inn", "Fordi kostnadene stiger", "Fordi det gir for lav profitt"],
      explanation: "Fristelsen til å jukse undergraver avtalen (fangens dilemma, kap. 7.2), så karteller sprekker.",
    },
    {
      question: "Hva må et figursvar i monopoldrillen navngi?",
      options: ["Akser, E, MI (dobbelt så bratt), MK, $x_M$, $p_M$ (avlest på E) og dødvekttrekanten", "Bare E-kurven og prisen", "Bare MI og MK", "Bare monopolpunktet"],
      explanation: "Uten navngitte akser, kurver, punkter og trekant er svaret halvt (feil #12).",
    },
    {
      question: "Hvem må huskes i fordelingsdelen av en monopoloppgave?",
      options: ["Tredjepartene — andre selgere som også vinner på den høye prisen", "Bare kjøperne", "Bare monopolisten", "Bare staten"],
      explanation: "Å glemme tredjepartene er feil #11; andre selgere får den høye prisen uten selv å begrense mengden.",
    },
  ],
  'econ1210-6-1': [
    {
      question: "I arbeidsmarkedet: hva svarer «mengde» og «pris» til?",
      options: ["Sysselsetting $N$ og lønn $w$", "Pris $p$ og mengde $x$", "Kapital og rente", "Overskudd og skatt"],
      explanation: "Arbeidsmarkedet er et FK-marked der mengden er sysselsettingen $N$ og prisen er lønna $w$.",
    },
    {
      question: "Hvem etterspør og hvem tilbyr arbeidskraft i arbeidsmarkedet?",
      options: ["Bedriftene etterspør (E-kurven), arbeidstakerne tilbyr (T-kurven)", "Arbeidstakerne etterspør, bedriftene tilbyr", "Staten etterspør, bedriftene tilbyr", "Begge etterspør"],
      explanation: "Bedriftene er kjøperne av arbeid (fallende E-kurve); arbeidstakerne er selgerne (stigende T-kurve, arbeidstilbudet).",
    },
    {
      question: "Hva tilsvarer et anleggs enhetskostnad i arbeidsmarkedet?",
      options: ["Arbeidstakerens reservasjonslønn", "Arbeidsgiveravgiften", "Markedslønna", "Bedriftens overskudd"],
      explanation: "Hver arbeidstakers reservasjonslønn (laveste lønn de vil jobbe for) spiller samme rolle som et anleggs enhetskostnad: høyere markedslønn gjør flere villige.",
    },
    {
      question: "En lønnssubsidie til arbeidstakerne flytter arbeidstilbudet (T-kurven) hvordan?",
      options: ["Ned med nøyaktig $s$", "Opp med nøyaktig $s$", "Ingen retning", "Ned med $\\frac{c}{b+c}s$"],
      explanation: "Subsidien senker reservasjonslønna, så arbeidstilbudet skifter parallelt ned med hele $s$.",
    },
    {
      question: "En arbeidsgiveravgift $t$ på bedriftene flytter arbeidsetterspørselen (E-kurven) hvordan?",
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
      options: ["Lite — det meste lekker til arbeidsgiverne", "Alt — hele subsidien", "Nøyaktig halvparten", "Mer enn arbeidsgiverne"],
      explanation: "Slakt tilbud (stor $c$) betyr at arbeidstakers andel $\\frac{b}{b+c}$ er liten; tilstrømmingen presser lønna ned og gevinsten lekker til bedriftene.",
    },
    {
      question: "Hvem bærer mest av en lønnsskatt/-subsidie i arbeidsmarkedet?",
      options: ["Den minst prisfølsomme (bratteste) siden", "Den mest prisfølsomme siden", "Alltid arbeidsgiveren", "Alltid den skatten formelt legges på"],
      explanation: "Den siden som vanskeligst kan trekke seg ut (bratt kurve, lite prisfølsom) sitter igjen med størstedelen.",
    },
    {
      question: "Spiller det noen rolle om en lønnsskatt formelt legges på arbeidsgiver eller arbeidstaker?",
      options: ["Nei — helningene bestemmer delingen (ekvivalens)", "Ja — den som formelt betaler bærer alt", "Ja — arbeidstaker bærer alltid mest", "Bare hvis staten bestemmer"],
      explanation: "Ekvivalens: markedets helninger, ikke lovteksten, avgjør hvem som faktisk bærer avgiften.",
    },
    {
      question: "Ved et horisontalt (uendelig elastisk) arbeidstilbud tilfaller en lønnssubsidie:",
      options: ["Arbeidsgiverne fullt ut", "Arbeidstakerne fullt ut", "Staten", "Deles likt"],
      explanation: "Når $c \\to \\infty$ går arbeidstakers andel $\\frac{b}{b+c} \\to 0$; markedslønna presses ned med hele støtten, så arbeidsgiver får alt.",
    },
    {
      question: "Etter en lønnssubsidie $s$ er arbeidstakerens effektive lønn:",
      options: ["$w_1 + s$ (markedslønn pluss støtte)", "$w_1 - s$", "$w_1$", "$w^*$ (uendret)"],
      explanation: "Arbeidstakeren får markedslønna $w_1$ pluss subsidien $s$; markedslønna faller, men netto stiger med arbeidstakers andel av $s$.",
    },
    {
      question: "Etter en arbeidsgiveravgift $t$ er bedriftens totale lønnskostnad:",
      options: ["$w_1 + t$ (markedslønn pluss avgift)", "$w_1 - t$", "$w_1$", "$w^*$"],
      explanation: "Bedriften betaler markedslønna $w_1$ til arbeidstaker pluss $t$ til staten, altså $w_1 + t$ totalt per time.",
    },
    {
      question: "En minstelønn satt over likevektslønna svarer til hvilket inngrep fra varemarkedet?",
      options: ["En minstepris", "En maksimalpris", "En stykkskatt", "En subsidie"],
      explanation: "Minstelønn er en minstepris i arbeidsmarkedet: gir tilbudsoverskudd (arbeidsledighet), og omsatt mengde bestemmes av etterspørselen etter kortside-regelen.",
    },
    {
      question: "Hvorfor er arbeidsetterspørselen (E-kurven) fallende i lønna?",
      options: ["Verdien av det en ekstra arbeidstime produserer avtar på marginen", "Fordi arbeidstakerne blir late", "Fordi staten griper inn", "Fordi lønna alltid er fast"],
      explanation: "Jo høyere lønn, jo færre timer lønner det seg for bedriftene å kjøpe, siden marginalverdien av arbeidskraften avtar.",
    },
    {
      question: "En lønnssubsidie gir arbeidstakerne 1/4 av gevinsten. Hva sier det om arbeidstilbudet?",
      options: ["Det er slakt (prisfølsomt) relativt til etterspørselen", "Det er bratt (lite prisfølsomt)", "Det er vertikalt", "Det er uendret av lønn"],
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
      options: ["Ubestemt — de to effektene trekker hver sin vei", "Alltid mer arbeid", "Alltid mindre arbeid", "Alltid uendret"],
      explanation: "Substitusjonseffekten (mer) og inntektseffekten (mindre) trekker mot hverandre; hvilken som dominerer varierer.",
    },
    {
      question: "Hva er alternativkostnaden av en fritime?",
      options: ["Den tapte lønna man kunne tjent", "Prisen på en vare", "Skatten på lønn", "Ingenting — fritid er gratis"],
      explanation: "Alternativkostnaden er verdien av det nest beste bruket av tiden — her lønna man kunne tjent ved å jobbe.",
    },
    {
      question: "En tilbakebøyd arbeidstilbudskurve oppstår når:",
      options: ["Inntektseffekten dominerer ved høye lønninger", "Substitusjonseffekten alltid dominerer", "Lønna er fast", "Det er arbeidsledighet"],
      explanation: "Ved høye lønninger kan inntektseffekten overta, så høyere lønn gir mindre arbeid — kurven bøyer tilbake.",
    },
    {
      question: "En høytlønnet reduserer arbeidstiden etter en lønnsøkning. Hvilken effekt dominerer?",
      options: ["Inntektseffekten", "Substitusjonseffekten", "Ingen av dem", "Prisfølsomheten"],
      explanation: "Mindre arbeid ved høyere lønn betyr at inntektseffekten (råd til mer fritid) er sterkere enn substitusjonseffekten.",
    },
    {
      question: "Trenger arbeidstilbudsoppgaven om substitusjons-/inntektseffekt en figur på eksamen?",
      options: ["Nei — en verbal forklaring er alt som kreves", "Ja — alltid budsjettlinje og indifferenskurver", "Ja — et markedskryss", "Ja — en spillmatrise"],
      explanation: "Den verbale dekomponeringen er nivå 2 og besvares i ord; konsumentteori-figuren (nivå 3) hører til kap. 7.1.",
    },
    {
      question: "Ved en renteøkning er virkningen på sparingen:",
      options: ["Ubestemt — substitusjons- og inntektseffekt trekker hver sin vei", "Alltid mer sparing", "Alltid mindre sparing", "Alltid uendret"],
      explanation: "Substitusjon (sparing mer lønnsomt → mer) og inntekt (sparemålet nås lettere → mindre) trekker mot hverandre; samme struktur som arbeidstilbudet.",
    },
    {
      question: "Hvorfor blir fritid «dyrere» når lønna stiger?",
      options: ["Alternativkostnaden per fritime — den tapte lønna — stiger", "Fritid koster mer i butikken", "Skatten på fritid øker", "Fritid blir forbudt"],
      explanation: "Hver fritime betyr mer tapt lønn når lønna er høyere, så den relative kostnaden ved å ha fri stiger.",
    },
    {
      question: "Hvilket svar er en typisk feil på arbeidstilbudsoppgaven?",
      options: ["Å nevne bare én av de to effektene", "Å nevne begge effektene", "Å konkludere at nettoeffekten er ubestemt", "Å knytte substitusjon til alternativkostnad"],
      explanation: "Sensor vil se begge effektene navngitt; å nevne bare én (eller påstå en bestemt nettoeffekt uten grunnlag) gir ikke full uttelling.",
    },
  ],
  'econ1210-6-3': [
    {
      question: "En liten åpen økonomi er på verdensmarkedet:",
      options: ["Pristaker (tar verdensprisen som gitt)", "Prissetter", "Monopolist", "Uten handel"],
      explanation: "Den er for liten til å påvirke verdensprisen, så den tar verdensmarkedsprisen som gitt — akkurat som en pristaker i et FK-marked.",
    },
    {
      question: "Import blir aktuelt når verdensmarkedsprisen er:",
      options: ["Lavere enn autarkiprisen", "Høyere enn autarkiprisen", "Lik autarkiprisen", "Null"],
      explanation: "Er verdensprisen lavere enn den innenlandske likevektsprisen, lønner det seg å importere; innenlandsk pris presses ned til verdensprisen.",
    },
    {
      question: "Etter åpning for import, hva skjer med innenlandsk produksjon og forbruk?",
      options: ["Produksjon faller, forbruk øker", "Produksjon øker, forbruk faller", "Begge øker", "Begge faller"],
      explanation: "Lavere pris gjør at innenlandsk produksjon faller (T-kurven) og forbruket øker (E-kurven); differansen importeres.",
    },
    {
      question: "Ved åpning for import skjer det med samfunnsøkonomisk overskudd (SO):",
      options: ["Det stiger (gevinsttrekanten)", "Det faller", "Det er uendret", "Det blir negativt"],
      explanation: "KO stiger mer enn PO faller, så SO stiger netto — den samlede gevinsten er gevinsttrekanten.",
    },
    {
      question: "Hvem vinner og taper ved åpning for import?",
      options: ["Konsumentene vinner, produsentene taper", "Produsentene vinner, konsumentene taper", "Begge taper", "Begge vinner like mye"],
      explanation: "Lavere pris: konsumentene vinner (KO opp), produsentene taper (PO ned), men landet vinner samlet.",
    },
    {
      question: "Ved åpning for eksport (verdenspris over autarki), hva skjer med SO?",
      options: ["Det stiger (produsentenes gevinst > konsumentenes tap)", "Det faller", "Det er uendret", "Konsumentene vinner"],
      explanation: "Høyere pris: PO stiger, KO faller, men produsentenes gevinst overstiger konsumentenes tap, så SO stiger.",
    },
    {
      question: "Hvorfor senker en eksportrestriksjon SO?",
      options: ["De omdirigerte enhetenes betalingsvillighet er lavere enn verdensmarkedsprisen (alternativverdien)", "Fordi produsentene tjener mer", "Fordi importen øker", "Fordi prisen stiger"],
      explanation: "Å holde varer hjemme til lavere innenlandsk betalingsvillighet enn verdensprisen gir tapt eksportinntekt — alternativverdien overstiger den innenlandske verdien.",
    },
    {
      question: "Etter handelsåpning settes den innenlandske prisen:",
      options: ["Lik verdensmarkedsprisen", "Av det gamle innenlandske krysset", "Av produsentene", "Av staten fritt"],
      explanation: "Prisen bestemmes utenfra: innenlandsk pris blir lik verdensmarkedsprisen, og produksjon/forbruk leses av T og E ved den prisen.",
    },
    {
      question: "Hva driver gevinsten fra internasjonal handel?",
      options: ["Komparative fortrinn (ulik alternativkostnad)", "Absolutte fortrinn alene", "Like priser overalt", "Statlige subsidier"],
      explanation: "Land spesialiserer seg etter komparative (relative) fortrinn — lavest alternativkostnad — og bytter, så alle kan ende opp med mer.",
    },
    {
      question: "En vanlig feil i handelsoppgaven er å:",
      options: ["Konkludere med samlet tap fordi produsentene taper ved import", "Sette innenlandsk pris lik verdensprisen", "Lese produksjon av T ved verdensprisen", "Bruke gevinsttrekanten"],
      explanation: "Produsenttapet oppveies av kjøpernes større gevinst (gevinsttrekanten); landet vinner samlet ved import.",
    },
  ],
  'econ1210-7-1': [
    {
      question: "Hva viser budsjettlinja for to goder?",
      options: ["Alle kombinasjoner av de to godene forbrukeren akkurat har råd til", "Kombinasjonen som gir høyest nytte", "Alle kombinasjoner forbrukeren foretrekker likt", "Prisen på det ene godet som funksjon av det andre"],
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
      options: ["Den roterer innover om det loddrette endepunktet og blir brattere", "Den parallellskiftes innover", "Den roterer om det vannrette endepunktet", "Helningen blir slakere"],
      explanation: "Bare $x_1$-endepunktet ($M/p_1$) trekkes inn; $x_2$-endepunktet står stille. Linja roterer og blir brattere — ny helning $-p_1/p_2$ øker i tallverdi.",
    },
    {
      question: "Hvilken egenskap har IKKE en indifferenskurve i pensum?",
      options: ["Den kan krysse en annen indifferenskurve", "Den er fallende", "Den er konveks (buet mot origo)", "En kurve lenger fra origo er bedre"],
      explanation: "Indifferenskurver krysser ALDRI hverandre — et skjæringspunkt ville gitt to velferdsnivåer samtidig. De øvrige egenskapene stemmer.",
    },
    {
      question: "Hvor tilpasser forbrukeren seg optimalt?",
      options: ["Der den høyest oppnåelige indifferenskurven tangerer budsjettlinja", "Der budsjettlinja krysser en indifferenskurve", "På det loddrette endepunktet", "Der to indifferenskurver møtes"],
      explanation: "Optimum er tangeringspunktet: der er indifferenskurvens helning lik budsjettlinjas helning $-p_1/p_2$.",
    },
    {
      question: "Hva er substitusjonseffekten av en prisøkning på et gode?",
      options: ["Vridning bort fra det nå relativt dyrere godet, langs samme indifferenskurve", "Sprang til en lavere indifferenskurve fordi kjøpekraften faller", "En parallellforskyvning av budsjettlinja", "En økning i forbruket av det dyrere godet"],
      explanation: "Substitusjonseffekten er bevegelsen langs SAMME indifferenskurve (samme velferd) bort fra det relativt dyrere godet.",
    },
    {
      question: "Hva er inntektseffekten av en prisøkning på et gode?",
      options: ["Endringen i forbruket fordi den reelle kjøpekraften faller (sprang til lavere indifferenskurve)", "Vridningen langs samme indifferenskurve", "At helningen på indifferenskurven endres", "At budsjettlinja blir brattere"],
      explanation: "Inntektseffekten skyldes at pengene rekker til mindre — et sprang til en lavere indifferenskurve. Substitusjonseffekten er vridningen langs samme kurve.",
    },
    {
      question: "For et normalt gode: hvilken vei trekker substitusjons- og inntektseffekten forbruket ved en prisøkning?",
      options: ["Begge trekker forbruket av det dyrere godet ned", "Substitusjon ned, inntekt opp", "Begge trekker forbruket opp", "Ingen av dem påvirker forbruket"],
      explanation: "For et normalt gode peker begge effektene samme vei: forbruket av det dyrere godet faller.",
    },
    {
      question: "Hva slags algebra kreves for å løse konsumentteori-oppgaver på ECON1210?",
      options: ["Ingen nyttefunksjons-algebra — alt løses grafisk og verbalt", "Derivasjon av nyttefunksjonen", "Løsning av et likningssett med nytte", "Integrasjon av indifferenskurven"],
      explanation: "Nyttefunksjons-algebra testes aldri. Budsjettlinje (rett linje) og indifferenskurver (tegnet kvalitativt) er alt som trengs.",
    },
    {
      question: "En støtteordning gjør et gode billigere bare opp til en viss mengde. Hva skjer med budsjettlinja?",
      options: ["Den får en knekk: slakere der godet er subsidiert, brattere der full pris gjelder", "Den parallellskiftes utover", "Den blir en jevn, rett linje", "Den forsvinner"],
      explanation: "Ulik pris i to intervaller gir ulik helning — en knekk. Slak der prisen er lav, bratt der full pris gjelder.",
    },
    {
      question: "I sparemodellen (forbruk i dag mot neste år) — hva er bytteforholdet?",
      options: ["$(1+r)$: én spart krone i dag gir $(1+r)$ kroner neste år", "$r$ alene", "$1/r$", "$p_1/p_2$"],
      explanation: "Renta bestemmer bytteforholdet: sparer du én krone i dag, får du $(1+r)$ neste år. Det er «prisen» på forbruk i dag.",
    },
    {
      question: "Hvorfor er virkningen av en renteøkning på sparingen tvetydig for en som sparer?",
      options: ["Substitusjonseffekten trekker mot mer sparing, inntektseffekten mot mer forbruk i dag", "Fordi renta ikke påvirker budsjettlinja", "Fordi sparing alltid øker", "Fordi indifferenskurvene krysser"],
      explanation: "Framtidig forbruk blir relativt billigere (substitusjon → mer sparing), men spareren blir rikere (inntekt → mer forbruk i dag). Nettovirkningen er ubestemt.",
    },
    {
      question: "Hva menes med den relative prisen $p_1/p_2$?",
      options: ["Hvor mange enheter av gode 2 én enhet av gode 1 «koster» — markedets bytteforhold", "Den totale utgiften på gode 1", "Inntekten delt på prisen", "Forbrukerens nytte av gode 1"],
      explanation: "Den relative prisen er bytteforholdet mellom godene og bestemmer budsjettlinjas helning. En prisendring endrer den og driver substitusjonseffekten.",
    },
  ],
  'econ1210-7-2': [
    {
      question: "Hva består et spill av i denne boka?",
      options: ["Spillere, strategier og utfall (gevinster)", "Bare en tabell med tall", "Kun to spillere uten strategier", "En etterspørsels- og en tilbudskurve"],
      explanation: "Et spill har spillere (hvem velger), strategier (hva de kan velge) og utfall (gevinstene, avhengig av alles valg).",
    },
    {
      question: "I en 2×2-matrise: hva står FØRST i tallparet i en rute?",
      options: ["Radspillerens gevinst", "Kolonnespillerens gevinst", "Summen av gevinstene", "Den høyeste gevinsten"],
      explanation: "Konvensjonen er (radspillerens gevinst, kolonnespillerens gevinst). Radspiller først — feillest par gir feil Nash-likevekt.",
    },
    {
      question: "Hva er en Nash-likevekt?",
      options: ["Et utfall der ingen tjener på å endre valget sitt alene, gitt de andres valg", "Utfallet som er best for alle spillere", "Utfallet der begge samarbeider", "Ruten med høyest samlet gevinst"],
      explanation: "Nash: ingen angrer, gitt de andres valg. Det er ikke det samme som det beste felles utfallet (det er Pareto).",
    },
    {
      question: "Hvordan finner du radspillerens beste svar?",
      options: ["Se på det første tallet og velg beste rad i hver kolonne", "Se på det andre tallet i hver rad", "Summer begge tallene", "Velg alltid øverste rad"],
      explanation: "Radspiller ser på sitt eget (første) tall og finner beste rad for hver av motpartens kolonner. Kolonnespiller ser på andre tall, rad for rad.",
    },
    {
      question: "Hva er en dominerende strategi?",
      options: ["En strategi som gir høyest gevinst uansett hva motparten velger", "En strategi som bare virker mot samarbeid", "Strategien med lavest risiko", "Den strategien den andre velger"],
      explanation: "En dominerende strategi er beste svar uansett motpartens valg. Har begge en, er ruten der de møtes eneste Nash-likevekt.",
    },
    {
      question: "Hva kjennetegner fangens dilemma?",
      options: ["Nash-likevekten (begge bryter) er ikke Pareto-optimal — samarbeid ville vært bedre for begge", "Det finnes ingen Nash-likevekt", "Nash-likevekten er alltid det beste utfallet", "Begge spillere samarbeider i likevekt"],
      explanation: "I dilemmaet dominerer «bryt» for begge, så Nash blir at begge bryter — men et samarbeidsutfall er bedre for begge. Nash er altså ikke Pareto-optimal.",
    },
    {
      question: "Hva betyr det at et utfall er Pareto-optimalt?",
      options: ["Ingen kan få det bedre uten at noen andre får det verre", "Alle spillere har samme gevinst", "Det er en Nash-likevekt", "Summen av gevinstene er null"],
      explanation: "Pareto-optimalt = ingen forbedring mulig uten å skade noen. Nash spør «hva blir valgt?», Pareto «kan alle få det bedre?» — to ulike spørsmål.",
    },
    {
      question: "Hvorfor er et kartell (prissamarbeid) ustabilt?",
      options: ["Hver bedrift har en dominerende strategi om å underby de andre — et fangens dilemma", "Fordi myndighetene alltid oppdager det", "Fordi prisen uansett stiger", "Fordi bedriftene ikke tjener på høy pris"],
      explanation: "Selv om alle tjener mest på høy felles pris, frister hver til å underby (dominerende «kutt»). Egeninteressen driver dem mot konkurranse — derfor sprekker karteller.",
    },
    {
      question: "Hvordan kan samarbeid opprettholdes i et gjentatt spill?",
      options: ["Den som bryter kan straffes i senere runder (f.eks. tit-for-tat)", "Ved at reglene endres hver runde", "Ved at gevinstene dobles", "Ved at Nash-likevekten forsvinner"],
      explanation: "Når spillet gjentas, gjør trusselen om straff i framtidige runder svik dyrt. Tit-for-tat (start samarbeid, gjør så det motparten gjorde sist) kan stabilisere samarbeidet.",
    },
    {
      question: "Hvor mange Nash-likevekter kan et koordineringsspill ha?",
      options: ["To (hvert «enighetsutfall» er en Nash-likevekt)", "Ingen", "Alltid nøyaktig én", "Fire"],
      explanation: "I et koordineringsspill der begge tjener på å velge likt, er begge enighetsutfallene Nash-likevekter. Derfor må du sjekke alle ruter med beste-svar-metoden.",
    },
  ],
  'econ1210-7-3': [
    {
      question: "Hva er nåverdien av et beløp $y$ som kommer om $t$ år ved rente $r$?",
      options: ["$\\frac{y}{(1+r)^t}$", "$y(1+r)^t$", "$\\frac{y}{r}$", "$y-rt$"],
      explanation: "Nåverdien er $\\frac{y}{(1+r)^t}$ — hvor mye du må sette av i dag for å ha $y$ om $t$ år. Å gange med $\\frac{1}{(1+r)^t}$ kalles å diskontere.",
    },
    {
      question: "Hvorfor diskonterer vi fremtidige beløp?",
      options: ["Fordi en krone i dag kan plasseres til rente $r$ og er verdt mer enn en krone senere", "Fordi framtidige beløp alltid er usikre", "Fordi inflasjonen alltid er høy", "Fordi banker tar gebyr"],
      explanation: "En krone i dag kan forrentes, så den er verdt mer enn en krone senere. Renta er alternativkostnaden ved å binde pengene; diskontering gjør beløp sammenlignbare i dagens kroner.",
    },
    {
      question: "Hva er nåverdien av en evigvarende strøm på $y$ kroner per år ved rente $r$?",
      options: ["$\\frac{y}{r}$", "$\\frac{r}{y}$", "$y\\cdot r$", "$\\frac{y}{1+r}$"],
      explanation: "En evig strøm har nåverdi $\\frac{y}{r}$ — den formuen som ved rente $r$ gir akkurat $y$ i renteinntekt hvert år. Pass på å ikke snu brøken.",
    },
    {
      question: "Hva skjer med nåverdien av et fast fremtidig beløp når renta stiger?",
      options: ["Den blir lavere (hardere diskontering)", "Den blir høyere", "Den er uendret", "Den blir negativ"],
      explanation: "Høyere rente gir mindre diskonteringsfaktor, så nåverdien faller. Derfor kan et prosjekt som er lønnsomt ved lav rente bli ulønnsomt ved høyere rente.",
    },
    {
      question: "Når er et prosjekt lønnsomt etter nåverdikriteriet?",
      options: ["Når nåverdien av de fremtidige gevinstene overstiger kostnaden i dag", "Når gevinstene summerer til mer enn null udiskontert", "Når det varer lenge", "Når renta er lav"],
      explanation: "Lønnsomt = nåverdien av gevinstene > kostnaden i dag. Fordi høyere rente senker nåverdien, blir færre prosjekter lønnsomme jo høyere renta er.",
    },
    {
      question: "Hvordan finner du nåverdien av en betalingsrekke over flere år?",
      options: ["Diskonter hvert års beløp for seg og legg sammen", "Legg sammen alle beløpene udiskontert", "Diskonter bare det siste beløpet", "Del summen på antall år"],
      explanation: "Hvert års beløp diskonteres med sin egen faktor $\\frac{1}{(1+r)^t}$, og så summeres. Å summere udiskontert overvurderer prosjektet.",
    },
    {
      question: "Hva er en diskonteringsfaktor?",
      options: ["Tallet $\\frac{1}{(1+r)^t}$ som et fremtidig beløp ganges med", "Renta ganget med antall år", "Beløpet delt på renta", "Summen av alle beløp"],
      explanation: "Diskonteringsfaktoren $\\frac{1}{(1+r)^t}$ ligger mellom 0 og 1 og faller når $r$ eller $t$ øker. På eksamen oppgis den ofte i en tabell.",
    },
    {
      question: "En vanlig feil er å legge sammen fremtidige beløp uten å diskontere. Hva blir konsekvensen?",
      options: ["Prosjektet overvurderes (kroner på ulike tidspunkter behandles som like mye verdt)", "Prosjektet undervurderes", "Ingenting — det gir samme svar", "Nåverdien blir negativ"],
      explanation: "Uten diskontering teller framtidige kroner like mye som dagens, så nåverdien blir for høy og prosjektet ser bedre ut enn det er.",
    },
    {
      question: "Hva representerer renta i et lønnsomhetsregnestykke?",
      options: ["Alternativkostnaden — hva pengene ellers kunne gitt", "Statens skatteinntekt", "Prisen på godet", "Bedriftens faste kostnad"],
      explanation: "Renta er alternativkostnaden ved å binde pengene i prosjektet. Den fungerer som terskelen prosjektets gevinster må slå.",
    },
    {
      question: "Hva menes med pengers tidsverdi?",
      options: ["Samme kronebeløp er mer verdt jo tidligere du får det", "Penger taper alltid verdi over tid uansett rente", "At alle beløp er like mye verdt", "At sene beløp er verdt mer"],
      explanation: "Tidlige kroner kan forrentes lenger, så de er mer verdt. Dette er grunnen til at vi diskonterer og som regel foretrekker en utbetaling nå framfor samme beløp senere.",
    },
  ],
  'econ1210-8-1': [
    {
      question: "Hva er «malen» for et fullt oppgave 1-svar (sjanger A)?",
      options: ["Presis definisjon + figur der naturlig + konkret eksempel + pluss-markør", "Bare en presis definisjon", "En lang drøfting av fordeler og ulemper", "Definisjon + utregning av likevekten"],
      explanation: "Sjanger A honoreres for definisjon, figur der det er naturlig, ett konkret eksempel og pluss-markøren («det lille ekstra»).",
    },
    {
      question: "Pluss-markøren for samfunnsøkonomisk overskudd er at det kan beregnes:",
      options: ["for en hvilken som helst mengde uten å kjenne prisen", "bare i frikonkurranselikevekten", "bare når man kjenner både pris og mengde", "kun som KO + PO i alle situasjoner"],
      explanation: "SO = samlet betalingsvillighet minus samlede kostnader (arealet mellom E og T) og kan finnes for enhver mengde uten priser — nyansen fasitene har honorert tre år på rad.",
    },
    {
      question: "Høyden på markedets etterspørselskurve ved en gitt mengde er:",
      options: ["marginal betalingsvillighet for den siste enheten", "gjennomsnittsprisen i markedet", "marginalkostnaden ved siste enhet", "den samlede betalingsvilligheten"],
      explanation: "E-kurvens høyde = marginal betalingsvillighet — pluss-markøren for E-kurve-begrepet.",
    },
    {
      question: "Høyden på markedets tilbudskurve ved en gitt mengde er:",
      options: ["marginalkostnaden — enhetskostnaden i det dyreste anlegget i drift", "den gjennomsnittlige enhetskostnaden", "marginal betalingsvillighet", "selgernes samlede fortjeneste"],
      explanation: "I anleggsmodellen er T-kurvens høyde marginalkostnaden = enhetskostnaden i det dyreste anlegget som er i drift.",
    },
    {
      question: "Et fullt svar på «hva er et kollektivt gode» nevner at godet er:",
      options: ["både ikke-rivaliserende og ikke-ekskluderbart", "kun ikke-ekskluderbart", "kun ikke-rivaliserende", "rivaliserende men ikke-ekskluderbart"],
      explanation: "Toppsvaret nevner begge egenskapene. (Et rivaliserende, ikke-ekskluderbart gode er derimot en fellesressurs.)",
    },
    {
      question: "Hvorfor tilbyr markedet for lite av et kollektivt gode?",
      options: ["Gratispassasjer-problemet: ingen kan stenges ute, så alle lar andre betale", "Fordi godet er for dyrt å produsere", "Fordi etterspørselen alltid er uelastisk", "Fordi produsentene har markedsmakt"],
      explanation: "Når ingen kan stenges ute, lønner det seg å la andre betale — den uttrykte betalingsviljen blir for lav, og private tilbyr for lite.",
    },
    {
      question: "En ekstern virkning er en kostnad eller nytte som:",
      options: ["påføres en tredjepart uten kompensasjon gjennom en pris", "alltid rammer produsenten selv", "kun oppstår i monopolmarkeder", "alltid gir for lav produksjon"],
      explanation: "Eksternalitet = virkning på tredjepart som ikke går via en pris. Negativ → for mye produseres; positiv → for lite.",
    },
    {
      question: "Hvorfor er monopolets marginalinntekt lavere enn prisen?",
      options: ["Prisfallet for å selge mer gjelder alle enhetene, ikke bare den siste (priseffekten)", "Fordi monopolet har høyere kostnader", "Fordi monopolet betaler skatt", "Fordi prisen leses av MI-kurven"],
      explanation: "MI = kvantumseffekt (+) minus priseffekt (−); priseffekten (lavere pris på alle enheter) trekker MI under prisen.",
    },
    {
      question: "Ved monopolets tilpasning finner man mengden der MI = MK og leser prisen av:",
      options: ["på E-kurven ved monopolmengden", "på MI-kurven ved monopolmengden", "på MK-kurven", "midt mellom E og MI"],
      explanation: "Prisen leses alltid av E-kurven, aldri MI-kurven (feilkatalog #5). MI brukes bare til å finne mengden.",
    },
    {
      question: "SO = KO + PO gjelder:",
      options: ["kun uten skatt, subsidie eller eksternaliteter", "alltid, uansett inngrep", "bare i monopolmarkeder", "bare ved en bindende makspris"],
      explanation: "Med skatt kommer statens inntekt i tillegg (SO = KO + PO + skatteinntekt). Å definere SO som «KO + PO i likevekt» uten mer er feilkatalog #9.",
    },
    {
      question: "En elastisitet oppgitt uten verbal tolkning i et begrepssvar:",
      options: ["gir trekk — tall skal alltid tolkes med ord (feilkatalog #6)", "er alltid tilstrekkelig", "er bare et problem ved elastisitet over 1", "teller som pluss-markør"],
      explanation: "Tolkningsplikten: «når prisen øker 1 %, endres mengden med |ε| %.» Et bart tall gir ikke full uttelling.",
    },
    {
      question: "Konsumentoverskudd (KO) er arealet:",
      options: ["mellom E-kurven og prisen", "mellom prisen og T-kurven", "under hele E-kurven", "mellom E- og T-kurven"],
      explanation: "KO = betalingsvillighet minus det kjøperne faktisk betaler = arealet mellom E-kurven og prisen. (Arealet mellom pris og T er PO.)",
    },
    {
      question: "En fellesressurs skiller seg fra et kollektivt gode ved at den er:",
      options: ["rivaliserende, men ikke-ekskluderbar (fører til overforbruk)", "ikke-rivaliserende og ikke-ekskluderbar", "både rivaliserende og ekskluderbar", "alltid offentlig finansiert"],
      explanation: "Fellesressurs = rivaliserende + ikke-ekskluderbar → allmenningens tragedie (overforbruk). Kollektivt gode er ikke-rivaliserende og underforsynes.",
    },
    {
      question: "En Nash-likevekt er et strategipar der:",
      options: ["ingen spiller kan tjene på å endre strategi alene", "begge alltid får sitt beste utfall", "utfallet alltid er Pareto-optimalt", "spillerne samarbeider åpent"],
      explanation: "Nash: ingen kan forbedre seg ved å endre strategi alene. Den trenger ikke være Pareto-optimal — jf. fangens dilemma.",
    },
    {
      question: "Nåverdien av en betaling y om t år, med rente r, er:",
      options: ["$\\frac{y}{(1+r)^t}$", "$y\\cdot(1+r)^t$", "$\\frac{y}{r}$", "$y\\cdot t\\cdot r$"],
      explanation: "NV = y/(1+r)^t (evigvarende strøm: y/r). Diskontering fordi renta er alternativkostnaden ved å binde penger.",
    },
  ],
  'econ1210-8-2': [
    {
      question: "Et nyhetsbilde om at sabotasje har slått ut produksjonsanlegg oversettes til:",
      options: ["T-kurven inn + lekkasje-poenget", "T-kurven opp (parallellskift)", "E-kurven ut", "en stykksubsidie"],
      explanation: "Anlegg ut av drift = T inn (sjanger D). Omsetningen faller mindre enn bortfallet fordi høyere pris gjør flere anlegg lønnsomme (lekkasjen).",
    },
    {
      question: "«Dyrere lønn, energi eller strengere sikkerhetskrav for alle produsenter» oversettes til:",
      options: ["T-kurven opp (enhetskostnaden øker i hvert anlegg)", "T-kurven inn (anlegg forsvinner)", "E-kurven ned", "en makspris"],
      explanation: "En kostnadsøkning på alle anlegg gir et parallelt T-skift opp — ikke inn, som er kapasitetsbortfall.",
    },
    {
      question: "«Myndighetene setter en øvre grense på strømprisen godt under markedspris» er:",
      options: ["en maksimalpris — omsatt mengde bestemmes av kortside-regelen", "en stykkskatt på selgerne", "et tilbudsskift innover", "en minstepris"],
      explanation: "Bindende pristak → etterspørselsoverskudd; omsatt mengde = tilbudt mengde (kortsiden), og mangelen må rasjoneres.",
    },
    {
      question: "«Staten gjør et gode billigere for folk med et tilskudd per solgt enhet» er en subsidie — hvilken felle bør nevnes?",
      options: ["Subsidie-paradokset: SO faller uten markedssvikt, selv om KO og PO øker", "At subsidien alltid øker SO", "At subsidien er en makspris", "At T-kurven flytter opp"],
      explanation: "Uten markedssvikt gir subsidien et paradoks-tap. Med positiv eksternalitet kan den likevel være riktig — nevn hvilken situasjon som gjelder.",
    },
    {
      question: "«Hvordan kan utslippene kuttes billigst mulig?» ber om:",
      options: ["trekriterie-rammen: avgift vs. omsettelige kvoter vs. direkte regulering", "en ren moralsk drøfting av klimaansvar", "monopolpakken", "kortside-regelen"],
      explanation: "Lik pris på utslipp → like marginale rensekostnader → billigst kutt. Sjanger H, trekriterie-rammen fra kap. 4.4.",
    },
    {
      question: "«Ett enerådende selskap uten konkurrenter» oversettes til:",
      options: ["monopolpakken: mengde fra MI = MK, pris fra E-kurven", "frikonkurranse med mange pristakere", "en fellesressurs", "et arbeidsmarked"],
      explanation: "Enerett = monopol (sjanger I). Prisen leses av E-kurven ved monopolmengden, aldri av MI-kurven.",
    },
    {
      question: "Den vanligste feilen når casen er uvant, er å:",
      options: ["la innpakningen lede mot moralsk essay i stedet for modellgrepet", "regne ferdig for raskt", "bruke for mange figurer", "alltid velge monopol"],
      explanation: "Sensor vil ha modellgrepet (kurve, skift, velferd) først; den normative drøftingen kommer på toppen, ikke i stedet.",
    },
    {
      question: "Argumentet «produsentene tjener godt, så prisen bør tvinges ned» er feil fordi:",
      options: ["høy profitt er et fordelingspoeng; effektiv pris krever pris = marginalkostnad", "produsentoverskudd aldri kan eksistere i modellen", "produsentene aldri tjener penger", "prisen alltid skal være null"],
      explanation: "At selskapene tjener godt (stort produsentoverskudd) er fordeling, ikke effektivitet. Riktig mengde krever pris lik marginalkostnaden — et pristak under markedsprisen gir mangel og dødvektstap.",
    },
    {
      question: "«Energiprisene steg, og staten innførte samtidig en støtteordning» bør analyseres som:",
      options: ["to grep i rekkefølge: kostnadssjokk (T opp) og subsidie (T ned)", "ett samlet skift", "bare en subsidie", "bare en kostnadsøkning"],
      explanation: "Én hendelse kan skjule to grep. Analyser kostnadssjokket og støtten hver for seg, ikke som ett skift.",
    },
    {
      question: "Kjernebudskapet i aktualitetstreningen er at:",
      options: ["innpakningen er ny hvert år, men grepene er de samme", "hvert år krever en helt ny modell", "aktuelle caser ikke kan analyseres med pensum", "man alltid skal svare med et moralsk essay"],
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
      options: ["$\\frac{c}{b+c} = \\frac{2}{5}$ — kjøperne bærer minst fordi etterspørselen er mest prisfølsom", "$\\frac{b}{b+c} = \\frac{3}{5}$ — kjøperne bærer mest fordi de betaler prisen", "Alltid $\\frac{1}{2}$ — avgiften deles alltid likt", "Hele avgiften, fordi den er lagt på selgerne"],
      explanation: "Kjøpers andel er $\\frac{c}{b+c} = \\frac{2}{5}$. Den minst prisfølsomme (bratteste) siden bærer mest; her er tilbudet minst prisfølsomt ($c=2<b=3$), så selgerne bærer $\\frac{3}{5}$ og kjøperne bare $\\frac{2}{5}$.",
    },
    {
      question: "I øvingssettets monopol er E: $x = 240 - 2p$ (invers $p = 120 - \\tfrac{1}{2}x$, så $\\text{MI} = 120 - x$) og $\\text{MK} = 40$. Hvilken mengde og pris velger monopolet?",
      options: ["$x_M = 80$ (fra MI = MK), $p_M = 80$ lest av E-kurven", "$x_M = 80$, $p_M = 40$ lest av MI-kurven", "$x_M = 160$, $p_M = 40$ (der E krysser MK)", "$x_M = 120$, $p_M = 60$"],
      explanation: "MI = MK gir $120 - x = 40 \\Rightarrow x_M = 80$. Prisen leses av E-kurven (ikke MI-kurven — feilkatalog #5): $p_M = 120 - \\tfrac{1}{2}\\cdot 80 = 80$. Å lese prisen av MI gir feilaktig 40.",
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
      options: ["p₁ = 140 og nettopris 170 (T ned med s, deling ⅓ til kjøper, ⅔ til selger)", "p₁ = 170 og nettopris 140 (T opp med s)", "p₁ = 135 og nettopris 165 (deling ½/½)", "p₁ = 150 og nettopris 150 (subsidien endrer ingenting)"],
      explanation: "Subsidie skifter T NED med s: selger tilbyr ut fra p+30, x = 2(p+30)−100 = 2p−40. Likevekt 800−4p = 2p−40 gir p₁ = 140, x₁ = 240, nettopris = 140+30 = 170. Kontroll: 2·170−100 = 240. ✓ Alt. 2 flytter T feil vei (feilkode #2). Alt. 3 antar lik deling, men b = 4 ≠ c = 2. Alt. 4 overser at subsidien senker prisen.",
    },
    {
      question: "I samme marked deles subsidien slik at kjøperne bare får ⅓. Hvorfor får kjøperne en så liten andel?",
      options: ["Fordi tilbudet er minst prisfølsomt (c = 2 < b = 4) — den bratteste, minst prisfølsomme siden får mest", "Fordi subsidien formelt gis til selgerne, ikke til kjøperne", "Fordi staten bestemmer at selgerne skal få mest", "Fordi kjøperne har lav betalingsvillighet i utgangspunktet"],
      explanation: "Delingen styres av kurvenes helninger: kjøpers andel = c/(b+c) = 2/6 = ⅓. Den minst prisfølsomme siden (her tilbudet, c = 2 < b = 4) henger igjen i prisen og får/bærer mest. Alt. 2 er «hvem betaler formelt»-fellen (#3): hvem subsidien gis til, spiller ingen rolle. Alt. 3 og 4 er feil — delingen er ren helningsgeometri.",
    },
    {
      question: "En subsidie i et velfungerende marked gir høyere KO OG høyere PO. Hvorfor faller likevel samfunnsøkonomisk overskudd?",
      options: ["Statens utlegg overstiger den samlede KO+PO-gevinsten; for merenhetene er betalingsvilligheten lavere enn kostnaden", "SO faller ikke — når både KO og PO stiger, øker SO", "Fordi prisen stiger og kjøperne taper på det", "Fordi selgerne alltid taper på en subsidie"],
      explanation: "Subsidie-paradokset (karakterskillet, feilkode #4): I eksemplet er utlegget 7 200, mens KO-gevinst (2 200) + PO-gevinst (4 400) = 6 600. Differansen 600 er dødvektstapet. Subsidien presser mengden over den effektive; for merenhetene er kjøpernes betalingsvillighet lavere enn produksjonskostnaden — verdi ødelegges. Alt. 2 er nettopp fellen #4. Alt. 3/4 er faktisk gale (prisen faller, selgerne tjener).",
    },
    {
      question: "Anlegg settes ut av drift, T skifter inn fra x = 2p−100 til x = 2p−280. Anleggsbortfallet ved gammel pris er 180 tonn, men omsatt mengde faller bare 120 tonn. Hva forklarer forskjellen?",
      options: ["Lekkasjen: prisøkningen gjør tidligere ulønnsomme anlegg lønnsomme igjen, så de kommer inn og demper mengdefallet", "En regnefeil — mengdefallet skal være nøyaktig like stort som bortfallet", "At etterspørselen også falt samtidig", "At subsidien kompenserte for bortfallet"],
      explanation: "Lekkasje-poenget (feilkode #8): bortfallet måles horisontalt ved gammel pris p₀ = 150 (200 − 20 = 180 tonn). Faktisk mengdefall er 200 − 80 = 120 tonn. Differansen (60 tonn) skyldes at den høyere prisen (150→180) gjør tidligere ulønnsomme anlegg lønnsomme. Derfor faller omsatt mengde MINDRE enn produksjonsbortfallet. Alt. 2 er selve fellen. Alt. 3/4 innfører noe oppgaven ikke sier.",
    },
    {
      question: "Utslippskvoter deles ut GRATIS i stedet for å auksjoneres. Hva blir konsekvensen for kostnadseffektiviteten og for «forurenser betaler»?",
      options: ["Kostnadseffektiviteten er upåvirket (alternativkostnaden ved å bruke kvoten er kvoteprisen uansett); gratistildeling avgjør fordelingen og bryter «forurenser betaler»", "Gratis tildeling ødelegger kostnadseffektiviteten fordi bedriftene da renser mindre", "Gratis tildeling gjør at målet ikke lenger nås", "Gratis tildeling gir både lavere kostnadseffektivitet og mer statlige inntekter"],
      explanation: "Også en gratis kvote har alternativkostnad lik kvoteprisen (bedriften kan selge den), så hver bedrift renser like mye uansett — de marginale rensekostnadene utjevnes likt (kostnadseffektiviteten er intakt). Gratistildeling avgjør fordelingen og bryter «forurenser betaler» (staten mister auksjonsinntekten). Alt. 2 er gratiskvote-fellen. Alt. 3 er feil (kvotetaket, ikke tildelingen, bestemmer måloppnåelsen). Alt. 4 er selvmotsigende (gratis gir INGEN inntekter).",
    },
  ],
  'econ1210-8-5': [
    {
      question: "Ved en bindende maksimalpris (under likevektsprisen) bestemmes omsatt mengde av …",
      options: ["tilbudet — kortside-regelen: omsatt mengde = min(tilbudt, etterspurt), og ingen kan tvinges til å selge", "etterspørselen, siden det er et etterspørselsoverskudd", "maksprisen selv, avlest rett på prisaksen", "gjennomsnittet av tilbudt og etterspurt mengde"],
      explanation: "Ved makspris under likevekt er tilbudt mengde mindre enn etterspurt. Siden ingen kan tvinges til å produsere med tap, er tilbudet den korte siden, og omsatt mengde = tilbudt mengde. Å lese mengden av E-kurven (etterspørselen) er nettopp feilkatalog #7 (glemt kortside-regelen).",
    },
    {
      question: "Når en storm slår ut lønnsomme kraftverk, faller omsatt mengde MINDRE enn produksjonsbortfallet fordi …",
      options: ["den høyere prisen gjør tidligere ulønnsomme anlegg lønnsomme, så de kommer inn og demper mengdefallet (lekkasjen)", "etterspørselen alltid faller like mye som tilbudet", "prisen holder seg uendret når anlegg faller bort", "bortfallet måles langs E-kurven, ikke T-kurven"],
      explanation: "Lekkasje-poenget (feilkatalog #8 å glemme): bortfallet måles horisontalt ved gammel pris, men den nye, høyere likevektsprisen trekker inn anlegg som før var ulønnsomme. Derfor faller omsetningen mindre enn selve produksjonsbortfallet. I settets tall: bortfall 200 GWh, men mengdefall bare 100 GWh.",
    },
    {
      question: "Tilbudskurven er helt horisontal (uendelig prisfølsomt tilbud, c → ∞). Hvem bærer en avgift t lagt på produsentene?",
      options: ["Kjøperne bærer hele avgiften, fordi kjøpers andel c/(b+c) → 1 når c → ∞", "Selgerne bærer hele avgiften, siden den er lagt på dem", "Byrden deles alltid likt (halvparten hver)", "Ingen bærer avgiften; prisen er upåvirket"],
      explanation: "Kjøpers andel av en avgift er c/(b+c). En horisontal T-kurve betyr c → ∞, så andelen går mot 1 — kjøperne bærer alt, og selgernes nettopris er uendret. At avgiften «legges på» produsentene, spiller ingen rolle (feilkatalog #3). Den minst prisfølsomme siden bærer mest; her er tilbudet det mest prisfølsomme, så det bærer ingenting.",
    },
    {
      question: "Hvorfor gir handel med omsettelige utslippskvoter det samlede kuttet til lavest mulig kostnad?",
      options: ["Hver bedrift renser til marginal rensekostnad = kvoteprisen, så alle får lik marginalkostnad og de billigste kuttene tas først", "Fordi alle bedrifter tvinges til å kutte like mye hver", "Fordi kvoteprisen fastsettes politisk uavhengig av bedriftenes rensekostnader", "Fordi betalingen mellom bedriftene er en samfunnsøkonomisk besparelse i seg selv"],
      explanation: "Kjerneargumentet: en felles kvotepris får alle til å rense til samme marginale rensekostnad. Bedrifter som renser billig, kutter mye og selger kvoter; dyre bedrifter kjøper kvoter i stedet for å rense. De billigste kuttene tas først → billigst samlet kutt. Betalingen mellom bedriftene er en overføring, ikke en reell besparelse (besparelsen er de dyre kuttene som slippes).",
    },
    {
      question: "Svekker GRATIS tildeling av utslippskvoter kostnadseffektiviteten sammenlignet med auksjon?",
      options: ["Nei — en gratis kvote har alternativkostnad lik kvoteprisen, så bedriftene tilpasser seg likt; tildelingen avgjør fordeling og «forurenser betaler», ikke kostnadseffektiviteten", "Ja, gratis kvoter gjør bedriftene late så marginalkostnadene blir ulike", "Ja, fordi målet (utslippstaket) ikke lenger nås ved gratis tildeling", "Nei, fordi gratis tildeling er det eneste som får forurenseren til å betale"],
      explanation: "Den vanligste toppsjikt-fellen: å tro at gratis kvoter ødelegger kostnadseffektiviteten. Selv en gratis kvote har alternativkostnad = kvoteprisen (bruker du den selv, kan du ikke selge den), så tilpasningen — og dermed kostnadseffektiviteten og måloppnåelsen — er lik for gratis og auksjon. Forskjellen ligger i «forurenser betaler» og fordelingen av kvoteverdien.",
    },
  ],
};

export default quizData_econ1210;
