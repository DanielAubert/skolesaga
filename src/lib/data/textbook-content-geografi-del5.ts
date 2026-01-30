import type { TextbookChapter } from '@/lib/types/textbook';

/** Tekstbok innhold for Geografi VG1 - Del 5
 * Kapittel 21-25: Globalisering, geopolitikk og metode
 */

// ============================================================================
// KAPITTEL 21: Globalisering og handel
// ============================================================================

export const CHAPTER_GEOGRAFI_21: TextbookChapter = {
  id: 'geografi-1-21',
  courseId: 'geografi',
  chapterNumber: '21',
  title: 'Globalisering og handel',
  description: 'Laer om globalisering, internasjonal handel og globale verdikjeder.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og drøfte globalisering og internasjonal handel med ulike perspektiver',
  ],
  content: [
    {
      id: 'geografi-1-21-intro',
      type: 'text',
      content: `## Hva er globalisering?

Globalisering er prosessen der verden blir stadig mer sammenkoblet gjennom handel, kommunikasjon, transport og kulturutveksling. Dette har akselerert kraftig de siste tiårene.

**Dimensjoner av globalisering:**
- Økonomisk: Internasjonal handel, investeringer, globale selskaper
- Kulturell: Ideer, musikk, mat, mote spres over landegrenser
- Politisk: Internasjonale organisasjoner og avtaler
- Teknologisk: Internett, sosiale medier, digital kommunikasjon

**Drivkrefter:**
- Transportteknologi (containerskip, fly)
- Kommunikasjonsteknologi (internett, mobiltelefon)
- Politiske beslutninger (frihandelsavtaler, deregulering)
- Økonomiske insentiver (tilgang til markeder, lavere kostnader)

**Historisk perspektiv:**
Globalisering er ikke nytt - silkeveien og kolonitiden var tidligere former. Men dagens globalisering er langt mer omfattende og rask.`,
    },
    {
      id: 'geografi-1-21-def-1',
      type: 'definition',
      title: 'Internasjonal handel',
      content: `**Grunnleggende begreper:**

*Eksport:*
Varer og tjenester som selges til andre land. Norges viktigste eksportvarer er olje/gass, fisk, metaller og tjenester.

*Import:*
Varer og tjenester som kjøpes fra andre land. Norge importerer mye mat, maskiner, elektronikk og klær.

*Handelsbalanse:*
Forskjellen mellom eksport og import. Norge har vanligvis handelsoverskudd takket være olje/gass.

*Handelsavtaler:*
- WTO: Verdens handelsorganisasjon med globale regler
- EØS: Norges avtale med EU om det indre marked
- Frihandelsavtaler: Bilaterale avtaler som reduserer toll

**Hvorfor handler land med hverandre?**

*Klassisk teori (komparative fortrinn):*
Land bør spesialisere seg på det de produserer relativt mest effektivt. Et land kan ha fordel av handel selv om det er mindre effektivt på alt.

*Andre forklaringer:*
- Tilgang til ressurser som ikke finnes hjemme
- Stordriftsfordeler ved større markeder
- Teknologioverføring og læring
- Forbrukere får større utvalg`,
    },
    {
      id: 'geografi-1-21-def-2',
      type: 'definition',
      title: 'Globale verdikjeder',
      content: `**Hva er en global verdikjede?**

En global verdikjede beskriver hvordan produksjonen av en vare er fordelt over flere land. Hver del av produksjonsprosessen skjer der det er mest lønnsomt.

**Eksempel: Smarttelefon**
- Design: USA (Apple) eller Sør-Korea (Samsung)
- Prosessorer: Taiwan (TSMC)
- Skjerm: Sør-Korea, Japan
- Batterier: Kina, Japan
- Mineraler: Kongo (kobolt), Australia (litium)
- Montering: Kina, Vietnam, India
- Salg: Hele verden

**Kjennetegn:**
- Fragmentert produksjon over mange land
- Koordinert av store multinasjonale selskaper
- Avhengig av effektiv transport og kommunikasjon
- Just-in-time leveranser minimerer lagerkostnader

**Utviklingsland i verdikjeder:**
Mange utviklingsland har fått økonomisk vekst gjennom deltakelse i verdikjeder, særlig i arbeidsintensiv produksjon som tekstiler og elektronikkmontering. Det er debatt om dette er bra eller dårlig for utviklingen.`,
    },
    {
      id: 'geografi-1-21-def-3',
      type: 'definition',
      title: 'Ulike perspektiver på globalisering',
      content: `**Positive argumenter:**

*Økonomisk vekst:*
- Hundrevis av millioner løftet ut av fattigdom (særlig i Asia)
- Lavere priser på forbruksvarer
- Økt produktivitet gjennom spesialisering
- Teknologi og kunnskap spres raskere

*Sosiale fordeler:*
- Kulturutveksling og forståelse
- Menneskerettigheter spres
- Lettere å reise og kommunisere

**Kritiske argumenter:**

*Økonomiske utfordringer:*
- Økende ulikhet innad i land
- Arbeidsplasser flyttes til lavkostland
- "Kappløp mot bunnen" i skatter og standarder
- Finansiell ustabilitet kan spre seg raskt

*Andre bekymringer:*
- Miljøbelastning fra transport
- Kulturell homogenisering
- Demokratisk underskudd i internasjonale organisasjoner

**Balansert vurdering:**
De fleste økonomer mener globalisering totalt sett har vært positiv for verdensøkonomien, men at gevinstene er ujevnt fordelt. Utfordringen er å fordele gevinstene bedre og håndtere negative konsekvenser.`,
    },
    {
      id: 'geografi-1-21-example-1',
      type: 'example',
      title: 'Eksempel: Kinas økonomiske utvikling',
      problem: `Kina har hatt enorm økonomisk vekst de siste 40 årene. Hvordan henger dette sammen med globalisering?`,
      solution: `**Kinas integrasjon i verdensøkonomien:**

1. **Åpning fra 1978:** Deng Xiaoping startet økonomiske reformer og åpnet for utenlandske investeringer

2. **Eksportorientert vekst:**
   - Spesialiserte seg på arbeidsintensiv produksjon
   - Ble "verdens fabrikk" for tekstiler, leker, elektronikk
   - Lave lønninger tiltrakk multinasjonale selskaper

3. **WTO-medlemskap 2001:**
   - Ga tilgang til vestlige markeder
   - Økte utenlandske investeringer dramatisk

4. **Resultater:**
   - BNP per innbygger økt fra 300 til over 10 000 dollar
   - Over 800 millioner løftet ut av ekstrem fattigdom
   - Nå verdens nest største økonomi

**Ulike syn på Kinas utvikling:**
- Tilhengere: Bevis på at globalisering virker
- Kritikere: Lave lønninger, dårlige arbeidsforhold, miljøproblemer
- Nyansert: Stor fremgang, men også betydelige kostnader`,
    },
    {
      id: 'geografi-1-21-text-mnc',
      type: 'text',
      content: `## Multinasjonale selskaper

Multinasjonale selskaper (MNC) opererer i mange land samtidig. De er sentrale drivkrefter i globaliseringen og har enorm økonomisk og politisk innflytelse.

**Største MNC-er:** Apple, Amazon, Samsung, Toyota omsetter mer enn mange lands BNP.

**Hvordan de opererer:**
- Etablerer produksjon der kostnadene er lavest
- Selger i markeder med mest kjøpekraft
- Bruker internprising og skattepolitikk

**Debatt om MNC-er:**
*Positive effekter:* Arbeidsplasser, teknologioverføring, infrastruktur
*Negative effekter:* Skatteunndragelse, utnytting av arbeidskraft, miljøbelastning
*Maktspørsmål:* Noen MNC-er har mer økonomisk makt enn stater`,
    },
    {
      id: 'geografi-1-21-def-4',
      type: 'definition',
      title: 'Kulturell globalisering',
      content: `**Homogenisering vs. hybridisering:**

*Kulturell homogenisering:*
Kulturer blir likere over hele verden. Vestlig (særlig amerikansk) kultur dominerer gjennom film, musikk, mat og mote. Noen frykter at lokale kulturer forsvinner.

*McDonaldization:*
Sosiolog George Ritzer brukte begrepet om spredningen av rasjonelle, standardiserte systemer (effektivitet, forutsigbarhet, kontroll) til alle deler av samfunnet.

*Hybridisering:*
Kulturer blander seg og skaper nye uttrykk. Bollywood kombinerer indisk og vestlig filmtradisjon. Japansk anime har blitt global kultur.

*Glokalisering:*
Globale produkter tilpasses lokale markeder. McDonald's serverer teriyaki-burger i Japan og McAloo Tikki i India. K-pop blander koreansk og vestlig musikkstil og har blitt et globalt fenomen.

**Kulturimperialisme-debatten:**
Noen argumenterer for at globalisering er en form for kulturimperialisme der vestlig kultur påtvinges resten av verden. Andre mener at kulturutveksling er gjensidig, og at ikke-vestlige kulturer også påvirker Vesten (yoga, sushi, K-pop).`,
    },
    {
      id: 'geografi-1-21-text-handel-miljo',
      type: 'text',
      content: `## Handel og miljø

Globaliseringen av handel har store miljøkonsekvenser som er gjenstand for debatt.

**Karbonfotavtrykk fra transport:**
Internasjonal skipsfart og flyfrakt står for en betydelig del av globale klimagassutslipp. En vare som fraktes fra Kina til Norge kan ha reist 15 000 km.

**Food miles:**
Begrepet beskriver avstanden maten reiser fra produsent til forbruker. Norske jordbær på sommeren har lave food miles, mens importerte jordbær fra Spania om vinteren har høye.

**Virtuelt vann:**
Mengden vann som brukes i produksjonen av en vare. Å importere en t-skjorte fra bomull betyr å importere ca. 2700 liter virtuelt vann. Land med vannmangel eksporterer ofte store mengder virtuelt vann.

**«Race to the bottom»:**
Konkurranse mellom land kan føre til at miljøstandarder senkes for å tiltrekke investeringer. Land med svake miljøregler kan bli «forurensningsparadiser».

**Fair trade:**
Merkeordning som sikrer at produsenter i utviklingsland får en rettferdig pris og at miljøstandarder overholdes. Kritikere mener fair trade bare hjelper en liten andel av produsenter og kan forstyrre markedsmekanismer.`,
    },
    {
      id: 'geografi-1-21-def-5',
      type: 'definition',
      title: 'WTO og handelsregimer',
      content: `**WTO (Verdens handelsorganisasjon):**

*Rolle:*
Regulerer internasjonal handel mellom 164 medlemsland. Setter regler for toll, subsidier og handelshindre.

*MFN-prinsippet (Most Favoured Nation):*
Et land må gi alle WTO-medlemmer like gode handelsvilkår som det gir sitt mest favoriserte handelspartner. Unntak for regionale handelsavtaler.

*Doha-runden:*
Forhandlingsrunde startet i 2001 for å forbedre utviklingslands markedstilgang. Har i praksis stoppet opp på grunn av uenighet mellom rike og fattige land.

*Kritikk av WTO:*
- Dominert av rike land
- Miljøhensyn nedprioriteres
- Tvisteløsningssystemet har vært blokkert

**Regionale handelsavtaler:**
- **EU:** Verdens mest integrerte handelsblokk med felles marked og tollunion
- **USMCA:** USA, Mexico, Canada (erstatter NAFTA)
- **RCEP:** Regionalt handelspartnerskap i Asia-Stillehavsregionen (inkl. Kina)
- **Norges EØS-avtale:** Gir tilgang til EUs indre marked uten fullt EU-medlemskap. Innebærer fri bevegelse av varer, tjenester, kapital og personer.`,
    },
    {
      id: 'geografi-1-21-tip-1',
      type: 'tip',
      title: 'Kobling til andre kapitler',
      content: `**Globalisering og handel** henger tett sammen med flere andre temaer i denne boka:

**Kapittel 22 (Utviklingsgeografi):** Globaliseringens konsekvenser for fattige land — hvem vinner og hvem taper?

**Kapittel 10 (Ressursforvaltning):** Hvordan global handel påvirker ressursbruk og bærekraft.

Bruk kunnskapen fra dette kapittelet når du drøfter utviklingsspørsmål og ressursforvaltning.`,
    },
    {
      id: 'geografi-1-21-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-21-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva globalisering er og beskriv minst tre dimensjoner av globalisering med eksempler.',
        hints: ['Tenk på økonomisk, kulturell, politisk og teknologisk globalisering'],
        solution: 'Globalisering er prosessen der verden blir mer sammenkoblet. Økonomisk: Varer produseres i ett land og selges over hele verden (f.eks. iPhone). Kulturell: Musikk, mat og mote spres globalt (K-pop, sushi). Politisk: Internasjonale organisasjoner som FN og WTO. Teknologisk: Internett og sosiale medier kobler mennesker på tvers av landegrenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-21-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-21-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv den globale verdikjeden for et klesplagg fra bomull til ferdig produkt i butikk.',
        hints: ['Tenk på råvarer, spinning, veving, sying, transport, salg'],
        solution: 'Bomull dyrkes i USA, India eller Kina. Spinnes til tråd i Pakistan eller Bangladesh. Veves til stoff i Kina eller Vietnam. Sys til ferdig plagg i Bangladesh eller Kambodsja. Transporteres med skip til Europa. Selges i butikker i Norge. Hver del av prosessen skjer der det er billigst eller mest effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-21-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-21-ex-3',
        number: '3',
        type: 'classic',
        task: 'Presenter argumenter for og mot frihandel. Hvilke grupper vinner og taper på økt handel?',
        hints: ['Tenk på forbrukere, arbeidere, bedrifter, utviklingsland'],
        solution: 'For frihandel: Lavere priser for forbrukere, økonomisk vekst, spesialisering øker effektivitet, teknologioverføring. Mot frihandel: Arbeidsplasser flyttes, økt ulikhet, miljøbelastning, sårbarhet for kriser. Vinnere: Forbrukere (billigere varer), eksportbedrifter, arbeidere i vekstland. Tapere: Arbeidere i industrier som utkonkurreres, lokale produsenter som møter hard konkurranse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-21-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-21-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan påvirker globalisering Norge? Gi eksempler på positive og negative konsekvenser.',
        hints: ['Tenk på handel, arbeidsmarked, kultur, miljø'],
        solution: 'Positive: Norge tjener stort på eksport av olje, gass og fisk. Forbrukere får tilgang til billige varer og stort utvalg. Kulturelt mangfold. Teknologisk utvikling. Negative: Industri har flyttet ut. Konkurranse fra lavkostland. Økt reising påvirker miljøet. Sårbarhet vist under pandemien (mangel på beskyttelsesutstyr). Arbeidsinnvandring skaper både muligheter og utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-21-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-21-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft påstanden: "Globalisering har vært bra for verden totalt sett." Presenter ulike perspektiver.',
        hints: ['Bruk fakta om fattigdomsreduksjon, men også om ulikhet og miljø'],
        solution: 'For: Hundrevis av millioner ut av fattigdom (særlig Kina og Asia), økt levestandard globalt, bedre helse og utdanning, teknologispredning. Mot: Økt ulikhet innad i mange land, miljøbelastning fra transport og produksjon, finanskriser sprer seg lettere, kulturell homogenisering. Balansert syn: De fleste økonomer mener totaleffekten er positiv, men gevinstene er ujevnt fordelt. Utfordringen er å sikre at flere får del i gevinstene og håndtere negative konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-21-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-21-mc-1',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — globalisering og handel:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med komparative fortrinn?',
            solution: 'At land bør spesialisere seg på det de produserer relativt mest effektivt',
            multipleChoiceOptions: ['At det største landet alltid vinner i handel', 'At land bør spesialisere seg på det de produserer relativt mest effektivt', 'At alle land bør produsere alt selv', 'At kun rike land kan drive handel'],
          },
          {
            label: 'b',
            task: 'Hva er WTOs viktigste rolle?',
            solution: 'Å regulere internasjonal handel mellom medlemsland',
            multipleChoiceOptions: ['Å gi bistand til fattige land', 'Å regulere internasjonal handel mellom medlemsland', 'Å bestemme valutakurser', 'Å kontrollere multinasjonale selskaper'],
          },
          {
            label: 'c',
            task: 'Hva betyr glokalisering?',
            solution: 'At globale produkter tilpasses lokale markeder',
            multipleChoiceOptions: ['At lokale produkter blir globale', 'At globale produkter tilpasses lokale markeder', 'At globaliseringen stopper opp', 'At lokal kultur forsvinner helt'],
          },
        ],
        solution: 'a) At land bør spesialisere seg på det de produserer relativt mest effektivt, b) Å regulere internasjonal handel mellom medlemsland, c) At globale produkter tilpasses lokale markeder',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 22: Utviklingsgeografi
// ============================================================================

export const CHAPTER_GEOGRAFI_22: TextbookChapter = {
  id: 'geografi-1-22',
  courseId: 'geografi',
  chapterNumber: '22',
  title: 'Utviklingsgeografi',
  description: 'Laer om maling av utvikling, fattigdom og ulikhet, og ulike forklaringer og perspektiver.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og drøfte årsaker til og konsekvenser av fattigdom og ulikhet globalt',
  ],
  content: [
    {
      id: 'geografi-1-22-intro',
      type: 'text',
      content: `## Hva er utvikling?

Utvikling handler om å forbedre menneskers livskvalitet og muligheter. Men hva som er "god utvikling" og hvordan man måler det, er omdiskutert.

**Ulike dimensjoner:**
- Økonomisk: Inntekt, produksjon, levestandard
- Sosial: Helse, utdanning, likestilling
- Politisk: Demokrati, menneskerettigheter, styresett
- Miljømessig: Bærekraftig ressursbruk

**Terminologi:**
Begrepene vi bruker om land med ulik utviklingsgrad har endret seg:
- "Utviklingsland" / "Industriland" (tradisjonelt)
- "Lavinntektsland" / "Høyinntektsland" (Verdensbanken)
- "Det globale sør" / "Det globale nord" (nyere, men kritisert)

Ingen begreper er perfekte - alle forenkler en kompleks virkelighet.`,
    },
    {
      id: 'geografi-1-22-def-1',
      type: 'definition',
      title: 'Mål på utvikling',
      content: `**BNP per innbygger:**

*Definisjon:*
Bruttonasjonalprodukt delt på befolkningen. Måler gjennomsnittlig økonomisk produksjon per person.

*Styrker:*
- Lett å måle og sammenligne
- Data finnes for nesten alle land
- Korrelerer med mange goder (helse, utdanning)

*Svakheter:*
- Fanger ikke fordeling - et land kan ha høyt gjennomsnitt med enorm ulikhet
- Ignorerer ubetalt arbeid (husarbeid, omsorg)
- Teller ikke miljøkostnader
- Sier lite om livskvalitet

**HDI (Human Development Index):**

*Definisjon:*
FNs indeks som kombinerer tre dimensjoner:
1. Helse: Forventet levealder ved fødsel
2. Utdanning: Forventet og gjennomsnittlig antall skoleår
3. Levestandard: BNP per innbygger (justert)

*Styrker:*
- Bredere enn bare økonomi
- Viser at utvikling er mer enn penger

*Svakheter:*
- Fortsatt begrenset - fanger ikke demokrati, miljø, likestilling
- Nasjonal gjennomsnitt skjuler lokale forskjeller

**Andre indikatorer:**
- Gini-koeffisient (ulikhet)
- MPI (flerdimensjonal fattigdomsindeks)
- Happy Planet Index (livstilfredshet og miljø)`,
    },
    {
      id: 'geografi-1-22-def-2',
      type: 'definition',
      title: 'Fattigdom og ulikhet',
      content: `**Absolutt fattigdom:**
Lever under en fast inntektsgrense. Verdensbankens grense er 2,15 dollar per dag (ekstrem fattigdom).

- Ca. 700 millioner mennesker lever i ekstrem fattigdom (2023)
- Stor nedgang fra 1,9 milliarder i 1990
- Mest konsentrert i Afrika sør for Sahara

**Relativ fattigdom:**
Har vesentlig mindre enn det normale i samfunnet man lever i. I Norge: Under 60% av medianinntekten.

**Global ulikhet:**
- De 10% rikeste eier over 75% av verdens formue
- De 50% fattigste eier under 2%
- Ulikhet mellom land har gått ned (pga. Kina, India)
- Ulikhet innad i mange land har økt

**Fattigdomsfeller:**
Selvforsterkende sirkler som holder mennesker i fattigdom:
- Ingen utdanning → dårlig jobb → ikke råd til utdanning for barn
- Sykdom → kan ikke jobbe → ingen penger til helse
- Ingen kapital → kan ikke investere → forblir fattig`,
    },
    {
      id: 'geografi-1-22-def-3',
      type: 'definition',
      title: 'Ulike forklaringer på fattigdom',
      content: `**Det finnes mange teorier om hvorfor noen land er fattige. Her presenteres de viktigste perspektivene:**

**1. Geografiske forklaringer:**
- Klima (tropisk sykdomsbyrde, dårlig jordbruksland)
- Mangel på ressurser eller vanskelig tilgjengelighet
- Innlandsposisjon uten havtilgang

**2. Historiske forklaringer:**
- Kolonialismens arv (ressursutbytting, kunstige grenser)
- Slaveri og tvangsarbeid
- Ugunstige handelsstrukturer etablert historisk

**3. Institusjonelle forklaringer:**
- Dårlig styresett og korrupsjon
- Svake rettssystemer og eiendomsrettigheter
- Politisk ustabilitet og konflikter

**4. Internasjonale strukturer:**
- Urettferdige handelsregler
- Gjeldsbyrde
- Skatteparadiser som tapper ressurser

**Viktig å merke:**
Det er faglig debatt om hvilke faktorer som er viktigst. De fleste forskere mener flere faktorer samvirker, og at ulike land har ulike utfordringer. Enkle forklaringer som legger all skyld på ett forhold er sjelden tilstrekkelige.`,
    },
    {
      id: 'geografi-1-22-def-4',
      type: 'definition',
      title: 'Bistand - ulike syn',
      content: `**Hva er bistand?**
Overføring av ressurser fra rike til fattige land. Norge gir ca. 1% av BNI i bistand årlig.

**Typer bistand:**
- Nødhjelp (ved katastrofer)
- Utviklingsbistand (langsiktig)
- Humanitær bistand (konfliktområder)
- Teknisk bistand (kompetanseoverføring)

**Argumenter for bistand:**
- Moralsk plikt til å hjelpe
- Har reddet millioner av liv (vaksiner, nødhjelp)
- Investering i utdanning og helse gir avkastning
- Noen land har utviklet seg med bistandsstøtte (f.eks. Sør-Korea, Botswana)

**Kritiske argumenter:**
- Kan skape avhengighet
- Kan underminere lokalt næringsliv
- Kan støtte opp om korrupte regimer
- Effekten er vanskelig å måle

**Nyansert syn:**
- Type bistand og mottakerland påvirker effekten
- Nødhjelp er nødvendig ved kriser
- Langsiktig bistand krever god forvaltning
- Bistand alene løser ikke strukturelle problemer
- Handelspolitikk, klima og konflikthåndtering er også viktig

**Konklusjon:**
Det er bred enighet om at bistand kan hjelpe, men det er debatt om omfang, innretning og alternativer.`,
    },
    {
      id: 'geografi-1-22-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av utviklingsnivå',
      problem: `Sammenlign Norge og Nigeria på utviklingsindikatorer og drøft hva forskjellene skyldes.`,
      solution: `**Statistikk (ca. 2023):**

| Indikator | Norge | Nigeria |
|-----------|-------|---------|
| BNP per innbygger | 90 000 USD | 2 000 USD |
| HDI | 0,96 (1. plass) | 0,54 (163. plass) |
| Forventet levealder | 83 år | 53 år |
| Barnedødelighet | 2 per 1000 | 72 per 1000 |

**Mulige forklaringer (ulike perspektiver):**

*Historiske:*
- Norge unngikk kolonisering; Nigeria var britisk koloni til 1960
- Kunstige grenser skapte etniske konflikter

*Ressurser:*
- Begge har olje, men Norge forvalter den bedre (Oljefondet)
- Nigeria har hatt "ressursforbannelse"

*Institusjonelle:*
- Norge har sterke institusjoner bygget over lang tid
- Nigeria har slitt med korrupsjon og militærkupp

*Klima/geografi:*
- Nigeria har tropisk sykdomsbyrde (malaria)
- Høy befolkningsvekst utfordrer utvikling

**Konklusjon:** Årsakene er sammensatte og omdiskuterte.`,
    },
    {
      id: 'geografi-1-22-text-utviklingsteorier',
      type: 'text',
      content: `## Utviklingsteorier

Flere teoretiske rammeverk forsøker å forklare hvorfor noen land er rike og andre fattige, og hvordan utvikling skjer.

**Rostows moderniseringsteori (1960):**
Walt Rostow mente alle samfunn gjennomgår fem stadier:
1. **Tradisjonelt samfunn:** Jordbruksbasert, lav produktivitet
2. **Forutsetninger for take-off:** Utdanning, infrastruktur, handel begynner
3. **Take-off:** Rask industrialisering, investeringer øker
4. **Modning:** Teknologisk fremgang, diversifisert økonomi
5. **Masseforbruk:** Høy levestandard, tjenesteøkonomi

*Kritikk:* Antok at alle land følger samme utviklingsvei. Ignorerer historiske maktforhold, kolonialisme og ulike utgangspunkt.

**Avhengighetsteori (Frank, 1960-tallet):**
Andre Gunder Frank argumenterte for at fattige land er fattige *på grunn av* rike land. Kolonialisme og urettferdig handel har skapt en kjerne (rike land) som utnytter en periferi (fattige land). Utvikling for noen betyr underutvikling for andre.

**Verdenssystemteori (Wallerstein, 1974):**
Immanuel Wallerstein delte verden i kjerne, semi-periferi og periferi. Kjernen dominerer gjennom kontroll over teknologi og kapital. Semi-periferien (f.eks. Brasil, India) har trekk fra begge.

**Post-utvikling:**
Kritiserer hele utviklingsbegrepet som vestlig påtvunget. Mener lokale løsninger og mangfold bør verdsettes fremfor å kopiere vestlig modell.`,
    },
    {
      id: 'geografi-1-22-def-5',
      type: 'definition',
      title: 'Mikrofinans og grasrotutvikling',
      content: `**Hva er mikrofinans?**
Små lån til fattige mennesker som ikke har tilgang til vanlige banktjenester. Muhammad Yunus grunnla Grameen Bank i Bangladesh i 1983 og mottok Nobels fredspris i 2006.

**Hvordan det fungerer:**
- Små lån (ofte under 200 dollar) gis til grupper, særlig kvinner
- Gruppemedlemmene støtter hverandre og garanterer for hverandre
- Tilbakebetalingsraten er høy (over 95%)
- Lånene brukes til småbedrifter: symaskiner, høner, grønnsaker

**Suksesser:**
- Har gitt millioner av fattige tilgang til kapital
- Styrker kvinner økonomisk og sosialt
- Fremmer entreprenørskap og selvstendighet

**Kritikk:**
- Rentenivået kan være høyt
- Noen låntakere havner i gjeldsfeller
- Løser ikke strukturelle årsaker til fattigdom
- Begrenset effekt på de aller fattigste

**Bottom-up vs. top-down utvikling:**
*Top-down:* Store prosjekter styrt ovenfra (regjeringer, Verdensbanken). Eksempel: Bygging av demninger, motorveier.
*Bottom-up:* Lokalsamfunnet styrer selv. Eksempel: Mikrofinans, kooperativer, lokale helsearbeidere.
De fleste eksperter mener begge tilnærminger trengs, men at bottom-up sikrer bedre lokal forankring.`,
    },
    {
      id: 'geografi-1-22-text-korrupsjon',
      type: 'text',
      content: `## Korrupsjon og utvikling

Korrupsjon er misbruk av offentlig makt for privat vinning. Det er en av de mest diskuterte hindringene for utvikling.

**Transparency International:**
Utgir årlig en korrupsjonsindeks (CPI) som rangerer land etter opplevd korrupsjon. Danmark, Finland og New Zealand scorer best. Somalia, Sør-Sudan og Syria scorer dårligst. Norge ligger vanligvis blant topp 10.

**Hvordan korrupsjon hindrer utvikling:**
- Penger som skulle gå til helse og utdanning forsvinner
- Svekker tilliten til staten og rettssystemet
- Skremmer bort utenlandske investorer
- Øker kostnader for næringsliv og innbyggere
- Forvitrer demokratiske institusjoner

**Debatt om årsaker:**
*Institusjonelt perspektiv:* Svake institusjoner og manglende kontrollmekanismer muliggjør korrupsjon. Løsningen er bedre lovverk, uavhengig rettsvesen og frie medier.

*Strukturelt perspektiv:* Fattigdom og ressursmangel driver korrupsjon. Dårlig betalte offentlige ansatte fristes til bestikkelser. Løsningen er økonomisk utvikling.

*Kulturelt perspektiv:* Noen mener korrupsjon er kulturelt betinget. Denne forklaringen er kontroversiell og kan undervurdere strukturelle faktorer.

**Viktig nyanse:** Korrupsjon finnes i alle land og kulturer, men omfanget varierer. Enkle forklaringer er sjelden tilstrekkelige.`,
    },
    {
      id: 'geografi-1-22-def-6',
      type: 'definition',
      title: 'Klimarettferdighet',
      content: `**Hvem forårsaket — hvem rammes?**
Rike industriland har stått for mesteparten av historiske klimagassutslipp, men fattige land rammes hardest av klimaendringene.

**Historiske utslipp:**
- USA, EU og andre industriland har sluppet ut mest CO₂ totalt
- Kina har i dag størst årlige utslipp, men langt lavere per innbygger enn USA
- Afrikanske land har bidratt minst, men er mest sårbare

**Tilpasning (adaptation):**
Fattige land har minst ressurser til å tilpasse seg: bygge flomsikring, utvikle tørkeresistent jordbruk, flytte befolkning fra utsatte områder.

**Klimafinansiering:**
Rike land har lovet å bidra med 100 milliarder dollar årlig til klimatiltak i utviklingsland. Målet har vært vanskelig å nå, og det er debatt om hva som regnes som klimafinansiering.

**Loss and Damage:**
Konseptet om at rike land bør kompensere fattige land for skader som allerede har skjedd. Et fond ble opprettet på COP27 i 2022, men det er uenighet om omfang og finansiering.

**Ulike perspektiver:**
*Rettferdighetsperspektiv:* Rike land har et historisk ansvar og bør betale mest.
*Realpolitisk perspektiv:* Alle land må bidra, inkludert store utslippsland som Kina og India.
*Utviklingsperspektiv:* Fattige land har rett til økonomisk vekst og kan ikke holdes ansvarlig for andres historiske utslipp.`,
    },
    {
      id: 'geografi-1-22-tip-1',
      type: 'tip',
      title: 'Kobling til andre kapitler',
      content: `**Utviklingsgeografi** bygger på kunnskap fra flere andre kapitler:

**Kapittel 10 (Ressursforvaltning):** Hvordan naturressurser forvaltes påvirker utvikling direkte — «ressursforbannelsen» er et sentralt eksempel.

**Kapittel 4 (Klima og klimaendringer):** Klimarettferdighet kobler klima og utvikling — hvem forårsaket problemet, og hvem rammes hardest?

Bruk disse sammenhengene i drøftingsoppgaver om global utvikling.`,
    },
    {
      id: 'geografi-1-22-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-22-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom BNP per innbygger og HDI som mål på utvikling. Hva er styrker og svakheter ved hvert mål?',
        hints: ['Tenk på hva som måles og hva som ikke fanges opp'],
        solution: 'BNP per innbygger måler kun økonomisk produksjon i gjennomsnitt. Styrke: Lett å måle. Svakhet: Ignorerer fordeling, helse, utdanning, miljø. HDI kombinerer forventet levealder, utdanning og inntekt. Styrke: Bredere perspektiv på utvikling. Svakhet: Fanger fortsatt ikke alt (demokrati, likestilling, miljø), og nasjonale gjennomsnitt skjuler lokale forskjeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-22-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-22-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv tre ulike forklaringer på hvorfor noen land er fattigere enn andre. Presenter ulike perspektiver på hver forklaring.',
        hints: ['Tenk på geografi, historie, institusjoner, internasjonale forhold'],
        solution: 'Geografiske: Tropisk klima gir sykdommer og dårligere jordbruk. Men Singapore og Hong Kong er rike tross tropisk beliggenhet. Historiske: Kolonialisme utbyttet ressurser og etterlot dårlige strukturer. Men noen eks-kolonier har utviklet seg bra. Institusjonelle: Korrupsjon og dårlig styresett hindrer utvikling. Men hva kom først - fattigdom eller dårlige institusjoner? Hver forklaring har noe for seg, men ingen forklarer alt alene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-22-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-22-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en fattigdomsfelle? Gi et eksempel og forklar hvordan den kan brytes.',
        hints: ['Tenk på selvforsterkende sirkler som holder mennesker i fattigdom'],
        solution: 'Fattigdomsfelle er en selvforsterkende sirkel. Eksempel: Fattig familie har ikke råd til skolegang → barnet får ikke utdanning → får dårlig betalt jobb som voksen → har ikke råd til skolegang for egne barn. Kan brytes gjennom: Gratis skolegang, stipender, skolemåltider som gjør det lønnsomt å sende barn på skole. Mikrolån kan hjelpe med kapital. Helseprogrammer bryter sykdomsfeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-22-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-22-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft argumenter for og mot bistand. Gi eksempler på ulike typer bistand og vurder effekten.',
        hints: ['Tenk på nødhjelp, utviklingsbistand, vilkår for effekt'],
        solution: 'For: Moralsk plikt, har reddet liv (vaksiner halverte barnedødelighet), noen suksesshistorier (Sør-Korea, Botswana). Mot: Kan skape avhengighet, underminere lokalt næringsliv, ende hos korrupte. Typer: Nødhjelp er viktig ved katastrofer, vanskelig å kritisere. Utviklingsbistand krever god forvaltning og lokalt eierskap. Effekten avhenger av type bistand, mottakerland og hvordan den gis. De fleste mener bistand kan virke under riktige betingelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-22-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-22-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg et lavinntektsland og analyser: Hva er utviklingsnivået? Hva er de viktigste utfordringene og mulighetene? Hvilke tiltak kan bidra til utvikling?',
        hints: ['Bruk statistikk fra FN eller Verdensbanken. Vurder flere perspektiver.'],
        solution: 'Svar bør inneholde: 1) Landets HDI, BNP per innbygger og andre indikatorer. 2) Historisk bakgrunn (kolonitid, konflikter). 3) Hovedutfordringer (fattigdom, helse, utdanning, klima, styresett). 4) Ressurser og muligheter. 5) Tiltak: Investering i utdanning og helse, bedre styresett, infrastruktur, markedstilgang. Vis at det er ulike syn på hva som er viktigst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-22-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-22-mc-1',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — utviklingsgeografi:',
        subTasks: [
          {
            label: 'a',
            task: 'Ifølge Rostows moderniseringsteori, hva er det tredje stadiet i utviklingen?',
            solution: 'Take-off med rask industrialisering',
            multipleChoiceOptions: ['Masseforbruk', 'Tradisjonelt samfunn', 'Take-off med rask industrialisering', 'Modning med teknologisk fremgang'],
          },
          {
            label: 'b',
            task: 'Hva måler Gini-koeffisienten?',
            solution: 'Graden av økonomisk ulikhet i et land',
            multipleChoiceOptions: ['Bruttonasjonalprodukt per innbygger', 'Graden av økonomisk ulikhet i et land', 'Forventet levealder ved fødsel', 'Korrupsjonsnivået i et land'],
          },
          {
            label: 'c',
            task: 'Hva er hovedideen bak mikrofinans?',
            solution: 'Å gi små lån til fattige mennesker uten tilgang til vanlige banktjenester',
            multipleChoiceOptions: ['Å gi store lån til regjeringer i utviklingsland', 'Å gi små lån til fattige mennesker uten tilgang til vanlige banktjenester', 'Å investere i aksjer i utviklingsland', 'Å samle inn penger til nødhjelp'],
          },
        ],
        solution: 'a) Take-off med rask industrialisering, b) Graden av økonomisk ulikhet i et land, c) Å gi små lån til fattige mennesker uten tilgang til vanlige banktjenester',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 23: Geopolitikk
// ============================================================================

export const CHAPTER_GEOGRAFI_23: TextbookChapter = {
  id: 'geografi-1-23',
  courseId: 'geografi',
  chapterNumber: '23',
  title: 'Geopolitikk',
  description: 'Laer om geopolitikk, grenser og territorier, ressurskonflikter og Norges posisjon.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og drøfte geopolitiske forhold og interessemotsetninger',
  ],
  content: [
    {
      id: 'geografi-1-23-intro',
      type: 'text',
      content: `## Hva er geopolitikk?

Geopolitikk handler om forholdet mellom geografi og politikk - hvordan geografiske forhold påvirker maktforhold mellom stater.

**Sentrale temaer:**
- Territorier og grenser
- Kontroll over ressurser
- Strategiske beliggenheter
- Regionale maktbalanser

**Hvorfor er geografi viktig?**
- Naturressurser gir økonomisk og politisk makt
- Beliggenhet påvirker handel og sikkerhet
- Klima og terreng former samfunn
- Grenser skaper konflikter eller samarbeid

**Geopolitikk i endring:**
- Tradisjonelt fokus på landområder og militær makt
- Økt fokus på havområder, cyberspace, rommet
- Klimaendringer skaper nye utfordringer
- Økonomisk makt like viktig som militær`,
    },
    {
      id: 'geografi-1-23-def-1',
      type: 'definition',
      title: 'Grenser og territorier',
      content: `**Statsgrenser:**

*Naturlige grenser:*
- Elver (Rhinen, Donau)
- Fjellkjeder (Himalaya, Pyreneene)
- Hav og innsjøer

*Kunstige grenser:*
- Kolonimaktenes linjer (Afrika)
- Politiske avtaler
- Ofte uten hensyn til folk og kultur

**Territorielle konflikter:**

*Årsaker:*
- Ressurser under bakken
- Strategisk beliggenhet
- Historiske krav
- Etniske og religiøse forhold

*Eksempler:*
- Kashmir (India/Pakistan)
- Vestbredden (Israel/Palestina)
- Sør-Kina-havet (Kina/naboland)
- Krim (Russland/Ukraina)

**Havgrenser:**
- Territorialfarvann: 12 nautiske mil
- Økonomisk sone: 200 nautiske mil
- Kontinentalsokkel: Kan strekke seg lenger

**FNs Havrettskonvensjon (UNCLOS):**
Regulerer staters rettigheter og plikter i havet. Norge har store interesser knyttet til havområder.`,
    },
    {
      id: 'geografi-1-23-def-2',
      type: 'definition',
      title: 'Ressurskonflikter',
      content: `**Olje og gass:**

*Strategisk betydning:*
- Fossile brensler driver verdensøkonomien
- Land med ressurser får stor makt
- Kontroll over forsyningsveier er kritisk

*Konfliktområder:*
- Midtøsten (verdens største reserver)
- Kaspihavet
- Arktis
- Sør-Kina-havet

**Vann:**

*"Det blå gullet":*
- Ferskvann er livsnødvendig og begrenset
- Klimaendringer forverrer vannmangel
- Delte elveløp skaper konflikter

*Eksempler:*
- Nilen (Egypt, Sudan, Etiopia)
- Jordan (Israel, Jordan, Syria)
- Mekong (Kina, Sørøst-Asia)

**Mineraler og metaller:**

*Kritiske ressurser:*
- Sjeldne jordarter (elektronikk, batterier)
- Kobolt (Kongo har 70% av verdens reserver)
- Litium (batterier)

*Strategisk konkurranse:*
- Kina dominerer utvinning av sjeldne jordarter
- Vestlige land søker alternative kilder
- Havbunnsmineraler blir viktigere`,
    },
    {
      id: 'geografi-1-23-def-3',
      type: 'definition',
      title: 'Norges geopolitiske posisjon',
      content: `**Geografisk plassering:**
- Utkanten av Europa
- Stor kystlinje og havområder
- Grenser mot Russland i nord
- Nærmeste nabo til Arktis

**Strategisk betydning:**

*Under den kalde krigen:*
- NATO-medlem på grensen til Sovjet
- Viktig for overvåking
- Baser og installasjoner

*I dag:*
- Nordområdene har økt strategisk betydning
- Russlands opprusting i Arktis
- Nye sjøruter når isen smelter
- Ressurser i Arktis

**Norges interesser:**

*Havområder:*
- Økonomisk sone på ca. 2 millioner km²
- Store olje- og gassressurser
- Rike fiskebestander
- Potensiell mineralutvinning

*Sikkerhet:*
- NATO-medlemskap (siden 1949)
- Balanse mellom avskrekking og beroligelse
- Samarbeid med Russland om fiskeri og grenser
- Økt spenning etter 2014 og 2022

**Svalbard:**
- Norsk suverenitet
- Svalbardtraktaten gir andre land rettigheter
- Økende internasjonal interesse`,
    },
    {
      id: 'geografi-1-23-example-1',
      type: 'example',
      title: 'Eksempel: Sør-Kina-havet',
      problem: `Sør-Kina-havet er et av verdens mest omstridte havområder. Analyser konfliktens geopolitiske dimensjoner.`,
      solution: `**Geografisk betydning:**
- 3,5 millioner km² stort havområde
- Viktigste skipslei i verden (1/3 av global handel)
- Rike fiskeressurser
- Potensielt store olje- og gassreserver

**Territorielle krav:**
- Kina krever nesten hele havet ("nilinje-linjen")
- Vietnam, Filippinene, Malaysia, Brunei har krav
- Taiwan har også krav

**Kinas handlinger:**
- Bygget kunstige øyer med militære installasjoner
- Hevder historiske rettigheter
- Avviser internasjonal dom (2016)

**Andre stormakters interesser:**
- USA: Frihet på havet, støtter allierte
- Japan: Avhengig av sjøtransport gjennom området

**Geopolitisk analyse:**
- Kontroll over ressurser og handelsveier
- Regional maktbalanse
- Stormaktsrivalisering mellom USA og Kina
- Fare for militær konfrontasjon

**Konklusjon:** Konflikten viser hvordan geografi, ressurser og maktpolitikk henger sammen.`,
    },
    {
      id: 'geografi-1-23-text-stormakter',
      type: 'text',
      content: `## Stormaktsrivalisering i det 21. århundre

Den geopolitiske verdensordenen er i endring. Etter den kalde krigens slutt i 1991 var USA den ubestridte supermakten. Nå beveger verden seg mot et mer multipolart system.

**USA — den etablerte supermakten:**
Verdens største økonomi og militærmakt. Dominerer gjennom allianser (NATO), teknologi, kultur og dollaren som verdensvaluta. Utfordret av Kinas vekst og intern politisk polarisering.

**Kina — den stigende stormakten:**
Verdens nest største økonomi, raskt voksende militærmakt. Belt and Road Initiative knytter utviklingsland tettere til Kina gjennom infrastrukturinvesteringer. Økt selvhevdelse i Sør-Kina-havet og overfor Taiwan.

**Russland — den revisjonistiske makten:**
Militært sterk, men økonomisk svakere enn USA og Kina. Søker å gjenopprette innflytelse i det tidligere Sovjet-området. Krigen i Ukraina fra 2022 har endret europeisk sikkerhetspolitikk fundamentalt.

**EU — økonomisk gigant, militær dverg:**
Verdens største handelsblokk. Sterk normativ makt (demokrati, menneskerettigheter, klima). Men begrenset militær kapasitet og vanskeligheter med å enes om utenrikspolitikk.

**Multipolar verden:**
Flere maktsentra betyr mer kompleks diplomati, men også risiko for flere konflikter der stormaktsinteresser kolliderer.`,
    },
    {
      id: 'geografi-1-23-def-4',
      type: 'definition',
      title: 'Energi-geopolitikk',
      content: `**OPEC (Organization of the Petroleum Exporting Countries):**
Kartellet av oljeeksporterende land som koordinerer produksjon og påvirker oljeprisen. 13 medlemsland, dominert av Saudi-Arabia. OPEC+ inkluderer Russland.

**Rørledninger som geopolitisk verktøy:**
- **Nord Stream:** Gassrørledning fra Russland til Tyskland under Østersjøen. Sabotert i 2022.
- **Trans-Adriatic Pipeline:** Frakter gass fra Aserbajdsjan til Europa.
- Kontroll over rørledningsruter gir enorm makt. Russland har brukt gasstilførsel som politisk pressmiddel.

**Petrostater:**
Land der olje- og gassinntekter dominerer statsinntektene. Eksempler: Saudi-Arabia, Russland, Venezuela, Nigeria. Ofte preget av «ressursforbannelse» — rikdom fra naturressurser svekker demokrati og diversifisering.

**Energiomstillingens geopolitikk:**
Det grønne skiftet endrer geopolitikken fundamentalt:
- Land med sol og vind kan bli nye energistormakter
- Kina dominerer produksjon av solceller og batterier
- Kritiske mineraler (litium, kobolt, sjeldne jordarter) blir strategisk viktige
- Oljeeksporterende land frykter tap av inntekter og makt
- Hydrogen kan bli viktig ny energibærer — Norge posisjonerer seg`,
    },
    {
      id: 'geografi-1-23-text-teorier',
      type: 'text',
      content: `## Geopolitiske teorier

Flere klassiske teorier har forsøkt å forklare sammenhengen mellom geografi og makt.

**Mackinders Heartland-teori (1904):**
Den britiske geografen Halford Mackinder mente at den som kontrollerer det eurasiske «hjerteland» (Sentral-Asia og Sibir) kontrollerer verden. Området er rikt på ressurser og vanskelig å invadere. Teorien påvirket vestlig strategi under den kalde krigen.

**Mahans sjømaktsteori (1890):**
Den amerikanske admiralen Alfred Mahan argumenterte for at kontroll over havene er nøkkelen til verdensmakt. Sjøhandel, flåtebaser og strategiske sund (Malakka, Hormuz, Suez) er avgjørende. Relevant for å forstå USAs globale flåtestrategi.

**Spykmans Rimland-teori (1942):**
Nicholas Spykman mente at «rimland» — kystområdene rundt Eurasia — er viktigere enn hjertlandet. Den som kontrollerer rimland (Vest-Europa, Midtøsten, Sørøst-Asia) kontrollerer Eurasia og dermed verden.

**Kritisk geopolitikk:**
Moderne retning som utfordrer de klassiske teoriene. Argumenterer for at geopolitisk kunnskap ikke er objektiv, men formet av maktinteresser. Kart og territorielle fremstillinger er politiske verktøy. Fokuserer på hvem som definerer «trusler» og «interesser» og hvorfor.`,
    },
    {
      id: 'geografi-1-23-def-5',
      type: 'definition',
      title: 'Internasjonale organisasjoner',
      content: `**NATO (North Atlantic Treaty Organization):**
Militær forsvarsallianse grunnlagt i 1949. Artikkel 5: Angrep på én er angrep på alle. 32 medlemsland (2024). Finland og Sverige ble medlemmer etter Russlands invasjon av Ukraina.

**FN (De forente nasjoner):**
193 medlemsland. Sikkerhetsrådet med fem faste medlemmer (USA, Russland, Kina, Frankrike, Storbritannia) med vetorett. Viktig for internasjonal rett, fredsbevarende operasjoner og utvikling. Kritisert for vetorettens lammende effekt.

**EU (Den europeiske union):**
27 medlemsland. Felles marked, valuta (euro), og økende utenriks- og sikkerhetspolitisk samarbeid. Norges viktigste handelspartner gjennom EØS-avtalen.

**AU (Den afrikanske union):**
55 medlemsland. Arbeider for fred, sikkerhet og økonomisk integrasjon i Afrika. Har fredsbevarende styrker, men begrenset kapasitet.

**ASEAN (Association of Southeast Asian Nations):**
10 medlemsland i Sørøst-Asia. Fremmer økonomisk samarbeid og regional stabilitet. Viktig i konteksten av rivalisering mellom USA og Kina.

**Norges rolle:**
Norge deltar aktivt i FN, NATO og en rekke internasjonale organisasjoner. Bistandspolitikk, fredsdiplomati og forvaltning av havressurser er sentrale elementer i norsk utenrikspolitikk.`,
    },
    {
      id: 'geografi-1-23-tip-1',
      type: 'tip',
      title: 'Kobling til andre kapitler',
      content: `**Geopolitikk** bygger på og utfyller flere andre temaer:

**Kapittel 24 (Arktis og Antarktis):** Polarområdene er et av de viktigste geopolitiske temaene i dag — ressurser, sjøruter og stormaktsrivalisering.

**Kapittel 19 (Konflikter og migrasjon):** Geopolitiske spenninger er en hovedårsak til konflikter og flyktningstrømmer.

Se disse kapitlene i sammenheng for å forstå helheten i internasjonal politikk.`,
    },
    {
      id: 'geografi-1-23-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-23-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva geopolitikk er og gi tre eksempler på hvordan geografi påvirker maktforhold mellom stater.',
        hints: ['Tenk på ressurser, beliggenhet, grenser'],
        solution: 'Geopolitikk handler om forholdet mellom geografi og politikk. Eksempler: 1) Midtøstens oljeressurser gir regionen stor strategisk betydning og har ført til konflikter og innblanding. 2) Russlands størrelse og beliggenhet gjør landet vanskelig å invadere, men også vanskelig å forsvare. 3) Singapore kontrollerer Malakkastredet, en av verdens viktigste handelsruter, noe som gir stor strategisk og økonomisk betydning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-23-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-23-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom naturlige og kunstige grenser. Hvorfor har mange kunstige grenser skapt konflikter?',
        hints: ['Tenk på kolonialismens arv og etniske grupper'],
        solution: 'Naturlige grenser følger geografiske trekk som elver, fjell og hav. Kunstige grenser er trukket på kart uten hensyn til naturlige hindringer. Mange kunstige grenser (særlig i Afrika og Midtøsten) ble trukket av kolonimakter uten hensyn til etniske, religiøse og språklige grupper. Dette har splittet folkegrupper og tvunget fiendtlige grupper inn i samme stat, noe som har bidratt til konflikter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-23-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-23-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv tre typer ressurser som ofte fører til konflikter mellom stater, og gi eksempler på hver.',
        hints: ['Tenk på olje, vann, mineraler'],
        solution: 'Olje og gass: Midtøsten-konflikter, Russland-Ukraina (gassrørledninger), Sør-Kina-havet. Vann: Nilen (Egypt-Etiopia), Jordan (Israel og naboland), Mekong (Kina-Sørøst-Asia). Mineraler: Kobolt i Kongo, sjeldne jordarter (Kina dominerer), diamanter i Afrika. Ressursene er verdifulle, ofte ujevnt fordelt, og kontroll gir makt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-23-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-23-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser Norges geopolitiske posisjon. Hva er Norges viktigste strategiske interesser?',
        hints: ['Tenk på nordområdene, NATO, Russland, havressurser'],
        solution: 'Norges posisjon: Utkant av Europa, lang kystlinje, grense mot Russland, nær Arktis. Strategiske interesser: 1) Sikkerhet gjennom NATO-medlemskap, balanse mellom avskrekking og beroligelse overfor Russland. 2) Havområder med økonomisk sone på 2 mill km², olje/gass og fiskeri. 3) Nordområdene med økende betydning (klima, ressurser, sjøruter). 4) Svalbard med norsk suverenitet men internasjonal interesse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-23-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-23-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en pågående territoriell konflikt og analyser den geopolitisk. Hvem er partene, hva handler konflikten om, og hvilke interesser står mot hverandre?',
        hints: ['Du kan velge Sør-Kina-havet, Kashmir, eller en annen konflikt'],
        solution: 'Svar bør inneholde: 1) Beskrivelse av konfliktområdet og partene. 2) Historisk bakgrunn for konflikten. 3) Geografiske faktorer (ressurser, beliggenhet, strategisk betydning). 4) De ulike partenes interesser og argumenter. 5) Internasjonale dimensjoner og stormaktsinteresser. 6) Mulige utfall eller løsninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-23-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-23-mc-1',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — geopolitikk:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var kjernen i Mackinders Heartland-teori?',
            solution: 'At den som kontrollerer det eurasiske hjertlandet kontrollerer verden',
            multipleChoiceOptions: ['At sjømakt er viktigst for verdensherredømme', 'At den som kontrollerer det eurasiske hjertlandet kontrollerer verden', 'At kystområdene er strategisk viktigst', 'At luftmakt avgjør kriger'],
          },
          {
            label: 'b',
            task: 'Hva er OPEC?',
            solution: 'En organisasjon av oljeeksporterende land som koordinerer produksjon',
            multipleChoiceOptions: ['En organisasjon av oljeeksporterende land som koordinerer produksjon', 'En FN-organisasjon for fredsbevarende operasjoner', 'En europeisk handelsavtale', 'Et militært samarbeid i Asia'],
          },
          {
            label: 'c',
            task: 'Hvilket år ble NATO grunnlagt?',
            solution: '1949',
            multipleChoiceOptions: ['1945', '1949', '1955', '1961'],
          },
        ],
        solution: 'a) At den som kontrollerer det eurasiske hjertlandet kontrollerer verden, b) En organisasjon av oljeeksporterende land som koordinerer produksjon, c) 1949',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 24: Arktis og Antarktis
// ============================================================================

export const CHAPTER_GEOGRAFI_24: TextbookChapter = {
  id: 'geografi-1-24',
  courseId: 'geografi',
  chapterNumber: '24',
  title: 'Arktis og Antarktis',
  description: 'Laer om polaromraadenes geografi, klima, ressurser og Norges rolle.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og drøfte polarområdenes betydning for klima, ressurser og internasjonal politikk',
  ],
  content: [
    {
      id: 'geografi-1-24-intro',
      type: 'text',
      content: `## Polarområdene

Arktis i nord og Antarktis i sør er jordens mest ekstreme områder. De har stor betydning for klima, ressurser og internasjonal politikk.

**Grunnleggende forskjeller:**

*Arktis:*
- Hav omgitt av land
- Innbyggere (urfolk og moderne samfunn)
- Flere land har suverenitet over deler
- Sjøis som smelter

*Antarktis:*
- Land omgitt av hav
- Ingen permanent befolkning (bare forskningsstasjoner)
- Styrt av internasjonal traktat
- Isdekke på land

**Hvorfor er polarområdene viktige?**
- Klimaregulering (reflekterer sollys, lagrer is)
- Indikatorer på klimaendringer
- Store ressurser
- Økende strategisk betydning`,
    },
    {
      id: 'geografi-1-24-def-1',
      type: 'definition',
      title: 'Arktis - geografi og klima',
      content: `**Geografisk avgrensning:**

Arktis defineres på ulike måter:
- Polarsirkelen (66,5° nord) - astronomisk
- 10°C-isotermen for juli - klimatisk
- Tregrensen - økologisk

**Geografi:**
- Nordishavet: Ca. 14 millioner km²
- Omgitt av: Russland, Canada, USA (Alaska), Norge, Danmark (Grønland)
- Øygrupper: Svalbard, Frans Josef Land, Novaja Semlja

**Klima:**
- Ekstremt kaldt om vinteren (-40 til -50°C)
- Korte, kjølige somre
- Midnattssol og mørketid
- Permafrost på land

**Sjøis:**
- Minimum i september (ca. 4-5 millioner km²)
- Maksimum i mars (ca. 15 millioner km²)
- Isutbredelsen har sunket dramatisk (40% mindre enn i 1980)
- Tynn, førsteårsis erstatter tykk, flerårsis

**Økosystemer:**
- Isbjørn, sel, hval, reinsdyr
- Rike fiskebestander
- Trekkfugler fra hele verden`,
    },
    {
      id: 'geografi-1-24-def-2',
      type: 'definition',
      title: 'Antarktis - geografi og klima',
      content: `**Geografi:**
- Kontinent: Ca. 14 millioner km² (større enn Europa)
- 98% dekket av is (gjennomsnittlig 2 km tykt)
- Inneholder 70% av jordens ferskvann
- Ingen land har anerkjent suverenitet

**Klima:**
- Jordens kaldeste sted (rekord: -89,2°C)
- Teknisk sett en ørken (lite nedbør)
- Kraftige vinder
- Seks måneder lys, seks måneder mørke

**Antarktisstraktaten (1959):**
- Forbyr militær aktivitet
- Beskytter vitenskapelig forskning
- Fryser alle territorielle krav
- Miljøprotokollen (1991) forbyr ressursutvinning

**Forskning:**
- Ca. 70 forskningsstasjoner
- Klimaforskning (iskjerner)
- Biologi, geologi, astronomi
- Norge har Troll-stasjonen og Tor-stasjonen

**Økosystemer:**
- Pingviner, sel, hval
- Krill er nøkkelart
- Sårbare systemer`,
    },
    {
      id: 'geografi-1-24-def-3',
      type: 'definition',
      title: 'Ressurser og interesser i Arktis',
      content: `**Fossile brennstoff:**
- Anslagsvis 13% av verdens uoppdagede olje
- 30% av verdens uoppdagede gass
- Russland har store felt i Arktis
- Norge utvinner på norsk sokkel

**Mineralressurser:**
- Grønland har sjeldne jordarter
- Zink, bly, gull på ulike steder
- Havbunnsmineraler potensielt viktige

**Fiskeri:**
- Rike bestander (torsk, hyse, lodde)
- Nye arter trekker nordover med varmere hav
- Forvaltningsutfordringer

**Skipsfart:**
- Nordøstpassasjen langs Russland
- Nordvestpassasjen gjennom Canada
- Kortere rute Asia-Europa (40% kortere)
- Fortsatt utfordrende (is, vær, infrastruktur)

**Geopolitiske interesser:**
- Russland: Største arktiske kystlinje, militær opprusting
- USA: Sikkerhet, ressurser (Alaska)
- Kina: "Nær-arktisk stat", ønsker innflytelse
- NATO-land: Sikkerhet i nordområdene

**Samarbeid og spenning:**
- Arktisk råd (8 land + urfolk)
- Økt spenning etter 2014/2022
- Balanse mellom samarbeid og konkurranse`,
    },
    {
      id: 'geografi-1-24-def-4',
      type: 'definition',
      title: 'Svalbard og norsk polarpolitikk',
      content: `**Svalbard:**

*Geografi:*
- Øygruppe mellom 74° og 81° nord
- Hovedøyer: Spitsbergen, Nordaustlandet, Edgeøya
- Ca. 2700 innbyggere (Longyearbyen, Barentsburg)

*Svalbardtraktaten (1920):*
- Norsk suverenitet
- Andre lands borgere har lik rett til næringsvirksomhet
- Demilitarisert sone
- Miljøbestemmelser må være like for alle

*Aktiviteter:*
- Forskning (klimaforskning, biologi)
- Turisme (økende)
- Kulldrift (avvikles)
- Frøhvelv (global matreserve)

**Norsk polarpolitikk:**

*Hovedlinjer:*
- Håndheve suverenitet
- Fremme bærekraftig utvikling
- Styrke forskning og kunnskap
- Internasjonalt samarbeid

*Norges arktiske interesser:*
- Fiskeriforvaltning
- Petroleumsvirksomhet
- Skipsfart
- Miljøvern
- Sikkerhet

**Dronning Maud Land (Antarktis):**
- Norsk krav siden 1939
- Frosset under Antarktistraktaten
- Forskningsaktivitet (Troll)`,
    },
    {
      id: 'geografi-1-24-example-1',
      type: 'example',
      title: 'Eksempel: Klimaendringer i Arktis',
      problem: `Arktis varmes opp dobbelt så raskt som resten av verden. Hva er årsakene og konsekvensene?`,
      solution: `**Arktisk forsterkning:**

*Mekanisme (is-albedo-tilbakekobling):*
1. Temperaturen øker
2. Sjøis smelter
3. Mørkt hav absorberer mer varme enn hvit is
4. Enda mer oppvarming
5. Sirkelen forsterker seg selv

**Observerte endringer:**
- Temperatur: +3-4°C siden 1980
- Sjøis: 40% reduksjon i minimum
- Permafrost: Smelter og frigjør metan
- Isbreer: Smelter over hele Arktis

**Konsekvenser:**

*Globalt:*
- Havnivåstigning (Grønlandsisen)
- Påvirkning på værsmønstre
- Frigjøring av drivhusgasser

*Lokalt:*
- Endrede leveforhold for urfolk
- Artene må tilpasse seg eller flytte
- Infrastruktur skades av permafrost-smelting

*Muligheter:*
- Nye sjøruter
- Tilgang til ressurser
- Lengre vekstsesong noen steder

**Dilemma:** Klimaendringene gjør det lettere å utvinne fossile brensler som forsterker klimaendringene.`,
    },
    {
      id: 'geografi-1-24-text-permafrost',
      type: 'text',
      content: `## Permafrost — den frosne grunnen

Permafrost er jord eller berg som har vært frosset sammenhengende i minst to år. Den dekker omtrent 25 % av landoverflaten på den nordlige halvkule.

**Hva er permafrost?**
Permafrost kan være fra noen meter til over 1500 meter dyp (i Sibir). Over permafrosten finnes det «aktive laget» — et sesongmessig lag som tiner om sommeren og fryser om vinteren. Det aktive laget er typisk 0,5–3 meter tykt.

**Utbredelse:**
Permafrost finnes i store deler av Russland, Canada, Alaska, Grønland, og i fjellområder som de skandinaviske fjellene, Himalaya og alpene. I Norge finnes permafrost i fjellområder, særlig i Finnmark og på Svalbard.

**Karbon og metanlagre:**
Permafrosten inneholder enorme mengder organisk materiale som har vært frosset i tusenvis av år. Anslagsvis 1500 milliarder tonn karbon er lagret — nesten dobbelt så mye som i hele atmosfæren. Når permafrosten tiner, brytes materialet ned av bakterier, og CO₂ og metan frigjøres.

**Infrastrukturskader:**
Når permafrost tiner, synker grunnen og bygninger, veier og rørledninger kan skades. I Sibir har hele landsbyer blitt ustabile. Tinende permafrost truer infrastruktur verdt hundrevis av milliarder dollar.

**Klimaimplikasjoner:**
Permafrostsmelting kan skape en selvforsterkende tilbakekobling: Oppvarming → tining → klimagassutslipp → mer oppvarming. Noen forskere kaller dette en potensiell «tipping point» i klimasystemet.`,
    },
    {
      id: 'geografi-1-24-def-5',
      type: 'definition',
      title: 'Antarktistraktaten i detalj',
      content: `**Antarktistraktaten (1959):**
Signert av 12 land, nå tilsluttet av 54 land. Trådte i kraft i 1961. Ofte fremholdt som et av historiens mest vellykkede internasjonale avtaleverk.

**Hovedprinsipper:**
- Antarktis skal kun brukes til fredelige formål
- Vitenskapelig forskning er fri og åpen
- Territorielle krav fryses (ingen nye krav, ingen oppgivelse av eksisterende)
- Militær aktivitet, atomprøvesprengninger og atomavfall forbys

**Miljøprotokollen (Madrid-protokollen, 1991):**
Utpeker Antarktis som «naturreservat viet fred og vitenskap». Forbyr all mineralutvinning. Innfører strenge miljøkrav for all aktivitet. Kan tidligst revideres i 2048, noe som skaper usikkerhet om fremtidig ressursutvinning.

**Vitenskapelig samarbeid:**
Over 30 land driver forskningsstasjoner. Iskjerneforskning har gitt uvurderlig kunnskap om fortidens klima — iskjerner fra Antarktis dekker opp til 800 000 år med klimahistorie.

**Turisme:**
Ca. 100 000 turister besøker Antarktis årlig. Turismen reguleres gjennom retningslinjer, men det er bekymring for miljøpåvirkning, særlig på pingvinkolonier og sårbare kystområder.`,
    },
    {
      id: 'geografi-1-24-text-nordostpassasjen',
      type: 'text',
      content: `## Nordøstpassasjen — ny sjørute i nord

Nordøstpassasjen (også kalt Den nordlige sjøruten) er sjøveien langs Russlands nordkyst fra Atlanterhavet til Stillehavet.

**Historikk:**
Den svenske oppdageren Adolf Erik Nordenskiöld gjennomførte den første fullstendige seilasen gjennom nordøstpassasjen i 1878–79 med skipet «Vega». I sovjettiden ble ruten utviklet med isbrytere for å frakte råvarer fra Sibir.

**Dagens status:**
Klimaendringer gjør ruten stadig mer farbar i sommerhalvåret. I 2023 passerte flere hundre skip gjennom passasjen, opp fra nesten null for 20 år siden.

**Russisk kontroll:**
Russland krever at alle skip som bruker nordøstpassasjen må ha russisk tillatelse og russisk los om bord. Andre land (særlig USA) bestrider dette og hevder retten til fri gjennomfart.

**Transittider:**
Ruten fra Shanghai til Rotterdam via nordøstpassasjen er ca. 13 000 km — sammenlignet med 20 000 km via Suezkanalen. Det er en tidsbesparelse på ca. 10–15 dager.

**Miljørisiko:**
En ulykke med oljetanker eller containerskip i Arktis ville få katastrofale konsekvenser. Beredskapen i området er svært begrenset, og kulde og mørke gjør opprydding ekstremt vanskelig.

**Kinas «Polar Silk Road»:**
Kina har erklært interesse for en «Polar Silk Road» som del av Belt and Road Initiative. Kina investerer i isbrytere, forskningsstasjoner og infrastruktur for å sikre tilgang til arktiske sjøruter.`,
    },
    {
      id: 'geografi-1-24-def-6',
      type: 'definition',
      title: 'Svalbard-politikk i detalj',
      content: `**Fiskevernsonen:**
Norge opprettet i 1977 en fiskerisone på 200 nautiske mil rundt Svalbard. Norge hevder retten til å regulere fiske, men flere land (Russland, EU, Island) bestrider at Svalbardtraktaten tillater dette. Norge kaller den en «fiskevernsone» (ikke økonomisk sone) for å unngå konfrontasjon. I praksis regulerer Kystvakten fiske basert på vitenskapelige kvoter.

**Russisk tilstedeværelse:**
Russland har en bosetting i Barentsburg med ca. 400 innbyggere, primært gruvearbeidere. Russland har historisk sett vært opptatt av å opprettholde sin tilstedeværelse på Svalbard og bestrider noen sider av norsk myndighetsutøvelse.

**Kullutfasing:**
Norge har besluttet å fase ut kulldriften i Longyearbyen og satse på forskning, utdanning og turisme. Store Norske Spitsbergen Kulkompani har avviklet det meste av produksjonen. Russland opprettholder fortsatt begrenset kulldrift i Barentsburg.

**Kinesisk forskning:**
Kina har en forskningsstasjon (Yellow River Station) i Ny-Ålesund. Kinas økende interesse for Arktis gjennom forskning og diplomati følges nøye av norske myndigheter.

**Suverenitetshevdelse:**
Norge bruker tilstedeværelse (Sysselmannen/Sysselmesteren, Kystvakten), miljøforvaltning og forskningsinvesteringer for å underbygge norsk suverenitet. Balansen mellom å hevde suverenitet og overholde Svalbardtraktatens likebehandlingsprinsipp er krevende.`,
    },
    {
      id: 'geografi-1-24-tip-1',
      type: 'tip',
      title: 'Kobling til andre kapitler',
      content: `**Arktis og Antarktis** kobler sammen naturgeografi og geopolitikk:

**Kapittel 4 (Klima og klimaendringer):** Polarområdene er «klimaets kanariefugler» — endringene her varsler hva som kommer globalt. Is-albedo-tilbakekobling og permafrostsmelting er sentrale mekanismer.

**Kapittel 23 (Geopolitikk):** Arktis er et av de viktigste geopolitiske områdene i dag. Stormaktsrivalisering, ressurskamp og sjøruter gjør regionen stadig mer strategisk.`,
    },
    {
      id: 'geografi-1-24-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-24-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar de viktigste geografiske og klimatiske forskjellene mellom Arktis og Antarktis.',
        hints: ['Tenk på land vs. hav, befolkning, styresett, temperatur'],
        solution: 'Arktis: Hav omgitt av land, har urfolk og moderne bosetting, flere land har suverenitet, sjøis som smelter. Antarktis: Land omgitt av hav, ingen permanent befolkning (bare forskere), styrt av internasjonal traktat, isdekke på land. Antarktis er kaldere (rekord -89°C) fordi det er et høytliggende kontinent. Antarktis inneholder 70% av jordens ferskvann.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-24-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-24-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar is-albedo-tilbakekoblingen og hvorfor Arktis varmes opp raskere enn resten av verden.',
        hints: ['Tenk på hvit is vs. mørkt hav, refleksjon av sollys'],
        solution: 'Albedo er hvor mye sollys som reflekteres. Hvit is har høy albedo (reflekterer 80%), mørkt hav har lav albedo (absorberer 90%). Tilbakekobling: Når temperaturen øker → is smelter → mer mørkt hav eksponeres → mer varme absorberes → temperaturen øker mer → mer is smelter. Dette forsterker oppvarmingen. Derfor varmes Arktis opp 2-3 ganger raskere enn globalt gjennomsnitt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-24-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-24-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv Svalbardtraktatens hovedprinsipper og forklar hvorfor traktaten skaper politiske utfordringer.',
        hints: ['Tenk på suverenitet, likebehandling, demilitarisering'],
        solution: 'Hovedprinsipper: 1) Norsk suverenitet, 2) Alle signatarlands borgere har lik rett til næringsvirksomhet, 3) Området er demilitarisert, 4) Miljøregler må gjelde likt for alle. Utfordringer: Uenighet om traktatens rekkevidde (gjelder den havområdene?), fiskevernsonen er omstridt, Russland utfordrer norsk tolkning, Kinas økende interesse, spenning mellom norsk suverenitet og likebehandlingsprinsippet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-24-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-24-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke ressurser finnes i Arktis, og hvorfor er det økende internasjonal interesse for regionen?',
        hints: ['Tenk på olje/gass, mineraler, fisk, skipsfart'],
        solution: 'Ressurser: Olje/gass (13% av uoppdaget olje, 30% av gass), mineraler (sjeldne jordarter, metaller), fiskeri (rike bestander), nye skipsleder (Nordøst- og Nordvestpassasjen). Økende interesse fordi: Klimaendringer gjør områdene mer tilgjengelige, global etterspørsel etter ressurser, stormaktsrivalisering, kortere sjøruter Asia-Europa, teknologi gjør utvinning mulig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-24-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-24-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft mulige fremtidsscenarier for Arktis. Vil regionen preges av samarbeid eller konflikt?',
        hints: ['Vurder ulike faktorer: klima, ressurser, stormakter, institusjoner'],
        solution: 'For samarbeid: Arktisk råd har fungert, felles interesse i miljø og sikkerhet, havrettskonvensjonen regulerer, økonomisk samarbeid kan lønne seg. For konflikt: Økt stormaktsrivalisering, Russlands militarisering, ressurskonkurranse, uavklarte grensespørsmål. Usikkerhetsfaktorer: Klimaendringenes tempo, Kinas ambisjoner, politisk utvikling i USA/Russland. Sannsynlig scenario: En blanding - samarbeid på noen områder, spenning på andre. Norges utfordring er å balansere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-24-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-24-mc-1',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — Arktis og Antarktis:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er permafrost?',
            solution: 'Jord eller berg som har vært frosset sammenhengende i minst to år',
            multipleChoiceOptions: ['Is som flyter på havet i Arktis', 'Jord eller berg som har vært frosset sammenhengende i minst to år', 'En type isbre som aldri smelter', 'Frosset sjøvann rundt Antarktis'],
          },
          {
            label: 'b',
            task: 'Hva forbyr Antarktistraktatens miljøprotokoll til minst 2048?',
            solution: 'All mineralutvinning i Antarktis',
            multipleChoiceOptions: ['Turisme i Antarktis', 'All mineralutvinning i Antarktis', 'Forskning i Antarktis', 'Fiske i Sørishavet'],
          },
          {
            label: 'c',
            task: 'Hva er nordøstpassasjen?',
            solution: 'Sjøveien langs Russlands nordkyst fra Atlanterhavet til Stillehavet',
            multipleChoiceOptions: ['En jernbane gjennom Sibir', 'Sjøveien langs Russlands nordkyst fra Atlanterhavet til Stillehavet', 'En sjørute gjennom Canadas øygrupper', 'En rørledning for gass fra Russland til Europa'],
          },
        ],
        solution: 'a) Jord eller berg som har vært frosset sammenhengende i minst to år, b) All mineralutvinning i Antarktis, c) Sjøveien langs Russlands nordkyst fra Atlanterhavet til Stillehavet',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 25: Geografisk metode - feltarbeid
// ============================================================================

export const CHAPTER_GEOGRAFI_25: TextbookChapter = {
  id: 'geografi-1-25',
  courseId: 'geografi',
  chapterNumber: '25',
  title: 'Geografisk metode - feltarbeid',
  description: 'Laer om planlegging og gjennomforing av geografisk feltarbeid.',
  estimatedMinutes: 75,
  competenceGoals: [
    'planlegge, gjennomføre og presentere feltarbeid om geografiske forhold',
  ],
  content: [
    {
      id: 'geografi-1-25-intro',
      type: 'text',
      content: `## Feltarbeid i geografi

Feltarbeid er en sentral metode i geografi. Ved å dra ut i felten kan du studere geografiske fenomener direkte, samle inn data og teste teorier mot virkeligheten.

**Hvorfor feltarbeid?**
- Direkte observasjon av fenomener
- Samle primærdata (data du samler selv)
- Teste hypoteser og teorier
- Koble teori til praksis
- Utvikle geografiske ferdigheter

**Typer geografisk feltarbeid:**
- Naturgeografisk: Elvestudier, kystprosesser, vegetasjon
- Samfunnsgeografisk: Byundersøkelser, næringsanalyse
- Kartlegging: GPS-registrering, dronebilder
- Intervjuer og spørreundersøkelser

**Viktige prinsipper:**
- Grundig planlegging
- Systematisk datainnsamling
- Objektiv observasjon
- Etiske hensyn
- Sikkerhet`,
    },
    {
      id: 'geografi-1-25-def-1',
      type: 'definition',
      title: 'Planlegging av feltarbeid',
      content: `**1. Velg tema og problemstilling:**

*Krav til problemstilling:*
- Relevant for geografi
- Mulig å undersøke i praksis
- Avgrenset (ikke for omfattende)

*Eksempler:*
- "Hvordan har landbruk påvirket kulturlandskapet i bygda?"
- "Hvordan fordeler ulike virksomheter seg i sentrum?"
- "Hvordan påvirker elven landskapet ved ulike vannføring?"

**2. Forberedelse:**
- Les teori om temaet
- Studer kart og flybilder
- Lag hypoteser om hva du forventer å finne
- Planlegg rute og tidspunkt

**3. Metodevalg:**
- Hvilke data trenger du?
- Hvordan skal du samle dem?
- Hvilke verktøy trenger du?

**4. Praktisk planlegging:**
- Utstyr (kart, GPS, kamera, skrivesaker)
- Sikkerhet (klær, mat, kommunikasjon)
- Tillatelser hvis nødvendig
- Værforhold

**5. Etiske hensyn:**
- Respekter privat eiendom
- Spør om tillatelse til fotografering av personer
- Anonymiser personopplysninger
- Ikke forstyrr dyr eller ødelegg natur`,
    },
    {
      id: 'geografi-1-25-def-2',
      type: 'definition',
      title: 'Metoder for datainnsamling',
      content: `**Observasjon:**

*Systematisk observasjon:*
- Bruk observasjonsskjema
- Noter tid, sted, værforhold
- Beskriv objektivt (ikke tolkninger)
- Ta bilder som dokumentasjon

*Telling og registrering:*
- Trafikktelling
- Registrering av arealbruk
- Bygningsregistrering
- Vegetasjonskartlegging

**Målinger:**

*Naturgeografiske målinger:*
- Temperatur, nedbør
- Vannhastighet, vannføring
- Jordprøver, pH
- Helning, retning (kompass)

*Samfunnsgeografiske målinger:*
- Avstander og arealer
- Befolkningstetthet
- Servicetilgjengelighet

**Intervju og spørreundersøkelse:**

*Intervju:*
- Strukturert (faste spørsmål)
- Ustrukturert (åpen samtale)
- God for dybdeforståelse

*Spørreundersøkelse:*
- Mange respondenter
- Standardiserte spørsmål
- God for statistikk

**GPS og GIS:**
- Registrer punkter med koordinater
- Lag digitale kart
- Analyser romlige mønstre`,
    },
    {
      id: 'geografi-1-25-def-3',
      type: 'definition',
      title: 'Analyse og presentasjon',
      content: `**Bearbeiding av data:**

*Sortering og systematisering:*
- Organiser data i tabeller
- Sjekk for feil og mangler
- Grupper lignende data

*Statistisk analyse:*
- Gjennomsnitt og median
- Frekvenstabeller
- Prosentberegninger
- Sammenligning av grupper

**Visualisering:**

*Kart:*
- Temakart med symboler
- Koroplettkart (fargelagte områder)
- Punktkart

*Diagrammer:*
- Søylediagram (sammenligning)
- Linjediagram (endring over tid)
- Sektordiagram (fordeling)

*Bilder og foto:*
- Dokumentasjon av fenomener
- Før/etter-sammenligninger

**Rapport og presentasjon:**

*Struktur:*
1. Innledning (bakgrunn, problemstilling)
2. Metode (hvordan du samlet data)
3. Resultater (hva du fant)
4. Drøfting (hva betyr funnene)
5. Konklusjon (svar på problemstillingen)

*Tips:*
- Bruk geografisk fagspråk
- Vis data med kart og diagrammer
- Vær kritisk til egne funn
- Pek på mulige feilkilder`,
    },
    {
      id: 'geografi-1-25-example-1',
      type: 'example',
      title: 'Eksempel: Feltarbeid om bysentrum',
      problem: `Planlegg og gjennomfør et feltarbeid som undersøker: "Hvordan er ulike funksjoner fordelt i bysentrum?"`,
      solution: `**1. Planlegging:**

*Problemstilling:*
Hvordan er ulike funksjoner (butikker, kontorer, boliger, offentlige tjenester) fordelt i sentrum?

*Hypotese:*
- Butikker konsentrert i gågater
- Kontorer langs hovedgater
- Boliger i utkanten av sentrum

*Metode:*
- Kartlegging av bygningers funksjon
- Registreringsskjema med kategorier

**2. Gjennomføring:**

*Utstyr:*
- Basiskart over sentrum
- Registreringsskjema
- Fargeblyanter for kategorier
- Kamera

*Fremgangsmåte:*
1. Gå systematisk gjennom alle gater
2. Registrer hva hvert bygg brukes til
3. Bruk fargekoder på kartet
4. Ta bilder av typiske eksempler

**3. Analyse:**
- Tell antall av hver funksjon
- Beregn prosenter
- Lag temakart med fargekoder
- Sammenlign med hypotesen

**4. Konklusjon:**
Beskriv hovedmønsteret og forklar hvorfor funksjonene er fordelt slik (husleie, tilgjengelighet, historikk).`,
    },
    {
      id: 'geografi-1-25-text-kvantitativ-kvalitativ',
      type: 'text',
      content: `## Kvantitative og kvalitative metoder

I geografisk forskning brukes to hovedtyper metoder, ofte i kombinasjon.

**Kvantitative metoder — tall og målbare data:**
Samler inn numeriske data som kan analyseres statistisk. Eksempler: Trafikktelling, temperaturmåling, spørreundersøkelser med faste svaralternativer.
- *Styrker:* Objektivt, generaliserbart, sammenlignbart, mulig å bekrefte/avkrefte hypoteser
- *Svakheter:* Kan miste nyanser, forklarer ikke alltid «hvorfor», krever tilstrekkelig utvalg

**Kvalitative metoder — ord, bilder og forståelse:**
Samler inn deskriptive data som gir dybdeforståelse. Eksempler: Åpne intervjuer, feltobservasjon med beskrivelser, analyse av tekster og bilder.
- *Styrker:* Fanger kompleksitet og nyanser, gir dybdeforståelse, fleksibelt
- *Svakheter:* Subjektivt, vanskelig å generalisere, tidkrevende

**Mixed methods — kombinasjon:**
Mange geografer bruker begge tilnærminger. Eksempel: Trafikktelling (kvantitativt) kombinert med intervjuer om reisevaner (kvalitativt) gir et rikere bilde.

**Triangulering:**
Å bruke flere metoder, datakilder eller perspektiver for å belyse samme problemstilling. Styrker troverdigheten av resultatene. Eksempel: Kombinere feltobservasjon, spørreundersøkelse og statistikk fra SSB for å analysere et nabolag.`,
    },
    {
      id: 'geografi-1-25-def-4',
      type: 'definition',
      title: 'Statistisk analyse i geografi',
      content: `**Deskriptiv statistikk:**
- *Gjennomsnitt:* Summen delt på antall. Eksempel: Gjennomsnittlig nedbør per måned.
- *Median:* Midtverdien. Mindre følsom for ekstremverdier enn gjennomsnitt.
- *Standardavvik:* Mål på spredning. Stort standardavvik = stor variasjon i data.
- *Frekvensfordeling:* Tabell eller diagram som viser hvor ofte ulike verdier forekommer.

**Korrelasjon:**
Sammenheng mellom to variabler. Eksempel: Er det en sammenheng mellom avstand fra sentrum og boligpriser? Korrelasjon betyr ikke nødvendigvis årsakssammenheng.

**GIS-analyse:**
Romlig statistikk i GIS kan avdekke mønstre som ikke er synlige i vanlige tabeller. Eksempel: Kartlegging av sykdomstilfeller kan vise geografisk klynging som peker mot en miljøårsak.

**Bruk av Excel og regneark:**
Regneark er nyttige verktøy for å organisere feltdata, beregne gjennomsnitt og lage diagrammer. Lær deg grunnleggende funksjoner som SUM, AVERAGE, COUNTIF og diagramverktøy.

**Kritisk tolkning:**
- Vurder alltid om utvalget er representativt
- Vær forsiktig med å trekke kausale slutninger fra korrelasjon
- Vurder feilkilder og begrensninger i dataene
- Sammenlign med andre studier og datasett`,
    },
    {
      id: 'geografi-1-25-text-etikk',
      type: 'text',
      content: `## Etikk i geografisk feltarbeid

Etiske hensyn er viktige i alt forsknings- og feltarbeid, også for elever.

**Informert samtykke:**
Alle som deltar i intervjuer eller spørreundersøkelser skal vite hva informasjonen brukes til og ha mulighet til å si nei. For mindreårige kreves foresattes samtykke.

**Personvern og GDPR:**
Personopplysninger (navn, adresse, bilder der personer kan gjenkjennes) er beskyttet av personvernlovgivning. Data skal anonymiseres og oppbevares sikkert. Slettes når prosjektet er ferdig.

**Fotografering:**
- Be alltid om tillatelse før du fotograferer personer
- Vær forsiktig med å fotografere privat eiendom uten tillatelse
- Merk bilder med dato, sted og retning
- I noen kulturer og religioner er fotografering sensitivt

**Miljøetikk:**
- Ikke forstyrr dyr eller fugler (spesielt i hekketiden)
- Ikke plukk sjeldne planter eller ta med geologiske prøver fra vernede områder
- Følg allemannsretten og respekter ferdselsregler
- Rydd opp etter deg

**Viktig prinsipp:** God forskning handler ikke bare om gode data, men også om å behandle mennesker og natur med respekt.`,
    },
    {
      id: 'geografi-1-25-def-5',
      type: 'definition',
      title: 'Kildekritikk i geografi',
      content: `**Primærkilder vs. sekundærkilder:**
- *Primærkilder:* Data du samler selv gjennom feltarbeid. Du kontrollerer kvaliteten, men det er tidkrevende.
- *Sekundærkilder:* Data andre har samlet. Eksempler: SSB-statistikk, forskningsrapporter, kart, avisartikler. Spar tid, men du kontrollerer ikke kvaliteten.

**Vurdering av pålitelighet:**
- Hvem har laget kilden? (Forsker, journalist, aktivist, myndighet?)
- Hva er formålet? (Informere, påvirke, selge?)
- Når ble den laget? (Er den oppdatert?)
- Hvordan ble dataene samlet? (Metode, utvalg?)

**Bias (skjevhet):**
Alle kilder kan ha skjevheter. Statistikk kan presenteres selektivt, kart kan fremheve visse aspekter, og intervjuobjekter kan ha egne interesser. Vær bevisst på dette.

**Digitale kilder:**
- Wikipedia kan gi et startpunkt, men er ikke alltid pålitelig
- Offentlige kilder (SSB, FN, Verdensbanken) er generelt troverdige
- Vær kritisk til sosiale medier og blogger
- Sjekk alltid flere kilder

**Statistisk leseferdighet:**
Forstå forskjellen mellom absolutte tall og relative tall (prosent), mellom gjennomsnitt og median, og mellom korrelasjon og kausalitet. Vær oppmerksom på hvordan diagrammer kan manipuleres gjennom valg av skala og presentasjon.`,
    },
    {
      id: 'geografi-1-25-tip-1',
      type: 'tip',
      title: 'Eksamenstips — feltarbeid',
      content: `**På eksamen** kan du bli bedt om å planlegge et feltarbeid eller vurdere metodiske valg. Husk denne strukturen:

1. **Problemstilling:** Presis og avgrenset
2. **Metodevalg:** Begrunnet valg av kvantitativ og/eller kvalitativ metode
3. **Datainnsamling:** Konkret plan for hva, hvor, når og hvordan
4. **Analyse:** Hvordan du vil bearbeide og presentere data
5. **Feilkilder:** Vis at du er kritisk til egne metoder og data
6. **Etikk:** Nevn relevante etiske hensyn

Å vise metodisk bevissthet gir høy måloppnåelse.`,
    },
    {
      id: 'geografi-1-25-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-25-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor feltarbeid er viktig i geografi, og beskriv forskjellen mellom primærdata og sekundærdata.',
        hints: ['Tenk på direkte observasjon vs. data andre har samlet'],
        solution: 'Feltarbeid er viktig fordi det gir direkte kontakt med geografiske fenomener, mulighet til å teste teorier mot virkeligheten, og utvikler geografiske ferdigheter. Primærdata er data du samler selv gjennom feltarbeid (målinger, observasjoner, intervjuer). Sekundærdata er data andre har samlet (statistikk, kart, rapporter). Primærdata gir kontroll over kvalitet og relevans, men krever mer arbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-25-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-25-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag en problemstilling for et geografisk feltarbeid i nærmiljøet ditt. Forklar hvorfor den er god og hvordan du vil undersøke den.',
        hints: ['Velg noe du kan observere, avgrenset og geografisk relevant'],
        solution: 'Eksempel: "Hvordan brukes uteområdene i nabolaget på ulike tidspunkt?" God fordi: Avgrenset (ett område), mulig å observere, geografisk (rom og bruk). Undersøkelse: 1) Velg observasjonspunkter, 2) Observer på ulike tidspunkt (morgen, ettermiddag, kveld, hverdag/helg), 3) Registrer antall personer og aktiviteter, 4) Lag kart og diagram. Konklusjon om bruksmønstre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-25-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-25-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv tre ulike metoder for datainnsamling i felt og forklar når hver metode egner seg.',
        hints: ['Tenk på observasjon, måling, intervju'],
        solution: 'Observasjon: Egner seg for å registrere synlige fenomener (arealbruk, trafikk, landformer). Systematisk med skjema. Måling: Egner seg for kvantitative data (temperatur, vannhastighet, avstander). Krever utstyr og nøyaktighet. Intervju/spørreskjema: Egner seg for å forstå menneskers oppfatninger og handlinger (hvorfor folk velger bosted, transportvaner). Intervju gir dybde, spørreskjema gir bredde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-25-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-25-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke feilkilder kan påvirke resultatene av et feltarbeid? Hvordan kan du redusere feilkildene?',
        hints: ['Tenk på observatør, tidspunkt, metode, representativitet'],
        solution: 'Feilkilder: 1) Observatørfeil (tolker ulikt), 2) Tidspunkt (resultater varierer med tid på døgnet/året), 3) Utvalg (ikke representativt), 4) Målefeil (unøyaktige instrumenter), 5) Påvirkning (respondenter svarer det de tror er forventet). Reduksjon: Bruk standardiserte skjemaer, gjenta målinger, velg representative tidspunkt, kalibrér utstyr, vær kritisk til egne funn, rapporter begrensninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-25-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-25-ex-5',
        number: '5',
        type: 'classic',
        task: 'Planlegg et komplett feltarbeid: Velg tema, lag problemstilling, beskriv metode, planlegg gjennomføring og forklar hvordan du vil presentere resultatene.',
        hints: ['Følg strukturen: tema, problemstilling, metode, utstyr, gjennomføring, analyse, presentasjon'],
        solution: 'Svar bør inneholde: 1) Tema og begrunnelse for valget. 2) Presis problemstilling. 3) Metode for datainnsamling (observasjon, måling, intervju). 4) Utstyrsliste. 5) Plan for gjennomføring (rute, tidspunkt, arbeidsfordeling). 6) Etiske hensyn og sikkerhet. 7) Plan for analyse (sortering, beregninger). 8) Presentasjonsform (rapport med kart og diagrammer).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-25-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-25-mc-1',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — geografisk metode:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er triangulering i forskning?',
            solution: 'Å bruke flere metoder eller datakilder for å belyse samme problemstilling',
            multipleChoiceOptions: ['Å måle avstander med trekanter på kart', 'Å bruke flere metoder eller datakilder for å belyse samme problemstilling', 'Å intervjue tre personer om samme tema', 'Å dele feltområdet inn i trekanter'],
          },
          {
            label: 'b',
            task: 'Hva kjennetegner primærdata?',
            solution: 'Data du samler inn selv gjennom eget feltarbeid',
            multipleChoiceOptions: ['Data hentet fra SSB og offentlige registre', 'Data du samler inn selv gjennom eget feltarbeid', 'Data fra Wikipedia og nettsider', 'Data fra læreboka'],
          },
          {
            label: 'c',
            task: 'Hva er det første steget i planlegging av feltarbeid?',
            solution: 'Formulere en presis problemstilling',
            multipleChoiceOptions: ['Formulere en presis problemstilling', 'Pakke utstyr og kart', 'Lage diagrammer og tabeller', 'Skrive rapporten'],
          },
        ],
        solution: 'a) Å bruke flere metoder eller datakilder for å belyse samme problemstilling, b) Data du samler inn selv gjennom eget feltarbeid, c) Formulere en presis problemstilling',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const GEOGRAFI_CHAPTERS_DEL5: TextbookChapter[] = [
  CHAPTER_GEOGRAFI_21,
  CHAPTER_GEOGRAFI_22,
  CHAPTER_GEOGRAFI_23,
  CHAPTER_GEOGRAFI_24,
  CHAPTER_GEOGRAFI_25,
];
