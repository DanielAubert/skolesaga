/* eslint-disable */
// @ts-nocheck
/**
 * Samfunnsøkonomi 2 (VG3) - NARRATIV VERSJON DEL 2
 * Kapittel 2.1-2.5: Penge- og finanspolitikk
 *
 * Narrativ versjon optimalisert for lesing/lytting på mobil.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1 NARRATIV: Pengepolitikk og sentralbanken
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_2_1_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-2-1-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '2.1',
  title: 'Pengepolitikk og sentralbanken',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvordan én rente satt av noen få personer i Norges Bank kan påvirke boliglån, kronekurs og hele landets økonomi – fra bankenes bankmann til hverdagen din.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for pengepolitikkens mål og virkemidler',
    'forklare transmisjonsmekanismen og dens ulike kanaler',
    'drøfte forskjellen mellom nominell og reell rente',
  ],
  linkedChapterId: 'samfokonomi-2-2-1',
  content: [
    {
      id: 'samfokonomi-2-2-1-n-intro',
      type: 'text',
      content: `## Bankenes bank

Åtte ganger i året samles en liten gruppe mennesker i et møterom i Norges Banks lokaler ved Bankplassen i Oslo sentrum. De er fem stykker – sentralbanksjefen, to visesentralbanksjefer og to eksterne medlemmer – og sammen utgjør de komiteen for pengepolitikk og finansiell stabilitet. Beslutningen de tar, kan virke liten: de justerer et tall med et kvart prosentpoeng opp eller ned. Men dette ene tallet – **styringsrenten** – sender bølger gjennom hele den norske økonomien.

Kanskje merker du det først på boliglånet. Plutselig koster det noen hundrelapper mer eller mindre i måneden. Kanskje merker du det på kronekursen når du bestiller ferie i utlandet. Eller kanskje merker du det indirekte, gjennom at naboen utsetter oppussingen eller at arbeidsgiveren din plutselig ansetter flere folk. Alt dette henger sammen med én rentebeslutning.

**Pengepolitikk** er den delen av den økonomiske politikken som handler om å regulere pengemengden og rentenivået. I Norge er det Norges Bank – sentralbanken vår, grunnlagt helt tilbake i 1816 – som har dette ansvaret. Sentralbanken har fire hovedoppgaver: å utøve pengepolitikken gjennom styringsrenten, å fremme finansiell stabilitet, å forvalte Statens pensjonsfond utland gjennom NBIM, og å utstede sedler og mynt. Men det viktigste verktøyet i verktøykassen er styringsrenten – den renten bankene får på sine innskudd i Norges Bank. Denne renten danner gulvet for alle andre renter i økonomien.`,
    },
    {
      id: 'samfokonomi-2-2-1-n-section1',
      type: 'text',
      content: `## Inflasjonsmålet – sentralbankens kompass

Hva er det egentlig Norges Bank prøver å oppnå? Siden 2001 har Norge hatt et eksplisitt **inflasjonsmål**: prisveksten skal over tid ligge nær **2,0 prosent** per år. Dette tallet ble justert ned fra 2,5 prosent i 2018, men prinsippet er det samme. Tenk på inflasjonsmålet som et kompass – det gir retning for alle rentebeslutninger.

Men Norges Bank sikter ikke blindt etter akkurat 2,0 prosent hver eneste måned. De praktiserer det som kalles **fleksibel inflasjonsstyring**, og det betyr at sentralbanken veier hensynet til stabil inflasjon opp mot hensynet til stabil produksjon og sysselsetting. Forestill deg en lege som behandler en pasient: målet er å senke feberen, men ikke så brutalt at pasienten får andre komplikasjoner. Slik tenker også sentralbanken. Dersom inflasjonen er for høy, vil de normalt ikke slå til med så kraftige renteøkninger at tusenvis mister jobben. I stedet bruker de litt lenger tid på å bringe inflasjonen tilbake til målet. Finansiell stabilitet – å hindre at boligbobler og gjeldsoppbygging truer hele det økonomiske systemet – er også en del av vurderingen.

Fordelene med et eksplisitt mål er betydelige. Det gir **forutsigbarhet** for bedrifter og husholdninger. Når folk stoler på at inflasjonen vil ligge rundt 2 prosent, forankres forventningene, og da trenger ikke bedrifter å sette opp prisene «i tilfelle», og arbeidstakere krever ikke lønnsøkninger «for sikkerhets skyld». Paradoksalt nok gjør selve troen på at inflasjonen vil holde seg lav, at den faktisk holder seg lav.`,
    },
    {
      id: 'samfokonomi-2-2-1-n-section2',
      type: 'text',
      content: `## Transmisjonsmekanismen – hvordan renten forplanter seg

Når Norges Bank hever renten en oktobermorgen, skjer ikke endringen i økonomien over natten. Det tar tid – typisk **1 til 3 år** – før den fulle effekten merkes. Prosessen kalles **transmisjonsmekanismen**, og den virker gjennom fire kanaler som arbeider parallelt.

Den mest åpenbare er **rentekanalen**. Når styringsrenten stiger, øker bankene sine utlånsrenter. Boliglånet ditt blir dyrere, og du har mindre å bruke på alt annet. Bedrifter som vurderer å investere i nye maskiner, finner ut at det ikke lenger lønner seg å låne. Samlet etterspørsel i økonomien faller, og prisveksten dempes.

Så har vi **valutakurskanalen**. Høyere norsk rente i forhold til utlandet gjør det mer attraktivt for internasjonale investorer å plassere penger i norske kroner. Økt etterspørsel etter kroner styrker kursen. En sterkere krone gjør importerte varer billigere – elektronikk, klær, biler – og det demper inflasjonen direkte. Samtidig blir det vanskeligere for norske eksportører å selge varene sine, fordi de blir relativt dyrere for utenlandske kjøpere.

**Formueskanalen** virker gjennom boligmarkedet og aksjemarkedet. Høyere rente betyr at færre har råd til å kjøpe bolig, og boligprisene faller. Når boligen din er verdt mindre, føler du deg mindre velstående, og du bruker mindre penger. Denne formueseffekten er spesielt sterk i Norge, der en stor andel av husholdningenes formue er bundet opp i bolig.

Til sist har vi **forventningskanalen**, som kanskje er den kraftigste av alle. Dersom folk stoler på at Norges Bank vil holde inflasjonen nær målet, blir forventningene selv et stabiliserende element. Bedrifter setter ikke opp prisene i panikk, og fagforeninger krever ikke overdrevne lønnsøkninger.

Et viktig skille er forskjellen mellom **nominell rente** og **realrente**. Realrenten er den nominelle renten minus forventet inflasjon: $r \\approx i - \\pi^e$. Er nominell rente 4,5 prosent og forventet inflasjon 2,5 prosent, er realrenten omtrent 2 prosent. Det er realrenten som faktisk betyr noe for økonomiske beslutninger – den forteller deg hva du reelt tjener på å spare, eller hva det reelt koster å låne. Fordi rentebeslutninger har en forsinkelse på ett til tre år, baserer Norges Bank alltid sine beslutninger på prognoser, og publiserer en **rentebane** – en prognose for den forventede renteutviklingen.`,
    },
    {
      id: 'samfokonomi-2-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på pengepolitikk og sentralbanken:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-2-1-n-quiz1-q0',
            task: 'Hva er hovedmålet for pengepolitikken i Norge?',
            options: [
              { id: 'a', text: 'Å holde kronekursen stabil mot euro', isCorrect: false },
              { id: 'b', text: 'En årlig konsumprisvekst nær 2 prosent over tid', isCorrect: true },
              { id: 'c', text: 'Å minimere statens gjeld', isCorrect: false },
              { id: 'd', text: 'Å holde arbeidsledigheten under 3 prosent', isCorrect: false },
            ],
            solution: 'Siden 2018 har det operative målet for pengepolitikken vært en årsvekst i konsumprisene som over tid er nær 2,0 prosent. Norges Bank praktiserer fleksibel inflasjonsstyring, der også produksjon og sysselsetting vektlegges.',
          },
          {
            id: 'samfokonomi-2-2-1-n-quiz1-q1',
            task: 'Hvilken kanal i transmisjonsmekanismen virker gjennom at høyere norsk rente tiltrekker utenlandsk kapital?',
            options: [
              { id: 'a', text: 'Rentekanalen', isCorrect: false },
              { id: 'b', text: 'Formueskanalen', isCorrect: false },
              { id: 'c', text: 'Valutakurskanalen', isCorrect: true },
              { id: 'd', text: 'Skattekanalen', isCorrect: false },
            ],
            solution: 'Valutakurskanalen virker ved at høyere norsk rente gjør det attraktivt å plassere kapital i norske kroner. Økt etterspørsel etter kroner styrker kursen, noe som gjør importvarer billigere og demper inflasjonen.',
          },
          {
            id: 'samfokonomi-2-2-1-n-quiz1-q2',
            task: 'Nominell rente er 5 prosent og forventet inflasjon er 3 prosent. Hva er omtrent realrenten?',
            options: [
              { id: 'a', text: '8 prosent', isCorrect: false },
              { id: 'b', text: '2 prosent', isCorrect: true },
              { id: 'c', text: '5 prosent', isCorrect: false },
              { id: 'd', text: '1,67 prosent', isCorrect: false },
            ],
            solution: 'Realrenten beregnes tilnærmet som nominell rente minus forventet inflasjon: r ≈ i − πᵉ = 5 % − 3 % = 2 %. Det er realrenten som bestemmer den faktiske kostnaden ved å låne og avkastningen ved å spare.',
          },
          {
            id: 'samfokonomi-2-2-1-n-quiz1-q3',
            task: 'Hva menes med fleksibel inflasjonsstyring?',
            options: [
              { id: 'a', text: 'At inflasjonsmålet endres hvert år etter hva regjeringen ønsker', isCorrect: false },
              { id: 'b', text: 'At sentralbanken veier inflasjonsmålet mot hensynet til produksjon og sysselsetting', isCorrect: true },
              { id: 'c', text: 'At inflasjonen fritt kan svinge mellom 0 og 4 prosent', isCorrect: false },
              { id: 'd', text: 'At styringsrenten justeres automatisk av en datamodell', isCorrect: false },
            ],
            solution: 'Fleksibel inflasjonsstyring betyr at Norges Bank ikke bare jakter på inflasjonsmålet, men også tar hensyn til realøkonomien. De bruker lenger tid på å nå målet for å unngå unødige svingninger i produksjon og sysselsetting.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært hvordan pengepolitikken fungerer i Norge. **Norges Bank** er sentralbanken som fastsetter **styringsrenten** – det viktigste pengepolitiske virkemiddelet. Målet er en årlig prisvekst nær **2 prosent**, men med **fleksibel inflasjonsstyring** tar sentralbanken også hensyn til produksjon og sysselsetting. Endringer i styringsrenten forplanter seg gjennom **transmisjonsmekanismen** via fire kanaler: rentekanalen, valutakurskanalen, formueskanalen og forventningskanalen. Det tar typisk 1–3 år før en renteendring får full effekt, og derfor må sentralbanken være fremoverskuende. Skillet mellom **nominell rente** og **realrente** er avgjørende: det er realrenten – nominell rente minus forventet inflasjon – som styrer spare- og investeringsbeslutninger.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2 NARRATIV: Finanspolitikk
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_2_2_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-2-2-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '2.2',
  title: 'Finanspolitikk',
  subtitle: 'Narrativ versjon',
  description: 'Fortellingen om statsbudsjettet som verktøy – fra automatiske sikkerhetsnett til politiske krisepakker, og hvorfor én milliard fra staten kan bli til nesten to milliarder i BNP.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for statsbudsjettets rolle i finanspolitikken',
    'forklare forskjellen mellom automatiske stabilisatorer og diskresjonær finanspolitikk',
    'beregne og tolke multiplikatoreffekter',
  ],
  linkedChapterId: 'samfokonomi-2-2-2',
  content: [
    {
      id: 'samfokonomi-2-2-2-n-intro',
      type: 'text',
      content: `## Statens verktøykasse

Hver høst, den andre tirsdag i oktober, legger finansministeren frem forslaget til neste års statsbudsjett. Det er et dokument på tusenvis av sider som bestemmer alt fra hvor mye du betaler i skatt, til hvor mange nye lærere som ansettes, til hvor mange kilometer motorvei som bygges. Men statsbudsjettet er mer enn en regnskapsbok – det er myndighetenes viktigste verktøy for å påvirke hele den økonomiske aktiviteten i landet.

**Finanspolitikk** handler om hvordan staten bruker sine inntekter og utgifter til å styre økonomien. Mens pengepolitikken er sentralbankens domene, er finanspolitikken politikernes verktøy. Stortinget vedtar budsjettet, og gjennom det bestemmer folkets valgte representanter retningen for den norske økonomien. Statens inntekter kommer hovedsakelig fra skatter og avgifter – inntektsskatt, merverdiavgift, særavgifter – samt fra petroleumsinntekter. Utgiftene går til offentlig konsum som helse, utdanning og forsvar, til overføringer som pensjoner og trygder, til kommuneoverføringer og til investeringer i infrastruktur.

I Norge brukes det **strukturelle oljekorrigerte budsjettunderskuddet** som mål på den underliggende finanspolitiske innretningen. Det korrigerer for både petroleumsinntekter og konjunkturelle svingninger, og gir dermed et ærlig bilde av hvor ekspansiv eller kontraktiv finanspolitikken egentlig er.`,
    },
    {
      id: 'samfokonomi-2-2-2-n-section1',
      type: 'text',
      content: `## Automatiske stabilisatorer – økonomiens airbagger

Tenk deg at økonomien er en bil som kjører nedover en bakke. **Automatiske stabilisatorer** er som bremsene som aktiveres helt av seg selv – sjåføren trenger ikke gjøre noe. De er bygget inn i systemet.

Den viktigste automatiske stabilisatoren er det **progressive skattesystemet**. Når økonomien går bra og folk tjener mer, betaler de relativt sett mer i skatt fordi de beveger seg opp i skattesystemet. Dette demper den økte kjøpekraften og forhindrer overoppheting. Når økonomien snur og inntektene faller, betaler folk mindre skatt, slik at den disponible inntekten ikke faller like mye som bruttoinntekten. Skattesystemet fungerer som en støtdemper.

Den andre store automatiske stabilisatoren er **arbeidsledighetstrygden** og andre sosiale overføringer. Når arbeidsplasser forsvinner i en nedgangskonjunktur, øker utbetalingene av dagpenger automatisk – uten at politikerne trenger å løfte en finger. Folk som mister jobben, får inntekt og kan fortsette å kjøpe mat, betale husleie og holde hjulene i gang. Overskuddsskatten på bedrifter faller også automatisk når overskuddene synker.

I de nordiske landene, med progressive skattesystemer og sjenerøse velferdsordninger, er de automatiske stabilisatorene relativt sterke. De virker raskt, de er forutsigbare, de er transparente, og de reverseres automatisk når konjunkturen snur. Men de har sine begrensninger: de kan ikke skreddersys til spesifikke situasjoner, og styrken avhenger av skattesystemets utforming og trygdeordningenes generøsitet.`,
    },
    {
      id: 'samfokonomi-2-2-2-n-section2',
      type: 'text',
      content: `## Diskresjonær finanspolitikk og multiplikatoreffekten

Noen ganger trenger økonomien et ekstra dytt utover det de automatiske stabilisatorene gir. Da tyr politikerne til **diskresjonær finanspolitikk** – bevisste vedtak om å endre skatter, overføringer eller offentlige utgifter. **Ekspansiv finanspolitikk** brukes i nedgangskonjunkturer: økt offentlig forbruk, høyere overføringer eller skattelettelser. **Kontraktiv finanspolitikk** brukes i oppgangskonjunkturer og innebærer det motsatte.

Et strålende eksempel er Norges respons under finanskrisen i 2008–2009. Da den globale økonomien kollapset, la regjeringen frem en tiltakspakke på om lag 20 milliarder kroner – veier, jernbane, vedlikehold av offentlige bygg, økte kommuneoverføringer og midlertidige skattelettelser for bedrifter. Samtidig senket Norges Bank styringsrenten kraftig – fra 5,75 til 1,25 prosent. Finanspolitikk og pengepolitikk virket sammen. Resultatet? Norge kom gjennom krisen med bemerkelsesverdig moderate konsekvenser.

Men her er den virkelig fascinerende mekanismen: **multiplikatoreffekten**. Når staten bygger en bro for 100 millioner kroner, går pengene til byggearbeidere og materialeleverandører. De bruker en andel av sin nye inntekt på konsum – mat, klær, underholdning – og disse pengene blir inntekt for andre, som igjen bruker en andel. I en lukket økonomi med skatt er multiplikatoren: $m = \\frac{1}{1 - c(1-t)}$, der $c$ er den marginale konsumtilbøyeligheten og $t$ er skattesatsen. Med $c = 0{,}8$ og $t = 0{,}4$ blir multiplikatoren omtrent 1,92 – altså nesten en dobling.

Men Norge er en åpen økonomi. Mye av det vi forbruker er importert – og importerte kroner stimulerer utenlandsk produksjon, ikke norsk. Med importlekkasje $z$ i formelen: $m = \\frac{1}{1 - c(1-t) + z}$. Med $z = 0{,}3$ faller multiplikatoren til rundt 1,22. Utfordringene for aktiv finanspolitikk inkluderer også **tidsforsinkelser** (det tar tid å oppdage, vedta og iverksette tiltak), **politisk asymmetri** (lettere å øke utgifter enn å kutte), og **fortrengningseffekten** (økt offentlig etterspørsel kan presse opp renter og fortrenge privat investering).`,
    },
    {
      id: 'samfokonomi-2-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på finanspolitikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-2-2-n-quiz1-q0',
            task: 'Hvilken av følgende er en automatisk stabilisator?',
            options: [
              { id: 'a', text: 'En ekstraordinær tiltakspakke vedtatt av Stortinget', isCorrect: false },
              { id: 'b', text: 'Arbeidsledighetstrygden som øker automatisk når flere mister jobben', isCorrect: true },
              { id: 'c', text: 'Norges Bank setter ned styringsrenten', isCorrect: false },
              { id: 'd', text: 'Regjeringen vedtar en midlertidig skattelettelse', isCorrect: false },
            ],
            solution: 'Automatiske stabilisatorer virker uten nye politiske vedtak. Arbeidsledighetstrygden øker automatisk når flere blir ledige, noe som demper fallet i samlet etterspørsel. De øvrige alternativene beskriver enten diskresjonær finanspolitikk eller pengepolitikk.',
          },
          {
            id: 'samfokonomi-2-2-2-n-quiz1-q1',
            task: 'Hva er utgiftsmultiplikatoren i en lukket økonomi med marginal konsumtilbøyelighet 0,75 og skattesats 0,3?',
            options: [
              { id: 'a', text: 'Omtrent 1,5', isCorrect: false },
              { id: 'b', text: 'Omtrent 2,1', isCorrect: true },
              { id: 'c', text: 'Omtrent 3,3', isCorrect: false },
              { id: 'd', text: 'Omtrent 0,5', isCorrect: false },
            ],
            solution: 'Multiplikatoren er m = 1/(1 − c(1−t)) = 1/(1 − 0,75 × 0,7) = 1/(1 − 0,525) = 1/0,475 ≈ 2,11. Hver krone i økte offentlige utgifter gir omtrent 2,1 kroner i økt BNP.',
          },
          {
            id: 'samfokonomi-2-2-2-n-quiz1-q2',
            task: 'Hva menes med fortrengningseffekten (crowding out)?',
            options: [
              { id: 'a', text: 'At offentlig sektor trekker til seg arbeidere fra privat sektor', isCorrect: false },
              { id: 'b', text: 'At økte offentlige utgifter kan presse opp rentene og redusere privat investering', isCorrect: true },
              { id: 'c', text: 'At skatteøkninger gjør at folk jobber mindre', isCorrect: false },
              { id: 'd', text: 'At inflasjon fortrenger sparing', isCorrect: false },
            ],
            solution: 'Fortrengningseffekten oppstår når økt offentlig etterspørsel presser opp rentene, noe som gjør det dyrere for private bedrifter og husholdninger å låne. Privat konsum og investering fortrenges dermed delvis av det økte offentlige forbruket.',
          },
          {
            id: 'samfokonomi-2-2-2-n-quiz1-q3',
            task: 'Hvorfor er multiplikatoreffekten lavere i en åpen økonomi som Norge enn i en lukket økonomi?',
            options: [
              { id: 'a', text: 'Fordi nordmenn sparer mer enn andre', isCorrect: false },
              { id: 'b', text: 'Fordi deler av etterspørselen lekker ut gjennom import', isCorrect: true },
              { id: 'c', text: 'Fordi Norge har lavere skatter enn andre land', isCorrect: false },
              { id: 'd', text: 'Fordi Norges Bank alltid motvirker finanspolitikken', isCorrect: false },
            ],
            solution: 'I en åpen økonomi går en del av den økte etterspørselen til importerte varer og tjenester. Disse pengene stimulerer produksjon i utlandet, ikke i Norge. Importlekkasjen reduserer multiplikatoren betydelig.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært at **finanspolitikk** handler om statens bruk av inntekter og utgifter for å påvirke økonomien, styrt gjennom **statsbudsjettet**. **Automatiske stabilisatorer** – som det progressive skattesystemet og arbeidsledighetstrygden – demper konjunktursvingninger uten nye politiske vedtak. **Diskresjonær finanspolitikk** krever aktive vedtak, som tiltakspakker eller skatteendringer, men utfordres av tidsforsinkelser, politisk asymmetri og fortrengningseffekten. **Multiplikatoreffekten** forklarer hvordan økte offentlige utgifter forsterkes gjennom økonomien, men i en åpen økonomi som Norge reduseres effekten av importlekkasje. Den norske finanskriseerfaringen fra 2008–2009 viser verdien av å ha finanspolitisk handlingsrom.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3 NARRATIV: Penger og inflasjon
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_2_3_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-2-3-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '2.3',
  title: 'Penger og inflasjon',
  subtitle: 'Narrativ versjon',
  description: 'Fra byttehandel til bankpenger – historien om hva penger egentlig er, hvordan banker skaper dem ut av ingenting, og hvorfor for mange penger i omløp kan ødelegge en hel økonomi.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjøre rede for pengers funksjoner og hvordan penger skapes',
    'bruke kvantitetsteorien til å analysere sammenhengen mellom pengemengde og prisnivå',
    'drøfte ulike typer inflasjon og kostnadene de påfører samfunnet',
  ],
  linkedChapterId: 'samfokonomi-2-2-3',
  content: [
    {
      id: 'samfokonomi-2-2-3-n-intro',
      type: 'text',
      content: `## Oppfinnelsen som forandret alt

Tenk deg at du er bonde i vikingtiden og vil ha en ny øks. Du har korn å tilby, men smeden vil ikke ha korn – han vil ha ull. Ullbonden vil ikke ha korn heller – hun vil ha honning. Du ender opp med å bytte korn mot fisk, fisk mot ull, ull mot honning, og honning mot en øks. Fire byttehandler for én enkel transaksjon. Det er det økonomer kaller problemet med *dobbelt sammentreff av behov* – du må finne noen som har det du vil ha, og som samtidig vil ha det du har å tilby.

**Penger** løser dette problemet elegant. De er en av de viktigste institusjonene i en moderne økonomi, og de fyller tre grunnleggende funksjoner. For det første er penger et **betalingsmiddel** – alle aksepterer dem i bytte mot varer og tjenester. For det andre er de en **verdimåler** – vi uttrykker priser i pengeenheter, noe som gjør det mulig å sammenligne verdien av helt forskjellige ting, som en time med advokatbistand og en kilo epler. For det tredje er penger et **verdioppbevaringsmiddel** – du kan tjene pengene i dag og bruke dem neste år. Men her kommer inflasjonen inn: jo høyere prisveksten er, desto dårligere er penger som verdioppbevaringsmiddel.

I dag er det meste av pengene i økonomien ikke sedler og mynter, men tall på en dataskjerm. Og her kommer et overraskende faktum: det er ikke sentralbanken som skaper mesteparten av pengene – det er vanlige forretningsbanker.`,
    },
    {
      id: 'samfokonomi-2-2-3-n-section1',
      type: 'text',
      content: `## Pengeskaping, pengemengde og kvantitetsteorien

De fleste tenker at Norges Bank trykker sedler og putter dem i omløp, og at det er slik pengemengden vokser. Men virkeligheten er helt annerledes. **Pengeskaping** skjer primært i forretningsbankene, og det skjer gjennom noe som kan virke nesten magisk: hver gang en bank gir et lån, skaper den samtidig nye penger. Når DNB innvilger et boliglån på 3 millioner kroner til deg, krediterer de rett og slett kontoen din med 3 millioner. Disse pengene eksisterte ikke før – banken skapte dem *ut av ingenting*. Sentralbankens rolle er å regulere denne pengeskapingen indirekte, gjennom styringsrenten og andre virkemidler.

Pengemengden måles på ulike nivåer. **M0** (basispengemengden) er sedler og mynt pluss bankenes innskudd i Norges Bank. **M1** legger til bankinnskudd på transaksjonskontoer. **M2** inkluderer i tillegg spareinnskudd med begrenset likviditet. Fysiske penger utgjør bare en bitteliten brøkdel av den totale pengemengden.

Men hva skjer med prisene når pengemengden vokser? Her gir **kvantitetslikningen** svar: $M \\cdot V = P \\cdot Y$. Der $M$ er pengemengden, $V$ er pengers **omløpshastighet** (hvor mange ganger en krone skifter hender i løpet av et år), $P$ er prisnivået, og $Y$ er reelt BNP. Den klassiske **kvantitetsteorien** antar at $V$ er relativt stabil og at $Y$ bestemmes av tilbudssiden. Dersom begge er stabile, fører en økning i $M$ direkte til en økning i $P$. I prosentvise endringer: $\\hat{P} \\approx \\hat{M} - \\hat{Y}$. Altså: inflasjonen tilsvarer pengemengdeveksten minus veksten i reell produksjon. Milton Friedman uttrykte det slik: «Inflasjon er alltid og overalt et monetært fenomen.» Historisk stemmer dette godt på lang sikt, men på kort sikt er sammenhengen svakere fordi omløpshastigheten kan svinge og andre faktorer spiller inn.`,
    },
    {
      id: 'samfokonomi-2-2-3-n-section2',
      type: 'text',
      content: `## Inflasjonens mange ansikter – og dens kostnader

**Inflasjon** – vedvarende økning i det generelle prisnivået – kan oppstå på flere måter. **Etterspørselsdriven inflasjon** oppstår når samlet etterspørsel vokser raskere enn produksjonskapasiteten – for mange kroner jager for få varer. I AD-AS-modellen representeres dette som et høyreskift i AD-kurven. **Kostnadsdriven inflasjon** oppstår når produksjonskostnadene øker, for eksempel gjennom oljeprissjokk, lønnsvekst utover produktiviteten eller en svakere valutakurs. I AD-AS-modellen skifter AS-kurven til venstre, og det kan gi stagflasjon – høy inflasjon og lav produksjon samtidig.

**Importert inflasjon** er spesielt relevant for Norge som liten, åpen økonomi: svekkes kronekursen, blir alt vi importerer dyrere. Og **forventningsdrevet inflasjon** kan bli selvoppfyllende: bedrifter setter opp prisene fordi de forventer at andre gjør det, arbeidstakere krever høyere lønn, og en **pris-lønns-spiral** tar form. I Norge brukes **KPI** (konsumprisindeksen) som mål på inflasjon, og **KPI-JAE** (justert for avgiftsendringer og energipriser) som mål på den underliggende inflasjonen.

Kostnadene ved inflasjon er mange. Den reduserer informasjonsverdien av priser – er den nye restauranten dyr, eller har bare prisnivået steget? Den omfordeler vilkårlig fra sparere til låntakere. Den skaper skattevridninger og tvinger bedrifter til å bruke ressurser på å oppdatere priser hyppigere (**menykostnader**) og husholdninger til å minimere kontantbeholdningen (**skosålekostnader**). I ekstremtilfellet – **hyperinflasjon** med over 50 prosent prisstigning per måned – kollapser pengenes funksjon helt, som i Zimbabwe på 2000-tallet og Venezuela fra 2016.

Men også det motsatte – **deflasjon** – er farlig. Japans «tapte tiår» etter 1990 viste at fallende priser kan skape en ond sirkel: forbrukere utsetter kjøp fordi ting blir billigere i morgen, etterspørselen faller, bedrifter kutter, inntektene synker, og realverdien av gjeld øker. Nettopp derfor sikter sentralbanker mot *lav og stabil* inflasjon rundt 2 prosent – et polster mot deflasjon, men lavt nok til å bevare pengenes verdi.`,
    },
    {
      id: 'samfokonomi-2-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på penger og inflasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-2-3-n-quiz1-q0',
            task: 'Hvordan skapes mesteparten av pengemengden i en moderne økonomi?',
            options: [
              { id: 'a', text: 'Sentralbanken trykker sedler og mynt', isCorrect: false },
              { id: 'b', text: 'Staten skaper penger gjennom offentlige utgifter', isCorrect: false },
              { id: 'c', text: 'Forretningsbankene skaper penger gjennom utlånsvirksomheten', isCorrect: true },
              { id: 'd', text: 'Pengemengden bestemmes av gullreservene', isCorrect: false },
            ],
            solution: 'Forretningsbankene skaper mesteparten av pengemengden. Når en bank gir et lån, krediterer den låntakerens konto, og det skapes et nytt innskudd – altså nye penger. Fysiske sedler og mynt utgjør bare en liten del av totalen.',
          },
          {
            id: 'samfokonomi-2-2-3-n-quiz1-q1',
            task: 'Ifølge kvantitetsteorien: hva blir inflasjonen dersom pengemengdeveksten er 8 prosent og realveksten i BNP er 3 prosent?',
            options: [
              { id: 'a', text: '3 prosent', isCorrect: false },
              { id: 'b', text: '5 prosent', isCorrect: true },
              { id: 'c', text: '8 prosent', isCorrect: false },
              { id: 'd', text: '11 prosent', isCorrect: false },
            ],
            solution: 'Med konstant omløpshastighet gir kvantitetsteorien: inflasjon ≈ pengemengdevekst − realvekst i BNP = 8 % − 3 % = 5 %. Overskytende pengemengdevekst slår ut som prisstigning.',
          },
          {
            id: 'samfokonomi-2-2-3-n-quiz1-q2',
            task: 'Hva er kostnadsdriven inflasjon?',
            options: [
              { id: 'a', text: 'Inflasjon som skyldes at samlet etterspørsel øker for raskt', isCorrect: false },
              { id: 'b', text: 'Inflasjon som skyldes økte produksjonskostnader, for eksempel oljeprissjokk', isCorrect: true },
              { id: 'c', text: 'Inflasjon som skyldes økt pengemengde', isCorrect: false },
              { id: 'd', text: 'Inflasjon som skyldes for lave renter', isCorrect: false },
            ],
            solution: 'Kostnadsdriven inflasjon (cost-push inflation) oppstår når produksjonskostnadene stiger – for eksempel gjennom oljeprissjokk, kraftig lønnsvekst eller svakere valutakurs. I AD-AS-modellen skifter AS-kurven til venstre.',
          },
          {
            id: 'samfokonomi-2-2-3-n-quiz1-q3',
            task: 'Hvorfor sikter sentralbanker mot lav og stabil inflasjon (f.eks. 2 prosent) fremfor null inflasjon?',
            options: [
              { id: 'a', text: 'Fordi det er teknisk umulig å oppnå null inflasjon', isCorrect: false },
              { id: 'b', text: 'Fordi litt inflasjon gir rom for negative realrenter og et polster mot deflasjon', isCorrect: true },
              { id: 'c', text: 'Fordi regjeringen ønsker å redusere statsgjelden gjennom inflasjon', isCorrect: false },
              { id: 'd', text: 'Fordi 2 prosent er det internasjonale gjennomsnittet', isCorrect: false },
            ],
            solution: 'Et lavt inflasjonspolster gir sentralbanken rom for å sette negative realrenter i nedgangstider (nominell rente kan ikke lett gå under null). Det beskytter også mot deflasjon, som kan skape onde sirkler slik vi så i Japan.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-2-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært at **penger** har tre funksjoner: betalingsmiddel, verdimåler og verdioppbevaringsmiddel. Mesteparten av pengemengden skapes av **forretningsbankene** gjennom utlån, ikke av sentralbanken. **Kvantitetslikningen** $M \\cdot V = P \\cdot Y$ viser sammenhengen mellom pengemengde og prisnivå, og **kvantitetsteorien** hevder at pengemengdevekst utover realveksten gir inflasjon – noe som stemmer godt på lang sikt. Inflasjon kan være **etterspørselsdriven**, **kostnadsdriven**, **importert** eller **forventningsdrevet**. Kostnadene ved inflasjon inkluderer redusert prisinformasjon, vilkårlig omfordeling og skattevridninger. Både hyperinflasjon og deflasjon er farlige ytterpunkter, og sentralbanker sikter mot lav, stabil inflasjon rundt 2 prosent.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4 NARRATIV: Phillips-kurven og avveininger
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_2_4_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-2-4-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '2.4',
  title: 'Phillips-kurven og avveininger',
  subtitle: 'Narrativ versjon',
  description: 'Dramaet om den tilsynelatende avveiningen mellom inflasjon og arbeidsledighet – fra Phillips\' oppdagelse i 1958, gjennom 1970-tallets stagflasjon, til Friedmans revolusjonerende motangrep.',
  estimatedMinutes: 24,
  competenceGoals: [
    'forklare den opprinnelige og den forventningsutvidede Phillips-kurven',
    'drøfte sammenhengen mellom inflasjon, arbeidsledighet og forventninger',
    'analysere NAIRU og den langsiktige vertikale Phillips-kurven',
  ],
  linkedChapterId: 'samfokonomi-2-2-4',
  content: [
    {
      id: 'samfokonomi-2-2-4-n-intro',
      type: 'text',
      content: `## En kurve som forandret politikken

I 1958 satt en newzealandsk økonom ved navn A. W. Phillips ved London School of Economics og studerte nesten hundre år med britiske data – fra 1861 til 1957. Han la merke til et mønster: når arbeidsledigheten var lav, var lønnsveksten høy. Når ledigheten var høy, var lønnsveksten lav. Han tegnet opp dataene, og det fremsto en tydelig, nedadskrånende kurve.

Denne oppdagelsen, snart kjent som **Phillips-kurven**, ble raskt en av de mest innflytelsesrike ideene i makroøkonomien. Amerikanske økonomer Paul Samuelson og Robert Solow oversatte den til en sammenheng mellom inflasjon og arbeidsledighet, og plutselig sto politikerne overfor det som så ut som en meny av valg: Vil du ha lav arbeidsledighet? Da må du akseptere litt høyere inflasjon. Vil du ha prisstabilitet? Da får du leve med flere arbeidsledige. Den opprinnelige Phillips-kurven kan skrives som $\\pi = -\\beta(u - u^*)$, der $\\pi$ er inflasjonsraten, $u$ er faktisk arbeidsledighet og $u^*$ er likevektsledigheten.

Det var en forlokkende idé. Men som vi skal se, var den for enkel – og den dramatiske stagflasjonen på 1970-tallet skulle tvinge økonomene til å tenke helt nytt om forholdet mellom inflasjon og ledighet.`,
    },
    {
      id: 'samfokonomi-2-2-4-n-section1',
      type: 'text',
      content: `## Friedman, Phelps og forventningenes makt

På slutten av 1960-tallet reiste to økonomer en fundamental innvending mot Phillips-kurven – uavhengig av hverandre. **Milton Friedman** og **Edmund Phelps** argumenterte for at den stabile avveiningen bare gjaldt så lenge folk ble overrasket. Når forventningene justerte seg, ville avveiningen forsvinne.

De introduserte den **forventningsutvidede Phillips-kurven**: $\\pi = \\pi^e - \\beta(u - u^*)$. Det avgjørende nye leddet er $\\pi^e$ – forventet inflasjon. Hovedinnsikten er at det ikke er *nivået* på inflasjonen som henger sammen med arbeidsledigheten, men *avviket* mellom faktisk og forventet inflasjon.

Tenk deg følgende scenario. Økonomien starter i likevekt med 2 prosent inflasjon og arbeidsledighet lik **NAIRU** – Non-Accelerating Inflation Rate of Unemployment, den arbeidsledighetsraten der inflasjonen verken akselererer eller bremser. Myndighetene fører ekspansiv politikk for å presse ledigheten ned. På kort sikt fungerer det: inflasjonen stiger til 4 prosent, men folk forventer fortsatt bare 2 prosent. Reallønnene faller uten at arbeiderne merker det, og bedriftene ansetter flere.

Men over tid justerer folk forventningene opp til 4 prosent. De krever høyere lønn, bedriftene setter opp prisene, og arbeidsledigheten vender tilbake til NAIRU. Resultatet? Myndighetene har fått høyere inflasjon, men arbeidsledigheten er tilbake der den startet. Den kortsiktige Phillips-kurven har skiftet oppover. Konklusjonen er dyptgripende: den **langsiktige Phillips-kurven er vertikal** ved NAIRU. Det finnes ingen varig avveining mellom inflasjon og arbeidsledighet. NAIRU bestemmes av strukturelle forhold – fagforeningers forhandlingsstyrke, trygdeordningers generøsitet, matchingeffektivitet, arbeidsmarkedsregulering – og kan bare endres gjennom strukturpolitikk.`,
    },
    {
      id: 'samfokonomi-2-2-4-n-section2',
      type: 'text',
      content: `## Stagflasjon, forventninger og prisen for disinflasjon

Historien ga Friedman og Phelps rett raskere enn noen hadde ventet. I oktober 1973 innførte OPEC-landene en oljeembargo og firedoblet oljeprisen. Vestlige økonomier ble rammet av **stagflasjon** – høy inflasjon og høy arbeidsledighet *samtidig*. Den opprinnelige Phillips-kurven kunne ikke forklare dette, men den forventningsutvidede versjonen kunne: oljeprissjokket var et negativt tilbudssjokk som skjøv AS-kurven til venstre, inflasjonsforventningene steg, og den kortsiktige Phillips-kurven skjøv seg oppover.

Erfaringen understreket betydningen av **inflasjonsforventninger**. Hvordan folk danner forventninger er avgjørende. Med **adaptive forventninger** baserer folk seg på fortiden: forventet inflasjon i år er omtrent lik faktisk inflasjon i fjor. Justeringen skjer gradvis. Med **rasjonelle forventninger** bruker folk all tilgjengelig informasjon, inkludert kunnskap om myndighetenes politikk, og gjør ikke systematiske feil. Med rasjonelle forventninger er avveiningen enda mer kortvarig.

Hva koster det å bekjempe inflasjon? **Disinflasjon** – å redusere inflasjonsraten – er aldri gratis. **Offer ratio** angir hvor mange prosentpoeng av BNP som går tapt per prosentpoengs reduksjon i inflasjonen. Vil et land redusere inflasjonen fra 10 til 2 prosent med en offer ratio på 3, er det samlede produksjonstapet $8 \\times 3 = 24$ prosent av ett års BNP. Skal smerten tas raskt gjennom **sjokk-terapi** med svært høy arbeidsledighet over kort tid, eller gradvis med moderat høyere arbeidsledighet over lang tid? Tilhengere av rasjonelle forventninger argumenterer for at troverdig, rask innstramming kan forankre forventningene hurtig og dermed senke de faktiske kostnadene. I virkeligheten er troverdighet nøkkelen: en sentralbank som befolkningen stoler på, kan bringe ned inflasjonen til lavere kostnader.`,
    },
    {
      id: 'samfokonomi-2-2-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-2-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på Phillips-kurven og avveininger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-2-4-n-quiz1-q0',
            task: 'Hva sier den langsiktige Phillips-kurven?',
            options: [
              { id: 'a', text: 'Det finnes en stabil avveining mellom inflasjon og arbeidsledighet', isCorrect: false },
              { id: 'b', text: 'Inflasjonen er alltid lik null på lang sikt', isCorrect: false },
              { id: 'c', text: 'På lang sikt er arbeidsledigheten uavhengig av inflasjonsraten og lik NAIRU', isCorrect: true },
              { id: 'd', text: 'Arbeidsledigheten kan holdes permanent under NAIRU med ekspansiv politikk', isCorrect: false },
            ],
            solution: 'Den langsiktige Phillips-kurven er vertikal ved NAIRU. Det betyr at arbeidsledigheten på lang sikt bestemmes av strukturelle faktorer og er uavhengig av inflasjonsraten. Forsøk på å holde ledigheten under NAIRU gir bare akselererende inflasjon.',
          },
          {
            id: 'samfokonomi-2-2-4-n-quiz1-q1',
            task: 'Hva kjennetegnet stagflasjonen på 1970-tallet?',
            options: [
              { id: 'a', text: 'Lav inflasjon og lav arbeidsledighet', isCorrect: false },
              { id: 'b', text: 'Høy inflasjon og høy arbeidsledighet samtidig', isCorrect: true },
              { id: 'c', text: 'Deflasjon og høy arbeidsledighet', isCorrect: false },
              { id: 'd', text: 'Moderat inflasjon og fallende produksjon', isCorrect: false },
            ],
            solution: 'Stagflasjon betyr høy inflasjon kombinert med stagnasjon (lav vekst og høy arbeidsledighet). Oljeprissjokket i 1973 utløste stagflasjon og beviste at den opprinnelige Phillips-kurven var for enkel.',
          },
          {
            id: 'samfokonomi-2-2-4-n-quiz1-q2',
            task: 'Hva er det avgjørende nye leddet i den forventningsutvidede Phillips-kurven sammenlignet med den opprinnelige?',
            options: [
              { id: 'a', text: 'Produksjonsgapet', isCorrect: false },
              { id: 'b', text: 'Forventet inflasjon', isCorrect: true },
              { id: 'c', text: 'Oljeprisendringer', isCorrect: false },
              { id: 'd', text: 'Valutakursen', isCorrect: false },
            ],
            solution: 'Den forventningsutvidede Phillips-kurven inkluderer forventet inflasjon (πᵉ): π = πᵉ − β(u − u*). Det er avviket mellom faktisk og forventet inflasjon som henger sammen med arbeidsledigheten, ikke nivået.',
          },
          {
            id: 'samfokonomi-2-2-4-n-quiz1-q3',
            task: 'Hva bestemmer NAIRU i en økonomi?',
            options: [
              { id: 'a', text: 'Sentralbankens styringsrente', isCorrect: false },
              { id: 'b', text: 'Strukturelle forhold i arbeidsmarkedet som regulering, trygdeordninger og fagforeningsstyrke', isCorrect: true },
              { id: 'c', text: 'Oljeprisen og valutakursen', isCorrect: false },
              { id: 'd', text: 'Samlet etterspørsel i økonomien', isCorrect: false },
            ],
            solution: 'NAIRU bestemmes av strukturelle faktorer: matchingeffektivitet, arbeidsmarkedsregulering, fagforeningers forhandlingsstyrke, trygdeordningenes innretning og demografiske forhold. Pengepolitikken kan ikke varig endre NAIRU.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-2-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du fulgt **Phillips-kurvens** dramatiske historie. Den opprinnelige Phillips-kurven fra 1958 antydet en stabil avveining mellom inflasjon og arbeidsledighet. Men **Friedman** og **Phelps** viste at avveiningen bare gjelder på kort sikt – når forventningene justeres, forsvinner den. Den **forventningsutvidede Phillips-kurven** inkluderer forventet inflasjon og viser at den **langsiktige Phillips-kurven er vertikal** ved **NAIRU**. **Stagflasjonen** på 1970-tallet bekreftet denne innsikten dramatisk. **Disinflasjon** – å redusere inflasjonen – koster produksjon og sysselsetting, målt ved **offer ratio**. Forventningenes rolle er avgjørende: med troverdige sentralbanker og forankrede forventninger kan kostnadene ved stabilisering reduseres betraktelig.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5 NARRATIV: Handlingsregelen og oljefondet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_2_5_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-2-5-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '2.5',
  title: 'Handlingsregelen og oljefondet',
  subtitle: 'Narrativ versjon',
  description: 'Norges unike suksesshistorie – hvordan vi unngikk ressursenes forbannelse, bygget verdens største fond og laget en regel som sikrer at også barnebarna dine får nytte av oljen.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for Statens pensjonsfond utland og handlingsregelens innhold',
    'drøfte begrunnelsen for det norske finanspolitiske rammeverket',
    'vurdere utfordringer knyttet til forvaltningen av petroleumsformuen',
  ],
  linkedChapterId: 'samfokonomi-2-2-5',
  content: [
    {
      id: 'samfokonomi-2-2-5-n-intro',
      type: 'text',
      content: `## Skatten under havet

Juleaften 1969 ble det gjort et funn som skulle forandre Norge for alltid. Boreriggen «Ocean Viking» traff olje på Ekofisk-feltet i Nordsjøen. Det som fulgte, er en av verdenshistoriens mest utrolige økonomiske fortellinger: et lite land med fem millioner mennesker oppdaget en skatt under havbunnen verdt tusenvis av milliarder kroner.

Men store naturressursinntekter er ikke nødvendigvis en velsignelse. Mange land har opplevd det økonomer kaller **ressursenes forbannelse** – at rikdom fra naturressurser paradoksalt nok fører til dårligere økonomisk utvikling. Venezuela, med verdens største oljereserver, endte i hyperinflasjon og humanitær katastrofe da oljeinntektene ble brukt direkte uten effektiv fondsmekanisme. Nederland opplevde på 1960-tallet at store gassfunn styrket valutakursen og ødela konkurranseevnen til resten av industrien – et fenomen som fikk navnet **hollandsk syke**.

Norge gikk en annen vei. Gjennom sterke institusjoner, klok langsiktig tenkning og et finanspolitisk rammeverk som er blitt en modell for resten av verden, klarte landet å omgjøre olje under bakken til varig velstand over bakken. I sentrum av denne suksessen står to ting: **Statens pensjonsfond utland** – populært kalt oljefondet – og **handlingsregelen**.`,
    },
    {
      id: 'samfokonomi-2-2-5-n-section1',
      type: 'text',
      content: `## Verdens største sparegris

Statens pensjonsfond utland ble opprettet i 1990, men mottok sin første overføring først i 1996. Siden den gang har fondet vokst til å bli verdens største statlige investeringsfond – med en verdi som overstiger 17 000 milliarder kroner. Det tilsvarer over tre millioner kroner per innbygger, inkludert spedbarn.

**Fondsmekanismen** fungerer slik: alle statens netto kontantstrømmer fra petroleumsvirksomheten – skatter på oljeselskaper, inntekter fra Statens direkte økonomiske engasjement (SDØE) og utbytte fra Equinor – overføres til fondet. Avkastningen på fondets investeringer legges også til. Så gjøres det en overføring *tilbake* til statsbudsjettet for å dekke det oljekorrigerte budsjettunderskuddet. Denne mekanismen skaper et avgjørende skille mellom opptjening og bruk av oljeinntekter.

Fondet investeres utelukkende i utlandet – og dette er ikke tilfeldig. Dersom alle oljepengene ble investert i Norge, ville den enorme etterspørselen overopphete økonomien, presse opp lønninger og priser, styrke kronen og utkonkurrere norsk industri som ikke driver med olje. Det er nettopp den hollandske syken. Ved å investere i utenlandske aksjer (ca. 70 prosent), obligasjoner (ca. 27 prosent) og unotert eiendom (ca. 3 prosent) – spredt over tusenvis av selskaper i titalls land – holdes pengene unna den norske økonomien inntil de trengs. Fondet forvaltes av **Norges Bank Investment Management** (NBIM), med en grad av åpenhet som er unik i internasjonal sammenheng.`,
    },
    {
      id: 'samfokonomi-2-2-5-n-section2',
      type: 'text',
      content: `## Handlingsregelen – tre prosent som styrte et land

I 2001 innførte Norge **handlingsregelen**: det strukturelle oljekorrigerte budsjettunderskuddet skal over tid tilsvare den forventede realavkastningen av fondet. Opprinnelig ble denne anslått til 4 prosent, men i 2017 ble den nedjustert til **3 prosent** – i tråd med lavere forventet global avkastning. Ideen bygger på **permanentinntektshypotesen**: olje og gass er ikke-fornybare ressurser som tilhører alle generasjoner. Ved å bare bruke realavkastningen bevares fondets kjøpekraft for fremtiden.

La oss gjøre et regneeksempel. Er fondet verdt 16 000 milliarder kroner, tillater handlingsregelen en oljepengebruk på $0{,}03 \\times 16\\,000 = 480$ milliarder kroner per år. Det er en enorm sum – men langt mindre enn de totale oljeinntektene. Regelen er formulert som en *rettesnor*, ikke en absolutt regel. I dårlige tider kan bruken overstige tre prosent for å stimulere økonomien. I gode tider bør den ligge under for å bygge buffere.

Rammeverkets viktigste funksjoner er å beskytte mot **hollandsk syke** og overoppheting, å sikre **generasjonsrettferdighet**, å fungere som **buffer** mot volatile oljepriser, å gi **langsiktig bærekraft** etter at oljen tar slutt, og å gi **politisk disiplin** – avvik fra 3-prosentbanen krever begrunnelse og er gjenstand for offentlig debatt.

Men utfordringene er reelle. Fondets enorme størrelse betyr at tre prosent utgjør stadig større beløp. Svingninger i fondsverdien skaper budsjettusikkerhet – et fall på 20 prosent kan redusere handlingsrommet med over hundre milliarder kroner. **Klimarisikoen** er voksende: lykkes verden med det grønne skiftet, kan etterspørselen etter olje og gass falle dramatisk. **Den demografiske utfordringen** med en aldrende befolkning gir stadig stigende utgifter til pensjoner og helse. Og lavere forventet global avkastning kan bety at tre prosent er for optimistisk.

Sammenligner vi Norge med andre ressursrike land – Venezuela, Nederland, Saudi-Arabia – er forskjellen slående. Norges suksess hviler på sterke institusjoner, transparent forvaltning, en uavhengig sentralbank og bred politisk enighet om at rammeverket skal respekteres. Det er kanskje den viktigste lærdommen: det er ikke oljen i seg selv som gjør et land rikt – det er institusjonene som forvalter den.`,
    },
    {
      id: 'samfokonomi-2-2-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-2-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på handlingsregelen og oljefondet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-2-5-n-quiz1-q0',
            task: 'Hva innebærer handlingsregelen?',
            options: [
              { id: 'a', text: 'At Norge ikke skal bruke mer enn 10 prosent av oljeinntektene hvert år', isCorrect: false },
              { id: 'b', text: 'At det strukturelle oljekorrigerte underskuddet over tid skal tilsvare 3 prosent av fondets verdi', isCorrect: true },
              { id: 'c', text: 'At oljefondet bare kan investeres i norske aksjer', isCorrect: false },
              { id: 'd', text: 'At petroleumsinntektene skal fordeles likt mellom alle innbyggere', isCorrect: false },
            ],
            solution: 'Handlingsregelen sier at det strukturelle oljekorrigerte budsjettunderskuddet over tid skal tilsvare forventet realavkastning av SPU, anslått til 3 prosent. Slik brukes bare avkastningen, og fondets kjøpekraft bevares.',
          },
          {
            id: 'samfokonomi-2-2-5-n-quiz1-q1',
            task: 'Hvorfor investeres oljefondet utelukkende i utlandet?',
            options: [
              { id: 'a', text: 'Fordi norske aksjer gir lavere avkastning', isCorrect: false },
              { id: 'b', text: 'For å unngå at oljepengene overoppheter norsk økonomi og forårsaker hollandsk syke', isCorrect: true },
              { id: 'c', text: 'Fordi norsk lov forbyr investeringer i norske selskaper', isCorrect: false },
              { id: 'd', text: 'For å spre risikoen utenfor Norges grenser', isCorrect: false },
            ],
            solution: 'Fondet investeres i utlandet primært for å unngå overoppheting av norsk økonomi. Direkte innenlandsk investering ville økt etterspørselen enormt, presset opp lønninger og priser, styrket kronen og svekket norsk industri – hollandsk syke.',
          },
          {
            id: 'samfokonomi-2-2-5-n-quiz1-q2',
            task: 'Hva er hollandsk syke?',
            options: [
              { id: 'a', text: 'En sykdom som rammet Nederland på 1960-tallet', isCorrect: false },
              { id: 'b', text: 'At store naturressursinntekter styrker valutaen og svekker konkurranseevnen til øvrig industri', isCorrect: true },
              { id: 'c', text: 'At for mye sparing fører til deflasjon', isCorrect: false },
              { id: 'd', text: 'At offentlig sektor vokser på bekostning av privat sektor', isCorrect: false },
            ],
            solution: 'Hollandsk syke oppstår når store naturressursinntekter fører til sterkere valuta og økt etterspørsel som svekker konkurranseevnen til ikke-ressursbasert industri. Begrepet stammer fra Nederlandenes erfaring med gassfunn på 1960-tallet.',
          },
          {
            id: 'samfokonomi-2-2-5-n-quiz1-q3',
            task: 'Fondet er verdt 18 000 milliarder kroner. Hva er handlingsregelens ramme for oljepengebruk?',
            options: [
              { id: 'a', text: '360 milliarder kroner', isCorrect: false },
              { id: 'b', text: '540 milliarder kroner', isCorrect: true },
              { id: 'c', text: '720 milliarder kroner', isCorrect: false },
              { id: 'd', text: '1 800 milliarder kroner', isCorrect: false },
            ],
            solution: 'Handlingsregelen tillater bruk av 3 prosent av fondets verdi: 0,03 × 18 000 = 540 milliarder kroner. Dette er den forventede realavkastningen som kan brukes uten å tære på fondets kjøpekraft.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-2-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om Norges unike finanspolitiske rammeverk. **Statens pensjonsfond utland** (oljefondet) omgjør olje og gass under bakken til en diversifisert finansiell formue investert i utlandet. **Handlingsregelen** begrenser den årlige oljepengebruken til 3 prosent av fondets verdi – den forventede realavkastningen – slik at formuen bevares for fremtidige generasjoner. Rammeverket beskytter mot **hollandsk syke** og overoppheting, sikrer **generasjonsrettferdighet** og gir stabilitet i en verden med volatile oljepriser. Utfordringer inkluderer fondets enorme størrelse, klimarisiko, demografiske endringer og lavere forventet avkastning. Sammenlignet med andre ressursrike land viser Norges erfaring at sterke institusjoner, transparens og politisk forpliktelse er avgjørende for å unngå ressursenes forbannelse.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const SAMFOKONOMI_2_NARRATIV_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_2_1_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_2_2_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_2_3_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_2_4_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_2_5_NARRATIV,
];
