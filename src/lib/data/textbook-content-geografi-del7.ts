/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geografi VG1/VG2 - Del 7: Globalisering og utvikling
 *
 * Dekker LK20-kompetansemål for geografi
 * Delkapitler 7.1 - 7.6
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Globalisering – økonomi og handel
// ============================================================================

export const CHAPTER_GEOGRAFI_7_1: TextbookChapter = {
  id: 'geografi-1-7-1',
  courseId: 'geografi',
  chapterNumber: '7.1',
  title: 'Globalisering – økonomi og handel',
  description: 'Hva globalisering er, hvordan økonomisk globalisering fungerer, og hvilken rolle internasjonale handelsavtaler spiller.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for globalisering og drøfte ulike konsekvenser av globalisering',
    'beskrive hvordan internasjonal handel påvirker ulike land og regioner',
  ],
  content: [
    {
      id: 'geo-7-1-intro',
      type: 'text',
      content: `# Globalisering – økonomi og handel

Verden har aldri vært mer sammenkoblet enn i dag. Varer produsert i Asia selges i Europa, nyheter fra Afrika spres på sekunder over hele kloden, og kapital flyttes mellom kontinenter med et tastetrykk. Denne utviklingen kalles **globalisering** – en prosess som har akselerert kraftig de siste tiårene og som former livene våre på grunnleggende måter.

## Hva er globalisering?

Globalisering er en prosess der land og folk knyttes tettere sammen gjennom økt handel, kommunikasjon, migrasjon og kulturutveksling. Globaliseringen har flere dimensjoner:

- **Økonomisk globalisering**: Friere flyt av varer, tjenester og kapital over landegrensene
- **Kulturell globalisering**: Spredning av ideer, verdier, kunst og levemåter
- **Politisk globalisering**: Fremveksten av internasjonale organisasjoner og avtaler
- **Teknologisk globalisering**: Internett, transport og kommunikasjon binder verden sammen

Selv om globalisering ikke er et nytt fenomen – allerede Silkeveien koblet Asia og Europa for over 2000 år siden – er tempoet og omfanget av dagens globalisering historisk enestående.`,
    },
    {
      id: 'geo-7-1-def-globalisering',
      type: 'definition',
      title: 'Globalisering',
      content: 'Globalisering er en prosess der land og folk knyttes tettere sammen gjennom økt flyt av varer, tjenester, kapital, informasjon, teknologi og mennesker over landegrensene. Prosessen fører til økt gjensidig avhengighet mellom land og regioner.',
    },
    {
      id: 'geo-7-1-okonomisk',
      type: 'text',
      content: `## Økonomisk globalisering og frihandel

Økonomisk globalisering innebærer at markeder i ulike land kobles sammen. Sentrale kjennetegn er:

### Frihandel
Frihandel betyr at varer og tjenester kan krysse landegrenser uten toll og handelshindringer. Tanken bak er at land bør spesialisere seg på det de produserer mest effektivt (komparative fortrinn), og handle med andre for resten. Dette skal gi lavere priser, større utvalg og økonomisk vekst.

### Kapitalflyt
I en globalisert økonomi kan kapital flyttes raskt mellom land. Utenlandske direkteinvesteringer (FDI) betyr at selskaper investerer i andre land, for eksempel ved å bygge fabrikker. Finanskapital flyttes gjennom aksjemarkedene og bankene.

### Deregulering
Mange land har de siste tiårene fjernet reguleringer som hindret internasjonal handel og kapitalflyt. Deregulering har åpnet markeder og gjort det lettere for selskaper å operere på tvers av grenser.

Tilhengere mener frihandel skaper vekst for alle. Kritikere hevder det forsterker ulikhet, fordi rike land og store selskaper drar størst nytte.`,
    },
    {
      id: 'geo-7-1-def-frihandel',
      type: 'definition',
      title: 'Frihandel',
      content: 'Frihandel er et system der varer og tjenester kan handles fritt mellom land uten toll, kvoter eller andre handelshindringer. Frihandel bygger på teorien om komparative fortrinn – at alle land tjener på å spesialisere seg og handle med hverandre.',
    },
    {
      id: 'geo-7-1-multinasjonale',
      type: 'text',
      content: `## Multinasjonale selskaper og globale verdikjeder

**Multinasjonale selskaper** (MNS) er bedrifter som har virksomhet i flere land. De er sentrale drivkrefter i den økonomiske globaliseringen. Eksempler er Apple, Samsung, Nestlé og Equinor.

### Globale verdikjeder
Et moderne produkt involverer gjerne mange land. En mobiltelefon kan ha:
- **Råmaterialer** fra Kongo (kobolt) og Australia (litium)
- **Komponenter** produsert i Japan og Sør-Korea
- **Montering** i Kina eller Vietnam
- **Design og programvare** fra USA
- **Salg** over hele verden

Denne arbeidsdelingen kalles en **global verdikjede**. Den gjør produksjonen effektiv, men skaper også avhengighet og sårbarhet – som ble tydelig under covid-19-pandemien da forsyningskjedene brøt sammen.

### Konsekvenser
Multinasjonale selskaper skaper arbeidsplasser og økonomisk vekst i vertslandet, men de kan også utnytte svake reguleringer, lave lønninger og dårlige arbeidsforhold i fattige land.`,
    },
    {
      id: 'geo-7-1-def-verdikjede',
      type: 'definition',
      title: 'Global verdikjede',
      content: 'En global verdikjede beskriver alle leddene i produksjonen av en vare eller tjeneste – fra råvareutvinning til ferdig produkt – når disse leddene er fordelt på flere land. Hvert ledd tilfører verdi til produktet.',
    },
    {
      id: 'geo-7-1-wto',
      type: 'text',
      content: `## WTO og handelsavtaler

### Verdens handelsorganisasjon (WTO)
WTO ble opprettet i 1995 og har som mål å fremme frihandel og løse handelskonflikter mellom land. Organisasjonen har over 160 medlemsland og arbeider for å redusere tollbarrierer og handelshindringer.

Sentrale prinsipper i WTO:
- **Bestevilkårsbehandling**: Handelsfordeler gitt til ett land skal gjelde alle WTO-medlemmer
- **Nasjonal behandling**: Importerte varer skal behandles likt som innenlandske
- **Tvisteløsning**: WTO har et system for å avgjøre handelskonflikter

### Regionale handelsavtaler
I tillegg til WTO finnes mange regionale avtaler:
- **EU**: Verdens mest integrerte frihandelsområde
- **EØS-avtalen**: Gir Norge tilgang til EUs indre marked
- **USMCA**: Handelsavtale mellom USA, Mexico og Canada
- **RCEP**: Verdens største handelsavtale (Asia og Stillehavsregionen)

Noen kritiserer WTO for å favorisere rike land og for å sette handelshensyn over miljø og arbeiderrettigheter.`,
    },
    {
      id: 'geo-7-1-example',
      type: 'example',
      title: 'T-skjortas globale reise',
      problem: 'Beskriv den globale verdikjeden for en enkel bomullst-skjorte.',
      solution: `**T-skjortas verdikjede:**

1. **Bomullsdyrking**: Bomullen dyrkes i India eller Usbekistan
2. **Spinning og veving**: Garnet spinnes og veves til stoff i Bangladesh eller Tyrkia
3. **Farging og behandling**: Stoffet farges, ofte i Kina
4. **Søm og montering**: T-skjorten sys i Bangladesh, Vietnam eller Etiopia der lønningene er lave
5. **Transport**: Skippes til Europa i containere
6. **Distribusjon og salg**: Selges i norske butikker for kanskje 200 kroner

**Verdiskaping**: Arbeiderne som syr skjorten får gjerne bare 1–3 % av utsalgsprisen. Mesteparten av verdien tilfaller merkevareeier, transport og detaljhandel. Dette illustrerer ulikhetene i globale verdikjeder.`,
    },
    {
      id: 'geo-7-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

Globalisering er en prosess der verden knyttes tettere sammen økonomisk, kulturelt, politisk og teknologisk. Økonomisk globalisering innebærer friere handel, kapitalflyt og globale verdikjeder. Multinasjonale selskaper er viktige drivkrefter. WTO og handelsavtaler regulerer internasjonal handel, men det er uenighet om globaliseringen gagner alle likt eller forsterker ulikhet.`,
    },
  
    {
      id: 'geo-7-1-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- WTO (Verdens handelsorganisasjon): wto.org
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.
- Verdensbanken: data.worldbank.org
- Store norske leksikon: snl.no (globalisering)`,
    },
  ],
  exercises: [
    {
      id: 'geo-7-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er globalisering?',
      options: [
        { id: 'a', text: 'En prosess der land og folk knyttes tettere sammen gjennom økt handel, kommunikasjon og kulturutveksling', isCorrect: true },
        { id: 'b', text: 'En politisk ideologi som handler om å fjerne alle nasjonalstater', isCorrect: false },
        { id: 'c', text: 'Et annet ord for industrialisering', isCorrect: false },
        { id: 'd', text: 'En prosess som kun påvirker rike, vestlige land', isCorrect: false },
      ],
      solution: 'Globalisering er en prosess der land og folk knyttes tettere sammen gjennom økt flyt av varer, tjenester, kapital, informasjon og mennesker over landegrensene. Det er ikke en politisk ideologi, men en faktisk utviklingsprosess som påvirker hele verden.',
    },
    {
      id: 'geo-7-1-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva menes med en global verdikjede?',
      options: [
        { id: 'a', text: 'At alle leddene i produksjonen av en vare er fordelt på flere land', isCorrect: true },
        { id: 'b', text: 'At alle varer produseres lokalt og selges internasjonalt', isCorrect: false },
        { id: 'c', text: 'At verdien av en vare bestemmes av WTO', isCorrect: false },
        { id: 'd', text: 'At multinasjonale selskaper eier alle fabrikker i verden', isCorrect: false },
      ],
      solution: 'En global verdikjede betyr at de ulike leddene i produksjonen – fra råvareutvinning til ferdig produkt – er fordelt på flere land. Hvert ledd tilfører verdi til produktet.',
    },
    {
      id: 'geo-7-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for to fordeler og to ulemper ved økonomisk globalisering.',
      solution: 'Fordeler: (1) Frihandel gir lavere priser og større vareutvalg for forbrukerne. (2) Multinasjonale selskaper skaper arbeidsplasser og økonomisk vekst i utviklingsland. Ulemper: (1) Rike land og store selskaper kan dra uforholdsmessig stor nytte, noe som forsterker global ulikhet. (2) Globale verdikjeder kan innebære utnytting av arbeidere i fattige land med lave lønninger og dårlige arbeidsforhold.',
    },
    {
      id: 'geo-7-1-ex4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket av disse er et sentralt prinsipp i WTO?',
      options: [
        { id: 'a', text: 'Bestevilkårsbehandling – handelsfordeler gitt til ett land skal gjelde alle medlemmer', isCorrect: true },
        { id: 'b', text: 'Alle land skal ha lik BNP', isCorrect: false },
        { id: 'c', text: 'Bare rike land kan delta i handelsforhandlinger', isCorrect: false },
        { id: 'd', text: 'WTO bestemmer prisene på alle varer i verden', isCorrect: false },
      ],
      solution: 'Bestevilkårsbehandling er et sentralt prinsipp i WTO som betyr at handelsfordeler gitt til ett medlemsland automatisk skal gjelde for alle andre WTO-medlemmer. Dette hindrer diskriminering mellom handelspartnere.',
    },
    {
      id: 'geo-7-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva som menes med komparative fortrinn, og gi et eksempel på hvordan dette prinsippet fungerer i internasjonal handel.',
      solution: 'Komparative fortrinn betyr at et land bør spesialisere seg på å produsere varer det kan produsere relativt mest effektivt sammenlignet med andre land, og handle for resten. Eksempel: Norge har komparative fortrinn innen olje- og gassutvinning og fiskeri på grunn av naturressursene, mens Bangladesh har komparative fortrinn innen tekstilproduksjon på grunn av lave lønnskostnader. Ved at begge landene spesialiserer seg og handler med hverandre, kan begge i teorien oppnå høyere velferd enn om de forsøkte å produsere alt selv.',
    },
  ],
};

// ============================================================================
// Kapittel 7.2: Kulturell globalisering
// ============================================================================

export const CHAPTER_GEOGRAFI_7_2: TextbookChapter = {
  id: 'geografi-1-7-2',
  courseId: 'geografi',
  chapterNumber: '7.2',
  title: 'Kulturell globalisering',
  description: 'Hvordan kultur spres over landegrensene, hva amerikanisering og glokalisering innebærer, og hvilken rolle digitale medier spiller.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte kulturelle konsekvenser av globalisering',
    'vurdere hvordan globalisering påvirker identitet og kulturelt mangfold',
  ],
  content: [
    {
      id: 'geo-7-2-intro',
      type: 'text',
      content: `# Kulturell globalisering

Mens økonomisk globalisering handler om handel og kapital, dreier kulturell globalisering seg om spredning av ideer, verdier, språk, kunst, mat, mote og levemåter på tvers av landegrenser. I dag kan en tenåring i Nairobi følge de samme influencerne, høre den samme musikken og spise den samme fastfooden som en tenåring i Oslo.

## Kulturspredning og kulturmøter

Kulturer har alltid påvirket hverandre gjennom handel, migrasjon og erobring. Det som er nytt i vår tid, er **hastigheten** og **omfanget** av kulturspredningen. Internett, sosiale medier og billige reiser gjør at kulturelle impulser kan nå hele verden på timer.

Kulturmøter kan ha ulike utfall:
- **Kulturell utveksling**: Gjensidig påvirkning der begge kulturer berikes
- **Kulturell assimilering**: En kultur opptar elementer fra en dominerende kultur og mister egne trekk
- **Kulturell motstand**: Bevisst motstand mot utenlandsk kulturell påvirkning
- **Hybridkultur**: Nye kulturuttrykk som oppstår i møtet mellom ulike kulturer`,
    },
    {
      id: 'geo-7-2-def-kulturell-glob',
      type: 'definition',
      title: 'Kulturell globalisering',
      content: 'Kulturell globalisering er prosessen der kulturelle uttrykk, verdier og praksiser spres over landegrensene, slik at mennesker i ulike deler av verden får tilgang til og påvirkes av de samme kulturelle impulsene. Dette kan føre til både økt mangfold og kulturell homogenisering.',
    },
    {
      id: 'geo-7-2-amerikanisering',
      type: 'text',
      content: `## Amerikanisering og vestlig dominans

En vanlig kritikk av kulturell globalisering er at den i stor grad er **ensidig**: Kulturelle impulser strømmer hovedsakelig fra vest (og spesielt fra USA) til resten av verden. Dette kalles **amerikanisering** eller **vestliggjøring**.

### Kjennetegn på amerikanisering
- Utbredelse av amerikanske merkevarer (McDonald's, Coca-Cola, Nike)
- Dominans av Hollywood-filmer og amerikansk TV
- Engelsk som globalt språk (lingua franca)
- Spredning av vestlige verdier som individualisme og forbrukerkultur

### Kulturimperialisme
Noen forskere bruker begrepet **kulturimperialisme** – at vestlige land gjennom sin dominans innen media, underholdning og teknologi påtvinger resten av verden sine verdier og livsformer. Kritikere mener dette truer lokale kulturer, språk og tradisjoner.

### Motargumenter
Andre peker på at globaliseringen ikke bare går én vei. Japansk animasjon, koreansk popmusikk (K-pop), indisk Bollywood og afrikansk musikk har alle fått globalt gjennomslag. Mennesker er heller ikke passive mottakere – de tilpasser og omformer kulturelle impulser til sin egen kontekst.`,
    },
    {
      id: 'geo-7-2-def-amerikanisering',
      type: 'definition',
      title: 'Amerikanisering',
      content: 'Amerikanisering er spredning av amerikansk kultur, verdier og levemåter til andre deler av verden gjennom populærkultur, merkevarer, teknologi og media. Begrepet brukes ofte kritisk for å beskrive en ensidig kulturstrøm som kan true lokalt kulturelt mangfold.',
    },
    {
      id: 'geo-7-2-glokalisering',
      type: 'text',
      content: `## Glokalisering – når det globale møter det lokale

Begrepet **glokalisering** er en sammenslåing av «globalisering» og «lokalisering». Det beskriver prosessen der globale fenomener tilpasses lokale forhold og kulturer.

### Eksempler på glokalisering
- **McDonald's** tilbyr ulike menyer i ulike land: McFalafel i Midtøsten, teriyaki-burger i Japan, McIndian i India
- **IKEA** tilpasser produktene sine til ulike boformer og kulturelle preferanser
- **Bollywood** kombinerer vestlige filmteknikker med indisk musikk, dans og fortellertradisjon
- **K-pop** blander vestlig popmusikk med koreansk estetikk og språk

Glokalisering viser at globalisering ikke nødvendigvis fører til at alle kulturer blir like. I stedet oppstår det nye, hybride kulturuttrykk der det globale og det lokale smelter sammen.`,
    },
    {
      id: 'geo-7-2-def-glokalisering',
      type: 'definition',
      title: 'Glokalisering',
      content: 'Glokalisering er en prosess der globale produkter, ideer eller kulturuttrykk tilpasses og omformes til lokale forhold, tradisjoner og preferanser. Begrepet kombinerer «globalisering» og «lokalisering» og viser at det globale og det lokale kan sameksistere.',
    },
    {
      id: 'geo-7-2-digital',
      type: 'text',
      content: `## Sosiale medier og digital globalisering

Internett og sosiale medier har revolusjonert kulturell globalisering. Plattformer som TikTok, Instagram, YouTube og X (tidligere Twitter) gjør at kulturelle uttrykk kan spre seg viralt på timer.

### Konsekvenser av digital globalisering
- **Demokratisering**: Hvem som helst kan dele kulturuttrykk med verden – ikke bare store mediehus
- **Mangfold**: Lokale kulturer kan nå et globalt publikum, for eksempel afrikanske artister som når ut gjennom Spotify
- **Filterbobler**: Algoritmer kan forsterke visse perspektiver og begrense mangfoldet av hva vi eksponeres for
- **Språkdominans**: Engelsk dominerer på nett, noe som kan marginalisere andre språk

### Digital kløft
Tilgang til internett er ujevnt fordelt. I 2024 hadde rundt 95 % av befolkningen i Europa internettilgang, mens i deler av Afrika sør for Sahara var andelen under 40 %. Denne **digitale kløften** betyr at ikke alle har like muligheter til å delta i den digitale globaliseringen.`,
    },
    {
      id: 'geo-7-2-example',
      type: 'example',
      title: 'K-pop som glokalisering',
      problem: 'Forklar hvordan K-pop (koreansk popmusikk) er et eksempel på glokalisering.',
      solution: `**K-pop som glokalisering:**

K-pop kombinerer elementer fra vestlig popmusikk (popmelodier, R&B, hiphop) med koreansk språk, estetikk og underholdningsindustri. Resultatet er et hybridprodukt som verken er rent vestlig eller tradisjonelt koreansk.

**Globale elementer**: Vestlige musikkstiler, engelskspråklige refreng, profesjonell markedsføring via sosiale medier
**Lokale elementer**: Koreansk språk, koreansk treningssystem for artister, fokus på visuell estetikk og koreografi

K-pop har blitt et globalt fenomen (f.eks. BTS, BLACKPINK) og sprer koreansk kultur til hele verden. Samtidig tilpasses K-pop til lokale markeder – for eksempel synger gruppene ofte delvis på engelsk og japansk. Dette viser at kulturell påvirkning kan gå fra «ikke-vestlige» land til resten av verden.`,
    },
    {
      id: 'geo-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

Kulturell globalisering innebærer at kulturelle impulser spres over landegrensene i et stadig raskere tempo. Mens kritikere peker på amerikansering og kulturimperialisme, viser begrepet glokalisering at lokale kulturer aktivt tilpasser og omformer globale impulser. Sosiale medier og internett har demokratisert kulturspredningen, men den digitale kløften gjør at ikke alle har like muligheter til å delta.`,
    },
  
    {
      id: 'geo-7-2-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- UNESCO: unesco.org
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.
- Store norske leksikon: snl.no (kulturell globalisering)
- Hylland Eriksen, T. (2014). *Globalization: The Key Concepts*. Bloomsbury.`,
    },
  ],
  exercises: [
    {
      id: 'geo-7-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med glokalisering?',
      options: [
        { id: 'a', text: 'At globale produkter og kulturuttrykk tilpasses lokale forhold og tradisjoner', isCorrect: true },
        { id: 'b', text: 'At alle kulturer i verden blir helt like', isCorrect: false },
        { id: 'c', text: 'At lokale kulturer forsvinner på grunn av globalisering', isCorrect: false },
        { id: 'd', text: 'At globalisering bare skjer på lokalt nivå', isCorrect: false },
      ],
      solution: 'Glokalisering er en sammenslåing av «globalisering» og «lokalisering». Begrepet beskriver hvordan globale fenomener tilpasses lokale forhold – for eksempel når McDonald\'s tilbyr ulike menyer i ulike land.',
    },
    {
      id: 'geo-7-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med amerikanisering, og gi to eksempler.',
      solution: 'Amerikanisering er spredningen av amerikansk kultur, verdier og levemåter til resten av verden. Eksempler: (1) Utbredelsen av amerikanske hurtigmatkjeder som McDonald\'s og Starbucks over hele verden. (2) Dominansen av Hollywood-filmer og amerikansk TV-underholdning i kinoer og på strømmetjenester globalt.',
    },
    {
      id: 'geo-7-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva menes med den digitale kløften?',
      options: [
        { id: 'a', text: 'Ujevn tilgang til internett og digital teknologi mellom ulike land og regioner', isCorrect: true },
        { id: 'b', text: 'At internett er delt opp i ulike nettverk', isCorrect: false },
        { id: 'c', text: 'At alle land bruker ulike sosiale medier', isCorrect: false },
        { id: 'd', text: 'At digital teknologi skader miljøet', isCorrect: false },
      ],
      solution: 'Den digitale kløften viser til ulikhetene i tilgang til internett og digital teknologi mellom rike og fattige land. Mens nesten alle i Europa har tilgang til internett, er andelen langt lavere i mange afrikanske land. Dette betyr at ikke alle har like muligheter til å delta i den digitale globaliseringen.',
    },
    {
      id: 'geo-7-2-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft påstanden: «Kulturell globalisering fører til at alle kulturer blir like.» Er du enig eller uenig? Begrunn svaret.',
      solution: 'Det er gode argumenter for begge sider. For: Amerikansk populærkultur, merkevarer og engelsk språk dominerer globalt, og lokale kulturuttrykk kan fortrenges. Mot: Begrepet glokalisering viser at mennesker aktivt tilpasser globale impulser til sin lokale kontekst. Kulturell globalisering skaper også nye, hybride kulturuttrykk (som K-pop). I tillegg har globalisering gitt ikke-vestlige kulturer mulighet til å nå ut globalt. Konklusjon: Kulturell globalisering fører til både homogenisering og ny variasjon – verden blir ikke nødvendigvis helt lik, men kulturene påvirker hverandre i større grad enn før.',
    },
    {
      id: 'geo-7-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket kulturelt fenomen har bidratt mest til å demokratisere kulturspredningen globalt?',
      options: [
        { id: 'a', text: 'Sosiale medier og internett', isCorrect: true },
        { id: 'b', text: 'Tradisjonelle aviser', isCorrect: false },
        { id: 'c', text: 'Postverket', isCorrect: false },
        { id: 'd', text: 'Telefonkatalogen', isCorrect: false },
      ],
      solution: 'Sosiale medier og internett har demokratisert kulturspredningen fordi hvem som helst kan dele kulturuttrykk med et globalt publikum, ikke bare store mediehus. Plattformer som TikTok, YouTube og Instagram gjør det mulig for lokale kulturuttrykk å nå millioner av mennesker på kort tid.',
    },
  ],
};

// ============================================================================
// Kapittel 7.3: Utvikling og ulikhet
// ============================================================================

export const CHAPTER_GEOGRAFI_7_3: TextbookChapter = {
  id: 'geografi-1-7-3',
  courseId: 'geografi',
  chapterNumber: '7.3',
  title: 'Utvikling og ulikhet',
  description: 'Hva utvikling betyr, hvordan det måles med HDI og Gini-koeffisient, og hvordan ulikhet mellom land forklares.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for ulike mål på utvikling og levekår',
    'drøfte årsaker til og konsekvenser av ulikhet mellom land',
  ],
  content: [
    {
      id: 'geo-7-3-intro',
      type: 'text',
      content: `# Utvikling og ulikhet

Hva innebærer det at et land er «utviklet»? Betyr det høy inntekt, god helse, lang utdanning – eller noe helt annet? I dette kapittelet ser vi på hva utvikling betyr, hvordan det kan måles, og hvorfor ulikhetene mellom verdens land og mennesker fortsatt er enorme.

## Hva er utvikling?

Utvikling er et begrep med mange dimensjoner:

- **Økonomisk utvikling**: Økt produksjon, inntekt og levestandard
- **Sosial utvikling**: Bedre helse, utdanning og likestilling
- **Politisk utvikling**: Demokrati, menneskerettigheter og rettssikkerhet
- **Bærekraftig utvikling**: Utvikling som dekker dagens behov uten å ødelegge for fremtidige generasjoner

Tidligere ble utvikling ofte målt kun gjennom **BNP per innbygger** (bruttonasjonalprodukt fordelt på befolkningen). Men BNP sier lite om hvordan ressursene fordeles, om helse, utdanning eller miljø. Derfor brukes i dag mer sammensatte mål.`,
    },
    {
      id: 'geo-7-3-def-utvikling',
      type: 'definition',
      title: 'Utvikling',
      content: 'Utvikling er en prosess der et samfunn forbedrer sine materielle, sosiale og politiske forhold. Utvikling innebærer ikke bare økonomisk vekst, men også bedre helse, utdanning, likestilling, demokrati og bærekraftig forvaltning av ressurser.',
    },
    {
      id: 'geo-7-3-hdi',
      type: 'text',
      content: `## HDI – Human Development Index

FNs utviklingsprogram (UNDP) utviklet **HDI (Human Development Index)** som et bredere mål på utvikling. HDI måler tre dimensjoner:

1. **Helse**: Forventet levealder ved fødsel
2. **Utdanning**: Gjennomsnittlig antall skoleår og forventet antall skoleår
3. **Levestandard**: Bruttonasjonalinntekt (BNI) per innbygger

HDI-verdien ligger mellom 0 og 1, der 1 er høyest utvikling.

### Gruppering etter HDI
- **Svært høy utvikling** (HDI over 0,800): Norge, Sveits, Australia
- **Høy utvikling** (0,700–0,799): Brasil, Kina, Mexico
- **Middels utvikling** (0,550–0,699): India, Bangladesh, Ghana
- **Lav utvikling** (under 0,550): Niger, Tsjad, Sør-Sudan

Norge har i mange år ligget på toppen av HDI-rangeringen.

### Styrker og svakheter ved HDI
**Styrker**: Bredere enn BNP, lett å sammenligne mellom land, inkluderer sosiale dimensjoner.
**Svakheter**: Sier ingenting om ulikhet innad i landet, miljø, demokrati eller menneskerettigheter. Skjuler store forskjeller mellom ulike grupper.`,
    },
    {
      id: 'geo-7-3-def-hdi',
      type: 'definition',
      title: 'HDI (Human Development Index)',
      content: 'HDI er et sammensatt mål på utvikling utviklet av FNs utviklingsprogram (UNDP). Indeksen kombinerer tre dimensjoner: forventet levealder (helse), utdanningsnivå og bruttonasjonalinntekt per innbygger (levestandard). HDI gir en verdi mellom 0 og 1.',
    },
    {
      id: 'geo-7-3-gini',
      type: 'text',
      content: `## Gini-koeffisienten og inntektsulikhet

Mens HDI måler utviklingsnivået i et land, sier **Gini-koeffisienten** noe om fordelingen av inntekt innad i landet.

### Hva er Gini-koeffisienten?
Gini-koeffisienten er et tall mellom 0 og 1:
- **0** = perfekt likhet (alle har lik inntekt)
- **1** = perfekt ulikhet (én person har all inntekten)

### Eksempler
- **Lav ulikhet** (Gini 0,25–0,30): Norge, Danmark, Sverige
- **Middels ulikhet** (Gini 0,35–0,45): USA, Kina, India
- **Høy ulikhet** (Gini over 0,50): Sør-Afrika, Brasil, Namibia

### Globale trender
Global inntektsulikhet har endret seg de siste tiårene:
- Ulikheten **mellom** land har minsket noe, blant annet fordi Kina og India har hatt sterk vekst
- Ulikheten **innad** i mange land har økt, også i vestlige land
- De rikeste 10 % eier over 75 % av verdens formue`,
    },
    {
      id: 'geo-7-3-def-gini',
      type: 'definition',
      title: 'Gini-koeffisient',
      content: 'Gini-koeffisienten er et mål på ulikhet i inntektsfordelingen i et land. Verdien ligger mellom 0 (perfekt likhet) og 1 (perfekt ulikhet). Jo høyere Gini-koeffisient, desto større er forskjellene mellom rike og fattige i landet.',
    },
    {
      id: 'geo-7-3-nord-sor',
      type: 'text',
      content: `## Nord-sør-dimensjonen og BRICS

### Nord og sør
Tradisjonelt har man delt verden i et rikt «nord» og et fattig «sør»:
- **Det globale nord**: Industrialiserte, velstående land – Europa, Nord-Amerika, Japan, Australia
- **Det globale sør**: Utviklingsland i Afrika, Asia, Latin-Amerika og Oseania

Denne inndelingen er forenklet. Det finnes rike land i «sør» (som Qatar) og fattige regioner i «nord» (som deler av Russland). Likevel er inndelingen nyttig for å forstå de historiske maktstrukturene i verdensøkonomien, der mange land i sør har vært kolonier som eksporterte råvarer til industriland i nord.

### BRICS-landene
BRICS er en sammenslutning av fremvoksende økonomier: **Brasil, Russland, India, Kina og Sør-Afrika** (samt nyere medlemmer som Egypt, Etiopia, Iran og De forente arabiske emirater). Disse landene representerer en stor del av verdens befolkning og økonomi, og utfordrer det tradisjonelle nord-sør-skillet.

BRICS-landene kjemper for større innflytelse i internasjonale organisasjoner som Verdensbanken og IMF, som tradisjonelt har vært dominert av vestlige land.`,
    },
    {
      id: 'geo-7-3-example',
      type: 'example',
      title: 'HDI sammenlignet',
      problem: 'Sammenlign HDI og hva den forteller om utviklingsnivå for Norge (HDI 0,966), Brasil (HDI 0,760) og Niger (HDI 0,394).',
      solution: `**Sammenligning:**

**Norge (HDI 0,966 – svært høy)**:
- Forventet levealder: ca. 83 år
- Gjennomsnittlig skolegang: ca. 13 år
- Høy BNI per innbygger
- Toppen av HDI-rangeringen

**Brasil (HDI 0,760 – høy)**:
- Forventet levealder: ca. 76 år
- Gjennomsnittlig skolegang: ca. 8 år
- Middels BNI per innbygger
- Store interne forskjeller (høy Gini-koeffisient)

**Niger (HDI 0,394 – lav)**:
- Forventet levealder: ca. 62 år
- Gjennomsnittlig skolegang: ca. 2 år
- Svært lav BNI per innbygger
- Blant de lavest rangerte landene

HDI viser store forskjeller, men skjuler ulikhet innad i landene. Brasil har for eksempel høy HDI, men enorme forskjeller mellom rike og fattige.`,
    },
    {
      id: 'geo-7-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

Utvikling er en sammensatt prosess som handler om mer enn bare økonomisk vekst. HDI gir et bredere bilde ved å inkludere helse og utdanning, mens Gini-koeffisienten måler ulikhet innad i land. Det tradisjonelle nord-sør-skillet er fortsatt relevant, men BRICS-landene viser at maktforholdene i verden er i endring. Ulikhet – både mellom og innad i land – forblir en av verdens store utfordringer.`,
    },
  
    {
      id: 'geo-7-3-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- UNDP (FNs utviklingsprogram): hdr.undp.org
- Verdensbanken: data.worldbank.org
- Gapminder: gapminder.org
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.`,
    },
  ],
  exercises: [
    {
      id: 'geo-7-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke tre dimensjoner måler HDI?',
      options: [
        { id: 'a', text: 'Helse (levealder), utdanning og levestandard (BNI per innbygger)', isCorrect: true },
        { id: 'b', text: 'BNP, militærutgifter og befolkningsvekst', isCorrect: false },
        { id: 'c', text: 'Demokrati, ytringsfrihet og menneskerettigheter', isCorrect: false },
        { id: 'd', text: 'CO2-utslipp, biologisk mangfold og vannkvalitet', isCorrect: false },
      ],
      solution: 'HDI måler helse (forventet levealder), utdanning (gjennomsnittlig og forventet antall skoleår) og levestandard (bruttonasjonalinntekt per innbygger). Disse tre dimensjonene gir et bredere bilde av utvikling enn BNP alene.',
    },
    {
      id: 'geo-7-3-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr en høy Gini-koeffisient?',
      options: [
        { id: 'a', text: 'Store forskjeller mellom rike og fattige i landet', isCorrect: true },
        { id: 'b', text: 'Høy gjennomsnittsinntekt i landet', isCorrect: false },
        { id: 'c', text: 'At landet har svært god helseomsorg', isCorrect: false },
        { id: 'd', text: 'At alle i landet har omtrent lik inntekt', isCorrect: false },
      ],
      solution: 'Gini-koeffisienten måler inntektsulikhet innad i et land. En verdi nær 1 betyr stor ulikhet (stor forskjell mellom rike og fattige), mens en verdi nær 0 betyr stor likhet. Land som Sør-Afrika og Brasil har høy Gini-koeffisient, mens de nordiske landene har lav.',
    },
    {
      id: 'geo-7-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for to styrker og to svakheter ved HDI som mål på utvikling.',
      solution: 'Styrker: (1) HDI er et bredere mål enn BNP fordi det inkluderer helse og utdanning i tillegg til økonomi. (2) HDI gjør det enkelt å sammenligne utviklingsnivået mellom land. Svakheter: (1) HDI sier ingenting om ulikhet innad i landet – et land kan ha høy HDI selv om forskjellene mellom rike og fattige er enorme. (2) HDI inkluderer ikke viktige dimensjoner som miljø, demokrati, menneskerettigheter og likestilling.',
    },
    {
      id: 'geo-7-3-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva BRICS-landene er, og drøft hvorfor de utfordrer det tradisjonelle nord-sør-skillet.',
      solution: 'BRICS er en sammenslutning av fremvoksende økonomier: Brasil, Russland, India, Kina og Sør-Afrika (pluss nyere medlemmer). Disse landene utfordrer det tradisjonelle nord-sør-skillet fordi: (1) De er geografisk i «det globale sør» men har opplevd sterk økonomisk vekst og fått økt global innflytelse. (2) Kina er verdens nest største økonomi og utfordrer vestlig dominans. (3) BRICS-landene representerer en stor del av verdens befolkning og økonomi, og krever større innflytelse i internasjonale organisasjoner som IMF og Verdensbanken. (4) Maktforholdene i verden er i endring, og skillet mellom «utviklede» og «utviklingsland» er ikke lenger like klart.',
    },
    {
      id: 'geo-7-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket land har i mange år ligget øverst på HDI-rangeringen?',
      options: [
        { id: 'a', text: 'Norge', isCorrect: true },
        { id: 'b', text: 'USA', isCorrect: false },
        { id: 'c', text: 'Kina', isCorrect: false },
        { id: 'd', text: 'Japan', isCorrect: false },
      ],
      solution: 'Norge har i mange år ligget på toppen eller nær toppen av HDI-rangeringen. Dette skyldes høy forventet levealder, høyt utdanningsnivå og høy bruttonasjonalinntekt per innbygger.',
    },
  ],
};

// ============================================================================
// Kapittel 7.4: Bistand og utviklingssamarbeid
// ============================================================================

export const CHAPTER_GEOGRAFI_7_4: TextbookChapter = {
  id: 'geografi-1-7-4',
  courseId: 'geografi',
  chapterNumber: '7.4',
  title: 'Bistand og utviklingssamarbeid',
  description: 'Ulike former for bistand, Norges rolle som bistandsaktør, og kritiske perspektiver på bistand.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike former for bistand og utviklingssamarbeid',
    'drøfte i hvilken grad bistand bidrar til utvikling',
  ],
  content: [
    {
      id: 'geo-7-4-intro',
      type: 'text',
      content: `# Bistand og utviklingssamarbeid

Kan rike land hjelpe fattige land til utvikling? Bistand – overføring av ressurser fra rike til fattige land – har vært et sentralt virkemiddel i internasjonal utviklingspolitikk siden 1950-tallet. Men bistand er også omstridt: Virker den? Hvem tjener egentlig på den? Og finnes det bedre alternativer?

## Ulike typer bistand

Bistand kommer i mange former:

### Humanitær bistand (nødhjelp)
Kortsiktig hjelp ved kriser som naturkatastrofer, krig og hungersnød. Eksempler: matforsyninger, medisiner, telt og nødleirgjennom FN-organisasjoner og Røde Kors.

### Langsiktig utviklingsbistand
Støtte til å bygge varige strukturer: skoler, sykehus, vannforsyning, infrastruktur og institusjoner. Målet er at mottakerlandet på sikt skal klare seg selv.

### Faglig bistand
Overføring av kunnskap og kompetanse: opplæring av lærere, helsepersonell, forvaltning og teknisk ekspertise.

### Betinget bistand
Bistand som stiller krav til mottakeren – for eksempel om demokratisering, menneskerettigheter, godt styresett eller økonomiske reformer.`,
    },
    {
      id: 'geo-7-4-def-bistand',
      type: 'definition',
      title: 'Bistand',
      content: 'Bistand er overføring av ressurser (penger, varer, tjenester eller kunnskap) fra rike land eller organisasjoner til fattige land med mål om å fremme utvikling og redusere fattigdom. Bistand kan være humanitær (nødhjelp), langsiktig (utviklingsbistand) eller faglig (kunnskapsoverføring).',
    },
    {
      id: 'geo-7-4-bilateral-multilateral',
      type: 'text',
      content: `## Bilateral og multilateral bistand

### Bilateral bistand
Bistand gis direkte fra ett land til et annet, for eksempel fra Norge til Tanzania. Giverslandet kan da selv velge hvilke land og prosjekter som får støtte.

**Fordeler**: Giveren kan målrette bistanden og følge opp prosjektene tett.
**Ulemper**: Kan brukes til å fremme giverens egne politiske og økonomiske interesser (bundet bistand).

### Multilateral bistand
Bistand kanaliseres gjennom internasjonale organisasjoner som FN, Verdensbanken, IMF eller regionale utviklingsbanker. Mange giverland bidrar til en felles pott.

**Fordeler**: Større upartiskhet, kan koordinere innsats og unngå dobbeltarbeid.
**Ulemper**: Kan bli byråkratisk, og giverlandene har mindre direkte kontroll.

### Sivilsamfunnsbistand
Bistand gjennom frivillige organisasjoner (NGOer) som Redd Barna, Leger Uten Grenser, Kirkens Nødhjelp og Plan International. Disse opererer ofte tett på lokalbefolkningen.`,
    },
    {
      id: 'geo-7-4-def-bilateral',
      type: 'definition',
      title: 'Bilateral og multilateral bistand',
      content: 'Bilateral bistand er bistand gitt direkte fra ett land til et annet. Multilateral bistand kanaliseres gjennom internasjonale organisasjoner som FN eller Verdensbanken. Norge bruker begge former, men kanaliserer en stor del av bistanden multilateralt.',
    },
    {
      id: 'geo-7-4-norsk-bistand',
      type: 'text',
      content: `## Norsk bistandspolitikk

Norge er en av verdens mest generøse bistandsgivere målt i andel av BNI (bruttonasjonalinntekt). FNs mål er at rike land skal gi minst 0,7 % av BNI til bistand. Norge gir om lag 1 % – godt over dette målet.

### Norad
**Norad** (Norwegian Agency for Development Cooperation) er direktoratet som forvalter norsk bistand. Norad har ansvar for kvalitetssikring, evaluering og faglig rådgivning av norsk utviklingssamarbeid.

### Prioriterte områder for norsk bistand
- **Utdanning**: Særlig jenters utdanning i fattige land
- **Helse**: Vaksineprogrammer, mødrehelse, bekjempelse av smittsomme sykdommer
- **Klima og miljø**: Bevaring av regnskog, fornybar energi, klimatilpasning
- **Menneskerettigheter og godt styresett**: Demokratibygging, rettsstat, anti-korrupsjon
- **Næringsutvikling**: Støtte til lokalt næringsliv og jobbskaping

### Olje for utvikling
«Olje for utvikling» er et norsk bistandsprogram der Norge deler sin kompetanse innen petroleumsforvaltning med utviklingsland som har olje- og gassressurser. Målet er at inntektene skal komme hele befolkningen til gode.`,
    },
    {
      id: 'geo-7-4-kritikk',
      type: 'text',
      content: `## Kritikk av bistand

Til tross for gode intensjoner har bistand blitt utsatt for betydelig kritikk:

### Avhengighetsfellen
Kritikere som den zambiske økonomen Dambisa Moyo hevder at bistand skaper **avhengighet** i stedet for utvikling. Land som mottar store mengder bistand over lang tid, kan miste insentivet til å bygge egne skattesystemer og institusjoner.

### Korrupsjon
Bistandsmidler kan havne i hendene på korrupte ledere i stedet for å nå de fattigste. Svake institusjoner i mottakerlandet gjør det vanskelig å sikre at pengene brukes riktig.

### Giverens interesser
Bistand kan brukes til å fremme giverens egne interesser – for eksempel ved å knytte bistanden til kjøp av varer fra giverlandet (bundet bistand) eller for å sikre politisk innflytelse.

### Manglende resultater
Noen studier viser svake sammenhenger mellom bistandsmengde og økonomisk vekst. Kritikere mener handel, investeringer og godt styresett er viktigere enn bistand.

### Forsvar av bistand
Tilhengere peker på at bistand har bidratt til store fremskritt: Barnadødeligheten er halvert, flere barn går på skole, og sykdommer som polio er nesten utryddet. Problemet er ikke bistand i seg selv, men hvordan den organiseres.`,
    },
    {
      id: 'geo-7-4-example',
      type: 'example',
      title: 'Bistand i praksis – vaksineprogrammer',
      problem: 'Gi et eksempel på bistand som har hatt dokumentert positiv effekt.',
      solution: `**Vaksineprogrammer gjennom Gavi:**

Gavi (The Vaccine Alliance) er et globalt partnerskap der giverland (inkludert Norge), Verdensbanken, WHO og private aktører (som Bill & Melinda Gates Foundation) samarbeider om å gi barn i fattige land tilgang til vaksiner.

**Resultater siden oppstarten i 2000:**
- Over 1 milliard barn er vaksinert
- Anslagsvis 17 millioner dødsfall er forhindret
- Barnevaksinasjonsdekningen i de fattigste landene har økt fra ca. 60 % til over 80 %

**Hvorfor fungerer det?**
- Klart og målbart mål (vaksinere barn)
- Samarbeid mellom offentlig, privat og sivil sektor
- Bygger lokale helsesystemer parallelt med vaksinering
- Godt dokumenterte resultater

Dette viser at bistand kan ha stor effekt når den er målrettet, godt organisert og bygger lokale strukturer.`,
    },
    {
      id: 'geo-7-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

Bistand er et viktig verktøy i utviklingssamarbeid, men ingen enkel løsning på fattigdom. Det finnes ulike former for bistand – fra nødhjelp til langsiktig utviklingsstøtte – og den kan gis bilateralt, multilateralt eller gjennom NGOer. Norge er en stor bistandsaktør, med Norad som sentral forvalter. Kritikere peker på avhengighet, korrupsjon og manglende resultater, mens tilhengere viser til store fremskritt innen helse og utdanning.`,
    },
  
    {
      id: 'geo-7-4-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- Norad (Direktoratet for utviklingssamarbeid): norad.no
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.
- Verdensbanken: data.worldbank.org
- FN: fn.no`,
    },
  ],
  exercises: [
    {
      id: 'geo-7-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom bilateral og multilateral bistand?',
      options: [
        { id: 'a', text: 'Bilateral gis direkte fra ett land til et annet, multilateral kanaliseres gjennom internasjonale organisasjoner', isCorrect: true },
        { id: 'b', text: 'Bilateral er nødhjelp, multilateral er langsiktig bistand', isCorrect: false },
        { id: 'c', text: 'Bilateral gis bare til naboland, multilateral gis til alle land', isCorrect: false },
        { id: 'd', text: 'Det er ingen forskjell – begrepene betyr det samme', isCorrect: false },
      ],
      solution: 'Bilateral bistand gis direkte fra ett giverland til ett mottakerland, slik at giveren kan velge mottaker og prosjekt. Multilateral bistand kanaliseres gjennom internasjonale organisasjoner som FN eller Verdensbanken, der mange land bidrar til en felles pott.',
    },
    {
      id: 'geo-7-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for to argumenter for og to argumenter mot bistand.',
      solution: 'For bistand: (1) Bistand har bidratt til at barnadødeligheten er halvert og at flere barn går på skole. (2) Humanitær bistand er avgjørende for å redde liv ved naturkatastrofer og kriger. Mot bistand: (1) Bistand kan skape avhengighet og svekke mottakerlandets motivasjon til å bygge egne skattesystemer og institusjoner. (2) Bistandsmidler kan ende opp hos korrupte ledere i stedet for å nå de fattigste, på grunn av svake institusjoner i mottakerlandet.',
    },
    {
      id: 'geo-7-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er Norad?',
      options: [
        { id: 'a', text: 'Det norske direktoratet som forvalter og kvalitetssikrer norsk bistand', isCorrect: true },
        { id: 'b', text: 'En FN-organisasjon for nødhjelp', isCorrect: false },
        { id: 'c', text: 'Et norsk oljeselskap som opererer i utviklingsland', isCorrect: false },
        { id: 'd', text: 'En privat bistandsorganisasjon', isCorrect: false },
      ],
      solution: 'Norad (Norwegian Agency for Development Cooperation) er det norske direktoratet for utviklingssamarbeid. Norad har ansvar for kvalitetssikring, evaluering og faglig rådgivning av norsk bistand.',
    },
    {
      id: 'geo-7-4-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft om handel og investeringer er viktigere for utvikling enn bistand.',
      solution: 'Argumenter for at handel er viktigere: (1) Handel skaper varige inntekter og arbeidsplasser, mens bistand kan skape avhengighet. (2) Utenlandske investeringer overfører teknologi og kompetanse og bygger lokal kapasitet. (3) Handel er mer bærekraftig fordi den bygger på gjensidige interesser, ikke givervilje. Argumenter for at bistand fortsatt er viktig: (1) De fattigste landene har ofte ikke forutsetninger for å delta i internasjonal handel (manglende infrastruktur, institusjoner, utdannet arbeidskraft). (2) Bistand kan bygge nettopp de forutsetningene som trengs for å handle. (3) Nødhjelp kan ikke erstattes av handel i krisesituasjoner. Konklusjon: Ideelt sett bør bistand og handel sees som komplementære – bistand kan legge grunnlaget for at land kan delta i handel og tiltrekke seg investeringer.',
    },
    {
      id: 'geo-7-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Omtrent hvor stor andel av BNI gir Norge til bistand?',
      options: [
        { id: 'a', text: 'Om lag 1 %', isCorrect: true },
        { id: 'b', text: 'Om lag 0,1 %', isCorrect: false },
        { id: 'c', text: 'Om lag 5 %', isCorrect: false },
        { id: 'd', text: 'Om lag 10 %', isCorrect: false },
      ],
      solution: 'Norge gir om lag 1 % av sin bruttonasjonalinntekt (BNI) til bistand. Dette er godt over FNs mål om at rike land bør gi minst 0,7 % av BNI. Norge er en av verdens mest generøse bistandsgivere relativt sett.',
    },
  ],
};

// ============================================================================
// Kapittel 7.5: Bærekraftsmålene (FNs SDGs)
// ============================================================================

export const CHAPTER_GEOGRAFI_7_5: TextbookChapter = {
  id: 'geografi-1-7-5',
  courseId: 'geografi',
  chapterNumber: '7.5',
  title: 'Bærekraftsmålene (FNs SDGs)',
  description: 'De 17 bærekraftsmålene, Agenda 2030, sammenhengen mellom målene, og Norges bidrag og utfordringer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for FNs bærekraftsmål og drøfte hvordan de henger sammen',
    'vurdere Norges bidrag til bærekraftig utvikling globalt og nasjonalt',
  ],
  content: [
    {
      id: 'geo-7-5-intro',
      type: 'text',
      content: `# Bærekraftsmålene (FNs SDGs)

I 2015 vedtok FNs 193 medlemsland **17 bærekraftsmål** (Sustainable Development Goals, SDGs) som en felles plan for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene innen 2030. Disse målene bygger videre på tusenårsmålene (2000–2015) og er verdens mest ambisiøse utviklingsagenda noensinne.

## De 17 bærekraftsmålene

Målene dekker et bredt spekter av utfordringer:

**Fattigdom og grunnleggende behov (mål 1–6)**:
1. Utrydde fattigdom
2. Utrydde sult
3. God helse og livskvalitet
4. God utdanning
5. Likestilling mellom kjønnene
6. Rent vann og gode sanitærforhold

**Økonomi og infrastruktur (mål 7–11)**:
7. Ren energi til alle
8. Anstendig arbeid og økonomisk vekst
9. Industri, innovasjon og infrastruktur
10. Mindre ulikhet
11. Bærekraftige byer og lokalsamfunn

**Miljø og klima (mål 12–15)**:
12. Ansvarlig forbruk og produksjon
13. Stoppe klimaendringene
14. Livet i havet
15. Livet på land

**Fred og samarbeid (mål 16–17)**:
16. Fred, rettferdighet og velfungerende institusjoner
17. Samarbeid for å nå målene`,
    },
    {
      id: 'geo-7-5-def-sdg',
      type: 'definition',
      title: 'Bærekraftsmålene (SDG)',
      content: 'FNs bærekraftsmål (Sustainable Development Goals) er 17 mål vedtatt i 2015 som danner en felles plan for verdens land til å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene innen 2030. Målene gjelder alle land – både rike og fattige.',
    },
    {
      id: 'geo-7-5-agenda2030',
      type: 'text',
      content: `## Agenda 2030

Bærekraftsmålene er kjernen i **Agenda 2030** – FNs handlingsplan for bærekraftig utvikling. Agenda 2030 har flere viktige kjennetegn:

### Universelle mål
I motsetning til tusenårsmålene, som først og fremst rettet seg mot utviklingsland, gjelder bærekraftsmålene **alle land**. Norge har utfordringer knyttet til klimautslipp, forbruk og ulikhet – akkurat som fattige land har utfordringer knyttet til fattigdom og helse.

### 169 delmål
De 17 hovedmålene er brutt ned i 169 konkrete delmål med tilhørende indikatorer. For eksempel har mål 4 (God utdanning) delmål om at alle barn skal fullføre gratis grunnskole og at alle unge skal ha tilgang til videregående opplæring.

### Fem P-er
Agenda 2030 er bygget rundt fem grunnpilarer:
- **People** (mennesker): Utrydde fattigdom og sikre verdighet
- **Planet** (planeten): Beskytte klima og miljø
- **Prosperity** (velstand): Sikre at alle kan leve gode liv
- **Peace** (fred): Fremme fredelige og rettferdige samfunn
- **Partnership** (partnerskap): Samarbeid for å nå målene`,
    },
    {
      id: 'geo-7-5-sammenheng',
      type: 'text',
      content: `## Sammenheng mellom målene

Et sentralt prinsipp i bærekraftsmålene er at de **henger sammen**. Man kan ikke løse én utfordring isolert – fremgang på ett mål påvirker de andre.

### Positive sammenhenger
- Bedre **utdanning** (mål 4) fører til bedre **helse** (mål 3), høyere **inntekt** (mål 1) og mer **likestilling** (mål 5)
- **Ren energi** (mål 7) reduserer **klimautslipp** (mål 13) og gir **anstendig arbeid** (mål 8)
- **Likestilling** (mål 5) fremmer **økonomisk vekst** (mål 8) og **mindre ulikhet** (mål 10)

### Mulige konflikter
- **Økonomisk vekst** (mål 8) kan føre til økt **forbruk og klimautslipp** (mål 12, 13)
- Utbygging av **infrastruktur** (mål 9) kan true **biologisk mangfold** (mål 15)
- **Ren energi** (mål 7) kan kreve store naturinngrep som vindkraft og vannkraft

Disse spenningene viser at bærekraftig utvikling krever helhetlig tenkning og vanskelige avveininger.`,
    },
    {
      id: 'geo-7-5-def-barekraftig',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: 'Bærekraftig utvikling er utvikling som dekker dagens behov uten å ødelegge mulighetene for at fremtidige generasjoner kan dekke sine behov. Begrepet ble definert av Brundtland-kommisjonen i 1987 og er grunnlaget for FNs bærekraftsmål.',
    },
    {
      id: 'geo-7-5-norge',
      type: 'text',
      content: `## Norges bidrag og utfordringer

Norge skårer høyt på mange bærekraftsmål – særlig helse, utdanning, likestilling og velstand. Men Norge har også store utfordringer:

### Der Norge gjør det bra
- **Mål 1 (Utrydde fattigdom)**: Svært lav fattigdom i norsk målestokk
- **Mål 3 (God helse)**: Høy forventet levealder, godt helsevesen
- **Mål 4 (God utdanning)**: Gratis utdanning, høy deltakelse
- **Mål 5 (Likestilling)**: Blant verdens mest likestilte land

### Der Norge har utfordringer
- **Mål 12 (Ansvarlig forbruk)**: Nordmenn har et av verdens høyeste forbruk per person og produserer mye avfall
- **Mål 13 (Stoppe klimaendringene)**: Norge er en stor produsent og eksportør av olje og gass
- **Mål 14 og 15 (Livet i havet/på land)**: Tap av biologisk mangfold, oppdrettsnæringens miljøutfordringer

### Norges internasjonale bidrag
Norge bidrar gjennom bistand, klimafinansiering og regnskogsbevaring. Samtidig er det et paradoks at Norge er en stor bistandsaktør og klimaforkjemper, men samtidig en stor olje- og gassprodusent.`,
    },
    {
      id: 'geo-7-5-example',
      type: 'example',
      title: 'Sammenhenger mellom bærekraftsmål',
      problem: 'Vis hvordan investering i jenters utdanning (mål 4) kan bidra til å nå flere andre bærekraftsmål.',
      solution: `**Jenters utdanning og sammenheng med andre mål:**

Utdanning for jenter er et av de mest effektive virkemidlene for bærekraftig utvikling:

- **Mål 1 (Utrydde fattigdom)**: Utdannede kvinner får bedre betalt arbeid og løfter familier ut av fattigdom
- **Mål 3 (God helse)**: Utdannede mødre har sunnere barn, lavere barnedødelighet og bedre kunnskap om helse og ernæring
- **Mål 5 (Likestilling)**: Utdanning styrker jenters posisjon i samfunnet og gir dem større kontroll over eget liv
- **Mål 8 (Økonomisk vekst)**: Utdannet arbeidskraft øker produktivitet og økonomisk vekst
- **Mål 10 (Mindre ulikhet)**: Utdanning reduserer sosial ulikhet og gir like muligheter
- **Mål 13 (Klimaendringer)**: Utdannede kvinner får gjennomsnittlig færre barn, noe som demper befolkningsveksten og reduserer presset på ressurser og klima

Ett enkelt tiltak – jenters utdanning – bidrar altså til minst seks av bærekraftsmålene. Dette viser kraften i å tenke helhetlig.`,
    },
    {
      id: 'geo-7-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

FNs 17 bærekraftsmål er en ambisiøs plan for verdens utvikling frem mot 2030. Målene henger tett sammen – fremgang på ett område kan forsterke fremgang på andre, men det kan også oppstå konflikter. Norge gjør det bra på mange mål, men har betydelige utfordringer knyttet til forbruk, klimautslipp og olje- og gassproduksjon. Bærekraftsmålene gjelder alle land og krever samarbeid mellom stater, næringsliv og sivilsamfunn.`,
    },
  
    {
      id: 'geo-7-5-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- FN: fn.no/om-fn/fns-baerekraftsmaal
- FN SDG-portalen: sdgs.un.org
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.
- Norad: norad.no`,
    },
  ],
  exercises: [
    {
      id: 'geo-7-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange bærekraftsmål har FN vedtatt?',
      options: [
        { id: 'a', text: '17', isCorrect: true },
        { id: 'b', text: '10', isCorrect: false },
        { id: 'c', text: '25', isCorrect: false },
        { id: 'd', text: '8', isCorrect: false },
      ],
      solution: 'FN vedtok 17 bærekraftsmål i 2015. Disse er brutt ned i 169 delmål og danner kjernen i Agenda 2030 – FNs handlingsplan for bærekraftig utvikling.',
    },
    {
      id: 'geo-7-5-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en sentral forskjell mellom tusenårsmålene og bærekraftsmålene?',
      options: [
        { id: 'a', text: 'Bærekraftsmålene gjelder alle land, ikke bare utviklingsland', isCorrect: true },
        { id: 'b', text: 'Tusenårsmålene hadde flere mål enn bærekraftsmålene', isCorrect: false },
        { id: 'c', text: 'Bærekraftsmålene handler bare om miljø', isCorrect: false },
        { id: 'd', text: 'Tusenårsmålene var vedtatt av EU, ikke FN', isCorrect: false },
      ],
      solution: 'En viktig forskjell er at bærekraftsmålene er universelle – de gjelder alle land, både rike og fattige. Tusenårsmålene rettet seg primært mot utviklingsland. Bærekraftsmålene anerkjenner at også rike land har utfordringer, for eksempel knyttet til klimautslipp og forbruk.',
    },
    {
      id: 'geo-7-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi to eksempler på at bærekraftsmål kan komme i konflikt med hverandre.',
      solution: 'Eksempel 1: Økonomisk vekst (mål 8) kan føre til økt produksjon og forbruk, som igjen gir mer avfall og høyere klimautslipp (konflikt med mål 12 og 13). Eksempel 2: Utbygging av fornybar energi som vindkraft og vannkraft (mål 7) kan kreve store naturinngrep som truer biologisk mangfold og økosystemer (konflikt med mål 15). Disse eksemplene viser at bærekraftig utvikling krever vanskelige avveininger.',
    },
    {
      id: 'geo-7-5-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft om det er realistisk å nå bærekraftsmålene innen 2030.',
      solution: 'Argumenter for at det er vanskelig: (1) Mange land ligger langt etter på sentrale mål som fattigdomsbekjempelse og klimatiltak. (2) Covid-19-pandemien satte utviklingen tilbake flere år, særlig for utdanning og fattigdom. (3) Konflikter, krig og politisk ustabilitet hindrer fremgang i mange regioner. (4) Klimaendringene akselererer raskere enn tiltakene. Argumenter for at målene er verdifulle uansett: (1) Målene gir en felles retning og rammeverk for samarbeid. (2) Betydelig fremgang er gjort på flere områder, som tilgang til energi og vaksinering. (3) Målene mobiliserer ressurser og oppmerksomhet. Konklusjon: Det er lite realistisk å nå alle målene fullt ut innen 2030, men målene har likevel stor verdi som styringsverktøy og felles ambisjon.',
    },
    {
      id: 'geo-7-5-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket bærekraftsmål er en stor utfordring for Norge?',
      options: [
        { id: 'a', text: 'Mål 12 – Ansvarlig forbruk og produksjon', isCorrect: true },
        { id: 'b', text: 'Mål 4 – God utdanning', isCorrect: false },
        { id: 'c', text: 'Mål 3 – God helse og livskvalitet', isCorrect: false },
        { id: 'd', text: 'Mål 1 – Utrydde fattigdom', isCorrect: false },
      ],
      solution: 'Norge har utfordringer med mål 12 (Ansvarlig forbruk og produksjon) fordi nordmenn har et av verdens høyeste forbruk per innbygger og produserer mye avfall. I tillegg er Norge en stor olje- og gassprodusent, som er en utfordring for mål 13 (Stoppe klimaendringene).',
    },
  ],
};

// ============================================================================
// Kapittel 7.6: Norge i en globalisert verden
// ============================================================================

export const CHAPTER_GEOGRAFI_7_6: TextbookChapter = {
  id: 'geografi-1-7-6',
  courseId: 'geografi',
  chapterNumber: '7.6',
  title: 'Norge i en globalisert verden',
  description: 'Norsk økonomi og handel, Oljefondets rolle, Norge som bistandsaktør og norsk innvandringspolitikk i global kontekst.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for Norges plass i den globale økonomien',
    'drøfte hvordan globalisering påvirker norsk samfunn og politikk',
  ],
  content: [
    {
      id: 'geo-7-6-intro',
      type: 'text',
      content: `# Norge i en globalisert verden

Norge er et lite land med drøyt 5,5 millioner innbyggere, men spiller en rolle i den globaliserte verden som er langt større enn folketallet tilsier. Som en av verdens rikeste nasjoner, en stor olje- og gasseksportør, en sjenerøs bistandsgiver og en aktiv deltaker i internasjonale organisasjoner, er Norge dypt integrert i den globale økonomien og politikken.

## Norsk økonomi og handel

Norsk økonomi er svært åpen og avhengig av internasjonal handel. De viktigste kjennetegnene er:

### Eksport
- **Olje og gass** utgjør en stor del av norsk eksport og har vært grunnlaget for Norges velstand
- **Sjømat** (laks, torsk, sild) gjør Norge til verdens nest største sjømateksportør
- **Metaller og kjemiske produkter** fra energikrevende industri
- **Maritime tjenester** (shipping, skipsbygging, offshoreteknologi)

### Import
Norge importerer mye av det befolkningen forbruker: klær, elektronikk, biler, matvarer og maskiner. De viktigste handelspartnerne er EU-landene, Storbritannia, USA og Kina.

### EØS-avtalen
Gjennom EØS-avtalen har Norge tilgang til EUs indre marked med fri flyt av varer, tjenester, kapital og arbeidskraft. Avtalen er grunnpilaren i norsk handelspolitikk og gjør at norske bedrifter kan selge til 450 millioner europeiske forbrukere uten toll.`,
    },
    {
      id: 'geo-7-6-def-eos',
      type: 'definition',
      title: 'EØS-avtalen',
      content: 'EØS-avtalen (Det europeiske økonomiske samarbeidsområdet) gir Norge, Island og Liechtenstein tilgang til EUs indre marked. Avtalen sikrer fri flyt av varer, tjenester, kapital og arbeidskraft mellom EØS-landene og EU. Til gjengjeld må Norge innføre EUs regelverk for det indre markedet.',
    },
    {
      id: 'geo-7-6-oljefondet',
      type: 'text',
      content: `## Oljefondet (SPU) og global investering

**Statens pensjonsfond utland (SPU)**, populært kalt Oljefondet, er verdens største statlige investeringsfond. Fondet ble opprettet i 1990 for å forvalte Norges oljeinntekter til fremtidige generasjoner.

### Størrelse og omfang
- Fondets verdi er over 17 000 milliarder kroner (per 2024)
- Det eier aksjer i over 9 000 selskaper i 70 land
- Fondet eier rundt 1,5 % av alle børsnoterte aksjer i verden
- Det investerer også i obligasjoner, eiendom og fornybar energi

### Handlingsregelen
Regjeringen kan bruke inntil 3 % av fondets verdi hvert år over statsbudsjettet (den såkalte handlingsregelen). Resten skal spares til fremtidige generasjoner.

### Etiske retningslinjer
Fondet har etiske retningslinjer som utelukker selskaper involvert i:
- Produksjon av atomvåpen, klasevåpen og antipersonellminer
- Alvorlig miljøskade
- Grov korrupsjon
- Alvorlige brudd på menneskerettighetene

### Global påvirkning
Som verdens største statlige fond har SPU betydelig innflytelse på globale markeder. Fondet bruker eierskapet aktivt til å påvirke selskaper i retning av bedre klimapraksis, styring og bærekraft.`,
    },
    {
      id: 'geo-7-6-def-spu',
      type: 'definition',
      title: 'Statens pensjonsfond utland (Oljefondet)',
      content: 'Statens pensjonsfond utland (SPU) er et norsk statlig investeringsfond som forvalter inntektene fra olje- og gassvirksomheten. Fondet er verdens største statlige fond og investerer i aksjer, obligasjoner og eiendom over hele verden. Målet er å sikre verdier for fremtidige generasjoner.',
    },
    {
      id: 'geo-7-6-bistandsaktor',
      type: 'text',
      content: `## Norge som bistandsaktør

Norge har lang tradisjon som bistandsaktør og er en av verdens mest generøse givere relativt sett:

### Norges profil
- Gir om lag 1 % av BNI til bistand – godt over FN-målet på 0,7 %
- Prioriterer utdanning, helse, klima og menneskerettigheter
- Er en stor bidragsyter til FN-organisasjoner og globale fond

### Norges initiativ for klima og skog (NICFI)
Norge har bevilget milliarder til bevaring av tropisk regnskog i land som Brasil, Indonesia og Kongo. Programmet betaler land for å redusere avskoging – en viktig strategi mot klimaendringer.

### Fredsmegling
Norge har spilt en aktiv rolle som fredsmekler i flere konflikter:
- **Oslo-avtalen** (1993): Fredsforhandlinger mellom Israel og PLO
- **Sri Lanka**: Norsk megling i borgerkrigen (2002–2006)
- **Colombia**: Bidrag til fredsforhandlinger mellom regjeringen og FARC

### Paradokser
Norges rolle som bistandsgiver og klimaforkjemper står i kontrast til rollen som stor olje- og gasseksportør. Kritikere mener Norge ikke kan være en troverdig klimaaktør så lenge landet fortsetter å eksportere fossilt brensel.`,
    },
    {
      id: 'geo-7-6-innvandring',
      type: 'text',
      content: `## Norsk innvandringspolitikk i global kontekst

Globalisering innebærer ikke bare flyt av varer og kapital, men også av mennesker. Migrasjon er et sentralt tema i norsk politikk og samfunnsdebatt.

### Innvandring til Norge
Norge har opplevd betydelig innvandring de siste tiårene:
- **Arbeidsinnvandring**: Særlig fra EU/EØS-land (Polen, Litauen, Sverige) etter EU-utvidelsen i 2004
- **Flyktninger og asylsøkere**: Fra konfliktrammede land som Syria, Eritrea, Afghanistan og Ukraina
- **Familiegjenforening**: Familiemedlemmer til innvandrere som allerede bor i Norge

### Integreringsutfordringer
- Språk og utdanning: Mange innvandrere trenger norskopplæring og kvalifisering
- Arbeidsmarked: Innvandrere har høyere arbeidsledighet enn resten av befolkningen
- Sosial inkludering: Utfordringer knyttet til boligsegregering og kulturelle forskjeller

### Bidrag
Innvandrere bidrar til norsk økonomi og samfunn gjennom arbeidskraft, kulturelt mangfold, kompetanse og entreprenørskap. Mange sektorer – som helse, bygg og renhold – er avhengige av innvandret arbeidskraft.

### Norsk politikk i global kontekst
Norsk innvandringspolitikk balanserer mellom internasjonale forpliktelser (FNs flyktningkonvensjon, menneskerettigheter) og nasjonale hensyn (integrering, bærekraft, velferdsstatens kapasitet). Denne balansen er en sentral politisk debatt.`,
    },
    {
      id: 'geo-7-6-example',
      type: 'example',
      title: 'Norges paradoks: Olje og klima',
      problem: 'Forklar paradokset mellom Norges rolle som klimaforkjemper og som olje- og gasseksportør.',
      solution: `**Norges klimaparadoks:**

**Norge som klimaforkjemper:**
- Gir milliarder til regnskogbevaring (NICFI)
- Verdens høyeste andel elbiler
- Aktiv deltaker i Parisavtalen
- Stor bistandsgiver med fokus på klima
- Oljefondet har etiske retningslinjer og påvirker selskaper til bedre klimapraksis

**Norge som oljenasjon:**
- Vesteuropas største olje- og gassprodusent
- Olje og gass utgjør en stor del av eksportinntektene
- Utslipp fra norsk olje og gass brent i utlandet er langt høyere enn Norges egne utslipp
- Nye oljefelt åpnes for leting og utvinning

**Paradokset:**
Norge kan fremstå som dobbeltmoralsk – vi finansierer klimatiltak med penger tjent på fossilt brensel. Tilhengere av olje-politikken mener norsk gass kan erstatte kull og dermed redusere utslipp globalt. Kritikere mener all ny utvinning av fossil energi er uforenlig med Parisavtalens mål om å begrense oppvarmingen til 1,5 grader.`,
    },
    {
      id: 'geo-7-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

Norge er dypt integrert i den globaliserte verden gjennom handel, investeringer, bistand og migrasjon. EØS-avtalen sikrer tilgang til det europeiske markedet, mens Oljefondet gjør Norge til en global storspiller som investor. Norge er en sjenerøs bistandsgiver og aktiv fredsmekler, men står overfor paradokset med å være både klimaforkjemper og oljenasjon. Innvandring er en naturlig del av globaliseringen og bringer både muligheter og utfordringer for det norske samfunnet.`,
    },
  
    {
      id: 'geo-7-6-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- Norsk Petroleum: norskpetroleum.no
- NBIM (Norges Bank Investment Management): nbim.no
- Regjeringen: regjeringen.no
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.`,
    },
  ],
  exercises: [
    {
      id: 'geo-7-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Statens pensjonsfond utland (Oljefondet)?',
      options: [
        { id: 'a', text: 'Et norsk investeringsfond som forvalter olje- og gassinntekter for fremtidige generasjoner', isCorrect: true },
        { id: 'b', text: 'Et pensjonsfond der alle nordmenn har personlige kontoer', isCorrect: false },
        { id: 'c', text: 'Et fond som bare investerer i norske selskaper', isCorrect: false },
        { id: 'd', text: 'Et bistandsfond som deler ut penger til fattige land', isCorrect: false },
      ],
      solution: 'Statens pensjonsfond utland (SPU) er verdens største statlige investeringsfond. Det forvalter Norges inntekter fra olje og gass ved å investere i aksjer, obligasjoner og eiendom over hele verden. Målet er å sikre verdier for fremtidige generasjoner.',
    },
    {
      id: 'geo-7-6-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva gir EØS-avtalen Norge tilgang til?',
      options: [
        { id: 'a', text: 'EUs indre marked med fri flyt av varer, tjenester, kapital og arbeidskraft', isCorrect: true },
        { id: 'b', text: 'Stemmerett i EU-parlamentet', isCorrect: false },
        { id: 'c', text: 'Medlemskap i EU og NATO', isCorrect: false },
        { id: 'd', text: 'Tollfri handel med alle land i verden', isCorrect: false },
      ],
      solution: 'EØS-avtalen gir Norge tilgang til EUs indre marked, som sikrer fri flyt av varer, tjenester, kapital og arbeidskraft. Til gjengjeld må Norge innføre EUs regelverk for det indre markedet. EØS-avtalen gir imidlertid ikke stemmerett i EUs beslutningsorganer.',
    },
    {
      id: 'geo-7-6-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for Norges rolle som bistandsaktør. Nevn minst tre områder Norge prioriterer i sin bistandspolitikk.',
      solution: 'Norge er en av verdens mest generøse bistandsgivere og gir om lag 1 % av BNI til bistand. Tre prioriterte områder: (1) Klima og regnskog – Norge har bevilget milliarder til bevaring av tropisk regnskog gjennom NICFI-programmet. (2) Utdanning – særlig jenters utdanning i fattige land er en norsk prioritet. (3) Helse – Norge bidrar til vaksineprogrammer og mødrehelse gjennom globale fond som Gavi. Andre prioriterte områder inkluderer menneskerettigheter, godt styresett og næringsutvikling.',
    },
    {
      id: 'geo-7-6-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvordan globalisering har påvirket norsk arbeidsmarked og migrasjon.',
      solution: 'Globalisering har påvirket norsk arbeidsmarked på flere måter: (1) Arbeidsinnvandring fra EU/EØS-land (særlig etter utvidelsen i 2004) har gitt norsk næringsliv tilgang til arbeidskraft innen byggebransjen, renhold og helse. (2) Flyktningstrømmer fra konfliktrammede land har ført til behov for integreringstiltak som norskopplæring og kvalifisering. (3) Global konkurranse har ført til at noen norske industrier har flyttet produksjon til lavkostland (outsourcing). (4) Innvandring bidrar positivt gjennom arbeidskraft, kompetanse, kulturelt mangfold og entreprenørskap. Samtidig er det utfordringer knyttet til høyere arbeidsledighet blant innvandrere, press på velferdsstaten og sosial inkludering. Norsk innvandringspolitikk må balansere internasjonale forpliktelser med nasjonale hensyn.',
    },
    {
      id: 'geo-7-6-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Norges største eksportvare?',
      options: [
        { id: 'a', text: 'Olje og gass', isCorrect: true },
        { id: 'b', text: 'Sjømat', isCorrect: false },
        { id: 'c', text: 'Tømmer', isCorrect: false },
        { id: 'd', text: 'Elektronikk', isCorrect: false },
      ],
      solution: 'Olje og gass utgjør den største delen av norsk eksport og har vært grunnlaget for Norges velstand. Sjømat er den nest viktigste eksportvaren. Inntektene fra olje og gass forvaltes gjennom Statens pensjonsfond utland (Oljefondet).',
    },
  ],
};

// ============================================================================
// Eksport av alle kapitler i Del 7
// ============================================================================

export const GEOGRAFI_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOGRAFI_7_1, CHAPTER_GEOGRAFI_7_2, CHAPTER_GEOGRAFI_7_3,
  CHAPTER_GEOGRAFI_7_4, CHAPTER_GEOGRAFI_7_5, CHAPTER_GEOGRAFI_7_6,
];
