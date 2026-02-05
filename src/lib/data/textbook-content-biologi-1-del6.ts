/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Kapittel 6 Delkapitler
 *
 * Utvider Kapittel 6: Evolusjon og naturlig utvalg til 5 delkapitler
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Evolusjonsteoriens historie
// ============================================================================

export const CHAPTER_BIOLOGI_1_6_1: TextbookChapter = {
  id: 'biologi-1-6-1',
  courseId: 'biologi-1',
  chapterNumber: '6.1',
  title: 'Evolusjonsteoriens historie',
  description: 'Fra Lamarck til Darwin og Wallace - utviklingen av evolusjonsteorien og dens historiske kontekst.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for tidlige evolusjonsteorier',
    'beskrive Darwins vitenskapelige reise og observasjoner',
    'forklare Wallace sitt bidrag til evolusjonsteori',
    'drøfte evolusjonsteoriens historiske betydning',
  ],
  content: [
    {
      id: 'bio1-6-1-intro',
      type: 'text',
      content: `# Evolusjonsteoriens historie

Tanken om at arter forandrer seg over tid er ikke ny, men det tok lang tid før forskere utviklet en vitenskapelig teori som kunne forklare hvordan dette skjer. I dette kapittelet ser vi på hvordan evolusjonsteorien utviklet seg fra tidlige spekulasjoner til moderne vitenskap.

## Tidlige tanker om livets mangfold

Gjennom historien har mennesker undret seg over livets mangfold. Lenge dominerte tanken om at artene var skapt perfekte og uforanderlige. Det var først på 1700- og 1800-tallet at forskere begynte å utfordre denne ideen systematisk.`,
    },
    {
      id: 'bio1-6-1-def-evolusjon',
      type: 'definition',
      title: 'Evolusjon',
      content: 'Evolusjon er endringer i arvelige egenskaper i en populasjon over generasjoner. Disse endringene skyldes prosesser som naturlig utvalg, genetisk drift, mutasjoner og genflyt. Evolusjon forklarer livets mangfold og tilpasninger til ulike miljøer.',
    },
    {
      id: 'bio1-6-1-lamarck',
      type: 'text',
      content: `## Jean-Baptiste Lamarck (1744-1829)

Lamarck var en av de første som foreslo en sammenhengende teori om evolusjon. Han publiserte sine ideer i verket "Philosophie Zoologique" i 1809.

### Lamarcks hovedideer

**1. Bruk og ikke-bruk**
- Organer som brukes mye, utvikles og styrkes
- Organer som ikke brukes, forfaller og reduseres

**2. Arv av ervervede egenskaper**
- Egenskaper som et individ utvikler i løpet av livet, kan arves til avkommet
- Eksempel: Smedens sterke armer arves til barna

**3. Indre streben mot kompleksitet**
- Organismer har en naturlig tendens til å bli mer komplekse
- Enklere organismer utvikler seg stadig mot høyere former

### Hvorfor Lamarck tok feil

Selv om Lamarck bidro til å etablere evolusjon som vitenskapelig tema, var hans mekanismer feil:

- **Arvede egenskaper virker ikke slik**: Trening endrer ikke DNA
- **Ingen molekylær mekanisme**: Ervervede egenskaper kan ikke overføres til kjønnsceller
- **Modern genetikk**: Vi vet nå at arv skjer gjennom gener, ikke bruk/ikke-bruk`,
    },
    {
      id: 'bio1-6-1-def-lamarckisme',
      type: 'definition',
      title: 'Lamarckisme',
      content: 'Lamarckisme er teorien om at egenskaper som et individ erverver i løpet av livet kan arves til avkommet. Denne teorien er forkastet i moderne biologi. Et klassisk eksempel er ideen om at sjiraffens hals ble lang fordi forfedrene strakk seg etter blader, og denne lange halsen ble arvet. Vi vet nå at dette ikke stemmer - kun genetiske endringer kan arves.',
    },
    {
      id: 'bio1-6-1-darwin',
      type: 'text',
      content: `## Charles Darwin (1809-1882)

Charles Darwin regnes som den moderne evolusjonsteoriens far. Hans bidrag var ikke bare å foreslå at evolusjon skjer, men å identifisere mekanismen: naturlig utvalg.

### Beagle-reisen (1831-1836)

Darwin deltok som naturvitenskapsmann på HMS Beagle, et kartleggingsfartøy som reiste rundt verden i fem år.

**Viktige observasjoner:**

1. **Galapagosøyene**
   - Hver øy hadde egne varianter av finker
   - Nebbene var tilpasset ulike matkilder
   - Øyene hadde lignende, men distinkte skilpadder

2. **Sør-Amerika**
   - Fossiler av utdødde kjempedovendyr
   - Likhet mellom fossiler og nålevende arter
   - Geografisk distribusjon av arter

3. **Australia**
   - Unike pungdyr som ikke fantes andre steder
   - Konvergent evolusjon med placentale pattedyr

### Etter reisen

Darwin brukte over 20 år på å utvikle sin teori:
- Samlet bevis fra avl, fossiler, biogeografi og anatomi
- Korresponderte med andre forskere
- Utsatte publisering fordi han fryktet kontrovers`,
    },
    {
      id: 'bio1-6-1-wallace',
      type: 'text',
      content: `## Alfred Russel Wallace (1823-1913)

Wallace var en britisk naturvitenskapsmann som uavhengig utviklet en teori om evolusjon ved naturlig utvalg.

### Wallace sitt bidrag

**Feltarbeid i Amazonas og Sørøst-Asia:**
- Samlet tusenvis av arter
- Observerte geografisk distribusjon av arter
- Identifiserte "Wallace-linjen" som skiller asiatisk og australsk fauna

**1858: Brevet til Darwin**
- Wallace sendte Darwin et essay som beskrev naturlig utvalg
- Darwin ble sjokkert over likheten med sine egne ideer
- De ble enige om å presentere teorien sammen

### Felles presentasjon

1. juli 1858 ble Darwins og Wallace sine arbeider presentert sammen for Linnean Society i London. Dette var det offisielle startskuddet for evolusjonsteorien.

### "On the Origin of Species" (1859)

Darwin publiserte sitt hovedverk året etter:
- Presenterte omfattende bevis for evolusjon
- Beskrev naturlig utvalg som hovedmekanisme
- Ble raskt en vitenskapelig sensasjon
- Solgte ut første opplag på én dag`,
    },
    {
      id: 'bio1-6-1-def-naturlig-utvalg',
      type: 'definition',
      title: 'Naturlig utvalg (Darwin-Wallace)',
      content: 'Naturlig utvalg er prosessen der individer med arvelige egenskaper som gir bedre overlevelse og reproduksjon i et gitt miljø, får flere overlevende avkom. Over generasjoner øker frekvensen av disse gunstige egenskapene i populasjonen. Darwin og Wallace utviklet denne teorien uavhengig av hverandre.',
    },
    {
      id: 'bio1-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Darwins finker',
      problem: 'Forklar hvordan Darwins observasjoner av finker på Galapagosøyene bidro til utviklingen av evolusjonsteorien.',
      solution: `**Løsning:**

**Observasjoner på Galapagosøyene:**
- Darwin fant 13 ulike finkearter fordelt på øyene
- Hver art hadde ulikt nebb tilpasset sin føde
- Store, kraftige nebb for å knekke nøtter
- Lange, tynne nebb for å fange insekter
- Spisse nebb for å spise frø

**Darwins konklusjoner:**
1. Alle finkene stammet fra en felles forfader fra fastlandet
2. Etter ankomst til øyene spredde de seg til ulike nisjer
3. Naturlig utvalg favoriserte ulike nebbtyper på ulike øyer
4. Over tid ble populasjonene så forskjellige at de ble egne arter

**Betydning:**
- Viste at arter ikke er statiske, men kan endre seg
- Demonstrerte tilpasning til lokale miljøer
- Illustrerte adaptiv radiasjon (én art gir opphav til mange)

**Modern forskning:**
Peter og Rosemary Grant har studert Darwins finker siden 1973 og dokumentert naturlig utvalg i sanntid under tørkeperioder.`,
    },
    {
      id: 'bio1-6-1-example-2',
      type: 'example',
      title: 'Eksempel: Sammenligning Lamarck vs Darwin',
      problem: 'Hvordan ville Lamarck og Darwin forklare sjiraffens lange hals?',
      solution: `**Løsning:**

**Lamarcks forklaring:**
1. Sjiraffer strakk seg etter blader høyt oppe i trærne
2. Denne strekkingen forlenget halsen litt i løpet av livet
3. Den forlengede halsen ble arvet til avkommet
4. Over generasjoner ble halsen stadig lengre
*Problem: Ervervede egenskaper arves ikke*

**Darwins forklaring:**
1. Sjiraffens forfedre hadde variasjon i halslengde (naturlig variasjon)
2. Individer med lengre hals nådde flere blader
3. Disse overlevde bedre og fikk flere avkom (naturlig utvalg)
4. Avkommet arvet genene for lang hals (arv)
5. Over generasjoner økte halslengden i populasjonen (evolusjon)

**Nøkkelforskjell:**
- Lamarck: Individet tilpasser seg, og tilpasningen arves
- Darwin: Variasjon finnes allerede, utvalg velger gunstige varianter

**Hvorfor Darwin har rett:**
- Genetikken støtter Darwin: Kun DNA-endringer arves
- Trening endrer ikke genene i kjønnscellene
- Moderne forskning bekrefter naturlig utvalg`,
    },
  ],
  exercises: [
    {
      id: 'bio1-6-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem foreslo at ervervede egenskaper kunne arves?',
      options: [
        { id: 'a', text: 'Jean-Baptiste Lamarck', isCorrect: true },
        { id: 'b', text: 'Charles Darwin', isCorrect: false },
        { id: 'c', text: 'Alfred Russel Wallace', isCorrect: false },
        { id: 'd', text: 'Gregor Mendel', isCorrect: false },
      ],
      solution: 'Lamarck foreslo at egenskaper som et individ erverver i løpet av livet (som sterkere muskler fra trening) kunne arves til avkommet. Dette kalles lamarckisme og er forkastet i moderne biologi.',
    },
    {
      id: 'bio1-6-1-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken reise var avgjørende for utviklingen av Darwins evolusjonsteori?',
      options: [
        { id: 'a', text: 'HMS Beagle-reisen (1831-1836)', isCorrect: true },
        { id: 'b', text: 'Endeavour-reisen (1768-1771)', isCorrect: false },
        { id: 'c', text: 'Discovery-reisen (1901-1904)', isCorrect: false },
        { id: 'd', text: 'Challenger-ekspedisjonen (1872-1876)', isCorrect: false },
      ],
      solution: 'Darwin deltok som naturvitenskapsmann på HMS Beagle, som kartla kysten av Sør-Amerika. Under reisen besøkte han blant annet Galapagosøyene, der han gjorde viktige observasjoner som senere bidro til evolusjonsteorien.',
    },
    {
      id: 'bio1-6-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor Lamarcks teori om arv av ervervede egenskaper ikke stemmer med moderne genetikk.',
      solution: 'Lamarcks teori stemmer ikke fordi: 1) Kun endringer i DNA i kjønnscellene kan arves til avkommet. 2) Trening eller bruk av organer endrer ikke DNA-sekvensen i kjønnscellene. 3) Somatiske celler (kroppsceller) og kjønnsceller har separate utviklingsveier. 4) Epigenetiske endringer kan i noen tilfeller arves, men dette skiller seg fra Lamarcks teori og er begrenset til få generasjoner.',
    },
    {
      id: 'bio1-6-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv minst tre viktige observasjoner Darwin gjorde på Beagle-reisen som bidro til hans teori.',
      solution: '1) Galapagosøyene: Ulike finkearter med forskjellige nebb tilpasset ulike matkilder på hver øy, som viste tilpasning til lokale forhold. 2) Fossiler i Sør-Amerika: Fossiler av utdødde kjempedovendyr som lignet nålevende former, noe som tydet på endring over tid. 3) Biogeografisk distribusjon: Lignende, men distinkte arter på nærliggende øyer eller landmasser, som tydet på felles opphav med påfølgende divergens. 4) Australske pungdyr som fylte samme roller som placentale pattedyr andre steder (konvergent evolusjon).',
    },
    {
      id: 'bio1-6-1-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva var Alfred Russel Wallace sitt bidrag til evolusjonsteorien?',
      options: [
        { id: 'a', text: 'Han utviklet uavhengig en teori om naturlig utvalg', isCorrect: true },
        { id: 'b', text: 'Han oppdaget DNA-molekylets struktur', isCorrect: false },
        { id: 'c', text: 'Han motbeviste Darwins teori', isCorrect: false },
        { id: 'd', text: 'Han fant fossilbevis som støttet lamarckisme', isCorrect: false },
      ],
      solution: 'Wallace utviklet uavhengig av Darwin en teori om evolusjon ved naturlig utvalg basert på sitt feltarbeid i Sørøst-Asia. Hans essay til Darwin i 1858 førte til at de presenterte teorien sammen for Linnean Society.',
    },
    {
      id: 'bio1-6-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter hvorfor det tok over 20 år fra Beagle-reisen til Darwin publiserte "On the Origin of Species". Hvilke faktorer bidro til forsinkelsen?',
      solution: 'Flere faktorer bidro til forsinkelsen: 1) Darwin ønsket omfattende bevis før han publiserte - han samlet data fra avl, fossiler, biogeografi og anatomi. 2) Han fryktet kontrovers og motstand, spesielt fra kirken, da teorien utfordret religiøse skapelsesberetninger. 3) Hans kone Emma var religiøs, og han var bekymret for hvordan teorien ville påvirke henne. 4) Darwin hadde kronisk sykdom som begrenset hans arbeidskapasitet. 5) Han ville være helt sikker på at teorien var vanntett. Først da han mottok Wallace sitt essay i 1858 og innså at andre hadde kommet til samme konklusjoner, bestemte han seg for å publisere.',
    },
  ],
};

// ============================================================================
// Kapittel 6.2: Naturlig utvalg
// ============================================================================

export const CHAPTER_BIOLOGI_1_6_2: TextbookChapter = {
  id: 'biologi-1-6-2',
  courseId: 'biologi-1',
  chapterNumber: '6.2',
  title: 'Naturlig utvalg',
  description: 'Mekanismene bak naturlig utvalg: variasjon, arv, overlevelse og reproduksjon. Fitness, adaptasjon og ulike typer utvalg.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare betingelsene for naturlig utvalg',
    'beskrive begrepene fitness og adaptasjon',
    'gjøre rede for ulike typer naturlig utvalg',
    'anvende naturlig utvalg på konkrete eksempler',
  ],
  content: [
    {
      id: 'bio1-6-2-intro',
      type: 'text',
      content: `# Naturlig utvalg

Naturlig utvalg er hovedmekanismen for evolusjonær tilpasning. Det er en prosess der miljøet "velger" hvilke individer som overlever og reproduserer, basert på deres egenskaper. Over tid fører dette til at populasjoner blir bedre tilpasset sine miljøer.

## Betingelser for naturlig utvalg

For at naturlig utvalg skal kunne virke, må fire betingelser være oppfylt:

1. **Variasjon** - Individer i populasjonen må variere i egenskaper
2. **Arv** - Variasjonen må være arvelig
3. **Overlevelse** - Noen egenskaper må gi bedre overlevelse
4. **Reproduksjon** - De som overlever må reprodusere mer`,
    },
    {
      id: 'bio1-6-2-def-fitness',
      type: 'definition',
      title: 'Biologisk fitness',
      content: 'Biologisk fitness er et mål på et individs evne til å overleve og reprodusere i et gitt miljø. Det måles ofte som antall overlevende avkom som selv reproduserer. Høy fitness betyr at individet bidrar med mange gener til neste generasjon. Fitness er relativt - det avhenger av miljøet og konkurrentene.',
    },
    {
      id: 'bio1-6-2-variasjon',
      type: 'text',
      content: `## Variasjon i populasjoner

Variasjon er råmaterialet for evolusjon. Uten variasjon kan ikke naturlig utvalg virke.

### Kilder til genetisk variasjon

**1. Mutasjoner**
- Tilfeldige endringer i DNA
- Skaper nye alleler
- De fleste er nøytrale eller skadelige
- Sjelden fordelaktige, men viktige for evolusjon

**2. Seksuell reproduksjon**
- Overkrysning under meiose
- Uavhengig assortiment av kromosomer
- Tilfeldig befruktning
- Gir enorm variasjon i avkom

**3. Genflyt**
- Innvandring av nye alleler fra andre populasjoner
- Kan introdusere ny variasjon

### Typer variasjon

**Kontinuerlig variasjon:**
- Gradvise forskjeller (høyde, vekt)
- Påvirkes av mange gener og miljø
- Normalfordelt i populasjonen

**Diskontinuerlig variasjon:**
- Klare kategorier (blodtype, øyenfarge)
- Ofte kontrollert av få gener
- Ingen mellomformer`,
    },
    {
      id: 'bio1-6-2-adaptasjon',
      type: 'text',
      content: `## Adaptasjon (tilpasning)

Adaptasjoner er arvelige egenskaper som øker fitness i et bestemt miljø. De er resultatet av naturlig utvalg over mange generasjoner.

### Typer adaptasjoner

**Morfologiske (strukturelle):**
- Kamuflasje (isbjørnens hvite pels)
- Spesialiserte kroppsdeler (kolibrienes lange nebb)
- Beskyttende strukturer (pigger, skall)

**Fysiologiske:**
- Giftproduksjon (slanger, edderkopper)
- Temperaturregulering (svetting, skjelving)
- Vannkonservering (kamelens nyrer)

**Atferdsmessige:**
- Migrasjon (trekkfugler)
- Parringsritualer (påfuglens hale)
- Sosial organisering (ulveflokker)

### Begrensninger for adaptasjon

- **Trade-offs**: Forbedring i én egenskap kan koste i en annen
- **Historiske begrensninger**: Evolusjon bygger på eksisterende strukturer
- **Genetiske begrensninger**: Ikke all variasjon er tilgjengelig
- **Tidsbegrensninger**: Miljøet kan endre seg raskere enn evolusjon`,
    },
    {
      id: 'bio1-6-2-def-adaptasjon',
      type: 'definition',
      title: 'Adaptasjon',
      content: 'En adaptasjon er en arvelig egenskap som har utviklet seg gjennom naturlig utvalg fordi den øker organismens fitness i et bestemt miljø. Adaptasjoner kan være strukturelle (som kamuflasje), fysiologiske (som giftproduksjon) eller atferdsmessige (som migrasjon). Alle adaptasjoner representerer kompromisser og er tilpasset spesifikke miljøforhold.',
    },
    {
      id: 'bio1-6-2-typer-utvalg',
      type: 'text',
      content: `## Typer naturlig utvalg

Naturlig utvalg kan virke på ulike måter avhengig av hvilke fenotyper som favoriseres.

### 1. Retningsbestemt utvalg (Directional selection)

**Kjennetegn:**
- Favoriserer én ekstrem fenotype
- Flytter populasjonens gjennomsnitt i én retning
- Vanlig når miljøet endrer seg

**Eksempler:**
- Økt antibiotikaresistens hos bakterier
- Større hjerner hos menneskelinjen
- Mørkere bjørkemålere under industrialiseringen

### 2. Stabiliserende utvalg (Stabilizing selection)

**Kjennetegn:**
- Favoriserer gjennomsnittlig fenotype
- Ekstreme fenotyper selekteres mot
- Vanlig i stabile miljøer

**Eksempler:**
- Fødselsvekt hos mennesker (middels vekt gir best overlevelse)
- Eggstørrelse hos fugler
- Blomstringstid hos planter

### 3. Disruptivt utvalg (Disruptive selection)

**Kjennetegn:**
- Favoriserer begge ekstremer
- Gjennomsnittlig fenotype selekteres mot
- Kan føre til artsdannelse

**Eksempler:**
- Nebbstørrelse hos afrikanske finkpopulasjoner
- Kroppsstørrelse hos laksefisk (store og små hanner)
- Blomsterfarger ved ulike pollinatorer`,
    },
    {
      id: 'bio1-6-2-def-utvalgstyper',
      type: 'definition',
      title: 'De tre utvalgstyper',
      content: 'Retningsbestemt utvalg favoriserer én ekstrem og flytter gjennomsnittet. Stabiliserende utvalg favoriserer gjennomsnittet og reduserer variasjon. Disruptivt utvalg favoriserer begge ekstremer og kan øke variasjon eller føre til splitting av populasjonen. Hvilken type som virker avhenger av miljøforholdene og hvilke fenotyper som gir høyest fitness.',
    },
    {
      id: 'bio1-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Bjørkemåleren og retningsbestemt utvalg',
      problem: 'Forklar hvordan bjørkemåleren (Biston betularia) illustrerer retningsbestemt utvalg i to ulike retninger.',
      solution: `**Løsning:**

Bjørkemåleren er et klassisk eksempel på retningsbestemt utvalg observert i sanntid.

**Fase 1: Før industrialiseringen**
- Bjørkebark var lys og dekket av lav
- Lys form (typica) var godt kamuflert
- Mørk form (carbonaria) var sjelden (<2%)
- Utvalget favoriserte lys form

**Fase 2: Under industrialiseringen (1850-1950)**
- Sot fra fabrikker drepte laven og svertet barken
- Mørk form ble bedre kamuflert
- Lys form ble lett bytte for fugler
- Mørk form økte til over 90% i industriområder
- Retningsbestemt utvalg mot mørkere fenotype

**Fase 3: Etter Clean Air Act (1956)**
- Luftforurensningen ble redusert
- Laven vokste tilbake, barken ble lysere
- Lys form ble igjen bedre kamuflert
- Mørk form begynte å synke i frekvens
- Retningsbestemt utvalg tilbake mot lysere fenotype

**Konklusjon:**
Dette viser at naturlig utvalg er pågående og responsen avhenger av miljøet. Samme populasjon kan oppleve utvalg i motsatte retninger når miljøet endres.`,
    },
    {
      id: 'bio1-6-2-example-2',
      type: 'example',
      title: 'Eksempel: Fødselsvekt og stabiliserende utvalg',
      problem: 'Hvorfor er gjennomsnittlig fødselsvekt hos mennesker et resultat av stabiliserende utvalg?',
      solution: `**Løsning:**

Fødselsvekt hos mennesker viser klassisk stabiliserende utvalg.

**Data fra studier:**
- Optimal fødselsvekt: ca. 3.2-3.8 kg
- Lavest spedbarnsdødelighet ved gjennomsnittlig vekt
- Både lave og høye vekter har høyere risiko

**Problemer med lav fødselsvekt:**
- Underutviklede organer
- Svakt immunforsvar
- Problemer med temperaturregulering
- Økt risiko for komplikasjoner

**Problemer med høy fødselsvekt:**
- Vanskeligere fødsel
- Økt risiko for fødselsskader
- Komplikasjoner for mor
- Historisk høyere dødelighet

**Resultat:**
- Ekstremer (både for lave og for høye) har lavere overlevelse
- Middelverdi favoriseres generasjon etter generasjon
- Variasjonen i populasjonen holdes relativt stabil

**Moderne medisin:**
Keisersnitt og moderne nyfødtmedisin har redusert dette utvalgspresset, men historisk har stabiliserende utvalg formet fødselsvekt hos mennesker.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-6-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er biologisk fitness?',
      options: [
        { id: 'a', text: 'Et mål på evne til å overleve og reprodusere', isCorrect: true },
        { id: 'b', text: 'Et mål på fysisk styrke', isCorrect: false },
        { id: 'c', text: 'Hvor godt et individ er tilpasset trening', isCorrect: false },
        { id: 'd', text: 'Hvor mange år et individ lever', isCorrect: false },
      ],
      solution: 'Biologisk fitness måler et individs evne til å bidra med gener til neste generasjon. Det handler ikke om fysisk styrke, men om overlevelse og reproduktiv suksess i et gitt miljø.',
    },
    {
      id: 'bio1-6-2-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type utvalg favoriserer gjennomsnittlig fenotype?',
      options: [
        { id: 'a', text: 'Stabiliserende utvalg', isCorrect: true },
        { id: 'b', text: 'Retningsbestemt utvalg', isCorrect: false },
        { id: 'c', text: 'Disruptivt utvalg', isCorrect: false },
        { id: 'd', text: 'Seksuelt utvalg', isCorrect: false },
      ],
      solution: 'Stabiliserende utvalg favoriserer den gjennomsnittlige fenotypen og selekterer mot ekstremer. Dette er vanlig i stabile miljøer der eksisterende tilpasninger fungerer godt.',
    },
    {
      id: 'bio1-6-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn og forklar de fire betingelsene som må være oppfylt for at naturlig utvalg skal kunne virke.',
      solution: '1) Variasjon: Individer må variere i egenskaper - uten forskjeller kan ikke utvalg skje. 2) Arv: Variasjonen må være arvelig, slik at egenskaper kan overføres til avkom. 3) Differensiell overlevelse: Noen varianter må overleve bedre enn andre i det gjeldende miljøet. 4) Differensiell reproduksjon: De som overlever må reprodusere, slik at genene deres overføres. Alle fire betingelser må være oppfylt for at naturlig utvalg skal drive evolusjon.',
    },
    {
      id: 'bio1-6-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom retningsbestemt, stabiliserende og disruptivt utvalg.',
      solution: 'Retningsbestemt utvalg favoriserer én ekstrem fenotype og flytter populasjonens gjennomsnitt i én retning (f.eks. økende kroppsstørrelse). Stabiliserende utvalg favoriserer gjennomsnittlig fenotype og reduserer variasjon ved å selektere mot ekstremer (f.eks. optimal fødselsvekt). Disruptivt utvalg favoriserer begge ekstremer og selekterer mot gjennomsnittet (f.eks. nebbstørrelse der både store og små nebb er fordelaktige, men mellomstørrelse ikke er det). Dette kan føre til splitting av populasjonen.',
    },
    {
      id: 'bio1-6-2-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type utvalg kan potensielt føre til artsdannelse?',
      options: [
        { id: 'a', text: 'Disruptivt utvalg', isCorrect: true },
        { id: 'b', text: 'Stabiliserende utvalg', isCorrect: false },
        { id: 'c', text: 'Retningsbestemt utvalg', isCorrect: false },
        { id: 'd', text: 'Ingen av typene', isCorrect: false },
      ],
      solution: 'Disruptivt utvalg favoriserer begge ekstremer og kan føre til at populasjonen deles i to grupper med ulike fenotyper. Hvis disse gruppene utvikler reproduktive barrierer over tid, kan det føre til artsdannelse.',
    },
    {
      id: 'bio1-6-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter hvorfor adaptasjoner alltid representerer kompromisser (trade-offs). Gi eksempler.',
      solution: 'Adaptasjoner innebærer trade-offs fordi forbedring i én egenskap ofte har kostnader i andre egenskaper. Eksempler: 1) Påfuglens hale øker reproduksjonssuksess, men gjør hannen mer sårbar for rovdyr. 2) Store gevir hos hjort hjelper i konkurranse om hunner, men krever mye energi og kan hindre flukt. 3) Mørk hudpigmentering beskytter mot UV-stråling, men reduserer vitamin D-produksjon i områder med lite sol. 4) Rask vekst gir konkurransefortrinn, men kan redusere levetid. Hver adaptasjon representerer et kompromiss mellom fordeler og kostnader i det spesifikke miljøet.',
    },
  ],
};

// ============================================================================
// Kapittel 6.3: Bevis for evolusjon
// ============================================================================

export const CHAPTER_BIOLOGI_1_6_3: TextbookChapter = {
  id: 'biologi-1-6-3',
  courseId: 'biologi-1',
  chapterNumber: '6.3',
  title: 'Bevis for evolusjon',
  description: 'Omfattende bevis for evolusjon fra fossiler, komparativ anatomi, molekylærbiologi og direkte observasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive hvordan fossiler gir bevis for evolusjon',
    'forklare forskjellen mellom homologe og analoge strukturer',
    'gjøre rede for molekylære bevis for evolusjon',
    'drøfte sammenhengen mellom ulike bevistyper',
  ],
  content: [
    {
      id: 'bio1-6-3-intro',
      type: 'text',
      content: `# Bevis for evolusjon

Evolusjon er en av de best dokumenterte vitenskapelige teoriene. Bevisene kommer fra mange ulike kilder som alle peker i samme retning: livet på jorden har utviklet seg over milliarder av år fra felles forfedre.

## Bevistyper

1. **Fossilrekord** - Direkte spor av tidligere liv
2. **Komparativ anatomi** - Likheter i kroppsbygning
3. **Molekylærbiologi** - DNA- og proteinsammenligninger
4. **Biogeografi** - Geografisk fordeling av arter
5. **Direkte observasjon** - Evolusjon i sanntid`,
    },
    {
      id: 'bio1-6-3-fossiler',
      type: 'text',
      content: `## Fossiler og stratigrafi

Fossiler er bevarte rester eller spor av tidligere liv. De gir direkte bevis for at livet har endret seg over tid.

### Hvordan fossiler dannes

**Betingelser for fossilisering:**
- Rask begravelse (før nedbrytning)
- Hardt materiale (bein, skall, tenner)
- Anaerobe forhold (lite oksygen)

**Fossiliseringstyper:**
- Permineralisering (mineraler erstatter vev)
- Avtrykk og støpninger
- Frysing (mammuter)
- Innkapsling i rav (insekter)

### Stratigrafi og datering

**Relativ datering:**
- Eldre lag ligger under yngre lag
- Ledefossiler hjelper med korrelasjon
- Gir rekkefølge, ikke eksakt alder

**Absolutt datering:**
- Radiometrisk datering (isotopnedbrytning)
- Karbon-14 for unge fossiler (<50 000 år)
- Kalium-argon for eldre fossiler

### Hva fossilrekorden viser

1. **Utdøde arter**: >99% av alle arter er utdødd
2. **Overgangsformer**: Viser gradvise endringer
3. **Kronologisk rekkefølge**: Enkle former før komplekse
4. **Masseutryddelser**: Dramatiske endringer i artsmangfold`,
    },
    {
      id: 'bio1-6-3-def-overgangsform',
      type: 'definition',
      title: 'Overgangsform (transisjonsfossil)',
      content: 'En overgangsform er et fossil som viser egenskaper fra to ulike grupper og representerer et evolusjonært mellomstadium. Eksempler inkluderer Archaeopteryx (dinosaur til fugl), Tiktaalik (fisk til tetrapod) og tidlige hvaler med bakbein. Overgangsformer er sterke bevis for evolusjon fordi de viser gradvise endringer mellom store grupper.',
    },
    {
      id: 'bio1-6-3-anatomi',
      type: 'text',
      content: `## Komparativ anatomi

Sammenligning av kroppsbygning hos ulike arter avslører evolusjonære sammenhenger.

### Homologe strukturer

**Definisjon:** Strukturer med samme evolusjonære opprinnelse, men som kan ha ulik funksjon.

**Klassisk eksempel - Fempålingslemmene:**
| Dyr | Funksjon | Beinstruktur |
|-----|----------|--------------|
| Menneske | Gripe | Samme |
| Hval | Svømme | Samme |
| Flaggermus | Fly | Samme |
| Hest | Løpe | Samme |

Alle har: Overarm - underarm (radius/ulna) - håndledd - fingre

**Hva det viser:**
- Felles forfader med denne strukturen
- Modifikasjon over tid til ulike funksjoner
- Ikke nydesign, men tilpasning

### Analoge strukturer

**Definisjon:** Strukturer med ulik evolusjonær opprinnelse, men lik funksjon.

**Eksempel - Vinger:**
- Insektvinger: Utposning av eksoskjelettet
- Fuglevinger: Modifiserte forlemmmer
- Flaggermusvinger: Hudfold mellom fingre

**Hva det viser:**
- Konvergent evolusjon
- Liknende miljøpress gir liknende løsninger
- Ikke bevis for slektskap`,
    },
    {
      id: 'bio1-6-3-def-homolog-analog',
      type: 'definition',
      title: 'Homologe vs analoge strukturer',
      content: 'Homologe strukturer har samme utviklingsmessige opprinnelse og viser felles avstamning (f.eks. arm, vinge, finne fra samme urstruktur). Analoge strukturer har ulik opprinnelse men lik funksjon, og viser konvergent evolusjon (f.eks. insekt- og fuglevinger). Homologi indikerer slektskap, analogi indikerer lignende miljøpress.',
    },
    {
      id: 'bio1-6-3-molekylaer',
      type: 'text',
      content: `## Molekylære bevis

DNA- og proteinsammenligninger gir kvantitative mål på evolusjonært slektskap.

### DNA-sammenligninger

**Prinsipp:**
- Nært beslektede arter har likere DNA
- Mutasjoner akkumuleres over tid
- Forskjeller korrelerer med tid siden felles forfader

**Metoder:**
- Sekvenssammenligning av gener
- Helgenomsammenligninger
- DNA-hybridisering

**Eksempler:**
| Sammenligning | DNA-likhet |
|---------------|------------|
| Menneske - Sjimpanse | ~98.8% |
| Menneske - Gorilla | ~98.4% |
| Menneske - Orangutang | ~96.9% |
| Menneske - Mus | ~85% |

### Proteinsammenligninger

**Cytokrom c:**
- Protein i alle aerobe organismer
- Konservert gjennom evolusjonen
- Antall aminosyreforskjeller korrelerer med slektskap

### Molekylær klokke

- Mutasjonsraten er relativt konstant
- Kan brukes til å estimere divergenstider
- Kalibreres med fossildata

### Universell genetisk kode

- Nesten alle organismer bruker samme genetiske kode
- DNA → RNA → Protein via samme kodon-system
- Sterkt bevis for felles opphav`,
    },
    {
      id: 'bio1-6-3-def-molekylaer-klokke',
      type: 'definition',
      title: 'Molekylær klokke',
      content: 'Molekylær klokke er en metode for å estimere når to arter divergerte fra en felles forfader. Den baseres på antakelsen om at mutasjoner akkumuleres med relativt konstant hastighet i nøytrale gener. Ved å sammenligne DNA-sekvenser og kalibrere med fossildata kan man beregne divergenstider. Metoden har usikkerheter, men gir verdifulle estimater.',
    },
    {
      id: 'bio1-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Archaeopteryx som overgangsform',
      problem: 'Forklar hvorfor Archaeopteryx regnes som en viktig overgangsform og hvilke egenskaper den viser.',
      solution: `**Løsning:**

Archaeopteryx levde for ca. 150 millioner år siden og regnes som en av de viktigste overgangsformene.

**Reptilske egenskaper:**
- Tenner (moderne fugler har nebb)
- Lang, benet hale
- Klør på vingene
- Ingen brystbein (sternum) for flymuskelefeste
- Beinstruktur lik små theropode dinosaurer

**Fugle-egenskaper:**
- Fjær (tydelige avtrykk i fossiler)
- Vingestruktur
- Gaffelbein (furcula/wishbone)
- Delvis hul beinstruktur

**Betydning:**
1. Viser gradvis overgang fra dinosaurer til fugler
2. Fjær utviklet seg før aktiv flukt (kanskje for isolasjon først)
3. Bekrefter at fugler er dinosauretterkommere
4. Oppdaget kort etter Darwins "Origin" (1861) - perfekt timing

**Nyere funn:**
Flere fjærkledde dinosaurer er funnet i Kina som fyller ut bildet ytterligere (Sinosauropteryx, Microraptor).`,
    },
    {
      id: 'bio1-6-3-example-2',
      type: 'example',
      title: 'Eksempel: DNA-bevis for menneskets slektskap med aper',
      problem: 'Hvordan støtter DNA-sammenligninger det evolusjonære slektskapet mellom mennesker og andre primater?',
      solution: `**Løsning:**

DNA-sammenligninger gir kvantitative bevis for evolusjonært slektskap.

**Helgenom-sammenligninger:**
- Menneske og sjimpanse: 98.8% identisk DNA
- Vi deler mer DNA med sjimpanser enn sjimpanser deler med gorillaer
- Dette stemmer med morfologiske og fossilbaserte slektskapsforhold

**Spesifikke gener:**
- Hemoglobingener: Nesten identiske mellom menneske og sjimpanse
- HOX-gener: Svært konserverte på tvers av alle dyr
- Cytokrom c: Kun 1 aminosyreforskjell mellom menneske og sjimpanse

**Pseudogener:**
- Mennesker og sjimpanser deler de samme "ødelagte" genene
- Vitamin C-genet (GULO) er defekt på samme måte hos begge
- Vanskelig å forklare uten felles opphav

**Retroviralt DNA:**
- Begge arter har rester av samme virus innebygd i genomet
- Virusene infiserte felles forfedre for millioner av år siden
- Plassering i genomet er identisk

**Konklusjon:**
DNA-bevisene bekrefter uavhengig det morfologi og fossiler forteller: mennesker og andre primater deler felles forfedre, med sjimpanser som våre nærmeste nålevende slektninger.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-6-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en homolog struktur?',
      options: [
        { id: 'a', text: 'En struktur med samme opprinnelse men som kan ha ulik funksjon', isCorrect: true },
        { id: 'b', text: 'En struktur med ulik opprinnelse men lik funksjon', isCorrect: false },
        { id: 'c', text: 'En struktur som ikke lenger har noen funksjon', isCorrect: false },
        { id: 'd', text: 'En struktur som bare finnes hos virveldyr', isCorrect: false },
      ],
      solution: 'Homologe strukturer har samme evolusjonære opprinnelse, noe som indikerer felles forfader. Et eksempel er forlemmene hos mennesker, hvaler og flaggermus - de har ulik funksjon (gripe, svømme, fly) men samme beinstruktur.',
    },
    {
      id: 'bio1-6-3-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser en overgangsform (transisjonsfossil)?',
      options: [
        { id: 'a', text: 'Egenskaper fra to ulike grupper som viser gradvis evolusjon', isCorrect: true },
        { id: 'b', text: 'At evolusjon skjer i store sprang', isCorrect: false },
        { id: 'c', text: 'At arter ikke er beslektet', isCorrect: false },
        { id: 'd', text: 'At fossiler er upålitelige', isCorrect: false },
      ],
      solution: 'Overgangsformer har egenskaper fra to ulike grupper og representerer evolusjonære mellomstadier. Archaeopteryx har både dinosaur- og fugletrekk, noe som viser den gradvise utviklingen av fugler fra dinosaurer.',
    },
    {
      id: 'bio1-6-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor menneskets og sjimpansens DNA-likhet på ca. 98.8% regnes som bevis for evolusjon.',
      solution: 'Den høye DNA-likheten indikerer nært slektskap og felles opphav: 1) Hvis artene var uavhengig skapt, ville vi ikke forvente så stor likhet. 2) Likheten stemmer med fossilbevis og anatomi som også peker på nært slektskap. 3) Vi deler også de samme "ødelagte" genene (pseudogener), noe som vanskelig kan forklares uten felles forfader. 4) DNA-sammenligninger med andre primater viser mønster som stemmer med kjent evolusjonær historie.',
    },
    {
      id: 'bio1-6-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv forskjellen mellom relativ og absolutt datering av fossiler.',
      solution: 'Relativ datering bestemmer rekkefølgen av fossiler basert på stratigrafi - eldre lag ligger dypere enn yngre. Ledefossiler med kjent tidsfordeling hjelper med korrelasjon mellom områder. Relativ datering gir ikke eksakt alder. Absolutt datering bruker radiometriske metoder som måler nedbrytning av radioaktive isotoper (f.eks. C-14, K-Ar). Halveringstiden er kjent, så mengden gjenværende isotop gir alder i år. Begge metodene brukes sammen for å bygge et komplett bilde av livets historie.',
    },
    {
      id: 'bio1-6-3-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Insektvinger og fuglevinger er et eksempel på:',
      options: [
        { id: 'a', text: 'Analoge strukturer (konvergent evolusjon)', isCorrect: true },
        { id: 'b', text: 'Homologe strukturer', isCorrect: false },
        { id: 'c', text: 'Vestigiale strukturer', isCorrect: false },
        { id: 'd', text: 'Overgangsformer', isCorrect: false },
      ],
      solution: 'Insektvinger og fuglevinger har ulik evolusjonær opprinnelse (insektvinger er utposninger av eksoskjelettet, fuglevinger er modifiserte forlemmer) men lik funksjon (flukt). Dette er et eksempel på konvergent evolusjon der lignende miljøpress har ført til lignende løsninger.',
    },
    {
      id: 'bio1-6-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hvordan støtter den universelle genetiske koden teorien om felles opphav for alt liv?',
      solution: 'Den genetiske koden (forholdet mellom kodon og aminosyre) er nesten identisk hos alle levende organismer, fra bakterier til mennesker. Dette er sterkt bevis for felles opphav fordi: 1) Det er ingen kjemisk nødvendighet for at bestemte kodoner skal kode for bestemte aminosyrer - det kunne vært mange andre systemer. 2) At alle organismer bruker samme system tyder på at det ble etablert hos en felles forfader. 3) Små unntak (f.eks. i mitokondrier) viser at koden kan endre seg, men dette skjer sjelden. 4) Hvis liv hadde oppstått flere ganger uavhengig, ville vi forvente ulike koder.',
    },
  ],
};

// ============================================================================
// Kapittel 6.4: Artsdannelse
// ============================================================================

export const CHAPTER_BIOLOGI_1_6_4: TextbookChapter = {
  id: 'biologi-1-6-4',
  courseId: 'biologi-1',
  chapterNumber: '6.4',
  title: 'Artsdannelse',
  description: 'Biologisk artsbegrep, reproduktiv isolasjon, og mekanismer for allopatrisk og sympatrisk artsdannelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare det biologiske artsbegrepet',
    'beskrive ulike typer reproduktive barrierer',
    'gjøre rede for allopatrisk og sympatrisk artsdannelse',
    'drøfte hva som skiller populasjoner fra arter',
  ],
  content: [
    {
      id: 'bio1-6-4-intro',
      type: 'text',
      content: `# Artsdannelse (speciasjon)

Artsdannelse er prosessen der én art gir opphav til to eller flere nye arter. Dette er nøkkelen til livets mangfold - over millioner av år har artsdannelse produsert millioner av ulike arter.

## Hva er en art?

Dette høres ut som et enkelt spørsmål, men definisjonen av "art" er faktisk omdiskutert blant biologer. Det finnes flere artsbegreper som brukes i ulike sammenhenger.`,
    },
    {
      id: 'bio1-6-4-def-art',
      type: 'definition',
      title: 'Biologisk artsbegrep',
      content: 'Det biologiske artsbegrepet definerer en art som en gruppe organismer som kan forplante seg med hverandre og produsere fruktbart avkom, og som er reproduktivt isolert fra andre slike grupper. Denne definisjonen fungerer godt for seksuelt reproduserende organismer, men har begrensninger for aseksuelt reproduserende arter, fossiler og hybridiserende arter.',
    },
    {
      id: 'bio1-6-4-artsbegrep',
      type: 'text',
      content: `## Artsbegreper

### Det biologiske artsbegrepet (Mayr, 1942)
- Art = reproduktivt isolert gruppe
- Mest brukt for dyr
- Problem: Fungerer ikke for aseksuelle organismer

### Morfologisk artsbegrep
- Art = gruppe med karakteristiske fysiske trekk
- Brukes for fossiler
- Problem: Ignorerer skjult variasjon

### Fylogenetisk artsbegrep
- Art = minste monofyletiske gruppe
- Basert på DNA og slektskap
- Problem: Kan splitte "gode" arter

### Økologisk artsbegrep
- Art = gruppe med egen økologisk nisje
- Vektlegger tilpasning
- Problem: Nisjer er vanskelige å definere

I praksis brukes ofte flere begreper sammen, avhengig av situasjonen.`,
    },
    {
      id: 'bio1-6-4-barrierer',
      type: 'text',
      content: `## Reproduktive barrierer

For at arter skal forbli distinkte, må det finnes mekanismer som hindrer genutvekling. Disse kalles reproduktive barrierer.

### Pre-zygotiske barrierer
*Hindrer befruktning*

**1. Habitatisolasjon**
- Artene lever i ulike habitater
- Møtes ikke, selv i samme område

**2. Temporal isolasjon**
- Artene reproduserer på ulike tidspunkt
- Ulik sesong eller tid på døgnet

**3. Atferdsisolasjon**
- Ulike parringsritualer
- Signaler gjenkjennes ikke

**4. Mekanisk isolasjon**
- Kjønnsorganene passer ikke sammen
- Vanlig hos insekter

**5. Gametisk isolasjon**
- Egg og sperm er inkompatible
- Befruktning mislykkes

### Post-zygotiske barrierer
*Hindrer levedyktig/fruktbart avkom*

**1. Hybrid-inviabilitet**
- Hybriden utvikler seg ikke normalt
- Dør før reproduktiv alder

**2. Hybrid-sterilitet**
- Hybriden er steril
- Eksempel: Muldyr (hest × esel)

**3. Hybrid-nedbryting**
- Første generasjon er OK
- Senere generasjoner har redusert fitness`,
    },
    {
      id: 'bio1-6-4-def-reproduktiv-isolasjon',
      type: 'definition',
      title: 'Reproduktiv isolasjon',
      content: 'Reproduktiv isolasjon er tilstedeværelsen av biologiske barrierer som hindrer genutvekling mellom populasjoner. Barrierene kan være pre-zygotiske (hindrer befruktning) eller post-zygotiske (hindrer levedyktig/fruktbart avkom). Reproduktiv isolasjon er nødvendig for at arter skal forbli distinkte og for at nye arter skal dannes.',
    },
    {
      id: 'bio1-6-4-allopatrisk',
      type: 'text',
      content: `## Allopatrisk artsdannelse

"Allopatrisk" betyr "annet fedreland" - artsdannelse skjer når populasjoner er geografisk separert.

### Prosessen

1. **Geografisk separasjon**
   - Fjell, hav, elver, ørken
   - Populasjonen deles i to eller flere

2. **Genetisk divergens**
   - Ulike mutasjoner akkumuleres
   - Ulike utvalgstrykk
   - Genetisk drift (spesielt i små populasjoner)

3. **Reproduktiv isolasjon**
   - Over tid blir populasjonene så forskjellige at de ikke kan krysse seg

4. **Sekundær kontakt**
   - Hvis barrieren forsvinner, forblir de atskilte arter

### Eksempler

**Darwins finker:**
- Forfedre koloniserte Galapagos
- Spredte seg til ulike øyer
- Ulike nisjer på hver øy
- 13+ arter utviklet

**Havsnegler over Panama-eidet:**
- Dannelsen av landbroen for 3 millioner år siden
- Skilte populasjoner i Atlanterhavet og Stillehavet
- Genetisk divergens og artsdannelse

Allopatrisk speciasjon regnes som den vanligste formen for artsdannelse.`,
    },
    {
      id: 'bio1-6-4-sympatrisk',
      type: 'text',
      content: `## Sympatrisk artsdannelse

"Sympatrisk" betyr "samme fedreland" - artsdannelse skjer uten geografisk separasjon.

### Mekanismer

**1. Polyploidi (vanligst hos planter)**
- Feil under celledeling gir ekstra kromosomsett
- Polyploid kan ikke krysse seg med diploid forelder
- Øyeblikkelig reproduktiv isolasjon
- Autopolyploidi: Fra samme art
- Allopolyploidi: Fra hybridisering

**2. Habitatspesialisering**
- Individer foretrekker ulike habitater
- Parer seg hovedsakelig innen habitatet
- Over tid: genetisk divergens

**3. Seksuell seleksjon**
- Ulike preferanser i partnervalt
- Assortativ paring (liker parer med liker)
- Kan drive divergens

### Eksempler

**Cichlider i afrikanske sjøer:**
- Hundrevis av arter i Victoriasjøen
- Svært raske artsdannelse
- Seksuell seleksjon spiller viktig rolle

**Hvalkjefteeplet (Rhagoletis):**
- Opprinnelig på hagtorn
- Noen individer begynte å bruke epler
- Ulike vertsplanter = ulik parringstid
- Genetisk divergens pågår

Sympatrisk speciasjon er mer omdiskutert og trolig sjeldnere enn allopatrisk.`,
    },
    {
      id: 'bio1-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Muldyr og hybrid-sterilitet',
      problem: 'Forklar hvorfor muldyr (krysning mellom hest og esel) er sterile, og hva dette forteller oss om artsskiller.',
      solution: `**Løsning:**

**Bakgrunn:**
- Hest (Equus caballus): 64 kromosomer
- Esel (Equus asinus): 62 kromosomer
- Muldyr: 63 kromosomer

**Hvorfor muldyr er sterile:**
1. Ujevnt kromosomtall (63) gir problemer i meiose
2. Kromosomene kan ikke parre seg korrekt
3. Kjønnscellene blir ikke funksjonelle
4. Muldyret kan ikke produsere levedyktige egg/sperm

**Hva dette viser:**
- Hest og esel har divergert genetisk
- De er fortsatt nære nok til å produsere avkom
- Men avkommet er ikke fruktbart
- Post-zygotisk barriere: hybrid-sterilitet

**Biologisk betydning:**
- Genene blandes, men spres ikke videre
- Artene forblir distinkte
- Illustrerer det biologiske artsbegrepet

**Merknad:**
I svært sjeldne tilfeller kan hunnmuldyr produsere avkom, men dette er ekstremt uvanlig.`,
    },
    {
      id: 'bio1-6-4-example-2',
      type: 'example',
      title: 'Eksempel: Allopatrisk speciasjon hos egernarter',
      problem: 'Grand Canyon deler habitatet til Kaibab-ekorn og Abert-ekorn. Forklar hvordan dette illustrerer allopatrisk speciasjon.',
      solution: `**Løsning:**

**Geografisk situasjon:**
- Grand Canyon: 1.6 km dyp, 16 km bred
- Nordrim: Kaibab-ekornet (Sciurus aberti kaibabensis)
- Sørrim: Abert-ekornet (Sciurus aberti aberti)
- Bare canyon i mellom - ingen krysning mulig

**Historisk utvikling:**
1. For millioner av år siden: én sammenhengende populasjon
2. Colorado River gravde ut Grand Canyon
3. Populasjonen ble delt i to
4. Genflyt stoppet

**Divergens:**
- Ulike miljøforhold på nord- og sørrim
- Ulike utvalgspress (temperatur, vegetasjon)
- Genetisk drift
- Mutasjoner akkumulerer uavhengig

**Morfologiske forskjeller:**
- Kaibab: Mørkere pels, helt hvit hale
- Abert: Lysere pels, grå hale med hvit underside

**Nåværende status:**
- Regnes som underarter, ikke fullstendige arter
- Kan fortsatt krysse seg i fangenskap
- Men geografisk barriere hindrer dette i naturen
- Speciasjonsprosessen er "pågående"

**Konklusjon:**
Dette er et klassisk eksempel på allopatrisk speciasjon i tidlig fase, der vi kan observere divergens som følge av geografisk isolasjon.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-6-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er det biologiske artsbegrepet?',
      options: [
        { id: 'a', text: 'En gruppe som kan forplante seg og produsere fruktbart avkom', isCorrect: true },
        { id: 'b', text: 'En gruppe med like fysiske trekk', isCorrect: false },
        { id: 'c', text: 'En gruppe som lever i samme område', isCorrect: false },
        { id: 'd', text: 'En gruppe med samme DNA', isCorrect: false },
      ],
      solution: 'Det biologiske artsbegrepet definerer en art som en gruppe organismer som kan forplante seg med hverandre og produsere fruktbart (ikke bare levedyktig) avkom, og som er reproduktivt isolert fra andre slike grupper.',
    },
    {
      id: 'bio1-6-4-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Muldyret (hest x esel) er et eksempel på hvilken type reproduktiv barriere?',
      options: [
        { id: 'a', text: 'Hybrid-sterilitet (post-zygotisk)', isCorrect: true },
        { id: 'b', text: 'Temporal isolasjon (pre-zygotisk)', isCorrect: false },
        { id: 'c', text: 'Gametisk isolasjon (pre-zygotisk)', isCorrect: false },
        { id: 'd', text: 'Hybrid-inviabilitet (post-zygotisk)', isCorrect: false },
      ],
      solution: 'Muldyr er sterile fordi de har 63 kromosomer (hest 64 + esel 62), som ikke kan parre seg korrekt under meiose. Dette er hybrid-sterilitet - avkommet overlever men kan ikke reprodusere.',
    },
    {
      id: 'bio1-6-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom allopatrisk og sympatrisk artsdannelse.',
      solution: 'Allopatrisk artsdannelse skjer når populasjoner er geografisk separert (f.eks. av fjell, hav) og divergerer genetisk over tid til de blir reproduktivt isolert. Dette er den vanligste formen for speciasjon. Sympatrisk artsdannelse skjer uten geografisk separasjon, ofte via polyploidi hos planter (øyeblikkelig reproduktiv isolasjon) eller habitatspesialisering og seksuell seleksjon. Sympatrisk speciasjon er sjeldnere og mer omdiskutert.',
    },
    {
      id: 'bio1-6-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn og forklar tre ulike pre-zygotiske barrierer.',
      solution: '1) Habitatisolasjon: Artene lever i ulike habitater og møtes ikke, selv i samme geografiske område. 2) Temporal isolasjon: Artene reproduserer på ulike tidspunkt (sesong, tid på døgnet) og kan ikke pare seg. 3) Atferdsisolasjon: Artene har ulike parringsritualer eller signaler som ikke gjenkjennes av den andre arten. Andre pre-zygotiske barrierer inkluderer mekanisk isolasjon (kjønnsorganer passer ikke) og gametisk isolasjon (egg og sperm inkompatible).',
    },
    {
      id: 'bio1-6-4-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Polyploidi som mekanisme for artsdannelse er vanligst hos:',
      options: [
        { id: 'a', text: 'Planter', isCorrect: true },
        { id: 'b', text: 'Pattedyr', isCorrect: false },
        { id: 'c', text: 'Fugler', isCorrect: false },
        { id: 'd', text: 'Fisk', isCorrect: false },
      ],
      solution: 'Polyploidi (ekstra kromosomsett) er en viktig mekanisme for sympatrisk speciasjon hos planter. Mange kulturplanter er polyploide (hvete, potet, banan). Hos dyr er polyploidi sjeldent fordi det forstyrrer kjønnsbestemmelse og utvikling.',
    },
    {
      id: 'bio1-6-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter begrensningene ved det biologiske artsbegrepet og forklar hvorfor andre artsbegreper noen ganger er nødvendige.',
      solution: 'Begrensninger ved det biologiske artsbegrepet: 1) Fungerer ikke for aseksuelle organismer (bakterier, noen planter) som ikke reproduserer seksuelt. 2) Kan ikke anvendes på fossiler der reproduktiv atferd er ukjent. 3) Mange arter hybridiserer i naturen (ulv/hund, ulike plantearter) uten å miste sin distinkthet. 4) Vanskelig å teste i praksis - vi kan ikke pare alle individer. Alternative begreper brukes derfor: Morfologisk artsbegrep for fossiler og museumseksemplarer, fylogenetisk artsbegrep for molekylære studier, økologisk artsbegrep for å forstå tilpasninger. I praksis kombineres ofte flere tilnærminger.',
    },
  ],
};

// ============================================================================
// Kapittel 6.5: Evolusjonens mekanismer
// ============================================================================

export const CHAPTER_BIOLOGI_1_6_5: TextbookChapter = {
  id: 'biologi-1-6-5',
  courseId: 'biologi-1',
  chapterNumber: '6.5',
  title: 'Evolusjonens mekanismer',
  description: 'Evolusjonære mekanismer utover naturlig utvalg: genetisk drift, genflyt og mutasjoner som råmateriale for evolusjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare genetisk drift og dens effekt på populasjoner',
    'beskrive genflyt og dens evolusjonære betydning',
    'gjøre rede for mutasjoner som kilde til genetisk variasjon',
    'drøfte samspillet mellom ulike evolusjonære mekanismer',
  ],
  content: [
    {
      id: 'bio1-6-5-intro',
      type: 'text',
      content: `# Evolusjonens mekanismer

Evolusjon defineres som endringer i allelfrekvenser i en populasjon over tid. Naturlig utvalg er den viktigste mekanismen for adaptasjon, men det finnes flere andre mekanismer som driver evolusjon.

## De fire hovedmekanismene

1. **Naturlig utvalg** - Ikke-tilfeldig overlevelse og reproduksjon
2. **Genetisk drift** - Tilfeldige endringer i allelfrekvenser
3. **Genflyt** - Utveksling av alleler mellom populasjoner
4. **Mutasjoner** - Nye genetiske varianter

Disse mekanismene kan virke sammen eller mot hverandre, og forståelse av dem alle er nødvendig for å forstå evolusjon fullt ut.`,
    },
    {
      id: 'bio1-6-5-def-evolusjon',
      type: 'definition',
      title: 'Evolusjon (populasjonsgenetisk)',
      content: 'I populasjonsgenetisk forstand er evolusjon enhver endring i allelfrekvenser i en populasjon fra én generasjon til neste. Dette inkluderer både adaptive endringer (naturlig utvalg) og ikke-adaptive endringer (genetisk drift). En populasjon som ikke evolverer, er i Hardy-Weinberg-likevekt.',
    },
    {
      id: 'bio1-6-5-genetisk-drift',
      type: 'text',
      content: `## Genetisk drift

Genetisk drift er tilfeldige endringer i allelfrekvenser fra generasjon til generasjon. Den skyldes at ikke alle alleler i en generasjon nødvendigvis overføres til neste.

### Kjennetegn ved genetisk drift

- **Tilfeldig, ikke retningsbestemt**
- **Sterkere effekt i små populasjoner**
- **Kan fjerne variasjon over tid**
- **Uavhengig av allelenes fitness**

### Simulering

Tenk deg en boks med 50% røde og 50% blå kuler. Du trekker 10 kuler tilfeldig for neste generasjon:
- Med 50/50 ville vi forvente 5 røde og 5 blå
- Men tilfeldig kan vi få 7 røde og 3 blå
- Neste generasjon starter da med 70% røde
- Over tid kan én farge dominere helt

### Spesialtilfeller

**Flaskehalseffekten:**
- Dramatisk populasjonsreduksjon (katastrofe, sykdom)
- De overlevende er et tilfeldig utvalg
- Genetisk variasjon reduseres drastisk
- Eksempel: Geparden (lav genetisk variasjon)

**Grunnleggereffekten:**
- Ny populasjon grunnlagt av få individer
- Begrenset genetisk variasjon fra starten
- Sjeldne alleler kan bli vanlige
- Eksempel: Amish-populasjonen (høy frekvens av visse genetiske sykdommer)`,
    },
    {
      id: 'bio1-6-5-def-genetisk-drift',
      type: 'definition',
      title: 'Genetisk drift',
      content: 'Genetisk drift er tilfeldige endringer i allelfrekvenser som skyldes sampling-effekter fra én generasjon til neste. Effekten er størst i små populasjoner. Flaskehalseffekten oppstår når en populasjon reduseres drastisk, mens grunnleggereffekten oppstår når få individer grunnlegger en ny populasjon. Begge reduserer genetisk variasjon.',
    },
    {
      id: 'bio1-6-5-genflyt',
      type: 'text',
      content: `## Genflyt (migrasjon)

Genflyt er overføring av alleler mellom populasjoner gjennom migrasjon av individer eller gameter (pollen).

### Effekter av genflyt

**1. Homogenisering**
- Gjør populasjoner genetisk likere
- Motvirker divergens og artsdannelse
- Kan spre fordelaktige alleler

**2. Introduksjon av variasjon**
- Bringer nye alleler til populasjonen
- Kan øke genetisk mangfold
- Viktig for isolerte populasjoner

**3. Motvirkning av drift og utvalg**
- Kan hindre lokal tilpasning
- Opprettholder variasjon som drift ville fjernet
- Kan "swampe" lokale adaptasjoner

### Eksempler

**Plantepollinering:**
- Pollen spres mellom populasjoner
- Viktig genflyt hos vindpollinerte arter
- Kan skje over lange avstander

**Dyremigrasjon:**
- Fugler, fisk, pattedyr flytter mellom områder
- Spreder gener over store områder
- Sesongmessige mønstre

**Menneskelig migrasjon:**
- Historisk genflyt mellom populasjoner
- Har formet genetisk variasjon globalt
- Reduserer genetiske forskjeller mellom grupper`,
    },
    {
      id: 'bio1-6-5-mutasjoner',
      type: 'text',
      content: `## Mutasjoner som råmateriale

Mutasjoner er den ultimate kilden til all genetisk variasjon. Uten mutasjoner ville det ikke vært noe råmateriale for evolusjon.

### Typer mutasjoner

**Punktmutasjoner:**
- Endring i enkelt nukleotid
- Kan være silent, missense eller nonsense
- Vanligste type mutasjon

**Innskudd og delesjoner (indels):**
- Tillegg eller tap av nukleotider
- Kan forårsake leserammeforskyvning
- Ofte mer alvorlige konsekvenser

**Kromosommutasjoner:**
- Delesjoner, duplikasjoner, inversjoner
- Translokasjoner mellom kromosomer
- Polyploidi (hele ekstra kromosomsett)

### Mutasjoners skjebne

**De fleste mutasjoner er:**
- **Nøytrale** (~95%): Ingen effekt på fitness
- **Skadelige** (~5%): Reduserer fitness
- **Fordelaktige** (<1%): Øker fitness

**Faktorer som påvirker skjebne:**
- Populasjonsstørrelse (drift vs utvalg)
- Seleksjonsstyrke
- Dominansforhold
- Miljøforhold

### Mutasjonsrater

- Typisk: 10⁻⁸ til 10⁻⁹ per basepar per generasjon
- Mennesker: ~100 nye mutasjoner per generasjon
- Varierer mellom arter og genomregioner
- DNA-reparasjon holder raten lav`,
    },
    {
      id: 'bio1-6-5-def-mutasjon',
      type: 'definition',
      title: 'Mutasjon (evolusjonær betydning)',
      content: 'Mutasjoner er tilfeldige, arvelige endringer i DNA-sekvensen. De er den ultimate kilden til all genetisk variasjon og dermed råmaterialet for evolusjon. De fleste mutasjoner er nøytrale eller skadelige, men sjeldne fordelaktige mutasjoner gir materiale for naturlig utvalg. Uten mutasjoner ville evolusjon til slutt stoppe opp.',
    },
    {
      id: 'bio1-6-5-samspill',
      type: 'text',
      content: `## Samspill mellom mekanismer

De fire evolusjonære mekanismene virker ikke isolert, men i komplekst samspill.

### Mutasjon + Naturlig utvalg

- Mutasjon skaper variasjon
- Naturlig utvalg sorterer variantene
- "Mutasjon foreslår, utvalg bestemmer"
- Uten mutasjon: Utvalg tømmer variasjon
- Uten utvalg: Mutasjoner akkumuleres tilfeldig

### Drift vs Utvalg

- I store populasjoner: Utvalg dominerer
- I små populasjoner: Drift kan overstyre utvalg
- Svakt fordelaktige alleler kan gå tapt ved drift
- Svakt skadelige alleler kan fikseres ved drift

### Genflyt vs Lokal tilpasning

- Genflyt homogeniserer populasjoner
- Lokalt utvalg differensierer populasjoner
- Balansen avgjør grad av lokal tilpasning
- For mye genflyt hindrer spesialisering

### Hardy-Weinberg-likevekt

En populasjon er i Hardy-Weinberg-likevekt hvis:
- Ingen mutasjoner
- Ingen utvalg
- Ingen drift (uendelig stor populasjon)
- Ingen genflyt
- Tilfeldig paring

I virkeligheten er ingen populasjon helt i likevekt - evolusjon skjer alltid.`,
    },
    {
      id: 'bio1-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Flaskehalseffekten hos geparden',
      problem: 'Geparden har svært lav genetisk variasjon. Forklar hvordan flaskehalseffekten kan forklare dette.',
      solution: `**Løsning:**

**Observasjoner hos gepard:**
- Ekstremt lav genetisk variasjon
- Hudtransplantasjoner aksepteres mellom individer
- Høy forekomst av reproduksjonsproblemer
- Lav spermmotilitet og mange misdannede sperm

**Genetisk bevis:**
- DNA-analyser viser variasjon tilsvarende én familie
- Alle nålevende geparden stammer fra svært få forfedre
- Estimert flaskehals for 10 000-12 000 år siden

**Mulige årsaker til flaskehalsen:**
1. Slutten av siste istid - klimaendringer
2. Overkjakt av mennesker
3. Konkurranse med andre rovdyr
4. Sykdomsepidemier

**Konsekvenser:**
- Nesten all genetisk variasjon gikk tapt
- Skadelige recessive alleler ble homozygote
- Redusert evne til å tilpasse seg nye sykdommer
- Populasjonen er sårbar for fremtidige miljøendringer

**Sammenlikning:**
Afrikansk løve har 10x mer genetisk variasjon enn gepard, til tross for lignende leveområder.

**Lærdom:**
Flaskehalseffekten viser hvorfor bevaringsgenetikk er viktig - genetisk variasjon som går tapt, kommer aldri tilbake.`,
    },
    {
      id: 'bio1-6-5-example-2',
      type: 'example',
      title: 'Eksempel: Grunnleggereffekten og Ellis-van Creveld syndrom hos Amish',
      problem: 'Ellis-van Creveld syndrom er svært sjeldent globalt, men vanlig blant Amish i Pennsylvania. Forklar hvordan grunnleggereffekten kan forklare dette.',
      solution: `**Løsning:**

**Om Ellis-van Creveld syndrom:**
- Autosomal recessiv lidelse
- Kortvoksthet, ekstra fingre, hjertefeil
- Global frekvens: ~1 per 150 000

**Blant Lancaster Amish:**
- Frekvens: ~1 per 5 000 (30x høyere)
- Bærere: ~13% av populasjonen

**Historisk bakgrunn:**
1. 1744: ~200 tyske immigranter grunnla Amish-samfunnet i Pennsylvania
2. Én eller flere av grunnleggerne bar genet
3. Liten, isolert populasjon med lite genflyt
4. Høy grad av ekteskap innenfor gruppen

**Genetisk mekanisme:**
- Tilfeldigvis var en sjelden allel overrepresentert blant grunnleggerne
- Ingen genflyt inn til å "fortynne" allelen
- Genetisk drift forsterket effekten i liten populasjon
- Innavl økte sannsynligheten for homozygoti

**Sporet tilbake:**
Genealogisk forskning har sporet nesten alle tilfeller tilbake til ett ektepar blant de opprinnelige immigrantene.

**Andre eksempler hos Amish:**
- Maple syrup urine disease
- Glutaric aciduria
- Alle sjeldne globalt, men vanlige i Amish-samfunnet

**Konklusjon:**
Grunnleggereffekten kan dramatisk endre allelfrekvenser når en liten gruppe koloniserer et nytt område.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-6-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er genetisk drift?',
      options: [
        { id: 'a', text: 'Tilfeldige endringer i allelfrekvenser', isCorrect: true },
        { id: 'b', text: 'Retningsbestemt endring mot bedre tilpasning', isCorrect: false },
        { id: 'c', text: 'Utveksling av alleler mellom populasjoner', isCorrect: false },
        { id: 'd', text: 'Nye mutasjoner i DNA', isCorrect: false },
      ],
      solution: 'Genetisk drift er tilfeldige (ikke-retningsbestemmte) endringer i allelfrekvenser fra generasjon til generasjon. Effekten er størst i små populasjoner der tilfeldigheter har større innvirkning.',
    },
    {
      id: 'bio1-6-5-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Flaskehalseffekten oppstår når:',
      options: [
        { id: 'a', text: 'En populasjon reduseres drastisk og mister genetisk variasjon', isCorrect: true },
        { id: 'b', text: 'Få individer grunnlegger en ny populasjon', isCorrect: false },
        { id: 'c', text: 'Genflyt mellom populasjoner øker', isCorrect: false },
        { id: 'd', text: 'Mutasjonsraten øker', isCorrect: false },
      ],
      solution: 'Flaskehalseffekten oppstår når en populasjon reduseres dramatisk (f.eks. av katastrofe eller sykdom) og de overlevende representerer et tilfeldig utvalg av den genetiske variasjonen. Mye variasjon går tapt. Grunnleggereffekten er lignende, men gjelder når få individer koloniserer et nytt område.',
    },
    {
      id: 'bio1-6-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor mutasjoner kalles "råmaterialet for evolusjon".',
      solution: 'Mutasjoner er den ultimate kilden til all genetisk variasjon. Uten mutasjoner ville det ikke finnes forskjellige alleler, og naturlig utvalg ville ikke ha noe å "velge" mellom. Selv om de fleste mutasjoner er nøytrale eller skadelige, er de sjeldne fordelaktige mutasjonene nødvendige for at nye adaptasjoner skal kunne utvikles. Seksuell reproduksjon og genflyt kan omfordele eksisterende variasjon, men bare mutasjoner kan skape helt ny variasjon.',
    },
    {
      id: 'bio1-6-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hvordan genflyt kan både hindre og fremme evolusjon.',
      solution: 'Genflyt kan hindre evolusjon ved å: 1) Homogenisere populasjoner slik at lokale tilpasninger "swampes" av innkommende gener. 2) Motvirke divergens mellom populasjoner og dermed hindre artsdannelse. Genflyt kan fremme evolusjon ved å: 1) Introdusere nye fordelaktige alleler til en populasjon. 2) Øke genetisk variasjon i isolerte populasjoner. 3) Spre adaptive gener mellom populasjoner. Nettoeffekten avhenger av balansen mellom lokal seleksjon og mengden genflyt.',
    },
    {
      id: 'bio1-6-5-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'I en svært liten populasjon, hva er mest sannsynlig å skje med en svakt fordelaktig mutasjon?',
      options: [
        { id: 'a', text: 'Den kan gå tapt på grunn av genetisk drift', isCorrect: true },
        { id: 'b', text: 'Den vil alltid fikseres på grunn av naturlig utvalg', isCorrect: false },
        { id: 'c', text: 'Den vil holde seg på konstant frekvens', isCorrect: false },
        { id: 'd', text: 'Den vil umiddelbart spres til hele populasjonen', isCorrect: false },
      ],
      solution: 'I små populasjoner er genetisk drift sterk nok til å overstyre svak seleksjon. En svakt fordelaktig mutasjon har god sjanse for å gå tapt tilfeldig, selv om den gir en liten fitnessfordel. Utvalg dominerer bare når populasjonen er stor nok til at tilfeldigheter jevner seg ut.',
    },
    {
      id: 'bio1-6-5-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar Hardy-Weinberg-likevekt og hvorfor ingen naturlige populasjoner er i perfekt likevekt.',
      solution: 'Hardy-Weinberg-likevekt er en teoretisk tilstand der allelfrekvensene i en populasjon forblir konstante over generasjoner. For at dette skal gjelde, må fem betingelser være oppfylt: 1) Ingen mutasjoner, 2) Ingen naturlig utvalg, 3) Uendelig stor populasjon (ingen drift), 4) Ingen genflyt, 5) Tilfeldig paring. Ingen naturlige populasjoner oppfyller alle disse betingelsene: Mutasjoner skjer alltid, utvalg virker på de fleste egenskaper, alle populasjoner har begrenset størrelse, noe genflyt forekommer, og paring er sjelden helt tilfeldig. Hardy-Weinberg brukes som nullmodell - avvik fra likevekten indikerer at evolusjon skjer.',
    },
  ],
};

// ============================================================================
// Eksporter alle delkapitler
// ============================================================================

export const BIOLOGI_1_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_6_1,
  CHAPTER_BIOLOGI_1_6_2,
  CHAPTER_BIOLOGI_1_6_3,
  CHAPTER_BIOLOGI_1_6_4,
  CHAPTER_BIOLOGI_1_6_5,
];

export function getBiologi1Del6Chapter(chapterId: string): TextbookChapter | undefined {
  return BIOLOGI_1_DEL6_CHAPTERS.find(chapter => chapter.id === chapterId);
}
