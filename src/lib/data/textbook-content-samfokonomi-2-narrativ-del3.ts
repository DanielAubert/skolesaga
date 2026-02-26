/* eslint-disable */
// @ts-nocheck
/**
 * Samfunnsøkonomi 2 (VG3) - NARRATIV VERSJON DEL 3
 * Kapittel 3.1-3.5: Internasjonal handel og valuta
 *
 * Narrativ versjon optimalisert for lesing/lytting på mobil.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1 NARRATIV: Komparativ fordel
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_3_1_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-3-1-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '3.1',
  title: 'Komparativ fordel',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvordan en britisk økonom for over 200 år siden beviste at selv den som er dårligst til alt, likevel har noe verdifullt å tilby – og hvorfor det forandret verdenshandelen for alltid.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for teorier om internasjonal handel og drøfte virkninger av handelspolitikk',
  ],
  linkedChapterId: 'samfokonomi-2-3-1',
  content: [
    {
      id: 'samfokonomi-2-3-1-n-intro',
      type: 'text',
      content: `## Hvorfor handler land med hverandre?

Tenk deg en kirurg som tilfeldigvis også er en fantastisk maskinskriver – raskere enn enhver sekretær på sykehuset. Bør kirurgen skrive alle sine egne journaler selv? Selvsagt ikke. Hver time kirurgen bruker på å skrive, er en time hun ikke opererer. Og en operasjonstime er verdt langt mer enn en skrivetime. Det lønner seg å ansette en sekretær, selv om kirurgen skriver raskere enn vedkommende.

Dette hverdagslige eksempelet rommer kjernen i en av de viktigste ideene i hele økonomifaget. I 1817 publiserte den britiske økonomen **David Ricardo** et verk som skulle forandre vår forståelse av internasjonal handel for alltid. Han viste at det ikke er nok å spørre hvem som er best til å produsere noe. Det avgjørende spørsmålet er: hva koster det å produsere denne varen – målt i hva man må gi opp av andre varer?

Ricardo kalte dette prinsippet **komparativ fordel**, og det er kanskje det nærmeste vi kommer en universell sannhet i samfunnsøkonomien. Prinsippet forklarer hvorfor land handler med hverandre, hvorfor spesialisering øker den totale velstanden i verden, og hvorfor til og med det «svakeste» landet har noe verdifullt å bidra med i verdenshandelen.`,
    },
    {
      id: 'samfokonomi-2-3-1-n-section1',
      type: 'text',
      content: `## Fra absolutt til komparativ fordel

La oss starte med det enkleste begrepet. Et land har **absolutt fordel** i produksjon av en vare hvis det kan produsere varen med færre ressurser enn andre land. Norge har absolutt fordel i oljeproduksjon sammenlignet med Danmark, fordi vi sitter på enorme oljereserver i Nordsjøen. Brasil har absolutt fordel i kaffeproduksjon takket være ideelt klima og jordsmonn. Så langt er alt intuitivt.

Men hva om ett land er bedre enn et annet til å produsere *absolutt alt*? Bør det landet gjøre alt selv og ikke handle med noen? Ricardo svarte et overraskende nei, og svaret hans var revolusjonerende. Det som betyr noe er ikke absolutt fordel, men **komparativ fordel** – altså hvem som har lavest **alternativkostnad**.

La oss bruke Ricardos eget eksempel. Portugal kunne på hans tid produsere både vin og klede billigere enn England. Portugal trengte 80 arbeidstimer for én enhet vin og 90 timer for én enhet klede. England trengte 120 timer for vin og 100 timer for klede. Portugal var altså best i begge varer – det hadde absolutt fordel i alt.

Men se på alternativkostnadene. For Portugal kostet én enhet vin $80/90 \\approx 0{,}89$ enheter klede – det vil si at Portugal måtte gi opp litt under én enhet klede for å produsere én ekstra enhet vin. For England kostet én enhet vin $120/100 = 1{,}20$ enheter klede. Portugal hadde altså lavest alternativkostnad for vin. Men snur vi det og ser på klede, finner vi at Englands alternativkostnad for én enhet klede var $100/120 \\approx 0{,}83$ enheter vin, mens Portugals var $90/80 = 1{,}13$ enheter vin. England hadde lavest alternativkostnad for klede!

Konklusjonen er slående: selv om Portugal var best i alt, burde Portugal spesialisere seg i vin og England i klede. Ved å gjøre det og deretter handle med hverandre, kunne begge land ende opp med mer av begge varer enn om de prøvde å produsere alt selv. Dette er Ricardos geniale innsikt, og den gjelder ikke bare mellom land – den gjelder overalt der aktører har ulike alternativkostnader.`,
    },
    {
      id: 'samfokonomi-2-3-1-n-section2',
      type: 'text',
      content: `## Spesialisering, bytteforhold og gevinstene fra handel

Når hvert land konsentrerer seg om det de er relativt best på, skjer noe nærmest magisk: den samlede produksjonen i verden øker. Ressursene brukes mer effektivt fordi hvert land flytter sine ressurser fra produksjon med høy alternativkostnad til produksjon med lav alternativkostnad. Det er som om du plutselig fikk mer ut av de samme arbeidstimene, rett og slett ved å organisere arbeidet smartere.

Men for at handelen faktisk skal fungere, må landene bli enige om en pris – det vi kaller **bytteforholdet**. Og her er det en elegant regel: bytteforholdet må ligge mellom de to landenes alternativkostnader for at begge parter skal tjene på handelen. I Ricardos eksempel hadde Portugal alternativkostnad 0,89 klede per vin og England 1,20 klede per vin. Hvis de avtaler en pris på 1 enhet vin for 1 enhet klede, tjener begge: Portugal gir opp noe det «koster» 0,89 klede å lage og får 1 klede tilbake. England betaler 1 klede for noe det ville kostet 1,20 klede å lage selv.

I den virkelige verden måler vi bytteforholdet – eller **terms of trade** – som forholdet mellom prisindeksen for et lands eksportvarer og prisindeksen for importvarene: $\\text{Bytteforhold} = \\frac{\\text{Prisindeks for eksportvarer}}{\\text{Prisindeks for importvarer}} \\times 100$. Når bytteforholdet er over 100, har eksportprisene steget mer enn importprisene – en gunstig utvikling. Når det er under 100, har importprisene steget mest – en ugunstig utvikling. For Norge er bytteforholdet sterkt påvirket av oljeprisen: når oljeprisen stiger, forbedres vårt bytteforhold fordi vi får mer importvarer for samme mengde eksportert olje.

Ricardos modell bygger riktignok på forenklede forutsetninger – to land, to varer, arbeidskraft som eneste innsatsfaktor, ingen transportkostnader og ingen handelshindringer. I virkeligheten er verden uendelig mye mer kompleks. Likevel holder grunnprinsippet: omstillingskostnader, transportutgifter og politiske barrierer kan dempe gevinstene, men de opphever ikke den underliggende logikken. Empirisk forskning viser gang på gang at land som er åpne for handel, vokser raskere enn land som lukker seg inne. Komparativ fordel er ikke bare elegant teori – det er dokumentert virkelighet.`,
    },
    {
      id: 'samfokonomi-2-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på komparativ fordel og internasjonal handel:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-3-1-n-quiz1-q0',
            task: 'Hva er forskjellen mellom absolutt fordel og komparativ fordel?',
            options: [
              { id: 'a', text: 'Absolutt fordel handler om lavest produksjonskostnad, komparativ fordel handler om lavest alternativkostnad', isCorrect: true },
              { id: 'b', text: 'De betyr det samme, bare med ulike navn', isCorrect: false },
              { id: 'c', text: 'Absolutt fordel gjelder innenlands, komparativ fordel gjelder mellom land', isCorrect: false },
              { id: 'd', text: 'Komparativ fordel handler om hvem som eksporterer mest', isCorrect: false },
            ],
            solution: 'Absolutt fordel betyr at et land kan produsere en vare med færre ressurser enn et annet land. Komparativ fordel handler om alternativkostnad – hva du må gi opp av andre varer. Et land kan ha komparativ fordel selv uten absolutt fordel i noen varer.',
          },
          {
            id: 'samfokonomi-2-3-1-n-quiz1-q1',
            task: 'Land A kan produsere 10 biler eller 20 tonn korn per dag. Land B kan produsere 4 biler eller 12 tonn korn per dag. Hvem har komparativ fordel i bilproduksjon?',
            options: [
              { id: 'a', text: 'Land B, fordi de er et mindre land', isCorrect: false },
              { id: 'b', text: 'Land A, fordi alternativkostnaden for en bil er 2 tonn korn mot Land Bs 3 tonn korn', isCorrect: true },
              { id: 'c', text: 'Begge har lik komparativ fordel', isCorrect: false },
              { id: 'd', text: 'Land B, fordi de har lavere produksjonsvolum', isCorrect: false },
            ],
            solution: 'Land A: 1 bil koster 20/10 = 2 tonn korn. Land B: 1 bil koster 12/4 = 3 tonn korn. Land A har lavest alternativkostnad for biler (2 < 3) og dermed komparativ fordel i bilproduksjon.',
          },
          {
            id: 'samfokonomi-2-3-1-n-quiz1-q2',
            task: 'Hva betyr det at Norges bytteforhold forbedres?',
            options: [
              { id: 'a', text: 'At Norge importerer mer enn det eksporterer', isCorrect: false },
              { id: 'b', text: 'At prisene på Norges eksportvarer har steget relativt til importvarene', isCorrect: true },
              { id: 'c', text: 'At den norske kronen har svekket seg', isCorrect: false },
              { id: 'd', text: 'At Norge har fått flere handelsavtaler', isCorrect: false },
            ],
            solution: 'Forbedret bytteforhold betyr at eksportprisene har steget mer enn importprisene. Norge får altså mer importvarer for samme mengde eksport. For Norge betyr en høyere oljepris typisk bedre bytteforhold.',
          },
          {
            id: 'samfokonomi-2-3-1-n-quiz1-q3',
            task: 'Hvorfor kan handel være lønnsomt selv om ett land er best til å produsere absolutt alt?',
            options: [
              { id: 'a', text: 'Fordi det alltid er billigere å importere', isCorrect: false },
              { id: 'b', text: 'Fordi landene kan ha ulike alternativkostnader, slik at spesialisering gir gevinst for begge', isCorrect: true },
              { id: 'c', text: 'Fordi WTO krever at alle land handler med hverandre', isCorrect: false },
              { id: 'd', text: 'Fordi transport alltid er gratis', isCorrect: false },
            ],
            solution: 'Selv om et land har absolutt fordel i alt, vil det ha ulik alternativkostnad for ulike varer. Ved å spesialisere seg der alternativkostnaden er lavest og handle, kan begge land få mer av begge varer. Det er Ricardos geniale innsikt.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om grunnlaget for internasjonal handel. **Absolutt fordel** betyr å produsere en vare med færre ressurser enn andre, men det er **komparativ fordel** – lavest alternativkostnad – som avgjør hvem som bør produsere hva. David Ricardo viste at selv et land som er dårligst i alt, har komparativ fordel i noe. Når land spesialiserer seg og handler, øker den samlede produksjonen, og begge parter tjener – forutsatt at **bytteforholdet** ligger mellom landenes alternativkostnader. Norges bytteforhold er sterkt knyttet til oljeprisen. Modellen har begrensninger, men prinsippet om komparativ fordel er et av de best dokumenterte i hele økonomifaget.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2 NARRATIV: Handelspolitikk
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_3_2_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-3-2-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '3.2',
  title: 'Handelspolitikk',
  subtitle: 'Narrativ versjon',
  description: 'Fortellingen om den evige dragkampen mellom frihandel og proteksjonisme – fra norske tollmurer på ost til globale handelskriger, og hvorfor det som er bra for alle samlet ofte taper mot det som er bra for noen få.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for teorier om internasjonal handel og drøfte virkninger av handelspolitikk',
  ],
  linkedChapterId: 'samfokonomi-2-3-2',
  content: [
    {
      id: 'samfokonomi-2-3-2-n-intro',
      type: 'text',
      content: `## Frihandel mot beskyttelse – en evig kamp

Hvis komparativ fordel viser at frihandel er bra for alle, hvorfor er ikke verden fullstendig åpen? Hvorfor har Norge tollsatser på over 200 prosent på enkelte ostesorter? Hvorfor innførte USA straffetoll på kinesiske varer? Og hvorfor har WTO-forhandlinger stått stille i over to tiår?

Svaret ligger i et paradoks som gjennomsyrer all **handelspolitikk**: frihandel er bra for samfunnet som helhet, men den skaper både vinnere og tapere. Og taperne – fabrikken som legges ned, bøndene som ikke kan konkurrere, arbeiderne som mister jobben – har ofte sterkere politisk stemme enn de mange forbrukerne som nyter godt av lavere priser uten å tenke over det.

Handelspolitikk handler om hvordan stater regulerer handelen med omverdenen. I den ene enden av skalaen finner vi fullstendig **frihandel**, der varer og tjenester krysser grenser uten restriksjoner. I den andre enden finner vi streng **proteksjonisme**, der staten bygger murer av toll, kvoter og reguleringer for å beskytte sine egne næringer. I praksis befinner alle land seg et sted imellom – og den nøyaktige posisjonen er gjenstand for intens politisk debatt.

Argumentene for frihandel er sterke: økt effektivitet gjennom spesialisering etter komparativ fordel, lavere priser og større utvalg for forbrukerne, stordriftsfordeler for bedrifter som selger til et større marked, og økt konkurranse som driver innovasjon. Men proteksjonistene har også sine grunner – noen av dem mer overbevisende enn du kanskje tror.`,
    },
    {
      id: 'samfokonomi-2-3-2-n-section1',
      type: 'text',
      content: `## Toll, kvoter og andre barrierer

Det mest tradisjonelle verktøyet i proteksjonismens verktøykasse er **toll** – en avgift som legges på importerte varer. Effekten er enkel og forutsigbar: prisen på importvaren stiger, innenlandsk produksjon blir mer konkurransedyktig, importen synker, og staten får inntekter. Men – og dette er det avgjørende – det oppstår et netto velferdstap for samfunnet fordi forbrukertapet er større enn produsentgevinsten og tollinntekten til sammen: $\\text{Forbrukertap} > \\text{Produsentgevinst} + \\text{Tollinntekt}$.

Ta norsk ost som eksempel. Med toll på over 200 prosent betaler norske forbrukere kanskje dobbelt så mye for ost som de ville gjort med fri import. Før tollen kostet importosten 50 kroner per kilo. Med 30 kroner i toll per kilo stiger prisen til 80 kroner. Norske bønder kan nå selge osten sin til en mye høyere pris enn verdensmarkedet tilsier, og staten får tollinntekter. Men hvem vinner egentlig? Norske osteprodusenter og staten tjener, ja – men norske forbrukere taper mer enn de to andre vinner. Totalt sett ender samfunnet med et nettotap.

En annen vanlig barriere er **importkvoter** – en øvre grense for hvor mye av en vare som kan importeres i en gitt periode. Kvoter har lignende effekt som toll: de begrenser tilbudet, driver opp prisen og gjør innenlandsk produksjon mer lønnsom. Men med en viktig forskjell: staten får *ikke* inntekter. Gevinsten fra den høyere prisen går til de heldige importørene som har fått tildelt en importlisens. Kvoter kan derfor være enda mindre gunstige for samfunnet enn toll.

Utover toll og kvoter finnes det en hel flora av mer subtile handelshindringer. **Subsidier** til innenlandsk produksjon gjør lokale varer kunstig billige uten å direkte ramme importprisen. **Tekniske handelshindringer** – krav til standarder, merking og godkjenning – kan virke nøytrale på overflaten, men i praksis gjør de det svært vanskelig for utenlandske produsenter å komme inn på markedet. **Sanitære og fytosanitære tiltak** stiller krav til mattrygghet og dyrehelse som kan fungere som skjulte importbarrierer. Og så finnes det **dumpingtoll**, som innføres mot varer som selges under produksjonskostnad, og til og med **valutamanipulasjon**, der land holder sin egen valuta kunstig lav for å gjøre eksporten billigere.`,
    },
    {
      id: 'samfokonomi-2-3-2-n-section2',
      type: 'text',
      content: `## WTO og kampen om den globale handelsordenen

Etter andre verdenskrigs ødeleggelser forstod verdens ledere at proteksjonisme og handelskriger hadde bidratt til katastrofen. Mellomkrigstidens tollmurer – anført av den beryktede Smoot-Hawley-tollen i USA i 1930 – hadde kvalt verdenshandelen og forverret depresjonen. I 1947 ble **GATT** (General Agreement on Tariffs and Trade) opprettet for å hindre en gjentakelse, og i 1995 ble det erstattet av **WTO** – Verdens handelsorganisasjon – med sine nå 164 medlemsland.

WTO hviler på noen elegante grunnprinsipper. Det viktigste er **bestevilkårsprinsippet** (Most Favoured Nation): hvis du gir en handelsfordel til ett land, må du gi den samme fordelen til alle WTO-medlemmer. Norge kan altså ikke senke tollen på elektronikk fra Japan uten å senke den for alle. Prinsippet om **nasjonal behandling** sier at importerte varer ikke skal diskrimineres i forhold til innenlandske varer etter at de har passert grensen. Og målet om **gradvis liberalisering** betyr at tollsatser og andre hindringer skal reduseres over tid gjennom forhandlingsrunder. WTO har også et tvisteløsningssystem som fungerer som en internasjonal handelsdomstol.

Men WTO har slitt. **Doha-runden**, som startet i 2001, er fortsatt ikke avsluttet. Konflikten står mellom rike land som vil at fattige land skal åpne sine markeder for industrivarer, og fattige land som krever at rike land kutter sine enorme landbrukssubsidier. Samtidig har handelskrigen mellom USA og Kina i 2018–2019 vist at selv verdens to største økonomier kan ty til gjensidig straffetoll, i strid med WTOs ånd.

Så er frihandel alltid det riktige svaret? Økonomisk sett – nesten alltid, for samfunnet samlet. Men det finnes legitime unntak. **Oppfostringsargumentet** sier at unge næringer kan trenge midlertidig beskyttelse for å vokse seg sterke nok til å konkurrere – Sør-Koreas bilindustri er et klassisk suksesseksempel fra 1960- og 70-tallet, som i dag har gitt oss Hyundai og Kia. **Nasjonal sikkerhet** kan kreve at et land opprettholder egen matproduksjon eller forsvarsindustri. Og i krisetider, som under koronapandemien, viste det seg farlig å være helt avhengig av import for kritiske varer som medisinsk utstyr. Norsk landbrukspolitikk begrunnes med matvaresikkerhet, distriktspolitikk og kulturlandskap – verdier som ikke kan måles i kroner alene. Handelspolitikk er derfor alltid en avveining mellom økonomisk effektivitet og andre samfunnsmål – og de fleste økonomer mener at løsningen på frihandelens ulemper er bedre omstillingspolitikk, ikke mer proteksjonisme.`,
    },
    {
      id: 'samfokonomi-2-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på handelspolitikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-3-2-n-quiz1-q0',
            task: 'Hva er den viktigste virkningen av importtoll for forbrukerne?',
            options: [
              { id: 'a', text: 'Prisene på importerte varer stiger, og forbrukerne får færre valgmuligheter', isCorrect: true },
              { id: 'b', text: 'Prisene synker fordi staten subsidierer importen', isCorrect: false },
              { id: 'c', text: 'Kvaliteten på varene forbedres automatisk', isCorrect: false },
              { id: 'd', text: 'Forbrukerne får tilgang til flere utenlandske varer', isCorrect: false },
            ],
            solution: 'Toll gjør importerte varer dyrere for forbrukerne. Noen bytter til dyrere innenlandske alternativer, andre reduserer forbruket. Resultatet er høyere priser og færre valgmuligheter.',
          },
          {
            id: 'samfokonomi-2-3-2-n-quiz1-q1',
            task: 'Hva er en viktig forskjell mellom toll og importkvoter?',
            options: [
              { id: 'a', text: 'Toll øker prisen, men kvoter gjør det ikke', isCorrect: false },
              { id: 'b', text: 'Toll gir staten inntekter, mens kvoter gir gevinsten til importørene med lisens', isCorrect: true },
              { id: 'c', text: 'Kvoter gir staten større inntekter enn toll', isCorrect: false },
              { id: 'd', text: 'Det er ingen vesentlig forskjell mellom dem', isCorrect: false },
            ],
            solution: 'Både toll og kvoter øker prisen og reduserer importen. Med toll går prisforskjellen til staten som tollinntekt. Med kvoter går gevinsten til de som har fått importlisens – staten går glipp av inntektene.',
          },
          {
            id: 'samfokonomi-2-3-2-n-quiz1-q2',
            task: 'Hva er bestevilkårsprinsippet (MFN) i WTO?',
            options: [
              { id: 'a', text: 'At hvert land skal behandle sin viktigste handelspartner bedre enn andre', isCorrect: false },
              { id: 'b', text: 'At handelsfordeler gitt til ett WTO-land må gis til alle WTO-medlemmer', isCorrect: true },
              { id: 'c', text: 'At alle land skal ha null toll på alle varer', isCorrect: false },
              { id: 'd', text: 'At rike land alltid skal gi fattige land bedre vilkår', isCorrect: false },
            ],
            solution: 'Bestevilkårsprinsippet (Most Favoured Nation) betyr at handelsfordeler gitt til ett land automatisk må gis til alle WTO-medlemmer. Unntak finnes for regionale handelsavtaler som EU/EØS og for utviklingsland.',
          },
          {
            id: 'samfokonomi-2-3-2-n-quiz1-q3',
            task: 'Hvorfor gir toll et netto samfunnsøkonomisk tap, selv om noen tjener på det?',
            options: [
              { id: 'a', text: 'Fordi staten alltid bruker tollinntektene feil', isCorrect: false },
              { id: 'b', text: 'Fordi toll aldri øker innenlandsk produksjon', isCorrect: false },
              { id: 'c', text: 'Fordi forbrukertapet er større enn summen av produsentgevinst og tollinntekt', isCorrect: true },
              { id: 'd', text: 'Fordi toll reduserer statens totale inntekter', isCorrect: false },
            ],
            solution: 'Toll skaper to typer effektivitetstap: ressurser brukes på innenlandsk produksjon som er dyrere enn import, og forbrukere reduserer konsumet under optimalt nivå. Disse tapene overstiger gevinstene til produsenter og stat.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om kampen mellom frihandel og proteksjonisme. **Frihandel** gir lavere priser, større utvalg og mer effektiv ressursbruk, men skaper vinnere og tapere. **Toll** gjør importvarer dyrere og gir et netto samfunnsøkonomisk tap – forbrukertapet overstiger produsentgevinst pluss tollinntekt. **Kvoter** begrenser importmengden direkte, men gir gevinsten til lisensholdere i stedet for staten. Andre barrierer inkluderer subsidier, tekniske handelshindringer og dumpingtoll. **WTO** arbeider for global frihandel gjennom bestevilkårsprinsippet, nasjonal behandling og gradvis liberalisering, men sliter med å fullføre Doha-runden. Handelspolitikk innebærer alltid en avveining mellom økonomisk effektivitet og andre hensyn som matvaresikkerhet, sysselsetting og nasjonal sikkerhet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3 NARRATIV: Handelsavtaler og EU/EØS
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_3_3_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-3-3-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '3.3',
  title: 'Handelsavtaler og EU/EØS',
  subtitle: 'Narrativ versjon',
  description: 'Historien om Norges unike posisjon i Europa – utenfor EU, men tettere knyttet til det europeiske markedet enn de fleste, og hva denne merkelige mellomposisjonen betyr for norsk økonomi og demokrati.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for teorier om internasjonal handel og drøfte virkninger av handelspolitikk',
    'analysere Norges rolle i internasjonal økonomi',
  ],
  linkedChapterId: 'samfokonomi-2-3-3',
  content: [
    {
      id: 'samfokonomi-2-3-3-n-intro',
      type: 'text',
      content: `## Norges plass i det europeiske puslespillet

Den 28. november 1994 stemte nordmenn nei til EU-medlemskap for andre gang. Men bare seks uker senere, 1. januar 1995, trådte en annen avtale i kraft – en avtale som i praksis knyttet Norge tettere til det europeiske markedet enn de fleste land utenfor EU: **EØS-avtalen**.

Denne merkelige posisjonen – utenfor EU, men innenfor det meste av det europeiske regelverket – er blitt Norges varemerke i internasjonal politikk. Omtrent 60 til 70 prosent av all norsk handel er med EU-land. Norske lover og forskrifter på alt fra produktsikkerhet til arbeidsmiljø er i stor grad overtatt fra EU. Og likevel har Norge ingen stemmerett i de organene som lager reglene.

For å forstå hvorfor Norge har havnet i denne posisjonen, og hva den betyr for norsk økonomi og demokrati, må vi først se på de ulike gradene av økonomisk integrasjon mellom land. Mens WTO arbeider for global frihandel, har nemlig mange land valgt å gå raskere frem gjennom regionale og bilaterale handelsavtaler – og den viktigste av disse for Norge er nettopp EØS.`,
    },
    {
      id: 'samfokonomi-2-3-3-n-section1',
      type: 'text',
      content: `## Fra frihandelsavtale til monetær union – integrasjonens trappestige

Tenk deg økonomisk integrasjon som en trappestige med fem trinn, der hvert trinn innebærer tettere samarbeid – men også mer overført suverenitet.

Det første trinnet er en **frihandelsavtale**. Partene fjerner toll og kvoter seg imellom, men beholder hver sin handelspolitikk overfor resten av verden. **EFTA** – organisasjonen Norge er medlem av sammen med Sveits, Island og Liechtenstein – er et eksempel. Norge kan ha andre tollsatser mot Kina enn det Sveits har, fordi hvert EFTA-land beholder sin egen utenrikshandel.

Det andre trinnet er en **tollunion**. Her har medlemmene ikke bare fri handel seg imellom, men også felles ytre toll mot tredjeland. EUs tollunion er det fremste eksempelet – alle EU-land har identisk toll mot land utenfor EU. Det tredje trinnet er **det indre marked**, der også tjenester, kapital og arbeidskraft flyter fritt. Det er her EUs berømte **fire friheter** kommer inn: fri bevegelse av varer, tjenester, kapital og personer. Det fjerde trinnet er en **økonomisk union** med harmonisert økonomisk politikk. Og det femte og øverste trinnet er en **monetær union** med felles valuta, slik eurosonen fungerer.

**EØS-avtalen** plasserer Norge på det tredje trinnet. Den gir oss tilgang til EUs indre marked med de fire frihetene. En norsk bedrift kan selge produktene sine i hele EU uten toll og uten å oppfylle 27 ulike sett med produktkrav. En norsk ingeniør kan flytte til Berlin og jobbe der uten arbeidstillatelse. En norsk investor kan fritt kjøpe aksjer i et spansk selskap. Men avtalen dekker viktige unntak: **landbruk og fiskeri** er i hovedsak utenfor, noe som betyr at Norge beholder sin høye landbrukstoll og kontrollen over egne fiskeressurser. Utenriks- og sikkerhetspolitikk, skattepolitikk og store deler av justispolitikken er også utenfor EØS.

Gjennom EFTA forhandler Norge dessuten handelsavtaler med land utenfor EU. EFTA har over 30 frihandelsavtaler med mer enn 40 land, blant annet Canada, Sør-Korea, Singapore og Tyrkia. Etter Brexit inngikk Norge også en egen handelsavtale med Storbritannia. Samlet gir dette norsk næringsliv tilgang til de fleste store markedene i verden.`,
    },
    {
      id: 'samfokonomi-2-3-3-n-section2',
      type: 'text',
      content: `## Handelsskaping, handelsvridning og det demokratiske spørsmålet

Handelsavtaler er ikke uten komplikasjoner. Økonomer peker på to motstridende effekter som kan oppstå. **Handelsskaping** skjer når en avtale gjør det billigere å importere fra et partnerland, og dette erstatter dyrere innenlandsk produksjon. Når Norge gjennom EØS importerer svenske maskiner tollfritt og dette erstatter dyrere norskproduserte maskiner, brukes ressursene mer effektivt – det er en gevinst for alle. Men **handelsvridning** oppstår når handelen flyttes fra et billig tredjeland som må betale toll, til et dyrere partnerland som handler tollfritt. Tenk deg at New Zealand produserer billigere ost enn Frankrike, men fordi Frankrike er innenfor EØS og New Zealand ikke er det, importerer Norge den dyrere franske osten. Norske forbrukere betaler mer enn nødvendig.

For at en regional handelsavtale skal være netto fordelaktig, må handelskapingen være større enn handelsvridningen. For Norge er EØS-avtalen trolig klart positiv: EU-landene er effektive produsenter av de fleste industrivarer, og tilgangen til et marked med over 450 millioner forbrukere gir enorme stordriftsfordeler for norsk eksportindustri. Hydro, Norges største aluminiumprodusent, eksporterer mesteparten av produksjonen sin til EU. Uten EØS-avtalen ville Hydro møtt tollbarrierer som ville gjort norsk aluminium dyrere enn konkurrentenes. Med EØS handles aluminium tollfritt, produktstandarder er felles, og arbeidskraft kan rekrutteres fra hele Europa.

Men det er én stor bekymring som aldri forsvinner: det **demokratiske underskuddet**. Norge overtar i praksis tusenvis av EU-direktiver og forordninger uten stemmerett i EU-parlamentet eller Ministerrådet. Vi kan gi innspill og delta i ekspertgrupper, men vi har ingen formell beslutningsmakt. Noen har spissformulert det slik: Norge har byttet demokratisk innflytelse mot markedstilgang. Tilhengere av EØS peker på de enorme økonomiske fordelene og at alternativet – å stå helt utenfor – ville vært langt verre. Kritikere peker på at det undergraver demokratiet når borgerne ikke kan påvirke reglene de lever under gjennom valg. Brexit i 2020 viste samtidig hva det koster å forlate det europeiske samarbeidet: Storbritannia fikk tollprosedyrer, grensekontroll, mangel på arbeidskraft og reduserte investeringer. Spørsmålet om Norges posisjon er optimal, avhenger av hvilke verdier man vektlegger mest – og det er et spørsmål økonomer ikke kan svare på alene.`,
    },
    {
      id: 'samfokonomi-2-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på handelsavtaler og EU/EØS:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-3-3-n-quiz1-q0',
            task: 'Hvilke fire friheter er kjernen i EØS-avtalen?',
            options: [
              { id: 'a', text: 'Fri bevegelse av varer, tjenester, kapital og personer', isCorrect: true },
              { id: 'b', text: 'Fri bevegelse av varer, penger, informasjon og teknologi', isCorrect: false },
              { id: 'c', text: 'Fri handel, felles valuta, felles forsvar og felles skattepolitikk', isCorrect: false },
              { id: 'd', text: 'Fri eksport, fri import, felles toll og felles regelverk', isCorrect: false },
            ],
            solution: 'EØS-avtalens fire friheter er fri bevegelse av varer, tjenester, kapital og personer. Landbruk og fisk er i hovedsak unntatt fra avtalen.',
          },
          {
            id: 'samfokonomi-2-3-3-n-quiz1-q1',
            task: 'Hva er forskjellen mellom EFTA og EUs tollunion?',
            options: [
              { id: 'a', text: 'EFTA har felles valuta, EUs tollunion har det ikke', isCorrect: false },
              { id: 'b', text: 'EFTA er en frihandelsavtale der medlemmene beholder egen handelspolitikk, EUs tollunion har felles ytre toll', isCorrect: true },
              { id: 'c', text: 'Det er ingen vesentlig forskjell mellom dem', isCorrect: false },
              { id: 'd', text: 'EFTA inkluderer alle EU-land', isCorrect: false },
            ],
            solution: 'I EFTA har hvert land sin egen handelspolitikk overfor tredjeland. I EUs tollunion har alle medlemmer identisk ytre toll. EFTA gir mer fleksibilitet, men lavere grad av integrasjon.',
          },
          {
            id: 'samfokonomi-2-3-3-n-quiz1-q2',
            task: 'Hva er handelsvridning (trade diversion)?',
            options: [
              { id: 'a', text: 'At handel flyttes fra en billig produsent utenfor avtalen til en dyrere produsent innenfor avtalen', isCorrect: true },
              { id: 'b', text: 'At et land slutter å handle med alle andre', isCorrect: false },
              { id: 'c', text: 'At toll fjernes mellom to land', isCorrect: false },
              { id: 'd', text: 'At valutakursen endrer seg plutselig', isCorrect: false },
            ],
            solution: 'Handelsvridning oppstår når en handelsavtale fører til at import flyttes fra et billigere tredjeland (som betaler toll) til et dyrere partnerland (som er tollfritt). Det er et tap fordi varene ikke produseres av den mest effektive produsenten.',
          },
          {
            id: 'samfokonomi-2-3-3-n-quiz1-q3',
            task: 'Hva menes med det demokratiske underskuddet i EØS-avtalen?',
            options: [
              { id: 'a', text: 'At Norge betaler for lite til EU', isCorrect: false },
              { id: 'b', text: 'At nordmenn ikke stemmer ved EU-valg', isCorrect: false },
              { id: 'c', text: 'At Norge må overta EU-regelverk uten stemmerett i EUs beslutningsorganer', isCorrect: true },
              { id: 'd', text: 'At EU har for få medlemsland', isCorrect: false },
            ],
            solution: 'Det demokratiske underskuddet betyr at Norge i praksis må innføre tusenvis av EU-regler uten å ha stemmerett i EU-parlamentet eller Ministerrådet. Norge kan påvirke gjennom konsultasjoner, men har ingen formell beslutningsmakt.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-3-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om Norges handelspolitiske tilknytning til Europa og verden. Økonomisk integrasjon har fem grader – fra frihandelsavtale via tollunion og indre marked til økonomisk og monetær union. **EØS-avtalen** gir Norge tilgang til EUs indre marked gjennom de fire frihetene (varer, tjenester, kapital, personer), men uten stemmerett i EUs organer og med unntak for landbruk og fiskeri. **EFTA** forhandler handelsavtaler med tredjeland og gir Norge global handelstilgang. Handelsavtaler kan gi både **handelsskaping** (gevinst fra mer effektiv spesialisering) og **handelsvridning** (tap fra at handel flyttes bort fra billigste produsent). Norges posisjon utenfor EU men innenfor EØS er et kompromiss som gir stor markedstilgang, men reiser viktige spørsmål om demokratisk legitimitet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4 NARRATIV: Valutakurser og valutamarkeder
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_3_4_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-3-4-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '3.4',
  title: 'Valutakurser og valutamarkeder',
  subtitle: 'Narrativ versjon',
  description: 'En reise inn i verdens største finansmarked – der over 7 billioner dollar skifter hender hver eneste dag, og der oljeprisen, renten og global frykt bestemmer hva den norske kronen er verdt.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analysere hvordan valutakurser påvirker økonomien og drøfte ulike valutakurssystemer',
  ],
  linkedChapterId: 'samfokonomi-2-3-4',
  content: [
    {
      id: 'samfokonomi-2-3-4-n-intro',
      type: 'text',
      content: `## Den usynlige prisen bak alt vi handler

Hver gang du bestiller noe fra en utenlandsk nettbutikk, hver gang en norsk bedrift importerer maskiner fra Tyskland, og hver gang en japansk turist kjøper en pølse i Oslo, skjer det en valutaveksling et sted i bakgrunnen. Disse usynlige transaksjonene utgjør til sammen verdens desidert største finansmarked: **valutamarkedet**, med en daglig omsetning på over 7 billioner amerikanske dollar – mer enn alle verdens børser til sammen.

**Valutakursen** – prisen på en valuta uttrykt i en annen – er kanskje det økonomiske tallet som berører flest mennesker uten at de tenker over det. Når du merker at ferien i Syden plutselig ble dyrere, eller at bensinen steg i pris, kan valutakursen være en del av forklaringen.

I Norge bruker vi vanligvis **direkte notering**: vi oppgir hvor mange kroner som trengs for å kjøpe én enhet utenlandsk valuta. Når vi sier at eurokursen er 11,50, betyr det at det koster 11,50 norske kroner å kjøpe én euro. Og her er det en motintuitiv detalj som forvirrer mange: når dette tallet *stiger*, har kronen blitt *svakere* – du trenger flere kroner for en euro. Når det *synker*, har kronen blitt *sterkere* – du trenger færre kroner. Økonomer bruker begrepene **appresiering** for styrking og **depresiering** for svekkelse av en valuta.`,
    },
    {
      id: 'samfokonomi-2-3-4-n-section1',
      type: 'text',
      content: `## Flytende og faste kurser – to fundamentalt ulike verdener

Hvert land må velge hvordan valutakursen skal bestemmes, og det finnes to hovedmodeller. Med en **flytende valutakurs** lar man markedet bestemme. Tilbud og etterspørsel etter valutaen styrer kursen fritt, uten at sentralbanken griper inn. De fleste store økonomier – USA, EU, Japan, Storbritannia og Norge – har flytende kurs. Fordelen er at kursen automatisk justerer seg ved økonomiske sjokk, og at sentralbanken beholder sin pengepolitiske selvstendighet. Ulempen er at kurssvingninger skaper usikkerhet for bedrifter som handler internasjonalt.

Med en **fast valutakurs** binder sentralbanken kursen til en annen valuta og intervenerer aktivt i markedet for å holde den stabil. Fordelen er forutsigbarhet for handel og investering. Ulempen er dramatisk: sentralbanken mister sin pengepolitiske frihet. Renten må brukes til å forsvare kursen, ikke til å styre økonomien. Hvis kapitalen strømmer ut av landet, *må* sentralbanken heve renten for å gjøre valutaen attraktiv – selv om økonomien er i resesjon og desperat trenger lavere rente.

Norge har valgt en variant av flytende kurs kalt **flytende kurs med inflasjonsmål**. Norges Bank styrer renten etter et inflasjonsmål på rundt 2 prosent og lar kronekursen flyte fritt. I teorien kan Norges Bank intervenere i ekstraordinære situasjoner, men i praksis har den ikke gjort det på mange år. Denne ordningen gir pengepolitisk frihet og lar valutakursen fungere som en automatisk støtdemper for økonomien.

Hva driver kronekursen i praksis? Etterspørselen etter norske kroner øker når utlendinger kjøper norske varer – eksport – eller når utenlandske investorer vil investere i Norge. Tilbudet av norske kroner øker når nordmenn kjøper utenlandske varer – import – eller investerer i utlandet. I dette markedet er det fire faktorer som er spesielt viktige for Norge. Den viktigste er **oljeprisen**: når den stiger, strømmer det mer valuta inn til Norge, etterspørselen etter kroner øker, og kronen styrkes. Den andre er **rentedifferansen**: høyere norsk rente relativt til utlandet tiltrekker kapital og styrker kronen. Den tredje er **global risikovilje**: i urolige tider flykter investorer til trygge havner som dollar og sveitserfranc, og små valutaer som kronen svekkes. Den fjerde er **handelsbalansen**: vedvarende eksportoverskudd styrker kronen over tid.`,
    },
    {
      id: 'samfokonomi-2-3-4-n-section2',
      type: 'text',
      content: `## Kronen som støtdemper – og problemet med valutarisiko

Mars 2020: koronapandemien rammer verden. Oljeprisen stuper fra rundt 60 til under 20 dollar fatet. Investorer flykter fra små valutaer. Norges Bank kutter renten. På bare noen uker faller kronen fra rundt 10 til nesten 13 kroner per euro – en svekkelse på nesten 30 prosent. For norske forbrukere betyr det at alt fra utlandet plutselig blir mye dyrere. Men for norsk eksportindustri utenom olje er det faktisk en fordel: norske varer blir billigere for utenlandske kjøpere, og det demper nedgangen i en økonomi som allerede er i krise.

Denne egenskapen – at kronen svekker seg i dårlige tider og styrker seg i gode – gjør den til en **syklisk valuta**. Det fungerer som en innebygd støtdemper: i nedgangstider hjelper den svake kronen eksportnæringen, og i oppgangstider bremser den sterke kronen overoppheting ved å gjøre import billigere. Men det er en pris: den importerte inflasjonen kan tvinge Norges Bank til å holde renten høyere enn ønsket, og usikkerhet rundt kronekursen kan skremme bort utenlandske investorer.

Kronens svingninger skaper også konkrete problemer for bedrifter i form av **valutarisiko**. En norsk lakseeksportør som venter betaling på 1 million euro om tre måneder, vet ikke hva de pengene vil være verdt i kroner. Hvis kronen styrker seg dramatisk, kan gevinsten krympe kraftig. En norsk importør som skal betale 50 millioner japanske yen om seks måneder, risikerer at regningen blir mye dyrere hvis kronen svekker seg.

Heldigvis finnes det verktøy for å håndtere dette. Det viktigste er **terminkontrakter** – avtaler om å kjøpe eller selge valuta til en fastsatt kurs på et fremtidig tidspunkt. Lakseeksportøren kan inngå en terminkontrakt i dag som låser eurokursen om tre måneder, slik at han vet nøyaktig hvor mange kroner han får – uavhengig av hva markedskursen blir. Det koster litt: terminkursen er vanligvis litt dårligere enn spotkursen, men det er prisen for sikkerhet. Alternativt kan bedrifter bruke **valutaopsjoner** – som gir rett, men ikke plikt, til å veksle til en fastsatt kurs – eller **naturlig sikring**, der man matcher inntekter og kostnader i samme valuta for å unngå valutaeksponering helt.`,
    },
    {
      id: 'samfokonomi-2-3-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-3-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på valutakurser og valutamarkeder:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-3-4-n-quiz1-q0',
            task: 'Dollarkursen går fra 10,50 NOK/USD til 9,80 NOK/USD. Hva har skjedd med den norske kronen?',
            options: [
              { id: 'a', text: 'Kronen har styrket seg (appresiert) – det koster nå færre kroner per dollar', isCorrect: true },
              { id: 'b', text: 'Kronen har svekket seg (depresiert)', isCorrect: false },
              { id: 'c', text: 'Kronen er uendret', isCorrect: false },
              { id: 'd', text: 'Det er umulig å si uten mer informasjon', isCorrect: false },
            ],
            solution: 'Når kursen synker fra 10,50 til 9,80 NOK/USD, trenger du færre kroner for å kjøpe en dollar. Kronen har styrket seg. En sterkere krone gjør import billigere og eksport dyrere.',
          },
          {
            id: 'samfokonomi-2-3-4-n-quiz1-q1',
            task: 'Oljeprisen stiger kraftig. Hva forventer vi at skjer med den norske kronekursen?',
            options: [
              { id: 'a', text: 'Kronen svekker seg fordi norsk import blir dyrere', isCorrect: false },
              { id: 'b', text: 'Kronen styrker seg fordi økte eksportinntekter øker etterspørselen etter kroner', isCorrect: true },
              { id: 'c', text: 'Kronen påvirkes ikke av oljeprisen', isCorrect: false },
              { id: 'd', text: 'Kronen styrker seg fordi nordmenn reiser mer', isCorrect: false },
            ],
            solution: 'Når oljeprisen stiger, øker Norges eksportinntekter. Utenlandske kjøpere trenger mer norske kroner for å betale for oljen, etterspørselen etter NOK øker, og kronen styrkes.',
          },
          {
            id: 'samfokonomi-2-3-4-n-quiz1-q2',
            task: 'Hva er den viktigste fordelen med flytende valutakurs sammenlignet med fast kurs?',
            options: [
              { id: 'a', text: 'Flytende kurs gir mer forutsigbarhet for bedrifter', isCorrect: false },
              { id: 'b', text: 'Flytende kurs gir sentralbanken pengepolitisk selvstendighet', isCorrect: true },
              { id: 'c', text: 'Flytende kurs eliminerer all valutarisiko', isCorrect: false },
              { id: 'd', text: 'Flytende kurs gjør valutaen alltid sterkere', isCorrect: false },
            ],
            solution: 'Med flytende kurs kan sentralbanken bruke renten til å styre inflasjon og sysselsetting. Med fast kurs må renten brukes til å forsvare valutakursen, uansett hva innenlandsk økonomi trenger.',
          },
          {
            id: 'samfokonomi-2-3-4-n-quiz1-q3',
            task: 'Hvordan kan en norsk eksportør beskytte seg mot valutarisiko?',
            options: [
              { id: 'a', text: 'Ved å slutte å eksportere', isCorrect: false },
              { id: 'b', text: 'Ved å inngå en terminkontrakt som låser valutakursen for fremtidige transaksjoner', isCorrect: true },
              { id: 'c', text: 'Ved å be Norges Bank om å holde kursen stabil', isCorrect: false },
              { id: 'd', text: 'Valutarisiko kan ikke sikres mot', isCorrect: false },
            ],
            solution: 'En terminkontrakt er en avtale om å kjøpe eller selge valuta til en fastsatt kurs på et fremtidig tidspunkt. Eksportøren vet da nøyaktig hva inntektene blir i kroner, uavhengig av kurssvingninger. Andre alternativer er valutaopsjoner og naturlig sikring.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-3-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om valutakurser og valutamarkeder. **Valutakursen** er prisen på en valuta i en annen – i Norge bruker vi direkte notering (NOK per utenlandsk enhet). Når kursen stiger, har kronen *svekket seg*; når den synker, har kronen *styrket seg*. **Flytende valutakurs** bestemmes av tilbud og etterspørsel og gir pengepolitisk selvstendighet, mens **fast valutakurs** opprettholdes av sentralbanken og gir forutsigbarhet på bekostning av pengepolitisk frihet. Norges kronekurs drives av **oljeprisen**, **rentedifferansen**, **global risikovilje** og **handelsbalansen**. Svak krone er bra for eksportører men dårlig for importører og forbrukere. **Valutarisiko** kan sikres med terminkontrakter, opsjoner eller naturlig sikring. Den norske kronen fungerer som en syklisk støtdemper – den svekkes i krisetider og styrkes i gode tider.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5 NARRATIV: Betalingsbalansen
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_3_5_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-3-5-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '3.5',
  title: 'Betalingsbalansen',
  subtitle: 'Narrativ versjon',
  description: 'Fortellingen om Norges økonomiske forbindelser med resten av verden – fra enorme oljeoverskudd til verdens største statlige fond, og hvordan vi unngikk den «hollandske syken» som rammet våre naboer.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analysere Norges rolle i internasjonal økonomi',
    'gjøre rede for sentrale begreper i utenriksøkonomien',
  ],
  linkedChapterId: 'samfokonomi-2-3-5',
  content: [
    {
      id: 'samfokonomi-2-3-5-n-intro',
      type: 'text',
      content: `## Norges regnskap med verden

Tenk deg at du fører et nøyaktig regnskap over alle pengene som strømmer inn og ut av husholdningen din i løpet av et år – lønn, utgifter, investeringer, lån, gaver. Et land gjør nøyaktig det samme overfor resten av verden, og resultatet kalles **betalingsbalansen**.

Betalingsbalansen er ikke bare et tørt bokføringsverktøy – den er en fortelling om et lands plass i verdensøkonomien. For Norge er denne fortellingen ekstraordinær. Takket være olje- og gasseksporten har Norge hatt store overskudd på driftsbalansen i årtier, typisk 10 til 15 prosent av BNP – blant de høyeste i verden. Disse overskuddene har blitt kanalisert inn i **Statens pensjonsfond utland**, populært kalt oljefondet, som ved inngangen til 2025 var verdt over 18 000 milliarder kroner.

Men betalingsbalansen avslører også en bemerkelsesverdig mekanisme: for hver krone vi tjener mer enn vi bruker i utlandet, strømmer det en krone *ut* som investering. Driftsoverskuddet og kapitalunderskuddet er to sider av samme mynt – og i dette tilsynelatende paradokset ligger nøkkelen til å forstå både Norges velstand og de enorme globale ubalansene mellom land.`,
    },
    {
      id: 'samfokonomi-2-3-5-n-section1',
      type: 'text',
      content: `## Driftsbalansen og kapitalbalansen – to sider av samme mynt

Betalingsbalansen er bygget opp av tre hoveddeler. Den viktigste er **driftsbalansen**, som viser nettoresultatet av alle løpende transaksjoner med utlandet. Den består av fire poster: **varehandel** (eksport og import av fysiske varer – der Norges olje- og gasseksport dominerer), **tjenestehandel** (som shipping, rådgivning og turisme), **lønn og formuesinntekter** (renter og utbytte fra investeringer – her er oljefondets avkastning avgjørende), og **løpende overføringer** (bistand og kontingenter til internasjonale organisasjoner).

Formelen for driftsbalansen er: $\\text{Driftsbalanse} = \\text{Eksport} - \\text{Import} + \\text{Netto inntekter fra utlandet} - \\text{Netto overføringer}$. Når dette tallet er positivt – slik det nesten alltid er for Norge – har vi et driftsoverskudd. Vi tjener mer på utlandet enn vi bruker. **Handelsbalansen** er en delkomponent som bare ser på vare- og tjenestehandelen. Norge har handelsoverskudd takket være energieksporten, men uten olje og gass ville bildet vært annerledes.

Den andre hoveddelen er **kapitalbalansen** (også kalt den finansielle balansen). Den registrerer alle finansielle strømmer: direkte investeringer i bedrifter, kjøp av aksjer og obligasjoner (porteføljeinvesteringer), banklån og endringer i valutareserver. Og her er det geniale ved dobbelt bokføring: $\\text{Driftsbalanse} + \\text{Kapitalbalanse} = 0$ (når vi inkluderer en liten restpost for feil og utelatelser).

Logikken er den samme som for en husholdning. Hvis du tjener mer enn du bruker, *må* du spare resten et sted – i banken, i aksjer, i eiendom. For et land betyr det at et driftsoverskudd nødvendigvis motsvares av netto kapitalutgang: pengene investeres i utlandet. Et land med driftsunderskudd – som USA – må derimot låne fra utlandet, det vil si at utenlandske investorer kjøper amerikanske verdipapirer. Norges enorme driftsoverskudd motsvares av like enorm kapitalutgang – primært gjennom oljefondets massive investeringer i utenlandske aksjer, obligasjoner og eiendom i over 70 land.`,
    },
    {
      id: 'samfokonomi-2-3-5-n-section2',
      type: 'text',
      content: `## Oljefondet – vaksinasjon mot hollandsk syke

For å forstå hvor genial den norske oljefondsmodellen er, må vi reise til Nederland på 1960-tallet. Nederlanderne oppdaget enorme gassfelt, og eksportinntektene strømmet inn i økonomien. Lønningene steg, den nederlandske gylden styrket seg kraftig, og etterspørselen kokte. Men så begynte det å gå galt. Tradisjonell eksportindustri – som alltid hadde vært ryggraden i nederlandsk økonomi – klarte ikke å konkurrere med skyhøye lønninger og en overvurdert valuta. Fabrikker la ned, arbeidsplasser forsvant. Og da gassen begynte å ta slutt, var industrien borte. Fenomenet fikk navnet **hollandsk syke**.

Norge kunne lett ha gått i samme felle. Men i 1990 ble Statens pensjonsfond utland opprettet, og grunntanken var enkel men kraftfull: oljeinntektene skal ikke brukes direkte i norsk økonomi. De skal investeres i utlandet, og bare *avkastningen* – ikke kapitalen – skal brukes over statsbudsjettet. **Handlingsregelen** fastsetter at staten over tid skal bruke omtrent 3 prosent av fondets verdi hvert år, tilsvarende forventet realavkastning. Slik omgjøres en ikke-fornybar ressurs i bakken til en fornybar finansiell formue som i prinsippet kan vare evig.

Denne mekanismen gjør tre avgjørende ting. For det første **demper den etterspørselspresset** i norsk økonomi, fordi bare en brøkdel av oljeinntektene slippes inn. For det andre **demper den valutavirkningen**, fordi oljepengene ikke veksles til kroner men investeres direkte i utenlandsk valuta – uten oljefondet ville den norske kronen vært mye sterkere, og resten av norsk eksportindustri ville hatt store problemer. For det tredje **sikrer den fremtidige generasjoner** en andel av oljeformuen, i stedet for at alt brukes opp av dem som tilfeldigvis lever nå.

Med over 18 000 milliarder kroner investert i aksjer (ca. 70 prosent), obligasjoner (ca. 25 prosent) og eiendom (ca. 5 prosent) er oljefondet ikke bare Norges finansielle ryggrad – det er verdens største statlige investeringsfond, som eier rundt 1,5 prosent av alle børsnoterte aksjer i verden. Og det er betalingsbalansen som forteller historien tydeligst: Norges enorme driftsoverskudd – drevet av olje, gass og fondets egen avkastning – motsvares krone for krone av kapitalutgang gjennom fondets investeringer verden over. Vedvarende ubalanser mellom land – der noen som USA stadig låner og andre som Kina og Norge stadig sparer – kan skape spenninger i verdensøkonomien. Men for Norges del er balansen et bevisst valg: vi bytter midlertidige oljeinntekter mot varig finansiell formue.`,
    },
    {
      id: 'samfokonomi-2-3-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-3-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på betalingsbalansen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-3-5-n-quiz1-q0',
            task: 'Hva betyr det når et land har overskudd på driftsbalansen?',
            options: [
              { id: 'a', text: 'At landet importerer mer enn det eksporterer', isCorrect: false },
              { id: 'b', text: 'At landet tjener mer på transaksjoner med utlandet enn det bruker, og bygger opp fordringer', isCorrect: true },
              { id: 'c', text: 'At landet har lav arbeidsledighet', isCorrect: false },
              { id: 'd', text: 'At landet har høy inflasjon', isCorrect: false },
            ],
            solution: 'Driftsoverskudd betyr at landet har større inntekter enn utgifter i sine løpende transaksjoner med utlandet. Overskuddet plasseres som investeringer i utlandet – for Norges del primært gjennom oljefondet.',
          },
          {
            id: 'samfokonomi-2-3-5-n-quiz1-q1',
            task: 'Et land har driftsoverskudd på 500 milliarder kr. Hva viser kapitalbalansen?',
            options: [
              { id: 'a', text: 'Også et overskudd på 500 milliarder kr', isCorrect: false },
              { id: 'b', text: 'Et underskudd på omtrent 500 milliarder kr (netto kapitalutgang)', isCorrect: true },
              { id: 'c', text: 'Kapitalbalansen er upåvirket', isCorrect: false },
              { id: 'd', text: 'Det er umulig å si', isCorrect: false },
            ],
            solution: 'Betalingsbalansen går alltid i null: Driftsbalanse + Kapitalbalanse = 0. Et driftsoverskudd på 500 mrd. kr betyr at landet netto eksporterer kapital for 500 mrd. kr – det investerer mer i utlandet enn utlendinger investerer hjemme.',
          },
          {
            id: 'samfokonomi-2-3-5-n-quiz1-q2',
            task: 'Hva er hollandsk syke?',
            options: [
              { id: 'a', text: 'En sykdom som rammet nederlandske arbeidere', isCorrect: false },
              { id: 'b', text: 'At store ressursinntekter svekker tradisjonell industri gjennom høye lønninger og sterk valuta', isCorrect: true },
              { id: 'c', text: 'At land med mye gass alltid blir fattige', isCorrect: false },
              { id: 'd', text: 'At EU-medlemskap skader økonomien', isCorrect: false },
            ],
            solution: 'Hollandsk syke oppstår når store ressursinntekter strømmer inn i økonomien, driver opp lønninger og styrker valutaen. Tradisjonell eksportindustri blir ukonkurransedyktig. Oljefondet beskytter Norge mot dette ved å investere oljeinntektene i utlandet.',
          },
          {
            id: 'samfokonomi-2-3-5-n-quiz1-q3',
            task: 'Hva er handlingsregelen, og hvorfor er den viktig?',
            options: [
              { id: 'a', text: 'En regel om at Norge må eksportere like mye som det importerer', isCorrect: false },
              { id: 'b', text: 'At staten over tid skal bruke ca. 3 % av oljefondets verdi årlig, for å bevare fondets kjøpekraft', isCorrect: true },
              { id: 'c', text: 'At Norges Bank må intervenere i valutamarkedet minst tre ganger i året', isCorrect: false },
              { id: 'd', text: 'En EU-regel Norge må følge gjennom EØS', isCorrect: false },
            ],
            solution: 'Handlingsregelen sier at staten skal bruke omtrent 3 % av oljefondets verdi per år – tilsvarende forventet realavkastning. Slik brukes bare avkastningen, ikke kapitalen, og fondet bevares for fremtidige generasjoner. Det hindrer også overoppheting av økonomien.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-3-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om betalingsbalansen og Norges unike posisjon i verdensøkonomien. **Betalingsbalansen** registrerer alle økonomiske transaksjoner mellom et land og utlandet, og går alltid i null. **Driftsbalansen** viser nettoresultatet av handel, formuesinntekter og overføringer – Norge har store overskudd takket være olje- og gasseksport og oljefondets avkastning. **Kapitalbalansen** viser finansielle strømmer – Norges driftsoverskudd motsvares av kapitalutgang gjennom oljefondets investeringer i utlandet. **Statens pensjonsfond utland** er verdens største statlige fond og beskytter Norge mot **hollandsk syke** ved å holde oljeinntektene ute av norsk økonomi. **Handlingsregelen** begrenser bruken av oljepenger til ca. 3 prosent av fondets verdi årlig, noe som sikrer bærekraftig forvaltning og rettferdighet mellom generasjoner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// SAMLING: Del 3 narrative kapitler
// ============================================================================

export const SAMFOKONOMI_2_NARRATIV_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_3_1_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_3_2_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_3_3_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_3_4_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_3_5_NARRATIV,
];
