/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Del 5: Homeostase og regulering
 *
 * Dekker LK20-kompetansemaal for biologi 1 (BIO01-02)
 * Kapittel 5.1-5.5: Homeostase, nervesystemet, hormonsystemet,
 * temperatur- og blodsukkerregulering, nyrene og osmoregulering
 *
 * Kompetansemaal: Eleven skal kunne gjore rede for kroppens
 * homeostatiske reguleringsmekanismer og forklare samspillet
 * mellom nervesystemet og hormonsystemet.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Homeostase – kroppens indre balanse
// ============================================================================

export const CHAPTER_BIOLOGI_1_5_1: TextbookChapter = {
  id: 'biologi-1-5-1',
  courseId: 'biologi-1',
  chapterNumber: '5.1',
  title: 'Homeostase – kroppens indre balanse',
  description: 'Hva homeostase er, negativ og positiv tilbakekobling, og hvordan kroppen opprettholder stabile indre forhold.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hva homeostase er og hvorfor det er viktig for kroppen',
    'beskrive negativ og positiv tilbakekobling med eksempler',
    'gjore rede for komponentene i et reguleringssystem: sensor, kontrollsenter, effektor',
  ],
  content: [
    {
      id: 'bio1-5-1-intro',
      type: 'text',
      content: `# Homeostase – kroppens indre balanse

Kroppen vaar er et komplekst system som hele tiden maa tilpasse seg endringer i omgivelsene. Enten vi loper i stekende sol eller sitter stille i kulden, maa det indre miljoet holdes stabilt for at cellene skal fungere optimalt. Denne evnen til aa opprettholde stabile indre forhold kalles homeostase.

## Hvorfor er homeostase viktig?

Cellene vaare er avhengige av bestemte betingelser for aa fungere:

- **Temperatur**: Enzymer fungerer best ved ca. 37 °C
- **pH**: Blodet maa holdes mellom 7,35 og 7,45
- **Blodsukker**: Cellene trenger jevn tilgang paa glukose
- **Vaeskebalanse**: Riktig konsentrasjon av salter og vann

Hvis disse forholdene avviker for mye fra det normale, kan det foere til alvorlig sykdom eller doed. Homeostase er derfor en grunnleggende forutsetning for liv.

## Historisk bakgrunn

Begrepet homeostase ble foerst brukt av den amerikanske fysiologen Walter B. Cannon i 1926, men ideen stammer fra den franske fysiologen Claude Bernard som paa 1800-tallet beskrev «le milieu intérieur» – det indre miljoet. Bernard forsto at cellene i kroppen lever i et indre miljoe (blod og vevsvaesker) som maa holdes stabilt, uavhengig av hva som skjer utenpaa kroppen. Hans beroemte utsagn var at «stabiliteten i det indre miljoet er betingelsen for et fritt og uavhengig liv» – en innsikt som fortsatt er grunnleggende i fysiologien.

## Dynamisk likevekt

Homeostase er ikke en statisk tilstand, men en dynamisk likevekt. Verdiene svinger hele tiden litt over og under setpunktet – dette er normalt. Reguleringsmekanismene jobber kontinuerlig for aa holde svingningene innenfor akseptable grenser. Hvis reguleringsmekanismene svikter, kan svingningene bli saa store at de truer helsen.`,
    },
    {
      id: 'bio1-5-1-def-1',
      type: 'definition',
      title: 'Homeostase',
      content: 'Homeostase (fra gresk homoios = lik, stasis = tilstand) er kroppens evne til aa opprettholde et stabilt indre miljoe til tross for endringer i ytre eller indre forhold. Det betyr ikke at forholdene er helt konstante, men at de svinger innenfor et smalt normalomraade rundt et setpunkt.',
    },
    {
      id: 'bio1-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Kroppstemperatur som homeostase',
      problem: 'Normal kroppstemperatur er ca. 37 °C. Forklar hvorfor temperaturen ikke er eksakt 37,0 °C hele tiden, og hva som skjer naar den avviker.',
      solution: `**Loesning:**

Kroppstemperaturen svinger normalt mellom ca. 36,1 °C og 37,2 °C gjennom doegnet. Den er lavest om morgenen og hoeyest om ettermiddagen. Dette er normalt og viser at homeostase handler om aa holde verdier innenfor et **normalomraade**, ikke paa en fast verdi.

Naar temperaturen stiger over setpunktet (f.eks. ved fysisk aktivitet):
- Blodaarene i huden utvider seg (vasodilatasjon) → mer varme avgis
- Svettekjertlene aktiveres → fordampning kjoeler kroppen

Naar temperaturen synker under setpunktet (f.eks. i kulde):
- Blodaarene i huden trekker seg sammen (vasokonstriksjon) → mindre varmetap
- Skjelving oeker varmeproduksjonen i musklene

Resultatet er at temperaturen hele tiden korrigeres tilbake mot setpunktet.`,
    },
    {
      id: 'bio1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva menes med homeostase?',
        options: [
          { id: 'a', text: 'At kroppens indre miljoe holdes stabilt innenfor et normalomraade', isCorrect: true },
          { id: 'b', text: 'At alle verdier i kroppen er helt konstante til enhver tid', isCorrect: false },
          { id: 'c', text: 'At kroppen alltid har samme temperatur som omgivelsene', isCorrect: false },
          { id: 'd', text: 'At kroppen ikke paavirkes av ytre forhold', isCorrect: false },
        ],
        solution: 'Homeostase betyr at kroppen opprettholder et stabilt indre miljoe. Verdiene er ikke helt konstante, men svinger rundt et setpunkt innenfor et smalt normalomraade. Kroppen har aktive reguleringsmekanismer som korrigerer avvik.',
      },
    },
    {
      id: 'bio1-5-1-def-2',
      type: 'definition',
      title: 'Negativ tilbakekobling (feedback)',
      content: 'Negativ tilbakekobling er den viktigste reguleringsmekanismen i kroppen. Naar en verdi avviker fra setpunktet, setter kroppen i gang tiltak som motvirker endringen og bringer verdien tilbake mot normalt. Navnet \"negativ\" viser til at responsen gaar i motsatt retning av avviket. De fleste homeostatiske prosesser bruker negativ tilbakekobling.',
    },
    {
      id: 'bio1-5-1-example-2',
      type: 'example',
      title: 'Eksempel: Negativ tilbakekobling ved blodsukkerregulering',
      problem: 'Forklar hvordan negativ tilbakekobling virker naar blodsukkeret stiger etter et maaltid.',
      solution: `**Loesning:**

Etter et maaltid stiger blodsukkeret over setpunktet:

1. **Sensor**: Betaceller i bukspyttkjertelen registrerer oekt blodsukker
2. **Kontrollsenter**: Betacellene fungerer ogsa som kontrollsenter
3. **Respons**: Betacellene skiller ut hormonet insulin
4. **Effektor**: Insulin faar celler (spesielt lever- og muskelceller) til aa ta opp glukose fra blodet
5. **Resultat**: Blodsukkeret synker tilbake mot normalt

Dette er negativ tilbakekobling fordi responsen (senke blodsukker) gaar i **motsatt retning** av endringen (oekt blodsukker). Naar blodsukkeret naar normalnivaet, reduseres insulinutskillelsen – systemet regulerer seg selv.`,
    },
    {
      id: 'bio1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar med egne ord hva som er forskjellen mellom negativ og positiv tilbakekobling. Gi ett eksempel paa hver.',
        hints: ['Tenk paa hvilken retning responsen gaar i forhold til endringen'],
        solution: 'Negativ tilbakekobling motvirker endringen og bringer verdien tilbake mot setpunktet – dette stabiliserer systemet. Eksempel: Naar kroppstemperaturen stiger, aktiveres svetting som senker temperaturen. Positiv tilbakekobling forsterker endringen – responsen gaar i samme retning som den opprinnelige endringen. Eksempel: Under foedsel forsterker oksytocin sammentrekningene i livmoren, som igjen utloeser mer oksytocin, helt til barnet er foedt.',
      },
    },
    {
      id: 'bio1-5-1-def-3',
      type: 'definition',
      title: 'Reguleringssystemets komponenter',
      content: 'Et homeostatisk reguleringssystem bestaar av fire hoveddeler: (1) Setpunkt – den oenskede verdien. (2) Sensor (reseptor) – registrerer den faktiske verdien og sender informasjon til kontrollsenteret. (3) Kontrollsenter – sammenligner faktisk verdi med setpunktet og sender signaler til effektoren. (4) Effektor – utfoerer responsen som korrigerer avviket. Eksempel: En termostat har et setpunkt (oensket temperatur), en sensor (termometer), et kontrollsenter (termostaten) og en effektor (ovnen eller viften).',
    },
    {
      id: 'bio1-5-1-example-3',
      type: 'example',
      title: 'Eksempel: Positiv tilbakekobling ved foedsel',
      problem: 'Forklar hvordan positiv tilbakekobling virker under en foedsel, og hvorfor dette er hensiktsmessig.',
      solution: `**Loesning:**

Under foedsel trykker barnets hode mot livmorhalsen:

1. **Sensor**: Strekkreseptorer i livmorhalsen registrerer trykket
2. **Kontrollsenter**: Hypothalamus i hjernen mottar signalet
3. **Respons**: Hypothalamus faar hypofysen til aa skille ut oksytocin
4. **Effektor**: Oksytocin faar livmormuskulaturen til aa trekke seg kraftigere sammen
5. **Forsterkning**: Sterkere sammentrekninger presser barnet hardere mot livmorhalsen → enda mer oksytocin → enda sterkere sammentrekninger

Denne positive tilbakekoblingssloeyfen fortsetter med oekende intensitet til barnet er foedt. Da forsvinner trykket paa livmorhalsen, og sloeyfen brytes.

**Hvorfor hensiktsmessig?** Foedselen krever stadig sterkere sammentrekninger. Negativ tilbakekobling ville dempet prosessen, mens positiv tilbakekobling driver den fremover til maal.

**Andre eksempler paa positiv tilbakekobling:**
- Blodkoagulering: Aktiverte koagulasjonsfaktorer forsterker aktiveringen av flere faktorer
- Modning av frukt: Etylen fra modnende frukt stimulerer nabo-frukt til aa modnes raskere
- Nervesignal: Aapning av natriumkanaler under depolarisering stimulerer aapning av nabokanalene`,
    },
    {
      id: 'bio1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken komponent i et homeostatisk reguleringssystem registrerer den faktiske verdien av en variabel?',
        options: [
          { id: 'a', text: 'Sensoren (reseptoren)', isCorrect: true },
          { id: 'b', text: 'Effektoren', isCorrect: false },
          { id: 'c', text: 'Kontrollsenteret', isCorrect: false },
          { id: 'd', text: 'Setpunktet', isCorrect: false },
        ],
        solution: 'Sensoren (reseptoren) registrerer den faktiske verdien av en variabel (f.eks. temperatur eller blodsukker) og sender denne informasjonen til kontrollsenteret. Kontrollsenteret sammenligner med setpunktet og sender signal til effektoren som utfoerer korrigeringen.',
      },
    },
    {
      id: 'bio1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Tegn og beskriv en negativ tilbakekoblingssloyfe for regulering av blodets pH. Blodets normale pH er mellom 7,35 og 7,45. Bruk begrepene sensor, kontrollsenter, effektor og setpunkt.',
        hints: ['Tenk paa hva som skjer naar pH synker (blodet blir for surt)', 'Pustehastigheten paavirker mengden CO₂ i blodet, som igjen paavirker pH'],
        solution: 'Setpunkt: pH mellom 7,35 og 7,45. Hvis pH synker under 7,35 (for surt): Sensor: Kjemoreseptorer i blodaarene registrerer lav pH. Kontrollsenter: Respirasjonssenteret i hjernestammen oeker pustesignaler. Effektor: Pustemusklene oeker respirasjonsfrekvensen. Raskere pusting fjerner mer CO₂ fra blodet, noe som hever pH tilbake mot normalt. Naar pH naar normalomraadet, reduseres pustesignalene – negativ tilbakekobling.',
      },
    },
    {
      id: 'bio1-5-1-summary',
      type: 'text',
      content: `## Oppsummering

Homeostase er kroppens evne til aa opprettholde stabile indre forhold. De viktigste prinsippene er:

- **Setpunkt**: Den oenskede normalverdien for en variabel
- **Negativ tilbakekobling**: Motvirker endringer og bringer verdien tilbake mot setpunktet (vanligst)
- **Positiv tilbakekobling**: Forsterker endringer – brukes i spesielle situasjoner (foedsel, blodkoagulering)
- **Sensor → Kontrollsenter → Effektor**: Komponentene i reguleringssystemet

Nesten alle fysiologiske reguleringsmekanismer vi skal laere om i de neste kapitlene – nervesignaler, hormoner, temperaturregulering, blodsukker og vaeskebalanse – er eksempler paa homeostase.

### Hva skjer naar homeostase svikter?

Mange sykdommer kan forstas som svikt i homeostatisk regulering:

| Variabel | Normal | For lav | For hoey |
|----------|--------|---------|----------|
| Temperatur | 37 °C | Hypotermi (< 35 °C) | Hypertermi (> 40 °C) |
| Blodsukker | 4–6 mmol/L | Hypoglykemi | Hyperglykemi (diabetes) |
| Blod-pH | 7,35–7,45 | Acidose | Alkalose |
| Kalsium | 2,2–2,6 mmol/L | Hypokalsemi (kramper) | Hyperkalsemi |

Jo lenger en verdi er utenfor normalomraadet, desto alvorligere er konsekvensene. Kroppens reguleringsmekanismer har grenser – ved ekstreme paavirkkninger kan de overbelastes.

Aldring svekker ogsa kroppens evne til homeostase. Eldre mennesker har redusert kapasitet for temperaturregulering, vaeskeregulering og blodsukkerregulering, noe som gjor dem mer saarbare for ekstreme vaerforhold, dehydrering og metabolske forstyrrelser. Dette er en av grunnene til at eldre har oekt risiko for heteslag om sommeren og hypotermi om vinteren.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign negativ tilbakekobling med en termostat i et hus. Identifiser sensor, kontrollsenter, effektor og setpunkt i begge systemene for temperaturregulering.',
        hints: ['Tenk paa hva som registrerer temperaturen, hva som bestemmer hva som skal skje, og hva som faktisk endrer temperaturen'],
        solution: 'Termostat: Setpunkt = oensket romtemperatur (f.eks. 22 °C). Sensor = termometeret i termostaten. Kontrollsenter = termostatens elektronikk som sammenligner maalt temperatur med setpunktet. Effektor = ovnen (varmer) eller viften (kjoeler). Kroppen: Setpunkt = ca. 37 °C. Sensor = temperaturreseptorer i huden og hypothalamus. Kontrollsenter = hypothalamus i hjernen. Effektor = blodaarer i huden (vasodilatasjon/vasokonstriksjon), svettekjertler, skjelving. Begge bruker negativ tilbakekobling: avvik fra setpunkt utloeser en respons som motvirker avviket.',
      },
    },
    {
      id: 'bio1-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilken paastand om positiv tilbakekobling er riktig?',
        options: [
          { id: 'a', text: 'Responsen forsterker den opprinnelige endringen', isCorrect: true },
          { id: 'b', text: 'Responsen motvirker den opprinnelige endringen', isCorrect: false },
          { id: 'c', text: 'Positiv tilbakekobling er den vanligste reguleringsmekanismen i kroppen', isCorrect: false },
          { id: 'd', text: 'Positiv tilbakekobling faar alltid verdien tilbake til setpunktet', isCorrect: false },
        ],
        solution: 'Ved positiv tilbakekobling forsterker responsen den opprinnelige endringen – systemet beveger seg lenger bort fra utgangspunktet. Dette er sjeldnere i kroppen enn negativ tilbakekobling og brukes kun i spesielle situasjoner der en prosess maa drives til fullfoering (f.eks. foedsel, blodkoagulering).',
      },
    },
    {
      id: 'bio1-5-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar hvorfor det ville vaert problematisk dersom kroppstemperaturen ble regulert av positiv tilbakekobling i stedet for negativ tilbakekobling.',
        hints: ['Tenk paa hva som ville skjedd hvis en temperaturoekning utloeste respons som oekte temperaturen ytterligere'],
        solution: 'Med positiv tilbakekobling ville en liten temperaturoekning utloest en respons som oekte temperaturen enda mer, som igjen ville forsterket responsen videre. Temperaturen ville raskt stige ukontrollert og kunne naa livstruende nivaaer. Paa samme maate ville en liten temperatursenkning foert til stadig lavere temperatur. Systemet ville vaert helt ustabilt. Negativ tilbakekobling er noedvendig fordi den motvirker avvik og holder temperaturen innenfor trygge grenser.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Homeostase', definition: 'Kroppens evne til aa opprettholde stabilt indre miljoe' },
    { term: 'Setpunkt', definition: 'Den oenskede normalverdien for en fysiologisk variabel' },
    { term: 'Negativ tilbakekobling', definition: 'Regulering der responsen motvirker den opprinnelige endringen' },
    { term: 'Positiv tilbakekobling', definition: 'Regulering der responsen forsterker den opprinnelige endringen' },
    { term: 'Sensor', definition: 'Komponenten som registrerer den faktiske verdien av en variabel' },
    { term: 'Effektor', definition: 'Komponenten som utfoerer korrigeringen' },
    { term: 'Kontrollsenter', definition: 'Sammenligner maalt verdi med setpunktet og styrer effektoren' },
  ],
};

// ============================================================================
// Kapittel 5.2: Nervesystemet og signaloverfoering
// ============================================================================

export const CHAPTER_BIOLOGI_1_5_2: TextbookChapter = {
  id: 'biologi-1-5-2',
  courseId: 'biologi-1',
  chapterNumber: '5.2',
  title: 'Nervesystemet og signaloverfoering',
  description: 'Nerveceller, aksjonspotensial, synapser og organisering av nervesystemet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive oppbygningen av en nervecelle og forklare funksjonen til de ulike delene',
    'forklare hvordan et aksjonspotensial oppstaar og ledes langs et akson',
    'gjore rede for signaloverfoering over en synapse',
    'gi en oversikt over sentralnervesystemet og det perifere nervesystemet',
  ],
  content: [
    {
      id: 'bio1-5-2-intro',
      type: 'text',
      content: `# Nervesystemet og signaloverfoering

Nervesystemet er kroppens raske kommunikasjonssystem. Det gjor oss i stand til aa sanse omgivelsene, tenke, fole og reagere paa stimuli – alt paa broekdelen av et sekund. Mens hormonsystemet sender langsomme, langvarige signaler gjennom blodet, sender nervesystemet raske, presise elektriske signaler langs nerveceller.

## Oversikt over nervesystemet

Nervesystemet deles i to hoveddeler:

- **Sentralnervesystemet (SNS)**: Hjernen og ryggmargen – kroppens sentrale kontrollsenter
- **Det perifere nervesystemet (PNS)**: Alle nerver utenfor SNS som forbinder kroppen med hjernen og ryggmargen

Det perifere nervesystemet kan videre deles i:
- **Somatisk nervesystem**: Styrer viljestyrte bevegelser (skjelettmuskulatur)
- **Autonomt nervesystem**: Styrer ufrivillige funksjoner (hjerteslag, fordoeyelse)
  - Sympatisk del: «Kamp eller flukt» – forbereder kroppen paa aktivitet
  - Parasympatisk del: «Hvile og fordoey» – roer kroppen ned

## Nervevev

Nervevev bestaar av to hovedtyper celler:
- **Nevroner**: De signalfoerende cellene (~100 milliarder i hjernen)
- **Gliaceller**: Stoetteceller som beskytter, ernaerer og isolerer nevronene (ca. 10 ganger saa mange som nevroner)

Viktige gliaceller inkluderer:
- **Schwannske celler**: Danner myelinskjede i PNS
- **Oligodendrocytter**: Danner myelinskjede i SNS
- **Astrocytter**: Naerer nevroner og danner blod-hjerne-barrieren
- **Mikroglia**: Immunceller i nervesystemet

Til sammen utgjor nervevev det mest komplekse vevet i kroppen. Hjernen alene inneholder ca. 100 milliarder nevroner med over 100 billioner ($10^{14}$) synaptiske forbindelser – det er flere enn antall stjerner i Melkeveien.

Sykdommer som rammer gliaceller kan ha alvorlige konsekvenser:
- **Multippel sklerose (MS)**: Immunforsvaret angriper myelinskjeden → nedsatt signaloverfoering
- **Glioblastom**: Kreft i gliaceller – den vanligste og mest aggressive hjernekrefttypen
- **Guillain-Barrés syndrom**: Immunforsvaret angriper myelinet i perifere nerver → muskelsvakhet`,
    },
    {
      id: 'bio1-5-2-def-1',
      type: 'definition',
      title: 'Nevron (nervecelle)',
      content: 'Et nevron er en spesialisert celle som kan motta, bearbeide og sende elektriske signaler. Et typisk nevron bestaar av: (1) Cellekropp (soma) med cellekjerne og organeller, (2) Dendritter som mottar signaler fra andre celler, (3) Akson – en lang utloeper som leder signalet videre, og (4) Aksonterminaler (synaptiske endeknapper) som overforer signalet til neste celle. Mange aksoner er dekket av en myelinskjede som oeker signalhastigheten.',
    },
    {
      id: 'bio1-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Signalveien i en refleks',
      problem: 'Beskriv signalveien naar du trekker haanden bort fra en varm plate, og identifiser de ulike typene nevroner som er involvert.',
      solution: `**Loesning:**

Naar du beroerer en varm plate, skjer foelgende:

1. **Sensoriske nevroner**: Varmereseptorer i huden aktiveres og sender elektriske signaler via sensoriske nevroner til ryggmargen
2. **Internevroner**: I ryggmargen mottar internevroner signalet og kobler det til motoriske nevroner
3. **Motoriske nevroner**: Sender signal fra ryggmargen til musklene i armen
4. **Effektor**: Musklene trekker haanden bort

Denne refleksbuen gaar via ryggmargen, IKKE via hjernen. Det er derfor reaksjonen er saa rask (ca. 50 millisekunder). Signalet naar hjernen foerst etterpaa – da kjenner du smerten.

De tre typene nevroner:
- **Sensoriske (afferente)**: Forer signal FRA kroppen TIL SNS
- **Internevroner**: Kobler nevroner i SNS
- **Motoriske (efferente)**: Forer signal FRA SNS TIL effektorer`,
    },
    {
      id: 'bio1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken del av nevronet mottar signaler fra andre nerveceller?',
        options: [
          { id: 'a', text: 'Dendrittene', isCorrect: true },
          { id: 'b', text: 'Aksonet', isCorrect: false },
          { id: 'c', text: 'Myelinskjeden', isCorrect: false },
          { id: 'd', text: 'Aksonterminalen', isCorrect: false },
        ],
        solution: 'Dendrittene er korte, forgrenede utloepere fra cellekroppen som mottar signaler fra andre nevroner eller fra sansereseptorer. Signalet ledes deretter gjennom cellekroppen og videre langs aksonet til aksonterminalen, der det overfoeres til neste celle.',
      },
    },
    {
      id: 'bio1-5-2-def-2',
      type: 'definition',
      title: 'Aksjonspotensial',
      content: 'Et aksjonspotensial er en rask, kortvarig endring i spenningsforskjellen over cellemembranen i et nevron. I hvile er innsiden av nevronet negativt ladet (ca. $-70$ mV) sammenlignet med utsiden – dette kalles hvilemembranpotensialet. Naar nevronet stimuleres tilstrekkelig, aapnes natriumkanaler og positive natriumioner ($\\text{Na}^+$) stroemmer inn. Dette gir en rask depolarisering til ca. $+30$ mV. Deretter aapnes kaliumkanaler og $\\text{K}^+$ stroemmer ut, slik at membranen repolariseres. Aksjonspotensialtet folger «alt-eller-ingenting-prinsippet».',
    },
    {
      id: 'bio1-5-2-example-2',
      type: 'example',
      title: 'Eksempel: Aksjonspotensialets faser',
      problem: 'Beskriv de ulike fasene i et aksjonspotensial og forklar hva som skjer med ionestroemmer i hver fase.',
      solution: `**Loesning:**

Et aksjonspotensial har foelgende faser:

**1. Hvile ($-70$ mV)**
- Na/K-pumpen opprettholder ulik ionefordeling
- Innsiden er negativ relativt til utsiden

**2. Depolarisering ($-70$ → $+30$ mV)**
- Et stimulus naar terskelverdien (ca. $-55$ mV)
- Spenningsstyrte $\\text{Na}^+$-kanaler aapnes
- $\\text{Na}^+$ stroemmer raskt inn i cellen
- Membranen blir positivt ladet (depolarisert)

**3. Repolarisering ($+30$ → $-70$ mV)**
- $\\text{Na}^+$-kanalene lukkes (inaktiveres)
- Spenningsstyrte $\\text{K}^+$-kanaler aapnes
- $\\text{K}^+$ stroemmer ut av cellen
- Membranen blir negativ igjen

**4. Hyperpolarisering (litt under $-70$ mV)**
- $\\text{K}^+$-kanalene lukkes litt forsinket
- Membranen blir kort tid mer negativ enn hvile

**5. Tilbake til hvile**
- Na/K-pumpen gjenoppretter normal ionefordeling

Hele prosessen tar ca. 1–2 millisekunder.

**Viktig:** Under refraktaerperioden (rett etter et aksjonspotensial) kan nevronet IKKE fyre et nytt signal. Dette sikrer at aksjonspotensialtet bare beveger seg i en retning langs aksonet, og setter en ovre grense for signalfrekvensen (ca. 500–1000 Hz).`,
    },
    {
      id: 'bio1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva «alt-eller-ingenting-prinsippet» betyr for aksjonspotensial, og hvordan kroppen likevel kan skille mellom svake og sterke stimuli.',
        hints: ['Tenk paa hva som skjer med frekvensen av aksjonspotensialer naar stimulus oeker'],
        solution: 'Alt-eller-ingenting-prinsippet betyr at et aksjonspotensial enten fyres fullt av (naar terskelverdien naas) eller ikke i det hele tatt. Alle aksjonspotensialer i et nevron har samme styrke og varighet. Kroppen skiller mellom svake og sterke stimuli paa to maater: (1) Sterkere stimuli gir hoeyere frekvens av aksjonspotensialer (flere signaler per sekund), og (2) Sterkere stimuli aktiverer flere nevroner samtidig. Slik koder nervesystemet signalstyrke uten aa endre selve aksjonspotensialets amplitude.',
      },
    },
    {
      id: 'bio1-5-2-def-3',
      type: 'definition',
      title: 'Synapse',
      content: 'En synapse er koblingspunktet mellom to nevroner, eller mellom et nevron og en effektorcelle (f.eks. en muskelcelle). De fleste synapser er kjemiske: signalet overfoeres ved at nevrotransmittere frigjores fra det presynaptiske nevronet, diffunderer over den synaptiske spalten, og binder til reseptorer paa det postsynaptiske nevronet. Eksempler paa nevrotransmittere er acetylkolin, dopamin, serotonin og noradrenalin.',
    },
    {
      id: 'bio1-5-2-example-3',
      type: 'example',
      title: 'Eksempel: Signaloverfoering over en synapse',
      problem: 'Beskriv trinnvis hva som skjer naar et nervesignal naar enden av et akson og skal overfoeres til neste nevron.',
      solution: `**Loesning:**

Signaloverfoering over en kjemisk synapse skjer i foelgende trinn:

1. **Aksjonspotensial ankommer** aksonterminalen (presynaptisk ende)
2. **Kalsiumkanaler aapnes**: Spenningsstyrte $\\text{Ca}^{2+}$-kanaler aapnes, og kalsiumioner stroemmer inn
3. **Vesikler fusjonerer**: $\\text{Ca}^{2+}$ faar synaptiske vesikler (smaa blærer fylt med nevrotransmitter) til aa smelte sammen med cellemembranen
4. **Eksocytose**: Nevrotransmittere frigjores ut i den synaptiske spalten (ca. 20 nm bred)
5. **Binding**: Nevrotransmitterne binder til spesifikke reseptorer paa det postsynaptiske nevronet
6. **Respons**: Ionkanaler aapnes i postsynaptisk membran – kan vaere eksitatorisk (depolarisering) eller inhibitorisk (hyperpolarisering)
7. **Avslutning**: Nevrotransmitterne fjernes ved enzymatisk nedbrytning, reopptak eller diffusjon

Hele prosessen tar ca. 0,5–1 millisekund.

**Viktige nevrotransmittere:**

| Nevrotransmitter | Hovedfunksjon | Klinisk relevans |
|-----------------|---------------|------------------|
| Acetylkolin | Muskelaktivering, laering | Mangel ved Alzheimers |
| Dopamin | Beloening, motorikk | Mangel ved Parkinsons |
| Serotonin | Humor, soven, appetitt | Lav ved depresjon |
| Noradrenalin | Vaakhet, oppmerksomhet | Stressrespons |
| GABA | Hemming av nervesignal | Angstdempende medisiner |
| Glutamat | Aktivering, laering | Den vanligste eksitatoriske |`,
    },
    {
      id: 'bio1-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er funksjonen til myelinskjeden rundt et akson?',
        options: [
          { id: 'a', text: 'Den oeker hastigheten paa signaloverfoering ved saltatorisk ledning', isCorrect: true },
          { id: 'b', text: 'Den produserer nevrotransmittere', isCorrect: false },
          { id: 'c', text: 'Den mottar signaler fra andre nevroner', isCorrect: false },
          { id: 'd', text: 'Den bryter ned nevrotransmittere i synapsespalten', isCorrect: false },
        ],
        solution: 'Myelinskjeden er et isolerende fettlag som omgir aksoner. Den gjor at aksjonspotensialtet \"hopper\" fra en Ranviersk innsnoring til neste (saltatorisk ledning), noe som oeker signalhastigheten dramatisk – fra ca. 1 m/s uten myelin til opptil 120 m/s med myelin. Sykdommer som rammer myelin (f.eks. multippel sklerose) gir derfor nedsatt nervefunksjon.',
      },
    },
    {
      id: 'bio1-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom det sympatiske og det parasympatiske nervesystemet. Gi eksempler paa hvordan de paavirker hjertet, pupillene og fordoeyelsen.',
        hints: ['Tenk paa «kamp eller flukt» vs. «hvile og fordoey»'],
        solution: 'Det sympatiske nervesystemet aktiveres i stressituasjoner og forbereder kroppen paa handling: hjertefrekvensen oeker, pupillene utvider seg (mydriasis), og fordoeyelsen hemmes. Det parasympatiske nervesystemet er aktivt i hvile og fremmer restitusjon: hjertefrekvensen senkes, pupillene trekker seg sammen (miose), og fordoeyelsen stimuleres. De to systemene virker som motspillere (antagonister) og balanserer hverandre gjennom negativ tilbakekobling.',
      },
    },
    {
      id: 'bio1-5-2-summary',
      type: 'text',
      content: `## Oppsummering

Nervesystemet sørger for rask kommunikasjon i kroppen:

- **Nevroner** bestaar av cellekropp, dendritter, akson og aksonterminaler
- **Aksjonspotensial**: Rask depolarisering/repolarisering som ledes langs aksonet
- **Synapser**: Koblingspunkter der nevrotransmittere overforer signalet kjemisk
- **SNS** (hjerne og ryggmarg) og **PNS** (perifere nerver) samarbeider
- **Sympatisk** og **parasympatisk** nervesystem balanserer kroppens funksjoner

Nervesystemet er avgjorende for homeostase fordi det gir raske justeringer av kroppens funksjoner.

### Tre typer nevroner

| Type | Retning | Funksjon | Eksempel |
|------|---------|----------|----------|
| Sensorisk (afferent) | Fra kropp til SNS | Formidler sanseinntrykk | Smertereseptor i huden |
| Interneuron | Innen SNS | Kobler nevroner, bearbeider info | I ryggmargen og hjernen |
| Motorisk (efferent) | Fra SNS til kropp | Styrer muskler og kjertler | Nerven til biceps |

De fleste nervebaner involverer alle tre typene. I en refleksbue gaar signalet fra sensorisk nevron via interneuron til motorisk nevron. I mer komplekse handlinger involveres mange internevroner i hjernen for bevisst bearbeiding.

Nervesystemet er ogsaa viktig for homeostase paa en mer direkte maate: det autonome nervesystemet regulerer kontinuerlig hjertefrekvens, blodtrykk, pustefrekvens, fordoeyelse og kroppstemperatur – alt uten at vi tenker bevisst over det.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Mange nervegifter og rusmidler virker paa synapsen. Forklar hvordan en gift som hemmer nedbrytning av nevrotransmittere i synapsespalten vil paavirke signaloverfoering.',
        hints: ['Tenk paa hva som skjer naar nevrotransmitteren forblir i synapsespalten lenger enn normalt'],
        solution: 'Hvis nedbrytningen av nevrotransmittere hemmes, vil nevrotransmitterne forbli i synapsespalten lenger og fortsette aa stimulere det postsynaptiske nevronet. Dette gir forsterket og forlenget signaloverfoering. Eksempel: Nervegassen sarin hemmer enzymet acetylkolinesterase som bryter ned acetylkolin. Resultatet er konstant stimulering av muskler, noe som forer til kramper og kan vaere dødelig. Lignende prinsipp brukes i medisinsk behandling: ved Alzheimers brukes kolinesterasehemmere for aa oeke acetylkolinnivaet i hjernen og forbedre hukommelsen.',
      },
    },
    {
      id: 'bio1-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilken rekkefoelge beskriver korrekt signaloveringen i et nevron?',
        options: [
          { id: 'a', text: 'Dendritt → cellekropp → akson → aksonterminaler → synapse', isCorrect: true },
          { id: 'b', text: 'Akson → dendritt → cellekropp → synapse → aksonterminaler', isCorrect: false },
          { id: 'c', text: 'Synapse → aksonterminaler → akson → cellekropp → dendritt', isCorrect: false },
          { id: 'd', text: 'Cellekropp → dendritt → synapse → akson → aksonterminaler', isCorrect: false },
        ],
        solution: 'Signalet i et nevron gaar fra dendrittene (mottar signal) via cellekroppen og langs aksonet til aksonterminalen. Der frigjores nevrotransmittere i synapsen for aa overfoere signalet til neste celle. Denne enveiskjoringen sikres blant annet av at vesiklene med nevrotransmittere kun finnes i aksonterminalen. I tillegg finnes reseptorene for nevrotransmitterne hovedsakelig paa den postsynaptiske membranen, slik at signalet kun kan gaa i en retning over synapsen.',
      },
    },
    {
      id: 'bio1-5-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-2-ex-7',
        number: '7',
        type: 'classic',
        task: 'Et myelinisert nevron leder signaler med 120 m/s, mens et umyelinisert nevron leder med 1 m/s. Hvor lang tid tar det for signalet aa naa fra ryggmargen til taarne (avstand ca. 1 m) i hvert tilfelle?',
        hints: ['Bruk formelen $t = \\frac{d}{v}$'],
        solution: 'Myelinisert nevron: $t = \\frac{1 \\text{ m}}{120 \\text{ m/s}} \\approx 0,0083 \\text{ s} = 8,3 \\text{ ms}$. Umyelinisert nevron: $t = \\frac{1 \\text{ m}}{1 \\text{ m/s}} = 1 \\text{ s} = 1000 \\text{ ms}$. Forskjellen er enorm – myelinskjeden gjor signalet ca. 120 ganger raskere. Dette forklarer hvorfor sykdommer som multippel sklerose, der myelinet brytes ned, gir trege reflekser og nedsatt motorisk kontroll.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Nevron', definition: 'Nervecelle som kan motta, bearbeide og sende elektriske signaler' },
    { term: 'Aksjonspotensial', definition: 'Rask elektrisk impuls som ledes langs aksonet' },
    { term: 'Synapse', definition: 'Koblingspunkt mellom to nevroner der signalet overfoeres kjemisk' },
    { term: 'Nevrotransmitter', definition: 'Kjemisk signalstoff som overforer nervesignal over en synapse' },
    { term: 'Myelinskjede', definition: 'Isolerende fettlag rundt aksoner som oeker signalhastigheten' },
    { term: 'Sentralnervesystemet', definition: 'Hjernen og ryggmargen' },
    { term: 'Det perifere nervesystemet', definition: 'Alle nerver utenfor hjernen og ryggmargen' },
    { term: 'Saltatorisk ledning', definition: 'Signaloverfoering som hopper mellom Ranvierske innsnoringer langs myeliniserte aksoner' },
  ],
};

// ============================================================================
// Kapittel 5.3: Hormonsystemet
// ============================================================================

export const CHAPTER_BIOLOGI_1_5_3: TextbookChapter = {
  id: 'biologi-1-5-3',
  courseId: 'biologi-1',
  chapterNumber: '5.3',
  title: 'Hormonsystemet',
  description: 'Hormoner, endokrine kjertler, peptid- og steroidhormoner, og samspillet mellom nerve- og hormonsystemet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare hva hormoner er og hvordan de transporteres i kroppen',
    'skille mellom peptidhormoner og steroidhormoner og forklare virkningsmekanismene',
    'beskrive de viktigste endokrine kjertlene og deres hormoner',
    'gjore rede for samspillet mellom nervesystemet og hormonsystemet',
  ],
  content: [
    {
      id: 'bio1-5-3-intro',
      type: 'text',
      content: `# Hormonsystemet

Hormonsystemet (det endokrine systemet) er kroppens langsomme, men langvarige kommunikasjonssystem. Mens nervesystemet sender raske, presise signaler langs nerver, sender hormonsystemet kjemiske budbringere – hormoner – gjennom blodet. Hormonene naar alle deler av kroppen, men paavirker bare celler som har riktig reseptor.

## Sammenligning: Nervesystem vs. hormonsystem

| Egenskap | Nervesystemet | Hormonsystemet |
|----------|--------------|----------------|
| Signaltype | Elektrisk (aksjonspotensial) | Kjemisk (hormon i blodet) |
| Hastighet | Svært rask (ms) | Langsomt (sekunder til timer) |
| Varighet | Kortvarig | Langvarig |
| Maalgruppe | Spesifikke celler (via synapser) | Alle celler med riktig reseptor |
| Eksempel | Trekke haanden fra varm plate | Regulering av blodsukker over tid |

Begge systemene samarbeider tett for aa opprettholde homeostase.

## Hormonsystemets generelle prinsipper

Hormoner virker etter noekkel-og-laas-prinsippet: hormonet (nokkelen) passer bare til sin spesifikke reseptor (laasen). En maalcelle maa ha den rette reseptoren for aa reagere paa hormonet. Antallet reseptorer paa en celle kan reguleres opp eller ned avhengig av behov – dette kalles henholdsvis oppregulering og nedregulering.

Hormonkonsentrasjonen i blodet er typisk svart lav (nanomolar eller pikomolar), men effekten kan vaere stor fordi signalet forsterkes i flere trinn inne i cellen. Hormoner brytes ned over tid, saa effekten avtar gradvis naar sekresjonen opphorer.

Hormoner kan ha ulike virkningsmonstre:
- **Endokrin**: Hormonet transporteres med blodet til fjerne maalceller (klassisk hormonvirkning)
- **Parakrin**: Hormonet virker paa naboceller uten aa gaa via blodet (f.eks. veksthormoner i vev)
- **Autokrin**: Hormonet virker tilbake paa cellen som produserte det (f.eks. i immunforsvaret)

Halveringstiden til hormoner i blodet varierer enormt: adrenalin har halveringstid paa ca. 2 minutter, mens tyroksin har halveringstid paa ca. 6–7 dager. Dette paavirker hvor raskt hormonets effekt starter og slutter, og hvor ofte det maa doseres ved medisinsk behandling.`,
    },
    {
      id: 'bio1-5-3-def-1',
      type: 'definition',
      title: 'Hormon',
      content: 'Et hormon er et kjemisk signalstoff som produseres i endokrine kjertler (eller endokrine celler), transporteres med blodet, og paavirker maalceller andre steder i kroppen. Hormonets virkning avhenger av at maalcellen har den rette reseptoren. Selv svært smaa mengder hormon kan ha stor effekt fordi signalet forsterkes gjennom intracellulaere signalkaskader.',
    },
    {
      id: 'bio1-5-3-example-1',
      type: 'example',
      title: 'Eksempel: De viktigste endokrine kjertlene',
      problem: 'Lag en oversikt over de viktigste endokrine kjertlene i kroppen, deres plassering og minst ett hormon de produserer.',
      solution: `**Loesning:**

| Kjertel | Plassering | Viktige hormoner |
|---------|-----------|-----------------|
| Hypothalamus | Hjernen | Frigjoeringshormoner (styrer hypofysen) |
| Hypofysen | Under hypothalamus | Veksthormon, ADH, oksytocin, TSH |
| Skjoldbruskkjertelen | Halsen | Tyroksin ($\\text{T}_4$), trijodtyronin ($\\text{T}_3$) |
| Biskjoldbruskkjertlene | Bak skjoldbruskkjertelen | Parathormon (PTH) |
| Binyrene | Over nyrene | Adrenalin, kortisol, aldosteron |
| Bukspyttkjertelen | Bak magen | Insulin, glukagon |
| Eggstokkene | Bekkenet (kvinner) | Oestrogen, progesteron |
| Testiklene | Pungen (menn) | Testosteron |
| Epifysen | Hjernen | Melatonin (doegnrytme) |

Hypothalamus og hypofysen kalles ofte «det overordnede kontrollsenteret» fordi de regulerer mange av de andre kjertlene.`,
    },
    {
      id: 'bio1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken paastand om hormoner er riktig?',
        options: [
          { id: 'a', text: 'Hormoner transporteres med blodet og paavirker kun celler med riktig reseptor', isCorrect: true },
          { id: 'b', text: 'Hormoner virker bare paa celler i naerheten av kjertelen som produserer dem', isCorrect: false },
          { id: 'c', text: 'Alle celler i kroppen reagerer paa alle hormoner', isCorrect: false },
          { id: 'd', text: 'Hormoner overfoeres via nervene, ikke blodet', isCorrect: false },
        ],
        solution: 'Hormoner skilles ut i blodet og transporteres til hele kroppen, men bare celler med den spesifikke reseptoren for hormonet (maalceller) paavirkes. Celler uten reseptoren ignorerer hormonet. Dette er likt et radiosignal som sendes ut bredt, men bare radioer innstilt paa riktig frekvens fanger det opp.',
      },
    },
    {
      id: 'bio1-5-3-def-2',
      type: 'definition',
      title: 'Peptidhormoner og steroidhormoner',
      content: 'Hormoner deles i to hovedgrupper basert paa kjemisk struktur: (1) Peptidhormoner er vannloeselige hormoner laget av aminosyrer. De kan ikke passere cellemembranen og binder til reseptorer paa celleoverflaten. Signalet overfoeres via intracellulaere budbringere (second messengers). Eksempler: insulin, glukagon, ADH. (2) Steroidhormoner er fettloeselige hormoner laget av kolesterol. De passerer fritt gjennom cellemembranen og binder til reseptorer inne i cellen, ofte i cellekjernen. Der paavirker de genekspresjon direkte. Eksempler: oestrogen, testosteron, kortisol.',
    },
    {
      id: 'bio1-5-3-example-2',
      type: 'example',
      title: 'Eksempel: Virkningsmekanisme for peptidhormoner vs. steroidhormoner',
      problem: 'Sammenlign hvordan insulin (peptidhormon) og testosteron (steroidhormon) virker paa maalcellen.',
      solution: `**Loesning:**

**Insulin (peptidhormon):**
1. Insulin er vannloeselig og kan IKKE passere cellemembranen
2. Binder til reseptor paa celleoverflaten
3. Reseptoren aktiverer en intracellulær signalkaskade (second messengers)
4. Signalkaskaden utloeser raske effekter: glukostransportoerer flyttes til cellemembranen
5. Rask virkning (sekunder til minutter), kortvarig effekt

**Testosteron (steroidhormon):**
1. Testosteron er fettloeselig og passerer fritt gjennom cellemembranen
2. Binder til reseptor inne i cellen (i cytoplasma eller cellekjernen)
3. Hormon-reseptor-komplekset binder til DNA
4. Paavirker genekspresjon – oeker transkripsjonen av bestemte gener
5. Langsom virkning (timer til dager), men langvarig effekt (f.eks. muskelvekst)

**Hovedforskjell:** Peptidhormoner gir rask, kortvarig respons via second messengers paa celleoverflaten. Steroidhormoner gir langsom, langvarig respons ved aa endre genekspresjon direkte.

**Klinisk relevans:** Denne forskjellen paavirker hvordan hormoner brukes medisinsk. Insulin (peptidhormon) maa injiseres fordi det ville blitt brutt ned i fordoeyelsessystemet. Steroidhormoner som p-piller (oestrogen/progesteron) kan derimot tas som tabletter fordi de er stabile nok til aa overleve fordoeyelsen og kan tas opp i tarmen.`,
    },
    {
      id: 'bio1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor steroidhormoner kan passere cellemembranen mens peptidhormoner ikke kan det. Knytt svaret til membranens oppbygning.',
        hints: ['Tenk paa cellemembranen som et dobbelt lipidlag'],
        solution: 'Cellemembranen bestaar av et dobbelt lag av fosfolipider med hydrofobt (fettloeselig) indre. Steroidhormoner er laget av kolesterol og er fettloeselige (hydrofobe), saa de kan loese seg i det hydrofobe laget og passere fritt gjennom membranen. Peptidhormoner er laget av aminosyrer og er vannloeselige (hydrofile), saa de kan ikke passere det hydrofobe barriérelaget i membranen. Derfor maa peptidhormoner binde til reseptorer paa utsiden av cellen.',
      },
    },
    {
      id: 'bio1-5-3-def-3',
      type: 'definition',
      title: 'Hypothalamus–hypofyse-aksen',
      content: 'Hypothalamus er en del av hjernen som fungerer som bindeledd mellom nervesystemet og hormonsystemet. Den mottar nervesignaler fra hjernen og reagerer med aa skille ut frigjoeringshormoner som styrer hypofysen. Hypofysen (den «overordnede kjertelen») skiller deretter ut hormoner som stimulerer andre endokrine kjertler i kroppen. Dette hierarkiske systemet gjor at hjernen kan styre hormonproduksjonen. Regulering skjer gjennom negativ tilbakekobling: naar hormonnivaet i blodet er hoyt nok, hemmes frigjoeringen fra hypothalamus og hypofysen.',
    },
    {
      id: 'bio1-5-3-example-3',
      type: 'example',
      title: 'Eksempel: Regulering av skjoldbruskkjertelen',
      problem: 'Beskriv den negative tilbakekoblingsloeyfen som regulerer tyroksinnivaet i blodet via hypothalamus–hypofyse-aksen.',
      solution: `**Loesning:**

Regulering av tyroksin ($\\text{T}_4$) skjer i tre nivaaer:

1. **Hypothalamus** registrerer lavt tyroksinnivaae i blodet
   → Skiller ut TRH (tyrotropinfrigjorende hormon)

2. **Hypofysen** mottar TRH
   → Skiller ut TSH (tyreoideastimulerende hormon) til blodet

3. **Skjoldbruskkjertelen** mottar TSH
   → Oeker produksjonen av tyroksin ($\\text{T}_4$) og trijodtyronin ($\\text{T}_3$)

**Negativ tilbakekobling:**
Naar $\\text{T}_4$-nivaet i blodet er hoyt nok:
- $\\text{T}_4$ hemmer frigjoeringen av TRH fra hypothalamus
- $\\text{T}_4$ hemmer frigjoeringen av TSH fra hypofysen
- Resultatet: Skjoldbruskkjertelen produserer mindre tyroksin

Slik holdes tyroksinnivaet stabilt innenfor normalomraadet. Tyroksin er viktig for stoffskiftet, vekst og utvikling.

**Sykdommer knyttet til skjoldbruskkjertelen:**
- **Hypotyreose** (for lite tyroksin): Lavt stoffskifte, vektoekning, trøtthet, kuldefølsomhet. Vanlig aarsak: Hashimotos sykdom (autoimmun)
- **Hypertyreose** (for mye tyroksin): Hoyt stoffskifte, vekttap, hjertebank, varmeintolerance. Vanlig aarsak: Graves sykdom (autoimmun)

Begge tilstandene illustrerer hva som skjer naar den negative tilbakekoblingen forstyrres.`,
    },
    {
      id: 'bio1-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva skiller peptidhormoner fra steroidhormoner?',
        options: [
          { id: 'a', text: 'Peptidhormoner binder til reseptorer paa celleoverflaten, steroidhormoner virker inne i cellen', isCorrect: true },
          { id: 'b', text: 'Peptidhormoner virker langsommere enn steroidhormoner', isCorrect: false },
          { id: 'c', text: 'Steroidhormoner er laget av aminosyrer, peptidhormoner av kolesterol', isCorrect: false },
          { id: 'd', text: 'Peptidhormoner kan passere cellemembranen, steroidhormoner kan ikke', isCorrect: false },
        ],
        solution: 'Peptidhormoner er vannloeselige og kan ikke passere den hydrofobe cellemembranen. De binder til reseptorer paa celleoverflaten og virker via intracellulære budbringere (raskt). Steroidhormoner er fettloeselige (laget av kolesterol), passerer cellemembranen og binder til reseptorer inne i cellen for aa paavirke genekspresjon (langsomt men langvarig).',
      },
    },
    {
      id: 'bio1-5-3-summary',
      type: 'text',
      content: `## Oppsummering

Hormonsystemet er kroppens langsomme, langvarige kommunikasjonssystem:

- **Hormoner** er kjemiske signalstoffer som transporteres med blodet
- **Peptidhormoner** (vannloeselige) virker via reseptorer paa celleoverflaten – rask, kortvarig
- **Steroidhormoner** (fettloeselige) virker inne i cellen paa genekspresjon – langsom, langvarig
- **Hypothalamus–hypofyse-aksen** er det overordnede kontrollsenteret
- **Negativ tilbakekobling** holder hormonnivaene stabile
- Nerve- og hormonsystemet samarbeider tett for aa opprettholde homeostase

### Samspill mellom nervesystemet og hormonsystemet

Nerve- og hormonsystemet er ikke isolerte – de paavirker hverandre kontinuerlig:

1. **Hypothalamus** er selve bindeleddet: den mottar nervesignaler og svarer med hormonproduksjon
2. **Binyremedulla** er i praksis en del av begge systemene: nervesignaler fra det sympatiske nervesystemet utloeser adrenalinproduksjon
3. **Nevroendokrine celler** i hjernen produserer hormoner som pavirker nervefunksjonen
4. Mange hormoner paavirker hjernen direkte – for eksempel paavirker oestrogen og testosteron adferd og humor

Denne integrasjonen gjor at kroppen kan reagere bade raskt (nervesystem) og langvarig (hormonsystem) paa endringer i miljoet.

Et godt eksempel paa dette samspillet er stressresponsen: Naar du opplever fare, sender nervesystemet umiddelbart signaler til binyrene (via det sympatiske nervesystemet) som frigjor adrenalin innen sekunder. Samtidig aktiverer hypothalamus-hypofyse-binyre-aksen (HPA-aksen) og frigjor kortisol, som gir langvarig energimobilisering over timer. Slik faar kroppen bade en rask og en vedvarende respons paa trusselen.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Adrenalin er et peptidhormon fra binyremargen som frigjores naar vi er stresset eller redd. Beskriv minst fire effekter adrenalin har paa kroppen, og forklar hvordan disse effektene forbereder kroppen paa «kamp eller flukt».',
        hints: ['Tenk paa hva kroppen trenger naar den maa reagere raskt: energi, oksygen, blodtilforsel'],
        solution: 'Adrenalin har foelgende effekter: (1) Oeker hjertefrekvens og blodtrykk – mer blod pumpes til muskler. (2) Utvider luftveiene (bronkodilatasjon) – mer oksygen tas opp. (3) Oeker nedbrytning av glykogen til glukose i leveren – mer energi tilgjengelig. (4) Hemmer fordoeyelsen – blod omdirigeres fra tarm til muskler. (5) Utvider pupillene – bedre syn. (6) Oeker svetteproduksjon – kjoeling ved aktivitet. Alle disse effektene forbereder kroppen paa rask fysisk handling, enten det er aa flykte eller forsvare seg.',
      },
    },
    {
      id: 'bio1-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilken kjertel kalles ofte «den overordnede kjertelen» fordi den styrer mange andre endokrine kjertler?',
        options: [
          { id: 'a', text: 'Hypofysen', isCorrect: true },
          { id: 'b', text: 'Skjoldbruskkjertelen', isCorrect: false },
          { id: 'c', text: 'Binyrene', isCorrect: false },
          { id: 'd', text: 'Bukspyttkjertelen', isCorrect: false },
        ],
        solution: 'Hypofysen kalles «den overordnede kjertelen» (master gland) fordi den produserer hormoner som styrer mange andre endokrine kjertler – blant annet skjoldbruskkjertelen (via TSH), binyrene (via ACTH) og kjoennskjertlene (via FSH og LH). Hypofysen styres i sin tur av hypothalamus, som er bindeleddet mellom nervesystemet og hormonsystemet.',
      },
    },
    {
      id: 'bio1-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'En pasient har en svulst i hypofysen som gjor at den produserer for mye TSH. Forklar hvordan dette paavirker skjoldbruskkjertelen og nivaet av tyroksin i blodet, og hvilke symptomer pasienten kan faa.',
        hints: ['TSH stimulerer skjoldbruskkjertelen', 'For mye tyroksin oeker stoffskiftet'],
        solution: 'For mye TSH fra hypofysen vil overstimulere skjoldbruskkjertelen, som produserer for mye tyroksin. Hoyt tyroksin gir hypertyreose (overaktiv skjoldbruskkjertel). Normalt ville hoyt tyroksin hemme TSH gjennom negativ tilbakekobling, men siden svulsten produserer TSH ukontrollert, fungerer ikke denne reguleringen. Symptomer paa for mye tyroksin: oekt stoffskifte, vekttap, hjertebank, uro/nervositet, svetting, varmeintolerance og skjelvinger.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Hormon', definition: 'Kjemisk signalstoff som transporteres med blodet til maalceller' },
    { term: 'Endokrin kjertel', definition: 'Kjertel som skiller ut hormoner direkte i blodet' },
    { term: 'Peptidhormon', definition: 'Vannloeselig hormon som virker via reseptorer paa celleoverflaten' },
    { term: 'Steroidhormon', definition: 'Fettloeselig hormon som virker paa genekspresjon inne i cellen' },
    { term: 'Hypothalamus', definition: 'Hjernedel som binder nervesystemet og hormonsystemet sammen' },
    { term: 'Hypofysen', definition: 'Den overordnede endokrine kjertelen styrt av hypothalamus' },
    { term: 'Tyroksin', definition: 'Hormon fra skjoldbruskkjertelen som regulerer stoffskiftet' },
    { term: 'Adrenalin', definition: 'Stresshormon fra binyremargen som aktiverer kamp-eller-flukt-respons' },
  ],
};

// ============================================================================
// Kapittel 5.4: Temperatur- og blodsukkerregulering
// ============================================================================

export const CHAPTER_BIOLOGI_1_5_4: TextbookChapter = {
  id: 'biologi-1-5-4',
  courseId: 'biologi-1',
  chapterNumber: '5.4',
  title: 'Temperatur- og blodsukkerregulering',
  description: 'Detaljert regulering av kroppstemperatur og blodsukker, med kliniske konsekvenser av svikt.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare mekanismene for temperaturregulering og begrepene hypotermi, hypertermi og feber',
    'beskrive blodsukkerregulering med insulin og glukagon i detalj',
    'skille mellom diabetes type 1 og type 2',
    'tegne og forklare tilbakekoblingsloeyfer for temperatur og blodsukker',
  ],
  content: [
    {
      id: 'bio1-5-4-intro',
      type: 'text',
      content: `# Temperatur- og blodsukkerregulering

I dette kapittelet skal vi se naermere paa to av kroppens viktigste homeostatiske reguleringsmekanismer: temperatur og blodsukker. Begge bruker negativ tilbakekobling og involverer samspill mellom nervesystemet og hormonsystemet.

## Hvorfor er presis regulering viktig?

- **Temperatur**: Enzymer fungerer optimalt ved ca. 37 °C. Ved for hoey temperatur denaturerer de, ved for lav temperatur arbeider de for sakte
- **Blodsukker**: Cellene trenger jevn tilfoersel av glukose som energikilde. For hoyt blodsukker skader blodaarene, for lavt blodsukker gir energisvikt i hjernen

Bade temperatur og blodsukker reguleres gjennom negativ tilbakekobling med involvering av bade nervesystemet og hormonsystemet. Vi skal naa gaa i detalj paa begge systemene og se paa hva som skjer naar reguleringen svikter.`,
    },
    {
      id: 'bio1-5-4-def-1',
      type: 'definition',
      title: 'Termoregulering',
      content: 'Termoregulering er kroppens evne til aa holde kjernetemperaturen stabil paa ca. 37 °C. Hypothalamus i hjernen fungerer som kroppens termostat: den mottar informasjon fra temperaturreseptorer i huden (perifer temperatur) og i blodet (kjernetemperatur), og setter i gang tiltak for aa oeke eller redusere varmeproduksjon og varmetap. Mennesker er homeoterme (varmblodige) – vi produserer egen varme gjennom stoffskiftet.',
    },
    {
      id: 'bio1-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Kroppens respons paa kulde og varme',
      problem: 'Beskriv de fysiologiske responsene kroppen setter i gang naar (a) kjernetemperaturen synker under 37 °C og (b) naar den stiger over 37 °C.',
      solution: `**Loesning:**

**(a) Respons paa kulde (temperatur under setpunkt):**

- **Vasokonstriksjon**: Blodaarene i huden trekker seg sammen → mindre blod naer overflaten → redusert varmetap
- **Skjelving**: Ufrivillige muskelsammentrekninger som produserer varme
- **Gaasehud**: Haarene reiser seg (lite effektiv hos mennesker, men viktig hos pelsdyr)
- **Oekt stoffskifte**: Tyroksin og adrenalin oeker forbrenningen
- **Atferdsrespons**: Vi tar paa oss klær, soeker ly, beveger oss

**(b) Respons paa varme (temperatur over setpunkt):**

- **Vasodilatasjon**: Blodaarene i huden utvider seg → mer blod naer overflaten → oekt varmetap ved straling
- **Svetting**: Svettekjertlene produserer svette → fordampning kjoeler huden
- **Redusert stoffskifte**: Mindre varmeproduksjon
- **Atferdsrespons**: Vi soeker skygge, tar av klær, drikker kaldt

Begge responsene er eksempler paa negativ tilbakekobling styrt av hypothalamus.

### Varmeproduksjon og varmetap

Kroppen produserer varme gjennom stoffskiftet (metabolsk varme). De viktigste kildene er:
- **Leveren**: Konstant metabolsk aktivitet
- **Skjelettmusklene**: Spesielt under aktivitet
- **Brun fettvev**: Viktig hos spedbarn, produserer varme direkte (termogenese uten skjelving)

Varmetap skjer gjennom fire fysiske mekanismer:
- **Straling**: Varme avgis som infraroed straling (ca. 60% av varmetapet)
- **Konveksjon**: Varme overfoeres til luft som stroember forbi huden
- **Ledning**: Direkte varmeoverfoering til kalde gjenstander
- **Fordampning**: Svette fordamper og forbruker varmeenergi

Paa en kald dag kan kroppen tape opptil 90% av varmen gjennom straling. Paa en varm dag, eller under intens aktivitet, blir fordampning (svetting) den viktigste mekanismen for varmetap. Ved 100% luftfuktighet kan ikke svette fordampe effektivt, noe som gjor fuktig varme mye farligere enn torr varme.`,
    },
    {
      id: 'bio1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva skjer med blodaarene i huden naar kroppstemperaturen stiger?',
        options: [
          { id: 'a', text: 'De utvider seg (vasodilatasjon) slik at mer varme avgis gjennom huden', isCorrect: true },
          { id: 'b', text: 'De trekker seg sammen (vasokonstriksjon) for aa holde paa varmen', isCorrect: false },
          { id: 'c', text: 'De paavirkes ikke av temperaturendringer', isCorrect: false },
          { id: 'd', text: 'De lukkes helt slik at huden blir blek', isCorrect: false },
        ],
        solution: 'Naar kroppstemperaturen stiger, sender hypothalamus signaler som faar blodaarene i huden til aa utvide seg (vasodilatasjon). Mer blod stroember naer hudoverflaten, og varme stiller fra blodet til omgivelsene gjennom straling og konveksjon. Dette er grunnen til at vi blir roede i ansiktet naar vi er varme.',
      },
    },
    {
      id: 'bio1-5-4-def-2',
      type: 'definition',
      title: 'Hypotermi, hypertermi og feber',
      content: 'Hypotermi oppstaar naar kjernetemperaturen synker under 35 °C. Symptomer er skjelving, forvirring og til slutt organsvikt. Hypertermi oppstaar naar kjernetemperaturen stiger over 40 °C uten at setpunktet er endret (f.eks. heteslag). Feber skiller seg fra hypertermi ved at setpunktet i hypothalamus er hevet – kroppen «oensker» hoeyere temperatur som forsvar mot infeksjon. Pyrogener (stoffer fra immunceller eller bakterier) hever setpunktet, slik at kroppen skjelver og produserer varme for aa naa det nye, hoeyere setpunktet.',
    },
    {
      id: 'bio1-5-4-example-2',
      type: 'example',
      title: 'Eksempel: Feber vs. hypertermi',
      problem: 'Forklar den vesentlige forskjellen mellom feber og hypertermi, med tanke paa hva som skjer med setpunktet i hypothalamus.',
      solution: `**Loesning:**

**Feber:**
- Setpunktet i hypothalamus HEVES (f.eks. fra 37 °C til 39 °C)
- Arsak: Pyrogener (f.eks. interleukin-1 fra immunceller) paavirker hypothalamus
- Kroppen «oensker» hoeyere temperatur og setter i gang varmeoekning: skjelving, vasokonstriksjon
- Formaal: Hoeyere temperatur hemmer vekst av bakterier og virus, og stimulerer immunforsvaret
- Naar infeksjonen bekaempes, senkes setpunktet igjen → svetting for aa avkjoele

**Hypertermi:**
- Setpunktet er UENDRET paa 37 °C
- Arsak: Kroppen klarer ikke aa kvitte seg med nok varme (f.eks. heteslag, varmt miljoe)
- Kroppens kjoelemekanismer er overbelastet
- Er potensielt farligere enn feber fordi det ikke er en kontrollert prosess

**Noekkelforskjell:** Ved feber er reguleringssystemet intakt – setpunktet er bare flyttet. Ved hypertermi svikter selve reguleringen.

**Grader av hypotermi:**

| Grad | Kjernetemperatur | Symptomer |
|------|-----------------|-----------|
| Mild | 35–32 °C | Skjelving, forvirring, klossete bevegelser |
| Moderat | 32–28 °C | Skjelving opphorer, alvorlig forvirring, soevnighet |
| Alvorlig | Under 28 °C | Bevisstlosthet, hjerterytmeforstyrrelser, livsfare |

Ved alvorlig hypotermi kan hjertet gaa i ventrikkelflimmer og stoppe. Foerstehjelp: Unngaa raske oppvarmingsmetoder – oppvarm pasienten langsomt og forsiktig.`,
    },
    {
      id: 'bio1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor en person med feber foeler seg kald og skjelver i starten av en infeksjon, selv om kroppstemperaturen faktisk er hoeyere enn normalt.',
        hints: ['Tenk paa hva som skjer med setpunktet'],
        solution: 'Naar infeksjonen starter, hever pyrogener setpunktet i hypothalamus (f.eks. til 39 °C). Den faktiske kroppstemperaturen er fortsatt naer 37 °C, altsaa UNDER det nye setpunktet. Hypothalamus oppfatter dette som \"for kaldt\" og setter i gang varmeproduserende tiltak: skjelving, vasokonstriksjon og frysningsfoelelse. Personen foeler seg kald fordi kroppen aktivt prover aa heve temperaturen til det nye, hoeyere setpunktet – ikke fordi kroppstemperaturen faktisk er lav.',
      },
    },
    {
      id: 'bio1-5-4-def-3',
      type: 'definition',
      title: 'Blodsukkerregulering',
      content: 'Blodsukkeret (glukosekonsentrasjonen i blodet) holdes normalt mellom 4 og 6 mmol/L i faste. Reguleringen styres av to hormoner fra bukspyttkjertelen: Insulin (fra betaceller i de Langerhanske oeyene) senker blodsukkeret ved aa stimulere cellene til aa ta opp glukose og lagre den som glykogen. Glukagon (fra alfaceller) hever blodsukkeret ved aa stimulere leveren til aa bryte ned glykogen til glukose. Disse to hormonene virker som antagonister og regulerer blodsukkeret gjennom negativ tilbakekobling.',
    },
    {
      id: 'bio1-5-4-example-3',
      type: 'example',
      title: 'Eksempel: Blodsukkernivaa gjennom en dag',
      problem: 'Beskriv hva som skjer med blodsukkeret, insulin og glukagon i foelgende situasjoner: (a) etter et maaltid, (b) mellom maaltider, (c) under intens trening.',
      solution: `**Loesning:**

**(a) Etter et maaltid (blodsukkeret stiger):**
- Glukose absorberes fra tarmen → blodsukkeret stiger
- Betaceller registrerer hoyt blodsukker → insulin frigjores
- Insulin stimulerer: celler tar opp glukose, leveren lagrer glykogen, fettceller lagrer fett
- Blodsukkeret synker tilbake til normalt → insulinsekresjonen avtar

**(b) Mellom maaltider (blodsukkeret synker):**
- Blodsukkeret synker gradvis ettersom cellene bruker glukose
- Alfaceller registrerer lavt blodsukker → glukagon frigjores
- Glukagon stimulerer leveren til aa bryte ned glykogen til glukose (glykogenolyse)
- Blodsukkeret stiger tilbake til normalt → glukagonsekresjonen avtar

**(c) Under intens trening:**
- Musklene bruker mye glukose → blodsukkeret synker raskt
- Glukagon oeker, insulin synker
- Leveren bryter ned glykogen og frigjor glukose
- Adrenalin forsterker effekten ved aa mobilisere energilagre
- Ved langvarig trening oeker ogsa nedbrytning av fett (lipolyse)

**Hypoglykemi** (lavt blodsukker, under ca. 3,5 mmol/L) er farlig fordi hjernen er nesten helt avhengig av glukose som energikilde. Symptomer inkluderer svetting, skjelving, forvirring og i alvorlige tilfeller bevisstlosthet. Diabetikere som tar for mye insulin kan oppleve hypoglykemi og maa da raskt innta sukker.`,
    },
    {
      id: 'bio1-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilket hormon senker blodsukkeret?',
        options: [
          { id: 'a', text: 'Insulin', isCorrect: true },
          { id: 'b', text: 'Glukagon', isCorrect: false },
          { id: 'c', text: 'Adrenalin', isCorrect: false },
          { id: 'd', text: 'Kortisol', isCorrect: false },
        ],
        solution: 'Insulin, produsert av betaceller i bukspyttkjertelen, er det eneste hormonet som senker blodsukkeret. Det stimulerer celler til aa ta opp glukose fra blodet og leveren til aa lagre glukose som glykogen. Glukagon, adrenalin og kortisol hever alle blodsukkeret. Insulin er derfor et livsnoedvendig hormon – uten det stiger blodsukkeret ukontrollert.',
      },
    },
    {
      id: 'bio1-5-4-def-4',
      type: 'definition',
      title: 'Diabetes mellitus type 1 og type 2',
      content: 'Diabetes mellitus er en sykdom der blodsukkeret er kronisk for hoyt. Type 1-diabetes er en autoimmun sykdom der immunforsvaret oedelegger betacellene i bukspyttkjertelen, slik at kroppen ikke kan produsere insulin. Behandling krever daglige insulininjeksjoner. Type 2-diabetes skyldes at cellene blir mindre folsomme for insulin (insulinresistens), ofte kombinert med redusert insulinproduksjon over tid. Risikofaktorer inkluderer overvekt, inaktivitet og arv. Behandling inkluderer livsstilsendringer og eventuelt medisiner.',
    },
    {
      id: 'bio1-5-4-diabetes-detalj',
      type: 'text',
      content: `## Diabetes – en voksende utfordring

Diabetes type 2 er en av de raskest voksende folkesykdommene i verden. I Norge har ca. 245 000 personer kjent diabetes (ca. 90% av disse har type 2). I tillegg antas det at mange har uoppdaget diabetes.

### Langtidskomplikasjoner ved diabetes

Kronisk hoyt blodsukker skader blodaarene over tid og kan foere til:

- **Hjerte- og karsykdom**: Oekt risiko for hjerteinfarkt og hjerneslag
- **Nyresykdom** (diabetisk nefropati): Skade paa nyrenes filtreringssystem
- **Oeyesykdom** (diabetisk retinopati): Skade paa blodaarene i netthinnen, kan gi blindhet
- **Nerveskade** (diabetisk nevropati): Nedsatt foelelse, spesielt i foettene
- **Saar som ikke gror**: Spesielt paa foettene, kan i verste fall foere til amputasjon

### Forebygging av type 2-diabetes

Livsstilsfaktorer spiller en stor rolle:
- Regelmessig fysisk aktivitet oeker insulinfolsomheten
- Sunt kosthold med jevnt karbohydratinntak
- Normalvekt reduserer risikoen betydelig
- Roykeslutt og begrenset alkoholinntak

Studier viser at moderate livsstilsendringer kan redusere risikoen for type 2-diabetes med opptil 58% hos personer i risikogruppen. Dette understreker betydningen av forebygging fremfor behandling.

### HbA1c – langtidsmaal for blodsukker

I klinisk praksis brukes HbA1c (glykosylert hemoglobin) for aa maale gjennomsnittlig blodsukkernivaa over de siste 2–3 maanedene. Normal HbA1c er under 6,0% (42 mmol/mol). Diabetikere bruker dette maalingen for aa vurdere hvor godt blodsukkeret er kontrollert over tid, i motsetning til enkeltmaalinger som bare viser oeyeblikksbildet.`,
    },
    {
      id: 'bio1-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign diabetes type 1 og type 2 med hensyn til: (a) aarsak, (b) typisk debut-alder, (c) insulinproduksjon, og (d) behandling.',
        hints: ['Type 1 er autoimmun, type 2 er knyttet til livsstil'],
        solution: '(a) Aarsak: Type 1 – autoimmun oedeleggelse av betaceller; Type 2 – insulinresistens, ofte knyttet til overvekt og inaktivitet. (b) Debutalder: Type 1 – oftest i barne- og ungdomsaar; Type 2 – oftest hos voksne (men oekende hos unge pga. overvekt). (c) Insulinproduksjon: Type 1 – ingen eller svært lite insulin; Type 2 – normal eller oekt i starten, men cellene reagerer ikke paa det. (d) Behandling: Type 1 – insulininjeksjoner livet ut; Type 2 – livsstilsendringer (kosthold, fysisk aktivitet), eventuelt tabletter eller insulin.',
      },
    },
    {
      id: 'bio1-5-4-summary',
      type: 'text',
      content: `## Oppsummering

Bade temperatur og blodsukker reguleres gjennom negativ tilbakekobling:

**Temperaturregulering:**
- Hypothalamus er kroppens termostat
- Respons paa kulde: vasokonstriksjon, skjelving, oekt stoffskifte
- Respons paa varme: vasodilatasjon, svetting, redusert stoffskifte
- Feber = hevet setpunkt; hypertermi = svikt i reguleringen

**Blodsukkerregulering:**
- Insulin (betaceller) senker blodsukkeret
- Glukagon (alfaceller) hever blodsukkeret
- De virker som antagonister gjennom negativ tilbakekobling
- Diabetes type 1: mangel paa insulin; type 2: insulinresistens
- Langtidskomplikasjoner ved diabetes: hjerte-karsykdom, nyresykdom, nerveskade, oeyesykdom

Forstaaelsen av disse reguleringsmekanismene er grunnleggende i medisin og biologi. Mange av de vanligste sykdommene i samfunnet – diabetes, hjerte-karsykdom, stoffskifteforstyrrelser – kan forstas som forstyrrelser i homeostatisk regulering.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Tegn en detaljert negativ tilbakekoblingssloyfe for blodsukkerregulering som viser bade hva som skjer naar blodsukkeret stiger (etter maaltid) og naar det synker (mellom maaltider). Inkluder sensor, kontrollsenter, effektor og setpunkt.',
        hints: ['Bukspyttkjertelen fungerer bade som sensor og kontrollsenter', 'Tegn to parallelle sloeyfer – en for insulin og en for glukagon'],
        solution: 'Setpunkt: Blodsukker ca. 5 mmol/L. SLOYFE 1 (etter maaltid): Blodsukker stiger over setpunkt → Sensor/kontrollsenter: Betaceller i bukspyttkjertelen registrerer hoyt blodsukker → Hormon: Insulin frigjores → Effektor: Lever- og muskelceller tar opp glukose, lagrer glykogen → Blodsukker synker mot normalt → Insulinsekresjonen avtar. SLOYFE 2 (mellom maaltider): Blodsukker synker under setpunkt → Sensor/kontrollsenter: Alfaceller i bukspyttkjertelen registrerer lavt blodsukker → Hormon: Glukagon frigjores → Effektor: Leveren bryter ned glykogen, frigjor glukose → Blodsukker stiger mot normalt → Glukagonsekresjonen avtar. Begge sloeyfer er negativ tilbakekobling fordi responsen motvirker den opprinnelige endringen.',
      },
    },
    {
      id: 'bio1-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom feber og hypertermi?',
        options: [
          { id: 'a', text: 'Ved feber er setpunktet hevet, ved hypertermi er reguleringen overbelastet', isCorrect: true },
          { id: 'b', text: 'Feber er farligere enn hypertermi', isCorrect: false },
          { id: 'c', text: 'Ved hypertermi er setpunktet hevet, ved feber er reguleringen overbelastet', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begge betyr det samme', isCorrect: false },
        ],
        solution: 'Ved feber hever pyrogener setpunktet i hypothalamus, saa kroppen aktivt prover aa oeke temperaturen som en forsvarsrespons. Reguleringssystemet fungerer normalt, bare med et hoeyere maal. Ved hypertermi er setpunktet uendret, men kroppen klarer ikke aa kvitte seg med nok varme (f.eks. heteslag), saa temperaturen stiger ukontrollert.',
      },
    },
    {
      id: 'bio1-5-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'En person med ubehandlet diabetes type 1 maaler blodsukkeret sitt til 18 mmol/L (normalt 4–6 mmol/L i faste). Forklar hvorfor blodsukkeret er saa hoyt, og beskriv minst tre symptomer denne personen kan oppleve.',
        hints: ['Ved type 1 produseres ikke insulin', 'Uten insulin kan ikke cellene ta opp glukose'],
        solution: 'Ved diabetes type 1 er betacellene oedelagt av immunforsvaret, saa kroppen produserer ikke insulin. Uten insulin kan ikke celler ta opp glukose fra blodet, selv om det er rikelig med glukose tilgjengelig. Derfor hoper glukose seg opp i blodet. Symptomer: (1) Hyppig vannlating (polyuri) – nyrene kan ikke reabsorbere all glukosen, og glukose drar med seg vann ut i urinen. (2) Tørste (polydipsi) – vaesketapet utloeser toerste. (3) Vekttap – cellene faar ikke glukose og maa i stedet bryte ned fett og protein for energi. (4) Trøtthet – cellene mangler energi. (5) Ketonlegemer i blodet (ketoacidose) – ved kraftig fettnedbrytning dannes syrer som kan vaere livstruende.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Termoregulering', definition: 'Kroppens evne til aa holde kjernetemperaturen stabil' },
    { term: 'Hypotermi', definition: 'Kjernetemperatur under 35 °C' },
    { term: 'Feber', definition: 'Hevet setpunkt i hypothalamus som forsvar mot infeksjon' },
    { term: 'Insulin', definition: 'Hormon fra betaceller som senker blodsukkeret' },
    { term: 'Glukagon', definition: 'Hormon fra alfaceller som hever blodsukkeret' },
    { term: 'Diabetes mellitus', definition: 'Sykdom med kronisk for hoyt blodsukker' },
    { term: 'Hypertermi', definition: 'Kjernetemperatur over 40 °C der reguleringen er overbelastet' },
    { term: 'Vasokonstriksjon', definition: 'Sammentrekning av blodaarer som reduserer varmetap' },
    { term: 'Vasodilatasjon', definition: 'Utvidelse av blodaarer som oeker varmetap' },
  ],
};

// ============================================================================
// Kapittel 5.5: Nyrene, vaeskebalanse og osmoregulering
// ============================================================================

export const CHAPTER_BIOLOGI_1_5_5: TextbookChapter = {
  id: 'biologi-1-5-5',
  courseId: 'biologi-1',
  chapterNumber: '5.5',
  title: 'Nyrene, vaeskebalanse og osmoregulering',
  description: 'Nyrenes oppbygning, ultrafiltrasjon, reabsorpsjon, og hormonell regulering av vaeske- og saltbalansen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive nyrenes oppbygning med nyrebekken, nefron og glomerulus',
    'forklare prosessene ultrafiltrasjon og reabsorpsjon',
    'gjore rede for ADH og aldosterons rolle i vaeskeregulering',
    'forklare sammenhengen mellom salt-vann-balanse og blodtrykksregulering',
  ],
  content: [
    {
      id: 'bio1-5-5-intro',
      type: 'text',
      content: `# Nyrene, vaeskebalanse og osmoregulering

Nyrene er kroppens viktigste organ for aa regulere vaeskebalansen og fjerne avfallsstoffer fra blodet. Hver dag filtrerer nyrene ca. 180 liter blodplasma, men bare ca. 1,5 liter skilles ut som urin. Resten reabsorberes tilbake til blodet. Denne presise reguleringen er avgjorende for homeostase.

## Nyrenes funksjoner

- **Filtrering**: Fjerner avfallsstoffer (urea, kreatinin, urinsyre) fra blodet
- **Vaeskebalanse**: Regulerer mengden vann i kroppen
- **Elektrolyttbalanse**: Regulerer konsentrasjonen av ioner ($\\text{Na}^+$, $\\text{K}^+$, $\\text{Ca}^{2+}$)
- **pH-regulering**: Skiller ut overskudd av $\\text{H}^+$-ioner
- **Blodtrykksregulering**: Paavirker blodvolum og kartonus
- **Hormonproduksjon**: Erytropoietin (EPO) stimulerer produksjon av roede blodceller

## Plassering og blodforsyning

Nyrene ligger i bakre del av bukhulen, en paa hver side av ryggraden. Til tross for at de bare utgjor ca. 0,5% av kroppsvekten, mottar nyrene ca. 20–25% av hjertets minuttvolum. Denne enorme blodtilfoerselen er noedvendig for filtreringsfunksjonen. Blodet tilfoeres via nyrearteriene (direkte fra aorta) og forlater via nyrevenene (til nedre hulvene).

## Osmoregulering

Osmoregulering er regulering av kroppens osmotiske trykk – konsentrasjonen av loeste stoffer i kroppen. Nyrene spiller hovedrollen ved aa justere mengden vann og salter som skilles ut eller holdes tilbake. Maalcellen er aa holde blodets osmolaritet paa ca. 300 mOsm/L. Hvis osmolariteten avviker, kan cellene enten svelle (for mye vann stroemmer inn ved osmose) eller krympe (vann stroemmer ut). Begge deler kan forstyrre cellenes funksjon alvorlig og i verste fall foere til celledoed.

Hjernen er spesielt saarbar for osmotiske forstyrrelser fordi den er omsluttet av kraniet og har lite plass til aa svelle. Rask endring i blodets osmolaritet (f.eks. ved for rask intravenoes vaesketilfoersel) kan gi hjerneoedem med potensielt dødelig utfall.`,
    },
    {
      id: 'bio1-5-5-def-1',
      type: 'definition',
      title: 'Nyrens oppbygning',
      content: 'Hver nyre er boennformet (ca. 12 cm lang) og bestaar av tre hoveddeler: (1) Nyrebarken (cortex) – det ytterste laget, inneholder glomeruli og deler av nefronene. (2) Nyremargen (medulla) – det indre laget, inneholder Henles sloeyfe og samleroor, organisert i pyramider. (3) Nyrebekkenet (pelvis) – samler opp urinen og leder den videre via urinlederen til urinblaeren. Nyrens funksjonelle enhet er nefronet – hvert nyre inneholder ca. 1 million nefroner.',
    },
    {
      id: 'bio1-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Nefronets oppbygning og funksjon',
      problem: 'Beskriv de ulike delene av et nefron og hva som skjer i hver del.',
      solution: `**Loesning:**

Et nefron bestaar av foelgende deler:

**1. Bowmans kapsel med glomerulus (i barken)**
- Glomerulus: Et noeste av kapillaerer der blodet filtreres
- Bowmans kapsel: Omgir glomerulus og samler opp filtratet
- Her skjer **ultrafiltrasjon**: vann, salter, glukose, aminosyrer og avfallsstoffer presses ut av blodet
- Store molekyler (proteiner) og blodceller holdes tilbake

**2. Proksimale tubulus (i barken)**
- Ca. 65% av filtratet reabsorberes her
- All glukose og aminosyrer tas tilbake til blodet
- Mye $\\text{Na}^+$, vann og bikarbonat reabsorberes

**3. Henles sloyfe (ned i margen og tilbake)**
- Nedadgaaende del: Gjennomtrengelig for vann, men ikke salter → vann reabsorberes
- Oppadgaaende del: Gjennomtrengelig for salter, men ikke vann → $\\text{Na}^+$ og $\\text{Cl}^-$ pumpes ut
- Skaper en konsentrasjonsgradient i nyremargen

**4. Distale tubulus og samlerør (i bark og marg)**
- Finjustering av vann- og saltbalanse
- Regulert av ADH (vann) og aldosteron (salt)
- Urinen samles og ledes til nyrebekkenet`,
    },
    {
      id: 'bio1-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er nyrens funksjonelle enhet?',
        options: [
          { id: 'a', text: 'Nefronet', isCorrect: true },
          { id: 'b', text: 'Glomerulus', isCorrect: false },
          { id: 'c', text: 'Nyrebekkenet', isCorrect: false },
          { id: 'd', text: 'Urinlederen', isCorrect: false },
        ],
        solution: 'Nefronet er nyrens funksjonelle enhet – den minste delen av nyren som kan utfoere alle nyrens funksjoner. Hvert nefron bestaar av glomerulus med Bowmans kapsel, proksimal tubulus, Henles sloyfe, distal tubulus og samleroor. Hver nyre har ca. 1 million nefroner.',
      },
    },
    {
      id: 'bio1-5-5-def-2',
      type: 'definition',
      title: 'Ultrafiltrasjon og reabsorpsjon',
      content: 'Ultrafiltrasjon er prosessen der blodplasma filtreres gjennom kapillaerveggene i glomerulus inn i Bowmans kapsel. Blodtrykket driver filtrasjonen, og filtratet inneholder vann, ioner, glukose, aminosyrer og avfallsstoffer – men ikke proteiner eller blodceller. Reabsorpsjon er prosessen der nyttige stoffer (glukose, aminosyrer, vann, salter) tas tilbake fra filtratet i tubulussystemet og foeres tilbake til blodet. Ca. 99% av filtratet reabsorberes – bare 1% blir til urin.',
    },
    {
      id: 'bio1-5-5-example-2',
      type: 'example',
      title: 'Eksempel: Mengder i nyrene',
      problem: 'Nyrene filtrerer ca. 180 liter per doegn, men vi produserer bare ca. 1,5 liter urin. Beregn (a) hvor stor andel av filtratet som reabsorberes, og (b) hvor mye som filtreres per minutt.',
      solution: `**Loesning:**

**(a) Andel reabsorbert:**
Filtrert: 180 L/doegn
Urin: 1,5 L/doegn
Reabsorbert: 180 - 1,5 = 178,5 L/doegn

Andel = $\\frac{178,5}{180} \\times 100\\% = 99,2\\%$

Altsaa reabsorberes over 99% av filtratet tilbake til blodet!

**(b) Filtrasjonsrate (GFR):**
$\\text{GFR} = \\frac{180 \\text{ L}}{24 \\text{ t} \\times 60 \\text{ min/t}} = \\frac{180}{1440} \\approx 0,125 \\text{ L/min} = 125 \\text{ mL/min}$

Den glomerulaere filtrasjonsraten (GFR) er ca. 125 mL/min. GFR brukes klinisk for aa vurdere nyrefunksjonen – en GFR under 60 mL/min over tid kan tyde paa nyresvikt.`,
    },
    {
      id: 'bio1-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'En pasient har glukose i urinen. Forklar hva dette kan tyde paa, og knytt det til nyrenes funksjon og blodsukkerregulering.',
        hints: ['Normalt reabsorberes all glukose i proksimale tubulus', 'Tenk paa hva som skjer naar blodsukkeret er svart hoyt'],
        solution: 'Normalt reabsorberer proksimale tubulus all glukose fra filtratet tilbake til blodet. Men glukose-transportoerene har en maksimumskapasitet (transportmaximum). Naar blodsukkeret er svart hoyt (over ca. 10 mmol/L), filtreres mer glukose enn transportoerene klarer aa ta tilbake, og overskuddet havner i urinen (glukosuri). Dette er et klassisk tegn paa diabetes mellitus. Glukosen i urinen trekker med seg ekstra vann (osmotisk effekt), noe som forklarer den oekte vannlatingen (polyuri) hos diabetikere.',
      },
    },
    {
      id: 'bio1-5-5-def-3',
      type: 'definition',
      title: 'ADH og aldosteron',
      content: 'ADH (antidiuretisk hormon, ogsa kalt vasopressin) produseres i hypothalamus og frigjores fra hypofysens baklapp. ADH oeker vannreabsorpsjonen i samleroorene ved aa gjore dem mer gjennomtrengelige for vann. Naar kroppen er dehydrert, oeker ADH-sekresjonen og urinen blir konsentrert. Aldosteron produseres i binyrebarken og stimulerer reabsorpsjon av $\\text{Na}^+$ (og dermed vann) i distale tubulus og samleroor. Aldosteron reguleres gjennom renin-angiotensin-aldosteron-systemet (RAAS) og er viktig for blodtrykksregulering.',
    },
    {
      id: 'bio1-5-5-example-3',
      type: 'example',
      title: 'Eksempel: ADH og vaeskebalanse',
      problem: 'Beskriv hva som skjer i kroppen naar du drikker svart lite vann paa en varm dag, og hvordan ADH regulerer vaeskebalansen.',
      solution: `**Loesning:**

Naar du drikker lite vann og svetter mye paa en varm dag:

**1. Deteksjon:**
- Blodets osmolaritet oeker (mer konsentrert)
- Osmoreseptorer i hypothalamus registrerer oekningen
- Blodvolumet synker, blodtrykket synker

**2. Respons:**
- Hypothalamus stimulerer frigjoring av ADH fra hypofysens baklapp
- ADH transporteres med blodet til nyrene

**3. Effekt i nyrene:**
- ADH gjor samleroorene mer gjennomtrengelige for vann
- Mer vann reabsorberes fra urinen tilbake til blodet
- Urinen blir mer konsentrert (moerkere og mindre volum)

**4. Resultat:**
- Blodets osmolaritet synker tilbake mot normalt
- Mindre vann tapes i urinen
- Toerstesenteret i hypothalamus aktiveres ogsa → du foeler toerste

**5. Negativ tilbakekobling:**
- Naar osmolariteten er normal igjen, reduseres ADH-sekresjonen
- Samleroorene blir mindre gjennomtrengelige → urinen blir mer fortynnet

Motsatt: Naar du drikker mye vann, synker ADH-nivaet og nyrene skiller ut mer fortynnet urin.

**Diabetes insipidus:**
Denne sjeldne tilstanden oppstaar naar kroppen ikke produserer nok ADH (sentral type) eller naar nyrene ikke reagerer paa ADH (nefrogen type). Uten ADH reabsorberer nyrene svart lite vann, og pasienten kan produsere opptil 20 liter fortynnet urin per doegn. Til tross for lignende navn har diabetes insipidus ingenting aa gjore med diabetes mellitus (blodsukker) – de deler bare symptomet med oekt vannlating.`,
    },
    {
      id: 'bio1-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er effekten av oekt ADH-sekresjon?',
        options: [
          { id: 'a', text: 'Mer vann reabsorberes og urinen blir mer konsentrert', isCorrect: true },
          { id: 'b', text: 'Mer vann skilles ut og urinen blir mer fortynnet', isCorrect: false },
          { id: 'c', text: 'Mer natrium skilles ut i urinen', isCorrect: false },
          { id: 'd', text: 'Blodtrykket synker', isCorrect: false },
        ],
        solution: 'ADH (antidiuretisk hormon) gjor samleroorene i nyrene mer gjennomtrengelige for vann. Mer vann reabsorberes fra urinen tilbake til blodet, slik at urinen blir konsentrert (moerk, litet volum) og blodvolumet oeker. \"Anti-diuretisk\" betyr bokstavelig \"mot vannlating\" – hormonet reduserer urinproduksjonen.',
      },
    },
    {
      id: 'bio1-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvordan aldosteron og renin-angiotensin-aldosteron-systemet (RAAS) bidrar til aa regulere blodtrykket naar det er for lavt.',
        hints: ['RAAS aktiveres naar blodtrykket synker', 'Aldosteron paavirker natriumreabsorpsjonen i nyrene'],
        solution: 'Naar blodtrykket synker: (1) Nyrene registrerer lavt blodtrykk og skiller ut enzymet renin. (2) Renin omdanner angiotensinogen (fra leveren) til angiotensin I. (3) ACE (angiotensin-converting enzyme, hovedsakelig i lungene) omdanner angiotensin I til angiotensin II. (4) Angiotensin II har to viktige effekter: det trekker sammen blodaarene (vasokonstriksjon → hoeyere blodtrykk) og stimulerer binyrebarken til aa produsere aldosteron. (5) Aldosteron oeker reabsorpsjon av $\\text{Na}^+$ i nyrenes tubuli. Vann foelger natriumet osmotisk, saa blodvolumet oeker → blodtrykket stiger. Naar blodtrykket er normalisert, reduseres renin-sekresjonen – negativ tilbakekobling.',
      },
    },
    {
      id: 'bio1-5-5-summary',
      type: 'text',
      content: `## Oppsummering

Nyrene er sentrale for vaeskebalanse, avfallsfjerning og blodtrykksregulering:

- **Nefronet** er nyrens funksjonelle enhet med glomerulus, tubuli og samleroor
- **Ultrafiltrasjon** i glomerulus filtrerer plasma; **reabsorpsjon** i tubuli tar tilbake nyttige stoffer
- Ca. 180 L filtreres daglig, men bare ca. 1,5 L skilles ut som urin
- **ADH** regulerer vannreabsorpsjon – oeker ved dehydrering, synker ved overhydrering
- **Aldosteron** og **RAAS** regulerer natrium- og vannbalanse, og dermed blodtrykket
- Nyrene samarbeider med hjerte-karsystemet og hormonsystemet for aa opprettholde homeostase

### Klinisk betydning

Nyresykdom er et alvorlig helseproblem. Kronisk nyresykdom (KNS) rammer ca. 10% av verdens befolkning og kan foere til behov for dialyse eller nyretransplantasjon. De vanligste aarsakene til kronisk nyresykdom er:

- **Diabetes**: Hoyt blodsukker skader glomeruli over tid
- **Hoyt blodtrykk**: Oeker belastningen paa nyrenes blodaarer
- **Glomerulonefritt**: Betennelse i glomeruli

GFR (glomerulær filtrasjonsrate) brukes for aa vurdere nyrefunksjon. Normal GFR er ca. 125 mL/min. Ved GFR under 15 mL/min (nyresvikt stadium 5) trenger pasienten vanligvis dialyse.

**Dialyse** er en kunstig erstatning for nyrefunksjonen der blodet filtreres gjennom en maskin (hemodialyse) eller gjennom bukhinnen (peritonealdialyse). Pasienten maa vanligvis til behandling 3 ganger per uke, og hver behandling tar ca. 4 timer. Nyretransplantasjon er den beste langsiktige loesningen for pasienter med alvorlig nyresvikt.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Alkohol hemmer utskillelsen av ADH fra hypofysen. Forklar hvilken effekt dette har paa urinproduksjonen og vaeskebalansen, og hvorfor man kan bli dehydrert av aa drikke alkohol.',
        hints: ['Hva skjer med vannreabsorpsjonen naar ADH-nivaet synker?'],
        solution: 'Naar alkohol hemmer ADH-utskillelsen, synker ADH-nivaet i blodet. Uten ADH blir samleroorene i nyrene mindre gjennomtrengelige for vann, saa mindre vann reabsorberes tilbake til blodet. Resultatet er stor produksjon av fortynnet urin (diurese). Man taper mer vaesker enn man tar inn, noe som foerer til dehydrering. Dette forklarer hvorfor man maa late vannet ofte etter aa ha drukket alkohol, og hvorfor man kan faa hodepine og toerste (symptomer paa dehydrering) dagen etter. Radet om aa drikke vann mellom alkoholholdige drikker er basert paa dette prinsippet.',
      },
    },
    {
      id: 'bio1-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilken prosess drives av blodtrykket i glomerulus?',
        options: [
          { id: 'a', text: 'Ultrafiltrasjon', isCorrect: true },
          { id: 'b', text: 'Reabsorpsjon', isCorrect: false },
          { id: 'c', text: 'Sekresjon', isCorrect: false },
          { id: 'd', text: 'Osmose', isCorrect: false },
        ],
        solution: 'Ultrafiltrasjon i glomerulus drives av det hoye blodtrykket i glomerulus-kapillærene. Trykket presser vann og smaa loeste stoffer (glukose, salter, avfallsstoffer) gjennom kapillaerveggene og inn i Bowmans kapsel, mens store molekyler (proteiner) og blodceller holdes tilbake. Reabsorpsjon skjer senere i tubulussystemet og drives av aktiv transport og osmose.',
      },
    },
    {
      id: 'bio1-5-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'En person spiser et svart salt maaltid. Beskriv trinn for trinn hva som skjer med vaeskebalansen og blodtrykket i timene etterpaa, og hvordan kroppen regulerer dette tilbake til normalt.',
        hints: ['Salt ($\\text{Na}^+$) oeker blodets osmolaritet', 'Tenk paa bade ADH, toerste og RAAS'],
        solution: 'Etter et salt maaltid: (1) $\\text{Na}^+$ absorberes fra tarmen og oeker blodets osmolaritet (blodkonsentrasjonen). (2) Osmoreseptorer i hypothalamus registrerer dette og stimulerer: (a) ADH-frigjoring → mer vann reabsorberes i nyrene, (b) Toerstefoelelse → personen drikker mer. (3) Oekt vanninntak og vannretensjon oeker blodvolumet → blodtrykket stiger. (4) Hoeyere blodtrykk og blodvolum hemmer RAAS-systemet: mindre renin → mindre angiotensin II → mindre aldosteron. (5) Uten aldosteron reabsorberer nyrene mindre $\\text{Na}^+$ og vann → mer natrium og vann skilles ut i urinen. (6) Blodvolumet og osmolariteten synker tilbake mot normalt → ADH-sekresjonen avtar, toersten forsvinner. Alt styres av negativ tilbakekobling.',
      },
    },
    {
      id: 'bio1-5-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-8',
        number: '8',
        type: 'multiple-choice',
        task: 'Hva er rollen til Henles sloyfe i nefronet?',
        options: [
          { id: 'a', text: 'Den skaper en konsentrasjonsgradient i nyremargen som gjor det mulig aa lage konsentrert urin', isCorrect: true },
          { id: 'b', text: 'Den filtrerer blodet ved ultrafiltrasjon', isCorrect: false },
          { id: 'c', text: 'Den produserer ADH', isCorrect: false },
          { id: 'd', text: 'Den fjerner proteiner fra urinen', isCorrect: false },
        ],
        solution: 'Henles sloyfe har en kritisk rolle: den skaper en konsentrasjonsgradient (oekende saltkonsentrasjon) i nyremargen. Den nedadgaaende delen slipper vann ut (men ikke salt), mens den oppadgaaende delen pumper salt ut (men holder paa vann). Denne gradienten gjor at samleroorene, naar de paavirkes av ADH, kan reabsorbere vann ved osmose og lage konsentrert urin. Uten Henles sloyfe kunne vi ikke lage urin som er mer konsentrert enn blodplasma. Dyr som lever i toerre omraader, som oerkenrotter, har svart lange Henles sloeyfer og kan derfor lage ekstremt konsentrert urin for aa spare vann.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Nefron', definition: 'Nyrens funksjonelle enhet som filtrerer blodet og danner urin' },
    { term: 'Glomerulus', definition: 'Kapillaernoeste i nefronet der ultrafiltrasjon skjer' },
    { term: 'Ultrafiltrasjon', definition: 'Trykkdrevet filtrering av blodplasma i glomerulus' },
    { term: 'Reabsorpsjon', definition: 'Tilbakefoering av nyttige stoffer fra filtratet til blodet' },
    { term: 'ADH', definition: 'Hormon som oeker vannreabsorpsjonen i nyrenes samleroor' },
    { term: 'Aldosteron', definition: 'Hormon som oeker natriumreabsorpsjonen i nyrene' },
    { term: 'RAAS', definition: 'Renin-angiotensin-aldosteron-systemet for blodtrykksregulering' },
    { term: 'Osmolaritet', definition: 'Konsentrasjonen av loeste stoffer i en loesning, maalt i mOsm/L' },
    { term: 'Henles sloyfe', definition: 'Del av nefronet som skaper konsentrasjonsgradient i nyremargen' },
    { term: 'GFR', definition: 'Glomerulær filtrasjonsrate – maal paa nyrenes filtreringskapasitet' },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const BIOLOGI_1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_5_1,
  CHAPTER_BIOLOGI_1_5_2,
  CHAPTER_BIOLOGI_1_5_3,
  CHAPTER_BIOLOGI_1_5_4,
  CHAPTER_BIOLOGI_1_5_5,
];
