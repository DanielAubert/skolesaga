/**
 * Tekstbok innhold for Historie DEL 3: Kapittel 9-12
 * Imperialisme, kulturmøter, første verdenskrig og mellomkrigstiden
 *
 * Dekker LK20 kompetansemål for VG2 og VG3.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 9: Imperialisme og kolonialisme
// ============================================================================

export const CHAPTER_HISTORIE_9_1: TextbookChapter = {
  id: 'historie-9-1',
  courseId: 'historie',
  chapterNumber: '9.1',
  title: 'Imperialismens drivkrefter',
  description: 'Økonomiske, politiske og ideologiske årsaker til imperialismen.',
  estimatedMinutes: 55,
  competenceGoals: ['kolonimakter og konsekvenser'],
  content: [
    {
      id: 'historie-9-1-intro',
      type: 'text',
      content: `## Imperialismens tidsalder

På slutten av 1800-tallet la europeiske stormakter under seg store deler av verden. Denne perioden, fra ca. 1870 til 1914, kalles ofte **imperialismens tidsalder** eller **nyimperialismen**. I løpet av få tiår ble nesten hele Afrika og store deler av Asia delt mellom europeiske makter.

Hva drev denne ekspansjonen? Årsakene var sammensatte og omfattet økonomiske interesser, politisk rivalisering og ideologiske forestillinger om europeisk overlegenhet.`,
    },
    {
      id: 'historie-9-1-def-1',
      type: 'definition',
      title: 'Imperialisme',
      content: `**Imperialisme** er en politikk der en stat utvider sin makt og innflytelse over andre områder og folk, enten gjennom direkte militær kontroll (kolonisering) eller indirekte gjennom økonomisk og politisk dominans.

**Kolonialisme** er en form for imperialisme der et land etablerer og opprettholder kolonier i andre områder, med direkte politisk styring og økonomisk utnyttelse.

**Nyimperialismen** (1870-1914) skiller seg fra tidligere kolonialisme ved:
- Industrialiserte stormakter konkurrerte systematisk
- Hele kontinenter ble delt opp
- Ideologisk rettferdiggjøring gjennom raseteori og siviliseringsmisjon`,
    },
    {
      id: 'historie-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-9-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom imperialisme og kolonialisme med egne ord.',
        hints: ['Tenk på direkte versus indirekte kontroll'],
        solution: 'Imperialisme er det overordnede begrepet for en stats utvidelse av makt over andre områder, som kan skje gjennom ulike metoder. Kolonialisme er en spesifikk form for imperialisme der staten etablerer direkte politisk kontroll og bosetting i det erobrede området. En stat kan utøve imperialisme uten å opprette kolonier, for eksempel gjennom økonomisk dominans.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-1-def-2',
      type: 'definition',
      title: 'Økonomiske drivkrefter',
      content: `**Råvarer og markeder:**
Den industrielle revolusjonen skapte behov for råvarer (gummi, olje, mineraler, bomull) og nye markeder for industrivarer. Koloniene leverte billige råvarer og kjøpte europeiske produkter.

**Kapitaleksport:**
Europeiske investorer søkte høyere avkastning i koloniene. Jernbaner, gruver og plantasjer ble bygget med europeisk kapital.

**Strategiske ressurser:**
Kontroll over viktige ressurser som kull og olje ble stadig viktigere for industristatene.

**Eksempel:** Det britiske selskapet British South Africa Company utnyttet gull- og diamantforekomster i Sør-Afrika, mens Belgia tjente enorme summer på gummi fra Kongo.`,
    },
    {
      id: 'historie-9-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-9-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan skapte den industrielle revolusjonen behov for kolonier? Nevn minst to økonomiske faktorer.',
        hints: ['Tenk på hva industrien trengte og hva den produserte'],
        solution: 'Den industrielle revolusjonen skapte behov for kolonier på flere måter: 1) Industrien trengte råvarer som gummi, bomull, mineraler og olje som ikke fantes i tilstrekkelige mengder i Europa. 2) Industrien produserte store mengder varer som trengte nye markeder for å selges. 3) Europeiske kapitalister søkte investeringsmuligheter med høyere avkastning enn hjemme. 4) Kontroll over strategiske ressurser ble viktig for nasjonal sikkerhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-1-def-3',
      type: 'definition',
      title: 'Politiske drivkrefter',
      content: `**Nasjonal prestisje:**
Kolonier ble et symbol på nasjonens storhet. Å ha et stort imperium ga status og innflytelse i internasjonal politikk.

**Stormaktsrivalisering:**
Europeiske stater konkurrerte om kolonier. Når én makt tok et område, følte andre seg tvunget til å gjøre det samme for å ikke falle bakpå.

**Strategiske posisjoner:**
Kontroll over havner, kanaler og sjøruter var avgjørende for handel og militær styrke. Suezkanalen (1869) og Panamakanalen (1914) ble strategiske nøkkelpunkter.

**Eksempel:** Storbritannias kontroll over Egypt og Suezkanalen sikret sjøveien til India, Storbritannias viktigste koloni.`,
    },
    {
      id: 'historie-9-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-9-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor nasjonal prestisje var en viktig drivkraft bak imperialismen.',
        hints: ['Tenk på hvordan land målte sin suksess og makt'],
        solution: 'Nasjonal prestisje var viktig fordi kolonier ble sett som et bevis på nasjonens styrke, sivilisasjon og plass i verden. Et stort imperium ga respekt i internasjonal politikk og styrket nasjonalfølelsen hjemme. Politikere brukte koloniale erobringer for å samle befolkningen og avlede oppmerksomhet fra innenriksproblemer. Rivaliseringen mellom stormaktene betydde at ingen ville fremstå som svakere enn sine konkurrenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-1-def-4',
      type: 'definition',
      title: 'Ideologiske drivkrefter',
      content: `**Sosialdarwinisme:**
Misbruk av Darwins evolusjonsteori til å hevde at det fantes et hierarki av raser, der den hvite rasen var overlegen. Kolonisering ble sett som naturens orden.

**Siviliseringsmisjon:**
Forestillingen om at europeere hadde en plikt til å "sivilisere" andre folk - bringe kristendom, utdanning og europeisk kultur. Rudyard Kipling kalte dette "den hvite manns byrde".

**Misjonering:**
Kristne misjonærer ønsket å spre sin religion og fikk ofte støtte fra kolonimaktene.

**Teknologisk overlegenhet:**
Europeernes teknologi (våpen, skip, medisin) ble tolket som bevis på kulturell overlegenhet.`,
    },
    {
      id: 'historie-9-1-example-1',
      type: 'example',
      title: 'Eksempel: "Den hvite manns byrde"',
      problem: 'Rudyard Kipling skrev diktet "The White Man\'s Burden" (1899). Hva sa diktet om europeernes syn på kolonisering?',
      solution: `**Kiplings budskap:**

Diktet oppfordret USA til å ta kontroll over Filippinene og argumenterte for at hvite hadde en plikt til å styre "halvt djevel og halvt barn" - som han beskrev de koloniserte folkene.

**Sentrale forestillinger:**
- Kolonisering var en byrde, ikke et privilegium
- De koloniserte var usiviliserte og trengte veiledning
- Hvite ofret seg for å hjelpe andre

**Kritikk:**
Diktet viser tydelig den rasistiske ideologien bak imperialismen. Det ignorerte kolonialismens vold og utnyttelse, og fremstilte undertrykkelse som velvilje.`,
    },
    {
      id: 'historie-9-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-9-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva var sosialdarwinisme, og hvordan ble det brukt til å rettferdiggjøre imperialismen?',
        hints: ['Tenk på hvordan biologiske teorier ble misbrukt'],
        solution: 'Sosialdarwinisme var en ideologi som misbrukte Darwins evolusjonsteori til å hevde at det fantes et hierarki av menneskeraser. Den påstod at den hvite rasen var overlegen og at kolonisering var naturens orden der de "sterkeste" dominerte de "svakeste". Dette ble brukt til å rettferdiggjøre imperialismen ved å fremstille den som naturlig og uunngåelig, snarere enn som valgt politikk. Sosialdarwinismen ga et vitenskapelig skinn til rasisme og utnyttelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-9-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-9-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvilken av drivkreftene bak imperialismen du mener var viktigst: økonomiske, politiske eller ideologiske. Begrunn svaret ditt.',
        hints: ['Vurder hvordan de ulike faktorene hang sammen', 'Bruk konkrete eksempler'],
        solution: 'Et godt svar vil vurdere alle tre faktorene og argumentere for at de hang sammen. Økonomiske faktorer (råvarer, markeder, kapital) drev mye av ekspansjonen, men politisk rivalisering forsterket tempoet - ingen ville falle bakpå. Ideologi rettferdiggjorde det hele og gjorde det akseptabelt. Man kan argumentere for at økonomiske interesser var grunnleggende, men at de andre faktorene var nødvendige for å mobilisere støtte og legitimere politikken. Svaret bør vise forståelse for at historiske fenomener sjelden har én enkelt årsak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-9-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft siviliseringsmisjonen som ideologi. Hvordan ble den brukt til å rettferdiggjøre imperialismen, og hvilke elementer av sannhet og usannhet inneholdt den?',
        hints: ['Tenk på hvordan ideologier kan inneholde både sannhet og selvbedrag'],
        solution: 'Siviliseringsmisjonen fremstilte kolonisering som å hjelpe andre folk gjennom utdanning, kristendom og utvikling. Elementer av sannhet: Det ble faktisk bygget skoler, sykehus og infrastruktur i mange kolonier. Misjonærer bidro til skriftspråk og utdanning. Noen koloniale embetsmenn hadde genuint ønske om å forbedre levekår. Elementer av selvbedrag: Ideologien ignorerte at koloniseringen primært tjente økonomiske interesser, at den medførte vold og undertrykkelse, og at afrikanske og asiatiske samfunn hadde egne sofistikerte kulturer og institusjoner. Konklusjon: Siviliseringsmisjonen var en ideologi som blandet genuine intensjoner hos noen med økonomisk egeninteresse og kulturell arroganse. Den gjorde det lettere for europeere å se bort fra de negative sidene ved koloniseringen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_9_2: TextbookChapter = {
  id: 'historie-9-2',
  courseId: 'historie',
  chapterNumber: '9.2',
  title: 'Afrika under kolonitiden',
  description: 'Kapløpet om Afrika og koloniseringens konsekvenser.',
  estimatedMinutes: 55,
  competenceGoals: ['kolonimakter og konsekvenser'],
  content: [
    {
      id: 'historie-9-2-intro',
      type: 'text',
      content: `## Kapløpet om Afrika

I 1870 kontrollerte europeiske makter bare ca. 10% av det afrikanske kontinentet, hovedsakelig kystområder. I 1914 var over 90% av Afrika under europeisk styre. Denne raske koloniseringen kalles **kapløpet om Afrika** (Scramble for Africa).

Koloniseringen skjedde gjennom en kombinasjon av diplomati, handel, misjonering og militær makt. De afrikanske samfunnene var ikke passive ofre, men aktive aktører som møtte denne utfordringen med ulike strategier. Noen valgte væpnet motstand, andre diplomatisk tilpasning, og noen så muligheter i samarbeid. Afrikanske ledere, handelsmenn og diplomater navigerte aktivt i denne perioden, selv om europeernes overlegne militærteknologi til slutt ga dem overtaket i de fleste konflikter.`,
    },
    {
      id: 'historie-9-2-def-1',
      type: 'definition',
      title: 'Berlin-konferansen 1884-85',
      content: `**Berlin-konferansen** var et møte mellom 14 europeiske stater (pluss USA og Det osmanske riket) for å regulere koloniseringen av Afrika.

**Viktige vedtak:**
- Prinsippet om "effektiv okkupasjon" - en makt måtte faktisk kontrollere et område for å ha krav på det
- Fri ferdsel på Kongo- og Nigerelven
- Forbud mot slavehandel (men ikke tvangsarbeid)
- Regler for hvordan nye kolonikrav skulle meldes

**Betydning:**
Konferansen legitimerte og systematiserte delingen av Afrika. Ingen afrikanske ledere var invitert. Grensene som ble trukket, delte ofte folkegrupper eller slo sammen rivaliserende grupper - noe som skapte problemer som varer til i dag.`,
    },
    {
      id: 'historie-9-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-9-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var Berlin-konferansen, og hvorfor var den viktig for Afrikas historie?',
        hints: ['Tenk på hvem som deltok og hvem som ikke deltok'],
        solution: 'Berlin-konferansen (1884-85) var et møte mellom europeiske makter for å regulere koloniseringen av Afrika. Den var viktig fordi den legitimerte og systematiserte delingen av kontinentet mellom europeiske makter. Prinsippet om effektiv okkupasjon satte fart i erobringene. Konferansen trakk grenser uten hensyn til afrikanske folk og samfunn, noe som skapte langvarige konflikter. Det er betegnende at ingen afrikanske ledere var invitert til å delta i beslutninger om sitt eget kontinent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-2-def-2',
      type: 'definition',
      title: 'Kolonimaktene i Afrika',
      content: `**Storbritannia:**
Kontrollerte et belte fra Egypt i nord til Sør-Afrika i sør ("fra Kairo til Kapp"). Viktige kolonier: Egypt, Sudan, Nigeria, Kenya, Rhodesia, Sør-Afrika.

**Frankrike:**
Dominerte Vest- og Nord-Afrika. Viktige kolonier: Algerie, Marokko, Tunisia, Senegal, Elfenbenskysten.

**Belgia:**
Kong Leopold IIs personlige eiendom Kongo-Fristaten (1885-1908), senere Belgisk Kongo. Kjent for ekstrem brutalitet.

**Tyskland:**
Tysk Øst-Afrika (Tanzania), Tysk Sørvest-Afrika (Namibia), Kamerun, Togo.

**Portugal:**
Angola, Mosambik, Guinea-Bissau.

**Italia:**
Libya, Eritrea, Italiensk Somaliland. Mislykket forsøk på å ta Etiopia i 1896.`,
    },
    {
      id: 'historie-9-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-9-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke to europeiske makter hadde flest kolonier i Afrika? Beskriv kort deres koloniale besittelser.',
        hints: ['Se på kartet over koloniale Afrika'],
        solution: 'Storbritannia og Frankrike hadde flest kolonier i Afrika. Storbritannia kontrollerte et belte fra Egypt i nord til Sør-Afrika i sør, inkludert Sudan, Nigeria, Kenya og Rhodesia. De ønsket å forbinde sine kolonier fra Kairo til Kapp. Frankrike dominerte Vest- og Nord-Afrika, med kolonier som Algerie, Marokko, Senegal og Elfenbenskysten. Frankrike hadde det største sammenhengende koloniale territoriet i Afrika.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-2-example-1',
      type: 'example',
      title: 'Eksempel: Kongo under Leopold II',
      problem: 'Hvordan ble Kongo styrt under kong Leopold II av Belgia?',
      solution: `**Kongo-Fristaten (1885-1908):**

Leopold II klarte gjennom diplomati å få Kongo som sin personlige eiendom - ikke en belgisk koloni, men kongens private land.

**Utnyttelse:**
- Befolkningen ble tvunget til å samle gummi og elfenben
- Brutale straffer for de som ikke oppfylte kvotene, inkludert avhugging av hender
- Gisseltagning av kvinner og barn for å tvinge menn til arbeid
- Estimert 10 millioner døde som følge av vold, sult og sykdom

**Avsløring:**
Journalister og misjonærer avslørte brutaliteten. E.D. Morels kampanje og Roger Casements rapport førte til internasjonal fordømmelse.

**Resultat:**
I 1908 måtte Leopold overgi Kongo til den belgiske staten. Forholdene bedret seg noe, men utnyttelsen fortsatte.`,
    },
    {
      id: 'historie-9-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-9-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv forholdene i Kongo under Leopold II. Hvorfor er dette et ekstremt eksempel på kolonialismens brutalitet?',
        hints: ['Tenk på tvangsarbeid, straffer og dødstall'],
        solution: 'Under Leopold II var Kongo-Fristaten kongens personlige eiendom. Befolkningen ble tvunget til å samle gummi under trussel om ekstrem vold. De som ikke oppfylte kvotene, ble straffet med pisking eller avhugging av hender. Kvinner og barn ble holdt som gisler. Estimert 10 millioner mennesker døde av vold, sult og sykdom. Dette er et ekstremt eksempel fordi det viser kolonialismens brutale virkelighet bak siviliseringspropagandaen, og hvordan profittjag kunne føre til systematisk terror mot en hel befolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-2-def-3',
      type: 'definition',
      title: 'Afrikansk handlekraft og motstand',
      content: `**Afrikanske aktører:**
Afrikanere var ikke passive ofre for koloniseringen. Afrikanske ledere, handelsmenn og diplomater tok aktive valg i møte med europeisk ekspansjon.

**Væpnet motstand:**
Mange afrikanske folk kjempet mot kolonisering. Zuluene i Sør-Afrika vant slaget ved Isandlwana (1879). Samori Ture i Vest-Afrika bygget et imperium og motstod fransk invasjon i 17 år med moderne våpen og taktikk.

**Etiopia - afrikansk seier:**
Det eneste afrikanske landet som beholdt sin uavhengighet. Keiser Menelik II moderniserte hæren, spilte europeiske makter mot hverandre, og beseiret Italia ved Adwa i 1896. Seieren ble et symbol på afrikansk motstandsevne.

**Strategisk tilpasning:**
Mange afrikanske ledere valgte pragmatisk samarbeid med kolonimaktene for å beskytte sine folk, beholde noe makt, eller styrke egen posisjon mot rivaler. Dette var aktive valg i en vanskelig situasjon, ikke bare underkastelse.

**Maji Maji-opprøret (1905-07):**
Oppstand mot tysk styre i Tanganyika. Viste fortsatt vilje til motstand. Ble brutalt slått ned, 75 000-300 000 døde.

**Senere motstand:**
Utover 1900-tallet vokste nasjonalistbevegelser ledet av afrikanske intellektuelle og politikere som til slutt førte til avkolonisering.`,
    },
    {
      id: 'historie-9-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-9-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor klarte Etiopia å forbli uavhengig mens resten av Afrika ble kolonisert?',
        hints: ['Tenk på militær styrke og diplomati'],
        solution: 'Etiopia klarte å forbli uavhengig av flere grunner: 1) Keiser Menelik II bygget opp en moderne hær med importerte våpen. 2) Ved slaget ved Adwa i 1896 beseiret etiopierne den italienske invasjonsstyrken fullstendig. 3) Etiopia hadde en sterk sentralisert stat og lang tradisjon for uavhengighet. 4) Menelik var dyktig diplomat som spilte europeiske makter mot hverandre. Seieren ved Adwa ble et symbol på afrikansk motstand og viste at europeisk seier ikke var uunngåelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-9-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-9-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan grensene som ble trukket under kolonitiden fortsatt påvirker Afrika i dag.',
        hints: ['Tenk på etniske grupper, konflikter og statsbygging'],
        solution: 'Grensene fra kolonitiden har hatt langvarige konsekvenser: 1) De delte ofte etniske grupper mellom flere stater, noe som skaper grensetvister og konflikter. 2) De slo sammen rivaliserende grupper i samme stat, noe som kan føre til indre konflikter. 3) Statene arvet administrative strukturer som ikke var tilpasset lokale forhold. 4) Grensene ble trukket etter europeiske interesser, ikke afrikanske behov - ofte som rette linjer gjennom ørkener eller langs elver. 5) Mange konflikter i dag, fra Sahel til Afrikas horn, kan spores tilbake til disse kunstige grensene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-9-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft hvordan afrikanere responderte på europeisk kolonisering. Hvilke ulike strategier benyttet afrikanske ledere og samfunn, og hva kan forklare deres valg?',
        hints: ['Tenk på at afrikanere var aktive aktører med ulike interesser og muligheter'],
        solution: 'Afrikanere responderte på kolonisering på mange måter: 1) Væpnet motstand - Mange valgte å kjempe, som zuluene og Samori Ture. Dette krevde militær styrke og vilje til store ofre. 2) Diplomatisk motstand - Ledere som Menelik II i Etiopia brukte diplomati og spilte europeere mot hverandre. 3) Strategisk samarbeid - Noen ledere så fordeler i allianser med europeere, enten for å styrke egen posisjon mot rivaler eller for å beskytte sitt folk. 4) Tilpasning - Mange måtte tilpasse seg nye realiteter mens de bevarte det de kunne av egen kultur og autonomi. Valgene avhang av: lokale maktforhold, tilgang til våpen, geografisk plassering, og vurdering av hva som tjente eget folk best. Det er viktig å se at afrikanere ikke var passive ofre, men tok aktive valg i en vanskelig situasjon. Historien ser forskjellig ut avhengig av perspektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_9_3: TextbookChapter = {
  id: 'historie-9-3',
  courseId: 'historie',
  chapterNumber: '9.3',
  title: 'Asia og kolonialisme',
  description: 'Britisk India, Kina og imperialismen i Asia.',
  estimatedMinutes: 50,
  competenceGoals: ['kolonimakter og konsekvenser'],
  content: [
    {
      id: 'historie-9-3-intro',
      type: 'text',
      content: `## Imperialismen i Asia

Asia opplevde imperialismen på ulike måter. India ble Storbritannias viktigste koloni - "juvelen i kronen". Kina ble aldri fullstendig kolonisert, men ble tvunget til å åpne seg for vestlig handel gjennom "ulike traktater". Sørøst-Asia ble delt mellom europeiske makter, mens Japan selv ble en imperialistmakt.

Imperialismen i Asia hadde dype røtter i handelsinteresser og viste seg gjennom ulike former for kontroll - fra direkte kolonistyre til økonomisk dominans.`,
    },
    {
      id: 'historie-9-3-def-1',
      type: 'definition',
      title: 'Britisk India',
      content: `**Det britiske ostindiske kompani:**
Et handelsselskap som gradvis tok politisk kontroll over India fra 1600-tallet. Etter det indiske opprøret i 1857 tok den britiske staten direkte styring.

**Britisk Raj (1858-1947):**
Perioden med direkte britisk styre over India. Dronning Victoria ble keiserinne av India i 1876.

**Styreform:**
- Visekonge representerte den britiske monarken
- Indiske fyrster beholdt delvis selvstyre under britisk overhøyhet
- Britiske embetsmenn og indiske "samarbeidsfolk" styrte
- Jernbaner, telegraf og utdanningssystem ble bygget ut

**Betydning:**
India var Storbritannias viktigste koloni - kilde til råvarer, soldater og marked for britiske varer.`,
    },
    {
      id: 'historie-9-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-9-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan Storbritannia gradvis tok kontroll over India, og hvorfor India ble kalt "juvelen i kronen".',
        hints: ['Tenk på Det britiske ostindiske kompani og hva India betydde økonomisk'],
        solution: 'Storbritannia tok kontroll over India gradvis gjennom Det britiske ostindiske kompani, som først drev handel og deretter tok politisk kontroll gjennom allianser og kriger. Etter det indiske opprøret i 1857 tok den britiske staten direkte styring (Britisk Raj). India ble kalt "juvelen i kronen" fordi kolonien var ekstremt verdifull: den leverte råvarer som bomull og te, var et stort marked for britiske industrivarer, bidro med soldater til det britiske imperiet, og ga enorm prestisje og inntekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-3-def-2',
      type: 'definition',
      title: 'Opiumskrigene og Kinas ydmykelse',
      content: `**Opiumshandelen:**
Storbritannia solgte opium fra India til Kina for å balansere handelsunderskuddet. Millioner av kinesere ble avhengige.

**Første opiumskrig (1839-42):**
Kina forsøkte å stoppe opiumsimporten. Storbritannia svarte med krig og vant. Resultatet var Nanjing-traktaten.

**Nanjing-traktaten (1842):**
- Kina måtte åpne fem havner for britisk handel
- Hongkong ble overført til Storbritannia
- Kina måtte betale stor krigserstatning
- Begynnelsen på "ulike traktater"

**Andre opiumskrig (1856-60):**
Storbritannia og Frankrike påtvang Kina flere innrømmelser, inkludert rett til å etablere ambassader i Beijing.

**"Ulike traktater":**
Avtaler der Kina ble tvunget til å gi vestlige makter privilegier som ekstraterritorialitet (utlendinger ble ikke dømt etter kinesisk lov).`,
    },
    {
      id: 'historie-9-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-9-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var opiumskrigene, og hvorfor kalles avtalene som fulgte for "ulike traktater"?',
        hints: ['Tenk på maktforholdet mellom partene'],
        solution: 'Opiumskrigene (1839-42 og 1856-60) var konflikter der Kina forsøkte å stoppe britisk opiumsimport, men tapte mot vestlig militærmakt. Avtalene kalles "ulike traktater" fordi de ble påtvunget Kina av militært overlegne makter og ga vestlige land enorme privilegier uten gjensidighet. Vestlige borgere fikk ekstraterritorialitet (fritak fra kinesisk lov), Kina måtte åpne havner for handel, gi fra seg territorier, og betale krigserstatninger. Dette var ikke forhandlede avtaler mellom likeverdige parter, men dikterte vilkår fra seierherrer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-3-def-3',
      type: 'definition',
      title: 'Sørøst-Asia og Stillehavet',
      content: `**Frankrike:**
Indokina (Vietnam, Laos, Kambodsja) ble fransk koloni fra 1880-årene.

**Nederland:**
Nederlandsk Øst-India (Indonesia) - verdifull koloni med krydder, gummi og olje.

**Storbritannia:**
Burma, Malaysia, Singapore - viktige for handel og strategisk plassering.

**USA:**
Tok Filippinene fra Spania i 1898. Guam og Hawaii ble også amerikanske.

**Japan:**
Etter Meiji-restaurasjonen (1868) moderniserte Japan raskt og ble selv imperialistmakt. Tok Taiwan (1895), Korea (1910) og deler av Kina.

**Eneste uavhengige:**
Thailand (Siam) forble uavhengig som buffersone mellom britiske og franske områder.`,
    },
    {
      id: 'historie-9-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-9-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan skilte Japan seg fra andre asiatiske land i møte med vestlig imperialisme?',
        hints: ['Tenk på Meiji-restaurasjonen og Japans respons'],
        solution: 'Japan skilte seg ut ved at landet raskt moderniserte seg etter Meiji-restaurasjonen i 1868. I stedet for å bli kolonisert, lærte Japan av vestlig teknologi og organisasjon og bygget opp sin egen industri og militærmakt. Japan ble selv en imperialistmakt som tok Taiwan fra Kina (1895), annekterte Korea (1910), og utvidet sin innflytelse i Manchuria og Kina. Japan viste at asiatiske land kunne motstå og til og med konkurrere med vestlige makter ved å adoptere deres metoder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-3-example-1',
      type: 'example',
      title: 'Eksempel: Bokseropprøret 1899-1901',
      problem: 'Hva var Bokseropprøret i Kina, og hva viste det om forholdet mellom Kina og stormaktene?',
      solution: `**Bokseropprøret:**

"Bokserne" var en kinesisk bevegelse som ville drive ut utlendinger og kristne. De trodde at ritualer gjorde dem usårbare for kuler.

**Forløp:**
- 1899-1900: Bokserne angrep utlendinger og kinesiske kristne
- De beleiret utenlandske legasjoner i Beijing i 55 dager
- En internasjonal styrke (8 land inkludert Japan) slo ned opprøret

**Konsekvenser:**
- Kina måtte betale enorm erstatning
- Utlandske tropper fikk rett til å stasjonere i Beijing
- Kinas ydmykelse ble forsterket

**Betydning:**
Opprøret viste kinesisk motstand mot imperialismen, men også Kinas svakhet overfor samlet vestlig militærmakt. Det forsterket nasjonalistiske følelser som til slutt førte til keiserdømmets fall i 1911.`,
    },
    {
      id: 'historie-9-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-9-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvordan Bokseropprøret viste både kinesisk motstand og stormaktenes dominans.',
        hints: ['Se på opprørets mål og resultat'],
        solution: 'Bokseropprøret viste kinesisk motstand gjennom et folkelig opprør mot utenlandsk dominans, misjonærer og kristne. Bevegelsen uttrykte sinne over de ulike traktatene og tapet av nasjonal verdighet. Samtidig viste nedslåelsen av opprøret stormaktenes dominans: åtte nasjoner sendte tropper som knuste opprøret, Kina ble tvunget til å betale enorm erstatning, og utlandske tropper fikk rett til å stasjonere i Beijing. Opprøret demonstrerte at kinesisk motstand alene ikke kunne overvinne vestlig militærmakt, men det styrket nasjonalistiske følelser som til slutt veltet keiserdømmet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-9-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-9-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign imperialismen i India og Kina. Hva var likt, og hva var forskjellig?',
        hints: ['Tenk på styringsform, grad av kontroll, og motstand'],
        solution: 'Likheter: Begge land ble utsatt for vestlig økonomisk utnyttelse, måtte åpne seg for vestlig handel, og opplevde at tradisjonelle strukturer ble utfordret. Begge så nasjonalistiske bevegelser vokse frem. Forskjeller: India ble direkte kolonisert og styrt av Storbritannia, mens Kina beholdt formell uavhengighet men ble tvunget til innrømmelser gjennom ulike traktater. India hadde én koloniherre, Kina ble "delt" mellom flere makter i interessesfærer. Britene bygget ut infrastruktur i India, mens Kina opplevde mer fragmentert utenlandsk innflytelse. Motstanden tok også ulike former.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-9-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft om opiumshandelen kan kalles en form for økonomisk krigføring. Begrunn svaret ditt.',
        hints: ['Tenk på hensikt, metoder og konsekvenser'],
        solution: 'Opiumshandelen kan argumenteres å være økonomisk krigføring fordi: 1) Storbritannia brukte bevisst opium for å balansere handelsunderskuddet med Kina - en kalkulert økonomisk strategi. 2) Da Kina forsøkte å stoppe handelen, svarte Storbritannia med militær makt. 3) Millioner av kinesere ble avhengige, noe som svekket samfunnet økonomisk og sosialt. 4) De påtvungne avtalene ga Storbritannia økonomiske privilegier. Motargument kan være at begrepet "krigføring" krever aktiv hensikt om å skade, mens britene primært var opptatt av profitt. Uansett viser det hvordan økonomiske interesser og militær makt hang sammen i imperialismen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_9_4: TextbookChapter = {
  id: 'historie-9-4',
  courseId: 'historie',
  chapterNumber: '9.4',
  title: 'Konsekvenser av kolonialismen',
  description: 'Langvarige virkninger av kolonitiden.',
  estimatedMinutes: 50,
  competenceGoals: ['kolonimakter og konsekvenser'],
  content: [
    {
      id: 'historie-9-4-intro',
      type: 'text',
      content: `## Kolonialismens varige spor

Kolonialismen formet verden vi lever i på grunnleggende måter. Økonomiske strukturer, politiske grenser, sosiale hierarkier og kulturelle mønstre fra kolonitiden påvirker fortsatt tidligere kolonier og kolonimakter.

Historikere og forskere diskuterer kolonialismens konsekvenser. De fleste er enige om at kolonialismen innebar undertrykkelse og utnyttelse, men det debatteres hvor mye av dagens utfordringer i tidligere kolonier som skyldes koloniarven versus andre faktorer. Noen peker også på at kolonitiden etterlot infrastruktur, utdanningsinstitusjoner og rettslige rammeverk som har hatt varig betydning.

Avkoloniseringen etter andre verdenskrig skapte nye stater, men arven fra kolonitiden forsvant ikke. Å forstå disse konsekvensene fra ulike perspektiver er viktig for å forstå dagens globale utfordringer.`,
    },
    {
      id: 'historie-9-4-def-1',
      type: 'definition',
      title: 'Økonomiske konsekvenser',
      content: `**Eksportøkonomier:**
Koloniene ble utviklet for å eksportere råvarer til Europa, ikke for å dekke egne behov. Mange land forble avhengige av eksport av få produkter.

**Ujevn utvikling:**
Infrastruktur (jernbaner, havner) ble bygget for å frakte råvarer ut, ikke for å binde landet sammen. Industri ble sjelden utviklet.

**Gjeldsproblemer:**
Mange nye stater arvet gjeld fra kolonitiden og måtte bruke ressurser på å betjene denne.

**Handelsstrukturer:**
Mønstre fra kolonitiden fortsatte - tidligere kolonier eksporterte råvarer og importerte industrivarer fra tidligere kolonimakter.

**"Brain drain":**
Kolonimaktene utdannet få, og etter uavhengigheten emigrerte mange utdannede til tidligere kolonimakter.`,
    },
    {
      id: 'historie-9-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-9-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva en "eksportøkonomi" er og hvordan dette preget tidligere kolonier.',
        hints: ['Tenk på hva koloniene produserte og for hvem'],
        solution: 'En eksportøkonomi er en økonomi som primært produserer varer for eksport til utlandet, ofte råvarer eller jordbruksprodukter. Under kolonitiden ble koloniene utviklet for å levere råvarer til Europa, ikke for å dekke egen befolknings behov. Dette preget tidligere kolonier ved at de forble avhengige av eksport av få produkter (monokulturer), hadde lite industri, og var sårbare for prissvingninger på verdensmarkedet. Infrastrukturen var rettet mot eksport, ikke nasjonal utvikling. Mange tidligere kolonier sliter fortsatt med denne arven.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-4-def-2',
      type: 'definition',
      title: 'Politiske konsekvenser',
      content: `**Kunstige grenser:**
Koloniale grenser delte ofte etniske grupper eller slo sammen rivaliserende grupper, noe som skapte konflikter etter uavhengigheten.

**Statsstrukturer:**
Nye stater arvet koloniale maktstrukturer som ikke var forankret i lokale tradisjoner. Autoritære tendenser kunne fortsette.

**Politisk ustabilitet:**
Mange tidligere kolonier opplevde kupp, borgerkriger og diktaturer i tiårene etter uavhengigheten.

**Klientstater:**
Under den kalde krigen støttet tidligere kolonimakter ofte autoritære regimer som tjente deres interesser.

**Nasjonsbygging:**
Å skape nasjonal identitet i stater med mange etniske grupper og språk var en stor utfordring.`,
    },
    {
      id: 'historie-9-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-9-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor førte de kunstige grensene fra kolonitiden til konflikter i mange afrikanske og asiatiske land?',
        hints: ['Tenk på etniske grupper og nasjonal identitet'],
        solution: 'De kunstige grensene førte til konflikter fordi: 1) De delte ofte etniske grupper mellom flere land, slik at folk med samme språk og kultur ble borgere i forskjellige stater. 2) De slo sammen grupper med lang historie av rivalisering eller konflikt i samme stat. 3) Grensene ble trukket etter europeiske interesser, ofte som rette linjer, uten hensyn til lokale forhold. 4) Når land ble uavhengige, måtte de bygge nasjonal identitet i stater der mange følte sterkere lojalitet til egen etnisk gruppe enn til staten. Dette har bidratt til borgerkriger, separatistbevegelser og grensekonflikter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-4-def-3',
      type: 'definition',
      title: 'Sosiale og kulturelle konsekvenser',
      content: `**Språk:**
Europeiske språk (engelsk, fransk, portugisisk) ble offisielle språk i mange tidligere kolonier og brukes fortsatt i utdanning og administrasjon.

**Utdanningssystemer:**
Koloniale utdanningssystemer ble ofte videreført, med fokus på europeisk kunnskap fremfor lokal.

**Religion:**
Kristendommen spredte seg gjennom misjonering og er i dag dominerende i deler av Afrika og Stillehavet.

**Rasisme og hierarkier:**
Koloniale rasehierarkier skapte varige sosiale skillelinjer, for eksempel i Sør-Afrika (apartheid til 1994).

**Kulturell fremmedgjøring:**
Kolonialismen devaluerte afrikanske og asiatiske kulturer, noe som påvirket selvbilde og identitet.`,
    },
    {
      id: 'historie-9-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-9-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gi tre eksempler på hvordan kolonialismen fortsatt påvirker kultur og samfunn i tidligere kolonier.',
        hints: ['Tenk på språk, utdanning, religion'],
        solution: 'Tre eksempler: 1) Språk - europeiske språk som engelsk og fransk er fortsatt offisielle språk og brukes i utdanning og administrasjon i mange afrikanske land, selv om befolkningen snakker andre morsmål. 2) Religion - kristendommen spredte seg gjennom kolonial misjonering og er nå dominerende i mange tidligere kolonier, ofte blandet med lokale tradisjoner. 3) Utdanningssystemer - mange land har beholdt utdanningssystemer som prioriterer europeisk kunnskap og historie fremfor lokal, noe som påvirker identitet og verdensbilde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-4-example-1',
      type: 'example',
      title: 'Eksempel: Avkolonisering',
      problem: 'Hvordan foregikk avkoloniseringen etter andre verdenskrig?',
      solution: `**Avkoloniseringen (1945-1975):**

Etter andre verdenskrig mistet kolonimaktene evne og vilje til å opprettholde imperiene.

**Faktorer:**
- Kolonimaktene var svekket etter krigen
- Nasjonalistbevegelser i koloniene krevde uavhengighet
- USA og Sovjetunionen støttet avkolonisering (av ulike grunner)
- FN fremmet selvbestemmelse

**Ulike veier til uavhengighet:**
- Forhandlet overgang: India (1947), Ghana (1957)
- Væpnet kamp: Algeria (1962), Vietnam, Angola, Mosambik
- Blandet: Kenya (Mau Mau-opprøret + forhandlinger)

**Resultat:**
De fleste kolonier var uavhengige innen 1970-tallet. Namibia ble uavhengig i 1990, Øst-Timor i 2002.

**Utfordringer:**
Nye stater arvet koloniale strukturer og problemer som fortsatt påvirker dem.`,
    },
    {
      id: 'historie-9-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-9-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor avkoloniseringen skjedde raskt etter andre verdenskrig.',
        hints: ['Tenk på endringer i kolonimaktene og i koloniene'],
        solution: 'Avkoloniseringen skjedde raskt etter andre verdenskrig på grunn av flere faktorer: 1) Kolonimaktene var økonomisk og militært svekket etter krigen og hadde ikke ressurser til å opprettholde imperiene. 2) Nasjonalistbevegelser i koloniene hadde vokst seg sterke og krevde uavhengighet, ofte ledet av folk som hadde kjempet i krigen eller fått utdanning i Europa. 3) USA og Sovjetunionen støttet begge avkolonisering av ideologiske og strategiske grunner. 4) FN fremmet selvbestemmelse som et prinsipp. 5) Krigens retorikk om frihet og demokrati gjorde det vanskelig å forsvare kolonialisme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-9-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-9-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft ulike faktorer som kan forklare utviklingen i tidligere kolonier etter uavhengigheten. Vurder både historiske og nåtidige forhold.',
        hints: ['Tenk på koloniarv, lokale forhold, internasjonal politikk og egne valg'],
        solution: 'Flere faktorer påvirker utviklingen i tidligere kolonier: Historiske faktorer: Kolonimaktene etterlot strukturer (eksportøkonomier, kunstige grenser) som skapte utfordringer. Manglende utdanningsinstitusjoner og infrastruktur gjorde nasjonsbygging vanskelig. Lokale faktorer: Politiske valg etter uavhengigheten har variert. Noen land har hatt god ledelse og stabil utvikling (som Botswana), andre har slitt med korrupsjon og konflikter. Lokale eliter har også ansvar for utviklingen. Internasjonale faktorer: Den kalde krigen førte til at stormakter støttet diktatorer. Urettferdige handelsregler og gjeldsproblemer har hemmet utvikling. Samtidig har bistand og investeringer bidratt positivt noen steder. Konklusjon: Utviklingen forklares best av en kombinasjon av historisk arv, lokale valg og internasjonale rammebetingelser. Det er for enkelt å legge alt ansvar enten på kolonimaktene eller på landene selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-9-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-9-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg et tidligere kolonisert land og undersøk hvordan koloniarven fortsatt påvirker det i dag. Skriv en kort analyse.',
        hints: ['Velg et land du kjenner til, se på økonomi, politikk og kultur'],
        solution: 'Et eksempel med India: Økonomi - India var lenge preget av eksport av råvarer og avhengighet av britisk handel, men har utviklet egen industri. Politikk - India arvet et parlamentarisk system fra Storbritannia som har fungert relativt godt, men også konflikter knyttet til religiøse skillelinjer forsterket av kolonial splitt-og-hersk-politikk (deling av India/Pakistan 1947). Kultur - engelsk er fortsatt elitespråk og utdanningsspråk, cricket er nasjonalsport, og jernbanesystemet fra kolonitiden brukes fortsatt. Svarene vil variere etter valgt land, men bør vise forståelse for kompleksiteten i koloniarven.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Kulturmøter og kommunikasjon
// ============================================================================

export const CHAPTER_HISTORIE_10_1: TextbookChapter = {
  id: 'historie-10-1',
  courseId: 'historie',
  chapterNumber: '10.1',
  title: 'Kulturmøter gjennom historien',
  description: 'Møter mellom kulturer og deres konsekvenser.',
  estimatedMinutes: 50,
  competenceGoals: ['kommunikasjon og kulturmøter'],
  content: [
    {
      id: 'historie-10-1-intro',
      type: 'text',
      content: `## Når kulturer møtes

Gjennom hele historien har mennesker fra ulike kulturer møtt hverandre. Disse møtene har ført til utveksling av ideer, varer og teknologi, men også til konflikter, undertrykkelse og misforståelser.

Kulturmøter kan studeres på mange nivåer - fra enkeltpersoners opplevelser til storskala migrasjoner og imperiers ekspansjon. Ved å forstå mønstre i historiske kulturmøter kan vi bedre forstå dagens globaliserte verden.`,
    },
    {
      id: 'historie-10-1-def-1',
      type: 'definition',
      title: 'Kulturmøter - begreper',
      content: `**Kulturmøte:**
Situasjoner der mennesker med ulik kulturell bakgrunn kommer i kontakt med hverandre, gjennom handel, migrasjon, erobring eller andre former for utveksling.

**Akkulturasjon:**
Prosessen der en kultur tar opp elementer fra en annen kultur. Kan være gjensidig eller ensidig, frivillig eller tvungen.

**Assimilering:**
Når en minoritet gradvis tar opp majoritetskulturen og mister sin opprinnelige kultur.

**Synkretisme:**
Sammenblanding av elementer fra ulike kulturer eller religioner til noe nytt.

**Kulturimperialisme:**
Når en dominerende kultur påtvinges andre gjennom makt, ofte knyttet til politisk eller økonomisk dominans.`,
    },
    {
      id: 'historie-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom akkulturasjon og assimilering med egne ord.',
        hints: ['Tenk på graden av kulturendring og hvem som endrer seg'],
        solution: 'Akkulturasjon er når en kultur tar opp elementer fra en annen, men beholder sin grunnleggende identitet. For eksempel når nordmenn adopterer pizza som hverdagsmat. Assimilering er mer omfattende - det innebærer at en gruppe gradvis mister sin opprinnelige kultur og blir del av en annen. For eksempel når innvandrere over generasjoner mister morsmålet og tradisjonene og blir helt integrert i majoritetskulturen. Akkulturasjon kan være gjensidig, mens assimilering vanligvis går én vei.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-1-def-2',
      type: 'definition',
      title: 'Historiske kulturmøter',
      content: `**Silkeveien:**
Handelsnettverk mellom Kina og Middelhavet (ca. 200 f.Kr. - 1450 e.Kr.). Spredte varer, ideer, religion og sykdommer.

**Den islamske ekspansjonen:**
Fra 600-tallet spredte islam og arabisk kultur seg fra Arabia til Spania i vest og Indonesia i øst. Førte til kulturutveksling og vitenskapelig fremgang.

**Vikingtiden:**
Nordiske folk reiste, handlet og bosatte seg fra Nord-Amerika til Bysants. Kulturutveksling i alle retninger.

**Oppdagelsesreisene:**
Fra 1400-tallet etablerte europeere kontakt med Amerika, Afrika og Asia. Førte til massiv kulturutveksling - og katastrofer som sykdommer og slaveri.

**Den colombianske utvekslingen:**
Utveksling av planter, dyr, sykdommer og mennesker mellom Europa og Amerika etter 1492.`,
    },
    {
      id: 'historie-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var Silkeveien, og hvilken betydning hadde den for kulturmøter mellom øst og vest?',
        hints: ['Tenk på hva som ble utvekslet og over hvor lang tid'],
        solution: 'Silkeveien var et nettverk av handelsruter som forbandt Kina med Middelhavet over ca. 1600 år. Den hadde enorm betydning for kulturmøter: 1) Varer som silke, krydder, glass og edelstener ble handlet. 2) Religioner som buddhisme, kristendom og islam spredte seg langs rutene. 3) Teknologi som papir, krutt og kompasset ble overført fra Kina til Europa. 4) Kunst, vitenskap og ideer ble utvekslet. 5) Også sykdommer spredte seg - svartedauden kom trolig langs disse rutene. Silkeveien viser hvordan handel driver kulturutveksling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-1-example-1',
      type: 'example',
      title: 'Eksempel: Den colombianske utvekslingen',
      problem: 'Hva innebar den colombianske utvekslingen, og hvilke konsekvenser hadde den?',
      solution: `**Den colombianske utvekslingen:**

Etter 1492 ble to verdener som hadde vært isolert i over 10 000 år, forbundet.

**Fra Amerika til Europa/Afrika/Asia:**
- Mais, poteter, tomater, kakao, tobakk, gummi
- Sølv og gull
- Disse avlingene økte matproduksjonen globalt

**Fra Europa/Afrika/Asia til Amerika:**
- Hvete, ris, sukkerrør, kaffe
- Hester, kuer, griser, sauer
- Sykdommer: kopper, meslinger, influensa

**Konsekvenser:**
- Urfolksbefolkningen i Amerika ble dramatisk redusert av sykdommer (opp til 90% i noen områder)
- Slaveri ble innført for å erstatte arbeidskraft
- Globale matrevolusjoner - poteten i Europa, maisen i Afrika
- Økologiske endringer - nye arter endret landskaper`,
    },
    {
      id: 'historie-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvordan den colombianske utvekslingen førte til både fremgang og katastrofe.',
        hints: ['Tenk på mat, sykdommer og befolkning'],
        solution: 'Fremgang: Nye avlinger som poteter og mais økte matproduksjonen globalt og bidro til befolkningsvekst i Europa, Afrika og Asia. Hester gjorde jordbruk og transport mer effektivt i Amerika. Handel skapte økonomisk vekst. Katastrofe: Sykdommer fra Europa (kopper, meslinger) utryddet opp til 90% av urfolksbefolkningen i noen områder, da de ikke hadde immunitet. Dette muliggjorde europeisk erobring og førte til slaveri for å erstatte den tapte arbeidskraften. Den colombianske utvekslingen viser hvordan kulturmøter kan ha både positive og negative konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-1-def-3',
      type: 'definition',
      title: 'Maktforhold i kulturmøter',
      content: `**Asymmetriske kulturmøter:**
Møter der én part har mer makt enn den andre, ofte gjennom militær styrke, teknologi eller økonomi. Kolonialismen er et tydelig eksempel.

**Kulturell hegemoni:**
Når én kulturs verdier og normer blir dominerende og tas for gitt som "naturlige" eller "universelle".

**Motstand og tilpasning:**
Undertrykte grupper responderer ulikt på dominans - fra væpnet motstand til strategisk tilpasning og kulturell bevaring i det skjulte.

**"Hybride" kulturer:**
Nye kulturelle uttrykk som oppstår i møtet mellom kulturer, verken helt den ene eller den andre.`,
    },
    {
      id: 'historie-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva menes med "asymmetriske kulturmøter"? Gi et historisk eksempel.',
        hints: ['Tenk på maktforhold mellom partene'],
        solution: 'Asymmetriske kulturmøter er møter der partene har ulik makt, slik at utvekslingen ikke skjer på like vilkår. Den sterkere parten kan påtvinge sin kultur, mens den svakere må tilpasse seg. Et historisk eksempel er møtet mellom europeere og urfolk i Amerika etter 1492. Europeerne hadde våpen, sykdommer urfolk ikke hadde immunitet mot, og organisatoriske ressurser som gjorde dem dominerende. De kunne påtvinge religion, språk og verdier, mens urfolks kulturer ble undertrykt eller ødelagt. Et annet eksempel er kolonialismen i Afrika og Asia.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft påstanden: "Kulturmøter har alltid ført til både positiv utveksling og konflikter." Bruk historiske eksempler.',
        hints: ['Tenk på ulike typer kulturmøter gjennom historien'],
        solution: 'Påstanden har mye for seg. Silkeveien viser positiv utveksling (handel, ideer, teknologi) men også spredning av sykdommer. Den colombianske utvekslingen ga nye avlinger som økte matproduksjonen, men også katastrofale epidemier. Vikingtiden innebar både voldelige raid og fredelig handel og bosetting. Selv innenfor enkeltmøter ser vi begge tendenser - europeere i Asia drev handel, men også opiumskriger. Imidlertid var noen møter mer preget av det ene enn det andre. Maktforholdet mellom partene påvirker ofte utfallet - mer symmetriske møter tenderer mot mer gjensidig utveksling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-10-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign et kulturmøte fra fortiden med dagens globalisering. Hva er likt og hva er forskjellig?',
        hints: ['Tenk på hastighet, omfang og maktforhold'],
        solution: 'Likheter: Kulturmøter i dag, som i fortiden, fører til utveksling av varer, ideer, teknologi og kulturuttrykk. Migrasjon fører til at mennesker med ulik bakgrunn lever sammen. Maktforhold påvirker hvilke kulturer som dominerer. Konflikter kan oppstå. Forskjeller: Dagens globalisering er mye raskere (internett, fly) og mer omfattende (når nesten alle). Kommunikasjon er øyeblikkelig. Fysisk reise er ikke nødvendig for kulturpåvirkning. Samtidig er dagens systemer mer regulert (menneskerettigheter, internasjonale avtaler), selv om maktforhold fortsatt er ulike. Global kultur er mer blandet og hybrid enn før.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_10_2: TextbookChapter = {
  id: 'historie-10-2',
  courseId: 'historie',
  chapterNumber: '10.2',
  title: 'Handel og økonomisk globalisering',
  description: 'Verdenshandelens utvikling og økonomiske forbindelser.',
  estimatedMinutes: 50,
  competenceGoals: ['handel og økonomiske systemer'],
  content: [
    {
      id: 'historie-10-2-intro',
      type: 'text',
      content: `## Verdenshandelens historie

Handel mellom fjerne regioner har funnet sted i tusenvis av år. Fra Silkeveien til dagens containerskip har handel knyttet verden sammen økonomisk og kulturelt.

Handelen har endret seg dramatisk - fra luksusvarer for eliten til massevarer for alle. Handelsnettverk har formet imperier, skapt rikdom og fattigdom, og bidratt til å forme den verden vi lever i.`,
    },
    {
      id: 'historie-10-2-def-1',
      type: 'definition',
      title: 'Tidlig verdenshandel',
      content: `**Silkeveien (ca. 200 f.Kr. - 1450 e.Kr.):**
Handelsruter mellom Kina og Middelhavet. Silke, krydder, edelstener og ideer ble utvekslet.

**Det indiske hav:**
Monsunvindene muliggjorde regelmessig sjøhandel mellom Øst-Afrika, Arabia, India og Sørøst-Asia fra antikken.

**Hansaforbundet (1200-1600-tallet):**
Nordtyske byer som dominerte handelen i Nord-Europa og Østersjøen. Bergen var et viktig hansacontor.

**Karakteristika:**
- Handel med luksusvarer: krydder, silke, edelstener
- Lang reisetid og høy risiko
- Begrenset volum, høy verdi
- Handelen foregikk via mange mellomledd`,
    },
    {
      id: 'historie-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvorfor var krydder så verdifulle at europeere var villige til å reise til den andre siden av verden for å få tak i dem?',
        hints: ['Tenk på hva krydder ble brukt til og tilgjengelighet'],
        solution: 'Krydder var ekstremt verdifulle av flere grunner: 1) De kunne ikke dyrkes i Europa og måtte importeres fra Asia. 2) Reisen var lang og farlig, noe som økte prisen. 3) Krydder ble brukt til å konservere og smaksette mat i en tid uten kjøleskap. 4) De ble brukt i medisin og parfyme. 5) Krydder var statussymboler - de rike viste sin velstand ved å servere sterkt krydret mat. 6) Mange mellomledd tok hver sin fortjeneste langs handelskjedene. Pepper kunne være verdt sin vekt i gull.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-2-def-2',
      type: 'definition',
      title: 'Handelskompaniene',
      content: `**Handelskompanier:**
Selskaper med statlig monopol på handel med bestemte regioner. Blant de første "aksjeselskapene" med mange investorer.

**Det nederlandske ostindiske kompani (VOC, 1602-1799):**
Verdens første store aksjeselskap. Handlet med krydder fra Indonesia og etablerte kolonier.

**Det britiske ostindiske kompani (1600-1874):**
Dominerte handelen med India og tok gradvis politisk kontroll. Drev opiumshandel med Kina.

**Merkantilisme:**
Økonomisk teori der staten skulle fremme eksport og begrense import for å samle edelmetaller. Kolonier var viktige kilder til råvarer og markeder.

**Triangelhandelen:**
Handel mellom Europa, Afrika og Amerika: europeiske varer til Afrika, slaver til Amerika, sukker og råvarer til Europa.`,
    },
    {
      id: 'historie-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-10-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var triangelhandelen, og hvordan hang den sammen med slaveriet?',
        hints: ['Tenk på de tre hjørnene: Europa, Afrika, Amerika'],
        solution: 'Triangelhandelen var et handelssystem mellom tre kontinenter: 1) Skip fra Europa seilte til Afrika med varer som tekstiler, våpen og sprit. 2) I Afrika ble varene byttet mot slaver som ble fraktet til Amerika under forferdelige forhold (middelpassasjen). 3) I Amerika ble slavene solgt, og skipene lastet med sukker, bomull, tobakk og andre råvarer som ble fraktet tilbake til Europa. Slaveriet var selve motoren i dette systemet - slavearbeid produserte de verdifulle varene, og slavehandelen ga fortjeneste på hver etappe. Millioner av afrikanere ble tvangsflyttet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-2-def-3',
      type: 'definition',
      title: 'Industrialiseringens innvirkning på verdenshandelen',
      content: `**Frihandel:**
Fra 1800-tallet ble merkantilismen erstattet av frihandelsidealer - mindre toll og statlig inngripen. Storbritannia ledet an.

**Ny teknologi:**
- Dampskip reduserte reisetiden dramatisk
- Jernbaner fraktet varer til havner
- Telegrafen muliggjorde rask kommunikasjon

**Nye varer:**
Handel ble ikke lenger bare luksusvarer, men massehandel med industrivarer, mat og råvarer.

**Suezkanalen (1869):**
Forkortet reisen mellom Europa og Asia med uker.

**Gullstandarden:**
De fleste land knyttet sin valuta til gull, noe som forenklet internasjonal handel.

**Første globalisering (1870-1914):**
Periode med rask vekst i verdenshandelen, investeringer og migrasjon. Handelen som andel av verdensøkonomien nådde ikke samme nivå igjen før 1970-tallet.`,
    },
    {
      id: 'historie-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-10-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvordan den industrielle revolusjonen endret verdenshandelen.',
        hints: ['Tenk på teknologi, transportmidler og hva som ble handlet'],
        solution: 'Den industrielle revolusjonen endret verdenshandelen på flere måter: 1) Ny teknologi som dampskip og jernbaner gjorde transport raskere og billigere. 2) Industrien trengte råvarer fra hele verden og markeder for sine produkter. 3) Handelen gikk fra luksusvarer til massevarer - tekstiler, kull, jern, mat. 4) Kommunikasjon ble enklere med telegrafen. 5) Suezkanalen forkortet reiser. 6) Frihandelsidealer erstattet merkantilismen. 7) Volumet økte dramatisk - den første "globaliseringen" (1870-1914). Handelen ble både omfattende og raskere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-2-example-1',
      type: 'example',
      title: 'Eksempel: Norsk handel gjennom tidene',
      problem: 'Hvordan har Norge vært del av verdenshandelen gjennom historien?',
      solution: `**Norsk handelshistorie:**

**Vikingtiden (800-1050):**
Handel med pels, hvalbein og slaver mot sølv, silke og vin. Handelsruter fra Hedeby til Bysants.

**Hansatiden (1200-1500-tallet):**
Tørrfisk fra Nord-Norge ble eksportert via Bergen til Europa. Hanseatene kontrollerte handelen.

**Trelasthandel (1500-1800-tallet):**
Norsk tømmer til skipsindustrien og bygging i Europa.

**Sjøfartsnasjon (1800-tallet):**
Norge hadde verdens tredje største handelsflåte. Norske skip fraktet andres varer.

**Olje og gass (1970-tallet - i dag):**
Norsk økonomi ble transformert av olje- og gasseksport, som gjorde Norge til et av verdens rikeste land.

Norge har alltid vært avhengig av internasjonal handel på grunn av begrenset hjemmemarked og naturressurser.`,
    },
    {
      id: 'historie-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-10-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor har Norge alltid vært avhengig av internasjonal handel?',
        hints: ['Tenk på geografi, ressurser og befolkning'],
        solution: 'Norge har vært avhengig av internasjonal handel på grunn av: 1) Liten befolkning som begrenser hjemmemarkedet for varer og tjenester. 2) Lang kystlinje som gjør sjøfart naturlig. 3) Begrensede muligheter for jordbruk - avhengig av å importere mat. 4) Rike naturressurser (fisk, tømmer, olje) som det finnes mer av enn landet selv trenger. 5) Behov for varer som ikke kan produseres lokalt. Norge har alltid eksportert det vi har mye av (fisk, tømmer, olje, shipping-tjenester) og importert det vi mangler (korn, industrivarer). Handel har vært livsviktig for norsk økonomi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-10-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan verdenshandelen har bidratt til både velstand og ulikhet gjennom historien.',
        hints: ['Tenk på hvem som har tjent og hvem som har tapt'],
        solution: 'Verdenshandelen har skapt velstand gjennom spesialisering, effektivitet og tilgang til varer. Land har kunnet fokusere på det de er best på. Nye produkter og ideer har spredt seg. Imidlertid har gevinsten vært ujevnt fordelt. Under kolonialismen ble kolonier tvunget til å eksportere råvarer billig og kjøpe industrivarer dyrt. Slaveriet var direkte knyttet til handel. Mektige land satte reglene til sin fordel. I dag ser vi fortsatt at rike land setter handelsregler, mens fattige land ofte eksporterer råvarer med lav verdi. Handel har skapt enorm global velstand, men fordelingen har ofte fulgt maktforhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-10-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign "den første globaliseringen" (1870-1914) med dagens globalisering. Hva er likt og hva er forskjellig?',
        hints: ['Tenk på teknologi, handelsmønstre og regulering'],
        solution: 'Likheter: Begge perioder kjennetegnes av rask vekst i handel, investeringer og migrasjon over landegrenser. Teknologisk utvikling drev begge (dampskip/telegraf da, containerskip/internett nå). Frihandelsidealer var/er dominerende. Ulikhet mellom regioner var/er et tema. Forskjeller: Dagens globalisering er mer omfattende - inkluderer tjenester og data, ikke bare varer. Teknologien er raskere (øyeblikkelig kommunikasjon). Det finnes flere internasjonale institusjoner (WTO, IMF). Flere land deltar aktivt (Kina, India). Migrasjon er mer regulert. Den første globaliseringen endte med verdenskrig - vi håper dagens varer lenger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_10_3: TextbookChapter = {
  id: 'historie-10-3',
  courseId: 'historie',
  chapterNumber: '10.3',
  title: 'Matproduksjon og ressurser',
  description: 'Jordbruk, ressursforvaltning og bærekraft i historisk perspektiv.',
  estimatedMinutes: 45,
  competenceGoals: ['matproduksjon og naturressurser - bærekraft'],
  content: [
    {
      id: 'historie-10-3-intro',
      type: 'text',
      content: `## Mat og sivilisasjon

Matproduksjon har vært grunnlaget for alle sivilisasjoner. Jordbruksrevolusjonen for ca. 10 000 år siden var kanskje den viktigste endringen i menneskehetens historie, og senere jordbruksrevolusjoner har fortsatt å forme samfunn.

Hvordan mennesker har produsert, fordelt og konsumert mat forteller oss mye om maktforhold, teknologi og forholdet til naturen.`,
    },
    {
      id: 'historie-10-3-def-1',
      type: 'definition',
      title: 'Jordbruksrevolusjonene',
      content: `**Den neolittiske revolusjon (ca. 10 000 f.Kr.):**
Overgangen fra jeger-sanker-samfunn til jordbruk. Begynte i Midtøsten ("den fruktbare halvmåne") og spredte seg.

**Konsekvenser:**
- Bofaste samfunn og byer
- Befolkningsvekst
- Spesialisering og sosiale hierarkier
- Privat eiendom og arv

**Den andre jordbruksrevolusjonen (1700-1800-tallet):**
Forbedrede metoder i Europa: vekselbruk, nye redskaper, avl av dyr, innhegning av fellesarealer.

**Den grønne revolusjonen (1960-tallet):**
Nye kornsorter, kunstgjødsel, plantevernmidler og irrigasjon økte avlingene dramatisk, særlig i Asia.`,
    },
    {
      id: 'historie-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-10-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor den neolittiske revolusjonen regnes som en av de viktigste endringene i menneskehetens historie.',
        hints: ['Tenk på hvordan livet endret seg fra jeger-sanker til bonde'],
        solution: 'Den neolittiske revolusjonen var viktig fordi den fundamentalt endret hvordan mennesker levde: 1) Folk ble bofaste i stedet for å vandre. 2) Matoverskudd muliggjorde befolkningsvekst. 3) Ikke alle trengte å jobbe med mat - spesialisering oppstod (håndverkere, prester, krigere). 4) Byer og sivilisasjoner ble mulig. 5) Sosiale hierarkier og ulikhet utviklet seg. 6) Privat eiendom og arv ble viktig. 7) Menneskets forhold til naturen endret seg - fra å tilpasse seg til å forme den. Nesten alle aspekter ved samfunnet vi kjenner i dag har røtter i denne overgangen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-3-def-2',
      type: 'definition',
      title: 'Globale matplanter',
      content: `**Hvete, ris og mais:**
De tre viktigste kornsortene som til sammen gir over 40% av menneskehetens kalorier.

**Den colombianske utvekslingen:**
Etter 1492 spredte amerikanske planter seg globalt:
- **Poteten:** Ble basismat i Europa, særlig Irland og Nord-Europa
- **Mais:** Viktig i Afrika og deler av Europa
- **Tomaten:** Transformerte italiensk mat
- **Sukkerrør:** Fra Asia til Amerika, drevet av slaveri

**Monokulturer:**
Dyrking av én avling over store områder. Effektivt, men sårbart for sykdommer og prisfall.

**Avhengighet:**
Mange regioner ble avhengige av én importert avling - da poteten sviktet i Irland (1845-52), døde over én million.`,
    },
    {
      id: 'historie-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-10-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan endret poteten matproduksjonen i Europa?',
        hints: ['Tenk på næringsinnhold, avlingsvolum og befolkningsvekst'],
        solution: 'Poteten endret europeisk matproduksjon dramatisk: 1) Den ga flere kalorier per arealenhet enn korn. 2) Den vokste på jord som var for dårlig for korn. 3) Den var næringsrik og kunne utgjøre basis for kostholdet. 4) Den tålte nordlig klima bedre enn mange kornsorter. 5) Dette bidro til befolkningsvekst i Nord-Europa på 1700-1800-tallet. 6) Poteten ble særlig viktig for fattige bønder og arbeidere. Samtidig skapte avhengigheten sårbarhet - da potetpesten rammet Irland, førte det til en katastrofe med over én million døde og massiv emigrasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-3-def-3',
      type: 'definition',
      title: 'Ressursforvaltning',
      content: `**Allmenningen:**
Felles ressurser som beite, skog og fiskevann, tradisjonelt forvaltet av lokalsamfunnet.

**Innhegningsbevegelsen (enclosure):**
I England ble allmenninger privatisert fra 1700-tallet. Bønder mistet rettigheter, men produktiviteten økte.

**Overbeskatning:**
Når ressurser utnyttes raskere enn de fornyes. Eksempler: overfiske, avskoging, utarming av jord.

**Bærekraft:**
Å bruke ressurser på en måte som ikke ødelegger for fremtidige generasjoner.

**Malthus (1798):**
Thomas Malthus advarte om at befolkningsvekst ville overstige matproduksjonen. Har ikke slått til globalt, men lokale kriser har bekreftet bekymringen.`,
    },
    {
      id: 'historie-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-10-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var innhegningsbevegelsen, og hvilke konsekvenser hadde den?',
        hints: ['Tenk på hvem som vant og hvem som tapte'],
        solution: 'Innhegningsbevegelsen (enclosure) var privatiseringen av tidligere felles jordbruksland i England fra 1700-tallet. Konsekvenser: 1) Rike bønder og godseiere fikk kontroll over mer land. 2) Små bønder og jordløse mistet tilgang til beite og ressurser. 3) Mange måtte forlate landsbygda og ble arbeidere i byene. 4) Dette bidro til industrialiseringen ved å skape arbeidskraft. 5) Jordbruket ble mer effektivt med større enheter og nye metoder. 6) Sosiale bånd og tradisjonelle rettigheter ble brutt. Innhegningen viser hvordan endringer i ressursforvaltning kan ha store sosiale konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-3-example-1',
      type: 'example',
      title: 'Eksempel: Den grønne revolusjonen',
      problem: 'Hva var den grønne revolusjonen, og hva var dens fordeler og ulemper?',
      solution: `**Den grønne revolusjonen (1960-tallet - 1980-tallet):**

En serie innovasjoner som økte matproduksjonen dramatisk, særlig i Asia.

**Innovasjoner:**
- Nye høytytende kornsorter (hvete, ris)
- Kunstgjødsel
- Plantevernmidler
- Irrigasjon
- Mekanisering

**Fordeler:**
- Avlingene ble doblet eller tredoblet
- Hungersnød ble avverget i India og andre land
- Matprisene falt
- Befolkningsvekst ble mulig uten massesult

**Ulemper:**
- Avhengighet av kjemikalier og energi
- Miljøproblemer: forurensning, uttørking av grunnvann
- Små bønder hadde ikke råd til innsatsfaktorer
- Tap av biologisk mangfold
- Økt ulikhet på landsbygda`,
    },
    {
      id: 'historie-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-10-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Vurder den grønne revolusjonen: Var den mer positiv eller negativ for verden?',
        hints: ['Veie fordeler mot ulemper, kort og lang sikt'],
        solution: 'Den grønne revolusjonen hadde både positive og negative sider. Positivt: Den økte matproduksjonen dramatisk og hindret hungersnød som kunne tatt millioner av liv. Matprisene falt, og flere fikk tilgang til nok mat. Befolkningsvekst ble mulig uten massesult. Negativt: Den skapte miljøproblemer (forurensning, vannmangel), økte ulikhet (rike bønder tjente mest), skapte avhengighet av kjemikalier og energi, og reduserte biologisk mangfold. På kort sikt var fordelene klare. På lang sikt er bærekraften usikker. Løsningen er kanskje å ta vare på teknologien mens man løser problemene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-10-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft sammenhengen mellom matproduksjon, befolkningsvekst og bærekraft gjennom historien.',
        hints: ['Tenk på jordbruksrevolusjonene og grenser for vekst'],
        solution: 'Gjennom historien har økt matproduksjon muliggjort befolkningsvekst: Den neolittiske revolusjonen la grunnlaget for de første sivilisasjonene, den andre jordbruksrevolusjonen bidro til befolkningseksplosjon i Europa, og den grønne revolusjonen hindret massesult i Asia. Men veksten har grenser. Malthus fryktet at befolkningen ville vokse raskere enn matproduksjonen. Lokale kriser (Irland, Sahel) har vist sårbarheten. I dag spør vi om dagens matproduksjon er bærekraftig - den er avhengig av fossil energi, kjemikalier og vann som ikke er fornybare. Historien viser at teknologiske gjennombrudd har utsatt krisen, men spørsmålet om grenser består.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-10-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva kan historien lære oss om utfordringene med dagens matsystem?',
        hints: ['Se på mønstre fra fortiden og anvend dem på nåtiden'],
        solution: 'Historien kan lære oss flere ting: 1) Avhengighet av få avlinger er risikabelt (jf. potetpesten i Irland). 2) Overutnyttelse av ressurser får konsekvenser (uttørking av jord, overfiske). 3) Teknologiske løsninger kan ha uventede bivirkninger. 4) Endringer i matproduksjon skaper vinnere og tapere sosialt. 5) Matsystemet er globalt sammenkoblet - problemer ett sted påvirker andre. 6) Markedskrefter alene løser ikke fordeling - hungersnød skyldes ofte fattigdom, ikke mangel på mat globalt. For fremtiden trengs systemer som er både produktive og bærekraftige, rettferdig fordelt, og robuste mot kriser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_10_4: TextbookChapter = {
  id: 'historie-10-4',
  courseId: 'historie',
  chapterNumber: '10.4',
  title: 'Mennesket og naturen',
  description: 'Historiske perspektiver på miljø og naturbruk.',
  estimatedMinutes: 45,
  competenceGoals: ['mennesket og naturen, bærekraft'],
  content: [
    {
      id: 'historie-10-4-intro',
      type: 'text',
      content: `## Miljøhistorie

Menneskets forhold til naturen har endret seg dramatisk gjennom historien. Fra å være del av naturen og avhengige av dens rytmer, har mennesker i økende grad forsøkt å kontrollere og utnytte den.

Miljøhistorie studerer dette forholdet - hvordan mennesker har påvirket miljøet, og hvordan miljøet har påvirket menneskesamfunn. I dag står vi overfor miljøutfordringer som krever at vi forstår denne historien.`,
    },
    {
      id: 'historie-10-4-def-1',
      type: 'definition',
      title: 'Menneskets miljøpåvirkning gjennom historien',
      content: `**Jeger-sanker-samfunn:**
Liten påvirkning, levde i balanse med naturen. Noen utryddelser (mammut, megafauna) kan likevel knyttes til mennesker.

**Jordbrukssamfunn:**
Avskoging for å rydde land, irrigasjon som endret landskaper, utarming av jord. Noen sivilisasjoner kollapset delvis på grunn av miljøødeleggelse.

**Førindustrielle byer:**
Lokal forurensning, avfallsproblemer, avskoging for brensel. Men begrenset skala.

**Industrisamfunn:**
Massiv forurensning av luft og vann, ressursuttømming, klimaendringer. Global påvirkning.

**"Den store akselerasjonen" (etter 1950):**
Eksponentiell vekst i alle miljøindikatorer - befolkning, energibruk, utslipp, arealbruk.`,
    },
    {
      id: 'historie-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-10-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvordan har menneskets miljøpåvirkning endret seg fra jordbrukssamfunn til industrisamfunn?',
        hints: ['Tenk på skala, type påvirkning og teknologi'],
        solution: 'Endringene er dramatiske: Jordbrukssamfunn påvirket miljøet lokalt - avskoging, irrigasjon, utarming av jord. Konsekvensene var alvorlige lokalt, men globalt begrenset. Industrisamfunnet har påvirkning i helt annen skala: Fossilt brensel frigjør karbon som var lagret over millioner av år, noe som endrer klimaet globalt. Forurensning spres over landegrenser. Ressurser utvinnes fra hele verden. "Den store akselerasjonen" etter 1950 har ført til eksponentiell vekst i alle miljøindikatorer. Mennesket er blitt en geologisk kraft som endrer hele jordssystemet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-4-def-2',
      type: 'definition',
      title: 'Ideer om natur',
      content: `**Natur som ressurs:**
Dominerende syn i Vesten siden opplysningstiden. Naturen skal utnyttes til menneskers beste. Francis Bacon: "Viten er makt" over naturen.

**Romantikkens naturideal:**
Reaksjon mot industrialiseringen. Naturen som vakker, hellig, truet. Grunnlag for tidlig naturvern.

**Bevaringsbevegelsen:**
Fra sent 1800-tall - nasjonalparker, vern av arter og områder. Naturen skal bevares uberørt.

**Miljøbevegelsen:**
Fra 1960-tallet - fokus på forurensning, ressursuttømming, økosystemer. Rachel Carsons "Silent Spring" (1962) var banebrytende.

**Bærekraftig utvikling:**
Brundtland-rapporten (1987): "Utvikling som møter dagens behov uten å ødelegge for fremtidige generasjoners mulighet til å møte sine behov."`,
    },
    {
      id: 'historie-10-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-10-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvordan synet på naturen endret seg fra opplysningstiden til miljøbevegelsen.',
        hints: ['Tenk på forholdet mellom menneske og natur'],
        solution: 'I opplysningstiden ble naturen sett som en ressurs mennesket skulle utnytte gjennom vitenskap og teknologi. Francis Bacon sa at "viten er makt" over naturen. Dette synet drev industrialiseringen. Som reaksjon kom romantikken på 1800-tallet, som så naturen som vakker, hellig og truet - dette la grunnlag for tidlig naturvern og nasjonalparker. Miljøbevegelsen fra 1960-tallet gikk videre og fokuserte på økosystemer, forurensning og ressursuttømming som globale problemer. Rachel Carsons "Silent Spring" viste hvordan menneskelig aktivitet kunne ødelegge naturen. I dag dominerer idealet om bærekraftig utvikling - balanse mellom menneskers behov og naturens grenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-4-def-3',
      type: 'definition',
      title: 'Historiske miljøkriser',
      content: `**Kollapset sivilisasjoner:**
- Påskeøya: Avskoging førte til samfunnskollaps
- Maya-sivilisasjonen: Avskoging og tørke bidro til sammenbrudd
- Mesopotamia: Forsalting av jord fra irrigasjon

**Den lille istid (ca. 1300-1850):**
Kaldere klima i Nord-Europa førte til avlingssvikt, hungersnød og sosial uro.

**Industriell forurensning:**
Smog i London (1952: 12 000 døde), forurensede elver, syreregn.

**Klimaendringer:**
Menneskets utslipp av klimagasser fører til global oppvarming - den største miljøutfordringen i vår tid.

**Artsutryddelse:**
Menneskelig aktivitet driver den sjette masseutryddelsen av arter.`,
    },
    {
      id: 'historie-10-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-10-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gi et eksempel på en historisk sivilisasjon som kollapset delvis på grunn av miljøproblemer.',
        hints: ['Tenk på ressursoverforbruk og konsekvenser'],
        solution: 'Påskeøya er et klassisk eksempel. Da polynesiske nybyggere kom til øya rundt 1200-tallet, var den dekket av skog. Befolkningen vokste og bygde de berømte steinstatuene (moai). For å transportere statuene og for brensel ble skogen hugget ned. Avskogingen førte til erosjon, tap av fuglearter, og umulighet å bygge kanoer for fiske. Ressursknapphet førte til konflikter, krig og befolkningskollaps. Da europeere kom på 1700-tallet, var befolkningen sterkt redusert og øya uten trær. Påskeøya sees som en advarsel om hva som kan skje når ressurser overutnyttes på et isolert sted.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-4-example-1',
      type: 'example',
      title: 'Eksempel: Rachel Carson og "Silent Spring"',
      problem: 'Hvorfor var Rachel Carsons bok "Silent Spring" (1962) så viktig for miljøbevegelsen?',
      solution: `**"Silent Spring" (1962):**

Rachel Carson dokumenterte hvordan plantevernmidler, særlig DDT, forgiftet økosystemer.

**Hovedbudskap:**
- DDT hopet seg opp i næringskjeden
- Fugler fikk for tynne eggeskall og kunne ikke formere seg
- "Stille vår" - en fremtid uten fuglesang
- Mennesker var også truet

**Betydning:**
- Første gang miljøproblemer nådde massepublikum
- Viste at "fremskritt" kunne ha skjulte kostnader
- Førte til forbud mot DDT
- Inspirerte moderne miljøbevegelse
- Bidro til opprettelsen av Environmental Protection Agency (EPA) i USA

**Motstand:**
Kjemiindustrien angrep Carson hardt, men forskningen hennes holdt stand.

Carson viste at vitenskap kunne avsløre miljøproblemer og mobilisere offentligheten.`,
    },
    {
      id: 'historie-10-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-10-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan kan Rachel Carsons kamp mot DDT inspirere dagens miljøarbeid?',
        hints: ['Tenk på vitenskap, kommunikasjon og motstand'],
        solution: 'Carsons eksempel er relevant i dag på flere måter: 1) Hun brukte solid vitenskap for å dokumentere problemet - forskning er grunnleggende for å forstå miljøutfordringer. 2) Hun kommuniserte kompleks vitenskap på en forståelig måte som engasjerte publikum. 3) Hun holdt stand mot mektig industrilobby som forsøkte å diskreditere henne. 4) Hun viste at endring er mulig - DDT ble forbudt. 5) Hun forsto sammenhenger i økosystemer, noe som er sentralt i dag (klima, biologisk mangfold). Dagens klimaaktivister står overfor lignende utfordringer: kompleks vitenskap, mektig motstand, behov for å mobilisere offentligheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-10-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-10-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hva historien kan lære oss om forholdet mellom økonomisk vekst og miljø.',
        hints: ['Tenk på industrialiseringen, ressursbruk og bærekraft'],
        solution: 'Historien viser et komplekst forhold: Økonomisk vekst har ofte ført til miljøødeleggelse - industrialiseringen forårsaket massiv forurensning, og global vekst driver klimaendringer. Samtidig har rikdom muliggjort miljøtiltak - rike land har renset opp i mye av sin forurensning. Men historien viser også at samfunn har kollapset av miljøproblemer de ikke løste i tide. Dagens utfordring er at veksten er global mens jordkloden er begrenset. Kanskje historien lærer oss at vi trenger en annen type vekst - eller å finne måter å ha gode liv på uten evig materiell vekst. Bærekraftig utvikling forsøker å forene behovene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-10-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-10-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Er mennesket i stand til å lære av miljøfeil fra fortiden? Drøft med eksempler.',
        hints: ['Se på både suksesser og gjentatte feil'],
        solution: 'Svaret er blandet. Suksesser: Vi har lært av noen feil - ozonhullet ble tatt tak i da vi forbudt freon, mange land har renset opp i lokal forurensning, truede arter er reddet. Feil som gjentas: Overfiske fortsetter til tross for kjente konsekvenser, avskoging fortsetter, og klimautslippene øker selv om vi kjenner følgene. Kanskje lærer vi av synlige, lokale problemer med klare løsninger, men sliter med langsomme, globale problemer der kostnadene er spredt og fremtidige. Dessuten er det ofte økonomiske interesser som motarbeider endring. Historien viser at vi kan lære, men at det ofte krever kriser eller sterkt lederskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 11: Første verdenskrig
// ============================================================================

export const CHAPTER_HISTORIE_11_1: TextbookChapter = {
  id: 'historie-11-1',
  courseId: 'historie',
  chapterNumber: '11.1',
  title: 'Årsaker til første verdenskrig',
  description: 'Nasjonalisme, imperialisme og veien til krig.',
  estimatedMinutes: 55,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  content: [
    {
      id: 'historie-11-1-intro',
      type: 'text',
      content: `## Veien til verdenskrig

I august 1914 brøt første verdenskrig ut. Det som begynte som en konflikt mellom Østerrike-Ungarn og Serbia, ble på få uker til en krig som involverte alle europeiske stormakter.

Historikere har diskutert årsakene til krigen siden den brøt ut. Var den uunngåelig? Hvem hadde skylden? Svaret ligger i et komplekst samspill av langsiktige årsaker og utløsende hendelser.`,
    },
    {
      id: 'historie-11-1-def-1',
      type: 'definition',
      title: 'Langsiktige årsaker - MAIN',
      content: `Historikere bruker ofte akronymet MAIN for å huske de langsiktige årsakene:

**M - Militarisme:**
Stormaktene rustet opp og glorifiserte militær styrke. Tyskland og Storbritannia konkurrerte om flåtemakt.

**A - Allianser:**
Europa var delt i to blokker: Trippelalliansen (Tyskland, Østerrike-Ungarn, Italia) og Trippelententen (Frankrike, Russland, Storbritannia).

**I - Imperialisme:**
Konkurranse om kolonier og innflytelse skapte spenninger, særlig mellom Tyskland, Frankrike og Storbritannia.

**N - Nasjonalisme:**
Sterk nasjonalfølelse og konkurranse mellom nasjoner. Pan-slavisme (alle slavere sammen) og pan-germanisme skapte spenninger.`,
    },
    {
      id: 'historie-11-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-11-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva MAIN-modellen sier om årsakene til første verdenskrig.',
        hints: ['Ta for deg hver bokstav: Militarisme, Allianser, Imperialisme, Nasjonalisme'],
        solution: 'MAIN-modellen identifiserer fire langsiktige årsaker: Militarisme - stormaktene rustet opp og glorifiserte militæret, noe som skapte spenninger og gjorde krig mer sannsynlig. Allianser - Europa var delt i to blokker som forpliktet seg til å støtte hverandre, slik at en lokal konflikt kunne trekke inn alle. Imperialisme - konkurranse om kolonier skapte rivalisering, særlig mellom etablerte og nye stormakter. Nasjonalisme - sterk nasjonalfølelse førte til konkurranse og konflikter, særlig på Balkan der pan-slavisme og Østerrike-Ungarns interesser kolliderte. Sammen skapte disse faktorene en spent situasjon der krig kunne utløses.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-1-def-2',
      type: 'definition',
      title: 'Alliansesystemet',
      content: `**Trippelalliansen (1882):**
- Tyskland
- Østerrike-Ungarn
- Italia (byttet side i 1915)

**Trippelententen (1907):**
- Frankrike
- Russland
- Storbritannia

**Problemet med allianser:**
Alliansene var ment å avskrekke krig ved å vise styrke. I stedet gjorde de at en lokal konflikt automatisk ble en storkrig. Da Østerrike-Ungarn angrep Serbia, ble Russland (Serbias allierte) trukket inn, deretter Tyskland (Østerrike-Ungarns allierte), så Frankrike (Russlands allierte), og til slutt Storbritannia.

**"Blankosjekken":**
Tyskland lovet Østerrike-Ungarn full støtte mot Serbia - en "blankosjekk" som ga Østerrike frihet til å handle aggressivt.`,
    },
    {
      id: 'historie-11-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-11-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvordan alliansesystemet bidro til å gjøre en lokal konflikt til en verdenskrig.',
        hints: ['Tenk på dominoeffekten'],
        solution: 'Alliansesystemet skapte en dominoeffekt der én konflikt trakk inn alle stormaktene: Østerrike-Ungarn angrep Serbia etter attentatet i Sarajevo. Russland mobiliserte for å støtte Serbia (slavisk solidaritet). Tyskland, alliert med Østerrike-Ungarn, erklærte krig mot Russland. Frankrike var alliert med Russland og måtte delta. Tyskland angrep Frankrike gjennom Belgia. Storbritannia gikk inn fordi de hadde garantert Belgias nøytralitet og var alliert med Frankrike. Innen få uker var alle stormakter i krig. Alliansene som skulle skape sikkerhet, skapte i stedet en mekanisme der krig spredte seg automatisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-1-def-3',
      type: 'definition',
      title: 'Balkan - Europas kruttønne',
      content: `**Balkans betydning:**
Balkan var en ustabil region der det osmanske rikets tilbaketrekning skapte maktvakuum og konflikter mellom nye nasjonalstater.

**Sentrale aktører:**
- **Serbia:** Ønsket å samle alle serbere/slavere, inkludert de i Østerrike-Ungarn
- **Østerrike-Ungarn:** Ville hindre serbisk ekspansjon og nasjonalisme som truet rikets sammenheng
- **Russland:** Støttet Serbia og pan-slavismen

**Balkankrigene (1912-13):**
To kriger som endret grensene og økte spenningene. Serbia ble større og mer selvsikker.

**Attentatet i Sarajevo (28. juni 1914):**
Gavrilo Princip, en bosnisk serber, skjøt erkehertug Franz Ferdinand av Østerrike-Ungarn. Dette ble den utløsende årsaken til krigen.`,
    },
    {
      id: 'historie-11-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-11-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor ble Balkan kalt "Europas kruttønne"?',
        hints: ['Tenk på ustabilitet, nasjonalisme og stormaktsinteresser'],
        solution: 'Balkan ble kalt "Europas kruttønne" fordi regionen var full av eksplosive spenninger: 1) Det osmanske rikets tilbaketrekning skapte maktvakuum og konflikter om territorier. 2) Mange nye nasjonalstater med overlappende krav oppstod. 3) Sterk nasjonalisme, særlig pan-slavismen, skapte konflikter. 4) Stormaktene hadde motstridende interesser - Russland støttet slaviske folk, Østerrike-Ungarn ville bevare sin kontroll. 5) Balkankrigene (1912-13) hadde nettopp endret grenser og økt spenningene. Som en kruttønne trengte regionen bare en gnist for å eksplodere - attentatet i Sarajevo ble den gnisten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-1-example-1',
      type: 'example',
      title: 'Eksempel: Julikrisen 1914',
      problem: 'Hvordan utviklet situasjonen seg fra attentatet 28. juni til krigsutbruddet i august 1914?',
      solution: `**Julikrisen 1914:**

**28. juni:** Erkehertug Franz Ferdinand blir skutt i Sarajevo.

**5.-6. juli:** Tyskland gir Østerrike-Ungarn "blankosjekken" - full støtte.

**23. juli:** Østerrike-Ungarn sender ultimatum til Serbia med krav som er ment å være uakseptable.

**25. juli:** Serbia aksepterer nesten alle krav, men Østerrike-Ungarn er ikke fornøyd.

**28. juli:** Østerrike-Ungarn erklærer krig mot Serbia.

**30. juli:** Russland mobiliserer.

**1. august:** Tyskland erklærer krig mot Russland.

**3. august:** Tyskland erklærer krig mot Frankrike og invaderer Belgia.

**4. august:** Storbritannia erklærer krig mot Tyskland.

På seks uker gikk Europa fra et attentat til verdenskrig. Mange har spurt om krigen kunne vært unngått med bedre diplomati.`,
    },
    {
      id: 'historie-11-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-11-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Kunne første verdenskrig vært unngått? Vurder muligheter for å stoppe eskaleringen under julikrisen.',
        hints: ['Tenk på tidspunkter der andre valg kunne vært gjort'],
        solution: 'Det er flere punkter der eskaleringen kanskje kunne vært stoppet: 1) Østerrike-Ungarn kunne akseptert Serbias svar på ultimatumet - Serbia ga nesten etter på alle punkter. 2) Tyskland kunne unnlatt å gi "blankosjekken" som oppmuntret Østerrike til aggresjon. 3) Russland kunne utsatt mobiliseringen for å gi tid til diplomati. 4) Stormaktene kunne kalt inn en konferanse som i tidligere kriser. Men mange faktorer motarbeidet fred: krigsstemning i befolkningene, militære planer som krevde rask mobilisering, prestisje som stod på spill, og ledere som undervurderte konsekvensene. Krigen var kanskje ikke uunngåelig, men den ble ikke aktivt unngått.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-11-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-11-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvem som hadde størst ansvar for utbruddet av første verdenskrig.',
        hints: ['Vurder ulike lands handlinger og alliansenes rolle'],
        solution: 'Spørsmålet om skyld har vært debattert i over hundre år. Argumenter for ulike lands ansvar: Tyskland ga "blankosjekken" og hadde aggressive krigsplaner (Schlieffenplanen). Østerrike-Ungarn sendte et ultimatum designet for å bli avvist og erklærte krig. Russland mobiliserte raskt og gjorde tilbaketrekning vanskelig. Serbia hadde tolerert nasjonalistiske grupper. Men ingen enkelt land bærer hele skylden. Alliansesystemet, militarisme, nasjonalisme og imperialisme skapte en situasjon der alle stormakter bidro til spenningene. Kanskje er systemet viktigere enn enkeltaktører - Europa hadde bygget en krigsmaskin som bare ventet på å bli utløst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-11-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvilken av de langsiktige årsakene (militarisme, allianser, imperialisme, nasjonalisme) mener du var viktigst for krigsutbruddet? Begrunn svaret ditt.',
        hints: ['Vurder hvordan de ulike faktorene hang sammen'],
        solution: 'Et godt svar vil argumentere for én faktor samtidig som det anerkjenner at de hang sammen. Nasjonalisme kan argumenteres å være grunnleggende - det var nasjonalistisk rivalisering som drev opprustning, kolonikappløp og alliansedannelse. Attentatet selv var motivert av serbisk nasjonalisme. Allianser kan argumenteres å være det som gjorde krigen global - uten dem kunne konflikten forblitt lokal. Militarisme gjorde at ledere tenkte i militære løsninger og hadde planer som krevde rask handling. Imperialisme skapte rivaliseringen mellom stormaktene. Det beste svaret viser forståelse for kompleksiteten - årsakene forsterket hverandre i et system der krig ble stadig mer sannsynlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_11_2: TextbookChapter = {
  id: 'historie-11-2',
  courseId: 'historie',
  chapterNumber: '11.2',
  title: 'Krigens gang og karakter',
  description: 'Skyttergravskrig, ny teknologi og total krig.',
  estimatedMinutes: 55,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  content: [
    {
      id: 'historie-11-2-intro',
      type: 'text',
      content: `## En ny type krig

Første verdenskrig ble helt annerledes enn noen hadde forestilt seg. Mange trodde krigen ville være over til jul 1914. I stedet varte den i fire år og kostet over 17 millioner mennesker livet.

Industrialiseringen hadde endret krigføringen fundamentalt. Nye våpen gjorde forsvar langt enklere enn angrep, og fronten stivnet i et blodig stillingskrig.`,
    },
    {
      id: 'historie-11-2-def-1',
      type: 'definition',
      title: 'Skyttergravskrigen',
      content: `**Vestfronten:**
Fra Nordsjøen til Sveits gravde hærene seg ned i et system av skyttergraver. Fronten beveget seg knapt på fire år.

**Skyttergravssystemet:**
- Frontlinjen
- Støttegraver bak
- Reservegraver bakerst
- Forbindelsesganger mellom

**Livets i skyttergravene:**
- Gjørme, rotter, lus
- Konstant fare for snikskyttere og artilleri
- "Granatsjokk" (PTSD)
- Sykdommer som skyttergravsfot

**"Ingenmannsland":**
Området mellom skyttergravene - dekket av piggtråd, kratere og lik. Å krysse det var nesten umulig.

**Slagene:**
Store slag som Verdun og Somme (1916) kostet hundretusener av liv for minimale gevinster.`,
    },
    {
      id: 'historie-11-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-11-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv forholdene i skyttergravene under første verdenskrig.',
        hints: ['Tenk på fysiske forhold, psykiske påkjenninger og fare'],
        solution: 'Forholdene var forferdelige: Fysisk måtte soldatene leve i trange, gjørmete grøfter som ofte ble oversvømt. Rotter og lus var overalt. Sykdommer som skyttergravsfot (råtne føtter fra konstant fuktighet) var vanlig. Mat og vann var ofte mangelvare. Psykisk var belastningen enorm - konstant fare fra artilleri og snikskyttere, synet av døde kamerater, og lydene av krig. "Granatsjokk" (det vi i dag kaller PTSD) rammet mange. Soldatene var ofte utmattet og demoralisert. Å gå over kanten i et angrep betød nesten sikker død eller skade. Disse forholdene skapte en generasjon traumatiserte overlevende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-2-def-2',
      type: 'definition',
      title: 'Ny teknologi',
      content: `**Maskingevær:**
Kunne avfyre 400-600 skudd per minutt. Gjorde angrep over åpent terreng selvmord.

**Artilleri:**
Var ansvarlig for flest dødsfall. Massive bombardementer før angrep - kunne vare i dager.

**Giftgass:**
Først brukt av Tyskland i 1915. Klorgas, sennepsgass og andre kjemiske våpen skapte forferdelig lidelse.

**Stridsvogner (tanks):**
Britene introduserte dem i 1916. Kunne krysse skyttergraver, men var upålitelige.

**Fly:**
Fra rekognosering til luftkamper ("aces") og bombing.

**U-båter:**
Tyske u-båter truet britisk forsyning. Ubegrenset u-båtkrig bidro til at USA gikk inn i krigen.`,
    },
    {
      id: 'historie-11-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-11-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan endret ny våpenteknologi krigføringen under første verdenskrig?',
        hints: ['Tenk på balansen mellom angrep og forsvar'],
        solution: 'Ny teknologi gjorde forsvar mye enklere enn angrep: Maskingeværet kunne meje ned angripere over åpent terreng - én maskingevær kunne stoppe hundrevis av soldater. Artilleri gjorde det farlig å samle tropper, men varslet også om kommende angrep og ødela terrenget. Piggtråd bremset angrep. Giftgass var forferdelig, men begge sider fikk det og utviklet beskyttelse. Stridsvogner og fly var nye, men ennå ikke effektive nok til å bryte stillestanden. Resultatet var at ingen side kunne gjennombryte, men begge led enorme tap. Teknologien favoriserte forsvar, men lederne fortsatte å beordre angrep.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-2-def-3',
      type: 'definition',
      title: 'Total krig',
      content: `**Total krig:**
En krig der hele samfunnet mobiliseres - ikke bare militæret, men industri, økonomi og sivilbefolkning.

**Økonomisk mobilisering:**
- Industrien ble omstilt til krigsproduksjon
- Staten styrte økonomien
- Rasjonering av mat og varer

**Propaganda:**
Regjeringene brukte propaganda for å opprettholde moral og demonisere fienden.

**Kvinner i arbeid:**
Med menn i krigen tok kvinner over jobber i industri og jordbruk. Dette bidro til at kvinner fikk stemmerett etter krigen.

**Blokade og hungersnød:**
Britisk sjøblokade førte til matmangel i Tyskland. Hundretusener døde av underernæring.

**Sivilister som mål:**
Bombing fra fly og Zeppelin-luftskip rammet byer. U-båter senket sivile skip.`,
    },
    {
      id: 'historie-11-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-11-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med "total krig", og hvordan viste det seg under første verdenskrig?',
        hints: ['Tenk på hvordan krigen påvirket hele samfunnet, ikke bare soldatene'],
        solution: 'Total krig betyr at hele samfunnet mobiliseres for krigsinnsatsen, ikke bare militæret. Under første verdenskrig viste dette seg på flere måter: 1) Økonomien ble omstilt - industrien produserte våpen, mat ble rasjonert, staten styrte økonomien. 2) Sivilbefolkningen ble direkte rammet - blokader førte til hungersnød, byer ble bombet. 3) Kvinner tok over menns jobber i industri og jordbruk. 4) Propaganda mobiliserte befolkningen og demoniserte fienden. 5) Skillet mellom front og hjemmefront ble visket ut - alle bidro, alle led. Total krig betydde at hele nasjoner var i krig, ikke bare hærene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-2-example-1',
      type: 'example',
      title: 'Eksempel: Slaget ved Somme 1916',
      problem: 'Hva skjedde under slaget ved Somme, og hvorfor er det blitt symbol på krigens meningsløshet?',
      solution: `**Slaget ved Somme (1. juli - 18. november 1916):**

**Bakgrunn:**
Britene og franskmennene planla et stort gjennombrudd på vestfronten.

**Forberedelse:**
En ukes artilleribombardering som skulle knuse tyske stillinger. Det fungerte ikke - mange bunkers overlevde.

**1. juli 1916 - krigens verste dag:**
Britiske soldater gikk over kanten i bølger. De ble meid ned av tyske maskingevær. 57 470 britiske tap på én dag - 19 240 døde.

**Resten av slaget:**
Fire måneder med angrep og motangrep. Første bruk av stridsvogner (begrenset suksess).

**Resultat:**
- Allierte tap: ca. 620 000
- Tyske tap: ca. 500 000
- Territoriegevinst: maksimalt 10 km

Somme viste industriell krigens gru - enorme tap for minimale resultater. Det har blitt symbol på første verdenskrigs meningsløshet.`,
    },
    {
      id: 'historie-11-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-11-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor fortsatte generalene å beordre angrep til tross for de enorme tapene?',
        hints: ['Tenk på militær tenkning, alternativer og politisk press'],
        solution: 'Det er flere forklaringer: 1) Militær doktrine - offiserer var opplært til at angrep var nøkkelen til seier; defensiv tenkning ble sett som feig. 2) Mangel på alternativer - å bare forsvare ville bety at fienden beholdt erobret territorium. 3) Politisk press - regjeringer forventet fremgang og seier. 4) Tro på at gjennombrudd var mulig - "en siste offensiv" kunne endre alt. 5) Undervurdering av tap og overvurdering av fiendens tap. 6) Teknologien gjorde forsvar lett, men denne lærdommen tok tid å akseptere. Kritikere kaller generalene "slaktere", men de stod overfor et dilemma de ikke visste hvordan de skulle løse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-11-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-11-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om første verdenskrig representerte et brudd eller kontinuitet i krigens historie.',
        hints: ['Sammenlign med tidligere kriger - hva var nytt, hva var kjent?'],
        solution: 'Første verdenskrig representerte både brudd og kontinuitet. Brudd: Skalaen var helt ny - millioner av soldater, industriell produksjon av våpen, hele nasjoner mobilisert. Ny teknologi (maskingevær, giftgass, fly, u-båter) endret hvordan krig ble ført. Sivilbefolkningen ble rammet direkte. Krigens lengde og tap var uten sidestykke. Kontinuitet: Krig hadde alltid involvert vold, lidelse og død. Nasjonalisme og maktpolitikk hadde drevet kriger før. Teknologi hadde alltid endret krigføring. Propaganda og mobilisering av hjemmefronten hadde forekommet. Kanskje var første verdenskrig industrialiseringens logikk anvendt på krig - en intensivering av kjente mønstre til et nytt nivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-11-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvordan kan vi forstå at soldater holdt ut fire år i skyttergravene? Hva motiverte dem?',
        hints: ['Tenk på kameratskap, plikt, frykt og mangel på alternativer'],
        solution: 'Soldater holdt ut av flere grunner: 1) Kameratskap - lojalitet til kamerater i skyttergaven var sterkere enn abstrakt patriotisme. 2) Plikt - de fleste følte forpliktelse overfor familien, nasjonen, og de som allerede hadde falt. 3) Propaganda og sensur - hjemmefrontens virkelighetsoppfatning var annerledes enn frontens. 4) Militær disiplin - desertering ble straffet hardt, til og med med døden. 5) Mangel på alternativer - det var ingen vei ut. 6) Korte perioder i frontlinjen - soldater roterte mellom front og reserve. 7) Små gleder - kameratskap, brev hjemmefra, julefreden 1914. Mange led av "granatsjokk" og traumer som varte livet ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_11_3: TextbookChapter = {
  id: 'historie-11-3',
  courseId: 'historie',
  chapterNumber: '11.3',
  title: 'Norge og Norden under krigen',
  description: 'Nøytralitetspolitikk og krigens påvirkning på Norge.',
  estimatedMinutes: 45,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  content: [
    {
      id: 'historie-11-3-intro',
      type: 'text',
      content: `## Norden i krigen

De nordiske landene erklærte seg nøytrale da første verdenskrig brøt ut. Norge, Sverige og Danmark ble ikke direkte dratt inn i kamphandlingene, men krigen påvirket likevel samfunnene dypt.

For Norge, som hadde blitt selvstendig fra Sverige bare ni år tidligere i 1905, ble krigen en test på den nye statens evne til å navigere stormaktspolitikken.`,
    },
    {
      id: 'historie-11-3-def-1',
      type: 'definition',
      title: 'Norsk nøytralitetspolitikk',
      content: `**Nøytralitet:**
Norge erklærte seg nøytralt i august 1914. Dette betydde at Norge ikke skulle ta parti for noen av de krigførende maktene.

**Bakgrunn:**
- Norge var en liten stat uten militær evne til å forsvare seg mot stormakter
- Sterke økonomiske bånd til begge sider - handel med Storbritannia, nærhet til Tyskland
- Erfaringer fra unionsoppløsningen 1905 viste verdien av internasjonale garantier

**"Nøytralitet i ord og gjerning":**
Regjeringen Gunnar Knudsen forsøkte å balansere mellom partene, men det var vanskelig.

**I praksis britiskvennlig:**
Norge var avhengig av import (mat, kull) som kom via britisk-kontrollerte sjøruter. Norsk skipsfart fraktet varer for Ententen. Tyskland så Norge som reelt alliert med Storbritannia.`,
    },
    {
      id: 'historie-11-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-11-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvorfor erklærte Norge seg nøytralt i 1914, og var det mulig å være helt nøytral?',
        hints: ['Tenk på Norges situasjon og interesser'],
        solution: 'Norge erklærte seg nøytralt fordi landet ikke hadde militær kapasitet til å delta i krigen, hadde økonomiske interesser på begge sider, og ønsket å unngå ødeleggelse. Som liten stat mellom stormakter var nøytralitet det sikreste valget. Likevel var full nøytralitet umulig: Norge var avhengig av import via britisk-kontrollerte sjøruter, og norsk skipsfart fraktet varer for Ententen. Geografisk lå Norge nærmere britisk innflytelsessfære. Selv om Norge forsøkte å balansere, så Tyskland landet som reelt alliert med Storbritannia. Nøytralitet var en ambisjon, men virkeligheten tvang Norge nærmere den ene siden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-3-def-2',
      type: 'definition',
      title: 'Norsk skipsfart i krigen',
      content: `**Handelsflåten:**
Norge hadde verdens fjerde største handelsflåte. Skipene fraktet varer over hele verden.

**Fraktmarkedet:**
Krigen skapte enorm etterspørsel etter frakttjenester. Fraktratene steg dramatisk, og norske rederier tjente store penger.

**Risikoen:**
Tyske u-båter angrep skip som fraktet varer til fienden. Norge var offisielt nøytralt, men skipene ble likevel senket.

**Tapene:**
- Ca. 2000 norske sjømenn døde under krigen
- Over 800 norske skip ble senket
- "Nortraship" - staten tok kontroll over handelsflåten i krigsperioder

**Dilemmaet:**
Skip som fraktet varer til Storbritannia risikerte torpedoer. Skip som nektet risikerte at Storbritannia stoppet norsk import.`,
    },
    {
      id: 'historie-11-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-11-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan påvirket krigen norsk skipsfart - både positivt og negativt?',
        hints: ['Tenk på økonomi og risiko'],
        solution: 'Positivt: Krigen skapte enorm etterspørsel etter frakttjenester, og fraktratene steg dramatisk. Norske rederier og sjømenn tjente store penger. Handelsflåten var en verdifull ressurs som begge sider ville ha tilgang til. Negativt: Risikoen var enorm - tyske u-båter senket over 800 norske skip, og ca. 2000 norske sjømenn mistet livet. Sjømenn levde under konstant fare for torpedoangrep. Familier hjemme visste ikke om sine kjære var i live. Norge var fanget i en vanskelig situasjon: å frakte varer til Storbritannia risikerte u-båtangrep, men å nekte kunne føre til britiske represalier mot norsk import.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-3-def-3',
      type: 'definition',
      title: 'Krigens påvirkning på Norge',
      content: `**Matmangel og rasjonering:**
Norge importerte mye mat. Britisk blokade og u-båtkrig gjorde import vanskelig. Rasjonering ble innført i 1917.

**Prisøkning og spekulasjon:**
Prisene steg kraftig. Noen tjente på varemangelen ("jobbetid"), mens vanlige folk slet.

**Sosial uro:**
Dyrtiden førte til protester og streiker. Arbeiderbevegelsen vokste. Dyrtidsaksjoner og "potetopprør".

**"Gullalderen":**
For de som tjente på krigen (rederier, eksportører) var det en gullalder. Sosiale forskjeller økte.

**Jobbetiden:**
Spekulanter kjøpte og solgte varer for rask fortjeneste. Ordet "jobber" ble negativt.

**Politiske endringer:**
Stemmerett for kvinner i 1913 (før krigen). Krisestemningen styrket krav om sosial reform.`,
    },
    {
      id: 'historie-11-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-11-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan påvirket krigen hverdagen for vanlige nordmenn?',
        hints: ['Tenk på mat, priser og sosiale forhold'],
        solution: 'Krigen påvirket hverdagen på flere måter: 1) Matmangel - Norge importerte mye mat, og krigen gjorde import vanskelig. Rasjonering ble innført i 1917. 2) Dyrtid - prisene steg kraftig, og lønningene holdt ikke følge. Mat og nødvendigheter ble dyrere. 3) Varemangel - mange varer ble vanskelige å få tak i. 4) Arbeidsledighet i noen næringer, mangel på arbeidskraft i andre. 5) Sosial uro - dyrtidsaksjoner og protester mot spekulanter som tjente på nøden. 6) Bekymring for sjømenn og skip - mange familier hadde noen til sjøs under konstant fare. 7) Økende ulikhet - noen tjente enormt mens andre slet. Krigen viste at nøytralitet ikke beskyttet mot krigens konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-3-example-1',
      type: 'example',
      title: 'Eksempel: De nordiske landene sammenligner',
      problem: 'Hvordan opplevde de tre skandinaviske landene krigen forskjellig?',
      solution: `**Norge:**
- Nøytralt, men i praksis nærmere Ententen
- Stor handelsflåte utsatt for u-båtangrep
- Avhengig av import, rammet av blokade
- Tjente på fraktmarkedet, men med høy risiko

**Sverige:**
- Nøytralt, men mer tyskvennlig (kongefamilien, konservative)
- Eksporterte jernmalm til Tyskland
- Mindre avhengig av sjøtransport
- Matmangel, særlig 1917-18 ("kålrotsvinteren")

**Danmark:**
- Nøytralt, men sårbart - deler grense med Tyskland
- Solgte mat til begge sider
- Mindre rammet økonomisk enn Norge og Sverige
- Island (under dansk styre) fikk mer selvstyre

**Felles:**
Alle tre unngikk direkte deltakelse, men led økonomisk og sosialt. Krigen styrket nordisk samarbeid - tre-kongemøtet i Malmø 1914 demonstrerte felles nøytralitet.`,
    },
    {
      id: 'historie-11-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-11-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor var Norge mer utsatt under krigen enn Sverige og Danmark?',
        hints: ['Tenk på geografi, økonomi og handelsflåten'],
        solution: 'Norge var mer utsatt av flere grunner: 1) Handelsflåten - Norges fjerde største handelsflåte i verden var uvurderlig for Ententen, men gjorde norske skip til mål for u-båter. Over 2000 sjømenn døde. 2) Avhengighet av import - Norge importerte mye mat og kull, og var avhengig av britisk-kontrollerte sjøruter. 3) Geografisk posisjon - Norge lå langs viktige sjøruter og var mer utsatt for sjøkrig enn Sverige (landlåst) eller Danmark (nærmere tysk kontroll). 4) Mindre selvforsynt - Sverige hadde jernmalm å handle med, Danmark hadde jordbruk. Norge var mer avhengig av handel og ferdsel. Nøytraliteten beskyttet, men geografien og økonomien gjorde Norge sårbart.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-11-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-11-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om nøytralitetspolitikken var vellykket for Norge under første verdenskrig.',
        hints: ['Vurder både det som gikk bra og kostnadene'],
        solution: 'Vellykket: Norge unngikk direkte deltakelse i krigen og de enorme tapene som rammet de krigførende. Landet beholdt sin uavhengighet og integritet. Deler av økonomien, særlig skipsfarten, tjente godt. Norge overlevde som stat og demokrati. Ikke vellykket: Over 2000 sjømenn døde, hundrevis av skip gikk tapt. Befolkningen led under matmangel og dyrtid. Nøytraliteten var mer teoretisk enn reell - Norge ble presset fra begge sider. Krigen skapte sosial uro og ulikhet. Konklusjon: Nøytraliteten var et realistisk valg for en liten stat, og hovedmålet (unngå invasjon) ble oppnådd. Men kostnadene var betydelige, og Norge var mer offer enn aktør.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-11-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvilke lærdommer trakk Norge fra første verdenskrig når det gjaldt nøytralitet og sikkerhetspolitikk?',
        hints: ['Tenk på hva som skjedde og hva Norge gjorde annerledes senere'],
        solution: 'Lærdommmene var flere: 1) Nøytralitet beskytter ikke automatisk - en liten stat kan bli dratt inn i stormaktskonflikter uansett. 2) Geografisk posisjon er viktig - Norge ligger strategisk til og kan ikke ignorere det. 3) Økonomisk avhengighet begrenser handlefriheten - Norge var bundet til Storbritannia gjennom handel. 4) Beredskap er nødvendig - Norge var dårlig forberedt i 1914. 5) Internasjonalt samarbeid kan være viktig - nordisk samarbeid ble styrket. Disse erfaringene påvirket norsk politikk i mellomkrigstiden, selv om nøytralitetslinjen ble videreført - til den mislyktes totalt i 1940 da Tyskland invaderte til tross for norsk nøytralitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_11_4: TextbookChapter = {
  id: 'historie-11-4',
  courseId: 'historie',
  chapterNumber: '11.4',
  title: 'Fredsslutninger og konsekvenser',
  description: 'Versailles og den nye verdensordenen.',
  estimatedMinutes: 50,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  content: [
    {
      id: 'historie-11-4-intro',
      type: 'text',
      content: `## Freden som sådde kimen til ny krig

Da krigen sluttet 11. november 1918, lå Europa i ruiner. Over 17 millioner var døde, fire imperier hadde kollapset, og millioner var flyktninger.

Fredskonferansen i Paris 1919 skulle skape en ny verdensorden. Men freden som ble forhandlet frem, særlig Versailles-traktaten med Tyskland, skapte bitterhet som bidro til neste verdenskrig bare 20 år senere.`,
    },
    {
      id: 'historie-11-4-def-1',
      type: 'definition',
      title: 'Krigens slutt',
      content: `**1917 - Vendepunktet:**
- USA går inn i krigen (april) - ubegrenset u-båtkrig og Zimmermann-telegrammet
- Russland trekker seg ut etter revolusjonen (oktober)

**1918:**
- Tysk våroffensiv mislykkes
- Allierte motoffensiver med amerikanske forsterkninger
- Tyske allierte kollapser: Bulgaria, Osmansk rike, Østerrike-Ungarn
- Revolusjon i Tyskland - keiseren abdiserer
- Våpenhvile 11. november 1918, klokken 11

**Imperiene som falt:**
- Det tyske keiserriket
- Østerrike-Ungarn
- Det osmanske riket
- Det russiske tsarriket (revolusjon 1917)

**Nye stater:**
Polen, Tsjekkoslovakia, Jugoslavia, Finland, de baltiske statene med flere.`,
    },
    {
      id: 'historie-11-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-11-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke faktorer førte til at krigen endte i 1918?',
        hints: ['Tenk på militære, politiske og økonomiske faktorer'],
        solution: 'Flere faktorer bidro: 1) USA gikk inn i krigen i 1917 og brakte friske tropper og ressurser. 2) Den britiske blokaden hadde utmattet Tyskland økonomisk - matmangel og nød hjemme. 3) Tyske våroffensiver i 1918 mislyktes og tømte de siste reservene. 4) Allierte motoffensiver med stridsvogner og fly brøt gjennom tyske linjer. 5) Tyske allierte kollapset - Bulgaria, Østerrike-Ungarn, Det osmanske riket kapitulerte. 6) Revolusjon hjemme - tyske arbeidere og soldater gjorde opprør, og keiseren abdiserte. 7) Krigstretthet på alle sider. Tyskland kapitulerte ikke militært fullstendig, men så at situasjonen var håpløs.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-4-def-2',
      type: 'definition',
      title: 'Versailles-traktaten',
      content: `**Fredskonferansen i Paris (1919):**
De seirende maktene forhandlet uten Tyskland. "De fire store": Wilson (USA), Clemenceau (Frankrike), Lloyd George (Storbritannia), Orlando (Italia).

**Hovedpunkter i Versailles-traktaten:**
- **Territorielle tap:** Alsace-Lorraine til Frankrike, områder til Polen, alle kolonier
- **Militære begrensninger:** Hær maks 100 000, ingen luftvåpen, ingen u-båter, demilitarisert Rhinland
- **Krigsskyldsklausulen (artikkel 231):** Tyskland måtte akseptere skylden for krigen
- **Erstatninger:** Enorme summer som skulle betales til de allierte

**Reaksjoner i Tyskland:**
Tyskere kalte traktaten "diktat" - den var påtvunget, ikke forhandlet. Bitterhet over "dolkestøtlegenden" (at Tyskland hadde blitt sveket hjemmefra) og de harde vilkårene skapte grobunn for revansje.`,
    },
    {
      id: 'historie-11-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-11-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor Versailles-traktaten skapte så mye bitterhet i Tyskland.',
        hints: ['Tenk på konkrete vilkår og hvordan de ble oppfattet'],
        solution: 'Bitterheten hadde flere kilder: 1) Krigsskyldsklausulen tvang Tyskland til å ta all skyld for krigen - mange tyskere mente andre hadde like mye skyld. 2) Traktaten var et "diktat" - Tyskland fikk ikke forhandle, bare skrive under. 3) Territorielle tap betydde at millioner av tyskere havnet i andre land. 4) Erstatningene var enorme og umulige å betale. 5) Militære begrensninger ydmyket en stolt nasjon. 6) "Dolkestøtlegenden" - myten om at hæren hadde vært ubeseiret, men blitt forrådt av sosialister og jøder hjemme. 7) Mange tyskere oppfattet traktaten som urettferdig og ikke i samsvar med Wilsons 14 punkter som hadde lovet en rettferdig fred.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-4-def-3',
      type: 'definition',
      title: 'Folkeforbundet og den nye verdensordenen',
      content: `**Folkeforbundet (League of Nations):**
Internasjonal organisasjon grunnlagt i 1920 for å bevare freden. President Wilsons idé.

**Mål:**
- Kollektiv sikkerhet - angrep på én er angrep på alle
- Fredelig løsning av konflikter
- Nedrustning
- Samarbeid om sosiale og økonomiske spørsmål

**Svakheter:**
- USA ble ikke medlem (Senatet nektet å ratifisere)
- Ingen egen militærmakt
- Stormaktene fulgte ikke alltid reglene
- Tyskland og Sovjetunionen var først utenfor

**Mandatsystemet:**
Tidligere tyske kolonier og osmanske områder ble "mandater" styrt av seierherre "på vegne av" Folkeforbundet.

**Arven:**
Folkeforbundet mislyktes i å hindre ny krig, men la grunnlaget for FN etter andre verdenskrig.`,
    },
    {
      id: 'historie-11-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-11-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var Folkeforbundet, og hvorfor klarte det ikke å forhindre nye kriger?',
        hints: ['Tenk på struktur, medlemskap og autoritet'],
        solution: 'Folkeforbundet var en internasjonal organisasjon grunnlagt for å bevare freden gjennom kollektiv sikkerhet og fredelig konfliktløsning. Det mislyktes av flere grunner: 1) USA ble ikke medlem - organisasjonen mistet verdens mektigste stat. 2) Ingen egen militærmakt - kunne bare vedta sanksjoner og fordømme, ikke tvinge frem fred. 3) Unanimitetsprinsippet - alle måtte være enige, noe som gjorde handling vanskelig. 4) Stormaktene ignorerte forbundet når det passet dem (Japan i Mandsjuria, Italia i Etiopia). 5) Tyskland og Sovjetunionen var først utenfor, så kunne forbundet ikke representere alle. 6) Nasjonale interesser trumfet internasjonal solidaritet når det virkelig gjaldt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-4-example-1',
      type: 'example',
      title: 'Eksempel: Wilsons 14 punkter',
      problem: 'Hva var Wilsons 14 punkter, og hvordan påvirket de fredsoppgjøret?',
      solution: `**Wilsons 14 punkter (januar 1918):**

President Woodrow Wilson presenterte sine prinsipper for en rettferdig fred.

**Hovedprinsipper:**
- Åpen diplomati - slutt på hemmelige avtaler
- Havenes frihet
- Frihandel
- Nedrustning
- Selvbestemmelsesrett for folk
- Folkeforbundet

**Spesifikke punkt:**
- Gjenoppretting av Belgia og Frankrike
- Justering av italienske grenser etter nasjonalitet
- Autonomi for folk i Østerrike-Ungarn og Det osmanske riket
- Uavhengig Polen med tilgang til havet

**Innflytelse:**
Punktene skapte håp om rettferdig fred, men ble ikke fullt ut fulgt. Seierherrene ville ha straff og erstatning, ikke bare rettferdighet. Selvbestemmelsen ble selektivt anvendt - noen folk fikk den, andre ikke.`,
    },
    {
      id: 'historie-11-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-11-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor ble ikke Wilsons 14 punkter fullt ut gjennomført i fredsoppgjøret?',
        hints: ['Tenk på interessene til de andre seierherrene'],
        solution: 'Wilsons punkter ble ikke fullt ut gjennomført fordi: 1) Frankrike (Clemenceau) ville ha sikkerhet og straff av Tyskland - hadde lidd mest og fryktet ny krig. 2) Storbritannia (Lloyd George) hadde lovet sin befolkning at Tyskland skulle betale - "squeeze them until the pips squeak". 3) Italia ville ha territorielle gevinster som var lovet. 4) Selvbestemmelsesretten ble selektivt brukt - den gjaldt for noen folk (tsjekkere, polakker) men ikke andre (tyskere i Sudetenland, arabere). 5) Koloniene ble ikke frigjort, men omfordelt som mandater. 6) Wilson måtte inngå kompromisser for å få gjennom Folkeforbundet, som han mente var det viktigste. Idealisme møtte realpolitikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-11-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-11-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft påstanden: "Versailles-traktaten var for hard til å skape varig fred, men for mild til å hindre tysk revansje."',
        hints: ['Vurder om en annen fred hadde fungert bedre'],
        solution: 'Påstanden har mye for seg: Traktaten var hard nok til å skape enorm bitterhet - krigsskylden, erstatningene og de territorielle tapene ydmyket Tyskland og ga nasjonalistene ammunisjon. Men den var ikke hard nok til å permanent svekke Tyskland - landet beholdt sin industri, befolkning og potensielle makt. Alternativene: En mildere fred (uten krigsskyld, lavere erstatninger) kunne skapt mindre bitterhet, men ville seierherrene akseptere det? En hardere fred (oppdeling av Tyskland) kunne hindret tysk revansje, men ville vært enda mer urettferdig. Kanskje var ikke freden problemet alene, men hvordan den ble håndhevet etterpå - for mild i 1930-årene da man burde stått imot Hitler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-11-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-11-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvilke lærdommer fra Versailles ble brukt når man skapte freden etter andre verdenskrig?',
        hints: ['Sammenlign behandlingen av Tyskland i 1919 og 1945'],
        solution: 'Etter andre verdenskrig lærte man av Versailles feil: 1) Ingen krigsskyldsklausul som ydmyket en hel nasjon - fokus på naziregimet, ikke det tyske folk. 2) Marshallhjelpen gjenoppbygde Tyskland (og andre) økonomisk i stedet for å kreve ruinerende erstatninger. 3) Tyskland ble delt, men Vest-Tyskland ble integrert i vestlig samarbeid (NATO, EF). 4) FN erstattet Folkeforbundet med sterkere institusjoner og amerikansk deltakelse. 5) Fokus på samarbeid og forsoning, ikke straff. Marshall-planen og europeisk integrasjon skulle gjøre ny krig utenkelig. Resultatet var varig fred i Vest-Europa - en kontrast til mellomkrigstiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12: Mellomkrigstiden
// ============================================================================

export const CHAPTER_HISTORIE_12_1: TextbookChapter = {
  id: 'historie-12-1',
  courseId: 'historie',
  chapterNumber: '12.1',
  title: 'Etterkrigstid og økonomisk krise',
  description: 'De brølende 20-årene og den store depresjonen.',
  estimatedMinutes: 50,
  competenceGoals: ['ideologier, undertrykkelse, terror og Holocaust'],
  content: [
    {
      id: 'historie-12-1-intro',
      type: 'text',
      content: `## Fra krig til krise

Mellomkrigstiden (1918-1939) var preget av store svingninger. Etter krigens ødeleggelser kom en periode med optimisme og velstand i mange land - "de brølende 20-årene". Men i 1929 kollapset børsene, og verden ble kastet ut i den verste økonomiske krisen i moderne tid.

Den store depresjonen skapte arbeidsledighet, fattigdom og sosial uro som undergravde demokratiet og banet vei for ekstreme ideologier.`,
    },
    {
      id: 'historie-12-1-def-1',
      type: 'definition',
      title: 'Etterkrigstiden 1918-1923',
      content: `**Kaos og omveltninger:**
Krigen etterlot Europa i ruiner. Millioner av flyktninger, sultkatastrofer, epidemier (spanskesyken tok 50-100 millioner liv).

**Politisk ustabilitet:**
Revolusjoner og opprør mange steder: Russland (1917), Tyskland (1918-19), Ungarn, Bayern. Borgerkriger i Russland, Irland, Finland.

**Nye stater:**
Mange nye nasjonalstater ble skapt på ruinene av de gamle imperiene. Grensetvister og minoritetsproblemer.

**Inflasjon:**
Mange land hadde finansiert krigen med lån og pengetrykking. Resultatet var inflasjon - verst i Tyskland og Østerrike.

**Hyperinflasjon i Tyskland (1923):**
Prisene doblet seg på timer. Lønninger ble verdiløse før de kunne brukes. En brødkniv kostet milliarder mark. Middelklassens sparepenger ble ødelagt.`,
    },
    {
      id: 'historie-12-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-12-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv situasjonen i Europa rett etter første verdenskrig.',
        hints: ['Tenk på økonomi, politikk og sosiale forhold'],
        solution: 'Europa etter krigen var preget av kaos: 1) Økonomisk - ødeleggelser, gjeld, inflasjon og arbeidsledighet. 2) Politisk - fire imperier hadde kollapset, revolusjoner og opprør flere steder, nye stater med usikre grenser. 3) Sosialt - millioner av døde og sårede, flyktninger, krigsenker og foreldreløse, traumatiserte veteraner. 4) Helsemessig - spanskesyken drepte 50-100 millioner mennesker globalt. 5) Psykologisk - optimismen fra før krigen var knust, kynisme og desillusjon spredte seg. 6) Internasjonalt - bitterhet over fredsoppgjøret, særlig i Tyskland. Europa var svekket, og USAs betydning økte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-1-def-2',
      type: 'definition',
      title: 'De brølende 20-årene',
      content: `**Økonomisk oppgang (ca. 1924-1929):**
Etter kriseårene kom en periode med vekst, særlig i USA. Ny teknologi (biler, radio, film) endret hverdagen.

**Kulturell frigjøring:**
Jazz-musikk, moderne kunst, kvinnefrigjøring ("flappere"), nye danser og mote. Tiden ble kalt "roaring twenties".

**Massekultur:**
Filmstjerner, sportshelter og mediakjendiser. Hollywood ble verdens filmhovedstad.

**Modernisering:**
Elektrisitet, samlebåndsproduksjon, forbruksvarer som kjøleskap og støvsugere.

**Optimisme og spekulasjon:**
Troen på evig vekst førte til spekulasjon på børsen. Folk kjøpte aksjer med lånte penger.

**Geografisk ujevnt:**
Velstanden var størst i USA. Europa slet fortsatt med krigsgjeld og gjenoppbygging. Tyskland var avhengig av amerikanske lån.`,
    },
    {
      id: 'historie-12-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-12-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegnet "de brølende 20-årene", og hvorfor var velstanden ustabil?',
        hints: ['Tenk på økonomi, kultur og geografiske forskjeller'],
        solution: 'De brølende 20-årene var kjennetegnet av: Økonomisk vekst, særlig i USA, drevet av ny teknologi (biler, radio). Kulturell frigjøring med jazz, film og nye mote- og danseformer. Massekultur og forbrukssamfunn. Optimisme og tro på fremskritt. Velstanden var ustabil fordi: 1) Den var geografisk ujevn - USA blomstret, men Europa slet med krigsgjeld. 2) Spekulasjon - folk kjøpte aksjer med lånte penger basert på forventning om evig vekst. 3) Overproduksjon - industrien produserte mer enn forbrukerne kunne kjøpe. 4) Tyskland var avhengig av amerikanske lån for å betale erstatninger. 5) Jordbruket led - prisene falt og bønder slet. Fundamentet var skjørt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-1-def-3',
      type: 'definition',
      title: 'Børskrakket og den store depresjonen',
      content: `**Børskrakket (oktober 1929):**
Aksjekursene på Wall Street kollapset. "Svart tirsdag" (29. oktober) utløste panikksalg. Milliarder i verdier forsvant.

**Krakkets årsaker:**
- Spekulasjon og gjeldsdrevet kjøp
- Overproduksjon i industri og jordbruk
- Svakheter i det internasjonale finanssystemet

**Den store depresjonen:**
Krakket utløste en global økonomisk krise som varte til slutten av 1930-tallet.

**Konsekvenser:**
- Massiv arbeidsledighet (25-33% i mange land)
- Bankkollaps og tap av sparepenger
- Fattigdom, hjemløshet, sult
- Nedgang i verdenshandelen (tollmurer)
- Deflasjon - prisene falt, men det hjalp ikke når ingen hadde penger

**Smitteeffekt:**
Amerikanske banker kalte tilbake lån fra Europa, som førte til krise der.`,
    },
    {
      id: 'historie-12-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-12-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan spredte den økonomiske krisen seg fra USA til resten av verden?',
        hints: ['Tenk på lån, handel og finanssystemet'],
        solution: 'Krisen spredte seg fra USA gjennom flere mekanismer: 1) Amerikanske banker kalte tilbake lån fra Europa - Tyskland hadde lånt for å betale erstatninger, og da lånene ble trukket tilbake, kollapset tysk økonomi. 2) Amerikanske investeringer i utlandet stoppet opp. 3) Import til USA falt drastisk, noe som rammet land som eksporterte til USA. 4) Tollmurer - USA og andre land innførte høye tollsatser for å beskytte egen industri, noe som kvelte verdenshandelen. 5) Gullstandarden tvang land til å føre deflasjonspolitikk. 6) Bankkriser spredte seg - når én bank kollapset, mistet folk tilliten til andre banker. Det internasjonale finanssystemet var sammenkoblet, og krisen fulgte forbindelsene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-1-example-1',
      type: 'example',
      title: 'Eksempel: Arbeidsledighet under depresjonen',
      problem: 'Hvordan opplevde folk arbeidsledighet under den store depresjonen?',
      solution: `**Arbeidsledighetens omfang:**
- USA: 25% (1933) - 13 millioner uten arbeid
- Tyskland: 33% - 6 millioner arbeidsledige
- Norge: Opp til 33% i bygningsbransjen

**Dagliglivet:**
- Suppekjøkkener og brødkøer
- "Hoovervilles" - teltleirer av hjemløse i USA
- Familier mistet hjemmene sine
- Skam og tap av verdighet for forsørgere
- Økt kriminalitet og sosial nød

**Sosiale konsekvenser:**
- Psykiske problemer, selvmord
- Familier gikk i oppløsning
- Unge fikk ikke utdanning eller jobb
- Sinne mot "systemet" og politikerne
- Radikalisering - kommunisme og fascisme tilbød "løsninger"

Arbeidsledigheten var ikke bare et økonomisk problem, men en menneskelig tragedie som rammet millioner av familier.`,
    },
    {
      id: 'historie-12-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-12-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor førte den store depresjonen til politisk radikalisering?',
        hints: ['Tenk på hvordan krisen påvirket tilliten til demokratiet'],
        solution: 'Depresjonen førte til radikalisering fordi: 1) Demokratiske regjeringer virket handlingslammet - de klarte ikke å løse krisen, og folk mistet tilliten. 2) Liberalismen og kapitalismen så ut til å ha feilet - folk søkte alternativer. 3) Arbeidsledighet og fattigdom skapte desperat søken etter løsninger - ekstreme ideologier tilbød enkle svar. 4) Kommunister sa at kapitalismen måtte erstattes med planøkonomi. 5) Fascister og nazister lovte nasjonal gjenreisning, sterkt lederskap og skyldte på syndebukker (jøder, kommunister). 6) Mellomklassen, som tradisjonelt støttet demokratiet, ble radikalisert da sparepengene forsvant. Krisen viste at økonomisk kollaps truer demokratiet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-12-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-12-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft sammenhengen mellom den økonomiske krisen og fremveksten av ekstreme ideologier i Europa.',
        hints: ['Se på hvordan krisen undergravde tilliten til demokratiske løsninger'],
        solution: 'Sammenhengen var sterk: Den økonomiske krisen undergravde tilliten til demokratiet og kapitalismen som system. Når demokratiske regjeringer ikke klarte å løse arbeidsledighet og fattigdom, ble folk desillusjonerte. Ekstreme ideologier tilbød enkle svar og syndebukker. I Tyskland skapte hyperinflasjonen (1923) og depresjonen (1929-33) to bølger av radikalisering som hjalp nazistene til makten. Kommunistene vokste også fordi de kunne peke på Sovjetunionen som et alternativ. Mellomklassen, som normalt støttet moderate partier, ble radikalisert da de mistet alt. Men sammenhengen var ikke automatisk - noen land (Skandinavia, Storbritannia) beholdt demokratiet. Politiske valg, institusjoner og historisk bakgrunn spilte også inn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-12-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva kan vi lære av den store depresjonen om økonomiske kriser og politikk?',
        hints: ['Tenk på både økonomiske og politiske lærdommer'],
        solution: 'Lærdommene er mange: 1) Økonomiske kriser kan true demokratiet - folk som lider, kan vende seg til ekstreme løsninger. 2) Internasjonalt samarbeid er viktig - tollmurer og "beggar-thy-neighbour"-politikk forverret krisen. 3) Staten har en rolle i å stabilisere økonomien - Keynes argumenterte for motkonjunkturpolitikk. 4) Finansiell regulering trengs - spekulasjon uten kontroll skaper ustabilitet. 5) Sosiale sikkerhetsnett beskytter mot desperasjon - velferdsstatens fremvekst var delvis en respons. 6) Politisk lederskap er avgjørende - Roosevelt (USA) og sosialdemokratene i Skandinavia klarte å bevare demokratiet. Etter andre verdenskrig bygde man institusjoner (IMF, Verdensbanken) og velferdsstater for å unngå lignende katastrofer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_12_2: TextbookChapter = {
  id: 'historie-12-2',
  courseId: 'historie',
  chapterNumber: '12.2',
  title: 'Totalitære ideologier',
  description: 'Fascisme, nazisme og kommunisme.',
  estimatedMinutes: 55,
  competenceGoals: ['ideologier, undertrykkelse, terror og Holocaust'],
  content: [
    {
      id: 'historie-12-2-intro',
      type: 'text',
      content: `## Ekstremismens tidsalder

Mellomkrigstiden så fremveksten av totalitære ideologier som utfordret demokratiet og liberalismen. Kommunismen i Sovjetunionen, fascismen i Italia og nazismen i Tyskland representerte radikalt forskjellige visjoner, men delte viktige trekk: total kontroll, lederkulten og undertrykkelse av opposisjon.

Å forstå disse ideologiene er avgjørende for å forstå det 20. århundrets katastrofer og for å gjenkjenne lignende tendenser i dag.`,
    },
    {
      id: 'historie-12-2-def-1',
      type: 'definition',
      title: 'Totalitarisme',
      content: `**Totalitarisme:**
Et politisk system der staten søker total kontroll over alle sider av samfunnet og individets liv.

**Kjennetegn:**
- **Enpartistyre:** Bare ett parti er tillatt, opposisjon er forbudt
- **Lederkult:** Karismatisk leder med nesten religiøs status
- **Ideologi:** Altomfattende verdenssyn som skal forklare alt
- **Terror:** Hemmelig politi, fangeleirer, vilkårlige arrestasjoner
- **Propaganda:** Staten kontrollerer all informasjon og medier
- **Massemobilisering:** Alle skal delta aktivt i staten og partiet
- **Kontroll over privatlivet:** Familie, utdanning, kultur styres

**Forskjell fra autoritarisme:**
Autoritære regimer nøyer seg med å holde på makten. Totalitære regimer vil forme hele samfunnet og menneskesinnet.`,
    },
    {
      id: 'historie-12-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-12-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som kjennetegner et totalitært regime.',
        hints: ['Tenk på kontroll, ideologi og terror'],
        solution: 'Et totalitært regime kjennetegnes av: 1) Total kontroll - staten søker å kontrollere alle sider av samfunnet og individets liv, ikke bare politikk. 2) Enpartistyre - bare ett parti er tillatt, all opposisjon knuses. 3) Lederkult - én leder har nesten guddommelig status. 4) Altomfattende ideologi - en "sannhet" som skal forklare verden og retninggi alle. 5) Terror - hemmelig politi, fangeleirer, vilkårlige arrestasjoner skaper frykt. 6) Propaganda - staten kontrollerer all informasjon og former virkelighetsoppfatningen. 7) Massemobilisering - alle skal delta aktivt i statens prosjekt. 8) Kontroll over privatlivet - familie, utdanning, kultur styres av staten. Målet er ikke bare å holde makten, men å forme mennesker og samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-2-def-2',
      type: 'definition',
      title: 'Fascisme og nazisme',
      content: `**Fascisme (Italia, 1922-43):**
Benito Mussolini grunnla fascismen. Kjennetegn: nasjonalisme, korporativisme (samarbeid mellom stat, kapital og arbeid), militarisme, motstand mot liberalisme, sosialisme og demokrati.

**Nazisme (Tyskland, 1933-45):**
Adolf Hitler og NSDAP. Bygde på fascismen, men la til ekstrem rasisme og antisemittisme.

**Nazismens ideologi:**
- **Raseteori:** "Arisk" overlegenhet, andre raser var underlegne
- **Antisemittisme:** Jøder var roten til alt ondt
- **Lebensraum:** Tyskland trengte "livsrom" i øst
- **Førerprinsippet:** Absolutt lydighet mot Hitler

**Veien til makten:**
Hitler ble rikskansler i januar 1933 gjennom demokratiske valg, men avskaffet demokratiet raskt. Riksdagsbrannen (februar 1933) ga påskudd for unntakslover.`,
    },
    {
      id: 'historie-12-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-12-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var hovedforskjellen mellom italiensk fascisme og tysk nazisme?',
        hints: ['Tenk på rasisme og ideologi'],
        solution: 'Hovedforskjellen var raselæren: Italiensk fascisme var primært nasjonalistisk og autoritær, men hadde ikke biologisk rasisme som sentralt element (selv om Italia senere innførte raselover under tysk press). Nazismen derimot bygde hele ideologien på raseteori - troen på "arisk" overlegenhet og at andre raser, særlig jøder, måtte elimineres. Antisemittismen var grunnleggende for nazismen, men ikke for opprinnelig fascisme. Begge var nasjonalistiske, antidemokratiske og antisosialistiske, men nazismens rasetenkning gjorde den mer ekstremt morderisk. Konsekvensen ble Holocaust - et industrielt folkemord som ikke hadde parallell i fascistisk Italia.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-2-def-3',
      type: 'definition',
      title: 'Kommunismen i Sovjetunionen',
      content: `**Marxisme-leninisme:**
Lenin tilpasset Marx' teorier til russiske forhold. Partiet (bolsjevikene) skulle lede revolusjonen på vegne av arbeiderklassen.

**Sovjetunionen under Lenin (1917-24):**
- Revolusjon og borgerkrig
- "Krigskommunisme" - staten tar kontroll over økonomien
- NEP (1921) - begrenset markedsøkonomi

**Stalin (1924-53):**
- Sentralisert diktatur
- Kollektivisering av jordbruket - millioner døde i hungersnød
- Femårsplaner - tvungen industrialisering
- Den store terroren (1936-38) - massehenrettelser og gulag
- Personkult rundt Stalin

**Gulag:**
System av arbeidsleirer der millioner døde. Politiske fanger, "klassefiender" og vilkårlig arresterte.`,
    },
    {
      id: 'historie-12-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-12-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv Stalins styre i Sovjetunionen og dets menneskelige kostnader.',
        hints: ['Tenk på kollektivisering, terror og Gulag'],
        solution: 'Stalins styre var preget av total kontroll og massiv vold: 1) Kollektivisering - tvungen sammenslåing av bondejordbruk til kollektivbruk. Motstand ble knust, og "kulakker" (velstående bønder) ble deportert eller drept. Resultatet var hungersnød som tok 5-7 millioner liv, særlig i Ukraina (Holodomor). 2) Industrialisering - tvungen industrialisering gjennom femårsplaner skapte økonomisk vekst, men med enorme menneskelige kostnader. 3) Den store terroren (1936-38) - massearrestasjoner, skueprosesser og henrettelser av virkelige og innbilte fiender. 750 000 ble henrettet, millioner sendt til Gulag. 4) Gulag - system av arbeidsleirer der minst 1,5 millioner døde. Stalins styre kostet titalls millioner liv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-2-example-1',
      type: 'example',
      title: 'Eksempel: Propaganda i totalitære stater',
      problem: 'Hvordan brukte totalitære regimer propaganda for å kontrollere befolkningen?',
      solution: `**Propagandaens metoder:**

**Kontroll over mediene:**
Alle aviser, radio og film var statskontrollert. Ingen alternative informasjonskilder.

**Lederkult:**
Stalin, Hitler og Mussolini ble fremstilt som ufeilbare genier. Bilder, statuer og sitater overalt.

**Massemøter:**
Nürnberg-rallyene (Tyskland), 1. mai-parader (Sovjet) - spektakulære arrangementer som skapte følelse av fellesskap og makt.

**Utdanning:**
Barn ble indoktrinert fra tidlig alder. Hitlerjugend, pionerbevegelsen.

**Fiendebilde:**
Alltid en fiende å skylde på - jøder, kapitalister, klassfiender, utlendinger.

**Sensur og omskriving av historie:**
Uønsket informasjon ble fjernet. I Sovjet ble "fiender" retusjert ut av bilder.

**Virkning:**
Mange trodde oppriktig på ideologien. Andre levde i frykt og later som de trodde. Skillet mellom sannhet og løgn ble utvisket.`,
    },
    {
      id: 'historie-12-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-12-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor var propaganda så viktig for totalitære regimer?',
        hints: ['Tenk på kontroll, legitimitet og mobilisering'],
        solution: 'Propaganda var viktig fordi: 1) Legitimitet - regimene trengte å overbevise folk om at de hadde rett til å styre og at politikken var riktig. 2) Kontroll over virkelighetsoppfatningen - ved å kontrollere informasjon kunne staten bestemme hva folk "visste" om verden. 3) Mobilisering - folk skulle ikke bare adlyde, men aktivt støtte og delta. Propaganda skapte entusiasme. 4) Fiendebilde - ved å skape frykt for fiender (jøder, kapitalister) kunne regimet rettferdiggjøre undertrykkelse og avlede oppmerksomhet fra egne feil. 5) Enhet - propaganda skapte følelse av nasjonalt fellesskap og felles mål. 6) Lederkult - føreren ble fremstilt som ufeilbar, noe som gjorde kritikk til forræderi. Terror alene var ikke nok - regimene ville ha tilslutning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-12-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-12-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign nazismen og kommunismen som totalitære ideologier - hva var likt og hva var forskjellig?',
        hints: ['Se på mål, metoder og ofre'],
        solution: 'Likheter: Begge var totalitære - søkte total kontroll over samfunnet. Begge hadde enpartistyre, lederkult (Hitler/Stalin), terror (Gestapo/NKVD), fangeleirer (konsentrasjonsleirer/Gulag), propaganda og undertrykkelse av opposisjon. Begge avviste liberalt demokrati. Forskjeller: Nazismen var basert på rasisme og nasjonalisme - fienden var definert biologisk (jøder, slavere). Kommunismen var basert på klasseanalyse - fienden var definert økonomisk (borgerskapet, kulakker). Nazismen ville hierarki mellom raser, kommunismen ville (i teorien) likhet. Nazismen var åpent ekspansjonistisk, kommunismen hevdet å være internasjonal frigjøring. Begge førte til massedød, men motivene og ofrene var forskjellige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-12-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft hvordan totalitære regimer klarte å få mange mennesker til å støtte seg frivillig.',
        hints: ['Tenk på behov, løfter og psykologiske mekanismer'],
        solution: 'Totalitære regimer fikk støtte gjennom flere mekanismer: 1) De tilbød enkle svar på komplekse problemer - i krisetider var enkle forklaringer og syndebukker attraktive. 2) De ga mening og tilhørighet - ideologien ga et verdensbilde og fellesskap i en fragmentert tid. 3) De lovde fremgang - arbeidsplasser, nasjonal storhet, sosial rettferdighet. 4) De brukte frykt og belønning - ikke bare straff, men også karrieremuligheter for de lojale. 5) De utnyttet nasjonalisme og stolthet - særlig i land som følte seg ydmyket. 6) De kontrollerte informasjon - folk visste ofte ikke om alternativene eller kostnadene. 7) Gradvis normalisering - folk tilpasset seg nye normer steg for steg. Ikke alle var tvunget - mange trodde oppriktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_12_3: TextbookChapter = {
  id: 'historie-12-3',
  courseId: 'historie',
  chapterNumber: '12.3',
  title: 'Norge i mellomkrigstiden',
  description: 'Politikk, økonomi og samfunn i mellomkrigstidens Norge.',
  estimatedMinutes: 50,
  competenceGoals: ['velferdsutviklingen i Norge på 1900-tallet'],
  content: [
    {
      id: 'historie-12-3-intro',
      type: 'text',
      content: `## Norge mellom demokrati og krise

Mellomkrigstiden i Norge var preget av økonomiske kriser, sosiale konflikter og politiske spenninger. Likevel overlevde demokratiet, i motsetning til i mange andre europeiske land.

1930-tallet så fremveksten av en ny politisk konsensus - kriseforliket mellom Arbeiderpartiet og Bondepartiet i 1935 la grunnlaget for den norske velferdsstaten og det politiske samarbeidet som skulle prege etterkrigstiden.`,
    },
    {
      id: 'historie-12-3-def-1',
      type: 'definition',
      title: 'Økonomiske kriser',
      content: `**Etterkrigsboomen og krisen:**
Etter første verdenskrig kom først en kortvarig boom, deretter krise fra 1920. Prisfall, konkurser og arbeidsledighet.

**Paripolitikken:**
Regjeringen ville gjenopprette kronens førkrigskurs mot gull. Dette krevde deflasjon - fallende priser, lønnskutt og økt arbeidsledighet.

**Bankkrise (1920-årene):**
Mange banker gikk konkurs. Staten måtte redde banker for å unngå total kollaps.

**Den store depresjonen (1930-33):**
Global krise rammet Norge hardt. Arbeidsledigheten nådde 30% i enkelte bransjer. Fiskere og bønder slet.

**Menstadslaget (1931):**
Sammenstøt mellom politi/militær og arbeidere i Skien. Et symbol på klassekonfliktens alvor.

**Kronen falt fra gull (1931):**
Norge forlot gullstandarden, noe som lettet situasjonen noe.`,
    },
    {
      id: 'historie-12-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-12-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var paripolitikken, og hvordan påvirket den norsk økonomi på 1920-tallet?',
        hints: ['Tenk på kronekurs og konsekvenser for vanlige folk'],
        solution: 'Paripolitikken var regjeringens politikk for å gjenopprette kronens førkrigskurs mot gull. Dette krevde deflasjon - at prisene måtte falle. Konsekvensene var alvorlige: 1) Bedrifter måtte kutte kostnader, inkludert lønninger. 2) Arbeidsledigheten økte når bedrifter gikk konkurs eller kuttet. 3) Folk med gjeld fikk det vanskeligere - gjelden ble relativt større når prisene falt. 4) Bankkrisen forverret situasjonen. Paripolitikken ble kritisert for å prioritere finansiell stabilitet over vanlige folks velferd. Den bidro til klassekonflikter og sosial uro. Først da Norge forlot gullstandarden i 1931, ble situasjonen noe lettere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-3-def-2',
      type: 'definition',
      title: 'Politiske spenninger',
      content: `**Arbeiderpartiet:**
Ble revolusjonært i 1918 og tilsluttet seg Komintern (kommunistisk internasjonale). Trakk seg ut i 1923. Splittet - NKP ble dannet. Gradvis moderat på 1930-tallet.

**Bondepartiet:**
Representerte bønder og bygdefolket. Vokste seg sterkt. Kritisk til arbeiderbevegelsen.

**Borgelige partier:**
Høyre, Venstre og Bondepartiet vekslet på makten på 1920-tallet. Ustabile regjeringer.

**Nasjonal Samling (NS):**
Vidkun Quisling grunnla NS i 1933 etter fascistisk modell. Fikk aldri mer enn 2% ved valg, men skulle bli viktig under okkupasjonen.

**Klassekamp:**
1920-tallet var preget av streiker, lockout og konflikter mellom arbeid og kapital. Menstadslaget (1931) var et dramatisk høydepunkt.`,
    },
    {
      id: 'historie-12-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-12-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan endret Det norske Arbeiderparti seg fra 1918 til 1930-tallet?',
        hints: ['Tenk på ideologi, strategi og forhold til demokrati'],
        solution: 'Arbeiderpartiet gjennomgikk en dramatisk endring: På 1918 vedtok partiet et revolusjonært program og tilsluttet seg Komintern (den kommunistiske internasjonalen). Partiet så for seg at kapitalismen skulle styrtes gjennom revolusjon. I 1923 brøt partiet med Komintern over krav om sentralstyring fra Moskva - de mest revolusjonære dannet NKP. Utover 1920-tallet ble partiet gradvis mer moderat. I 1930-årene, særlig med kriseforliket i 1935, aksepterte partiet demokratiske spilleregler og parlamentarisme fullt ut. Fra revolusjonært parti til reformistisk parti som ville endre samfunnet gjennom valg og lovgivning. Denne endringen var avgjørende for norsk demokrati.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-3-def-3',
      type: 'definition',
      title: 'Kriseforliket 1935',
      content: `**Bakgrunn:**
Arbeiderpartiet ble største parti i 1933. Nygaardsvold-regjeringen trengte støtte i Stortinget.

**Forliket:**
Arbeiderpartiet og Bondepartiet inngikk et kompromiss: Arbeiderpartiet støttet landbrukspolitikk som hjalp bøndene, Bondepartiet støttet sosialpolitikk som hjalp arbeidsledige.

**Betydning:**
- Arbeiderpartiet ble et "stueremt" regjeringsparti
- Klassekonflikten ble dempet
- Grunnlag for brede kompromisser og konsensuspolitikk
- Velferdsstaten begynte å ta form

**Hovedavtalen (1935):**
LO og NAF (arbeidsgiverne) inngikk en avtale om spilleregler i arbeidslivet. Streik og lockout skulle være siste utvei.

**Johan Nygaardsvold:**
Statsminister 1935-45. Ledet krisepolitikken og Norge under andre verdenskrig i London.`,
    },
    {
      id: 'historie-12-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-12-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar betydningen av kriseforliket i 1935 for norsk politikk.',
        hints: ['Tenk på samarbeid, klassekamp og demokrati'],
        solution: 'Kriseforliket i 1935 var et historisk vendepunkt: 1) Det brakte Arbeiderpartiet til regjeringsmakt gjennom parlamentarisk samarbeid, ikke revolusjon - partiet ble "stueremt". 2) Det dempet klassekonflikten ved å vise at arbeidere og bønder kunne samarbeide til felles beste. 3) Det la grunnlaget for konsensuspolitikk og brede kompromisser som kom til å prege norsk politikk i tiår. 4) Det startet byggingen av velferdsstaten gjennom aktiv krisepolitikk. 5) Sammen med Hovedavtalen samme år skapte det stabile rammer for arbeidslivet. 6) Det viste at demokratiet kunne levere forbedringer for vanlige folk, noe som styrket demokratiet mot ekstremisme. Forliket var kimen til den norske modellen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-3-example-1',
      type: 'example',
      title: 'Eksempel: Hvorfor overlevde demokratiet i Norge?',
      problem: 'Mens demokratiet kollapset i mange europeiske land på 1930-tallet, overlevde det i Norge. Hvorfor?',
      solution: `**Faktorer som beskyttet norsk demokrati:**

**Økonomiske:**
- Krisen var alvorlig, men ikke like katastrofal som i Tyskland
- Kriseforliket i 1935 ga folk håp om forbedring
- Staten grep aktivt inn med krisepolitikk

**Politiske:**
- Arbeiderpartiet valgte reformisme fremfor revolusjon
- Bondepartiet samarbeidet i stedet for å radikaliseres
- Ingen tradisjon for militærkupp eller politisk vold

**Sosiale:**
- Relativt homogent samfunn uten store minoritetskonflikter
- Sterke organisasjoner (LO, bondeorganisasjoner) kanaliserte misnøye
- Hovedavtalen skapte spilleregler i arbeidslivet

**Kulturelle:**
- Demokratiske tradisjoner fra 1814 og parlamentarismen fra 1884
- Nasjonal Samling fikk aldri folkelig gjennomslag

Norge var ikke immun mot ekstremisme (NS eksisterte), men kombinasjonen av faktorer beskyttet demokratiet.`,
    },
    {
      id: 'historie-12-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-12-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign situasjonen i Norge og Tyskland på 1930-tallet - hvorfor fikk nazismen gjennomslag i det ene landet men ikke det andre?',
        hints: ['Se på økonomiske forhold, politiske tradisjoner og aktørenes valg'],
        solution: 'Flere faktorer forklarer forskjellen: 1) Økonomisk - Tyskland hadde hyperinflasjon (1923) og så massiv arbeidsledighet (33%), verre enn i Norge. Versailles-traktaten skapte bitterhet uten parallell. 2) Politisk - Weimar-republikken var ny og svak, norsk demokrati hadde dypere røtter. Tyske eliter (militær, næringsliv) støttet aldri demokratiet helt. 3) Historisk - Tyskland hadde tapt verdenskrigen og opplevde nasjonal ydmykelse. 4) Valg - Arbeiderpartiet valgte reformisme, tyske sosialdemokrater og kommunister bekjempet hverandre. Kriseforliket hadde ingen parallell i Tyskland. 5) Kulturelt - antisemittisme og nasjonalisme var sterkere i Tyskland. NS fikk aldri mer enn 2% i Norge. Kontekst og aktørers valg utgjorde forskjellen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-12-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-12-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan erfaringene fra mellomkrigstiden formet norsk politikk etter andre verdenskrig.',
        hints: ['Tenk på velferdsstat, samarbeid og konsensus'],
        solution: 'Mellomkrigstidens erfaringer formet etterkrigstiden på flere måter: 1) Kriseforliket og Hovedavtalen ble modeller for samarbeid mellom partier og organisasjoner - den "norske modellen". 2) Lærdom om at økonomiske kriser truer demokratiet førte til aktiv økonomisk politikk og velferdsstat som buffer. 3) Erfaringen med klassekamp gjorde at samarbeid ble verdsatt høyere - trepartssamarbeid mellom stat, arbeid og kapital. 4) NS og okkupasjonen styrket demokratisk bevissthet og antifascisme. 5) Arbeiderbevegelsens moderering fortsatte - Arbeiderpartiet dominerte etterkrigstiden som et pragmatisk styringsparti. 6) Frykt for ustabilitet bidro til bred politisk konsensus. Mellomkrigstiden ble en lærepenge om hva Norge skulle unngå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-12-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva kan vi lære av mellomkrigstidens Norge om forholdet mellom økonomisk krise og demokrati?',
        hints: ['Tenk på hva som truet og hva som beskyttet demokratiet'],
        solution: 'Mellomkrigstidens Norge lærer oss: 1) Økonomiske kriser truer demokratiet - når folk lider og systemet ikke leverer, blir ekstremisme attraktivt. 2) Men demokratiets skjebne er ikke forutbestemt av økonomi - politiske valg betyr noe. 3) Kompromissvilje og samarbeid på tvers av klasseskiller kan redde demokratiet - kriseforliket viste dette. 4) Sterke organisasjoner (fagforeninger, bondelag) kan kanalisere misnøye konstruktivt i stedet for destruktivt. 5) Aktiv krisepolitikk som gir folk håp er viktig - passivitet er farlig. 6) Demokratiske tradisjoner og politisk kultur er viktige ressurser. Norge var ikke immunt mot ekstremisme, men kloke valg og gunstige omstendigheter beskyttet demokratiet. Lærdom for vår tid: demokrati krever aktivt vedlikehold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_12_4: TextbookChapter = {
  id: 'historie-12-4',
  courseId: 'historie',
  chapterNumber: '12.4',
  title: 'Veien mot ny verdenskrig',
  description: 'Appeasement, ekspansjon og krigsutbruddet.',
  estimatedMinutes: 45,
  competenceGoals: ['ideologier, undertrykkelse, terror og Holocaust'],
  content: [
    {
      id: 'historie-12-4-intro',
      type: 'text',
      content: `## Fra fred til krig

Bare 20 år etter "krigen for å avslutte alle kriger" brøt en ny og enda mer ødeleggende verdenskrig ut. Hvordan kunne dette skje? Svaret ligger i Hitlers aggressive utenrikspolitikk og de demokratiske statenes mislykkede forsøk på å unngå krig gjennom ettergivenheten som kalles "appeasement".

Trinn for trinn brøt Hitler Versailles-traktaten og utvidet Tysklands makt, mens Storbritannia og Frankrike lot det skje i håp om å bevare freden.`,
    },
    {
      id: 'historie-12-4-def-1',
      type: 'definition',
      title: 'Hitlers utenrikspolitikk',
      content: `**Mål:**
- Rive opp Versailles-traktaten
- Samle alle tyskere i ett rike ("Anschluss")
- Skaffe "Lebensraum" (livsrom) i øst for den "ariske rase"

**Metode:**
Hitler kombinerte diplomatisk press, løfter om fred og militære trusler. Han testet grenser og rykket frem når motstand uteble.

**Steg for steg:**
- 1933: Tyskland forlater Folkeforbundet
- 1935: Opprustning offentliggjøres (brudd på Versailles)
- 1936: Rhinland remilitariseres
- 1936: Roma-Berlin-aksen (allianse med Italia)
- 1936: Anti-Kominternpakten (med Japan)
- 1938: Anschluss med Østerrike
- 1938: Sudetenland innlemmes (München-avtalen)
- 1939: Tsjekkoslovakia okkuperes
- 1939: Angrep på Polen - krigen bryter ut`,
    },
    {
      id: 'historie-12-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-12-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv Hitlers utenrikspolitiske mål og hvordan han gradvis nådde dem.',
        hints: ['Følg de ulike stegene fra 1933 til 1939'],
        solution: 'Hitlers mål var å rive opp Versailles-traktaten, samle alle tyskere i ett rike og skaffe "livsrom" i øst. Han nådde målene gradvis: 1933 - forlot Folkeforbundet. 1935 - gjeninnførte verneplikten og offentliggjorde opprustning (brudd på Versailles). 1936 - remilitariserte Rhinland (nytt brudd). 1938 - gjennomførte Anschluss med Østerrike, deretter krevde Sudetenland fra Tsjekkoslovakia (München). 1939 - okkuperte resten av Tsjekkoslovakia, så angrep på Polen. Hvert steg testet Vestmaktenes vilje til å reagere. Da de ikke reagerte, ble Hitler modigere. Han kombinerte diplomati, propaganda og militære trusler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-4-def-2',
      type: 'definition',
      title: 'Appeasement-politikken',
      content: `**Appeasement:**
Politikken med å gi etter for aggressive krav for å unngå krig. Forbindes særlig med den britiske statsministeren Neville Chamberlain.

**Begrunnelser:**
- Versailles var urettferdig - noen tyske krav var rimelige
- Folkeopinionen var sterkt imot ny krig
- Storbritannia og Frankrike var ikke klare til krig
- Kommunismen var like farlig som nazismen
- Diplomati og forhandlinger var bedre enn krig

**München-konferansen (september 1938):**
Hitler krevde Sudetenland (tysk-befolket del av Tsjekkoslovakia). Chamberlain og Daladier (Frankrike) møtte Hitler i München og ga etter. Tsjekkoslovakia ble ikke invitert.

**"Fred i vår tid":**
Chamberlain kom hjem og erklærte at han hadde sikret fred. Seks måneder senere okkuperte Hitler resten av Tsjekkoslovakia.`,
    },
    {
      id: 'historie-12-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-12-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var appeasement-politikken, og hvorfor valgte Storbritannia og Frankrike denne linjen?',
        hints: ['Tenk på krigsfrykt, Versailles og opprustning'],
        solution: 'Appeasement var politikken med å gi etter for aggressive krav for å unngå krig. Storbritannia og Frankrike valgte denne linjen fordi: 1) Folkeopinionen var sterkt imot ny krig - minnene fra første verdenskrig var fortsatt ferske. 2) De var ikke militært klare til krig - opprustningen hang etter. 3) Mange mente at Versailles-traktaten hadde vært urettferdig og at noen tyske krav var rimelige. 4) Kommunismen ble sett som like farlig - noen så Hitler som en buffer mot Sovjet. 5) Troen på at diplomati kunne løse konflikter. 6) Økonomisk krise begrenset ressurser til opprustning. I ettertid er appeasement blitt symbol på feighet og naivitet, men valgene var forståelige i samtiden - selv om de var feil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-4-def-3',
      type: 'definition',
      title: 'Molotov-Ribbentrop-pakten',
      content: `**Hitler-Stalin-pakten (23. august 1939):**
Nazi-Tyskland og Sovjetunionen inngikk en ikke-angrepspakt som sjokkerte verden.

**Offentlig:**
Partene lovet å ikke angripe hverandre.

**Hemmelig tilleggsprotokoll:**
Øst-Europa ble delt i interessesfærer:
- Tyskland: Vest-Polen
- Sovjetunionen: Øst-Polen, Finland, de baltiske statene, Bessarabia

**Betydning:**
Pakten fjernet Hitlers frykt for tofrontskrig og ga ham frie hender til å angripe Polen. Stalin fikk tid og territorier. For kommunister verden over var det et sjokk at Sovjet allierte seg med nazistene.

**1. september 1939:**
Tyskland angrep Polen. Storbritannia og Frankrike erklærte krig to dager senere. Andre verdenskrig var i gang.`,
    },
    {
      id: 'historie-12-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-12-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor var Molotov-Ribbentrop-pakten så overraskende, og hvilken betydning hadde den?',
        hints: ['Tenk på ideologi og strategiske konsekvenser'],
        solution: 'Pakten var overraskende fordi nazisme og kommunisme var rake motsetninger ideologisk. Hitler hadde bygget karrieren på å bekjempe "bolsjevismen", og Stalin hadde fordømt fascismen. At de to verste fiendene plutselig ble allierte, sjokkerte verden. Paktens betydning: 1) Den fjernet Hitlers frykt for tofrontskrig - han kunne nå angripe Polen uten å bekymre seg for Sovjet. 2) Den hemmelige protokollen delte Øst-Europa mellom dem. 3) Den ga Stalin tid til å forberede seg og territorier som buffer. 4) Den demoraliserte vestlige kommunister og antifascister. 5) Den gjorde krigen uunngåelig - en uke senere angrep Hitler Polen. Pakten viste at realpolitikk kunne trumfe ideologi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-4-example-1',
      type: 'example',
      title: 'Eksempel: München-konferansen 1938',
      problem: 'Hva skjedde under München-konferansen, og hvorfor er den blitt symbol på mislykket diplomati?',
      solution: `**München-konferansen (29.-30. september 1938):**

**Bakgrunn:**
Hitler krevde Sudetenland (tysk-befolket grenseområde) fra Tsjekkoslovakia. Han truet med krig.

**Konferansen:**
Hitler, Mussolini, Chamberlain (Storbritannia) og Daladier (Frankrike) møttes i München. Tsjekkoslovakia ble ikke invitert.

**Resultatet:**
De fire maktene ble enige om at Sudetenland skulle overføres til Tyskland. Tsjekkoslovakia måtte akseptere.

**"Fred i vår tid":**
Chamberlain kom hjem og viftet med avtalen: "Jeg tror dette er fred i vår tid."

**Konsekvensen:**
Mars 1939 okkuperte Hitler resten av Tsjekkoslovakia - avtalen var verdiløs.

**Symbol:**
München er blitt symbol på at appeasement ikke fungerer mot aggressive diktatorer. Uttrykket "en ny München" brukes om svakhet overfor aggresjon. Men noen historikere påpeker at München kjøpte tid til opprustning.`,
    },
    {
      id: 'historie-12-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-12-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Kunne krigen vært unngått hvis Vestmaktene hadde stått imot Hitler tidligere?',
        hints: ['Vurder ulike tidspunkter der motstand kunne endret utviklingen'],
        solution: 'Det er flere tidspunkter der motstand kanskje kunne endret historien: 1936 - da Hitler remilitariserte Rhinland, var den tyske hæren svak; militære ledere var redde for fransk motoffensiv. 1938 - under Sudetenland-krisen var det tyske generaler som planla kupp mot Hitler hvis det ble krig; München fjernet denne muligheten. Motargumenter: Folkeopinionen ville ikke støttet krig. Storbritannia og Frankrike var ikke militært klare. Ingen kunne vite sikkert hvordan Hitler ville reagere. Kanskje hadde tidligere motstand bare utsatt krigen. Men de fleste historikere mener at tidlig motstand hadde hatt større sjanse for å lykkes enn sent - Hitler ble bare sterkere for hvert steg. Lærdommen er at aggressorer må stoppes tidlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-12-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-12-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvem som hadde ansvar for utbruddet av andre verdenskrig.',
        hints: ['Vurder Hitler, appeasement-politikerne, Versailles-freden og Stalin'],
        solution: 'Ansvaret kan plasseres på flere nivåer: Hitler og nazi-Tyskland bærer hovedansvaret - de valgte aggresjon og krig bevisst. Appeasement-politikerne lot Hitler vokse seg sterk ved å ikke stå imot, men de handlet ut fra forståelige motiver (krigsfrykt). Versailles-traktaten skapte bitterhet i Tyskland som Hitler utnyttet - men dette rettferdiggjør ikke nazismen. Stalin bidro ved å inngå pakten med Hitler, som muliggjorde angrepet på Polen - men han handlet også ut fra egeninteresse. Det internasjonale systemet (Folkeforbundets svakhet) muliggjorde aggresjon. I siste instans valgte Hitler krig, og nazismen var den drivende kraften. Men konteksten av mislykket fredsslutning, økonomisk krise og svake demokratier skapte forutsetningene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-12-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-12-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva kan historien om veien til andre verdenskrig lære oss om internasjonal politikk i dag?',
        hints: ['Tenk på hvordan man håndterer aggressive stater'],
        solution: 'Historien gir flere lærdommer: 1) Appeasement fungerer ikke mot diktatorer som ser kompromisser som svakhet - etter München ble Hitler bare modigere. 2) Aggresjon må møtes tidlig, før den aggressive parten blir for sterk. 3) Internasjonale institusjoner må ha makt til å håndheve sine regler - Folkeforbundet var for svakt. 4) Fredstraktater bør ikke være så harde at de skaper grobunn for revansje. 5) Økonomiske kriser og sosial nød kan true demokratiet og skape grobunn for ekstremisme. 6) Allianser må være troverdige for å avskrekke. Disse lærdommene påvirket etterkrigstiden (NATO, EF, FN) og siteres fortsatt i debatter om hvordan man skal møte autoritære stater som bryter internasjonale regler.',
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

// VG2-kapitler fra denne filen (Kap 9-10)
export const HISTORIE_CHAPTERS_DEL3_VG2 = [
  CHAPTER_HISTORIE_9_1,
  CHAPTER_HISTORIE_9_2,
  CHAPTER_HISTORIE_9_3,
  CHAPTER_HISTORIE_9_4,
  CHAPTER_HISTORIE_10_1,
  CHAPTER_HISTORIE_10_2,
  CHAPTER_HISTORIE_10_3,
  CHAPTER_HISTORIE_10_4,
];

// VG3-kapitler fra denne filen (Kap 11-12)
export const HISTORIE_CHAPTERS_DEL3_VG3 = [
  CHAPTER_HISTORIE_11_1,
  CHAPTER_HISTORIE_11_2,
  CHAPTER_HISTORIE_11_3,
  CHAPTER_HISTORIE_11_4,
  CHAPTER_HISTORIE_12_1,
  CHAPTER_HISTORIE_12_2,
  CHAPTER_HISTORIE_12_3,
  CHAPTER_HISTORIE_12_4,
];

// Alle kapitler fra denne filen (bakoverkompatibilitet)
export const HISTORIE_CHAPTERS_DEL3 = [
  ...HISTORIE_CHAPTERS_DEL3_VG2,
  ...HISTORIE_CHAPTERS_DEL3_VG3,
];
