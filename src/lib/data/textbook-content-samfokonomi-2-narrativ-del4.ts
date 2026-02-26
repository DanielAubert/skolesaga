/* eslint-disable */
// @ts-nocheck
/**
 * Samfunnsøkonomi 2 (VG3) - NARRATIV VERSJON DEL 4
 * Kapittel 4.1-4.5: Arbeidsmarked og sysselsetting
 *
 * Narrativ versjon optimalisert for lesing/lytting på mobil.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1 NARRATIV: Arbeidsmarkedet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_4_1_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-4-1-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '4.1',
  title: 'Arbeidsmarkedet',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om markedet der mennesker selger sin tid og kompetanse – og hvorfor lønnen din handler om mye mer enn bare tilbud og etterspørsel.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere hvordan arbeidsmarkedet fungerer og drøfte arbeidsmarkedspolitikk',
  ],
  linkedChapterId: 'samfokonomi-2-4-1',
  content: [
    {
      id: 'samfokonomi-2-4-1-n-intro',
      type: 'text',
      content: `## Markedet der mennesker er varen

Tenk deg at du står på Finn.no og blar gjennom jobbannonser. Du ser stillinger for sykepleiere, programmerere, lærere og elektrikere. Hver annonse er egentlig en etterspørsel – en bedrift eller institusjon som trenger menneskelig arbeidskraft. Og hver person som sender inn en søknad, representerer et tilbud. Velkommen til **arbeidsmarkedet** – det mest komplekse og kanskje viktigste av alle markeder i en økonomi.

Arbeidsmarkedet er stedet der arbeidskraft kjøpes og selges. Arbeidstakere tilbyr sin tid, kompetanse og innsats, mens arbeidsgivere etterspør denne arbeidskraften for å produsere varer og tjenester. Prisen i dette markedet er **lønnen** – den kompensasjonen du får for å gi bort timer av livet ditt til en arbeidsgiver.

Men dette markedet skiller seg fundamentalt fra andre markeder. Arbeidskraft er ikke en standardisert vare som tonn stål eller liter melk. Hver arbeidstaker er unik, med sin egen kombinasjon av utdanning, erfaring, motivasjon og personlighet. Arbeidskraft kan ikke lagres på et lager og selges neste uke. Og i motsetning til de fleste andre markeder, er arbeidsmarkedet tungt regulert – med arbeidsmiljølov, tariffavtaler, oppsigelsesfrister og fagforeninger som forhandler på vegne av tusenvis av ansatte samtidig.`,
    },
    {
      id: 'samfokonomi-2-4-1-n-section1',
      type: 'text',
      content: `## Hvem tilbyr og hvem etterspør?

La oss starte med **tilbudssiden** – alle de menneskene som ønsker å jobbe. Hva bestemmer hvor mange som vil jobbe, og hvor mye? For det første handler det om **befolkningens størrelse og alderssammensetning**. Et land med mange mennesker i yrkesaktiv alder (typisk 20–67 år) har et stort potensielt arbeidstilbud. Norge opplever en eldrebølge der stadig flere går av med pensjon, noe som krymper arbeidstilbudet over tid.

For det andre spiller **yrkesdeltakelsen** en avgjørende rolle – altså andelen av befolkningen i yrkesaktiv alder som faktisk velger å delta i arbeidsmarkedet. Norge har en av verdens høyeste yrkesdeltakelser, særlig blant kvinner. Da mødrene for alvor inntok arbeidslivet fra 1970-tallet, var det som å åpne en helt ny kilde med arbeidskraft – tilbudet økte dramatisk.

Så har vi **arbeidstid** (hvor mange timer folk ønsker å jobbe), **kompetanse** (utdanningsnivå og ferdigheter som påvirker hva slags arbeid som tilbys) og **innvandring**, som kan øke tilbudet betydelig. Arbeidsinnvandring fra EØS-området har vært viktig for norsk byggebransje og servicenæring.

På den andre siden finner vi **etterspørselssiden**. Bedriftene ansetter ikke folk for moro skyld – de gjør det fordi de trenger arbeidskraft til å produsere noe som kan selges. Etterspørselen etter arbeidskraft er det økonomer kaller en **avledet etterspørsel**: den avhenger av etterspørselen etter de varene og tjenestene arbeidstakerne produserer. Hvis ingen vil kjøpe møbler, ansetter ikke møbelfabrikken snekre. Etterspørselen påvirkes også av **lønnskostnader** (dyrere arbeidskraft betyr færre ansettelser), **produktivitet** (høy produktivitet gjør det mer lønnsomt å ansette), **teknologi** og **konjunkturer** – den økonomiske syklusen som får etterspørselen til å svinge.`,
    },
    {
      id: 'samfokonomi-2-4-1-n-section2',
      type: 'text',
      content: `## Likevekt, lønn og det som skjer mellom linjene

I den enkle modellen finner arbeidsmarkedet sin **likevekt** der tilbuds- og etterspørselskurvene krysser hverandre. Ved likevektslønnen er antallet som vil jobbe nøyaktig lik antallet bedriftene vil ansette. Sett opp som et talleksempel: Hvis tilbudskurven er $W = 100 + 0{,}1L$ og etterspørselskurven er $W = 500 - 0{,}1L$ (der $W$ er lønn i tusen kroner og $L$ er sysselsatte i tusen), finner vi likevekt ved å sette dem like. Da får vi $L = 2\,000$ tusen sysselsatte og en likevektslønn på 300 000 kroner. Elegant og ryddig.

Men virkeligheten er ikke like elegant. I praksis bestemmes lønnen av et komplekst samspill mellom **produktivitet**, **forhandlinger**, **regulering**, **kompetanse** og **markedsforhold**. Økonomisk teori sier at lønnen på lang sikt bør gjenspeile arbeidstakernes **marginalproduktivitet** – verdien av det de produserer. Men i Norge forhandles lønnen kollektivt mellom arbeidsgiverorganisasjoner og fagforeninger, noe som gir arbeidstakerne sterkere forhandlingsmakt enn om hver enkelt måtte forhandle alene.

Et helt sentralt skille er mellom **nominell lønn** og **reell lønn**. Nominell lønn er det du ser på lønnsslippen – beløpet i kroner. Reell lønn er hva disse kronene faktisk er verdt i kjøpekraft, altså justert for prisstigning. Formelen er enkel: reallønnsendring tilsvarer nominell lønnsendring minus inflasjon. I 2022 opplevde norske arbeidstakere noe uvanlig: nominell lønnsvekst på 4,3 prosent, men inflasjon på 5,8 prosent. Reallønnsendringen ble dermed minus 1,5 prosent – folk kunne kjøpe *færre* varer og tjenester enn året før, til tross for høyere lønn. Slike reallønnsfall skaper politisk uro og sterkere lønnskrav i neste forhandlingsrunde. Det er reallønnsutviklingen – ikke de nominelle tallene – som virkelig betyr noe for folks hverdag.`,
    },
    {
      id: 'samfokonomi-2-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på arbeidsmarkedets grunnbegreper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-4-1-n-quiz1-q0',
            task: 'Hva menes med at etterspørselen etter arbeidskraft er en avledet etterspørsel?',
            options: [
              { id: 'a', text: 'At den avhenger av etterspørselen etter de varene og tjenestene arbeidstakerne produserer', isCorrect: true },
              { id: 'b', text: 'At den alltid følger tilbudet av arbeidskraft', isCorrect: false },
              { id: 'c', text: 'At den bestemmes av arbeidstakernes utdanningsnivå', isCorrect: false },
              { id: 'd', text: 'At den er fastsatt av myndighetene gjennom regulering', isCorrect: false },
            ],
            solution: 'Bedrifter ansetter ikke folk for arbeidets egen skyld, men fordi de trenger arbeidskraft til å produsere varer og tjenester som kundene etterspør. Faller etterspørselen etter produktene, faller også behovet for arbeidskraft.',
          },
          {
            id: 'samfokonomi-2-4-1-n-quiz1-q1',
            task: 'Hva skjer i arbeidsmarkedet hvis lønnen settes over likevektsnivået?',
            options: [
              { id: 'a', text: 'Alle får jobb fordi høyere lønn tiltrekker flere arbeidstakere', isCorrect: false },
              { id: 'b', text: 'Det oppstår arbeidsledighet fordi tilbudet av arbeidskraft overstiger etterspørselen', isCorrect: true },
              { id: 'c', text: 'Bedriftene ansetter flere for å få bedre kvalifiserte søkere', isCorrect: false },
              { id: 'd', text: 'Ingenting endres fordi markedet alltid er i likevekt', isCorrect: false },
            ],
            solution: 'Når lønnen er over likevekt, ønsker flere å jobbe (høyere tilbud), men bedriftene vil ansette færre (lavere etterspørsel). Differansen gir arbeidsledighet – et overskuddstilbud i arbeidsmarkedet.',
          },
          {
            id: 'samfokonomi-2-4-1-n-quiz1-q2',
            task: 'En arbeidstaker får 5 % nominell lønnsøkning. Inflasjonen er 3 %. Hva er reallønnsendringen?',
            options: [
              { id: 'a', text: '8 %', isCorrect: false },
              { id: 'b', text: '5 %', isCorrect: false },
              { id: 'c', text: '2 %', isCorrect: true },
              { id: 'd', text: '3 %', isCorrect: false },
            ],
            solution: 'Reallønnsendring = nominell lønnsendring minus inflasjon = 5 % − 3 % = 2 %. Kjøpekraften økte med 2 %, selv om lønnen i kroner økte med 5 %.',
          },
          {
            id: 'samfokonomi-2-4-1-n-quiz1-q3',
            task: 'Hvilken faktor har IKKE direkte betydning for tilbudet av arbeidskraft?',
            options: [
              { id: 'a', text: 'Befolkningens alderssammensetning', isCorrect: false },
              { id: 'b', text: 'Yrkesdeltakelsen blant kvinner', isCorrect: false },
              { id: 'c', text: 'Etterspørselen etter eksportvarer', isCorrect: true },
              { id: 'd', text: 'Arbeidsinnvandring fra EØS-området', isCorrect: false },
            ],
            solution: 'Etterspørselen etter eksportvarer påvirker etterspørselssiden i arbeidsmarkedet (avledet etterspørsel), ikke tilbudssiden. Tilbudet bestemmes av befolkning, yrkesdeltakelse, arbeidstid, kompetanse og innvandring.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-4-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om arbeidsmarkedets grunnleggende mekanismer. **Arbeidsmarkedet** er der arbeidskraft kjøpes og selges, med lønnen som pris. **Tilbudet** av arbeidskraft bestemmes av befolkningsstørrelse, yrkesdeltakelse, arbeidstid, kompetanse og innvandring. **Etterspørselen** er en avledet etterspørsel som avhenger av produksjon, lønnskostnader, produktivitet og konjunkturer. **Likevekt** oppstår der tilbud møter etterspørsel. **Lønnsdannelsen** påvirkes av produktivitet, kollektive forhandlinger, regulering og markedsforhold. Skillet mellom **nominell lønn** (kroner) og **reell lønn** (kjøpekraft) er avgjørende – det er reallønnsutviklingen som bestemmer om folk faktisk får det bedre.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2 NARRATIV: Arbeidsledighet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_4_2_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-4-2-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '4.2',
  title: 'Arbeidsledighet',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvorfor noen alltid står uten jobb – fra den naturlige friksjonen i et dynamisk arbeidsmarked til de store krisene som sender millioner ut i ledighet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analysere hvordan arbeidsmarkedet fungerer og drøfte arbeidsmarkedspolitikk',
  ],
  linkedChapterId: 'samfokonomi-2-4-2',
  content: [
    {
      id: 'samfokonomi-2-4-2-n-intro',
      type: 'text',
      content: `## Når arbeidet forsvinner

Forestill deg Marie, 52 år, som har jobbet på en papirfabrikk i Halden i tretti år. En dag kaller ledelsen inn til allmøte og forteller at fabrikken skal legges ned. Etterspørselen etter trykt papir har falt så mye at produksjonen ikke lenger er lønnsom. Marie og 200 kolleger mister jobben.

Forestill deg samtidig Thomas, 24 år, som nettopp er ferdig med en mastergrad i økonomi fra NHH. Han har sendt ut tjue søknader og venter spent på svar. Og forestill deg Kari, 35 år, som jobber som snøbrøyter i Tromsø og er permittert hver sommer fordi det ikke er snø å brøyte.

Alle tre er arbeidsledige. Men årsakene er helt forskjellige – og det har avgjørende betydning for hva som kan gjøres for å hjelpe dem. **Arbeidsledighet** er et av samfunnsøkonomiens mest sentrale problemer, fordi det rammer den enkelte hardt – med tap av inntekt, selvfølelse og sosial tilhørighet – og fordi det er et enormt tap for samfunnet når mennesker som vil bidra, ikke får muligheten til det.

I Norge måles ledigheten på to måter. **NAV-registrert ledighet** teller de som er registrert som arbeidssøkende hos NAV. **AKU-ledigheten** (Statistisk sentralbyrås arbeidskraftundersøkelse) baserer seg på utvalgsundersøkelser der folk spørres om de er uten arbeid, har søkt jobb og er tilgjengelige. AKU-tallene er vanligvis høyere fordi de fanger opp folk som søker jobb uten å registrere seg hos NAV.`,
    },
    {
      id: 'samfokonomi-2-4-2-n-section1',
      type: 'text',
      content: `## Fire ansikter av ledighet

Økonomer deler arbeidsledighet inn i fire hovedtyper, og det er viktig å forstå forskjellene fordi hver type krever sine egne løsninger.

**Friksjonsledighet** er den mest ufarlige typen. Den oppstår fordi det alltid tar tid å finne riktig jobb. Thomas fra NHH opplever friksjonsledighet – han har kompetanse som er etterspurt, men det tar noen uker eller måneder å finne en stilling som passer. Denne typen ledighet finnes i alle økonomier til alle tider og er faktisk et tegn på et dynamisk arbeidsmarked der folk tør å skifte jobb for å finne noe bedre.

**Strukturell ledighet** er mer alvorlig. Den oppstår når det er et misforhold mellom hva arbeidstakerne kan og hva arbeidsmarkedet trenger. Marie fra papirfabrikken opplever dette – hennes spesialiserte kompetanse innen papirproduksjon er ikke lenger etterspurt i samme grad. Hun trenger omskolering for å finne ny jobb. Strukturell ledighet kan også være geografisk: jobbene finnes i Oslo, men arbeidssøkeren bor i Halden og kan ikke uten videre flytte.

**Konjunkturell ledighet** skyldes svingninger i den økonomiske aktiviteten. Under finanskrisen i 2008–2009 eller oljeprisfallet i 2014–2016 mistet tusenvis av nordmenn jobben – ikke fordi kompetansen deres var feil, men fordi hele økonomien gikk dårligere. Denne typen ledighet kommer og går med konjunkturbølgene.

Og så har vi **sesongledighet** – Karis situasjon. Snøbrøyting er et sesongarbeid, og ledigheten om sommeren er forutsigbar og gjentagende. Det samme gjelder deler av bygg- og anleggsbransjen og reiselivsnæringen.`,
    },
    {
      id: 'samfokonomi-2-4-2-n-section2',
      type: 'text',
      content: `## NAIRU – den usynlige grensen

Her kommer et av de viktigste begrepene i moderne makroøkonomi: **NAIRU** – Non-Accelerating Inflation Rate of Unemployment. Det er et tungt navn for en elegant idé.

Tenk på det slik: Selv i en sunn, velfungerende økonomi vil det alltid være noe ledighet – friksjonsledighet og strukturell ledighet forsvinner aldri helt. Summen av disse kalles den **naturlige ledighetsraten**. I Norge anslås denne til rundt 3–4 prosent.

NAIRU er det ledighetsnivået som er forenlig med stabil inflasjon. Mekanismen fungerer slik: Hvis ledigheten faller under NAIRU – la oss si til 2,5 prosent når NAIRU er 3,5 prosent – blir arbeidsmarkedet svært stramt. Bedriftene sliter med å finne folk, og arbeidstakerne får sterk forhandlingsmakt. Lønnskravene øker kraftig, bedriftene velter de økte kostnadene over i prisene, og inflasjonen begynner å akselerere. Det er dette sentralbanken frykter.

Omvendt: Hvis ledigheten er over NAIRU, er det ledig kapasitet i økonomien. Arbeidstakerne har svak forhandlingsmakt, lønnskravene er moderate, og inflasjonen avtar. Sentralbanken kan da senke renten for å stimulere økonomien.

Sammenhengen mellom ledighet og inflasjon ble først påvist empirisk av økonomen A.W. Phillips i 1958 og kalles **Phillipskurven**. Den viser en negativ sammenheng: lav ledighet gir høy inflasjon, og omvendt. Men her er et viktig poeng: på *kort sikt* finnes denne avveiningen, men på *lang sikt* er Phillipskurven vertikal ved NAIRU. Forsøk på å holde ledigheten varig under NAIRU fører bare til stadig akselererende inflasjon, uten at sysselsettingen øker permanent. For pengepolitikken betyr dette at sentralbanken kan påvirke realøkonomien på kort sikt, men på lang sikt bestemmer strukturelle faktorer ledigheten.`,
    },
    {
      id: 'samfokonomi-2-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på arbeidsledighet og NAIRU:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-4-2-n-quiz1-q0',
            task: 'En nyutdannet ingeniør bruker to måneder på å finne sin første jobb. Hvilken type ledighet er dette?',
            options: [
              { id: 'a', text: 'Friksjonsledighet', isCorrect: true },
              { id: 'b', text: 'Strukturell ledighet', isCorrect: false },
              { id: 'c', text: 'Konjunkturell ledighet', isCorrect: false },
              { id: 'd', text: 'Sesongledighet', isCorrect: false },
            ],
            solution: 'Friksjonsledighet oppstår fordi det tar tid å matche arbeidssøkere med ledige stillinger. En nyutdannet som søker sin første jobb er et klassisk eksempel – kompetansen er etterspurt, men søkeprosessen tar tid.',
          },
          {
            id: 'samfokonomi-2-4-2-n-quiz1-q1',
            task: 'Hva skjer ifølge NAIRU-modellen når ledigheten faller under det naturlige nivået?',
            options: [
              { id: 'a', text: 'Inflasjonen faller', isCorrect: false },
              { id: 'b', text: 'Lønnsveksten og inflasjonen akselererer', isCorrect: true },
              { id: 'c', text: 'Ingenting spesielt – økonomien er i balanse', isCorrect: false },
              { id: 'd', text: 'Produktiviteten øker automatisk', isCorrect: false },
            ],
            solution: 'Når ledigheten er under NAIRU, er arbeidsmarkedet stramt. Arbeidstakerne har sterk forhandlingsmakt, lønnskravene øker utover produktivitetsveksten, og bedriftene velter kostnadene over i prisene. Inflasjonen akselererer.',
          },
          {
            id: 'samfokonomi-2-4-2-n-quiz1-q2',
            task: 'Hva skiller strukturell ledighet fra konjunkturell ledighet?',
            options: [
              { id: 'a', text: 'Strukturell ledighet er alltid kortvarig', isCorrect: false },
              { id: 'b', text: 'Konjunkturell ledighet rammer bare industrien', isCorrect: false },
              { id: 'c', text: 'Strukturell skyldes kompetansemismatch, konjunkturell skyldes svikt i samlet etterspørsel', isCorrect: true },
              { id: 'd', text: 'Det er ingen vesentlig forskjell mellom dem', isCorrect: false },
            ],
            solution: 'Strukturell ledighet skyldes at arbeidstakernes kompetanse ikke matcher det markedet trenger. Konjunkturell ledighet skyldes generell nedgang i økonomisk aktivitet. Strukturell krever omskolering, konjunkturell krever stimulering av samlet etterspørsel.',
          },
          {
            id: 'samfokonomi-2-4-2-n-quiz1-q3',
            task: 'Hva viser den langsiktige Phillipskurven?',
            options: [
              { id: 'a', text: 'At det alltid er en avveining mellom ledighet og inflasjon', isCorrect: false },
              { id: 'b', text: 'At kurven er vertikal ved NAIRU – ingen varig avveining på lang sikt', isCorrect: true },
              { id: 'c', text: 'At inflasjon og ledighet alltid beveger seg i samme retning', isCorrect: false },
              { id: 'd', text: 'At sentralbanken kan velge akkurat den ledighetsprosenten den ønsker', isCorrect: false },
            ],
            solution: 'På lang sikt er Phillipskurven vertikal ved NAIRU. Det betyr at forsøk på å holde ledigheten varig under det naturlige nivået bare fører til akselererende inflasjon, uten permanent reduksjon i ledigheten.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-4-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om arbeidsledighetens mange ansikter. **Friksjonsledighet** er normal og midlertidig – det tar tid å finne riktig jobb. **Strukturell ledighet** skyldes mismatch mellom kompetanse og behov og krever omskolering. **Konjunkturell ledighet** følger svingningene i økonomien. **Sesongledighet** er forutsigbar og knyttet til årstider. Den **naturlige ledighetsraten** er summen av friksjon og struktur, og **NAIRU** er det ledighetsnivået som gir stabil inflasjon – i Norge anslått til 3–4 prosent. **Phillipskurven** viser avveiningen mellom ledighet og inflasjon på kort sikt, men på lang sikt er den vertikal: sentralbanken kan ikke varig senke ledigheten under NAIRU uten akselererende inflasjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.3 NARRATIV: Den norske modellen
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_4_3_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-4-3-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '4.3',
  title: 'Den norske modellen',
  subtitle: 'Narrativ versjon',
  description: 'Fortellingen om det særnorske samarbeidet mellom stat, arbeidsgivere og arbeidstakere – og hvorfor små lønnsforskjeller faktisk kan være et konkurransefortrinn.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for den norske modellen og drøfte utfordringer for arbeidslivet',
  ],
  linkedChapterId: 'samfokonomi-2-4-3',
  content: [
    {
      id: 'samfokonomi-2-4-3-n-intro',
      type: 'text',
      content: `## Et samarbeid ingen trodde var mulig

I de fleste land i verden er forholdet mellom arbeidsgivere og arbeidstakere preget av mistillit og konflikt. Bedriftseiere vil holde lønnskostnadene nede, ansatte vil ha mer i lommeboka, og staten griper inn med lover og regler som ingen er helt fornøyd med. Men i Norge – og de andre nordiske landene – har vi klart noe bemerkelsesverdig: å bygge et system der alle tre parter sitter rundt samme bord og finner løsninger sammen.

**Den norske modellen** er navnet på dette systemet, og den hviler på tre grunnpilarer. Den første er et **organisert arbeidsliv** med sterke fagforeninger og arbeidsgiverorganisasjoner. Den andre er **koordinert lønnsdannelse** gjennom kollektive forhandlinger. Og den tredje er en **omfattende velferdsstat** som gir trygghet ved omstilling – slik at folk tør å ta sjanser og akseptere endring.

Resultatene taler for seg selv. Norge har høy sysselsetting, lav arbeidsledighet, relativt små lønnsforskjeller, høy produktivitet og – kanskje mest overraskende – stor omstillingsevne. Nordmenn er villige til å akseptere nye teknologier og nye måter å jobbe på, nettopp fordi sikkerhetsnettet fanger dem opp hvis det går galt. Det er et paradoks som forbløffer utenlandske observatører: trygghet skaper mot til forandring.`,
    },
    {
      id: 'samfokonomi-2-4-3-n-section1',
      type: 'text',
      content: `## Tre parter, ett bord

I hjertet av den norske modellen finner vi **trepartssamarbeidet**. Staten setter rammebetingelsene gjennom lover som arbeidsmiljøloven og ferieloven, opptrer som megler gjennom Riksmekleren når partene ikke blir enige, og bruker finanspolitikken til å påvirke økonomien. Staten er dessuten selv en stor arbeidsgiver med hundretusenvis av ansatte i kommuner, sykehus og departementer.

På arbeidsgiversiden finner vi organisasjoner som **NHO** (Næringslivets Hovedorganisasjon) for privat sektor, **KS** for kommunesektoren, **Spekter** for helse og statlige virksomheter, og **Virke** for handel og tjenester. Disse forhandler på vegne av bedriftene om lønn og arbeidsvilkår.

På arbeidstakersiden står **LO** (Landsorganisasjonen) som den klart største med rundt 980 000 medlemmer, fulgt av **Unio** (sykepleiere, lærere og andre akademikere), **YS** (Yrkesorganisasjonenes Sentralforbund) og **Akademikerne**. Disse forhandler på vegne av de ansatte. **Organisasjonsgraden** i Norge er omtrent 50 prosent – altså er halvparten av alle arbeidstakere fagorganisert. Det er høyere enn i de fleste vestlige land, men lavere enn i Sverige og Danmark, og trenden er dessverre synkende.

Det geniale med systemet er at partene møtes jevnlig – ikke bare under de store lønnsforhandlingene, men i hundrevis av utvalg, råd og komiteer der politikk formes. Pensjonssystemet, sykelønnsordningen, kompetansepolitikken – alt dette utvikles i samarbeid mellom de tre partene. Og den høye tilliten mellom dem gjør at avtaler holdes og konflikter dempes.`,
    },
    {
      id: 'samfokonomi-2-4-3-n-section2',
      type: 'text',
      content: `## Frontfagsmodellen – industriens dirigentpinne

Hvordan bestemmer man egentlig hva fem millioner mennesker skal tjene? I Norge har vi et elegant svar: **frontfagsmodellen**. Hver vår starter lønnsforhandlingene, og det er alltid konkurranseutsatt industri – de bedriftene som konkurrerer med utlandet – som forhandler først. LO og NHO setter seg ned og blir enige om en lønnsramme, for eksempel 4,5 prosent. Denne rammen setter så takten for alle andre: offentlig ansatte, butikkmedarbeidere, frisører, sykepleiere – alle forholder seg til den samme rammen.

Logikken er bestikkende klar: Norske industribedrifter konkurrerer med fabrikker i Tyskland, Kina og USA. Hvis lønningene i norsk industri vokser raskere enn produktiviteten, blir norske produkter for dyre, og bedriftene taper markedsandeler. Ved å la industrien sette takten, sikrer man at lønnsveksten i *hele* økonomien er bærekraftig – at den ikke undergraver Norges konkurranseevne.

Men systemet er ikke uten friksjon. Sykepleiere og lærere klager jevnlig over at frontfagsrammen gir dem for lav lønnsvekst – at den ikke tar hensyn til behovet for å rekruttere i offentlig sektor. Og det finnes **lønnsglidning**: lokale tillegg som gjør at noen grupper i praksis får mer enn den sentrale rammen, noe som kan skape misnøye hos dem som holder seg stramt til rammen.

En viktig konsekvens av hele dette systemet er Norges **sammenpressede lønnsstruktur**. Forskjellen mellom høyeste og laveste lønn er mye mindre enn i for eksempel USA. En leder i privat sektor tjener kanskje tre ganger så mye som en rengjøringsarbeider i Norge – i USA er forholdet nærmere ti ganger. Denne kompresjonen skyldes solidarisk lønnspolitikk, sentrale forhandlinger og allmenngjøring av tariffavtaler. Fordelene er åpenbare: lavere ulikhet, sterkere sosial samhørighet og høyere levestandard for de lavest lønnede. Men ulempene er også reelle: det kan bli vanskelig å rekruttere til yrker som krever lang utdanning når lønnsgevinsten er beskjeden, og høytkvalifiserte kan fristes til å søke seg til land med større lønnsforskjeller.`,
    },
    {
      id: 'samfokonomi-2-4-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-4-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på den norske modellen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-4-3-n-quiz1-q0',
            task: 'Hvem er de tre partene i trepartssamarbeidet?',
            options: [
              { id: 'a', text: 'Staten, arbeidsgiverorganisasjonene og arbeidstakerorganisasjonene', isCorrect: true },
              { id: 'b', text: 'Storting, regjering og domstolene', isCorrect: false },
              { id: 'c', text: 'NHO, Norges Bank og NAV', isCorrect: false },
              { id: 'd', text: 'Kommunene, fylkene og staten', isCorrect: false },
            ],
            solution: 'Trepartssamarbeidet består av staten (lover og rammer), arbeidsgiverorganisasjonene (NHO, KS med flere) og arbeidstakerorganisasjonene (LO, Unio, YS, Akademikerne). Samarbeidet mellom disse er grunnpilaren i den norske modellen.',
          },
          {
            id: 'samfokonomi-2-4-3-n-quiz1-q1',
            task: 'Hvorfor er det konkurranseutsatt industri som forhandler om lønn først i frontfagsmodellen?',
            options: [
              { id: 'a', text: 'Fordi industriarbeidere tradisjonelt har høyest lønn', isCorrect: false },
              { id: 'b', text: 'Fordi industrien konkurrerer internasjonalt og lønnsveksten må være forenlig med konkurranseevnen', isCorrect: true },
              { id: 'c', text: 'Fordi industrien har flest ansatte i Norge', isCorrect: false },
              { id: 'd', text: 'Fordi det er tilfeldig bestemt gjennom tradisjon', isCorrect: false },
            ],
            solution: 'Industrien konkurrerer med utenlandske bedrifter. Hvis lønnskostnadene vokser raskere enn produktiviteten, blir norske produkter for dyre. Ved å la industrien sette rammen sikrer man at lønnsveksten er bærekraftig for hele økonomien.',
          },
          {
            id: 'samfokonomi-2-4-3-n-quiz1-q2',
            task: 'Hva er en viktig fordel med Norges sammenpressede lønnsstruktur?',
            options: [
              { id: 'a', text: 'Den gjør det lettere å rekruttere til alle yrker', isCorrect: false },
              { id: 'b', text: 'Lavere ulikhet, sterkere sosial samhørighet og høyere levestandard for de lavest lønnede', isCorrect: true },
              { id: 'c', text: 'Den gir bedriftene lavere lønnskostnader enn i andre land', isCorrect: false },
              { id: 'd', text: 'Den tiltrekker høytkvalifisert arbeidskraft fra utlandet', isCorrect: false },
            ],
            solution: 'Sammenpresset lønnsstruktur gir lavere ulikhet, sterkere sosial samhørighet og høyere levestandard for de lavest lønnede. Men det kan gjøre det vanskeligere å rekruttere til yrker som krever lang utdanning.',
          },
          {
            id: 'samfokonomi-2-4-3-n-quiz1-q3',
            task: 'Hva er organisasjonsgraden i Norge omtrent?',
            options: [
              { id: 'a', text: 'Ca. 20 %', isCorrect: false },
              { id: 'b', text: 'Ca. 50 %', isCorrect: true },
              { id: 'c', text: 'Ca. 80 %', isCorrect: false },
              { id: 'd', text: 'Ca. 95 %', isCorrect: false },
            ],
            solution: 'Organisasjonsgraden i Norge er omtrent 50 prosent – halvparten av arbeidstakerne er fagorganisert. Det er høyere enn i de fleste vestlige land, men lavere enn i Sverige og Danmark, og trenden er synkende.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-4-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om det unike samarbeidet som preger norsk arbeidsliv. **Den norske modellen** bygger på trepartssamarbeid mellom stat, arbeidsgivere og arbeidstakere. **Trepartssamarbeidet** sikrer koordinering, forutsigbarhet og tillit. **Frontfagsmodellen** lar konkurranseutsatt industri sette lønnsrammen for å beskytte norsk konkurranseevne. **Organisasjonsgraden** er rundt 50 prosent, men synkende. Modellen gir en **sammenpresset lønnsstruktur** med små lønnsforskjeller – noe som gir lavere ulikhet, men kan skape rekrutteringsproblemer i visse yrker. Resultatene er imponerende: høy sysselsetting, lav ledighet, høy produktivitet og en omstillingsevne som bygger på trygghet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.4 NARRATIV: Arbeidsmarkedspolitikk
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_4_4_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-4-4-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '4.4',
  title: 'Arbeidsmarkedspolitikk',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvordan staten balanserer mellom å gi folk trygghet når de mister jobben og å dytte dem tilbake i arbeid – og hvorfor begge deler er nødvendig.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analysere hvordan arbeidsmarkedet fungerer og drøfte arbeidsmarkedspolitikk',
  ],
  linkedChapterId: 'samfokonomi-2-4-4',
  content: [
    {
      id: 'samfokonomi-2-4-4-n-intro',
      type: 'text',
      content: `## Sikkerhetsnettet og trampolinen

Erik er 45 år og har jobbet på en treforedlingsfabrikk i tjue år. Han har fagbrev som prosessoperatør, to barn i skolealder og et boliglån. En morgen får han beskjed om at fabrikken legges ned. Hva skjer nå?

I mange land ville Erik stått nokså alene med problemet. Men i Norge aktiveres et omfattende apparat av tiltak og ordninger – det vi kaller **arbeidsmarkedspolitikk**. Denne politikken har ett overordnet mål: å sikre at flest mulig er i jobb, og at de som faller ut, kommer tilbake så raskt som mulig.

Vi skiller mellom to hovedtyper. **Passiv arbeidsmarkedspolitikk** er sikkerhetsnettet – de økonomiske ytelsene som hindrer at folk faller ned i fattigdom når de mister jobben. **Aktiv arbeidsmarkedspolitikk** er trampolinen – tiltakene som hjelper folk å sprette tilbake i arbeid. Erik trenger begge deler: penger til å betale regningene mens han omstiller seg, og verktøy til å finne en ny jobb.

**NAV** – Arbeids- og velferdsetaten – er den sentrale aktøren som gjennomfører alt dette. Det er NAV som utbetaler dagpengene, som tilbyr omskolering, som kobler arbeidssøkere med arbeidsgivere, og som følger opp den enkelte gjennom det som kan være en vanskelig overgangsperiode.`,
    },
    {
      id: 'samfokonomi-2-4-4-n-section1',
      type: 'text',
      content: `## Fra dagpenger til ny jobb

La oss følge Erik gjennom systemet. Først registrerer han seg som arbeidsledig hos NAV og får innvilget **dagpenger** – en ytelse som tilsvarer omtrent 62,4 prosent av hans tidligere inntekt, i inntil to år. Dette er den passive delen: inntektssikring som gir Erik økonomisk trygghet til å konsentrere seg om å finne noe nytt, i stedet for å måtte ta den første og beste jobben i desperasjon. Andre passive ytelser inkluderer **arbeidsavklaringspenger (AAP)** for dem med nedsatt arbeidsevne, **uføretrygd** for dem som varig ikke kan jobbe, og **sykepenger** som gir full lønn under sykdom i inntil ett år.

Så kommer den aktive delen. NAV-veilederen kartlegger Eriks kompetanse og erfaring. Hans bakgrunn som prosessoperatør viser seg å ha overføringsverdi til andre industrier. NAV tilbyr ham et **jobbsøkekurs** med hjelp til CV, søknader og intervjutrening. De tilbyr også **omskolering** – et kurs i ny teknologi som gjør ham kvalifisert for jobber i energisektoren. Kanskje får han en **praksisplass** i en bedrift som trenger folk med hans bakgrunn. Og kanskje gir NAV et **lønnstilskudd** til en arbeidsgiver som er villig til å ansette Erik i en opplæringsperiode.

Hovedforskjellen mellom passiv og aktiv politikk er enkel men grunnleggende: passiv politikk gir folk penger, aktiv politikk gir dem verktøy. Forskning viser at den beste kombinasjonen er moderat generøse passive ytelser – nok til å gi trygghet, men med aktivitetskrav som hindrer at folk blir passive – kombinert med målrettede aktive tiltak tilpasset den enkeltes situasjon.`,
    },
    {
      id: 'samfokonomi-2-4-4-n-section2',
      type: 'text',
      content: `## Arbeidslinjen og kompetanse for fremtiden

Det overordnede prinsippet i norsk arbeids- og velferdspolitikk kalles **arbeidslinjen**: det skal alltid lønne seg å jobbe framfor å motta trygd. Arbeid er førstevalget for alle som kan, velferdsytelser utformes for å stimulere til aktivitet, og mottakere av ytelser har plikt til å være aktive – søke jobb, ta kurs, delta i tiltak. Sosialhjelpmottakere under 30 år har for eksempel **aktivitetsplikt**, og **gradert sykemelding** gjør det mulig å jobbe delvis under sykdom.

Arbeidslinjen er ikke uten kritikere. Noen mener den legger for mye press på syke og uføre som oppriktig ikke kan jobbe. Andre peker på at aktivitetskrav kan tvinge folk inn i midlertidige, usikre jobber i stedet for varige løsninger. Men prinsippet har bred politisk oppslutning fordi alternativet – et system der folk kan leve godt på trygd uten å prøve å komme tilbake i arbeid – er verken bærekraftig for samfunnet eller bra for den enkelte.

En stadig viktigere del av arbeidsmarkedspolitikken er **kompetansepolitikken**. I en økonomi som endrer seg raskere enn noen gang, foreldes kompetanse fortere. Den grønne omstillingen krever nye ferdigheter, eldrebølgen krever mer helsepersonell, og digitaliseringen stiller nye krav til alle. Staten svarer med tiltak som **Kompetansepluss** (tilskudd til opplæring i grunnleggende ferdigheter), styrking av **fagskoler og yrkesfag**, tilrettelegging for **etter- og videreutdanning**, og **bransjeprogram** der stat, arbeidsgivere og fagforeninger samarbeider om skreddersydde opplæringsprogrammer for bransjer i omstilling. For ulike typer ledighet trengs ulike tiltak: friksjonsledighet løses best med god arbeidsformidling, strukturell ledighet med omskolering, og konjunkturell ledighet med makroøkonomisk stimulans.`,
    },
    {
      id: 'samfokonomi-2-4-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-4-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på arbeidsmarkedspolitikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-4-4-n-quiz1-q0',
            task: 'Hva er hovedforskjellen mellom aktiv og passiv arbeidsmarkedspolitikk?',
            options: [
              { id: 'a', text: 'Passiv politikk gir inntektssikring, aktiv politikk gir tiltak for å komme tilbake i jobb', isCorrect: true },
              { id: 'b', text: 'Aktiv politikk koster mer enn passiv politikk', isCorrect: false },
              { id: 'c', text: 'Passiv politikk brukes i nedgangstider, aktiv i oppgangstider', isCorrect: false },
              { id: 'd', text: 'Det er ingen vesentlig forskjell mellom dem', isCorrect: false },
            ],
            solution: 'Passiv politikk handler om inntektssikring – dagpenger, sykepenger, uføretrygd. Aktiv politikk handler om tiltak som hjelper folk tilbake i jobb – kurs, omskolering, praksisplasser, lønnstilskudd. Begge er nødvendige.',
          },
          {
            id: 'samfokonomi-2-4-4-n-quiz1-q1',
            task: 'Hva menes med arbeidslinjen i norsk velferdspolitikk?',
            options: [
              { id: 'a', text: 'At alle skal jobbe minst 40 timer i uken', isCorrect: false },
              { id: 'b', text: 'At det alltid skal lønne seg å jobbe framfor å motta trygd', isCorrect: true },
              { id: 'c', text: 'At arbeidstakere har rett til å streike', isCorrect: false },
              { id: 'd', text: 'At staten skal garantere alle en jobb', isCorrect: false },
            ],
            solution: 'Arbeidslinjen betyr at arbeid skal være førstevalget for alle som kan jobbe, og at velferdsytelser utformes slik at de stimulerer til aktivitet og arbeid, ikke passivitet.',
          },
          {
            id: 'samfokonomi-2-4-4-n-quiz1-q2',
            task: 'Hvilket arbeidsmarkedstiltak er best egnet til å bekjempe strukturell ledighet?',
            options: [
              { id: 'a', text: 'Lavere rente fra sentralbanken', isCorrect: false },
              { id: 'b', text: 'Økt offentlig forbruk', isCorrect: false },
              { id: 'c', text: 'Omskolering og etterutdanning', isCorrect: true },
              { id: 'd', text: 'Høyere dagpengesatser', isCorrect: false },
            ],
            solution: 'Strukturell ledighet skyldes mismatch mellom kompetanse og behov. Omskolering og etterutdanning gir arbeidssøkerne den nye kompetansen markedet etterspør. Rentekutt og økt offentlig forbruk hjelper mot konjunkturell ledighet.',
          },
          {
            id: 'samfokonomi-2-4-4-n-quiz1-q3',
            task: 'Hvilken av disse er IKKE et eksempel på aktiv arbeidsmarkedspolitikk?',
            options: [
              { id: 'a', text: 'Arbeidspraksis i en ny bransje', isCorrect: false },
              { id: 'b', text: 'Lønnstilskudd til arbeidsgivere', isCorrect: false },
              { id: 'c', text: 'Utbetaling av dagpenger', isCorrect: true },
              { id: 'd', text: 'Jobbsøkekurs gjennom NAV', isCorrect: false },
            ],
            solution: 'Dagpenger er passiv arbeidsmarkedspolitikk – det er inntektssikring uten direkte tiltak for å øke arbeidsevnen. Praksisplasser, lønnstilskudd og jobbsøkekurs er aktive tiltak som hjelper folk tilbake i jobb.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-4-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om statens verktøykasse for å holde folk i arbeid. **Passiv arbeidsmarkedspolitikk** gir inntektssikring gjennom dagpenger, sykepenger og uføretrygd. **Aktiv arbeidsmarkedspolitikk** gir verktøy til å komme tilbake i jobb gjennom kurs, omskolering, praksisplasser og lønnstilskudd. **NAV** er den sentrale aktøren som gjennomfører begge deler. **Arbeidslinjen** er prinsippet om at det alltid skal lønne seg å jobbe. **Kompetansepolitikk** sikrer at arbeidsstyrken har riktig kompetanse for fremtidens behov. Ulike typer ledighet krever ulike tiltak: friksjonsledighet trenger bedre arbeidsformidling, strukturell ledighet trenger omskolering, og konjunkturell ledighet trenger makroøkonomisk stimulans.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.5 NARRATIV: Fremtidens arbeidsliv
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_4_5_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-4-5-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '4.5',
  title: 'Fremtidens arbeidsliv',
  subtitle: 'Narrativ versjon',
  description: 'En reise inn i morgendagens arbeidsmarked – der roboter, klimakrise og apper endrer spillereglene, og der evnen til å lære blir viktigere enn det du allerede kan.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for den norske modellen og drøfte utfordringer for arbeidslivet',
    'analysere hvordan arbeidsmarkedet fungerer og drøfte arbeidsmarkedspolitikk',
  ],
  linkedChapterId: 'samfokonomi-2-4-5',
  content: [
    {
      id: 'samfokonomi-2-4-5-n-intro',
      type: 'text',
      content: `## Fire stormer på horisonten

Tenk deg at du er 17 år og skal velge utdanning. Du vet at du kanskje skal jobbe i førti-femti år fremover. Men hvilke jobber finnes om ti år? Hvilke kompetanser vil være etterspurt? Og hva skjer med den norske modellen når arbeidslivet forandrer seg raskere enn noen gang?

Fire store endringstrender former fremtidens arbeidsliv, og de virker sammen på måter som er vanskelige å forutsi. Den første er **automatisering og kunstig intelligens** – maskiner og AI som overtar stadig flere oppgaver. Den andre er **grønn omstilling** – overgangen fra fossil til fornybar energi som endrer hele næringsstrukturen. Den tredje er **gig-økonomien** – nye arbeidsformer som utfordrer det tradisjonelle arbeidsforholdet. Og den fjerde er **demografiske endringer** – eldrebølgen og innvandring som endrer sammensetningen av arbeidsstyrken.

Ingen av disse trendene er nye i seg selv. Teknologi har alltid endret arbeidslivet – den industrielle revolusjonen erstattet håndverkere med fabrikker, datamaskinen erstattet manuelle kontorjobber med digitale. Men tempoet i endringen er nytt. Og sammensmeltingen av alle fire trender samtidig skaper en usikkerhet som krever at samfunnet tenker annerledes om arbeid, utdanning og trygghet.`,
    },
    {
      id: 'samfokonomi-2-4-5-n-section1',
      type: 'text',
      content: `## Når maskinene kommer

**Automatisering** har pågått i århundrer, men **kunstig intelligens** representerer et kvalitativt sprang. Tidligere kunne maskiner bare utføre forutsigbare, repetitive oppgaver – skru på skruer, sortere pakker, kjøre samlebånd. AI kan gjenkjenne mønstre, ta beslutninger, oversette språk, skrive tekster og analysere data. Det betyr at jobber som vi for bare ti år siden trodde var trygge – regnskapsførere, radiologer, tolker, journalister – plutselig befinner seg i faresonen.

Hvilke jobber er mest utsatt? Rutinepreget arbeid som fabrikk, lager og kasse. Enkel databehandling og analyse. Deler av kundeservice og administrasjon. Enkel tekstproduksjon og oversettelse. Hvilke jobber er tryggest? Kreativt og innovativt arbeid. Komplekse sosiale interaksjoner som terapi, ledelse og undervisning. Håndverk som krever fysisk tilpasningsevne. Strategisk tenkning og kompleks problemløsning.

Men historien gir grunn til forsiktig optimisme. Hver teknologiske revolusjon har skapt flere jobber enn den fjernet – industrialiseringen skapte fabrikker, datamaskinen skapte IT-bransjen, internett skapte en hel digital økonomi. Problemet er ikke at jobber forsvinner permanent, men at **overgangene er smertefulle** for dem som rammes. En 50 år gammel regnskapsfører som erstattes av AI, trenger tid og støtte for å finne sin plass i det nye arbeidslivet. Det er her arbeidsmarkedspolitikken og den norske modellens sikkerhetsnett blir avgjørende.

Samtidig truer AI med å skape **arbeidsmarkedspolarisering**: høytlønnede ekspertjobber som bruker AI som verktøy vokser, lavtlønnede tjenestejobber som er vanskelige å automatisere (omsorg, renhold) består, mens mellomsjiktet av kontor- og administrasjonsjobber krymper. Resultatet kan bli et todelt arbeidsmarked som utfordrer den sammenpressede lønnsstrukturen vi har vært stolte av.`,
    },
    {
      id: 'samfokonomi-2-4-5-n-section2',
      type: 'text',
      content: `## Grønt skifte, gig-økonomi og livslang læring

Den **grønne omstillingen** – overgangen fra fossil til fornybar energi – vil forandre det norske arbeidsmarkedet fundamentalt. Oljeutvinning og raffinering skal gradvis bygges ned, mens fornybar energi som havvind, sol og hydrogen skal vokse kraftig. Mange kompetanser er overførbare – en ingeniør fra oljeplattformen har mye relevant kunnskap for havvindparker – men langt fra alle. Begrepet **rettferdig omstilling** handler om at kostnadene ved den grønne omstillingen skal fordeles rettferdig: de som mister jobben i fossile næringer skal få hjelp til å finne nye muligheter, ikke bære byrden alene.

Den tredje stormen er **gig-økonomien** – den nye arbeidsformen der folk utfører enkeltstående oppdrag formidlet gjennom digitale plattformer som Uber, Foodora, Upwork og Wolt. Kjennetegnene er fleksibilitet, betaling per oppdrag og fravær av fast ansettelse. Utfordringen er at gig-arbeidere ofte klassifiseres som selvstendige oppdragstakere og dermed faller utenfor arbeidsmiljøloven: ingen sykepenger, ingen feriepenger, ingen pensjon, ingen stillingsvern. I Norge har myndighetene begynt å stramme inn og tydeliggjøre at mange gig-arbeidere reelt sett er arbeidstakere med fulle rettigheter. Men gig-økonomien utfordrer selve grunnlaget for den norske modellen, som er bygget på at folk er fast ansatte med kollektive rettigheter.

Midt i alt dette vokser erkjennelsen av at **livslang læring** ikke lenger er et slagord, men en nødvendighet. Tiden da du tok en utdanning, fikk en jobb og ble der til pensjonen er forbi. Fremtidens arbeidstakere må regne med å oppdatere kompetansen sin kontinuerlig – gjennom mikrokurs, bransjeprogram, nettbasert læring og etter- og videreutdanning. De kompetansene som blir viktigst er ikke nødvendigvis fagspesifikke: **digital kompetanse**, **læringsevne**, **kreativitet**, **samarbeidsevne** og **kritisk tenkning** er ferdigheter som forblir relevante uansett hvordan teknologien utvikler seg. Myndighetenes rolle er å finansiere livslang læring, sikre et fleksibelt utdanningssystem og samarbeide med næringslivet om å identifisere fremtidige kompetansebehov.`,
    },
    {
      id: 'samfokonomi-2-4-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-4-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på fremtidens arbeidsliv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-4-5-n-quiz1-q0',
            task: 'Hvilke typer jobber er mest utsatt for automatisering og kunstig intelligens?',
            options: [
              { id: 'a', text: 'Rutinepreget arbeid og enkel databehandling', isCorrect: true },
              { id: 'b', text: 'Kreativt arbeid og ledelse', isCorrect: false },
              { id: 'c', text: 'Håndverk som krever fysisk tilpasningsevne', isCorrect: false },
              { id: 'd', text: 'Kompleks rådgivning og terapi', isCorrect: false },
            ],
            solution: 'Rutinepreget arbeid følger faste mønstre som maskiner og AI kan lære. Jobber som krever kreativitet, kompleks sosial interaksjon eller fysisk tilpasningsevne er mye vanskeligere å automatisere.',
          },
          {
            id: 'samfokonomi-2-4-5-n-quiz1-q1',
            task: 'Hva menes med rettferdig omstilling i forbindelse med den grønne omstillingen?',
            options: [
              { id: 'a', text: 'At alle fossile jobber skal beholdes', isCorrect: false },
              { id: 'b', text: 'At kostnadene ved omstillingen fordeles rettferdig, og de som mister jobben får hjelp', isCorrect: true },
              { id: 'c', text: 'At bare rike land skal gjennomføre grønn omstilling', isCorrect: false },
              { id: 'd', text: 'At staten skal eie alle grønne bedrifter', isCorrect: false },
            ],
            solution: 'Rettferdig omstilling betyr at de som mister jobben i fossile næringer skal få hjelp til å finne nye muligheter – gjennom omskolering, regional næringsutvikling og inntektssikring – i stedet for å bære byrden alene.',
          },
          {
            id: 'samfokonomi-2-4-5-n-quiz1-q2',
            task: 'Hvordan utfordrer gig-økonomien den norske modellen?',
            options: [
              { id: 'a', text: 'Den gjør at alle får høyere lønn', isCorrect: false },
              { id: 'b', text: 'Den skaper arbeidstakere utenfor det organiserte arbeidslivet, uten tradisjonelle rettigheter', isCorrect: true },
              { id: 'c', text: 'Den styrker fagforeningenes forhandlingsmakt', isCorrect: false },
              { id: 'd', text: 'Den reduserer behovet for arbeidsmarkedspolitikk', isCorrect: false },
            ],
            solution: 'Gig-arbeidere klassifiseres ofte som selvstendige og mangler rettigheter som sykepenger, feriepenger og pensjon. De er vanskelige å fagorganisere. Dette undergraver den norske modellens grunnlag: fast ansettelse med kollektive rettigheter.',
          },
          {
            id: 'samfokonomi-2-4-5-n-quiz1-q3',
            task: 'Hvorfor blir livslang læring stadig viktigere i fremtidens arbeidsliv?',
            options: [
              { id: 'a', text: 'Fordi arbeidsgivere krever det for å spare penger', isCorrect: false },
              { id: 'b', text: 'Fordi teknologisk endring gjør at kompetanse foreldes raskere enn før', isCorrect: true },
              { id: 'c', text: 'Fordi det er obligatorisk ifølge norsk lov', isCorrect: false },
              { id: 'd', text: 'Fordi universitetene trenger flere studenter', isCorrect: false },
            ],
            solution: 'Rask teknologisk endring, grønn omstilling og digitalisering gjør at kompetanse foreldes fortere enn noen gang. Arbeidstakere må regne med å oppdatere ferdighetene sine kontinuerlig gjennom hele karrieren.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-4-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om de fire store trendene som former fremtidens arbeidsliv. **Automatisering og AI** erstatter rutinearbeid men skaper også nye yrker – historisk har teknologi skapt flere jobber enn den har fjernet, men overgangene er smertefulle. **Grønn omstilling** fjerner fossile jobber og skaper grønne – **rettferdig omstilling** sikrer at kostnadene fordeles rettferdig. **Gig-økonomien** utfordrer den norske modellen ved å skape arbeidstakere uten tradisjonelle rettigheter. **Arbeidsmarkedspolarisering** kan øke ulikheten: høytlønnede og lavtlønnede jobber vokser, mens mellomsjiktet krymper. **Livslang læring** blir avgjørende – evnen til å oppdatere kompetansen gjennom hele karrieren. Den norske modellen har historisk vist stor tilpasningsevne, men må fornye seg for å håndtere disse utfordringene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle narrative kapitler i seksjon 4
// ============================================================================

export const SAMFOKONOMI_2_NARRATIV_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_4_1_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_4_2_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_4_3_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_4_4_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_4_5_NARRATIV,
];
