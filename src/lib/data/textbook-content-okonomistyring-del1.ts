/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomistyring (VG2) - Del 1
 * Seksjon 1: Grunnleggende økonomi og regnskap
 * Følger LK20 læreplan (NOK02-03)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_OKONOMISTYRING_1_1: TextbookChapter = {
  id: 'okonomistyring-1-1',
  courseId: 'okonomistyring',
  chapterNumber: '1.1',
  title: 'Hva er økonomi?',
  description: 'Introduksjon til økonomi som fag, knapphet og alternativkostnad, samt forskjellen mellom mikroøkonomi og makroøkonomi.',
  estimatedMinutes: 20,
  competenceGoals: [
    'Forstå grunnleggende økonomiske begreper som knapphet og alternativkostnad',
    'Kunne skille mellom mikroøkonomi og makroøkonomi',
    'Kjenne til sentrale områder innen næringslivsøkonomi',
  ],
  content: [
    {
      id: 'oks-1-1-intro',
      type: 'text',
      content: `## Hva er økonomi?

Økonomi handler om hvordan vi forvalter begrensede ressurser for å dekke ubegrensede behov og ønsker. Som elev på Økonomistyring vil du lære hvordan bedrifter og enkeltpersoner tar økonomiske beslutninger.

Det norske ordet "økonomi" kommer fra det greske ordet *oikonomia*, som betyr "husholdningsstyring". I dag brukes begrepet om alt fra privatøkonomi til verdensøkonomi.`,
    },
    {
      id: 'oks-1-1-def-1',
      type: 'definition',
      title: 'Økonomi',
      content: `Økonomi er læren om hvordan mennesker og samfunn velger å bruke knappe ressurser som kan ha alternative anvendelser.`,
    },
    {
      id: 'oks-1-1-text-2',
      type: 'text',
      content: `### Knapphet og alternativkostnad

Det grunnleggende problemet i økonomien er **knapphet** (*scarcity*). Vi har begrensede ressurser (tid, penger, råvarer, arbeidskraft), men ubegrensede ønsker. Dette tvinger oss til å gjøre valg.

Når du velger å bruke ressurser på én ting, må du gi opp muligheten til å bruke dem på noe annet. Dette kalles **alternativkostnad**.`,
    },
    {
      id: 'oks-1-1-def-2',
      type: 'definition',
      title: 'Alternativkostnad',
      content: `Alternativkostnad er verdien av det beste alternativet du må gi opp når du gjør et valg.`,
    },
    {
      id: 'oks-1-1-example-1',
      type: 'example',
      title: 'Alternativkostnad i praksis',
      problem: `Marte har 500 kroner og må velge mellom å kjøpe en ny bok til 500 kr eller gå på kino med venner for 150 kr. Hvis hun velger boken, hva er alternativkostnaden?`,
      solution: `Alternativkostnaden er ikke bare kinobiletten på 150 kr, men også opplevelsen av å gå på kino med venner. I tillegg får hun 350 kr (500-150) til overs som hun kunne brukt på andre ting.

Alternativkostnaden inkluderer derfor:
- Kinoopplevelsen med venner
- 350 kr hun kunne brukt på andre goder

Merk at alternativkostnad ikke alltid er et pengebeløp - det er verdien av det beste alternativet du gir opp.`,
    },
    {
      id: 'oks-1-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'oks-1-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Jonas bruker fredagskvelden på å jobbe ekstravakt og tjener 800 kr. Han kunne i stedet ha gått på konsert (billett 400 kr). Hva er alternativkostnaden ved å jobbe?',
        options: [
          '800 kr',
          '400 kr',
          'Konsertopplevelsen',
          'Konsertopplevelsen pluss 800 kr han kunne tjent',
        ],
        solution: 'Konsertopplevelsen',
        explanation: 'Alternativkostnaden er verdien av det beste alternativet han gir opp - altså konsertopplevelsen. De 800 kr er inntekt, ikke kostnad. Merk at vi ikke legger til pengene han tjener, siden det er det han faktisk får.',
      },
    },
    {
      id: 'oks-1-1-text-3',
      type: 'text',
      content: `### Mikroøkonomi og makroøkonomi

Økonomi som fag deles tradisjonelt inn i to hovedområder:

**Mikroøkonomi** ser på enkeltaktører i økonomien:
- Hvordan husholdninger og enkeltpersoner bruker inntekten sin
- Hvordan bedrifter tar produksjonsbeslutninger
- Hvordan priser dannes i markeder
- Tilbud og etterspørsel

**Makroøkonomi** ser på økonomien som helhet:
- Nasjonal økonomisk vekst (BNP)
- Arbeidsledighet
- Inflasjon (prisvekst)
- Renter og valutakurser
- Regjeringens økonomiske politikk`,
    },
    {
      id: 'oks-1-1-example-2',
      type: 'example',
      title: 'Mikro vs makro i praksis',
      problem: `Er følgende problemstillinger mikroøkonomiske eller makroøkonomiske?

a) Norges Bank setter renten
b) En bedrift vurderer om den skal ansette flere medarbeidere
c) Arbeidsledigheten i Norge er 3,5%
d) Prisen på strøm øker på grunn av tørke`,
      solution: `a) **Makroøkonomi** - Norges Banks rentebeslutninger påvirker hele økonomien

b) **Mikroøkonomi** - Dette er en enkeltstående bedrifts beslutning

c) **Makroøkonomi** - Arbeidsledighet for hele landet er et makroøkonomisk tall

d) **Mikroøkonomi** - Dette handler om prisdannelse i ett spesifikt marked (strømmarkedet)`,
    },
    {
      id: 'oks-1-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'oks-1-1-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilket av disse temaene tilhører mikroøkonomi?',
        options: [
          'Norges økonomiske vekst',
          'Hvordan bedrifter bestemmer sine priser',
          'Inflasjonen i Norge',
          'Sysselsettingsgrad i befolkningen',
        ],
        solution: 'Hvordan bedrifter bestemmer sine priser',
        explanation: 'Mikroøkonomi handler om enkeltaktører som husholdninger og bedrifter. Hvordan bedrifter setter priser er et klassisk mikroøkonomisk tema. De andre alternativene er makroøkonomiske størrelser.',
      },
    },
    {
      id: 'oks-1-1-text-4',
      type: 'text',
      content: `### Næringslivsøkonomi

**Næringslivsøkonomi** (også kalt bedriftsøkonomi) er en anvendelse av økonomiske prinsipper på bedrifter og organisasjoner. Dette er kjernen i faget Økonomistyring.

Sentrale områder i næringslivsøkonomi:

**Regnskap**
- Registrere og dokumentere økonomiske hendelser
- Lage resultatregnskap og balanse
- Grunnlag for beslutninger og kontroll

**Økonomianalyse**
- Analysere lønnsomhet og likviditet
- Sammenligne tall over tid
- Benchmarking mot andre bedrifter

**Budsjettering**
- Planlegge fremtidig økonomi
- Sette mål og følge opp avvik
- Ressursallokering

**Kalkyle**
- Beregne kostnader for produkter eller tjenester
- Prissetting
- Lønnsomhetsvurderinger`,
    },
    {
      id: 'oks-1-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'oks-1-1-oppg-3',
        number: '3',
        type: 'classic',
        task: 'En bedrift vurderer å investere 500 000 kr i ny produksjonsteknologi som vil øke produksjonskapasiteten. Alternativt kan de investere samme beløp i aksjer med forventet avkastning på 8% per år. Forklar hva som er alternativkostnaden ved å kjøpe produksjonsteknologien.',
        solution: `Alternativkostnaden ved å kjøpe produksjonsteknologien er:

1. **Aksjegevinsten de går glipp av:** 500 000 kr × 8% = 40 000 kr per år

2. **Andre muligheter pengene kunne gitt:** For eksempel nedbetaling av lån, oppussing av lokaler, markedsføring, osv.

3. **Den beste alternative bruken:** Det er vanskelig å si nøyaktig uten mer informasjon, men hvis aksjeinvesteringen er det nest beste alternativet, er alternativkostnaden minimum 40 000 kr årlig avkastning.

**Konklusjon:** Bedriften bør bare investere i produksjonsteknologien hvis den forventer å få mer enn 40 000 kr i ekstra inntjening per år (8% avkastning). Ellers er aksjeinvesteringen bedre.`,
      },
    },
    {
      id: 'oks-1-1-text-5',
      type: 'text',
      content: `### Økonomiske beslutninger i bedrifter

Bedrifter tar kontinuerlig økonomiske beslutninger:

- **Produksjonsbeslutninger:** Hva skal vi produsere? Hvor mye?
- **Prisbeslutninger:** Hvilken pris gir best lønnsomhet?
- **Investeringsbeslutninger:** Skal vi kjøpe ny maskin, utvide, eller investere pengene andre steder?
- **Finansieringsbeslutninger:** Skal vi finansiere med egenkapital eller lån?

Alle disse beslutningene innebærer avveininger mellom alternativer - og derfor alternativkostnader.`,
    },
    {
      id: 'oks-1-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'oks-1-1-oppg-4',
        number: '4',
        type: 'multiple-choice',
        task: 'En bedrift har 100 000 kr stående på en bankkonto med 2% rente. De vurderer å bruke pengene på markedsføring. Hva er alternativkostnaden (per år) ved å bruke pengene på markedsføring?',
        options: [
          '100 000 kr',
          '2 000 kr',
          '98 000 kr',
          '102 000 kr',
        ],
        solution: '2 000 kr',
        explanation: 'Alternativkostnaden er renteinntekten de går glipp av ved å ta pengene ut av banken: 100 000 kr × 2% = 2 000 kr per år.',
      },
    },
    {
      id: 'oks-1-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'oks-1-1-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar med egne ord hva økonomi handler om, og hvorfor knapphet er et sentralt begrep.',
        solution: `Økonomi handler om hvordan vi bruker begrensede ressurser til å dekke ubegrensede behov og ønsker.

**Hvorfor er knapphet sentralt?**

Knapphet er grunnproblemet i all økonomi fordi:
- Ressursene (tid, penger, råvarer, arbeidskraft) er alltid begrensede
- Våre ønsker og behov er praktisk talt ubegrensede
- Dette tvinger oss til å gjøre valg og prioritere

**Konsekvenser av knapphet:**
- Vi må velge mellom alternativer
- Hvert valg har en alternativkostnad
- Vi må finne effektive måter å bruke ressursene på
- Bedrifter må planlegge og budsjettere

Hvis det ikke var knapphet - hvis vi hadde ubegrensede ressurser - ville vi ikke hatt noe behov for økonomi som fag. Vi kunne bare tatt alt vi ville ha.`,
      },
    },
    {
      id: 'oks-1-1-text-6',
      type: 'text',
      content: `## --- Samleoppgaver ---

Nå skal du anvende kunnskapen din om grunnleggende økonomi på litt mer sammensatte problemstillinger.`,
    },
    {
      id: 'oks-1-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'oks-1-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'Kari driver en liten bakerivirksomhet fra hjemmet. Hun vurderer å leie et lokale i sentrum for 15 000 kr per måned. Hun tror hun kan selge 30% mer dersom hun har et lokale i sentrum. I dag selger hun for 80 000 kr per måned.\n\na) Hvor mye økt omsetning vil hun få per måned med sentrumslokaet?\nb) Hva er alternativkostnaden ved å leie lokalet?\nc) Hva må hun vurdere før hun tar beslutningen?',
        solution: `**a) Økt omsetning:**
Dagens omsetning: 80 000 kr
Økning: 80 000 kr × 30% = 24 000 kr per måned
Ny omsetning: 80 000 kr + 24 000 kr = 104 000 kr per måned

**b) Alternativkostnad:**
Alternativkostnaden ved å leie lokalet er:
- Husleien på 15 000 kr per måned
- Andre ting hun kunne brukt pengene på (f.eks. sparing, utstyrsinvesteringer, markedsføring)
- Eventuelt økt tidsbruk på transport til sentrum

**c) Vurderinger før beslutning:**
1. **Lønnsomhet:** Økt omsetning på 24 000 kr minus husleie på 15 000 kr gir 9 000 kr ekstra per måned - men hun må også vurdere om det kommer andre kostnader (strøm, vann, drift av lokale)

2. **Kostnader for økt produksjon:** 30% mer salg betyr 30% mer innkjøp av råvarer og kanskje mer arbeidstid

3. **Risiko:** Er hun sikker på at omsetningen virkelig vil øke med 30%?

4. **Langsiktig binding:** Hvor lang leiekontrakt må hun inngå? Hva skjer hvis det ikke går som planlagt?

5. **Alternativ bruk av penger:** Kunne 15 000 kr/måned gitt bedre avkastning på andre måter?`,
      },
    },
    {
      id: 'oks-1-1-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'oks-1-1-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bedriftseier må velge mellom tre investeringsalternativer:\n\nA) Kjøpe ny maskin for 200 000 kr som gir 30 000 kr ekstra inntekt per år\nB) Ansette en ekstra medarbeider som koster 400 000 kr per år, men gir 500 000 kr ekstra omsetning per år\nC) Investere 200 000 kr i aksjer med forventet 10% årlig avkastning\n\nAnalyser alternativene og gi en anbefaling. Forklar hva som er alternativkostnaden ved ditt valg.',
        solution: `**Analyse av alternativene:**

**Alternativ A - Maskin:**
- Investering: 200 000 kr (engangskostnad)
- Årlig avkastning: 30 000 kr
- Avkastning i prosent: 30 000 / 200 000 = 15% per år
- Netto kontantstrøm år 1: -200 000 + 30 000 = -170 000 kr

**Alternativ B - Ansatt:**
- Årlig kostnad: 400 000 kr
- Årlig ekstra omsetning: 500 000 kr
- Netto årlig gevinst: 500 000 - 400 000 = 100 000 kr
- Ingen investeringskostnad
- Netto kontantstrøm år 1: +100 000 kr

**Alternativ C - Aksjer:**
- Investering: 200 000 kr
- Forventet årlig avkastning: 200 000 × 10% = 20 000 kr
- Avkastning: 10% per år
- Netto kontantstrøm år 1: -200 000 + 20 000 = -180 000 kr

**Anbefaling: Alternativ B (ansette medarbeider)**

**Begrunnelse:**
1. Gir best kontantstrøm første år (+100 000 kr)
2. Krever ingen stor forhåndsinvestering
3. Lavere risiko siden det ikke binder kapital
4. Fleksibilitet - kan avslutte ansettelsen hvis det ikke fungerer

**Alternativkostnad ved å velge B:**
Ved å velge å ansette medarbeider gir vi opp:
- Maskininvesteringen som ville gitt 30 000 kr per år (15% avkastning)
- Aksjeinvesteringen som ville gitt 20 000 kr per år (10% avkastning)

Det beste alternativet vi gir opp er maskininvesteringen, så alternativkostnaden er 30 000 kr årlig avkastning. Men siden vi tjener 100 000 kr på medarbeideren, er nettogevinsten sammenlignet med beste alternativ: 100 000 - 30 000 = 70 000 kr.

**Viktige forbehold:**
- Tallene forutsetter at omsetningsøkningen virkelig skjer
- Maskinen kan gi avkastning i mange år fremover
- Aksjer har usikker avkastning (kan både øke og synke)`,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

export const CHAPTER_OKONOMISTYRING_1_2: TextbookChapter = {
  id: 'okonomistyring-1-2',
  courseId: 'okonomistyring',
  chapterNumber: '1.2',
  title: 'Regnskapets formål og lovkrav',
  description: 'Hvorfor bedrifter fører regnskap, lovkrav og regelverk, forskjellen mellom finansregnskap og driftsregnskap.',
  estimatedMinutes: 20,
  competenceGoals: [
    'Forstå hvorfor bedrifter må føre regnskap',
    'Kjenne til bokføringsloven og regnskapslovens krav',
    'Kunne skille mellom finansregnskap og driftsregnskap',
    'Vite hvem som er interessenter i regnskapet',
  ],
  content: [
    {
      id: 'oks-1-2-intro',
      type: 'text',
      content: `## Hvorfor føre regnskap?

Alle bedrifter i Norge er lovpålagt å føre regnskap. Men hvorfor? Regnskap fyller flere viktige funksjoner både for bedriften selv og for samfunnet.`,
    },
    {
      id: 'oks-1-2-def-1',
      type: 'definition',
      title: 'Regnskap',
      content: `Regnskap er en systematisk registrering, bearbeiding og formidling av økonomisk informasjon om en virksomhet.`,
    },
    {
      id: 'oks-1-2-text-2',
      type: 'text',
      content: `### Formål med regnskap

**1. Kontroll og styring (intern bruk)**
- Eieren/ledelsen kan følge med på økonomien
- Grunnlag for beslutninger (skal vi investere, ansette, utvide?)
- Avdekke problemer før det er for sent
- Måle lønnsomhet og effektivitet

**2. Dokumentasjon (ekstern bruk)**
- Skattemyndighetene skal kontrollere at riktig skatt blir betalt
- Banker trenger regnskapstall når de vurderer lån
- Leverandører vil vite om bedriften kan betale
- Potensielle investorer vil vurdere lønnsomhet

**3. Lovkrav**
- Bokføringsloven krever at alle skal føre regnskap
- Regnskapsloven regulerer hvordan regnskapet skal se ut
- Skatteloven krever at inntekt dokumenteres`,
    },
    {
      id: 'oks-1-2-example-1',
      type: 'example',
      title: 'Regnskap i praksis',
      problem: `Lisa startet en liten nettbutikk for hjemmelagde smykker. Første måned tjente hun 15 000 kr, men hun er usikker på om forretningen går med overskudd. Hvorfor trenger hun regnskap?`,
      solution: `Lisa trenger regnskap for å:

**1. Vite om hun går med overskudd:**
- Omsetning: 15 000 kr
- Men hun må trekke fra: materialer, emballasje, porto, hjemmesideabonnement, markedsføring, osv.
- Uten regnskap vet hun ikke hva som er igjen til seg selv

**2. Betale riktig skatt:**
- Skattemyndighetene krever dokumentasjon på inntekt og kostnader
- Uten regnskap kan hun ikke levere selvangivelse

**3. Planlegge fremover:**
- Er det verdt å bruke mer på markedsføring?
- Skal hun kjøpe større parti med materialer for å få rabatt?
- Har hun råd til å ansette hjelp?

**4. Søke om lån:**
- Hvis hun vil vokse, kan hun trenge lån til lager
- Banken vil se regnskapstall før de låner ut

**Konklusjon:** Selv en liten nettbutikk trenger systematisk regnskap for å overleve og vokse.`,
    },
    {
      id: 'oks-1-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'oks-1-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilket av disse er IKKE et hovedformål med regnskap?',
        options: [
          'Gi grunnlag for skatteberegning',
          'Gi informasjon til ledelsens beslutninger',
          'Fastsette salgspriser for produkter',
          'Dokumentere økonomien overfor banker',
        ],
        solution: 'Fastsette salgspriser for produkter',
        explanation: 'Fastsettelse av salgspriser er en forretningsbeslutning som bygger på kalkyler og markedsanalyser, men er ikke et direkte formål med regnskapet. De andre alternativene er alle sentrale formål med regnskap.',
      },
    },
    {
      id: 'oks-1-2-text-3',
      type: 'text',
      content: `### Bokføringsloven og regnskapsloven

Norge har to sentrale lover som regulerer regnskap:

**Bokføringsloven (2004)**
- Gjelder ALLE som driver økonomisk virksomhet (også små enkeltpersonsforetak)
- Regulerer den løpende bokføringen
- Krav om bilag, dokumentasjon og systematisk registrering
- Oppbevaringsplikter (5 år for bilag, 10 år for bilagsserier)

**Regnskapsloven (1998)**
- Gjelder regnskapspliktige (AS, ASA, NUF, ANS, store enkeltpersonsforetak)
- Regulerer årsregnskapet (resultatregnskap og balanse)
- Krav til hva som skal med i årsregnskapet
- Frister for levering (6 måneder etter regnskapsårets slutt)

Mange små enkeltpersonsforetak er unntatt fra regnskapsloven, men de må fortsatt følge bokføringsloven.`,
    },
    {
      id: 'oks-1-2-def-2',
      type: 'definition',
      title: 'Bokføringsplikt',
      content: `Bokføringsplikt betyr at alle som driver økonomisk virksomhet må registrere og dokumentere alle økonomiske hendelser løpende og systematisk.`,
    },
    {
      id: 'oks-1-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'oks-1-2-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvor lenge må bedrifter oppbevare bilag i henhold til bokføringsloven?',
        options: [
          '3 år',
          '5 år',
          '7 år',
          '10 år',
        ],
        solution: '5 år',
        explanation: 'Bokføringsloven krever at bilag skal oppbevares i minst 5 år. Bilagsserier (for eksempel fakturaserier) skal oppbevares i 10 år.',
      },
    },
    {
      id: 'oks-1-2-text-4',
      type: 'text',
      content: `### Finansregnskap vs driftsregnskap

Regnskap kan deles i to hovedtyper:

**Finansregnskap (eksternt regnskap)**
- Rettet mot eksterne interessenter (skattemyndigheter, banker, kreditorer)
- Følger lovpålagte regler (regnskapsloven, god regnskapsskikk)
- Består av resultatregnskap og balanse
- Må revideres for større bedrifter
- Offentlig tilgjengelig (for AS og andre regnskapspliktige)

**Driftsregnskap (internt regnskap)**
- Rettet mot intern ledelse og eiere
- Ingen lovpålagte regler - bedriften bestemmer selv
- Kan inneholde detaljert informasjon per avdeling, produkt, prosjekt
- Budsjetter og prognoser
- Ikke offentlig tilgjengelig

I Økonomistyring vil du jobbe både med finansregnskap (lovpålagt) og driftsregnskap (intern styring).`,
    },
    {
      id: 'oks-1-2-example-2',
      type: 'example',
      title: 'Forskjellen mellom finans- og driftsregnskap',
      problem: `En møbelprodusent har tre produktlinjer: kjøkkenmøbler, kontormøbler og senger. Gi eksempler på informasjon som vil være i finansregnskapet versus driftsregnskapet.`,
      solution: `**Finansregnskap (eksternt):**
- Total omsetning for hele bedriften: 15 mill. kr
- Totale varekostnader: 8 mill. kr
- Totale lønnskostnader: 4 mill. kr
- Resultat før skatt: 2 mill. kr
- Balansens eiendeler og gjeld

**Driftsregnskap (internt):**
- Omsetning per produktlinje:
  - Kjøkkenmøbler: 8 mill. kr (53%)
  - Kontormøbler: 5 mill. kr (33%)
  - Senger: 2 mill. kr (14%)
- Lønnsomhet per produktlinje
- Produksjonskostnader per møbel
- Tidsbruk på ulike produksjonsoppgaver
- Sammenligning med budsjett per måned
- Analyse av avvik

**Hvorfor forskjellen?**
Finansregnskapet viser kun totalbildet, mens driftsregnskapet gir detaljert informasjon som ledelsen trenger for å styre bedriften effektivt. Konkurrenter trenger ikke vite detaljene!`,
    },
    {
      id: 'oks-1-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'oks-1-2-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom finansregnskap og driftsregnskap. Gi minst to forskjeller.',
        solution: `**Finansregnskap (eksternt regnskap):**
1. **Målgruppe:** Eksterne interessenter (skatteetaten, banker, kreditorer, investorer)
2. **Regulering:** Må følge regnskapsloven og god regnskapsskikk
3. **Detaljnivå:** Overordnet informasjon om hele bedriften
4. **Offentlighet:** Offentlig tilgjengelig for regnskapspliktige bedrifter
5. **Innhold:** Resultatregnskap, balanse, noter

**Driftsregnskap (internt regnskap):**
1. **Målgruppe:** Bedriftens ledelse og eiere
2. **Regulering:** Ingen lovkrav - bedriften bestemmer selv
3. **Detaljnivå:** Detaljert informasjon per avdeling, produkt, prosjekt
4. **Offentlighet:** Fortrolig, ikke tilgjengelig for eksterne
5. **Innhold:** Budsjetter, prognoser, avdeling srapporter, lønnsomhetsanalyser

**Hovedforskjell:** Finansregnskapet er lovpålagt og rettet utover, mens driftsregnskapet er frivillig og rettet innover for å styre bedriften.`,
      },
    },
    {
      id: 'oks-1-2-text-5',
      type: 'text',
      content: `### Regnskapets interessenter

Mange ulike aktører har interesse av en bedrifts regnskap:

**Interne interessenter:**
- **Eiere/aksjonærer:** Vil vite om bedriften er lønnsom og om de får utbytte
- **Ledelsen:** Trenger regnskapsinformasjon for å styre og ta beslutninger
- **Ansatte:** Ønsker å vite om bedriften er sunn (jobbsikkerhet, lønn)

**Eksterne interessenter:**
- **Skatteetaten:** Kontrollerer at riktig skatt blir betalt
- **Banker/långivere:** Vurderer om bedriften kan betale tilbake lån
- **Leverandører:** Vil vite om bedriften kan betale fakturaene
- **Kunder:** Store kunder vil vite om leverandøren er stabil
- **Konkurrenter:** Studerer regnskapstall til børsnoterte konkurrenter
- **Samfunnet:** Media, forskere, politikere bruker regnskapstall`,
    },
    {
      id: 'oks-1-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'oks-1-2-oppg-4',
        number: '4',
        type: 'multiple-choice',
        task: 'En bank skal vurdere om den skal låne 2 millioner kroner til en bedrift. Hva er banken MEST interessert i å se i regnskapet?',
        options: [
          'Om bedriften har positive resultater og god likviditet',
          'Hvor mye daglig leder tjener',
          'Hvilke leverandører bedriften bruker',
          'Hvor mange ansatte bedriften har',
        ],
        solution: 'Om bedriften har positive resultater og god likviditet',
        explanation: 'Banken er primært interessert i om bedriften kan betale tilbake lånet. Derfor ser de på lønnsomhet (positive resultater) og betalingsevne (likviditet). De andre faktorene er mindre relevante for lånevurderingen.',
      },
    },
    {
      id: 'oks-1-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'oks-1-2-oppg-5',
        number: '5',
        type: 'classic',
        task: 'En leverandør skal bestemme om de vil gi en ny kunde betalingsutsettelse (30 dagers kreditt). Hvilken informasjon fra regnskapet er mest relevant? Begrunn svaret.',
        solution: `Leverandøren bør se på disse regnskapselementene:

**1. Likviditet (betalingsevne):**
- **Bankinnskudd:** Har kunden penger på bok til å betale?
- **Kortsiktig gjeld:** Hvor mye skylder kunden allerede til andre?
- **Arbeidskapital:** Omløpsmidler minus kortsiktig gjeld

**2. Lønnsomhet:**
- **Årsresultat:** Går bedriften med overskudd eller underskudd?
- **Egenkapital:** Er egenkapitalen positiv eller negativ?

**3. Historikk:**
- **Utvikling over tid:** Går det bedre eller dårligere?
- **Trender:** Er likviditeten synkende?

**Mest relevant: Likviditet**
Det viktigste for leverandøren er om kunden har råd til å betale om 30 dager. En bedrift kan ha godt resultat, men dårlig likviditet (pengene er bundet i varelager eller eiendeler). Derfor bør leverandøren fokusere på bankinnskudd og kortsiktig gjeld.

**Konklusjon:** Leverandøren bør kreve å se balansen, spesielt omløpsmidler og kortsiktig gjeld, før de gir kreditt.`,
      },
    },
    {
      id: 'oks-1-2-text-6',
      type: 'text',
      content: `## --- Samleoppgaver ---`,
    },
    {
      id: 'oks-1-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'oks-1-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'En gründer spør deg: "Jeg har startet et lite enkeltpersonsforetak som har hatt 50 000 kr i omsetning første år. Trenger jeg virkelig å føre regnskap? Det virker som mye ekstraarbeid."\n\nGi et godt svar som forklarer hvorfor regnskap er nødvendig også for små bedrifter.',
        solution: `**Ja, du må føre regnskap, og her er hvorfor:**

**1. Lovkrav - du MÅ:**
- Bokføringsloven gjelder ALLE som driver økonomisk virksomhet, også små enkeltpersonsforetak
- Du må kunne dokumentere inntekter og utgifter for skattemyndighetene
- Uten regnskap kan du få gebyr og problemer med skatteetaten

**2. For din egen økonomi:**
Med 50 000 kr i omsetning vet du ikke:
- Hvor mye som er igjen etter alle utgifter (materialer, markedsføring, strøm, etc.)
- Om du faktisk går med overskudd eller underskudd
- Hva du skal betale i skatt

**3. For fremtidig vekst:**
- Hvis du vil vokse og trenge lån, må du kunne vise regnskapstall
- Regnskap hjelper deg å se hva som fungerer og hva som ikke fungerer
- Du kan planlegge og budsjettere bedre

**4. Det er ikke så hardt som du tror:**
- Mange enkle regnskapsprogrammer (Fiken, Tripletex) gjør det meste automatisk
- Tar kanskje 1-2 timer per måned når du har kommet i gang
- Billigere enn å få problemer med skattemyndighetene!

**Konklusjon:** Regnskap er både lovpålagt og nyttig for deg. Start enkelt med et gratis regnskapsprogram, så ser du fort verdien av det.`,
      },
    },
    {
      id: 'oks-1-2-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'oks-1-2-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En nystiftet AS har levert sitt første årsregnskap. Regnskapet viser:\n- Omsetning: 2 500 000 kr\n- Resultat: -300 000 kr (underskudd)\n- Egenkapital: 200 000 kr\n- Bankinnskudd: 50 000 kr\n- Kortsiktig gjeld: 800 000 kr\n\nUlike interessenter ser på dette regnskapet:\na) Banken som vurderer å låne ut 500 000 kr\nb) Skatteetaten\nc) Eier/daglig leder\nd) En leverandør som vurderer 60 dagers betalingskreditt\n\nForklar hva hver interessent vil fokusere på og hva de vil mene om tallene.',
        solution: `**a) Banken:**
**Fokuserer på:** Betalingsevne og sikkerhet for lån

**Analyse:**
- **Negativt:** Underskudd første år (-300 000 kr)
- **Svært negativt:** Lav likviditet (50 000 kr i bank mot 800 000 kr i gjeld)
- **Kritisk:** Likviditetsgrad = 50 000 / 800 000 = 0,06 (ekstremt lavt!)
- **Positivt:** De har omsetning (2,5 mill. kr), så det er aktivitet

**Konklusjon:** Banken vil trolig **AVSLÅ** lånesøknaden eller kreve sikkerhet (pant i eiendom, kausjon). Bedriften har ikke råd til å betale tilbake.

---

**b) Skatteetaten:**
**Fokuserer på:** Om inntekt er korrekt rapportert

**Analyse:**
- Bedriften har underskudd, så de betaler ingen skatt
- Skatteetaten vil kontrollere at underskuddet er reelt (ikke fiktive kostnader)
- De vil se at bilag og dokumentasjon er i orden

**Konklusjon:** Skatteetaten vil kontrollere regnskapet nøye, men ingen skatt skal betales.

---

**c) Eier/daglig leder:**
**Fokuserer på:** Overlevelse og fremtidig strategi

**Analyse:**
- **Kritisk:** 300 000 kr underskudd tærer på egenkapitalen (nå bare 200 000 kr igjen)
- **Farlig:** Nesten ingen penger i banken, men 800 000 kr i gjeld
- **Positivt:** Omsetning på 2,5 mill. kr viser at det er marked

**Bekymringer:**
- Kan bedriften overleve neste år?
- Kan vi betale regningene når de forfaller?
- Må vi få inn mer egenkapital?

**Konklusjon:** Eieren må handle raskt - enten øke kapitalen, kutte kostnader, eller vurdere nedleggelse.

---

**d) Leverandør (60 dagers kreditt):**
**Fokuserer på:** Vil kunden betale fakturaen om 60 dager?

**Analyse:**
- **Alarmerende:** Bare 50 000 kr i bank, 800 000 kr i gjeld
- **Dårlig:** Underskudd betyr at de taper penger
- **Risiko:** Om 60 dager kan de være konkurs

**Konklusjon:** Leverandøren bør **IKKE** gi 60 dagers kreditt. Krev forskuddsbetaling eller kortest mulig kreditt (maks 14 dager).

---

**Oppsummering:**
Dette regnskapet viser en bedrift i krise. Lav likviditet og underskudd gjør at eksterne interessenter (bank, leverandører) vil være svært skeptiske. Eieren må handle raskt for å redde bedriften.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

export const CHAPTER_OKONOMISTYRING_1_3: TextbookChapter = {
  id: 'okonomistyring-1-3',
  courseId: 'okonomistyring',
  chapterNumber: '1.3',
  title: 'Bilagsbehandling og kontoplan',
  description: 'Hvordan bedrifter registrerer økonomiske hendelser med bilag, innføring i Norsk Standard kontoplan og kontoklasser.',
  estimatedMinutes: 25,
  competenceGoals: [
    'Forstå hva et bilag er og hvorfor det er viktig',
    'Kjenne til krav til bilag etter bokføringsloven',
    'Kunne finne frem i Norsk Standard kontoplan',
    'Kjenne til de åtte kontoklassene og hva de inneholder',
  ],
  content: [
    {
      id: 'oks-1-3-intro',
      type: 'text',
      content: `## Bilag - regnskapets dokumentasjon

Alle økonomiske hendelser i en bedrift må dokumenteres med **bilag**. Uten bilag, ingen bokføring!`,
    },
    {
      id: 'oks-1-3-def-1',
      type: 'definition',
      title: 'Bilag',
      content: `Et bilag er et dokument som beviser at en økonomisk hendelse har funnet sted. Bilag kan være fakturaer, kvitteringer, lønnslipper, kontoutskrifter, eller interne notater.`,
    },
    {
      id: 'oks-1-3-text-2',
      type: 'text',
      content: `### Typer bilag

**Eksterne bilag (fra andre):**
- Fakturaer fra leverandører
- Kvitteringer fra butikker
- Bankkontoutskrifter
- Tollpapirer

**Interne bilag (laget av bedriften):**
- Utgående fakturaer til kunder
- Lønnslipper
- Kasseoppgjør
- Interne overføringsbilag (f.eks. ved avskrivninger)

**Krav til bilag (bokføringsloven § 5-5):**
Alle bilag må inneholde:
1. **Dato** for transaksjonen
2. **Beløp** (helst inkl. og ekskl. mva)
3. **Hva** transaksjonen gjelder (beskrivelse)
4. **Hvem** som er motpart (leverandør/kunde)

Digitale bilag (PDF, bilder) er like gyldige som papirbilag.`,
    },
    {
      id: 'oks-1-3-example-1',
      type: 'example',
      title: 'Gyldige vs ugyldige bilag',
      problem: `Hvilke av disse kan brukes som gyldige bilag i regnskapet?

a) En kvittering fra Rema 1000 på kontorutstyr (200 kr)
b) Et notat fra daglig leder: "Kjøpte kontorutstyr for ca. 200 kr i går"
c) En faktura fra leverandør, mottatt på e-post som PDF
d) Et muntlig løfte om betaling`,
      solution: `**a) Gyldig bilag ✓**
Kvitteringen inneholder dato, beløp, hva som er kjøpt, og hvem som har solgt. Dette er et fullverdig bilag.

**b) Ugyldig bilag ✗**
Notatet mangler nøyaktig beløp ("ca. 200 kr"), nøyaktig dato ("i går"), og hvem som har solgt. Dette er ikke god nok dokumentasjon.

**c) Gyldig bilag ✓**
Digitale fakturaer er like gyldige som papirutgaver. Så lenge fakturaen inneholder all nødvendig informasjon, kan den brukes.

**d) Ugyldig bilag ✗**
Muntlige avtaler er ikke bilag. Det må foreligge skriftlig dokumentasjon.

**Konklusjon:** Bilag må være skriftlige (papir eller digitalt) og inneholde dato, beløp, beskrivelse og motpart.`,
    },
    {
      id: 'oks-1-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'oks-1-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er et eksternt bilag?',
        options: [
          'Et bilag som bedriften sender ut til kunder',
          'Et bilag som bedriften mottar fra andre',
          'Et bilag som ikke er digitalt',
          'Et bilag som ikke trenger oppbevares',
        ],
        solution: 'Et bilag som bedriften mottar fra andre',
        explanation: 'Eksterne bilag er dokumenter som kommer fra andre (leverandører, banker, kunder). Eksempel: fakturaer fra leverandører, bankkontoutskrifter. Bilag bedriften sender ut kalles utgående bilag.',
      },
    },
    {
      id: 'oks-1-3-text-3',
      type: 'text',
      content: `### Bilagsnummerering og oppbevaring

**Bilagsnummerering:**
Alle bilag skal nummereres fortløpende:
- Bilag nr. 1, 2, 3, 4, osv.
- Gjør det lett å finne igjen bilag
- Gjør det lett å se om bilag mangler

Mange bedrifter bruker:
- Forskjellige bilagsserier for ulike typer (faktura, kasse, bank)
- Eksempel: F001, F002 (fakturaer), K001, K002 (kasse)

**Oppbevaring (bokføringsloven):**
- Bilag: 5 år
- Bilagsserier/regnskapsmateriale: 10 år
- Kan oppbevares digitalt eller på papir
- Må være lett tilgjengelig ved kontroll`,
    },
    {
      id: 'oks-1-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'oks-1-3-oppg-2',
        number: '2',
        type: 'classic',
        task: 'Du har funnet en kvittering fra en bedriftslunsj for 3 måneder siden, men den har ligget i en skuff og er ikke bokført ennå. Kvitteringen er utydelig, men du husker at dere spiste på restaurant for ca. 400 kr. Hvordan bør du håndtere dette?',
        solution: `**Korrekt håndtering:**

1. **Forsøk å klargjøre kvitteringen:**
   - Bruk skanner eller mobil med høy oppløsning
   - Se om du kan lese beløp og dato ved å zoome inn
   - Sjekk bankkontoutskrift for å finne nøyaktig beløp og dato

2. **Hvis kvitteringen er helt uleselig:**
   - Bruk bankkontoutskrift som bilag
   - Skriv et internt notat med all informasjon du husker:
     * Dato (finn i bank)
     * Nøyaktig beløp (finn i bank)
     * Restaurant (navn hvis du husker)
     * Hvem som deltok
   - Fest den uklare kvitteringen ved notatet

3. **Bokfør så raskt som mulig:**
   - Selv om det er 3 måneder siden, må det bokføres
   - Bruk riktig dato (den opprinnelige datoen, ikke dagens dato)
   - Nummerér bilaget fortløpende

**Viktig lærdom:** Bokfør bilag løpende! Jo lenger du venter, desto vanskeligere blir det å rekonstruere informasjonen.

**Fremtidig rutine:**
- Ta bilde av kvitteringer med en gang
- Bokfør minst én gang per uke
- Arkiver bilag systematisk`,
      },
    },
    {
      id: 'oks-1-3-text-4',
      type: 'text',
      content: `### Norsk Standard kontoplan

For å kunne sammenligne regnskap på tvers av bedrifter, bruker norske bedrifter **Norsk Standard (NS) kontoplan**. Dette er et nummeringssystem for alle typer inntekter, kostnader, eiendeler og gjeld.

Kontoplanen gjør at:
- Alle bedrifter bruker samme kontonummer for samme type konto
- Regnskapsprogrammer er standardiserte
- Revisorer og regnskapsførere forstår regnskapet
- Sammenligning mellom bedrifter blir mulig`,
    },
    {
      id: 'oks-1-3-def-2',
      type: 'definition',
      title: 'Kontoplan',
      content: `En kontoplan er et systematisk nummersystem som angir hvilke kontoer bedriften skal bruke i bokføringen.`,
    },
    {
      id: 'oks-1-3-text-5',
      type: 'text',
      content: `### De 8 kontoklassene

Norsk Standard kontoplan har 8 hovedklasser:

| Klasse | Type | Innhold |
|--------|------|---------|
| **1** | Eiendeler | Anleggsmidler (bygninger, maskiner, biler) |
| **2** | Eiendeler | Omløpsmidler (varelager, bankinnskudd, kundefordringer) |
| **3** | Egenkapital og gjeld | Egenkapital (innskutt og opptjent) |
| **4** | Egenkapital og gjeld | Langsiktig gjeld (lån som skal betales tilbake om >1 år) |
| **5** | Kostnader | Varekostnader (innkjøp av varer) |
| **6** | Kostnader | Lønnskostnader (lønn, feriepenger, arbeidsgiveravgift) |
| **7** | Kostnader | Driftskostnader (husleie, strøm, kontorrekvisita) |
| **8** | Inntekter | Salgsinntekter og annen driftsinntekt |

**Huskeregel:**
- **1-2:** Hva bedriften eier (eiendeler)
- **3-4:** Hva bedriften skylder (egenkapital og gjeld)
- **5-7:** Hva bedriften bruker penger på (kostnader)
- **8:** Hva bedriften tjener penger på (inntekter)`,
    },
    {
      id: 'oks-1-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'oks-1-3-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'En bedrift kjøper en ny datamaskin for 15 000 kr. Hvilken kontoklasse hører dette til?',
        options: [
          'Klasse 1 (Anleggsmidler)',
          'Klasse 2 (Omløpsmidler)',
          'Klasse 7 (Driftskostnader)',
          'Klasse 5 (Varekostnader)',
        ],
        solution: 'Klasse 1 (Anleggsmidler)',
        explanation: 'En datamaskin er et anleggsmiddel (driftsmiddel) som skal brukes i flere år. Den føres derfor i klasse 1. Hadde datamaskinen vært billigere (f.eks. under 15 000 kr), kunne den ha blitt kostnadsført direkte i klasse 7.',
      },
    },
    {
      id: 'oks-1-3-example-2',
      type: 'example',
      title: 'Kontoklasser i praksis',
      problem: `Plasser følgende poster i riktig kontoklasse:

a) Salgsinntekt fra varer
b) Husleie for lokalet
c) Penger på bankkontoen
d) Lån i bank som skal betales tilbake om 5 år
e) Varelager
f) Lønn til ansatte`,
      solution: `**a) Salgsinntekt fra varer:** Klasse 8 (Inntekter)
- Kontonummer: 3000-3999

**b) Husleie for lokalet:** Klasse 7 (Driftskostnader)
- Kontonummer: 7000-7999
- Mer spesifikt: 7100-7199 (Lokale/arealkostnader)

**c) Penger på bankkontoen:** Klasse 2 (Omløpsmidler)
- Kontonummer: 2000-2999
- Mer spesifikt: 1900-1999 (Bankinnskudd, kassekreditt)

**d) Lån i bank (5 år):** Klasse 4 (Langsiktig gjeld)
- Kontonummer: 4000-4999
- Langsiktig = skal betales tilbake om mer enn 1 år

**e) Varelager:** Klasse 2 (Omløpsmidler)
- Kontonummer: 2000-2999
- Mer spesifikt: 1400-1499 (Varer)

**f) Lønn til ansatte:** Klasse 6 (Lønnskostnader)
- Kontonummer: 6000-6999`,
    },
    {
      id: 'oks-1-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'oks-1-3-oppg-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken kontoklasse inneholder kundefordringer (penger som kunder skylder bedriften)?',
        options: [
          'Klasse 1 (Anleggsmidler)',
          'Klasse 2 (Omløpsmidler)',
          'Klasse 4 (Langsiktig gjeld)',
          'Klasse 8 (Inntekter)',
        ],
        solution: 'Klasse 2 (Omløpsmidler)',
        explanation: 'Kundefordringer er penger som kunder skylder bedriften. Dette er en eiendel (noe bedriften eier/har krav på), og den er kortsiktig (skal betales innen kort tid). Derfor er det et omløpsmiddel i klasse 2.',
      },
    },
    {
      id: 'oks-1-3-text-6',
      type: 'text',
      content: `### Eksempler på kontonummer

Her er noen vanlige kontonummer fra Norsk Standard kontoplan:

**Klasse 1 - Anleggsmidler:**
- 1200 Inventar og utstyr
- 1220 Maskiner og transportmidler
- 1240 Biler og transportmidler

**Klasse 2 - Omløpsmidler:**
- 1400 Varelager
- 1500 Kundefordringer
- 1900 Bank

**Klasse 3 - Egenkapital:**
- 2000 Egenkapital
- 2050 Udisponert årsresultat

**Klasse 4 - Langsiktig gjeld:**
- 4000 Pantelån i bygninger
- 4010 Lån i kredittforetak

**Klasse 5 - Varekostnader:**
- 4000 Vareforbruk

**Klasse 6 - Lønnskostnader:**
- 5000 Lønn
- 5400 Arbeidsgiveravgift
- 5900 Feriepenger

**Klasse 7 - Driftskostnader:**
- 6000 Husleie
- 6300 Kontorrekvisita
- 6800 Reisekostnader

**Klasse 8 - Inntekter:**
- 3000 Salgsinntekt
- 8050 Renteinntekter`,
    },
    {
      id: 'oks-1-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'oks-1-3-oppg-5',
        number: '5',
        type: 'classic',
        task: 'En bedrift har følgende transaksjoner i løpet av en måned. Angi hvilken kontoklasse hver transaksjon tilhører:\n\na) Betaler husleie 20 000 kr\nb) Mottar betaling fra kunde for tidligere salg, 15 000 kr\nc) Kjøper kontorrekvisita for 2 000 kr\nd) Betaler lønn til ansatte 50 000 kr\ne) Selger varer for 30 000 kr (kunden betaler senere)',
        solution: `**a) Betaler husleie 20 000 kr**
- **Klasse 7** (Driftskostnader) - konto 6000 Husleie
- **Klasse 2** (Omløpsmidler) - konto 1900 Bank (reduseres)

**b) Mottar betaling fra kunde 15 000 kr**
- **Klasse 2** (Omløpsmidler) - konto 1900 Bank (øker)
- **Klasse 2** (Omløpsmidler) - konto 1500 Kundefordringer (reduseres)

**c) Kjøper kontorrekvisita 2 000 kr**
- **Klasse 7** (Driftskostnader) - konto 6300 Kontorrekvisita
- **Klasse 2** (Omløpsmidler) - konto 1900 Bank (reduseres)

**d) Betaler lønn 50 000 kr**
- **Klasse 6** (Lønnskostnader) - konto 5000 Lønn
- **Klasse 2** (Omløpsmidler) - konto 1900 Bank (reduseres)

**e) Selger varer for 30 000 kr (kreditt)**
- **Klasse 8** (Inntekter) - konto 3000 Salgsinntekt
- **Klasse 2** (Omløpsmidler) - konto 1500 Kundefordringer (øker)

**Merk:** Hver transaksjon påvirker minst to kontoer (dobbel bokføring - mer om dette i kapittel 1.4).`,
      },
    },
    {
      id: 'oks-1-3-text-7',
      type: 'text',
      content: `## --- Samleoppgaver ---`,
    },
    {
      id: 'oks-1-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'oks-1-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'En nystartet bedrift har følgende hendelser første måned:\n\n1. Eier setter inn 100 000 kr i bedriftens bankkonto\n2. Kjøper varelager for 40 000 kr (betaler kontant)\n3. Kjøper inventar (møbler) for 25 000 kr\n4. Betaler husleie 8 000 kr\n5. Selger varer for 60 000 kr (kundene betaler om 30 dager)\n6. Betaler strøm 1 500 kr\n\nFor hver hendelse:\na) Angi hvilke kontoklasser som påvirkes\nb) Lag et kort bilagsbeskrivelse',
        solution: `**1. Eier setter inn 100 000 kr:**
- **Kontoklasser:**
  - Klasse 2 øker (Bank, 1900): +100 000 kr
  - Klasse 3 øker (Egenkapital, 2000): +100 000 kr
- **Bilag:** Kontoskriv fra bank som viser innskuddet, evt. protokoll fra stiftelsesmøte

**2. Kjøper varelager 40 000 kr:**
- **Kontoklasser:**
  - Klasse 2 øker (Varelager, 1400): +40 000 kr
  - Klasse 2 reduseres (Bank, 1900): -40 000 kr
- **Bilag:** Faktura fra leverandør, betalingsbevis

**3. Kjøper inventar 25 000 kr:**
- **Kontoklasser:**
  - Klasse 1 øker (Inventar, 1200): +25 000 kr
  - Klasse 2 reduseres (Bank, 1900): -25 000 kr
- **Bilag:** Faktura fra møbelforretning, kvittering

**4. Betaler husleie 8 000 kr:**
- **Kontoklasser:**
  - Klasse 7 øker (Husleie, 6000): +8 000 kr
  - Klasse 2 reduseres (Bank, 1900): -8 000 kr
- **Bilag:** Husleiekontrakt, faktura fra utleier, betalingsbevis

**5. Selger varer 60 000 kr (kreditt):**
- **Kontoklasser:**
  - Klasse 8 øker (Salgsinntekt, 3000): +60 000 kr
  - Klasse 2 øker (Kundefordringer, 1500): +60 000 kr
- **Bilag:** Utgående faktura til kunde (kopi)

**6. Betaler strøm 1 500 kr:**
- **Kontoklasser:**
  - Klasse 7 øker (Strøm, 6900): +1 500 kr
  - Klasse 2 reduseres (Bank, 1900): -1 500 kr
- **Bilag:** Faktura fra strømleverandør, betalingsbevis

**Oppsummering av påvirkning på bank (konto 1900):**
+100 000 (innskudd) -40 000 (varer) -25 000 (inventar) -8 000 (husleie) -1 500 (strøm) = +25 500 kr

Bedriften har 25 500 kr igjen på bankkontoen etter første måned.`,
      },
    },
    {
      id: 'oks-1-3-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'oks-1-3-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er ansvarlig for bilagskontrollen i en bedrift. Du mottar følgende bilag som skal godkjennes for bokføring:\n\n**Bilag A:** En håndskrevet lapp: "Bensin til firmabil, ca. 800 kr, 15. mars"\n**Bilag B:** En kvittering fra en restaurant på 3 500 kr, datert 20. mars, med liste over mat og drikke\n**Bilag C:** En e-post fra leverandør: "Vi har sendt fakturaen for 15 000 kr. Betalingsfrist 14 dager."\n**Bilag D:** En faktura fra IT-leverandør for "Diverse tjenester 10 000 kr" uten nærmere spesifikasjon\n\nVurder hvert bilag: Kan det godkjennes? Hva mangler? Hva må gjøres?',
        solution: `**Bilag A: Håndskrevet lapp om bensin**
**Status:** ❌ Ikke godkjent uten videre dokumentasjon

**Problemer:**
- "Ca. 800 kr" - ikke nøyaktig beløp
- Ingen kvittering fra bensinstasjon
- Ingen informasjon om hvilken stasjon
- Ikke mulig å verifisere

**Løsning:**
- Kreve original kvittering fra bensinstasjon
- Hvis kvittering er tapt: Be om kontoskriv fra bank som viser transaksjonen
- Hvis kortkjøp: Be om kredittkortspecification
- Skriv et internt notat med nøyaktig beløp fra bank + fest bankdokument ved

---

**Bilag B: Restaurantkvittering 3 500 kr**
**Status:** ⚠️ Delvis godkjent, trenger tilleggsinformasjon

**Har:**
- Nøyaktig beløp ✓
- Dato ✓
- Spesifikasjon av kjøp ✓

**Mangler:**
- Formål: Hvorfor spisetdere ute? (Kundemøte, team-event, osv.)
- Deltakere: Hvem var med?
- Saklig grunn for at det er firmautgift

**Løsning:**
- Be om tilleggsinformasjon på baksiden av kvitteringen:
  * "Kundemøte med Acme AS"
  * "Deltakere: Per Hansen (oss), Lisa Olsen (Acme AS)"
- Alternativt: Lag et internt notat som forklarer formålet
- Dette er viktig for skatteetaten (representasjon har egne regler)

---

**Bilag C: E-post fra leverandør**
**Status:** ❌ Ikke godkjent

**Problemer:**
- En e-post er ikke en faktura
- Mangler formell faktura med:
  * Fakturanummer
  * Leverandørens org.nr og adresse
  * Spesifikasjon av hva som er levert
  * Betalingsinformasjon (kontonummer)
  * MVA-spesifikasjon

**Løsning:**
- Be leverandøren sende formell faktura
- Ikke bokfør eller betal før faktura foreligger
- Fakturaen MÅ inneholde alle lovpålagte elementer

---

**Bilag D: Faktura "Diverse tjenester" 10 000 kr**
**Status:** ⚠️ Kan godkjennes, men bør etterspørres spesifikasjon

**Har:**
- Formell faktura ✓
- Nøyaktig beløp ✓

**Problem:**
- "Diverse tjenester" er for vagt
- Gjør det vanskelig å vurdere om kostnaden er riktig
- Vanskelig å kontrollere ved senere revisjon

**Løsning:**
- Be leverandøren om en spesifisert faktura:
  * Hva slags tjenester? (Konsulentimer, support, oppsett?)
  * Hvor mange timer à hvilken timepris?
  * Hvilke datoer?
- Hvis leverandøren ikke kan spesifisere, vurder om tjenesten faktisk er levert
- Lag eventuelt et internt notat som dokumenterer hva som er utført

---

**Oppsummering:**
Som bilagskontrollør må du sikre at alle bilag:
1. Er ekte og dokumenterer en reell transaksjon
2. Inneholder nødvendig informasjon (dato, beløp, hva, hvem)
3. Er forståelige ved fremtidig kontroll (revisjon, skattekontroll)
4. Følger bedriftens interne retningslinjer

**Når i tvil:** Be om tilleggsinformasjon før du godkjenner!`,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

export const CHAPTER_OKONOMISTYRING_1_4: TextbookChapter = {
  id: 'okonomistyring-1-4',
  courseId: 'okonomistyring',
  chapterNumber: '1.4',
  title: 'Debet og kredit',
  description: 'Prinsippet om dobbel bokføring, T-kontoer og reglene for når du skal debitere eller kreditere ulike kontoer.',
  estimatedMinutes: 25,
  competenceGoals: [
    'Forstå prinsippet om dobbel bokføring',
    'Kunne bruke T-kontoer til å illustrere bokføringer',
    'Kjenne reglene for debet og kredit',
    'Kunne bokføre enkle transaksjoner korrekt',
  ],
  content: [
    {
      id: 'oks-1-4-intro',
      type: 'text',
      content: `## Dobbel bokføring

Alle bedrifter i Norge bruker **dobbel bokføring**. Dette betyr at hver transaksjon påvirker minst to kontoer - en konto får debet, og en annen får kredit.`,
    },
    {
      id: 'oks-1-4-def-1',
      type: 'definition',
      title: 'Dobbel bokføring',
      content: `Dobbel bokføring er et system der hver transaksjon registreres to ganger: én gang som debet på én konto, og én gang som kredit på en annen konto. Summen av all debet skal alltid være lik summen av all kredit.`,
    },
    {
      id: 'oks-1-4-text-2',
      type: 'text',
      content: `### Hvorfor dobbel bokføring?

Dobbel bokføring gir flere fordeler:

**1. Kontroll**
- Debet = Kredit gir automatisk kontroll
- Lettere å oppdage feil
- Systemet "sjekker seg selv"

**2. Fullstendig bilde**
- Viser både hvor pengene kommer fra og hvor de går
- Eksempel: Når du kjøper varer, ser du både at varelager øker OG at bank reduseres

**3. Grunnlag for regnskap**
- Dobbel bokføring gir automatisk grunnlag for resultatregnskap og balanse
- Alle eiendeler, gjeld, kostnader og inntekter er registrert`,
    },
    {
      id: 'oks-1-4-example-1',
      type: 'example',
      title: 'Enkelt eksempel på dobbel bokføring',
      problem: `En bedrift kjøper kontorrekvisita for 2 000 kr og betaler kontant. Hvordan påvirker dette regnskapet?`,
      solution: `**Transaksjon:** Kjøp av kontorrekvisita for 2 000 kr

**Påvirkning:**
1. **Kontorrekvisita (konto 6300) øker:** Dette er en kostnad - bedriften bruker penger
2. **Bank (konto 1900) reduseres:** Pengene på bankkontoen går ned

**Bokføring:**
- **Debet** konto 6300 Kontorrekvisita: 2 000 kr
- **Kredit** konto 1900 Bank: 2 000 kr

**Kontroll:**
Debet (2 000) = Kredit (2 000) ✓

Dobbel bokføring sikrer at vi ser både at bedriften har fått en kostnad (debet) og at bankkontoen er redusert (kredit).`,
    },
    {
      id: 'oks-1-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'oks-1-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste fordelen med dobbel bokføring?',
        options: [
          'Det er enklere enn enkel bokføring',
          'Det gir automatisk kontroll fordi debet alltid skal være lik kredit',
          'Det krever færre kontoer',
          'Det er raskere å bokføre',
        ],
        solution: 'Det gir automatisk kontroll fordi debet alltid skal være lik kredit',
        explanation: 'Den viktigste fordelen med dobbel bokføring er innebygd kontroll. Siden hver transaksjon påvirker minst to kontoer, og total debet alltid skal være lik total kredit, oppdages feil lettere.',
      },
    },
    {
      id: 'oks-1-4-text-3',
      type: 'text',
      content: `### T-kontoer

For å illustrere bokføringer bruker vi ofte **T-kontoer**. En T-konto ser ut som en stor T, med kontonavnet øverst, debet på venstre side, og kredit på høyre side.

\`\`\`
         Kontonavn (f.eks. Bank)
    ─────────────────────────────────
    Debet         │        Kredit
    (venstre)     │        (høyre)
    ─────────────────────────────────
\`\`\`

**Huskeregel:**
- **Debet = venstre side**
- **Kredit = høyre side**

Merk: Debet betyr IKKE "pluss" og kredit betyr IKKE "minus". Hva som er økning eller reduksjon avhenger av kontotypen!`,
    },
    {
      id: 'oks-1-4-def-2',
      type: 'definition',
      title: 'T-konto',
      content: `En T-konto er en grafisk fremstilling av en konto med debet på venstre side og kredit på høyre side. Brukes til å illustrere bokføringer.`,
    },
    {
      id: 'oks-1-4-text-4',
      type: 'text',
      content: `### Debet- og kreditregler

Dette er den viktigste kunnskapen i regnskap. Ulike kontotyper har forskjellige regler for når de skal debiteres eller krediteres:

**EIENDELER (klasse 1 og 2):**
- **Debet** = Økning
- **Kredit** = Reduksjon
- Eksempel: Bankkontoen får debet når penger kommer inn

**EGENKAPITAL OG GJELD (klasse 3 og 4):**
- **Debet** = Reduksjon
- **Kredit** = Økning
- Eksempel: Lån får kredit når bedriften låner penger

**KOSTNADER (klasse 5, 6 og 7):**
- **Debet** = Økning
- **Kredit** = Reduksjon
- Eksempel: Lønnskostnad får debet når du betaler lønn

**INNTEKTER (klasse 8):**
- **Debet** = Reduksjon
- **Kredit** = Økning
- Eksempel: Salgsinntekt får kredit når du selger varer

**Huskeregel (EGKO):**
- **E**iendeler: Debet = økning
- **G**jeld: Kredit = økning
- **K**ostnader: Debet = økning
- **O**msetning (inntekt): Kredit = økning`,
    },
    {
      id: 'oks-1-4-example-2',
      type: 'example',
      title: 'T-kontoer i praksis',
      problem: `En bedrift har følgende transaksjoner:
1. Selger varer for 10 000 kr (betaling kommer senere)
2. Mottar betaling fra kunden (10 000 kr inn på banken)

Vis bokføringene med T-kontoer.`,
      solution: `**Transaksjon 1: Salg på kreditt (10 000 kr)**

Påvirkning:
- Kundefordringer (eiendel) øker: **Debet**
- Salgsinntekt (inntekt) øker: **Kredit**

\`\`\`
    Kundefordringer (1500)          Salgsinntekt (3000)
    ─────────────────────           ─────────────────────
    Debet    │   Kredit              Debet    │   Kredit
    ─────────────────────           ─────────────────────
    10 000   │                                │   10 000
\`\`\`

**Transaksjon 2: Innbetaling fra kunde (10 000 kr)**

Påvirkning:
- Bank (eiendel) øker: **Debet**
- Kundefordringer (eiendel) reduseres: **Kredit**

\`\`\`
    Bank (1900)                     Kundefordringer (1500)
    ─────────────────────           ─────────────────────
    Debet    │   Kredit              Debet    │   Kredit
    ─────────────────────           ─────────────────────
    10 000   │                       10 000   │   10 000
                                               │
                                    Saldo: 0
\`\`\`

**Forklaring:**
1. Først får bedriften en kundefordring (eiendel) og en salgsinntekt
2. Så bytter kundefordringen plass med penger i banken
3. Til slutt har bedriften 10 000 kr i banken og ingen kundefordring`,
    },
    {
      id: 'oks-1-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'oks-1-4-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'En bedrift betaler husleie på 15 000 kr. Hvilken side skal "Husleie" (konto 6000) bokføres på?',
        options: [
          'Debet (venstre side)',
          'Kredit (høyre side)',
          'Både debet og kredit',
          'Det kommer an på beløpets størrelse',
        ],
        solution: 'Debet (venstre side)',
        explanation: 'Husleie er en kostnad (klasse 7). Kostnader øker ved debet. Når bedriften betaler husleie, øker kostnaden, derfor debet på konto 6000.',
      },
    },
    {
      id: 'oks-1-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'oks-1-4-oppg-3',
        number: '3',
        type: 'classic',
        task: 'En bedrift tar opp et lån i banken på 500 000 kr. Pengene settes inn på bedriftens bankkonto.\n\na) Hvilke to kontoer påvirkes?\nb) Skal de ha debet eller kredit?\nc) Forklar hvorfor.',
        solution: `**a) Kontoer som påvirkes:**
1. **Bank (konto 1900)** - øker med 500 000 kr
2. **Lån i bank (konto 4000)** - øker med 500 000 kr

**b) Debet og kredit:**
- **Debet** konto 1900 Bank: 500 000 kr
- **Kredit** konto 4000 Lån i bank: 500 000 kr

**c) Forklaring:**

**Bank (eiendel):**
- Bank er en eiendel (klasse 2)
- Eiendeler øker ved debet
- Bedriften får penger inn på kontoen → økning → **debet**

**Lån i bank (gjeld):**
- Lån er gjeld (klasse 4)
- Gjeld øker ved kredit
- Bedriften skylder mer penger → økning → **kredit**

**Kontroll:**
Debet (500 000) = Kredit (500 000) ✓

Dette viser det dobbelte i dobbel bokføring: Bedriften får både mer penger (eiendel) og mer gjeld samtidig.`,
      },
    },
    {
      id: 'oks-1-4-text-5',
      type: 'text',
      content: `### Sammendrag av debet/kredit-regler

Her er en oversikt over reglene:

| Kontotype | Klasse | Debet (venstre) | Kredit (høyre) |
|-----------|--------|-----------------|----------------|
| **Eiendeler** | 1, 2 | Økning (+) | Reduksjon (-) |
| **Egenkapital** | 3 | Reduksjon (-) | Økning (+) |
| **Gjeld** | 4 | Reduksjon (-) | Økning (+) |
| **Kostnader** | 5, 6, 7 | Økning (+) | Reduksjon (-) |
| **Inntekter** | 8 | Reduksjon (-) | Økning (+) |

**Gylden regel:**
Total debet = Total kredit (for hver enkelt transaksjon)`,
    },
    {
      id: 'oks-1-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'oks-1-4-oppg-4',
        number: '4',
        type: 'classic',
        task: 'En bedrift kjøper varelager for 30 000 kr. De betaler 10 000 kr kontant og får 20 000 kr på kreditt (leverandørgjeld).\n\nBokfør transaksjonen. Hvilke kontoer påvirkes og med debet/kredit?',
        solution: `**Transaksjons analyse:**
Bedriften får varer til en verdi av 30 000 kr, men betaler bare 10 000 kr nå. Resten (20 000 kr) skal betales senere.

**Kontoer som påvirkes:**
1. **Varelager (konto 1400):** Øker med 30 000 kr
2. **Bank (konto 1900):** Reduseres med 10 000 kr
3. **Leverandørgjeld (konto 2400):** Øker med 20 000 kr

**Bokføring:**

- **Debet** konto 1400 Varelager: 30 000 kr
  (Eiendel øker)

- **Kredit** konto 1900 Bank: 10 000 kr
  (Eiendel reduseres)

- **Kredit** konto 2400 Leverandørgjeld: 20 000 kr
  (Gjeld øker)

**Kontroll:**
- Total debet: 30 000 kr
- Total kredit: 10 000 + 20 000 = 30 000 kr
- Debet = Kredit ✓

**T-kontoer:**
\`\`\`
Varelager (1400)         Bank (1900)         Leverandørgjeld (2400)
───────────────          ───────────         ──────────────────────
Debet │ Kredit           Debet │ Kredit      Debet │ Kredit
───────────────          ───────────         ──────────────────────
30 000│                        │ 10 000            │ 20 000
\`\`\``,
      },
    },
    {
      id: 'oks-1-4-example-3',
      type: 'example',
      title: 'Komplett eksempel med flere transaksjoner',
      problem: `En bedrift har følgende transaksjoner i januar:

1. Eier setter inn 100 000 kr i egenkapital
2. Kjøper inventar for 30 000 kr (betaler kontant)
3. Selger varer for 50 000 kr (kundene betaler senere)
4. Betaler lønn 20 000 kr

Bokfør alle transaksjonene.`,
      solution: `**Transaksjon 1: Egenkapitalinnskudd 100 000 kr**

- **Debet** konto 1900 Bank: 100 000 kr (eiendel øker)
- **Kredit** konto 2000 Egenkapital: 100 000 kr (EK øker)

---

**Transaksjon 2: Kjøp av inventar 30 000 kr**

- **Debet** konto 1200 Inventar: 30 000 kr (eiendel øker)
- **Kredit** konto 1900 Bank: 30 000 kr (eiendel reduseres)

---

**Transaksjon 3: Salg på kreditt 50 000 kr**

- **Debet** konto 1500 Kundefordringer: 50 000 kr (eiendel øker)
- **Kredit** konto 3000 Salgsinntekt: 50 000 kr (inntekt øker)

---

**Transaksjon 4: Lønnsutbetaling 20 000 kr**

- **Debet** konto 5000 Lønn: 20 000 kr (kostnad øker)
- **Kredit** konto 1900 Bank: 20 000 kr (eiendel reduseres)

---

**Oppsummering - Bank (konto 1900):**
\`\`\`
        Bank (1900)
    ───────────────────────
    Debet    │    Kredit
    ───────────────────────
    100 000  │    30 000
             │    20 000
    ───────────────────────
    Saldo: 50 000 kr
\`\`\`

**Kontroll:** Alle bokføringer har debet = kredit ✓`,
    },
    {
      id: 'oks-1-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'oks-1-4-oppg-5',
        number: '5',
        type: 'multiple-choice',
        task: 'En bedrift betaler tilbake 50 000 kr på et lån. Hvordan bokføres dette?',
        options: [
          'Debet Bank, Kredit Lån',
          'Debet Lån, Kredit Bank',
          'Debet Kostnad, Kredit Bank',
          'Debet Bank, Kredit Kostnad',
        ],
        solution: 'Debet Lån, Kredit Bank',
        explanation: 'Når lånet betales tilbake, reduseres både bank (eiendel) og lån (gjeld). Bank reduseres med kredit, lån reduseres med debet. Derfor: Debet Lån, Kredit Bank.',
      },
    },
    {
      id: 'oks-1-4-text-6',
      type: 'text',
      content: `## --- Samleoppgaver ---`,
    },
    {
      id: 'oks-1-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'oks-1-4-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'En nystartet bedrift har følgende transaksjoner første uke:\n\n**Mandag:** Eier setter inn 200 000 kr\n**Tirsdag:** Kjøper datautstyr for 40 000 kr (betaler kontant)\n**Onsdag:** Kjøper varelager for 80 000 kr (50 000 kr kontant, 30 000 kr på kreditt)\n**Torsdag:** Selger varer for 60 000 kr (40 000 kr kontant, 20 000 kr på kreditt)\n**Fredag:** Betaler husleie 12 000 kr\n\nBokfør alle transaksjonene og vis saldoen på bankkontoen etter fredag.',
        solution: `**Mandag: Egenkapitalinnskudd 200 000 kr**
- Debet 1900 Bank: 200 000
- Kredit 2000 Egenkapital: 200 000

**Tirsdag: Kjøp datautstyr 40 000 kr**
- Debet 1200 Datautstyr: 40 000
- Kredit 1900 Bank: 40 000

**Onsdag: Kjøp varelager 80 000 kr (50 000 kontant + 30 000 kreditt)**
- Debet 1400 Varelager: 80 000
- Kredit 1900 Bank: 50 000
- Kredit 2400 Leverandørgjeld: 30 000

**Torsdag: Salg 60 000 kr (40 000 kontant + 20 000 kreditt)**
- Debet 1900 Bank: 40 000
- Debet 1500 Kundefordringer: 20 000
- Kredit 3000 Salgsinntekt: 60 000

**Fredag: Husleie 12 000 kr**
- Debet 6000 Husleie: 12 000
- Kredit 1900 Bank: 12 000

---

**T-konto for Bank (1900):**
\`\`\`
            Bank (1900)
    ───────────────────────────
    Debet         │    Kredit
    ───────────────────────────
    200 000 (ma)  │    40 000 (ti)
     40 000 (to)  │    50 000 (on)
                  │    12 000 (fr)
    ───────────────────────────
    240 000       │   102 000
    ───────────────────────────
    Saldo: 138 000 kr
\`\`\`

**Svar:** Bankkontoen har 138 000 kr etter fredag.

**Kontroll:** Alle bokføringer har debet = kredit ✓`,
      },
    },
    {
      id: 'oks-1-4-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'oks-1-4-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bedrift har følgende komplekse transaksjon:\n\nDe kjøper en brukt varebil for 250 000 kr. De betaler 100 000 kr kontant, tar opp et billån på 120 000 kr, og bytter inn den gamle varebilen (verdi 30 000 kr).\n\nBokfør hele transaksjonen. Hvilke kontoer påvirkes og hvordan?',
        solution: `**Analyse av transaksjonen:**

Bedriften skal ha:
- Ny varebil til verdi 250 000 kr

Bedriften gir/får:
- 100 000 kr fra bank (kontant)
- 120 000 kr lån (billån)
- 30 000 kr gammel varebil (innbytte)
- Total: 100 000 + 120 000 + 30 000 = 250 000 kr ✓

---

**Bokføring:**

**1. Ny varebil kommer inn (eiendel øker):**
- **Debet** konto 1240 Varebil (ny): 250 000 kr

**2. Gammel varebil ut (eiendel reduseres):**
- **Kredit** konto 1240 Varebil (gammel): 30 000 kr

**3. Kontant betaling (eiendel reduseres):**
- **Kredit** konto 1900 Bank: 100 000 kr

**4. Billån (gjeld øker):**
- **Kredit** konto 4010 Billån: 120 000 kr

---

**Komplett bokføringsbilag:**

\`\`\`
Debet:
1240 Varebil (ny)          250 000 kr

Kredit:
1240 Varebil (gammel)       30 000 kr
1900 Bank                  100 000 kr
4010 Billån                120 000 kr
                          ───────────
Total kredit               250 000 kr
\`\`\`

**Kontroll:**
- Total debet: 250 000 kr
- Total kredit: 30 000 + 100 000 + 120 000 = 250 000 kr
- Debet = Kredit ✓

---

**Forklaring:**
Dette er et godt eksempel på at én transaksjon kan påvirke mange kontoer samtidig, men prinsippet er det samme: Total debet skal alltid være lik total kredit.

**Praktisk håndtering:**
I praksis ville man kanskje splittet dette i to bokføringer:
1. Salg av gammel bil (debet Bank 30 000, kredit Varebil 30 000)
2. Kjøp av ny bil (debet Varebil 250 000, kredit Bank 100 000, kredit Billån 120 000, kredit Gevinst salg bil 30 000)

Men resultatet blir det samme.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

export const CHAPTER_OKONOMISTYRING_1_5: TextbookChapter = {
  id: 'okonomistyring-1-5',
  courseId: 'okonomistyring',
  chapterNumber: '1.5',
  title: 'Regnskapsligningen og regnskapsprinsipper',
  description: 'Grunnleggende regnskapsligning, god regnskapsskikk (GRS) og viktige regnskapsprinsipper.',
  estimatedMinutes: 20,
  competenceGoals: [
    'Forstå og kunne bruke regnskapsligningen',
    'Kjenne til begrepet god regnskapsskikk (GRS)',
    'Kjenne de viktigste regnskapsprinsippene',
    'Forstå hvordan regnskapet skal gi et rettvisende bilde',
  ],
  content: [
    {
      id: 'oks-1-5-intro',
      type: 'text',
      content: `## Regnskapsligningen

Regnskapet bygger på en grunnleggende ligning som alltid skal gå opp. Denne ligningen er fundamentet for all bokføring og regnskap.`,
    },
    {
      id: 'oks-1-5-def-1',
      type: 'definition',
      title: 'Regnskapsligningen',
      content: `Eiendeler = Egenkapital + Gjeld

Også skrevet som: **Eiendeler = Gjeld + Egenkapital** eller **E = G + EK**

Dette betyr at alt bedriften eier (eiendeler) er finansiert enten med egenkapital (eiernes penger) eller gjeld (lånte penger).`,
    },
    {
      id: 'oks-1-5-text-2',
      type: 'text',
      content: `### Forklaring av regnskapsligningen

**Eiendeler (E):** Alt bedriften eier
- Anleggsmidler: Bygninger, maskiner, biler (klasse 1)
- Omløpsmidler: Varelager, bank, kundefordringer (klasse 2)

**Egenkapital (EK):** Eiernes penger
- Penger eierne har skutt inn
- Opparbeidet overskudd gjennom årene (klasse 3)

**Gjeld (G):** Penger bedriften skylder
- Langsiktig gjeld: Lån som skal betales over mer enn 1 år (klasse 4)
- Kortsiktig gjeld: Leverandørgjeld, skyldig skatt, osv. (deler av klasse 2)

**Logikken:**
Hvis bedriften eier 1 million kroner i eiendeler, må disse eiendelene være finansiert på én av to måter:
1. Med eiernes egne penger (egenkapital)
2. Med lånte penger (gjeld)

**Eksempel:**
En bedrift har:
- Bygning: 5 mill. kr
- Bank: 1 mill. kr
- **Totalt eiendeler: 6 mill. kr**

Disse er finansiert med:
- Egenkapital: 4 mill. kr (eiernes penger)
- Lån: 2 mill. kr (lånte penger)
- **Total finansiering: 6 mill. kr**

Regnskapsligningen: 6 = 4 + 2 ✓`,
    },
    {
      id: 'oks-1-5-example-1',
      type: 'example',
      title: 'Regnskapsligningen i praksis',
      problem: `En bedrift starter med følgende:
- Eier setter inn 300 000 kr (egenkapital)
- Tar opp lån på 200 000 kr
- Kjøper inventar for 100 000 kr
- Resten (400 000 kr) står i banken

Sett opp regnskapsligningen.`,
      solution: `**Eiendeler:**
- Inventar: 100 000 kr
- Bank: 400 000 kr
- **Sum eiendeler: 500 000 kr**

**Finansiering:**
- Egenkapital: 300 000 kr
- Gjeld (lån): 200 000 kr
- **Sum finansiering: 500 000 kr**

**Regnskapsligningen:**
$$E = EK + G$$
$$500\\,000 = 300\\,000 + 200\\,000$$ ✓

**Forklaring:**
Bedriften eier totalt 500 000 kr (inventar + bank). Disse eiendelene er finansiert med 300 000 kr fra eieren og 200 000 kr lånte penger.`,
    },
    {
      id: 'oks-1-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'oks-1-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En bedrift har eiendeler på 2 mill. kr og gjeld på 800 000 kr. Hvor mye er egenkapitalen?',
        options: [
          '2 800 000 kr',
          '1 200 000 kr',
          '800 000 kr',
          '2 000 000 kr',
        ],
        solution: '1 200 000 kr',
        explanation: 'Regnskapsligningen: E = EK + G, derfor EK = E - G = 2 000 000 - 800 000 = 1 200 000 kr.',
      },
    },
    {
      id: 'oks-1-5-text-3',
      type: 'text',
      content: `### Hvordan transaksjoner påvirker regnskapsligningen

Hver transaksjon påvirker regnskapsligningen, men ligningen skal alltid gå opp.

**Type transaksjoner:**

**1. Bytte mellom eiendeler** (E = E)
- Eksempel: Kjøpe varer for kontanter
- Bank reduseres, varelager øker
- Regnskapsligningen påvirkes ikke (begge sider uendret)

**2. Øke eiendeler og gjeld** (E↑ = G↑)
- Eksempel: Ta opp lån
- Bank øker, lån øker
- Begge sider øker like mye

**3. Øke eiendeler og egenkapital** (E↑ = EK↑)
- Eksempel: Salgsinntekt
- Bank/kundefordringer øker, inntekt øker egenkapital
- Begge sider øker like mye

**4. Redusere eiendeler og egenkapital** (E↓ = EK↓)
- Eksempel: Betale kostnad
- Bank reduseres, kostnad reduserer egenkapital
- Begge sider reduseres like mye`,
    },
    {
      id: 'oks-1-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'oks-1-5-oppg-2',
        number: '2',
        type: 'classic',
        task: 'En bedrift har:\n- Eiendeler: 1 500 000 kr\n- Egenkapital: 900 000 kr\n\nBedriften tar opp et lån på 300 000 kr.\n\na) Hva er gjelden før lånet?\nb) Hva er eiendeler, gjeld og egenkapital etter lånet?\nc) Vis at regnskapsligningen stemmer.',
        solution: `**a) Gjeld før lånet:**
Regnskapsligningen: E = EK + G
1 500 000 = 900 000 + G
G = 1 500 000 - 900 000 = 600 000 kr

**b) Etter lånet på 300 000 kr:**

Når bedriften tar opp lån:
- Bank øker med 300 000 kr (eiendel øker)
- Lån øker med 300 000 kr (gjeld øker)

**Nye tall:**
- Eiendeler: 1 500 000 + 300 000 = 1 800 000 kr
- Gjeld: 600 000 + 300 000 = 900 000 kr
- Egenkapital: 900 000 kr (uendret)

**c) Kontroll av regnskapsligningen:**
$$E = EK + G$$
$$1\\,800\\,000 = 900\\,000 + 900\\,000$$ ✓

Ligningen stemmer!`,
      },
    },
    {
      id: 'oks-1-5-text-4',
      type: 'text',
      content: `### God regnskapsskikk (GRS)

Norske bedrifter skal ikke bare følge bokføringsloven og regnskapsloven, men også **god regnskapsskikk** (GRS).`,
    },
    {
      id: 'oks-1-5-def-2',
      type: 'definition',
      title: 'God regnskapsskikk (GRS)',
      content: `God regnskapsskikk er uskrevne normer og praksis for hvordan regnskap skal føres. Det er spillereglene for regnskap som har utviklet seg over tid og som alle skal følge.`,
    },
    {
      id: 'oks-1-5-text-5',
      type: 'text',
      content: `### Grunnleggende regnskapsprinsipper

God regnskapsskikk bygger på flere viktige prinsipper:

**1. Transaksjonsprinsippet**
- Bare faktiske transaksjoner skal bokføres
- Alt må dokumenteres med bilag
- Ingen "fiktive" eller planlagte transaksjoner

**2. Forsiktighetsprinsippet**
- Vær forsiktig med å ta inn inntekter
- Vær rask med å ta inn kostnader og tap
- "Ikke ta skinnet av bjørnen før den er skutt"
- Eksempel: Bokfør ikke salg før varene er levert

**3. Opptjeningsprinsippet**
- Inntekt skal bokføres når den er opptjent (ikke nødvendigvis når du får betalt)
- Eksempel: Du fakturerer kunde i desember, men får betalt i januar → inntekten hører til desember

**4. Sammenstillingsprinsippet (matching)**
- Kostnader skal bokføres samme periode som tilhørende inntekt
- Eksempel: Hvis du selger varer i mars, skal også kostnaden for varene bokføres i mars

**5. Regnskapsmessig forsvarlighetsprinsippet**
- Regnskapet skal gi et "rettvisende bilde" av bedriftens økonomi
- Ikke jukse eller pynte på tallene
- Være ærlig om bedriftens faktiske situasjon

**6. Konsekvens i regnskapsprinsippene**
- Bruk samme metoder fra år til år
- Gjør ting likt hver gang
- Gjør det mulig å sammenligne år`,
    },
    {
      id: 'oks-1-5-example-2',
      type: 'example',
      title: 'Regnskapsprinsipper i praksis',
      problem: `En bedrift har følgende situasjoner. Hvilke regnskapsprinsipper gjelder?

a) Bedriften har solgt varer i desember for 100 000 kr, men kunden betaler først i januar.
b) Bedriften vurderer å inngå en kontrakt verdt 500 000 kr, men kontrakten er ikke signert ennå.
c) Bedriften har fått en faktura på 20 000 kr i desember, men betaler den ikke før i januar.`,
      solution: `**a) Salg i desember, betaling i januar (100 000 kr)**

**Prinsipp: Opptjeningsprinsippet**

Inntekten skal bokføres når den er opptjent, ikke når pengene kommer inn. Varene er solgt og levert i desember, så inntekten hører til desember.

**Bokføring i desember:**
- Debet Kundefordringer: 100 000 kr
- Kredit Salgsinntekt: 100 000 kr

**Bokføring i januar (når betaling kommer):**
- Debet Bank: 100 000 kr
- Kredit Kundefordringer: 100 000 kr

---

**b) Mulig kontrakt på 500 000 kr (ikke signert)**

**Prinsipp: Transaksjonsprinsippet**

Denne skal IKKE bokføres! En mulig fremtidig kontrakt er ikke en transaksjon. Først når kontrakten er signert og arbeidet er utført, kan det bokføres.

---

**c) Faktura på 20 000 kr i desember, betaler i januar**

**Prinsipp: Sammenstillingsprinsippet**

Kostnaden hører til desember (når tjenesten/varen er mottatt), selv om betalingen skjer i januar.

**Bokføring i desember:**
- Debet Kostnad: 20 000 kr
- Kredit Leverandørgjeld: 20 000 kr

**Bokføring i januar (når betaling skjer):**
- Debet Leverandørgjeld: 20 000 kr
- Kredit Bank: 20 000 kr`,
    },
    {
      id: 'oks-1-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'oks-1-5-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilket regnskapsprinsipp sier at kostnader skal bokføres i samme periode som tilhørende inntekter?',
        options: [
          'Transaksjonsprinsippet',
          'Forsiktighetsprinsippet',
          'Sammenstillingsprinsippet',
          'Konsekvens prinsippet',
        ],
        solution: 'Sammenstillingsprinsippet',
        explanation: 'Sammenstillingsprinsippet (matching principle) sier at kostnader skal "matches" med inntektene de genererer, og bokføres i samme periode.',
      },
    },
    {
      id: 'oks-1-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'oks-1-5-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forsiktighetsprinsippet med et eksempel fra en butikk som selger varer.',
        solution: `**Forsiktighetsprinsippet:**

Forsiktighetsprinsippet betyr at man skal være forsiktig (konservativ) når man vurderer inntekter og kostnader:
- **Inntekter:** Vær forsiktig med å bokføre (vent til du er sikker)
- **Kostnader/tap:** Vær rask med å bokføre (ta dem med så fort du aner dem)

**Eksempel fra butikk:**

**Situasjon 1 - Mulig salg:**
En kunde har sett på en sofa til 15 000 kr og sier "Jeg kommer tilbake i morgen og kjøper den".

**Forsiktighetsprinsippet:** IKKE bokfør salget ennå! Kunden kan ombestemme seg. Vent til kunden faktisk kjøper og betaler.

**Situasjon 2 - Skadet vare:**
En sofa i butikken har fått en skade. Den kostet 10 000 kr, men kan nå bare selges for 5 000 kr.

**Forsiktighetsprinsippet:** Bokfør tapet (5 000 kr) med en gang! Ikke vent til sofaen faktisk blir solgt.

**Konklusjon:**
Forsiktighetsprinsippet sørger for at regnskapet ikke blir for optimistisk. Det er bedre å undervurdere enn å overvurdere bedriftens økonomiske situasjon.

**Motto:** "Håp det beste, forbered deg på det verste" (i regnskapet).`,
      },
    },
    {
      id: 'oks-1-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'oks-1-5-oppg-5',
        number: '5',
        type: 'classic',
        task: 'En bedrift har:\n- Bankinnskudd: 400 000 kr\n- Varelager: 200 000 kr\n- Inventar: 300 000 kr\n- Lån: 500 000 kr\n\nBeregn egenkapitalen ved hjelp av regnskapsligningen.',
        solution: `**Regnskapsligningen:**
$$E = EK + G$$

Derfor:
$$EK = E - G$$

**Eiendeler (E):**
- Bankinnskudd: 400 000 kr
- Varelager: 200 000 kr
- Inventar: 300 000 kr
- **Sum eiendeler: 900 000 kr**

**Gjeld (G):**
- Lån: 500 000 kr

**Egenkapital (EK):**
$$EK = E - G$$
$$EK = 900\\,000 - 500\\,000$$
$$EK = 400\\,000 \\text{ kr}$$

**Svar:** Egenkapitalen er 400 000 kr.

**Kontroll:**
$$E = EK + G$$
$$900\\,000 = 400\\,000 + 500\\,000$$ ✓`,
      },
    },
    {
      id: 'oks-1-5-text-6',
      type: 'text',
      content: `## --- Samleoppgaver ---`,
    },
    {
      id: 'oks-1-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'oks-1-5-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'En butikk har følgende situasjon 31. desember:\n\n- De har levert varer til en kunde for 50 000 kr i desember, men kunden betaler ikke før 15. januar\n- De har mottatt en faktura for strøm i desember på 8 000 kr, men betaler den ikke før i januar\n- En kunde har bestilt varer for 100 000 kr som skal leveres i januar. Kunden har betalt forskudd på 30 000 kr i desember.\n\nForklaring hvordan hver situasjon skal behandles i henhold til regnskapsprinsippene. Hvilke bokføringer hører til desember?',
        solution: `**Situasjon 1: Levert varer i desember (50 000 kr), betaling i januar**

**Prinsipp: Opptjeningsprinsippet**

Inntekten er opptjent i desember (varene er levert), så den skal bokføres i desember selv om betalingen kommer i januar.

**Bokføring i desember:**
- Debet Kundefordringer: 50 000 kr
- Kredit Salgsinntekt: 50 000 kr

---

**Situasjon 2: Strømfaktura desember (8 000 kr), betaling i januar**

**Prinsipp: Sammenstillingsprinsippet**

Strømmen er brukt i desember, så kostnaden hører til desember selv om fakturaen betales i januar.

**Bokføring i desember:**
- Debet Strømkostnad: 8 000 kr
- Kredit Leverandørgjeld (eller Påløpte kostnader): 8 000 kr

---

**Situasjon 3: Varer leveres i januar (100 000 kr), men forskudd på 30 000 kr mottatt i desember**

**Prinsipp: Opptjeningsprinsippet + Transaksjonsprinsippet**

**Analyse:**
- Varene leveres først i januar → inntekten er IKKE opptjent i desember
- Men bedriften har mottatt 30 000 kr → dette MÅ bokføres

**Bokføring i desember:**
- Debet Bank: 30 000 kr
- Kredit Forskudd fra kunde (gjeld): 30 000 kr

**IKKE bokfør salgsinntekt i desember!** Inntekten bokføres først når varene leveres i januar:

**Bokføring i januar (når varer leveres):**
- Debet Kundefordringer: 70 000 kr (restbeløp)
- Debet Forskudd fra kunde: 30 000 kr (gjeld reduseres)
- Kredit Salgsinntekt: 100 000 kr

---

**Oppsummering for desember:**
Tre bokføringer hører til desember:
1. Kundefordring 50 000 kr (salg)
2. Strømkostnad 8 000 kr (påløpt kostnad)
3. Forskudd fra kunde 30 000 kr (gjeld, IKKE inntekt)

**Viktig:** Penger inn/ut betyr ikke automatisk inntekt/kostnad. Det er når du *opptjener* inntekten eller *pådrar deg* kostnaden som teller!`,
      },
    },
    {
      id: 'oks-1-5-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'oks-1-5-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En nystiftet bedrift har følgende hendelser i oppstartsåret:\n\n1. Eiere skyter inn 500 000 kr i egenkapital\n2. Tar opp lån på 300 000 kr\n3. Kjøper inventar for 200 000 kr\n4. Kjøper varelager for 150 000 kr\n5. Selger varer for 250 000 kr (varekostnad: 100 000 kr). 200 000 kr er betalt, 50 000 kr på kreditt\n6. Betaler driftskostnader (husleie, strøm, etc.) for 80 000 kr\n\nSett opp:\na) Regnskapsligningen før og etter hver transaksjon\nb) Beregn årsresultatet\nc) Vis at regnskapsligningen stemmer etter alle transaksjoner',
        solution: `**Startposisjon:**
E = 0, EK = 0, G = 0

---

**Etter transaksjon 1: Egenkapitalinnskudd 500 000 kr**
- Bank øker: +500 000
- Egenkapital øker: +500 000

E = 500 000, EK = 500 000, G = 0
✓ 500 000 = 500 000 + 0

---

**Etter transaksjon 2: Lån 300 000 kr**
- Bank øker: +300 000
- Gjeld øker: +300 000

E = 800 000, EK = 500 000, G = 300 000
✓ 800 000 = 500 000 + 300 000

---

**Etter transaksjon 3: Kjøp inventar 200 000 kr**
- Inventar øker: +200 000
- Bank reduseres: -200 000
- (Bytte mellom eiendeler, sum eiendeler uendret)

E = 800 000, EK = 500 000, G = 300 000
✓ 800 000 = 500 000 + 300 000

---

**Etter transaksjon 4: Kjøp varelager 150 000 kr**
- Varelager øker: +150 000
- Bank reduseres: -150 000
- (Bytte mellom eiendeler)

E = 800 000, EK = 500 000, G = 300 000
✓ 800 000 = 500 000 + 300 000

---

**Etter transaksjon 5: Salg 250 000 kr (varekostnad 100 000 kr)**

**Del 1 - Salg:**
- Bank øker: +200 000
- Kundefordringer øker: +50 000
- Salgsinntekt (øker EK): +250 000

**Del 2 - Varekostnad:**
- Varelager reduseres: -100 000
- Varekostnad (reduserer EK): -100 000

**Netto effekt:**
- Eiendeler: +200 000 +50 000 -100 000 = +150 000
- Egenkapital: +250 000 -100 000 = +150 000 (netto resultat)

E = 950 000, EK = 650 000, G = 300 000
✓ 950 000 = 650 000 + 300 000

---

**Etter transaksjon 6: Driftskostnader 80 000 kr**
- Bank reduseres: -80 000
- Kostnader (reduserer EK): -80 000

E = 870 000, EK = 570 000, G = 300 000
✓ 870 000 = 570 000 + 300 000

---

**b) Årsresultat:**

**Inntekter:**
- Salgsinntekt: 250 000 kr

**Kostnader:**
- Varekostnad: 100 000 kr
- Driftskostnader: 80 000 kr
- **Sum kostnader: 180 000 kr**

**Årsresultat:**
250 000 - 180 000 = **70 000 kr overskudd**

---

**c) Sluttposisjon og kontroll:**

**Eiendeler (E):**
- Inventar: 200 000 kr
- Varelager: 150 000 - 100 000 = 50 000 kr
- Kundefordringer: 50 000 kr
- Bank: 500 000 + 300 000 - 200 000 - 150 000 + 200 000 - 80 000 = 570 000 kr
- **Sum eiendeler: 870 000 kr**

**Egenkapital (EK):**
- Innskutt EK: 500 000 kr
- Årsresultat: 70 000 kr
- **Sum egenkapital: 570 000 kr**

**Gjeld (G):**
- Lån: 300 000 kr

**Regnskapsligningen:**
$$E = EK + G$$
$$870\\,000 = 570\\,000 + 300\\,000$$ ✓

**Ligningen stemmer!**

**Forklaring:**
Egenkapitalen har økt fra 500 000 kr til 570 000 kr på grunn av årsresultatet på 70 000 kr. Dette er logisk fordi bedriften har gått med overskudd.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

export const OKONOMISTYRING_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMISTYRING_1_1,
  CHAPTER_OKONOMISTYRING_1_2,
  CHAPTER_OKONOMISTYRING_1_3,
  CHAPTER_OKONOMISTYRING_1_4,
  CHAPTER_OKONOMISTYRING_1_5,
];
