/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON
 * Kapittel 8.1: Modellering med funksjoner
 * Kapittel 8.2: Potensfunksjoner
 * Kapittel 8.3: Lineær regresjon
 * Kapittel 8.4: Ikke-lineær regresjon
 * Kapittel 8.5: Modellvurdering og praktisk bruk
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1 NARRATIV: Modellering med funksjoner
// ============================================================================

export const CHAPTER_1T_8_1_NARRATIV: TextbookChapter = {
  id: '1t-8-1-narrativ',
  courseId: '1t',
  chapterNumber: '8.1',
  title: 'Modellering med funksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan vi bruker matematiske funksjoner til å beskrive virkeligheten – fra taxipriser til befolkningsvekst, og hvorfor modeller alltid er forenklinger.',
  estimatedMinutes: 40,
  competenceGoals: ['modellere situasjonar, drøfte, presentere og forklare resultata og argumentere for om modellane er gyldige'],
  linkedChapterId: '1t-8-1',
  content: [
    {
      id: '1t-8-1-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-1-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-8-1-n-intro',
      type: 'text',
      content: `## Når matematikken møter virkeligheten

Tenk deg at du sitter på en kafé og ser på den dampende koppen foran deg. Kaffen er brennheit akkurat nå, men om en halvtime er den lunken. Finnes det en formel som beskriver akkurat hvordan temperaturen synker? Svaret er ja – og den formelen er det vi kaller en **matematisk modell**.

En matematisk modell er rett og slett en forenklet beskrivelse av noe virkelig, uttrykt gjennom matematikk. Vi kan modellere alt fra hvordan en ball beveger seg gjennom luften til hvordan prisene i en butikk avhenger av tilbud og etterspørsel. Nøkkelordet her er «forenklet». Modellen for ballens bane ignorerer kanskje luftmotstand. Modellen for kaffetemperaturen antar at romtemperaturen er konstant. Ingen modell fanger opp absolutt alt, men en god modell fanger opp det som betyr mest.

I dette kapittelet skal vi utforske hele modelleringsprosessen – fra å observere et fenomen og velge variabler, via å sette opp en funksjon som passer, til å vurdere om modellen faktisk gir mening. Vi skal se at ulike situasjoner krever ulike funksjonstyper, og at det å velge riktig type er en av de viktigste ferdighetene i modellering.`,
    },
    {
      id: '1t-8-1-n-section1',
      type: 'text',
      content: `## Modelleringsprosessen – steg for steg

Matematisk modellering er ikke noe du gjør i ett hopp. Det er en prosess med flere steg, og den er ofte **iterativ** – du går gjerne tilbake og justerer underveis. La oss gå gjennom de fem stegene.

Først **observerer** du situasjonen. Du studerer fenomenet, samler inn data og prøver å forstå hva som skjer. Kanskje du måler temperaturen i kaffekoppen hvert femte minutt, eller kanskje du samler inn tall for befolkningen i en by over flere år.

Deretter **identifiserer du variablene**. Hva er størrelsene som endrer seg? Hvilken er den **uavhengige variabelen** (den du styrer, for eksempel tid) og hvilken er den **avhengige variabelen** (den som endrer seg som følge, for eksempel temperatur)? Å velge riktige variabler er halve jobben.

Så **setter du opp en modell**. Her velger du en funksjonstype og bestemmer parametrene. Går temperaturen jevnt nedover? Da kan en **lineær funksjon** $f(x) = ax + b$ passe. Synker den raskt i starten og så saktere? Da trenger du kanskje en **eksponentiell funksjon** $f(x) = a \\cdot b^x$. Følger banen en bue? Prøv en **kvadratisk funksjon** $f(x) = ax^2 + bx + c$. Avhenger den ene størrelsen av en potens av den andre? Da er det en **potensfunksjon** $f(x) = a \\cdot x^b$ du er ute etter.

Neste steg er å **teste modellen** mot faktiske data. Gir modellen verdier som stemmer med det du har observert? Hvis ikke, må du gå tilbake og justere.

Til slutt **vurderer** du modellen. Er den god nok? Hvor gjelder den? Hva er begrensningene? Disse spørsmålene er avgjørende – og vi kommer tilbake til dem gjennom hele kapittelet.`,
    },
    {
      id: '1t-8-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-8-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er det første steget i modelleringsprosessen?',
        options: [
          { id: 'a', text: 'Velge en funksjonstype', isCorrect: false },
          { id: 'b', text: 'Identifisere variablene', isCorrect: false },
          { id: 'c', text: 'Observere situasjonen og samle data', isCorrect: true },
          { id: 'd', text: 'Vurdere om modellen gir mening', isCorrect: false },
        ],
        solution: 'Modelleringsprosessen starter alltid med å observere situasjonen og samle inn data. Først når du forstår fenomenet kan du identifisere variabler og velge funksjonstype.',
      },
    },
    {
      id: '1t-8-1-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-1-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-1-n-section2',
      type: 'text',
      content: `## Fra virkelighet til funksjon – lineære og kvadratiske modeller

La oss begynne med det enkleste tilfellet. En taxitur koster 50 kroner i startpris pluss 12 kroner per kilometer. Hva koster en tur på $x$ kilometer? Her er den uavhengige variabelen $x$ (antall kilometer) og den avhengige er prisen $P(x)$. Sammenhengen er tydelig lineær: $P(x) = 12x + 50$. For 15 kilometer betaler du $P(15) = 12 \\cdot 15 + 50 = 230$ kroner.

Men ikke alt i livet er rett-linje-enkelt. Tenk deg en bonde som har 80 meter gjerde og vil lage et rektangulært innhegnet område langs en elv. Elven er den ene langsiden, så gjerdet brukes bare på tre sider. Hvis bredden er $x$ meter, blir lengden $80 - 2x$ meter (fordi to bredder pluss én lengde skal gi 80 meter totalt). Arealet blir $A(x) = x(80 - 2x) = 80x - 2x^2$.

Denne modellen er en **andregradsfunksjon** med $a = -2 < 0$, altså en parabel som peker nedover. Den har et toppunkt, og det er nettopp det vi er interessert i – for det gir oss det størst mulige arealet. Toppunktet finner vi med formelen $x = -\\frac{b}{2a} = -\\frac{80}{2 \\cdot (-2)} = 20$. Med bredde 20 meter blir lengden $80 - 40 = 40$ meter, og arealet blir $20 \\cdot 40 = 800$ kvadratmeter.

Legg merke til noe viktig: modellen gjelder bare for $0 < x < 40$. Utenfor dette intervallet gir modellen negative arealer, noe som åpenbart ikke gir mening. Alle modeller har et **gyldighetsområde** – et intervall der de gir fornuftige resultater.`,
    },
    {
      id: '1t-8-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-8-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Et mobilabonnement koster 99 kr per måned pluss 0,50 kr per SMS. Hva er den rette modellen for månedskostnaden $K(x)$ når $x$ er antall SMS?',
        options: [
          { id: 'a', text: '$K(x) = 99x + 0{,}50$', isCorrect: false },
          { id: 'b', text: '$K(x) = 0{,}50x + 99$', isCorrect: true },
          { id: 'c', text: '$K(x) = 99 \\cdot 0{,}50^x$', isCorrect: false },
          { id: 'd', text: '$K(x) = 99x \\cdot 0{,}50$', isCorrect: false },
        ],
        solution: 'Den faste kostnaden (99 kr) er konstantleddet, og den variable kostnaden (0,50 kr per SMS) er stigningstallet. Modellen er lineær: $K(x) = 0{,}50x + 99$.',
      },
    },
    {
      id: '1t-8-1-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-1-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-1-n-section3',
      type: 'text',
      content: `## Eksponentielle modeller – når noe vokser prosentvis

Nå beveger vi oss til et helt annet mønster. Forestill deg en by med 25 000 innbyggere i 2010 som vokser med 2,5 prosent per år. Etter ett år er det $25\\,000 \\cdot 1{,}025$ innbyggere. Etter to år ganger vi med $1{,}025$ én gang til: $25\\,000 \\cdot 1{,}025^2$. Etter $t$ år blir modellen $B(t) = 25\\,000 \\cdot 1{,}025^t$.

Det er dette som kjennetegner en **eksponentiell modell**: den variabelen vi er interessert i multipliseres med en fast **vekstfaktor** i hvert steg. Når vekstfaktoren er større enn 1 (som her med 1,025), vokser funksjonen. Når den er mellom 0 og 1, avtar den – tenk på radioaktivt henfall eller temperaturen i kaffekoppen vår.

La oss bruke modellen. I 2020 ($t = 10$) gir den $B(10) = 25\\,000 \\cdot 1{,}025^{10} \\approx 32\\,003$ innbyggere. Hva med 2050 ($t = 40$)? Da gir modellen $B(40) = 25\\,000 \\cdot 1{,}025^{40} \\approx 67\\,126$.

Men her må vi stoppe opp og tenke. Anslaget for 2020 er basert på data som er nokså nær i tid – det er rimelig å anta at vekstraten har holdt seg ganske stabil over 10 år. Men anslaget for 2050 er 40 år frem i tid! Vekstraten kan endre seg dramatisk på grunn av politikk, økonomi eller migrasjon. Jo lenger vi strekker modellen utover der vi har data, desto mer usikker blir den.

Eksponentiell vekst er kraftig. Selv en tilsynelatende lav vekstrate på 2,5 prosent fører til en dobling på under 30 år. Derfor er det spesielt viktig å være forsiktig med å stole blindt på eksponentielle modeller over lang tid.`,
    },
    {
      id: '1t-8-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-8-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'En kaffekopp med starttemperatur 90 °C avkjøles mot romtemperatur 20 °C. Modellen er $T(t) = 20 + 70 \\cdot 0{,}935^t$ der $t$ er minutter. Hva skjer med temperaturen når $t$ blir veldig stor?',
        options: [
          { id: 'a', text: 'Temperaturen nærmer seg 0 °C', isCorrect: false },
          { id: 'b', text: 'Temperaturen nærmer seg 70 °C', isCorrect: false },
          { id: 'c', text: 'Temperaturen nærmer seg 90 °C', isCorrect: false },
          { id: 'd', text: 'Temperaturen nærmer seg 20 °C', isCorrect: true },
        ],
        solution: 'Når $t \\to \\infty$ går $0{,}935^t \\to 0$ (fordi $0 < 0{,}935 < 1$), og da nærmer $T(t)$ seg $20 + 70 \\cdot 0 = 20$ °C. Kaffen kjøles ned til romtemperatur, noe som er fysisk fornuftig.',
      },
    },
    {
      id: '1t-8-1-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-1-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-1-n-section4',
      type: 'text',
      content: `## Interpolering og ekstrapolering – to helt forskjellige ting

Nå som vi har sett ulike modelltyper, er det på tide å snakke om noe helt sentralt: forskjellen mellom **interpolering** og **ekstrapolering**.

**Interpolering** betyr at du bruker modellen til å anslå verdier *mellom* datapunktene du allerede har. Tenk deg at du har målt temperaturen i kaffekoppen etter 0, 5, 10 og 15 minutter. Hvis du bruker modellen til å anslå temperaturen etter 7 minutter, driver du med interpolering. Du befinner deg innenfor området der modellen har blitt «trent», og anslaget er som regel ganske pålitelig.

**Ekstrapolering** betyr at du bruker modellen *utenfor* dataområdet – for eksempel til å anslå temperaturen etter 60 minutter, eller befolkningen i 2050 basert på data fra 2010 til 2020. Her er vi på tynnere is. Modellen ble laget for å passe til data i et bestemt område, og vi vet rett og slett ikke om den gjelder utenfor.

Et godt eksempel: tenk på elbil-utviklingen i Norge. Fra 2015 til 2021 vokste antall elbiler fra 70 000 til 450 000. En eksponentiell modell med vekstfaktor 1,364 passer ganske godt til disse dataene. Men hvis vi ekstrapolerer til 2030, gir modellen 5,6 millioner elbiler – mer enn Norges befolkning! Åpenbart kan ikke veksten fortsette eksponentielt for alltid. Markedet vil mettes, og veksten vil avta.

Tommelregelen er enkel: vær forsiktig med ekstrapolering, og jo lenger du ekstrapolerer, desto mer skeptisk bør du være.`,
    },
    {
      id: '1t-8-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-8-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Du har temperaturdata fra kl. 08:00 til kl. 16:00, og bruker modellen til å anslå temperaturen kl. 20:00. Hva gjør du?',
        options: [
          { id: 'a', text: 'Interpolering – fordi det er samme dag', isCorrect: false },
          { id: 'b', text: 'Ekstrapolering – fordi kl. 20:00 er utenfor dataområdet', isCorrect: true },
          { id: 'c', text: 'Interpolering – fordi klokkeslettet er nært', isCorrect: false },
          { id: 'd', text: 'Det avhenger av funksjonstypen', isCorrect: false },
        ],
        solution: 'Kl. 20:00 ligger utenfor intervallet 08:00 til 16:00, altså utenfor dataområdet. Dermed er dette ekstrapolering, uansett hvor nært det virker. Ekstrapolering er alltid mer usikkert enn interpolering.',
      },
    },
    {
      id: '1t-8-1-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-1-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-1-n-section5',
      type: 'text',
      content: `## Modellering i praksis – optimering og kritisk sans

La oss avslutte med et eksempel som viser kraften i modellering. En nettbutikk selger et produkt til $p$ kroner per stykk. Erfaringen viser at de selger $1200 - 4p$ produkter per måned. Produksjonskostnaden er 80 kroner per enhet, og de faste kostnadene er 15 000 kroner per måned.

Vi setter opp modeller for det hele. Inntekten er pris ganger antall solgte: $I(p) = p(1200 - 4p) = 1200p - 4p^2$. Kostnadene er variable kostnader pluss faste: $K(p) = 80(1200 - 4p) + 15\\,000 = 111\\,000 - 320p$. Overskuddet er inntekt minus kostnader: $O(p) = -4p^2 + 1520p - 111\\,000$.

Fordi overskuddet er en andregradsfunksjon med negativ $a$-verdi, har den et toppunkt – og det er den prisen som gir størst fortjeneste. Toppunktet finner vi: $p = -\\frac{1520}{2 \\cdot (-4)} = 190$ kroner. Det maksimale overskuddet blir $O(190) = 33\\,400$ kroner per måned.

Matematisk modellering handler altså ikke bare om å beskrive hva som skjer, men om å ta bedre beslutninger. Men husk alltid: modellen er en forenkling. I virkeligheten kan etterspørselen avhenge av mer enn bare prisen. Konkurrenter, sesongvariasjoner og markedsføring spiller også inn. Modellen gir et godt utgangspunkt for beslutningen, men den erstatter ikke sunn fornuft.

Still deg alltid disse spørsmålene når du modellerer: Gir modellen fornuftige verdier for ekstreme input? Er det naturlige begrensninger den ignorerer? Og hva skjer dersom vi bruker den langt utenfor datapunktene?`,
    },
    {
      id: '1t-8-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-8-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Overskuddsfunksjonen $O(p) = -4p^2 + 1520p - 111\\,000$ gir størst overskudd ved $p = 190$ kr. Hva kjennetegner dette punktet?',
        options: [
          { id: 'a', text: 'Det er et nullpunkt for funksjonen', isCorrect: false },
          { id: 'b', text: 'Det er et bunnpunkt fordi $a = -4$', isCorrect: false },
          { id: 'c', text: 'Det er et toppunkt fordi $a = -4 < 0$', isCorrect: true },
          { id: 'd', text: 'Det er et vendepunkt for funksjonen', isCorrect: false },
        ],
        solution: 'Fordi koeffisienten foran $p^2$ er negativ ($a = -4 < 0$), er parabelen vendt nedover og har et toppunkt. Toppunktet gir den høyeste verdien av overskuddet, altså den optimale prisen.',
      },
    },
    {
      id: '1t-8-1-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-8-1-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-8-1-n-summary',
      type: 'text',
      content: `## Oppsummering

En **matematisk modell** er en forenklet matematisk beskrivelse av en virkelig situasjon. Den bruker variabler og funksjoner til å fange opp det som er viktigst, men den er aldri perfekt.

**Modelleringsprosessen** har fem steg: observere, identifisere variabler, sette opp modellen, teste den mot data, og vurdere om den gir fornuftige resultater. Prosessen er gjerne iterativ – du justerer modellen underveis. Ulike situasjoner krever ulike funksjonstyper: lineære funksjoner for jevn vekst, kvadratiske for buede baner og optimeringsproblemer, eksponentielle for prosentvis vekst, og potensfunksjoner for sammenhenger der den ene størrelsen er en potens av den andre.

**Interpolering** er å anslå verdier mellom kjente datapunkter og er generelt pålitelig. **Ekstrapolering** er å anslå verdier utenfor dataområdet og er langt mer usikkert – jo lenger ut, desto mer usikkert. Alle modeller har et **gyldighetsområde**, og du bør alltid vurdere kritisk om modellen gir fornuftige resultater der du bruker den.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2 NARRATIV: Potensfunksjoner
// ============================================================================

export const CHAPTER_1T_8_2_NARRATIV: TextbookChapter = {
  id: '1t-8-2-narrativ',
  courseId: '1t',
  chapterNumber: '8.2',
  title: 'Potensfunksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om funksjoner der variabelen er i grunntallet – fra fritt fall og planetbaner til pendler og kuber.',
  estimatedMinutes: 40,
  competenceGoals: ['utforske og beskrive eigenskapane ved potensfunksjonar og bruke dei til modellering'],
  linkedChapterId: '1t-8-2',
  content: [
    {
      id: '1t-8-2-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-2-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-8-2-n-intro',
      type: 'text',
      content: `## En funksjonsfamilie med mange ansikter

Du har allerede møtt funksjoner som $f(x) = x^2$ og $f(x) = x^3$. Grafene deres er velkjente – den første er en parabel, den andre en brattere S-formet kurve. Men visste du at disse bare er to medlemmer av en mye større familie? De tilhører alle **potensfunksjonene**, og i dette kapittelet skal vi bli kjent med hele familien.

En potensfunksjon har formen $f(x) = a \\cdot x^b$, der $a$ og $b$ er konstanter. Det som gjør den til en potensfunksjon er at den uavhengige variabelen $x$ står i **grunntallet**, mens eksponenten $b$ er en fast verdi. Pass på at du ikke forveksler dette med eksponentialfunksjoner der $x$ står i *eksponenten*, altså $g(x) = a \\cdot b^x$. Det er en avgjørende forskjell.

Vi kaller $a$ for **koeffisienten** og $b$ for **eksponenten**. Disse to tallene bestemmer fullstendig hvordan funksjonen oppfører seg – og som vi skal se, gir ulike verdier av $b$ helt ulike former på grafen.`,
    },
    {
      id: '1t-8-2-n-section1',
      type: 'text',
      content: `## Eksponentens betydning – grafens form

La oss ta en systematisk titt på hva som skjer med grafen til $f(x) = a \\cdot x^b$ for ulike verdier av $b$ (vi antar $a > 0$ og $x > 0$).

Når $b > 1$ er funksjonen **voksende og konveks** – den buer oppover. Tenk på $f(x) = x^2$ eller $f(x) = x^3$. Jo større $b$ er, desto brattere vokser funksjonen for store $x$-verdier. Grafen starter flatt nær origo og løfter seg raskt.

Når $0 < b < 1$ skjer noe interessant: funksjonen er fortsatt voksende, men den er **konkav** – den buer nedover. Funksjonen vokser raskt i starten, men stadig saktere. Et eksempel er $f(x) = \\sqrt{x} = x^{1/2}$. Du kan tenke på det som en graf som «flater ut» etter hvert.

Når $b < 0$ er funksjonen **avtagende**. Eksempler er $f(x) = \\frac{1}{x} = x^{-1}$ og $f(x) = \\frac{1}{x^2} = x^{-2}$. Når $x$ øker, kryper funksjonsverdien nærmere og nærmere null, men den når aldri helt dit.

Spesialtilfellet $b = 1$ gir den lineære funksjonen $f(x) = ax$ – en rett linje gjennom origo. Og $b = 0$ gir den konstante funksjonen $f(x) = a$, fordi $x^0 = 1$ for alle $x \\neq 0$.

En nyttig egenskap: alle potensfunksjoner med $a > 0$ passerer gjennom punktet $(1, a)$, fordi $f(1) = a \\cdot 1^b = a$ uansett hva $b$ er.`,
    },
    {
      id: '1t-8-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-8-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken av disse er en potensfunksjon?',
        options: [
          { id: 'a', text: '$g(x) = 2^x$', isCorrect: false },
          { id: 'b', text: '$h(x) = x^2 + 3$', isCorrect: false },
          { id: 'c', text: '$k(x) = 7\\sqrt[3]{x}$', isCorrect: true },
          { id: 'd', text: '$m(x) = 3x + 1$', isCorrect: false },
        ],
        solution: '$k(x) = 7\\sqrt[3]{x} = 7x^{1/3}$ er en potensfunksjon med $a = 7$ og $b = \\frac{1}{3}$. Alternativ a er en eksponentialfunksjon ($x$ i eksponenten), b er et polynom (ikke en ren potensfunksjon pga. $+3$), og d er en lineær funksjon med konstantledd.',
      },
    },
    {
      id: '1t-8-2-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-2-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-2-n-section2',
      type: 'text',
      content: `## Potensfunksjoner i fysikken – fritt fall

Fysikken er full av potensfunksjoner, og et av de enkleste eksemplene er **fritt fall**. Når du slipper en gjenstand (og ser bort fra luftmotstand), er strekningen den faller gitt ved $s(t) = \\frac{1}{2}g t^2$, der $g \\approx 9{,}81$ m/s$^2$ er tyngdeakselerasjonen. Vi kan skrive dette som $s(t) = 4{,}905 \\cdot t^2$ – en potensfunksjon med $a = 4{,}905$ og $b = 2$.

La oss beregne: etter 1 sekund har gjenstanden falt $s(1) = 4{,}9$ meter. Etter 2 sekunder: $s(2) = 4{,}905 \\cdot 4 = 19{,}6$ meter. Etter 3 sekunder: $s(3) = 4{,}905 \\cdot 9 = 44{,}1$ meter. Og etter 4 sekunder: $s(4) = 4{,}905 \\cdot 16 = 78{,}5$ meter.

Ser du mønsteret? Strekningen øker stadig raskere. I det første sekundet faller gjenstanden knapt 5 meter, men i det fjerde sekundet faller den over 34 meter. Det er typisk for en potensfunksjon med $b = 2$: verdiene akselererer. Dobler du tiden, firedobles strekningen (fordi $2^2 = 4$). Tredobler du tiden, nidobles strekningen (fordi $3^2 = 9$).

Denne egenskapen er generell. For en potensfunksjon $f(x) = a \\cdot x^b$ gjelder det at dersom du ganger $x$ med en faktor $k$, ganges funksjonsverdien med $k^b$. For eksempel: dobler vi radius i en sirkel ($b = 2$ for arealet), firedobles arealet. Tredobler vi sidelengden i en kube ($b = 3$ for volumet), 27-dobles volumet.`,
    },
    {
      id: '1t-8-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-8-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Arealet av en sirkel er $A(r) = \\pi r^2$. Hva skjer med arealet dersom du dobler radius?',
        options: [
          { id: 'a', text: 'Arealet dobles', isCorrect: false },
          { id: 'b', text: 'Arealet tredobles', isCorrect: false },
          { id: 'c', text: 'Arealet firedobles', isCorrect: true },
          { id: 'd', text: 'Arealet åttedobles', isCorrect: false },
        ],
        solution: '$A(2r) = \\pi(2r)^2 = \\pi \\cdot 4r^2 = 4\\pi r^2 = 4A(r)$. Arealet ganges med $2^2 = 4$, altså firedobles. For en potensfunksjon med eksponent $b$ ganges verdien med $k^b$ når du ganger variabelen med $k$.',
      },
    },
    {
      id: '1t-8-2-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-2-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-2-n-section3',
      type: 'text',
      content: `## Keplers tredje lov – planetenes dans

En av de mest elegante potensfunksjonene i naturen finner vi i astronomi. Johannes Kepler oppdaget på 1600-tallet at omløpstiden $T$ for en planet rundt solen henger sammen med gjennomsnittsavstanden $r$ ved formelen $T = r^{3/2}$ (når vi måler $T$ i år og $r$ i astronomiske enheter, AU).

La oss teste dette på Mars, som har en gjennomsnittsavstand på $1{,}52$ AU fra solen. Vi beregner $T = 1{,}52^{3/2}$. For å gjøre dette tar vi først $1{,}52^3 = 1{,}52 \\cdot 1{,}52 \\cdot 1{,}52 = 3{,}512$, og så tar vi kvadratroten: $T = \\sqrt{3{,}512} \\approx 1{,}87$ år. Den faktiske verdien er 1,88 år – modellen stemmer nesten perfekt.

Legg merke til at eksponenten her er $b = \\frac{3}{2}$, altså mellom 1 og 2. Det betyr at omløpstiden vokser raskere enn lineært med avstanden, men ikke så raskt som ved kvadratisk vekst. Planeter som er dobbelt så langt unna solen bruker $2^{3/2} = 2\\sqrt{2} \\approx 2{,}83$ ganger så lang tid – ikke dobbelt, men heller ikke fire ganger.

Dette viser noe vakkert med potensfunksjoner: naturen «velger» ofte en bestemt eksponent som uttrykker den fysiske lovmessigheten. Eksponenten $\\frac{3}{2}$ i Keplers lov er ikke tilfeldig – den følger direkte fra gravitasjonsloven. Når du finner eksponenten i en potensfunksjon, finner du ofte nøkkelen til å forstå mekanismen bak fenomenet.`,
    },
    {
      id: '1t-8-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-8-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Keplers lov gir $T = r^{3/2}$. Hva er omløpstiden for en planet med avstand $r = 4$ AU?',
        options: [
          { id: 'a', text: '$T = 4$ år', isCorrect: false },
          { id: 'b', text: '$T = 6$ år', isCorrect: false },
          { id: 'c', text: '$T = 8$ år', isCorrect: true },
          { id: 'd', text: '$T = 16$ år', isCorrect: false },
        ],
        solution: '$T = 4^{3/2} = (4^3)^{1/2} = \\sqrt{64} = 8$ år. Alternativt: $4^{3/2} = (4^{1/2})^3 = 2^3 = 8$.',
      },
    },
    {
      id: '1t-8-2-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-2-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-2-n-section4',
      type: 'text',
      content: `## Å bestemme en potensfunksjon fra to punkter

I praksis vet vi ikke alltid hva $a$ og $b$ er – vi må finne dem fra data. Hvis vi kjenner to punkter på grafen, kan vi bestemme begge konstantene.

La oss si at grafen til $f(x) = a \\cdot x^b$ går gjennom $(2, 12)$ og $(5, 75)$. Vi setter opp to likninger: $12 = a \\cdot 2^b$ og $75 = a \\cdot 5^b$. Nå kommer trikset: vi deler den ene likningen på den andre for å eliminere $a$.

$$\\frac{75}{12} = \\frac{a \\cdot 5^b}{a \\cdot 2^b} = \\left(\\frac{5}{2}\\right)^b$$

Vi får $6{,}25 = 2{,}5^b$. For å løse dette bruker vi logaritmer: $b = \\frac{\\ln 6{,}25}{\\ln 2{,}5} = \\frac{1{,}8326}{0{,}9163} = 2$. Deretter finner vi $a$ fra den første likningen: $12 = a \\cdot 2^2 = 4a$, altså $a = 3$. Funksjonen er $f(x) = 3x^2$, og vi kan kontrollere: $f(5) = 3 \\cdot 25 = 75$. Stemmer!

Pendelen er et annet godt eksempel. Svingetiden for en pendel er gitt ved $T = 2\\pi\\sqrt{\\frac{L}{g}}$, som vi kan skrive som $T \\approx 2{,}006 \\cdot L^{1/2}$. Her er $a \\approx 2{,}006$ og $b = \\frac{1}{2}$. En pendel på 1 meter har svingetid på omtrent 2 sekunder. Skal pendelen ha svingetid på nøyaktig 1 sekund, løser vi $1 = 2{,}006 \\cdot L^{1/2}$, som gir $L \\approx 0{,}249$ meter – altså omtrent 25 centimeter.`,
    },
    {
      id: '1t-8-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-8-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Grafen til $f(x) = a \\cdot x^b$ går gjennom $(1, 5)$ og $(3, 45)$. Hva er $a$ og $b$?',
        options: [
          { id: 'a', text: '$a = 5$, $b = 1$', isCorrect: false },
          { id: 'b', text: '$a = 5$, $b = 2$', isCorrect: true },
          { id: 'c', text: '$a = 3$, $b = 5$', isCorrect: false },
          { id: 'd', text: '$a = 9$, $b = 2$', isCorrect: false },
        ],
        solution: 'Fra punktet $(1, 5)$: $5 = a \\cdot 1^b = a$, altså $a = 5$. Fra punktet $(3, 45)$: $45 = 5 \\cdot 3^b$, som gir $3^b = 9 = 3^2$, altså $b = 2$. Funksjonen er $f(x) = 5x^2$.',
      },
    },
    {
      id: '1t-8-2-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-2-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-2-n-section5',
      type: 'text',
      content: `## Potensfunksjon eller eksponentialfunksjon? Slik skiller du dem

Et spørsmål som dukker opp ofte er: hvordan vet du om du har å gjøre med en potensfunksjon $f(x) = a \\cdot x^b$ eller en eksponentialfunksjon $g(x) = a \\cdot b^x$? De kan jo begge beskrive vekst.

Den viktigste forskjellen ligger i vekstmønsteret. I en **eksponentialfunksjon** vokser verdien med en fast *prosent* i hvert steg. Antall bakterier som dobles hver time, penger på en sparekonto med rentes rente, radioaktivt henfall – alt dette er eksponentiell vekst. Den underliggende mekanismen er prosentvis endring.

I en **potensfunksjon** er sammenhengen at den ene størrelsen er proporsjonal med en potens av den andre. Arealet av en sirkel er proporsjonalt med $r^2$. Volumet av en kube er proporsjonalt med $s^3$. Svingetiden til en pendel er proporsjonal med $L^{1/2}$. Mekanismen handler om geometriske eller fysiske skaleringslover.

En praktisk tommelfingerregel: for svært store $x$-verdier vil en eksponentialfunksjon (med $b > 1$) *alltid* vokse raskere enn en potensfunksjon, uansett hvor stor eksponenten er. Selv $2^x$ vokser til slutt raskere enn $x^{100}$. Det tar bare litt tid.

Et siste skille: potensfunksjoner med heltallseksponent har alltid $(0, 0)$ som et punkt på grafen (for $b > 0$), mens eksponentialfunksjoner alltid har $(0, a)$ som skjæringspunkt med $y$-aksen. Det kan hjelpe deg å gjenkjenne dem visuelt.`,
    },
    {
      id: '1t-8-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-8-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Skrive $\\frac{5}{x^2}$ som en potensfunksjon $a \\cdot x^b$. Hva er $a$ og $b$?',
        options: [
          { id: 'a', text: '$a = 5$, $b = 2$', isCorrect: false },
          { id: 'b', text: '$a = -5$, $b = 2$', isCorrect: false },
          { id: 'c', text: '$a = 5$, $b = -2$', isCorrect: true },
          { id: 'd', text: '$a = \\frac{1}{5}$, $b = 2$', isCorrect: false },
        ],
        solution: '$\\frac{5}{x^2} = 5 \\cdot x^{-2}$, altså $a = 5$ og $b = -2$. Vi bruker regelen $\\frac{1}{x^n} = x^{-n}$. Negativ eksponent betyr at funksjonen er avtagende.',
      },
    },
    {
      id: '1t-8-2-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-8-2-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-8-2-n-summary',
      type: 'text',
      content: `## Oppsummering

En **potensfunksjon** har formen $f(x) = a \\cdot x^b$, der $a$ er koeffisienten og $b$ er eksponenten. Variabelen $x$ står i grunntallet, til forskjell fra eksponentialfunksjoner der $x$ står i eksponenten.

Eksponentens verdi bestemmer grafens form: for $b > 1$ er funksjonen voksende og konveks, for $0 < b < 1$ er den voksende men konkav (flater ut), og for $b < 0$ er den avtagende. En sentral egenskap er at dersom du ganger $x$ med en faktor $k$, ganges funksjonsverdien med $k^b$. Dette forklarer hvorfor dobling av radius firedobler arealet ($b = 2$), og tredobling av sidelengden 27-dobler volumet ($b = 3$).

Potensfunksjoner dukker opp i fysiske lover (fritt fall, Keplers lov, pendelbevegelse), geometri (areal, volum) og biologi (skaleringslover). De skiller seg fra eksponentialfunksjoner ved at de beskriver *proporsjonal* sammenheng med en potens, mens eksponentialfunksjoner beskriver prosentvis vekst. For store verdier vil eksponentialfunksjoner alltid vokse raskere enn potensfunksjoner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3 NARRATIV: Lineær regresjon
// ============================================================================

export const CHAPTER_1T_8_3_NARRATIV: TextbookChapter = {
  id: '1t-8-3-narrativ',
  courseId: '1t',
  chapterNumber: '8.3',
  title: 'Lineær regresjon',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan vi finner den beste rette linjen gjennom et kaos av datapunkter – og hvorfor korrelasjon ikke er det samme som årsakssammenheng.',
  estimatedMinutes: 40,
  competenceGoals: ['modellere situasjonar, drøfte, presentere og forklare resultata og argumentere for om modellane er gyldige'],
  linkedChapterId: '1t-8-3',
  content: [
    {
      id: '1t-8-3-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-3-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-8-3-n-intro',
      type: 'text',
      content: `## Fra prikker til linjer

I forrige kapittel satte vi opp modeller basert på kunnskap om situasjonen – vi visste at en taxi hadde fast startpris pluss en kilometerpris, og vi satte opp funksjonen direkte. Men i mange tilfeller starter vi fra den andre enden: vi har et knippe datapunkter, og vi leter etter en funksjon som passer.

Tenk deg at du driver en iskremkiosk og har notert daglig temperatur og antall solgte is i en uke. Du plotter punktene i et koordinatsystem – et **spredningsdiagram** – og ser at de danner et mønster som stiger fra venstre til høyre. Det ser ut som det kunne vært en rett linje der. Men hvilken linje? Det finnes uendelig mange rette linjer du kan tegne gjennom en sky av punkter. Vi trenger en metode for å finne den *beste*.

Det er akkurat det **lineær regresjon** gir oss: en systematisk metode for å finne den rette linjen $y = ax + b$ som passer best til et sett med datapunkter. I dette kapittelet skal vi lære hvordan metoden fungerer, hva den forteller oss, og – like viktig – hva den *ikke* forteller oss.`,
    },
    {
      id: '1t-8-3-n-section1',
      type: 'text',
      content: `## Minste kvadraters metode – den beste linjen

Hva mener vi egentlig med «den beste» linjen? Svaret ligger i **minste kvadraters metode**. Ideen er elegant: for hvert datapunkt beregner vi den vertikale avstanden mellom punktet og linjen. Denne avstanden kalles et **residual**: $e_i = y_i - (ax_i + b)$.

Noen residualer er positive (punktet ligger over linjen) og noen er negative (punktet ligger under). Hvis vi bare summerte dem, ville positive og negative avvik oppheve hverandre, og vi ville ikke fått et godt mål. Derfor **kvadrerer** vi hvert residual og summerer: $S = \\sum e_i^2$. Den linjen som gir den minste summen av kvadrerte avvik er regresjonslinjen.

Kvadreringen har enda en fordel: store avvik straffes ekstra hardt. Et punkt som ligger 4 enheter fra linjen bidrar med $16$ til summen, mens et punkt som ligger 2 enheter fra linjen bare bidrar med $4$. Dermed «prøver» linjen ekstra hardt å unngå store bom.

Du trenger ikke gjøre beregningene for hånd – GeoGebra gjør det med kommandoen \`RegLin(liste)\`. Men det er viktig å forstå prinsippet: regresjonslinjen er den linjen som minimerer summen av de kvadrerte vertikale avstandene. Etter at du har funnet linjen, bør du se på residualene. Dersom de er jevnt spredt rundt null uten noe systematisk mønster, passer den lineære modellen godt. Viser de derimot et buet mønster, trenger du kanskje en annen funksjonstype.`,
    },
    {
      id: '1t-8-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-8-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er et residual i regresjon?',
        options: [
          { id: 'a', text: 'Stigningstallet til regresjonslinjen', isCorrect: false },
          { id: 'b', text: 'Den horisontale avstanden mellom datapunkter', isCorrect: false },
          { id: 'c', text: 'Den vertikale avstanden mellom et datapunkt og regresjonslinjen', isCorrect: true },
          { id: 'd', text: 'Korrelasjonskoeffisienten for datasettet', isCorrect: false },
        ],
        solution: 'Et residual er den vertikale avstanden mellom et observert datapunkt og verdien regresjonslinjen gir: $e_i = y_i - \\hat{y}_i$. Det viser hvor mye modellen «bommer» på det aktuelle punktet.',
      },
    },
    {
      id: '1t-8-3-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-3-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-3-n-section2',
      type: 'text',
      content: `## Et eksempel – issalg og temperatur

La oss se dette i praksis. Iskremkiosken vår har registrert følgende data gjennom en uke: ved 15 grader solgte de 48 is, ved 18 grader 56 is, ved 21 grader 70 is, ved 24 grader 82 is, ved 27 grader 95 is, ved 30 grader 112 is, og ved 33 grader 120 is.

I GeoGebra skriver vi datapunktene som en liste og bruker \`RegLin\`-kommandoen. Resultatet blir omtrent $y = 4{,}1x - 15{,}4$. Nå kan vi tolke dette.

**Stigningstallet** $a \\approx 4{,}1$ forteller oss at for hver grad temperaturen øker, selges det i gjennomsnitt 4,1 flere is. Det er den praktiske betydningen av stigningstallet – det er endringsraten.

**Konstantleddet** $b \\approx -15{,}4$ er mer problematisk. Matematisk sier det at ved 0 grader ville modellen forutsi $-15{,}4$ is. Men du kan ikke selge minus femten is! Det betyr ikke at modellen er dårlig – det betyr bare at den ikke er ment for så lave temperaturer. Modellen passer best i intervallet der vi faktisk har data, altså fra 15 til 33 grader.

Skal vi anslå issalget ved 25 grader? Det er interpolering (25 ligger mellom 24 og 27), og vi får $y = 4{,}1 \\cdot 25 - 15{,}4 = 87$, altså omtrent 87 is. Et rimelig anslag. Hva med 40 grader? Da ekstrapolerer vi (40 er utenfor dataområdet), og anslaget blir mer usikkert.`,
    },
    {
      id: '1t-8-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-8-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Regresjonslinjen for issalg er $y = 4{,}1x - 15{,}4$. Hva betyr stigningstallet 4,1?',
        options: [
          { id: 'a', text: 'Det selges 4,1 is totalt per dag', isCorrect: false },
          { id: 'b', text: 'For hver grad temperaturen stiger, selges det ca. 4,1 flere is', isCorrect: true },
          { id: 'c', text: 'Det er 4,1 grader mellom hvert datapunkt', isCorrect: false },
          { id: 'd', text: 'Korrelasjonen mellom temperatur og issalg er 4,1', isCorrect: false },
        ],
        solution: 'Stigningstallet i en regresjonslinje $y = ax + b$ forteller oss hvor mye $y$ i gjennomsnitt endrer seg når $x$ øker med 1 enhet. Her betyr det at for hver grad mer selges det omtrent 4,1 flere is.',
      },
    },
    {
      id: '1t-8-3-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-3-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-3-n-section3',
      type: 'text',
      content: `## Korrelasjonskoeffisienten $r$ – hvor sterk er sammenhengen?

Vi har funnet regresjonslinjen, men hvor godt passer den egentlig? Her kommer **korrelasjonskoeffisienten** $r$ inn i bildet. Den er et tall mellom $-1$ og $1$ som måler styrken og retningen på den lineære sammenhengen.

Dersom $r = 1$ ligger alle punktene nøyaktig på en linje med positiv stigning – **perfekt positiv korrelasjon**. Dersom $r = -1$ ligger de nøyaktig på en linje med negativ stigning – **perfekt negativ korrelasjon**. Og dersom $r = 0$ er det ingen lineær sammenheng overhodet – punktene er tilfeldig spredt.

I praksis er vi sjelden så heldige at $r$ er nøyaktig $\\pm 1$ eller $0$. Som tommelregel regner vi $|r| > 0{,}8$ som **sterk** korrelasjon, $0{,}5 < |r| < 0{,}8$ som **moderat**, og $|r| < 0{,}5$ som **svak**.

La oss ta et eksempel. Åtte elever rapporterte antall timer brukt på lekser per uke og poengsummen på en prøve. I GeoGebra finner vi regresjonslinjen $y \\approx 6{,}5x + 21{,}5$ og $r \\approx 0{,}997$. Verdien $r = 0{,}997$ er svært nær 1, altså en **sterk positiv korrelasjon** – mer leksetid henger sammen med høyere poengsum.

Men betyr det at leksetid *forårsaker* bedre poengsum? Ikke nødvendigvis. Kanskje er det motiverte elever som både leser mye og gjør det godt, uten at det ene forårsaker det andre. Vi trenger å snakke om forskjellen mellom korrelasjon og kausalitet.`,
    },
    {
      id: '1t-8-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-8-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Du finner at korrelasjonskoeffisienten mellom daglig strømforbruk og utetemperatur er $r \\approx -0{,}95$. Hva betyr dette?',
        options: [
          { id: 'a', text: 'Svak negativ korrelasjon – nesten ingen sammenheng', isCorrect: false },
          { id: 'b', text: 'Sterk positiv korrelasjon – begge øker sammen', isCorrect: false },
          { id: 'c', text: 'Sterk negativ korrelasjon – når temperaturen øker, synker forbruket', isCorrect: true },
          { id: 'd', text: 'Moderat negativ korrelasjon – en viss sammenheng', isCorrect: false },
        ],
        solution: '$|r| = 0{,}95 > 0{,}8$ betyr sterk korrelasjon, og det negative fortegnet betyr at variablene beveger seg i motsatt retning: høyere temperatur henger sammen med lavere strømforbruk. Det gir fysisk mening – du trenger mindre oppvarming når det er varmt ute.',
      },
    },
    {
      id: '1t-8-3-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-3-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-3-n-section4',
      type: 'text',
      content: `## Korrelasjon er IKKE kausalitet

Dette er kanskje den viktigste leksjonen i hele statistikken, og den kan ikke gjentas for ofte: **korrelasjon betyr ikke kausalitet**. Bare fordi to variabler beveger seg sammen, betyr det ikke at den ene forårsaker den andre.

Her er et berømt eksempel: det er sterk positiv korrelasjon mellom issalg og antall drukningsulykker. Betyr det at is *forårsaker* drukning? Selvfølgelig ikke. Begge variablene påvirkes av en tredje faktor – **varmt vær**. Når det er varmt, kjøper folk mer is *og* flere bader. Den tredje variabelen som påvirker begge de andre kalles en **konfunderende variabel**.

Et annet eksempel: det finnes sterk korrelasjon mellom antall brannstasjoner i en by og antall kriminalitetssaker. Flere brannstasjoner fører altså til mer kriminalitet? Nei – begge er konsekvenser av byens **størrelse**. Større byer har flere brannstasjoner *og* flere kriminalitetssaker.

Hva skal til for å påvise kausalitet? Det krever kontrollerte eksperimenter der du endrer én variabel og holder alt annet konstant, eller avanserte statistiske metoder som kontrollerer for konfunderende variabler. En enkel regresjonsanalyse med to variabler kan aldri alene bevise årsakssammenheng.

Neste gang du leser en nyhetsartikkel som sier «Studie viser sammenheng mellom X og Y», tenk deg om: er det korrelasjon eller kausalitet? Hva kan være konfunderende variabler?`,
    },
    {
      id: '1t-8-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-8-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'En elev finner sterk korrelasjon ($r = 0{,}92$) mellom antall brannstasjoner og kriminalitet i ulike byer. Hva er den mest sannsynlige forklaringen?',
        options: [
          { id: 'a', text: 'Brannstasjoner forårsaker kriminalitet', isCorrect: false },
          { id: 'b', text: 'Kriminalitet forårsaker flere brannstasjoner', isCorrect: false },
          { id: 'c', text: 'Det er ingen reell sammenheng – $r = 0{,}92$ er tilfeldig', isCorrect: false },
          { id: 'd', text: 'En konfunderende variabel (byens størrelse) påvirker begge', isCorrect: true },
        ],
        solution: 'Større byer har naturlig nok flere brannstasjoner (mer å beskytte) og flere kriminalitetssaker (flere mennesker). Byens størrelse er den konfunderende variabelen som driver korrelasjonen, ikke en direkte årsakssammenheng.',
      },
    },
    {
      id: '1t-8-3-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-3-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-3-n-section5',
      type: 'text',
      content: `## Prediksjon med regresjonslinjen

Når vi har funnet regresjonslinjen og vurdert at korrelasjonen er sterk nok, kan vi bruke modellen til å lage forutsigelser – men med klokskap.

Ta eksempelet med leksetid og prøvepoeng: $y = 6{,}5x + 21{,}5$ med $r = 0{,}997$. Dataene går fra $x = 2$ til $x = 10$ timer. Hva forventer vi for en elev som leser 9 timer per uke? $y = 6{,}5 \\cdot 9 + 21{,}5 = 80$ poeng. Siden 9 ligger mellom datapunktene 8 og 10, er dette interpolering – og med $r$ så nær 1 er anslaget ganske pålitelig.

Men hva med 20 timer? $y = 6{,}5 \\cdot 20 + 21{,}5 = 151{,}5$ poeng. Hvis prøven har maks 100 poeng, er dette åpenbart umulig. Vi har ekstrapolert langt utenfor dataområdet, og modellen bryter sammen.

Det er også viktig å huske at selv med sterk korrelasjon er regresjonslinjen bare et gjennomsnittlig mønster. Enkeltpersoner kan avvike betydelig. En elev som leser 5 timer kan score 80 poeng (langt over linjen), mens en annen som leser 8 timer kan score 60 (under linjen). Modellen beskriver trenden, ikke individer.

Når du bruker GeoGebra, følg disse stegene: opprett en liste med datapunkter, bruk \`RegLin(liste)\` for å finne linjen, sjekk $r$-verdien for å vurdere styrken, og vurder alltid om du interpolerer eller ekstrapolerer før du stoler på resultatet.`,
    },
    {
      id: '1t-8-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-8-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'En lineær modell for barnets høyde (0–24 måneder) gir $y = 1{,}52x + 52{,}1$. Modellen gir høyde 234,5 cm ved 10 år (120 mnd). Hva er problemet?',
        options: [
          { id: 'a', text: 'Beregningen er feil – riktig svar er 182 cm', isCorrect: false },
          { id: 'b', text: 'Korrelasjonen var for lav til å gjøre prediksjoner', isCorrect: false },
          { id: 'c', text: 'Modellen ekstrapolerer langt utenfor dataområdet, og barn vokser ikke lineært over så lang tid', isCorrect: true },
          { id: 'd', text: 'Lineær regresjon kan aldri brukes for aldersdata', isCorrect: false },
        ],
        solution: 'Modellen er basert på data fra 0 til 24 måneder. Ved 120 måneder ekstrapolerer vi dramatisk. Barns vekst avtar kraftig etter de første leveårene, så den lineære modellen gir urealistiske verdier så langt utenfor dataområdet.',
      },
    },
    {
      id: '1t-8-3-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-8-3-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-8-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Lineær regresjon** er en metode for å finne den rette linjen $y = ax + b$ som passer best til et sett med datapunkter. Den bruker **minste kvadraters metode**: linjen som minimerer summen av de kvadrerte vertikale avstandene (residualene) mellom punktene og linjen.

**Korrelasjonskoeffisienten** $r$ måler styrken og retningen på den lineære sammenhengen. Verdien ligger mellom $-1$ og $1$: sterk korrelasjon for $|r| > 0{,}8$, moderat for $0{,}5 < |r| < 0{,}8$, og svak for $|r| < 0{,}5$. Stigningstallet i regresjonslinjen forteller oss hvor mye $y$ i gjennomsnitt endrer seg per enhet endring i $x$.

**Korrelasjon betyr ikke kausalitet.** To variabler kan korrelere sterkt uten at den ene forårsaker den andre – ofte fordi begge påvirkes av en **konfunderende variabel**. Vær alltid skeptisk til årsaksslutninger basert på ren korrelasjon. Og bruk regresjonslinjen forsiktig: interpolering er generelt pålitelig, men ekstrapolering kan gi urealistiske resultater.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4 NARRATIV: Ikke-lineær regresjon
// ============================================================================

export const CHAPTER_1T_8_4_NARRATIV: TextbookChapter = {
  id: '1t-8-4-narrativ',
  courseId: '1t',
  chapterNumber: '8.4',
  title: 'Ikke-lineær regresjon',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hva vi gjør når den rette linjen ikke duger – fra polynomregresjon og eksponentiell tilpasning til potensregresjon og modellvalg.',
  estimatedMinutes: 40,
  competenceGoals: ['modellere situasjonar, drøfte, presentere og forklare resultata og argumentere for om modellane er gyldige'],
  linkedChapterId: '1t-8-4',
  content: [
    {
      id: '1t-8-4-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-4-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-8-4-n-intro',
      type: 'text',
      content: `## Når den rette linjen svikter

I forrige kapittel lærte vi å dra en rett linje gjennom en sky av punkter. Men hva gjør vi når punktene tydelig *ikke* følger en rett linje? Hvis du plotter dataene og ser en kurve – en bue oppover, en eksponentiell stigning, eller en utflating – da er det på tide å hente frem andre verktøy.

Tenk deg at du studerer hvordan en bakteriekultur vokser over tid. De første timene er veksten moderat, men så eksploderer den. En rett linje ville bomme grovt – den ville underestimere i starten og slutten, og overestimere i midten. Residualene ville vise et tydelig buet mønster, som er et klart signal om at vi trenger en annen modell.

I dette kapittelet skal vi utforske tre typer ikke-lineær regresjon: **polynomregresjon** (tilpasse en andregradskurve eller lignende), **eksponentialregresjon** (tilpasse funksjoner på formen $y = a \\cdot b^x$), og **potensregresjon** (tilpasse funksjoner på formen $y = a \\cdot x^b$). Vi skal også lære å velge mellom dem, ved hjelp av $r^2$-verdien og sunn faglig vurdering.`,
    },
    {
      id: '1t-8-4-n-section1',
      type: 'text',
      content: `## Residualanalyse – din beste venn

Før vi kaster oss inn i nye regresjonstyper, la oss snakke om et verktøy som hjelper oss å avgjøre *om* vi trenger å bytte modell: **residualanalyse**.

Et **residual** er forskjellen mellom den observerte verdien og den verdien modellen forutsier: $e_i = y_i - \\hat{y}_i$. Når vi plotter residualene, altså legger dem inn i et diagram, kan vi lese av mye.

Dersom residualene er **tilfeldig spredt** rundt null – noen over, noen under, uten noe mønster – tyder det på at modellen passer godt. Dataenes variasjon er bare tilfeldig støy som ingen modell kan fange opp.

Men dersom residualene viser et **systematisk mønster**, for eksempel at de først er negative, deretter positive, og så negative igjen (et buet mønster), betyr det at en lineær modell ikke fanger opp krumningen i dataene. Da trenger vi en modell som er buet – kanskje en andregradsfunksjon.

Tenk på det slik: residualene er det som «er igjen» etter at modellen har gjort sitt beste. Hvis det som er igjen har et mønster, har modellen gått glipp av noe viktig. I GeoGebra kan du plotte residualene ved å beregne $y_i - f(x_i)$ for hvert datapunkt, der $f$ er regresjonfunksjonen din.`,
    },
    {
      id: '1t-8-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-8-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Du har gjort lineær regresjon og plotter residualene. De viser et tydelig buet mønster (først negative, så positive, så negative igjen). Hva bør du gjøre?',
        options: [
          { id: 'a', text: 'Beholde den lineære modellen – den har høy $r^2$', isCorrect: false },
          { id: 'b', text: 'Fjerne datapunkter som ikke passer', isCorrect: false },
          { id: 'c', text: 'Prøve en ikke-lineær modell, for eksempel en andregradsfunksjon', isCorrect: true },
          { id: 'd', text: 'Samle inn flere datapunkter for å jevne ut mønsteret', isCorrect: false },
        ],
        solution: 'Et systematisk buet mønster i residualene betyr at dataene har en krumning som den lineære modellen ikke fanger opp. Du bør prøve en ikke-lineær modell som kan beskrive den buede sammenhengen.',
      },
    },
    {
      id: '1t-8-4-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-4-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-4-n-section2',
      type: 'text',
      content: `## Polynomregresjon – buer og vendepunkter

Hvis datapunktene danner en bue – en U-form eller en omvendt U – er en **andregradsfunksjon** $y = ax^2 + bx + c$ et naturlig valg. Og hvis kurven har et mer S-formet mønster med to vendepunkter, prøver vi en **tredjegradsfunksjon** $y = ax^3 + bx^2 + cx + d$.

I GeoGebra bruker vi kommandoen \`RegPoly(liste, grad)\`. For en andregradstilpasning skriver du \`RegPoly(liste, 2)\`, og for tredjegradstilpasning \`RegPoly(liste, 3)\`.

La oss se på et eksempel. En forsker måler hastigheten til en kjemisk reaksjon ved ulike temperaturer. Dataene danner en svak bue oppover. Lineær regresjon gir $y \\approx 0{,}38x - 4{,}0$ med $r^2 \\approx 0{,}98$. Andregradstilpasning gir $y \\approx 0{,}0037x^2 - 0{,}016x + 0{,}33$ med $r^2 \\approx 0{,}999$.

Begge modellene har høy $r^2$, men andegradsmodellen er litt bedre og fanger opp den svake krumningen som den lineære modellen overser. Residualene fra den lineære modellen viser et lett buet mønster, mens residualene fra andegradsmodellen er tilfeldig spredt.

Her er det viktig å bruke skjønn. Hvis forskjellen i $r^2$ er minimal og den lineære modellen gir fornuftige resultater, kan den enklere modellen være å foretrekke. Men dersom du vet at den underliggende mekanismen er buet (for eksempel at reaksjonshastigheten øker akselererende med temperaturen), er andegradsmodellen et bedre faglig valg.`,
    },
    {
      id: '1t-8-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-8-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilken GeoGebra-kommando bruker du for å tilpasse en andregradsfunksjon til en datamengde kalt «liste»?',
        options: [
          { id: 'a', text: '\\texttt{RegLin(liste)}', isCorrect: false },
          { id: 'b', text: '\\texttt{RegPoly(liste, 2)}', isCorrect: true },
          { id: 'c', text: '\\texttt{RegExp(liste)}', isCorrect: false },
          { id: 'd', text: '\\texttt{RegPot(liste)}', isCorrect: false },
        ],
        solution: '`RegPoly(liste, 2)` tilpasser et andregradspolynom ($y = ax^2 + bx + c$). Tallet 2 angir graden. `RegLin` gir lineær, `RegExp` gir eksponentiell, og `RegPot` gir potensregresjon.',
      },
    },
    {
      id: '1t-8-4-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-4-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-4-n-section3',
      type: 'text',
      content: `## Eksponentialregresjon – bakterier, penger og forfall

Noen datasett kjennetegnes av at verdiene dobles (eller halveres) over jevne intervaller. En bakteriekultur som vokser med 50 prosent per time. En sparekonto med rentes rente. Radioaktivt materiale som halveres med jevne mellomrom. Alt dette er **eksponentiell** oppførsel, og vi tilpasser en funksjon på formen $y = a \\cdot b^x$.

I GeoGebra bruker vi \`RegExp(liste)\`. La oss teste det på bakteriedata: vi starter med 100 bakterier, og etter 1, 2, 3, 4, 5 og 6 timer har vi henholdsvis 150, 230, 340, 510, 760 og 1140 bakterier.

GeoGebra gir oss $y \\approx 100 \\cdot 1{,}50^t$. Startverdien $a = 100$ stemmer med våre 100 bakterier ved $t = 0$. Vekstfaktoren $b = 1{,}50$ betyr at bestanden øker med 50 prosent per time.

Hva er **doblingstiden**? Vi løser $1{,}50^t = 2$ ved å ta logaritmen: $t = \\frac{\\ln 2}{\\ln 1{,}50} = \\frac{0{,}693}{0{,}405} \\approx 1{,}71$ timer. Bakteriemengden dobles altså omtrent hver 1 time og 43 minutter.

Eksponentialregresjon fungerer også for nedgang. En metallbit som avkjøles i vann følger omtrent $T \\approx 80 \\cdot 0{,}85^t$ (temperaturen over romtemperatur). Her er $b = 0{,}85 < 1$, som betyr at temperaturen synker med 15 prosent per minutt. Halveringstiden er $\\frac{\\ln 0{,}5}{\\ln 0{,}85} \\approx 4{,}3$ minutter. I dette tilfellet gir en eksponentialmodell $r^2 \\approx 0{,}999$, mens en lineær modell bare gir $r^2 \\approx 0{,}97$ – eksponentialmodellen er klart overlegen.`,
    },
    {
      id: '1t-8-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-8-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'En bakteriekultur modelleres med $y = 100 \\cdot 1{,}50^t$ der $t$ er timer. Hvor mange bakterier er det etter 2 timer?',
        options: [
          { id: 'a', text: '200', isCorrect: false },
          { id: 'b', text: '225', isCorrect: true },
          { id: 'c', text: '300', isCorrect: false },
          { id: 'd', text: '150', isCorrect: false },
        ],
        solution: '$y = 100 \\cdot 1{,}50^2 = 100 \\cdot 2{,}25 = 225$ bakterier. Vekstfaktoren 1,50 betyr 50 % økning per time: etter 1 time har vi $150$, og etter 2 timer $150 \\cdot 1{,}50 = 225$.',
      },
    },
    {
      id: '1t-8-4-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-4-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-4-n-section4',
      type: 'text',
      content: `## Potensregresjon – naturens skaleringslover

Den tredje verktøyet i verktøykassen vår er **potensregresjon**, som tilpasser en funksjon $y = a \\cdot x^b$. I GeoGebra bruker vi \`RegPot(liste)\`.

Et fascinerende eksempel fra biologi: det finnes en sammenheng mellom kroppsmassen til et pattedyr og hjertefrekvensen. En mus (0,03 kg) har hjertefrekvens rundt 600 slag per minutt. Et menneske (70 kg) har rundt 70. En elefant (5000 kg) har bare 25. Potensregresjon gir oss $f \\approx 220 \\cdot m^{-0{,}25}$.

Eksponenten $b \\approx -0{,}25 = -\\frac{1}{4}$ er bemerkelsesverdig. Den forteller oss at hjertefrekvensen avtar som den negative fjerde roten av kroppsmassen. Dobler vi massen, endres frekvensen med en faktor $2^{-0{,}25} \\approx 0{,}84$ – en reduksjon på omtrent 16 prosent. Denne sammenhengen er kjent som en del av **Kleibers lov** og gjelder overraskende godt for nesten alle pattedyr.

Et annet eksempel er bremsestrekninger. Data for en bil ved ulike hastigheter gir potensregresjon $d \\approx 0{,}005 \\cdot v^{2{,}01}$. Eksponenten $b \\approx 2$ betyr at bremsestrekningen er tilnærmet proporsjonal med kvadratet av hastigheten. Det stemmer med fysikken: kinetisk energi er $E_k = \\frac{1}{2}mv^2$, og all denne energien må bremses vekk. Dobler du farten, firedobles bremsestrekningen – en viktig påminnelse om å holde farten nede.`,
    },
    {
      id: '1t-8-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-8-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Bremsestrekningen modelleres med $d = 0{,}005 \\cdot v^2$. Hva skjer med bremsestrekningen dersom farten dobles?',
        options: [
          { id: 'a', text: 'Den dobles', isCorrect: false },
          { id: 'b', text: 'Den tredobles', isCorrect: false },
          { id: 'c', text: 'Den firedobles', isCorrect: true },
          { id: 'd', text: 'Den seksdobles', isCorrect: false },
        ],
        solution: '$d(2v) = 0{,}005 \\cdot (2v)^2 = 0{,}005 \\cdot 4v^2 = 4 \\cdot 0{,}005v^2 = 4d(v)$. Bremsestrekningen firedobles. For en potensfunksjon med eksponent 2 ganges verdien med $k^2$ når variabelen ganges med $k$, altså $2^2 = 4$.',
      },
    },
    {
      id: '1t-8-4-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-4-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-4-n-section5',
      type: 'text',
      content: `## Modellvalg og faren ved overtilpasning

Nå har du fire verktøy: lineær, polynom, eksponentiell og potensregresjon. Hvordan velger du? Her er en strategi.

Først ser du på **$r^2$-verdien** (forklaringsgraden). Den angir hvor stor del av variasjonen i dataene som modellen forklarer. $r^2 = 1$ er perfekt, og vi ønsker typisk $r^2 > 0{,}9$. Men pass på: en høyere grad av polynom vil alltid gi høyere $r^2$, fordi modellen har flere parametre å leke med. Det betyr ikke at den er *bedre*.

Dernest gjør du en **visuell vurdering**. Plott dataene og regresjons-kurven. Ser det fornuftig ut? Fanger modellen opp det generelle mønsteret uten å svinge vilt mellom punktene?

Så gjør du **residualanalyse**. Er residualene tilfeldig spredt? Bra. Viser de et mønster? Da trenger du en annen modell.

Og til slutt – og kanskje viktigst – bruker du **faglig kunnskap**. Vet du at bakterier vokser prosentvis? Bruk eksponentiell. Vet du at bremsestrekning henger sammen med kinetisk energi? Bruk potens med $b = 2$. En modell som er forankret i virkeligheten er mye mer verdt enn en som bare er statistisk tilpasset.

Et farlig feilgrep er **overtilpasning**. Med nok parametre kan du alltid lage en modell som går *nøyaktig* gjennom alle datapunktene. Et polynom av grad $n$ går alltid gjennom $n + 1$ punkter. Men en slik modell fanger opp tilfeldig støy og gir elendige forutsigelser. Velg alltid den **enkleste modellen** som gir god tilpasning.`,
    },
    {
      id: '1t-8-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-8-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Du har 10 datapunkter og finner et tiendegradspolynom som går nøyaktig gjennom alle. Er dette en god modell?',
        options: [
          { id: 'a', text: 'Ja, fordi $r^2 = 1$ betyr perfekt tilpasning', isCorrect: false },
          { id: 'b', text: 'Ja, fordi høy grad alltid betyr høy presisjon', isCorrect: false },
          { id: 'c', text: 'Nei, dette er overtilpasning – modellen fanger opp støy og gir dårlige forutsigelser', isCorrect: true },
          { id: 'd', text: 'Nei, fordi tiendegradspolynomer ikke finnes i GeoGebra', isCorrect: false },
        ],
        solution: 'Et tiendegradspolynom med 10 punkter er et skoleeksempel på overtilpasning. Modellen passer perfekt til akkurat disse punktene, men svinger vilt mellom dem og gir meningsløse forutsigelser. En enklere modell som fanger opp trenden er nesten alltid bedre.',
      },
    },
    {
      id: '1t-8-4-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-8-4-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-8-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Når en rett linje ikke passer dataene, har vi tre hovedalternativer. **Polynomregresjon** tilpasser en andregradsfunksjon (parabel) eller høyere grad, og passer godt for data med buer eller vendepunkter. **Eksponentialregresjon** tilpasser $y = a \\cdot b^x$ og passer for prosentvis vekst eller nedgang – bakterier, renter, radioaktivt forfall. **Potensregresjon** tilpasser $y = a \\cdot x^b$ og passer for fysiske skaleringslover – bremselengder, biologiske sammenhenger, planetbaner.

For å velge mellom modeller bruker vi **$r^2$-verdien** (jo nærmere 1, desto bedre), **visuell vurdering** (ser kurven fornuftig ut?), **residualanalyse** (er residualene tilfeldig spredt?), og **faglig kunnskap** (hva vet vi om fenomenet?). Vær alltid på vakt mot **overtilpasning**: en kompleks modell som passer perfekt til kjente data, men gir dårlige forutsigelser for nye data. Velg den enkleste modellen som gir god tilpasning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5 NARRATIV: Modellvurdering og praktisk bruk
// ============================================================================

export const CHAPTER_1T_8_5_NARRATIV: TextbookChapter = {
  id: '1t-8-5-narrativ',
  courseId: '1t',
  chapterNumber: '8.5',
  title: 'Modellvurdering og praktisk bruk',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan vi sammenligner, vurderer og kritiserer matematiske modeller – og hvorfor den enkleste modellen ofte er den beste.',
  estimatedMinutes: 40,
  competenceGoals: ['modellere situasjonar, drøfte, presentere og forklare resultata og argumentere for om modellane er gyldige'],
  linkedChapterId: '1t-8-5',
  content: [
    {
      id: '1t-8-5-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-5-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-8-5-n-intro',
      type: 'text',
      content: `## Den vanskeligste delen – å vurdere modellen

Gjennom de forrige kapitlene har vi bygget opp en solid verktøykasse: lineær regresjon, polynomregresjon, eksponentialregresjon og potensregresjon. Vi vet hvordan vi tilpasser modeller til data i GeoGebra. Men nå kommer det som kanskje er det viktigste av alt: å vurdere om modellen faktisk er *god*.

For det er ikke nok at $r^2$ er høy. Det er ikke nok at kurven ser pen ut i et diagram. En god modell skal passe til kjente data, gi fornuftige forutsigelser, være forankret i faglig forståelse, og ikke være unødvendig kompleks. Disse fire kravene kan stå i spenning med hverandre, og det er nettopp balansegangen mellom dem som gjør modellvurdering til en kunst like mye som en vitenskap.

I dette kapittelet skal vi lære å sammenligne modeller systematisk, forstå begrensninger, og tenke kritisk om bruk av modeller i media og forskning.`,
    },
    {
      id: '1t-8-5-n-section1',
      type: 'text',
      content: `## Forklaringsgraden $r^2$ – og dens begrensninger

Vi har allerede møtt $r^2$ (forklaringsgraden), som forteller oss hvor stor andel av variasjonen i dataene som modellen forklarer. $r^2 = 1$ betyr at modellen fanger opp all variasjon – perfekt tilpasning. $r^2 = 0$ betyr at modellen ikke forklarer noe som helst. For lineær regresjon er $r^2$ rett og slett kvadratet av korrelasjonskoeffisienten: $r^2 = r \\cdot r$.

Typisk ønsker vi $r^2 > 0{,}9$ for en god modell. Men det finnes viktige nyanser.

For det første: høy $r^2$ betyr ikke at modellen er *riktig*. En modell kan ha $r^2 = 0{,}99$ og likevel gi meningsløse forutsigelser utenfor dataområdet. En andregradsfunksjon tilpasset besøkstall i en dyrepark kan ha fantastisk $r^2$, men den snur nedover og forutsier til slutt *negativt* besøkstall – noe som åpenbart er tull.

For det andre: du kan alltid øke $r^2$ ved å legge til flere parametre. Et tredjegradspolynom gir alltid minst like høy $r^2$ som et andregradspolynom, som alltid gir minst like høy som en rett linje. Men flere parametre betyr ikke bedre modell – det kan bety overtilpasning.

For det tredje: $r^2$ sier ingenting om kausalitet. To variabler kan ha $r^2 = 0{,}95$ uten at det er noen årsakssammenheng mellom dem. Husk den konfunderende variabelen.

Bruk $r^2$ som et av flere verktøy, men aldri som det eneste.`,
    },
    {
      id: '1t-8-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-8-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'En modell har $r^2 = 0{,}99$. Hva kan vi konkludere?',
        options: [
          { id: 'a', text: 'Modellen er garantert riktig', isCorrect: false },
          { id: 'b', text: 'Modellen forklarer 99 % av variasjonen i dataene', isCorrect: true },
          { id: 'c', text: 'Modellen gir gode forutsigelser utenfor dataområdet', isCorrect: false },
          { id: 'd', text: 'Det er en kausal sammenheng mellom variablene', isCorrect: false },
        ],
        solution: '$r^2 = 0{,}99$ betyr at modellen forklarer 99 % av variasjonen i de kjente dataene. Men det sier ingenting om kausalitet, og det garanterer ikke gode forutsigelser ved ekstrapolering. Modellen kan fortsatt være en overtilpasning eller gi urealistiske resultater utenfor dataområdet.',
      },
    },
    {
      id: '1t-8-5-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-5-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-5-n-section2',
      type: 'text',
      content: `## Sammenligning av modeller i praksis

La oss se på et konkret eksempel. Vi har data for gjennomsnittlig strømforbruk per husstand i Norge fra 2000 til 2020, og vi prøver to modeller.

Den **lineære modellen** gir $y = -162t + 21\\,470$ med $r^2 = 0{,}997$. Den sier at forbruket synker med 162 kWh per år – en fast nedgang uavhengig av nåværende nivå.

Den **eksponentielle modellen** gir $y = 21\\,500 \\cdot 0{,}9917^t$ med $r^2 = 0{,}998$. Den sier at forbruket synker med omtrent 0,83 prosent per år – en prosentvis nedgang.

Begge modellene passer nesten like godt til dataene. Hvordan velger vi?

For kort tids ekstrapolering gir begge lignende resultater. Men for lang tid avslører forskjellene seg. Den lineære modellen når null rundt år 2132 og gir deretter *negativt* strømforbruk – noe som er fysisk umulig. Den eksponentielle modellen nærmer seg null, men blir aldri negativ. Det er mer realistisk.

Faglig sett er prosentvis nedgang (energieffektivisering) mer naturlig enn en konstant årlig reduksjon. Nye teknologier gir gjerne prosentvise forbedringer, ikke faste. Derfor er den eksponentielle modellen trolig bedre for lengre fremskrivninger, selv om begge er usikre langt frem i tid.

Dette illustrerer et viktig poeng: to modeller kan passe nesten like godt til historiske data, men gi svært forskjellige forutsigelser. Valget mellom dem krever faglig vurdering, ikke bare statistikk.`,
    },
    {
      id: '1t-8-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-8-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'En lineær modell for strømforbruk gir negativt forbruk etter år 2132. Hva viser dette?',
        options: [
          { id: 'a', text: 'At beregningen er gjort feil', isCorrect: false },
          { id: 'b', text: 'At strømforbruket faktisk vil bli negativt i 2132', isCorrect: false },
          { id: 'c', text: 'At lineære modeller aldri fungerer for strømforbruk', isCorrect: false },
          { id: 'd', text: 'At modellen har begrensninger og ikke gjelder for all fremtid', isCorrect: true },
        ],
        solution: 'Negativt strømforbruk er fysisk umulig. Dette viser at den lineære modellen bare gjelder innenfor et begrenset område og bryter sammen ved langvarig ekstrapolering. Alle modeller har slike begrensninger.',
      },
    },
    {
      id: '1t-8-5-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-5-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-5-n-section3',
      type: 'text',
      content: `## Gyldighetsområde og modellens begrensninger

Alle matematiske modeller har begrensninger. La oss systematisere de viktigste.

**Gyldighetsområde.** Modellen gjelder bare for et visst område av $x$-verdier. Utenfor dette området kan den gi meningsløse resultater – negativ befolkning, temperatur under absolutt nullpunkt, eller mer elbiler enn det finnes mennesker. Når du bruker en modell, bør du alltid spørre: «For hvilke verdier av $x$ gir dette mening?»

**Forenklinger.** Enhver modell velger ut noen faktorer og ignorerer andre. En modell for fritt fall ignorerer luftmotstand. En befolkningsmodell ignorerer kriger og pandemier. Spørsmålet er om de ignorerte faktorene er viktige nok til å endre resultatet vesentlig.

**Tidsbegrensning.** En modell som passer godt nå, passer ikke nødvendigvis om 20 år. Trender endrer seg. Teknologier utvikles. Politikk skifter. En eksponentiell vekstmodell for elbiler fungerer bra i oppstartsfasen, men markedet vil mettes.

**Datatilpasning er ikke forståelse.** En modell med høy $r^2$ beskriver et mønster i dataene, men den forklarer ikke *hvorfor* mønsteret finnes. Korrelasjonen mellom sjokoladeforbruk og nobelprisvinnere er sterk ($r \\approx 0{,}79$), men det betyr ikke at sjokolade gjør folk smartere. Begge variablene korrelerer med velstand og utdanningsnivå.

Å forstå modellens begrensninger er ikke en svakhet – det er en styrke. En person som vet hvor modellen svikter, bruker den mye klokere enn en som tror blindt på den.`,
    },
    {
      id: '1t-8-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-8-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilken av disse er IKKE en typisk begrensning ved matematiske modeller?',
        options: [
          { id: 'a', text: 'Modellen gjelder bare innenfor et bestemt gyldighetsområde', isCorrect: false },
          { id: 'b', text: 'Modellen forenkler virkeligheten og ignorerer noen faktorer', isCorrect: false },
          { id: 'c', text: 'Modellen kan bare brukes hvis $r^2 > 0{,}99$', isCorrect: true },
          { id: 'd', text: 'Modellen kan gi urealistiske verdier ved lang ekstrapolering', isCorrect: false },
        ],
        solution: 'Det finnes ingen fast grense for $r^2$. Mange nyttige modeller har $r^2$ godt under 0,99. De øvrige alternativene er alle reelle begrensninger som gjelder for enhver matematisk modell.',
      },
    },
    {
      id: '1t-8-5-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-5-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-5-n-section4',
      type: 'text',
      content: `## En helhetlig analyse – dyreparkeksempelet

La oss øve oss på en fullstendig modellvurdering. En dyrepark har registrert antall gjester per år de siste 8 årene: 15 000, 28 000, 52 000, 80 000, 95 000, 103 000, 108 000 og 110 000.

Visuelt ser vi rask vekst i begynnelsen som flater ut. Vi prøver tre modeller.

**Lineær modell:** $y \\approx 14{,}0t + 9{,}5$ med $r^2 \\approx 0{,}90$. Passer dårligst. Fanger ikke opp utflatingen.

**Andregradsfunksjon:** $y \\approx -2{,}4t^2 + 35{,}5t - 17{,}5$ med $r^2 \\approx 0{,}99$. Passer best til dataene. Men den har et toppunkt ved $t \\approx 7{,}4$ og forutsier deretter at besøkstallet *synker*. Er det realistisk? Kanskje, kanskje ikke. Hvis vi forventer at besøket stabiliserer seg (men ikke synker), er modellen problematisk.

**Potensmodell:** $y \\approx 17{,}8 \\cdot t^{0{,}92}$ med $r^2 \\approx 0{,}95$. Eksponenten $b < 1$ gir avtagende vekst uten å snu nedover, noe som stemmer bedre med forventningen om stabilisering.

Hva anbefaler vi? For interpolering er andegradsmodellen best. For lengre fremskrivninger er potensmodellen tryggere fordi den ikke forutsier nedgang. Og den lineære modellen? Den er for enkel for dette datasettet.

**Parsimonitetsprinsippet** (Ockhams barberkniv) sier: velg den enkleste modellen som gir god tilpasning. Men «god tilpasning» må inkludere fornuftige forutsigelser, ikke bare høy $r^2$.`,
    },
    {
      id: '1t-8-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-8-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Parsimonitetsprinsippet (Ockhams barberkniv) sier at vi bør:',
        options: [
          { id: 'a', text: 'Alltid velge modellen med høyest $r^2$', isCorrect: false },
          { id: 'b', text: 'Alltid bruke lineær regresjon', isCorrect: false },
          { id: 'c', text: 'Velge den enkleste modellen som gir god tilpasning', isCorrect: true },
          { id: 'd', text: 'Unngå alle modeller med flere enn to parametre', isCorrect: false },
        ],
        solution: 'Parsimonitetsprinsippet handler om å velge den enkleste modellen som gir en tilstrekkelig god beskrivelse av dataene. Det betyr ikke at vi alltid velger lineær – men vi velger ikke en kompleks modell når en enklere gjør jobben like godt.',
      },
    },
    {
      id: '1t-8-5-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-8-5-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-8-5-n-section5',
      type: 'text',
      content: `## Kritisk vurdering – modeller i media og samfunn

Matematiske modeller er overalt i samfunnet. Klimamodeller forutsier global oppvarming. Epidemimodeller estimerer smittespredning. Økonomiske modeller påvirker politiske beslutninger. Det er viktig at du kan stille kritiske spørsmål til slike modeller.

**Hvilke data er modellen basert på?** Er dataene pålitelige? Er de representative? Data fra én by gjelder ikke nødvendigvis for et helt land. Data fra ett tiår gjelder ikke nødvendigvis for det neste.

**Hvilken funksjonstype er valgt?** Er det faglig grunnlag for akkurat den typen, eller er den bare valgt fordi den gir høy $r^2$?

**Er det interpolering eller ekstrapolering?** Klimamodeller som forutsier 50 år frem i tid ekstrapolerer kraftig. Det betyr ikke at de er ubrukelige – men usikkerheten er stor, og det bør kommuniseres tydelig.

**Hvilke forenklinger er gjort?** Under pandemien ga ulike epidemimodeller svært forskjellige forutsigelser, nettopp fordi de gjorde ulike antagelser om smitterate, tiltak og adferd. Ingen av dem var «feil» – de belyste ulike scenarier.

**Hvem står bak?** Kan det være interessekonflikter? En modell laget av oljeindustrien for å forutsi energibehov kan ha andre antagelser enn en modell laget av miljøorganisasjoner.

Modeller er kraftige verktøy, men de er ikke sannheter. De er forenklinger som hjelper oss å tenke klarere om komplekse fenomener. Den som forstår modellens begrensninger, bruker den best.`,
    },
    {
      id: '1t-8-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-8-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'En avis skriver: «Forskning viser sterk korrelasjon mellom sjokoladeforbruk og nobelpriser per innbygger. Sjokolade gjør deg smartere!» Hva er galt?',
        options: [
          { id: 'a', text: 'Korrelasjonen er trolig beregnet feil', isCorrect: false },
          { id: 'b', text: 'Artikkelen forveksler korrelasjon med kausalitet – konfunderende variabler som velstand forklarer sammenhengen', isCorrect: true },
          { id: 'c', text: 'Korrelasjon mellom land-data er alltid meningsløs', isCorrect: false },
          { id: 'd', text: 'Man kan ikke bruke regresjon på matforbruk', isCorrect: false },
        ],
        solution: 'Artikkelen trekker en kausal slutning (sjokolade gjør deg smartere) fra en ren korrelasjon. Konfunderende variabler som velstand, utdanningsnivå og klima påvirker både sjokoladeforbruk og antall nobelprisvinnere. Korrelasjonen er reell, men årsaksslutningen er feil.',
      },
    },
    {
      id: '1t-8-5-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-8-5-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-8-5-n-summary',
      type: 'text',
      content: `## Oppsummering

En god modell oppfyller fire krav: den passer til kjente data (høy $r^2$), gir fornuftige forutsigelser, er forankret i faglig kunnskap, og er ikke unødvendig kompleks. **Forklaringsgraden** $r^2$ er et nyttig verktøy, men den er ikke tilstrekkelig alene – høy $r^2$ garanterer verken kausalitet, riktige forutsigelser, eller at modellen er den beste.

Når du sammenligner modeller, se på $r^2$, residualplot, visuell tilpasning og faglig rimelighet. **Parsimonitetsprinsippet** (Ockhams barberkniv) sier at du bør velge den enkleste modellen som gir en tilfredsstillende beskrivelse.

Alle modeller har begrensninger: et **gyldighetsområde** de fungerer innenfor, forenklinger de gjør, og en tidsbegrensning for hvor lenge de er relevante. **Interpolering** er generelt pålitelig, mens **ekstrapolering** er risikabelt og krever stor forsiktighet. Ulike modeller som passer like godt til historiske data kan gi vidt forskjellige forutsigelser.

Til slutt: tenk kritisk om modeller i media og forskning. Spør hvilke data de bygger på, hvilke forenklinger som er gjort, og om det er korrelasjon eller kausalitet. En modell er et verktøy for å tenke – ikke en fasit.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const MATEMATIKK_1T_MODELLERING_NARRATIV_CHAPTERS = [
  CHAPTER_1T_8_1_NARRATIV,
  CHAPTER_1T_8_2_NARRATIV,
  CHAPTER_1T_8_3_NARRATIV,
  CHAPTER_1T_8_4_NARRATIV,
  CHAPTER_1T_8_5_NARRATIV,
];
