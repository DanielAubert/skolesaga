/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Religion og etikk VG3
 *
 * Seksjon 4: Etikk og moralfilosofi (Kapittel 4.1–4.7)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Hva er etikk og moral?
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_4_1: TextbookChapter = {
  id: 'religion-etikk-4-1',
  courseId: 'religion-etikk',
  chapterNumber: '4.1',
  title: 'Hva er etikk og moral?',
  description: 'Grunnleggende begreper i etikken, forskjellen mellom etikk og moral, og ulike tilnærminger til moralske spørsmål.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte etiske ideer og utfordringer knyttet til sentrale områder i samtiden',
    'gjøre rede for og drøfte ulike etiske modeller',
  ],
  content: [
    {
      id: 're-4-1-intro',
      type: 'text',
      content: `# Hva er etikk og moral?

Mennesker står daglig overfor valg som har moralske dimensjoner. Skal du si sannheten selv om det sårer noen? Er det riktig å bryte et løfte for å hjelpe en venn? Hva gjør en handling god eller dårlig?

**Etikk** og **moral** er to begreper som ofte brukes om hverandre i dagligtalen, men i filosofien har de ulike betydninger. For å forstå etiske teorier og kunne drøfte moralske dilemmaer, er det nødvendig å kjenne til disse grunnleggende begrepene og de ulike tilnærmingene til moralske spørsmål.`,
    },
    {
      id: 're-4-1-def-1',
      type: 'definition',
      title: 'Etikk og moral',
      content: `**Moral** viser til de faktiske normene, verdiene og oppfatningene om rett og galt som finnes i et samfunn eller hos et individ. Moral er det vi faktisk gjør og mener er riktig.

**Etikk** er den systematiske, filosofiske refleksjonen over moral. Etikk er «læren om moralen» – det vil si forsøket på å begrunne, analysere og vurdere moralske normer og verdier.

**Kort sagt:**
- Moral = praksis (hva vi gjør og mener)
- Etikk = teori (refleksjon over hva vi bør gjøre og hvorfor)

*Eksempel:* At «du skal ikke stjele» er en moralsk norm. Å spørre «hvorfor er det galt å stjele?» er et etisk spørsmål.`,
    },
    {
      id: 're-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 're-4-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom etikk og moral?',
        options: [
          { id: 'a', text: 'Etikk handler om følelser, moral handler om fornuft', isCorrect: false },
          { id: 'b', text: 'Moral er de faktiske normene vi lever etter, etikk er den filosofiske refleksjonen over disse normene', isCorrect: true },
          { id: 'c', text: 'Etikk gjelder bare religiøse mennesker, moral gjelder alle', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begrepene betyr det samme', isCorrect: false },
        ],
        solution: 'Moral viser til de faktiske normene og oppfatningene om rett og galt i et samfunn, mens etikk er den systematiske, filosofiske refleksjonen over moralen. Moral er praksis, etikk er teori.',
      },
    },
    {
      id: 're-4-1-text-2',
      type: 'text',
      content: `## Deskriptiv og normativ etikk

Etikken kan deles inn i ulike retninger ut fra hvilke spørsmål den stiller.

### Deskriptiv etikk
Deskriptiv etikk **beskriver** hvilke moralske oppfatninger og praksiser som faktisk finnes i ulike samfunn og kulturer. Den tar ikke stilling til om disse oppfatningene er riktige eller gale, men forsøker å kartlegge og forstå dem.

*Eksempel:* «I noen kulturer er det akseptert å ha flere ektefeller, i andre er det kun akseptert med én.»

### Normativ etikk
Normativ etikk forsøker å **begrunne** hva som er moralsk riktig og galt. Den stiller spørsmål som: Hva bør vi gjøre? Hva kjennetegner en god handling? Hvilke regler bør vi følge?

De store etiske teoriene – pliktetikk, konsekvensetikk og dydsetikk – tilhører den normative etikken.

*Eksempel:* «Det er galt å lyve, fordi det krenker den andres verdighet og autonomi.»`,
    },
    {
      id: 're-4-1-def-2',
      type: 'definition',
      title: 'Deskriptiv vs. normativ etikk',
      content: `**Deskriptiv etikk:** Beskriver og kartlegger moralske oppfatninger og praksiser slik de faktisk er. Spørsmål: «Hva mener folk er riktig?»

**Normativ etikk:** Forsøker å begrunne hva som er moralsk riktig og galt. Spørsmål: «Hva bør vi mene er riktig – og hvorfor?»

**Anvendt etikk:** En gren av normativ etikk som anvender etiske teorier på konkrete problemstillinger, som medisinsk etikk, miljøetikk og krigsetikk.`,
    },
    {
      id: 're-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 're-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi et eksempel på et moralsk spørsmål som kan belyses både deskriptivt og normativt. Forklar forskjellen mellom de to tilnærmingene.',
        solution: 'Et eksempel er aktiv dødshjelp. Deskriptivt kan vi beskrive at dødshjelp er lovlig i Nederland og Belgia, men ulovlig i Norge – vi kartlegger hva ulike samfunn mener. Normativt kan vi spørre: «Bør aktiv dødshjelp tillates?» og argumentere for eller mot med etiske begrunnelser, for eksempel at selvbestemmelsesretten tilsier at mennesker bør ha rett til å velge, eller at menneskeverdet tilsier at vi ikke bør ta liv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-1-text-3',
      type: 'text',
      content: `## Metaetikk: Moralsk relativisme og universalisme

**Metaetikk** er etikk om etikken – den stiller spørsmål om moralens natur og grunnlag. Et sentralt metaetisk spørsmål er: Finnes det universelt gyldige moralske sannheter, eller er moralen alltid relativ til kultur og kontekst?

### Moralsk relativisme
Moralsk relativisme hevder at moralske normer og verdier er **relative** – de varierer fra kultur til kultur og fra tid til tid. Det finnes ingen objektiv, universell moralsk sannhet. Hva som er «riktig» avhenger alltid av sammenhengen.

**Kulturrelativisme** er den vanligste formen: Moralske normer er produkter av bestemte kulturer og kan ikke vurderes utenfra.

### Moralsk universalisme
Moralsk universalisme hevder at det finnes moralske prinsipper som gjelder for **alle** mennesker, uavhengig av kultur, tid og sted. Menneskerettighetene er et eksempel på en universalistisk tankegang.

### Spenningen mellom relativisme og universalisme
Denne spenningen er høyst aktuell i vår tid. Når vi møter kulturelle praksiser som avviker fra våre egne normer – for eksempel omskjæring, barneekteskap eller dødsstraff – tvinges vi til å ta stilling: Er det riktig å kritisere andre kulturers moralske praksiser, eller er dette en form for kulturimperialisme?`,
    },
    {
      id: 're-4-1-def-3',
      type: 'definition',
      title: 'Moralsk relativisme og universalisme',
      content: `**Moralsk relativisme:** Oppfatningen om at moralske normer og verdier er relative til kultur, tid og sted. Det finnes ingen objektiv, universell moral.

**Moralsk universalisme:** Oppfatningen om at visse moralske prinsipper gjelder for alle mennesker, uavhengig av kulturell bakgrunn.

**Kulturrelativisme:** En form for relativisme som hevder at moralske normer bestemmes av den kulturen man tilhører, og at det ikke er mulig å vurdere en kulturs moral fra en annen kulturs ståsted.

**Menneskerettighetene** representerer en universalistisk posisjon: Alle mennesker har visse grunnleggende rettigheter i kraft av å være mennesker.`,
    },
    {
      id: 're-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 're-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft påstanden: «Menneskerettighetene er universelt gyldige.» Presenter argumenter både fra en universalistisk og en relativistisk posisjon.',
        solution: 'Universalistisk: Menneskerettighetene gjelder alle fordi alle mennesker har iboende verdighet. Rettigheter som retten til liv, frihet og ytringsfrihet er grunnleggende behov som gjelder uavhengig av kultur. Historien viser at kulturelle praksiser som slaveri og tortur er gale uansett kontekst. Relativistisk: Menneskerettighetene er formet av vestlig, liberal tradisjon og gjenspeiler ikke nødvendigvis universelle verdier. Ulike kulturer vektlegger fellesskap fremfor individ. Å påtvinge vestlige rettigheter andre kulturer kan ses som kulturimperialisme. En mellomposisjon er at noen grunnleggende rettigheter (liv, frihet fra tortur) er universelle, mens andre kan tolkes ulikt i ulike kontekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-1-text-4',
      type: 'text',
      content: `## Moralsk objektivisme og subjektivisme

I tillegg til skillet mellom relativisme og universalisme, finnes det et annet viktig metaetisk skille: spørsmålet om moralske utsagn er **objektive** eller **subjektive**.

### Moralsk objektivisme
Moralsk objektivisme hevder at det finnes moralske sannheter som er **uavhengige av hva enkeltpersoner eller kulturer mener**. Utsagnet «tortur er galt» er sant på samme måte som «jorda går rundt sola» er sant – uavhengig av om noen tror det eller ikke.

Objektivister peker på at vi i dagligtalen behandler moralske utsagn som sanne eller usanne. Vi sier at slaveri «er» galt, ikke bare at vi «synes» det er galt. Denne hverdagsintuisjonen taler for at det finnes objektive moralske fakta.

### Moralsk subjektivisme
Moralsk subjektivisme hevder at moralske utsagn bare uttrykker **individuelle holdninger eller følelser**. Å si «tortur er galt» er egentlig å si «jeg misliker tortur» eller «tortur vekker avsky i meg». Det finnes ingen moralske fakta utover menneskers subjektive opplevelser.

Den skotske filosofen **David Hume** (1711–1776) argumenterte for at moralske vurderinger er basert på følelser, ikke fornuft. Fornuften kan fortelle oss hva som *er*, men ikke hva som *bør* være. Å slutte fra «er» til «bør» er en logisk feilslutning – kjent som **Humes giljotin** eller det **naturalistiske feilgrepet**.

### Emotivisme
En radikal form for subjektivisme er **emotivismen**, utviklet av A.J. Ayer (1910–1989) og Charles Stevenson (1908–1979). Ifølge emotivismen uttrykker moralske utsagn bare følelser og forsøk på å påvirke andre. «Tortur er galt» betyr egentlig bare «buh for tortur!» – det er verken sant eller usant.

### Betydning for etisk debatt
Disse metaetiske posisjonene har praktiske konsekvenser. Hvis moralsk objektivisme stemmer, gir det mening å lete etter «det rette svaret» i etiske spørsmål. Hvis subjektivismen stemmer, er etiske debatter egentlig bare uttrykk for motstridende preferanser, og det finnes ingen rasjonell måte å løse dem på.

De fleste etiske teorier – pliktetikk, utilitarisme, dydsetikk – forutsetter en form for objektivisme: De mener det *finnes* svar på hva som er moralsk riktig, og at vi kan komme nærmere disse svarene gjennom fornuft og refleksjon.`,
    },
    {
      id: 're-4-1-def-4',
      type: 'definition',
      title: 'Moralsk objektivisme og subjektivisme',
      content: `**Moralsk objektivisme:** Oppfatningen om at det finnes moralske sannheter som er uavhengige av individers eller kulturers meninger. Moralske utsagn kan være objektivt sanne eller usanne.

**Moralsk subjektivisme:** Oppfatningen om at moralske utsagn bare uttrykker individuelle holdninger, følelser eller preferanser. Det finnes ingen objektive moralske fakta.

**Emotivisme:** En form for subjektivisme som hevder at moralske utsagn bare er uttrykk for følelser og forsøk på å påvirke andre – de er verken sanne eller usanne.

**Humes giljotin (er-bør-problemet):** Prinsippet om at man ikke logisk kan slutte fra beskrivelser av hvordan ting *er* til påstander om hvordan ting *bør* være. Også kalt det naturalistiske feilgrepet.`,
    },
    {
      id: 're-4-1-text-5',
      type: 'text',
      content: `## Moralske dilemmaer og moralsk intuisjon

En av de beste måtene å forstå etikkens utfordringer på er å studere **moralske dilemmaer** – situasjoner der ulike moralske hensyn trekker i forskjellige retninger, og der det ikke finnes et opplagt «riktig» svar.

### Trolley-problemet
Det kanskje mest berømte tankeeksperimentet i etikken er **trolley-problemet**, introdusert av den britiske filosofen Philippa Foot i 1967 og videreutviklet av Judith Jarvis Thomson.

**Grunnversjonen:** Et ukontrollerbart tog ruller mot fem personer som er bundet til skinnene. Du kan trekke i en spak som styrer toget over på et sidespor, der bare én person er bundet fast. Bør du trekke i spaken?

De fleste svarer ja – det er bedre å redde fem enn én. Dette samsvarer med utilitaristisk tenkning.

**Brovariasjonen:** Du står på en bro over togskinnene. Det ukontrollerbare toget ruller mot fem personer. Ved siden av deg står en stor mann. Hvis du skyver ham ned fra broen, vil kroppen hans stoppe toget og redde de fem. Bør du skyve ham?

De fleste svarer nei – selv om «regnestykket» er det samme (én død for å redde fem). Hvorfor denne forskjellen?

### Moralsk intuisjon
Trolley-problemet viser at vi har sterke **moralske intuisjoner** – umiddelbare, prerefleksive oppfatninger om rett og galt – som ikke alltid samsvarer med det etiske teorier forteller oss.

Pliktetikken forklarer forskjellen: I brovariasjonen bruker du den store mannen **bare som middel** for å redde de andre, noe som krenker Kants humanitetsformulering. I spakvariasjonen styrer du bare toget – du bruker ingen som middel.

### Reflektert likevekt
Filosofen **John Rawls** (1921–2002) introduserte begrepet **reflektert likevekt** som en metode for etisk tenkning. Ideen er at vi bør søke en balanse mellom våre moralske intuisjoner og våre etiske prinsipper:
- Noen ganger bør intuisjonene korrigere prinsippene (som når utilitarismen gir «galt» svar i brovarianten)
- Andre ganger bør prinsippene korrigere intuisjonene (som når vi innser at intuisjoner kan være basert på fordommer)

God etisk tenkning krever en konstant dialog mellom intuisjon og teori.`,
    },
    {
      id: 're-4-1-example-1',
      type: 'example',
      title: 'Moralske dilemmaer i hverdagen',
      content: `Moralske dilemmaer er ikke bare filosofiske tankeeksperimenter – vi møter dem daglig i enklere former:

**Dilemma 1: Sannhet vs. vennlighet**
Vennen din har kjøpt en kjole hun er veldig fornøyd med, men du synes den er lite flatterende. Hun spør hva du synes. Bør du si sannheten (ærlighet) eller noe hyggelig (omsorg for vennens følelser)?

**Dilemma 2: Lojalitet vs. rettferdighet**
Du ser en god venn jukse på en viktig eksamen. Bør du si ifra til læreren (rettferdighet overfor de andre elevene) eller holde det for deg selv (lojalitet mot vennen)?

**Dilemma 3: Personlig nytte vs. fellesskap**
Du finner en lommebok med mye kontanter og eierens ID. Du trenger pengene sårt, og ingen vet at du fant den. Bør du levere den tilbake?

Disse dilemmaene er viktige fordi de tvinger oss til å tenke over hva vi egentlig verdsetter, og hvilke moralske prinsipper vi prioriterer når de kommer i konflikt med hverandre.`,
    },
    {
      id: 're-4-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 're-4-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar trolley-problemet i begge variantene (spak og bro). Hvorfor gir de fleste ulike svar på de to variantene, selv om «regnestykket» er det samme? Bruk begreper fra etisk teori i forklaringen din.',
        solution: `I spakvariasjonen ruller et tog mot fem personer, og du kan trekke i en spak for å styre det over på et sidespor der én person er bundet fast. De fleste mener det er riktig å trekke i spaken. I brovariasjonen kan du redde fem personer ved å skyve en stor mann ned fra en bro for å stoppe toget. De fleste mener dette er galt. Forskjellen kan forklares med Kants humanitetsformulering: I brovariasjonen bruker du den store mannen bare som middel for å redde andre, noe som krenker hans verdighet. I spakvariasjonen styrer du toget, og mannens død er en uheldig bivirkning, ikke et middel. Utilitarismen ville si at begge handlingene er riktige fordi fem reddes på bekostning av én. Dette viser en spenning mellom utilitaristisk tenkning og våre moralske intuisjoner, og illustrerer styrker og svakheter ved ulike etiske teorier.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 're-4-1-ex-8',
        number: '8',
        type: 'multiple-choice',
        task: 'Hva mente David Hume med at man ikke kan slutte fra «er» til «bør» (Humes giljotin)?',
        options: [
          { id: 'a', text: 'At moralske regler alltid er basert på logisk tenkning', isCorrect: false },
          { id: 'b', text: 'At man ikke logisk kan utlede moralske normer bare fra beskrivelser av hvordan virkeligheten er', isCorrect: true },
          { id: 'c', text: 'At alle moralske utsagn er objektivt sanne', isCorrect: false },
          { id: 'd', text: 'At religion er den eneste kilden til moralske normer', isCorrect: false },
        ],
        solution: `Humes giljotin er prinsippet om at man ikke logisk kan gå fra faktiske beskrivelser («er»-utsagn) til moralske påbud («bør»-utsagn). At noe er naturlig betyr ikke at det er moralsk riktig. For eksempel: At mennesker naturlig er aggressive betyr ikke at aggresjon er moralsk riktig. Hume mente at moralske vurderinger er basert på følelser, ikke bare fornuft.`,
      },
    },
    {
      id: 're-4-1-text-6',
      type: 'text',
      content: `## Etikk i hverdagen og samfunnet

Etiske spørsmål er ikke bare noe filosofer diskuterer på universitetene – de gjennomsyrer hele samfunnslivet vårt. Etikk spiller en rolle i lovgivning, politikk, arbeidsliv, journalistikk, forskning og mellommenneskelige relasjoner.

### Etikk og lovgivning
Det er viktig å skille mellom **lov** og **moral**. Ikke alt som er lovlig er moralsk riktig, og ikke alt som er ulovlig er moralsk galt. Slaveri var lovlig i mange land, men de fleste vil si det var moralsk galt. Sivil ulydighet – å bryte en urettferdig lov – kan være moralsk riktig.

Likevel er det en nær forbindelse: Lover gjenspeiler ofte moralske normer i et samfunn, og moralske argumenter brukes for å endre lover. Kampen for stemmerett for kvinner, avskaffelse av slaveri og legalisering av homofilt ekteskap er eksempler på at moralske argumenter har endret lovverket.

### Profesjonsetikk
Mange yrker har utviklet egne etiske retningslinjer:
- **Medisinsk etikk:** Legeeden, prinsippene om autonomi, velgjørenhet, ikke-skade og rettferdighet
- **Journalistisk etikk:** Vær Varsom-plakaten med krav om sannhet, integritet og varsomhet
- **Forskeretikk:** Krav om redelighet, samtykke og uavhengighet
- **Forretningsetikk:** Spørsmål om ansvar, bærekraft og rettferdig handel

### Hverdagsetikk
I dagliglivet tar vi stadig moralske valg, selv om vi ikke alltid tenker på dem som det:
- Hvordan behandler vi medmennesker, venner og fremmede?
- Hvilke varer kjøper vi, og hvordan påvirker det andre?
- Hvordan forholder vi oss til miljø og klima?
- Hva deler vi og hva holder vi tilbake på sosiale medier?

Den etiske refleksjonen hjelper oss å bli mer bevisste på disse valgene og å handle mer gjennomtenkt.`,
    },
    {
      id: 're-4-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 're-4-1-ex-9',
        number: '9',
        type: 'classic',
        task: 'Gi et eksempel på noe som er lovlig men moralsk problematisk, og noe som er ulovlig men moralsk forsvarlig. Forklar hva dette sier om forholdet mellom lov og moral.',
        solution: `Lovlig men moralsk problematisk: Det er lovlig å bryte kontakt med eldre foreldre som trenger omsorg – men mange vil si det er moralsk galt å svikte dem som har tatt vare på deg. Lovbeskytte handlinger inkluderer også lovlig skatteplanlegging som utnytter smutthull mens andre betaler sin del. Ulovlig men moralsk forsvarlig: Sivil ulydighet, som da Rosa Parks nektet å gi fra seg setet sitt på bussen i det rasesegregerte USA, var ulovlig men moralsk riktig. Å gjemme jøder under andre verdenskrig var ulovlig ifølge nazistenes lover, men moralsk nødvendig. Dette viser at lov og moral ikke er identiske. Lover er samfunnets regler håndhevet av staten, mens moral er en dypere refleksjon over rett og galt. Noen ganger er det moralsk nødvendig å utfordre urettferdige lover.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 're-4-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner metaetikk?',
        options: [
          { id: 'a', text: 'Den beskriver moralske praksiser i ulike kulturer', isCorrect: false },
          { id: 'b', text: 'Den forsøker å begrunne hva som er moralsk riktig og galt', isCorrect: false },
          { id: 'c', text: 'Den stiller spørsmål om moralens natur, grunnlag og gyldighet', isCorrect: true },
          { id: 'd', text: 'Den anvender etiske teorier på konkrete problemstillinger', isCorrect: false },
        ],
        solution: 'Metaetikk er «etikk om etikken» og stiller spørsmål om moralens natur og grunnlag, for eksempel om det finnes universelle moralske sannheter eller om moralen er relativ. Den skiller seg fra deskriptiv etikk (som beskriver moral) og normativ etikk (som begrunner hva som er riktig).',
      },
    },
    {
      id: 're-4-1-summary',
      type: 'text',
      content: `## Oppsummering

- **Moral** er de faktiske normene og oppfatningene om rett og galt i et samfunn, mens **etikk** er den systematiske refleksjonen over moralen.
- **Deskriptiv etikk** beskriver hvilke moralske oppfatninger som finnes, mens **normativ etikk** forsøker å begrunne hva som er moralsk riktig.
- **Metaetikk** stiller spørsmål om moralens natur og grunnlag.
- **Moralsk relativisme** hevder at moralen er relativ til kultur og kontekst, mens **moralsk universalisme** hevder at visse moralske prinsipper gjelder for alle.
- Spenningen mellom relativisme og universalisme er sentral i møtet mellom kulturer og i diskusjonen om menneskerettigheter.`,
    },
    {
      id: 're-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 're-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar med egne ord forskjellen mellom deskriptiv etikk, normativ etikk og metaetikk. Gi et eksempel på et spørsmål som hører til hver av de tre.',
        solution: 'Deskriptiv etikk beskriver og kartlegger moralske oppfatninger slik de er – eksempel: «Hva mener nordmenn om aktiv dødshjelp?» Normativ etikk forsøker å begrunne hva som er moralsk riktig – eksempel: «Er aktiv dødshjelp etisk forsvarlig?» Metaetikk stiller spørsmål om moralens natur og grunnlag – eksempel: «Finnes det objektive moralske sannheter, eller er moral alltid relativt?»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 're-4-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'En kulturrelativist vil hevde at vi ikke kan kritisere andre kulturers moralske praksiser. Diskuter: Hva er styrkene og svakhetene ved denne posisjonen?',
        solution: 'Styrker: Kulturrelativismen fremmer ydmykhet og respekt for mangfold. Den advarer mot kulturimperialisme og påminner oss om at våre egne normer er kulturelt betinget. Den hjelper oss å forstå andre kulturer på deres egne premisser. Svakheter: Hvis all moral er relativ, kan vi ikke kritisere selv ekstreme praksiser som slaveri, folkemord eller tortur. Kulturrelativismen kan brukes til å rettferdiggjøre undertrykkelse – «det er bare vår kultur». Den overser at det finnes intern uenighet i alle kulturer, og at endring ofte skjer nettopp fordi noen kritiserer eksisterende praksiser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Pliktetikk – Kants moralfilosofi
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_4_2: TextbookChapter = {
  id: 'religion-etikk-4-2',
  courseId: 'religion-etikk',
  chapterNumber: '4.2',
  title: 'Pliktetikk – Kants moralfilosofi',
  description: 'Immanuel Kants pliktetikk, det kategoriske imperativ og vurdering av pliktetikkens styrker og svakheter.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for og drøfte ulike etiske modeller',
    'drøfte etiske ideer og utfordringer knyttet til sentrale områder i samtiden',
  ],
  content: [
    {
      id: 're-4-2-intro',
      type: 'text',
      content: `# Pliktetikk – Kants moralfilosofi

Hva gjør en handling moralsk riktig? Ifølge **pliktetikken** er det ikke konsekvensene som avgjør, men selve handlingen. Noen handlinger er riktige i seg selv – uavhengig av hva som kommer ut av dem.

Den mest innflytelsesrike pliktetikeren i vestlig filosofi er den tyske filosofen **Immanuel Kant** (1724–1804). Kant mente at moralen bygger på **fornuften**, og at det finnes absolutte moralske plikter som gjelder for alle fornuftige vesener.

Kants etikk kalles også **deontologisk etikk** (fra gresk *deon* = plikt). Den står i motsetning til konsekvensetikken, som vurderer handlinger ut fra resultatene de fører til.`,
    },
    {
      id: 're-4-2-def-1',
      type: 'definition',
      title: 'Det kategoriske imperativ',
      content: `**Det kategoriske imperativ** er Kants grunnleggende moralprinsipp. Det finnes i flere formuleringer:

**Universaliseringsformuleringen:**
«Handle bare etter den maksime som du samtidig kan ville skal bli en allmenn lov.»

*Betydning:* Før du handler, spør deg selv: «Kan jeg ville at alle mennesker handler slik i samme situasjon?» Hvis svaret er nei, er handlingen moralsk gal.

**Humanitetsformuleringen:**
«Handle slik at du alltid behandler menneskeheten, både i din egen person og i enhver annen person, aldri bare som et middel, men alltid også som et formål i seg selv.»

*Betydning:* Mennesker har iboende verdighet og må aldri bare brukes som redskaper for andres mål.

**Imperativ** betyr påbud eller befaling. **Kategorisk** betyr ubetinget – det gjelder uten unntak.`,
    },
    {
      id: 're-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 're-4-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva menes med «det kategoriske imperativ» i Kants filosofi?',
        options: [
          { id: 'a', text: 'En betinget regel som gjelder i visse situasjoner', isCorrect: false },
          { id: 'b', text: 'Et moralsk grunnprinsipp som gjelder ubetinget for alle fornuftige vesener', isCorrect: true },
          { id: 'c', text: 'En anbefaling om å handle slik at mest mulig lykke oppnås', isCorrect: false },
          { id: 'd', text: 'En regel om at den sterkestes rett alltid gjelder', isCorrect: false },
        ],
        solution: 'Det kategoriske imperativ er Kants grunnleggende moralprinsipp som gjelder ubetinget (kategorisk) for alle fornuftige vesener. Det er et påbud (imperativ) som ikke avhenger av personlige ønsker eller konsekvenser.',
      },
    },
    {
      id: 're-4-2-text-2',
      type: 'text',
      content: `## Universaliseringstesten i praksis

Kants universaliseringsformel kan brukes som en test for om en handling er moralsk tillatt. La oss se på noen eksempler:

### Eksempel: Løgn
Du lurer på om det er greit å lyve for å oppnå en fordel.
1. Din «maksime» (handlingsregel): «Jeg vil lyve når det gagner meg.»
2. Kan du ville at dette blir en allmenn lov – at alle lyver når det passer dem?
3. Nei – hvis alle løy, ville ingen lenger stole på hverandre, og kommunikasjon ville bryte sammen. Løgn er kun mulig fordi de fleste snakker sant.
4. **Konklusjon:** Løgn er moralsk galt.

### Eksempel: Å bryte et løfte
1. Maksime: «Jeg vil bryte løfter når det er ubeleilig å holde dem.»
2. Kan dette universaliseres? Nei – hvis alle brøt løfter, ville løfter miste sin mening. Ingen ville stole på løfter.
3. **Konklusjon:** Å bryte løfter er moralsk galt.

Kant mente at denne testen avslører hvilke handlinger som er **selvmotsigende** når de universaliseres – de ødelegger forutsetningene for sin egen mulighet.`,
    },
    {
      id: 're-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 're-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Bruk Kants universaliseringstest på følgende situasjon: Du vurderer å jukse på en eksamen. Forklar steg for steg om handlingen er moralsk tillatt ifølge Kant.',
        solution: '1) Maksime: «Jeg vil jukse på eksamen for å få bedre karakter.» 2) Universaliser: Hva om alle jukset på eksamen? Da ville eksamensresultater miste sin verdi som mål på kunnskap. Arbeidsgiver og utdanningsinstitusjoner ville ikke kunne stole på karakterer. Hele systemet som juksingen forsøker å utnytte, ville bryte sammen. 3) Selvmotsigelse: Juksing er bare meningsfullt fordi de fleste ikke jukser. Hvis alle jukset, ville det ikke lenger gi noen fordel. 4) Konklusjon: Juksing kan ikke universaliseres uten selvmotsigelse, og er derfor moralsk galt ifølge Kant.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-2-text-3',
      type: 'text',
      content: `## Plikter og rettigheter

Kant skilte mellom ulike typer plikter:

### Fullkomne plikter
Plikter som gjelder uten unntak og aldri kan brytes:
- **Du skal ikke lyve** – selv ikke for å redde liv
- **Du skal ikke drepe uskyldige**
- **Du skal ikke bryte løfter**

### Ufullkomne plikter
Plikter som gjelder generelt, men der du har en viss frihet i hvordan og når du oppfyller dem:
- **Plikt til å hjelpe andre** – du bør hjelpe, men trenger ikke hjelpe alle til enhver tid
- **Plikt til å utvikle dine evner** – du bør utvikle deg, men velger selv hvordan

### Rettigheter og menneskeverd
Kants humanitetsformulering – at mennesker aldri bare skal brukes som middel – har vært grunnleggende for moderne menneskerettighetstenkning. Hvert menneske har **iboende verdighet** (*Würde*) som ikke kan krenkes, uansett konsekvenser.

Dette betyr at vi ikke kan ofre ett menneske for å redde flere, fordi det ville bety å bruke et menneske bare som middel for andres mål.`,
    },
    {
      id: 're-4-2-def-2',
      type: 'definition',
      title: 'Fullkomne og ufullkomne plikter',
      content: `**Fullkomne plikter:** Absolutte plikter som gjelder uten unntak. Kan uttrykkes som forbud: «Du skal ikke lyve», «Du skal ikke drepe». Å bryte dem er alltid galt.

**Ufullkomne plikter:** Generelle plikter der man har en viss frihet i oppfyllelsen. Kan uttrykkes som påbud: «Du bør hjelpe andre», «Du bør utvikle dine evner». Man bestemmer selv hvordan og når.

**Menneskeverd (Würde):** I Kants filosofi har hvert fornuftig vesen en iboende verdighet som ikke kan settes en pris på. Verdighet er absolutt og ukrenkelig.`,
    },
    {
      id: 're-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 're-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom fullkomne og ufullkomne plikter hos Kant, og gi eksempler på hver type.',
        solution: 'Fullkomne plikter gjelder uten unntak og kan aldri brytes. De er gjerne formulert som forbud, for eksempel «du skal ikke lyve» og «du skal ikke stjele». Ufullkomne plikter er generelle moralske krav der man har frihet i oppfyllelsen. De er formulert som påbud, for eksempel «du bør hjelpe andre i nød» og «du bør utvikle dine talenter». Man trenger ikke hjelpe alle til enhver tid, men man har en generell plikt til å bidra. Forskjellen er altså at fullkomne plikter er absolutte, mens ufullkomne plikter gir rom for skjønn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-2-text-4a',
      type: 'text',
      content: `## Autonomi og den gode vilje

Et sentralt begrep i Kants etikk er **autonomi** – menneskets evne til å gi seg selv moralske lover gjennom fornuften. Autonomi betyr bokstavelig «selvlovgivning» (fra gresk *autos* = selv og *nomos* = lov).

### Den gode vilje
Kant innleder sitt verk *Grunnlegging av moralens metafysikk* (1785) med den berømte påstanden: *«Det er ingenting i verden, ja heller ikke utenfor den, som uten begrensning kan anses for godt, bortsett fra en god vilje.»*

Hva mener han med dette? Intelligens, mot, rikdom og selv lykke kan brukes til onde formål. Bare **den gode vilje** – viljen til å handle av plikt, fordi det er riktig – er ubetinget god.

### Handling av plikt vs. i samsvar med plikt
Kant skilte skarpt mellom å handle **av plikt** og å handle **i samsvar med plikt**:

- **Av plikt:** Du handler fordi det er riktig, uten andre motiver. En butikkeier som gir riktig vekslepenger fordi ærlighet er en plikt, handler av plikt.
- **I samsvar med plikt:** Du gjør det riktige, men av andre grunner (egeninteresse, frykt for straff, sympati). Butikkeieren som gir riktig vekslepenger fordi han er redd for å miste kunder, handler i samsvar med plikt, men ikke av plikt.

Ifølge Kant har bare handlinger utført **av plikt** moralsk verdi. Dette er et kontroversielt standpunkt: Betyr det at en mor som hjelper barnet sitt av kjærlighet, handler mindre moralsk enn en som gjør det av ren pliktfølelse?

### Autonomi som selvlovgivning
Kants autonomibegrep innebærer at hvert fornuftig vesen er i stand til å innse de moralske lovene gjennom sin egen fornuft. Vi trenger verken Gud, tradisjoner eller autoriteter for å vite hva som er moralsk riktig – fornuften er tilstrekkelig.

Dette gjør Kants etikk til en radikal frihetsetikk: Moralen er ikke noe som pålegges oss utenfra, men noe vi gir oss selv. Vi er frie nettopp fordi vi kan handle etter fornuftens moralske lov, ikke etter tilbøyeligheter og begjær.`,
    },
    {
      id: 're-4-2-def-3',
      type: 'definition',
      title: 'Autonomi og den gode vilje',
      content: `**Autonomi (selvlovgivning):** Menneskets evne til å gi seg selv moralske lover gjennom fornuften. I Kants etikk er autonomi forutsetningen for moralsk ansvar.

**Den gode vilje:** Den eneste tingen som er ubetinget god – viljen til å handle av plikt, fordi det er riktig, uavhengig av konsekvenser eller tilbøyeligheter.

**Handling av plikt:** En handling utført fordi det er moralsk riktig, uten andre motiver. Bare slike handlinger har moralsk verdi ifølge Kant.

**Handling i samsvar med plikt:** En handling som tilfeldigvis er riktig, men utført av andre motiver (egeninteresse, sympati, frykt for straff). Ikke moralsk verdifull i Kants forstand.

**Heteronomi:** Det motsatte av autonomi – å la seg styre av ytre krefter som følelser, begjær, autoritet eller tradisjon fremfor sin egen fornuft.`,
    },
    {
      id: 're-4-2-example-1',
      type: 'example',
      title: 'Pliktetikken i praksis: Moderne dilemmaer',
      content: `Kants pliktetikk kan anvendes på mange moderne situasjoner. Her er noen eksempler:

**Varsling (whistleblowing):** En ansatt i et legemiddelfirma oppdager at selskapet holder tilbake informasjon om farlige bivirkninger av et medikament. Pliktetikken kan begrunne varsling: Å skjule informasjonen er løgn gjennom unnlatelse, og det behandler pasientene bare som middel for selskapets profitt.

**Personvern og overvåking:** En pliktetiker vil typisk forsvare retten til privatliv sterkt. Å overvåke borgere uten samtykke krenker deres autonomi og behandler dem som middel for statens sikkerhet. Selv om overvåking kan gi gode konsekvenser (forhindre terrorisme), rettferdiggjør ikke dette krenkelsen av menneskers verdighet.

**Løfter i politikken:** Kant mente at å bryte løfter alltid er galt. Politikere som bryter valgløfter, handler umoralsk ifølge pliktetikken – uansett hvor gode argumenter de måtte ha for å endre kurs. Dette illustrerer både styrken (tillit til løfter) og svakheten (manglende fleksibilitet) ved pliktetikken.

**Hvite løgner:** Er det galt å lyve for å skåne noens følelser? Ifølge Kant: ja, alltid. Selv en hvit løgn krenker den andres autonomi – du fratar vedkommende muligheten til å forholde seg til sannheten. Mange opplever dette som for strengt.`,
    },
    {
      id: 're-4-2-text-4b',
      type: 'text',
      content: `## Moderne pliktetikk: W.D. Ross og prima facie-plikter

Mange filosofer har forsøkt å utvikle Kants pliktetikk videre og løse noen av problemene med absolutte regler. Den mest innflytelsesrike er den skotske filosofen **W.D. Ross** (1877–1971).

### Prima facie-plikter
Ross innførte begrepet **prima facie-plikter** – plikter som gjelder «ved første øyekast» (*prima facie* er latin for «ved første blikk»). I motsetning til Kants absolutte plikter, kan prima facie-plikter **veies mot hverandre** i konkrete situasjoner.

Ross identifiserte syv grunnleggende prima facie-plikter:
1. **Troskap:** Hold løfter og vær ærlig
2. **Gjengjeldelse:** Gjengjeld godhet du har mottatt
3. **Rettferdighet:** Fordel goder rettferdig
4. **Velgjørenhet:** Hjelp andre og gjør godt
5. **Selvforbedring:** Utvikle dine egne evner og karakter
6. **Ikke-skade:** Unngå å skade andre
7. **Oppreisning:** Gjør opp for skade du har forårsaket

### Pliktkollisjoner
Fordelen med Ross\` system er at det gir en løsning på **pliktkollisjoner**. Når to plikter kommer i konflikt – for eksempel plikten til ærlighet og plikten til å ikke skade – må vi bruke dømmekraft for å avgjøre hvilken plikt som veier tyngst i den konkrete situasjonen. Den plikten som veier tyngst, blir vår **faktiske plikt** (*actual duty*).

*Eksempel:* Plikten til å ikke lyve og plikten til å beskytte en uskyldig kommer i konflikt. Ross ville si at begge er prima facie-plikter, men i situasjonen der en morder spør etter vennen din, veier plikten til å beskytte den uskyldige tyngst.

### Kritikk av Ross
Ross har blitt kritisert for at systemet er for vagt – det gir ingen klar metode for å avgjøre hvilken plikt som veier tyngst. Likevel representerer hans tenkning et viktig fremskritt: Den beholder pliktetikkens styrke (å ta plikter på alvor) uten Kants rigiditet.`,
    },
    {
      id: 're-4-2-def-4',
      type: 'definition',
      title: 'Prima facie-plikter',
      content: `**Prima facie-plikt:** En moralsk plikt som gjelder «ved første øyekast», men som kan settes til side hvis en annen plikt veier tyngre i den konkrete situasjonen. Begrepet ble innført av W.D. Ross.

**Faktisk plikt (actual duty):** Den plikten som faktisk gjelder i en konkret situasjon etter at alle prima facie-plikter er veid mot hverandre.

**Pliktkollisjon:** En situasjon der to eller flere moralske plikter kommer i konflikt med hverandre, slik at det er umulig å oppfylle alle samtidig. Kants absolutte pliktetikk har vanskeligheter med pliktkollisjoner, mens Ross\` prima facie-system tilbyr en løsning.`,
    },
    {
      id: 're-4-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 're-4-2-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: `Hva mente Kant med at bare handlinger utført «av plikt» har moralsk verdi?`,
        options: [
          { id: 'a', text: 'At vi aldri bør hjelpe andre av medfølelse', isCorrect: false },
          { id: 'b', text: 'At en handling bare har moralsk verdi når den utføres fordi den er riktig, ikke av egeninteresse eller følelser', isCorrect: true },
          { id: 'c', text: 'At bare soldater og politifolk handler moralsk', isCorrect: false },
          { id: 'd', text: 'At pliktfølelse er det samme som dårlig samvittighet', isCorrect: false },
        ],
        solution: `Kant skilte mellom å handle «av plikt» (fordi det er moralsk riktig) og «i samsvar med plikt» (det riktige gjøres, men av andre grunner som egeninteresse eller sympati). Bare handlinger utført av plikt har genuin moralsk verdi. En butikkeier som er ærlig fordi ærlighet er en plikt, handler av plikt. En som er ærlig fordi han er redd for å miste kunder, handler bare i samsvar med plikt.`,
      },
    },
    {
      id: 're-4-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 're-4-2-ex-8',
        number: '8',
        type: 'classic',
        task: `Forklar W.D. Ross\` teori om prima facie-plikter. Hvordan løser denne teorien problemer med Kants absolutte plikter? Gi et eksempel på en pliktkonflikt og forklar hvordan Ross ville analysere den.`,
        solution: `Ross innførte begrepet prima facie-plikter – plikter som gjelder «ved første øyekast», men som kan veies mot hverandre i konkrete situasjoner. I motsetning til Kants absolutte plikter, tillater Ross at vi i noen tilfeller bryter en plikt fordi en annen plikt veier tyngre. Eksempel: Du har lovet å møte en venn til lunsj (troskap), men på vei dit ser du en person som er skadet i en ulykke og trenger hjelp (velgjørenhet/ikke-skade). Ross ville si at begge pliktene er reelle prima facie-plikter, men at plikten til å hjelpe den skadede veier tyngst i denne situasjonen og derfor blir din faktiske plikt. Dette løser Kants problem med pliktkollisjoner, der absolutte regler ikke tillater noen avveining. Kritikere påpeker imidlertid at Ross ikke gir klare kriterier for hvordan vi skal veie pliktene mot hverandre.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-2-text-4',
      type: 'text',
      content: `## Styrker og svakheter ved pliktetikken

### Styrker
- **Absolutt menneskeverd:** Hvert menneske har ukrenkelig verdighet – ingen kan ofres for flertallet
- **Universelle prinsipper:** Moralske regler gjelder likt for alle, uavhengig av status og makt
- **Upartisk:** Moralen avhenger ikke av egeninteresse eller følelser
- **Grunnlag for rettigheter:** Kants etikk har inspirert menneskerettighetserklæringen og moderne rettsstat
- **Forutsigbarhet:** Klare regler gjør det lettere å vite hva som er riktig

### Svakheter
- **Rigiditet:** Absolutte regler kan gi absurde resultater. Kant hevdet at du ikke skal lyve, selv om en morder spør hvor vennen din gjemmer seg
- **Pliktkollisjoner:** Hva gjør du når plikter kommer i konflikt? For eksempel plikten til å ikke lyve og plikten til å beskytte uskyldige?
- **Konsekvenser ignoreres:** Er det virkelig moralsk å følge en regel hvis konsekvensene er katastrofale?
- **For abstrakt:** Det kan være vanskelig å avgjøre om en handling kan universaliseres – folk kan komme til ulike konklusjoner
- **Mangel på følelser:** Kants etikk gir lite rom for medfølelse og empati som moralsk motivasjon`,
    },
    {
      id: 're-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 're-4-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er en anerkjent svakhet ved Kants pliktetikk?',
        options: [
          { id: 'a', text: 'Den gir ingen universelle prinsipper', isCorrect: false },
          { id: 'b', text: 'Den kan gi absurde resultater fordi reglene er absolutte og uten unntak', isCorrect: true },
          { id: 'c', text: 'Den fokuserer for mye på konsekvenser', isCorrect: false },
          { id: 'd', text: 'Den krever at vi alltid handler ut fra egeninteresse', isCorrect: false },
        ],
        solution: 'En kjent svakhet ved Kants pliktetikk er at de absolutte reglene kan gi absurde resultater. Kant selv hevdet at man ikke skal lyve, selv om en morder spør hvor vennen din gjemmer seg. Denne rigiditeten er vanskelig å forsvare i praksis.',
      },
    },
    {
      id: 're-4-2-summary',
      type: 'text',
      content: `## Oppsummering

- **Pliktetikk** vurderer handlinger ut fra om de følger moralske plikter, ikke ut fra konsekvensene.
- **Kant** mente at moralen bygger på fornuften og formulerte **det kategoriske imperativ**: Handle bare etter regler du kan ville at alle følger.
- **Humanitetsformuleringen** sier at mennesker aldri bare skal brukes som middel, men alltid også som formål i seg selv.
- Kant skilte mellom **fullkomne plikter** (absolutte forbud) og **ufullkomne plikter** (generelle påbud med frihet i oppfyllelsen).
- Pliktetikken har styrker som absolutt menneskeverd og universelle prinsipper, men kritiseres for rigiditet og for å ignorere konsekvenser.`,
    },
    {
      id: 're-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 're-4-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Tenk deg følgende dilemma: En venn gjemmer seg i huset ditt fordi noen er ute etter å skade henne. Personen som leter, banker på døren og spør om vennen din er der. Hva ville Kant mene at du bør gjøre? Hva mener du selv? Begrunn svaret.',
        solution: 'Kant ville mene at du ikke skal lyve, selv i denne situasjonen, fordi løgn er en fullkommen plikt som gjelder uten unntak. Han argumenterte for dette i essayet «Om en påstått rett til å lyve av menneskekjærlighet» (1797). Mange er uenige med Kant her og mener dette viser en svakhet ved pliktetikken – at absolutte regler kan gi urimelige resultater. Et motargument er at plikten til å beskytte uskyldige bør veie tyngre enn plikten til sannferdighet, men Kant tillot ikke slik avveining mellom fullkomne plikter. Egne refleksjoner bør vise evne til å veie argumenter fra begge sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 're-4-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft om Kants humanitetsformulering – at mennesker aldri bare skal brukes som middel – er forenlig med moderne arbeidsliv. Kan en arbeidsgiver behandle ansatte som formål i seg selv?',
        solution: 'Kants humanitetsformulering krever ikke at vi aldri bruker mennesker som middel – vi gjør det hele tiden, for eksempel ved å bruke en bussjåfør for å komme oss til jobb. Kravet er at vi aldri bruker mennesker bare som middel, men også respekterer dem som formål i seg selv. I arbeidslivet betyr dette at ansatte ikke bare er produktive ressurser, men mennesker med verdighet. En arbeidsgiver som betaler rettferdig lønn, sikrer trygge arbeidsforhold og respekterer ansattes rettigheter, behandler dem også som formål. En arbeidsgiver som utnytter, manipulerer eller ignorerer ansattes velferd, bruker dem bare som middel. Humanitetsformuleringen er dermed forenlig med arbeidsliv, men setter etiske krav til hvordan det organiseres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: Konsekvensetikk og utilitarisme
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_4_3: TextbookChapter = {
  id: 'religion-etikk-4-3',
  courseId: 'religion-etikk',
  chapterNumber: '4.3',
  title: 'Konsekvensetikk og utilitarisme',
  description: 'Konsekvensetikkens grunnprinsipper, Benthams og Mills utilitarisme, og forskjellen mellom handlings- og regelutilitarisme.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for og drøfte ulike etiske modeller',
    'drøfte etiske ideer og utfordringer knyttet til sentrale områder i samtiden',
  ],
  content: [
    {
      id: 're-4-3-intro',
      type: 'text',
      content: `# Konsekvensetikk og utilitarisme

Mens pliktetikken bedømmer handlinger ut fra om de følger moralske regler, bedømmer **konsekvensetikken** handlinger ut fra **resultatene** de fører til. En handling er moralsk riktig hvis den fører til gode konsekvenser, og moralsk gal hvis den fører til dårlige konsekvenser.

Den mest kjente formen for konsekvensetikk er **utilitarismen** (fra latin *utilitas* = nytte). Utilitarismen ble utviklet av de britiske filosofene **Jeremy Bentham** (1748–1832) og **John Stuart Mill** (1806–1873), og har hatt enorm innflytelse på moderne politikk, økonomi og lovgivning.

Utilitarismens grunnprinsipp er enkelt: **Den handlingen er moralsk riktig som fører til størst mulig lykke for flest mulig mennesker.**`,
    },
    {
      id: 're-4-3-def-1',
      type: 'definition',
      title: 'Konsekvensetikk og utilitarisme',
      content: `**Konsekvensetikk:** Etisk teori som vurderer handlinger utelukkende ut fra konsekvensene de fører til. En handling er riktig hvis den produserer gode resultater.

**Utilitarisme:** Den viktigste formen for konsekvensetikk. Grunnprinsipp: «Den handlingen er moralsk riktig som produserer størst mulig lykke (nytte) for det størst mulige antall mennesker.»

**Nytteprinsippet (the greatest happiness principle):** Vi bør alltid handle slik at summen av lykke i verden blir størst mulig. Alle berørtes lykke teller likt.`,
    },
    {
      id: 're-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 're-4-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er det grunnleggende prinsippet i utilitarismen?',
        options: [
          { id: 'a', text: 'Handle i tråd med din plikt, uavhengig av konsekvensene', isCorrect: false },
          { id: 'b', text: 'Handle slik at summen av lykke for alle berørte blir størst mulig', isCorrect: true },
          { id: 'c', text: 'Handle slik at du utvikler gode karaktertrekk', isCorrect: false },
          { id: 'd', text: 'Handle i tråd med Guds vilje', isCorrect: false },
        ],
        solution: 'Utilitarismens grunnprinsipp er nytteprinsippet: Vi bør handle slik at summen av lykke (nytte) for alle berørte blir størst mulig. Alle menneskers lykke teller likt i regnestykket.',
      },
    },
    {
      id: 're-4-3-text-2',
      type: 'text',
      content: `## Jeremy Bentham og nytteetikk

Jeremy Bentham regnes som utilitarismens grunnlegger. Han mente at all moral kan reduseres til ett enkelt prinsipp: **nytteprinsippet**.

### Hedonistisk utilitarisme
Bentham var **hedonist** – han mente at det eneste som er godt i seg selv, er **nytelse** (*pleasure*), og det eneste som er ondt, er **smerte** (*pain*). Alle handlinger bør vurderes ut fra hvor mye nytelse og smerte de produserer.

### Benthams nytelseskalkyle
Bentham utviklet en «hedonistisk kalkyle» – en metode for å beregne den totale nytelsen en handling produserer. Faktorer å vurdere:

- **Intensitet:** Hvor sterk er nytelsen eller smerten?
- **Varighet:** Hvor lenge varer den?
- **Sannsynlighet:** Hvor sikkert er det at den inntreffer?
- **Nærhet:** Hvor snart inntreffer den?
- **Fruktbarhet:** Vil den føre til mer nytelse?
- **Renhet:** Er den blandet med smerte?
- **Omfang:** Hvor mange berøres?

### Likhetsprinsippet
For Bentham teller alles nytelse likt: «Enhver teller som én, ingen teller som mer enn én.» Dette var radikalt i hans samtid og la grunnlaget for demokratisk tenkning.`,
    },
    {
      id: 're-4-3-def-2',
      type: 'definition',
      title: 'Benthams nyttekalkyle',
      content: `**Hedonisme:** Filosofisk retning som hevder at nytelse er det eneste iboende gode, og smerte det eneste iboende onde.

**Nyttekalkyle (felicific calculus):** Benthams metode for å beregne den totale nytelsen en handling produserer. Man veier intensitet, varighet, sannsynlighet, nærhet, fruktbarhet, renhet og omfang av nytelse og smerte.

**Likhetsprinsippet:** Alle menneskers nytelse og smerte teller likt i den moralske kalkylen. Ingen persons lykke er viktigere enn andres.`,
    },
    {
      id: 're-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 're-4-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva Benthams nyttekalkyle innebærer. Bruk et konkret eksempel for å illustrere hvordan den kan brukes.',
        solution: 'Benthams nyttekalkyle er en metode for å beregne den totale nytelsen en handling produserer, ved å vurdere nytelsens intensitet, varighet, sannsynlighet, nærhet, fruktbarhet, renhet og omfang. Eksempel: En kommune vurderer å bygge et nytt idrettsanlegg. Kalkylen vurderer: Intensitet – hvor stor glede gir det brukerne? Varighet – anlegget varer i mange tiår. Sannsynlighet – det er sikkert at det vil bli brukt. Omfang – tusenvis av innbyggere berøres positivt. Men man må også trekke fra: smerten ved økte skatter, støy for naboer, og tapt grøntareal. Hvis den totale nytelsen overstiger smerten, er det moralsk riktig å bygge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-3-text-3',
      type: 'text',
      content: `## John Stuart Mill – en raffinert utilitarisme

John Stuart Mill var Benthams elev, men utviklet utilitarismen videre på viktige måter.

### Kvalitative forskjeller mellom nytelser
Mills viktigste bidrag var å hevde at nytelser ikke bare skiller seg i **kvantitet** (mengde), men også i **kvalitet**. Noen nytelser er av en høyere art enn andre.

Mill formulerte det berømt: *«Det er bedre å være en misfornøyd Sokrates enn en fornøyd gris.»*

Intellektuelle, estetiske og sosiale nytelser er ifølge Mill kvalitativt overlegne rent fysiske nytelser. Et menneske som har erfart begge typer vil alltid foretrekke de høyere nytelsene.

### Mills frihetsprinsipp
Mill argumenterte også for at **individuell frihet** er avgjørende for menneskelig lykke. Staten og samfunnet bør bare begrense individets frihet for å forhindre skade på andre (skadeprinsippet). Denne tanken har hatt enorm innflytelse på liberalt demokrati.

### Mill og rettferdighet
Mill forsøkte å vise at utilitarismen kan forsvare rettferdighet og rettigheter. Rettigheter er viktige fordi respekt for dem maksimerer lykken på lang sikt. Et samfunn der rettigheter beskyttes, produserer mer total lykke enn et samfunn uten rettighetsvern.`,
    },
    {
      id: 're-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 're-4-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom Bentham og Mill når det gjelder synet på nytelse. Hvorfor er Mills skille mellom høyere og lavere nytelser viktig?',
        solution: 'Bentham mente at nytelse kun skiller seg kvantitativt – det som teller er mengden nytelse, uavhengig av type. Alle nytelser er i prinsippet like verdifulle. Mill derimot innførte et kvalitativt skille mellom «høyere» nytelser (intellektuelle, estetiske, moralske) og «lavere» nytelser (rent fysiske). Mills skille er viktig fordi det svarer på en vanlig innvending mot utilitarismen: at den er en «grisens filosofi» som bare handler om enkel nytelse. Ved å hevde at det er bedre å være en misfornøyd Sokrates enn en fornøyd gris, viser Mill at utilitarismen kan verdsette dypere menneskelige verdier som kunnskap, kunst og vennskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-3-text-4',
      type: 'text',
      content: `## Handlingsutilitarisme og regelutilitarisme

Utilitarismen har utviklet seg i to hovedretninger som gir ulike svar på hvordan nytteprinsippet skal anvendes.

### Handlingsutilitarisme
Hver enkelt handling vurderes for seg: «Hvilken handling i denne konkrete situasjonen produserer mest total lykke?»

*Eksempel:* Bør du lyve i denne situasjonen? Det kommer an på konsekvensene. Hvis løgnen fører til mer lykke enn sannheten i dette tilfellet, er det riktig å lyve.

**Problem:** Kan rettferdiggjøre handlinger som virker intuitiv gale. Hvis det ville øke den totale lykken å straffe en uskyldig person for å forhindre opptøyer, ville handlingsutilitarismen i prinsippet tillate det.

### Regelutilitarisme
Vi bør følge de **reglene** som, når de følges generelt, fører til størst total lykke. Vi vurderer ikke enkelthandlinger, men regler.

*Eksempel:* Bør du lyve? Spørsmålet er: «Fører regelen 'man bør lyve når det er nyttig' til mer lykke enn regelen 'man bør snakke sant'?» Svaret er nei – et samfunn med tillit og ærlighet produserer mer lykke totalt sett.

**Fordel:** Regelutilitarismen unngår mange av handlingsutilitarismens problemer, fordi den kan forsvare rettigheter og rettferdighet som generelle regler.`,
    },
    {
      id: 're-4-3-def-3',
      type: 'definition',
      title: 'Handlingsutilitarisme og regelutilitarisme',
      content: `**Handlingsutilitarisme:** Hver enkelt handling vurderes individuelt ut fra dens konsekvenser. Den handlingen som produserer mest lykke i den konkrete situasjonen, er den riktige.

**Regelutilitarisme:** Vi bør følge de reglene som, når de følges generelt i samfunnet, produserer størst mulig total lykke. Enkelthandlinger vurderes ut fra om de følger den beste regelen.

**Forskjellen:** Handlingsutilitarisme spør «Hva gir best resultat nå?», mens regelutilitarisme spør «Hvilken regel gir best resultat på lang sikt?»`,
    },
    {
      id: 're-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 're-4-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom handlingsutilitarisme og regelutilitarisme?',
        options: [
          { id: 'a', text: 'Handlingsutilitarisme bryr seg om konsekvenser, regelutilitarisme bryr seg om plikter', isCorrect: false },
          { id: 'b', text: 'Handlingsutilitarisme vurderer hver handling for seg, regelutilitarisme vurderer hvilke regler som generelt gir best konsekvenser', isCorrect: true },
          { id: 'c', text: 'Handlingsutilitarisme gjelder individer, regelutilitarisme gjelder samfunn', isCorrect: false },
          { id: 'd', text: 'Det er ingen vesentlig forskjell mellom dem', isCorrect: false },
        ],
        solution: 'Handlingsutilitarisme vurderer hver enkelt handling individuelt: «Hva gir best resultat nå?» Regelutilitarisme vurderer hvilke regler som generelt produserer mest lykke: «Hvilken regel gir best resultat når den følges av alle?» Regelutilitarismen kan dermed forsvare rettigheter og prinsipper som generelle regler.',
      },
    },
    {
      id: 're-4-3-text-4b',
      type: 'text',
      content: `## Preferanseutilitarisme og moderne utilitarisme

I det 20. og 21. århundre har utilitarismen fortsatt å utvikle seg. En viktig nyere variant er **preferanseutilitarisme**.

### Preferanseutilitarisme
I stedet for å fokusere på nytelse og smerte (hedonistisk utilitarisme), hevder **preferanseutilitarismen** at det moralsk riktige er å maksimere **oppfyllelsen av preferanser** – altså å handle slik at flest mulig mennesker får oppfylt sine ønsker og preferanser.

Den australske filosofen **Peter Singer** (f. 1946) er den mest kjente moderne preferanseutilitaristen. Singer har argumentert for:
- **Dyrs rettigheter:** Siden dyr kan lide og har preferanser, må deres interesser telle moralsk. Å ignorere dyrs lidelse bare fordi de ikke er mennesker, er «spesiesisme» – diskriminering basert på art.
- **Global fattigdom:** Vi har en moralsk plikt til å hjelpe de fattigste i verden. Å bruke penger på luksus mens barn dør av sult, er moralsk uholdbart – pengene produserer langt mer lykke hvis de gis til effektiv bistand.
- **Effektiv altruisme:** Singer er en frontfigur for bevegelsen «effektiv altruisme», som bruker evidensbaserte metoder for å finne de mest effektive måtene å gjøre godt på.

### Den «avmenneskeligjørende» innvendingen
Critics har hevdet at konsekvent utilitarisme kan føre til moralsk uholdbare konklusjoner. Singers argumenter har provosert fordi de tilsynelatende setter spørsmålstegn ved menneskeverdet: Hvis bare preferanser teller, har da et alvorlig funksjonshemmet spedbarn uten bevisste preferanser moralsk status? Singer har blitt sterkt kritisert for sine synspunkter på dette området.

### Utilitarisme og politikk
Utilitarismen har hatt enorm innflytelse på moderne politikk og velferdsøkonomi:
- **Kost-nytte-analyser** i offentlig politikk er direkte inspirert av utilitaristisk tenkning
- **Velferdsstatens** mål om å maksimere befolkningens velferd er utilitaristisk
- **Demokrati** kan begrunnes utilitaristisk: Flertallets vilje gjenspeiler flertallets preferanser
- **Menneskerettigheter** kan imidlertid komme i konflikt med utilitarismen, fordi de beskytter individer mot flertallet`,
    },
    {
      id: 're-4-3-def-4',
      type: 'definition',
      title: 'Preferanseutilitarisme og effektiv altruisme',
      content: `**Preferanseutilitarisme:** En variant av utilitarismen som hevder at den moralsk riktige handlingen er den som best oppfyller preferansene (ønskene) til alle berørte parter. Utviklet av blant andre Peter Singer.

**Spesiesisme:** Diskriminering basert på artstilhørighet – å gi menneskers interesser forrang bare fordi de er mennesker, uten moralsk relevant grunn. Begrepet ble popularisert av Peter Singer.

**Effektiv altruisme:** En filosofisk og sosial bevegelse som bruker evidensbaserte metoder for å finne de mest effektive måtene å gjøre godt for verden på. Målet er å maksimere positiv innvirkning per investert krone og time.

**Kost-nytte-analyse:** En metode for å vurdere om en handling eller politikk er verdt å gjennomføre ved å sammenligne totale kostnader med totale fordeler – en praktisk anvendelse av utilitaristisk tenkning.`,
    },
    {
      id: 're-4-3-example-1',
      type: 'example',
      title: 'Utilitarismen i praksis: Klassiske dilemmaer',
      content: `Utilitarismen gir klare, men noen ganger kontroversielle svar på etiske dilemmaer:

**Organdonasjon-dilemmaet:** Fem pasienter vil dø uten organtransplantasjon. En frisk person med kompatible organer kommer inn for en rutinesjekk. En ren handlingsutilitarist kunne i prinsippet forsvare å drepe den ene for å redde fem – dette er et velkjent problem med teorien. En regelutilitarist ville forby det fordi en slik regel ville ødelegge tilliten til helsevesenet.

**Torturspørsmålet:** En terrorist har plantet en bombe som vil drepe tusenvis. Politiet har pågrepet ham, men han nekter å si hvor bomben er. Er det moralsk riktig å torturere ham for å redde de mange? Utilitarismen kan i ekstreme tilfeller forsvare tortur hvis det redder mange liv – noe som viser teoriens problemer med å beskytte individets rettigheter.

**Klimaetikk:** Utilitarismen gir sterke argumenter for klimahandling: Klimaendringer vil føre til enorm lidelse for milliarder av mennesker. Selv store kostnader i dag er rettferdige hvis de forhindrer langt større lidelse i fremtiden. Utilitarismen krever at vi tar fremtidige generasjoners lykke like alvorlig som vår egen.

**Ressursfordeling i helsevesenet:** Hvem skal få en sjelden, livsnødvendig behandling – en ung student eller en eldre pensjonist? Utilitarismen ville vurdere hvem som har flest «gode leveår» igjen, men denne logikken kan oppfattes som diskriminering av eldre.`,
    },
    {
      id: 're-4-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 're-4-3-ex-7',
        number: '7',
        type: 'classic',
        task: 'Peter Singer hevder at vi har en sterk moralsk plikt til å gi bort det meste av inntekten vår til effektiv fattigdomsbekjempelse. Forklar Singers argument og drøft det. Er du enig eller uenig?',
        solution: `Singers argument: Hvis vi kan forhindre noe svært vondt uten å ofre noe av sammenlignbar moralsk betydning, bør vi gjøre det. Et barn som drukner i en dam er analogt til et barn som dør av fattigdom i et annet land – forskjellen i avstand er ikke moralsk relevant. Derfor bør vi gi bort inntekt ut over det nødvendige til effektiv bistand. Styrker: Argumentet er logisk konsistent og tvinger oss til å tenke over hvorfor vi behandler nærhet som moralsk relevant. Det utfordrer vår komfortsone på en viktig måte. Svakheter: Kravet kan være for strengt og underminere motivasjonen til å handle moralsk i det hele tatt. Det tar ikke hensyn til spesielle forpliktelser overfor familie og nærmeste. Det kan også ignorere strukturelle årsaker til fattigdom som krever politisk handling fremfor individuell veldedighet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 're-4-3-ex-8',
        number: '8',
        type: 'multiple-choice',
        task: 'Hva menes med begrepet «spesiesisme» i Peter Singers filosofi?',
        options: [
          { id: 'a', text: 'At mennesker bør leve i harmoni med naturen', isCorrect: false },
          { id: 'b', text: 'At det å gi menneskers interesser forrang bare fordi de tilhører arten Homo sapiens er en form for diskriminering', isCorrect: true },
          { id: 'c', text: 'At alle arter har like mye verdi som mennesker', isCorrect: false },
          { id: 'd', text: 'At mennesker er den viktigste arten på jorda', isCorrect: false },
        ],
        solution: `Spesiesisme er begrepet Peter Singer bruker for diskriminering basert på artstilhørighet. Singer mener at å automatisk gi menneskers interesser forrang over dyrs interesser bare fordi vi tilhører arten Homo sapiens, er en form for urettferdig diskriminering – analogt med rasisme og sexisme. Det avgjørende er ikke hvilken art et vesen tilhører, men om det kan lide. Dersom et dyr kan lide, må dets lidelse telle moralsk.`,
      },
    },
    {
      id: 're-4-3-text-5',
      type: 'text',
      content: `## Styrker og svakheter ved utilitarismen

### Styrker
- **Intuitiv tiltalende:** De fleste er enige i at konsekvenser er relevante for moralsk vurdering
- **Likhet:** Alles lykke teller likt – ingen privilegier
- **Fleksibel:** Kan tilpasses ulike situasjoner, i motsetning til absolutte regler
- **Praktisk nyttig:** Mye brukt i politikk og økonomi (kost-nytte-analyser, velferdsøkonomi)
- **Fremtidsrettet:** Fokuserer på å gjøre verden bedre

### Svakheter
- **Rettferdighetsproblemer:** Kan i prinsippet rettferdiggjøre urettferdige handlinger hvis de øker total lykke (for eksempel å ofre én for å redde mange)
- **Minoritetsvern:** Flertallets lykke kan gå på bekostning av minoriteters rettigheter
- **Uforutsigbare konsekvenser:** Vi vet ofte ikke hva konsekvensene av en handling blir
- **Urimelige krav:** Konsekvent utilitarisme krever at vi alltid handler slik at lykken maksimeres – vi bør for eksempel gi bort all inntekt ut over det nødvendige
- **Vanskelig å måle:** Hvordan sammenligner og veier vi ulike menneskers lykke og smerte?
- **Instrumentalisering:** Mennesker kan bli redusert til «lykkeprodusenter» – verdien deres avhenger av bidraget til total lykke`,
    },
    {
      id: 're-4-3-summary',
      type: 'text',
      content: `## Oppsummering

- **Konsekvensetikk** vurderer handlinger ut fra konsekvensene. **Utilitarismen** er den viktigste formen: Den handlingen er riktig som produserer størst lykke for flest mulig.
- **Bentham** mente at nytelse og smerte er de eneste relevante faktorene, og utviklet en nyttekalkyle for å beregne total nytte.
- **Mill** innførte et kvalitativt skille mellom høyere og lavere nytelser, og forsvarte individuell frihet som grunnlag for lykke.
- **Handlingsutilitarisme** vurderer hver handling for seg, mens **regelutilitarisme** vurderer hvilke regler som generelt gir best konsekvenser.
- Utilitarismen er intuitiv og praktisk, men kritiseres for å kunne rettferdiggjøre urettferdighet og for å stille urimelige krav.`,
    },
    {
      id: 're-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 're-4-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Tenk deg følgende dilemma: Fem pasienter på et sykehus vil dø uten organtransplantasjon. En frisk person kommer inn for en rutinesjekk. Ville det være moralsk riktig å drepe den friske personen for å redde de fem? Begrunn svaret ut fra henholdsvis handlingsutilitarisme og regelutilitarisme.',
        solution: 'Handlingsutilitarisme: I denne konkrete situasjonen produserer det mer total lykke å redde fem liv enn å redde ett. Rent teknisk ville handlingsutilitarismen kunne rettferdiggjøre å ofre den ene – dette er et velkjent problem med teorien. Regelutilitarisme: Regelen «leger bør drepe friske pasienter for å redde andre» ville føre til katastrofale konsekvenser: Ingen ville tørre å gå til legen, tilliten til helsevesenet ville bryte sammen, og total lykke ville synke dramatisk. Regelutilitarismen ville dermed forby handlingen. Dette eksempelet viser en viktig forskjell mellom de to variantene og illustrerer hvorfor mange foretrekker regelutilitarisme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 're-4-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign Kants pliktetikk med utilitarismen. Hvilken av de to teoriene mener du gir den beste veiledningen for moralske valg? Begrunn svaret ditt.',
        solution: 'Kants pliktetikk vurderer handlinger ut fra om de følger moralske regler (det kategoriske imperativ), uavhengig av konsekvenser. Utilitarismen vurderer handlinger utelukkende ut fra konsekvensene. Pliktetikken gir absolutt menneskeverd og klare regler, men kan gi absurde resultater i ekstreme situasjoner. Utilitarismen er fleksibel og fokuserer på å gjøre verden bedre, men kan i prinsippet rettferdiggjøre urettferdighet. En god drøfting peker på at de to teoriene utfyller hverandre: Pliktetikken minner oss om at mennesker har ukrenkelige rettigheter, mens utilitarismen minner oss om at konsekvenser betyr noe. Mange filosofer argumenterer for en kombinasjon av innsiktene fra begge tradisjonene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Dydsetikk – Aristoteles og det gode liv
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_4_4: TextbookChapter = {
  id: 'religion-etikk-4-4',
  courseId: 'religion-etikk',
  chapterNumber: '4.4',
  title: 'Dydsetikk – Aristoteles og det gode liv',
  description: 'Aristoteles\' dydsetikk, sentrale dyder som klokskap og rettferdighet, eudaimonia som livsmål, og moderne dydsetikk hos MacIntyre.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for og drøfte ulike etiske modeller',
    'drøfte etiske ideer og utfordringer knyttet til sentrale områder i samtiden',
  ],
  content: [
    {
      id: 're-4-4-intro',
      type: 'text',
      content: `# Dydsetikk – Aristoteles og det gode liv

Mens pliktetikken spør «Hva bør jeg gjøre?» og konsekvensetikken spør «Hva fører til best resultat?», stiller **dydsetikken** et annet grunnleggende spørsmål: **«Hva slags menneske bør jeg være?»**

Dydsetikken er den eldste av de store etiske tradisjonene i vestlig filosofi. Den har sine røtter hos de greske filosofene, og fremfor alt hos **Aristoteles** (384–322 f.Kr.), som regnes som dydsetikkens fremste talsmann. I motsetning til Kant og Bentham fokuserer ikke Aristoteles på enkelthandlinger eller regler, men på **karaktertrekk** – de dydene som gjør et menneske godt og som leder til et godt liv.

Etter å ha vært i bakgrunnen i flere hundre år, opplevde dydsetikken en renessanse på 1900-tallet og er i dag en av de tre dominerende etiske teoriene.`,
    },
    {
      id: 're-4-4-def-1',
      type: 'definition',
      title: 'Dydsetikk og dyd',
      content: `**Dydsetikk:** En etisk teori som fokuserer på karaktertrekk (dyder) fremfor regler eller konsekvenser. Det sentrale spørsmålet er «Hva slags menneske bør jeg være?» fremfor «Hva bør jeg gjøre?»

**Dyd (areté):** Et positivt karaktertrekk eller en moralsk dyktighetsegenskap som gjør et menneske godt og som hjelper det å leve et godt liv. Eksempler: mot, rettferdighet, måtehold, klokskap.

**Last (kakia):** Det motsatte av en dyd – et negativt karaktertrekk som feighet, urettferdighet eller grådighet.

Aristoteles mente at dyder ikke er medfødt, men utvikles gjennom **praksis og vane**. Man blir modig ved å gjøre modige handlinger, rettferdig ved å handle rettferdig.`,
    },
    {
      id: 're-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 're-4-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er det sentrale spørsmålet i dydsetikken?',
        options: [
          { id: 'a', text: '«Hva er min plikt i denne situasjonen?»', isCorrect: false },
          { id: 'b', text: '«Hva fører til størst mulig lykke for flest mulig?»', isCorrect: false },
          { id: 'c', text: '«Hva slags menneske bør jeg være?»', isCorrect: true },
          { id: 'd', text: '«Hvilke rettigheter har jeg i denne situasjonen?»', isCorrect: false },
        ],
        solution: 'Dydsetikkens sentrale spørsmål er «Hva slags menneske bør jeg være?» – altså fokus på karakter og dyder, ikke på regler (pliktetikk) eller konsekvenser (utilitarisme). En dydig person vil naturlig handle riktig fordi gode karaktertrekk leder til gode handlinger.',
      },
    },
    {
      id: 're-4-4-text-2',
      type: 'text',
      content: `## Aristoteles' dydsetikk

Aristoteles la grunnlaget for dydsetikken i sitt verk *Nikomakiske etikk*. Hans utgangspunkt var at alle ting har et **formål** (*telos*) – en eik har som formål å bli et stort tre, en kniv har som formål å skjære godt. På samme måte har mennesket et formål: å realisere sitt potensial som fornuftsvesen.

### Den gylne middelvei

Aristoteles' kanskje mest kjente prinsipp er **den gylne middelvei** (*mesotes*). En dyd er en middelvei mellom to ytterligheter – en overdrivelse og en mangel – som begge er laster.

| Mangel (last) | Middelvei (dyd) | Overdrivelse (last) |
|---|---|---|
| Feighet | **Mot** | Dumdristighet |
| Gjerrighet | **Gavmildhet** | Sløseri |
| Selvutslettelse | **Sunn stolthet** | Forfengelighet |
| Hemmingsløshet | **Måtehold** | Følelsesløshet |
| Konfliktskyhet | **Vennlighet** | Slesk smiger |

Den gylne middelvei er ikke et matematisk gjennomsnitt, men det som er **passende i situasjonen**. Hva som er modig, avhenger av hvem du er og hvilken situasjon du står i. En soldat og en sivilist viser mot på ulike måter.`,
    },
    {
      id: 're-4-4-def-2',
      type: 'definition',
      title: 'Sentrale dyder hos Aristoteles',
      content: `**Phronesis (praktisk klokskap):** Den viktigste dyden ifølge Aristoteles. Evnen til å vurdere hva som er riktig å gjøre i konkrete situasjoner – en form for praktisk visdom som forener kunnskap med erfaring og dømmekraft.

**Rettferdighet (dikaiosyne):** Å gi enhver det de fortjener og behandle like tilfeller likt. Aristoteles skilte mellom fordelingsrettferdighet (rettferdig fordeling av goder) og utjevningsrettferdighet (rettferdige avtaler og straffeutmåling).

**Mot (andreia):** Evnen til å handle riktig til tross for frykt. Middelveien mellom feighet og dumdristighet.

**Måtehold (sophrosyne):** Evnen til å kontrollere begjær og nytelser. Middelveien mellom hemmingsløshet og følelsesløshet.

**Den gylne middelvei (mesotes):** Prinsippet om at en dyd er en middelvei mellom to ytterligheter (overdrivelse og mangel), tilpasset situasjonen og personen.`,
    },
    {
      id: 're-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 're-4-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar Aristoteles\' prinsipp om den gylne middelvei. Gi to eksempler på dyder som middelveier mellom to laster.',
        solution: 'Aristoteles mente at en dyd er en middelvei mellom to ytterligheter – en overdrivelse og en mangel – som begge er laster. Middelveien er ikke et matematisk gjennomsnitt, men det som er passende i den konkrete situasjonen. Eksempel 1: Mot er middelveien mellom feighet (mangel på mot) og dumdristighet (for mye risikovilje). En modig person handler riktig til tross for frykt, men tar ikke unødvendig risiko. Eksempel 2: Gavmildhet er middelveien mellom gjerrighet (for lite giving) og sløseri (for mye giving). En gavmild person gir passende mye til riktig tid og til riktige formål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-4-text-3',
      type: 'text',
      content: `## Eudaimonia – det gode liv

Det overordnede målet i Aristoteles' etikk er **eudaimonia** – et gresk begrep som ofte oversettes med «lykke», men som egentlig betyr noe dypere: å **leve godt**, å **blomstre som menneske**, å realisere sitt fulle potensial.

### Hva eudaimonia ikke er
Aristoteles var tydelig på at eudaimonia **ikke** er det samme som:
- **Nytelse:** Nytelse er viktig, men et liv kun preget av nytelse er et «dyreliv»
- **Rikdom:** Penger er bare et middel, ikke et mål i seg selv
- **Ære og berømmelse:** Avhengig av andres vurdering, og dermed ustabilt

### Hva eudaimonia er
Eudaimonia er å leve i samsvar med dydene – å utøve sine beste evner på en utmerket måte over et helt liv. Det er en **aktivitet**, ikke en tilstand. Man oppnår eudaimonia ved å:

1. **Utvikle og utøve dydene** – leve moralsk godt
2. **Bruke fornuften** – menneskets særegne egenskap
3. **Leve i et fellesskap** – mennesket er et politisk vesen (*zoon politikon*)
4. **Ha visse ytre goder** – helse, venner, et minimum av materielle ressurser

Aristoteles erkjente at uflaks – sykdom, fattigdom, tap av nære – kan hindre eudaimonia, selv for den dydige. Et godt liv krever både gode karaktertrekk og rimelige livsomstendigheter.`,
    },
    {
      id: 're-4-4-def-3',
      type: 'definition',
      title: 'Eudaimonia',
      content: `**Eudaimonia (εὐδαιμονία):** Gresk begrep som betyr «å leve godt» eller «å blomstre som menneske». Ofte oversatt som «lykke», men innebærer mer enn en subjektiv følelse – det handler om å realisere sitt potensial gjennom et dydfullt liv.

**Telos:** Gresk for «formål» eller «mål». Aristoteles mente at alt har et formål, og menneskets telos er eudaimonia – å leve godt i samsvar med fornuft og dyder.

**Zoon politikon:** Aristoteles' betegnelse på mennesket som et «politisk» eller «sosialt vesen». Eudaimonia kan bare oppnås i et fellesskap med andre mennesker.`,
    },
    {
      id: 're-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 're-4-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva mente Aristoteles med eudaimonia?',
        options: [
          { id: 'a', text: 'En forbigående følelse av nytelse og glede', isCorrect: false },
          { id: 'b', text: 'Å akkumulere mest mulig rikdom og makt', isCorrect: false },
          { id: 'c', text: 'Å leve godt og blomstre som menneske gjennom et dydfullt liv', isCorrect: true },
          { id: 'd', text: 'Å oppnå berømmelse og anerkjennelse fra andre', isCorrect: false },
        ],
        solution: 'Eudaimonia betyr å leve godt og blomstre som menneske. Det er ikke en forbigående følelse, men en aktivitet – å utøve dydene over et helt liv. Aristoteles avviste at rikdom, nytelse eller ære alene kan gi eudaimonia; det krever moralsk karakter, fornuft, fellesskap og et minimum av ytre goder.',
      },
    },
    {
      id: 're-4-4-text-3b',
      type: 'text',
      content: `## Intellektuelle og moralske dyder

Aristoteles skilte mellom to hovedtyper av dyder: **intellektuelle dyder** og **moralske dyder**. Denne distinksjonen er viktig for å forstå hans helhetlige syn på det gode liv.

### Intellektuelle dyder
Intellektuelle dyder handler om fornuftens evner og utvikles primært gjennom **undervisning og studier**:
- **Sophia (teoretisk visdom):** Evnen til å forstå de dypeste sannhetene om virkeligheten. Filosofi og vitenskap er uttrykk for sophia.
- **Episteme (vitenskapelig kunnskap):** Sikker kunnskap om det som er nødvendig og uforanderlig.
- **Nous (intellektuell intuisjon):** Evnen til å gripe grunnleggende prinsipper direkte.
- **Techne (håndverkskunnskap):** Kunnskap om hvordan man lager ting – praktisk dyktighet.
- **Phronesis (praktisk klokskap):** Den viktigste dyden for etikken – evnen til å vurdere hva som er riktig i konkrete situasjoner.

### Moralske dyder
Moralske dyder handler om karaktertrekk og utvikles gjennom **praksis og vane**:
- Mot, måtehold, gavmildhet, rettferdighet, vennlighet, sannferdighet, vidd, beskjedenhet
- De moralske dydene krever at man handler med **riktige følelser** til riktig tid – ikke bare at man gjør det rette, men at man gjør det med riktig holdning
- En virkelig modig person handler ikke bare modig, men **føler** den rette blandingen av frykt og mot

### Phronesis som mesterdyd
Phronesis (praktisk klokskap) har en unik rolle i Aristoteles\` system fordi den binder sammen intellektuelle og moralske dyder. Uten phronesis kan de moralske dydene gå galt – mot uten klokskap blir dumdristighet, gavmildhet uten klokskap blir sløseri.

Phronesis er evnen til å se hva som er **passende i den konkrete situasjonen**. Den kan ikke reduseres til regler – den krever erfaring, dømmekraft og sensitivitet for detaljer. En person med phronesis vet når det er riktig å være streng og når det er riktig å vise nåde, når det er riktig å snakke og når det er riktig å tie.`,
    },
    {
      id: 're-4-4-def-4',
      type: 'definition',
      title: 'Intellektuelle og moralske dyder',
      content: `**Intellektuelle dyder:** Dyder knyttet til fornuftens evner, utviklet gjennom undervisning. Inkluderer sophia (teoretisk visdom), episteme (kunnskap), nous (intuisjon), techne (håndverkskunnskap) og phronesis (praktisk klokskap).

**Moralske dyder:** Karaktertrekk som utvikles gjennom praksis og vane. Inkluderer mot, måtehold, gavmildhet, rettferdighet og vennlighet. Krever at man handler med riktige følelser og holdninger, ikke bare riktige handlinger.

**Sophia (teoretisk visdom):** Den høyeste intellektuelle dyden – evnen til å forstå de dypeste sannhetene om virkeligheten gjennom filosofi og kontemplasjon.

**Techne (håndverkskunnskap):** Praktisk dyktighet i å lage eller produsere noe – for eksempel en smed, kunstner eller lege som utøver sitt fag med dyktighet.`,
    },
    {
      id: 're-4-4-example-1',
      type: 'example',
      title: 'Dydsetikken i praksis: Moralske forbilder',
      content: `Dydsetikken legger vekt på at vi lærer moral gjennom å studere og etterligne **moralske forbilder**. Her er noen eksempler på personer som har blitt fremhevet som dydige:

**Nelson Mandela** – Etter 27 år i fengsel viste Mandela ekstraordinært mot, tilgivelse og rettferdighet ved å arbeide for forsoning i stedet for hevn. Han demonstrerte phronesis (praktisk klokskap) ved å innse at fred krevde samarbeid med de tidligere undertrykkerne.

**Malala Yousafzai** – Viste mot (andreia) ved å kjempe for jenteres rett til utdanning i Taliban-kontrollerte områder, selv etter å ha blitt skutt. Hun demonstrerer også rettferdighet og utholdenhet.

**Desmond Tutu** – Illustrerer dydene barmhjertighet og tilgivelse gjennom sitt arbeid med Sannhets- og forsoningskommisjonen i Sør-Afrika. Viser at rettferdighet kan forenes med medfølelse.

Dydsetikken påpeker at vi ikke bare lærer moral fra regler og prinsipper, men fra **historier og eksempler**. Å studere dydige personers liv og handlinger utvikler vår egen moralske sensitivitet og dømmekraft. Aristoteles selv mente at barn lærer moral ved å observere og etterligne gode voksne.`,
    },
    {
      id: 're-4-4-text-3c',
      type: 'text',
      content: `## Vennskap og fellesskap i Aristoteles\` etikk

Et ofte oversett, men viktig aspekt av Aristoteles\` etikk er hans analyse av **vennskap** (*philia*). Aristoteles viet to av ti bøker i *Nikomakiske etikk* til vennskap – noe som viser hvor sentralt det var i hans tenkning.

### Tre typer vennskap
Aristoteles skilte mellom tre typer vennskap:

1. **Nyttevennskap:** Venner som er sammen fordi de har nytte av hverandre – for eksempel forretningspartnere. Dette vennskapet oppløses når nytten forsvinner.
2. **Nytelsesvennsap:** Venner som er sammen fordi de nyter hverandres selskap – for eksempel festvenner. Oppløses når underholdningsverdien avtar.
3. **Karaktervennskap (det fullkomne vennskap):** Venner som verdsetter hverandres karakter og ønsker det gode for den andre for den andres egen skyld. Dette er det dypeste og mest varige vennskapet.

### Vennskap som nødvendig for eudaimonia
Aristoteles mente at **ingen kan oppnå eudaimonia alene**. Mennesket er et sosialt vesen (*zoon politikon*), og det gode livet leves nødvendigvis i fellesskap med andre. Karaktervennskap er en av livets største goder fordi:
- Det gir oss mulighet til å utøve dyder som gavmildhet, lojalitet og rettferdighet
- Det gir oss et «speil» der vi kan se oss selv og utvikle oss moralsk
- Det beriker livet med delt glede og delt sorg

### Fellesskap og politikk
Aristoteles mente at mennesker realiserer sitt potensial i **politiske fellesskap** (polis). Staten har ikke bare en praktisk funksjon (sikkerhet, handel), men en moralsk funksjon: Den skal skape rammene for at borgerne kan leve gode liv og utvikle dydene. God politikk handler derfor ikke bare om velstand, men om å fremme borgernes moralske blomstring.

Denne tanken har fått ny aktualitet i vår tid. Kan moderne samfunn, med sin individualisme og fragmentering, gi rom for den typen fellesskap som dydsetikken krever?`,
    },
    {
      id: 're-4-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 're-4-4-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: `Aristoteles skilte mellom tre typer vennskap. Hva kjennetegner det «fullkomne vennskapet»?`,
        options: [
          { id: 'a', text: 'At vennene har nytte av hverandre i forretningslivet', isCorrect: false },
          { id: 'b', text: 'At vennene nyter hverandres selskap på fester og arrangementer', isCorrect: false },
          { id: 'c', text: `At vennene verdsetter hverandres karakter og ønsker det gode for den andre for den andres egen skyld`, isCorrect: true },
          { id: 'd', text: 'At vennene deler samme politiske synspunkter', isCorrect: false },
        ],
        solution: `Det fullkomne vennskapet (karaktervennskapet) kjennetegnes ved at vennene verdsetter hverandres karakter og ønsker det gode for den andre for den andres egen skyld – ikke for nytte eller nytelse. Dette er det dypeste og mest varige vennskapet ifølge Aristoteles, og det krever tid, tillit og gjensidig dydighet.`,
      },
    },
    {
      id: 're-4-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 're-4-4-ex-8',
        number: '8',
        type: 'classic',
        task: `Aristoteles mente at mennesker trenger fellesskap for å oppnå eudaimonia. Drøft om dette er relevant i dagens individualistiske samfunn. Kan man leve et godt liv alene?`,
        solution: `Aristoteles mente at mennesket er et sosialt vesen (zoon politikon) som bare kan oppnå eudaimonia i fellesskap. Dyder som rettferdighet, gavmildhet og vennskap krever andre mennesker å utøves overfor. Karaktervennskap er en av livets største goder. I dagens individualistiske samfunn er dette relevant fordi mange opplever ensomhet, fragmentering og mangel på dype relasjoner. Forskning viser at sosiale relasjoner er avgjørende for helse og livskvalitet. Samtidig kan man argumentere for at moderne individer har større frihet til å velge sine fellesskap og at autonomi er en viktig verdi Aristoteles undervurderte. En balansert konklusjon er at Aristoteles har rett i at fellesskap er nødvendig for et godt liv, men at formen for fellesskap kan variere – det trenger ikke være den greske bystaten.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-4-text-4',
      type: 'text',
      content: `## MacIntyre og moderne dydsetikk

På 1900-tallet opplevde dydsetikken en kraftig renessanse. Den viktigste pådriveren var den skotsk-amerikanske filosofen **Alasdair MacIntyre** (f. 1929), som i boken *After Virtue* (1981) argumenterte for at moderne moralfilosofi har mislyktes.

### MacIntyres kritikk av moderne etikk
MacIntyre hevdet at det moderne samfunnet mangler et felles rammeverk for moral. Vi har arvet biter av ulike etiske tradisjoner – plikter fra Kant, nytte fra Bentham, rettigheter fra opplysningstiden – men uten en helhetlig forståelse som binder dem sammen. Resultatet er at moralske debatter blir interminable: Vi snakker forbi hverandre fordi vi mangler felles premisser.

### Tilbake til Aristoteles
MacIntyres løsning var å gjenopplive aristotelisk dydsetikk, tilpasset en moderne kontekst. Han la særlig vekt på:

- **Praksiser:** Mennesker utvikler dyder innenfor konkrete fellesskap og virksomheter – yrker, foreninger, familier. Det er i slike praksiser vi lærer hva dyktighet, ærlighet og samarbeid betyr.
- **Narrativ identitet:** Mennesket forstår seg selv gjennom en livsfortelling. Dydene gir denne fortellingen retning og mening.
- **Tradisjon:** Moralske verdier er forankret i levende tradisjoner som utvikler seg over tid. Vi kan ikke starte fra null, men må bygge videre på det vi har arvet.

### Andre moderne dydsetikere
- **Philippa Foot** (1920–2010): Argumenterte for at dyder er nødvendige for menneskelig blomstring, på samme måte som sterke røtter er nødvendige for en plante.
- **Martha Nussbaum** (f. 1947): Utviklet en «kapabilitetstilnærming» inspirert av Aristoteles, som definerer grunnleggende menneskelige evner alle bør ha mulighet til å realisere.`,
    },
    {
      id: 're-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 're-4-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar MacIntyres kritikk av moderne moralfilosofi. Hvorfor mente han at vi trenger å vende tilbake til dydsetikken?',
        solution: 'MacIntyre hevdet at moderne moralfilosofi har mislyktes fordi vi har mistet et felles rammeverk for moral. Vi bruker begreper fra ulike tradisjoner – plikter, nytte, rettigheter – uten en helhetlig forståelse som binder dem sammen. Resultatet er at moralske debatter blir endeløse og uløselige, fordi vi mangler felles premisser. Hans løsning var å gjenopplive Aristoteles\' dydsetikk, som gir en helhetlig forståelse av det gode liv forankret i konkrete fellesskap og tradisjoner. I slike fellesskap lærer mennesker dyder gjennom praksis, og moralen får et konkret innhold knyttet til menneskelig blomstring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-4-text-5',
      type: 'text',
      content: `## Styrker og svakheter ved dydsetikken

### Styrker
- **Helhetlig:** Ser på hele menneskets karakter, ikke bare enkelthandlinger
- **Realistisk:** Anerkjenner at moral handler om å utvikle seg over tid, ikke om å følge perfekte regler
- **Fellesskapsbasert:** Fremhever at vi er sosiale vesener som former hverandre
- **Praktisk klokskap:** Phronesis gir rom for skjønn og tilpasning til konkrete situasjoner
- **Motivasjon:** Gir en forklaring på hvorfor vi bør være moralske – det leder til et godt liv

### Svakheter
- **Vagt:** Gir ikke klare regler for handling i konkrete situasjoner. Hva ville «den dydige personen» gjort?
- **Kulturavhengig:** Hvilke dyder er de rette? Ulike kulturer verdsetter ulike karaktertrekk
- **Elitistisk:** Aristoteles' etikk var begrenset – kvinner, slaver og «barbarer» var utelukket fra eudaimonia
- **Vanskelig å løse konflikter:** Når dyder kolliderer – for eksempel ærlighet og vennlighet – gir dydsetikken ingen klar metode for å velge
- **Sirkularitet:** «En dydig handling er det en dydig person ville gjort» – men hvem er en dydig person?

## Oppsummering

- **Dydsetikken** fokuserer på karakter og spør «Hva slags menneske bør jeg være?»
- **Aristoteles** mente at dyder er middelveier mellom to ytterligheter, og at menneskets mål er **eudaimonia** – å leve godt gjennom et dydfullt liv i fellesskap med andre.
- De sentrale dydene er **phronesis** (praktisk klokskap), **rettferdighet**, **mot** og **måtehold**.
- **MacIntyre** gjenopplivet dydsetikken på 1900-tallet og argumenterte for at vi trenger fellesskap og tradisjoner for å gi moralen mening.
- Dydsetikken gir en helhetlig og realistisk tilnærming til moral, men kritiseres for å være vag og kulturavhengig.`,
    },
    {
      id: 're-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 're-4-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign dydsetikken med pliktetikken og utilitarismen. Hvilke styrker og svakheter har de tre etiske teoriene sammenlignet med hverandre?',
        solution: 'Pliktetikken (Kant) fokuserer på universelle regler og plikter. Styrke: klare prinsipper og absolutt menneskeverd. Svakhet: rigide regler som kan gi absurde resultater. Utilitarismen (Bentham/Mill) fokuserer på konsekvenser og total lykke. Styrke: fleksibel og praktisk. Svakhet: kan rettferdiggjøre urettferdighet og er vanskelig å beregne. Dydsetikken (Aristoteles) fokuserer på karakter og det gode liv. Styrke: helhetlig og realistisk, vektlegger moralsk utvikling. Svakhet: vag – gir ingen klare handlingsregler. De tre teoriene utfyller hverandre: Pliktetikken minner om rettigheter og menneskeverd, utilitarismen om at konsekvenser betyr noe, og dydsetikken om at moral handler om hvem vi er, ikke bare hva vi gjør.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 're-4-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva mente Aristoteles med phronesis?',
        options: [
          { id: 'a', text: 'Evnen til abstrakt, teoretisk tenkning om moralske prinsipper', isCorrect: false },
          { id: 'b', text: 'Praktisk klokskap – evnen til å vurdere hva som er riktig å gjøre i konkrete situasjoner', isCorrect: true },
          { id: 'c', text: 'Den medfødte evnen til å skille mellom rett og galt', isCorrect: false },
          { id: 'd', text: 'Evnen til å beregne konsekvensene av en handling', isCorrect: false },
        ],
        solution: 'Phronesis er praktisk klokskap – evnen til å vurdere hva som er riktig å gjøre i konkrete situasjoner. Det er ikke abstrakt teori, men en praktisk visdom som kombinerer kunnskap, erfaring og god dømmekraft. Aristoteles mente phronesis var den viktigste dyden, fordi den styrer bruken av alle andre dyder.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.5: Nærhetsetikk og omsorgsetikk
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_4_5: TextbookChapter = {
  id: 'religion-etikk-4-5',
  courseId: 'religion-etikk',
  chapterNumber: '4.5',
  title: 'Nærhetsetikk og omsorgsetikk',
  description: 'Levinas\' nærhetsetikk, Løgstrups etiske fordring, og Gilligans omsorgsetikk som alternativer til tradisjonelle etiske teorier.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for og drøfte ulike etiske modeller',
    'drøfte etiske ideer og utfordringer knyttet til sentrale områder i samtiden',
  ],
  content: [
    {
      id: 're-4-5-intro',
      type: 'text',
      content: `# Nærhetsetikk og omsorgsetikk

De store etiske teoriene – pliktetikk, utilitarisme og dydsetikk – har til felles at de søker **generelle prinsipper** for moralsk handling. Men hva om moralen ikke først og fremst handler om regler og prinsipper, men om **møtet med det andre mennesket**?

**Nærhetsetikken** og **omsorgsetikken** representerer et alternativ til de tradisjonelle teoriene. De hevder at moralen begynner i det konkrete møtet med andre mennesker – i ansiktet, i sårbarheteten, i relasjonen. Moralen er ikke først og fremst noe vi tenker oss frem til, men noe vi **erfarer** i møte med andre.

Disse retningene har hatt stor innflytelse på etisk tenkning i Norden, særlig gjennom den danske filosofen K.E. Løgstrup og den fransk-litauiske filosofen Emmanuel Levinas.`,
    },
    {
      id: 're-4-5-def-1',
      type: 'definition',
      title: 'Nærhetsetikk',
      content: `**Nærhetsetikk:** En etisk retning som hevder at moralen begynner i det konkrete møtet med det andre mennesket. Det er den andres sårbarhet og appell som skaper moralsk ansvar – ikke abstrakte prinsipper.

**Omsorgsetikk:** En beslektet retning som fremhever omsorg, relasjoner og empati som moralens kjerne, i motsetning til abstrakte rettighets- og rettferdighetsprinsipper.

Begge retninger kritiserer tradisjonell etikk for å være for abstrakt og upersonlig, og for å overse den rollen følelser, relasjoner og konkrete møter spiller i moralsk liv.`,
    },
    {
      id: 're-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 're-4-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er nærhetsetikkens viktigste kritikk av tradisjonelle etiske teorier?',
        options: [
          { id: 'a', text: 'At de ikke tar hensyn til konsekvenser', isCorrect: false },
          { id: 'b', text: 'At de er for opptatt av følelser og relasjoner', isCorrect: false },
          { id: 'c', text: 'At de er for abstrakte og overser det konkrete møtet mellom mennesker', isCorrect: true },
          { id: 'd', text: 'At de ikke gir klare nok regler for handling', isCorrect: false },
        ],
        solution: 'Nærhetsetikken kritiserer tradisjonelle etiske teorier for å være for abstrakte og upersonlige. Moralen begynner ikke i generelle prinsipper eller kalkyler, men i det konkrete, ansikt-til-ansikt-møtet med et annet menneske. Det er den andres sårbarhet og appell som vekker vårt moralske ansvar.',
      },
    },
    {
      id: 're-4-5-text-2',
      type: 'text',
      content: `## Emmanuel Levinas: Den andres ansikt

Den fransk-litauiske filosofen **Emmanuel Levinas** (1906–1995) er nærhetsetikkens viktigste tenker. Som litauisk jøde mistet han det meste av familien i Holocaust, en erfaring som preget hele hans filosofi.

### Ansiktet
Det sentrale begrepet hos Levinas er **ansiktet** (*le visage*). Når vi møter et annet menneskes ansikt, møter vi noe som ikke kan reduseres til et objekt eller en kategori. Ansiktet er **nakent og sårbart** – det uttrykker en appell: «Du skal ikke drepe meg.»

Ansiktet er ikke bare det fysiske ansiktet, men hele den andres **sårbarhet og utsatthet**. Det er dette som gjør moralen mulig: Jeg kan ikke se den andre uten å føle et ansvar.

### Ansvaret for den andre
Levinas hevdet at **ansvaret for den andre kommer før friheten**. Vi velger ikke å være ansvarlige – vi er allerede ansvarlige i det øyeblikket vi møter den andre. Ansvaret er ikke symmetrisk: Jeg er ansvarlig for den andre uavhengig av om den andre tar ansvar for meg.

### Etikk som «førstefilosofi»
For Levinas er etikken ikke en gren av filosofien – den er selve grunnlaget for all filosofi. Før vi kan tenke, teoretisere og lage systemer, har vi allerede møtt den andre og blitt stilt til ansvar.

> *«Ansiktet taler til meg og inviterer meg dermed til en relasjon som ikke har noe felles med noen form for makt.»* – Emmanuel Levinas`,
    },
    {
      id: 're-4-5-def-2',
      type: 'definition',
      title: 'Levinas\' sentrale begreper',
      content: `**Ansiktet (le visage):** Det andre menneskets sårbarhet og utsatthet som møter meg og skaper moralsk ansvar. Ansiktet utsier en appell: «Du skal ikke drepe meg.»

**Den andre (l'autrui):** Det mennesket jeg møter ansikt til ansikt. Den andre er alltid mer enn jeg kan forstå eller kategorisere – den andres annerledeshet kan ikke reduseres.

**Uendelig ansvar:** Levinas hevdet at ansvaret for den andre er uendelig og asymmetrisk – jeg er ansvarlig for den andre uavhengig av hva den andre gjør for meg. Ansvaret velges ikke, men pålegges meg i møtet.

**Etikk som førstefilosofi:** Etikken er ikke en del av filosofien, men selve grunnlaget – det er det moralske møtet med den andre som gjør all tenkning mulig.`,
    },
    {
      id: 're-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 're-4-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva Levinas mente med «den andres ansikt». Hvorfor er ansiktet så sentralt i hans etikk?',
        solution: 'For Levinas er «ansiktet» ikke bare det fysiske ansiktet, men hele den andres sårbarhet og utsatthet som møter meg. Ansiktet er nakent og ubeskyttet, og uttrykker en appell – «Du skal ikke drepe meg» – som gjør meg moralsk ansvarlig. Ansiktet er sentralt fordi det er i møtet med ansiktet at moralen oppstår. Jeg kan ikke se den andres sårbarhet uten å føle et ansvar. Ansvaret er ikke noe jeg velger, men noe som pålegges meg i selve møtet. Moralen begynner altså ikke i regler eller prinsipper, men i den konkrete erfaringen av den andres utsatthet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-5-text-3',
      type: 'text',
      content: `## K.E. Løgstrup: Den etiske fordring

Den danske filosofen og teologen **Knud Ejler Løgstrup** (1905–1981) utviklet en nærhetsetikk som har hatt særlig stor innflytelse i Skandinavia. Hans hovedverk *Den etiske fordring* (1956) er blant de mest leste filosofiske verkene i Norden.

### Gjensidig avhengighet
Løgstrups utgangspunkt er at mennesker er **grunnleggende avhengige av hverandre**. Vi holder alltid noe av den andres liv i våre hender. I ethvert møte mellom mennesker har vi makt over hverandre – vi kan bygge opp eller rive ned, gi tillit eller svikte.

### Den etiske fordring
Fordi vi er gjensidig avhengige, stilles vi overfor en **etisk fordring**: Vi skal ta vare på det av den andres liv som er i våre hender. Denne fordringen er:

- **Radikal:** Den krever at vi handler uselvisk, ut fra den andres behov, ikke våre egne
- **Ensidig:** Den gjelder uavhengig av om den andre tar vare på oss
- **Taus:** Den gir ingen konkrete instruksjoner – vi må bruke skjønn for å avgjøre hva situasjonen krever
- **Uoppfyllelig:** Vi kan aldri fullt ut oppfylle fordringen – vi er alltid preget av egeninteresse

### De suverene livsytringene
Løgstrup mente at det finnes grunnleggende menneskelige fenomener som bærer moralen – han kalte dem **suverene livsytringer**. Eksempler er **tillit**, **barmhjertighet**, **medfølelse** og **talens åpenhet**. Disse livsytringene er spontane og forankret i menneskets natur. Tillit er for eksempel den primære holdningen mellom mennesker – mistillit er sekundær og krever en grunn.`,
    },
    {
      id: 're-4-5-def-3',
      type: 'definition',
      title: 'Løgstrups sentrale begreper',
      content: `**Den etiske fordring:** Vi skal ta vare på det av den andres liv som er lagt i våre hender. Fordringen er radikal (uselvisk), ensidig (uavhengig av gjensidighet), taus (gir ingen konkrete instruksjoner) og uoppfyllelig (vi kan aldri fullt ut leve opp til den).

**Interdependens:** Mennesker er grunnleggende avhengige av hverandre. Vi holder alltid noe av den andres liv i våre hender – vi kan bygge opp eller rive ned.

**Suverene livsytringer:** Spontane, grunnleggende menneskelige fenomener som bærer moralen: tillit, barmhjertighet, medfølelse, talens åpenhet. De er «suverene» fordi de ikke kan reduseres til noe annet.`,
    },
    {
      id: 're-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 're-4-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner den etiske fordring ifølge Løgstrup?',
        options: [
          { id: 'a', text: 'Den gir klare regler for hva vi bør gjøre i enhver situasjon', isCorrect: false },
          { id: 'b', text: 'Den gjelder bare overfor mennesker vi kjenner godt', isCorrect: false },
          { id: 'c', text: 'Den er radikal, ensidig, taus og uoppfyllelig', isCorrect: true },
          { id: 'd', text: 'Den kan oppfylles fullstendig gjennom riktig moralsk handling', isCorrect: false },
        ],
        solution: 'Løgstrups etiske fordring er radikal (krever uselvisk handling), ensidig (gjelder uavhengig av gjensidighet), taus (gir ingen konkrete instruksjoner – vi må bruke skjønn) og uoppfyllelig (vi kan aldri fullt ut leve opp til den fordi vi alltid er preget av egeninteresse).',
      },
    },
    {
      id: 're-4-5-text-3b',
      type: 'text',
      content: `## Nærhetsetikk og Holocaust

For å forstå nærhetsetikken fullt ut, er det nødvendig å kjenne den historiske bakgrunnen. Både Levinas og Løgstrup skrev i skyggen av **andre verdenskrig og Holocaust**, erfaringer som dypt preget deres tenkning.

### Levinas\` personlige erfaring
Levinas var litauisk jøde som tilbrakte krigsårene i en tysk krigsfangeleir. Det meste av familien hans ble drept i Holocaust. Denne erfaringen overbeviste ham om at vestlig filosofis fokus på fornuft, system og totalitet hadde mislyktes katastrofalt. Filosofien hadde ikke klart å forhindre det verste som mennesker kan gjøre mot hverandre.

For Levinas var Holocaust det ultimate eksempelet på hva som skjer når vi slutter å se den andres ansikt – når mennesker reduseres til kategorier, tall eller «problemer» som skal «løses». Nazistene så ikke ansiktet til den andre; de så bare «jøder», «undermensker», abstrakte kategorier som legitimerte utryddelse.

### Ansvarets prioritet
Levinas\` konklusjon var radikal: Etikken må komme **før** all annen filosofi. Før vi lager systemer, teorier og kategorier, har vi allerede møtt den andre og blitt stilt til ansvar. Hvis etikken ikke er grunnlaget, risikerer vi at våre systemer – politiske, filosofiske, vitenskapelige – blir redskaper for undertrykkelse.

### Løgstrup og tillitens sårbarhet
Løgstrup skrev i en dansk kontekst der okkupasjon og motstandskamp hadde vist hvor sårbar tilliten mellom mennesker er. Hans insistering på at vi «holder noe av den andres liv i våre hender» er delvis formet av erfaringen av at denne makten kan misbrukes katastrofalt.

### Relevans i dag
Nærhetsetikkens fokus på den andres ansikt og sårbarhet har fått fornyet aktualitet i vår tid:
- **Flyktningkrisen:** Når vi møter bilder av flyktninger som drukner, appellerer deres ansikt til vårt ansvar – akkurat slik Levinas beskrev
- **Digital distanse:** I en digital verden der vi kommuniserer gjennom skjermer, risikerer vi å miste kontakten med den andres ansikt og sårbarhet
- **Dehumanisering:** Propaganda og hatretorikk fungerer nettopp ved å skjule den andres ansikt og gjøre dem til abstrakte kategorier`,
    },
    {
      id: 're-4-5-def-4',
      type: 'definition',
      title: 'Nærhetsetikk og ansvar',
      content: `**Totalitet og uendelighet:** Tittelen på Levinas\` hovedverk (1961). «Totalitet» refererer til filosofiens tradisjonelle forsøk på å fange alt i systemer og kategorier. «Uendelighet» refererer til den andre, som alltid overskrider mine kategorier og aldri kan reduseres til et objekt.

**Asymmetrisk ansvar:** Levinas\` idé om at ansvaret for den andre ikke er gjensidig – jeg er ansvarlig for den andre uavhengig av om den andre tar ansvar for meg. Ansvaret velges ikke, men er grunnleggende for min eksistens som moralsk vesen.

**Den tredje (le tiers):** Levinas erkjente at vi ikke bare møter én annen, men mange andre. Den tredje personens inntreden gjør at vi trenger rettferdighet og institusjoner – men disse må alltid være forankret i det opprinnelige ansvaret for den andre.

**Talens åpenhet:** En av Løgstrups suverene livsytringer – den spontane åpenheten i kommunikasjon mellom mennesker, der vi utleverer oss og gjør oss sårbare.`,
    },
    {
      id: 're-4-5-example-1',
      type: 'example',
      title: 'Nærhetsetikk i praksis: Helsevesen og omsorg',
      content: `Nærhetsetikken har fått særlig stor betydning innenfor **helsevesen og omsorgssektoren**, der det konkrete møtet mellom mennesker er sentralt.

**Lege-pasient-forholdet:** En lege møter ikke bare en «diagnose» eller et «tilfelle», men et sårbart menneske med et ansikt. Nærhetsetikken minner om at god medisinsk praksis krever at legen ser det hele mennesket, ikke bare sykdommen. Effektivisering og standardisering kan true denne dimensjonen.

**Pleie av eldre:** I eldreomsorgen er Løgstrups tanke om at vi «holder noe av den andres liv i våre hender» direkte relevant. De ansatte har makt over sårbare menneskers daglige liv – fra måltider til hygiene til sosial kontakt. Nærhetsetikken krever at denne makten utøves med respekt og sensitivitet.

**Skole og undervisning:** En lærer holder noe av elevens liv i sine hender. Et oppmuntrende eller nedlatende ord kan forme et barns selvbilde og fremtid. Løgstrups etikk minner lærere om det enorme ansvaret som ligger i den daglige relasjonen til elevene.

**Sosiale medier:** I en digital kontekst kan nærhetsetikken spørre: Hva skjer når vi kommenterer og kritiserer mennesker vi aldri har møtt ansikt til ansikt? Mister vi kontakten med den andres sårbarhet? Nettmobbing kan forstås som en konsekvens av at den andres ansikt er usynlig bak en skjerm.`,
    },
    {
      id: 're-4-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 're-4-5-ex-7',
        number: '7',
        type: 'classic',
        task: `Levinas mente at det er lettere å gjøre urett mot mennesker vi ikke ser «ansikt til ansikt». Diskuter dette i lys av digital kommunikasjon og sosiale medier. Er nettmobbing lettere å begå fordi vi ikke ser den andres ansikt?`,
        solution: `Levinas hevdet at det er den andres ansikt – sårbarhet og utsatthet – som vekker vårt moralske ansvar. I digital kommunikasjon mangler dette direkte ansikt-til-ansikt-møtet, noe som kan gjøre det lettere å dehumanisere andre. Forskning støtter dette: Nettmobbing er utbredt og mobbere rapporterer ofte at de ikke tenkte på virkningen av ordene sine. Den fysiske avstanden og anonymiteten fjerner hemninger. Samtidig kan man argumentere for at ansiktet kan være «tilstede» også digitalt – vi kan se bilder, lese personlige historier og bli beveget av andres lidelse online. Bilder av flyktninger i media kan vekke moralsk ansvar selv uten fysisk nærhet. En balansert konklusjon er at digital kommunikasjon gjør det lettere å ignorere den andres ansikt, men at bevisst innsats for å se mennesket bak skjermen kan motvirke dette.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 're-4-5-ex-8',
        number: '8',
        type: 'multiple-choice',
        task: `Hva mente Løgstrup med «suverene livsytringer»?`,
        options: [
          { id: 'a', text: 'Moralske regler som gis av en suveren hersker', isCorrect: false },
          { id: 'b', text: 'Spontane, grunnleggende menneskelige fenomener som tillit, barmhjertighet og medfølelse, som bærer moralen', isCorrect: true },
          { id: 'c', text: 'Religiøse ritualer som uttrykker underkastelse for Gud', isCorrect: false },
          { id: 'd', text: 'Politiske rettigheter som gir individer frihet', isCorrect: false },
        ],
        solution: `Suverene livsytringer er ifølge Løgstrup spontane, grunnleggende menneskelige fenomener som bærer moralen. Eksempler er tillit, barmhjertighet, medfølelse og talens åpenhet. De er «suverene» fordi de ikke kan reduseres til noe annet – de er fundamentale trekk ved menneskelivet. Tillit er for eksempel den primære holdningen mellom mennesker; mistillit er sekundær og krever en grunn.`,
      },
    },
    {
      id: 're-4-5-text-3c',
      type: 'text',
      content: `## Omsorgsetikkens filosofiske grunnlag

Omsorgsetikken har utviklet seg til en rik filosofisk tradisjon som går langt utover Gilligans opprinnelige bidrag. Den reiser grunnleggende spørsmål om hva det betyr å være menneske og hva moral egentlig handler om.

### Nel Noddings og omsorgsrelasjonen
Filosofen **Nel Noddings** (1929–2022) utviklet en systematisk omsorgsetikk der **omsorgsrelasjonen** er det grunnleggende moralske fenomenet. Ifølge Noddings oppstår moralsk handling ikke fra prinsipper, men fra den naturlige omsorgen vi opplever i nære relasjoner – særlig forholdet mellom mor og barn.

Noddings skilte mellom:
- **Naturlig omsorg:** Den spontane omsorgen vi føler for dem vi er nær – familien, venner, naboer
- **Etisk omsorg:** Omsorgen vi utvider til dem som ikke er oss nær, motivert av minnet om og idealet om naturlig omsorg

### Joan Tronto og politisk omsorgsetikk
Statsviteren **Joan Tronto** (f. 1952) utvidet omsorgsetikken til det politiske feltet. Hun definerte omsorg bredt som «alt vi gjør for å opprettholde, fortsette og reparere vår verden, slik at vi kan leve i den så godt som mulig.»

Tronto identifiserte fire faser i omsorg:
1. **Å legge merke til** (*caring about*): Å se at noen trenger omsorg
2. **Å ta ansvar** (*taking care of*): Å påta seg ansvaret for å møte behovet
3. **Å gi omsorg** (*care-giving*): Den konkrete omsorgshandlingen
4. **Å motta omsorg** (*care-receiving*): Den andres respons på omsorgen

### Makt og ulikhet
Omsorgsetikken er opptatt av **maktforhold** i omsorgsrelasjoner. Hvem bærer omsorgsbyrdene i samfunnet? Ofte er det kvinner, innvandrere og lavtlønte som utfører det meste av omsorgsarbeidet. Omsorgsetikken synliggjør dette usynlige arbeidet og krever en mer rettferdig fordeling av omsorgsbyrder.`,
    },
    {
      id: 're-4-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 're-4-5-ex-9',
        number: '9',
        type: 'classic',
        task: `Omsorgsetikken fremhever at omsorgsbyrder er ujevnt fordelt i samfunnet. Hvem bærer mesteparten av omsorgsarbeidet i Norge og globalt, og er dette rettferdig? Diskuter med utgangspunkt i omsorgsetikken.`,
        solution: `Omsorgsetikken peker på at omsorgsarbeid – både betalt og ubetalt – i stor grad utføres av kvinner, både i Norge og globalt. I Norge gjør kvinner fortsatt mer husarbeid og tar mer av permisjonen, selv om fordelingen er jevnere enn i mange andre land. Globalt ser vi at fattige kvinner i utviklingsland bærer en uforholdsmessig stor omsorgsbyrde. Joan Tronto argumenterer for at en rettferdig fordeling av omsorgsbyrder er et politisk spørsmål, ikke bare et privat. Omsorgsetikken synliggjør dette usynlige arbeidet og krever at samfunnet verdsetter og fordeler det rettferdig. Kritikere kan innvende at det er vanskelig å «tvinge» omsorg, og at ulike mennesker har ulike omsorgsbehov. En balansert vurdering anerkjenner at ujevn fordeling er et rettferdighetsproblem, men at løsningen krever strukturelle endringer, ikke bare moralsk appell.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-5-text-4',
      type: 'text',
      content: `## Carol Gilligan og omsorgsetikk

Den amerikanske psykologen **Carol Gilligan** (f. 1936) grunnla **omsorgsetikken** (*ethics of care*) med boken *In a Different Voice* (1982). Hennes utgangspunkt var en kritikk av den etablerte moralpsykologien.

### Kritikk av Kohlberg
Gilligans kollega Lawrence Kohlberg hadde utviklet en innflytelsesrik teori om moralsk utvikling, der det høyeste stadiet var evnen til å tenke i universelle rettferdighetsprinsipper. Gilligan påpekte at denne modellen var basert på forskning med gutter og menn, og at den systematisk undervurderte en «annen stemme» i moralsk tenkning – en stemme som vektla **omsorg, relasjoner og ansvar**.

### To moralske stemmer
Gilligan hevdet at det finnes to grunnleggende tilnærminger til moral:

- **Rettferdighetsperspektivet:** Fokuserer på rettigheter, regler og universelle prinsipper. Moral handler om å behandle alle likt og respektere individets autonomi.
- **Omsorgsperspektivet:** Fokuserer på relasjoner, ansvar og omsorg for konkrete andre. Moral handler om å svare på andres behov og opprettholde relasjoner.

Gilligan argumenterte for at begge perspektivene er viktige og utfyller hverandre, men at omsorgsperspektivet hadde blitt systematisk oversett i filosofien.

### Omsorgsetikkens kjerne
Omsorgsetikken legger vekt på at:
- Mennesker er **relasjonelle vesener** – vi er avhengige av hverandre
- **Omsorg** er en grunnleggende moralsk holdning og praksis
- Konkrete **relasjoner** er viktigere enn abstrakte prinsipper
- **Empati** og evnen til å forstå andres situasjon er sentral for moral
- Moral utvikles gjennom **erfaring og praksis**, ikke bare gjennom rasjonell tenkning`,
    },
    {
      id: 're-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 're-4-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom rettferdighetsperspektivet og omsorgsperspektivet i Gilligans teori. Gi et eksempel på hvordan de to perspektivene kan gi ulike svar på et moralsk dilemma.',
        solution: 'Rettferdighetsperspektivet fokuserer på rettigheter, regler og universelle prinsipper – alle skal behandles likt. Omsorgsperspektivet fokuserer på relasjoner, ansvar og omsorg for konkrete andre – vi bør svare på andres behov. Eksempel: En elev ber om å få kopiere en annen elevs lekser. Rettferdighetsperspektivet: Det er galt å jukse – regelen gjelder likt for alle, og det er urettferdig overfor andre som gjør arbeidet selv. Omsorgsperspektivet: Kanskje eleven sliter med problemer hjemme? Kanskje det viktigste nå er å hjelpe eleven og vise omsorg, selv om det betyr å bøye på reglene. Gilligan mener begge perspektivene er verdifulle og bør utfylle hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-5-text-5',
      type: 'text',
      content: `## Styrker og svakheter ved nærhetsetikk og omsorgsetikk

### Styrker
- **Relasjonell:** Anerkjenner at mennesker er sosiale vesener som formes av relasjoner
- **Konkret:** Tar utgangspunkt i virkelige møter mellom mennesker, ikke abstrakte prinsipper
- **Emosjonell:** Gir følelser og empati en plass i moralsk tenkning
- **Maktbevisst:** Avslører skjulte maktforhold og omsorgsbyrder i samfunnet
- **Kritisk:** Utfordrer den dominerende fokuset på autonomi og rettigheter

### Svakheter
- **Vagt:** Gir ingen klare handlingsregler – vanskelig å vite hva den konkrete situasjonen krever
- **Partisk:** Risikerer å favorisere de nærmeste på bekostning av fremmede
- **Utnyttelse:** Kan legitimere selvoppofrelse, særlig hos dem som allerede bærer omsorgsansvar
- **Begrenset rekkevidde:** Vanskelig å anvende på storskala politiske spørsmål
- **Kjønnsproblematikk:** Fare for å essensialisere omsorg som «kvinnelig» og dermed forsterke tradisjonelle kjønnsroller

## Oppsummering

- **Nærhetsetikken** hevder at moralen begynner i det konkrete møtet med den andre, ikke i abstrakte prinsipper.
- **Levinas** mente at den andres ansikt – sårbarhet og utsatthet – er moralens kilde. Ansvaret er uendelig og asymmetrisk.
- **Løgstrup** hevdet at vi alltid holder noe av den andres liv i våre hender, og at den etiske fordring krever at vi tar vare på dette – uten konkrete instruksjoner.
- **Gilligan** påpekte at omsorgsperspektivet hadde blitt oversett i moralfilosofien, og at omsorg, relasjoner og empati er like viktige som rettigheter og rettferdighet.
- Styrkene er relasjonell realisme og plass til følelser; svakhetene er vaghet og risiko for partiskhet.`,
    },
    {
      id: 're-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 're-4-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign Levinas\' og Løgstrups nærhetsetikk. Hva har de til felles, og hva skiller dem?',
        solution: 'Felles: Begge hevder at moralen begynner i det konkrete møtet med den andre, ikke i abstrakte regler. Begge legger vekt på ansvar og sårbarhet. Begge mener ansvaret er asymmetrisk – det avhenger ikke av gjensidighet. Forskjeller: Levinas tar utgangspunkt i «ansiktet» – den andres utsatthet som stiller meg til ansvar. Ansvaret er uendelig. Løgstrup tar utgangspunkt i «interdependens» – vi holder alltid noe av den andres liv i våre hender. Fordringen er «taus» – den gir ingen konkrete instruksjoner. Løgstrup legger også vekt på «suverene livsytringer» som tillit og barmhjertighet, som er spontane uttrykk for moralen. Levinas er mer radikal i sin betoning av det uendelige ansvaret.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 're-4-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft om omsorgsetikken kan stå alene som etisk teori, eller om den trenger å suppleres med prinsipper om rettferdighet og rettigheter. Begrunn svaret ditt.',
        solution: 'Argumenter for at omsorgsetikken kan stå alene: Omsorg er det mest grunnleggende moralske fenomenet, og rettferdighet og rettigheter er abstrakte idealer som blir meningsløse uten konkret omsorg. Argumenter for at den trenger å suppleres: Omsorgsetikken risikerer partiskhet – vi kan favorisere de nærmeste og ignorere fremmede. Uten prinsipper om rettferdighet kan omsorg bli vilkårlig. Storskala politiske spørsmål (global fattigdom, klimaendringer) krever universelle prinsipper, ikke bare personlige relasjoner. De fleste teoretikere, inkludert Gilligan selv, mener at omsorgsperspektivet og rettferdighetsperspektivet utfyller hverandre og begge er nødvendige for en fullstendig etikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.6: Anvendt etikk – bioetikk og teknologietikk
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_4_6: TextbookChapter = {
  id: 'religion-etikk-4-6',
  courseId: 'religion-etikk',
  chapterNumber: '4.6',
  title: 'Anvendt etikk – bioetikk og teknologietikk',
  description: 'Anvendt etikk i praksis: bioetiske spørsmål om abort, eutanasi og genteknologi, samt etiske utfordringer knyttet til kunstig intelligens og føre-var-prinsippet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte etiske ideer og utfordringer knyttet til sentrale områder i samtiden',
    'gjøre rede for og drøfte ulike etiske modeller',
  ],
  content: [
    {
      id: 're-4-6-intro',
      type: 'text',
      content: `# Anvendt etikk – bioetikk og teknologietikk

De etiske teoriene vi har studert – pliktetikk, utilitarisme, dydsetikk og nærhetsetikk – gir oss verktøy for å tenke systematisk om moralske spørsmål. Men den virkelige testen for en etisk teori er om den kan hjelpe oss å navigere i **konkrete, vanskelige dilemmaer**.

**Anvendt etikk** er den grenen av etikken som anvender etiske teorier og prinsipper på konkrete problemområder. To av de viktigste feltene i dag er:

- **Bioetikk:** Etiske spørsmål knyttet til medisin, bioteknologi og livsvitenskap
- **Teknologietikk:** Etiske utfordringer knyttet til nye teknologier, særlig kunstig intelligens

Disse temaene berører grunnleggende spørsmål om menneskets verdighet, autonomi, rettferdighet og ansvar – og de ulike etiske teoriene gir ofte ulike svar.`,
    },
    {
      id: 're-4-6-def-1',
      type: 'definition',
      title: 'Anvendt etikk og bioetikk',
      content: `**Anvendt etikk:** Etikkens praktiske gren som bruker etiske teorier og prinsipper til å analysere konkrete moralske problemstillinger innenfor bestemte områder.

**Bioetikk:** Etisk refleksjon over spørsmål knyttet til medisin, biologi og livsvitenskap – for eksempel abort, dødshjelp, genteknologi og organdonasjon.

**Teknologietikk:** Etisk refleksjon over utvikling og bruk av teknologi, særlig spørsmål om ansvar, personvern, autonomi og rettferdighet i møte med ny teknologi.

**Fire sentrale prinsipper i bioetikken** (Beauchamp & Childress):
1. **Autonomi:** Respekt for individets selvbestemmelsesrett
2. **Velgjørenhet:** Plikt til å gjøre godt
3. **Ikke-skade:** Plikt til å unngå å påføre skade
4. **Rettferdighet:** Lik fordeling av goder og byrder`,
    },
    {
      id: 're-4-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 're-4-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilke fire prinsipper utgjør det mest brukte rammeverket i bioetikken?',
        options: [
          { id: 'a', text: 'Plikt, nytte, dyd og omsorg', isCorrect: false },
          { id: 'b', text: 'Frihet, likhet, brorskap og solidaritet', isCorrect: false },
          { id: 'c', text: 'Autonomi, velgjørenhet, ikke-skade og rettferdighet', isCorrect: true },
          { id: 'd', text: 'Sannhet, ærlighet, lojalitet og rettferdighet', isCorrect: false },
        ],
        solution: 'De fire prinsippene i bioetikken (fra Beauchamp & Childress) er: Autonomi (respekt for selvbestemmelse), velgjørenhet (plikt til å gjøre godt), ikke-skade (plikt til å unngå å påføre skade) og rettferdighet (lik fordeling av goder og byrder). Disse prinsippene brukes som rammeverk for etisk analyse i medisin og helsevesen.',
      },
    },
    {
      id: 're-4-6-text-2',
      type: 'text',
      content: `## Bioetiske spørsmål

### Abort
Spørsmålet om abort er et av de mest debatterte bioetiske temaene. Det reiser dype spørsmål om livets begynnelse, fosterets moralske status og kvinnens selvbestemmelsesrett.

**Sentrale perspektiver i debatten:**
- **Fosterets moralske status:** Når begynner et foster å ha rett til liv? Ved befruktning, ved hjerneaktivitet, ved levedyktighet utenfor livmoren, eller ved fødsel? Ulike syn gir ulike konklusjoner.
- **Autonomi:** Kvinnens rett til å bestemme over egen kropp er et sentralt argument. Spørsmålet er hvordan denne retten veies mot fosterets eventuelle rett til liv.
- **Gradualisme:** Mange inntar en mellomposisjon: Fosterets moralske status øker gradvis gjennom svangerskapet, og det kan være etisk forsvarlig å tillate abort tidlig, men ikke sent.

Ulike etiske teorier gir ulike perspektiver: Pliktetikken kan vektlegge fosterets rett til liv eller kvinnens autonomi. Utilitarismen vurderer konsekvensene for alle berørte. Omsorgsetikken fokuserer på den konkrete situasjonen og relasjonene involvert.

### Eutanasi (dødshjelp)
Spørsmålet om dødshjelp handler om retten til å dø og legens rolle. Man skiller vanligvis mellom:

- **Aktiv dødshjelp:** En lege gir pasienten en dødelig dose medisin
- **Assistert selvmord:** En lege gir pasienten tilgang til midler for å ta sitt eget liv
- **Passiv dødshjelp:** Man unnlater å igangsette eller avslutter livsforlengende behandling

**Sentrale perspektiver:**
- **Autonomi:** Har mennesker rett til å velge å dø? Respekt for selvbestemmelse tilsier at kompetente individer bør ha denne retten.
- **Menneskeverd:** Er det forenlig med menneskeverdet å bistå i døden, eller krenker det menneskeverdet å tvinge noen til å lide?
- **Skråplanargumentet:** Vil legalisering av dødshjelp føre til en gradvis utvidelse som til slutt rammer sårbare grupper?
- **Legens rolle:** Er det forenlig med legeyrket å ta liv, eller bør leger utelukkende fokusere på å helbrede?`,
    },
    {
      id: 're-4-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 're-4-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gjør rede for minst to ulike etiske perspektiver på eutanasi (dødshjelp). Bruk begreper fra de etiske teoriene du har lært.',
        solution: 'Pliktetisk perspektiv: Kant ville trolig argumentere mot aktiv dødshjelp, fordi det kategoriske imperativ forbyr å ta liv – mennesket har iboende verdighet som ikke kan krenkes. Samtidig kan humanitetsformuleringen brukes til å argumentere for at å tvinge noen til å lide mot sin vilje er å bruke dem som middel (for eksempel for å opprettholde et prinsipp). Utilitaristisk perspektiv: En utilitarist vil vurdere konsekvensene for alle berørte. Hvis pasientens lidelse er ekstrem og uhelbredelig, kan dødshjelp maksimere den totale velferden. Men en regelutilitarist kan advare mot konsekvensene av en generell regel som tillater dødshjelp – skråplanargumentet. Omsorgsetisk perspektiv: Fokuserer på den konkrete relasjonen mellom pasient, pårørende og helsepersonell, og på hva omsorg betyr i den konkrete situasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-6-text-3',
      type: 'text',
      content: `### Genteknologi og bioteknologi
Moderne genteknologi reiser etiske spørsmål som menneskeheten aldri tidligere har stått overfor.

**Sentrale temaer:**
- **Gentesting:** Bør vi teste fostre for genetiske sykdommer? Hva med risikoen for at dette fører til sortering av mennesker basert på genetiske egenskaper?
- **Genterapi:** Er det etisk forsvarlig å reparere genetiske feil? De fleste aksepterer behandling av alvorlige sykdommer, men grensene er omdiskutert.
- **CRISPR og genredigering:** Ny teknologi gjør det mulig å redigere gener med stor presisjon. Bør vi redigere gener i kjønnsceller, noe som vil påvirke fremtidige generasjoner?
- **Kloning:** Er det etisk akseptabelt å klone mennesker? De fleste samfunn har forbudt dette, men spørsmålet utfordrer våre forestillinger om identitet og menneskets natur.

**Etiske perspektiver på genteknologi:**
- **Autonomi og samtykke:** Fremtidige generasjoner kan ikke samtykke til endringer i sitt genom
- **Rettferdighet:** Vil genteknologi bli tilgjengelig for alle, eller bare for de rike? Risikoen for en «genetisk overklasse» bekymrer mange
- **Menneskeverd:** Truer genteknologi vår forståelse av hva det betyr å være menneske?
- **Føre-var-prinsippet:** Bør vi begrense teknologier der langtidsvirkningene er ukjente?`,
    },
    {
      id: 're-4-6-def-2',
      type: 'definition',
      title: 'Sentrale bioetiske begreper',
      content: `**Autonomi i bioetikken:** Pasientens eller individets rett til å ta informerte valg om egen kropp og helse. Forutsetter frivillighet og tilstrekkelig informasjon.

**Informert samtykke:** Prinsippet om at medisinsk behandling og forskning krever at pasienten har fått tilstrekkelig informasjon og frivillig samtykker.

**Skråplanargumentet (slippery slope):** Argumentet om at å tillate én ting vil føre til en gradvis utvidelse mot stadig mer problematiske praksiser. Brukes ofte i debatter om dødshjelp og genteknologi.

**Sorteringssamfunnet:** Et samfunn der mennesker selekteres basert på genetiske egenskaper – en bekymring knyttet til fosterdiagnostikk og genteknologi.`,
    },
    {
      id: 're-4-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 're-4-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft om det bør være tillatt å bruke genredigering (CRISPR) på menneskelige befruktede egg for å forhindre alvorlige arvelige sykdommer. Presenter argumenter fra ulike etiske perspektiver.',
        solution: 'For: Utilitaristisk – genredigering kan forhindre stor lidelse for fremtidige mennesker og øke total velferd. Velgjørenhetsprinsippet – vi har plikt til å forhindre lidelse der vi kan. Mot: Pliktetisk – fremtidige generasjoner kan ikke samtykke til endringer i sitt genom, noe som krenker autonomiprinsippet. Føre-var – langtidsvirkningene er ukjente og kan være katastrofale. Rettferdighet – teknologien vil trolig bare være tilgjengelig for de rike, noe som skaper ulikhet. Skråplanargumentet – å tillate redigering for sykdom kan føre til «designerbabyer» der foreldre velger egenskaper som intelligens, utseende osv. En balansert posisjon kan være å tillate redigering for alvorlige sykdommer under streng kontroll, men forby eugeniske tiltak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-6-text-3b',
      type: 'text',
      content: `### Organdonasjon og organhandel

Organdonasjon reiser en rekke etiske spørsmål som berører kjerneverdier som autonomi, rettferdighet og menneskeverd.

**Sentrale problemstillinger:**
- **Samtykke:** Bør organdonasjon baseres på et system der man aktivt må melde seg som donor (opt-in, som i Norge), eller et system der alle er donorer med mindre de aktivt melder seg av (opt-out, som i Spania)? Opt-out-systemer gir flere organer, men reiser spørsmål om reelt samtykke.
- **Levende donasjon:** Bør det være tillatt å donere en nyre til en fremmed? Hva med risikoen for press og utnyttelse?
- **Organhandel:** Bør det være lovlig å kjøpe og selge organer? Argumentet for er at det ville øke tilbudet og redde liv. Argumentet mot er at det utnytter fattige mennesker og gjør kroppen til en handelsvare.
- **Fordeling:** Hvem skal få de knappe organene som er tilgjengelige? Skal den sykeste prioriteres, den som har ventet lengst, den yngste, eller den som har størst sjanse for å overleve?

**Etiske perspektiver:**
- **Utilitaristisk:** Opt-out-systemer og kanskje til og med regulert organhandel kan forsvares fordi de øker tilbudet og redder flest mulig liv
- **Pliktetisk:** Organhandel krenker menneskeverdet – kroppen skal ikke behandles som en vare. Men vi har en ufullkommen plikt til å hjelpe andre, noe som kan tale for å bli donor
- **Omsorgsetisk:** Fokuserer på relasjonen mellom donor, mottaker og pårørende – og på at beslutninger bør tas i en kontekst av omsorg, ikke markedsmekanismer`,
    },
    {
      id: 're-4-6-def-3',
      type: 'definition',
      title: 'Organdonasjon og ressursfordeling',
      content: `**Opt-in-system:** System der man aktivt må registrere seg som organdonor. Brukes i Norge. Respekterer autonomi sterkt, men gir færre tilgjengelige organer.

**Opt-out-system (presumert samtykke):** System der alle er organdonorer med mindre de aktivt melder seg av. Brukes i Spania og flere europeiske land. Gir flere organer, men reiser spørsmål om reelt samtykke.

**Allokering:** Fordelingen av knappe medisinske ressurser (organer, medisiner, behandling). Krever vanskelige avveininger mellom ulike rettferdighetsprinsipper.

**Triage:** Prioritering av pasienter i nødsituasjoner basert på alvorlighetsgrad og sannsynlighet for overlevelse. Et konkret eksempel på etisk fordeling av knappe ressurser.`,
    },
    {
      id: 're-4-6-example-1',
      type: 'example',
      title: 'Bioetikk i praksis: COVID-19 og etiske prioriteringer',
      content: `COVID-19-pandemien aktualiserte en rekke bioetiske spørsmål og tvang samfunnet til å ta vanskelige moralske valg:

**Triage på intensivavdelinger:** Da sykehusene ble overbelastet, måtte leger velge hvem som skulle få respirator. Skulle den eldste eller den yngste prioriteres? Den med best prognose eller den sykeste? Ulike land valgte ulike kriterier, noe som avslørte dype verdikonflikter.

**Vaksineprioritering:** Hvem skulle få vaksine først? Helsepersonell (for å beskytte helsesystemet), eldre (høyest risiko), eller unge (flest leveår igjen)? Global fordeling: Var det rettferdig at rike land sikret seg mesteparten av vaksinene mens fattige land ventet?

**Nedstengning vs. frihet:** Nedstengning reddet liv, men begrenset friheten og skadet økonomien, psykisk helse og barns utdanning. Hvordan veier man disse hensynene mot hverandre?

**Solidaritet og individualisme:** Pandemien testet solidariteten: Var folk villige til å bære byrder (munnbind, isolasjon, vaksinering) for å beskytte andre? Debatten avslørte en spenning mellom individuell frihet og kollektivt ansvar.

Pandemien viste at bioetikk ikke er en abstrakt akademisk øvelse, men noe som direkte påvirker liv og død i kritiske situasjoner.`,
    },
    {
      id: 're-4-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 're-4-6-ex-7',
        number: '7',
        type: 'classic',
        task: 'Under COVID-19-pandemien måtte man prioritere hvem som skulle få vaksine først. Drøft dette fordelingsproblemet ved hjelp av ulike etiske teorier. Hvem bør prioriteres, og hvorfor?',
        solution: `Utilitaristisk perspektiv: Prioriter de som gir størst reduksjon i total lidelse – helsepersonell (opprettholder helsesystemet), eldre (høyest dødsrisiko), og supersptedere (begrenser smitte mest). Pliktetisk perspektiv: Alle har lik rett til liv og helse (Kants menneskeverd). Et lotterisystem kan argumenteres for som det mest rettferdige. Alternativt: de mest sårbare har sterkest krav på beskyttelse. Dydsetisk perspektiv: Et dydfullt samfunn viser solidaritet med de svakeste og tar ansvar for fellesskapet. Omsorgsetisk perspektiv: Fokuserer på de mest sårbare og avhengige – eldre på sykehjem, funksjonshemmede, de som ikke kan beskytte seg selv. Rettferdighetsperspektiv: Global fordeling er også relevant – var det rettferdig at rike land sikret seg mesteparten? Rawls\` sløringsprinsipp ville tilsi at vi bør prioritere de dårligst stilte.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-6-text-4',
      type: 'text',
      content: `## Teknologietikk: Kunstig intelligens og etikk

Utviklingen av **kunstig intelligens** (KI) reiser etiske spørsmål som allerede påvirker samfunnet og som vil bli stadig mer presserende i årene fremover.

### Sentrale etiske utfordringer med KI

**Ansvar og beslutninger:**
Når en KI-algoritme tar beslutninger som påvirker mennesker – for eksempel i helsevesen, rettsvesen eller ansettelsesprosesser – oppstår spørsmål om ansvar. Hvem er ansvarlig når en algoritme tar en feil beslutning? Utvikleren, brukeren, selskapet, eller algoritmen selv?

**Skjevheter og diskriminering:**
KI-systemer kan forsterke og reprodusere menneskelige skjevheter. Hvis treningsdataene inneholder diskriminerende mønstre, vil algoritmene videreføre disse. Dette har vist seg i praksis, for eksempel i ansettelsesalgoritmer som diskriminerte kvinner og i ansiktsgjenkjenning som fungerte dårlig for visse befolkningsgrupper.

**Personvern og overvåking:**
KI muliggjør masseovervåking i et omfang som aldri før har vært mulig. Ansiktsgjenkjenning, analyse av nettaktivitet og prediktiv politiarbeid reiser alvorlige spørsmål om retten til privatliv.

**Autonomi og manipulasjon:**
KI-drevne anbefalingsalgoritmer og «filter-bobler» kan påvirke våre valg, meninger og adferd uten at vi er klar over det. Truer dette vår autonomi og evne til frie, informerte valg?

**Arbeid og samfunn:**
KI og automatisering kan erstatte mange typer arbeid. Hvordan bør samfunnet fordele godene og byrdene av teknologisk utvikling? Hvem bærer ansvaret for de som mister jobben?`,
    },
    {
      id: 're-4-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 're-4-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er en sentral etisk bekymring knyttet til KI-baserte beslutningssystemer?',
        options: [
          { id: 'a', text: 'At de alltid tar bedre beslutninger enn mennesker', isCorrect: false },
          { id: 'b', text: 'At de kan forsterke og reprodusere diskriminerende mønstre fra treningsdata', isCorrect: true },
          { id: 'c', text: 'At de er for dyre for de fleste organisasjoner', isCorrect: false },
          { id: 'd', text: 'At de bare fungerer i vestlige land', isCorrect: false },
        ],
        solution: 'En sentral etisk bekymring med KI-baserte beslutningssystemer er at de kan forsterke og reprodusere diskriminerende mønstre som finnes i treningsdataene. Hvis historiske data inneholder skjevheter – for eksempel i ansettelsespraksis eller rettsvesen – vil algoritmene videreføre og potensielt forsterke disse. Dette reiser spørsmål om rettferdighet og ikke-diskriminering.',
      },
    },
    {
      id: 're-4-6-text-4b',
      type: 'text',
      content: `### Autonome kjøretøy og trolley-problemet i virkeligheten

Utviklingen av **selvkjørende biler** har gjort det filosofiske trolley-problemet til et praktisk teknologisk spørsmål. Hvordan skal en selvkjørende bil programmeres til å handle i en uunngåelig ulykke?

**Scenarier:**
- Bilen kan svinge unna et barn som løper ut i veien, men treffe en fotgjenger på fortauet. Hva bør den gjøre?
- Bilen kan velge mellom å krasje inn i en vegg (passasjeren dør) eller kjøre over en fotgjenger (fotgjengeren dør). Hvem skal ofres?
- Bør bilen vekte passasjerens liv høyere enn andres? Eller bør den alltid minimere totalt antall døde?

**Etiske perspektiver:**
- **Utilitarismen** ville programmere bilen til å minimere totalt antall skadde og drepte – selv om det betyr å ofre passasjeren
- **Pliktetikken** ville protestere mot at bilen aktivt retter seg mot noen – det ville være å bruke et menneske som middel
- **Omsorgsetikken** ville spørre hvem som er mest sårbar i situasjonen

**MITs Moral Machine-eksperiment** (2018) viste at mennesker i ulike kulturer har ulike moralske preferanser: Noen kulturer prioriterer de unge over de eldre, andre prioriterer lovlydige fotgjengere over regelbrytere. Dette reiser spørsmålet: Hvem bestemmer etikken til en selvkjørende bil – ingeniørene, lovgiverne, eller brukerne?

### Ansiktsgjenkjenning og personvern
Ansiktsgjenkjenningsteknologi kan identifisere individer i sanntid i store menneskemengder. Kina bruker teknologien til masseovervåking. Vestlige politistyrker bruker den til å identifisere mistenkte.

**Etiske bekymringer:**
- **Personvern:** Retten til å bevege seg anonymt i det offentlige rom trues
- **Diskriminering:** Studier viser at ansiktsgjenkjenning fungerer dårligere for mørkhudede og kvinner
- **Overvåkingssamfunn:** Frykten for en «chilling effect» – at mennesker endrer atferd fordi de vet de blir overvåket
- **Maktkonsentrasjon:** Teknologien gir stater og selskaper enorm makt over enkeltindivider`,
    },
    {
      id: 're-4-6-def-4',
      type: 'definition',
      title: 'KI-etikk og algoritmisk rettferdighet',
      content: `**Algoritmisk skjevhet (bias):** Systematiske feil i KI-systemer som fører til urettferdige utfall for bestemte grupper. Skyldes ofte skjevheter i treningsdataene.

**Forklarbar KI (XAI):** Kravet om at KI-systemer skal kunne forklare sine beslutninger slik at mennesker kan forstå og etterprøve dem. Viktig for ansvarliggjøring og tillit.

**Chilling effect:** Fenomenet der mennesker endrer atferd – begrenser ytringsfrihet, unngår visse steder – fordi de vet de blir overvåket. Truer demokrati og frihet.

**Moral Machine:** Et forskningsprosjekt fra MIT som kartla menneskers moralske preferanser i dilemmaer knyttet til selvkjørende biler. Avslørte store kulturelle forskjeller i moralsk intuisjon.`,
    },
    {
      id: 're-4-6-ex-8',
      type: 'exercise',
      exercise: {
        id: 're-4-6-ex-8',
        number: '8',
        type: 'multiple-choice',
        task: 'Hva er et sentralt etisk dilemma ved selvkjørende biler?',
        options: [
          { id: 'a', text: 'At de kjører for sakte og skaper trafikkorker', isCorrect: false },
          { id: 'b', text: 'At de må programmeres til å ta moralske valg i uunngåelige ulykker, for eksempel hvem som skal ofres', isCorrect: true },
          { id: 'c', text: 'At de bruker for mye strøm og er dårlige for miljøet', isCorrect: false },
          { id: 'd', text: 'At de er for dyre for vanlige forbrukere', isCorrect: false },
        ],
        solution: `Et sentralt etisk dilemma ved selvkjørende biler er at de må programmeres til å ta moralske valg i situasjoner der en ulykke er uunngåelig. Hvem skal bilen prioritere – passasjeren eller fotgjengeren? Skal den minimere totalt antall skadde (utilitarisme), eller er det galt å aktivt rette bilen mot noen (pliktetikk)? MITs Moral Machine-eksperiment viste at ulike kulturer har ulike preferanser, noe som gjør spørsmålet enda mer komplisert.`,
      },
    },
    {
      id: 're-4-6-ex-9',
      type: 'exercise',
      exercise: {
        id: 're-4-6-ex-9',
        number: '9',
        type: 'classic',
        task: `Bør stater ha lov til å bruke ansiktsgjenkjenningsteknologi til å overvåke borgere i det offentlige rom? Drøft spørsmålet med utgangspunkt i ulike etiske perspektiver.`,
        solution: `For: Utilitaristisk perspektiv – ansiktsgjenkjenning kan forhindre terrorisme og kriminalitet, noe som øker total sikkerhet og velferd. Rettferdighet – teknologien kan hjelpe med å pågripe kriminelle og beskytte uskyldige. Mot: Pliktetisk – masseovervåking krenker individets autonomi og verdighet. Å behandle alle borgere som potensielle mistenkte er å bruke dem som middel for statens sikkerhet. Personvern – retten til å bevege seg fritt og anonymt er en grunnleggende rettighet. Diskriminering – teknologien fungerer dårligere for visse grupper og kan forsterke rasistisk politiarbeid. Chilling effect – overvåking hemmer ytringsfrihet og demokratisk deltakelse. Maktkonsentrasjon – gir staten enorm makt over individer uten tilstrekkelig kontroll. En balansert vurdering kan tillate begrenset bruk i spesifikke situasjoner (f.eks. ettersøkte personer ved grenser) med strenge rettslige rammer, men forby generell masseovervåking i offentlige rom.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-6-text-5',
      type: 'text',
      content: `## Føre-var-prinsippet

**Føre-var-prinsippet** er et viktig etisk og politisk prinsipp i møte med ny teknologi og vitenskapelig usikkerhet. Prinsippet sier at dersom det er rimelig grunn til å frykte alvorlige eller irreversible skadevirkninger av en handling eller teknologi, bør man treffe forebyggende tiltak, **selv om det ikke foreligger fullstendig vitenskapelig bevis** for skadevirkningene.

### Prinsippets kjerne
- **Bevisbyrden snus:** I stedet for å kreve bevis for at noe er skadelig før man handler, krever føre-var-prinsippet at man viser at noe er trygt før man tar det i bruk
- **Forsiktighet under usikkerhet:** Når konsekvensene av en teknologi er usikre og potensielt alvorlige, bør man være forsiktig
- **Proporsjonalitet:** Tiltakene bør stå i forhold til risikoen

### Føre-var-prinsippet i praksis
Prinsippet brukes på mange områder:
- **Miljø og klima:** Selv om klimavitenskapen ikke er 100 % sikker på alle konsekvenser, bør vi handle for å redusere utslipp
- **Genteknologi:** Langtidseffektene av genmodifiserte organismer (GMO) er usikre, noe som taler for forsiktighet
- **Kunstig intelligens:** Muligheten for utilsiktede konsekvenser av avansert KI taler for regulering og forsiktighet

### Kritikk av føre-var-prinsippet
- Kan hemme innovasjon og vitenskapelig fremgang
- Vanskelig å avgjøre hva som er «rimelig grunn til frykt»
- Alle teknologier innebærer en viss risiko – fullstendig sikkerhet er umulig
- Kan brukes selektivt for å blokkere uønskede teknologier

## Oppsummering

- **Anvendt etikk** bruker etiske teorier på konkrete problemstillinger som bioetikk og teknologietikk.
- **Bioetikken** anvender fire sentrale prinsipper: autonomi, velgjørenhet, ikke-skade og rettferdighet.
- Spørsmål om **abort**, **eutanasi** og **genteknologi** er sentrale bioetiske temaer der ulike etiske teorier gir ulike perspektiver.
- **Kunstig intelligens** reiser etiske spørsmål om ansvar, diskriminering, personvern og autonomi.
- **Føre-var-prinsippet** anbefaler forsiktighet når konsekvensene av ny teknologi er usikre og potensielt alvorlige.`,
    },
    {
      id: 're-4-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 're-4-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar føre-var-prinsippet og drøft om det bør anvendes på utviklingen av kunstig intelligens. Hva er styrkene og svakhetene ved å bruke dette prinsippet på KI?',
        solution: 'Føre-var-prinsippet sier at man bør treffe forebyggende tiltak mot potensielt alvorlige skadevirkninger, selv uten fullstendig vitenskapelig bevis. Styrker ved å bruke det på KI: KI kan ha uforutsigbare konsekvenser for samfunnet, og skadene kan være vanskelig å reversere (for eksempel masseovervåking, algoritmisk diskriminering). Forsiktig utvikling og regulering kan forhindre skade. Svakheter: KI har også enorme potensielle fordeler for medisin, forskning og velferd. Overdreven forsiktighet kan forsinke viktig utvikling. Det er vanskelig å avgjøre hva som er en «rimelig» risiko. En balansert tilnærming kan være å anvende føre-var-prinsippet proporsjonalt – strengere regulering for høyrisikoområder som autonome våpen, men mer rom for innovasjon innenfor medisinsk forskning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 're-4-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg ett av de bioetiske temaene i dette kapittelet (abort, eutanasi eller genteknologi) og analyser det ved hjelp av minst to ulike etiske teorier. Presenter argumenter fra begge sider.',
        solution: 'Eksempel med genteknologi analysert med to teorier: Utilitarisme: For – genteknologi kan forhindre enorm lidelse ved å kurere arvelige sykdommer. Den totale lykken øker. Mot – risikoen for uforutsette konsekvenser og økt ulikhet (bare de rike får tilgang) kan redusere total velferd. Pliktetikk (Kant): For – vi har en ufullkommen plikt til å hjelpe andre, og genteknologi kan redde liv. Mot – å redigere genene til fremtidige generasjoner uten deres samtykke krenker autonomiprinsippet og behandler dem som middel for våre mål. Humanitetsformuleringen krever at vi respekterer hvert menneskes verdighet – og det er uklart om «designerbabyer» er forenlig med dette. En god analyse viser evne til å vurdere argumenter fra ulike perspektiver uten å ta ensidig stilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.7: Religiøs etikk og sekulær etikk
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_4_7: TextbookChapter = {
  id: 'religion-etikk-4-7',
  courseId: 'religion-etikk',
  chapterNumber: '4.7',
  title: 'Religiøs etikk og sekulær etikk',
  description: 'Etiske perspektiver fra kristendom, islam og buddhisme, og sammenligning mellom religiøs og sekulær etikk.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte etiske ideer og utfordringer knyttet til sentrale områder i samtiden',
    'gjøre rede for og drøfte ulike etiske modeller',
    'drøfte sammenhengen mellom religion, livssyn og etikk',
  ],
  content: [
    {
      id: 're-4-7-intro',
      type: 'text',
      content: `# Religiøs etikk og sekulær etikk

Gjennom historien har religion vært den viktigste kilden til moral for de fleste mennesker. Religiøse tradisjoner gir sine tilhengere moralske regler, verdier og fortellinger som veileder dem i hverdagen. Samtidig har den moderne vestlige verden i stor grad utviklet en **sekulær etikk** – etiske teorier som begrunner moralen uten å henvise til Gud eller hellige skrifter.

Forholdet mellom religiøs og sekulær etikk er et sentralt tema i religion- og etikkfaget. Kan moralen stå på egne ben uten religion? Eller er religion en nødvendig forutsetning for moral? Og hva har de ulike religiøse tradisjonene å tilby den etiske samtalen?

I dette kapittelet skal vi se nærmere på etikken i tre store religioner – kristendom, islam og buddhisme – og sammenligne dem med sekulær etikk.`,
    },
    {
      id: 're-4-7-def-1',
      type: 'definition',
      title: 'Religiøs og sekulær etikk',
      content: `**Religiøs etikk:** Etikk som er forankret i en religiøs tradisjon og henter sin begrunnelse fra Guds vilje, hellige tekster, religiøse ledere eller åndelig innsikt.

**Sekulær etikk:** Etikk som begrunner moral uten å henvise til Gud eller religion, men i stedet baserer seg på fornuft, erfaring, empati eller samfunnskontrakt.

**Guddommelig bud-etikk (divine command theory):** Oppfatningen om at noe er moralsk riktig fordi Gud befaler det. Det moralsk gode er identisk med Guds vilje.

**Euthyfron-dilemmaet (Platon):** Er noe godt fordi Gud vil det, eller vil Gud det fordi det er godt? Hvis det første: moralen er vilkårlig (Gud kunne bestemt at tortur er godt). Hvis det andre: det gode er uavhengig av Gud, og vi trenger ikke Gud for å kjenne det.`,
    },
    {
      id: 're-4-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 're-4-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er Euthyfron-dilemmaet?',
        options: [
          { id: 'a', text: 'Spørsmålet om Gud eksisterer eller ikke', isCorrect: false },
          { id: 'b', text: 'Spørsmålet om noe er godt fordi Gud vil det, eller om Gud vil det fordi det er godt', isCorrect: true },
          { id: 'c', text: 'Spørsmålet om ulike religioner kan ha rett samtidig', isCorrect: false },
          { id: 'd', text: 'Spørsmålet om moral kan eksistere etter døden', isCorrect: false },
        ],
        solution: 'Euthyfron-dilemmaet er det filosofiske spørsmålet om noe er moralsk godt fordi Gud befaler det, eller om Gud befaler det fordi det er godt. Begge alternativene er problematiske for religiøs etikk: Hvis det gode er godt kun fordi Gud vil det, er moralen vilkårlig. Hvis Gud vil det fordi det er godt, eksisterer det gode uavhengig av Gud.',
      },
    },
    {
      id: 're-4-7-text-2',
      type: 'text',
      content: `## Kristen etikk

Kristendommen har gjennom to tusen år utviklet en rik etisk tradisjon med ulike retninger og vektlegginger. Noen sentrale elementer:

### Nestekjærlighetsbudet
Det mest sentrale etiske prinsippet i kristendommen er **nestekjærlighetsbudet**: «Du skal elske din neste som deg selv» (Matteus 22:39). Jesus formulerte dette som det nest viktigste budet, etter kjærligheten til Gud.

I lignelsen om den barmhjertige samaritan (Lukas 10:25–37) utvider Jesus begrepet «neste» til å gjelde alle mennesker – også de som tilhører andre folkegrupper eller religioner. Nestekjærligheten er universell og betingelsesløs.

### Den gylne regel
Jesus formulerte også **den gylne regel**: «Alt dere vil at andre skal gjøre mot dere, det skal også dere gjøre mot dem» (Matteus 7:12). Denne regelen finnes i ulike varianter i nesten alle religioner og etiske tradisjoner.

### Ti bud og naturrett
De **ti bud** (Moselovens dekalog) er grunnleggende moralske regler i kristendommen: forbud mot drap, tyveri, løgn og utroskap, og påbud om å ære Gud og foreldre.

Den **naturrettslige** tradisjonen i kristendommen, særlig representert ved Thomas Aquinas (1225–1274), hevder at Gud har lagt ned en morallov i naturen som mennesker kan kjenne gjennom fornuften. Denne naturloven er universell og gjelder alle mennesker, uavhengig av religion.

### Tilgivelse og nåde
Kristendommen legger unik vekt på **tilgivelse**. Jesus oppfordret til å tilgi «sytti ganger sju ganger» (Matteus 18:22) og ba om tilgivelse for sine fiender da han ble korsfestet. Nåde og tilgivelse er sentrale verdier som skiller kristen etikk fra streng rettferdighetstankegang.`,
    },
    {
      id: 're-4-7-def-2',
      type: 'definition',
      title: 'Sentrale begreper i kristen etikk',
      content: `**Nestekjærlighet (agape):** Betingelsesløs, universell kjærlighet til alle mennesker – det viktigste etiske prinsippet i kristendommen.

**Den gylne regel:** «Gjør mot andre det du vil at andre skal gjøre mot deg.» Et universelt moralprinsipp som finnes i mange religioner.

**Naturrett:** Ideen om at det finnes en universell morallov innebygd i naturen, som mennesker kan kjenne gjennom fornuften. Utviklet av Thomas Aquinas i kristen tradisjon.

**Tilgivelse:** Et sentralt kristent verdibegrep – å gi slipp på hevn og sinne overfor den som har gjort urett. Begrunnet i Guds nåde og Jesu eksempel.`,
    },
    {
      id: 're-4-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 're-4-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gjør rede for nestekjærlighetsbudet i kristen etikk. Hvem er «nesten», og hva innebærer det å «elske sin neste som seg selv»?',
        solution: 'Nestekjærlighetsbudet – «du skal elske din neste som deg selv» – er det mest sentrale etiske prinsippet i kristendommen. Jesus utvidet begrepet «neste» radikalt gjennom lignelsen om den barmhjertige samaritan: Nesten er alle mennesker, også de som tilhører andre folkegrupper eller religioner. Å elske sin neste som seg selv innebærer å behandle alle med den samme omsorgen og respekten som man ønsker for seg selv. Det handler ikke nødvendigvis om følelser, men om handling: å hjelpe, vise medfølelse og respektere andres verdighet. Nestekjærligheten er universell (gjelder alle), betingelsesløs (krever ikke gjensidighet) og aktiv (uttrykkes i handling).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-7-text-3',
      type: 'text',
      content: `## Islamsk etikk

Islam har en omfattende etisk tradisjon som er nært knyttet til religiøs lov og teologi. Etikken er forankret i Guds (Allahs) vilje slik den er åpenbart i Koranen og profetens eksempel.

### Sharia – islamsk lov og etikk
**Sharia** betyr «veien» og refererer til det helhetlige systemet av religiøse og etiske regler som guider muslimers liv. Sharia er basert på:

- **Koranen:** Den primære kilden til moralsk veiledning
- **Hadith og sunna:** Profeten Muhammads utsagn og praksis
- **Ijma:** Konsensus blant lærde
- **Qiyas:** Analogislutninger for nye situasjoner

### Ijtihad – selvstendig moralsk resonnering
**Ijtihad** er praksisen med selvstendig fortolkning og moralsk resonnering i islamsk tradisjon. Lærde bruker ijtihad for å anvende islamske prinsipper på nye problemstillinger som ikke direkte omtales i Koranen eller hadith. Dette har vært særlig viktig for å møte moderne utfordringer.

### Sentrale etiske verdier i islam
- **Rettferdighet (adl):** En grunnleggende verdi – Koranen befaler rettferdighet gjentatte ganger
- **Barmhjertighet (rahma):** Enhver sure i Koranen (unntatt én) åpner med «I Guds, den Barmhjertiges, den Nåderikes navn»
- **Solidaritet med de svake:** Zakat (almisseskatten) er en av islams fem søyler og pålegger muslimer å gi til de fattige
- **Kunnskap (ilm):** Islam oppfordrer til å søke kunnskap – den første åpenbaringen var «Les!» (iqra)
- **Fellesskap (umma):** Ansvaret for fellesskapet er sentralt i islamsk etikk

### Islamsk etikk og moderne spørsmål
Islamske lærde diskuterer aktivt hvordan islamske etiske prinsipper skal anvendes på moderne spørsmål som bioetikk, miljøvern og menneskerettigheter. Det finnes et bredt spekter av tolkninger – fra tradisjonelle til reformorienterte – og debattene er levende.`,
    },
    {
      id: 're-4-7-def-3',
      type: 'definition',
      title: 'Sentrale begreper i islamsk etikk',
      content: `**Sharia:** «Veien» – det helhetlige systemet av etiske og religiøse regler i islam, basert på Koranen, hadith, konsensus (ijma) og analogislutninger (qiyas).

**Ijtihad:** Selvstendig moralsk og juridisk resonnering for å anvende islamske prinsipper på nye situasjoner. En dynamisk tradisjon som muliggjør tilpasning til nye utfordringer.

**Adl (rettferdighet):** En av de mest sentrale verdiene i islam – Koranen befaler rettferdighet overfor alle, inkludert fiender.

**Zakat (almisseskatt):** En av islams fem søyler – plikten til å gi en del av sin formue til de fattige. Uttrykker solidaritet og rettferdig fordeling.`,
    },
    {
      id: 're-4-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 're-4-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er ijtihad i islamsk tradisjon?',
        options: [
          { id: 'a', text: 'En type bønn som utføres fem ganger daglig', isCorrect: false },
          { id: 'b', text: 'Den islamske pilegrimsreisen til Mekka', isCorrect: false },
          { id: 'c', text: 'Selvstendig moralsk og juridisk resonnering for å anvende islamske prinsipper på nye situasjoner', isCorrect: true },
          { id: 'd', text: 'Den islamske fasten i ramadan', isCorrect: false },
        ],
        solution: 'Ijtihad er praksisen med selvstendig fortolkning og moralsk resonnering i islamsk tradisjon. Lærde bruker ijtihad for å anvende Koranens og hadithenes prinsipper på nye situasjoner som ikke direkte omtales i de hellige tekstene. Det er en dynamisk tradisjon som gjør det mulig å møte moderne utfordringer innenfor et islamsk rammeverk.',
      },
    },
    {
      id: 're-4-7-text-3b',
      type: 'text',
      content: `### Islamsk etikk og bioetiske spørsmål

Islamske lærde har utviklet detaljerte posisjoner på mange moderne bioetiske spørsmål, basert på ijtihad (selvstendig resonnering) innenfor det islamske rammeverket.

**Abort:** De fleste islamske lærde skiller mellom tidlig og sent i svangerskapet. Mange aksepterer abort før «besjeling» av fosteret (ofte satt til 120 dager), særlig hvis morens liv er i fare. Etter besjeling er abort generelt forbudt unntatt i ytterste nødsfall. Det finnes imidlertid uenighet mellom ulike rettsskoler.

**Eutanasi:** Aktiv dødshjelp er generelt forbudt i islamsk etikk fordi livet tilhører Gud, ikke individet – mennesket er livets forvalter, ikke eier. Passiv dødshjelp (å avslutte livsforlengende behandling ved håpløs prognose) er mer akseptert, fordi det ses som å akseptere Guds vilje.

**Organtransplantasjon:** De fleste moderne islamske lærde aksepterer organdonasjon som en form for veldedighet og nestekjærlighet, så lenge det skjer frivillig og uten økonomisk kompensasjon. Prinsippet om *maslaha* (fellesskapets beste) brukes som begrunnelse.

**Genteknologi:** Genterapi for å kurere sykdommer er generelt akseptert som en form for medisinsk behandling. Kloning og genetisk forbedring (enhancement) utover behandling er mer omstridt. Prinsippet om at mennesket ikke skal «spille Gud» veier tungt.

### Mangfold innen islamsk etikk
Det er viktig å understreke at det finnes et bredt spekter av tolkninger innenfor islam. Fra **tradisjonelle** tolkninger som legger vekt på Koranens og hadithenes bokstavelige mening, til **reformorienterte** tolkninger som legger vekt på Koranens ånd og intensjon og er mer åpne for tilpasning til moderne kontekster. Denne interne debatten er et tegn på en levende etisk tradisjon.`,
    },
    {
      id: 're-4-7-def-5',
      type: 'definition',
      title: 'Islamsk etikk og moderne spørsmål',
      content: `**Maslaha (fellesskapets beste):** Et prinsipp i islamsk rettstenkning som tillater løsninger som tjener fellesskapets interesser, selv om de ikke har direkte støtte i Koranen eller hadith. Brukes for å møte nye utfordringer.

**Maqasid al-sharia (shariaens formål):** De overordnede målene bak islamsk lov: å beskytte liv, tro, fornuft, avkom og eiendom. Reformorienterte tenkere bruker disse målene for å begrunne fleksible tolkninger.

**Haram og halal:** Begreper for det forbudte og det tillatte i islam. Etiske og juridiske vurderinger i islamsk tradisjon kategoriserer handlinger langs en skala fra obligatorisk (wajib) til forbudt (haram).

**Fatwa:** En islamsk lærds rettslige og etiske uttalelse om et spesifikt spørsmål. Fatwaer er rådgivende, ikke juridisk bindende, og ulike lærde kan gi ulike fatwaer om samme spørsmål.`,
    },
    {
      id: 're-4-7-example-1',
      type: 'example',
      title: 'Religiøs etikk i praksis: Miljøetikk',
      content: `Alle de store religionene har utviklet miljøetiske perspektiver som er relevante for dagens klimakrise:

**Kristen miljøetikk:** Begrepet *forvalteransvar* (stewardship) er sentralt: Mennesket er satt til å forvalte skaperverket på Guds vegne, ikke utnytte det. Pave Frans\` encyklika *Laudato Si\'* (2015) kalte klimaendringer et moralsk spørsmål og oppfordret til radikal handling. Den ortodokse patriarken Bartholomeos har blitt kalt «den grønne patriarken» for sitt engasjement for miljøet.

**Islamsk miljøetikk:** Koranen omtaler mennesket som *khalifa* (forvalter) av jorda. Vi er ikke eiere, men forvaltere som vil stilles til ansvar for hvordan vi har behandlet skaperverket. Begrepet *mizan* (balanse) understreker at naturen er skapt i balanse som mennesket ikke bør forstyrre.

**Buddhistisk miljøetikk:** Prinsippet om *ahimsa* (ikke-vold) og *pratityasamutpada* (gjensidig avhengighet) gir et sterkt grunnlag for miljøetikk. Alle levende vesener er forbundet, og skade på naturen er skade på oss selv. Den buddhistiske vektleggingen av nøysomhet og moderasjon utfordrer forbrukssamfunnet.

Disse perspektivene viser at religiøs etikk har viktige bidrag til den globale miljødebatten, og at de ulike tradisjonene ofte når lignende konklusjoner fra ulike utgangspunkt.`,
    },
    {
      id: 're-4-7-ex-7',
      type: 'exercise',
      exercise: {
        id: 're-4-7-ex-7',
        number: '7',
        type: 'classic',
        task: `Sammenlign kristen, islamsk og buddhistisk miljøetikk. Hvilke likheter og forskjeller finner du? Hva kan de religiøse tradisjonene bidra med i klimadebatten?`,
        solution: `Likheter: Alle tre tradisjonene understreker at mennesket har et ansvar for naturen og at overdreven forbruk er problematisk. Alle vektlegger forvalteransvar eller respekt for det levende. Alle når konklusjonen at klimahandling er et moralsk imperativ. Forskjeller: Kristendommen og islam forankrer ansvaret i Guds skapervilje – mennesket er forvalter av Guds skaperverk. Buddhismen forankrer det i gjensidig avhengighet – alle vesener er forbundet. Kristendommen har tradisjonelt gitt mennesket en særstilling i skaperverket, mens buddhismen ser mennesket som del av en felles livsstrøm. Islam legger vekt på balanse (mizan), buddhismen på ikke-vold (ahimsa). Bidrag til klimadebatten: De religiøse tradisjonene kan gi klimahandling en moralsk og eksistensiell dimensjon som ren vitenskap og politikk mangler. De kan motivere handling gjennom dypere verdier enn økonomisk egeninteresse.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-7-text-4',
      type: 'text',
      content: `## Buddhistisk etikk

Buddhismen tilbyr et etisk perspektiv som skiller seg fra de monoteistiske religionene. Buddhistisk etikk er ikke forankret i en guddommelig lovgiver, men i **Buddhas lære** om veien til frigjøring fra lidelse.

### Ahimsa – ikke-vold
Det mest grunnleggende etiske prinsippet i buddhismen er **ahimsa** – ikke-vold eller skadefrihet. Det første av de fem levereglene (*panca-sila*) er: «Jeg påtar meg å avholde meg fra å skade levende vesener.»

Ahimsa innebærer mer enn å avstå fra fysisk vold – det handler om en grunnleggende holdning av respekt og medfølelse overfor alt levende. Dette inkluderer dyr og har inspirert mange buddhister til vegetarianisme.

### Den midtre vei
**Den midtre vei** (*majjhima patipada*) er Buddhas lære om å unngå ytterligheter – både overdreven nytelsessøken og ekstrem askese. I etisk sammenheng betyr dette å finne balanse og moderasjon.

### De fire edle sannheter og den åttedelte veien
Buddhistisk etikk er uløselig knyttet til Buddhas lære om de **fire edle sannheter**:
1. Livet innebærer lidelse (*dukkha*)
2. Lidelsens årsak er begjær og tilknytning
3. Det er mulig å opphøre lidelse
4. Den åttedelte veien fører til lidelsens opphør

**Den åttedelte veien** inneholder tre etiske elementer:
- **Rett tale:** Ikke lyve, baktale eller bruke krenkende språk
- **Rett handling:** Ikke drepe, stjele eller misbruke seksualitet
- **Rett livsførsel:** Ikke tjene til livets opphold på måter som skader andre

### Karuna og metta – medfølelse og kjærlighet
To sentrale buddhistiske dyder er **karuna** (medfølelse med alle levende vesener) og **metta** (universell kjærlig vennlighet). Disse dydene er ikke begrenset til mennesker, men omfatter alt levende.`,
    },
    {
      id: 're-4-7-def-4',
      type: 'definition',
      title: 'Sentrale begreper i buddhistisk etikk',
      content: `**Ahimsa:** Ikke-vold eller skadefrihet – det mest grunnleggende etiske prinsippet i buddhismen. Innebærer respekt og medfølelse overfor alt levende.

**Den midtre vei (majjhima patipada):** Buddhas lære om å unngå ytterligheter og finne balanse – verken overdreven nytelsessøken eller ekstrem askese.

**Karuna:** Medfølelse – en dyp medlidenhet med alle levende veseners lidelse, kombinert med ønsket om å lindre den.

**Metta:** Universell kjærlig vennlighet – en betingelsesløs, altomfattende godvilje overfor alle levende vesener.

**De fem levereglene (panca-sila):** Buddhistiske etiske grunnregler: 1) Ikke skade levende vesener, 2) Ikke ta det som ikke er gitt, 3) Ikke misbruke seksualitet, 4) Ikke lyve, 5) Ikke bruke rusmidler.`,
    },
    {
      id: 're-4-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 're-4-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar prinsippet om ahimsa i buddhismen. Hvordan skiller buddhistisk etikk seg fra kristen etikk i synet på forholdet mellom mennesker og dyr?',
        solution: 'Ahimsa (ikke-vold) er det mest grunnleggende etiske prinsippet i buddhismen – en grunnholdning av respekt og medfølelse overfor alt levende, ikke bare mennesker. De fem levereglene begynner med å ikke skade levende vesener, og buddhistisk medfølelse (karuna) omfatter alle levende vesener uten unntak. Kristen etikk er mer menneskesentrert – mennesket er skapt i Guds bilde og har en særstilling i skaperverket. Nestekjærlighetsbudet gjelder mennesker, ikke dyr. Kristen tradisjon har generelt ment at mennesket har rett til å bruke dyr, selv om det også finnes en tradisjon for forvalteransvar. Buddhismen ser derimot mennesker og dyr som del av det samme lidelsesfylte kretsløpet og gir alle levende vesener moralsk status. Denne forskjellen gjenspeiler ulik kosmologi: kristendommens hierarkiske skaperverk vs. buddhismens samsara der alle vesener er forbundet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-7-text-4b',
      type: 'text',
      content: `## Hinduistisk og jødisk etikk – et kort blikk

For å utvide perspektivet kan vi også nevne etiske tradisjoner i hinduismen og jødedommen.

### Hinduistisk etikk
Hinduismen har en rik etisk tradisjon bygget rundt sentrale begreper:
- **Dharma:** Moralsk plikt eller livsoppgave – varierer med kaste, livsstadium og situasjon. Dharma er det som opprettholder den kosmiske og sosiale ordenen.
- **Karma:** Loven om årsak og virkning – gode handlinger gir godt karma og gunstige gjenfødelser, dårlige handlinger gir dårlig karma. Karma gir en sterk motivasjon for moralsk handling.
- **Ahimsa:** Delt med buddhismen – ikke-vold overfor alle levende vesener. Særlig vektlagt i jainismen og av Mahatma Gandhi.
- **Moksha:** Frigjøring fra gjenfødelsens syklus som det ultimate målet. Moralsk livsførsel (dharma) er en forutsetning for moksha.

### Jødisk etikk
Jødisk etikk er nært knyttet til Toraen og den rabbinske tradisjonen:
- **Tikkun olam:** «Å reparere verden» – ideen om at mennesker har ansvar for å gjøre verden til et bedre sted. Brukes i dag som begrunnelse for sosial rettferdighet og miljøvern.
- **Tzedakah:** Rettferdighet og veldedighet – ikke bare en god gjerning, men en plikt. Å hjelpe de fattige er et krav, ikke bare en anbefaling.
- **Pikuach nefesh:** Prinsippet om at å redde liv trumfer nesten alle andre religiøse påbud. Illustrerer at jødisk etikk er fleksibel og livsorientert.
- **Machloket:** Uenighet som tradisjon – i Talmud bevareres ofte motstridende syn side om side, noe som viser at etisk debatt og uenighet er verdifullt i seg selv.`,
    },
    {
      id: 're-4-7-def-6',
      type: 'definition',
      title: 'Begreper fra hinduistisk og jødisk etikk',
      content: `**Dharma:** Sentralt hinduistisk begrep som betyr moralsk plikt, lov eller livsoppgave. Dharma varierer med personens kaste, livsstadium og situasjon, og opprettholder den kosmiske og sosiale ordenen.

**Karma:** Loven om årsak og virkning i hinduistisk og buddhistisk tenkning. Moralske handlinger har konsekvenser for denne og fremtidige gjenfødelser. Godt karma leder til gunstige gjenfødelser.

**Tikkun olam:** Jødisk begrep som betyr «å reparere verden». Uttrykker menneskets ansvar for å gjøre verden til et bedre sted gjennom rettferdighet, veldedighet og gode gjerninger.

**Pikuach nefesh:** Jødisk prinsipp om at det å redde menneskeliv trumfer nesten alle andre religiøse påbud. Illustrerer at livet har høyeste prioritet i jødisk etikk.`,
    },
    {
      id: 're-4-7-ex-8',
      type: 'exercise',
      exercise: {
        id: 're-4-7-ex-8',
        number: '8',
        type: 'multiple-choice',
        task: `Hva betyr det jødiske begrepet «tikkun olam»?`,
        options: [
          { id: 'a', text: 'Å følge de ti bud uten unntak', isCorrect: false },
          { id: 'b', text: 'Å reparere verden – menneskets ansvar for å gjøre verden til et bedre sted', isCorrect: true },
          { id: 'c', text: 'Å studere Toraen daglig', isCorrect: false },
          { id: 'd', text: 'Å faste og be i Yom Kippur', isCorrect: false },
        ],
        solution: `Tikkun olam betyr bokstavelig «å reparere verden» og er et sentralt begrep i jødisk etikk. Det uttrykker ideen om at mennesker har et ansvar for å gjøre verden til et bedre sted gjennom rettferdighet, veldedighet og gode gjerninger. Begrepet brukes i dag som begrunnelse for sosial rettferdighet, menneskerettigheter og miljøvern.`,
      },
    },
    {
      id: 're-4-7-text-5',
      type: 'text',
      content: `## Religiøs etikk vs. sekulær etikk

Forholdet mellom religiøs og sekulær etikk er et av de viktigste spørsmålene i religion- og etikkfaget.

### Argumenter for at moral trenger religion
- **Guddommelig autoritet:** Religion gir moralen et absolutt grunnlag – Guds vilje er den ultimate begrunnelsen for hva som er rett og galt
- **Motivasjon:** Troen på en rettferdig Gud som belønner godt og straffer ondt gir sterkere motivasjon til moralsk handling
- **Mening:** Religion gir moralen en plass i en større meningssammenheng
- **Fellesskap:** Religiøse fellesskap gir støtte og veiledning for moralsk liv

### Argumenter for at moral kan stå uten religion
- **Euthyfron-dilemmaet:** Viser at moralen logisk sett er uavhengig av Guds vilje
- **Fornuftsbasert etikk:** Filosofer som Kant har vist at moral kan begrunnes i fornuften alene
- **Universelle verdier:** Mange moralske verdier (som den gylne regel) finnes på tvers av religioner og kulturer, noe som tyder på at de har et grunnlag uavhengig av spesifikke religioner
- **Sekulariserte samfunn:** Moderne sekulære samfunn har høy grad av moral og rettferdighet uten religiøs begrunnelse
- **Moralsk uenighet innen religioner:** Religiøse mennesker er uenige om moralske spørsmål, noe som viser at religion alene ikke gir entydige svar

### Fellestrekk og forskjeller
| | Religiøs etikk | Sekulær etikk |
|---|---|---|
| **Grunnlag** | Guds vilje / åpenbaring | Fornuft / erfaring / empati |
| **Motivasjon** | Gudsfrykt, nåde, frelse | Samvittighet, empati, fornuft |
| **Felles verdier** | Kjærlighet, rettferdighet, medfølelse | Kjærlighet, rettferdighet, medfølelse |
| **Menneskesyn** | Skapt i Guds bilde / del av skaperverket | Fornuftsvesen med iboende verdighet |
| **Universalitet** | Guds lov gjelder alle | Fornuftens lov gjelder alle |

Det er verdt å merke seg at mange verdier er felles: Både religiøs og sekulær etikk vektlegger kjærlighet, rettferdighet, medfølelse og menneskeverd. Forskjellen ligger ofte mer i **begrunnelsen** enn i de konkrete moralske normene.`,
    },
    {
      id: 're-4-7-text-5b',
      type: 'text',
      content: `## Dialog mellom religiøs og sekulær etikk

I det moderne, pluralistiske samfunnet er dialog mellom religiøse og sekulære etiske tradisjoner både nødvendig og fruktbart. I stedet for å se dem som motsetninger, kan vi se dem som **komplementære perspektiver** som beriker den etiske samtalen.

### Jurgen Habermas og den postssekulære dialogen
Den tyske filosofen **Jurgen Habermas** (f. 1929), selv sekulær, har argumentert for at religiøse stemmer bør ha en plass i det offentlige ordskiftet. Religiøse tradisjoner bærer på moralsk innsikt som det sekulære samfunnet ikke bør ignorere. Samtidig må religiøse argumenter «oversettes» til et språk som alle kan forstå og diskutere, uavhengig av religiøs tilhørighet.

### Overlappende konsensus
Filosofen **John Rawls** (1921–2002) introduserte begrepet **overlappende konsensus**: I et pluralistisk samfunn med mange religioner og livssyn kan vi likevel enes om grunnleggende rettferdigheprinsipper, selv om vi begrunner dem ulikt. En kristen, en muslim, en buddhist og en ateist kan alle støtte menneskerettighetene – men med ulike begrunnelser.

### Hans Kungs prosjekt: Verdensetos
Den sveitsiske teologen **Hans Kung** (1928–2021) lanserte prosjektet **Weltethos** (verdensetos) – et forsøk på å identifisere etiske prinsipper som alle verdens religioner og livssyn kan enes om. Han fant fire grunnleggende forpliktelser:
1. Forpliktelse til en kultur av **ikke-vold og respekt for liv**
2. Forpliktelse til en kultur av **solidaritet og rettferdig økonomi**
3. Forpliktelse til en kultur av **toleranse og sannferdighet**
4. Forpliktelse til en kultur av **likestilling og partnerskap**

### Utfordringer for dialogen
- **Fundamentalisme:** Både religiøs og sekulær fundamentalisme hindrer dialog – de insisterer på at bare deres perspektiv er gyldig
- **Maktforhold:** Religiøse stemmer kan marginaliseres i sekulære samfunn, og sekulære stemmer kan undertrykkes i religiøse samfunn
- **Uforenlige verdier:** Noen ganger finnes det genuint uforenlige posisjoner – for eksempel om homofilt ekteskap eller abort – der dialog er vanskelig
- **Oversettelsesproblemer:** Religiøse erfaringer og begreper lar seg ikke alltid oversette til sekulært språk uten å tape noe vesentlig`,
    },
    {
      id: 're-4-7-example-2',
      type: 'example',
      title: 'Den gylne regel i ulike tradisjoner',
      content: `Den gylne regel – å behandle andre slik du vil bli behandlet – er et slående eksempel på overlappende konsensus. Den finnes i nesten alle religiøse og etiske tradisjoner:

**Kristendom:** «Alt dere vil at andre skal gjøre mot dere, det skal også dere gjøre mot dem.» (Matteus 7:12)

**Islam:** «Ingen av dere er en troende med mindre han ønsker for sin bror det han ønsker for seg selv.» (Hadith, Bukhari)

**Jødedom:** «Det du hater, skal du ikke gjøre mot din neste. Det er hele Toraen; resten er kommentar.» (Rabbi Hillel, Talmud)

**Buddhisme:** «Sett deg ikke opp imot andre på måter som ville være skadelige for deg selv.» (Udanavarga 5:18)

**Hinduisme:** «Man skal ikke oppføre seg mot andre på en måte som er ubehagelig for en selv.» (Mahabharata 5:1517)

**Konfutsianisme:** «Det du ikke ønsker gjort mot deg selv, gjør det ikke mot andre.» (Analektene 15:23)

**Sekulær etikk (Kant):** «Handle bare etter den maksime som du samtidig kan ville skal bli en allmenn lov.» (Det kategoriske imperativ)

Denne overraskende enigheten på tvers av kulturer og religioner tyder på at det finnes et felles moralsk fundament i menneskets natur, selv om det begrunnes ulikt.`,
    },
    {
      id: 're-4-7-ex-9',
      type: 'exercise',
      exercise: {
        id: 're-4-7-ex-9',
        number: '9',
        type: 'classic',
        task: 'Den gylne regel finnes i nesten alle religioner og etiske tradisjoner. Hva kan dette fortelle oss om forholdet mellom religiøs og sekulær etikk? Tyder det på at det finnes universelle moralske verdier?',
        solution: `At den gylne regel finnes i nesten alle religioner og etiske tradisjoner kan tolkes på flere måter: 1) Universalisten kan argumentere for at dette viser at det finnes universelle moralske sannheter som mennesker fra ulike kulturer har oppdaget uavhengig av hverandre. 2) Naturrettstenkeren kan si at det moralske er innebygd i menneskets natur og kjennes gjennom fornuften. 3) Relativisten kan innvende at det bare er den generelle formuleringen som er lik – i praksis tolkes den svært ulikt i ulike kulturer. 4) Evolusjonsbiologen kan forklare gjensidighet som et resultat av naturlig seleksjon – samarbeid og gjensidighet øker overlevelse. Uansett tolkning er det slående at mennesker på tvers av tid, kultur og religion har kommet frem til lignende grunnleggende moralske prinsipper. Dette tyder på at religiøs og sekulær etikk har mer til felles enn det som skiller dem.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 're-4-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft påstanden: «Uten religion finnes det ikke noe grunnlag for moral.» Presenter argumenter fra begge sider.',
        solution: 'For påstanden: Religion gir moralen et absolutt grunnlag i Guds vilje – uten Gud er alt tillatt (Dostojevskij). Religion gir motivasjon gjennom belønning og straff, og mening gjennom en kosmisk sammenheng. Historisk har religion vært den viktigste kilden til moral. Mot påstanden: Euthyfron-dilemmaet viser at det gode logisk sett er uavhengig av Gud. Filosofer som Kant har begrunnet moral i fornuften alene. Den gylne regel og grunnleggende verdier som medfølelse finnes på tvers av religioner, noe som tyder på et universelt grunnlag. Sekulære samfunn (f.eks. Skandinavia) fungerer moralsk godt uten religiøs begrunnelse. Mange religiøse er uenige om moralske spørsmål, noe som viser at religion alene ikke gir entydige svar. En balansert konklusjon er at religion kan styrke og motivere moral, men at moral også kan begrunnes uten religion.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 're-4-7-summary',
      type: 'text',
      content: `## Oppsummering

- **Kristen etikk** vektlegger nestekjærlighet, den gylne regel, tilgivelse og naturrett. Nestekjærligheten er universell og betingelsesløs.
- **Islamsk etikk** er forankret i sharia og vektlegger rettferdighet, barmhjertighet og solidaritet. Ijtihad muliggjør tilpasning til nye utfordringer.
- **Buddhistisk etikk** vektlegger ahimsa (ikke-vold), den midtre vei og medfølelse med alt levende. Etikken er knyttet til veien ut av lidelse.
- **Religiøs og sekulær etikk** deler mange verdier (kjærlighet, rettferdighet, medfølelse), men skiller seg i begrunnelsen: guddommelig vilje vs. menneskelig fornuft.
- Spørsmålet om moral trenger religion er omdiskutert. Euthyfron-dilemmaet viser at moralen logisk sett kan være uavhengig av Gud, men religion kan likevel gi motivasjon, mening og fellesskap for moralsk liv.`,
    },
    {
      id: 're-4-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 're-4-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign etikken i kristendom, islam og buddhisme. Hva er de viktigste likhetene og forskjellene? Hvilke verdier deler de med sekulær etikk?',
        solution: 'Likheter: Alle tre vektlegger medfølelse og omsorg for andre – nestekjærlighet (kristendom), barmhjertighet/rahma (islam), karuna/medfølelse (buddhisme). Alle har varianter av den gylne regel. Alle vektlegger solidaritet med de svake og sårbare. Forskjeller: Kristendom og islam er monoteistiske og forankrer etikken i Guds vilje, mens buddhismen ikke bygger på en guddommelig lovgiver. Buddhismen inkluderer alle levende vesener i sin etikk (ahimsa), mens kristendom og islam er mer menneskesentrerte. Kristendommen vektlegger tilgivelse og nåde unikt sterkt. Islam har et mer utviklet juridisk system (sharia) for etisk praksis. Felles med sekulær etikk: Alle tre religionene deler verdier som rettferdighet, medfølelse, sannferdighet og solidaritet med sekulær etikk. Forskjellen ligger i begrunnelsen – religiøs åpenbaring vs. fornuft og erfaring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksportarray for Seksjon 4
// ============================================================================

export const RELIGION_ETIKK_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RELIGION_ETIKK_4_1,
  CHAPTER_RELIGION_ETIKK_4_2,
  CHAPTER_RELIGION_ETIKK_4_3,
  CHAPTER_RELIGION_ETIKK_4_4,
  CHAPTER_RELIGION_ETIKK_4_5,
  CHAPTER_RELIGION_ETIKK_4_6,
  CHAPTER_RELIGION_ETIKK_4_7,
];
