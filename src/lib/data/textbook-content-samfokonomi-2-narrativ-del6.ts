/* eslint-disable */
// @ts-nocheck
/**
 * Samfunnsøkonomi 2 (VG3) - NARRATIV VERSJON DEL 6
 * Kapittel 6.1-6.5: Miljøøkonomi og bærekraft
 *
 * Narrativ versjon optimalisert for lesing/lytting på mobil.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1 NARRATIV: Markedssvikt og eksterne virkninger
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_6_1_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-6-1-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '6.1',
  title: 'Markedssvikt og eksterne virkninger',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvorfor markedet ikke alltid ordner opp selv – om fabrikker som forurenser gratis, økonomen som fant løsningen, og hvorfor forhandlinger sjelden redder klimaet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere økonomisk bærekraft',
    'analysere hvordan markedssvikt og eksterne virkninger påvirker ressursbruk og miljø',
  ],
  linkedChapterId: 'samfokonomi-2-6-1',
  content: [
    {
      id: 'samfokonomi-2-6-1-n-intro',
      type: 'text',
      content: `## Når noen andre betaler regningen

Forestill deg en fabrikk som ligger langs en elv i en liten norsk bygd. Fabrikken produserer stål og gir arbeid til hundre mennesker. Maskineriet durer, lastebilene ruller, og regnskapet viser pene tall. Men det er noe regnskapet ikke viser: røyken som stiger fra skorsteinen og legger seg over nabolaget, svoveldioksiden som irriterer barnas lunger, og avfallsvannet som siger ut i elven der fiskeren lenger nede har holdt på i generasjoner.

Fabrikken betaler for råvarer, strøm og lønn til arbeiderne. Men den betaler ikke for den skaden røyken gjør på naboenes helse, eller for fiskeren som får stadig færre fangster. Disse kostnadene er like reelle som en strømregning, men de havner ikke i noen faktura. De bæres av mennesker som aldri har bedt om å bære dem. Velkommen til **markedssvikt** – et av de viktigste begrepene i miljøøkonomien.

I en perfekt fungerende markedsøkonomi ville prisene gjenspeile alle kostnader ved produksjon og forbruk. Hver krone du betaler for et produkt ville dekke alt – inkludert miljøskader, helsekostnader og belastningen på fremtidige generasjoner. Men i virkeligheten finnes det et gap mellom det produsenten betaler og det samfunnet betaler. Det er dette gapet som skaper markedssvikt, og det er dette gapet som gjør miljøpolitikk nødvendig.`,
    },
    {
      id: 'samfokonomi-2-6-1-n-section1',
      type: 'text',
      content: `## Eksternaliteter – de usynlige kostnadene og gevinstene

Økonomer har et presist begrep for denne typen skjulte kostnader: **eksternaliteter**, eller eksterne virkninger. En eksternalitet oppstår når en økonomisk aktivitet påvirker en tredjepart – noen som verken er kjøper eller selger – uten at dette gjenspeiles i prisen.

La oss se nærmere på stålfabrikken vår. Produksjonskostnaden per tonn stål er 5 000 kroner – det fabrikken faktisk betaler for å lage stålet. Men forurensningen påfører naboene helsekostnader på 1 200 kroner per tonn. Den **samfunnsøkonomiske kostnaden** er altså 5 000 + 1 200 = 6 200 kroner per tonn. Hvis markedsprisen på stål er 6 000 kroner, ser fabrikken en fortjeneste på 1 000 kroner per tonn. Men for samfunnet er produksjonen faktisk et tap på 200 kroner per tonn. Fabrikken produserer for mye stål fordi den slipper å betale for skadene den påfører andre.

Men ikke alle eksternaliteter er negative. Tenk på bonden som holder bier. Biene hans produserer honning, men de pollinerer også naboens fruktrær – helt gratis. Eller tenk på vaksinering: når du vaksinerer deg, beskytter du ikke bare deg selv, men også dem rundt deg gjennom **flokkimmunitet**. Utdanning er enda et eksempel – en velutdannet befolkning gjør hele samfunnet mer produktivt og innovativt, langt utover den enkeltes personlige gevinst.

Ved **negative eksternaliteter** produseres det for mye av varen, fordi den private kostnaden er lavere enn den samfunnsøkonomiske. Ved **positive eksternaliteter** produseres det for lite, fordi den private nytten er lavere enn den samfunnsøkonomiske. I begge tilfeller svikter markedet – det gir feil mengde av det gode og det dårlige.`,
    },
    {
      id: 'samfokonomi-2-6-1-n-section2',
      type: 'text',
      content: `## Pigou-skatten – å sette en prislapp på forurensning

Den britiske økonomen Arthur Pigou foreslo allerede på 1920-tallet en elegant løsning på eksternalitetsproblemet: legg en avgift på den forurensende aktiviteten som tilsvarer den eksterne kostnaden. Da vil produsentens private kostnad bli lik den samfunnsøkonomiske kostnaden, og markedet vil av seg selv finne det riktige produksjonsnivået. Denne avgiften kalles i dag en **Pigou-skatt**.

Tilbake til stålfabrikken. Hvis myndighetene legger en avgift på 1 200 kroner per tonn – tilsvarende helsekostnaden for naboene – stiger fabrikkens kostnad til 6 200 kroner per tonn. Nå er det ikke lenger lønnsomt å produsere til 6 000 kroner per tonn, og produksjonen faller til det nivået som faktisk er bra for samfunnet. Markedet er «reparert».

Norges CO₂-avgift er et godt eksempel på en Pigou-lignende avgift. Den legges på utslipp av karbondioksid fra fossilt drivstoff, og gjør at bensinprisen du betaler på pumpen inkluderer en del av klimakostnaden. Prinsippet er genialt i sin enkelhet: den som forurenser mest, betaler mest. Bedrifter som kan kutte utslipp billig, gjør det – fordi det er billigere enn å betale avgiften. Bedrifter med høye rensekostnader betaler avgiften istedenfor. Resultatet er at utslippskuttene skjer der de koster minst, og avgiften gir bedriftene et kontinuerlig insentiv til å utvikle renere teknologi.

Men Pigou-skatten har én stor utfordring: den krever at myndighetene vet nøyaktig hvor stor den eksterne kostnaden er. Hva koster egentlig et tonn CO₂ for samfunnet? Estimatene varierer fra noen hundre til flere tusen kroner. Det gjør det vanskelig å sette avgiften på akkurat riktig nivå.`,
    },
    {
      id: 'samfokonomi-2-6-1-n-section3',
      type: 'text',
      content: `## Coase-teoremet – kan vi bare snakke oss frem til en løsning?

Økonomen Ronald Coase kom med et provoserende motforslag til Pigou: kanskje trenger vi ikke staten i det hele tatt. **Coase-teoremet** sier at dersom eiendomsrettighetene er klart definerte og transaksjonskostnadene er lave, vil de berørte partene forhandle seg frem til en samfunnsøkonomisk effektiv løsning helt på egen hånd.

Tenk deg fabrikken og fiskeren langs elven. Hvis fiskeren har rett til rent vann, kan fabrikken betale fiskeren for å akseptere noe forurensning – opp til det punktet der fabrikkens gevinst fra forurensningen akkurat tilsvarer fiskerens tap. Hvis fabrikken derimot har rett til å forurense, kan fiskeren betale fabrikken for å redusere utslippene. I begge tilfeller ender man – i teorien – på det samme, optimale nivået av forurensning.

Det er en vakker teori, men den møter virkeligheten med et brak. For at Coase-løsningen skal fungere, må partene kunne sette seg rundt et bord og forhandle med lave transaksjonskostnader. Det fungerer kanskje mellom én fabrikk og én fisker. Men hva med klimaendringene? Der er «partene» milliarder av mennesker spredt over hele kloden, og skadene strekker seg over generasjoner som ennå ikke er født. Hvem skal forhandle på vegne av et barn som fødes i Bangladesh i 2080?

I tillegg er eiendomsrettighetene uklare – hvem eier retten til ren luft? – og maktforskjellene mellom partene kan føre til urettferdige utfall. Derfor er Pigou-skatter og offentlig regulering vanligvis nødvendig for store miljøproblemer, mens Coase-løsninger kan fungere for lokale, avgrensede konflikter. Coase-teoremet er likevel verdifullt som tankeverktøy: det minner oss om at problemet med eksternaliteter egentlig handler om manglende eiendomsrettigheter – og at kvotesystemer, der man tildeler utslippsrettigheter, kan ses som en praktisk tilnærming til Coase-ideen.`,
    },
    {
      id: 'samfokonomi-2-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på markedssvikt og eksternaliteter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-6-1-n-quiz1-q0',
            task: 'Hva skjer når det er en negativ eksternalitet i et marked uten regulering?',
            options: [
              { id: 'a', text: 'Det produseres for mye av varen fordi den private kostnaden er lavere enn den samfunnsøkonomiske', isCorrect: true },
              { id: 'b', text: 'Det produseres for lite av varen fordi bedriftene frykter bøter', isCorrect: false },
              { id: 'c', text: 'Markedet finner automatisk det riktige produksjonsnivået', isCorrect: false },
              { id: 'd', text: 'Prisen på varen stiger til den dekker den fulle samfunnskostnaden', isCorrect: false },
            ],
            solution: 'Uten regulering tar produsenten bare hensyn til sine egne kostnader (privat kostnad), ikke skadene som påføres tredjeparter. Fordi den private kostnaden er lavere enn den samfunnsøkonomiske kostnaden, produseres det mer enn det som er optimalt for samfunnet.',
          },
          {
            id: 'samfokonomi-2-6-1-n-quiz1-q1',
            task: 'Hva er hensikten med en Pigou-skatt?',
            options: [
              { id: 'a', text: 'Å maksimere statens skatteinntekter fra industrien', isCorrect: false },
              { id: 'b', text: 'Å gjøre den private kostnaden lik den samfunnsøkonomiske kostnaden', isCorrect: true },
              { id: 'c', text: 'Å eliminere all forurensning i samfunnet', isCorrect: false },
              { id: 'd', text: 'Å straffe bedrifter for uetisk oppførsel', isCorrect: false },
            ],
            solution: 'Pigou-skatten setter avgiften lik den marginale eksterne kostnaden. Produsenten internaliserer eksternaliteten – det vil si at markedsprisen nå gjenspeiler den sanne samfunnskostnaden. Målet er ikke å eliminere all forurensning, men å finne det samfunnsøkonomisk optimale nivået.',
          },
          {
            id: 'samfokonomi-2-6-1-n-quiz1-q2',
            task: 'Hvilken forutsetning må være oppfylt for at Coase-teoremet skal fungere i praksis?',
            options: [
              { id: 'a', text: 'Staten må gripe inn med regulering', isCorrect: false },
              { id: 'b', text: 'Forurensningen må være synlig for alle', isCorrect: false },
              { id: 'c', text: 'Eiendomsrettighetene må være klart definerte og transaksjonskostnadene lave', isCorrect: true },
              { id: 'd', text: 'Alle parter må ha like stor økonomisk makt', isCorrect: false },
            ],
            solution: 'Coase-teoremet forutsetter at eiendomsrettighetene er klare (hvem har rett til hva?) og at transaksjonskostnadene er lave (forhandlingene er billige og enkle). For store miljøproblemer som klimaendringer er ingen av disse betingelsene oppfylt.',
          },
          {
            id: 'samfokonomi-2-6-1-n-quiz1-q3',
            task: 'Hvorfor regnes vaksinering som en positiv eksternalitet?',
            options: [
              { id: 'a', text: 'Fordi vaksiner er billige å produsere', isCorrect: false },
              { id: 'b', text: 'Fordi den som vaksinerer seg beskytter også andre gjennom flokkimmunitet', isCorrect: true },
              { id: 'c', text: 'Fordi staten alltid betaler for vaksinering', isCorrect: false },
              { id: 'd', text: 'Fordi vaksinering aldri har bivirkninger', isCorrect: false },
            ],
            solution: 'Når du vaksinerer deg, reduserer du risikoen for å smitte andre – også dem som ikke kan vaksineres. Denne nytten for tredjeparter er en positiv eksternalitet. Fordi den enkeltes beslutning ikke tar hensyn til denne ekstra nytten, vil markedet alene gi for lite vaksinering, noe som rettferdiggjør subsidier.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om grunnlaget for miljøøkonomien. **Markedssvikt** oppstår når det frie markedet ikke klarer å fordele ressursene på en samfunnsøkonomisk effektiv måte – typisk fordi prisene ikke gjenspeiler alle kostnader. **Eksternaliteter** er kostnader eller nytte som påvirker tredjeparter uten å bli reflektert i markedsprisen. Ved negative eksternaliteter som forurensning produseres det for mye, ved positive eksternaliteter som vaksinering produseres det for lite. **Pigou-skatten** løser dette ved å sette en avgift lik den marginale eksterne kostnaden, slik at produsenten internaliserer eksternaliteten. **Coase-teoremet** viser at private forhandlinger i teorien kan løse eksternalitetsproblemer, men i praksis krever store miljøproblemer offentlige inngrep fordi transaksjonskostnadene er for høye og eiendomsrettighetene uklare.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2 NARRATIV: Miljøpolitiske virkemidler
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_6_2_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-6-2-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '6.2',
  title: 'Miljøpolitiske virkemidler',
  subtitle: 'Narrativ versjon',
  description: 'Fra avgifter og kvoter til elbilsubsidier – en reise gjennom verktøykassen myndighetene bruker for å temme forurensningen, og hvorfor intet virkemiddel er perfekt.',
  estimatedMinutes: 25,
  competenceGoals: [
    'vurdere økonomisk bærekraft',
    'drøfte virkemidler for å fremme bærekraftig utvikling',
  ],
  linkedChapterId: 'samfokonomi-2-6-2',
  content: [
    {
      id: 'samfokonomi-2-6-2-n-intro',
      type: 'text',
      content: `## Verktøykassen mot forurensning

Vi har nå sett at markedet svikter når eksternaliteter får herje fritt. Men hva kan myndighetene faktisk gjøre med det? Svaret er at de har en hel verktøykasse til rådighet – og valget av verktøy er ikke likegyldig. Noen verktøy er presise som en skalpell, andre virker mer som en slegge. Noen er billige og effektive, andre er dyre og tungvinte. Og politikerne må balansere ikke bare effektivitet, men også rettferdighet, gjennomførbarhet og evnen til å drive innovasjon.

De viktigste kategoriene er **økonomiske virkemidler** (avgifter og kvoter), **direkte regulering** (påbud og forbud) og **subsidier** til ønsket atferd. I dette kapittelet skal vi analysere hvert av disse virkemidlene, sammenligne styrker og svakheter, og se hvordan de brukes i praksis – med Norges elbilpolitikk som et fascinerende eksempel på hva som kan gå riktig og hva som kan gå galt.`,
    },
    {
      id: 'samfokonomi-2-6-2-n-section1',
      type: 'text',
      content: `## Miljøavgifter – pris på å forurense

Den mest direkte arvtageren etter Pigou er **miljøavgiften**. Prinsippet er enkelt: legg en avgift på miljøskadelig aktivitet, og la markedet ordne resten. Bedrifter og forbrukere tilpasser seg den nye prisen, og de som kan redusere forurensningen billig, gjør det.

Det finnes flere typer: en **utslippsavgift** legges direkte på utslippet (kroner per tonn CO₂), en **produktavgift** legges på varer som forårsaker forurensning (bensin, plast), og en **ressursavgift** legges på utvinning av naturressurser. Felles for dem alle er at de gjør det dyrere å forurense – og dermed mer lønnsomt å la være.

Miljøavgifter har tre store fordeler. For det første er de **kostnadseffektive**: bedrifter med lave rensekostnader kutter mest, mens de med høye rensekostnader betaler avgiften. Samlet oppnås utslippsmålet til lavest mulig kostnad for samfunnet. For det andre gir de sterke **innovasjonsinsentiver** – det blir lønnsomt å utvikle renere teknologi. For det tredje genererer de **inntekter** som staten kan bruke til å redusere andre skatter eller finansiere grønn omstilling.

Men avgifter har også svakheter. Den viktigste er at man ikke vet nøyaktig hvor mye utslippene vil synke – du kontrollerer prisen, men ikke mengden. I tillegg kan avgifter ramme lavinntektsgrupper uforholdsmessig hardt: en avgift på bensin treffer bonden på bygda hardere enn elbileieren i byen. Og det krever god informasjon om skadevirkninger og rensekostnader for å sette avgiften på riktig nivå.`,
    },
    {
      id: 'samfokonomi-2-6-2-n-section2',
      type: 'text',
      content: `## Omsettelige kvoter – å sette et tak og la markedet handle

Det andre store økonomiske virkemiddelet er **omsettelige utslippskvoter**, ofte kalt cap-and-trade. Her snur myndighetene logikken: istedenfor å sette prisen, setter de mengden. Først bestemmes et totalt utslippstak – et tak som garanterer at utslippene ikke overstiger et bestemt nivå. Deretter fordeles utslippstillatelser (kvoter) til bedriftene, enten gratis eller gjennom auksjon. Så begynner handelen.

En bedrift som kan kutte utslipp billig, gjør det og selger sine overskuddskvoter til bedrifter med høyere rensekostnader. Resultatet er det samme som med avgifter: kuttene skjer der de er billigst. Men i tillegg har du garantien om at det totale utslippstaket ikke overskrides.

**EUs kvotesystem (EU ETS)** er verdens største kvotemarked og dekker kraft- og industrisektoren i hele EØS-området. Norge deltar fullt ut. Systemet har hatt en turbulent historie – kvoteprisen var svært lav i mange år fordi det ble utstedt for mange kvoter, spesielt etter finanskrisen i 2008. Men reformer, inkludert markedsstabilitetsreserven som trekker overskuddskvoter ut av sirkulasjon, har fått prisen opp til over 80–100 euro per tonn – et nivå som faktisk gir sterke insentiver til grønn omstilling.

Kvotesystemets svakhet er speilbildet av avgiftens: du kontrollerer mengden, men ikke prisen. Kvoteprisen kan svinge kraftig, noe som gjør det vanskelig for bedrifter å planlegge langsiktige investeringer. I en lavkonjunktur faller etterspørselen etter kvoter og prisen stuper, noe som svekker insentivene til grønn innovasjon akkurat når man trenger dem.

Avgift og kvoter er altså to sider av samme sak. Avgiften gir **prisforutsigbarhet**, kvotesystemet gir **mengdeforutsigbarhet**. Hvilket som er best, avhenger av hva som er viktigst: å vite hva forurensning koster, eller å vite at utslippsmålet nås.`,
    },
    {
      id: 'samfokonomi-2-6-2-n-section3',
      type: 'text',
      content: `## Subsidier, regulering og det norske elbilmirakelet

Utover avgifter og kvoter har myndighetene to verktøy til. **Subsidier** gjør rene alternativer billigere – de er avgiftens speilbilde. Og **direkte regulering** setter konkrete påbud og forbud: utslippsgrenser, krav om best tilgjengelig teknologi, forbud mot bestemte stoffer.

Norges elbilpolitikk er kanskje verdens mest spektakulære eksempel på subsidier i miljøpolitikken. Fritatt for merverdiavgift, engangsavgift, bompenger og ferjetakster, med tilgang til kollektivfelt – elbilen ble rett og slett billigere og mer praktisk enn fossilbilen. Resultatet? Over 80 prosent av nye biler som selges i Norge er helelektriske. Ingen andre land er i nærheten.

Men suksesshistorien har en bakside. Subsidiene har kostet staten milliarder i tapte avgiftsinntekter. Kostnaden per tonn CO₂ spart gjennom elbilsubsidier er høy sammenlignet med andre tiltak – en CO₂-avgift hadde kanskje gitt lignende kutt til lavere kostnad. Og fordelene har i stor grad gått til høyinntektshusholdninger som har hatt råd til dyre Teslaer.

I praksis bruker de fleste land en **virkemiddelmiks**. Norge har både CO₂-avgift for sektorer utenfor kvotesystemet, EU ETS-kvoter for industri og kraft, subsidier til elbiler og fornybar energi, og direkte regulering som forbud mot oljefyring. Men en slik miks skaper nye utfordringer: overlappende virkemidler kan svekke hverandres effekt, og **karbonlekkasje** – at strenge tiltak i ett land bare flytter utslippene til et annet – forblir en vedvarende trussel som krever internasjonalt samarbeid.`,
    },
    {
      id: 'samfokonomi-2-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på miljøpolitiske virkemidler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-6-2-n-quiz1-q0',
            task: 'Hva er den viktigste forskjellen mellom en miljøavgift og et kvotesystem?',
            options: [
              { id: 'a', text: 'Avgiften gir forutsigbar pris på utslipp, kvotesystemet gir forutsigbar mengde utslipp', isCorrect: true },
              { id: 'b', text: 'Avgiften er alltid billigere for bedriftene enn kvotesystemet', isCorrect: false },
              { id: 'c', text: 'Kvotesystemet brukes bare i utviklingsland', isCorrect: false },
              { id: 'd', text: 'Avgiften eliminerer all forurensning, kvotesystemet tillater noe', isCorrect: false },
            ],
            solution: 'Med en avgift kontrollerer myndighetene prisen (avgiftssatsen) og lar markedet bestemme mengden. Med et kvotesystem kontrollerer myndighetene mengden (utslippstaket) og lar markedet bestemme prisen. Begge er kostnadseffektive, men de gir forutsigbarhet på ulike dimensjoner.',
          },
          {
            id: 'samfokonomi-2-6-2-n-quiz1-q1',
            task: 'Hvorfor anses avgifter og kvoter som mer kostnadseffektive enn direkte regulering?',
            options: [
              { id: 'a', text: 'Fordi de er enklere å administrere', isCorrect: false },
              { id: 'b', text: 'Fordi de lar markedet finne de billigste måtene å redusere utslipp på', isCorrect: true },
              { id: 'c', text: 'Fordi de alltid gir lavere utslipp', isCorrect: false },
              { id: 'd', text: 'Fordi de ikke krever overvåking av bedriftene', isCorrect: false },
            ],
            solution: 'Avgifter og kvoter gir bedriftene fleksibilitet til å velge den billigste løsningen: kutte utslipp eller betale. Bedrifter med lave rensekostnader kutter, bedrifter med høye rensekostnader betaler. Totalregningen for samfunnet blir lavest mulig.',
          },
          {
            id: 'samfokonomi-2-6-2-n-quiz1-q2',
            task: 'Hva er karbonlekkasje?',
            options: [
              { id: 'a', text: 'Lekkasje av CO₂ fra lagringsanlegg', isCorrect: false },
              { id: 'b', text: 'At klimagasser lekker ut av atmosfæren', isCorrect: false },
              { id: 'c', text: 'At strenge klimatiltak i ett land flytter produksjon og utslipp til land med svakere regulering', isCorrect: true },
              { id: 'd', text: 'At kvoteprisen synker under et visst nivå', isCorrect: false },
            ],
            solution: 'Karbonlekkasje oppstår når strenge klimatiltak i ett land gjør det lønnsomt å flytte produksjonen til et land med svakere regulering. De globale utslippene reduseres ikke – de flyttes bare. Derfor er internasjonalt samarbeid og grensejusteringsmekanismer som EUs CBAM viktige.',
          },
          {
            id: 'samfokonomi-2-6-2-n-quiz1-q3',
            task: 'Hva er den viktigste kritikken mot Norges elbilsubsidier?',
            options: [
              { id: 'a', text: 'At elbiler er dårlige for miljøet', isCorrect: false },
              { id: 'b', text: 'At subsidiene har hatt liten effekt på elbilsalget', isCorrect: false },
              { id: 'c', text: 'At kostnaden per tonn CO₂ spart er høy og subsidiene har gått mest til høyinntektsgrupper', isCorrect: true },
              { id: 'd', text: 'At Norge har for få ladestasjoner', isCorrect: false },
            ],
            solution: 'Elbilpolitikken har vært svært effektiv i å øke elbilsalget, men kostnaden per tonn CO₂ spart er høy sammenlignet med andre tiltak. I tillegg har subsidiene i stor grad gått til høyinntektshusholdninger som kjøper dyre elbiler, noe som gjør politikken fordelingsmessig skjev.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-6-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om de viktigste miljøpolitiske virkemidlene. **Miljøavgifter** gir forutsigbar pris på utslipp og sterke innovasjonsinsentiver, men usikkerhet om utslippsmengden. **Omsettelige kvoter** garanterer at utslippsmålet nås, men kvoteprisen kan svinge. **Subsidier** gjør rene alternativer billigere, men kan være kostbare og lite målrettede – som Norges elbilpolitikk illustrerer. **Direkte regulering** gir sikkerhet, men er sjelden kostnadseffektivt. I praksis brukes en **virkemiddelmiks** som kombinerer flere tilnærminger. **Karbonlekkasje** er en viktig utfordring: strenge tiltak i ett land kan flytte utslipp til andre land, noe som krever internasjonalt samarbeid og grensejusteringsmekanismer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3 NARRATIV: Klimaøkonomi
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_6_3_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-6-3-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '6.3',
  title: 'Klimaøkonomi',
  subtitle: 'Narrativ versjon',
  description: 'Historien om verdens største eksternalitet – fra prisen på karbon og kampen om diskonteringsrenten, via Parisavtalen, til Norges dilemma som oljeland med klimaambisjoner.',
  estimatedMinutes: 25,
  competenceGoals: [
    'vurdere økonomisk bærekraft',
    'drøfte virkemidler for å fremme bærekraftig utvikling',
  ],
  linkedChapterId: 'samfokonomi-2-6-3',
  content: [
    {
      id: 'samfokonomi-2-6-3-n-intro',
      type: 'text',
      content: `## Verdens største regning

Klimaendringene er kanskje det største eksempelet på en global eksternalitet noensinne. Hvert tonn CO₂ som slippes ut – fra en fabrikk i Kina, en bil i Norge eller en kubesetning i Brasil – bidrar til oppvarming som rammer hele planeten. Kostnadene treffer urettferdig: øynasjoner som knapt har bidratt til problemet, risikerer å forsvinne under stigende havnivå. Fremtidige generasjoner arver en varmere og mer ustabil verden uten å ha fått stemme i saken.

**Klimaøkonomi** er forsøket på å sette tall på alt dette – å beregne hva klimaendringene koster, hva det koster å stoppe dem, og å utforme politikk som balanserer nåtidens behov mot fremtidens krav. Sentralt står et deceptivt enkelt spørsmål: hva er riktig pris på et tonn CO₂? For lavt, og vi ødelegger planeten. For høyt, og vi kveler økonomisk vekst som kunne ha løftet millioner ut av fattigdom. I dette kapittelet skal vi se på karbonprising, den store debatten om diskonteringsrenten, Parisavtalen og Norges særstilling som oljeland.`,
    },
    {
      id: 'samfokonomi-2-6-3-n-section1',
      type: 'text',
      content: `## Karbonprisens mysterium – hva koster et tonn CO₂?

**Karbonprising** innebærer å sette en pris på utslipp av klimagasser, slik at klimakostnaden blir en del av økonomiske beslutninger. Det kan skje gjennom en **karbonavgift** (myndighetene setter prisen direkte) eller **kvotehandel** (myndighetene setter taket, markedet finner prisen). Men begge metodene leder til det samme grunnleggende spørsmålet: hva burde prisen egentlig være?

Svaret avhenger av **den sosiale kostnaden av karbon**, forkortet SCC – et estimat på den totale skaden ett ekstra tonn CO₂ forårsaker over sin levetid i atmosfæren. SCC skal fange opp alt: skader fra ekstremt vær, tap av jordbruksproduksjon, helsekostnader, havnivåstigning, tap av biologisk mangfold. Det er en astronomisk kompleks beregning.

Og her kommer den virkelige dramatikken inn: estimatene varierer enormt. Det amerikanske miljøvernbyrået EPA har anslått SCC til mellom 500 og 2 000 kroner per tonn. Den britiske økonomen Nicholas Stern beregnet i sin berømte rapport fra 2006 at kostnaden kunne være 7 000–8 000 kroner per tonn. Forskjellen skyldes i stor grad ett enkelt tall: **diskonteringsrenten**.

Diskonteringsrenten bestemmer hvor mye vi vektlegger fremtidige skader sammenlignet med kostnader i dag. En klimaskade på 1 million kroner om 50 år er verdt omtrent 500 000 kroner i dag med en diskonteringsrente på 1,4 prosent – men bare rundt 87 000 kroner med en rente på 5 prosent. Valget av rente endrer altså beregningen med en faktor på nesten seks. Stern brukte en lav rente fordi han mente det er etisk feil å verdsette fremtidige generasjoners velferd lavere enn vår egen. Nordhaus brukte en høyere rente basert på observerte markedsrenter, og argumenterte for en mer gradvis utslippsreduksjon. Det er i stor grad et etisk spørsmål, ikke bare et teknisk.`,
    },
    {
      id: 'samfokonomi-2-6-3-n-section2',
      type: 'text',
      content: `## Parisavtalen og gratispassasjerens dilemma

I desember 2015 samlet nesten alle verdens land seg i Paris og vedtok det som ble hyllet som en historisk klimaavtale. **Parisavtalen** satte målet om å begrense global oppvarming til godt under 2 °C, og helst 1,5 °C, over førindustrielt nivå. Hvert land skulle sette sine egne utslippsmål gjennom **nasjonalt bestemte bidrag (NDC)**, rapportere om fremdriften, og hvert femte år skjerpe ambisjonene.

Men Parisavtalen har et grunnleggende problem som stikker dypere enn teksten: **gratispassasjerproblemet**. Klimaet er et globalt fellesgode. Når Norge kutter utslipp, nyter hele verden godt av det, men kostnadene bæres av nordmenn. Hvert land har derfor et insentiv til å la andre ta byrden – å være gratispassasjer. Hvis Norge kutter alle sine utslipp – rundt 0,1 prosent av de globale – koster det betydelig for norsk økonomi, mens effekten på klimaet er minimal. Det er rasjonelt for hvert enkelt land å vente. Men hvis alle tenker slik, skjer ingenting.

Problemet forsterkes av asymmetri. Noen land – oljeprodusenter og kullbaserte økonomier – har mye høyere kostnader ved omstilling. Øynasjoner og fattige land rammes hardest av klimaendringene, men har minst ansvar og minst kapasitet til å handle. Kostnadene er umiddelbare, mens gevinstene ligger langt frem i tid. Og ingen overnasjonal myndighet kan tvinge suverene stater til å kutte.

Parisavtalen forsøker å overkomme dette gjennom universell deltakelse, jevnlig rapportering og sosialt press. Men de nasjonale målene er frivillige, det finnes ingen sanksjonsmekanisme, og summen av landenes nåværende mål gir anslagsvis 2,5–2,8 °C oppvarming – langt over det erklærte målet.`,
    },
    {
      id: 'samfokonomi-2-6-3-n-section3',
      type: 'text',
      content: `## Grønn omstilling og Norges petroleumsdilemma

**Grønn omstilling** innebærer å transformere økonomien fra fossil til fornybar energi og fra lineær til sirkulær ressursbruk, samtidig som økonomisk vekst og velferd opprettholdes. På kort sikt krever det enorme investeringer i ny infrastruktur, omskolering av arbeidskraft og høye kostnader for umoden teknologi. Men på lang sikt gir det reduserte klimaskader, lavere energikostnader (sol og vind har nesten null marginalkostnad), nye næringer og forbedret folkehelse.

Norge befinner seg i en helt spesiell posisjon. Landet er en av verdens største olje- og gasseksportører – og samtidig et av de mest ambisiøse på klimapolitikk. Dette skaper et dilemma som få andre land opplever i like stor grad. De gjenværende olje- og gassreservene har en estimert verdi på mange tusen milliarder kroner. Men dersom verden lykkes med å nå klimamålene, vil etterspørselen etter olje falle kraftig.

Her dukker begrepet **stranded assets** opp – eiendeler som mister sin verdi før de er ferdig brukt. For å nå 1,5–2 °C-målet kan bare en begrenset mengde fossilt brensel forbrennes. Store deler av verdens olje-, gass- og kullreserver kan aldri utvinnes uten å sprenge karbonbudsjettet. Olje- og gassfelt som forventes å produsere i 30–40 år, kan bli ulønnsomme mye tidligere enn planlagt.

Norges fordel er at oljefondet gir et unikt handlingsrom. Kompetansen fra olje- og gassektoren kan overføres til nye næringer som havvind, karbonfangst og hydrogen. Rikelig tilgang på vannkraft gir billig fornybar energi. Men overgangen krever politisk vilje til å gradvis fase ut den mest lønnsomme næringen – og det er en beslutning ingen norsk politiker tar lett.`,
    },
    {
      id: 'samfokonomi-2-6-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-6-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på klimaøkonomi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-6-3-n-quiz1-q0',
            task: 'Hva er den sosiale kostnaden av karbon (SCC)?',
            options: [
              { id: 'a', text: 'Prisen på kull og olje på verdensmarkedet', isCorrect: false },
              { id: 'b', text: 'Et estimat på den totale skaden ett ekstra tonn CO₂ forårsaker over tid', isCorrect: true },
              { id: 'c', text: 'Kostnadene ved å bygge nye kullkraftverk', isCorrect: false },
              { id: 'd', text: 'Skattesatsen på fossilt drivstoff i Norge', isCorrect: false },
            ],
            solution: 'SCC er et estimat på den totale samfunnsskaden ett ekstra tonn CO₂ forårsaker over sin levetid i atmosfæren, inkludert skader fra ekstremvær, tap av jordbruksproduksjon, helsekostnader og havnivåstigning. Estimatene varierer enormt avhengig av modell og diskonteringsrente.',
          },
          {
            id: 'samfokonomi-2-6-3-n-quiz1-q1',
            task: 'Hvorfor fører en lavere diskonteringsrente til en høyere optimal karbonpris?',
            options: [
              { id: 'a', text: 'Fordi lavere rente gjør det billigere å låne penger', isCorrect: false },
              { id: 'b', text: 'Fordi lavere rente betyr at fremtidige klimaskader veier tyngre i dagens beregninger', isCorrect: true },
              { id: 'c', text: 'Fordi lavere rente øker etterspørselen etter fossilt drivstoff', isCorrect: false },
              { id: 'd', text: 'Fordi lavere rente gjør fornybar energi dyrere', isCorrect: false },
            ],
            solution: 'Diskonteringsrenten bestemmer hvor mye vi vektlegger fremtidige skader. Med lav rente diskonteres fremtidige skader lite – de veier tungt i nåtidsberegninger. Dermed blir den beregnede skaden av et tonn CO₂ høyere, og den optimale karbonprisen for å korrigere eksternaliteten blir tilsvarende høyere.',
          },
          {
            id: 'samfokonomi-2-6-3-n-quiz1-q2',
            task: 'Hva er den største svakheten ved Parisavtalen?',
            options: [
              { id: 'a', text: 'At bare rike land deltar', isCorrect: false },
              { id: 'b', text: 'At den forbyr all bruk av fossilt brensel', isCorrect: false },
              { id: 'c', text: 'At de nasjonale utslippsmålene er frivillige og det ikke finnes sanksjonsmekanismer', isCorrect: true },
              { id: 'd', text: 'At den kun dekker CO₂ og ikke andre klimagasser', isCorrect: false },
            ],
            solution: 'Parisavtalens største svakhet er at de nasjonale målene er selvbestemte og frivillige. Det finnes ingen sanksjoner for land som ikke oppfyller sine løfter. Summen av nåværende mål gir anslagsvis 2,5–2,8 °C oppvarming, langt over det erklærte målet om 1,5–2 °C.',
          },
          {
            id: 'samfokonomi-2-6-3-n-quiz1-q3',
            task: 'Hva menes med «stranded assets» i klimaøkonomien?',
            options: [
              { id: 'a', text: 'Eiendeler som er fysisk ødelagt av klimaendringer', isCorrect: false },
              { id: 'b', text: 'Eiendeler som mister verdi fordi klimapolitikk gjør dem ulønnsomme før de er ferdig brukt', isCorrect: true },
              { id: 'c', text: 'Investeringer i fornybar energi som ikke gir avkastning', isCorrect: false },
              { id: 'd', text: 'Naturressurser som er utilgjengelige på grunn av is', isCorrect: false },
            ],
            solution: 'Stranded assets er eiendeler – som olje- og gassreserver og tilhørende infrastruktur – som risikerer å miste mye av sin verdi fordi klimapolitikk, teknologisk utvikling eller endrede markedsforhold gjør dem ulønnsomme lenge før de er ferdig utnyttet.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-6-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Klimaøkonomien handler om å håndtere verdens største eksternalitet. **Karbonprising** – enten gjennom avgift eller kvotehandel – er det sentrale økonomiske virkemiddelet for å internalisere klimakostnaden. **Den sosiale kostnaden av karbon (SCC)** varierer enormt avhengig av modell og **diskonteringsrente**, som i stor grad er et etisk spørsmål om hvordan vi verdsetter fremtidige generasjoner. **Parisavtalen** har samlet nesten alle verdens land, men de nasjonale målene er frivillige og utilstrekkelige – delvis på grunn av **gratispassasjerproblemet** som gjør internasjonalt klimasamarbeid svært vanskelig. **Grønn omstilling** krever kortsiktige investeringer, men gir langsiktige gevinster. **Stranded assets** er en reell risiko for fossilbaserte økonomier som Norge, som må balansere sin rolle som oljeland med sine klimaambisjoner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4 NARRATIV: Sirkulær økonomi
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_6_4_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-6-4-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '6.4',
  title: 'Sirkulær økonomi',
  subtitle: 'Narrativ versjon',
  description: 'Fra «ta-bruke-kaste» til en økonomi der ingenting er avfall – om mobiltelefoner som aldri dør, fabrikker som deler restprodukter, og spørsmålet om vi kan vokse uten å forbruke.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere økonomisk bærekraft',
    'drøfte virkemidler for å fremme bærekraftig utvikling',
  ],
  linkedChapterId: 'samfokonomi-2-6-4',
  content: [
    {
      id: 'samfokonomi-2-6-4-n-intro',
      type: 'text',
      content: `## Når søppel blir gull

Tenk på den siste mobiltelefonen du kastet. Den inneholdt gull, kobolt, litium, sjeldne jordmetaller – råvarer utvunnet fra gruver i Kongo og Chile, fraktet til fabrikker i Kina, satt sammen av tusenvis av komponenter, og brukt av deg i kanskje to–tre år. Så havnet den i en skuff, og til slutt i søpla. Bare rundt 20 prosent av verdens elektroniske avfall resirkuleres. Resten ender på søppelfyllinger eller eksporteres til utviklingsland der barn plukker ut metaller under helsefarlige forhold.

Denne historien illustrerer den **lineære økonomien** – modellen som har drevet velstandsveksten de siste 200 årene. Vi utvinner råvarer, produserer varer, bruker dem og kaster dem. Ta, bruke, kaste. Det er en modell som har gjort oss rikere enn noen generasjon før oss, men den har en fatal svakhet: den forutsetter at naturens ressurser er ubegrensede og at naturen tåler uendelige mengder avfall. Det gjør den ikke.

**Sirkulær økonomi** er det ambisiøse alternativet – et økonomisk system der produkter og materialer holdes i bruk så lenge som mulig gjennom gjenbruk, reparasjon, oppgradering og resirkulering. Målet er å minimere avfall og utvinning av nye råvarer, samtidig som økonomisk verdiskaping opprettholdes. Det er ikke bare en miljøidé – det er en fundamental omtenkning av hvordan hele økonomien fungerer.`,
    },
    {
      id: 'samfokonomi-2-6-4-n-section1',
      type: 'text',
      content: `## Fra rett linje til sirkel

I den lineære modellen flyter ressursene i én retning: utvinning, produksjon, bruk, avfall. Det er en rett linje fra naturen til søppelfyllingen. Den sirkulære modellen snur dette: ressursene går i sirkler og holdes i økonomien så lenge som mulig. Utvinning fører til produksjon, som fører til bruk, som fører til gjenbruk, reparasjon eller resirkulering, som fører tilbake til ny produksjon.

Prinsippene kan sammenfattes i det såkalte **R-hierarkiet**, rangert fra mest til minst foretrukket. Øverst står *Refuse* – å avvise unødvendig forbruk i utgangspunktet. Trenger du virkelig en ny telefon, eller fungerer den gamle? Deretter *Reduce* – å bruke færre ressurser i det du faktisk produserer. Så *Reuse* – å bruke produkter om igjen, som når du selger klær på Finn.no. Videre *Repair* – å reparere istedenfor å kaste, slik skomakerens håndverk har gjort i århundrer. Og først når alt annet er uttømt, kommer *Recycle* – å gjenvinne materialene til ny produksjon – og til sist *Recover* – å gjenvinne energi ved å brenne avfallet.

La oss ta mobiltelefonen som eksempel igjen. I en sirkulær modell ville den blitt designet med utskiftbare deler – batteri, skjerm, kamera – slik at du ikke trenger å kaste hele telefonen fordi batteriet er slitt. Programvareoppdateringer ville sikre at eldre modeller fortsatt fungerer godt. Når du er ferdig med den, ville du selge den videre. Og når den virkelig ikke kan brukes lenger, ville verdifulle materialer bli gjenvunnet til nye produkter. EUs nye «rett til å reparere»-lovgivning er et skritt i denne retningen.`,
    },
    {
      id: 'samfokonomi-2-6-4-n-section2',
      type: 'text',
      content: `## Hvorfor vi ikke allerede lever i en sirkulær økonomi

Hvis sirkulær økonomi er så fornuftig, hvorfor gjør vi det ikke allerede? Svaret handler om markedssvikt, teknologi og menneskelig atferd.

Den viktigste **økonomiske barrieren** er at nye råvarer ofte er billigere enn resirkulerte. Og grunnen er nettopp eksternaliteter: råvareprisene inkluderer ikke de fulle miljøkostnadene ved utvinning, forurensning og avfallshåndtering. Så lenge forurensning er gratis, vil det være billigere å grave opp ny kobolt enn å gjenvinne den fra gamle telefoner. Reparasjon er dyrere enn nykjøp for mange produkter – ikke fordi det er naturlig, men fordi prisene lyver om de reelle kostnadene.

Det finnes også **teknologiske barrierer**: mange produkter er rett og slett ikke designet for å demonteres og resirkuleres. Mobiltelefoner er limt sammen, klær er laget av blandingsfibre som ikke kan separeres, og kvaliteten på resirkulerte materialer er ofte lavere enn nye.

Og så er det oss – forbrukerne. Vi foretrekker nytt fremfor brukt. Vi lar oss friste av trender og statusforbruk. Delingsøkonomi krever tillit – at den du deler bil med, behandler den pent – og det er ikke alltid enkelt.

Men driverne for endring vokser. Råvareprisene stiger. EU innfører stadig strengere miljøregulering. Nye forretningsmodeller som **delingsøkonomi**, **leasing** og **produkt-som-tjeneste** gjør det mulig å tjene penger uten å selge stadig flere nye ting. Og holdningene endrer seg, særlig blant yngre generasjoner som ser bærekraft som en verdi i seg selv.`,
    },
    {
      id: 'samfokonomi-2-6-4-n-section3',
      type: 'text',
      content: `## Nye forretningsmodeller – når du leaser lys istedenfor å kjøpe lyspærer

Overgangen til sirkulær økonomi krever fundamentalt nye måter å drive forretning på. Tre modeller peker seg ut.

**Produkt-som-tjeneste** snur eierskapet på hodet. Istedenfor å selge et produkt, selger bedriften tilgang til funksjonen. Philips leaser belysning til bedrifter – kunden betaler per lux-time, og Philips beholder eierskapet til lampene. Michelin selger «kjørte kilometer» istedenfor dekk. Fordi produsenten eier produktet, har den et direkte insentiv til å lage det holdbart, energieffektivt og lett reparerbart. Avfall blir produsentens problem, ikke kundens.

**Utvidet produsentansvar (EPR)** pålegger produsenter ansvar for produktets hele livsløp, inkludert avfallshåndtering. Det norske pantsystemet er et godt eksempel: du betaler pant på flasker og bokser, og får pengene tilbake når du leverer dem til resirkulering. Retursystemet for elektronikk fungerer etter samme prinsipp. Når produsenten vet at den må betale for avfallet, designer den for resirkulering.

**Industriell symbiose** er kanskje den mest elegante modellen. I den danske byen Kalundborg utveksler et kraftverk, et oljeraffineri, en gipsprodusent og et enzymselskap energi, vann og materialer. Avfallet fra én bedrift er råvaren for en annen. Det er naturens egen logikk – i et økosystem finnes det ikke søppel – overført til industrien.

Virkemidler som kan akselerere overgangen inkluderer offentlige innkjøp med sirkulære krav, redusert moms på reparasjonstjenester, forbud mot planlagt foreldelse og krav om at produkter skal være reparerbare. Det store spørsmålet er om sirkulær økonomi er forenlig med økonomisk vekst – om vi kan øke BNP samtidig som vi bruker stadig færre ressurser. Svaret er usikkert: noe frakobling er mulig, men full absolutt frakobling i global skala er ennå ikke oppnådd.`,
    },
    {
      id: 'samfokonomi-2-6-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-6-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på sirkulær økonomi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-6-4-n-quiz1-q0',
            task: 'Hva er den viktigste forskjellen mellom lineær og sirkulær økonomi?',
            options: [
              { id: 'a', text: 'Lineær økonomi er billigere, sirkulær økonomi er dyrere', isCorrect: false },
              { id: 'b', text: 'I lineær økonomi ender ressurser som avfall, i sirkulær økonomi holdes materialer i bruk så lenge som mulig', isCorrect: true },
              { id: 'c', text: 'Sirkulær økonomi bruker bare fornybare ressurser', isCorrect: false },
              { id: 'd', text: 'Lineær økonomi finnes bare i fattige land', isCorrect: false },
            ],
            solution: 'I en lineær økonomi flyter ressursene i én retning: utvinning, produksjon, bruk, avfall. I en sirkulær økonomi holdes materialer i bruk så lenge som mulig gjennom gjenbruk, reparasjon og resirkulering, slik at behovet for nye råvarer og mengden avfall minimeres.',
          },
          {
            id: 'samfokonomi-2-6-4-n-quiz1-q1',
            task: 'Hvorfor er det ofte billigere å kjøpe nytt enn å reparere?',
            options: [
              { id: 'a', text: 'Fordi reparasjon alltid krever mer energi enn nyproduksjon', isCorrect: false },
              { id: 'b', text: 'Fordi råvareprisene ikke inkluderer de fulle miljøkostnadene ved utvinning og avfallshåndtering', isCorrect: true },
              { id: 'c', text: 'Fordi myndighetene legger avgift på reparasjonstjenester', isCorrect: false },
              { id: 'd', text: 'Fordi nye produkter alltid er av bedre kvalitet', isCorrect: false },
            ],
            solution: 'Råvareprisene gjenspeiler ikke de reelle miljøkostnadene – utvinning forårsaker forurensning, produksjonen slipper ut klimagasser, og avfallet skaper problemer. Disse kostnadene er eksternaliteter som ikke inkluderes i prisen. Hadde de vært inkludert, ville reparasjon og gjenbruk vært relativt mer lønnsomt.',
          },
          {
            id: 'samfokonomi-2-6-4-n-quiz1-q2',
            task: 'Hva er «produkt-som-tjeneste»?',
            options: [
              { id: 'a', text: 'At kunden kjøper produktet og eier det selv', isCorrect: false },
              { id: 'b', text: 'At produsenten beholder eierskapet og selger tilgang til produktets funksjon', isCorrect: true },
              { id: 'c', text: 'At produktet leveres som en digital tjeneste', isCorrect: false },
              { id: 'd', text: 'At staten eier produktene og leier dem ut til innbyggerne', isCorrect: false },
            ],
            solution: 'I en produkt-som-tjeneste-modell selger bedriften funksjonen istedenfor produktet. Philips selger belysning (lux-timer) istedenfor lyspærer. Fordi produsenten beholder eierskapet, har den insentiv til å lage holdbare, reparerbare produkter – det blir produsentens problem om ting går i stykker.',
          },
          {
            id: 'samfokonomi-2-6-4-n-quiz1-q3',
            task: 'Hva er R-hierarkiets øverste prioritering?',
            options: [
              { id: 'a', text: 'Recycle – resirkuler materialene', isCorrect: false },
              { id: 'b', text: 'Repair – reparer produkter', isCorrect: false },
              { id: 'c', text: 'Refuse – avvis unødvendig forbruk', isCorrect: true },
              { id: 'd', text: 'Reduce – bruk færre ressurser', isCorrect: false },
            ],
            solution: 'R-hierarkiet rangerer tiltak fra mest til minst foretrukket: Refuse (avvis), Reduce (reduser), Reuse (gjenbruk), Repair (reparer), Recycle (resirkuler), Recover (gjenvin energi). Å unngå forbruk i utgangspunktet er det mest effektive tiltaket.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-6-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om overgangen fra lineær til sirkulær økonomi. Den **lineære modellen** – ta, bruke, kaste – er ikke bærekraftig fordi den tærer på begrensede ressurser og skaper avfall. **Sirkulær økonomi** holder materialer i bruk så lenge som mulig gjennom **R-hierarkiet**: fra å avvise unødvendig forbruk, via gjenbruk og reparasjon, til resirkulering. Barrierer mot overgangen inkluderer billige råvarer (fordi miljøkostnaden er en eksternalitet), produktdesign som vanskeliggjør reparasjon, og forbrukervaner. Nye forretningsmodeller som **produkt-som-tjeneste**, **utvidet produsentansvar** og **industriell symbiose** viser at det er mulig å tjene penger uten å selge stadig nye produkter. Virkemidler som miljøavgifter, økodesignkrav og redusert moms på reparasjon kan akselerere utviklingen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.5 NARRATIV: Bærekraftig utvikling
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_6_5_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-6-5-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '6.5',
  title: 'Bærekraftig utvikling',
  subtitle: 'Narrativ versjon',
  description: 'Fra Gro Harlem Brundtlands visjon til oljefondets etiske dilemmaer – om bærekraftsmål som kolliderer, grønnvasking som truer tilliten, og jakten på en økonomi som fungerer for alle generasjoner.',
  estimatedMinutes: 25,
  competenceGoals: [
    'vurdere økonomisk bærekraft',
    'drøfte virkemidler for å fremme bærekraftig utvikling',
  ],
  linkedChapterId: 'samfokonomi-2-6-5',
  content: [
    {
      id: 'samfokonomi-2-6-5-n-intro',
      type: 'text',
      content: `## En norsk idé som forandret verden

I 1987 la en norsk politiker frem en rapport som skulle forandre måten verden tenker om utvikling. Gro Harlem Brundtland ledet FN-kommisjonen som definerte **bærekraftig utvikling** som «utvikling som imøtekommer dagens behov uten å ødelegge mulighetene for at kommende generasjoner skal få dekket sine behov». Det er en setning som er blitt gjentatt millioner av ganger – men som rommer en enorm utfordring.

For hva betyr det egentlig i praksis? Bærekraftig utvikling har tre dimensjoner som alle må ivaretas samtidig. **Økonomisk bærekraft** handler om en stabil økonomi som skaper verdier og velferd over tid. **Sosial bærekraft** handler om rettferdighet, helse, utdanning og like muligheter. Og **miljømessig bærekraft** handler om å bevare naturressurser og økosystemer for fremtiden.

Utfordringen er at disse tre dimensjonene kan komme i konflikt med hverandre. Økonomisk vekst som løfter millioner ut av fattigdom, kan ødelegge klimaet. Streng miljøpolitikk kan ramme arbeidsplasser og øke ulikhet. I dette kapittelet skal vi se på FNs bærekraftsmål som forsøk på å samle alt i ett rammeverk, ESG-kriterier som verktøy for ansvarlige investeringer, og grønn finans som mekanisme for å dreie pengestrømmene i bærekraftig retning.`,
    },
    {
      id: 'samfokonomi-2-6-5-n-section1',
      type: 'text',
      content: `## De 17 målene – ambisiøse, uunnværlige og umulige?

I 2015 vedtok FN **17 bærekraftsmål** (Sustainable Development Goals, SDG) som skal nås innen 2030. De spenner fra å utrydde fattigdom og sult, via god helse, utdanning og likestilling, til ren energi, anstendig arbeid, bærekraftige byer, ansvarlig forbruk, klimahandling og bevaring av livet i havet og på land.

Det er en formidabel liste. Og det er meningen. Bærekraftsmålene er ment som et felles språk – et rammeverk som myndigheter, næringsliv og sivilsamfunn kan samle seg rundt. De erkjenner at fattigdom, ulikhet, helse og miljø henger sammen, og at man ikke kan løse ett problem uten å ta hensyn til de andre.

Men nettopp fordi målene er så brede, oppstår det **målkonflikter**. Ta mål 7 (ren energi for alle) og mål 13 (stoppe klimaendringene). Rundt 675 millioner mennesker i verden mangler elektrisitet. Den raskeste veien til energi har tradisjonelt gått gjennom kull og gass – men det forverrer klimaproblemet. Afrikanske land ønsker å bruke sine gassressurser for å løfte befolkningen ut av energifattigdom, men klimamålet tilsier at disse ressursene bør bli liggende. Heldigvis har fornybar energi – spesielt sol – blitt så billig at mange utviklingsland nå kan hoppe over fossil energi helt. Men det krever investeringer som landene ofte ikke har råd til alene.

Kritikken mot bærekraftsmålene er at de er svært ambisiøse – og verden ligger bak skjema på de fleste av dem. De er ikke juridisk bindende, og det mangler effektive mekanismer for rapportering og ansvarliggjøring. Men de har likevel vist seg verdifulle som kompass – en felles retning som alle kan navigere etter, selv om vi ikke når destinasjonen innen 2030.`,
    },
    {
      id: 'samfokonomi-2-6-5-n-section2',
      type: 'text',
      content: `## ESG – når investorer bryr seg om mer enn avkastning

De siste årene har tre bokstaver forandret finansverdenen: **ESG** – Environmental, Social and Governance. Det er et sett med kriterier som brukes til å vurdere hvor bærekraftig og ansvarlig en bedrift eller investering egentlig er.

**E** for Environmental handler om bedriftens miljøpåvirkning: klimagassutslipp, energieffektivitet, avfallshåndtering og påvirkning på biologisk mangfold. **S** for Social handler om det menneskelige: arbeidsforhold, mangfold, helse og sikkerhet, og respekt for menneskerettigheter. **G** for Governance handler om styring: er styret uavhengig? Er lederlønn rimelig? Er det god kontroll mot korrupsjon?

Investorer bruker ESG-kriterier for å identifisere risiko og muligheter som tradisjonell finansanalyse overser. En bedrift med dårlige arbeidsforhold risikerer streiker og omdømmetap. En bedrift med høye klimagassutslipp risikerer å bli rammet av nye reguleringer. En bedrift med dårlig styring risikerer skandaler og verditap. ESG er altså ikke bare idealisme – det er risikostyring.

Norges oljefond – verdens største statlige investeringsfond med over 9 000 selskaper i porteføljen – er et fremtredende eksempel. Etikkrådet vurderer selskaper mot etiske retningslinjer og anbefaler utelukkelse ved alvorlige brudd. Fondet har utelukket selskaper som produserer kjernevåpen, klaseammunisjon, tobakk og kull. I tillegg driver fondet aktivt eierskap: det stemmer på generalforsamlinger og tar opp ESG-spørsmål direkte med selskapenes ledelse.

Men dilemmaene er reelle. Gir utelukkelse best resultat, eller er det bedre å forbli som eier og presse på for endring innenfra? Fondet eier aksjer i olje- og gasselskaper – er det forenlig med Norges klimamål? Og hvordan forsvarer man Norges dobbeltrolle som oljeprodusent og klimaforkjemper? Det er spørsmål uten enkle svar.`,
    },
    {
      id: 'samfokonomi-2-6-5-n-section3',
      type: 'text',
      content: `## Grønn finans og kampen mot grønnvasking

For å nå klimamålene trengs enorme investeringer – langt mer enn offentlige budsjetter kan dekke. **Grønn finans** er svaret: finansielle produkter og reguleringer som kanaliserer privat kapital mot miljøvennlige aktiviteter.

**Grønne obligasjoner** er kanskje det mest synlige instrumentet. Det er lånopptak der pengene øremerkes grønne prosjekter – fornybar energi, energieffektivisering, ren transport. Markedet har eksplodert fra nesten null i 2007 til over 500 milliarder dollar årlig. Uavhengige tredjeparter verifiserer at midlene faktisk brukes som lovet.

Men med veksten kommer en fare: **grønnvasking**. Det er når en bedrift eller et finansprodukt fremstiller seg som mer miljøvennlig enn det faktisk er. Villedende markedsføring med naturbilder på produkter med høyt fotavtrykk. Selektiv rapportering som fremhever det positive og skjuler det negative. Vage påstander om å være «miljøvennlig» uten dokumentasjon. Grønne fond som investerer i selskaper som knapt fortjener merkelappen.

**EUs taksonomi** er det mest ambisiøse forsøket på å motvirke dette. Det er et klassifiseringssystem som definerer presist hva som regnes som en grønn økonomisk aktivitet, basert på vitenskapelige kriterier. Aktiviteter vurderes mot seks miljømål og må bestå en dobbelttest: de må bidra vesentlig til minst ett mål og ikke gjøre vesentlig skade på noen av de andre.

I tillegg krever sentralbanker og finanstilsyn i økende grad at finansinstitusjoner rapporterer **klimarisiko** – både den fysiske risikoen fra klimaendringer (flom, tørke, brann) og overgangsrisikoen når økonomien omstilles (stranded assets, ny regulering). Budskapet er klart: klimaendringer er ikke lenger bare et miljøproblem – de er et finansielt risikoproblem som truer stabiliteten i hele det finansielle systemet.`,
    },
    {
      id: 'samfokonomi-2-6-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-6-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på bærekraftig utvikling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-6-5-n-quiz1-q0',
            task: 'Hva menes med bærekraftig utvikling ifølge Brundtlandkommisjonen?',
            options: [
              { id: 'a', text: 'Økonomisk vekst som er så høy som mulig', isCorrect: false },
              { id: 'b', text: 'Utvikling som imøtekommer dagens behov uten å ødelegge mulighetene for kommende generasjoner', isCorrect: true },
              { id: 'c', text: 'En utviklingsmodell der miljøet alltid prioriteres over økonomien', isCorrect: false },
              { id: 'd', text: 'Utvikling som kun fokuserer på å redusere klimagassutslipp', isCorrect: false },
            ],
            solution: 'Brundtlandkommisjonen definerte bærekraftig utvikling som utvikling som imøtekommer dagens behov uten å ødelegge mulighetene for kommende generasjoner. Begrepet har tre dimensjoner: økonomisk, sosial og miljømessig bærekraft – alle tre må ivaretas samtidig.',
          },
          {
            id: 'samfokonomi-2-6-5-n-quiz1-q1',
            task: 'Hva står bokstavene ESG for?',
            options: [
              { id: 'a', text: 'Economic, Strategic and Global', isCorrect: false },
              { id: 'b', text: 'Energy, Sustainability and Growth', isCorrect: false },
              { id: 'c', text: 'Environmental, Social and Governance', isCorrect: true },
              { id: 'd', text: 'Emission, Standard and Guideline', isCorrect: false },
            ],
            solution: 'ESG står for Environmental (miljø), Social (sosialt ansvar) og Governance (selskapsstyring). Det er kriterier som brukes av investorer og bedrifter for å vurdere og rapportere bærekraftsprestasjon, identifisere risiko og muligheter.',
          },
          {
            id: 'samfokonomi-2-6-5-n-quiz1-q2',
            task: 'Hva er grønnvasking?',
            options: [
              { id: 'a', text: 'En metode for å rense forurenset vann', isCorrect: false },
              { id: 'b', text: 'Når en bedrift fremstiller seg som mer miljøvennlig enn den faktisk er', isCorrect: true },
              { id: 'c', text: 'Når staten subsidierer grønne bedrifter', isCorrect: false },
              { id: 'd', text: 'En type grønn obligasjon', isCorrect: false },
            ],
            solution: 'Grønnvasking (greenwashing) er når en bedrift eller et finansprodukt fremstiller seg som mer miljøvennlig enn det faktisk er – gjennom villedende markedsføring, selektiv rapportering eller vage påstander. EUs taksonomi er et forsøk på å motvirke dette med klare, vitenskapelige definisjoner.',
          },
          {
            id: 'samfokonomi-2-6-5-n-quiz1-q3',
            task: 'Hvorfor kan det oppstå konflikter mellom FNs bærekraftsmål?',
            options: [
              { id: 'a', text: 'Fordi FN har for mange mål', isCorrect: false },
              { id: 'b', text: 'Fordi fremgang på ett mål kan hindre fremgang på et annet, som når energitilgang kolliderer med klimamål', isCorrect: true },
              { id: 'c', text: 'Fordi ulike land har vedtatt ulike mål', isCorrect: false },
              { id: 'd', text: 'Fordi målene er juridisk bindende og begrenser handlefriheten', isCorrect: false },
            ],
            solution: 'Bærekraftsmålene dekker økonomiske, sosiale og miljømessige dimensjoner som kan komme i konflikt. For eksempel kan økt energitilgang (mål 7) – dersom den baseres på fossilt brensel – forverre klimaproblemet (mål 13). Løsningen krever integrert tenkning og teknologiske fremskritt som fornybar energi.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-6-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om det overordnede rammeverket for bærekraft. **Bærekraftig utvikling** – definert av Brundtlandkommisjonen – har tre dimensjoner: økonomisk, sosial og miljømessig, og alle tre må ivaretas samtidig. **FNs 17 bærekraftsmål** gir et globalt rammeverk, men er ambisiøse, ikke juridisk bindende, og preget av målkonflikter. **ESG-kriterier** (miljø, sosialt ansvar, selskapsstyring) brukes av investorer for å vurdere bærekraftsprestasjon og styre kapital mot ansvarlige selskaper – som vist ved Norges oljefond. **Grønn finans** kanaliserer kapital mot bærekraftige aktiviteter gjennom grønne obligasjoner og klimarisikorapportering. **Grønnvasking** truer tilliten til grønne investeringer, men **EUs taksonomi** forsøker å motvirke dette med vitenskapelig baserte definisjoner av hva som faktisk er grønt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle narrative kapitler DEL 6
// ============================================================================

export const SAMFOKONOMI_2_NARRATIV_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_6_1_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_6_2_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_6_3_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_6_4_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_6_5_NARRATIV,
];
