/**
 * Tekstbok innhold for Naturfag VG1 DEL 3
 * Seksjon 5: Miljø og bærekraft (5.1-5.4)
 * Seksjon 6: Helse og livsstil (6.1-6.4)
 *
 * Dekker LK20 kompetansemål for NAT01-04.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SEKSJON 5: Miljø og bærekraft
// ============================================================================

export const CHAPTER_NAT_VG1_5_1: TextbookChapter = {
  id: 'nat-vg1-5-1',
  courseId: 'nat-vg1',
  chapterNumber: '5.1',
  title: 'Økosystemer og næringskjeder',
  description: 'Lær om økosystemer, næringskjeder og energistrøm.',
  estimatedMinutes: 50,
  competenceGoals: ['gjøre rede for hvordan noen miljøgifter kan akkumuleres i næringskjeder'],
  content: [
    {
      id: 'nat-vg1-5-1-intro',
      type: 'text',
      content: `## Hva er et økosystem?

Et **økosystem** er et avgrenset område der levende organismer (biotiske faktorer) samspiller med hverandre og med de ikke-levende omgivelsene (abiotiske faktorer).

**Biotiske faktorer:**
- Planter, dyr, sopp, bakterier
- Konkurranse, predasjon, symbiose

**Abiotiske faktorer:**
- Temperatur, lys, vann
- Jordsmonn, pH, næringsstoffer

Eksempler på økosystemer: skog, innsjø, korallrev, eng, fjæresone.`,
    },
    {
      id: 'nat-vg1-5-1-def-1',
      type: 'definition',
      title: 'Roller i økosystemet',
      content: `**Produsenter:** Organismer som lager sin egen mat gjennom fotosyntese (planter, alger, noen bakterier)

**Konsumenter:** Organismer som spiser andre organismer
- Primærkonsumenter (planteetere)
- Sekundærkonsumenter (rovdyr som spiser planteetere)
- Tertiærkonsumenter (topprovdyr)

**Nedbrytere:** Sopp og bakterier som bryter ned dødt organisk materiale og frigjør næringsstoffer`,
    },
    {
      id: 'nat-vg1-5-1-def-2',
      type: 'definition',
      title: 'Næringskjeder og næringsnett',
      content: `**Næringskjede:** En lineær fremstilling av hvem som spiser hvem
Eksempel: Gress → Gresshoppe → Frosk → Slange → Hauk

**Næringsnett:** Sammenfletning av flere næringskjeder som viser det komplekse spisemønsteret i et økosystem

**Trofisk nivå:** Posisjon i næringskjeden
- 1. nivå: Produsenter
- 2. nivå: Primærkonsumenter
- 3. nivå: Sekundærkonsumenter
- osv.`,
    },
    {
      id: 'nat-vg1-5-1-def-3',
      type: 'definition',
      title: 'Energistrøm i økosystemet',
      content: `**Solenergi** fanges opp av produsenter gjennom fotosyntese.

**10%-regelen:** Bare ca. 10% av energien på ett trofisk nivå overføres til neste nivå.

Resten tapes som varme gjennom celleånding.

**Konsekvens:** Det blir stadig mindre energi oppover i næringskjeden, derfor er det færre topprovdyr enn planteetere.`,
    },
    {
      id: 'nat-vg1-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Energitap i en næringskjede',
      problem: 'En eng mottar 10 000 kJ solenergi. Beregn energien tilgjengelig for gresshopper og frosker hvis 10% overføres per ledd.',
      solution: `**Løsning:**
- Solenergi: 10 000 kJ
- Planter (produsenter): 10 000 × 0,10 = 1000 kJ (lagret i plantemateriale)
- Gresshopper (primærkonsumenter): 1000 × 0,10 = 100 kJ
- Frosker (sekundærkonsumenter): 100 × 0,10 = 10 kJ

**Svar:** Gresshoppene har tilgang til 100 kJ, og froskene har tilgang til bare 10 kJ.

Dette forklarer hvorfor det er mange flere planter enn planteetere, og enda færre rovdyr.`,
    },
    {
      id: 'nat-vg1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom en næringskjede og et næringsnett.',
        solution: 'En næringskjede viser en lineær forbindelse mellom organismer i rekkefølgen hvem som spiser hvem. Et næringsnett er sammenfletningen av mange næringskjeder og viser det komplekse spisemønsteret i et økosystem, der mange arter spiser flere typer byttedyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'I en innsjø finnes planteplankton, dyreplankton, småfisk og gjedde. Sett opp en næringskjede og identifiser det trofiske nivået for hver organisme.',
        solution: 'Næringskjede: Planteplankton (produsent, 1. nivå) → Dyreplankton (primærkonsument, 2. nivå) → Småfisk (sekundærkonsument, 3. nivå) → Gjedde (tertiærkonsument, 4. nivå)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor det ikke kan være veldig lange næringskjeder i naturen.',
        solution: 'På grunn av 10%-regelen går ca. 90% av energien tapt som varme for hvert ledd i næringskjeden. Etter 4-5 ledd er det så lite energi igjen at det ikke er nok til å opprettholde en levedyktig populasjon av topprovdyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_5_2: TextbookChapter = {
  id: 'nat-vg1-5-2',
  courseId: 'nat-vg1',
  chapterNumber: '5.2',
  title: 'Miljøgifter og bioakkumulering',
  description: 'Forstå hvordan miljøgifter akkumuleres i næringskjeder og påvirker økosystemer.',
  estimatedMinutes: 55,
  competenceGoals: ['gjøre rede for hvordan noen miljøgifter kan akkumuleres i næringskjeder, og vurdere tiltak for å ta vare på helse og miljø'],
  content: [
    {
      id: 'nat-vg1-5-2-intro',
      type: 'text',
      content: `## Hva er miljøgifter?

**Miljøgifter** er stoffer som er skadelige for levende organismer selv i lave konsentrasjoner. De har ofte følgende egenskaper:

**Kjennetegn på miljøgifter:**
- **Persistente:** Brytes ikke lett ned i naturen
- **Bioakkumulerende:** Hopes opp i organismer
- **Giftige:** Skadelige for levende organismer

**Eksempler på miljøgifter:**
- Tungmetaller (kvikksølv, bly, kadmium)
- PCB (polyklorerte bifenyler)
- DDT (insektmiddel)
- Dioksiner
- PFAS (per- og polyfluorerte stoffer)`,
    },
    {
      id: 'nat-vg1-5-2-def-1',
      type: 'definition',
      title: 'Bioakkumulering',
      content: `**Bioakkumulering:** En organisme tar opp et stoff raskere enn den kan kvitte seg med det. Stoffet hoper seg derfor opp i kroppen over tid.

**Eksempel - kvikksølv i fisk:**
En fisk tar opp kvikksølv fra vannet gjennom gjellene og maten. Fordi kvikksølv er fettløselig og vanskelig å skille ut, øker konsentrasjonen gjennom hele fiskens liv.

Eldre og større fisk har høyere konsentrasjoner enn yngre fisk.`,
    },
    {
      id: 'nat-vg1-5-2-def-2',
      type: 'definition',
      title: 'Biomagnifisering',
      content: `**Biomagnifisering:** Konsentrasjonen av et stoff øker for hvert ledd i næringskjeden.

**Mekanisme:**
1. Produsenter tar opp lave konsentrasjoner fra miljøet
2. Primærkonsumenter spiser mange produsenter → høyere konsentrasjon
3. Sekundærkonsumenter spiser mange primærkonsumenter → enda høyere
4. Topprovdyr får de høyeste konsentrasjonene

**Eksempel - DDT:**
Vann: 0,000003 ppm → Plankton: 0,04 ppm → Småfisk: 0,5 ppm → Stor fisk: 2 ppm → Fiskeørn: 25 ppm

Konsentrasjonen øker ca. 10 millioner ganger fra vann til topprovdyr!`,
    },
    {
      id: 'nat-vg1-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Kvikksølv i Arktis',
      problem: 'Forklar hvorfor isbjørn i Arktis har høye nivåer av kvikksølv selv om Arktis er langt fra forurensningskilder.',
      solution: `**Forklaring:**

1. **Langtransport:** Kvikksølv frigjøres fra kullforbrenning og industri i sørligere områder. Det transporteres med luftstrømmer til Arktis.

2. **Biomagnifisering i næringskjeden:**
   - Alger tar opp kvikksølv fra havet
   - Dyreplankton spiser alger
   - Fisk spiser dyreplankton
   - Sel spiser fisk
   - Isbjørn spiser sel

3. **Topprovdyr:** Isbjørn er på toppen av næringskjeden og akkumulerer kvikksølv fra alle byttedyrene over lang tid.

4. **Fettløselig:** Kvikksølv lagres i fettvev, og arktiske dyr har mye fett for å holde varmen.`,
    },
    {
      id: 'nat-vg1-5-2-def-3',
      type: 'definition',
      title: 'Helseeffekter av miljøgifter',
      content: `**Kvikksølv:**
- Nerveskader
- Fosterskader
- Konsentrasjonsproblemer

**PCB:**
- Hormonforstyrrelser
- Immunsvekkelse
- Kreftfremkallende

**DDT:**
- Hormonforstyrrelser hos dyr
- Tynnere eggeskall hos fugler
- Mulig kreftfremkallende

**Bly:**
- Nerveskader, spesielt hos barn
- Nedsatt IQ
- Nyreproblemer`,
    },
    {
      id: 'nat-vg1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom bioakkumulering og biomagnifisering.',
        solution: 'Bioakkumulering er når et stoff hoper seg opp inne i én organisme over tid fordi den tar opp stoffet raskere enn den kan kvitte seg med det. Biomagnifisering er når konsentrasjonen av stoffet øker for hvert ledd oppover i næringskjeden, slik at topprovdyr får høyest konsentrasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'DDT ble mye brukt som insektmiddel på 1950-60-tallet. Det førte til at bestanden av rovfugler som fiskeørn og havørn gikk kraftig tilbake. Forklar sammenhengen.',
        solution: 'DDT ble biomagnifisert i næringskjeden. Rovfuglene på toppen fikk svært høye konsentrasjoner. DDT forstyrret kalsiumstoffskiftet hos fuglene, slik at eggeskallene ble for tynne og knuste før ungene var ferdig utviklet. Dette førte til dramatisk redusert ungeproduksjon og bestandsnedgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre tiltak som kan redusere problemet med miljøgifter.',
        solution: 'Mulige tiltak: 1) Forbud mot bruk og produksjon av de farligste stoffene (som DDT-forbudet). 2) Rensing av industriutslipp. 3) Sikker håndtering og destruksjon av avfall som inneholder miljøgifter. 4) Internasjonale avtaler (Stockholmkonvensjonen). 5) Redusere forbruk av produkter som inneholder miljøgifter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_5_3: TextbookChapter = {
  id: 'nat-vg1-5-3',
  courseId: 'nat-vg1',
  chapterNumber: '5.3',
  title: 'Klimaendringer',
  description: 'Lær om drivhuseffekten, klimaendringer og konsekvenser.',
  estimatedMinutes: 55,
  competenceGoals: ['gjøre rede for hvordan klimaendringer påvirker evolusjon, utbredelse av arter og biologisk mangfold'],
  content: [
    {
      id: 'nat-vg1-5-3-intro',
      type: 'text',
      content: `## Drivhuseffekten

**Drivhuseffekten** er en naturlig prosess som holder jorden varm nok for liv.

**Hvordan virker den?**
1. Sollys (kortbølget stråling) passerer gjennom atmosfæren
2. Jordens overflate varmes opp og sender ut varmestråling (langbølget infrarød stråling)
3. Drivhusgasser absorberer noe av denne strålingen og sender den tilbake til jorda
4. Jorden blir varmere enn den ville vært uten drivhusgasser

**Uten drivhuseffekt:** Gjennomsnittlig jordtemperatur ville vært ca. -18°C
**Med naturlig drivhuseffekt:** Ca. +15°C`,
    },
    {
      id: 'nat-vg1-5-3-def-1',
      type: 'definition',
      title: 'Viktige drivhusgasser',
      content: `**Vanndamp (H₂O):** Den viktigste naturlige drivhusgassen

**Karbondioksid (CO₂):** Frigjøres ved forbrenning av fossilt brensel, avskoging. Hovedårsak til menneskeskapt oppvarming.

**Metan (CH₄):** Fra husdyr, rismarker, søppelfyllinger. Ca. 28× sterkere enn CO₂ over 100 år.

**Lystgass (N₂O):** Fra landbruk, gjødsel. Ca. 265× sterkere enn CO₂.

**Fluorholdige gasser:** Industrigasser, svært potente men lavere konsentrasjoner.`,
    },
    {
      id: 'nat-vg1-5-3-def-2',
      type: 'definition',
      title: 'Forsterket drivhuseffekt',
      content: `**Menneskelige aktiviteter** har økt konsentrasjonen av drivhusgasser:

- CO₂: Fra 280 ppm (førindustriell) til over 420 ppm i dag
- Metan: Mer enn fordoblet siden 1750
- Lystgass: Økt ca. 20%

**Konsekvens:** Mer av jordens varmestråling fanges opp → global oppvarming

Global gjennomsnittstemperatur har økt ca. 1,1°C siden førindustriell tid.`,
    },
    {
      id: 'nat-vg1-5-3-def-3',
      type: 'definition',
      title: 'Konsekvenser av klimaendringer',
      content: `**Fysiske endringer:**
- Høyere temperaturer
- Smelting av isbreer og polaris
- Stigende havnivå
- Mer ekstremvær (hetebølger, flom, tørke)
- Endret nedbørsmønster

**Biologiske konsekvenser:**
- Arter flytter nordover/oppover i fjellet
- Endret tidspunkt for blomstring, trekk, formering
- Korallbleking
- Utryddelse av arter som ikke kan tilpasse seg
- Endrede økosystemer`,
    },
    {
      id: 'nat-vg1-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Isbjørnen og klimaendringer',
      problem: 'Forklar hvordan klimaendringer truer isbjørnen.',
      solution: `**Isbjørnens situasjon:**

1. **Avhengig av havis:** Isbjørner jakter sel fra isflak. De venter ved pustehull eller ved iskanten.

2. **Isen forsvinner:** Arktisk havis har krympet dramatisk. Sommeren 2012 var arealet halvert sammenlignet med 1979.

3. **Lengre svømmetur:** Når isen smelter, må isbjørnene svømme lenger for å finne mat. Dette er energikrevende og farlig, spesielt for unger.

4. **Kortere jaktsesong:** Isen legger seg senere om høsten og forsvinner tidligere om våren. Mindre tid til å jakte og bygge opp fettreserver.

5. **Resultat:** Tynnere bjørner, lavere ungeproduksjon, økt dødelighet. Arten er klassifisert som sårbar.`,
    },
    {
      id: 'nat-vg1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar med egne ord hvordan drivhuseffekten virker.',
        solution: 'Sola sender ut kortbølget stråling som passerer gjennom atmosfæren og varmer opp jordoverflaten. Jorden sender ut langbølget varmestråling, men drivhusgasser i atmosfæren absorberer deler av denne strålingen og sender den tilbake mot jorda. Dermed blir jorden varmere enn den ellers ville vært.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre konsekvenser klimaendringer kan ha for biologisk mangfold i Norge.',
        solution: 'Mulige svar: 1) Arter som villrein og fjellrev kan miste leveområder når skoggrensen kryper oppover. 2) Sørlige arter som hjort og villsvin sprer seg nordover. 3) Fremmede arter som harlekinmarihøne kan etablere seg og utkonkurrere norske arter. 4) Ørret kan tape konkurransen mot karpe i varmere vann. 5) Laks kan få problemer med for varmt vann i elvene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'CO₂-konsentrasjonen i atmosfæren har økt fra 280 ppm til 420 ppm. Beregn den prosentvise økningen.',
        solution: 'Økning = 420 - 280 = 140 ppm. Prosentvis økning = (140/280) × 100% = 50%. CO₂-konsentrasjonen har økt med 50% siden førindustriell tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_5_4: TextbookChapter = {
  id: 'nat-vg1-5-4',
  courseId: 'nat-vg1',
  chapterNumber: '5.4',
  title: 'Tiltak for miljø og helse',
  description: 'Vurder tiltak for å beskytte helse og miljø mot forurensning.',
  estimatedMinutes: 45,
  competenceGoals: ['vurdere tiltak for å ta vare på helse og miljø'],
  content: [
    {
      id: 'nat-vg1-5-4-intro',
      type: 'text',
      content: `## Hvordan kan vi beskytte miljøet?

Miljøproblemer løses best gjennom en kombinasjon av tiltak på ulike nivåer:

**Internasjonalt nivå:**
- Internasjonale avtaler (Parisavtalen, Montrealprotokollen)
- FNs bærekraftsmål
- EU-regelverk

**Nasjonalt nivå:**
- Lover og forskrifter
- Avgifter og insentiver
- Miljøovervåking

**Lokalt nivå:**
- Avfallshåndtering
- Naturvern
- Arealplanlegging

**Individuelt nivå:**
- Forbruksvalg
- Transport
- Energibruk`,
    },
    {
      id: 'nat-vg1-5-4-def-1',
      type: 'definition',
      title: 'Klimatiltak',
      content: `**Redusere utslipp:**
- Overgang til fornybar energi (sol, vind, vann)
- Elektrifisering av transport
- Energieffektivisering i bygg og industri
- Redusert forbruk

**Fange og lagre CO₂:**
- Karbonfangst fra industri
- Lagring under havbunnen
- Skogplanting (biologisk opptak)

**Tilpasning:**
- Flomsikring
- Klimatilpasset bygging
- Endret arealbruk`,
    },
    {
      id: 'nat-vg1-5-4-def-2',
      type: 'definition',
      title: 'Sirkulær økonomi',
      content: `**Lineær økonomi (gammel modell):**
Ta ut råvarer → Produser → Bruk → Kast

**Sirkulær økonomi (ny modell):**
Råvarer → Produser → Bruk → Reparer/Gjenbruk → Resirkuler → tilbake til produksjon

**Avfallshierarkiet:**
1. Forebygge (redusere forbruk)
2. Ombruk (bruke på nytt)
3. Materialgjenvinning (resirkulering)
4. Energigjenvinning (forbrenning)
5. Deponi (siste utvei)`,
    },
    {
      id: 'nat-vg1-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Montrealprotokollen - en suksesshistorie',
      problem: 'Forklar hvordan Montrealprotokollen har bidratt til å løse ozonproblemet.',
      solution: `**Bakgrunn:**
På 1980-tallet oppdaget forskere at ozonlaget ble tynnere, spesielt over Antarktis. KFK-gasser (klorfluorkarboner) fra kjøleskap, spraybokser og isolasjonsmaterialer brøt ned ozon.

**Montrealprotokollen (1987):**
- Internasjonal avtale om å fase ut ozonreduserende stoffer
- Nesten alle verdens land har sluttet seg til
- KFK-gasser ble forbudt og erstattet med mindre skadelige alternativer

**Resultat:**
- Utslippene av ozonreduserende stoffer er redusert med over 99%
- Ozonlaget viser tegn til helbredelse
- Forventet full gjenoppretting rundt 2066

**Lærdommer for klimaarbeidet:**
- Internasjonalt samarbeid virker
- Vitenskap må ligge til grunn
- Erstatningsteknologi må være tilgjengelig`,
    },
    {
      id: 'nat-vg1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gi eksempler på miljøtiltak du kan gjøre i hverdagen, og vurder effekten av dem.',
        solution: 'Eksempler: 1) Spise mindre kjøtt (stor effekt, kjøttproduksjon har høye klimagassutslipp). 2) Sykle/gå i stedet for bil (moderat effekt på utslipp, stor på lokalt miljø). 3) Kildesortere (moderat effekt, avhenger av gjenvinningssystemet). 4) Kjøpe brukt (stor effekt, reduserer produksjon av nye varer). 5) Spare strøm (liten effekt i Norge der strømmen er ren, større i land med fossil kraftproduksjon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom klimatiltak og klimatilpasning, og gi eksempler på begge.',
        solution: 'Klimatiltak (mitigering) handler om å redusere utslipp av klimagasser for å begrense oppvarmingen (eks: overgang til elbil, vindkraft, energieffektivisering). Klimatilpasning handler om å tilpasse samfunnet til de klimaendringene som allerede skjer (eks: bygge flomvoller, flytte bebyggelse vekk fra flomutsatte områder, tilpasse landbruket til nye vekstsesonger).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper med karbonavgifter som klimatiltak.',
        solution: 'Fordeler: Gir økonomisk insentiv til å redusere utslipp, inntektene kan brukes til grønn omstilling, markedsbasert løsning som ikke krever detaljregulering. Ulemper: Kan ramme lavinntektsgrupper uforholdsmessig hardt, kan føre til karbonlekkasje (at produksjon flyttes til land uten avgift), kan møte politisk motstand, vanskelig å sette riktig prisnivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SEKSJON 6: Helse og livsstil
// ============================================================================

export const CHAPTER_NAT_VG1_6_1: TextbookChapter = {
  id: 'nat-vg1-6-1',
  courseId: 'nat-vg1',
  chapterNumber: '6.1',
  title: 'Næringsstoffer',
  description: 'Lær om de ulike næringsstoffene og deres funksjoner i kroppen.',
  estimatedMinutes: 55,
  competenceGoals: ['gjøre rede for funksjonene til noen næringsstoffer'],
  content: [
    {
      id: 'nat-vg1-6-1-intro',
      type: 'text',
      content: `## Hva trenger kroppen?

For at kroppen skal fungere optimalt, trenger den ulike **næringsstoffer** fra maten vi spiser.

**Makronæringsstoffer** (trengs i store mengder):
- Karbohydrater
- Proteiner (eggehvitestoffer)
- Fett (lipider)

**Mikronæringsstoffer** (trengs i små mengder):
- Vitaminer
- Mineraler

I tillegg trenger kroppen **vann** og **fiber**.`,
    },
    {
      id: 'nat-vg1-6-1-def-1',
      type: 'definition',
      title: 'Karbohydrater',
      content: `**Funksjon:** Kroppens viktigste energikilde

**Typer:**
- **Monosakkarider:** Glukose, fruktose (enkle sukkerarter)
- **Disakkarider:** Sukrose (bordsukker), laktose (melkesukker)
- **Polysakkarider:** Stivelse (i poteter, brød), fiber

**Energiinnhold:** 17 kJ/g (4 kcal/g)

**Anbefaling:** 45-60% av energiinntaket, helst fra fullkorn og grønnsaker

**Fiber:** Ufordøyelige karbohydrater som fremmer tarmhelse og gir metthetsfølelse`,
    },
    {
      id: 'nat-vg1-6-1-def-2',
      type: 'definition',
      title: 'Proteiner',
      content: `**Funksjon:**
- Byggemateriale for muskler, enzymer, hormoner, antistoffer
- Kan brukes som energikilde ved behov

**Oppbygning:** Lange kjeder av aminosyrer. 20 ulike aminosyrer, hvorav 8-9 er essensielle (må tilføres via mat).

**Energiinnhold:** 17 kJ/g (4 kcal/g)

**Kilder:**
- Animalske: Kjøtt, fisk, egg, melk
- Vegetabilske: Belgfrukter, nøtter, soya, quinoa

**Anbefaling:** 10-20% av energiinntaket`,
    },
    {
      id: 'nat-vg1-6-1-def-3',
      type: 'definition',
      title: 'Fett',
      content: `**Funksjoner:**
- Energireserve og isolasjon
- Opptak av fettløselige vitaminer (A, D, E, K)
- Byggemateriale for cellemembraner
- Kilde til essensielle fettsyrer

**Typer:**
- **Mettet fett:** Fast ved romtemperatur (smør, kjøttfett) - bør begrenses
- **Umettet fett:** Flytende ved romtemperatur (oljer, nøtter, fisk) - anbefales

**Energiinnhold:** 37 kJ/g (9 kcal/g) - dobbelt så mye som karbohydrat/protein

**Anbefaling:** 25-40% av energiinntaket, hovedsakelig umettet fett`,
    },
    {
      id: 'nat-vg1-6-1-def-4',
      type: 'definition',
      title: 'Vitaminer og mineraler',
      content: `**Vitaminer:**
- Organiske stoffer kroppen trenger i små mengder
- A, D, E, K (fettløselige) og B-vitaminer, C (vannløselige)
- Funksjoner: Syn, benhelse, immunforsvar, energiomsetning m.m.

**Mineraler:**
- Uorganiske stoffer
- Eksempler: Kalsium (benhelse), jern (oksygentransport), natrium (væskebalanse)

**Mangelsykdommer:**
- C-vitaminmangel: Skjørbuk
- D-vitaminmangel: Rakitt (bløte bein)
- Jernmangel: Anemi (blodmangel)`,
    },
    {
      id: 'nat-vg1-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av energiinntak',
      problem: 'En matrett inneholder 30 g karbohydrater, 20 g protein og 10 g fett. Beregn det totale energiinnholdet i kJ.',
      solution: `**Løsning:**

Bruker energiinnholdet per gram for hvert næringsstoff:

**Karbohydrater:** 30 g × 17 kJ/g = 510 kJ
**Protein:** 20 g × 17 kJ/g = 340 kJ
**Fett:** 10 g × 37 kJ/g = 370 kJ

**Totalt:** 510 + 340 + 370 = **1220 kJ**

(Tilsvarer ca. 290 kcal)`,
    },
    {
      id: 'nat-vg1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor proteiner er viktige for kroppen.',
        solution: 'Proteiner er byggematerialet for kroppen. De brukes til å bygge opp og reparere muskler og annet vev. I tillegg er enzymer (som styrer kjemiske reaksjoner), mange hormoner, antistoffer og transportproteiner (som hemoglobin) laget av proteiner. Ved behov kan proteiner også brukes som energikilde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom mettet og umettet fett, og gi eksempler på matvarer som inneholder dem.',
        solution: 'Mettet fett har ingen dobbeltbindinger mellom karbonatomene og er fast ved romtemperatur. Finnes i smør, ost, kjøttfett. Umettet fett har én eller flere dobbeltbindinger og er flytende ved romtemperatur. Finnes i olivenolje, raps olje, nøtter, avokado, fet fisk. Umettet fett regnes som sunnere enn mettet fett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'En banan inneholder ca. 23 g karbohydrater, 1 g protein og 0,3 g fett. Beregn energiinnholdet.',
        solution: 'Karbohydrater: 23 g × 17 kJ/g = 391 kJ. Protein: 1 g × 17 kJ/g = 17 kJ. Fett: 0,3 g × 37 kJ/g = 11 kJ. Totalt: 391 + 17 + 11 = 419 kJ (ca. 100 kcal).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_6_2: TextbookChapter = {
  id: 'nat-vg1-6-2',
  courseId: 'nat-vg1',
  chapterNumber: '6.2',
  title: 'Kosthold og bærekraft',
  description: 'Forstå sammenhengen mellom kosthold, helse og miljø.',
  estimatedMinutes: 50,
  competenceGoals: ['diskutere hvorfor et variert kosthold er viktig i et helse- og bærekraftsperspektiv'],
  content: [
    {
      id: 'nat-vg1-6-2-intro',
      type: 'text',
      content: `## Variert kosthold

Et **variert kosthold** sikrer at kroppen får alle næringsstoffene den trenger.

**Helsedirektoratets kostråd:**
1. Ha et variert kosthold med mye grønnsaker, frukt og bær
2. Spis grove kornprodukter hver dag
3. Spis fisk 2-3 ganger i uken
4. Velg magre meieriprodukter
5. Velg magert kjøtt og begrens mengden bearbeidet kjøtt
6. Velg matoljer og myk margarin
7. Begrens sukker, salt og alkohol
8. Drikk vann

**Tallerkenmodellen:** 1/3 grønnsaker, 1/3 karbohydrater, 1/3 protein`,
    },
    {
      id: 'nat-vg1-6-2-def-1',
      type: 'definition',
      title: 'Matens klimaavtrykk',
      content: `Matproduksjon står for ca. 25% av globale klimagassutslipp.

**Høyt klimaavtrykk:**
- Storfekjøtt og lam (metan fra drøvtyggere)
- Ris (metan fra oversvømte rismarker)
- Mat fraktet med fly

**Lavt klimaavtrykk:**
- Grønnsaker, frukt, belgfrukter
- Korn
- Lokalprodusert sesongvare

**kg CO₂-ekvivalenter per kg mat:**
- Storfekjøtt: 25-50
- Svin: 5-8
- Kylling: 3-5
- Belgfrukter: 0,5-1
- Grønnsaker: 0,2-0,5`,
    },
    {
      id: 'nat-vg1-6-2-def-2',
      type: 'definition',
      title: 'Bærekraftig kosthold',
      content: `Et bærekraftig kosthold tar hensyn til både helse og miljø:

**Prinsipper:**
- Mer plantekost, mindre kjøtt (spesielt rødt kjøtt)
- Sesongvarer og lokalprodusert mat
- Redusere matsvinn
- Velge bærekraftig sjømat (MSC/ASC-merket)
- Økologisk der det er mulig

**EAT-Lancet-dietten:**
Forskeranbefaling for et kosthold som er sunt for mennesker og bærekraftig for planeten. Anbefaler å halvere forbruket av rødt kjøtt og sukker, og doble inntaket av grønnsaker, frukt, belgfrukter og nøtter.`,
    },
    {
      id: 'nat-vg1-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av middager',
      problem: 'Sammenlign klimaavtrykket til en kjøttmiddag og en vegetarmiddag.',
      solution: `**Kjøttmiddag:** Biff (150 g), potet, saus, salat
- Biff: 0,15 kg × 30 kg CO₂/kg = 4,5 kg CO₂
- Potet: 0,2 kg × 0,1 kg CO₂/kg = 0,02 kg CO₂
- Fløtesaus: 0,1 kg × 3 kg CO₂/kg = 0,3 kg CO₂
- Salat: 0,1 kg × 0,2 kg CO₂/kg = 0,02 kg CO₂
- **Totalt: ca. 4,8 kg CO₂-ekvivalenter**

**Vegetarmiddag:** Linsesuppe med brød
- Linser: 0,1 kg × 0,8 kg CO₂/kg = 0,08 kg CO₂
- Grønnsaker: 0,3 kg × 0,3 kg CO₂/kg = 0,09 kg CO₂
- Brød: 0,1 kg × 0,8 kg CO₂/kg = 0,08 kg CO₂
- **Totalt: ca. 0,25 kg CO₂-ekvivalenter**

**Konklusjon:** Kjøttmiddagen har nesten 20 ganger høyere klimaavtrykk.`,
    },
    {
      id: 'nat-vg1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor et variert kosthold er viktig for helsen.',
        solution: 'Et variert kosthold sikrer at vi får alle de essensielle næringsstoffene kroppen trenger. Ulike matvarer inneholder ulike vitaminer, mineraler, proteiner og fettsyrer. Ved å spise variert unngår vi mangeltilstander og får i oss beskyttende stoffer som antioksidanter. Variasjon reduserer også risikoen for å få for mye av skadelige stoffer som kan finnes i enkelte matvarer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi tre eksempler på hvordan du kan gjøre kostholdet ditt mer bærekraftig.',
        solution: 'Eksempler: 1) Redusere forbruket av rødt kjøtt og velge kylling, fisk eller belgfrukter i stedet. 2) Spise mer sesongvarer og lokalprodusert mat i stedet for importerte varer fraktet med fly. 3) Redusere matsvinn ved å planlegge innkjøp, bruke restemat og forstå datomerking. 4) Velge økologiske produkter. 5) Spise mer grønnsaker og mindre bearbeidet mat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter om det er mulig å kombinere et sunt kosthold med et klimavennlig kosthold.',
        solution: 'Ja, et sunt og klimavennlig kosthold er i stor grad forenlig. Helsemyndighetene anbefaler allerede mer grønnsaker, frukt, belgfrukter og fisk - som alle har lavt klimaavtrykk. Å redusere inntaket av rødt og bearbeidet kjøtt er bra for både helse og klima. Sukkerholdige produkter har ofte høyere klimaavtrykk enn nødvendig. Imidlertid kan det være noen spenninger: fet fisk er sunt men kan ha høyere avtrykk, og økologisk produksjon kan ha lavere avlinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_6_3: TextbookChapter = {
  id: 'nat-vg1-6-3',
  courseId: 'nat-vg1',
  chapterNumber: '6.3',
  title: 'Livsstil og helse',
  description: 'Drøft sammenhengen mellom livsstil, helse og sykdom.',
  estimatedMinutes: 50,
  competenceGoals: ['drøfte aktuelle helse- og livsstilsspørsmål'],
  content: [
    {
      id: 'nat-vg1-6-3-intro',
      type: 'text',
      content: `## Livsstilsfaktorer og helse

**Livsstilssykdommer** er sykdommer som i stor grad påvirkes av hvordan vi lever:

**Viktige livsstilsfaktorer:**
- Kosthold
- Fysisk aktivitet
- Søvn
- Stress
- Rusmidler (alkohol, tobakk)
- Sosiale relasjoner

**Vanlige livsstilssykdommer:**
- Hjerte- og karsykdommer
- Type 2-diabetes
- Fedme
- Noen typer kreft
- Psykiske lidelser`,
    },
    {
      id: 'nat-vg1-6-3-def-1',
      type: 'definition',
      title: 'Fysisk aktivitet',
      content: `**Anbefalinger for ungdom (13-17 år):**
- Minst 60 minutter moderat til høy intensitet daglig
- Aktiviteter som styrker muskler og skjelett minst 3 dager i uken
- Redusere stillesitting

**Helseeffekter av fysisk aktivitet:**
- Styrker hjerte og lunger
- Bygger muskler og styrker skjelettet
- Reduserer risiko for fedme, diabetes, hjertesykdom
- Bedrer psykisk helse (reduserer angst og depresjon)
- Forbedrer søvn, konsentrasjon og læring

**Risiko ved fysisk inaktivitet:**
- Økt risiko for livsstilssykdommer
- Svekket muskelstyrke
- Redusert benhelse`,
    },
    {
      id: 'nat-vg1-6-3-def-2',
      type: 'definition',
      title: 'Søvn',
      content: `**Anbefalinger:**
- Ungdom 13-18 år: 8-10 timer per natt
- Voksne: 7-9 timer per natt

**Hvorfor søvn er viktig:**
- Hjernen rydder opp og lagrer minner
- Kroppen reparerer og bygger vev
- Immunforsvaret styrkes
- Hormonbalanse reguleres (veksthormoner utskilles)

**Konsekvenser av søvnmangel:**
- Svekket konsentrasjon og hukommelse
- Dårligere immunforsvar
- Økt risiko for fedme og diabetes
- Psykiske problemer (irritabilitet, angst)
- Nedsatt reaksjonsevne`,
    },
    {
      id: 'nat-vg1-6-3-def-3',
      type: 'definition',
      title: 'Stress',
      content: `**Stress** er kroppens reaksjon på utfordringer og krav.

**Kortvarig (akutt) stress:**
- Naturlig og kan være nyttig
- Øker oppmerksomhet og ytelse
- "Fight or flight"-respons

**Langvarig (kronisk) stress:**
- Skadelig for helsen
- Øker risiko for hjertesykdom, depresjon, søvnproblemer
- Svekker immunforsvaret

**Stressmestring:**
- Fysisk aktivitet
- God søvn
- Sosial støtte
- Avslapningsteknikker
- Tidsstyring og prioritering`,
    },
    {
      id: 'nat-vg1-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Sammenhengen mellom livsstil og type 2-diabetes',
      problem: 'Forklar hvordan livsstilsfaktorer kan føre til type 2-diabetes.',
      solution: `**Type 2-diabetes:**
Kroppen produserer insulin, men cellene reagerer ikke godt nok på det (insulinresistens). Blodsukker forblir høyt.

**Livsstilsfaktorer som øker risikoen:**

1. **Overvekt:** Fettvev, spesielt rundt magen, fører til økt insulinresistens.

2. **Fysisk inaktivitet:** Muskler bruker blodsukker. Mindre aktivitet = mindre sukkerforbruk = høyere blodsukker.

3. **Kosthold:** Mye sukker og raffinert karbohydrat gir store blodsukkerstigninger. Over tid sliter dette ut systemet.

4. **Søvnmangel:** Påvirker hormonbalansen og øker insulinresistens.

**Forebygging:**
- Sunn vekt
- Regelmessig fysisk aktivitet
- Balansert kosthold med fiber og fullkorn
- Tilstrekkelig søvn`,
    },
    {
      id: 'nat-vg1-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan fysisk aktivitet påvirker helsen positivt.',
        solution: 'Fysisk aktivitet styrker hjerte og kretsløp, forbedrer lungekapasiteten, bygger muskler og styrker skjelettet. Det hjelper å holde normal vekt, reduserer risikoen for type 2-diabetes og hjertesykdom, og bedrer psykisk helse ved å redusere stress, angst og depresjon. I tillegg forbedrer det søvnkvalitet, konsentrasjon og læring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er kronisk stress skadelig for helsen? Nevn minst tre helsekonsekvenser.',
        solution: 'Kronisk stress holder kroppen i konstant beredskap, noe som sliter på systemene. Konsekvenser: 1) Økt risiko for hjerte- og karsykdommer (høyt blodtrykk, betennelse). 2) Svekket immunforsvar (mer sårbar for infeksjoner). 3) Psykiske problemer (angst, depresjon, utbrenthet). 4) Søvnproblemer. 5) Fordøyelsesproblemer. 6) Muskelspenninger og hodepine.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter hvorfor mange ungdommer ikke får nok søvn, og hva som kan gjøres for å forbedre søvnvanene.',
        solution: 'Årsaker til søvnmangel hos ungdom: Biologisk forskyving av døgnrytmen (naturlig å sovne senere), tidlig skolestart, mye skjermbruk om kvelden (blått lys hemmer melatonin), sosiale medier, lekser og stress, fritidsaktiviteter. Tiltak: Etablere faste legge-rutiner, redusere skjermbruk den siste timen før sengetid, unngå koffein på ettermiddag/kveld, gjøre soverommet mørkt og stille, fysisk aktivitet på dagtid (men ikke rett før sengetid).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_6_4: TextbookChapter = {
  id: 'nat-vg1-6-4',
  courseId: 'nat-vg1',
  chapterNumber: '6.4',
  title: 'Kildekritikk i helsespørsmål',
  description: 'Lær å vurdere påliteligheten i helseinformasjon fra ulike kilder.',
  estimatedMinutes: 45,
  competenceGoals: ['vurdere pålitelighet i informasjon fra ulike kilder'],
  content: [
    {
      id: 'nat-vg1-6-4-intro',
      type: 'text',
      content: `## Helseinformasjon i mediene

Vi møter daglig påstander om helse i sosiale medier, aviser og fra venner. Hvordan vet vi hva vi kan stole på?

**Utfordringer:**
- Feilinformasjon spres raskt
- Overskrifter overdriver ofte
- Kommersielle interesser påvirker
- Enkelthistorier kan være misvisende

**Viktig å huske:**
- Én studie beviser sjelden noe endelig
- Korrelasjon ≠ kausalitet
- Anekdoter er ikke bevis
- "Naturlig" betyr ikke "trygt"`,
    },
    {
      id: 'nat-vg1-6-4-def-1',
      type: 'definition',
      title: 'Hvordan vurdere kilder',
      content: `**TONE-kriteriene:**

**T - Troverdighet:** Hvem står bak informasjonen? Er det en anerkjent institusjon, forsker eller tabloidavis?

**O - Objektivitet:** Er informasjonen balansert, eller prøver noen å selge noe?

**N - Nøyaktighet:** Stemmer faktapåstandene med andre kilder? Er det henvist til forskning?

**E - Egnethet:** Er kilden relevant for det du leter etter?

**Ekstra spørsmål:**
- Når ble informasjonen publisert?
- Finnes det interessekonflikter?`,
    },
    {
      id: 'nat-vg1-6-4-def-2',
      type: 'definition',
      title: 'Vitenskapelig metode vs. pseudovitenskap',
      content: `**Vitenskap:**
- Bygger på systematiske undersøkelser
- Resultatene kan gjentas av andre
- Åpen for kritikk og revisjon
- Publiseres i fagfellevurderte tidsskrifter

**Pseudovitenskap:**
- Fremstår som vitenskap, men mangler vitenskapelig grunnlag
- Kan ikke testes eller motbevises
- Refererer ofte til "hemmelig kunnskap"
- Selger ofte produkter

**Eksempler på pseudovitenskap i helse:**
- Homeopati
- Krystallhealing
- Mange kosttilskudd-påstander`,
    },
    {
      id: 'nat-vg1-6-4-def-3',
      type: 'definition',
      title: 'Pålitelige helsekilder',
      content: `**Offentlige myndigheter:**
- Helsedirektoratet (helsedirektoratet.no)
- Folkehelseinstituttet (fhi.no)
- Helsenorge (helsenorge.no)
- WHO (who.int)

**Fagfellevurderte tidsskrifter:**
- PubMed (database for medisinsk forskning)
- Tidsskrifter som The Lancet, JAMA, BMJ

**Organisasjoner:**
- Kreftforeningen
- Diabetesforbundet
- Landsforeningen for hjerte- og lungesyke

**Varseltegn:**
- Påstander om "mirakelkurer"
- Angrep på etablert medisin
- Salg av produkter
- Manglende kilder`,
    },
    {
      id: 'nat-vg1-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Vurdere en helsepåstand',
      problem: 'Du ser en annonse på Instagram som sier: "Denne teen brenner fett mens du sover! Ned 10 kg på 2 uker - vitenskapelig bevist!" Vurder påliteligheten.',
      solution: `**Varseltegn:**

1. **For godt til å være sant:** 10 kg på 2 uker er urealistisk og potensielt farlig.

2. **Kommersielt formål:** Noen prøver å selge et produkt.

3. **Vage referanser:** "Vitenskapelig bevist" uten konkret kilde.

4. **Sosiale medier:** Lite kvalitetskontroll.

5. **Mirakelkur-retorikk:** Lover enkle løsninger på komplekse problemer.

**Konklusjon:** Svært lav troverdighet. Det finnes ingen dokumentert te som får kroppen til å "brenne fett mens du sover". Vekttap krever kaloriunderskudd over tid. Mange slike produkter er i beste fall virkningsløse, i verste fall skadelige.

**Bedre tilnærming:** Søk informasjon hos Helsedirektoratet om sunt vekttap.`,
    },
    {
      id: 'nat-vg1-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som kjennetegner en pålitelig helsekilde.',
        solution: 'En pålitelig helsekilde: 1) Kommer fra anerkjente institusjoner (myndigheter, universiteter, fagorganisasjoner). 2) Refererer til vitenskapelig forskning. 3) Er balansert og nevner usikkerhet. 4) Har ikke kommersielle interesser. 5) Er oppdatert. 6) Skiller mellom etablert kunnskap og nye funn. 7) Er skrevet av fagpersoner eller kvalitetssikret.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom korrelasjon og kausalitet med et eksempel.',
        solution: 'Korrelasjon betyr at to ting skjer sammen, men ikke nødvendigvis at det ene forårsaker det andre. Kausalitet betyr at det ene faktisk forårsaker det andre. Eksempel: Det er korrelasjon mellom iskremssalg og drukningsulykker (begge øker om sommeren), men iskremspising forårsaker ikke drukning. Fellesfaktoren er varmt vær. I helseforskning er det viktig å skille: "Mennesker som spiser mye fisk har lavere risiko for hjertesykdom" (korrelasjon) er ikke det samme som "Å spise fisk forebygger hjertesykdom" (kausalitet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Du leser en nyhetsartikkel med overskriften "Kaffe forårsaker kreft!" Beskriv hvordan du ville gått fram for å vurdere om dette stemmer.',
        solution: 'Steg: 1) Les hele artikkelen, ikke bare overskriften (ofte overdriver). 2) Finn originalstudien det refereres til - hva viste den egentlig? 3) Sjekk hvem som har gjort studien og om den er fagfellevurdert. 4) Se om andre studier viser det samme. 5) Søk hos pålitelige kilder som Kreftforeningen eller WHO. 6) Vurder om det kan være andre forklaringer (korrelasjon vs. kausalitet). 7) Se på studiedesign - var det mennesker eller mus? Hvor stor var effekten? I dette tilfellet: WHO har klassifisert kaffe som ikke kreftfremkallende, og mange studier viser at moderat kaffeforbruk kan ha helsegevinster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Export av alle kapitler i DEL 3
// ============================================================================

export const NAT_VG1_CHAPTERS_DEL3: TextbookChapter[] = [
  // Seksjon 5: Miljø og bærekraft
  CHAPTER_NAT_VG1_5_1,
  CHAPTER_NAT_VG1_5_2,
  CHAPTER_NAT_VG1_5_3,
  CHAPTER_NAT_VG1_5_4,
  // Seksjon 6: Helse og livsstil
  CHAPTER_NAT_VG1_6_1,
  CHAPTER_NAT_VG1_6_2,
  CHAPTER_NAT_VG1_6_3,
  CHAPTER_NAT_VG1_6_4,
];
