/**
 * Biologi 1 - Kapittel 3.4: Celledeling – mitose og meiose
 *
 * Dekker cellesyklus, mitosens faser, meiose I og II,
 * genetisk variasjon, nondisjunksjon og gametogenese.
 */
import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_3_4: TextbookChapter = {
  id: 'bio1-3-4',
  courseId: 'biologi-1',
  chapterNumber: '3.4',
  title: 'Celledeling – mitose og meiose',
  description: 'Cellesyklus, mitosens faser, meiose og genetisk variasjon.',
  estimatedMinutes: 85,
  competenceGoals: [
    'Gjøre rede for cellesyklus med interfase og mitose, inkludert de ulike fasene',
    'Forklare hva som skjer i meiose I og meiose II, og hvorfor meiose er nødvendig for seksuell formering',
    'Sammenligne mitose og meiose med hensyn til resultat, funksjon og genetisk variasjon',
    'Forklare hvordan overkrysning, uavhengig assortiment og tilfeldig befruktning bidrar til genetisk variasjon',
    'Beskrive hva nondisjunksjon er og gi eksempler på konsekvenser som aneuploidi',
    'Gjøre rede for forskjeller mellom spermatogenese og oogenese',
  ],
  content: [
    // =====================================================================
    // INTRODUKSJON
    // =====================================================================
    {
      id: 'bio1-3-4-intro',
      type: 'text',
      title: 'Hvorfor deler celler seg?',
      content: `Alle levende organismer består av celler, og nye celler dannes bare ved at eksisterende celler deler seg. Celledeling er grunnlaget for:

- **Vekst**: Et befruktet egg (zygote) utvikler seg til en voksen organisme med billioner av celler gjennom gjentatte celledelinger.
- **Reparasjon og vedlikehold**: Skadede eller utslitte celler erstattes kontinuerlig. Huden din fornyer seg fullstendig omtrent hver 2.–3. uke.
- **Formering**: Organismer produserer avkom enten ved ukjønnet formering (én forelder) eller kjønnet formering (to foreldre).

Det finnes to hovedtyper av celledeling hos eukaryote organismer:

1. **Mitose** – produserer to genetisk identiske datterceller. Brukes til vekst, reparasjon og ukjønnet formering.
2. **Meiose** – produserer fire genetisk unike haploide celler (kjønnsceller/gameter). Brukes til kjønnet formering.

Begge typer celledeling er nøye regulert, og feil i reguleringen kan få alvorlige konsekvenser, som kreftutvikling.`,
    },

    // =====================================================================
    // KROMOSOMTERMINOLOGI
    // =====================================================================
    {
      id: 'bio1-3-4-kromosomterminologi',
      type: 'text',
      title: 'Kromosomterminologi',
      content: `Før vi går inn i detaljene om celledeling, må vi forstå noen viktige begreper knyttet til kromosomer:

**Kromatin og kromosomer**
I interfasen (mellom celledelinger) finnes DNA i en løs, utpakket form kalt **kromatin**. Kromatinet består av DNA-tråder viklet rundt histonproteiner. Når cellen forbereder seg på deling, kondenseres kromatinet til kompakte strukturer vi kaller **kromosomer**. Denne kondenseringen gjør det mulig å sortere og fordele DNA-et nøyaktig til dattercellene.

**Søsterkromatider og centromerer**
Etter DNA-replikasjon (kopiering) i S-fasen, består hvert kromosom av to identiske kopier kalt **søsterkromatider**. De to søsterkromatidene holdes sammen av et proteinbånd kalt **cohesin**, og de er festet til hverandre i et innsnevret område kalt **sentromeren** (centromeren). Når søsterkromatidene skilles, blir hver av dem et selvstendig kromosom.

**Homologe kromosomer**
Mennesker har 46 kromosomer som finnes i 23 par. Hvert par kalles **homologe kromosomer** – det ene kromosomet kommer fra mor og det andre fra far. Homologe kromosomer har samme størrelse, form og genrekkefølge, men kan bære ulike varianter (alleler) av genene.

**Diploid og haploid**
- **Diploid (2n)**: Cellen har to sett av hvert kromosom (ett fra hver forelder). Hos mennesker: 2n = 46.
- **Haploid (n)**: Cellen har bare ett sett av hvert kromosom. Hos mennesker: n = 23. Kjønnsceller (gameter) er haploide.`,
    },
    {
      id: 'bio1-3-4-def-diploid',
      type: 'definition',
      title: 'Diploid (2n)',
      content: 'En celle som har to komplette sett av kromosomer – ett sett arvet fra mor og ett fra far. Kroppsceller (somatiske celler) hos mennesker er diploide med 2n = 46 kromosomer (23 par).',
    },
    {
      id: 'bio1-3-4-def-haploid',
      type: 'definition',
      title: 'Haploid (n)',
      content: 'En celle som bare har ett sett av kromosomer. Kjønnsceller (gameter) er haploide. Hos mennesker har kjønnscellene n = 23 kromosomer. Når to haploide gameter smelter sammen ved befruktning, dannes en diploid zygote med 2n = 46.',
    },
    {
      id: 'bio1-3-4-def-sosterkromatider',
      type: 'definition',
      title: 'Søsterkromatider',
      content: 'To identiske kopier av et kromosom som dannes etter DNA-replikasjon i S-fasen. Søsterkromatidene holdes sammen ved sentromeren og skilles i anafasen under mitose (eller anafase II under meiose).',
    },
    {
      id: 'bio1-3-4-def-homologe',
      type: 'definition',
      title: 'Homologe kromosomer',
      content: 'Et par av kromosomer med samme størrelse, form og genrekkefølge – ett arvet fra mor og ett fra far. Homologe kromosomer kan bære ulike alleler av de samme genene. Mennesker har 23 par homologe kromosomer.',
    },

    // =====================================================================
    // CELLESYKLUS
    // =====================================================================
    {
      id: 'bio1-3-4-def-cellesyklus',
      type: 'definition',
      title: 'Cellesyklus',
      content: 'Den ordnede sekvensen av hendelser fra en celle dannes til den deler seg i to nye celler. Cellesyklusen deles inn i interfase (G1, S og G2) og M-fase (mitose + cytokinese). Lengden varierer fra noen timer til flere måneder, avhengig av celletype.',
    },
    {
      id: 'bio1-3-4-cellesyklus',
      type: 'text',
      title: 'Cellesyklus: fra celle til to celler',
      content: `Cellesyklusen er den ordnede sekvensen av hendelser fra en celle dannes til den fullstendig har delt seg i to nye datterceller. Syklusen deles inn i to hovedperioder:

## Interfase – forberedelse til deling

Interfasen utgjør den lengste delen av cellesyklusen (typisk 90 % av tiden). Den deles inn i tre faser:

**G1-fase (Gap 1 / vekstfase 1)**
- Cellen vokser i størrelse og produserer proteiner og organeller.
- Cellen utfører sine normale funksjoner (f.eks. lever- eller muskelcellefunksjoner).
- Mot slutten av G1 evaluerer cellen om forholdene er gunstige for deling (se sjekkpunkter nedenfor).
- Varighet: svært variabel – fra timer til år, avhengig av celletype.

**S-fase (Syntesefase)**
- DNA-replikasjon: Alt cellens DNA kopieres, slik at hvert kromosom nå består av to søsterkromatider.
- Sentrosomene (organellene som organiserer delingsapparatet) dupliseres også.
- Varighet: typisk 6–8 timer.

**G2-fase (Gap 2 / vekstfase 2)**
- Cellen fortsetter å vokse og produserer proteiner som trengs for celledeling.
- DNA sjekkes for replikasjonsfeil og repareres om nødvendig.
- Varighet: typisk 2–5 timer.

## M-fase – selve delingen

M-fasen består av to prosesser:
1. **Mitose** – kjernen deles, og kromosomene fordeles likt til de to nye kjernene.
2. **Cytokinese** – cytoplasmaet deles, og to separate datterceller dannes.

Noen celler kan også gå inn i en hvilefase kalt **G0**, der de slutter å dele seg. Eksempler er modne nerveceller og muskelceller. Noen celler i G0 kan gjenoppta delingssyklusen ved behov (f.eks. leverceller etter skade).`,
    },
    {
      id: 'bio1-3-4-sjekkpunkter',
      type: 'text',
      title: 'Cellesyklus-sjekkpunkter',
      content: `Cellesyklusen er nøye regulert av kontrollmekanismer kalt **sjekkpunkter**. Disse fungerer som kvalitetskontroller som sikrer at hvert steg er fullført korrekt før cellen går videre til neste fase.

## De tre hovedsjekkpunktene

**G1-sjekkpunktet (restriksjonspunktet)**
- Kontrollerer om cellen er stor nok og har nok næringsstoffer.
- Sjekker om DNA er uskadet.
- Vurderer om ytre signaler (vekstfaktorer) tilsier at cellen skal dele seg.
- Hvis forholdene ikke er riktige, kan cellen gå inn i G0 (hvilefase).
- Dette er det viktigste sjekkpunktet – passeres det, er cellen som regel forpliktet til å fullføre delingen.

**G2-sjekkpunktet**
- Kontrollerer at all DNA-replikasjon er fullført.
- Sjekker at det ikke er DNA-skader etter replikasjonen.
- Verifiserer at cellen har nok proteiner og energi til å gjennomføre mitose.

**M-sjekkpunktet (spindelkontrollpunktet)**
- Kontrollerer at alle kromosomer er korrekt festet til delingsapparatet (spindelen) via kinetochorene.
- Sikrer at hvert kromosom er bundet til spindelfibre fra begge polene.
- Forhindrer at anafasen starter før alle kromosomer er korrekt festet.
- Feil her kan føre til at dattercellene får feil antall kromosomer (aneuploidi).

## Sykliner og CDK-er

Sjekkpunktene kontrolleres av et samspill mellom to typer proteiner:

- **Sykliner**: Proteiner som stiger og synker i konsentrasjon gjennom cellesyklusen. Ulike sykliner er aktive i ulike faser.
- **CDK-er (syklinavhengige kinaser)**: Enzymer som er inaktive alene, men aktiveres når de binder seg til en syklin. Aktiverte CDK-er fosforylerer målproteiner som driver cellesyklusen fremover.

Samspillet mellom sykliner og CDK-er fungerer som cellesyklusens «motor». Når en bestemt syklin når høy nok konsentrasjon, aktiverer den sin CDK, som trigger overgangen til neste fase.`,
    },
    {
      id: 'bio1-3-4-kreft',
      type: 'warning',
      title: 'Når sjekkpunktene svikter: kreft',
      content: `Når cellesyklusens sjekkpunkter ikke fungerer som de skal, kan celler begynne å dele seg ukontrollert. Dette er grunnlaget for kreftutvikling.

**Hvordan oppstår kreft?**
- Mutasjoner i gener som koder for sjekkpunkt-proteiner, sykliner eller CDK-er kan føre til at reguleringsmekanismene svikter.
- **Proto-onkogener** er normale gener som fremmer celledeling. Mutasjoner kan gjøre dem til **onkogener** som er konstant aktive og driver ukontrollert deling.
- **Tumorsuppressorgener** (som p53) koder for proteiner som bremser cellesyklusen eller utløser apoptose (programmert celledød) når DNA er skadet. Mutasjoner i disse genene fjerner bremsene.
- Det kreves vanligvis mutasjoner i flere gener for at en celle skal bli kreftcelle. Risikoen øker med alderen fordi mutasjoner akkumuleres over tid.`,
    },

    // =====================================================================
    // MITOSE
    // =====================================================================
    {
      id: 'bio1-3-4-def-mitose',
      type: 'definition',
      title: 'Mitose',
      content: 'En type celledeling der en diploid celle deler seg og produserer to genetisk identiske diploide datterceller. Mitose omfatter fire hovedfaser: profase, metafase, anafase og telofase, etterfulgt av cytokinese (cytoplasmaets deling). Mitose brukes til vekst, reparasjon og vedlikehold av vev.',
    },
    {
      id: 'bio1-3-4-mitose-faser',
      type: 'text',
      title: 'Mitosens faser',
      content: `Mitose er kjernedens delingsprosess, der de to identiske kopiene av DNA-et (søsterkromatidene) fordeles likt mellom to nye kjerner. Prosessen deles inn i følgende faser:

## Profase
- **Kondensering**: Kromatinet kondenseres til tydelig synlige kromosomer. Hvert kromosom består av to søsterkromatider holdt sammen ved sentromeren.
- **Spindeldannelse**: Sentrosomene (med centriolepar i dyreceller) beveger seg mot cellens poler og begynner å danne mitosespindelen – et nettverk av mikrotubuli.
- **Kjernemembranens oppløsning**: Mot slutten av profasen begynner kjernemembranens (kjernehinnens) nedbrytning.
- **Nukleolus forsvinner**: Nucleolus (kjerneorganellen som produserer ribosom-RNA) løses opp.

## Prometafase
- Kjernehinnen er nå fullstendig brutt ned.
- **Kinetochor-feste**: Spindelfibre fester seg til **kinetochorene** – proteinkomplekser som sitter på sentromeren til hvert kromosom.
- Hver søsterkromatid har sitt eget kinetochor, og spindelfibre fra motsatte poler fester seg til hvert kinetochor.
- Kromosomene begynner å bevege seg mot midten av cellen.

## Metafase
- Alle kromosomer er **stilt opp langs metafaseplaten** (cellens ekvatorplan).
- Hvert kromosom er festet til spindelfibre fra begge polene via kinetochorene.
- **Spindelkontrollpunktet (M-sjekkpunktet)** verifiserer at alle kromosomer er korrekt festet før cellen går videre.
- Metafasen er et viktig kontrollpunkt – cellen «venter» til alle kromosomer har korrekt bipolart feste.

## Anafase
- **Separering av søsterkromatider**: Cohesin-proteiner som holder søsterkromatidene sammen brytes ned. Sentromeren splittes, og søsterkromatidene dras mot cellens motsatte poler.
- **Anafase A**: Kinetochor-mikrotubuli forkortes og drar kromatidene mot polene.
- **Anafase B**: Polene skyves fra hverandre av ikke-kinetochor-mikrotubuli, slik at cellen strekkes.
- Etter separering er hver søsterkromatid nå et selvstendig kromosom.

## Telofase
- Kromosomene ankommer polene og begynner å **dekondensere** tilbake til kromatin.
- **Kjernehinnen gjenoppbygges** rundt hvert sett med kromosomer.
- Nucleolus dannes igjen.
- Mitosespindelen løses opp.
- Resultatet er to separate kjerner, hver med et komplett sett av kromosomer.

## Cytokinese – deling av cytoplasmaet

Cytokinese er den fysiske delingen av cellen i to, og den foregår ulikt i dyre- og planteceller:

**Dyreceller – kløyvefure (cleavage furrow)**
- En ring av aktin- og myosinfilamenter (kontraktil ring) dannes rundt cellens midtplan.
- Ringen trekker seg sammen som en snor som strammes, og klemmer cytoplasmaet inn til cellen deles i to.
- Innsnevringen som dannes, kalles **kløyvefuren**.

**Planteceller – celleplaten (cell plate)**
- Planteceller har en stiv cellevegg som gjør innklemming umulig.
- I stedet dannes en **celleplate** fra midten av cellen og utover, bygd opp av vesikler fra Golgi-apparatet.
- Celleplate vokser til den smelter sammen med den eksisterende cellemembranen og celleveggen, og deler cellen i to.`,
    },
    {
      id: 'bio1-3-4-def-kinetochor',
      type: 'definition',
      title: 'Kinetochor',
      content: 'Et proteinkompleks som sitter på sentromeren til hvert kromosom (en per søsterkromatid). Kinetochoret fungerer som festepunkt for spindelfibrene under celledeling, og er avgjørende for korrekt separering av kromosomer i mitose og meiose.',
    },
    {
      id: 'bio1-3-4-mitose-resultat',
      type: 'note',
      title: 'Resultat og funksjon av mitose',
      content: `**Resultat**: Mitose produserer **2 genetisk identiske diploide datterceller** (2n).

Hver dattercelle har nøyaktig samme antall kromosomer og samme DNA-sekvens som modercellen.

**Funksjoner for mitose:**
- **Vekst**: Fra en encelletegg til en flercellet organisme
- **Reparasjon**: Erstatning av skadede eller døde celler (f.eks. sårhelingsprosessen)
- **Vedlikehold**: Kontinuerlig fornyelse av celler med kort levetid (hudceller, blodceller, tarmepitelceller)
- **Ukjønnet formering**: Hos noen organismer (bakterier bruker binær fisjon, men mange eukaryoter bruker mitose for ukjønnet formering – f.eks. knoppskyting hos gjær, vegetativ formering hos planter)`,
    },

    // =====================================================================
    // MEIOSE
    // =====================================================================
    {
      id: 'bio1-3-4-def-meiose',
      type: 'definition',
      title: 'Meiose',
      content: 'En type celledeling der en diploid celle (2n) gjennomgår to påfølgende delinger (meiose I og meiose II) for å produsere fire genetisk unike haploide celler (n). Meiose er nødvendig for å danne kjønnsceller (gameter) og er grunnlaget for genetisk variasjon hos organismer med kjønnet formering.',
    },
    {
      id: 'bio1-3-4-meiose-hvorfor',
      type: 'text',
      title: 'Hvorfor trenger vi meiose?',
      content: `Ved kjønnet formering smelter to kjønnsceller (gameter) sammen ved befruktning for å danne en zygote. Hvis kjønnscellene var diploide (2n), ville avkommet fått dobbelt antall kromosomer (4n), og antallet ville fordobles for hver generasjon.

**Meiose løser dette problemet** ved å halvere kromosomtallet:
- Diploide celler (2n = 46 hos mennesker) → haploide gameter (n = 23)
- Ved befruktning: n + n = 2n (23 + 23 = 46)
- Dermed opprettholdes kromosomtallet fra generasjon til generasjon.

I tillegg til å halvere kromosomtallet, introduserer meiosen genetisk variasjon gjennom overkrysning og uavhengig assortiment. Dette gjør at hvert avkom er genetisk unikt – et viktig grunnlag for evolusjon ved naturlig seleksjon.`,
    },
    {
      id: 'bio1-3-4-meiose-1',
      type: 'text',
      title: 'Meiose I – reduksjonsdelingen',
      content: `Meiose I kalles **reduksjonsdelingen** fordi kromosomtallet halveres. Den store forskjellen fra mitose er at **homologe kromosomer** (ikke søsterkromatider) skilles fra hverandre.

## Profase I
Profase I er den lengste og mest komplekse fasen i meiose, og inneholder flere unike hendelser:

- **Kondensering**: Kromatinet kondenseres til synlige kromosomer, hvert bestående av to søsterkromatider.
- **Synapsis**: De homologe kromosomene finner hverandre og legger seg tett inntil hverandre i par. Hvert par kalles en **bivalent** (eller tetrad, fordi det består av fire kromatider: to søsterkromatider fra hvert homologt kromosom).
- **Overkrysning (crossing over)**: Ikke-søster-kromatider fra de to homologe kromosomene utveksler DNA-segmenter. Punktene der kromatidene krysser over, kalles **chiasmata** (entall: chiasma). Overkrysning skaper nye kombinasjoner av alleler og er en viktig kilde til genetisk variasjon.
- Spindeldannelse og nedbrytning av kjernehinnen skjer som i mitose.

## Metafase I
- **Bivalentene stiller seg opp langs metafaseplaten** – ikke enkeltkromosomer som i mitose.
- Orienteringen av hvert bivalent er tilfeldig: det ene homologe kromosomet kan peke mot enten den ene eller den andre polen. Denne tilfeldige plasseringen kalles **uavhengig assortiment** (independent assortment) og bidrar til genetisk variasjon.
- Spindelkontrollpunktet kontrollerer at alle bivalenter er korrekt festet.

## Anafase I
- **Homologe kromosomer skilles** – dette er det avgjørende trinnet i reduksjonsdelingen.
- Merk: **Søsterkromatidene forblir festet til hverandre**. Det er cohesin-proteiner langs kromosomarmer som brytes, mens cohesin ved sentromeren bevares.
- Hvert homologt kromosom (bestående av to søsterkromatider) dras mot sin pol.
- Resultatet: Hver pol får n kromosomer (haploid antall), men hvert kromosom består fortsatt av to søsterkromatider.

## Telofase I og cytokinese I
- Kromosomene ankommer polene.
- Kjernehinnen kan (men trenger ikke) gjenoppbygges.
- Cytokinese deler cellen i to.
- Resultatet er **to haploide celler** (n), der hvert kromosom fortsatt har to søsterkromatider.

Merk: Det skjer **ingen ny DNA-replikasjon** mellom meiose I og meiose II.`,
    },
    {
      id: 'bio1-3-4-def-overkrysning',
      type: 'definition',
      title: 'Overkrysning (crossing over)',
      content: 'Utveksling av DNA-segmenter mellom ikke-søster-kromatider fra homologe kromosomer under profase I i meiose. Overkrysning skjer ved chiasmata og fører til nye kombinasjoner av alleler på de rekombinerte kromatidene. Dette er en viktig kilde til genetisk variasjon.',
    },
    {
      id: 'bio1-3-4-meiose-2',
      type: 'text',
      title: 'Meiose II – ekvatordelingen',
      content: `Meiose II ligner på mitose, men utgangspunktet er en haploid celle (n) i stedet for en diploid. Det viktigste som skjer, er at **søsterkromatidene skilles**.

## Profase II
- Kromosomene kondenseres (dersom de ble dekondensert etter meiose I).
- Ny spindel dannes.
- Kjernehinnen (dersom den ble gjenoppbygget) løses opp igjen.

## Metafase II
- Kromosomene stiller seg opp langs metafaseplaten, med kinetochorene festet til spindelfibre fra motsatte poler.
- Dette ligner metafasen i mitose.

## Anafase II
- Cohesin ved sentromeren brytes ned.
- **Søsterkromatidene skilles** og dras mot cellens motsatte poler.
- Etter separering er hver kromatid nå et selvstendig kromosom.

## Telofase II og cytokinese II
- Kromosomene dekondenserer.
- Kjernehinnen gjenoppbygges rundt hvert kromosomsett.
- Cytokinese deler cellene.
- Resultatet: **Fire haploide celler (n)**, alle genetisk unike.

## Oversikt over hele meiosen

| Trinn | Startcelle | Resultat | Kromatider separeres? |
|---|---|---|---|
| Meiose I | 1 diploid celle (2n) | 2 haploide celler (n) | Nei – homologe kromosomer skilles |
| Meiose II | 2 haploide celler (n) | 4 haploide celler (n) | Ja – søsterkromatider skilles |`,
    },

    // =====================================================================
    // GENETISK VARIASJON
    // =====================================================================
    {
      id: 'bio1-3-4-genetisk-variasjon',
      type: 'text',
      title: 'Genetisk variasjon fra meiose',
      content: `Meiose produserer genetisk unike celler gjennom tre mekanismer:

## 1. Overkrysning (crossing over)
Under profase I utveksler ikke-søster-kromatider DNA-segmenter. Dette skaper rekombinerte kromosomer med nye kombinasjoner av alleler. Overkrysning skjer minst én gang per kromosompar, og ofte flere ganger. Hvert chiasma kan gi opphav til nye allelkombinasjoner som ikke fantes i foreldrecellene.

## 2. Uavhengig assortiment (independent assortment)
I metafase I orienterer hvert bivalent seg tilfeldig langs metafaseplaten. Det betyr at det er tilfeldig hvilket av de to homologe kromosomene (det maternelle eller det paternelle) som går til hvilken pol.

Med $n$ kromosompar gir dette $2^n$ mulige kombinasjoner av maternelle og paternelle kromosomer i gametene.

Hos mennesker med 23 kromosompar:
$$2^{23} = 8\\,388\\,608 \\approx 8{,}4 \\text{ millioner mulige kombinasjoner}$$

Og dette er **bare fra uavhengig assortiment** – overkrysning gir enda mer variasjon.

## 3. Tilfeldig befruktning
Hvilken sædcelle som befrukter hvilken eggcelle er tilfeldig. Med 8,4 millioner mulige gameter fra hver forelder, blir antall mulige kombinasjoner ved befruktning:

$$8\\,388\\,608 \\times 8\\,388\\,608 \\approx 7 \\times 10^{13}$$

Det vil si over **70 billioner** mulige genetiske kombinasjoner – før vi tar med overkrysning. I praksis er antallet mulige kombinasjoner astronomisk stort. Det er derfor ingen søsken (utenom eneggede tvillinger) noensinne er genetisk identiske.`,
    },
    {
      id: 'bio1-3-4-ex-kromosomtelling',
      type: 'example',
      title: 'Eksempel: Telle kromosomer gjennom meiose',
      problem: 'En organisme har diploid kromosomtall 2n = 8. Hvor mange kromosomer og kromatider har cellene i de ulike stadiene av meiosen?',
      solution: `Vi starter med en diploid celle der 2n = 8 og n = 4.

**Etter S-fasen (DNA-replikasjon, før meiose I starter):**
- 8 kromosomer, hvert med 2 søsterkromatider = 16 kromatider totalt

**Metafase I:**
- 4 bivalenter (par av homologe kromosomer) stilt opp ved metafaseplaten
- Hver bivalent = 4 kromatider (tetrad)
- Totalt: 8 kromosomer, 16 kromatider

**Etter meiose I (to celler):**
- Hver celle: 4 kromosomer (n = 4)
- Hvert kromosom har fortsatt 2 søsterkromatider
- Hver celle: 4 kromosomer, 8 kromatider

**Etter meiose II (fire celler):**
- Hver celle: 4 kromosomer (n = 4)
- Hvert kromosom har nå bare 1 kromatid (søsterkromatidene er skilt)
- Hver celle: 4 kromosomer, 4 kromatider

**Oppsummering:**

| Stadium | Antall celler | Kromosomer per celle | Kromatider per celle |
|---|---|---|---|
| Før S-fasen | 1 | 8 (2n) | 8 |
| Etter S-fasen | 1 | 8 (2n) | 16 |
| Etter meiose I | 2 | 4 (n) | 8 |
| Etter meiose II | 4 | 4 (n) | 4 |`,
    },
    {
      id: 'bio1-3-4-ex-gametkombinasjoner',
      type: 'example',
      title: 'Eksempel: Beregne antall mulige gametkombinasjoner',
      problem: 'En organisme har diploid kromosomtall 2n = 6 (altså n = 3 kromosompar). Hvor mange genetisk ulike gameter kan denne organismen danne bare gjennom uavhengig assortiment (uten å ta hensyn til overkrysning)?',
      solution: `**Formelen for uavhengig assortiment:**
$$\\text{Antall mulige kombinasjoner} = 2^n$$

der $n$ er antall kromosompar (haploid tall).

**Beregning:**
Med $n = 3$:
$$2^3 = 8 \\text{ mulige gamettyper}$$

**Visualisering:** Vi kan kalle de tre kromosomparene A, B og C. Hvert par har en maternal (m) og en paternal (p) utgave:

| Gamet nr. | Kromosom A | Kromosom B | Kromosom C |
|---|---|---|---|
| 1 | Am | Bm | Cm |
| 2 | Am | Bm | Cp |
| 3 | Am | Bp | Cm |
| 4 | Am | Bp | Cp |
| 5 | Ap | Bm | Cm |
| 6 | Ap | Bm | Cp |
| 7 | Ap | Bp | Cm |
| 8 | Ap | Bp | Cp |

**Merk:** Om to slike organismer parer seg, er antall mulige zygotekombinsjoner:
$$8 \\times 8 = 64$$

For mennesker med $n = 23$: $2^{23} \\approx 8{,}4$ millioner mulige gamettyper per individ, og ca. $7 \\times 10^{13}$ mulige zygotekombinasjoner.`,
    },

    // =====================================================================
    // SAMMENLIGNING MITOSE VS. MEIOSE
    // =====================================================================
    {
      id: 'bio1-3-4-sammenligning',
      type: 'text',
      title: 'Sammenligning: mitose vs. meiose',
      content: `Her er en systematisk sammenligning av de to typene celledeling:

| Egenskap | Mitose | Meiose |
|---|---|---|
| **Antall delinger** | 1 | 2 (meiose I + meiose II) |
| **Antall datterceller** | 2 | 4 |
| **Kromosomtall i datterceller** | Diploid (2n) – likt som modercellen | Haploid (n) – halvert |
| **Genetisk likhet** | Identiske med modercellen | Genetisk unike |
| **Overkrysning** | Nei (eller ekstremt sjelden) | Ja – i profase I |
| **Synapsis/bivalenter** | Nei | Ja – i profase I |
| **Hva skilles i anafasen?** | Søsterkromatider | Anafase I: homologe kromosomer. Anafase II: søsterkromatider |
| **Uavhengig assortiment** | Nei | Ja – i metafase I |
| **Funksjon** | Vekst, reparasjon, ukjønnet formering | Danning av gameter (kjønnsceller) |
| **Hvor foregår det?** | Somatiske celler (kroppsceller) | Kjønnsceller (gonader: testikler og eggstokker) |
| **DNA-replikasjon mellom delingene?** | Ja (ny S-fase) | Nei (ingen replikasjon mellom meiose I og II) |`,
    },
    {
      id: 'bio1-3-4-ex-sammenligning',
      type: 'example',
      title: 'Eksempel: Sammenligne utfall av mitose og meiose',
      problem: 'En organisme har diploid kromosomtall 2n = 6 (tre kromosompar). Sammenlign resultatet av mitose og meiose for en celle i denne organismen.',
      solution: `**Mitose:**
- Startcelle: 1 diploid celle med 6 kromosomer (2n = 6)
- Resultat: **2 datterceller**, hver med 6 kromosomer (2n = 6)
- Dattercellene er **genetisk identiske** med modercellen og med hverandre.

**Meiose:**
- Startcelle: 1 diploid celle med 6 kromosomer (2n = 6)
- Etter meiose I: 2 haploide celler, hver med 3 kromosomer (n = 3), hver med 2 søsterkromatider per kromosom.
- Etter meiose II: **4 datterceller**, hver med 3 kromosomer (n = 3)
- Dattercellene er **genetisk unike** på grunn av overkrysning og uavhengig assortiment.

**Nøkkelforskjeller for denne organismen:**

| | Mitose | Meiose |
|---|---|---|
| Antall datterceller | 2 | 4 |
| Kromosomer per dattercelle | 6 (2n) | 3 (n) |
| Genetisk resultat | Identiske | Unike |
| Mulige gametkombinasjoner | Ikke relevant | $2^3 = 8$ ulike typer |`,
    },

    // =====================================================================
    // NONDISJUNKSJON
    // =====================================================================
    {
      id: 'bio1-3-4-nondisjunksjon',
      type: 'text',
      title: 'Nondisjunksjon og aneuploidi',
      content: `Noen ganger går noe galt under meiose (eller mitose), og kromosomene fordeles ikke riktig. Når homologe kromosomer (i meiose I) eller søsterkromatider (i meiose II eller mitose) ikke skilles korrekt, kalles det **nondisjunksjon**.

## Konsekvenser av nondisjunksjon

Nondisjunksjon fører til **aneuploidi** – datterceller med feil antall kromosomer:
- **Trisomi**: En celle med ett ekstra kromosom (2n + 1). Gameten hadde n + 1 kromosomer.
- **Monosomi**: En celle som mangler ett kromosom (2n − 1). Gameten hadde n − 1 kromosomer.

De fleste aneuploidier er dødelige under fosterutviklingen. Noen få er forenlige med liv:

## Eksempler hos mennesker

**Trisomi 21 – Downs syndrom**
- Tre kopier av kromosom 21 (totalt 47 kromosomer).
- Gir karakteristiske fysiske trekk, varierende grad av utviklingshemning og økt risiko for visse sykdommer.
- Risikoen øker med morens alder, særlig etter 35 år.

**Turners syndrom (45, X)**
- Kvinner med bare ett X-kromosom (monosomi X).
- Kan gi kort kroppshøyde, manglende pubertetsutvikling og infertilitet.

**Klinefelters syndrom (47, XXY)**
- Menn med et ekstra X-kromosom.
- Kan gi lang kroppshøyde, liten testikkelstørrelse og nedsatt fertilitet.

**Merk:** Nondisjunksjon kan også skje under mitose i somatiske celler. Da kan det oppstå en blanding av normale og aneuploid celler i organismen (mosaikk). Nondisjunksjon i somatiske celler kan også bidra til kreftutvikling.`,
    },

    // =====================================================================
    // GAMETOGENESE
    // =====================================================================
    {
      id: 'bio1-3-4-gametogenese',
      type: 'text',
      title: 'Gametogenese: spermatogenese og oogenese',
      content: `Gametogenese er prosessen der diploide celler i gonadene (kjønnskjertlene) gjennomgår meiose for å danne haploide gameter. Prosessen er forskjellig hos menn og kvinner.

## Spermatogenese (hos menn)

Spermatogenese skjer i **testiklene** og foregår kontinuerlig fra puberteten:

1. **Spermatogonium** (2n) – stamcelle som deler seg ved mitose for å opprettholde celleforrådet.
2. **Primær spermatocytt** (2n) – gjennomgår meiose I.
3. **Sekundære spermatocytter** (n) – gjennomgår meiose II.
4. **Spermatider** (n) – fire stykker, som alle modnes til spermatozoer (sædceller).
5. **Spermatozoer** (n) – modne sædceller med flagell (hale) for bevegelse.

**Resultat:** 1 primær spermatocytt → **4 funksjonelle sædceller**. Produksjonen er enorm – en mann produserer ca. 200–300 millioner sædceller per dag.

## Oogenese (hos kvinner)

Oogenese skjer i **eggstokkene** og har et helt annet tidsmønster:

1. **Oogonium** (2n) – fosterstadium; deler seg ved mitose og starter meiose I allerede før fødselen.
2. **Primær oocytt** (2n) – starter meiose I under fosterutviklingen, men stopper i profase I (diktyotæn-stadiet) og forblir «frosset» til puberteten.
3. Etter puberteten fullføres meiose I for én oocytt per menstruasjonssyklus:
   - **Sekundær oocytt** (n) – den store cellen som får mesteparten av cytoplasmaet.
   - **Første pollegeme** (n) – liten celle som vanligvis degenererer.
4. Meiose II fullføres **bare dersom eggcellen befruktes**:
   - **Moden eggcelle (ovum)** (n) – den store, funksjonelle gameten.
   - **Andre pollegeme** (n) – degenererer.

**Resultat:** 1 primær oocytt → **1 funksjonell eggcelle** + 2–3 pollegemer (som degenererer).

## Sammenligning

| Egenskap | Spermatogenese | Oogenese |
|---|---|---|
| Sted | Testikler | Eggstokker |
| Start | Puberteten | Fostertiden |
| Varighet | Kontinuerlig hele livet | Syklisk (ca. 1 per måned) |
| Antall gameter | 4 per meiose | 1 per meiose |
| Størrelse | Små celler med flagell | Stor celle med mye cytoplasma |
| Cytoplasmafordeling | Lik | Ulik (asymmetrisk) |
| Stopp i meiose | Nei | Ja – i profase I og metafase II |`,
    },
  ],

  // =======================================================================
  // OPPGAVER
  // =======================================================================
  exercises: [
    {
      id: 'bio1-3-4-ex1',
      number: '3.4.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedforskjellen mellom mitose og meiose?',
      options: [
        { id: 'a', text: 'Mitose produserer 4 celler, meiose produserer 2 celler', isCorrect: false },
        { id: 'b', text: 'Mitose produserer 2 genetisk identiske diploide celler, meiose produserer 4 genetisk unike haploide celler', isCorrect: true },
        { id: 'c', text: 'Mitose forekommer bare i kjønnsceller, meiose forekommer i kroppsceller', isCorrect: false },
        { id: 'd', text: 'Mitose involverer overkrysning, meiose gjør det ikke', isCorrect: false },
      ],
      solution: 'Mitose gir 2 genetisk identiske diploide datterceller (2n), mens meiose gir 4 genetisk unike haploide datterceller (n). Mitose brukes til vekst og reparasjon, meiose til å danne kjønnsceller.',
    },
    {
      id: 'bio1-3-4-ex2',
      number: '3.4.2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'I hvilken fase av cellesyklusen kopieres (replikeres) DNA?',
      options: [
        { id: 'a', text: 'G1-fasen', isCorrect: false },
        { id: 'b', text: 'S-fasen (syntesefasen)', isCorrect: true },
        { id: 'c', text: 'G2-fasen', isCorrect: false },
        { id: 'd', text: 'M-fasen (mitosen)', isCorrect: false },
      ],
      solution: 'DNA-replikasjon skjer i S-fasen (syntesefasen) av interfasen. Etter S-fasen består hvert kromosom av to søsterkromatider bundet sammen ved sentromeren.',
    },
    {
      id: 'bio1-3-4-ex3',
      number: '3.4.3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skilles i anafasen under mitose?',
      options: [
        { id: 'a', text: 'Homologe kromosomer', isCorrect: false },
        { id: 'b', text: 'Bivalenter', isCorrect: false },
        { id: 'c', text: 'Søsterkromatider', isCorrect: true },
        { id: 'd', text: 'Kinetochorer', isCorrect: false },
      ],
      solution: 'I anafasen under mitose skilles søsterkromatidene fra hverandre når cohesin-proteiner ved sentromeren brytes ned. Hver søsterkromatid dras mot en av cellens poler og blir et selvstendig kromosom. Homologe kromosomer skilles derimot i anafase I under meiose.',
    },
    {
      id: 'bio1-3-4-ex4',
      number: '3.4.4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke av følgende hendelser er unike for meiose og forekommer IKKE i mitose?',
      options: [
        { id: 'a', text: 'Kondensering av kromosomer og nedbrytning av kjernehinnen', isCorrect: false },
        { id: 'b', text: 'Synapsis av homologe kromosomer og overkrysning', isCorrect: true },
        { id: 'c', text: 'Spindeldannelse og separering av kromatider', isCorrect: false },
        { id: 'd', text: 'Cytokinese og deling av cytoplasmaet', isCorrect: false },
      ],
      solution: 'Synapsis (parring av homologe kromosomer) og overkrysning (crossing over) er unike for meiose og skjer i profase I. Alle de andre alternativene forekommer i både mitose og meiose.',
    },
    {
      id: 'bio1-3-4-ex5',
      number: '3.4.5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En organisme har diploid kromosomtall 2n = 14. Hvor mange kromosomer finnes i hver celle etter meiose I?',
      options: [
        { id: 'a', text: '14', isCorrect: false },
        { id: 'b', text: '7', isCorrect: true },
        { id: 'c', text: '28', isCorrect: false },
        { id: 'd', text: '3,5', isCorrect: false },
      ],
      solution: 'Meiose I er reduksjonsdelingen, der homologe kromosomer skilles. Kromosomtallet halveres fra 2n til n. Med 2n = 14 blir n = 7. Hver celle etter meiose I har altså 7 kromosomer, men hvert kromosom består fortsatt av to søsterkromatider.',
    },
    {
      id: 'bio1-3-4-ex6',
      number: '3.4.6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar de tre mekanismene som bidrar til genetisk variasjon under meiose og befruktning. Hvor mange genetisk ulike gameter kan et menneske (2n = 46) teoretisk danne kun gjennom uavhengig assortiment?',
      solution: `**De tre mekanismene:**

1. **Overkrysning (crossing over):** I profase I utveksler ikke-søster-kromatider fra homologe kromosomer DNA-segmenter. Dette gir rekombinerte kromosomer med nye allelkombinasjoner.

2. **Uavhengig assortiment:** I metafase I orienterer hvert bivalent seg tilfeldig. Hvilken pol det maternelle eller paternelle kromosomet i hvert par går til, er uavhengig av de andre parene.

3. **Tilfeldig befruktning:** Hvilken sædcelle som befrukter hvilken eggcelle er tilfeldig, og bidrar til ytterligere genetisk variasjon i avkommet.

**Beregning:**
Med n = 23 kromosompar hos mennesker gir uavhengig assortiment:
$2^{23} = 8\\,388\\,608 \\approx 8{,}4$ millioner mulige gamettyper.

Med tilfeldig befruktning: $8{,}4 \\text{ mill.} \\times 8{,}4 \\text{ mill.} \\approx 7 \\times 10^{13}$ mulige genetiske kombinasjoner, og da er overkrysning ennå ikke regnet med.`,
      hints: [
        'Husk de tre kildene til variasjon: overkrysning, uavhengig assortiment og tilfeldig befruktning.',
        'Formelen for uavhengig assortiment er 2^n, der n er antall kromosompar.',
      ],
    },
    {
      id: 'bio1-3-4-ex7',
      number: '3.4.7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de fire hovedfasene i mitose (profase, metafase, anafase, telofase) og forklar kort hva som skjer i hver fase.',
      solution: `**Profase:**
- Kromatinet kondenseres til synlige kromosomer (hvert kromosom består av to søsterkromatider).
- Spindelen begynner å dannes fra sentrosomene.
- Kjernehinnen begynner å brytes ned.
- Nucleolus forsvinner.

**Metafase:**
- Alle kromosomer er stilt opp langs metafaseplaten (ekvatorplanet).
- Hvert kinetochor er festet til spindelfibre fra motsatte poler.
- Spindelkontrollpunktet kontrollerer at alle kromosomer er korrekt festet.

**Anafase:**
- Cohesin ved sentromeren brytes ned.
- Søsterkromatidene skilles og dras mot cellens motsatte poler av spindelfibrene.
- Cellen strekkes i lengderetningen.

**Telofase:**
- Kromosomene ankommer polene og dekondenserer.
- Kjernehinnen gjenoppbygges rundt hvert kromosomsett.
- Nucleolus dannes igjen.
- Spindelen løses opp.

Etter telofasen følger **cytokinese**, der cytoplasmaet deles og to separate datterceller dannes.`,
      hints: [
        'Tenk på rekkefølgen: kondensering → oppstilling → separering → gjenoppbygging.',
        'Husk at M-sjekkpunktet kontrollerer at alt er korrekt i metafasen.',
      ],
    },
    {
      id: 'bio1-3-4-ex8',
      number: '3.4.8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva cellesyklus-sjekkpunkter er. Beskriv de tre hovedsjekkpunktene (G1, G2 og M) og hva de kontrollerer. Hva kan skje dersom sjekkpunktene svikter?',
      solution: `**Sjekkpunkter** er kontrollmekanismer i cellesyklusen som sikrer at hvert trinn er fullført korrekt før cellen går videre til neste fase.

**G1-sjekkpunktet (restriksjonspunktet):**
- Kontrollerer cellens størrelse, næringstilgang og om DNA er uskadet.
- Vurderer om cellen mottar vekstfaktorsignaler som tilsier deling.
- Dersom forholdene ikke er gunstige, kan cellen gå inn i G0 (hvilefase).

**G2-sjekkpunktet:**
- Kontrollerer at DNA-replikasjonen er fullstendig og korrekt gjennomført.
- Sjekker for DNA-skader som eventuelt har oppstått under replikasjonen.
- Verifiserer at cellen har nok proteiner og energi til å gjennomføre mitose.

**M-sjekkpunktet (spindelkontrollpunktet):**
- Kontrollerer at alle kromosomer er korrekt festet til spindelfibre fra begge poler via kinetochorene.
- Forhindrer at anafasen starter før alle kromosomer har bipolart feste.

**Når sjekkpunktene svikter:**
Cellen kan begynne å dele seg ukontrollert, noe som er grunnlaget for kreftutvikling. Mutasjoner i proto-onkogener (som kan bli onkogener) eller tumorsuppressorgener (som p53) kan føre til at reguleringsmekanismene brytes, og cellen passerer sjekkpunkter den normalt ville blitt stoppet ved.`,
      hints: [
        'Tenk på sjekkpunktene som kvalitetskontroller i en fabrikk.',
        'Husk sammenhengen mellom sjekkpunktsvikt og kreft.',
      ],
    },
    {
      id: 'bio1-3-4-ex9',
      number: '3.4.9',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er nondisjunksjon?',
      options: [
        { id: 'a', text: 'Normal separering av søsterkromatider i anafasen', isCorrect: false },
        { id: 'b', text: 'Feil i kromosomseparering der homologe kromosomer eller søsterkromatider ikke skilles korrekt', isCorrect: true },
        { id: 'c', text: 'Overkrysning mellom ikke-homologe kromosomer', isCorrect: false },
        { id: 'd', text: 'Manglende DNA-replikasjon i S-fasen', isCorrect: false },
      ],
      solution: 'Nondisjunksjon er feil i kromosomseparering under celledeling, der homologe kromosomer (meiose I) eller søsterkromatider (meiose II / mitose) ikke skilles korrekt. Resultatet er celler med feil antall kromosomer (aneuploidi), f.eks. trisomi 21 (Downs syndrom) eller Turners syndrom (45,X).',
    },
    {
      id: 'bio1-3-4-ex10',
      number: '3.4.10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign meiose I og meiose II. Beskriv hva som skilles i anafasen i hver av de to delingene, og forklar hvorfor meiose I kalles «reduksjonsdelingen» mens meiose II kalles «ekvatordelingen».',
      solution: `**Meiose I – reduksjonsdelingen:**
- I profase I skjer synapsis og overkrysning mellom homologe kromosomer.
- I metafase I stiller bivalenter (par av homologe kromosomer) seg opp langs metafaseplaten.
- I **anafase I skilles homologe kromosomer** fra hverandre. Søsterkromatidene forblir festet sammen ved sentromeren.
- Resultatet er to haploide celler (n), der hvert kromosom fortsatt har to søsterkromatider.
- Kalles «reduksjonsdeling» fordi kromosomtallet halveres: fra diploid (2n) til haploid (n).

**Meiose II – ekvatordelingen:**
- Ligner på mitose, men utgangscellen er haploid.
- I metafase II stiller enkeltkromosomer (bestående av to søsterkromatider) seg opp langs metafaseplaten.
- I **anafase II skilles søsterkromatidene** fra hverandre.
- Resultatet er fire haploide celler (n), der hvert kromosom nå bare har én kromatid.
- Kalles «ekvatordelingen» fordi kromosomtallet forblir det samme (n → n); det er bare søsterkromatidene som skilles.

**Nøkkelforskjellen:** Meiose I skiller homologe kromosomer (og halverer kromosomtallet), mens meiose II skiller søsterkromatider (uten å endre kromosomtallet). Ingen DNA-replikasjon skjer mellom de to delingene.`,
      hints: [
        'Fokuser på hva som skilles i anafasen i hver deling.',
        'Tenk på forskjellen mellom «homologe kromosomer» og «søsterkromatider».',
      ],
    },
    {
      id: 'bio1-3-4-ex11',
      number: '3.4.11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv hovedforskjellene mellom spermatogenese og oogenese. Hvorfor produserer meiosen bare én funksjonell eggcelle, mens den produserer fire funksjonelle sædceller?',
      solution: `**Spermatogenese:**
- Skjer i testiklene, kontinuerlig fra puberteten.
- En primær spermatocytt gjennomgår meiose I og II og danner 4 like store spermatider.
- Alle 4 spermatidene modnes til funksjonelle sædceller med flagell.
- Cytoplasmaet fordeles likt mellom de fire cellene.
- Produksjonen er massiv: ca. 200–300 millioner sædceller per dag.

**Oogenese:**
- Skjer i eggstokkene, med oppstart allerede under fosterutviklingen.
- Meiose I stopper i profase I og gjenopptas først ved puberteten (ca. én oocytt per menstruasjonssyklus).
- Meiose II fullføres bare ved befruktning.
- Cytoplasmaet fordeles **ujevnt**: den ene dattercellen får mesteparten av cytoplasmaet, den andre blir et lite pollegeme som degenererer.
- Resultatet er **1 stor, funksjonell eggcelle** + 2–3 pollegemer.

**Hvorfor bare én eggcelle?**
Eggcellen trenger mye cytoplasma med organeller, næringsstoffer, mRNA og proteiner for å støtte den tidlige embryonale utviklingen etter befruktning. Ved å gi mesteparten av cytoplasmaet til én celle, sikres det at eggcellen har tilstrekkelige ressurser. Sædcellene trenger derimot svært lite cytoplasma – de skal bare levere DNA og trenger først og fremst en flagell for å svømme til eggcellen.`,
      hints: [
        'Tenk på funksjonen til egg- og sædceller – hva trenger de for å gjøre jobben sin?',
        'Asymmetrisk cytoplasmafordeling er nøkkelen til å forstå pollegemer.',
      ],
    },
    {
      id: 'bio1-3-4-ex12',
      number: '3.4.12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En menneskecelle har 2n = 46 kromosomer. Fyll ut tabellen med antall kromosomer og kromatider per celle i de ulike stadiene under meiose.\n\n| Stadium | Kromosomer per celle | Kromatider per celle |\n|---|---|---|\n| Etter S-fasen (før meiose I) | ? | ? |\n| Etter meiose I | ? | ? |\n| Etter meiose II | ? | ? |',
      solution: `| Stadium | Kromosomer per celle | Kromatider per celle |
|---|---|---|
| Etter S-fasen (før meiose I) | 46 (2n) | 92 |
| Etter meiose I | 23 (n) | 46 |
| Etter meiose II | 23 (n) | 23 |

**Forklaring:**

**Etter S-fasen:** DNA er replikert. Cellen har fortsatt 46 kromosomer, men hvert kromosom består nå av to søsterkromatider, altså 46 × 2 = 92 kromatider totalt.

**Etter meiose I:** Homologe kromosomer er skilt. Cellen er nå haploid med 23 kromosomer, men hvert kromosom har fortsatt to søsterkromatider: 23 × 2 = 46 kromatider.

**Etter meiose II:** Søsterkromatidene er skilt. Cellen har 23 kromosomer, og hvert kromosom består av bare én kromatid: 23 × 1 = 23 kromatider.`,
      hints: [
        'Husk at et kromosom kan bestå av enten 1 eller 2 kromatider, avhengig av om DNA-replikasjon har skjedd.',
        'Meiose I halverer kromosomtallet, meiose II halverer kromatidtallet per kromosom.',
      ],
    },
    {
      id: 'bio1-3-4-ex13',
      number: '3.4.13',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilket av følgende utsagn om cytokinese er korrekt?',
      options: [
        { id: 'a', text: 'I dyreceller dannes en celleplate fra Golgi-vesikler', isCorrect: false },
        { id: 'b', text: 'I planteceller klemmer en kontraktil ring cytoplasmaet inn', isCorrect: false },
        { id: 'c', text: 'I dyreceller dannes en kløyvefure fra en kontraktil ring av aktin og myosin, mens det i planteceller dannes en celleplate fra Golgi-vesikler', isCorrect: true },
        { id: 'd', text: 'Cytokinese foregår på samme måte i dyre- og planteceller', isCorrect: false },
      ],
      solution: 'I dyreceller dannes en kløyvefure (cleavage furrow) fra en kontraktil ring av aktin- og myosinfilamenter som klemmer cytoplasmaet inn fra utsiden. I planteceller er dette umulig på grunn av den stive celleveggen. I stedet dannes en celleplate fra midten av cellen og utover, bygd opp av vesikler fra Golgi-apparatet.',
    },
    {
      id: 'bio1-3-4-ex14',
      number: '3.4.14',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva som menes med nondisjunksjon og aneuploidi. Gi minst to eksempler på tilstander hos mennesker som skyldes nondisjunksjon, og beskriv kort hva som kjennetegner dem.',
      solution: `**Nondisjunksjon** er en feil under celledeling der kromosomer ikke fordeles korrekt til dattercellene. Det kan skje enten ved at homologe kromosomer ikke skilles i meiose I, eller ved at søsterkromatider ikke skilles i meiose II (eller mitose).

**Aneuploidi** er resultatet av nondisjunksjon: celler med feil antall kromosomer. De vanligste formene er:
- **Trisomi**: ett kromosom for mye (2n + 1)
- **Monosomi**: ett kromosom for lite (2n − 1)

**Eksempler hos mennesker:**

1. **Downs syndrom (trisomi 21):** Tre kopier av kromosom 21, totalt 47 kromosomer. Kjennetegnes av karakteristiske ansiktstrekk, varierende grad av utviklingshemning, økt risiko for hjertefeil og Alzheimers sykdom. Risikoen øker med morens alder.

2. **Turners syndrom (45, X / monosomi X):** Kvinner med bare ett X-kromosom (45 kromosomer totalt). Kjennetegnes av kort kroppshøyde, manglende eller forsinket pubertetsutvikling, og infertilitet. Ofte milde symptomer.

3. **Klinefelters syndrom (47, XXY):** Menn med et ekstra X-kromosom (47 kromosomer totalt). Kjennetegnes av lang kroppshøyde, ofte liten testikkelstørrelse og nedsatt fertilitet. Mange har milde eller ingen merkbare symptomer.

De fleste andre aneuploidier (særlig autosomale monosomier og trisomier av store kromosomer) er letale og fører til spontanabort tidlig i svangerskapet.`,
      hints: [
        'Skille mellom nondisjunksjon (årsaken) og aneuploidi (resultatet).',
        'Tenk på eksemplene: trisomi 21, Turners syndrom, Klinefelters syndrom.',
      ],
    },
  ],
};
