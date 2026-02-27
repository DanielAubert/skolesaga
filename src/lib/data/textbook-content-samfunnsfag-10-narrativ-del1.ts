/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - NARRATIV VERSJON DEL 1
 * Kapittel 1-4: Demokrati, Menneskerettigheter, Baerekraft, Globalisering
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-spoersmaal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1 NARRATIV: Demokrati og medborgerskap
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_1_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-1-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '1',
  title: 'Demokrati og medborgerskap',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan folkestyret fungerer i praksis -- fra maktfordelingsprinsippet til din egen rolle som medborger i det norske demokratiet.',
  estimatedMinutes: 35,
  competenceGoals: [
    'reflektere over hva det innebærer å være medborger, og ulike former for demokratisk deltakelse',
    'utforske og beskrive korleis ulike politiske system er organiserte',
    'drøfte korleis makt og maktmisbruk kjem til uttrykk i ulike samanhengar',
  ],
  linkedChapterId: 'samfunnsfag-10-1',
  content: [
    {
      id: 'samfunnsfag-10-1-n-intro',
      type: 'text',
      content: `## Forestill deg en verden uten demokrati

Tenk deg at du vaakner i morgen og finner ut at alle avgjoerelser i landet -- fra hva du faar lov til aa si, til hva du skal laere paa skolen -- tas av en liten gruppe mennesker du aldri har moett. Du kan ikke klage. Du kan ikke stemme. Du kan ikke engang skrive om det i sosiale medier uten aa risikere straff.

Hoeres det ut som en dystopisk film? For milliarder av mennesker er dette virkeligheten. Men i Norge lever vi i et **demokrati**, en styreform der folket har den oeverste makten. Ordet kommer fra gresk: *demos* betyr folk, og *kratos* betyr styre. Folkestyre, altsaa. Det hoeres enkelt ut, men bak dette lille ordet skjuler det seg et av menneskehetens mest ambisioese prosjekter -- ideen om at vanlige mennesker skal bestemme over sin egen framtid.

Demokrati er ikke noe som bare "er der". Det er et system mennesker har kjempet for gjennom hundrevis av aar. I Norge fikk vi vaar grunnlov i 1814, men det tok lang tid foer alle faktisk fikk stemmerett. Kvinner maatte vente til 1913. Og selv i dag maa demokratiet forsvares, fordi det finnes krefter som oensker aa svekke det -- baade utenfra og innenfra.`,
    },
    {
      id: 'samfunnsfag-10-1-n-section1',
      type: 'text',
      content: `## Makten maa deles -- ellers gaar det galt

Et av de viktigste prinsippene i et demokrati er **maktfordelingsprinsippet**. Tanken er enkel, men genial: ingen enkeltperson eller gruppe skal ha all makt. I Norge er makten delt mellom tre uavhengige grener.

**Stortinget** er den lovgivende makten. Det er her de 169 folkevalgte representantene vedtar lover, bestemmer statsbudsjettet og kontrollerer regjeringen. Naar du stemmer ved stortingsvalg, velger du hvem som skal sitte her og representere deg.

**Regjeringen** er den utovende makten. Den setter lovene ut i praksis, styrer departementene og tar daglige avgjoerelser om hvordan landet skal drives. Statsministeren leder regjeringen, men kan aldri handle helt paa egen haand.

**Domstolene** er den doemmende makten. De tolker lovene og avgjoer om noen har brutt dem. En dommer kan til og med sette til side en lov fra Stortinget dersom den strider mot Grunnloven. Det er en veldig viktig sikkerhetsventil.

Hvorfor er denne tredelingen saa viktig? Fordi makt har en tendens til aa korrumpere. Naar makten er spredt, kan de tre grenene holde hverandre i sjakk. Regjeringen kan ikke bare gjore hva den vil -- Stortinget overvaaker den. Og domstolene passer paa at ingen bryter de grunnleggende spillereglene.

Men demokrati handler om mer enn bare institusjoner. Det handler ogsaa om **deltakelse**. I et **direkte demokrati** stemmer innbyggerne direkte paa alle saker, slik de gjorde i det gamle Athen. I et **representativt demokrati**, som vi har i Norge, velger vi representanter som tar avgjoerelsene paa vegne av oss. Vi stemmer ved stortingsvalg hvert fjerde aar, og ved kommunevalg hvert fjerde aar.`,
    },
    {
      id: 'samfunnsfag-10-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa maktfordeling og demokrati:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-1-n-quiz1-q0',
            task: 'Hvilken statsmakt vedtar lovene i Norge?',
            options: [
              { id: 'a', text: 'Regjeringen', isCorrect: false },
              { id: 'b', text: 'Stortinget', isCorrect: true },
              { id: 'c', text: 'Domstolene', isCorrect: false },
              { id: 'd', text: 'Kongen', isCorrect: false },
            ],
            solution: 'Stortinget er den lovgivende makten i Norge. De 169 folkevalgte representantene vedtar lover og bestemmer statsbudsjettet.',
          },
          {
            id: 'samfunnsfag-10-1-n-quiz1-q1',
            task: 'Hva er hovedformaalet med maktfordelingsprinsippet?',
            options: [
              { id: 'a', text: 'At Stortinget faar mest makt', isCorrect: false },
              { id: 'b', text: 'At politikerne kan jobbe raskere', isCorrect: false },
              { id: 'c', text: 'At ingen faar for mye makt alene', isCorrect: true },
              { id: 'd', text: 'At domstolene bestemmer alt', isCorrect: false },
            ],
            solution: 'Maktfordelingsprinsippet handler om at makten skal vaere spredt mellom lovgivende, utovende og doemmende makt, slik at ingen faar for mye makt og kan misbruke den.',
          },
          {
            id: 'samfunnsfag-10-1-n-quiz1-q2',
            task: 'Hva slags demokrati har Norge?',
            options: [
              { id: 'a', text: 'Direkte demokrati', isCorrect: false },
              { id: 'b', text: 'Representativt demokrati', isCorrect: true },
              { id: 'c', text: 'Enpartistyre', isCorrect: false },
              { id: 'd', text: 'Konstitusjonelt monarki uten folkestyre', isCorrect: false },
            ],
            solution: 'Norge har et representativt demokrati der vi velger representanter til Stortinget og kommunestyrer som tar avgjoerelser paa vegne av oss.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-1-n-section2',
      type: 'text',
      content: `## Din rolle som medborger

Kanskje tenker du: "Jeg er bare 15 aar, jeg kan ikke stemme engang." Men demokratisk deltakelse handler om saa mye mer enn aa putte en stemmeseddel i en urne.

Aa vaere **medborger** betyr at du er en aktiv del av samfunnet -- at du tar ansvar, engasjerer deg og bidrar. Du kan engasjere deg i elevraad paa skolen, delta i debatter, skrive leserinnlegg i lokalavisen, eller vaere med i en organisasjon som jobber for noe du brenner for. Du kan demonstrere for klimaet, samle inn penger til en god sak, eller rett og slett snakke med foreldrene dine om politikk ved middagsbordet.

Demokratiet trenger aktive medborgere for aa fungere. Naar faerre og faerre stemmer ved valg, naar folk slutter aa bry seg, eller naar misinformasjon sprer seg ukritisk -- da svekkes demokratiet. Hvert valg, hver debatt og hvert engasjement du viser, er med paa aa holde folkestyret levende.

Det er ogsaa viktig aa forstaa at demokrati ikke bare handler om flertallets vilje. Et godt demokrati har ogsaa **mindretallsvern** -- det betyr at selv om flertallet bestemmer, kan ikke flertallets avgjoerelser trampe paa rettighetene til mindretallet. Ytringsfriheten, religionsfriheten og retten til aa vaere annerledes er beskyttet, uansett hva flertallet mener. Dette skiller et ekte demokrati fra det vi kaller **flertallstyranni**.

Saa neste gang noen sier at "det nytter ikke aa engasjere seg", husk dette: demokratiet er ikke sterkere enn deltakelsen til innbyggerne. Det er du og jeg som holder det i live.`,
    },
    {
      id: 'samfunnsfag-10-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa medborgerskap og deltakelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-1-n-quiz2-q0',
            task: 'Hva betyr det aa vaere medborger?',
            options: [
              { id: 'a', text: 'At du har norsk statsborgerskap', isCorrect: false },
              { id: 'b', text: 'At du er en aktiv og ansvarlig del av samfunnet', isCorrect: true },
              { id: 'c', text: 'At du stemmer ved alle valg', isCorrect: false },
              { id: 'd', text: 'At du foelger alle lover uten aa stille spoersmaal', isCorrect: false },
            ],
            solution: 'Medborgerskap handler om aa vaere en aktiv og ansvarlig del av samfunnet -- gjennom engasjement, deltakelse og aa ta ansvar for fellesskapet.',
          },
          {
            id: 'samfunnsfag-10-1-n-quiz2-q1',
            task: 'Hva menes med mindretallsvern i et demokrati?',
            options: [
              { id: 'a', text: 'At mindretallet aldri faar viljen sin', isCorrect: false },
              { id: 'b', text: 'At flertallet beskytter seg mot mindretallet', isCorrect: false },
              { id: 'c', text: 'At mindretallets rettigheter er beskyttet mot flertallets avgjoerelser', isCorrect: true },
              { id: 'd', text: 'At mindretallet bestemmer over flertallet', isCorrect: false },
            ],
            solution: 'Mindretallsvern betyr at flertallet ikke kan stemme bort grunnleggende rettigheter til mindretallet. Ytringsfrihet, religionsfrihet og andre menneskerettigheter gjelder for alle.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett at **demokrati** betyr folkestyre -- en styreform der folket har den oeverste makten. Makten i Norge er delt mellom tre greiner gjennom **maktfordelingsprinsippet**: Stortinget (lovgivende), regjeringen (utovende) og domstolene (doemmende). Denne tredelingen hindrer maktmisbruk.

Norge har et **representativt demokrati** der vi velger representanter til aa ta avgjoerelser paa vegne av oss. Demokrati krever aktive medborgere -- og du trenger ikke vaere gammel nok til aa stemme for aa gjore en forskjell. Elevraad, debatter, demonstrasjoner og engasjement i organisasjoner er alle former for demokratisk deltakelse. Et godt demokrati har ogsaa **mindretallsvern**, slik at flertallets avgjoerelser ikke tramper paa grunnleggende rettigheter.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2 NARRATIV: Menneskerettigheter
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_2_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-2-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '2',
  title: 'Menneskerettigheter',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvordan verden ble enig om at alle mennesker har rettigheter -- fra FNs erklaering til barnekonvensjonen og utfordringene vi staar overfor i dag.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive hvordan menneske- og urfolksrettigheter er nedfelt i nasjonale og internasjonale lover',
    'reflektere over korleis identitet, sjølvbilde og eigne grenser blir utvikla og utfordra',
    'drøfte korleis makt og maktmisbruk kjem til uttrykk i ulike samanhengar',
  ],
  linkedChapterId: 'samfunnsfag-10-2',
  content: [
    {
      id: 'samfunnsfag-10-2-n-intro',
      type: 'text',
      content: `## Da verden sa "aldri mer"

Aaret er 1945. Andre verdenskrig er akkurat over. Mellom 70 og 85 millioner mennesker er doede. Konsentrasjonsleirene er aapnet, og verden staar ansikt til ansikt med det mest systematiske folkemordet i historien. I dette oeyeblikket av sjokk og sorg samles verdens ledere og sier tre ord som skal forandre alt: **aldri mer**.

Resultatet ble **De forente nasjoner (FN)**, grunnlagt i 1945 med ett overordnet maal: aa forhindre krig og beskytte menneskers grunnleggende rettigheter. Tre aar senere, den 10. desember 1948, vedtok FNs generalsforsamling **Verdenserklaeringen om menneskerettigheter**. For foerste gang i historien ble verdens nasjoner enige om at alle mennesker -- uansett hudfarge, kjoenn, religion eller nasjonalitet -- har visse rettigheter som aldri kan tas fra dem.

Artikkel 1 slaar tonen an: "Alle mennesker er foedt frie og med samme menneskeverd og menneskerettigheter." Det hoeres kanskje selvfoelgelig ut i dag, men i 1948 var dette revolusjonaert. Mange land hadde fortsatt kolonier, kvinner hadde begrensede rettigheter, og raseskillepolitikk var lovlig i flere land.

**Menneskerettigheter** er altsaa de grunnleggende rettighetene som tilhoerer alle mennesker bare fordi de er mennesker. De er universelle (gjelder for alle), udelelige (henger sammen) og umistelige (kan ikke tas fra deg).`,
    },
    {
      id: 'samfunnsfag-10-2-n-section1',
      type: 'text',
      content: `## Fra fine ord til bindende regler

Verdenserklaeringen var en storartet start, men den hadde ett problem: den var ikke juridisk bindende. Den var en erklaering, ikke en lov. Derfor ble rettighetene etter hvert skrevet inn i **konvensjoner** -- internasjonale avtaler som landene forplikter seg til aa foelge.

De to viktigste konvensjonene er FNs konvensjon om sivile og politiske rettigheter, og FNs konvensjon om oekonomiske, sosiale og kulturelle rettigheter. Sivile og politiske rettigheter handler om ting som ytringsfrihet, stemmerett, religionsfrihet og vern mot tortur. Oekonomiske, sosiale og kulturelle rettigheter handler om ting som retten til utdanning, helse, arbeid og en tilstrekkelig levestandard.

En konvensjon som er saerlig viktig for deg, er **FNs barnekonvensjon** fra 1989. Den slaar fast at barn og unge har egne rettigheter. Blant de viktigste er retten til utdanning, retten til aa si sin mening og bli hoert, retten til beskyttelse mot vold og overgrep, og retten til lek og fritid. Barnekonvensjonen understreker ogsaa prinsippet om **barnets beste** -- at naar voksne tar avgjoerelser som angaar barn, skal barnets beste alltid vaere et grunnleggende hensyn.

I Norge er menneskerettighetene ikke bare noe vi har signert paa internasjonalt. De er ogsaa skrevet inn i Grunnloven, og **menneskerettsloven** gjor at de viktigste konvensjonene gjelder som norsk lov. Det betyr at norske domstoler maa foelge menneskerettighetene, og at staten kan bli doemt dersom den bryter dem.`,
    },
    {
      id: 'samfunnsfag-10-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa menneskerettigheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-2-n-quiz1-q0',
            task: 'Naar ble Verdenserklaeringen om menneskerettigheter vedtatt?',
            options: [
              { id: 'a', text: '1918', isCorrect: false },
              { id: 'b', text: '1945', isCorrect: false },
              { id: 'c', text: '1948', isCorrect: true },
              { id: 'd', text: '1989', isCorrect: false },
            ],
            solution: 'Verdenserklaeringen om menneskerettigheter ble vedtatt av FNs generalforsamling 10. desember 1948, tre aar etter opprettelsen av FN.',
          },
          {
            id: 'samfunnsfag-10-2-n-quiz1-q1',
            task: 'Hva betyr det at menneskerettigheter er "universelle"?',
            options: [
              { id: 'a', text: 'At de gjelder bare i vestlige land', isCorrect: false },
              { id: 'b', text: 'At de gjelder for alle mennesker uansett', isCorrect: true },
              { id: 'c', text: 'At de bestemmes av FN alene', isCorrect: false },
              { id: 'd', text: 'At de kan endres av hvert enkelt land', isCorrect: false },
            ],
            solution: 'At menneskerettighetene er universelle betyr at de gjelder for alle mennesker, uansett hudfarge, kjoenn, religion, nasjonalitet eller andre kjennetegn.',
          },
          {
            id: 'samfunnsfag-10-2-n-quiz1-q2',
            task: 'Hva er prinsippet om "barnets beste" i barnekonvensjonen?',
            options: [
              { id: 'a', text: 'At barn alltid faar det de oensker seg', isCorrect: false },
              { id: 'b', text: 'At barns behov alltid gaar foran foreldrenes', isCorrect: false },
              { id: 'c', text: 'At barnets beste skal vaere et grunnleggende hensyn i avgjoerelser som angaar barn', isCorrect: true },
              { id: 'd', text: 'At barn ikke trenger aa foelge regler', isCorrect: false },
            ],
            solution: 'Prinsippet om barnets beste betyr at naar voksne tar avgjoerelser som angaar barn, skal hensynet til barnet vaere grunnleggende -- ikke at barn alltid faar viljen sin, men at deres behov vurderes noee.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-2-n-section2',
      type: 'text',
      content: `## Naar rettighetene brytes

Det er lett aa snakke om menneskerettigheter i Norge, der de fleste rettighetene er godt ivaretatt. Men for millioner av mennesker verden over er situasjonen en helt annen.

I mange land brytes menneskerettighetene systematisk. Journalister faar ikke skrive fritt. Opposisjonspolitikere fengsles. Minoriteter forfoeelges. Kvinner nektes utdanning. Barn tvinges til aa jobbe eller sloss som barnesoldater. Tortur brukes som verktoy av myndigheter.

Menneskerettighetsbrudd skjer ogsaa i Norge, selv om det er i mye mindre skala. Norge har blitt doemt av **Den europeiske menneskerettighetsdomstolen (EMD)** for brudd paa rettigheter -- for eksempel i saker om barnevern der foreldre mener de ikke har faatt nok kontakt med barna sine. Det viser at ingen land er perfekte, og at menneskerettighetene er et stadig paaganende prosjekt.

Et viktig spoersmaal er hva verden kan gjore naar rettigheter brytes. FN kan iverksette sanksjoner, sende observatoerer og i sjeldne tilfeller autorisere militaer inngripen. Den internasjonale straffedomstolen (ICC) kan doeme enkeltpersoner for krigsforbrytelser og forbrytelser mot menneskeheten. Men FN har ogsaa klare begrensninger -- stormaktene i Sikkerhetsraadet kan legge ned **veto** og blokkere tiltak, noe som har forhindret handling i mange konflikter.

Likevel: menneskerettighetene har forandret verden. De har gitt undertrykte mennesker et spraak for urettferdighet, og de har skapt standarder som stater maa forholde seg til. Kampen for menneskerettigheter er ikke over -- den er noe hver generasjon maa viderefoere.`,
    },
    {
      id: 'samfunnsfag-10-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa menneskerettighetsbrudd og haandheving:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-2-n-quiz2-q0',
            task: 'Hva er Den europeiske menneskerettighetsdomstolen (EMD)?',
            options: [
              { id: 'a', text: 'En domstol som doemer krigsforbrytere', isCorrect: false },
              { id: 'b', text: 'En domstol som overvaaker menneskerettighetene i Europa', isCorrect: true },
              { id: 'c', text: 'FNs oeverste organ', isCorrect: false },
              { id: 'd', text: 'Norges hoeyesterett', isCorrect: false },
            ],
            solution: 'EMD er en europeisk domstol som behandler klager fra enkeltpersoner som mener at staten har brutt menneskerettighetene deres. Ogsaa Norge har blitt doemt her.',
          },
          {
            id: 'samfunnsfag-10-2-n-quiz2-q1',
            task: 'Hva betyr det at en stormakt legger ned veto i FNs sikkerhetsraad?',
            options: [
              { id: 'a', text: 'At stormakten stoetter forslaget', isCorrect: false },
              { id: 'b', text: 'At stormakten blokkerer forslaget', isCorrect: true },
              { id: 'c', text: 'At stormakten melder seg ut av FN', isCorrect: false },
              { id: 'd', text: 'At forslaget sendes tilbake til generalforsamlingen', isCorrect: false },
            ],
            solution: 'Et veto betyr at en av de fem faste medlemmene i Sikkerhetsraadet (USA, Russland, Kina, Frankrike, Storbritannia) blokkerer et vedtak. Selv om alle andre er enige, stopper vetoretten forslaget.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Etter andre verdenskrig ble **FN** grunnlagt for aa forhindre nye kriger, og i 1948 vedtok generalforsamlingen **Verdenserklaeringen om menneskerettigheter**. Menneskerettigheter er universelle, udelelige og umistelige rettigheter som tilhoerer alle mennesker. De er nedfelt i bindende **konvensjoner**, blant annet **FNs barnekonvensjon** som gir barn og unge saerlige rettigheter og slaar fast prinsippet om **barnets beste**.

I Norge er menneskerettighetene skrevet inn i Grunnloven og gjelder som norsk lov. Menneskerettighetsbrudd skjer likevel over hele verden, og ogsaa Norge har blitt doemt for brudd. FN og internasjonale domstoler kan reagere mot brudd, men har begrensninger -- som vetoretten i Sikkerhetsraadet. Kampen for menneskerettigheter er et paaganende prosjekt som krever engasjement fra hver generasjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3 NARRATIV: Baerekraftig utvikling
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_3_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-3-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '3',
  title: 'Bærekraftig utvikling',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvorfor vi maa tenke nytt om forbruk og ressurser -- fra FNs baerekraftsmaal til din egen smarttelefon og interessekonfliktene som oppstaar naar oekologi moeter oekonomi.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og presentere dagsaktuelle tema eller historiske hendingar med utgangspunkt i interessekonfliktar og maktforhold',
    'utforske korleis teknologi har endra og endrar samfunnet, og drøfte ulike syn på teknologiutvikling',
    'beskrive ulike dimensjonar ved berekraftig utvikling og korleis dei påverkar kvarandre',
  ],
  linkedChapterId: 'samfunnsfag-10-3',
  content: [
    {
      id: 'samfunnsfag-10-3-n-intro',
      type: 'text',
      content: `## Planeten vaar har en grense

Tenk paa smarttelefonen din. Den lille dingsen i lommen inneholder metaller fra gruver i Kongo, komponenter fra fabrikker i Kina, er designet i California og fraktet til Norge med skip og lastebil. For aa lage den trengte man energi, vann og raavarer -- og underveis ble det sluppet ut klimagasser, kjemikalier og avfall. Naar du er lei av den om to aar, havner den kanskje i en skuff, i soeppelet, eller paa en soeppelfylling i Ghana.

Denne historien forteller oss noe viktig: maten vi spiser, klaerne vi bruker og teknologien vi elsker -- alt har en pris for planeten. Og den prisen har vi laenge latt vaere aa betale. I stedet har vi skjoevet regningen videre til framtidige generasjoner og til fattigere deler av verden.

**Baerekraftig utvikling** er svaret paa dette problemet. Begrepet ble kjent gjennom FN-rapporten "Vaar felles framtid" i 1987, ogsaa kalt Brundtland-rapporten etter den norske statsministeren Gro Harlem Brundtland som ledet arbeidet. Definisjonen er blitt et av de mest siterte utsagnene i moderne politikk: baerekraftig utvikling er utvikling som tilfredsstiller dagens behov uten aa oedelegge mulighetene for at kommende generasjoner skal faa tilfredsstilt sine behov.`,
    },
    {
      id: 'samfunnsfag-10-3-n-section1',
      type: 'text',
      content: `## Tre bein aa staa paa

Baerekraftig utvikling hviler paa tre dimensjoner, ofte kalt de tre soylene: miljoeet, oekonomien og samfunnet. Ingen av dem kan ofres for de andres skyld.

Den **miljoemessige dimensjonen** handler om aa ta vare paa naturen og klimaet. Klimaendringer, tap av biologisk mangfold, forurensning og overforbruk av ressurser er de stoerste truslene. Vi slipper ut mer klimagasser enn naturen taoler, vi hogger skog raskere enn den vokser tilbake, og vi fanger fisk raskere enn bestandene klarer aa reprodusere seg.

Den **oekonomiske dimensjonen** handler om aa skape verdier paa maater som ikke oedelegger miljoeet. Det betyr blant annet at vi maa gaa fra fossile energikilder til fornybar energi, utvikle sirkulaeroekonomi der ressurser gjenbrukes i stedet for aa kastes, og sikre rettferdig handel som gir ogsaa fattige land muligheter.

Den **sosiale dimensjonen** handler om mennesker: at alle skal ha tilgang til utdanning, helse, mat og trygge levekaar. Baerekraft uten rettferdighet er ikke baerekraft. Hvis bare de rike landene faar det bedre mens de fattige sakker akterut, har vi ikke loest problemet.

I 2015 vedtok FN **17 baerekraftsmaal** som skal naas innen 2030. De spenner fra aa utrydde fattigdom og sult, til aa sikre ren energi, anstendig arbeid, god helse og ansvarlig forbruk. Baerekraftsmaalene er universelle -- de gjelder for alle land, ogsaa rike land som Norge.`,
    },
    {
      id: 'samfunnsfag-10-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa baerekraftig utvikling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-3-n-quiz1-q0',
            task: 'Hva er definisjonen paa baerekraftig utvikling?',
            options: [
              { id: 'a', text: 'Utvikling som gir mest mulig oekonomisk vekst', isCorrect: false },
              { id: 'b', text: 'Utvikling som kun tar hensyn til miljoeet', isCorrect: false },
              { id: 'c', text: 'Utvikling som dekker dagens behov uten aa oedelegge for framtidige generasjoner', isCorrect: true },
              { id: 'd', text: 'Utvikling som stopper all bruk av fossile ressurser umiddelbart', isCorrect: false },
            ],
            solution: 'Baerekraftig utvikling ble definert i Brundtland-rapporten (1987) som utvikling som tilfredsstiller dagens behov uten aa oedelegge mulighetene for framtidige generasjoner.',
          },
          {
            id: 'samfunnsfag-10-3-n-quiz1-q1',
            task: 'Hvor mange baerekraftsmaal vedtok FN i 2015?',
            options: [
              { id: 'a', text: '10', isCorrect: false },
              { id: 'b', text: '15', isCorrect: false },
              { id: 'c', text: '17', isCorrect: true },
              { id: 'd', text: '20', isCorrect: false },
            ],
            solution: 'FN vedtok 17 baerekraftsmaal i 2015, med frist i 2030. De dekker alt fra fattigdom og helse til klima og rettferdighet.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-3-n-section2',
      type: 'text',
      content: `## Interessekonflikter og vanskelige valg

Baerekraftig utvikling hoeres fint ut paa papiret, men i praksis er det fullt av konflikter. Ta vindkraft i Norge som eksempel. Paa den ene siden trenger vi fornybar energi for aa erstatte olje og gass. Paa den andre siden betyr vindmoeller inngrep i naturen, stoey for naboer, og ofte konflikt med samisk reindrift og friluftsinteresser. Hvem skal bestemme? Og hvem maa betale prisen?

Slike **interessekonflikter** er kjernen i baerekraftspolitikken. Arbeidere i oljeindustrien oensker aa beholde jobbene sine. Miljoeorganisasjoner vil stoppe oljeboring. Utviklingsland krever rett til oekonomisk vekst, mens rike land mener utslippene maa kuttes raskt. Det finnes sjelden loesninger som gjor alle fornoyde.

Fornybare ressurser som vind, sol, vann og skog kan i teorien brukes igjen og igjen -- men bare hvis vi forvalter dem riktig. Ikke-fornybare ressurser som olje, kull og metaller vil til slutt ta slutt. Norge har bygget sin velstand paa olje og gass, og maaten vi forvalter overgangen til et groenere samfunn paa, er en av vaar tids stoerste utfordringer.

Ogsaa du som forbruker staar overfor valg. Fast fashion -- billige klaer som byttes ut etter noen uker -- er en av verdens mest forurensende industrier. Kjottforbruk bidraoer til store klimagassutslipp. Flyreiser oeversjoeer etterlater enorme karbonfotavtrykk. Baerekraft handler ogsaa om at vi som individer reflekterer over egne valg -- uten at vi glemmer at de stoerste endringene maa komme fra politikk og naeringslivet.`,
    },
    {
      id: 'samfunnsfag-10-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa ressurser og interessekonflikter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-3-n-quiz2-q0',
            task: 'Hva er en interessekonflikt i sammenheng med baerekraft?',
            options: [
              { id: 'a', text: 'Naar to land er i krig om ressurser', isCorrect: false },
              { id: 'b', text: 'Naar ulike grupper har motstridende oensker for hvordan ressurser skal brukes', isCorrect: true },
              { id: 'c', text: 'Naar naturen er i konflikt med seg selv', isCorrect: false },
              { id: 'd', text: 'Naar politikere er uenige om utenrikspolitikk', isCorrect: false },
            ],
            solution: 'En interessekonflikt oppstaar naar ulike grupper eller parter har motstridende oensker -- for eksempel naar oljeindustrien vil bore og miljoeorganisasjoner vil bevare naturen.',
          },
          {
            id: 'samfunnsfag-10-3-n-quiz2-q1',
            task: 'Hvilken av disse er en fornybar ressurs?',
            options: [
              { id: 'a', text: 'Olje', isCorrect: false },
              { id: 'b', text: 'Kull', isCorrect: false },
              { id: 'c', text: 'Vindkraft', isCorrect: true },
              { id: 'd', text: 'Naturgass', isCorrect: false },
            ],
            solution: 'Vindkraft er en fornybar ressurs fordi vinden ikke tar slutt. Olje, kull og naturgass er ikke-fornybare fordi de tar millioner av aar aa dannes.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Baerekraftig utvikling** handler om aa dekke dagens behov uten aa oedelegge for fremtidige generasjoner. Begrepet ble kjent gjennom **Brundtland-rapporten** i 1987. Baerekraft hviler paa tre dimensjoner: miljoeet, oekonomien og samfunnet. FN vedtok i 2015 **17 baerekraftsmaal** som skal naas innen 2030.

I praksis forer baerekraftspolitikk til **interessekonflikter** -- for eksempel mellom oljeindustri og miljoe, eller mellom vindkraft og naturvern. Vi skiller mellom **fornybare** ressurser (som vind og sol) og **ikke-fornybare** ressurser (som olje og kull). Baerekraft krever innsats baade fra politikk, naeringslivet og enkeltpersoner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4 NARRATIV: Globalisering
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_4_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-4-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '4',
  title: 'Globalisering',
  subtitle: 'Narrativ versjon',
  description: 'Reisen til en smarttelefon gjennom verdikjeder, fabrikker og containerskip -- og hva globaliseringen gjor med oekonomien, kulturen og ulikheten i verden.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske korleis handel, økonomiske strukturar og arbeidsforhold heng saman med ressursfordeling og maktforhold',
    'utforske og beskrive korleis ulike politiske system er organiserte',
    'drøfte kva det vil seie å vere medborgar, og korleis ulike former for medborgarskap fungerer i ulike samfunn',
  ],
  linkedChapterId: 'samfunnsfag-10-4',
  content: [
    {
      id: 'samfunnsfag-10-4-n-intro',
      type: 'text',
      content: `## En verden som haenger sammen

Du tar en slurk av kaffen din -- boennene kom fra Brasil. Du sjekker Instagram paa en telefon designet i USA, satt sammen i Kina med mineraler fra Kongo. Du har paa deg en t-skjorte sydd i Bangladesh av bomull dyrket i India. Og nyhetsstroemmen forteller deg om en krig paa den andre siden av kloden som faar bensinprisen i Norge til aa stige.

Velkommen til globaliseringen -- prosessen der landene i verden blir stadig tettere knyttet sammen gjennom handel, kommunikasjon, teknologi og kulturutveksling. **Globalisering** er ikke noe nytt. Mennesker har handlet paa tvers av grenser i tusenvis av aar, fra Silkeveien i antikken til det britiske imperiets verdensomspennende handelsnettverk. Men i loepet av de siste tiaarene har globaliseringen akselerert dramatisk, drevet av internett, billigere transport og nedbygging av handelsbarrierer.

I dag er det naesten umulig aa leve uten aa vaere del av globaliseringen. Maten du spiser, klaerne du bruker, underholdningen du forbruker og informasjonen du leser -- alt er paavirket av globale nettverk. Men er globaliseringen en velsignelse eller en forbannelse? Svaret er: begge deler.`,
    },
    {
      id: 'samfunnsfag-10-4-n-section1',
      type: 'text',
      content: `## Verdikjeder og oekonomisk globalisering

For aa forstaa oekonomisk globalisering, kan vi foelge reisen til en smarttelefon. Det begynner i gruver i Kongo, der mineraler som kobolt utvinnes -- ofte under elendige arbeidsforhold. Mineralene fraktes til smelteverk i Asia, der de foredles til komponenter. Designet staar et selskap i California for. Monteringen skjer i enorme fabrikker i Kina, der tusenvis av arbeidere setter sammen delene. Etter at telefonen er pakket, sendes den med containerskip verden rundt, for til slutt aa havne i en butikk i din naereste by.

Denne reisen kalles en **verdikjede** -- rekken av alle trinn fra raavare til ferdig produkt. I en globalisert oekonomi er verdikjedene ofte lange og komplekse, og de strekker seg over mange land. Det gjor varene billigere fordi bedrifter kan utnytte lave loenninger og spesialisert kompetanse i ulike land. Men det gjor ogsaa systemet saarbart. Koronapandemien i 2020 viste dette tydelig: naar fabrikker i Kina stengte, ble det mangel paa alt fra datachips til medisinsk utstyr verden over.

**Oekonomisk globalisering** betyr at landene handler mer med hverandre, at bedrifter opererer paa tvers av landegrenser, og at kapital -- penger og investeringer -- flyter fritt mellom land. Store **multinasjonale selskaper** som Apple, Amazon og Nestlé har mer oekonomisk makt enn mange stater. Det reiser spoersmaal om hvem som egentlig styrer: politikerne eller markedet?`,
    },
    {
      id: 'samfunnsfag-10-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa globalisering og verdikjeder:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-4-n-quiz1-q0',
            task: 'Hva er en verdikjede?',
            options: [
              { id: 'a', text: 'En kjede av butikker som selger dyre varer', isCorrect: false },
              { id: 'b', text: 'Rekken av alle trinn fra raavare til ferdig produkt', isCorrect: true },
              { id: 'c', text: 'En handel mellom to naboland', isCorrect: false },
              { id: 'd', text: 'Et multinasjonalt selskaps organisasjonskart', isCorrect: false },
            ],
            solution: 'En verdikjede er rekken av alle trinnene et produkt gaar gjennom, fra utvinning av raavarer, via produksjon og transport, til det ferdig produktet naar forbrukeren.',
          },
          {
            id: 'samfunnsfag-10-4-n-quiz1-q1',
            task: 'Hva viste koronapandemien om globaliseringen?',
            options: [
              { id: 'a', text: 'At globalisering er problemfritt', isCorrect: false },
              { id: 'b', text: 'At verdikjeder som strekker seg over mange land er saarbare', isCorrect: true },
              { id: 'c', text: 'At hvert land er helt selvforsynt', isCorrect: false },
              { id: 'd', text: 'At teknologi ikke paavirkes av globalisering', isCorrect: false },
            ],
            solution: 'Pandemien viste at globale verdikjeder er saarbare: naar fabrikker i ett land stenger, rammes hele verden -- det ble mangel paa alt fra datachips til medisinsk utstyr.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-4-n-section2',
      type: 'text',
      content: `## Kulturell globalisering og ulikhet

Globalisering handler ikke bare om oekonomi. **Kulturell globalisering** betyr at ideer, verdier, kulturuttrykk og livsstiler sprer seg over landegrensene. Vi ser de samme filmene, hoerer den samme musikken, og foelger de samme trendene -- enten vi bor i Oslo, Lagos eller Tokyo. Engelskspraaklig kultur dominerer, med Hollywood, amerikanske TV-serier og globale plattformer som Spotify og YouTube.

For noen er dette befriende. Du faar tilgang til hele verdens kultur, nye ideer og perspektiver. Du kan chatte med jevnaldrende i Japan, laere kokekunst fra Mexico og hoere musikk fra Nigeria. Men for andre er kulturell globalisering en trussel: de frykter at lokale kulturer, spraak og tradisjoner forsvinner i en straom av global ensretting. Er det bra at hele verden ser paa de samme Netflix-seriene, eller mister vi noe verdifullt paa veien?

Kanskje det stoerste spoersmaalet globaliseringen reiser, handler om **ulikhet**. Globaliseringen har loftet hundrevis av millioner mennesker ut av fattigdom, saerlig i land som Kina og India. Samtidig har den oekt gapet mellom de aller rikeste og resten. Arbeidere i tekstilfabrikker i Bangladesh tjener noen faa kroner i timen for aa sy klaer som selges for hundrevis av kroner i Norge. Multinasjonale selskaper betaler minimalt med skatt ved aa flytte overskuddet til skatteparadiser.

Globaliseringen skaper vinnere og tapere. Forbrukere i rike land faar billige varer, men arbeidere i fattige land betaler prisen med lave loenninger og daarlige arbeidsforhold. Storbyene blomstrer, mens distrikter og smaasamfunn kan bli hengende etter. Aa finne en globalisering som er rettferdig for alle -- det er kanskje vaar tids stoerste utfordring.`,
    },
    {
      id: 'samfunnsfag-10-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa kulturell globalisering og ulikhet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-4-n-quiz2-q0',
            task: 'Hva menes med kulturell globalisering?',
            options: [
              { id: 'a', text: 'At alle land faar samme politiske system', isCorrect: false },
              { id: 'b', text: 'At ideer, verdier og kulturuttrykk sprer seg over landegrensene', isCorrect: true },
              { id: 'c', text: 'At alle land handler med hverandre', isCorrect: false },
              { id: 'd', text: 'At FN bestemmer kulturen i alle land', isCorrect: false },
            ],
            solution: 'Kulturell globalisering betyr at ideer, verdier, kulturuttrykk og livsstiler sprer seg paa tvers av landegrenser -- gjennom film, musikk, sosiale medier og andre kulturelle kanaler.',
          },
          {
            id: 'samfunnsfag-10-4-n-quiz2-q1',
            task: 'Hvordan har globaliseringen paavirket oekonomisk ulikhet?',
            options: [
              { id: 'a', text: 'Den har gjort alle like rike', isCorrect: false },
              { id: 'b', text: 'Den har bare gjort rike land rikere', isCorrect: false },
              { id: 'c', text: 'Den har loftet mange ut av fattigdom, men ogsaa oekt gapet mellom rik og fattig', isCorrect: true },
              { id: 'd', text: 'Den har ikke hatt noen effekt paa ulikhet', isCorrect: false },
            ],
            solution: 'Globaliseringen har baade loftet hundrevis av millioner ut av fattigdom (saerlig i Asia) og oekt gapet mellom de aller rikeste og resten. Den skaper vinnere og tapere.',
          },
          {
            id: 'samfunnsfag-10-4-n-quiz2-q2',
            task: 'Hva er et argument MOT kulturell globalisering?',
            options: [
              { id: 'a', text: 'Vi faar tilgang til hele verdens kultur', isCorrect: false },
              { id: 'b', text: 'Vi kan laere nye spraak lettere', isCorrect: false },
              { id: 'c', text: 'Lokale kulturer og spraak kan forsvinne i global ensretting', isCorrect: true },
              { id: 'd', text: 'Vi faar billigere teknologi', isCorrect: false },
            ],
            solution: 'Et sentralt argument mot kulturell globalisering er at lokale kulturer, spraak og tradisjoner risikerer aa forsvinne naar global (ofte amerikansk) kultur dominerer.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Globalisering** er prosessen der landene i verden knyttes tettere sammen gjennom handel, kommunikasjon og kulturutveksling. **Oekonomisk globalisering** viser seg i lange, internasjonale **verdikjeder** og mektige **multinasjonale selskaper**. Pandemien viste at disse verdikjedene ogsaa er saarbare.

**Kulturell globalisering** sprer ideer og kulturuttrykk over hele verden, men kan ogsaa true lokale kulturer og tradisjoner. Globaliseringen har loftet mange ut av fattigdom, men har ogsaa oekt den oekonomiske **ulikheten** mellom verdens rikeste og fattigste. Utfordringen er aa forme en globalisering som er rettferdig for alle.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Alle narrativkapitler i del 1
// ============================================================================

export const SAMFUNNSFAG_10_NARRATIV_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSFAG_10_1_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_2_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_3_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_4_NARRATIV,
];
