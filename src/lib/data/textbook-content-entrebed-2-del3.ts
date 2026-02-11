/* eslint-disable */
// @ts-nocheck
/**
 * Entreprenørskap og bedriftsutvikling 2 (VG3) - Del 3: Finansiering og investering
 * Kapittel 3.1-3.5
 *
 * Dekker LK20 kompetansemål:
 * - gjøre rede for ulike finansieringsformer og vurdere hvilke som passer for ulike typer virksomheter
 * - analysere og vurdere lønnsomheten av en investering
 * - presentere en forretningsidé for potensielle investorer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Finansieringskilder
// ============================================================================

export const CHAPTER_ENTREBED_2_3_1: TextbookChapter = {
  id: 'entrebed-2-3-1',
  courseId: 'entrebed-2',
  chapterNumber: '3.1',
  title: 'Finansieringskilder',
  description: 'Lær om de viktigste finansieringskildene for oppstartsbedrifter og etablerte virksomheter: egenkapital, banklån og offentlige tilskudd.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike finansieringsformer og vurdere hvilke som passer for ulike typer virksomheter',
  ],
  content: [
    {
      id: 'eb2-3-1-intro',
      type: 'text',
      content: `## Finansieringskilder

Enhver bedrift trenger kapital for å starte opp, vokse og drive videre. Valget av **finansieringskilde** påvirker alt fra eierskap og kontroll til risiko og fleksibilitet. Å forstå de ulike finansieringsalternativene er avgjørende for enhver gründer og bedriftsleder.

I dette kapittelet skal du lære:
- Forskjellen mellom egenkapital og fremmedkapital
- Hvordan banklån fungerer og hva som kreves for å få lån
- Hvilke offentlige tilskudd og støtteordninger som finnes for gründere
- Hvordan du velger riktig finansieringsform for din bedrift`,
    },
    {
      id: 'eb2-3-1-def-1',
      type: 'definition',
      title: 'Egenkapital og fremmedkapital',
      content: `**Egenkapital** er midler som eierne selv skyter inn i bedriften. Dette kan være penger, utstyr eller annen formue. Egenkapitalen representerer eiernes andel av bedriftens verdier.

**Fremmedkapital** er midler som bedriften låner fra andre, for eksempel banker, investorer eller leverandører. Fremmedkapital må betales tilbake, vanligvis med renter.

**Grunnregelen:** Jo mer egenkapital bedriften har, desto sterkere står den økonomisk. Banker og investorer foretrekker bedrifter med solid egenkapitalandel, fordi det viser at eierne har «skin in the game».`,
    },
    {
      id: 'eb2-3-1-text-1',
      type: 'text',
      content: `### Egenkapitalfinansiering

Egenkapital kan skaffes på flere måter:

**1. Egne sparepenger**
Den enkleste formen. Du bruker egne oppsparte midler til å finansiere oppstarten. Fordelen er at du beholder full kontroll, men risikoen er personlig.

**2. Familie og venner**
Mange gründere starter med å låne fra eller ta inn kapital fra nærstående. Dette kan være en rask og uformell kilde, men det kan skape konflikter dersom bedriften ikke lykkes. Det er viktig å formalisere avtaler skriftlig.

**3. Nye aksjonærer/medeiere**
Du kan selge eierandeler i bedriften til eksterne investorer. Dette gir kapital uten gjeld, men du gir fra deg en del av eierskapet og kontrollen.

| Kilde | Fordeler | Ulemper |
|-------|----------|---------|
| Egne midler | Full kontroll, ingen renter | Personlig risiko, begrenset beløp |
| Familie/venner | Raskt, fleksibelt | Kan skade relasjoner |
| Nye aksjonærer | Større beløp, ingen tilbakebetaling | Delt eierskap og kontroll |`,
    },
    {
      id: 'eb2-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Egenkapitalfinansiering i praksis',
      problem: 'Maria vil starte en nettbutikk for bærekraftig klær. Hun trenger 300 000 kr i oppstartskapital. Hvordan kan hun sette sammen egenkapitalfinansieringen?',
      solution: `**Marias finansieringsplan (egenkapital):**

- **Egne sparepenger:** 100 000 kr — Maria har spart opp dette over flere år
- **Lån fra foreldre:** 50 000 kr — Avtale om tilbakebetaling over 3 år, rentefritt
- **Medgründer:** 150 000 kr — Marias venninne Sofie investerer og får 30 % eierandel

**Totalt:** 300 000 kr i egenkapital

Maria beholder 70 % eierskap og full kontroll over daglig drift, mens Sofie får 30 % eierandel og plass i styret. Avtalen formaliseres i en aksjonæravtale.

**Fordel:** Maria starter gjeldsfri og har ingen rente- eller avdragskostnader fra dag én. Dette gir større økonomisk handlingsrom i oppstartsfasen.`,
    },
    {
      id: 'eb2-3-1-def-2',
      type: 'definition',
      title: 'Banklån',
      content: `Et **banklån** er en avtale der banken låner ut penger til bedriften mot at bedriften betaler tilbake beløpet med **renter** over en avtalt periode.

Viktige begreper:
- **Nominell rente:** Den oppgitte rentesatsen på lånet
- **Effektiv rente:** Den reelle kostnaden inkludert gebyrer og avgifter
- **Sikkerhet/pant:** Eiendeler som banken kan beslaglegge dersom lånet ikke betales
- **Avdrag:** Jevnlige tilbakebetalinger av selve lånebeløpet
- **Nedbetalingstid:** Perioden lånet skal betales tilbake over

Banker stiller vanligvis krav om **egenkapitalandel** (ofte minst 20-30 %), en solid **forretningsplan**, og gjerne **personlig sikkerhet** fra gründeren.`,
    },
    {
      id: 'eb2-3-1-text-2',
      type: 'text',
      content: `### Offentlige tilskudd og støtteordninger

Norge har en rekke offentlige ordninger som støtter gründere og innovasjon. De viktigste er:

**Innovasjon Norge**
Tilbyr tilskudd, lån og rådgivning til bedrifter med vekstpotensial. Typiske ordninger:
- **Oppstartsstipend:** Inntil 100 000 kr for å utvikle en forretningsidé
- **Markedsavklaringstilskudd:** Støtte til å teste om det finnes et marked for produktet
- **Kommersialiseringstilskudd:** Støtte til å bringe et produkt til markedet
- **Innovasjonslån:** Lån til innovative prosjekter med høyere risiko enn bankene aksepterer

**Forskningsrådet**
Støtter forsknings- og utviklingsprosjekter (FoU) i bedrifter. Relevant for teknologibedrifter og forskningsdrevne innovasjoner.

**SkatteFUNN**
En skattefradragsordning der bedrifter kan få inntil 19 % skattefradrag for FoU-kostnader. Gjelder for bedrifter med godkjente FoU-prosjekter.

**Regionale fond og kommunale næringsfond**
Lokale støtteordninger som varierer fra kommune til kommune. Kan gi tilskudd til bedrifter som bidrar til lokal verdiskaping og sysselsetting.`,
    },
    {
      id: 'eb2-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Kombinert finansiering',
      problem: 'Tech-gründeren Jonas trenger 1 000 000 kr for å utvikle en app. Hvordan kan han sette sammen en finansieringsplan med ulike kilder?',
      solution: `**Jonas sin finansieringsplan:**

| Kilde | Beløp | Andel | Type |
|-------|-------|-------|------|
| Egne midler | 200 000 kr | 20 % | Egenkapital |
| Innovasjon Norge (tilskudd) | 300 000 kr | 30 % | Tilskudd (trenger ikke tilbakebetales) |
| Banklån | 300 000 kr | 30 % | Fremmedkapital |
| Engleinvestor | 200 000 kr | 20 % | Egenkapital (gir 15 % eierandel) |
| **Totalt** | **1 000 000 kr** | **100 %** | |

**Hvorfor denne kombinasjonen fungerer:**
- 40 % egenkapital (egne midler + investor) gir solid grunnlag
- Tilskuddet fra Innovasjon Norge er «gratis penger» som ikke krever tilbakebetaling
- Banklånet dekker resten, og banken er villig til å låne fordi egenkapitalandelen er høy
- Jonas beholder 85 % eierskap og har kontroll over bedriften`,
    },
    {
      id: 'eb2-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom egenkapital og fremmedkapital?',
        options: [
          { id: 'a', text: 'Egenkapital er alltid billigere enn fremmedkapital', isCorrect: false },
          { id: 'b', text: 'Egenkapital er eiernes egne midler, mens fremmedkapital er lånte midler som må betales tilbake', isCorrect: true },
          { id: 'c', text: 'Fremmedkapital gir alltid bedre avkastning enn egenkapital', isCorrect: false },
          { id: 'd', text: 'Egenkapital krever alltid sikkerhet, mens fremmedkapital ikke gjør det', isCorrect: false },
        ],
        solution: 'Egenkapital er midler eierne selv har skutt inn i bedriften og representerer eiernes andel av verdiene. Fremmedkapital er lånte midler fra banker, investorer eller andre, som må betales tilbake med renter. Egenkapital innebærer delt eierskap, mens fremmedkapital innebærer gjeld.',
      },
    },
    {
      id: 'eb2-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        task: 'Hva er SkatteFUNN?',
        options: [
          { id: 'a', text: 'Et lån fra Innovasjon Norge til oppstartsbedrifter', isCorrect: false },
          { id: 'b', text: 'En forsikringsordning for gründere som mislykkes', isCorrect: false },
          { id: 'c', text: 'En skattefradragsordning der bedrifter kan få fradrag for FoU-kostnader', isCorrect: true },
          { id: 'd', text: 'Et kommunalt tilskudd for bedrifter i distriktene', isCorrect: false },
        ],
        solution: 'SkatteFUNN er en skattefradragsordning der bedrifter med godkjente forsknings- og utviklingsprosjekter (FoU) kan få inntil 19 % skattefradrag for sine FoU-kostnader. Ordningen administreres av Forskningsrådet og Skatteetaten.',
      },
    },
    {
      id: 'eb2-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        task: 'Forklar hva en bank typisk krever for å gi et lån til en oppstartsbedrift. Hvorfor stiller banken disse kravene?',
        hints: ['Tenk på risiko sett fra bankens perspektiv', 'Hva gir banken trygghet for at pengene kommer tilbake?'],
        solution: 'En bank krever vanligvis: (1) En solid forretningsplan som viser at bedriften kan bli lønnsom. (2) Egenkapitalandel på minst 20-30 %, som viser at gründeren selv har investert og tror på ideen. (3) Sikkerhet/pant i eiendeler (bolig, utstyr, varelager) som banken kan beslaglegge dersom lånet misligholdes. (4) Personlig garanti fra gründeren. Banken stiller disse kravene for å redusere sin risiko — de vil forsikre seg om at pengene kan tilbakebetales selv om bedriften ikke lykkes som planlagt.',
      },
    },
    {
      id: 'eb2-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        task: 'Gi tre eksempler på offentlige støtteordninger for gründere i Norge, og forklar kort hva hver av dem tilbyr.',
        hints: ['Tenk på Innovasjon Norge, Forskningsrådet og skatteordninger'],
        solution: '(1) Innovasjon Norges oppstartsstipend — gir inntil 100 000 kr til gründere for å utvikle en forretningsidé, uten krav om tilbakebetaling. (2) Forskningsrådet — gir tilskudd til bedrifter som driver forsknings- og utviklingsprosjekter, spesielt innen teknologi og innovasjon. (3) SkatteFUNN — en skattefradragsordning der bedrifter kan få inntil 19 % skattefradrag for godkjente FoU-kostnader, noe som reduserer den reelle kostnaden ved forskning og utvikling.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'eb2-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-1-ex-5',
        number: '3.1.5',
        type: 'classic',
        task: 'Du skal starte en bedrift som trenger 500 000 kr i oppstartskapital. Sett opp en finansieringsplan som kombinerer minst tre ulike finansieringskilder. Begrunn valgene dine og forklar fordeler og ulemper ved planen.',
        hints: ['Tenk på balansen mellom egenkapital og gjeld', 'Vurder om det finnes offentlige tilskudd som passer'],
        solution: 'Eksempel på finansieringsplan: (1) Egne sparepenger: 100 000 kr (20 %) — gir meg «skin in the game» og viser banker/investorer at jeg tror på ideen. (2) Tilskudd fra Innovasjon Norge: 150 000 kr (30 %) — gratis kapital som ikke krever tilbakebetaling eller eierandel. (3) Banklån: 250 000 kr (50 %) — gir resten av kapitalen mot renter og avdrag. Fordeler: Jeg beholder fullt eierskap (ingen eksterne investorer), og tilskuddet reduserer gjeldsbyrden. Ulemper: Banklånet krever sikkerhet og medfører månedlige kostnader for renter og avdrag. Egenkapitalandelen er relativt lav (20 %), men tilskuddet styrker den totale soliditeten.',
      },
    },
    {
      id: 'eb2-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper ved å ta inn en medgründer med kapital kontra å ta opp et banklån. Hvilken løsning ville du valgt, og hvorfor?',
        hints: ['Tenk på eierskap, kontroll, risiko og kostnader', 'Hva skjer dersom bedriften går dårlig i hvert tilfelle?'],
        solution: 'Medgründer med kapital: Fordeler — ingen gjeld, ingen renter, delt risiko, kan tilføre kompetanse og nettverk. Ulemper — delt eierskap og kontroll, potensielle uenigheter om retning, vanskeligere å avslutte samarbeidet. Banklån: Fordeler — beholder fullt eierskap og kontroll, klar avtale om tilbakebetaling. Ulemper — renter og avdrag belaster likviditeten, personlig risiko ved sikkerhet/garanti, banken kan kreve innfrielse ved mislighold. Valg avhenger av situasjonen: Dersom bedriften trenger kompetanse i tillegg til kapital, er en medgründer ofte best. Dersom gründeren har all nødvendig kompetanse og ønsker full kontroll, kan banklån være å foretrekke.',
      },
    },
    {
      id: 'eb2-3-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Egenkapital** er eiernes egne midler, mens **fremmedkapital** er lånte midler
- Egenkapital kan komme fra egne sparepenger, familie/venner eller nye aksjonærer
- **Banklån** krever vanligvis egenkapitalandel, forretningsplan og sikkerhet
- Norge har gode **offentlige støtteordninger** som Innovasjon Norge, Forskningsrådet og SkatteFUNN
- En god finansieringsplan kombinerer gjerne flere ulike kilder

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Egenkapital | Eiernes egne midler i bedriften |
| Fremmedkapital | Lånte midler som må betales tilbake |
| Banklån | Lån fra bank med renter og avdrag |
| Sikkerhet/pant | Eiendeler banken kan beslaglegge ved mislighold |
| SkatteFUNN | Skattefradragsordning for FoU-kostnader |
| Innovasjon Norge | Statlig organ som gir tilskudd og lån til gründere |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.2: Venture capital og engleinvestorer
// ============================================================================

export const CHAPTER_ENTREBED_2_3_2: TextbookChapter = {
  id: 'entrebed-2-3-2',
  courseId: 'entrebed-2',
  chapterNumber: '3.2',
  title: 'Venture capital og engleinvestorer',
  description: 'Lær om risikokapital, hvordan venture capital-fond og engleinvestorer opererer, og hva som kjennetegner ulike investeringsrunder.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike finansieringsformer og vurdere hvilke som passer for ulike typer virksomheter',
  ],
  content: [
    {
      id: 'eb2-3-2-intro',
      type: 'text',
      content: `## Venture capital og engleinvestorer

Når gründere har ambisjoner om rask vekst, er tradisjonelle banklån sjelden tilstrekkelig. Banker er forsiktige og krever sikkerhet — noe oppstartsbedrifter ofte mangler. Da kan **risikokapital** være løsningen: investorer som er villige til å satse på bedrifter med høy risiko, mot muligheten for høy avkastning.

I dette kapittelet skal du lære:
- Hva risikokapital er og hvorfor det er viktig for vekstbedrifter
- Forskjellen mellom engleinvestorer og venture capital-fond
- Hvordan investeringsrunder fungerer (pre-seed, seed, serie A, B, C)
- Hva investorer ser etter når de vurderer en oppstartsbedrift`,
    },
    {
      id: 'eb2-3-2-def-1',
      type: 'definition',
      title: 'Risikokapital',
      content: `**Risikokapital** (venture capital) er kapital som investeres i bedrifter med høy vekstpotensial og høy risiko. Investoren aksepterer at mange av investeringene kan mislykkes, men satser på at noen få vil gi svært høy avkastning.

Kjennetegn ved risikokapital:
- Investeres i **tidlig fase** av bedriftens liv
- Investoren får **eierandel** i selskapet (aksjer)
- Investoren forventer **høy avkastning** (ofte 10x eller mer)
- Investoren bidrar ofte med **kompetanse og nettverk** i tillegg til kapital
- Det er en **langsiktig investering** — typisk 5-10 år før exit`,
    },
    {
      id: 'eb2-3-2-text-1',
      type: 'text',
      content: `### Engleinvestorer (Business Angels)

En **engleinvestor** er en privatperson som investerer egne penger i oppstartsbedrifter. Navnet stammer fra Broadway i New York, der velstående privatpersoner finansierte teateroppsetninger — de var «engler» for kunstnerne.

**Kjennetegn ved engleinvestorer:**
- Investerer vanligvis mellom **100 000 og 5 000 000 kr**
- Bruker **egne midler** (ikke andres penger)
- Investerer ofte i **tidlig fase** (pre-seed og seed)
- Bidrar med **erfaring, nettverk og rådgivning** (smart money)
- Har ofte selv bakgrunn som gründere
- Tar gjerne en aktiv rolle som **mentor** for gründeren

**Fordeler med engleinvestorer:**
- Raskere beslutningsprosess enn fond (én person bestemmer)
- Mer fleksible vilkår
- Personlig engasjement og mentorskap

**Ulemper:**
- Begrenset kapital sammenlignet med fond
- Kan bli for involvert i driften
- Avhengig av én persons økonomiske situasjon`,
    },
    {
      id: 'eb2-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Engleinvestering i praksis',
      problem: 'Gründeren Amina har utviklet en prototype på en helseapp. Hun trenger 500 000 kr for å lansere. En engleinvestor tilbyr 500 000 kr mot 20 % eierandel. Er dette en god deal?',
      solution: `**Analyse av tilbudet:**

- Investoren verdsetter selskapet til **2 500 000 kr** etter investering (post-money), fordi 500 000 kr = 20 %
- Selskapet verdsettes til **2 000 000 kr** før investering (pre-money)
- Amina beholder **80 % eierskap**

**Vurdering:**
- For en bedrift i tidlig fase med kun prototype er dette en vanlig verdsettelse
- Amina beholder majoriteten og kontrollen
- Dersom investoren er en erfaren gründer innen helse/teknologi, kan mentorskapet og nettverket være like verdifullt som pengene
- Amina bør sjekke: Hva forventer investoren? Hvor aktiv vil vedkommende være? Er det en aksjonæravtale?

**Konklusjon:** Dette kan være en god deal dersom investoren tilfører mer enn bare penger, og vilkårene er rimelige. 20 % for 500 000 kr i seed-fasen er innenfor normalen.`,
    },
    {
      id: 'eb2-3-2-def-2',
      type: 'definition',
      title: 'Venture capital-fond (VC)',
      content: `Et **venture capital-fond** (VC-fond) er et profesjonelt investeringsselskap som samler inn kapital fra store investorer (pensjonsfond, forsikringsselskaper, rike enkeltpersoner) og investerer dette i oppstartsbedrifter med høy vekstpotensial.

**Slik fungerer et VC-fond:**
1. Fondet samler inn kapital fra investorer (Limited Partners / LP-er)
2. Fondsforvalterne (General Partners / GP-er) velger ut bedrifter å investere i
3. Fondet investerer i et **portefølje** av 15-30 selskaper
4. Forvalterne hjelper selskapene med å vokse
5. Etter 7-10 år realiserer fondet verdiene gjennom **exit** (salg eller børsnotering)

**Typiske investeringsbeløp:**
- **Seed:** 1-10 millioner kr
- **Serie A:** 10-50 millioner kr
- **Serie B+:** 50-500+ millioner kr`,
    },
    {
      id: 'eb2-3-2-text-2',
      type: 'text',
      content: `### Investeringsrunder

Oppstartsbedrifter henter vanligvis kapital i flere runder etter hvert som de vokser:

| Runde | Fase | Typisk beløp | Formål | Investor |
|-------|------|-------------|--------|----------|
| **Pre-seed** | Idéfase | 100 000 - 1 mill. kr | Utvikle konsept og prototype | Gründer, familie, engleinvestorer |
| **Seed** | Tidlig fase | 1 - 10 mill. kr | Lansere produkt, finne product-market fit | Engleinvestorer, seed-fond |
| **Serie A** | Vekstfase | 10 - 50 mill. kr | Skalere forretningsmodellen | VC-fond |
| **Serie B** | Ekspansjon | 50 - 200 mill. kr | Ekspandere til nye markeder | VC-fond, vekstfond |
| **Serie C+** | Moden vekst | 200+ mill. kr | Global ekspansjon, oppkjøp | Sent-fase VC, PE-fond |

**Viktig:** For hver runde blir bedriften dyrere (høyere verdsettelse), men gründeren eier en stadig mindre andel. Dette kalles **utvanning** (dilution).

### Hva ser investorer etter?

Når en investor vurderer en oppstartsbedrift, ser de typisk etter:

1. **Teamet** — Er gründerne kompetente og dedikerte?
2. **Markedet** — Er markedet stort nok til å gi god avkastning?
3. **Produktet** — Løser det et reelt problem? Er det differensiert?
4. **Traction** — Har bedriften kunder, omsetning eller vekst?
5. **Forretningsmodellen** — Er den skalerbar og bærekraftig?
6. **Exit-muligheter** — Hvordan kan investoren realisere avkastningen?`,
    },
    {
      id: 'eb2-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Investeringsrunder og utvanning',
      problem: 'En gründer starter et selskap med 100 % eierskap. Selskapet gjennomfører tre investeringsrunder. Hvor mye eier gründeren etter hver runde?',
      solution: `**Runde 1 — Seed (engleinvestor):**
- Investor gir 1 mill. kr for 20 % eierandel
- Gründeren eier nå **80 %**

**Runde 2 — Serie A (VC-fond):**
- VC-fond investerer 10 mill. kr for 25 % av selskapet
- Gründerens andel vannes ut: 80 % × 0,75 = **60 %**
- Engleinvestoren vannes ut: 20 % × 0,75 = **15 %**
- VC-fond eier **25 %**

**Runde 3 — Serie B (vekstfond):**
- Vekstfond investerer 50 mill. kr for 20 % av selskapet
- Gründeren: 60 % × 0,80 = **48 %**
- Engleinvestor: 15 % × 0,80 = **12 %**
- Serie A-fond: 25 % × 0,80 = **20 %**
- Serie B-fond: **20 %**

**Resultat:** Gründeren eier 48 % — under halvparten — men selskapet er nå verdt mye mer. Dersom selskapet er verdt 250 mill. kr, er gründerens andel verdt **120 mill. kr**.`,
    },
    {
      id: 'eb2-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        task: 'Hva er en engleinvestor?',
        options: [
          { id: 'a', text: 'Et statlig fond som gir tilskudd til gründere', isCorrect: false },
          { id: 'b', text: 'En privatperson som investerer egne penger i oppstartsbedrifter', isCorrect: true },
          { id: 'c', text: 'En bank som spesialiserer seg på lån til oppstartsbedrifter', isCorrect: false },
          { id: 'd', text: 'En konsulent som hjelper gründere med forretningsplan', isCorrect: false },
        ],
        solution: 'En engleinvestor (business angel) er en privatperson som investerer egne penger i oppstartsbedrifter i tidlig fase. I tillegg til kapital bidrar de ofte med erfaring, nettverk og rådgivning — det som kalles «smart money».',
      },
    },
    {
      id: 'eb2-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        task: 'Hva betyr «utvanning» (dilution) i forbindelse med investeringsrunder?',
        options: [
          { id: 'a', text: 'At bedriften taper penger over tid', isCorrect: false },
          { id: 'b', text: 'At gründerens eierandel reduseres når nye investorer kommer inn', isCorrect: true },
          { id: 'c', text: 'At produktet mister kvalitet ved rask vekst', isCorrect: false },
          { id: 'd', text: 'At investorer trekker seg ut av selskapet', isCorrect: false },
        ],
        solution: 'Utvanning (dilution) betyr at gründerens prosentvise eierandel i selskapet reduseres når nye aksjer utstedes til investorer i en investeringsrunde. Selv om gründeren eier en mindre andel, kan verdien av andelen øke dersom selskapet blir mer verdt.',
      },
    },
    {
      id: 'eb2-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom en engleinvestor og et venture capital-fond. Nevn minst tre forskjeller.',
        hints: ['Tenk på hvem som eier pengene, beløpsstørrelse og involvering', 'Hvem tar beslutningen om å investere?'],
        solution: 'Tre viktige forskjeller: (1) Kapitalens opprinnelse — Engleinvestorer bruker egne penger, mens VC-fond forvalter andres penger (fra pensjonsfond, forsikringsselskaper osv.). (2) Investeringsbeløp — Engleinvestorer investerer typisk 100 000 - 5 mill. kr, mens VC-fond investerer 1 - 500+ mill. kr. (3) Beslutningsprosess — En engleinvestor kan bestemme raskt på egen hånd, mens et VC-fond har en strukturert prosess med komitéer og grundig gjennomgang (due diligence). Andre forskjeller inkluderer at engleinvestorer ofte investerer i tidligere faser, og at VC-fond typisk har en mer formell oppfølging av porteføljeselskapene.',
      },
    },
    {
      id: 'eb2-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        task: 'En gründer har et selskap verdsatt til 5 millioner kr (pre-money). En investor tilbyr 2 millioner kr. Hvor mye av selskapet eier investoren etter investeringen? Vis utregningen.',
        hints: ['Post-money = pre-money + investert beløp', 'Eierandel = investert beløp / post-money verdsettelse'],
        solution: 'Post-money verdsettelse = pre-money + investering = 5 000 000 + 2 000 000 = 7 000 000 kr. Investorens eierandel = 2 000 000 / 7 000 000 = 0,286 = 28,6 %. Gründeren beholder 100 % - 28,6 % = 71,4 % av selskapet. Investoren eier altså ca. 28,6 % av selskapet etter investeringen.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'eb2-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-2-ex-5',
        number: '3.2.5',
        type: 'classic',
        task: 'Tenk deg at du er gründer og trenger 3 millioner kr i kapital. Diskuter om du ville henvendt deg til en engleinvestor eller et VC-fond. Begrunn svaret ditt ved å vurdere fordeler og ulemper med begge alternativer.',
        hints: ['Tenk på hvilken fase bedriften er i', 'Hva trenger du mest — bare penger, eller også nettverk og kompetanse?'],
        solution: 'Valget avhenger av bedriftens fase og behov. Engleinvestor passer best dersom bedriften er i tidlig fase (pre-seed/seed), trenger personlig mentorskap og rask beslutning, og beløpet er overkommelig for en privatperson. VC-fond passer best dersom bedriften har bevist markedstilpasning, trenger strukturert vekststøtte og tilgang til et bredt nettverk, og beløpet er i den større enden. For 3 mill. kr kan begge være aktuelle. Dersom bedriften er i idéfasen med kun prototype, er engleinvestor mest realistisk. Dersom bedriften allerede har kunder og vekst, kan et seed-fond (VC) være riktig.',
      },
    },
    {
      id: 'eb2-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-2-ex-6',
        number: '3.2.6',
        type: 'classic',
        task: 'Forklar hva en investor typisk ser etter når de vurderer en oppstartsbedrift. Ranger de seks faktorene (team, marked, produkt, traction, forretningsmodell, exit-muligheter) fra viktigst til minst viktig, og begrunn rangeringen din.',
        hints: ['Mange investorer sier at teamet er det viktigste — hvorfor?', 'Hva betyr det å ha et stort nok marked?'],
        solution: 'En mulig rangering: (1) Teamet — de fleste investorer sier at de investerer i mennesker, ikke bare ideer. Et sterkt team kan tilpasse seg og overvinne problemer. (2) Markedet — selv det beste teamet kan ikke lykkes i et for lite marked. (3) Traction — bevis på at produktet fungerer og at kunder vil ha det. (4) Produktet — løser det et reelt problem på en bedre måte enn alternativene? (5) Forretningsmodellen — kan bedriften bli lønnsom og skalere? (6) Exit-muligheter — hvordan kan investoren til slutt realisere avkastningen? Rangeringen kan diskuteres, og ulike investorer vektlegger ulikt, men team og marked er nesten alltid i toppen.',
      },
    },
    {
      id: 'eb2-3-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Risikokapital** er investering i bedrifter med høy vekstpotensial og høy risiko
- **Engleinvestorer** er privatpersoner som investerer egne penger, ofte i tidlig fase
- **VC-fond** er profesjonelle fond som forvalter andres kapital
- Oppstartsbedrifter henter kapital i **runder** (pre-seed, seed, serie A, B, C)
- For hver runde skjer det en **utvanning** av eksisterende eieres andeler
- Investorer ser etter **team, marked, produkt, traction, forretningsmodell og exit-muligheter**

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Risikokapital | Investering i bedrifter med høy risiko og potensial |
| Engleinvestor | Privatperson som investerer egne penger i oppstarter |
| Venture capital-fond | Profesjonelt fond som investerer i vekstbedrifter |
| Investeringsrunde | Strukturert kapitalhenting (seed, serie A, B, C) |
| Utvanning (dilution) | Reduksjon av eierandel ved nye investeringsrunder |
| Exit | Realisering av investering gjennom salg eller børsnotering |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.3: Crowdfunding og folkefinansiering
// ============================================================================

export const CHAPTER_ENTREBED_2_3_3: TextbookChapter = {
  id: 'entrebed-2-3-3',
  courseId: 'entrebed-2',
  chapterNumber: '3.3',
  title: 'Crowdfunding og folkefinansiering',
  description: 'Lær om ulike typer crowdfunding, de viktigste plattformene, og hvordan du bygger en vellykket kampanjestrategi for folkefinansiering.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike finansieringsformer og vurdere hvilke som passer for ulike typer virksomheter',
  ],
  content: [
    {
      id: 'eb2-3-3-intro',
      type: 'text',
      content: `## Crowdfunding og folkefinansiering

**Crowdfunding** (folkefinansiering) har revolusjonert måten bedrifter og prosjekter kan skaffe kapital på. I stedet for å overbevise én stor investor, kan du henvende deg direkte til «folket» — hundrevis eller tusenvis av mennesker som hver bidrar med et lite beløp.

I dette kapittelet skal du lære:
- Hva crowdfunding er og hvorfor det har blitt så populært
- De fire hovedtypene av crowdfunding
- Hvilke plattformer som finnes og hva de passer til
- Hvordan du planlegger og gjennomfører en vellykket crowdfunding-kampanje`,
    },
    {
      id: 'eb2-3-3-def-1',
      type: 'definition',
      title: 'Crowdfunding',
      content: `**Crowdfunding** (folkefinansiering) er en metode for å samle inn penger fra et stort antall mennesker, vanligvis via en nettbasert plattform. Hver bidragsyter gir et relativt lite beløp, men summen av alle bidragene kan bli stor.

De fire hovedtypene:

1. **Belønningsbasert** — Bidragsytere får et produkt eller en belønning tilbake (f.eks. Kickstarter)
2. **Donasjonsbasert** — Bidragsytere gir penger uten å forvente noe tilbake (f.eks. GoFundMe)
3. **Lånebasert** — Bidragsytere låner penger til bedriften og får tilbake med renter (peer-to-peer lending)
4. **Aksjebasert** — Bidragsytere kjøper aksjer/eierandeler i bedriften (equity crowdfunding)`,
    },
    {
      id: 'eb2-3-3-text-1',
      type: 'text',
      content: `### Belønningsbasert crowdfunding

Dette er den mest kjente formen, populært gjennom plattformer som **Kickstarter** og **Indiegogo**.

**Slik fungerer det:**
1. Gründeren lager en kampanjeside med video, bilder og beskrivelse
2. Ulike «pledge levels» tilbys — jo mer du gir, desto bedre belønning
3. Kampanjen har en **tidsfrist** og et **finansieringsmål**
4. Dersom målet nås, gjennomføres prosjektet og belønningene sendes ut
5. Dersom målet ikke nås, får bidragsyterne pengene tilbake (på Kickstarter)

**Fordeler:**
- Tester markedsinteressen for produktet før produksjon
- Bygger en tidlig kundebase og ambassadører
- Gir kapital uten å gi fra seg eierskap
- Fungerer som markedsføring

**Ulemper:**
- Krever mye forarbeid (video, prototyper, markedsføringsplan)
- Plattformen tar provisjon (typisk 5-10 %)
- Risiko for at du lover mer enn du kan levere
- Forsinket levering kan skade omdømmet

### Aksjebasert crowdfunding

En nyere form der vanlige folk kan investere i oppstartsbedrifter og få aksjer tilbake.

**Plattformer:** Folkeinvest (Norge), Seedrs (Europa), Republic (USA)

**Fordeler for gründeren:**
- Tilgang til kapital fra mange små investorer
- Bygger et nettverk av engasjerte medeiere
- Investorene blir ambassadører for bedriften

**Ulemper:**
- Mange aksjonærer å forholde seg til
- Regulatoriske krav og rapporteringsplikt
- Kan komplisere fremtidige investeringsrunder`,
    },
    {
      id: 'eb2-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Kickstarter-kampanje',
      problem: 'Et norsk designselskap vil lansere en ny type reiseveske. De setter opp en Kickstarter-kampanje med mål om 500 000 kr. Hvordan kan de strukturere kampanjen?',
      solution: `**Kampanjestruktur:**

**Pledge levels (belønningsnivåer):**
- **250 kr:** Takk-kort og navnenotering på nettsiden
- **750 kr:** Early bird-pris — én reiseveske (normalpris 1 200 kr)
- **1 000 kr:** Én reiseveske + eksklusiv farge kun for backers
- **2 500 kr:** To reisevesker + personlig monogram
- **10 000 kr:** Ti reisevesker (for bedrifter/gaver)

**Tidslinje:**
- Uke 1-2 før lansering: Bygge e-postliste og sosiale medier-buzz
- Dag 1-3: Fokus på å nå 30 % av målet (skaper momentum)
- Uke 1-3: Oppdateringer, mediedekning, influencer-samarbeid
- Siste 48 timer: Påminnelse-kampanje for å nå målet

**Budsjett for kampanjen:**
- Video og foto: 30 000 kr
- Prototyper: 50 000 kr
- Markedsføring: 20 000 kr
- Kickstarter-provisjon (5 %): 25 000 kr
- Betalingsgebyr (3-5 %): 20 000 kr

**Resultat:** Dersom kampanjen lykkes, har selskapet 500 000 kr, bekreftet markedsinteresse og en liste med ventende kunder.`,
    },
    {
      id: 'eb2-3-3-def-2',
      type: 'definition',
      title: 'Kampanjestrategi for crowdfunding',
      content: `En **kampanjestrategi** for crowdfunding er en detaljert plan for hvordan du skal nå finansieringsmålet. De viktigste elementene er:

**Før kampanjen:**
- Bygg en **e-postliste** med potensielle backers (minimum 500-1000 personer)
- Lag en **profesjonell video** (1-3 minutter) som viser produktet og teamet
- Definer tydelige **belønningsnivåer** med god verdi
- Sett et **realistisk mål** (heller for lavt enn for høyt)
- Forbered **PR-strategi** med mediekontakter

**Under kampanjen:**
- Oppnå **30 % av målet innen 48 timer** (kritisk for synlighet og momentum)
- Publiser **jevnlige oppdateringer** til backers
- Aktiver sosiale medier og nettverk daglig
- Tilby **stretch goals** dersom målet nås tidlig

**Etter kampanjen:**
- Hold backers informert om produksjon og levering
- Lever det du har lovet — til tiden
- Bruk erfaringen som grunnlag for videre salg`,
    },
    {
      id: 'eb2-3-3-text-2',
      type: 'text',
      content: `### Viktige plattformer for crowdfunding

| Plattform | Type | Fokus | Geografi |
|-----------|------|-------|----------|
| **Kickstarter** | Belønning | Kreative prosjekter, teknologi, design | Globalt |
| **Indiegogo** | Belønning | Bredere enn Kickstarter, fleksibel funding | Globalt |
| **GoFundMe** | Donasjon | Personlige saker, veldedighet | Globalt |
| **Folkeinvest** | Aksjebasert | Norske oppstartsbedrifter | Norge |
| **Seedrs** | Aksjebasert | Europeiske oppstartsbedrifter | Europa |
| **Spleis** | Donasjon | Dugnad, lokale prosjekter | Norge |

### Når passer crowdfunding?

Crowdfunding er **best egnet** for:
- Fysiske produkter med visuell appell (design, teknologi, mat)
- Kreative prosjekter (film, musikk, spill, bøker)
- Bedrifter med en sterk historie å fortelle
- Prosjekter som appellerer til et bredt publikum

Crowdfunding er **mindre egnet** for:
- B2B-tjenester (vanskelig å engasjere mange)
- Komplekse produkter som er vanskelige å forklare
- Prosjekter uten visuelt materiale
- Bedrifter som trenger svært mye kapital (over 10 mill. kr)`,
    },
    {
      id: 'eb2-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Folkeinvest — aksjebasert crowdfunding i Norge',
      problem: 'En norsk teknologibedrift ønsker å hente 2 millioner kr gjennom aksjebasert crowdfunding på Folkeinvest. Hva innebærer dette?',
      solution: `**Prosessen:**

1. **Søknad:** Bedriften søker Folkeinvest om å bli listet på plattformen
2. **Due diligence:** Folkeinvest gjennomgår bedriften, økonomien og teamet
3. **Kampanjeside:** Bedriften lager en presentasjon med forretningsplan, video og økonomiske prognoser
4. **Investering:** Vanlige folk kan investere fra f.eks. 2 500 kr og oppover
5. **Aksjetildeling:** Dersom målet nås, utstedes nye aksjer til investorene

**Eksempel med tall:**
- Bedriften verdsettes til 8 mill. kr (pre-money)
- Henter 2 mill. kr → post-money verdsettelse 10 mill. kr
- Investorene eier til sammen 20 % (2 mill. / 10 mill.)
- Dersom 200 personer investerer, eier hver i snitt 0,1 %

**Fordeler:** Bred investorbase, mange ambassadører, demokratisert investering.
**Ulemper:** Mange aksjonærer å administrere, rapporteringsplikt, kan komplisere neste investeringsrunde.`,
    },
    {
      id: 'eb2-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        task: 'Hva er belønningsbasert crowdfunding?',
        options: [
          { id: 'a', text: 'En form der bidragsytere kjøper aksjer i selskapet', isCorrect: false },
          { id: 'b', text: 'En form der bidragsytere gir penger uten å forvente noe tilbake', isCorrect: false },
          { id: 'c', text: 'En form der bidragsytere får et produkt eller en belønning tilbake for sitt bidrag', isCorrect: true },
          { id: 'd', text: 'En form der bidragsytere låner penger til bedriften mot renter', isCorrect: false },
        ],
        solution: 'Belønningsbasert crowdfunding innebærer at bidragsytere (backers) får et produkt, en tjeneste eller en annen belønning tilbake for bidraget sitt. Kickstarter og Indiegogo er de mest kjente plattformene for denne typen crowdfunding.',
      },
    },
    {
      id: 'eb2-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        task: 'Hvorfor er det viktig å nå 30 % av finansieringsmålet innen de første 48 timene av en crowdfunding-kampanje?',
        options: [
          { id: 'a', text: 'Fordi plattformen krever det for å fortsette kampanjen', isCorrect: false },
          { id: 'b', text: 'Fordi det skaper momentum og øker synligheten på plattformen', isCorrect: true },
          { id: 'c', text: 'Fordi pengene blir låst etter 48 timer og ikke kan tilbakeføres', isCorrect: false },
          { id: 'd', text: 'Fordi investorer bare har 48 timer til å bestemme seg', isCorrect: false },
        ],
        solution: 'Tidlig momentum er kritisk for crowdfunding-kampanjer. Når en kampanje når 30 % raskt, signaliserer det til plattformens algoritmer og potensielle backers at prosjektet er populært. Dette gir bedre synlighet på plattformen, tiltrekker flere bidragsytere, og skaper en positiv spiral. Kampanjer som starter tregt, sliter ofte med å nå målet.',
      },
    },
    {
      id: 'eb2-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom belønningsbasert og aksjebasert crowdfunding. Hvilken type ville du anbefalt for et selskap som lager et nytt bordspill, og hvorfor?',
        hints: ['Tenk på hva bidragsyterne får tilbake i hvert tilfelle', 'Hva er enklest for et fysisk produkt som er lett å forstå?'],
        solution: 'Belønningsbasert crowdfunding gir bidragsytere et produkt eller en belønning, mens aksjebasert crowdfunding gir bidragsytere aksjer/eierskap i selskapet. For et bordspill er belønningsbasert crowdfunding (f.eks. Kickstarter) klart å anbefale fordi: (1) Bordspill er visuelt og lett å presentere. (2) Belønningen er selve spillet — noe bidragsyterne faktisk vil ha. (3) Kickstarter har en stor og aktiv bordspill-community. (4) Gründeren beholder fullt eierskap. (5) Det tester markedsinteressen før produksjon. Aksjebasert crowdfunding er mindre egnet fordi et bordspill sjelden trenger mange investeringsrunder, og det er unødvendig å gi fra seg eierskap.',
      },
    },
    {
      id: 'eb2-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        task: 'Hvilke forberedelser bør du gjøre før du lanserer en crowdfunding-kampanje? Lag en sjekkliste med minst fem punkter.',
        hints: ['Tenk på video, målgruppe, e-postliste og belønninger', 'Hva gjør at folk stoler på prosjektet?'],
        solution: 'Sjekkliste for crowdfunding-forberedelser: (1) Lag en profesjonell kampanjevideo (1-3 min) som viser produktet, teamet og visjonen. (2) Bygg en e-postliste med minst 500-1000 interesserte personer gjennom sosiale medier og nettverksarbeid. (3) Definer tydelige belønningsnivåer med god verdi for ulike budsjetter. (4) Sett et realistisk finansieringsmål basert på faktiske kostnader. (5) Forbered en PR- og sosiale medier-strategi med pressemeldinger og influencer-kontakter. (6) Ha en fungerende prototype eller detaljerte bilder/tegninger av produktet. (7) Lag en realistisk tidslinje for produksjon og levering.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'eb2-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-3-ex-5',
        number: '3.3.5',
        type: 'classic',
        task: 'Du vil bruke crowdfunding til å finansiere en ny type miljøvennlig vannflaske. Planlegg kampanjen: Hvilken plattform velger du? Hva er finansieringsmålet? Hvilke belønningsnivåer tilbyr du? Hvordan bygger du momentum de første dagene?',
        hints: ['Tenk på hvilken type crowdfunding som passer for et fysisk produkt', 'Hvordan kan du engasjere folk før kampanjen starter?'],
        solution: 'Eksempel på kampanjeplan: Plattform: Kickstarter (best for fysiske produkter, stor brukerbase). Finansieringsmål: 300 000 kr (dekker verktøykostnader, første produksjonsrunde og frakt). Belønningsnivåer: 200 kr = digitalt takkekort, 400 kr = early bird — én flaske (normalpris 600 kr), 700 kr = én flaske + eksklusive farger, 1 500 kr = tre flasker (familiepakke), 5 000 kr = ti flasker + firmalogo. Momentum-strategi: 4 uker før lansering: bygge e-postliste via Instagram/TikTok og landing page. Dag 1: Send e-post til hele listen, del på alle sosiale medier, be venner og familie backe først. Dag 2-3: Kontakte blogger og journalister med pressemelding. Mål: 30 % (90 000 kr) innen 48 timer.',
      },
    },
    {
      id: 'eb2-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-3-ex-6',
        number: '3.3.6',
        type: 'classic',
        task: 'Vurder fordeler og ulemper ved crowdfunding sammenlignet med tradisjonelle finansieringskilder (banklån og investorer). I hvilke situasjoner er crowdfunding det beste alternativet?',
        hints: ['Tenk på kontroll, markedstesting, risiko og egnethet', 'Hva får du med crowdfunding som du ikke får med et banklån?'],
        solution: 'Fordeler med crowdfunding vs. tradisjonelle kilder: (1) Markedsvalidering — du tester om folk vil ha produktet før du produserer. (2) Beholder eierskap — belønningsbasert crowdfunding gir ikke fra seg eierandeler. (3) Markedsføring — kampanjen fungerer som reklame og bygger en kundebase. (4) Ingen tilbakebetalingskrav — ved belønningsbasert gir du produkt, ikke penger tilbake. Ulemper: (1) Usikkert — ingen garanti for å nå målet. (2) Tidkrevende — krever mye forberedelse og oppfølging. (3) Offentlig — alle kan se om du mislykkes. (4) Leveringspress — du har lovet noe til mange mennesker. Crowdfunding er best for forbrukerprodukter med visuell appell, kreative prosjekter og ideer som appellerer til et bredt publikum.',
      },
    },
    {
      id: 'eb2-3-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Crowdfunding** samler mange små bidrag fra et stort antall mennesker via nettplattformer
- Det finnes fire hovedtyper: **belønningsbasert**, **donasjonsbasert**, **lånebasert** og **aksjebasert**
- **Kickstarter** og **Indiegogo** er de viktigste plattformene for belønningsbasert crowdfunding
- **Folkeinvest** er den ledende norske plattformen for aksjebasert crowdfunding
- En vellykket kampanje krever grundig forberedelse: video, e-postliste, belønningsnivåer og momentum-strategi
- Det er kritisk å nå **30 % av målet innen 48 timer** for å skape momentum

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Crowdfunding | Samle inn kapital fra mange bidragsytere via nettplattform |
| Belønningsbasert | Bidragsytere får produkt/belønning tilbake |
| Aksjebasert | Bidragsytere får eierandeler i selskapet |
| Pledge level | Belønningsnivå i en crowdfunding-kampanje |
| Stretch goal | Ekstra mål som låser opp nye belønninger |
| Folkeinvest | Norsk plattform for aksjebasert crowdfunding |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.4: Verdsettelse av selskap
// ============================================================================

export const CHAPTER_ENTREBED_2_3_4: TextbookChapter = {
  id: 'entrebed-2-3-4',
  courseId: 'entrebed-2',
  chapterNumber: '3.4',
  title: 'Verdsettelse av selskap',
  description: 'Lær om de viktigste metodene for å verdsette et selskap: diskontert kontantstrøm (DCF), multippelanalyse, og pre/post-money verdsettelse.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere og vurdere lønnsomheten av en investering',
  ],
  content: [
    {
      id: 'eb2-3-4-intro',
      type: 'text',
      content: `## Verdsettelse av selskap

Hva er et selskap verdt? Dette er kanskje det viktigste spørsmålet i enhver investerings- eller salgssituasjon. Verdsettelse handler om å estimere den **økonomiske verdien** av en bedrift, og det finnes flere metoder for å gjøre dette.

I dette kapittelet skal du lære:
- Hva verdsettelse betyr og hvorfor det er viktig
- Diskontert kontantstrøm (DCF) — fremtidige inntekter i dagens verdi
- Multippelanalyse — sammenligning med lignende selskaper
- Pre-money og post-money verdsettelse ved investeringsrunder`,
    },
    {
      id: 'eb2-3-4-def-1',
      type: 'definition',
      title: 'Verdsettelse',
      content: `**Verdsettelse** er prosessen med å bestemme den nåværende verdien av et selskap eller en eiendel. Verdien avhenger av perspektivet og metoden som brukes.

**Hvorfor er verdsettelse viktig?**
- Ved **investering** — bestemmer hvor mye eierandel investoren får for pengene sine
- Ved **salg av bedrift** — fastsetter prisen kjøper og selger forhandler om
- Ved **fusjon** — avgjør bytteforholdet mellom selskapene
- Ved **generasjonsskifte** — fastsetter verdien for arveavgift og fordeling
- Ved **aksjonæravtaler** — regulerer hva aksjer kan kjøpes og selges for

**Viktig prinsipp:** Et selskap er verdt det noen er villig til å betale for det. Verdsettelsesmetoder gir **estimater**, ikke fasitsvar.`,
    },
    {
      id: 'eb2-3-4-text-1',
      type: 'text',
      content: `### Diskontert kontantstrøm (DCF)

**DCF-metoden** (Discounted Cash Flow) er den mest teoretisk korrekte verdsettelsesmetoden. Den baserer seg på prinsippet om at verdien av et selskap er lik **nåverdien av alle fremtidige kontantstrømmer**.

**Grunnideen:**
Penger i dag er mer verdt enn penger i fremtiden, fordi du kan investere pengene og få avkastning. 100 kr i dag er mer verdt enn 100 kr om ett år. Denne forskjellen kalles **tidsverdien av penger**.

**Forenklet fremgangsmåte:**
1. Estimer fremtidige kontantstrømmer (typisk 5-10 år fremover)
2. Velg en **diskonteringsrente** (avkastningskrav)
3. Beregn nåverdien av hver fremtidig kontantstrøm
4. Summer alle nåverdiene + en **terminalverdi** (verdien etter prognoseperioden)

**Formelen for nåverdi:**

Nåverdi = Kontantstrøm / (1 + r)^n

Der *r* er diskonteringsrenten og *n* er antall år.

**Styrker:** Teoretisk solid, tar hensyn til tidsverdien av penger.
**Svakheter:** Svært sensitiv for antagelsene (kontantstrømprognoser og diskonteringsrente). Små endringer gir store utslag.`,
    },
    {
      id: 'eb2-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Forenklet DCF-beregning',
      problem: 'En bedrift forventer følgende frie kontantstrømmer de neste 3 årene: År 1: 500 000 kr, År 2: 700 000 kr, År 3: 1 000 000 kr. Diskonteringsrenten er 10 %. Hva er nåverdien av disse kontantstrømmene?',
      solution: `**Beregning:**

År 1: 500 000 / (1 + 0,10)^1 = 500 000 / 1,10 = **454 545 kr**
År 2: 700 000 / (1 + 0,10)^2 = 700 000 / 1,21 = **578 512 kr**
År 3: 1 000 000 / (1 + 0,10)^3 = 1 000 000 / 1,331 = **751 315 kr**

**Sum nåverdi = 454 545 + 578 512 + 751 315 = 1 784 372 kr**

I tillegg ville man beregnet en **terminalverdi** for alle kontantstrømmer etter år 3, som ofte utgjør en stor del av totalverdien.

**Tolkning:** Basert på de forventede kontantstrømmene og et avkastningskrav på 10 %, er bedriften verdt minst ca. 1,8 mill. kr (pluss terminalverdi). Dersom diskonteringsrenten hadde vært 15 % (høyere risiko), ville nåverdien blitt lavere.`,
    },
    {
      id: 'eb2-3-4-def-2',
      type: 'definition',
      title: 'Multippelanalyse',
      content: `**Multippelanalyse** (komparativ verdsettelse) er en metode der man verdsetter et selskap ved å sammenligne det med **lignende selskaper** som allerede har en kjent verdi.

**Vanlige multipler:**
- **P/E (Price/Earnings):** Markedsverdi / Årsresultat
- **EV/EBITDA:** Selskapsverdi / Driftsresultat før avskrivninger
- **P/S (Price/Sales):** Markedsverdi / Omsetning
- **EV/Revenue:** Selskapsverdi / Omsetning (vanlig for vekstselskaper uten overskudd)

**Eksempel med P/E:**
Dersom lignende selskaper har en P/E på 15, og ditt selskap har et årsresultat på 2 mill. kr, er estimert verdi: 15 × 2 000 000 = **30 000 000 kr**.

**Styrker:** Enkel å forstå og beregne, markedsbasert.
**Svakheter:** Vanskelig å finne perfekt sammenlignbare selskaper, tar ikke hensyn til unike forhold.`,
    },
    {
      id: 'eb2-3-4-text-2',
      type: 'text',
      content: `### Pre-money og post-money verdsettelse

Ved investeringsrunder i oppstartsbedrifter brukes begrepene **pre-money** og **post-money** verdsettelse.

**Pre-money verdsettelse** er verdien av selskapet **før** investoren skyter inn penger.

**Post-money verdsettelse** er verdien av selskapet **etter** at investoren har skutt inn penger.

**Sammenhengen:**
Post-money = Pre-money + Investert beløp

**Investorens eierandel:**
Eierandel = Investert beløp / Post-money verdsettelse

| Begrep | Formel | Eksempel |
|--------|--------|----------|
| Pre-money | Avtalt verdsettelse før investering | 8 mill. kr |
| Investering | Beløpet investoren skyter inn | 2 mill. kr |
| Post-money | Pre-money + Investering | 10 mill. kr |
| Investorens andel | Investering / Post-money | 2/10 = 20 % |

### Hvilken metode bør du bruke?

| Metode | Best for | Mindre egnet for |
|--------|----------|------------------|
| DCF | Etablerte bedrifter med forutsigbare kontantstrømmer | Tidligfase oppstarter uten inntekter |
| Multippelanalyse | Bedrifter med sammenlignbare konkurrenter | Helt unike bedrifter uten sammenlignbare |
| Pre/post-money | Investeringsrunder i oppstarter | Salg av etablerte bedrifter |

I praksis bruker man ofte **flere metoder** og sammenligner resultatene for å komme frem til en rimelig verdsettelse.`,
    },
    {
      id: 'eb2-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Multippelanalyse i praksis',
      problem: 'Et norsk SaaS-selskap (programvare som tjeneste) har en årlig omsetning på 5 millioner kr. Lignende SaaS-selskaper i markedet verdsettes til 8x omsetning (P/S-multippel). Hva er estimert verdi?',
      solution: `**Beregning:**

Estimert verdi = Omsetning × P/S-multippel
Estimert verdi = 5 000 000 kr × 8 = **40 000 000 kr**

**Men man bør nyansere:**
- Vokser selskapet raskt? Da kan multippelen være høyere (f.eks. 12x)
- Har selskapet god kundelojalitet (lav churn)? Øker multippelen
- Er lønnsomheten svak? Reduserer multippelen
- Er markedet i nedgang? Reduserer multippelen

**Sensitivitetsanalyse:**
| P/S-multippel | Estimert verdi |
|----------------|---------------|
| 6x | 30 mill. kr |
| 8x | 40 mill. kr |
| 10x | 50 mill. kr |
| 12x | 60 mill. kr |

Multippelanalyse gir altså et **verdiintervall** snarere enn ett eksakt tall, noe som gjør det viktig å forstå hva som driver multippelen opp eller ned.`,
    },
    {
      id: 'eb2-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        task: 'Hva er grunnprinsippet bak DCF-metoden (diskontert kontantstrøm)?',
        options: [
          { id: 'a', text: 'At verdien av et selskap er lik summen av eiendelene minus gjeld', isCorrect: false },
          { id: 'b', text: 'At verdien av et selskap er lik nåverdien av alle fremtidige kontantstrømmer', isCorrect: true },
          { id: 'c', text: 'At verdien av et selskap bestemmes av sammenligning med konkurrentene', isCorrect: false },
          { id: 'd', text: 'At verdien av et selskap er lik aksjeprisen multiplisert med antall aksjer', isCorrect: false },
        ],
        solution: 'DCF-metoden baserer seg på at verdien av et selskap er lik nåverdien av alle fremtidige kontantstrømmer. Prinsippet er at penger i dag er mer verdt enn penger i fremtiden (tidsverdien av penger), og man diskonterer fremtidige kontantstrømmer tilbake til dagens verdi ved hjelp av en diskonteringsrente.',
      },
    },
    {
      id: 'eb2-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        task: 'Hva er post-money verdsettelse?',
        options: [
          { id: 'a', text: 'Verdien av selskapet før investoren skyter inn penger', isCorrect: false },
          { id: 'b', text: 'Verdien av selskapet etter at investoren har skutt inn penger', isCorrect: true },
          { id: 'c', text: 'Verdien av selskapet etter at det har gått med overskudd i ett år', isCorrect: false },
          { id: 'd', text: 'Verdien av investorens aksjepost alene', isCorrect: false },
        ],
        solution: 'Post-money verdsettelse er verdien av selskapet etter at investoren har skutt inn sine penger. Den beregnes som: Post-money = Pre-money + Investert beløp. For eksempel: Dersom pre-money er 8 mill. kr og investoren skyter inn 2 mill. kr, er post-money 10 mill. kr.',
      },
    },
    {
      id: 'eb2-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        task: 'En bedrift forventer en fri kontantstrøm på 800 000 kr om ett år og 1 200 000 kr om to år. Diskonteringsrenten er 12 %. Beregn nåverdien av disse kontantstrømmene. Vis utregningen.',
        hints: ['Bruk formelen: Nåverdi = Kontantstrøm / (1 + r)^n', 'r = 0,12 og n er antall år'],
        solution: 'År 1: 800 000 / (1 + 0,12)^1 = 800 000 / 1,12 = 714 286 kr. År 2: 1 200 000 / (1 + 0,12)^2 = 1 200 000 / 1,2544 = 956 633 kr. Sum nåverdi = 714 286 + 956 633 = 1 670 919 kr. De to fremtidige kontantstrømmene på til sammen 2 000 000 kr er altså verdt ca. 1 671 000 kr i dag, gitt et avkastningskrav på 12 %.',
      },
    },
    {
      id: 'eb2-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        task: 'Et selskap har en omsetning på 10 millioner kr. Tre sammenlignbare selskaper har P/S-multipler på henholdsvis 6, 8 og 10. Beregn et verdiintervall for selskapet basert på multippelanalyse.',
        hints: ['Multipliser omsetningen med hver multippel', 'Vurder hvilke faktorer som avgjør om selskapet bør ligge i øvre eller nedre del av intervallet'],
        solution: 'Verdiintervall: Lav multippel (6x): 10 mill. × 6 = 60 mill. kr. Middels multippel (8x): 10 mill. × 8 = 80 mill. kr. Høy multippel (10x): 10 mill. × 10 = 100 mill. kr. Verdiintervallet er altså 60-100 mill. kr. Hvor i intervallet selskapet bør plasseres avhenger av faktorer som vekstrate, lønnsomhet, kundelojalitet, markedsposisjon og konkurranseforhold. Et selskap med høy vekst og god lønnsomhet bør ligge i øvre del, mens et selskap med lavere vekst eller svak lønnsomhet bør ligge i nedre del.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'eb2-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-4-ex-5',
        number: '3.4.5',
        type: 'classic',
        task: 'En investor tilbyr 3 millioner kr for 25 % av selskapet ditt. Beregn pre-money og post-money verdsettelse. Dersom en annen investor tilbyr 3 millioner kr for 20 %, hva er forskjellen? Hvilket tilbud bør du velge, og hvorfor?',
        hints: ['Eierandel = Investering / Post-money', 'Beregn post-money fra eierandelen og inverter for å finne pre-money'],
        solution: 'Tilbud 1: Investering = 3 mill., eierandel = 25 %. Post-money = 3 mill. / 0,25 = 12 mill. kr. Pre-money = 12 mill. - 3 mill. = 9 mill. kr. Tilbud 2: Investering = 3 mill., eierandel = 20 %. Post-money = 3 mill. / 0,20 = 15 mill. kr. Pre-money = 15 mill. - 3 mill. = 12 mill. kr. Forskjellen: Tilbud 2 verdsetter selskapet til 12 mill. kr pre-money mot 9 mill. kr i tilbud 1. Med tilbud 2 beholder du 80 % eierskap mot 75 % med tilbud 1. Tilbud 2 er økonomisk bedre, men man bør også vurdere hva investoren tilfører utover penger (kompetanse, nettverk, erfaring).',
      },
    },
    {
      id: 'eb2-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        task: 'Diskuter styrker og svakheter ved DCF-metoden og multippelanalyse. I hvilke situasjoner er hver metode best egnet? Gi eksempler.',
        hints: ['Tenk på tilgang til data, bedriftens modenhet og type virksomhet', 'Hva skjer med DCF dersom prognosene er usikre?'],
        solution: 'DCF-metoden: Styrker — teoretisk solid, tar hensyn til tidsverdien av penger, gir en fundamental verdi basert på bedriftens egne kontantstrømmer. Svakheter — svært sensitiv for antagelsene, små endringer i diskonteringsrente eller vekstrate gir store utslag, vanskelig å bruke for oppstarter uten stabile kontantstrømmer. Best egnet for etablerte bedrifter med forutsigbare kontantstrømmer (f.eks. et kraftselskap eller en utleiebedrift). Multippelanalyse: Styrker — enkel å beregne, markedsbasert, reflekterer hva markedet faktisk betaler. Svakheter — vanskelig å finne perfekt sammenlignbare selskaper, kan påvirkes av midlertidige markedsforhold, tar ikke hensyn til unike forhold. Best egnet for bedrifter i bransjer med mange sammenlignbare aktører (f.eks. SaaS-selskaper, restaurantkjeder). I praksis bør man bruke begge metodene og sammenligne resultatene.',
      },
    },
    {
      id: 'eb2-3-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Verdsettelse** er prosessen med å estimere den økonomiske verdien av et selskap
- **DCF-metoden** beregner nåverdien av fremtidige kontantstrømmer
- **Multippelanalyse** sammenligner selskapet med lignende bedrifter
- **Pre-money** er verdien før investering, **post-money** er verdien etter investering
- I praksis brukes ofte **flere metoder** for å komme frem til en rimelig verdsettelse
- Verdsettelse er ikke eksakt vitenskap — det gir **estimater og intervaller**

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| DCF | Diskontert kontantstrøm — nåverdien av fremtidige inntekter |
| Diskonteringsrente | Avkastningskravet brukt til å beregne nåverdi |
| Multippelanalyse | Verdsettelse basert på sammenligning med lignende selskaper |
| P/E-multippel | Markedsverdi delt på årsresultat |
| P/S-multippel | Markedsverdi delt på omsetning |
| Pre-money | Verdsettelse av selskapet før investering |
| Post-money | Verdsettelse av selskapet etter investering |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.5: Pitching og investorpresentasjon
// ============================================================================

export const CHAPTER_ENTREBED_2_3_5: TextbookChapter = {
  id: 'entrebed-2-3-5',
  courseId: 'entrebed-2',
  chapterNumber: '3.5',
  title: 'Pitching og investorpresentasjon',
  description: 'Lær å bygge et overbevisende pitch deck, mestre elevator pitchen, og forstå hva investorer ser etter i en presentasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'presentere en forretningsidé for potensielle investorer',
  ],
  content: [
    {
      id: 'eb2-3-5-intro',
      type: 'text',
      content: `## Pitching og investorpresentasjon

Uansett hvor god forretningsideen din er, må du kunne **kommunisere** den effektivt for å få med deg investorer, partnere og kunder. Pitching — kunsten å presentere en forretningsidé kort og overbevisende — er en av de viktigste ferdighetene en gründer kan ha.

I dette kapittelet skal du lære:
- Hva en pitch er og hvorfor den er avgjørende for å skaffe kapital
- Hvordan du bygger et profesjonelt pitch deck (presentasjon)
- Hvordan du mestrer elevator pitchen (30-60 sekunders presentasjon)
- De vanligste feilene gründere gjør i investor-pitcher`,
    },
    {
      id: 'eb2-3-5-def-1',
      type: 'definition',
      title: 'Pitch og pitch deck',
      content: `En **pitch** er en kort, overbevisende presentasjon av en forretningsidé, typisk rettet mot investorer, partnere eller kunder.

Et **pitch deck** er en visuell presentasjon (PowerPoint/Keynote/Google Slides) som støtter pitchen. Et godt pitch deck har vanligvis **10-15 slides** og kan presenteres på **10-20 minutter**.

**Typer pitcher:**
- **Elevator pitch** — 30-60 sekunder, uformell, «heis-versjonen»
- **Kort pitch** — 3-5 minutter, f.eks. på et gründer-event eller konkurranse
- **Full investorpresentasjon** — 15-30 minutter med Q&A etterpå
- **Demo day pitch** — 5-10 minutter foran et panel med investorer

En pitch handler ikke bare om å gi informasjon — den handler om å **selge en visjon** og overbevise tilhørerne om at dette er verdt å investere i.`,
    },
    {
      id: 'eb2-3-5-text-1',
      type: 'text',
      content: `### Pitch deck — De essensielle slidene

Et godt pitch deck følger en logisk struktur som forteller en overbevisende historie. Her er de vanligste slidene:

**1. Tittelside**
Bedriftens navn, logo, slagord og kontaktinfo. Første inntrykk teller.

**2. Problemet**
Beskriv problemet du løser. Gjør det **konkret og relaterbart**. Investorer må forstå hvorfor dette er viktig.

**3. Løsningen**
Hva tilbyr du? Hvordan løser produktet/tjenesten problemet? Hold det enkelt og visuelt.

**4. Markedet**
Hvor stort er markedet? Bruk tall: TAM (Total Addressable Market), SAM (Serviceable Addressable Market), SOM (Serviceable Obtainable Market).

**5. Forretningsmodellen**
Hvordan tjener du penger? Vis inntektsstrømmer, priser og enhetsøkonomi.

**6. Traction / Resultater**
Hva har du oppnådd? Kunder, omsetning, brukere, vekstrate. Vis at ideen fungerer.

**7. Teamet**
Hvem er dere? Vis at teamet har kompetansen til å gjennomføre.

**8. Konkurransefortrinn**
Hva skiller dere fra konkurrentene? Hva er deres «moat» (beskyttelse)?

**9. Finansiell oversikt**
Prognoser for omsetning, kostnader og resultat de neste 3-5 årene.

**10. The Ask — Hva trenger du?**
Hvor mye kapital søker du? Hva skal pengene brukes til? Hvilken eierandel tilbys?`,
    },
    {
      id: 'eb2-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Elevator pitch',
      problem: 'Lag en elevator pitch (30-60 sekunder) for en app som hjelper studenter med å finne lesesalplasser i sanntid.',
      solution: `**Elevator pitch:**

«Visste du at 7 av 10 studenter bruker over 20 minutter på å finne en ledig leseplass på campus? Det er frustrerende — og det stjeler verdifull studietid.

Vi har laget **StudiePlass** — en app som viser ledige lesesalplasser i sanntid på alle universiteter i Norge. Tenk på det som «Ruter for lesesaler».

Vi bruker sensorer og anonymisert wifi-data for å vise belegg i sanntid. Appen er allerede i bruk på UiO med 3 000 aktive brukere, og vi har avtaler med NTNU og UiB.

Vi søker 2 millioner kroner for å skalere til alle norske universiteter innen neste studieår. Markedet er 280 000 studenter — og vi tar 29 kr per semester.

Har du lyst til å høre mer?»

**Struktur:** Problem → Løsning → Traction → The Ask → Call to action. Alt på under 60 sekunder.`,
    },
    {
      id: 'eb2-3-5-def-2',
      type: 'definition',
      title: 'Elevator pitch',
      content: `En **elevator pitch** er en svært kort presentasjon av en forretningsidé — kort nok til å leveres i løpet av en heistur (30-60 sekunder).

**Strukturen for en god elevator pitch:**

1. **Hook** — Fang oppmerksomheten med et overraskende faktum eller spørsmål
2. **Problemet** — Beskriv problemet kort og tydelig
3. **Løsningen** — Forklar hva du tilbyr (én setning)
4. **Differensiering** — Hva gjør deg unik? (én setning)
5. **Traction** — Bevis på at det fungerer (tall)
6. **The Ask** — Hva trenger du? (kapital, samarbeid, rådgivning)

**Tommelregler:**
- Maksimalt 150-200 ord
- Bruk enkelt språk — unngå fagsjargong
- Øv til det sitter naturlig (ikke les opp)
- Tilpass til mottakeren (investor vs. kunde vs. partner)
- Avslutt alltid med en **tydelig oppfordring** til handling`,
    },
    {
      id: 'eb2-3-5-text-2',
      type: 'text',
      content: `### Vanlige feil i investor-pitcher

Selv erfarne gründere gjør feil når de pitcher. Her er de vanligste:

**1. For mye fokus på produktet, for lite på forretningen**
Investorer bryr seg om å tjene penger. Vis at du forstår markedet, kundene og forretningsmodellen — ikke bare teknologien.

**2. Urealistiske prognoser**
«Vi tar 10 % av markedet innen år to» høres bra ut, men investorer gjennomskuer urealistiske tall. Vær ærlig og vis hvordan du har kommet frem til tallene.

**3. Ignorerer konkurrenter**
Å si «vi har ingen konkurrenter» er en rød flagg. Det betyr enten at markedet ikke eksisterer, eller at du ikke har gjort research. Vis at du kjenner konkurrentene og forklar hva du gjør bedre.

**4. Dårlig tid-styring**
Å bruke for lang tid på de første slidene og haste gjennom resten. Øv på timing.

**5. Manglende «The Ask»**
Mange gründere glemmer å si hva de faktisk trenger. Vær tydelig: «Vi søker X millioner kroner for Y % eierandel, og pengene skal brukes til Z.»

**6. Svakt team-slide**
Investorer investerer i mennesker. Vis relevante erfaringer og kompetanse — ikke bare navn og titler.

### Tips for å lykkes med pitchen

- **Fortell en historie** — Mennesker husker historier bedre enn fakta
- **Start med problemet** — Gjør det relaterbart og følelsesmessig engasjerende
- **Bruk tall og bevis** — «Vi har 3 000 brukere» slår «vi tror mange vil bruke dette»
- **Vær visuell** — Lite tekst, store bilder, tydelige grafer
- **Øv, øv, øv** — De beste pitchene ser uanstrengte ut, men det er fordi de er godt øvd
- **Forbered deg på spørsmål** — Investorer vil teste deg med vanskelige spørsmål`,
    },
    {
      id: 'eb2-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Pitch deck-evaluering',
      problem: 'En gründer presenterer følgende pitch deck for en matleverings-app. Vurder hva som er bra og hva som bør forbedres.',
      solution: `**Gründerens pitch (oppsummert):**
- Slide 1: Logo og navn
- Slide 2: «Vi leverer mat raskt» (løsning)
- Slide 3: Konkurrenter (Foodora, Wolt)
- Slide 4: Vi er billigere
- Slide 5: Teamet (2 utviklere)
- Slide 6: Trenger 5 mill. kr

**Evaluering:**

**Det som mangler / bør forbedres:**
1. ❌ **Ingen problem-slide** — Hopper rett til løsning. Investoren forstår ikke HVORFOR dette trengs.
2. ❌ **Ingen markedsstørrelse** — Hvor stort er markedet? Hva er potensialet?
3. ❌ **Svak differensiering** — «Vi er billigere» er lett å kopiere. Hva er den varige fordelen?
4. ❌ **Ingen traction** — Har de kunder? Brukere? Noe som viser at det fungerer?
5. ❌ **Manglende forretningsmodell** — Hvordan tjener de penger? Hva er enhetsøkonomien?
6. ❌ **Svakt team-slide** — Kun utviklere. Hvem har forretningskompetanse? Logistikkerfaring?
7. ❌ **Uklar «Ask»** — 5 mill. kr til hva? Hvilken eierandel?

**Det som er bra:**
- Kort og visuelt (bra prinsipp)
- Viser kjennskap til konkurrenter

**Konklusjon:** Denne pitchen ville sannsynligvis ikke fått finansiering. Den trenger vesentlige forbedringer på problem, marked, differensiering og traction.`,
    },
    {
      id: 'eb2-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        task: 'Hvilken rekkefølge er mest anbefalt for de første slidene i et pitch deck?',
        options: [
          { id: 'a', text: 'Teamet → Løsningen → Problemet → Markedet', isCorrect: false },
          { id: 'b', text: 'Problemet → Løsningen → Markedet → Forretningsmodellen', isCorrect: true },
          { id: 'c', text: 'Finansiell oversikt → Problemet → Teamet → Løsningen', isCorrect: false },
          { id: 'd', text: 'Løsningen → Konkurrentene → Teamet → Problemet', isCorrect: false },
        ],
        solution: 'Den anbefalte rekkefølgen starter med problemet (for å skape engasjement), deretter løsningen (hva du tilbyr), markedet (potensialet) og forretningsmodellen (hvordan du tjener penger). Denne strukturen følger en logisk fortelling som bygger opp argumentet for hvorfor investoren bør investere.',
      },
    },
    {
      id: 'eb2-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        task: 'Hvorfor er det en «rød flagg» for investorer når en gründer sier «vi har ingen konkurrenter»?',
        options: [
          { id: 'a', text: 'Fordi alle investorer krever at bedriften har konkurrenter for å investere', isCorrect: false },
          { id: 'b', text: 'Fordi det tyder på at gründeren ikke har gjort grundig research, eller at markedet kanskje ikke eksisterer', isCorrect: true },
          { id: 'c', text: 'Fordi bedrifter uten konkurrenter aldri kan lykkes', isCorrect: false },
          { id: 'd', text: 'Fordi investorer foretrekker å investere i markeder med mange konkurrenter', isCorrect: false },
        ],
        solution: 'Når en gründer sier «vi har ingen konkurrenter», tolker investorer det som at gründeren enten ikke har gjort tilstrekkelig research, eller at markedet kanskje ikke eksisterer. Alle bedrifter har konkurrenter — direkte eller indirekte. Selv om ingen tilbyr nøyaktig det samme, finnes det alltid alternativer kunden kan velge. En god gründer kjenner konkurrentlandskapet og kan forklare hva som gjør sin løsning bedre.',
      },
    },
    {
      id: 'eb2-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-5-ex-3',
        number: '3.5.3',
        type: 'classic',
        task: 'Skriv en elevator pitch (maks 150 ord) for en selvvalgt forretningsidé. Bruk strukturen: Hook → Problem → Løsning → Differensiering → Traction → The Ask.',
        hints: ['Start med et overraskende faktum eller spørsmål for å fange oppmerksomheten', 'Husk at dette skal ta under 60 sekunder å si høyt'],
        solution: 'Eksempel: «Visste du at 40 % av all mat i norske kantiner kastes? Det er 50 000 tonn mat — og milliarder av kroner — hvert år. Vi har laget KantineSmart, en AI-drevet app som predikerer nøyaktig hvor mye mat kantinen trenger å lage hver dag, basert på vær, sesong og historiske data. I motsetning til eksisterende systemer som bare sporer svinn i etterkant, forebygger vi svinnet før det oppstår. Vi er allerede i drift hos 15 kantiner i Oslo, og har redusert matsvinnet med 35 % i snitt. Vi søker 1,5 millioner kroner for å skalere til 200 kantiner innen neste år. Kan jeg sende deg mer informasjon?» (133 ord)',
      },
    },
    {
      id: 'eb2-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        task: 'Hva bør de ti essensielle slidene i et pitch deck inneholde? List opp alle ti og skriv én setning om hva hver slide skal kommunisere.',
        hints: ['Tenk på den logiske historien fra problem til investering', 'Husk at «The Ask» alltid bør være med'],
        solution: '(1) Tittelside — bedriftens navn, logo og slagord som gir et profesjonelt førsteinntrykk. (2) Problemet — beskriv problemet konkret og relaterbart slik at investoren forstår behovet. (3) Løsningen — vis hvordan produktet/tjenesten løser problemet på en enkel og tydelig måte. (4) Markedet — vis markedsstørrelsen med TAM/SAM/SOM for å dokumentere potensialet. (5) Forretningsmodellen — forklar hvordan bedriften tjener penger og hva enhetsøkonomien er. (6) Traction — vis konkrete resultater som brukertall, omsetning eller vekstrate. (7) Teamet — presenter nøkkelpersoner med relevant kompetanse og erfaring. (8) Konkurransefortrinn — forklar hva som skiller dere fra konkurrentene og hva som beskytter posisjonen. (9) Finansiell oversikt — vis prognoser for omsetning, kostnader og resultat. (10) The Ask — si tydelig hvor mye kapital du trenger, hva den skal brukes til, og hva investoren får tilbake.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'eb2-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        task: 'Lag et komplett pitch deck-oppsett (kun titler og stikkord for hver slide) for en valgfri forretningsidé. Inkluder alle ti essensielle slides, og forklar kort hva du ville lagt vekt på i hver.',
        hints: ['Velg en idé du synes er spennende — det gjør presentasjonen bedre', 'Tenk på hva investorer vil spørre om og svar proaktivt i slidene'],
        solution: 'Eksempel for «EcoRent» — utleie av elektrisk verktøy til privatpersoner: (1) Tittel: EcoRent — Del verktøy, spar penger, kutt utslipp. (2) Problem: Nordmenn bruker i snitt 12 min/år på sin elektriske drill, men alle eier én. Dyrt og miljøskadelig. (3) Løsning: En app der naboer leier ut verktøy til hverandre — «Airbnb for verktøy». (4) Marked: 2,5 mill. husstander i Norge, verktøymarked på 8 mrd. kr. (5) Forretningsmodell: 15 % provisjon per utleie. Snittleie 200 kr = 30 kr per transaksjon. (6) Traction: 500 brukere i Oslo, 200 utleier per måned, 40 % måned-over-måned vekst. (7) Team: CEO med bakgrunn fra Finn.no, CTO med 10 års erfaring. (8) Konkurransefortrinn: Første i Norge, forsikringsavtale med Tryg, brukervennlig app. (9) Finans: Break-even ved 5 000 aktive brukere. Omsetningsprognose: 3 mill. år 1, 15 mill. år 2. (10) The Ask: Søker 4 mill. kr for 15 % — til markedsføring og utvidelse til Bergen og Trondheim.',
      },
    },
    {
      id: 'eb2-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-3-5-ex-6',
        number: '3.5.6',
        type: 'classic',
        task: 'Du har nettopp hørt en pitch fra en gründer som vil starte en abonnementstjeneste for lokalprodusert mat. Pitchen varte 15 minutter. Lag en liste med fem kritiske spørsmål du ville stilt som investor etter presentasjonen. Forklar hvorfor hvert spørsmål er viktig.',
        hints: ['Tenk på enhetøkonomi, logistikk, konkurranse og skalerbarhet', 'Investorer tester om gründeren har tenkt grundig gjennom utfordringene'],
        solution: '(1) «Hva er enhetøkonomien — koster det mer å skaffe og betjene en kunde enn det du tjener på abonnementet?» — Viktig fordi mange abonnementstjenester sliter med å bli lønnsomme per kunde. (2) «Hvordan løser dere logistikken med fersk, lokalprodusert mat — og hva skjer med kvaliteten ved skalering?» — Viktig fordi matlevering er logistikkintensivt og marginer er lave. (3) «Hva skiller dere fra Adams Matkasse, Oda og bondens marked — hvorfor velger kunden dere?» — Viktig for å forstå differensiering og fordi markedet allerede har sterke aktører. (4) «Hva er churn-raten (hvor mange slutter) de første tre månedene, og hva gjør dere for å beholde kundene?» — Viktig fordi abonnementstjenester ofte har høy frafall etter nyhetens interesse. (5) «Hvordan skalerer dere utover nærområdet — fungerer konseptet «lokalprodusert» når dere ekspanderer?» — Viktig fordi «lokalt» er en begrensning for vekst, og investorer trenger å se et skalerbart marked.',
      },
    },
    {
      id: 'eb2-3-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **pitch** er en kort, overbevisende presentasjon av en forretningsidé
- Et **pitch deck** har vanligvis 10-15 slides som følger en logisk struktur
- **Elevator pitchen** er en 30-60 sekunders versjon som fanger oppmerksomheten
- De ti essensielle slidene dekker alt fra problem og løsning til team og «The Ask»
- Vanlige feil inkluderer urealistiske prognoser, ignorerte konkurrenter og manglende «Ask»
- De beste pitchene **forteller en historie**, bruker **tall og bevis**, og er **godt øvd**

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Pitch | Kort, overbevisende presentasjon av forretningsidé |
| Pitch deck | Visuell presentasjon (slides) som støtter pitchen |
| Elevator pitch | 30-60 sekunders versjon av pitchen |
| The Ask | Tydelig forespørsel om kapital, samarbeid eller annet |
| TAM/SAM/SOM | Markedsstørrelser: totalt, tilgjengelig, oppnåelig |
| Traction | Bevis på at forretningen fungerer (kunder, omsetning, vekst) |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksporter alle kapitler i del 3
// ============================================================================

export const ENTREBED_2_DEL3_CHAPTERS = [
  CHAPTER_ENTREBED_2_3_1,
  CHAPTER_ENTREBED_2_3_2,
  CHAPTER_ENTREBED_2_3_3,
  CHAPTER_ENTREBED_2_3_4,
  CHAPTER_ENTREBED_2_3_5,
];
