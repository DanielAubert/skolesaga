/* eslint-disable */
// @ts-nocheck

/**
 * Medie- og informasjonskunnskap 2 (VG3) - Del 3: Medieetikk og medierett
 *
 * Kapittel 3.1–3.5
 *
 * LK20-kompetansemål:
 * - drøfte presseetiske dilemmaer med utgangspunkt i Vær Varsom-plakaten
 * - vurdere forholdet mellom ytringsfrihet og personvern i konkrete saker
 * - gjøre rede for sentrale bestemmelser i medielovgivningen
 * - analysere etiske utfordringer knyttet til ny teknologi i mediene
 * - anvende kildekritiske metoder og vurdere kildevern i journalistikken
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Presseetikk og Vær Varsom-plakaten
// ============================================================================

export const CHAPTER_MEDIEINFO_2_3_1: TextbookChapter = {
  id: 'medieinfo-2-3-1',
  courseId: 'medieinfo-2',
  chapterNumber: '3.1',
  title: 'Presseetikk og Vær Varsom-plakaten',
  description: 'Etiske retningslinjer for journalister: Vær Varsom-plakatens oppbygning, PFUs rolle, presseetiske avveininger og selvjustis i norsk presse.',
  estimatedMinutes: 20,
  competenceGoals: ['drøfte presseetiske dilemmaer med utgangspunkt i Vær Varsom-plakaten'],
  keyTerms: [
    { term: 'Vær Varsom-plakaten', definition: 'Norsk presses etiske regelverk, vedtatt av Norsk Presseforbund, med retningslinjer for god presseskikk' },
    { term: 'PFU', definition: 'Pressens Faglige Utvalg – bransjens eget klageorgan som behandler klager på brudd mot god presseskikk' },
    { term: 'Presseetikk', definition: 'De etiske normene og prinsippene som styrer journalistisk praksis, utover det loven krever' },
    { term: 'Selvjustis', definition: 'At pressen regulerer seg selv gjennom etiske retningslinjer og klageordninger, uten statlig innblanding' },
    { term: 'Tilsvarsretten', definition: 'Retten til å forsvare seg mot påstander i mediene, forankret i Vær Varsom-plakatens punkt 4.15' },
  ],
  content: [
    {
      id: 'mi2-3-1-intro',
      type: 'text',
      content: `## Presseetikk – mer enn bare lover

Presseetikk handler om hva journalister *bør* gjøre, ikke bare hva de *har lov til*. I Norge har pressen et selvreguleringssystem der bransjen selv har utviklet etiske retningslinjer som går lenger enn lovverket. Kjernen i dette systemet er **Vær Varsom-plakaten** og klageorganet **PFU** (Pressens Faglige Utvalg).

I dette kapittelet skal du:
- Forstå oppbygningen og innholdet i Vær Varsom-plakaten
- Lære hvordan PFU fungerer som klageinstans
- Analysere konkrete presseetiske dilemmaer
- Vurdere betydningen av selvregulering i norsk presse`,
    },
    {
      id: 'mi2-3-1-def-1',
      type: 'definition',
      title: 'Vær Varsom-plakaten',
      content: `**Vær Varsom-plakaten** er det viktigste etiske regelverket for norsk presse. Den ble første gang vedtatt i 1936 og revideres jevnlig av Norsk Presseforbund. Plakaten er bygd opp i fire hoveddeler:

1. **Pressens samfunnsrolle** (punkt 1.1–1.5) – om ytringsfrihet, uavhengighet og samfunnsoppdraget
2. **Integritet og troverdighet** (punkt 2.1–2.9) – om habilitet, dobbeltroller og uavhengighet fra kilder
3. **Journalistisk atferd og forholdet til kildene** (punkt 3.1–3.10) – om kildebruk, sitatsjekk og premisser for intervju
4. **Publiseringsregler** (punkt 4.1–4.17) – om saklighet, identifisering, barn, selvmord og tilsvarsrett`,
    },
    {
      id: 'mi2-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Identifisering i kriminalsaker',
      problem: 'En kjent næringslivsleder er siktet for grov økonomisk kriminalitet. Politiet har holdt en pressekonferanse der navnet ikke er oppgitt, men det er allmenn kjent hvem siktelsen gjelder. Bør avisen identifisere vedkommende med fullt navn og bilde?',
      solution: `Vurderingen må veie flere hensyn opp mot hverandre:

**For identifisering:**
- Personen har en fremtredende rolle i offentligheten (punkt 4.7)
- Saken gjelder alvorlig kriminalitet som berører mange
- Offentligheten har interesse av å vite hvem som forvalter store verdier

**Mot identifisering:**
- Siktelse er ikke det samme som dom – uskyldspresumsjonen gjelder (punkt 4.5)
- Identifisering kan ha alvorlige konsekvenser for familie og nærstående
- Informasjonsbehovet kan delvis dekkes uten full identifisering

**Konklusjon:** I dette tilfellet taler flere forhold for identifisering: personens offentlige posisjon, sakens alvorlighetsgrad og at identiteten allerede er allment kjent. Avisen bør likevel vise varsomhet med bildebruk og understreke at vedkommende kun er siktet, ikke dømt.`,
    },
    {
      id: 'mi2-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        task: 'Hvilken del av Vær Varsom-plakaten regulerer forholdet mellom journalisten og kildene?',
        options: [
          { id: 'a', text: 'Del 1 – Pressens samfunnsrolle', isCorrect: false },
          { id: 'b', text: 'Del 2 – Integritet og troverdighet', isCorrect: false },
          { id: 'c', text: 'Del 3 – Journalistisk atferd og forholdet til kildene', isCorrect: true },
          { id: 'd', text: 'Del 4 – Publiseringsregler', isCorrect: false },
        ],
        solution: 'Del 3 av Vær Varsom-plakaten (punkt 3.1–3.10) regulerer journalistisk atferd og forholdet til kildene. Her finner vi regler om sitatsjekk, premisser for intervju, skjult identitet og pressens plikt til å klargjøre premissene overfor kilden.',
      },
    },
    {
      id: 'mi2-3-1-def-2',
      type: 'definition',
      title: 'Pressens Faglige Utvalg (PFU)',
      content: `**PFU** er pressens eget klageorgan. Det består av syv medlemmer – fire fra pressen og tre fra allmennheten. PFU behandler klager på brudd mot Vær Varsom-plakaten og kan konkludere med:

- **Ikke brudd** – publiseringen var innenfor god presseskikk
- **Kritikk** – mediet har opptrådt kritikkverdig, men ikke brutt god presseskikk
- **Brudd** – mediet har brutt god presseskikk

Medier som felles i PFU er forpliktet til å publisere kjennelsen. PFU kan ikke ilegge bøter eller straff – sanksjonen er offentlig kritikk og den omdømmebelastningen dette medfører.`,
    },
    {
      id: 'mi2-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Selvjustis versus statlig regulering',
      problem: 'Noen mener at pressens selvregulering gjennom PFU er utilstrekkelig og at staten bør regulere mediene strengere. Andre mener at statlig kontroll av pressen er uforenlig med pressefriheten. Hvilke argumenter finnes for og mot selvregulering?',
      solution: `**Argumenter for selvregulering:**
- Statlig regulering av pressen kan true ytringsfriheten og demokratisk kontroll
- Bransjen selv har best kompetanse til å vurdere etiske dilemmaer
- Selvjustis sikrer legitimitet og aksept i bransjen
- Fleksibilitet – retningslinjene kan tilpasses raskt etter nye utfordringer

**Argumenter mot selvregulering:**
- PFU har ingen reelle sanksjonsmuligheter utover offentlig kritikk
- Bukken passer havresekken – pressen dømmer seg selv
- Felling i PFU har begrenset konsekvens for store medieaktører
- Enkelte mener at noen presseetiske brudd er så alvorlige at de bør ha rettslige konsekvenser

**Vurdering:** Det norske systemet balanserer disse hensynene ved at PFUs kjennelser suppleres av lovverket (injurielovgivning, medieansvarsloven), men at den daglige etiske standarden styres av bransjen selv.`,
    },
    {
      id: 'mi2-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        task: 'Hva kan PFU gjøre dersom de konkluderer med at et medium har brutt god presseskikk?',
        options: [
          { id: 'a', text: 'Ilegge mediet en bot på opptil 500 000 kroner', isCorrect: false },
          { id: 'b', text: 'Kreve at mediet publiserer PFUs kjennelse', isCorrect: true },
          { id: 'c', text: 'Inndra mediets publiseringsrett i inntil tre måneder', isCorrect: false },
          { id: 'd', text: 'Kreve at ansvarlig journalist mister sin presseakkreditering', isCorrect: false },
        ],
        solution: 'PFU kan ikke ilegge bøter eller inndra rettigheter. Sanksjonen er at mediet som felles for brudd på god presseskikk, er forpliktet til å publisere PFUs kjennelse. Den reelle konsekvensen er omdømmetap og offentlig kritikk.',
      },
    },
    {
      id: 'mi2-3-1-text-2',
      type: 'text',
      content: `### Presseetiske avveininger i praksis

Presseetiske dilemmaer oppstår ofte når ulike hensyn står mot hverandre. De vanligste spenningsfeltene er:

**Offentlighetens informasjonsbehov mot personvernet**
Publikum har krav på informasjon om saker av allmenn interesse, men enkeltpersoner har rett til vern av privatlivet. Denne avveiningen er særlig krevende i saker som involverer sykdom, familieforhold og mindreårige.

**Pressefrihet mot hensynet til sårbare grupper**
Pressen kan publisere det meste, men Vær Varsom-plakaten krever varsomhet overfor barn, selvmordsofre, ofre for ulykker og personer i sorg eller ubalanse. Punkt 4.9 om selvmord er et eksempel: hovedregelen er at selvmord ikke skal omtales, med mindre det foreligger et berettiget informasjonsbehov.

**Tempo mot grundighet**
I en tid med sanntidsjournalistikk og sosiale medier er presset stort for å publisere raskt. Presseetikken krever imidlertid at informasjon verifiseres før publisering (punkt 3.2). Å publisere uprøvde påstander kan skade uskyldige.`,
    },
    {
      id: 'mi2-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        task: 'Forklar hva som menes med pressens selvjustis. Drøft fordeler og ulemper ved at pressen regulerer seg selv i stedet for at staten gjør det.',
        hints: ['Tenk på pressefriheten, sanksjonsmuligheter og hvem som har kompetanse til å vurdere presseetikk'],
        solution: 'Pressens selvjustis innebærer at bransjen har utviklet egne etiske retningslinjer (Vær Varsom-plakaten) og et eget klageorgan (PFU), uten statlig innblanding. Fordeler: (1) Selvregulering beskytter pressefriheten – statlig kontroll kan true den frie pressen. (2) Bransjen har best kompetanse til å vurdere etiske dilemmaer i praksis. (3) Retningslinjene kan tilpasses raskt etter nye utfordringer. Ulemper: (1) PFU mangler reelle sanksjonsmuligheter – felling gir kun omdømmebelastning. (2) Kritikere mener pressen dømmer seg selv for mildt. (3) Store mediekonsern kan tåle felling uten at det får reelle konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        task: 'En avis har publisert navnet og bildet til en 16-åring som er tatt for ran. Familien klager til PFU. Vurder publiseringen opp mot relevante punkter i Vær Varsom-plakaten.',
        hints: ['Se spesielt på punkt 4.7 (identifisering), punkt 4.8 (barn) og vurder informasjonsbehovet mot skadevirkningene'],
        solution: 'Publiseringen er problematisk ut fra flere punkter i Vær Varsom-plakaten: (1) Punkt 4.8 krever at barns identitet som hovedregel ikke skal røpes i forbindelse med rettssaker – 16-åringen er mindreårig. (2) Punkt 4.7 krever varsomhet med identifisering generelt, og terskelen for å identifisere mindreårige er svært høy. (3) Selv om ran er alvorlig, er informasjonsbehovet sjelden så stort at det rettferdiggjør identifisering av en mindreårig. Konklusjon: Avisen vil trolig bli felt i PFU for brudd på punkt 4.8.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-1-ex-5',
        number: '3.1.5',
        type: 'classic',
        task: 'Gjør rede for de fire hoveddelene i Vær Varsom-plakaten og gi et konkret eksempel til hver del som viser hvordan den kan bli aktuell i journalistisk praksis.',
        hints: ['Del 1: Samfunnsrollen, Del 2: Integritet, Del 3: Kildeforholdet, Del 4: Publiseringsregler'],
        solution: 'De fire hoveddelene er: (1) Pressens samfunnsrolle – handler om ytringsfrihet og uavhengighet. Eksempel: En redaktør som nekter å la en annonsør påvirke en kritisk sak, forsvarer pressens uavhengighet. (2) Integritet og troverdighet – handler om habilitet og dobbeltroller. Eksempel: En journalist som eier aksjer i et selskap bør ikke skrive om dette selskapet. (3) Journalistisk atferd og forholdet til kildene – handler om kildebehandling. Eksempel: En journalist må klargjøre premissene for et intervju, slik at kilden vet hva sitatene skal brukes til. (4) Publiseringsregler – handler om saklighet, identifisering og tilsvarsrett. Eksempel: En person som angripes i en artikkel har rett til samtidig imøtegåelse (punkt 4.14).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        task: 'Diskuter spenningsfeltet mellom tempo og grundighet i moderne nettjournalistikk. Hvilke presseetiske utfordringer oppstår når mediene publiserer i sanntid, og hvordan kan Vær Varsom-plakaten bidra til å løse disse utfordringene?',
        hints: ['Tenk på punkt 3.2 om verifisering, konsekvenser av feilpublisering og sosiale mediers påvirkning på nyhetstempo'],
        solution: 'Nettjournalistikk og sosiale medier skaper et enormt press for rask publisering. Presseetiske utfordringer: (1) Uprøvde påstander kan skade uskyldige dersom de publiseres før verifisering. (2) Feilinformasjon sprer seg raskt og kan være vanskelig å korrigere. (3) Konkurransen om å publisere først kan gå på bekostning av grundighet. Vær Varsom-plakaten bidrar gjennom punkt 3.2 som krever at opplysninger skal kontrolleres, og punkt 4.1 om saklighet og omtanke. I praksis bør redaksjoner ha klare rutiner for faktasjekk også i sanntidspublisering, og heller tåle å være noen minutter seinere enn å publisere noe som kan vise seg å være feil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Vær Varsom-plakaten** er bygd opp i fire hoveddeler som dekker samfunnsrolle, integritet, kildeforhold og publiseringsregler
- **PFU** er pressens eget klageorgan som kan felle medier for brudd på god presseskikk
- **Selvjustis** innebærer at pressen regulerer seg selv uten statlig innblanding
- Presseetiske dilemmaer krever avveininger mellom informasjonsbehov, personvern, pressefrihet og grundighet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Vær Varsom-plakaten | Norsk presses etiske regelverk med fire hoveddeler |
| PFU | Pressens Faglige Utvalg – klageorgan for presseetikk |
| Selvjustis | At pressen regulerer seg selv uten statlig kontroll |
| Tilsvarsretten | Retten til å forsvare seg mot angrep i mediene |
| Samtidig imøtegåelse | Retten til å kommentere sterke beskyldninger før publisering |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Personvern og ytringsfrihet
// ============================================================================

export const CHAPTER_MEDIEINFO_2_3_2: TextbookChapter = {
  id: 'medieinfo-2-3-2',
  courseId: 'medieinfo-2',
  chapterNumber: '3.2',
  title: 'Personvern og ytringsfrihet',
  description: 'Balansen mellom ytringsfrihet og personvern: Grunnlovens bestemmelser, EMK artikkel 8 og 10, personopplysningsloven og grensetilfeller i praksis.',
  estimatedMinutes: 20,
  competenceGoals: ['vurdere forholdet mellom ytringsfrihet og personvern i konkrete saker'],
  keyTerms: [
    { term: 'Ytringsfrihet', definition: 'Retten til fritt å ytre seg, forankret i Grunnloven § 100 og EMK artikkel 10' },
    { term: 'Personvern', definition: 'Retten til beskyttelse av privatlivet, forankret i Grunnloven § 102 og EMK artikkel 8' },
    { term: 'GDPR', definition: 'EUs personvernforordning (General Data Protection Regulation) som også gjelder i Norge gjennom EØS-avtalen' },
    { term: 'Personopplysning', definition: 'Enhver opplysning som kan knyttes til en identifiserbar person, direkte eller indirekte' },
    { term: 'Forholdsmessighetsprinsippet', definition: 'At inngrep i rettigheter må stå i rimelig forhold til formålet som søkes oppnådd' },
  ],
  content: [
    {
      id: 'mi2-3-2-intro',
      type: 'text',
      content: `## To grunnleggende rettigheter i konflikt

Ytringsfrihet og personvern er begge grunnleggende menneskerettigheter, men de kan stå i direkte motsetning til hverandre. Ytringsfriheten gir rett til å publisere informasjon, mens personvernet gir rett til å skjerme privatlivet. Når en journalist avslører en politikers utroskap eller en kjendis' helsetilstand, oppstår spørsmålet: Hvilken rettighet veier tyngst?

I dette kapittelet skal du:
- Forstå det rettslige grunnlaget for ytringsfrihet og personvern
- Lære hvordan domstolene veier disse rettighetene mot hverandre
- Analysere konkrete situasjoner der rettighetene kolliderer
- Vurdere betydningen av GDPR og personopplysningsloven for mediene`,
    },
    {
      id: 'mi2-3-2-def-1',
      type: 'definition',
      title: 'Ytringsfriheten',
      content: `**Ytringsfriheten** er forankret i **Grunnloven § 100** og **Den europeiske menneskerettskonvensjon (EMK) artikkel 10**. Den innebærer at enhver har rett til å motta og meddele informasjon og ideer uten inngrep fra offentlige myndigheter. Ytringsfriheten er imidlertid ikke absolutt – den kan begrenses for å beskytte blant annet personvernet, rikets sikkerhet og andres rettigheter. Grunnloven § 100 tredje ledd fastslår at frimodige ytringer om statsstyret og enhver annen gjenstand er tillatt, noe som gir ytringsfrihet en særlig sterk stilling i norsk rett.`,
    },
    {
      id: 'mi2-3-2-def-2',
      type: 'definition',
      title: 'Personvernet',
      content: `**Personvernet** er forankret i **Grunnloven § 102** (retten til privatliv) og **EMK artikkel 8** (retten til respekt for privatliv og familieliv). I Norge er personvernet ytterligere regulert gjennom **personopplysningsloven**, som gjennomfører EUs **GDPR** (personvernforordningen). Personvernet gir den enkelte rett til kontroll over egne personopplysninger og beskyttelse mot uberettiget inngrep i privatlivet.`,
    },
    {
      id: 'mi2-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Politikerens privatliv',
      problem: 'En stortingspolitiker som er kjent for å fremme tradisjonelle familieverdier, viser seg å ha et hemmelig forhold utenfor ekteskapet. En journalist har dokumentasjon. Bør dette publiseres?',
      solution: `Denne saken illustrerer den klassiske spenningen mellom ytringsfrihet og personvern:

**Argumenter for publisering (ytringsfrihet):**
- Dobbeltmoral hos en offentlig person som aktivt fremmer bestemte verdier, er av offentlig interesse
- Velgerne har rett til å vite om det er samsvar mellom politikerens offentlige standpunkter og private handlinger
- Politikere har lavere terskel for personvern når det gjelder forhold som er relevante for deres politiske virke

**Argumenter mot publisering (personvern):**
- Selv politikere har rett til privatliv i saker som ikke direkte angår deres embetsutøvelse
- Publisering kan skade uskyldige tredjeparter (ektefelle, barn)
- Privatlivet er som hovedregel beskyttet, også for offentlige personer

**Vurdering:** Den europeiske menneskerettsdomstolen (EMD) har slått fast at terskelen for inngrep i privatlivet er lavere for politikere enn for privatpersoner, men bare i saker med offentlig interesse. Her vil dobbeltmoralen gjøre saken relevant. En ansvarlig publisering bør likevel vise hensyn til tredjeparter.`,
    },
    {
      id: 'mi2-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        task: 'Hvilke to bestemmelser i norsk grunnlov forankrer henholdsvis ytringsfrihet og personvern?',
        options: [
          { id: 'a', text: 'Grunnloven § 96 (ytringsfrihet) og § 97 (personvern)', isCorrect: false },
          { id: 'b', text: 'Grunnloven § 100 (ytringsfrihet) og § 102 (personvern)', isCorrect: true },
          { id: 'c', text: 'Grunnloven § 100 (ytringsfrihet) og § 110 (personvern)', isCorrect: false },
          { id: 'd', text: 'Grunnloven § 98 (ytringsfrihet) og § 100 (personvern)', isCorrect: false },
        ],
        solution: 'Ytringsfriheten er forankret i Grunnloven § 100, som slår fast retten til frimodige ytringer. Personvernet er forankret i Grunnloven § 102, som beskytter retten til respekt for privatlivet. Begge bestemmelsene har paralleller i EMK artikkel 10 og 8.',
      },
    },
    {
      id: 'mi2-3-2-text-2',
      type: 'text',
      content: `### GDPR og mediefritaket

**GDPR** (General Data Protection Regulation) stiller strenge krav til behandling av personopplysninger. For mediene er det imidlertid et viktig unntak: **mediefritaket**. Dette innebærer at journalistisk virksomhet er unntatt fra flere av GDPRs bestemmelser, fordi hensynet til ytringsfriheten veier tungt.

Mediefritaket betyr i praksis at:
- Journalister kan behandle personopplysninger uten samtykke når det er nødvendig for journalistiske formål
- Retten til sletting («retten til å bli glemt») gjelder ikke for journalistiske arkiver
- Medier trenger ikke oppfylle informasjonsplikten overfor den omtalte i forkant av publisering

Mediefritaket er likevel ikke ubegrenset. Det gjelder kun for virksomhet som har et **journalistisk formål**, og det fritar ikke medier fra presseetiske krav.

### Forholdsmessighetsprinsippet

Når ytringsfrihet og personvern kolliderer, bruker domstolene **forholdsmessighetsprinsippet** for å avgjøre hvilken rettighet som veier tyngst. Sentrale momenter i vurderingen er:

1. **Offentlig interesse** – er informasjonen viktig for samfunnsdebatten?
2. **Personens rolle** – er vedkommende en offentlig eller privat person?
3. **Opplysningenes karakter** – er det sensitiv informasjon (helse, seksualitet)?
4. **Skadevirkninger** – hvilke konsekvenser får publisering for den berørte?
5. **Publiseringsmåte** – er fremstillingen saklig og balansert?`,
    },
    {
      id: 'mi2-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Retten til å bli glemt',
      problem: 'En person ble dømt for et mindre lovbrudd for ti år siden. Vedkommende har sonet straffen, lever et ordnet liv og ønsker at gamle nyhetsartikler om saken fjernes fra nettavisenes arkiver. Har personen rett til å få artiklene slettet?',
      solution: `Denne saken berører den såkalte «retten til å bli glemt» under GDPR:

**Personens argument (personvern):**
- Straffen er sonet, og personen er rehabilitert
- De gamle artiklene skader vedkommendes muligheter i arbeidslivet og sosialt
- GDPR gir rett til sletting av personopplysninger som ikke lenger er nødvendige

**Medienes argument (ytringsfrihet):**
- Mediefritaket beskytter journalistiske arkiver
- Nyhetsartikler er en del av den offentlige historien
- Å slette arkiver ville undergrave pressens funksjon som samfunnsminne

**Gjeldende praksis:** I Norge og EU har mediefritaket som regel forrang for journalistiske arkiver. Derimot kan søkemotorer (som Google) pålegges å fjerne lenker til artiklene fra søkeresultatene, slik at de blir vanskeligere å finne uten å bli slettet.`,
    },
    {
      id: 'mi2-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        task: 'Hva innebærer mediefritaket i GDPR?',
        options: [
          { id: 'a', text: 'At medier er helt unntatt fra alle personvernregler', isCorrect: false },
          { id: 'b', text: 'At journalistisk virksomhet er unntatt fra flere av GDPRs bestemmelser av hensyn til ytringsfriheten', isCorrect: true },
          { id: 'c', text: 'At medier fritt kan publisere personopplysninger uten noen begrensninger', isCorrect: false },
          { id: 'd', text: 'At GDPR ikke gjelder i Norge for medievirksomheter', isCorrect: false },
        ],
        solution: 'Mediefritaket innebærer at journalistisk virksomhet er unntatt fra flere av GDPRs bestemmelser, som krav om samtykke og retten til sletting. Fritaket gjelder kun for virksomhet med journalistisk formål og fritar ikke fra presseetiske krav. Det er ikke et totalt fritak fra alle personvernregler.',
      },
    },
    {
      id: 'mi2-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        task: 'Forklar forholdsmessighetsprinsippet og gjør rede for minst tre momenter domstolene vektlegger når de veier ytringsfrihet mot personvern.',
        hints: ['Tenk på offentlig interesse, personens rolle, opplysningenes karakter og skadevirkninger'],
        solution: 'Forholdsmessighetsprinsippet innebærer at inngrep i en rettighet (f.eks. personvernet) må stå i rimelig forhold til formålet (f.eks. offentlig informasjon). Tre sentrale momenter: (1) Offentlig interesse – informasjon som bidrar til samfunnsdebatten veier tyngre enn sladder uten offentlig verdi. (2) Personens rolle – offentlige personer som politikere tåler mer omtale enn privatpersoner, særlig i saker som gjelder deres offentlige rolle. (3) Opplysningenes karakter – sensitiv informasjon om helse, seksualitet eller religiøs overbevisning har sterkere vern enn opplysninger om yrkesutøvelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        task: 'En nettavis publiserer bilder fra en kjent artists private bursdagsfeiring, tatt av en fotograf som lurte seg inn på festen. Artisten klager. Vurder saken ut fra både ytringsfrihetens og personvernets perspektiv.',
        hints: ['Vurder om festen har offentlig interesse, om bildene er tatt på privat sted, og om artisten har samtykket'],
        solution: 'Personvern-perspektivet: (1) Festen er en privat sammenkomst, ikke et offentlig arrangement. (2) Fotografen har brukt ulovlige metoder for å skaffe bildene. (3) Artisten har ikke samtykket til fotografering. (4) EMK artikkel 8 beskytter privatlivet, også for kjente personer. Ytringsfrihet-perspektivet: (1) Kjente personer har lavere personvern i offentlige situasjoner, men dette var en privat situasjon. (2) Bildene bidrar ikke til noen offentlig debatt. Vurdering: Personvernet veier klart tyngst her. Artisten har rett til privatliv på private arrangementer, og innhentingsmetoden forsterker krenkelsen. Mediet ville trolig tape en rettssak og bli felt i PFU.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-2-ex-5',
        number: '3.2.5',
        type: 'classic',
        task: 'Drøft om «retten til å bli glemt» bør gjelde for nettavisers arkiver. Ta stilling til argumenter for og mot, og begrunn ditt eget standpunkt.',
        hints: ['Tenk på rehabilitering, pressens arkivfunksjon, informasjonstilgang og teknologisk utvikling'],
        solution: 'For at retten bør gjelde: (1) Rehabiliteringshensynet – personer som har sonet sin straff bør få en ny sjanse. (2) Gamle artikler kan gi uforholdsmessig store konsekvenser i en digital tid der alt er søkbart. (3) Personvernhensyn tilsier at foreldede opplysninger bør kunne fjernes. Mot at retten bør gjelde: (1) Journalistiske arkiver er en del av den offentlige historien og demokratiets hukommelse. (2) Sensur av arkiver skaper en farlig presedens. (3) Mediefritaket i GDPR beskytter nettopp denne funksjonen. Eget standpunkt bør balansere disse hensynene, for eksempel ved å foreslå mellomløsninger som avindeksering fra søkemotorer uten sletting av selve artikkelen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-2-ex-6',
        number: '3.2.6',
        type: 'classic',
        task: 'Sammenlign hvordan ytringsfrihet og personvern er regulert i henholdsvis Grunnloven og EMK. Hvilken betydning har det at begge rettighetene er beskyttet i begge rettskildene?',
        hints: ['Tenk på Grunnloven §§ 100 og 102, EMK artikkel 8 og 10, og hierarkiet mellom rettskildene'],
        solution: 'Ytringsfriheten: Grunnloven § 100 gir en vidtrekkende rett til frimodige ytringer, mens EMK artikkel 10 gir rett til å motta og meddele opplysninger uten inngrep fra myndighetene. Personvernet: Grunnloven § 102 beskytter retten til privatliv, mens EMK artikkel 8 gir rett til respekt for privatliv og familieliv. Betydningen av dobbel forankring: (1) Det styrker rettighetenes stilling ved at de er beskyttet på både nasjonalt og internasjonalt nivå. (2) Norske domstoler må ta hensyn til praksis fra Den europeiske menneskerettsdomstolen (EMD). (3) Det sikrer at ingen av rettighetene kan oppheves uten en svært krevende grunnlovsendring. (4) Konflikter mellom rettighetene må løses gjennom en konkret avveining i hvert tilfelle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Ytringsfriheten** er forankret i Grunnloven § 100 og EMK artikkel 10
- **Personvernet** er forankret i Grunnloven § 102 og EMK artikkel 8
- **Mediefritaket** i GDPR gir journalister unntak fra flere personvernregler
- **Forholdsmessighetsprinsippet** brukes for å avveie rettighetene mot hverandre
- Offentlige personer har lavere personvern i saker av offentlig interesse

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Ytringsfrihet | Retten til fritt å ytre seg (Grunnloven § 100, EMK art. 10) |
| Personvern | Retten til beskyttelse av privatlivet (Grunnloven § 102, EMK art. 8) |
| GDPR | EUs personvernforordning, gjennomført i norsk lov |
| Mediefritaket | Unntak for journalistisk virksomhet fra deler av GDPR |
| Forholdsmessighetsprinsippet | At inngrep i rettigheter må stå i rimelig forhold til formålet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Medierett og lovgivning
// ============================================================================

export const CHAPTER_MEDIEINFO_2_3_3: TextbookChapter = {
  id: 'medieinfo-2-3-3',
  courseId: 'medieinfo-2',
  chapterNumber: '3.3',
  title: 'Medierett og lovgivning',
  description: 'Medieansvarsloven, åndsverkloven, offentleglova og andre sentrale lover som regulerer medienes virksomhet i Norge.',
  estimatedMinutes: 20,
  competenceGoals: ['gjøre rede for sentrale bestemmelser i medielovgivningen'],
  keyTerms: [
    { term: 'Medieansvarsloven', definition: 'Lov som regulerer ansvarsforholdet for medieinnhold, inkludert redaktøransvaret og plattformansvar' },
    { term: 'Åndsverkloven', definition: 'Lov som beskytter opphavsretten til åndsverk – tekster, bilder, musikk, film og annet kreativt innhold' },
    { term: 'Offentleglova', definition: 'Lov som gir rett til innsyn i offentlige dokumenter og forvaltningens saksdokumenter' },
    { term: 'Injurie', definition: 'Ærekrenkelse – en uriktig beskyldning som er egnet til å skade en persons omdømme' },
    { term: 'Redaktøransvar', definition: 'Det rettslige ansvaret som påhviler sjefredaktøren for alt innhold som publiseres i mediet' },
  ],
  content: [
    {
      id: 'mi2-3-3-intro',
      type: 'text',
      content: `## Lovene som styrer mediene

Mediene opererer innenfor et juridisk rammeverk som balanserer pressefriheten mot andre hensyn. I Norge reguleres medievirksomhet av en rekke lover, fra det brede medieansvarsloven til spesiallover som åndsverkloven og offentleglova. Å kjenne disse lovene er avgjørende for alle som arbeider i mediene.

I dette kapittelet skal du:
- Forstå medieansvarsloven og prinsippet om redaktøransvar
- Lære om åndsverkloven og opphavsrettens betydning for mediene
- Kjenne offentleglovas regler om dokumentinnsyn
- Forstå reglene om ærekrenkelse og injurie`,
    },
    {
      id: 'mi2-3-3-def-1',
      type: 'definition',
      title: 'Medieansvarsloven',
      content: `**Medieansvarsloven** (lov om redaksjonell uavhengighet og ansvar i redaktørstyrte journalistiske medier) trådte i kraft i 2020 og lovfester flere sentrale prinsipper:

1. **Redaksjonell uavhengighet** – eier kan ikke instruere redaktøren om innholdet
2. **Redaktøransvaret** – sjefredaktøren har det overordnede ansvaret for publisert innhold
3. **Kildevernet** – lovfester journalisters rett til å beskytte sine anonyme kilder
4. **Plattformansvar** – regulerer ansvaret for brukerinnhold i kommentarfelt og debattforum

Loven gjelder for medier som er «redaktørstyrte journalistiske medier» – det vil si medier med en ansvarlig redaktør som utøver redaksjonell kontroll.`,
    },
    {
      id: 'mi2-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Opphavsrett i journalistikk',
      problem: 'En journalist skriver en omfattende reportasje for avisen sin. En konkurrerende nettavis kopierer store deler av reportasjen og publiserer den under eget navn, med noen endringer i ordlyden. Hvilke rettigheter har den opprinnelige journalisten og avisen?',
      solution: `Åndsverkloven gir opphavsrett til den som skaper et åndsverk:

1. **Journalisten har opphavsrett** til reportasjen som åndsverk. Det innebærer enerett til å råde over verket ved eksemplarfremstilling og tilgjengeliggjøring for allmennheten.
2. **Avisen har bruksrett** gjennom arbeidsavtalen, men dette gir ikke andre retten til å kopiere.
3. **Kopiering uten samtykke** er et brudd på åndsverkloven, selv om ordlyden er endret. Opphavsretten beskytter ikke bare ordrett kopiering, men også ulovlig bearbeiding.
4. **Sitatretten** (§ 29) tillater kortere sitater i samsvar med god skikk, men å kopiere store deler av en tekst går langt utover sitatretten.

**Konsekvenser:** Den opprinnelige avisen kan kreve at artikkelen fjernes, kreve erstatning, og anmelde forholdet. I tillegg kan saken få presseetiske konsekvenser.`,
    },
    {
      id: 'mi2-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        task: 'Hva lovfester medieansvarsloven blant annet?',
        options: [
          { id: 'a', text: 'At staten har rett til å sensurere medieinnhold som truer nasjonal sikkerhet', isCorrect: false },
          { id: 'b', text: 'At sjefredaktøren har det overordnede ansvaret for publisert innhold og at eier ikke kan styre innholdet', isCorrect: true },
          { id: 'c', text: 'At alle nordmenn har rett til å få publisert leserinnlegg i aviser', isCorrect: false },
          { id: 'd', text: 'At medier skal finansieres gjennom offentlige tilskudd', isCorrect: false },
        ],
        solution: 'Medieansvarsloven lovfester blant annet redaktøransvaret (at sjefredaktøren har overordnet ansvar for innholdet), redaksjonell uavhengighet (at eier ikke kan instruere redaktøren), og kildevernet. Den gir ikke staten rett til sensur eller borgere rett til publisering.',
      },
    },
    {
      id: 'mi2-3-3-def-2',
      type: 'definition',
      title: 'Åndsverkloven',
      content: `**Åndsverkloven** (lov om opphavsrett til åndsverk) beskytter skapende arbeid. For mediene er følgende bestemmelser sentrale:

- **Opphavsrett** (§ 2) – den som skaper et åndsverk har enerett til å råde over det
- **Sitatretten** (§ 29) – det er tillatt å sitere fra offentliggjorte verk i samsvar med god skikk
- **Dagshendingsregelen** (§ 36) – åndsverk som inngår i dagsaktuelle hendelser kan gjengis i mediedekning
- **Fotografiloven** – fotografer har enerett til sine bilder; bruk krever samtykke eller lovhjemmel
- **Vernetiden** er 70 år etter opphaverens død

Åndsverkloven er særlig aktuell i en digital tid der kopiering og deling av innhold er enklere enn noen gang.`,
    },
    {
      id: 'mi2-3-3-text-2',
      type: 'text',
      content: `### Offentleglova – retten til innsyn

**Offentleglova** (lov om rett til innsyn i dokument i offentleg verksemd) er et av journalistikkens viktigste verktøy. Loven gir enhver rett til å kreve innsyn i offentlige dokumenter, med visse unntak.

**Hovedprinsippet:** Saksdokumenter i offentlig forvaltning er offentlige med mindre det finnes lovhjemmel for unntak.

**Viktige unntak:**
- Dokumenter som er graderte av hensyn til rikets sikkerhet
- Interne dokumenter utarbeidet for intern saksforberedelse
- Dokumenter som inneholder taushetsbelagte opplysninger (helseopplysninger, personlige forhold)

**Betydning for journalistikken:**
Offentleglova gjør at journalister kan kreve innsyn i kommunale budsjetter, statlige kontrakter, offentlige utredninger og korrespondanse. Mange av de viktigste journalistiske avsløringene i Norge er basert på dokumentinnsyn. Dersom et innsynskrav avslås, kan det klages til overordnet organ og eventuelt til Sivilombudet.

### Injurie og ærekrenkelse

**Ærekrenkelse** var tidligere straffbart etter straffeloven, men fra 2015 er det kun sivilrettslig regulert. Det betyr at den krenkede kan kreve erstatning, men at det ikke lenger ilegges straff.

For at en ytring skal være en ærekrenkelse, må den:
1. Inneholde en **beskyldning** som er egnet til å skade omdømmet
2. Være **rettet mot en identifiserbar person**
3. Ikke være **sann** – sannhetsbevis fritar som hovedregel
4. Ikke være en **beskyttet ytring** (f.eks. i rettsforhandlinger)`,
    },
    {
      id: 'mi2-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Innsynskrav i praksis',
      problem: 'En journalist mistenker at en kommune har brukt millioner på et konsulentfirma uten offentlig anbudskonkurranse. Journalisten sender et innsynskrav til kommunen om alle kontrakter og fakturaer knyttet til konsulentfirmaet. Kommunen avslår med begrunnelse om «interne dokumenter». Er dette lovlig?',
      solution: `Journalisten har sterke rettigheter her:

1. **Kontrakter og fakturaer er som hovedregel offentlige** – de er ikke «interne dokumenter» i lovens forstand, fordi de er del av en avtale mellom kommunen og en ekstern part.
2. **Unntaket for interne dokumenter** gjelder kun dokumenter utarbeidet for den interne saksforberedelsen, som notater og utkast – ikke endelige avtaler.
3. **Journalisten bør klage** på avslaget til kommunens overordnede organ (typisk Statsforvalteren) og eventuelt til Sivilombudet.
4. **Meroffentlighetsprinsippet** tilsier at forvaltningen skal vurdere om det likevel kan gis innsyn, selv der unntakshjemmel finnes.

Mange viktige avsløringer av offentlig pengebruk har startet med nettopp slike innsynskrav. Kommunens avslag virker i dette tilfellet uberettiget.`,
    },
    {
      id: 'mi2-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        task: 'Hva gir sitatretten i åndsverkloven lov til?',
        options: [
          { id: 'a', text: 'Å kopiere hele artikler fra andre medier så lenge kilden oppgis', isCorrect: false },
          { id: 'b', text: 'Å sitere fra offentliggjorte verk i samsvar med god skikk og i det omfang formålet krever', isCorrect: true },
          { id: 'c', text: 'Å bruke bilder fra andre fotografer uten samtykke dersom man oppgir kilden', isCorrect: false },
          { id: 'd', text: 'Å gjengi hele bøker i nyhetsartikler dersom boken er relevant for nyheten', isCorrect: false },
        ],
        solution: 'Sitatretten (åndsverkloven § 29) tillater å sitere fra offentliggjorte verk i samsvar med god skikk og i det omfang formålet betinger. Det betyr kortere utdrag, ikke hele verk, og sitatene må brukes i en sammenheng som rettferdiggjør dem (f.eks. i en anmeldelse, debattartikkel eller nyhetsreportasje).',
      },
    },
    {
      id: 'mi2-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        task: 'Forklar hva offentleglova innebærer og hvorfor den er viktig for journalistikken. Gi et eksempel på en type sak der innsynsretten er avgjørende.',
        hints: ['Tenk på hovedprinsippet om offentlighet, viktige unntak, og hvordan innsyn kan avdekke maktmisbruk'],
        solution: 'Offentleglova gir enhver rett til innsyn i offentlige dokumenter, med visse lovbestemte unntak. Hovedprinsippet er at saksdokumenter i offentlig forvaltning er offentlige. Unntak gjelder for graderte dokumenter, interne saksdokumenter og taushetsbelagte opplysninger. Loven er viktig for journalistikken fordi den gir tilgang til informasjon om offentlig maktutøvelse. Eksempel: En journalist kan kreve innsyn i en kommunes kontrakter for å undersøke om det har foregått korrupsjon eller inhabilitet ved tildeling av offentlige oppdrag. Uten offentleglova ville slik informasjon vært utilgjengelig, og viktige avsløringer ville aldri kommet frem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        task: 'Gjør rede for forskjellen mellom presseetisk og rettslig ansvar for mediepubliseringer. Kan en publisering være lovlig, men likevel presseetisk problematisk? Begrunn svaret med et eksempel.',
        hints: ['Tenk på at loven setter en minimumsstandard mens presseetikken ofte stiller strengere krav'],
        solution: 'Presseetisk ansvar er regulert gjennom Vær Varsom-plakaten og PFU, mens rettslig ansvar følger av lover som medieansvarsloven, åndsverkloven og regler om ærekrenkelse. En publisering kan absolutt være lovlig, men likevel presseetisk problematisk. Eksempel: En avis identifiserer en person i en mindre straffesak med fullt navn. Identifiseringen er ikke ulovlig (det finnes ingen generell lov mot å navngi siktede), men den kan bryte med Vær Varsom-plakatens punkt 4.7 om varsomhet med identifisering. PFU kan dermed felle avisen for brudd på god presseskikk, selv om publiseringen er lovlig. Presseetikken setter altså en høyere standard enn lovens minstekrav.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-3-ex-5',
        number: '3.3.5',
        type: 'classic',
        task: 'En blogger kopierer et helt fotografi fra en nyhetsartikkel og publiserer det på sin egen nettside, med lenke tilbake til originalartikkelen. Vurder om dette er lovlig etter åndsverkloven, og begrunn svaret.',
        hints: ['Tenk på fotografens enerett, sitatrettens rekkevidde, og om lenke til kilden er tilstrekkelig'],
        solution: 'Kopiering av et helt fotografi uten samtykke er som hovedregel et brudd på åndsverkloven. Begrunnelse: (1) Fotografen har enerett til bildet etter åndsverkloven § 2. (2) Sitatretten (§ 29) gjelder primært for tekst og tillater kun sitater i samsvar med god skikk – å gjengi et helt fotografi går langt utover sitatretten. (3) At bloggeren lenker tilbake til originalartikkelen, er ikke tilstrekkelig – opphavsretten krever samtykke, ikke bare kreditering. (4) Dagshendingsregelen (§ 36) kan gi unntak i visse tilfeller, men gjelder kun bilder som inngår i selve dekningen av en dagsbegivenhet, ikke kopiering fra en annen artikkel. Konklusjon: Publiseringen er sannsynligvis ulovlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-3-ex-6',
        number: '3.3.6',
        type: 'classic',
        task: 'Sammenlign medieansvarsloven og Vær Varsom-plakaten. Hva er forskjellen mellom lovregulering og selvregulering av mediene, og hvordan utfyller de hverandre?',
        hints: ['Tenk på rettslige sanksjoner versus presseetiske sanksjoner, lovgivers rolle versus bransjens rolle'],
        solution: 'Medieansvarsloven er en lov vedtatt av Stortinget med rettslige sanksjoner (erstatning, straff), mens Vær Varsom-plakaten er et selvreguleringsinstrument vedtatt av Norsk Presseforbund med presseetiske sanksjoner (PFU-kjennelse, omdømmebelastning). Forskjeller: (1) Loven setter minimumsstandarden – det som er absolutt forbudt. Presseetikken går lenger og krever en høyere standard. (2) Loven håndheves av domstoler, presseetikken av PFU. (3) Lovbrudd kan gi erstatning, presseetiske brudd gir offentlig kritikk. De utfyller hverandre ved at medieansvarsloven lovfester prinsippene om redaktøransvar og kildevern som presseetikken lenge har praktisert, mens Vær Varsom-plakaten stiller krav som går utover lovens rammer, for eksempel detaljerte regler om identifisering og kildebehandling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Medieansvarsloven** lovfester redaktøransvaret, redaksjonell uavhengighet og kildevernet
- **Åndsverkloven** beskytter opphavsrett, men gir unntak gjennom sitatretten og dagshendingsregelen
- **Offentleglova** gir enhver rett til innsyn i offentlige dokumenter
- **Ærekrenkelse** er sivilrettslig regulert – den krenkede kan kreve erstatning
- Medielovgivning og presseetikk utfyller hverandre i regulering av mediene

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Medieansvarsloven | Lov om redaktøransvar og redaksjonell uavhengighet |
| Åndsverkloven | Lov om opphavsrett til kreativt innhold |
| Offentleglova | Lov om rett til innsyn i offentlige dokumenter |
| Sitatretten | Rett til å sitere fra offentliggjorte verk i samsvar med god skikk |
| Redaktøransvar | Sjefredaktørens rettslige ansvar for publisert innhold |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Etiske dilemmaer i moderne medier
// ============================================================================

export const CHAPTER_MEDIEINFO_2_3_4: TextbookChapter = {
  id: 'medieinfo-2-3-4',
  courseId: 'medieinfo-2',
  chapterNumber: '3.4',
  title: 'Etiske dilemmaer i moderne medier',
  description: 'Deepfakes, AI-generert innhold, algoritmisk kurasjon, mikromålretting og andre teknologidrevne etiske utfordringer for moderne medier.',
  estimatedMinutes: 20,
  competenceGoals: ['analysere etiske utfordringer knyttet til ny teknologi i mediene'],
  keyTerms: [
    { term: 'Deepfake', definition: 'AI-generert video eller lyd der en persons ansikt eller stemme manipuleres til å si eller gjøre noe de aldri har gjort' },
    { term: 'AI-generert innhold', definition: 'Tekst, bilder, lyd eller video skapt av kunstig intelligens, som kan være vanskelig å skille fra menneskeskapt innhold' },
    { term: 'Algoritmisk kurasjon', definition: 'At algoritmer bestemmer hvilket innhold brukerne ser, basert på data om deres atferd og preferanser' },
    { term: 'Filterboble', definition: 'At algoritmer begrenser brukernes informasjonstilgang ved å vise dem innhold som bekrefter eksisterende syn' },
    { term: 'Mikromålretting', definition: 'Bruk av detaljert brukerdata for å sende skreddersydde budskap til svært spesifikke målgrupper' },
  ],
  content: [
    {
      id: 'mi2-3-4-intro',
      type: 'text',
      content: `## Teknologi som etisk utfordring

Ny teknologi skaper nye etiske dilemmaer for mediene i en hastighet som lovverket og presseetikken knapt klarer å følge. Deepfakes, AI-generert innhold, algoritmisk sortering og mikromålrettet reklame utfordrer grunnleggende prinsipper om sannhet, tillit og ansvarlighet i mediene.

I dette kapittelet skal du:
- Forstå hva deepfakes er og hvilke farer de representerer
- Analysere etiske utfordringer ved AI-generert innhold i journalistikk
- Vurdere konsekvensene av algoritmisk kurasjon og filterbobler
- Drøfte ansvarsforhold ved nye medieteknologier`,
    },
    {
      id: 'mi2-3-4-def-1',
      type: 'definition',
      title: 'Deepfakes',
      content: `**Deepfakes** er syntetisk media skapt ved hjelp av maskinlæring (spesifikt generative adversarial networks, GAN) der en persons ansikt, stemme eller kroppsbevegelser manipuleres digitalt. Resultatet kan være svært overbevisende video eller lyd der personen tilsynelatende sier eller gjør noe de aldri har gjort.

Deepfakes representerer en trussel mot mediene fordi:
- De kan brukes til å forfalske uttalelser fra politikere og offentlige personer
- De undergraver tilliten til autentisk video- og lydmateriale
- De kan brukes til desinformasjon, svindel og trakassering
- De er stadig vanskeligere å oppdage med det blotte øye`,
    },
    {
      id: 'mi2-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Deepfake av en politiker',
      problem: 'Rett før et stortingsvalg deles en video på sosiale medier der en partilederkandidaten tilsynelatende innrømmer korrupsjon. Videoen viser seg å være en deepfake. Hvordan bør mediene håndtere dette?',
      solution: `Mediene har et kritisk ansvar i en slik situasjon:

**Umiddelbare tiltak:**
1. **Ikke dele videoen ukritisk** – selv i en avkreftende artikkel bør man vurdere om videoen i seg selv sprer desinformasjonen
2. **Verifisere** – bruke tilgjengelige verktøy for deepfake-deteksjon og kontakte personen i videoen
3. **Informere publikum** raskt om at videoen er falsk, med tydelig forklaring

**Langsiktige tiltak:**
4. **Mediekompetanse** – bidra til at publikum forstår at deepfakes finnes og hvordan de kan gjenkjennes
5. **Teknologisk investering** – redaksjoner bør ha tilgang til verktøy for å verifisere video og bilde
6. **Samarbeid** – medier, teknologiselskaper og myndigheter bør samarbeide om å bekjempe deepfakes

**Presseetisk vurdering:** Vær Varsom-plakatens punkt 3.2 krever at opplysninger skal kontrolleres. I en tid med deepfakes innebærer dette en utvidet verifiseringsplikt for video- og lydmateriale.`,
    },
    {
      id: 'mi2-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        task: 'Hva er en deepfake?',
        options: [
          { id: 'a', text: 'En artikkel med bevisst feilinformasjon publisert av et etablert medium', isCorrect: false },
          { id: 'b', text: 'AI-generert video eller lyd der en persons ansikt eller stemme er manipulert', isCorrect: true },
          { id: 'c', text: 'Et falskt brukerprofil på sosiale medier opprettet for å spre propaganda', isCorrect: false },
          { id: 'd', text: 'Et fotografi som er retusjert med tradisjonell bilderedigeringsprogramvare', isCorrect: false },
        ],
        solution: 'En deepfake er AI-generert video eller lyd der en persons ansikt, stemme eller kroppsbevegelser er digitalt manipulert ved hjelp av maskinlæring. Det skiller seg fra tradisjonell bilderedigering ved at AI-en kan skape svært overbevisende syntetisk media.',
      },
    },
    {
      id: 'mi2-3-4-def-2',
      type: 'definition',
      title: 'AI-generert innhold i journalistikk',
      content: `**AI-generert innhold** omfatter tekst, bilder, lyd og video som er produsert av kunstig intelligens. I mediekontekst reiser dette flere etiske spørsmål:

**Bruksområder i journalistikk:**
- Automatisert nyhetsproduksjon (sport, finans, vær)
- Transkripsjon og oversettelse
- Dataanalyse og mønstre i store datasett
- AI-assistert research og faktagjennomgang

**Etiske utfordringer:**
- **Transparens** – bør det merkes at innholdet er AI-generert?
- **Ansvar** – hvem er ansvarlig når AI produserer feilinformasjon?
- **Kvalitet** – kan AI oppfylle journalistiske standarder for nøyaktighet?
- **Arbeidsplasser** – hvilke konsekvenser har automatisering for journaliststanden?`,
    },
    {
      id: 'mi2-3-4-text-2',
      type: 'text',
      content: `### Algoritmisk kurasjon og filterbobler

De fleste opplever nyheter gjennom algoritmebaserte plattformer som Facebook, Instagram, TikTok og Google. Disse **algoritmene** bestemmer hva du ser basert på din tidligere atferd, dine interesser og hva som genererer mest engasjement.

**Filterbobler** oppstår når algoritmer konsekvent viser deg innhold som bekrefter dine eksisterende synspunkter og skjermer deg for motstridende perspektiver. Konsekvensene kan være:

- **Polarisering** – folk eksponeres bare for meninger de allerede er enige i
- **Manglende virkelighetsforståelse** – viktig informasjon filtreres bort
- **Ekkokamre** – grupper forsterker hverandres oppfatninger uten korrektiver
- **Svekket demokrati** – den offentlige samtalen fragmenteres

### Mikromålretting og manipulasjon

**Mikromålretting** innebærer at annonsører og politiske aktører bruker detaljert brukerdata til å sende skreddersydde budskap til svært spesifikke målgrupper. Cambridge Analytica-skandalen i 2018 viste hvordan personopplysninger fra Facebook ble brukt til politisk påvirkning.

Etiske problemstillinger ved mikromålretting:
- Brukere er ofte ikke klar over at de er målrettet
- Ulike grupper kan motta motstridende budskap fra samme avsender
- Personopplysninger samles inn og brukes uten reelt samtykke
- Grensen mellom informasjon og manipulasjon viskes ut`,
    },
    {
      id: 'mi2-3-4-example-2',
      type: 'example',
      title: 'Eksempel: AI-genererte nyhetsartikler',
      problem: 'En nettavis bruker AI til å generere nyhetsartikler om børsresultater og fotballkamper. Artiklene publiseres uten å opplyse om at de er maskinskrevet. En leser oppdager dette og klager. Hva er de etiske problemstillingene?',
      solution: `Denne saken reiser flere presseetiske spørsmål:

**Transparens:**
- Leserne har rett til å vite hvem (eller hva) som har skrevet artikkelen
- Mangel på merking bryter med tilliten mellom mediet og publikum
- Vær Varsom-plakaten krever at publikum ikke villedes om premissene

**Ansvar:**
- Redaktøransvaret gjelder uavhengig av om innholdet er maskinskrevet
- Sjefredaktøren er ansvarlig for alt som publiseres, også AI-generert innhold
- Mediet må ha kvalitetssikringsrutiner for AI-produsert innhold

**Kvalitet:**
- AI kan produsere faktafeil eller misvisende formuleringer
- Uten menneskelig kontroll kan feilaktig informasjon nå mange lesere raskt
- AI mangler journalistisk dømmekraft og kontekstuell forståelse

**Anbefaling:** Medier bør merke AI-generert innhold tydelig, ha menneskelig kvalitetskontroll, og opprettholde redaktøransvaret for alt publisert innhold.`,
    },
    {
      id: 'mi2-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        task: 'Hva menes med en «filterboble»?',
        options: [
          { id: 'a', text: 'At sosiale medier filtrerer bort ulovlig innhold', isCorrect: false },
          { id: 'b', text: 'At algoritmer begrenser informasjonstilgangen ved å vise innhold som bekrefter eksisterende syn', isCorrect: true },
          { id: 'c', text: 'At nyhetsbrev filtreres til søppelpost-mappen', isCorrect: false },
          { id: 'd', text: 'At medier bevisst sensurerer upopulære meninger', isCorrect: false },
        ],
        solution: 'En filterboble oppstår når algoritmer konsekvent viser brukere innhold som bekrefter deres eksisterende synspunkter og filtrerer bort motstridende perspektiver. Begrepet ble popularisert av Eli Pariser i 2011 og beskriver hvordan personaliserte nyhetsstrømmer kan begrense den enkeltes informasjonstilgang.',
      },
    },
    {
      id: 'mi2-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        task: 'Drøft om medier bør merke innhold som er generert av AI. Hvilke argumenter taler for og mot merking?',
        hints: ['Tenk på transparens, lesernes tillit, praktiske utfordringer og hva slags innhold det dreier seg om'],
        solution: 'For merking: (1) Transparens er grunnleggende for tillit mellom medier og publikum – leserne har rett til å vite hvem eller hva som står bak innholdet. (2) Det setter publikum i stand til å vurdere innholdet kritisk. (3) Det viser at redaksjonen tar ansvar for sine metoder. Mot merking: (1) Dersom AI-innholdet er kvalitetssikret av en journalist, er det i praksis en hybrid som kan være vanskelig å kategorisere. (2) Merking kan skape uberettiget mistillit til innhold som er korrekt og nyttig. (3) I en fremtid der AI er involvert i de fleste arbeidsprosesser, kan merking bli upraktisk. Samlet vurdering: Hensynet til transparens veier tungt, og hovedregelen bør være merking av AI-generert innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        task: 'Forklar hvordan filterbobler kan påvirke demokratiet. Gi minst to konkrete eksempler på situasjoner der algoritmisk kurasjon kan ha negative konsekvenser for den offentlige samtalen.',
        hints: ['Tenk på polarisering, ekkokamre, valgkamp og samfunnsdebatter'],
        solution: 'Filterbobler kan påvirke demokratiet negativt ved å fragmentere den offentlige samtalen og forsterke polarisering. Eksempel 1: Under en valgkamp kan velgere som støtter et bestemt parti kun se positive nyheter om sitt parti og negative om motstanderne. De mister tilgangen til balansert informasjon og tar valg på et skjevt grunnlag. Eksempel 2: I debatter om innvandringspolitikk kan filterbobler føre til at ulike grupper lever i helt forskjellige informasjonsvirkeligheter – noen ser kun positive historier om integrering, andre kun negative. Uten felles faktagrunnlag blir konstruktiv debatt umulig. Algoritmisk kurasjon undergraver dermed medienes arenafunksjon – å være en møteplass for ulike synspunkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-4-ex-5',
        number: '3.4.5',
        type: 'classic',
        task: 'Hvem bør ha ansvar for å bekjempe deepfakes – teknologiselskapene, mediene, myndighetene eller brukerne selv? Drøft ulike perspektiver og ta stilling til hvem som har størst ansvar.',
        hints: ['Tenk på teknisk kapasitet, reguleringsmuligheter, medienes verifiseringsplikt og mediekompetanse'],
        solution: 'Alle aktørene har et delansvar: (1) Teknologiselskapene har størst teknisk kapasitet til å utvikle deteksjonsverktøy og hindre spredning av deepfakes på sine plattformer. De profitterer på engasjement og bør ta ansvar for innholdet. (2) Mediene har verifiseringsplikt etter Vær Varsom-plakaten og må investere i verktøy for å avdekke manipulert innhold. De har ansvar for ikke å videreformidle deepfakes ukritisk. (3) Myndighetene kan regulere gjennom lovgivning, for eksempel ved å kriminalisere visse typer deepfakes og stille krav til plattformene. (4) Brukerne har ansvar for egen mediekompetanse og kritisk tenkning. Størst ansvar: Teknologiselskapene, fordi de kontrollerer plattformene der deepfakes spres og har ressursene til å utvikle motmidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        task: 'Cambridge Analytica-skandalen i 2018 avslørte hvordan persondata fra Facebook ble brukt til politisk mikromålretting. Gjør rede for hva som skjedde, og drøft hvilke etiske prinsipper som ble brutt.',
        hints: ['Tenk på samtykke, personvern, demokratisk manipulasjon og plattformansvar'],
        solution: 'Cambridge Analytica høstet persondata fra millioner av Facebook-brukere gjennom en tilsynelatende ufarlig personlighetstest-app. Dataene ble brukt til å lage detaljerte psykologiske profiler for mikromålrettet politisk reklame, blant annet i forbindelse med det amerikanske presidentvalget i 2016 og Brexit-avstemningen. Etiske prinsipper som ble brutt: (1) Samtykke – brukerne ga ikke informert samtykke til politisk bruk av sine data. (2) Personvern – sensitiv informasjon ble misbrukt. (3) Demokratisk integritet – velgere ble utsatt for skreddersydd manipulasjon uten å vite det. (4) Plattformansvar – Facebook hadde utilstrekkelig kontroll over tredjeparters datatilgang. Skandalen førte til strengere personvernregulering (GDPR) og økt bevissthet om datamisbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Deepfakes** er AI-generert syntetisk media som kan brukes til desinformasjon og manipulasjon
- **AI-generert innhold** i journalistikk reiser spørsmål om transparens, ansvar og kvalitet
- **Filterbobler** oppstår når algoritmer begrenser informasjonstilgangen basert på brukerdata
- **Mikromålretting** gjør det mulig å sende skreddersydde budskap til spesifikke grupper
- Teknologisk utvikling krever at presseetikken oppdateres og at redaksjoner investerer i verifisering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Deepfake | AI-manipulert video eller lyd som forfalsker en persons uttalelser |
| AI-generert innhold | Tekst, bilde eller lyd skapt av kunstig intelligens |
| Algoritmisk kurasjon | At algoritmer bestemmer hvilket innhold brukerne ser |
| Filterboble | At algoritmer begrenser informasjonstilgangen |
| Mikromålretting | Skreddersydde budskap basert på detaljert brukerdata |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Kildevern og kildekritikk
// ============================================================================

export const CHAPTER_MEDIEINFO_2_3_5: TextbookChapter = {
  id: 'medieinfo-2-3-5',
  courseId: 'medieinfo-2',
  chapterNumber: '3.5',
  title: 'Kildevern og kildekritikk',
  description: 'Journalistisk kildevern, lovfesting av kildevernet, kildekritiske metoder, faktasjekk og verifisering i en digital tidsalder.',
  estimatedMinutes: 20,
  competenceGoals: ['anvende kildekritiske metoder og vurdere kildevern i journalistikken'],
  keyTerms: [
    { term: 'Kildevern', definition: 'Journalistens rett og plikt til å holde identiteten til anonyme kilder hemmelig, lovfestet i medieansvarsloven og straffeprosessloven' },
    { term: 'Kildekritikk', definition: 'Systematisk vurdering av en kildes pålitelighet, troverdighet, nærhet til hendelsen og eventuelle motiver' },
    { term: 'Faktasjekk', definition: 'Systematisk verifisering av påstander og opplysninger gjennom uavhengige kilder og dokumentasjon' },
    { term: 'IMVFAK-metoden', definition: 'Kildekritisk sjekkliste: Identifiser avsenderen, Motiv, Verifisering, Førstehåndskilde, Aktualitet, Konsistens' },
    { term: 'Varsler', definition: 'Person som avslører kritikkverdige forhold i en organisasjon, ofte avhengig av kildevern for å unngå represalier' },
  ],
  content: [
    {
      id: 'mi2-3-5-intro',
      type: 'text',
      content: `## Kildevern – journalistikkens grunnpilar

Kildevernet er en av journalistikkens mest fundamentale rettigheter. Uten muligheten til å beskytte anonyme kilder ville mange av de viktigste avsløringene i norsk pressehistorie aldri sett dagens lys. Samtidig er kildekritikk avgjørende for å sikre at informasjonen som publiseres er pålitelig og korrekt.

I dette kapittelet skal du:
- Forstå hva kildevernet innebærer og hvorfor det er så viktig
- Lære om det rettslige grunnlaget for kildevernet
- Beherske kildekritiske metoder og IMVFAK-modellen
- Anvende faktasjekk-teknikker for digital informasjon`,
    },
    {
      id: 'mi2-3-5-def-1',
      type: 'definition',
      title: 'Kildevernet',
      content: `**Kildevernet** er journalistens rett til å holde identiteten til anonyme kilder hemmelig, selv overfor politi og domstoler. Det er forankret i:

1. **Medieansvarsloven** – lovfester kildevernet som et grunnleggende prinsipp
2. **Straffeprosessloven § 125** – gir journalister rett til å nekte å oppgi kilde i rettssaker
3. **EMK artikkel 10** – Den europeiske menneskerettsdomstolen har gjentatte ganger fastslått kildevernets betydning for pressefriheten
4. **Vær Varsom-plakaten punkt 3.4–3.6** – presseetiske regler om kildevern

Kildevernet er ikke absolutt – i helt ekstraordinære tilfeller kan domstolene pålegge journalister å oppgi kilde, men terskelen er svært høy. Det krever at opplysningen er av vesentlig betydning for oppklaring av en alvorlig forbrytelse, og at det ikke finnes alternative måter å fremskaffe informasjonen på.`,
    },
    {
      id: 'mi2-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Varsler i helsevesenet',
      problem: 'En sykepleier kontakter en journalist anonymt og forteller om alvorlige brudd på pasientsikkerheten ved et sykehus. Sykepleieren frykter represalier og vil bare snakke dersom identiteten holdes hemmelig. Hvordan bør journalisten håndtere dette?',
      solution: `Journalisten bør håndtere dette med stor aktsomhet:

**Steg 1: Avklare premissene**
- Gi kilden en klar garanti om anonymitet (kildevernet)
- Forklare at kildevernet er lovfestet og gjelder selv overfor domstolene
- Avklare hva kilden er villig til å bidra med av dokumentasjon

**Steg 2: Verifisere informasjonen**
- Ikke publisere utelukkende basert på én anonym kilde
- Søke bekreftelse fra andre kilder: dokumenter, andre ansatte, tilsynsrapporter
- Sende innsynskrav til Helsetilsynet og sykehuset om avviksmeldinger

**Steg 3: Beskytte kilden**
- Kommunisere via krypterte kanaler (Signal, SecureDrop)
- Ikke lagre kildens kontaktinformasjon på redaksjonens systemer
- Være bevisst på at selv indirekte opplysninger kan avsløre kilden

**Steg 4: Publisere ansvarlig**
- Gi sykehuset mulighet til samtidig imøtegåelse (Vær Varsom-plakaten punkt 4.14)
- Anonymisere kilden grundig – inkludert detaljer som kan identifisere indirekte
- Fokusere på de faktiske forholdene, ikke kildens identitet`,
    },
    {
      id: 'mi2-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        task: 'Hvilken lov gir journalister rett til å nekte å oppgi kilde i rettssaker?',
        options: [
          { id: 'a', text: 'Personopplysningsloven § 8', isCorrect: false },
          { id: 'b', text: 'Straffeprosessloven § 125', isCorrect: true },
          { id: 'c', text: 'Offentleglova § 3', isCorrect: false },
          { id: 'd', text: 'Grunnloven § 100', isCorrect: false },
        ],
        solution: 'Straffeprosessloven § 125 gir journalister rett til å nekte å svare på spørsmål om hvem som er kilde til opplysninger som er betrodd dem i deres arbeid. Denne bestemmelsen er en viktig lovfesting av kildevernet og suppleres av medieansvarsloven og EMK artikkel 10.',
      },
    },
    {
      id: 'mi2-3-5-def-2',
      type: 'definition',
      title: 'IMVFAK-metoden for kildekritikk',
      content: `**IMVFAK** er en kildekritisk metode som gir en systematisk tilnærming til vurdering av kilders pålitelighet:

- **I – Identifiser avsenderen:** Hvem står bak informasjonen? Er det en troverdig avsender?
- **M – Motiv:** Hvilken interesse har kilden av å formidle denne informasjonen? Kan kilden ha skjulte motiver?
- **V – Verifisering:** Kan opplysningene bekreftes av uavhengige kilder?
- **F – Førstehåndskilde:** Er dette en primærkilde som har direkte kjennskap, eller en sekundærkilde som videreformidler?
- **A – Aktualitet:** Hvor fersk er informasjonen? Kan forholdene ha endret seg?
- **K – Konsistens:** Er opplysningene i samsvar med det som ellers er kjent om saken?

Metoden er særlig nyttig i en digital tid der informasjonsmengden er enorm og det kan være vanskelig å skille pålitelig informasjon fra feilinformasjon.`,
    },
    {
      id: 'mi2-3-5-text-2',
      type: 'text',
      content: `### Faktasjekk i den digitale tidsalderen

Behovet for faktasjekk har økt dramatisk med fremveksten av sosiale medier og det digitale informasjonslandskapet. I Norge er **Faktisk.no** et uavhengig faktasjekkinitiativ eid av flere norske medier. Internasjonalt finnes organisasjoner som Snopes, PolitiFact og Full Fact.

**Faktasjekk-prosessen:**
1. **Identifisere påstanden** – hva hevdes, og av hvem?
2. **Konsultere primærkilder** – statistikk, forskningsrapporter, offentlige dokumenter
3. **Kontakte relevante eksperter** – for faglige vurderinger
4. **Kryssjekke mot uavhengige kilder** – minst to uavhengige kilder for sentrale opplysninger
5. **Vurdere kontekst** – er påstanden tatt ut av sammenheng?
6. **Konkludere og forklare** – kommunisere resultatet tydelig til publikum

### Verifisering av digitalt innhold

I en tid med bildemanipulasjon, deepfakes og falske nettsider trenger journalister spesialiserte verktøy:

- **Omvendt bildesøk** (Google Images, TinEye) – for å spore bildets opprinnelse
- **Metadata-analyse** – for å sjekke når og hvor et bilde ble tatt
- **Geolokalisering** – for å verifisere at video eller bilder er tatt på oppgitt sted
- **Nettstedsanalyse** (WHOIS, Archive.org) – for å sjekke et nettsteds historikk og eier
- **Deepfake-deteksjon** – AI-baserte verktøy for å avdekke manipulert video`,
    },
    {
      id: 'mi2-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Kildekritikk av en viral påstand',
      problem: 'En artikkel fra et ukjent nettsted hevder at «norske kommuner har brukt 50 milliarder kroner på konsulentfirmaer i 2025». Påstanden deles tusenvis av ganger på sosiale medier. Hvordan bør en journalist verifisere denne påstanden?',
      solution: `Journalisten bør systematisk anvende IMVFAK-metoden:

**I – Identifiser avsenderen:** Hvem står bak nettstedet? Sjekk WHOIS-data og «om oss»-siden. Er det en etablert medieinstitusjon eller et ukjent nettsted?

**M – Motiv:** Har nettstedet en politisk agenda? Kan påstanden være utformet for å generere klikk eller fremme et bestemt syn på offentlig pengebruk?

**V – Verifisering:** Sjekk påstanden mot offisielle kilder:
- SSB (Statistisk sentralbyrå) – har de tall på kommunale konsulentutgifter?
- KOSTRA (Kommune-Stat-Rapportering) – rapporteringssystem for kommunale utgifter
- KS (Kommunesektorens organisasjon) – har de kommentert påstanden?

**F – Førstehåndskilde:** Oppgir artikkelen noen primærkilde for tallet? Er det en fotnote til et offentlig dokument?

**A – Aktualitet:** Gjelder tallet faktisk 2025, eller er det eldre tall som presenteres som nye?

**K – Konsistens:** Er 50 milliarder et realistisk tall? Sammenlign med kommunenes totale budsjetter og tidligere kjente konsulentutgifter.

**Konklusjon:** Dersom nettstedet ikke oppgir primærkilde, avsenderen er ukjent, og tallet ikke kan verifiseres mot offisielle kilder, bør påstanden behandles med stor skepsis.`,
    },
    {
      id: 'mi2-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        task: 'Hva står bokstaven «M» for i IMVFAK-metoden?',
        options: [
          { id: 'a', text: 'Mengde – hvor mye informasjon kilden gir', isCorrect: false },
          { id: 'b', text: 'Medium – gjennom hvilket medium informasjonen er formidlet', isCorrect: false },
          { id: 'c', text: 'Motiv – hvilken interesse kilden har av å formidle informasjonen', isCorrect: true },
          { id: 'd', text: 'Metode – hvordan informasjonen er innhentet', isCorrect: false },
        ],
        solution: 'I IMVFAK-metoden står «M» for Motiv. Det innebærer å vurdere hvilken interesse kilden har av å formidle akkurat denne informasjonen. En kilde kan ha økonomiske, politiske eller personlige motiver som påvirker troverdigheten.',
      },
    },
    {
      id: 'mi2-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-5-ex-3',
        number: '3.5.3',
        type: 'classic',
        task: 'Forklar hvorfor kildevernet er viktig for journalistikken og for demokratiet. Gi eksempler på situasjoner der kildevernet er avgjørende.',
        hints: ['Tenk på varslere, gravejournalistikk og konsekvensene dersom kilder ikke tør å snakke'],
        solution: 'Kildevernet er viktig for journalistikken fordi det gjør det mulig for kilder å dele informasjon om kritikkverdige forhold uten å frykte represalier. Uten kildevern ville mange viktige avsløringer aldri kommet frem. For demokratiet er det avgjørende fordi det styrker medienes vaktbikkjefunksjon – evnen til å avdekke maktmisbruk. Eksempler: (1) En statsansatt som avslører korrupsjon i et departement er avhengig av anonymitet for å unngå oppsigelse. (2) En politibetjent som varsler om rasistisk praksis internt trenger kildevern for å beskytte karrieren. (3) En helsearbeider som melder fra om alvorlige avvik ved et sykehus risikerer represalier uten kildevern. I alle disse tilfellene er kildevernet en forutsetning for at informasjonen kommer offentligheten til gode.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        task: 'Anvend IMVFAK-metoden på følgende situasjon: En lobbyorganisasjon for olje- og gassindustrien publiserer en rapport som hevder at Norges klimamål er urealistiske og vil koste 200 milliarder kroner. Gå gjennom alle seks punkter.',
        hints: ['Vurder hvem avsenderen er, hva motivet kan være, og hvordan du kan verifisere påstandene'],
        solution: 'I – Identifiser: Avsenderen er en lobbyorganisasjon for olje- og gassindustrien, altså en interesseorganisasjon med tydelig ståsted. M – Motiv: Organisasjonen har åpenbare økonomiske motiver for å argumentere mot strenge klimamål, da dette kan begrense virksomheten til medlemsbedriftene. V – Verifisering: Sjekk kostnadsestimatet mot uavhengige kilder som SSB, Miljødirektoratet eller forskningsinstitusjoner (CICERO, FNI). F – Førstehåndskilde: Er rapporten basert på egne beregninger eller uavhengig forskning? Hvem har utført analysen? A – Aktualitet: Er tallene basert på oppdaterte forutsetninger, eller brukes utdaterte modeller? K – Konsistens: Stemmer tallet med andre anslag? Avviker det vesentlig fra regjeringens egne beregninger? Konklusjon: Rapporten bør behandles med varsomhet gitt avsenderens interessekonflikt, og påstandene bør verifiseres mot uavhengige kilder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        task: 'Beskriv minst tre digitale verktøy eller metoder som journalister kan bruke for å verifisere innhold fra internett. Forklar hvordan hvert verktøy fungerer og i hvilke situasjoner det er nyttig.',
        hints: ['Tenk på omvendt bildesøk, metadata-analyse, geolokalisering, WHOIS og arkivtjenester'],
        solution: 'Tre verktøy: (1) Omvendt bildesøk (Google Images, TinEye): Man laster opp et bilde og søkemotoren finner alle steder bildet er brukt på nettet. Nyttig for å avdekke om et bilde er gammelt, tatt i en annen kontekst, eller er manipulert. Eksempel: Et bilde som påstås å vise en aktuell demonstrasjon kan vise seg å stamme fra en helt annen hendelse. (2) Metadata-analyse (ExifTool, Jeffreys Exif Viewer): Digitale bilder inneholder metadata med informasjon om tidspunkt, sted, kamera og innstillinger. Journalisten kan sjekke om bildet faktisk er tatt på angitt tid og sted. (3) WHOIS og Wayback Machine: WHOIS viser hvem som eier et domene. Wayback Machine (Archive.org) viser hvordan et nettsted har sett ut over tid. Nyttig for å avsløre om et nettsted er nyopprettet, har endret innhold, eller har ukjente eiere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-3-5-ex-6',
        number: '3.5.6',
        type: 'classic',
        task: 'Drøft utfordringene med kildevernet i en digital tidsalder. Hvordan kan journalister beskytte anonyme kilder når digital kommunikasjon etterlater spor?',
        hints: ['Tenk på krypterte meldingstjenester, metadata, overvåkning og digitale fotavtrykk'],
        solution: 'Digital kommunikasjon skaper nye utfordringer for kildevernet fordi den etterlater spor. Utfordringer: (1) Metadata fra telefonsamtaler og e-post kan avsløre kontakt mellom journalist og kilde, selv om innholdet er ukjent. (2) Overvåkningsteknologi gjør det mulig for myndigheter og arbeidsgivere å spore kommunikasjon. (3) Datainnsamling fra teleselskaper og nettleverandører kan brukes til å identifisere kilder. Tiltak: (1) Krypterte meldingstjenester som Signal og SecureDrop bør brukes til sensitiv kommunikasjon. (2) Fysiske møter på nøytrale steder gir mindre digitale spor. (3) Journalister bør unngå å lagre kildens identitet digitalt. (4) Redaksjoner bør ha klare protokoller for kildesikkerhet og regelmessig opplæring. (5) VPN og Tor-nettverket kan brukes for å skjule internettaktivitet. Kildevernet er bare så sterkt som de svakeste leddene i den digitale kommunikasjonskjeden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-3-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kildevernet** er lovfestet i medieansvarsloven og straffeprosessloven og gir journalister rett til å beskytte anonyme kilder
- **IMVFAK-metoden** er en systematisk tilnærming til kildekritikk: Identifiser, Motiv, Verifisering, Førstehåndskilde, Aktualitet, Konsistens
- **Faktasjekk** er avgjørende for å bekjempe feilinformasjon i en digital tidsalder
- Digitale verktøy som omvendt bildesøk, metadata-analyse og geolokalisering er nødvendige i moderne journalistikk
- Kildevernet utfordres av digital kommunikasjon som etterlater spor

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kildevern | Journalistens rett til å beskytte anonyme kilders identitet |
| IMVFAK | Kildekritisk sjekkliste: Identifiser, Motiv, Verifisering, Førstehåndskilde, Aktualitet, Konsistens |
| Faktasjekk | Systematisk verifisering av påstander mot uavhengige kilder |
| Varsler | Person som avslører kritikkverdige forhold i en organisasjon |
| Primærkilde | Den opprinnelige kilden med direkte kjennskap til en hendelse |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const MEDIEINFO_2_DEL3_CHAPTERS = [
  CHAPTER_MEDIEINFO_2_3_1,
  CHAPTER_MEDIEINFO_2_3_2,
  CHAPTER_MEDIEINFO_2_3_3,
  CHAPTER_MEDIEINFO_2_3_4,
  CHAPTER_MEDIEINFO_2_3_5,
];
