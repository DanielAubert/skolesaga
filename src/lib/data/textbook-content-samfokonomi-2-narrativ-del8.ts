/* eslint-disable */
// @ts-nocheck
/**
 * Samfunnsøkonomi 2 (VG3) - NARRATIV VERSJON DEL 8
 * Kapittel 8.1-8.5: Aktuelle økonomiske debatter
 *
 * Narrativ versjon optimalisert for lesing/lytting på mobil.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8.1 NARRATIV: Ulikhet og rettferdighet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_8_1_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-8-1-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '8.1',
  title: 'Ulikhet og rettferdighet',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvordan en fransk økonom satte fyr på ulikhetsdebatten – og hvorfor spørsmålet om hvem som får hva, er vår tids mest brennende økonomiske stridstema.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte aktuelle økonomiske debatter med utgangspunkt i ulike teoretiske perspektiver',
    'analysere årsaker til og konsekvenser av økonomisk ulikhet og vurdere virkemidler for omfordeling',
  ],
  linkedChapterId: 'samfokonomi-2-8-1',
  content: [
    {
      id: 'samfokonomi-2-8-1-n-intro',
      type: 'text',
      content: `## En bok som rystet verden

I 2013 publiserte den franske økonomen Thomas Piketty en murstein av en bok: *Capital in the Twenty-First Century*. Den ble en usannsynlig bestselger – en 700 siders fagbok om formuesfordeling som toppet bestselgerlistene i USA og Europa. Piketty hadde brukt femten år på å grave i skattedata fra over tjue land, helt tilbake til 1700-tallet. Konklusjonen hans var urovekkende: den økonomiske ulikheten i vestlige land hadde vokst kraftig siden 1980-tallet, og den ville fortsette å vokse dersom ikke politikerne grep inn.

Men hvorfor engasjerte dette så mange? Fordi ulikhet ikke bare handler om tall i et regneark – det handler om hva slags samfunn vi vil ha. Kan et demokrati fungere godt hvis noen få eier det meste? Er det rettferdig at en som arver millioner tjener mer på formuen sin enn en sykepleier gjør på en livstid med arbeid? Og finnes det en grense for hvor mye ulikhet et samfunn tåler før det begynner å slå sprekker?

I dette kapittelet skal vi dykke inn i en av vår tids mest brennende debatter. Vi skal se på hvordan ulikhet måles, forstå Pikettys berømte teori, og veie argumentene for og mot omfordeling.`,
    },
    {
      id: 'samfokonomi-2-8-1-n-section1',
      type: 'text',
      content: `## Å måle det ulike

Før vi kan diskutere ulikhet, trenger vi verktøy for å måle den. Det viktigste er **Gini-koeffisienten**, oppkalt etter den italienske statistikeren Corrado Gini. Den fungerer som et termometer for ulikhet: en verdi på 0 betyr at alle har nøyaktig lik inntekt, mens 1 betyr at én person har alt. Norge ligger på rundt 0,27 for disponibel inntekt – blant de laveste i verden. USA, til sammenligning, ligger på omtrent 0,39. Sør-Afrika, et av verdens mest ulike land, har en Gini på over 0,60.

Men det er viktig å skille mellom to typer ulikhet. **Inntektsulikhet** handler om forskjeller i hva folk tjener hvert år – lønn, kapitalinntekter, overføringer fra staten. **Formuesulikhet** handler om hva folk *eier* – bolig, aksjer, bankinnskudd, minus gjeld. Og her er overraskelsen: formuesulikheten er alltid mye, mye større enn inntektsulikheten. I Norge er Gini for inntekt rundt 0,27, men for formue er den over 0,70. Grunnen er enkel: formue akkumuleres over tid og over generasjoner. Rentes rente-effekten gjør at store formuer vokser raskere enn små, og arv overfører rikdom fra foreldre til barn.

Det er her Pikettys berømte formel kommer inn: $r > g$. Bokstaven $r$ står for avkastningen på kapital – det du tjener på aksjer, eiendom og andre investeringer. Bokstaven $g$ står for den økonomiske vekstraten – altså hvor mye den samlede økonomien vokser. Pikettys poeng er at når $r$ er større enn $g$ over lang tid, vil de som allerede eier kapital, se formuen sin vokse raskere enn resten av samfunnet. Historisk har $r$ ligget på 4–5 prosent, mens $g$ sjelden har oversteget 1–2 prosent. Det betyr at kapitaleierne, nesten automatisk, drar fra.

La oss gjøre det konkret. Tenk deg to personer: Anna arver 10 millioner kroner og investerer dem med 5 prosent årlig avkastning. Bjørn jobber som lærer og tjener 600 000 kroner i året med 2 prosent reallønnsvekst. Etter 20 år har Annas formue vokst til over 26,5 millioner – uten at hun har jobbet en dag. Bjørns samlede inntekt over samme periode er omtrent 14,6 millioner – før skatt og alle levekostnader er betalt. Pikettys poeng er ikke at Anna er et dårlig menneske, men at systemet i seg selv produserer ulikhet.`,
    },
    {
      id: 'samfokonomi-2-8-1-n-section2',
      type: 'text',
      content: `## Omfordelingsdebatten – mellom frihet og likhet

Så hva skal vi gjøre med ulikheten? Her møter vi en av filosofiens og økonomiens eldste spenninger: balansen mellom likhet og frihet, mellom fellesskapets behov og individets rettigheter.

På den ene siden står tenkere som **John Rawls**, som formulerte et berømt tankeeksperiment: Tenk deg at du skal designe samfunnet fra bunnen av, bak et «slør av uvitenhet». Du vet ikke om du blir rik eller fattig, frisk eller syk, talentfull eller ikke. Hva slags samfunn ville du velge? Rawls mente at de fleste, under slik usikkerhet, ville velge et system med et solid sikkerhetsnett – fordi risikoen for å havne på bunnen er reell. Argumentet for omfordeling er sterkt: stor ulikhet hemmer sosial mobilitet, konsentrert rikdom gir urimelig politisk makt, og fattige bruker en større andel av inntekten sin, slik at omfordeling faktisk kan øke den samlede etterspørselen i økonomien.

På den andre siden står **Robert Nozick** og det liberale perspektivet. Nozick mente at rettferdig ervervede inntekter tilhører den som har tjent dem, og at tvungen omfordeling krenker individets rettigheter. Høye skatter svekker insentivene til å jobbe, spare og investere. I en globalisert verden er kapital mobil – de rikeste kan flytte pengene sine til lavskattland. Og omfordeling kan skape avhengighet som undergraver egeninnsats.

I Norge har vi valgt en mellomvei, med flere virkemidler. Vi har **progressiv inntektsskatt**, der de med høyere inntekt betaler en større andel. Vi har **formuesskatt** – en årlig skatt på netto formue over et visst bunnfradrag. Norge er ett av svært få OECD-land som beholder denne skatten, med en sats på rundt 1 prosent. Vi har universelle offentlige tjenester som utdanning og helsevesen, og vi har overføringer som barnetrygd og bostøtte. Hvert av disse virkemidlene har sine styrker og svakheter. Formuesskatten treffer konsentrert rikdom, men kan føre til kapitalflukt. Progressiv skatt er bred, men inviterer til skatteplanlegging. Arveavgift hindrer dynastisk rikdom, men ble avskaffet i Norge i 2014 fordi den var upopulær og ga lite proveny.

Ulikhetsdebatten har ingen fasitsvar. Den tvinger oss til å ta stilling til hva vi mener med rettferdighet – er det lik fordeling, like muligheter, eller frihet til å beholde det man har tjent?`,
    },
    {
      id: 'samfokonomi-2-8-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-8-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på ulikhet og omfordeling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-8-1-n-quiz1-q0',
            task: 'Hva sier Pikettys teori om $r > g$?',
            options: [
              { id: 'a', text: 'At kapitalavkastningen over tid tenderer til å være høyere enn den økonomiske vekstraten, noe som øker formuesulikheten', isCorrect: true },
              { id: 'b', text: 'At renten alltid er høyere enn BNP-veksten', isCorrect: false },
              { id: 'c', text: 'At rike land alltid vokser raskere enn fattige land', isCorrect: false },
              { id: 'd', text: 'At skatteinntektene vokser raskere enn offentlige utgifter', isCorrect: false },
            ],
            solution: 'Pikettys hovedpoeng er at når avkastningen på kapital (r) overstiger den økonomiske vekstraten (g), vil de som eier kapital, se formuen sin vokse raskere enn resten av samfunnet. Arbeids­inntekter følger omtrent g, mens kapitalinntekter følger r.',
          },
          {
            id: 'samfokonomi-2-8-1-n-quiz1-q1',
            task: 'Hvorfor er formuesulikheten vanligvis mye større enn inntektsulikheten?',
            options: [
              { id: 'a', text: 'Fordi staten bestemmer inntektsfordelingen, men ikke formuesfordelingen', isCorrect: false },
              { id: 'b', text: 'Fordi formue akkumuleres over tid og generasjoner gjennom arv og rentes rente-effekten', isCorrect: true },
              { id: 'c', text: 'Fordi inntektsskatt er høyere enn formuesskatt', isCorrect: false },
              { id: 'd', text: 'Fordi formue ikke kan måles like nøyaktig som inntekt', isCorrect: false },
            ],
            solution: 'Formue bygges opp over livstid og overføres mellom generasjoner gjennom arv. Rentes rente-effekten gjør at store formuer vokser raskere enn små. I Norge er Gini for inntekt ca. 0,27, men for formue over 0,70.',
          },
          {
            id: 'samfokonomi-2-8-1-n-quiz1-q2',
            task: 'Hva menes med Rawls\' «slør av uvitenhet»?',
            options: [
              { id: 'a', text: 'At folk flest ikke forstår hvordan økonomien fungerer', isCorrect: false },
              { id: 'b', text: 'At staten skjuler informasjon om ulikhet', isCorrect: false },
              { id: 'c', text: 'Et tankeeksperiment der man velger samfunnsregler uten å vite hvilken posisjon man selv vil ha', isCorrect: true },
              { id: 'd', text: 'At skattesystemet er så komplisert at ingen forstår det', isCorrect: false },
            ],
            solution: 'Rawls\' slør av uvitenhet er et tankeeksperiment: hvis du skulle designe samfunnet uten å vite om du selv ble rik eller fattig, frisk eller syk, ville du trolig velge et system med et godt sikkerhetsnett og rimelig fordeling.',
          },
          {
            id: 'samfokonomi-2-8-1-n-quiz1-q3',
            task: 'Hva er et vanlig argument MOT formuesskatt?',
            options: [
              { id: 'a', text: 'Den rammer bare de fattigste', isCorrect: false },
              { id: 'b', text: 'Den kan føre til kapitalflukt fordi de rikeste flytter formuen sin til utlandet', isCorrect: true },
              { id: 'c', text: 'Den gir for mye inntekt til staten', isCorrect: false },
              { id: 'd', text: 'Den er ulovlig ifølge EØS-avtalen', isCorrect: false },
            ],
            solution: 'Et hovedargument mot formuesskatt er at kapital er mobil. De rikeste kan flytte formue til land uten formuesskatt, slik at skatten rammer bedriftseiere med formue bundet i virksomheten hardere enn de mest velstående.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-8-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi dykket ned i en av vår tids viktigste økonomiske debatter. **Gini-koeffisienten** måler ulikhet på en skala fra 0 til 1, og Norge har relativt lav inntektsulikhet sammenlignet med mange andre land. **Formuesulikhet** er derimot langt større enn inntektsulikhet på grunn av akkumulering og arv. Pikettys teori om **$r > g$** forklarer hvorfor formuesulikheten tenderer til å øke: kapitalavkastningen overstiger den økonomiske veksten. Omfordelingsdebatten står mellom **Rawls'** rettferdighetssyn, som taler for omfordeling, og **Nozicks** frihetsperspektiv, som vektlegger individets rett til å beholde det man har tjent. Norge bruker en kombinasjon av progressiv skatt, **formuesskatt** og universelle offentlige tjenester for å begrense ulikheten.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2 NARRATIV: Boligmarkedet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_8_2_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-8-2-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '8.2',
  title: 'Boligmarkedet',
  subtitle: 'Narrativ versjon',
  description: 'Om Norges kanskje viktigste marked – der drømmen om egen bolig møter realitetene av gjeldsvekst, renteøkninger og et skattesystem som belønner boligspekulasjon.',
  estimatedMinutes: 22,
  competenceGoals: [
    'drøfte aktuelle økonomiske debatter med utgangspunkt i ulike teoretiske perspektiver',
    'drøfte utfordringer knyttet til boligmarked, gjeldsvekst og finansiell stabilitet',
  ],
  linkedChapterId: 'samfokonomi-2-8-2',
  content: [
    {
      id: 'samfokonomi-2-8-2-n-intro',
      type: 'text',
      content: `## Drømmen om egen bolig

Det er noe spesielt med nordmenns forhold til bolig. Å eie sin egen bolig er ikke bare et sted å bo – det er en del av identiteten, en følelse av trygghet, og for de fleste den klart største investeringen de noensinne gjør. Over 80 prosent av norske husholdninger eier boligen sin, et av de høyeste tallene i Europa.

Men bak denne drømmen skjuler det seg en økonomisk historie som er langt mer dramatisk enn de fleste er klar over. Siden 1990-tallet har boligprisene i Norge tredoblet seg – justert for inflasjon. En leilighet i Oslo som kostet én million i 1995, koster kanskje fire millioner i dag. Og for å ha råd til den, har nordmenn lånt som aldri før. Gjelden i norske husholdninger utgjør nå over 250 prosent av disponibel inntekt – det betyr at for hver krone du har å rutte med etter skatt, skylder du to og en halv. Det er blant de høyeste gjeldsratene i hele OECD.

Hvordan havnet vi her? Og hva betyr det for stabiliteten i norsk økonomi? For å forstå det, må vi begynne med det mest grunnleggende: hva er det egentlig som bestemmer boligprisene?`,
    },
    {
      id: 'samfokonomi-2-8-2-n-section1',
      type: 'text',
      content: `## Tilbud, etterspørsel og en veldig treg tilbudskurve

Som i alle markeder bestemmes boligprisene av tilbud og etterspørsel. Men **boligmarkedet** skiller seg fra de fleste andre markeder på én avgjørende måte: tilbudet reagerer ekstremt sakte. Du kan ikke trylle frem nye boliger over natten. Det tar gjerne to til fire år fra noen bestemmer seg for å bygge til det faktisk står en ny bolig klar – med reguleringsplaner, byggesøknader, grunnarbeid og selve byggeprosessen. I tillegg er tomtetilgangen begrenset, særlig i byer som Oslo og Bergen som er omgitt av fjord og åser.

Denne tregheten betyr at når etterspørselen øker, slår det i hovedsak ut i høyere priser, ikke i flere boliger – i hvert fall på kort sikt. Og etterspørselen har økt massivt av flere grunner. **Renten** er kanskje den viktigste enkeltfaktoren. En lavere rente gjør det billigere å betjene et boliglån, slik at folk kan by høyere. Studier viser at ett prosentpoeng lavere rente typisk øker boligprisene med 5–8 prosent. Etter 2014 sank renten i Norge til historisk lave nivåer, og boligprisene skjøt fart.

I tillegg har **inntektsveksten** gitt folk mer å rutte med, **befolkningsveksten** og urbaniseringen har presset etterspørselen i byene, og **forventninger** om videre prisvekst har skapt selvforsterkende prosesser – folk skynder seg å kjøpe fordi de tror prisene bare vil fortsette å stige. Men det finnes enda en faktor som er lett å overse: **skattesystemet**. Norge gir fradrag for renteutgifter på boliglån, skattefritt salg av egen bolig etter ett års botid, og verdsetter boligen til bare 25 prosent av markedsverdi i formuesbeskatningen. Til sammenligning skattlegges aksjeinntekter med nesten 38 prosent. Dette gir nordmenn et kraftig insentiv til å putte pengene sine i bolig fremfor i andre investeringer.`,
    },
    {
      id: 'samfokonomi-2-8-2-n-section2',
      type: 'text',
      content: `## Gjeldsspiralen og frykten for krakk

Sammenhengen mellom boligpriser og gjeld er potensielt farlig, fordi den kan bli en selvforsterkende spiral. Slik fungerer den: Boligprisene stiger, og de som allerede eier bolig, ser formuen sin øke. Med høyere formue kan de låne mer – banken godtar tross alt boligen som sikkerhet. Økte lån betyr mer penger som jager boliger, og prisene presses ytterligere opp. Nye kjøpere som vil inn i markedet, må ta opp stadig større lån.

For å bremse denne dynamikken innførte Finansdepartementet **boliglånsforskriften**. Den setter klare grenser: maks 85 prosent belåningsgrad, avdragsplikt dersom lånet overstiger 60 prosent av boligverdien, og et krav om at låntakeren skal tåle en renteøkning på tre prosentpoeng. I Oslo gjelder enda strengere regler for sekundærboliger, med maks 60 prosent belåning.

Men forskriften er omdiskutert. Den rammer **førstegangskjøpere** hardest, fordi de mangler egenkapital. Barn av velstående foreldre kan få hjelp, men de uten en slik «bank of mum and dad» stenges ute. Og forskriften behandler bare symptomene – den bremser etterspørselen, men gjør ingenting med den grunnleggende årsaken: at det bygges for lite i pressområdene.

Norges Bank har gjentatte ganger advart om at den høye gjeldsgraden er en vesentlig sårbarhet. Historien har vist hva som kan skje. Under den norske **bankkrisen 1988–1993** falt boligprisene med rundt 40 prosent. Husholdninger ble «under vann» – gjelden var høyere enn boligens verdi. Folk strammet inn forbruket, bankene tapte penger, og en nedadgående spiral forsterket resesjonen. Hele banksystemet måtte reddes av staten. Denne erfaringen er grunnen til at reguleringsmyndighetene i dag følger boligmarkedet med argusøyne.`,
    },
    {
      id: 'samfokonomi-2-8-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-8-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på boligmarkedet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-8-2-n-quiz1-q0',
            task: 'Hvorfor slår økt etterspørsel i boligmarkedet mest ut i høyere priser på kort sikt?',
            options: [
              { id: 'a', text: 'Fordi folk alltid er villige til å betale mer', isCorrect: false },
              { id: 'b', text: 'Fordi boligtilbudet reagerer svært tregt – det tar 2–4 år å planlegge og bygge nye boliger', isCorrect: true },
              { id: 'c', text: 'Fordi staten regulerer boligprisene direkte', isCorrect: false },
              { id: 'd', text: 'Fordi bankene alltid låner ut mer enn de bør', isCorrect: false },
            ],
            solution: 'Boligtilbudet er ekstremt tregt å justere. Regulering, planlegging og bygging tar 2–4 år, og tomtetilgangen er begrenset i pressområder. Derfor slår økt etterspørsel nesten utelukkende ut i prisøkninger på kort sikt.',
          },
          {
            id: 'samfokonomi-2-8-2-n-quiz1-q1',
            task: 'Hva er boliglånsforskriftens viktigste krav?',
            options: [
              { id: 'a', text: 'At alle må ha minst 50 % egenkapital', isCorrect: false },
              { id: 'b', text: 'Maks 85 % belåning, avdragsplikt over 60 %, og krav om å tåle 3 prosentpoeng renteøkning', isCorrect: true },
              { id: 'c', text: 'At bankene ikke kan gi boliglån til personer under 30 år', isCorrect: false },
              { id: 'd', text: 'At boligpriser ikke kan stige mer enn 5 % per år', isCorrect: false },
            ],
            solution: 'Boliglånsforskriften krever maks 85 % belåning (60 % for sekundærbolig i Oslo), avdragsplikt ved belåning over 60 %, og at låntakeren tåler 3 prosentpoeng renteøkning. Formålet er å begrense gjeldsveksten.',
          },
          {
            id: 'samfokonomi-2-8-2-n-quiz1-q2',
            task: 'Hva menes med at norske husholdninger har en gjeldsgrad på over 250 %?',
            options: [
              { id: 'a', text: 'At 250 % av nordmenn har boliglån', isCorrect: false },
              { id: 'b', text: 'At boligprisene har steget 250 % siden 1990', isCorrect: false },
              { id: 'c', text: 'At samlet gjeld utgjør over 250 % av disponibel inntekt – for hver krone du kan bruke, skylder du to og en halv', isCorrect: true },
              { id: 'd', text: 'At bankene har 250 % mer utlån enn innskudd', isCorrect: false },
            ],
            solution: 'Gjeldsgraden måler samlet gjeld som andel av disponibel inntekt. Over 250 % betyr at husholdningene i gjennomsnitt skylder to og en halv ganger det de har i årlig disponibel inntekt. Dette er blant de høyeste i OECD.',
          },
          {
            id: 'samfokonomi-2-8-2-n-quiz1-q3',
            task: 'Hvordan favoriserer det norske skattesystemet boliginvestering?',
            options: [
              { id: 'a', text: 'Boligeiere betaler ingen skatt overhodet', isCorrect: false },
              { id: 'b', text: 'Gjennom rentefradrag, skattefritt salg, og lav formuesverdsetting av bolig sammenlignet med andre eiendeler', isCorrect: true },
              { id: 'c', text: 'Staten gir subsidier til alle som kjøper bolig', isCorrect: false },
              { id: 'd', text: 'Boliglånsrenten er alltid lavere enn renten på andre lån', isCorrect: false },
            ],
            solution: 'Skattesystemet favoriserer bolig gjennom rentefradrag (22 %), skattefritt salg etter ett år, og lav formuesverdsetting (25 % av markedsverdi for primærbolig vs. 100 % for bankinnskudd). Aksjeinntekter skattlegges langt hardere.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-8-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Boligmarkedet er kanskje det mest debatterte enkelttemaet i norsk økonomi. **Boligprisene** bestemmes av tilbud og etterspørsel, men tilbudet reagerer ekstremt tregt, noe som gjør prisene volatile. Lave renter, inntektsvekst, urbanisering og et skattesystem som favoriserer bolig har drevet prisene kraftig opp. **Gjeldsveksten** i norske husholdninger, med en gjeldsgrad over 250 prosent, utgjør en systemrisiko som Norges Bank har advart om gjentatte ganger. **Boliglånsforskriften** er et viktig virkemiddel for å begrense risikoen, men rammer førstegangskjøpere hardest og behandler etterspørselssiden uten å løse de underliggende tilbudsproblemene. Den norske **bankkrisen 1988–1993** viste hva som kan skje når gjeldsspiralen snur.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3 NARRATIV: Kryptovaluta og digitale penger
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_8_3_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-8-3-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '8.3',
  title: 'Kryptovaluta og digitale penger',
  subtitle: 'Narrativ versjon',
  description: 'Fra Satoshi Nakamotos mystiske hvitbok til sentralbankenes digitale svar – historien om hvordan teknologi utfordrer selve fundamentet i pengesystemet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'drøfte aktuelle økonomiske debatter med utgangspunkt i ulike teoretiske perspektiver',
    'vurdere digitale valutaer og teknologisk endring i finanssystemet',
  ],
  linkedChapterId: 'samfokonomi-2-8-3',
  content: [
    {
      id: 'samfokonomi-2-8-3-n-intro',
      type: 'text',
      content: `## En mystisk oppfinner og en ny type penger

Den 31. oktober 2008, midt i den verste finanskrisen siden 1930-tallet, dukket det opp en kort hvitbok på en obskur kryptografi-mailingliste. Forfatteren kalte seg Satoshi Nakamoto – et pseudonym som ingen har klart å avsløre identiteten bak. Tittelen var enkel: «Bitcoin: A Peer-to-Peer Electronic Cash System». Ideen var radikal: et betalingssystem som ikke trengte noen bank, ingen stat, ingen betrodd mellommann. I stedet ville matematikk og kryptografi gjøre jobben.

Tre måneder senere, i januar 2009, ble det første Bitcoin-nettverket startet. I den aller første transaksjonsblokken la Nakamoto inn en skjult beskjed – en overskrift fra avisen The Times: «Chancellor on brink of second bailout for banks». Det var ikke tilfeldig. Bitcoin var fra starten et opprør mot det tradisjonelle finanssystemet.

I dag, mange år senere, er Bitcoin verdt hundretusener av dollar per enhet. Tusenvis av andre **kryptovalutaer** har dukket opp. Og nå har sentralbankene begynt å utvikle sine egne digitale penger som svar. Vi står midt i en revolusjon i pengenes historie – men hvor den ender, er det ingen som vet.`,
    },
    {
      id: 'samfokonomi-2-8-3-n-section1',
      type: 'text',
      content: `## Bitcoin – revolusjon eller boble?

For å forstå Bitcoin, må vi først forstå hva som gjør den spesiell. Tradisjonelle penger – kronene på kontoen din – eksisterer som tall i bankens datasystem. Banken er en betrodd mellommann som holder oversikt over hvem som eier hva. **Bitcoin** fjerner denne mellommannen. I stedet bruker den en teknologi kalt **blokkjede** – en åpen, digital regnskapsbok som alle kan lese, men ingen enkeltperson kan endre.

Hver gang noen sender Bitcoin til noen andre, kunngjøres transaksjonen til hele nettverket. Spesialiserte datamaskiner, kalt «minere», konkurrerer om å verifisere transaksjonen ved å løse kompliserte matematiske oppgaver. Den som lykkes først, får en belønning i nye Bitcoin. Denne prosessen kalles **proof-of-work**, og den er grunnen til at Bitcoin bruker enorme mengder energi – omtrent like mye strøm som hele Finland i 2024.

Bitcoin har en innebygd sjeldenhet: det kan aldri eksistere mer enn 21 millioner enheter. Tilhengerne mener dette gjør Bitcoin til «digitalt gull» – en verdibevarer i en verden av inflasjon og pengeproduksjon. Men kritikerne peker på at Bitcoins verdi er ekstremt volatil: fra under 1 dollar i 2010, til nesten 70 000 dollar i 2021, ned til 16 000 dollar i 2022, og deretter opp igjen til over 100 000 dollar i 2024. Denne berg-og-dal-banen gjør Bitcoin ubrukelig som daglig betalingsmiddel.

La oss vurdere Bitcoin mot de tre funksjonene penger tradisjonelt skal ha. Som **byttemiddel** er den svak – svært få butikker aksepterer Bitcoin, og transaksjonene er trege. Som **verdioppbevaring** er den usikker – volatiliteten gjør at du kan miste halve verdien på noen måneder. Og som **regneenhet** er den ubrukelig – ingen priser oppgis i Bitcoin. De fleste økonomer er enige: Bitcoin fungerer primært som et spekulativt investeringsobjekt, ikke som penger i tradisjonell forstand.`,
    },
    {
      id: 'samfokonomi-2-8-3-n-section2',
      type: 'text',
      content: `## Sentralbankenes digitale svar

Mens Bitcoin vokste fra et nerdete hobbyprosjekt til et verdensomspennende fenomen, begynte sentralbankene å bekymre seg – ikke så mye for Bitcoin i seg selv, men for en bredere trend: kontantene er i ferd med å forsvinne.

I Norge er kontantbruken nesten borte. De aller fleste betaler med kort eller Vipps. Det betyr at nesten alle pengene vi bruker til daglig, er bankpenger – tall på en konto i en privateid bank. Problemet er at bankpenger innebærer en risiko: dersom banken din går konkurs, kan du i prinsippet miste pengene dine. Banksikringsfondet dekker inntil to millioner, men systemet hviler på tillit. Kontanter er annerledes – de er **sentralbankpenger**, direkte garantert av Norges Bank. Men hva skjer når ingen bruker kontanter lenger?

Dette er bakgrunnen for **sentralbankdigital valuta**, forkortet **CBDC**. Over 130 land utreder nå muligheten for å gi befolkningen tilgang til digitale sentralbankpenger. Norges Bank kaller sitt prosjekt Digitale Sentralbankpenger, forkortet DSP. Tanken er at du skal kunne ha en digital konto direkte hos sentralbanken – like sikker som kontanter, men like praktisk som Vipps.

Fordelene er mange: CBDC kan effektivisere betalingssystemet, gi nye pengepolitiske verktøy, og motvirke dominansen til private betalingsløsninger. Men ulempene er reelle. Den mest alvorlige er faren for **bankrun**: i en finansiell krise kan folk med et tastetrykk flytte alle pengene sine fra vanlige banker til den trygge CBDC-kontoen. Bankene tømmes for innskudd, mister evnen til å gi lån, og en krise som kanskje hadde vært håndterbar, blir til en katastrofe. Den europeiske sentralbanken har foreslått et tak på 3 000 euro i CBDC-beholdning per person nettopp for å unngå dette. I tillegg reiser CBDC dype spørsmål om **personvern** – en sentralbank som ser alle transaksjoner, har en makt som mange finner ubehagelig.`,
    },
    {
      id: 'samfokonomi-2-8-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-8-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kryptovaluta og digitale penger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-8-3-n-quiz1-q0',
            task: 'Hva er den viktigste forskjellen mellom Bitcoin og tradisjonelle penger som norske kroner?',
            options: [
              { id: 'a', text: 'Bitcoin eksisterer bare digitalt, mens kroner finnes på papir', isCorrect: false },
              { id: 'b', text: 'Bitcoin utstedes desentralisert av nettverket, mens kroner utstedes og kontrolleres av Norges Bank', isCorrect: true },
              { id: 'c', text: 'Bitcoin har lavere transaksjonsgebyrer enn kroner', isCorrect: false },
              { id: 'd', text: 'Bitcoin er mer stabil i verdi enn kroner', isCorrect: false },
            ],
            solution: 'Den grunnleggende forskjellen er at Bitcoin er desentralisert – ingen myndighet kontrollerer utstedelsen eller nettverket. Norske kroner utstedes av Norges Bank, som styrer mengden og pengepolitikken.',
          },
          {
            id: 'samfokonomi-2-8-3-n-quiz1-q1',
            task: 'Hvorfor bruker Bitcoin-nettverket like mye strøm som et middels stort land?',
            options: [
              { id: 'a', text: 'Fordi alle brukere må ha datamaskinen på hele tiden', isCorrect: false },
              { id: 'b', text: 'Fordi proof-of-work-mekanismen krever at datamaskiner løser energikrevende oppgaver for å verifisere transaksjoner', isCorrect: true },
              { id: 'c', text: 'Fordi Bitcoin-koden er dårlig programmert', isCorrect: false },
              { id: 'd', text: 'Fordi det trengs strøm for å trykke digitale mynter', isCorrect: false },
            ],
            solution: 'Proof-of-work krever at minere konkurrerer om å løse svært krevende matematiske oppgaver. Denne prosessen bruker enorme mengder beregningskraft og dermed elektrisitet. Ethereum gikk over til proof-of-stake, som bruker 99,9 % mindre energi.',
          },
          {
            id: 'samfokonomi-2-8-3-n-quiz1-q2',
            task: 'Hva er hovedmotivasjonen bak sentralbankdigital valuta (CBDC)?',
            options: [
              { id: 'a', text: 'Å konkurrere med Bitcoin om spekulanter', isCorrect: false },
              { id: 'b', text: 'Å gjøre alle transaksjoner sporbare for politiet', isCorrect: false },
              { id: 'c', text: 'Å sikre at publikum beholder tilgang til risikofrie sentralbankpenger når kontantbruken faller', isCorrect: true },
              { id: 'd', text: 'Å gjøre bankene overflødige', isCorrect: false },
            ],
            solution: 'Når kontantbruken faller, mister folk tilgang til risikofrie sentralbankpenger. CBDC gir en digital erstatning – like sikker som kontanter, men tilpasset den digitale hverdagen. Det handler om å bevare tilliten til pengesystemet.',
          },
          {
            id: 'samfokonomi-2-8-3-n-quiz1-q3',
            task: 'Hvorfor frykter noen at CBDC kan føre til bankrun?',
            options: [
              { id: 'a', text: 'Fordi CBDC-teknologien er ustabil', isCorrect: false },
              { id: 'b', text: 'Fordi folk i en krise raskt kan flytte alle pengene fra vanlige banker til sikre CBDC-kontoer, noe som tømmer bankene', isCorrect: true },
              { id: 'c', text: 'Fordi CBDC gjør det lettere å ta opp lån', isCorrect: false },
              { id: 'd', text: 'Fordi sentralbanken kan konfiskere CBDC-midler', isCorrect: false },
            ],
            solution: 'Med CBDC kan folk med et tastetrykk flytte penger fra bankkontoer (med kredittrisiko) til sentralbanken (risikofritt). I en krise kan dette tømme bankene for innskudd på timer. Løsninger inkluderer tak på CBDC-beholdning og negativ rente over terskelen.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-8-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har sett hvordan den digitale revolusjonen utfordrer selve fundamentet i pengesystemet. **Kryptovalutaer** som Bitcoin er desentraliserte digitale valutaer basert på blokkjedeteknologi, men de oppfyller pengenes tre funksjoner dårlig og fungerer primært som spekulative investeringsobjekter. Bitcoins **proof-of-work**-mekanisme krever enorme mengder energi, noe som er en vesentlig miljøutfordring. **Sentralbankdigital valuta (CBDC)** er sentralbankenes svar på fallende kontantbruk og digital innovasjon – den gir befolkningen digital tilgang til risikofrie penger. Men CBDC reiser vanskelige spørsmål om **bankrun-risiko** og **personvern**. Debatten om pengenes fremtid handler dypest sett om hvem som skal kontrollere pengesystemet: desentraliserte nettverk, private teknologiselskaper, eller demokratisk styrte sentralbanker.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4 NARRATIV: Deglobalisering og proteksjonisme
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_8_4_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-8-4-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '8.4',
  title: 'Deglobalisering og proteksjonisme',
  subtitle: 'Narrativ versjon',
  description: 'Fortellingen om hvordan handelskriger, pandemier og geopolitisk rivalisering har fått verden til å stille spørsmålet: har globaliseringen gått for langt?',
  estimatedMinutes: 22,
  competenceGoals: [
    'drøfte aktuelle økonomiske debatter med utgangspunkt i ulike teoretiske perspektiver',
    'analysere tendenser til deglobalisering og proteksjonisme i verdensøkonomien',
  ],
  linkedChapterId: 'samfokonomi-2-8-4',
  content: [
    {
      id: 'samfokonomi-2-8-4-n-intro',
      type: 'text',
      content: `## Da verden begynte å lukke seg

I flere tiår beveget verden seg i én retning: stadig tettere økonomisk integrasjon. Varer, kapital og mennesker krysset grenser lettere enn noensinne. Containerskip fraktet billige varer fra fabrikker i Kina til butikkhyllene i Norge. Selskaper spredte produksjonen over hele kloden for å utnytte det som er billigst der det er billigst. Globalisering var ikke bare en trend – det var nærmest en naturlov.

Men så begynte pendelen å svinge tilbake. I 2018 innledet USAs president Donald Trump en handelskrig med Kina ved å innføre toll på kinesiske varer for over 350 milliarder dollar. Kina slo tilbake med gjengjeldelsestoll. I 2020 avslørte covid-19-pandemien dramatisk hvor sårbare de globale forsyningskjedene var – Europa manglet munnbind, sykehus manglet respiratorer, og bilfabrikker stod stille fordi det manglet halvlederbrikker fra Taiwan. Og i 2022 viste Russlands invasjon av Ukraina at økonomisk avhengighet mellom land kan bli et våpen.

Plutselig snakket alle om **deglobalisering** – ideen om at den økonomiske integrasjonen ikke bare har stoppet opp, men faktisk er i ferd med å reverseres. Er det virkelig det som skjer? Og hva betyr det for oss?`,
    },
    {
      id: 'samfokonomi-2-8-4-n-section1',
      type: 'text',
      content: `## Den nye proteksjonismens ansikter

**Proteksjonisme** – at staten beskytter innenlandsk industri mot utenlandsk konkurranse – er ikke noe nytt. Men den nye bølgen av proteksjonisme skiller seg fra den gamle på flere måter. Den drives ikke primært av ønsket om å beskytte jobber i nedadgående industrier, men av noe mye større: geopolitisk rivalisering, nasjonal sikkerhet og teknologisk dominans.

Tenk på halvledere – de bittesmå brikkene som er hjernen i alt fra mobiltelefoner til militære våpen. Over 90 prosent av de mest avanserte halvlederne produseres i Taiwan, av selskapet TSMC. Både USA og Kina innser at denne avhengigheten er en strategisk sårbarhet. Hva om Kina invaderer Taiwan? Hva om TSMC velger side? Svaret har vært massiv statlig innsats: USAs CHIPS Act pumpet milliarder av dollar inn i innenlandsk halvlederproduksjon. EUs CHIPS Act fulgte etter. Kina investerte enda mer.

Denne typen proteksjonisme kalles gjerne **industrisubsidier** – staten subsidier strategisk viktige næringer for å sikre nasjonal selvforsyning. Det er beslektet med **reshoring**, som betyr å flytte produksjon tilbake til hjemlandet, og **friendshoring**, som betyr å flytte forsyningskjedene til politisk allierte land i stedet for geopolitiske rivaler.

Men proteksjonisme har en pris. La oss ta et enkelt eksempel: da USA innførte 25 prosent toll på importert stål i 2018, steg prisen på innenlandsk stål. Stålverkene jublet, men alle som *bruker* stål – bilprodusenter, byggefirmaer, maskinprodusenter – betalte mer. Studier viste at tollen reddet omtrent 8 700 jobber i stålindustrien, men kostet amerikanske stålbrukere rundt 5,6 milliarder dollar. Det er omtrent 650 000 dollar per reddet jobb. Ricardo og hans teori om **komparativt fortrinn** ville snudd seg i graven.`,
    },
    {
      id: 'samfokonomi-2-8-4-n-section2',
      type: 'text',
      content: `## Hva betyr dette for verden – og for Norge?

Konsekvensene av deglobalisering er vidtrekkende. IMF har anslått at en alvorlig fragmentering av verdensøkonomien kan koste hele 7 prosent av verdens BNP – det tilsvarer omtrent den samlede økonomien til Tyskland og Japan. Forbrukerne vil betale mer for varer når produksjonen flyttes fra lavkostland til høykostland. Bedrifter må bygge parallelle forsyningskjeder – én for «vestlige» markeder og én for kinesiske – noe som er enormt kostbart.

For **utviklingslandene** kan deglobalisering være særlig ødeleggende. Den eksportledete vekstmodellen som løftet Kina, Sør-Korea og Taiwan ut av fattigdom – å produsere billig for vestlige markeder – kan bli mye vanskeligere å gjenta. Land som Vietnam og Bangladesh, som håpet å følge i Kinas fotspor, risikerer å bli fanget i en mellomposisjon der de presses til å velge side i den geopolitiske rivaliseringen.

For **Norge** er bildet sammensatt. På den ene siden vil vi merke økte importkostnader og høyere priser. På den andre siden er Norges posisjon relativt sterk. Energisikkerheten som norsk gass og olje gir Europa, gjør Norge til en attraktiv handelspartner. EØS-avtalen forankrer oss i det europeiske indre markedet. Og europeisk reshoring kan faktisk gi nye muligheter for norsk maritim teknologi og energikompetanse.

Den **regelbaserte handelsordenen**, med WTO i sentrum, er imidlertid kraftig svekket. USA har blokkert utnevnelsen av dommere til WTOs ankeorgan, slik at handelstvister ikke kan avgjøres. Stormaktene foretrekker bilaterale avtaler der de kan bruke sin økonomiske makt. For et lite land som Norge, som er avhengig av forutsigbare handelsregler, er dette bekymringsfullt. Historien viser at i en verden uten regler er det de sterkeste som bestemmer.`,
    },
    {
      id: 'samfokonomi-2-8-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-8-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på deglobalisering og proteksjonisme:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-8-4-n-quiz1-q0',
            task: 'Hva menes med «friendshoring»?',
            options: [
              { id: 'a', text: 'At landene bare handler med nabolandene sine', isCorrect: false },
              { id: 'b', text: 'At forsyningskjeder flyttes til politisk allierte land i stedet for geopolitiske rivaler', isCorrect: true },
              { id: 'c', text: 'At vennegrupper handler med hverandre på nett', isCorrect: false },
              { id: 'd', text: 'At land deler produksjonskostnadene likt seg imellom', isCorrect: false },
            ],
            solution: 'Friendshoring betyr å flytte forsyningskjeder fra geopolitiske rivaler (som Kina) til allierte land. Det er drevet av ønsket om mer robuste forsyningskjeder og redusert avhengighet av potensielle motstandere.',
          },
          {
            id: 'samfokonomi-2-8-4-n-quiz1-q1',
            task: 'Hvorfor er proteksjonisme kostbart for forbrukerne?',
            options: [
              { id: 'a', text: 'Fordi staten tar pengene fra forbrukerne direkte', isCorrect: false },
              { id: 'b', text: 'Fordi toll og handelshindringer gjør importerte og innenlandske varer dyrere', isCorrect: true },
              { id: 'c', text: 'Fordi bedriftene slutter å produsere', isCorrect: false },
              { id: 'd', text: 'Fordi forbrukerne må betale lisens for å handle', isCorrect: false },
            ],
            solution: 'Toll gjør importvarer dyrere. Men også innenlandske varer stiger i pris, fordi produsentene slipper priskonkurranse fra import. Resultatet er at forbrukerne betaler mer, og ressursene brukes mindre effektivt.',
          },
          {
            id: 'samfokonomi-2-8-4-n-quiz1-q2',
            task: 'Hva avslørte covid-19-pandemien om globale forsyningskjeder?',
            options: [
              { id: 'a', text: 'At de fungerte perfekt under krisen', isCorrect: false },
              { id: 'b', text: 'At de var svært sårbare – konsentrert produksjon førte til mangel på kritiske varer', isCorrect: true },
              { id: 'c', text: 'At lokale forsyningskjeder var mer sårbare enn globale', isCorrect: false },
              { id: 'd', text: 'At handel mellom land stoppet helt opp', isCorrect: false },
            ],
            solution: 'Pandemien viste at konsentrert produksjon i få land skapte kritisk sårbarhet. Europa manglet medisinsk utstyr, bilindustrien manglet halvledere, og «just-in-time»-logistikken hadde ingen buffere.',
          },
          {
            id: 'samfokonomi-2-8-4-n-quiz1-q3',
            task: 'Hvorfor er en svekket WTO et problem spesielt for små land som Norge?',
            options: [
              { id: 'a', text: 'Fordi Norge er det landet som bruker WTO mest', isCorrect: false },
              { id: 'b', text: 'Fordi uten regelbasert handel kan stormakter tvinge gjennom sine interesser, og små land mister sin beskyttelse', isCorrect: true },
              { id: 'c', text: 'Fordi WTO betaler subsidier til små land', isCorrect: false },
              { id: 'd', text: 'Fordi WTO bestemmer Norges tollsatser', isCorrect: false },
            ],
            solution: 'WTO gir regler som gjelder likt for alle, uansett størrelse. Uten fungerande tvisteløsning kan store land som USA og Kina tvinge små land til å akseptere ugunstige betingelser. Regelbasert handel er småstatenes forsikring.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-8-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Etter flere tiår med stadig dypere global integrasjon ser vi nå tydelige tegn til **deglobalisering** og geoøkonomisk fragmentering. Handelskrigen mellom USA og Kina, pandemiens avsløring av sårbare forsyningskjeder, og geopolitisk rivalisering har drevet frem en ny bølge av **proteksjonisme**. **Reshoring** og **friendshoring** reflekterer ønsket om å redusere avhengigheten av geopolitiske rivaler, men kommer med en prislapp for forbrukerne i form av høyere priser og redusert global effektivitet. IMF anslår at alvorlig fragmentering kan koste 7 prosent av verdens BNP. **WTO** er svekket, og den regelbaserte handelsordenen er under press. For Norge er situasjonen sammensatt: energiressursene og EØS-avtalen gir styrke, men økte importkostnader og usikre handelsforhold er reelle utfordringer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.5 NARRATIV: Økonomiske skoler og debatter
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_8_5_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-8-5-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '8.5',
  title: 'Økonomiske skoler og debatter',
  subtitle: 'Narrativ versjon',
  description: 'En reise gjennom økonomifagets store tankeskoler – fra Keynes\' revolusjon til MMTs radikale utfordring – og hvorfor økonomer som ser på de samme tallene likevel er dypt uenige.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte aktuelle økonomiske debatter med utgangspunkt i ulike teoretiske perspektiver',
    'sammenlikne ulike økonomiske skoler og deres politikkanbefalinger',
  ],
  linkedChapterId: 'samfokonomi-2-8-5',
  content: [
    {
      id: 'samfokonomi-2-8-5-n-intro',
      type: 'text',
      content: `## Hvorfor krangler økonomer?

Det finnes en gammel vits om at hvis du setter ti økonomer i ett rom, får du elleve meninger. Det er en overdrivelse, men ikke en stor en. Økonomer er kjent for å være uenige – om renten bør opp eller ned, om staten bruker for mye eller for lite, om markedet bør reguleres strammere eller slippes løsere. Og det merkelige er at de ofte ser på de samme tallene.

Grunnen er at økonomer – akkurat som alle andre – bærer med seg ulike **grunnantakelser** om hvordan verden fungerer. Noen tror at markeder i det store og hele er effektive og selvkorrigerende, og at statlig inngripen gjør mer skade enn nytte. Andre mener at markeder regelmessig svikter, at millioner av mennesker kan gå arbeidsledige uten at markedet retter opp, og at bare staten kan redde situasjonen. Disse ulike grunnantakelsene danner det vi kaller **økonomiske skoler** – intellektuelle tradisjoner med ulike svar på de store spørsmålene.

I dette kapittelet skal vi utforske de tre viktigste retningene i dagens makroøkonomiske debatt: den keynesianske, den nyklassiske, og den kontroversielle utfordreren MMT. Å forstå disse er nøkkelen til å forstå hvorfor økonomisk politikk alltid er en kamp mellom perspektiver.`,
    },
    {
      id: 'samfokonomi-2-8-5-n-section1',
      type: 'text',
      content: `## Keynesianerne og nyklassikerne – den store debatten

La oss starte med de to dominerende retningene. **Keynesiansk økonomi** springer ut av John Maynard Keynes' revolusjonerende verk fra 1936, skrevet midt i den store depresjonen. Keynes' budskap var provoserende: markedsøkonomien er ustabil. Den kan havne i langvarige tilstander med høy arbeidsledighet uten at markedskreftene retter opp. Etterspørselen – det folk og bedrifter er villige til å bruke – styrer produksjonen på kort sikt. Og priser og lønninger er *trege* – de tilpasser seg ikke raskt nok til å gjenopprette balanse. Derfor trenger vi en aktiv stat som bruker **finanspolitikk** – offentlige utgifter og skatter – for å stabilisere økonomien.

På den andre siden står **nyklassisk økonomi**, som bygger på en mer optimistisk vurdering av markedenes evne til selvregulering. Nyklassikerne mener at priser og lønninger er fleksible nok til at markedene finner likevekt relativt raskt. Arbeidsledighet er i hovedsak frivillig eller midlertidig. Og statlig inngripen – spesielt økte offentlige utgifter – gjør mer skade enn nytte, fordi den **fortrenger** private investeringer. Denne fortregningseffekten, kalt **crowding out**, fungerer slik: når staten låner mer, øker etterspørselen etter lån, renten stiger, og det blir dyrere for bedrifter å investere.

I praksis er forskjellen størst i krisetider. Tenk deg en økonomi der BNP faller tre prosent og arbeidsledigheten dobles. En keynesiansk økonom ville si: «Problemet er for lav etterspørsel. Øk de offentlige utgiftene, kutt skatter, og bruk multiplikatoreffekten til å få hjulene i gang. Budsjettunderskudd er akseptabelt nå.» En nyklassisk økonom ville svare: «Markedet vil korrigere seg selv. Sentralbanken bør kutte renten, men staten bør holde igjen. Offentlige utgifter fortrenger private investeringer, og strukturreformer – mer fleksibelt arbeidsmarked, mindre regulering – er viktigere enn kortsiktig stimulans.»

Det er verdt å merke seg at disse to retningene har nærmet seg hverandre over tid. Moderne **nykeynesiansk** teori aksepterer mye av nyklassisk mikroøkonomi, men insisterer på at priser og lønninger er trege nok til at aktiv stabiliseringspolitikk er nødvendig. Og under covid-19-pandemien brukte selv de mest markedsliberale landene massiv finanspolitisk stimulans – et stille nikk til Keynes.`,
    },
    {
      id: 'samfokonomi-2-8-5-n-section2',
      type: 'text',
      content: `## MMT – den radikale utfordreren

Inn på arenaen kommer en nyere og langt mer kontroversiell retning: **Moderne pengeteori**, forkortet **MMT** (Modern Monetary Theory). MMT har fått enorm oppmerksomhet, særlig blant progressive politikere i USA, og dens kjernebudskap er radikalt: en stat som utsteder sin egen valuta, kan aldri gå tom for penger.

La oss stoppe opp ved det et øyeblikk, for det høres nesten absurd ut. Men teknisk sett har MMT et poeng. Norge utsteder norske kroner. Norges Bank kan alltid lage flere kroner – det er bare tall i et datasystem. Det betyr at Norge aldri *teknisk* kan misligholde gjeld i norske kroner. Det samme gjelder USA med dollar og Japan med yen.

Herfra trekker MMT-tilhengerne en vidtrekkende konklusjon: staten trenger ikke skatteinntekter for å finansiere utgiftene sine. Den *skaper* penger når den bruker, og den *ødelegger* penger når den krever inn skatt. Skattenes rolle er ikke å finansiere staten, men å regulere inflasjonen – å fjerne kjøpekraft fra økonomien når det er fare for overoppheting. Den reelle begrensningen på offentlig pengebruk er altså ikke budsjettbalansen, men **inflasjonen**. Staten bør bruke fritt til det er full sysselsetting, og bare stramme inn dersom prisene begynner å stige.

Kritikken er hard. De fleste etablerte økonomer mener MMT undervurderer inflasjonsrisikoen dramatisk. Historien er full av eksempler på land som trykket penger ukontrollert og fikk hyperinflasjon – Zimbabwe, Venezuela, Weimar-republikken. MMT forutsetter at politikere vil stramme inn i tide ved å øke skattene, men historien viser at det er mye lettere å dele ut penger enn å ta dem tilbake. Og for en liten, åpen økonomi som Norge, med flytende valutakurs, vil overdreven pengebruk raskt svekke kronekursen, gjøre importen dyrere, og forsterke inflasjonen.

Likevel har MMT-debatten hatt en verdifull effekt: den har tvunget økonomer til å tenke nytt om forholdet mellom pengepolitikk og finanspolitikk, og om hva slags begrensninger en stat med egen valuta egentlig har. Svaret de fleste har landet på, er pragmatisk: i en dyp krise, med renten nær null og ledig kapasitet, har staten mer rom enn mange trodde. Men det er ikke det samme som ubegrenset rom.`,
    },
    {
      id: 'samfokonomi-2-8-5-n-section3',
      type: 'text',
      content: `## Likviditetsfellen og den pragmatiske blandingen

Det finnes et begrep som binder mye av denne debatten sammen: **likviditetsfellen**. Det er en situasjon der sentralbankens styringsrente er nær null og ikke kan senkes mer. I en likviditetsfelle er pengepolitikken maktesløs – det hjelper ikke å gjøre penger billige når ingen vil låne. Japan har levd i en slags likviditetsfelle siden 1990-tallet, med renter nær null og treg vekst. Europa og USA opplevde det etter finanskrisen i 2008.

Det er i likviditetsfellen at keynesiansk teori virkelig viser sin styrke, fordi den argumenterer for at finanspolitikken – direkte statlige utgifter – blir avgjørende når pengepolitikken er brukt opp. Nyklassikerne, på sin side, erkjenner at dype kriser kan kreve ekstraordinære tiltak, men insisterer på at dette bør være midlertidig.

I praksis har de fleste land endt opp med en **pragmatisk blanding**. Under covid-19 brukte regjeringer over hele verden keynesiansk stimulans i et omfang ingen hadde forestilt seg var mulig. Da inflasjonen kom i 2022–2023, strammet sentralbankene kraftig inn med rentehevinger – et nyklassisk svar. Denne vekslingen mellom ekspansiv og kontraktiv politikk er kanskje den viktigste lærdommen: det finnes ingen skole som har rett hele tiden. Virkeligheten er mer sammensatt enn noen teori.

Uenigheten mellom økonomer reflekterer dypest sett ikke bare faglig uenighet om modeller og data. Den reflekterer også ulike **verdier** – om hvor mye frihet individet bør ha versus hvor mye fellesskapet bør bestemme, om hvor stor risiko vi bør akseptere, og om hvem som bør bære byrdene i vanskelige tider. Å forstå disse ulike perspektivene er ikke bare viktig for å forstå økonomisk debatt – det er viktig for å forstå politikk og demokrati.`,
    },
    {
      id: 'samfokonomi-2-8-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-8-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på økonomiske skoler og debatter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-8-5-n-quiz1-q0',
            task: 'Hva er hovedforskjellen mellom keynesiansk og nyklassisk syn på arbeidsledighet?',
            options: [
              { id: 'a', text: 'Keynesianere mener ledighet alltid er frivillig, nyklassikere mener den er ufrivillig', isCorrect: false },
              { id: 'b', text: 'Keynesianere mener ledighet kan bli langvarig og ufrivillig, nyklassikere mener markedet selv vil korrigere', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell – begge er enige om at ledighet er et midlertidig fenomen', isCorrect: false },
              { id: 'd', text: 'Nyklassikere mener staten bør ansette alle ledige direkte', isCorrect: false },
            ],
            solution: 'Keynesianere mener at trege priser og lønninger kan gjøre at markedet ikke korrigerer seg, og arbeidsledigheten kan bli langvarig og ufrivillig. Nyklassikere mener markeder tilpasser seg relativt raskt, og ledighet er midlertidig.',
          },
          {
            id: 'samfokonomi-2-8-5-n-quiz1-q1',
            task: 'Hva menes med «crowding out» (fortrengning)?',
            options: [
              { id: 'a', text: 'At staten stenger private bedrifter', isCorrect: false },
              { id: 'b', text: 'At økte offentlige utgifter finansiert ved lån presser opp renten og fortrenger private investeringer', isCorrect: true },
              { id: 'c', text: 'At befolkningsvekst fortrenger naturområder', isCorrect: false },
              { id: 'd', text: 'At importvarer fortrenger norske produkter', isCorrect: false },
            ],
            solution: 'Crowding out betyr at når staten låner mer, øker etterspørselen etter kapital, renten stiger, og det blir dyrere for private bedrifter å investere. Nyklassikere bruker dette som argument mot ekspansiv finanspolitikk.',
          },
          {
            id: 'samfokonomi-2-8-5-n-quiz1-q2',
            task: 'Hva er MMTs sentrale påstand?',
            options: [
              { id: 'a', text: 'At skatter er unødvendige og bør avskaffes', isCorrect: false },
              { id: 'b', text: 'At en stat med egen valuta aldri kan gå tom for penger, og at inflasjon – ikke budsjettbalanse – er den reelle begrensningen', isCorrect: true },
              { id: 'c', text: 'At markedsøkonomien bør erstattes med planøkonomi', isCorrect: false },
              { id: 'd', text: 'At alle land bør innføre gullstandard', isCorrect: false },
            ],
            solution: 'MMT hevder at en stat som utsteder egen valuta aldri teknisk kan gå konkurs. Den reelle begrensningen er inflasjon, ikke budsjettbalanse. Staten bør bruke fritt til full sysselsetting, og bruke skatter til å regulere inflasjonen.',
          },
          {
            id: 'samfokonomi-2-8-5-n-quiz1-q3',
            task: 'Hva er en likviditetsfelle, og hvorfor er den viktig i keynesiansk teori?',
            options: [
              { id: 'a', text: 'En situasjon der bankene har for mye likviditet og utlåningen blir for høy', isCorrect: false },
              { id: 'b', text: 'En situasjon der kontantene forsvinner fra økonomien', isCorrect: false },
              { id: 'c', text: 'En situasjon der renten er nær null og pengepolitikken er maktesløs, slik at finanspolitikken blir avgjørende', isCorrect: true },
              { id: 'd', text: 'En situasjon der inflasjon og deflasjon oppstår samtidig', isCorrect: false },
            ],
            solution: 'I en likviditetsfelle er renten nær null og kan ikke senkes mer. Pengepolitikken mister kraft fordi billige penger ikke stimulerer nok. Keynesianere argumenterer da for at direkte statlige utgifter (finanspolitikk) er det eneste som virker.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-8-5-n-summary',
      type: 'text',
      content: `## Oppsummering

Uenigheten mellom økonomer er ikke et tegn på svakhet i faget, men en refleksjon av at økonomien er kompleks og at grunnleggende verdivalg spiller inn. **Keynesiansk økonomi** vektlegger markedsfeil, ufrivillig arbeidsledighet og behovet for aktiv statlig stabiliseringspolitikk gjennom finanspolitikk. **Nyklassisk økonomi** har mer tillit til markedenes evne til selvkorrigering og advarer mot at offentlige utgifter kan fortrenge private investeringer gjennom **crowding out**. **MMT** utfordrer hele rammeverket ved å hevde at stater med egen valuta aldri trenger å gå tom for penger, men kritiseres for å undervurdere inflasjonsrisikoen. I **likviditetsfellen** – når renten er nær null – viser keynesiansk teori sin styrke. I praksis bruker de fleste land en pragmatisk blanding av perspektiver, tilpasset den aktuelle situasjonen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SAMFOKONOMI_2_NARRATIV_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_8_1_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_8_2_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_8_3_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_8_4_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_8_5_NARRATIV,
];
