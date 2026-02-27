/**
 * Norsk 10 - Narrativ versjon DEL 2
 * Kapittel 3.1, 3.2, 4.1, 4.2
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1 NARRATIV: Språkhistorie og språkutvikling
// ============================================================================

export const CHAPTER_NORSK_10_3_1_NARRATIV: TextbookChapter = {
  id: 'norsk-10-3-1-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '3.1',
  title: 'Språkhistorie og språkutvikling',
  subtitle: 'Narrativ versjon',
  description:
    'Følg det norske språket på en tusenårig reise fra vikingenes norrønt, gjennom 400 år med dansk styre, og helt frem til dagens debatter om engelske låneord.',
  estimatedMinutes: 35,
  competenceGoals: [
    'gjøre rede for noen sentrale forskjeller mellom norrønt og moderne norsk',
    'forklare viktige hendelser i norsk språkhistorie',
    'reflektere over hvordan språk endrer seg over tid og hva som påvirker språkendring',
  ],
  linkedChapterId: 'norsk-10-3-1',
  content: [
    {
      id: 'norsk-10-3-1-n-intro',
      type: 'text',
      content: `## Vikingene snakket nesten som deg

Visste du at vikingene snakket et språk du nesten kan forstå, hvis du konsentrerer deg? At norsk i flere hundre år egentlig var dansk? Og at ordene «sjekke», «kul» og «basically» er like nye innvandrere i det norske språket som TikTok er i livet ditt?

Språk er ikke noe fast og uforanderlig. Språk er levende. Det fødes nye ord hver dag, gamle ord dør ut, og grammatikken forandrer seg sakte, men sikkert. Besteforeldrene dine snakker annerledes enn deg, og oldeforeldrene dine snakket enda mer annerledes.

Det som driver språkendring er kontakt med andre språk gjennom lånord, politiske hendelser som union og selvstendighet, teknologi som skaper behov for nye ord, sosiale endringer som urbanisering og globalisering, og bevisste språkpolitiske valg gjennom rettskrivningsreformer. Ingen «eier» språket. Språk tilhører alle som bruker det, og endring er naturlig, ikke et tegn på forfall. I dette kapittelet skal du følge det norske språket fra vikingtiden til i dag.`,
    },
    {
      id: 'norsk-10-3-1-n-section1',
      type: 'text',
      content: `## Fra runer til reformasjon

Norrønt var det felles språket i Skandinavia i vikingtiden og middelalderen, fra rundt år 700 til 1350. Folk i Norge, Island, Danmark og Sverige kunne forstå hverandre ganske godt. Norrønt ble først skrevet med runer og senere med det latinske alfabetet etter kristningen av Norge rundt år 1000.

Sammenlignet med moderne norsk hadde norrønt et rikt bøyningssystem med fire kasus: nominativ, akkusativ, dativ og genitiv. Mange norrøne ord er likevel gjenkjennelige: «hús» er «hus», «maðr» er «mann», «vatn» er «vann» og «eyja» er «øy». Den norrøne litteraturen er blant de rikeste i middelalderens Europa, med sagaer om vikingkonger, eddadikt om Odin og Tor, skaldekvad og lovtekster. Snorre Sturlason, som levde fra 1179 til 1241, er den mest kjente norrøne forfatteren.

Så kom det store bruddet. I 1380 gikk Norge inn i en union med Danmark som varte i over 400 år. Dansk ble det offisielle skriftspråket. Folk snakket fremdeles norske dialekter hjemme, men alt skriftlig, fra lover til bøker til bibelen, ble dansk. Den norrøne skriftkulturen forsvant. Det oppsto et merkelig fenomen kalt «dannet dagligtale»: norske byborgere og embetsmenn leste og skrev dansk, men snakket det med norsk uttale og norske ord. Denne blandingen ble grunnlaget for det vi i dag kaller bokmål.

Dansketiden er et eksempel på språklig overherredømme, der ett språk dominerer et annet som følge av politisk makt. Det er det samme som skjedde med samisk i Norge under fornorskingspolitikken, og det er det som skjer i mange land i dag der engelsk presser ut lokale språk.`,
    },
    {
      id: 'norsk-10-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på norrønt og dansketiden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-3-1-n-quiz1-q0',
            task: 'Hva var den viktigste konsekvensen av dansketiden for det norske språket?',
            options: [
              { id: 'a', text: 'Alle nordmenn sluttet å snakke norsk', isCorrect: false },
              { id: 'b', text: 'Norge mistet sitt eget skriftspråk, men dialektene overlevde', isCorrect: true },
              { id: 'c', text: 'Det norske språket ble helt uforandret', isCorrect: false },
              { id: 'd', text: 'Danmark forbød norsk talespråk', isCorrect: false },
            ],
            solution:
              'Den norrøne skrifttradisjonen gikk tapt under dansketiden, men det muntlige norske språket levde videre i dialektene. Folk snakket fortsatt norsk hjemme, men alt skriftlig ble dansk.',
          },
          {
            id: 'norsk-10-3-1-n-quiz1-q1',
            task: 'Hva kjennetegner norrønt sammenlignet med moderne norsk?',
            options: [
              { id: 'a', text: 'Norrønt hadde et enklere bøyningssystem', isCorrect: false },
              { id: 'b', text: 'Norrønt var et felles skandinavisk språk med rikt bøyningssystem og fire kasus', isCorrect: true },
              { id: 'c', text: 'Norrønt ble bare snakket i Norge', isCorrect: false },
              { id: 'd', text: 'Norrønt er helt ugjenkjennelig for oss i dag', isCorrect: false },
            ],
            solution:
              'Norrønt var et felles skandinavisk språk med fire kasus og rikt bøyningssystem. Mange ord er gjenkjennelige i dag: «hús» er «hus», «vatn» er «vann». Det ble snakket i hele Skandinavia, ikke bare i Norge.',
          },
          {
            id: 'norsk-10-3-1-n-quiz1-q2',
            task: 'Sett hendelsene i riktig rekkefølge: 1) Ivar Aasen skaper landsmål 2) Norge i union med Danmark 3) Norrøn tid 4) Norges selvstendighet',
            options: [
              { id: 'a', text: '3, 2, 4, 1', isCorrect: true },
              { id: 'b', text: '2, 3, 1, 4', isCorrect: false },
              { id: 'c', text: '3, 4, 2, 1', isCorrect: false },
              { id: 'd', text: '1, 3, 2, 4', isCorrect: false },
            ],
            solution:
              'Riktig rekkefølge: Norrønt (ca. 700-1350) kom først, deretter union med Danmark (1380), Norges selvstendighet (1814) og til slutt Aasens landsmål (1850-tallet).',
          },
        ],
      },
    },
    {
      id: 'norsk-10-3-1-n-section2',
      type: 'text',
      content: `## Språkstriden og det moderne norsk

Da Norge ble selvstendig i 1814, sto landet overfor et merkelig problem: Vi hadde fått vår egen grunnlov, men vi hadde ikke vårt eget skriftspråk. To løsninger ble foreslått, og de skapte en debatt som har vart i over 200 år.

Knud Knudsen mente at det enkleste var å ta det eksisterende danske skriftspråket og gradvis gjøre det mer norsk. Erstatte «bög» med «bok», «vej» med «vei». Folk var vant til å lese dansk, så hvorfor starte fra bunnen? Denne linjen førte til det vi kaller riksmål og senere bokmål.

Ivar Aasen valgte en helt annen vei. Han var en bondegutt fra Sunnmøre som lærte seg språk på egen hånd, reiste rundt i hele Norge, kartla dialektene vitenskapelig og skapte landsmål, det vi i dag kaller nynorsk. Aasen mente at det danske skriftspråket var et fremmedspråk for vanlige nordmenn, og at et ekte norsk skriftspråk måtte bygge på det språket folk faktisk snakket.

Resultatet er Norges unike løsning: to offisielle skriftspråk av samme språk. Gjennom 1900-tallet fulgte en rekke rettskrivningsreformer for å fornorske bokmål. 1907-reformen endret «efter» til «etter» og «sne» til «snø». 1938-reformen var den mest kontroversielle, med forsøk på å nærme bokmål og nynorsk gjennom «samnorsk-politikken». I 2012 kom en ny bokmålsrettskrivning som ryddet opp.

I vår egen tid er den mest synlige språkendringen påvirkning fra engelsk. Direkte lån som «date», «cool» og «cringe», oversettelseslån som «å ta for gitt», og domenetap der hele fagfelt nærmest går over til engelsk. Domenetap betyr at et språk mister bruksområder til et annet, for eksempel at forskning, næringsliv og teknologi i økende grad bruker bare engelsk. Språkrådet jobber mot dette med norske avløserord som «nettbrett» for «tablet», og i 2021 slo Lov om språk fast at norsk er hovedspråket i Norge.`,
    },
    {
      id: 'norsk-10-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på språkstriden og moderne språkendring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-3-1-n-quiz2-q0',
            task: 'Hva er forskjellen mellom Knud Knudsens og Ivar Aasens tilnærming?',
            options: [
              { id: 'a', text: 'Knudsen ville beholde dansk, Aasen ville innføre svensk', isCorrect: false },
              { id: 'b', text: 'Knudsen ville fornorske dansken gradvis, Aasen ville bygge nytt fra dialektene', isCorrect: true },
              { id: 'c', text: 'Begge ville lage ett felles nordisk språk', isCorrect: false },
              { id: 'd', text: 'Knudsen ville bruke nynorsk, Aasen ville bruke bokmål', isCorrect: false },
            ],
            solution:
              'Knudsen ville fornorske det danske skriftspråket gradvis, noe som ble til riksmål og senere bokmål. Aasen ville bygge et helt nytt skriftspråk basert på norske dialekter, noe som ble til landsmål og senere nynorsk.',
          },
          {
            id: 'norsk-10-3-1-n-quiz2-q1',
            task: 'Hva betyr «domenetap» i språksammenheng?',
            options: [
              { id: 'a', text: 'At et land mister territorium til et naboland', isCorrect: false },
              { id: 'b', text: 'At et språk mister bruksområder til et annet språk', isCorrect: true },
              { id: 'c', text: 'At ungdom bruker for mange slangord', isCorrect: false },
              { id: 'd', text: 'At nynorsk brukes mindre enn bokmål', isCorrect: false },
            ],
            solution:
              'Domenetap betyr at et språk mister bruksområder til et annet. Norsk opplever domenetap til engelsk innen forskning, næringsliv, teknologi og populærkultur. Hvis norsk ikke brukes innen et felt, utvikles det heller ikke fagspråk på norsk.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Norsk språkhistorie er en fortelling om tusen år med endring. Fra norrønt, det felles skandinaviske språket med rik litteratur og fire kasus, gjennom 400 år med dansketiden der skriftspråket ble dansk mens dialektene overlevde, til språkstriden på 1800-tallet der Knud Knudsen og Ivar Aasen foreslo ulike løsninger som ga oss bokmål og nynorsk.

I dag står norsk overfor nye utfordringer med engelskpåvirkning og domenetap. Språkendring drives av kontakt med andre språk, politikk, teknologi og sosiale endringer. Det viktigste å huske er at språk er levende: endring er naturlig og debatten om språk handler alltid om mer enn bare ord, den handler om identitet, makt og tilhørighet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2 NARRATIV: Bokmål og nynorsk
// ============================================================================

export const CHAPTER_NORSK_10_3_2_NARRATIV: TextbookChapter = {
  id: 'norsk-10-3-2-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '3.2',
  title: 'Bokmål og nynorsk',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå hvorfor Norge har to skriftspråk, hva som skiller dem, og hvorfor sidemålsdebatten engasjerer så mange.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for forskjeller mellom bokmål og nynorsk og reflektere over språkpolitikk',
    'bruke begge målformer i egen tekstproduksjon',
    'reflektere over språklig mangfold og språkets rolle for identitet',
  ],
  linkedChapterId: 'norsk-10-3-2',
  content: [
    {
      id: 'norsk-10-3-2-n-intro',
      type: 'text',
      content: `## Hvorfor har vi to skriftspråk?

«Hvorfor må vi lære nynorsk?» Det er et spørsmål som har blitt stilt av norske skoleelever i generasjoner. Og det er faktisk et veldig godt spørsmål, for svaret fører oss rett inn i hjertet av norsk historie, identitet og demokrati.

Norge er et av svært få land i verden med to offisielle skriftspråk av samme språk. Bokmål og nynorsk er ikke to forskjellige språk. De er to ulike skriftlige uttrykk for det samme norske talespråket. Bokmål har sine røtter i det danske skriftspråket som gradvis ble fornorsket etter 1814, mens nynorsk ble bygd opp fra bunnen av basert på norske dialekter av Ivar Aasen.

For å forstå hvorfor vi har to målformer, må vi forstå at språk aldri bare er et kommunikasjonsverktøy. Språk handler om hvem vi er. Da Norge ble selvstendig, var spørsmålet om skriftspråk uløselig knyttet til spørsmålet om nasjonal identitet. Er vi et land som bygger videre på det danske arvet, eller et land som tar tilbake det genuint norske?`,
    },
    {
      id: 'norsk-10-3-2-n-section1',
      type: 'text',
      content: `## Forskjeller, likheter og språkpolitikk

De viktigste forskjellene mellom bokmål og nynorsk handler om ordformer, bøyning og ordvalg. Nynorsk bruker gjerne a-infinitiv («å skrive» på bokmål, «å skriva» på nynorsk), har mer bruk av sterke bøyningsformer, og velger ofte andre ordformer som er nærmere dialektene. «Ikke» på bokmål er «ikkje» på nynorsk, «hvorfor» blir «kvifor», og «noe» blir «noko».

Men likhetene er langt større enn forskjellene. Ordforrådet er i stor grad det samme, grammatikken følger samme grunnstruktur, og en bokmålsbruker forstår nynorsk uten problemer. Det er som to klær av samme stoff, men med litt ulik snitt.

Språkpolitikken rundt bokmål og nynorsk har vært het i over 150 år. Likestillingsvedtaket fra 1885 slo fast at landsmål (nynorsk) og riksmål (bokmål) er likestilte offisielle skriftspråk. I dag har kommuner og fylker rett til å velge sin målform, og alle elever må lære begge.

Sidemålsdebatten handler om hvorvidt alle elever bør ha opplæring i begge målformer. Tilhengerne mener det styrker språkforståelsen, bevarer kulturarven og er en demokratisk rettighet. Motstanderne mener det er tungvint, tar tid fra andre fag og at de fleste aldri bruker sidemålet etter skolen. Uansett hva du mener, er det viktig å forstå at debatten handler om noe større enn grammatikk: den handler om hvem som får definere hva «norsk» er.`,
    },
    {
      id: 'norsk-10-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på bokmål og nynorsk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-3-2-n-quiz1-q0',
            task: 'Hva er den grunnleggende forskjellen mellom bokmål og nynorsk?',
            options: [
              { id: 'a', text: 'Bokmål er et fremmedspråk, nynorsk er norsk', isCorrect: false },
              { id: 'b', text: 'Bokmål bygger på fornorsket dansk, nynorsk bygger på norske dialekter', isCorrect: true },
              { id: 'c', text: 'De er to helt forskjellige språk som ikke kan forstås på tvers', isCorrect: false },
              { id: 'd', text: 'Nynorsk er en eldre versjon av bokmål', isCorrect: false },
            ],
            solution:
              'Bokmål har røtter i det danske skriftspråket som gradvis ble fornorsket, mens nynorsk ble bygd opp av Ivar Aasen basert på norske dialekter. Begge er offisielle norske skriftspråk.',
          },
          {
            id: 'norsk-10-3-2-n-quiz1-q1',
            task: 'Når ble bokmål og nynorsk likestilt som offisielle skriftspråk?',
            options: [
              { id: 'a', text: '1814, da Norge ble selvstendig', isCorrect: false },
              { id: 'b', text: '1885, gjennom likestillingsvedtaket', isCorrect: true },
              { id: 'c', text: '1929, da navnene bokmål og nynorsk ble innført', isCorrect: false },
              { id: 'd', text: '2021, gjennom Lov om språk', isCorrect: false },
            ],
            solution:
              'Likestillingsvedtaket fra 1885 slo fast at landsmål (nynorsk) og riksmål (bokmål) er likestilte offisielle skriftspråk. Navnene bokmål og nynorsk ble offisielle i 1929.',
          },
          {
            id: 'norsk-10-3-2-n-quiz1-q2',
            task: 'Hva handler sidemålsdebatten egentlig om, på et dypere plan?',
            options: [
              { id: 'a', text: 'Bare om grammatikk og rettskrivning', isCorrect: false },
              { id: 'b', text: 'Om hvem som får definere hva «norsk» er, og forholdet mellom språk og identitet', isCorrect: true },
              { id: 'c', text: 'Om å avgjøre hvilket skriftspråk som er best', isCorrect: false },
              { id: 'd', text: 'Om å innføre et tredje skriftspråk', isCorrect: false },
            ],
            solution:
              'Sidemålsdebatten handler om mer enn grammatikk. Den berører spørsmål om nasjonal identitet, kulturarv, demokrati og hvem som får bestemme hva «norsk» betyr. Språk og identitet henger tett sammen.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Norge har to offisielle skriftspråk fordi vi har en unik språkhistorie. Bokmål stammer fra det fornorskede danske skriftspråket, mens nynorsk ble skapt av Ivar Aasen fra norske dialekter. Likhetene mellom dem er langt større enn forskjellene.

Likestillingsvedtaket fra 1885 ga begge målformene offisiell status. Sidemålsdebatten handler ikke bare om grammatikk, men om identitet, kulturarv og demokrati. Uansett hva du mener om to skriftspråk, er det verdifullt å forstå bakgrunnen: debatten om språk handler alltid om mer enn bare ord.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.1 NARRATIV: Mediekritikk
// ============================================================================

export const CHAPTER_NORSK_10_4_1_NARRATIV: TextbookChapter = {
  id: 'norsk-10-4-1-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '4.1',
  title: 'Mediekritikk',
  subtitle: 'Narrativ versjon',
  description:
    'Lær å gjennomskue clickbait, forstå hvordan algoritmer styrer hva du ser, og bli en kritisk mediebruker i en verden som kjemper om oppmerksomheten din.',
  estimatedMinutes: 35,
  competenceGoals: [
    'vurdere medieinnhold kritisk og reflektere over hvordan medier påvirker oss',
    'gjenkjenne retoriske grep og påvirkningsstrategier i reklame og medier',
    'forstå hvordan algoritmer og digitale plattformer fungerer og påvirker informasjonstilgangen',
  ],
  linkedChapterId: 'norsk-10-4-1',
  content: [
    {
      id: 'norsk-10-4-1-n-intro',
      type: 'text',
      content: `## Krigen om oppmerksomheten din

Akkurat nå kjemper tusenvis av selskaper om en ting: oppmerksomheten din. Nyhetsmedier vil at du skal klikke. Sosiale medier vil at du skal scrolle. Reklame vil at du skal kjøpe. YouTubere vil at du skal se. Alle bruker smarte teknikker for å fange blikket ditt og holde det. Og de fleste av dem er blitt skummelt gode til det.

Du lever i en oppmerksomhetsøkonomi, der oppmerksomhet er den mest verdifulle valutaen. Jo mer tid du bruker på en plattform, jo mer penger tjener den. Det betyr at plattformene ikke er designet for å informere deg best mulig, men for å holde deg der lengst mulig. Og det er en vesentlig forskjell.

Mediekritikk handler om å se bak overflaten. Det handler om å spørre: Hvem har laget dette innholdet, og hvorfor? Hvordan prøver det å påvirke meg? Og hva er det jeg ikke får se? La oss dykke ned i de viktigste mekanismene du bør kjenne til.`,
    },
    {
      id: 'norsk-10-4-1-n-section1',
      type: 'text',
      content: `## Clickbait, algoritmer og reklame i forkledning

Clickbait er overskrifter som er designet for å få deg til å klikke, ikke for å informere deg. «Du vil ikke tro hva som skjedde!» «Denne feilen gjør alle!» «Eksperter advarer mot vanlig matvare.» Disse overskriftene spiller på nysgjerrighet og frykt, og de holder bevisst tilbake nøkkelinformasjonen for å tvinge deg til å klikke. Problemet er ikke bare at de er irriterende, men at de forvrenger forståelsen vår av verden. De mest oppsiktsvekkende og skremmende sakene får mest oppmerksomhet, mens nøkterne og nyanserte saker drukner.

Algoritmer er de usynlige reglene som bestemmer hva du ser i feeden din. Hver gang du liker, deler, kommenterer eller bare stopper opp ved et innlegg, lærer algoritmen mer om hva du reagerer på. Deretter viser den deg mer av det samme. Det skaper såkalte filterbobler der du i økende grad bare ser innhold som bekrefter det du allerede mener, og ekkokamre der de samme meningene gjentas uten motforestillinger.

Reklame i forkledning er et økende problem. Sponsede innlegg på sosiale medier, «native advertising» i nettaviser som ligner redaksjonelle saker, og influencere som anbefaler produkter uten å tydelig markere det som reklame. Alt dette gjør det vanskeligere å skille mellom informasjon og påvirkning. Medietilsynet krever at reklame skal være tydelig merket, men i praksis er grensene ofte uklare.

Når du analyserer medieinnhold, bør du alltid stille fire spørsmål: Hvem er avsenderen? Hva er formålet? Hvordan prøver innholdet å påvirke meg? Og hva utelates?`,
    },
    {
      id: 'norsk-10-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på mediekritikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-4-1-n-quiz1-q0',
            task: 'Hva er en filterboble?',
            options: [
              { id: 'a', text: 'Et filter som blokkerer upassende innhold', isCorrect: false },
              { id: 'b', text: 'Når algoritmer viser deg innhold som bekrefter det du allerede mener', isCorrect: true },
              { id: 'c', text: 'Et verktøy for å sortere nyheter etter dato', isCorrect: false },
              { id: 'd', text: 'En funksjon som fjerner reklame', isCorrect: false },
            ],
            solution:
              'Filterbobler oppstår når algoritmer viser deg stadig mer av det du allerede er enig i. Du ser verden gjennom et filter som bekrefter dine eksisterende meninger, og slipper sjelden å bli utfordret av andre perspektiver.',
          },
          {
            id: 'norsk-10-4-1-n-quiz1-q1',
            task: 'Hva er hovedproblemet med clickbait-overskrifter?',
            options: [
              { id: 'a', text: 'De er for korte', isCorrect: false },
              { id: 'b', text: 'De forvrenger virkelighetsforståelsen ved å prioritere det oppsiktsvekkende over det nyanserte', isCorrect: true },
              { id: 'c', text: 'De inneholder alltid feil informasjon', isCorrect: false },
              { id: 'd', text: 'De er vanskelige å forstå', isCorrect: false },
            ],
            solution:
              'Clickbait-overskrifter prioriterer det sjokkerende og oppsiktsvekkende for å få klikk. Problemet er at nyanserte og viktige saker drukner, og at vi får et forvrengt bilde av verden der alt virker mer dramatisk enn det er.',
          },
          {
            id: 'norsk-10-4-1-n-quiz1-q2',
            task: 'Hvilke fire spørsmål bør du stille når du vurderer medieinnhold?',
            options: [
              { id: 'a', text: 'Hvem, hva, hvor, når', isCorrect: false },
              { id: 'b', text: 'Er det sant, er det nytt, er det viktig, er det morsomt', isCorrect: false },
              { id: 'c', text: 'Hvem er avsenderen, hva er formålet, hvordan påvirker det meg, hva utelates', isCorrect: true },
              { id: 'd', text: 'Troverdighet, objektivitet, nøyaktighet, egnethet', isCorrect: false },
            ],
            solution:
              'De fire nøkkelspørsmålene for medieanalyse er: Hvem er avsenderen? Hva er formålet? Hvordan prøver innholdet å påvirke meg? Og hva utelates? Disse hjelper deg å se bak overflaten.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-4-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi lever i en oppmerksomhetsøkonomi der plattformer er designet for å holde deg scrollende, ikke nødvendigvis for å informere deg. Clickbait spiller på nysgjerrighet og frykt, algoritmer skaper filterbobler og ekkokamre, og reklame i forkledning gjør det vanskelig å skille informasjon fra påvirkning.

Nøkkelen til mediekritikk er å stille de riktige spørsmålene: Hvem er avsenderen? Hva er formålet? Hvordan prøver innholdet å påvirke meg? Og hva utelates? Jo bedre du forstår mekanismene, jo bedre rustet er du til å navigere i informasjonslandskapet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2 NARRATIV: Digitalt personvern og ytringsfrihet
// ============================================================================

export const CHAPTER_NORSK_10_4_2_NARRATIV: TextbookChapter = {
  id: 'norsk-10-4-2-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '4.2',
  title: 'Digitalt personvern og ytringsfrihet',
  subtitle: 'Narrativ versjon',
  description:
    'Utforsk spenningen mellom ytringsfrihet og personvern i en digital verden, og lær hvorfor nettvett er viktigere enn noensinne.',
  estimatedMinutes: 30,
  competenceGoals: [
    'reflektere over ytringsfrihetens muligheter og begrensninger',
    'forstå digitalt personvern og hvordan persondata brukes',
    'vise god digital dømmekraft og nettvett',
  ],
  linkedChapterId: 'norsk-10-4-2',
  content: [
    {
      id: 'norsk-10-4-2-n-intro',
      type: 'text',
      content: `## Frihet med ansvar

Du har rett til å si hva du vil. Det er en av de mest grunnleggende rettighetene i et demokrati, beskyttet av Grunnloven og Den europeiske menneskerettskonvensjonen. Men har du rett til å si absolutt alt? Kan du skrive hva som helst om hvem som helst på nettet? Og hvem bestemmer egentlig hvor grensen går?

Ytringsfrihet og personvern er to rettigheter som stadig kolliderer, og i den digitale verden har denne kollisjonen blitt mer akutt enn noen gang. Noe du poster på sosiale medier kan nå millioner av mennesker på sekunder. Et bilde tatt i et svakt øyeblikk kan leve for alltid. Et hatefullt kommentarfelt kan ødelegge et menneskes hverdag.

Samtidig samler teknologiselskapene inn enorme mengder data om deg. Hva du søker etter, hva du klikker på, hvor du er, hvem du snakker med. Denne dataen brukes til å vise deg målrettet reklame, men den kan også misbrukes. I dette kapittelet skal vi utforske balansen mellom frihet og ansvar i den digitale verden.`,
    },
    {
      id: 'norsk-10-4-2-n-section1',
      type: 'text',
      content: `## Ytringsfrihet har grenser

Ytringsfriheten er nedfelt i Grunnlovens paragraf 100. Den gir deg rett til å uttrykke meningene dine, dele informasjon og delta i den offentlige debatten. Men den har grenser. Du har ikke lov til å fremme hat mot grupper basert på kjønn, religion, legning eller etnisitet. Du har ikke lov til å true eller trakassere andre. Og du har ikke lov til å spre usanne påstander som skader andres omdømme, det som kalles ærekrenkelse.

Nettet gjør disse grensene vanskeligere å håndheve. Anonymitet kan gi folk mot til å si ting de aldri ville sagt ansikt til ansikt. Kommentarfelt og meldinger kan bli arenaer for hets og mobbing. Og innhold som deles kan ikke tas tilbake, det lever videre selv om du sletter originalen.

Digitalt personvern handler om din rett til å kontrollere informasjon om deg selv. GDPR, EUs personvernforordning, gir deg konkrete rettigheter: rett til innsyn i hva som er lagret om deg, rett til å få data slettet, og krav om samtykke før data samles inn. Men i praksis klikker de fleste av oss «ja» på informasjonskapsler uten å tenke over hva vi gir fra oss.

Nettvett handler om å tenke før du poster. Spør deg selv: Ville jeg sagt dette til personen ansikt til ansikt? Kan dette skade noen? Er informasjonen sann? Har personen på bildet gitt samtykke? Digitale fotavtrykk er vanskelige å slette, og det du deler i dag kan dukke opp igjen i fremtiden, for eksempel når en arbeidsgiver søker deg opp.`,
    },
    {
      id: 'norsk-10-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på ytringsfrihet og personvern:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-4-2-n-quiz1-q0',
            task: 'Hvilken av disse ytringene er IKKE beskyttet av ytringsfriheten?',
            options: [
              { id: 'a', text: 'Kritikk av regjeringens politikk', isCorrect: false },
              { id: 'b', text: 'Et debattinnlegg med kontroversielle meninger', isCorrect: false },
              { id: 'c', text: 'Hatefulle ytringer rettet mot en gruppe basert på etnisitet', isCorrect: true },
              { id: 'd', text: 'Satire som gjør narr av politikere', isCorrect: false },
            ],
            solution:
              'Hatefulle ytringer mot grupper basert på kjønn, religion, legning eller etnisitet er ikke beskyttet av ytringsfriheten. Kritikk, debatt og satire er derimot beskyttet, selv når de er kontroversielle.',
          },
          {
            id: 'norsk-10-4-2-n-quiz1-q1',
            task: 'Hva gir GDPR deg rett til?',
            options: [
              { id: 'a', text: 'Å publisere hva du vil om andre på nettet', isCorrect: false },
              { id: 'b', text: 'Innsyn i hva som er lagret om deg og rett til å få data slettet', isCorrect: true },
              { id: 'c', text: 'Gratis tilgang til alle nettsteder', isCorrect: false },
              { id: 'd', text: 'Å være anonym på alle plattformer', isCorrect: false },
            ],
            solution:
              'GDPR (EUs personvernforordning) gir deg rett til innsyn i hva som er lagret om deg, rett til å få data slettet, og krav om at selskaper får samtykke før de samler inn persondata.',
          },
          {
            id: 'norsk-10-4-2-n-quiz1-q2',
            task: 'Hvilket spørsmål bør du stille deg selv før du poster noe på nettet?',
            options: [
              { id: 'a', text: '«Vil dette få mange likes?»', isCorrect: false },
              { id: 'b', text: '«Er dette morsomt nok?»', isCorrect: false },
              { id: 'c', text: '«Ville jeg sagt dette til personen ansikt til ansikt?»', isCorrect: true },
              { id: 'd', text: '«Har noen andre postet noe lignende?»', isCorrect: false },
            ],
            solution:
              'Nettvett handler om å tenke før du poster. Det viktigste spørsmålet er om du ville sagt det samme ansikt til ansikt. Digitale fotavtrykk er vanskelige å slette, og det du deler i dag kan dukke opp igjen i fremtiden.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-4-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Ytringsfrihet er en grunnleggende demokratisk rettighet, men den har grenser. Hatefulle ytringer, trusler og ærekrenkelser er ikke beskyttet. I den digitale verden er disse grensene vanskeligere å håndheve fordi anonymitet, spredningshastighet og permanens gjør konsekvensene større.

Digitalt personvern gir deg rett til å kontrollere informasjon om deg selv, blant annet gjennom GDPR. Nettvett handler om å tenke før du poster og vurdere konsekvensene av det du deler. Balansen mellom ytringsfrihet og personvern er et av vår tids viktigste spørsmål, og den krever at vi alle tar ansvar for hvordan vi bruker den digitale stemmen vår.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_10_NARRATIV_DEL2_CHAPTERS = [
  CHAPTER_NORSK_10_3_1_NARRATIV,
  CHAPTER_NORSK_10_3_2_NARRATIV,
  CHAPTER_NORSK_10_4_1_NARRATIV,
  CHAPTER_NORSK_10_4_2_NARRATIV,
];
