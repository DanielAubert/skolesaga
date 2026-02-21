/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Del 5: Homeostase og regulering
 *
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 * Kapittel 5.1-5.5: Homeostase, nervesystemet, hormonsystemet,
 * temperatur- og blodsukkerregulering, nyrene og osmoregulering
 *
 * Kompetansemål: Eleven skal kunne gjøre rede for kroppens
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
    'gjøre rede for komponentene i et reguleringssystem: sensor, kontrollsenter, effektor',
  ],
  content: [
    {
      id: 'bio1-5-1-intro',
      type: 'text',
      content: `# Homeostase – kroppens indre balanse

Kroppen vår er et komplekst system som hele tiden må tilpasse seg endringer i omgivelsene. Enten vi løper i stekende sol eller sitter stille i kulden, må det indre miljøet holdes stabilt for at cellene skal fungere optimalt. Denne evnen til å opprettholde stabile indre forhold kalles homeostase.

## Hvorfor er homeostase viktig?

Cellene våre er avhengige av bestemte betingelser for å fungere:

- **Temperatur**: Enzymer fungerer best ved ca. 37 °C
- **pH**: Blodet må holdes mellom 7,35 og 7,45
- **Blodsukker**: Cellene trenger jevn tilgang på glukose
- **Væskebalanse**: Riktig konsentrasjon av salter og vann

Hvis disse forholdene avviker for mye fra det normale, kan det føre til alvorlig sykdom eller død. Homeostase er derfor en grunnleggende forutsetning for liv.

## Historisk bakgrunn

Begrepet homeostase ble først brukt av den amerikanske fysiologen Walter B. Cannon i 1926, men ideen stammer fra den franske fysiologen Claude Bernard som på 1800-tallet beskrev «le milieu intérieur» – det indre miljøet. Bernard forsto at cellene i kroppen lever i et indre miljø (blod og vevsvæsker) som må holdes stabilt, uavhengig av hva som skjer utenfor kroppen. Hans berømte utsagn var at «stabiliteten i det indre miljøet er betingelsen for et fritt og uavhengig liv» – en innsikt som fortsatt er grunnleggende i fysiologien.

## Dynamisk likevekt

Homeostase er ikke en statisk tilstand, men en dynamisk likevekt. Verdiene svinger hele tiden litt over og under setpunktet – dette er normalt. Reguleringsmekanismene jobber kontinuerlig for å holde svingningene innenfor akseptable grenser. Hvis reguleringsmekanismene svikter, kan svingningene bli så store at de truer helsen.`,
    },
    {
      id: 'bio1-5-1-def-1',
      type: 'definition',
      title: 'Homeostase',
      content: 'Homeostase (fra gresk homoios = lik, stasis = tilstand) er kroppens evne til å opprettholde et stabilt indre miljø til tross for endringer i ytre eller indre forhold. Det betyr ikke at forholdene er helt konstante, men at de svinger innenfor et smalt normalområde rundt et setpunkt.',
    },
    {
      id: 'bio1-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Kroppstemperatur som homeostase',
      problem: 'Normal kroppstemperatur er ca. 37 °C. Forklar hvorfor temperaturen ikke er eksakt 37,0 °C hele tiden, og hva som skjer når den avviker.',
      solution: `**Løsning:**

Kroppstemperaturen svinger normalt mellom ca. 36,1 °C og 37,2 °C gjennom døgnet. Den er lavest om morgenen og høyest om ettermiddagen. Dette er normalt og viser at homeostase handler om å holde verdier innenfor et **normalområde**, ikke på en fast verdi.

Når temperaturen stiger over setpunktet (f.eks. ved fysisk aktivitet):
- Blodårene i huden utvider seg (vasodilatasjon) → mer varme avgis
- Svettekjertlene aktiveres → fordampning kjøler kroppen

Når temperaturen synker under setpunktet (f.eks. i kulde):
- Blodårene i huden trekker seg sammen (vasokonstriksjon) → mindre varmetap
- Skjelving øker varmeproduksjonen i musklene

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
          { id: 'a', text: 'At kroppens indre miljø holdes stabilt innenfor et normalområde', isCorrect: true },
          { id: 'b', text: 'At alle verdier i kroppen er helt konstante til enhver tid', isCorrect: false },
          { id: 'c', text: 'At kroppen alltid har samme temperatur som omgivelsene', isCorrect: false },
          { id: 'd', text: 'At kroppen ikke påvirkes av ytre forhold', isCorrect: false },
        ],
        solution: 'Homeostase betyr at kroppen opprettholder et stabilt indre miljø. Verdiene er ikke helt konstante, men svinger rundt et setpunkt innenfor et smalt normalområde. Kroppen har aktive reguleringsmekanismer som korrigerer avvik.',
      },
    },
    {
      id: 'bio1-5-1-def-2',
      type: 'definition',
      title: 'Negativ tilbakekobling (feedback)',
      content: 'Negativ tilbakekobling er den viktigste reguleringsmekanismen i kroppen. Når en verdi avviker fra setpunktet, setter kroppen i gang tiltak som motvirker endringen og bringer verdien tilbake mot normalt. Navnet "negativ" viser til at responsen går i motsatt retning av avviket. De fleste homeostatiske prosesser bruker negativ tilbakekobling.',
    },
    {
      id: 'bio1-5-1-example-2',
      type: 'example',
      title: 'Eksempel: Negativ tilbakekobling ved blodsukkerregulering',
      problem: 'Forklar hvordan negativ tilbakekobling virker når blodsukkeret stiger etter et måltid.',
      solution: `**Løsning:**

Etter et måltid stiger blodsukkeret over setpunktet:

1. **Sensor**: Betaceller i bukspyttkjertelen registrerer økt blodsukker
2. **Kontrollsenter**: Betacellene fungerer også som kontrollsenter
3. **Respons**: Betacellene skiller ut hormonet insulin
4. **Effektor**: Insulin får celler (spesielt lever- og muskelceller) til å ta opp glukose fra blodet
5. **Resultat**: Blodsukkeret synker tilbake mot normalt

Dette er negativ tilbakekobling fordi responsen (senke blodsukker) går i **motsatt retning** av endringen (økt blodsukker). Når blodsukkeret når normalnivået, reduseres insulinutskillelsen – systemet regulerer seg selv.`,
    },
    {
      id: 'bio1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar med egne ord hva som er forskjellen mellom negativ og positiv tilbakekobling. Gi ett eksempel på hver.',
        hints: ['Tenk på hvilken retning responsen går i forhold til endringen'],
        solution: 'Negativ tilbakekobling motvirker endringen og bringer verdien tilbake mot setpunktet – dette stabiliserer systemet. Eksempel: Når kroppstemperaturen stiger, aktiveres svetting som senker temperaturen. Positiv tilbakekobling forsterker endringen – responsen går i samme retning som den opprinnelige endringen. Eksempel: Under fødsel forsterker oksytocin sammentrekningene i livmoren, som igjen utløser mer oksytocin, helt til barnet er født.',
      },
    },
    {
      id: 'bio1-5-1-def-3',
      type: 'definition',
      title: 'Reguleringssystemets komponenter',
      content: 'Et homeostatisk reguleringssystem består av fire hoveddeler: (1) Setpunkt – den ønskede verdien. (2) Sensor (reseptor) – registrerer den faktiske verdien og sender informasjon til kontrollsenteret. (3) Kontrollsenter – sammenligner faktisk verdi med setpunktet og sender signaler til effektoren. (4) Effektor – utfører responsen som korrigerer avviket. Eksempel: En termostat har et setpunkt (ønsket temperatur), en sensor (termometer), et kontrollsenter (termostaten) og en effektor (ovnen eller viften).',
    },
    {
      id: 'bio1-5-1-example-3',
      type: 'example',
      title: 'Eksempel: Positiv tilbakekobling ved foedsel',
      problem: 'Forklar hvordan positiv tilbakekobling virker under en fødsel, og hvorfor dette er hensiktsmessig.',
      solution: `**Løsning:**

Under fødsel trykker barnets hode mot livmorhalsen:

1. **Sensor**: Strekkreseptorer i livmorhalsen registrerer trykket
2. **Kontrollsenter**: Hypothalamus i hjernen mottar signalet
3. **Respons**: Hypothalamus får hypofysen til å skille ut oksytocin
4. **Effektor**: Oksytocin får livmormuskulaturen til å trekke seg kraftigere sammen
5. **Forsterkning**: Sterkere sammentrekninger presser barnet hardere mot livmorhalsen → enda mer oksytocin → enda sterkere sammentrekninger

Denne positive tilbakekoblingssløyfen fortsetter med økende intensitet til barnet er født. Da forsvinner trykket på livmorhalsen, og sløyfen brytes.

**Hvorfor hensiktsmessig?** Fødselen krever stadig sterkere sammentrekninger. Negativ tilbakekobling ville dempet prosessen, mens positiv tilbakekobling driver den fremover til mål.

**Andre eksempler på positiv tilbakekobling:**
- Blodkoagulering: Aktiverte koagulasjonsfaktorer forsterker aktiveringen av flere faktorer
- Modning av frukt: Etylen fra modnende frukt stimulerer nabo-frukt til å modnes raskere
- Nervesignal: Åpning av natriumkanaler under depolarisering stimulerer åpning av nabokanalene`,
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
        solution: 'Sensoren (reseptoren) registrerer den faktiske verdien av en variabel (f.eks. temperatur eller blodsukker) og sender denne informasjonen til kontrollsenteret. Kontrollsenteret sammenligner med setpunktet og sender signal til effektoren som utfører korrigeringen.',
      },
    },
    {
      id: 'bio1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Tegn og beskriv en negativ tilbakekoblingssløyfe for regulering av blodets pH. Blodets normale pH er mellom 7,35 og 7,45. Bruk begrepene sensor, kontrollsenter, effektor og setpunkt.',
        hints: ['Tenk på hva som skjer når pH synker (blodet blir for surt)', 'Pustehastigheten påvirker mengden CO₂ i blodet, som igjen påvirker pH'],
        solution: 'Setpunkt: pH mellom 7,35 og 7,45. Hvis pH synker under 7,35 (for surt): Sensor: Kjemoreseptorer i blodårene registrerer lav pH. Kontrollsenter: Respirasjonssenteret i hjernestammen øker pustesignaler. Effektor: Pustemusklene øker respirasjonsfrekvensen. Raskere pusting fjerner mer CO₂ fra blodet, noe som hever pH tilbake mot normalt. Når pH når normalområdet, reduseres pustesignalene – negativ tilbakekobling.',
      },
    },
    {
      id: 'bio1-5-1-summary',
      type: 'text',
      content: `## Oppsummering

Homeostase er kroppens evne til å opprettholde stabile indre forhold. De viktigste prinsippene er:

- **Setpunkt**: Den ønskede normalverdien for en variabel
- **Negativ tilbakekobling**: Motvirker endringer og bringer verdien tilbake mot setpunktet (vanligst)
- **Positiv tilbakekobling**: Forsterker endringer – brukes i spesielle situasjoner (fødsel, blodkoagulering)
- **Sensor → Kontrollsenter → Effektor**: Komponentene i reguleringssystemet

Nesten alle fysiologiske reguleringsmekanismer vi skal lære om i de neste kapitlene – nervesignaler, hormoner, temperaturregulering, blodsukker og væskebalanse – er eksempler på homeostase.

### Hva skjer når homeostase svikter?

Mange sykdommer kan forstas som svikt i homeostatisk regulering:

| Variabel | Normal | For lav | For høy |
|----------|--------|---------|----------|
| Temperatur | 37 °C | Hypotermi (< 35 °C) | Hypertermi (> 40 °C) |
| Blodsukker | 4–6 mmol/L | Hypoglykemi | Hyperglykemi (diabetes) |
| Blod-pH | 7,35–7,45 | Acidose | Alkalose |
| Kalsium | 2,2–2,6 mmol/L | Hypokalsemi (kramper) | Hyperkalsemi |

Jo lenger en verdi er utenfor normalområdet, desto alvorligere er konsekvensene. Kroppens reguleringsmekanismer har grenser – ved ekstreme påvirkninger kan de overbelastes.

Aldring svekker også kroppens evne til homeostase. Eldre mennesker har redusert kapasitet for temperaturregulering, væskeregulering og blodsukkerregulering, noe som gjør dem mer sårbare for ekstreme værforhold, dehydrering og metabolske forstyrrelser. Dette er en av grunnene til at eldre har økt risiko for heteslag om sommeren og hypotermi om vinteren.`,
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
        hints: ['Tenk på hva som registrerer temperaturen, hva som bestemmer hva som skal skje, og hva som faktisk endrer temperaturen'],
        solution: 'Termostat: Setpunkt = ønsket romtemperatur (f.eks. 22 °C). Sensor = termometeret i termostaten. Kontrollsenter = termostatens elektronikk som sammenligner målt temperatur med setpunktet. Effektor = ovnen (varmer) eller viften (kjøler). Kroppen: Setpunkt = ca. 37 °C. Sensor = temperaturreseptorer i huden og hypothalamus. Kontrollsenter = hypothalamus i hjernen. Effektor = blodårer i huden (vasodilatasjon/vasokonstriksjon), svettekjertler, skjelving. Begge bruker negativ tilbakekobling: avvik fra setpunkt utløser en respons som motvirker avviket.',
      },
    },
    {
      id: 'bio1-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilken påstand om positiv tilbakekobling er riktig?',
        options: [
          { id: 'a', text: 'Responsen forsterker den opprinnelige endringen', isCorrect: true },
          { id: 'b', text: 'Responsen motvirker den opprinnelige endringen', isCorrect: false },
          { id: 'c', text: 'Positiv tilbakekobling er den vanligste reguleringsmekanismen i kroppen', isCorrect: false },
          { id: 'd', text: 'Positiv tilbakekobling får alltid verdien tilbake til setpunktet', isCorrect: false },
        ],
        solution: 'Ved positiv tilbakekobling forsterker responsen den opprinnelige endringen – systemet beveger seg lenger bort fra utgangspunktet. Dette er sjeldnere i kroppen enn negativ tilbakekobling og brukes kun i spesielle situasjoner der en prosess må drives til fullføring (f.eks. fødsel, blodkoagulering).',
      },
    },
    {
      id: 'bio1-5-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar hvorfor det ville vært problematisk dersom kroppstemperaturen ble regulert av positiv tilbakekobling i stedet for negativ tilbakekobling.',
        hints: ['Tenk på hva som ville skjedd hvis en temperaturøkning utløste respons som økte temperaturen ytterligere'],
        solution: 'Med positiv tilbakekobling ville en liten temperaturøkning utløst en respons som økte temperaturen enda mer, som igjen ville forsterket responsen videre. Temperaturen ville raskt stige ukontrollert og kunne nå livstruende nivåer. På samme måte ville en liten temperatursenkning ført til stadig lavere temperatur. Systemet ville vært helt ustabilt. Negativ tilbakekobling er nødvendig fordi den motvirker avvik og holder temperaturen innenfor trygge grenser.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Homeostase', definition: 'Kroppens evne til å opprettholde stabilt indre miljø' },
    { term: 'Setpunkt', definition: 'Den ønskede normalverdien for en fysiologisk variabel' },
    { term: 'Negativ tilbakekobling', definition: 'Regulering der responsen motvirker den opprinnelige endringen' },
    { term: 'Positiv tilbakekobling', definition: 'Regulering der responsen forsterker den opprinnelige endringen' },
    { term: 'Sensor', definition: 'Komponenten som registrerer den faktiske verdien av en variabel' },
    { term: 'Effektor', definition: 'Komponenten som utfører korrigeringen' },
    { term: 'Kontrollsenter', definition: 'Sammenligner målt verdi med setpunktet og styrer effektoren' },
  ],
};

// ============================================================================
// Kapittel 5.2: Nervesystemet og signaloverføring
// ============================================================================

export const CHAPTER_BIOLOGI_1_5_2: TextbookChapter = {
  id: 'biologi-1-5-2',
  courseId: 'biologi-1',
  chapterNumber: '5.2',
  title: 'Nervesystemet og signaloverføring',
  description: 'Nerveceller, aksjonspotensial, synapser og organisering av nervesystemet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive oppbygningen av en nervecelle og forklare funksjonen til de ulike delene',
    'forklare hvordan et aksjonspotensial oppstår og ledes langs et akson',
    'gjøre rede for signaloverføring over en synapse',
    'gi en oversikt over sentralnervesystemet og det perifere nervesystemet',
  ],
  content: [
    {
      id: 'bio1-5-2-intro',
      type: 'text',
      content: `# Nervesystemet og signaloverføring

Nervesystemet er kroppens raske kommunikasjonssystem. Det gjør oss i stand til å sanse omgivelsene, tenke, føle og reagere på stimuli – alt på brøkdelen av et sekund. Mens hormonsystemet sender langsomme, langvarige signaler gjennom blodet, sender nervesystemet raske, presise elektriske signaler langs nerveceller.

## Oversikt over nervesystemet

Nervesystemet deles i to hoveddeler:

- **Sentralnervesystemet (SNS)**: Hjernen og ryggmargen – kroppens sentrale kontrollsenter
- **Det perifere nervesystemet (PNS)**: Alle nerver utenfor SNS som forbinder kroppen med hjernen og ryggmargen

Det perifere nervesystemet kan videre deles i:
- **Somatisk nervesystem**: Styrer viljestyrte bevegelser (skjelettmuskulatur)
- **Autonomt nervesystem**: Styrer ufrivillige funksjoner (hjerteslag, fordøyelse)
  - Sympatisk del: «Kamp eller flukt» – forbereder kroppen på aktivitet
  - Parasympatisk del: «Hvile og fordøy» – roer kroppen ned

## Nervevev

Nervevev består av to hovedtyper celler:
- **Nevroner**: De signalførende cellene (~100 milliarder i hjernen)
- **Gliaceller**: Støtteceller som beskytter, ernærer og isolerer nevronene (ca. 10 ganger så mange som nevroner)

Viktige gliaceller inkluderer:
- **Schwannske celler**: Danner myelinskjede i PNS
- **Oligodendrocytter**: Danner myelinskjede i SNS
- **Astrocytter**: Nærer nevroner og danner blod-hjerne-barrieren
- **Mikroglia**: Immunceller i nervesystemet

Til sammen utgjør nervevev det mest komplekse vevet i kroppen. Hjernen alene inneholder ca. 100 milliarder nevroner med over 100 billioner ($10^{14}$) synaptiske forbindelser – det er flere enn antall stjerner i Melkeveien.

Sykdommer som rammer gliaceller kan ha alvorlige konsekvenser:
- **Multippel sklerose (MS)**: Immunforsvaret angriper myelinskjeden → nedsatt signaloverføring
- **Glioblastom**: Kreft i gliaceller – den vanligste og mest aggressive hjernekrefttypen
- **Guillain-Barrés syndrom**: Immunforsvaret angriper myelinet i perifere nerver → muskelsvakhet`,
    },
    {
      id: 'bio1-5-2-def-1',
      type: 'definition',
      title: 'Nevron (nervecelle)',
      content: 'Et nevron er en spesialisert celle som kan motta, bearbeide og sende elektriske signaler. Et typisk nevron består av: (1) Cellekropp (soma) med cellekjerne og organeller, (2) Dendritter som mottar signaler fra andre celler, (3) Akson – en lang utløper som leder signalet videre, og (4) Aksonterminaler (synaptiske endeknapper) som overfører signalet til neste celle. Mange aksoner er dekket av en myelinskjede som øker signalhastigheten.',
    },
    {
      id: 'bio1-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Signalveien i en refleks',
      problem: 'Beskriv signalveien når du trekker hånden bort fra en varm plate, og identifiser de ulike typene nevroner som er involvert.',
      solution: `**Løsning:**

Når du berører en varm plate, skjer følgende:

1. **Sensoriske nevroner**: Varmereseptorer i huden aktiveres og sender elektriske signaler via sensoriske nevroner til ryggmargen
2. **Internevroner**: I ryggmargen mottar internevroner signalet og kobler det til motoriske nevroner
3. **Motoriske nevroner**: Sender signal fra ryggmargen til musklene i armen
4. **Effektor**: Musklene trekker hånden bort

Denne refleksbuen går via ryggmargen, IKKE via hjernen. Det er derfor reaksjonen er så rask (ca. 50 millisekunder). Signalet når hjernen først etterpå – da kjenner du smerten.

De tre typene nevroner:
- **Sensoriske (afferente)**: Fører signal FRA kroppen TIL SNS
- **Internevroner**: Kobler nevroner i SNS
- **Motoriske (efferente)**: Fører signal FRA SNS TIL effektorer`,
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
        solution: 'Dendrittene er korte, forgrenede utløpere fra cellekroppen som mottar signaler fra andre nevroner eller fra sansereseptorer. Signalet ledes deretter gjennom cellekroppen og videre langs aksonet til aksonterminalen, der det overføres til neste celle.',
      },
    },
    {
      id: 'bio1-5-2-def-2',
      type: 'definition',
      title: 'Aksjonspotensial',
      content: 'Et aksjonspotensial er en rask, kortvarig endring i spenningsforskjellen over cellemembranen i et nevron. I hvile er innsiden av nevronet negativt ladet (ca. $-70$ mV) sammenlignet med utsiden – dette kalles hvilemembranpotensialet. Når nevronet stimuleres tilstrekkelig, åpnes natriumkanaler og positive natriumioner ($\\text{Na}^+$) strømmer inn. Dette gir en rask depolarisering til ca. $+30$ mV. Deretter åpnes kaliumkanaler og $\\text{K}^+$ strømmer ut, slik at membranen repolariseres. Aksjonspotensialet følger «alt-eller-ingenting-prinsippet».',
    },
    {
      id: 'bio1-5-2-example-2',
      type: 'example',
      title: 'Eksempel: Aksjonspotensialets faser',
      problem: 'Beskriv de ulike fasene i et aksjonspotensial og forklar hva som skjer med ionestrømmer i hver fase.',
      solution: `**Løsning:**

Et aksjonspotensial har følgende faser:

**1. Hvile ($-70$ mV)**
- Na/K-pumpen opprettholder ulik ionefordeling
- Innsiden er negativ relativt til utsiden

**2. Depolarisering ($-70$ → $+30$ mV)**
- Et stimulus når terskelverdien (ca. $-55$ mV)
- Spenningsstyrte $\\text{Na}^+$-kanaler åpnes
- $\\text{Na}^+$ strømmer raskt inn i cellen
- Membranen blir positivt ladet (depolarisert)

**3. Repolarisering ($+30$ → $-70$ mV)**
- $\\text{Na}^+$-kanalene lukkes (inaktiveres)
- Spenningsstyrte $\\text{K}^+$-kanaler åpnes
- $\\text{K}^+$ strømmer ut av cellen
- Membranen blir negativ igjen

**4. Hyperpolarisering (litt under $-70$ mV)**
- $\\text{K}^+$-kanalene lukkes litt forsinket
- Membranen blir kort tid mer negativ enn hvile

**5. Tilbake til hvile**
- Na/K-pumpen gjenoppretter normal ionefordeling

Hele prosessen tar ca. 1–2 millisekunder.

**Viktig:** Under refraktærperioden (rett etter et aksjonspotensial) kan nevronet IKKE fyre et nytt signal. Dette sikrer at aksjonspotensialet bare beveger seg i en retning langs aksonet, og setter en øvre grense for signalfrekvensen (ca. 500–1000 Hz).`,
    },
    {
      id: 'bio1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva «alt-eller-ingenting-prinsippet» betyr for aksjonspotensial, og hvordan kroppen likevel kan skille mellom svake og sterke stimuli.',
        hints: ['Tenk på hva som skjer med frekvensen av aksjonspotensialer når stimulus øker'],
        solution: 'Alt-eller-ingenting-prinsippet betyr at et aksjonspotensial enten fyres fullt av (når terskelverdien nås) eller ikke i det hele tatt. Alle aksjonspotensialer i et nevron har samme styrke og varighet. Kroppen skiller mellom svake og sterke stimuli på to måter: (1) Sterkere stimuli gir høyere frekvens av aksjonspotensialer (flere signaler per sekund), og (2) Sterkere stimuli aktiverer flere nevroner samtidig. Slik koder nervesystemet signalstyrke uten å endre selve aksjonspotensialets amplitude.',
      },
    },
    {
      id: 'bio1-5-2-def-3',
      type: 'definition',
      title: 'Synapse',
      content: 'En synapse er koblingspunktet mellom to nevroner, eller mellom et nevron og en effektorcelle (f.eks. en muskelcelle). De fleste synapser er kjemiske: signalet overføres ved at nevrotransmittere frigjøres fra det presynaptiske nevronet, diffunderer over den synaptiske spalten, og binder til reseptorer på det postsynaptiske nevronet. Eksempler på nevrotransmittere er acetylkolin, dopamin, serotonin og noradrenalin.',
    },
    {
      id: 'bio1-5-2-example-3',
      type: 'example',
      title: 'Eksempel: Signaloverføring over en synapse',
      problem: 'Beskriv trinnvis hva som skjer når et nervesignal når enden av et akson og skal overføres til neste nevron.',
      solution: `**Løsning:**

Signaloverføring over en kjemisk synapse skjer i følgende trinn:

1. **Aksjonspotensial ankommer** aksonterminalen (presynaptisk ende)
2. **Kalsiumkanaler åpnes**: Spenningsstyrte $\\text{Ca}^{2+}$-kanaler åpnes, og kalsiumioner strømmer inn
3. **Vesikler fusjonerer**: $\\text{Ca}^{2+}$ får synaptiske vesikler (små blærer fylt med nevrotransmitter) til å smelte sammen med cellemembranen
4. **Eksocytose**: Nevrotransmittere frigjøres ut i den synaptiske spalten (ca. 20 nm bred)
5. **Binding**: Nevrotransmitterne binder til spesifikke reseptorer på det postsynaptiske nevronet
6. **Respons**: Ionkanaler åpnes i postsynaptisk membran – kan være eksitatorisk (depolarisering) eller inhibitorisk (hyperpolarisering)
7. **Avslutning**: Nevrotransmitterne fjernes ved enzymatisk nedbrytning, reopptak eller diffusjon

Hele prosessen tar ca. 0,5–1 millisekund.

**Viktige nevrotransmittere:**

| Nevrotransmitter | Hovedfunksjon | Klinisk relevans |
|-----------------|---------------|------------------|
| Acetylkolin | Muskelaktivering, læring | Mangel ved Alzheimers |
| Dopamin | Belønning, motorikk | Mangel ved Parkinsons |
| Serotonin | Humør, søvn, appetitt | Lav ved depresjon |
| Noradrenalin | Våkenhet, oppmerksomhet | Stressrespons |
| GABA | Hemming av nervesignal | Angstdempende medisiner |
| Glutamat | Aktivering, læring | Den vanligste eksitatoriske |`,
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
          { id: 'a', text: 'Den øker hastigheten på signaloverføring ved saltatorisk ledning', isCorrect: true },
          { id: 'b', text: 'Den produserer nevrotransmittere', isCorrect: false },
          { id: 'c', text: 'Den mottar signaler fra andre nevroner', isCorrect: false },
          { id: 'd', text: 'Den bryter ned nevrotransmittere i synapsespalten', isCorrect: false },
        ],
        solution: 'Myelinskjeden er et isolerende fettlag som omgir aksoner. Den gjør at aksjonspotensialet "hopper" fra en Ranviersk innsnøring til neste (saltatorisk ledning), noe som øker signalhastigheten dramatisk – fra ca. 1 m/s uten myelin til opptil 120 m/s med myelin. Sykdommer som rammer myelin (f.eks. multippel sklerose) gir derfor nedsatt nervefunksjon.',
      },
    },
    {
      id: 'bio1-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom det sympatiske og det parasympatiske nervesystemet. Gi eksempler på hvordan de påvirker hjertet, pupillene og fordøyelsen.',
        hints: ['Tenk på «kamp eller flukt» vs. «hvile og fordøy»'],
        solution: 'Det sympatiske nervesystemet aktiveres i stressituasjoner og forbereder kroppen på handling: hjertefrekvensen øker, pupillene utvider seg (mydriasis), og fordøyelsen hemmes. Det parasympatiske nervesystemet er aktivt i hvile og fremmer restitusjon: hjertefrekvensen senkes, pupillene trekker seg sammen (miose), og fordøyelsen stimuleres. De to systemene virker som motspillere (antagonister) og balanserer hverandre gjennom negativ tilbakekobling.',
      },
    },
    {
      id: 'bio1-5-2-summary',
      type: 'text',
      content: `## Oppsummering

Nervesystemet sørger for rask kommunikasjon i kroppen:

- **Nevroner** består av cellekropp, dendritter, akson og aksonterminaler
- **Aksjonspotensial**: Rask depolarisering/repolarisering som ledes langs aksonet
- **Synapser**: Koblingspunkter der nevrotransmittere overfører signalet kjemisk
- **SNS** (hjerne og ryggmarg) og **PNS** (perifere nerver) samarbeider
- **Sympatisk** og **parasympatisk** nervesystem balanserer kroppens funksjoner

Nervesystemet er avgjørende for homeostase fordi det gir raske justeringer av kroppens funksjoner.

### Tre typer nevroner

| Type | Retning | Funksjon | Eksempel |
|------|---------|----------|----------|
| Sensorisk (afferent) | Fra kropp til SNS | Formidler sanseinntrykk | Smertereseptor i huden |
| Interneuron | Innen SNS | Kobler nevroner, bearbeider info | I ryggmargen og hjernen |
| Motorisk (efferent) | Fra SNS til kropp | Styrer muskler og kjertler | Nerven til biceps |

De fleste nervebaner involverer alle tre typene. I en refleksbue går signalet fra sensorisk nevron via interneuron til motorisk nevron. I mer komplekse handlinger involveres mange internevroner i hjernen for bevisst bearbeiding.

Nervesystemet er også viktig for homeostase på en mer direkte måte: det autonome nervesystemet regulerer kontinuerlig hjertefrekvens, blodtrykk, pustefrekvens, fordøyelse og kroppstemperatur – alt uten at vi tenker bevisst over det.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Mange nervegifter og rusmidler virker på synapsen. Forklar hvordan en gift som hemmer nedbrytning av nevrotransmittere i synapsespalten vil påvirke signaloverføring.',
        hints: ['Tenk på hva som skjer når nevrotransmitteren forblir i synapsespalten lenger enn normalt'],
        solution: 'Hvis nedbrytningen av nevrotransmittere hemmes, vil nevrotransmitterne forbli i synapsespalten lenger og fortsette å stimulere det postsynaptiske nevronet. Dette gir forsterket og forlenget signaloverføring. Eksempel: Nervegassen sarin hemmer enzymet acetylkolinesterase som bryter ned acetylkolin. Resultatet er konstant stimulering av muskler, noe som fører til kramper og kan være dødelig. Lignende prinsipp brukes i medisinsk behandling: ved Alzheimers brukes kolinesterasehemmere for å øke acetylkolinnivået i hjernen og forbedre hukommelsen.',
      },
    },
    {
      id: 'bio1-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilken rekkefølge beskriver korrekt signaloverføringen i et nevron?',
        options: [
          { id: 'a', text: 'Dendritt → cellekropp → akson → aksonterminaler → synapse', isCorrect: true },
          { id: 'b', text: 'Akson → dendritt → cellekropp → synapse → aksonterminaler', isCorrect: false },
          { id: 'c', text: 'Synapse → aksonterminaler → akson → cellekropp → dendritt', isCorrect: false },
          { id: 'd', text: 'Cellekropp → dendritt → synapse → akson → aksonterminaler', isCorrect: false },
        ],
        solution: 'Signalet i et nevron går fra dendrittene (mottar signal) via cellekroppen og langs aksonet til aksonterminalen. Der frigjøres nevrotransmittere i synapsen for å overføre signalet til neste celle. Denne enveiskjøringen sikres blant annet av at vesiklene med nevrotransmittere kun finnes i aksonterminalen. I tillegg finnes reseptorene for nevrotransmitterne hovedsakelig på den postsynaptiske membranen, slik at signalet kun kan gå i en retning over synapsen.',
      },
    },
    {
      id: 'bio1-5-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-2-ex-7',
        number: '7',
        type: 'classic',
        task: 'Et myelinisert nevron leder signaler med 120 m/s, mens et umyelinisert nevron leder med 1 m/s. Hvor lang tid tar det for signalet å nå fra ryggmargen til tårne (avstand ca. 1 m) i hvert tilfelle?',
        hints: ['Bruk formelen $t = \\frac{d}{v}$'],
        solution: 'Myelinisert nevron: $t = \\frac{1 \\text{ m}}{120 \\text{ m/s}} \\approx 0,0083 \\text{ s} = 8,3 \\text{ ms}$. Umyelinisert nevron: $t = \\frac{1 \\text{ m}}{1 \\text{ m/s}} = 1 \\text{ s} = 1000 \\text{ ms}$. Forskjellen er enorm – myelinskjeden gjør signalet ca. 120 ganger raskere. Dette forklarer hvorfor sykdommer som multippel sklerose, der myelinet brytes ned, gir trege reflekser og nedsatt motorisk kontroll.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Nevron', definition: 'Nervecelle som kan motta, bearbeide og sende elektriske signaler' },
    { term: 'Aksjonspotensial', definition: 'Rask elektrisk impuls som ledes langs aksonet' },
    { term: 'Synapse', definition: 'Koblingspunkt mellom to nevroner der signalet overføres kjemisk' },
    { term: 'Nevrotransmitter', definition: 'Kjemisk signalstoff som overfører nervesignal over en synapse' },
    { term: 'Myelinskjede', definition: 'Isolerende fettlag rundt aksoner som øker signalhastigheten' },
    { term: 'Sentralnervesystemet', definition: 'Hjernen og ryggmargen' },
    { term: 'Det perifere nervesystemet', definition: 'Alle nerver utenfor hjernen og ryggmargen' },
    { term: 'Saltatorisk ledning', definition: 'Signaloverføring som hopper mellom Ranvierske innsnøringer langs myeliniserte aksoner' },
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
    'gjøre rede for samspillet mellom nervesystemet og hormonsystemet',
  ],
  content: [
    {
      id: 'bio1-5-3-intro',
      type: 'text',
      content: `# Hormonsystemet

Hormonsystemet (det endokrine systemet) er kroppens langsomme, men langvarige kommunikasjonssystem. Mens nervesystemet sender raske, presise signaler langs nerver, sender hormonsystemet kjemiske budbringere – hormoner – gjennom blodet. Hormonene når alle deler av kroppen, men påvirker bare celler som har riktig reseptor.

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

Hormoner virker etter nøkkel-og-laas-prinsippet: hormonet (nokkelen) passer bare til sin spesifikke reseptor (låsen). En målcelle må ha den rette reseptoren for aa reagere på hormonet. Antallet reseptorer på en celle kan reguleres opp eller ned avhengig av behov – dette kalles henholdsvis oppregulering og nedregulering.

Hormonkonsentrasjonen i blodet er typisk svart lav (nanomolar eller pikomolar), men effekten kan være stor fordi signalet forsterkes i flere trinn inne i cellen. Hormoner brytes ned over tid, så effekten avtar gradvis når sekresjonen opphører.

Hormoner kan ha ulike virkningsmonstre:
- **Endokrin**: Hormonet transporteres med blodet til fjerne målceller (klassisk hormonvirkning)
- **Parakrin**: Hormonet virker på naboceller uten aa gå via blodet (f.eks. veksthormoner i vev)
- **Autokrin**: Hormonet virker tilbake på cellen som produserte det (f.eks. i immunforsvaret)

Halveringstiden til hormoner i blodet varierer enormt: adrenalin har halveringstid på ca. 2 minutter, mens tyroksin har halveringstid på ca. 6–7 dager. Dette påvirker hvor raskt hormonets effekt starter og slutter, og hvor ofte det må doseres ved medisinsk behandling.`,
    },
    {
      id: 'bio1-5-3-def-1',
      type: 'definition',
      title: 'Hormon',
      content: 'Et hormon er et kjemisk signalstoff som produseres i endokrine kjertler (eller endokrine celler), transporteres med blodet, og påvirker målceller andre steder i kroppen. Hormonets virkning avhenger av at målcellen har den rette reseptoren. Selv svært smaa mengder hormon kan ha stor effekt fordi signalet forsterkes gjennom intracellulære signalkaskader.',
    },
    {
      id: 'bio1-5-3-example-1',
      type: 'example',
      title: 'Eksempel: De viktigste endokrine kjertlene',
      problem: 'Lag en oversikt over de viktigste endokrine kjertlene i kroppen, deres plassering og minst ett hormon de produserer.',
      solution: `**Loesning:**

| Kjertel | Plassering | Viktige hormoner |
|---------|-----------|-----------------|
| Hypothalamus | Hjernen | Frigjøringshormoner (styrer hypofysen) |
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
          { id: 'a', text: 'Hormoner transporteres med blodet og påvirker kun celler med riktig reseptor', isCorrect: true },
          { id: 'b', text: 'Hormoner virker bare på celler i nærheten av kjertelen som produserer dem', isCorrect: false },
          { id: 'c', text: 'Alle celler i kroppen reagerer på alle hormoner', isCorrect: false },
          { id: 'd', text: 'Hormoner overføres via nervene, ikke blodet', isCorrect: false },
        ],
        solution: 'Hormoner skilles ut i blodet og transporteres til hele kroppen, men bare celler med den spesifikke reseptoren for hormonet (målceller) påvirkes. Celler uten reseptoren ignorerer hormonet. Dette er likt et radiosignal som sendes ut bredt, men bare radioer innstilt på riktig frekvens fanger det opp.',
      },
    },
    {
      id: 'bio1-5-3-def-2',
      type: 'definition',
      title: 'Peptidhormoner og steroidhormoner',
      content: 'Hormoner deles i to hovedgrupper basert på kjemisk struktur: (1) Peptidhormoner er vannløselige hormoner laget av aminosyrer. De kan ikke passere cellemembranen og binder til reseptorer på celleoverflaten. Signalet overføres via intracellulære budbringere (second messengers). Eksempler: insulin, glukagon, ADH. (2) Steroidhormoner er fettløselige hormoner laget av kolesterol. De passerer fritt gjennom cellemembranen og binder til reseptorer inne i cellen, ofte i cellekjernen. Der påvirker de genekspresjon direkte. Eksempler: østrogen, testosteron, kortisol.',
    },
    {
      id: 'bio1-5-3-example-2',
      type: 'example',
      title: 'Eksempel: Virkningsmekanisme for peptidhormoner vs. steroidhormoner',
      problem: 'Sammenlign hvordan insulin (peptidhormon) og testosteron (steroidhormon) virker på målcellen.',
      solution: `**Loesning:**

**Insulin (peptidhormon):**
1. Insulin er vannløselig og kan IKKE passere cellemembranen
2. Binder til reseptor på celleoverflaten
3. Reseptoren aktiverer en intracellulær signalkaskade (second messengers)
4. Signalkaskaden utloeser raske effekter: glukostransportoerer flyttes til cellemembranen
5. Rask virkning (sekunder til minutter), kortvarig effekt

**Testosteron (steroidhormon):**
1. Testosteron er fettløselig og passerer fritt gjennom cellemembranen
2. Binder til reseptor inne i cellen (i cytoplasma eller cellekjernen)
3. Hormon-reseptor-komplekset binder til DNA
4. Påvirker genekspresjon – øker transkripsjonen av bestemte gener
5. Langsom virkning (timer til dager), men langvarig effekt (f.eks. muskelvekst)

**Hovedforskjell:** Peptidhormoner gir rask, kortvarig respons via second messengers på celleoverflaten. Steroidhormoner gir langsom, langvarig respons ved aa endre genekspresjon direkte.

**Klinisk relevans:** Denne forskjellen påvirker hvordan hormoner brukes medisinsk. Insulin (peptidhormon) må injiseres fordi det ville blitt brutt ned i fordøyelsessystemet. Steroidhormoner som p-piller (østrogen/progesteron) kan derimot tas som tabletter fordi de er stabile nok til aa overleve fordøyelsen og kan tas opp i tarmen.`,
    },
    {
      id: 'bio1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor steroidhormoner kan passere cellemembranen mens peptidhormoner ikke kan det. Knytt svaret til membranens oppbygning.',
        hints: ['Tenk på cellemembranen som et dobbelt lipidlag'],
        solution: 'Cellemembranen består av et dobbelt lag av fosfolipider med hydrofobt (fettløselig) indre. Steroidhormoner er laget av kolesterol og er fettløselige (hydrofobe), så de kan løse seg i det hydrofobe laget og passere fritt gjennom membranen. Peptidhormoner er laget av aminosyrer og er vannløselige (hydrofile), så de kan ikke passere det hydrofobe barriérelaget i membranen. Derfor må peptidhormoner binde til reseptorer på utsiden av cellen.',
      },
    },
    {
      id: 'bio1-5-3-def-3',
      type: 'definition',
      title: 'Hypothalamus–hypofyse-aksen',
      content: 'Hypothalamus er en del av hjernen som fungerer som bindeledd mellom nervesystemet og hormonsystemet. Den mottar nervesignaler fra hjernen og reagerer med aa skille ut frigjøringshormoner som styrer hypofysen. Hypofysen (den «overordnede kjertelen») skiller deretter ut hormoner som stimulerer andre endokrine kjertler i kroppen. Dette hierarkiske systemet gjør at hjernen kan styre hormonproduksjonen. Regulering skjer gjennom negativ tilbakekobling: når hormonnivået i blodet er høyt nok, hemmes frigjøringen fra hypothalamus og hypofysen.',
    },
    {
      id: 'bio1-5-3-example-3',
      type: 'example',
      title: 'Eksempel: Regulering av skjoldbruskkjertelen',
      problem: 'Beskriv den negative tilbakekoblingsloeyfen som regulerer tyroksinnivået i blodet via hypothalamus–hypofyse-aksen.',
      solution: `**Loesning:**

Regulering av tyroksin ($\\text{T}_4$) skjer i tre nivåer:

1. **Hypothalamus** registrerer lavt tyroksinnivåe i blodet
   → Skiller ut TRH (tyrotropinfrigjørende hormon)

2. **Hypofysen** mottar TRH
   → Skiller ut TSH (tyreoideastimulerende hormon) til blodet

3. **Skjoldbruskkjertelen** mottar TSH
   → Øker produksjonen av tyroksin ($\\text{T}_4$) og trijodtyronin ($\\text{T}_3$)

**Negativ tilbakekobling:**
Når $\\text{T}_4$-nivået i blodet er høyt nok:
- $\\text{T}_4$ hemmer frigjøringen av TRH fra hypothalamus
- $\\text{T}_4$ hemmer frigjøringen av TSH fra hypofysen
- Resultatet: Skjoldbruskkjertelen produserer mindre tyroksin

Slik holdes tyroksinnivået stabilt innenfor normalomraadet. Tyroksin er viktig for stoffskiftet, vekst og utvikling.

**Sykdommer knyttet til skjoldbruskkjertelen:**
- **Hypotyreose** (for lite tyroksin): Lavt stoffskifte, vektoekning, trøtthet, kuldefølsomhet. Vanlig aarsak: Hashimotos sykdom (autoimmun)
- **Hypertyreose** (for mye tyroksin): Hoyt stoffskifte, vekttap, hjertebank, varmeintolerance. Vanlig aarsak: Graves sykdom (autoimmun)

Begge tilstandene illustrerer hva som skjer når den negative tilbakekoblingen forstyrres.`,
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
          { id: 'a', text: 'Peptidhormoner binder til reseptorer på celleoverflaten, steroidhormoner virker inne i cellen', isCorrect: true },
          { id: 'b', text: 'Peptidhormoner virker langsommere enn steroidhormoner', isCorrect: false },
          { id: 'c', text: 'Steroidhormoner er laget av aminosyrer, peptidhormoner av kolesterol', isCorrect: false },
          { id: 'd', text: 'Peptidhormoner kan passere cellemembranen, steroidhormoner kan ikke', isCorrect: false },
        ],
        solution: 'Peptidhormoner er vannløselige og kan ikke passere den hydrofobe cellemembranen. De binder til reseptorer på celleoverflaten og virker via intracellulære budbringere (raskt). Steroidhormoner er fettløselige (laget av kolesterol), passerer cellemembranen og binder til reseptorer inne i cellen for aa påvirke genekspresjon (langsomt men langvarig).',
      },
    },
    {
      id: 'bio1-5-3-summary',
      type: 'text',
      content: `## Oppsummering

Hormonsystemet er kroppens langsomme, langvarige kommunikasjonssystem:

- **Hormoner** er kjemiske signalstoffer som transporteres med blodet
- **Peptidhormoner** (vannløselige) virker via reseptorer på celleoverflaten – rask, kortvarig
- **Steroidhormoner** (fettløselige) virker inne i cellen på genekspresjon – langsom, langvarig
- **Hypothalamus–hypofyse-aksen** er det overordnede kontrollsenteret
- **Negativ tilbakekobling** holder hormonnivaene stabile
- Nerve- og hormonsystemet samarbeider tett for aa opprettholde homeostase

### Samspill mellom nervesystemet og hormonsystemet

Nerve- og hormonsystemet er ikke isolerte – de påvirker hverandre kontinuerlig:

1. **Hypothalamus** er selve bindeleddet: den mottar nervesignaler og svarer med hormonproduksjon
2. **Binyremedulla** er i praksis en del av begge systemene: nervesignaler fra det sympatiske nervesystemet utloeser adrenalinproduksjon
3. **Nevroendokrine celler** i hjernen produserer hormoner som pavirker nervefunksjonen
4. Mange hormoner påvirker hjernen direkte – for eksempel påvirker østrogen og testosteron adferd og humor

Denne integrasjonen gjør at kroppen kan reagere både raskt (nervesystem) og langvarig (hormonsystem) på endringer i miljøet.

Et godt eksempel på dette samspillet er stressresponsen: Når du opplever fare, sender nervesystemet umiddelbart signaler til binyrene (via det sympatiske nervesystemet) som frigjør adrenalin innen sekunder. Samtidig aktiverer hypothalamus-hypofyse-binyre-aksen (HPA-aksen) og frigjør kortisol, som gir langvarig energimobilisering over timer. Slik får kroppen både en rask og en vedvarende respons på trusselen.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Adrenalin er et peptidhormon fra binyremargen som frigjøres når vi er stresset eller redd. Beskriv minst fire effekter adrenalin har på kroppen, og forklar hvordan disse effektene forbereder kroppen på «kamp eller flukt».',
        hints: ['Tenk på hva kroppen trenger når den må reagere raskt: energi, oksygen, blodtilforsel'],
        solution: 'Adrenalin har følgende effekter: (1) Øker hjertefrekvens og blodtrykk – mer blod pumpes til muskler. (2) Utvider luftveiene (bronkodilatasjon) – mer oksygen tas opp. (3) Øker nedbrytning av glykogen til glukose i leveren – mer energi tilgjengelig. (4) Hemmer fordøyelsen – blod omdirigeres fra tarm til muskler. (5) Utvider pupillene – bedre syn. (6) Øker svetteproduksjon – kjøling ved aktivitet. Alle disse effektene forbereder kroppen på rask fysisk handling, enten det er aa flykte eller forsvare seg.',
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
        task: 'En pasient har en svulst i hypofysen som gjør at den produserer for mye TSH. Forklar hvordan dette påvirker skjoldbruskkjertelen og nivået av tyroksin i blodet, og hvilke symptomer pasienten kan få.',
        hints: ['TSH stimulerer skjoldbruskkjertelen', 'For mye tyroksin øker stoffskiftet'],
        solution: 'For mye TSH fra hypofysen vil overstimulere skjoldbruskkjertelen, som produserer for mye tyroksin. Hoyt tyroksin gir hypertyreose (overaktiv skjoldbruskkjertel). Normalt ville høyt tyroksin hemme TSH gjennom negativ tilbakekobling, men siden svulsten produserer TSH ukontrollert, fungerer ikke denne reguleringen. Symptomer på for mye tyroksin: oekt stoffskifte, vekttap, hjertebank, uro/nervositet, svetting, varmeintolerance og skjelvinger.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Hormon', definition: 'Kjemisk signalstoff som transporteres med blodet til målceller' },
    { term: 'Endokrin kjertel', definition: 'Kjertel som skiller ut hormoner direkte i blodet' },
    { term: 'Peptidhormon', definition: 'Vannløselig hormon som virker via reseptorer på celleoverflaten' },
    { term: 'Steroidhormon', definition: 'Fettløselig hormon som virker på genekspresjon inne i cellen' },
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

I dette kapittelet skal vi se nærmere på to av kroppens viktigste homeostatiske reguleringsmekanismer: temperatur og blodsukker. Begge bruker negativ tilbakekobling og involverer samspill mellom nervesystemet og hormonsystemet.

## Hvorfor er presis regulering viktig?

- **Temperatur**: Enzymer fungerer optimalt ved ca. 37 °C. Ved for høy temperatur denaturerer de, ved for lav temperatur arbeider de for sakte
- **Blodsukker**: Cellene trenger jevn tilførsel av glukose som energikilde. For høyt blodsukker skader blodårene, for lavt blodsukker gir energisvikt i hjernen

Både temperatur og blodsukker reguleres gjennom negativ tilbakekobling med involvering av både nervesystemet og hormonsystemet. Vi skal nå gå i detalj på begge systemene og se på hva som skjer når reguleringen svikter.`,
    },
    {
      id: 'bio1-5-4-def-1',
      type: 'definition',
      title: 'Termoregulering',
      content: 'Termoregulering er kroppens evne til aa holde kjernetemperaturen stabil på ca. 37 °C. Hypothalamus i hjernen fungerer som kroppens termostat: den mottar informasjon fra temperaturreseptorer i huden (perifer temperatur) og i blodet (kjernetemperatur), og setter i gang tiltak for aa øke eller redusere varmeproduksjon og varmetap. Mennesker er homeoterme (varmblodige) – vi produserer egen varme gjennom stoffskiftet.',
    },
    {
      id: 'bio1-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Kroppens respons på kulde og varme',
      problem: 'Beskriv de fysiologiske responsene kroppen setter i gang når (a) kjernetemperaturen synker under 37 °C og (b) når den stiger over 37 °C.',
      solution: `**Løsning:**

**(a) Respons på kulde (temperatur under setpunkt):**

- **Vasokonstriksjon**: Blodårene i huden trekker seg sammen → mindre blod nær overflaten → redusert varmetap
- **Skjelving**: Ufrivillige muskelsammentrekninger som produserer varme
- **Gåsehud**: Hårene reiser seg (lite effektiv hos mennesker, men viktig hos pelsdyr)
- **Økt stoffskifte**: Tyroksin og adrenalin øker forbrenningen
- **Atferdsrespons**: Vi tar på oss klær, søker ly, beveger oss

**(b) Respons på varme (temperatur over setpunkt):**

- **Vasodilatasjon**: Blodårene i huden utvider seg → mer blod nær overflaten → økt varmetap ved stråling
- **Svetting**: Svettekjertlene produserer svette → fordampning kjøler huden
- **Redusert stoffskifte**: Mindre varmeproduksjon
- **Atferdsrespons**: Vi søker skygge, tar av klær, drikker kaldt

Begge responsene er eksempler på negativ tilbakekobling styrt av hypothalamus.

### Varmeproduksjon og varmetap

Kroppen produserer varme gjennom stoffskiftet (metabolsk varme). De viktigste kildene er:
- **Leveren**: Konstant metabolsk aktivitet
- **Skjelettmusklene**: Spesielt under aktivitet
- **Brun fettvev**: Viktig hos spedbarn, produserer varme direkte (termogenese uten skjelving)

Varmetap skjer gjennom fire fysiske mekanismer:
- **Stråling**: Varme avgis som infrarød stråling (ca. 60% av varmetapet)
- **Konveksjon**: Varme overføres til luft som strømmer forbi huden
- **Ledning**: Direkte varmeoverføring til kalde gjenstander
- **Fordampning**: Svette fordamper og forbruker varmeenergi

På en kald dag kan kroppen tape opptil 90% av varmen gjennom stråling. På en varm dag, eller under intens aktivitet, blir fordampning (svetting) den viktigste mekanismen for varmetap. Ved 100% luftfuktighet kan ikke svette fordampe effektivt, noe som gjør fuktig varme mye farligere enn tørr varme.`,
    },
    {
      id: 'bio1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva skjer med blodårene i huden når kroppstemperaturen stiger?',
        options: [
          { id: 'a', text: 'De utvider seg (vasodilatasjon) slik at mer varme avgis gjennom huden', isCorrect: true },
          { id: 'b', text: 'De trekker seg sammen (vasokonstriksjon) for å holde på varmen', isCorrect: false },
          { id: 'c', text: 'De påvirkes ikke av temperaturendringer', isCorrect: false },
          { id: 'd', text: 'De lukkes helt slik at huden blir blek', isCorrect: false },
        ],
        solution: 'Når kroppstemperaturen stiger, sender hypothalamus signaler som får blodårene i huden til å utvide seg (vasodilatasjon). Mer blod strømmer nær hudoverflaten, og varme stråler fra blodet til omgivelsene gjennom stråling og konveksjon. Dette er grunnen til at vi blir røde i ansiktet når vi er varme.',
      },
    },
    {
      id: 'bio1-5-4-def-2',
      type: 'definition',
      title: 'Hypotermi, hypertermi og feber',
      content: 'Hypotermi oppstår når kjernetemperaturen synker under 35 °C. Symptomer er skjelving, forvirring og til slutt organsvikt. Hypertermi oppstår når kjernetemperaturen stiger over 40 °C uten at setpunktet er endret (f.eks. heteslag). Feber skiller seg fra hypertermi ved at setpunktet i hypothalamus er hevet – kroppen «ønsker» høyere temperatur som forsvar mot infeksjon. Pyrogener (stoffer fra immunceller eller bakterier) hever setpunktet, slik at kroppen skjelver og produserer varme for å nå det nye, høyere setpunktet.',
    },
    {
      id: 'bio1-5-4-example-2',
      type: 'example',
      title: 'Eksempel: Feber vs. hypertermi',
      problem: 'Forklar den vesentlige forskjellen mellom feber og hypertermi, med tanke på hva som skjer med setpunktet i hypothalamus.',
      solution: `**Løsning:**

**Feber:**
- Setpunktet i hypothalamus HEVES (f.eks. fra 37 °C til 39 °C)
- Årsak: Pyrogener (f.eks. interleukin-1 fra immunceller) påvirker hypothalamus
- Kroppen «ønsker» høyere temperatur og setter i gang varmeøkning: skjelving, vasokonstriksjon
- Formål: Høyere temperatur hemmer vekst av bakterier og virus, og stimulerer immunforsvaret
- Når infeksjonen bekjempes, senkes setpunktet igjen → svetting for å avkjøle

**Hypertermi:**
- Setpunktet er UENDRET på 37 °C
- Årsak: Kroppen klarer ikke å kvitte seg med nok varme (f.eks. heteslag, varmt miljø)
- Kroppens kjølemekanismer er overbelastet
- Er potensielt farligere enn feber fordi det ikke er en kontrollert prosess

**Nøkkelforskjell:** Ved feber er reguleringssystemet intakt – setpunktet er bare flyttet. Ved hypertermi svikter selve reguleringen.

**Grader av hypotermi:**

| Grad | Kjernetemperatur | Symptomer |
|------|-----------------|-----------|
| Mild | 35–32 °C | Skjelving, forvirring, klossete bevegelser |
| Moderat | 32–28 °C | Skjelving opphører, alvorlig forvirring, søvnighet |
| Alvorlig | Under 28 °C | Bevisstløshet, hjerterytmeforstyrrelser, livsfare |

Ved alvorlig hypotermi kan hjertet gå i ventrikkelflimmer og stoppe. Førstehjelp: Unngå raske oppvarmingsmetoder – oppvarm pasienten langsomt og forsiktig.`,
    },
    {
      id: 'bio1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor en person med feber føler seg kald og skjelver i starten av en infeksjon, selv om kroppstemperaturen faktisk er høyere enn normalt.',
        hints: ['Tenk på hva som skjer med setpunktet'],
        solution: 'Når infeksjonen starter, hever pyrogener setpunktet i hypothalamus (f.eks. til 39 °C). Den faktiske kroppstemperaturen er fortsatt nær 37 °C, altså UNDER det nye setpunktet. Hypothalamus oppfatter dette som "for kaldt" og setter i gang varmeproduserende tiltak: skjelving, vasokonstriksjon og frysningsfølelse. Personen føler seg kald fordi kroppen aktivt prøver å heve temperaturen til det nye, høyere setpunktet – ikke fordi kroppstemperaturen faktisk er lav.',
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
      title: 'Eksempel: Blodsukkernivå gjennom en dag',
      problem: 'Beskriv hva som skjer med blodsukkeret, insulin og glukagon i følgende situasjoner: (a) etter et måltid, (b) mellom måltider, (c) under intens trening.',
      solution: `**Løsning:**

**(a) Etter et måltid (blodsukkeret stiger):**
- Glukose absorberes fra tarmen → blodsukkeret stiger
- Betaceller registrerer høyt blodsukker → insulin frigjøres
- Insulin stimulerer: celler tar opp glukose, leveren lagrer glykogen, fettceller lagrer fett
- Blodsukkeret synker tilbake til normalt → insulinsekresjonen avtar

**(b) Mellom måltider (blodsukkeret synker):**
- Blodsukkeret synker gradvis ettersom cellene bruker glukose
- Alfaceller registrerer lavt blodsukker → glukagon frigjøres
- Glukagon stimulerer leveren til å bryte ned glykogen til glukose (glykogenolyse)
- Blodsukkeret stiger tilbake til normalt → glukagonsekresjonen avtar

**(c) Under intens trening:**
- Musklene bruker mye glukose → blodsukkeret synker raskt
- Glukagon øker, insulin synker
- Leveren bryter ned glykogen og frigjør glukose
- Adrenalin forsterker effekten ved å mobilisere energilagre
- Ved langvarig trening øker også nedbrytning av fett (lipolyse)

**Hypoglykemi** (lavt blodsukker, under ca. 3,5 mmol/L) er farlig fordi hjernen er nesten helt avhengig av glukose som energikilde. Symptomer inkluderer svetting, skjelving, forvirring og i alvorlige tilfeller bevisstløshet. Diabetikere som tar for mye insulin kan oppleve hypoglykemi og må da raskt innta sukker.`,
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
        solution: 'Insulin, produsert av betaceller i bukspyttkjertelen, er det eneste hormonet som senker blodsukkeret. Det stimulerer celler til å ta opp glukose fra blodet og leveren til å lagre glukose som glykogen. Glukagon, adrenalin og kortisol hever alle blodsukkeret. Insulin er derfor et livsnødvendig hormon – uten det stiger blodsukkeret ukontrollert.',
      },
    },
    {
      id: 'bio1-5-4-def-4',
      type: 'definition',
      title: 'Diabetes mellitus type 1 og type 2',
      content: 'Diabetes mellitus er en sykdom der blodsukkeret er kronisk for høyt. Type 1-diabetes er en autoimmun sykdom der immunforsvaret ødelegger betacellene i bukspyttkjertelen, slik at kroppen ikke kan produsere insulin. Behandling krever daglige insulininjeksjoner. Type 2-diabetes skyldes at cellene blir mindre følsomme for insulin (insulinresistens), ofte kombinert med redusert insulinproduksjon over tid. Risikofaktorer inkluderer overvekt, inaktivitet og arv. Behandling inkluderer livsstilsendringer og eventuelt medisiner.',
    },
    {
      id: 'bio1-5-4-diabetes-detalj',
      type: 'text',
      content: `## Diabetes – en voksende utfordring

Diabetes type 2 er en av de raskest voksende folkesykdommene i verden. I Norge har ca. 245 000 personer kjent diabetes (ca. 90% av disse har type 2). I tillegg antas det at mange har uoppdaget diabetes.

### Langtidskomplikasjoner ved diabetes

Kronisk høyt blodsukker skader blodårene over tid og kan føre til:

- **Hjerte- og karsykdom**: Økt risiko for hjerteinfarkt og hjerneslag
- **Nyresykdom** (diabetisk nefropati): Skade på nyrenes filtreringssystem
- **Øyesykdom** (diabetisk retinopati): Skade på blodårene i netthinnen, kan gi blindhet
- **Nerveskade** (diabetisk nevropati): Nedsatt følelse, spesielt i føttene
- **Sår som ikke gror**: Spesielt på føttene, kan i verste fall føre til amputasjon

### Forebygging av type 2-diabetes

Livsstilsfaktorer spiller en stor rolle:
- Regelmessig fysisk aktivitet øker insulinfølsomheten
- Sunt kosthold med jevnt karbohydratinntak
- Normalvekt reduserer risikoen betydelig
- Røykeslutt og begrenset alkoholinntak

Studier viser at moderate livsstilsendringer kan redusere risikoen for type 2-diabetes med opptil 58% hos personer i risikogruppen. Dette understreker betydningen av forebygging fremfor behandling.

### HbA1c – langtidsmål for blodsukker

I klinisk praksis brukes HbA1c (glykosylert hemoglobin) for å måle gjennomsnittlig blodsukkernivå over de siste 2–3 månedene. Normal HbA1c er under 6,0% (42 mmol/mol). Diabetikere bruker dette målingen for å vurdere hvor godt blodsukkeret er kontrollert over tid, i motsetning til enkeltmålinger som bare viser øyeblikksbildet.`,
    },
    {
      id: 'bio1-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign diabetes type 1 og type 2 med hensyn til: (a) årsak, (b) typisk debut-alder, (c) insulinproduksjon, og (d) behandling.',
        hints: ['Type 1 er autoimmun, type 2 er knyttet til livsstil'],
        solution: '(a) Årsak: Type 1 – autoimmun ødeleggelse av betaceller; Type 2 – insulinresistens, ofte knyttet til overvekt og inaktivitet. (b) Debutalder: Type 1 – oftest i barne- og ungdomsår; Type 2 – oftest hos voksne (men økende hos unge pga. overvekt). (c) Insulinproduksjon: Type 1 – ingen eller svært lite insulin; Type 2 – normal eller økt i starten, men cellene reagerer ikke på det. (d) Behandling: Type 1 – insulininjeksjoner livet ut; Type 2 – livsstilsendringer (kosthold, fysisk aktivitet), eventuelt tabletter eller insulin.',
      },
    },
    {
      id: 'bio1-5-4-summary',
      type: 'text',
      content: `## Oppsummering

Både temperatur og blodsukker reguleres gjennom negativ tilbakekobling:

**Temperaturregulering:**
- Hypothalamus er kroppens termostat
- Respons på kulde: vasokonstriksjon, skjelving, økt stoffskifte
- Respons på varme: vasodilatasjon, svetting, redusert stoffskifte
- Feber = hevet setpunkt; hypertermi = svikt i reguleringen

**Blodsukkerregulering:**
- Insulin (betaceller) senker blodsukkeret
- Glukagon (alfaceller) hever blodsukkeret
- De virker som antagonister gjennom negativ tilbakekobling
- Diabetes type 1: mangel på insulin; type 2: insulinresistens
- Langtidskomplikasjoner ved diabetes: hjerte-karsykdom, nyresykdom, nerveskade, øyesykdom

Forståelsen av disse reguleringsmekanismene er grunnleggende i medisin og biologi. Mange av de vanligste sykdommene i samfunnet – diabetes, hjerte-karsykdom, stoffskifteforstyrrelser – kan forstås som forstyrrelser i homeostatisk regulering.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Tegn en detaljert negativ tilbakekoblingssløyfe for blodsukkerregulering som viser både hva som skjer når blodsukkeret stiger (etter måltid) og når det synker (mellom måltider). Inkluder sensor, kontrollsenter, effektor og setpunkt.',
        hints: ['Bukspyttkjertelen fungerer både som sensor og kontrollsenter', 'Tegn to parallelle sløyfer – en for insulin og en for glukagon'],
        solution: 'Setpunkt: Blodsukker ca. 5 mmol/L. SLØYFE 1 (etter måltid): Blodsukker stiger over setpunkt → Sensor/kontrollsenter: Betaceller i bukspyttkjertelen registrerer høyt blodsukker → Hormon: Insulin frigjøres → Effektor: Lever- og muskelceller tar opp glukose, lagrer glykogen → Blodsukker synker mot normalt → Insulinsekresjonen avtar. SLØYFE 2 (mellom måltider): Blodsukker synker under setpunkt → Sensor/kontrollsenter: Alfaceller i bukspyttkjertelen registrerer lavt blodsukker → Hormon: Glukagon frigjøres → Effektor: Leveren bryter ned glykogen, frigjør glukose → Blodsukker stiger mot normalt → Glukagonsekresjonen avtar. Begge sløyfer er negativ tilbakekobling fordi responsen motvirker den opprinnelige endringen.',
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
        solution: 'Ved feber hever pyrogener setpunktet i hypothalamus, så kroppen aktivt prøver å øke temperaturen som en forsvarsrespons. Reguleringssystemet fungerer normalt, bare med et høyere mål. Ved hypertermi er setpunktet uendret, men kroppen klarer ikke å kvitte seg med nok varme (f.eks. heteslag), så temperaturen stiger ukontrollert.',
      },
    },
    {
      id: 'bio1-5-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'En person med ubehandlet diabetes type 1 måler blodsukkeret sitt til 18 mmol/L (normalt 4–6 mmol/L i faste). Forklar hvorfor blodsukkeret er så høyt, og beskriv minst tre symptomer denne personen kan oppleve.',
        hints: ['Ved type 1 produseres ikke insulin', 'Uten insulin kan ikke cellene ta opp glukose'],
        solution: 'Ved diabetes type 1 er betacellene ødelagt av immunforsvaret, så kroppen produserer ikke insulin. Uten insulin kan ikke celler ta opp glukose fra blodet, selv om det er rikelig med glukose tilgjengelig. Derfor hoper glukose seg opp i blodet. Symptomer: (1) Hyppig vannlating (polyuri) – nyrene kan ikke reabsorbere all glukosen, og glukose drar med seg vann ut i urinen. (2) Tørste (polydipsi) – væsketapet utløser tørste. (3) Vekttap – cellene får ikke glukose og må i stedet bryte ned fett og protein for energi. (4) Trøtthet – cellene mangler energi. (5) Ketonlegemer i blodet (ketoacidose) – ved kraftig fettnedbrytning dannes syrer som kan være livstruende.',
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
    { term: 'Diabetes mellitus', definition: 'Sykdom med kronisk for høyt blodsukker' },
    { term: 'Hypertermi', definition: 'Kjernetemperatur over 40 °C der reguleringen er overbelastet' },
    { term: 'Vasokonstriksjon', definition: 'Sammentrekning av blodårer som reduserer varmetap' },
    { term: 'Vasodilatasjon', definition: 'Utvidelse av blodårer som øker varmetap' },
  ],
};

// ============================================================================
// Kapittel 5.5: Nyrene, vaeskebalanse og osmoregulering
// ============================================================================

export const CHAPTER_BIOLOGI_1_5_5: TextbookChapter = {
  id: 'biologi-1-5-5',
  courseId: 'biologi-1',
  chapterNumber: '5.5',
  title: 'Nyrene, væskebalanse og osmoregulering',
  description: 'Nyrenes oppbygning, ultrafiltrasjon, reabsorpsjon, og hormonell regulering av væske- og saltbalansen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive nyrenes oppbygning med nyrebekken, nefron og glomerulus',
    'forklare prosessene ultrafiltrasjon og reabsorpsjon',
    'gjøre rede for ADH og aldosterons rolle i væskeregulering',
    'forklare sammenhengen mellom salt-vann-balanse og blodtrykksregulering',
  ],
  content: [
    {
      id: 'bio1-5-5-intro',
      type: 'text',
      content: `# Nyrene, væskebalanse og osmoregulering

Nyrene er kroppens viktigste organ for å regulere væskebalansen og fjerne avfallsstoffer fra blodet. Hver dag filtrerer nyrene ca. 180 liter blodplasma, men bare ca. 1,5 liter skilles ut som urin. Resten reabsorberes tilbake til blodet. Denne presise reguleringen er avgjørende for homeostase.

## Nyrenes funksjoner

- **Filtrering**: Fjerner avfallsstoffer (urea, kreatinin, urinsyre) fra blodet
- **Væskebalanse**: Regulerer mengden vann i kroppen
- **Elektrolyttbalanse**: Regulerer konsentrasjonen av ioner ($\\text{Na}^+$, $\\text{K}^+$, $\\text{Ca}^{2+}$)
- **pH-regulering**: Skiller ut overskudd av $\\text{H}^+$-ioner
- **Blodtrykksregulering**: Påvirker blodvolum og kartonus
- **Hormonproduksjon**: Erytropoietin (EPO) stimulerer produksjon av røde blodceller

## Plassering og blodforsyning

Nyrene ligger i bakre del av bukhulen, en på hver side av ryggraden. Til tross for at de bare utgjør ca. 0,5% av kroppsvekten, mottar nyrene ca. 20–25% av hjertets minuttvolum. Denne enorme blodtilførselen er nødvendig for filtreringsfunksjonen. Blodet tilføres via nyrearteriene (direkte fra aorta) og forlater via nyrevenene (til nedre hulvene).

## Osmoregulering

Osmoregulering er regulering av kroppens osmotiske trykk – konsentrasjonen av løste stoffer i kroppen. Nyrene spiller hovedrollen ved å justere mengden vann og salter som skilles ut eller holdes tilbake. Målcellen er å holde blodets osmolaritet på ca. 300 mOsm/L. Hvis osmolariteten avviker, kan cellene enten svelle (for mye vann strømmer inn ved osmose) eller krympe (vann strømmer ut). Begge deler kan forstyrre cellenes funksjon alvorlig og i verste fall føre til celledød.

Hjernen er spesielt sårbar for osmotiske forstyrrelser fordi den er omsluttet av kraniet og har lite plass til å svelle. Rask endring i blodets osmolaritet (f.eks. ved for rask intravenøs væsketilførsel) kan gi hjerneødem med potensielt dødelig utfall.`,
    },
    {
      id: 'bio1-5-5-def-1',
      type: 'definition',
      title: 'Nyrens oppbygning',
      content: 'Hver nyre er bønneformet (ca. 12 cm lang) og består av tre hoveddeler: (1) Nyrebarken (cortex) – det ytterste laget, inneholder glomeruli og deler av nefronene. (2) Nyremargen (medulla) – det indre laget, inneholder Henles sløyfe og samlerør, organisert i pyramider. (3) Nyrebekkenet (pelvis) – samler opp urinen og leder den videre via urinlederen til urinblæren. Nyrens funksjonelle enhet er nefronet – hvert nyre inneholder ca. 1 million nefroner.',
    },
    {
      id: 'bio1-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Nefronets oppbygning og funksjon',
      problem: 'Beskriv de ulike delene av et nefron og hva som skjer i hver del.',
      solution: `**Løsning:**

Et nefron består av følgende deler:

**1. Bowmans kapsel med glomerulus (i barken)**
- Glomerulus: Et nøste av kapillærer der blodet filtreres
- Bowmans kapsel: Omgir glomerulus og samler opp filtratet
- Her skjer **ultrafiltrasjon**: vann, salter, glukose, aminosyrer og avfallsstoffer presses ut av blodet
- Store molekyler (proteiner) og blodceller holdes tilbake

**2. Proksimale tubulus (i barken)**
- Ca. 65% av filtratet reabsorberes her
- All glukose og aminosyrer tas tilbake til blodet
- Mye $\\text{Na}^+$, vann og bikarbonat reabsorberes

**3. Henles sløyfe (ned i margen og tilbake)**
- Nedadgående del: Gjennomtrengelig for vann, men ikke salter → vann reabsorberes
- Oppadgående del: Gjennomtrengelig for salter, men ikke vann → $\\text{Na}^+$ og $\\text{Cl}^-$ pumpes ut
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
        solution: 'Nefronet er nyrens funksjonelle enhet – den minste delen av nyren som kan utføre alle nyrens funksjoner. Hvert nefron består av glomerulus med Bowmans kapsel, proksimal tubulus, Henles sløyfe, distal tubulus og samlerør. Hver nyre har ca. 1 million nefroner.',
      },
    },
    {
      id: 'bio1-5-5-def-2',
      type: 'definition',
      title: 'Ultrafiltrasjon og reabsorpsjon',
      content: 'Ultrafiltrasjon er prosessen der blodplasma filtreres gjennom kapillærveggene i glomerulus inn i Bowmans kapsel. Blodtrykket driver filtrasjonen, og filtratet inneholder vann, ioner, glukose, aminosyrer og avfallsstoffer – men ikke proteiner eller blodceller. Reabsorpsjon er prosessen der nyttige stoffer (glukose, aminosyrer, vann, salter) tas tilbake fra filtratet i tubulussystemet og føres tilbake til blodet. Ca. 99% av filtratet reabsorberes – bare 1% blir til urin.',
    },
    {
      id: 'bio1-5-5-example-2',
      type: 'example',
      title: 'Eksempel: Mengder i nyrene',
      problem: 'Nyrene filtrerer ca. 180 liter per døgn, men vi produserer bare ca. 1,5 liter urin. Beregn (a) hvor stor andel av filtratet som reabsorberes, og (b) hvor mye som filtreres per minutt.',
      solution: `**Løsning:**

**(a) Andel reabsorbert:**
Filtrert: 180 L/døgn
Urin: 1,5 L/døgn
Reabsorbert: 180 - 1,5 = 178,5 L/døgn

Andel = $\\frac{178,5}{180} \\times 100\\% = 99,2\\%$

Altså reabsorberes over 99% av filtratet tilbake til blodet!

**(b) Filtrasjonsrate (GFR):**
$\\text{GFR} = \\frac{180 \\text{ L}}{24 \\text{ t} \\times 60 \\text{ min/t}} = \\frac{180}{1440} \\approx 0,125 \\text{ L/min} = 125 \\text{ mL/min}$

Den glomerulære filtrasjonsraten (GFR) er ca. 125 mL/min. GFR brukes klinisk for å vurdere nyrefunksjonen – en GFR under 60 mL/min over tid kan tyde på nyresvikt.`,
    },
    {
      id: 'bio1-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'En pasient har glukose i urinen. Forklar hva dette kan tyde på, og knytt det til nyrenes funksjon og blodsukkerregulering.',
        hints: ['Normalt reabsorberes all glukose i proksimale tubulus', 'Tenk på hva som skjer når blodsukkeret er svært høyt'],
        solution: 'Normalt reabsorberer proksimale tubulus all glukose fra filtratet tilbake til blodet. Men glukose-transportørene har en maksimumskapasitet (transportmaximum). Når blodsukkeret er svært høyt (over ca. 10 mmol/L), filtreres mer glukose enn transportørene klarer å ta tilbake, og overskuddet havner i urinen (glukosuri). Dette er et klassisk tegn på diabetes mellitus. Glukosen i urinen trekker med seg ekstra vann (osmotisk effekt), noe som forklarer den økte vannlatingen (polyuri) hos diabetikere.',
      },
    },
    {
      id: 'bio1-5-5-def-3',
      type: 'definition',
      title: 'ADH og aldosteron',
      content: 'ADH (antidiuretisk hormon, også kalt vasopressin) produseres i hypothalamus og frigjøres fra hypofysens baklapp. ADH øker vannreabsorpsjonen i samlerørene ved å gjøre dem mer gjennomtrengelige for vann. Når kroppen er dehydrert, øker ADH-sekresjonen og urinen blir konsentrert. Aldosteron produseres i binyrebarken og stimulerer reabsorpsjon av $\\text{Na}^+$ (og dermed vann) i distale tubulus og samlerør. Aldosteron reguleres gjennom renin-angiotensin-aldosteron-systemet (RAAS) og er viktig for blodtrykksregulering.',
    },
    {
      id: 'bio1-5-5-example-3',
      type: 'example',
      title: 'Eksempel: ADH og væskebalanse',
      problem: 'Beskriv hva som skjer i kroppen når du drikker svært lite vann på en varm dag, og hvordan ADH regulerer væskebalansen.',
      solution: `**Løsning:**

Når du drikker lite vann og svetter mye på en varm dag:

**1. Deteksjon:**
- Blodets osmolaritet øker (mer konsentrert)
- Osmoreseptorer i hypothalamus registrerer økningen
- Blodvolumet synker, blodtrykket synker

**2. Respons:**
- Hypothalamus stimulerer frigjøring av ADH fra hypofysens baklapp
- ADH transporteres med blodet til nyrene

**3. Effekt i nyrene:**
- ADH gjør samlerørene mer gjennomtrengelige for vann
- Mer vann reabsorberes fra urinen tilbake til blodet
- Urinen blir mer konsentrert (mørkere og mindre volum)

**4. Resultat:**
- Blodets osmolaritet synker tilbake mot normalt
- Mindre vann tapes i urinen
- Tørstesenteret i hypothalamus aktiveres også → du føler tørste

**5. Negativ tilbakekobling:**
- Når osmolariteten er normal igjen, reduseres ADH-sekresjonen
- Samlerørene blir mindre gjennomtrengelige → urinen blir mer fortynnet

Motsatt: Når du drikker mye vann, synker ADH-nivået og nyrene skiller ut mer fortynnet urin.

**Diabetes insipidus:**
Denne sjeldne tilstanden oppstår når kroppen ikke produserer nok ADH (sentral type) eller når nyrene ikke reagerer på ADH (nefrogen type). Uten ADH reabsorberer nyrene svært lite vann, og pasienten kan produsere opptil 20 liter fortynnet urin per døgn. Til tross for lignende navn har diabetes insipidus ingenting å gjøre med diabetes mellitus (blodsukker) – de deler bare symptomet med økt vannlating.`,
    },
    {
      id: 'bio1-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er effekten av økt ADH-sekresjon?',
        options: [
          { id: 'a', text: 'Mer vann reabsorberes og urinen blir mer konsentrert', isCorrect: true },
          { id: 'b', text: 'Mer vann skilles ut og urinen blir mer fortynnet', isCorrect: false },
          { id: 'c', text: 'Mer natrium skilles ut i urinen', isCorrect: false },
          { id: 'd', text: 'Blodtrykket synker', isCorrect: false },
        ],
        solution: 'ADH (antidiuretisk hormon) gjør samlerørene i nyrene mer gjennomtrengelige for vann. Mer vann reabsorberes fra urinen tilbake til blodet, slik at urinen blir konsentrert (mørk, litet volum) og blodvolumet øker. "Anti-diuretisk" betyr bokstavelig "mot vannlating" – hormonet reduserer urinproduksjonen.',
      },
    },
    {
      id: 'bio1-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvordan aldosteron og renin-angiotensin-aldosteron-systemet (RAAS) bidrar til å regulere blodtrykket når det er for lavt.',
        hints: ['RAAS aktiveres når blodtrykket synker', 'Aldosteron påvirker natriumreabsorpsjonen i nyrene'],
        solution: 'Når blodtrykket synker: (1) Nyrene registrerer lavt blodtrykk og skiller ut enzymet renin. (2) Renin omdanner angiotensinogen (fra leveren) til angiotensin I. (3) ACE (angiotensin-converting enzyme, hovedsakelig i lungene) omdanner angiotensin I til angiotensin II. (4) Angiotensin II har to viktige effekter: det trekker sammen blodårene (vasokonstriksjon → høyere blodtrykk) og stimulerer binyrebarken til å produsere aldosteron. (5) Aldosteron øker reabsorpsjon av $\\text{Na}^+$ i nyrenes tubuli. Vann følger natriumet osmotisk, så blodvolumet øker → blodtrykket stiger. Når blodtrykket er normalisert, reduseres renin-sekresjonen – negativ tilbakekobling.',
      },
    },
    {
      id: 'bio1-5-5-summary',
      type: 'text',
      content: `## Oppsummering

Nyrene er sentrale for væskebalanse, avfallsfjerning og blodtrykksregulering:

- **Nefronet** er nyrens funksjonelle enhet med glomerulus, tubuli og samlerør
- **Ultrafiltrasjon** i glomerulus filtrerer plasma; **reabsorpsjon** i tubuli tar tilbake nyttige stoffer
- Ca. 180 L filtreres daglig, men bare ca. 1,5 L skilles ut som urin
- **ADH** regulerer vannreabsorpsjon – øker ved dehydrering, synker ved overhydrering
- **Aldosteron** og **RAAS** regulerer natrium- og vannbalanse, og dermed blodtrykket
- Nyrene samarbeider med hjerte-karsystemet og hormonsystemet for å opprettholde homeostase

### Klinisk betydning

Nyresykdom er et alvorlig helseproblem. Kronisk nyresykdom (KNS) rammer ca. 10% av verdens befolkning og kan føre til behov for dialyse eller nyretransplantasjon. De vanligste årsakene til kronisk nyresykdom er:

- **Diabetes**: Høyt blodsukker skader glomeruli over tid
- **Høyt blodtrykk**: Øker belastningen på nyrenes blodårer
- **Glomerulonefritt**: Betennelse i glomeruli

GFR (glomerulær filtrasjonsrate) brukes for å vurdere nyrefunksjon. Normal GFR er ca. 125 mL/min. Ved GFR under 15 mL/min (nyresvikt stadium 5) trenger pasienten vanligvis dialyse.

**Dialyse** er en kunstig erstatning for nyrefunksjonen der blodet filtreres gjennom en maskin (hemodialyse) eller gjennom bukhinnen (peritonealdialyse). Pasienten må vanligvis til behandling 3 ganger per uke, og hver behandling tar ca. 4 timer. Nyretransplantasjon er den beste langsiktige løsningen for pasienter med alvorlig nyresvikt.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Alkohol hemmer utskillelsen av ADH fra hypofysen. Forklar hvilken effekt dette har på urinproduksjonen og væskebalansen, og hvorfor man kan bli dehydrert av å drikke alkohol.',
        hints: ['Hva skjer med vannreabsorpsjonen når ADH-nivået synker?'],
        solution: 'Når alkohol hemmer ADH-utskillelsen, synker ADH-nivået i blodet. Uten ADH blir samlerørene i nyrene mindre gjennomtrengelige for vann, så mindre vann reabsorberes tilbake til blodet. Resultatet er stor produksjon av fortynnet urin (diurese). Man taper mer væsker enn man tar inn, noe som fører til dehydrering. Dette forklarer hvorfor man må late vannet ofte etter å ha drukket alkohol, og hvorfor man kan få hodepine og tørste (symptomer på dehydrering) dagen etter. Rådet om å drikke vann mellom alkoholholdige drikker er basert på dette prinsippet.',
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
        solution: 'Ultrafiltrasjon i glomerulus drives av det høye blodtrykket i glomerulus-kapillærene. Trykket presser vann og små løste stoffer (glukose, salter, avfallsstoffer) gjennom kapillærveggene og inn i Bowmans kapsel, mens store molekyler (proteiner) og blodceller holdes tilbake. Reabsorpsjon skjer senere i tubulussystemet og drives av aktiv transport og osmose.',
      },
    },
    {
      id: 'bio1-5-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'En person spiser et svært salt måltid. Beskriv trinn for trinn hva som skjer med væskebalansen og blodtrykket i timene etterpå, og hvordan kroppen regulerer dette tilbake til normalt.',
        hints: ['Salt ($\\text{Na}^+$) øker blodets osmolaritet', 'Tenk på både ADH, tørste og RAAS'],
        solution: 'Etter et salt måltid: (1) $\\text{Na}^+$ absorberes fra tarmen og øker blodets osmolaritet (blodkonsentrasjonen). (2) Osmoreseptorer i hypothalamus registrerer dette og stimulerer: (a) ADH-frigjøring → mer vann reabsorberes i nyrene, (b) Tørstefølelse → personen drikker mer. (3) Økt vanninntak og vannretensjon øker blodvolumet → blodtrykket stiger. (4) Høyere blodtrykk og blodvolum hemmer RAAS-systemet: mindre renin → mindre angiotensin II → mindre aldosteron. (5) Uten aldosteron reabsorberer nyrene mindre $\\text{Na}^+$ og vann → mer natrium og vann skilles ut i urinen. (6) Blodvolumet og osmolariteten synker tilbake mot normalt → ADH-sekresjonen avtar, tørsten forsvinner. Alt styres av negativ tilbakekobling.',
      },
    },
    {
      id: 'bio1-5-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'bio1-5-5-ex-8',
        number: '8',
        type: 'multiple-choice',
        task: 'Hva er rollen til Henles sløyfe i nefronet?',
        options: [
          { id: 'a', text: 'Den skaper en konsentrasjonsgradient i nyremargen som gjør det mulig å lage konsentrert urin', isCorrect: true },
          { id: 'b', text: 'Den filtrerer blodet ved ultrafiltrasjon', isCorrect: false },
          { id: 'c', text: 'Den produserer ADH', isCorrect: false },
          { id: 'd', text: 'Den fjerner proteiner fra urinen', isCorrect: false },
        ],
        solution: 'Henles sløyfe har en kritisk rolle: den skaper en konsentrasjonsgradient (økende saltkonsentrasjon) i nyremargen. Den nedadgående delen slipper vann ut (men ikke salt), mens den oppadgående delen pumper salt ut (men holder på vann). Denne gradienten gjør at samlerørene, når de påvirkes av ADH, kan reabsorbere vann ved osmose og lage konsentrert urin. Uten Henles sløyfe kunne vi ikke lage urin som er mer konsentrert enn blodplasma. Dyr som lever i tørre områder, som ørkenrotter, har svært lange Henles sløyfer og kan derfor lage ekstremt konsentrert urin for å spare vann.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Nefron', definition: 'Nyrens funksjonelle enhet som filtrerer blodet og danner urin' },
    { term: 'Glomerulus', definition: 'Kapillærnøste i nefronet der ultrafiltrasjon skjer' },
    { term: 'Ultrafiltrasjon', definition: 'Trykkdrevet filtrering av blodplasma i glomerulus' },
    { term: 'Reabsorpsjon', definition: 'Tilbakeføring av nyttige stoffer fra filtratet til blodet' },
    { term: 'ADH', definition: 'Hormon som øker vannreabsorpsjonen i nyrenes samlerør' },
    { term: 'Aldosteron', definition: 'Hormon som øker natriumreabsorpsjonen i nyrene' },
    { term: 'RAAS', definition: 'Renin-angiotensin-aldosteron-systemet for blodtrykksregulering' },
    { term: 'Osmolaritet', definition: 'Konsentrasjonen av løste stoffer i en løsning, målt i mOsm/L' },
    { term: 'Henles sløyfe', definition: 'Del av nefronet som skaper konsentrasjonsgradient i nyremargen' },
    { term: 'GFR', definition: 'Glomerulær filtrasjonsrate – mål på nyrenes filtreringskapasitet' },
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
