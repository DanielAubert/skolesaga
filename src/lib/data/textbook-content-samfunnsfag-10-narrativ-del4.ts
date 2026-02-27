/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - NARRATIV VERSJON DEL 4
 * Kapittel 11-16: Klima, Naturressurser, Befolkning, Kart, Naturkatastrofer, Arealbruk
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-spoersmaal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 11 NARRATIV: Klima og klimasoner
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_11_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-11-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '11',
  title: 'Klima og klimasoner',
  subtitle: 'Narrativ versjon',
  description: 'Reisen fra tropisk varme til arktisk kulde -- hvordan Golfstroemmen gjor Norge levelig, hvorfor klimasonene er som de er, og hva som skjer naar klimaet endrer seg.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive korleis klimaet på jorda endrar seg over tid, og drøfte kva endringane kan bety for menneske og natur',
    'undersøke korleis menneskeleg aktivitet har ført til endringar i naturen, og drøfte korleis ein kan ta vare på naturmangfaldet',
  ],
  linkedChapterId: 'samfunnsfag-10-11',
  content: [
    {
      id: 'samfunnsfag-10-11-n-intro',
      type: 'text',
      content: `## Hvorfor kan vi bo i Norge?

Se paa et verdenskart og finn Norge. Vi ligger like langt nord som Alaska, Sibir og Groenland -- steder kjent for brutal kulde og tynt befolkning. Likevel har Norge et relativt mildt klima, groenne skoger og millioner av innbyggere. Hvorfor?

Svaret heter **Golfstroemmen** -- en mektig havstroem som forer varmt vann fra Mexicogolfen tvers over Atlanterhavet og opp langs norskekysten. Denne enorme "varmeovnen i havet" gjor at temperaturen langs norskekysten er opptil 10-15 grader hoeyre enn paa tilsvarende breddegrader andre steder i verden. Det er Golfstroemmen som gjor at havnene i Nordnorge er isfrie om vinteren, at Bergen faar regn i stedet for snoe i november, og at Norge i det hele tatt er beboelig for saa mange mennesker.

Men foer vi snakker mer om klimaendringer, maa vi klargjore en viktig forskjell: **vaer** og **klima** er ikke det samme. Vaer er de kortsiktige forholdene i atmosfaeren -- om det regner eller er sol i dag. Klima er gjennomsnittsvaeret over lang tid, gjerne 30 aar eller mer. At det snoeeer i mai, betyr ikke at klimaet ikke blir varmere. Klima handler om de store, langsiktige moenstrene.`,
    },
    {
      id: 'samfunnsfag-10-11-n-section1',
      type: 'text',
      content: `## Jordens klimasoner

Jorden er delt inn i ulike **klimasoner** basert paa temperatur, nedboerensmoen sterre og avstand fra ekvator.

Den **tropiske sonen** strekker seg rundt ekvator, mellom Krepsen og Steinbukkens vendekrets. Her er det varmt hele aaret, med temperaturer over 18 grader selv i den kaldeste maaneden. Nedboerensmoen steret er hoey, og tropiske regnskoger trives her. Det er i denne sonen vi finner det rikeste biologiske mangfoldet paa planeten.

De **subtropiske og toerrre sonene** ligger paa begge sider av tropene. Her finner vi mange av verdens oeerkener -- som Sahara, den arabiske oerkenen og Atacama. Disse omraadene faar svaeert lite nedboerensmoen, og temperatursvinigningene mellom dag og natt kan vaere enorme.

Den **tempererte sonen** er der Norge befinner seg. Temperaturen varierer tydelig mellom aarstidene, med relativt milde somre og vintere sammenlignet med de arktiske omraadene. Innenfor denne sonen er det stor variasjon -- fra havklima langs kysten med milde vintere og kjoelige somre, til innlandsklima med kalde vintere og varme somre.

De **polare sonene** strekker seg rundt Nord- og Soerpolen. Her er vintrene lange og moerke, med temperaturer langt under frysepunktet. Om sommeren gaar solen aldri ned, men det blir likevel sjelden varmt. Isen og snoeeen reflekterer sollyset, slik at lite varme absorberes.

Norge er spesielt fordi vi spenner over flere klimasoner. Soerlandet har et mildt kystklima, Oestlandet har innlandsklima med store temperaturforskjeller, og Nordnorge har arktiske trekk. Fjellomraadene har alpine klimaforhold selv i Soer-Norge. Denne variasjonen gjor Norge til et fascinerende land geografisk sett.`,
    },
    {
      id: 'samfunnsfag-10-11-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-11-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa klima og klimasoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-11-n-quiz1-q0',
            task: 'Hva er forskjellen mellom vaer og klima?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'b', text: 'Vaer er de kortsiktige forholdene, klima er gjennomsnittsvaeret over lang tid', isCorrect: true },
              { id: 'c', text: 'Klima handler bare om temperatur, vaer handler om alt annet', isCorrect: false },
              { id: 'd', text: 'Vaer endrer seg aldri, klima endrer seg hele tiden', isCorrect: false },
            ],
            solution: 'Vaer er de kortsiktige forholdene i atmosfaeren (sol, regn, vind i dag). Klima er gjennomsnittsvaeret over 30 aar eller mer -- de store, langsiktige moenstrene.',
          },
          {
            id: 'samfunnsfag-10-11-n-quiz1-q1',
            task: 'Hvorfor har Norge mildere klima enn steder paa samme breddegrad?',
            options: [
              { id: 'a', text: 'Paa grunn av fjellene', isCorrect: false },
              { id: 'b', text: 'Paa grunn av Golfstroemmen', isCorrect: true },
              { id: 'c', text: 'Paa grunn av den tynne atmosfaeren', isCorrect: false },
              { id: 'd', text: 'Paa grunn av Norges smale form', isCorrect: false },
            ],
            solution: 'Golfstroemmen forer varmt vann fra Mexicogolfen til norskekysten og gjor temperaturen 10-15 grader hoeyre enn paa tilsvarende breddegrader andre steder i verden.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-11-n-section2',
      type: 'text',
      content: `## Klimaendringer -- den stoerste utfordringen

Klimaet paa jorden har alltid endret seg. Istider har kommet og gaatt, og temperaturen har svingt opp og ned over millioner av aar. Men det som skjer naa, er fundamentalt annerledes: **menneskeskapte klimaendringer** foregaar med en hastighet som er uten sidestykke i jordens historie.

Aarsaken er **drivhuseffekten** -- en naturlig prosess der gasser i atmosfaeren (som CO2, metan og lystgass) holder paa varmen fra solen og gjor jorden beboelig. Uten drivhuseffekten ville gjennomsnittstemperaturen paa jorden vaert minus 18 grader. Men naar vi forbrenner fossile brensler som kull, olje og gass, slipper vi ut enorme mengder ekstra drivhusgasser. Resultatet er en **forsterket drivhuseffekt** som gjor planeten stadig varmere.

Konsekvensene er allerede synlige: isbreeer smelter, havnivaaet stiger, ekstremvaer som heteboelger, styrtregn og orkaner blir hyppigere og kraftigere. Arktis varmes opp dobbelt saa raskt som resten av planeten. Korallrev doeeer. Dyrearter mister leveomraadene sine.

For Norge betyr klimaendringene mer nedboerensmoen, hyppigere flom og skred, truede arter og endrete vekstforhold for landbruket. Golfstroemmen kan i verste fall svekkes -- noe som paradoksalt nok kan gjore Norge kaldere selv om resten av verden blir varmere.

**Parisavtalen** fra 2015 er verdens viktigste klimaavtale. Naesten alle verdens land har forpliktet seg til aa begrense den globale oppvarmingen til godt under 2 grader, helst 1.5 grader, over foerrindustrielt nivaa. Men for aa naa dette maalet maa utslippene kuttes drastisk -- og det haster.`,
    },
    {
      id: 'samfunnsfag-10-11-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-11-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa klimaendringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-11-n-quiz2-q0',
            task: 'Hva er den forsterkede drivhuseffekten?',
            options: [
              { id: 'a', text: 'At drivhus for planter blir varmere', isCorrect: false },
              { id: 'b', text: 'At mennesker slipper ut ekstra drivhusgasser som gjor planeten varmere', isCorrect: true },
              { id: 'c', text: 'At solen sender ut mer varme enn foer', isCorrect: false },
              { id: 'd', text: 'At ozon-laget blir tykkere', isCorrect: false },
            ],
            solution: 'Den forsterkede drivhuseffekten oppstaar naar mennesker slipper ut ekstra drivhusgasser (CO2, metan) ved aa brenne fossile brensler. Det gjor at atmosfaeren holder paa mer varme.',
          },
          {
            id: 'samfunnsfag-10-11-n-quiz2-q1',
            task: 'Hva er maaalet med Parisavtalen?',
            options: [
              { id: 'a', text: 'Aa stoppe all bruk av olje innen 2025', isCorrect: false },
              { id: 'b', text: 'Aa begrense global oppvarming til godt under 2 grader', isCorrect: true },
              { id: 'c', text: 'Aa flytte alle mennesker vekk fra kystomraader', isCorrect: false },
              { id: 'd', text: 'Aa gjore alle land like rike', isCorrect: false },
            ],
            solution: 'Parisavtalen fra 2015 forplikter naesten alle verdens land til aa begrense global oppvarming til godt under 2 grader, helst 1.5 grader, over foerrindustrielt nivaa.',
          },
          {
            id: 'samfunnsfag-10-11-n-quiz2-q2',
            task: 'Hva kan skje med Golfstroemmen som foelge av klimaendringer?',
            options: [
              { id: 'a', text: 'Den kan bli varmere og gjore Norge tropisk', isCorrect: false },
              { id: 'b', text: 'Den kan svekkes og gjore Norge kaldere', isCorrect: true },
              { id: 'c', text: 'Den vil ikke paavirkes av klimaendringer', isCorrect: false },
              { id: 'd', text: 'Den vil snu retning', isCorrect: false },
            ],
            solution: 'Smelting av is i Arktis kan svekke Golfstroemmen fordi store mengder ferskvann forstyrrer havstroemene. Paradoksalt nok kan dette gjore Norge kaldere selv om resten av verden blir varmere.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-11-n-summary',
      type: 'text',
      content: `## Oppsummering

**Vaer** er kortsiktige atmosfaeriske forhold, mens **klima** er gjennomsnittet over lang tid. **Golfstroemmen** gjor Norge mildere enn steder paa samme breddegrad. Jorden er delt i **klimasoner**: tropisk, subtropisk, temperert og polar. Norge spenner over flere av disse.

**Menneskeskapte klimaendringer** skyldes en **forsterket drivhuseffekt** fra utslipp av CO2 og andre drivhusgasser. Konsekvensene er issmelting, havnivaaastigning og mer ekstremvaer. **Parisavtalen** (2015) forplikter landene til aa begrense oppvarmingen til godt under 2 grader. Golfstroemmen kan svekkes, med potensielt dramatiske foelger for Norge.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12 NARRATIV: Naturressurser og forvaltning
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_12_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-12-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '12',
  title: 'Naturressurser og forvaltning',
  subtitle: 'Narrativ versjon',
  description: 'Historien om Norges rikdom under havbunnen -- fra oljeeventyret og Oljefondet til utfordringen med aa forvalte baade fornybare og ikke-fornybare ressurser for framtiden.',
  estimatedMinutes: 35,
  competenceGoals: [
    'undersøke korleis menneskeleg aktivitet har ført til endringar i naturen, og drøfte korleis ein kan ta vare på naturmangfaldet',
    'utforske og presentere ei aktuell samfunnsfagleg problemstilling og drøfte ulike løysingsforslag',
  ],
  linkedChapterId: 'samfunnsfag-10-12',
  content: [
    {
      id: 'samfunnsfag-10-12-n-intro',
      type: 'text',
      content: `## Skatten under havet

Julaften 1969 gjorde Phillipsgruppen et funn paa norsk sokkel som skulle forandre Norge for alltid: **Ekofisk-feltet**, et av de stoerste oljefeltene i verden. Fra aa vaere et relativt fattig land i europeisk maalestokk, ble Norge i loepet av noen tiaar et av verdens rikeste land. Oljen forvandlet norsk oekonomi, finansierte velferdsstaten og ga oss et fond som i dag er verdt over 17 000 milliarder kroner.

Men la oss ta et steg tilbake. **Naturressurser** er materialer og energikilder fra naturen som mennesker bruker for aa dekke sine behov. Vi deler dem inn i to hovedtyper: **fornybare ressurser** som kan fornyes naturlig over tid -- som sol, vind, vann, skog og fisk -- og **ikke-fornybare ressurser** som tar millioner av aar aa dannes og som derfor vil ta slutt -- som olje, gass, kull og metaller.

Noekkelen til god ressursforvaltning er aa bruke ressursene paa en maate som er baerekraftig. For fornybare ressurser betyr det aa ikke ta ut mer enn naturen kan reprodusere. For ikke-fornybare ressurser betyr det aa bruke dem klokt, investere inntektene for framtiden, og gradvis erstatte dem med fornybare alternativer.`,
    },
    {
      id: 'samfunnsfag-10-12-n-section1',
      type: 'text',
      content: `## Oljeeventyret og Oljefondet

Norges oljeeventyr er en bemerkelsesverdig suksesshistorie -- men det er ogsaa en historie om kloke politiske valg. Da oljen ble funnet, bestemte norske politikere tidlig at oljeressursene tilhoerte fellesskapet, ikke private selskaper. Staten tok en stor eierandel gjennom **Statoil** (naa Equinor) og innfoerte hoeye skatter paa oljeselskaper. Inntektene ble brukt til aa bygge ut velferdsstaten.

Men den kanskje smarteste avgjoerselen kom i 1990, da Stortinget opprettet **Statens pensjonsfond utland** -- bedre kjent som **Oljefondet**. Ideen var enkel: i stedet for aa bruke opp all oljerikdommen med en gang, skulle overskuddet investeres i aksjer, obligasjoner og eiendom over hele verden. Paa den maaten ville ogsaa framtidige generasjoner faa glede av oljeformuen.

I dag er Oljefondet verdens stoerste statlige investeringsfond. Handlingsregelen sier at staten hvert aar kan bruke omtrent tre prosent av fondets verdi over statsbudsjettet. Det betyr at vi lever av avkastningen, ikke av selve formuen. Det er som aa ha penger i banken og bare bruke rentene.

Men oljeeventyret har ogsaa en skyggeside. Utvinning av olje og gass er en av de stoerste kildene til klimagassutslipp globalt. Norge staar i et paradoks: vi er et av verdens mest ambisioese land paa klimapolitikk, men vi er ogsaa en stor produsent av fossil energi. Debatten om Norges oljeframtid er en av de heteste politiske diskusjonene i landet.`,
    },
    {
      id: 'samfunnsfag-10-12-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-12-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa naturressurser og olje:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-12-n-quiz1-q0',
            task: 'Hva er forskjellen mellom fornybare og ikke-fornybare ressurser?',
            options: [
              { id: 'a', text: 'Fornybare ressurser er dyrere', isCorrect: false },
              { id: 'b', text: 'Fornybare ressurser kan fornyes naturlig, ikke-fornybare tar millioner av aar aa dannes', isCorrect: true },
              { id: 'c', text: 'Ikke-fornybare ressurser er renere for miljoeet', isCorrect: false },
              { id: 'd', text: 'Det er ingen reell forskjell', isCorrect: false },
            ],
            solution: 'Fornybare ressurser (sol, vind, fisk, skog) kan fornyes naturlig over relativt kort tid. Ikke-fornybare ressurser (olje, kull, metaller) tar saa lang tid aa dannes at de i praksis er begrensede.',
          },
          {
            id: 'samfunnsfag-10-12-n-quiz1-q1',
            task: 'Hva er handlingsregelen?',
            options: [
              { id: 'a', text: 'En regel om hvor mye olje Norge kan utvinne', isCorrect: false },
              { id: 'b', text: 'En regel om at staten aarlig kan bruke omtrent tre prosent av Oljefondets verdi', isCorrect: true },
              { id: 'c', text: 'En regel om at all olje maa selges til utlandet', isCorrect: false },
              { id: 'd', text: 'En regel om at Oljefondet maa investere i norske bedrifter', isCorrect: false },
            ],
            solution: 'Handlingsregelen sier at staten hvert aar kan bruke omtrent tre prosent av Oljefondets verdi over statsbudsjettet. Slik lever vi av avkastningen, ikke selve formuen.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-12-n-section2',
      type: 'text',
      content: `## Baerekraftig forvaltning -- laerdom fra torskekrisen

Ikke alle ressurseventyr har endt like godt som oljen. Paa 1990-tallet kollapset torskebestanden utenfor kysten av Newfoundland i Canada etter tiaar med overfiske. 40 000 mennesker mistet jobbene sine over natten, og torsken har aldri kommet helt tilbake. Det er et skrekkeksempel paa hva som skjer naar fornybare ressurser utnyttes raskere enn de kan reprodusere seg.

I Norge har vi vaare egne erfaringer. Sildebestanden kollapset paa slutten av 1960-tallet etter aarelang overfisking. Men gjennom strenge kvoter og godt forvaltningsarbeid klarte vi aa gjenoppbygge bestanden. I dag forvaltes norske fiskeressurser langt mer baerekraftig, med kvoter basert paa vitenskapelige raad fra Havforskningsinstituttet.

**Baerekraftig forvaltning** betyr aa bruke ressursene paa en maate som ivaretar baade naaaevarende og framtidige generasjoners behov. For fisk betyr det aa ikke fange mer enn bestanden taoler. For skog betyr det aa plante nye traer naar man hogger. For vann betyr det aa beskytte vassdragene mot forurensning.

Men baerekraftig forvaltning er ogsaa fullt av dilemmaer. Skal vi la elver renne fritt, eller bygge ut vannkraft for ren energi? Skal vi verne skog for biologisk mangfold, eller bruke den til aa bygge klimavennlige hus? Skal vi aapne nye havomraader for olje, eller la dem vaere? Disse spoersmaalene har ingen enkle svar -- de krever avveining mellom ulike verdier og interesser.

Norges utfordring framover er aa forvalte overgangen fra en olje- og gassbasert oekonomi til en groeennere oekonomi -- uten aa miste velferden vi har bygget opp. Det er en balansekunst som krever kloke politiske valg og vilje til aa investere i framtiden.`,
    },
    {
      id: 'samfunnsfag-10-12-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-12-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa baerekraftig forvaltning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-12-n-quiz2-q0',
            task: 'Hva skjedde med torskebestanden utenfor Newfoundland?',
            options: [
              { id: 'a', text: 'Den vokste seg stoerre enn noen gang', isCorrect: false },
              { id: 'b', text: 'Den kollapset etter tiaar med overfiske', isCorrect: true },
              { id: 'c', text: 'Den ble flyttet til Norge', isCorrect: false },
              { id: 'd', text: 'Den ble reddet av klimaendringer', isCorrect: false },
            ],
            solution: 'Torskebestanden utenfor Newfoundland kollapset paa 1990-tallet etter aarelang overfisking. 40 000 mennesker mistet jobbene sine, og bestanden har aldri kommet helt tilbake.',
          },
          {
            id: 'samfunnsfag-10-12-n-quiz2-q1',
            task: 'Hva betyr baerekraftig forvaltning av fornybare ressurser?',
            options: [
              { id: 'a', text: 'Aa bruke saa lite ressurser som mulig', isCorrect: false },
              { id: 'b', text: 'Aa bruke ressursene uten noen begrensninger', isCorrect: false },
              { id: 'c', text: 'Aa ikke ta ut mer enn naturen kan reprodusere', isCorrect: true },
              { id: 'd', text: 'Aa bare bruke ikke-fornybare ressurser', isCorrect: false },
            ],
            solution: 'Baerekraftig forvaltning av fornybare ressurser betyr aa ikke ta ut mer enn naturen kan reprodusere -- fiske innenfor kvoter, plante nye traer naar man hogger, og beskytte vassdrag.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-12-n-summary',
      type: 'text',
      content: `## Oppsummering

**Naturressurser** deles inn i **fornybare** (sol, vind, fisk, skog) og **ikke-fornybare** (olje, gass, metaller). Norges oljeeventyr har gjort landet rikt, og **Oljefondet** sikrer at ogsaa framtidige generasjoner faar glede av formuen. **Handlingsregelen** begrenser aarlig bruk til ca. tre prosent av fondets verdi.

**Baerekraftig forvaltning** betyr aa ikke ta ut mer enn naturen kan reprodusere. Torskekollapsen ved Newfoundland er et skrekkeksempel paa konsekvensene av overforbruk. Norges stoerste utfordring er aa forvalte overgangen fra fossil til groenn oekonomi -- en balansekunst mellom oekonomisk velstand og miljoehensyn.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 13 NARRATIV: Befolkning og bosetting
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_13_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-13-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '13',
  title: 'Befolkning og bosetting',
  subtitle: 'Narrativ versjon',
  description: 'Historien om verdens folkestroemmer -- fra bygd til by, fra land til land, og hvordan den demografiske overgangen forklarer hvorfor noen land vokser mens andre krymper.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og presentere ei aktuell samfunnsfagleg problemstilling og drøfte ulike løysingsforslag',
    'reflektere over korleis menneske har kjempa og kjempar for endringar i samfunnet og for rettferdige og berekraftige løysingar',
  ],
  linkedChapterId: 'samfunnsfag-10-13',
  content: [
    {
      id: 'samfunnsfag-10-13-n-intro',
      type: 'text',
      content: `## Verden flytter til byen

For foerste gang i menneskehetens historie bor over halvparten av verdens befolkning i byer. I 1800 bodde bare tre prosent av menneskene i byer -- i dag er tallet over 56 prosent, og det stiger raskt. Hvert aar flytter millioner av mennesker fra landsbygda til byene, paa jakt etter jobb, utdanning og et bedre liv. Denne prosessen kalles **urbanisering**, og den er en av de mest dramatiske forandringene i vaar tid.

I Afrika og Asia skjer urbaniseringen med en hastighet som er uten sidestykke. Byer som Lagos i Nigeria, Dhaka i Bangladesh og Mumbai i India vokser med tusenvis av nye innbyggere hver eneste dag. Mange av disse ender opp i slumomraader med elendige boforhold, mangel paa rent vann og sanikaere forhold. Urbaniseringen skaper baade muligheter og enorme utfordringer.

Men for aa forstaa hvorfor verden forandrer seg saa raskt, maa vi forstaa noe om **demografi** -- laeeren om befolkningsutvikling. Hvorfor faar noen land flere og flere innbyggere mens andre krymper? Hvorfor er befolkningen i Afrika ung mens den i Europa og Japan er stadig eldre? Svaret ligger i noe som kalles den **demografiske overgangen**.`,
    },
    {
      id: 'samfunnsfag-10-13-n-section1',
      type: 'text',
      content: `## Den demografiske overgangen

Den **demografiske overgangen** er en modell som beskriver hvordan befolkningsutviklingen i et land endrer seg naar samfunnet moderniseres. Modellen har fire faser.

I **fase 1** er baade foedselstallene og doeedelstallene hoeye. Mange barn foedes, men mange doeer ogsaa -- av sykdommer, sult og daarlige levekaar. Befolkningen vokser langsomt eller holdes stabil. Slik var det i naesten alle land foer den industrielle revolusjonen.

I **fase 2** begynner doeedelstallene aa synke, fordi bedre ernaeering, hygiene og medisinsk behandling gjor at flere overlever. Men foedselstallene er fortsatt hoeye, fordi det tar tid foer kulturelle normer og oekonomiske forhold endres. Resultatet er en **befolkningseksplosjon**. Mange utviklingsland befinner seg i eller har nylig vaert gjennom denne fasen.

I **fase 3** begynner ogsaa foedselstallene aa synke. Kvinner faar bedre tilgang til utdanning og prevensjon, barn overlever oftere, og det er ikke lenger oekonomisk noedvendig aa faa mange barn. Befolkningsveksten avtar.

I **fase 4** er baade foedselstallene og doeedelstallene lave. Befolkningen stabiliserer seg eller begynner aa krympe. De fleste rike land befinner seg her -- inkludert Norge, der foedselsraten har sunket under det som trengs for aa opprettholde befolkningen uten innvandring.

Noen land, som Japan og Soer-Korea, har gaatt saa langt at de staar overfor en **demografisk krise** med aldrende befolkning, mangel paa arbeidskraft og press paa velferdsystemene. Andre, som Niger og Nigeria, har fortsatt svaeert hoeye foedselstall og rask befolkningsvekst.`,
    },
    {
      id: 'samfunnsfag-10-13-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-13-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa befolkning og demografi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-13-n-quiz1-q0',
            task: 'Hva er urbanisering?',
            options: [
              { id: 'a', text: 'At folk flytter fra by til bygd', isCorrect: false },
              { id: 'b', text: 'At stadig flere mennesker bor i byer', isCorrect: true },
              { id: 'c', text: 'At byer faar faerre innbyggere', isCorrect: false },
              { id: 'd', text: 'At landsbygda urbaniseres', isCorrect: false },
            ],
            solution: 'Urbanisering er prosessen der stadig flere mennesker bor i byer. I dag bor over 56 prosent av verdens befolkning i byer, og andelen oeker raskt.',
          },
          {
            id: 'samfunnsfag-10-13-n-quiz1-q1',
            task: 'I hvilken fase av den demografiske overgangen skjer befolkningseksplosjon?',
            options: [
              { id: 'a', text: 'Fase 1', isCorrect: false },
              { id: 'b', text: 'Fase 2', isCorrect: true },
              { id: 'c', text: 'Fase 3', isCorrect: false },
              { id: 'd', text: 'Fase 4', isCorrect: false },
            ],
            solution: 'I fase 2 synker doeedelstallene (bedre helse), men foedselstallene er fortsatt hoeye. Resultatet er en rask befolkningsvekst -- en befolkningseksplosjon.',
          },
          {
            id: 'samfunnsfag-10-13-n-quiz1-q2',
            task: 'Hvilken demografisk utfordring har land som Japan?',
            options: [
              { id: 'a', text: 'For rask befolkningsvekst', isCorrect: false },
              { id: 'b', text: 'For mange unge mennesker', isCorrect: false },
              { id: 'c', text: 'Aldrende befolkning og mangel paa arbeidskraft', isCorrect: true },
              { id: 'd', text: 'For mye innvandring', isCorrect: false },
            ],
            solution: 'Japan og flere andre rike land har saa lave foedselsrater at befolkningen aldres og krymper. Det gir mangel paa arbeidskraft og press paa velferdsystemene.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-13-n-section2',
      type: 'text',
      content: `## Migrasjon -- mennesker i bevegelse

Mennesker har alltid vaert i bevegelse. **Migrasjon** -- det aa flytte fra ett sted til et annet -- er like gammelt som menneskeheten selv. Men i dag er migrasjonsmoenstrene mer komplekse enn noen gang.

Vi skiller mellom **frivillig migrasjon** -- naar mennesker velger aa flytte for arbeid, utdanning eller bedre muligheter -- og **tvungen migrasjon** -- naar mennesker tvinges paa flukt av krig, forfoeelgelse, naturkatastrofer eller ekstrem fattigdom. I dag er over 100 millioner mennesker paa flukt verden over, det hoeeyeste tallet noen gang.

**Arbeidsinnvandring** er en viktig form for frivillig migrasjon. I Norge har arbeidsinnvandrere fra land som Polen, Litauen og Sverige bidratt enormt til naeringslivet -- saerlig i byggebransjen, helsesektoren og servicenaeeringen. Innvandring har baade oekonomiske fordeler (arbeidskraft, innovasjon, skatteinnttekter) og utfordringer (integrering, press paa offentlige tjenester, kulturelle spenninger).

**Flyktninger** har rett til beskyttelse under internasjonal lov. FNs flyktningkonvensjon slaar fast at mennesker som flykter fra forfoeelgelse, har rett til aa soeke asyl i et annet land. Norge tar imot flyktninger hvert aar, og integreringspolitikken -- hvordan vi hjelper nye innbyggere med aa bli en del av samfunnet -- er et stadig aktuelt politisk tema.

Migrasjon forandrer baade landene folk reiser fra og landene de reiser til. Utfordringen er aa forme en migrasjonspolitikk som er baade human og baerekraftig -- som respekterer menneskerettighetene og samtidig fungerer i praksis.`,
    },
    {
      id: 'samfunnsfag-10-13-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-13-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa migrasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-13-n-quiz2-q0',
            task: 'Hva er forskjellen mellom frivillig og tvungen migrasjon?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'b', text: 'Frivillig migrasjon er lovlig, tvungen er ulovlig', isCorrect: false },
              { id: 'c', text: 'Frivillig migrasjon er et eget valg, tvungen skyldes krig, forfoeelgelse eller noed', isCorrect: true },
              { id: 'd', text: 'Tvungen migrasjon gjelder bare barn', isCorrect: false },
            ],
            solution: 'Frivillig migrasjon er naar mennesker selv velger aa flytte (for jobb, utdanning). Tvungen migrasjon er naar folk tvinges paa flukt av krig, forfoeelgelse, naturkatastrofer eller ekstrem noed.',
          },
          {
            id: 'samfunnsfag-10-13-n-quiz2-q1',
            task: 'Hva sier FNs flyktningkonvensjon?',
            options: [
              { id: 'a', text: 'At flyktninger maa returneres til hjemlandet', isCorrect: false },
              { id: 'b', text: 'At mennesker som flykter fra forfoeelgelse har rett til aa soeke asyl', isCorrect: true },
              { id: 'c', text: 'At bare europeiske land maa ta imot flyktninger', isCorrect: false },
              { id: 'd', text: 'At flyktninger ikke har noen rettigheter', isCorrect: false },
            ],
            solution: 'FNs flyktningkonvensjon slaar fast at mennesker som flykter fra forfoeelgelse har rett til aa soeke asyl i et annet land. Landene har plikt til aa vurdere soeknadene.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-13-n-summary',
      type: 'text',
      content: `## Oppsummering

**Urbanisering** betyr at stadig flere bor i byer -- over 56 prosent av verdens befolkning. Den **demografiske overgangen** forklarer hvordan befolkningsutviklingen endres: fra hoeye foedsels- og doeedelstall (fase 1) til lave tall og stabil/krympende befolkning (fase 4). Rask vekst skjer i fase 2 naar doeedelstallene synker men foedselsratene er hoeye.

**Migrasjon** kan vaere frivillig (arbeid, utdanning) eller tvungen (krig, forfoeelgelse). FNs flyktningkonvensjon gir forfulgte rett til asyl. Arbeidsinnvandring bidrar til oekonomien, men krever god integrering. Demografiske utfordringer som aldrende befolkning (i rike land) og rask vekst (i fattige land) preger verdenssamfunnet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 14 NARRATIV: Kart og kartanalyse
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_14_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-14-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '14',
  title: 'Kart og kartanalyse',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvordan vi gjor en kule flat -- fra kartprojeksjoner og maalestokk til digitale kartverktoey og hvorfor kart aldri er noeyytrale.',
  estimatedMinutes: 30,
  competenceGoals: [
    'lese, tolke og bruke papirbaserte og digitale kart, og reflektere over korleis kartframstillingar er valde',
    'utforske og presentere ei aktuell samfunnsfagleg problemstilling og drøfte ulike løysingsforslag',
  ],
  linkedChapterId: 'samfunnsfag-10-14',
  content: [
    {
      id: 'samfunnsfag-10-14-n-intro',
      type: 'text',
      content: `## Kart lyver -- men paa en nyttig maate

Har du noen gang sett paa et verdenskart og tenkt at Groenland ser naesten like stort ut som Afrika? I virkeligheten er Afrika 14 ganger stoerre. Og Russland ser enormt ut paa de fleste verdenskart, men er i virkeligheten mye mindre enn det ser ut som naar du sammenligner med landene naer ekvator. Hvorfor?

Svaret er at det er umulig aa gjore en kule (jorden) helt flat (et kart) uten aa forvrenge noe. Du kan proeve selv: ta en appelsin, skreell av skallet og proev aa legge det flatt paa et bord. Det gaar ikke uten at det rives, boyes eller strekkes. Kart har det samme problemet.

Maaten vi loser dette paa kalles **kartprojeksjoner** -- ulike metoder for aa overfoere jordens overflate til et flatt kart. Hver projeksjon velger hva den vil bevare og hva den er villig til aa forvrenge. Og dette valget er ikke bare matematisk -- det er ogsaa politisk.`,
    },
    {
      id: 'samfunnsfag-10-14-n-section1',
      type: 'text',
      content: `## Kartprojeksjoner og maalestokk

Den mest kjente kartprojeksjonen er **Mercators projeksjon** fra 1569. Den ble laget for sjoefolk fordi den bevarer vinkler og retninger -- perfekt for navigasjon. Men prisen er at omraader naer polene blaaases opp enormt. Det er derfor Groenland ser ut som Afrika paa Mercator-kart, selv om det i virkeligheten bare er en fjortendel av Afrikas stoerrelse.

**Peters projeksjon** (ogsaa kalt Gall-Peters) ble laget som et alternativ nettopp for aa vise de riktige stoerrelseforholdene. Paa et Peters-kart ser Afrika riktig ut i forhold til Europa, men til gjengjeld ser landmassene forvrengd ut i form -- som om de er strukket vertikalt.

Det finnes ingen "perfekt" projeksjon -- bare projeksjoner som passer bedre til ulike formaal. Det viktige er aa vaere bevisst paa at kartet du ser paa alltid er et valg, og at valget har konsekvenser for hvordan vi oppfatter verden. Mercator-projeksjonen har vaert kritisert for aa forstorre den "vestlige verden" og forminske Afrika og Soer-Amerika -- noe som kan forsterke feilaktige forestillinger om makt og betydning.

**Maalestokk** er et annet viktig kartbegrep. Det forteller deg forholdet mellom avstander paa kartet og avstander i virkeligheten. En maalestokk paa 1:50 000 betyr at 1 centimeter paa kartet tilsvarer 50 000 centimeter (500 meter) i virkeligheten. Stor maalestokk (som 1:10 000) viser et lite omraade med mye detalj. Liten maalestokk (som 1:1 000 000) viser et stort omraade med faere detaljer.

**Hoeydekurver** (koter) viser terrengets hoeydeforskjeller. Tette kurver betyr bratt terreng, spredte kurver betyr slakt terreng. Aa lese hoeydekurver er en nyttig ferdighet for alle som ferdes i naturen.`,
    },
    {
      id: 'samfunnsfag-10-14-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-14-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa kartprojeksjoner og maalestokk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-14-n-quiz1-q0',
            task: 'Hvorfor ser Groenland naesten like stort ut som Afrika paa et Mercator-kart?',
            options: [
              { id: 'a', text: 'Fordi de er omtrent like store', isCorrect: false },
              { id: 'b', text: 'Fordi Mercators projeksjon forstorer omraader naer polene', isCorrect: true },
              { id: 'c', text: 'Fordi Afrika er forminsket med vilje', isCorrect: false },
              { id: 'd', text: 'Fordi kartet er tegnet feil', isCorrect: false },
            ],
            solution: 'Mercators projeksjon bevarer vinkler for navigasjon, men forstorer omraader naer polene kraftig. Derfor ser Groenland enormt ut, selv om Afrika er 14 ganger stoerre.',
          },
          {
            id: 'samfunnsfag-10-14-n-quiz1-q1',
            task: 'Hva betyr maalestokken 1:50 000?',
            options: [
              { id: 'a', text: '1 cm paa kartet = 50 meter i virkeligheten', isCorrect: false },
              { id: 'b', text: '1 cm paa kartet = 500 meter i virkeligheten', isCorrect: true },
              { id: 'c', text: '1 cm paa kartet = 5 km i virkeligheten', isCorrect: false },
              { id: 'd', text: '1 cm paa kartet = 50 km i virkeligheten', isCorrect: false },
            ],
            solution: 'Maalestokk 1:50 000 betyr at 1 cm paa kartet tilsvarer 50 000 cm i virkeligheten, som er 500 meter.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-14-n-section2',
      type: 'text',
      content: `## Digitale kart og GIS

Kartverdenen har blitt revolusjonert av digital teknologi. I dag bruker de fleste av oss digitale kart daglig -- gjennom Google Maps, Apple Maps eller andre apper. Vi navigerer til venner, finner restauranter og sjekker trafikkforholdene -- alt med noen faa tastetrykk.

Bak disse appene ligger **GIS** -- geografiske informasjonssystemer. GIS er teknologi som samler inn, lagrer, analyserer og presenterer geografisk data. Det er mye mer enn bare kart: GIS lar deg legge ulike typer informasjon oppaa hverandre i lag. Du kan for eksempel kombinere et kart over befolkningstetthet med et kart over flomrisiko for aa finne ut hvor mange mennesker som er saarbare for flom i et bestemt omraade.

**Tematiske kart** er kart som viser spesifikke data, som befolkningstetthet, nedboerensmoen, politiske grenser eller sykdomsutbredelse. De er kraftige verktoeey for aa analysere moenstrer og sammenhenger. Et kart over CO2-utslipp per innbygger forteller en helt annen historie enn et kart over totale utslipp per land.

Men ogsaa digitale kart er valg. Google Maps viser verden slik Google vil at vi skal se den. Kart kan brukes til aa legitimere territorielle krav, til aa usynligjore minoriteter, eller til aa fremme bestemte interesser. I dag er det viktigere enn noen gang aa vaere kartlitteraer -- aa forstaa at kart er representasjoner av virkeligheten, ikke virkeligheten selv, og at de alltid reflekterer valg og perspektiver.`,
    },
    {
      id: 'samfunnsfag-10-14-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-14-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa digitale kart:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-14-n-quiz2-q0',
            task: 'Hva er GIS?',
            options: [
              { id: 'a', text: 'En type GPS', isCorrect: false },
              { id: 'b', text: 'Teknologi for aa samle inn, analysere og presentere geografisk data', isCorrect: true },
              { id: 'c', text: 'Et merke for digitale kart', isCorrect: false },
              { id: 'd', text: 'En kartprojeksjon', isCorrect: false },
            ],
            solution: 'GIS (geografiske informasjonssystemer) er teknologi som samler inn, lagrer, analyserer og presenterer geografisk data. Det lar deg kombinere ulike typer informasjon i lag.',
          },
          {
            id: 'samfunnsfag-10-14-n-quiz2-q1',
            task: 'Hvorfor er det viktig aa vaere kartlitteraer?',
            options: [
              { id: 'a', text: 'Fordi alle kart er feil', isCorrect: false },
              { id: 'b', text: 'Fordi kart alltid reflekterer valg og perspektiver', isCorrect: true },
              { id: 'c', text: 'Fordi digitale kart alltid er bedre enn papirkart', isCorrect: false },
              { id: 'd', text: 'Fordi man trenger det for aa bruke GPS', isCorrect: false },
            ],
            solution: 'Kart er ikke noeyytrale fremstillinger av virkeligheten -- de reflekterer alltid valg om hva som vises, hvordan det vises, og hva som utelates. Aa forstaa dette er kartlitterasitet.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-14-n-summary',
      type: 'text',
      content: `## Oppsummering

Kart er aldri perfekte fremstillinger av virkeligheten fordi det er umulig aa gjore en kule flat uten forvrengning. **Kartprojeksjoner** som Mercator og Peters gjor ulike valg om hva de bevarer og hva de forvrenger. **Maalestokk** angir forholdet mellom kart og virkelighet. **Hoeydekurver** viser terrengets form.

**GIS** (geografiske informasjonssystemer) er digital teknologi for aa analysere geografisk data i lag. **Tematiske kart** viser spesifikke data som befolkning eller klima. Kart er alltid valg som reflekterer perspektiver -- aa vaere **kartlitteraer** betyr aa forstaa dette og vurdere kart kritisk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 15 NARRATIV: Naturkatastrofer og saarbarhet
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_15_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-15-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '15',
  title: 'Naturkatastrofer og sårbarhet',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvorfor det samme jordskjelvet dreper tusenvis i ett land og nesten ingen i et annet -- om naturfare, saarbarhet og hvordan klimaendringer gjor alt verre.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske korleis klimaet på jorda endrar seg over tid, og drøfte kva endringane kan bety for menneske og natur',
    'undersøke korleis menneskeleg aktivitet har ført til endringar i naturen, og drøfte korleis ein kan ta vare på naturmangfaldet',
  ],
  linkedChapterId: 'samfunnsfag-10-15',
  content: [
    {
      id: 'samfunnsfag-10-15-n-intro',
      type: 'text',
      content: `## Samme jordskjelv, helt ulike konsekvenser

I 2010 ble Haiti rammet av et jordskjelv med styrke 7.0. Over 200 000 mennesker omkom, og hovedstaden Port-au-Prince ble naermest jevnet med jorden. Samme aar ble Chile rammet av et jordskjelv med styrke 8.8 -- over 500 ganger sterkere enn det i Haiti. Men i Chile omkom "bare" rundt 500 mennesker.

Hvorfor saa enorm forskjell? Svaret handler om **saarbarhet**. Chile er et rikere land med strenge byggeforskrifter, godt utbygd infrastruktur og et varslingsssystem for tsunamier. Haiti var verdens fattigste land paa den vestlige halvkule, med skjoere bygninger, svak infrastruktur og minimal beredskap. Det var ikke jordskjelvet i seg selv som draepte -- det var fattigdommen, de daarlige bygningene og mangelen paa forberedelse.

En **naturkatastrofe** oppstaar naar en **naturhendelse** (jordskjelv, flom, orkan, vulkanutbrudd) rammer et saarbart samfunn. Naturen i seg selv er ikke en katastrofe -- det er naar den moeter menneskelig saarbarhet at tragedier oppstaar. Og saarbarhet er ujevnt fordelt: det er nesten alltid de fattigste som rammes hardest.`,
    },
    {
      id: 'samfunnsfag-10-15-n-section1',
      type: 'text',
      content: `## Typer naturhendelser og klimaendringer

Naturhendelser kan deles inn i ulike kategorier. **Geologiske hendelser** som jordskjelv og vulkanutbrudd skyldes prosesser inne i jorden -- bevegelser i de tektoniske platene som jordskorpen bestaar av. Disse hendelsene er vanskelige aa forutsi og umulige aa forhindre. Omraader langs plategrensene, som "Ildringen" rundt Stillehavet, er saerlig utsatt.

**Meteorologiske hendelser** som orkaner, tornadoer, styrtregn og toerke er knyttet til vaer og klimasystemer. **Hydrologiske hendelser** som flom og skred skyldes ofte kombinasjoner av nedboerensmoen, terreng og menneskelig aktivitet.

Og her kommer **klimaendringene** inn. Naar planeten blir varmere, blir vaersystemene mer energirike. Det betyr at meteorologiske og hydrologiske hendelser blir hyppigere og kraftigere. Mer nedboerensmoen, sterkere stormer, lengre toerkeperioder, hoeyere havnivaa -- alt dette oeker risikoen for naturkatastrofer.

I Norge opplevde vi dette under uvaeret **Hans** i august 2023. Ekstrem nedboerensmoen foerte til massive flommer i Innlandet, jordskred, oedelagte veier og evakuering av hundrevis av mennesker. Hendelsen viste at ogsaa et rikt, velfungerende land som Norge er saarbart for klimarelaterte naturhendelser.

Forskning viser at klimaendringer allerede har gjort ekstremvaer mer sannsynlig og mer intenst. Det FN kaller en "kode roed for menneskeheten" handler ikke bare om gradvise temperaturforandringer -- det handler om at naturkatastrofene blir flere og verre.`,
    },
    {
      id: 'samfunnsfag-10-15-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-15-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa naturkatastrofer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-15-n-quiz1-q0',
            task: 'Hvorfor omkom langt flere i Haitis jordskjelv enn i Chiles, selv om Chiles var sterkere?',
            options: [
              { id: 'a', text: 'Fordi Haiti ligger naermere ekvator', isCorrect: false },
              { id: 'b', text: 'Fordi Haiti var fattigere med svake bygninger og daarlig beredskap', isCorrect: true },
              { id: 'c', text: 'Fordi Chiles jordskjelv var under havet', isCorrect: false },
              { id: 'd', text: 'Fordi Haiti har flere innbyggere', isCorrect: false },
            ],
            solution: 'Haiti var fattigere med skjoere bygninger, svak infrastruktur og minimal beredskap. Chile hadde strenge byggeforskrifter og gode varslingssystemer. Saarbarhet avgjoer konsekvensene.',
          },
          {
            id: 'samfunnsfag-10-15-n-quiz1-q1',
            task: 'Hvordan paavirker klimaendringer naturkatastrofer?',
            options: [
              { id: 'a', text: 'Klimaendringer har ingen effekt paa naturkatastrofer', isCorrect: false },
              { id: 'b', text: 'Klimaendringer gjor alle typer naturkatastrofer sjeldnere', isCorrect: false },
              { id: 'c', text: 'Varmere klima gjor meteorologiske og hydrologiske hendelser hyppigere og kraftigere', isCorrect: true },
              { id: 'd', text: 'Klimaendringer foraarsaker bare jordskjelv', isCorrect: false },
            ],
            solution: 'Klimaendringer gjor vaersystemene mer energirike, noe som forer til kraftigere stormer, mer nedboerensmoen, lengre toerker og hoeyere havnivaa -- alt dette oeker risikoen for katastrofer.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-15-n-section2',
      type: 'text',
      content: `## Forebygging og beredskap

Hvis vi ikke kan stoppe jordskjelv og orkaner, hva kan vi gjore? Svaret er **forebygging** og **beredskap** -- aa redusere saarbarheten og vaere bedre forberedt.

**Forebygging** handler om aa redusere risikoen foer en katastrofe inntreffer. Det betyr byggeforskrifter som sikrer at bygninger taoler jordskjelv. Det betyr arealplanlegging som unngaar aa bygge i flom- og skredutsatte omraader. Det betyr klimatilpasning -- aa forberede samfunnet paa et klima i endring, for eksempel ved aa dimensjonere avloepssystemene for mer nedboerensmoen.

**Beredskap** handler om aa vaere forberedt naar katastrofen slaar til. Det betyr varslingssystemer som gir folk tid til aa evakuere. Det betyr oevelelser saa folk vet hva de skal gjore. Det betyr lagre av mat, vann og medisinsk utstyr. Og det betyr organisasjoner som Roeede Kors, Sivilforsvaret og kommunale beredskapsavdelinger som er klare til aa rykke ut.

**Klimatilpasning** er et relativt nytt begrep som handler om aa tilpasse samfunnet til de klimaendringene som allerede skjer og som vil komme. Selv om vi klarer aa kutte utslippene, vil klimaet fortsette aa endre seg i tiaar framover paa grunn av gassene vi allerede har sluppet ut. Derfor maa vi baade redusere utslipp (det vi kaller mitigering) og tilpasse oss (adaptasjon).

Det finnes et tydelig moenster i hvem som rammes hardest av naturkatastrofer: fattige land, fattige mennesker og marginaliserte grupper. Kvinner, barn, eldre og funksjonshemmede er ofte mest saarbare. Rettferdig klimapolitikk maa derfor ogsaa vaere sosialpolitikk -- det handler om aa beskytte de mest saarbare.`,
    },
    {
      id: 'samfunnsfag-10-15-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-15-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa beredskap og forebygging:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-15-n-quiz2-q0',
            task: 'Hva er forskjellen mellom forebygging og beredskap?',
            options: [
              { id: 'a', text: 'Det er det samme', isCorrect: false },
              { id: 'b', text: 'Forebygging reduserer risiko foer katastrofen, beredskap handler om aa vaere forberedt naar den skjer', isCorrect: true },
              { id: 'c', text: 'Beredskap er bare for militaeret', isCorrect: false },
              { id: 'd', text: 'Forebygging er umulig ved naturkatastrofer', isCorrect: false },
            ],
            solution: 'Forebygging handler om aa redusere risikoen foer katastrofen (byggeforskrifter, arealplanlegging). Beredskap handler om aa vaere forberedt naar den skjer (varsling, evakuering, oevelelser).',
          },
          {
            id: 'samfunnsfag-10-15-n-quiz2-q1',
            task: 'Hva betyr klimatilpasning?',
            options: [
              { id: 'a', text: 'Aa stoppe alle klimaendringer', isCorrect: false },
              { id: 'b', text: 'Aa flytte alle mennesker til sikre omraader', isCorrect: false },
              { id: 'c', text: 'Aa tilpasse samfunnet til klimaendringer som allerede skjer og vil komme', isCorrect: true },
              { id: 'd', text: 'Aa slutte aa bruke fossil energi', isCorrect: false },
            ],
            solution: 'Klimatilpasning handler om aa tilpasse samfunnet til klimaendringer -- for eksempel ved aa dimensjonere avloepssystemer for mer regn eller unngaa bygging i flomfarlige omraader.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-15-n-summary',
      type: 'text',
      content: `## Oppsummering

En **naturkatastrofe** oppstaar naar en naturhendelse rammer et saarbart samfunn. **Saarbarhet** -- ikke styrken paa hendelsen -- avgjoer konsekvensene. Fattige land rammes alltid hardest. Naturhendelser kan vaere geologiske (jordskjelv, vulkaner), meteorologiske (stormer, toerke) eller hydrologiske (flom, skred).

**Klimaendringer** gjor vaerrelaterte hendelser hyppigere og kraftigere. **Forebygging** reduserer risiko (byggeforskrifter, arealplanlegging), mens **beredskap** handler om aa vaere forberedt (varsling, evakuering). **Klimatilpasning** er aa tilpasse samfunnet til endringer som allerede skjer. Rettferdig klimapolitikk maa beskytte de mest saarbare.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 16 NARRATIV: Arealbruk og interessekonflikter
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_16_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-16-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '16',
  title: 'Arealbruk og interessekonflikter',
  subtitle: 'Narrativ versjon',
  description: 'Historien om kampen om Norges areal -- fra vindkraft mot villrein til boligbygging mot matjord, og hvordan demokratiet avgjoer hvem som faar bruke landet.',
  estimatedMinutes: 35,
  competenceGoals: [
    'undersøke korleis menneskeleg aktivitet har ført til endringar i naturen, og drøfte korleis ein kan ta vare på naturmangfaldet',
    'utforske og presentere ei aktuell samfunnsfagleg problemstilling og drøfte ulike løysingsforslag',
  ],
  linkedChapterId: 'samfunnsfag-10-16',
  content: [
    {
      id: 'samfunnsfag-10-16-n-intro',
      type: 'text',
      content: `## Hvem eier Norge?

Norge er et langstrakt land med enorme naturomraader -- fjell, fjorder, skoger og vidder. Men selv om landet er stort, er det overraskende lite av det som er egnet for boligbygging, jordbruk eller naeringsvirksomhet. Bare tre prosent av Norges areal er dyrket mark. Det betyr at kampen om arealene er hard -- og full av konflikter.

**Arealbruk** handler om hvordan vi velger aa bruke jordens overflate. Skal et omraade brukes til boligbygging, jordbruk, vindkraft, naturvern, reindrift eller friluftsliv? Hvert valg utelukker andre muligheter, og nesten alltid er det noen som mener at arealet burde brukes til noe annet.

Slike konflikter kalles **interessekonflikter**, og de staar sentralt i samfunnsfaget fordi de handler om verdier, makt og demokrati. Hvem bestemmer hva et omraade skal brukes til? Hvem taper og hvem vinner? Og finnes det loesninger som alle kan leve med?

Det kanskje beste eksempelet paa en slik konflikt i Norge de siste aarene er **vindkraftdebatten** -- en sak der klima, natur, urfolksrettigheter og oekonomiske interesser kolliderer paa spektakulaert vis.`,
    },
    {
      id: 'samfunnsfag-10-16-n-section1',
      type: 'text',
      content: `## Vindkraft -- naar klima moeter natur

Paa den ene siden: vi trenger ren energi for aa erstatte fossil energi og naa klimamaalene. Vindkraft er en av de raskeste og billigste maatene aa produsere fornybar energi paa. Paa den andre siden: vindmoeller krever store arealer, de forstyrrer landskap, dyreliv og mennesker, og i mange tilfeller er de bygget paa omraader der samer har drevet reindrift i hundrevis av aar.

Konflikten paa **Fosen** er et tydelig eksempel. I 2021 slo Hoeyesterett fast at vindturbinene paa Fosen var bygget i strid med samenes rett til kulturutoevelse -- altsaa et brudd paa menneskerettighetene. Likevel sto turbinene der fortsatt i lang tid etterpaa. Saken reiste grunnleggende spoersmaal om demokrati, rettsstat og urfolks rettigheter i Norge.

Vindkraftdebatten viser at **baerekraft** ikke bare handler om klima. Et tiltak som er bra for klimaet kan vaere daarlig for naturen eller for urfolks rettigheter. Ekte baerekraft krever at vi ser alle dimensjonene samlet -- miljoe, oekonomi og sosial rettferdighet.

Lignende konflikter finnes overalt i norsk arealforvaltning. Skal vi bygge nye boliger paa verdifull matjord naer storbyene? Skal vi tillate hyttebygging i fjellomraader der villreinen trenger plass? Skal vi aapne nye havomraader for oppdrett, selv om det kan skade villfisken? Disse spoersmaalene har ingen enkle svar.`,
    },
    {
      id: 'samfunnsfag-10-16-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-16-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa arealbruk og vindkraft:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-16-n-quiz1-q0',
            task: 'Hva slo Hoeyesterett fast i Fosen-saken?',
            options: [
              { id: 'a', text: 'At vindkraften var lovlig og burde utbygges videre', isCorrect: false },
              { id: 'b', text: 'At vindturbinene var bygget i strid med samenes rett til kulturutoevelse', isCorrect: true },
              { id: 'c', text: 'At samene ikke hadde rett til reindrift', isCorrect: false },
              { id: 'd', text: 'At all vindkraft i Norge skulle stoppes', isCorrect: false },
            ],
            solution: 'Hoeyesterett slo i 2021 fast at vindturbinene paa Fosen var bygget i strid med samenes rett til kulturutoevelse -- et menneskerettighetsbrudd. Saken viser spenningen mellom klima og urfolksrettigheter.',
          },
          {
            id: 'samfunnsfag-10-16-n-quiz1-q1',
            task: 'Hvorfor er arealbruk saerlig utfordrende i Norge?',
            options: [
              { id: 'a', text: 'Fordi Norge er saa lite', isCorrect: false },
              { id: 'b', text: 'Fordi bare rundt tre prosent av arealet er dyrket mark', isCorrect: true },
              { id: 'c', text: 'Fordi ingen bor paa landsbygda', isCorrect: false },
              { id: 'd', text: 'Fordi det ikke er noen lover om arealbruk', isCorrect: false },
            ],
            solution: 'Selv om Norge er langstrakt, er lite av arealet egnet for bygging og jordbruk. Bare ca. tre prosent er dyrket mark. Det gjor konkurransen om arealene hard.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-16-n-section2',
      type: 'text',
      content: `## Naturvern og arealplanlegging

**Naturvern** handler om aa beskytte naturmangfoldet -- de utallige artene av planter, dyr og oekosystemer som utgjor den levende verden. Norge har et saerlig ansvar for villreinen, fordi vi har den siste bestanden av vill europeisk fjellrein. Men villreinen trenger store, sammenhengende omraader for aa vandre og finne mat -- omraader som krymper naar hyttefelt, veier og vindmoeller bygges.

Biologisk mangfold er truet over hele verden. FN har kalt det en krise paa linje med klimakrisen. Arealendringer -- at naturomraader omdannes til jordbruk, bygg eller infrastruktur -- er den stoerste trusselen mot artsmangfoldet globalt. I Norge er tap av leveomraader den viktigste aarsaken til at arter havner paa roeedelisten.

**Arealplanlegging** er verktoeyet demokratiet bruker for aa avgjoere hvordan arealene skal brukes. I Norge har kommunene hovedansvaret for arealplanlegging gjennom **plan- og bygningsloven**. Kommuneplanen bestemmer hva ulike omraader skal brukes til: bolig, naeering, landbruk, friluftsliv eller vern. Prosessen skal vaere aapen og demokratisk, med mulighet for innbyggere og organisasjoner til aa komme med innspill.

Men i praksis er det ofte sterke oekonomiske interesser som vinner. Utbyggere oensker aa bygge der det er mest loeennsomt, som ofte er paa natur- eller jordbruksomraader naer byene. Boeneder oensker hytter i fjellheimen. Energiselskaper vil bygge vindmoeller der det blaeser mest. Aa finne en balanse mellom utvikling og vern er en av de vanskeligste oppgavene i norsk politikk.

Det viktige er at disse avgjoerelsene tas demokratisk -- at alle stemmer blir hoert, at fakta legges til grunn, og at konsekvensene for natur og mennesker vurderes grundig. Arealplanlegging er demokrati i praksis: det er her store ord om baerekraft og naturvern moeter virkeligheten.`,
    },
    {
      id: 'samfunnsfag-10-16-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-16-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa naturvern og arealplanlegging:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-16-n-quiz2-q0',
            task: 'Hva er den stoerste trusselen mot biologisk mangfold globalt?',
            options: [
              { id: 'a', text: 'Klimaendringer alene', isCorrect: false },
              { id: 'b', text: 'Arealendringer -- at naturomraader omdannes til jordbruk, bygg eller infrastruktur', isCorrect: true },
              { id: 'c', text: 'Jakt og fiske', isCorrect: false },
              { id: 'd', text: 'Naturlige aarsaker', isCorrect: false },
            ],
            solution: 'Arealendringer er den stoerste trusselen mot artsmangfoldet globalt. Naar naturomraader omdannes til jordbruk, bygg eller infrastruktur, mister arter leveomraadene sine.',
          },
          {
            id: 'samfunnsfag-10-16-n-quiz2-q1',
            task: 'Hvem har hovedansvaret for arealplanlegging i Norge?',
            options: [
              { id: 'a', text: 'Staten', isCorrect: false },
              { id: 'b', text: 'Fylkeskommunen', isCorrect: false },
              { id: 'c', text: 'Kommunene', isCorrect: true },
              { id: 'd', text: 'FN', isCorrect: false },
            ],
            solution: 'Kommunene har hovedansvaret for arealplanlegging gjennom plan- og bygningsloven. Kommuneplanen bestemmer hva ulike omraader skal brukes til.',
          },
          {
            id: 'samfunnsfag-10-16-n-quiz2-q2',
            task: 'Hvorfor har Norge et saerlig ansvar for villreinen?',
            options: [
              { id: 'a', text: 'Fordi Norge er det eneste landet med rein', isCorrect: false },
              { id: 'b', text: 'Fordi vi har den siste bestanden av vill europeisk fjellrein', isCorrect: true },
              { id: 'c', text: 'Fordi villrein er Norges nasjonaldyr', isCorrect: false },
              { id: 'd', text: 'Fordi EU har gitt oss ansvaret', isCorrect: false },
            ],
            solution: 'Norge har den siste bestanden av vill europeisk fjellrein. Villreinen trenger store, sammenhengende vandring områder som trues av hyttebygging, veier og annen utbygging.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-16-n-summary',
      type: 'text',
      content: `## Oppsummering

**Arealbruk** handler om hvordan vi bruker jordens overflate, og forer ofte til **interessekonflikter** mellom ulike behov. Vindkraftdebatten -- saerlig **Fosen-saken** -- viser spenningen mellom klimapolitikk, naturvern og samenes rettigheter.

**Naturvern** beskytter biologisk mangfold, som trues mest av arealendringer. Norge har saerlig ansvar for villreinen. **Arealplanlegging** gjennom kommunene og plan- og bygningsloven er det demokratiske verktoeyet for aa avgjoere arealbruk. Utfordringen er aa balansere utvikling, oekonomiske interesser og vern av natur og kultur -- det er demokrati i praksis.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Alle narrativkapitler i del 4
// ============================================================================

export const SAMFUNNSFAG_10_NARRATIV_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSFAG_10_11_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_12_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_13_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_14_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_15_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_16_NARRATIV,
];
