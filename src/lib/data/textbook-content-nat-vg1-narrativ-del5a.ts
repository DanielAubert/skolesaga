/**
 * Tekstbok innhold for Naturfag VG1 - NARRATIV VERSJON DEL 5A
 * Seksjon 7: Ernæring og helse (Kapittel 7.1-7.6)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1 NARRATIV: Karbohydrater og fiber
// ============================================================================

export const CHAPTER_NAT_VG1_7_1_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-7-1-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '7.1',
  title: 'Karbohydrater og fiber',
  subtitle: 'Narrativ versjon',
  description:
    'Bli med på en reise inn i kroppens drivstoffsystem og oppdag hvorfor brød, frukt og grønnsaker betyr så mye for energien og helsen din.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for funksjonene til noen næringsstoffer'],
  linkedChapterId: 'nat-vg1-7-1',
  content: [
    {
      id: 'nat-vg1-7-1-n-intro',
      type: 'text',
      content: `## Kroppens foretrukne drivstoff

Tenk deg at du sitter ved frokostbordet. Foran deg står et glass appelsinjuice, et par skiver grovbrød med ost, og en skål havregryn. Uten at du tenker over det, holder du på å fylle kroppen med det den trenger aller mest for å fungere: **karbohydrater**.

Karbohydrater er kroppens viktigste energikilde. Navnet kommer av at disse molekylene er bygget opp av tre grunnstoff: karbon (C), hydrogen (H) og oksygen (O). Karbohydrater finnes i mat som brød, ris, pasta, poteter, frukt og sukker. Når du spiser et stykke brød, starter kroppen umiddelbart med å bryte det ned. Gjennom fordøyelsen omdannes karbohydratene til **glukose** -- det vi kaller blodsukker. Glukosen fraktes med blodet til alle kroppens celler, der den brukes som drivstoff i celleåndingen.

Men karbohydrater er ikke bare karbohydrater. De kommer i vidt forskjellige størrelser, fra bittesmå sukkerarter til lange, komplekse kjeder. Og det er nettopp denne forskjellen i størrelse som avgjør hvordan kroppen håndterer dem. Energiinnholdet i karbohydrater er **17 kJ per gram** (4 kcal/g).

La oss se nærmere på de tre hovedtypene: **monosakkarider**, **disakkarider** og **polysakkarider**.`,
    },
    {
      id: 'nat-vg1-7-1-n-section1',
      type: 'text',
      content: `## De enkle og de doble -- monosakkarider og disakkarider

De minste karbohydratene kalles **monosakkarider**, som betyr «enkle sukkerarter». Disse er byggesteinene som alle andre karbohydrater er satt sammen av. De tre viktigste monosakkaridene du bør kjenne til er **glukose**, **fruktose** og **galaktose**.

**Glukose** -- også kalt druesukker -- er kroppens foretrukne energikilde. Cellene dine elsker glukose. Du finner den naturlig i frukt og honning, men den dannes også når kroppen bryter ned større karbohydrater. **Fruktose**, eller fruktsukker, finnes i frukt, bær og honning. Fruktose smaker faktisk søtere enn glukose, noe som forklarer hvorfor modne bær kan smake så herlige. **Galaktose** finner du som en del av laktose i melk.

Når to monosakkarider kobles sammen, får vi et **disakkarid** -- en dobbel sukkerart. **Sukrose**, det vanlige bordsukker du har i skapet, er satt sammen av glukose og fruktose. Det utvinnes fra sukkerrør eller sukkerbete. **Laktose**, som er melkesukker, er en kombinasjon av glukose og galaktose. Noen mennesker mangler enzymet **laktase**, som bryter ned laktose. Da snakker vi om laktoseintoleranse, som kan gi mageproblemer etter inntak av melkeprodukter. Til slutt har vi **maltose** (maltsukker), som er to glukosemolekyler koblet sammen. Maltose dannes blant annet når stivelse brytes ned.

Disse små sukkerartene tas raskt opp i blodet, noe som gir rask energi -- men også rask blodsukkerstigning.`,
    },
    {
      id: 'nat-vg1-7-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på monosakkarider og disakkarider:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-7-1-n-quiz1-q0',
            task: 'Hva er det vanlige bordsukkeret (sukrose) satt sammen av?',
            options: [
              { id: 'a', text: 'To glukosemolekyler', isCorrect: false },
              { id: 'b', text: 'Glukose og galaktose', isCorrect: false },
              { id: 'c', text: 'Glukose og fruktose', isCorrect: true },
              { id: 'd', text: 'Fruktose og galaktose', isCorrect: false },
            ],
            solution:
              'Sukrose (bordsukker) er et disakkarid som er satt sammen av ett glukosemolekyl og ett fruktosemolekyl. Det utvinnes fra sukkerrør eller sukkerbete.',
          },
          {
            id: 'nat-vg1-7-1-n-quiz1-q1',
            task: 'Hva kalles de minste karbohydratene?',
            options: [
              { id: 'a', text: 'Polysakkarider', isCorrect: false },
              { id: 'b', text: 'Disakkarider', isCorrect: false },
              { id: 'c', text: 'Trisakkarider', isCorrect: false },
              { id: 'd', text: 'Monosakkarider', isCorrect: true },
            ],
            solution:
              'Monosakkarider er de minste karbohydratene -- enkle sukkerarter som glukose, fruktose og galaktose. De er byggesteinene som alle større karbohydrater er satt sammen av.',
          },
          {
            id: 'nat-vg1-7-1-n-quiz1-q2',
            task: 'Hva er laktoseintoleranse?',
            options: [
              { id: 'a', text: 'Allergi mot melkeprotein', isCorrect: false },
              { id: 'b', text: 'Mangel på enzymet laktase, slik at laktose ikke brytes ned', isCorrect: true },
              { id: 'c', text: 'Overproduksjon av laktose i tarmen', isCorrect: false },
              { id: 'd', text: 'En sjelden sykdom som gjør at man ikke tåler sukker', isCorrect: false },
            ],
            solution:
              'Laktoseintoleranse skyldes at man mangler eller har for lite av enzymet laktase, som bryter ned melkesukkeret laktose. Laktosen forblir ufordøyd i tarmen og kan gi symptomer som mageknip, oppblåsthet og diaré.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-7-1-n-section2',
      type: 'text',
      content: `## De store kjedene -- polysakkarider

Mens monosakkarider og disakkarider er små og enkle, er **polysakkarider** noe helt annet. Tenk deg at du tar hundrevis, kanskje tusenvis, av glukosemolekyler og kobler dem sammen i lange kjeder. Da får du et polysakkarid -- et sammensatt karbohydrat.

De tre viktigste polysakkaridene du bør kjenne til er **stivelse**, **glykogen** og **cellulose**.

**Stivelse** er plantenes måte å lagre energi på. Når en potetplante har mer glukose enn den trenger akkurat nå, kobler den glukosemolekylene sammen til stivelse og lagrer det i knollen. Det er derfor poteter, ris, korn og pasta er så rike på karbohydrater. Når du spiser stivelsesrik mat, bryter fordøyelsen stivelsen ned til glukose igjen -- og kroppen din får energien den trenger.

**Glykogen** er dyrenes og menneskets svar på stivelse. Vi lagrer glykogen i lever og muskler som en rask energireserve. Når du trenger energi mellom måltidene eller under hard trening, kan kroppen raskt omdanne glykogen tilbake til glukose. Men lageret er begrenset -- en voksen person har bare omtrent 500 gram glykogen lagret i kroppen. Det er nok til kanskje noen timers intens aktivitet.

**Cellulose** er byggematerialet i planteceller. Det er cellulose som gir cellene en stiv cellevegg og holder planten oppreist. Mennesker kan ikke bryte ned cellulose fordi vi mangler de nødvendige enzymene. Men cellulose er likevel viktig for oss -- den fungerer nemlig som **uløselig fiber** i kostholdet.`,
    },
    {
      id: 'nat-vg1-7-1-n-section3',
      type: 'text',
      content: `## Fiber -- det du ikke kan fordøye, men kroppen trenger

Her kommer kanskje det mest overraskende med karbohydrater: Noe av det viktigste vi kan spise, er karbohydrater vi faktisk ikke kan fordøye. Vi snakker om **fiber**.

Fiber er ufordøyelige karbohydrater fra plantemat, og de deles inn i to typer. **Løselig fiber** løser seg i vann og danner en gel i tarmen. Du finner det i havregryn, belgfrukter og frukt. Denne gelen bremser opptaket av sukker og kolesterol, noe som gir jevnere blodsukker og bedre hjertehelse. **Uløselig fiber** -- som cellulose -- løser seg ikke i vann. Du finner det i fullkornsprodukter, grønnsaker og nøtter. Uløselig fiber øker volumet i tarmen og fremmer god tarmhelse ved å holde fordøyelsen i gang.

Helsedirektoratet anbefaler at vi spiser **25-35 gram fiber per dag**. De fleste nordmenn spiser for lite. Fiber gir metthetsfølelse, er mat for de gode tarmbakteriene, og kan forebygge en rekke livsstilssykdommer.

Men hvordan styrer kroppen egentlig blodsukkeret? Her spiller to hormoner hovedrollene. **Insulin**, som produseres i bukspyttkjertelen, senker blodsukkeret ved å hjelpe cellene med å ta opp glukose fra blodet. **Glukagon**, også fra bukspyttkjertelen, gjør det motsatte: det øker blodsukkeret ved å frigjøre glukose fra glykogenlagrene i leveren.

Du har kanskje hørt om **glykemisk indeks (GI)** -- et mål på hvor raskt et karbohydrat øker blodsukkeret etter at du har spist det. Mat med **lav GI**, som fullkornsprodukter og belgfrukter, gir en langsom og jevn blodsukkerstigning. Mat med **høy GI**, som hvitt brød og sukker, gir en rask topp etterfulgt av et bratt fall. Derfor føler du deg mett lenger etter havregryn enn etter et hvitt rundstykke.`,
    },
    {
      id: 'nat-vg1-7-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på polysakkarider, fiber og blodsukkerregulering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-7-1-n-quiz2-q0',
            task: 'Hva er stivelse?',
            options: [
              { id: 'a', text: 'Et dyrehormon som regulerer blodsukkeret', isCorrect: false },
              { id: 'b', text: 'Plantenes energilager, som brytes ned til glukose i fordøyelsen', isCorrect: true },
              { id: 'c', text: 'Et enzym som bryter ned fiber', isCorrect: false },
              { id: 'd', text: 'En type uløselig fiber som finnes i frukt', isCorrect: false },
            ],
            solution:
              'Stivelse er plantenes energilager -- et polysakkarid som er bygget opp av mange glukosemolekyler. Når vi spiser stivelsesrik mat som poteter, ris og pasta, bryter fordøyelsen stivelsen ned til glukose.',
          },
          {
            id: 'nat-vg1-7-1-n-quiz2-q1',
            task: 'Hvilket hormon senker blodsukkeret?',
            options: [
              { id: 'a', text: 'Glukagon', isCorrect: false },
              { id: 'b', text: 'Adrenalin', isCorrect: false },
              { id: 'c', text: 'Insulin', isCorrect: true },
              { id: 'd', text: 'Kortisol', isCorrect: false },
            ],
            solution:
              'Insulin produseres i bukspyttkjertelen og senker blodsukkeret ved å hjelpe cellene med å ta opp glukose fra blodet. Glukagon gjør det motsatte -- det øker blodsukkeret.',
          },
          {
            id: 'nat-vg1-7-1-n-quiz2-q2',
            task: 'Hvorfor anbefales mat med lav glykemisk indeks (GI)?',
            options: [
              { id: 'a', text: 'Fordi det inneholder mer vitaminer', isCorrect: false },
              { id: 'b', text: 'Fordi det smaker bedre enn mat med høy GI', isCorrect: false },
              { id: 'c', text: 'Fordi det inneholder mindre kalorier', isCorrect: false },
              { id: 'd', text: 'Fordi det gir langsom, jevn blodsukkerstigning og langvarig metthet', isCorrect: true },
            ],
            solution:
              'Mat med lav GI brytes ned saktere og gir en jevn blodsukkerstigning, noe som gir langvarig metthet og stabil energi. Mat med høy GI gir rask blodsukkerstigning og et raskt fall, som kan gjøre deg sulten igjen fort.',
          },
          {
            id: 'nat-vg1-7-1-n-quiz2-q3',
            task: 'Hvor mye fiber bør man spise per dag ifølge anbefalingene?',
            options: [
              { id: 'a', text: '5-10 gram', isCorrect: false },
              { id: 'b', text: '25-35 gram', isCorrect: true },
              { id: 'c', text: '50-75 gram', isCorrect: false },
              { id: 'd', text: '100-150 gram', isCorrect: false },
            ],
            solution:
              'Helsedirektoratet anbefaler 25-35 gram fiber per dag. De fleste nordmenn spiser for lite fiber. Gode kilder er fullkornsprodukter, belgfrukter, grønnsaker, frukt og nøtter.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-7-1-n-section4',
      type: 'text',
      content: `## Hvor mye energi gir karbohydrater?

La oss gjøre et raskt regnestykke. En skive grovbrød inneholder omtrent 20 gram karbohydrater. Energiinnholdet i karbohydrater er 17 kJ per gram. Det betyr at én skive grovbrød gir deg 20 g ganger 17 kJ/g, altså **340 kJ**.

Er det mye? Vel, en ungdom trenger omtrent 9 000-11 000 kJ i løpet av en dag. Så én skive grovbrød dekker kanskje 3-4 prosent av dagsbehovet. Det betyr at du trenger mye mer enn én skive brød for å ha nok energi til en hel dag med skole, trening og aktiviteter.

Det viktige å huske er at ikke alle karbohydrater er like. Karbohydrater fra fullkorn, belgfrukter, frukt og grønnsaker kommer med fiber, vitaminer og mineraler på kjøpet. Karbohydrater fra sukker, brus og godteri gir «tomme kalorier» -- energi uten noe nyttig ekstra. Et kosthold rikt på fiber og fullkorn er knyttet til lavere risiko for hjertesykdom, type 2-diabetes og flere krefttyper.`,
    },
    {
      id: 'nat-vg1-7-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært at **karbohydrater** er kroppens viktigste energikilde og gir 17 kJ per gram. De brytes ned til **glukose** (blodsukker), som cellene bruker i celleåndingen.

Karbohydratene deles inn i tre grupper etter størrelse: **Monosakkarider** er enkle sukkerarter som glukose, fruktose og galaktose. **Disakkarider** er bygget opp av to monosakkarider, som sukrose (glukose + fruktose), laktose (glukose + galaktose) og maltose (glukose + glukose). **Polysakkarider** er lange kjeder av monosakkarider, som stivelse (plantenes energilager), glykogen (menneskets energilager i lever og muskler) og cellulose (plantenes byggemateriale).

**Fiber** er ufordøyelige karbohydrater som likevel er viktige for helsen. Løselig fiber senker blodsukker og kolesterol, mens uløselig fiber fremmer tarmhelsen. Anbefalingen er 25-35 gram per dag.

Blodsukkeret reguleres av hormonene **insulin** (senker blodsukkeret) og **glukagon** (øker blodsukkeret). **Glykemisk indeks (GI)** måler hvor raskt karbohydrater øker blodsukkeret -- mat med lav GI gir jevnere blodsukker og lengre metthet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2 NARRATIV: Proteiner og aminosyrer
// ============================================================================

export const CHAPTER_NAT_VG1_7_2_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-7-2-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '7.2',
  title: 'Proteiner og aminosyrer',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdage hvordan kroppens mest allsidige molekyler bygger muskler, bekjemper sykdom og styrer livsviktige prosesser -- og hvorfor det du spiser avgjør om kroppen får det den trenger.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for funksjonene til noen næringsstoffer'],
  linkedChapterId: 'nat-vg1-7-2',
  content: [
    {
      id: 'nat-vg1-7-2-n-intro',
      type: 'text',
      content: `## Livets allsidige byggesteiner

Forestill deg et molekyl som kan bygge muskler, bekjempe virus, frakte oksygen gjennom blodet, spalte maten du spiser, og sende signaler mellom cellene -- alt på én gang. Det høres ut som science fiction, men det er rett og slett hverdagen for **proteiner**.

Proteiner -- også kalt eggehvitestoffer -- er uten tvil livets mest allsidige molekyler. De har et enormt antall funksjoner i kroppen din. Akkurat nå, mens du leser dette, jobber proteiner med å fordøye frokosten din, reparere muskelfibre som ble slitt under gårsdagens trening, og kjempe mot eventuelle bakterier som har sneket seg inn i kroppen.

Men hva er egentlig et protein? I bunn og grunn er det en lang kjede av små byggeklosser kalt **aminosyrer**. Tenk deg aminosyrene som perler på en kjede. Rekkefølgen av perlene bestemmer hvordan kjeden folder seg i rommet, og denne tredimensjonale formen avgjør hva proteinet kan gjøre. En liten endring i rekkefølgen kan gi et helt annet protein med helt andre egenskaper.

Det finnes 20 ulike aminosyrer, og av disse er **8-9 essensielle**. Det betyr at kroppen ikke kan lage dem selv -- du må få dem gjennom maten du spiser. Proteiner gir **17 kJ per gram** (like mye som karbohydrater), men kroppen bruker helst protein som byggemateriale. Først når karbohydrat- og fettlagrene er tomme, begynner kroppen å brenne proteiner for energi.`,
    },
    {
      id: 'nat-vg1-7-2-n-section1',
      type: 'text',
      content: `## Fra aminosyrer til proteiner

La oss dykke litt dypere inn i kjemien. En **aminosyre** er et lite organisk molekyl med en bestemt oppbygning: den har en aminogruppe (-NH₂) og en karboksylgruppe (-COOH) bundet til samme karbonatom. I tillegg har hver aminosyre en unik **sidegruppe** (R-gruppe) som gir den spesielle egenskaper. Det er disse sidegruppene som gjør de 20 aminosyrene forskjellige fra hverandre.

Når to aminosyrer kobles sammen, dannes det en **peptidbinding** mellom dem. Denne reaksjonen er en kondensasjonsreaksjon der ett vannmolekyl frigjøres. To aminosyrer koblet sammen kalles et **dipeptid**. Mange aminosyrer i en kjede kalles et **polypeptid**. Og et ferdig protein er ett eller flere polypeptider som har foldet seg til en bestemt tredimensjonal struktur.

Av kroppens 20 aminosyrer er de **essensielle aminosyrene** spesielt viktige å huske: leucin, isoleucin, valin, lysin, metionin, fenylalanin, treonin og tryptofan. For barn regnes også histidin som essensiell. Disse kan ikke kroppen lage selv, og hvis du ikke får nok av dem gjennom kosten, kan kroppen rett og slett ikke bygge alle proteinene den trenger. Det kan føre til svekket muskelmasse, dårligere immunforsvar og hemmet vekst hos barn.`,
    },
    {
      id: 'nat-vg1-7-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på aminosyrer og proteiners oppbygning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-7-2-n-quiz1-q0',
            task: 'Hva er en peptidbinding?',
            options: [
              { id: 'a', text: 'En binding mellom to glukosemolekyler', isCorrect: false },
              { id: 'b', text: 'En kjemisk binding som kobler to aminosyrer sammen', isCorrect: true },
              { id: 'c', text: 'En binding mellom protein og fett', isCorrect: false },
              { id: 'd', text: 'En binding som holder cellemembranen sammen', isCorrect: false },
            ],
            solution:
              'En peptidbinding er den kjemiske bindingen som kobler to aminosyrer sammen. Den dannes ved en kondensasjonsreaksjon der ett vannmolekyl frigjøres.',
          },
          {
            id: 'nat-vg1-7-2-n-quiz1-q1',
            task: 'Hvor mange essensielle aminosyrer har mennesket?',
            options: [
              { id: 'a', text: '3-4', isCorrect: false },
              { id: 'b', text: '20', isCorrect: false },
              { id: 'c', text: '8-9', isCorrect: true },
              { id: 'd', text: '15-16', isCorrect: false },
            ],
            solution:
              'Mennesket har 8-9 essensielle aminosyrer som kroppen ikke kan lage selv. De må tilføres gjennom maten. For barn regnes også histidin som essensiell.',
          },
          {
            id: 'nat-vg1-7-2-n-quiz1-q2',
            task: 'Hva bestemmer et proteins funksjon?',
            options: [
              { id: 'a', text: 'Antall karbonatomer i proteinet', isCorrect: false },
              { id: 'b', text: 'Fargen på proteinet', isCorrect: false },
              { id: 'c', text: 'Hvor i kroppen proteinet befinner seg', isCorrect: false },
              { id: 'd', text: 'Proteinets tredimensjonale form, som bestemmes av aminosyrerekkefølgen', isCorrect: true },
            ],
            solution:
              'Rekkefølgen av aminosyrer i kjeden bestemmer hvordan proteinet folder seg til en tredimensjonal struktur, og denne formen avgjør hva proteinet kan gjøre.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-7-2-n-section2',
      type: 'text',
      content: `## Proteinenes mange jobber

Det som gjør proteiner så fascinerende, er at de har utrolig mange forskjellige funksjoner i kroppen. La oss ta en rask rundtur.

**Enzymer** er kanskje de viktigste proteinene. Et enzym er et protein som fremskynder kjemiske reaksjoner i kroppen. Uten enzymer ville reaksjonene gå altfor sakte til at vi kunne overleve. Tenk på enzymet **amylase** i spyttet ditt -- det begynner å bryte ned stivelse til sukker allerede mens du tygger. **Laktase** bryter ned melkesukkeret laktose. Kroppen har tusenvis av ulike enzymer, hvert spesialisert for sin reaksjon.

**Antistoffer** er proteiner i immunforsvaret som gjenkjenner og nøytraliserer fremmede stoffer -- det vi kaller antigener. Når du har hatt forkjølelse en gang, har immunforsvaret ditt lagd antistoffer som husker viruset, slik at du er bedre beskyttet neste gang.

Mange **hormoner** er proteiner. **Insulin**, for eksempel, regulerer blodsukkeret ditt. Det er et proteinhormon som produseres i bukspyttkjertelen.

**Strukturproteiner** gir styrke og form til kroppens vev. **Kollagen** er det vanligste proteinet i kroppen -- det finnes i hud, sener, knokler og bindevev. **Keratin** er proteinet i hår og negler. **Transportproteiner** frakter stoffer rundt i kroppen. Det mest kjente er **hemoglobin**, som frakter oksygen fra lungene til alle kroppens celler. Og **kontraktile proteiner** som **aktin** og **myosin** gir musklene evnen til å trekke seg sammen, slik at du kan bevege deg.`,
    },
    {
      id: 'nat-vg1-7-2-n-section3',
      type: 'text',
      content: `## Komplette og ufullstendige proteiner -- spiser du riktig?

Nå som du vet at kroppen trenger alle de essensielle aminosyrene, dukker et viktig spørsmål opp: Inneholder all mat alle aminosyrene du trenger?

Svaret er nei. Et **komplett protein** er et protein som inneholder alle essensielle aminosyrer i tilstrekkelige mengder. Typiske kilder er kjøtt, fisk, egg, melkeprodukter, soya og quinoa. Et **ufullstendig protein** mangler én eller flere essensielle aminosyrer. De fleste belgfrukter, korn og nøtter inneholder hver for seg ufullstendige proteiner.

Men her kommer det smarte: Ved å kombinere ulike plantekilder kan du likevel få inn alle essensielle aminosyrer. Slike kombinasjoner kalles **komplementære proteiner**. Ris og bønner utfyller hverandre perfekt. Brød med hummus (kikerter) er en annen klassiker. Linser og korn fungerer også. Du trenger ikke å spise kombinasjonen i hvert eneste måltid -- det holder å variere i løpet av dagen.

Det er en vanlig myte at vegetarianere og veganere ikke kan få nok protein. I virkeligheten kan et vegetarisk eller vegansk kosthold dekke proteinbehovet helt fint, men det krever at man er litt mer bevisst på å variere mellom ulike proteinkiler. Soya og quinoa er plantekilder som faktisk er komplette i seg selv.

Animalsk protein er som regel komplett, men det betyr ikke at det nødvendigvis er «bedre». Det handler om å vite hva du spiser og hvordan du setter sammen måltidene dine.`,
    },
    {
      id: 'nat-vg1-7-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på proteinenes funksjoner og proteinkvalitet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-7-2-n-quiz2-q0',
            task: 'Hva er et enzyms funksjon?',
            options: [
              { id: 'a', text: 'Å lagre energi i cellene', isCorrect: false },
              { id: 'b', text: 'Å fremskynde kjemiske reaksjoner i kroppen', isCorrect: true },
              { id: 'c', text: 'Å frakte oksygen i blodet', isCorrect: false },
              { id: 'd', text: 'Å beskytte kroppen mot infeksjoner', isCorrect: false },
            ],
            solution:
              'Enzymer er proteiner som fremskynder (katalyserer) kjemiske reaksjoner i kroppen. Uten enzymer ville reaksjonene gå for sakte. Eksempler er amylase (bryter ned stivelse) og laktase (bryter ned laktose).',
          },
          {
            id: 'nat-vg1-7-2-n-quiz2-q1',
            task: 'Hvilket protein frakter oksygen i blodet?',
            options: [
              { id: 'a', text: 'Kollagen', isCorrect: false },
              { id: 'b', text: 'Keratin', isCorrect: false },
              { id: 'c', text: 'Hemoglobin', isCorrect: true },
              { id: 'd', text: 'Insulin', isCorrect: false },
            ],
            solution:
              'Hemoglobin er et transportprotein som finnes i røde blodceller og frakter oksygen fra lungene til alle kroppens celler.',
          },
          {
            id: 'nat-vg1-7-2-n-quiz2-q2',
            task: 'Hva er komplementære proteiner?',
            options: [
              { id: 'a', text: 'Proteiner som lages industrielt', isCorrect: false },
              { id: 'b', text: 'Proteiner som bare finnes i animalsk mat', isCorrect: false },
              { id: 'c', text: 'Proteiner som inneholder mer energi enn andre', isCorrect: false },
              { id: 'd', text: 'Kombinasjoner av plantekilder som til sammen gir alle essensielle aminosyrer', isCorrect: true },
            ],
            solution:
              'Komplementære proteiner er kombinasjoner av ulike plantekilder som utfyller hverandre, slik at man til sammen får alle essensielle aminosyrer. Eksempler er ris og bønner, eller brød og hummus.',
          },
          {
            id: 'nat-vg1-7-2-n-quiz2-q3',
            task: 'Hvilken plantekilde er et eksempel på komplett protein?',
            options: [
              { id: 'a', text: 'Hvete', isCorrect: false },
              { id: 'b', text: 'Soya', isCorrect: true },
              { id: 'c', text: 'Mais', isCorrect: false },
              { id: 'd', text: 'Ris', isCorrect: false },
            ],
            solution:
              'Soya (og quinoa) er plantekilder som inneholder alle essensielle aminosyrer og regnes som komplette proteiner. De fleste andre plantekilder mangler én eller flere essensielle aminosyrer.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-7-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært at **proteiner** er kroppens mest allsidige molekyler, bygget opp av **aminosyrer** som kobles sammen med **peptidbindinger** til lange kjeder. Det finnes 20 ulike aminosyrer, og **8-9 av dem er essensielle** -- kroppen kan ikke lage dem selv og må få dem gjennom maten.

Proteinenes funksjon bestemmes av den tredimensjonale formen, som igjen avhenger av aminosyrerekkefølgen. Proteiner fungerer som **enzymer** (fremskynder kjemiske reaksjoner, f.eks. amylase), **antistoffer** (bekjemper infeksjoner), **hormoner** (f.eks. insulin), **strukturproteiner** (kollagen i hud, keratin i hår), **transportproteiner** (hemoglobin frakter oksygen) og **kontraktile proteiner** (aktin og myosin i muskler).

**Komplette proteiner** inneholder alle essensielle aminosyrer og finnes i animalske kilder, soya og quinoa. **Ufullstendige proteiner** mangler én eller flere essensielle aminosyrer, men kan kombineres til **komplementære proteiner** -- for eksempel ris og bønner, eller brød og hummus. Et vegetarisk eller vegansk kosthold kan dekke proteinbehovet ved bevisst sammensetning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3 NARRATIV: Fett og fettsyrer
// ============================================================================

export const CHAPTER_NAT_VG1_7_3_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-7-3-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '7.3',
  title: 'Fett og fettsyrer',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå hvorfor fett har fått et ufortjent dårlig rykte, og lær å skille mellom fett som beskytter helsen og fett som truer den.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for funksjonene til noen næringsstoffer'],
  linkedChapterId: 'nat-vg1-7-3',
  content: [
    {
      id: 'nat-vg1-7-3-n-intro',
      type: 'text',
      content: `## Fett -- den misforståtte superstjernen

Fett har fått et dårlig rykte. I årevis har vi hørt at fett gjør oss fete og syke. Men sannheten er mer nyansert -- og langt mer interessant.

**Fett** (også kalt lipider) er faktisk den mest energitette av alle næringsstoffene. Med **37 kJ per gram** (9 kcal/g) gir fett mer enn dobbelt så mye energi som karbohydrater og proteiner. Det er derfor kroppen bruker fett som sin viktigste langtidslagring av energi. Det er rett og slett en utrolig effektiv måte å pakke energi på.

Men fett gjør mye mer enn å lagre energi. Det bygger cellemembraner, isolerer mot kulde, beskytter indre organer, og er nødvendig for at kroppen skal ta opp de fettløselige vitaminene A, D, E og K. Uten fett i kosten ville du rett og slett ikke kunne ta opp disse livsviktige vitaminene.

Det som virkelig betyr noe, er hvilken **type fett** du spiser. For å forstå dette må vi se på hvordan et fettmolekyl er bygget opp. Et typisk fettmolekyl -- et **triglyserid** -- består av **glyserol** (en tre-karbon alkohol) med **tre fettsyrer** bundet til seg. Og det er nettopp fettsyrene som avgjør om fettet er sunt eller usunt. Forskjellen handler om **dobbeltbindinger** -- eller mangelen på dem -- mellom karbonatomene i fettsyrekjeden.`,
    },
    {
      id: 'nat-vg1-7-3-n-section1',
      type: 'text',
      content: `## Mettede, enumettede og flerumettede fettsyrer

La oss starte med det enkleste: **mettede fettsyrer**. Disse har ingen dobbeltbindinger mellom karbonatomene. Karbonkjeden er «mettet» med hydrogen -- hvert karbonatom er bundet til så mange hydrogenatomer som mulig. Resultatet er at mettede fettsyrer er rette og stive, noe som gjør at de pakker seg tett og er **faste ved romtemperatur**. Tenk på smør, ost, kjøttfett og kokosolje. Mettede fettsyrer bør begrenses i kostholdet, fordi de øker nivået av LDL-kolesterol i blodet.

**Enumettede fettsyrer** har **én dobbeltbinding** i karbonkjeden. Denne dobbeltbindingen lager en knekk i kjeden, slik at molekylene ikke kan pakke seg like tett. Derfor er enumettede fettsyrer **flytende ved romtemperatur**. Olivenolje, rapsolje, avokado og nøtter er rike på enumettet fett. Denne typen fett anses som gunstig for hjertehelsen.

**Flerumettede fettsyrer** har **to eller flere dobbeltbindinger**, noe som gir enda flere knekker og enda mer flytende konsistens. Blant de flerumettede finner vi de berømte **omega-3** og **omega-6**-fettsyrene, som er **essensielle** -- kroppen kan ikke lage dem selv. Fet fisk, linfrø, valnøtter og solsikkeolje er gode kilder. Det enkle tipset er: Bytt ut mettede fettsyrer med umettede for bedre helse.`,
    },
    {
      id: 'nat-vg1-7-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på fettsyrer og fettets oppbygning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-7-3-n-quiz1-q0',
            task: 'Hva er et triglyserid bygget opp av?',
            options: [
              { id: 'a', text: 'Tre aminosyrer og ett karbohydrat', isCorrect: false },
              { id: 'b', text: 'Glyserol og tre fettsyrer', isCorrect: true },
              { id: 'c', text: 'Tre glukosemolekyler og en fettsyre', isCorrect: false },
              { id: 'd', text: 'Kolesterol og fosfolipider', isCorrect: false },
            ],
            solution:
              'Et triglyserid (fettmolekyl) er bygget opp av glyserol (en tre-karbon alkohol) med tre fettsyrer bundet til seg. Fettsyrenes egenskaper bestemmer fettets egenskaper.',
          },
          {
            id: 'nat-vg1-7-3-n-quiz1-q1',
            task: 'Hvorfor er smør fast ved romtemperatur?',
            options: [
              { id: 'a', text: 'Fordi det inneholder mye vann', isCorrect: false },
              { id: 'b', text: 'Fordi det inneholder mye protein', isCorrect: false },
              { id: 'c', text: 'Fordi det er rikt på mettede fettsyrer uten dobbeltbindinger', isCorrect: true },
              { id: 'd', text: 'Fordi det oppbevares i kjøleskapet', isCorrect: false },
            ],
            solution:
              'Smør er rikt på mettede fettsyrer, som ikke har dobbeltbindinger. Karbonkjedene er rette og kan pakke seg tett, noe som gjør fettet fast ved romtemperatur.',
          },
          {
            id: 'nat-vg1-7-3-n-quiz1-q2',
            task: 'Hvor mye energi gir fett per gram?',
            options: [
              { id: 'a', text: '17 kJ', isCorrect: false },
              { id: 'b', text: '37 kJ', isCorrect: true },
              { id: 'c', text: '4 kJ', isCorrect: false },
              { id: 'd', text: '25 kJ', isCorrect: false },
            ],
            solution:
              'Fett gir 37 kJ per gram (9 kcal/g), som er mer enn dobbelt så mye som karbohydrater og proteiner (17 kJ/g). Det gjør fett til den mest energitette næringsstoffgruppen.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-7-3-n-section2',
      type: 'text',
      content: `## Omega-3, omega-6 og det farlige transfettet

De **essensielle fettsyrene** fortjener et eget avsnitt, fordi de er helt avgjørende for helsen din.

**Omega-3-fettsyrer** er spesielt viktige for hjernens utvikling og funksjon, for synet og for hjertehelsen. De demper betennelsesreaksjoner i kroppen, noe som kan redusere risikoen for hjerte- og karsykdommer. De beste kildene er fet fisk som laks, makrell og sild. Vegetabilske kilder som linfrø og valnøtter inneholder også omega-3, men i en annen form (ALA) som kroppen må omdanne til de mest aktive formene (EPA og DHA).

**Omega-6-fettsyrer** er også essensielle og viktige for cellemembranene og immunforsvaret. De finnes i solsikkeolje, maisolje, nøtter og frø. De fleste av oss får nok omega-6 gjennom vanlig kosthold, men mange får for lite omega-3. Derfor anbefales det å spise fet fisk to til tre ganger i uken.

Og så har vi **transfett** -- den virkelig farlige typen. Transfett er for det meste industrielt fremstilt ved herding av vegetabilsk olje. Det øker LDL-kolesterol (det «dårlige» kolesterolet) og senker HDL-kolesterol (det «gode»), noe som øker risikoen for hjerte- og karsykdommer betraktelig. Transfett bør rett og slett unngås helt. Det kan finnes i noe hurtigmat, kjeks, kaker og snacks. Heldigvis har mange land, inkludert Norge, innført strenge grenser for transfett i matvarer.`,
    },
    {
      id: 'nat-vg1-7-3-n-section3',
      type: 'text',
      content: `## Fettets mange roller i kroppen

Fett gjør langt mer enn å gi energi. La oss ta en titt på alle rollene fett spiller.

Som **energireserve** er fettvev en utrolig effektiv måte å lagre energi på. Fett gir mer enn dobbelt så mye energi per gram som karbohydrater, og fettvev kan lagre store mengder uten å binde vann. Mens glykogenlagrene dine er oppbrukt etter noen timer, kan fettlagrene holde deg i gang i ukevis.

**Fosfolipider** -- en spesiell type fettmolekyl -- er hovedbestanddelen i alle **cellemembraner**. Uten fosfolipider ville ikke cellene dine ha noen ytre barriere, og alt ville falle fra hverandre.

De **fettløselige vitaminene** A, D, E og K krever fett for å tas opp i tarmen. Spiser du for eksempel gulrot (som inneholder vitamin A som betakaroten) helt uten fett, tar kroppen opp langt mindre av vitaminet.

Fettvev fungerer som **isolasjon** mot kulde -- det holder deg varm. Det fungerer også som **beskyttelse** for indre organer, som en slags støtdemper. Og noen viktige hormoner, som **steroidhormoner**, lages faktisk fra fett.

Til slutt bør du kjenne til **kolesterol**. Kolesterol er et fettlignende stoff som lages i leveren og er nødvendig for cellemembraner, gallesalter og vitamin D-produksjon. **LDL-kolesterol** frakter kolesterol til cellene, men kan avleires i blodårene og føre til åreforkalkning. **HDL-kolesterol** frakter kolesterol tilbake til leveren og regnes som «bra». Kosthold med mye mettet fett øker LDL-kolesterol.

For å sette det i perspektiv: 10 gram smør (ca. 80 % fett) gir omtrent 296 kJ i energi, mens 10 gram sukker gir 170 kJ. Smøret gir nesten dobbelt så mye energi, selv om det bare er 80 prosent fett.`,
    },
    {
      id: 'nat-vg1-7-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på omega-fettsyrer, transfett og fettets funksjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-7-3-n-quiz2-q0',
            task: 'Hvorfor er omega-3-fettsyrer viktige?',
            options: [
              { id: 'a', text: 'De gir mer energi enn andre fett', isCorrect: false },
              { id: 'b', text: 'De er viktige for hjerneutvikling, syn og hjertehelse, og demper betennelse', isCorrect: true },
              { id: 'c', text: 'De er den beste kilden til vitamin C', isCorrect: false },
              { id: 'd', text: 'De gjør fettet fast ved romtemperatur', isCorrect: false },
            ],
            solution:
              'Omega-3-fettsyrer er essensielle og viktige for hjernens utvikling og funksjon, for synet og for hjertehelsen. De demper betennelsesreaksjoner i kroppen. De beste kildene er fet fisk som laks, makrell og sild.',
          },
          {
            id: 'nat-vg1-7-3-n-quiz2-q1',
            task: 'Hva er problemet med transfett?',
            options: [
              { id: 'a', text: 'Det smaker dårlig', isCorrect: false },
              { id: 'b', text: 'Det inneholder for lite energi', isCorrect: false },
              { id: 'c', text: 'Det øker LDL-kolesterol og senker HDL-kolesterol, og øker risikoen for hjertesykdom', isCorrect: true },
              { id: 'd', text: 'Det inneholder for mye omega-3', isCorrect: false },
            ],
            solution:
              'Transfett er industrielt fremstilt ved herding av vegetabilsk olje. Det øker LDL-kolesterol (det dårlige) og senker HDL-kolesterol (det gode), noe som øker risikoen for hjerte- og karsykdommer betraktelig.',
          },
          {
            id: 'nat-vg1-7-3-n-quiz2-q2',
            task: 'Hvilke vitaminer krever fett for å tas opp i tarmen?',
            options: [
              { id: 'a', text: 'B-vitaminene og vitamin C', isCorrect: false },
              { id: 'b', text: 'Vitamin A, D, E og K', isCorrect: true },
              { id: 'c', text: 'Bare vitamin D', isCorrect: false },
              { id: 'd', text: 'Alle vitaminer krever fett for opptak', isCorrect: false },
            ],
            solution:
              'De fettløselige vitaminene A, D, E og K krever fett for å tas opp i tarmen. Uten fett i kosten vil opptaket av disse vitaminene bli kraftig redusert.',
          },
          {
            id: 'nat-vg1-7-3-n-quiz2-q3',
            task: 'Hva er forskjellen mellom LDL- og HDL-kolesterol?',
            options: [
              { id: 'a', text: 'LDL er flytende og HDL er fast', isCorrect: false },
              { id: 'b', text: 'LDL frakter kolesterol til cellene og kan avleires i blodårer, HDL frakter det tilbake til leveren', isCorrect: true },
              { id: 'c', text: 'LDL finnes i planter og HDL i dyr', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell, begge er like usunne', isCorrect: false },
            ],
            solution:
              'LDL-kolesterol frakter kolesterol til cellene, men overskudd kan avleires i blodårene og føre til åreforkalkning. HDL-kolesterol frakter kolesterol tilbake til leveren og regnes som det gode kolesterolet.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-7-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært at **fett** er den mest energitette næringsstoffgruppen med **37 kJ per gram** -- mer enn dobbelt så mye som karbohydrater og proteiner. Et fettmolekyl (**triglyserid**) er bygget opp av **glyserol** og **tre fettsyrer**.

Fettsyrene deles inn etter dobbeltbindinger: **Mettede fettsyrer** har ingen dobbeltbindinger, er faste ved romtemperatur (smør, ost, kjøttfett) og bør begrenses. **Enumettede fettsyrer** har én dobbeltbinding, er flytende (olivenolje, avokado) og er gunstige for hjertehelsen. **Flerumettede fettsyrer** har to eller flere dobbeltbindinger og inkluderer de essensielle **omega-3** (fet fisk, linfrø) og **omega-6** (solsikkeolje, nøtter). **Transfett** er industrielt fremstilt og bør unngås helt fordi det øker risikoen for hjertesykdom.

Fett har mange viktige funksjoner: energireserve, byggestoff i cellemembraner (fosfolipider), nødvendig for opptak av fettløselige vitaminer (A, D, E, K), isolasjon mot kulde, beskyttelse av organer, og råstoff for hormoner. **LDL-kolesterol** frakter kolesterol til cellene og kan gi åreforkalkning, mens **HDL-kolesterol** frakter det tilbake til leveren.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4 NARRATIV: Vitaminer, mineraler og et variert kosthold
// ============================================================================

export const CHAPTER_NAT_VG1_7_4_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-7-4-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '7.4',
  title: 'Vitaminer, mineraler og et variert kosthold',
  subtitle: 'Narrativ versjon',
  description:
    'Fra skjørbuk på sjøen til vitamin D-mangel i moderne Norge -- en fortelling om hvorfor de minste stoffene i maten kan ha de største konsekvensene for helsen din.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjøre rede for funksjonene til noen næringsstoffer',
    'diskutere hvorfor et variert kosthold er viktig i et helse- og bærekraftsperspektiv',
  ],
  linkedChapterId: 'nat-vg1-7-4',
  content: [
    {
      id: 'nat-vg1-7-4-n-intro',
      type: 'text',
      content: `## Små mengder, store konsekvenser

Forestill deg en britisk sjømann på 1600-tallet. Skipet har vært på havet i flere måneder. Maten om bord er tørket kjøtt, saltet fisk og harde kjeks -- ingen frukt, ingen grønnsaker. Gradvis merker mannskapet at noe er galt. De blir slappe og trøtte. Tannkjøttet begynner å blø. Sår gror ikke. Tenner løsner. Mange dør. Sykdommen kalles **skjørbuk**, og årsaken er mangel på et eneste lite stoff: **vitamin C**.

Denne historien illustrerer noe viktig: Kroppen trenger **vitaminer** og **mineraler** bare i bittesmå mengder, men uten dem bryter alt sammen. Disse **mikronæringsstoffene** er helt avgjørende for at kroppens tusenvis av kjemiske reaksjoner skal fungere normalt.

**Vitaminer** er organiske forbindelser som kroppen ikke kan lage nok av selv. De deles inn i to hovedgrupper: **fettløselige vitaminer** (A, D, E, K) som lagres i fettvev og lever, og **vannløselige vitaminer** (B-vitaminene og C) som ikke lagres og skilles ut i urinen.

**Mineraler** er uorganiske grunnstoffer som trengs for mange kroppsfunksjoner. Viktige mineraler inkluderer kalsium, jern, jod og natrium.

Den enkleste måten å få alle mikronæringsstoffene du trenger på? Et **variert kosthold** med mye grønnsaker, frukt, fullkorn og fisk.`,
    },
    {
      id: 'nat-vg1-7-4-n-section1',
      type: 'text',
      content: `## Fettløselige vitaminer -- lagret for framtiden

De fettløselige vitaminene har til felles at de løses i fett, lagres i kroppens fettvev og lever, og krever fett i kosten for å bli tatt opp i tarmen. La oss gå gjennom dem én for én.

**Vitamin A** er avgjørende for synet -- spesielt nattsyn -- og for hud og immunforsvar. Du får det fra lever, gulrot, søtpotet og spinat (i form av betakaroten, som kroppen omdanner til vitamin A). Mangel på vitamin A kan gi nattblindhet og tørr hud. I utviklingsland er vitamin A-mangel faktisk en av de viktigste årsakene til blindhet hos barn.

**Vitamin D** har en spesiell plass i norsk helsedebatt. Vitamin D er nødvendig for opptak av kalsium, benhelse og immunforsvar. Det unike med vitamin D er at huden din lager det når den utsettes for sollys. Men her i Norge, der solen er lav på himmelen fra oktober til mars, produserer huden lite eller ingen vitamin D om vinteren. Kilder som fet fisk, tran og beriket melk er viktige, og Helsedirektoratet anbefaler vitamin D-tilskudd til alle om vinteren. Mangel kan gi **rakitt** (bløte knokler) hos barn og beinskjørhet hos voksne.

**Vitamin E** fungerer som en **antioksidant** som beskytter cellemembraner mot skade fra frie radikaler. Du finner det i vegetabilske oljer, nøtter og frø.

**Vitamin K** trengs for **blodkoagulering** (blodlevring) og benhelse. Grønne bladgrønnsaker som spinat og brokkoli er gode kilder. Uten vitamin K ville et lite kutt kunne blø farlig lenge.

Husk: Fordi fettløselige vitaminer lagres i kroppen, kan du i teorien få for mye av dem. Men med vanlig kosthold er overdosering svært sjelden.`,
    },
    {
      id: 'nat-vg1-7-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på fettløselige vitaminer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-7-4-n-quiz1-q0',
            task: 'Hvorfor er vitamin D-mangel et spesielt problem i Norge?',
            options: [
              { id: 'a', text: 'Fordi nordmenn spiser for mye fisk', isCorrect: false },
              { id: 'b', text: 'Fordi solen er for lav om vinteren til at huden kan lage vitamin D', isCorrect: true },
              { id: 'c', text: 'Fordi vitamin D bare finnes i tropisk frukt', isCorrect: false },
              { id: 'd', text: 'Fordi nordmenn drikker for mye melk', isCorrect: false },
            ],
            solution:
              'Norge ligger langt nord, og fra oktober til mars er solen så lav at huden ikke kan produsere vitamin D fra sollys. Derfor anbefaler Helsedirektoratet vitamin D-tilskudd til alle om vinteren.',
          },
          {
            id: 'nat-vg1-7-4-n-quiz1-q1',
            task: 'Hva er den viktigste forskjellen mellom fettløselige og vannløselige vitaminer?',
            options: [
              { id: 'a', text: 'Fettløselige vitaminer finnes bare i kjøtt, vannløselige bare i frukt', isCorrect: false },
              { id: 'b', text: 'Fettløselige vitaminer lagres i kroppen, vannløselige skilles ut og må tilføres jevnlig', isCorrect: true },
              { id: 'c', text: 'Fettløselige vitaminer er viktigere enn vannløselige', isCorrect: false },
              { id: 'd', text: 'Vannløselige vitaminer gir mer energi enn fettløselige', isCorrect: false },
            ],
            solution:
              'Fettløselige vitaminer (A, D, E, K) lagres i fettvev og lever, mens vannløselige vitaminer (B og C) ikke lagres i kroppen -- overskuddet skilles ut i urinen og de må tilføres jevnlig gjennom kosten.',
          },
          {
            id: 'nat-vg1-7-4-n-quiz1-q2',
            task: 'Hvilket vitamin er avgjørende for blodkoagulering?',
            options: [
              { id: 'a', text: 'Vitamin A', isCorrect: false },
              { id: 'b', text: 'Vitamin D', isCorrect: false },
              { id: 'c', text: 'Vitamin E', isCorrect: false },
              { id: 'd', text: 'Vitamin K', isCorrect: true },
            ],
            solution:
              'Vitamin K er nødvendig for blodkoagulering (blodlevring). Uten vitamin K ville sår og kutt blø mye lenger. Gode kilder er grønne bladgrønnsaker som spinat og brokkoli.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-7-4-n-section2',
      type: 'text',
      content: `## Vannløselige vitaminer og mineraler -- daglig påfyll

Mens fettløselige vitaminer lagres i kroppen, er de **vannløselige vitaminene** i en helt annen situasjon. De løses i vann, lagres ikke, og overskudd skilles raskt ut i urinen. Det betyr at du trenger dem jevnlig.

**B-vitaminene** er en hel familie: B1, B2, B3, B5, B6, B7, B9 og B12. De har mange ulike funksjoner, men fellesnevneren er at de er viktige for energiomsetning, nervefunksjon og celledeling. **Vitamin B12** fortjener spesiell oppmerksomhet fordi det nesten bare finnes i animalske produkter. For veganere er det derfor helt nødvendig å ta B12-tilskudd. **Vitamin B9** (folat) er spesielt viktig for gravide, fordi det forebygger nevralrørsdefekter hos fosteret.

Og så har vi **vitamin C** -- stjernen fra skjørbuk-historien. Vitamin C er en antioksidant, styrker immunforsvaret, er nødvendig for produksjon av kollagen, og forbedrer opptaket av jern. Du finner det i sitrusfrukter, paprika, brokkoli og jordbær. Heldigvis trenger du ikke bekymre deg for skjørbuk i dag -- det er lett å få nok vitamin C med et normalt kosthold.

Når det gjelder **mineraler**, er det fire du bør kjenne godt til. **Kalsium** er avgjørende for benhelse, muskelsammentrekning og nervesignaler. Melk, ost, brokkoli og grønnkål er gode kilder. **Jern** er nødvendig for oksygentransport i hemoglobin. Rødt kjøtt, belgfrukter og spinat er jernrike. Mangel gir **anemi** (blodmangel), som fører til trøtthet og slapphet. **Jod** trengs for at skjoldbruskkjertelen skal regulere stoffskiftet. Sjømat, jodert salt og melk er viktige kilder. **Natrium** er viktig for væskebalanse og nervefunksjon, men for mye natrium (fra salt) gir høyt blodtrykk.`,
    },
    {
      id: 'nat-vg1-7-4-n-section3',
      type: 'text',
      content: `## Et kosthold som er bra for deg og planeten

Nå som du vet hva kroppen trenger, la oss zoome ut og se det store bildet. Hva bør vi egentlig spise?

**Helsedirektoratets kostråd** gir åtte tydelige anbefalinger: Spis variert med mye grønnsaker, frukt og bær. Velg grove kornprodukter. Spis fisk to til tre ganger i uken. Velg magre meieriprodukter. Begrens rødt og bearbeidet kjøtt. Velg matoljer og myk margarin. Begrens sukker, salt og alkohol. Og drikk vann.

Men her er noe fascinerende: Det viser seg at et sunt kosthold og et **klimavennlig kosthold** er i stor grad det samme. Mer plantekost og mindre rødt kjøtt er bra for både kroppen og kloden. Norsk sesongvare og sjømat har lavere klimaavtrykk enn importert kjøtt. Og å redusere matsvinn er bra for alt og alle.

I 2019 publiserte **EAT-Lancet-kommisjonen** en banebrytende vitenskapelig rapport som undersøkte nettopp dette. Hovedbudskapet var klart: Vi bør halvere forbruket av rødt kjøtt og sukker, og doble inntaket av grønnsaker, frukt, belgfrukter og nøtter. Et slikt kosthold kan brødfø ti milliarder mennesker innen 2050 uten å ødelegge planeten.

Historien om sjøfolkenes skjørbuk lærte oss at mangel på ett eneste vitamin kan ha katastrofale konsekvenser. I dag vet vi at kostvalgene våre ikke bare påvirker vår egen helse, men hele planetens fremtid. Det er ganske oppsiktsvekkende at det du putter på tallerkenen din er en del av løsningen på noen av verdens største utfordringer.`,
    },
    {
      id: 'nat-vg1-7-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på vannløselige vitaminer, mineraler og kostholdsanbefalinger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-7-4-n-quiz2-q0',
            task: 'Hvorfor bør veganere ta vitamin B12-tilskudd?',
            options: [
              { id: 'a', text: 'Fordi B12 øker muskelmassen', isCorrect: false },
              { id: 'b', text: 'Fordi B12 nesten bare finnes i animalske produkter', isCorrect: true },
              { id: 'c', text: 'Fordi veganere spiser for mye fiber', isCorrect: false },
              { id: 'd', text: 'Fordi B12 ødelegges ved koking av grønnsaker', isCorrect: false },
            ],
            solution:
              'Vitamin B12 finnes nesten bare i animalske produkter som kjøtt, fisk, egg og melk. Veganere som ikke spiser noen animalske produkter, må derfor ta B12-tilskudd for å unngå mangel, som kan gi blodmangel og nerveskader.',
          },
          {
            id: 'nat-vg1-7-4-n-quiz2-q1',
            task: 'Hvilket mineral er viktig for oksygentransport i blodet?',
            options: [
              { id: 'a', text: 'Kalsium', isCorrect: false },
              { id: 'b', text: 'Natrium', isCorrect: false },
              { id: 'c', text: 'Jern', isCorrect: true },
              { id: 'd', text: 'Jod', isCorrect: false },
            ],
            solution:
              'Jern er en viktig del av hemoglobin, proteinet i røde blodceller som frakter oksygen. Jernmangel gir anemi (blodmangel) med symptomer som trøtthet og slapphet. Gode kilder er rødt kjøtt, belgfrukter og spinat.',
          },
          {
            id: 'nat-vg1-7-4-n-quiz2-q2',
            task: 'Hva er hovedbudskapet i EAT-Lancet-rapporten?',
            options: [
              { id: 'a', text: 'At alle bør bli veganere', isCorrect: false },
              { id: 'b', text: 'At vi bør spise mer kjøtt for å få nok protein', isCorrect: false },
              { id: 'c', text: 'At vi bør halvere rødt kjøtt og sukker, og doble grønnsaker, frukt og belgfrukter', isCorrect: true },
              { id: 'd', text: 'At kosttilskudd er viktigere enn mat', isCorrect: false },
            ],
            solution:
              'EAT-Lancet-rapporten (2019) anbefaler å halvere forbruket av rødt kjøtt og sukker, og doble inntaket av grønnsaker, frukt, belgfrukter og nøtter. Dette kostholdet er bra for både helse og klima.',
          },
          {
            id: 'nat-vg1-7-4-n-quiz2-q3',
            task: 'Hva var skjørbuk?',
            options: [
              { id: 'a', text: 'En mangelsykdom forårsaket av for lite vitamin C', isCorrect: true },
              { id: 'b', text: 'En infeksjonssykdom spredt av rotter om bord på skip', isCorrect: false },
              { id: 'c', text: 'En mangelsykdom forårsaket av for lite jern', isCorrect: false },
              { id: 'd', text: 'En allergisk reaksjon på saltet fisk', isCorrect: false },
            ],
            solution:
              'Skjørbuk var en mangelsykdom forårsaket av vitamin C-mangel. Sjøfolk var spesielt utsatt fordi de manglet fersk frukt og grønnsaker på lange reiser. Symptomene var blødende tannkjøtt, sår som ikke grodde, og i verste fall døden.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-7-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært at **vitaminer** og **mineraler** er mikronæringsstoffer som kroppen trenger i små mengder, men som er helt avgjørende for normal funksjon.

**Fettløselige vitaminer** (A, D, E, K) lagres i fettvev og lever, og krever fett for opptak i tarmen. Vitamin A er viktig for syn og immunforsvar. Vitamin D er nødvendig for benhelse og kalsiumopptak, og er spesielt viktig å supplementere om vinteren i Norge. Vitamin E er en antioksidant, og vitamin K trengs for blodkoagulering.

**Vannløselige vitaminer** (B-vitaminene og C) lagres ikke i kroppen og må tilføres jevnlig. B12 finnes nesten bare i animalsk mat og er viktig for veganere å supplementere. Folat (B9) er viktig for gravide. Vitamin C er viktig for immunforsvar, kollagenproduksjon og jernopptak -- mangel gir skjørbuk.

Viktige **mineraler** inkluderer kalsium (benhelse), jern (oksygentransport i hemoglobin, mangel gir anemi), jod (stoffskifte via skjoldbruskkjertelen) og natrium (væskebalanse, for mye gir høyt blodtrykk).

**Helsedirektoratets kostråd** anbefaler variert kosthold med mye grønnsaker, fullkorn og fisk. **EAT-Lancet-rapporten** viser at et sunt kosthold og et klimavennlig kosthold er mye av det samme: mer plantekost, mindre rødt kjøtt, redusert matsvinn.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.5 NARRATIV: Livsstil og helseutfordringer
// ============================================================================

export const CHAPTER_NAT_VG1_7_5_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-7-5-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '7.5',
  title: 'Livsstil og helseutfordringer',
  subtitle: 'Narrativ versjon',
  description:
    'Utforsk hvordan valgene du tar hver dag -- fra treningen du gjør til søvnen du får -- former helsen din, og forstå hvorfor livsstil er det kraftigste verktøyet du har.',
  estimatedMinutes: 40,
  competenceGoals: ['drøfte aktuelle helse- og livsstilsspørsmål'],
  linkedChapterId: 'nat-vg1-7-5',
  content: [
    {
      id: 'nat-vg1-7-5-n-intro',
      type: 'text',
      content: `## Livsstil -- dine daglige valg former helsen din

Hva har hjertesykdom, type 2-diabetes, fedme og depresjon til felles? De er alle sykdommer som i stor grad påvirkes av hvordan vi lever. Vi kaller dem **livsstilssykdommer**, og de er blant de vanligste helseutfordringene i moderne samfunn.

Tenk på en vanlig hverdag. Du våkner -- har du sovet nok? Du spiser frokost -- hva velger du? Du drar på skolen -- sitter du stille hele dagen, eller er du fysisk aktiv? Du bruker telefonen -- hvor mye tid bruker du på skjerm? Du legger deg om kvelden -- stresser du over noe?

Alle disse valgene og vanene utgjør din **livsstil**. Og livsstilen din påvirker helsen din på helt konkrete, målbare måter. De viktigste livsstilsfaktorene er kosthold, fysisk aktivitet, søvn, stress, rusmidler (alkohol og tobakk), sosiale relasjoner og skjermtid.

Det gode nyheten er at mange livsstilssykdommer faktisk kan **forebygges** gjennom sunne valg. Men det handler ikke bare om individet. Samfunnet spiller også en rolle ved å legge til rette for gode valg gjennom tilgjengelige fritidsarenaer, regulering av usunne produkter og god informasjon. La oss se nærmere på de viktigste faktorene.`,
    },
    {
      id: 'nat-vg1-7-5-n-section1',
      type: 'text',
      content: `## Bevegelse -- kroppens beste medisin

Kroppen din er bygget for bevegelse. Gjennom hele menneskets historie har vi løpt, klatret, båret og arbeidet fysisk. I dag sitter de fleste av oss stille mesteparten av dagen -- og kroppen reagerer.

For ungdom mellom 13 og 17 år anbefales det minst **60 minutter med moderat til høy intensitet daglig**. I tillegg bør aktiviteter som styrker muskler og skjelett gjøres minst tre dager i uken. Og stillesitting bør reduseres. Men dette handler ikke bare om å «burde» -- fordelene er enorme.

**Fysisk aktivitet** styrker hjerte og lunger, bygger muskler og styrker skjelettet. Det reduserer risikoen for fedme, diabetes og hjertesykdom. Men kanskje det mest overraskende for mange er den sterke effekten på **psykisk helse**. Fysisk aktivitet reduserer angst og depresjon, forbedrer søvn, konsentrasjon og læring. Hvorfor? Fordi trening frigjør **endorfiner** -- kroppens egne «lykkestoffer» som gir en følelse av velvære og tilfredshet.

Tenk på det motsatte: **Fysisk inaktivitet** øker risikoen for så godt som alle livsstilssykdommer. Det svekker muskelstyrke og utholdenhet, reduserer benhelsen, og øker risikoen for beinskjørhet og psykiske plager. Kroppen din ble rett og slett ikke designet for å sitte stille åtte timer om dagen.

Og du trenger ikke bli toppidrettsutøver. En rask spasertur, sykling til skolen, lek med venner eller trening i en klubb -- alt teller. Det viktigste er å finne noe du liker, slik at det blir en vane, ikke en plikt.`,
    },
    {
      id: 'nat-vg1-7-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på fysisk aktivitet og livsstilssykdommer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-7-5-n-quiz1-q0',
            task: 'Hvor mye fysisk aktivitet anbefales daglig for ungdom (13-17 år)?',
            options: [
              { id: 'a', text: 'Minst 30 minutter lett aktivitet', isCorrect: false },
              { id: 'b', text: 'Minst 60 minutter moderat til høy intensitet', isCorrect: true },
              { id: 'c', text: 'Minst 90 minutter moderat aktivitet', isCorrect: false },
              { id: 'd', text: 'Minst 20 minutter hard trening', isCorrect: false },
            ],
            solution:
              'Anbefalingen for ungdom 13-17 år er minst 60 minutter med moderat til høy intensitet daglig. I tillegg bør aktiviteter som styrker muskler og skjelett gjøres minst 3 dager i uken.',
          },
          {
            id: 'nat-vg1-7-5-n-quiz1-q1',
            task: 'Hva er endorfiner?',
            options: [
              { id: 'a', text: 'Hormoner som øker blodsukkeret', isCorrect: false },
              { id: 'b', text: 'Enzymer som bryter ned fett', isCorrect: false },
              { id: 'c', text: 'Kroppens egne lykkestoffer som frigjøres ved fysisk aktivitet', isCorrect: true },
              { id: 'd', text: 'Proteiner som bygger muskler', isCorrect: false },
            ],
            solution:
              'Endorfiner er kroppens egne «lykkestoffer» som frigjøres under fysisk aktivitet. De gir en følelse av velvære og tilfredshet, og bidrar til den positive effekten trening har på psykisk helse.',
          },
          {
            id: 'nat-vg1-7-5-n-quiz1-q2',
            task: 'Hvilken av disse er IKKE regnet som en livsstilssykdom?',
            options: [
              { id: 'a', text: 'Type 2-diabetes', isCorrect: false },
              { id: 'b', text: 'Hjerte- og karsykdommer', isCorrect: false },
              { id: 'c', text: 'Vannkopper', isCorrect: true },
              { id: 'd', text: 'Fedme', isCorrect: false },
            ],
            solution:
              'Vannkopper er en infeksjonssykdom forårsaket av et virus, ikke en livsstilssykdom. Livsstilssykdommer som type 2-diabetes, hjertesykdom og fedme påvirkes sterkt av kosthold, fysisk aktivitet og andre livsstilsfaktorer.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-7-5-n-section2',
      type: 'text',
      content: `## Søvn -- hjernens ryddetid

Du tilbringer omtrent en tredjedel av livet ditt sovende. Det kan virke som bortkastet tid, men søvn er alt annet enn passivt. Det er en av de mest aktive og viktige prosessene kroppen gjennomgår.

Ungdom mellom 13 og 18 år trenger **8-10 timer søvn per natt**. Under søvnen skjer det fantastiske ting: Hjernen rydder opp, bearbeider dagens inntrykk og lagrer minner. Kroppen reparerer og bygger vev. Immunforsvaret styrkes. Og viktige hormoner -- inkludert veksthormoner -- skilles ut.

Konsekvensene av **søvnmangel** er dramatiske. Konsentrasjon og hukommelse svekkes. Immunforsvaret blir dårligere, slik at du lettere blir syk. Risikoen for fedme og diabetes øker, delvis fordi hormonbalansen forstyrres. Og psykisk helse rammes -- søvnmangel kan gi irritabilitet, angst og nedstemt humør.

Mange ungdommer sover for lite, og årsakene er mange. I puberteten forskyves døgnrytmen biologisk, slik at du naturlig blir trøtt senere på kvelden. Tidlig skolestart kolliderer med denne nye rytmen. I tillegg hemmer blått lys fra skjermer produksjonen av **melatonin** -- hormonet som gjør deg søvnig. Sosiale medier, lekser og prestasjonspress bidrar også.

Og **psykisk helse** henger tett sammen med søvn, fysisk aktivitet og sosiale relasjoner. Psykisk helse er like viktig som fysisk helse. Risikofaktorer for psykiske plager hos ungdom inkluderer ensomhet, mobbing, høyt press, søvnmangel og overdreven bruk av sosiale medier. Beskyttende faktorer inkluderer gode relasjoner til familie og venner, fysisk aktivitet, opplevelse av mestring og følelse av tilhørighet.`,
    },
    {
      id: 'nat-vg1-7-5-n-section3',
      type: 'text',
      content: `## Stress -- nyttig i små doser, farlig på sikt

Hjertet banker, hendene svetter, kroppen er i høyeste beredskap. Du kjenner igjen følelsen -- det er **stress**. Men stress er ikke bare ubehagelig. I utgangspunktet er det kroppens naturlige reaksjon på utfordringer og krav.

**Kortvarig (akutt) stress** er faktisk nyttig. Det øker oppmerksomheten og ytelsen din. Når du skal holde en presentasjon eller ta en prøve, gir akutt stress deg det lille ekstra. Det er kroppens «kamp eller flukt»-respons i aksjon: hormonene **adrenalin** og **kortisol** frigjøres, hjertet slår raskere, musklene strammer seg, og sansene skjerpes.

Problemet oppstår når stresset ikke gir seg. **Langvarig (kronisk) stress** er skadelig for helsen. Når kroppen er i konstant beredskap, sliter det på systemene. Kronisk stress øker risikoen for hjertesykdom og depresjon, svekker immunforsvaret, kan føre til søvnproblemer og fordøyelsesproblemer, og i verste fall utbrenthet.

Heldigvis finnes det gode **stressmestringsstrategier**. Fysisk aktivitet er en av de mest effektive -- det brenner av stresshormoner og frigjør endorfiner. God søvn gir kroppen tid til å hente seg inn. Sosial støtte fra familie og venner er en kraftig buffer mot stress. Avslapningsteknikker som pusteøvelser og mindfulness kan roe ned nervesystemet. Tidsstyring og prioritering kan redusere følelsen av å bli overveldet. Og å begrense skjermtid og sosiale medier kan fjerne en betydelig kilde til stress.

For å se det hele i sammenheng: Tenk på **type 2-diabetes** som et eksempel. Ved type 2-diabetes produserer kroppen insulin, men cellene reagerer ikke godt nok på det -- såkalt **insulinresistens**. Overvekt, fysisk inaktivitet, usunt kosthold og søvnmangel øker alle risikoen. Forebygging handler om en sunn vekt, regelmessig aktivitet, balansert kosthold med fiber og fullkorn, og tilstrekkelig søvn. Alt henger sammen.`,
    },
    {
      id: 'nat-vg1-7-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på søvn, stress og helseutfordringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-7-5-n-quiz2-q0',
            task: 'Hvor mange timer søvn anbefales for ungdom (13-18 år)?',
            options: [
              { id: 'a', text: '5-6 timer', isCorrect: false },
              { id: 'b', text: '6-7 timer', isCorrect: false },
              { id: 'c', text: '8-10 timer', isCorrect: true },
              { id: 'd', text: '11-12 timer', isCorrect: false },
            ],
            solution:
              'Ungdom 13-18 år trenger 8-10 timer søvn per natt. Under søvnen bearbeider hjernen inntrykk, kroppen reparerer vev, immunforsvaret styrkes og veksthormoner skilles ut.',
          },
          {
            id: 'nat-vg1-7-5-n-quiz2-q1',
            task: 'Hva er forskjellen mellom akutt og kronisk stress?',
            options: [
              { id: 'a', text: 'Akutt stress er naturlig og kan være nyttig, kronisk stress er langvarig og skadelig', isCorrect: true },
              { id: 'b', text: 'Akutt stress er farligst, kronisk stress er ufarlig', isCorrect: false },
              { id: 'c', text: 'Det er ingen forskjell, all stress er skadelig', isCorrect: false },
              { id: 'd', text: 'Akutt stress rammer bare barn, kronisk stress rammer bare voksne', isCorrect: false },
            ],
            solution:
              'Akutt (kortvarig) stress er naturlig og kan øke oppmerksomhet og ytelse. Kronisk (langvarig) stress er skadelig fordi det holder kroppen i konstant beredskap, noe som øker risikoen for hjertesykdom, depresjon og svekket immunforsvar.',
          },
          {
            id: 'nat-vg1-7-5-n-quiz2-q2',
            task: 'Hva er insulinresistens?',
            options: [
              { id: 'a', text: 'At kroppen produserer for mye insulin', isCorrect: false },
              { id: 'b', text: 'At kroppen ikke produserer insulin i det hele tatt', isCorrect: false },
              { id: 'c', text: 'At cellene reagerer dårlig på insulin, slik at blodsukkeret forblir høyt', isCorrect: true },
              { id: 'd', text: 'At insulin bryter ned for mye sukker', isCorrect: false },
            ],
            solution:
              'Ved insulinresistens produserer kroppen insulin, men cellene reagerer ikke godt nok på det. Resultatet er at blodsukkeret forblir høyt. Insulinresistens er sentralt i utviklingen av type 2-diabetes.',
          },
          {
            id: 'nat-vg1-7-5-n-quiz2-q3',
            task: 'Hvorfor hemmer skjermbruk om kvelden søvnen?',
            options: [
              { id: 'a', text: 'Fordi skjermen bruker mye strøm', isCorrect: false },
              { id: 'b', text: 'Fordi blått lys fra skjermer hemmer produksjonen av søvnhormonet melatonin', isCorrect: true },
              { id: 'c', text: 'Fordi skjermer avgir varme som gjør det vanskeligere å sove', isCorrect: false },
              { id: 'd', text: 'Fordi skjermbruk øker insulinnivået', isCorrect: false },
            ],
            solution:
              'Blått lys fra skjermer hemmer produksjonen av melatonin, hormonet som gjør deg søvnig. Derfor anbefales det å redusere skjermbruk den siste timen før sengetid.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-7-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært at **livsstilssykdommer** som hjerte- og karsykdommer, type 2-diabetes, fedme og psykiske lidelser påvirkes sterkt av kosthold, fysisk aktivitet, søvn, stress, rusmidler, sosiale relasjoner og skjermtid.

**Fysisk aktivitet** styrker hjerte, lunger, muskler og skjelett, reduserer risikoen for livsstilssykdommer, og bedrer psykisk helse gjennom frigjøring av **endorfiner**. Ungdom anbefales minst 60 minutter moderat til høy intensitet daglig. Fysisk inaktivitet øker risikoen for de fleste livsstilssykdommer.

**Søvn** (8-10 timer for ungdom) er avgjørende for at hjernen skal bearbeide inntrykk og lagre minner, for immunforsvar, hormonbalanse og vekst. Søvnmangel svekker konsentrasjon, hukommelse og immunforsvar, og øker risikoen for fedme, diabetes og psykiske plager. Blått lys fra skjermer hemmer melatoninproduksjonen.

**Akutt stress** er kortvarig og naturlig -- det kan øke oppmerksomhet og ytelse gjennom «kamp eller flukt»-responsen (adrenalin og kortisol). **Kronisk stress** er langvarig og skadelig, og øker risikoen for hjertesykdom, depresjon og svekket immunforsvar. Gode stressmestringsstrategier inkluderer fysisk aktivitet, god søvn, sosial støtte, avslapningsteknikker og begrenset skjermtid. **Psykisk helse** påvirkes av sosiale relasjoner, mestring, søvn og fysisk aktivitet.

**Insulinresistens** -- der cellene reagerer dårlig på insulin -- er sentralt i type 2-diabetes, og forebygges gjennom sunn vekt, aktivitet, balansert kosthold og tilstrekkelig søvn.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.6 NARRATIV: Kildekritikk og helseinformasjon
// ============================================================================

export const CHAPTER_NAT_VG1_7_6_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-7-6-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '7.6',
  title: 'Kildekritikk og helseinformasjon',
  subtitle: 'Narrativ versjon',
  description:
    'Lær å avsløre helsesvindel og pseudovitenskap, og bli en kritisk forbruker av den endeløse strømmen av helsepåstander som bombarderer deg daglig.',
  estimatedMinutes: 40,
  competenceGoals: ['vurdere pålitelighet i informasjon fra ulike kilder'],
  linkedChapterId: 'nat-vg1-7-6',
  content: [
    {
      id: 'nat-vg1-7-6-n-intro',
      type: 'text',
      content: `## Kan du stole på det du leser?

Du scroller gjennom Instagram og ser en annonse: «Denne teen brenner fett mens du sover! Ned 10 kg på 2 uker -- vitenskapelig bevist!» Noen timer senere ser du en TikTok-video der noen hevder at et bestemt kosttilskudd kurerer alt fra forkjølelse til kreft. Og i morgenavisen leser du overskriften «Ny studie: Kaffe forårsaker kreft!»

Hva skal du tro? Hvordan vet du hva som er sant og hva som er tull?

Vi lever i en tid der vi bombarderes med helseinformasjon fra alle kanter. Sosiale medier, aviser, blogger, podcaster, venner og familie -- alle har en mening om hva som er sunt. Problemet er at mye av denne informasjonen er feil, overdrevet eller bevisst villedende.

Det er noen viktige ting du bør huske: **En studie beviser sjelden noe endelig** -- vitenskap handler om å bygge kunnskap over tid. **Korrelasjon er ikke det samme som kausalitet** -- bare fordi to ting skjer samtidig, betyr det ikke at det ene forårsaker det andre. **Anekdoter er ikke vitenskapelig bevis** -- at tante Guri ble frisk etter å drikke selleryjuice betyr ikke at selleryjuice er medisin. «Naturlig» betyr ikke automatisk «trygt» eller «effektivt». Og **ekstraordinære påstander krever ekstraordinære bevis**.

I dette kapittelet skal du lære verktøyene du trenger for å skille pålitelig helseinformasjon fra støy, svindel og pseudovitenskap.`,
    },
    {
      id: 'nat-vg1-7-6-n-section1',
      type: 'text',
      content: `## TONE-kriteriene -- ditt verktøy for kildevurdering

Hvordan vurderer du om en kilde er pålitelig? En enkel og effektiv metode er **TONE-kriteriene**. TONE er en forkortelse som hjelper deg å stille de riktige spørsmålene.

**T -- Troverdighet:** Hvem står bak informasjonen? Er det en anerkjent institusjon, en forsker med relevant kompetanse, eller en tilfeldig blogg drevet av noen uten faglig bakgrunn? En artikkel fra Folkehelseinstituttet har helt annen troverdighet enn et innlegg fra en influencer som selger kosttilskudd.

**O -- Objektivitet:** Er informasjonen balansert, eller prøver noen å selge deg noe? Finnes det interessekonflikter? Presenteres ulike synspunkter? En reklame for et slankeprodukt har en åpenbar kommersiell interesse og er langt fra objektiv.

**N -- Nøyaktighet:** Stemmer faktapåstandene med det andre anerkjente kilder sier? Er det henvist til konkret vitenskapelig forskning? Kan du finne originalstudien? Vage uttrykk som «forskning viser» uten konkret kilde er et varseltegn.

**E -- Egnethet:** Er kilden relevant for det du leter etter? Er informasjonen oppdatert? Medisinsk kunnskap utvikler seg, og en artikkel fra 2005 kan være utdatert.

I tillegg bør du alltid spørre: Når ble informasjonen publisert? Hvem finansierte forskningen? Og ikke minst: Er studien **fagfellevurdert** (peer reviewed)? Fagfellevurdering betyr at andre forskere med kompetanse på feltet har gått gjennom studien og vurdert om den holder vitenskapelig mål. Det er vitenskapens kvalitetskontroll.`,
    },
    {
      id: 'nat-vg1-7-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kildekritikk og TONE-kriteriene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-7-6-n-quiz1-q0',
            task: 'Hva står TONE for i TONE-kriteriene?',
            options: [
              { id: 'a', text: 'Tidsbruk, Omfang, Nøyaktighet, Effektivitet', isCorrect: false },
              { id: 'b', text: 'Troverdighet, Objektivitet, Nøyaktighet, Egnethet', isCorrect: true },
              { id: 'c', text: 'Tema, Objektivitet, Nyhet, Ekspertise', isCorrect: false },
              { id: 'd', text: 'Troverdighet, Originalitet, Nøytralitet, Evidens', isCorrect: false },
            ],
            solution:
              'TONE står for Troverdighet (hvem står bak?), Objektivitet (er det balansert?), Nøyaktighet (stemmer fakta?) og Egnethet (er det relevant og oppdatert?). Det er en enkel metode for å vurdere påliteligheten til en kilde.',
          },
          {
            id: 'nat-vg1-7-6-n-quiz1-q1',
            task: 'Hva betyr det at en studie er fagfellevurdert?',
            options: [
              { id: 'a', text: 'At den er skrevet av flere forskere sammen', isCorrect: false },
              { id: 'b', text: 'At den har blitt delt på sosiale medier', isCorrect: false },
              { id: 'c', text: 'At andre forskere med kompetanse har vurdert studien før publisering', isCorrect: true },
              { id: 'd', text: 'At den er godkjent av myndighetene', isCorrect: false },
            ],
            solution:
              'Fagfellevurdering (peer review) er vitenskapens kvalitetskontroll. Andre forskere med kompetanse på feltet går gjennom studien og vurderer om metoder, resultater og konklusjoner holder vitenskapelig mål, før den publiseres i et tidsskrift.',
          },
          {
            id: 'nat-vg1-7-6-n-quiz1-q2',
            task: 'Hva er forskjellen mellom korrelasjon og kausalitet?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell, begrepene betyr det samme', isCorrect: false },
              { id: 'b', text: 'Korrelasjon betyr at to ting skjer samtidig, kausalitet betyr at det ene forårsaker det andre', isCorrect: true },
              { id: 'c', text: 'Korrelasjon er sterkere bevis enn kausalitet', isCorrect: false },
              { id: 'd', text: 'Kausalitet betyr at noe er tilfeldig, korrelasjon betyr at det er planlagt', isCorrect: false },
            ],
            solution:
              'Korrelasjon betyr at to ting skjer samtidig eller følger hverandre. Kausalitet betyr at det ene faktisk forårsaker det andre. For eksempel: Iskremssalg og drukningsulykker korrelerer (begge øker om sommeren), men iskrem forårsaker selvsagt ikke drukning -- det er en tredje faktor (varmt vær) som forklarer begge.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-7-6-n-section2',
      type: 'text',
      content: `## Vitenskap vs. pseudovitenskap -- hvordan skille dem?

For å bli en kritisk forbruker av helseinformasjon må du forstå forskjellen mellom **vitenskap** og **pseudovitenskap**.

**Vitenskap** bygger på systematiske, etterprøvbare undersøkelser. Det betyr at andre forskere kan gjenta forsøkene og se om de får samme resultat. Vitenskapelige resultater publiseres i **fagfellevurderte tidsskrifter**, der andre eksperter gransker arbeidet. Vitenskap er åpen for kritikk og revisjon -- konklusjoner justeres når ny kunnskap tilsier det. Det er en styrke, ikke en svakhet.

**Pseudovitenskap** fremstår som vitenskap, men mangler vitenskapelig grunnlag. Pseudovitenskapelige påstander kan ofte ikke testes eller motbevises -- noe som er et rødt flagg. De refererer gjerne til «hemmelig kunnskap» eller «det legene ikke vil at du skal vite». Det er ofte koblet til salg av produkter eller behandlinger. Og tilhengerne ignorerer eller avviser all kritikk i stedet for å justere syn.

Eksempler på pseudovitenskap i helse inkluderer **homeopati** (ekstremt fortynnede «medisiner» der det aktive stoffet i praksis ikke er til stede), **krystallhealing**, mange udokumenterte kosttilskudd-påstander, og diverse «detox-kurer» uten vitenskapelig grunnlag. Disse kan virke harmløse, men kan bli farlige dersom folk velger pseudovitenskap i stedet for dokumentert medisinsk behandling.

La oss gå tilbake til Instagram-annonsen for slanketeen. «10 kg på 2 uker» er urealistisk og potensielt farlig -- trygt vekttap er 0,5-1 kg per uke. Det er et kommersielt formål -- noen prøver å selge deg et produkt. «Vitenskapelig bevist» uten konkret kilde er et klassisk varseltegn. Og løftet om en enkel løsning på et komplekst problem -- mirakelkur-retorikk -- bør alltid få alarmklokkene til å ringe.`,
    },
    {
      id: 'nat-vg1-7-6-n-section3',
      type: 'text',
      content: `## Hvor finner du pålitelig helseinformasjon?

Nå som du vet hva du skal være skeptisk til, la oss snakke om hvor du faktisk finner god informasjon.

**Offentlige myndigheter** som **Helsedirektoratet** (helsedirektoratet.no), **Folkehelseinstituttet** (fhi.no), **Helsenorge** (helsenorge.no) og **WHO -- Verdens helseorganisasjon** (who.int) er trygge havner for helseinformasjon. Disse baserer seg på den beste tilgjengelige forskningen og har ikke kommersielle interesser.

**Fagfellevurderte tidsskrifter** representerer toppen av forskningskvaliteten. PubMed er en stor database for medisinsk forskning. Tidsskrifter som The Lancet, JAMA, BMJ og New England Journal of Medicine publiserer forskning som har gjennomgått streng kvalitetskontroll.

**Interesseorganisasjoner** som Kreftforeningen, Diabetesforbundet og Landsforeningen for hjerte- og lungesyke gir også god informasjon basert på forskning.

Til slutt, her er en sjekkliste med **varseltegn for useriøse kilder**: Påstander om «mirakelkurer». Angrep på etablert medisin og forskning («det legene skjuler for deg»). Salg av produkter koblet til helsepåstander. Manglende kildehenvisninger. Bruk av enkeltstående pasienthistorier som «bevis».

Neste gang du møter en helsepåstand -- enten det er på Instagram, i avisen eller fra en venn -- stopp opp og tenk. Bruk TONE-kriteriene. Spør deg selv hvem som tjener på at du tror dette. Sjekk hva anerkjente kilder sier. Å være kritisk betyr ikke å være kynisk -- det betyr å respektere deg selv nok til å kreve gode bevis før du endrer livsstilen din basert på en overskrift.`,
    },
    {
      id: 'nat-vg1-7-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på vitenskap, pseudovitenskap og pålitelige kilder:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-7-6-n-quiz2-q0',
            task: 'Hva kjennetegner pseudovitenskap?',
            options: [
              { id: 'a', text: 'Den er publisert i fagfellevurderte tidsskrifter', isCorrect: false },
              { id: 'b', text: 'Påstandene kan lett testes og gjentas av andre forskere', isCorrect: false },
              { id: 'c', text: 'Den fremstår som vitenskap, men mangler vitenskapelig grunnlag og kan ofte ikke testes', isCorrect: true },
              { id: 'd', text: 'Den er alltid finansiert av staten', isCorrect: false },
            ],
            solution:
              'Pseudovitenskap fremstår som vitenskap, men mangler vitenskapelig grunnlag. Typiske kjennetegn er at påstandene ikke kan testes eller motbevises, det refereres til hemmelig kunnskap, det er ofte koblet til produktsalg, og kritikk avvises.',
          },
          {
            id: 'nat-vg1-7-6-n-quiz2-q1',
            task: 'Hvilken av disse er en pålitelig kilde for helseinformasjon?',
            options: [
              { id: 'a', text: 'En Instagram-influencer som selger kosttilskudd', isCorrect: false },
              { id: 'b', text: 'En anonym blogg om alternativ medisin', isCorrect: false },
              { id: 'c', text: 'Folkehelseinstituttet (fhi.no)', isCorrect: true },
              { id: 'd', text: 'En YouTube-video med mange likerklikk', isCorrect: false },
            ],
            solution:
              'Folkehelseinstituttet (fhi.no) er en offentlig myndighet som baserer seg på den beste tilgjengelige forskningen. Andre pålitelige kilder inkluderer Helsedirektoratet, Helsenorge og WHO.',
          },
          {
            id: 'nat-vg1-7-6-n-quiz2-q2',
            task: 'Hvorfor er det et varseltegn når noen hevder å ha en «mirakelkur»?',
            options: [
              { id: 'a', text: 'Fordi mirakler aldri skjer i medisin', isCorrect: false },
              { id: 'b', text: 'Fordi ekte medisinsk fremgang skjer gradvis gjennom forskning, ikke gjennom enkle løsninger', isCorrect: true },
              { id: 'c', text: 'Fordi alle mirakelkurer er ulovlige', isCorrect: false },
              { id: 'd', text: 'Fordi bare leger har lov til å bruke ordet mirakel', isCorrect: false },
            ],
            solution:
              'Påstander om mirakelkurer er et klassisk varseltegn fordi helse og sykdom er komplekse. Ekte medisinsk fremgang bygger på langvarig, systematisk forskning. Enkle løsninger på komplekse problemer er nesten alltid for gode til å være sanne.',
          },
          {
            id: 'nat-vg1-7-6-n-quiz2-q3',
            task: 'Hva er et eksempel på pseudovitenskap innen helse?',
            options: [
              { id: 'a', text: 'Vaksinasjon mot smittsomme sykdommer', isCorrect: false },
              { id: 'b', text: 'Homeopati med ekstremt fortynnede medisiner', isCorrect: true },
              { id: 'c', text: 'Antibiotika mot bakterielle infeksjoner', isCorrect: false },
              { id: 'd', text: 'Insulinbehandling for diabetes', isCorrect: false },
            ],
            solution:
              'Homeopati er et eksempel på pseudovitenskap. Det baserer seg på ekstremt fortynnede løsninger der det aktive stoffet i praksis ikke er til stede. Det mangler vitenskapelig grunnlag og har ikke vist effekt utover placebo i grundige studier.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-7-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært at **kildekritikk** er avgjørende for å skille pålitelig helseinformasjon fra feilinformasjon, reklame og pseudovitenskap. Vi møter daglig påstander om helse i sosiale medier, aviser og fra folk rundt oss, og mye av det er upålitelig.

**TONE-kriteriene** er et nyttig verktøy for kildevurdering: **T**roverdighet (hvem står bak?), **O**bjektivitet (er det balansert, selges det noe?), **N**øyaktighet (stemmer fakta med andre kilder?) og **E**gnethet (er det relevant og oppdatert?). I tillegg bør du alltid sjekke om forskning er **fagfellevurdert** (peer reviewed) -- vitenskapens kvalitetskontroll.

**Korrelasjon** betyr at to ting skjer samtidig, men det betyr ikke at det ene forårsaker det andre (**kausalitet**). Anekdoter er ikke vitenskapelig bevis.

**Vitenskap** bygger på systematiske, etterprøvbare undersøkelser, publiseres i fagfellevurderte tidsskrifter og er åpen for revisjon. **Pseudovitenskap** fremstår som vitenskap, men kan ikke testes, refererer til hemmelig kunnskap, er ofte koblet til produktsalg, og avviser kritikk. Eksempler inkluderer homeopati, krystallhealing og udokumenterte detox-kurer.

**Pålitelige helsekilder** inkluderer Helsedirektoratet, Folkehelseinstituttet (FHI), Helsenorge, WHO og fagfellevurderte tidsskrifter. Varseltegn for useriøse kilder er mirakelkur-påstander, angrep på etablert medisin, produktsalg koblet til helsepåstander, manglende kildehenvisninger og enkeltstående pasienthistorier brukt som «bevis».`,
    },
  ],
  exercises: [],
};

export const NAT_VG1_NARRATIV_DEL5A_CHAPTERS = [
  CHAPTER_NAT_VG1_7_1_NARRATIV,
  CHAPTER_NAT_VG1_7_2_NARRATIV,
  CHAPTER_NAT_VG1_7_3_NARRATIV,
  CHAPTER_NAT_VG1_7_4_NARRATIV,
  CHAPTER_NAT_VG1_7_5_NARRATIV,
  CHAPTER_NAT_VG1_7_6_NARRATIV,
];
