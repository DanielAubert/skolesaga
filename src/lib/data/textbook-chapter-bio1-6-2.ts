/**
 * Biologi 1 - Kapittel 6.2: Immunforsvaret
 *
 * Dekker medfødt og ervervet immunitet, hvite blodceller, antistoffer,
 * vaksiner, immunsykdommer og antibiotikaresistens.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_6_2: TextbookChapter = {
  id: 'bio1-6-2',
  courseId: 'biologi-1',
  chapterNumber: '6.2',
  title: 'Immunforsvaret',
  description:
    'Medfødt og ervervet immunitet, hvite blodceller, antistoffer og vaksiner.',
  estimatedMinutes: 85,
  competenceGoals: [
    'gjøre rede for grupper av sykdomsfremkallende organismer og beskrive hvordan de kan forårsake sykdom',
    'forklare de ulike forsvarslinjene i immunforsvaret, inkludert fysiske barrierer, medfødt immunitet og ervervet immunitet',
    'beskrive fagocytose og den inflammatoriske responsen',
    'forklare hvordan B-celler og T-celler bidrar til det ervervede immunforsvaret',
    'gjøre rede for antistoffers struktur og funksjon',
    'forklare forskjellen mellom aktiv og passiv immunitet, og mellom primær- og sekundærrespons',
    'beskrive virkemåten til vaksiner og begrunne betydningen av vaksinasjonsprogrammer',
    'gjøre rede for immunforsvarsforstyrrelser som allergi, autoimmunitet og immunsvikt',
    'forklare hvordan antibiotika virker og hvorfor antibiotikaresistens er en global trussel',
  ],
  content: [
    // =========================================================================
    // 1. Introduksjon
    // =========================================================================
    {
      id: 'bio1-6-2-intro',
      type: 'text',
      title: 'Hvorfor trenger vi et immunforsvar?',
      content: `# Immunforsvaret

Kroppen vår lever i en verden full av mikroorganismer. Bakterier, virus, sopp og parasitter finnes overalt -- i luften vi puster, maten vi spiser, vannet vi drikker og på alle overflater vi berører. De aller fleste av disse mikroorganismene er ufarlige, og mange er til og med nyttige. Men noen av dem kan gjøre oss syke. Disse kalles **patogener** (sykdomsfremkallende organismer).

For å beskytte oss mot patogener har kroppen utviklet et svært avansert forsvarssystem: **immunforsvaret**. Immunforsvaret er i stand til å:

1. **Gjenkjenne** fremmede stoffer og organismer som trenger inn i kroppen
2. **Bekjempe** og uskadeliggjøre patogener effektivt
3. **Huske** tidligere infeksjoner, slik at kroppen reagerer raskere neste gang

Immunforsvaret kan sammenlignes med et militært forsvar. Det har **barrierer** som hindrer inntrengere (som murer og vollgraver), **hurtige styrker** som reagerer umiddelbart (medfødt immunitet), og **spesialstyrker** som læres opp til å bekjempe bestemte fiender (ervervet immunitet).

Vi deler immunforsvaret inn i tre forsvarslinjer:

- **Første forsvarslinje:** Fysiske og kjemiske barrierer (hud, slimhinner, magesyre)
- **Andre forsvarslinje:** Medfødt (uspesifikk) immunitet (fagocytter, inflammasjon, feber)
- **Tredje forsvarslinje:** Ervervet (spesifikk) immunitet (B-celler, T-celler, antistoffer)`,
    },
    {
      id: 'bio1-6-2-def-immunforsvar',
      type: 'definition',
      title: 'Immunforsvar',
      content:
        'Kroppens samlede forsvarsmekanismer mot sykdomsfremkallende organismer (patogener) og fremmede stoffer. Immunforsvaret omfatter fysiske barrierer, celler, proteiner og kjemiske signalstoffer som samarbeider om å oppdage, nøytralisere og fjerne trusler.',
    },

    // =========================================================================
    // 2. Typer patogener
    // =========================================================================
    {
      id: 'bio1-6-2-patogener',
      type: 'text',
      title: 'Sykdomsfremkallende organismer',
      content: `# Typer patogener

Et **patogen** er en organisme eller et smittestoff som kan forårsake sykdom. De viktigste gruppene er bakterier, virus, sopp, parasitter og prioner.

## 1. Bakterier

Bakterier er **prokaryote** encellede organismer uten cellekjerne. De fleste bakterier er ufarlige eller nyttige, men noen er patogene. Sykdomsfremkallende bakterier kan skade vertscellene direkte eller produsere giftstoffer (**toksiner**) som skader vevet.

**Eksempler på bakterielle sykdommer:**
- Tuberkulose (*Mycobacterium tuberculosis*)
- Streptokok-halsbetennelse (*Streptococcus pyogenes*)
- Salmonellose (*Salmonella*-arter)
- Borreliose (*Borrelia burgdorferi*)

**Behandling:** Bakterielle infeksjoner kan behandles med **antibiotika**, som angriper strukturer som er unike for bakterier (f.eks. celleveggen eller ribosomene).

## 2. Virus

Virus er ikke levende organismer i tradisjonell forstand. De mangler egen metabolisme og kan ikke formere seg uten en vertscelle. Et virus består av **arvemateriale** (DNA eller RNA) omgitt av en **proteinkappe** (kapsid), og noen virus har i tillegg en **lipidmembran** (kappe).

**Replikasjonssyklus:**
1. Viruset fester seg til en vertscelle
2. Det injiserer sitt arvemateriale inn i cellen
3. Vertscellens maskineri kopierer virusets gener og lager nye virusproteiner
4. Nye viruspartikler settes sammen
5. Cellene sprekker (lyserer) eller knoppes av, og nye virus frigjøres

**Eksempler på virussykdommer:**
- Influensa
- Covid-19 (SARS-CoV-2)
- HIV/AIDS
- Meslinger
- Vannkopper

**Behandling:** Antibiotika virker **ikke** mot virus. Noen virussykdommer kan behandles med **antivirale midler** som hemmer virusets replikasjon. Mange virussykdommer forebygges best med **vaksiner**.

## 3. Sopp

Soppinfeksjoner kalles **mykoser**. Sopp er eukaryote organismer med cellevegg av kitin. De fleste soppsykdommer rammer huden, neglene eller slimhinnene, men alvorlige systemiske soppinfeksjoner kan ramme indre organer, særlig hos personer med svekket immunforsvar.

**Eksempler:** Fotsopp, ringorm, candida-infeksjoner (trøske)

## 4. Parasitter

Parasitter er organismer som lever på eller i en vert og tar næring fra den. De inkluderer **protister** (encellede eukaryoter) og **helminther** (parasittiske ormer).

**Eksempler:**
- Malaria (*Plasmodium*-arter, overført av mygg)
- Toxoplasmose (*Toxoplasma gondii*)
- Bendelorm og spolorm

## 5. Prioner

Prioner er **feilfoldede proteiner** som kan få normale proteiner i hjernen til å foldes feil. De inneholder verken DNA eller RNA, men kan likevel overføres og forårsake sykdom. Prionsykdommer er sjeldne, men alltid dødelige.

**Eksempler:** Kugalskap (BSE), Creutzfeldt-Jakobs sykdom (CJD)`,
    },

    // =========================================================================
    // 3. Første forsvarslinje
    // =========================================================================
    {
      id: 'bio1-6-2-foerste-forsvarslinje',
      type: 'text',
      title: 'Første forsvarslinje: Fysiske og kjemiske barrierer',
      content: `# Første forsvarslinje -- Fysiske og kjemiske barrierer

Den første forsvarslinjen hindrer patogener i å komme inn i kroppen i det hele tatt. Disse barrierene er **medfødte** og **uspesifikke** -- de virker mot alle typer patogener uten å skille mellom dem.

## Huden

Huden er kroppens største organ og den viktigste fysiske barrieren. Det ytterste hudlaget (**epidermis**) består av døde celler fylt med proteinet **keratin**, som gjør huden vanntett og motstandsdyktig.

- **Keratinlaget** er vanskelig for mikroorganismer å trenge gjennom
- **Syrekappen** (pH ca. 5,5): Svetten inneholder melkesyre og fettsyrer som skaper et surt miljø som hemmer bakterievekst
- **Talg** fra talgkjertlene inneholder antimikrobielle fettsyrer
- **Normal hudflora** (kommensale bakterier): Konkurrerer med patogener om plass og næring

Når huden skades (sår, brannskader), mister vi denne barrieren, og risikoen for infeksjon øker kraftig.

## Slimhinner

Slimhinner kler innsiden av luftveiene, fordøyelsessystemet, urinveiene og kjønnsorganene. De produserer **slim (mukus)** som fanger opp partikler og mikroorganismer.

- **Luftveiene:** Flimmerhår (cilier) på cellene i luftveiene transporterer slim med innfangede partikler opp mot svelget, der det svelges eller hostes ut. Dette kalles **mukociliær transport**.
- **Nesen:** Nesehår filtrerer store partikler

## Tårer og spytt

- **Tårer** inneholder enzymet **lysozym**, som bryter ned bakteriers cellevegg
- **Spytt** inneholder også lysozym og andre antimikrobielle stoffer
- Tårer og spytt skyller mekanisk bort mikroorganismer

## Magesyre

Magesaften har en pH på ca. **1,5--2**, noe som dreper de fleste patogener som svelges med maten. Magesyren fungerer som en effektiv kjemisk barriere.

## Normalfloraen (mikrobiomet)

Kroppens normale bakterieflora -- **mikrobiomet** -- spiller en viktig rolle i immunforsvaret:

- **Konkurranse:** Normalfloraen konkurrerer med patogener om plass og næring på huden og slimhinnene
- **Produksjon av antimikrobielle stoffer:** Noen kommensale bakterier produserer stoffer som hemmer patogener
- **Stimulering av immunforsvaret:** Normalfloraen bidrar til å trene og modne immunsystemet

Bruk av bredspektret antibiotika kan forstyrre normalfloraen og øke risikoen for infeksjon med f.eks. *Clostridioides difficile*.`,
    },
    {
      id: 'bio1-6-2-note-barrierer',
      type: 'note',
      title: 'Barrierer i hverdagen',
      content:
        'Tenk på hvor mange ganger om dagen den første forsvarslinjen beskytter deg: Huden blokkerer bakterier du berører, nesehårene filtrerer luft, tårer renser øynene, magesyren dreper bakterier i maten, og flimmerhårene i luftveiene fjerner innåndet støv og mikrober. Alt dette skjer automatisk, uten at du merker det.',
    },

    // =========================================================================
    // 4. Andre forsvarslinje: Medfødt immunitet
    // =========================================================================
    {
      id: 'bio1-6-2-def-fagocytt',
      type: 'definition',
      title: 'Fagocytt',
      content:
        'En hvit blodcelle som kan omslutter og bryte ned fremmede partikler, mikroorganismer og døde celler gjennom en prosess kalt fagocytose (fra gresk: phagein = spise, kytos = celle). De viktigste fagocyttene er makrofager, nøytrofile granulocytter og dendrittiske celler.',
    },
    {
      id: 'bio1-6-2-andre-forsvarslinje',
      type: 'text',
      title: 'Andre forsvarslinje: Medfødt immunitet',
      content: `# Andre forsvarslinje -- Medfødt (uspesifikk) immunitet

Hvis patogener klarer å komme forbi de fysiske barrierene, møter de den **medfødte immuniteten**. Denne forsvarslinjen er medfødt (vi er født med den) og **uspesifikk** -- den reagerer likt uansett hvilken type patogen som trenger inn. Den aktiveres raskt, i løpet av minutter til timer.

## Fagocytter -- cellene som spiser inntrengere

Fagocytter er hvite blodceller som bekjemper patogener gjennom **fagocytose**: de omslutt er og bryter ned fremmede partikler.

### Nøytrofile granulocytter
- Den vanligste typen hvite blodceller (60--70 % av alle hvite blodceller)
- Er de første immuncellene som ankommer infeksjonsstedet
- Lever bare noen timer til dager, men er svært effektive
- Danner **puss** (en blanding av døde nøytrofile, bakterier og vevsvæske)

### Makrofager
- Store fagocytter som finnes i vev over hele kroppen
- Utvikler seg fra **monocytter** (hvite blodceller i blodet) som vandrer ut i vev
- Lever i uker til måneder
- Bryter ned patogener og **presenterer antigener** for T-celler -- en viktig bro mellom medfødt og ervervet immunitet

### Dendrittiske celler
- Finnes i vev som er i kontakt med miljøet (hud, slimhinner)
- Svært effektive **antigenpresenterende celler** (APC-er)
- Tar opp patogener, vandrer til lymfeknuter og aktiverer T-celler
- Fungerer som en «alarm» som varsler det ervervede immunforsvaret

## Fagocytose-prosessen

Fagocytose foregår i flere trinn:

1. **Gjenkjenning:** Fagocytten gjenkjenner patogenet via overflatereseptorer som binder seg til molekyler på patogenets overflate (f.eks. mønstergjenkjenningsreseptorer, PRR)
2. **Omslutt ing:** Fagocytten strekker ut utløpere (pseudopodier) som omslutter patogenet
3. **Inntak:** Patogenet tas inn i cellen i en membranblære kalt **fagosom**
4. **Nedbryting:** Fagosomet fusjonerer med et **lysosom** som inneholder enzymer og frie radikaler som bryter ned patogenet
5. **Presentasjon:** Fragmenter av det nedbrutte patogenet presenteres på cellens overflate via MHC-molekyler (dette er viktig for å aktivere T-celler)

## Naturlige dreperceller (NK-celler)

NK-celler er en type lymfocytt som tilhører den medfødte immuniteten. De dreper **virusinfiserte celler** og **kreftceller** uten at de først må aktiveres av det ervervede immunforsvaret.

NK-celler gjenkjenner celler som mangler normale MHC klasse I-molekyler på overflaten -- noe som ofte er et tegn på virusinfeksjon eller kreft.

## Den inflammatoriske responsen (betennelsesreaksjonen)

Når vev skades av patogener, skade eller irritasjon, utløses en **betennelsesreaksjon** (inflammasjon). Denne responsen er avgjørende for å rekruttere immunceller til infeksjonsstedet.

### Trinnene i inflammasjon:

1. **Skade:** Patogener trenger inn gjennom et sår eller en annen åpning
2. **Histaminfrigjøring:** Skadede celler og mastceller frigjør **histamin** og andre signalstoffer
3. **Vasodilatasjon:** Histamin får blodårene i området til å **utvide seg**, slik at mer blod strømmer til
4. **Økt permeabilitet:** Blodåreveggene blir mer gjennomtrengelige, slik at plasma og immunceller kan sive ut i vevet
5. **Rekruttering:** Hvite blodceller (spesielt nøytrofile) strømmer til området
6. **Fagocytose:** Fagocyttene bekjemper patogenene
7. **Reparasjon:** Etter at infeksjonen er bekjempet, repareres vevet

### De fire kardinaltegnene på inflammasjon:
- **Rødhet** (*rubor*): Økt blodtilførsel
- **Varme** (*calor*): Økt blodtilførsel og metabolsk aktivitet
- **Hevelse** (*tumor*): Væskeansamling i vevet
- **Smerte** (*dolor*): Trykk på nerveender og frigjøring av smertestoffer`,
    },
    {
      id: 'bio1-6-2-def-inflammasjon',
      type: 'definition',
      title: 'Inflammasjon (betennelse)',
      content:
        'En lokal forsvarsreaksjon som utløses når vev skades av patogener, fysisk skade eller kjemisk irritasjon. Inflammasjon kjennetegnes av rødhet, varme, hevelse og smerte, og har som formål å eliminere årsaken til vevsskaden, fjerne døde celler og sette i gang vevsreparasjon.',
    },
    {
      id: 'bio1-6-2-feber-komplement-interferon',
      type: 'text',
      title: 'Feber, komplementsystemet og interferoner',
      content: `## Feber

Feber er en **systemisk** (helkropps) forsvarsreaksjon. Når makrofager fagocyterer bakterier, frigjøres stoffer kalt **pyrogener** som påvirker hypothalamus i hjernen til å heve kroppens termostat.

**Fordeler med feber:**
- Hemmer veksten av mange bakterier og virus (de trives best ved 37 °C)
- Øker hastigheten på immunreaksjoner og vevsreparasjon
- Stimulerer produksjonen av hvite blodceller

**Ulemper:** Svært høy feber (over ca. 40 °C) kan skade kroppens egne proteiner og enzymer.

## Komplementsystemet

Komplementsystemet er en gruppe av ca. 30 proteiner som sirkulerer i blodet i inaktiv form. Når de aktiveres (av patogenoverflater eller antistoffer), utfører de flere viktige funksjoner:

- **Opsonisering:** Merker patogener slik at fagocytter lettere gjenkjenner dem
- **Cellelysering:** Danner porer i bakteriens cellemembran slik at den sprekker
- **Kjemotaksis:** Tiltrekker fagocytter til infeksjonsstedet
- **Inflammasjon:** Stimulerer frigjøring av histamin

## Interferoner

Interferoner er **signalproteiner** som produseres av virusinfiserte celler. De har fått navnet fordi de «interfererer» (griper inn i) virusreplikasjon.

**Virkemåte:**
1. En virusinfisert celle produserer interferoner og frigjør dem
2. Interferonene binder seg til naboceller
3. Nabocellene aktiverer antivirale gener som gjør dem mer motstandsdyktige mot virusinfeksjon
4. Interferoner aktiverer også NK-celler og makrofager

Interferoner er altså et tidlig varslingsystem som bremser virusspredning mens det ervervede immunforsvaret mobiliseres.`,
    },
    {
      id: 'bio1-6-2-warning-feber',
      type: 'warning',
      title: 'Feber er et forsvar, ikke en fiende',
      content:
        'Moderat feber (38--39 °C) er en normal del av kroppens immunrespons og bør ikke alltid behandles med febernedsettende midler. Feberen hjelper immunforsvaret med å bekjempe infeksjonen. Derimot bør svært høy feber (over 40 °C) eller langvarig feber alltid vurderes av lege, da det kan tyde på en alvorlig infeksjon eller skade kroppens proteiner.',
    },

    // =========================================================================
    // 5. Tredje forsvarslinje: Ervervet immunitet
    // =========================================================================
    {
      id: 'bio1-6-2-def-antigen',
      type: 'definition',
      title: 'Antigen',
      content:
        'Et molekyl (vanligvis et protein eller polysakkarid) som kan gjenkjennes av immunforsvaret og utløse en immunrespons. Antigener finnes på overflaten av patogener, men også på transplanterte celler og allergener. Den spesifikke delen av antigenet som bindes av et antistoff eller en T-cellereseptor, kalles et **epitop**.',
    },
    {
      id: 'bio1-6-2-def-antistoff',
      type: 'definition',
      title: 'Antistoff (immunglobulin)',
      content:
        'Et Y-formet protein produsert av plasmaceller (aktiverte B-celler) som binder seg spesifikt til et bestemt antigen. Antistoffer har to **variable regioner** (som gjenkjenner og binder antigenet) og en **konstant region** (som bestemmer antistoffets funksjon). Antistoffer sirkulerer i blodet og kroppsvæsker og er sentrale i den humorale immuniteten.',
    },
    {
      id: 'bio1-6-2-tredje-forsvarslinje',
      type: 'text',
      title: 'Tredje forsvarslinje: Ervervet immunitet',
      content: `# Tredje forsvarslinje -- Ervervet (spesifikk) immunitet

Den ervervede (adaptive) immuniteten er den tredje forsvarslinjen og skiller seg fra den medfødte immuniteten på to avgjørende måter:

1. **Spesifisitet:** Den reagerer på **bestemte antigener** -- hvert patogen gjenkjennes av unike immunforsvarsceller
2. **Immunologisk hukommelse:** Immunforsvaret **husker** tidligere infeksjoner og reagerer raskere og sterkere ved gjentatt eksponering

Det ervervede immunforsvaret baserer seg på to hovedtyper lymfocytter:
- **B-lymfocytter (B-celler):** Ansvarlige for **humoral immunitet** (antistoffproduksjon)
- **T-lymfocytter (T-celler):** Ansvarlige for **cellulær immunitet** (direkte celledrap og koordinering)

Begge cellotypene modnes fra stamceller i beinmargen. B-celler modnes ferdig i **beinmargen** (Bone marrow), mens T-celler vandrer til **thymus** (en kjertel bak brystbenet) for å fullføre modningen.`,
    },
    {
      id: 'bio1-6-2-def-lymfocytt',
      type: 'definition',
      title: 'Lymfocytt',
      content:
        'En type hvit blodcelle som er sentral i det ervervede immunforsvaret. De to hovedtypene er B-lymfocytter (B-celler), som produserer antistoffer, og T-lymfocytter (T-celler), som koordinerer immunresponsen og dreper infiserte celler. Lymfocytter finnes i blodet, lymfevevet og lymfeknutene.',
    },
    {
      id: 'bio1-6-2-humoral-immunitet',
      type: 'text',
      title: 'Humoral immunitet: B-celler og antistoffer',
      content: `## Humoral immunitet -- B-celler og antistoffer

Den humorale immuniteten (fra latin *humor* = væske) handler om bekjempelse av patogener som befinner seg **utenfor** cellene, i blod og kroppsvæsker. Hovedaktørene er **B-celler** og **antistoffene** de produserer.

### B-celleaktivering

1. Et **antigen** binder seg til B-cellens overflatereseptor (et membranforankret antistoff)
2. B-cellen tar opp antigenet, bryter det ned og presenterer fragmenter på overflaten via **MHC klasse II-molekyler**
3. En **hjelper-T-celle** (CD4+) gjenkjenner det presenterte antigenet og sender aktiveringssignaler (cytokiner) til B-cellen
4. B-cellen aktiveres og begynner å dele seg raskt (**klonal ekspansjon**)
5. De fleste dattercellene differensierer til **plasmaceller** som produserer store mengder antistoffer
6. Noen datterceller blir **hukommelses-B-celler** som lever i årevis

### Antistoffenes struktur

Antistoffer (immunglobuliner) har en karakteristisk **Y-form** som består av:

- **To tunge kjeder** og **to lette kjeder** (polypeptidkjeder holdt sammen av disulfidbindinger)
- **Variable regioner (V-regioner):** De to «armene» på Y-en som varierer mellom ulike antistoffer. Disse inneholder **antigenbindingssetet** som passer spesifikt til ett antigen (som en nøkkel i en lås)
- **Konstant region (C-region):** «Stammen» på Y-en som er lik innenfor samme antistoffklasse og bestemmer antistoffets biologiske funksjon

Kroppen kan produsere milliarder av ulike antistoffer, hvert med et unikt antigenbindingssete.

### Antistoffenes funksjoner

Antistoffer bekjemper patogener på flere måter:

- **Nøytralisering:** Antistoffet binder seg til patogenet og blokkerer det fra å feste seg til vertsceller
- **Opsonisering:** Antistoffene «merker» patogenet slik at fagocytter lettere gjenkjenner og fagocyterer det
- **Komplementaktivering:** Antistoff-antigen-komplekser aktiverer komplementsystemet, som kan lysere patogenet
- **Agglutinasjon:** Siden hvert antistoff har to bindingsseter, kan det binde to patogener samtidig og «klumpe dem sammen» -- dette gjør dem lettere å fagocytere

### Hukommelses-B-celler

Etter at en infeksjon er bekjempet, lever **hukommelses-B-celler** videre i kroppen i årevis, noen ganger resten av livet. Dersom det samme patogenet trenger inn igjen, kan disse cellene raskt aktiveres og produsere antistoffer -- mye raskere enn ved første infeksjon.`,
    },
    {
      id: 'bio1-6-2-cellulaer-immunitet',
      type: 'text',
      title: 'Cellulær immunitet: T-celler',
      content: `## Cellulær immunitet -- T-celler

Den cellulære immuniteten bekjemper patogener som gjemmer seg **inne i** celler, for eksempel virus og intracellulære bakterier. Antistoffer kan ikke nå patogener inne i celler, så her trengs T-cellene.

### MHC-molekyler og antigenpresentasjon

**MHC-molekyler** (Major Histocompatibility Complex) er proteiner på celleoverflaten som presenterer antigenfragmenter for T-celler:

- **MHC klasse I:** Finnes på **alle** kroppens celler med kjerne. De presenterer fragmenter av proteiner som produseres inne i cellen. Hvis cellen er infisert av virus, vil virusfragmenter vises på MHC I -- noe som varsler cytotoksiske T-celler.
- **MHC klasse II:** Finnes bare på **antigenpresenterende celler** (APC-er) som makrofager, dendrittiske celler og B-celler. De presenterer fragmenter av fagocyterte patogener for hjelper-T-celler.

### Hjelper-T-celler (CD4+)

Hjelper-T-celler er «dirigentene» i immunforsvaret. De **koordinerer** immunresponsen:

- Gjenkjenner antigener presentert på **MHC klasse II** av antigenpresenterende celler
- Frigjør **cytokiner** (signalmolekyler) som:
  - Aktiverer B-celler til å produsere antistoffer
  - Aktiverer cytotoksiske T-celler
  - Stimulerer makrofager til å bli mer effektive fagocytter
  - Rekrutterer flere immunceller til infeksjonsstedet

Uten hjelper-T-celler fungerer verken den humorale eller den cellulære immuniteten optimalt. Det er derfor **HIV**, som infiserer og ødelegger hjelper-T-celler, er så alvorlig.

### Cytotoksiske T-celler (CD8+)

Cytotoksiske T-celler er «drepecellene» i det ervervede immunforsvaret:

- Gjenkjenner antigener presentert på **MHC klasse I** av infiserte celler
- Dreper infiserte celler ved å frigjøre **perforiner** (lager hull i cellemembranen) og **granzymer** (enzymer som utløser programmert celledød, apoptose)
- Viktige i bekjempelsen av virusinfeksjoner og kreftceller

### Hukommelses-T-celler

I likhet med B-celler danner også T-celler **hukommelsesceller** etter en immunrespons. Disse lever lenge i kroppen og muliggjør en rask immunrespons ved gjentatt infeksjon med samme patogen.`,
    },

    // =========================================================================
    // 6. Primær- vs. sekundærrespons
    // =========================================================================
    {
      id: 'bio1-6-2-primaer-sekundaer',
      type: 'text',
      title: 'Primær- og sekundærrespons',
      content: `# Primær- og sekundærrespons

Kroppens immunrespons er svært forskjellig ved første og andre møte med et patogen.

## Primærrespons (første gangs infeksjon)

Når kroppen møter et nytt antigen for første gang:

1. Det tar **7--14 dager** før immunforsvaret produserer nok antistoffer til å bekjempe infeksjonen
2. I denne perioden kan personen bli syk
3. B-celler og T-celler som gjenkjenner antigenet må først finnes, aktiveres og dele seg (klonal ekspansjon)
4. Antistoffnivået stiger gradvis, med en topp etter ca. 2--3 uker
5. Etter at infeksjonen er bekjempet, synker antistoffnivået, men **hukommelsesceller** dannes og overlever i årevis

## Sekundærrespons (andre gangs infeksjon)

Når det samme patogenet trenger inn i kroppen igjen:

1. Hukommelsescellene gjenkjenner antigenet **umiddelbart**
2. Responsen er **raskere** (dager i stedet for uker)
3. **Sterkere** (mye høyere antistoffproduksjon)
4. **Varer lenger**
5. Personen merker ofte **ingen symptomer** -- infeksjonen bekjempes før sykdom utvikles

Denne forskjellen mellom primær- og sekundærrespons er grunnlaget for **vaksinasjon**: vi gir kroppen en «prøve» av antigenet slik at den kan bygge opp immunologisk hukommelse uten at personen blir alvorlig syk.`,
    },
    {
      id: 'bio1-6-2-example-primaer-sekundaer',
      type: 'example',
      title: 'Primær- vs. sekundærrespons -- grafisk fremstilling',
      content: `Tenk deg at en person blir smittet med et virus for første gang (dag 0), og deretter blir smittet med det samme viruset igjen etter 30 dager.

**Primærrespons (dag 0--28):**
- Dag 0--7: Ingen målbar antistoffproduksjon (latensperiode)
- Dag 7--14: Antistoffnivået stiger langsomt
- Dag 14--21: Topp i antistoffnivå (hovedsakelig IgM-antistoffer)
- Dag 21--28: Antistoffnivået synker gradvis

**Sekundærrespons (dag 30+):**
- Dag 30--32: Antistoffnivået stiger raskt (bare 1--2 dager latenstid)
- Dag 32--37: Svært høy antistofftopp -- 10 til 100 ganger høyere enn primærresponsen (hovedsakelig IgG-antistoffer)
- Antistoffnivået holder seg høyt mye lenger

**Nøkkelpunkter:**
- Sekundærresponsen er raskere, sterkere og varer lenger
- Ved primærresponsen dominerer **IgM**-antistoffer, ved sekundærresponsen dominerer **IgG**-antistoffer (som er mer effektive)
- Forskjellen skyldes at **hukommelsesceller** allerede finnes ved andre gangs eksponering`,
    },

    // =========================================================================
    // 7. Aktiv og passiv immunitet
    // =========================================================================
    {
      id: 'bio1-6-2-aktiv-passiv',
      type: 'text',
      title: 'Aktiv og passiv immunitet',
      content: `# Aktiv og passiv immunitet

Immunitet kan oppnås på fire måter, avhengig av om kroppen lager sine egne antistoffer (aktiv) eller mottar ferdige antistoffer fra en annen kilde (passiv).

## Aktiv immunitet

Ved aktiv immunitet produserer kroppen **egne antistoffer og hukommelsesceller**.

### Naturlig aktiv immunitet
- Oppstår etter å ha gjennomgått en **infeksjon**
- Kroppen lager antistoffer og hukommelsesceller som gir langvarig beskyttelse
- Eksempel: Etter å ha hatt vannkopper er man vanligvis immun resten av livet

### Kunstig aktiv immunitet (vaksinasjon)
- Oppnås gjennom **vaksinering**
- Kroppen eksponeres for svekkede, inaktiverte eller deler av patogener
- Immunforsvaret reagerer som på en ekte infeksjon og danner hukommelsesceller
- Gir langvarig beskyttelse uten å forårsake alvorlig sykdom

## Passiv immunitet

Ved passiv immunitet mottar kroppen **ferdige antistoffer** fra en annen kilde. Kroppen lager ikke egne hukommelsesceller, så beskyttelsen er **midlertidig**.

### Naturlig passiv immunitet
- **Placentaoverføring:** Under svangerskapet overføres IgG-antistoffer fra moren til fosteret via morkaken. Dette gir nyfødte beskyttelse de første månedene
- **Morsmelk:** Morsmelk (særlig kolostrum -- den første melken) inneholder **IgA-antistoffer** som beskytter barnets tarmslimhinne

### Kunstig passiv immunitet
- **Antiserum (immunglobulin):** Ferdige antistoffer gis som injeksjon
- Brukes når det er behov for **umiddelbar** beskyttelse, f.eks. etter bitt av giftig slange eller ved mistanke om rabies
- Virkningen er rask, men kortvarig (ukene)

| Type | Eksempel | Hukommelse | Varighet |
|------|----------|------------|----------|
| Naturlig aktiv | Gjennomgått infeksjon | Ja | Lang (ofte livslang) |
| Kunstig aktiv | Vaksinasjon | Ja | Lang (kan kreve påfylling) |
| Naturlig passiv | Antistoffer fra mor | Nei | Kort (måneder) |
| Kunstig passiv | Antiserum | Nei | Kort (uker) |`,
    },

    // =========================================================================
    // 8. Vaksiner
    // =========================================================================
    {
      id: 'bio1-6-2-def-vaksinasjon',
      type: 'definition',
      title: 'Vaksinasjon',
      content:
        'Tilføring av et antigen (vaksine) som stimulerer immunforsvaret til å danne antistoffer og hukommelsesceller mot et bestemt patogen, uten å forårsake alvorlig sykdom. Vaksinasjon gir kunstig aktiv immunitet og er en av de mest effektive forebyggende metodene innen medisin.',
    },
    {
      id: 'bio1-6-2-vaksiner',
      type: 'text',
      title: 'Vaksiner og vaksinasjon',
      content: `# Vaksiner

Vaksiner er et av de viktigste medisinske fremskrittene i historien. De har bidratt til å utrydde kopper, nesten utrydde polio, og redde millioner av liv hvert eneste år.

## Hvordan vaksiner virker

En vaksine inneholder et **antigen** -- helt eller delvis patogen som er gjort ufarlig. Når vaksinen injiseres:

1. Immunforsvaret gjenkjenner antigenet som fremmed
2. B-celler og T-celler aktiveres
3. **Hukommelses-B-celler** og **hukommelses-T-celler** dannes
4. Dersom personen senere eksponeres for det virkelige patogenet, er immunforsvaret allerede forberedt og kan starte en rask **sekundærrespons**

## Typer vaksiner

### 1. Levende svekkede vaksiner (attenuerte)
- Inneholder levende patogener som er svekket slik at de ikke kan forårsake sykdom
- Gir sterk og langvarig immunitet (ligner naturlig infeksjon)
- **Eksempler:** MMR-vaksinen (meslinger, kusma, røde hunder), vannkoppevaksinen
- **Ulempe:** Kan i sjeldne tilfeller gi sykdom hos personer med sterkt svekket immunforsvar

### 2. Inaktiverte vaksiner (drepte)
- Inneholder patogener som er drept med varme eller kjemikalier
- Tryggere enn levende vaksiner, men gir ofte svakere immunitet
- Krever ofte **påfyllingsdoser** (boostere)
- **Eksempler:** Influensavaksine, hepatitt A-vaksine

### 3. Subenhetsvaksiner (proteinvaksiner)
- Inneholder bare **deler** av patogenet (f.eks. overflateproteiner)
- Svært trygge fordi de ikke inneholder hele patogener
- **Eksempler:** Hepatitt B-vaksine, HPV-vaksine, kikhostevaksine

### 4. mRNA-vaksiner
- En nyere teknologi som ble tatt i bruk i stor skala under covid-19-pandemien
- Inneholder **mRNA** som koder for et protein fra patogenet (f.eks. piggproteinet til SARS-CoV-2)
- Kroppens celler lager proteinet, som immunforsvaret gjenkjenner og reagerer på
- **mRNA-et brytes raskt ned** og påvirker ikke cellens eget DNA
- **Eksempler:** Pfizer/BioNTech og Moderna covid-19-vaksiner

### 5. Toksoidvaksiner
- Inneholder inaktiverte **toksiner** (giftstoffer) produsert av bakterier
- Immunforsvaret lager antistoffer mot toksinene
- **Eksempler:** Stivkrampe- og difterivaksine

## Kort vaksinehistorie

- **1796:** Edward Jenner viste at smitte med kukopper beskyttet mot kopper -- den første vaksinasjonen
- **1885:** Louis Pasteur utviklet rabiesvaksinen
- **1955:** Jonas Salk utviklet poliovaksinen
- **1980:** Verdens helseorganisasjon (WHO) erklærte kopper utryddet -- det eneste eksemplet på en menneskelig sykdom som er fullstendig utryddet gjennom vaksinasjon

## Barnevaksinasjonsprogrammet i Norge

I Norge tilbys alle barn gratis vaksiner gjennom det **nasjonale barnevaksinasjonsprogrammet**. Det inkluderer vaksiner mot blant annet:

- Difteri, stivkrampe, kikhoste, polio, Haemophilus influenzae type b (Hib) og hepatitt B
- Pneumokokksykdom
- Meslinger, kusma og røde hunder (MMR)
- Rotavirus
- Humant papillomavirus (HPV)

Programmet har ført til at mange tidligere vanlige og farlige barnesykdommer nesten er eliminert i Norge.`,
    },
    {
      id: 'bio1-6-2-def-flokkimmunitet',
      type: 'definition',
      title: 'Flokkimmunitet',
      content:
        'En form for indirekte beskyttelse mot smittsomme sykdommer som oppstår når en tilstrekkelig stor andel av befolkningen er immun (gjennom vaksinasjon eller gjennomgått infeksjon). Når mange nok er immune, reduseres spredningen av sykdommen så mye at også de som ikke er immune (f.eks. spedbarn, personer med svekket immunforsvar) er indirekte beskyttet. Terskelen for flokkimmunitet varierer mellom sykdommer -- for meslinger kreves ca. 95 % vaksinasjonsdekning.',
    },
    {
      id: 'bio1-6-2-example-influensavaksine',
      type: 'example',
      title: 'Hvordan virker influensavaksinen?',
      content: `**Scenario:** Astrid får influensavaksinen i oktober, og blir eksponert for influensavirus i februar.

**Trinn 1: Vaksinasjon (oktober)**
- Astrid får en injeksjon med **inaktiverte influensavirus** (eller deler av dem)
- Virusene er drept og kan ikke forårsake sykdom
- Immunforsvaret gjenkjenner overflateantigener (hemagglutinin og neuraminidase) på virusene

**Trinn 2: Immunrespons (oktober--november)**
- Dendrittiske celler tar opp vaksineantigener og presenterer dem for hjelper-T-celler i lymfeknuter
- Hjelper-T-cellene aktiverer B-celler som gjenkjenner antigenet
- B-cellene gjennomgår klonal ekspansjon
- Plasmaceller produserer antistoffer mot influensavirusets overflateproteiner
- **Hukommelses-B-celler** og **hukommelses-T-celler** dannes og patruljerer kroppen

**Trinn 3: Eksponering for ekte virus (februar)**
- Astrid puster inn influensavirus fra en syk kollega
- Viruset prøver å infisere celler i luftveiene
- Hukommelsescellene gjenkjenner virusets antigener **umiddelbart**
- Rask sekundærrespons: Store mengder antistoffer produseres innen 1--2 dager
- Antistoffer **nøytraliserer** viruset (blokkerer det fra å infisere celler)
- Cytotoksiske T-celler dreper de få cellene som allerede er infisert
- Viruset elimineres før Astrid blir syk

**Resultat:** Astrid merker ingen symptomer, eller bare svært milde, takket være den immunologiske hukommelsen fra vaksinen.

**Viktig merknad:** Influensaviruset **muterer** raskt, og nye virusstammer oppstår hvert år. Derfor må influensavaksinen oppdateres og gis på nytt hvert år.`,
    },

    // =========================================================================
    // 9. Immunforsvarsforstyrrelser
    // =========================================================================
    {
      id: 'bio1-6-2-def-autoimmunitet',
      type: 'definition',
      title: 'Autoimmunitet',
      content:
        'En tilstand der immunforsvaret feilaktig angriper kroppens egne celler og vev fordi det ikke klarer å skille dem fra fremmede antigener. Autoimmune sykdommer kan ramme spesifikke organer (f.eks. diabetes type 1 rammer betacellene i bukspyttkjertelen) eller hele kroppen (f.eks. systemisk lupus erythematosus).',
    },
    {
      id: 'bio1-6-2-immunforstyrrelser',
      type: 'text',
      title: 'Immunforsvarsforstyrrelser',
      content: `# Når immunforsvaret svikter eller overreagerer

Immunforsvaret er vanligvis svært presist i å skille mellom «eget» og «fremmed», men noen ganger går det galt. Vi kan dele immunforsvarsforstyrrelser i tre hovedkategorier.

## 1. Allergier -- overreaksjon mot ufarlige stoffer

Allergi oppstår når immunforsvaret reagerer **uforholdsmessig sterkt** på et normalt ufarlig stoff -- et **allergen** (f.eks. pollen, husstøvmidd, nøtter, kattehår).

**Mekanisme:**
1. Første eksponering: Immunforsvaret produserer **IgE-antistoffer** mot allergenet
2. IgE binder seg til **mastceller** i vev (f.eks. i neseslimhinnen eller huden)
3. Andre gangs eksponering: Allergenet binder seg til IgE på mastcellene
4. Mastcellene frigjør **histamin** og andre inflammasjonsstoffer
5. Histamin forårsaker symptomer: kløe, hevelse, rennende nese, tåreflod

**Anafylaksi** er en alvorlig, potensielt livstruende allergisk reaksjon der massiv histaminfrigjøring fører til blodtrykksfall, luftveishevelse og sjokk. Behandles med adrenalin (EpiPen).

## 2. Autoimmune sykdommer -- angrep på egne celler

Ved autoimmune sykdommer mister immunforsvaret sin **toleranse** overfor kroppens egne antigener og angriper eget vev.

**Eksempler:**
- **Diabetes type 1:** Cytotoksiske T-celler ødelegger **betacellene** i de langerhanske øyene i bukspyttkjertelen, slik at kroppen ikke kan produsere insulin
- **Revmatoid artritt:** Immunforsvaret angriper leddhinnen (synovialmembranen), noe som fører til betennelse, smerte og ødeleggelse av leddene
- **Multippel sklerose (MS):** Immunforsvaret angriper **myelinskjeden** som isolerer nervefibre i sentralnervesystemet, noe som fører til nevrologiske symptomer
- **Hashimotos tyreoiditt:** Immunforsvaret angriper skjoldbruskkjertelen, noe som fører til lavt stoffskifte
- **Cøliaki:** Immunreaksjon mot **gluten** i tynntarmen

Årsaken til autoimmune sykdommer er ofte ukjent, men genetisk disposisjon og miljøfaktorer spiller trolig en rolle.

## 3. Immunsvikt -- et svekket immunforsvar

Immunsvikt betyr at immunforsvaret er svekket og ikke klarer å bekjempe infeksjoner effektivt.

### Medfødt (primær) immunsvikt
- Genetiske defekter som påvirker utviklingen eller funksjonen av immunceller
- Eksempel: SCID (Severe Combined Immunodeficiency) -- «boble-barn-syndrom»

### Ervervet (sekundær) immunsvikt
- Forårsaket av ytre faktorer som svekker immunforsvaret
- Eksempler: HIV/AIDS, kreftbehandling (cellegift), immunsuppressive medisiner (etter organtransplantasjon), underernæring`,
    },
    {
      id: 'bio1-6-2-example-hiv',
      type: 'example',
      title: 'Hvordan HIV angriper immunforsvaret',
      content: `**HIV (humant immunsviktvirus)** er et retrovirus som infiserer og ødelegger **CD4+ hjelper-T-celler** -- selve dirigentene i immunforsvaret.

**Forløpet til en ubehandlet HIV-infeksjon:**

**Fase 1: Akutt infeksjon (2--4 uker etter smitte)**
- HIV infiserer hjelper-T-celler og formerer seg raskt
- CD4+-celletallet faller brått
- Personen kan få influensalignende symptomer
- Immunforsvaret reagerer og produserer antistoffer (serokonvertering)

**Fase 2: Latent (symptomfri) fase (kan vare 5--15 år uten behandling)**
- Viruset formerer seg sakte, men kontinuerlig
- CD4+-celletallet synker gradvis
- Personen kan føle seg frisk, men er smittsom

**Fase 3: AIDS (Acquired Immunodeficiency Syndrome)**
- CD4+-celletallet faller under 200 celler/µL (normalt: 500--1500)
- Immunforsvaret er så svekket at personen utvikler **opportunistiske infeksjoner** (infeksjoner som friske mennesker normalt bekjemper uten problemer)
- Vanlige komplikasjoner: tuberkulose, pneumocystis-pneumoni, Kaposis sarkom, candida-infeksjoner

**Hvorfor er HIV så alvorlig?**
- HIV angriper selve **kommandosentralen** i immunforsvaret (hjelper-T-cellene)
- Uten fungerende hjelper-T-celler kan verken B-celler, cytotoksiske T-celler eller makrofager fungere optimalt
- HIV muterer raskt, noe som gjør det vanskelig for immunforsvaret å eliminere viruset
- Viruset integrerer sitt arvemateriale i vertscellens DNA, der det kan ligge i dvale

**Behandling:**
- **Antiretroviral terapi (ART):** En kombinasjon av medikamenter som hemmer ulike trinn i HIV-virusets replikasjonssyklus
- ART kan ikke kurere HIV, men holder viruset på svært lave nivåer slik at immunforsvaret kan opprettholdes
- Moderne behandling gjør at personer med HIV kan leve et normalt, langt liv
- Effektiv behandling gjør også at smitterisikoen blir tilnærmet null

**Forebygging:** Kondom, PrEP (forebyggende medisin), testing og behandling. Det finnes ennå ingen vaksine mot HIV.`,
    },

    // =========================================================================
    // 10. Antibiotika og resistens
    // =========================================================================
    {
      id: 'bio1-6-2-antibiotika',
      type: 'text',
      title: 'Antibiotika og antibiotikaresistens',
      content: `# Antibiotika og antibiotikaresistens

## Hva er antibiotika?

Antibiotika er legemidler som dreper bakterier eller hemmer deres vekst. De er blant de viktigste oppdagelsene i medisinens historie -- oppdagelsen av **penicillin** av Alexander Fleming i 1928 revolusjonerte behandlingen av bakterielle infeksjoner.

## Hvordan virker antibiotika?

Antibiotika angriper strukturer og prosesser som er **unike for bakterier**:

- **Celleveggsyntese:** Penicillin og andre betalaktam-antibiotika hindrer bakterien i å bygge cellevegg, slik at den sprekker (menneskets celler har ingen cellevegg)
- **Proteinsyntese:** Tetracykliner og makrolider hemmer bakterielle ribosomer (som er forskjellige fra menneskets ribosomer)
- **DNA-replikasjon:** Fluorokinoloner hemmer enzymer som er nødvendige for bakteriell DNA-kopiering
- **Folsyresyntese:** Sulfonamider hemmer bakteriers produksjon av folsyre (mennesker tar opp folsyre fra maten)

## Hvorfor virker antibiotika IKKE mot virus?

Virus har verken cellevegg, ribosomer, egen metabolisme eller de andre strukturene som antibiotika angriper. Et virus bruker **vertscellens** maskineri for å formere seg, og det er svært vanskelig å angripe viruset uten å skade vertscellen. Derfor trenger vi **antivirale midler** (som er utviklet spesifikt for å hemme virusets replikasjon) eller **vaksiner** for å bekjempe virus.

## Antibiotikaresistens -- en global trussel

**Antibiotikaresistens** oppstår når bakterier utvikler mekanismer som gjør dem motstandsdyktige mot antibiotika. Dette er en naturlig evolusjonsprosess, men overforbruk og feilbruk av antibiotika har akselerert den dramatisk.

### Hvordan oppstår resistens?

1. I en bakteriepopulasjon finnes det naturlig variasjon (mutasjoner)
2. Noen bakterier kan tilfeldigvis ha en mutasjon som gir dem motstandskraft mot et antibiotikum
3. Når antibiotika gis, **drepes de sensitive bakteriene**, men de resistente overlever
4. De resistente bakteriene formerer seg og sprer resistensgener -- også til andre bakterier via **horisontal genoverføring** (konjugasjon, transformasjon, transduksjon)
5. Over tid dominerer resistente bakterier

### Konsekvenser

- Infeksjoner som tidligere var enkle å behandle, kan bli livstruende
- Lengre sykehusopphold, dyrere behandling, høyere dødelighet
- WHO anser antibiotikaresistens som en av de **største truslene mot global helse**

### Hva kan vi gjøre?

- **Bruk antibiotika kun når det er nødvendig** (ikke mot virus!)
- **Fullfør hele antibiotikabehandlingen** (selv om du føler deg frisk)
- **God hygiene** for å forebygge infeksjoner
- **Utvikling av nye antibiotika** (forskning)
- **Redusere antibiotikabruk i husdyrhold**
- **Vaksinasjon** for å redusere behovet for antibiotika`,
    },
    {
      id: 'bio1-6-2-warning-antibiotika',
      type: 'warning',
      title: 'Antibiotika virker ikke mot forkjølelse og influensa',
      content:
        'Forkjølelse og influensa er forårsaket av **virus**, og antibiotika har ingen effekt mot dem. Å bruke antibiotika mot virusinfeksjoner er ikke bare nytteløst -- det bidrar aktivt til utvikling av antibiotikaresistens. Ta bare antibiotika når legen forskriver det, og fullfør alltid hele kuren.',
    },

    // =========================================================================
    // 11. Oppsummering
    // =========================================================================
    {
      id: 'bio1-6-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `# Oppsummering

Immunforsvaret er kroppens avanserte forsvarssystem mot sykdomsfremkallende organismer. Det er organisert i tre forsvarslinjer:

**Første forsvarslinje (barrierer):**
Hud, slimhinner, tårer, spytt (lysozym), magesyre og normalfloraen hindrer patogener i å komme inn i kroppen.

**Andre forsvarslinje (medfødt immunitet):**
Fagocytter (nøytrofile, makrofager, dendrittiske celler), NK-celler, inflammasjon, feber, komplementsystemet og interferoner bekjemper patogener raskt og uspesifikt.

**Tredje forsvarslinje (ervervet immunitet):**
B-celler produserer antistoffer (humoral immunitet), mens T-celler koordinerer immunresponsen og dreper infiserte celler (cellulær immunitet). Hukommelsesceller gir langvarig immunologisk hukommelse.

**Viktige begreper:**
- Immunologisk hukommelse gir grunnlaget for **vaksinasjon**
- **Aktiv immunitet** (egne antistoffer) er langvarig; **passiv immunitet** (ferdige antistoffer) er midlertidig
- **Allergier** er overreaksjoner mot ufarlige stoffer
- **Autoimmune sykdommer** skyldes at immunforsvaret angriper eget vev
- **Antibiotikaresistens** er en alvorlig global trussel som forverres av overforbruk`,
    },
  ],
  exercises: [
    // =========================================================================
    // Oppgave 1: Flervalg -- Patogener
    // =========================================================================
    {
      id: 'bio1-6-2-ex-1',
      number: '6.2.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken av følgende påstander om virus er korrekt?',
      options: [
        {
          id: 'a',
          text: 'Virus kan formere seg uten en vertscelle',
          isCorrect: false,
          feedback:
            'Nei, virus mangler egen metabolisme og kan kun formere seg ved å kapre vertscellens maskineri.',
        },
        {
          id: 'b',
          text: 'Virus kan behandles med antibiotika',
          isCorrect: false,
          feedback:
            'Nei, antibiotika angriper strukturer som er unike for bakterier (f.eks. cellevegg, ribosomer). Virus har ikke disse strukturene.',
        },
        {
          id: 'c',
          text: 'Virus injiserer sitt arvemateriale i en vertscelle for å formere seg',
          isCorrect: true,
          feedback:
            'Riktig! Virus bruker vertscellens maskineri til å kopiere sitt eget arvemateriale og lage nye viruspartikler.',
        },
        {
          id: 'd',
          text: 'Virus er prokaryote organismer med cellevegg',
          isCorrect: false,
          feedback:
            'Nei, det er bakterier som er prokaryote. Virus regnes ikke som levende organismer og har ikke cellevegg (noen har en lipidkappe).',
        },
      ],
      hints: [
        'Tenk på hva som skiller virus fra levende organismer.',
        'Virus mangler egen metabolisme -- hvordan kan de da formere seg?',
      ],
      solution:
        'Svar C er korrekt. Virus kan ikke formere seg på egen hånd fordi de mangler ribosomer og enzymer for egen metabolisme. De må infisere en vertscelle og bruke cellens maskineri til å kopiere sitt arvemateriale (DNA eller RNA) og produsere nye virusproteiner. Nye viruspartikler settes sammen inne i vertscellen og frigjøres når cellen lyserer eller knoppes av.',
    },
    // =========================================================================
    // Oppgave 2: Første forsvarslinje
    // =========================================================================
    {
      id: 'bio1-6-2-ex-2',
      number: '6.2.2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Beskriv fire eksempler på fysiske eller kjemiske barrierer i den første forsvarslinjen, og forklar hvordan hver av dem hindrer patogener i å trenge inn i kroppen.',
      hints: [
        'Tenk på huden, slimhinnene, kroppsvæsker og magesyre.',
        'Hva gjør lysozym, og hvor finner vi det?',
      ],
      solution: `**1. Huden:**
Huden er kroppens viktigste fysiske barriere. Det ytterste laget av epidermis består av døde celler fylt med keratin, som gjør overflaten vanntett og vanskelig for mikroorganismer å trenge gjennom. I tillegg skaper svette og talg et surt miljø (pH ca. 5,5) som hemmer bakterievekst.

**2. Slimhinner med mukociliær transport:**
Slimhinnene i luftveiene produserer slim (mukus) som fanger opp partikler og mikroorganismer. Flimmerhår (cilier) på cellene transporterer slimet med innfangede patogener oppover mot svelget, der det svelges eller hostes ut.

**3. Tårer og spytt (lysozym):**
Tårer og spytt inneholder enzymet lysozym, som bryter ned peptidoglykan i bakteriers cellevegg. I tillegg skyller tårer og spytt mekanisk bort mikroorganismer fra øyne og munnhule.

**4. Magesyre:**
Magesaften har en pH på ca. 1,5--2, noe som er sterkt nok til å drepe de fleste bakterier og andre patogener som svelges med maten. Magesyren er en effektiv kjemisk barriere.

Andre eksempler som også er riktige: normalfloraen (konkurrerer med patogener), nesehår (filtrerer partikler), urinstrøm (skyller ut bakterier fra urinveiene).`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    // =========================================================================
    // Oppgave 3: Fagocytose
    // =========================================================================
    {
      id: 'bio1-6-2-ex-3',
      number: '6.2.3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Beskriv de fem trinnene i fagocytose.',
      hints: [
        'Fagocytose betyr bokstavelig «cellespisning».',
        'Tenk på rekkefølgen: gjenkjenning, omslutt ing, inntak, nedbryting, presentasjon.',
      ],
      solution: `**Fagocytose -- trinn for trinn:**

**1. Gjenkjenning:**
Fagocytten (f.eks. en makrofag eller nøytrofil granulocytt) gjenkjenner patogenet via mønstergjenkjenningsreseptorer (PRR) på celleoverflaten. Disse reseptorene binder seg til molekylære mønstre som er vanlige på patogener, men som ikke finnes på kroppens egne celler.

**2. Omslutt ing:**
Fagocytten strekker ut utløpere (pseudopodier) som omgir patogenet.

**3. Inntak:**
Pseudopodiene fusjonerer og danner en membranblære kalt fagosom. Patogenet er nå innesluttet inne i fagocytten.

**4. Nedbryting:**
Fagosomet fusjonerer med et lysosom, som inneholder fordøyelsesenzymer og frie radikaler. Innholdet i lysosomet bryter ned patogenet til fragmenter.

**5. Antigenpresentasjon:**
Fragmenter av det nedbrutte patogenet (antigener) presenteres på fagocyttens overflate via MHC klasse II-molekyler. Dette er viktig fordi det gjør det mulig for hjelper-T-celler å gjenkjenne antigenet og aktivere det ervervede immunforsvaret.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    // =========================================================================
    // Oppgave 4: Inflammasjon
    // =========================================================================
    {
      id: 'bio1-6-2-ex-4',
      number: '6.2.4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva en betennelsesreaksjon (inflammasjon) er. Beskriv trinnene i den inflammatoriske responsen og forklar hensikten med de fire kardinaltegnene: rødhet, varme, hevelse og smerte.',
      hints: [
        'Hvilken rolle spiller histamin?',
        'Hvorfor er vasodilatasjon viktig for immunforsvaret?',
      ],
      solution: `**Betennelsesreaksjon (inflammasjon):**

Inflammasjon er en lokal forsvarsreaksjon som utløses når vev skades av patogener, fysisk skade eller kjemisk irritasjon. Hensikten er å eliminere årsaken til skaden, fjerne døde celler og sette i gang reparasjon.

**Trinnene i den inflammatoriske responsen:**

1. **Skade og alarm:** Patogener trenger inn gjennom et sår. Skadede celler og mastceller frigjører kjemiske signalstoffer, spesielt histamin.

2. **Vasodilatasjon:** Histamin får blodårene i området til å utvide seg (vasodilatasjon), slik at mer blod strømmer til det skadede området.

3. **Økt permeabilitet:** Blodåreveggene (kapillærene) blir mer gjennomtrengelige, slik at plasma, proteiner (inkludert komplementproteiner og antistoffer) og hvite blodceller kan sive ut fra blodet og inn i det omkringliggende vevet.

4. **Rekruttering av immunceller:** Kjemotaktiske signaler tiltrekker fagocytter (nøytrofile og makrofager) til infeksjonsstedet. Nøytrofile er de første som ankommer.

5. **Fagocytose og bekjempelse:** Fagocyttene omslutt er og bryter ned patogenene.

6. **Reparasjon:** Etter at infeksjonen er bekjempet, repareres vevet.

**De fire kardinaltegnene og deres forklaring:**

- **Rødhet (rubor):** Skyldes økt blodtilførsel til området (vasodilatasjon). Hensikten er å transportere flere immunceller og næringsstoffer til skadestedet.

- **Varme (calor):** Skyldes økt blodtilførsel og økt metabolsk aktivitet. Varme kan hemme veksten av patogener og øke hastigheten på immunreaksjoner.

- **Hevelse (tumor):** Skyldes at plasma og proteiner siver ut i vevet (ødem). Hensikten er å bringe antistoffer, komplementproteiner og immunceller til området, og å fortynne eventuelle giftstoffer.

- **Smerte (dolor):** Skyldes at hevelsen trykker på nerveender, og at det frigjøres smertesignalstoffer (prostaglandiner). Smerte har en beskyttende funksjon -- den varsler oss om skaden og får oss til å beskytte det skadede området.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    // =========================================================================
    // Oppgave 5: Flervalg -- B-celler og antistoffer
    // =========================================================================
    {
      id: 'bio1-6-2-ex-5',
      number: '6.2.5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den viktigste funksjonen til hukommelses-B-celler?',
      options: [
        {
          id: 'a',
          text: 'De produserer store mengder antistoffer under en pågående infeksjon',
          isCorrect: false,
          feedback:
            'Nei, det er plasmaceller som produserer store mengder antistoffer. Hukommelses-B-celler har en annen rolle.',
        },
        {
          id: 'b',
          text: 'De dreper virusinfiserte celler direkte',
          isCorrect: false,
          feedback:
            'Nei, det er cytotoksiske T-celler (CD8+) og NK-celler som dreper infiserte celler. B-celler bekjemper patogener via antistoffer.',
        },
        {
          id: 'c',
          text: 'De gjør det mulig å reagere raskt og sterkt ved gjentatt eksponering for det samme patogenet',
          isCorrect: true,
          feedback:
            'Riktig! Hukommelses-B-celler lever i årevis etter en infeksjon og kan raskt aktiveres og differensiere til plasmaceller ved gjentatt eksponering, noe som gir en rask og sterk sekundærrespons.',
        },
        {
          id: 'd',
          text: 'De presenterer antigener for T-celler i lymfeknutene',
          isCorrect: false,
          feedback:
            'B-celler kan riktignok presentere antigener, men dette er ikke den viktigste funksjonen til hukommelses-B-celler spesifikt. Dendrittiske celler er de mest effektive antigenpresenterende cellene.',
        },
      ],
      hints: [
        'Hva menes med «immunologisk hukommelse»?',
        'Tenk på forskjellen mellom primær- og sekundærrespons.',
      ],
      solution:
        'Svar C er korrekt. Hukommelses-B-celler er langlivede celler som dannes etter en primærrespons og sirkulerer i kroppen i årevis. Hvis kroppen eksponeres for det samme antigenet igjen, gjenkjenner hukommelses-B-cellene det umiddelbart, aktiveres raskt og differensierer til plasmaceller som produserer store mengder antistoffer. Dette gir en sekundærrespons som er både raskere (dager vs. uker), sterkere (10--100 ganger høyere antistoffnivå) og mer langvarig enn primærresponsen.',
    },
    // =========================================================================
    // Oppgave 6: T-celler og MHC
    // =========================================================================
    {
      id: 'bio1-6-2-ex-6',
      number: '6.2.6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom hjelper-T-celler (CD4+) og cytotoksiske T-celler (CD8+). Beskriv hvordan de gjenkjenner antigener ulikt, og hva som er deres hovedfunksjon i immunforsvaret.',
      hints: [
        'Hvilken type MHC-molekyl presenterer antigener for de to T-celletypene?',
        'Hjelper-T-celler «hjelper» -- men hvem hjelper de?',
      ],
      solution: `**Hjelper-T-celler (CD4+):**

- **Gjenkjenning:** Gjenkjenner antigenfragmenter presentert på **MHC klasse II-molekyler** av antigenpresenterende celler (makrofager, dendrittiske celler, B-celler)
- **Hovedfunksjon:** Fungerer som «dirigenter» i immunforsvaret -- de koordinerer immunresponsen ved å frigjøre cytokiner (signalmolekyler) som:
  - Aktiverer B-celler til å differensiere til plasmaceller og produsere antistoffer
  - Aktiverer cytotoksiske T-celler
  - Stimulerer makrofager til å bli mer effektive fagocytter
  - Rekrutterer flere immunceller til infeksjonsstedet
- **Betydning:** Uten fungerende hjelper-T-celler kollapser hele det ervervede immunforsvaret (dette er grunnen til at HIV er så alvorlig)

**Cytotoksiske T-celler (CD8+):**

- **Gjenkjenning:** Gjenkjenner antigenfragmenter presentert på **MHC klasse I-molekyler**, som finnes på alle kroppens kerneholdige celler. Virusinfiserte celler viser virusfragmenter på MHC I.
- **Hovedfunksjon:** Dreper infiserte celler direkte ved å frigjøre:
  - **Perforiner:** Proteiner som lager hull i cellemembranen til den infiserte cellen
  - **Granzymer:** Enzymer som trenger inn gjennom hullene og utløser programmert celledød (apoptose)
- **Betydning:** Viktige for å eliminere celler som er infisert med virus eller intracellulære bakterier, samt kreftceller

**Sammenfattet forskjell:**
Hjelper-T-celler er koordinatorer som aktiverer andre immunceller, mens cytotoksiske T-celler er drapsmenn som direkte eliminerer infiserte celler. Hjelper-T-cellene gjenkjenner antigener via MHC II (på APC-er), mens cytotoksiske T-celler gjenkjenner antigener via MHC I (på alle kerneholdige celler).`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    // =========================================================================
    // Oppgave 7: Antistoffenes funksjoner
    // =========================================================================
    {
      id: 'bio1-6-2-ex-7',
      number: '6.2.7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv antistoffenes Y-formede struktur og forklar fire ulike funksjoner antistoffer har i bekjempelsen av patogener.',
      hints: [
        'Tenk på de variable og konstante regionene -- hva er rollen til hver?',
        'Nøytralisering, opsonisering, komplementaktivering og agglutinasjon.',
      ],
      solution: `**Antistoffenes struktur:**

Antistoffer (immunglobuliner) er Y-formede proteiner som består av:
- **To tunge kjeder** og **to lette kjeder**, holdt sammen av disulfidbindinger
- **Variable regioner (V):** Finnes i endene av de to «armene» på Y-en. Disse er unike for hvert antistoff og inneholder antigenbindingssetet, som passer spesifikt til ett bestemt antigen (som en nøkkel i en lås). Hvert antistoff har to identiske bindingsseter.
- **Konstant region (C):** «Stammen» på Y-en. Denne er lik innenfor samme antistoffklasse og bestemmer antistoffets biologiske funksjon (f.eks. hvilke immunceller det kan binde seg til).

**Fire funksjoner antistoffer har:**

**1. Nøytralisering:**
Antistoffet binder seg til overflaten av et patogen (f.eks. et virus) og blokkerer det fra å feste seg til og infisere vertsceller. Ved å «dekke til» patogenets bindingsseter hindrer antistoffet det i å forårsake skade.

**2. Opsonisering:**
Antistoffene fungerer som «merkelapper» på patogenets overflate. Fagocytter (makrofager og nøytrofile) har reseptorer som gjenkjenner den konstante regionen på antistoffene, noe som gjør at fagocyttene lettere binder seg til og fagocyterer det merkede patogenet.

**3. Komplementaktivering:**
Når antistoffer binder seg til antigener på et patogen, kan de aktivere komplementsystemet. Komplementproteinene kan danne porer i bakteriens cellemembran (cellelysering), tiltrekke fagocytter (kjemotaksis) og fremme inflammasjon.

**4. Agglutinasjon:**
Siden hvert antistoff har to antigenbindingsseter, kan det binde to forskjellige patogener (eller antigenpartikler) samtidig. Dette fører til at patogenene klumper seg sammen i store aggregater, som er lettere for fagocytter å fagocytere og som hindrer patogenene i å bevege seg fritt.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    // =========================================================================
    // Oppgave 8: Aktiv vs. passiv immunitet
    // =========================================================================
    {
      id: 'bio1-6-2-ex-8',
      number: '6.2.8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom aktiv og passiv immunitet. Gi ett eksempel på naturlig og kunstig variant av hver type. Hvorfor er passiv immunitet midlertidig?',
      hints: [
        'Nøkkelspørsmålet: Lager kroppen sine egne antistoffer, eller mottar den ferdige antistoffer?',
        'Tenk på hva som gir langvarig beskyttelse: antistoffer eller hukommelsesceller?',
      ],
      solution: `**Aktiv immunitet:**
Kroppen produserer sine **egne antistoffer og hukommelsesceller** etter å ha blitt eksponert for et antigen.

- **Naturlig aktiv:** Oppstår etter å ha gjennomgått en infeksjon. Eksempel: En person som har hatt meslinger utvikler livslang immunitet.
- **Kunstig aktiv:** Oppnås gjennom vaksinasjon. Eksempel: MMR-vaksinen (meslinger, kusma, røde hunder) inneholder svekkede virus som stimulerer immunforsvaret uten å gi alvorlig sykdom.
- **Varighet:** Langvarig, ofte livslang, fordi det dannes hukommelsesceller.

**Passiv immunitet:**
Kroppen mottar **ferdige antistoffer** fra en ekstern kilde.

- **Naturlig passiv:** Antistoffer overføres fra mor til barn. Eksempel: IgG-antistoffer krysser morkaken under svangerskapet og gir nyfødte beskyttelse de første månedene. IgA-antistoffer i morsmelk beskytter barnets tarmslimhinne.
- **Kunstig passiv:** Ferdige antistoffer gis som injeksjon (antiserum/immunglobulin). Eksempel: Etter bitt av giftig slange gis antiserum med antistoffer mot slangens gift for umiddelbar nøytralisering.
- **Varighet:** Midlertidig (uker til måneder).

**Hvorfor er passiv immunitet midlertidig?**
Ved passiv immunitet mottar kroppen ferdige antistoffer, men den aktiverer ikke sine egne B-celler og T-celler. Derfor dannes det **ingen hukommelsesceller**. Antistoffene brytes naturlig ned etter noen uker til måneder, og kroppen har ingen evne til å produsere nye. Når antistoffene er borte, er personen ikke lenger beskyttet.

Ved aktiv immunitet, derimot, har immunforsvaret gjennomgått en full immunrespons og dannet hukommelsesceller som kan reagere raskt ved ny eksponering.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    // =========================================================================
    // Oppgave 9: Flervalg -- Vaksiner
    // =========================================================================
    {
      id: 'bio1-6-2-ex-9',
      number: '6.2.9',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedprinsippet bak vaksinasjon?',
      options: [
        {
          id: 'a',
          text: 'Kroppen tilføres ferdige antistoffer som gir umiddelbar beskyttelse',
          isCorrect: false,
          feedback:
            'Nei, dette beskriver passiv immunitet (f.eks. antiserum), ikke vaksinasjon. Vaksiner stimulerer kroppen til å lage egne antistoffer.',
        },
        {
          id: 'b',
          text: 'Immunforsvaret eksponeres for et ufarlig antigen slik at det danner hukommelsesceller som gir beskyttelse ved fremtidig infeksjon',
          isCorrect: true,
          feedback:
            'Riktig! Vaksiner inneholder svekkede, inaktiverte eller deler av patogener som stimulerer immunforsvaret til å danne antistoffer og hukommelsesceller, uten å forårsake alvorlig sykdom.',
        },
        {
          id: 'c',
          text: 'Vaksiner dreper patogener direkte i kroppen, på samme måte som antibiotika',
          isCorrect: false,
          feedback:
            'Nei, vaksiner dreper ikke patogener direkte. De trener immunforsvaret til å gjenkjenne og bekjempe patogenet selv.',
        },
        {
          id: 'd',
          text: 'Vaksiner styrker den første forsvarslinjen ved å gjøre huden tykkere',
          isCorrect: false,
          feedback:
            'Nei, vaksiner virker på den tredje forsvarslinjen (ervervet immunitet), ikke den første.',
        },
      ],
      hints: [
        'Tenk på hva som skjer i kroppen etter vaksinasjon.',
        'Vaksinasjon gir kunstig aktiv immunitet -- hva betyr det?',
      ],
      solution:
        'Svar B er korrekt. Vaksinasjon handler om å eksponere immunforsvaret for et antigen (i en trygg form) slik at det kan gjennomgå en primærrespons og danne hukommelsesceller. Dersom personen senere eksponeres for det virkelige patogenet, vil hukommelsescellene muliggjøre en rask og sterk sekundærrespons som bekjemper infeksjonen før alvorlig sykdom utvikles.',
    },
    // =========================================================================
    // Oppgave 10: Vaksinetyper
    // =========================================================================
    {
      id: 'bio1-6-2-ex-10',
      number: '6.2.10',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv kort de fire hovedtypene vaksiner: levende svekkede, inaktiverte, subenhetsvaksiner og mRNA-vaksiner. Hva er fordelen og ulempen med hver type?',
      hints: [
        'Tenk på hva vaksinen inneholder i hvert tilfelle.',
        'Levende svekkede vaksiner gir sterkest immunrespons -- hvorfor?',
      ],
      solution: `**1. Levende svekkede (attenuerte) vaksiner:**
- **Inneholder:** Levende patogener som er svekket i laboratoriet slik at de ikke kan forårsake alvorlig sykdom
- **Fordel:** Gir sterk og langvarig immunitet som ligner responsen på en naturlig infeksjon, fordi det svekkede patogenet replikerer i begrenset grad
- **Ulempe:** Kan i sjeldne tilfeller forårsake sykdom hos immunsupprimerte personer
- **Eksempler:** MMR-vaksinen, vannkoppevaksinen

**2. Inaktiverte (drepte) vaksiner:**
- **Inneholder:** Patogener som er drept med varme eller kjemikalier
- **Fordel:** Tryggere enn levende vaksiner, ingen risiko for at vaksinen forårsaker sykdom
- **Ulempe:** Gir ofte svakere immunrespons og krever påfyllingsdoser (boostere)
- **Eksempler:** Influensavaksine, hepatitt A-vaksine

**3. Subenhetsvaksiner (proteinvaksiner):**
- **Inneholder:** Bare utvalgte deler (proteiner eller polysakkarider) av patogenet
- **Fordel:** Svært trygge -- inneholder ikke hele patogenet, bare de komponentene som utløser immunrespons
- **Ulempe:** Kan gi svakere immunrespons og trenger ofte adjuvans (hjelpestoff) og påfyllingsdoser
- **Eksempler:** Hepatitt B-vaksine, HPV-vaksine

**4. mRNA-vaksiner:**
- **Inneholder:** mRNA som koder for et protein fra patogenet (f.eks. piggproteinet til SARS-CoV-2)
- **Fordel:** Kan utvikles raskt (noe som var avgjørende under covid-19-pandemien), gir sterk immunrespons, inneholder ikke patogenet i noen form
- **Ulempe:** Krever spesiell lagring (lav temperatur), relativt ny teknologi
- **Viktig:** mRNA-et brytes raskt ned av cellen og påvirker ikke cellens eget DNA
- **Eksempler:** Pfizer/BioNTech og Moderna covid-19-vaksiner`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    // =========================================================================
    // Oppgave 11: Flokkimmunitet
    // =========================================================================
    {
      id: 'bio1-6-2-ex-11',
      number: '6.2.11',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar begrepet flokkimmunitet. Hvorfor er flokkimmunitet viktig for personer som ikke kan vaksineres (f.eks. spedbarn og immunsupprimerte)?',
      hints: [
        'Tenk på hva som skjer med smittekjeden når en stor andel av befolkningen er immun.',
        'Hvem er avhengig av at andre er vaksinert?',
      ],
      solution: `**Flokkimmunitet (gruppebeskyttelse):**

Flokkimmunitet er en form for indirekte beskyttelse mot smittsomme sykdommer som oppstår når en tilstrekkelig stor andel av befolkningen er immun -- enten gjennom vaksinasjon eller gjennomgått infeksjon.

**Hvordan det fungerer:**
Når mange nok i en befolkning er immune, får et patogen vanskeligheter med å finne nye verter å infisere. Smittekjeden brytes, og sykdommen kan ikke spre seg effektivt. Terskelen for flokkimmunitet varierer mellom sykdommer:
- Meslinger: ca. 95 % må være immune (svært smittsomt)
- Polio: ca. 80--85 %
- Influensa: ca. 75--80 %

**Hvorfor er det viktig for sårbare grupper?**
Noen personer kan ikke vaksineres:
- **Spedbarn** som er for unge til å motta vaksiner
- **Immunsupprimerte** personer (f.eks. under kreftbehandling eller etter organtransplantasjon)
- Personer med **alvorlige allergier** mot vaksinekomponenter

Disse personene er avhengige av at resten av befolkningen er vaksinert. Når vaksinasjonsdekningen er høy nok, er risikoen for at de møter patogenet svært lav, fordi patogenet ikke klarer å spre seg i befolkningen.

**Konsekvens av lav vaksinasjonsdekning:**
Dersom vaksinasjonsdekningen faller under terskelen for flokkimmunitet, kan utbrudd oppstå. Dette har blitt observert ved meslingeutbrudd i land der vaksinasjonsraten har sunket.

**Konklusjon:** Vaksinasjon er ikke bare et individuelt valg -- det er også et solidaritetsansvar. Ved å vaksinere seg selv bidrar man til å beskytte sårbare personer som ikke kan vaksineres.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    // =========================================================================
    // Oppgave 12: Allergi
    // =========================================================================
    {
      id: 'bio1-6-2-ex-12',
      number: '6.2.12',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar mekanismen bak en allergisk reaksjon. Hva er histamin, og hvilken rolle spiller det? Hva er anafylaksi?',
      hints: [
        'Tenk på hvilken type antistoff som er involvert (IgE).',
        'Hva gjør mastceller når de aktiveres?',
      ],
      solution: `**Allergimekanismen -- trinn for trinn:**

**1. Sensibilisering (første eksponering):**
- Immunforsvaret møter et ufarlig stoff (allergen), f.eks. bjørkepollen
- Av ukjent grunn produserer B-celler IgE-antistoffer mot allergenet (i stedet for den normale responsen)
- IgE-antistoffene binder seg til overflaten av **mastceller** i vev (f.eks. i neseslimhinnen, huden)
- Personen merker ingen symptomer ved første eksponering

**2. Allergisk reaksjon (andre gangs eksponering):**
- Allergenet trenger inn igjen og binder seg til IgE-antistoffene på mastcellene
- Når allergenet kryssbinder to IgE-molekyler på en mastcelle, aktiveres cellen
- Mastcellen frigjør innholdet av sine granula -- en prosess kalt **degranulering**
- Granula inneholder **histamin** og andre inflammasjonsstoffer

**Histamins rolle:**
Histamin er et signalstoff som forårsaker de typiske allergisymptomene:
- **Vasodilatasjon:** Blodårene utvider seg, noe som gir rødhet og varmefølelse
- **Økt karpermeabilitet:** Væske lekker ut i vevet og forårsaker hevelse
- **Slimhinneirritasjon:** Økt slimproduksjon gir rennende nese og tåreflod
- **Bronkokonstriksjon:** Sammentrekking av luftveismuskulatur kan gi pustebesvær
- **Kløe:** Histamin stimulerer nerveender som gir kløe

Antihistaminer (allergimedisin) virker ved å blokkere histaminreseptorene.

**Anafylaksi:**
Anafylaksi er en alvorlig, systemisk (helkropps) allergisk reaksjon som kan være livstruende:
- Massiv histaminfrigjøring fra mastceller over hele kroppen
- **Dramatisk blodtrykksfall** (anafylaktisk sjokk) pga. utbredt vasodilatasjon
- **Luftveishevelse** (hevelse i svelg og strupehode) som kan blokkere luftveiene
- Kan oppstå innen minutter etter eksponering (f.eks. etter inntak av peanøtter, bitt av veps, eller medikamenter)
- **Behandling:** Umiddelbar injeksjon av **adrenalin** (EpiPen), som motvirker histamineffektene ved å trekke sammen blodårene og åpne luftveiene`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    // =========================================================================
    // Oppgave 13: Antibiotikaresistens
    // =========================================================================
    {
      id: 'bio1-6-2-ex-13',
      number: '6.2.13',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan antibiotikaresistens utvikles hos bakterier. Bruk begrepene naturlig seleksjon, mutasjon og horisontal genoverføring i svaret ditt. Beskriv også tre tiltak som kan bremse utviklingen av antibiotikaresistens.',
      hints: [
        'Tenk på Darwin og evolusjon: Hva skjer når man setter et seleksjonspress (antibiotika) på en bakteriepopulasjon?',
        'Horisontal genoverføring betyr at bakterier kan dele gener seg imellom uten å formere seg.',
      ],
      solution: `**Utvikling av antibiotikaresistens:**

**Mutasjon og naturlig seleksjon:**
1. I en stor bakteriepopulasjon finnes det naturlig genetisk variasjon på grunn av tilfeldige **mutasjoner** i DNA-et under replikasjon
2. Noen av disse mutasjonene kan tilfeldigvis gi en bakterie egenskaper som gjør den motstandsdyktig mot et bestemt antibiotikum (f.eks. et enzym som bryter ned antibiotikumet, en endret cellevegg som antibiotikumet ikke kan binde seg til, eller en pumpe som pumper antibiotikumet ut av cellen)
3. Når antibiotika gis, skapes et **seleksjonspress**: sensitive bakterier drepes, mens de resistente overlever
4. De resistente bakteriene har nå en enorm fordel -- de har mindre konkurranse om næring og plass
5. De formerer seg raskt, og **hele avkommet arver resistensgenet**
6. Over tid dominerer resistente bakterier populasjonen

**Horisontal genoverføring:**
Bakterier kan dele resistensgener med hverandre uten å formere seg, gjennom tre mekanismer:
- **Konjugasjon:** Direkte overføring av DNA (plasmider) mellom bakterier via en «bro» (pilus)
- **Transformasjon:** Bakterier tar opp fritt DNA fra omgivelsene (f.eks. fra døde bakterier)
- **Transduksjon:** Bakteriofager (virus som infiserer bakterier) overfører DNA mellom bakterier

Dette betyr at resistens kan spre seg **mellom ulike bakteriearter**, noe som gjør problemet enda mer alvorlig.

**Tre tiltak for å bremse antibiotikaresistens:**

**1. Riktig antibiotikabruk:**
- Bruke antibiotika kun mot bakterielle infeksjoner (aldri mot virus)
- Velge smalspektret antibiotikum når mulig (dreper bare målbakterien, ikke hele normalfloraen)
- Alltid fullføre hele kuren, selv om man føler seg frisk (ellers kan halvresistente bakterier overleve og utvikle full resistens)
- Legen skal forskrive antibiotika kun når det er nødvendig

**2. Forebygge infeksjoner:**
- God håndhygiene (viktigste enkeltiltak)
- Vaksinasjon (reduserer behovet for antibiotika)
- Smittevernrutiner på sykehus (isolering av pasienter med resistente bakterier, f.eks. MRSA)
- Trygg mat og rent vann

**3. Redusere antibiotikabruk i landbruket:**
- Store mengder antibiotika brukes i husdyrhold (for å forebygge infeksjoner og fremme vekst)
- Resistensgener kan overføres fra dyrebakterier til menneskelige bakterier via mat, vann og miljøet
- Strenge reguleringer av antibiotikabruk i husdyr (Norge er ledende her)

**Andre viktige tiltak:** Forskning på nye antibiotika, utvikling av alternative behandlinger (bakteriofagterapi, antimikrobielle peptider), global overvåking av resistensmønstre.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    // =========================================================================
    // Oppgave 14: Sammenligning av forsvarslinjer
    // =========================================================================
    {
      id: 'bio1-6-2-ex-14',
      number: '6.2.14',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag en oversikt som sammenligner de tre forsvarslinjene i immunforsvaret. For hver forsvarslinje skal du beskrive: (a) om den er medfødt eller ervervet, (b) om den er spesifikk eller uspesifikk, (c) responstid, og (d) viktige komponenter med eksempler.',
      hints: [
        'Tenk på de tre forsvarslinjene som et lagdelt forsvar der hver linje aktiveres hvis den forrige ikke lykkes.',
        'Bare den tredje forsvarslinjen er spesifikk og har hukommelse.',
      ],
      solution: `**Sammenligning av de tre forsvarslinjene:**

---

**FØRSTE FORSVARSLINJE -- Fysiske og kjemiske barrierer**

**(a) Medfødt/ervervet:** Medfødt
**(b) Spesifikk/uspesifikk:** Uspesifikk (virker mot alle patogener likt)
**(c) Responstid:** Alltid aktiv (konstant beskyttelse)
**(d) Viktige komponenter:**
- Hud (keratin, syrekappe, talg)
- Slimhinner og mukociliær transport
- Lysozym i tårer og spytt
- Magesyre (pH 1,5--2)
- Normalflora (konkurranse med patogener)

---

**ANDRE FORSVARSLINJE -- Medfødt (uspesifikk) immunitet**

**(a) Medfødt/ervervet:** Medfødt
**(b) Spesifikk/uspesifikk:** Uspesifikk (reagerer likt uansett patogen)
**(c) Responstid:** Rask -- minutter til timer
**(d) Viktige komponenter:**
- Fagocytter: makrofager, nøytrofile granulocytter, dendrittiske celler (fagocytose)
- Naturlige dreperceller (NK-celler): dreper virusinfiserte celler og kreftceller
- Inflammasjon: histamin, vasodilatasjon, rekruttering av immunceller
- Feber: pyrogener hever kroppstemperaturen
- Komplementsystemet: opsonisering, cellelysering, kjemotaksis
- Interferoner: antiviralt varslingsystem

---

**TREDJE FORSVARSLINJE -- Ervervet (spesifikk) immunitet**

**(a) Medfødt/ervervet:** Ervervet (utvikles gjennom livet)
**(b) Spesifikk/uspesifikk:** Spesifikk (reagerer på bestemte antigener)
**(c) Responstid:** Langsom ved første eksponering (7--14 dager), rask ved gjentatt eksponering (1--2 dager, sekundærrespons)
**(d) Viktige komponenter:**
- B-celler → plasmaceller → antistoffer (humoral immunitet)
- Hjelper-T-celler (CD4+): koordinerer immunresponsen
- Cytotoksiske T-celler (CD8+): dreper infiserte celler
- MHC-molekyler (klasse I og II): antigenpresentasjon
- Hukommelsesceller (B og T): immunologisk hukommelse

---

**Samspill mellom forsvarslinjene:**
De tre forsvarslinjene fungerer ikke isolert, men samarbeider tett. Dendrittiske celler og makrofager (andre forsvarslinje) fungerer som en bro til det ervervede immunforsvaret (tredje forsvarslinje) gjennom antigenpresentasjon. Antistoffer fra tredje forsvarslinje aktiverer komplementsystemet og opsoniserer patogener for fagocytose (andre forsvarslinje).`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    // =========================================================================
    // Oppgave 15: Refleksjonsoppgave -- Vaksinehistorie
    // =========================================================================
    {
      id: 'bio1-6-2-ex-15',
      number: '6.2.15',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Edward Jenner regnes som «vaksinasjonens far». I 1796 viste han at smitte med kukopper beskyttet mot den langt farligere sykdommen kopper. I 1980 erklærte WHO kopper utryddet -- den eneste menneskelige sykdommen som er fullstendig utryddet gjennom vaksinasjon.\n\n(a) Forklar med immunologiske begreper hvorfor smitte med kukopper ga beskyttelse mot kopper.\n(b) Diskuter hvilke faktorer som muliggjorde utryddelsen av kopper, og hvorfor det har vært vanskeligere å utrydde andre sykdommer som f.eks. influensa og HIV.',
      hints: [
        'Tenk på kryssreaktivitet mellom antigener.',
        'Hvilke egenskaper ved et patogen gjør det lettere eller vanskeligere å utrydde gjennom vaksinasjon?',
      ],
      solution: `**(a) Immunologisk forklaring:**

Koppevirus og kukoppevirus er nært beslektede virus. De har derfor svært like **overflateproteiner (antigener)**. Når Jenner smittet folk med kukopper:

1. Kukoppeviruset (som gir mild sykdom) infiserte vertscellene
2. Immunforsvaret gjennomgikk en full immunrespons: B-celler produserte antistoffer, og T-celler ble aktivert
3. **Hukommelses-B-celler** og **hukommelses-T-celler** ble dannet
4. Fordi antigenene på koppevirus er svært like antigenene på kukoppevirus (**kryssreaktivitet**), gjenkjente hukommelsescellene også det ekte koppeviruset
5. Ved eksponering for koppevirus utløstes en rask **sekundærrespons** som eliminerte viruset før alvorlig sykdom utviklet seg

Dette prinsippet kalles **kryssimmunitet** og er grunnlaget for Jenners oppdagelse.

**(b) Faktorer som muliggjorde utryddelsen av kopper:**

**1. Stabil virustype:** Koppeviruset **muterte svært lite**, slik at én vaksine ga langvarig beskyttelse mot alle stammer.

**2. Ingen dyrereservoar:** Kopper smittet bare mennesker. Det fantes ingen dyrearter som fungerte som reservoar for viruset, noe som betydde at viruset kunne elimineres helt ved å vaksinere nok mennesker.

**3. Tydelige symptomer:** Infiserte personer var lette å identifisere (karakteristisk utslett), noe som muliggjorde effektiv smittesporing og ringvaksinering.

**4. Livslang immunitet:** Én vaksinasjon ga langvarig beskyttelse.

**5. Globalt samarbeid:** WHOs massive vaksinasjonskampanje (1967--1980) med ringvaksinering rundt utbrudd.

**Hvorfor er det vanskeligere å utrydde influensa:**
- Influensaviruset **muterer svært raskt** (**antigendrift** og **antigenskift**), slik at nye virusstammer oppstår hvert år
- Vaksinen må oppdateres årlig og gir ikke livslang immunitet
- Influensa har **dyrereservoarer** (fugler, griser) som viruset kan mutere i
- Mild sykdomsforløp gjør at mange ikke vaksinerer seg

**Hvorfor er det vanskeligere å utrydde HIV:**
- HIV **integrerer sitt arvemateriale i vertscellens DNA**, der det kan ligge i dvale (latent infeksjon) -- immunforsvaret kan ikke nå det
- HIV muterer ekstremt raskt (høy feilrate under replikasjon)
- HIV angriper selve **hjelper-T-cellene**, altså kommandosentralen i immunforsvaret
- Det finnes ennå **ingen effektiv vaksine** mot HIV
- Lang symptomfri fase gjør at mange sprer viruset uten å vite at de er smittet`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
      isInvestigation: true,
    },
  ],
};
