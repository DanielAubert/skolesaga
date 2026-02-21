/**
 * Tekstbok innhold for Naturfag VG1 - NARRATIV VERSJON DEL 3B
 * Seksjon 4: Kjemi - Atomet, periodesystemet og bindinger (Kapittel 4.1-4.5)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-sporsmaal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1 NARRATIV: Atomets oppbygning
// ============================================================================

export const CHAPTER_NAT_VG1_4_1_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-4-1-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '4.1',
  title: 'Atomets oppbygning',
  subtitle: 'Narrativ versjon',
  description:
    'En reise inn i materiens minste byggesteiner -- fra de usynlige partiklene i atomkjernen til elektronene som bestemmer hvordan alt i verden oppfoerer seg.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og gjoere rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer',
  ],
  linkedChapterId: 'nat-vg1-4-1',
  content: [
    {
      id: 'nat-vg1-4-1-n-intro',
      type: 'text',
      content: `## Alt er bygget av atomer

Tenk deg at du tar et glass vann og halverer det. Saa halverer du den ene halvdelen igjen. Og igjen. Og igjen. Hvor mange ganger kan du fortsette foer du naar noe som ikke lenger er vann? De gamle grekerne funderte paa dette spormaalet for over to tusen aar siden, og noen av dem -- blant dem filosofen Demokrit -- foreslo at det maatte finnes en minste, udelelig byggestein. De kalte den *atomos*, som betyr "det som ikke kan deles".

I dag vet vi at atomer faktisk *kan* deles, men ideen var genial: alt rundt deg -- luften du puster, vannet du drikker, mobilen i haanden din, ja selv kroppen din -- er bygget opp av **atomer**. De er utrolig smaa: det gaar ca. 10 millioner atomer paa bredden av et menneskehaar!

Et **atom** er den minste enheten av et grunnstoff som beholder grunnstoffets kjemiske egenskaper. Atomet bestaar av en liten, tung kjerne omgitt av lette elektroner. I kjernen finner vi **protoner**, som har positiv ladning og en masse paa omtrent 1 u, og **noytroner**, som er noytrale og har omtrent samme masse. Rundt kjernen kretser **elektroner**, som har negativ ladning og en masse paa bare 1/1836 av et proton -- nesten ingenting!

For aa faa en foelelse av stoerrelsen: Hvis atomkjernen var paa stoerrelse med en ert, ville elektronskyen strekke seg ut til ca. 100 meter. Atomet er altsaa nesten helt tomt rom. Alt du ser og tar paa, som foeles saa solid, er i virkeligheten mest tomrom.`,
    },
    {
      id: 'nat-vg1-4-1-n-section1',
      type: 'text',
      content: `## Atomnummer, massetall og isotoper

Hvert atom har et slags foedselsnummer som forteller oss noyaktig hva det er. Dette kalles **atomnummeret (Z)**, og det er rett og slett antall protoner i kjernen. Hydrogen har 1 proton, saa atomnummeret er 1. Karbon har 6 protoner, saa atomnummeret er 6. Oksygen har 8 protoner. Natrium har 11. Klor har 17. Det er protonene som bestemmer hvilket grunnstoff et atom er -- det er grunnstoffets "identitetsnummer".

I et elektrisk noytralt atom er antall elektroner lik antall protoner. Et oksygenatom har dermed 8 protoner og 8 elektroner.

Saa har vi **massetallet (A)**, som er summen av protoner og noytroner i kjernen. Formelen er enkel: **A = Z + N**, der N er antall noytroner. Karbon-12 har for eksempel 6 protoner og 6 noytroner, saa massetallet er 12. Et jernatom med symbol 56/26-Fe har atomnummer 26 og massetall 56, noe som betyr at det har 26 protoner, 26 elektroner og 30 noytroner.

Men her kommer noe fascinerende: Atomer av *samme grunnstoff* kan ha *ulikt antall noytroner*. Slike varianter kalles **isotoper**. Karbons tre isotoper illustrerer dette perfekt. **Karbon-12** har 6 protoner og 6 noytroner og er den vanligste, stabile formen. **Karbon-13** har 6 protoner og 7 noytroner og er ogsaa stabil, men sjelden. **Karbon-14** har 6 protoner og 8 noytroner og er radioaktiv.

Alle tre er karbon fordi de har 6 protoner, og de har nesten identiske kjemiske egenskaper. Hydrogen er et annet fint eksempel: **protium** (vanlig hydrogen) har ingen noytroner, **deuterium** har 1 noytron, og **tritium** har 2 noytroner og er radioaktivt.

Isotoper har viktige bruksomraader. **Karbon-14-datering** brukes til aa bestemme alderen paa arkeologiske funn. Prinsippet er elegant: levende organismer tar opp karbon fra omgivelsene, inkludert en liten andel radioaktiv karbon-14. Naar organismen doer, slutter den aa ta opp nytt karbon, og karbon-14 brytes ned med en **halveringstid** paa 5730 aar. Ved aa maale hvor mye karbon-14 som er igjen, kan vi beregne naar organismen doede. Et trestykke med bare 25 prosent av opprinnelig karbon-14 har gaatt gjennom to halveringstider, altsaa 2 ganger 5730 aar, som er ca. 11 460 aar. Radioaktive isotoper brukes ogsaa i medisin for aa spore stoffer i kroppen, og uran-235 driver kjernekraftverk.`,
    },
    {
      id: 'nat-vg1-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa atomets bestanddeler og isotoper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-4-1-n-quiz1-q0',
            task: 'Hva bestemmer hvilket grunnstoff et atom er?',
            options: [
              { id: 'a', text: 'Antall noytroner i kjernen', isCorrect: false },
              { id: 'b', text: 'Antall elektroner rundt kjernen', isCorrect: false },
              { id: 'c', text: 'Antall protoner i kjernen', isCorrect: true },
              { id: 'd', text: 'Massetallet', isCorrect: false },
            ],
            solution:
              'Atomnummeret (Z), som er antall protoner i kjernen, bestemmer hvilket grunnstoff et atom er. Det er grunnstoffets identitetsnummer. For eksempel har alle karbonatomnummer alltid 6 protoner.',
          },
          {
            id: 'nat-vg1-4-1-n-quiz1-q1',
            task: 'Et atom har massetall 56 og atomnummer 26. Hvor mange noytroner har det?',
            options: [
              { id: 'a', text: '26', isCorrect: false },
              { id: 'b', text: '56', isCorrect: false },
              { id: 'c', text: '82', isCorrect: false },
              { id: 'd', text: '30', isCorrect: true },
            ],
            solution:
              'Massetall (A) = protoner (Z) + noytroner (N). Altsaa N = A - Z = 56 - 26 = 30 noytroner. Dette er jern (Fe).',
          },
          {
            id: 'nat-vg1-4-1-n-quiz1-q2',
            task: 'Hva er isotoper?',
            options: [
              { id: 'a', text: 'Atomer av ulike grunnstoff med samme massetall', isCorrect: false },
              { id: 'b', text: 'Atomer av samme grunnstoff med ulikt antall noytroner', isCorrect: true },
              { id: 'c', text: 'Atomer som har mistet alle elektronene sine', isCorrect: false },
              { id: 'd', text: 'Atomer med like mange protoner og noytroner', isCorrect: false },
            ],
            solution:
              'Isotoper er atomer av samme grunnstoff (samme antall protoner) men med ulikt antall noytroner. De har derfor ulikt massetall, men nesten identiske kjemiske egenskaper. Eksempel: karbon-12, karbon-13 og karbon-14.',
          },
          {
            id: 'nat-vg1-4-1-n-quiz1-q3',
            task: 'Karbon-14 har en halveringstid paa 5730 aar. Hvor gammel er en proeve med 25 prosent av opprinnelig karbon-14?',
            options: [
              { id: 'a', text: 'Ca. 5730 aar', isCorrect: false },
              { id: 'b', text: 'Ca. 11 460 aar', isCorrect: true },
              { id: 'c', text: 'Ca. 17 190 aar', isCorrect: false },
              { id: 'd', text: 'Ca. 2865 aar', isCorrect: false },
            ],
            solution:
              'Etter 1 halveringstid er 50 prosent igjen. Etter 2 halveringstider er 25 prosent igjen. 2 ganger 5730 = 11 460 aar.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-4-1-n-section2',
      type: 'text',
      content: `## Elektronskall og valenselektroner

Elektronene befinner seg ikke tilfeldig rundt kjernen -- de er ordnet i bestemte **skall**, ogsaa kalt energinivaaer. Du kan tenke paa det som konsentriske sirkler rundt kjernen, litt som lagene i en loek.

Det innerste skallet kalles **K-skallet** og har plass til maksimalt 2 elektroner. Neste er **L-skallet** med plass til 8 elektroner. Deretter foelger **M-skallet** med plass til 18, og **N-skallet** med plass til 32. Moenstereteer foelger formelen 2 ganger n i andre, der n er skallnummeret.

Elektronene fyller skallene innenfra og ut, som aa fylle vann i skaalersom staar inni hverandre. Foerst fylles K-skallet, saa L-skallet, saa M-skallet, og saa videre. Vi skriver **elektronkonfigurasjonen** som antall elektroner i hvert skall, adskilt med komma. Hydrogen med 1 elektron har konfigurasjonen 1. Karbon med 6 elektroner har 2, 4. Oksygen med 8 elektroner har 2, 6. Natrium med 11 elektroner har 2, 8, 1. Klor med 17 elektroner har 2, 8, 7. Argon med 18 elektroner har 2, 8, 8. Kalsium med 20 elektroner har 2, 8, 8, 2.

Elektronene i det ytterste skallet er de aller viktigste for kjemien, og de har et eget navn: **valenselektroner**. Det er disse som bestemmer atomets kjemiske egenskaper og hvordan det binder seg til andre atomer.

Saa hva er det spesielle med edelgassene -- helium, neon og argon? De har fulle ytterste skall! Helium har 2 elektroner i K-skallet, neon har 2, 8 og argon har 2, 8, 8. Disse fulle skallene gjor dem ekstremt stabile, og de reagerer nesten ikke med andre stoffer.

Dette gir oss **oktetregelen**: atomer "oensker" aa oppnaa **edelgasskonfigurasjon** -- 8 elektroner i ytterste skall (eller 2 for de minste atomene). De gjoer dette ved aa gi fra seg elektroner (metaller), ta opp elektroner (ikke-metaller), eller dele elektroner (kovalent binding). Natrium med konfigurasjonen 2, 8, 1 gir gjerne fra seg sitt ene valenselektron og blir Na+ med konfigurasjonen 2, 8 -- akkurat som neon! Klor med 2, 8, 7 tar gjerne opp ett elektron og blir Cl- med 2, 8, 8 -- akkurat som argon! Denne "jakten" paa edelgasskonfigurasjon er drivkraften bak nesten all kjemi.`,
    },
    {
      id: 'nat-vg1-4-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa elektronskall og edelgasskonfigurasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-4-1-n-quiz2-q0',
            task: 'Hva er elektronkonfigurasjonen til natrium (Z=11)?',
            options: [
              { id: 'a', text: '2, 9', isCorrect: false },
              { id: 'b', text: '2, 8, 1', isCorrect: true },
              { id: 'c', text: '2, 7, 2', isCorrect: false },
              { id: 'd', text: '11', isCorrect: false },
            ],
            solution:
              'Natrium har 11 elektroner. K-skallet fylles foerst med 2, saa L-skallet med 8 (fullt), og det gjenstaar 1 elektron i M-skallet. Konfigurasjonen er 2, 8, 1.',
          },
          {
            id: 'nat-vg1-4-1-n-quiz2-q1',
            task: 'Hvor mange valenselektroner har svovel (Z=16)?',
            options: [
              { id: 'a', text: '2', isCorrect: false },
              { id: 'b', text: '8', isCorrect: false },
              { id: 'c', text: '6', isCorrect: true },
              { id: 'd', text: '16', isCorrect: false },
            ],
            solution:
              'Svovel har elektronkonfigurasjon 2, 8, 6. Valenselektronene er elektronene i ytterste skall, altsaa 6.',
          },
          {
            id: 'nat-vg1-4-1-n-quiz2-q2',
            task: 'Hvorfor er edelgassene saa lite reaktive?',
            options: [
              { id: 'a', text: 'De har svart faa elektroner', isCorrect: false },
              { id: 'b', text: 'De har fulle ytterste elektronskall', isCorrect: true },
              { id: 'c', text: 'De har ingen noytroner', isCorrect: false },
              { id: 'd', text: 'De er de tyngste grunnstoffene', isCorrect: false },
            ],
            solution:
              'Edelgassene har fulle ytterste skall (8 elektroner, eller 2 for helium). Denne konfigurasjonen er svart stabil, saa de har ingen "grunn" til aa reagere med andre stoffer.',
          },
          {
            id: 'nat-vg1-4-1-n-quiz2-q3',
            task: 'Natrium (2, 8, 1) reagerer lett med klor (2, 8, 7). Hva er grunnen?',
            options: [
              { id: 'a', text: 'Begge er metaller og tiltrekker hverandre', isCorrect: false },
              { id: 'b', text: 'De har samme antall elektronskall', isCorrect: false },
              { id: 'c', text: 'Natrium kan gi sitt ekstra elektron til klor, saa begge faar edelgasskonfigurasjon', isCorrect: true },
              { id: 'd', text: 'De har begge 8 valenselektroner', isCorrect: false },
            ],
            solution:
              'Natrium har 1 valenselektron "for mye" og klor mangler 1 elektron for fullt skall. Ved aa overfore elektronet faar Na+ konfigurasjonen 2, 8 (som neon) og Cl- faar 2, 8, 8 (som argon). Begge faar edelgasskonfigurasjon!',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-4-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Fra de gamle grekernes filosofiske spekulasjoner til moderne partikkelfysikk -- forstaaelsen av atomet er en av vitenskapens stoerste bragder. I dette kapittelet har du sett at selv det usynlig smaa foelger elegante regler.

**Nokkelkunnskapen fra dette kapittelet:**

- **Atomets bestanddeler**: Protoner (positive, i kjernen, bestemmer grunnstoffet), noytroner (noytrale, i kjernen, pavirker massen), og elektroner (negative, rundt kjernen, bestemmer kjemiske egenskaper)
- **Atomnummer (Z)** er antall protoner og grunnstoffets identitet. **Massetall (A)** er protoner pluss noytroner: A = Z + N
- **Isotoper** er atomer av samme grunnstoff med ulikt antall noytroner. Karbon-14-datering bruker radioaktive isotoper til aa bestemme alder, med halveringstid paa 5730 aar
- **Elektronkonfigurasjon**: Elektroner fyller skall innenfra og ut -- K-skallet tar 2, L-skallet tar 8, M-skallet tar 18. Valenselektronene i ytterste skall bestemmer kjemiske egenskaper
- **Edelgasskonfigurasjon**: Atomer streber etter fullt ytterste skall (8 elektroner, eller 2 for de minste), som gir ekstra stabilitet. Oktetregelen er drivkraften bak kjemiske reaksjoner`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2 NARRATIV: Periodesystemet
// ============================================================================

export const CHAPTER_NAT_VG1_4_2_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-4-2-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '4.2',
  title: 'Periodesystemet',
  subtitle: 'Narrativ versjon',
  description:
    'Historien om hvordan en russisk kjemiker ordnet grunnstoffene i et system saa genialt at det kunne forutsi oppdagelsen av grunnstoffer som ingen hadde sett.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og gjoere rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer',
  ],
  linkedChapterId: 'nat-vg1-4-2',
  content: [
    {
      id: 'nat-vg1-4-2-n-intro',
      type: 'text',
      content: `## Et kart over alt som finnes

Forestill deg at du har faat i oppdrag aa rydde et rom fullt av helt ulike ting -- boekerr, verktoy, matvarerr, klaser. Etter hvert ville du begynne aa sortere: kanskje etter stoerrelse, kanskje etter farge, kanskje etter funksjon. Det var noe lignende den russiske kjemikeren **Dmitrij Mendelejev** stod overfor i 1869. Han hadde rundt 63 kjente grunnstoffer og lurte paa om det fantes et system bak det hele.

Genialiteten til Mendelejev var at han ordnet grunnstoffene etter oekende atommasse og la merke til at egenskapene gjentok seg **periodisk** -- derav navnet **periodesystemet**. Men han gjorde mer enn bare aa organisere. Han lot hull staa i tabellen og forutsa egenskapene til grunnstoffer som ikke var oppdaget ennaa. Da disse grunnstoffene faktisk ble funnet, stemte forutsigelsene forbloeffende godt!

I dag ordner vi grunnstoffene etter **atomnummer** i stedet for atommasse, og vi kjenner 118 grunnstoffer. Periodesystemet er kanskje det viktigste verktoeyet i kjemi -- et kart over alt som finnes.`,
    },
    {
      id: 'nat-vg1-4-2-n-section1',
      type: 'text',
      content: `## Perioder, grupper og elektronkonfigurasjon

Periodesystemet er bygget opp av **perioder** (vannrette rader) og **grupper** (loddrette kolonner), og begge forteller deg noe viktig om elektronene.

Det er 7 perioder i systemet. Periode 1 inneholder bare hydrogen og helium. Periode 2 gaar fra litium til neon, og periode 3 fra natrium til argon. Det viktige er at **periodenummeret forteller deg antall elektronskall**. Grunnstoffer i periode 2 har 2 skall, grunnstoffer i periode 3 har 3 skall, og saa videre.

Det er 18 grupper, og elementer i samme gruppe har lignende egenskaper fordi de har **samme antall valenselektroner**. For hovedgruppene (gruppe 1, 2 og 13-18) kan du finne antall valenselektroner direkte fra gruppenummeret.

De viktigste gruppene har egne navn. **Gruppe 1** er **alkalimetallene** -- litium, natrium, kalium og rubidium -- som alle har 1 valenselektron. De er svart reaktive metaller. **Gruppe 2** er **jordalkalimetallene** -- beryllium, magnesium, kalsium og strontium -- med 2 valenselektroner. **Gruppe 17** er **halogenene** -- fluor, klor, brom og jod -- med 7 valenselektroner. De er reaktive ikke-metaller. Og **gruppe 18** er **edelgassene** -- helium, neon, argon og krypton -- med 8 valenselektroner (eller 2 for helium). De er nesten helt ureaktive.

Denne sammenhengen mellom posisjon og elektronkonfigurasjon gjor periodesystemet til et utrolig nyttig verktoy. Ta svovel som eksempel: det staar i periode 3, gruppe 16. Det betyr 3 elektronskall og 6 valenselektroner -- altsaa elektronkonfigurasjon 2, 8, 6. Du trenger ikke lare konfigurasjonen utenat, du kan lese den rett ut av periodesystemet!

Det er derfor natrium og kalium har lignende kjemiske egenskaper: begge er i gruppe 1, begge har 1 valenselektron (Na: 2, 8, 1 og K: 2, 8, 8, 1). Begge reagerer heftig med vann, begge danner +1-ioner, begge er myke metaller med lavt smeltepunkt.`,
    },
    {
      id: 'nat-vg1-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa periodesystemets oppbygning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-4-2-n-quiz1-q0',
            task: 'Hva forteller periodenummeret deg om et grunnstoff?',
            options: [
              { id: 'a', text: 'Antall protoner i kjernen', isCorrect: false },
              { id: 'b', text: 'Antall valenselektroner', isCorrect: false },
              { id: 'c', text: 'Antall elektronskall', isCorrect: true },
              { id: 'd', text: 'Antall noytroner', isCorrect: false },
            ],
            solution:
              'Periodenummeret angir antall elektronskall. Et grunnstoff i periode 3 har 3 elektronskall (K, L og M).',
          },
          {
            id: 'nat-vg1-4-2-n-quiz1-q1',
            task: 'Hvorfor har natrium og kalium lignende kjemiske egenskaper?',
            options: [
              { id: 'a', text: 'De har samme antall elektronskall', isCorrect: false },
              { id: 'b', text: 'De er begge i gruppe 1 og har 1 valenselektron', isCorrect: true },
              { id: 'c', text: 'De har begge 8 protoner', isCorrect: false },
              { id: 'd', text: 'De er naboer i samme periode', isCorrect: false },
            ],
            solution:
              'Natrium og kalium er begge i gruppe 1 (alkalimetaller) og har 1 valenselektron. Na har konfigurasjon 2, 8, 1 og K har 2, 8, 8, 1. Det er valenselektronene som bestemmer kjemiske egenskaper.',
          },
          {
            id: 'nat-vg1-4-2-n-quiz1-q2',
            task: 'Hva kalles grunnstoffene i gruppe 17?',
            options: [
              { id: 'a', text: 'Alkalimetaller', isCorrect: false },
              { id: 'b', text: 'Edelgasser', isCorrect: false },
              { id: 'c', text: 'Jordalkalimetaller', isCorrect: false },
              { id: 'd', text: 'Halogener', isCorrect: true },
            ],
            solution:
              'Gruppe 17 kalles halogenene og inkluderer fluor, klor, brom og jod. De har 7 valenselektroner og er svart reaktive ikke-metaller.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-4-2-n-section2',
      type: 'text',
      content: `## Metaller, ikke-metaller og halvmetaller

Periodesystemet kan ogsaa deles inn i tre store kategorier basert paa grunnstoffenes fysiske og kjemiske egenskaper.

**Metaller** utgjor omtrent 80 prosent av alle grunnstoffene og befinner seg til venstre og i midten av periodesystemet. De er gode ledere av varme og elektrisitet, har glinsende overflate, er formbare (kan hamres og trekkes til traader), og danner positive ioner kalt **kationer**. Eksempler er natrium, jern, kobber, gull og aluminium.

**Ikke-metaller** befinner seg til hoeyre i periodesystemet. De er daarlige ledere (isolatorer), ofte gasser eller sproe faste stoffer, og danner negative ioner kalt **anioner** eller deler elektroner med andre atomer. Eksempler er karbon, nitrogen, oksygen, fluor, klor og svovel. Hydrogen er litt spesiell -- den plasseres overst i gruppe 1, men er definitivt en ikke-metall.

Langs "trappen" mellom metaller og ikke-metaller finner vi **halvmetallene** (eller metalloidene). De har egenskaper som ligger midt imellom: de kan vaere halvledere, noe som gjor dem helt avgjorende for moderne elektronikk. Silisium er den mest kjente halvmetallen -- uten den, ingen datamaskiner, ingen smarttelefoner! Andre halvmetaller er germanium, arsen og bor.`,
    },
    {
      id: 'nat-vg1-4-2-n-section3',
      type: 'text',
      content: `## Trender i periodesystemet

Noe av det mest elegante med periodesystemet er at flere egenskaper viser systematiske trender -- moenstre du kan bruke til aa forutsi hvordan grunnstoffer oppfoerer seg.

**Atomradius** (atomets stoerrelse) oeker nedover i en gruppe fordi det legges til flere elektronskall. Men den minker bortover i en periode -- kanskje litt overraskende. Grunnen er at flere protoner i kjernen trekker elektronene naermere. Det stoerste atomet er francium nederst til venstre, og det minste er helium oeverst til hoeyre.

**Ioniseringsenergi** er energien som trengs for aa fjerne et elektron. Den oeker bortover i perioden fordi sterkere kjerneladning holder elektronene fastere. Den minker nedover i gruppen fordi valenselektronene er lenger fra kjernen og lettere aa rive loes. Hoeyest ioniseringsenergi har helium, lavest har francium.

**Elektronegativitet** er et atoms evne til aa tiltrekke seg elektroner i en binding. Trenden foelger samme moenster: den oeker bortover og minker nedover. Fluor er det mest elektronegative grunnstoffet med verdien 4,0 paa Pauling-skalaen. Francium har lavest med ca. 0,7.

Her er en enkel huskeregel: alle tre trendene gaar i samme retning. Mot ovre hoeyre hjorne av periodesystemet oeker elektronegativitet og ioniseringsenergi, mens atomradius minker. Vil du for eksempel ordne litium, natrium og kalium etter oekende ioniseringsenergi, vet du at alle er i gruppe 1 og at ioniseringsenergien minker nedover. Svaret er K (lavest), Na, Li (hoeyest).`,
    },
    {
      id: 'nat-vg1-4-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa klassifisering og periodetrender:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-4-2-n-quiz2-q0',
            task: 'Hvor i periodesystemet finner du metallene?',
            options: [
              { id: 'a', text: 'Til hoeyre og oeverst', isCorrect: false },
              { id: 'b', text: 'Bare i de to foerste gruppene', isCorrect: false },
              { id: 'c', text: 'Til venstre og i midten', isCorrect: true },
              { id: 'd', text: 'Langs trappen mellom hoeyre og venstre side', isCorrect: false },
            ],
            solution:
              'Metaller befinner seg til venstre og i midten av periodesystemet og utgjor ca. 80 prosent av grunnstoffene. Ikke-metaller er til hoeyre, og halvmetaller langs grensen.',
          },
          {
            id: 'nat-vg1-4-2-n-quiz2-q1',
            task: 'Hvordan endrer atomradius seg naar du gaar nedover i en gruppe?',
            options: [
              { id: 'a', text: 'Den minker', isCorrect: false },
              { id: 'b', text: 'Den oeker', isCorrect: true },
              { id: 'c', text: 'Den forblir uendret', isCorrect: false },
              { id: 'd', text: 'Den oeker foerst, saa minker den', isCorrect: false },
            ],
            solution:
              'Atomradius oeker nedover i en gruppe fordi det legges til flere elektronskall. Kalium er stoerre enn natrium, som er stoerre enn litium.',
          },
          {
            id: 'nat-vg1-4-2-n-quiz2-q2',
            task: 'Hvilket grunnstoff har hoeyest elektronegativitet?',
            options: [
              { id: 'a', text: 'Helium', isCorrect: false },
              { id: 'b', text: 'Oksygen', isCorrect: false },
              { id: 'c', text: 'Francium', isCorrect: false },
              { id: 'd', text: 'Fluor', isCorrect: true },
            ],
            solution:
              'Fluor har hoeyest elektronegativitet (4,0 paa Pauling-skalaen). Elektronegativiteten oeker bortover i perioden og oppover i gruppen, saa de mest elektronegative grunnstoffene er oeverst til hoeyre (bortsett fra edelgassene).',
          },
          {
            id: 'nat-vg1-4-2-n-quiz2-q3',
            task: 'Silisium er viktig i moderne teknologi fordi det er en halvmetall. Hva betyr det?',
            options: [
              { id: 'a', text: 'Det er halvparten saa tungt som metaller', isCorrect: false },
              { id: 'b', text: 'Det har egenskaper mellom metall og ikke-metall, blant annet som halvleder', isCorrect: true },
              { id: 'c', text: 'Det reagerer med halvparten saa mange stoffer som et metall', isCorrect: false },
              { id: 'd', text: 'Det finnes i halvparten saa stor mengde som metaller', isCorrect: false },
            ],
            solution:
              'Halvmetaller har egenskaper mellom metaller og ikke-metaller. Silisium er en halvleder, noe som betyr at ledningsevnen ligger mellom metaller og isolatorer. Dette gjor det perfekt for elektronikk -- databrikker og solceller er bygget paa silisium.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-4-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Periodesystemet er ikke bare en tabell med forkortelser -- det er et kart over materiens verden, der posisjonen til hvert grunnstoff forteller deg om elektronkonfigurasjon, reaktivitet og fysiske egenskaper.

**Nokkelkunnskapen fra dette kapittelet:**

- **Mendelejev** laget det foerste periodesystemet i 1869 og forutsa grunnstoffer som ennaa ikke var oppdaget
- **Perioder** (rader) angir antall elektronskall. **Grupper** (kolonner) angir antall valenselektroner for hovedgruppene
- **Viktige grupper**: Alkalimetaller (gruppe 1, 1 valenselektron), jordalkalimetaller (gruppe 2, 2 valenselektroner), halogener (gruppe 17, 7 valenselektroner), edelgasser (gruppe 18, 8 valenselektroner)
- **Metaller** (ca. 80 prosent, til venstre) er gode ledere og formbare. **Ikke-metaller** (til hoeyre) er daarlige ledere. **Halvmetaller** (langs trappen) er halvledere som er avgjorende for elektronikk
- **Periodetrender**: Atomradius oeker nedover og minker bortover. Ioniseringsenergi og elektronegativitet foelger motsatt moenster -- oeker bortover og minker nedover
- **Fluor** er det mest elektronegative grunnstoffet (4,0), og **francium** det minst elektronegative (0,7)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.3 NARRATIV: Ionebinding
// ============================================================================

export const CHAPTER_NAT_VG1_4_3_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-4-3-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '4.3',
  title: 'Ionebinding',
  subtitle: 'Narrativ versjon',
  description:
    'Historien om saltet paa kjokkenbordet -- hvordan metaller gir fra seg elektroner til ikke-metaller og skaper noen av de hardeste og mest holdbare forbindelsene vi kjenner.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og gjoere rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer',
  ],
  linkedChapterId: 'nat-vg1-4-3',
  content: [
    {
      id: 'nat-vg1-4-3-n-intro',
      type: 'text',
      content: `## Naar atomer gir og tar

Du har sikkert salt paa kjokkenbordet hjemme. Det ser ut som smaa, hvite krystaller -- ganske uinteressant, kanskje. Men bak hvert lite saltkorn skjuler det seg en dramatisk historie om elektroner som skifter eier og ladninger som tiltrekker hverandre med enorm kraft.

Bordsalt er natriumklorid, NaCl. Det er bygget opp av natriumatomer, et mykt og ekstremt reaktivt metall, og kloratomer, en giftig groennlig gass. Hver for seg er begge farlige. Men naar de moetes, skjer noe magisk: natrium gir fra seg ett elektron til klor, begge oppnaar stabile elektronkonfigurasjoner, og resultatet er et ufarlig, hvitt krystall som vi stroor paa maten vaar.

Denne typen kjemisk binding -- der atomer **overforer elektroner** til hverandre -- kalles **ionebinding**. Den oppstaar typisk mellom metaller og ikke-metaller. Metaller har faa valenselektroner som de lett gir fra seg, og danner **positive ioner** kalt **kationer**. Ikke-metaller mangler bare noen faa elektroner for fullt skall, saa de tar opp elektroner og danner **negative ioner** kalt **anioner**. Resultatet er at begge oppnaar den ettertraktede edelgasskonfigurasjonen.`,
    },
    {
      id: 'nat-vg1-4-3-n-section1',
      type: 'text',
      content: `## Hvordan ioner dannes

La oss se naermere paa hvordan dette skjer. Metaller i gruppe 1, 2 og 3 har henholdsvis 1, 2 og 3 valenselektroner. De kan gi fra seg disse for aa oppnaa edelgasskonfigurasjon.

Natrium har elektronkonfigurasjonen 2, 8, 1. Ved aa gi fra seg sitt ene valenselektron blir det Na+ med konfigurasjonen 2, 8 -- akkurat som edelgassen neon. Magnesium (2, 8, 2) gir fra seg 2 elektroner og blir Mg2+ med 2, 8. Aluminium (2, 8, 3) gir fra seg 3 elektroner og blir Al3+ med 2, 8. Kalium (2, 8, 8, 1) gir fra seg 1 elektron og blir K+ med 2, 8, 8 -- som argon. Kalsium (2, 8, 8, 2) gir fra seg 2 og blir Ca2+ med 2, 8, 8.

Paa den andre siden har vi ikke-metallene. Fluor (2, 7) tar opp 1 elektron og blir F- med 2, 8 -- som neon. Klor (2, 8, 7) tar opp 1 elektron og blir Cl- med 2, 8, 8 -- som argon. Oksygen (2, 6) tar opp 2 elektroner og blir O2- med 2, 8. Svovel (2, 8, 6) tar opp 2 og blir S2- med 2, 8, 8. Nitrogen (2, 5) tar opp 3 og blir N3- med 2, 8.

La oss folge dannelsen av NaCl steg for steg. Natrium (2, 8, 1) gir fra seg sitt ene valenselektron til klor (2, 8, 7). Naa har Na+ konfigurasjonen 2, 8 og Cl- har 2, 8, 8 -- begge stabile! Na+ er positiv og Cl- er negativ, saa de tiltrekker hverandre med elektrostatisk kraft. Denne tiltrekningen *er* ionebindingen.

Men det stopper ikke med to ioner. Mange Na+ og Cl- ordner seg i et tredimensjonalt moenster der hvert ion er omgitt av 6 ioner med motsatt ladning. Dette kalles et **ionegitter**. Det finnes ingen individuelle "NaCl-molekyler" -- bare et kontinuerlig, utstrakt gitter av vekslende positive og negative ioner. Formelforholdet i NaCl er 1:1, men for andre forbindelser kan det vaere annerledes. I kalsiumklorid maa for eksempel to Cl- balansere en Ca2+, saa formelen er CaCl2. I aluminiumoksid trengs to Al3+ og tre O2- for at ladningene skal gaa opp, saa formelen er Al2O3.`,
    },
    {
      id: 'nat-vg1-4-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa ionedannelse og ionebinding:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-4-3-n-quiz1-q0',
            task: 'Hva skjer naar natrium og klor danner en ionebinding?',
            options: [
              { id: 'a', text: 'De deler elektroner likt mellom seg', isCorrect: false },
              { id: 'b', text: 'Natrium overforer ett elektron til klor', isCorrect: true },
              { id: 'c', text: 'Klor overforer ett elektron til natrium', isCorrect: false },
              { id: 'd', text: 'Begge atomene mister elektroner', isCorrect: false },
            ],
            solution:
              'Natrium har 1 valenselektron som det gir fra seg til klor. Na blir Na+ (2, 8) og Cl blir Cl- (2, 8, 8). Begge oppnaar edelgasskonfigurasjon.',
          },
          {
            id: 'nat-vg1-4-3-n-quiz1-q1',
            task: 'Hva er riktig formel for kalsiumklorid?',
            options: [
              { id: 'a', text: 'CaCl', isCorrect: false },
              { id: 'b', text: 'Ca2Cl', isCorrect: false },
              { id: 'c', text: 'CaCl2', isCorrect: true },
              { id: 'd', text: 'CaCl3', isCorrect: false },
            ],
            solution:
              'Ca2+ har ladning +2 og Cl- har ladning -1. For aa balansere trengs to Cl- per Ca2+: 1 ganger (+2) + 2 ganger (-1) = 0. Formelen er CaCl2.',
          },
          {
            id: 'nat-vg1-4-3-n-quiz1-q2',
            task: 'Hva er et ionegitter?',
            options: [
              { id: 'a', text: 'Et enkelt molekyl av to ioner', isCorrect: false },
              { id: 'b', text: 'En ring av positive og negative ioner', isCorrect: false },
              { id: 'c', text: 'Et tredimensjonalt moenster av vekslende positive og negative ioner', isCorrect: true },
              { id: 'd', text: 'Et lag av atomer som deler elektroner', isCorrect: false },
            ],
            solution:
              'Et ionegitter er et tredimensjonalt, regelmessig moenster der hvert ion er omgitt av ioner med motsatt ladning. Det finnes ingen individuelle molekyler i ioneforbindelser, bare et kontinuerlig gitter.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-4-3-n-section2',
      type: 'text',
      content: `## Ioneforbindelsenes egenskaper

Ionegitterets sterke, tredimensjonale struktur gir ioneforbindelser noen helt karakteristiske egenskaper som kan forklares direkte ut fra bindingen.

For det foerste har de **hoeyt smeltepunkt og kokepunkt**. Den elektrostatiske tiltrekningen mellom ionene er svart sterk, og det kreves mye energi aa bryte opp gitteret. NaCl smelter ved 801 grader Celsius. MgO, der ionene har dobbelt saa hoey ladning, smelter foerst ved 2852 grader! Gitterenergien -- energien som frigjores naar gassformige ioner danner fast gitter -- oeker med hoeyere ladning og mindre ioner.

For det andre er ioneforbindelser **harde, men sproe**. Gitteret er stivt og motstandsdyktig mot riper. Men naar du slaar paa en saltkrystall med en hammer, knekker den. Hvorfor? Fordi slaget forskyver et lag av ioner. Ploetselig havner Na+ ved siden av Na+ og Cl- ved siden av Cl-. Like ladninger frastoeter hverandre kraftig, og gitteret sprekker. Dette er helt annerledes fra metaller, som kan boeyes fordi elektronsjoen "foelger med" (men det er en historie for et senere kapittel).

For det tredje leder ioneforbindelser stroem -- men **bare naar de er smeltet eller loest i vann**. I fast form sitter ionene fast i gitteret og kan ikke bevege seg. Men naar gitteret smeltes eller loeses opp i vann, kan ionene bevege seg fritt, og vi faar en **elektrolytt** som leder stroem.

For det fjerde er ioneforbindelser **ofte loeselige i vann**. Vannmolekyler er polare -- oksygensiden er delvis negativ og hydrogensidene er delvis positive. Den negative oksygensiden tiltrekkes av kationene, og den positive hydrogensiden tiltrekkes av anionene. Vannmolekylene omgir ionene og trekker dem ut av gitteret -- en prosess kalt **hydratisering**. Derimot loeser NaCl seg ikke i olje, fordi oljemolekyler er upolare og ikke kan tiltrekke ionene. Dette gir oss tommelfingerregelen "like loeser like": polare stoffer loeser seg i polare loesemidler, upolare i upolare.

Til slutt er ioneforbindelser **krystallinske**. Det regelmessige gitteret gir krystaller med rette kanter og flater -- tenk paa de vakre, firkantede saltkornene.`,
    },
    {
      id: 'nat-vg1-4-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa ioneforbindelsenes egenskaper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-4-3-n-quiz2-q0',
            task: 'Hvorfor leder fast natriumklorid IKKE stroem?',
            options: [
              { id: 'a', text: 'Det har ingen ladede partikler', isCorrect: false },
              { id: 'b', text: 'Ionene sitter fast i gitteret og kan ikke bevege seg', isCorrect: true },
              { id: 'c', text: 'Elektronene er bundet til atomene', isCorrect: false },
              { id: 'd', text: 'Saltkrystaller er isolatorer paa grunn av krystallformen', isCorrect: false },
            ],
            solution:
              'Stroem krever bevegelige ladningsbaarere. I fast NaCl er ionene laast i gitteret. Naar NaCl smeltes eller loeses i vann, kan ionene bevege seg fritt og lede stroem.',
          },
          {
            id: 'nat-vg1-4-3-n-quiz2-q1',
            task: 'Hvorfor har MgO mye hoeyere smeltepunkt enn NaCl?',
            options: [
              { id: 'a', text: 'MgO har flere atomer per formelenhet', isCorrect: false },
              { id: 'b', text: 'MgO har stoerre ioner', isCorrect: false },
              { id: 'c', text: 'MgO-ionene har hoeyere ladning (2+ og 2-) og er mindre, noe som gir sterkere tiltrekning', isCorrect: true },
              { id: 'd', text: 'MgO har kovalente bindinger i tillegg', isCorrect: false },
            ],
            solution:
              'MgO har ioner med ladning +2 og -2 (mot +1 og -1 i NaCl). Hoeyere ladning gir mye sterkere elektrostatisk tiltrekning. I tillegg er Mg2+ og O2- mindre ioner enn Na+ og Cl-, saa de kommer naermere hverandre. Begge faktorene gir hoeyere gitterenergi.',
          },
          {
            id: 'nat-vg1-4-3-n-quiz2-q2',
            task: 'Hvorfor er ioneforbindelser sproe?',
            options: [
              { id: 'a', text: 'De har for faa elektroner', isCorrect: false },
              { id: 'b', text: 'Naar et lag forskyves, kommer like ladninger ved siden av hverandre og frastoeter', isCorrect: true },
              { id: 'c', text: 'De har svake bindinger mellom lagene', isCorrect: false },
              { id: 'd', text: 'Ionene er for store til aa holdes sammen', isCorrect: false },
            ],
            solution:
              'Naar man slaar paa en ionekrystall, forskyves et lag av ioner. Da havner Na+ ved siden av Na+ og Cl- ved siden av Cl-. Like ladninger frastoeter hverandre, og gitteret sprekker.',
          },
          {
            id: 'nat-vg1-4-3-n-quiz2-q3',
            task: 'Hvorfor loeser NaCl seg i vann, men ikke i olje?',
            options: [
              { id: 'a', text: 'Vann er varmere enn olje', isCorrect: false },
              { id: 'b', text: 'Olje er for tyktflytende', isCorrect: false },
              { id: 'c', text: 'Vann er polart og kan tiltrekke og omgi ionene, mens olje er upolar', isCorrect: true },
              { id: 'd', text: 'NaCl reagerer kjemisk med vann', isCorrect: false },
            ],
            solution:
              'Vannmolekyler er polare og kan hydratisere ionene -- oksygensiden tiltrekkes av kationer og hydrogensidene av anioner. Oljemolekyler er upolare og kan ikke tiltrekke ionene. "Like loeser like."',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-4-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Fra det hvite saltet paa bordet til keramikken i tennene dine -- ioneforbindelser er overalt, og egenskapene deres kan forklares elegant ut fra maaten atomer overforer elektroner paa.

**Nokkelkunnskapen fra dette kapittelet:**

- **Ionebinding** dannes ved overforing av elektroner fra metaller til ikke-metaller. Metaller danner positive kationer, ikke-metaller danner negative anioner. Begge oppnaar edelgasskonfigurasjon
- **Ionegitteret** er en tredimensjonal struktur av vekslende positive og negative ioner. Det finnes ingen individuelle molekyler -- bare et kontinuerlig gitter
- **Formler** bestemmes ved at summen av ladninger maa vaere null: CaCl2 (Ca2+ og 2 Cl-), Al2O3 (2 Al3+ og 3 O2-)
- **Hoyt smeltepunkt** fordi den elektrostatiske tiltrekningen er sterk. Hoeyere ioneladning gir hoeyere smeltepunkt (MgO: 2852 grader mot NaCl: 801 grader)
- **Sproe** fordi forskyvning av ionerlag forer til frastoting mellom like ladninger
- **Leder stroem** bare naar smeltet eller loest i vann (bevegelige ioner). Fast form leder ikke
- **Loeselig i vann** paa grunn av hydratisering -- polare vannmolekyler omgir ionene og trekker dem ut av gitteret`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.4 NARRATIV: Kovalent binding
// ============================================================================

export const CHAPTER_NAT_VG1_4_4_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-4-4-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '4.4',
  title: 'Kovalent binding',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdage hvordan atomer som deler elektroner skaper alt fra vann og luft til DNA og plast -- den vanligste bindingstypen i hele naturen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og gjoere rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer',
  ],
  linkedChapterId: 'nat-vg1-4-4',
  content: [
    {
      id: 'nat-vg1-4-4-n-intro',
      type: 'text',
      content: `## Deling er loesningen

Ionebinding handler om aa gi og ta -- et atom overforer elektroner til et annet. Men hva skjer naar to ikke-metaller moetes? Ingen av dem *vil* gi fra seg elektroner. Begge vil ha *flere*. Loesningen? De **deler**.

Vann, sukkermolekyler, DNA, plast, og alle organiske forbindelser i kroppen din har en ting til felles: de holdes sammen av **kovalente bindinger**. Dette er den vanligste bindingstypen i naturen! Kovalent binding oppstaar naar atomer **deler elektronpar** med hverandre. I motsetning til ionebinding, der elektroner flyttes permanent, "eier" begge atomene det delte elektronparet sammen.

Noekkelen til aa forstaa kovalent binding er den samme drivkraften som for ionebinding: atomer vil oppnaa **edelgasskonfigurasjon**. Men her oppnaar de det ved aa telle de delte elektronene for begge atomene. Et delt elektronpar "tilhoerer" begge!

La oss starte med det enkleste eksempelet: **hydrogenmolekylet (H2)**. Hvert hydrogenatom har 1 valenselektron, men trenger 2 for aa fylle K-skallet (som helium). To hydrogenatomer loeser dette ved aa dele sine elektroner. Naa "ser" hvert atom 2 elektroner rundt seg -- edelgasskonfigurasjon! Det delte elektronparet kalles et **bindende elektronpar**, og det holder atomene sammen fordi begge kjernene tiltrekker det samme elektronparet.`,
    },
    {
      id: 'nat-vg1-4-4-n-section1',
      type: 'text',
      content: `## Lewis-strukturer og oktetregelen

For aa vise hvordan elektroner fordeles i et molekyl, bruker vi **Lewis-strukturer**. Her tegnes alle valenselektronene -- baade de som deles (bindende par) og de som ikke deles (**frie elektronpar**, ogsaa kalt ensomme par).

La oss se paa noen viktige molekyler. I **vann (H2O)** har oksygen 6 valenselektroner og hvert hydrogen har 1, til sammen 8. Oksygen deler ett elektronpar med hvert av de to hydrogenatomene -- det gir 2 bindende par. De resterende 4 elektronene paa oksygen danner 2 frie par. Totalt rundt oksygen: 2 delte par pluss 2 frie par = 8 elektroner. Oktetregelen er oppfylt!

I **ammoniakk (NH3)** har nitrogen 5 valenselektroner og hvert hydrogen har 1, til sammen 8. Nitrogen deler 1 elektron med hvert av 3 hydrogenatomer, noe som gir 3 bindende par. Det gjenstaar 1 fritt elektronpar paa nitrogen. Totalt rundt nitrogen: 8 elektroner.

I **metan (CH4)** har karbon 4 valenselektroner og hvert hydrogen har 1, til sammen 8. Karbon danner 4 bindinger -- en til hvert hydrogen -- og har ingen frie elektronpar. Karbon oppfyller oktetregelen med 8 elektroner, og hvert hydrogen har 2 (duettregelen for de minste atomene).

De frie elektronparene er ikke bare pynt i tegningene. De pavirker molekylenes form. I metan, uten frie par paa karbon, er molekylet symmetrisk med tetraederform. I vann tvinger de to frie parene paa oksygen molekylet til en vinklet form (ca. 104,5 grader). I ammoniakk gir det ene frie paret en pyramideform.`,
    },
    {
      id: 'nat-vg1-4-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa kovalent binding og Lewis-strukturer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-4-4-n-quiz1-q0',
            task: 'Hva skjer i en kovalent binding?',
            options: [
              { id: 'a', text: 'Elektroner overfores fra et atom til et annet', isCorrect: false },
              { id: 'b', text: 'Atomer deler elektronpar med hverandre', isCorrect: true },
              { id: 'c', text: 'Alle elektroner blir frie og danner et elektronsjoe', isCorrect: false },
              { id: 'd', text: 'Atomene mister alle valenselektronene sine', isCorrect: false },
            ],
            solution:
              'I en kovalent binding deler to atomer ett eller flere elektronpar. Begge atomene "eier" det delte paret, og begge kan telle det for aa oppnaa edelgasskonfigurasjon.',
          },
          {
            id: 'nat-vg1-4-4-n-quiz1-q1',
            task: 'Hvor mange bindende elektronpar og frie elektronpar har oksygen i vannmolekylet?',
            options: [
              { id: 'a', text: '4 bindende og 0 frie', isCorrect: false },
              { id: 'b', text: '1 bindende og 3 frie', isCorrect: false },
              { id: 'c', text: '2 bindende og 2 frie', isCorrect: true },
              { id: 'd', text: '3 bindende og 1 fritt', isCorrect: false },
            ],
            solution:
              'I vann deler oksygen ett elektronpar med hvert av to hydrogenatomer (2 bindende par). Oksygen har i tillegg 2 frie elektronpar. Totalt rundt oksygen: 2 ganger 2 pluss 2 ganger 2 = 8 elektroner.',
          },
          {
            id: 'nat-vg1-4-4-n-quiz1-q2',
            task: 'Hvilken mellom disse forekommer typisk kovalent binding?',
            options: [
              { id: 'a', text: 'Mellom et metall og en ikke-metall', isCorrect: false },
              { id: 'b', text: 'Mellom to metaller', isCorrect: false },
              { id: 'c', text: 'Mellom to ikke-metaller', isCorrect: true },
              { id: 'd', text: 'Mellom et metall og en edelgass', isCorrect: false },
            ],
            solution:
              'Kovalent binding oppstaar typisk mellom ikke-metaller. Naar to atomer har lik eller lignende elektronegativitet, er det gunstigere aa dele elektroner enn aa overfore dem.',
          },
          {
            id: 'nat-vg1-4-4-n-quiz1-q3',
            task: 'Hva er frie elektronpar?',
            options: [
              { id: 'a', text: 'Elektroner som har forlatt atomet', isCorrect: false },
              { id: 'b', text: 'Elektronpar som deles mellom to atomer', isCorrect: false },
              { id: 'c', text: 'Elektronpar som tilhoerer bare ett atom og ikke deles', isCorrect: true },
              { id: 'd', text: 'Elektroner som beveger seg fritt i materialet', isCorrect: false },
            ],
            solution:
              'Frie elektronpar (ogsaa kalt ensomme par) er valenselektronpar som tilhoerer bare ett atom og ikke deles med et annet atom. De pavirker molekylets form -- for eksempel gjor de frie parene paa oksygen at vann er vinklet.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-4-4-n-section2',
      type: 'text',
      content: `## Enkelt-, dobbelt- og trippelbindinger

Atomer kan dele mer enn ett elektronpar. I en **enkeltbinding** deles 1 elektronpar (2 elektroner), tegnet med en strek: C-H, O-H. Atomene kan rotere fritt rundt bindingen. Eksempler er H2, H2O og CH4.

I en **dobbeltbinding** deles 2 elektronpar (4 elektroner), tegnet med to streker: C=O, O=O. Her er det ingen fri rotasjon, bindingen er sterkere og kortere enn en enkeltbinding. Eksempler er O2 og CO2. I karbondioksid danner karbon en dobbeltbinding med hvert oksygenatom: O=C=O. Hvert oksygen har ogsaa 2 frie elektronpar, og oktetregelen er oppfylt for alle atomene.

I en **trippelbinding** deles 3 elektronpar (6 elektroner), tegnet med tre streker: N-trippel-N, C-trippel-C. Dette er den sterkeste og korteste bindingstypen. Nitrogengass (N2) er et fantastisk eksempel. Hvert nitrogenatom har 5 valenselektroner, og de trenger aa dele 3 par for aa oppnaa oktetregelen. Resultatet er en trippelbinding som er saa sterk at N2 er et av de mest stabile molekylene vi kjenner. Det er denne styrken som gjor at det er saa energikrevende aa "bryte opp" nitrogen fra luften -- noe planter trenger for aa vokse.

Moenesteret er tydelig: flere delte elektronpar gir sterkere og kortere binding. Enkel er svakest og lengst, dobbel er middels, trippel er sterkest og kortest.`,
    },
    {
      id: 'nat-vg1-4-4-n-section3',
      type: 'text',
      content: `## Polare og upolare bindinger

Ikke alle kovalente bindinger er like. Noen ganger deles elektronene *likt*, andre ganger *ulikt*. Dette bestemmes av **elektronegativitet** -- et atoms evne til aa tiltrekke seg elektroner i en binding.

Naar to like atomer danner en binding, deles elektronene helt likt. H-H, Cl-Cl, O=O og N-trippel-N er alle **upolare kovalente bindinger**. Elektronskyen er symmetrisk mellom atomene.

Men naar to *ulike* atomer binder seg, trekker det mest elektronegative atomet elektronene mot seg. I en O-H-binding har oksygen elektronegativitet 3,5 og hydrogen 2,1. Forskjellen er 1,4, noe som betyr at oksygen trekker det delte elektronparet mot seg. Dette gir oksygen en delvis negativ ladning (skrevet delta-) og hydrogen en delvis positiv ladning (delta+). En slik binding kalles **polar kovalent**.

Pauling-skalaen for elektronegativitet gir oss nyttige tommelfingerregler. Fluor er hoeyest med 4,0, etterfulgt av oksygen paa 3,5, nitrogen og klor paa 3,0, karbon paa 2,5, hydrogen paa 2,1, og natrium helt nede paa 0,9. Naar forskjellen er under 0,5, kaller vi bindingen upolar kovalent. Mellom 0,5 og 1,7 er den polar kovalent. Over 1,7 er den saa polar at vi kaller det ionebinding.

Vann er et straalende eksempel paa konsekvensene av polare bindinger. Begge O-H-bindingene er polare, og det vinklede molekylet gjor at den negative og positive ladningen ikke kansellerer hverandre. Vann har en "positiv side" (hydrogenene) og en "negativ side" (oksygenet), og er et **polart molekyl** med en **dipol**. Dette er grunnen til at vann kan loese salt og andre ioneforbindelser, danner hydrogenbindinger, og har et uvanlig hoeyt kokepunkt for saa lite molekyl.

Kovalente forbindelser (molekylare stoffer) har typisk **lavt smelte- og kokepunkt** fordi det er de svake kreftene *mellom* molekylene som brytes ved smelting og koking, ikke de sterke kovalente bindingene innad. De leder generelt **ikke stroem** fordi det ikke finnes frie ioner eller elektroner. Og loseligheten foelger regelen "like loeser like": polare molekyler loeser seg i polare loesemidler som vann, mens upolare molekyler loeser seg i upolare loesemidler som olje.`,
    },
    {
      id: 'nat-vg1-4-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa bindingstyper og polaritet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-4-4-n-quiz2-q0',
            task: 'Hvilken binding er sterkest og kortest?',
            options: [
              { id: 'a', text: 'Enkeltbinding', isCorrect: false },
              { id: 'b', text: 'Dobbeltbinding', isCorrect: false },
              { id: 'c', text: 'Trippelbinding', isCorrect: true },
              { id: 'd', text: 'Alle er like sterke', isCorrect: false },
            ],
            solution:
              'Trippelbinding (3 delte elektronpar) er sterkest og kortest. Dobbeltbinding er middels, og enkeltbinding er svakest og lengst. For eksempel er trippelbindingen i N2 saa sterk at nitrogen er et av de mest stabile molekylene vi kjenner.',
          },
          {
            id: 'nat-vg1-4-4-n-quiz2-q1',
            task: 'Hva gjor en kovalent binding polar?',
            options: [
              { id: 'a', text: 'Atomene har ulikt antall protoner', isCorrect: false },
              { id: 'b', text: 'Atomene har ulik elektronegativitet, saa elektronene deles ulikt', isCorrect: true },
              { id: 'c', text: 'Bindingen inneholder frie elektronpar', isCorrect: false },
              { id: 'd', text: 'Atomene er i samme gruppe i periodesystemet', isCorrect: false },
            ],
            solution:
              'En polar kovalent binding oppstaar naar atomene har ulik elektronegativitet. Det mest elektronegative atomet trekker elektronparet mot seg, noe som gir en delvis negativ ladning paa den ene siden og delvis positiv paa den andre.',
          },
          {
            id: 'nat-vg1-4-4-n-quiz2-q2',
            task: 'Hvorfor har kovalente forbindelser vanligvis lavt smeltepunkt?',
            options: [
              { id: 'a', text: 'De kovalente bindingene er svake', isCorrect: false },
              { id: 'b', text: 'De har faa elektroner', isCorrect: false },
              { id: 'c', text: 'Det er de svake kreftene mellom molekylene som brytes, ikke de sterke bindingene innad', isCorrect: true },
              { id: 'd', text: 'De er alltid gasser', isCorrect: false },
            ],
            solution:
              'Ved smelting og koking brytes de svake intermolekylaere kreftene mellom molekylene, ikke de sterke kovalente bindingene innad i molekylet. Derfor kreves det lite energi, og smeltepunktet er lavt.',
          },
          {
            id: 'nat-vg1-4-4-n-quiz2-q3',
            task: 'O-H-bindingen har elektronegativitetsforskjell paa 1,4. Hva slags binding er det?',
            options: [
              { id: 'a', text: 'Upolar kovalent', isCorrect: false },
              { id: 'b', text: 'Polar kovalent', isCorrect: true },
              { id: 'c', text: 'Ionebinding', isCorrect: false },
              { id: 'd', text: 'Metallbinding', isCorrect: false },
            ],
            solution:
              'Elektronegativitetsforskjell mellom 0,5 og 1,7 gir polar kovalent binding. 1,4 er godt innenfor dette omraadet. Oksygen trekker elektronene mot seg, saa oksygen faar delvis negativ ladning og hydrogen faar delvis positiv.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-4-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Fra det enkleste molekylet -- hydrogen med sine to atomer -- til det mest komplekse -- DNA med milliarder -- holder kovalente bindinger det hele sammen gjennom deling av elektroner.

**Nokkelkunnskapen fra dette kapittelet:**

- **Kovalent binding** dannes naar atomer deler elektronpar, typisk mellom ikke-metaller. Begge atomene oppnaar edelgasskonfigurasjon ved aa telle de delte elektronene
- **Lewis-strukturer** viser alle valenselektroner: bindende par (mellom atomer) og frie par (paa enkeltatomet). Oktetregelen krever 8 elektroner rundt hvert atom (2 for hydrogen)
- **Enkelt-, dobbelt- og trippelbinding**: Atomer kan dele 1, 2 eller 3 elektronpar. Flere par gir sterkere og kortere binding. N2 har en svart sterk trippelbinding
- **Polare bindinger** oppstaar naar atomene har ulik elektronegativitet (forskjell 0,5-1,7). Det mest elektronegative atomet faar delvis negativ ladning. Fluor er mest elektronegativt (4,0)
- **Vann** er polart paa grunn av polare O-H-bindinger og vinklet form, noe som gjor det til et fantastisk loesemiddel for ioneforbindelser
- **Egenskaper**: Kovalente forbindelser har lavt smeltepunkt (svake krefter mellom molekylene), leder ikke stroem, og loeseligheten foelger "like loeser like"`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.5 NARRATIV: Metallbinding og stoffers egenskaper
// ============================================================================

export const CHAPTER_NAT_VG1_4_5_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-4-5-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '4.5',
  title: 'Metallbinding og stoffers egenskaper',
  subtitle: 'Narrativ versjon',
  description:
    'Forstaa hvorfor metaller glimter, boeyes og leder stroem -- og laer aa gjenkjenne alle tre bindingstyper bare ved aa se paa stoffets egenskaper.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og gjoere rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer',
  ],
  linkedChapterId: 'nat-vg1-4-5',
  content: [
    {
      id: 'nat-vg1-4-5-n-intro',
      type: 'text',
      content: `## Elektronsjoen -- naar alle deler alt

Vi har sett at ionebinding handler om aa gi og ta, og kovalent binding handler om aa dele i par. Men hva skjer i rene metaller? Jernkonstruksjoner i bygninger, kobberledninger i veggen, gull i smykker -- de har unike egenskaper som ingen av de to andre bindingstypene kan forklare. Losningen er en tredje type binding: **metallbinding**.

Tenk deg et stort basseng. Paa bunnen ligger ordnede rader av baller, fast forankret. Over dem flyter vann som omslutter alle ballene. I metallbinding er "ballene" positive metallioner -- atomer som har gitt fra seg valenselektronene sine. Og "vannet" er **elektronsjoen**: alle valenselektronene som beveger seg fritt gjennom hele metallstykket. Elektronene "tilhoerer" ikke lenger enkeltatomene, men hele metallfelleskapet.

Denne modellen er elegant i sin enkelhet. Positive metallioner sitter i et ordnet gitter, og rundt dem flyter en sjo av negative elektroner. Den **elektrostatiske tiltrekningen** mellom de positive ionene og den negative elektronsjoen holder det hele sammen. Det er dette som er metallbinding.`,
    },
    {
      id: 'nat-vg1-4-5-n-section1',
      type: 'text',
      content: `## Hvorfor metaller er saa spesielle

Alle de typiske metallegenskapene kan forklares med elektronsjoe-modellen. La oss gaa gjennom dem.

**Elektrisk ledningsevne** er kanskje den mest kjente metallegenskapen. Naar du kobler en spenningskilde til en kobbertrad, skapes et elektrisk felt gjennom traaden. De frie elektronene i elektronsjoen begynner aa bevege seg i feltet -- de "dytter" hverandre gjennom metallet. Denne bevegelsen av ladede partikler er elektrisk stroem! Metaller leder stroem utmerket fordi de alltid har frie elektroner tilgjengelig. Kobber brukes i ledninger fordi det har mange frie elektroner og lav motstand.

**Varmeledningsevne** forklares paa lignende maate. Naar du varmer opp den ene enden av en metallstang, faar elektronene der mer kinetisk energi. Disse raske elektronene kolliderer med andre elektroner og metallioner, overforer energi, og sprer varmen raskt gjennom hele metallet. Elektronene er som "energikurerer" som fraktar varme.

**Metallglans** -- den karakteristiske blanke, reflekterende overflaten -- skyldes at de frie elektronene absorberer og re-emitterer lys. Det er derfor gull glimter, soelv skinner og aluminium reflekterer.

Men den kanskje mest overraskende egenskapen er **formbarhet**. Metaller kan hamres til plater (**malleabilitet**) og trekkes til traader (**duktilitet**). Gull er saa formbart at ett gram kan hamres ut til bladgull som dekker nesten 1 kvadratmeter! Hemmeligheten? Naar du slaar paa et metall, forskyves lag av metallioner i forhold til hverandre. Men i motsetning til ioneforbindelser, der slik forskyvning forer til at like ladninger moetes og gitteret sprekker, "foelger" elektronsjoen med. Den tilpasser seg den nye formen og opprettholder tiltrekningen mellom ioner og elektroner. Bindingen brytes aldri.

Styrken paa metallbindingen varierer. Den avhenger av antall valenselektroner (flere gir tettere elektronsjoe), ioneladning (hoeyere gir sterkere tiltrekning) og ionradiuis (mindre ioner gir kortere avstand). Sammenlign natrium, magnesium og aluminium: Na+ med 1 fritt elektron per atom smelter ved bare 98 grader Celsius. Mg2+ med 2 frie elektroner smelter ved 650 grader. Al3+ med 3 frie elektroner smelter ved 660 grader. Moenesteret er tydelig -- flere valenselektroner og hoeyere ladning gir sterkere metallbinding og hoeyere smeltepunkt.`,
    },
    {
      id: 'nat-vg1-4-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa metallbinding og metallegenskaper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-4-5-n-quiz1-q0',
            task: 'Hva er "elektronsjoen" i metallbinding?',
            options: [
              { id: 'a', text: 'Elektroner som er bundet fast til hvert atom', isCorrect: false },
              { id: 'b', text: 'Fritt bevegelige valenselektroner som deles av alle atomene i metallet', isCorrect: true },
              { id: 'c', text: 'Elektroner som overfores mellom to atomer', isCorrect: false },
              { id: 'd', text: 'Elektroner i atomkjernen', isCorrect: false },
            ],
            solution:
              'Elektronsjoen bestaar av valenselektronene som alle metallatmene har "gitt fra seg". Disse elektronene beveger seg fritt gjennom hele metallet og tilhoerer ikke lenger enkeltatomene.',
          },
          {
            id: 'nat-vg1-4-5-n-quiz1-q1',
            task: 'Hvorfor er metaller formbare, mens ioneforbindelser er sproe?',
            options: [
              { id: 'a', text: 'Metaller har svakere bindinger', isCorrect: false },
              { id: 'b', text: 'I metaller foelger elektronsjoen med naar ioner forskyves, mens i ioneforbindelser gir forskyvning frastoting mellom like ladninger', isCorrect: true },
              { id: 'c', text: 'Ioneforbindelser har flere elektroner', isCorrect: false },
              { id: 'd', text: 'Metaller er alltid varmere enn ioneforbindelser', isCorrect: false },
            ],
            solution:
              'I metaller kan ionene gli over hverandre fordi elektronsjoen tilpasser seg og opprettholder tiltrekningen. I ioneforbindelser forer forskyvning til at like ladninger havner ved siden av hverandre, noe som gir frastoting og sprekker.',
          },
          {
            id: 'nat-vg1-4-5-n-quiz1-q2',
            task: 'Hvorfor har aluminium (660 grader Celsius) hoeyere smeltepunkt enn natrium (98 grader Celsius)?',
            options: [
              { id: 'a', text: 'Aluminium har stoerre atomer', isCorrect: false },
              { id: 'b', text: 'Aluminium har flere valenselektroner og hoeyere ioneladning, som gir sterkere metallbinding', isCorrect: true },
              { id: 'c', text: 'Aluminium har flere noytroner', isCorrect: false },
              { id: 'd', text: 'Aluminium har kovalente bindinger i tillegg', isCorrect: false },
            ],
            solution:
              'Al3+ har 3 valenselektroner i sjoen og ladning +3, mens Na+ har bare 1 valenselektron og ladning +1. Flere elektroner, hoeyere ladning og mindre ioner gir sterkere metallbinding.',
          },
          {
            id: 'nat-vg1-4-5-n-quiz1-q3',
            task: 'Hvorfor er metaller gode ledere av stroem?',
            options: [
              { id: 'a', text: 'De har mange protoner som kan bevege seg', isCorrect: false },
              { id: 'b', text: 'De har ioner som loeser seg i vann', isCorrect: false },
              { id: 'c', text: 'De har frie elektroner som kan bevege seg gjennom metallet', isCorrect: true },
              { id: 'd', text: 'De absorberer lys og omdanner det til energi', isCorrect: false },
            ],
            solution:
              'De frie elektronene i elektronsjoen kan bevege seg under paavirkning av en spenning. Denne bevegelsen av ladede partikler er elektrisk stroem. Metaller leder alltid, i motsetning til ioneforbindelser som bare leder naar de er smeltet eller loest.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-4-5-n-section2',
      type: 'text',
      content: `## De tre bindingstypene -- et komplett bilde

Naa som vi har laert om alle tre bindingstypene, er det paa tide aa sette dem sammen. Ionebinding, kovalent binding og metallbinding er tre fundamentalt ulike maater atomer kan holde sammen paa, og de gir tre helt ulike sett med egenskaper.

**Ionebinding** oppstaar mellom metaller og ikke-metaller. Elektroner overfores permanent, og ionene ordner seg i et tredimensjonalt ionegitter. Ioneforbindelser har hoeyt smeltepunkt, er harde men sproe, leder stroem bare naar de er smeltet eller loest i vann, og er ofte loeselige i vann. Eksempler er NaCl (bordsalt), MgO og CaF2.

**Kovalent binding** oppstaar mellom ikke-metaller. Atomer deler elektronpar og danner individuelle molekyler. Kovalente forbindelser har lavt til middels smeltepunkt, er myke eller gassformige, leder ikke stroem, og loeseligheten avhenger av polaritet. Eksempler er H2O (vann), CO2 (karbondioksid) og CH4 (metan).

**Metallbinding** oppstaar mellom metallatomer. Valenselektronene deles av alle atomene i et felles elektronsjoe. Metaller har varierende (men oftest hoeyt) smeltepunkt, er harde og formbare, leder stroem og varme alltid, og glinser. Eksempler er Fe (jern), Cu (kobber), Al (aluminium) og Au (gull).

Et godt husketips: Ionebinding er "gi og ta" -- elektroner flyttes permanent. Kovalent binding er "deling er bra" -- elektroner deles i par mellom to atomer. Metallbinding er "alle for en" -- elektroner deles av alle.

Det fine med dette er at du kan identifisere bindingstypen bare ved aa observere stoffets egenskaper. Leder det stroem som fast stoff? Da er det et metall. Leder det ikke som fast stoff, men gjor det naar det smeltes eller loeses i vann? Da er det en ioneforbindelse. Leder det aldri stroem og er det uloeselig i vann? Da er det sannsynligvis en upolar kovalent forbindelse.`,
    },
    {
      id: 'nat-vg1-4-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa aa sammenligne og gjenkjenne bindingstyper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-4-5-n-quiz2-q0',
            task: 'Et fast stoff leder stroem, kan boeyes og er glinsende. Hvilken bindingstype har det?',
            options: [
              { id: 'a', text: 'Ionebinding', isCorrect: false },
              { id: 'b', text: 'Kovalent binding', isCorrect: false },
              { id: 'c', text: 'Metallbinding', isCorrect: true },
              { id: 'd', text: 'Hydrogenbnding', isCorrect: false },
            ],
            solution:
              'Bare metaller leder stroem som fast stoff, er formbare og glinsende. Ioneforbindelser er sproe og leder bare smeltet/loest. Kovalente stoffer leder ikke stroem.',
          },
          {
            id: 'nat-vg1-4-5-n-quiz2-q1',
            task: 'Hva er hovedforskjellen mellom ionebinding og kovalent binding?',
            options: [
              { id: 'a', text: 'Ionebinding er sterkere', isCorrect: false },
              { id: 'b', text: 'I ionebinding overfores elektroner, i kovalent binding deles de', isCorrect: true },
              { id: 'c', text: 'Kovalent binding finnes bare i gasser', isCorrect: false },
              { id: 'd', text: 'Ionebinding finnes bare i vann', isCorrect: false },
            ],
            solution:
              'I ionebinding overfores elektroner permanent fra metall til ikke-metall (gi og ta). I kovalent binding deles elektroner mellom ikke-metaller (deling). I metallbinding deles elektronene av alle atomene (felles sjoe).',
          },
          {
            id: 'nat-vg1-4-5-n-quiz2-q2',
            task: 'Du har et hvitt pulver som loeser seg i vann. Losningen leder stroem. Hva slags binding har stoffet?',
            options: [
              { id: 'a', text: 'Kovalent binding', isCorrect: false },
              { id: 'b', text: 'Metallbinding', isCorrect: false },
              { id: 'c', text: 'Ionebinding', isCorrect: true },
              { id: 'd', text: 'Det er umulig aa si', isCorrect: false },
            ],
            solution:
              'Stoffer med ionebinding loeser seg ofte i vann, og losningen leder stroem fordi ionene kan bevege seg fritt. Kovalente stoffer leder vanligvis ikke stroem, og metaller loeser seg ikke i vann.',
          },
          {
            id: 'nat-vg1-4-5-n-quiz2-q3',
            task: 'Hvilket av disse utsagnene om metallbinding er riktig?',
            options: [
              { id: 'a', text: 'Hvert atom deler sitt elektronpar med nabolatomet', isCorrect: false },
              { id: 'b', text: 'Elektronene sitter fast og kan ikke bevege seg', isCorrect: false },
              { id: 'c', text: 'Valenselektronene deles av alle atomene og beveger seg fritt som en sjo', isCorrect: true },
              { id: 'd', text: 'Metaller har ingen valenselektroner', isCorrect: false },
            ],
            solution:
              'I metallbinding gir metallatmene fra seg valenselektronene til et felles elektronsjoe som beveger seg fritt gjennom hele metallet. De positive metallionene holdes sammen av tiltrekningen til denne sjoen.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-4-5-n-summary',
      type: 'text',
      content: `## Oppsummering

Med metallbinding paa plass har du naa det komplette bildet av kjemiske bindinger. Ionebinding, kovalent binding og metallbinding er tre grunnleggende maater atomer organiserer seg paa -- og de forklarer egenskapene til nesten alle stoffer du moeter i hverdagen.

**Nokkelkunnskapen fra dette kapittelet:**

- **Metallbinding**: Valenselektroner deles av alle atomene i et felles elektronsjoe. Positive metallioner holdes sammen av tiltrekningen til elektronsjoen
- **Metallers egenskaper forklart**: Elektronsjoen forklarer elektrisk ledningsevne (frie elektroner beveger seg), varmeledning (elektroner transporterer energi), metallglans (elektroner reflekterer lys) og formbarhet (elektronsjoen foelger med naar ioner forskyves)
- **Bindingsstyrke**: Sterkere metallbinding med flere valenselektroner, hoeyere ioneladning og mindre ionradius. Smeltepunkttrend: Na (98 grader) < Mg (650 grader) < Al (660 grader)
- **De tre bindingstypene**: Ionebinding (overforing, mellom metall og ikke-metall), kovalent binding (deling i par, mellom ikke-metaller), metallbinding (felles elektronsjoe, mellom metaller)
- **Gjenkjenne bindingstype**: Leder stroem fast = metall. Leder stroem smeltet/loest = ioneforbindelse. Leder aldri = kovalent forbindelse. Formbar = metall. Sproe = ioneforbindelse. Myk/gass = kovalent`,
    },
  ],
  exercises: [],
};

export const NAT_VG1_NARRATIV_DEL3B_CHAPTERS = [
  CHAPTER_NAT_VG1_4_1_NARRATIV,
  CHAPTER_NAT_VG1_4_2_NARRATIV,
  CHAPTER_NAT_VG1_4_3_NARRATIV,
  CHAPTER_NAT_VG1_4_4_NARRATIV,
  CHAPTER_NAT_VG1_4_5_NARRATIV,
];
