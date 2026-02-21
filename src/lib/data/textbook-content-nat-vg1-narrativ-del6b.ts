/**
 * Naturfag VG1 - Narrativ versjon DEL 6B
 * Seksjon 10: Teknologi, energi og bærekraft (10.1-10.7)
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';
// ============================================================================
// KAPITTEL 10.1 NARRATIV: Energiformer og energiovergang
// ============================================================================

export const CHAPTER_NAT_VG1_10_1_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-10-1-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '10.1',
  title: 'Energiformer og energiovergang',
  subtitle: 'Narrativ versjon',
  description:
    'Alt handler om energi -- fra berg-og-dal-baner til strømregningen din. Forstå energiens uforanderlige lov.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utforske og forklare sammenhenger mellom energi, arbeid og effekt',
  ],
  linkedChapterId: 'nat-vg1-10-1',
  content: [
    {
      id: 'nat-vg1-10-1-n-intro',
      type: 'text',
      content: `## Universets ufravikelige bokholderregel

**Energi** er evnen til å utføre arbeid eller skape forandring. Og her er den viktigste regelen i hele fysikken: energi kan aldri skapes eller ødelegges. Den kan bare omdannes fra en form til en annen. Denne regelen -- **energibevaringsloven** -- gjelder alltid, overalt, uten unntak. Den er universets ufravikelige bokholderregel.

Energi måles i **joule** (J). En kilojoule (kJ) er tusen joule, en megajoule (MJ) er en million joule, og en kilowattime (kWh) -- enheten på strømregningen din -- tilsvarer 3,6 megajoule. Energi finnes i mange former: **kinetisk energi** er bevegelsesenergi, **potensiell energi** er stillingsenergi, **termisk energi** er varme, **kjemisk energi** er lagret i kjemiske bindinger, **elektrisk energi** driver apparatene våre, **strålingsenergi** kommer fra solen, og **kjerneenergi** er lagret i atomkjerner.

Det fascinerende er at disse formene stadig omdannes til hverandre. Når du slipper en ball fra en høyde, omdannes potensiell energi til kinetisk energi. Når ballen treffer bakken, omdannes kinetisk energi til termisk energi og lyd. Ingenting forsvinner -- det bare skifter form.`,
    },
    {
      id: 'nat-vg1-10-1-n-section1',
      type: 'text',
      content: `## Kinetisk og potensiell energi

La oss se nærmere på de to mest grunnleggende energiformene. **Kinetisk energi** er energien et objekt har fordi det beveger seg. Formelen er Ek = 1/2 ganger masse ganger fart i andre, altså Ek = (1/2)mv i andre. Legg merke til at farten er opphøyd i andre: dobler du farten, firedobler du den kinetiske energien. Det er derfor en bil som kjører i 100 km/t trenger fire ganger så lang bremsestrekning som en bil i 50 km/t. En bil på 1500 kg som kjører i 20 m/s har kinetisk energi lik 0,5 ganger 1500 ganger 400, altså 300 000 joule eller 300 kJ.

**Potensiell energi** er energien et objekt har på grunn av sin posisjon i et tyngdefelt. Formelen er Ep = mgh, der m er masse i kilogram, g er tyngdeakselerasjonen (9,81 m/s i andre), og h er høyde i meter. En stein på 2 kg løftet 10 meter opp har potensiell energi lik 2 ganger 9,81 ganger 10, altså 196 joule.

Noe magisk skjer når vi kombinerer energibevaring med disse formlene. I en berg-og-dal-bane, for eksempel, starter vognen på toppen med bare potensiell energi. Idet den ruller ned, omdannes potensiell energi til kinetisk energi. Nederst er all potensiell energi blitt til kinetisk energi (hvis vi ser bort fra friksjon). Med energibevaring kan vi beregne farten nederst uten å vite noe om banen underveis: mgh = (1/2)mv i andre. Massen kansellerer ut, og farten nederst avhenger bare av høyden: v = roten av 2gh. En vogn som starter 30 meter oppe vil ha fart ca. 24 m/s (87 km/t) nederst, uansett hva den veier.`,
    },
    {
      id: 'nat-vg1-10-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på energiformer og energibevaring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-1-n-quiz1-q0',
            task: 'Hva sier energibevaringsloven?',
            options: [
              { id: 'a', text: 'Energi kan skapes ved å brenne fossilt brensel', isCorrect: false },
              { id: 'b', text: 'Energi kan ikke skapes eller ødelegges, bare omdannes', isCorrect: true },
              { id: 'c', text: 'Energi forsvinner alltid som varme til slutt', isCorrect: false },
              { id: 'd', text: 'Energi kan bare brukes én gang', isCorrect: false },
            ],
            solution:
              'Energibevaringsloven sier at energi aldri kan skapes eller ødelegges. Den totale energien i et lukket system er alltid konstant. Energi kan bare omdannes fra en form til en annen.',
          },
          {
            id: 'nat-vg1-10-1-n-quiz1-q1',
            task: 'Hva skjer med den kinetiske energien hvis du dobler farten?',
            options: [
              { id: 'a', text: 'Den dobles', isCorrect: false },
              { id: 'b', text: 'Den tredobles', isCorrect: false },
              { id: 'c', text: 'Den firedobles', isCorrect: true },
              { id: 'd', text: 'Den forblir den samme', isCorrect: false },
            ],
            solution:
              'Kinetisk energi er proporsjonal med farten i andre (Ek = 1/2 mv^2). Dobler du farten, firedobles den kinetiske energien. Det er derfor bremsestrekningen øker så kraftig med økt fart.',
          },
          {
            id: 'nat-vg1-10-1-n-quiz1-q2',
            task: 'En ball ruller nedover en bakke uten friksjon. Hva bestemmer farten nederst?',
            options: [
              { id: 'a', text: 'Ballens masse og bakkens helning', isCorrect: false },
              { id: 'b', text: 'Bare høydeforskjellen mellom topp og bunn', isCorrect: true },
              { id: 'c', text: 'Bakkens lengde og ballens masse', isCorrect: false },
              { id: 'd', text: 'Ballens størrelse og form', isCorrect: false },
            ],
            solution:
              'Med energibevaring: mgh = 1/2 mv^2. Massen kansellerer, og v = roten av 2gh. Farten avhenger bare av høydeforskjellen, ikke av masse, helning eller form.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-1-n-section2',
      type: 'text',
      content: `## Arbeid, effekt og strømregningen

To begreper knytter energi til det praktiske livet: **arbeid** og **effekt**.

**Arbeid** er energi som overføres når en kraft virker over en strekning. Formelen er enkel: W = F ganger s, der F er kraften i newton og s er strekningen i meter. Arbeid måles i joule, akkurat som energi -- fordi arbeid er energioverføring. Når du løfter en kasse på 20 kg opp 2 meter, gjør du arbeid: W = mgh = 20 ganger 9,81 ganger 2 = 392 joule. Du overfører 392 joule energi fra musklene dine til kassens potensielle energi.

**Effekt** forteller oss hvor raskt arbeidet utføres -- energi per tidsenhet. Formelen er P = W/t, der W er arbeid i joule og t er tid i sekunder. Effekt måles i **watt** (W), der 1 watt = 1 joule per sekund. Hvis du løfter kassen på 4 sekunder, er effekten 392 J / 4 s = 98 W. Det betyr at musklene dine jobber med en effekt på 98 watt -- omtrent som en sterk lyspære.

Nå kan vi forstå strømregningen. En **kilowattime** (kWh) er energien brukt av en effekt på 1000 watt i 1 time. Det tilsvarer 3,6 megajoule. En varmtvannsbereder på 2000 W som varmer vann i 3 timer bruker 2 kW ganger 3 timer = 6 kWh. Med en strømpris på 1,50 kr/kWh koster det 9 kroner. Ved alle energioverganger går noe energi tapt som varme til omgivelsene. Energien forsvinner ikke -- den spres bare utover og blir mindre nyttig. En pendel som svinger stadig svakere er et godt eksempel: den kinetiske og potensielle energien omdannes gradvis til varme gjennom luftmotstand og friksjon.`,
    },
    {
      id: 'nat-vg1-10-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på arbeid, effekt og energienheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-1-n-quiz2-q0',
            task: 'Hva er 1 kilowattime (kWh)?',
            options: [
              { id: 'a', text: '1000 watt', isCorrect: false },
              { id: 'b', text: 'Energien brukt av 1000 W i 1 time, lik 3,6 MJ', isCorrect: true },
              { id: 'c', text: '1000 joule per sekund', isCorrect: false },
              { id: 'd', text: 'En enhet for effekt', isCorrect: false },
            ],
            solution:
              '1 kWh er energien brukt av en effekt på 1000 W i 1 time. Det er en energienhet, ikke en effektenhet. 1 kWh = 1000 W × 3600 s = 3 600 000 J = 3,6 MJ.',
          },
          {
            id: 'nat-vg1-10-1-n-quiz2-q1',
            task: 'Hva er effekt?',
            options: [
              { id: 'a', text: 'Energi lagret i et objekt', isCorrect: false },
              { id: 'b', text: 'Kraft ganger strekning', isCorrect: false },
              { id: 'c', text: 'Energi overført per tidsenhet', isCorrect: true },
              { id: 'd', text: 'Masse ganger akselerasjon', isCorrect: false },
            ],
            solution:
              'Effekt er energi overført per tidsenhet: P = W/t. Måles i watt (W), der 1 W = 1 J/s. Det forteller oss hvor raskt arbeid utføres.',
          },
          {
            id: 'nat-vg1-10-1-n-quiz2-q2',
            task: 'Hvorfor stopper en pendel til slutt?',
            options: [
              { id: 'a', text: 'Fordi energien forsvinner', isCorrect: false },
              { id: 'b', text: 'Fordi kinetisk energi gradvis omdannes til varme gjennom friksjon og luftmotstand', isCorrect: true },
              { id: 'c', text: 'Fordi tyngdekraften trekker den ned til ro', isCorrect: false },
              { id: 'd', text: 'Fordi energien brukes opp', isCorrect: false },
            ],
            solution:
              'Pendelen stopper fordi kinetisk og potensiell energi gradvis omdannes til varme gjennom luftmotstand og friksjon i opphengspunktet. Energien forsvinner ikke -- den spres bare som varme.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Energi er evnen til å utføre arbeid, og den kan aldri skapes eller ødelegges -- bare omdannes. **Kinetisk energi** (Ek = 1/2 mv^2) er bevegelsesenergi og øker med kvadratet av farten. **Potensiell energi** (Ep = mgh) er stillingsenergi i et tyngdefelt. **Energibevaringsloven** lar oss beregne farter og høyder ved å sette disse lik hverandre. **Arbeid** (W = Fs) er energioverføring via kraft over strekning, og **effekt** (P = W/t) forteller oss hvor raskt arbeidet utføres, målt i watt. En **kilowattime** er 3,6 MJ og brukes på strømregningen. Ved alle energioverganger tapes noe energi som varme -- energien forsvinner ikke, men spres utover og blir mindre nyttig.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.2 NARRATIV: Fornybare og ikke-fornybare energikilder
// ============================================================================

export const CHAPTER_NAT_VG1_10_2_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-10-2-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '10.2',
  title: 'Fornybare og ikke-fornybare energikilder',
  subtitle: 'Narrativ versjon',
  description:
    'Hvor kommer energien fra? Om fossile brensler som tok millioner av år å danne, fornybare kilder som aldri tar slutt, og kjernekraftens kontroversielle rolle.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte problemstillinger knyttet til energi i et bærekraftsperspektiv',
  ],
  linkedChapterId: 'nat-vg1-10-2',
  content: [
    {
      id: 'nat-vg1-10-2-n-intro',
      type: 'text',
      content: `## Verdens energihunger

Verden trenger enorme mengder energi -- til transport, oppvarming, industri og elektrisitet. Og hvor denne energien kommer fra, har dramatiske konsekvenser for klimaet og miljøet.

I dag kommer rundt 80 prosent av verdens energi fra **fossile brensler**: kull, olje og naturgass. Disse ble dannet av døde organismer over millioner av år. Planter i sumpområder ble til kull, marine organismer ble til olje, og gass ble dannet som biprodukt. Når vi brenner dem, frigjør vi karbon som har vært lagret i millioner av år, og det ender som CO2 i atmosfæren.

**Ikke-fornybare energikilder** tar slutt fordi de dannes så sakte at de ikke fornyes i menneskelig tidsskala. **Fornybare energikilder** -- vannkraft, vindkraft, solenergi, bioenergi og geotermisk energi -- fornyes naturlig og vil ikke ta slutt. Hvorfor skifter vi? Klimaendringer fra CO2-utslipp, begrensede fossile ressurser, luftforurensning fra forbrenning, og ønsket om energisikkerhet og uavhengighet driver det store energiskiftet verden er inne i.`,
    },
    {
      id: 'nat-vg1-10-2-n-section1',
      type: 'text',
      content: `## Fossile brensler og fornybar energi

**Kull** har de høyeste CO2-utslippene per energienhet og er den største enkeltstående kilden til global oppvarming. Det brukes hovedsakelig til elektrisitet og industri. **Olje** brukes til transport, plast og kjemikalier, og står for ca. 30 prosent av verdens energi. **Naturgass** består hovedsakelig av metan og har de laveste CO2-utslippene av de fossile -- men metanlekkasjer under utvinning og transport er en sterk klimagass. Fordelene med fossile brensler er høy energitetthet, stabilitet og fleksibilitet. Ulempene er CO2-utslipp, luftforurensning, begrensede ressurser og geopolitiske konflikter.

På den andre siden har vi de fornybare. **Vannkraft** står for 96 prosent av norsk strømproduksjon. Vann i høyden har potensiell energi som omdannes til kinetisk energi når det faller, driver turbiner og genererer elektrisitet. Vannkraft er regulerbar og kan lagre energi, men krever naturinngrep. **Vindkraft** er den raskest voksende energikilden globalt, men er uforutsigbar og kan påvirke fugler og landskap. **Solenergi** er en enorm ressurs som synker raskt i pris -- solceller omdanner lys direkte til elektrisitet. **Bioenergi** bruker biologisk materiale som tre og avfall, og regnes som karbonnøytral fordi CO2-en tas opp igjen av nye planter. **Geotermisk energi** utnytter varme fra jordens indre og er stabil og uavhengig av vær, men begrenset til vulkanske områder som Island.

Et talende tall: kull gir 820 gram CO2 per kWh, mens vindkraft gir bare 11. Vannkraft gir 24, solceller 41, og kjernekraft 12.`,
    },
    {
      id: 'nat-vg1-10-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på energikilder:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-2-n-quiz1-q0',
            task: 'Hvor stor andel av norsk strømproduksjon kommer fra vannkraft?',
            options: [
              { id: 'a', text: 'Ca. 50 %', isCorrect: false },
              { id: 'b', text: 'Ca. 70 %', isCorrect: false },
              { id: 'c', text: 'Ca. 96 %', isCorrect: true },
              { id: 'd', text: 'Ca. 100 %', isCorrect: false },
            ],
            solution:
              'Ca. 96 % av norsk strømproduksjon kommer fra vannkraft. Norge har unike naturlige forutsetninger med mye nedbør, høye fjell og mange innsjøer som fungerer som naturlige reservoarer.',
          },
          {
            id: 'nat-vg1-10-2-n-quiz1-q1',
            task: 'Hvilket fossilt brensel har de høyeste CO2-utslippene per energienhet?',
            options: [
              { id: 'a', text: 'Naturgass', isCorrect: false },
              { id: 'b', text: 'Olje', isCorrect: false },
              { id: 'c', text: 'Kull', isCorrect: true },
              { id: 'd', text: 'Alle har like store utslipp', isCorrect: false },
            ],
            solution:
              'Kull har de høyeste CO2-utslippene med ca. 820 g CO2/kWh. Naturgass har ca. 490 g/kWh -- omtrent halvparten av kull. Olje ligger mellom de to.',
          },
          {
            id: 'nat-vg1-10-2-n-quiz1-q2',
            task: 'Hva er forskjellen mellom fornybare og ikke-fornybare energikilder?',
            options: [
              { id: 'a', text: 'Fornybare er dyrere, ikke-fornybare er billigere', isCorrect: false },
              { id: 'b', text: 'Fornybare fornyes naturlig og tar ikke slutt, ikke-fornybare er begrensede', isCorrect: true },
              { id: 'c', text: 'Fornybare brukes bare i Norge, ikke-fornybare brukes globalt', isCorrect: false },
              { id: 'd', text: 'Det er ingen praktisk forskjell', isCorrect: false },
            ],
            solution:
              'Fornybare energikilder fornyes naturlig i menneskelig tidsskala og vil ikke ta slutt (sol, vind, vann). Ikke-fornybare tok millioner av år å danne og finnes i begrensede mengder (kull, olje, gass, uran).',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-2-n-section2',
      type: 'text',
      content: `## Kjernekraft -- klimavenn eller farlig risiko?

**Kjernekraft** (fisjon) frigjør energi ved å spalte tunge atomkjerner, vanligvis uran-235. Energitettheten er utrolig: 1 kg uran inneholder like mye energi som 20 000 kg kull. Under drift slipper kjernekraftverk ut nesten ingen CO2 -- bare 12 gram per kWh, på nivå med vindkraft.

Men kjernekraft er kontroversielt. Radioaktivt avfall er farlig i tusenvis av år og må lagres trygt. Ulykker som Tsjernobyl i 1986 og Fukushima i 2011 har vist at konsekvensene kan bli katastrofale. Byggekostnadene er høye og byggetiden lang. Uranutvinning har sine egne miljøproblemer. Og materialer fra kjernekraft kan potensielt brukes til atomvåpen.

**Kjernefusjon** -- sammenslåing av lette atomkjerner, den samme prosessen som driver solen -- er en drøm for fremtiden. Den ville gi nesten ubegrenset, ren energi med minimalt avfall. Men fusjon er ekstremt vanskelig å oppnå kontrollert på jorden. ITER-prosjektet i Frankrike forsker intenst på dette, men kommersielle fusjonskraftverk ligger fortsatt mange år frem i tid.

Er kjernekraft en del av løsningen på klimakrisen? Noen mener ja -- de lave CO2-utslippene og den stabile produksjonen gjør den til et viktig supplement til fornybar energi. Andre mener nei -- avfallsproblemet, ulykkesrisikoen og de høye kostnadene gjør at pengene er bedre brukt på sol og vind. Det finnes ikke ett riktig svar -- det avhenger av hvordan vi vekter ulike verdier og risikoer.`,
    },
    {
      id: 'nat-vg1-10-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kjernekraft og energidebatten:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-2-n-quiz2-q0',
            task: 'Hva er en fordel med kjernekraft sammenlignet med kull?',
            options: [
              { id: 'a', text: 'Kjernekraft er billigere å bygge', isCorrect: false },
              { id: 'b', text: 'Kjernekraft produserer ikke radioaktivt avfall', isCorrect: false },
              { id: 'c', text: 'Kjernekraft har dramatisk lavere CO2-utslipp under drift', isCorrect: true },
              { id: 'd', text: 'Kjernekraft krever mindre sikkerhetstiltak', isCorrect: false },
            ],
            solution:
              'Kjernekraft har ca. 12 g CO2/kWh mot kulls 820 g/kWh -- nesten 70 ganger lavere. Men kjernekraft har egne utfordringer: radioaktivt avfall, ulykkesrisiko og høye byggekostnader.',
          },
          {
            id: 'nat-vg1-10-2-n-quiz2-q1',
            task: 'Hva er kjernefusjon?',
            options: [
              { id: 'a', text: 'Spalting av tunge atomkjerner som uran', isCorrect: false },
              { id: 'b', text: 'Sammenslåing av lette atomkjerner, som i solen', isCorrect: true },
              { id: 'c', text: 'En kjemisk reaksjon mellom uran og vann', isCorrect: false },
              { id: 'd', text: 'En type fornybar energi fra jordvarme', isCorrect: false },
            ],
            solution:
              'Kjernefusjon er sammenslåing av lette atomkjerner (f.eks. hydrogen til helium). Det er solens energikilde og ville gi nesten ubegrenset ren energi, men er foreløpig ikke kommersielt tilgjengelig.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Verdens energi kommer fra to hovedkategorier. **Fossile brensler** -- kull, olje og naturgass -- ble dannet over millioner av år og gir høye CO2-utslipp. **Fornybare energikilder** -- vannkraft, vindkraft, solenergi, bioenergi og geotermisk energi -- fornyes naturlig og har dramatisk lavere utslipp. Norge er i en unik posisjon med 96 prosent vannkraft. **Kjernekraft** (fisjon) har svært lave CO2-utslipp men utfordringer med radioaktivt avfall og ulykkesrisiko. **Kjernefusjon** er en fremtidsdrøm. Det store energiskiftet fra fossilt til fornybart er nødvendig for å begrense klimaendringene, og valg av energimiks innebærer avveininger mellom miljø, økonomi, sikkerhet og pålitelighet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.3 NARRATIV: Drivhuseffekten og klimaendringer
// ============================================================================

export const CHAPTER_NAT_VG1_10_3_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-10-3-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '10.3',
  title: 'Drivhuseffekten og klimaendringer',
  subtitle: 'Narrativ versjon',
  description:
    'Hvordan en naturlig prosess som holder jorden varm nå truer med å endre den for alltid -- og hva karbonbudsjettet betyr for oss.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte problemstillinger knyttet til energi i et bærekraftsperspektiv',
    'utforske og forklare drivhuseffekten',
  ],
  linkedChapterId: 'nat-vg1-10-3',
  content: [
    {
      id: 'nat-vg1-10-3-n-intro',
      type: 'text',
      content: `## Jordens usynlige dyne

Uten **drivhuseffekten** ville gjennomsnittstemperaturen på jorden vært ca. minus 18 grader i stedet for pluss 15 grader. Drivhuseffekten er altså en naturlig og livsnødvendig prosess. Men problemet er at vi forsterker den.

Slik fungerer det: Sollys, som er kortbølget stråling, passerer gjennom atmosfæren og treffer jordoverflaten. Bakken absorberer lyset og varmes opp. Den varme bakken sender så ut varmestråling, som er langbølget infrarød stråling. Her kommer det avgjørende: **drivhusgasser** i atmosfæren absorberer noe av denne varmestrålingen og sender den tilbake mot bakken. Resultatet er at atmosfæren og jordoverflaten holdes varmere enn de ellers ville vært -- som en usynlig dyne rundt jorden.

Problemet oppstår når menneskelige aktiviteter øker konsentrasjonen av drivhusgasser. Når vi brenner fossile brensler, hugger skog og driver intensivt landbruk, slipper vi ut mer CO2, metan og andre gasser. Dynen blir tykkere, og jorden varmes opp mer enn den naturlige balansen tilsier.`,
    },
    {
      id: 'nat-vg1-10-3-n-section1',
      type: 'text',
      content: `## De viktigste drivhusgassene

**Karbondioksid** (CO2) er den viktigste menneskeskapte klimagassen. Den kommer fra forbrenning av fossile brensler og avskoging. CO2-konsentrasjonen har økt fra 280 ppm (deler per million) i førindustriell tid til over 420 ppm i dag -- en økning på 50 prosent. CO2 blir værende i atmosfæren i hundrevis av år.

**Metan** (CH4) er 80 ganger sterkere som drivhusgass enn CO2 over en 20-årsperiode. Det kommer fra husdyrhold (spesielt drøvtyggere), rismarker, avfallsdeponier og lekkasjer fra naturgass. Heldigvis har metan en kortere oppholdstid i atmosfæren -- ca. 12 år -- så kutt i metanutslipp gir raskere effekt.

**Lystgass** (N2O) er 270 ganger sterkere enn CO2 og kommer hovedsakelig fra landbruk (nitrogengjødsel) og industri. Den har en oppholdstid på ca. 120 år. **Fluorerte gasser** (HFK, PFK, SF6) er ekstremt kraftige -- tusenvis av ganger sterkere enn CO2 -- men brukes i begrenset omfang, hovedsakelig i kjøling og industri.

**Global oppvarmingspotensial** (GWP) er et mål som sammenligner hvor mye en gass bidrar til oppvarming i forhold til CO2 over en gitt tidsperiode. Det hjelper oss å forstå at selv små mengder av en kraftig gass som metan kan ha stor klimaeffekt.`,
    },
    {
      id: 'nat-vg1-10-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på drivhuseffekten og klimagasser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-3-n-quiz1-q0',
            task: 'Hva er drivhuseffekten?',
            options: [
              { id: 'a', text: 'Oppvarming forårsaket av hull i ozonlaget', isCorrect: false },
              { id: 'b', text: 'At drivhusgasser absorberer varmestråling fra jorden og sender den tilbake', isCorrect: true },
              { id: 'c', text: 'At sollyset forsterkes av glass i atmosfæren', isCorrect: false },
              { id: 'd', text: 'At havet absorberer varme fra solen', isCorrect: false },
            ],
            solution:
              'Drivhuseffekten er at drivhusgasser i atmosfæren absorberer langbølget varmestråling fra jordoverflaten og sender noe av den tilbake. Dette holder jorden ca. 33 grader varmere enn den ellers ville vært.',
          },
          {
            id: 'nat-vg1-10-3-n-quiz1-q1',
            task: 'Hvilken gass har sterkest drivhuseffekt per molekyl av de vanlige klimagassene?',
            options: [
              { id: 'a', text: 'CO2', isCorrect: false },
              { id: 'b', text: 'Metan', isCorrect: false },
              { id: 'c', text: 'Lystgass', isCorrect: false },
              { id: 'd', text: 'Fluorerte gasser (HFK, SF6)', isCorrect: true },
            ],
            solution:
              'Fluorerte gasser kan være tusenvis av ganger sterkere enn CO2 per molekyl. Men CO2 er likevel den viktigste klimagassen totalt sett fordi den slippes ut i mye større mengder.',
          },
          {
            id: 'nat-vg1-10-3-n-quiz1-q2',
            task: 'Hvor mye har CO2-konsentrasjonen i atmosfæren økt siden førindustriell tid?',
            options: [
              { id: 'a', text: 'Fra 280 til ca. 300 ppm (ca. 7 %)', isCorrect: false },
              { id: 'b', text: 'Fra 280 til over 420 ppm (ca. 50 %)', isCorrect: true },
              { id: 'c', text: 'Fra 100 til 200 ppm (100 %)', isCorrect: false },
              { id: 'd', text: 'Fra 280 til 560 ppm (100 %)', isCorrect: false },
            ],
            solution:
              'CO2-konsentrasjonen har økt fra 280 ppm i førindustriell tid til over 420 ppm i dag -- en økning på ca. 50 %. Denne økningen skyldes hovedsakelig forbrenning av fossile brensler.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-3-n-section2',
      type: 'text',
      content: `## Konsekvenser, tilbakekoblinger og karbonbudsjettet

Den globale temperaturen har allerede økt ca. 1,1 grader Celsius siden førindustriell tid. Konsekvensene er synlige: isbreer og haviser smelter, havnivået stiger (ca. 20 cm siden 1900 og akselererende), ekstremvær som hetebølger, tørke og kraftig nedbør blir hyppigere, havet blir surere fordi det absorberer CO2, og korallrev blekes og dør. I Norge varmes det opp raskere enn det globale gjennomsnittet, med mer nedbør spesielt på vestlandet, smeltende isbreer og endret snøsesong.

Spesielt urovekkende er **positiv tilbakekobling** -- selvforsterkende prosesser. **Is-albedo-tilbakekoblingen** er et godt eksempel: oppvarming smelter hvit is og snø, som erstattes av mørk bakke eller hav. Mørke flater absorberer mer sollys enn hvit is, noe som gir mer oppvarming, som smelter mer is. **Permafrost-tilbakekobling** er like bekymrende: oppvarming tiner permafrost i Arktis, som frigjør metan og CO2 fra nedbrutt organisk materiale, som gir mer oppvarming. Slike forsterkende prosesser kan føre til **vippepunkter** -- irreversible endringer som kollaps av iskapper, død av Amazonas regnskog eller stans av Golfstrømmen.

**Karbonbudsjettet** forteller oss hvor mye CO2 vi kan slippe ut og fortsatt holde oss under et gitt oppvarmingsmål. For 1,5-gradersmålet i Parisavtalen er det gjenværende budsjettet ca. 500 gigatonn CO2. Med dagens utslipp på ca. 40 gigatonn per år er budsjettet brukt opp om ca. 12 år. For 2-gradersmålet har vi ca. 28 år. Hver tiendedels grad oppvarming betyr mer skade, og jo raskere vi kutter, desto mer rom har vi for fremtidige utslipp.`,
    },
    {
      id: 'nat-vg1-10-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på klimaendringer og tilbakekoblinger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-3-n-quiz2-q0',
            task: 'Hva er is-albedo-tilbakekoblingen?',
            options: [
              { id: 'a', text: 'At is reflekterer varme ut i verdensrommet og kjøler jorden', isCorrect: false },
              { id: 'b', text: 'At smelting av is avslører mørke flater som absorberer mer sol, noe som gir mer oppvarming og mer smelting', isCorrect: true },
              { id: 'c', text: 'At isdannelse forsterkes av kald luft fra polene', isCorrect: false },
              { id: 'd', text: 'At albedoen til is endrer seg med årstidene', isCorrect: false },
            ],
            solution:
              'Is-albedo-tilbakekoblingen er en positiv tilbakekobling: oppvarming smelter hvit is, mørke flater erstatter den og absorberer mer sollys, noe som gir mer oppvarming og enda mer smelting.',
          },
          {
            id: 'nat-vg1-10-3-n-quiz2-q1',
            task: 'Hva er et vippepunkt?',
            options: [
              { id: 'a', text: 'Punktet der temperaturen begynner å synke igjen', isCorrect: false },
              { id: 'b', text: 'En terskel der irreversible endringer i klimasystemet utløses', isCorrect: true },
              { id: 'c', text: 'Det året da CO2-utslippene er på sitt høyeste', isCorrect: false },
              { id: 'd', text: 'Tidspunktet da fornybar energi blir billigere enn fossil', isCorrect: false },
            ],
            solution:
              'Vippepunkter er terskler der irreversible endringer utløses, som kollaps av iskapper, død av Amazonas regnskog eller stans av Golfstrømmen. Når de passeres, kan endringene ikke reverseres.',
          },
          {
            id: 'nat-vg1-10-3-n-quiz2-q2',
            task: 'Hva er karbonbudsjettet?',
            options: [
              { id: 'a', text: 'Den årlige kostnaden for CO2-avgifter', isCorrect: false },
              { id: 'b', text: 'Mengden CO2 et land har lov til å slippe ut hvert år', isCorrect: false },
              { id: 'c', text: 'Total mengde CO2 som kan slippes ut for å holde seg under et oppvarmingsmål', isCorrect: true },
              { id: 'd', text: 'Budsjettet for klimaforskning', isCorrect: false },
            ],
            solution:
              'Karbonbudsjettet er den totale mengden CO2 vi kan slippe ut og fortsatt holde oss under et gitt oppvarmingsmål. For 1,5 grader er budsjettet ca. 500 Gt CO2 fra 2020, noe som med dagens utslipp er brukt opp om ca. 12 år.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Drivhuseffekten** er en naturlig prosess der drivhusgasser holder på varmestråling og gjør jorden beboelig. Men menneskelig aktivitet forsterker den ved å øke konsentrasjonen av **CO2**, **metan**, **lystgass** og **fluorerte gasser**. Temperaturen har allerede økt 1,1 grader, med synlige konsekvenser som issmelting, havnivåstigning, mer ekstremvær og surere hav. **Positive tilbakekoblinger** som is-albedo og permafrost-tining forsterker oppvarmingen og kan utløse irreversible **vippepunkter**. **Karbonbudsjettet** viser at vi har begrenset tid til å kutte utslipp: for 1,5-gradersmålet har vi bare ca. 12 år med dagens utslipp. Hver tiendedels grad teller, og jo raskere vi handler, desto mer rom har vi.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.4 NARRATIV: Virkningsgrad og energieffektivisering
// ============================================================================

export const CHAPTER_NAT_VG1_10_4_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-10-4-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '10.4',
  title: 'Virkningsgrad og energieffektivisering',
  subtitle: 'Narrativ versjon',
  description:
    'Hvorfor en glødelampe egentlig er en varmeovn -- og hvordan varmepumper lurer termodynamikken.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utforske og forklare sammenhenger mellom energi, arbeid og effekt',
    'drøfte problemstillinger knyttet til energi i et bærekraftsperspektiv',
  ],
  linkedChapterId: 'nat-vg1-10-4',
  content: [
    {
      id: 'nat-vg1-10-4-n-intro',
      type: 'text',
      content: `## Den ufullkomne omdanningen

Ved alle energioverganger går noe energi tapt som varme. En glødelampe bruker 60 watt elektrisk energi, men bare 3 watt blir til lys -- de resterende 57 watt blir varme. Glødelampen er med andre ord 5 prosent lysmaskin og 95 prosent varmeovn. Denne «tapsandelen» kalles **virkningsgrad**, og den forteller oss hvor stor del av tilført energi som omdannes til nyttig arbeid.

Formelen er enkel: virkningsgrad (eta) = nyttig energi ut delt på tilført energi, ganget med 100 prosent. En LED-lampe har 40-50 prosent virkningsgrad -- ti ganger bedre enn en glødelampe. En bensinmotor har bare 25-30 prosent virkningsgrad, mens en elbilmotor ligger på 85-95 prosent. Et vannkraftverk har 85-95 prosent virkningsgrad, mens et kullkraftverk bare klarer 35-45 prosent. Solceller ligger på 15-22 prosent.

Hvorfor er det alltid energitap? **Termodynamikkens andre lov** gir svaret: energi har en naturlig tendens til å spres utover og bli mer uordnet. Varme flyter fra varmt til kaldt, aldri omvendt av seg selv. Når energi er spredt som varme ved omgivelsestemperatur, er den vanskelig å samle inn igjen og bruke til nyttig arbeid. **Carnot-grensen** setter en teoretisk grense for virkningsgraden til varmemotorer -- ingen varmemaskin kan noensinne bli 100 prosent effektiv.`,
    },
    {
      id: 'nat-vg1-10-4-n-section1',
      type: 'text',
      content: `## Varmepumper -- over 100 prosent?

Her kommer noe overraskende: en **varmepumpe** kan ha en virkningsgrad (kalt COP, Coefficient of Performance) på 300-400 prosent. Bryter den fysikkens lover? Nei. Trikset er at varmepumpen ikke skaper varme -- den flytter varme.

Tenk deg et kjøleskap snudd innvendig ut. En varmepumpe tar varme fra et kaldt sted (uteluft, bakken eller vann) og flytter den til et varmt sted (huset ditt). Prosessen fungerer i fire trinn: først fordamper et kjølemiddel i en fordamper og tar opp varme fra uteluften. Så komprimerer en kompressor gassen, noe som øker temperaturen. Deretter kondenserer den varme gassen i en kondensator inne i huset og avgir varme. Til slutt utvides væsken gjennom en ventil og avkjøles, klar for en ny runde.

Med en COP på 3,5 gir 1 kWh elektrisitet hele 3,5 kWh varme -- 2,5 kWh kommer «gratis» fra uteluften. En familie som bruker 20 000 kWh til oppvarming med panelovner, trenger bare 5714 kWh med varmepumpe -- en sparing på 71 prosent. Med strømpris på 1,50 kr/kWh er det en årlig sparing på over 21 000 kroner.

Det finnes ulike typer: **luft-luft** er billigst men har lavere COP i kulde, **luft-vann** varmer radiatorer og gulvvarme, og **bergvarme** har høyest COP men dyreste installasjon. Uansett type er varmepumpen det mest energieffektive oppvarmingsalternativet for de fleste norske boliger.`,
    },
    {
      id: 'nat-vg1-10-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på virkningsgrad og varmepumper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-4-n-quiz1-q0',
            task: 'En bilmotor tilføres 100 kJ bensinenergi og har 28 % virkningsgrad. Hvor mye nyttig energi leveres?',
            options: [
              { id: 'a', text: '100 kJ', isCorrect: false },
              { id: 'b', text: '72 kJ', isCorrect: false },
              { id: 'c', text: '28 kJ', isCorrect: true },
              { id: 'd', text: '14 kJ', isCorrect: false },
            ],
            solution:
              'Nyttig energi = tilført energi × virkningsgrad = 100 kJ × 0,28 = 28 kJ. De resterende 72 kJ (72 %) går tapt som varme.',
          },
          {
            id: 'nat-vg1-10-4-n-quiz1-q1',
            task: 'Hvorfor kan en varmepumpe ha COP over 100 %?',
            options: [
              { id: 'a', text: 'Fordi den bryter energibevaringsloven', isCorrect: false },
              { id: 'b', text: 'Fordi den skaper energi fra ingenting', isCorrect: false },
              { id: 'c', text: 'Fordi den flytter varme fra omgivelsene i stedet for å skape den', isCorrect: true },
              { id: 'd', text: 'Fordi den bruker kjernekraft', isCorrect: false },
            ],
            solution:
              'Varmepumpen bryter ikke energibevaring. Den bruker elektrisitet til å flytte varme fra uteluften til huset. Med COP 3,5 kommer 1 kWh fra strøm og 2,5 kWh fra uteluften, totalt 3,5 kWh varme.',
          },
          {
            id: 'nat-vg1-10-4-n-quiz1-q2',
            task: 'Hva sier termodynamikkens andre lov?',
            options: [
              { id: 'a', text: 'Energi kan skapes av varme', isCorrect: false },
              { id: 'b', text: 'Energi har en tendens til å spres utover og bli mer uordnet', isCorrect: true },
              { id: 'c', text: 'Varme flyter alltid fra kaldt til varmt', isCorrect: false },
              { id: 'd', text: 'All energi kan omdannes til nyttig arbeid', isCorrect: false },
            ],
            solution:
              'Termodynamikkens andre lov sier at energi har en naturlig tendens til å spres utover. Varme flyter fra varmt til kaldt, aldri omvendt av seg selv. Ingen varmemaskin kan være 100 % effektiv.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-4-n-section2',
      type: 'text',
      content: `## Energieffektivisering og rebound-effekten

Den grønneste kilowattimen er den som aldri brukes. **Energieffektivisering** handler om å få mer nytte ut av mindre energi, og det er like viktig som å skifte energikilde.

I bygninger er det mange muligheter. Bedre isolasjon i vegger, tak og vinduer reduserer varmetapet. Tetting av luftlekkasjer stopper kald trekk. Varmepumper erstatter panelovner med tre-fire ganger så god effekt. LED-belysning bruker en femtedel av energien til glødelamper. Styringssystemer for varme og lys tilpasser forbruket til behovet. Varmegjenvinning i ventilasjonsanlegg tar tilbake varme fra luften som blåses ut.

I transport er elektrifisering nøkkelen. En elbil har motorvirkningsgrad på 90 prosent mot bensinbilens 28 prosent. Det betyr at elbilen trenger bare en tredjedel av energien for å kjøre samme strekning. Kollektivtransport, sykkel og gange er enda mer effektivt per personkilometer. I industrien kan prosessforbedringer, utnyttelse av spillvarme og elektrifisering gi store besparelser.

Men her dukker et paradoks opp: **rebound-effekten** (energispareparadokset). Når noe blir mer effektivt, bruker vi ofte mer av det. Kjøper du en mer drivstoffeffektiv bil, kjører du kanskje lengre fordi det er billigere per kilometer. Er LED-lys billig å bruke, lar du kanskje lyset stå på hele natten. En del av energibesparelsen spises opp av økt bruk. Løsningen er å kombinere effektivisering med bevissthet, prissignaler og reguleringer som motvirker økt forbruk.`,
    },
    {
      id: 'nat-vg1-10-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på energieffektivisering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-4-n-quiz2-q0',
            task: 'Hva er rebound-effekten?',
            options: [
              { id: 'a', text: 'At energiprisen øker etter energieffektivisering', isCorrect: false },
              { id: 'b', text: 'At effektivisering fører til økt forbruk som delvis motvirker besparelsen', isCorrect: true },
              { id: 'c', text: 'At gammel teknologi kommer tilbake etter nye oppfinnelser', isCorrect: false },
              { id: 'd', text: 'At energi alltid vender tilbake til sin opprinnelige form', isCorrect: false },
            ],
            solution:
              'Rebound-effekten oppstår når energieffektivisering fører til økt bruk. Eksempel: en drivstoffeffektiv bil gjør det billigere å kjøre, så folk kjører mer. En del av besparelsen går dermed tapt.',
          },
          {
            id: 'nat-vg1-10-4-n-quiz2-q1',
            task: 'Hvor mye mer energieffektiv er en elbilmotor enn en bensinmotor?',
            options: [
              { id: 'a', text: 'Omtrent like effektive', isCorrect: false },
              { id: 'b', text: 'Elbil er ca. 2 ganger mer effektiv', isCorrect: false },
              { id: 'c', text: 'Elbil er ca. 3 ganger mer effektiv', isCorrect: true },
              { id: 'd', text: 'Elbil er ca. 10 ganger mer effektiv', isCorrect: false },
            ],
            solution:
              'En elbilmotor har ca. 90 % virkningsgrad mot bensinmotorens ca. 28 %. Det betyr at elbilen trenger omtrent en tredjedel av energien for å kjøre samme strekning.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Virkningsgrad** forteller oss hvor stor andel av tilført energi som omdannes til nyttig arbeid. Ved alle energioverganger tapes noe som varme, i tråd med **termodynamikkens andre lov**. **Varmepumper** kan ha COP over 100 prosent fordi de flytter varme i stedet for å skape den -- 1 kWh elektrisitet kan gi 3-4 kWh varme. **Energieffektivisering** i bygninger (isolasjon, LED, varmepumper), transport (elbiler) og industri er like viktig som å skifte energikilde. **Rebound-effekten** viser at effektivisering alene ikke er nok -- økt forbruk kan motvirke besparelsene. Kombinasjonen av effektiv teknologi og bevisst forbruk er nøkkelen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.5 NARRATIV: Usikkerhet og feilkilder i målinger
// ============================================================================

export const CHAPTER_NAT_VG1_10_5_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-10-5-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '10.5',
  title: 'Usikkerhet og feilkilder i målinger',
  subtitle: 'Narrativ versjon',
  description:
    'Ingen måling er perfekt -- men å forstå usikkerhet er det som skiller vitenskap fra gjetting.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utforske en selvvalgt naturfaglig problemstilling, presentere funn og argumentere for valg av metoder',
  ],
  linkedChapterId: 'nat-vg1-10-5',
  content: [
    {
      id: 'nat-vg1-10-5-n-intro',
      type: 'text',
      content: `## Pålitelig upålitelighet

Tenk deg at du skal måle bredden av klasserommet med et målebånd. Du får 7,42 meter. Klassekameraten din måler og får 7,45 meter. En tredje person får 7,40 meter. Hvem har rett? Svaret er at ingen av dere har den «perfekte» verdien -- men alle tre målingene forteller oss noe verdifullt om både bredden og usikkerheten i målingene.

Alle målinger har en grad av usikkerhet. Dette er ikke en svakhet ved naturvitenskapen -- det er en styrke at vi erkjenner og kommuniserer denne usikkerheten. En forsker som sier «temperaturen er 25,3 pluss minus 0,2 grader» gir deg mye mer pålitelig informasjon enn en som sier «temperaturen er nøyaktig 25,3 grader», fordi den første er ærlig om begrensningene.

To viktige begreper hjelper oss å forstå kvaliteten på målinger. **Nøyaktighet** handler om hvor nær målingen er den sanne verdien. **Presisjon** handler om hvor godt målinger kan gjentas -- altså hvor liten spredning det er mellom gjentatte målinger. Tenk deg skyting på blink: en presis, men unøyaktig skytter treffer tett samlet, men langt fra sentrum. En nøyaktig, men upresis skytter har skudd spredt rundt sentrum. Ideelt er du både nøyaktig og presis -- alle skudd i sentrum.`,
    },
    {
      id: 'nat-vg1-10-5-n-section1',
      type: 'text',
      content: `## To typer feil

Feilkilder i målinger deles i to kategorier som krever helt ulike strategier.

**Systematiske feil** gir målinger som konsekvent er for høye eller for lave. En vekt som er feil kalibrert og alltid viser 2 gram for lite, gir en systematisk feil. En elev som alltid leser av termometeret fra en skrå vinkel (parallaksefeil), får konsekvent feil verdi. Reaksjonstid ved manuell tidtaking gir en systematisk forsinkelse. Det viktige er at systematiske feil ikke kan reduseres ved å ta flere målinger -- gjennomsnittet av mange feil målinger er fortsatt feil. Du må finne og rette årsaken: kalibrere instrumentet, lese av rett, bruke automatisk tidtaking.

**Tilfeldige feil** varierer tilfeldig rundt den sanne verdien. Litt ulik reaksjonstid fra gang til gang, små variasjoner i temperatur, biologisk variasjon mellom individer -- alt dette gir tilfeldige avvik. Den store fordelen med tilfeldige feil er at de kan reduseres: ta mange målinger og beregn gjennomsnittet. Tilfeldige avvik over og under den sanne verdien jevner seg ut.

For å unngå feil bør du kalibrere instrumenter regelmessig, bruke standardiserte metoder, ta mange målinger, og dokumentere forholdene nøye. I en rapport bør du alltid diskutere mulige feilkilder og hvordan de kan ha påvirket resultatene.`,
    },
    {
      id: 'nat-vg1-10-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på usikkerhet og feilkilder:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-5-n-quiz1-q0',
            task: 'Hva er forskjellen mellom nøyaktighet og presisjon?',
            options: [
              { id: 'a', text: 'De betyr det samme', isCorrect: false },
              { id: 'b', text: 'Nøyaktighet er nærhet til sann verdi, presisjon er reproduserbarhet', isCorrect: true },
              { id: 'c', text: 'Presisjon er viktigere enn nøyaktighet', isCorrect: false },
              { id: 'd', text: 'Nøyaktighet brukes i fysikk, presisjon i kjemi', isCorrect: false },
            ],
            solution:
              'Nøyaktighet handler om hvor nær en måling er den sanne verdien. Presisjon handler om hvor tett gjentatte målinger ligger. Man kan være presis uten å være nøyaktig (systematisk feil).',
          },
          {
            id: 'nat-vg1-10-5-n-quiz1-q1',
            task: 'Hvordan kan du redusere tilfeldige feil?',
            options: [
              { id: 'a', text: 'Ved å kalibrere instrumentet', isCorrect: false },
              { id: 'b', text: 'Ved å ta mange målinger og beregne gjennomsnitt', isCorrect: true },
              { id: 'c', text: 'Ved å bruke dyrere utstyr', isCorrect: false },
              { id: 'd', text: 'Tilfeldige feil kan ikke reduseres', isCorrect: false },
            ],
            solution:
              'Tilfeldige feil varierer tilfeldig rundt sann verdi. Ved å ta mange målinger og beregne gjennomsnitt jevnes de tilfeldige avvikene ut, og gjennomsnittet nærmer seg den sanne verdien.',
          },
          {
            id: 'nat-vg1-10-5-n-quiz1-q2',
            task: 'En vekt viser alltid 3 gram for mye. Hva slags feil er dette?',
            options: [
              { id: 'a', text: 'Tilfeldig feil', isCorrect: false },
              { id: 'b', text: 'Systematisk feil', isCorrect: true },
              { id: 'c', text: 'Parallaksefeil', isCorrect: false },
              { id: 'd', text: 'Presisjonsfeil', isCorrect: false },
            ],
            solution:
              'En vekt som alltid viser for mye gir en systematisk feil -- konsekvent avvik i samme retning. Den kan ikke reduseres ved å veie flere ganger. Løsningen er å kalibrere vekten.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-5-n-section2',
      type: 'text',
      content: `## Gjeldende siffer og usikkerhetsangivelse

Når du skriver ned en måling, forteller antall siffer noe om presisjonen. **Gjeldende siffer** er antall siffer i et tall som har reell måleinformasjon. Tallet 2,30 meter har tre gjeldende siffer og forteller at du har målt til nærmeste hundredels meter. Tallet 0,0045 har bare to gjeldende siffer -- de ledende nullene teller ikke, de bare angir størrelsesordens. Tallet 1000 er tvetydig: er det målt nøyaktig, eller er det avrundet? Bedre å skrive 1,0 ganger 10 opphøyd i 3 (to gjeldende siffer) eller 1,000 ganger 10 opphøyd i 3 (fire gjeldende siffer).

Når du regner med målinger, gjelder viktige regler. Ved multiplikasjon og divisjon rundes svaret til det antall gjeldende siffer som den minst presise faktoren har. Eksempel: 3,24 m ganger 1,5 m gir 4,86 kvadratmeter, men må rundes til 4,9 kvadratmeter fordi 1,5 bare har to gjeldende siffer.

Usikkerhet kan uttrykkes på flere måter. **Absolutt usikkerhet** angis i samme enhet som målingen: lengde = 5,32 pluss minus 0,01 meter. **Relativ usikkerhet** uttrykkes som prosent: 0,01 delt på 5,32 ganger 100 prosent = 0,19 prosent. I grafer vises usikkerhet som **feilstaver** rundt datapunktene. Som tommelfingerregel er usikkerheten ofte halvparten av minste avlesbare enhet: en linjal med 1 mm-inndeling gir pluss minus 0,5 mm, mens en stoppeklokke med manuell betjening har pluss minus 0,1 til 0,3 sekunder på grunn av reaksjonstid.`,
    },
    {
      id: 'nat-vg1-10-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på gjeldende siffer og usikkerhet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-5-n-quiz2-q0',
            task: 'Hvor mange gjeldende siffer har tallet 0,00340?',
            options: [
              { id: 'a', text: '2', isCorrect: false },
              { id: 'b', text: '3', isCorrect: true },
              { id: 'c', text: '5', isCorrect: false },
              { id: 'd', text: '6', isCorrect: false },
            ],
            solution:
              '0,00340 har 3 gjeldende siffer: 3, 4 og 0. De ledende nullene (0,00) teller ikke -- de angir bare størrelsesordens. Nullen etter 4 er gjeldende fordi den kommer etter komma etter andre siffer.',
          },
          {
            id: 'nat-vg1-10-5-n-quiz2-q1',
            task: 'Fem elever måler en pendeltid og får: 12,3 s, 12,7 s, 12,5 s, 12,4 s og 12,6 s. Hva er gjennomsnittet?',
            options: [
              { id: 'a', text: '12,3 s', isCorrect: false },
              { id: 'b', text: '12,5 s', isCorrect: true },
              { id: 'c', text: '12,7 s', isCorrect: false },
              { id: 'd', text: '12,4 s', isCorrect: false },
            ],
            solution:
              'Gjennomsnitt = (12,3 + 12,7 + 12,5 + 12,4 + 12,6) / 5 = 62,5 / 5 = 12,5 s. Spredningen (12,3 til 12,7) gir en usikkerhet på ca. ± 0,2 s.',
          },
          {
            id: 'nat-vg1-10-5-n-quiz2-q2',
            task: 'Hva er forskjellen mellom absolutt og relativ usikkerhet?',
            options: [
              { id: 'a', text: 'Absolutt er alltid større enn relativ', isCorrect: false },
              { id: 'b', text: 'Absolutt oppgis i målingens enhet, relativ oppgis som prosent', isCorrect: true },
              { id: 'c', text: 'De brukes i ulike vitenskaper', isCorrect: false },
              { id: 'd', text: 'Relativ usikkerhet er mer nøyaktig', isCorrect: false },
            ],
            solution:
              'Absolutt usikkerhet oppgis i samme enhet som målingen (f.eks. ± 0,1 g). Relativ usikkerhet oppgis som prosent av målt verdi (f.eks. 0,4 %). Relativ usikkerhet gjør det enklere å sammenligne presisjonen av ulike målinger.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-5-n-summary',
      type: 'text',
      content: `## Oppsummering

Alle målinger har usikkerhet, og å forstå den er en hjørnestein i naturvitenskapelig arbeid. **Nøyaktighet** er nærhet til sann verdi, **presisjon** er reproduserbarhet. **Systematiske feil** gir konsekvent avvik og må korrigeres ved å finne årsaken. **Tilfeldige feil** varierer tilfeldig og reduseres ved å ta mange målinger og beregne gjennomsnitt. **Gjeldende siffer** angir presisjonen i en måling, og regneregler sikrer at svaret ikke er mer presist enn utgangsdataene. Usikkerhet uttrykkes som **absolutt** (i målingens enhet) eller **relativ** (som prosent). I grafer vises den som feilstaver. Å kommunisere usikkerhet ærlig er ikke en svakhet -- det er det som gjør vitenskap pålitelig.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.6 NARRATIV: Teknologi og samfunn
// ============================================================================

export const CHAPTER_NAT_VG1_10_6_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-10-6-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '10.6',
  title: 'Teknologi og samfunn',
  subtitle: 'Narrativ versjon',
  description:
    'Teknologi er ikke nøytral -- den former samfunnet, og samfunnet former teknologien. Om SWOT-analyser, bærekraft og sirkulær økonomi.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte hvordan teknologisk utvikling påvirker samfunnet og individet',
  ],
  linkedChapterId: 'nat-vg1-10-6',
  content: [
    {
      id: 'nat-vg1-10-6-n-intro',
      type: 'text',
      content: `## Teknologiens doble ansikt

Forståelse av elektromagnetisme ga oss mobiltelefoner og WiFi. Kraftige datamaskiner ga oss klimamodeller og genomsekvensering. Naturvitenskap og teknologi henger uløselig sammen: vitenskapelig kunnskap danner grunnlaget for ny teknologi, og ny teknologi gjør ny vitenskap mulig. Men dette samspillet er ikke bare positivt.

Teknologi er nemlig ikke nøytral. Den utvikles av mennesker med verdier, interesser og makt. Sosiale medier ble designet for å holde deg engasjert -- ikke nødvendigvis for å gjøre deg lykkelig. Biler ble designet for hastighet og bekvemmelighet -- ikke for å redusere utslipp. Designvalg bestemmer hva som er mulig og hva som er vanskelig, og disse valgene reflekterer verdiene til dem som utvikler teknologien. Teknologi har både tilsiktede og utilsiktede konsekvenser, og bruken avhenger av sosiale, økonomiske og politiske forhold. Teknologivalg er dermed også verdivalg.

**Teknologivurdering** er en systematisk tilnærming for å vurdere teknologiens virkninger på samfunn, miljø og individ. Den stiller spørsmål som: Hvilke problemer løser teknologien? Hvem har nytte, og hvem bærer kostnadene? Hvilke utilsiktede konsekvenser kan oppstå? Finnes det alternative løsninger? Er teknologien reversibel? Ulike interessenter -- forskere, industri, forbrukere, miljøorganisasjoner, myndigheter og fremtidige generasjoner -- har ulike perspektiver på disse spørsmålene.`,
    },
    {
      id: 'nat-vg1-10-6-n-section1',
      type: 'text',
      content: `## SWOT-analyse i praksis

Et nyttig verktøy for å vurdere teknologi er **SWOT-analysen**. Den kartlegger fire dimensjoner: **Styrker** (Strengths) -- hva er fordelene? **Svakheter** (Weaknesses) -- hva er begrensningene? **Muligheter** (Opportunities) -- hvilke nye dører åpner teknologien? **Trusler** (Threats) -- hvilke risikoer følger med?

La oss ta mobiltelefoner som eksempel. Styrkene er åpenbare: kommunikasjon, tilgang til informasjon, sikkerhet. Svakhetene inkluderer avhengighet, distraksjon og overvåkingsmuligheter. Mulighetene er mange: mobil helse i utviklingsland, utdanning, inkludering av marginaliserte grupper. Truslene er reelle: personvern, sosiale mediers påvirkning på mental helse, og e-avfall fra milliarder av utrangerte telefoner.

**Kunstig intelligens** (AI) er et annet godt eksempel. Styrker: effektivisering av arbeid, medisinsk diagnostikk, forskning. Svakheter: skjevheter i data som kan forsterke diskriminering, mangel på åpenhet i «svarte bokser». Muligheter: løse komplekse problemer som klimamodellering, personalisert læring. Trusler: tap av arbeidsplasser, autonome våpen, overvåkingssamfunn, masseproduksjon av feilinformasjon.

Selv noe så hverdagslig som **plastikk** fortjener en SWOT. Styrker: billig, lett, holdbart, formbart -- egenskaper som har revolusjonert alt fra medisinsk utstyr til emballasje. Svakheter: brytes nesten ikke ned, lages fra olje. Muligheter: resirkulering, bionedbrytbar plast. Trusler: havforurensning, mikroplast i næringskjeden, mulige helseeffekter.`,
    },
    {
      id: 'nat-vg1-10-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på teknologivurdering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-6-n-quiz1-q0',
            task: 'Hva står SWOT for?',
            options: [
              { id: 'a', text: 'Science, Work, Observation, Technology', isCorrect: false },
              { id: 'b', text: 'Strengths, Weaknesses, Opportunities, Threats', isCorrect: true },
              { id: 'c', text: 'System, Welfare, Operation, Testing', isCorrect: false },
              { id: 'd', text: 'Safety, Waste, Output, Timing', isCorrect: false },
            ],
            solution:
              'SWOT står for Strengths (Styrker), Weaknesses (Svakheter), Opportunities (Muligheter) og Threats (Trusler). Det er et rammeverk for å vurdere en teknologi fra flere sider.',
          },
          {
            id: 'nat-vg1-10-6-n-quiz1-q1',
            task: 'Hvorfor sier vi at teknologi ikke er nøytral?',
            options: [
              { id: 'a', text: 'Fordi den alltid er skadelig', isCorrect: false },
              { id: 'b', text: 'Fordi designvalg reflekterer verdier og bestemmer hva som er mulig', isCorrect: true },
              { id: 'c', text: 'Fordi bare noen land har tilgang til teknologi', isCorrect: false },
              { id: 'd', text: 'Fordi forskere er partiske', isCorrect: false },
            ],
            solution:
              'Teknologi utvikles av mennesker med verdier og interesser. Designvalg bestemmer hva som er mulig og hva som er vanskelig, og fordeling av teknologi er ujevn. Sosiale medier designet for engasjement er et eksempel.',
          },
          {
            id: 'nat-vg1-10-6-n-quiz1-q2',
            task: 'Hva er teknologivurdering?',
            options: [
              { id: 'a', text: 'En test av om teknologien virker som den skal', isCorrect: false },
              { id: 'b', text: 'En prissammenligning av ulike teknologier', isCorrect: false },
              { id: 'c', text: 'En systematisk vurdering av teknologiens virkninger på samfunn, miljø og individ', isCorrect: true },
              { id: 'd', text: 'En rankingliste over de beste teknologiene', isCorrect: false },
            ],
            solution:
              'Teknologivurdering er en systematisk vurdering som ser på hvem som har nytte, hvem som bærer risiko, utilsiktede konsekvenser, alternativer og reversibilitet.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-6-n-section2',
      type: 'text',
      content: `## Bærekraft og sirkulær økonomi

**Bærekraftig utvikling** betyr å dekke dagens behov uten å ødelegge mulighetene for fremtidige generasjoner. Det har tre dimensjoner som alle må ivaretas: **miljømessig** bærekraft handler om å ikke tømme ressurser eller ødelegge naturen, **sosial** bærekraft handler om rettferdig fordeling, menneskerettigheter og helse, og **økonomisk** bærekraft handler om at løsninger må være levedyktige på lang sikt.

En nøkkelstrategi er **sirkulær økonomi** -- å gå fra «ta-bruk-kast» til «bruk-gjenbruk-resirkuler». I stedet for å utvinne råvarer, lage et produkt og kaste det, designer vi produkter for lang levetid og reparasjon, og holder materialer i kretsløp. For mobiltelefoner betyr det utskiftbart batteri, programvareoppdateringer i mange år, innsamlingsordninger, gjenvinning av verdifulle metaller som gull og kobolt, og kanskje leasingmodeller der produsenten tar ansvar for hele livssyklusen.

**Føre-var-prinsippet** er også sentralt: ved usikkerhet om konsekvensene, handle forsiktig. Og vi må tenke globalt selv når vi handler lokalt. Teknologivalg i Norge påvirker resten av verden gjennom utvinning av råvarer, produksjon i andre land, og avfallshåndtering. Hver gang du kjøper en ny telefon, har det konsekvenser for gruvearbeidere i Kongo, fabrikkarbeidere i Kina og e-avfallshåndterere i Ghana. Bærekraftig teknologiutvikling krever at vi tar ansvar for hele verdikjeden.`,
    },
    {
      id: 'nat-vg1-10-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på bærekraft og sirkulær økonomi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-6-n-quiz2-q0',
            task: 'Hva er sirkulær økonomi?',
            options: [
              { id: 'a', text: 'En økonomi der penger sirkulerer raskere', isCorrect: false },
              { id: 'b', text: 'Et system der ressurser holdes i bruk lengst mulig gjennom gjenbruk og resirkulering', isCorrect: true },
              { id: 'c', text: 'En økonomisk modell basert på rotasjon av arbeidsplasser', isCorrect: false },
              { id: 'd', text: 'Et system der bare fornybare materialer brukes', isCorrect: false },
            ],
            solution:
              'Sirkulær økonomi handler om å holde ressurser i bruk lengst mulig gjennom gjenbruk, reparasjon og resirkulering, i stedet for å ta-bruke-kaste (lineær økonomi).',
          },
          {
            id: 'nat-vg1-10-6-n-quiz2-q1',
            task: 'Hvilke tre dimensjoner har bærekraftig utvikling?',
            options: [
              { id: 'a', text: 'Teknologisk, politisk og kulturell', isCorrect: false },
              { id: 'b', text: 'Miljømessig, sosial og økonomisk', isCorrect: true },
              { id: 'c', text: 'Lokal, nasjonal og global', isCorrect: false },
              { id: 'd', text: 'Kort, middels og lang sikt', isCorrect: false },
            ],
            solution:
              'Bærekraftig utvikling har tre dimensjoner: miljømessig (ikke tømme ressurser), sosial (rettferdig fordeling og menneskerettigheter) og økonomisk (levedyktig på lang sikt). Alle tre må ivaretas.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-6-n-summary',
      type: 'text',
      content: `## Oppsummering

Vitenskap og teknologi påvirker hverandre gjensidig, og teknologi er ikke nøytral -- den reflekterer verdiene til dem som utvikler den. **Teknologivurdering** gir en systematisk tilnærming til å vurdere konsekvenser, og **SWOT-analysen** kartlegger styrker, svakheter, muligheter og trusler. **Bærekraftig utvikling** krever at vi ivaretar miljømessige, sosiale og økonomiske dimensjoner samtidig. **Sirkulær økonomi** holder ressurser i bruk gjennom gjenbruk og resirkulering. **Føre-var-prinsippet** anbefaler forsiktighet ved usikkerhet, og vi må tenke globalt selv når vi handler lokalt. Teknologivalg er verdivalg, og vi har alle et ansvar for å delta i debatten om hvilken teknologisk fremtid vi ønsker.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.7 NARRATIV: Naturvitenskapens rolle i samfunnsdebatten
// ============================================================================

export const CHAPTER_NAT_VG1_10_7_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-10-7-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '10.7',
  title: 'Naturvitenskapens rolle i samfunnsdebatten',
  subtitle: 'Narrativ versjon',
  description:
    'Vitenskap forteller oss hva som er -- ikke hva vi bør gjøre. Om kritisk tenkning, kildekritikk og grensen mellom fakta og verdier.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte hvordan naturvitenskap kan bidra til å løse samfunnsutfordringer',
  ],
  linkedChapterId: 'nat-vg1-10-7',
  content: [
    {
      id: 'nat-vg1-10-7-n-intro',
      type: 'text',
      content: `## Fakta og verdier

Skal vi bygge vindkraftverk i norsk natur? Bør alle barn vaksineres? Er genmodifisert mat trygt? Disse spørsmålene har noe til felles: de krever både naturvitenskapelig kunnskap og verdivalg. Og det er avgjørende å forstå forskjellen.

Vitenskapens rolle er å beskrive hvordan ting er, forklare sammenhenger mellom årsak og virkning, forutsi konsekvenser av ulike valg, og utvikle løsninger og teknologi. Politikkens rolle er å bestemme mål og verdier, veie ulike hensyn mot hverandre, ta beslutninger på vegne av fellesskapet, og fordele ressurser og byrder. Vitenskap kan fortelle oss at 97 prosent av klimaforskere mener at klimaendringene er menneskeskapte. Men hvordan vi skal handle -- hvor store kutt vi skal ta, hvem som skal bære byrden, og hvordan vi balanserer klimatiltak mot andre behov -- det er politiske og etiske spørsmål som vitenskap alene ikke kan svare på.

Denne distinksjonen er viktig fordi den beskytter begge sider. Vitenskap skal ikke bestemme politikk, og politikk skal ikke bestemme vitenskap. Forskere bør fortelle sannheten om hva de finner, og politikere bør bruke denne kunnskapen som grunnlag for beslutninger -- men verdivalgene tilhører demokratiet.`,
    },
    {
      id: 'nat-vg1-10-7-n-section1',
      type: 'text',
      content: `## Vitenskapelig konsensus og misbruk av usikkerhet

All vitenskap har usikkerhet. Modeller er forenklinger, data er begrenset, og noen sammenhenger er komplekse. Men usikkerhet betyr ikke at vi ikke vet noe -- det betyr at vi vet omtrent hvor mye vi vet. Dessverre misbrukes vitenskapelig usikkerhet ofte i samfunnsdebatten.

«Forskerne er ikke enige» er en vanlig påstand som brukes til å avvise etablert kunnskap. Men i realiteten er det bred **vitenskapelig konsensus** om mange viktige spørsmål: at klimaendringene primært er menneskeskapte, at vaksiner er trygge og effektive, at evolusjon forklarer artsmangfoldet, og at røyking forårsaker kreft. Vitenskapelig konsensus oppstår når det store flertallet av eksperter, basert på mange uavhengige studier, er enige.

«Vi vet ikke nok, så vi bør vente» er et annet argument som brukes til å utsette handling. Men **forsiktighetsprinsippet** sier det motsatte: når konsekvensene av å ta feil kan være alvorlige og irreversible, bør vi handle forsiktig selv uten fullstendig kunnskap. Vi vet nok om klimaendringene til å handle, og å vente gjør problemet verre.

Å fokusere på enkeltstudier som «motbevis» mot konsensus er en form for **cherrypicking** -- å velge ut bare det som støtter en bestemt konklusjon, mens man ignorerer den overveldende mengden bevis som peker i en annen retning. En enkelt studie kan ha feil eller tilfeldige resultater. Konsensus bygger på tusenvis av studier gjort med ulike metoder av ulike forskere over lang tid.`,
    },
    {
      id: 'nat-vg1-10-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på vitenskap og samfunn:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-7-n-quiz1-q0',
            task: 'Hva er vitenskapelig konsensus?',
            options: [
              { id: 'a', text: 'At alle forskere er 100 % enige', isCorrect: false },
              { id: 'b', text: 'At det store flertallet av eksperter er enige basert på mange uavhengige studier', isCorrect: true },
              { id: 'c', text: 'At en studie er publisert i et anerkjent tidsskrift', isCorrect: false },
              { id: 'd', text: 'At politikerne har bestemt hva som er riktig', isCorrect: false },
            ],
            solution:
              'Vitenskapelig konsensus betyr at det store flertallet av eksperter på et felt er enige, basert på mange uavhengige studier over tid. Det krever ikke 100 % enighet, men bred enighet om hovedbildet.',
          },
          {
            id: 'nat-vg1-10-7-n-quiz1-q1',
            task: 'Hva er cherrypicking?',
            options: [
              { id: 'a', text: 'Å velge de beste forskerne til et prosjekt', isCorrect: false },
              { id: 'b', text: 'Å velge ut bare de dataene som støtter en bestemt konklusjon', isCorrect: true },
              { id: 'c', text: 'Å gjennomføre forskning i felt i stedet for laboratoriet', isCorrect: false },
              { id: 'd', text: 'Å velge forskningsmetode basert på tilgjengelig utstyr', isCorrect: false },
            ],
            solution:
              'Cherrypicking er å selektivt velge ut data eller studier som støtter en forhåndsbestemt konklusjon, mens man ignorerer mengden bevis som peker i en annen retning. Det er en vanlig feilslutning i samfunnsdebatten.',
          },
          {
            id: 'nat-vg1-10-7-n-quiz1-q2',
            task: 'Hva er forskjellen mellom vitenskapens og politikkens rolle i klimaspørsmålet?',
            options: [
              { id: 'a', text: 'Vitenskap bestemmer hva vi skal gjøre, politikk gjennomfører det', isCorrect: false },
              { id: 'b', text: 'Vitenskap beskriver og forklarer, politikk velger mål og handling basert på verdier', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell -- begge bidrar likt', isCorrect: false },
              { id: 'd', text: 'Politikk bestemmer hva som er sant, vitenskap gjennomfører forskning', isCorrect: false },
            ],
            solution:
              'Vitenskap beskriver hva som skjer, forklarer årsaker og forutsier konsekvenser. Politikk velger mål, veier hensyn og tar beslutninger basert på verdivalg. Vitenskap forteller oss hva som sannsynligvis skjer -- politikken bestemmer hva vi gjør med det.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-7-n-section2',
      type: 'text',
      content: `## Kritisk tenkning og vitenskap som menneskelig aktivitet

**Kritisk tenkning** er evnen til å vurdere påstander, argumenter og bevis på en systematisk måte. I en tid med overflod av informasjon og desinformasjon er denne evnen viktigere enn noensinne. Når du møter en påstand, bør du spørre: Hvem sier dette, og hva er deres interesser? Hva er kilden til påstanden? Hvilke bevis presenteres, og er de etterprøvbare? Hva sier det store flertallet av eksperter? Finnes det alternative forklaringer?

Det finnes flere røde flagg du bør se opp for: appell til følelser fremfor fakta, angrep på person fremfor argument, cherrypicking, bruk av falske eksperter, konspirasjonsteorier, og forenklede sammenligninger. Pålitelig informasjon finner du i fagfellevurdert forskning, hos anerkjente vitenskapelige institusjoner som FNs klimapanel (IPCC), WHO og Folkehelseinstituttet, og i oppslagsverk som Store Norske Leksikon.

Det er også viktig å forstå at vitenskap er en menneskelig aktivitet. Forskere har fordommer og forutinntatthet, forskning styres av finansiering og prioriteringer, og spørsmålene som stilles reflekterer verdier. Hvilke sykdommer det forskes mest på, påvirkes av hva som er lønnsomt. Tropiske sykdommer som rammer fattige land får mindre forskningsmidler enn sykdommer i rike land. Vitenskap streber etter objektivitet gjennom systematiske metoder, åpenhet, fagfellevurdering og selvkorreksjon over tid -- men den er ikke helt verdifri.

Genteknologi illustrerer dette godt: vitenskap kan fortelle oss at vi kan redigere gener i mennesker. Men vitenskap kan ikke fortelle oss om vi bør gjøre det -- det er et etisk og politisk spørsmål. **Naturvitenskapelig allmenndannelse** -- evnen til å forstå vitenskapelige begreper, metoder og grenser -- er avgjørende for at alle borgere kan delta i den demokratiske debatten om saker som klimapolitikk, vaksinasjon og genteknologi.`,
    },
    {
      id: 'nat-vg1-10-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kritisk tenkning og kildekritikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-10-7-n-quiz2-q0',
            task: 'Hva er fagfellevurdering?',
            options: [
              { id: 'a', text: 'En populærvitenskapelig anmeldelse av forskning', isCorrect: false },
              { id: 'b', text: 'At forskere vurderer og kritiserer kollegers arbeid før publisering', isCorrect: true },
              { id: 'c', text: 'En offentlig debatt om forskningsresultater', isCorrect: false },
              { id: 'd', text: 'At studenter vurderer hverandres oppgaver', isCorrect: false },
            ],
            solution:
              'Fagfellevurdering (peer review) er en kvalitetskontroll der uavhengige eksperter vurderer forskning før den publiseres. Det er en viktig mekanisme for å sikre kvaliteten og påliteligheten i vitenskap.',
          },
          {
            id: 'nat-vg1-10-7-n-quiz2-q1',
            task: 'Hvorfor er naturvitenskapelig allmenndannelse viktig i et demokrati?',
            options: [
              { id: 'a', text: 'Fordi alle bør bli forskere', isCorrect: false },
              { id: 'b', text: 'Fordi borgere trenger å forstå vitenskap for å delta i debatter om klima, vaksiner og genteknologi', isCorrect: true },
              { id: 'c', text: 'Fordi det gjør det enklere å få jobb', isCorrect: false },
              { id: 'd', text: 'Fordi naturvitenskap er det viktigste skolefaget', isCorrect: false },
            ],
            solution:
              'Mange politiske saker har vitenskapelige aspekter. Borgere trenger å forstå vitenskap for å vurdere påstander kritisk, unngå å bli manipulert av feilinformasjon, og delta meningsfylt i demokratiske debatter.',
          },
          {
            id: 'nat-vg1-10-7-n-quiz2-q2',
            task: 'En politiker sier: «Forskerne er uenige om klimaendringene.» Hva er problemet med denne påstanden?',
            options: [
              { id: 'a', text: 'Den er helt korrekt -- forskerne er uenige', isCorrect: false },
              { id: 'b', text: 'Den er misvisende -- over 97 % av klimaforskere er enige om at klimaendringene er menneskeskapte', isCorrect: true },
              { id: 'c', text: 'Den er irrelevant fordi politikere ikke bør uttale seg om vitenskap', isCorrect: false },
              { id: 'd', text: 'Den er feil fordi alle forskere alltid er enige', isCorrect: false },
            ],
            solution:
              'Påstanden er misvisende fordi over 97 % av klimaforskere er enige om hovedbildet. Uenigheten gjelder detaljer og konsekvenser, ikke om oppvarmingen er menneskeskapt. Å si at "forskerne er uenige" er en form for misbruk av vitenskapelig usikkerhet.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-10-7-n-summary',
      type: 'text',
      content: `## Oppsummering

Naturvitenskap og politikk har ulike, men komplementære roller: vitenskap beskriver og forklarer, politikk velger mål og handler basert på verdier. **Vitenskapelig konsensus** -- bred enighet blant eksperter basert på mange studier -- er et pålitelig grunnlag for beslutninger, og misbruk av vitenskapelig usikkerhet bør gjenkjennes og avvises. **Kritisk tenkning** og **kildekritikk** er essensielle ferdigheter for å navigere i en informasjonsrik verden: vurder hvem som sier hva, hvilke bevis som finnes, og hva ekspertene mener. Vitenskap er en menneskelig aktivitet som streber etter objektivitet gjennom **fagfellevurdering** og selvkorreksjon, men som også påvirkes av verdier og prioriteringer. **Naturvitenskapelig allmenndannelse** er avgjørende for at borgere skal kunne delta meningsfylt i demokratiske debatter om klima, vaksinasjon, genteknologi og energipolitikk.`,
    },
  ],
  exercises: [],
};

export const NAT_VG1_NARRATIV_DEL6B_CHAPTERS = [
  CHAPTER_NAT_VG1_10_1_NARRATIV,
  CHAPTER_NAT_VG1_10_2_NARRATIV,
  CHAPTER_NAT_VG1_10_3_NARRATIV,
  CHAPTER_NAT_VG1_10_4_NARRATIV,
  CHAPTER_NAT_VG1_10_5_NARRATIV,
  CHAPTER_NAT_VG1_10_6_NARRATIV,
  CHAPTER_NAT_VG1_10_7_NARRATIV,
];
