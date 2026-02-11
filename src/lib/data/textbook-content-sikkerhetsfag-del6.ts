/* eslint-disable */
// @ts-nocheck
/**
 * Sikkerhetsfag VG2/VG3 - Del 6: HMS og arbeidsmiljo
 * Kapittel 6.1-6.5
 *
 * Dekker LK20 kompetansemaal:
 * - gjore rede for gjeldende regelverk og krav til HMS i sikkerhetsbransjen
 * - planlegge og gjennomfore arbeid i trad med arbeidsmiljoloven
 * - vurdere risiko og gjennomfore forstehjelp ved skader og akutte situasjoner
 * - gjore rede for ergonomiske prinsipper og forebygging av belastningsskader
 * - reflektere over psykososialt arbeidsmiljo og handtering av konflikter
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: HMS-systemet
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_6_1: TextbookChapter = {
  id: 'sikkerhetsfag-6-1',
  courseId: 'sikkerhetsfag',
  chapterNumber: '6.1',
  title: 'HMS-systemet',
  description: 'En grundig innforing i internkontrollforskriften og systematisk HMS-arbeid. Du larer om hva HMS-systemet innebarer, hvordan det skal organiseres og hvorfor det er sentralt i sikkerhetsbransjen.',
  estimatedMinutes: 20,
  competenceGoals: ['gjore rede for gjeldende regelverk og krav til HMS i sikkerhetsbransjen'],
  content: [
    {
      id: 'sik-6-1-intro',
      type: 'text',
      content: `## Hva er HMS?

HMS star for helse, miljo og sikkerhet. I Norge er alle virksomheter palagt a arbeide systematisk med HMS for a sikre at arbeidstakerne har et trygt og forsvarlig arbeidsmiljo. For sikkerhetsbransjen er dette spesielt viktig, fordi vaktere og sikkerhetsarbeidere ofte opererer i situasjoner som innebarer risiko for bade dem selv og andre.

HMS-arbeidet er ikke bare et lovkrav. Det er ogsa et verktoy for a forebygge skader, sykdom og uonsket hendelser pa arbeidsplassen. Et godt HMS-system bidrar til:
- Tryggere arbeidshverdag for alle ansatte
- Lavere sykefravoer og faerre arbeidsulykker
- Bedre omdomme for virksomheten
- Overholdelse av lover og forskrifter`,
    },
    {
      id: 'sik-6-1-def-1',
      type: 'definition',
      title: 'HMS',
      content: `**HMS (helse, miljo og sikkerhet)** er en samlebetegnelse for det systematiske arbeidet med a ivareta arbeidstakernes fysiske og psykiske helse, det ytre miljoet og sikkerheten pa arbeidsplassen. HMS-arbeidet skal vare en integrert del av virksomhetens daglige drift.`,
    },
    {
      id: 'sik-6-1-text-1',
      type: 'text',
      content: `### Internkontrollforskriften

Internkontrollforskriften (forskrift om systematisk helse-, miljo- og sikkerhetsarbeid i virksomheter) ble innfort i 1997 og er det viktigste regelverket for HMS-arbeid i Norge. Forskriften gjelder for alle virksomheter som sysselsetter arbeidstakere.

Internkontrollforskriften krever at virksomheten skal:

1. **Sorge for at lover og forskrifter folges** - virksomheten ma ha oversikt over hvilke krav som gjelder
2. **Sorge for at arbeidstakerne medvirker** - de ansatte skal involveres i HMS-arbeidet
3. **Fastsette mal for HMS-arbeidet** - klare og malbare mal
4. **Ha oversikt over organisasjonen** - ansvar og oppgaver skal vare fordelt
5. **Kartlegge farer og risikoforhold** - systematisk identifisering av risiko
6. **Utarbeide planer og tiltak** - handlingsplaner for a redusere risiko
7. **Iverksette rutiner** - for a avdekke, rette opp og forebygge overtredelser
8. **Foreta systematisk overvakning** - kontrollere at internkontrollen fungerer`,
    },
    {
      id: 'sik-6-1-def-2',
      type: 'definition',
      title: 'Internkontroll',
      content: `**Internkontroll** er systematiske tiltak som virksomheten iverksetter for a sikre at aktivitetene planlegges, organiseres, utfores, vedlikeholdes og kvalitetssikres i samsvar med krav fastsatt i helse-, miljo- og sikkerhetslovgivningen.`,
    },
    {
      id: 'sik-6-1-text-2',
      type: 'text',
      content: `### Systematisk HMS-arbeid i praksis

Systematisk HMS-arbeid folger en sirkulaer prosess som ofte kalles PDCA-syklusen (Plan-Do-Check-Act):

**Planlegge (Plan)**
- Kartlegge farer og vurdere risiko
- Sette mal for HMS-arbeidet
- Lage handlingsplaner med ansvarlige og frister

**Gjennomfore (Do)**
- Iverksette tiltakene i handlingsplanen
- Gjennomfore opplaring av ansatte
- Folge etablerte prosedyrer og rutiner

**Kontrollere (Check)**
- Gjennomfore vernerunder og inspeksjoner
- Registrere avvik og uonskede hendelser
- Male resultater opp mot fastsatte mal

**Forbedre (Act)**
- Analysere avvik og finne arsaker
- Iverksette korrigerende tiltak
- Oppdatere prosedyrer og rutiner`,
    },
    {
      id: 'sik-6-1-example-1',
      type: 'example',
      title: 'HMS-arbeid i et vaktselskap',
      content: `Et vaktselskap gjennomforer sin arlige HMS-gjennomgang. De starter med en risikovurdering av alle arbeidsoppgaver. Under kartleggingen identifiserer de flere risikoer:

- Vaktere som jobber alene om natten har okt risiko for vold
- Manglende opplaring i konflikthandtering
- Darllige lysforhold ved enkelte patruljeruter

Selskapet lager en handlingsplan:
1. Innfore krav om at vaktere alltid skal ga i par pa nattevakt (frist: 1 maned)
2. Gjennomfore kurs i konflikthandtering for alle ansatte (frist: 3 maneder)
3. Installere ekstra belysning langs patruljerutene (frist: 2 maneder)

Etter tre maneder gjennomforer de en evaluering og finner at antall hendelser med trusler har gatt ned med 40 prosent.`,
    },
    {
      id: 'sik-6-1-text-3',
      type: 'text',
      content: `### HMS-dokumentasjon

Internkontrollforskriften krever at deler av HMS-arbeidet dokumenteres skriftlig. Denne dokumentasjonen skal vare tilgjengelig for ansatte og tilsynsmyndigheter. Typisk HMS-dokumentasjon inkluderer:

- **Organisasjonskart** med fordeling av ansvar
- **Risikovurderinger** med tilhorende handlingsplaner
- **Rutiner og prosedyrer** for ulike arbeidsoppgaver
- **Avviksregistreringer** og oppfolging av disse
- **Opplaeringsplaner** og dokumentasjon pa gjennomfort opplaring
- **Referat fra vernerunder** og HMS-moter
- **Oversikt over lover og forskrifter** som gjelder for virksomheten

For sikkerhetsbransjen er det i tillegg viktig a dokumentere:
- Vaktinstrukser og ordregivning
- Rapporter fra hendelser og uonskede situasjoner
- Opplaring i bruk av maktmidler og selvforsvar
- Gjennomforte ovelser og beredskapsplaner`,
    },
    {
      id: 'sik-6-1-text-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lart:

- **HMS** star for helse, miljo og sikkerhet og omfatter systematisk arbeid for et trygt arbeidsmiljo
- **Internkontrollforskriften** palegger alle virksomheter a arbeide systematisk med HMS
- **PDCA-syklusen** (planlegge, gjennomfore, kontrollere, forbedre) er grunnlaget for systematisk HMS-arbeid
- **Dokumentasjon** av HMS-arbeidet er et lovkrav og ma vare tilgjengelig for ansatte og tilsynsmyndigheter
- Sikkerhetsbransjen har spesielle krav til HMS-dokumentasjon knyttet til vakthold og beredskap

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| HMS | Helse, miljo og sikkerhet |
| Internkontrollforskriften | Forskrift om systematisk HMS-arbeid |
| PDCA-syklusen | Planlegge, gjennomfore, kontrollere, forbedre |
| Risikovurdering | Systematisk identifisering og vurdering av farer |
| Avvik | Hendelse eller tilstand som bryter med fastsatte krav |`,
    },
    {
      id: 'sik-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-6-1-ex-1',
        number: '6.1.1',
        type: 'multiple-choice',
        task: 'Hva star forkortelsen HMS for?',
        options: [
          { id: 'a', text: 'Hovedmiljo og sikkerhetssystem', isCorrect: false },
          { id: 'b', text: 'Helse, miljo og sikkerhet', isCorrect: true },
          { id: 'c', text: 'Handbok for miljo og sikring', isCorrect: false },
          { id: 'd', text: 'Helhetlig miljo- og sikkerhetsarbeid', isCorrect: false },
        ],
        solution: 'Riktig svar er B. HMS star for helse, miljo og sikkerhet, og er en samlebetegnelse for systematisk arbeid med a ivareta arbeidstakernes helse, det ytre miljoet og sikkerheten pa arbeidsplassen.',
      },
    },
    {
      id: 'sik-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-6-1-ex-2',
        number: '6.1.2',
        type: 'multiple-choice',
        task: 'Hva er riktig rekkefolge pa trinnene i PDCA-syklusen?',
        options: [
          { id: 'a', text: 'Kontrollere, planlegge, forbedre, gjennomfore', isCorrect: false },
          { id: 'b', text: 'Gjennomfore, kontrollere, planlegge, forbedre', isCorrect: false },
          { id: 'c', text: 'Planlegge, gjennomfore, kontrollere, forbedre', isCorrect: true },
          { id: 'd', text: 'Forbedre, planlegge, gjennomfore, kontrollere', isCorrect: false },
        ],
        solution: 'Riktig svar er C. PDCA-syklusen star for Plan (planlegge), Do (gjennomfore), Check (kontrollere) og Act (forbedre). Denne rekkefolgene sikrer at HMS-arbeidet er systematisk og kontinuerlig.',
      },
    },
    {
      id: 'sik-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-6-1-ex-3',
        number: '6.1.3',
        type: 'classic',
        task: 'Forklar hva internkontrollforskriften er, og nevn minst fire av kravene den stiller til virksomheter.',
        hints: ['Tenk pa de atte punktene som forskriften krever', 'Husk at bade kartlegging, planlegging og oppfolging er sentralt'],
        solution: 'Internkontrollforskriften er en forskrift som palegger alle virksomheter a arbeide systematisk med helse, miljo og sikkerhet. Den krever blant annet at virksomheten skal: 1) sorge for at lover og forskrifter folges, 2) sorge for at arbeidstakerne medvirker, 3) fastsette mal for HMS-arbeidet, 4) kartlegge farer og risikoforhold, 5) utarbeide planer og tiltak, 6) iverksette rutiner for a avdekke og forebygge overtredelser, 7) foreta systematisk overvakning av internkontrollen.',
      },
    },
    {
      id: 'sik-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-6-1-ex-4',
        number: '6.1.4',
        type: 'classic',
        task: 'Et vaktselskap oppdager at flere vektere har rapportert om trusler fra personer de har bortvist fra et kjopesenter. Beskriv hvordan selskapet bor handtere dette gjennom systematisk HMS-arbeid.',
        hints: ['Bruk PDCA-syklusen som ramme', 'Tenk pa bade forebyggende og korrigerende tiltak'],
        solution: 'Selskapet bor folge PDCA-syklusen: Planlegge - kartlegge omfanget av problemet gjennom gjennomgang av rapporter, identifisere arsaker og vurdere risiko. Gjennomfore - iverksette tiltak som ekstra opplaring i konflikthandtering, innfore rutine for sampatruljering, forbedre kommunikasjonsutstyret. Kontrollere - folge med pa om antall trusler gar ned, gjennomfore jevnlige samtaler med vekterne. Forbedre - justere tiltakene basert pa resultater og erfaringer.',
      },
    },
    {
      id: 'sik-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-6-1-ex-5',
        number: '6.1.5',
        type: 'classic',
        task: 'Hva slags HMS-dokumentasjon er det spesielt viktig at en virksomhet i sikkerhetsbransjen har?',
        hints: ['Tenk pa hva som er spesielt for sikkerhetsbransjen sammenliknet med andre bransjer'],
        solution: 'I sikkerhetsbransjen er det spesielt viktig a ha dokumentasjon pa: vaktinstrukser og ordregivning, rapporter fra hendelser og uonskede situasjoner, opplaring i bruk av maktmidler og selvforsvar, gjennomforte ovelser og beredskapsplaner. I tillegg gjelder de generelle kravene om organisasjonskart, risikovurderinger, rutiner og prosedyrer, avviksregistreringer og opplaeringsplaner.',
      },
    },
    {
      id: 'sik-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-6-1-ex-6',
        number: '6.1.6',
        type: 'classic',
        task: 'Gjor rede for hvorfor systematisk HMS-arbeid er viktig for en virksomhet i sikkerhetsbransjen. Begrunn svaret med minst tre argumenter.',
        hints: ['Tenk pa bade lovkrav, okonomi og arbeidsmiljo', 'Hva skjer dersom HMS-arbeidet ikke er pa plass?'],
        solution: 'Systematisk HMS-arbeid er viktig fordi: 1) Det er et lovkrav gjennom internkontrollforskriften - brudd kan fore til sanksjoner og tap av kontrakter. 2) Det forebygger skader og sykdom - vektere jobber ofte i risikoutsatte situasjoner, og godt HMS-arbeid reduserer sjansen for at noe gar galt. 3) Det senker sykefravaret - et trygt arbeidsmiljo gir mindre fravare og bedre okonomi. 4) Det styrker virksomhetens omdomme - kunder og oppdragsgivere forventer at sikkerhetsselskaper har gode HMS-rutiner. 5) Det bidrar til bedre trivsel og lavere turnover blant ansatte.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2: Arbeidsmiljoloven
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_6_2: TextbookChapter = {
  id: 'sikkerhetsfag-6-2',
  courseId: 'sikkerhetsfag',
  chapterNumber: '6.2',
  title: 'Arbeidsmiljoloven',
  description: 'Arbeidsmiljoloven er den viktigste loven for a beskytte arbeidstakernes rettigheter og sikre et forsvarlig arbeidsmiljo. Du larer om lovens formol, rettigheter, plikter, verneombudets rolle og arbeidsmiljoutvalget (AMU).',
  estimatedMinutes: 20,
  competenceGoals: ['planlegge og gjennomfore arbeid i trad med arbeidsmiljoloven'],
  content: [
    {
      id: 'sik-6-2-intro',
      type: 'text',
      content: `## Arbeidsmiljoloven - grunnmuren i norsk arbeidsliv

Arbeidsmiljoloven (lov om arbeidsmiljo, arbeidstid og stillingsvern) er den viktigste loven for regulering av arbeidsforhold i Norge. Loven gjelder for alle virksomheter som sysselsetter arbeidstakere, og den setter rammene for hvordan arbeidet skal organiseres og utfores.

Lovens formol er a:
- Sikre et arbeidsmiljo som gir grunnlag for en helsefremmende og meningsfylt arbeidssituasjon
- Gi full trygghet mot fysiske og psykiske skadevirkninger
- Sikre trygge ansettelsesforhold og likebehandling
- Legge til rette for tilpasninger i arbeidsforholdet
- Bidra til et inkluderende arbeidsliv`,
    },
    {
      id: 'sik-6-2-def-1',
      type: 'definition',
      title: 'Arbeidsmiljoloven',
      content: `**Arbeidsmiljoloven** er den sentrale loven som regulerer arbeidsforhold i Norge. Den fastsetter krav til arbeidsmiljoet, arbeidstiden, stillingsvern og medvirkning, og gjelder for alle virksomheter med arbeidstakere.`,
    },
    {
      id: 'sik-6-2-text-1',
      type: 'text',
      content: `### Arbeidsgivers plikter

Arbeidsgiver har hovedansvaret for at arbeidsmiljolovens krav oppfylles. De viktigste pliktene er:

**Generelle plikter:**
- Sorge for at arbeidsmiljoet er fullt forsvarlig
- Gjennomfore systematisk HMS-arbeid (internkontroll)
- Gi arbeidstakerne nodvendig opplaring og instruksjon
- Sorge for at arbeidsutstyr er forsvarlig og i god stand

**Spesielle plikter for sikkerhetsbransjen:**
- Sikre at vektere har tilstrekkelig opplaring for oppgavene de skal utfore
- Vurdere risikoen ved hvert enkelt oppdrag
- Sorge for egnet verneutstyr og kommunikasjonsutstyr
- Ha rutiner for alenearbeid og handtering av vold og trusler

### Arbeidstakers plikter

Ogsa arbeidstakerne har plikter etter arbeidsmiljoloven:
- Medvirke til gjennomforing av HMS-tiltak
- Bruke paplagt verneutstyr
- Melde fra om farer og mangler til arbeidsgiver
- Avbryte arbeidet dersom det er fare for liv og helse
- Folge instrukser og rutiner som er fastsatt`,
    },
    {
      id: 'sik-6-2-text-2',
      type: 'text',
      content: `### Verneombudet

Alle virksomheter med minst ti ansatte skal ha verneombud. Verneombudet er arbeidstakernes representant i HMS-sporsmol og har en svart viktig rolle i a sikre et godt arbeidsmiljo.

**Verneombudets oppgaver:**
- Paose at virksomheten ivaretar arbeidstakernes sikkerhet og helse
- Se til at arbeidet utfores pa en forsvarlig mate
- Delta i planlegging og gjennomforing av HMS-tiltak
- Gjennomfore vernerunder og inspeksjoner
- Melde fra om farlige forhold til arbeidsgiver

**Verneombudets rettigheter:**
- Rett til a stanse arbeid som utgjor umiddelbar fare for liv og helse (stansingsretten)
- Rett til nodvendig opplaring for a utfore vervet
- Rett til a bruke den tiden som trengs for a utfore vervet
- Vern mot gjengjeldelse for a ha utfort verneoppgaver`,
    },
    {
      id: 'sik-6-2-def-2',
      type: 'definition',
      title: 'Verneombud',
      content: `**Verneombudet** er arbeidstakernes representant i sporsmol som angal arbeidsmiljoet. Verneombudet velges av og blant de ansatte for en periode pa to ar, og skal ivareta arbeidstakernes interesser i saker som angol helse, miljo og sikkerhet.`,
    },
    {
      id: 'sik-6-2-text-3',
      type: 'text',
      content: `### Arbeidsmiljoutvalget (AMU)

Virksomheter med minst 50 ansatte skal ha et arbeidsmiljoutvalg (AMU). Dersom en av partene krever det, skal det ogsa opprettes AMU i virksomheter med mellom 20 og 50 ansatte.

**AMU bestar av:**
- Like mange representanter fra arbeidsgiver- og arbeidstakersiden
- Bedriftslege (dersom virksomheten har bedriftshelsetjeneste)
- Verneombudet er som regel representant for arbeidstakerne

**AMU sine oppgaver:**
- Behandle sporsmol om bedriftshelsetjeneste og internkontroll
- Gjennomga rapporter om yrkessykdommer, arbeidsulykker og tillopp til ulykker
- Behandle planer som kan fa betydning for arbeidsmiljoet
- Uttale seg om HMS-relaterte saker for beslutninger fattes
- Gjennomga resultatene fra arbeidsmiljokartlegginger

I sikkerhetsbransjen behandler AMU ofte saker knyttet til:
- Vold og trusler mot ansatte
- Arbeidstidsordninger og nattarbeid
- Opplaring og beredskap
- Psykisk belastning ved krevende oppdrag`,
    },
    {
      id: 'sik-6-2-example-1',
      type: 'example',
      title: 'Verneombudets stansingsrett',
      content: `En vekter skal utfore nattvakt alene pa et stort industriomrade. Ved ankomst oppdager verneombudet at det eksterne belysningssystemet er ute av drift, og at kommunikasjonsradioen har dod batteri uten mulighet for lading.

Verneombudet vurderer at det er umiddelbar fare for liv og helse a gjennomfore vaktoppdraget under disse forholdene, og benytter seg av stansingsretten. Arbeidet stanses til belysningen er reparert og det er sikret fungerende kommunikasjonsutstyr.

Arbeidsgiver kan ikke straffe verneombudet for denne beslutningen, selv om det medforer kostnader og forsinkelser.`,
    },
    {
      id: 'sik-6-2-text-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lart:

- **Arbeidsmiljoloven** er den viktigste loven for regulering av arbeidsforhold i Norge
- **Arbeidsgiver** har hovedansvaret for et forsvarlig arbeidsmiljo
- **Arbeidstaker** har plikt til a medvirke og melde fra om farer
- **Verneombudet** er arbeidstakernes representant og har rett til a stanse farlig arbeid
- **AMU** er et samarbeidsorgan mellom arbeidsgiver og arbeidstaker i storrelsmessig storre virksomheter

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Arbeidsmiljoloven | Sentral lov for regulering av arbeidsforhold |
| Verneombud | Arbeidstakernes HMS-representant |
| AMU | Arbeidsmiljoutvalg - samarbeidsorgan for HMS |
| Stansingsretten | Verneombudets rett til a stanse farlig arbeid |
| Internkontroll | Systematisk HMS-arbeid i virksomheten |`,
    },
    {
      id: 'sik-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-6-2-ex-1',
        number: '6.2.1',
        type: 'multiple-choice',
        task: 'Hvor mange ansatte ma en virksomhet ha for at det er palagt a ha verneombud?',
        options: [
          { id: 'a', text: '5 ansatte', isCorrect: false },
          { id: 'b', text: '10 ansatte', isCorrect: true },
          { id: 'c', text: '20 ansatte', isCorrect: false },
          { id: 'd', text: '50 ansatte', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Alle virksomheter med minst 10 ansatte skal ha verneombud. For virksomheter med faerre enn 10 ansatte kan partene avtale en annen ordning.',
      },
    },
    {
      id: 'sik-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-6-2-ex-2',
        number: '6.2.2',
        type: 'multiple-choice',
        task: 'Hva innebarer verneombudets stansingsrett?',
        options: [
          { id: 'a', text: 'Retten til a si opp ansatte som bryter sikkerhetsregler', isCorrect: false },
          { id: 'b', text: 'Retten til a stanse arbeid som utgjor umiddelbar fare for liv og helse', isCorrect: true },
          { id: 'c', text: 'Retten til a stoppe all produksjon for vernerunde', isCorrect: false },
          { id: 'd', text: 'Retten til a nekte overtidsarbeid pa vegne av de ansatte', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Stansingsretten gir verneombudet myndighet til a stanse arbeid dersom det foreligger umiddelbar fare for arbeidstakernes liv eller helse, og faren ikke kan avverges pa annen mate.',
      },
    },
    {
      id: 'sik-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-6-2-ex-3',
        number: '6.2.3',
        type: 'classic',
        task: 'Gjor rede for arbeidsgivers viktigste plikter etter arbeidsmiljoloven, og forklar hvordan disse pliktene er spesielt relevante for sikkerhetsbransjen.',
        hints: ['Tenk pa bade generelle plikter og bransjespesifikke krav', 'Hva gjor sikkerhetsbransjen spesiell sammenliknet med andre bransjer?'],
        solution: 'Arbeidsgiver har plikt til a sorge for et fullt forsvarlig arbeidsmiljo, gjennomfore systematisk HMS-arbeid, gi tilstrekkelig opplaring og sikre at arbeidsutstyr er i god stand. I sikkerhetsbransjen er dette spesielt relevant fordi: vektere jobber i risikoutsatte miljoer (opplaring i konflikthandtering og selvforsvar), de ofte arbeider alene om natten (rutiner for alenearbeid), de kan utsettes for vold og trusler (verneutstyr og kommunikasjonsutstyr), og de trenger spesiell kompetanse for ulike oppdragstyper (risikovurdering av hvert oppdrag).',
      },
    },
    {
      id: 'sik-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-6-2-ex-4',
        number: '6.2.4',
        type: 'classic',
        task: 'Forklar hva arbeidsmiljoutvalget (AMU) er, hvem som sitter i utvalget, og hvilke saker det behandler.',
        hints: ['Tenk pa sammensetningen av utvalget', 'Hvilke typer saker er spesielt aktuelle i sikkerhetsbransjen?'],
        solution: 'AMU er et samarbeidsorgan som skal opprettes i virksomheter med minst 50 ansatte (eller 20-50 dersom en part krever det). Utvalget bestar av like mange representanter fra arbeidsgiver- og arbeidstakersiden, og verneombudet er som regel med. AMU behandler saker som bedriftshelsetjeneste, internkontroll, rapporter om arbeidsulykker og yrkessykdommer, planer som pavirker arbeidsmiljoet og HMS-kartlegginger. I sikkerhetsbransjen er saker som vold og trusler, arbeidstidsordninger, opplaring og psykisk belastning spesielt aktuelle.',
      },
    },
    {
      id: 'sik-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-6-2-ex-5',
        number: '6.2.5',
        type: 'classic',
        task: 'En vekter oppdager at brannslukningsapparatet pa arbeidsplassen er utlopt. Hvilke plikter har arbeidstakeren i denne situasjonen iffolge arbeidsmiljoloven?',
        hints: ['Tenk pa meldeplikten og medvirkningsplikten'],
        solution: 'Arbeidstaker har plikt til a melde fra om farer og mangler til arbeidsgiver. Vekteren skal umiddelbart varsle sin naermeste leder om at brannslukningsapparatet er utlopt. I tillegg har arbeidstaker plikt til a medvirke til gjennomforing av HMS-tiltak. Det betyr at vekteren bor dokumentere funnet, for eksempel ved a skrive en avviksmelding, og folge opp at mangelen blir utbedret.',
      },
    },
    {
      id: 'sik-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-6-2-ex-6',
        number: '6.2.6',
        type: 'classic',
        task: 'Diskuter hvorfor arbeidsmiljoloven legger vekt pa at bade arbeidsgiver og arbeidstaker har plikter. Hva hadde skjedd dersom bare en av partene hadde hatt ansvar?',
        hints: ['Tenk pa samspillet mellom arbeidsgiver og arbeidstaker', 'Hva skjer om bare arbeidsgiver har ansvar?'],
        solution: 'Arbeidsmiljoloven legger vekt pa gjensidige plikter fordi et godt arbeidsmiljo krever samarbeid. Dersom bare arbeidsgiver hadde hatt ansvar, ville arbeidstakere kunnet ignorere sikkerhetsrutiner uten konsekvenser, noe som undergraver HMS-arbeidet. Dersom bare arbeidstaker hadde hatt ansvar, ville arbeidsgiver kunnet spare penger pa sikkerhetsutstyr og opplaring. Det gjensidige ansvaret sikrer at bade systemer og atferd bidrar til et trygt arbeidsmiljo.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.3: Forstehjelp
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_6_3: TextbookChapter = {
  id: 'sikkerhetsfag-6-3',
  courseId: 'sikkerhetsfag',
  chapterNumber: '6.3',
  title: 'Forstehjelp',
  description: 'Grunnleggende forstehjelp for sikkerhetsarbeidere. Du larer om DHLR-protokollen, hjerte-lunge-redning (HLR), handtering av vanlige skader og gjenkjenning av sjokk.',
  estimatedMinutes: 20,
  competenceGoals: ['vurdere risiko og gjennomfore forstehjelp ved skader og akutte situasjoner'],
  content: [
    {
      id: 'sik-6-3-intro',
      type: 'text',
      content: `## Forstehjelp i sikkerhetsbransjen

Som vekter eller sikkerhetsarbeider er du ofte den forste som ankommer en ulykkessite eller akutt hendelse. Evnen til a yte effektiv forstehjelp kan vaere forskjellen mellom liv og dod. Alle som jobber i sikkerhetsbransjen bor ha grunnleggende forstehjelpskompetanse og holde denne oppdatert gjennom regelmessig oving.

I dette kapittelet laerer du:
- DHLR-protokollen for systematisk tilnarming til akutte situasjoner
- Hjerte-lunge-redning (HLR) og bruk av hjertestarter
- Handtering av vanlige skadetyper
- Gjenkjenning og behandling av sjokk`,
    },
    {
      id: 'sik-6-3-def-1',
      type: 'definition',
      title: 'DHLR',
      content: `**DHLR** er en forkortelse for en systematisk tilnarming til livlose personer: **D** = Danner du deg et overblikk (sikkerhet og situasjon), **H** = Har personen fri luftvei, **L** = Livstegn (puster personen normalt?), **R** = Ring 113 og start HLR.`,
    },
    {
      id: 'sik-6-3-text-1',
      type: 'text',
      content: `### DHLR-protokollen i detalj

Nar du ankommer en situasjon der en person er bevisstlos eller du mistenker hjertestans, folger du DHLR:

**D - Danner du deg et overblikk**
- Er det trygt a naerme seg? (trafikk, brann, farlige stoffer)
- Hva har skjedd? (fall, slag, sykdom)
- Hvor mange er skadet?
- Rop pa hjelp fra tilskuere

**H - Har personen fri luftvei**
- Bakkhodet forsiktig bakover og loft haken (bakoverleie av hodet)
- Sjekk om det er noe som blokkerer luftveien (mat, blod, fremmedlegemer)
- Fjern synlige hindringer i munnen

**L - Livstegn**
- Se, lytt og kjen etter pusting i inntil 10 sekunder
- Se om brystkassen hever og senker seg
- Kjen etter luft fra munn og nese
- Unormale gisp (agonal pust) regnes IKKE som normal pusting

**R - Ring 113 og start HLR**
- Ring 113 umiddelbart (eller be noen andre gjore det)
- Start hjerte-lunge-redning med 30 brystkompresjoner etterfulgt av 2 innblasninger
- Fortsett til helsepersonell overtar eller personen viser tydelige livstegn`,
    },
    {
      id: 'sik-6-3-text-2',
      type: 'text',
      content: `### Hjerte-lunge-redning (HLR)

HLR er den viktigste forstehjelpen du kan gi til en person med hjertestans. Riktig utfort HLR kan doble eller tredoble sjansen for overlevelse.

**Brystkompresjoner:**
- Legg handen midt pa brystet (pa nedre halvdel av brystbeinet)
- Legg den andre handen opppa og flett fingrene sammen
- Hold armene rette og komprimer 5-6 cm dypt
- Frekvens: 100-120 kompresjoner per minutt
- La brystkassen komme helt tilbake mellom kompresjonene

**Innblasninger:**
- Bakkhodet forsiktig bakover og loft haken
- Klem igjen nesen
- Pust jevnt inn i munnen i cirka ett sekund
- Se at brystkassen hever seg
- Gi to innblasninger, deretter tilbake til kompresjoner

**Forholdet er 30:2** - 30 kompresjoner etterfulgt av 2 innblasninger.

**Hjertestarter (AED):**
Dersom en hjertestarter er tilgjengelig, skal den brukes sa raskt som mulig. Hjertestarteren gir deg muntlige instruksjoner:
1. Skru pa apparatet
2. Fest elektrodene pa bar brystkasse (som vist pa elektrodene)
3. Folg instruksjonene fra maskinen
4. Fortsett HLR mellom eventuelle stot`,
    },
    {
      id: 'sik-6-3-def-2',
      type: 'definition',
      title: 'HLR',
      content: `**HLR (hjerte-lunge-redning)** er en livreddende teknikk som bestar av brystkompresjoner og innblasninger. Formalet er a opprettholde blodstrommen til hjernen og andre vitale organer nar hjertet har stoppet. Standard HLR for voksne utfores med forholdet 30 kompresjoner til 2 innblasninger.`,
    },
    {
      id: 'sik-6-3-text-3',
      type: 'text',
      content: `### Vanlige skadetyper

**Blodninger:**
- *Ytre blodninger:* Legg trykk pa saret med rent torklae eller bandasje. Hold trykket til blodningen stopper. Ved kraftig blodning, legg en trykkbandasje.
- *Arterielle blodninger:* Blodet spruter i takt med pulsen. Ring 113 umiddelbart og hold hardt trykk pa saret.
- *Indre blodninger:* Mistank ved smerter, hovelse og sjokktegn etter traume. Ring 113.

**Bruddskader:**
- Ikke forsok a rette ut bruddet
- Stabiliser den skadede kroppsdelen i den stillingen den er i
- Legg is eller kulde for a redusere hovelse
- Hold den skadede kroppsdelen i ro
- Ring 113 ved mistanke om rygg- eller nakkeskade

**Brannskader:**
- Kjol ned med rennende lunkent vann i minst 20 minutter
- Ikke fjern klar som sitter fast i saret
- Ikke spretts blemmer
- Dekk til med ren, fuktig bandasje
- Sak legehjelp ved storre brannskader eller brannskader i ansikt, hender eller rundt ledd`,
    },
    {
      id: 'sik-6-3-text-4',
      type: 'text',
      content: `### Sjokk

Sjokk er en livstruende tilstand som oppstar nar kroppen ikke far nok blod og oksygen til de vitale organene. Det kan utvikle seg etter alvorlige skader, store blodninger, allergiske reaksjoner eller infeksjoner.

**Tegn pa sjokk:**
- Blek, kald og klam hud
- Rask og svak puls
- Rask og overfladisk pusting
- Forvirring eller nedsatt bevissthet
- Torste og kvalme
- Uro og engstelse

**Forstehjelp ved sjokk:**
1. Ring 113 umiddelbart
2. Legg personen ned med bena hevet (sjokk-leie) - med mindre det er hodeskade eller pustevansker
3. Stans eventuell ytre blodning
4. Hold personen varm med tepper eller jakker
5. Ikke gi mat eller drikke
6. Snakk rolig og beroligende til personen
7. Overoak pust og bevissthet kontinuerlig`,
    },
    {
      id: 'sik-6-3-example-1',
      type: 'example',
      title: 'Forstehjelp pa vakt',
      content: `En vekter pa nattevakt ved et kjopesenter finner en person liggende bevisstlos pa parkeringsplassen. Slik gar vekteren frem:

**D - Overblikk:** Vekteren sjekker at omradet er trygt (ingen biler i bevegelse, ingen andre farer). Det ser ut som personen har falt.

**H - Fri luftvei:** Vekteren legger hodet i bakoverleie og sjekker munnen for fremmedlegemer. Luftveien er fri.

**L - Livstegn:** Vekteren ser, lytter og kjenner etter pust i 10 sekunder. Personen puster ikke normalt - bare noen fa uregelmessige gisp.

**R - Ring og start HLR:** Vekteren ber en kollega ringe 113 og hente hjertestarteren som henger i resepsjonen. Vekteren starter umiddelbart med brystkompresjoner: 30 kompresjoner, 2 innblasninger. Nar hjertestarteren ankommer, festes elektrodene og maskinen analyserer hjerterytmen. Maskinen anbefaler stot, som avgis. Vekteren fortsetter HLR til ambulansen ankommer etter 8 minutter.`,
    },
    {
      id: 'sik-6-3-text-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lart:

- **DHLR** er en systematisk tilnarming til livlose personer: Danne overblikk, sjekke Hode/luftvei, se etter Livstegn, Ringe 113 og starte HLR
- **HLR** utfores med 30 brystkompresjoner og 2 innblasninger, med en frekvens pa 100-120 kompresjoner per minutt
- **Hjertestarter (AED)** bor brukes sa raskt som mulig og gir muntlige instruksjoner
- **Blodninger, brudd og brannskader** krever ulik forstehjelp
- **Sjokk** er en livstruende tilstand som krever umiddelbar handling

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| DHLR | Systematisk sjekkliste for livlose personer |
| HLR | Hjerte-lunge-redning med kompresjoner og innblasninger |
| AED | Automatisk ekstern defibrillator (hjertestarter) |
| Sjokk | Livstruende tilstand med utilstrekkelig blodsirkulasjon |
| Agonal pust | Unormale gisp som ikke regnes som normal pusting |`,
    },
    {
      id: 'sik-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-6-3-ex-1',
        number: '6.3.1',
        type: 'multiple-choice',
        task: 'Hva star bokstavene i DHLR for?',
        options: [
          { id: 'a', text: 'Dod, Hjertet, Lungene, Ringvei', isCorrect: false },
          { id: 'b', text: 'Danne overblikk, Hode/luftvei, Livstegn, Ring 113 og start HLR', isCorrect: true },
          { id: 'c', text: 'Danne overblikk, Handtere skader, Legge i stabilt sideleie, Ringe palarorende', isCorrect: false },
          { id: 'd', text: 'Diagnostisere, Hjelpe, Lindre, Rehabilitere', isCorrect: false },
        ],
        solution: 'Riktig svar er B. DHLR star for: D = Danner du deg et overblikk, H = Har personen fri luftvei, L = Livstegn (puster personen normalt?), R = Ring 113 og start HLR.',
      },
    },
    {
      id: 'sik-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-6-3-ex-2',
        number: '6.3.2',
        type: 'multiple-choice',
        task: 'Hva er riktig forhold mellom brystkompresjoner og innblasninger ved HLR pa voksne?',
        options: [
          { id: 'a', text: '15 kompresjoner og 2 innblasninger', isCorrect: false },
          { id: 'b', text: '30 kompresjoner og 1 innblasning', isCorrect: false },
          { id: 'c', text: '30 kompresjoner og 2 innblasninger', isCorrect: true },
          { id: 'd', text: '20 kompresjoner og 3 innblasninger', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Standard HLR for voksne utfores med 30 brystkompresjoner etterfulgt av 2 innblasninger. Kompresjonene skal vaere 5-6 cm dype med en frekvens pa 100-120 per minutt.',
      },
    },
    {
      id: 'sik-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-6-3-ex-3',
        number: '6.3.3',
        type: 'classic',
        task: 'Beskriv trinn for trinn hva du gjor dersom du finner en bevisstlos person som ikke puster normalt. Bruk DHLR-protokollen.',
        hints: ['Ga gjennom hvert trinn i DHLR systematisk', 'Husk a nevne hjertestarter'],
        solution: 'D - Sjekk at omradet er trygt og danne seg et overblikk over situasjonen. Rop pa hjelp. H - Legg hodet i bakoverleie og sjekk at luftveien er fri. Fjern eventuelle fremmedlegemer fra munnen. L - Se, lytt og kjen etter normal pusting i inntil 10 sekunder. Dersom personen ikke puster normalt: R - Ring 113 (eller be noen andre gjore det) og be om at en hjertestarter hentes. Start umiddelbart med HLR: 30 brystkompresjoner etterfulgt av 2 innblasninger. Nar hjertestarteren ankommer, folg instruksjonene fra maskinen. Fortsett HLR til helsepersonell overtar eller personen viser tydelige livstegn.',
      },
    },
    {
      id: 'sik-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-6-3-ex-4',
        number: '6.3.4',
        type: 'classic',
        task: 'Gjor rede for hva sjokk er, hvilke tegn du skal se etter, og hvordan du gir forstehjelp ved sjokk.',
        hints: ['Nevn bade fysiske og psykiske tegn pa sjokk', 'Husk sjokk-leie og varme'],
        solution: 'Sjokk er en livstruende tilstand som oppstar nar kroppen ikke far nok blod og oksygen til de vitale organene. Tegn pa sjokk inkluderer: blek, kald og klam hud, rask og svak puls, rask og overfladisk pusting, forvirring, torste, kvalme og uro. Forstehjelp: Ring 113. Legg personen ned med bena hevet (sjokk-leie). Stans eventuell ytre blodning. Hold personen varm. Ikke gi mat eller drikke. Snakk rolig og beroligende. Overoak pust og bevissthet til hjelpen ankommer.',
      },
    },
    {
      id: 'sik-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-6-3-ex-5',
        number: '6.3.5',
        type: 'classic',
        task: 'En person har falt og har en dypt kutt i underarmen som blor kraftig. Beskriv hvilken forstehjelp du gir.',
        hints: ['Tenk pa trykkbandasje og leiring', 'Hva gjor du dersom blodningen ikke stopper?'],
        solution: 'Legg direkte trykk pa saret med rent torklae eller bandasje. Hold trykket konstant. Dersom det blor gjennom, legg mer materiale opppa uten a fjerne det forste laget. Legg en trykkbandasje. Hev den skadede armen over hjertehoyde for a redusere blodstrommen. Dersom blodningen ikke stopper og blodet spruter (arterielt), hold hardt trykk og ring 113 umiddelbart. Overoak personen for tegn pa sjokk (blek hud, rask puls, forvirring). Hold personen varm og rolig til hjelpen ankommer.',
      },
    },
    {
      id: 'sik-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-6-3-ex-6',
        number: '6.3.6',
        type: 'classic',
        task: 'Forklar hvorfor det er viktig at sikkerhetsarbeidere har god forstehjelpskompetanse. Gi eksempler pa situasjoner der dette kan vaere avgjorende.',
        hints: ['Tenk pa at vektere ofte er forste person pa stedet', 'Tid er kritisk ved hjertestans'],
        solution: 'Sikkerhetsarbeidere er ofte forste person pa stedet ved akutte hendelser og ma kunne handle raskt for helsepersonell ankommer. Eksempler: En vekter pa et kjopesenter oppdager en person med hjertestans - rask igangsetting av HLR og bruk av hjertestarter kan redde liv. En vekter pa et arrangement der noen far en alvorlig skade etter fall - riktig forstehjelp forebygger forverring. En vekter som oppdager en person med alvorlig allergisk reaksjon - gjenkjenning og varsling kan vaere livreddende. Tid er den mest kritiske faktoren, og hvert minutt uten HLR ved hjertestans reduserer sjansen for overlevelse med omtrent 10 prosent.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.4: Ergonomi og belastningsskader
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_6_4: TextbookChapter = {
  id: 'sikkerhetsfag-6-4',
  courseId: 'sikkerhetsfag',
  chapterNumber: '6.4',
  title: 'Ergonomi og belastningsskader',
  description: 'Ergonomiske prinsipper for sikkerhetsarbeidere. Du larer om riktige arbeidsstillinger, lofteteknikk, forebygging av belastningsskader og tilpasning av arbeidsplassen.',
  estimatedMinutes: 20,
  competenceGoals: ['gjore rede for ergonomiske prinsipper og forebygging av belastningsskader'],
  content: [
    {
      id: 'sik-6-4-intro',
      type: 'text',
      content: `## Ergonomi i sikkerhetsbransjen

Ergonomi handler om a tilpasse arbeidet til mennesket for a forebygge skader og belastningslidelser. I sikkerhetsbransjen er ergonomi spesielt viktig fordi arbeidet ofte innebarer:

- Langvarig staende arbeid (dorkontroll, resepsjon)
- Patruljering over lange strekninger
- Sitting foran overvakingsskjermer i flere timer
- Lofting og baring av utstyr
- Arbeid i ubekvemme stillinger

Belastningsskader utvikler seg gjerne over tid og kan fore til langvarig sykefravoer dersom de ikke forebygges. Ved a forstoo ergonomiske prinsipper kan du ta vare pa kroppen din gjennom hele karrieren.`,
    },
    {
      id: 'sik-6-4-def-1',
      type: 'definition',
      title: 'Ergonomi',
      content: `**Ergonomi** er laeren om a tilpasse arbeidet, arbeidsplassen og arbeidsverktoyene til menneskets fysiske og psykiske forutsetninger. Malet er a forebygge skader, redusere belastninger og oke effektiviteten.`,
    },
    {
      id: 'sik-6-4-text-1',
      type: 'text',
      content: `### Riktige arbeidsstillinger

**Staende arbeid:**
- Fordel vekten jevnt pa begge bena
- Hold ryggen rett med naturlig krum i korsryggen
- Skift stilling regelmessig - unnga a sta helt stille
- Bruk sko med god demping og stotte
- Ta korte pauser der du setter deg ned eller beveger deg

**Sittende arbeid (overvaking):**
- Stolen skal vaere stilllbar i hoyde og vinkel
- Foettene skal na gulvet (eller bruk fothviler)
- Ryggen skal ha god stotte, spesielt i korsryggen
- Skjermen skal vaere i oyehoyde og cirka en armlengdes avstand
- Skuldre ned og avslappet - unnga a trekke dem opp
- Ta pauser for a reise deg og bevege deg minst hvert 30. minutt

**Gaaende arbeid (patruljering):**
- Bruk sko med god stotte og demping
- Fordel vekten i utstyrsbeltet jevnt
- Unnga a baere tungt utstyr pa bare en side
- Varier tempoet og ta korte pauser ved behov`,
    },
    {
      id: 'sik-6-4-text-2',
      type: 'text',
      content: `### Lofteteknikk

Feil lofteteknikk er en av de vanligste arsakene til ryggskader i arbeidslivet. Som vekter kan du bli nodt til a lofte utstyr, barrierer, bokser eller i verste fall hjelpe med evakuering av personer.

**Grunnprinsipper for riktig lofting:**

1. **Vurder byrden for du lofter** - er den for tung? Trenger du hjelp?
2. **Still deg nar byrden** med bena i skulderbreddes avstand
3. **Boy knarne, ikke ryggen** - ga ned i kneboyning
4. **Grip godt tak** i byrden med begge hender
5. **Hold byrden inntil kroppen** gjennom hele loftet
6. **Loft med bena** - strekk knarne jevnt
7. **Hold ryggen rett** gjennom hele bevegelsen
8. **Unnga vridning** - flytt foettene i stedet for a vri overkroppen
9. **Sett fra deg pa samme mate** - boy knarne og hold ryggen rett

**Tommelfingerregler:**
- Maks anbefalt loft for en person er ca. 25 kg
- Tunge loft bor utfores av to eller flere personer
- Bruk hjelpmidler som traller, sekker med hjul eller hoftebelte`,
    },
    {
      id: 'sik-6-4-def-2',
      type: 'definition',
      title: 'Belastningsskade',
      content: `**Belastningsskade** er en samlebetegnelse for skader som oppstar gradvis pa grunn av gjentatte paakjenninger eller feil belastning over tid. Vanlige eksempler er muskel- og seneploger i skuldre, nakke og rygg, samt betennelser i ledd og seneskjeder.`,
    },
    {
      id: 'sik-6-4-text-3',
      type: 'text',
      content: `### Forebygging av belastningsskader

**Vanlige belastningsskader i sikkerhetsbransjen:**
- Korsryggsmerter (langvarig staaing eller feil lofting)
- Nakke- og skuldersmerter (sittende arbeid foran skjerm)
- Kneplager (mye gaaing pa hardt underlag)
- Fot- og halsmerter (staende arbeid med darlige sko)
- Musearm og senebetennelse (gjentatte bevegelser)

**Forebyggende tiltak:**

*Variasjon i arbeidet:*
- Varier mellom staende, sittende og gaaende oppgaver
- Bytt arbeidsoppgaver nar det er mulig
- Ta korte pauser med toyning og bevegelse

*Fysisk aktivitet:*
- Hold deg i god fysisk form
- Styrketren for a forebygge skader
- Tay ut etter lengre arbeidsokter
- Varme opp for fysisk krevende oppgaver

*Riktig utstyr:*
- Bruk sko tilpasset arbeidsoppgavene
- Sorg for ergonomisk innrettet arbeidsplass
- Bruk hjelpemidler ved tunge loft
- Sjekk at utstyrsbeltet er riktig justert og ikke for tungt

*Arbeidsorganisering:*
- Planlegg pauser i arbeidsdagen
- Unnga langvarig ensidig belastning
- Meld fra om ergonomiske utfordringer til arbeidsgiver`,
    },
    {
      id: 'sik-6-4-example-1',
      type: 'example',
      title: 'Ergonomisk tilpasning av en kontrollsentral',
      content: `Et sikkerhetsselskap oppdager at operatorene i kontrollsentralen har okt sykefravoer pa grunn av nakke- og ryggplager. De gjennomforer en ergonomisk vurdering og finner flere problemer:

- Skjermene er plassert for lavt, slik at operatorene boyer hodet nedover
- Stolene mangler justerbar korsryggstotte
- Det er ingen fothvilere
- Operatorene sitter i opptil 4 timer uten pause

Tiltak som iverksettes:
1. Skjermene heves til oyehoyde med justerbare skjermarmer
2. Nye kontorsteoler med full justerbarhet anskaffes
3. Fothvilere tilbys alle ansatte
4. Innforing av obligatoriske bevegelsespauser hvert 30. minutt
5. Kurs i ergonomi og taying for alle ansatte

Etter seks maneder er sykefravaret knyttet til muskel- og skjelettplager redusert med 35 prosent.`,
    },
    {
      id: 'sik-6-4-text-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lart:

- **Ergonomi** handler om a tilpasse arbeidet til mennesket for a forebygge skader
- **Riktige arbeidsstillinger** er viktig enten du star, sitter eller gar
- **Lofteteknikk** med bena og rett rygg forebygger ryggskader
- **Belastningsskader** utvikler seg over tid og kan forebygges med variasjon, trening og riktig utstyr
- **Arbeidsgiver** har plikt til a legge til rette for ergonomisk forsvarlig arbeid

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Ergonomi | Tilpasning av arbeid til menneskets forutsetninger |
| Belastningsskade | Skade fra gjentatt eller feil belastning over tid |
| Lofteteknikk | Riktig mate a lofte pa for a forebygge skader |
| Variasjon | Veksling mellom ulike arbeidsstillinger og oppgaver |
| Bevegelsespause | Kort pause for fysisk aktivitet og taying |`,
    },
    {
      id: 'sik-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-6-4-ex-1',
        number: '6.4.1',
        type: 'multiple-choice',
        task: 'Hva er det viktigste prinsippet ved lofting av tunge gjenstander?',
        options: [
          { id: 'a', text: 'Lofte raskt for a fa det overstatt', isCorrect: false },
          { id: 'b', text: 'Boye ryggen og strekke bena', isCorrect: false },
          { id: 'c', text: 'Boye knarne og holde ryggen rett', isCorrect: true },
          { id: 'd', text: 'Holde byrden langt fra kroppen for bedre balanse', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Grunnprinsippet for riktig lofting er a boye i knarne (ikke ryggen) og holde ryggen rett gjennom hele loftet. Byrden skal holdes inntil kroppen, og man skal lofte med bena.',
      },
    },
    {
      id: 'sik-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-6-4-ex-2',
        number: '6.4.2',
        type: 'multiple-choice',
        task: 'Hvor ofte bor man ta bevegelsespauser ved sittende arbeid foran skjerm?',
        options: [
          { id: 'a', text: 'Hvert 10. minutt', isCorrect: false },
          { id: 'b', text: 'Hvert 30. minutt', isCorrect: true },
          { id: 'c', text: 'Hver annen time', isCorrect: false },
          { id: 'd', text: 'Bare i matpausen', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Ved sittende arbeid foran skjerm anbefales det a ta en kort bevegelsespause minst hvert 30. minutt for a forebygge belastningsskader i nakke, skuldre og rygg.',
      },
    },
    {
      id: 'sik-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-6-4-ex-3',
        number: '6.4.3',
        type: 'classic',
        task: 'Beskriv de viktigste prinsippene for riktig lofteteknikk. Bruk minst fem av de ni grunnprinsippene i svaret ditt.',
        hints: ['Tenk pa hele prosessen fra vurdering til nedsetting', 'Husk at ryggen skal vaere rett gjennom hele loftet'],
        solution: 'De viktigste prinsippene for riktig lofteteknikk er: 1) Vurder byrden for du lofter - er den for tung? 2) Still deg naer byrden med bena i skulderbreddes avstand. 3) Boy knarne, ikke ryggen. 4) Grip godt tak med begge hender. 5) Hold byrden inntil kroppen. 6) Loft med bena ved a strekke knarne jevnt. 7) Hold ryggen rett gjennom hele bevegelsen. 8) Unnga vridning - flytt foettene i stedet. 9) Sett fra deg pa samme mate med boyde knar og rett rygg.',
      },
    },
    {
      id: 'sik-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-6-4-ex-4',
        number: '6.4.4',
        type: 'classic',
        task: 'En vekter jobber pa en kontrollsentral og sitter foran overvakingsskjermer i lange perioder. Beskriv hvordan arbeidsplassen bor tilrettelegges ergonomisk, og hvilke tiltak vekteren selv kan gjore for a forebygge belastningsskader.',
        hints: ['Tenk pa stolens innstilling, skjermens plassering og pauserutiner', 'Husk bade arbeidsgivers og arbeidstakers ansvar'],
        solution: 'Arbeidsplassen bor tilrettelegges med: justerbar stol med god korsryggstotte, skjerm i oyehoyde og en armlengdes avstand, fothviler ved behov og god belysning uten gjenskinn i skjermen. Vekteren bor selv: ta bevegelsespauser hvert 30. minutt, gjore nakke- og skulderoyelser regelmessig, sitte med foettene flatt pa gulvet og skuldrene avslappet, justere stolen til riktig hoyde og vinkel, og holde seg i god fysisk form med regelmessig trening utenom jobb.',
      },
    },
    {
      id: 'sik-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-6-4-ex-5',
        number: '6.4.5',
        type: 'classic',
        task: 'Nevn tre vanlige belastningsskader som sikkerhetsarbeidere kan fa, og forklar hva som forarsaker dem.',
        hints: ['Tenk pa ulike arbeidsoppgaver og hvilke kropped som belastes'],
        solution: '1) Korsryggsmerter - forarsakes av langvarig staende arbeid, feil lofteteknikk eller darllige arbeidsstillinger. 2) Nakke- og skuldersmerter - forarsakes av langvarig sittende arbeid foran overvakingsskjermer, spesielt nar skjermen er plassert feil. 3) Kneplager - forarsakes av mye gaaing pa hardt underlag under patruljering, ofte forverret av darlige sko eller for tungt utstyrsbelte.',
      },
    },
    {
      id: 'sik-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-6-4-ex-6',
        number: '6.4.6',
        type: 'classic',
        task: 'Forklar hva ergonomi betyr, og begrunn hvorfor det er viktig at arbeidsgivere i sikkerhetsbransjen prioriterer ergonomiske tiltak.',
        hints: ['Tenk pa bade helsemessige og okonomiske argumenter'],
        solution: 'Ergonomi er laeren om a tilpasse arbeidet og arbeidsplassen til menneskets fysiske og psykiske forutsetninger. Det er viktig at arbeidsgivere prioriterer ergonomi fordi: det reduserer sykefravaret (belastningsskader er en ledende arsak til fravarer i mange bransjer), det er et lovkrav gjennom arbeidsmiljoloven, det oker trivselen og produktiviteten blant ansatte, det forebygger langvarige helseplager som kan fore til uforhet, og det reduserer kostnader knyttet til vikarbruk og rekruttering.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.5: Psykososialt arbeidsmiljo
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_6_5: TextbookChapter = {
  id: 'sikkerhetsfag-6-5',
  courseId: 'sikkerhetsfag',
  chapterNumber: '6.5',
  title: 'Psykososialt arbeidsmiljo',
  description: 'Det psykososiale arbeidsmiljoet handler om de mellommenneskelige forholdene pa arbeidsplassen. Du larer om stress, konflikthondtering, vold og trusler, og hvordan man kan skape et godt psykososialt arbeidsmiljo i sikkerhetsbransjen.',
  estimatedMinutes: 20,
  competenceGoals: ['reflektere over psykososialt arbeidsmiljo og handtering av konflikter'],
  content: [
    {
      id: 'sik-6-5-intro',
      type: 'text',
      content: `## Psykososialt arbeidsmiljo

Det psykososiale arbeidsmiljoet omfatter de psykologiske og sosiale forholdene pa arbeidsplassen. Det handler om hvordan vi har det med hverandre, hvordan vi opplever arbeidssituasjonen, og hvordan vi pavirkes av det vi opplever pa jobb.

For sikkerhetsarbeidere er det psykososiale arbeidsmiljoet spesielt viktig fordi arbeidet ofte innebarer:
- Konfrontasjoner med aggressive eller ruspavirkede personer
- Alenearbeid pa natt og kveld
- Hendelser som kan vaere traumatiske
- Skiftarbeid som pavirker sosiale relasjoner
- Hoy grad av ansvarlighet og papasselighet

Et godt psykososialt arbeidsmiljo er avgjorende for bade trivsel, helse og arbeidsprestasjoner. Arbeidsmiljoloven slor fast at arbeidsmiljoet skal vaere fullt forsvarlig ogsa nar det gjelder psykiske pavirknifaktorer.`,
    },
    {
      id: 'sik-6-5-def-1',
      type: 'definition',
      title: 'Psykososialt arbeidsmiljo',
      content: `**Psykososialt arbeidsmiljo** handler om de psykologiske og sosiale forholdene pa arbeidsplassen. Det omfatter faktorer som relasjoner mellom kolleger og ledere, organisering av arbeidet, grad av medvirkning, arbeidsmengde, rolleklarhet og opplevelse av mening og mestring i arbeidet.`,
    },
    {
      id: 'sik-6-5-text-1',
      type: 'text',
      content: `### Stress i arbeidslivet

Stress oppstar nar kravene vi opplever overstiger ressursene vi har til radighet. I sikkerhetsbransjen kan stress vaere bade akutt (en farlig situasjon) og kronisk (vedvarende hoy arbeidsbelastning over tid).

**Vanlige stressfaktorer i sikkerhetsbransjen:**
- Trusler og vold fra publikum
- Usikkerhet om hva som kan skje pa vakt
- Soemmangel pa grunn av skiftarbeid
- Manglende stotte fra ledelsen
- Darlig utstyr eller for fa folk pa vakt
- Motstridende forventninger fra oppdragsgiver og arbeidsgiver

**Tegn pa stress:**
- Soevnproblemer og tretthet
- Irritabilitet og konsentrasjonsvansker
- Hodepine, muskelspenninger og mageproblemer
- Okt sykefravoer
- Nedsatt arbeidsglede og motivasjon
- Tilbaketrekning fra kolleger

**Forebygging av stress:**
- God arbeidsorganisering med tilstrekkelig bemanning
- Klare rutiner og tydelig ansvarsfordeling
- Stotte og anerkjennelse fra ledelsen
- Mulighet for debriefing etter krevende hendelser
- Kollegastotte og godt samarbeid
- Trening og forberedelse pa utfordrende situasjoner`,
    },
    {
      id: 'sik-6-5-text-2',
      type: 'text',
      content: `### Konflikthondtering pa arbeidsplassen

Konflikter pa arbeidsplassen er normalt, men de ma handteres konstruktivt for a unnga at de eskalerer og skader arbeidsmiljoet. I sikkerhetsbransjen kan konflikter oppsta bade internt (mellom kolleger) og eksternt (med publikum).

**Interne konflikter:**
Konflikter mellom kolleger kan oppsta pa grunn av:
- Uenighet om arbeidsfordeling
- Ulik arbeidsmetodikk
- Kommunikasjonssvikt
- Personlige motsetninger
- Opplevelse av urettferdig behandling

**Strategier for konflikthondtering:**
1. **Ta det opp tidlig** - ikke la konflikter ulme
2. **Snakk med personen direkte** - unnga baksnakking
3. **Lytt til den andre partens perspektiv** - forsoek a forsta
4. **Fokuser pa sak, ikke person** - angrip problemet, ikke mennesket
5. **Soek losninger sammen** - kompromiss eller felles losning
6. **Involver leder om nodvendig** - nar partene ikke klarer a lose det selv

**Mobbing og trakassering:**
Gjentatt negativ behandling av en person over tid er mobbing. Arbeidsgiver har plikt til a forebygge og ta tak i mobbing og trakassering. Tegn pa mobbing inkluderer:
- Systematisk utestengning fra informasjon eller sosialt fellesskap
- Gjentatt urimelig kritikk eller latterliggjoring
- Tilbakeholding av oppgaver eller ansvar
- Spredning av rykter`,
    },
    {
      id: 'sik-6-5-text-3',
      type: 'text',
      content: `### Vold og trusler i sikkerhetsbransjen

Vold og trusler er en av de storste psykososiale utfordringene i sikkerhetsbransjen. Vektere og sikkerhetsarbeidere er blant de yrkesgruppene som er mest utsatt for vold pa arbeidsplassen.

**Typer vold og trusler:**
- *Fysisk vold:* Slag, spark, dytt, kasting av gjenstander
- *Psykisk vold:* Trusler, truende atferd, skremmende oppforsel
- *Verbal vold:* Skjellsord, sjikane, nedsettende kommentarer
- *Materiell vold:* Skade pa utstyr eller eiendeler

**Forebygging av vold og trusler:**
- Grundig risikovurdering av alle oppdrag
- Tilstrekkelig bemanning - unnga alenearbeid i risikosituasjoner
- Opplaring i konflikthondtering og kommunikasjon
- Gode kommunikasjonsrutiner og alarmsystemer
- Mulighet for a tilkalle forsterkninger raskt
- Fysiske barrierer og sikkerhetssluser der det er mulig

**Oppfolging etter hendelser:**
Etter en voldshendelse er god oppfolging avgjorende:
1. Umiddelbar debriefing med leder
2. Mulighet for a ga hjem fra vakt dersom nodvendig
3. Oppfolging av bedriftshelsetjenesten
4. Registrering av hendelsen som avvik
5. Evaluering av tiltakene og eventuell justering
6. Tilbud om profesjonell samtale ved behov`,
    },
    {
      id: 'sik-6-5-example-1',
      type: 'example',
      title: 'Debriefing etter en alvorlig hendelse',
      content: `To vektere ble utsatt for en trussel med kniv under en nattevakt pa et utested. Situasjonen ble lost uten fysisk skade, men begge vekterne er preget av opplevelsen.

Slik handterer selskapet oppfolgingen:

**Umiddelbart (samme natt):**
- Vaktleder kommer til stedet og gjennomforer en kort samtale
- Hendelsen rapporteres og politianmeldelse vurderes
- Vekterne tilbys a avslutte vakten og bli kjoert hjem

**Neste dag:**
- Leder ringer begge vekterne for a hore hvordan de har det
- Det planlegges en formell debriefing med bedriftshelsetjenesten

**Innen en uke:**
- Formell debriefing gjennomfores der vekterne far gjennomga hendelsen
- Tiltakene evalueres: Bor bemanningen okes pa dette utestedet?
- Avviksmelding registreres i HMS-systemet

**Videre oppfolging:**
- Vekterne informeres om tilbudet om profesjonell samtale
- Ledelsen folger opp med jevnlige samtaler de neste ukene
- Erfaringene brukes til a oppdatere opplaeringsopplegget`,
    },
    {
      id: 'sik-6-5-text-4',
      type: 'text',
      content: `### Skape et godt psykososialt arbeidsmiljo

Et godt psykososialt arbeidsmiljo bygges gjennom systematisk arbeid og bevisste valg, bade fra ledelsen og de ansatte.

**Ledelsens ansvar:**
- Vaere synlig og tilgjengelig for de ansatte
- Gi tydelige tilbakemeldinger og anerkjennelse
- Sikre god informasjonsflyt
- Handtere konflikter og problemer tidlig
- Legge til rette for faglig utvikling
- Ha systemer for oppfolging etter krevende hendelser

**Ansattes bidrag:**
- Vaere en god kollega og stotte hverandre
- Kommunisere apent og aerlig
- Ta opp problemer konstruktivt
- Delta aktivt i arbeidsmiljoarbeidet
- Melde fra om uakseptable forhold
- Bidra til en positiv arbeidskultur

**Kollegastotte:**
I sikkerhetsbransjen er kollegastotte spesielt viktig. Det handler om a:
- Vaere oppmerksom pa hvordan kollegene har det
- Tilby stotte etter vanskelige hendelser
- Dele erfaringer og tips
- Stille opp for hverandre i krevende situasjoner`,
    },
    {
      id: 'sik-6-5-text-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lart:

- **Psykososialt arbeidsmiljo** handler om de psykologiske og sosiale forholdene pa arbeidsplassen
- **Stress** kan vaere bade akutt og kronisk, og kan forebygges gjennom god arbeidsorganisering
- **Konflikter** ma handteres konstruktivt og tidlig for a unnga eskalering
- **Vold og trusler** er en stor utfordring i sikkerhetsbransjen og krever forebygging og god oppfolging
- **Debriefing** og kollegastotte er viktige verktoy etter krevende hendelser

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Psykososialt arbeidsmiljo | Psykologiske og sosiale forhold pa jobb |
| Stress | Ubalanse mellom krav og ressurser |
| Debriefing | Strukturert gjennomgang etter en hendelse |
| Konflikthondtering | Konstruktiv losning av uenigheter |
| Kollegastotte | Gjensidig stotte mellom kolleger |`,
    },
    {
      id: 'sik-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-6-5-ex-1',
        number: '6.5.1',
        type: 'multiple-choice',
        task: 'Hva er psykososialt arbeidsmiljo?',
        options: [
          { id: 'a', text: 'De fysiske forholdene pa arbeidsplassen, som temperatur og belysning', isCorrect: false },
          { id: 'b', text: 'De psykologiske og sosiale forholdene pa arbeidsplassen', isCorrect: true },
          { id: 'c', text: 'Regler for psykisk helse i arbeidsmiljoloven', isCorrect: false },
          { id: 'd', text: 'Trening og fysisk aktivitet i arbeidstiden', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Psykososialt arbeidsmiljo handler om de psykologiske og sosiale forholdene pa arbeidsplassen, inkludert relasjoner, arbeidsmengde, rolleklarhet og opplevelse av mening og mestring.',
      },
    },
    {
      id: 'sik-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-6-5-ex-2',
        number: '6.5.2',
        type: 'multiple-choice',
        task: 'Hva bor vaere det forste steget i oppfolgingen etter at en vekter har vaert utsatt for en voldshendelse?',
        options: [
          { id: 'a', text: 'Sende en skriftlig rapport til oppdragsgiver', isCorrect: false },
          { id: 'b', text: 'Umiddelbar debriefing med leder og mulighet for a ga hjem', isCorrect: true },
          { id: 'c', text: 'Gjennomfore en formell evaluering av sikkerhetstiltakene', isCorrect: false },
          { id: 'd', text: 'Kontakte media for a advare publikum', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Etter en voldshendelse er det viktigste forste steget a sikre at den berarte far umiddelbar stotte gjennom debriefing med leder, samt muligheten til a avslutte vakten og bli kjoert hjem dersom det er nodvendig.',
      },
    },
    {
      id: 'sik-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-6-5-ex-3',
        number: '6.5.3',
        type: 'classic',
        task: 'Gjor rede for hva stress er, og beskriv minst fire vanlige stressfaktorer som er spesielt relevante for sikkerhetsarbeidere.',
        hints: ['Tenk pa bade akutt og kronisk stress', 'Hva gjor sikkerhetsarbeid spesielt belastende?'],
        solution: 'Stress oppstar nar kravene vi opplever overstiger ressursene vi har til radighet. Vanlige stressfaktorer for sikkerhetsarbeidere inkluderer: 1) Trusler og vold fra publikum - usikkerhet om hva som kan skje. 2) Soevnmangel pa grunn av skiftarbeid og nattevakter. 3) Alenearbeid pa kveld og natt som gir en ekstra psykisk belastning. 4) Manglende stotte fra ledelsen eller for fa kolleger pa vakt. 5) Motstridende forventninger fra oppdragsgiver og arbeidsgiver. 6) Gjentatte traumatiske opplevelser over tid.',
      },
    },
    {
      id: 'sik-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-6-5-ex-4',
        number: '6.5.4',
        type: 'classic',
        task: 'Beskriv hvordan en arbeidsplass i sikkerhetsbransjen kan forebygge vold og trusler mot sine ansatte. Nevn minst fem tiltak.',
        hints: ['Tenk pa bade organisatoriske og praktiske tiltak', 'Husk at forebygging skjer pa flere nivaver'],
        solution: 'En arbeidsplass i sikkerhetsbransjen kan forebygge vold og trusler gjennom: 1) Grundig risikovurdering av alle oppdrag for a identifisere risikosituasjoner. 2) Tilstrekkelig bemanning - unnga alenearbeid i risikosituasjoner. 3) Opplaring i konflikthondtering og kommunikasjonsteknikker. 4) Gode kommunikasjonsrutiner og alarmsystemer slik at forsterkninger kan tilkalles raskt. 5) Fysiske barrierer og sikkerhetssluser der det er mulig. 6) Klare rutiner for rapportering og oppfolging av hendelser. 7) Regelmessig trening og ovelser pa ulike scenarioer.',
      },
    },
    {
      id: 'sik-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-6-5-ex-5',
        number: '6.5.5',
        type: 'classic',
        task: 'To kolleger i et vaktselskap har en pallaopende konflikt som pavirker arbeidsmiljoet. Forklar hvordan konflikten bor handteres, og begrunn tiltakene du foreslar.',
        hints: ['Tenk pa de seks strategiene for konflikthondtering', 'Nar bor leder involveres?'],
        solution: 'Konflikten bor handteres ved at: 1) Partene oppfordres til a snakke sammen direkte, med fokus pa sak og ikke person. 2) De bor lytte til hverandres perspektiver og forsoke a forsta bakgrunnen for uenigheten. 3) Sammen bor de forsoke a finne en losning eller et kompromiss. 4) Dersom partene ikke klarer a lose konflikten selv, bor leder involveres som megler. 5) Lederen bor gjennomfore samtaler med begge parter, bade individuelt og samlet. 6) Det bor lages en avtale om hvordan man gar videre. Det er viktig a handtere konflikten tidlig for a unnga at den eskalerer og pavirker hele arbeidsmiljoet negativt.',
      },
    },
    {
      id: 'sik-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-6-5-ex-6',
        number: '6.5.6',
        type: 'classic',
        task: 'Diskuter hva kollegastotte betyr i sikkerhetsbransjen, og forklar hvorfor dette er spesielt viktig i denne bransjen sammenliknet med andre yrker.',
        hints: ['Tenk pa arbeidets natur og belastningene det medforer', 'Hva gjor kollegastotte i praksis?'],
        solution: 'Kollegastotte betyr a vaere oppmerksom pa hvordan kollegene har det, tilby stotte etter vanskelige hendelser, dele erfaringer og stille opp i krevende situasjoner. Dette er spesielt viktig i sikkerhetsbransjen fordi: arbeidet innebarer situasjoner som kan vaere traumatiske (vold, trusler, ulykker), mange jobber alene eller i sma team, skiftarbeid gjor det vanskeligere a opprettholde andre sosiale nettverk, og de ansatte deler erfaringer som kan vaere vanskelig a forstaa for utenforstaaende. God kollegastotte bidrar til lavere sykefravoer, bedre evne til a handtere stressende situasjoner og en sterkere opplevelse av tilhorighet og trygghet pa jobb.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SIKKERHETSFAG_DEL6_CHAPTERS = [
  CHAPTER_SIKKERHETSFAG_6_1,
  CHAPTER_SIKKERHETSFAG_6_2,
  CHAPTER_SIKKERHETSFAG_6_3,
  CHAPTER_SIKKERHETSFAG_6_4,
  CHAPTER_SIKKERHETSFAG_6_5,
];
