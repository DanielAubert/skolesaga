/**
 * Tekstbok innhold for Naturfag VG1 - NARRATIV VERSJON DEL 1B
 * Seksjon 1: Naturvitenskapens tenkemåte (Kapittel 1.4-1.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.4 NARRATIV: Risikovurdering og HMS
// ============================================================================

export const CHAPTER_NAT_VG1_1_4_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-1-4-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '1.4',
  title: 'Risikovurdering og HMS',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om hvorfor sikkerhet i laboratoriet handler om mer enn bare regler -- det handler om å beskytte deg selv, andre og miljøet gjennom kunnskap og planlegging.',
  estimatedMinutes: 40,
  competenceGoals: [
    'risikovurdere egne forsøk og håndtere avfallet fra disse på en forsvarlig måte',
  ],
  linkedChapterId: 'nat-vg1-1-4',
  content: [
    {
      id: 'nat-vg1-1-4-n-intro',
      type: 'text',
      content: `## Når noe går galt på laboratoriet

Forestill deg at du er på skolens laboratorium. Klassen skal undersøke kjemiske reaksjoner, og du gleder deg til å se hva som skjer når du blander ulike stoffer. Så hører du et rop fra nabogruppa: noen har sølt saltsyre på hånden. Læreren løper bort, skyller med vann og sjekker at det ikke er alvorlig. Men det hele kunne vært unngått.

Hvert år skjer det uhell på skolelaboratorier som kunne vært forhindret med bedre planlegging. **HMS** -- som står for **Helse, Miljø og Sikkerhet** -- er ikke bare et sett med kjedelige regler. Det er et rammeverk som beskytter deg, medelevene dine og miljøet. Når du forstår *hvorfor* reglene finnes, blir de plutselig meningsfulle.

Tenk på det slik: en kirurg vasker hendene grundig før en operasjon, ikke fordi noen tvinger henne, men fordi hun vet hva som kan skje om hun lar være. På laboratoriet er det akkurat det samme. Du bruker vernebriller fordi du vet at en sprut i øyet kan gi varige skader. Du leser sikkerhetsdatabladet fordi du vet at ulike kjemikalier krever ulik håndtering. Du planlegger forsøket fordi du vet at det å tenke gjennom farene på forhånd er den beste måten å unngå dem på.

I dette kapittelet skal vi gå gjennom det du trenger for å jobbe trygt og ansvarlig: fra sikkerhetsregler og faresymboler til systematisk risikovurdering og forsvarlig avfallshåndtering.`,
    },
    {
      id: 'nat-vg1-1-4-n-section1',
      type: 'text',
      content: `## Grunnreglene -- ditt sikkerhetsnett

Det finnes noen grunnleggende sikkerhetsregler som gjelder hver gang du arbeider på laboratoriet. Disse reglene er ikke tilfeldige -- hver eneste av dem eksisterer fordi noen en gang ble skadet.

Den aller viktigste regelen er å *alltid bruke påbudt verneutstyr*. Vernebriller er obligatoriske i nesten alle forsøk fordi øynene er ekstremt sårbare. Hansker beskytter hendene mot etsende stoffer, og labfrakken beskytter klærne og huden. Det kan virke overdrevet å ta på seg alt dette bare for å blande litt eddik og natron, men poenget er å bygge gode vaner som også holder deg trygg når du jobber med farligere stoffer.

Før du i det hele tatt åpner en flaske med et kjemikalie, skal du ha lest **sikkerhetsdatabladet**, ofte forkortet **SDS**. Dette dokumentet inneholder alt du trenger å vite: hvilke farer stoffet utgjør, hva slags verneutstyr du trenger, hva du gjør hvis du søler det på deg, og hvordan du kvitter deg med rester etterpå. Du finner sikkerhetsdatablad på emballasjen, hos leverandøren eller i digitale databaser som EcoOnline.

Før forsøket starter skal du også vite hvor nødutstyret befinner seg. Hvor er *øyedusjen*? Hvor er *brannteppet*? Hvor er *førstehjelpsskrinnet*? Disse spørsmålene skal du alltid kunne svare på. Og hvis noe går galt -- uansett om det er en liten søl eller noe mer alvorlig -- er regelen enkel: meld fra til læreren umiddelbart. Det er aldri pinlig å be om hjelp. Det som er pinlig, er å late som ingenting og la situasjonen bli verre.

To regler som mange ikke tenker over: du skal aldri smake på eller lukte direkte på kjemikalier. Vil du sjekke lukten, bruker du *vifteteknikken* -- du holder flasken på avstand og vifter forsiktig dampen mot nesen med hånden. Og du skal aldri spise eller drikke i laboratoriet, fordi du risikerer å få i deg stoffer som ikke hører hjemme i kroppen.`,
    },
    {
      id: 'nat-vg1-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på grunnleggende laboratoriesikkerhet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-1-4-n-quiz1-q0',
            task: 'Hva står forkortelsen HMS for?',
            options: [
              { id: 'a', text: 'Helse, Medisin og Sikkerhet', isCorrect: false },
              { id: 'b', text: 'Helse, Miljø og Sikkerhet', isCorrect: true },
              { id: 'c', text: 'Håndtering, Merking og Sortering', isCorrect: false },
              { id: 'd', text: 'Hygiene, Miljøvern og Sikkerhetsrutiner', isCorrect: false },
            ],
            solution:
              'HMS står for Helse, Miljø og Sikkerhet. Det er et rammeverk for å jobbe trygt og ansvarlig, og det gjelder i alle laboratorier og arbeidsplasser.',
          },
          {
            id: 'nat-vg1-1-4-n-quiz1-q1',
            task: 'Hva er et sikkerhetsdatablad (SDS)?',
            options: [
              { id: 'a', text: 'Et skjema du fyller ut etter et forsøk', isCorrect: false },
              { id: 'b', text: 'Et dokument som beskriver farene ved et kjemikalie og hvordan det skal håndteres', isCorrect: true },
              { id: 'c', text: 'En liste over alt verneutstyr som finnes på laboratoriet', isCorrect: false },
              { id: 'd', text: 'Et sertifikat som viser at laboratoriet er godkjent', isCorrect: false },
            ],
            solution:
              'Et sikkerhetsdatablad (SDS) er et detaljert dokument som gir informasjon om et kjemikalies farer, nødvendig verneutstyr, førstehjelptiltak og avfallshåndtering. Du finner det på emballasjen, hos leverandøren eller i databaser som EcoOnline.',
          },
          {
            id: 'nat-vg1-1-4-n-quiz1-q2',
            task: 'Hvorfor skal du bruke vifteteknikk når du skal kjenne lukten av et kjemikalie?',
            options: [
              { id: 'a', text: 'Fordi lukten blir sterkere og lettere å identifisere', isCorrect: false },
              { id: 'b', text: 'Fordi det ser mer profesjonelt ut', isCorrect: false },
              { id: 'c', text: 'Fordi det hindrer deg i å inhalere konsentrerte damper som kan være giftige eller irriterende', isCorrect: true },
              { id: 'd', text: 'Fordi det er enklere å lukte med denne teknikken', isCorrect: false },
            ],
            solution:
              'Ved å vifte dampene forsiktig mot nesen med hånden, unngår du å inhalere konsentrerte damper direkte fra flasken. Noen kjemikalier har damper som kan irritere luftveiene eller til og med være giftige.',
          },
          {
            id: 'nat-vg1-1-4-n-quiz1-q3',
            task: 'Hva er det første du skal gjøre hvis du søler et kjemikalie på huden?',
            options: [
              { id: 'a', text: 'Tørke det av med papirhåndkle', isCorrect: false },
              { id: 'b', text: 'Fortsette forsøket og vaske hendene etterpå', isCorrect: false },
              { id: 'c', text: 'Skylle med mye vann og varsle læreren', isCorrect: true },
              { id: 'd', text: 'Påføre et nøytraliserende middel umiddelbart', isCorrect: false },
            ],
            solution:
              'Ved søl på huden er det viktigste å skylle med rikelige mengder vann umiddelbart, og deretter varsle læreren. For etsende stoffer skal du skylle i minst 15 minutter. Å tørke med papir kan spre stoffet, og å fortsette uten å gjøre noe kan føre til alvorlige skader.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-1-4-n-section2',
      type: 'text',
      content: `## GHS -- faresymbolene som taler et internasjonalt språk

Tenk deg at du er på ferie i Japan og kjøper et rengjøringsmiddel. Du kan ikke lese japansk, men på flasken er det et kjent rødt ruteformet symbol med en flamme inni. Du vet umiddelbart at produktet er brannfarlig. Slik fungerer **GHS -- Globally Harmonized System** -- et internasjonalt system for merking av kjemikalier som gjør at du kan forstå farene uansett hvor i verden du befinner deg.

GHS bruker ni faresymboler, alle formet som røde ruter på hvit bakgrunn. Hvert symbol forteller deg noe spesifikt om hvilken fare kjemikaliet utgjør. **Brannfarlig** (flamme) betyr at stoffet kan antennes lett, og du finner dette symbolet på for eksempel etanol, aceton og bensin. **Etsende** (korrosjon) advarer om at stoffet kan gi alvorlige skader på hud og øyne, som sterke syrer og baser. **Akutt giftig** (hodeskalle) forteller at stoffet kan være livstruende ved svelging eller innånding, slik tilfellet er med metanol og cyanid.

Men det finnes også symboler som mange glemmer. **Helsefare** (person med stjerneformet skade) betyr at stoffet kan forårsake langsiktige helseskader som kreft eller mutasjoner -- formaldehyd og asbest hører hjemme her. **Miljøfare** (død fisk og tre) advarer om at stoffet er skadelig for naturen, spesielt vannmiljøet. Tungmetaller og oljeprodukter bærer dette symbolet. **Oksiderende** (flamme over sirkel) betyr at stoffet kan forsterke en brann ved å avgi oksygen, slik hydrogenperoksid og kaliumpermanganat gjør. **Gass under trykk** advarer om at innholdet kan eksplodere ved oppvarming, og **eksplosiv** betyr at stoffet kan eksplodere ved støt eller varme.

Et viktig poeng som mange overser: ett og samme kjemikalie kan ha *flere* faresymboler. Konsentrert saltsyre er for eksempel både etsende og irriterende for luftveiene. Og konsentrasjonen spiller inn -- fortynnet saltsyre er langt mindre farlig enn konsentrert. Derfor må du alltid lese hele sikkerhetsdatabladet, ikke bare se på symbolene.`,
    },
    {
      id: 'nat-vg1-1-4-n-section3',
      type: 'text',
      content: `## Sikkerhetsdatabladet -- kjemikaliets pasientjournal

Hvis du noen gang har vært hos legen, vet du at journalen din inneholder alt som er viktig å vite om helsen din: allergier, tidligere sykdommer, medisiner du tar. Et **sikkerhetsdatablad (SDS)** er den tilsvarende journalen for et kjemikalie. Det inneholder all informasjonen du trenger for å håndtere stoffet trygt.

Dokumentet er delt inn i 16 deler, men du trenger ikke pugge alle. De viktigste delene er de første: **del 1-3** forteller deg hva kjemikaliet heter, hvilke faresymboler det har, og hva du skal gjøre som førstehjelp. For eksempel vil du her finne at ved hudkontakt med saltsyre skal du skylle med vann i minst 15 minutter.

**Del 7-8** handler om håndtering og verneutstyr. Her står det hvordan du skal oppbevare kjemikaliet, og nøyaktig hvilke hansker, briller og masker du trenger. Ikke alle hansker er like -- noen materaler motstår syrer men ikke løsemidler, og omvendt. Nitrilhansker er ofte et godt valg, men SDS-en forteller deg hva som er riktig.

**Del 12-16** dekker miljøfare, avfallshåndtering og transport. Her finner du ut om stoffet er farlig for vannmiljøet, og nøyaktig hvordan du skal kvitte deg med rester.

La oss ta et konkret eksempel. Hvis du skal bruke saltsyre i et forsøk, vil SDS fortelle deg følgende: Faresymbolet er *etsende*. H-setningen H314 advarer om at stoffet gir alvorlige etseskader på hud og øyne, mens H335 sier at det kan irritere luftveiene. Du trenger tette vernebriller, nitrilhansker og labfrakk, og du skal arbeide i avtrekksskap når du bruker konsentrert syre. En gyllen regel når du skal fortynne syre er å alltid *tilsette syre til vann*, aldri omvendt -- fordi reaksjonen med vann frigjør mye varme, og å helle vann i syre kan føre til farlig spruting. Avfall av saltsyre skal nøytraliseres med base før det kan kastes.`,
    },
    {
      id: 'nat-vg1-1-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på faresymboler og sikkerhetsdatablad:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-1-4-n-quiz2-q0',
            task: 'Hva kjennetegner GHS-faresymbolene visuelt?',
            options: [
              { id: 'a', text: 'Blå sirkler med hvite symboler', isCorrect: false },
              { id: 'b', text: 'Gule trekanter med svarte symboler', isCorrect: false },
              { id: 'c', text: 'Røde ruter på hvit bakgrunn', isCorrect: true },
              { id: 'd', text: 'Grønne firkanter med hvite symboler', isCorrect: false },
            ],
            solution:
              'GHS-faresymbolene er utformet som røde ruter (diamantform) på hvit bakgrunn. Det finnes ni ulike symboler som dekker farer som brannfare, etsing, giftighet, miljøfare og mer.',
          },
          {
            id: 'nat-vg1-1-4-n-quiz2-q1',
            task: 'Hvorfor kan ett kjemikalie ha flere faresymboler?',
            options: [
              { id: 'a', text: 'Fordi ulike land bruker ulike symboler', isCorrect: false },
              { id: 'b', text: 'Fordi symbolene viser forskjellige merker av samme produkt', isCorrect: false },
              { id: 'c', text: 'Fordi et stoff kan utgjøre flere typer fare samtidig', isCorrect: true },
              { id: 'd', text: 'Fordi det er en designfeil i GHS-systemet', isCorrect: false },
            ],
            solution:
              'Et kjemikalie kan ha flere farlige egenskaper samtidig. For eksempel er konsentrert saltsyre både etsende og irriterende for luftveiene, og bærer derfor flere faresymboler. Du må lese hele SDS for å forstå alle farene.',
          },
          {
            id: 'nat-vg1-1-4-n-quiz2-q2',
            task: 'Hva er den viktige regelen når du skal fortynne en syre?',
            options: [
              { id: 'a', text: 'Hell vannet i syren raskt for å få det unnagjort', isCorrect: false },
              { id: 'b', text: 'Tilsett alltid syre til vann, aldri omvendt', isCorrect: true },
              { id: 'c', text: 'Bland syre og vann i like mengder samtidig', isCorrect: false },
              { id: 'd', text: 'Det spiller ingen rolle hvilken rekkefølge du bruker', isCorrect: false },
            ],
            solution:
              'Du skal alltid tilsette syre til vann. Reaksjonen mellom syre og vann frigjør mye varme (eksotermisk reaksjon). Hvis du heller vann i konsentrert syre, kan vannet koke momentant og sprute syre rundt omkring. Ved å tilsette syre i vann fordeles varmen i det store vannvolumet.',
          },
          {
            id: 'nat-vg1-1-4-n-quiz2-q3',
            task: 'Hvilket GHS-symbol advarer om at et stoff kan forårsake langsiktige helseskader som kreft?',
            options: [
              { id: 'a', text: 'Akutt giftig (hodeskalle)', isCorrect: false },
              { id: 'b', text: 'Etsende (korrosjonssymbol)', isCorrect: false },
              { id: 'c', text: 'Irriterende (utropstegn)', isCorrect: false },
              { id: 'd', text: 'Helsefare (person med stjerneformet skade)', isCorrect: true },
            ],
            solution:
              'Symbolet for helsefare (en person med en stjerneformet skade på brystet) brukes for stoffer som kan forårsake langsiktige, alvorlige helseskader som kreft, mutasjoner eller organskader. Eksempler er formaldehyd og asbest. Dette er forskjellig fra symbolet for akutt giftighet (hodeskalle), som handler om umiddelbar fare.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-1-4-n-section4',
      type: 'text',
      content: `## Risikovurdering -- å tenke før du handler

Nå kommer vi til selve kjernen i laboratoriesikkerheten: **risikovurdering**. Det høres kanskje byråkratisk ut, men egentlig gjør du uformelle risikovurderinger hele tiden. Når du ser deg for før du krysser veien, vurderer du risikoen for å bli påkjørt. Når du smaker på maten for å sjekke om den er varm nok, vurderer du risikoen for å brenne deg. En formell risikovurdering er bare en mer systematisk versjon av det samme.

Den grunnleggende formelen er enkel: **Risiko = Sannsynlighet x Konsekvens**. Noe som har lav sannsynlighet for å skje *og* lave konsekvenser hvis det skjer, er lav risiko. Men noe som har høy sannsynlighet *eller* høye konsekvenser -- eller begge deler -- krever tiltak.

En risikovurdering følger seks trinn. I **trinn 1** identifiserer du farene: Hvilke kjemikalier brukes? Brukes varme, elektrisitet eller trykk? Kan det dannes farlige gasser? I **trinn 2** vurderer du hvem som kan bli skadet -- deg selv, medelever, læreren, eller kanskje miljøet. I **trinn 3** vurderer du selve risikoen ved å kombinere sannsynlighet og konsekvens. En fare med lav sannsynlighet og lav konsekvens er akseptabel, mens en med høy sannsynlighet og høy konsekvens er uakseptabel og må reduseres.

I **trinn 4** planlegger du tiltak. Kan faren fjernes helt, for eksempel ved å erstatte et farlig stoff med et tryggere alternativ? Kan den reduseres, for eksempel ved å bruke mindre mengder? Verneutstyr er alltid siste forsvarslinje -- først prøver du å fjerne eller redusere faren. I **trinn 5** planlegger du for uhell: Hva gjør du hvis noe søles? Hva gjør du hvis noen får det på seg? Hvor er nødutstyret? Og til slutt, i **trinn 6**, dokumenterer du risikovurderingen og deler den med alle som deltar i forsøket.

La oss ta et eksempel. Du skal varme opp vann med bunsenbrenneren og måle temperaturen. Farene inkluderer brannskade fra flammen og det kokende vannet, brannfare fra den åpne flammen, og fare for at glasskoppen kan sprekke ved rask temperaturendring. Risikoen for brannskade er moderat fordi sannsynligheten er middels og konsekvensen kan være alvorlig. Tiltakene dine inkluderer vernebriller, å ha langt hår bundet tilbake, å fjerne brennbare materialer fra arbeidsområdet, å bruke gripetang for varme gjenstander, og å ha brannteppe tilgjengelig. Med disse tiltakene kan forsøket gjennomføres trygt.`,
    },
    {
      id: 'nat-vg1-1-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på risikovurdering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-1-4-n-quiz3-q0',
            task: 'Hva er formelen for risiko?',
            options: [
              { id: 'a', text: 'Risiko = Fare + Konsekvens', isCorrect: false },
              { id: 'b', text: 'Risiko = Sannsynlighet + Konsekvens', isCorrect: false },
              { id: 'c', text: 'Risiko = Sannsynlighet x Konsekvens', isCorrect: true },
              { id: 'd', text: 'Risiko = Fare x Verneutstyr', isCorrect: false },
            ],
            solution:
              'Risiko beregnes som Sannsynlighet x Konsekvens. En fare med lav sannsynlighet men høy konsekvens gir moderat risiko, og en med høy sannsynlighet og høy konsekvens gir uakseptabel risiko som må reduseres.',
          },
          {
            id: 'nat-vg1-1-4-n-quiz3-q1',
            task: 'Hva er det første trinnet i en risikovurdering?',
            options: [
              { id: 'a', text: 'Sette opp verneutstyr', isCorrect: false },
              { id: 'b', text: 'Identifisere farene', isCorrect: true },
              { id: 'c', text: 'Dokumentere vurderingen', isCorrect: false },
              { id: 'd', text: 'Planlegge tiltak for uhell', isCorrect: false },
            ],
            solution:
              'Det første trinnet er å identifisere farene: Hvilke kjemikalier brukes? Brukes varme, elektrisitet eller trykk? Kan det dannes farlige gasser? Du må vite hva som kan gå galt før du kan vurdere risikoen og planlegge tiltak.',
          },
          {
            id: 'nat-vg1-1-4-n-quiz3-q2',
            task: 'Hva bør du prøve først for å håndtere en fare -- før du tar i bruk verneutstyr?',
            options: [
              { id: 'a', text: 'Ignorere faren hvis den er liten', isCorrect: false },
              { id: 'b', text: 'Prøve å fjerne eller redusere faren helt', isCorrect: true },
              { id: 'c', text: 'Øke sannsynligheten for at det går bra', isCorrect: false },
              { id: 'd', text: 'Be læreren gjøre forsøket i stedet', isCorrect: false },
            ],
            solution:
              'Verneutstyr er siste forsvarslinje. Først skal du prøve å fjerne faren helt (for eksempel erstatte et farlig stoff med et tryggere alternativ), eller redusere den (bruke mindre mengder, arbeide i avtrekksskap). Først når faren ikke kan elimineres, tyr du til verneutstyr.',
          },
          {
            id: 'nat-vg1-1-4-n-quiz3-q3',
            task: 'En fare har lav sannsynlighet men høy konsekvens. Hva er risikovurderingen?',
            options: [
              { id: 'a', text: 'Akseptabel -- lav sannsynlighet er det viktigste', isCorrect: false },
              { id: 'b', text: 'Uakseptabel -- forsøket kan ikke gjennomføres', isCorrect: false },
              { id: 'c', text: 'Moderat -- tiltak er nødvendig', isCorrect: true },
              { id: 'd', text: 'Lav risiko -- konsekvensen spiller ingen rolle', isCorrect: false },
            ],
            solution:
              'Selv om sannsynligheten er lav, gjør den høye konsekvensen at risikoen er moderat og tiltak er nødvendig. For eksempel er sannsynligheten for at saltsyre spruter i øynene lav, men konsekvensen kan være svært alvorlig -- derfor bruker du alltid tette vernebriller.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-1-4-n-section5',
      type: 'text',
      content: `## Avfallshåndtering -- ansvar for miljøet

Etter at forsøket er utført, gjenstår en viktig oppgave som mange tar for lett på: hva gjør du med restene? Riktig avfallshåndtering beskytter ikke bare mennesker, men også miljøet -- elver, innsjøer og det biologiske mangfoldet rundt oss.

Avfall i laboratoriet deles inn i tre hovedkategorier. **Ufarlig avfall** er stoffer som trygt kan skylles i vasken med mye vann eller kastes i vanlig søppel. Rester av vann, ufarlige saltløsninger i små mengder, nøytraliserte syrer og baser med pH mellom 6 og 8, og organiske stoffer som sukker og stivelse faller i denne kategorien.

**Kjemisk avfall** krever spesialhåndtering. Syrer og baser skal samles i egne beholdere -- og aldri blandes, fordi dette kan gi voldsomme reaksjoner. Organiske løsemidler som etanol og aceton er brannfarlige og skal i egne beholdere for brannfarlige væsker. Tungmetaller som bly, kvikksølv og sølv er giftige for miljøet og skal leveres som spesialavfall. Oksiderende stoffer krever også egen håndtering.

**Biologisk avfall** -- som bakteriekulturer fra forsøk i biologi -- skal autoklaveres (steriliseres med damp under trykk) før det kastes.

Hovedreglene er enkle å huske: Aldri bland ulike kjemikalier i samme avfallsbeholder. Merk alltid avfallsbeholdere tydelig med innhold. Nøytraliser syrer og baser før avhending hvis det er mulig. Spør læreren hvis du er usikker. Og minimer avfallet ved å bare bruke de mengdene du faktisk trenger.

De vanligste feilene som gjøres er å helle syrer og baser i samme beholder (noe som kan gi voldsom varmeutvikling og spruting), å helle organiske løsemidler i vasken (brannfare og miljøskade), og å kaste skarpe gjenstander som knust glass i vanlig søppel. Et godt eksempel: etter et forsøk med sølvnitratløsning skal du *aldri* helle resten i vasken. Sølv er et tungmetall som er giftig for vannlevende organismer. I stedet samler du det i en merket beholder for spesialavfall.`,
    },
    {
      id: 'nat-vg1-1-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på avfallshåndtering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-1-4-n-quiz4-q0',
            task: 'Hvilken type avfall kan skylles i vasken med vann?',
            options: [
              { id: 'a', text: 'Organiske løsemidler som etanol', isCorrect: false },
              { id: 'b', text: 'Tungmetallholdige løsninger', isCorrect: false },
              { id: 'c', text: 'Nøytraliserte løsninger med pH mellom 6 og 8', isCorrect: true },
              { id: 'd', text: 'Konsentrerte syrer', isCorrect: false },
            ],
            solution:
              'Nøytraliserte syrer og baser med pH mellom 6 og 8, samt ufarlige saltløsninger i små mengder, kan skylles i vasken med rikelig vann. Konsentrerte syrer, organiske løsemidler og tungmetaller krever spesialhåndtering.',
          },
          {
            id: 'nat-vg1-1-4-n-quiz4-q1',
            task: 'Hvorfor skal du aldri blande ulike kjemikalier i samme avfallsbeholder?',
            options: [
              { id: 'a', text: 'Fordi det gjør det vanskelig å resirkulere', isCorrect: false },
              { id: 'b', text: 'Fordi det kan gi farlige kjemiske reaksjoner', isCorrect: true },
              { id: 'c', text: 'Fordi det er vanskelig å merke beholderen riktig', isCorrect: false },
              { id: 'd', text: 'Fordi det er mot skolens reglement', isCorrect: false },
            ],
            solution:
              'Blanding av ulike kjemikalier kan gi uforutsigbare og farlige reaksjoner. For eksempel kan blanding av syrer og baser gi voldsom varmeutvikling og spruting, og blanding av klorholdige midler med syrer kan danne giftig klorgass.',
          },
          {
            id: 'nat-vg1-1-4-n-quiz4-q2',
            task: 'Hva skal du gjøre med rester av en sølvnitratløsning etter et forsøk?',
            options: [
              { id: 'a', text: 'Skylle den i vasken med mye vann', isCorrect: false },
              { id: 'b', text: 'La den fordampe i avtrekksskap', isCorrect: false },
              { id: 'c', text: 'Samle den i en merket beholder for spesialavfall', isCorrect: true },
              { id: 'd', text: 'Blande den med andre metallløsninger og kaste alt sammen', isCorrect: false },
            ],
            solution:
              'Sølvnitrat inneholder sølv, som er et tungmetall. Tungmetaller er giftige for vannlevende organismer og skal aldri slippes ut i avløpet. De skal samles i merkede beholdere for spesialavfall og leveres til forsvarlig behandling.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-1-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett at laboratoriesikkerhet handler om noe mer enn å følge regler -- det handler om å forstå *hvorfor* reglene finnes og ta ansvar for deg selv, andre og miljøet.

**HMS** (Helse, Miljø og Sikkerhet) er rammeverket for trygt arbeid. De grunnleggende sikkerhetsreglene inkluderer å alltid bruke påbudt verneutstyr, lese sikkerhetsdatablad før bruk av kjemikalier, vite hvor nødutstyret er, aldri smake på eller lukte direkte på kjemikalier, og melde fra til læreren umiddelbart ved uhell.

**GHS-faresymbolene** (Globally Harmonized System) er et internasjonalt merkesystem med ni symboler formet som røde ruter på hvit bakgrunn. De dekker farer som brannfare, etsing, akutt giftighet, helsefare, miljøfare, oksiderende egenskaper, gass under trykk og eksplosivitet. Et kjemikalie kan ha flere faresymboler, og konsentrasjon påvirker fareklassen.

**Sikkerhetsdatabladet (SDS)** er kjemikaliets komplette informasjonsdokument med 16 deler som dekker alt fra fareidentifikasjon og førstehjelp til verneutstyr og avfallshåndtering.

**Risikovurdering** følger seks trinn: identifisere farene, vurdere hvem som kan skades, vurdere risikoen (Sannsynlighet x Konsekvens), planlegge forebyggende tiltak, planlegge for uhell, og dokumentere vurderingen. Verneutstyr er alltid siste forsvarslinje etter at du har prøvd å fjerne eller redusere faren.

**Avfallshåndtering** krever at du sorterer riktig: ufarlig avfall kan skylles i vasken, kjemisk avfall krever spesialbeholdere (aldri bland!), og biologisk avfall må steriliseres. Spør alltid læreren hvis du er usikker.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5 NARRATIV: Programmering og modellering
// ============================================================================

export const CHAPTER_NAT_VG1_1_5_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-1-5-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '1.5',
  title: 'Programmering og modellering',
  subtitle: 'Narrativ versjon',
  description:
    'Opplev hvordan noen få linjer kode kan simulere radioaktiv nedbrytning, forutsi befolkningsvekst og avsløre mønstre i naturen som er usynlige for det blotte øye.',
  estimatedMinutes: 40,
  competenceGoals: [
    'vurdere og lage programmer som modellerer naturfaglige fenomener',
  ],
  linkedChapterId: 'nat-vg1-1-5',
  content: [
    {
      id: 'nat-vg1-1-5-n-intro',
      type: 'text',
      content: `## Da datamaskinen ble naturviterens beste venn

I 2020, da covid-19-pandemien rammet verden, sto politikere overfor umulige valg. Skulle de stenge ned samfunnet for å bremse smitten, eller holde alt åpent og håpe på det beste? Svaret kom i stor grad fra *programmering*. Forskere over hele verden bygget datamodeller som simulerte hvordan viruset ville spre seg under ulike scenarier. Modellene var ikke perfekte -- ingen modell er det -- men de ga verdifull innsikt som hjalp med å redde liv.

Dette er bare ett eksempel på hvordan programmering har blitt uunnværlig i naturvitenskapen. Meteorologer bruker programmer til å forutsi været. Biologer analyserer DNA-sekvenser med kode. Fysikere simulerer kollisjoner mellom partikler. Klimaforskere kjører modeller som viser hvordan temperaturen vil endre seg de neste hundre årene. I alle disse tilfellene gjør datamaskinen noe den er suveren til: den utfører millioner av beregninger raskere enn noe menneske kunne klart.

Men programmering handler ikke bare om hastighet. Det handler også om å *visualisere* data -- å gjøre tall om til grafer og diagrammer som hjelper oss å se mønstre vi ellers ville oversett. Det handler om å *simulere* scenarier vi ikke kan teste i virkeligheten -- du kan ikke sende en rakett til Mars for å teste hver eneste baneberegning, men du kan simulere den på en datamaskin tusenvis av ganger. Og det handler om å bygge *modeller* -- forenklede versjoner av virkeligheten som hjelper oss å forstå komplekse fenomener.

I dette kapittelet skal du lære grunnleggende programmering i Python og bruke det til å modellere naturfaglige fenomener. Du trenger ingen forkunnskaper -- vi starter fra begynnelsen.`,
    },
    {
      id: 'nat-vg1-1-5-n-section1',
      type: 'text',
      content: `## Variabler og beregninger -- byggesteinene i all programmering

Tenk deg at du har en kalkulator der du kan gi navn til tallene dine. I stedet for å huske at «5.0» er massen og «10» er tiden, kan du skrive \`masse = 5.0\` og \`tid = 10\`. Det er akkurat dette en **variabel** er: en navngitt boks som lagrer en verdi.

I Python, som er programmeringsspråket vi bruker i naturfag, finnes det ulike typer verdier. **Desimaltall** (kalt *float*) ser ut som \`masse = 5.0\`. **Heltall** (kalt *int*) ser ut som \`antall = 10\`. **Tekst** (kalt *string*) skrives med anførselstegn, som \`navn = "Natrium"\`. Og **sann/usann** (kalt *boolean*) skrives som \`er_metall = True\` eller \`er_metall = False\`.

Når du har lagret verdier i variabler, kan du gjøre beregninger med dem akkurat som på en kalkulator. Skriv \`avstand = 100\` og \`tid = 10\`, og så kan du beregne fart med \`fart = avstand / tid\`. Python støtter alle de vanlige matematiske operatorene: pluss (\`+\`), minus (\`-\`), gange (\`*\`), dele (\`/\`), og potens (\`**\`). Vil du beregne 5 opphøyd i andre, skriver du \`5 ** 2\`, som gir 25.

For å vise resultatet bruker du \`print\`-funksjonen. Skriver du \`print(f"Farten er {fart} m/s")\`, vil programmet vise «Farten er 10.0 m/s» på skjermen. Bokstaven \`f\` foran anførselstegnet betyr at du kan sette inn variabler direkte i teksten med krøllparenteser.

Python har også innebygde matematiske funksjoner. Ved å skrive \`import math\` får du tilgang til blant annet \`math.sqrt(16)\` for kvadratrot (gir 4.0), \`math.pi\` for pi (3.14159...), \`abs(-5)\` for absoluttverdi (gir 5), og \`round(3.7)\` for avrunding (gir 4).

La oss se på et konkret naturfaglig eksempel. Energien til en foton beregnes med formelen E = h · c / lambda, der h er Plancks konstant (6.626 x 10^-34 J·s), c er lyshastigheten (3 x 10^8 m/s), og lambda er bølgelengden. I Python skriver du dette som \`h = 6.626e-34\`, \`c = 3e8\`, \`bolgelengde = 550e-9\` (for grønt lys med bølgelengde 550 nanometer), og \`energi = h * c / bolgelengde\`. Resultatet er ca. 3.614 x 10^-19 Joule, eller omtrent 2.26 elektronvolt.`,
    },
    {
      id: 'nat-vg1-1-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på variabler og beregninger i Python:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-1-5-n-quiz1-q0',
            task: 'Hva er en variabel i programmering?',
            options: [
              { id: 'a', text: 'En matematisk formel som alltid gir samme svar', isCorrect: false },
              { id: 'b', text: 'En navngitt boks som lagrer en verdi', isCorrect: true },
              { id: 'c', text: 'Et tall som endrer seg tilfeldig', isCorrect: false },
              { id: 'd', text: 'En type kalkulator i Python', isCorrect: false },
            ],
            solution:
              'En variabel er en navngitt boks som lagrer en verdi. Du lager den ved å gi den et navn og tildele en verdi, for eksempel masse = 5.0. Verdien kan være et tall, tekst, sant/usant eller andre datatyper.',
          },
          {
            id: 'nat-vg1-1-5-n-quiz1-q1',
            task: 'Hva blir resultatet av koden: fart = 150 / 12?',
            options: [
              { id: 'a', text: '12', isCorrect: false },
              { id: 'b', text: '12.5', isCorrect: true },
              { id: 'c', text: '13', isCorrect: false },
              { id: 'd', text: '150', isCorrect: false },
            ],
            solution:
              'Divisjonsoperatoren / i Python gir alltid et desimaltall (float). 150 delt på 12 er 12.5. Hvis du ønsker heltallsdivisjon (bare hele tall), bruker du // i stedet, som ville gitt 12.',
          },
          {
            id: 'nat-vg1-1-5-n-quiz1-q2',
            task: 'Hva skriver du i Python for å beregne 3 opphøyd i fjerde (3^4)?',
            options: [
              { id: 'a', text: '3 ^ 4', isCorrect: false },
              { id: 'b', text: '3 * 4', isCorrect: false },
              { id: 'c', text: '3 ** 4', isCorrect: true },
              { id: 'd', text: 'pow(3, 4) er den eneste måten', isCorrect: false },
            ],
            solution:
              'I Python bruker du ** for potensregning. 3 ** 4 gir 81. Merk at ^ i Python ikke er potensoperatoren -- den brukes til noe annet (bitvis XOR). Du kan også bruke pow(3, 4), men ** er den vanligste måten.',
          },
          {
            id: 'nat-vg1-1-5-n-quiz1-q3',
            task: 'Hva gjør print(f"Svaret er {42 * 2}")?',
            options: [
              { id: 'a', text: 'Skriver ut: Svaret er {42 * 2}', isCorrect: false },
              { id: 'b', text: 'Gir en feilmelding', isCorrect: false },
              { id: 'c', text: 'Skriver ut: Svaret er 84', isCorrect: true },
              { id: 'd', text: 'Skriver ut: 84', isCorrect: false },
            ],
            solution:
              'Bokstaven f foran anførselstegnet lager en f-string, som betyr at Python evaluerer uttrykk inne i krøllparenteser. {42 * 2} beregnes til 84, og hele utskriften blir «Svaret er 84».',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-1-5-n-section2',
      type: 'text',
      content: `## Løkker -- når du trenger å gjenta noe tusen ganger

Forestill deg at du skal beregne posisjonen til en ball som faller fritt hvert tidsskritt i 100 sekunder. Du *kunne* skrive 100 separate beregninger -- men det ville vært vanvittig kjedelig og feilformbart. I stedet bruker du en **løkke**, som ber datamaskinen gjenta en handling så mange ganger du vil.

Den vanligste typen er **for-løkken**, som du bruker når du vet nøyaktig hvor mange ganger noe skal gjentas. I Python skriver du \`for i in range(1, 6):\` etterfulgt av den innrykkede koden du vil gjenta. Denne løkken kjører fem ganger, med \`i\` lik 1, 2, 3, 4 og 5 etter tur. Funksjonen \`range()\` genererer tallrekker: \`range(5)\` gir tallene 0 til 4, \`range(1, 6)\` gir 1 til 5, og \`range(0, 10, 2)\` gir 0, 2, 4, 6, 8 (altså med steg på 2).

Den andre typen er **while-løkken**, som fortsetter å kjøre *så lenge en betingelse er sann*. Tenk deg at du halverer en mengde radioaktivt stoff og vil finne ut hvor mange halveringer som trengs før mengden er under en viss grense. Du skriver \`while mengde >= 1:\` og lar løkken halvere mengden og telle antallet halveringer. Du vet ikke på forhånd hvor mange ganger løkken trenger å kjøre -- det avhenger av startmengden.

Løkker blir virkelig kraftige når du kombinerer dem med **lister**. En liste er en samling av verdier, skrevet med hakeparenteser: \`temperaturer = [18, 20, 22, 19, 21]\`. Du kan hente et enkelt element med \`temperaturer[0]\` (det første elementet, 18), finne antall elementer med \`len(temperaturer)\`, og legge til nye elementer med \`temperaturer.append(23)\`.

For eksempel, hvis du har en liste med temperaturmålinger og vil beregne gjennomsnittet, skriver du en for-løkke som legger sammen alle verdiene, og deler summen på antallet. Eller du kan bruke Pythons innebygde \`sum()\`-funksjon: \`gjennomsnitt = sum(temperaturer) / len(temperaturer)\`. For listen [18.5, 19.2, 20.1, 18.8, 19.5] gir dette 19.22 grader Celsius.`,
    },
    {
      id: 'nat-vg1-1-5-n-section3',
      type: 'text',
      content: `## Betingelser -- når programmet ditt må ta valg

I virkeligheten handler mange ting om valg. Hvis temperaturen er over 30 grader, tar du på deg shorts. Hvis det regner, tar du med paraply. Programmering fungerer på samme måte: **if-setninger** lar programmet ta beslutninger basert på betingelser.

I Python skriver du \`if temperatur > 30:\` etterfulgt av hva som skal skje i det tilfellet. Du kan legge til flere alternativer med \`elif\` (forkortelse for «else if») og et siste alternativ med \`else\` som fanger opp alt annet. For eksempel: *Hvis* temperaturen er over 30, skriv «Varmt!». *Eller hvis* den er over 20, skriv «Behagelig». *Eller hvis* den er over 10, skriv «Kjølig». *Ellers* skriv «Kaldt!».

For å sammenligne verdier bruker du sammenligningsoperatorer: \`==\` (er lik), \`!=\` (er ikke lik), \`>\` (større enn), \`<\` (mindre enn), \`>=\` (større enn eller lik), og \`<=\` (mindre enn eller lik). Merk at *er lik* skrives med dobbelt likhetstegn (\`==\`), ikke enkelt -- fordi enkelt likhetstegn brukes til å tildele verdier til variabler.

Du kan også kombinere flere betingelser med \`and\` (begge må være sanne), \`or\` (minst én må være sann), og \`not\` (snur sann til usann). For eksempel: \`if alder >= 15 and har_billett:\` sjekker om personen *både* er gammel nok *og* har billett.

Betingelser er spesielt nyttige i naturfaglig modellering. Tenk deg at du simulerer en populasjon: *hvis* populasjonen faller under en viss grense, er arten truet. Eller du simulerer en kjemisk reaksjon: *hvis* temperaturen er over et terskelpunkt, starter reaksjonen. Betingelser gjør modellene dine mer realistiske ved å la dem reagere på endringer -- akkurat som naturen gjør.`,
    },
    {
      id: 'nat-vg1-1-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på løkker og betingelser i Python:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-1-5-n-quiz2-q0',
            task: 'Hvilken type løkke bruker du når du vet nøyaktig hvor mange ganger koden skal gjentas?',
            options: [
              { id: 'a', text: 'while-løkke', isCorrect: false },
              { id: 'b', text: 'if-løkke', isCorrect: false },
              { id: 'c', text: 'for-løkke', isCorrect: true },
              { id: 'd', text: 'repeat-løkke', isCorrect: false },
            ],
            solution:
              'En for-løkke brukes når du vet hvor mange ganger koden skal kjøre. Du kan for eksempel skrive for i in range(100) for å kjøre koden 100 ganger. En while-løkke brukes når du ikke vet antallet på forhånd og heller vil kjøre så lenge en betingelse er sann.',
          },
          {
            id: 'nat-vg1-1-5-n-quiz2-q1',
            task: 'Hva produserer range(0, 10, 2)?',
            options: [
              { id: 'a', text: 'Tallene 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10', isCorrect: false },
              { id: 'b', text: 'Tallene 0, 2, 4, 6, 8', isCorrect: true },
              { id: 'c', text: 'Tallene 2, 4, 6, 8, 10', isCorrect: false },
              { id: 'd', text: 'Tallene 0, 2', isCorrect: false },
            ],
            solution:
              'range(0, 10, 2) genererer tall fra 0 opp til (men ikke inkludert) 10, med steg på 2. Resultatet er 0, 2, 4, 6, 8. Det tredje argumentet angir stegstørrelsen.',
          },
          {
            id: 'nat-vg1-1-5-n-quiz2-q2',
            task: 'Hva er forskjellen mellom = og == i Python?',
            options: [
              { id: 'a', text: 'De betyr det samme', isCorrect: false },
              { id: 'b', text: '= brukes for å tildele verdier, == brukes for å sammenligne', isCorrect: true },
              { id: 'c', text: '== brukes for å tildele verdier, = brukes for å sammenligne', isCorrect: false },
              { id: 'd', text: '= brukes for heltall, == brukes for desimaltall', isCorrect: false },
            ],
            solution:
              'Enkelt likhetstegn (=) tildeler en verdi til en variabel, for eksempel x = 5. Dobbelt likhetstegn (==) sammenligner to verdier og gir True eller False, for eksempel if x == 5 sjekker om x er lik 5.',
          },
          {
            id: 'nat-vg1-1-5-n-quiz2-q3',
            task: 'Hva betyr operatoren "and" i en if-setning?',
            options: [
              { id: 'a', text: 'Minst én av betingelsene må være sann', isCorrect: false },
              { id: 'b', text: 'Ingen av betingelsene trenger å være sann', isCorrect: false },
              { id: 'c', text: 'Den snur en betingelse fra sann til usann', isCorrect: false },
              { id: 'd', text: 'Begge betingelsene må være sanne', isCorrect: true },
            ],
            solution:
              'Operatoren "and" krever at begge betingelsene er sanne for at hele uttrykket skal være sant. For eksempel er "alder >= 15 and har_billett" bare sant hvis personen både er 15 eller eldre OG har billett. For "minst én må være sann" bruker du "or" i stedet.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-1-5-n-section4',
      type: 'text',
      content: `## Visualisering -- når tall blir til bilder

En tabell med hundre tall er vanskelig å forstå. Men en graf som viser de samme tallene? Den forteller deg umiddelbart om det er en trend, et mønster eller en avvikelse. **Visualisering** handler om å gjøre data synlig, og i Python bruker vi biblioteket **matplotlib** til dette.

Å lage en enkel graf er overraskende lett. Du importerer biblioteket med \`import matplotlib.pyplot as plt\`, lager to lister med x- og y-verdier, og bruker \`plt.plot(x, y)\` for å tegne grafen. Med \`plt.xlabel()\`, \`plt.ylabel()\` og \`plt.title()\` legger du til forklarende tekst, og \`plt.show()\` viser resultatet.

Du kan tilpasse utseendet med formatstrenger. For eksempel betyr \`'b-'\` blå linje, \`'r--'\` rød stiplet linje, \`'go'\` grønne sirkler, og \`'k^'\` svarte trekanter. Vil du ha blå linje med sirkler på datapunktene, skriver du \`'b-o'\`. Du kan også lage punktdiagrammer med \`plt.scatter()\`, stolpediagrammer med \`plt.bar()\`, legge til rutenett med \`plt.grid(True)\`, og vise en forklaring med \`plt.legend()\`.

Visualisering er ikke bare pynt -- det er et vitenskapelig verktøy. Når du plotter temperaturdata over et år, kan du umiddelbart se sesongvariasjoner. Når du plotter radioaktiv nedbrytning, ser du den karakteristiske eksponentielle kurven. Og når du sammenligner to datasett i samme graf -- for eksempel rovdyr- og byttedyrpopulasjoner -- kan du se sammenhenger som tallene alene ikke ville avslørt.`,
    },
    {
      id: 'nat-vg1-1-5-n-section5',
      type: 'text',
      content: `## Modellering -- forenkle virkeligheten for å forstå den

Nå er vi fremme ved det mest spennende: å bruke alt vi har lært til å *modellere naturfaglige fenomener*. En **modell** er en forenklet representasjon av virkeligheten. Den fanger opp de viktigste mekanismene og ignorerer detaljer som ikke er avgjørende. Ingen modell er perfekt, men en god modell gir oss innsikt.

La oss starte med **radioaktiv nedbrytning**. Når et radioaktivt stoff brytes ned, halveres mengden for hvert tidsintervall som kalles halveringstiden. Formelen er N = N0 · 0.5^(t/halveringstid), der N er mengden som gjenstår, N0 er startmengden og t er tiden. I Python kan du simulere dette med en for-løkke som beregner mengden for hvert tidssteg og lagrer verdiene i en liste. Starter du med 1000 atomer og en halveringstid på 10 år, vil du ha 500 atomer etter 10 år, 250 etter 20 år, 125 etter 30 år, og bare 31.2 etter 50 år -- litt over 3 prosent av det du begynte med. Plotter du resultatene, ser du en jevn, fallende kurve som aldri helt når null.

Vil du finne ut hvor lang tid det tar før bare 1 prosent av stoffet er igjen, kan du bruke en while-løkke som halverer mengden gjentatte ganger og teller tiden. Svaret er ca. 66-67 år, som tilsvarer rundt 6.6 halveringstider. Du kan bekrefte dette matematisk: 0.01 = 0.5^n gir n = log(0.01)/log(0.5) = 6.64 halveringstider, altså 66.4 år.

Et annet klassisk eksempel er **eksponentiell befolkningsvekst**. Hvis en populasjon vokser med 2 prosent per år, betyr det at neste års populasjon er 1.02 ganger årets. En for-løkke som gjentar dette i 50 år viser at 1000 individer blir til 2692 -- nesten en tredobling. Plotter du dette, ser du en kurve som stiger stadig brattere, som er kjennetegnet på eksponentiell vekst.

For mer avanserte modeller kan du simulere et **rovdyr-byttedyr-system** (Lotka-Volterra-modellen). Her påvirker to populasjoner hverandre: kaniner reproduserer seg, men blir spist av rever. Rever dør ut uten mat, men formerer seg når det er mange kaniner. Resultatet er fascinerende sykliske svingninger der populasjonene stiger og faller i utakt -- nøyaktig slik vi observerer i naturen.`,
    },
    {
      id: 'nat-vg1-1-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på visualisering og modellering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-1-5-n-quiz3-q0',
            task: 'Hvilket Python-bibliotek brukes vanligvis til å lage grafer og diagrammer?',
            options: [
              { id: 'a', text: 'numpy', isCorrect: false },
              { id: 'b', text: 'matplotlib', isCorrect: true },
              { id: 'c', text: 'pandas', isCorrect: false },
              { id: 'd', text: 'math', isCorrect: false },
            ],
            solution:
              'Matplotlib (vanligvis importert som matplotlib.pyplot med forkortelsen plt) er standardbiblioteket for å lage grafer i Python. Det støtter linjediagrammer, punktdiagrammer, stolpediagrammer og mye mer.',
          },
          {
            id: 'nat-vg1-1-5-n-quiz3-q1',
            task: 'Du starter med 1000 atomer av et radioaktivt stoff med halveringstid 10 år. Hvor mange atomer er igjen etter 20 år?',
            options: [
              { id: 'a', text: '500', isCorrect: false },
              { id: 'b', text: '250', isCorrect: true },
              { id: 'c', text: '100', isCorrect: false },
              { id: 'd', text: '0', isCorrect: false },
            ],
            solution:
              'Etter 20 år har det gått to halveringstider (20/10 = 2). Etter første halvering: 1000/2 = 500. Etter andre halvering: 500/2 = 250. Alternativt: N = 1000 · 0.5^(20/10) = 1000 · 0.25 = 250 atomer.',
          },
          {
            id: 'nat-vg1-1-5-n-quiz3-q2',
            task: 'Hva er en modell i naturfaglig programmering?',
            options: [
              { id: 'a', text: 'En perfekt kopi av virkeligheten i kode', isCorrect: false },
              { id: 'b', text: 'Et program som bare lager grafer', isCorrect: false },
              { id: 'c', text: 'En forenklet representasjon av virkeligheten som fanger opp de viktigste mekanismene', isCorrect: true },
              { id: 'd', text: 'Et program som samler inn data fra sensorer', isCorrect: false },
            ],
            solution:
              'En modell er en forenklet representasjon av virkeligheten. Den fanger opp de viktigste mekanismene og ignorerer mindre viktige detaljer. Ingen modell er perfekt, men en god modell gir verdifull innsikt om fenomenet den beskriver.',
          },
          {
            id: 'nat-vg1-1-5-n-quiz3-q3',
            task: 'Hva kjennetegner grafen for eksponentiell vekst?',
            options: [
              { id: 'a', text: 'En rett linje som stiger jevnt', isCorrect: false },
              { id: 'b', text: 'En kurve som flater ut over tid', isCorrect: false },
              { id: 'c', text: 'En kurve som stiger stadig brattere', isCorrect: true },
              { id: 'd', text: 'En kurve som svinger opp og ned', isCorrect: false },
            ],
            solution:
              'Eksponentiell vekst gir en kurve som stiger stadig brattere. Med 2% årlig vekst virker det lite i starten, men effekten akkumuleres: 1000 individer blir til nesten 2700 på 50 år. En rett linje ville vært lineær vekst, og en kurve som flater ut kalles logistisk vekst.',
          },
          {
            id: 'nat-vg1-1-5-n-quiz3-q4',
            task: 'Hva viser en Lotka-Volterra-modell (rovdyr-byttedyr)?',
            options: [
              { id: 'a', text: 'At rovdyr alltid utrydder byttedyrene', isCorrect: false },
              { id: 'b', text: 'At begge populasjonene vokser eksponentielt', isCorrect: false },
              { id: 'c', text: 'At populasjonene holder seg helt stabile over tid', isCorrect: false },
              { id: 'd', text: 'At populasjonene svinger syklisk i utakt med hverandre', isCorrect: true },
            ],
            solution:
              'Lotka-Volterra-modellen viser at rovdyr og byttedyr påvirker hverandre i et syklisk mønster. Når det er mange byttedyr, øker rovdyrene. Når rovdyrene øker, minker byttedyrene. Når byttedyrene minker, minker rovdyrene igjen. Og så begynner syklusen på nytt.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-1-5-n-section6',
      type: 'text',
      content: `## Kritisk vurdering -- en modell er bare så god som antakelsene

Det er fristende å stole blindt på det datamaskinen forteller oss. Datamaskiner er jo så presise! Men husk: en datamaskin gjør bare det den får beskjed om. Hvis modellen din bygger på feil antakelser, vil resultatene også være feil -- uansett hvor mange desimaler datamaskinen viser.

La oss ta et eksempel. Tenk deg en enkel modell som forutsier karakterer basert på studietimer: karakter = studietimer x 0.5 + 1. For 10 timers studier gir denne modellen karakter 6. Men hva med 20 timers studier? Da får du karakter 11, som er umulig i det norske karaktersystemet! Modellen har ingen øvre grense.

Dessuten antar modellen en *lineær sammenheng* -- at dobbelt så mye studering gir dobbelt så mye bedre karakter. I virkeligheten er sammenhengen langt mer kompleks. Kvaliteten på studiene er minst like viktig som mengden. Forkunnskaper spiller inn. Vanskelighetsgraden varierer mellom fag. Dagsform på eksamen kan utgjøre hele forskjellen. Og to personer som studerer like mange timer, kan få helt ulike karakterer.

Denne typen kritisk vurdering er essensiell i all naturvitenskapelig modellering. Når du lager eller bruker en modell, bør du alltid spørre: Hvilke antakelser bygger modellen på? Er antakelsene rimelige? Hva ignorerer modellen? I hvilke situasjoner vil modellen gi meningsløse resultater?

Husk at *alle modeller er forenklinger*. Eksponentiell vekst-modellen vår antar at en populasjon kan vokse uendelig -- i virkeligheten begrenses veksten av tilgjengelig mat, plass og andre faktorer. Radioaktiv nedbrytning-modellen vår er faktisk ganske nøyaktig fordi den bygger på veletablerte fysiske lover. Rovdyr-byttedyr-modellen fanger opp det grunnleggende mønsteret, men ignorerer faktorer som sykdom, sesongvariasjoner og konkurranse fra andre arter. En god naturviter vet at modellen er et verktøy for å forstå, ikke en erstatning for virkeligheten.`,
    },
    {
      id: 'nat-vg1-1-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på kritisk vurdering av modeller:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-1-5-n-quiz4-q0',
            task: 'Hvorfor er det viktig å vurdere antakelsene i en modell?',
            options: [
              { id: 'a', text: 'Fordi datamaskiner alltid gjør beregningsfeil', isCorrect: false },
              { id: 'b', text: 'Fordi feil antakelser gir feil resultater, uansett hvor presis beregningen er', isCorrect: true },
              { id: 'c', text: 'Fordi læreren krever det i rapporten', isCorrect: false },
              { id: 'd', text: 'Fordi alle modeller er helt ubrukelige', isCorrect: false },
            ],
            solution:
              'En modell er bare så god som antakelsene den bygger på. Datamaskinen beregner presist, men den kan ikke vite om antakelsene er riktige. En modell med feil antakelser kan gi resultater som ser troverdige ut men er misvisende -- dette kalles «garbage in, garbage out».',
          },
          {
            id: 'nat-vg1-1-5-n-quiz4-q1',
            task: 'Hva er den største svakheten med en eksponentiell vekstmodell for en biologisk populasjon?',
            options: [
              { id: 'a', text: 'Den kan ikke brukes med desimaltall', isCorrect: false },
              { id: 'b', text: 'Den antar at populasjonen kan vokse uendelig uten begrensninger', isCorrect: true },
              { id: 'c', text: 'Den gir alltid for lave verdier', isCorrect: false },
              { id: 'd', text: 'Den krever for mye datakraft', isCorrect: false },
            ],
            solution:
              'Eksponentiell vekst antar at populasjonen vokser med en fast prosentandel per tidsenhet uten begrensninger. I virkeligheten begrenses veksten av tilgjengelig mat, plass, sykdom og konkurranse. En mer realistisk modell er logistisk vekst, som inkluderer en bæreevne.',
          },
          {
            id: 'nat-vg1-1-5-n-quiz4-q2',
            task: 'Karaktermodellen karakter = studietimer x 0.5 + 1 gir karakter 11 for 20 timers studier. Hva er dette et eksempel på?',
            options: [
              { id: 'a', text: 'En beregningsfeil i Python', isCorrect: false },
              { id: 'b', text: 'At modellen mangler en realistisk øvre grense', isCorrect: true },
              { id: 'c', text: 'At norske karakterer går opp til 11', isCorrect: false },
              { id: 'd', text: 'At studietimer ikke påvirker karakterer', isCorrect: false },
            ],
            solution:
              'Modellen mangler en øvre grense som gjenspeiler det norske karaktersystemet (1-6). En forbedret modell ville inkludert en max-funksjon som begrenser resultatet til 6, og kanskje også tatt hensyn til avtakende utbytte -- at de siste timenes studier gir mindre forbedring enn de første.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-1-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett hvordan programmering har blitt et uunnværlig verktøy i naturvitenskapen -- fra pandemisimuleringer til klimamodeller og DNA-analyser.

**Grunnleggende Python** bygger på variabler (navngitte bokser som lagrer verdier), matematiske operatorer (+, -, *, /, ** for potens), og print-funksjonen for å vise resultater. Variabler kan inneholde desimaltall (float), heltall (int), tekst (string) og sann/usann-verdier (boolean). Funksjoner fra math-biblioteket gir tilgang til kvadratrot, pi, absoluttverdi og avrunding.

**Løkker** lar deg gjenta kode: for-løkker brukes når du vet antall repetisjoner, while-løkker brukes når du vil fortsette så lenge en betingelse er sann. Lister samler mange verdier i en variabel, og range()-funksjonen genererer tallrekker.

**Betingelser** med if/elif/else lar programmet ta valg. Sammenligningsoperatorer (==, !=, >, <, >=, <=) og logiske operatorer (and, or, not) bestemmer hvilken kodeblokk som kjøres.

**Visualisering** med matplotlib gjør data til grafer og diagrammer som avslører mønstre. Linjediagram med plt.plot(), punktdiagram med plt.scatter(), og tekst med plt.xlabel(), plt.ylabel() og plt.title() er de viktigste verktøyene.

**Modellering** bruker alt dette sammen til å simulere naturfaglige fenomener. Radioaktiv nedbrytning følger formelen N = N0 · 0.5^(t/halveringstid), eksponentiell vekst følger N = N0 · (1+r)^t, og rovdyr-byttedyr-systemer viser sykliske svingninger.

**Kritisk vurdering** er avgjørende: alle modeller er forenklinger. Du bør alltid spørre hvilke antakelser modellen bygger på, hva den ignorerer, og i hvilke situasjoner den gir meningsløse resultater. Programmering automatiserer beregninger, men det er du som naturviter som må vurdere om resultatene gir mening.`,
    },
  ],
  exercises: [],
};

export const NAT_VG1_NARRATIV_DEL1B_CHAPTERS = [
  CHAPTER_NAT_VG1_1_4_NARRATIV,
  CHAPTER_NAT_VG1_1_5_NARRATIV,
];
